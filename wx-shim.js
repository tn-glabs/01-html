/* ============================================================
   wx-shim.js — WeChat Mini-Game API polyfill for running in a browser
   - Replaces libs/weapp-adapter.js
   - Stubs wx.* APIs with browser equivalents or no-ops
   - Hardcodes version1718969302.json so the game boots without
     needing the remote CDN.
   Serve this folder with any static server (e.g. `npx serve`).
   ============================================================ */
(function (global) {
  "use strict";

  /* ---------- Canvas setup ---------- */
  var mainCanvas = document.getElementById("canvas");
  if (!mainCanvas) {
    mainCanvas = document.createElement("canvas");
    mainCanvas.id = "canvas";
    document.body.appendChild(mainCanvas);
  }
  function sizeCanvas() {
    mainCanvas.width = Math.floor(window.innerWidth * Math.min(2, window.devicePixelRatio || 1));
    mainCanvas.height = Math.floor(window.innerHeight * Math.min(2, window.devicePixelRatio || 1));
    mainCanvas.style.width = window.innerWidth + "px";
    mainCanvas.style.height = window.innerHeight + "px";
  }
  sizeCanvas();
  global.canvas = mainCanvas;
  global.GameGlobal = global;

  /* ---------- Image fallback ----------
     The game looks up MD5-hashed files under resm/ via version1718969302.json.
     Most of those files are not available locally — when they 404, redirect
     to an existing placeholder so THREE/PIXI textures don't crash. */
  var RESM_FALLBACK_PNG = "./resm/f4f6620132bfa11fdbd565c60ce5d6a8.png";
  var RESM_FALLBACK_JSON = "./resm/018faf8a932abdfcfd0e743bb3d4a9dd.json";
  var _RealImage = global.Image;
  function PatchedImage(w, h) {
    var img = (w === undefined) ? new _RealImage() : new _RealImage(w, h);
    try { img.crossOrigin = "anonymous"; } catch (_) {}
    img.addEventListener("error", function () {
      if (img._fellback) return;
      var src = img.src || "";
      if (/\/resm\//.test(src) && /\.(png|jpg|jpeg|webp)(\?|$)/i.test(src)) {
        img._fellback = true;
        img.src = RESM_FALLBACK_PNG;
      }
    });
    return img;
  }
  PatchedImage.prototype = _RealImage.prototype;
  global.Image = PatchedImage;

  /* ---------- fetch fallback for resm/ JSON ---------- */
  var _origFetch = global.fetch ? global.fetch.bind(global) : null;
  if (_origFetch) {
    global.fetch = function (input, init) {
      var url = (typeof input === "string") ? input : (input && input.url) || "";
      return _origFetch(input, init).then(function (res) {
        if (res.ok) return res;
        if (/\/resm\/.*\.json(\?|$)/i.test(url)) return _origFetch(RESM_FALLBACK_JSON, init);
        if (/\/resm\/.*\.(png|jpg|jpeg|webp)(\?|$)/i.test(url)) return _origFetch(RESM_FALLBACK_PNG, init);
        return res;
      });
    };
  }

  /* ---------- Hardcoded version data ---------- */
  var VERSION_DATA_URL_RE = /version\/version1718969302\.json$/;
  var VERSION_DATA = null; // filled below

  /* ---------- localStorage-based wx.*Storage ----------
     Emulates WeChat type-preserving storage using a 2-char tag:
       "S:<text>"  → stored was a string (returned verbatim)
       "J:<json>"  → stored was a non-string JS value (auto-parsed)
     Unprefixed entries from an older/buggy shim are migrated once. */
  try {
    for (var _i = 0; _i < localStorage.length; _i++) {
      var _k = localStorage.key(_i);
      var _v = localStorage.getItem(_k);
      if (_v != null && !(_v.length >= 2 && _v[1] === ":" && (_v[0] === "S" || _v[0] === "J"))) {
        localStorage.setItem(_k, "S:" + _v);
      }
    }
  } catch (_) {}
  function storageGet(k) {
    try {
      var raw = localStorage.getItem(k);
      if (raw == null) return "";
      if (raw.length >= 2 && raw[1] === ":") {
        var tag = raw[0], body = raw.slice(2);
        if (tag === "S") return body;
        if (tag === "J") { try { return JSON.parse(body); } catch (_) { return ""; } }
      }
      return raw;
    } catch (_) { return ""; }
  }
  function storageSet(k, v) {
    try {
      if (typeof v === "string") localStorage.setItem(k, "S:" + v);
      else localStorage.setItem(k, "J:" + JSON.stringify(v));
    } catch (_) {}
  }
  function storageRemove(k) { try { localStorage.removeItem(k); } catch (_) {} }

  /* Force sound + vibrate enabled on every load so a previously-muted session
     doesn't persist. (User can still toggle in the in-game settings.) */
  try {
    var _s = storageGet("settings");
    if (!_s || typeof _s !== "object") _s = {};
    _s.audio = true;
    _s.vibrate = true;
    if (_s.quality === undefined) _s.quality = true;
    storageSet("settings", _s);
  } catch (_) {}

  /* ---------- Minimal FileSystemManager stub ----------
     Throw on mkdir / read so bridge.js sets `$r = true` and
     falls back to HTTP for resource/version loading. */
  // Plain object (not Error) → console.warn won't print a noisy stack trace
  function FSFail(msg) { return { errMsg: msg || "fs not supported" }; }
  var FileSystemManager = {
    accessSync: function () { throw FSFail("access:fail"); },
    mkdirSync: function () { throw FSFail("mkdir:fail"); },
    readdirSync: function () { throw FSFail("readdir:fail"); },
    statSync: function () { throw FSFail("stat:fail"); },
    unlinkSync: function () {},
    unlink: function (o) { o && o.fail && o.fail({ errMsg: "unlink:fail" }); },
    readFile: function (o) {
      o = o || {};
      // Treat filePath as an HTTP URL (local/relative/absolute) — fetch it.
      fetch(o.filePath).then(function (res) {
        if (!res.ok) throw new Error("http " + res.status);
        var p = o.encoding ? res.text() : res.arrayBuffer();
        return p.then(function (data) {
          o.success && o.success({ data: data });
          o.complete && o.complete();
        });
      }).catch(function (err) {
        o.fail && o.fail({ errMsg: "readFile:fail " + ((err && err.message) || "") });
        o.complete && o.complete();
      });
    },
    writeFile: function (o) { o && o.success && o.success({}); o && o.complete && o.complete(); },
    getFileInfo: function (o) { o && o.fail && o.fail({ errMsg: "getFileInfo:fail" }); },
    saveFile: function (o) { o && o.success && o.success({ savedFilePath: (o && o.tempFilePath) || "" }); o && o.complete && o.complete(); }
  };

  /* ---------- Audio unlock — browsers block Audio.play() until user gesture.
     Track all InnerAudioContext instances and retry their last play() once
     the user taps the page. */
  var _pendingAudios = [];
  var _audioUnlocked = false;
  function _tryPlay(a) {
    try {
      var p = a.play();
      if (p && typeof p.catch === "function") p.catch(function (err) { console.warn("[audio] play rejected:", a.src, err && err.name); });
    } catch (err) { console.warn("[audio] play threw:", a.src, err); }
  }
  function _unlockAudio() {
    if (_audioUnlocked) return;
    _audioUnlocked = true;
    console.log("[audio] unlocked — flushing", _pendingAudios.length, "pending");
    for (var i = 0; i < _pendingAudios.length; i++) {
      var item = _pendingAudios[i];
      if (item && item._wantPlay) _tryPlay(item._audio);
    }
    _pendingAudios = [];
  }
  window.addEventListener("pointerdown", _unlockAudio, true);
  window.addEventListener("touchstart",  _unlockAudio, true);
  window.addEventListener("mousedown",   _unlockAudio, true);
  window.addEventListener("click",       _unlockAudio, true);
  window.addEventListener("keydown",     _unlockAudio, true);

  /* ---------- InnerAudioContext → HTML Audio ---------- */
  function InnerAudioContext() {
    var a = new Audio();
    a.preload = "auto";
    a.crossOrigin = "anonymous";
    // WeChat uses `src`, `volume`, `loop`, `play()`, `pause()`, `stop()`, `destroy()`, `onPlay/onEnded/onError`
    var wrap = {
      _audio: a,
      _wantPlay: false,
      src: "",
      volume: 1,
      loop: false,
      autoplay: false,
      startTime: 0,
      play: function () {
        wrap._wantPlay = true;
        if (_audioUnlocked) _tryPlay(a);
        else if (_pendingAudios.indexOf(wrap) < 0) _pendingAudios.push(wrap);
      },
      pause: function () { wrap._wantPlay = false; try { a.pause(); } catch (_) {} },
      stop: function () { wrap._wantPlay = false; try { a.pause(); a.currentTime = 0; } catch (_) {} },
      seek: function (t) { try { a.currentTime = t; } catch (_) {} },
      destroy: function () { wrap._wantPlay = false; try { a.pause(); a.src = ""; } catch (_) {} },
      onPlay: function (cb) { a.addEventListener("play", cb); },
      onPause: function (cb) { a.addEventListener("pause", cb); },
      onEnded: function (cb) { a.addEventListener("ended", cb); },
      onStop: function (cb) { a.addEventListener("pause", cb); },
      onError: function (cb) { a.addEventListener("error", cb); },
      onCanplay: function (cb) { a.addEventListener("canplay", cb); },
      onWaiting: function (cb) { a.addEventListener("waiting", cb); },
      onSeeking: function () {},
      onSeeked: function () {},
      onTimeUpdate: function (cb) { a.addEventListener("timeupdate", cb); },
      offPlay: function () {}, offPause: function () {}, offEnded: function () {},
      offStop: function () {}, offError: function () {}, offCanplay: function () {},
      offWaiting: function () {}, offTimeUpdate: function () {}
    };
    Object.defineProperty(wrap, "src", {
      get: function () { return a.src; },
      set: function (v) { a.src = v; if (wrap.autoplay) { wrap._wantPlay = true; if (_audioUnlocked) _tryPlay(a); else if (_pendingAudios.indexOf(wrap) < 0) _pendingAudios.push(wrap); } }
    });
    Object.defineProperty(wrap, "volume", {
      get: function () { return a.volume; },
      set: function (v) { a.volume = Math.max(0, Math.min(1, v)); }
    });
    Object.defineProperty(wrap, "loop", {
      get: function () { return a.loop; },
      set: function (v) { a.loop = !!v; }
    });
    Object.defineProperty(wrap, "duration", { get: function () { return a.duration || 0; } });
    Object.defineProperty(wrap, "currentTime", {
      get: function () { return a.currentTime; },
      set: function (v) { try { a.currentTime = v; } catch (_) {} }
    });
    Object.defineProperty(wrap, "paused", { get: function () { return a.paused; } });
    return wrap;
  }

  /* ---------- Empty "button" stubs (userinfo / feedback) ---------- */
  function fakeButton() {
    return {
      show: function () {}, hide: function () {}, destroy: function () {},
      onTap: function () {}, offTap: function () {},
      style: {}
    };
  }

  /* ---------- Ad stubs ----------
     Rewarded video: show() resolves, onClose fires with {isEnded:true}
     so the game grants the reward. Interstitial/banner just succeed.

     // Previous stub (ads always failed):
     // function fakeAd(kind) {
     //   return {
     //     load: function () { return Promise.resolve(); },
     //     show: function () { return Promise.reject({ errMsg: kind + ":no ad" }); },
     //     onClose: function () {}, onLoad: function () {}, onError: function () {},
     //     ...
     //   };
     // }
  */
  function fakeAd(kind) {
    var loadHandlers = [];
    var closeHandlers = [];
    var ad = {
      _kind: kind,
      load: function () {
        setTimeout(function () {
          loadHandlers.forEach(function (f) { try { f(); } catch (_) {} });
        }, 0);
        return Promise.resolve();
      },
      show: function () {
        // "Watched full ad" → fire close with isEnded:true so reward triggers
        setTimeout(function () {
          closeHandlers.forEach(function (f) {
            try { f(kind === "reward" ? { isEnded: true } : undefined); } catch (_) {}
          });
        }, 50);
        return Promise.resolve();
      },
      hide: function () { return Promise.resolve(); },
      destroy: function () {},
      onLoad:   function (cb) { if (typeof cb === "function") loadHandlers.push(cb); },
      offLoad:  function (cb) { loadHandlers = loadHandlers.filter(function (f) { return f !== cb; }); },
      onError:  function () {},
      offError: function () {},
      onClose:  function (cb) { if (typeof cb === "function") closeHandlers.push(cb); },
      offClose: function (cb) { closeHandlers = closeHandlers.filter(function (f) { return f !== cb; }); },
      onResize: function () {},
      offResize:function () {},
      style: { left: 0, top: 0, width: 0, height: 0, realWidth: 0, realHeight: 0 }
    };
    // Fire onLoad immediately for "already loaded" semantics
    setTimeout(function () {
      loadHandlers.forEach(function (f) { try { f(); } catch (_) {} });
    }, 0);
    return ad;
  }

  /* ---------- Life-cycle event dispatcher ---------- */
  var showCbs = [], hideCbs = [], errorCbs = [];
  function _launchOpts() { return { scene: 1001, query: {}, shareTicket: "", referrerInfo: {} }; }
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") showCbs.forEach(function(f){ try{f(_launchOpts());}catch(_){} });
    else hideCbs.forEach(function(f){ try{f();}catch(_){} });
  });
  window.addEventListener("error", function (e) {
    errorCbs.forEach(function(f){ try{f({ message: e.message || "", stack: (e.error && e.error.stack) || "" });}catch(_){} });
  });

  /* ---------- wx.request ---------- */
  function wxRequest(opt) {
    opt = opt || {};
    var url = opt.url || "";
    var method = (opt.method || "GET").toUpperCase();

    // Hardcoded version file response
    if (VERSION_DATA_URL_RE.test(url)) {
      Promise.resolve().then(function () {
        opt.success && opt.success({ data: VERSION_DATA, statusCode: 200, header: {} });
        opt.complete && opt.complete();
      });
      return { abort: function () {} };
    }

    // Stub host.json — provide sensible defaults so home UI (coin button,
    // banner, etc.) isn't hidden by missing config flags.
    if (/ver\.i51game\.com.*host\.json/.test(url)) {
      Promise.resolve().then(function () {
        opt.success && opt.success({
          data: {
            global: {
              api: "api",
              censor: false,
              shareRevive: false,
              shareDays: 0,
              showPacket: false,
              bannerAd: false,
              coinGiftTip: false,
              coinTime: 0,
              gameInterstitialSecond: 99999,
              dailyForceVideoCount: 10,
              maxExpertId: 0,
              expertOpenList: [],
              expertMaps: [],
              replaceVideoRevive: false,
              shareSkin: false
            },
            version: {}
          },
          statusCode: 200,
          header: {}
        });
        opt.complete && opt.complete();
      });
      return { abort: function () {} };
    }

    // Stub bridge.i51game.com (login / game protocol) → fail gracefully
    if (/bridge\.i51game\.com/.test(url)) {
      setTimeout(function () {
        opt.fail && opt.fail({ errMsg: "request:fail stub" });
        opt.complete && opt.complete();
      }, 0);
      return { abort: function () {} };
    }

    // Stub analysis.i51game.com (telemetry) → return 200 silently, no network
    if (/analysis\.i51game\.com/.test(url)) {
      Promise.resolve().then(function () {
        opt.success && opt.success({ data: {}, statusCode: 200, header: {} });
        opt.complete && opt.complete();
      });
      return { abort: function () {} };
    }

    // Pass-through via fetch() for anything else (local JSON, etc.)
    var ctrl = ("AbortController" in window) ? new AbortController() : null;
    var fetchOpt = { method: method, signal: ctrl && ctrl.signal };
    if (opt.header) fetchOpt.headers = opt.header;
    if (opt.data && method !== "GET") fetchOpt.body = typeof opt.data === "string" ? opt.data : JSON.stringify(opt.data);

    var fullUrl = url;
    if (method === "GET" && opt.data) {
      var qs = Object.keys(opt.data).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(opt.data[k]);
      }).join("&");
      if (qs) fullUrl += (url.indexOf("?") >= 0 ? "&" : "?") + qs;
    }

    fetch(fullUrl, fetchOpt).then(function (res) {
      var ct = res.headers.get("content-type") || "";
      var p = (opt.dataType === "json" || ct.indexOf("json") >= 0) ? res.json() : res.text();
      return p.then(function (data) {
        opt.success && opt.success({ data: data, statusCode: res.status, header: {} });
        opt.complete && opt.complete();
      });
    }).catch(function (err) {
      opt.fail && opt.fail({ errMsg: (err && err.message) || "request:fail" });
      opt.complete && opt.complete();
    });

    return { abort: function () { ctrl && ctrl.abort(); } };
  }

  /* ---------- wx.downloadFile — redirect to same URL, no local path ---------- */
  function wxDownloadFile(opt) {
    opt = opt || {};
    fetch(opt.url).then(function (res) {
      if (!res.ok) throw new Error("http " + res.status);
      opt.success && opt.success({ tempFilePath: opt.url, statusCode: res.status });
      opt.complete && opt.complete();
    }).catch(function (err) {
      opt.fail && opt.fail({ errMsg: (err && err.message) || "downloadFile:fail" });
      opt.complete && opt.complete();
    });
    return { abort: function () {} };
  }

  /* ---------- UI helpers (toast/modal/loading) ---------- */
  function wxShowToast(o) {
    console.log("[toast]", o && o.title);
  }
  function wxShowModal(o) {
    var ok = window.confirm((o && o.content) || "");
    o && o.success && o.success({ confirm: ok, cancel: !ok });
  }
  function wxShowLoading(o) { console.log("[loading]", o && o.title); }
  function wxHideLoading() {}

  /* ---------- subpackage loader — loads dlc/<name>/game.js via <script> ---------- */
  function wxLoadSubpackage(o) {
    o = o || {};
    var s = document.createElement("script");
    s.src = (o.name ? o.name : "") + "/game.js";
    s.onload = function () { o.success && o.success(); o.complete && o.complete(); };
    s.onerror = function () { o.fail && o.fail({ errMsg: "loadSubpackage:fail" }); o.complete && o.complete(); };
    document.head.appendChild(s);
    return {
      onProgressUpdate: function (cb) { setTimeout(function(){ cb({ progress: 100, totalBytesWritten: 1, totalBytesExpectedToWrite: 1 }); }, 0); }
    };
  }

  /* ---------- Build the wx namespace ---------- */
  var wx = {
    env: { USER_DATA_PATH: "userdata" },

    /* Canvas / Image */
    createCanvas: function () {
      var c = document.createElement("canvas");
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      return c;
    },
    createImage: function () { var img = new Image(); img.crossOrigin = "anonymous"; return img; },
    createInnerAudioContext: InnerAudioContext,

    /* System info */
    getSystemInfoSync: function () {
      var dpr = Math.min(2, window.devicePixelRatio || 1);
      return {
        platform: "devtools",
        system: navigator.platform || "browser",
        version: "1.0.0",
        model: "Browser",
        brand: "browser",
        language: navigator.language || "en",
        pixelRatio: dpr,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        statusBarHeight: 0,
        SDKVersion: "2.19.0",
        benchmarkLevel: 30
      };
    },
    getLaunchOptionsSync: function () { return { scene: 1001, query: {}, shareTicket: "", referrerInfo: {} }; },

    /* Life-cycle */
    onShow: function (cb) { showCbs.push(cb); },
    offShow: function (cb) { showCbs = showCbs.filter(function (f) { return f !== cb; }); },
    onHide: function (cb) { hideCbs.push(cb); },
    onError: function (cb) { errorCbs.push(cb); },

    /* Storage */
    getStorageSync: storageGet,
    setStorageSync: storageSet,
    removeStorageSync: storageRemove,
    setStorage: function (o) { storageSet(o.key, o.data); o.success && o.success({}); o.complete && o.complete(); },
    removeStorage: function (o) { storageRemove(o.key); o.success && o.success({}); o.complete && o.complete(); },

    /* FileSystem */
    getFileSystemManager: function () { return FileSystemManager; },

    /* Network */
    request: wxRequest,
    downloadFile: wxDownloadFile,

    /* Login / cloud — all stubs */
    login: function (o) { setTimeout(function () { o && o.fail && o.fail({ errMsg: "login:fail stub" }); o && o.complete && o.complete(); }, 0); },
    checkSession: function (o) { setTimeout(function () { o && o.fail && o.fail({ errMsg: "checkSession:fail stub" }); o && o.complete && o.complete(); }, 0); },
    getUserInfo: function (o) { o && o.fail && o.fail({ errMsg: "getUserInfo:fail" }); o && o.complete && o.complete(); },
    setUserCloudStorage: function (o) { o && o.success && o.success({}); o && o.complete && o.complete(); },
    removeUserCloudStorage: function (o) { o && o.success && o.success({}); o && o.complete && o.complete(); },

    /* Share / menu */
    shareAppMessage: function () {},
    onShareAppMessage: function (cb) { /* ignored */ },
    showShareMenu: function () {},
    hideShareMenu: function () {},

    /* UI */
    showToast: wxShowToast,
    hideToast: function () {},
    showLoading: wxShowLoading,
    hideLoading: wxHideLoading,
    showModal: wxShowModal,

    /* Ads / buttons */
    createRewardedVideoAd: function () { return fakeAd("reward"); },
    createBannerAd: function () { return fakeAd("banner"); },
    createInterstitialAd: function () { return fakeAd("interstitial"); },
    createFeedbackButton: function () { return fakeButton(); },
    createUserInfoButton: function () { return fakeButton(); },
    createGameClubButton: function () { return fakeButton(); },

    /* Misc */
    vibrateShort: function (o) { if (navigator.vibrate) navigator.vibrate(15); o && o.success && o.success(); },
    vibrateLong: function (o) { if (navigator.vibrate) navigator.vibrate(400); o && o.success && o.success(); },
    triggerGC: function () {},
    exitMiniProgram: function () { window.close(); },
    restartMiniProgram: function () { window.location.reload(); },
    navigateToMiniProgram: function (o) { o && o.fail && o.fail({ errMsg: "navigateToMiniProgram:stub" }); },
    getUpdateManager: function () {
      return {
        onCheckForUpdate: function () {}, onUpdateReady: function () {}, onUpdateFailed: function () {}, applyUpdate: function () {}
      };
    },
    loadSubpackage: wxLoadSubpackage,

    /* Open-data context (friend rank) — stub */
    getOpenDataContext: function () {
      var c = document.createElement("canvas");
      c.width = 680; c.height = 850;
      return { canvas: c, postMessage: function () {} };
    }
  };

  global.wx = wx;

  /* ---------- Resize handler keeps canvas sane on orientation change ---------- */
  window.addEventListener("resize", sizeCanvas);

  /* ==========================================================
     Hardcoded version data (version/version1718969302.json)
     Rewrite fileObj so every file maps to a locally-available md5 —
     avoids 404s for any .png / .json request. Other extensions
     (jpg, bin, gltf, obj, mp3) still may 404 but the Image/fetch
     fallback above handles it.
     ========================================================== */
  // NOTE: we used to remap every .png/.json hash in fileObj to a single
  // placeholder so all resource requests would hit the 2 files that were
  // available locally. Now that `download-resm.sh` can populate resm/
  // with the real CDN files, keep the original mapping and rely on the
  // Image-onerror + fetch fallbacks (already installed above) for any
  // files that are still missing. To re-enable aggressive remapping, set
  // window.__REMAP_RESM__ = true before wx-shim.js loads.
  if (global.__REMAP_RESM__) {
    try {
      var LOCAL_PNG_HASHES = ["f4f6620132bfa11fdbd565c60ce5d6a8", "d0486590908a57e448ab23ea17ebe0d7"];
      var LOCAL_JSON_HASH  = "018faf8a932abdfcfd0e743bb3d4a9dd";
      if (VERSION_JSON_DATA && VERSION_JSON_DATA.body && VERSION_JSON_DATA.body.fileObj) {
        var fo = VERSION_JSON_DATA.body.fileObj;
        var pick = 0;
        for (var _fk in fo) {
          if (!fo.hasOwnProperty(_fk)) continue;
          if (/\.png$/i.test(_fk))        fo[_fk] = LOCAL_PNG_HASHES[(pick++) % LOCAL_PNG_HASHES.length];
          else if (/\.jpe?g$/i.test(_fk)) fo[_fk] = LOCAL_PNG_HASHES[0];
          else if (/\.json$/i.test(_fk))  fo[_fk] = LOCAL_JSON_HASH;
        }
      }
    } catch (_) {}
  }
  VERSION_DATA = VERSION_JSON_DATA;
})(window);

/* The raw version JSON is loaded from a separate file to keep this
   shim readable. It must be assigned to window.VERSION_JSON_DATA
   BEFORE wx-shim.js runs. See version-data.js. */
