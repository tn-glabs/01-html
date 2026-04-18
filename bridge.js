! function() {
  "use strict";
  var t = {};
  t.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (t) {
      if ("object" == typeof window) return window
    }
  }();
  var e = function(t, n) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array && function(t, e) {
      t.__proto__ = e
    } || function(t, e) {
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
    }, e(t, n)
  };

  function n(t, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

    function i() {
      this.constructor = t
    }
    e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
  }
  var i = function() {
    return i = Object.assign || function(t) {
      for (var e, n = 1, i = arguments.length; n < i; n++)
        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t
    }, i.apply(this, arguments)
  };

  function o(t, e, n, i) {
    var o, r = arguments.length,
      s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
    else
      for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
    return r > 3 && s && Object.defineProperty(e, n, s), s
  }

  function r(t, e, n, i) {
    return new(n || (n = Promise))((function(o, r) {
      function s(t) {
        try {
          u(i.next(t))
        } catch (t) {
          r(t)
        }
      }

      function a(t) {
        try {
          u(i.throw(t))
        } catch (t) {
          r(t)
        }
      }

      function u(t) {
        var e;
        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
          t(e)
        }))).then(s, a)
      }
      u((i = i.apply(t, e || [])).next())
    }))
  }

  function s(t, e) {
    var n, i, o, r, s = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return r = {
      next: a(0),
      throw: a(1),
      return: a(2)
    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
      return this
    }), r;

    function a(a) {
      return function(u) {
        return function(a) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; r && (r = 0, a[0] && (s = 0)), s;) try {
            if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done) return o;
            switch (i = 0, o && (a = [2 & a[0], o.value]), a[0]) {
              case 0:
              case 1:
                o = a;
                break;
              case 4:
                return s.label++, {
                  value: a[1],
                  done: !1
                };
              case 5:
                s.label++, i = a[1], a = [0];
                continue;
              case 7:
                a = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                  s = 0;
                  continue
                }
                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                  s.label = a[1];
                  break
                }
                if (6 === a[0] && s.label < o[1]) {
                  s.label = o[1], o = a;
                  break
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(a);
                  break
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue
            }
            a = e.call(t, s)
          } catch (t) {
            a = [6, t], i = 0
          } finally {
            n = o = 0
          }
          if (5 & a[0]) throw a[1];
          return {
            value: a[0] ? a[1] : void 0,
            done: !0
          }
        }([a, u])
      }
    }
  }
  Object.create;

  function a(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      i = 0;
    if (n) return n.call(t);
    if (t && "number" == typeof t.length) return {
      next: function() {
        return t && i >= t.length && (t = void 0), {
          value: t && t[i++],
          done: !t
        }
      }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }

  function u(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var i, o, r = n.call(t),
      s = [];
    try {
      for (;
        (void 0 === e || e-- > 0) && !(i = r.next()).done;) s.push(i.value)
    } catch (t) {
      o = {
        error: t
      }
    } finally {
      try {
        i && !i.done && (n = r.return) && n.call(r)
      } finally {
        if (o) throw o.error
      }
    }
    return s
  }

  function c(t, e, n) {
    if (n || 2 === arguments.length)
      for (var i, o = 0, r = e.length; o < r; o++) !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)), i[o] = e[o]);
    return t.concat(i || Array.prototype.slice.call(e))
  }
  Object.create;
  "function" == typeof SuppressedError && SuppressedError;

  function h() {}
  var l = function() {
      function t(t) {
        this.appenders = t
      }
      return t.prototype.addAppender = function(t) {
        this.appenders.push(t)
      }, t.prototype.debug = function(t, e) {
        for (var n = 0, i = this.appenders.length; n < i; n++) this.appenders[n].debug(t, e)
      }, t.prototype.log = function(t, e) {
        for (var n = 0, i = this.appenders.length; n < i; n++) this.appenders[n].log(t, e)
      }, t.prototype.info = function(t, e) {
        for (var n = 0, i = this.appenders.length; n < i; n++) this.appenders[n].info(t, e)
      }, t.prototype.warn = function(t, e) {
        for (var n = 0, i = this.appenders.length; n < i; n++) this.appenders[n].warn(t, e)
      }, t.prototype.error = function(t, e) {
        for (var n = 0, i = this.appenders.length; n < i; n++) this.appenders[n].error(t, e)
      }, t
    }(),
    d = function(t, e) {
      return c(t ? [f(new Date), "[".concat(t, "]")] : [f(new Date)], u(e), !1)
    },
    p = function() {
      function t() {
        this.formatter = d
      }
      return t.prototype.debug = function(t, e) {
        console.debug.apply(console, c([], u(this.formatter(t, e, "debug")), !1))
      }, t.prototype.log = function(t, e) {
        console.log.apply(console, c([], u(this.formatter(t, e, "log")), !1))
      }, t.prototype.info = function(t, e) {
        console.info.apply(console, c([], u(this.formatter(t, e, "info")), !1))
      }, t.prototype.warn = function(t, e) {
        console.warn.apply(console, c([], u(this.formatter(t, e, "warn")), !1))
      }, t.prototype.error = function(t, e) {
        console.error.apply(console, c([], u(this.formatter(t, e, "error")), !1))
      }, t.shared = new t, t
    }();

  function f(t) {
    var e = t.getHours(),
      n = t.getMinutes(),
      i = t.getSeconds(),
      o = t.getMilliseconds(),
      r = "".concat(n < 10 ? "0" : "").concat(n),
      s = "".concat(i < 10 ? "0" : "").concat(i),
      a = "".concat(o < 100 ? "0" : "").concat(o < 10 ? "0" : "").concat(o);
    return "".concat(e, ":").concat(r, ":").concat(s, ".").concat(a)
  }
  var v = {
      all: Number.MIN_SAFE_INTEGER,
      debug: 1e4,
      log: 2e4,
      info: 3e4,
      warn: 4e4,
      error: 5e4
    },
    g = function() {
      function t(t) {
        this.name = t
      }
      return t.getLogger = function(e) {
        var n;
        return (n = t.loggerPool)[e] || (n[e] = new t(e))
      }, t.setLevel = function(e) {
        var n = t.level = v[e];
        t.prototype.debug = n <= v.debug ? y.debug : h, t.prototype.log = n <= v.log ? y.log : h, t.prototype.info = n <= v.info ? y.info : h, t.prototype.warn = n <= v.warn ? y.warn : h, t.prototype.error = n <= v.error ? y.error : h, t.debug = n <= v.debug ? t.shared.debug.bind(t.shared) : h, t.log = n <= v.log ? t.shared.log.bind(t.shared) : h, t.info = n <= v.info ? t.shared.info.bind(t.shared) : h, t.warn = n <= v.warn ? t.shared.warn.bind(t.shared) : h, t.error = n <= v.error ? t.shared.error.bind(t.shared) : h
      }, t.isLevelEnabled = function(e) {
        return t.level <= v[e]
      }, t.addAppender = function(e) {
        void 0 === t.appender ? t.appender = new l([p.shared, e]) : t.appender instanceof l ? t.appender.addAppender(e) : t.appender = new l([t.appender, e])
      }, Object.defineProperty(t.prototype, "appender", {
        get: function() {
          return this._appender || t.appender || p.shared
        },
        set: function(t) {
          this._appender = t
        },
        enumerable: !1,
        configurable: !0
      }), t.shared = new t(""), t.loggerPool = {}, t.level = v.all, t
    }(),
    y = {
      debug: function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.appender.debug(this.name, t)
      },
      log: function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.appender.log(this.name, t)
      },
      info: function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.appender.info(this.name, t)
      },
      warn: function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.appender.warn(this.name, t)
      },
      error: function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.appender.error(this.name, t)
      }
    };

  function m(t) {
    return t.reduce((function(t, e) {
      return t + e
    }), 0)
  }
  g.setLevel("all");
  var b = g.getLogger("统计"),
    w = function() {
      function t() {}
      return t.prototype.logEvent = function(t, e, n) {
        var i = new S(t, e);
        "number" == typeof n && (i.time = n), M().push(i), O()
      }, t.prototype.logEventImmediately = function(e, n, o) {
        return r(this, void 0, void 0, (function() {
          var r, a, u;
          return s(this, (function(s) {
            switch (s.label) {
              case 0:
                r = new S(e, n), "number" == typeof o && (r.time = o), a = i(i({}, new _), r), s.label = 1;
              case 1:
                return s.trys.push([1, 3, , 4]), [4, U.sendHttp({
                  url: "https://analysis.i51game.com/api/record/".concat(U.appId),
                  method: "POST",
                  data: a
                })];
              case 2:
                return s.sent(), [3, 4];
              case 3:
                return u = s.sent(), t.reliability === t.Reliability.storeToDB ? B(r) : b.log(u), [3, 4];
              case 4:
                return [2]
            }
          }))
        }))
      }, t.prototype.sendAnalysisUserAttr = function(t, e) {
        var n = {
            appId: U.appId,
            time: U.time.now(),
            key: t,
            value: e
          },
          i = U.user;
        return i.uid && (n.uid = String(i.uid)), i.chid && (n.chid = i.chid), U.sendHttp({
          url: "https://analysis.i51game.com/api/user",
          method: "POST",
          data: n
        })
      }, t.prototype.flush = function() {
        return O.flush()
      }, t
    }();
  ! function(t) {
    ! function(t) {
      t[t.normal = 0] = "normal", t[t.storeToDB = 1] = "storeToDB"
    }(t.Reliability || (t.Reliability = {})), t.reliability = t.Reliability.normal, t.useDistinctIdAsUid = !1, t.$dealDistinctId = function() {
      x.distinctId = function() {
        if (U.user.distinctId) {
          if (U.storage) {
            if (t = U.storage.getItem("user-distinctId")) {
              e = JSON.parse(t);
              return U.user.distinctId === e ? b.warn("User 里面 distinctId 相关的内容可以全部删除了, 已在库中处理.") : b.error("发生了一些异常的情况, 从 storage 中读取到的 distinctId 和从 user 中读取到的 distinctId 内容不一致! 请检查相关代码, 本次暂时使用 storage 中的数据."), e
            }
            return T(U.storage, U.user.distinctId), b.error("发生了一些异常的情况, 从 storage 中读取到的 distinctId 和从 user 中读取到的 distinctId 内容不一致! 请检查相关代码, 本次暂时使用 user 中的数据."), U.user.distinctId
          }
          return b.warn("建议更新 @h5/wxgame >=3.8"), U.user.distinctId
        }
        if (U.storage) {
          var t;
          if (t = U.storage.getItem("user-distinctId")) return JSON.parse(t);
          var e = "".concat(Date.now().toString(36)).concat(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36));
          return T(U.storage, e), e
        }
        return void b.error("缺少 distinctId 相关内容, 建议直接更新 @h5/wxgame >=3.8 即可")
      }()
    }
  }(w || (w = {}));
  var x = new(function() {
    function t() {}
    return t.prototype.setLinkKey = function(t) {
      void 0 === this.linkKey && (this.linkKey = t || "")
    }, t.prototype.getLinkKey = function() {
      return this.linkKey
    }, t
  }());

  function T(t, e) {
    t.setItem("user-distinctId", JSON.stringify(e))
  }
  var _ = function() {
      this.appId = U.appId;
      var t = U.user;
      w.useDistinctIdAsUid ? x.distinctId && (this.uid = x.distinctId) : t.uid && (this.uid = String(t.uid)), t.accountUid && (this.accountUid = String(t.accountUid)), t.chid && (this.chid = t.chid), x.linkKey && (this.linkKey = x.linkKey), x.distinctId && (this.distinctId = x.distinctId, function(t) {
        if (!k) {
          var e = U.env;
          e && (t.sysInfo = {
            br: e.brand,
            md: e.model,
            pt: e.platform,
            st: e.system
          }, k = !0)
        }
      }(this)), t.$tags && t.$tags.length > 0 && (this.tags = t.$tags)
    },
    k = !1;
  var S = function(t, e) {
      this.eventId = t, this.time = U.time.now(), e && (this.eventData = e)
    },
    I = "analysis-storage";

  function B(t) {
    var e = U.storage;
    if (e) {
      var n = D();
      n.length < 30 && (Array.isArray(t) ? n.push.apply(n, c([], u(t), !1)) : n.push(t), e.setItem(I, JSON.stringify(n))), P()
    }
  }

  function D() {
    var t, e = U.storage;
    if (!e) return [];
    try {
      var n = e.getItem(I);
      return n && (t = JSON.parse(n), Array.isArray(t)) ? t : []
    } catch (t) {
      return []
    }
  }

  function C() {
    if (E) {
      var t = U.storage;
      if (t) {
        var e = D();
        e.length > 0 && (t.setItem(I, void 0), E.push.apply(E, c([], u(e), !1)))
      }
    }
  }
  var E, P = L((function() {
    C(), O()
  }), 6e4, {
    leading: !1
  });

  function M() {
    return void 0 === E && (E = [], C()), E
  }
  var O = L((function() {
    return r(this, void 0, void 0, (function() {
      var t, e, n, o, r, a;
      return s(this, (function(s) {
        switch (s.label) {
          case 0:
            if (1 !== (t = M()).length) return [3, 5];
            e = t.pop(), r = i(i({}, new _), e), s.label = 1;
          case 1:
            return s.trys.push([1, 3, , 4]), [4, U.sendHttp({
              url: "https://analysis.i51game.com/api/record/".concat(U.appId),
              method: "POST",
              data: r
            })];
          case 2:
            return s.sent(), [3, 4];
          case 3:
            return n = s.sent(), w.reliability === w.Reliability.storeToDB ? B(e) : b.error(n), [3, 4];
          case 4:
            return [3, 9];
          case 5:
            if (!(t.length > 1)) return [3, 9];
            o = t.splice(0, t.length), r = i(i({}, new _), {
              list: o
            }), s.label = 6;
          case 6:
            return s.trys.push([6, 8, , 9]), [4, U.sendHttp({
              url: "https://analysis.i51game.com/api/recordList/".concat(U.appId),
              method: "POST",
              data: r
            })];
          case 7:
            return s.sent(), [3, 9];
          case 8:
            return a = s.sent(), w.reliability === w.Reliability.storeToDB ? B(o) : b.error(a), [3, 9];
          case 9:
            return [2]
        }
      }))
    }))
  }), 15, {
    leading: !1
  });

  function L(t, e, n) {
    var i, o, r, s;
    void 0 === n && (n = {});
    var a = 0,
      u = function() {
        a = !1 === n.leading ? 0 : Date.now(), s = null, r = t.apply(i, o), s || (i = o = null)
      };

    function c() {
      var c = Date.now();
      a || !1 !== n.leading || (a = c);
      var h = e - (c - a);
      return i = this, o = arguments, h <= 0 || h > e ? (window.clearTimeout(s), s = null, a = c, r = t.apply(i, o), s || (i = o = null)) : s || !1 === n.trailing || (s = window.setTimeout(u, h)), r
    }
    return c.flush = function() {
      return s && (window.clearTimeout(s), u()), r
    }, c
  }
  var A, R = Date.now();

  function N(t, e) {
    H.logEventImmediately(t, e)
  }

  function j(t, e, n) {
    t === A.guideStart || t === A.guideEnd ? H.logEvent(t, {
      t: Date.now() - R
    }) : H.logEvent(t, e, n)
  }! function(t) {
    t.enter = "#enter", t.hide = "#hide", t.init = "#init", t.hostLoaded = "#host", t.loginFinish = "#login", t.mainPackLoaded = "#mainPack", t.resLoaded = "#res", t.guideStart = "#guideS", t.guideEnd = "#guideE", t.gameJump = "#jump", t.shareButton = "#shareB", t.share = "#share", t.videoButton = "#videoB", t.videoLoad = "#videoL", t.videoTouch = "#videoT", t.videoEnd = "#videoE", t.videoRetrySuccess = "#videoRS", t.videoRetryFailure = "#videoRF", t.interstitialAdLoad = "#iAdL", t.interstitialAdShow = "#iAdS", t.interstitialAdClose = "#iAdC", t.interstitialAdError = "#iAdE", t.pay = "#pay"
  }(A || (A = {}));
  var G = function() {
      function t() {
        this._events = {}
      }
      return t.prototype.emit = function(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var i = this._events[t];
        if (!i) return !1;
        i.length > 1 && (i = i.slice());
        for (var o = 0, r = i.length; o < r; o++) {
          var s = i[o];
          s.once && this.off(t, s.fn, s.context), s.fn.apply(s.context, e)
        }
        return !0
      }, t.prototype.on = function(t, e, n, i) {
        var o = new F(e, n, i),
          r = this._events[t];
        return r ? r.find((function(t) {
          return t.fn === e && t.context === n
        })) || r.push(o) : this._events[t] = [o], this
      }, t.prototype.once = function(t, e, n) {
        return this.on(t, e, n, !0)
      }, t.prototype.off = function(t, e, n) {
        var i = this._events[t];
        if (i) {
          var o = i.findIndex((function(t) {
            return t.fn === e && t.context === n
          }));
          o >= 0 && i.splice(o, 1)
        }
        return this
      }, t.prototype.has = function(t) {
        return this._events[t] && this._events[t].length > 0
      }, t.prototype.removeAllListeners = function(t) {
        this._events[t] = []
      }, t
    }(),
    F = function(t, e, n) {
      void 0 === n && (n = !1), this.fn = t, this.context = e, this.once = n
    },
    V = g.getLogger("@h5/libs-client"),
    U = {
      emitter: new G
    };

  function W(t, e) {
    U[t] = e
  }

  function X() {
    return U
  }
  U.emitter.once("logged", (function() {
    U.logged = !0
  }));
  var z = new Promise((function(t) {
    U.logged ? t() : U.emitter.once("logged", t)
  }));

  function $() {
    return z
  }
  var H, q = g.getLogger("统计");
  ! function(t) {
    var e;
    t.isClosed = !1, t.close = function() {
      t.isClosed = !0, q.log("关闭统计")
    }, t.getProvider = function() {
      return e
    }, t.setProvider = function(t) {
      e = null === t ? new K : t
    }, t.logEvent = function(n, i, o) {
      U.DEBUG && q.log(n, i), t.isClosed || e.logEvent(n, i, o)
    }, t.logEventImmediately = function(n, i, o) {
      U.DEBUG && q.log(n, i), t.isClosed || (e.logEventImmediately || e.logEvent)(n, i, o)
    }, t.flush = function() {
      e.flush()
    }
  }(H || (H = {}));
  var K = function() {
    function t() {}
    return t.prototype.logEvent = function(t, e, n) {}, t.prototype.flush = function() {}, t
  }();

  function Y(t, e, n) {
    H.logEvent(t, e, n)
  }
  var J = function() {
    function t() {}
    return Object.defineProperty(t, "isClosed", {
      get: function() {
        return H.isClosed
      },
      set: function(t) {
        H.isClosed = t
      },
      enumerable: !1,
      configurable: !0
    }), t.close = function() {
      H.close()
    }, t
  }();
  var Q = {
    next: Math.random
  };

  function Z(t, e, n) {
    if (void 0 === e) {
      if (0 === t.length) return;
      return t[Math.floor(Q.next() * t.length)]
    }
    if ("number" != typeof e) return t[Math.floor(e.next() * t.length)];
    if (void 0 === n && (n = Q), e >= t.length) return t;
    for (var i = [], o = 0, r = t.length; o < r; o++)
      if (i.length < e) i.push(t[o]);
      else {
        var s = Math.floor(n.next() * o);
        s < e && (i[s] = t[o])
      } return i
  }

  function tt(t, e) {
    void 0 === e && (e = Q);
    for (var n = 0, i = t.map((function(t) {
        return n += t
      })), o = e.next() * n, r = 0, s = i.length; r < s; ++r)
      if (o < i[r]) return r;
    return -1
  }

  function et(t, e, n) {
    if (void 0 === n && (n = Q), !(e > 0 && t.length > 0)) return [];
    for (var i = function(t, e, n) {
        var i = [];
        if ("number" == typeof e)
          if ("function" == typeof n)
            for (var o = t; o <= e; ++o) i.push(n(o));
          else
            for (o = t; o <= e; ++o) i.push(o);
        else if ("function" == typeof e)
          for (o = 0; o < t; ++o) i.push(e(o));
        else
          for (o = 0; o < t; ++o) i.push(o);
        return i
      }(t.length), o = []; o.length < e && i.length > 0;) {
      var r = tt(i.map((function(e) {
        return t[e]
      })), n);
      if (-1 === r) break;
      o.push(i.splice(r, 1)[0])
    }
    return o
  }

  function nt(t, e) {
    var n, i;
    void 0 === e && (e = Q);
    for (var o = t.length; o > 1;) n = Math.floor(e.next() * o--), i = t[o], t[o] = t[n], t[n] = i;
    return t
  }! function() {
    function t(t, e, n) {
      void 0 === n && (n = Q), this.mean = t, this.deviation = e, this.randomSource = n
    }
    t.prototype.next = function() {
      var t = 1 - this.randomSource.next(),
        e = 1 - this.randomSource.next();
      return Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e) * this.deviation + this.mean
    }
  }();
  var it, ot = Math.pow(2, 48),
    rt = (function() {
      function t(t) {
        this.seed = t
      }
      t.prototype.next = function() {
        return this.seed = (25214903917 * this.seed + 11) % ot, this.seed / ot
      }
    }(), g.getLogger("MoreGames"));
  ! function(t) {
    t.getConfig = function(t) {
      void 0 === t && (t = {});
      var e = "string" == typeof U.clientVersion ? parseInt(U.clientVersion) || Number.MAX_SAFE_INTEGER : U.clientVersion;
      return U.sendHttp({
        url: "https://wxgame-conf.i51game.com/open/moreGame",
        method: "GET",
        data: i({
          appId: U.confAppId,
          version: e,
          platform: U.env.platform
        }, t)
      })
    }, t.recordNavigated = function() {}
  }(it || (it = {}));
  var st;
  it.getConfig,
    function() {
      function t(t, e) {
        var n, i, o, r, s, u, c, h = this;
        this.groupsWeights = e, this.groupData = {}, this.appCD = {}, this.allGroups = [], this.navigateCD = [], this.notInCD = function(t) {
          var e = function(t) {
            var e;
            return "".concat(t.appId).concat(null !== (e = t.path) && void 0 !== e ? e : "")
          }(t);
          return !h.navigateCD.some((function(t) {
            return t && -1 !== t.indexOf(e)
          }))
        };
        try {
          for (var l = a(t), d = l.next(); !d.done; d = l.next()) {
            var p = d.value,
              f = "number" == typeof p.group ? [p.group] : p.group;
            try {
              for (var v = (o = void 0, a(f)), g = v.next(); !g.done; g = v.next()) {
                var y = g.value;
                this.groupData[y] || (this.groupData[y] = [], this.allGroups.push(y)), this.groupData[y].push(p), this.appCD["".concat(p.appId).concat(null !== (s = p.path) && void 0 !== s ? s : "")] = null !== (u = p.cd) && void 0 !== u ? u : 5
              }
            } catch (t) {
              o = {
                error: t
              }
            } finally {
              try {
                g && !g.done && (r = v.return) && r.call(v)
              } finally {
                if (o) throw o.error
              }
            }
          }
        } catch (t) {
          n = {
            error: t
          }
        } finally {
          try {
            d && !d.done && (i = l.return) && i.call(l)
          } finally {
            if (n) throw n.error
          }
        }
        this.allGroups.sort((function(t, e) {
          return t - e
        }));
        try {
          var m = null === (c = U.storage) || void 0 === c ? void 0 : c.getItem("mg-navigateCD");
          m && (this.navigateCD = JSON.parse(m))
        } catch (t) {
          console.error(t)
        }
      }
      t.prototype.takeItems = function(t, e, n) {
        var i, o = this;
        if (void 0 === n && (n = 1), 1 === (e = this.useGroup(e)).length && 1 === t && 1 === n) return [this.takeOne(e[0])];
        var r, s, a = function(t) {
          var e = Math.round(m(t)),
            n = m(t = t.map((function(t) {
              return Math.floor(t) || 1
            }))) - e;
          if (n > 0) {
            for (var i = t.length - 1; i >= 0; i--) {
              if (t[i] > n) {
                t[i] -= n;
                break
              }
              n -= t[i] - 1, t[i] = 1
            }
            for (i = t.length - 1; i >= 0; i--) {
              if (t[i] >= n) {
                t[i] -= n;
                break
              }
              n -= t[i], t[i] = 0
            }
          } else n < 0 && (t[0] += -n);
          return t
        }((r = e.map((function(t) {
          return o.groupsWeights[t] || 0
        })), s = t / m(r), r.map((function(t) {
          return t * s
        }))));
        U.DEBUG && console.log("在 ".concat(JSON.stringify(e), " 组中分别取 ").concat(JSON.stringify(a), " 个")), n >= 1 || (n = 1);
        for (var h = t * n, l = [], d = this.prepareData(); n--;)
          for (var p = 0, f = e.length; p < f; p++)
            for (var v = e[p], g = null !== (i = a[p]) && void 0 !== i ? i : 0, y = (d[v] || []).filter((function(t) {
                return t.icons.length > 0
              })), b = et(y.map((function(t) {
                return t.weight
              })), g), w = 0, x = b.length; w < x; w++) {
              var T = y[b[w]];
              T && l.push({
                name: T.names.length > 0 ? ut(T.names) : Z(T.raw_names),
                appId: T.appId,
                icon: ut(T.icons),
                path: T.path
              })
            }
        var _ = h - l.length;
        if (_ > 0) {
          var k = this.groupData[1] || [];
          l.push.apply(l, c([], u(et(k.map((function(t) {
            return t.weight
          })), _).map((function(t) {
            var e = k[t];
            return {
              name: Z(e.names),
              appId: e.appId,
              icon: Z(e.icons),
              path: e.path
            }
          }))), !1))
        }
        return this.minusCD(), l
      }, t.prototype.takeOne = function(t) {
        var e, n = this,
          i = (this.groupData[t] || []).filter((function(t) {
            return n.notInCD(t) && t.icons.length > 0
          })),
          o = tt(i.map((function(t) {
            return t.weight
          }))),
          r = i[o];
        return this.minusCD(), r ? {
          name: Z(r.names),
          appId: r.appId,
          icon: Z(r.icons),
          path: r.path
        } : (rt.warn("takeOne: 没有可跳转的条目，请检查后台配置！"), {
          name: "None",
          icon: "",
          appId: null !== (e = U.wxAppId) && void 0 !== e ? e : ""
        })
      }, t.prototype.recordNavigated = function(t, e) {
        void 0 === e && (e = "");
        var n = "".concat(t).concat(e),
          i = (this.appCD[n] || 5) - 1;
        if (i >= 0) {
          var o = this.navigateCD;
          o[i] || (o[i] = []), o[i].push(n), this._saveNavigateCD()
        }
      }, t.prototype.minusCD = function() {
        this.navigateCD.shift(), this._saveNavigateCD()
      }, t.prototype._saveNavigateCD = function() {
        var t;
        try {
          null === (t = U.storage) || void 0 === t || t.setItem("mg-navigateCD", JSON.stringify(this.navigateCD))
        } catch (t) {
          console.error(t)
        }
      }, t.prototype.useGroup = function(t) {
        return t && t.length ? t : this.allGroups
      }, t.prototype.prepareData = function(t) {
        var e = {};
        for (var n in this.groupData) e[n] = (this.groupData[n] || []).filter(this.notInCD).map(at);
        return e
      }
    }();

  function at(t) {
    return {
      appId: t.appId,
      path: t.path,
      raw_names: t.names,
      names: t.names.slice(),
      icons: t.icons.slice(),
      weight: t.weight
    }
  }

  function ut(t) {
    return t.splice((e = t.length, void 0 === n ? Math.floor(Q.next() * e) : "number" == typeof n ? void 0 === i ? Math.floor(Q.next() * (n - e)) + e : Math.floor(i.next() * (n - e)) + e : Math.floor(n.next() * e)), 1)[0];
    var e, n, i
  }

  function ct(t, e) {
    for (var n = []; e > 0;) {
      var i = t.next();
      if (i.done) break;
      n.push(i.value), e--
    }
    return n
  }! function(t) {
    t[t.gamesList = 1] = "gamesList", t[t.gamesIcon = 2] = "gamesIcon", t[t.gamesBanner = 3] = "gamesBanner", t[t.gameBoxTags = 4] = "gameBoxTags", t[t.gameBoxList = 5] = "gameBoxList", t[t.gameBoxNew = 6] = "gameBoxNew", t[t.navigateReward = 7] = "navigateReward", t[t.gamesNavigate = 8] = "gamesNavigate", t[t.gamesPopularize = 9] = "gamesPopularize", t[t.groupNavigate = 10] = "groupNavigate"
  }(st || (st = {}));
  (function() {
    function t(t, e) {
      this.data = t.filter((function(t) {
        return t.icons.length > 0 && -1 !== e.indexOf(t.appId)
      })), 0 === this.data.length && g.getLogger("强推项目").error("没有可跳转的条目，请检查后台配置！")
    }
    Object.defineProperty(t.prototype, "totalCount", {
      get: function() {
        return this.data.length
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.next = function() {
      var t, e, n, i = this.data,
        o = i[tt(i.map((function(t) {
          return t.weight
        })))];
      return o ? {
        name: null !== (t = Z(o.names)) && void 0 !== t ? t : "",
        icon: null !== (e = Z(o.icons)) && void 0 !== e ? e : "",
        appId: o.appId,
        path: o.path
      } : (g.getLogger("强推项目").warn("没有可跳转的条目，请检查后台配置！"), {
        name: "None",
        icon: "",
        appId: null !== (n = U.wxAppId) && void 0 !== n ? n : ""
      })
    }, t.prototype.recordNavigated = function(t) {}
  })(),
  function() {
    function t(t, e) {
      this.data = t.filter((function(t) {
        return t.icons.length > 0 && -1 !== e.indexOf(t.appId)
      }))
    }
    Object.defineProperty(t.prototype, "totalCount", {
      get: function() {
        return this.data.length
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.cloneData = function() {
      return this.data.map((function(t) {
        return {
          raw_names: t.names,
          names: t.names.slice(),
          icons: t.icons.slice(),
          appId: t.appId,
          path: t.path
        }
      }))
    }, t.prototype.createList = function(t) {
      var e, n, i, o;
      return s(this, (function(r) {
        switch (r.label) {
          case 0:
            e = this.cloneData(), t && nt(e), r.label = 1;
          case 1:
            if (!e.some((function(t) {
                return t.icons.length > 0
              }))) return [3, 6];
            n = 0, i = e.length, r.label = 2;
          case 2:
            return n < i ? (o = e[n]).icons.length > 0 ? [4, {
              name: o.names.length > 0 ? ut(o.names) : Z(o.raw_names),
              icon: ut(o.icons),
              appId: o.appId,
              path: o.path
            }] : [3, 4] : [3, 5];
          case 3:
            r.sent(), r.label = 4;
          case 4:
            return n++, [3, 2];
          case 5:
            return [3, 1];
          case 6:
            return [2]
        }
      }))
    }, t.prototype.first = function(t, e) {
      return e && this.data.length >= t ? nt(ct(this.createList(!1), t)) : ct(this.createList(e), t)
    }, t.prototype.random = function(t) {
      return ct(this.createList(!0), t)
    }
  }();

  function ht(t) {
    if (void 0 === t && (t = "yunying"), "string" == typeof t) return U.sendHttp({
      url: "https://wxgame-conf.i51game.com/open/conf/".concat(t),
      method: "GET",
      data: {
        appId: U.confAppId
      }
    });
    if (Array.isArray(t)) return U.sendHttp({
      url: "https://wxgame-conf.i51game.com/open/conf",
      method: "GET",
      data: {
        appId: U.confAppId,
        keys: t.join(",")
      }
    });
    throw new TypeError("getOperationConfig 的第一个参数应该是 string | string[]")
  }

  function lt(t, e) {
    return t.getFullYear() === e.getFullYear() && (t.getMonth() === e.getMonth() && t.getDate() === e.getDate())
  }
  var dt = g.getLogger("host"),
    pt = Symbol("host-key");
  ! function() {
    function t() {}
    t.prototype.setData = function(t) {
      if (!t) return this;
      var e = this[pt];
      if (!e) return this;
      for (var n = 0, i = e.length; n < i; n++) {
        var o = u(e[n], 2),
          r = o[0],
          s = o[1];
        void 0 !== t[r] && (s(t[r]) ? this[r] = t[r] : dt.warn("".concat(r, " check fail:"), t[r]))
      }
      return this
    }, t.key = vt
  }();
  var ft = new WeakMap;

  function vt(t) {
    var e = ft.get(t);
    return e || (e = function(e, n) {
      (e[pt] || (e[pt] = [])).push([n, t])
    }, ft.set(t, e)), e
  }

  function gt(t) {
    return void 0 === t || t.endsWith("/") ? t : t + "/"
  }! function() {
    function t(t, e, n, i) {
      this.versionFileUrl = t, this.resm = e, this._loaded = !1, this.rootUrl = gt(n), this.resDomain = gt(i), this.versionInfo = new yt(this.rootUrl)
    }
    t.prototype.init = function() {
      return r(this, void 0, void 0, (function() {
        var t, e, n, i;
        return s(this, (function(o) {
          switch (o.label) {
            case 0:
              if (this._loaded) return [2, !0];
              t = g.getLogger("version"), e = this.versionFileUrl, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), t.log("正在加载... ".concat(e)), [4, mt({
                url: e,
                method: "GET"
              }, 3)];
            case 2:
              return (n = o.sent()) ? [3, 4] : (t.warn("加载失败 ".concat(e)), [2, !1]);
            case 3:
              return i = o.sent(), t.error(i), [2, !1];
            case 4:
              return this.setVersionData(n), t.log("加载成功!"), [2, !0]
          }
        }))
      }))
    }, t.prototype.setVersionData = function(t) {
      this.versionInfo.setVersionData(t), this._loaded = !0
    }, t.prototype.getVirtualUrl = function(t) {
      if (!t) return "";
      var e = t.indexOf("?"),
        n = -1 === e ? t : t.slice(0, e);
      if (this.rootUrl && !n.startsWith(this.rootUrl)) return t;
      if (!this._loaded) return void 0 === this.resDomain ? t : "".concat(this.resDomain).concat(t);
      var i = this.versionInfo.getVirtualName(n);
      return i ? "".concat(this.resm, "/").concat(i, ".").concat(n.slice(n.lastIndexOf(".") + 1)) : void 0 === this.resDomain ? t : "".concat(this.resDomain).concat(t)
    }
  }();
  var yt = function() {
    function t(t) {
      this._code = "", this._ver = 0, this._folderDir = {}, this._fileDir = {}, this._rootLen = t ? t.length : 0
    }
    return t.prototype.setVersionData = function(t) {
      this._code = t.code, this._ver = t.ver, this._folderDir = t.body.folderObj, this._fileDir = t.body.fileObj
    }, t.prototype.getVirtualName = function(t) {
      var e = t.lastIndexOf("/"),
        n = this._folderDir[-1 === e ? "" : t.slice(this._rootLen, e)];
      if (void 0 !== n) return this._fileDir["".concat(n, "/").concat(t.slice(e + 1))]
    }, t
  }();

  function mt(t, e) {
    return r(this, void 0, void 0, (function() {
      var n, i;
      return s(this, (function(o) {
        switch (o.label) {
          case 0:
            if (!e--) return [3, 6];
            o.label = 1;
          case 1:
            return o.trys.push([1, 3, , 4]), [4, U.sendHttp(t)];
          case 2:
            return [2, o.sent()];
          case 3:
            return i = o.sent(), n = i, [3, 4];
          case 4:
            return [4, new Promise((function(t) {
              return setTimeout(t, 500)
            }))];
          case 5:
            return o.sent(), [3, 0];
          case 6:
            throw n
        }
      }))
    }))
  }
  var bt, wt = "undefined" != typeof Symbol ? Symbol("tween_count") : "$$_tween_count_$$";
  ! function() {
    function t(e, n) {
      this.loop = !1, this._initQueueProps = {}, this._curQueueProps = {}, this._steps = [], this.paused = !1, this.duration = 0, this._prevPos = -1, this.position = 0, this._prevPosition = 0, this._stepPosition = 0, this.passive = !1, this._target = e, n && (this.loop = !!n.loop, this.onChange = n.onChange), this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], n && n.paused ? this.paused = !0 : t._register(this, !0), n && "number" == typeof n.position && this.setPosition(n.position, !0)
    }
    t.get = function(e, n) {
      return new t(e, n)
    }, t.getOwned = function(e, n) {
      void 0 === n && (n = {});
      var o = new t(e, i(i({}, n), {
        paused: !0
      }));
      return o.paused = !1, o
    }, t.removeTweens = function(e) {
      if (e[wt]) {
        for (var n = t._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !0, n.splice(i, 1));
        e[wt] = 0
      }
    }, t.pauseTweens = function(e) {
      if (e[wt])
        for (var n = t._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !0)
    }, t.resumeTweens = function(e) {
      if (e[wt])
        for (var n = t._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !1)
    }, t.tick = function(e) {
      for (var n = t._tweens.concat(), i = n.length - 1; i >= 0; i--) {
        var o = n[i];
        o.paused || o.$tick(e)
      }
      return !1
    }, t._register = function(e, n) {
      var i = e._target,
        o = t._tweens;
      if (n) i[wt] = i[wt] > 0 ? i[wt] + 1 : 1, o.push(e);
      else {
        i[wt]--;
        for (var r = o.length; r--;)
          if (o[r] === e) return void o.splice(r, 1)
      }
    }, t.removeAllTweens = function() {
      for (var e = t._tweens, n = 0, i = e.length; n < i; n++) {
        var o = e[n];
        o.paused = !0, o._target[wt] = 0
      }
      e.length = 0
    }, t.prototype.setPosition = function(t, e) {
      t > 0 || (t = 0);
      var n = t,
        i = !1;
      if (n >= this.duration)
        if (this.loop) {
          var o = n % this.duration;
          n = 0 === o ? this.duration : o
        } else n = this.duration, i = !0;
      if (n === this._prevPos) return i;
      i && this.setPaused(!0);
      var r = this._prevPos;
      this.position = this._prevPos = n, this._prevPosition = t;
      var s = this._steps.length;
      if (s > 0) {
        for (var a = -1, u = 0; u < s; u++) {
          if ("step" == (c = this._steps[u]).type && (a = u, n >= c.t && n <= c.t + c.d)) break
        }
        for (u = 0; u < s; u++) {
          var c;
          if ("action" === (c = this._steps[u]).type) {
            if (e) continue;
            n < r ? (r !== this.duration && xt(c, r, this.duration), xt(c, 0, n, !0)) : xt(c, r, n)
          } else "step" == c.type && a === u && this._updateTargetProps(c, Math.min((this._stepPosition = n - c.t) / c.d, 1))
        }
      }
      return this.onChange && this.onChange(), i
    }, t.prototype._updateTargetProps = function(t, e) {
      if (this.passive = !!t.v, !this.passive) {
        t.e && (e = t.e(e));
        var n, i, o = t.p0,
          r = t.p1;
        for (var s in this._initQueueProps) null == (n = o[s]) && (o[s] = n = this._initQueueProps[s]), null == (i = r[s]) && (r[s] = i = n), this._target[s] = n == i || 0 == e || 1 == e || "number" != typeof n ? 1 == e ? i : n : n + (i - n) * e
      }
    }, t.prototype.setPaused = function(e) {
      return this.paused == e || (this.paused = e, t._register(this, !e)), this
    }, t.prototype._addStep = function(t, e, n, i, o) {
      return t > 0 && (this._steps.push({
        type: "step",
        t: this.duration,
        d: t,
        p0: e,
        p1: n,
        e: i,
        v: o
      }), this.duration += t), this
    }, t.prototype._appendQueueProps = function(t) {
      for (var e in t) void 0 === this._initQueueProps[e] && (this._initQueueProps[e] = this._target[e]), this._curQueueProps[e] = t[e];
      return this._curQueueProps
    }, t.prototype._addAction = function(t, e, n) {
      return this._steps.push({
        type: "action",
        t: this.duration,
        f: t,
        p: e,
        o: n
      }), this
    }, t.prototype.wait = function(t, e) {
      if (!(t > 0)) return this;
      var n = _t(this._curQueueProps);
      return this._addStep(t, n, n, void 0, e)
    }, t.prototype.to = function(t, e, n) {
      return e > 0 && this._addStep(e, _t(this._curQueueProps), _t(this._appendQueueProps(t)), n), this.set(t)
    }, t.prototype.call = function(t, e, n) {
      return void 0 === e && (e = this._target), void 0 === n && (n = []), this._addAction(t, n, e)
    }, t.prototype.set = function(t, e) {
      return void 0 === e && (e = this._target), this._appendQueueProps(t), this._addAction(Tt, [t, e])
    }, t.prototype.play = function(t) {
      return void 0 === t && (t = this), this.call(t.setPaused, t, [!1])
    }, t.prototype.pause = function(t) {
      return void 0 === t && (t = this), this.call(t.setPaused, t, [!0])
    }, t.prototype.$tick = function(t) {
      this.paused || this.setPosition(this._prevPosition + t)
    }, t.prototype.isPaused = function() {
      return this.paused
    }, t.prototype.toOwned = function(t) {
      return null
    }, t._tweens = []
  }();

  function xt(t, e, n, i) {
    void 0 === i && (i = !1);
    var o = e,
      r = n;
    e > n && (o = n, r = e);
    var s = t.t;
    (s == r || s > o && s < r || i && s == e) && t.f.apply(t.o, t.p)
  }

  function Tt(t, e) {
    for (var n in t) e[n] = t[n]
  }

  function _t(t) {
    var e = {};
    for (var n in t) e[n] = t[n];
    return e
  }! function(t) {
    function e(t) {
      return function(e) {
        return Math.pow(e, t)
      }
    }

    function n(t) {
      return function(e) {
        return 1 - Math.pow(1 - e, t)
      }
    }

    function i(t) {
      return function(e) {
        return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
      }
    }

    function o(t) {
      return function(e) {
        return e * e * ((t + 1) * e - t)
      }
    }

    function r(t) {
      return function(e) {
        return --e * e * ((t + 1) * e + t) + 1
      }
    }

    function s(t) {
      return t *= 1.525,
        function(e) {
          return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        }
    }

    function a(t, e) {
      var n = 2 * Math.PI;
      return function(i) {
        if (0 == i || 1 == i) return i;
        var o = e / n * Math.asin(1 / t);
        return -t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - o) * n / e)
      }
    }

    function u(t, e) {
      var n = 2 * Math.PI;
      return function(i) {
        if (0 == i || 1 == i) return i;
        var o = e / n * Math.asin(1 / t);
        return t * Math.pow(2, -10 * i) * Math.sin((i - o) * n / e) + 1
      }
    }

    function c(t, e) {
      var n = 2 * Math.PI;
      return function(i) {
        var o = e / n * Math.asin(1 / t);
        return (i *= 2) < 1 ? t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - o) * n / e) * -.5 : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - o) * n / e) * .5 + 1
      }
    }
    t.get = function(t) {
      return t < -1 && (t = -1), t > 1 && (t = 1),
        function(e) {
          return 0 == t ? e : t < 0 ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
        }
    }, t.getPowIn = e, t.getPowOut = n, t.getPowInOut = i, t.quadIn = e(2), t.quadOut = n(2), t.quadInOut = i(2), t.cubicIn = e(3), t.cubicOut = n(3), t.cubicInOut = i(3), t.quartIn = e(4), t.quartOut = n(4), t.quartInOut = i(4), t.quintIn = e(5), t.quintOut = n(5), t.quintInOut = i(5), t.sineIn = function(t) {
      return 1 - Math.cos(t * Math.PI / 2)
    }, t.sineOut = function(t) {
      return Math.sin(t * Math.PI / 2)
    }, t.sineInOut = function(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1)
    }, t.getBackIn = o, t.backIn = o(1.7), t.getBackOut = r, t.backOut = r(1.7), t.getBackInOut = s, t.backInOut = s(1.7), t.circIn = function(t) {
      return -(Math.sqrt(1 - t * t) - 1)
    }, t.circOut = function(t) {
      return Math.sqrt(1 - --t * t)
    }, t.circInOut = function(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, t.bounceIn = function(e) {
      return 1 - t.bounceOut(1 - e)
    }, t.bounceOut = function(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, t.bounceInOut = function(e) {
      return e < .5 ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
    }, t.getElasticIn = a, t.elasticIn = a(1, .3), t.getElasticOut = u, t.elasticOut = u(1, .3), t.getElasticInOut = c, t.elasticInOut = c(1, .3 * 1.5)
  }(bt || (bt = {}));
  ! function(t) {
    function e(e) {
      var n = this.constructor,
        i = t.call(this, e) || this;
      return i.name = n.name, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, n), "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(i, n.prototype) : i.__proto__ = n.prototype, i
    }
    n(e, t)
  }(Error);
  H.getProvider() || H.setProvider(new w), new g("@h5/libs-client").log("3.13.2");
  var kt;

  function St(t, e, n, i) {
    return new(n || (n = Promise))((function(o, r) {
      function s(t) {
        try {
          u(i.next(t))
        } catch (t) {
          r(t)
        }
      }

      function a(t) {
        try {
          u(i.throw(t))
        } catch (t) {
          r(t)
        }
      }

      function u(t) {
        var e;
        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
          t(e)
        }))).then(s, a)
      }
      u((i = i.apply(t, e || [])).next())
    }))
  }

  function It(t, e) {
    var n, i, o, r, s = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return r = {
      next: a(0),
      throw: a(1),
      return: a(2)
    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
      return this
    }), r;

    function a(r) {
      return function(a) {
        return function(r) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (n = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
            switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
              case 0:
              case 1:
                o = r;
                break;
              case 4:
                return s.label++, {
                  value: r[1],
                  done: !1
                };
              case 5:
                s.label++, i = r[1], r = [0];
                continue;
              case 7:
                r = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                  s = 0;
                  continue
                }
                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                  s.label = r[1];
                  break
                }
                if (6 === r[0] && s.label < o[1]) {
                  s.label = o[1], o = r;
                  break
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(r);
                  break
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue
            }
            r = e.call(t, s)
          } catch (t) {
            r = [6, t], i = 0
          } finally {
            n = o = 0
          }
          if (5 & r[0]) throw r[1];
          return {
            value: r[0] ? r[1] : void 0,
            done: !0
          }
        }([r, a])
      }
    }
  }
  var Bt = ((kt = {})[-2] = "服务器发生了未知错误!", kt[-1] = "服务器发生错误!", kt[90] = "当前用户不在线!", kt[91] = "非法数据!", kt[50] = "服务器内部错误!", kt[93] = "时间异常!", kt[94] = "session失效!", kt[95] = "token失效!", kt[100] = "该账号已在其他地方登录!", kt[101] = "Invoke地址错误!", kt[202] = "需要授权!", kt[203] = "客户端版本太低,请先更新!", kt[250] = "协议未实现!", kt[90001] = "连接已失效.", kt[90002] = "服务端未响应.", kt[90003] = "服务端响应消息列表为空.", kt),
    Dt = function() {
      function t(t, e) {
        this.name = "ProtocolError", this.errCode = t, this.errMsg = e ? "服务器错误: " + e : function(t) {
          return Bt[t] || ("number" == typeof t ? "错误码: " + t : "服务器错误: " + t)
        }(t)
      }
      return t.prototype.toString = function() {
        return "[" + this.name + "] " + this.errCode + " " + this.errMsg
      }, t
    }();

  function Ct(t, e) {
    Mt[t.__cmd] = e
  }

  function Et(t, e) {
    Pt ? Lt(t, e) : Ot.length < 10 && Ot.push({
      cmd: t,
      body: e
    })
  }
  var Pt = !1,
    Mt = {},
    Ot = [];

  function Lt(t, e) {
    var n = Mt[t];
    n && n(e)
  }
  var At = {},
    Rt = {};

  function Nt(t) {
    At[t.__cmd] = t
  }

  function jt(t) {
    Rt[t.__cmd] = t
  }

  function Gt(t, e) {
    return Rt[t] ? Rt[t].fromIndex(e) : {}
  }
  var Ft = 0;

  function Vt(t, e, n) {
    var i, o, r = n.uid,
      s = n.connectToken;
    return i = e && "object" == typeof e && (o = e, 0 !== Object.keys(o).length) ? At[t].toIndex(e) : {}, {
      uid: r,
      connectToken: s,
      format: 1,
      cmds: [{
        header: {
          seq: ++Ft,
          cmd: t
        },
        body: i
      }]
    }
  }

  function Ut(t, e) {
    // LOCAL STUB: no server. For commands whose reward logic we can
    // simulate locally, return a pre-decoded shape (bypassing Gt/fromIndex).
    // For everything else fall back to an empty decoded body.
    try {
      switch (t) {
        case 513: { // start normal game → issue a fake fightId so downstream calls line up
          return Promise.resolve({ fightId: Date.now(), syncData: null });
        }
        case 514: { // step complete (pet rescue is handled in caller, here just return empty)
          return Promise.resolve({});
        }
        case 515: { // end game → flush any pending save
          try { ul.__saveLocal && ul.__saveLocal(); } catch (_e5) {}
          return Promise.resolve({ fightId: 0, syncData: null, gift: null });
        }
        case 2049: { // turntable spin → grant gold locally
          var rewards = [300, 600, 900, 300, 600, 900, 900, 300]; // 8 slots
          var idx = Math.floor(Math.random() * rewards.length);
          var goldWon = rewards[idx];
          ul.gold = (ul.gold || 0) + goldWon;
          try { ul.__saveLocal && ul.__saveLocal(); } catch (_) {}
          return Promise.resolve({
            index: idx,
            gift: { gold: goldWon },
            syncData: { gold: ul.gold }
          });
        }
        case 2306: { // double gold via video at game end
          var curGold = ul.gold || 0;
          var added = Math.max(50, Math.floor(curGold * 0.1) || 50);
          ul.gold = curGold + added;
          try { ul.__saveLocal && ul.__saveLocal(); } catch (_) {}
          return Promise.resolve({ gift: { gold: added }, syncData: { gold: ul.gold } });
        }
        case 2308: { // coin (revive token) top-up via video
          ul.coin = (ul.coin || 0) + 1;
          try { ul.__saveLocal && ul.__saveLocal(); } catch (_) {}
          return Promise.resolve({ gift: { coin: 1 }, syncData: { coin: ul.coin } });
        }
        case 2050: { // buy skin
          var body = null;
          try {
            var parsed = JSON.parse(e);
            if (parsed && parsed.cmds && parsed.cmds[0]) body = parsed.cmds[0].body || null;
          } catch (_e2) {}
          var skinId = body && (body[1] != null ? body[1] : body.skin);
          if (skinId != null && ul.skins.indexOf(skinId) < 0) {
            ul.skins.push(skinId);
            try { ul.__saveLocal && ul.__saveLocal(); } catch (_e3) {}
          }
          return Promise.resolve({ gift: { skins: skinId != null ? [skinId] : [] }, syncData: { skins: ul.skins.slice() } });
        }
      }
    } catch (_eAll) {}
    return Promise.resolve(Gt(t, {}));
  }
  var Wt, Xt, zt, $t = function() {
    function t(t) {
      this._disposed = !1, this.invokeUrl = t
    }
    return t.prototype.send = function(t, e, n) {
      return St(this, void 0, void 0, (function() {
        var t, i;
        return It(this, (function(o) {
          switch (o.label) {
            case 0:
              if (this._disposed) throw new Dt(90001);
              o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, U.sendHttp({
                url: this.invokeUrl,
                method: e,
                data: n
              })];
            case 2:
              return t = o.sent(), [3, 4];
            case 3:
              return i = o.sent(), console.error("[HTTP错误]", i), [3, 4];
            case 4:
              if (!t) throw new Dt(90002);
              if (!("cmds" in t)) {
                if ("err" in t) throw new Dt(-3, t.err);
                throw new Dt(90002)
              }
              if (!t.cmds.length) throw new Dt(90003);
              return [2, t.cmds]
          }
        }))
      }))
    }, t.prototype.dispose = function() {
      this._disposed = !0
    }, t
  }();
  g.getLogger("跳转");
  ! function(t) {
    t.panel = "侧边栏", t.banner = "猜你喜欢", t.icon = "点击试玩", t.reward = "试玩礼包", t.navigate = "直接跳转", t.fakeList = "假列表", t.fakeInvite = "假邀请", t.fakeRedPack = "假红包", t.fakeContinue = "假继续"
  }(Xt || (Xt = {})),
  function(t) {
    t[t.success = 1] = "success", t[t.appCode = 2] = "appCode", t[t.cancel = 0] = "cancel", t[t.fail = -1] = "fail"
  }(zt || (zt = {}));
  var Ht = function() {
    function t() {}
    return t.init = function() {
      t._initialized ? g.getLogger("@h5/wxgame").warn("SpecialEvent.init() 不应该被多次调用!") : (t._initialized = !0, function() {
        var t = this,
          e = Date.now(),
          n = 0;

        function o(t) {
          var o = e = Date.now();
          $().then((function() {
            var e = !!U.user.isNew;
            ++n, j("#enter", i(i({}, qt(t)), {
              ne: e && 1 === n ? 1 : void 0,
              st: n
            }), o)
          }))
        }
        var a = !1;

        function u() {
          a || (a = !0, wx.onShow(o))
        }
        o(wx.getLaunchOptionsSync()), wx.onHide((function() {
          return r(t, void 0, void 0, (function() {
            var t, n;
            return s(this, (function(i) {
              switch (i.label) {
                case 0:
                  return u(), t = Date.now(), n = t - e, U.logged ? [3, 2] : [4, $()];
                case 1:
                  i.sent(), i.label = 2;
                case 2:
                  try {
                    j("#hide", {
                      st: n
                    }, t), H.flush()
                  } catch (t) {}
                  return [2]
              }
            }))
          }))
        }))
      }(), function() {
        var t, e = (t = {}, t[Xt.panel] = 1, t[Xt.banner] = 2, t[Xt.icon] = 3, t[Xt.reward] = 4, t[Xt.navigate] = 5, t[Xt.fakeList] = 6, t[Xt.fakeInvite] = 7, t[Xt.fakeRedPack] = 8, t[Xt.fakeContinue] = 9, t);
        U.emitter.on("navigateSuccess", (function(t, n, i) {
          N("#jump", {
            na: n,
            tp: e[t],
            to: i.appId
          })
        }))
      }())
    }, t._initialized = !1, t
  }();

  function qt(t) {
    var e, n, i, o = t.scene,
      r = t.query,
      s = t.referrerInfo;
    return {
      fu: r.fuid,
      ss: null !== (n = null === (e = Ht.shareSourceConverter) || void 0 === e ? void 0 : e.call(Ht, r.shareSource)) && void 0 !== n ? n : r.shareSource,
      si: r.shareId,
      sc: o,
      lk: r.linkKey ? decodeURIComponent(r.linkKey) : void 0,
      ra: null == s ? void 0 : s.appId,
      ru: null === (i = null == s ? void 0 : s.extraData) || void 0 === i ? void 0 : i.uid
    }
  }
  var Kt = "undefined" != typeof wx ? wx.getSystemInfoSync() : {
    SDKVersion: "0.0.0"
  };
  g.info("System Info:", Kt);
  var Yt = Kt.SDKVersion.split(".").map(Number),
    Jt = Yt[0],
    Qt = Yt[1],
    Zt = Yt[2];

  function te(t, e, n) {
    return void 0 === e && (e = 0), void 0 === n && (n = 0), Jt > t || !(Jt < t) && (Qt > e || !(Qt < e) && Zt >= n)
  }
  var ee = "devtools" === Kt.brand;
  var ne = 0,
    ie = [],
    oe = function() {
      function t(t) {
        this.option = t
      }
      return t.prototype.send = function() {
        var t = this,
          e = this.option,
          n = e.url;
        return new Promise((function(i, o) {
          e.success = function(e) {
            var r = e.data,
              s = e.statusCode;
            e.header;
            if (t.statusCode = s, 200 === s) r ? i(r) : o("服务器未返回数据 (".concat(n, ")"));
            else {
              var a = void 0;
              switch (s) {
                case 404:
                  a = "[404] Not Found (".concat(n, ")");
                  break;
                case 500:
                  a = "[500] Internal Server Error (".concat(n, ")");
                  break;
                case 502:
                  a = "[502] Bad Gateway (".concat(n, ")");
                  break;
                case 504:
                  a = "[504] Gateway Timeout (".concat(n, ")");
                  break;
                default:
                  a = "[".concat(s, "] ").concat(JSON.stringify(r), " (").concat(n, ")")
              }
              o(a)
            }
          }, e.fail = function(t) {
            "0" == t.errMsg ? (console.error("无法连接网络", n), o("无法连接网络")) : t.statusCode ? o("[".concat(t.statusCode, "] ").concat(t.errMsg, " (").concat(n, ")")) : o("".concat(t.errMsg, " (").concat(n, ")"))
          }, e.complete = function() {
            ne--;
            var t = ie.shift();
            t && t()
          }, ne < 5 ? (ne++, t.req = wx.request(e)) : ie.push((function() {
            ne++, t.req = wx.request(e)
          }))
        }))
      }, t.prototype.abort = function() {
        this.req && (this.req.abort(), this.req = void 0)
      }, t.getJSON = function(e, n, i) {
        return void 0 === i && (i = 1), r(this, void 0, void 0, (function() {
          var o, r, a;
          return s(this, (function(s) {
            switch (s.label) {
              case 0:
                o = new t({
                  url: e,
                  data: n,
                  method: "GET",
                  dataType: "json"
                }), s.label = 1;
              case 1:
                if (!i--) return [3, 7];
                s.label = 2;
              case 2:
                return s.trys.push([2, 4, , 5]), [4, o.send()];
              case 3:
                return [2, s.sent()];
              case 4:
                return a = s.sent(), r = a, [3, 5];
              case 5:
                return [4, new Promise((function(t) {
                  return setTimeout(t, 500)
                }))];
              case 6:
                return s.sent(), [3, 1];
              case 7:
                throw r
            }
          }))
        }))
      }, t
    }(),
    re = g.getLogger("update");
  var se, ae = {
      noShareBack: te(2, 3, 0),
      hasMultiVideoAd: te(2, 8, 0),
      resetInterstitialOnClose: !1
    },
    ue = g.getLogger("share");

  function ce(t, e, n, i, o) {
    void 0 === o && (o = 2.5), t || (ue.warn("invokeShare: 参数 title 为空"), t = ""), e || (ue.warn("invokeShare: 参数 imageUrl 为空"), e = ""), n || (ue.warn("invokeShare: 参数 queryData 为空"), n = {});
    var r = function(t) {
      var e = [];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && null != t[n] && e.push("".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(t[n])));
      return e.join("&")
    }(n);
    if (ae.noShareBack) {
      var s = Date.now();
      return ue.log("起调微信分享", s, r), new Promise((function(n, i) {
        wx.shareAppMessage({
          title: t,
          imageUrl: e,
          query: r,
          success: function(t) {
            ue.log("收到分享回调 success (忽略)", t)
          },
          fail: function(t) {
            "shareAppMessage:fail cancel" === t.errMsg ? (ue.log("主动取消分享"), n(se.cancel)) : (ue.log("收到分享回调 fail", t), i(t.errMsg))
          },
          complete: function() {
            ue.log("收到分享回调 complete (忽略)", arguments)
          }
        }), wx.onShow((function t() {
          wx.offShow(t);
          var e = Date.now();
          e - s > 1e3 * o ? (ue.log("分享之后 onShow", e), n(se.timeEnough)) : (ue.log("分享之后 onShow", e, "时间太短"), n(se.timeNotEnough))
        }))
      })).catch((function(t) {
        return ue.error("分享出错", t), se.fail
      }))
    }
    return new Promise((function(n, o) {
      wx.shareAppMessage({
        title: t,
        imageUrl: e,
        query: r,
        success: function(t) {
          if (t.cancel) return ue.log("主动取消分享"), void n(se.cancel);
          i ? t.shareTickets && t.shareTickets.length ? (ue.log("分享到群"), n(se.success)) : (ue.log("分享完成, 没有分享到群"), n(se.notGroup)) : (ue.log("分享完成"), n(se.success))
        },
        fail: function(t) {
          "shareAppMessageDirectly:fail cancel" === t.errMsg || "shareAppMessage:fail cancel" === t.errMsg ? (ue.log("主动取消分享"), n(se.cancel)) : o(t.errMsg)
        }
      })
    })).catch((function(t) {
      return ue.error("分享出错", t), se.fail
    }))
  }! function(t) {
    t[t.success = 1] = "success", t[t.timeNotEnough = 2] = "timeNotEnough", t[t.notGroup = 3] = "notGroup", t[t.fail = 4] = "fail", t[t.cancel = 5] = "cancel", t[t.timeEnough = 6] = "timeEnough"
  }(se || (se = {}));
  var he, le = g.getLogger("video");
  ! function(t) {
    t[t.cancel = 0] = "cancel", t[t.finish = 1] = "finish", t[t.fail = 2] = "fail"
  }(he || (he = {}));
  var de = function() {
      function t(t) {
        var e = this;
        this.adUnitId = t, this._isLoaded = !1, this.checkLoad = function(t) {
          e._checkLoadT && clearTimeout(e._checkLoadT), e._checkLoadT = setTimeout((function() {
            e._isLoaded || (le.log("视频加载超过".concat(t, "秒仍未完成，尝试重试。")), e.retry())
          }), 1e3 * t)
        }, this.retry = function() {
          var t;
          e._retryT && (clearTimeout(e._retryT), e._retryT = void 0), le.log("重试视频加载...");
          var n = e._totalErrorCount;
          null === (t = e.ad) || void 0 === t || t.load().then((function() {
            Y("#videoRS", {
              rc: n
            }), le.log("重试视频加载成功。")
          }))
        }, this.onVideoLoad = function() {
          le.log("广告已加载(onLoad)"), e._totalErrorCount = 0, e._isLoaded = !0, e._checkLoadT && (clearTimeout(e._checkLoadT), e._checkLoadT = void 0), U.emitter.emit("videoLoaded", e.adUnitId)
        }, this._totalErrorCount = 0, this.onVideoError = function(t) {
          if (!(e._totalErrorCount >= 7)) {
            var n = Math.pow(2, 2 + ++e._totalErrorCount);
            le.error("广告出错(onError) ".concat(n, "s后重试... (").concat(e.adUnitId, ")"), t), U.emitter.emit("videoError", e.adUnitId, t), e._retryT && clearTimeout(e._retryT), e._retryT = setTimeout(e.retry, 1e3 * n)
          }
        }, this.onVideoClose = function(t) {
          var n = e.callback;
          e.callback = void 0, n && (t && t.isEnded || void 0 === t ? n(!0) : n(!1))
        }, le.info("创建视频广告 ".concat(t));
        var n = this.ad = wx.createRewardedVideoAd({
          adUnitId: t,
          multiton: !0
        });
        n.onLoad(this.onVideoLoad), n.onError(this.onVideoError), n.onClose(this.onVideoClose), this.checkLoad(9)
      }
      return t.init = function(e, n) {
        if ("function" == typeof wx.createRewardedVideoAd)
          if (e && e.length)
            if (t._initialized) le.error("VideoAd 已经初始化，请不要重复调用 init。");
            else {
              t._initialized = !0, t.video30 = new t(Z(e)), n && n.length && (ae.hasMultiVideoAd ? t.video15 = new t(Z(n)) : le.warn("当前平台或版本不支持多实例视频广告，忽略 VideoAd.init 的第二个参数。"));
              var i = X().emitter;
              i.on("videoStart", (function(t) {
                j("#videoT", {
                  vt: t
                })
              })), i.on("videoEnd", (function(t, e) {
                j("#videoE", {
                  vt: t,
                  ut: e
                })
              })), i.on("videoLoaded", (function(t) {
                j("#videoL", {
                  ai: t
                })
              })), i.on("videoError", (function(t, e) {
                j("#videoL", {
                  ai: t,
                  ec: e && e.errCode || 1
                })
              }))
            }
        else le.error("VideoAd.init 没有传入广告ID，不做任何处理。");
        else le.warn("微信版本太低，无法创建视频广告。")
      }, t.play = function(e) {
        return t.video30 ? t.video30.tryPlay(e) : Promise.resolve(he.fail)
      }, t.play15 = function(e) {
        return r(this, void 0, void 0, (function() {
          var n;
          return s(this, (function(i) {
            switch (i.label) {
              case 0:
                return t.video15 ? [4, t.video15.tryPlay(e)] : [3, 2];
              case 1:
                if ((n = i.sent()) !== he.fail) return [2, n];
                i.label = 2;
              case 2:
                return t.video30 ? [2, t.video30.tryPlay(e)] : [2, he.fail]
            }
          }))
        }))
      }, t.canWatch = function() {
        return !!t.video30 && t.video30.isLoaded
      }, Object.defineProperty(t.prototype, "isLoaded", {
        get: function() {
          return !!this.ad && this._isLoaded
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.tryPlay = function(t) {
        return r(this, void 0, void 0, (function() {
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                if (!this.isLoaded) return [3, 5];
                e.label = 1;
              case 1:
                return e.trys.push([1, 3, , 4]), [4, this.play(t)];
              case 2:
                return [2, e.sent() ? he.finish : he.cancel];
              case 3:
                return e.sent(), [2, he.fail];
              case 4:
                return [3, 6];
              case 5:
                return [2, he.fail];
              case 6:
                return [2]
            }
          }))
        }))
      }, t.prototype.play = function(t) {
        return r(this, void 0, void 0, (function() {
          var e, n, i, o, r, a, u = this;
          return s(this, (function(s) {
            switch (s.label) {
              case 0:
                if (!this.ad) throw new Error("请先初始化视频广告");
                e = X().emitter, this._isLoaded = !1, s.label = 1;
              case 1:
                return s.trys.push([1, 3, , 4]), [4, this.ad.load()];
              case 2:
                return s.sent(), [3, 4];
              case 3:
                throw n = s.sent(), le.warn("加载广告失败", n), n;
              case 4:
                i = Date.now(), e.emit("videoStart", t, this.adUnitId), o = new Promise((function(t) {
                  return u.callback = t
                })), s.label = 5;
              case 5:
                return s.trys.push([5, 7, , 8]), [4, this.ad.show()];
              case 6:
                return s.sent(), le.log("已开始播放广告"), [3, 8];
              case 7:
                throw r = s.sent(), this.callback = void 0, le.error("广告播放失败", r), r;
              case 8:
                return [4, o];
              case 9:
                return a = s.sent(), le.log("广告播放结束 isEnd:", a), this.checkLoad(6), a ? e.emit("videoEnd", t, Date.now() - i, this.adUnitId) : e.emit("videoCancel", t, Date.now() - i, this.adUnitId), [2, a]
            }
          }))
        }))
      }, t.load = function() {
        return le.error("VideoAd.load 接口已废弃"), Promise.resolve()
      }, t.reset = function(t) {
        le.error("VideoAd.reset 接口已废弃，内部会处理重试逻辑，可以删除相关代码了。")
      }, t._initialized = !1, t
    }(),
    pe = g.getLogger("插屏"),
    fe = function() {
      function t(t) {
        var e = this;
        if (this.loaded = !1, this.onLoad = function() {
            e.loaded = !0, U.emitter.emit("interstitialLoaded", e.adUnitId)
          }, this.onError = function(t) {
            var n = 1004 === t.errCode ? 50 : 25;
            pe.warn("出错:", t.errCode, t.errMsg, "".concat(n, "秒后重试")), U.emitter.emit("interstitialError", e.adUnitId, t.errCode, t.errMsg), e._delayReset(1e3 * n)
          }, this.onClose = function() {
            U.emitter.emit("interstitialClose", e.adUnitId, e._lastSource), ae.resetInterstitialOnClose && e.reset()
          }, this.adUnitIdList = t, "function" != typeof wx.createInterstitialAd) throw new Error("版本太低, 无法创建插屏广告!");
        if (!t || !t.length) throw new TypeError("必须传入一个字符串数组!");
        var n = Z(t);
        pe.info("创建插屏广告 ".concat(n)), this.ad = this._createAd(n), this.adUnitId = n
      }
      return Object.defineProperty(t, "lastShowT", {
        get: function() {
          return this._lastShowT
        },
        set: function(t) {
          this._lastShowT = t, wx.setStorageSync("InterstitialAd-lastShowT", t)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "todayFinishCnt", {
        get: function() {
          return this._todayFinishCnt
        },
        set: function(t) {
          this._todayFinishCnt = t, wx.setStorageSync("InterstitialAd-todayFinishCnt", t)
        },
        enumerable: !1,
        configurable: !0
      }), t.init = function(e, n) {
        if (t._option = n, "function" == typeof wx.createInterstitialAd) {
          if (t.instance) pe.warn("不应该多次初始化 InterstitialAd! (默认将销毁之前的,重新创建一个)"), t.instance.destroy();
          else {
            var i = function(t) {
              var e = wx.getStorageSync(t);
              return "number" != typeof e || isNaN(e) ? 0 : e
            };
            this._lastShowT = i("InterstitialAd-lastShowT"), this._todayFinishCnt = i("InterstitialAd-todayFinishCnt")
          }
          t._initT = U.time.now(), t.instance = new t(e);
          var o = X().emitter;
          o.on("videoEnd", t._onVideoEnd), o.on("videoCancel", t._onVideoCancel), o.on("interstitialShow", t._onInterstitialShow), o.on("interstitialClose", t._onInterstitialClose), o.on("interstitialLoaded", t._onInterstitialLoaded), o.on("interstitialError", t._onInterstitialError)
        } else pe.warn("版本太低, 无法创建插屏广告!")
      }, t._onVideoEnd = function() {
        t.lastEndTime = U.time.now()
      }, t._onVideoCancel = function() {
        t.lastEndTime = U.time.now()
      }, t._onInterstitialShow = function(e, n) {
        var i = t.lastShowT,
          o = t.lastShowT = U.time.now();
        lt(new Date(i), new Date(o)) ? t.todayFinishCnt += 1 : t.todayFinishCnt = 1, j("#iAdS", {
          ai: e,
          vt: n
        }), Y("插屏-当天第".concat(t.todayFinishCnt, "次完成")), Y("插屏-总完成")
      }, t._onInterstitialClose = function(e, n) {
        t.lastEndTime = U.time.now(), j("#iAdC", {
          ai: e,
          vt: n,
          ut: U.time.now() - t.lastShowT
        }), Y("插屏-当天第".concat(t.todayFinishCnt, "次关闭"))
      }, t._onInterstitialLoaded = function(t) {
        j("#iAdL", {
          ai: t
        }), Y("插屏-加载成功")
      }, t._onInterstitialError = function(t, e, n) {
        j("#iAdE", {
          ai: t,
          ec: e
        }), Y("插屏-出错-".concat(e), {
          ec: e,
          em: n
        }), Y("插屏-总出错", {
          ec: e,
          em: n
        })
      }, t.show = function(e) {
        if (t.instance) {
          var n = U.time.now();
          n - t._initT <= t._option.startLimit ? pe.warn("小程序启动一定时间内不允许展示插屏广告", "".concat(((n - t._initT) / 1e3).toFixed(1), "s < ").concat((t._option.startLimit / 1e3).toFixed(1), "s")) : n - t.lastEndTime <= t._option.minInterval ? pe.warn("距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告", "".concat(((n - t.lastEndTime) / 1e3).toFixed(1), "s < ").concat((t._option.minInterval / 1e3).toFixed(1), "s")) : t.instance.show(e).catch((function(t) {
            pe.warn("show fail:", t)
          }))
        } else U.DEBUG && pe.warn("未初始化插屏广告!")
      }, t.$show = function(e) {
        return r(this, void 0, void 0, (function() {
          var n;
          return s(this, (function(i) {
            if (!t.instance) throw U.DEBUG && pe.warn("未初始化插屏广告!"), t.Error.NeedInit;
            if ((n = U.time.now()) - t._initT <= t._option.startLimit) throw U.DEBUG && pe.warn("小程序启动一定时间内不允许展示插屏广告", "".concat(((n - t._initT) / 1e3).toFixed(1), "s < ").concat((t._option.startLimit / 1e3).toFixed(1), "s")), t.Error.StartLimit;
            if (n - t.lastEndTime <= t._option.minInterval) throw U.DEBUG && pe.warn("距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告", "".concat(((n - t.lastEndTime) / 1e3).toFixed(1), "s < ").concat((t._option.minInterval / 1e3).toFixed(1), "s")), t.Error.IntervalLimit;
            return [2, t.instance.show(e)]
          }))
        }))
      }, t.prototype._createAd = function(t) {
        var e = wx.createInterstitialAd({
          adUnitId: t
        });
        return e && (e.onLoad(this.onLoad), e.onError(this.onError), e.onClose(this.onClose)), e
      }, t.prototype.show = function(t) {
        return r(this, void 0, void 0, (function() {
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                return this.ad ? [4, this.ad.show()] : (pe.error("插屏广告未创建成功!"), this._delayReset(24e3), [2]);
              case 1:
                return e.sent(), this._lastSource = t, U.emitter.emit("interstitialShow", this.adUnitId, t), this.loaded = !1, [2]
            }
          }))
        }))
      }, t.prototype.reset = function() {
        var t, e;
        this._resetT && (clearTimeout(this._resetT), this._resetT = void 0), this.ad && (this.ad.offLoad(this.onLoad), this.ad.offError(this.onError), this.ad.offClose(this.onClose), null === (e = (t = this.ad).destroy) || void 0 === e || e.call(t));
        var n = Z(this.adUnitIdList);
        pe.info("创建插屏广告 ".concat(n)), this.ad = this._createAd(n), this.adUnitId = n
      }, t.prototype._delayReset = function(t) {
        var e = this;
        this._resetT && clearTimeout(this._resetT), this._resetT = setTimeout((function() {
          e.reset()
        }), t)
      }, t.prototype.destroy = function() {
        var t, e;
        this.ad && (this.ad.offLoad(this.onLoad), this.ad.offError(this.onError), this.ad.offClose(this.onClose), null === (e = (t = this.ad).destroy) || void 0 === e || e.call(t), this.ad = void 0, this.adUnitId = "", this.show = function() {
          return Promise.reject("插屏广告组件已被销毁, 不应该再调用 show !")
        })
      }, t.lastEndTime = 0, t._initT = 0, t._lastShowT = 0, t._todayFinishCnt = 0, t
    }();
  ! function(t) {
    ! function(t) {
      t[t.NeedInit = 1] = "NeedInit", t[t.StartLimit = 2] = "StartLimit", t[t.IntervalLimit = 3] = "IntervalLimit"
    }(t.Error || (t.Error = {}))
  }(fe || (fe = {})), new g("@h5/wxgame").log("3.35.3"), "undefined" != typeof wx && (W("storage", {
    getItem: wx.getStorageSync,
    setItem: wx.setStorageSync,
    removeItem: wx.removeStorageSync
  }), W("env", wx.getSystemInfoSync()), W("getLaunchData", (function() {
    return qt(wx.getLaunchOptionsSync())
  }))), W("sendHttp", (function(t) {
    return new oe(t).send()
  })), ee && J.close();
  var ve = "An invariant failed, however the error is obfuscated because this is an production build.",
    ge = [];
  Object.freeze(ge);
  var ye = {};
  Object.freeze(ye);
  var me = {};

  function be() {
    return "undefined" != typeof window ? window : void 0 !== t.g ? t.g : "undefined" != typeof self ? self : me
  }

  function we() {
    return ++Hn.mobxGuid
  }

  function xe(t) {
    throw Te(!1, t), "X"
  }

  function Te(t, e) {
    if (!t) throw new Error("[mobx] " + (e || ve))
  }

  function _e(t) {
    var e = !1;
    return function() {
      if (!e) return e = !0, t.apply(this, arguments)
    }
  }
  var ke = function() {};

  function Se(t) {
    return null !== t && "object" == typeof t
  }

  function Ie(t) {
    if (null === t || "object" != typeof t) return !1;
    var e = Object.getPrototypeOf(t);
    return e === Object.prototype || null === e
  }

  function Be(t, e, n) {
    Object.defineProperty(t, e, {
      enumerable: !1,
      writable: !0,
      configurable: !0,
      value: n
    })
  }

  function De(t, e, n) {
    Object.defineProperty(t, e, {
      enumerable: !1,
      writable: !1,
      configurable: !0,
      value: n
    })
  }

  function Ce(t, e) {
    var n = "isMobX" + t;
    return e.prototype[n] = !0,
      function(t) {
        return Se(t) && !0 === t[n]
      }
  }

  function Ee(t) {
    return void 0 !== be().Map && t instanceof be().Map
  }

  function Pe(t) {
    return t instanceof Set
  }

  function Me(t) {
    for (var e = [];;) {
      var n = t.next();
      if (n.done) break;
      e.push(n.value)
    }
    return e
  }

  function Oe() {
    return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"
  }

  function Le(t) {
    return null === t ? null : "object" == typeof t ? "" + t : t
  }

  function Ae(t, e) {
    for (var n = t.next(); !n.done;) e(n.value), n = t.next()
  }

  function Re() {
    return "function" == typeof Symbol && Symbol.iterator || "@@iterator"
  }

  function Ne(t, e) {
    De(t, Re(), e)
  }

  function je(t) {
    return t[Re()] = Fe, t
  }

  function Ge() {
    return "function" == typeof Symbol && Symbol.toStringTag || "@@toStringTag"
  }

  function Fe() {
    return this
  }
  var Ve = function() {
      function t(t) {
        void 0 === t && (t = "Atom@" + we()), this.name = t, this.isPendingUnobservation = !1, this.isBeingObserved = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = gn.NOT_TRACKING
      }
      return t.prototype.onBecomeUnobserved = function() {}, t.prototype.onBecomeObserved = function() {}, t.prototype.reportObserved = function() {
        return Zn(this)
      }, t.prototype.reportChanged = function() {
        Jn(),
          function(t) {
            if (t.lowestObserverState === gn.STALE) return;
            t.lowestObserverState = gn.STALE;
            var e = t.observers,
              n = e.length;
            for (; n--;) {
              var i = e[n];
              i.dependenciesState === gn.UP_TO_DATE && (i.isTracing !== yn.NONE && ti(i, t), i.onBecomeStale()), i.dependenciesState = gn.STALE
            }
          }(this), Qn()
      }, t.prototype.toString = function() {
        return this.name
      }, t
    }(),
    Ue = Ce("Atom", Ve);

  function We(t, e, n) {
    void 0 === e && (e = ke), void 0 === n && (n = ke);
    var i, o = new Ve(t);
    return Ti("onBecomeObserved", o, e, i), xi(o, n), o
  }

  function Xe(t, e) {
    return t === e
  }
  var ze = {
      identity: Xe,
      structural: function(t, e) {
        return vo(t, e)
      },
      default: function(t, e) {
        return function(t, e) {
          return "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
        }(t, e) || Xe(t, e)
      },
      shallow: function(t, e) {
        return vo(t, e, 1)
      }
    },
    $e = function(t, e) {
      return $e = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {
        t.__proto__ = e
      } || function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      }, $e(t, e)
    };

  function He(t, e) {
    function n() {
      this.constructor = t
    }
    $e(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  }
  var qe = function() {
    return qe = Object.assign || function(t) {
      for (var e, n = 1, i = arguments.length; n < i; n++)
        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t
    }, qe.apply(this, arguments)
  };

  function Ke(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var i, o, r = n.call(t),
      s = [];
    try {
      for (;
        (void 0 === e || e-- > 0) && !(i = r.next()).done;) s.push(i.value)
    } catch (t) {
      o = {
        error: t
      }
    } finally {
      try {
        i && !i.done && (n = r.return) && n.call(r)
      } finally {
        if (o) throw o.error
      }
    }
    return s
  }

  function Ye() {
    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Ke(arguments[e]));
    return t
  }
  var Je = {},
    Qe = {};

  function Ze(t) {
    if (!0 !== t.__mobxDidRunLazyInitializers) {
      var e = t.__mobxDecorators;
      if (e)
        for (var n in Be(t, "__mobxDidRunLazyInitializers", !0), e) {
          var i = e[n];
          i.propertyCreator(t, i.prop, i.descriptor, i.decoratorTarget, i.decoratorArguments)
        }
    }
  }

  function tn(t, e) {
    return function() {
      var n, i, o = function(i, o, r, s) {
        if (!0 === s) return e(i, o, r, i, n), null;
        if (!Object.prototype.hasOwnProperty.call(i, "__mobxDecorators")) {
          var a = i.__mobxDecorators;
          Be(i, "__mobxDecorators", qe({}, a))
        }
        return i.__mobxDecorators[o] = {
            prop: o,
            propertyCreator: e,
            descriptor: r,
            decoratorTarget: i,
            decoratorArguments: n
          },
          function(t, e) {
            var n = e ? Je : Qe;
            return n[t] || (n[t] = {
              configurable: !0,
              enumerable: e,
              get: function() {
                return Ze(this), this[t]
              },
              set: function(e) {
                Ze(this), this[t] = e
              }
            })
          }(o, t)
      };
      return (2 === (i = arguments).length || 3 === i.length) && "string" == typeof i[1] || 4 === i.length && !0 === i[3] ? (n = ge, o.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), o)
    }
  }

  function en(t, e, n) {
    return Bi(t) ? t : Array.isArray(t) ? fn.array(t, {
      name: n
    }) : Ie(t) ? fn.object(t, void 0, {
      name: n
    }) : Ee(t) ? fn.map(t, {
      name: n
    }) : Pe(t) ? fn.set(t, {
      name: n
    }) : t
  }

  function nn(t) {
    return t
  }

  function on(t) {
    Te(t);
    var e = tn(!0, (function(e, n, i, o, r) {
        ro(e, n, i ? i.initializer ? i.initializer.call(e) : i.value : void 0, t)
      })),
      n = ("undefined" != typeof process && process.env, e);
    return n.enhancer = t, n
  }
  var rn = {
      deep: !0,
      name: void 0,
      defaultDecorator: void 0
    },
    sn = {
      deep: !1,
      name: void 0,
      defaultDecorator: void 0
    };

  function an(t) {
    return null == t ? rn : "string" == typeof t ? {
      name: t,
      deep: !0
    } : t
  }

  function un(t) {
    return t.defaultDecorator ? t.defaultDecorator.enhancer : !1 === t.deep ? nn : en
  }
  Object.freeze(rn), Object.freeze(sn);
  var cn = on(en),
    hn = on((function(t, e, n) {
      return null == t || ho(t) || Ki(t) || Zi(t) || no(t) ? t : Array.isArray(t) ? fn.array(t, {
        name: n,
        deep: !1
      }) : Ie(t) ? fn.object(t, void 0, {
        name: n,
        deep: !1
      }) : Ee(t) ? fn.map(t, {
        name: n,
        deep: !1
      }) : Pe(t) ? fn.set(t, {
        name: n,
        deep: !1
      }) : xe(!1)
    })),
    ln = on(nn),
    dn = on((function(t, e, n) {
      return vo(t, e) ? e : t
    }));
  var pn = {
      box: function(t, e) {
        arguments.length > 2 && vn("box");
        var n = an(e);
        return new Fn(t, un(n), n.name, !0, n.equals)
      },
      shallowBox: function(t, e) {
        return arguments.length > 2 && vn("shallowBox"), fn.box(t, {
          name: e,
          deep: !1
        })
      },
      array: function(t, e) {
        arguments.length > 2 && vn("array");
        var n = an(e);
        return new Wi(t, un(n), n.name)
      },
      shallowArray: function(t, e) {
        return arguments.length > 2 && vn("shallowArray"), fn.array(t, {
          name: e,
          deep: !1
        })
      },
      map: function(t, e) {
        arguments.length > 2 && vn("map");
        var n = an(e);
        return new Ji(t, un(n), n.name)
      },
      shallowMap: function(t, e) {
        return arguments.length > 2 && vn("shallowMap"), fn.map(t, {
          name: e,
          deep: !1
        })
      },
      set: function(t, e) {
        arguments.length > 2 && vn("set");
        var n = an(e);
        return new eo(t, un(n), n.name)
      },
      object: function(t, e, n) {
        return "string" == typeof arguments[1] && vn("object"), _i({}, t, e, an(n))
      },
      shallowObject: function(t, e) {
        return "string" == typeof arguments[1] && vn("shallowObject"), fn.object(t, {}, {
          name: e,
          deep: !1
        })
      },
      ref: ln,
      shallow: hn,
      deep: cn,
      struct: dn
    },
    fn = function(t, e, n) {
      if ("string" == typeof arguments[1]) return cn.apply(null, arguments);
      if (Bi(t)) return t;
      var i = Ie(t) ? fn.object(t, e, n) : Array.isArray(t) ? fn.array(t, e) : Ee(t) ? fn.map(t, e) : Pe(t) ? fn.set(t, e) : t;
      if (i !== t) return i;
      xe(!1)
    };

  function vn(t) {
    xe("Expected one or two arguments to observable." + t + ". Did you accidentally try to use observable." + t + " as decorator?")
  }
  Object.keys(pn).forEach((function(t) {
    return fn[t] = pn[t]
  }));
  var gn, yn, mn = tn(!1, (function(t, e, n, i, o) {
      var r = n.get,
        s = n.set,
        a = o[0] || {};
      ! function(t, e, n) {
        var i = oo(t);
        n.name = i.name + "." + e, n.context = t, i.values[e] = new Vn(n), Object.defineProperty(t, e, function(t) {
          return ao[t] || (ao[t] = {
            configurable: Hn.computedConfigurable,
            enumerable: !1,
            get: function() {
              return uo(this).read(this, t)
            },
            set: function(e) {
              uo(this).write(this, t, e)
            }
          })
        }(e))
      }(t, e, qe({
        get: r,
        set: s
      }, a))
    })),
    bn = mn({
      equals: ze.structural
    }),
    wn = function(t, e, n) {
      if ("string" == typeof e) return mn.apply(null, arguments);
      if (null !== t && "object" == typeof t && 1 === arguments.length) return mn.apply(null, arguments);
      var i = "object" == typeof e ? e : {};
      return i.get = t, i.set = "function" == typeof e ? e : i.set, i.name = i.name || t.name || "", new Vn(i)
    };
  wn.struct = bn,
    function(t) {
      t[t.NOT_TRACKING = -1] = "NOT_TRACKING", t[t.UP_TO_DATE = 0] = "UP_TO_DATE", t[t.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", t[t.STALE = 2] = "STALE"
    }(gn || (gn = {})),
    function(t) {
      t[t.NONE = 0] = "NONE", t[t.LOG = 1] = "LOG", t[t.BREAK = 2] = "BREAK"
    }(yn || (yn = {}));
  var xn = function(t) {
    this.cause = t
  };

  function Tn(t) {
    return t instanceof xn
  }

  function _n(t) {
    switch (t.dependenciesState) {
      case gn.UP_TO_DATE:
        return !1;
      case gn.NOT_TRACKING:
      case gn.STALE:
        return !0;
      case gn.POSSIBLY_STALE:
        for (var e = En(!0), n = Dn(), i = t.observing, o = i.length, r = 0; r < o; r++) {
          var s = i[r];
          if (Wn(s)) {
            if (Hn.disableErrorBoundaries) s.get();
            else try {
              s.get()
            } catch (t) {
              return Cn(n), Pn(e), !0
            }
            if (t.dependenciesState === gn.STALE) return Cn(n), Pn(e), !0
          }
        }
        return Mn(t), Cn(n), Pn(e), !1
    }
  }

  function kn(t) {
    var e = t.observers.length > 0;
    Hn.computationDepth > 0 && e && xe(!1), Hn.allowStateChanges || !e && "strict" !== Hn.enforceActions || xe(!1)
  }

  function Sn(t, e, n) {
    var i = En(!0);
    Mn(t), t.newObserving = new Array(t.observing.length + 100), t.unboundDepsCount = 0, t.runId = ++Hn.runId;
    var o, r = Hn.trackingDerivation;
    if (Hn.trackingDerivation = t, !0 === Hn.disableErrorBoundaries) o = e.call(n);
    else try {
      o = e.call(n)
    } catch (t) {
      o = new xn(t)
    }
    return Hn.trackingDerivation = r,
      function(t) {
        for (var e = t.observing, n = t.observing = t.newObserving, i = gn.UP_TO_DATE, o = 0, r = t.unboundDepsCount, s = 0; s < r; s++) {
          0 === (a = n[s]).diffValue && (a.diffValue = 1, o !== s && (n[o] = a), o++), a.dependenciesState > i && (i = a.dependenciesState)
        }
        n.length = o, t.newObserving = null, r = e.length;
        for (; r--;) {
          0 === (a = e[r]).diffValue && Kn(a, t), a.diffValue = 0
        }
        for (; o--;) {
          var a;
          1 === (a = n[o]).diffValue && (a.diffValue = 0, qn(a, t))
        }
        i !== gn.UP_TO_DATE && (t.dependenciesState = i, t.onBecomeStale())
      }(t), t.observing.length, Pn(i), o
  }

  function In(t) {
    var e = t.observing;
    t.observing = [];
    for (var n = e.length; n--;) Kn(e[n], t);
    t.dependenciesState = gn.NOT_TRACKING
  }

  function Bn(t) {
    var e = Dn(),
      n = t();
    return Cn(e), n
  }

  function Dn() {
    var t = Hn.trackingDerivation;
    return Hn.trackingDerivation = null, t
  }

  function Cn(t) {
    Hn.trackingDerivation = t
  }

  function En(t) {
    var e = Hn.allowStateReads;
    return Hn.allowStateReads = t, e
  }

  function Pn(t) {
    Hn.allowStateReads = t
  }

  function Mn(t) {
    if (t.dependenciesState !== gn.UP_TO_DATE) {
      t.dependenciesState = gn.UP_TO_DATE;
      for (var e = t.observing, n = e.length; n--;) e[n].lowestObserverState = gn.UP_TO_DATE
    }
  }
  var On = 0,
    Ln = 1,
    An = Object.getOwnPropertyDescriptor((function() {}), "name");
  An && An.configurable;

  function Rn(t, e) {
    var n = function() {
      return Nn(t, e, this, arguments)
    };
    return n.isMobxAction = !0, n
  }

  function Nn(t, e, n, i) {
    var o = function(t, e, n) {
      var i = ui() && !!t,
        o = 0;
      if (i) {
        o = Date.now();
        var r = n && n.length || 0,
          s = new Array(r);
        if (r > 0)
          for (var a = 0; a < r; a++) s[a] = n[a];
        hi({
          type: "action",
          name: t,
          object: e,
          arguments: s
        })
      }
      var u = Dn();
      Jn();
      var c = jn(!0),
        h = En(!0),
        l = {
          prevDerivation: u,
          prevAllowStateChanges: c,
          prevAllowStateReads: h,
          notifySpy: i,
          startTime: o,
          actionId: Ln++,
          parentActionId: On
        };
      return On = l.actionId, l
    }(t, n, i);
    try {
      return e.apply(n, i)
    } catch (t) {
      throw o.error = t, t
    } finally {
      ! function(t) {
        On !== t.actionId && xe("invalid action stack. did you forget to finish an action?");
        On = t.parentActionId, void 0 !== t.error && (Hn.suppressReactionErrors = !0);
        Gn(t.prevAllowStateChanges), Pn(t.prevAllowStateReads), Qn(), Cn(t.prevDerivation), t.notifySpy && di({
          time: Date.now() - t.startTime
        });
        Hn.suppressReactionErrors = !1
      }(o)
    }
  }

  function jn(t) {
    var e = Hn.allowStateChanges;
    return Hn.allowStateChanges = t, e
  }

  function Gn(t) {
    Hn.allowStateChanges = t
  }
  var Fn = function(t) {
    function e(e, n, i, o, r) {
      void 0 === i && (i = "ObservableValue@" + we()), void 0 === o && (o = !0), void 0 === r && (r = ze.default);
      var s = t.call(this, i) || this;
      return s.enhancer = n, s.name = i, s.equals = r, s.hasUnreportedChange = !1, s.value = n(e, void 0, i), o && ui() && ci({
        type: "create",
        name: s.name,
        newValue: "" + s.value
      }), s
    }
    return He(e, t), e.prototype.dehanceValue = function(t) {
      return void 0 !== this.dehancer ? this.dehancer(t) : t
    }, e.prototype.set = function(t) {
      var e = this.value;
      if ((t = this.prepareNewValue(t)) !== Hn.UNCHANGED) {
        var n = ui();
        n && hi({
          type: "update",
          name: this.name,
          newValue: t,
          oldValue: e
        }), this.setNewValue(t), n && di()
      }
    }, e.prototype.prepareNewValue = function(t) {
      if (kn(this), Ci(this)) {
        var e = Pi(this, {
          object: this,
          type: "update",
          newValue: t
        });
        if (!e) return Hn.UNCHANGED;
        t = e.newValue
      }
      return t = this.enhancer(t, this.value, this.name), this.equals(this.value, t) ? Hn.UNCHANGED : t
    }, e.prototype.setNewValue = function(t) {
      var e = this.value;
      this.value = t, this.reportChanged(), Mi(this) && Li(this, {
        type: "update",
        object: this,
        newValue: t,
        oldValue: e
      })
    }, e.prototype.get = function() {
      return this.reportObserved(), this.dehanceValue(this.value)
    }, e.prototype.intercept = function(t) {
      return Ei(this, t)
    }, e.prototype.observe = function(t, e) {
      return e && t({
        object: this,
        type: "update",
        newValue: this.value,
        oldValue: void 0
      }), Oi(this, t)
    }, e.prototype.toJSON = function() {
      return this.get()
    }, e.prototype.toString = function() {
      return this.name + "[" + this.value + "]"
    }, e.prototype.valueOf = function() {
      return Le(this.get())
    }, e
  }(Ve);
  Fn.prototype[Oe()] = Fn.prototype.valueOf;
  Ce("ObservableValue", Fn);
  var Vn = function() {
    function t(t) {
      this.dependenciesState = gn.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = gn.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + we(), this.value = new xn(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = yn.NONE, Te(t.get, "missing option for computed: get"), this.derivation = t.get, this.name = t.name || "ComputedValue@" + we(), t.set && (this.setter = Rn(this.name + "-setter", t.set)), this.equals = t.equals || (t.compareStructural || t.struct ? ze.structural : ze.default), this.scope = t.context, this.requiresReaction = !!t.requiresReaction, this.keepAlive = !!t.keepAlive
    }
    return t.prototype.onBecomeStale = function() {
      ! function(t) {
        if (t.lowestObserverState !== gn.UP_TO_DATE) return;
        t.lowestObserverState = gn.POSSIBLY_STALE;
        var e = t.observers,
          n = e.length;
        for (; n--;) {
          var i = e[n];
          i.dependenciesState === gn.UP_TO_DATE && (i.dependenciesState = gn.POSSIBLY_STALE, i.isTracing !== yn.NONE && ti(i, t), i.onBecomeStale())
        }
      }(this)
    }, t.prototype.onBecomeUnobserved = function() {}, t.prototype.onBecomeObserved = function() {}, t.prototype.get = function() {
      this.isComputing && xe("Cycle detected in computation " + this.name + ": " + this.derivation), 0 !== Hn.inBatch || 0 !== this.observers.length || this.keepAlive ? (Zn(this), _n(this) && this.trackAndCompute() && function(t) {
        if (t.lowestObserverState === gn.STALE) return;
        t.lowestObserverState = gn.STALE;
        var e = t.observers,
          n = e.length;
        for (; n--;) {
          var i = e[n];
          i.dependenciesState === gn.POSSIBLY_STALE ? i.dependenciesState = gn.STALE : i.dependenciesState === gn.UP_TO_DATE && (t.lowestObserverState = gn.UP_TO_DATE)
        }
      }(this)) : _n(this) && (this.warnAboutUntrackedRead(), Jn(), this.value = this.computeValue(!1), Qn());
      var t = this.value;
      if (Tn(t)) throw t.cause;
      return t
    }, t.prototype.peek = function() {
      var t = this.computeValue(!1);
      if (Tn(t)) throw t.cause;
      return t
    }, t.prototype.set = function(t) {
      if (this.setter) {
        Te(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
        try {
          this.setter.call(this.scope, t)
        } finally {
          this.isRunningSetter = !1
        }
      } else Te(!1, !1)
    }, t.prototype.trackAndCompute = function() {
      ui() && ci({
        object: this.scope,
        type: "compute",
        name: this.name
      });
      var t = this.value,
        e = this.dependenciesState === gn.NOT_TRACKING,
        n = this.computeValue(!0),
        i = e || Tn(t) || Tn(n) || !this.equals(t, n);
      return i && (this.value = n), i
    }, t.prototype.computeValue = function(t) {
      var e;
      if (this.isComputing = !0, Hn.computationDepth++, t) e = Sn(this, this.derivation, this.scope);
      else if (!0 === Hn.disableErrorBoundaries) e = this.derivation.call(this.scope);
      else try {
        e = this.derivation.call(this.scope)
      } catch (t) {
        e = new xn(t)
      }
      return Hn.computationDepth--, this.isComputing = !1, e
    }, t.prototype.suspend = function() {
      this.keepAlive || (In(this), this.value = void 0)
    }, t.prototype.observe = function(t, e) {
      var n = this,
        i = !0,
        o = void 0;
      return yi((function() {
        var r = n.get();
        if (!i || e) {
          var s = Dn();
          t({
            type: "update",
            object: n,
            newValue: r,
            oldValue: o
          }), Cn(s)
        }
        i = !1, o = r
      }))
    }, t.prototype.warnAboutUntrackedRead = function() {}, t.prototype.toJSON = function() {
      return this.get()
    }, t.prototype.toString = function() {
      return this.name + "[" + this.derivation.toString() + "]"
    }, t.prototype.valueOf = function() {
      return Le(this.get())
    }, t
  }();
  Vn.prototype[Oe()] = Vn.prototype.valueOf;
  var Un, Wn = Ce("ComputedValue", Vn),
    Xn = function() {
      this.version = 5, this.UNCHANGED = {}, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.allowStateReads = !0, this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.computedConfigurable = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1
    },
    zn = !0,
    $n = !1,
    Hn = ((Un = be()).__mobxInstanceCount > 0 && !Un.__mobxGlobals && (zn = !1), Un.__mobxGlobals && Un.__mobxGlobals.version !== (new Xn).version && (zn = !1), zn ? Un.__mobxGlobals ? (Un.__mobxInstanceCount += 1, Un.__mobxGlobals.UNCHANGED || (Un.__mobxGlobals.UNCHANGED = {}), Un.__mobxGlobals) : (Un.__mobxInstanceCount = 1, Un.__mobxGlobals = new Xn) : (setTimeout((function() {
      $n || xe("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`")
    }), 1), new Xn));

  function qn(t, e) {
    var n = t.observers.length;
    n && (t.observersIndexes[e.__mapid] = n), t.observers[n] = e, t.lowestObserverState > e.dependenciesState && (t.lowestObserverState = e.dependenciesState)
  }

  function Kn(t, e) {
    if (1 === t.observers.length) t.observers.length = 0, Yn(t);
    else {
      var n = t.observers,
        i = t.observersIndexes,
        o = n.pop();
      if (o !== e) {
        var r = i[e.__mapid] || 0;
        r ? i[o.__mapid] = r : delete i[o.__mapid], n[r] = o
      }
      delete i[e.__mapid]
    }
  }

  function Yn(t) {
    !1 === t.isPendingUnobservation && (t.isPendingUnobservation = !0, Hn.pendingUnobservations.push(t))
  }

  function Jn() {
    Hn.inBatch++
  }

  function Qn() {
    if (0 == --Hn.inBatch) {
      ri();
      for (var t = Hn.pendingUnobservations, e = 0; e < t.length; e++) {
        var n = t[e];
        n.isPendingUnobservation = !1, 0 === n.observers.length && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof Vn && n.suspend())
      }
      Hn.pendingUnobservations = []
    }
  }

  function Zn(t) {
    var e = Hn.trackingDerivation;
    return null !== e ? (e.runId !== t.lastAccessedBy && (t.lastAccessedBy = e.runId, e.newObserving[e.unboundDepsCount++] = t, t.isBeingObserved || (t.isBeingObserved = !0, t.onBecomeObserved())), !0) : (0 === t.observers.length && Hn.inBatch > 0 && Yn(t), !1)
  }

  function ti(t, e) {
    if (console.log("[mobx.trace] '" + t.name + "' is invalidated due to a change in: '" + e.name + "'"), t.isTracing === yn.BREAK) {
      var n = [];
      ei(ki(lo(t, i)), n, 1), new Function("debugger;\n/*\nTracing '" + t.name + "'\n\nYou are entering this break point because derivation '" + t.name + "' is being traced and '" + e.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (t instanceof Vn ? t.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
    }
    var i
  }

  function ei(t, e, n) {
    e.length >= 1e3 ? e.push("(and many more)") : (e.push("" + new Array(n).join("\t") + t.name), t.dependencies && t.dependencies.forEach((function(t) {
      return ei(t, e, n + 1)
    })))
  }
  var ni = function() {
    function t(t, e, n, i) {
      void 0 === t && (t = "Reaction@" + we()), void 0 === i && (i = !1), this.name = t, this.onInvalidate = e, this.errorHandler = n, this.requiresObservable = i, this.observing = [], this.newObserving = [], this.dependenciesState = gn.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + we(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = yn.NONE
    }
    return t.prototype.onBecomeStale = function() {
      this.schedule()
    }, t.prototype.schedule = function() {
      this._isScheduled || (this._isScheduled = !0, Hn.pendingReactions.push(this), ri())
    }, t.prototype.isScheduled = function() {
      return this._isScheduled
    }, t.prototype.runReaction = function() {
      if (!this.isDisposed) {
        if (Jn(), this._isScheduled = !1, _n(this)) {
          this._isTrackPending = !0;
          try {
            this.onInvalidate(), this._isTrackPending && ui() && ci({
              name: this.name,
              type: "scheduled-reaction"
            })
          } catch (t) {
            this.reportExceptionInDerivation(t)
          }
        }
        Qn()
      }
    }, t.prototype.track = function(t) {
      Jn();
      var e, n = ui();
      n && (e = Date.now(), hi({
        name: this.name,
        type: "reaction"
      })), this._isRunning = !0;
      var i = Sn(this, t, void 0);
      this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && In(this), Tn(i) && this.reportExceptionInDerivation(i.cause), n && di({
        time: Date.now() - e
      }), Qn()
    }, t.prototype.reportExceptionInDerivation = function(t) {
      var e = this;
      if (this.errorHandler) this.errorHandler(t, this);
      else {
        if (Hn.disableErrorBoundaries) throw t;
        var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        Hn.suppressReactionErrors ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)") : console.error(n, t), ui() && ci({
          type: "error",
          name: this.name,
          message: n,
          error: "" + t
        }), Hn.globalReactionErrorHandlers.forEach((function(n) {
          return n(t, e)
        }))
      }
    }, t.prototype.dispose = function() {
      this.isDisposed || (this.isDisposed = !0, this._isRunning || (Jn(), In(this), Qn()))
    }, t.prototype.getDisposer = function() {
      var t = this.dispose.bind(this);
      return t.$mobx = this, t
    }, t.prototype.toString = function() {
      return "Reaction[" + this.name + "]"
    }, t.prototype.trace = function(t) {
      void 0 === t && (t = !1),
        function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          var n = !1;
          "boolean" == typeof t[t.length - 1] && (n = t.pop());
          var i = function(t) {
            switch (t.length) {
              case 0:
                return Hn.trackingDerivation;
              case 1:
                return lo(t[0]);
              case 2:
                return lo(t[0], t[1])
            }
          }(t);
          if (!i) return xe(!1);
          i.isTracing === yn.NONE && console.log("[mobx.trace] '" + i.name + "' tracing enabled");
          i.isTracing = n ? yn.BREAK : yn.LOG
        }(this, t)
    }, t
  }();
  var ii = 100,
    oi = function(t) {
      return t()
    };

  function ri() {
    Hn.inBatch > 0 || Hn.isRunningReactions || oi(si)
  }

  function si() {
    Hn.isRunningReactions = !0;
    for (var t = Hn.pendingReactions, e = 0; t.length > 0;) {
      ++e === ii && (console.error("Reaction doesn't converge to a stable state after " + ii + " iterations. Probably there is a cycle in the reactive function: " + t[0]), t.splice(0));
      for (var n = t.splice(0), i = 0, o = n.length; i < o; i++) n[i].runReaction()
    }
    Hn.isRunningReactions = !1
  }
  var ai = Ce("Reaction", ni);

  function ui() {
    return !!Hn.spyListeners.length
  }

  function ci(t) {
    if (Hn.spyListeners.length)
      for (var e = Hn.spyListeners, n = 0, i = e.length; n < i; n++) e[n](t)
  }

  function hi(t) {
    ci(qe(qe({}, t), {
      spyReportStart: !0
    }))
  }
  var li = {
    spyReportEnd: !0
  };

  function di(t) {
    ci(t ? qe(qe({}, t), {
      spyReportEnd: !0
    }) : li)
  }

  function pi() {
    xe(!1)
  }

  function fi(t) {
    return function(e, n, i) {
      if (i) {
        if (i.value) return {
          value: Rn(t, i.value),
          enumerable: !1,
          configurable: !0,
          writable: !0
        };
        var o = i.initializer;
        return {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          initializer: function() {
            return Rn(t, o.call(this))
          }
        }
      }
      return function(t) {
        return function(e, n, i) {
          Object.defineProperty(e, n, {
            configurable: !0,
            enumerable: !1,
            get: function() {},
            set: function(e) {
              Be(this, n, vi(t, e))
            }
          })
        }
      }(t).apply(this, arguments)
    }
  }
  var vi = function(t, e, n, i) {
    return 1 === arguments.length && "function" == typeof t ? Rn(t.name || "<unnamed action>", t) : 2 === arguments.length && "function" == typeof e ? Rn(t, e) : 1 === arguments.length && "string" == typeof t ? fi(t) : !0 !== i ? fi(e).apply(null, arguments) : void(t[e] = Rn(t.name || e, n.value))
  };

  function gi(t, e, n) {
    Be(t, e, Rn(e, n.bind(t)))
  }

  function yi(t, e) {
    void 0 === e && (e = ye);
    var n, i = e && e.name || t.name || "Autorun@" + we();
    if (!e.scheduler && !e.delay) n = new ni(i, (function() {
      this.track(s)
    }), e.onError, e.requiresObservable);
    else {
      var o = bi(e),
        r = !1;
      n = new ni(i, (function() {
        r || (r = !0, o((function() {
          r = !1, n.isDisposed || n.track(s)
        })))
      }), e.onError, e.requiresObservable)
    }

    function s() {
      t(n)
    }
    return n.schedule(), n.getDisposer()
  }
  vi.bound = function(t, e, n, i) {
    return !0 === i ? (gi(t, e, n.value), null) : n ? {
      configurable: !0,
      enumerable: !1,
      get: function() {
        return gi(this, e, n.value || n.initializer.call(this)), this[e]
      },
      set: pi
    } : {
      enumerable: !1,
      configurable: !0,
      set: function(t) {
        gi(this, e, t)
      },
      get: function() {}
    }
  };
  var mi = function(t) {
    return t()
  };

  function bi(t) {
    return t.scheduler ? t.scheduler : t.delay ? function(e) {
      return setTimeout(e, t.delay)
    } : mi
  }

  function wi(t, e, n) {
    void 0 === n && (n = ye), "boolean" == typeof n && (n = {
      fireImmediately: n
    });
    var i, o, r, s = n.name || "Reaction@" + we(),
      a = vi(s, n.onError ? (i = n.onError, o = e, function() {
        try {
          return o.apply(this, arguments)
        } catch (t) {
          i.call(this, t)
        }
      }) : e),
      u = !n.scheduler && !n.delay,
      c = bi(n),
      h = !0,
      l = !1,
      d = n.compareStructural ? ze.structural : n.equals || ze.default,
      p = new ni(s, (function() {
        h || u ? f() : l || (l = !0, c(f))
      }), n.onError, n.requiresObservable);

    function f() {
      if (l = !1, !p.isDisposed) {
        var e = !1;
        p.track((function() {
          var n = t(p);
          e = h || !d(r, n), r = n
        })), h && n.fireImmediately && a(r, p), h || !0 !== e || a(r, p), h && (h = !1)
      }
    }
    return p.schedule(), p.getDisposer()
  }

  function xi(t, e, n) {
    return Ti("onBecomeUnobserved", t, e, n)
  }

  function Ti(t, e, n, i) {
    var o = "function" == typeof i ? lo(e, n) : lo(e),
      r = "function" == typeof i ? i : n,
      s = o[t];
    return "function" != typeof s ? xe(!1) : (o[t] = function() {
      s.call(this), r.call(this)
    }, function() {
      o[t] = s
    })
  }

  function _i(t, e, n, i) {
    var o = (i = an(i)).defaultDecorator || (!1 === i.deep ? ln : cn);
    Ze(t), oo(t, i.name, o.enhancer), Jn();
    try {
      for (var r = Object.getOwnPropertyNames(e), s = 0, a = r.length; s < a; s++) {
        var u = r[s],
          c = Object.getOwnPropertyDescriptor(e, u);
        0;
        var h = (n && u in n ? n[u] : c.get ? mn : o)(t, u, c, !0);
        h && Object.defineProperty(t, u, h)
      }
    } finally {
      Qn()
    }
    return t
  }

  function ki(t) {
    var e, n, i = {
      name: t.name
    };
    return t.observing && t.observing.length > 0 && (i.dependencies = (e = t.observing, n = [], e.forEach((function(t) {
      -1 === n.indexOf(t) && n.push(t)
    })), n).map(ki)), i
  }

  function Si() {
    this.message = "FLOW_CANCELLED"
  }

  function Ii(t, e) {
    if (null == t) return !1;
    if (void 0 !== e) {
      if (ho(t)) {
        var n = t.$mobx;
        return n.values && !!n.values[e]
      }
      return !1
    }
    return ho(t) || !!t.$mobx || Ue(t) || ai(t) || Wn(t)
  }

  function Bi(t) {
    return 1 !== arguments.length && xe(!1), Ii(t)
  }
  Si.prototype = Object.create(Error.prototype);

  function Di(t, e) {
    void 0 === e && (e = void 0), Jn();
    try {
      return t.apply(e)
    } finally {
      Qn()
    }
  }

  function Ci(t) {
    return void 0 !== t.interceptors && t.interceptors.length > 0
  }

  function Ei(t, e) {
    var n = t.interceptors || (t.interceptors = []);
    return n.push(e), _e((function() {
      var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
    }))
  }

  function Pi(t, e) {
    var n = Dn();
    try {
      var i = t.interceptors;
      if (i)
        for (var o = 0, r = i.length; o < r && (Te(!(e = i[o](e)) || e.type, "Intercept handlers should return nothing or a change object"), e); o++);
      return e
    } finally {
      Cn(n)
    }
  }

  function Mi(t) {
    return void 0 !== t.changeListeners && t.changeListeners.length > 0
  }

  function Oi(t, e) {
    var n = t.changeListeners || (t.changeListeners = []);
    return n.push(e), _e((function() {
      var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
    }))
  }

  function Li(t, e) {
    var n = Dn(),
      i = t.changeListeners;
    if (i) {
      for (var o = 0, r = (i = i.slice()).length; o < r; o++) i[o](e);
      Cn(n)
    }
  }
  var Ai, Ri, Ni, ji, Gi = (Ai = !1, Ri = {}, Object.defineProperty(Ri, "0", {
      set: function() {
        Ai = !0
      }
    }), Object.create(Ri)[0] = 1, !1 === Ai),
    Fi = 0,
    Vi = function() {};
  Ni = Vi, ji = Array.prototype, void 0 !== Object.setPrototypeOf ? Object.setPrototypeOf(Ni.prototype, ji) : void 0 !== Ni.prototype.__proto__ ? Ni.prototype.__proto__ = ji : Ni.prototype = ji, Object.isFrozen(Array) && ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach((function(t) {
    Object.defineProperty(Vi.prototype, t, {
      configurable: !0,
      writable: !0,
      value: Array.prototype[t]
    })
  }));
  var Ui = function() {
      function t(t, e, n, i) {
        this.array = n, this.owned = i, this.values = [], this.lastKnownLength = 0, this.atom = new Ve(t || "ObservableArray@" + we()), this.enhancer = function(n, i) {
          return e(n, i, t + "[..]")
        }
      }
      return t.prototype.dehanceValue = function(t) {
        return void 0 !== this.dehancer ? this.dehancer(t) : t
      }, t.prototype.dehanceValues = function(t) {
        return void 0 !== this.dehancer && t.length > 0 ? t.map(this.dehancer) : t
      }, t.prototype.intercept = function(t) {
        return Ei(this, t)
      }, t.prototype.observe = function(t, e) {
        return void 0 === e && (e = !1), e && t({
          object: this.array,
          type: "splice",
          index: 0,
          added: this.values.slice(),
          addedCount: this.values.length,
          removed: [],
          removedCount: 0
        }), Oi(this, t)
      }, t.prototype.getArrayLength = function() {
        return this.atom.reportObserved(), this.values.length
      }, t.prototype.setArrayLength = function(t) {
        if ("number" != typeof t || t < 0) throw new Error("[mobx.array] Out of range: " + t);
        var e = this.values.length;
        if (t !== e)
          if (t > e) {
            for (var n = new Array(t - e), i = 0; i < t - e; i++) n[i] = void 0;
            this.spliceWithArray(e, 0, n)
          } else this.spliceWithArray(t, e - t)
      }, t.prototype.updateArrayLength = function(t, e) {
        if (t !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += e, e > 0 && t + e + 1 > Fi && Hi(t + e + 1)
      }, t.prototype.spliceWithArray = function(t, e, n) {
        var i = this;
        kn(this.atom);
        var o = this.values.length;
        if (void 0 === t ? t = 0 : t > o ? t = o : t < 0 && (t = Math.max(0, o + t)), e = 1 === arguments.length ? o - t : null == e ? 0 : Math.max(0, Math.min(e, o - t)), void 0 === n && (n = ge), Ci(this)) {
          var r = Pi(this, {
            object: this.array,
            type: "splice",
            index: t,
            removedCount: e,
            added: n
          });
          if (!r) return ge;
          e = r.removedCount, n = r.added
        }
        n = 0 === n.length ? n : n.map((function(t) {
          return i.enhancer(t, void 0)
        }));
        var s = n.length - e;
        this.updateArrayLength(o, s);
        var a = this.spliceItemsIntoValues(t, e, n);
        return 0 === e && 0 === n.length || this.notifyArraySplice(t, n, a), this.dehanceValues(a)
      }, t.prototype.spliceItemsIntoValues = function(t, e, n) {
        var i;
        if (n.length < 1e4) return (i = this.values).splice.apply(i, Ye([t, e], n));
        var o = this.values.slice(t, t + e);
        return this.values = this.values.slice(0, t).concat(n, this.values.slice(t + e)), o
      }, t.prototype.notifyArrayChildUpdate = function(t, e, n) {
        var i = !this.owned && ui(),
          o = Mi(this),
          r = o || i ? {
            object: this.array,
            type: "update",
            index: t,
            newValue: e,
            oldValue: n
          } : null;
        i && hi(qe(qe({}, r), {
          name: this.atom.name
        })), this.atom.reportChanged(), o && Li(this, r), i && di()
      }, t.prototype.notifyArraySplice = function(t, e, n) {
        var i = !this.owned && ui(),
          o = Mi(this),
          r = o || i ? {
            object: this.array,
            type: "splice",
            index: t,
            removed: n,
            added: e,
            removedCount: n.length,
            addedCount: e.length
          } : null;
        i && hi(qe(qe({}, r), {
          name: this.atom.name
        })), this.atom.reportChanged(), o && Li(this, r), i && di()
      }, t
    }(),
    Wi = function(t) {
      function e(e, n, i, o) {
        void 0 === i && (i = "ObservableArray@" + we()), void 0 === o && (o = !1);
        var r = t.call(this) || this,
          s = new Ui(i, n, r, o);
        if (De(r, "$mobx", s), e && e.length) {
          var a = jn(!0);
          r.spliceWithArray(0, 0, e), Gn(a)
        }
        return Gi && Object.defineProperty(s.array, "0", Xi), r
      }
      return He(e, t), e.prototype.intercept = function(t) {
        return this.$mobx.intercept(t)
      }, e.prototype.observe = function(t, e) {
        return void 0 === e && (e = !1), this.$mobx.observe(t, e)
      }, e.prototype.clear = function() {
        return this.splice(0)
      }, e.prototype.concat = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return this.$mobx.atom.reportObserved(), Array.prototype.concat.apply(this.peek(), t.map((function(t) {
          return Ki(t) ? t.peek() : t
        })))
      }, e.prototype.replace = function(t) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, t)
      }, e.prototype.toJS = function() {
        return this.slice()
      }, e.prototype.toJSON = function() {
        return this.toJS()
      }, e.prototype.peek = function() {
        return this.$mobx.atom.reportObserved(), this.$mobx.dehanceValues(this.$mobx.values)
      }, e.prototype.find = function(t, e, n) {
        void 0 === n && (n = 0);
        var i = this.findIndex.apply(this, arguments);
        return -1 === i ? void 0 : this.get(i)
      }, e.prototype.findIndex = function(t, e, n) {
        void 0 === n && (n = 0);
        for (var i = this.peek(), o = i.length, r = n; r < o; r++)
          if (t.call(e, i[r], r, this)) return r;
        return -1
      }, e.prototype.splice = function(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        switch (arguments.length) {
          case 0:
            return [];
          case 1:
            return this.$mobx.spliceWithArray(t);
          case 2:
            return this.$mobx.spliceWithArray(t, e)
        }
        return this.$mobx.spliceWithArray(t, e, n)
      }, e.prototype.spliceWithArray = function(t, e, n) {
        return this.$mobx.spliceWithArray(t, e, n)
      }, e.prototype.push = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = this.$mobx;
        return n.spliceWithArray(n.values.length, 0, t), n.values.length
      }, e.prototype.pop = function() {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0]
      }, e.prototype.shift = function() {
        return this.splice(0, 1)[0]
      }, e.prototype.unshift = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = this.$mobx;
        return n.spliceWithArray(0, 0, t), n.values.length
      }, e.prototype.reverse = function() {
        var t = this.slice();
        return t.reverse.apply(t, arguments)
      }, e.prototype.sort = function(t) {
        var e = this.slice();
        return e.sort.apply(e, arguments)
      }, e.prototype.remove = function(t) {
        var e = this.$mobx.dehanceValues(this.$mobx.values).indexOf(t);
        return e > -1 && (this.splice(e, 1), !0)
      }, e.prototype.move = function(t, e) {
        function n(t) {
          if (t < 0) throw new Error("[mobx.array] Index out of bounds: " + t + " is negative");
          var e = this.$mobx.values.length;
          if (t >= e) throw new Error("[mobx.array] Index out of bounds: " + t + " is not smaller than " + e)
        }
        if (n.call(this, t), n.call(this, e), t !== e) {
          var i, o = this.$mobx.values;
          i = t < e ? Ye(o.slice(0, t), o.slice(t + 1, e + 1), [o[t]], o.slice(e + 1)) : Ye(o.slice(0, e), [o[t]], o.slice(e, t), o.slice(t + 1)), this.replace(i)
        }
      }, e.prototype.get = function(t) {
        var e = this.$mobx;
        if (e) {
          if (t < e.values.length) return e.atom.reportObserved(), e.dehanceValue(e.values[t]);
          console.warn("[mobx.array] Attempt to read an array index (" + t + ") that is out of bounds (" + e.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
        }
      }, e.prototype.set = function(t, e) {
        var n = this.$mobx,
          i = n.values;
        if (t < i.length) {
          kn(n.atom);
          var o = i[t];
          if (Ci(n)) {
            var r = Pi(n, {
              type: "update",
              object: this,
              index: t,
              newValue: e
            });
            if (!r) return;
            e = r.newValue
          }(e = n.enhancer(e, o)) !== o && (i[t] = e, n.notifyArrayChildUpdate(t, e, o))
        } else {
          if (t !== i.length) throw new Error("[mobx.array] Index out of bounds, " + t + " is larger than " + i.length);
          n.spliceWithArray(t, 0, [e])
        }
      }, e
    }(Vi);
  Ne(Wi.prototype, (function() {
      this.$mobx.atom.reportObserved();
      var t = this,
        e = 0;
      return je({
        next: function() {
          return e < t.length ? {
            value: t[e++],
            done: !1
          } : {
            done: !0,
            value: void 0
          }
        }
      })
    })), Object.defineProperty(Wi.prototype, "length", {
      enumerable: !1,
      configurable: !0,
      get: function() {
        return this.$mobx.getArrayLength()
      },
      set: function(t) {
        this.$mobx.setArrayLength(t)
      }
    }), Be(Wi.prototype, Ge(), "Array"), ["indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach((function(t) {
      var e = Array.prototype[t];
      Te("function" == typeof e, "Base function not defined on Array prototype: '" + t + "'"), Be(Wi.prototype, t, (function() {
        return e.apply(this.peek(), arguments)
      }))
    })), ["every", "filter", "forEach", "map", "some"].forEach((function(t) {
      Te("function" == typeof Array.prototype[t], "Base function not defined on Array prototype: '" + t + "'"), Be(Wi.prototype, t, (function(e, n) {
        var i = this,
          o = this.$mobx;
        return o.atom.reportObserved(), o.dehanceValues(o.values)[t]((function(t, o) {
          return e.call(n, t, o, i)
        }), n)
      }))
    })), ["reduce", "reduceRight"].forEach((function(t) {
      Be(Wi.prototype, t, (function() {
        var e = this,
          n = this.$mobx;
        n.atom.reportObserved();
        var i = arguments[0];
        return arguments[0] = function(t, o, r) {
          return o = n.dehanceValue(o), i(t, o, r, e)
        }, n.values[t].apply(n.values, arguments)
      }))
    })),
    function(t, e) {
      for (var n = 0; n < e.length; n++) Be(t, e[n], t[e[n]])
    }(Wi.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
  var Xi = zi(0);

  function zi(t) {
    return {
      enumerable: !1,
      configurable: !1,
      get: function() {
        return this.get(t)
      },
      set: function(e) {
        this.set(t, e)
      }
    }
  }

  function $i(t) {
    Object.defineProperty(Wi.prototype, "" + t, zi(t))
  }

  function Hi(t) {
    for (var e = Fi; e < t; e++) $i(e);
    Fi = t
  }
  Hi(1e3);
  var qi = Ce("ObservableArrayAdministration", Ui);

  function Ki(t) {
    return Se(t) && qi(t.$mobx)
  }
  var Yi = {},
    Ji = function() {
      function t(t, e, n) {
        if (void 0 === e && (e = en), void 0 === n && (n = "ObservableMap@" + we()), this.enhancer = e, this.name = n, this.$mobx = Yi, this._keysAtom = We(this.name + ".keys()"), "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        this._data = new Map, this._hasMap = new Map, this.merge(t)
      }
      return t.prototype._has = function(t) {
        return this._data.has(t)
      }, t.prototype.has = function(t) {
        var e = this;
        if (!Hn.trackingDerivation) return this._has(t);
        var n = this._hasMap.get(t);
        if (!n) {
          var i = n = new Fn(this._has(t), nn, this.name + "." + Qi(t) + "?", !1);
          this._hasMap.set(t, i), xi(i, (function() {
            return e._hasMap.delete(t)
          }))
        }
        return n.get()
      }, t.prototype.set = function(t, e) {
        var n = this._has(t);
        if (Ci(this)) {
          var i = Pi(this, {
            type: n ? "update" : "add",
            object: this,
            newValue: e,
            name: t
          });
          if (!i) return this;
          e = i.newValue
        }
        return n ? this._updateValue(t, e) : this._addValue(t, e), this
      }, t.prototype.delete = function(t) {
        var e = this;
        if ((kn(this._keysAtom), Ci(this)) && !(o = Pi(this, {
            type: "delete",
            object: this,
            name: t
          }))) return !1;
        if (this._has(t)) {
          var n = ui(),
            i = Mi(this),
            o = i || n ? {
              type: "delete",
              object: this,
              oldValue: this._data.get(t).value,
              name: t
            } : null;
          return n && hi(qe(qe({}, o), {
            name: this.name,
            key: t
          })), Di((function() {
            e._keysAtom.reportChanged(), e._updateHasMapEntry(t, !1), e._data.get(t).setNewValue(void 0), e._data.delete(t)
          })), i && Li(this, o), n && di(), !0
        }
        return !1
      }, t.prototype._updateHasMapEntry = function(t, e) {
        var n = this._hasMap.get(t);
        n && n.setNewValue(e)
      }, t.prototype._updateValue = function(t, e) {
        var n = this._data.get(t);
        if ((e = n.prepareNewValue(e)) !== Hn.UNCHANGED) {
          var i = ui(),
            o = Mi(this),
            r = o || i ? {
              type: "update",
              object: this,
              oldValue: n.value,
              name: t,
              newValue: e
            } : null;
          i && hi(qe(qe({}, r), {
            name: this.name,
            key: t
          })), n.setNewValue(e), o && Li(this, r), i && di()
        }
      }, t.prototype._addValue = function(t, e) {
        var n = this;
        kn(this._keysAtom), Di((function() {
          var i = new Fn(e, n.enhancer, n.name + "." + Qi(t), !1);
          n._data.set(t, i), e = i.value, n._updateHasMapEntry(t, !0), n._keysAtom.reportChanged()
        }));
        var i = ui(),
          o = Mi(this),
          r = o || i ? {
            type: "add",
            object: this,
            name: t,
            newValue: e
          } : null;
        i && hi(qe(qe({}, r), {
          name: this.name,
          key: t
        })), o && Li(this, r), i && di()
      }, t.prototype.get = function(t) {
        return this.has(t) ? this.dehanceValue(this._data.get(t).get()) : this.dehanceValue(void 0)
      }, t.prototype.dehanceValue = function(t) {
        return void 0 !== this.dehancer ? this.dehancer(t) : t
      }, t.prototype.keys = function() {
        return this._keysAtom.reportObserved(), this._data.keys()
      }, t.prototype.values = function() {
        var t = this,
          e = this.keys();
        return je({
          next: function() {
            var n = e.next(),
              i = n.done,
              o = n.value;
            return {
              done: i,
              value: i ? void 0 : t.get(o)
            }
          }
        })
      }, t.prototype.entries = function() {
        var t = this,
          e = this.keys();
        return je({
          next: function() {
            var n = e.next(),
              i = n.done,
              o = n.value;
            return {
              done: i,
              value: i ? void 0 : [o, t.get(o)]
            }
          }
        })
      }, t.prototype.forEach = function(t, e) {
        var n = this;
        this._keysAtom.reportObserved(), this._data.forEach((function(i, o) {
          return t.call(e, n.get(o), o, n)
        }))
      }, t.prototype.merge = function(t) {
        var e = this;
        return Zi(t) && (t = t.toJS()), Di((function() {
          var n = jn(!0);
          try {
            Ie(t) ? Object.keys(t).forEach((function(n) {
              return e.set(n, t[n])
            })) : Array.isArray(t) ? t.forEach((function(t) {
              var n = Ke(t, 2),
                i = n[0],
                o = n[1];
              return e.set(i, o)
            })) : Ee(t) ? t.constructor !== Map ? xe("Cannot initialize from classes that inherit from Map: " + t.constructor.name) : t.forEach((function(t, n) {
              return e.set(n, t)
            })) : null != t && xe("Cannot initialize map from " + t)
          } finally {
            Gn(n)
          }
        })), this
      }, t.prototype.clear = function() {
        var t = this;
        Di((function() {
          Bn((function() {
            t._data.forEach((function(e, n) {
              return t.delete(n)
            }))
          }))
        }))
      }, t.prototype.replace = function(t) {
        var e = this;
        return Di((function() {
          var n = function(t) {
              if (Ee(t) || Zi(t)) return t;
              if (Array.isArray(t)) return new Map(t);
              if (Ie(t)) {
                var e = new Map;
                for (var n in t) e.set(n, t[n]);
                return e
              }
              return xe("Cannot convert to map from '" + t + "'")
            }(t),
            i = new Map,
            o = !1;
          if (Ae(e._data.keys(), (function(t) {
              if (!n.has(t))
                if (e.delete(t)) o = !0;
                else {
                  var r = e._data.get(t);
                  i.set(t, r)
                }
            })), Ae(n.entries(), (function(t) {
              var n = Ke(t, 2),
                r = n[0],
                s = n[1],
                a = e._data.has(r);
              if (e.set(r, s), e._data.has(r)) {
                var u = e._data.get(r);
                i.set(r, u), a || (o = !0)
              }
            })), !o)
            if (e._data.size !== i.size) e._keysAtom.reportChanged();
            else
              for (var r = e._data.keys(), s = i.keys(), a = r.next(), u = s.next(); !a.done;) {
                if (a.value !== u.value) {
                  e._keysAtom.reportChanged();
                  break
                }
                a = r.next(), u = s.next()
              }
          e._data = i
        })), this
      }, Object.defineProperty(t.prototype, "size", {
        get: function() {
          return this._keysAtom.reportObserved(), this._data.size
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.toPOJO = function() {
        var t = this,
          e = {};
        return this.forEach((function(n, i) {
          return e["symbol" == typeof i ? i : Qi(i)] = t.get(i)
        })), e
      }, t.prototype.toJS = function() {
        return new Map(this)
      }, t.prototype.toJSON = function() {
        return this.toPOJO()
      }, t.prototype.toString = function() {
        var t = this;
        return this.name + "[{ " + Me(this.keys()).map((function(e) {
          return Qi(e) + ": " + t.get(e)
        })).join(", ") + " }]"
      }, t.prototype.observe = function(t, e) {
        return Oi(this, t)
      }, t.prototype.intercept = function(t) {
        return Ei(this, t)
      }, t
    }();

  function Qi(t) {
    return t && t.toString ? t.toString() : new String(t).toString()
  }
  Ne(Ji.prototype, (function() {
    return this.entries()
  })), De(Ji.prototype, Ge(), "Map");
  var Zi = Ce("ObservableMap", Ji),
    to = {},
    eo = function() {
      function t(t, e, n) {
        if (void 0 === e && (e = en), void 0 === n && (n = "ObservableSet@" + we()), this.name = n, this.$mobx = to, this._data = new Set, this._atom = We(this.name), "function" != typeof Set) throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        this.enhancer = function(t, i) {
          return e(t, i, n)
        }, t && this.replace(t)
      }
      return t.prototype.dehanceValue = function(t) {
        return void 0 !== this.dehancer ? this.dehancer(t) : t
      }, t.prototype.clear = function() {
        var t = this;
        Di((function() {
          Bn((function() {
            t._data.forEach((function(e) {
              t.delete(e)
            }))
          }))
        }))
      }, t.prototype.forEach = function(t, e) {
        var n = this;
        this._atom.reportObserved(), this._data.forEach((function(i) {
          t.call(e, i, i, n)
        }))
      }, Object.defineProperty(t.prototype, "size", {
        get: function() {
          return this._atom.reportObserved(), this._data.size
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.add = function(t) {
        var e = this;
        if ((kn(this._atom), Ci(this)) && !(o = Pi(this, {
            type: "add",
            object: this,
            newValue: t
          }))) return this;
        if (!this.has(t)) {
          Di((function() {
            e._data.add(e.enhancer(t, void 0)), e._atom.reportChanged()
          }));
          var n = ui(),
            i = Mi(this),
            o = i || n ? {
              type: "add",
              object: this,
              newValue: t
            } : null;
          0, i && Li(this, o)
        }
        return this
      }, t.prototype.delete = function(t) {
        var e = this;
        if (Ci(this) && !(o = Pi(this, {
            type: "delete",
            object: this,
            oldValue: t
          }))) return !1;
        if (this.has(t)) {
          var n = ui(),
            i = Mi(this),
            o = i || n ? {
              type: "delete",
              object: this,
              oldValue: t
            } : null;
          return Di((function() {
            e._atom.reportChanged(), e._data.delete(t)
          })), i && Li(this, o), !0
        }
        return !1
      }, t.prototype.has = function(t) {
        return this._atom.reportObserved(), this._data.has(this.dehanceValue(t))
      }, t.prototype.entries = function() {
        var t = 0,
          e = Me(this.keys()),
          n = Me(this.values());
        return je({
          next: function() {
            var i = t;
            return t += 1, i < n.length ? {
              value: [e[i], n[i]],
              done: !1
            } : {
              done: !0
            }
          }
        })
      }, t.prototype.keys = function() {
        return this.values()
      }, t.prototype.values = function() {
        this._atom.reportObserved();
        var t, e = this,
          n = 0;
        return void 0 !== this._data.values ? t = Me(this._data.values()) : (t = [], this._data.forEach((function(e) {
          return t.push(e)
        }))), je({
          next: function() {
            return n < t.length ? {
              value: e.dehanceValue(t[n++]),
              done: !1
            } : {
              done: !0
            }
          }
        })
      }, t.prototype.replace = function(t) {
        var e = this;
        return no(t) && (t = t.toJS()), Di((function() {
          var n = jn(!0);
          try {
            Array.isArray(t) || Pe(t) ? (e.clear(), t.forEach((function(t) {
              return e.add(t)
            }))) : null != t && xe("Cannot initialize set from " + t)
          } finally {
            Gn(n)
          }
        })), this
      }, t.prototype.observe = function(t, e) {
        return Oi(this, t)
      }, t.prototype.intercept = function(t) {
        return Ei(this, t)
      }, t.prototype.toJS = function() {
        return new Set(this)
      }, t.prototype.toString = function() {
        return this.name + "[ " + Me(this.keys()).join(", ") + " ]"
      }, t
    }();
  Ne(eo.prototype, (function() {
    return this.values()
  })), De(eo.prototype, Ge(), "Set");
  var no = Ce("ObservableSet", eo),
    io = function() {
      function t(t, e, n) {
        this.target = t, this.name = e, this.defaultEnhancer = n, this.values = {}
      }
      return t.prototype.read = function(t, e) {
        if (this.target === t || (this.illegalAccess(t, e), this.values[e])) return this.values[e].get()
      }, t.prototype.write = function(t, e, n) {
        var i = this.target;
        i !== t && this.illegalAccess(t, e);
        var o = this.values[e];
        if (o instanceof Vn) o.set(n);
        else {
          if (Ci(this)) {
            if (!(a = Pi(this, {
                type: "update",
                object: i,
                name: e,
                newValue: n
              }))) return;
            n = a.newValue
          }
          if ((n = o.prepareNewValue(n)) !== Hn.UNCHANGED) {
            var r = Mi(this),
              s = ui(),
              a = r || s ? {
                type: "update",
                object: i,
                oldValue: o.value,
                name: e,
                newValue: n
              } : null;
            s && hi(qe(qe({}, a), {
              name: this.name,
              key: e
            })), o.setNewValue(n), r && Li(this, a), s && di()
          }
        }
      }, t.prototype.remove = function(t) {
        if (this.values[t]) {
          var e = this.target;
          if (Ci(this))
            if (!(r = Pi(this, {
                object: e,
                name: t,
                type: "remove"
              }))) return;
          try {
            Jn();
            var n = Mi(this),
              i = ui(),
              o = this.values[t].get();
            this.keys && this.keys.remove(t), delete this.values[t], delete this.target[t];
            var r = n || i ? {
              type: "remove",
              object: e,
              oldValue: o,
              name: t
            } : null;
            i && hi(qe(qe({}, r), {
              name: this.name,
              key: t
            })), n && Li(this, r), i && di()
          } finally {
            Qn()
          }
        }
      }, t.prototype.illegalAccess = function(t, e) {
        console.warn("Property '" + e + "' of '" + t + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
      }, t.prototype.observe = function(t, e) {
        return Oi(this, t)
      }, t.prototype.intercept = function(t) {
        return Ei(this, t)
      }, t.prototype.getKeys = function() {
        var t = this;
        return void 0 === this.keys && (this.keys = new Wi(Object.keys(this.values).filter((function(e) {
          return t.values[e] instanceof Fn
        })), nn, "keys(" + this.name + ")", !0)), this.keys.slice()
      }, t
    }();

  function oo(t, e, n) {
    void 0 === e && (e = ""), void 0 === n && (n = en);
    var i = t.$mobx;
    return i || (Ie(t) || (e = (t.constructor.name || "ObservableObject") + "@" + we()), e || (e = "ObservableObject@" + we()), De(t, "$mobx", i = new io(t, e, n)), i)
  }

  function ro(t, e, n, i) {
    var o = oo(t);
    if (Ci(o)) {
      var r = Pi(o, {
        object: t,
        name: e,
        type: "add",
        newValue: n
      });
      if (!r) return;
      n = r.newValue
    }
    n = (o.values[e] = new Fn(n, i, o.name + "." + e, !1)).value, Object.defineProperty(t, e, function(t) {
        return so[t] || (so[t] = {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.$mobx.read(this, t)
          },
          set: function(e) {
            this.$mobx.write(this, t, e)
          }
        })
      }(e)), o.keys && o.keys.push(e),
      function(t, e, n, i) {
        var o = Mi(t),
          r = ui(),
          s = o || r ? {
            type: "add",
            object: e,
            name: n,
            newValue: i
          } : null;
        r && hi(qe(qe({}, s), {
          name: t.name,
          key: n
        }));
        o && Li(t, s);
        r && di()
      }(o, t, e, n)
  }
  var so = Object.create(null),
    ao = Object.create(null);

  function uo(t) {
    var e = t.$mobx;
    return e || (Ze(t), t.$mobx)
  }
  var co = Ce("ObservableObjectAdministration", io);

  function ho(t) {
    return !!Se(t) && (Ze(t), co(t.$mobx))
  }

  function lo(t, e) {
    if ("object" == typeof t && null !== t) {
      if (Ki(t)) return void 0 !== e && xe(!1), t.$mobx.atom;
      if (no(t)) return t.$mobx;
      if (Zi(t)) {
        var n = t;
        return void 0 === e ? n._keysAtom : ((i = n._data.get(e) || n._hasMap.get(e)) || xe(!1), i)
      }
      var i;
      if (Ze(t), e && !t.$mobx && t[e], ho(t)) return e ? ((i = t.$mobx.values[e]) || xe(!1), i) : xe(!1);
      if (Ue(t) || Wn(t) || ai(t)) return t
    } else if ("function" == typeof t && ai(t.$mobx)) return t.$mobx;
    return xe(!1)
  }

  function po(t, e) {
    return t || xe("Expecting some object"), void 0 !== e ? po(lo(t, e)) : Ue(t) || Wn(t) || ai(t) || Zi(t) || no(t) ? t : (Ze(t), t.$mobx ? t.$mobx : void xe(!1))
  }
  var fo = Object.prototype.toString;

  function vo(t, e, n) {
    return void 0 === n && (n = -1), go(t, e, n)
  }

  function go(t, e, n, i, o) {
    if (t === e) return 0 !== t || 1 / t == 1 / e;
    if (null == t || null == e) return !1;
    if (t != t) return e != e;
    var r = typeof t;
    if ("function" !== r && "object" !== r && "object" != typeof e) return !1;
    t = yo(t), e = yo(e);
    var s = fo.call(t);
    if (s !== fo.call(e)) return !1;
    switch (s) {
      case "[object RegExp]":
      case "[object String]":
        return "" + t == "" + e;
      case "[object Number]":
        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
      case "[object Date]":
      case "[object Boolean]":
        return +t == +e;
      case "[object Symbol]":
        return "undefined" != typeof Symbol && Symbol.valueOf.call(t) === Symbol.valueOf.call(e)
    }
    var a = "[object Array]" === s;
    if (!a) {
      if ("object" != typeof t || "object" != typeof e) return !1;
      var u = t.constructor,
        c = e.constructor;
      if (u !== c && !("function" == typeof u && u instanceof u && "function" == typeof c && c instanceof c) && "constructor" in t && "constructor" in e) return !1
    }
    if (0 === n) return !1;
    n < 0 && (n = -1), o = o || [];
    for (var h = (i = i || []).length; h--;)
      if (i[h] === t) return o[h] === e;
    if (i.push(t), o.push(e), a) {
      if ((h = t.length) !== e.length) return !1;
      for (; h--;)
        if (!go(t[h], e[h], n - 1, i, o)) return !1
    } else {
      var l = Object.keys(t),
        d = void 0;
      if (h = l.length, Object.keys(e).length !== h) return !1;
      for (; h--;)
        if (!mo(e, d = l[h]) || !go(t[d], e[d], n - 1, i, o)) return !1
    }
    return i.pop(), o.pop(), !0
  }

  function yo(t) {
    return Ki(t) ? t.peek() : Ee(t) || Zi(t) || Pe(t) || no(t) ? Me(t.entries()) : t
  }

  function mo(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }

  function bo(t) {
    return function(e) {
      for (var n in t) this[n] = t[n](e[n])
    }
  }
  "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: function(t) {
      return Hn.spyListeners.push(t), _e((function() {
        Hn.spyListeners = Hn.spyListeners.filter((function(e) {
          return e !== t
        }))
      }))
    },
    extras: {
      getDebugName: function(t, e) {
        return (void 0 !== e ? lo(t, e) : ho(t) || Zi(t) || no(t) ? po(t) : lo(t)).name
      }
    },
    $mobx: "$mobx"
  });
  var wo = function(t) {
    return function(t, e) {
      return function(n) {
        return n ? n.split(t).map(e) : []
      }
    }(t, Number)
  };

  function xo(t) {
    return void 0 !== t ? function(e) {
      return e ? Number(e) : t
    } : Number
  }

  function To(t) {
    return t
  }
  var _o = function() {
      function t(t, e) {
        var n, i, o, r;
        this.skinDefMap = {}, this.heroList = [], this.goldSkins = [], this.petList = [], this.taskDefs = {}, this.totalSkins = 0, this.totalSkins = 0;
        try {
          for (var s = a(t), u = s.next(); !u.done; u = s.next()) {
            var c = u.value,
              h = new Io(c);
            this.skinDefMap[h.id] = h, 1 === h.skinType ? this.heroList.push(h) : 2 === h.skinType && this.petList.push(h), 3 === h.unlockType && this.goldSkins.push(h), this.totalSkins++
          }
        } catch (t) {
          n = {
            error: t
          }
        } finally {
          try {
            u && !u.done && (i = s.return) && i.call(s)
          } finally {
            if (n) throw n.error
          }
        }
        this.heroList.sort((function(t, e) {
          return t.sort - e.sort
        })), this.petList.sort((function(t, e) {
          return t.sort - e.sort
        }));
        try {
          for (var l = a(e), d = l.next(); !d.done; d = l.next()) {
            c = d.value, h = new So(c);
            this.taskDefs[h.id] = h;
            var p = this.findSkinDef(h.skinId);
            p ? p.taskId = h.id : console.warn("task ".concat(h.id, " 的 skinId ").concat(h.skinId, " 不存在"), h)
          }
        } catch (t) {
          o = {
            error: t
          }
        } finally {
          try {
            d && !d.done && (r = l.return) && r.call(l)
          } finally {
            if (o) throw o.error
          }
        }
      }
      return t.prototype.findTaskDef = function(t) {
        var e = this.findSkinDef(t);
        if (e) return this.taskDefs[e.taskId]
      }, t.prototype.getTaskDef = function(t) {
        return this.taskDefs[t]
      }, t.prototype.findSkinDef = function(t) {
        return this.skinDefMap[t]
      }, t
    }(),
    ko = _o,
    So = function(t) {
      function e() {
        var e = t.apply(this, c([], u(arguments), !1)) || this;
        return e.progress = 0, e
      }
      return n(e, t), e
    }(bo({
      id: Number,
      taskType: Number,
      value: Number,
      skinId: Number,
      showNeed: Number,
      preTask: Number
    })),
    Io = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      id: Number,
      name: String,
      skinType: Number,
      model: String,
      sort: Number,
      isHide: Boolean,
      fallSound: wo("|"),
      gold: xo(0),
      unlockType: Number
    }));
  ! function() {
    function t(t, e) {
      this.mean = t, this.deviation = e, this.randomSource = {
        next: function() {
          return Math.random()
        }
      }
    }
    t.prototype.next = function() {
      var t = 1 - this.randomSource.next(),
        e = 1 - this.randomSource.next();
      return Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e) * this.deviation + this.mean
    }
  }();

  function Bo(t, e, n) {
    void 0 === n && (n = !1);
    var i = e - t;
    return n && (i += 1), Math.floor(Math.random() * i + t)
  }

  function Do(t) {
    if (0 !== t.length) return t[Math.floor(Math.random() * t.length)]
  }

  function Co(t) {
    var e = 0;
    t.forEach((function(t) {
      e += t > 0 ? Number(t) : 0
    }));
    for (var n = Math.random() * e, i = 0, o = t.length; i < o; i++) {
      if (n < t[i]) return i;
      n -= t[i]
    }
    return t.length - 1
  }
  var Eo, Po = function() {
      function t(t) {
        var e, n;
        this.shareWords = {};
        var i = this.shareWords;
        try {
          for (var o = a(t), r = o.next(); !r.done; r = o.next()) {
            var s = r.value,
              u = new Oo(s),
              c = i[u.type];
            c || (c = i[u.type] = []), c.push(u)
          }
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o)
          } finally {
            if (e) throw e.error
          }
        }
      }
      return t.prototype.getRandomShareWorld = function(t) {
        var e = this.shareWords[t];
        if (e) {
          if (e = e.concat(), ul.createDays > $hostDef.shareDays)
            for (var n = e.length - 1; n >= 0; n--) e[n].needNew > 0 && e.splice(n, 1);
          else
            for (n = e.length - 1; n >= 0; n--) e[n].needOld > 0 && e.splice(n, 1);
          return Do(e)
        }
      }, t
    }(),
    Mo = Po,
    Oo = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      id: Number,
      image: String,
      type: Number,
      desc: String,
      needNew: xo(0),
      needOld: xo(0)
    })),
    Lo = wx.getSystemInfoSync(),
    Ao = function() {
      if (Fo() || jo()) return !1;
      if (window.devicePixelRatio <= 2) return !0;
      if (Ro()) {
        var t = Lo.model ? Lo.model.toLowerCase() : "";
        if (t.includes("iphone 4")) return !0;
        if (t.includes("iphone 5")) return !0;
        if (t.includes("iphone se")) return !0;
        if (t.includes("iphone 6")) return !0
      } else if (Lo.hasOwnProperty("benchmarkLevel")) return Number(Lo.benchmarkLevel) < 10;
      return !1
    }();

  function Ro() {
    return void 0 === Eo && (Eo = Lo.system.includes("iOS")), Eo
  }
  var No = void 0;

  function jo() {
    return void 0 === No && (No = "devtools" === Lo.brand), No
  }

  function Go(t) {
    var e = [];
    for (var n in t) t.hasOwnProperty(n) && e.push("".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(t[n])));
    return e.join("&")
  }

  function Fo() {
    return "windows" === Lo.platform || "mac" === Lo.platform
  }
  var Vo = u(Lo.SDKVersion.split(".").map(Number), 3),
    Uo = Vo[0],
    Wo = Vo[1],
    Xo = Vo[2];
  var zo = function() {
      function t(t) {
        var e, n;
        this.gameMap = {}, this.bannerList = [], this.gameList = [], this.mpList = [], this.mpProbList = [], this.showOverList = [], this.overProbList = [];
        try {
          for (var i = a(t), o = i.next(); !o.done; o = i.next()) {
            var r = o.value,
              s = new Ho(r);
            this.gameMap[s.id] = s, Ro() && !s.ios || (s.showOver && 1 === s.type && (this.showOverList.push(s), this.overProbList.push(s.prob)), 1 === s.type ? this.gameList.push(s) : (this.mpList.push(s), this.mpProbList.push(s.prob)), s.banner && s.prob > 0 && this.bannerList.push(s))
          }
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (e) throw e.error
          }
        }
      }
      return t.prototype.getRandomMpConfig = function() {
        return this.mpList[Co(this.mpProbList)]
      }, t.prototype.fliterSex = function(t) {
        for (var e = 0; e < this.showOverList.length; e++) {
          (n = this.showOverList[e]).sex.length > 0 && n.sex.indexOf(t) < 0 && (this.showOverList.splice(e, 1), this.overProbList.splice(e, 1), e--)
        }
        for (e = 0; e < this.gameList.length; e++) {
          (n = this.gameList[e]).sex.length > 0 && n.sex.indexOf(t) < 0 && (this.gameList.splice(e, 1), e--)
        }
        for (e = 0; e < this.mpList.length; e++) {
          (n = this.mpList[e]).sex.length > 0 && n.sex.indexOf(t) < 0 && (this.mpList.splice(e, 1), e--)
        }
        for (e = 0; e < this.bannerList.length; e++) {
          var n;
          (n = this.bannerList[e]).sex.length > 0 && n.sex.indexOf(t) < 0 && (this.bannerList.splice(e, 1), e--)
        }
      }, t.prototype.getGameList = function() {
        return this.gameList
      }, t.prototype.getBannerGames = function() {
        if (this.bannerList.length <= 2) return this.bannerList;
        for (var t = this.bannerList.concat(), e = [], n = 0; n < t.length; n++) e[n] = t[n].prob;
        var i = [],
          o = Co(e);
        i.push(t[o]), t.splice(o, 1), e.splice(o, 1);
        for (var r = i[0];;) {
          var s = t[Co(e)];
          if (s.banner !== r.banner) {
            i.push(s);
            break
          }
        }
        return i
      }, t.prototype.getShowOverGame = function() {
        for (var t = [], e = [], n = 0, i = this.showOverList.length; n < i; n++) {
          var o = this.showOverList[n];
          t.push(o), e.push(o.prob)
        }
        return t[Co(e)]
      }, t.prototype.getGame = function(t) {
        return this.gameMap[t]
      }, t
    }(),
    $o = zo,
    Ho = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      appId: To,
      path: To,
      id: Number,
      type: Number,
      desc: String,
      prob: Number,
      ios: Number,
      showOver: Number,
      image: String,
      icon: String,
      banner: To,
      sex: wo(",")
    })),
    qo = function() {
      function t(t) {
        var e, n;
        this.list = [], this.list = [];
        try {
          for (var i = a(t), o = i.next(); !o.done; o = i.next()) {
            var r = o.value,
              s = new Yo(r);
            this.list.push(s)
          }
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (e) throw e.error
          }
        }
        this.list.sort((function(t, e) {
          return t.stage - e.stage
        }))
      }
      return t.prototype.findDifficultyDef = function(t) {
        for (var e = 0, n = this.list.length; e < n - 1; e++) {
          var i = this.list[e];
          if (t <= i.stage) return i
        }
        return this.list[this.list.length - 1]
      }, t
    }(),
    Ko = qo,
    Yo = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      stage: Number,
      canGroup: wo("|"),
      distanceRange: wo("|")
    })),
    Jo = function(t) {
      var e, n;
      this.groupMap = {}, this.groupMap = [];
      try {
        for (var i = a(t), o = i.next(); !o.done; o = i.next()) {
          var r = o.value,
            s = new Zo(r);
          this.groupMap[s.id] = s
        }
      } catch (t) {
        e = {
          error: t
        }
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i)
        } finally {
          if (e) throw e.error
        }
      }
    },
    Qo = Jo,
    Zo = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      id: Number,
      distancePara: wo("|"),
      canBase: wo("|"),
      sameDirection: wo("|"),
      verticalMove: wo("|"),
      forwardMove: wo("|"),
      upMove: wo("|"),
      speed: xo(0)
    })),
    tr = function() {
      function t(t) {
        var e, n;
        this.defMap = {}, this.animalLevelMap = {}, this.animalList = [];
        try {
          for (var i = a(t), o = i.next(); !o.done; o = i.next()) {
            var r = o.value,
              s = new nr(r);
            this.defMap[s.id] = s, this.animalLevelMap[s.showLevel] = s, this.animalList.push(s)
          }
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (e) throw e.error
          }
        }
        this.animalList.sort((function(t, e) {
          return t.showLevel - e.showLevel
        }))
      }
      return t.prototype.getAnimalDef = function(t) {
        return this.defMap[t]
      }, t.prototype.getAnimalByLevel = function(t) {
        return this.animalLevelMap[t]
      }, t
    }(),
    er = tr,
    nr = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      id: Number,
      name: String,
      showLevel: Number,
      bonusScore: Number
    })),
    ir = function() {
      function t(t) {
        var e, n;
        this.expertMap = {}, this.expertList = [], this.finishFloors = [0], this.expertMap = [];
        try {
          for (var i = a(t), o = i.next(); !o.done; o = i.next()) {
            var r = o.value,
              s = new rr(r);
            0 !== s.id && (this.expertMap[s.id] = s, this.expertList.push(s), this.finishFloors[s.id] = s.finishFloor)
          }
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (e) throw e.error
          }
        }
        this.expertList.sort((function(t, e) {
          return e.id - t.id
        }))
      }
      return t.prototype.getExpertDef = function(t) {
        return this.expertMap[t]
      }, t
    }(),
    or = ir,
    rr = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      id: Number,
      name: String,
      finishFloor: Number,
      speed: xo(90)
    })),
    sr = function() {
      function t(t) {
        var e, n;
        this.map = {}, this.map = {};
        try {
          for (var i = a(t), o = i.next(); !o.done; o = i.next()) {
            var r = o.value,
              s = new ur(r);
            this.map[s.id] || (this.map[s.id] = []), this.map[s.id].push(s)
          }
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (e) throw e.error
          }
        }
        for (var u in this.map) this.map[u].sort((function(t, e) {
          return t.stage - e.stage
        }))
      }
      return t.prototype.findDifficultyDef = function(t, e) {
        for (var n = this.map[t], i = 0, o = n.length; i < o - 1; i++) {
          var r = n[i];
          if (e <= r.stage) return r
        }
        return n[n.length - 1]
      }, t
    }(),
    ar = sr,
    ur = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      id: Number,
      stage: Number,
      canGroup: wo("|"),
      distanceRange: wo("|")
    })),
    cr = function() {
      function t(t) {
        var e, n;
        this.noticeMap = {};
        try {
          for (var i = a(t), o = i.next(); !o.done; o = i.next()) {
            var r = o.value,
              s = new lr(r);
            this.noticeMap[s.id] = s
          }
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (e) throw e.error
          }
        }
      }
      return t.prototype.getNoticeDef = function(t) {
        return this.noticeMap[t]
      }, t
    }(),
    hr = cr,
    lr = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return n(e, t), e
    }(bo({
      id: Number,
      text: String,
      shareType: Number
    })),
    dr = THREE;

  function pr(t) {
    return "0x".concat(t < 4096 ? "0" : "").concat(t.toString(16).toUpperCase())
  }
  var fr = function() {
      function t(t) {
        void 0 === t && (t = !1), this.isRoot = t, this.timer = function() {
          return function(t) {
            var e = t.getHours(),
              n = t.getMinutes(),
              i = t.getSeconds(),
              o = t.getMilliseconds(),
              r = "".concat(n < 10 ? "0" : "").concat(n),
              s = "".concat(i < 10 ? "0" : "").concat(i),
              a = "".concat(o < 100 ? "0" : "").concat(o < 10 ? "0" : "").concat(o);
            return "".concat(e, ":").concat(r, ":").concat(s, ".").concat(a)
          }(new Date)
        }
      }
      return t.prototype.log = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.category ? console.info.apply(console, c(["".concat(this.timer()).concat(this.category)], u(t), !1)) : console.info.apply(console, c([this.timer()], u(t), !1))
      }, t.prototype.info = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.category ? console.info.apply(console, c(["".concat(this.timer()).concat(this.category)], u(t), !1)) : console.info.apply(console, c([this.timer()], u(t), !1))
      }, t.prototype.warn = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.category ? console.warn.apply(console, c(["".concat(this.timer()).concat(this.category)], u(t), !1)) : console.warn.apply(console, c([this.timer()], u(t), !1))
      }, t.prototype.error = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.category ? console.error.apply(console, c(["".concat(this.timer()).concat(this.category)], u(t), !1)) : console.error.apply(console, c([this.timer()], u(t), !1))
      }, t.prototype.withCategory = function(e) {
        var n = this.isRoot ? new t : this;
        return n.category = " [".concat(e, "]"), n
      }, t.prototype.setTimer = function(e) {
        var n = this.isRoot ? new t : this;
        return n.timer = e, n
      }, t
    }(),
    vr = new fr(!0),
    gr = function() {
      function t() {
        this._folderDir = {}, this._fileDir = {}, this._rootUrl = "", this._rootLen = 0, this._versionT = 0, this._code = "", this._ver = 0
      }
      return Object.defineProperty(t.prototype, "rootUrl", {
        set: function(t) {
          this._rootUrl = t, this._rootLen = this._rootUrl.length
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.initVersionInfo = function(t) {
        this.readHeader(t);
        try {
          var e = t.body,
            n = e.folderObj,
            i = e.fileObj;
          this._folderDir = n, this._fileDir = i
        } catch (t) {
          DEVELOP && console.log(t)
        }
      }, t.prototype.getVersionNum = function(t) {
        var e = t.lastIndexOf("/"),
          n = t.substring(this._rootLen, e),
          i = t.substring(e + 1);
        return "/" === n && (n = ""), this._fileDir["".concat(this.getFolderIndex(n), "/").concat(i)]
      }, t.prototype.getVersionTime = function() {
        var t = new Date;
        return t.setTime(1e3 * this._versionT), "".concat(t.getFullYear()).concat(t.getMonth() + 1 < 10 ? "0" : "").concat(t.getMonth() + 1).concat(t.getDate() < 10 ? "0" : "").concat(t.getDate()).concat(t.toLocaleTimeString(void 0, {
          hour12: !1
        }).split(":").join(""))
      }, t.prototype.getVersionT = function() {
        return this._versionT
      }, t.prototype.readHeader = function(t) {
        this._code = t.code, this._ver = t.ver
      }, t.prototype.getFolderIndex = function(t) {
        return this._folderDir[t]
      }, t
    }(),
    yr = vr.withCategory("version"),
    mr = function() {
      function t(t, e) {
        void 0 === t && (t = "version"), void 0 === e && (e = "resm"), this.versionsDir = t, this.resMD5Dir = e, this.versionInfo = new gr, this._loaded = !1, this.versionInfo.rootUrl = ""
      }
      return Object.defineProperty(t.prototype, "isLoaded", {
        get: function() {
          return this._loaded
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.init = function() {
        return r(this, void 0, void 0, (function() {
          var t, e, n;
          return s(this, (function(i) {
            switch (i.label) {
              case 0:
                return t = $hostDef.version ? $hostDef.version : 1718969302, console.log("-----LOAD VERSION-----", t), e = "".concat(Tr, "/").concat(this.versionsDir, "/version").concat(t, ".json"), yr.log("loading... ".concat(e)), [4, ms(e)];
              case 1:
                return n = i.sent(), this.versionInfo.initVersionInfo(n), yr.log("loaded ".concat(1718969302)), this._loaded = !0, [2]
            }
          }))
        }))
      }, t.prototype.getUrl = function(t) {
        if (!t) return "";
        if (!this._loaded) return "resource/".concat(t);
        var e = t.split("?")[0],
          n = this.versionInfo.getVersionNum(e);
        if (!n) return "resource/".concat(t);
        var i = e.split("."),
          o = i[i.length - 1];
        return "".concat(this.resMD5Dir, "/").concat(n, ".").concat(o)
      }, t
    }(),
    br = new mr;

  function wr(t) {
    return t.startsWith("dlc/") ? t : "".concat(Tr, "/").concat(br.getUrl(t))
  }
  var xr = "https://bridge.i51game.com",
    Tr = ".",
    _r = "https://ver.i51game.com/bridge",
    kr = window.innerWidth,
    Sr = window.innerHeight,
    Ir = Math.min(2, window.devicePixelRatio),
    Br = kr / Sr,
    Dr = 750,
    Cr = Sr * (Dr / kr);
  console.log("logicHeight", Cr);
  var Er = 120,
    Pr = 20,
    Mr = [0, 46, 34, 25],
    Or = [3, 5, 10],
    Lr = 5;

  function Ar(t) {
    return Mr[t]
  }

  function Rr(t) {
    return .4 * Mr[t]
  }

  function Nr(t) {
    return Mr[t] / 3
  }(new dr.LoadingManager).setURLModifier((function(t) {
    return wr(t)
  }));
  var jr = [new dr.Color("#004488")],
    Gr = [new dr.Color("#D8DAE6")],
    Fr = wx.env.USER_DATA_PATH,
    Vr = vr.withCategory("res"),
    Ur = wx.getFileSystemManager(),
    Wr = "resm",
    Xr = "version",
    zr = "dlc/",
    $r = !1;

  function Hr(t) {
    return as(t)
  }
  ls(""), ls(Wr), ls(Xr),
    function() {
      if ($r) return;
      var t = "".concat(Fr, "/").concat(Wr);
      try {
        var e = Ur.readdirSync(t);
        if (e) {
          var n = [];
          0;
          for (var i = 0, o = 0; o < e.length; o++) {
            var r = t + "/" + e[o],
              s = Ur.statSync(r);
            s && (i += s.size, n.push({
              path: r,
              stats: s
            }))
          }
          var a = i / 1048576;
          0;
          var u = Date.now();
          if (a > 20)
            for (o = 0; o < n.length; o++) {
              var c = n[o];
              u - 1e3 * c.stats.lastAccessedTime > 6048e5 && us(c.path)
            }
        }
      } catch (t) {}
    }();
  var qr, Kr, Yr, Jr, Qr, Zr, ts, es, ns, is = {},
    os = {};

  function rs(t) {
    return is[t] ? Promise.resolve(is[t]) : (os[t] || (os[t] = function(t) {
      return r(this, void 0, void 0, (function() {
        var e, n, i;
        return s(this, (function(o) {
          switch (o.label) {
            case 0:
              return [4, ds("dlc/ui/".concat(t, ".json"))];
            case 1:
              return e = o.sent(), n = PIXI.BaseTexture.fromImage("dlc/ui/".concat(t, ".png")), i = new PIXI.Spritesheet(n, e), [2, new Promise((function(e) {
                i.parse((function() {
                  delete os[t], is[t] = i.textures, e(i.textures)
                }))
              }))]
          }
        }))
      }))
    }(t)), os[t])
  }

  function ss(t) {
    return r(this, void 0, void 0, (function() {
      return s(this, (function(e) {
        try {
          return [2, as("configs/".concat(t, ".json")).then(ds)]
        } catch (e) {
          return [2, oe.getJSON(wr("configs/".concat(t, ".json")))]
        }
        return [2]
      }))
    }))
  }

  function as(t) {
    return r(this, void 0, void 0, (function() {
      var e, n, i, o, r;
      return s(this, (function(s) {
        switch (s.label) {
          case 0:
            if (a = t, e = br.getUrl(a), $r || !e.startsWith(Wr)) return [2, "".concat(Tr, "/").concat(e)];
            n = "".concat(Fr, "/").concat(e), i = e.substr(5, 32), DEVELOP && Vr.log("fileMd5:", i), s.label = 1;
          case 1:
            return s.trys.push([1, 3, , 4]), [4, hs(n)];
          case 2:
            if ((o = s.sent()).digest !== i) throw Vr.warn("本地文件md5不符合 ".concat(o.digest, "!==").concat(i, " 将删除本地文件")), us(n), new Error("md5 err");
            return DEVELOP && Vr.log("文件md5校验ok", t, n), [2, n];
          case 3:
            return s.sent(), r = "".concat(Tr, "/").concat(e), DEVELOP && Vr.log("开始下载文件...", t, r), [2, new Promise((function(e) {
              wx.downloadFile({
                url: r,
                filePath: n,
                success: function(o) {
                  200 === o.statusCode ? (o.tempFilePath || (o.tempFilePath = n), DEVELOP && Vr.log("下载完成:", t, n), hs(n).then((function(o) {
                    o.digest !== i ? (Vr.warn("下载的文件md5不符合 ".concat(o.digest, "!==").concat(i, " 将删除本地文件")), cs(n), e(r)) : (DEVELOP && Vr.log("下载的文件md5校验ok", t, n), e(n))
                  })).catch((function(t) {
                    Vr.error("下载完成之后访问文件出错", t), e(r)
                  }))) : (Vr.error("[".concat(o.statusCode, "] ").concat(r)), cs(n), e(r))
                },
                fail: function(t) {
                  Vr.warn(t.errMsg), e(r)
                }
              })
            }))];
          case 4:
            return [2]
        }
        var a
      }))
    }))
  }

  function us(t) {
    try {
      Ur.unlinkSync(t), Vr.log("本地文件已删除", t)
    } catch (t) {}
  }

  function cs(t) {
    try {
      Ur.unlink({
        filePath: t,
        success: function() {
          Vr.log("本地文件已删除", t)
        },
        fail: function(t) {
          console.warn(t.errMsg)
        }
      })
    } catch (t) {}
  }

  function hs(t) {
    return new Promise((function(e, n) {
      Ur.getFileInfo({
        filePath: t,
        digestAlgorithm: "md5",
        success: e,
        fail: function(t) {
          return n(t.errMsg)
        }
      })
    }))
  }

  function ls(t) {
    if (!$r) {
      var e = "".concat(Fr, "/").concat(t);
      try {
        Ur.accessSync(e)
      } catch (t) {
        0;
        try {
          Ur.mkdirSync(e)
        } catch (t) {
          $r = !0, console.warn("mkdir error:", e, t)
        }
      }
    }
  }

  function ds(t) {
    return gs(t) || vs(t) ? fs(t) : oe.getJSON(t)
  }

  function ps(t) {
    return new Promise((function(e, n) {
      return Ur.readFile({
        filePath: t,
        encoding: "utf-8",
        success: function(t) {
          return e(t.data)
        },
        fail: function(t) {
          return n(t.errMsg)
        }
      })
    }))
  }

  function fs(t) {
    return new Promise((function(e, n) {
      return Ur.readFile({
        filePath: t,
        encoding: "utf-8",
        success: function(t) {
          try {
            e(JSON.parse(t.data))
          } catch (t) {
            n(t)
          }
        },
        fail: function(t) {
          return n(t.errMsg)
        }
      })
    }))
  }

  function vs(t) {
    return t.startsWith(Fr)
  }

  function gs(t) {
    return t.startsWith(zr)
  }

  function ys(t) {
    return r(this, void 0, void 0, (function() {
      var e, n;
      return s(this, (function(i) {
        switch (i.label) {
          case 0:
            if ($r) return [2, t];
            e = t.slice(t.lastIndexOf("/") + 1), n = "".concat(Fr, "/").concat(Xr, "/").concat(e), i.label = 1;
          case 1:
            return i.trys.push([1, 3, , 4]), DEVELOP && Vr.log("获取version...", n), [4, hs(n)];
          case 2:
            if (!i.sent()) throw new Error("now local file err");
            return DEVELOP && Vr.log("获取本地version成功", n), [2, n];
          case 3:
            return i.sent(),
              function() {
                if (!$r) {
                  var t = "".concat(Fr, "/").concat(Xr);
                  try {
                    var e = Ur.readdirSync(t);
                    if (e) {
                      DEVELOP && console.log("本地版本文件列表:\n", e);
                      for (var n = 0; n < e.length; n++) {
                        var i = t + "/" + e[n];
                        Ur.unlink({
                          filePath: i
                        }), DEVELOP && console.log("删除版本文件", i)
                      }
                    }
                  } catch (t) {}
                }
              }(), DEVELOP && Vr.log("获取失败，下载version...", t), [2, new Promise((function(e) {
                wx.downloadFile({
                  url: t,
                  filePath: n,
                  success: function(i) {
                    200 === i.statusCode ? (i.tempFilePath || (i.tempFilePath = n), DEVELOP && Vr.log("下载完成:", t), e(n)) : (Vr.error("[".concat(i.statusCode, "] ").concat(t)), cs(n), e(t))
                  },
                  fail: function(n) {
                    Vr.warn(n.errMsg), e(t)
                  }
                })
              }))];
          case 4:
            return [2]
        }
      }))
    }))
  }

  function ms(t) {
    return r(this, void 0, void 0, (function() {
      return s(this, (function(e) {
        try {
          return [2, ys(t).then(ds)]
        } catch (e) {
          return [2, oe.getJSON(t, void 0, 3)]
        }
        return [2]
      }))
    }))
  }

  function bs() {
    return Promise.all([ss("config").then((function(t) {
      var e, n = (e = t) && e.__v && e.__k ? ws(e.__v, e.__k) : e;
      return qr = new ko(n.skin, n.task), Kr = new Mo(n.shareword), Yr = new $o(n.games), Jr = new Ko(n.difficulty), Qr = new Qo(n.levelGroup), Zr = new er(n.animal), ts = new or(n.expertMode), es = new ar(n.expertDifficulty), ns = new hr(n.notice), n
    }))])
  }

  function ws(t, e) {
    if ("object" != typeof t) return t;
    for (var n in t) Array.isArray(t) ? t[n] = ws(t[n], e) : t.hasOwnProperty(n) && e[n] && (t[e[n]] = ws(t[n], e), delete t[n]);
    return t
  }
  var xs = new(function() {
      function t() {
        this._serverTimeDiff = 0
      }
      return t.prototype.syncServerTime = function(t) {
        this._serverTimeDiff = t - Date.now(), DEVELOP && console.log("curTime:", function(t, e) {
          e || (e = "yy-MM-dd hh:mm:ss");
          var n = {
            "y+": t.getFullYear(),
            "M+": t.getMonth() + 1,
            "d+": t.getDate(),
            "h+": t.getHours(),
            "m+": t.getMinutes(),
            "s+": t.getSeconds(),
            "q+": Math.floor((t.getMonth() + 3) / 3),
            "S+": t.getMilliseconds()
          };
          for (var i in n)
            if (new RegExp("(" + i + ")").test(e))
              if ("y+" === i) e = e.replace(RegExp.$1, ("" + n[i]).substr(4 - RegExp.$1.length));
              else if ("S+" === i) {
            var o = RegExp.$1.length;
            o = 1 === o ? 3 : o, e = e.replace(RegExp.$1, ("00" + n[i]).substr(("" + n[i]).length - 1, o))
          } else e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length));
          return e
        }(new Date(this.curTime)))
      }, Object.defineProperty(t.prototype, "curTime", {
        get: function() {
          return Date.now() + this._serverTimeDiff
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "curDay", {
        get: function() {
          return new Date(this.curTime).getDay()
        },
        enumerable: !1,
        configurable: !0
      }), t
    }()),
    Ts = new(function() {
      function t() {
        this.isShow = !1, this.isOffline = !1, this.isShowSkin = !1, this.lastTurntableVideoTime = 0, this.lastShareCoinTime = 0, this.isActorError = !1;
        var t = wx.getLaunchOptionsSync();
        vr.info("Launch Option:", t), this.query = t.query || {}, this.shareTicket = t.shareTicket
      }
      return Object.defineProperty(t.prototype, "showCoin", {
        get: function() {
          return !!jo() || !$hostDef.censor && !$hostDef.shareRevive && ul.createDays > $hostDef.shareDays
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "showBanner", {
        get: function() {
          if ("function" != typeof wx.createBannerAd || !$hostDef.bannerAd) return !1;
          if (!$hostDef.bannerTime) return !0;
          var t = new Date(xs.curTime);
          return t.getHours() >= $hostDef.bannerTime[0] && t.getHours() <= $hostDef.bannerTime[1]
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "showPacket", {
        get: function() {
          return this.showCoin && $hostDef.showPacket
        },
        enumerable: !1,
        configurable: !0
      }), o([fn], t.prototype, "isShow", void 0), o([fn], t.prototype, "isShowSkin", void 0), o([fn], t.prototype, "lastTurntableVideoTime", void 0), t
    }());

  function _s(t) {
    return new Promise((function(e) {
      return setTimeout(e, t)
    }))
  }

  function ks(t) {
    try {
      return PIXI.Sprite.fromFrame(t)
    } catch (t) {
      return new PIXI.Sprite
    }
  }

  function Ss(t) {
    try {
      return PIXI.Texture.fromFrame(t)
    } catch (t) {
      return PIXI.Texture.EMPTY
    }
  }

  function Is(t) {
    return PIXI.Sprite.fromImage(t)
  }

  function Bs(t) {
    var e = new PIXI.Sprite;
    return e.texture = PIXI.Texture.fromImage(t), e
  }

  function Ds(t, e, n, i, o) {
    var r = Ss(t);
    return new PIXI.mesh.NineSlicePlane(r, e, n, i, o)
  }

  function Cs(t, e, n, i, o) {
    return void 0 === i && (i = "left"), void 0 === o && (o = 26), new PIXI.Text(t, {
      fill: e,
      fontWeight: n ? "bold" : "normal",
      align: i || "left",
      fontSize: o || 26
    })
  }

  function Es(t, e, n, i, o, r) {
    return void 0 === r && (r = "left"), new PIXI.Text(t, {
      fill: e,
      fontWeight: o ? "bold" : "normal",
      align: r || "left",
      wordWrap: !0,
      breakWords: !0,
      fontSize: i,
      wordWrapWidth: n,
      leading: 5
    })
  }

  function Ps(t, e, n, i) {
    return new PIXI.extras.BitmapText(t, {
      font: "".concat(e, "px Bungee Regular"),
      align: i || "left",
      tint: n || 16777215
    })
  }
  var Ms = "pointerdown",
    Os = "pointerup",
    Ls = "pointercancel",
    As = "pointerout",
    Rs = "pointerupoutside",
    Ns = "pointermove",
    js = function() {
      function t() {
        this._destroyed = !1, this._destroyBag = []
      }
      return Object.defineProperty(t.prototype, "addToDestroy", {
        set: function(t) {
          this._destroyBag.push(t)
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.resetScale = function() {
        this._destroyed || this.skin && this.skin.scale && this.skin.scale.set(1, 1)
      }, Object.defineProperty(t.prototype, "skin", {
        get: function() {
          return null
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "scale", {
        get: function() {
          return this.skin ? this.skin.scale : new PIXI.Point(1, 1)
        },
        set: function(t) {
          this.skin && (this.skin.scale = t)
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.onInteractive = function(t) {}, Object.defineProperty(t.prototype, "interactive", {
        get: function() {
          return !!this.skin && this.skin.interactive
        },
        set: function(t) {
          this._destroyed || (this.onInteractive(t), this.skin && (this.skin.interactive = t))
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "x", {
        get: function() {
          return this.skin ? this.skin.x : 0
        },
        set: function(t) {
          this.skin && (this.skin.x = t)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "y", {
        get: function() {
          return this.skin ? this.skin.y : 0
        },
        set: function(t) {
          this.skin && (this.skin.y = t)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "width", {
        get: function() {
          return this.skin ? this.skin.width : 0
        },
        set: function(t) {
          this.skin && (this.skin.width = t)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "height", {
        get: function() {
          return this.skin ? this.skin.height : 0
        },
        set: function(t) {
          this.skin && (this.skin.height = t)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "visible", {
        get: function() {
          return !!this.skin && this.skin.visible
        },
        set: function(t) {
          this.skin && (this.skin.visible = t)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "alpha", {
        get: function() {
          return this.skin ? this.skin.alpha : 1
        },
        set: function(t) {
          this.skin && (this.skin.alpha = t)
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.addSkin = function(t) {
        this.skin && this.skin.addChild(t.skin)
      }, t.prototype.addSkinTo = function(t, e) {
        e.addChild(t.skin)
      }, t.prototype.on = function(t, e, n) {
        this.skin && this.skin.on(t, e, n)
      }, t.prototype.once = function(t, e, n) {
        this.skin && this.skin.once(t, e, n)
      }, t.prototype.off = function(t, e, n) {
        this.skin && this.skin.off(t, e, n)
      }, t.prototype.destroy = function() {
        this._destroyed = !0, this._destroyBag.forEach((function(t) {
          return t()
        })), this._destroyBag.length = 0, this.skin && (this.skin.parent && this.skin.parent.removeChild(this.skin), this.skin.destroy({
          children: !0
        }))
      }, t
    }(),
    Gs = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.sprite = ks("button_close.png"), e.sprite.interactive = !0, e.sprite.anchor.set(.5, .5), e.sprite.on(Ms, e.onTapDown, e), e.sprite.on(Os, e.onTapUp, e), e.sprite.on(Ls, e.onTapUp, e), e.sprite.on(As, e.onTapUp, e), e.sprite.on(Rs, e.onTapUp, e), e
      }
      return n(e, t), Object.defineProperty(e.prototype, "skin", {
        get: function() {
          return this.sprite
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.onTapUp = function() {
        this._destroyed || this.sprite && this.sprite.scale.set(1, 1)
      }, e.prototype.onTapDown = function() {
        this._destroyed || this.sprite && this.sprite.scale.set(.9, .9)
      }, e.prototype.destroy = function() {
        this.sprite && this.sprite.removeAllListeners(), t.prototype.destroy.call(this), this.sprite = null
      }, e
    }(js),
    Fs = function() {
      function t(t, e, n, i, o, r) {
        this.verticalMove = !1, this.forwardMove = !1, this.upMove = !1, this.speed = 0, this.paused = !1, this.needMove = !1, this.isJumping = !0, this.moveTime = 0, this.moveDistance = 0, this.sx = 0, this.sz = 0, this.sy = 0, this.totalDelta = 0, this.id = t, this.defaultX = this.x = e, this.defaultZ = this.z = n, this.defaultY = this.y = 0, this.type = i, this.dir = o, this.prevDir = r
      }
      return Object.defineProperty(t.prototype, "needMoveBack", {
        get: function() {
          return this.verticalMove || this.upMove
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.setMove = function(t, e, n, i) {
        var o;
        this.verticalMove = t, this.forwardMove = e, this.upMove = n, this.speed = i, this.needMove = this.verticalMove || this.forwardMove || this.upMove, this.needMove ? (0 === this.speed && (this.speed = 25), this.upMove ? this.moveDistance = (o = this.type, Mr[o]) : this.moveDistance = Rr(this.type), this.moveTime = this.moveDistance / this.speed, this.verticalMove ? 0 === this.prevDir ? this.sx = this.speed : this.sz = this.speed : this.forwardMove ? 0 === this.prevDir ? this.sz = this.speed : this.sx = this.speed : this.upMove && (this.y = (Math.random() - .5) * this.moveDistance, this.y > 0 ? this.totalDelta = 2 * this.moveTime + this.y / this.speed : this.totalDelta = Math.abs(this.y) / this.speed, this.sy = this.speed)) : this.sx = this.sy = this.sz = 0
      }, t.prototype.stopMove = function() {
        this.paused = !0
      }, t.prototype.moveBack = function() {
        this.needMove && (this.stopMove(), TWEEN.killTweensOf(this), new TWEEN.Tween(this).to({
          x: this.defaultX,
          y: this.defaultY,
          z: this.defaultZ
        }, 250).easing(TWEEN.Easing.Linear.None).start())
      }, t.prototype.resetToDefault = function() {
        TWEEN.killTweensOf(this), this.x = this.defaultX, this.z = this.defaultZ, this.y = this.defaultY
      }, t.prototype.update = function(t) {
        if (this.needMove && !this.paused && !this.isJumping) {
          this.totalDelta += t;
          var e = Math.floor(this.totalDelta / this.moveTime),
            n = this.totalDelta - e * this.moveTime,
            i = 0 !== this.sx ? this.moveDistance : 0,
            o = 0 !== this.sy ? this.moveDistance : 0,
            r = 0 !== this.sz ? this.moveDistance : 0,
            s = e % 4;
          0 === s ? (this.x = this.defaultX - this.sx * n, this.y = this.defaultY - this.sy * n, this.z = this.defaultZ - this.sz * n) : 1 === s ? (this.x = this.defaultX - i + this.sx * n, this.y = this.defaultY - o + this.sy * n, this.z = this.defaultZ - r + this.sz * n) : 2 === s ? (this.x = this.defaultX + this.sx * n, this.y = this.defaultY + this.sy * n, this.z = this.defaultZ + this.sz * n) : (this.x = this.defaultX + i - this.sx * n, this.y = this.defaultY + o - this.sy * n, this.z = this.defaultZ + r - this.sz * n)
        }
      }, t
    }(),
    Vs = "function" == typeof wx.createInterstitialAd;

  function Us() {
    Vs && fe.show()
  }
  var Ws, Xs = new(function() {
    function t() {
      this.fightId = 0, this.mapId = 0, this.isGameOver = !1, this.score = 0, this.state = 0, this.isGaming = !1, this.maxLevel = 0, this.level = 0, this.rulerCount = 0, this.rulerCd = 0, this.totalRulerCount = 0, this.rulerState = 0, this.isCoinRevived = !1, this.isVideoRevived = !1, this.isBuildComplete = !1, this.bridgeLength = 0, this.isWalkComplete = !1, this.totalPerfect = 0, this.maxContinuePerfect = 0, this.continuePerfect = 0, this.isUseAssist = 0, this.platformList = [], this.gainSkins = new Set, this.oldBestScore = 0, this.isRecommend = !1, this.isTouchDown = !1, this.isBridgeDown = !1, this.endTimeStamp = 0, this.isShareFight = !1, this.growSpeed = 0, this.lastInterstitialTime = 0, this.platformList.length = 0, this.level = 0, this.platformList[0] = this.createPlatformData(0, 0, 20, 1, 0, 0), this.lastInterstitialTime = Date.now()
    }
    return t.prototype.gotSkins = function(t) {
      var e = this;
      t && t.forEach((function(t) {
        return e.gainSkins.add(t)
      }))
    }, t.prototype.getStepResult = function(t) {
      return {
        level: t,
        score: this.score,
        totalPerfect: this.totalPerfect,
        continuePerfect: this.maxContinuePerfect,
        useAssist: this.isUseAssist
      }
    }, t.prototype.addScore = function(t, e) {
      4 === t ? (this.totalPerfect++, this.continuePerfect++, this.maxContinuePerfect = Math.max(this.maxContinuePerfect, this.continuePerfect)) : this.continuePerfect = 0;
      var n = (1 + ul.petBonusScore) * t * e;
      this.score += n;
      // LOCAL PERSIST: keep ul.bestScore in sync with current score so
      // the save-to-localStorage snapshot carries the latest value.
      if (this.score > ul.bestScore) { ul.bestScore = this.score; try { ul.__saveLocal && ul.__saveLocal(); } catch (_) {} }
      return 0 === this.rulerCount && this.rulerCd > 0 && this.rulerCd--, Date.now() - this.lastInterstitialTime > 1e3 * $hostDef.gameInterstitialSecond && (this.lastInterstitialTime = Date.now(), Us()), n
    }, Object.defineProperty(t.prototype, "canRevive", {
      get: function() {
        return $hostDef.censor ? !this.isVideoRevived : !this.isVideoRevived || !this.isCoinRevived
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.startGame = function(t, e) {
      void 0 === e && (e = 0), this.fightId = t, this.mapId = e, this.isVideoRevived = !1, this.isCoinRevived = !1, this.isGameOver = !1, this.score = 0, this.totalPerfect = 0, this.maxContinuePerfect = 0, this.continuePerfect = 0, this.isUseAssist = 0, this.isGaming = !0, this.state = 0, this.gainSkins.clear(), this.oldBestScore = ul.bestScore, this.rulerCount = 0, this.rulerCd = 0, this.totalRulerCount = 0, this.rulerState = 0, this.isRecommend = !1, this.isTouchDown = !1, this.growSpeed = e > 0 ? ts.getExpertDef(e).speed : 90, this.platformList.length = 0, this.level = 0, this.maxLevel = 0, this.createNewPlatforms()
    }, t.prototype.checkRulerState = function() {
      this.rulerCount > 0 || this.totalRulerCount >= 10 || this.rulerCd > 0 ? this.rulerState = 0 : ul.isGuide || ul.rulerCount > 0 ? this.rulerState = 1 : $hostDef.censor ? this.rulerState = 0 : Math.random() < $hostDef.videoPercent ? this.rulerState = 3 : this.rulerState = 2
    }, t.prototype.clearRulerState = function() {
      this.rulerState = 0
    }, t.prototype.addRuler = function() {
      this.rulerCount > 0 || this.totalRulerCount >= 10 || (this.rulerState = 0, this.rulerCount = 3, this.rulerCd = 10, this.totalRulerCount++)
    }, t.prototype.createPlatformData = function(t, e, n, i, o, r) {
      var s = new Fs(t, e, n, i, o, r);
      return t > this.maxLevel && (this.maxLevel = t), s
    }, t.prototype.createNewPlatforms = function() {
      var t, e = this.maxLevel,
        n = (t = 0 === this.mapId ? Jr.findDifficultyDef(e) : es.findDifficultyDef(this.mapId, e)).distanceRange[0] + (t.distanceRange[1] - t.distanceRange[0]) * Math.random(),
        i = t.canGroup[Math.floor(Math.random() * t.canGroup.length)],
        o = Qr.groupMap[i],
        r = 0,
        s = this.platformList.length;
      0 === s && (this.platformList[0] = this.createPlatformData(s, 0, 20, 1, 0, 0), r = 1);
      for (var a = o.distancePara.length; r < a; r++) {
        var u = s + r,
          c = n * o.distancePara[r],
          h = this.platformList[u - 1],
          l = Do(o.canBase),
          d = r + 1,
          p = o.sameDirection.indexOf(d) >= 0,
          f = o.verticalMove.indexOf(d) >= 0,
          v = o.forwardMove.indexOf(d) >= 0,
          g = o.upMove.indexOf(d) >= 0,
          y = Ar(h.type) / 2 + Ar(l) / 2 + 15;
        (h.forwardMove || h.verticalMove) && (y += Rr(h.type)), (f || v) && (y += Rr(l)), c < y && (c = y);
        var m = void 0,
          b = void 0,
          w = void 0;
        1 === h.dir ? (b = h.z, m = h.x - c, w = p ? 1 : 0) : (m = h.x, b = h.z - c, w = p ? 0 : 1);
        var x = this.createPlatformData(u, m, b, l, w, this.platformList[u - 1].dir);
        x.setMove(f, v, g, o.speed), this.platformList[u] = x
      }
    }, t.prototype.refreshNewPlatforms = function() {
      for (var t = this.getCurPlatform();;) {
        var e = this.getPlatform(t.id + 1);
        if (!e) break;
        0 === t.dir ? e.defaultX = e.x = t.x : e.defaultZ = e.z = t.z, t = e
      }
    }, t.prototype.getPlatform = function(t) {
      return this.platformList[t]
    }, t.prototype.getCurPlatform = function() {
      return this.platformList[this.level]
    }, t.prototype.getNextPlatform = function() {
      return this.platformList[this.level + 1]
    }, t.prototype.getNextSameDirectionPlatform = function() {
      for (var t, e = this.getCurPlatform().dir, n = this.level + 1;;) {
        var i = this.platformList[n];
        if (!i) break;
        if (t = i, i.dir !== e) break;
        n++
      }
      return t
    }, Object.defineProperty(t.prototype, "isNeedCreateNewPlatform", {
      get: function() {
        return this.platformList.length - 2 <= this.level
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.toBuildState = function() {
      this.state = 1, this.isBuildComplete = !1
    }, t.prototype.toWalkState = function() {
      this.isWalkComplete = !1, this.isBridgeDown = !1, this.state = 2
    }, t.prototype.toDropState = function() {
      this.state = 3, this.isTouchDown = !1, this.continuePerfect = 0
    }, t.prototype.toDeadState = function() {
      this.state = 4, this.isGameOver = !0, this.isGaming = !1, this.isTouchDown = !1, this.isBridgeDown = !1, this.isUseAssist = 0, this.rulerState = 0, this.endTimeStamp = Math.floor(xs.curTime / 1e3)
    }, t.prototype.toWaitState = function() {
      this.bridgeLength = 0, this.isBuildComplete = !1, this.isWalkComplete = !1, this.isUseAssist = 0, this.state = 0
    }, t.prototype.revive = function(t) {
      t ? this.isVideoRevived = !0 : this.isCoinRevived = !0, this.toWaitState();
      for (var e = this.getCurPlatform(), n = this.getNextSameDirectionPlatform(), i = e.id + 1; i <= n.id; i++) {
        var o = this.getPlatform(i);
        o && (o.paused = !1)
      }
    }, Object.defineProperty(t.prototype, "maxBridgeLength", {
      get: function() {
        for (var t, e = this.platformList[this.level], n = e.dir, i = this.level + 1;;) {
          var o = this.platformList[i];
          if (!o) break;
          if (t = o, o.dir !== n) break;
          i++
        }
        if (!t) return 1.3 * Ar(e.type);
        var r = t.x - e.x,
          s = t.z - e.z;
        return 1.3 * Math.sqrt(r * r + s * s)
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.update = function(t) {
      for (var e = this.level, n = this.platformList.length; e < n; e++) this.platformList[e].update(t);
      1 !== this.state || this.isBuildComplete || !this.isTouchDown || this.isBridgeDown || (this.bridgeLength += t * this.growSpeed, this.bridgeLength >= this.maxBridgeLength && (this.bridgeLength = this.maxBridgeLength, this.isBuildComplete = !0))
    }, o([fn], t.prototype, "isGameOver", void 0), o([fn], t.prototype, "score", void 0), o([fn], t.prototype, "state", void 0), o([fn], t.prototype, "isGaming", void 0), o([fn], t.prototype, "level", void 0), o([fn], t.prototype, "rulerCount", void 0), o([fn], t.prototype, "rulerState", void 0), t
  }());
  vr.withCategory("统计");

  function zs(t, e) {
    H.logEvent("游戏流程-".concat(t), e)
  }

  function $s(t) {
    H.logEvent("进入游戏-".concat(t))
  }

  function Hs(t) {
    switch (t) {
      case se.success:
      case se.notGroup:
      case se.timeEnough:
        return !0;
      case se.timeNotEnough:
      case se.fail:
      case se.cancel:
      default:
        return !1
    }
  }

  function qs(t, e, n, i) {
    return r(this, void 0, void 0, (function() {
      var o;
      return s(this, (function(r) {
        switch (r.label) {
          case 0:
            return a = n.shareSource, u = n.shareId, j(A.share, {
              ss: a,
              si: u
            }), [4, ce(t, e, n, i, Ro() ? 2.6 : 2)];
          case 1:
            return Hs(o = r.sent()) && (s = n.shareId, H.logEvent("分享图发送-".concat(s))), [2, o]
        }
        var s, a, u
      }))
    }))
  }

  function Ks(t) {
    var e = t.getContext("2d");
    return t.width = 750, t.height = 580, e.clearRect(0, 0, 750, 580), e
  }

  function Ys(t) {
    return r(this, void 0, void 0, (function() {
      var e, n, o, r, a, c, h, l, d, p, f, v;
      return s(this, (function(s) {
        switch (s.label) {
          case 0:
            return e = qr.findSkinDef(t), n = 1 === e.skinType ? 5 : 6, o = ea(n), r = i({}, o.queryData), a = o.title || "", c = o.imageUrl || "", a = a.replace(/{name}/g, qr.findSkinDef(t).name), [4, Promise.all([new Promise((function(t, e) {
              var n = wx.createImage();
              n.onload = function() {
                return t(n)
              }, n.onerror = e, n.src = c
            })).catch((function() {
              return console.error("分享背景图加载失败 (".concat(c, ")"))
            })), new Promise((function(e, n) {
              var i = wx.createImage();
              i.onload = function() {
                return e(i)
              }, i.onerror = n, i.src = wr("item/item".concat(t, ".png"))
            })).catch((function() {
              return console.error("分享素材加载失败 (item/item".concat(t, ".png)"))
            }))])];
          case 1:
            h = u.apply(void 0, [s.sent(), 2]), l = h[0], d = h[1], Ws || (Ws = wx.createCanvas()), f = Ks(p = Ws), l && f.drawImage(l, 0, 0), d && (v = 300, f.drawImage(d, 225, 140, v, v));
            try {
              c = p.toTempFilePathSync({
                x: 0,
                y: 0,
                width: p.width,
                height: p.height
              })
            } catch (t) {}
            return DEVELOP && console.log(c), [2, ta(5, a, c, r)]
        }
      }))
    }))
  }

  function Js(t) {
    return r(this, void 0, void 0, (function() {
      var e, n, o, r, a, u, c, h, l;
      return s(this, (function(s) {
        switch (s.label) {
          case 0:
            return e = qr.findSkinDef(t), n = 1 === e.skinType ? 5 : 6, o = ea(n), r = i({}, o.queryData), a = o.title || "", u = o.imageUrl || "", a = a.replace(/{name}/g, qr.findSkinDef(t).name), [4, new Promise((function(t, e) {
              var n = wx.createImage();
              n.onload = function() {
                return t(n)
              }, n.onerror = e, n.src = u
            })).catch((function() {
              return console.error("分享背景图加载失败 (".concat(u, ")"))
            }))];
          case 1:
            c = s.sent(), Ws || (Ws = wx.createCanvas()), l = Ks(h = Ws), c && l.drawImage(c, 0, 0);
            try {
              u = h.toTempFilePathSync({
                x: 0,
                y: 0,
                width: h.width,
                height: h.height
              })
            } catch (t) {}
            return DEVELOP && console.log(u), [2, ta(5, a, u, r)]
        }
      }))
    }))
  }

  function Qs(t) {
    return r(this, void 0, void 0, (function() {
      var e, n, o, r, a, u, c;
      return s(this, (function(s) {
        switch (s.label) {
          case 0:
            return e = ea(2), n = i({}, e.queryData), o = e.imageUrl || "", r = (e.title || "").replace(/{score}/g, t + ""), [4, new Promise((function(t, e) {
              var n = wx.createImage();
              n.onload = function() {
                return t(n)
              }, n.onerror = e, n.src = o
            })).catch((function() {
              return console.error("分享背景图加载失败 (".concat(o, ")"))
            }))];
          case 1:
            a = s.sent(), Ws || (Ws = wx.createCanvas()), c = Ks(u = Ws), a && c.drawImage(a, 0, 0), c.textAlign = "center", c.font = "80px SimHei", c.fillStyle = "#000000", c.fillText(String(t), 375, 170);
            try {
              o = u.toTempFilePathSync({
                x: 0,
                y: 0,
                width: u.width,
                height: u.height
              })
            } catch (t) {}
            return DEVELOP && console.log(o), [2, ta(5, r, o, n)]
        }
      }))
    }))
  }

  function Zs() {
    return r(this, void 0, void 0, (function() {
      var t, e, n, o;
      return s(this, (function(r) {
        return t = ea(1), e = i({}, t.queryData), n = t.title || "", o = t.imageUrl || "", [2, ta(1, n, o, e)]
      }))
    }))
  }

  function ta(t, e, n) {
    return r(this, arguments, void 0, (function(t, e, n, i) {
      return void 0 === i && (i = {}), s(this, (function(t) {
        return [2, qs(e, n, i)]
      }))
    }))
  }

  function ea(t) {
    var e = Math.floor(xs.curTime / 1e3),
      n = Kr.getRandomShareWorld(t);
    if (!n) {
      if (1 !== t) {
        var i = ea(1);
        return i.queryData.shareType = t, i
      }
      return {
        queryData: {
          fuid: ul.uid,
          shareType: t,
          timestamp: e
        }
      }
    }
    return {
      title: n.desc,
      imageUrl: wr("share/".concat(n.image, ".jpg")),
      queryData: {
        fuid: ul.uid,
        shareType: t,
        timestamp: e
      }
    }
  }
  var na, ia, oa, ra, sa = {
      101: "一局游戏中获得{0}分",
      102: "连续搭出{0}个完美过桥",
      103: "一局游戏中，累计搭出{0}个完美过桥",
      104: "累计使用{0}次辅助尺",
      105: "连续{0}天进行游戏",
      106: "累计{0}天进行游戏",
      107: "恰好{0}分结束游戏",
      108: "累计从公众号进入游戏{0}天",
      109: "邀请{0}个新玩家"
    },
    aa = "sound_lv2",
    ua = "sound_lv3",
    ca = "sound_lv4",
    ha = "sound_unlock",
    la = "sound_lv4_2",
    da = "sound_lv4_3",
    pa = "sound_highScore",
    fa = "bridge_lands",
    va = "bridge_growing",
    ga = "bridge_falls",
    ya = "expert_success",
    ma = function(t) {
      function e(e, n) {
        void 0 === n && (n = !0);
        var i = t.call(this) || this;
        return void 0 === n && (n = !0), i.sprite = ks(e), i.sprite.interactive = !0, n && i.sprite.anchor.set(.5, .5), i.sprite.on(Ms, i.onTapDown, i), i.sprite.on(Os, i.onTapUp, i), i.sprite.on(Ls, i.onTapUp, i), i.sprite.on(As, i.onTapUp, i), i.sprite.on(Rs, i.onTapUp, i), i
      }
      return n(e, t), e.prototype.setFrameId = function(t) {
        this.sprite.texture = Ss(t)
      }, Object.defineProperty(e.prototype, "skin", {
        get: function() {
          return this.sprite
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.onInteractive = function(t) {
        var e = this;
        this.clearDelay(), t || (this.timeOutId = setTimeout((function() {
          e.resetScale(), e.timeOutId = void 0
        }), 30))
      }, e.prototype.onTapUp = function() {
        this._destroyed || this.sprite && this.sprite.scale && this.sprite.scale.set(1, 1)
      }, e.prototype.onTapDown = function() {
        this._destroyed || this.sprite && this.sprite.scale && this.sprite.scale.set(.9, .9)
      }, e.prototype.clearDelay = function() {
        this.timeOutId && (clearTimeout(this.timeOutId), this.timeOutId = void 0)
      }, e.prototype.destroy = function() {
        this.clearDelay(), this.sprite && this.sprite.removeAllListeners(), t.prototype.destroy.call(this), this.sprite = null
      }, e
    }(js);
  Lo.model.includes("iPhone X") || Lo.statusBarHeight >= 42 ? (na = 88, ia = 42, oa = 15, ra = 15) : (na = 15, ia = 15, oa = 15, ra = 15);
  var ba = Dr - oa - ra,
    wa = Cr - na - ia,
    xa = {
      top: na,
      bottom: ia,
      left: oa,
      right: ra,
      width: ba,
      height: wa,
      halfWidth: ba / 2,
      halfHeight: wa / 2
    },
    Ta = function() {
      function t() {
        this.uiScale = 1, this.layerMap = {}, this.panelMap = {}, this.openedPopUpPanelCount = 0, this.activePanels = [], this.popUpPanelRefs = new Set
      }
      return t.prototype.init = function(t) {
        this.stage = t.stage, this.panelLayer = new PIXI.Container, this.popUpLayer = new PIXI.Container, this.topLayer = new PIXI.Container, this.stage.addChild(this.panelLayer), this.stage.addChild(this.popUpLayer), this.stage.addChild(this.topLayer), this.uiScale = Sr / Cr, this.stage.scale.set(this.uiScale, this.uiScale), this.layerMap[0] = this.panelLayer, this.layerMap[1] = this.popUpLayer, this.layerMap[2] = this.topLayer, this.fullScreenMask = new PIXI.Graphics, this.fullScreenMask.beginFill(3750460, 0), this.fullScreenMask.drawRect(0, 0, Dr, Cr), this.fullScreenMask.endFill(), this.fullScreenMask.interactive = !0, this.fullScreenMask.width = Dr, this.fullScreenMask.height = Cr
      }, t.prototype.preventTouch = function() {
        this.stage.addChild(this.fullScreenMask)
      }, t.prototype.cancelPreventTouch = function() {
        this.stage.removeChild(this.fullScreenMask)
      }, t.prototype.addView = function(t) {
        this.layerMap[t.panelType].addChild(t), t.panelType > 0 && (this.popUpPanelRefs.add(t), this.openedPopUpPanelCount = this.popUpPanelRefs.size, this.activePanels.indexOf(t) < 0 && this.activePanels.push(t))
      }, t.prototype.addMask = function(t, e) {
        this.layerMap[t].addChild(e)
      }, t.prototype.hasPanel = function(t) {
        return !!this.panelMap[t]
      }, t.prototype.showPanel = function(t, e) {
        var n = this.panelMap[t];
        return n && !n.isDisposed || (DEVELOP && n && n.isDisposed && console.warn("panel is not clean"), (n = this.panelMap[t] = new t).cls = t), 1 === n.panelType && (this.lastPopUpView && n !== this.lastPopUpView && this.lastPopUpView.canClose && this.lastPopUpView.close(), this.lastPopUpView = n), n.show(e), n
      }, t.prototype.getPanel = function(t) {
        return this.panelMap[t]
      }, t.prototype.destroyAllPopUps = function() {
        var t, e;
        try {
          for (var n = a(this.popUpPanelRefs), i = n.next(); !i.done; i = n.next()) {
            var o = i.value;
            o.panelType > 0 && this.destroyPanel(o)
          }
        } catch (e) {
          t = {
            error: e
          }
        } finally {
          try {
            i && !i.done && (e = n.return) && e.call(n)
          } finally {
            if (t) throw t.error
          }
        }
      }, t.prototype.destroyPanels = function(t) {
        var e, n;
        try {
          for (var i = a(this.popUpPanelRefs), o = i.next(); !o.done; o = i.next()) {
            var r = o.value;
            t.indexOf(r.name) >= 0 && this.destroyPanel(r)
          }
        } catch (t) {
          e = {
            error: t
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (e) throw e.error
          }
        }
      }, t.prototype.destroyPanel = function(t) {
        if (t) {
          if (this.lastPopUpView === t && (this.lastPopUpView = null), t.panelType > 0) {
            this.popUpPanelRefs.delete(t), this.openedPopUpPanelCount = this.popUpPanelRefs.size;
            var e = this.activePanels.indexOf(t);
            e >= 0 && this.activePanels.splice(e, 1)
          }
          t.destroy(), delete this.panelMap[t.cls]
        }
      }, o([fn], t.prototype, "lastPopUpView", void 0), o([fn], t.prototype, "openedPopUpPanelCount", void 0), o([fn], t.prototype, "activePanels", void 0), t
    }(),
    _a = new Ta,
    ka = function(t) {
      function e(e, n) {
        var i = t.call(this) || this;
        return i._isDisposed = !1, i.modal = !1, i._modalAlpha = .5, i.canTapMaskClose = !1, i._destroyBag = [], i.modal = e, i.panelType = n, i
      }
      return n(e, t), Object.defineProperty(e.prototype, "addToDestroy", {
        set: function(t) {
          this._destroyBag.push(t)
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.showModalMask = function() {
        var t = this;
        this.modalShape || (this.modalShape = new PIXI.Graphics, this.modalShape.beginFill(0, 1), this.modalShape.drawRect(0, 0, Dr, Cr), this.modalShape.endFill(), this.modalShape.interactive = !0, this.modalShape.alpha = this._modalAlpha, this.modalShape.on("tap", (function() {
          t.canTapMaskClose && t.close()
        }))), _a.addMask(this.panelType, this.modalShape)
      }, Object.defineProperty(e.prototype, "modalAlpha", {
        get: function() {
          return this._modalAlpha
        },
        set: function(t) {
          this._modalAlpha = t, this.modalShape && (this.modalShape.alpha = this._modalAlpha)
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.hideModal = function() {
        this.modalShape && this.modalShape.parent && this.modalShape.parent.removeChild(this.modalShape)
      }, e.prototype.addSkin = function(t) {
        this.addChild(t.skin)
      }, e.prototype.addSkinTo = function(t, e) {
        e.addChild(t.skin)
      }, e.prototype.hide = function() {
        this.modal && this.hideModal(), this.parent && this.parent.removeChild(this), this.onHide()
      }, e.prototype.show = function(t) {
        this.modal && this.showModalMask(), _a.addView(this), this.x = (Dr - this.width) / 2, this.y = xa.top + (Cr - this.height - xa.bottom) / 2, this.onShow(t)
      }, e.prototype.close = function() {
        this.isDisposed || _a.destroyPanel(this)
      }, Object.defineProperty(e.prototype, "canClose", {
        get: function() {
          return !this.isDisposed
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.destroy = function() {
        this.isDisposed || (this._destroyBag.forEach((function(t) {
          return t()
        })), this._destroyBag.length = 0, this.hide(), this.modalShape && (this.modalShape.destroy(), this.modalShape = null), this.onDestroy(), this._isDisposed = !0, t.prototype.destroy.call(this, {
          children: !0
        }))
      }, Object.defineProperty(e.prototype, "isDisposed", {
        get: function() {
          return this._destroyed || this._isDisposed
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.onShow = function(t) {}, e.prototype.onHide = function() {}, e.prototype.onDestroy = function() {}, e
    }(PIXI.Container);

  function Sa(t, e) {
    try {
      wx.setStorageSync(t, e)
    } catch (t) {}
  }

  function Ia(t) {
    return wx.getStorageSync(t)
  }
  var Ba = function() {
      function t() {
        var t = Ao;
        console.log("isLowerMachine:", t), this.load(t)
      }
      return Object.defineProperty(t.prototype, "vibrate", {
        get: function() {
          return this._vibrate
        },
        set: function(t) {
          this._vibrate = t, console.log("[Settings]", "vibrate:", t)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "quality", {
        get: function() {
          return this._quality
        },
        set: function(t) {
          this._quality = t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "audio", {
        get: function() {
          return this._audio
        },
        set: function(t) {
          this._audio = t, console.log("[Settings]", "audio:", t)
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.save = function() {
        Sa("settings", {
          vibrate: this.vibrate,
          audio: this.audio,
          quality: this.quality
        })
      }, t.prototype.load = function(t) {
        try {
          var e = wx.getStorageSync("settings");
          "" !== e ? (this.audio = e.audio, this.vibrate = e.vibrate, this.quality = e.quality) : (this.quality = !t, this.audio = !0, this.vibrate = !0, this.save())
        } catch (e) {
          this.quality = !t, this.audio = !0, this.vibrate = !0, this.save()
        }
      }, o([wn], t.prototype, "vibrate", null), o([fn], t.prototype, "_vibrate", void 0), o([wn], t.prototype, "quality", null), o([fn], t.prototype, "_quality", void 0), o([wn], t.prototype, "audio", null), o([fn], t.prototype, "_audio", void 0), t
    }(),
    Da = new Ba,
    Ca = {},
    Ea = {};

  function Pa(t, e) {
    if (void 0 === e && (e = !1), Da.audio && (Ca[t] || function(t, e) {
        if (!Ca[t]) {
          Ca[t] = [];
          for (var n = 0; n < e; n++) {
            var i = wx.createInnerAudioContext();
            i.src = "dlc/sound/".concat(t, ".mp3"), i.loop = !1, i.autoplay = !1, Ca[t].push(i)
          }
        }
      }(t, e ? 1 : 2), 0 !== Ca[t].length)) {
      var n = Ca[t].pop();
      n.loop = e, e ? (Ea[t] || (Ea[t] = []), -1 === Ea[t].indexOf(n) && Ea[t].push(n)) : n.onEnded((function e() {
        n.offEnded(e), Ca[t].push(n)
      })), n.play()
    }
  }

  function Ma(t) {
    var e = Ea[t];
    if (e) {
      for (var n = 0; n < e.length; n++) e[n].stop(), Ca[t].push(e[n]);
      Ea[t].length = 0
    }
  }
  var Oa = PIXI.Sprite,
    La = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.skinId = 0, e.canTapMaskClose = !0;
        var n = new PIXI.Container;
        return e.bg = Bs("dlc/ui/bg/bg_skin_unlock.png"), e.bg.width = 692, e.bg.height = 571, e.bg.anchor.set(.5, .5), n.addChild(e.bg), e.icon = new Oa, e.icon.width = 180, e.icon.height = 200, e.icon.x = 235 - e.bg.width / 2, e.icon.y = 130 - e.bg.height / 2, n.addChild(e.icon), e.closeButton = new Gs, e.closeButton.x = e.bg.x + e.bg.width / 2 - 10, e.closeButton.y = 20 - e.bg.height / 2, e.closeButton.on("pointerdown", (function() {
          e.close()
        }), e), n.addChild(e.closeButton.skin), e.shareButton = new ma("button_flaunt2"), e.shareButton.x = 0, e.shareButton.y = e.bg.y + e.bg.height / 2 - 120, e.shareButton.on("pointerdown", (function() {
          var t = qr.findSkinDef(e.skinId);
          !$hostDef.censor && $hostDef.shareSkin ? 1 === t.skinType ? Ys(t.id).then((function() {
            ul.changeSkin(t.id), e.close()
          })) : Js(t.id).then((function() {
            e.close()
          })) : (1 === t.skinType && ul.changeSkin(t.id), e.close())
        }), e), n.addChild(e.shareButton.skin), e.addChild(n), e
      }
      return n(e, t), e.prototype.onShow = function(t) {
        this.x = 375, this.y = Cr / 2, Pa(ha), this.skinId = t.id, this.icon.texture = PIXI.Texture.fromFrame("item" + t.id), Xs.gainSkins.delete(t.id)
      }, e
    }(ka),
    Aa = function(t) {
      function e(e, n) {
        var i = t.call(this) || this;
        i.quality = e, i.tweenRotations = [], i.aniTrans = [];
        var o = new PIXI.Container;
        return i.frames = function(t, e) {
          var n = [],
            i = Na[t],
            o = u(ja[t], 2),
            r = o[0],
            s = o[1];
          e.width = r, e.height = s;
          for (var a = i.length - 1; a >= 0; a--) {
            var c = u(i[a], 2),
              h = c[0],
              l = c[1],
              d = ks("quality_".concat(t, "_").concat(a + 1));
            d.anchor.set(.5, .5), n[a] = d, e.addChild(d), d.x = h, d.y = l
          }
          return n
        }(e, o), i.addChild(o), i.text = Ps("+".concat(n), 60, 16777215, "center"), i.text.anchor = new PIXI.Point(.5, 0), i.text.y = 5, i.addChild(i.text), i
      }
      return n(e, t), e.prototype.initFrames = function() {
        for (var t = 0, e = this.frames.length; t < e; t++) {
          var n = this.frames[t];
          n.alpha = 0 === t ? 1 : 0, n.rotation = 0
        }
        for (t = 0, e = this.aniTrans.length; t < e; t++) {
          this.aniTrans[t].reset()
        }
      }, e.prototype.updateScore = function(t) {
        this.text.text = "+".concat(t)
      }, e.prototype.showTween = function(t) {
        var e = this;
        if (this.initFrames(), !this.tweenStart) {
          var n = new Ja(this, .5),
            i = this.tweenStart = new TWEEN.Tween(n).easing(TWEEN.Easing.Back.Out).to({
              scale: 1
            }, 200);
          this.aniTrans.push(n);
          for (var o = 1, r = this.frames.length; o < r; o++) {
            var s = this.frames[o],
              a = new Ga(s, 0, .5),
              c = new TWEEN.Tween(a).easing(TWEEN.Easing.Cubic.Out).to({
                alpha: 1,
                scale: 1
              }, 100);
            this.aniTrans.push(a);
            var h = u(Na[this.quality][o], 3)[2];
            if (-1 !== h) {
              var l = h || 3e3 * Math.random() + 4e3,
                d = new TWEEN.Tween(s).to({
                  rotation: 2 * Math.PI
                }, l).repeat(1 / 0);
              this.tweenRotations.push(d)
            }
            i.chain(c), i = c
          }
          var p = new TWEEN.Tween(this).delay(1500).to({
            alpha: 0
          }, 300).onComplete((function() {
            e.endRotations(), t && t()
          }));
          i.chain(p)
        }
        this.tweenStart.start(), this.showRotations()
      }, e.prototype.showRotations = function() {
        for (var t = 0, e = this.tweenRotations.length; t < e; t++) {
          this.tweenRotations[t].start(0)
        }
      }, e.prototype.endRotations = function() {
        for (var t = 0, e = this.tweenRotations.length; t < e; t++) {
          this.tweenRotations[t].stop()
        }
      }, e
    }(PIXI.Container),
    Ra = Aa,
    Na = [, [
        [0, 0],
        [0, 0, -1]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0],
        [0, 0],
        [-10, 10]
      ]
    ],
    ja = [, [351, 346],
      [262, 263],
      [288, 286],
      [343, 327]
    ];
  var Ga = function() {
      function t(t, e, n) {
        this.view = t, this._alpha = 0, this._scale = 0, this._alpha = e, this._scale = n, this.initAlpha = e, this.initScale = n
      }
      return t.prototype.reset = function() {
        this.scale = this.initScale, this.alpha = this.initAlpha
      }, Object.defineProperty(t.prototype, "alpha", {
        get: function() {
          return this._alpha
        },
        set: function(t) {
          this._alpha = t, this.view.alpha = t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "scale", {
        get: function() {
          return this._scale
        },
        set: function(t) {
          this._scale = t, this.view.scale.set(t)
        },
        enumerable: !1,
        configurable: !0
      }), t
    }(),
    Fa = function(t) {
      function e(e) {
        var n = t.call(this) || this,
          i = ks("bg_float");
        i.width = 680, i.height = 80, n.addChild(i);
        var o = new PIXI.Text(e, {
          fontSize: 34,
          fill: "#ffde00",
          fontWeight: "bold"
        });
        return o.x = (680 - o.width) / 2, o.y = (80 - o.height) / 2, n.addChild(o), n.x = (Dr - n.width) / 2, n.y = (Cr - n.height) / 2, n
      }
      return n(e, t), e
    }(PIXI.Container),
    Va = function(t) {
      function e(e) {
        var n = t.call(this) || this,
          i = ks("label_unlock");
        n.addChild(i);
        var o = ks("bg_skin_item");
        n.addChild(o), o.x = (i.width - o.width) / 2, o.y = i.height + 20;
        var r = ks("item" + e);
        r.x = o.x + (o.width - r.width) / 2, r.y = o.y + (o.height - r.height) / 2, n.addChild(r);
        var s = ks("labe_score_add");
        return n.addChild(s), s.x = o.x + (o.width - s.width) / 2, s.y = o.y + o.height + 20, n.x = (Dr - n.width) / 2, n.y = (Cr - n.height) / 2, n
      }
      return n(e, t), e
    }(PIXI.Container);

  function Ua(t, e, n) {
    void 0 === e && (e = 1e3), void 0 === n && (n = ""), e = e || 1e3, wx.showToast({
      title: t,
      image: n,
      duration: e
    })
  }

  function Wa(t, e, n) {
    var i;
    void 0 === e && (e = ""), void 0 === n && (n = {}), i = e && e.errMsg || e, console.warn("showError", t, e), wx.showModal({
      title: String(t),
      content: String(i),
      confirmText: n.confirmText || "确定",
      showCancel: !1,
      success: n.success,
      fail: function(t) {
        return console.error(t.errMsg)
      }
    })
  }

  function Xa(t) {
    vr.error("[ErrorMsg]:", t), t && (t.errMsg || t.message) ? $a(t.errMsg || t.message) : $a("出错了," + JSON.stringify(t))
  }

  function za(t, e) {
    void 0 === e && (e = 300), $hostDef.groupText && $a(t, e)
  }

  function $a(t, e) {
    if (void 0 === e && (e = 300), t) {
      var n = new Fa(t);
      _a.topLayer.addChild(n);
      var i = n.y;
      n.alpha = .3, new TWEEN.Tween(n).easing(TWEEN.Easing.Quintic.Out).to({
        y: i - 50,
        alpha: 1
      }, 400).chain(new TWEEN.Tween(n).delay(e).to({
        y: i - 80,
        alpha: 0
      }, 300).onComplete((function() {
        return n.destroy({
          children: !0
        })
      }))).start()
    }
  }

  function Ha(t) {
    t && (t.rulerCount > 0 && $a("获得".concat(t.rulerCount, "个过关神器")), t.ticket > 0 && $a("获得".concat(t.ticket, "张门票")), t.coin > 0 && ($hostDef.censor || $hostDef.shareRevive || $a("获得".concat(t.coin, "个复活币"))), t.turntableCount > 0 && $a("获得".concat(t.turntableCount, "次转盘次数")), t.skins && Ka(t.skins))
  }
  var qa = {};

  function Ka(t) {
    return r(this, void 0, void 0, (function() {
      var e, n, i, o, r;
      return s(this, (function(s) {
        switch (s.label) {
          case 0:
            s.trys.push([0, 6, 7, 8]), e = a(t), n = e.next(), s.label = 1;
          case 1:
            return n.done ? [3, 5] : [4, Ya(n.value)];
          case 2:
            return s.sent(), [4, _s(400)];
          case 3:
            s.sent(), s.label = 4;
          case 4:
            return n = e.next(), [3, 1];
          case 5:
            return [3, 8];
          case 6:
            return i = s.sent(), o = {
              error: i
            }, [3, 8];
          case 7:
            try {
              n && !n.done && (r = e.return) && r.call(e)
            } finally {
              if (o) throw o.error
            }
            return [7];
          case 8:
            return [2]
        }
      }))
    }))
  }

  function Ya(t) {
    var e = qr.findSkinDef(t);
    if (e) {
      var n = _a.showPanel(La, e);
      n.scale.set(.5);
      var i = new TWEEN.Tween(new Ja(n, .5)).easing(TWEEN.Easing.Back.Out).to({
        scale: 1
      }, 400);
      return new Promise((function(t) {
        n.once("removed", (function() {
          TWEEN.remove(i), t()
        })), i.start()
      }))
    }
  }
  var Ja = function() {
    function t(t, e) {
      this.view = t, this._scale = 0, this._scale = e, this.initValue = e
    }
    return t.prototype.reset = function() {
      this.scale = this.initValue
    }, Object.defineProperty(t.prototype, "scale", {
      get: function() {
        return this._scale
      },
      set: function(t) {
        this._scale = t, this.view.scale.set(t)
      },
      enumerable: !1,
      configurable: !0
    }), t
  }();
  ! function() {
    function t(t, e) {
      this.view = t, this._rotation = 0, this._rotation = e, this.initValue = e
    }
    t.prototype.reset = function() {
      this.rotation = this.initValue
    }, Object.defineProperty(t.prototype, "rotation", {
      get: function() {
        return this._rotation
      },
      set: function(t) {
        this._rotation = t, this.view.rotation = t
      },
      enumerable: !1,
      configurable: !0
    })
  }();
  var Qa, Za = function() {
      function t(t) {
        this.frequency = 1, this.i = 0, this.sprite = t
      }
      return t.prototype.update = function() {
        ++this.i >= this.frequency && (this.i = 0, this.updateTexture())
      }, t.prototype.updateTexture = function() {
        this.sprite && this.sprite.texture.update()
      }, t.prototype.getMessage = function(t) {
        return {}
      }, t.prototype.save = function() {
        this.sprite && (this.sprite.visible = !1)
      }, t.prototype.restore = function() {
        this.sprite && (this.sprite.visible = !0)
      }, t.prototype.dispose = function() {
        this.sprite = null
      }, t
    }(),
    tu = "function" == typeof wx.getOpenDataContext;
  tu && (Qa = wx.getOpenDataContext());
  var eu, nu = Qa ? Qa.canvas : wx.createCanvas(),
    iu = PIXI.Texture.fromCanvas(nu),
    ou = [];

  function ru() {
    return void 0 !== Qa
  }

  function su(t) {
    ! function() {
      if (uu) return;
      uu = !0, Qa && Qa.postMessage({
        type: "updateMyInfo"
      })
    }(), eu && (eu.save(), ou.push(eu)), nu.width = t.width, nu.height = t.height, Qa && Qa.postMessage(t.getMessage()), eu = t, iu.update()
  }

  function au(t) {
    if (eu === t) t.dispose(), (eu = ou.pop()) ? (nu.width = eu.width, nu.height = eu.height, Qa && Qa.postMessage(eu.getMessage(!0)), eu.restore()) : Qa && Qa.postMessage({
      type: "hide"
    }), iu.update();
    else {
      var e = ou.indexOf(t); - 1 !== e ? (t.dispose(), ou.splice(e, 1)) : console.warn("endOpenData fail: 不在 stack 中", t)
    }
  }
  var uu = !1;

  function cu() {
    return jo() || "api" !== $hostDef.api ? "score-test" : "score"
  }

  function hu(t) {
    var e = cu(),
      n = jo() || "api" !== $hostDef.api ? "expert-score-test" : "expert-score";
    Qa && (Qa.postMessage({
      type: "initScoreKey",
      scoreKey: e,
      expertKey: n,
      finishFloors: JSON.stringify(t)
    }), function() {
      if (Ia("clearExpertStorage")) return;
      console.log("--removeExpertStorage--");
      for (var t = [], e = 1; e < 250; e++) t.push("expert-score" + e);
      wx.removeUserCloudStorage({
        keyList: t,
        success: function(t) {
          console.log("removeExpertStorage succ", t)
        },
        fail: function(t) {
          console.log("removeExpertStorage fail", t)
        }
      }), Sa("clearExpertStorage", !0)
    }())
  }
  var lu, du = 0,
    pu = function(t) {
      function e(e, n, i) {
        var o = t.call(this, e) || this;
        return o.shareTicket = i, o.width = 680, o.height = 850, o._dirty = !0, o.screenX = n.x, o.screenY = n.y, o.frequency = Ao ? 2 : 1, o.i = 0, Date.now() - du > 12e4 && (du = Date.now(), wx.showToast({
          title: "正在加载...",
          icon: "loading",
          duration: 300
        })), o
      }
      return n(e, t), e.prototype.update = function() {
        this._dirty ? (this._dirty = !1, Qa && (Qa.postMessage(this.getMessage()), this.updateTexture())) : t.prototype.update.call(this)
      }, e.prototype.getMessage = function() {
        if (this.shareTicket) return {
          type: "groupRank",
          screenX: this.screenX,
          screenY: this.screenY,
          shareTicket: this.shareTicket
        };
        var t = void 0,
          e = Date.now();
        return e - du > 12e4 ? (t = !0, vr.log("刷新排行榜", e - du), du = e) : t = !1, {
          type: "rank",
          screenX: this.screenX,
          screenY: this.screenY,
          refresh: t
        }
      }, e
    }(Za),
    fu = pu,
    vu = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.canTapMaskClose = !0;
        var n = e.bg = Ds("bg_rank", 20, 20, 20, 20);
        n.width = 680, n.height = 944, n.interactive = !0, e.addChild(n), e.title = ks("title_friend"), e.title.x = 20, e.title.y = 20, e.addChild(e.title), e.closeButton = new Gs, e.closeButton.x = e.bg.width - 10, e.closeButton.y = 0, e.closeButton.on("pointerdown", (function() {
          e.close()
        }), e), e.addSkin(e.closeButton);
        var i = e.rank = new gu(iu);
        return i.x = 0, i.y = 80, i.visible = ru(), e.addChild(i), e.groupButton = new ma("button_group_rank"), e.groupButton.x = e.bg.width / 2, e.groupButton.y = e.bg.y + e.bg.height + 60, e.groupButton.on("tap", (function() {
          Zs()
        }), e), e.addSkin(e.groupButton), e.height = 1e3, e
      }
      return n(e, t), e.prototype.onShow = function(t) {
        this.x = (Dr - this.bg.width) / 2, this.y = xa.top + (Cr - this.bg.height) / 2, this.title.texture = t ? PIXI.Texture.fromFrame("title_group") : PIXI.Texture.fromFrame("title_friend"), this.groupButton.visible = !t, ru() && (this._openData && (au(this._openData), this._openData = null), this._openData = new fu(this.rank, this.rank.toGlobal({
          x: 0,
          y: 0
        }), t), su(this._openData))
      }, e.prototype.onHide = function() {
        this._openData && (au(this._openData), this._openData = null)
      }, e.prototype.onDestroy = function() {
        this.closeButton && (this.closeButton.destroy(), this.closeButton = null), this.groupButton && (this.groupButton.destroy(), this.groupButton = null)
      }, e
    }(ka),
    gu = function(t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return n._scrollV = 0, n
      }
      return n(e, t), Object.defineProperty(e.prototype, "scrollV", {
        get: function() {
          return this._scrollV
        },
        set: function(t) {
          this._scrollV = t
        },
        enumerable: !1,
        configurable: !0
      }), e
    }(PIXI.Sprite),
    yu = vr.withCategory("login");

  function mu() {
    // LOCAL STUB: bypass wx.login + remote API entirely
    var fakeUid = "local-user", fakeToken = "local-token";
    var fake = { uid: fakeUid, token: fakeToken, connectToken: "local", now: Date.now(), online: "local" };
    try { ul.uid = fakeUid; ul.token = fakeToken; ul.connectToken = "local"; } catch (_) {}
    try { xs.syncServerTime(fake.now); } catch (_) {}
    try { X().emitter.emit("logged"); } catch (_) {}
    return Promise.resolve(fake);
  }

  function bu(t) {
    return r(this, void 0, void 0, (function() {
      var e;
      return s(this, (function(n) {
        switch (n.label) {
          case 0:
            return DEVELOP && yu.info("".concat($hostDef.api, "/gateV2...")), [4, oe.getJSON("".concat(xr, "/").concat($hostDef.api, "/gateV2"), {
              uid: t
            })];
          case 1:
            return e = n.sent(), DEVELOP && yu.info("gateV2:", e.online, e.onlineWs), [2, e]
        }
      }))
    }))
  }

  function wu() {
    return r(this, void 0, void 0, (function() {
      var t, e, n, i, o, r, a, u, c, h;
      return s(this, (function(s) {
        switch (s.label) {
          case 0:
            return (t = wx.getStorageSync("appToken")) && (e = t.token, n = t.uid), n && !isNaN(n) && e ? (yu.info("wx.checkSession..."), [4, new Promise((function(t) {
              return wx.checkSession({
                success: function() {
                  return t(!0)
                },
                fail: function(e) {
                  yu.warn(e.errMsg), t(!1)
                }
              })
            }))]) : [3, 11];
          case 1:
            if (!s.sent()) return [3, 10];
            yu.info("wx.checkSession ok"), i = null, r = 0, s.label = 2;
          case 2:
            return null !== i ? [3, 9] : r > 0 ? (Ua("正在连接服务器".concat(r), 1e3), [4, new Promise((function(t) {
              return setTimeout(t, 500 * r + 1e3)
            }))]) : [3, 4];
          case 3:
            s.sent(), s.label = 4;
          case 4:
            r++, s.label = 5;
          case 5:
            return s.trys.push([5, 7, , 8]), a = "".concat(xr, "/").concat($hostDef.api, "/validToken"), [4, new oe({
              url: a,
              data: {
                token: e,
                uid: n
              }
            }).send()];
          case 6:
            return o = s.sent(), i = !0, [3, 8];
          case 7:
            return (u = s.sent()).startsWith('[400] {"err":95}') ? i = !1 : yu.error("validToken error:", u.errMsg || u), [3, 8];
          case 8:
            if (r > 1) throw new Error("".concat($hostDef.api, "/validToken 失败"));
            return [3, 2];
          case 9:
            return !0 === i ? (yu.info("".concat($hostDef.api, "/validToken ok")), (o.uid && o.uid !== n || o.token && o.token !== e) && (n = o.uid, e = o.token, Sa("appToken", {
              uid: n,
              token: e
            })), yu.info("uid: ".concat(n)), yu.info("token: ".concat(e)), [2, {
              uid: n,
              token: e
            }]) : (yu.info("".concat($hostDef.api, "/validToken expired")), [3, 11]);
          case 10:
            yu.info("wx.checkSession: invalid"), s.label = 11;
          case 11:
            return yu.info("wx.login..."), [4, new Promise((function(t, e) {
              return wx.login({
                success: function(e) {
                  return t(e.code)
                },
                fail: function(t) {
                  return e(t.errMsg)
                }
              })
            }))];
          case 12:
            return c = s.sent(), yu.info("".concat($hostDef.api, "/loginAccount...")), [4, new oe({
              url: "".concat(xr, "/").concat($hostDef.api, "/loginAccount"),
              method: "POST",
              data: {
                code: c
              }
            }).send()];
          case 13:
            if ("errMsg" in (h = s.sent())) throw h;
            return Sa("appToken", {
              uid: h.uid,
              token: h.token
            }), yu.info("uid: ".concat(h.uid)), yu.info("token: ".concat(h.token)), [2, h]
        }
      }))
    }))
  }

  function xu(t) {
    return r(this, void 0, void 0, (function() {
      return s(this, (function(e) {
        switch (e.label) {
          case 0:
            if (ul.isAuthorize = !0, !t || !t.encryptedData || !t.iv) return [2];
            t.token = ul.token, t.uid = ul.uid, e.label = 1;
          case 1:
            return e.trys.push([1, 3, , 4]), [4, new oe({
              url: "".concat(xr, "/").concat($hostDef.api, "/wxaSyncUserInfo"),
              method: "POST",
              data: t
            }).send()];
          case 2:
            return e.sent(), [3, 4];
          case 3:
            return e.sent(), [3, 4];
          case 4:
            return [2]
        }
      }))
    }))
  }

  function Tu() {
    var t = Ts.query;
    if (t.fuid) {
      var e, n, i, o = Number(t.fuid),
        r = Number(t.shareType),
        s = Number(t.timestamp);
      if (console.log("shareType", r, "fuid", o, "timestamp", s), 9 === r) _u(o, r, s);
      else if (10 === r) _u(o, r, s);
      else if (7 === r) _u(o, r, s), t.endTime && function(t, e) {
        if (Math.floor(xs.curTime / 1e3) - t > 3600) return void(Ts.showCoin && $a("此礼包已过期"));
        if (ul.coin >= Lr) return void(Ts.showCoin && $a("复活币已满"));
        (n = {
          uid: e,
          time: t
        }, ku(2305, n)).then((function(t) {
          if (ul.syncData(t.syncData), Ts.showCoin) switch (t.result) {
            case 0:
              $a("获得一个复活币");
              break;
            case 1:
              $a("复活币已满");
              break;
            case 2:
              $a("此礼包已过期");
              break;
            case 3:
              $a("此礼包已领取")
          }
        }));
        var n
      }(Number(t.endTime), o);
      else if (8 === r) {
        if (o !== ul.uid) {
          var a = new Date(1e3 * s);
          n = a, i = new Date(xs.curTime), n.toDateString() === i.toDateString() ? (e = {
            type: 1,
            uid: o
          }, ku(2054, e)).then((function(t) {
            ul.syncData(t.syncData), t.gift && t.gift.turntableCount > 0 && $a("获得".concat(t.gift.turntableCount, "次转盘次数"))
          })) : $a("链接已过期", 1e3)
        }
      } else {
        if (!Xs.isGaming && Ts.shareTicket) {
          var u = wx.getStorageSync("firstLoginTime");
          u && !isNaN(u) ? _a.showPanel(vu, Ts.shareTicket) : wx.setStorage({
            key: "firstLoginTime",
            data: Date.now()
          })
        }
        _u(o, r, s)
      }
    }
  }

  function _u(t, e, n) {
    if (t !== ul.uid) {
      switch (e) {
        case 9:
          var i = wx.getStorageSync("rulerCd".concat(t));
          if (i && !isNaN(i) && xs.curTime / 1e3 - i < 600) return void $a("".concat(10, "分钟内只能给对方提供1次神器"), 1500);
          wx.setStorageSync("rulerCd".concat(t), Math.floor(xs.curTime / 1e3));
          break;
        case 10:
          var o = wx.getStorageSync("coinCd".concat(t));
          if (o && !isNaN(o) && xs.curTime / 1e3 - o < 600) return;
          wx.setStorageSync("coinCd".concat(t), Math.floor(xs.curTime / 1e3));
          break;
        default:
          var r = wx.getStorageSync("defaultCd".concat(t));
          if (r && !isNaN(r) && xs.curTime / 1e3 - r < 600) return;
          wx.setStorageSync("defaultCd".concat(t), Math.floor(xs.curTime / 1e3))
      }
      var s;
      (s = {
        uid: t,
        shareType: e,
        timestamp: n
      }, ku(2309, s)).then((function(t) {
        ul.syncData(t.syncData)
      }))
    }
  }

  function ku(t, e) {
    return r(this, void 0, void 0, (function() {
      var n, i, o, r;
      return s(this, (function(s) {
        switch (s.label) {
          case 0:
            n = function(t, e, n) {
              return JSON.stringify(Vt(t, e, n))
            }(t, e, ul), s.label = 1;
          case 1:
            return s.trys.push([1, 3, , 16]), [4, Ut(t, n)];
          case 2:
            return [2, s.sent()];
          case 3:
            return i = s.sent(), console.log("sendProtocol catch"), "object" == typeof(a = i) && a instanceof Dt ? 94 !== (o = i.errCode) ? [3, 5] : (wx.showLoading({
              title: Bt[o]
            }), console.log("[errCode:".concat(o, "] ").concat(i.errMsg, "\n正在自动重登")), [4, mu()]) : [3, 14];
          case 4:
            return s.sent(), wx.hideLoading(), wx.showToast({
              title: "已自动重新登录",
              icon: "success"
            }), console.log("已自动重新登录"), [2, ku(t, e)];
          case 5:
            return 100 !== o ? [3, 12] : (Ts.isOffline = !0, _a.preventTouch(), [4, new Promise((function(t, e) {
              wx.showModal({
                title: i.errMsg || "",
                content: "点击确定重新登录",
                showCancel: !1,
                success: t,
                fail: function(t) {
                  console.error(t.errMsg), e(t.errMsg)
                }
              })
            }))]);
          case 6:
            s.sent(), s.label = 7;
          case 7:
            return s.trys.push([7, 9, , 11]), [4, mu()];
          case 8:
            return s.sent(), [3, 11];
          case 9:
            return r = s.sent(), [4, new Promise((function(t) {
              Wa("重新登录失败,请尝试重新打开游戏", r, {
                success: t
              })
            }))];
          case 10:
            return s.sent(), wx.exitMiniProgram(), [2];
          case 11:
            return _a.cancelPreventTouch(), Ts.isOffline = !1, [2, ku(t, e)];
          case 12:
            250 === o ? console.warn("服务器协议未实现") : console.error("[错误码:".concat(o, "] ").concat(i.errMsg, " ").concat(pr(t))), s.label = 13;
          case 13:
            return [3, 15];
          case 14:
            console.error("[协议出错] ".concat(pr(t)), i), s.label = 15;
          case 15:
            throw i;
          case 16:
            return [2]
        }
        var a
      }))
    }))
  }
  Bt[90] = "当前用户不在线!", Bt[91] = "非法数据!", Bt[50] = "服务器内部错误!", Bt[93] = "时间异常!", Bt[94] = "session失效!", Bt[95] = "token失效!", Bt[100] = "该账号已在其他地方登录!", Bt[101] = "Invoke地址错误!", Bt[250] = "协议未实现!", Bt[2001] = "此局游戏不存在", Bt[2002] = "皮肤未获得", Bt[2003] = "此局游戏已过期", Bt[90001] = "连接已失效", Bt[90002] = "服务端未响应", Bt[90003] = "服务端响应消息列表为空",
    function(t) {
      t.toIndex = function(t) {
        var e = {};
        return e[1] = t.token, e[2] = t.uid, void 0 !== t.fuid && null !== t.fuid && (e[3] = t.fuid), void 0 !== t.shareType && null !== t.shareType && (e[4] = t.shareType), void 0 !== t.clientVersion && null !== t.clientVersion && (e[5] = t.clientVersion), e
      }, t.__cmd = 257
    }(lu || (lu = {}));
  var Su, Iu = lu;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.id = t[1], e.progress = t[2], e.isReward = t[3], e
    }, t.toIndex = function(t) {
      var e = {};
      return e[1] = t.id, e[2] = t.progress, e[3] = t.isReward, e
    }
  }(Su || (Su = {}));
  var Bu, Du = Su;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.id = t[1], e.score = t[2], e.level = t[3], e
    }, t.toIndex = function(t) {
      var e = {};
      return e[1] = t.id, e[2] = t.score, e[3] = t.level, e
    }
  }(Bu || (Bu = {}));
  var Cu, Eu = Bu;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      if (e.uid = t[1], e.nick = t[2], e.image = t[3], e.createTime = t[4], void 0 !== t[5] && null !== t[5] && (e.province = t[5]), e.guest = t[6], e.sex = t[7], void 0 !== t[8] && null !== t[8] && (e.city = t[8]), e.bestScore = t[9], Array.isArray(t[10])) {
        e.skins = [];
        for (var n = 0, i = t[10].length; n < i; n++) void 0 !== t[10][n] && null !== t[10][n] && (e.skins[n] = t[10][n])
      } else 0;
      if (Array.isArray(t[11])) {
        e.usedSkins = [];
        for (n = 0, i = t[11].length; n < i; n++) void 0 !== t[11][n] && null !== t[11][n] && (e.usedSkins[n] = t[11][n])
      } else 0;
      if (e.crtSkin = t[12], Array.isArray(t[13])) {
        e.tasks = [];
        for (n = 0, i = t[13].length; n < i; n++) t[13][n] && (e.tasks[n] = Du.fromIndex(t[13][n]))
      } else 0;
      if (Array.isArray(t[14])) {
        e.pets = [];
        for (n = 0, i = t[14].length; n < i; n++) void 0 !== t[14][n] && null !== t[14][n] && (e.pets[n] = t[14][n])
      } else 0;
      if (e.fightCount = t[15], void 0 !== t[16] && null !== t[16] && (e.guide = t[16]), void 0 !== t[17] && null !== t[17] && (e.rulerCount = t[17]), void 0 !== t[18] && null !== t[18] && (e.loginDays = t[18]), void 0 !== t[19] && null !== t[19])
        if (Array.isArray(t[19])) {
          e.mapLevels = [];
          for (n = 0, i = t[19].length; n < i; n++) void 0 !== t[19][n] && null !== t[19][n] && (e.mapLevels[n] = t[19][n])
        } else 0;
      if (void 0 !== t[20] && null !== t[20] && (e.ticket = t[20]), void 0 !== t[21] && null !== t[21] && (e.ticketVideoAd = t[21]), void 0 !== t[22] && null !== t[22] && (e.gold = t[22]), void 0 !== t[23] && null !== t[23] && (e.goldRate = t[23]), void 0 !== t[24] && null !== t[24] && (e.videoTurntableCount = t[24]), void 0 !== t[25] && null !== t[25] && (e.freeTurntableCount = t[25]), void 0 !== t[26] && null !== t[26] && (e.coin = t[26]), void 0 !== t[27] && null !== t[27] && (e.lastFreeTurntableTime = t[27]), void 0 !== t[28] && null !== t[28])
        if (Array.isArray(t[28])) {
          e.expertInfos = [];
          for (n = 0, i = t[28].length; n < i; n++) t[28][n] && (e.expertInfos[n] = Eu.fromIndex(t[28][n]))
        } else 0;
      return void 0 !== t[29] && null !== t[29] && (e.shareTurntableCount = t[29]), void 0 !== t[30] && null !== t[30] && (e.turntableCount = t[30]), void 0 !== t[31] && null !== t[31] && (e.todayTurntableCount = t[31]), e
    }, t.toIndex = function(t) {
      var e = {};
      if (e[1] = t.uid, e[2] = t.nick, e[3] = t.image, e[4] = t.createTime, void 0 !== t.province && null !== t.province && (e[5] = t.province), e[6] = t.guest, e[7] = t.sex, void 0 !== t.city && null !== t.city && (e[8] = t.city), e[9] = t.bestScore, Array.isArray(t.skins)) {
        e[10] = [];
        for (var n = 0, i = t.skins.length; n < i; n++) void 0 !== t.skins[n] && null !== t.skins[n] && (e[10][n] = t.skins[n])
      } else 0;
      if (Array.isArray(t.usedSkins)) {
        e[11] = [];
        for (n = 0, i = t.usedSkins.length; n < i; n++) void 0 !== t.usedSkins[n] && null !== t.usedSkins[n] && (e[11][n] = t.usedSkins[n])
      } else 0;
      if (e[12] = t.crtSkin, Array.isArray(t.tasks)) {
        e[13] = [];
        for (n = 0, i = t.tasks.length; n < i; n++) t.tasks[n] && (e[13][n] = Du.toIndex(t.tasks[n]))
      } else 0;
      if (Array.isArray(t.pets)) {
        e[14] = [];
        for (n = 0, i = t.pets.length; n < i; n++) void 0 !== t.pets[n] && null !== t.pets[n] && (e[14][n] = t.pets[n])
      } else 0;
      if (e[15] = t.fightCount, void 0 !== t.guide && null !== t.guide && (e[16] = t.guide), void 0 !== t.rulerCount && null !== t.rulerCount && (e[17] = t.rulerCount), void 0 !== t.loginDays && null !== t.loginDays && (e[18] = t.loginDays), void 0 !== t.mapLevels && null !== t.mapLevels)
        if (Array.isArray(t.mapLevels)) {
          e[19] = [];
          for (n = 0, i = t.mapLevels.length; n < i; n++) void 0 !== t.mapLevels[n] && null !== t.mapLevels[n] && (e[19][n] = t.mapLevels[n])
        } else 0;
      if (void 0 !== t.ticket && null !== t.ticket && (e[20] = t.ticket), void 0 !== t.ticketVideoAd && null !== t.ticketVideoAd && (e[21] = t.ticketVideoAd), void 0 !== t.gold && null !== t.gold && (e[22] = t.gold), void 0 !== t.goldRate && null !== t.goldRate && (e[23] = t.goldRate), void 0 !== t.videoTurntableCount && null !== t.videoTurntableCount && (e[24] = t.videoTurntableCount), void 0 !== t.freeTurntableCount && null !== t.freeTurntableCount && (e[25] = t.freeTurntableCount), void 0 !== t.coin && null !== t.coin && (e[26] = t.coin), void 0 !== t.lastFreeTurntableTime && null !== t.lastFreeTurntableTime && (e[27] = t.lastFreeTurntableTime), void 0 !== t.expertInfos && null !== t.expertInfos)
        if (Array.isArray(t.expertInfos)) {
          e[28] = [];
          for (n = 0, i = t.expertInfos.length; n < i; n++) t.expertInfos[n] && (e[28][n] = Eu.toIndex(t.expertInfos[n]))
        } else 0;
      return void 0 !== t.shareTurntableCount && null !== t.shareTurntableCount && (e[29] = t.shareTurntableCount), void 0 !== t.turntableCount && null !== t.turntableCount && (e[30] = t.turntableCount), void 0 !== t.todayTurntableCount && null !== t.todayTurntableCount && (e[31] = t.todayTurntableCount), e
    }
  }(Cu || (Cu = {}));
  var Pu, Mu = Cu;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.now = t[1], e.connectToken = t[2], t[3] && (e.userInfo = Mu.fromIndex(t[3])), e
    }, t.__cmd = 257
  }(Pu || (Pu = {}));
  var Ou, Lu = Pu;
  ! function(t) {
    t.toIndex = function(t) {
      return {}
    }, t.__cmd = 259
  }(Ou || (Ou = {}));
  var Au, Ru = Ou;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      if (void 0 !== t[6] && null !== t[6] && (e.guest = t[6]), void 0 !== t[7] && null !== t[7] && (e.sex = t[7]), void 0 !== t[9] && null !== t[9] && (e.bestScore = t[9]), void 0 !== t[10] && null !== t[10])
        if (Array.isArray(t[10])) {
          e.skins = [];
          for (var n = 0, i = t[10].length; n < i; n++) void 0 !== t[10][n] && null !== t[10][n] && (e.skins[n] = t[10][n])
        } else 0;
      if (void 0 !== t[11] && null !== t[11])
        if (Array.isArray(t[11])) {
          e.usedSkins = [];
          for (n = 0, i = t[11].length; n < i; n++) void 0 !== t[11][n] && null !== t[11][n] && (e.usedSkins[n] = t[11][n])
        } else 0;
      if (void 0 !== t[12] && null !== t[12] && (e.crtSkin = t[12]), void 0 !== t[13] && null !== t[13])
        if (Array.isArray(t[13])) {
          e.tasks = [];
          for (n = 0, i = t[13].length; n < i; n++) t[13][n] && (e.tasks[n] = Du.fromIndex(t[13][n]))
        } else 0;
      if (void 0 !== t[14] && null !== t[14])
        if (Array.isArray(t[14])) {
          e.pets = [];
          for (n = 0, i = t[14].length; n < i; n++) void 0 !== t[14][n] && null !== t[14][n] && (e.pets[n] = t[14][n])
        } else 0;
      if (void 0 !== t[15] && null !== t[15] && (e.fightCount = t[15]), void 0 !== t[16] && null !== t[16] && (e.guide = t[16]), void 0 !== t[17] && null !== t[17] && (e.rulerCount = t[17]), void 0 !== t[18] && null !== t[18] && (e.loginDays = t[18]), void 0 !== t[19] && null !== t[19])
        if (Array.isArray(t[19])) {
          e.mapLevels = [];
          for (n = 0, i = t[19].length; n < i; n++) void 0 !== t[19][n] && null !== t[19][n] && (e.mapLevels[n] = t[19][n])
        } else 0;
      if (void 0 !== t[20] && null !== t[20] && (e.ticket = t[20]), void 0 !== t[21] && null !== t[21] && (e.ticketVideoAd = t[21]), void 0 !== t[22] && null !== t[22] && (e.gold = t[22]), void 0 !== t[23] && null !== t[23] && (e.goldRate = t[23]), void 0 !== t[24] && null !== t[24] && (e.videoTurntableCount = t[24]), void 0 !== t[25] && null !== t[25] && (e.freeTurntableCount = t[25]), void 0 !== t[26] && null !== t[26] && (e.coin = t[26]), void 0 !== t[27] && null !== t[27] && (e.lastFreeTurntableTime = t[27]), void 0 !== t[28] && null !== t[28])
        if (Array.isArray(t[28])) {
          e.expertInfos = [];
          for (n = 0, i = t[28].length; n < i; n++) t[28][n] && (e.expertInfos[n] = Eu.fromIndex(t[28][n]))
        } else 0;
      return void 0 !== t[29] && null !== t[29] && (e.shareTurntableCount = t[29]), void 0 !== t[30] && null !== t[30] && (e.turntableCount = t[30]), void 0 !== t[31] && null !== t[31] && (e.todayTurntableCount = t[31]), e
    }, t.toIndex = function(t) {
      var e = {};
      if (void 0 !== t.guest && null !== t.guest && (e[6] = t.guest), void 0 !== t.sex && null !== t.sex && (e[7] = t.sex), void 0 !== t.bestScore && null !== t.bestScore && (e[9] = t.bestScore), void 0 !== t.skins && null !== t.skins)
        if (Array.isArray(t.skins)) {
          e[10] = [];
          for (var n = 0, i = t.skins.length; n < i; n++) void 0 !== t.skins[n] && null !== t.skins[n] && (e[10][n] = t.skins[n])
        } else 0;
      if (void 0 !== t.usedSkins && null !== t.usedSkins)
        if (Array.isArray(t.usedSkins)) {
          e[11] = [];
          for (n = 0, i = t.usedSkins.length; n < i; n++) void 0 !== t.usedSkins[n] && null !== t.usedSkins[n] && (e[11][n] = t.usedSkins[n])
        } else 0;
      if (void 0 !== t.crtSkin && null !== t.crtSkin && (e[12] = t.crtSkin), void 0 !== t.tasks && null !== t.tasks)
        if (Array.isArray(t.tasks)) {
          e[13] = [];
          for (n = 0, i = t.tasks.length; n < i; n++) t.tasks[n] && (e[13][n] = Du.toIndex(t.tasks[n]))
        } else 0;
      if (void 0 !== t.pets && null !== t.pets)
        if (Array.isArray(t.pets)) {
          e[14] = [];
          for (n = 0, i = t.pets.length; n < i; n++) void 0 !== t.pets[n] && null !== t.pets[n] && (e[14][n] = t.pets[n])
        } else 0;
      if (void 0 !== t.fightCount && null !== t.fightCount && (e[15] = t.fightCount), void 0 !== t.guide && null !== t.guide && (e[16] = t.guide), void 0 !== t.rulerCount && null !== t.rulerCount && (e[17] = t.rulerCount), void 0 !== t.loginDays && null !== t.loginDays && (e[18] = t.loginDays), void 0 !== t.mapLevels && null !== t.mapLevels)
        if (Array.isArray(t.mapLevels)) {
          e[19] = [];
          for (n = 0, i = t.mapLevels.length; n < i; n++) void 0 !== t.mapLevels[n] && null !== t.mapLevels[n] && (e[19][n] = t.mapLevels[n])
        } else 0;
      if (void 0 !== t.ticket && null !== t.ticket && (e[20] = t.ticket), void 0 !== t.ticketVideoAd && null !== t.ticketVideoAd && (e[21] = t.ticketVideoAd), void 0 !== t.gold && null !== t.gold && (e[22] = t.gold), void 0 !== t.goldRate && null !== t.goldRate && (e[23] = t.goldRate), void 0 !== t.videoTurntableCount && null !== t.videoTurntableCount && (e[24] = t.videoTurntableCount), void 0 !== t.freeTurntableCount && null !== t.freeTurntableCount && (e[25] = t.freeTurntableCount), void 0 !== t.coin && null !== t.coin && (e[26] = t.coin), void 0 !== t.lastFreeTurntableTime && null !== t.lastFreeTurntableTime && (e[27] = t.lastFreeTurntableTime), void 0 !== t.expertInfos && null !== t.expertInfos)
        if (Array.isArray(t.expertInfos)) {
          e[28] = [];
          for (n = 0, i = t.expertInfos.length; n < i; n++) t.expertInfos[n] && (e[28][n] = Eu.toIndex(t.expertInfos[n]))
        } else 0;
      return void 0 !== t.shareTurntableCount && null !== t.shareTurntableCount && (e[29] = t.shareTurntableCount), void 0 !== t.turntableCount && null !== t.turntableCount && (e[30] = t.turntableCount), void 0 !== t.todayTurntableCount && null !== t.todayTurntableCount && (e[31] = t.todayTurntableCount), e
    }
  }(Au || (Au = {}));
  var Nu, ju = Au;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 259
  }(Nu || (Nu = {}));
  var Gu, Fu = Nu;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      if (e[1] = t.type, void 0 !== t.values && null !== t.values)
        if (Array.isArray(t.values)) {
          e[2] = [];
          for (var n = 0, i = t.values.length; n < i; n++) void 0 !== t.values[n] && null !== t.values[n] && (e[2][n] = t.values[n])
        } else 0;
      return e
    }, t.__cmd = 260
  }(Gu || (Gu = {}));
  var Vu, Uu = Gu;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), void 0 !== t[2] && null !== t[2] && (e.errMsg = t[2]), e
    }, t.__cmd = 260
  }(Vu || (Vu = {}));
  var Wu, Xu = Vu;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.token, e[2] = t.uid, void 0 !== t.fuid && null !== t.fuid && (e[3] = t.fuid), void 0 !== t.shareType && null !== t.shareType && (e[4] = t.shareType), e
    }, t.__cmd = 266
  }(Wu || (Wu = {}));
  var zu, $u = Wu;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.now = t[1], e.connectToken = t[2], t[3] && (e.userInfo = Mu.fromIndex(t[3])), e
    }, t.__cmd = 266
  }(zu || (zu = {}));
  var Hu, qu = zu;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return void 0 !== t[1] && null !== t[1] && (e.nickName = t[1]), void 0 !== t[2] && null !== t[2] && (e.avatarUrl = t[2]), void 0 !== t[3] && null !== t[3] && (e.gender = t[3]), void 0 !== t[4] && null !== t[4] && (e.city = t[4]), void 0 !== t[5] && null !== t[5] && (e.province = t[5]), void 0 !== t[6] && null !== t[6] && (e.country = t[6]), void 0 !== t[7] && null !== t[7] && (e.language = t[7]), e
    }, t.toIndex = function(t) {
      var e = {};
      return void 0 !== t.nickName && null !== t.nickName && (e[1] = t.nickName), void 0 !== t.avatarUrl && null !== t.avatarUrl && (e[2] = t.avatarUrl), void 0 !== t.gender && null !== t.gender && (e[3] = t.gender), void 0 !== t.city && null !== t.city && (e[4] = t.city), void 0 !== t.province && null !== t.province && (e[5] = t.province), void 0 !== t.country && null !== t.country && (e[6] = t.country), void 0 !== t.language && null !== t.language && (e[7] = t.language), e
    }
  }(Hu || (Hu = {}));
  var Ku, Yu = Hu;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return t.userInfo && (e[1] = Yu.toIndex(t.userInfo)), e
    }, t.__cmd = 278
  }(Ku || (Ku = {}));
  var Ju, Qu = Ku;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 278
  }(Ju || (Ju = {}));
  var Zu, tc = Ju;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.timeStamp = t[1], e.uid = t[2], e.score = t[3], e
    }, t.toIndex = function(t) {
      var e = {};
      return e[1] = t.timeStamp, e[2] = t.uid, e[3] = t.score, e
    }
  }(Zu || (Zu = {}));
  var ec, nc = Zu;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.fightType, t.challengeInfo && (e[2] = nc.toIndex(t.challengeInfo)), void 0 !== t.mapId && null !== t.mapId && (e[3] = t.mapId), e
    }, t.__cmd = 513
  }(ec || (ec = {}));
  var ic, oc = ec;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.fightId = t[1], t[2] && (e.syncData = ju.fromIndex(t[2])), e
    }, t.__cmd = 513
  }(ic || (ic = {}));
  var rc, sc = ic;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.level = t[1], e.score = t[2], e.totalPerfect = t[3], e.continuePerfect = t[4], e.useAssist = t[5], e
    }, t.toIndex = function(t) {
      var e = {};
      return e[1] = t.level, e[2] = t.score, e[3] = t.totalPerfect, e[4] = t.continuePerfect, e[5] = t.useAssist, e
    }
  }(rc || (rc = {}));
  var ac, uc = rc;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.fightId, t.stepResult && (e[2] = uc.toIndex(t.stepResult)), e
    }, t.__cmd = 514
  }(ac || (ac = {}));
  var cc, hc = ac;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      if (void 0 !== t[1] && null !== t[1])
        if (Array.isArray(t[1])) {
          e.items = [];
          for (var n = 0, i = t[1].length; n < i; n++)
            if (void 0 !== t[1][n] && null !== t[1][n])
              if (Array.isArray(t[1][n])) {
                e.items[n] = [];
                for (var o = 0, r = t[1][n].length; o < r; o++) void 0 !== t[1][n][o] && null !== t[1][n][o] && (e.items[n][o] = t[1][n][o])
              } else 0
        } else 0;
      if (void 0 !== t[2] && null !== t[2])
        if (Array.isArray(t[2])) {
          e.skins = [];
          for (n = 0, i = t[2].length; n < i; n++) void 0 !== t[2][n] && null !== t[2][n] && (e.skins[n] = t[2][n])
        } else 0;
      if (void 0 !== t[3] && null !== t[3])
        if (Array.isArray(t[3])) {
          e.pets = [];
          for (n = 0, i = t[3].length; n < i; n++) void 0 !== t[3][n] && null !== t[3][n] && (e.pets[n] = t[3][n])
        } else 0;
      return void 0 !== t[4] && null !== t[4] && (e.rulerCount = t[4]), void 0 !== t[5] && null !== t[5] && (e.gold = t[5]), void 0 !== t[6] && null !== t[6] && (e.coin = t[6]), void 0 !== t[7] && null !== t[7] && (e.ticket = t[7]), void 0 !== t[8] && null !== t[8] && (e.turntableCount = t[8]), e
    }, t.toIndex = function(t) {
      var e = {};
      if (void 0 !== t.items && null !== t.items)
        if (Array.isArray(t.items)) {
          e[1] = [];
          for (var n = 0, i = t.items.length; n < i; n++)
            if (void 0 !== t.items[n] && null !== t.items[n])
              if (Array.isArray(t.items[n])) {
                e[1][n] = [];
                for (var o = 0, r = t.items[n].length; o < r; o++) void 0 !== t.items[n][o] && null !== t.items[n][o] && (e[1][n][o] = t.items[n][o])
              } else 0
        } else 0;
      if (void 0 !== t.skins && null !== t.skins)
        if (Array.isArray(t.skins)) {
          e[2] = [];
          for (n = 0, i = t.skins.length; n < i; n++) void 0 !== t.skins[n] && null !== t.skins[n] && (e[2][n] = t.skins[n])
        } else 0;
      if (void 0 !== t.pets && null !== t.pets)
        if (Array.isArray(t.pets)) {
          e[3] = [];
          for (n = 0, i = t.pets.length; n < i; n++) void 0 !== t.pets[n] && null !== t.pets[n] && (e[3][n] = t.pets[n])
        } else 0;
      return void 0 !== t.rulerCount && null !== t.rulerCount && (e[4] = t.rulerCount), void 0 !== t.gold && null !== t.gold && (e[5] = t.gold), void 0 !== t.coin && null !== t.coin && (e[6] = t.coin), void 0 !== t.ticket && null !== t.ticket && (e[7] = t.ticket), void 0 !== t.turntableCount && null !== t.turntableCount && (e[8] = t.turntableCount), e
    }
  }(cc || (cc = {}));
  var lc, dc = cc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.fightId = t[1], t[2] && (e.syncData = ju.fromIndex(t[2])), e.now = t[3], t[4] && (e.gift = dc.fromIndex(t[4])), e
    }, t.__cmd = 514
  }(lc || (lc = {}));
  var pc, fc = lc;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.fightId, t.stepResult && (e[2] = uc.toIndex(t.stepResult)), e
    }, t.__cmd = 515
  }(pc || (pc = {}));
  var vc, gc = pc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.fightId = t[1], t[2] && (e.syncData = ju.fromIndex(t[2])), t[3] && (e.gift = dc.fromIndex(t[3])), void 0 !== t[4] && null !== t[4] && (e.gold = t[4]), void 0 !== t[5] && null !== t[5] && (e.addGold = t[5]), void 0 !== t[6] && null !== t[6] && (e.tired = t[6]), void 0 !== t[7] && null !== t[7] && (e.goldRate = t[7]), e
    }, t.__cmd = 515
  }(vc || (vc = {}));
  var yc, mc = vc;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.skinId, e
    }, t.__cmd = 769
  }(yc || (yc = {}));
  var bc, wc = yc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 769
  }(bc || (bc = {}));
  var xc, Tc = bc;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.itemId, e
    }, t.__cmd = 1025
  }(xc || (xc = {}));
  var _c, kc = xc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), t[2] && (e.gift = dc.fromIndex(t[2])), e
    }, t.__cmd = 1025
  }(_c || (_c = {}));
  var Sc, Ic = _c;
  ! function(t) {
    t.toIndex = function(t) {
      return {}
    }, t.__cmd = 1026
  }(Sc || (Sc = {}));
  var Bc, Dc = Sc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 1026
  }(Bc || (Bc = {}));
  var Cc, Ec = Bc;
  ! function(t) {
    t.toIndex = function(t) {
      return {}
    }, t.__cmd = 1027
  }(Cc || (Cc = {}));
  var Pc, Mc = Cc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 1027
  }(Pc || (Pc = {}));
  var Oc, Lc = Pc;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.shareType, void 0 !== t.encryptedData && null !== t.encryptedData && (e[2] = t.encryptedData), void 0 !== t.iv && null !== t.iv && (e[3] = t.iv), e
    }, t.__cmd = 1281
  }(Oc || (Oc = {}));
  var Ac, Rc = Oc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), t[2] && (e.gift = dc.fromIndex(t[2])), void 0 !== t[3] && null !== t[3] && (e.openGId = t[3]), void 0 !== t[4] && null !== t[4] && (e.serverTime = t[4]), e
    }, t.__cmd = 1281
  }(Ac || (Ac = {}));
  var Nc, jc = Ac;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.giftType, void 0 !== t.openGId && null !== t.openGId && (e[2] = t.openGId), e
    }, t.__cmd = 1282
  }(Nc || (Nc = {}));
  var Gc, Fc = Nc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.result = t[1], t[2] && (e.syncData = ju.fromIndex(t[2])), t[3] && (e.gift = dc.fromIndex(t[3])), e
    }, t.__cmd = 1282
  }(Gc || (Gc = {}));
  var Vc, Uc = Gc;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.encryptedData, e[2] = t.iv, e
    }, t.__cmd = 1283
  }(Vc || (Vc = {}));
  var Wc, Xc = Vc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.openGId = t[1], void 0 !== t[2] && null !== t[2] && (e.serverTime = t[2]), e
    }, t.__cmd = 1283
  }(Wc || (Wc = {}));
  var zc, $c = Wc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.type = t[1], t[2] && (e.gift = dc.fromIndex(t[2])), e
    }, t.__cmd = 1537
  }(zc || (zc = {}));
  var Hc, qc = zc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.type = t[1], e.message = t[2], e
    }, t.__cmd = 1538
  }(Hc || (Hc = {}));
  var Kc, Yc = Hc;
  ! function(t) {
    t.toIndex = function(t) {
      return {}
    }, t.__cmd = 1793
  }(Kc || (Kc = {}));
  var Jc, Qc = Kc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 1793
  }(Jc || (Jc = {}));
  var Zc, th = Jc;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.score, e
    }, t.__cmd = 1794
  }(Zc || (Zc = {}));
  var eh, nh = Zc;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 1794
  }(eh || (eh = {}));
  var ih, oh = eh;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.type, e
    }, t.__cmd = 2049
  }(ih || (ih = {}));
  var rh, sh = ih;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return e.index = t[1], t[2] && (e.gift = dc.fromIndex(t[2])), t[3] && (e.syncData = ju.fromIndex(t[3])), e
    }, t.__cmd = 2049
  }(rh || (rh = {}));
  var ah, uh = rh;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.skin, e
    }, t.__cmd = 2050
  }(ah || (ah = {}));
  var ch, hh = ah;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), t[2] && (e.gift = dc.fromIndex(t[2])), e
    }, t.__cmd = 2050
  }(ch || (ch = {}));
  var lh, dh = ch;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.type, e
    }, t.__cmd = 2051
  }(lh || (lh = {}));
  var ph, fh = lh;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.gift = dc.fromIndex(t[1])), t[2] && (e.syncData = ju.fromIndex(t[2])), e
    }, t.__cmd = 2051
  }(ph || (ph = {}));
  var vh, gh = ph;
  ! function(t) {
    t.toIndex = function(t) {
      return {}
    }, t.__cmd = 2052
  }(vh || (vh = {}));
  var yh, mh = vh;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 2052
  }(yh || (yh = {}));
  var bh, wh = yh;
  ! function(t) {
    t.toIndex = function(t) {
      return {}
    }, t.__cmd = 2053
  }(bh || (bh = {}));
  var xh, Th = bh;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 2053
  }(xh || (xh = {}));
  var _h, kh = xh;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.type, void 0 !== t.uid && null !== t.uid && (e[2] = t.uid), e
    }, t.__cmd = 2054
  }(_h || (_h = {}));
  var Sh, Ih = _h;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), t[2] && (e.gift = dc.fromIndex(t[2])), e
    }, t.__cmd = 2054
  }(Sh || (Sh = {}));
  var Bh, Dh = Sh;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.type, e
    }, t.__cmd = 2055
  }(Bh || (Bh = {}));
  var Ch, Eh = Bh;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 2055
  }(Ch || (Ch = {}));
  var Ph, Mh = Ch;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.uid, e[2] = t.time, e
    }, t.__cmd = 2305
  }(Ph || (Ph = {}));
  var Oh, Lh = Ph;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e.result = t[2], e
    }, t.__cmd = 2305
  }(Oh || (Oh = {}));
  var Ah, Rh = Oh;
  ! function(t) {
    t.toIndex = function(t) {
      return {}
    }, t.__cmd = 2306
  }(Ah || (Ah = {}));
  var Nh, jh = Ah;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 2306
  }(Nh || (Nh = {}));
  var Gh, Fh = Nh;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.uid, e[2] = t.timestamp, e
    }, t.__cmd = 2307
  }(Gh || (Gh = {}));
  var Vh, Uh = Gh;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 2307
  }(Vh || (Vh = {}));
  var Wh, Xh = Vh;
  ! function(t) {
    t.toIndex = function(t) {
      return {}
    }, t.__cmd = 2308
  }(Wh || (Wh = {}));
  var zh, $h = Wh;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e.count = t[2], e
    }, t.__cmd = 2308
  }(zh || (zh = {}));
  var Hh, qh = zh;
  ! function(t) {
    t.toIndex = function(t) {
      var e = {};
      return e[1] = t.uid, e[2] = t.shareType, e[3] = t.timestamp, e
    }, t.__cmd = 2309
  }(Hh || (Hh = {}));
  var Kh, Yh = Hh;
  ! function(t) {
    t.fromIndex = function(t) {
      var e = {};
      return t[1] && (e.syncData = ju.fromIndex(t[1])), e
    }, t.__cmd = 2309
  }(Kh || (Kh = {}));
  var Jh = Kh;

  function Qh(t) {
    return ku(257, t)
  }

  function Zh(t) {
    return ku(260, t)
  }

  function tl(t) {
    return ku(513, t)
  }

  function el(t) {
    return ku(515, t)
  }

  function nl(t) {
    return ku(2051, t)
  }

  function il(t) {
    return ku(2052, t)
  }
  var ol = !1;
  var rl = function() {
      function t() {
        this.taskMap = {};
        var t = this.taskMap;
        for (var e in qr.taskDefs) {
          var n = qr.taskDefs[e],
            i = n.taskType,
            o = t[i];
          o || (o = t[i] = new sl(i)), o.addTask(n)
        }
      }
      return t.prototype.syncData = function(t) {
        for (var e = 0, n = t.length; e < n; e++) {
          var i = t[e],
            o = qr.taskDefs[i.id];
          o ? i.isReward ? (o.rewarded = !0, o.progress = o.value) : o.progress = i.progress : console.warn("缺少任务".concat(i.id, "的信息"))
        }
      }, t
    }(),
    sl = function() {
      function t(t) {
        this.taskType = t, this._progress = 0, this.taskList = []
      }
      return Object.defineProperty(t.prototype, "progress", {
        get: function() {
          return this._progress
        },
        set: function(t) {
          this._progress = t, this.checkProgress()
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.addTask = function(t) {
        this.taskList.push(t)
      }, t.prototype.checkProgress = function() {
        for (var t = 0, e = this.taskList.length; t < e; t++) {
          var n = this.taskList[t];
          n.rewarded || (this._progress, n.value)
        }
      }, t
    }(),
    al = function() {
      var LOCAL_KEY = "ul-local-state";
      var LOCAL_FIELDS = ["uid","createTime","sex","isGuest","fightCount","isGuide","bestScore","skins","crtSkin","usedSkins","pets","rulerCount","loginDays","ticket","ticketVideoAd","gold","goldRate","videoTurntableCount","freeTurntableCount","shareTurntableCount","turntableCount","todayTurntableCount","lastFreeTurntableTime","coin","expertInfos","isNewPlayer"];
      function __saveLocal(u) {
        try {
          var snap = {};
          for (var i = 0; i < LOCAL_FIELDS.length; i++) { var k = LOCAL_FIELDS[i]; snap[k] = u[k]; }
          wx.setStorageSync(LOCAL_KEY, snap);
        } catch (_) {}
      }
      function __loadLocal(u) {
        try {
          var snap = wx.getStorageSync(LOCAL_KEY);
          if (snap && typeof snap === "object") {
            for (var i = 0; i < LOCAL_FIELDS.length; i++) {
              var k = LOCAL_FIELDS[i];
              if (snap[k] !== undefined) u[k] = snap[k];
            }
          }
          // ONE-TIME RESET: a previous build auto-unlocked every hero+pet.
          // Clear skins/pets back to defaults once — keep only the default
          // starter skin 101 as owned so it shows active in the Skin screen.
          if (!wx.getStorageSync("ul-skins-reset-v2")) {
            u.skins = [101];
            u.pets = [];
            u.usedSkins = [101];
            u.crtSkin = 101;
            wx.setStorageSync("ul-skins-reset-v2", 1);
          }
        } catch (_) {}
      }
      function t() {
        this.uid = 0, this.token = "", this.connectToken = "", this.createTime = 0, this.sex = 0, this.isGuest = !0, this.fightCount = 0, this.isGuide = !0, this.bestScore = 0, this.skins = [101], this.crtSkin = 101, this.usedSkins = [101], this.pets = [], this.rulerCount = 0, this.loginDays = 0, this.ticket = 0, this.ticketVideoAd = 0, this.gold = 0, this.goldRate = 0, this.videoTurntableCount = 0, this.freeTurntableCount = 0, this.shareTurntableCount = 0, this.turntableCount = 0, this.todayTurntableCount = 0, this.lastFreeTurntableTime = 0, this.coin = 0, this.expertInfos = [], this.isAuthorize = !1, this.isNewPlayer = !1;
        __loadLocal(this);
        this.__saveLocal = function () { __saveLocal(this); }.bind(this);
        var _self = this;
        setInterval(function () { __saveLocal(_self); }, 3000);
        try { wx.onHide(function () { __saveLocal(_self); }); } catch (_) {}
        try { window.addEventListener("beforeunload", function () { __saveLocal(_self); }); } catch (_) {}
        try { window.addEventListener("pagehide",     function () { __saveLocal(_self); }); } catch (_) {}
      }
      return t.prototype.hasSkin = function(t) {
        return -1 !== this.skins.indexOf(t)
      }, t.prototype.changeSkin = function(t) {
        var e;
        this.crtSkin = t, (e = {
          skinId: t
        }, ku(769, e)).then((function(t) {
          cl(t), $a("切换皮肤成功")
        })).catch(console.error)
      }, Object.defineProperty(t.prototype, "petBonusScore", {
        get: function() {
          for (var t = this.pets, e = 0, n = 0, i = t.length; n < i; n++) {
            var o = Zr.getAnimalDef(t[n]);
            o && (e += o.bonusScore)
          }
          return e
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "lastPet", {
        get: function() {
          for (var t = -1, e = -1, n = this.pets, i = 0, o = n.length; i < o; i++) {
            var r = Zr.getAnimalDef(n[i]);
            r && r.showLevel > e && (e = r.showLevel, t = r.id)
          }
          return t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "canBuySkin", {
        get: function() {
          for (var t = qr.goldSkins, e = 0, n = t.length; e < n; e++) {
            var i = t[e];
            if (!this.hasSkin(i.id)) return i.gold <= this.gold
          }
          return !1
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.createUser = function(t) {
        this.uid = t.uid, this.createTime = t.createTime, this.sex = t.sex, this.isGuest = t.guest, this.tasks = new rl, this.bestScore = t.bestScore, this.skins = t.skins, this.usedSkins = t.usedSkins, this.crtSkin = t.crtSkin, this.tasks.syncData(t.tasks), this.pets = t.pets, this.fightCount = t.fightCount, this.isGuide = t.guide, this.rulerCount = t.rulerCount, this.loginDays = t.loginDays, this.ticket = t.ticket, this.ticketVideoAd = t.ticketVideoAd, this.gold = t.gold, this.goldRate = t.goldRate, this.videoTurntableCount = t.videoTurntableCount, this.freeTurntableCount = t.freeTurntableCount, this.shareTurntableCount = t.shareTurntableCount, this.lastFreeTurntableTime = t.lastFreeTurntableTime, this.turntableCount = t.turntableCount, this.todayTurntableCount = t.todayTurntableCount, this.coin = t.coin, this.expertInfos = t.expertInfos, Qa && (Qa.postMessage({
          type: "checkBestScore",
          score: this.bestScore
        }), function(t) {
          if (Qa && t && 0 !== t.length) {
            t.sort((function(t, e) {
              return t.id - e.id
            }));
            for (var e = [], n = 0; n < t.length; n++) {
              var i = t[n];
              e.push(i.level)
            }
            Qa.postMessage({
              type: "updateExpertScores",
              maps: JSON.stringify(e)
            })
          }
        }(this.expertInfos)), Yr.fliterSex(this.sex)
      }, Object.defineProperty(t.prototype, "needAuthorize", {
        get: function() {
          return this.isGuest && !this.isAuthorize
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "createDays", {
        get: function() {
          var t = xs.curTime - this.createTime,
            e = Math.ceil(t / 864e5);
          return DEVELOP && console.log("createDays", e), e
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.getExpertInfo = function(t) {
        if (this.expertInfos)
          for (var e = 0; e < this.expertInfos.length; e++)
            if (this.expertInfos[e].id === t) return this.expertInfos[e]
      }, t.prototype.syncData = function(t) {
        var e;
        t && (void 0 !== t.guest && (this.isGuest = t.guest), void 0 !== t.sex && (this.sex = t.sex), t.bestScore && (this.bestScore = t.bestScore, e = this.bestScore.toString(), DEVELOP && console.log("写入分数排行榜 <".concat(cu(), ">: ").concat(e)), new Promise((function(t, n) {
          wx.setUserCloudStorage({
            KVDataList: [{
              key: "".concat(cu()),
              value: e
            }],
            success: t,
            fail: function(t) {
              return n(t.errMsg)
            }
          })
        }))), t.skins && (this.skins = t.skins), t.usedSkins && (this.usedSkins = t.usedSkins), t.crtSkin && (this.crtSkin = t.crtSkin), t.tasks && this.tasks.syncData(t.tasks), t.pets && (this.pets = t.pets), t.fightCount && (this.fightCount = t.fightCount), void 0 !== t.guide && (this.isGuide = t.guide), void 0 !== t.rulerCount && (this.rulerCount = t.rulerCount), void 0 !== t.loginDays && (this.loginDays = t.loginDays, this.isNewPlayer = this.loginDays <= 1), void 0 !== t.ticket && (this.ticket = t.ticket), void 0 !== t.ticketVideoAd && (this.ticketVideoAd = t.ticketVideoAd), void 0 !== t.gold && (this.gold = t.gold), void 0 !== t.goldRate && (this.goldRate = t.goldRate), void 0 !== t.videoTurntableCount && (this.videoTurntableCount = t.videoTurntableCount), void 0 !== t.freeTurntableCount && (this.freeTurntableCount = t.freeTurntableCount), void 0 !== t.shareTurntableCount && (this.shareTurntableCount = t.shareTurntableCount), void 0 !== t.turntableCount && (this.turntableCount = t.turntableCount), void 0 !== t.todayTurntableCount && (this.todayTurntableCount = t.todayTurntableCount), void 0 !== t.coin && (this.coin = t.coin), void 0 !== t.lastFreeTurntableTime && (this.lastFreeTurntableTime = t.lastFreeTurntableTime), void 0 !== t.expertInfos && (this.expertInfos = t.expertInfos))
      }, o([fn], t.prototype, "isGuide", void 0), o([fn], t.prototype, "bestScore", void 0), o([fn], t.prototype, "skins", void 0), o([fn], t.prototype, "crtSkin", void 0), o([fn], t.prototype, "tasks", void 0), o([fn], t.prototype, "usedSkins", void 0), o([fn], t.prototype, "pets", void 0), o([wn], t.prototype, "petBonusScore", null), o([wn], t.prototype, "lastPet", null), o([wn], t.prototype, "canBuySkin", null), o([fn], t.prototype, "rulerCount", void 0), o([fn], t.prototype, "ticket", void 0), o([fn], t.prototype, "ticketVideoAd", void 0), o([fn], t.prototype, "gold", void 0), o([fn], t.prototype, "goldRate", void 0), o([fn], t.prototype, "videoTurntableCount", void 0), o([fn], t.prototype, "freeTurntableCount", void 0), o([fn], t.prototype, "shareTurntableCount", void 0), o([fn], t.prototype, "turntableCount", void 0), o([fn], t.prototype, "coin", void 0), t
    }(),
    ul = new al;

  function cl(t) {
    t.syncData && ul.syncData(t.syncData), t.errMsg && Ua(t.errMsg)
  }

  function hl(t) {
    var e;
    console.log("=> notify add gifts"), (e = {}, ku(259, e)).then((function(e) {
      e.syncData && ul.syncData(e.syncData), Ha(t.gift)
    }))
  }

  function ll(t) {
    console.log("=> notify message"), 1 === t.type && Ua(t.message)
  }
  var dl = function() {
    function t() {
      this._isDisposed = !1
    }
    return Object.defineProperty(t.prototype, "objectType", {
      get: function() {
        throw "to override"
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "object3D", {
      get: function() {
        throw "to override"
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.isInViewPort = function(t) {
      return !0
    }, t.prototype.updateMaterial = function() {}, t.prototype.update = function(t) {}, t.prototype.setPosition = function(t, e, n) {
      this.object3D.position.set(t, e, n)
    }, t.prototype.dispose = function() {
      this._isDisposed = !0, wd.removeGameObject(this)
    }, t
  }();

  function pl(t, e, n) {
    if (void 0 === e && (e = !0), void 0 === n && (n = !0), t instanceof dr.Mesh) {
      var i = t;
      if (i.geometry && i.geometry.dispose(), e && i.material)
        if (Array.isArray(i.material))
          for (var o = 0; o < i.material.length; o++) {
            var r = i.material[o];
            n && r.map && r.map.dispose(), r.dispose()
          } else n && i.material.map && i.material.map.dispose(), i.material.dispose()
    }
    for (o = t.children.length - 1; o >= 0; o--) pl(t.children[o])
  }
  var fl = function() {
      function t() {}
      return t.mergeBufferGeometries = function(t, e) {
        for (var n = null !== t[0].index, i = new Set(Object.keys(t[0].attributes)), o = new Set(Object.keys(t[0].morphAttributes)), r = {}, s = {}, a = new dr.BufferGeometry, u = 0, c = 0; c < t.length; ++c) {
          var h = t[c];
          if (n !== (null !== h.index)) return null;
          for (var l in h.attributes) {
            if (!i.has(l)) return null;
            void 0 === r[l] && (r[l] = []), r[l].push(h.attributes[l])
          }
          for (var d in h.morphAttributes) {
            if (!o.has(d)) return null;
            void 0 === s[d] && (s[d] = []), s[d].push(h.morphAttributes[d])
          }
          var p = a.userData;
          if (p.mergedUserData = p.mergedUserData || [], p.mergedUserData.push(h.userData), e) {
            var f = void 0;
            if (n) f = h.index.count;
            else {
              if (void 0 === h.attributes.position) return null;
              f = h.attributes.position.count
            }
            a.addGroup(u, f, c), u += f
          }
        }
        if (n) {
          var v = 0,
            g = [];
          for (c = 0; c < t.length; ++c) {
            for (var y = t[c].index, m = 0; m < y.count; ++m) g.push(y.getX(m) + v);
            v += t[c].attributes.position.count
          }
          a.setIndex(g)
        }
        for (var b in r) {
          var w = this.mergeBufferAttributes(r[b]);
          if (!w) return null;
          a.addAttribute(b, w)
        }
        for (var x in s) {
          var T = s[x][0].length;
          if (0 === T) break;
          a.morphAttributes = a.morphAttributes || {}, a.morphAttributes[x] = [];
          for (c = 0; c < T; ++c) {
            var _ = [];
            for (m = 0; m < s[x].length; ++m) _.push(s[x][m][c]);
            var k = this.mergeBufferAttributes(_);
            if (!k) return null;
            a.morphAttributes[x].push(k)
          }
        }
        return a
      }, t.mergeBufferAttributes = function(t) {
        for (var e, n, i, o = 0, r = 0; r < t.length; ++r) {
          var s = t[r];
          if (s.isInterleavedBufferAttribute) return null;
          if (void 0 === e && (e = s.array.constructor), e !== s.array.constructor) return null;
          if (void 0 === n && (n = s.itemSize), n !== s.itemSize) return null;
          if (void 0 === i && (i = s.normalized), i !== s.normalized) return null;
          o += s.array.length
        }
        var a = new e(o),
          u = 0;
        for (r = 0; r < t.length; ++r) a.set(t[r].array, u), u += t[r].array.length;
        return new dr.BufferAttribute(a, n, i)
      }, t
    }(),
    vl = function() {
      function t() {}
      return t.prototype.load = function(t) {
        return r(this, void 0, void 0, (function() {
          return s(this, (function(e) {
            return [2, (n = t, new Promise((function(t, e) {
              return Ur.readFile({
                filePath: n,
                encoding: void 0,
                success: function(e) {
                  return t(e.data)
                },
                fail: function(t) {
                  e(t.errMsg)
                }
              })
            })))];
            var n
          }))
        }))
      }, t
    }(),
    gl = function() {
      function t() {
        this.textureLoader = new dr.TextureLoader, this.textureLoader.setCrossOrigin("anonymous")
      }
      return t.prototype.load = function(t, e, n, i) {
        this.textureLoader.load(wr(t), e, n, i)
      }, t
    }(),
    yl = new dr.LoadingManager;
  yl.setURLModifier((function(t) {
    return wr(t)
  }));
  var ml = function() {
      function t() {
        this.crossOrigin = "anonymous", this.defaultMaterialType = dr.MeshBasicMaterial, this.manager = yl, this.defaultMaterialType = dr.MeshBasicMaterial, this.setBufferLoader(new vl), this.setTextureLoader(new gl)
      }
      return t.prototype.setCrossOrigin = function(t) {
        return this.crossOrigin = t, this
      }, t.prototype.setDefaultMaterial = function(t) {
        this.defaultMaterialType = t
      }, t.prototype.setPath = function(t) {
        return this.path = t, this
      }, t.prototype.setBufferLoader = function(t) {
        return this.bufferLoader = t, this
      }, t.prototype.setTextureLoader = function(t) {
        return this.textureLoader = t, this
      }, t.prototype.load = function(t, e, n, i) {
        var o = this,
          r = void 0 !== this.path ? this.path : dr.LoaderUtils.extractUrlBase(t);
        o.manager.itemStart(t);
        var s = function(e) {
            i ? i(e) : console.error(e), o.manager.itemEnd(t), o.manager.itemError(t)
          },
          a = new dr.FileLoader(o.manager);
        a.setResponseType("arraybuffer"), a.load(t, (function(n) {
          try {
            o.parse(n, r, (function(n) {
              e(n), o.manager.itemEnd(t)
            }), s)
          } catch (t) {
            s(t)
          }
        }), n, s)
      }, t.prototype.parse = function(t, e, n, i) {
        var o, r, s = {};
        if ("string" == typeof t) o = t;
        else if (dr.LoaderUtils.decodeText(new Uint8Array(t, 0, 4)) === Ul) {
          try {
            s[Tl.KHR_BINARY_GLTF] = new zl(t)
          } catch (t) {
            return void(i && i(t))
          }
          o = s[Tl.KHR_BINARY_GLTF].content
        } else o = dr.LoaderUtils.decodeText(new Uint8Array(t));
        try {
          r = JSON.parse(o)
        } catch (t) {
          return console.error(t), void(i && i(t))
        }
        if (void 0 === r.asset || r.asset.version[0] < 2) i && i(new Error("GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead."));
        else {
          var a = new bl(r, s, {
            path: e || this.path || "",
            crossOrigin: this.crossOrigin,
            manager: this.manager,
            defaultMaterialType: this.defaultMaterialType,
            bufferLoader: this.bufferLoader,
            textureLoader: this.textureLoader
          });
          a.parse((function(t, e, i, o, r) {
            var u = {
              scene: t,
              scenes: e,
              cameras: i,
              animations: o,
              asset: r.asset,
              parser: a,
              userData: {}
            };
            Fl(s, u, r), n(u)
          }), i)
        }
      }, t
    }(),
    bl = function() {
      function t(t, e, n) {
        this.json = t || {}, this.extensions = e || {}, this.options = n || {}, this.cache = new wl, this.primitiveCache = [], this.multiplePrimitivesCache = [], this.multiPassGeometryCache = [], this.bufferLoader = n.bufferLoader, this.textureLoader = n.textureLoader
      }
      return t.prototype.parse = function(t, e) {
        var n = this.json;
        this.cache.removeAll(), this.markDefs(), this.getMultiDependencies(["scene", "animation", "camera"]).then((function(e) {
          var i = e.scenes || [],
            o = i[n.scene || 0],
            r = e.animations || [],
            s = e.cameras || [];
          t(o, i, s, r, n)
        })).catch(e)
      }, t.prototype.markDefs = function() {
        for (var t = this.json.nodes || [], e = this.json.skins || [], n = this.json.meshes || [], i = {}, o = {}, r = 0, s = e.length; r < s; r++)
          for (var a = e[r].joints, u = 0, c = a.length; u < c; u++) t[a[u]].isBone = !0;
        for (var h = 0, l = t.length; h < l; h++) {
          var d = t[h];
          void 0 !== d.mesh && (void 0 === i[d.mesh] && (i[d.mesh] = o[d.mesh] = 0), i[d.mesh]++, void 0 !== d.skin && (n[d.mesh].isSkinnedMesh = !0))
        }
        this.json.meshReferences = i, this.json.meshUses = o
      }, t.prototype.getDependency = function(t, e) {
        var n = t + ":" + e,
          i = this.cache.get(n);
        if (!i) {
          switch (t) {
            case "scene":
              i = this.loadScene(e);
              break;
            case "node":
              i = this.loadNode(e);
              break;
            case "mesh":
              i = this.loadMesh(e);
              break;
            case "accessor":
              i = this.loadAccessor(e);
              break;
            case "bufferView":
              i = this.loadBufferView(e);
              break;
            case "buffer":
              i = this.loadBuffer(e);
              break;
            case "material":
              i = this.loadMaterial(e);
              break;
            case "texture":
              i = this.loadTexture(e);
              break;
            case "skin":
              i = this.loadSkin(e);
              break;
            case "animation":
              i = this.loadAnimation(e);
              break;
            case "camera":
              i = this.loadCamera(e);
              break;
            default:
              throw new Error("Unknown type: " + t)
          }
          this.cache.add(n, i)
        }
        return i
      }, t.prototype.getDependencies = function(t) {
        var e = this.cache.get(t);
        if (!e) {
          var n = this,
            i = this.json[t + ("mesh" === t ? "es" : "s")] || [];
          e = Promise.all(i.map((function(e, i) {
            return n.getDependency(t, i)
          }))), this.cache.add(t, e)
        }
        return e
      }, t.prototype.getMultiDependencies = function(t) {
        for (var e = {}, n = [], i = 0, o = t.length; i < o; i++) {
          var r = t[i],
            s = this.getDependencies(r);
          s = s.then(function(t, n) {
            e[t] = n
          }.bind(this, r + ("mesh" === r ? "es" : "s"))), n.push(s)
        }
        return Promise.all(n).then((function() {
          return e
        }))
      }, t.prototype.loadBuffer = function(t) {
        var e = this.json.buffers[t];
        if (e.type && "arraybuffer" !== e.type) throw new Error("GLTFLoader: " + e.type + " buffer type is not supported.");
        return void 0 === e.uri && 0 === t ? Promise.resolve(this.extensions[Tl.KHR_BINARY_GLTF].body) : this.bufferLoader.load(Ol(e.uri, this.options.path))
      }, t.prototype.loadBufferView = function(t) {
        var e = this.json.bufferViews[t];
        return this.getDependency("buffer", e.buffer).then((function(t) {
          var n = e.byteLength || 0,
            i = e.byteOffset || 0;
          return t.slice(i, i + n)
        }))
      }, t.prototype.loadAccessor = function(t) {
        var e = this,
          n = this.json,
          i = this.json.accessors[t];
        if (void 0 === i.bufferView && void 0 === i.sparse) return null;
        var o = [];
        return void 0 !== i.bufferView ? o.push(this.getDependency("bufferView", i.bufferView)) : o.push(null), void 0 !== i.sparse && (o.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(o).then((function(t) {
          var o, r, s = t[0],
            a = Bl[i.type],
            u = kl[i.componentType],
            c = u.BYTES_PER_ELEMENT,
            h = c * a,
            l = i.byteOffset || 0,
            d = void 0 !== i.bufferView ? n.bufferViews[i.bufferView].byteStride : void 0,
            p = !0 === i.normalized;
          if (d && d !== h) {
            var f = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType,
              v = e.cache.get(f);
            v || (o = new u(s), v = new dr.InterleavedBuffer(o, d / c), e.cache.add(f, v)), r = new dr.InterleavedBufferAttribute(v, a, l / c, p)
          } else o = null === s ? new u(i.count * a) : new u(s, l, i.count * a), r = new dr.BufferAttribute(o, a, p);
          if (void 0 !== i.sparse) {
            var g = Bl.SCALAR,
              y = kl[i.sparse.indices.componentType],
              m = i.sparse.indices.byteOffset || 0,
              b = i.sparse.values.byteOffset || 0,
              w = new y(t[1], m, i.sparse.count * g),
              x = new u(t[2], b, i.sparse.count * a);
            null !== s && r.setArray(r.array.slice());
            for (var T = 0, _ = w.length; T < _; T++) {
              var k = w[T];
              if (r.setX(k, x[T * a]), a >= 2 && r.setY(k, x[T * a + 1]), a >= 3 && r.setZ(k, x[T * a + 2]), a >= 4 && r.setW(k, x[T * a + 3]), a >= 5) throw new Error("GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
            }
          }
          return r
        }))
      }, t.prototype.loadTexture = function(t) {
        var e, n = this.json,
          i = this.options,
          o = this.textureLoader,
          r = window.URL,
          s = n.textures[t],
          a = s.extensions || {},
          u = (e = a[Tl.MSFT_TEXTURE_DDS] ? n.images[a[Tl.MSFT_TEXTURE_DDS].source] : n.images[s.source]).uri,
          c = !1;
        return void 0 !== e.bufferView && (u = this.getDependency("bufferView", e.bufferView).then((function(t) {
          c = !0;
          var n = new Blob([t], {
            type: e.mimeType
          });
          return u = r.createObjectURL(n)
        }))), Promise.resolve(u).then((function(t) {
          var e = o;
          return new Promise((function(n, o) {
            e.load(Ol(t, i.path), n, void 0, o)
          }))
        })).then((function(t) {
          !0 === c && r.revokeObjectURL(u), t.flipY = !1, void 0 !== s.name && (t.name = s.name), e.mimeType in Ml && (t.format = Ml[e.mimeType]);
          var i = (n.samplers || {})[s.sampler] || {};
          return t.magFilter = Sl[i.magFilter] || dr.LinearFilter, t.minFilter = Sl[i.minFilter] || dr.LinearMipMapLinearFilter, t.wrapS = Il[i.wrapS] || dr.RepeatWrapping, t.wrapT = Il[i.wrapT] || dr.RepeatWrapping, t
        }))
      }, t.prototype.assignTexture = function(t, e, n) {
        return this.getDependency("texture", n).then((function(n) {
          t[e] = n
        }))
      }, t.prototype.loadMaterial = function(t) {
        var e, n = this,
          i = this.json,
          o = this.extensions,
          r = i.materials[t],
          s = {},
          a = r.extensions || {},
          u = [];
        if (a[Tl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
          var c = o[Tl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
          e = c.getMaterialType(r), u.push(c.extendParams(s, r, n))
        } else if (a[Tl.KHR_MATERIALS_UNLIT]) {
          var h = o[Tl.KHR_MATERIALS_UNLIT];
          e = h.getMaterialType(r), u.push(h.extendParams(s, r, n))
        } else {
          e = this.options.defaultMaterialType;
          var l = r.pbrMetallicRoughness || {};
          if (s.color = new dr.Color(1, 1, 1), s.opacity = 1, Array.isArray(l.baseColorFactor)) {
            var d = l.baseColorFactor;
            s.color.fromArray(d), s.opacity = d[3]
          }
          if (void 0 !== l.baseColorTexture && u.push(n.assignTexture(s, "map", l.baseColorTexture.index)), s.metalness = void 0 !== l.metallicFactor ? l.metallicFactor : 1, s.roughness = void 0 !== l.roughnessFactor ? l.roughnessFactor : 1, void 0 !== l.metallicRoughnessTexture) {
            var p = l.metallicRoughnessTexture.index;
            u.push(n.assignTexture(s, "metalnessMap", p)), u.push(n.assignTexture(s, "roughnessMap", p))
          }
        }!0 === r.doubleSided && (s.side = dr.DoubleSide);
        var f = r.alphaMode || Pl.OPAQUE;
        return f === Pl.BLEND ? s.transparent = !0 : (s.transparent = !1, f === Pl.MASK && (s.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : .5)), void 0 !== r.normalTexture && e !== dr.MeshBasicMaterial && (u.push(n.assignTexture(s, "normalMap", r.normalTexture.index)), s.normalScale = new dr.Vector2(1, 1), void 0 !== r.normalTexture.scale && s.normalScale.set(r.normalTexture.scale, r.normalTexture.scale)), void 0 !== r.occlusionTexture && e !== dr.MeshBasicMaterial && (u.push(n.assignTexture(s, "aoMap", r.occlusionTexture.index)), void 0 !== r.occlusionTexture.strength && (s.aoMapIntensity = r.occlusionTexture.strength)), void 0 !== r.emissiveFactor && e !== dr.MeshBasicMaterial && (s.emissive = (new dr.Color).fromArray(r.emissiveFactor)), void 0 !== r.emissiveTexture && e !== dr.MeshBasicMaterial && u.push(n.assignTexture(s, "emissiveMap", r.emissiveTexture.index)), Promise.all(u).then((function() {
          var t;
          return e === dr.ShaderMaterial ? t = o[Tl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(s) : (e === dr.MeshBasicMaterial && (delete s.roughness, delete s.metalness), t = new e(s)), void 0 !== r.name && (t.name = r.name), t.normalScale && (t.normalScale.y = -t.normalScale.y), t.map && (t.map.encoding = dr.sRGBEncoding), t.emissiveMap && (t.emissiveMap.encoding = dr.sRGBEncoding), t.specularMap && (t.specularMap.encoding = dr.sRGBEncoding), Ll(t, r), r.extensions && Fl(o, t, r), t
        }))
      }, t.prototype.loadGeometries = function(t) {
        var e, n = this,
          i = this.extensions,
          o = this.primitiveCache,
          r = function(t) {
            if (t.length < 2) return !1;
            var e = t[0],
              n = e.targets || [];
            if (void 0 === e.indices) return !1;
            for (var i = 1, o = t.length; i < o; i++) {
              var r = t[i];
              if (e.mode !== r.mode) return !1;
              if (void 0 === r.indices) return !1;
              if (!Nl(e.attributes, r.attributes)) return !1;
              var s = r.targets || [];
              if (n.length !== s.length) return !1;
              for (var a = 0, u = n.length; a < u; a++)
                if (!Nl(n[a], s[a])) return !1
            }
            return !0
          }(t);
        return r && (e = t, t = [t[0]]), this.getDependencies("accessor").then((function(s) {
          for (var a = [], u = function(e, r) {
              var u = t[e],
                c = function(t, e) {
                  for (var n = 0, i = t.length; n < i; n++) {
                    var o = t[n];
                    if (Rl(o.primitive, e)) return o.promise
                  }
                  return null
                }(o, u);
              if (c) a.push(c);
              else if (u.extensions && u.extensions[Tl.KHR_DRACO_MESH_COMPRESSION]) {
                var h = i[Tl.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u, n).then((function(t) {
                  return Vl(t, u, s), t
                }));
                o.push({
                  primitive: u,
                  promise: h
                }), a.push(h)
              } else {
                var l = new dr.BufferGeometry;
                Vl(l, u, s);
                h = Promise.resolve(l);
                o.push({
                  primitive: u,
                  promise: h
                }), a.push(h)
              }
            }, c = 0, h = t.length; c < h; c++) u(c);
          return Promise.all(a).then((function(i) {
            if (r) {
              var o = i[0],
                a = n.multiPassGeometryCache,
                u = function(t, e, n) {
                  for (var i = 0, o = t.length; i < o; i++) {
                    var r = t[i];
                    if (e === r.baseGeometry && jl(n, r.primitives)) return r.geometry
                  }
                  return null
                }(a, o, e);
              if (null !== u) return [u.geometry];
              var c = new dr.BufferGeometry;
              for (var h in c.name = o.name, c.userData = o.userData, o.attributes) c.addAttribute(h, o.attributes[h]);
              for (var h in o.morphAttributes) c.morphAttributes[h] = o.morphAttributes[h];
              for (var l = [], d = 0, p = 0, f = e.length; p < f; p++) {
                for (var v = s[e[p].indices], g = 0, y = v.count; g < y; g++) l.push(v.array[g]);
                c.addGroup(d, v.count, p), d += v.count
              }
              return c.setIndex(l), a.push({
                geometry: c,
                baseGeometry: o,
                primitives: e
              }), [c]
            }
            if (i.length > 1) {
              for (p = 1, f = t.length; p < f; p++)
                if (t[0].mode !== t[p].mode) return i;
              var m = n.multiplePrimitivesCache;
              u = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++) {
                  var o = t[n];
                  if (jl(e, o.baseGeometries)) return o.geometry
                }
                return null
              }(m, i);
              if (u) {
                if (null !== u.geometry) return [u.geometry]
              } else {
                c = fl.mergeBufferGeometries(i, !0);
                if (m.push({
                    geometry: c,
                    baseGeometries: i
                  }), null !== c) return [c]
              }
            }
            return i
          }))
        }))
      }, t.prototype.loadMesh = function(t) {
        var e = this,
          n = this.json,
          i = this.extensions,
          o = n.meshes[t];
        return this.getMultiDependencies(["accessor", "material"]).then((function(n) {
          for (var r = o.primitives, s = [], a = 0, u = r.length; a < u; a++) s[a] = void 0 === r[a].material ? new dr.MeshBasicMaterial({
            color: 16777215,
            transparent: !1,
            depthTest: !0,
            side: dr.FrontSide
          }) : n.materials[r[a].material];
          return e.loadGeometries(r).then((function(n) {
            for (var a = 1 === n.length && n[0].groups.length > 0, u = [], c = 0, h = n.length; c < h; c++) {
              var l = n[c],
                d = r[c],
                p = void 0,
                f = a ? s : s[c];
              if (d.mode === _l.TRIANGLES || d.mode === _l.TRIANGLE_STRIP || d.mode === _l.TRIANGLE_FAN || void 0 === d.mode) p = !0 === o.isSkinnedMesh ? new dr.SkinnedMesh(l, f) : new dr.Mesh(l, f), d.mode === _l.TRIANGLE_STRIP ? p.drawMode = dr.TriangleStripDrawMode : d.mode === _l.TRIANGLE_FAN && (p.drawMode = dr.TriangleFanDrawMode);
              else if (d.mode === _l.LINES) p = new dr.LineSegments(l, f);
              else if (d.mode === _l.LINE_STRIP) p = new dr.Line(l, f);
              else if (d.mode === _l.LINE_LOOP);
              else {
                if (d.mode !== _l.POINTS) throw new Error("GLTFLoader: Primitive mode unsupported: " + d.mode);
                p = new dr.Points(l, f)
              }
              Object.keys(p.geometry.morphAttributes).length > 0 && Al(p, o), p.name = o.name || "mesh_" + t, n.length > 1 && (p.name += "_" + c), Ll(p, o), u.push(p);
              for (var v = a ? p.material : [p.material], g = void 0 !== l.attributes.color, y = void 0 === l.attributes.normal, m = !0 === p.isSkinnedMesh, b = Object.keys(l.morphAttributes).length > 0, w = b && void 0 !== l.morphAttributes.normal, x = 0, T = v.length; x < T; x++) {
                var _ = v[x];
                if (p.isPoints) {
                  var k = "PointsMaterial:" + _.uuid,
                    S = e.cache.get(k);
                  S || (S = new dr.PointsMaterial, dr.Material.prototype.copy.call(S, _), S.color.copy(_.color), S.map = _.map, S.lights = !1, e.cache.add(k, S)), _ = S
                } else if (p.isLine) {
                  k = "LineBasicMaterial:" + _.uuid;
                  var I = e.cache.get(k);
                  I || (I = new dr.LineBasicMaterial, dr.Material.prototype.copy.call(I, _), I.color.copy(_.color), I.lights = !1, e.cache.add(k, I)), _ = I
                }
                if (g || y || m || b) {
                  k = "ClonedMaterial:" + _.uuid + ":";
                  _.isGLTFSpecularGlossinessMaterial && (k += "specular-glossiness:"), m && (k += "skinning:"), g && (k += "vertex-colors:"), y && (k += "flat-shading:"), b && (k += "morph-targets:"), w && (k += "morph-normals:");
                  var B = e.cache.get(k);
                  B || (B = _.isGLTFSpecularGlossinessMaterial ? i[Tl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(_) : _.clone(), m && (B.skinning = !0), g && (B.vertexColors = dr.VertexColors), y && (B.flatShading = !0), b && (B.morphTargets = !0), w && (B.morphNormals = !0), e.cache.add(k, B)), _ = B
                }
                v[x] = _, _.aoMap && void 0 === l.attributes.uv2 && void 0 !== l.attributes.uv && l.addAttribute("uv2", new dr.BufferAttribute(l.attributes.uv.array, 2)), _.isGLTFSpecularGlossinessMaterial && (p.onBeforeRender = i[Tl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms)
              }
              p.material = a ? v : v[0]
            }
            if (1 === u.length) return u[0];
            var D = new dr.Group;
            for (c = 0, h = u.length; c < h; c++) D.add(u[c]);
            return D
          }))
        }))
      }, t.prototype.loadCamera = function(t) {
        var e, n = this.json.cameras[t],
          i = n[n.type];
        if (i) return "perspective" === n.type ? e = new dr.PerspectiveCamera(dr.Math.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : "orthographic" === n.type && (e = new dr.OrthographicCamera(i.xmag / -2, i.xmag / 2, i.ymag / 2, i.ymag / -2, i.znear, i.zfar)), void 0 !== n.name && (e.name = n.name), Ll(e, n), Promise.resolve(e);
        console.warn("GLTFLoader: Missing camera parameters.")
      }, t.prototype.loadSkin = function(t) {
        var e = this.json.skins[t],
          n = {
            joints: e.joints
          };
        return void 0 === e.inverseBindMatrices ? Promise.resolve(n) : this.getDependency("accessor", e.inverseBindMatrices).then((function(t) {
          return n.inverseBindMatrices = t, n
        }))
      }, t.prototype.loadAnimation = function(t) {
        var e = this.json.animations[t];
        return this.getMultiDependencies(["accessor", "node"]).then((function(n) {
          for (var i = [], o = function(t, o) {
              var r = e.channels[t],
                s = e.samplers[r.sampler];
              if (s) {
                var a = r.target,
                  u = void 0 !== a.node ? a.node : a.id,
                  c = void 0 !== e.parameters ? e.parameters[s.input] : s.input,
                  h = void 0 !== e.parameters ? e.parameters[s.output] : s.output,
                  l = n.accessors[c],
                  d = n.accessors[h],
                  p = n.nodes[u];
                if (p) {
                  p.updateMatrix(), p.matrixAutoUpdate = !0;
                  var f = void 0;
                  switch (Cl[a.path]) {
                    case Cl.weights:
                      f = dr.NumberKeyframeTrack;
                      break;
                    case Cl.rotation:
                      f = dr.QuaternionKeyframeTrack;
                      break;
                    case Cl.position:
                    case Cl.translation:
                    case Cl.scale:
                    default:
                      f = dr.VectorKeyframeTrack
                  }
                  var v = p.name ? p.name : p.uuid,
                    g = void 0 !== s.interpolation ? El[s.interpolation] : dr.InterpolateLinear,
                    y = [];
                  Cl[a.path] === Cl.weights ? p.traverse((function(t) {
                    !0 === t.isMesh && t.morphTargetInfluences && y.push(t.name ? t.name : t.uuid)
                  })) : y.push(v);
                  for (var m = 0, b = y.length; m < b; m++) {
                    var w = new f(y[m] + "." + Cl[a.path], dr.AnimationUtils.arraySlice(l.array, 0, void 0), dr.AnimationUtils.arraySlice(d.array, 0, void 0), g);
                    "CUBICSPLINE" === s.interpolation && (w.createInterpolant = function(t) {
                      return new xl(this.times, this.values, this.getValueSize() / 3, t)
                    }, w.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), i.push(w)
                  }
                }
              }
            }, r = 0, s = e.channels.length; r < s; r++) o(r);
          var a = void 0 !== e.name ? e.name : "animation_" + t;
          return new dr.AnimationClip(a, void 0, i)
        }))
      }, t.prototype.loadNode = function(t) {
        var e = this.json,
          n = this.extensions,
          i = e.meshReferences,
          o = e.meshUses,
          r = e.nodes[t];
        return this.getMultiDependencies(["mesh", "skin", "camera", "light"]).then((function(t) {
          var e;
          if (!0 === r.isBone) e = new dr.Bone;
          else if (void 0 !== r.mesh) {
            var s = t.meshes[r.mesh];
            if (i[r.mesh] > 1) {
              var a = o[r.mesh]++;
              (e = s.clone()).name += "_instance_" + a, e.onBeforeRender = s.onBeforeRender;
              for (var u = 0, c = e.children.length; u < c; u++) e.children[u].name += "_instance_" + a, e.children[u].onBeforeRender = s.children[u].onBeforeRender
            } else e = s
          } else if (void 0 !== r.camera) e = t.cameras[r.camera];
          else if (r.extensions && r.extensions[Tl.KHR_LIGHTS_PUNCTUAL] && void 0 !== r.extensions[Tl.KHR_LIGHTS_PUNCTUAL].light) {
            e = n[Tl.KHR_LIGHTS_PUNCTUAL].lights[r.extensions[Tl.KHR_LIGHTS_PUNCTUAL].light]
          } else e = new dr.Object3D;
          if (void 0 !== r.name && (e.name = dr.PropertyBinding.sanitizeNodeName(r.name)), Ll(e, r), r.extensions && Fl(n, e, r), void 0 !== r.matrix) {
            var h = new dr.Matrix4;
            h.fromArray(r.matrix), e.applyMatrix(h)
          } else void 0 !== r.translation && e.position.fromArray(r.translation), void 0 !== r.rotation && e.quaternion.fromArray(r.rotation), void 0 !== r.scale && e.scale.fromArray(r.scale);
          return e
        }))
      }, t.prototype.loadScene = function(t) {
        function e(t, n, i, o, r) {
          var s = o[t],
            a = i.nodes[t];
          if (void 0 !== a.skin)
            for (var u = !0 === s.isGroup ? s.children : [s], c = 0, h = u.length; c < h; c++) {
              for (var l = u[c], d = r[a.skin], p = [], f = [], v = 0, g = d.joints.length; v < g; v++) {
                var y = d.joints[v],
                  m = o[y];
                if (m) {
                  p.push(m);
                  var b = new dr.Matrix4;
                  void 0 !== d.inverseBindMatrices && b.fromArray(d.inverseBindMatrices.array, 16 * v), f.push(b)
                } else console.warn('GLTFLoader: Joint "%s" could not be found.', y)
              }
              l.bind(new dr.Skeleton(p, f), l.matrixWorld)
            }
          if (n.add(s), a.children) {
            var w = a.children;
            for (c = 0, h = w.length; c < h; c++) {
              e(w[c], s, i, o, r)
            }
          }
        }
        var n = this.json,
          i = this.extensions,
          o = this.json.scenes[t];
        return this.getMultiDependencies(["node", "skin"]).then((function(t) {
          var r = new dr.Scene;
          void 0 !== o.name && (r.name = o.name), Ll(r, o), o.extensions && Fl(i, r, o);
          for (var s = o.nodes || [], a = 0, u = s.length; a < u; a++) e(s[a], r, n, t.nodes, t.skins);
          return r
        }))
      }, t
    }(),
    wl = function() {
      function t() {
        this.objects = {}
      }
      return t.prototype.get = function(t) {
        return this.objects[t]
      }, t.prototype.add = function(t, e) {
        this.objects[t] = e
      }, t.prototype.remove = function(t) {
        delete this.objects[t]
      }, t.prototype.removeAll = function() {
        this.objects = {}
      }, t
    }(),
    xl = function(t) {
      function e(e, n, i, o) {
        var r = t.call(this, e, n, i, o) || this;
        return r.beforeStart_ = r.copySampleValue_.bind(r), r.afterEnd_ = r.copySampleValue_.bind(r), r
      }
      return n(e, t), e.prototype.copySampleValue_ = function(t) {
        for (var e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, o = t * i * 3 + i, r = 0; r !== i; r++) e[r] = n[o + r];
        return e
      }, e.prototype.interpolate_ = function(t, e, n, i) {
        for (var o = this.resultBuffer, r = this.sampleValues, s = this.valueSize, a = 2 * s, u = 3 * s, c = i - e, h = (n - e) / c, l = h * h, d = l * h, p = t * u, f = p - u, v = 2 * d - 3 * l + 1, g = d - 2 * l + h, y = -2 * d + 3 * l, m = d - l, b = 0; b !== s; b++) {
          var w = r[f + b + s],
            x = r[f + b + a] * c,
            T = r[p + b + s],
            _ = r[p + b] * c;
          o[b] = v * w + g * x + y * T + m * _
        }
        return o
      }, e
    }(dr.Interpolant),
    Tl = {
      KHR_BINARY_GLTF: "KHR_binary_glTF",
      KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
      KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
      KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
      KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
      MSFT_TEXTURE_DDS: "MSFT_texture_dds"
    },
    _l = {
      FLOAT: 5126,
      FLOAT_MAT3: 35675,
      FLOAT_MAT4: 35676,
      FLOAT_VEC2: 35664,
      FLOAT_VEC3: 35665,
      FLOAT_VEC4: 35666,
      LINEAR: 9729,
      REPEAT: 10497,
      SAMPLER_2D: 35678,
      POINTS: 0,
      LINES: 1,
      LINE_LOOP: 2,
      LINE_STRIP: 3,
      TRIANGLES: 4,
      TRIANGLE_STRIP: 5,
      TRIANGLE_FAN: 6,
      UNSIGNED_BYTE: 5121,
      UNSIGNED_SHORT: 5123
    },
    kl = (dr.Matrix3, dr.Matrix4, dr.Vector2, dr.Vector3, dr.Vector4, dr.Texture, {
      5120: Int8Array,
      5121: Uint8Array,
      5122: Int16Array,
      5123: Uint16Array,
      5125: Uint32Array,
      5126: Float32Array
    }),
    Sl = {
      9728: dr.NearestFilter,
      9729: dr.LinearFilter,
      9984: dr.NearestMipMapNearestFilter,
      9985: dr.LinearMipMapNearestFilter,
      9986: dr.NearestMipMapLinearFilter,
      9987: dr.LinearMipMapLinearFilter
    },
    Il = {
      33071: dr.ClampToEdgeWrapping,
      33648: dr.MirroredRepeatWrapping,
      10497: dr.RepeatWrapping
    },
    Bl = (dr.BackSide, dr.FrontSide, dr.NeverDepth, dr.LessDepth, dr.EqualDepth, dr.LessEqualDepth, dr.GreaterEqualDepth, dr.NotEqualDepth, dr.GreaterEqualDepth, dr.AlwaysDepth, dr.AddEquation, dr.SubtractEquation, dr.ReverseSubtractEquation, dr.ZeroFactor, dr.OneFactor, dr.SrcColorFactor, dr.OneMinusSrcColorFactor, dr.SrcAlphaFactor, dr.OneMinusSrcAlphaFactor, dr.DstAlphaFactor, dr.OneMinusDstAlphaFactor, dr.DstColorFactor, dr.OneMinusDstColorFactor, dr.SrcAlphaSaturateFactor, {
      SCALAR: 1,
      VEC2: 2,
      VEC3: 3,
      VEC4: 4,
      MAT2: 4,
      MAT3: 9,
      MAT4: 16
    }),
    Dl = {
      POSITION: "position",
      NORMAL: "normal",
      TEXCOORD_0: "uv",
      TEXCOORD0: "uv",
      TEXCOORD: "uv",
      TEXCOORD_1: "uv2",
      COLOR_0: "color",
      COLOR0: "color",
      COLOR: "color",
      WEIGHTS_0: "skinWeight",
      WEIGHT: "skinWeight",
      JOINTS_0: "skinIndex",
      JOINT: "skinIndex"
    },
    Cl = {
      scale: "scale",
      translation: "position",
      position: "position",
      rotation: "quaternion",
      weights: "morphTargetInfluences"
    },
    El = {
      CUBICSPLINE: dr.InterpolateSmooth,
      LINEAR: dr.InterpolateLinear,
      STEP: dr.InterpolateDiscrete
    },
    Pl = {
      OPAQUE: "OPAQUE",
      MASK: "MASK",
      BLEND: "BLEND"
    },
    Ml = {
      "image/png": dr.RGBAFormat,
      "image/jpeg": dr.RGBFormat
    };

  function Ol(t, e) {
    return "string" != typeof t || "" === t ? "" : /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t
  }

  function Ll(t, e) {
    void 0 !== e.extras && ("object" == typeof e.extras ? t.userData = e.extras : console.warn("GLTFLoader: Ignoring primitive type .extras, " + e.extras))
  }

  function Al(t, e) {
    if (t.updateMorphTargets(), void 0 !== e.weights)
      for (var n = 0, i = e.weights.length; n < i; n++) t.morphTargetInfluences[n] = e.weights[n];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      var o = e.extras.targetNames;
      if (t.morphTargetInfluences.length === o.length) {
        t.morphTargetDictionary = {};
        for (n = 0, i = o.length; n < i; n++) t.morphTargetDictionary[o[n]] = n
      } else console.warn("GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
  }

  function Rl(t, e) {
    return t.indices === e.indices && Nl(t.attributes, e.attributes)
  }

  function Nl(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (var n in t)
      if (t[n] !== e[n]) return !1;
    return !0
  }

  function jl(t, e) {
    if (t.length !== e.length) return !1;
    for (var n = 0, i = t.length; n < i; n++)
      if (t[n] !== e[n]) return !1;
    return !0
  }

  function Gl(t) {
    if (t.isInterleavedBufferAttribute) {
      for (var e = t.count, n = t.itemSize, i = t.array.slice(0, e * n), o = 0; o < e; ++o) i[o] = t.getX(o), n >= 2 && (i[o + 1] = t.getY(o)), n >= 3 && (i[o + 2] = t.getZ(o)), n >= 4 && (i[o + 3] = t.getW(o));
      return new dr.BufferAttribute(i, n, t.normalized)
    }
    return t.clone()
  }

  function Fl(t, e, n) {
    for (var i in n.extensions) void 0 === t[i] && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[i] = n.extensions[i])
  }

  function Vl(t, e, n) {
    var i = e.attributes;
    for (var o in i) {
      var r = Dl[o],
        s = n[i[o]];
      r && (r in t.attributes || t.addAttribute(r, s))
    }
    void 0 === e.indices || t.index || t.setIndex(n[e.indices]), void 0 !== e.targets && function(t, e, n) {
      for (var i = !1, o = !1, r = 0, s = e.length; r < s && (void 0 !== (c = e[r]).POSITION && (i = !0), void 0 !== c.NORMAL && (o = !0), !i || !o); r++);
      if (i || o) {
        var a = [],
          u = [];
        for (r = 0, s = e.length; r < s; r++) {
          var c = e[r],
            h = "morphTarget" + r;
          if (i) {
            var l = void 0;
            if (void 0 !== c.POSITION) {
              (l = Gl(n[c.POSITION])).name = h;
              for (var d = t.attributes.position, p = 0, f = l.count; p < f; p++) l.setXYZ(p, l.getX(p) + d.getX(p), l.getY(p) + d.getY(p), l.getZ(p) + d.getZ(p))
            } else l = t.attributes.position;
            a.push(l)
          }
          if (o) {
            var v = void 0;
            if (void 0 !== c.NORMAL) {
              var g = Gl(n[c.NORMAL]);
              g.name = h;
              var y = t.attributes.normal;
              for (p = 0, f = g.count; p < f; p++) g.setXYZ(p, g.getX(p) + y.getX(p), g.getY(p) + y.getY(p), g.getZ(p) + y.getZ(p))
            } else v = t.attributes.normal;
            u.push(v)
          }
        }
        i && (t.morphAttributes.position = a), o && (t.morphAttributes.normal = u)
      }
    }(t, e.targets, n), Ll(t, e)
  }
  var Ul = "glTF",
    Wl = 1313821514,
    Xl = 5130562,
    zl = function(t) {
      this.name = Tl.KHR_BINARY_GLTF, this.content = null, this.body = null;
      var e = new DataView(t, 0, 12);
      if (this.header = {
          magic: dr.LoaderUtils.decodeText(new Uint8Array(t.slice(0, 4))),
          version: e.getUint32(4, !0),
          length: e.getUint32(8, !0)
        }, this.header.magic !== Ul) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");
      for (var n = new DataView(t, 12), i = 0; i < n.byteLength;) {
        var o = n.getUint32(i, !0);
        i += 4;
        var r = n.getUint32(i, !0);
        if (i += 4, r === Wl) {
          var s = new Uint8Array(t, 12 + i, o);
          this.content = dr.LoaderUtils.decodeText(s)
        } else if (r === Xl) {
          var a = 12 + i;
          this.body = t.slice(a, a + o)
        }
        i += o
      }
      if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
    },
    $l = function() {
      function t() {}
      return t.getSimpleTexture = function(e, n, i) {
        return t._textureLoader.load(e, (function(t) {
          n && n(t)
        }), null, (function(t) {
          i && i(t)
        }))
      }, t._textureLoader = new dr.TextureLoader, t
    }(),
    Hl = (new dr.TextureLoader).load("res/textures/gray.png"),
    ql = new dr.MeshBasicMaterial({
      map: Hl,
      skinning: !0
    });
  var Kl = 40,
    Yl = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e._curSkin = 0, e._curAction = "wait", e._gray = !1, e._actions = {}, e.tryCount = 0, e._object3D = new dr.Object3D, e
      }
      return n(e, t), Object.defineProperty(e.prototype, "object3D", {
        get: function() {
          return this._object3D
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.setRotation = function(t) {
        this._object3D.rotation.y = t * Math.PI / 180
      }, e.prototype.turnBack = function(t, e, n) {
        var i = this;
        void 0 === e && (e = 500), void 0 === n && (n = "wait"), this.playAction("jump"), new TWEEN.Tween(this._object3D.rotation).to({
          y: t * Math.PI / 180
        }, e).easing(TWEEN.Easing.Sinusoidal.InOut).onComplete((function() {
          i.playAction(n)
        })).start()
      }, e.prototype.playDrop = function(t, e) {
        this.playAction("dead"), 1 === t ? (this._object3D.rotation.set(0, this._object3D.rotation.y, 0, "YXZ"), new TWEEN.Tween(this._object3D.rotation).to({
          x: Math.PI / 2
        }, 300).easing(TWEEN.Easing.Linear.None).start()) : (this._object3D.rotation.set(0, this._object3D.rotation.y, 0, "XYZ"), new TWEEN.Tween(this._object3D.rotation).to({
          x: -Math.PI / 2
        }, 300).easing(TWEEN.Easing.Linear.None).start()), new TWEEN.Tween(this._object3D.position).to({
          y: -200
        }, 1e3).easing(TWEEN.Easing.Sinusoidal.InOut).onComplete((function() {
          e()
        })).start()
      }, Object.defineProperty(e.prototype, "skinId", {
        get: function() {
          return this._curSkin
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "gray", {
        set: function(t) {
          this._gray = t
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.setSkin = function(t, e) {
        void 0 === e && (e = !1), t <= 0 ? vr.warn("skinId".concat(t, "不能小于0")) : (this._curSkin !== t || e) && (this._curSkin = t, this._skinDef = qr.findSkinDef(this._curSkin), this.tryCount = 0, this.loadModel())
      }, e.prototype.loadDefaultModel = function() {
        var t = this;
        Ts.isActorError = !0;
        var e = 1 === this._skinDef.skinType ? "default_h" : "default_a",
          n = new dr.MeshBasicMaterial({
            transparent: !1
          }),
          i = 1 === this._skinDef.skinType ? "dlc/model/maoxian.jpg" : "dlc/model/cat.jpg";
        $l.getSimpleTexture(i, (function(t) {
          t && (n.map = t)
        }));
        var o = 1 === this.objectType,
          r = new dr.OBJLoader;
        ps(function(t) {
          return "dlc/model/".concat(t, ".obj")
        }(e)).then((function(e) {
          t.removeModel();
          var i = r.parse(e);
          i.traverse((function(t) {
            t instanceof dr.Mesh && (t.castShadow = o, t.receiveShadow = !1, t.material = n)
          })), i.scale.set(Kl, Kl, Kl), t._object3D.add(i)
        }))
      }, e.prototype.loadModel = function() {
        var t = this;
        if (this.tryCount >= 2) this.loadDefaultModel();
        else {
          this.tryCount++;
          var e = new ml;
          e.setPath("dlc/model/");
          var n, i = 1 === this.objectType,
            o = this._skinDef.model;
          ps((n = o, "dlc/model/".concat(n, ".").concat($hostDef.gltfJson ? "json" : "gltf"))).then((function(n) {
            e.parse(n, void 0, (function(e) {
              var n = e.scene;
              if (n && n.children.length > 0) {
                t.removeModel();
                var o = n.children[0];
                o.traverse((function(e) {
                  e instanceof dr.Mesh && e.isMesh && (e.castShadow = i, e.receiveShadow = !1, t._gray && (e.material = ql))
                })), o.rotation.set(0, 0, 0), o.position.set(0, 0, 0), o.scale.set(Kl, Kl, Kl), t._object3D.add(o), t._animationMixer = new dr.AnimationMixer(o), t._actions = {};
                var r = e.animations;
                if (r && r.length)
                  for (var s = 0; s < r.length; s++) t._actions[r[s].name] = t._animationMixer.clipAction(r[s]);
                t.playAction(t._curAction)
              } else t.loadModel()
            }), (function(e) {
              t.loadModel()
            }))
          })).catch((function(e) {
            console.warn("getGltfString ".concat(t._skinDef.model, " error"), e), t.loadModel()
          }))
        }
      }, e.prototype.removeModel = function() {
        try {
          for (this._animationMixer && (this._animationMixer.stopAllAction(), this._animationMixer.uncacheRoot(this._animationMixer.getRoot()), this._animationMixer = null), this._actions = {}; this._object3D.children.length > 0;) {
            var t = this._object3D.children[this._object3D.children.length - 1];
            this._object3D.remove(t), pl(t, !this._gray, !this._gray)
          }
        } catch (t) {}
      }, e.prototype.playAction = function(t) {
        var e = this._actions[this._curAction];
        e && e.stop(), this._curAction = t;
        var n = this._actions[this._curAction];
        n && n.play()
      }, e.prototype.update = function(t) {
        this._animationMixer && this._animationMixer.update(t)
      }, e.prototype.dispose = function() {
        t.prototype.dispose.call(this), this.removeModel(), this._actions = null, this._object3D = null
      }, e
    }(dl),
    Jl = Yl,
    Ql = function(t) {
      function e() {
        return t.call(this) || this
      }
      return n(e, t), e.prototype.reset = function() {
        TWEEN.killTweensOf(this._object3D.position), this._object3D.rotation.set(0, 0, 0), this._object3D.position.y = 0, this._object3D.rotation.y = 0, this._object3D.visible = !0, this.playAction("wait")
      }, e.prototype.playDrop = function(e, n) {
        var i = qr.findSkinDef(ul.crtSkin);
        i && i.fallSound.length > 0 && Pa("fall_" + Do(i.fallSound));
        t.prototype.playDrop.call(this, e, n)
      }, e.prototype.walkTo = function(t, e, n, i) {
        var o = this;
        this.playAction("walk"), new TWEEN.Tween(this._object3D.position).to({
          x: t,
          z: e
        }, n).easing(TWEEN.Easing.Linear.None).onComplete((function() {
          o.playAction("wait"), i()
        })).start()
      }, Object.defineProperty(e.prototype, "objectType", {
        get: function() {
          return 1
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.update = function(e) {
        t.prototype.update.call(this, e)
      }, e
    }(Jl);
  var Zl = function(t) {
      function e() {
        return t.call(this) || this
      }
      return n(e, t), e.prototype.hide = function() {
        this.object3D.visible = !1, this.object3D.scale.set(.01, .01, .01)
      }, Object.defineProperty(e.prototype, "objectType", {
        get: function() {
          return 2
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.update = function(e) {
        t.prototype.update.call(this, e)
      }, e.prototype.birthInGame = function(t, e) {
        TWEEN.killTweensOf(this._object3D.rotation), TWEEN.killTweensOf(this._object3D.position);
        var n = Xs.getPlatform(t.id - 1);
        if (n) {
          for (var i = n.x - t.x, o = n.z - t.z, r = Math.sqrt(i * i + o * o); r < e * Pr && (t = n, n = Xs.getPlatform(t.id - 1));) {
            e -= Math.floor(r / Pr);
            var s = n.x - t.x,
              a = n.z - t.z;
            r = Math.sqrt(s * s + a * a)
          }
          var u = Xs.getPlatform(t.id - 1);
          u ? (0 === u.dir ? (this.setRotation(180), this._object3D.position.x = t.x, this._object3D.position.z = t.z + e * Pr) : (this.setRotation(270), this._object3D.position.x = t.x + e * Pr, this._object3D.position.z = t.z), this.curPlatform = u) : (this.curPlatform = t, this.setRotation(180), this._object3D.position.x = t.x, this._object3D.position.z = t.z)
        } else this._object3D.position.x = t.x, this._object3D.position.z = t.z;
        this.playAction("wait"), this._object3D.scale.set(.01, .01, .01), new TWEEN.Tween(this._object3D.scale).to({
          x: 1,
          y: 1,
          z: 1
        }, 300).easing(TWEEN.Easing.Bounce.Out).start()
      }, e.prototype.revive = function(t, e) {
        var n = this._object3D.position;
        TWEEN.killTweensOf(this._object3D.rotation), TWEEN.killTweensOf(n);
        var i = Xs.getPlatform(t.id - 1);
        if (!i) return n.x = t.x, n.z = t.z, this.playAction("wait"), void this.hide();
        for (var o = i.x - t.x, r = i.z - t.z, s = Math.sqrt(o * o + r * r) + Ar(i.type) / 6; s < e * Pr && (t = i, i = Xs.getPlatform(t.id - 1));) {
          e -= Math.floor(s / Pr);
          var a = i.x - t.x,
            u = i.z - t.z;
          s = Math.sqrt(a * a + u * u) + Ar(i.type) / 6
        }
        e < 0 && (e = 0);
        var c = Xs.getPlatform(t.id - 1);
        c ? (0 === c.dir ? (this.setRotation(180), n.x = t.x, n.z = t.z + e * Pr) : (this.setRotation(270), n.x = t.x + e * Pr, n.z = t.z), this.curPlatform = c) : (e = 0, this.curPlatform = t, this.setRotation(180), n.x = t.x, n.z = t.z), this.playAction("wait"), 0 === this.curPlatform.id && 0 === e && this.hide()
      }, e.prototype.walkTo = function(t, e, n, i, o) {
        for (var r = [], s = Xs.getPlatform(t.id - 1), a = s.x - t.x, u = s.z - t.z, c = Math.sqrt(a * a + u * u) + Ar(s.type) / 6; c < e * Pr && (t = s, s = Xs.getPlatform(t.id - 1));) {
          e -= Math.floor(c / Pr);
          var h = s.x - t.x,
            l = s.z - t.z;
          c = Math.sqrt(h * h + l * l) + Ar(s.type) / 6
        }
        e < 0 && (e = 0);
        for (var d = this.curPlatform.id; d < t.id; d++) {
          var p = Xs.getPlatform(d),
            f = Xs.getPlatform(d + 1);
          d + 1 < t.id ? (this.curPlatform = f, r.push({
            x: f.x,
            z: f.z
          })) : 0 === p.dir ? r.push({
            x: f.x,
            z: f.z + e * Pr
          }) : r.push({
            x: f.x + e * Pr,
            z: f.z
          })
        }
        this.walkPath(r, 0, n, i, o)
      }, e.prototype.walkPath = function(t, e, n, i, o) {
        var r = this;
        if (0 !== t.length) {
          var s = this._object3D.position;
          TWEEN.killTweensOf(s);
          var a = 0;
          this._object3D.visible || (a = n, this._object3D.visible = !0, new TWEEN.Tween(this._object3D.scale).delay(n).to({
            x: 1,
            y: 1,
            z: 1
          }, 300).easing(TWEEN.Easing.Bounce.Out).start());
          var u, c, h, l = t[e],
            d = l.x,
            p = l.z,
            f = 180;
          u = d, c = s.x, void 0 === h && (h = 1e-4), Math.abs(u - c) <= h || (f = 270), this.turnBack(f, 200, "walk"), this.playAction("walk");
          var v = d - s.x,
            g = p - s.z,
            y = 1e3 * Math.sqrt(v * v + g * g) / i;
          new TWEEN.Tween(s).delay(a).to({
            x: d,
            z: p
          }, y).easing(TWEEN.Easing.Linear.None).onComplete((function() {
            e < t.length - 1 ? r.walkPath(t, e + 1, 0, i, o) : (TWEEN.killTweensOf(r._object3D.rotation), r.playAction("wait"), o && o())
          })).start()
        }
      }, e
    }(Jl),
    td = [],
    ed = new dr.TextureLoader,
    nd = ed.load("res/textures/tile_bg.png");
  nd.magFilter = dr.LinearFilter, nd.minFilter = dr.LinearFilter;
  var id = ed.load("res/textures/quality4.png");
  id.magFilter = dr.LinearFilter, id.minFilter = dr.LinearFilter;
  var od = ed.load("res/textures/quality3.png");
  od.magFilter = dr.LinearFilter, od.minFilter = dr.LinearFilter;
  var rd = function(t) {
      function e() {
        var e = t.call(this) || this;
        e.angle = 0;
        var n = new dr.MeshLambertMaterial({
            map: nd,
            side: dr.DoubleSide,
            transparent: !0
          }),
          i = new dr.PlaneBufferGeometry(20, 20, 1, 1);
        i.rotateX(Math.PI / 2);
        var o = new dr.Mesh(i, n);
        o.receiveShadow = !1, e.add(o), e.perfectMaterial = new dr.MeshLambertMaterial({
          map: id,
          side: dr.DoubleSide,
          transparent: !0
        }), (i = new dr.PlaneBufferGeometry(20, 4, 1, 1)).rotateX(Math.PI / 2);
        var r = new dr.Mesh(i, e.perfectMaterial);
        r.renderOrder = 10, r.position.y = .1, r.receiveShadow = !1, e.add(r), e.excellentMaterial = new dr.MeshLambertMaterial({
          map: od,
          side: dr.DoubleSide,
          transparent: !0
        });
        var s = new dr.Mesh(i, e.excellentMaterial);
        s.position.z = -4, s.position.y = .1, s.renderOrder = 10, s.receiveShadow = !1, e.add(s);
        var a = new dr.Mesh(i, e.excellentMaterial);
        return a.position.z = 4, a.position.y = .1, a.renderOrder = 10, a.receiveShadow = !1, e.add(a), e.angle = Math.random() * Math.PI * 2, e
      }
      return n(e, t), e.prototype.update = function(t) {
        this.angle += t * Math.PI * .5, this.excellentMaterial.opacity = Math.max(.3, Math.abs(Math.sin(this.angle))), this.perfectMaterial.opacity = Math.max(.3, Math.abs(Math.cos(this.angle)))
      }, e.createTile = function() {
        return td.length > 0 ? td.pop() : new e
      }, e.releaseTile = function(t) {
        t.parent && t.parent.remove(t), t.rotation.y = 0, t.angle = Math.random() * Math.PI * 2, td.indexOf(t) < 0 && td.push(t)
      }, e
    }(dr.Object3D),
    sd = {},
    ad = {};
  var ud = function(t) {
      function e(e) {
        var n = t.call(this) || this;
        return n.platformData = e, n._material = new dr.MeshLambertMaterial, n._object3D = new dr.Object3D, n._object3D.position.x = e.x, n._object3D.position.y = e.y, n._object3D.position.z = e.z, e.id > 0 && (n._tile = rd.createTile(), n._tile.position.y = .1, n._object3D.add(n._tile), 1 === e.prevDir && (n._tile.rotation.y = Math.PI / 2)), n.setSkin(e.type), n
      }
      return n(e, t), Object.defineProperty(e.prototype, "object3D", {
        get: function() {
          return this._object3D
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "objectType", {
        get: function() {
          return 3
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.updateMaterial = function() {
        this._material && (this._material.needsUpdate = !0)
      }, e.prototype.setSkin = function(t) {
        var e = this;
        if (this._curSkin !== t)
          if (this._curSkin = t, ad[t] ? this._material.map = ad[t] : $l.getSimpleTexture("dlc/model/taizi".concat(t, ".jpg"), (function(n) {
              n && (e._material.map = ad[t] = n, e._material.needsUpdate = !0)
            })), sd[t]) {
            var n = new dr.Mesh(sd[t], this._material);
            n.castShadow = !1, n.receiveShadow = !0, this._object3D.add(n)
          } else {
            var i = new dr.OBJLoader;
            ps(function(t) {
              return "dlc/model/taizi".concat(t, ".obj")
            }(t)).then((function(n) {
              var o = i.parse(n);
              o.traverse((function(n) {
                n instanceof dr.Mesh && (n.castShadow = !1, n.receiveShadow = !0, n.material = e._material, sd[t] = n.geometry)
              })), e._object3D.add(o)
            }))
          }
      }, e.prototype.update = function(e) {
        t.prototype.update.call(this, e), this._tile && this._tile.update(e), this.platformData.needMove && (this._object3D.position.x = this.platformData.x, this._object3D.position.z = this.platformData.z, this.platformData.isJumping || (this._object3D.position.y = this.platformData.y))
      }, e.prototype.refreshPosition = function() {
        this.platformData && (this._object3D.position.x = this.platformData.x, this._object3D.position.z = this.platformData.z, this.platformData.isJumping || (this._object3D.position.y = this.platformData.y))
      }, e.prototype.isInViewPort = function(t) {
        return t.id - this.platformData.id <= 5
      }, e.prototype.jumpUp = function(t) {
        var e = this;
        this._object3D.position.y = -30, new TWEEN.Tween(this._object3D.position).to({
          y: this.platformData.y
        }, 600).easing(TWEEN.Easing.Bounce.Out).onComplete((function() {
          e.platformData.isJumping = !1, t && t()
        })).start()
      }, e.prototype.dispose = function() {
        TWEEN.killTweensOf(this._object3D.position), t.prototype.dispose.call(this), this._material && (this._material.dispose(), this._material = null), this._object3D = null, this.platformData = null, this._tile && (this._tile.parent.remove(this._tile), rd.releaseTile(this._tile), this._tile = null)
      }, e
    }(dl),
    cd = new dr.MeshLambertMaterial({
      color: 16777215
    }),
    hd = {};

  function ld(t) {
    return hd[t] ? hd[t] : ("x" === t ? (e = new dr.BoxBufferGeometry(10, 1, 1, 1, 1, 1)).translate(0, .5, .5) : (e = new dr.BoxBufferGeometry(1, 1, 10, 1, 1, 1)).translate(.5, .5, 0), hd[t] = e, e);
    var e
  }
  ld("x"), ld("z");
  var dd = function(t) {
      function e(e) {
        var n, i, o, r = t.call(this) || this;
        return r._length = 0, r._rotation = 0, r.platform = e, 0 === e.dir ? (r._rotationDir = "x", i = 0, o = -Nr(e.type)) : (r._rotationDir = "z", i = -Nr(e.type), o = 0), n = ld(r._rotationDir), r._object3D = new dr.Mesh(n, cd), r._object3D.receiveShadow = !0, r._object3D.castShadow = !0, r.setPosition(r.platform.x + i, 0, r.platform.z + o), r
      }
      return n(e, t), Object.defineProperty(e.prototype, "object3D", {
        get: function() {
          return this._object3D
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "objectType", {
        get: function() {
          return 4
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.updateMaterial = function() {
        cd.needsUpdate = !0
      }, e.prototype.update = function(e) {
        t.prototype.update.call(this, e)
      }, e.prototype.dispose = function() {
        TWEEN.killTweensOf(this), TWEEN.killTweensOf(this._object3D.position), t.prototype.dispose.call(this), this._dropGeometry && (this._dropGeometry.dispose(), this._dropGeometry = null), this._object3D = null, this.platform = null
      }, e.prototype.isInViewPort = function(t) {
        return t.id - this.platform.id <= 5
      }, e.prototype.playDrop = function() {
        var t = this;
        Pa(ga);
        var e, n = "x" === this._rotationDir ? -180 : 180,
          i = Ar(this.platform.type) / 2 - Nr(this.platform.type);
        if ((i /= this._length) > 1) this.dispose();
        else {
          "x" === this._rotationDir ? ((e = new dr.BoxBufferGeometry(10, 1, 1, 1, 1, 1)).translate(0, .5 - i, .5), this._object3D.position.z -= i * this._length) : ((e = new dr.BoxBufferGeometry(1, 1, 10, 1, 1, 1)).translate(.5, .5 - i, 0), this._object3D.position.x -= i * this._length), this._dropGeometry = this._object3D.geometry = e;
          var o = new TWEEN.Tween(this).to({
              _rotation: n * Math.PI / 180
            }, 500).easing(TWEEN.Easing.Linear.None).onUpdate((function() {
              t._object3D.rotation[t._rotationDir] = t._rotation
            })),
            r = new TWEEN.Tween(this._object3D.position).to({
              y: -100
            }, 1e3).easing(TWEEN.Easing.Linear.None).onComplete((function() {
              t.dispose()
            }));
          o.chain(r), o.start()
        }
      }, e.prototype.layDown = function(t) {
        var e = this;
        Pa(fa);
        var n = "x" === this._rotationDir ? -90 : 90;
        new TWEEN.Tween(this).to({
          _rotation: n * Math.PI / 180
        }, 300).easing(TWEEN.Easing.Sinusoidal.Out).onUpdate((function() {
          e._object3D.rotation[e._rotationDir] = e._rotation
        })).onComplete((function() {
          t()
        })).start()
      }, e.prototype.growUp = function(t) {
        this._length = t, this._object3D.scale.y = this._length
      }, e
    }(dl),
    pd = function(t) {
      function e(e) {
        var n = t.call(this) || this;
        return n.platformData = e, n.setPosition(e.x, e.y, e.z), n
      }
      return n(e, t), Object.defineProperty(e.prototype, "objectType", {
        get: function() {
          return 6
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.update = function(e) {
        t.prototype.update.call(this, e), this.platformData.needMove && (this._object3D.position.x = this.platformData.x, this._object3D.position.y = this.platformData.y, this._object3D.position.z = this.platformData.z)
      }, e.prototype.dispose = function() {
        t.prototype.dispose.call(this), this.platformData = null
      }, e
    }(Jl),
    fd = (new dr.TextureLoader).load("res/textures/guide.png"),
    vd = function(t) {
      function e(e) {
        var n, i, o = t.call(this) || this;
        o.platform = e, 0 === e.dir ? (o._rotationDir = "x", n = 0, i = -Nr(e.type)) : (o._rotationDir = "z", n = -Nr(e.type), i = 0);
        var r = Xs.getPlatform(o.platform.id + 1),
          s = r.x - o.platform.x,
          a = r.z - o.platform.z;
        o._distance = Math.sqrt(s * s + a * a) - Nr(o.platform.type), o._minDistance = o._distance - Ar(r.type) / 2, o._maxDistance = o._distance + Ar(r.type) / 2;
        var u = new dr.PlaneBufferGeometry(12, o._distance, 1, 1);
        return u.translate(0, o._distance / 2, 0), "x" !== o._rotationDir && u.rotateY(90 * Math.PI / 180), o._guildeMaterial = new dr.MeshBasicMaterial({
          color: 16777215,
          transparent: !0,
          map: fd
        }), o._object3D = new dr.Mesh(u, o._guildeMaterial), o._object3D.receiveShadow = !1, o._object3D.castShadow = !1, o.setPosition(o.platform.x + n, 0, o.platform.z + i), o
      }
      return n(e, t), Object.defineProperty(e.prototype, "object3D", {
        get: function() {
          return this._object3D
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "objectType", {
        get: function() {
          return 7
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.updateMaterial = function() {}, e.prototype.update = function(e) {
        t.prototype.update.call(this, e)
      }, e.prototype.updateColor = function() {
        Xs.bridgeLength <= 0 ? this._guildeMaterial.color.set("#FFFFFF") : Xs.bridgeLength <= this._maxDistance && Xs.bridgeLength >= this._minDistance ? this._guildeMaterial.color.set("#00FFA8") : this._guildeMaterial.color.set("#D50000")
      }, e.prototype.dispose = function() {
        this._guildeMaterial && this._guildeMaterial.dispose(), t.prototype.dispose.call(this), this._object3D && this._object3D.geometry.dispose(), this._object3D = null, this.platform = null
      }, e.prototype.isInViewPort = function(t) {
        return t.id - this.platform.id <= 5
      }, e
    }(dl),
    gd = (new dr.TextureLoader).load("res/textures/chi.png");
  gd.wrapS = dr.RepeatWrapping, gd.wrapT = dr.RepeatWrapping;
  var yd = new dr.MeshBasicMaterial({
      map: gd,
      side: dr.DoubleSide
    }),
    md = function(t) {
      function e(e) {
        var n, i, o = t.call(this) || this;
        return o._length = 0, o.platform = e, o.geometry = new dr.PlaneBufferGeometry(10, 20, 1, 1), o.geometry.translate(0, -10, 0), 0 === e.dir ? (o.geometry.rotateX(Math.PI / 2), o._scaleDir = "z", n = 0, i = -Nr(e.type)) : (o.geometry.rotateZ(-Math.PI / 2), o.geometry.rotateX(Math.PI / 2), o._scaleDir = "x", n = -Nr(e.type), i = 0), o._object3D = new dr.Mesh(o.geometry, yd), o._object3D.receiveShadow = !1, o._object3D.castShadow = !1, o.setPosition(e.x + n, .5, e.z + i), o.growUp(.001), o
      }
      return n(e, t), Object.defineProperty(e.prototype, "object3D", {
        get: function() {
          return this._object3D
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "objectType", {
        get: function() {
          return 5
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.updateMaterial = function() {}, e.prototype.update = function(t) {}, e.prototype.dispose = function() {
        t.prototype.dispose.call(this), pl(this._object3D, !1, !1)
      }, e.prototype.growUp = function(t) {
        this._length = t;
        var e = this._length / 20;
        e <= 0 && (e = .001), this._object3D.scale[this._scaleDir] = e, gd.repeat.y = e
      }, e
    }(dl),
    bd = function() {
      function t() {
        this.pets = [], this.lightTarget = new dr.Object3D, this._gameObjects = [], this._cameraDistance = Er, this.colorIndex = 0, this._colorPercent = 0, this.oldColorIndex = 0, this._curFogColor = new dr.Color, this._curWaterColor = new dr.Color, this.particlePos = new dr.Vector3
      }
      return t.prototype.init = function() {
        this.camera = Tf.camera, this.scene = Tf.scene, this.renderer = Tf.gameRender.renderer3D;
        var t = Gr[0];
        this.background = this.scene.background = new dr.Color(t), this._fog = this.scene.fog = new dr.Fog(t.getHex(), 250, 400), this.camera.position.set(this._cameraDistance, this._cameraDistance, this._cameraDistance), this.ambientLight = new dr.AmbientLight(8947848), this.scene.add(this.ambientLight), this.directionalLight = new dr.DirectionalLight(11184810, .7), this.directionalLight.position.set(-100, 200, 100), this.directionalLight.castShadow = !0, this.directionalLight.shadow.camera.top = 200, this.directionalLight.shadow.camera.bottom = -200, this.directionalLight.shadow.camera.left = -200, this.directionalLight.shadow.camera.right = 200, this.directionalLight.shadow.mapSize.x = 1024, this.directionalLight.shadow.mapSize.y = 1024, this.scene.add(this.directionalLight), this.lightTarget = new dr.Object3D, this.scene.add(this.lightTarget), this.directionalLight.target = this.lightTarget;
        var e = jr[0];
        this._waterMaterial = new dr.MeshBasicMaterial({
          color: e.getHex(),
          transparent: !0,
          opacity: .9,
          depthWrite: !1
        }), this._waterMesh = new dr.Mesh(new dr.BoxBufferGeometry(3e3, .1, 3e3), this._waterMaterial), this._waterMesh.frustumCulled = !1, this._waterMesh.receiveShadow = !1, this._waterMesh.castShadow = !1, this._waterMesh.position.y = -55, this.scene.add(this._waterMesh), this.objectLayer = new dr.Object3D, this.scene.add(this.objectLayer), this.camera.lookAt(new dr.Vector3(0, 0, 0)), this._moveTarget = new dr.Vector3(0, 0, 0);
        var n = (new dr.TextureLoader).load("res/textures/cubes.png");
        this.particleGroup = new SPE.Group({
          texture: {
            value: n,
            frames: new dr.Vector2(3, 3),
            frameCount: 9
          },
          maxParticleCount: 80,
          colorize: !1,
          depthTest: !1,
          depthWrite: !1,
          fog: !1,
          blending: dr.NormalBlending,
          hasPerspective: !1
        }), this.emitterSetting = {
          type: SPE.distributions.SPHERE,
          position: {
            spread: new dr.Vector3(30),
            radius: 10
          },
          velocity: {
            value: new dr.Vector3(36, 80, 36),
            spread: new dr.Vector3(2, 0, 2)
          },
          size: {
            value: [20 * window.devicePixelRatio, 5 * window.devicePixelRatio]
          },
          opacity: {
            value: [1, .5]
          },
          particleCount: 40,
          duration: .3,
          maxAge: {
            value: .5
          }
        }, this.particleGroup.addPool(2, this.emitterSetting, !1), this.particleGroup.mesh.frustumCulled = !1, this.objectLayer.add(this.particleGroup.mesh), this.colorIndex = Gr.length - 1, this.setColorIndex(this.colorIndex)
      }, t.prototype.setColorIndex = function(t) {
        this.oldColorIndex = this.colorIndex, this.colorIndex = t;
        var e = Gr[this.colorIndex];
        this.background.set(e), this._fog.color.set(e), this.oldColorIndex !== this.colorIndex ? (this.colorPercent = 0, this.colorTween && TWEEN.remove(this.colorTween), this.colorTween = new TWEEN.Tween(this).to({
          colorPercent: 1
        }, 800).start()) : this.colorPercent = 1
      }, t.prototype.getColorIndex = function() {
        return this.colorIndex
      }, Object.defineProperty(t.prototype, "colorPercent", {
        get: function() {
          return this._colorPercent
        },
        set: function(t) {
          this._colorPercent = t;
          var e = jr[this.oldColorIndex],
            n = jr[this.colorIndex],
            i = 1 - this._colorPercent;
          this._curWaterColor.r = e.r * i + n.r * this._colorPercent, this._curWaterColor.g = e.g * i + n.g * this._colorPercent, this._curWaterColor.b = e.b * i + n.b * this._colorPercent, this._waterMaterial.color.set(this._curWaterColor)
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.showEffect = function(t, e, n) {
        this.particlePos.set(t, e, n), this.particleGroup.mesh.visible = !0, this.particleGroup.triggerPoolEmitter(1, this.particlePos)
      }, Object.defineProperty(t.prototype, "shadowMapEnabled", {
        get: function() {
          return this.renderer.shadowMap.enabled
        },
        set: function(t) {
          if (this.renderer.shadowMap.enabled !== t) {
            this.renderer.shadowMap.enabled = t;
            for (var e = 0; e < this._gameObjects.length; e++) this._gameObjects[e].updateMaterial();
            var n = this.renderer.shadowMap.map;
            !t && n && this.renderer.clearTarget(n, !0, !0, !1)
          }
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.createNextPlatform = function() {
        var t, e = Xs.level + 1,
          n = this.getPlatform(e);
        if (n) return n.refreshPosition(), Xs.getNextSameDirectionPlatform();
        Xs.getPlatform(e) || Xs.createNewPlatforms();
        for (var i = Xs.getCurPlatform().dir;;) {
          var o = Xs.getPlatform(e);
          if (!o) break;
          if (this.addPlatform(o), t = o, i !== o.dir) break;
          e++
        }
        return t
      }, t.prototype.addPlatform = function(t) {
        var e = this,
          n = new ud(t);
        this.addGameObject(n), n.jumpUp((function() {
          if (0 === Xs.mapId) {
            var n = Zr.getAnimalByLevel(t.id);
            if (n && -1 === ul.pets.indexOf(n.id)) {
              var i = new pd(t);
              i.setSkin(n.id), i.playAction("jump"), e.addGameObject(i)
            }
          }
        }))
      }, t.prototype.getPlatformPet = function(t) {
        for (var e = this._gameObjects.length - 1; e >= 0; e--) {
          var n = this._gameObjects[e];
          if (n instanceof pd && n.platformData.id === t) return n
        }
        return null
      }, t.prototype.getPlatform = function(t) {
        for (var e = this._gameObjects.length - 1; e >= 0; e--) {
          var n = this._gameObjects[e];
          if (n instanceof ud && n.platformData.id === t) return n
        }
        return null
      }, t.prototype.addGameObject = function(t) {
        this._gameObjects.indexOf(t) >= 0 || (this.objectLayer.add(t.object3D), this._gameObjects.push(t))
      }, t.prototype.removeGameObject = function(t) {
        var e = this._gameObjects.indexOf(t);
        e >= 0 && (this._gameObjects.splice(e, 1), this.objectLayer.remove(t.object3D))
      }, t.prototype.getBridge = function(t) {
        for (var e = this._gameObjects.length - 1; e >= 0; e--) {
          var n = this._gameObjects[e];
          if (n instanceof dd && n.platform === t) return n
        }
        return null
      }, t.prototype.getRuler = function(t) {
        for (var e = this._gameObjects.length - 1; e >= 0; e--) {
          var n = this._gameObjects[e];
          if (n instanceof md && n.platform === t) return n
        }
        return null
      }, t.prototype.getBridgeGuide = function(t) {
        for (var e = this._gameObjects.length - 1; e >= 0; e--) {
          var n = this._gameObjects[e];
          if (n instanceof vd && n.platform === t) return n
        }
        return null
      }, t.prototype.initHero = function() {
        var t = this;
        this.curSkin = ul.crtSkin, qr.findSkinDef(this.curSkin) || (this.curSkin = 101), this.hero = new Ql, this.hero.setSkin(this.curSkin), this.hero.playAction("wait"), this.addGameObject(this.hero), this.initFirstPlatform();
        var e = ul.pets.slice();
        e.filter((function(t) {
          return null !== Zr.getAnimalDef(t)
        })), e.sort((function(t, e) {
          return Zr.getAnimalDef(e).showLevel - Zr.getAnimalDef(t).showLevel
        }));
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          if (Zr.getAnimalDef(i)) {
            var o = new Zl;
            o.setSkin(i), o.playAction("wait"), this.addPet(o);
            var r = Xs.getPlatform(0);
            o.curPlatform = r, o.setPosition(r.x, 0, r.z), o.hide()
          }
        }
        yi((function() {
          t.curSkin !== ul.crtSkin && (t.curSkin = ul.crtSkin, t.hero.setSkin(t.curSkin))
        })), yi((function() {
          t.shadowMapEnabled = Da.quality
        }))
      }, t.prototype.addPet = function(t) {
        this.pets.push(t), this.addGameObject(t)
      }, t.prototype.addPetsInGame = function(t, e) {
        if (t) {
          for (var n = [], i = 0; i < this.pets.length; i++) {
            var o = this.pets[i];
            n.push(o.skinId)
          }
          var r, s = this.pets[this.pets.length - 1];
          r = s ? s.curPlatform : t;
          for (i = 0; i < e.length; i++) {
            var a = e[i];
            if (-1 === n.indexOf(a)) {
              if (!Zr.getAnimalDef(a)) continue;
              (o = new Zl).setSkin(a), o.playAction("wait"), this.addPet(o), o.curPlatform = r, o.birthInGame(t, this.pets.length)
            }
          }
        }
      }, t.prototype.initFirstPlatform = function() {
        var t = Xs.getPlatform(0),
          e = new ud(t);
        this.addGameObject(e), this.hero.setPosition(t.x, 0, t.z), this.lookAt(t.x, t.z)
      }, t.prototype.lookAt = function(t, e) {
        this._moveTarget.x = t, this._moveTarget.z = e, this.objectLayer.position.x = -this._moveTarget.x, this.objectLayer.position.z = -this._moveTarget.z
      }, t.prototype.moveToHero = function(t) {
        var e, n, i = this,
          o = Xs.getCurPlatform(),
          r = t.x - o.x,
          s = t.z - o.z,
          a = Math.sqrt(r * r + s * s);
        t.needMove && (a += Rr(t.type)), a > 150 ? (e = this.hero.object3D.position.x + r / 2, n = this.hero.object3D.position.z + s / 2) : (e = this.hero.object3D.position.x + r / 3 - 30, n = this.hero.object3D.position.z + s / 3 - 30, 0 !== o.dir ? e -= 10 : e += 10);
        var u = Math.max(a / Er, 1) * Er;
        u > 150 && (u += .1 * (Math.random() - .5) * u), new TWEEN.Tween(this).to({
          targetX: e,
          targetZ: n,
          cameraDistance: u
        }, 500).easing(TWEEN.Easing.Linear.None).onUpdate((function() {
          i.lookAt(i.targetX, i.targetZ)
        })).start()
      }, Object.defineProperty(t.prototype, "targetX", {
        get: function() {
          return this._moveTarget.x
        },
        set: function(t) {
          this._moveTarget.x = t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "targetZ", {
        get: function() {
          return this._moveTarget.z
        },
        set: function(t) {
          this._moveTarget.z = t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "cameraDistance", {
        get: function() {
          return this._cameraDistance
        },
        set: function(t) {
          this._cameraDistance = t;
          var e = Math.max(1, t / Er);
          this._fog.near = 250 * e, this._fog.far = 400 * e, this.camera.position.x = this._cameraDistance, this.camera.position.y = this._cameraDistance, this.camera.position.z = this._cameraDistance;
          var n = this._cameraDistance / Er * 250;
          this.camera.left = n * Br / -2, this.camera.right = n * Br / 2, this.camera.top = n / 2, this.camera.bottom = n / -2, this.camera.updateProjectionMatrix()
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.releasePlatform = function() {
        for (var t = Xs.getCurPlatform(), e = this._gameObjects.length - 1; e >= 0; e--) {
          var n = this._gameObjects[e];
          n.isInViewPort(t) || n.dispose()
        }
      }, t.prototype.startGame = function() {}, t.prototype.restartGame = function() {
        this.clean(), this.hero.reset(), this.hero.setSkin(ul.crtSkin), this.objectLayer.position.x = this.objectLayer.position.z = 0, this._moveTarget.x = this._moveTarget.z = 0, this.initFirstPlatform();
        for (var t = Xs.getPlatform(0), e = [], n = 0; n < this.pets.length; n++) {
          (o = this.pets[n]).playAction("wait"), e.push(o.skinId), o.curPlatform = t, o.setPosition(t.x, 0, t.z), o.hide()
        }
        for (n = 0; n < ul.pets.length; n++) {
          var i = ul.pets[n];
          if (-1 === e.indexOf(i)) {
            if (!Zr.getAnimalDef(i)) continue;
            var o;
            (o = new Zl).setSkin(i), o.playAction("wait"), this.addPet(o), o.curPlatform = t, o.setPosition(t.x, 0, t.z), o.hide()
          }
        }
      }, t.prototype.clean = function() {
        for (var t = this._gameObjects.length - 1; t >= 0; t--) {
          var e = this._gameObjects[t];
          1 !== e.objectType && 2 !== e.objectType && e.dispose()
        }
      }, t.prototype.revive = function() {
        var t = Xs.getCurPlatform(),
          e = this.getBridge(t);
        e && e.dispose(), this.hero.reset(), 0 !== t.dir ? this.hero.setRotation(270) : this.hero.setRotation(180), this.hero.setPosition(t.x, 0, t.z);
        for (var n = 0; n < this.pets.length; n++) {
          this.pets[n].revive(t, n + 1)
        }
      }, t.prototype.update = function(t) {
        for (var e = this._gameObjects.length - 1; e >= 0; e--) this._gameObjects[e].update(t);
        this.particleGroup.tick(t)
      }, t
    }(),
    wd = new bd,
    xd = function() {
      function t() {}
      return t.prototype.update = function(t) {
        this.currentStatus && this.currentStatus.update(t)
      }, t.prototype.enter = function(t, e) {
        this.currentStatus && this.currentStatus.exit(), this.currentStatus = new t(this), this.currentStatus.enter(e)
      }, t.prototype.exit = function() {
        this.currentStatus && (this.currentStatus.exit(), this.currentStatus = null)
      }, t
    }(),
    Td = function() {
      function t() {
        var t = ee || Fo();
        SPE.valueOverLifetimeLength = 4;
        for (var e, n = t, i = ["webgl", "experimental-webgl"], o = 0; o < i.length; o++) {
          try {
            e = canvas.getContext(i[o], {
              alpha: !1,
              antialias: n,
              stencil: !0,
              preserveDrawingBuffer: !1,
              premultipliedAlpha: !1
            })
          } catch (t) {}
          if (e) break
        }
        var r = this.gl = e;
        if (r) {
          canvas.width === kr && canvas.height === Sr || (console.log("Old Size:"), console.log("canvas.width:", canvas.width), console.log("canvas.height:", canvas.height), canvas.width = kr, canvas.height = Sr, console.log("New Size:"), console.log("canvas.width:", canvas.width), console.log("canvas.height:", canvas.height));
          var s, a, u, c = this.renderer3D = new dr.WebGLRenderer({
            context: e,
            canvas: canvas,
            alpha: !1,
            stencil: !0,
            premultipliedAlpha: !1
          });
          c.setPixelRatio(Ir), c.setClearColor(0, 1), c.shadowMap.enabled = Da.quality, c.autoClear = !1, this.state3D = c.state,
            function(t, e) {
              tu && (nu.width = t, nu.height = e)
            }(canvas.width, canvas.height), PIXI.settings.isLittleGame = !0, PIXI.settings.MAX_TEXTURES = 4, PIXI.settings.MAX_VERTEX_ATTRIBS = 16, PIXI.settings.SPRITE_BATCH_SIZE = 256, PIXI.settings.GC_MODE = PIXI.GC_MODES.MANUAL, PIXI.settings.MIPMAP_TEXTURES = !1, PIXI.settings.RESOLUTION = 1, PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR, !Ro() || (void 0 === (a = 10) && (a = 0), void 0 === (u = 5) && (u = 0), Uo > (s = 2) || !(Uo < s) && (Wo > a || !(Wo < a) && Xo >= u)) || (PIXI.settings.CAN_UPLOAD_SAME_BUFFER = !1), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, 0), this.pixiApp = new PIXI.Application({
              view: canvas,
              context: r,
              width: kr,
              height: Sr,
              resolution: Ir,
              clearBeforeRender: !1,
              legacy: !0,
              sharedLoader: !0,
              autoStart: !1,
              sharedTicker: !0
            }), this.ticker = this.pixiApp.ticker, this.pixiApp.removeRenderTick(), this.renderer2D = this.pixiApp.renderer, this.renderer2D.plugins.interaction.moveWhenInside = !0, this.state2D = this.renderer2D.state
        } else Wa("WEBGL已丢失，请尝试重启或更新微信版本。", "webgl context lost", {
          confirmText: "重启游戏",
          success: function(t) {
            t.confirm && "function" == typeof wx.restartMiniProgram && wx.restartMiniProgram()
          }
        })
      }
      return t.prototype.render = function(t, e, n) {
        this.state3D.reset(), this.renderer3D.clear(!0, !0, !0), this.renderer3D.render(t, e), this.renderer2D.reset(), this.ticker.update(n), this.pixiApp.render()
      }, t
    }(),
    _d = function(t) {
      function e() {
        var e = t.call(this) || this;
        e.container = new PIXI.Container, e.container.interactive = !0;
        var n = new PIXI.Container;
        return e.bg = ks("icon_skin_gray"), e.bg.anchor.set(0, 0), n.addChild(e.bg), e.thumb = ks("icon_skin"), e.thumb.y = (e.bg.height - e.thumb.height) / 2, e.thumb.x = (e.bg.width - e.thumb.width) / 2, n.addChild(e.thumb), e.thumbMask = new PIXI.Graphics, e.thumbMask.x = e.thumb.x, e.thumbMask.y = e.thumb.y, e.thumbMask.beginFill(0), e.thumbMask.drawRect(0, 0, e.thumb.width, e.thumb.height), e.thumbMask.endFill(), n.addChild(e.thumbMask), e.thumb.mask = e.thumbMask, e.redIcon = ks("tag_red_point"), e.redIcon.x = e.bg.width - e.redIcon.width - 8, e.redIcon.y = 0, n.addChild(e.redIcon), e.container.on("pointerdown", e.onTapDown, e), e.container.on("pointerup", e.onTapUp, e), e.container.on("pointercancel", e.onTapUp, e), e.container.on("pointerout", e.onTapUp, e), e.container.on("pointerupoutside", e.onTapUp, e), e.container.addChild(n), n.position.set(-n.width / 2, -n.height / 2), e.addToDestroy = yi((function() {
          if (ul.canBuySkin) e.redIcon.texture = PIXI.Texture.fromFrame("tag_green_point"), e.redIcon.visible = !0;
          else {
            var t = ul.skins.length - ul.usedSkins.length;
            e.redIcon.visible = t > 0, t > 0 && (e.redIcon.texture = PIXI.Texture.fromFrame("tag_red_point"))
          }
        })), e
      }
      return n(e, t), e.prototype.onTapUp = function() {
        this.container.scale.set(1, 1)
      }, e.prototype.onTapDown = function() {
        this.container.scale.set(.9, .9)
      }, Object.defineProperty(e.prototype, "progress", {
        get: function() {
          return this.thumbMask.scale.y
        },
        set: function(t) {
          t < 0 && (t = 0), this.thumbMask.scale.y = Math.min(t, 1), this.thumbMask.y = this.thumb.y + this.thumb.height - this.thumbMask.height
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "skin", {
        get: function() {
          return this.container
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.destroy = function() {
        this.container.removeAllListeners(), t.prototype.destroy.call(this), this.container = null
      }, e
    }(js),
    kd = function(t) {
      function e(e, n) {
        var i = t.call(this) || this;
        return i.frameId = e, i.offFrameId = n, i.sprite = ks(e), i.sprite.interactive = !0, i.sprite.anchor.set(.5, .5), i.sprite.on(Ms, i.onTapDown, i), i.sprite.on(Os, i.onTapUp, i), i.sprite.on(Ls, i.onTapUp, i), i.sprite.on(As, i.onTapUp, i), i.sprite.on(Rs, i.onTapUp, i), i
      }
      return n(e, t), e.prototype.toggleTexture = function(t) {
        this.sprite.texture = Ss(t ? this.frameId : this.offFrameId)
      }, Object.defineProperty(e.prototype, "skin", {
        get: function() {
          return this.sprite
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.onTapUp = function() {
        this._destroyed || this.sprite.scale.set(1, 1)
      }, e.prototype.onTapDown = function() {
        this._destroyed || this.sprite.scale.set(.9, .9)
      }, e.prototype.destroy = function() {
        this.sprite && this.sprite.removeAllListeners(), t.prototype.destroy.call(this), this.sprite = null
      }, e
    }(js),
    Sd = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.canTapMaskClose = !0, e.bg = Bs("dlc/ui/bg/bg_setting.png"), e.bg.width = 681, e.bg.height = 415, e.addChild(e.bg), e.closeButton = new Gs, e.closeButton.x = e.bg.width - 10, e.closeButton.y = 0, e.closeButton.on("pointerdown", (function() {
          e.close()
        }), e), e.addSkin(e.closeButton);
        var n, i = new PIXI.Container;
        return e.vibrateButton = new kd("vibrate_on", "vibrate_off"), e.vibrateButton.on("pointerdown", (function() {
          Da.vibrate = !Da.vibrate, Da.save(), Da.vibrate && wx.vibrateShort(), e.vibrateButton.toggleTexture(Da.vibrate)
        }), e), e.vibrateButton.toggleTexture(Da.vibrate), i.addChild(e.vibrateButton.skin), e.vibrateButton.x = e.vibrateButton.width / 2, n = e.vibrateButton.x + e.vibrateButton.width / 2 + 30, e.qualityButton = new kd("quality_best", "quality_low"), e.qualityButton.on("pointerdown", (function() {
          Da.quality = !Da.quality, Da.save(), e.qualityButton.toggleTexture(Da.quality)
        }), e), e.qualityButton.toggleTexture(Da.quality), i.addChild(e.qualityButton.skin), e.qualityButton.x = n + e.qualityButton.width / 2, n = e.qualityButton.x + e.qualityButton.width / 2 + 30, e.soundButton = new kd("sound_on", "sound_off"), e.soundButton.on("pointerdown", (function() {
          Da.audio = !Da.audio, Da.save(), e.soundButton.toggleTexture(Da.audio)
        }), e), i.addChild(e.soundButton.skin), e.soundButton.toggleTexture(Da.audio), e.soundButton.x = n + e.soundButton.width / 2, i.x = (e.bg.width - i.width) / 2, i.y = 250, e.addChild(i), e
      }
      return n(e, t), e.prototype.onHide = function() {}, e.prototype.onDestroy = function() {
        this.closeButton && (this.closeButton.destroy(), this.closeButton = null), this.soundButton && (this.soundButton.destroy(), this.soundButton = null), this.qualityButton && (this.qualityButton.destroy(), this.qualityButton = null), this.vibrateButton && (this.vibrateButton.destroy(), this.vibrateButton = null)
      }, e.prototype.onShow = function() {
        this.x = (Dr - this.bg.width) / 2
      }, e
    }(ka),
    Id = new(function() {
      function t() {
        this.lightTarget = new dr.Object3D, this._gameObjects = [], this.gray = !1
      }
      return t.prototype.init = function() {
        this.camera = Tf.skinCamera, this.scene = Tf.skinScene, this.scene.background = new dr.Color(14211814), this.camera.position.set(150, 50, 150), this.ambientLight = new dr.AmbientLight(8947848), this.scene.add(this.ambientLight), this.directionalLight = new dr.DirectionalLight(11184810, .7), this.directionalLight.position.set(100, 200, 100), this.directionalLight.castShadow = !0, this.directionalLight.shadow.camera.top = 100, this.directionalLight.shadow.camera.bottom = -100, this.directionalLight.shadow.camera.left = -100, this.directionalLight.shadow.camera.right = 100, this.directionalLight.shadow.mapSize.x = 1024, this.directionalLight.shadow.mapSize.y = 1024, this.scene.add(this.directionalLight), this.lightTarget = new dr.Object3D, this.scene.add(this.lightTarget), this.directionalLight.target = this.lightTarget, this.cameraTarget = new dr.Vector3(0, 0, 0), this.camera.lookAt(this.cameraTarget)
      }, t.prototype.initActor = function() {
        var t = this;
        this.hero = new Ql, this.pet = new Zl, this.curActor = this.hero, this.platform = new Fs(0, 0, 20, 1, 0, 0);
        var e = new ud(this.platform);
        e.object3D.position.y = -50, this.addGameObject(e), yi((function() {
          t.shadowMapEnabled = Da.quality
        }))
      }, Object.defineProperty(t.prototype, "shadowMapEnabled", {
        set: function(t) {
          for (var e = 0; e < this._gameObjects.length; e++) this._gameObjects[e].updateMaterial()
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.addGameObject = function(t) {
        this._gameObjects.indexOf(t) >= 0 || (this.scene.add(t.object3D), this._gameObjects.push(t))
      }, t.prototype.removeGameObject = function(t) {
        var e = this._gameObjects.indexOf(t);
        e >= 0 && (this._gameObjects.splice(e, 1), this.scene.remove(t.object3D))
      }, t.prototype.show = function() {
        this.hero || this.initActor(), Ts.isShowSkin = !0
      }, t.prototype.hide = function() {
        Ts.isShowSkin = !1
      }, t.prototype.setSkin = function(t) {
        this.curActor && this.removeGameObject(this.curActor);
        var e = !0;
        1 === t.skinType ? (this.curActor = this.hero, e = !ul.hasSkin(t.id)) : (this.curActor = this.pet, e = ul.pets.indexOf(t.id) < 0), this.addGameObject(this.curActor);
        var n = !1;
        t.id === this.skinId && this.gray !== e && (n = !0), this.skinId = t.id, this.gray = e, this.curActor.gray = e, this.curActor.setPosition(this.platform.x, -50, this.platform.z), this.curActor.setSkin(this.skinId, n), this.curActor.playAction("wait"), this.curActor.setRotation(45), this.lookAt(this.platform.x, this.platform.z)
      }, t.prototype.playAction = function(t) {
        this.curActor.playAction(t)
      }, t.prototype.lookAt = function(t, e) {
        this.cameraTarget.x = t, this.cameraTarget.z = e, this.camera.position.x = this.cameraTarget.x + 150, this.camera.position.z = this.cameraTarget.z + 150, this.camera.lookAt(this.cameraTarget), this.lightTarget.position.x = this.cameraTarget.x, this.lightTarget.position.z = this.cameraTarget.z, this.directionalLight.position.set(this.cameraTarget.x + 100, 200, this.cameraTarget.z + 100)
      }, t.prototype.setRotation = function(t) {
        this.curActor.setRotation(t)
      }, t.prototype.getRotation = function() {
        return 180 * this.curActor.object3D.rotation.y / Math.PI
      }, t.prototype.update = function(t) {
        for (var e = this._gameObjects.length - 1; e >= 0; e--) this._gameObjects[e].update(t)
      }, t
    }()),
    Bd = function(t) {
      function e() {
        var e = t.call(this) || this;
        e.name = "SkinListItem";
        var n = ks("bg_skin_item");
        e.addChild(n);
        var i = e.image = new PIXI.Sprite;
        i.anchor.set(.5, .5), i.x = 90, i.y = 100, e.addChild(i);
        var o = e.lock = ks("icon_lock");
        return o.anchor.set(.5, .5), o.x = 90, o.y = 100, e.addChild(o), o.visible = !1, e.selectedIcon = ks("icon_select"), e.selectedIcon.anchor.set(.5, .5), e.selectedIcon.x = 180 - e.selectedIcon.width / 2 - 10, e.selectedIcon.y = 200 - e.selectedIcon.height / 2 - 10, e.addChild(e.selectedIcon), e.selectedIcon.visible = !1, e.redIcon = ks("tag_red_point"), e.redIcon.x = n.width - e.redIcon.width, e.redIcon.y = 0, e.addChild(e.redIcon), e.interactive = !0, e
      }
      return n(e, t), e.prototype.updateData = function(t) {
        this.def = t, this.refreshData()
      }, Object.defineProperty(e.prototype, "isLock", {
        get: function() {
          return this.lock.visible
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.refreshData = function() {
        if (this.def) {
          if (1 === this.def.skinType) {
            var t = ul.hasSkin(this.def.id);
            this.lock.visible = !t, this.lock.visible && (this.lock.texture = PIXI.Texture.fromFrame(3 === this.def.unlockType ? "gold" : "icon_lock")), t ? (this.redIcon.visible = ul.usedSkins.indexOf(this.def.id) < 0, this.redIcon.visible && (this.redIcon.texture = PIXI.Texture.fromFrame("tag_red_point"))) : 3 === this.def.unlockType ? (this.redIcon.visible = this.def.gold <= ul.gold, this.redIcon.visible && (this.redIcon.texture = PIXI.Texture.fromFrame("tag_green_point"))) : this.redIcon.visible = !1
          } else this.lock.visible = ul.pets.indexOf(this.def.id) < 0, this.redIcon.visible = !1;
          this.selectedIcon.visible = ul.crtSkin === this.def.id;
          var e = this.lock.visible ? "item_gray".concat(this.def.id) : "item".concat(this.def.id);
          this.lastIcon !== e && (this.lastIcon = e, this.image.texture = PIXI.Texture.fromFrame(this.lastIcon))
        }
      }, e
    }(PIXI.Container),
    Dd = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.items = [], e.name = "SkinList", e.x = 0, e
      }
      return n(e, t), Object.defineProperty(e.prototype, "selectIndex", {
        set: function(t) {
          var e = this.items[t];
          e && (this._selectListItem = e, this.emit("onSelectItem", e))
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "selectListItem", {
        get: function() {
          return this._selectListItem
        },
        set: function(t) {
          this._selectListItem = t, this.emit("onSelectItem", t)
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.setSelectedSkin = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var n = this.items[e];
          if (n.def.id === t) {
            this.selectListItem = n;
            break
          }
        }
      }, e.prototype.setSkinData = function(t) {
        for (var e = this, n = this.items, i = 0, o = 0; o < t.length; o++) {
          var r = t[o],
            s = n[i];
          s || ((s = new Bd).on("tap", this.onTapItem, this), s.x = Math.floor(i / 2) * (Ed + Md), s.y = i % 2 * (Pd + Md), this.addChild(s), n[i] = s), s.updateData(r), ++i
        }
        i < n.length && n.splice(i).forEach((function(t) {
          e.removeChild(t), t.destroy({
            children: !0
          })
        }))
      }, e.prototype.refreshData = function() {
        for (var t = 0; t < this.items.length; t++) this.items[t].refreshData()
      }, e.prototype.onTapItem = function(t) {
        t.target;
        this.selectListItem = t.target
      }, Object.defineProperty(e.prototype, "scrollH", {
        get: function() {
          return 0 - this.x
        },
        set: function(t) {
          this.x = 0 - t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "contentWidth", {
        get: function() {
          return this.width + 0 + 0
        },
        enumerable: !1,
        configurable: !0
      }), e
    }(PIXI.Container),
    Cd = Dd,
    Ed = 180,
    Pd = 200,
    Md = 20,
    Od = [1, 1.33, 1.66, 2],
    Ld = .02,
    Ad = .998,
    Rd = Math.log(Ad);
  var Nd = function() {
      function t(t) {
        this.target = t, this.$scrollFactor = 1, this.previousTime = 0, this.velocity = 0, this.previousVelocity = [], this.currentPosition = 0, this.previousPosition = 0, this.lastPoint = 0, this.started = !0
      }
      return t.prototype.start = function(t) {
        this.started = !0, this.velocity = 0, this.previousVelocity.length = 0, this.previousPosition = this.currentPosition = t, this.lastPoint = t, this.animation = void 0
      }, t.prototype.update = function(t) {
        this.currentPosition = t;
        var e = this.lastPoint - t,
          n = e + this.target.scrollH;
        this.lastPoint = t, (n < 0 || n > this.target.maxScrollH) && (n -= e), this.target.scrollH = n
      }, t.prototype.finish = function() {
        var t = this.target,
          e = t.scrollH,
          n = t.maxScrollH;
        this.started = !1;
        for (var i = 2.33 * this.velocity, o = this.previousVelocity, r = o.length, s = 2.33, a = 0; a < r; a++) {
          var u = Od[a];
          i += o[0] * u, s += u
        }
        var c = i / s,
          h = Math.abs(c);
        if (h > Ld) {
          var l = 0,
            d = e + (c - Ld) / Rd * 2 * this.$scrollFactor;
          if (d < 0 || d > n)
            for (d = e; Math.abs(c) > Ld;) c *= (d -= c) < 0 || d > n ? .95 * Ad : Ad, l++;
          else l = Math.log(Ld / h) / Rd;
          this.throwTo(d, l)
        } else this.checkScroll()
      }, t.prototype.checkScroll = function() {
        var t = this.target,
          e = t.scrollH,
          n = t.maxScrollH;
        e < 0 ? this.throwTo(0, 300) : e > n && this.throwTo(n, 300)
      }, t.prototype.onTick = function(t) {
        var e = t - this.previousTime;
        if (this.previousTime = t, this.started) {
          var n = this.previousVelocity;
          n.length >= 4 && n.shift(), this.velocity = (this.currentPosition - this.previousPosition) / e, n.push(this.velocity), this.previousPosition = this.currentPosition
        }
        this.animation && (this.animation.update(e), this.target.scrollH = this.animation.value, this.animation.isEnd && (this.animation = void 0, this.checkScroll()))
      }, t.prototype.throwToTop = function() {
        this.throwTo(0, 300)
      }, t.prototype.throwTo = function(t, e) {
        var n = this.target.scrollH;
        n !== t && (this.animation = new jd(n, t, e))
      }, t
    }(),
    jd = function() {
      function t(t, e, n) {
        this.from = t, this.to = e, this.duration = n, this.pass = 0, this.value = 0, this.isEnd = !1, this.distance = e - t, this.value = t
      }
      return t.prototype.update = function(t) {
        var e, n;
        this.pass += t, this.pass > this.duration ? (this.value = this.to, this.isEnd = !0) : this.value = (e = this.pass / this.duration, ((n = e - 1) * n * n + 1) * this.distance + this.from)
      }, t
    }(),
    Gd = function(t) {
      function e(e, n) {
        var i = t.call(this) || this;
        i.visibleWidth = e, i.maxScrollH = Number.MAX_SAFE_INTEGER, i.touchScroll = new Nd(i), i.startX = 0;
        var o = new PIXI.Graphics;
        o.beginFill(0), o.drawRect(0, 0, e, n), o.endFill(), i.addChild(o), i.mask = o, i.interactive = !0, i.on(Ms, i._onTouchStart, i), i.on(Ns, i._onTouchMove, i), i.on(Os, i._onTouchEnd, i), i.on(Rs, i._onTouchEnd, i), i.on(Ls, i._onTouchEnd, i);
        var r = function(t) {
          i._destroyed || (i.touchScroll.onTick(Date.now()), requestAnimationFrame(r))
        };
        return requestAnimationFrame(r), i
      }
      return n(e, t), e.prototype.setContent = function(t) {
        this.content = t, this.addChild(t), this.updateMaxScrollH()
      }, e.prototype.updateMaxScrollH = function() {
        this.maxScrollH = Math.max(0, this.content.contentWidth - this.visibleWidth), this.touchScroll.checkScroll()
      }, e.prototype._onTouchStart = function(t) {
        this.startX = t.data.global.x, this.touchScroll.start(t.data.global.x)
      }, e.prototype._onTouchMove = function(t) {
        var e = t.data.global.x;
        this.touchScroll.update(e), this.content && this.content.interactiveChildren && Math.abs(e - this.startX) > 5 && (this.content.interactiveChildren = !1)
      }, e.prototype._onTouchEnd = function(t) {
        this.touchScroll.finish(), this.content && (this.content.interactiveChildren = !0)
      }, Object.defineProperty(e.prototype, "scrollH", {
        get: function() {
          return this.content ? this.content.scrollH : 0
        },
        set: function(t) {
          this.content && (this.content.scrollH = t)
        },
        enumerable: !1,
        configurable: !0
      }), e
    }(PIXI.Container),
    Fd = function(t) {
      function e(e, n, i) {
        void 0 === i && (i = 1);
        var o = t.call(this) || this;
        return o.container = new PIXI.Container, o.container.scale.x = i || 1, o.container.scale.y = i || 1, o.bg = ks(e), o.bg.anchor.set(0, 0), o.container.addChild(o.bg), o.thumb = ks(n), o.thumb.anchor.set(0, 0), o.thumb.y = (o.bg.height - o.thumb.height) / 2, o.thumb.x = (o.bg.width - o.thumb.width) / 2, o.container.addChild(o.thumb), o.thumbMask = new PIXI.Graphics, o.thumbMask.x = o.thumb.x, o.thumbMask.y = o.thumb.y, o.thumbMask.beginFill(0), o.thumbMask.drawRect(0, 0, o.thumb.width, o.thumb.height), o.thumbMask.endFill(), o.container.addChild(o.thumbMask), o.thumb.mask = o.thumbMask, o.progress = 0, o
      }
      return n(e, t), Object.defineProperty(e.prototype, "progress", {
        get: function() {
          return this.thumbMask.scale.x
        },
        set: function(t) {
          t < 0 && (t = 0), this.thumbMask.scale.x = Math.min(t, 1)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "skin", {
        get: function() {
          return this.container
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.destroy = function() {
        t.prototype.destroy.call(this)
      }, e
    }(js);

  function Vd(t, e, n) {
    t && "function" == typeof wx.navigateToMiniProgram && wx.navigateToMiniProgram({
      appId: t,
      path: e,
      success: function() {
        console.log("[success] navigate to MiniProgram")
      },
      fail: function() {
        console.log("[fail] navigate to MiniProgram")
      }
    })
  }
  var Ud = function(t) {
    function e() {
      var e = t.call(this) || this,
        n = PIXI.Sprite.fromFrame("try_game");
      return n.x = -n.width / 2, n.y = -n.height / 2, e.addChild(n), e.gameIcon = new PIXI.Sprite, e.gameIcon.width = 100, e.gameIcon.height = 100, e.gameIcon.x = n.x + 10, e.gameIcon.y = n.y + 10, e.addChild(e.gameIcon), e.interactive = !0, e.on("pointerdown", e.onTapGame, e), e
    }
    return n(e, t), e.prototype.onTapGame = function() {
      var t;
      this.curGameConfig && (1 === (t = this.curGameConfig).type && Vd(t.appId, t.path, t.image), this.showGameIcon())
    }, e.prototype.stopGameIconTween = function() {
      TWEEN.killTweensOf(this)
    }, e.prototype.showGameIconTween = function() {
      var t = this;
      this.stopGameIconTween();
      var e = 15 * Math.PI / 180;
      this.rotation = 0;
      var n = new TWEEN.Tween(this).delay(2e3).to({
          rotation: -e
        }, 50).easing(TWEEN.Easing.Quadratic.InOut),
        i = new TWEEN.Tween(this).to({
          rotation: e
        }, 100).easing(TWEEN.Easing.Linear.None),
        o = new TWEEN.Tween(this).to({
          rotation: -e
        }, 100).easing(TWEEN.Easing.Linear.None),
        r = new TWEEN.Tween(this).to({
          rotation: 0
        }, 50).easing(TWEEN.Easing.Linear.None).onComplete((function() {
          t.showGameIconTween()
        }));
      o.chain(r), i.chain(o), n.chain(i), n.start()
    }, e.prototype.showGameIcon = function() {
      var t = this;
      this.stopGameIconTween(), this.curGameConfig = Yr.getShowOverGame(), this.curGameConfig ? (Hr("games/".concat(this.curGameConfig.icon)).then((function(e) {
        t.gameIcon.texture = PIXI.Texture.fromImage(e)
      })), this.visible = !0, this.showGameIconTween()) : this.visible = !1
    }, e.prototype.destroy = function() {
      this.stopGameIconTween(), t.prototype.destroy.call(this, {
        children: !0
      })
    }, e
  }(PIXI.Container);

  function Wd() {
    return de.canWatch()
  }

  function Xd() {
    return r(this, void 0, void 0, (function() {
      return s(this, (function(t) {
        switch (t.label) {
          case 0:
            return [4, de.play("bridge_video")];
          case 1:
            return [2, t.sent()]
        }
      }))
    }))
  }

  function zd(t, e, n, i) {
    for (var o = t < 5 ? t : Math.min(20, Math.max(5, Math.floor(t / 100))), r = function(t) {
        var o = ks("gold");
        o.anchor.set(.5, .5), o.x = 375, o.y = Cr / 2, _a.stage.addChild(o);
        var r = new TWEEN.Tween(o).delay(100 * Math.random()).to({
            x: o.x + 250 * (Math.random() - .5),
            y: o.y + 250 * (Math.random() - .5)
          }, 500).easing(TWEEN.Easing.Quartic.In),
          s = new TWEEN.Tween(o).delay(300).to({
            x: e,
            y: n,
            alpha: 0
          }, 500).easing(TWEEN.Easing.Quartic.Out).onComplete((function() {
            o.destroy({
              children: !0
            }), i && i()
          }));
        r.chain(s), r.start()
      }, s = 0; s < o; s++) r()
  }
  var $d = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.scoreTween = null, e.curGold = 0, e.modalAlpha = 0, e.light = ks("reward_light"), e.light.anchor.set(.5, .5), e.light.x = 375, e.light.y = Cr / 2, e.addChild(e.light), e.goldContainer = new PIXI.Container;
        var n = ks("big_gold"),
          i = e.goldText = Cs("x0", "#FFCE49", !0, "left", 40);
        return i.x = n.x + n.width + 20, i.y = n.y + (n.height - i.height) / 2, e.goldContainer.addChild(n), e.goldContainer.addChild(i), e.goldContainer.x = (Dr - e.goldContainer.width) / 2, e.goldContainer.y = (Cr - e.goldContainer.height) / 2, e.addChild(e.goldContainer), e.buttonGroup = new PIXI.Container, e.videoButton = new ma("button_video_double"), e.videoButton.on("pointerdown", e.onTapVideo, e), e.buttonGroup.addChild(e.videoButton.skin), e.skipButton = new ma("button_skip"), e.skipButton.y = e.videoButton.y + e.videoButton.height / 2 + 100, e.skipButton.on("pointerdown", e._onSkip, e), e.buttonGroup.addChild(e.skipButton.skin), e.buttonGroup.x = 375, e.buttonGroup.y = Cr / 2 + 200, e.addChild(e.buttonGroup), e.getButton = new ma("button_get"), e.getButton.on("pointerdown", e._onGet, e), e.getButton.x = 375, e.getButton.y = Cr / 2 + 200, e.addChild(e.getButton.skin), e
      }
      return n(e, t), e.prototype._onGet = function() {
        this.close()
      }, e.prototype.onTapVideo = function() {
        return r(this, void 0, void 0, (function() {
          var t;
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                return jo() ? (this.onVideoSuccess(), [2]) : [4, Xd()];
              case 1:
                return (t = e.sent()) === he.cancel ? [2, $a("需要完整看完视频才能翻倍哦", 1100)] : t === he.fail ? [2, $a("抱歉,当前没有视频可播放", 1100)] : (this.onVideoSuccess(), [2])
            }
          }))
        }))
      }, e.prototype._onSkip = function() {
        this.close()
      }, e.prototype.playScoreTween = function(t, e, n) {
        var i = this;
        this.goldText.text = "+" + t, this.scoreTween = new TWEEN.Tween({
          s: t
        }).to({
          s: e
        }, 800).onUpdate((function(t) {
          i.goldText.text = "+" + t.s.toFixed()
        })).onComplete((function() {
          n && n()
        })).easing(TWEEN.Easing.Circular.Out).start()
      }, e.prototype.onShow = function(t) {
        this.x = 0, this.y = 0, this.onResultClose = t.onResultClose;
        var e = t.gift;
        this.light.rotation = 0, new TWEEN.Tween(this.light).to({
          rotation: 2 * Math.PI
        }, 3e3).easing(TWEEN.Easing.Linear.None).repeat(1 / 0).start(), new TWEEN.Tween(this).to({
          modalAlpha: .6
        }, 100).easing(TWEEN.Easing.Linear.None).start(), this.curGold = e.gold ? e.gold : 0, this.goldContainer.visible = this.curGold > 0, this.curGold > 0 && this.playScoreTween(0, this.curGold), this.videoButton.visible = Wd(), this.getButton.visible = !this.videoButton.visible, this.buttonGroup.visible = this.videoButton.visible
      }, e.prototype.onHide = function() {
        this.scoreTween && (TWEEN.remove(this.scoreTween), this.scoreTween = null), TWEEN.killTweensOf(this.light), TWEEN.killTweensOf(this), this.curGold > 0 && ($a("共获得".concat(this.curGold, "金币")), zd(this.curGold, 100, xa.top + 250, this.onResultClose))
      }, e.prototype.onVideoSuccess = function() {
        return r(this, void 0, void 0, (function() {
          var t, e, n = this;
          return s(this, (function(i) {
            switch (i.label) {
              case 0:
                return this.buttonGroup.visible = !1, [4, nl({
                  type: 1
                })];
              case 1:
                return (t = i.sent()) && (ul.syncData(t.syncData), t.gift ? (e = this.curGold, this.curGold *= 2, this.playScoreTween(e, this.curGold, (function() {
                  n.getButton && (n.getButton.visible = !0, n.buttonGroup.visible = !1)
                }))) : (this.getButton.visible = !0, this.buttonGroup.visible = !1)), [2]
            }
          }))
        }))
      }, e.prototype.onDestroy = function() {
        this.videoButton && (this.videoButton.destroy(), this.videoButton = null), this.skipButton && (this.skipButton.destroy(), this.skipButton = null), this.getButton && (this.getButton.destroy(), this.getButton = null)
      }, e
    }(ka),
    Hd = $d,
    qd = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.isTurntableEnd = !1, e.now = Date.now(), e.modalAlpha = 0;
        var n = e.titleBg = Bs("dlc/ui/turntable/turntable_title.png");
        n.anchor.set(.5, .5), n.x = 375, e.addChild(n), e.turntableContainer = new PIXI.Container;
        var i = Bs("dlc/ui/turntable/turntable.png");
        i.width = 581, i.height = 581, i.anchor.set(.5, .5), e.turntableContainer.addChild(i), e.turntableContainer.x = 375, e.turntableContainer.y = Cr / 2, e.addChild(e.turntableContainer);
        var o = e.turntableTop = Bs("dlc/ui/turntable/turntable_top.png");
        o.width = 172, o.height = 173, o.anchor.set(.5, .5), o.x = 375, o.y = Cr / 2 - 20, e.addChild(o), e.buttonGroup = new PIXI.Container, e.videoButton = new kd("button_video_turntable", "button_video_turntable_gray"), e.videoButton.x = e.videoButton.width / 2, e.videoButton.on("pointerdown", e.onTapVideoTurntable, e), e.freeButton = new kd("button_free", "button_free_gray"), e.freeButton.x = e.videoButton.x + e.videoButton.width / 2 + 50 + e.freeButton.width / 2, e.freeButton.on("pointerdown", e.onTapFree, e), e.buttonGroup.addChild(e.videoButton.skin), e.buttonGroup.addChild(e.freeButton.skin), e.freeButton.toggleTexture(!1), e.addChild(e.buttonGroup), e.buttonGroup.x = (Dr - e.buttonGroup.width) / 2, e.buttonGroup.y = e.turntableContainer.y + e.turntableContainer.height / 2 + 140, e.freeText = Cs("", "#ffffff", !0, "center", 32), e.freeText.y = -e.freeText.height / 2, e.freeText.x = e.freeButton.x - e.freeText.width / 2, e.freeText.visible = !1, e.buttonGroup.addChild(e.freeText), e.cdText = Cs("0", "#ffffff", !0, "center", 32), e.cdText.y = e.videoButton.height / 2 + 20, e.cdText.x = e.videoButton.x - e.cdText.width / 2, e.cdText.visible = !0, e.buttonGroup.addChild(e.cdText);
        var r = ks("gold_bg2");
        return r.x = 50, r.y = xa.top + 270, e.addChild(r), r.interactive = !0, r.on("pointerdown", (function() {
          $a("可前往皮肤界面购买金币皮肤哦", 1e3)
        }), e), e.goldText = Cs("0", "#f7f971", !0, "left", 40), e.goldText.anchor = new PIXI.Point(0, .5), e.goldText.x = r.x + 70, e.goldText.y = r.y + r.height / 2, e.addChild(e.goldText), e.closeButton = new ma("button_back3"), e.closeButton.x = e.turntableContainer.x + e.turntableContainer.width / 2, e.closeButton.y = r.y + r.height / 2, e.closeButton.on("pointerdown", (function() {
          e.close()
        }), e), e.addSkin(e.closeButton), e
      }
      return n(e, t), Object.defineProperty(e.prototype, "counting", {
        get: function() {
          return Ts.lastTurntableVideoTime && this.now - Ts.lastTurntableVideoTime < 3e4
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype._startTurntable = function(t) {
        return r(this, void 0, void 0, (function() {
          var e, n, i, o, r = this;
          return s(this, (function(s) {
            switch (s.label) {
              case 0:
                for (this.closeButton.visible = !1, this.turntableContainer.scale.set(1, 1), this.turntableTop.scale.set(1, 1), TWEEN.killTweensOf(this.turntableContainer); this.turntableContainer.rotation > 2 * Math.PI;) this.turntableContainer.rotation -= 2 * Math.PI;
                return [4, new Promise((function(t) {
                  new TWEEN.Tween(r.turntableContainer).to({
                    rotation: r.turntableContainer.rotation + 2 * Math.PI
                  }, 1e3).easing(TWEEN.Easing.Quartic.In).onComplete((function() {
                    t()
                  })).start()
                }))];
              case 1:
                s.sent(), new TWEEN.Tween(this.turntableContainer).to({
                  rotation: this.turntableContainer.rotation + 2 * Math.PI
                }, 270).repeat(1 / 0).start(), s.label = 2;
              case 2:
                return s.trys.push([2, 7, , 8]), [4, (a = {
                  type: t
                }, ku(2049, a))];
              case 3:
                return e = s.sent(), this.isTurntableEnd = !0, e ? (ul.syncData(e.syncData), [4, _s(Bo(1250, 1400, !1))]) : [3, 6];
              case 4:
                for (s.sent(), TWEEN.killTweensOf(this.turntableContainer), n = e.index, i = 180 * this.turntableContainer.rotation / Math.PI, o = 720 + 60 * (7 - n); o < i;) o += 720;
                return o += 20 * (Math.random() - .5), [4, new Promise((function(t) {
                  new TWEEN.Tween(r.turntableContainer).to({
                    rotation: o * Math.PI / 180
                  }, Bo(1250, 1400, !1)).easing(TWEEN.Easing.Quartic.Out).onComplete((function() {
                    t()
                  })).start()
                }))];
              case 5:
                s.sent(), e.gift && (e.gift.gold > 0 ? _a.showPanel(Hd, {
                  gift: e.gift,
                  onResultClose: this.onResultClose.bind(this)
                }) : Ha(e.gift)), s.label = 6;
              case 6:
                return this.closeButton.visible = !0, [3, 8];
              case 7:
                return s.sent(), this.closeButton.visible = !0, TWEEN.killTweensOf(this.turntableContainer), [3, 8];
              case 8:
                return [2]
            }
            var a
          }))
        }))
      }, e.prototype.onResultClose = function() {
        this.goldText.text = ul.gold + ""
      }, e.prototype.onShow = function() {
        var t = this;
        this.x = 0, this.y = 0, this.goldText.text = ul.gold + "", this.turntableContainer.rotation = 0, this.turntableContainer.scale.set(.5, .5), this.turntableTop.scale.set(.5, .5), this.startTween = new TWEEN.Tween({
          s: .5
        }).to({
          s: 1
        }, 600).onUpdate((function(e) {
          t.turntableContainer.scale.set(e.s, e.s), t.turntableTop.scale.set(e.s, e.s)
        })).easing(TWEEN.Easing.Elastic.Out).start(), this.titleBg.y = -this.titleBg.height, new TWEEN.Tween(this.titleBg).to({
          y: xa.top + 150
        }, 600).easing(TWEEN.Easing.Elastic.Out).start(), new TWEEN.Tween(this).to({
          modalAlpha: .8
        }, 300).easing(TWEEN.Easing.Linear.None).start(), this.addToDestroy = yi((function() {
          t.freeButton.toggleTexture(ul.freeTurntableCount > 0), t.freeButton.visible = $hostDef.censor || ul.freeTurntableCount > 0 || ul.shareTurntableCount >= 5, t.freeText.visible = !t.freeButton.visible && ul.freeTurntableCount <= 0, t.freeText.visible && (t.freeText.text = t.getNextFreeTimeText(), t.freeText.x = t.freeButton.x - t.freeText.width / 2)
        })), this.addToDestroy = yi((function() {
          t.videoButton.toggleTexture(ul.videoTurntableCount < 5)
        })), this.addToDestroy = yi((function() {
          t.cdText.text = t.counting ? (30 - (t.now - Ts.lastTurntableVideoTime) / 1e3).toFixed() : ""
        }));
        var e = setInterval((function() {
          return t.now = Date.now()
        }), 1e3);
        this.addToDestroy = function() {
          return clearInterval(e)
        }
      }, e.prototype.onHide = function() {
        this.startTween && (TWEEN.remove(this.startTween), this.startTween = null), TWEEN.killTweensOf(this.titleBg), TWEEN.killTweensOf(this.turntableContainer), TWEEN.killTweensOf(this)
      }, e.prototype.onDestroy = function() {
        t.prototype.onDestroy.call(this), this.closeButton && (this.closeButton.destroy(), this.closeButton = null), this.videoButton && (this.videoButton.destroy(), this.videoButton = null), this.freeButton && (this.freeButton.destroy(), this.freeButton = null)
      }, e.prototype.getNextFreeTimeText = function() {
        return "明日再来"
      }, e.prototype.onTapVideoTurntable = function() {
        return r(this, void 0, void 0, (function() {
          var t;
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                return DEVELOP || jo() || !this.counting ? ul.videoTurntableCount >= 5 ? ($a("今日看视频次数已用完，请明日再来"), [2]) : DEVELOP || jo() ? (this.onVideoTurntableSuccess(), [2]) : [4, Xd()] : ($a("视频冷却中"), [2]);
              case 1:
                return (t = e.sent()) === he.cancel ? [2, $a("需要完整看完视频才能使用哦", 1100)] : t === he.fail ? [2, $a("抱歉,当前没有视频可播放", 1100)] : (this.onVideoTurntableSuccess(), [2])
            }
          }))
        }))
      }, e.prototype.onTapFree = function() {
        return r(this, void 0, void 0, (function() {
          return s(this, (function(t) {
            switch (t.label) {
              case 0:
                if (ul.freeTurntableCount <= 0) return $a(this.getNextFreeTimeText()), [2];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, 4, 5]), this.buttonGroup.visible = !1, [4, this._startTurntable(1)];
              case 2:
                return t.sent(), [3, 5];
              case 3:
                return t.sent(), [3, 5];
              case 4:
                return this.buttonGroup.visible = !0, [7];
              case 5:
                return [2]
            }
          }))
        }))
      }, e.prototype.onVideoTurntableSuccess = function() {
        return r(this, void 0, void 0, (function() {
          return s(this, (function(t) {
            switch (t.label) {
              case 0:
                this.isTurntableEnd = !1, t.label = 1;
              case 1:
                return t.trys.push([1, 3, 4, 5]), this.buttonGroup.visible = !1, [4, this._startTurntable(2)];
              case 2:
                return t.sent(), [3, 5];
              case 3:
                return t.sent(), [3, 5];
              case 4:
                return this.buttonGroup.visible = !0, Ts.lastTurntableVideoTime = Date.now(), [7];
              case 5:
                return [2]
            }
          }))
        }))
      }, o([fn], e.prototype, "now", void 0), o([wn], e.prototype, "counting", null), e
    }(ka),
    Kd = qd,
    Yd = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.container = new PIXI.Container, e.container.interactive = !0, e.bg = ks("bg_coin"), e.bg.anchor.set(0, 0), e.container.addChild(e.bg), e.thumb = ks("icon_coin"), e.thumb.x = 18, e.thumb.y = 16, e.container.addChild(e.thumb), e.thumbMask = new PIXI.Graphics, e.thumbMask.x = e.thumb.x, e.thumbMask.y = e.thumb.y, e.thumbMask.beginFill(0), e.thumbMask.drawRect(0, 0, e.thumb.width, e.thumb.height), e.thumbMask.endFill(), e.container.addChild(e.thumbMask), e.thumb.mask = e.thumbMask, e.container.on("pointerdown", e.onTapDown, e), e.container.on("pointerup", e.onTapUp, e), e.container.on("pointercancel", e.onTapUp, e), e.container.on("pointerout", e.onTapUp, e), e.container.on("pointerupoutside", e.onTapUp, e), e.addToDestroy = yi((function() {
          e.progress = ul.coin / Lr
        })), e
      }
      return n(e, t), e.prototype.onTapUp = function() {
        this.container.scale.set(1, 1)
      }, e.prototype.onTapDown = function() {
        this.container.scale.set(.9, .9)
      }, Object.defineProperty(e.prototype, "progress", {
        get: function() {
          return this.thumbMask.scale.y
        },
        set: function(t) {
          t < 0 && (t = 0), this.thumbMask.scale.y = Math.min(t, 1), this.thumbMask.y = this.thumb.y + this.thumb.height - this.thumbMask.height
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "skin", {
        get: function() {
          return this.container
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.destroy = function() {
        t.prototype.destroy.call(this), this.container = null
      }, e
    }(js),
    Jd = PIXI.Container,
    Qd = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        return e.canTapMaskClose = !0, e.initUI(), e
      }
      return n(e, t), e.prototype.initUI = function() {
        var t, e = this;
        this.container = new Jd, t = $hostDef.censor ? "bg_coin_view_preview.png" : $hostDef.coinGiftTip ? "bg_coin_view_gift.png" : "bg_coin_view.png", this.bg = Bs("dlc/ui/bg/".concat(t)), this.bg.width = 681, this.bg.height = 538, this.bg.interactive = !0, this.container.addChild(this.bg), this.closeButton = new Gs, this.closeButton.x = this.bg.width - 20, this.closeButton.y = 0, this.closeButton.on("pointerdown", (function() {
          e.close()
        }), this), this.container.addChild(this.closeButton.skin), this.useButton = new ma("button_revive"), this.useButton.on("pointerdown", this.onUse, this), this.shareButton = new ma("button_share2"), this.shareButton.on("pointerdown", this.onShare, this), this.buttonGroup = new Jd, this.buttonGroup.addChild(this.shareButton.skin), this.buttonGroup.addChild(this.useButton.skin), this.container.addChild(this.buttonGroup), this.buttonGroup.x = this.bg.width / 2, this.buttonGroup.y = 450, this.coinText = Ps("0", 80, 7585416, "center"), this.coinText.x = 400, this.coinText.y = 130, this.container.addChild(this.coinText), this.addToDestroy = yi((function() {
          e.coinText.text = ul.coin + "", e.useButton.visible = e.data && e.data.isRevive && ul.coin > 0
        })), this.container.x = -this.bg.width / 2, this.container.y = -this.bg.height / 2, this.addChild(this.container)
      }, e.prototype.onShare = function() {
        (function() {
          return r(this, void 0, void 0, (function() {
            var t, e, n, o;
            return s(this, (function(r) {
              return t = ea(10), e = i({}, t.queryData), n = t.title || "", o = t.imageUrl || "", [2, ta(10, n, o, e)]
            }))
          }))
        })().then((function(t) {
          Hs(t) ? ul.coin >= Lr || !$hostDef.coinTime || $hostDef.coinTime <= 0 || xs.curTime - Ts.lastShareCoinTime < 1e3 || (Ts.lastShareCoinTime = xs.curTime, setTimeout((function() {
            var t;
            ul.coin >= Lr || (t = {}, ku(2308, t)).then((function(t) {
              t && ul.syncData(t.syncData)
            }))
          }), Math.max(1e3, 1e3 * $hostDef.coinTime) + Math.floor(1e3 * Math.random()))) : za("分享到群更容易被好友点击哦", 1100)
        }))
      }, e.prototype.onUse = function() {
        return r(this, void 0, void 0, (function() {
          var t;
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                if (ul.coin <= 0) return $a("您的复活币不够"), [2];
                this.useButton.interactive = !1, e.label = 1;
              case 1:
                return e.trys.push([1, 3, , 4]), [4, (n = {}, ku(2306, n))];
              case 2:
                return (t = e.sent()) && (ul.syncData(t.syncData), $a("复活币减1"), this.data.onSuccess && this.data.onSuccess(), this.close()), [3, 4];
              case 3:
                return Xa(e.sent()), this.useButton.interactive = !0, [3, 4];
              case 4:
                return [2]
            }
            var n
          }))
        }))
      }, e.prototype.onShow = function(e) {
        t.prototype.onShow.call(this), this.x = 375, this.y = xa.top + Cr / 2, this.data = e, this.shareButton.visible = !$hostDef.censor, e && e.isRevive ? this.useButton.visible = !0 : this.useButton.visible = !1, this.shareButton.visible && this.useButton.visible ? (this.shareButton.x = this.shareButton.width / 2, this.useButton.x = this.shareButton.x + this.shareButton.width / 2 + this.useButton.width / 2 + 10) : (this.shareButton.x = this.shareButton.width / 2, this.useButton.x = this.useButton.width / 2), this.buttonGroup.x = (this.bg.width - this.buttonGroup.width) / 2, this.scale.set(.5, .5), this.tween = new TWEEN.Tween(this.scale).to({
          x: 1,
          y: 1
        }, 500).easing(TWEEN.Easing.Elastic.Out).start()
      }, e.prototype.onHide = function() {
        this.tween && (TWEEN.remove(this.tween), this.tween = null), t.prototype.onHide.call(this)
      }, e.prototype.onDestroy = function() {
        this.closeButton && (this.closeButton.destroy(), this.closeButton = null), this.useButton && (this.useButton.destroy(), this.useButton = null), this.shareButton && (this.shareButton.destroy(), this.shareButton = null)
      }, e
    }(ka),
    Zd = Qd,
    tp = function(t) {
      function e() {
        var e = t.call(this, !0, 1) || this;
        e.modalAlpha = .1;
        var n = xa.height,
          i = Is("res/ui/bg_title.png");
        return i.width = 650, i.x = (Dr - i.width) / 2, i.y = 200, e.addChild(i), i.interactive = !0, i.on(Ms, (function() {
          ! function() {
            if (jo() || "api" !== $hostDef.api) {
              for (var t = [], e = 1; e < 50; e++) t.push("score-test" + e), t.push("score-preview" + e), t.push("score-dev" + e);
              wx.removeUserCloudStorage({
                keyList: t,
                success: function(t) {
                  console.log("removeDevStorage succ", t)
                },
                fail: function(t) {
                  console.log("removeDevStorage fail", t)
                }
              })
            }
          }()
        }), e), e.maxScoreTxt = Cs("", "#ffffff", !0, "left", 40), e.maxScoreTxt.anchor.set(.5, .5), e.maxScoreTxt.x = 375, e.maxScoreTxt.y = i.y + 250, e.addChild(e.maxScoreTxt), e.startButton = new ma("button_start"), e.startButton.x = 375, e.startButton.y = n - e.startButton.height - 350, e.startButton.on(Ms, e._tapStartGame, e), e.addSkin(e.startButton), e.goldRate = ks("game_gold_rate"), e.goldRate.x = e.startButton.x - e.goldRate.width / 2, e.goldRate.y = e.startButton.y - e.startButton.height / 2 - 20, e.addChild(e.goldRate), e.gameIcon = new Ud, e.gameIcon.x = 120, e.gameIcon.y = n - e.startButton.height - 350, e.addChild(e.gameIcon), e.settingSkin = new Mp(!0, !1, -18), e.settingSkin.x = (Dr - e.settingSkin.width) / 2, e.settingSkin.y = n - 280, e.addSkin(e.settingSkin), e.rankButton = new ma("label_rank"), e.rankButton.x = 375, e.rankButton.y = n - e.rankButton.height - 100, e.rankButton.on(Ms, e._tapRank, e), e.addSkin(e.rankButton), e.groupRankButton = new ma("label_group_rank"), e.groupRankButton.x = 375, e.groupRankButton.y = n - e.groupRankButton.height - 30, e.groupRankButton.on(Ms, (function() {
          Zs()
        }), e), e.addSkin(e.groupRankButton), e.turntableButton = new ma("icon_turntable"), e.turntableButton.x = 110, e.turntableButton.y = n - 100, e.turntableButton.on(Ms, (function() {
          _a.showPanel(Kd)
        }), e), e.addSkin(e.turntableButton), e.coinButton = new Yd, e.coinButton.x = xa.width - e.coinButton.width / 2 - 80, e.coinButton.y = n - 100 - e.coinButton.height / 2, e.addSkin(e.coinButton), e.coinButton.on("pointerdown", (function() {
          _a.showPanel(Zd, {
            isRevive: !1
          })
        }), e), e.coinButton.visible = Ts.showCoin, e
      }
      return n(e, t), e.prototype._tapStartGame = function() {
        return r(this, void 0, void 0, (function() {
          var t = this;
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                return this.startButton.interactive = !1, [4, tl({
                  fightType: 1
                }).then((function(e) {
                  ul.syncData(e.syncData), t.startButton.interactive = !0, t.close(), Tf.startGame(e.fightId), Xs.isShareFight = !1
                })).catch((function(e) {
                  t.startButton && (t.startButton.interactive = !0), $a("网络连接不稳定，请稍微再试")
                }))];
              case 1:
                return e.sent(), [2]
            }
          }))
        }))
      }, e.prototype._tapRank = function() {
        _a.showPanel(vu)
      }, e.prototype.showFeedbackButton = function(t, e) {
        var n = this;
        if ("function" == typeof wx.createFeedbackButton) {
          var i = {
            x: t * _a.uiScale,
            y: (xa.top + e - 75) * _a.uiScale,
            width: 140 * _a.uiScale,
            height: 150 * _a.uiScale
          };
          this.feedbackButton = wx.createFeedbackButton({
            type: "image",
            image: "res/ui/touch_button.png",
            style: {
              left: i.x,
              top: i.y,
              width: i.width,
              height: i.height
            }
          }), this.feedbackButton.show(), this.addToDestroy = wi((function() {
            return _a.openedPopUpPanelCount > 1
          }), (function(t) {
            t ? n.feedbackButton.hide() : n.feedbackButton.show()
          }))
        }
      }, e.prototype.removeFeedBackButton = function() {
        this.feedbackButton && (this.feedbackButton.hide(), this.feedbackButton.destroy(), this.feedbackButton = null)
      }, e.prototype.onHide = function() {
        this.removeFeedBackButton()
      }, e.prototype.onDestroy = function() {
        this.startButton && (this.startButton.destroy(), this.startButton = null), this.rankButton && (this.rankButton.destroy(), this.rankButton = null), this.groupRankButton && (this.groupRankButton.destroy(), this.groupRankButton = null), this.settingSkin && (this.settingSkin.destroy(), this.settingSkin = null), this.turntableButton && (this.turntableButton.destroy(), this.turntableButton = null), this.coinButton && (this.coinButton.destroy(), this.coinButton = null)
      }, e.prototype.onShow = function() {
        var t = this;
        this.x = 0, this.y = xa.top, this.maxScoreTxt.text = "历史最高分:" + ul.bestScore, this.gameIcon.showGameIcon(), this.showFeedbackButton(this.settingSkin.x, this.settingSkin.y), this.addToDestroy = yi((function() {
          t.goldRate.visible = !$hostDef.censor && $hostDef.goldRate && ul.goldRate > 0
        }))
      }, e
    }(ka),
    ep = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        return e.canTapMaskClose = !0, e.initUI(), e
      }
      return n(e, t), e.prototype.initUI = function() {
        var t = this;
        this.bg = Bs("dlc/ui/bg/bg_packet.png"), this.bg.width = 681, this.bg.height = 538, this.bg.interactive = !0, this.addChild(this.bg), this.closeButton = new Gs, this.closeButton.x = this.bg.width - 20, this.closeButton.y = 0, this.closeButton.on("pointerdown", (function() {
          t.close()
        }), this), this.addSkin(this.closeButton), this.shareButton = new ma("button_share3"), this.shareButton.on("pointerdown", this.onShare, this), this.addChild(this.shareButton.skin), this.shareButton.x = this.bg.width / 2, this.shareButton.y = 450
      }, e.prototype.onShare = function() {
        var t = this;
        (function() {
          return r(this, void 0, void 0, (function() {
            var t, e, n, o;
            return s(this, (function(r) {
              return t = ea(1), e = i(i({}, t.queryData), {
                endTime: Xs.endTimeStamp
              }), n = t.title || "", o = t.imageUrl || "", e.shareType = 7, [2, ta(7, n, o, e)]
            }))
          }))
        })().then((function(e) {
          Hs(e) ? ($a("回到聊天窗口，点击链接即可领取复活币！", 1100), t.close()) : za("分享到群更容易被好友点击哦", 1100)
        }))
      }, e.prototype.onShow = function() {
        t.prototype.onShow.call(this)
      }, e.prototype.onHide = function() {
        t.prototype.onHide.call(this)
      }, e.prototype.onDestroy = function() {
        this.closeButton && (this.closeButton.destroy(), this.closeButton = null), this.shareButton && (this.shareButton.destroy(), this.shareButton = null)
      }, e
    }(ka),
    np = function(t) {
      function e(e, n) {
        var i = t.call(this, e) || this;
        return i.width = 680, i.height = 340, i.mapId = n, i.frequency = 10, i.i = 5, i
      }
      return n(e, t), e.prototype.update = function() {
        ++this.i >= this.frequency && (this.i = 0, this.frequency += 20, Qa && (Qa.postMessage(this.getMessage()), this.updateTexture()))
      }, e.prototype.restore = function() {
        t.prototype.restore.call(this), this.i = this.frequency - 3
      }, e.prototype.getMessage = function(t) {
        return {
          type: "expertNearRank",
          mapId: this.mapId
        }
      }, e
    }(Za),
    ip = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e._destroyBag = [], e
      }
      return n(e, t), Object.defineProperty(e.prototype, "addToDestroy", {
        set: function(t) {
          this._destroyBag.push(t)
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.destroy = function() {
        this._destroyBag.forEach((function(t) {
          return t()
        })), this._destroyBag.length = 0, t.prototype.destroy.call(this, {
          children: !0
        })
      }, e
    }(PIXI.Container),
    op = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.programTip = ks("icon_addprogram.png"), e.programTip.width = 340, e.programTip.height = 71, e.addChild(e.programTip), e
      }
      return n(e, t), e.prototype.startTween = function() {
        if (!this._destroyed) {
          this.stopTween();
          var t = this.defaultX - 20,
            e = this.defaultX,
            n = this.defaultX - 10,
            i = new TWEEN.Tween(this).delay(1500).to({
              x: t
            }, 50).easing(TWEEN.Easing.Quadratic.InOut),
            o = new TWEEN.Tween(this).to({
              x: e
            }, 100).easing(TWEEN.Easing.Linear.None),
            r = new TWEEN.Tween(this).to({
              x: t
            }, 100).easing(TWEEN.Easing.Linear.None),
            s = this,
            a = new TWEEN.Tween(this).to({
              x: n
            }, 50).easing(TWEEN.Easing.Linear.None).onComplete((function() {
              s.startTween()
            }));
          r.chain(a), o.chain(r), i.chain(o), i.start()
        }
      }, e.prototype.stopTween = function() {
        TWEEN.killTweensOf(this)
      }, e.prototype.destroy = function() {
        this.stopTween(), t.prototype.destroy.call(this)
      }, e
    }(ip),
    rp = function(t) {
      function e() {
        var e = t.call(this, !0, 1) || this;
        return e.score = 0, e.createNormalUI(), e
      }
      return n(e, t), e.prototype.createNormalUI = function() {
        var t = this;
        this.normalContainer = new PIXI.Container, this.addChild(this.normalContainer);
        var e = xa.height,
          n = ks("title_gameover");
        n.anchor.set(.5, .5), n.x = 375, n.y = 160, this.normalContainer.addChild(n), this.scoreText = Ps("990", 60, 16777215, "center"), this.scoreText.scale.x = 2, this.scoreText.scale.y = 2, this.scoreText.x = (Dr - 2 * this.scoreText.textWidth) / 2, this.scoreText.y = 220, this.normalContainer.addChild(this.scoreText);
        var i = this.highScoreTag = ks("tag_high_score");
        i.anchor.set(.5, .5), i.x = this.scoreText.x + this.scoreText.width + 20, i.y = 220, this.normalContainer.addChild(i), this.groupShareButton = new ma("button_group_rank"), this.groupShareButton.x = 375, this.groupShareButton.y = this.scoreText.y + 160, this.groupShareButton.on("tap", (function() {
          Zs()
        }), this), this.addSkin(this.groupShareButton);
        var o = Bs("dlc/ui/bg/bg_nearrank.png");
        o.width = 680, o.height = 415, o.anchor.set(.5, 0), o.x = 375, o.y = (e - o.height) / 2, this.normalContainer.addChild(o), this.rankSprite = new PIXI.Sprite(iu), this.rankSprite.x = o.x - o.width / 2, this.rankSprite.y = o.y + 75, this.rankSprite.visible = ru(), this.addChild(this.rankSprite), this.gameIcon = new Ud, this.gameIcon.x = Dr - this.gameIcon.width, this.gameIcon.y = 260, this.addChild(this.gameIcon);
        var r = this.kefuButton = new ma("icon_complain");
        r.x = 15 + r.width / 2, r.y = 340 - r.height / 2, r.interactive = !1, this.addSkin(r), this.settingSkin = new Mp(!1, !0), this.settingSkin.x = (Dr - this.settingSkin.width) / 2, this.settingSkin.y = e - this.settingSkin.height - 200, this.addSkin(this.settingSkin), this.settingSkin.setRestartHandle(this._tapStartGame.bind(this)), this.shareButton = new ma("button_fight_share"), this.shareButton.x = 375, this.shareButton.y = e - 180, this.shareButton.on("pointerdown", this._onShare, this), this.addSkin(this.shareButton), this.maxScoreTxt = Cs("历史最高分:0", "#FFFFFF", !0, "left", 28), this.maxScoreTxt.anchor.set(.5, .5), this.maxScoreTxt.x = 375, this.maxScoreTxt.y = e - 100, this.addChild(this.maxScoreTxt), this.turntableButton = new ma("icon_turntable"), this.turntableButton.x = 110, this.turntableButton.y = e - 180, this.turntableButton.on("pointerdown", (function() {
          _a.showPanel(Kd)
        }), this), this.addSkin(this.turntableButton), this.coinButton = new Yd, this.coinButton.x = xa.width - this.coinButton.width / 2 - 80, this.coinButton.y = e - 180 - this.coinButton.height / 2, this.addSkin(this.coinButton), this.coinButton.on("pointerdown", (function() {
          _a.showPanel(Zd, {
            isRevive: !1
          })
        }), this), this.coinButton.visible = Ts.showCoin, this.packetButton = new ma("button_packet"), this.packetButton.x = this.coinButton.x + this.packetButton.width / 2, this.packetButton.y = e - this.packetButton.height / 2, this.addSkin(this.packetButton), this.packetButton.on("pointerdown", (function() {
          _a.showPanel(ep)
        }), this), this.packetButton.visible = Ts.showCoin, this.programIcon = new op, this.programIcon.x = Dr - this.programIcon.width - 200, this.programIcon.y = 15, this.addChild(this.programIcon), this.programIcon.visible = !$hostDef.censor, this.goldRate = ks("share_gold_rate"), this.goldRate.x = this.shareButton.x - this.goldRate.width / 2, this.goldRate.y = this.shareButton.y - this.shareButton.height / 2 - 10, this.addChild(this.goldRate), this.addToDestroy = yi((function() {
          t.goldRate.visible = !$hostDef.censor && $hostDef.goldRate && ul.goldRate <= 0
        }))
      }, e.prototype.showFeedbackButton = function() {
        var t = this;
        if ("function" == typeof wx.createFeedbackButton) {
          var e = {
            x: 15 * _a.uiScale,
            y: (xa.top + 340 - 150) * _a.uiScale,
            width: 140 * _a.uiScale,
            height: 150 * _a.uiScale
          };
          this.feedbackButton = wx.createFeedbackButton({
            type: "image",
            image: "res/ui/touch_button.png",
            style: {
              left: e.x,
              top: e.y,
              width: e.width,
              height: e.height
            }
          }), this.feedbackButton.show(), this.addToDestroy = wi((function() {
            return _a.openedPopUpPanelCount > 1
          }), (function(e) {
            e ? t.feedbackButton.hide() : t.feedbackButton.show()
          }))
        }
      }, e.prototype.removeFeedBackButton = function() {
        this.feedbackButton && (this.feedbackButton.hide(), this.feedbackButton.destroy(), this.feedbackButton = null)
      }, e.prototype._tapStartGame = function() {
        return r(this, arguments, void 0, (function(t) {
          var e;
          return void 0 === t && (t = !0), s(this, (function(n) {
            switch (n.label) {
              case 0:
                _a.preventTouch(), n.label = 1;
              case 1:
                return n.trys.push([1, 3, 4, 5]), [4, tl({
                  fightType: 1
                })];
              case 2:
                return (e = n.sent()) && (ul.syncData(e.syncData), Tf.startGame(e.fightId), _a.cancelPreventTouch(), Xs.isShareFight = t, this.close()), [3, 5];
              case 3:
                return n.sent(), _a.cancelPreventTouch(), $a("网络连接不稳定，请稍微再试"), [3, 5];
              case 4:
                return _a.cancelPreventTouch(), [7];
              case 5:
                return [2]
            }
          }))
        }))
      }, e.prototype._onShare = function() {
        var t = this;
        Qs(this.score).then((function(e) {
          Hs(e) ? t.addGameRate() : $a("分享失败")
        }))
      }, e.prototype.addGameRate = function() {
        var t = this;
        il({}).then((function(e) {
          return r(t, void 0, void 0, (function() {
            return s(this, (function(t) {
              switch (t.label) {
                case 0:
                  return ul.syncData(e.syncData), [4, this._tapStartGame(!0)];
                case 1:
                  return t.sent(), [2]
              }
            }))
          }))
        })).catch((function(e) {
          return r(t, void 0, void 0, (function() {
            return s(this, (function(t) {
              switch (t.label) {
                case 0:
                  return Xa(e), [4, this._tapStartGame(!0)];
                case 1:
                  return t.sent(), [2]
              }
            }))
          }))
        }))
      }, e.prototype.playScoreAnimation = function() {
        return r(this, void 0, void 0, (function() {
          var t, e = this;
          return s(this, (function(n) {
            return this.scoreText.text = "0", t = new Promise((function(t) {
              return new TWEEN.Tween({
                s: 0
              }).to({
                s: e.score
              }, 1e3).onUpdate((function(t) {
                e.isDisposed || (e.scoreText.text = t.s.toFixed(), e.scoreText.x = (Dr - 2 * e.scoreText.textWidth) / 2)
              })).easing(TWEEN.Easing.Circular.Out).onComplete(t).start()
            })), this.highScoreTag.visible && (this.highScoreTag.alpha = 0, this.highScoreTag.scale.set(2), t = t.then((function() {
              return new Promise((function(t) {
                new TWEEN.Tween({
                  v: 0
                }).to({
                  v: 1
                }, 400).onUpdate((function(t) {
                  e.isDisposed || (e.highScoreTag.scale.set(2 - t.v), e.highScoreTag.alpha = t.v)
                })).easing(TWEEN.Easing.Circular.In).onComplete(t).start()
              }))
            }))), [2, t]
          }))
        }))
      }, e.prototype.onShow = function(t) {
        var e = this;
        this.x = 0, this.y = xa.top, this.gameIcon.showGameIcon(), this.score = Xs.score, this.maxScoreTxt.text = "历史最高分:" + ul.bestScore, ru() && (this.openData = new np(this.rankSprite, Xs.mapId), su(this.openData)), this.highScoreTag.visible = ul.bestScore > Xs.oldBestScore, this.highScoreTag.visible && Pa(pa), this.playScoreAnimation().then((function() {
          if (!e.isDisposed) {
            var t = [];
            Xs.gainSkins.forEach((function(e) {
              return t.push(e)
            })), Ka(t), Xs.gainSkins.clear()
          }
        })), this.showFeedbackButton(), this.programIcon.startTween(), wx.triggerGC()
      }, e.prototype.onHide = function() {
        this.openData && (au(this.openData), this.openData = null), this.removeFeedBackButton(), this.programIcon.stopTween()
      }, e.prototype.onDestroy = function() {
        this.groupShareButton && (this.groupShareButton.destroy(), this.groupShareButton = null), this.shareButton && (this.shareButton.destroy(), this.shareButton = null), this.settingSkin && (this.settingSkin.destroy(), this.settingSkin = null), this.kefuButton && (this.kefuButton.destroy(), this.kefuButton = null), this.coinButton && (this.coinButton.destroy(), this.coinButton = null), this.packetButton && (this.packetButton.destroy(), this.packetButton = null), this.turntableButton && (this.turntableButton.destroy(), this.turntableButton = null)
      }, e
    }(ka),
    sp = rp,
    ap = PIXI.Container,
    up = function(t) {
      function e() {
        var e = t.call(this, !0, 1) || this;
        e.curTab = 0, e.isRotation = !1, e.lastPageX = 0, e.lastRotation = 45, e.isHome = !0, e.modalAlpha = 0;
        var n = ks("gold_bg");
        n.x = 20, n.y = xa.top + 10, e.addChild(n), n.interactive = !0, n.on("pointerdown", (function() {
          $a("可购买金币皮肤哦", 1e3)
        }), e), e.goldText = Cs("0", "#f7f971", !0, "left", 40), e.goldText.anchor = new PIXI.Point(0, .5), e.goldText.x = n.x + 70, e.goldText.y = n.y + n.height / 2, e.addChild(e.goldText), e.heroButton = new kd("tap_hero_up", "tap_hero_down"), e.heroButton.on("pointerdown", e.onTapHero, e), e.addChild(e.heroButton.skin), e.heroButton.x = 198, e.heroButton.y = xa.top + 150, e.petButton = new kd("tab_pet_up", "tab_pet_down"), e.petButton.on("pointerdown", e.onTapPet, e), e.addChild(e.petButton.skin), e.petButton.x = 550, e.petButton.y = xa.top + 150, e.petButton.toggleTexture(!1), e.redIcon = ks("tag_red_point"), e.redIcon.x = e.heroButton.x + e.heroButton.width / 2 - e.redIcon.width - 8, e.redIcon.y = e.heroButton.y - e.heroButton.height / 2 - e.redIcon.height / 2, e.addChild(e.redIcon), e.progressBar = new Fd("skin_progress_bg", "skin_progress_thumb"), e.progressBar.x = (Dr - e.progressBar.width) / 2, e.progressBar.y = e.petButton.y + e.petButton.height / 2 + 20, e.addChild(e.progressBar.skin), e.progressText = Cs("99/100", "#ffffff", !0, "center", 40), e.progressText.anchor = new PIXI.Point(.5, .5), e.progressText.x = 375, e.progressText.y = e.progressBar.y + e.progressBar.height / 2, e.addChild(e.progressText);
        var i = e.skinList = new Cd,
          o = 2 * Pd + Md,
          r = e.scroller = new Gd(xa.width, o);
        r.x = xa.left, r.y = e.progressBar.y + e.progressBar.height + 20, r.setContent(i), e.addChild(r), e.skinList.on("onSelectItem", e.onSelectItem, e);
        var s = new PIXI.Graphics;
        s.beginFill(0, .3), s.drawRoundedRect(0, 0, 695, 157, 8), s.endFill(), s.y = Cr - 300, s.x = (Dr - s.width) / 2, e.addChild(s), e.descText = Es("", "#FFFFFF", 650, 30, !1, "normal"), e.addChild(e.descText), e.descText.x = 80, e.descText.y = s.y + 10, e.progressBar2 = new Fd("skin_progress_bg", "skin_progress_thumb"), e.progressBar2.x = (s.width - e.progressBar2.width) / 2, e.progressBar2.y = e.descText.y + 90, e.addChild(e.progressBar2.skin), e.progressText2 = Cs("99/100", "#ffffff", !0, "center", 40), e.progressText2.anchor = new PIXI.Point(.5, .5), e.progressText2.x = e.progressBar2.x + e.progressBar2.width / 2, e.progressText2.y = e.progressBar2.y + e.progressBar2.height / 2, e.addChild(e.progressText2);
        var a = new ap;
        e.addChild(a);
        var u = 0;
        e.backButton = new ma("button_back"), e.backButton.x = u + e.backButton.width / 2, e.backButton.on("tap", (function() {
          e.close()
        }), e), a.addChild(e.backButton.skin), u = e.backButton.x + e.backButton.width / 2 + 20, e.chooseButton = new ma("button_choose"), e.chooseButton.x = u + e.chooseButton.width / 2, e.chooseButton.on("tap", e.changeSkin, e), u = e.chooseButton.x + e.chooseButton.width / 2 + 20, e.buyButton = new ma("button_buy"), e.buyButton.x = e.chooseButton.x, e.buyButton.on("tap", e.onBuy, e), e.turntableButton = new ma("button_goturntable"), e.turntableButton.x = e.chooseButton.x, e.turntableButton.on("tap", (function() {
          _a.showPanel(Kd)
        }), e), e.shareButton = new ma("button_flaunt"), e.shareButton.x = u + e.shareButton.width / 2, e.shareButton.on("tap", e.shareSkin, e), a.addChild(e.backButton.skin), a.addChild(e.chooseButton.skin), a.addChild(e.buyButton.skin), a.addChild(e.turntableButton.skin), a.addChild(e.shareButton.skin), a.y = Cr - 80, a.x = (Dr - a.width) / 2, e.addToDestroy = yi((function() {
          if (e.selectedListItem) {
            var t = e.selectedListItem.def;
            e.chooseButton.visible = 1 === t.skinType && ul.hasSkin(t.id) && ul.crtSkin !== t.id, e.shareButton.visible = !e.selectedListItem.isLock, e.buyButton.visible = 3 === t.unlockType && !ul.hasSkin(t.id), e.turntableButton.visible = 2 === t.unlockType && !ul.hasSkin(t.id)
          } else e.chooseButton.visible = !1, e.shareButton.visible = !1, e.buyButton.visible = !1, e.turntableButton.visible = !1
        }));
        var c = ul.crtSkin;
        e.addToDestroy = yi((function() {
          c !== ul.crtSkin && e.skinList.refreshData()
        })), e.addToDestroy = yi((function() {
          e.goldText.text = ul.gold + ""
        })), e.addToDestroy = yi((function() {
          if (ul.canBuySkin) e.redIcon.texture = PIXI.Texture.fromFrame("tag_green_point"), e.redIcon.visible = !0;
          else {
            var t = ul.skins.length - ul.usedSkins.length;
            e.redIcon.visible = t > 0, t > 0 && (e.redIcon.texture = PIXI.Texture.fromFrame("tag_red_point"))
          }
        }));
        var h = ul.skins.length - ul.usedSkins.length;
        return e.addToDestroy = yi((function() {
          var t = ul.skins.length - ul.usedSkins.length;
          h !== t && (h = t, e.skinList.refreshData(), e.onSelectItem())
        })), e
      }
      return n(e, t), e.prototype.onSelectItem = function() {
        var t = this.skinList.selectListItem;
        if (t) {
          this.selectedListItem = t;
          var e = t.def;
          if (Id.setSkin(e), this.progressBar2.visible = this.progressText2.visible = 1 === e.skinType, 1 === e.skinType) {
            var n = qr.findTaskDef(e.id);
            if (n) {
              var i = !0;
              if (n.showNeed) {
                var o = qr.getTaskDef(n.showNeed);
                o && !o.rewarded && (i = !1)
              }
              this.descText.style.fill = "#FFFFFF";
              var r = sa[n.taskType];
              105 === n.taskType && n.preTask && (r = "第2次连续{0}天进行游戏"), this.descText.text = i ? r.replace("{0}", n.value + "") : r.replace("{0}", "???"), this.progressBar2.progress = n.progress / n.value, this.progressText2.text = "".concat(Math.min(n.progress, n.value), "/").concat(n.value), this.progressText2.visible = i
            } else this.progressBar2.visible = this.progressText2.visible = !1, ul.hasSkin(e.id) ? (this.descText.style.fill = "#FFFFFF", this.descText.text = e.name) : 3 === e.unlockType ? (this.descText.style.fill = "#FFFF00", this.descText.text = "需要" + e.gold + "金币") : 2 === e.unlockType && (this.descText.style.fill = "#FFFFFF", this.descText.text = "转盘活动中抽取获得")
          } else {
            var s = e.name,
              a = s;
            if (-1 === ul.pets.indexOf(e.id)) a += "\n再往远处走一点就能解救下一个动物了！";
            else {
              var u = Zr.getAnimalDef(e.id);
              a += "\n你已经解救了".concat(s, "，基础得分+").concat(u.bonusScore)
            }
            this.descText.text = a
          }
        }
      }, e.prototype.onBuy = function() {
        var t, e = this.skinList.selectListItem.def;
        ul.gold < e.gold ? $a("您的金币不够，需要".concat(e.gold, "金币")) : (t = {
          skin: e.id
        }, ku(2050, t)).then((function(t) {
          ul.syncData(t.syncData), t.gift && Ha(t.gift)
        }))
      }, e.prototype.changeSkin = function() {
        ul.changeSkin(this.skinList.selectListItem.def.id), this.skinList.selectListItem.updateData(this.skinList.selectListItem.def)
      }, e.prototype.shareSkin = function() {
        var t = this.skinList.selectListItem.def;
        1 === t.skinType ? Ys(t.id) : Js(t.id)
      }, e.prototype.onTapHero = function() {
        this.heroButton.toggleTexture(!0), this.petButton.toggleTexture(!1), this.changeTab(0)
      }, e.prototype.onTapPet = function() {
        this.heroButton.toggleTexture(!1), this.petButton.toggleTexture(!0), this.changeTab(1)
      }, e.prototype.changeTab = function(t) {
        if (this.curTab !== t) {
          this.curTab = t;
          var e = 0 === this.curTab ? qr.heroList.concat() : qr.petList;
          0 === this.curTab && e.sort((function(t, e) {
            var n = !ul.hasSkin(t.id) && 3 === t.unlockType && t.gold <= ul.gold;
            return n === (!ul.hasSkin(e.id) && 3 === e.unlockType && e.gold <= ul.gold) ? t.sort - e.sort : n ? -1 : 1
          }));
          var n = 0 === this.curTab ? ul.skins.length : ul.pets.length;
          this.skinList.setSkinData(e), this.scroller.setContent(this.skinList), this.progressText.text = "".concat(Math.min(n, e.length), "/").concat(e.length), this.progressBar.progress = n / e.length, 0 === this.curTab ? (this.skinList.setSelectedSkin(ul.crtSkin), ul.canBuySkin ? this.scroller.touchScroll.throwToTop() : this.skinList.selectListItem && (this.scroller.scrollH = this.skinList.selectListItem.x, this.scroller.touchScroll.checkScroll())) : (this.scroller.touchScroll.throwToTop(), this.skinList.selectIndex = 0)
        }
      }, e.prototype._addTouchRotation = function() {
        var t = this;
        this.isRotation = !1, this.lastRotation = Id.getRotation(), this.modalShape.on("pointerdown", (function(e) {
          t.isRotation = !0, Id.playAction("jump"), t.lastPageX = e.data.global.x
        })), this.modalShape.on("pointerup", (function() {
          t.isRotation = !1, Id.playAction("wait")
        })), this.modalShape.on("pointermove", (function(e) {
          if (t.isRotation) {
            var n = .05 * (e.data.global.x - t.lastPageX);
            t.lastRotation += 180 * n / Math.PI, Id.setRotation(t.lastRotation), t.lastPageX = e.data.global.x
          }
        }))
      }, e.prototype.onShow = function(t) {
        this.isHome = t, this.x = this.y = 0, Id.show(), this._addTouchRotation(), this.curTab = -1, this.changeTab(0)
      }, e.prototype.onHide = function() {
        this.isRotation = !1, this.modalShape.removeAllListeners(), Id.hide(), Xs.isGameOver && !this.isHome ? Xs.mapId > 0 ? _a.showPanel(sp) : _a.showPanel(Np) : _a.showPanel(tp)
      }, e.prototype.onDestroy = function() {
        this.backButton && (this.backButton.destroy(), this.backButton = null), this.chooseButton && (this.chooseButton.destroy(), this.chooseButton = null), this.buyButton && (this.buyButton.destroy(), this.buyButton = null), this.turntableButton && (this.turntableButton.destroy(), this.turntableButton = null), this.shareButton && (this.shareButton.destroy(), this.shareButton = null), this.heroButton && (this.heroButton.destroy(), this.heroButton = null), this.petButton && (this.petButton.destroy(), this.petButton = null), this.progressBar && (this.progressBar.destroy(), this.progressBar = null), this.progressBar2 && (this.progressBar2.destroy(), this.progressBar2 = null)
      }, o([fn], e.prototype, "selectedListItem", void 0), e
    }(ka),
    cp = up,
    hp = PIXI.Container,
    lp = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.canTapMaskClose = !0, e.container = new hp;
        var n = Bs("dlc/ui/bg/bg_expert_desc.png");
        return n.width = 681, n.height = 524, e.container.addChild(n), e.closeButton = new Gs, e.closeButton.x = n.width - 10, e.closeButton.y = 0, e.closeButton.on("pointerdown", (function() {
          e.close()
        }), e), e.container.addChild(e.closeButton.skin), e.container.x = -n.width / 2, e.container.y = -n.height / 2, e.addChild(e.container), e
      }
      return n(e, t), e.prototype.onShow = function() {
        this.x = 375, this.y = xa.top + Cr / 2, this.scale.set(.5, .5), this.tween = new TWEEN.Tween(this.scale).to({
          x: 1,
          y: 1
        }, 500).easing(TWEEN.Easing.Elastic.Out).start()
      }, e.prototype.onHide = function() {
        this.tween && (TWEEN.remove(this.tween), this.tween = null)
      }, e.prototype.onDestroy = function() {
        this.closeButton && (this.closeButton.destroy(), this.closeButton = null)
      }, e
    }(ka),
    dp = [1, 1.33, 1.66, 2],
    pp = .02,
    fp = .998,
    vp = Math.log(fp);
  var gp = function() {
      function t(t) {
        this.target = t, this.$scrollFactor = 1, this.previousTime = 0, this.velocity = 0, this.previousVelocity = [], this.currentPosition = 0, this.previousPosition = 0, this.lastPoint = 0, this.started = !0
      }
      return t.prototype.start = function(t) {
        this.started = !0, this.velocity = 0, this.previousVelocity.length = 0, this.previousPosition = this.currentPosition = t, this.lastPoint = t, this.animation = void 0
      }, t.prototype.update = function(t) {
        this.currentPosition = t;
        var e = this.lastPoint - t,
          n = e + this.target.scrollV;
        this.lastPoint = t, (n < 0 || n > this.target.maxScrollV) && (n -= .5 * e), this.target.scrollV = n
      }, t.prototype.finish = function() {
        var t = this.target,
          e = t.scrollV,
          n = t.maxScrollV;
        this.started = !1;
        for (var i = 2.33 * this.velocity, o = this.previousVelocity, r = o.length, s = 2.33, a = 0; a < r; a++) {
          var u = dp[a];
          i += o[0] * u, s += u
        }
        var c = i / s,
          h = Math.abs(c);
        if (h > pp) {
          var l = 0,
            d = e + (c - pp) / vp * 2 * this.$scrollFactor;
          if (d < 0 || d > n)
            for (d = e; Math.abs(c) > pp;) c *= (d -= c) < 0 || d > n ? .9480999999999999 : fp, l++;
          else l = Math.log(pp / h) / vp;
          this.throwTo(d, l)
        } else this.checkScroll()
      }, t.prototype.checkScroll = function() {
        var t = this.target,
          e = t.scrollV,
          n = t.maxScrollV;
        e < 0 ? this.throwTo(0, 300) : e > n && this.throwTo(n, 300)
      }, t.prototype.onTick = function(t) {
        var e = t - this.previousTime;
        if (this.previousTime = t, this.started) {
          var n = this.previousVelocity;
          n.length >= 4 && n.shift(), 0 === e && (e = 16.6), this.velocity = (this.currentPosition - this.previousPosition) / e, n.push(this.velocity), this.previousPosition = this.currentPosition
        }
        this.animation && (this.animation.update(e), this.target.scrollV = this.animation.value, this.animation.isEnd && (this.animation = void 0, this.checkScroll()))
      }, Object.defineProperty(t.prototype, "isThrowing", {
        get: function() {
          return this.animation && !this.animation.isEnd
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.throwToTop = function() {
        this.throwTo(0, 300)
      }, t.prototype.throwTo = function(t, e) {
        var n = this.target.scrollV;
        n !== t && (this.animation = new yp(n, t, e))
      }, t
    }(),
    yp = function() {
      function t(t, e, n) {
        this.from = t, this.to = e, this.duration = n, this.pass = 0, this.value = 0, this.isEnd = !1, this.distance = e - t, this.value = t
      }
      return t.prototype.update = function(t) {
        var e, n;
        this.pass += t, this.pass > this.duration ? (this.value = this.to, this.isEnd = !0) : this.value = (e = this.pass / this.duration, ((n = e - 1) * n * n + 1) * this.distance + this.from)
      }, t
    }(),
    mp = function(t) {
      function e(e, n) {
        var i = t.call(this) || this;
        i.visibleHeight = n, i.maxScrollV = Number.MAX_SAFE_INTEGER, i.touchScroll = new gp(i), i.startY = 0;
        var o = new PIXI.Graphics;
        o.beginFill(0), o.drawRect(0, 0, e, i.visibleHeight), o.endFill(), i.addChild(o), i.mask = o, i.interactive = !0, i.on(Ms, i._onTouchStart, i), i.on(Ns, i._onTouchMove, i), i.on(Os, i._onTouchEnd, i), i.on(Rs, i._onTouchEnd, i), i.on(Ls, i._onTouchEnd, i);
        var r = function(t) {
          i._destroyed || (i.touchScroll.onTick(Date.now()), requestAnimationFrame(r))
        };
        return requestAnimationFrame(r), i
      }
      return n(e, t), e.prototype.setContent = function(t) {
        this.content = t, this.addChild(t), this.updateMaxScrollV()
      }, e.prototype.updateMaxScrollV = function() {
        this.maxScrollV = Math.max(0, this.content.contentHeight - this.visibleHeight), this.touchScroll.checkScroll()
      }, e.prototype._onTouchStart = function(t) {
        this.startY = t.data.global.y, this.touchScroll.start(t.data.global.y)
      }, e.prototype._onTouchMove = function(t) {
        var e = t.data.global.y;
        this.touchScroll.update(e), this.content && this.content.interactiveChildren && Math.abs(e - this.startY) > 5 && (this.content.interactiveChildren = !1)
      }, e.prototype._onTouchEnd = function(t) {
        this.touchScroll.finish(), this.content && (this.content.interactiveChildren = !0)
      }, Object.defineProperty(e.prototype, "scrollV", {
        get: function() {
          return this.content ? this.content.scrollV : 0
        },
        set: function(t) {
          this.content && (this.content.scrollV = t)
        },
        enumerable: !1,
        configurable: !0
      }), e
    }(PIXI.Container),
    bp = PIXI.Container,
    wp = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.container = new bp;
        var n = e.bg = Bs("dlc/ui/bg/bg_alert.png");
        n.width = 681, n.height = 415, e.container.addChild(n), e.descText = Cs("", "#000000", !0, "left", 40), e.descText.x = 20, e.descText.y = 160, e.container.addChild(e.descText);
        var i = new PIXI.Container;
        return e.goButton = new ma("button_go"), e.goButton.on("pointerdown", (function() {
          e.data.onSuccess && e.data.onSuccess(), e.close()
        }), e), e.cancelButton = new ma("button_cancel"), e.cancelButton.on("pointerdown", (function() {
          e.close()
        }), e), i.addChild(e.goButton.skin), i.addChild(e.cancelButton.skin), e.cancelButton.x = e.cancelButton.width / 2, e.goButton.x = e.cancelButton.x + e.cancelButton.width + 20, i.x = (n.width - i.width) / 2, i.y = n.height - i.height / 2 - 50, e.container.addChild(i), e.container.x = -e.bg.width / 2, e.container.y = -e.bg.height / 2, e.addChild(e.container), e
      }
      return n(e, t), e.prototype.onShow = function(t) {
        this.x = 375, this.y = xa.top + Cr / 2, this.data = t, this.descText.text = "是否消耗一张门票,前往".concat(t.def.name, "?"), this.descText.x = (this.bg.width - this.descText.width) / 2, this.scale.set(.5, .5), this.tween = new TWEEN.Tween(this.scale).to({
          x: 1,
          y: 1
        }, 500).easing(TWEEN.Easing.Elastic.Out).start()
      }, e.prototype.onHide = function() {
        this.tween && (TWEEN.remove(this.tween), this.tween = null)
      }, e.prototype.onDestroy = function() {
        this.data = null
      }, e
    }(ka),
    xp = function(t) {
      function e() {
        var e = t.call(this) || this,
          n = e.bg = Bs("dlc/ui/expert/expert_list_bg1.png");
        n.width = 632, n.height = 186, e.addChild(n);
        var i = ks("icon_go");
        return i.x = 210, i.y = 18, e.addChild(i), e.nameText = Cs("王者无敌", "#FFFF00", !0, "left", 40), e.nameText.x = 20, e.nameText.y = 20, e.addChild(e.nameText), e.finishSprite = ks("icon_finished"), e.finishSprite.x = n.width - e.finishSprite.width - 10, e.finishSprite.y = 5, e.addChild(e.finishSprite), e.progressText = Cs("当前进度：100%", "#FFFFFF", !0, "left", 36), e.progressText.x = n.width - e.progressText.width - 20, e.progressText.y = 22, e.addChild(e.progressText), e.interactive = !0, e.on("tap", e.onTap, e), e
      }
      return n(e, t), e.prototype.onTap = function(t) {
        ul.ticket <= 0 ? $a("您已经没有门票了") : _a.showPanel(wp, {
          def: this.def,
          onSuccess: this.onConfirm.bind(this)
        })
      }, e.prototype.onConfirm = function() {
        return r(this, void 0, void 0, (function() {
          var t, e, n;
          return s(this, (function(i) {
            switch (i.label) {
              case 0:
                _a.preventTouch(), this.interactive = !1, i.label = 1;
              case 1:
                return i.trys.push([1, 3, 4, 5]), [4, tl({
                  fightType: 2,
                  mapId: this.def.id
                })];
              case 2:
                return (t = i.sent()) && (ul.syncData(t.syncData), this.interactive = !0, (e = _a.getPanel(Pp)) && e.close(), _a.cancelPreventTouch(), Tf.startGame(t.fightId, this.def.id)), [3, 5];
              case 3:
                return n = i.sent(), _a.cancelPreventTouch(), this.interactive = !0, Xa(n), [3, 5];
              case 4:
                return _a.cancelPreventTouch(), [7];
              case 5:
                return [2]
            }
          }))
        }))
      }, e.prototype.setMap = function(t) {
        this.def = t;
        var e = 1 + (t.id - 1) % 6;
        this.bg.texture = PIXI.Texture.fromImage("dlc/ui/expert/expert_list_bg".concat(e, ".png")), this.nameText.text = this.def.name;
        var n = ul.getExpertInfo(this.def.id);
        if (0 === this.def.finishFloor) this.finishSprite.visible = !1, this.progressText.visible = !1;
        else {
          var i = n ? n.level / this.def.finishFloor : 0;
          this.finishSprite.visible = i >= 1, i >= 1 ? this.progressText.visible = !1 : (this.progressText.visible = !0, this.progressText.text = "当前进度：".concat(Math.floor(100 * Math.min(1, i)), "%"), this.progressText.x = this.bg.width - this.progressText.width - 20)
        }
      }, e
    }(PIXI.Container),
    Tp = xp,
    _p = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.items = [], e.name = "ExpertList", e.y = 0, e
      }
      return n(e, t), e.prototype.setData = function(t) {
        for (var e = this, n = this.items, i = 0, o = 0; o < t.length; o++) {
          var r = t[o],
            s = n[i];
          s || ((s = new Tp).y = i * (Sp + Ip), s.x = 0, this.addChild(s), n[i] = s), s.setMap(r), ++i
        }
        i < n.length && n.splice(i).forEach((function(t) {
          e.removeChild(t), t.destroy({
            children: !0
          })
        }))
      }, Object.defineProperty(e.prototype, "scrollV", {
        get: function() {
          return 0 - this.y
        },
        set: function(t) {
          this.y = 0 - t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "contentHeight", {
        get: function() {
          return this.height + 0 + 0
        },
        enumerable: !1,
        configurable: !0
      }), e
    }(PIXI.Container),
    kp = _p,
    Sp = 186,
    Ip = 20,
    Bp = function(t) {
      function e(e, n, i, o) {
        var r = t.call(this, e) || this;
        return r.width = 632, r.height = 850, r._dirty = !0, r.offset = 0, r.screenX = n.x, r.screenY = n.y, r.maxMapId = i, r.height = o, r.frequency = Ao ? 10 : 5, r.i = 0, r
      }
      return n(e, t), e.prototype.update = function() {
        this._dirty ? (this._dirty = !1, Qa && (Qa.postMessage(this.getMessage()), this.updateTexture())) : t.prototype.update.call(this)
      }, e.prototype.setOffset = function(t) {
        this.offset = t, this._dirty = !0
      }, e.prototype.getMessage = function() {
        return {
          type: "expertRank",
          screenX: this.screenX,
          screenY: this.screenY,
          offset: this.offset,
          maxMapId: this.maxMapId
        }
      }, e
    }(Za),
    Dp = Bp,
    Cp = PIXI.Sprite,
    Ep = function(t) {
      function e() {
        var e = t.call(this, !0, 1) || this;
        e._mapIds = [], e.maxMapId = 0, e._listHeight = 0, e.isTouch = !1, e.lastX = 0, e.lastY = 0, e.isRankVisible = !0;
        var n = Bs("dlc/ui/bg/bg_expert.jpg");
        n.width = Dr, n.height = Cr, e.addChild(n);
        var i = ks("title_expert");
        i.x = (Dr - i.width) / 2, i.y = xa.top + 15, e.addChild(i), e.videoButton = new ma("button_ticket_video"), e.addSkin(e.videoButton), e.videoButton.x = 30 + e.videoButton.width / 2, e.videoButton.y = xa.top + 150 + e.videoButton.height / 2, e.videoButton.on("pointerdown", e._watchVideo, e);
        var o = ks("bg_ticket");
        o.x = Dr - o.width - 100, o.y = xa.top + 150 + o.height / 2, e.addChild(o);
        var r = ks("ticket");
        r.x = o.x - 50, r.y = o.y + (o.height - r.height) / 2, e.addChild(r), e.ticketText = Ps("0", 40, 16777215, "left"), e.ticketText.y = o.y + (o.height - e.ticketText.height) / 2, e.ticketText.x = r.x + r.width + 30, e.addChild(e.ticketText), e.homeButton = new ma("button_home"), e.addSkin(e.homeButton), e.homeButton.x = e.homeButton.width / 2 + 30, e.homeButton.y = Cr - 80, e.homeButton.on("pointerdown", (function() {
          e.close(), _a.showPanel(tp)
        }), e), e.descButton = new ma("button_expert_desc"), e.addSkin(e.descButton), e.descButton.x = Dr - e.descButton.width / 2 - 30, e.descButton.y = Cr - 80, e.descButton.on("pointerdown", (function() {
          _a.showPanel(lp)
        }), e);
        var s = e._listHeight = e.homeButton.y - e.homeButton.height / 2 - e.videoButton.y - e.videoButton.height / 2 - 50;
        if (jo()) {
          e._mapIds = [];
          for (var a = 0; a < ts.expertList.length; a++) e._mapIds.push(ts.expertList[a].id)
        } else {
          e._mapIds = $hostDef.expertMaps.concat();
          var u = $hostDef.expertOpenList;
          for (a = 0; a < u.length; a++) {
            var c = u[a];
            new Date(c.openTime).getTime() <= xs.curTime && e._mapIds.indexOf(c.mapId) < 0 && e._mapIds.push(c.mapId)
          }
        }
        e._mapIds.sort((function(t, e) {
          return e - t
        })), e.maxMapId = e._mapIds[0];
        var h = [];
        for (a = 0; a < e._mapIds.length; a++) h.push(ts.getExpertDef(e._mapIds[a]));
        e.scroller = new mp(632, s), e.scroller.x = 59, e.scroller.y = e.videoButton.y + e.videoButton.height / 2 + 20, e.expertList = new kp, e.expertList.setData(h), e.scroller.setContent(e.expertList), e.addChild(e.scroller), e.scroller.on("pointerdown", e._onTouchStart, e), e.scroller.on("pointerup", e._onTouchEnd, e), e.scroller.on("pointermove", e._onTouchMove, e), e.scroller.on("pointerupoutside", e._onTouchEnd, e), e.scroller.on("pointercancel", e._onTouchEnd, e), e._rankSprite = new Cp(iu), e._rankSprite.x = e.scroller.x, e._rankSprite.y = e.scroller.y, e._rankSprite.visible = ru(), e.addChild(e._rankSprite), e.addToDestroy = yi((function() {
          e.ticketText.text = ul.ticket + ""
        })), e.lastScroll = e.scroller.scrollV;
        var l = function(t) {
          e._destroyed || (e.isTouch || (e.lastScroll !== e.scroller.scrollV ? (e.lastScroll = e.scroller.scrollV, e.isRankVisible = !1, e._rankSprite.visible = !1) : e.activeOpenData()), requestAnimationFrame(l))
        };
        return requestAnimationFrame(l), e
      }
      return n(e, t), e.prototype._onTouchStart = function(t) {
        this.isTouch = !0, this.lastX = t.data.global.x, this.lastY = t.data.global.y
      }, e.prototype._onTouchMove = function(t) {
        if (0 !== this.lastX && 0 !== this.lastY) {
          var e = t.data.global.x - this.lastX,
            n = t.data.global.y - this.lastY;
          e * e + n * n > 100 && (this.lastScroll = -1, this.lastOffset = -1, this._rankSprite.visible = !1, this.isRankVisible = !1)
        }
      }, e.prototype._onTouchEnd = function() {
        this.lastX = 0, this.lastY = 0, this.isTouch = !1
      }, e.prototype.activeOpenData = function() {
        var t = this;
        this.isRankVisible && this.lastOffset === this.lastScroll || (this.isRankVisible = !0, this.lastOffset = this.lastScroll, this._openData && (this._openData.setOffset(this.lastOffset), this.clearTimeOut(), this.timeOutId = setTimeout((function() {
          t._rankSprite.visible = !0
        }), 100)))
      }, e.prototype.clearTimeOut = function() {
        this.timeOutId && (clearTimeout(this.timeOutId), this.timeOutId = void 0)
      }, e.prototype._watchVideo = function() {
        return r(this, void 0, void 0, (function() {
          var t, e;
          return s(this, (function(n) {
            switch (n.label) {
              case 0:
                if (ul.ticket >= 6) return $a("当前门票次数已达上限"), [2];
                if (ul.ticketVideoAd >= 2) return $a("今天看视频得门票次数已用完"), [2];
                if (jo()) return [3, 4];
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, Xd()];
              case 2:
                return (t = n.sent()) === he.cancel ? [2, $a("需要完整看完视频才能复活哦", 1100)] : t === he.fail ? [2, $a("抱歉,当前没有视频可播放", 1100)] : [3, 4];
              case 3:
                return n.sent(), $a("抱歉,当前没有视频可播放", 1100), [2];
              case 4:
                return n.trys.push([4, 6, , 7]), [4, (i = {}, ku(1793, i))];
              case 5:
                return (e = n.sent()) && ul.syncData(e.syncData), [3, 7];
              case 6:
                return $a(n.sent()), [3, 7];
              case 7:
                return [2]
            }
            var i
          }))
        }))
      }, e.prototype.onShow = function() {
        this.x = 0, this.y = 0, ru() && (this._openData && au(this._openData), this._openData = new Dp(this._rankSprite, this._rankSprite.toGlobal({
          x: 0,
          y: 0
        }), this.maxMapId, this._listHeight), su(this._openData), this.lastScroll = this.scroller.scrollV, this.activeOpenData())
      }, e.prototype.onHide = function() {
        this.clearTimeOut(), this._openData && (au(this._openData), this._openData = null)
      }, e.prototype.onDestroy = function() {
        this.homeButton && (this.homeButton.destroy(), this.homeButton = null), this.descButton && (this.descButton.destroy(), this.descButton = null), this.videoButton && (this.videoButton.destroy(), this.videoButton = null)
      }, e
    }(ka),
    Pp = Ep,
    Mp = function(t) {
      function e(e, n, i) {
        void 0 === n && (n = !1), void 0 === i && (i = -5);
        var o = t.call(this) || this;
        o.isStart = !1, o.isExpert = !1, o.isStart = e, o.isExpert = n, o.settingContainer = new PIXI.Container;
        var r = [];
        e && (o.feedbackButton = new ma("icon_complain", !0), o.feedbackButton.interactive = !1, o.addSkinTo(o.feedbackButton, o.settingContainer), r.push(o.feedbackButton)), e || n || (o.regameButton = new ma("icon_regame", !0), o.regameButton.on("tap", o._tapReGame, o), o.addSkinTo(o.regameButton, o.settingContainer), r.push(o.regameButton)), n && (o.backButton = new ma("button_back2", !0), o.backButton.on("tap", o._tapBack, o), o.addSkinTo(o.backButton, o.settingContainer), r.push(o.backButton)), o.settingButton = new ma("icon_setting", !0), o.settingButton.on("tap", o._tapSetting, o), o.addSkinTo(o.settingButton, o.settingContainer), r.push(o.settingButton), o.shareButton = new ma("icon_share", !0), o.shareButton.on("tap", o._tapShare, o), o.addSkinTo(o.shareButton, o.settingContainer), r.push(o.shareButton), o.skinButton = new _d, o.skinButton.on("tap", o._tapSkin, o), o.addSkinTo(o.skinButton, o.settingContainer), r.push(o.skinButton), n || (o.expertButton = new ma("button_expert", !0), o.expertButton.on("tap", o._tapExpert, o), o.addSkinTo(o.expertButton, o.settingContainer), r.push(o.expertButton));
        for (var s = r[0] ? r[0].width / 2 : 0, a = 0; a < r.length; a++) r[a].x = s, 0 !== a && (r[a].x += i), s = r[a].x + r[a].width;
        return e && (o.goldRate = ks("share_gold_rate"), o.goldRate.x = o.shareButton.x - o.goldRate.width / 2, o.goldRate.y = o.shareButton.y - o.shareButton.height / 2 - 10, o.settingContainer.addChild(o.goldRate), o.addToDestroy = yi((function() {
          o.goldRate.visible = !$hostDef.censor && $hostDef.goldRate && ul.goldRate <= 0
        }))), o
      }
      return n(e, t), Object.defineProperty(e.prototype, "skinGlobalX", {
        get: function() {
          return this.x + this.skinButton.x + 20
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "skinGlobalY", {
        get: function() {
          return xa.top + this.y + this.skinButton.y
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.setRestartHandle = function(t) {
        this.restartHandle = t
      }, Object.defineProperty(e.prototype, "skin", {
        get: function() {
          return this.settingContainer
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype._tapShare = function() {
        var t = this;
        Zs().then((function(e) {
          Hs(e) ? t.addGameRate() : $a("分享失败")
        }))
      }, e.prototype.addGameRate = function() {
        this.isStart && il({}).then((function(t) {
          ul.syncData(t.syncData)
        })).catch((function(t) {
          Xa(t)
        }))
      }, e.prototype._tapMp = function() {
        Vd("wx46d38f50eae00dca", "pages/index")
      }, e.prototype._tapBack = function() {
        _a.showPanel(Pp)
      }, e.prototype._tapExpert = function() {
        ul.bestScore < 300 ? $a("普通模式达到300分以上可以挑战困难模式！") : _a.showPanel(Pp)
      }, e.prototype._tapReGame = function() {
        this.restartHandle && this.restartHandle()
      }, e.prototype._tapSetting = function() {
        _a.showPanel(Sd)
      }, e.prototype._tapSkin = function() {
        _a.showPanel(cp, this.isStart)
      }, e.prototype.destroy = function() {
        this.restartHandle = null, this.regameButton && (this.regameButton.destroy(), this.regameButton = null), this.backButton && (this.backButton.destroy(), this.backButton = null), this.expertButton && (this.expertButton.destroy(), this.expertButton = null), this.feedbackButton && (this.feedbackButton.destroy(), this.feedbackButton = null), this.settingButton && (this.settingButton.destroy(), this.settingButton = null), this.skinButton && (this.skinButton.destroy(), this.skinButton = null), this.shareButton && (this.shareButton.destroy(), this.shareButton = null), this.gameButton && (this.gameButton.destroy(), this.gameButton = null), t.prototype.destroy.call(this)
      }, e
    }(js),
    Op = function(t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return n.width = 680, n.height = 340, n.frequency = 10, n.i = 0, n
      }
      return n(e, t), e.prototype.update = function() {
        ++this.i >= this.frequency && (this.i = 0, this.frequency += 30, Qa && (Qa.postMessage(this.getMessage()), this.updateTexture()))
      }, e.prototype.restore = function() {
        t.prototype.restore.call(this), this.i = this.frequency - 3
      }, e.prototype.getMessage = function(t) {
        return {
          type: "nearRank",
          refresh: !t
        }
      }, e
    }(Za),
    Lp = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.canTapMaskClose = !0;
        var n = Bs("dlc/ui/bg/bg_suggest.png");
        n.width = 681, n.height = 415, e.addChild(n);
        var i = e.goBtn = new ma("button_tofriend");
        return i.x = n.width / 2, i.y = n.y + n.height - 100, e.addSkin(i), i.on("pointerdown", (function() {
          Zs().then((function() {
            e.close()
          }))
        }), e), e.closeButton = new Gs, e.closeButton.x = n.width - 20, e.closeButton.y = 0, e.closeButton.on("pointerdown", (function() {
          e.close()
        }), e), e.addChild(e.closeButton.skin), e
      }
      return n(e, t), e.prototype.onShow = function() {
        t.prototype.onShow.call(this), Xs.isRecommend = !0
      }, e.prototype.onDestroy = function() {
        this.goBtn && (this.goBtn.destroy(), this.goBtn = void 0), this.closeButton && (this.closeButton.destroy(), this.closeButton = void 0)
      }, e
    }(ka),
    Ap = [3, 10, 20, 50],
    Rp = function(t) {
      function e() {
        var e = t.call(this, !0, 1) || this;
        return e.score = 999, e.createNormalUI(), e
      }
      return n(e, t), e.prototype.createNormalUI = function() {
        var t = this;
        this.normalContainer = new PIXI.Container, this.addChild(this.normalContainer);
        var e = xa.height,
          n = ks("title_gameover");
        n.anchor.set(.5, .5), n.x = 375, n.y = 160, this.normalContainer.addChild(n), this.scoreText = Ps("990", 60, 16777215, "center"), this.scoreText.scale.x = 2, this.scoreText.scale.y = 2, this.scoreText.x = (Dr - 2 * this.scoreText.textWidth) / 2, this.scoreText.y = 220, this.normalContainer.addChild(this.scoreText);
        var i = this.highScoreTag = ks("tag_high_score");
        i.anchor.set(.5, .5), i.x = this.scoreText.x + this.scoreText.width + 20, i.y = 220, this.normalContainer.addChild(i), this.groupShareButton = new ma("button_group_rank"), this.groupShareButton.x = 375, this.groupShareButton.y = this.scoreText.y + 160, this.groupShareButton.on("tap", (function() {
          Zs()
        }), this), this.addSkin(this.groupShareButton);
        var o = Bs("dlc/ui/bg/bg_nearrank.png");
        o.width = 680, o.height = 415, o.anchor.set(.5, 0), o.x = 375, o.y = (e - o.height) / 2, this.normalContainer.addChild(o), this.rankButton = new ma("button_rankall"), this.rankButton.x = o.x + o.width / 2 - this.rankButton.width / 2 - 20, this.rankButton.y = o.y + 40, this.rankButton.on("pointerdown", (function() {
          _a.showPanel(vu)
        }), this), this.normalContainer.addChild(this.rankButton.skin), this.rankSprite = new PIXI.Sprite(iu), this.rankSprite.x = o.x - o.width / 2, this.rankSprite.y = o.y + 75, this.rankSprite.visible = ru(), this.addChild(this.rankSprite), this.gameIcon = new Ud, this.gameIcon.x = Dr - this.gameIcon.width, this.gameIcon.y = 260, this.addChild(this.gameIcon);
        var r = this.kefuButton = new ma("icon_complain");
        r.x = 15 + r.width / 2, r.y = 340 - r.height / 2, r.interactive = !1, this.addSkin(r), this.settingSkin = new Mp(!1, !1, -18), this.settingSkin.x = (Dr - this.settingSkin.width) / 2, this.settingSkin.y = e - this.settingSkin.height - 200, this.addSkin(this.settingSkin), this.settingSkin.setRestartHandle(this._tapStartGame.bind(this)), this.shareButton = new ma("button_fight_share"), this.shareButton.x = 375, this.shareButton.y = e - 180, this.shareButton.on("pointerdown", this._onShare, this), this.addSkin(this.shareButton), this.maxScoreTxt = Cs("历史最高分:0", "#FFFFFF", !0, "left", 28), this.maxScoreTxt.anchor.set(.5, .5), this.maxScoreTxt.x = 375, this.maxScoreTxt.y = e - 100, this.addChild(this.maxScoreTxt), this.turntableButton = new ma("icon_turntable"), this.turntableButton.x = 110, this.turntableButton.y = e - 180, this.turntableButton.on("pointerdown", (function() {
          _a.showPanel(Kd)
        }), this), this.addSkin(this.turntableButton), this.coinButton = new Yd, this.coinButton.x = xa.width - this.coinButton.width / 2 - 80, this.coinButton.y = e - 180 - this.coinButton.height / 2, this.addSkin(this.coinButton), this.coinButton.on("pointerdown", (function() {
          _a.showPanel(Zd, {
            isRevive: !1
          })
        }), this), this.coinButton.visible = Ts.showCoin, this.packetButton = new ma("button_packet"), this.packetButton.x = this.coinButton.x + this.packetButton.width / 2, this.packetButton.y = e - this.packetButton.height / 2, this.addSkin(this.packetButton), this.packetButton.on("pointerdown", (function() {
          _a.showPanel(ep)
        }), this), this.packetButton.visible = Ts.showPacket, this.programIcon = new op, this.programIcon.x = Dr - this.programIcon.width - 200, this.programIcon.y = 15, this.addChild(this.programIcon), this.programIcon.visible = !$hostDef.censor, this.goldRate = ks("share_gold_rate"), this.goldRate.x = this.shareButton.x - this.goldRate.width / 2, this.goldRate.y = this.shareButton.y - this.shareButton.height / 2 - 10, this.addChild(this.goldRate), this.addToDestroy = yi((function() {
          t.goldRate.visible = !$hostDef.censor && $hostDef.goldRate && ul.goldRate <= 0
        }))
      }, e.prototype.showFeedbackButton = function() {
        var t = this;
        if ("function" == typeof wx.createFeedbackButton) {
          var e = {
            x: 15 * _a.uiScale,
            y: (xa.top + 340 - 150) * _a.uiScale,
            width: 140 * _a.uiScale,
            height: 150 * _a.uiScale
          };
          this.feedbackButton = wx.createFeedbackButton({
            type: "image",
            image: "res/ui/touch_button.png",
            style: {
              left: e.x,
              top: e.y,
              width: e.width,
              height: e.height
            }
          }), this.feedbackButton.show(), this.addToDestroy = wi((function() {
            return _a.openedPopUpPanelCount > 1
          }), (function(e) {
            e ? t.feedbackButton.hide() : t.feedbackButton.show()
          }))
        }
      }, e.prototype.removeFeedBackButton = function() {
        this.feedbackButton && (this.feedbackButton.hide(), this.feedbackButton.destroy(), this.feedbackButton = null)
      }, e.prototype._tapStartGame = function() {
        return r(this, arguments, void 0, (function(t) {
          var e;
          return void 0 === t && (t = !0), s(this, (function(n) {
            switch (n.label) {
              case 0:
                _a.preventTouch(), n.label = 1;
              case 1:
                return n.trys.push([1, 3, 4, 5]), [4, tl({
                  fightType: 1
                })];
              case 2:
                return (e = n.sent()) && (ul.syncData(e.syncData), Tf.startGame(e.fightId), _a.cancelPreventTouch(), Xs.isShareFight = t, this.close()), [3, 5];
              case 3:
                return n.sent(), _a.cancelPreventTouch(), $a("网络连接不稳定，请稍微再试"), [3, 5];
              case 4:
                return _a.cancelPreventTouch(), [7];
              case 5:
                return [2]
            }
          }))
        }))
      }, e.prototype._onShare = function() {
        var t = this;
        Qs(this.score).then((function(e) {
          Hs(e) ? t.addGameRate() : $a("分享失败")
        }))
      }, e.prototype.addGameRate = function() {
        var t = this;
        il({}).then((function(e) {
          return r(t, void 0, void 0, (function() {
            return s(this, (function(t) {
              switch (t.label) {
                case 0:
                  return ul.syncData(e.syncData), [4, this._tapStartGame(!0)];
                case 1:
                  return t.sent(), [2]
              }
            }))
          }))
        })).catch((function(e) {
          return r(t, void 0, void 0, (function() {
            return s(this, (function(t) {
              switch (t.label) {
                case 0:
                  return Xa(e), [4, this._tapStartGame(!0)];
                case 1:
                  return t.sent(), [2]
              }
            }))
          }))
        }))
      }, e.prototype.playScoreAnimation = function() {
        return r(this, void 0, void 0, (function() {
          var t, e = this;
          return s(this, (function(n) {
            return this.scoreText.text = "0", t = new Promise((function(t) {
              return new TWEEN.Tween({
                s: 0
              }).to({
                s: e.score
              }, 1e3).onUpdate((function(t) {
                e.isDisposed || (e.scoreText.text = t.s.toFixed(), e.scoreText.x = (Dr - 2 * e.scoreText.textWidth) / 2)
              })).easing(TWEEN.Easing.Circular.Out).onComplete(t).start()
            })), this.highScoreTag.visible && (this.highScoreTag.alpha = 0, this.highScoreTag.scale.set(2), t = t.then((function() {
              return new Promise((function(t) {
                new TWEEN.Tween({
                  v: 0
                }).to({
                  v: 1
                }, 400).onUpdate((function(t) {
                  e.isDisposed || (e.highScoreTag.scale.set(2 - t.v), e.highScoreTag.alpha = t.v)
                })).easing(TWEEN.Easing.Circular.In).onComplete(t).start()
              }))
            }))), [2, t]
          }))
        }))
      }, e.prototype.onShow = function(t) {
        var e = this;
        this.x = 0, this.y = xa.top, this.gameIcon.showGameIcon(), this.score = Xs.score, this.maxScoreTxt.text = "历史最高分:" + ul.bestScore, ru() && (this.openData = new Op(this.rankSprite), su(this.openData)), this.highScoreTag.visible = ul.bestScore > Xs.oldBestScore, this.highScoreTag.visible && Pa(pa), this.playScoreAnimation().then((function() {
          if (!e.isDisposed) {
            var t = [];
            Xs.gainSkins.forEach((function(e) {
              return t.push(e)
            })), Ka(t), Xs.gainSkins.clear()
          }
        })), !$hostDef.censor && !Xs.isRecommend && Ap.indexOf(ul.fightCount) >= 0 && _a.showPanel(Lp), this.showFeedbackButton(), this.programIcon.startTween(), wx.triggerGC()
      }, e.prototype.onHide = function() {
        this.openData && (au(this.openData), this.openData = null), this.removeFeedBackButton(), this.programIcon.stopTween()
      }, e.prototype.onDestroy = function() {
        this.rankButton && (this.rankButton.destroy(), this.rankButton = null), this.groupShareButton && (this.groupShareButton.destroy(), this.groupShareButton = null), this.shareButton && (this.shareButton.destroy(), this.shareButton = null), this.settingSkin && (this.settingSkin.destroy(), this.settingSkin = null), this.kefuButton && (this.kefuButton.destroy(), this.kefuButton = null), this.coinButton && (this.coinButton.destroy(), this.coinButton = null), this.packetButton && (this.packetButton.destroy(), this.packetButton = null), this.turntableButton && (this.turntableButton.destroy(), this.turntableButton = null)
      }, e
    }(ka),
    Np = Rp,
    jp = function(t) {
      function e() {
        var e = t.call(this, !0, 2) || this;
        e.scoreTween = null, e.modalAlpha = 0;
        var n = ks("gold_result_title");
        n.anchor.set(.5, .5), n.x = 375, n.y = xa.top + 200, e.addChild(n);
        var i = ks("fight_gold_tip");
        i.anchor.set(.5, .5), i.x = 375, i.y = n.y + n.height / 2 + 50, e.addChild(i), e.goldRateTip = ks("tip_tired"), e.goldRateTip.anchor.set(.5, .5), e.goldRateTip.x = 375, e.goldRateTip.y = n.y + n.height / 2 + 100, e.addChild(e.goldRateTip), e.light = ks("reward_light"), e.light.anchor.set(.5, .5), e.light.x = 375, e.light.y = Cr / 2, e.addChild(e.light), e.goldContainer = new PIXI.Container;
        var o = ks("big_gold"),
          r = e.goldText = Cs("x0", "#FFCE49", !0, "left", 40);
        return r.x = o.x + o.width + 20, r.y = o.y + (o.height - r.height) / 2, e.goldContainer.addChild(o), e.goldContainer.addChild(r), e.goldContainer.x = (Dr - e.goldContainer.width) / 2, e.goldContainer.y = (Cr - e.goldContainer.height) / 2, e.addChild(e.goldContainer), e.buttonGroup = new PIXI.Container, e.videoButton = new ma("button_video_double"), e.videoButton.on("pointerdown", e.onTapVideo, e), e.buttonGroup.addChild(e.videoButton.skin), e.skipButton = new ma("button_skip"), e.skipButton.y = e.videoButton.y + e.videoButton.height / 2 + 100, e.skipButton.on("pointerdown", e._onClose, e), e.buttonGroup.addChild(e.skipButton.skin), e.buttonGroup.x = 375, e.buttonGroup.y = Cr / 2 + 200, e.addChild(e.buttonGroup), e.getButton = new ma("button_get"), e.getButton.on("pointerdown", e._onClose, e), e.getButton.x = 375, e.getButton.y = Cr / 2 + 200, e.addChild(e.getButton.skin), e
      }
      return n(e, t), e.prototype._onClose = function() {
        this.close()
      }, e.prototype.onTapVideo = function() {
        return r(this, void 0, void 0, (function() {
          var t;
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                return jo() ? (this.onVideoSuccess(), [2]) : [4, Xd()];
              case 1:
                return (t = e.sent()) === he.cancel ? [2, $a("需要完整看完视频才能翻倍哦", 1100)] : t === he.fail ? [2, $a("抱歉,当前没有视频可播放", 1100)] : (this.onVideoSuccess(), [2])
            }
          }))
        }))
      }, e.prototype.playScoreTween = function(t, e, n, i, o) {
        var r = this;
        this.goldText.text = t + "", this.scoreTween = new TWEEN.Tween({
          gold: t,
          addGold: n
        }).to({
          gold: e,
          addGold: i
        }, 800).onUpdate((function(t) {
          r.isGoldRate ? r.goldText.text = t.gold.toFixed() + " + " + t.addGold.toFixed() : r.goldText.text = t.gold.toFixed()
        })).onComplete((function() {
          o && o()
        })).easing(TWEEN.Easing.Circular.Out).start()
      }, e.prototype.onShow = function(t) {
        this.x = 0, this.y = 0, this.light.rotation = 0, new TWEEN.Tween(this.light).to({
          rotation: 2 * Math.PI
        }, 3e3).easing(TWEEN.Easing.Linear.None).repeat(1 / 0).start(), new TWEEN.Tween(this).to({
          modalAlpha: .7
        }, 200).easing(TWEEN.Easing.Linear.None).start(), this.isGoldRate = t.goldRate && t.goldRate > 0, this.curGold = t.gold ? t.gold : 0, this.curAddGold = t.addGold ? t.addGold : 0, this.playScoreTween(0, this.curGold, 0, this.curAddGold), this.goldRateTip.visible = t.tired > 0, this.videoButton.visible = Wd(), this.getButton.visible = !this.videoButton.visible, this.buttonGroup.visible = this.videoButton.visible
      }, e.prototype.onHide = function() {
        if (TWEEN.killTweensOf(this.light), TWEEN.killTweensOf(this), this.scoreTween && (TWEEN.remove(this.scoreTween), this.scoreTween = null), TWEEN.killTweensOf(this.light), this.curGold && this.curGold > 0) {
          var t = 0,
            e = 0;
          if (_a.hasPanel(Np)) t = (n = _a.getPanel(Np).settingSkin).skinGlobalX, e = n.skinGlobalY;
          else if (_a.hasPanel(sp)) {
            var n;
            t = (n = _a.getPanel(sp).settingSkin).skinGlobalX, e = n.skinGlobalY
          }
          zd(this.curGold, t, e)
        }
      }, e.prototype.onVideoSuccess = function() {
        return r(this, void 0, void 0, (function() {
          var t, e, n, i = this;
          return s(this, (function(o) {
            switch (o.label) {
              case 0:
                return this.videoButton.visible = !1, [4, nl({
                  type: 2
                })];
              case 1:
                return (t = o.sent()) && (ul.syncData(t.syncData), t.gift ? (e = this.curGold, n = this.curAddGold, this.curGold *= 2, this.curAddGold *= 2, this.playScoreTween(e, this.curGold, n, this.curAddGold, (function() {
                  i.getButton && (i.getButton.visible = !0, i.buttonGroup.visible = !1)
                }))) : (this.getButton.visible = !0, this.buttonGroup.visible = !1)), [2]
            }
          }))
        }))
      }, e.prototype.onDestroy = function() {
        this.videoButton && (this.videoButton.destroy(), this.videoButton = null), this.skipButton && (this.skipButton.destroy(), this.skipButton = null), this.getButton && (this.getButton.destroy(), this.getButton = null)
      }, e
    }(ka),
    Gp = jp,
    Fp = function() {
      function t(t) {
        this.host = t
      }
      return t.prototype.enter = function() {
        Xs.toDeadState(), this.host.exit(), this.sendFightEnd()
      }, t.prototype.sendFightEnd = function() {
        return r(this, void 0, void 0, (function() {
          var t, e;
          return s(this, (function(n) {
            switch (n.label) {
              case 0:
                _a.preventTouch(), n.label = 1;
              case 1:
                return n.trys.push([1, 3, 4, 5]), i = Xs.mapId, o = Xs.level, i <= 0 || Qa && Qa.postMessage({
                  type: "setExpertMapScore",
                  mapId: i,
                  score: o
                }), [4, el({
                  fightId: Xs.fightId,
                  stepResult: Xs.getStepResult(Xs.level)
                })];
              case 2:
                return (t = n.sent()).syncData && ul.syncData(t.syncData), t.gift && (Ha(t.gift), Xs.gotSkins(t.gift.skins)), Xs.mapId > 0 ? _a.showPanel(sp) : _a.showPanel(Np), t && t.gold && (_a.showPanel(Gp, t), Us()), [3, 5];
              case 3:
                return e = n.sent(), _a.showPanel(tp), Wa("结束游戏时出错", e), [3, 5];
              case 4:
                return _a.cancelPreventTouch(), [7];
              case 5:
                return [2]
            }
            var i, o
          }))
        }))
      }, t.prototype.update = function(t) {}, t.prototype.exit = function() {
        this.host = null
      }, t
    }(),
    Vp = Fp,
    Up = function(t) {
      function e(e, n) {
        var i = t.call(this, e) || this;
        return i.score = n, i.width = 624, i.height = 93, i.frequency = 60, i.i = 50, i
      }
      return n(e, t), e.prototype.getMessage = function() {
        return {
          type: "nextExceed",
          score: this.score
        }
      }, e
    }(Za);

  function Wp(t, e, n, i) {
    if (void 0 !== wx.createUserInfoButton) {
      g.log("wx.createUserInfoButton...");
      var o = wx.createUserInfoButton({
          type: "image",
          image: "res/ui/touch_button.png",
          withCredentials: !0,
          style: n
        }),
        r = function(t) {
          t && t.encryptedData && t.iv ? (a(), i(t)) : i()
        },
        s = !1,
        a = function() {
          s || (s = !0, o.offTap(r), o.hide(), o.destroy())
        };
      o.onTap(r), o.show(), t(wi(e, (function(t) {
        t ? o.show() : o.hide()
      }), {
        fireImmediately: !0
      })), t(a)
    }
  }
  var Xp, zp = function(t) {
      function e() {
        var e = t.call(this, !0, 1) || this;
        e.curScore = 0, e.isVideo = !1, e.normalContainer = new PIXI.Container, e.addChild(e.normalContainer);
        var n = ks("title_gameover");
        return n.anchor.set(.5, .5), n.x = 375, n.y = 200, e.normalContainer.addChild(n), e.scoreText = Ps("0", 60, 16777215, "center"), e.scoreText.scale.x = 2, e.scoreText.scale.y = 2, e.scoreText.x = (Dr - 2 * e.scoreText.textWidth) / 2, e.scoreText.y = 270, e.normalContainer.addChild(e.scoreText), e.videoButton = new ma("video_revive"), e.videoButton.on("pointerdown", e._onPlayVideo, e), e.videoButton.x = 375, e.videoButton.y = Cr / 2 + 200, e.addChild(e.videoButton.skin), e.skipButton = new ma("button_skip"), e.skipButton.x = 375, e.skipButton.y = e.videoButton.y + e.videoButton.height / 2 + 80, e.normalContainer.addChild(e.skipButton.skin), e.skipButton.on("pointerdown", e._onSkip, e), e.rankSprite = new PIXI.Sprite(iu), e.rankSprite.anchor.set(.5, .5), e.rankSprite.x = 375, e.rankSprite.y = 500, e.rankSprite.visible = ru(), e.normalContainer.addChild(e.rankSprite), e
      }
      return n(e, t), e.prototype._onPlayVideo = function() {
        return r(this, void 0, void 0, (function() {
          var t;
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                return jo() ? (this.close(), this._data.onSuccess(this.isVideo), [2]) : [4, Xd()];
              case 1:
                return (t = e.sent()) === he.cancel ? [2, $a("需要完整看完视频才能复活哦", 1100)] : t === he.fail ? [2, $a("抱歉,当前没有视频可播放", 1100)] : (this.close(), this._data.onSuccess(this.isVideo), [2])
            }
          }))
        }))
      }, e.prototype._onSkip = function() {
        this.close(), this._data.onCancel()
      }, e.prototype.onShow = function(t) {
        this._data = t, this.isVideo = t.isVideo, this.x = 0, this.y = 0, this.curScore = t.score, this.scoreText.text = t.score + "", this.scoreText.x = (Dr - 2 * this.scoreText.textWidth) / 2, this.videoButton.visible = !0, ru() && (this._openData = new Up(this.rankSprite, Xs.score), su(this._openData)), this.showUserInfoButton()
      }, e.prototype.onHide = function() {
        this._openData && (au(this._openData), this._openData = null)
      }, e.prototype.showUserInfoButton = function() {
        var t = this;
        if (ul.needAuthorize && "function" == typeof wx.createUserInfoButton) {
          var e = {
              x: (this.skipButton.x - this.skipButton.width / 2 - 20) * _a.uiScale,
              y: (this.skipButton.y - this.skipButton.height / 2 - 20) * _a.uiScale,
              width: (this.skipButton.width + 40) * _a.uiScale,
              height: (this.skipButton.height + 40) * _a.uiScale
            },
            n = !1;
          Wp((function(e) {
            return t.addToDestroy = e
          }), (function() {
            return 1 === _a.openedPopUpPanelCount
          }), {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
          }, (function(e) {
            n || (n = !0, e && xu(e), t._onSkip())
          }))
        }
      }, e.prototype.onDestroy = function() {
        this.videoButton && (this.videoButton.destroy(), this.videoButton = null), this.skipButton && (this.skipButton.destroy(), this.skipButton = null)
      }, e
    }(ka),
    $p = zp,
    Hp = function() {
      function t(t) {
        this.host = t
      }
      return t.prototype.enter = function(t) {
        return r(this, void 0, void 0, (function() {
          return s(this, (function(e) {
            return Xs.revive(t), wd.revive(), Xs.checkRulerState(), this.host.enter(ff), [2]
          }))
        }))
      }, t.prototype.update = function(t) {}, t.prototype.exit = function() {
        this.host = null
      }, t
    }(),
    qp = PIXI.Container,
    Kp = function(t) {
      function e() {
        var e = t.call(this, !0, 1) || this;
        e.curScore = 0, e.isVideo = !1, e.normalContainer = new PIXI.Container, e.addChild(e.normalContainer);
        var n = ks("title_gameover");
        return n.anchor.set(.5, .5), n.x = 375, n.y = 200, e.normalContainer.addChild(n), e.scoreText = Ps("0", 60, 16777215, "center"), e.scoreText.scale.x = 2, e.scoreText.scale.y = 2, e.scoreText.x = (Dr - 2 * e.scoreText.textWidth) / 2, e.scoreText.y = 270, e.normalContainer.addChild(e.scoreText), e.buttonGroup = new qp, e.videoButton = new ma("video_revive"), e.videoButton.on("pointerdown", e._onPlayVideo, e), e.videoButton.x = e.videoButton.width / 2, e.buttonGroup.addChild(e.videoButton.skin), e.coinButton = new ma("button_coin_revive"), e.coinButton.on("pointerdown", e._onCoin, e), e.coinButton.x = e.videoButton.x + e.videoButton.width / 2 + 30 + e.coinButton.width / 2, e.buttonGroup.addChild(e.coinButton.skin), e.buttonGroup.x = (Dr - e.buttonGroup.width) / 2, e.buttonGroup.y = Cr / 2 + 200, e.normalContainer.addChild(e.buttonGroup), e.skipButton = new ma("button_skip"), e.skipButton.x = 375, e.skipButton.y = e.buttonGroup.y + e.buttonGroup.height / 2 + 80, e.normalContainer.addChild(e.skipButton.skin), e.skipButton.on("pointerdown", e._onSkip, e), e.rankSprite = new PIXI.Sprite(iu), e.rankSprite.anchor.set(.5, .5), e.rankSprite.x = 375, e.rankSprite.y = 500, e.rankSprite.visible = ru(), e.normalContainer.addChild(e.rankSprite), e
      }
      return n(e, t), e.prototype._onPlayVideo = function() {
        return r(this, void 0, void 0, (function() {
          var t;
          return s(this, (function(e) {
            switch (e.label) {
              case 0:
                return jo() ? (this.close(), this._data.onSuccess(this.isVideo), [2]) : [4, Xd()];
              case 1:
                return (t = e.sent()) === he.cancel ? [2, $a("需要完整看完视频才能复活哦", 1100)] : t === he.fail ? [2, $a("抱歉,当前没有视频可播放", 1100)] : (this.close(), this._data.onSuccess(this.isVideo), [2])
            }
          }))
        }))
      }, e.prototype._onCoin = function() {
        return r(this, void 0, void 0, (function() {
          return s(this, (function(t) {
            return _a.showPanel(Zd, {
              isRevive: !0,
              onSuccess: this.onSuccess.bind(this)
            }), [2]
          }))
        }))
      }, e.prototype.onSuccess = function() {
        this._data.onSuccess(this.isVideo), this.close()
      }, e.prototype._onSkip = function() {
        this.close(), this._data.onCancel()
      }, e.prototype.onShow = function(t) {
        this._data = t, this.isVideo = t.isVideo, this.x = 0, this.y = 0, this.curScore = t.score, this.scoreText.text = t.score + "", this.scoreText.x = (Dr - 2 * this.scoreText.textWidth) / 2, this.videoButton.visible = Wd(), this.videoButton.visible ? (this.videoButton.x = this.videoButton.width / 2, this.coinButton.x = this.videoButton.x + this.videoButton.width / 2 + 30 + this.coinButton.width / 2) : this.coinButton.x = this.coinButton.width / 2, this.buttonGroup.x = (Dr - this.buttonGroup.width) / 2, ru() && (this._openData = new Up(this.rankSprite, Xs.score), su(this._openData))
      }, e.prototype.onHide = function() {
        this._openData && (au(this._openData), this._openData = null)
      }, e.prototype.onDestroy = function() {
        this.videoButton && (this.videoButton.destroy(), this.videoButton = null), this.coinButton && (this.coinButton.destroy(), this.coinButton = null), this.skipButton && (this.skipButton.destroy(), this.skipButton = null)
      }, e
    }(ka),
    Yp = Kp,
    Jp = function(t) {
      function e() {
        var e = t.call(this, !0, 1) || this;
        e.curScore = 0, e.isVideo = !1, e.normalContainer = new PIXI.Container, e.addChild(e.normalContainer);
        var n = ks("title_gameover");
        return n.anchor.set(.5, .5), n.x = 375, n.y = 200, e.normalContainer.addChild(n), e.scoreText = Ps("0", 60, 16777215, "center"), e.scoreText.scale.x = 2, e.scoreText.scale.y = 2, e.scoreText.x = (Dr - 2 * e.scoreText.textWidth) / 2, e.scoreText.y = 270, e.normalContainer.addChild(e.scoreText), e.shareButton = new ma("button_revive_big"), e.shareButton.on("pointerdown", e._onShare, e), e.shareButton.x = 375, e.shareButton.y = Cr / 2 + 200, e.addChild(e.shareButton.skin), e.skipButton = new ma("button_skip"), e.skipButton.x = 375, e.skipButton.y = e.shareButton.y + e.shareButton.height / 2 + 80, e.normalContainer.addChild(e.skipButton.skin), e.skipButton.on("pointerdown", e._onSkip, e), e.rankSprite = new PIXI.Sprite(iu), e.rankSprite.anchor.set(.5, .5), e.rankSprite.x = 375, e.rankSprite.y = 500, e.rankSprite.visible = ru(), e.normalContainer.addChild(e.rankSprite), e
      }
      return n(e, t), e.prototype._onShare = function() {
        return r(this, void 0, void 0, (function() {
          return s(this, (function(t) {
            switch (t.label) {
              case 0:
                return [4, Zs()];
              case 1:
                return Hs(t.sent()) ? (this.close(), this._data.onSuccess(this.isVideo), [2]) : ($a("需要分享出去才能复活哦", 1100), [2])
            }
          }))
        }))
      }, e.prototype._onSkip = function() {
        this.close(), this._data.onCancel()
      }, e.prototype.showUserInfoButton = function() {
        var t = this;
        if (ul.needAuthorize && "function" == typeof wx.createUserInfoButton) {
          var e = {
              x: (this.skipButton.x - this.skipButton.width / 2 - 20) * _a.uiScale,
              y: (this.skipButton.y - this.skipButton.height / 2 - 20) * _a.uiScale,
              width: (this.skipButton.width + 40) * _a.uiScale,
              height: (this.skipButton.height + 40) * _a.uiScale
            },
            n = !1;
          Wp((function(e) {
            return t.addToDestroy = e
          }), (function() {
            return 1 === _a.openedPopUpPanelCount
          }), {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
          }, (function(e) {
            n || (n = !0, e && xu(e), t._onSkip())
          }))
        }
      }, e.prototype.onShow = function(t) {
        this._data = t, this.x = 0, this.y = 0, this.curScore = t.score, this.scoreText.text = t.score + "", this.scoreText.x = (Dr - 2 * this.scoreText.textWidth) / 2, this.shareButton.visible = !0, this.isVideo = !1, ru() && (this._openData = new Up(this.rankSprite, Xs.score), su(this._openData)), this.showUserInfoButton()
      }, e.prototype.onHide = function() {
        this._openData && (au(this._openData), this._openData = null)
      }, e.prototype.onDestroy = function() {
        this.shareButton && (this.shareButton.destroy(), this.shareButton = null), this.skipButton && (this.skipButton.destroy(), this.skipButton = null)
      }, e
    }(ka),
    Qp = Jp,
    Zp = function() {
      function t(t) {
        this.host = t
      }
      return t.prototype.enter = function() {
        var t = this;
        // LOCAL: always show the free-continue panel (Yp = video_revive + coin buttons).
        // Original branching kept below, commented.
        _a.showPanel(Yp, {
          score: Xs.score,
          isVideo: true,
          onSuccess: function (e) { t.host && t.host.enter(Hp, e); },
          onCancel:  function ()  { t.host && t.host.enter(Vp); }
        });
        /*
        if (Xs.canRevive) {
          var e, n = !1;
          if ($hostDef.censor) n = !0, e = $p;
          else if (!(n = !!Xs.isCoinRevived || !Xs.isVideoRevived && Math.random() < .5) || $hostDef.replaceVideoRevive && !Wd()) e = $hostDef.shareRevive || ul.createDays <= $hostDef.shareDays ? Qp : Yp;
          else e = $p;
          _a.showPanel(e, {
            score: Xs.score,
            isVideo: n,
            onSuccess: function(e) { t.host && t.host.enter(Hp, e) },
            onCancel: function() { t.host && t.host.enter(Vp) }
          })
        } else this.host.enter(Vp)
        */
      }, t.prototype.update = function(t) {}, t.prototype.exit = function() {
        this.host = null
      }, t
    }(),
    tf = function() {
      function t(t) {
        this.host = t
      }
      return t.prototype.enter = function(t) {
        var e = this;
        Xs.toDropState();
        var n = t.minDistance,
          i = (t.maxDistance, Xs.getCurPlatform());
        if (Xs.bridgeLength < n) {
          var o = wd.getBridge(i);
          o && o.playDrop()
        }
        Da.vibrate && setTimeout((function() {
          wx.vibrateLong()
        }), 200), wd.hero.playDrop(i.dir, (function() {
          // LOCAL: always offer revive (free-continue) on death
          e.host && e.host.enter(Zp)
        }))
      }, t.prototype.update = function(t) {}, t.prototype.exit = function() {
        this.host = null
      }, t
    }(),
    ef = function() {
      function t(t) {
        this.host = t
      }
      return t.prototype.enter = function() {
        var t = this;
        Xs.toWalkState();
        var e = Xs.getCurPlatform();
        this.bridge = wd.getBridge(e), this.ruler = wd.getRuler(e);
        for (var n, i, o, r, s, a, u = Xs.getNextSameDirectionPlatform(), c = 0 === e.dir, h = Nr(e.type), l = c ? e.x : e.x - h, d = c ? e.z - h : e.z, p = Xs.bridgeLength, f = e.id + 1; f <= u.id; f++) {
          var v = Xs.getPlatform(f),
            g = Ar(v.type) / 2,
            y = void 0,
            m = (y = c ? Math.abs(v.z - d) : Math.abs(v.x - l)) - g;
          if (p < m) {
            o || (o = m, r = y + g, a = y - p);
            break
          }
          s = v, o = m, r = y + g, a = y - p
        }
        s || (s = Xs.getNextPlatform());
        var b = p >= o,
          w = p > r,
          x = !b || w;
        if (x) {
          var T = b ? p : p / 2;
          c ? (n = e.x, i = e.z - T - h) : (n = e.x - T - h, i = e.z)
        } else s.forwardMove ? (n = s.x, i = s.z) : (n = s.defaultX, i = s.defaultZ);
        for (f = e.id + 1; f <= s.id; f++) {
          (_ = Xs.getPlatform(f)).forwardMove ? _.stopMove() : _.needMoveBack && _.moveBack()
        }
        if (x) {
          var _, k = s.id + 1;
          if (k <= u.id)(_ = Xs.getPlatform(k)).forwardMove ? _.stopMove() : _.needMoveBack && _.moveBack()
        }
        this.bridge.layDown((function() {
          if (t.ruler && (t.ruler.dispose(), t.ruler = null), !x) {
            var u = function(t) {
                for (var e = Math.abs(t), n = 0, i = Or.length; n < i; n++)
                  if (e <= Or[n]) return 4 - n;
                return 1
              }(a),
              c = Xs.addScore(u, s.id - e.id);
            wd.showEffect(s.x, 0, s.z),
              function(t, e, n) {
                if (Da.audio) switch (t) {
                  case 2:
                    Pa(aa);
                    break;
                  case 3:
                    Pa(ua);
                    break;
                  case 4:
                    Pa(n > 2 ? da : n > 1 ? la : ca)
                }
                var i;
                4 === t && Da.vibrate && wx.vibrateLong();
                var o = qa[t];
                o && o.length > 0 ? ((i = o.pop()).alpha = 1, i.updateScore(e)) : i = new Ra(t, e), _a.topLayer.addChild(i), i.scale.set(.5), i.y = xa.top + 250, i.x = 375, i.showTween((function() {
                  i.parent && i.parent.removeChild(i), qa[t] || (qa[t] = []), qa[t].push(i)
                }))
              }(u, c, Xs.continuePerfect)
          }
          var h = 0 === Xs.level,
            l = wd.pets,
            d = -1;
          if (b)
            for (var p = function(t) {
                var e = l[t]; - 1 !== d || e.object3D.visible || (d = t);
                var n = w && !h ? t : t + 1,
                  i = d >= 0 ? 400 * (n - d) : 400 * n;
                e.walkTo(s, n, i, 56, (function() {
                  x && setTimeout((function() {
                    e.playAction("jump"), new TWEEN.Tween(e.object3D.rotation).to({
                      y: 45 * Math.PI / 180
                    }, 300).easing(TWEEN.Easing.Sinusoidal.InOut).start()
                  }), 200 * Math.random())
                }))
              }, f = 0; f < l.length; f++) p(f);
          else if (x) {
            var v = function(t) {
              var e = l[t];
              setTimeout((function() {
                e.playAction("jump"), new TWEEN.Tween(e.object3D.rotation).to({
                  y: 45 * Math.PI / 180
                }, 300).easing(TWEEN.Easing.Sinusoidal.InOut).start()
              }), 200 * Math.random())
            };
            for (f = 0; f < l.length; f++) v(f)
          }
          var g = n - e.x,
            y = i - e.z,
            m = 1e3 * Math.sqrt(g * g + y * y) / 60;
          wd.hero.walkTo(n, i, m, (function() {
            if (x) t.host && t.host.enter(tf, {
              minDistance: o,
              maxDistance: r
            });
            else {
              if (0 === Xs.mapId)
                for (var n = e.id + 1; n <= s.id; n++) {
                  var i = Xs.getPlatform(n);
                  if (Zr.getAnimalByLevel(i.id)) {
                    var a = wd.getPlatformPet(i.id);
                    a && wd.removeGameObject(a)
                  }
                }
              var u, c = Xs.fightId;
              // LOCAL: server is stubbed, so compute rescued pets/skins from the platforms crossed.
              var __newPets = [];
              if (0 === Xs.mapId) {
                for (var __n = e.id + 1; __n <= s.id; __n++) {
                  var __p = Xs.getPlatform(__n);
                  if (__p) {
                    var __a = Zr.getAnimalByLevel(__p.id);
                    if (__a && ul.pets.indexOf(__a.id) < 0) {
                      ul.pets.push(__a.id);
                      __newPets.push(__a.id);
                    }
                  }
                }
                try { ul.__saveLocal && ul.__saveLocal(); } catch (_e0) {}
              }
              (u = {
                fightId: c,
                stepResult: Xs.getStepResult(s.id)
              }, ku(514, u)).then((function(t) {
                // Fall back to locally-computed gift when server stub returns empty
                if (!t || !t.gift) {
                  if (__newPets.length) t = t || {}, t.gift = { pets: __newPets, skins: [] };
                }
                if (t && (t.syncData && ul.syncData(t.syncData), t.gift)) {
                  Ha(t.gift), Xs.gotSkins(t.gift.skins);
                  var e = t.gift.pets;
                  e && e.length > 0 && (! function(t, e) {
                    if (void 0 === e && (e = 1e3), t) {
                      var n = new Va(t);
                      _a.topLayer.addChild(n);
                      var i = xa.top + 250;
                      n.alpha = .3, new TWEEN.Tween(n).easing(TWEEN.Easing.Quintic.Out).to({
                        y: i - 50,
                        alpha: 1
                      }, 400).chain(new TWEEN.Tween(n).delay(e).to({
                        y: i - 80,
                        alpha: 0
                      }, 300).onComplete((function() {
                        return n.destroy({
                          children: !0
                        })
                      }))).start()
                    }
                  }(e[0]), s ? wd.addPetsInGame(s, e) : wd.addPetsInGame(Xs.getCurPlatform(), e))
                }
              })).catch((function(t) {
                console.warn(t), !t || 2003 !== t.errCode && 2001 !== t.errCode ? t && t.errMsg && $a("网络不稳定，" + t.errMsg) : Xs.isGameOver || Xs.fightId !== c || (Xs.toDeadState(), _a.showPanel(tp), Tf.status.exit())
              })), t.host && t.host.enter(ff, s)
            }
          }))
        }))
      }, t.prototype.update = function(t) {}, t.prototype.exit = function() {
        this.host = null, this.ruler && (this.ruler.dispose(), this.ruler = null), this.bridge = null
      }, t
    }(),
    nf = function() {
      function t(t) {
        this.host = t
      }
      return t.prototype.enter = function() {
        Xs.toBuildState(), this.bridge = new dd(Xs.getCurPlatform()), wd.addGameObject(this.bridge), Xs.rulerCount > 0 && (Xs.isUseAssist = 1, this.ruler = new md(Xs.getCurPlatform()), wd.addGameObject(this.ruler)), 0 === Xs.mapId && (this.guide = wd.getBridgeGuide(Xs.getCurPlatform())), Pa(va, !0)
      }, t.prototype.update = function(t) {
        Xs.isBuildComplete || !Xs.isTouchDown ? Xs.isBridgeDown || (Xs.isUseAssist && Xs.rulerCount--, Ma(va), Xs.isBridgeDown = !0, this.guide && this.guide.updateColor(), this.host && this.host.enter(ef)) : (this.bridge.growUp(Xs.bridgeLength), this.ruler && this.ruler.growUp(Xs.bridgeLength))
      }, t.prototype.exit = function() {
        Ma(va), this.host = null, this.bridge = null, this.guide && (this.guide.dispose(), this.guide = null), this.ruler = null
      }, t
    }();
  ! function(t) {
    t[t.Video = 0] = "Video", t[t.Share = 1] = "Share"
  }(Xp || (Xp = {}));
  var of = function() {
    function t() {
      this.dailyRewardType = Xp.Video, this.dailyRewardCount = 0, this.dailyTotalRewardCount = 0, this.dailyRewardTime = 0
    }
    return t.prototype.readDailyReward = function() {
      var t = Ia("dailyReward");
      t ? (this.dailyRewardType = t.dailyRewardType, this.dailyRewardCount = t.dailyRewardCount, this.dailyTotalRewardCount = t.dailyTotalRewardCount, this.dailyRewardTime = t.dailyRewardTime, lt(new Date(xs.curTime), new Date(this.dailyRewardTime)) || this.resetDailyReward()) : this.resetDailyReward()
    }, t.prototype.resetDailyReward = function() {
      this.dailyRewardType = Xp.Video, this.dailyRewardCount = 0, this.dailyTotalRewardCount = 0, this.dailyRewardTime = xs.curTime
    }, t.prototype.shareOrVideoReward = function(t) {
      return r(this, void 0, void 0, (function() {
        var e, n;
        return s(this, (function(i) {
          switch (i.label) {
            case 0:
              return e = this.dailyRewardType, ee ? (this._onRewardSuccess(e), [2, !0]) : $hostDef.censor || e == Xp.Video ? [4, Xd()] : [3, 2];
            case 1:
              return (n = i.sent()) === he.cancel ? ($a("需要完整看完视频才能".concat(t, "哦"), 1100), [2, !1]) : n === he.fail ? ($a("抱歉,当前没有视频可播放", 1100), [2, !1]) : (this._onRewardSuccess(e), [2, !0]);
            case 2:
              return e != Xp.Share ? [3, 4] : [4, Zs()];
            case 3:
              return Hs(i.sent()) ? (this._onRewardSuccess(e), [2, !0]) : ($a("分享失败"), [2, !1]);
            case 4:
              return [2]
          }
        }))
      }))
    }, t.prototype._onRewardSuccess = function(t) {
      this.dailyRewardCount++, this.dailyTotalRewardCount++;
      this.dailyTotalRewardCount >= $hostDef.dailyForceVideoCount ? this.dailyRewardType != Xp.Video && (this.dailyRewardType = Xp.Video) : t == Xp.Video ? this.dailyRewardCount >= 1 && (this.dailyRewardCount = 0, this.dailyRewardType = Xp.Share) : this.dailyRewardCount >= 1 && (this.dailyRewardCount = 0, this.dailyRewardType = Xp.Video), Sa("dailyReward", {
        dailyRewardType: this.dailyRewardType,
        dailyRewardCount: this.dailyRewardCount,
        dailyTotalRewardCount: this.dailyTotalRewardCount,
        dailyRewardTime: this.dailyRewardTime
      })
    }, o([fn], t.prototype, "dailyRewardType", void 0), t
  }(), rf = new of, sf = function(t) {
    function e(e) {
      var n = t.call(this) || this;
      return n._view = e, n.freeButton = new ma("button_ruler_free"), n.freeButton.on("pointerdown", n._onTapFree, n), n.addChild(n.freeButton.skin), n.videoButton = new ma("button_ruler_video"), n.videoButton.on("pointerdown", n._onTapReward, n), n.addChild(n.videoButton.skin), n.shareButton = new ma("button_ruler_share"), n.shareButton.on("pointerdown", n._onTapReward, n), n.addChild(n.shareButton.skin), n.addToDestroy = yi((function() {
        n.freeButton.visible = n.videoButton.visible = n.shareButton.visible = !1, ul.rulerCount > 0 ? n.freeButton.visible = !0 : (n.videoButton.visible = $hostDef.censor || rf.dailyRewardType == Xp.Video, n.shareButton.visible = !$hostDef.censor && rf.dailyRewardType == Xp.Share)
      })), n
    }
    return n(e, t), e.prototype.refreshButtons = function() {
      this.freeButton.visible = this.videoButton.visible = this.shareButton.visible = !1, ul.rulerCount > 0 ? this.freeButton.visible = !0 : (this.videoButton.visible = $hostDef.censor || rf.dailyRewardType == Xp.Video, this.shareButton.visible = !$hostDef.censor && rf.dailyRewardType == Xp.Share)
    }, e.prototype._onTapFree = function() {
      return r(this, void 0, void 0, (function() {
        var t;
        return s(this, (function(e) {
          switch (e.label) {
            case 0:
              return e.trys.push([0, 2, , 3]), [4, (n = {}, ku(1027, n))];
            case 1:
              return (t = e.sent()) && ul.syncData(t.syncData), [3, 3];
            case 2:
              return Xa(e.sent()), [2];
            case 3:
              return this.onSuccess(), [2]
          }
          var n
        }))
      }))
    }, e.prototype._onTapReward = function() {
      return r(this, void 0, void 0, (function() {
        return s(this, (function(t) {
          switch (t.label) {
            case 0:
              return [4, rf.shareOrVideoReward("获取过关神器")];
            case 1:
              return t.sent() ? (this.onSuccess(), [2]) : [2]
          }
        }))
      }))
    }, e.prototype.onSuccess = function() {
      Xs.addRuler(), $a("获得".concat(3, "个过关神器")), this._view && this._view.close()
    }, e.prototype.destroy = function() {
      this._view = null, this.freeButton.destroy(), this.videoButton.destroy(), this.shareButton.destroy(), t.prototype.destroy.call(this)
    }, e
  }(ip), af = sf, uf = function(t) {
    function e() {
      var e = t.call(this, !0, 2) || this;
      e.canTapMaskClose = !0;
      var n = new PIXI.Container;
      return e.bg = Bs("dlc/ui/bg/bg_ruler.png"), e.bg.width = 605, e.bg.height = 800, e.bg.interactive = !0, n.addChild(e.bg), e.closeButton = new Gs, e.closeButton.x = e.bg.width - 20, e.closeButton.y = 0, e.closeButton.on("pointerdown", (function() {
        e.close()
      }), e), n.addChild(e.closeButton.skin), e.stateButton = new af(e), e.stateButton.x = e.bg.width / 2, e.stateButton.y = e.bg.height - e.stateButton.height / 2 - 80, n.addChild(e.stateButton), e.stateButton.visible = !1, e.cdText = Cs("", "#FFFFFF", !0, "center", 30), n.addChild(e.cdText), e.cdText.x = (e.bg.width - e.cdText.width) / 2, e.cdText.y = e.bg.height - e.cdText.height - 160, e.cdText.visible = !1, e.activeText = Cs("获得3个过关神器，自动生效", "#FFFF00", !0, "center", 30), n.addChild(e.activeText), e.activeText.x = (e.bg.width - e.activeText.width) / 2, e.activeText.y = e.bg.height - e.activeText.height - 160, e.activeText.visible = !1, n.x = -e.bg.width / 2, n.y = -e.bg.height / 2, e.addChild(n), e
    }
    return n(e, t), e.prototype.onShow = function() {
      this.x = 375, this.y = xa.top + Cr / 2, this.updateButtons(), this.scale.set(.5), this.tween = new TWEEN.Tween(new Ja(this, .5)).easing(TWEEN.Easing.Back.Out).to({
        scale: 1
      }, 400).start()
    }, e.prototype.updateButtons = function() {
      this.stateButton.visible = !1, this.cdText.visible = !1, this.activeText.visible = !1, Xs.rulerCount > 0 ? (this.activeText.text = "还剩".concat(Xs.rulerCount, "个过关神器，自动生效"), this.activeText.x = (this.bg.width - this.activeText.width) / 2, this.activeText.visible = !0) : Xs.totalRulerCount >= 10 ? (this.activeText.text = "本局过关神器已用完", this.activeText.x = (this.bg.width - this.activeText.width) / 2, this.activeText.visible = !0) : Xs.rulerCd > 0 ? (this.cdText.text = "冷却中...再过".concat(Xs.rulerCd, "关可使用"), this.cdText.x = (this.bg.width - this.cdText.width) / 2, this.cdText.visible = !0) : $hostDef.censor || (this.stateButton.visible = !0, this.stateButton.refreshButtons())
    }, e.prototype.onHide = function() {
      this.tween && (TWEEN.remove(this.tween), this.tween = null), t.prototype.onHide.call(this)
    }, e.prototype.onDestroy = function() {
      this.closeButton && (this.closeButton.destroy(), this.closeButton = null), this.stateButton && (this.stateButton.destroy(), this.stateButton = null)
    }, e
  }(ka), cf = PIXI.Container, hf = function(t) {
    function e() {
      var e = t.call(this, !0, 2) || this;
      e.tweens = [], e.modalAlpha = .3, e.centerContainer = new cf;
      var n = e.bg = Bs("dlc/ui/bg/bg_pass_map.png");
      return n.width = 750, n.height = 274, e.centerContainer.addChild(n), e.nameText = Cs("王者无双", "#FFFF00", !0, "left", 40), e.nameText.x = (n.width - e.nameText.width) / 2, e.nameText.y = 220, e.centerContainer.addChild(e.nameText), e.addChild(e.centerContainer), e.centerContainer.x = (Dr - e.centerContainer.width) / 2, e.centerContainer.y = -e.centerContainer.height, e
    }
    return n(e, t), e.prototype.onShow = function(t) {
      var e = this;
      this.x = 0, this.y = 0, this.nameText.text = ts.getExpertDef(Xs.mapId).name, this.nameText.x = (this.bg.width - this.nameText.width) / 2, this.centerContainer.y = -this.centerContainer.height, new TWEEN.Tween(this.centerContainer).to({
        y: xa.top + 200
      }, 600).easing(TWEEN.Easing.Bounce.Out).start(), this.startBalloon(), Pa(ya, !1), setTimeout((function() {
        e.close(), _a.showPanel(sp, {}), t && t.gold && _a.showPanel(Gp, t)
      }), 3e3)
    }, e.prototype.startBalloon = function() {
      return r(this, void 0, void 0, (function() {
        var t, e;
        return s(this, (function(n) {
          switch (n.label) {
            case 0:
              t = function() {
                var t, n;
                return s(this, (function(i) {
                  switch (i.label) {
                    case 0:
                      return (t = ks("ribbon".concat(Bo(1, 9, !0)))).anchor.set(.5, .5), t.rotation = Math.random() * Math.PI / 180, t.y = -50, t.x = (o = Dr, Math.floor(Math.random() * o)), e.addChild(t), n = new TWEEN.Tween(t).to({
                        y: Cr + 50,
                        rotation: t.rotation + 2 * Math.PI
                      }, Bo(800, 1300)).onComplete((function() {
                        TWEEN.killTweensOf(t), t.destroy()
                      })).start(), e.tweens.push(n), [4, _s(Bo(20, 50))];
                    case 1:
                      return i.sent(), [2]
                  }
                  var o
                }))
              }, e = this, n.label = 1;
            case 1:
              return !this.parent || this.isDisposed ? [3, 3] : [5, t()];
            case 2:
              return n.sent(), [3, 1];
            case 3:
              return [2]
          }
        }))
      }))
    }, e.prototype.onDestroy = function() {
      for (var t = this.tweens.length - 1; t >= 0; t--) TWEEN.remove(this.tweens[t]);
      this.tweens = null, TWEEN.killTweensOf(this.centerContainer)
    }, e
  }(ka), lf = hf, df = function() {
    function t(t) {
      this.host = t
    }
    return t.prototype.enter = function() {
      Xs.toDeadState(), this.host.exit(), this.sendFightEnd()
    }, t.prototype.sendFightEnd = function() {
      return r(this, void 0, void 0, (function() {
        var t, e;
        return s(this, (function(n) {
          switch (n.label) {
            case 0:
              _a.preventTouch(), n.label = 1;
            case 1:
              return n.trys.push([1, 3, 4, 5]), [4, el({
                fightId: Xs.fightId,
                stepResult: Xs.getStepResult(Xs.level)
              })];
            case 2:
              return (t = n.sent()).syncData && ul.syncData(t.syncData), t.gift && (Ha(t.gift), Xs.gotSkins(t.gift.skins)), _a.showPanel(lf, t), [3, 5];
            case 3:
              return e = n.sent(), _a.showPanel(tp), Wa("结束游戏时出错", e), [3, 5];
            case 4:
              return _a.cancelPreventTouch(), [7];
            case 5:
              return [2]
          }
        }))
      }))
    }, t.prototype.update = function(t) {}, t.prototype.exit = function() {
      this.host = null
    }, t
  }(), pf = df, ff = function() {
    function t(t) {
      this.host = t, this.elapsed = 0, this.needTurn = !1
    }
    return t.prototype.enter = function(t) {
      if (t) {
        if (this.needTurn = !0, wd.hero.playAction("wait"), Xs.level = t.id, Xs.refreshNewPlatforms(), Xs.mapId > 0) {
          var e = ts.getExpertDef(Xs.mapId);
          if (e && e.finishFloor > 0 && Xs.level >= e.finishFloor) return void this.host.enter(pf)
        }
        Xs.isNeedCreateNewPlatform && Xs.createNewPlatforms(), 11 === Xs.level && ul.isGuide && (Xs.checkRulerState(), 0 !== Xs.rulerState && _a.showPanel(uf));
        var n = wd.createNextPlatform(),
          i = Xs.getCurPlatform();
        1 === i.dir ? wd.hero.turnBack(270, 500) : wd.hero.turnBack(180, 500);
        var o = n.x - i.x,
          r = n.z - i.z;
        Math.sqrt(o * o + r * r) >= 120 ? Xs.checkRulerState() : ul.isGuide || Xs.clearRulerState(), wd.moveToHero(n)
      }
      0 === Xs.mapId && Xs.level <= 3 && wd.addGameObject(new vd(Xs.getCurPlatform())), Xs.toWaitState(), wd.releasePlatform(), wd.hero.playAction("wait")
    }, t.prototype.update = function(t) {
      this.needTurn ? (this.elapsed += t, this.elapsed >= .5 && (this.needTurn = !1)) : Xs.isTouchDown && this.host.enter(nf)
    }, t.prototype.exit = function() {
      this.host = null
    }, t
  }(), vf = function() {
    function t(t) {
      this.host = t, this.isAnimation = !1, this.elapsed = 0
    }
    return t.prototype.enter = function() {
      0
    }, t.prototype.update = function(t) {
      if (Xs.isGaming)
        if (this.isAnimation) this.elapsed += t, this.elapsed > .3 && this.host.enter(ff);
        else {
          this.isAnimation = !0, wd.hero.turnBack(180, 300);
          var e = wd.createNextPlatform();
          wd.moveToHero(e)
        }
    }, t.prototype.exit = function() {
      this.host = null
    }, t
  }(), gf = function(t) {
    function e(e, n) {
      var i = t.call(this, e) || this;
      return i.score = n, i.width = 230, i.height = 80, i.scoreDirty = !1, i.frequency = 60, i.i = 50, i
    }
    return n(e, t), e.prototype.getMessage = function() {
      return {
        type: "exceeded",
        score: this.score
      }
    }, e.prototype.updateScore = function(t) {
      this.score = t, Qa && (eu === this ? (Qa.postMessage(this.getMessage()), this.updateTexture()) : this.scoreDirty = !0)
    }, e.prototype.restore = function() {
      Qa && this.scoreDirty && (this.scoreDirty = !1, Qa.postMessage(this.getMessage())), t.prototype.restore.call(this)
    }, e
  }(Za), yf = function(t) {
    function e() {
      var e = t.call(this) || this;
      e.interactive = !0;
      var n = new PIXI.Container;
      e.bg = ks("button_ruler"), e.bg.anchor.set(0, 0), n.addChild(e.bg), e.thumb = ks("button_ruler_mask"), e.thumb.x = 18, e.thumb.y = 0, n.addChild(e.thumb), e.thumbMask = new PIXI.Graphics, e.thumbMask.x = e.thumb.x, e.thumbMask.y = e.thumb.y, e.thumbMask.beginFill(0), e.thumbMask.drawRect(0, 0, e.thumb.width, e.thumb.height), e.thumbMask.endFill(), n.addChild(e.thumbMask), e.thumb.mask = e.thumbMask, e.countSprite = ks("ruler_count"), e.countSprite.x = e.bg.width - 30, e.countSprite.y = 0, e.countSprite.visible = !1, n.addChild(e.countSprite), e.countText = Cs("0", "#FFFFFF", !0, "center", 28), e.countText.x = e.countSprite.x + (e.countSprite.width - e.countText.width) / 2, e.countText.y = 0, e.countText.visible = !1, n.addChild(e.countText), e.addChild(n), n.position.set(-n.width / 2, -n.height / 2), e.on("pointerdown", e.onTapDown, e), e.on("pointerup", e.onTapUp, e), e.on("pointercancel", e.onTapUp, e), e.on("pointerout", e.onTapUp, e), e.on("pointerupoutside", e.onTapUp, e), e.progress = 0;
      var i = 0;
      return yi((function() {
        var t = Xs.rulerCount / 3;
        i !== t && (TWEEN.killTweensOf(e), new TWEEN.Tween(e).easing(TWEEN.Easing.Linear.None).to({
          progress: t
        }, 400).start(), i = t)
      })), yi((function() {
        e.countSprite.visible = ul.rulerCount > 0, e.countText.visible = ul.rulerCount > 0, e.countText.visible && (e.countText.text = ul.rulerCount + "", e.countText.x = e.countSprite.x + (e.countSprite.width - e.countText.width) / 2)
      })), e
    }
    return n(e, t), e.prototype.onTapUp = function() {
      this.scale.set(1, 1)
    }, e.prototype.onTapDown = function() {
      this.scale.set(.9, .9), _a.showPanel(uf)
    }, Object.defineProperty(e.prototype, "progress", {
      get: function() {
        return this.thumbMask.scale.y
      },
      set: function(t) {
        t < 0 && (t = 0), this.thumbMask.scale.y = Math.min(t, 1), this.thumbMask.y = this.thumb.y + this.thumb.height - this.thumbMask.height
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      t.prototype.destroy.call(this, {
        children: !0
      })
    }, e
  }(PIXI.Container), mf = function(t) {
    function e() {
      var e = t.call(this) || this;
      return e.stateButton = new af, e.addChild(e.stateButton), e.addToDestroy = yi((function() {
        var t = Xs.rulerState;
        e.visible = 0 !== t, e.visible && e.stateButton.refreshButtons(), e.scale.set(.5), e.tween && TWEEN.remove(e.tween), e.tween = new TWEEN.Tween(new Ja(e, .5)).easing(TWEEN.Easing.Back.Out).to({
          scale: 1
        }, 400).start(), e.x = 520
      })), e.x = 520, e.y = xa.top + 140, e
    }
    return n(e, t), e.prototype.destroy = function() {
      this.tween && (TWEEN.remove(this.tween), this.tween = null), t.prototype.destroy.call(this)
    }, e
  }(ip), bf = function(t) {
    function e(e, n, i) {
      void 0 === i && (i = !0);
      var o = t.call(this) || this;
      return void 0 === i && (i = !0), o.sprite = new PIXI.Container, o.sprite.interactive = !0, o.bg = ks(e), i && o.bg.anchor.set(.5, .5), o.sprite.addChild(o.bg), o.labelText = Cs(n, "#FFFFFF", !0, "left", 28), i ? (o.labelText.x = -o.labelText.width / 2, o.labelText.y = -o.labelText.height / 2) : (o.labelText.x = (o.width - o.labelText.width) / 2, o.labelText.y = (o.height - o.labelText.height) / 2), o.sprite.addChild(o.labelText), o.sprite.on(Ms, o.onTapDown, o), o.sprite.on(Os, o.onTapUp, o), o.sprite.on(Ls, o.onTapUp, o), o.sprite.on(As, o.onTapUp, o), o.sprite.on(Rs, o.onTapUp, o), o
    }
    return n(e, t), e.prototype.setFrameId = function(t) {
      this.bg.texture = Ss(t)
    }, Object.defineProperty(e.prototype, "skin", {
      get: function() {
        return this.sprite
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "label", {
      get: function() {
        return this.labelText.text
      },
      set: function(t) {
        this.labelText.text = t
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.onTapUp = function() {
      this.sprite && this.sprite.scale.set(1, 1)
    }, e.prototype.onTapDown = function() {
      this.sprite && this.sprite.scale.set(.9, .9)
    }, e.prototype.destroy = function() {
      this.sprite && this.sprite.removeAllListeners(), t.prototype.destroy.call(this), this.sprite = null
    }, e
  }(js), wf = function(t) {
    function e() {
      var e = t.call(this, !0, 2) || this;
      e.canTapMaskClose = !0;
      var n = Ds("bg_rank", 20, 20, 20, 20);
      n.width = 650, n.height = 800, n.interactive = !0, e.addChild(n);
      var i = new Gs;
      i.x = n.width - 10, i.y = 0, i.on("pointerdown", (function() {
        e.close()
      }), e), e.addSkin(i);
      var o = new bf("button_blue", "复活币");
      o.on("pointerdown", (function() {
        Zh({
          type: 1
        }).then((function(t) {
          ul.syncData(t.syncData)
        }))
      }), e), o.x = 150, o.y = 100, e.addSkin(o);
      var r = new bf("button_blue", "金币");
      r.on("pointerdown", (function() {
        Zh({
          type: 2
        }).then((function(t) {
          ul.syncData(t.syncData)
        }))
      }), e), r.x = 150, r.y = 200, e.addSkin(r);
      var s = new bf("button_blue", "清理转盘");
      s.on("pointerdown", (function() {
        Zh({
          type: 3
        }).then((function(t) {
          ul.syncData(t.syncData)
        }))
      }), e), s.x = 150, s.y = 300, e.addSkin(s);
      var a = new bf("button_blue", "困难门票");
      a.on("pointerdown", (function() {
        Zh({
          type: 4
        }).then((function(t) {
          ul.syncData(t.syncData)
        }))
      }), e), a.x = 150, a.y = 400, e.addSkin(a);
      var u = new bf("button_blue", "无限神器");
      return u.on("pointerdown", (function() {
        Xs.rulerCount = 1e3
      }), e), u.x = 150, u.y = 500, e.addSkin(u), e
    }
    return n(e, t), e
  }(ka), xf = function(t) {
    function e() {
      var e = t.call(this, !1, 0) || this;
      return e.rulerIcons = [], e.initUI(), e
    }
    return n(e, t), e.prototype.initUI = function() {
      var t = this;
      this.scoreText = Ps("", 80, 4606283, "left"), this.scoreText.y = xa.top + 100, this.scoreText.x = 20, this.addChild(this.scoreText), this.touchArea = new PIXI.Graphics, this.touchArea.beginFill(0, 0), this.touchArea.drawRect(0, 0, Dr, 4 * Cr / 5), this.touchArea.interactive = !0, this.touchArea.y = Cr / 5, this.addChild(this.touchArea), this.touchArea.on("pointerdown", this._onTouchStart, this), this.touchArea.on("pointerup", this._onTouchEnd, this), this.touchArea.on("pointercancel", this._onTouchEnd, this), this.touchArea.on("pointerout", this._onTouchEnd, this), this.touchArea.on("pointerupoutside", this._onTouchEnd, this);
      var e = this.scoreText.x;
      this.rulerIcons = [];
      for (var n = 0; n < 3; n++) {
        var i = ks("button_ruler_mask");
        i.anchor.set(0, 0), i.scale.set(.5, .5), i.x = e, i.y = this.scoreText.y + 100, this.addChild(i), this.rulerIcons.push(i), e += i.width + 10
      }
      this.petContainer = new PIXI.Container, this.petContainer.y = this.rulerIcons[0].y + 30, this.petContainer.x = this.scoreText.x;
      var o = ks("bg_pet_next");
      if (o.alpha = .5, this.petContainer.addChild(o), this.petIcon = new PIXI.Sprite, this.petIcon.width = 132, this.petIcon.height = 146, this.petIcon.texture = PIXI.Texture.fromFrame("item_gray201"), this.petIcon.anchor.set(0, 0), this.petContainer.addChild(this.petIcon), this.petContainer.interactive = !0, this.petContainer.on("pointerdown", (function() {
          $a("即将出现的小动物")
        }), this), this.addChild(this.petContainer), this.petContainer.scale.set(.8, .8), $hostDef.censor || (this.rulerStateView = new mf, this.addChild(this.rulerStateView)), this.exceedSprite = new PIXI.Sprite(iu), this.exceedSprite.anchor = new PIXI.Point(.5, .5), this.exceedSprite.x = 375, this.exceedSprite.y = xa.top + 250, this.exceedSprite.visible = ru(), this.addChild(this.exceedSprite), ru() && (this.exceeded = new gf(this.exceedSprite, Xs.score)), this.rulerButton = new yf, this.rulerButton.x = Dr - this.rulerButton.width / 2 - 10, this.rulerButton.y = Cr - this.rulerButton.height / 2 - 30, this.addChild(this.rulerButton), this.gameTip = Bs("dlc/ui/bg/game_tip.png"), this.gameTip.anchor.set(.5, 0), this.gameTip.x = 375, this.gameTip.y = xa.top + 200, this.addChild(this.gameTip), (jo() || DEVELOP) && "api-test" === $hostDef.api) {
        var r = new ma("icon_setting");
        r.x = r.width / 2, r.y = r.height / 2, r.on("pointerdown", (function() {
          _a.showPanel(wf)
        }), this), this.addChild(r.skin)
      }
      yi((function() {
        Xs.isGaming && t.exceeded && su(t.exceeded)
      })), yi((function() {
        var e = Xs.score;
        t.scoreText.text = e.toString(), Xs.isGaming && t.exceeded && (t.exceeded.updateScore(e), t.showTween())
      })), yi((function() {
        t.gameTip.visible = !Xs.isGameOver && Xs.level < 1
      })), yi((function() {
        t.visible = !Ts.isShowSkin
      })), yi((function() {
        for (var e = 0; e < t.rulerIcons.length; e++) t.rulerIcons[e].visible = Xs.rulerCount > e
      })), yi((function() {
        t.rulerButton.visible = !Xs.isGameOver && !$hostDef.censor && (!ul.isGuide || Xs.level >= 5)
      }));
      var s = null;
      yi((function() {
        var e, n = ul.lastPet;
        if (n > 0) {
          var i = Zr.getAnimalDef(n);
          if (i && Xs.level >= i.showLevel) {
            var o = Zr.animalList.indexOf(i);
            o >= 0 && (e = Zr.animalList[o + 1])
          }
        } else e = Zr.animalList[0];
        e && e !== s && (s = e, t.petIcon.texture = PIXI.Texture.fromFrame("item".concat(e.id)), TWEEN.killTweensOf(t.petIcon), new TWEEN.Tween(t.petIcon).delay(1e3).to({
          alpha: 0
        }, 500).onComplete((function() {
          t.petIcon.texture = PIXI.Texture.fromFrame("item_gray".concat(e.id)), new TWEEN.Tween(t.petIcon).to({
            alpha: 1
          }, 500).start()
        })).start(), t.tween && TWEEN.remove(t.tween), t.petContainer.scale.set(.5), t.tween = new TWEEN.Tween(new Ja(t.petContainer, .5)).easing(TWEEN.Easing.Back.Out).to({
          scale: 1
        }, 400).start()), t.petContainer.visible = null != e
      }))
    }, e.prototype._onTouchStart = function() {
      Xs.isGaming && (Xs.isTouchDown = !0)
    }, e.prototype._onTouchEnd = function() {
      Xs.isGaming && (Xs.isTouchDown = !1)
    }, e.prototype.showTween = function() {
      if (ru()) {
        TWEEN.killTweensOf(this.exceedSprite), this.exceedSprite.alpha = 1, this.exceedSprite.y = 500;
        var t = new TWEEN.Tween(this.exceedSprite).to({
            y: 450
          }, 1200),
          e = new TWEEN.Tween(this.exceedSprite).delay(500).to({
            alpha: 0,
            y: 420
          }, 500);
        t.chain(e), t.start()
      }
    }, e.prototype.onDestroy = function() {}, e.prototype.onShow = function() {
      this.x = 0, this.y = 0
    }, e
  }(ka), Tf = new(function() {
    function t() {
      this.isFirstGame = !0, this.status = new xd
    }
    return t.prototype.init = function() {
      var t = this,
        e = 250;
      this.camera = new dr.OrthographicCamera(e * Br / -2, e * Br / 2, 125, -125, -200, 2e3), this.scene = new dr.Scene;
      var n = 200;
      this.skinCamera = new dr.OrthographicCamera(n * Br / -2, n * Br / 2, 100, -100, -200, 2e3), this.skinScene = new dr.Scene, this.gameRender = new Td, _a.init(this.gameRender.pixiApp), wd.init(), Id.init(), this.maxDt = 50, this.updateBind = this.update.bind(this), requestAnimationFrame((function(e) {
        t.last = e, requestAnimationFrame(t.updateBind)
      }))
    }, t.prototype.update = function(t) {
      var e = t - this.last;
      e > this.maxDt && (e = this.maxDt), e *= .001, this.last = t, TWEEN.update(), Xs.update(e), this.status.update(e), eu && eu.update(), Ts.isShowSkin ? (Id.update(e), this.gameRender.render(this.skinScene, this.skinCamera, t)) : (wd.update(e), this.gameRender.render(this.scene, this.camera, t)), requestAnimationFrame(this.updateBind)
    }, t.prototype.startGame = function(t, e) {
      void 0 === e && (e = 0), this.isFirstGame ? (this.isFirstGame = !1, _a.showPanel(xf), Xs.startGame(t, e), wd.startGame()) : (Xs.startGame(t, e), wd.restartGame()), this.status.enter(vf)
    }, t
  }()), _f = function(t) {
    function e(e, n, i, o) {
      void 0 === o && (o = !0);
      var r = t.call(this) || this;
      return void 0 === o && (o = !0), r.sprite = new PIXI.Sprite, n && i && (r.sprite.width = n, r.sprite.height = i), r.sprite.interactive = !0, o && r.sprite.anchor.set(.5, .5), e.startsWith("res/") || e.startsWith("dlc/") ? r.sprite.texture = PIXI.Texture.fromImage(e) : Hr(e).then((function(t) {
        r.sprite && (r.sprite.texture = PIXI.Texture.fromImage(t))
      })), r.sprite.on(Ms, r.onTapDown, r), r.sprite.on(Os, r.onTapUp, r), r.sprite.on(Ls, r.onTapUp, r), r.sprite.on(As, r.onTapUp, r), r.sprite.on(Rs, r.onTapUp, r), r
    }
    return n(e, t), Object.defineProperty(e.prototype, "skin", {
      get: function() {
        return this.sprite
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.onTapUp = function() {
      this._destroyed || this.sprite && this.sprite.scale.set(1, 1)
    }, e.prototype.onTapDown = function() {
      this._destroyed || this.sprite && this.sprite.scale.set(.9, .9)
    }, e.prototype.destroy = function() {
      this.sprite && (this.sprite.removeAllListeners(), this.sprite.destroy({
        texture: !0,
        baseTexture: !0
      }), this.sprite = null), t.prototype.destroy.call(this)
    }, e
  }(js), kf = "登录中，请稍候...", Sf = function(t) {
    function e() {
      var e = t.call(this, !1, 1) || this;
      return e.progressBar = null, e.descText = null, e.retryBtn = null, e.totalStep = 1, e.defaultProgress = 0, e.curStep = 0, e.tryCount = 0, e.initUI(), e
    }
    return n(e, t), e.prototype.initUI = function() {
      var t = this.title = Is("res/ui/bg_title.png");
      t.width = 650, t.x = (Dr - t.width) / 2, t.y = 200, this.addChild(t), this.descText = Cs(kf, "#000000", !1, "left", 32), this.descText.x = (Dr - this.descText.width) / 2, this.descText.y = (Cr - this.descText.height) / 2 - 80, this.addChild(this.descText), this.uidText = Cs("", "#000000", !0), this.uidText.x = 0, this.uidText.y = Cr - 60, this.uidText.visible = !1, this.addChild(this.uidText), this.progressBar = new If, this.progressBar.x = 105, this.progressBar.y = (Cr - 29) / 2, this.progressBar.progress = 0, this.addChild(this.progressBar), this.retryBtn = new _f("res/ui/button_reload.png", 311, 117, !0), this.retryBtn.x = 375, this.retryBtn.y = Cr / 2 + 160, this.retryBtn.visible = !1, this.addSkin(this.retryBtn)
    }, e.prototype.setTitle = function(t) {
      this.descText.text = t, this.descText.x = (Dr - this.descText.width) / 2, this.descText.width > Dr && (this.descText.x = Dr - this.descText.width), this.descText.y = this.progressBar.y - this.descText.height - 20
    }, e.prototype.showRetry = function(t) {
      var e = this;
      return this.tryCount++, DEVELOP && console.log("showRetry", t), this.setTitle(t && t.errMsg || String(t)), new Promise((function(t) {
        e.retryBtn.visible = !0, e.retryBtn.once("pointertap", (function() {
          e.tryCount >= 3 && (e.tryCount = 0, Sa("token", null)), e.setTitle(kf), e.retryBtn.visible = !1, t()
        }), e)
      }))
    }, e.prototype.setUid = function(t) {
      this.uidText.text = t + ""
    }, e.prototype.onUserUid = function(t) {
      this.setUid(t)
    }, e.prototype.onHide = function() {
      TWEEN.killTweensOf(this.progressBar)
    }, e.prototype.onDestroy = function() {
      this.retryBtn && (this.retryBtn.destroy(), this.retryBtn = null), this.progressBar && (this.progressBar.destroy(), this.progressBar = null), t.prototype.onDestroy.call(this)
    }, e.prototype.onShow = function() {
      t.prototype.onShow.call(this), this.x = 0, this.y = 0
    }, e.prototype.setTotalStep = function(t, e) {
      this.totalStep = t, this.defaultProgress = e, this.setProgress(e, 200)
    }, e.prototype.finishStep = function(t) {
      this.curStep++;
      var e = this.defaultProgress + (1 - this.defaultProgress) * (this.curStep / this.totalStep);
      this.setProgress(e, 200), DEVELOP && console.log("[load Step]:".concat(this.curStep, ",---").concat(t, "---"))
    }, e.prototype.setProgress = function(t, e) {
      void 0 === e && (e = 0), TWEEN.killTweensOf(this.progressBar), new TWEEN.Tween(this.progressBar).to({
        progress: t
      }, e).easing(TWEEN.Easing.Linear.None).start()
    }, e.prototype.withRetry = function(t) {
      return r(this, void 0, void 0, (function() {
        var e, n, i;
        return s(this, (function(o) {
          switch (o.label) {
            case 0:
              e = !1, o.label = 1;
            case 1:
              if (e) return [3, 7];
              o.label = 2;
            case 2:
              return o.trys.push([2, 4, , 6]), [4, t()];
            case 3:
              return n = o.sent(), e = !0, [3, 6];
            case 4:
              return i = o.sent(), [4, this.showRetry(i)];
            case 5:
              return o.sent(), [3, 6];
            case 6:
              return [3, 1];
            case 7:
              return [2, n]
          }
        }))
      }))
    }, e
  }(ka), If = function(t) {
    function e() {
      var e = t.call(this) || this;
      return e.bg = Is("res/ui/progress_loading_bg.png"), e.bg.anchor.set(0, 0), e.addChild(e.bg), e.thumb = Is("res/ui/progress_loading_bar.png"), e.thumb.anchor.set(0, 0), e.thumb.y = 0, e.thumb.x = 0, e.addChild(e.thumb), e
    }
    return n(e, t), Object.defineProperty(e.prototype, "progress", {
      get: function() {
        return this.thumb.scale.x
      },
      set: function(t) {
        t < 0 && (t = 0), this.thumb.scale.x = Math.min(t, 1)
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function(e) {
      this.bg && (this.bg.destroy({
        texture: !0,
        baseTexture: !0
      }), this.bg = null), this.thumb && (this.thumb.destroy({
        texture: !0,
        baseTexture: !0
      }), this.thumb = null), t.prototype.destroy.call(this, e)
    }, e
  }(PIXI.Container);

  function Bf() {
    !Ts.isOffline && Ts.isShow && ku(Fu.__cmd, {}).then(cl).catch(console.error), setTimeout(Bf, 15e3)
  }
  var Df = {};

  function Cf() {
    return r(this, void 0, void 0, (function() {
      return s(this, (function(t) {
        return Df.score ? [2, Promise.resolve()] : [2, fs("dlc/font/score.json").then((function(t) {
          return new Promise((function(e) {
            PIXI.Texture.from("dlc/font/score.png").once("update", (function(n) {
              PIXI.extras.BitmapText.registerJsonFont(t, n), Df.score = !0, e()
            }))
          }))
        }))]
      }))
    }))
  }
  var Ef = PIXI.Container;
  var Pf = function(t) {
    function e() {
      var e = t.call(this, !0, 2) || this;
      return e.canTapMaskClose = !0, e.container = new Ef, e.bg = Bs("dlc/ui/bg/bg_announcement.png"), e.bg.interactive = !0, e.bg.width = 681, e.bg.height = 770, e.container.addChild(e.bg), e.closeButton = new Gs, e.closeButton.x = e.bg.width - 20, e.closeButton.y = 0, e.closeButton.on("pointerdown", (function() {
        e.close()
      }), e), e.container.addChild(e.closeButton.skin), e.descText = Es("", "#73be88", 580, 32, !1, "bold"), e.descText.style.lineHeight = 40, e.descText.x = 50, e.descText.y = 150, e.container.addChild(e.descText), e.okButton = new ma("button_suggest"), e.okButton.on("pointerdown", (function() {
        Zs().then((function() {
          e.close()
        }))
      }), e), e.okButton.x = e.bg.width / 2, e.okButton.y = e.bg.y + e.bg.height - 80, e.container.addChild(e.okButton.skin), e.container.x = -e.bg.width / 2, e.container.y = -e.bg.height / 2, e.addChild(e.container), e
    }
    return n(e, t), e.prototype.onShow = function(t) {
      this.x = 375, this.y = xa.top + Cr / 2, this.descText.text = t.text, this.scale.set(.5, .5), this.tween = new TWEEN.Tween(this.scale).to({
        x: 1,
        y: 1
      }, 500).easing(TWEEN.Easing.Elastic.Out).start()
    }, e.prototype.onHide = function() {
      this.tween && (TWEEN.remove(this.tween), this.tween = null)
    }, e.prototype.onDestroy = function() {
      this.closeButton && (this.closeButton.destroy(), this.closeButton = null), this.okButton && (this.okButton.destroy(), this.okButton = null)
    }, e
  }(ka);

  function Mf() {
    var t = 0;
    wx.onShow((function(e) {
      DEVELOP && console.log("onShow:", e);
      var n = Date.now();
      0 !== t && n - t > 1e3 * $hostDef.showInterstitialSecond && Us(), t = n, Ts.isShow = !0, Ts.shareTicket = e.shareTicket;
      var i = Ts.query = e.query || {},
        o = ul.uid,
        r = ul.token;
      if (o && r) {
        var s = void 0;
        s = {
            uid: o,
            token: r
          }, i.fuid && (s.fuid = Number(i.fuid), console.log("[fuid]", s.fuid)), i.shareType && (s.shareType = Number(i.shareType) || void 0),
          function(t) {
            return ku(266, t)
          }(s).then((function(t) {
            ul.connectToken = t.connectToken, xs.syncServerTime(t.now), ul.syncData(t.userInfo), Tu()
          }))
      }
    })), wx.onHide((function() {
      Ts.isShow = !1, t = Date.now()
    }))
  }
  var Of = {};
  var Lf = !1;

  function Af() {
    return r(this, void 0, void 0, (function() {
      return s(this, (function(t) {
        return Lf ? [2, Promise.resolve()] : [2, oe.getJSON("".concat(_r, "/host.json")).then((function(t) {
          var e = t.global,
            n = void 0 === e ? {} : e,
            o = t.version,
            r = void 0 === o ? {} : o,
            s = window.$hostDef = i(i({}, n), r[1718969302] || {});
          if (window.DEVELOP = !0 === s.DEVELOP, DEVELOP && console.log("DEVELOP:", DEVELOP), jo() && ($hostDef.api = "api"), $hostDef.maxExpertId) {
            $hostDef.expertMaps = [];
            for (var a = $hostDef.maxExpertId; a >= 1; a--) $hostDef.expertMaps.push(a)
          }
          $hostDef.expertOpenList || ($hostDef.expertOpenList = []), $hostDef.dailyForceVideoCount || ($hostDef.dailyForceVideoCount = 10), window.DEVELOP && g.log("host:", $hostDef), Lf = !0
        })).catch((function(t) {
          g.warn("host.json 加载失败。", t), window.$hostDef = {
            api: "api"
          }, g.log("host:", $hostDef)
        }))]
      }))
    }))
  }
  var Rf = g.getLogger("banner"),
    Nf = "function" == typeof wx.createBannerAd,
    jf = 280,
    Gf = .65;

  function Ff() {
    return !!Nf && (!(kr <= 320) && (!(kr / Sr > Gf) && Boolean($hostDef.bannerAd)))
  }
  var Vf, Uf = ["adunit-5197344e66155b5d", "adunit-9fa665b4b67fa824", "adunit-c2997ba87fb75fb1"],
    Wf = 0,
    Xf = ["MenuView", "GameOverView", "ExpertGameOverView"];

  function zf() {
    Ff() && (jf = Math.floor(.21 * kr), DEVELOP && (Rf.info("---initBanners---"), Rf.info("screenWidth:", kr), Rf.info("screenHeight:", Sr), Rf.info("BANNER_HEIGHT:", jf)), Uf = function(t) {
      for (var e, n, i = t.length; i > 1;) e = Math.floor(Math.random() * i--), n = t[i], t[i] = t[e], t[e] = n;
      return t
    }(Uf), function() {
      if (!Ff()) return;
      Vf && (Vf.hide(), Vf.destroy());
      var t = 1,
        e = jf,
        n = kr <= 320 ? 0 : kr * (1 - t) * .5,
        i = Uf[Wf],
        o = Vf = wx.createBannerAd({
          adUnitId: i,
          adIntervals: 30,
          style: {
            width: kr * t,
            left: n,
            top: Sr - e
          }
        });
      DEVELOP && Rf.info("---banner.onResize---", "function" == typeof o.onResize);
      if ("function" == typeof o.onResize) {
        var r = kr * t,
          s = Sr - e;
        o.onResize((function(t) {
          var e = t.width,
            n = t.height;
          DEVELOP && Rf.info("---onResize---" + e + " , " + n), r === e && s === n || (r = e, s = n, o.style.left = (kr - e) / 2, o.style.top = Sr - n)
        }))
      } else o.style.left = kr * (1 - t) * .5, o.style.top = Sr - e;
      o.onError((function(t) {
        DEVELOP && Rf.info("banner error", t)
      }))
    }(), wi((function() {
      if (_a.openedPopUpPanelCount > 1 || Xs.isGaming) return !1;
      var t = _a.lastPopUpView;
      return t && Xf.indexOf(t.name) >= 0
    }), (function(t) {
      t ? function() {
        if (!Ff()) return;
        DEVELOP && Rf.info("showBanner");
        Vf && Vf.show().catch((function(t) {}))
      }() : function() {
        if (!Ff()) return;
        DEVELOP && Rf.info("hideBanner");
        Vf && Vf.hide().catch((function(t) {}))
      }()
    })))
  }
  var $f = "登录中，请稍候",
    Hf = function() {
      function t() {
        console.log("-----VERSION-----", 1718969302), Ht.init(),
          function(t) {
            var e, n, o;
            U.appId = t.appId, U.wxAppId = t.wxAppId, U.confAppId = null !== (e = t.confAppId) && void 0 !== e ? e : t.wxAppId, U.user = t.user, U.clientVersion = t.clientVersion, U.time = Date, U.DEBUG = t.DEBUG, t.httpRequester && (void 0 !== U.sendHttp ? V.error("initClientLib 不需要传入 httpRequester 了, 已在 @h5/wxgame 库中处理") : U.sendHttp = t.httpRequester), t.env && (U.env ? V.error("initClientLib 不需要传入 env 了, 已在 @h5/wxgame 库中处理") : U.env = t.env), t.distinctId && V.error("initClientLib 不需要传入 distinctId, 库中会直接读取 user.distinctId"), w.$dealDistinctId();
            var r = i({}, null !== (o = null === (n = U.getLaunchData) || void 0 === n ? void 0 : n.call(U)) && void 0 !== o ? o : {});
            r.cv = U.clientVersion, r.ai = U.wxAppId, N(A.init, r), setTimeout((function() {
              U.logged || V.warn('启动已超过20秒, 仍未收到 logged 事件. 请确认项目中是否有在登录完成后调用 hostEnv.emitter.emit("logged");')
            }), 2e4)
          }({
            appId: "bridge",
            wxAppId: "wxd0cdbe16c4683d49",
            user: ul,
            clientVersion: 1718969302
          }), wx.showShareMenu({
            withShareTicket: !0
          }), wx.onShareAppMessage((function() {
            var t = ea(1);
            return {
              title: t.title,
              imageUrl: t.imageUrl,
              query: Go(t.queryData)
            }
          })), wx.onError((function(t) {
            g.warn("onError:", t.message, t.stack, t), wx.showModal({
              title: "onError",
              content: t.message ? String(t.message) : String(t),
              showCancel: !1
            })
          })), Tf.init(),
          function(t) {
            if (re.log("policy: ".concat(t)), "function" == typeof wx.getUpdateManager) {
              var e = wx.getUpdateManager();
              "ask" === t ? e.onUpdateReady((function() {
                wx.showModal({
                  title: "可以更新了",
                  content: "更新已经下载完毕",
                  confirmText: "现在更新",
                  showCancel: !0,
                  cancelText: "下次再说",
                  success: function(t) {
                    t.confirm && e.applyUpdate()
                  }
                })
              })) : (e.onCheckForUpdate((function(t) {
                t.hasUpdate ? (re.log("检查到更新可用"), wx.showLoading({
                  title: "正在下载更新",
                  mask: !0
                })) : re.log("当前已是最新版本")
              })), e.onUpdateReady((function() {
                wx.hideLoading(), re.log("执行更新"), e.applyUpdate()
              })), e.onUpdateFailed((function() {
                wx.hideLoading(), re.warn("更新下载失败")
              })))
            } else re.warn("不支持 wx.getUpdateManager")
          }("force"), Mf(), ol || (ol = !0, Nt(Iu), jt(Lu), Nt(Ru), jt(Fu), Nt(Uu), jt(Xu), Nt($u), jt(qu), Nt(Qu), jt(tc), Nt(oc), jt(sc), Nt(hc), jt(fc), Nt(gc), jt(mc), Nt(wc), jt(Tc), Nt(kc), jt(Ic), Nt(Dc), jt(Ec), Nt(Mc), jt(Lc), Nt(Rc), jt(jc), Nt(Fc), jt(Uc), Nt(Xc), jt($c), jt(qc), jt(Yc), Nt(Qc), jt(th), Nt(nh), jt(oh), Nt(sh), jt(uh), Nt(hh), jt(dh), Nt(fh), jt(gh), Nt(mh), jt(wh), Nt(Th), jt(kh), Nt(Ih), jt(Dh), Nt(Eh), jt(Mh), Nt(Lh), jt(Rh), Nt(jh), jt(Fh), Nt(Uh), jt(Xh), Nt($h), jt(qh), Nt(Yh), jt(Jh)), Ct(qc, hl), Ct(Yc, ll), this.startLoading()
      }
      return t.prototype.startLoading = function() {
        return r(this, void 0, void 0, (function() {
          var t, e, n, i, o = this;
          return s(this, (function(a) {
            switch (a.label) {
              case 0:
                return (t = _a.showPanel(Sf)).setTotalStep(9, .2), [4, t.withRetry((function() {
                  return function(t) {
                    return r(this, void 0, void 0, (function() {
                      var e;
                      return s(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = Date.now(), [4, Af()];
                          case 1:
                            return n.sent(), de.init(["adunit-ead6387d202ba95d", "adunit-05be27ac0db96cc3", "adunit-ae9ed0b2346b8c50", "adunit-a0c93a21ce169e5f"]), zf(), t.finishStep("host"), N(A.hostLoaded, {
                              ut: Date.now() - e
                            }), [2]
                        }
                      }))
                    }))
                  }(t)
                }))];
              case 1:
                return a.sent(), DEVELOP || g.setLevel("error"), t.setTitle($f), [4, t.withRetry((function() {
                  return function(t) {
                    return r(this, void 0, void 0, (function() {
                      var e;
                      return s(this, (function(n) {
                        return Of[t] ? [2, Promise.resolve()] : "function" != typeof wx.loadSubpackage ? (e = window.require("".concat(t, "/game.js")), Of[t] = !0, [2, Promise.resolve(e)]) : [2, new Promise((function(e, n) {
                          wx.loadSubpackage({
                            name: t,
                            success: function(n) {
                              Of[t] = !0, e()
                            },
                            fail: function(t) {
                              n(t)
                            }
                          })
                        }))]
                      }))
                    }))
                  }("dlc")
                }))];
              case 2:
                return a.sent(), n = 0, [4, t.withRetry((function() {
                  return r(o, void 0, void 0, (function() {
                    var i, o;
                    return s(this, (function(r) {
                      switch (r.label) {
                        case 0:
                          t.setTitle($f), i = Date.now(), r.label = 1;
                        case 1:
                          return r.trys.push([1, 3, , 4]), [4, mu()];
                        case 2:
                          return e = r.sent(), t.finishStep("login"), N(A.loginFinish, {
                            ut: Date.now() - i,
                            re: n
                          }), [3, 4];
                        case 3:
                          throw o = r.sent(), n += 1, o;
                        case 4:
                          return [2]
                      }
                    }))
                  }))
                }))];
              case 3:
                return a.sent(), rf.readDailyReward(),
                  function() {
                    return r(this, void 0, void 0, (function() {
                      var t;
                      return s(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            window.$operation = {
                              interstitial: !0,
                              interstitialOld: !0,
                              interstitialStartLimitNew: 4e4,
                              interstitialStartLimitOld: 4e4,
                              interstitialMinIntervalNew: 15e3,
                              interstitialMinIntervalOld: 15e3
                            }, e.label = 1;
                          case 1:
                            return e.trys.push([1, 3, , 4]), [4, ht()];
                          case 2:
                            return (t = e.sent()) && (window.$operation = t), [3, 4];
                          case 3:
                            return e.sent(), [3, 4];
                          case 4:
                            return console.log("$operation:", $operation), [2]
                        }
                      }))
                    }))
                  }().catch((function(t) {})), i = Date.now(), [4, t.withRetry((function() {
                    return r(o, void 0, void 0, (function() {
                      return s(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return t.setTitle($f + "."), [4, br.init()];
                          case 1:
                            return e.sent(), t.finishStep("version"), [2]
                        }
                      }))
                    }))
                  }))];
              case 4:
                return a.sent(), [4, t.withRetry((function() {
                  return t.setTitle($f + ".."), bs()
                }))];
              case 5:
                return a.sent(), [4, t.withRetry((function() {
                  return t.setTitle($f + "..."), rs("ui").then((function() {
                    t.finishStep("ui loaded")
                  }))
                }))];
              case 6:
                return a.sent(), [4, t.withRetry((function() {
                  return t.setTitle($f + "...."), rs("effect").then((function() {
                    t.finishStep("effect loaded")
                  }))
                }))];
              case 7:
                return a.sent(), [4, t.withRetry((function() {
                  return t.setTitle($f + "....."), rs("item").then((function() {
                    t.finishStep("item loaded")
                  }))
                }))];
              case 8:
                return a.sent(), [4, t.withRetry((function() {
                  return t.setTitle($f + "......"),
                    function() {
                      return r(this, void 0, void 0, (function() {
                        return s(this, (function(t) {
                          switch (t.label) {
                            case 0:
                              return t.trys.push([0, 2, , 3]), [4, Cf()];
                            case 1:
                              return t.sent(), [3, 3];
                            case 2:
                              return t.sent(), [2, new Promise((function(t) {
                                oe.getJSON(wr("font/score.json")).then((function(e) {
                                  PIXI.Texture.from(wr("font/score.png")).once("update", (function(n) {
                                    PIXI.extras.BitmapText.registerJsonFont(e, n), Df.score = !0, t()
                                  }))
                                }))
                              }))];
                            case 3:
                              return [2]
                          }
                        }))
                      }))
                    }().then((function() {
                      t.finishStep("font loaded")
                    }))
                }))];
              case 9:
                return a.sent(), N(A.resLoaded, {
                    ut: Date.now() - i
                  }), t.close(), hu(ts.finishFloors), e && e.userInfo && ul.createUser(e.userInfo), wd.initHero(), _a.showPanel(tp), "function" == typeof wx.createInterstitialAd && $operation.interstitial && fe.init(["adunit-cc274a0df6a69f7f", "adunit-64534145558dcd5c", "adunit-c1ec54ecef1509fc"], {
                    startLimit: $operation.interstitialStartLimitNew,
                    minInterval: $operation.interstitialMinIntervalNew
                  }), Pt = !0, Ot.forEach((function(t) {
                    return Lt(t.cmd, t.body)
                  })), Ot.length = 0, Tu(), setTimeout(Bf, 15e3),
                  function() {
                    if (!$hostDef.censor) {
                      var t = $hostDef.noticeId,
                        e = $hostDef.expertOpenList;
                      if (e)
                        for (var n = 0; n < e.length; n++) {
                          var i = e[n];
                          new Date(i.openTime).getTime() <= xs.curTime && t < i.noticeId && (t = i.noticeId)
                        }
                      if (!(t <= 0)) {
                        var o = wx.getStorageSync("notice");
                        if (!(o && o.ids && o.ids.indexOf($hostDef.noticeId) > -1)) {
                          var r;
                          (r = o && o.ids ? o.ids.slice() : []).push($hostDef.noticeId), console.log("noticeIds:", JSON.stringify(r)), Sa("notice", {
                            ids: r
                          });
                          var s = ns.getNoticeDef($hostDef.noticeId);
                          s && _a.showPanel(Pf, s)
                        }
                      }
                    }
                  }(), [2]
            }
          }))
        }))
      }, t
    }();
  new Hf
}();