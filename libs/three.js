! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {})
}(this, (function(t) {
  "use strict";

  function e() {}
  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
  }), void 0 === Math.sign && (Math.sign = function(t) {
    return t < 0 ? -1 : t > 0 ? 1 : +t
  }), "name" in Function.prototype == 0 && Object.defineProperty(Function.prototype, "name", {
    get: function() {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
    }
  }), String.prototype.trimEnd || (String.prototype.trimEnd = function() {
    return this.replace(new RegExp(/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source + "$", "g"), "")
  }), void 0 === Object.assign && (Object.assign = function(t) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
    for (var e = Object(t), i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      if (null != n)
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }), Object.assign(e.prototype, {
    addEventListener: function(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      var i = this._listeners;
      void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
    },
    hasEventListener: function(t, e) {
      if (void 0 === this._listeners) return !1;
      var i = this._listeners;
      return void 0 !== i[t] && -1 !== i[t].indexOf(e)
    },
    removeEventListener: function(t, e) {
      if (void 0 !== this._listeners) {
        var i = this._listeners[t];
        if (void 0 !== i) {
          var n = i.indexOf(e); - 1 !== n && i.splice(n, 1)
        }
      }
    },
    dispatchEvent: function(t) {
      if (void 0 !== this._listeners) {
        var e = this._listeners[t.type];
        if (void 0 !== e) {
          t.target = this;
          for (var i = e.slice(0), n = 0, r = i.length; n < r; n++) i[n].call(this, t)
        }
      }
    }
  });
  var i, n, r = 100,
    a = 103,
    o = 104,
    s = 300,
    h = 301,
    c = 302,
    l = 304,
    u = 306,
    p = 307,
    d = 1e3,
    f = 1001,
    m = 1002,
    v = 1003,
    g = 1004,
    y = 1005,
    x = 1006,
    _ = 1007,
    b = 1008,
    M = 1009,
    w = 1012,
    S = 1014,
    E = 1015,
    T = 1016,
    A = 1020,
    L = 1022,
    C = 1023,
    P = 1026,
    R = 1027,
    I = 33776,
    N = 33777,
    O = 33778,
    D = 33779,
    U = 35840,
    B = 35841,
    z = 35842,
    F = 35843,
    G = 2300,
    V = 2301,
    k = 2302,
    H = 2400,
    j = 2401,
    W = 2402,
    X = 3e3,
    q = 3007,
    Y = {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI,
      generateUUID: function() {
        for (var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16);
        return function() {
          var e = 4294967295 * Math.random() | 0,
            i = 4294967295 * Math.random() | 0,
            n = 4294967295 * Math.random() | 0,
            r = 4294967295 * Math.random() | 0;
          return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]).toUpperCase()
        }
      }(),
      clamp: function(t, e, i) {
        return t < e ? e : t > i ? i : t
      },
      euclideanModulo: function(t, e) {
        return (t % e + e) % e
      },
      mapLinear: function(t, e, i, n, r) {
        return n + (t - e) * (r - n) / (i - e)
      },
      lerp: function(t, e, i) {
        return (1 - i) * t + i * e
      },
      smoothstep: function(t, e, i) {
        return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
      },
      smootherstep: function(t, e, i) {
        return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
      },
      randInt: function(t, e) {
        return t + Math.floor(Math.random() * (e - t + 1))
      },
      randFloat: function(t, e) {
        return t + Math.random() * (e - t)
      },
      randFloatSpread: function(t) {
        return t * (.5 - Math.random())
      },
      degToRad: function(t) {
        return t * Y.DEG2RAD
      },
      radToDeg: function(t) {
        return t * Y.RAD2DEG
      },
      isPowerOfTwo: function(t) {
        return !(t & t - 1) && 0 !== t
      },
      ceilPowerOfTwo: function(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
      },
      floorPowerOfTwo: function(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
      }
    };

  function J(t, e) {
    this.x = t || 0, this.y = e || 0
  }
  Object.defineProperties(J.prototype, {
    width: {
      get: function() {
        return this.x
      },
      set: function(t) {
        this.x = t
      }
    },
    height: {
      get: function() {
        return this.y
      },
      set: function(t) {
        this.y = t
      }
    }
  }), Object.assign(J.prototype, {
    isVector2: !0,
    set: function(t, e) {
      return this.x = t, this.y = e, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setComponent: function(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this
    },
    add: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this
    },
    multiply: function(t) {
      return this.x *= t.x, this.y *= t.y, this
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this
    },
    divide: function(t) {
      return this.x /= t.x, this.y /= t.y, this
    },
    divideScalar: function(t) {
      return this.multiplyScalar(1 / t)
    },
    applyMatrix3: function(t) {
      var e = this.x,
        i = this.y,
        n = t.elements;
      return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
    },
    clampScalar: (i = new J, n = new J, function(t, e) {
      return i.set(t, t), n.set(e, e), this.clamp(i, n)
    }),
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y
    },
    cross: function(t) {
      return this.x * t.y - this.y * t.x
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    angle: function() {
      var t = Math.atan2(this.y, this.x);
      return t < 0 && (t += 2 * Math.PI), t
    },
    distanceTo: function(t) {
      return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
      var e = this.x - t.x,
        i = this.y - t.y;
      return e * e + i * i
    },
    manhattanDistanceTo: function(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
    },
    fromBufferAttribute: function(t, e, i) {
      return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
    },
    rotateAround: function(t, e) {
      var i = Math.cos(e),
        n = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
    }
  });
  var Z, K, Q, $, tt = new at,
    et = new at,
    it = new at;

  function nt() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
  }

  function rt(t, e, i, n) {
    this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
  }

  function at(t, e, i) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0
  }

  function ot() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
  }
  Object.assign(nt.prototype, {
    isMatrix4: !0,
    set: function(t, e, i, n, r, a, o, s, h, c, l, u, p, d, f, m) {
      var v = this.elements;
      return v[0] = t, v[4] = e, v[8] = i, v[12] = n, v[1] = r, v[5] = a, v[9] = o, v[13] = s, v[2] = h, v[6] = c, v[10] = l, v[14] = u, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    clone: function() {
      return (new nt).fromArray(this.elements)
    },
    copy: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
    },
    copyPosition: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
    },
    extractBasis: function(t, e, i) {
      return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
    },
    makeBasis: function(t, e, i) {
      return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
    },
    extractRotation: (Q = new at, function(t) {
      var e = this.elements,
        i = t.elements,
        n = 1 / Q.setFromMatrixColumn(t, 0).length(),
        r = 1 / Q.setFromMatrixColumn(t, 1).length(),
        a = 1 / Q.setFromMatrixColumn(t, 2).length();
      return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * a, e[9] = i[9] * a, e[10] = i[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    }),
    makeRotationFromEuler: function(t) {
      t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      var e = this.elements,
        i = t.x,
        n = t.y,
        r = t.z,
        a = Math.cos(i),
        o = Math.sin(i),
        s = Math.cos(n),
        h = Math.sin(n),
        c = Math.cos(r),
        l = Math.sin(r);
      if ("XYZ" === t.order) {
        var u = a * c,
          p = a * l,
          d = o * c,
          f = o * l;
        e[0] = s * c, e[4] = -s * l, e[8] = h, e[1] = p + d * h, e[5] = u - f * h, e[9] = -o * s, e[2] = f - u * h, e[6] = d + p * h, e[10] = a * s
      } else if ("YXZ" === t.order) {
        var m = s * c,
          v = s * l,
          g = h * c,
          y = h * l;
        e[0] = m + y * o, e[4] = g * o - v, e[8] = a * h, e[1] = a * l, e[5] = a * c, e[9] = -o, e[2] = v * o - g, e[6] = y + m * o, e[10] = a * s
      } else if ("ZXY" === t.order) m = s * c, v = s * l, g = h * c, y = h * l, e[0] = m - y * o, e[4] = -a * l, e[8] = g + v * o, e[1] = v + g * o, e[5] = a * c, e[9] = y - m * o, e[2] = -a * h, e[6] = o, e[10] = a * s;
      else if ("ZYX" === t.order) u = a * c, p = a * l, d = o * c, f = o * l, e[0] = s * c, e[4] = d * h - p, e[8] = u * h + f, e[1] = s * l, e[5] = f * h + u, e[9] = p * h - d, e[2] = -h, e[6] = o * s, e[10] = a * s;
      else if ("YZX" === t.order) {
        var x = a * s,
          _ = a * h,
          b = o * s,
          M = o * h;
        e[0] = s * c, e[4] = M - x * l, e[8] = b * l + _, e[1] = l, e[5] = a * c, e[9] = -o * c, e[2] = -h * c, e[6] = _ * l + b, e[10] = x - M * l
      } else "XZY" === t.order && (x = a * s, _ = a * h, b = o * s, M = o * h, e[0] = s * c, e[4] = -l, e[8] = h * c, e[1] = x * l + M, e[5] = a * c, e[9] = _ * l - b, e[2] = b * l - _, e[6] = o * c, e[10] = M * l + x);
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    },
    makeRotationFromQuaternion: function(t) {
      var e = this.elements,
        i = t._x,
        n = t._y,
        r = t._z,
        a = t._w,
        o = i + i,
        s = n + n,
        h = r + r,
        c = i * o,
        l = i * s,
        u = i * h,
        p = n * s,
        d = n * h,
        f = r * h,
        m = a * o,
        v = a * s,
        g = a * h;
      return e[0] = 1 - (p + f), e[4] = l - g, e[8] = u + v, e[1] = l + g, e[5] = 1 - (c + f), e[9] = d - m, e[2] = u - v, e[6] = d + m, e[10] = 1 - (c + p), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    },
    lookAt: function(t, e, i) {
      var n = this.elements,
        r = tt,
        a = et,
        o = it;
      return o.subVectors(t, e), 0 === o.lengthSq() && (o.z = 1), o.normalize(), r.crossVectors(i, o), 0 === r.lengthSq() && (1 === Math.abs(i.z) ? o.x += 1e-4 : o.z += 1e-4, o.normalize(), r.crossVectors(i, o)), r.normalize(), a.crossVectors(o, r), n[0] = r.x, n[4] = a.x, n[8] = o.x, n[1] = r.y, n[5] = a.y, n[9] = o.y, n[2] = r.z, n[6] = a.z, n[10] = o.z, this
    },
    multiply: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
    },
    premultiply: function(t) {
      return this.multiplyMatrices(t, this)
    },
    multiplyMatrices: function(t, e) {
      var i = t.elements,
        n = e.elements,
        r = this.elements,
        a = i[0],
        o = i[4],
        s = i[8],
        h = i[12],
        c = i[1],
        l = i[5],
        u = i[9],
        p = i[13],
        d = i[2],
        f = i[6],
        m = i[10],
        v = i[14],
        g = i[3],
        y = i[7],
        x = i[11],
        _ = i[15],
        b = n[0],
        M = n[4],
        w = n[8],
        S = n[12],
        E = n[1],
        T = n[5],
        A = n[9],
        L = n[13],
        C = n[2],
        P = n[6],
        R = n[10],
        I = n[14],
        N = n[3],
        O = n[7],
        D = n[11],
        U = n[15];
      return r[0] = a * b + o * E + s * C + h * N, r[4] = a * M + o * T + s * P + h * O, r[8] = a * w + o * A + s * R + h * D, r[12] = a * S + o * L + s * I + h * U, r[1] = c * b + l * E + u * C + p * N, r[5] = c * M + l * T + u * P + p * O, r[9] = c * w + l * A + u * R + p * D, r[13] = c * S + l * L + u * I + p * U, r[2] = d * b + f * E + m * C + v * N, r[6] = d * M + f * T + m * P + v * O, r[10] = d * w + f * A + m * R + v * D, r[14] = d * S + f * L + m * I + v * U, r[3] = g * b + y * E + x * C + _ * N, r[7] = g * M + y * T + x * P + _ * O, r[11] = g * w + y * A + x * R + _ * D, r[15] = g * S + y * L + x * I + _ * U, this
    },
    multiplyScalar: function(t) {
      var e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
    },
    applyToBufferAttribute: function() {
      var t = new at;
      return function(e) {
        for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z);
        return e
      }
    }(),
    determinant: function() {
      var t = this.elements,
        e = t[0],
        i = t[4],
        n = t[8],
        r = t[12],
        a = t[1],
        o = t[5],
        s = t[9],
        h = t[13],
        c = t[2],
        l = t[6],
        u = t[10],
        p = t[14];
      return t[3] * (+r * s * l - n * h * l - r * o * u + i * h * u + n * o * p - i * s * p) + t[7] * (+e * s * p - e * h * u + r * a * u - n * a * p + n * h * c - r * s * c) + t[11] * (+e * h * l - e * o * p - r * a * l + i * a * p + r * o * c - i * h * c) + t[15] * (-n * o * c - e * s * l + e * o * u + n * a * l - i * a * u + i * s * c)
    },
    transpose: function() {
      var t, e = this.elements;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
    },
    setPosition: function(t) {
      var e = this.elements;
      return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
    },
    getInverse: function(t, e) {
      var i = this.elements,
        n = t.elements,
        r = n[0],
        a = n[1],
        o = n[2],
        s = n[3],
        h = n[4],
        c = n[5],
        l = n[6],
        u = n[7],
        p = n[8],
        d = n[9],
        f = n[10],
        m = n[11],
        v = n[12],
        g = n[13],
        y = n[14],
        x = n[15],
        _ = d * y * u - g * f * u + g * l * m - c * y * m - d * l * x + c * f * x,
        b = v * f * u - p * y * u - v * l * m + h * y * m + p * l * x - h * f * x,
        M = p * g * u - v * d * u + v * c * m - h * g * m - p * c * x + h * d * x,
        w = v * d * l - p * g * l - v * c * f + h * g * f + p * c * y - h * d * y,
        S = r * _ + a * b + o * M + s * w;
      if (0 === S) {
        var E = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
        if (!0 === e) throw new Error(E);
        return console.warn(E), this.identity()
      }
      var T = 1 / S;
      return i[0] = _ * T, i[1] = (g * f * s - d * y * s - g * o * m + a * y * m + d * o * x - a * f * x) * T, i[2] = (c * y * s - g * l * s + g * o * u - a * y * u - c * o * x + a * l * x) * T, i[3] = (d * l * s - c * f * s - d * o * u + a * f * u + c * o * m - a * l * m) * T, i[4] = b * T, i[5] = (p * y * s - v * f * s + v * o * m - r * y * m - p * o * x + r * f * x) * T, i[6] = (v * l * s - h * y * s - v * o * u + r * y * u + h * o * x - r * l * x) * T, i[7] = (h * f * s - p * l * s + p * o * u - r * f * u - h * o * m + r * l * m) * T, i[8] = M * T, i[9] = (v * d * s - p * g * s - v * a * m + r * g * m + p * a * x - r * d * x) * T, i[10] = (h * g * s - v * c * s + v * a * u - r * g * u - h * a * x + r * c * x) * T, i[11] = (p * c * s - h * d * s - p * a * u + r * d * u + h * a * m - r * c * m) * T, i[12] = w * T, i[13] = (p * g * o - v * d * o + v * a * f - r * g * f - p * a * y + r * d * y) * T, i[14] = (v * c * o - h * g * o - v * a * l + r * g * l + h * a * y - r * c * y) * T, i[15] = (h * d * o - p * c * o + p * a * l - r * d * l - h * a * f + r * c * f) * T, this
    },
    scale: function(t) {
      var e = this.elements,
        i = t.x,
        n = t.y,
        r = t.z;
      return 1 === i && 1 === n && 1 === r || (e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r), this
    },
    getMaxScaleOnAxis: function() {
      var t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, i, n))
    },
    makeTranslation: function(t, e, i) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
    },
    makeRotationX: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function(t, e) {
      var i = Math.cos(e),
        n = Math.sin(e),
        r = 1 - i,
        a = t.x,
        o = t.y,
        s = t.z,
        h = r * a,
        c = r * o;
      return this.set(h * a + i, h * o - n * s, h * s + n * o, 0, h * o + n * s, c * o + i, c * s - n * a, 0, h * s - n * o, c * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this
    },
    makeScale: function(t, e, i) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
    },
    makeShear: function(t, e, i) {
      return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
    },
    compose: function(t, e, i) {
      var n = this.elements,
        r = e._x,
        a = e._y,
        o = e._z,
        s = e._w,
        h = r + r,
        c = a + a,
        l = o + o,
        u = r * h,
        p = r * c,
        d = r * l,
        f = a * c,
        m = a * l,
        v = o * l,
        g = s * h,
        y = s * c,
        x = s * l,
        _ = i.x,
        b = i.y,
        M = i.z;
      return n[0] = (1 - (f + v)) * _, n[1] = (p + x) * _, n[2] = (d - y) * _, n[3] = 0, n[4] = (p - x) * b, n[5] = (1 - (u + v)) * b, n[6] = (m + g) * b, n[7] = 0, n[8] = (d + y) * M, n[9] = (m - g) * M, n[10] = (1 - (u + f)) * M, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
    },
    decompose: (Z = new at, K = new nt, function(t, e, i) {
      var n = this.elements,
        r = Z.set(n[0], n[1], n[2]).length(),
        a = Z.set(n[4], n[5], n[6]).length(),
        o = Z.set(n[8], n[9], n[10]).length();
      this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], K.copy(this);
      var s = 1 / r,
        h = 1 / a,
        c = 1 / o;
      return K.elements[0] *= s, K.elements[1] *= s, K.elements[2] *= s, K.elements[4] *= h, K.elements[5] *= h, K.elements[6] *= h, K.elements[8] *= c, K.elements[9] *= c, K.elements[10] *= c, e.setFromRotationMatrix(K), i.x = r, i.y = a, i.z = o, this
    }),
    makePerspective: function(t, e, i, n, r, a) {
      void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      var o = this.elements,
        s = 2 * r / (e - t),
        h = 2 * r / (i - n),
        c = (e + t) / (e - t),
        l = (i + n) / (i - n),
        u = -(a + r) / (a - r),
        p = -2 * a * r / (a - r);
      return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = h, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
    },
    makeOrthographic: function(t, e, i, n, r, a) {
      var o = this.elements,
        s = 1 / (e - t),
        h = 1 / (i - n),
        c = 1 / (a - r),
        l = (e + t) * s,
        u = (i + n) * h,
        p = (a + r) * c;
      return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * h, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
    },
    equals: function(t) {
      for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
        if (e[n] !== i[n]) return !1;
      return !0
    },
    fromArray: function(t, e) {
      void 0 === e && (e = 0);
      for (var i = 0; i < 16; i++) this.elements[i] = t[i + e];
      return this
    },
    toArray: function(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var i = this.elements;
      return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
    }
  }), Object.assign(rt, {
    slerp: function(t, e, i, n) {
      return i.copy(t).slerp(e, n)
    },
    slerpFlat: function(t, e, i, n, r, a, o) {
      var s = i[n + 0],
        h = i[n + 1],
        c = i[n + 2],
        l = i[n + 3],
        u = r[a + 0],
        p = r[a + 1],
        d = r[a + 2],
        f = r[a + 3];
      if (l !== f || s !== u || h !== p || c !== d) {
        var m = 1 - o,
          v = s * u + h * p + c * d + l * f,
          g = v >= 0 ? 1 : -1,
          y = 1 - v * v;
        if (y > Number.EPSILON) {
          var x = Math.sqrt(y),
            _ = Math.atan2(x, v * g);
          m = Math.sin(m * _) / x, o = Math.sin(o * _) / x
        }
        var b = o * g;
        if (s = s * m + u * b, h = h * m + p * b, c = c * m + d * b, l = l * m + f * b, m === 1 - o) {
          var M = 1 / Math.sqrt(s * s + h * h + c * c + l * l);
          s *= M, h *= M, c *= M, l *= M
        }
      }
      t[e] = s, t[e + 1] = h, t[e + 2] = c, t[e + 3] = l
    }
  }), Object.defineProperties(rt.prototype, {
    x: {
      get: function() {
        return this._x
      },
      set: function(t) {
        this._x = t, this.onChangeCallback()
      }
    },
    y: {
      get: function() {
        return this._y
      },
      set: function(t) {
        this._y = t, this.onChangeCallback()
      }
    },
    z: {
      get: function() {
        return this._z
      },
      set: function(t) {
        this._z = t, this.onChangeCallback()
      }
    },
    w: {
      get: function() {
        return this._w
      },
      set: function(t) {
        this._w = t, this.onChangeCallback()
      }
    }
  }), Object.assign(rt.prototype, {
    isQuaternion: !0,
    set: function(t, e, i, n) {
      return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._w)
    },
    copy: function(t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
    },
    setFromEuler: function(t, e) {
      if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      var i = t._x,
        n = t._y,
        r = t._z,
        a = t.order,
        o = Math.cos,
        s = Math.sin,
        h = o(i / 2),
        c = o(n / 2),
        l = o(r / 2),
        u = s(i / 2),
        p = s(n / 2),
        d = s(r / 2);
      return "XYZ" === a ? (this._x = u * c * l + h * p * d, this._y = h * p * l - u * c * d, this._z = h * c * d + u * p * l, this._w = h * c * l - u * p * d) : "YXZ" === a ? (this._x = u * c * l + h * p * d, this._y = h * p * l - u * c * d, this._z = h * c * d - u * p * l, this._w = h * c * l + u * p * d) : "ZXY" === a ? (this._x = u * c * l - h * p * d, this._y = h * p * l + u * c * d, this._z = h * c * d + u * p * l, this._w = h * c * l - u * p * d) : "ZYX" === a ? (this._x = u * c * l - h * p * d, this._y = h * p * l + u * c * d, this._z = h * c * d - u * p * l, this._w = h * c * l + u * p * d) : "YZX" === a ? (this._x = u * c * l + h * p * d, this._y = h * p * l + u * c * d, this._z = h * c * d - u * p * l, this._w = h * c * l - u * p * d) : "XZY" === a && (this._x = u * c * l - h * p * d, this._y = h * p * l - u * c * d, this._z = h * c * d + u * p * l, this._w = h * c * l + u * p * d), !1 !== e && this.onChangeCallback(), this
    },
    setFromAxisAngle: function(t, e) {
      var i = e / 2,
        n = Math.sin(i);
      return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this
    },
    setFromRotationMatrix: function(t) {
      var e, i = t.elements,
        n = i[0],
        r = i[4],
        a = i[8],
        o = i[1],
        s = i[5],
        h = i[9],
        c = i[2],
        l = i[6],
        u = i[10],
        p = n + s + u;
      return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (l - h) * e, this._y = (a - c) * e, this._z = (o - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - h) / e, this._x = .25 * e, this._y = (r + o) / e, this._z = (a + c) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a - c) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (h + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (o - r) / e, this._x = (a + c) / e, this._y = (h + l) / e, this._z = .25 * e), this.onChangeCallback(), this
    },
    setFromUnitVectors: function() {
      var t, e = new at;
      return function(i, n) {
        return void 0 === e && (e = new at), (t = i.dot(n) + 1) < 1e-6 ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
      }
    }(),
    angleTo: function(t) {
      return 2 * Math.acos(Math.abs(Y.clamp(this.dot(t), -1, 1)))
    },
    rotateTowards: function(t, e) {
      var i = this.angleTo(t);
      if (0 === i) return this;
      var n = Math.min(1, e / i);
      return this.slerp(t, n), this
    },
    inverse: function() {
      return this.conjugate()
    },
    conjugate: function() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
    },
    dot: function(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    },
    lengthSq: function() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
      var t = this.length();
      return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
    },
    multiply: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
    },
    premultiply: function(t) {
      return this.multiplyQuaternions(t, this)
    },
    multiplyQuaternions: function(t, e) {
      var i = t._x,
        n = t._y,
        r = t._z,
        a = t._w,
        o = e._x,
        s = e._y,
        h = e._z,
        c = e._w;
      return this._x = i * c + a * o + n * h - r * s, this._y = n * c + a * s + r * o - i * h, this._z = r * c + a * h + i * s - n * o, this._w = a * c - i * o - n * s - r * h, this.onChangeCallback(), this
    },
    slerp: function(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      var i = this._x,
        n = this._y,
        r = this._z,
        a = this._w,
        o = a * t._w + i * t._x + n * t._y + r * t._z;
      if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
      var s = 1 - o * o;
      if (s <= Number.EPSILON) {
        var h = 1 - e;
        return this._w = h * a + e * this._w, this._x = h * i + e * this._x, this._y = h * n + e * this._y, this._z = h * r + e * this._z, this.normalize()
      }
      var c = Math.sqrt(s),
        l = Math.atan2(c, o),
        u = Math.sin((1 - e) * l) / c,
        p = Math.sin(e * l) / c;
      return this._w = a * u + this._w * p, this._x = i * u + this._x * p, this._y = n * u + this._y * p, this._z = r * u + this._z * p, this.onChangeCallback(), this
    },
    equals: function(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
    },
    onChange: function(t) {
      return this.onChangeCallback = t, this
    },
    onChangeCallback: function() {}
  }), Object.assign(at.prototype, {
    isVector3: !0,
    set: function(t, e, i) {
      return this.x = t, this.y = e, this.z = i, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this.z = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setZ: function(t) {
      return this.z = t, this
    },
    setComponent: function(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this
    },
    add: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this.z += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this.z -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
    },
    multiply: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this.z *= t, this
    },
    multiplyVectors: function(t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
    },
    applyEuler: ($ = new rt, function(t) {
      return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion($.setFromEuler(t))
    }),
    applyAxisAngle: function() {
      var t = new rt;
      return function(e, i) {
        return this.applyQuaternion(t.setFromAxisAngle(e, i))
      }
    }(),
    applyMatrix3: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements;
      return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
    },
    applyMatrix4: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
      return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a, this
    },
    applyQuaternion: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.x,
        a = t.y,
        o = t.z,
        s = t.w,
        h = s * e + a * n - o * i,
        c = s * i + o * e - r * n,
        l = s * n + r * i - a * e,
        u = -r * e - a * i - o * n;
      return this.x = h * s + u * -r + c * -o - l * -a, this.y = c * s + u * -a + l * -r - h * -o, this.z = l * s + u * -o + h * -a - c * -r, this
    },
    project: function(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    },
    unproject: function() {
      var t = new nt;
      return function(e) {
        return this.applyMatrix4(t.getInverse(e.projectionMatrix)).applyMatrix4(e.matrixWorld)
      }
    }(),
    transformDirection: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements;
      return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
    },
    divide: function(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
    },
    divideScalar: function(t) {
      return this.multiplyScalar(1 / t)
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
    },
    clampScalar: function() {
      var t = new at,
        e = new at;
      return function(i, n) {
        return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e)
      }
    }(),
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    cross: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
    },
    crossVectors: function(t, e) {
      var i = t.x,
        n = t.y,
        r = t.z,
        a = e.x,
        o = e.y,
        s = e.z;
      return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
    },
    projectOnVector: function(t) {
      var e = t.dot(this) / t.lengthSq();
      return this.copy(t).multiplyScalar(e)
    },
    projectOnPlane: function() {
      var t = new at;
      return function(e) {
        return t.copy(this).projectOnVector(e), this.sub(t)
      }
    }(),
    reflect: function() {
      var t = new at;
      return function(e) {
        return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
      }
    }(),
    angleTo: function(t) {
      var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
      return Math.acos(Y.clamp(e, -1, 1))
    },
    distanceTo: function(t) {
      return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
      var e = this.x - t.x,
        i = this.y - t.y,
        n = this.z - t.z;
      return e * e + i * i + n * n
    },
    manhattanDistanceTo: function(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    },
    setFromSpherical: function(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    },
    setFromSphericalCoords: function(t, e, i) {
      var n = Math.sin(e) * t;
      return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this
    },
    setFromCylindrical: function(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    },
    setFromCylindricalCoords: function(t, e, i) {
      return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
    },
    setFromMatrixPosition: function(t) {
      var e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this
    },
    setFromMatrixScale: function(t) {
      var e = this.setFromMatrixColumn(t, 0).length(),
        i = this.setFromMatrixColumn(t, 1).length(),
        n = this.setFromMatrixColumn(t, 2).length();
      return this.x = e, this.y = i, this.z = n, this
    },
    setFromMatrixColumn: function(t, e) {
      return this.fromArray(t.elements, 4 * e)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
    },
    fromBufferAttribute: function(t, e, i) {
      return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
    }
  }), Object.assign(ot.prototype, {
    isMatrix3: !0,
    set: function(t, e, i, n, r, a, o, s, h) {
      var c = this.elements;
      return c[0] = t, c[1] = n, c[2] = o, c[3] = e, c[4] = r, c[5] = s, c[6] = i, c[7] = a, c[8] = h, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    },
    clone: function() {
      return (new this.constructor).fromArray(this.elements)
    },
    copy: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
    },
    setFromMatrix4: function(t) {
      var e = t.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    },
    applyToBufferAttribute: function() {
      var t = new at;
      return function(e) {
        for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z);
        return e
      }
    }(),
    multiply: function(t) {
      return this.multiplyMatrices(this, t)
    },
    premultiply: function(t) {
      return this.multiplyMatrices(t, this)
    },
    multiplyMatrices: function(t, e) {
      var i = t.elements,
        n = e.elements,
        r = this.elements,
        a = i[0],
        o = i[3],
        s = i[6],
        h = i[1],
        c = i[4],
        l = i[7],
        u = i[2],
        p = i[5],
        d = i[8],
        f = n[0],
        m = n[3],
        v = n[6],
        g = n[1],
        y = n[4],
        x = n[7],
        _ = n[2],
        b = n[5],
        M = n[8];
      return r[0] = a * f + o * g + s * _, r[3] = a * m + o * y + s * b, r[6] = a * v + o * x + s * M, r[1] = h * f + c * g + l * _, r[4] = h * m + c * y + l * b, r[7] = h * v + c * x + l * M, r[2] = u * f + p * g + d * _, r[5] = u * m + p * y + d * b, r[8] = u * v + p * x + d * M, this
    },
    multiplyScalar: function(t) {
      var e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
    },
    determinant: function() {
      var t = this.elements,
        e = t[0],
        i = t[1],
        n = t[2],
        r = t[3],
        a = t[4],
        o = t[5],
        s = t[6],
        h = t[7],
        c = t[8];
      return e * a * c - e * o * h - i * r * c + i * o * s + n * r * h - n * a * s
    },
    getInverse: function(t, e) {
      t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
      var i = t.elements,
        n = this.elements,
        r = i[0],
        a = i[1],
        o = i[2],
        s = i[3],
        h = i[4],
        c = i[5],
        l = i[6],
        u = i[7],
        p = i[8],
        d = p * h - c * u,
        f = c * l - p * s,
        m = u * s - h * l,
        v = r * d + a * f + o * m;
      if (0 === v) {
        var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
        if (!0 === e) throw new Error(g);
        return console.warn(g), this.identity()
      }
      var y = 1 / v;
      return n[0] = d * y, n[1] = (o * u - p * a) * y, n[2] = (c * a - o * h) * y, n[3] = f * y, n[4] = (p * r - o * l) * y, n[5] = (o * s - c * r) * y, n[6] = m * y, n[7] = (a * l - u * r) * y, n[8] = (h * r - a * s) * y, this
    },
    transpose: function() {
      var t, e = this.elements;
      return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
    },
    getNormalMatrix: function(t) {
      return this.setFromMatrix4(t).getInverse(this).transpose()
    },
    transposeIntoArray: function(t) {
      var e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
    },
    setUvTransform: function(t, e, i, n, r, a, o) {
      var s = Math.cos(r),
        h = Math.sin(r);
      this.set(i * s, i * h, -i * (s * a + h * o) + a + t, -n * h, n * s, -n * (-h * a + s * o) + o + e, 0, 0, 1)
    },
    scale: function(t, e) {
      var i = this.elements;
      return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
    },
    rotate: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t),
        n = this.elements,
        r = n[0],
        a = n[3],
        o = n[6],
        s = n[1],
        h = n[4],
        c = n[7];
      return n[0] = e * r + i * s, n[3] = e * a + i * h, n[6] = e * o + i * c, n[1] = -i * r + e * s, n[4] = -i * a + e * h, n[7] = -i * o + e * c, this
    },
    translate: function(t, e) {
      var i = this.elements;
      return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
    },
    equals: function(t) {
      for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
        if (e[n] !== i[n]) return !1;
      return !0
    },
    fromArray: function(t, e) {
      void 0 === e && (e = 0);
      for (var i = 0; i < 9; i++) this.elements[i] = t[i + e];
      return this
    },
    toArray: function(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var i = this.elements;
      return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
    }
  });
  var st, ht, ct, lt = {
      getDataURL: function(t) {
        var e;
        if (t instanceof HTMLCanvasElement) e = t;
        else {
          (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width, e.height = t.height;
          var i = e.getContext("2d");
          t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height)
        }
        return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
      }
    },
    ut = 0;

  function pt(t, e, i, n, r, a, o, s, h, c) {
    Object.defineProperty(this, "id", {
      value: ut++
    }), this.uuid = Y.generateUUID(), this.name = "", this.image = void 0 !== t ? t : pt.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : pt.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : f, this.wrapT = void 0 !== n ? n : f, this.magFilter = void 0 !== r ? r : x, this.minFilter = void 0 !== a ? a : b, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== o ? o : C, this.type = void 0 !== s ? s : M, this.offset = new J(0, 0), this.repeat = new J(1, 1), this.center = new J(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ot, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== c ? c : X, this.version = 0, this.onUpdate = null
  }

  function dt(t, e, i, n) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
  }

  function ft(t, e, i) {
    this.width = t, this.height = e, this.scissor = new dt(0, 0, t, e), this.scissorTest = !1, this.viewport = new dt(0, 0, t, e), void 0 === (i = i || {}).minFilter && (i.minFilter = x), this.texture = new pt(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.generateMipmaps = void 0 === i.generateMipmaps || i.generateMipmaps, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
  }

  function mt(t, e, i) {
    ft.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
  }

  function vt(t, e, i, n, r, a, o, s, h, c, l, u) {
    pt.call(this, null, a, o, s, h, c, n, r, l, u), this.image = {
      data: t,
      width: e,
      height: i
    }, this.magFilter = void 0 !== h ? h : v, this.minFilter = void 0 !== c ? c : v, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
  }

  function gt(t, e) {
    this.min = void 0 !== t ? t : new at(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new at(-1 / 0, -1 / 0, -1 / 0)
  }

  function yt(t, e) {
    this.center = void 0 !== t ? t : new at, this.radius = void 0 !== e ? e : 0
  }

  function xt(t, e) {
    this.normal = void 0 !== t ? t : new at(1, 0, 0), this.constant = void 0 !== e ? e : 0
  }
  pt.DEFAULT_IMAGE = void 0, pt.DEFAULT_MAPPING = s, pt.prototype = Object.assign(Object.create(e.prototype), {
    constructor: pt,
    isTexture: !0,
    updateMatrix: function() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
    },
    toJSON: function(t) {
      var e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      var i = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY
      };
      if (void 0 !== this.image) {
        var n = this.image;
        if (void 0 === n.uuid && (n.uuid = Y.generateUUID()), !e && void 0 === t.images[n.uuid]) {
          var r;
          if (Array.isArray(n)) {
            r = [];
            for (var a = 0, o = n.length; a < o; a++) r.push(lt.getDataURL(n[a]))
          } else r = lt.getDataURL(n);
          t.images[n.uuid] = {
            uuid: n.uuid,
            url: r
          }
        }
        i.image = n.uuid
      }
      return e || (t.textures[this.uuid] = i), i
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    },
    transformUv: function(t) {
      if (this.mapping !== s) return t;
      if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
        case d:
          t.x = t.x - Math.floor(t.x);
          break;
        case f:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case m:
          1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
      }
      if (t.y < 0 || t.y > 1) switch (this.wrapT) {
        case d:
          t.y = t.y - Math.floor(t.y);
          break;
        case f:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case m:
          1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
      }
      return this.flipY && (t.y = 1 - t.y), t
    }
  }), Object.defineProperty(pt.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(dt.prototype, {
    isVector4: !0,
    set: function(t, e, i, n) {
      return this.x = t, this.y = e, this.z = i, this.w = n, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this.z = t, this.w = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setZ: function(t) {
      return this.z = t, this
    },
    setW: function(t) {
      return this.w = t, this
    },
    setComponent: function(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z, this.w)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
    },
    add: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
    },
    applyMatrix4: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = this.w,
        a = t.elements;
      return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this
    },
    divideScalar: function(t) {
      return this.multiplyScalar(1 / t)
    },
    setAxisAngleFromQuaternion: function(t) {
      this.w = 2 * Math.acos(t.w);
      var e = Math.sqrt(1 - t.w * t.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
    },
    setAxisAngleFromRotationMatrix: function(t) {
      var e, i, n, r, a = .01,
        o = .1,
        s = t.elements,
        h = s[0],
        c = s[4],
        l = s[8],
        u = s[1],
        p = s[5],
        d = s[9],
        f = s[2],
        m = s[6],
        v = s[10];
      if (Math.abs(c - u) < a && Math.abs(l - f) < a && Math.abs(d - m) < a) {
        if (Math.abs(c + u) < o && Math.abs(l + f) < o && Math.abs(d + m) < o && Math.abs(h + p + v - 3) < o) return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        var g = (h + 1) / 2,
          y = (p + 1) / 2,
          x = (v + 1) / 2,
          _ = (c + u) / 4,
          b = (l + f) / 4,
          M = (d + m) / 4;
        return g > y && g > x ? g < a ? (i = 0, n = .707106781, r = .707106781) : (n = _ / (i = Math.sqrt(g)), r = b / i) : y > x ? y < a ? (i = .707106781, n = 0, r = .707106781) : (i = _ / (n = Math.sqrt(y)), r = M / n) : x < a ? (i = .707106781, n = .707106781, r = 0) : (i = b / (r = Math.sqrt(x)), n = M / r), this.set(i, n, r, e), this
      }
      var w = Math.sqrt((m - d) * (m - d) + (l - f) * (l - f) + (u - c) * (u - c));
      return Math.abs(w) < .001 && (w = 1), this.x = (m - d) / w, this.y = (l - f) / w, this.z = (u - c) / w, this.w = Math.acos((h + p + v - 1) / 2), this
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
    },
    clampScalar: function() {
      var t, e;
      return function(i, n) {
        return void 0 === t && (t = new dt, e = new dt), t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e)
      }
    }(),
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
    },
    fromBufferAttribute: function(t, e, i) {
      return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
    }
  }), ft.prototype = Object.assign(Object.create(e.prototype), {
    constructor: ft,
    isWebGLRenderTarget: !0,
    setSize: function(t, e) {
      this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), mt.prototype = Object.create(ft.prototype), mt.prototype.constructor = mt, mt.prototype.isWebGLRenderTargetCube = !0, vt.prototype = Object.create(pt.prototype), vt.prototype.constructor = vt, vt.prototype.isDataTexture = !0, Object.assign(gt.prototype, {
    isBox3: !0,
    set: function(t, e) {
      return this.min.copy(t), this.max.copy(e), this
    },
    setFromArray: function(t) {
      for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, h = t.length; s < h; s += 3) {
        var c = t[s],
          l = t[s + 1],
          u = t[s + 2];
        c < e && (e = c), l < i && (i = l), u < n && (n = u), c > r && (r = c), l > a && (a = l), u > o && (o = u)
      }
      return this.min.set(e, i, n), this.max.set(r, a, o), this
    },
    setFromBufferAttribute: function(t) {
      for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, h = t.count; s < h; s++) {
        var c = t.getX(s),
          l = t.getY(s),
          u = t.getZ(s);
        c < e && (e = c), l < i && (i = l), u < n && (n = u), c > r && (r = c), l > a && (a = l), u > o && (o = u)
      }
      return this.min.set(e, i, n), this.max.set(r, a, o), this
    },
    setFromPoints: function(t) {
      this.makeEmpty();
      for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
      return this
    },
    setFromCenterAndSize: function() {
      var t = new at;
      return function(e, i) {
        var n = t.copy(i).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
      }
    }(),
    setFromObject: function(t) {
      return this.makeEmpty(), this.expandByObject(t)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    getCenter: function(t) {
      return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new at), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(t) {
      return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new at), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    },
    expandByPoint: function(t) {
      return this.min.min(t), this.max.max(t), this
    },
    expandByVector: function(t) {
      return this.min.sub(t), this.max.add(t), this
    },
    expandByScalar: function(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this
    },
    expandByObject: function() {
      var t, e, i, n = new at;

      function r(r) {
        var a = r.geometry;
        if (void 0 !== a)
          if (a.isGeometry) {
            var o = a.vertices;
            for (e = 0, i = o.length; e < i; e++) n.copy(o[e]), n.applyMatrix4(r.matrixWorld), t.expandByPoint(n)
          } else if (a.isBufferGeometry) {
          var s = a.attributes.position;
          if (void 0 !== s)
            for (e = 0, i = s.count; e < i; e++) n.fromBufferAttribute(s, e).applyMatrix4(r.matrixWorld), t.expandByPoint(n)
        }
      }
      return function(e) {
        return t = this, e.updateMatrixWorld(!0), e.traverse(r), this
      }
    }(),
    containsPoint: function(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
    },
    containsBox: function(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    },
    getParameter: function(t, e) {
      return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new at), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
    },
    intersectsSphere: (ht = new at, function(t) {
      return this.clampPoint(t.center, ht), ht.distanceToSquared(t.center) <= t.radius * t.radius
    }),
    intersectsPlane: function(t) {
      var e, i;
      return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
    },
    intersectsTriangle: function() {
      var t = new at,
        e = new at,
        i = new at,
        n = new at,
        r = new at,
        a = new at,
        o = new at,
        s = new at,
        h = new at,
        c = new at;

      function l(n) {
        var r, a;
        for (r = 0, a = n.length - 3; r <= a; r += 3) {
          o.fromArray(n, r);
          var s = h.x * Math.abs(o.x) + h.y * Math.abs(o.y) + h.z * Math.abs(o.z),
            c = t.dot(o),
            l = e.dot(o),
            u = i.dot(o);
          if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > s) return !1
        }
        return !0
      }
      return function(o) {
        if (this.isEmpty()) return !1;
        this.getCenter(s), h.subVectors(this.max, s), t.subVectors(o.a, s), e.subVectors(o.b, s), i.subVectors(o.c, s), n.subVectors(e, t), r.subVectors(i, e), a.subVectors(t, i);
        var u = [0, -n.z, n.y, 0, -r.z, r.y, 0, -a.z, a.y, n.z, 0, -n.x, r.z, 0, -r.x, a.z, 0, -a.x, -n.y, n.x, 0, -r.y, r.x, 0, -a.y, a.x, 0];
        return !!l(u) && !!l(u = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (c.crossVectors(n, r), l(u = [c.x, c.y, c.z]))
      }
    }(),
    clampPoint: function(t, e) {
      return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new at), e.copy(t).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
      var t = new at;
      return function(e) {
        return t.copy(e).clamp(this.min, this.max).sub(e).length()
      }
    }(),
    getBoundingSphere: function() {
      var t = new at;
      return function(e) {
        return void 0 === e && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), e = new yt), this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e
      }
    }(),
    intersect: function(t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
    },
    union: function(t) {
      return this.min.min(t.min), this.max.max(t.max), this
    },
    applyMatrix4: (st = [new at, new at, new at, new at, new at, new at, new at, new at], function(t) {
      return this.isEmpty() || (st[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), st[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), st[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), st[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), st[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), st[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), st[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), st[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(st)), this
    }),
    translate: function(t) {
      return this.min.add(t), this.max.add(t), this
    },
    equals: function(t) {
      return t.min.equals(this.min) && t.max.equals(this.max)
    }
  }), Object.assign(yt.prototype, {
    set: function(t, e) {
      return this.center.copy(t), this.radius = e, this
    },
    setFromPoints: (ct = new gt, function(t, e) {
      var i = this.center;
      void 0 !== e ? i.copy(e) : ct.setFromPoints(t).getCenter(i);
      for (var n = 0, r = 0, a = t.length; r < a; r++) n = Math.max(n, i.distanceToSquared(t[r]));
      return this.radius = Math.sqrt(n), this
    }),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.center.x = t.center.x, this.center.y = t.center.y, this.center.z = t.center.z, this.radius = t.radius, this
    },
    empty: function() {
      return this.radius <= 0
    },
    containsPoint: function(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(t) {
      return t.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(t) {
      var e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e
    },
    intersectsBox: function(t) {
      return t.intersectsSphere(this)
    },
    intersectsPlane: function(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    },
    clampPoint: function(t, e) {
      var i = this.center.distanceToSquared(t);
      return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new at), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
    },
    getBoundingBox: function(t) {
      return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new gt), t.set(this.center, this.center), t.expandByScalar(this.radius), t
    },
    applyMatrix4: function(t) {
      return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
    },
    translate: function(t) {
      return this.center.add(t), this
    },
    equals: function(t) {
      return t.center.equals(this.center) && t.radius === this.radius
    }
  }), Object.assign(xt.prototype, {
    set: function(t, e) {
      return this.normal.copy(t), this.constant = e, this
    },
    setComponents: function(t, e, i, n) {
      return this.normal.set(t, e, i), this.constant = n, this
    },
    setFromNormalAndCoplanarPoint: function(t, e) {
      return this.normal.copy(t), this.constant = -e.dot(this.normal), this
    },
    setFromCoplanarPoints: function() {
      var t = new at,
        e = new at;
      return function(i, n, r) {
        var a = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize();
        return this.setFromNormalAndCoplanarPoint(a, i), this
      }
    }(),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.normal.copy(t.normal), this.constant = t.constant, this
    },
    normalize: function() {
      var t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), this.constant *= t, this
    },
    negate: function() {
      return this.constant *= -1, this.normal.negate(), this
    },
    distanceToPoint: function(t) {
      return this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z + this.constant
    },
    distanceToSphere: function(t) {
      return this.distanceToPoint(t.center) - t.radius
    },
    projectPoint: function(t, e) {
      return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new at), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
    },
    intersectLine: function() {
      var t = new at;
      return function(e, i) {
        void 0 === i && (console.warn("THREE.Plane: .intersectLine() target is now required"), i = new at);
        var n = e.delta(t),
          r = this.normal.dot(n);
        if (0 === r) return 0 === this.distanceToPoint(e.start) ? i.copy(e.start) : void 0;
        var a = -(e.start.dot(this.normal) + this.constant) / r;
        return a < 0 || a > 1 ? void 0 : i.copy(n).multiplyScalar(a).add(e.start)
      }
    }(),
    intersectsLine: function(t) {
      var e = this.distanceToPoint(t.start),
        i = this.distanceToPoint(t.end);
      return e < 0 && i > 0 || i < 0 && e > 0
    },
    intersectsBox: function(t) {
      return t.intersectsPlane(this)
    },
    intersectsSphere: function(t) {
      return t.intersectsPlane(this)
    },
    coplanarPoint: function(t) {
      return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new at), t.copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function() {
      var t = new at,
        e = new ot;
      return function(i, n) {
        var r = n || e.getNormalMatrix(i),
          a = this.coplanarPoint(t).applyMatrix4(i),
          o = this.normal.applyMatrix3(r).normalize();
        return this.constant = -a.dot(o), this
      }
    }(),
    translate: function(t) {
      return this.constant -= t.dot(this.normal), this
    },
    equals: function(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant
    }
  });
  var _t, bt = new yt;

  function Mt(t, e, i, n, r, a) {
    this.planes = [void 0 !== t ? t : new xt, void 0 !== e ? e : new xt, void 0 !== i ? i : new xt, void 0 !== n ? n : new xt, void 0 !== r ? r : new xt, void 0 !== a ? a : new xt]
  }
  Object.assign(Mt.prototype, {
    set: function(t, e, i, n, r, a) {
      var o = this.planes;
      return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
      return this
    },
    setFromMatrix: function(t) {
      var e = this.planes,
        i = t.elements,
        n = i[0],
        r = i[1],
        a = i[2],
        o = i[3],
        s = i[4],
        h = i[5],
        c = i[6],
        l = i[7],
        u = i[8],
        p = i[9],
        d = i[10],
        f = i[11],
        m = i[12],
        v = i[13],
        g = i[14],
        y = i[15];
      return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n, l + s, f + u, y + m).normalize(), e[2].setComponents(o + r, l + h, f + p, y + v).normalize(), e[3].setComponents(o - r, l - h, f - p, y - v).normalize(), e[4].setComponents(o - a, l - c, f - d, y - g).normalize(), e[5].setComponents(o + a, l + c, f + d, y + g).normalize(), this
    },
    intersectsObject: function(t) {
      var e = t.geometry;
      if (!e) return !1;
      null === e.boundingSphere && e.computeBoundingSphere();
      var i = bt;
      return i.center.x = e.boundingSphere.center.x, i.center.y = e.boundingSphere.center.y, i.center.z = e.boundingSphere.center.z, i.radius = e.boundingSphere.radius, i.applyMatrix4(t.matrixWorld), this.intersectsSphere(i)
    },
    intersectsSprite: function(t) {
      var e = bt;
      return e.center.x = 0, e.center.y = 0, e.center.z = 0, e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
    },
    intersectsSphere: function(t) {
      for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++)
        if (e[r].distanceToPoint(i) < n) return !1;
      return !0
    },
    intersectsBox: (_t = new at, function(t) {
      for (var e = this.planes, i = 0; i < 6; i++) {
        var n = e[i];
        if (_t.x = n.normal.x > 0 ? t.max.x : t.min.x, _t.y = n.normal.y > 0 ? t.max.y : t.min.y, _t.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(_t) < 0) return !1
      }
      return !0
    }),
    containsPoint: function(t) {
      for (var e = this.planes, i = 0; i < 6; i++)
        if (e[i].distanceToPoint(t) < 0) return !1;
      return !0
    }
  });
  var wt, St, Et, Tt = {
      alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
      alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
      alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
      aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
      aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif\n",
      begin_vertex: "\nvec3 transformed = vec3( position );\n",
      beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
      bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit(  ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit(  );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
      bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
      clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
      clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
      clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif\n",
      clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
      color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif\n",
      color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
      color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
      color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif\n",
      common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
      cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
      defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
      displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
      displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
      emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
      emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
      encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
      encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n",
      envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
      envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
      envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
      envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance(  const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance(  const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
      envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
      fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif\n",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif\n",
      fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
      fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
      gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
      lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
      lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif\n",
      lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
      lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\n\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
      lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
      lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
      lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\n\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
      lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t0, 1,\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
      lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
      lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance(  geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance(  geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance(  geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
      lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
      logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif\n",
      logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif\n",
      logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif\n",
      logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
      map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
      map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
      map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
      metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
      metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif\n",
      morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
      morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif\n",
      morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
      normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
      normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
      normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n",
      packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;\nconst float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\n\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
      premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
      project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
      dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
      dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
      roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
      roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif\n",
      shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\n\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
      shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
      shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
      shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
      skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif\n",
      skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
      skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
      skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
      specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif\n",
      specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif\n",
      tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
      tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
      uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif\n",
      uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
      uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif\n",
      uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif\n",
      uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif\n",
      uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif\n",
      worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
      background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n}\n",
      background_vert: "varying vec2 vUv;\nvoid main() {\n\tvUv = uv;\n\tgl_Position = vec4( position, 1.0 );\n\tgl_Position.z = 1.0;\n}\n",
      cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
      cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
      depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
      depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
      distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
      distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
      equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
      equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
      linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
      meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\tvec4 matcapColor = texture2D( matcap, uv );\n\tmatcapColor = matcapTexelToLinear( matcapColor );\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}\n",
      meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
      normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
      points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
      shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
      shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
    },
    At = {
      merge: function(t) {
        for (var e = {}, i = 0, n = t.length; i < n; i++) {
          var r = this.clone(t[i]);
          for (var a in r) e[a] = r[a]
        }
        return e
      },
      clone: function(t) {
        var e = {};
        for (var i in t) {
          var n = e[i] = {},
            r = t[i];
          for (var a in r) {
            var o = r[a];
            o && (o.isColor || o.isMatrix3 || o.isMatrix4 || o.isVector2 || o.isVector3 || o.isVector4 || o.isTexture) ? n[a] = o.clone() : Array.isArray(o) ? n[a] = o.slice() : n[a] = o
          }
        }
        return e
      }
    },
    Lt = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };

  function Ct(t, e, i) {
    return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
  }
  Object.assign(Ct.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function(t) {
      return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
    },
    setScalar: function(t) {
      return this.r = t, this.g = t, this.b = t, this
    },
    setHex: function(t) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
    },
    setRGB: function(t, e, i) {
      return this.r = t, this.g = e, this.b = i, this
    },
    setHSL: function() {
      function t(t, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
      }
      return function(e, i, n) {
        if (e = Y.euclideanModulo(e, 1), i = Y.clamp(i, 0, 1), n = Y.clamp(n, 0, 1), 0 === i) this.r = this.g = this.b = n;
        else {
          var r = n <= .5 ? n * (1 + i) : n + i - n * i,
            a = 2 * n - r;
          this.r = t(a, r, e + 1 / 3), this.g = t(a, r, e), this.b = t(a, r, e - 1 / 3)
        }
        return this
      }
    }(),
    setStyle: function(t) {
      function e(e) {
        void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
      }
      var i;
      if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
        var n, r = i[1],
          a = i[2];
        switch (r) {
          case "rgb":
          case "rgba":
            if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
            if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
            break;
          case "hsl":
          case "hsla":
            if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              var o = parseFloat(n[1]) / 360,
                s = parseInt(n[2], 10) / 100,
                h = parseInt(n[3], 10) / 100;
              return e(n[5]), this.setHSL(o, s, h)
            }
        }
      } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
        var c, l = (c = i[1]).length;
        if (3 === l) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
        if (6 === l) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
      }
      return t && t.length > 0 && (void 0 !== (c = Lt[t]) ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + t)), this
    },
    clone: function() {
      return new this.constructor(this.r, this.g, this.b)
    },
    copy: function(t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this
    },
    copyGammaToLinear: function(t, e) {
      return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
    },
    copyLinearToGamma: function(t, e) {
      void 0 === e && (e = 2);
      var i = e > 0 ? 1 / e : 1;
      return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
    },
    convertGammaToLinear: function(t) {
      return this.copyGammaToLinear(this, t), this
    },
    convertLinearToGamma: function(t) {
      return this.copyLinearToGamma(this, t), this
    },
    copySRGBToLinear: function() {
      function t(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
      }
      return function(e) {
        return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
      }
    }(),
    copyLinearToSRGB: function() {
      function t(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
      }
      return function(e) {
        return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
      }
    }(),
    convertSRGBToLinear: function() {
      return this.copySRGBToLinear(this), this
    },
    convertLinearToSRGB: function() {
      return this.copyLinearToSRGB(this), this
    },
    getHex: function() {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b
    },
    getHexString: function() {
      return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function(t) {
      void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
        h: 0,
        s: 0,
        l: 0
      });
      var e, i, n = this.r,
        r = this.g,
        a = this.b,
        o = Math.max(n, r, a),
        s = Math.min(n, r, a),
        h = (s + o) / 2;
      if (s === o) e = 0, i = 0;
      else {
        var c = o - s;
        switch (i = h <= .5 ? c / (o + s) : c / (2 - o - s), o) {
          case n:
            e = (r - a) / c + (r < a ? 6 : 0);
            break;
          case r:
            e = (a - n) / c + 2;
            break;
          case a:
            e = (n - r) / c + 4
        }
        e /= 6
      }
      return t.h = e, t.s = i, t.l = h, t
    },
    getStyle: function() {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: (Et = {}, function(t, e, i) {
      return this.getHSL(Et), Et.h += t, Et.s += e, Et.l += i, this.setHSL(Et.h, Et.s, Et.l), this
    }),
    add: function(t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this
    },
    addColors: function(t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
    },
    addScalar: function(t) {
      return this.r += t, this.g += t, this.b += t, this
    },
    sub: function(t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
    },
    multiply: function(t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
    },
    multiplyScalar: function(t) {
      return this.r *= t, this.g *= t, this.b *= t, this
    },
    lerp: function(t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
    },
    lerpHSL: (wt = {
      h: 0,
      s: 0,
      l: 0
    }, St = {
      h: 0,
      s: 0,
      l: 0
    }, function(t, e) {
      this.getHSL(wt), t.getHSL(St);
      var i = Y.lerp(wt.h, St.h, e),
        n = Y.lerp(wt.s, St.s, e),
        r = Y.lerp(wt.l, St.l, e);
      return this.setHSL(i, n, r), this
    }),
    equals: function(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
    },
    toJSON: function() {
      return this.getHex()
    }
  });
  var Pt = {
      common: {
        diffuse: {
          value: new Ct(15658734)
        },
        opacity: {
          value: 1
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new ot
        },
        alphaMap: {
          value: null
        }
      },
      specularmap: {
        specularMap: {
          value: null
        }
      },
      envmap: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        },
        reflectivity: {
          value: 1
        },
        refractionRatio: {
          value: .98
        },
        maxMipLevel: {
          value: 0
        }
      },
      aomap: {
        aoMap: {
          value: null
        },
        aoMapIntensity: {
          value: 1
        }
      },
      lightmap: {
        lightMap: {
          value: null
        },
        lightMapIntensity: {
          value: 1
        }
      },
      emissivemap: {
        emissiveMap: {
          value: null
        }
      },
      bumpmap: {
        bumpMap: {
          value: null
        },
        bumpScale: {
          value: 1
        }
      },
      normalmap: {
        normalMap: {
          value: null
        },
        normalScale: {
          value: new J(1, 1)
        }
      },
      displacementmap: {
        displacementMap: {
          value: null
        },
        displacementScale: {
          value: 1
        },
        displacementBias: {
          value: 0
        }
      },
      roughnessmap: {
        roughnessMap: {
          value: null
        }
      },
      metalnessmap: {
        metalnessMap: {
          value: null
        }
      },
      gradientmap: {
        gradientMap: {
          value: null
        }
      },
      fog: {
        fogDensity: {
          value: 25e-5
        },
        fogNear: {
          value: 1
        },
        fogFar: {
          value: 2e3
        },
        fogColor: {
          value: new Ct(16777215)
        }
      },
      lights: {
        ambientLightColor: {
          value: []
        },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        directionalShadowMap: {
          value: []
        },
        directionalShadowMatrix: {
          value: []
        },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        spotShadowMap: {
          value: []
        },
        spotShadowMatrix: {
          value: []
        },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {}
          }
        },
        pointShadowMap: {
          value: []
        },
        pointShadowMatrix: {
          value: []
        },
        hemisphereLights: {
          value: [],
          properties: {
            direction: {},
            skyColor: {},
            groundColor: {}
          }
        },
        rectAreaLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            width: {},
            height: {}
          }
        }
      },
      points: {
        diffuse: {
          value: new Ct(15658734)
        },
        opacity: {
          value: 1
        },
        size: {
          value: 1
        },
        scale: {
          value: 1
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new ot
        }
      },
      sprite: {
        diffuse: {
          value: new Ct(15658734)
        },
        opacity: {
          value: 1
        },
        center: {
          value: new J(.5, .5)
        },
        rotation: {
          value: 0
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new ot
        }
      }
    },
    Rt = {
      basic: {
        uniforms: At.merge([Pt.common, Pt.specularmap, Pt.envmap, Pt.aomap, Pt.lightmap, Pt.fog]),
        vertexShader: Tt.meshbasic_vert,
        fragmentShader: Tt.meshbasic_frag
      },
      lambert: {
        uniforms: At.merge([Pt.common, Pt.specularmap, Pt.envmap, Pt.aomap, Pt.lightmap, Pt.emissivemap, Pt.fog, Pt.lights, {
          emissive: {
            value: new Ct(0)
          }
        }]),
        vertexShader: Tt.meshlambert_vert,
        fragmentShader: Tt.meshlambert_frag
      },
      phong: {
        uniforms: At.merge([Pt.common, Pt.specularmap, Pt.envmap, Pt.aomap, Pt.lightmap, Pt.emissivemap, Pt.bumpmap, Pt.normalmap, Pt.displacementmap, Pt.gradientmap, Pt.fog, Pt.lights, {
          emissive: {
            value: new Ct(0)
          },
          specular: {
            value: new Ct(1118481)
          },
          shininess: {
            value: 30
          }
        }]),
        vertexShader: Tt.meshphong_vert,
        fragmentShader: Tt.meshphong_frag
      },
      standard: {
        uniforms: At.merge([Pt.common, Pt.envmap, Pt.aomap, Pt.lightmap, Pt.emissivemap, Pt.bumpmap, Pt.normalmap, Pt.displacementmap, Pt.roughnessmap, Pt.metalnessmap, Pt.fog, Pt.lights, {
          emissive: {
            value: new Ct(0)
          },
          roughness: {
            value: .5
          },
          metalness: {
            value: .5
          },
          envMapIntensity: {
            value: 1
          }
        }]),
        vertexShader: Tt.meshphysical_vert,
        fragmentShader: Tt.meshphysical_frag
      },
      matcap: {
        uniforms: At.merge([Pt.common, Pt.bumpmap, Pt.normalmap, Pt.displacementmap, Pt.fog, {
          matcap: {
            value: null
          }
        }]),
        vertexShader: Tt.meshmatcap_vert,
        fragmentShader: Tt.meshmatcap_frag
      },
      points: {
        uniforms: At.merge([Pt.points, Pt.fog]),
        vertexShader: Tt.points_vert,
        fragmentShader: Tt.points_frag
      },
      dashed: {
        uniforms: At.merge([Pt.common, Pt.fog, {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }]),
        vertexShader: Tt.linedashed_vert,
        fragmentShader: Tt.linedashed_frag
      },
      depth: {
        uniforms: At.merge([Pt.common, Pt.displacementmap]),
        vertexShader: Tt.depth_vert,
        fragmentShader: Tt.depth_frag
      },
      normal: {
        uniforms: At.merge([Pt.common, Pt.bumpmap, Pt.normalmap, Pt.displacementmap, {
          opacity: {
            value: 1
          }
        }]),
        vertexShader: Tt.normal_vert,
        fragmentShader: Tt.normal_frag
      },
      sprite: {
        uniforms: At.merge([Pt.sprite, Pt.fog]),
        vertexShader: Tt.sprite_vert,
        fragmentShader: Tt.sprite_frag
      },
      background: {
        uniforms: {
          t2D: {
            value: null
          }
        },
        vertexShader: Tt.background_vert,
        fragmentShader: Tt.background_frag
      },
      cube: {
        uniforms: {
          tCube: {
            value: null
          },
          tFlip: {
            value: -1
          },
          opacity: {
            value: 1
          }
        },
        vertexShader: Tt.cube_vert,
        fragmentShader: Tt.cube_frag
      },
      equirect: {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: Tt.equirect_vert,
        fragmentShader: Tt.equirect_frag
      },
      distanceRGBA: {
        uniforms: At.merge([Pt.common, Pt.displacementmap, {
          referencePosition: {
            value: new at
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 1e3
          }
        }]),
        vertexShader: Tt.distanceRGBA_vert,
        fragmentShader: Tt.distanceRGBA_frag
      },
      shadow: {
        uniforms: At.merge([Pt.lights, Pt.fog, {
          color: {
            value: new Ct(0)
          },
          opacity: {
            value: 1
          }
        }]),
        vertexShader: Tt.shadow_vert,
        fragmentShader: Tt.shadow_frag
      }
    };

  function It() {
    var t = null,
      e = !1,
      i = null;

    function n(r, a) {
      !1 !== e && (i(r, a), t.requestAnimationFrame(n))
    }
    return {
      start: function() {
        !0 !== e && null !== i && (t.requestAnimationFrame(n), e = !0)
      },
      stop: function() {
        e = !1
      },
      setAnimationLoop: function(t) {
        i = t
      },
      setContext: function(e) {
        t = e
      }
    }
  }

  function Nt(t) {
    var e = new WeakMap;
    return {
      get: function(t) {
        return t.isInterleavedBufferAttribute && (t = t.data), e.get(t)
      },
      remove: function(i) {
        i.isInterleavedBufferAttribute && (i = i.data);
        var n = e.get(i);
        n && (t.deleteBuffer(n.buffer), e.delete(i))
      },
      update: function(i, n) {
        i.isInterleavedBufferAttribute && (i = i.data);
        var r = e.get(i);
        void 0 === r ? e.set(i, function(e, i) {
          var n = e.array,
            r = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
            a = t.createBuffer();
          t.bindBuffer(i, a), t.bufferData(i, n, r), e.onUploadCallback();
          var o = t.FLOAT;
          return n instanceof Float32Array ? o = t.FLOAT : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? o = t.UNSIGNED_SHORT : n instanceof Int16Array ? o = t.SHORT : n instanceof Uint32Array ? o = t.UNSIGNED_INT : n instanceof Int32Array ? o = t.INT : n instanceof Int8Array ? o = t.BYTE : n instanceof Uint8Array && (o = t.UNSIGNED_BYTE), {
            buffer: a,
            type: o,
            bytesPerElement: n.BYTES_PER_ELEMENT,
            version: e.version
          }
        }(i, n)) : r.version < i.version && (function(e, i, n) {
          var r = i.array,
            a = i.updateRange;
          t.bindBuffer(n, e), !1 === i.dynamic ? t.bufferData(n, r, t.STATIC_DRAW) : -1 === a.count ? t.bufferSubData(n, 0, r) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = -1)
        }(r.buffer, i, n), r.version = i.version)
      }
    }
  }

  function Ot(t, e, i, n, r, a) {
    this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new at, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new Ct, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
  }
  Rt.physical = {
    uniforms: At.merge([Rt.standard.uniforms, {
      clearCoat: {
        value: 0
      },
      clearCoatRoughness: {
        value: 0
      }
    }]),
    vertexShader: Tt.meshphysical_vert,
    fragmentShader: Tt.meshphysical_frag
  }, Object.assign(Ot.prototype, {
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
      for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
      for (e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
      return this
    }
  });
  var Dt, Ut = new nt;

  function Bt(t, e, i, n) {
    this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || Bt.DefaultOrder
  }

  function zt() {
    this.mask = 1
  }
  Bt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], Bt.DefaultOrder = "XYZ", Object.defineProperties(Bt.prototype, {
    x: {
      get: function() {
        return this._x
      },
      set: function(t) {
        this._x = t, this.onChangeCallback()
      }
    },
    y: {
      get: function() {
        return this._y
      },
      set: function(t) {
        this._y = t, this.onChangeCallback()
      }
    },
    z: {
      get: function() {
        return this._z
      },
      set: function(t) {
        this._z = t, this.onChangeCallback()
      }
    },
    order: {
      get: function() {
        return this._order
      },
      set: function(t) {
        this._order = t, this.onChangeCallback()
      }
    }
  }), Object.assign(Bt.prototype, {
    isEuler: !0,
    set: function(t, e, i, n) {
      return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._order)
    },
    copy: function(t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
    },
    setFromRotationMatrix: function(t, e, i) {
      var n = Y.clamp,
        r = t.elements,
        a = r[0],
        o = r[4],
        s = r[8],
        h = r[1],
        c = r[5],
        l = r[9],
        u = r[2],
        p = r[6],
        d = r[10];
      return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, c), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(h, c)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-o, c))) : "YZX" === e ? (this._z = Math.asin(n(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== i && this.onChangeCallback(), this
    },
    setFromQuaternion: function(t, e, i) {
      return Ut.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ut, e, i)
    },
    setFromVector3: function(t, e) {
      return this.set(t.x, t.y, t.z, e || this._order)
    },
    reorder: (Dt = new rt, function(t) {
      return Dt.setFromEuler(this), this.setFromQuaternion(Dt, t)
    }),
    equals: function(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    },
    fromArray: function(t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
    },
    toVector3: function(t) {
      return t ? t.set(this._x, this._y, this._z) : new at(this._x, this._y, this._z)
    },
    onChange: function(t) {
      return this.onChangeCallback = t, this
    },
    onChangeCallback: function() {}
  }), Object.assign(zt.prototype, {
    set: function(t) {
      this.mask = 1 << t
    },
    enable: function(t) {
      this.mask |= 1 << t
    },
    toggle: function(t) {
      this.mask ^= 1 << t
    },
    disable: function(t) {
      this.mask &= ~(1 << t)
    },
    test: function(t) {
      return !!(this.mask & t.mask)
    }
  });
  var Ft, Gt, Vt, kt = 0,
    Ht = new rt,
    jt = new at(1, 0, 0),
    Wt = new at(0, 1, 0),
    Xt = new at(0, 0, 1),
    qt = new rt,
    Yt = new nt,
    Jt = new at,
    Zt = new at;

  function Kt() {
    Object.defineProperty(this, "id", {
      value: kt++
    }), this.uuid = Y.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Kt.DefaultUp.clone();
    var t = new at,
      e = new Bt,
      i = new rt,
      n = new at(1, 1, 1);
    e.onChange((function() {
      i.setFromEuler(e, !1)
    })), i.onChange((function() {
      e.setFromQuaternion(i, void 0, !1)
    })), Object.defineProperties(this, {
      position: {
        enumerable: !0,
        value: t
      },
      rotation: {
        enumerable: !0,
        value: e
      },
      quaternion: {
        enumerable: !0,
        value: i
      },
      scale: {
        enumerable: !0,
        value: n
      },
      modelViewMatrix: {
        value: new nt
      },
      normalMatrix: {
        value: new ot
      }
    }), this.matrix = new nt, this.matrixWorld = new nt, this.matrixAutoUpdate = Kt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new zt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
  }
  Kt.DefaultUp = new at(0, 1, 0), Kt.DefaultMatrixAutoUpdate = !0, Kt.prototype = Object.assign(Object.create(e.prototype), {
    constructor: Kt,
    isObject3D: !0,
    onBeforeRender: function() {},
    onAfterRender: function() {},
    applyMatrix: function(t) {
      this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    applyQuaternion: function(t) {
      return this.quaternion.premultiply(t), this
    },
    setRotationFromAxisAngle: function(t, e) {
      this.quaternion.setFromAxisAngle(t, e)
    },
    setRotationFromEuler: function(t) {
      this.quaternion.setFromEuler(t, !0)
    },
    setRotationFromMatrix: function(t) {
      this.quaternion.setFromRotationMatrix(t)
    },
    setRotationFromQuaternion: function(t) {
      this.quaternion.copy(t)
    },
    rotateOnAxis: function(t, e) {
      return Ht.setFromAxisAngle(t, e), this.quaternion.multiply(Ht), this
    },
    rotateOnWorldAxis: function(t, e) {
      return Ht.setFromAxisAngle(t, e), this.quaternion.premultiply(Ht), this
    },
    rotateX: function(t) {
      return this.rotateOnAxis(jt, t)
    },
    rotateY: function(t) {
      return this.rotateOnAxis(Wt, t)
    },
    rotateZ: function(t) {
      return this.rotateOnAxis(Xt, t)
    },
    translateOnAxis: function() {
      var t = new at;
      return function(e, i) {
        return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
      }
    }(),
    translateX: function() {
      var t = new at(1, 0, 0);
      return function(e) {
        return this.translateOnAxis(t, e)
      }
    }(),
    translateY: function() {
      var t = new at(0, 1, 0);
      return function(e) {
        return this.translateOnAxis(t, e)
      }
    }(),
    translateZ: function() {
      var t = new at(0, 0, 1);
      return function(e) {
        return this.translateOnAxis(t, e)
      }
    }(),
    localToWorld: function(t) {
      return t.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: (Vt = new nt, function(t) {
      return t.applyMatrix4(Vt.getInverse(this.matrixWorld))
    }),
    lookAt: function(t, e, i) {
      var n = qt,
        r = Yt,
        a = Jt,
        o = Zt;
      t.isVector3 ? a.copy(t) : a.set(t, e, i);
      var s = this.parent;
      this.updateWorldMatrix(!0, !1), o.setFromMatrixPosition(this.matrixWorld), this.isCamera ? r.lookAt(o, a, this.up) : r.lookAt(a, o, this.up), this.quaternion.setFromRotationMatrix(r), s && (r.extractRotation(s.matrixWorld), n.setFromRotationMatrix(r), this.quaternion.premultiply(n.inverse()))
    },
    add: function(t) {
      if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this
      }
      return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
        type: "added"
      }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
    },
    remove: function(t) {
      if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this
      }
      var i = this.children.indexOf(t);
      return -1 !== i && (t.parent = null, t.dispatchEvent({
        type: "removed"
      }), this.children.splice(i, 1)), this
    },
    getObjectById: function(t) {
      return this.getObjectByProperty("id", t)
    },
    getObjectByName: function(t) {
      return this.getObjectByProperty("name", t)
    },
    getObjectByProperty: function(t, e) {
      if (this[t] === e) return this;
      for (var i = 0, n = this.children.length; i < n; i++) {
        var r = this.children[i].getObjectByProperty(t, e);
        if (void 0 !== r) return r
      }
    },
    getWorldPosition: function(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new at), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: (Ft = new at, Gt = new at, function(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new rt), this.updateMatrixWorld(!0), this.matrixWorld.decompose(Ft, t, Gt), t
    }),
    getWorldScale: function() {
      var t = new at,
        e = new rt;
      return function(i) {
        return void 0 === i && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), i = new at), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, i), i
      }
    }(),
    getWorldDirection: function(t) {
      void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new at), this.updateMatrixWorld(!0);
      var e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize()
    },
    raycast: function() {},
    traverse: function(t) {
      t(this);
      for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
    },
    traverseVisible: function(t) {
      if (!1 !== this.visible) {
        t(this);
        for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
      }
    },
    traverseAncestors: function(t) {
      var e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t))
    },
    updateMatrix: function() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
      for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
    },
    updateWorldMatrix: function(t, e) {
      var i = this.parent;
      if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
        for (var n = this.children, r = 0, a = n.length; r < a; r++) n[r].updateWorldMatrix(!1, !0)
    },
    toJSON: function(t) {
      var e = void 0 === t || "string" == typeof t,
        i = {};
      e && (t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {}
      }, i.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var n = {};

      function r(e, i) {
        return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
      }
      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) {
        n.geometry = r(t.geometries, this.geometry);
        var a = this.geometry.parameters;
        if (void 0 !== a && void 0 !== a.shapes) {
          var o = a.shapes;
          if (Array.isArray(o))
            for (var s = 0, h = o.length; s < h; s++) {
              var c = o[s];
              r(t.shapes, c)
            } else r(t.shapes, o)
        }
      }
      if (void 0 !== this.material)
        if (Array.isArray(this.material)) {
          var l = [];
          for (s = 0, h = this.material.length; s < h; s++) l.push(r(t.materials, this.material[s]));
          n.material = l
        } else n.material = r(t.materials, this.material);
      if (this.children.length > 0)
        for (n.children = [], s = 0; s < this.children.length; s++) n.children.push(this.children[s].toJSON(t).object);
      if (e) {
        var u = m(t.geometries),
          p = m(t.materials),
          d = m(t.textures),
          f = m(t.images);
        o = m(t.shapes), u.length > 0 && (i.geometries = u), p.length > 0 && (i.materials = p), d.length > 0 && (i.textures = d), f.length > 0 && (i.images = f), o.length > 0 && (i.shapes = o)
      }
      return i.object = n, i;

      function m(t) {
        var e = [];
        for (var i in t) {
          var n = t[i];
          delete n.metadata, e.push(n)
        }
        return e
      }
    },
    clone: function(t) {
      return (new this.constructor).copy(this, t)
    },
    copy: function(t, e) {
      if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
        for (var i = 0; i < t.children.length; i++) {
          var n = t.children[i];
          this.add(n.clone())
        }
      return this
    }
  });
  var Qt, $t, te = 0;

  function ee() {
    Object.defineProperty(this, "id", {
      value: te += 2
    }), this.uuid = Y.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
      []
    ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
  }

  function ie(t, e, i) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0
  }

  function ne(t, e, i) {
    ie.call(this, new Int8Array(t), e, i)
  }

  function re(t, e, i) {
    ie.call(this, new Uint8Array(t), e, i)
  }

  function ae(t, e, i) {
    ie.call(this, new Uint8ClampedArray(t), e, i)
  }

  function oe(t, e, i) {
    ie.call(this, new Int16Array(t), e, i)
  }

  function se(t, e, i) {
    ie.call(this, new Uint16Array(t), e, i)
  }

  function he(t, e, i) {
    ie.call(this, new Int32Array(t), e, i)
  }

  function ce(t, e, i) {
    ie.call(this, new Uint32Array(t), e, i)
  }

  function le(t, e, i) {
    ie.call(this, new Float32Array(t), e, i)
  }

  function ue(t, e, i) {
    ie.call(this, new Float64Array(t), e, i)
  }

  function pe() {
    this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
  }

  function de(t) {
    if (0 === t.length) return -1 / 0;
    for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
    return e
  }
  ee.prototype = Object.assign(Object.create(e.prototype), {
    constructor: ee,
    isGeometry: !0,
    applyMatrix: function(t) {
      for (var e = (new ot).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) this.vertices[i].applyMatrix4(t);
      for (i = 0, n = this.faces.length; i < n; i++) {
        var r = this.faces[i];
        r.normal.applyMatrix3(e).normalize();
        for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(e).normalize()
      }
      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
    },
    rotateX: function() {
      var t = new nt;
      return function(e) {
        return t.makeRotationX(e), this.applyMatrix(t), this
      }
    }(),
    rotateY: function() {
      var t = new nt;
      return function(e) {
        return t.makeRotationY(e), this.applyMatrix(t), this
      }
    }(),
    rotateZ: function() {
      var t = new nt;
      return function(e) {
        return t.makeRotationZ(e), this.applyMatrix(t), this
      }
    }(),
    translate: function() {
      var t = new nt;
      return function(e, i, n) {
        return t.makeTranslation(e, i, n), this.applyMatrix(t), this
      }
    }(),
    scale: function() {
      var t = new nt;
      return function(e, i, n) {
        return t.makeScale(e, i, n), this.applyMatrix(t), this
      }
    }(),
    lookAt: ($t = new Kt, function(t) {
      $t.lookAt(t), $t.updateMatrix(), this.applyMatrix($t.matrix)
    }),
    fromBufferGeometry: function(t) {
      var e = this,
        i = null !== t.index ? t.index.array : void 0,
        n = t.attributes,
        r = n.position.array,
        a = void 0 !== n.normal ? n.normal.array : void 0,
        o = void 0 !== n.color ? n.color.array : void 0,
        s = void 0 !== n.uv ? n.uv.array : void 0,
        h = void 0 !== n.uv2 ? n.uv2.array : void 0;
      void 0 !== h && (this.faceVertexUvs[1] = []);
      for (var c = [], l = [], u = [], p = 0, d = 0; p < r.length; p += 3, d += 2) e.vertices.push(new at(r[p], r[p + 1], r[p + 2])), void 0 !== a && c.push(new at(a[p], a[p + 1], a[p + 2])), void 0 !== o && e.colors.push(new Ct(o[p], o[p + 1], o[p + 2])), void 0 !== s && l.push(new J(s[d], s[d + 1])), void 0 !== h && u.push(new J(h[d], h[d + 1]));

      function f(t, i, n, r) {
        var p = new Ot(t, i, n, void 0 !== a ? [c[t].clone(), c[i].clone(), c[n].clone()] : [], void 0 !== o ? [e.colors[t].clone(), e.colors[i].clone(), e.colors[n].clone()] : [], r);
        e.faces.push(p), void 0 !== s && e.faceVertexUvs[0].push([l[t].clone(), l[i].clone(), l[n].clone()]), void 0 !== h && e.faceVertexUvs[1].push([u[t].clone(), u[i].clone(), u[n].clone()])
      }
      var m = t.groups;
      if (m.length > 0)
        for (p = 0; p < m.length; p++)
          for (var v = m[p], g = v.start, y = (d = g, g + v.count); d < y; d += 3) void 0 !== i ? f(i[d], i[d + 1], i[d + 2], v.materialIndex) : f(d, d + 1, d + 2, v.materialIndex);
      else if (void 0 !== i)
        for (p = 0; p < i.length; p += 3) f(i[p], i[p + 1], i[p + 2]);
      else
        for (p = 0; p < r.length / 3; p += 3) f(p, p + 1, p + 2);
      return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
    },
    center: (Qt = new at, function() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Qt).negate(), this.translate(Qt.x, Qt.y, Qt.z), this
    }),
    normalize: function() {
      this.computeBoundingSphere();
      var t = this.boundingSphere.center,
        e = this.boundingSphere.radius,
        i = 0 === e ? 1 : 1 / e,
        n = new nt;
      return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
    },
    computeFaceNormals: function() {
      for (var t = new at, e = new at, i = 0, n = this.faces.length; i < n; i++) {
        var r = this.faces[i],
          a = this.vertices[r.a],
          o = this.vertices[r.b],
          s = this.vertices[r.c];
        t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), r.normal.copy(t)
      }
    },
    computeVertexNormals: function(t) {
      var e, i, n, r, a, o;
      for (void 0 === t && (t = !0), o = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) o[e] = new at;
      if (t) {
        var s, h, c, l = new at,
          u = new at;
        for (n = 0, r = this.faces.length; n < r; n++) a = this.faces[n], s = this.vertices[a.a], h = this.vertices[a.b], c = this.vertices[a.c], l.subVectors(c, h), u.subVectors(s, h), l.cross(u), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l)
      } else
        for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o[(a = this.faces[n]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
      for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize();
      for (n = 0, r = this.faces.length; n < r; n++) {
        var p = (a = this.faces[n]).vertexNormals;
        3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
      }
      this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeFlatVertexNormals: function() {
      var t, e, i;
      for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
        var n = (i = this.faces[t]).vertexNormals;
        3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
      }
      this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
      var t, e, i, n, r;
      for (i = 0, n = this.faces.length; i < n; i++)
        for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
      var a = new ee;
      for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
        if (!this.morphNormals[t]) {
          this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
          var o = this.morphNormals[t].faceNormals,
            s = this.morphNormals[t].vertexNormals;
          for (i = 0, n = this.faces.length; i < n; i++) h = new at, c = {
            a: new at,
            b: new at,
            c: new at
          }, o.push(h), s.push(c)
        }
        var h, c, l = this.morphNormals[t];
        for (a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], h = l.faceNormals[i], c = l.vertexNormals[i], h.copy(r.normal), c.a.copy(r.vertexNormals[0]), c.b.copy(r.vertexNormals[1]), c.c.copy(r.vertexNormals[2])
      }
      for (i = 0, n = this.faces.length; i < n; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new gt), this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
      null === this.boundingSphere && (this.boundingSphere = new yt), this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(t, e, i) {
      if (t && t.isGeometry) {
        var n, r = this.vertices.length,
          a = this.vertices,
          o = t.vertices,
          s = this.faces,
          h = t.faces,
          c = this.faceVertexUvs[0],
          l = t.faceVertexUvs[0],
          u = this.colors,
          p = t.colors;
        void 0 === i && (i = 0), void 0 !== e && (n = (new ot).getNormalMatrix(e));
        for (var d = 0, f = o.length; d < f; d++) {
          var m = o[d].clone();
          void 0 !== e && m.applyMatrix4(e), a.push(m)
        }
        for (d = 0, f = p.length; d < f; d++) u.push(p[d].clone());
        for (d = 0, f = h.length; d < f; d++) {
          var v, g, y, x = h[d],
            _ = x.vertexNormals,
            b = x.vertexColors;
          (v = new Ot(x.a + r, x.b + r, x.c + r)).normal.copy(x.normal), void 0 !== n && v.normal.applyMatrix3(n).normalize();
          for (var M = 0, w = _.length; M < w; M++) g = _[M].clone(), void 0 !== n && g.applyMatrix3(n).normalize(), v.vertexNormals.push(g);
          for (v.color.copy(x.color), M = 0, w = b.length; M < w; M++) y = b[M], v.vertexColors.push(y.clone());
          v.materialIndex = x.materialIndex + i, s.push(v)
        }
        for (d = 0, f = l.length; d < f; d++) {
          var S = l[d],
            E = [];
          if (void 0 !== S) {
            for (M = 0, w = S.length; M < w; M++) E.push(S[M].clone());
            c.push(E)
          }
        }
      } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
    },
    mergeMesh: function(t) {
      t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
    },
    mergeVertices: function() {
      var t, e, i, n, r, a, o, s, h = {},
        c = [],
        l = [],
        u = Math.pow(10, 4);
      for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], void 0 === h[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (h[e] = i, c.push(this.vertices[i]), l[i] = c.length - 1) : l[i] = l[h[e]];
      var p = [];
      for (i = 0, n = this.faces.length; i < n; i++) {
        (r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
        for (var d = 0; d < 3; d++)
          if (a[d] === a[(d + 1) % 3]) {
            p.push(i);
            break
          }
      }
      for (i = p.length - 1; i >= 0; i--) {
        var f = p[i];
        for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
      }
      var m = this.vertices.length - c.length;
      return this.vertices = c, m
    },
    setFromPoints: function(t) {
      this.vertices = [];
      for (var e = 0, i = t.length; e < i; e++) {
        var n = t[e];
        this.vertices.push(new at(n.x, n.y, n.z || 0))
      }
      return this
    },
    sortFacesByMaterialIndex: function() {
      for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
      t.sort((function(t, e) {
        return t.materialIndex - e.materialIndex
      }));
      var n, r, a = this.faceVertexUvs[0],
        o = this.faceVertexUvs[1];
      for (a && a.length === e && (n = []), o && o.length === e && (r = []), i = 0; i < e; i++) {
        var s = t[i]._id;
        n && n.push(a[s]), r && r.push(o[s])
      }
      n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
    },
    toJSON: function() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };
      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
        var e = this.parameters;
        for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
        return t
      }
      for (var n = [], r = 0; r < this.vertices.length; r++) {
        var a = this.vertices[r];
        n.push(a.x, a.y, a.z)
      }
      var o = [],
        s = [],
        h = {},
        c = [],
        l = {},
        u = [],
        p = {};
      for (r = 0; r < this.faces.length; r++) {
        var d = this.faces[r],
          f = void 0 !== this.faceVertexUvs[0][r],
          m = d.normal.length() > 0,
          v = d.vertexNormals.length > 0,
          g = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
          y = d.vertexColors.length > 0,
          x = 0;
        if (x = w(x, 0, 0), x = w(x, 1, !0), x = w(x, 2, !1), x = w(x, 3, f), x = w(x, 4, m), x = w(x, 5, v), x = w(x, 6, g), x = w(x, 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) {
          var _ = this.faceVertexUvs[0][r];
          o.push(T(_[0]), T(_[1]), T(_[2]))
        }
        if (m && o.push(S(d.normal)), v) {
          var b = d.vertexNormals;
          o.push(S(b[0]), S(b[1]), S(b[2]))
        }
        if (g && o.push(E(d.color)), y) {
          var M = d.vertexColors;
          o.push(E(M[0]), E(M[1]), E(M[2]))
        }
      }

      function w(t, e, i) {
        return i ? t | 1 << e : t & ~(1 << e)
      }

      function S(t) {
        var e = t.x.toString() + t.y.toString() + t.z.toString();
        return void 0 !== h[e] || (h[e] = s.length / 3, s.push(t.x, t.y, t.z)), h[e]
      }

      function E(t) {
        var e = t.r.toString() + t.g.toString() + t.b.toString();
        return void 0 !== l[e] || (l[e] = c.length, c.push(t.getHex())), l[e]
      }

      function T(t) {
        var e = t.x.toString() + t.y.toString();
        return void 0 !== p[e] || (p[e] = u.length / 2, u.push(t.x, t.y)), p[e]
      }
      return t.data = {}, t.data.vertices = n, t.data.normals = s, c.length > 0 && (t.data.colors = c), u.length > 0 && (t.data.uvs = [u]), t.data.faces = o, t
    },
    clone: function() {
      return (new ee).copy(this)
    },
    copy: function(t) {
      var e, i, n, r, a, o;
      this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
        []
      ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
      var s = t.vertices;
      for (e = 0, i = s.length; e < i; e++) this.vertices.push(s[e].clone());
      var h = t.colors;
      for (e = 0, i = h.length; e < i; e++) this.colors.push(h[e].clone());
      var c = t.faces;
      for (e = 0, i = c.length; e < i; e++) this.faces.push(c[e].clone());
      for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
        var l = t.faceVertexUvs[e];
        for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l.length; n < r; n++) {
          var u = l[n],
            p = [];
          for (a = 0, o = u.length; a < o; a++) {
            var d = u[a];
            p.push(d.clone())
          }
          this.faceVertexUvs[e].push(p)
        }
      }
      var f = t.morphTargets;
      for (e = 0, i = f.length; e < i; e++) {
        var m = {};
        if (m.name = f[e].name, void 0 !== f[e].vertices)
          for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) m.vertices.push(f[e].vertices[n].clone());
        if (void 0 !== f[e].normals)
          for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++) m.normals.push(f[e].normals[n].clone());
        this.morphTargets.push(m)
      }
      var v = t.morphNormals;
      for (e = 0, i = v.length; e < i; e++) {
        var g = {};
        if (void 0 !== v[e].vertexNormals)
          for (g.vertexNormals = [], n = 0, r = v[e].vertexNormals.length; n < r; n++) {
            var y = v[e].vertexNormals[n],
              x = {};
            x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), g.vertexNormals.push(x)
          }
        if (void 0 !== v[e].faceNormals)
          for (g.faceNormals = [], n = 0, r = v[e].faceNormals.length; n < r; n++) g.faceNormals.push(v[e].faceNormals[n].clone());
        this.morphNormals.push(g)
      }
      var _ = t.skinWeights;
      for (e = 0, i = _.length; e < i; e++) this.skinWeights.push(_[e].clone());
      var b = t.skinIndices;
      for (e = 0, i = b.length; e < i; e++) this.skinIndices.push(b[e].clone());
      var M = t.lineDistances;
      for (e = 0, i = M.length; e < i; e++) this.lineDistances.push(M[e]);
      var w = t.boundingBox;
      null !== w && (this.boundingBox = w.clone());
      var S = t.boundingSphere;
      return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), Object.defineProperty(ie.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(ie.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function() {},
    setArray: function(t) {
      if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this
    },
    setDynamic: function(t) {
      return this.dynamic = t, this
    },
    copy: function(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
    },
    copyAt: function(t, e, i) {
      t *= this.itemSize, i *= e.itemSize;
      for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
      return this
    },
    copyArray: function(t) {
      return this.array.set(t), this
    },
    copyColorsArray: function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new Ct), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
      }
      return this
    },
    copyVector2sArray: function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), a = new J), e[i++] = a.x, e[i++] = a.y
      }
      return this
    },
    copyVector3sArray: function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new at), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z
      }
      return this
    },
    copyVector4sArray: function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a = new dt), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w
      }
      return this
    },
    set: function(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this
    },
    getX: function(t) {
      return this.array[t * this.itemSize]
    },
    setX: function(t, e) {
      return this.array[t * this.itemSize] = e, this
    },
    getY: function(t) {
      return this.array[t * this.itemSize + 1]
    },
    setY: function(t, e) {
      return this.array[t * this.itemSize + 1] = e, this
    },
    getZ: function(t) {
      return this.array[t * this.itemSize + 2]
    },
    setZ: function(t, e) {
      return this.array[t * this.itemSize + 2] = e, this
    },
    getW: function(t) {
      return this.array[t * this.itemSize + 3]
    },
    setW: function(t, e) {
      return this.array[t * this.itemSize + 3] = e, this
    },
    setXY: function(t, e, i) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
    },
    setXYZ: function(t, e, i, n) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
    },
    setXYZW: function(t, e, i, n, r) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
    },
    onUpload: function(t) {
      return this.onUploadCallback = t, this
    },
    clone: function() {
      return new this.constructor(this.array, this.itemSize).copy(this)
    }
  }), ne.prototype = Object.create(ie.prototype), ne.prototype.constructor = ne, re.prototype = Object.create(ie.prototype), re.prototype.constructor = re, ae.prototype = Object.create(ie.prototype), ae.prototype.constructor = ae, oe.prototype = Object.create(ie.prototype), oe.prototype.constructor = oe, se.prototype = Object.create(ie.prototype), se.prototype.constructor = se, he.prototype = Object.create(ie.prototype), he.prototype.constructor = he, ce.prototype = Object.create(ie.prototype), ce.prototype.constructor = ce, le.prototype = Object.create(ie.prototype), le.prototype.constructor = le, ue.prototype = Object.create(ie.prototype), ue.prototype.constructor = ue, Object.assign(pe.prototype, {
    computeGroups: function(t) {
      for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
        var o = r[a];
        o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), e = {
          start: 3 * a,
          materialIndex: n
        })
      }
      void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i
    },
    fromGeometry: function(t) {
      var e, i = t.faces,
        n = t.vertices,
        r = t.faceVertexUvs,
        a = r[0] && r[0].length > 0,
        o = r[1] && r[1].length > 0,
        s = t.morphTargets,
        h = s.length;
      if (h > 0) {
        e = [];
        for (var c = 0; c < h; c++) e[c] = {
          name: s[c].name,
          data: []
        };
        this.morphTargets.position = e
      }
      var l, u = t.morphNormals,
        p = u.length;
      if (p > 0) {
        for (l = [], c = 0; c < p; c++) l[c] = {
          name: u[c].name,
          data: []
        };
        this.morphTargets.normal = l
      }
      var d = t.skinIndices,
        f = t.skinWeights,
        m = d.length === n.length,
        v = f.length === n.length;
      for (n.length > 0 && 0 === i.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported."), c = 0; c < i.length; c++) {
        var g = i[c];
        this.vertices.push(n[g.a], n[g.b], n[g.c]);
        var y = g.vertexNormals;
        if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
        else {
          var x = g.normal;
          this.normals.push(x, x, x)
        }
        var _, b = g.vertexColors;
        if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
        else {
          var M = g.color;
          this.colors.push(M, M, M)
        }!0 === a && (void 0 !== (_ = r[0][c]) ? this.uvs.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new J, new J, new J))), !0 === o && (void 0 !== (_ = r[1][c]) ? this.uvs2.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new J, new J, new J)));
        for (var w = 0; w < h; w++) {
          var S = s[w].vertices;
          e[w].data.push(S[g.a], S[g.b], S[g.c])
        }
        for (w = 0; w < p; w++) {
          var E = u[w].vertexNormals[c];
          l[w].data.push(E.a, E.b, E.c)
        }
        m && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), v && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
      }
      return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
    }
  });
  var fe = 1;

  function me() {
    Object.defineProperty(this, "id", {
      value: fe += 2
    }), this.uuid = Y.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}
  }

  function ve(t, e, i, n, r, a) {
    ee.call(this), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: n,
      heightSegments: r,
      depthSegments: a
    }, this.fromBufferGeometry(new ge(t, e, i, n, r, a)), this.mergeVertices()
  }

  function ge(t, e, i, n, r, a) {
    me.call(this), this.type = "BoxBufferGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: n,
      heightSegments: r,
      depthSegments: a
    };
    var o = this;
    t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
    var s = [],
      h = [],
      c = [],
      l = [],
      u = 0,
      p = 0;

    function d(t, e, i, n, r, a, d, f, m, v, g) {
      var y, x, _ = a / m,
        b = d / v,
        M = a / 2,
        w = d / 2,
        S = f / 2,
        E = m + 1,
        T = v + 1,
        A = 0,
        L = 0,
        C = new at;
      for (x = 0; x < T; x++) {
        var P = x * b - w;
        for (y = 0; y < E; y++) {
          var R = y * _ - M;
          C[t] = R * n, C[e] = P * r, C[i] = S, h.push(C.x, C.y, C.z), C[t] = 0, C[e] = 0, C[i] = f > 0 ? 1 : -1, c.push(C.x, C.y, C.z), l.push(y / m), l.push(1 - x / v), A += 1
        }
      }
      for (x = 0; x < v; x++)
        for (y = 0; y < m; y++) {
          var I = u + y + E * x,
            N = u + y + E * (x + 1),
            O = u + (y + 1) + E * (x + 1),
            D = u + (y + 1) + E * x;
          s.push(I, N, D), s.push(N, O, D), L += 6
        }
      o.addGroup(p, L, g), p += L, u += A
    }
    d("z", "y", "x", -1, -1, i, e, t, a, r, 0), d("z", "y", "x", 1, -1, i, e, -t, a, r, 1), d("x", "z", "y", 1, 1, t, i, e, n, a, 2), d("x", "z", "y", 1, -1, t, i, -e, n, a, 3), d("x", "y", "z", 1, -1, t, e, i, n, r, 4), d("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(s), this.addAttribute("position", new le(h, 3)), this.addAttribute("normal", new le(c, 3)), this.addAttribute("uv", new le(l, 2))
  }

  function ye(t, e, i, n) {
    ee.call(this), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: n
    }, this.fromBufferGeometry(new xe(t, e, i, n)), this.mergeVertices()
  }

  function xe(t, e, i, n) {
    me.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: n
    };
    var r, a, o = (t = t || 1) / 2,
      s = (e = e || 1) / 2,
      h = Math.floor(i) || 1,
      c = Math.floor(n) || 1,
      l = h + 1,
      u = c + 1,
      p = t / h,
      d = e / c,
      f = [],
      m = [],
      v = [],
      g = [];
    for (a = 0; a < u; a++) {
      var y = a * d - s;
      for (r = 0; r < l; r++) {
        var x = r * p - o;
        m.push(x, -y, 0), v.push(0, 0, 1), g.push(r / h), g.push(1 - a / c)
      }
    }
    for (a = 0; a < c; a++)
      for (r = 0; r < h; r++) {
        var _ = r + l * a,
          b = r + l * (a + 1),
          M = r + 1 + l * (a + 1),
          w = r + 1 + l * a;
        f.push(_, b, w), f.push(b, M, w)
      }
    this.setIndex(f), this.addAttribute("position", new le(m, 3)), this.addAttribute("normal", new le(v, 3)), this.addAttribute("uv", new le(g, 2))
  }
  me.prototype = Object.assign(Object.create(e.prototype), {
    constructor: me,
    isBufferGeometry: !0,
    getIndex: function() {
      return this.index
    },
    setIndex: function(t) {
      Array.isArray(t) ? this.index = new(de(t) > 65535 ? ce : se)(t, 1) : this.index = t
    },
    addAttribute: function(t, e) {
      return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new ie(arguments[1], arguments[2])))
    },
    getAttribute: function(t) {
      return this.attributes[t]
    },
    removeAttribute: function(t) {
      return delete this.attributes[t], this
    },
    addGroup: function(t, e, i) {
      this.groups.push({
        start: t,
        count: e,
        materialIndex: void 0 !== i ? i : 0
      })
    },
    clearGroups: function() {
      this.groups = []
    },
    setDrawRange: function(t, e) {
      this.drawRange.start = t, this.drawRange.count = e
    },
    applyMatrix: function(t) {
      var e = this.attributes.position;
      void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
      var i = this.attributes.normal;
      return void 0 !== i && ((new ot).getNormalMatrix(t).applyToBufferAttribute(i), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
    },
    rotateX: function() {
      var t = new nt;
      return function(e) {
        return t.makeRotationX(e), this.applyMatrix(t), this
      }
    }(),
    rotateY: function() {
      var t = new nt;
      return function(e) {
        return t.makeRotationY(e), this.applyMatrix(t), this
      }
    }(),
    rotateZ: function() {
      var t = new nt;
      return function(e) {
        return t.makeRotationZ(e), this.applyMatrix(t), this
      }
    }(),
    translate: function() {
      var t = new nt;
      return function(e, i, n) {
        return t.makeTranslation(e, i, n), this.applyMatrix(t), this
      }
    }(),
    scale: function() {
      var t = new nt;
      return function(e, i, n) {
        return t.makeScale(e, i, n), this.applyMatrix(t), this
      }
    }(),
    lookAt: function() {
      var t = new Kt;
      return function(e) {
        t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
      }
    }(),
    center: function() {
      var t = new at;
      return function() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
      }
    }(),
    setFromObject: function(t) {
      var e = t.geometry;
      if (t.isPoints || t.isLine) {
        var i = new le(3 * e.vertices.length, 3),
          n = new le(3 * e.colors.length, 3);
        if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
          var r = new le(e.lineDistances.length, 1);
          this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
        }
        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
      } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
      return this
    },
    setFromPoints: function(t) {
      for (var e = [], i = 0, n = t.length; i < n; i++) {
        var r = t[i];
        e.push(r.x, r.y, r.z || 0)
      }
      return this.addAttribute("position", new le(e, 3)), this
    },
    updateFromObject: function(t) {
      var e, i = t.geometry;
      if (t.isMesh) {
        var n = i.__directGeometry;
        if (!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
        n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n
      }
      return !0 === i.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(i.vertices), e.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(i.normals), e.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(i.colors), e.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(i.uvs), e.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(i.lineDistances), e.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(t.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this
    },
    fromGeometry: function(t) {
      return t.__directGeometry = (new pe).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
    },
    fromDirectGeometry: function(t) {
      var e = new Float32Array(3 * t.vertices.length);
      if (this.addAttribute("position", new ie(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
        var i = new Float32Array(3 * t.normals.length);
        this.addAttribute("normal", new ie(i, 3).copyVector3sArray(t.normals))
      }
      if (t.colors.length > 0) {
        var n = new Float32Array(3 * t.colors.length);
        this.addAttribute("color", new ie(n, 3).copyColorsArray(t.colors))
      }
      if (t.uvs.length > 0) {
        var r = new Float32Array(2 * t.uvs.length);
        this.addAttribute("uv", new ie(r, 2).copyVector2sArray(t.uvs))
      }
      if (t.uvs2.length > 0) {
        var a = new Float32Array(2 * t.uvs2.length);
        this.addAttribute("uv2", new ie(a, 2).copyVector2sArray(t.uvs2))
      }
      for (var o in this.groups = t.groups, t.morphTargets) {
        for (var s = [], h = t.morphTargets[o], c = 0, l = h.length; c < l; c++) {
          var u = h[c],
            p = new le(3 * u.data.length, 3);
          p.name = u.name, s.push(p.copyVector3sArray(u.data))
        }
        this.morphAttributes[o] = s
      }
      if (t.skinIndices.length > 0) {
        var d = new le(4 * t.skinIndices.length, 4);
        this.addAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
      }
      if (t.skinWeights.length > 0) {
        var f = new le(4 * t.skinWeights.length, 4);
        this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
      }
      return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new gt);
      var t = this.attributes.position;
      void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    },
    computeBoundingSphere: function() {
      var t = new gt,
        e = new at;
      return function() {
        null === this.boundingSphere && (this.boundingSphere = new yt);
        var i = this.attributes.position;
        if (i) {
          var n = this.boundingSphere.center;
          t.setFromBufferAttribute(i), t.getCenter(n);
          for (var r = 0, a = 0, o = i.count; a < o; a++) e.x = i.getX(a), e.y = i.getY(a), e.z = i.getZ(a), r = Math.max(r, n.distanceToSquared(e));
          this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
      }
    }(),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
      var t = this.index,
        e = this.attributes;
      if (e.position) {
        var i = e.position.array;
        if (void 0 === e.normal) this.addAttribute("normal", new ie(new Float32Array(i.length), 3));
        else
          for (var n = e.normal.array, r = 0, a = n.length; r < a; r++) n[r] = 0;
        var o, s, h, c = e.normal.array,
          l = new at,
          u = new at,
          p = new at,
          d = new at,
          f = new at;
        if (t) {
          var m = t.array;
          for (r = 0, a = t.count; r < a; r += 3) o = 3 * m[r + 0], s = 3 * m[r + 1], h = 3 * m[r + 2], l.fromArray(i, o), u.fromArray(i, s), p.fromArray(i, h), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), c[o] += d.x, c[o + 1] += d.y, c[o + 2] += d.z, c[s] += d.x, c[s + 1] += d.y, c[s + 2] += d.z, c[h] += d.x, c[h + 1] += d.y, c[h + 2] += d.z
        } else
          for (r = 0, a = i.length; r < a; r += 9) l.fromArray(i, r), u.fromArray(i, r + 3), p.fromArray(i, r + 6), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), c[r] = d.x, c[r + 1] = d.y, c[r + 2] = d.z, c[r + 3] = d.x, c[r + 4] = d.y, c[r + 5] = d.z, c[r + 6] = d.x, c[r + 7] = d.y, c[r + 8] = d.z;
        this.normalizeNormals(), e.normal.needsUpdate = !0
      }
    },
    merge: function(t, e) {
      if (t && t.isBufferGeometry) {
        void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        var i = this.attributes;
        for (var n in i)
          if (void 0 !== t.attributes[n])
            for (var r = i[n].array, a = t.attributes[n], o = a.array, s = 0, h = a.itemSize * e; s < o.length; s++, h++) r[h] = o[s];
        return this
      }
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
    },
    normalizeNormals: function() {
      var t = new at;
      return function() {
        for (var e = this.attributes.normal, i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.normalize(), e.setXYZ(i, t.x, t.y, t.z)
      }
    }(),
    toNonIndexed: function() {
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
      var t = new me,
        e = this.index.array,
        i = this.attributes;
      for (var n in i) {
        for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor(e.length * o), h = 0, c = 0, l = 0, u = e.length; l < u; l++) {
          h = e[l] * o;
          for (var p = 0; p < o; p++) s[c++] = a[h++]
        }
        t.addAttribute(n, new ie(s, o))
      }
      var d = this.groups;
      for (l = 0, u = d.length; l < u; l++) {
        var f = d[l];
        t.addGroup(f.start, f.count, f.materialIndex)
      }
      return t
    },
    toJSON: function() {
      var t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
        var e = this.parameters;
        for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
        return t
      }
      t.data = {
        attributes: {}
      };
      var n = this.index;
      if (null !== n) {
        var r = Array.prototype.slice.call(n.array);
        t.data.index = {
          type: n.array.constructor.name,
          array: r
        }
      }
      var a = this.attributes;
      for (var i in a) {
        var o = a[i];
        r = Array.prototype.slice.call(o.array), t.data.attributes[i] = {
          itemSize: o.itemSize,
          type: o.array.constructor.name,
          array: r,
          normalized: o.normalized
        }
      }
      var s = this.groups;
      s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
      var h = this.boundingSphere;
      return null !== h && (t.data.boundingSphere = {
        center: h.center.toArray(),
        radius: h.radius
      }), t
    },
    clone: function() {
      return (new me).copy(this)
    },
    copy: function(t) {
      var e, i, n;
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
      var r = t.index;
      null !== r && this.setIndex(r.clone());
      var a = t.attributes;
      for (e in a) {
        var o = a[e];
        this.addAttribute(e, o.clone())
      }
      var s = t.morphAttributes;
      for (e in s) {
        var h = [],
          c = s[e];
        for (i = 0, n = c.length; i < n; i++) h.push(c[i].clone());
        this.morphAttributes[e] = h
      }
      var l = t.groups;
      for (i = 0, n = l.length; i < n; i++) {
        var u = l[i];
        this.addGroup(u.start, u.count, u.materialIndex)
      }
      var p = t.boundingBox;
      null !== p && (this.boundingBox = p.clone());
      var d = t.boundingSphere;
      return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), ve.prototype = Object.create(ee.prototype), ve.prototype.constructor = ve, ge.prototype = Object.create(me.prototype), ge.prototype.constructor = ge, ye.prototype = Object.create(ee.prototype), ye.prototype.constructor = ye, xe.prototype = Object.create(me.prototype), xe.prototype.constructor = xe;
  var _e, be, Me, we, Se, Ee, Te, Ae, Le, Ce, Pe, Re, Ie = 0;

  function Ne() {
    Object.defineProperty(this, "id", {
      value: Ie++
    }), this.uuid = Y.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = 0, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = r, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
  }

  function Oe(t) {
    Ne.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
  }

  function De(t, e) {
    this.origin = void 0 !== t ? t : new at, this.direction = void 0 !== e ? e : new at
  }

  function Ue(t, e, i) {
    this.a = void 0 !== t ? t : new at, this.b = void 0 !== e ? e : new at, this.c = void 0 !== i ? i : new at
  }

  function Be(t) {
    Ne.call(this), this.type = "MeshBasicMaterial", this.color = new Ct(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
  }

  function ze(t, e) {
    Kt.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new me, this.material = void 0 !== e ? e : new Be({
      color: 16777215 * Math.random()
    }), this.drawMode = 0, this.updateMorphTargets()
  }

  function Fe(t, e, i, n) {
    var r, a, o = new Ct(0),
      s = 0;

    function h(t, i) {
      e.buffers.color.setClear(t.r, t.g, t.b, i, n)
    }
    return {
      getClearColor: function() {
        return o
      },
      setClearColor: function(t, e) {
        o.set(t), h(o, s = void 0 !== e ? e : 1)
      },
      getClearAlpha: function() {
        return s
      },
      setClearAlpha: function(t) {
        h(o, s = t)
      },
      render: function(e, n, c, l) {
        var u = n.background;
        null === u ? h(o, s) : u && u.isColor && (h(u, 1), l = !0), (t.autoClear || l) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), u && u.isCubeTexture ? (void 0 === a && ((a = new ze(new ge(1, 1, 1), new Oe({
          uniforms: At.clone(Rt.cube.uniforms),
          vertexShader: Rt.cube.vertexShader,
          fragmentShader: Rt.cube.fragmentShader,
          side: 1,
          depthTest: !0,
          depthWrite: !1,
          fog: !1
        }))).geometry.removeAttribute("normal"), a.geometry.removeAttribute("uv"), a.onBeforeRender = function(t, e, i) {
          this.matrixWorld.copyPosition(i.matrixWorld)
        }, i.update(a)), a.material.uniforms.tCube.value = u, e.push(a, a.geometry, a.material, 0, null)) : u && u.isTexture && (void 0 === r && ((r = new ze(new xe(2, 2), new Oe({
          uniforms: At.clone(Rt.background.uniforms),
          vertexShader: Rt.background.vertexShader,
          fragmentShader: Rt.background.fragmentShader,
          side: 0,
          depthTest: !0,
          depthWrite: !1,
          fog: !1
        }))).geometry.removeAttribute("normal"), i.update(r)), r.material.uniforms.t2D.value = u, e.push(r, r.geometry, r.material, 0, null))
      }
    }
  }

  function Ge(t, e, i, n) {
    var r;
    this.setMode = function(t) {
      r = t
    }, this.render = function(e, n) {
      t.drawArrays(r, e, n), i.update(n, r)
    }, this.renderInstances = function(a, o, s) {
      var h;
      if (n.isWebGL2) h = t;
      else if (null === (h = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      h[n.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](r, o, s, a.maxInstancedCount), i.update(s, r, a.maxInstancedCount)
    }
  }

  function Ve(t, e, i) {
    var n;

    function r(e) {
      if ("highp" === e) {
        var i = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT),
          n = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
        if (i && i.precision > 0 && n && n.precision > 0) return "highp";
        e = "mediump"
      }
      if ("mediump" === e) {
        var r = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT),
          a = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT);
        if (r && r.precision > 0 && a && a.precision > 0) return "mediump"
      }
      return "lowp"
    }
    var a = void 0 !== i.precision ? i.precision : "highp",
      o = r(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    var s = !0 === i.logarithmicDepthBuffer,
      h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    return t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), {
      isWebGL2: !1,
      getMaxAnisotropy: function() {
        if (void 0 !== n) return n;
        var i = e.get("EXT_texture_filter_anisotropic");
        return n = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
      },
      getMaxPrecision: r,
      precision: a,
      logarithmicDepthBuffer: s,
      maxTextures: h,
      maxVertexTextures: 0,
      maxTextureSize: t.getParameter(t.MAX_TEXTURE_SIZE),
      maxCubemapSize: t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
      maxAttributes: t.getParameter(t.MAX_VERTEX_ATTRIBS),
      maxVertexUniforms: t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
      maxVaryings: t.getParameter(t.MAX_VARYING_VECTORS),
      maxFragmentUniforms: t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
      vertexTextures: !1,
      floatFragmentTextures: !1,
      floatVertexTextures: !1,
      maxVertexAttribs: 16
    }
  }

  function ke() {
    var t = this,
      e = null,
      i = 0,
      n = !1,
      r = !1,
      a = new xt,
      o = new ot,
      s = {
        value: null,
        needsUpdate: !1
      };

    function h() {
      s.value !== e && (s.value = e, s.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0
    }

    function c(e, i, n, r) {
      var h = null !== e ? e.length : 0,
        c = null;
      if (0 !== h) {
        if (c = s.value, !0 !== r || null === c) {
          var l = n + 4 * h,
            u = i.matrixWorldInverse;
          o.getNormalMatrix(u), (null === c || c.length < l) && (c = new Float32Array(l));
          for (var p = 0, d = n; p !== h; ++p, d += 4) a.copy(e[p]).applyMatrix4(u, o), a.normal.toArray(c, d), c[d + 3] = a.constant
        }
        s.value = c, s.needsUpdate = !0
      }
      return t.numPlanes = h, c
    }
    this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, r, a) {
      var o = 0 !== t.length || r || 0 !== i || n;
      return n = r, e = c(t, a, 0), i = t.length, o
    }, this.beginShadows = function() {
      r = !0, c(null)
    }, this.endShadows = function() {
      r = !1, h()
    }, this.setState = function(t, a, o, l, u, p) {
      if (!n || null === t || 0 === t.length || r && !o) r ? c(null) : h();
      else {
        var d = r ? 0 : i,
          f = 4 * d,
          m = u.clippingState || null;
        s.value = m, m = c(t, l, f, p);
        for (var v = 0; v !== f; ++v) m[v] = e[v];
        u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
      }
    }
  }

  function He(t) {
    var e = {};
    return {
      get: function(i) {
        if (void 0 !== e[i]) return e[i];
        var n;
        switch (i) {
          case "WEBGL_depth_texture":
            n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          default:
            n = t.getExtension(i)
        }
        return e[i] = n, n
      }
    }
  }

  function je(t, e, i) {
    var n = {},
      r = {};

    function a(t) {
      var o = t.target,
        s = n[o.id];
      for (var h in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[h]);
      o.removeEventListener("dispose", a), delete n[o.id];
      var c = r[s.id];
      c && (e.remove(c), delete r[s.id]), i.memory.geometries--
    }
    return {
      get: function(t, e) {
        var r = n[e.id];
        return r || (e.addEventListener("dispose", a), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new me).setFromObject(t)), r = e._bufferGeometry), n[e.id] = r, i.memory.geometries++, r)
      },
      update: function(i) {
        var n = i.index,
          r = i.attributes;
        for (var a in null !== n && e.update(n, t.ELEMENT_ARRAY_BUFFER), r) e.update(r[a], t.ARRAY_BUFFER);
        var o = i.morphAttributes;
        for (var a in o)
          for (var s = o[a], h = 0, c = s.length; h < c; h++) e.update(s[h], t.ARRAY_BUFFER)
      },
      getWireframeAttribute: function(i) {
        var n = r[i.id];
        if (n) return n;
        var a, o = [],
          s = i.index,
          h = i.attributes;
        if (null !== s)
          for (var c = 0, l = (a = s.array).length; c < l; c += 3) {
            var u = a[c + 0],
              p = a[c + 1],
              d = a[c + 2];
            o.push(u, p, p, d, d, u)
          } else
            for (c = 0, l = (a = h.position.array).length / 3 - 1; c < l; c += 3) u = c + 0, p = c + 1, d = c + 2, o.push(u, p, p, d, d, u);
        return n = new(de(o) > 65535 ? ce : se)(o, 1), e.update(n, t.ELEMENT_ARRAY_BUFFER), r[i.id] = n, n
      }
    }
  }

  function We(t, e, i, n) {
    var r, a, o;
    this.setMode = function(t) {
      r = t
    }, this.setIndex = function(t) {
      a = t.type, o = t.bytesPerElement
    }, this.render = function(e, n) {
      t.drawElements(r, n, a, e * o), i.update(n, r)
    }, this.renderInstances = function(s, h, c) {
      var l;
      if (n.isWebGL2) l = t;
      else if (null === (l = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l[n.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](r, c, a, h * o, s.maxInstancedCount), i.update(c, r, s.maxInstancedCount)
    }
  }

  function Xe(t) {
    var e = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function() {
        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
      },
      update: function(i, n, r) {
        switch (r = r || 1, e.calls++, n) {
          case t.TRIANGLES:
            e.triangles += r * (i / 3);
            break;
          case t.TRIANGLE_STRIP:
          case t.TRIANGLE_FAN:
            e.triangles += r * (i - 2);
            break;
          case t.LINES:
            e.lines += r * (i / 2);
            break;
          case t.LINE_STRIP:
            e.lines += r * (i - 1);
            break;
          case t.LINE_LOOP:
            e.lines += r * i;
            break;
          case t.POINTS:
            e.points += r * i;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n)
        }
      }
    }
  }

  function qe(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1])
  }

  function Ye(t) {
    var e = {},
      i = new Float32Array(8);
    return {
      update: function(n, r, a, o) {
        var s = n.morphTargetInfluences,
          h = s.length,
          c = e[r.id];
        if (void 0 === c) {
          c = [];
          for (var l = 0; l < h; l++) c[l] = [l, 0];
          e[r.id] = c
        }
        var u = a.morphTargets && r.morphAttributes.position,
          p = a.morphNormals && r.morphAttributes.normal;
        for (l = 0; l < h; l++) 0 !== (d = c[l])[1] && (u && r.removeAttribute("morphTarget" + l), p && r.removeAttribute("morphNormal" + l));
        for (l = 0; l < h; l++)(d = c[l])[0] = l, d[1] = s[l];
        for (c.sort(qe), l = 0; l < 8; l++) {
          var d;
          if (d = c[l]) {
            var f = d[0],
              m = d[1];
            if (m) {
              u && r.addAttribute("morphTarget" + l, u[f]), p && r.addAttribute("morphNormal" + l, p[f]), i[l] = m;
              continue
            }
          }
          i[l] = 0
        }
        o.getUniforms().setValue(t, "morphTargetInfluences", i)
      }
    }
  }

  function Je(t, e) {
    var i = {};
    return {
      update: function(n) {
        var r = e.render.frame,
          a = n.geometry,
          o = t.get(n, a);
        return i[o.id] !== r && (a.isGeometry && o.updateFromObject(n), t.update(o), i[o.id] = r), o
      },
      dispose: function() {
        i = {}
      }
    }
  }

  function Ze(t, e, i, n, r, a, o, s, c, l) {
    t = void 0 !== t ? t : [], e = void 0 !== e ? e : h, pt.call(this, t, e, i, n, r, a, o, s, c, l), this.flipY = !1
  }
  Ne.prototype = Object.assign(Object.create(e.prototype), {
    constructor: Ne,
    isMaterial: !0,
    onBeforeCompile: function() {},
    setValues: function(t) {
      if (void 0 !== t)
        for (var e in t) {
          var i = t[e];
          if (void 0 !== i)
            if ("shading" !== e) {
              var n = this[e];
              void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
            } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
          else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
        }
    },
    toJSON: function(t) {
      var e = void 0 === t || "string" == typeof t;
      e && (t = {
        textures: {},
        images: {}
      });
      var i = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };

      function n(t) {
        var e = [];
        for (var i in t) {
          var n = t[i];
          delete n.metadata, e.push(n)
        }
        return e
      }
      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearCoat && (i.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (i.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity, void 0 !== this.combine && (i.combine = this.combine), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), !0 === this.flatShading && (i.flatShading = this.flatShading), 0 !== this.side && (i.side = this.side), 0 !== this.vertexColors && (i.vertexColors = this.vertexColors), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.skinning && (i.skinning = !0), !1 === this.visible && (i.visible = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) {
        var r = n(t.textures),
          a = n(t.images);
        r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a)
      }
      return i
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
      var e = t.clippingPlanes,
        i = null;
      if (null !== e) {
        var n = e.length;
        i = new Array(n);
        for (var r = 0; r !== n; ++r) i[r] = e[r].clone()
      }
      return this.clippingPlanes = i, this.shadowSide = t.shadowSide, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), Oe.prototype = Object.create(Ne.prototype), Oe.prototype.constructor = Oe, Oe.prototype.isShaderMaterial = !0, Oe.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = At.clone(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
  }, Oe.prototype.toJSON = function(t) {
    var e = Ne.prototype.toJSON.call(this, t);
    for (var i in e.uniforms = {}, this.uniforms) {
      var n = this.uniforms[i].value;
      n.isTexture ? e.uniforms[i] = {
        type: "t",
        value: n.toJSON(t).uuid
      } : n.isColor ? e.uniforms[i] = {
        type: "c",
        value: n.getHex()
      } : n.isVector2 ? e.uniforms[i] = {
        type: "v2",
        value: n.toArray()
      } : n.isVector3 ? e.uniforms[i] = {
        type: "v3",
        value: n.toArray()
      } : n.isVector4 ? e.uniforms[i] = {
        type: "v4",
        value: n.toArray()
      } : n.isMatrix4 ? e.uniforms[i] = {
        type: "m4",
        value: n.toArray()
      } : e.uniforms[i] = {
        value: n
      }
    }
    return Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
  }, Object.assign(De.prototype, {
    set: function(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this
    },
    at: function(t, e) {
      return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new at), e.copy(this.direction).multiplyScalar(t).add(this.origin)
    },
    lookAt: function(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this
    },
    recast: function() {
      var t = new at;
      return function(e) {
        return this.origin.copy(this.at(e, t)), this
      }
    }(),
    closestPointToPoint: function(t, e) {
      void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new at), e.subVectors(t, this.origin);
      var i = e.dot(this.direction);
      return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
    },
    distanceToPoint: function(t) {
      return Math.sqrt(this.distanceSqToPoint(t))
    },
    distanceSqToPoint: function() {
      var t = new at;
      return function(e) {
        var i = t.subVectors(e, this.origin).dot(this.direction);
        return i < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
      }
    }(),
    distanceSqToSegment: (be = new at, Me = new at, we = new at, function(t, e, i, n) {
      be.copy(t).add(e).multiplyScalar(.5), Me.copy(e).sub(t).normalize(), we.copy(this.origin).sub(be);
      var r, a, o, s, h = .5 * t.distanceTo(e),
        c = -this.direction.dot(Me),
        l = we.dot(this.direction),
        u = -we.dot(Me),
        p = we.lengthSq(),
        d = Math.abs(1 - c * c);
      if (d > 0)
        if (a = c * l - u, s = h * d, (r = c * u - l) >= 0)
          if (a >= -s)
            if (a <= s) {
              var f = 1 / d;
              o = (r *= f) * (r + c * (a *= f) + 2 * l) + a * (c * r + a + 2 * u) + p
            } else a = h, o = -(r = Math.max(0, -(c * a + l))) * r + a * (a + 2 * u) + p;
      else a = -h, o = -(r = Math.max(0, -(c * a + l))) * r + a * (a + 2 * u) + p;
      else a <= -s ? o = -(r = Math.max(0, -(-c * h + l))) * r + (a = r > 0 ? -h : Math.min(Math.max(-h, -u), h)) * (a + 2 * u) + p : a <= s ? (r = 0, o = (a = Math.min(Math.max(-h, -u), h)) * (a + 2 * u) + p) : o = -(r = Math.max(0, -(c * h + l))) * r + (a = r > 0 ? h : Math.min(Math.max(-h, -u), h)) * (a + 2 * u) + p;
      else a = c > 0 ? -h : h, o = -(r = Math.max(0, -(c * a + l))) * r + a * (a + 2 * u) + p;
      return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(Me).multiplyScalar(a).add(be), o
    }),
    intersectSphere: function() {
      var t = new at;
      return function(e, i) {
        t.subVectors(e.center, this.origin);
        var n = t.dot(this.direction),
          r = t.dot(t) - n * n,
          a = e.radius * e.radius;
        if (r > a) return null;
        var o = Math.sqrt(a - r),
          s = n - o,
          h = n + o;
        return s < 0 && h < 0 ? null : s < 0 ? this.at(h, i) : this.at(s, i)
      }
    }(),
    intersectsSphere: function(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius
    },
    distanceToPlane: function(t) {
      var e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      var i = -(this.origin.dot(t.normal) + t.constant) / e;
      return i >= 0 ? i : null
    },
    intersectPlane: function(t, e) {
      var i = this.distanceToPlane(t);
      return null === i ? null : this.at(i, e)
    },
    intersectsPlane: function(t) {
      var e = t.distanceToPoint(this.origin);
      return 0 === e || t.normal.dot(this.direction) * e < 0
    },
    intersectBox: function(t, e) {
      var i, n, r, a, o, s, h = 1 / this.direction.x,
        c = 1 / this.direction.y,
        l = 1 / this.direction.z,
        u = this.origin;
      return h >= 0 ? (i = (t.min.x - u.x) * h, n = (t.max.x - u.x) * h) : (i = (t.max.x - u.x) * h, n = (t.min.x - u.x) * h), c >= 0 ? (r = (t.min.y - u.y) * c, a = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, a = (t.min.y - u.y) * c), i > a || r > n ? null : ((r > i || i != i) && (i = r), (a < n || n != n) && (n = a), l >= 0 ? (o = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), i > s || o > n ? null : ((o > i || i != i) && (i = o), (s < n || n != n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
    },
    intersectsBox: (_e = new at, function(t) {
      return null !== this.intersectBox(t, _e)
    }),
    intersectTriangle: function() {
      var t = new at,
        e = new at,
        i = new at,
        n = new at;
      return function(r, a, o, s, h) {
        e.subVectors(a, r), i.subVectors(o, r), n.crossVectors(e, i);
        var c, l = this.direction.dot(n);
        if (l > 0) {
          if (s) return null;
          c = 1
        } else {
          if (!(l < 0)) return null;
          c = -1, l = -l
        }
        t.subVectors(this.origin, r);
        var u = c * this.direction.dot(i.crossVectors(t, i));
        if (u < 0) return null;
        var p = c * this.direction.dot(e.cross(t));
        if (p < 0) return null;
        if (u + p > l) return null;
        var d = -c * t.dot(n);
        return d < 0 ? null : this.at(d / l, h)
      }
    }(),
    applyMatrix4: function(t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    },
    equals: function(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }
  }), Object.assign(Ue, {
    getNormal: (Ee = new at, function(t, e, i, n) {
      void 0 === n && (console.warn("THREE.Triangle: .getNormal() target is now required"), n = new at), n.subVectors(i, e), Ee.subVectors(t, e), n.cross(Ee);
      var r = n.lengthSq();
      return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
    }),
    getBarycoord: function() {
      var t = new at,
        e = new at,
        i = new at;
      return function(n, r, a, o, s) {
        t.subVectors(o, r), e.subVectors(a, r), i.subVectors(n, r);
        var h = t.dot(t),
          c = t.dot(e),
          l = t.dot(i),
          u = e.dot(e),
          p = e.dot(i),
          d = h * u - c * c;
        if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new at), 0 === d) return s.set(-2, -1, -1);
        var f = 1 / d,
          m = (u * l - c * p) * f,
          v = (h * p - c * l) * f;
        return s.set(1 - m - v, v, m)
      }
    }(),
    containsPoint: function() {
      var t = new at;
      return function(e, i, n, r) {
        return Ue.getBarycoord(e, i, n, r, t), t.x >= 0 && t.y >= 0 && t.x + t.y <= 1
      }
    }(),
    getUV: (Se = new at, function(t, e, i, n, r, a, o, s) {
      return this.getBarycoord(t, e, i, n, Se), s.set(0, 0), s.addScaledVector(r, Se.x), s.addScaledVector(a, Se.y), s.addScaledVector(o, Se.z), s
    })
  }), Object.assign(Ue.prototype, {
    set: function(t, e, i) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
    },
    setFromPointsAndIndices: function(t, e, i, n) {
      return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
    },
    getArea: function() {
      var t = new at,
        e = new at;
      return function() {
        return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
      }
    }(),
    getMidpoint: function(t) {
      return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new at), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    getNormal: function(t) {
      return Ue.getNormal(this.a, this.b, this.c, t)
    },
    getPlane: function(t) {
      return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new at), t.setFromCoplanarPoints(this.a, this.b, this.c)
    },
    getBarycoord: function(t, e) {
      return Ue.getBarycoord(t, this.a, this.b, this.c, e)
    },
    containsPoint: function(t) {
      return Ue.containsPoint(t, this.a, this.b, this.c)
    },
    getUV: function(t, e, i, n, r) {
      return Ue.getUV(t, this.a, this.b, this.c, e, i, n, r)
    },
    intersectsBox: function(t) {
      return t.intersectsTriangle(this)
    },
    closestPointToPoint: (Te = new at, Ae = new at, Le = new at, Ce = new at, Pe = new at, Re = new at, function(t, e) {
      void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new at);
      var i, n, r = this.a,
        a = this.b,
        o = this.c;
      Te.subVectors(a, r), Ae.subVectors(o, r), Ce.subVectors(t, r);
      var s = Te.dot(Ce),
        h = Ae.dot(Ce);
      if (s <= 0 && h <= 0) return e.copy(r);
      Pe.subVectors(t, a);
      var c = Te.dot(Pe),
        l = Ae.dot(Pe);
      if (c >= 0 && l <= c) return e.copy(a);
      var u = s * l - c * h;
      if (u <= 0 && s >= 0 && c <= 0) return i = s / (s - c), e.copy(r).addScaledVector(Te, i);
      Re.subVectors(t, o);
      var p = Te.dot(Re),
        d = Ae.dot(Re);
      if (d >= 0 && p <= d) return e.copy(o);
      var f = p * h - s * d;
      if (f <= 0 && h >= 0 && d <= 0) return n = h / (h - d), e.copy(r).addScaledVector(Ae, n);
      var m = c * d - p * l;
      if (m <= 0 && l - c >= 0 && p - d >= 0) return Le.subVectors(o, a), n = (l - c) / (l - c + (p - d)), e.copy(a).addScaledVector(Le, n);
      var v = 1 / (m + f + u);
      return i = f * v, n = u * v, e.copy(r).addScaledVector(Te, i).addScaledVector(Ae, n)
    }),
    equals: function(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
  }), Be.prototype = Object.create(Ne.prototype), Be.prototype.constructor = Be, Be.prototype.isMeshBasicMaterial = !0, Be.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
  }, ze.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: ze,
    isMesh: !0,
    setDrawMode: function(t) {
      this.drawMode = t
    },
    copy: function(t) {
      return Kt.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
    },
    updateMorphTargets: function() {
      var t, e, i, n = this.geometry;
      if (n.isBufferGeometry) {
        var r = n.morphAttributes,
          a = Object.keys(r);
        if (a.length > 0) {
          var o = r[a[0]];
          if (void 0 !== o)
            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
        }
      } else {
        var s = n.morphTargets;
        if (void 0 !== s && s.length > 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) i = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
      }
    },
    raycast: function() {
      var t = new nt,
        e = new De,
        i = new yt,
        n = new at,
        r = new at,
        a = new at,
        o = new at,
        s = new at,
        h = new at,
        c = new J,
        l = new J,
        u = new J,
        p = new at,
        d = new at;

      function f(t, e, i, n, r, a, o, s) {
        if (null === (1 === e.side ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, 2 !== e.side, s))) return null;
        d.copy(s), d.applyMatrix4(t.matrixWorld);
        var h = i.ray.origin.distanceTo(d);
        return h < i.near || h > i.far ? null : {
          distance: h,
          point: d.clone(),
          object: t
        }
      }

      function m(t, e, i, o, s, h, d, m, v) {
        n.fromBufferAttribute(s, d), r.fromBufferAttribute(s, m), a.fromBufferAttribute(s, v);
        var g = f(t, e, i, o, n, r, a, p);
        if (g) {
          h && (c.fromBufferAttribute(h, d), l.fromBufferAttribute(h, m), u.fromBufferAttribute(h, v), g.uv = Ue.getUV(p, n, r, a, c, l, u, new J));
          var y = new Ot(d, m, v);
          Ue.getNormal(n, r, a, y.normal), g.face = y
        }
        return g
      }
      return function(d, v) {
        var g, y = this.geometry,
          x = this.material,
          _ = this.matrixWorld;
        if (void 0 !== x && (null === y.boundingSphere && y.computeBoundingSphere(), i.copy(y.boundingSphere), i.applyMatrix4(_), !1 !== d.ray.intersectsSphere(i) && (t.getInverse(_), e.copy(d.ray).applyMatrix4(t), null === y.boundingBox || !1 !== e.intersectsBox(y.boundingBox))))
          if (y.isBufferGeometry) {
            var b, M, w, S, E, T, A, L, C, P = y.index,
              R = y.attributes.position,
              I = y.attributes.uv,
              N = y.groups,
              O = y.drawRange;
            if (null !== P)
              if (Array.isArray(x))
                for (S = 0, T = N.length; S < T; S++)
                  for (C = x[(L = N[S]).materialIndex], E = Math.max(L.start, O.start), A = Math.min(L.start + L.count, O.start + O.count); E < A; E += 3) b = P.getX(E), M = P.getX(E + 1), w = P.getX(E + 2), (g = m(this, C, d, e, R, I, b, M, w)) && (g.faceIndex = Math.floor(E / 3), v.push(g));
              else
                for (S = Math.max(0, O.start), T = Math.min(P.count, O.start + O.count); S < T; S += 3) b = P.getX(S), M = P.getX(S + 1), w = P.getX(S + 2), (g = m(this, x, d, e, R, I, b, M, w)) && (g.faceIndex = Math.floor(S / 3), v.push(g));
            else if (void 0 !== R)
              if (Array.isArray(x))
                for (S = 0, T = N.length; S < T; S++)
                  for (C = x[(L = N[S]).materialIndex], E = Math.max(L.start, O.start), A = Math.min(L.start + L.count, O.start + O.count); E < A; E += 3)(g = m(this, C, d, e, R, I, b = E, M = E + 1, w = E + 2)) && (g.faceIndex = Math.floor(E / 3), v.push(g));
              else
                for (S = Math.max(0, O.start), T = Math.min(R.count, O.start + O.count); S < T; S += 3)(g = m(this, x, d, e, R, I, b = S, M = S + 1, w = S + 2)) && (g.faceIndex = Math.floor(S / 3), v.push(g))
          } else if (y.isGeometry) {
          var D, U, B, z, F = Array.isArray(x),
            G = y.vertices,
            V = y.faces,
            k = y.faceVertexUvs[0];
          k.length > 0 && (z = k);
          for (var H = 0, j = V.length; H < j; H++) {
            var W = V[H],
              X = F ? x[W.materialIndex] : x;
            if (void 0 !== X) {
              if (D = G[W.a], U = G[W.b], B = G[W.c], !0 === X.morphTargets) {
                var q = y.morphTargets,
                  Y = this.morphTargetInfluences;
                n.set(0, 0, 0), r.set(0, 0, 0), a.set(0, 0, 0);
                for (var Z = 0, K = q.length; Z < K; Z++) {
                  var Q = Y[Z];
                  if (0 !== Q) {
                    var $ = q[Z].vertices;
                    n.addScaledVector(o.subVectors($[W.a], D), Q), r.addScaledVector(s.subVectors($[W.b], U), Q), a.addScaledVector(h.subVectors($[W.c], B), Q)
                  }
                }
                n.add(D), r.add(U), a.add(B), D = n, U = r, B = a
              }
              if (g = f(this, X, d, e, D, U, B, p)) {
                if (z && z[H]) {
                  var tt = z[H];
                  c.copy(tt[0]), l.copy(tt[1]), u.copy(tt[2]), g.uv = Ue.getUV(p, D, U, B, c, l, u, new J)
                }
                g.face = W, g.faceIndex = H, v.push(g)
              }
            }
          }
        }
      }
    }(),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), Ze.prototype = Object.create(pt.prototype), Ze.prototype.constructor = Ze, Ze.prototype.isCubeTexture = !0, Object.defineProperty(Ze.prototype, "images", {
    get: function() {
      return this.image
    },
    set: function(t) {
      this.image = t
    }
  });
  var Ke = new pt,
    Qe = new Ze;

  function $e() {
    this.seq = [], this.map = {}
  }
  var ti = [],
    ei = [],
    ii = new Float32Array(16),
    ni = new Float32Array(9),
    ri = new Float32Array(4);

  function ai(t, e, i) {
    var n = t[0];
    if (n <= 0 || n > 0) return t;
    var r = e * i,
      a = ti[r];
    if (void 0 === a && (a = new Float32Array(r), ti[r] = a), 0 !== e) {
      n.toArray(a, 0);
      for (var o = 1, s = 0; o !== e; ++o) s += i, t[o].toArray(a, s)
    }
    return a
  }

  function oi(t, e) {
    if (t.length !== e.length) return !1;
    for (var i = 0, n = t.length; i < n; i++)
      if (t[i] !== e[i]) return !1;
    return !0
  }

  function si(t, e) {
    for (var i = 0, n = e.length; i < n; i++) t[i] = e[i]
  }

  function hi(t, e) {
    var i = ei[e];
    void 0 === i && (i = new Int32Array(e), ei[e] = i);
    for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit();
    return i
  }

  function ci(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
  }

  function li(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
  }

  function ui(t, e) {
    var i = this.cache;
    void 0 !== e.x ? i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y) : i[0] === e[0] && i[1] === e[1] || (t.uniform2fv(this.addr, e), i[0] = e[0], i[1] = e[1])
  }

  function pi(t, e) {
    var i = this.cache;
    void 0 !== e.x ? i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z) : void 0 !== e.r ? i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b) : i[0] === e[0] && i[1] === e[1] && i[2] === e[2] || (t.uniform3fv(this.addr, e), i[0] = e[0], i[1] = e[1], i[2] = e[2])
  }

  function di(t, e) {
    var i = this.cache;
    void 0 !== e.x ? i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w) : i[0] === e[0] && i[1] === e[1] && i[2] === e[2] && i[3] === e[3] || (t.uniform4fv(this.addr, e), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3])
  }

  function fi(t, e) {
    var i = this.cache,
      n = e.elements;
    if (void 0 === n) {
      if (oi(i, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), si(i, e)
    } else {
      if (oi(i, n)) return;
      ri.set(n), t.uniformMatrix2fv(this.addr, !1, ri), si(i, n)
    }
  }

  function mi(t, e) {
    var i = this.cache,
      n = e.elements;
    if (void 0 === n) {
      if (oi(i, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), si(i, e)
    } else {
      if (oi(i, n)) return;
      ni.set(n), t.uniformMatrix3fv(this.addr, !1, ni), si(i, n)
    }
  }

  function vi(t, e) {
    var i = this.cache,
      n = e.elements;
    if (void 0 === n) {
      if (oi(i, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), si(i, e)
    } else {
      if (oi(i, n)) return;
      ii.set(n), t.uniformMatrix4fv(this.addr, !1, ii), si(i, n)
    }
  }

  function gi(t, e, i) {
    var n = this.cache,
      r = i.allocTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || Ke, r)
  }

  function yi(t, e, i) {
    var n = this.cache,
      r = i.allocTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || Qe, r)
  }

  function xi(t, e) {
    var i = this.cache;
    oi(i, e) || (t.uniform2iv(this.addr, e), si(i, e))
  }

  function _i(t, e) {
    var i = this.cache;
    oi(i, e) || (t.uniform3iv(this.addr, e), si(i, e))
  }

  function bi(t, e) {
    var i = this.cache;
    oi(i, e) || (t.uniform4iv(this.addr, e), si(i, e))
  }

  function Mi(t, e) {
    var i = this.cache;
    oi(i, e) || (t.uniform1fv(this.addr, e), si(i, e))
  }

  function wi(t, e) {
    var i = this.cache;
    oi(i, e) || (t.uniform1iv(this.addr, e), si(i, e))
  }

  function Si(t, e) {
    var i = this.cache,
      n = ai(e, this.size, 2);
    oi(i, n) || (t.uniform2fv(this.addr, n), this.updateCache(n))
  }

  function Ei(t, e) {
    var i = this.cache,
      n = ai(e, this.size, 3);
    oi(i, n) || (t.uniform3fv(this.addr, n), this.updateCache(n))
  }

  function Ti(t, e) {
    var i = this.cache,
      n = ai(e, this.size, 4);
    oi(i, n) || (t.uniform4fv(this.addr, n), this.updateCache(n))
  }

  function Ai(t, e) {
    var i = this.cache,
      n = ai(e, this.size, 4);
    oi(i, n) || (t.uniformMatrix2fv(this.addr, !1, n), this.updateCache(n))
  }

  function Li(t, e) {
    var i = this.cache,
      n = ai(e, this.size, 9);
    oi(i, n) || (t.uniformMatrix3fv(this.addr, !1, n), this.updateCache(n))
  }

  function Ci(t, e) {
    var i = this.cache,
      n = ai(e, this.size, 16);
    oi(i, n) || (t.uniformMatrix4fv(this.addr, !1, n), this.updateCache(n))
  }

  function Pi(t, e, i) {
    var n = this.cache,
      r = e.length,
      a = hi(i, r);
    !1 === oi(n, a) && (t.uniform1iv(this.addr, a), si(n, a));
    for (var o = 0; o !== r; ++o) i.setTexture2D(e[o] || Ke, a[o])
  }

  function Ri(t, e, i) {
    var n = this.cache,
      r = e.length,
      a = hi(i, r);
    !1 === oi(n, a) && (t.uniform1iv(this.addr, a), si(n, a));
    for (var o = 0; o !== r; ++o) i.setTextureCube(e[o] || Qe, a[o])
  }

  function Ii(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) {
      switch (t) {
        case 5126:
          return ci;
        case 35664:
          return ui;
        case 35665:
          return pi;
        case 35666:
          return di;
        case 35674:
          return fi;
        case 35675:
          return mi;
        case 35676:
          return vi;
        case 35678:
        case 36198:
          return gi;
        case 35680:
          return yi;
        case 5124:
        case 35670:
          return li;
        case 35667:
        case 35671:
          return xi;
        case 35668:
        case 35672:
          return _i;
        case 35669:
        case 35673:
          return bi
      }
    }(e.type)
  }

  function Ni(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) {
      switch (t) {
        case 5126:
          return Mi;
        case 35664:
          return Si;
        case 35665:
          return Ei;
        case 35666:
          return Ti;
        case 35674:
          return Ai;
        case 35675:
          return Li;
        case 35676:
          return Ci;
        case 35678:
          return Pi;
        case 35680:
          return Ri;
        case 5124:
        case 35670:
          return wi;
        case 35667:
        case 35671:
          return xi;
        case 35668:
        case 35672:
          return _i;
        case 35669:
        case 35673:
          return bi
      }
    }(e.type)
  }

  function Oi(t) {
    this.id = t, $e.call(this)
  }
  Ni.prototype.updateCache = function(t) {
    var e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), si(e, t)
  }, Oi.prototype.setValue = function(t, e, i) {
    for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
      var o = n[r];
      o.setValue(t, e[o.id], i)
    }
  };
  var Di = /([\w\d_]+)(\])?(\[|\.)?/g;

  function Ui(t, e) {
    t.seq.push(e), t.map[e.id] = e
  }

  function Bi(t, e, i) {
    var n = t.name,
      r = n.length;
    for (Di.lastIndex = 0;;) {
      var a = Di.exec(n);
      if (!a) break;
      var o = Di.lastIndex,
        s = a[1],
        h = "]" === a[2],
        c = a[3];
      if (h && (s |= 0), void 0 === c || "[" === c && o + 2 === r) {
        Ui(i, void 0 === c ? new Ii(s, t, e) : new Ni(s, t, e));
        break
      }
      var l = i.map[s];
      void 0 === l && Ui(i, l = new Oi(s)), i = l
    }
  }

  function zi(t, e, i) {
    $e.call(this), this.renderer = i;
    for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < n; ++r) {
      var a = t.getActiveUniform(e, r);
      Bi(a, t.getUniformLocation(e, a.name), this)
    }
  }

  function Fi(t, e, i) {
    var n = t.createShader(e);
    return t.shaderSource(n, i), t.compileShader(n), !1 === t.getShaderParameter(n, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), n
  }
  zi.prototype.setValue = function(t, e, i) {
    var n = this.map[e];
    void 0 !== n && n.setValue(t, i, this.renderer)
  }, zi.prototype.setOptional = function(t, e, i) {
    var n = e[i];
    void 0 !== n && this.setValue(t, i, n)
  }, zi.upload = function(t, e, i, n) {
    for (var r = 0, a = e.length; r !== a; ++r) {
      var o = e[r],
        s = i[o.id];
      !1 !== s.needsUpdate && o.setValue(t, s.value, n)
    }
  }, zi.seqWithValue = function(t, e) {
    for (var i = [], n = 0, r = t.length; n !== r; ++n) {
      var a = t[n];
      a.id in e && i.push(a)
    }
    return i
  };
  var Gi = 0;

  function Vi(t) {
    switch (t) {
      case X:
        return ["Linear", "( value )"];
      case 3001:
        return ["sRGB", "( value )"];
      case 3002:
        return ["RGBE", "( value )"];
      case 3004:
        return ["RGBM", "( value, 7.0 )"];
      case 3005:
        return ["RGBM", "( value, 16.0 )"];
      case 3006:
        return ["RGBD", "( value, 256.0 )"];
      case q:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      default:
        throw new Error("unsupported encoding: " + t)
    }
  }

  function ki(t, e) {
    var i = Vi(e);
    return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
  }

  function Hi(t, e) {
    var i;
    switch (e) {
      case 1:
        i = "Linear";
        break;
      case 2:
        i = "Reinhard";
        break;
      case 3:
        i = "Uncharted2";
        break;
      case 4:
        i = "OptimizedCineon";
        break;
      default:
        throw new Error("unsupported toneMapping: " + e)
    }
    return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
  }

  function ji(t) {
    return "" !== t
  }

  function Wi(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
  }

  function Xi(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
  }

  function qi(t) {
    return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, (function(t, e) {
      var i = Tt[e];
      if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
      return qi(i)
    }))
  }

  function Yi(t) {
    return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, (function(t, e, i, n) {
      for (var r = "", a = parseInt(e); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]");
      return r
    }))
  }

  function Ji(t) {
    return t = (t = (t = (t = t.replace(/\r/g, "")).replace(/    /g, "\t")).replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")).split("\n").map((function(t) {
      return t.trimEnd()
    })).join("\n"), (t += "\n").replace(/\n{2,}/g, "\n")
  }

  function Zi(t, e, i, n, r, a, o) {
    var s = t.context,
      d = n.defines,
      f = r.vertexShader,
      m = r.fragmentShader,
      v = "SHADOWMAP_TYPE_BASIC";
    1 === a.shadowMapType ? v = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType && (v = "SHADOWMAP_TYPE_PCF_SOFT");
    var g = "ENVMAP_TYPE_CUBE",
      y = "ENVMAP_MODE_REFLECTION",
      x = "ENVMAP_BLENDING_MULTIPLY";
    if (a.envMap) {
      switch (n.envMap.mapping) {
        case h:
        case c:
          g = "ENVMAP_TYPE_CUBE";
          break;
        case u:
        case p:
          g = "ENVMAP_TYPE_CUBE_UV";
          break;
        case 303:
        case l:
          g = "ENVMAP_TYPE_EQUIREC";
          break;
        case 305:
          g = "ENVMAP_TYPE_SPHERE"
      }
      switch (n.envMap.mapping) {
        case c:
        case l:
          y = "ENVMAP_MODE_REFRACTION"
      }
      switch (n.combine) {
        case 0:
          x = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case 1:
          x = "ENVMAP_BLENDING_MIX";
          break;
        case 2:
          x = "ENVMAP_BLENDING_ADD"
      }
    }
    var _, b, M, w, S = t.gammaFactor > 0 ? t.gammaFactor : 1,
      E = o.isWebGL2 ? "" : function(t, e, i) {
        return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ji).join("\n")
      }(n.extensions, a, e),
      T = function(t) {
        var e = [];
        for (var i in t) {
          var n = t[i];
          !1 !== n && e.push("#define " + i + " " + n)
        }
        return e.join("\n")
      }(d),
      A = s.createProgram();
    if (n.isRawShaderMaterial ? ((_ = [T].filter(ji).join("\n")).length > 0 && (_ += "\n"), (b = [E, T].filter(ji).join("\n")).length > 0 && (b += "\n")) : (_ = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, T, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + S, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + y : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + v : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(ji).join("\n"), b = [E, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, T, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + S, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + g : "", a.envMap ? "#define " + y : "", a.envMap ? "#define " + x : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + v : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== a.toneMapping ? "#define TONE_MAPPING" : "", 0 !== a.toneMapping ? Tt.tonemapping_pars_fragment : "", 0 !== a.toneMapping ? Hi("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? Tt.encodings_pars_fragment : "", a.mapEncoding ? ki("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? ki("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? ki("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? ki("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? ("linearToOutputTexel", M = a.outputEncoding, w = Vi(M), "vec4 linearToOutputTexel( vec4 value ) { return LinearTo" + w[0] + w[1] + "; }") : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(ji).join("\n")), f = Xi(f = Wi(f = qi(f), a), a), m = Xi(m = Wi(m = qi(m), a), a), f = Yi(f), m = Yi(m), o.isWebGL2 && !n.isRawShaderMaterial) {
      var L = !1,
        C = /^\s*#version\s+300\s+es\s*\n/;
      n.isShaderMaterial && null !== f.match(C) && null !== m.match(C) && (L = !0, f = f.replace(C, ""), m = m.replace(C, "")), _ = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _, b = ["#version 300 es\n", "#define varying in", L ? "" : "out highp vec4 pc_fragColor;", L ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + b
    }
    var P = _ + f,
      R = b + m;
    P = Ji(P), R = Ji(R);
    var I, N, O = Fi(s, s.VERTEX_SHADER, P),
      D = Fi(s, s.FRAGMENT_SHADER, R);
    return s.attachShader(A, O), s.attachShader(A, D), void 0 !== n.index0AttributeName ? s.bindAttribLocation(A, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(A, 0, "position"), s.linkProgram(A), s.deleteShader(O), s.deleteShader(D), this.getUniforms = function() {
      return void 0 === I && (I = new zi(s, A, t)), I
    }, this.getAttributes = function() {
      return void 0 === N && (N = function(t, e) {
        for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++) {
          var a = t.getActiveAttrib(e, r).name;
          i[a] = t.getAttribLocation(e, a)
        }
        return i
      }(s, A)), N
    }, this.destroy = function() {
      s.deleteProgram(A), this.program = void 0
    }, Object.defineProperties(this, {
      uniforms: {
        get: function() {
          return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
        }
      },
      attributes: {
        get: function() {
          return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
        }
      }
    }), this.name = r.name, this.id = Gi++, this.code = i, this.usedTimes = 1, this.program = A, this.vertexShader = O, this.fragmentShader = D, this
  }

  function Ki(t, e, i) {
    var n = [],
      r = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "phong",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
      },
      a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

    function o(t, e) {
      var i;
      return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = t.texture.encoding) : i = X, i === X && e && (i = q), i
    }
    this.getParameters = function(e, n, a, s, h, c, l) {
      var d = r[e.type],
        f = l.isSkinnedMesh ? function(t) {
          var e = t.skeleton.bones;
          if (i.floatVertexTextures) return 1024;
          var n = i.maxVertexUniforms,
            r = Math.floor((n - 20) / 4),
            a = Math.min(r, e.length);
          return a < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + a + "."), 0) : a
        }(l) : 0,
        m = i.precision;
      null !== e.precision && (m = i.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", m, "instead.");
      var v = t.getRenderTarget();
      return {
        shaderID: d,
        precision: m,
        supportsVertexTextures: i.vertexTextures,
        outputEncoding: o(v ? v.texture : null, t.gammaOutput),
        map: !!e.map,
        mapEncoding: o(e.map, t.gammaInput),
        matcap: !!e.matcap,
        matcapEncoding: o(e.matcap, t.gammaInput),
        envMap: !!e.envMap,
        envMapMode: e.envMap && e.envMap.mapping,
        envMapEncoding: o(e.envMap, t.gammaInput),
        envMapCubeUV: !!e.envMap && (e.envMap.mapping === u || e.envMap.mapping === p),
        lightMap: !!e.lightMap,
        aoMap: !!e.aoMap,
        emissiveMap: !!e.emissiveMap,
        emissiveMapEncoding: o(e.emissiveMap, t.gammaInput),
        bumpMap: !!e.bumpMap,
        normalMap: !!e.normalMap,
        objectSpaceNormalMap: 1 === e.normalMapType,
        displacementMap: !!e.displacementMap,
        roughnessMap: !!e.roughnessMap,
        metalnessMap: !!e.metalnessMap,
        specularMap: !!e.specularMap,
        alphaMap: !!e.alphaMap,
        gradientMap: !!e.gradientMap,
        combine: e.combine,
        vertexColors: e.vertexColors,
        fog: !!s,
        useFog: e.fog,
        fogExp: s && s.isFogExp2,
        flatShading: e.flatShading,
        sizeAttenuation: e.sizeAttenuation,
        logarithmicDepthBuffer: i.logarithmicDepthBuffer,
        skinning: e.skinning && f > 0,
        maxBones: f,
        useVertexTexture: i.floatVertexTextures,
        morphTargets: e.morphTargets,
        morphNormals: e.morphNormals,
        maxMorphTargets: t.maxMorphTargets,
        maxMorphNormals: t.maxMorphNormals,
        numDirLights: n.directional.length,
        numPointLights: n.point.length,
        numSpotLights: n.spot.length,
        numRectAreaLights: n.rectArea.length,
        numHemiLights: n.hemi.length,
        numClippingPlanes: h,
        numClipIntersection: c,
        dithering: e.dithering,
        shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && a.length > 0,
        shadowMapType: t.shadowMap.type,
        toneMapping: t.toneMapping,
        physicallyCorrectLights: t.physicallyCorrectLights,
        premultipliedAlpha: e.premultipliedAlpha,
        alphaTest: e.alphaTest,
        doubleSided: 2 === e.side,
        flipSided: 1 === e.side,
        depthPacking: void 0 !== e.depthPacking && e.depthPacking
      }
    }, this.getProgramCode = function(e, i) {
      var n = [];
      if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
        for (var r in e.defines) n.push(r), n.push(e.defines[r]);
      for (var o = 0; o < a.length; o++) n.push(i[a[o]]);
      return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.join()
    }, this.acquireProgram = function(r, a, o, s) {
      for (var h, c = 0, l = n.length; c < l; c++) {
        var u = n[c];
        if (u.code === s) {
          ++(h = u).usedTimes;
          break
        }
      }
      return void 0 === h && (h = new Zi(t, e, s, r, a, o, i), n.push(h)), h
    }, this.releaseProgram = function(t) {
      if (0 == --t.usedTimes) {
        var e = n.indexOf(t);
        n[e] = n[n.length - 1], n.pop(), t.destroy()
      }
    }, this.programs = n
  }

  function Qi() {
    var t = new WeakMap;
    return {
      get: function(e) {
        var i = t.get(e);
        return void 0 === i && (i = {}, t.set(e, i)), i
      },
      remove: function(e) {
        t.delete(e)
      },
      update: function(e, i, n) {
        t.get(e)[i] = n
      },
      dispose: function() {
        t = new WeakMap
      }
    }
  }

  function $i(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
  }

  function tn(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
  }

  function en() {
    var t = [],
      e = 0,
      i = [],
      n = [];
    return {
      opaque: i,
      transparent: n,
      init: function() {
        e = 0, i.length = 0, n.length = 0
      },
      push: function(r, a, o, s, h) {
        var c = t[e];
        void 0 === c ? (c = {
          id: r.id,
          object: r,
          geometry: a,
          material: o,
          program: o.program,
          renderOrder: r.renderOrder,
          z: s,
          group: h
        }, t[e] = c) : (c.id = r.id, c.object = r, c.geometry = a, c.material = o, c.program = o.program, c.renderOrder = r.renderOrder, c.z = s, c.group = h), (!0 === o.transparent ? n : i).push(c), e++
      },
      sort: function() {
        i.length > 1 && i.sort($i), n.length > 1 && n.sort(tn)
      }
    }
  }

  function nn() {
    var t = {};
    return {
      get: function(e, i) {
        var n = e.id + "," + i.id,
          r = t[n];
        return void 0 === r && (r = new en, t[n] = r), r
      },
      dispose: function() {
        t = {}
      }
    }
  }

  function rn() {
    var t = {};
    return {
      get: function(e) {
        if (void 0 !== t[e.id]) return t[e.id];
        var i;
        switch (e.type) {
          case "DirectionalLight":
            i = {
              direction: new at,
              color: new Ct,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new J
            };
            break;
          case "SpotLight":
            i = {
              position: new at,
              direction: new at,
              color: new Ct,
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new J
            };
            break;
          case "PointLight":
            i = {
              position: new at,
              color: new Ct,
              distance: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new J,
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
          case "HemisphereLight":
            i = {
              direction: new at,
              skyColor: new Ct,
              groundColor: new Ct
            };
            break;
          case "RectAreaLight":
            i = {
              color: new Ct,
              position: new at,
              halfWidth: new at,
              halfHeight: new at
            }
        }
        return t[e.id] = i, i
      }
    }
  }
  var an, on, sn, hn, cn, ln, un, pn, dn, fn = 0;

  function mn() {
    var t = new rn,
      e = {
        id: fn++,
        hash: {
          stateID: -1,
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          shadowsLength: -1
        },
        ambient: [0, 0, 0],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
      },
      i = new at,
      n = new nt,
      r = new nt;
    return {
      setup: function(a, o, s) {
        for (var h = 0, c = 0, l = 0, u = 0, p = 0, d = 0, f = 0, m = 0, v = s.matrixWorldInverse, g = 0, y = a.length; g < y; g++) {
          var x = a[g],
            _ = x.color,
            b = x.intensity,
            M = x.distance,
            w = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
          if (x.isAmbientLight) h += _.r * b, c += _.g * b, l += _.b * b;
          else if (x.isDirectionalLight) {
            if ((E = t.get(x)).color.copy(x.color).multiplyScalar(x.intensity), E.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(v), E.shadow = x.castShadow, x.castShadow) {
              var S = x.shadow;
              E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize
            }
            e.directionalShadowMap[u] = w, e.directionalShadowMatrix[u] = x.shadow.matrix, e.directional[u] = E, u++
          } else if (x.isSpotLight)(E = t.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(v), E.color.copy(_).multiplyScalar(b), E.distance = M, E.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(v), E.coneCos = Math.cos(x.angle), E.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), E.decay = 0 === x.distance ? 0 : x.decay, E.shadow = x.castShadow, x.castShadow && (S = x.shadow, E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize), e.spotShadowMap[d] = w, e.spotShadowMatrix[d] = x.shadow.matrix, e.spot[d] = E, d++;
          else if (x.isRectAreaLight)(E = t.get(x)).color.copy(_).multiplyScalar(b), E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(v), r.identity(), n.copy(x.matrixWorld), n.premultiply(v), r.extractRotation(n), E.halfWidth.set(.5 * x.width, 0, 0), E.halfHeight.set(0, .5 * x.height, 0), E.halfWidth.applyMatrix4(r), E.halfHeight.applyMatrix4(r), e.rectArea[f] = E, f++;
          else if (x.isPointLight)(E = t.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(v), E.color.copy(x.color).multiplyScalar(x.intensity), E.distance = x.distance, E.decay = 0 === x.distance ? 0 : x.decay, E.shadow = x.castShadow, x.castShadow && (S = x.shadow, E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize, E.shadowCameraNear = S.camera.near, E.shadowCameraFar = S.camera.far), e.pointShadowMap[p] = w, e.pointShadowMatrix[p] = x.shadow.matrix, e.point[p] = E, p++;
          else if (x.isHemisphereLight) {
            var E;
            (E = t.get(x)).direction.setFromMatrixPosition(x.matrixWorld), E.direction.transformDirection(v), E.direction.normalize(), E.skyColor.copy(x.color).multiplyScalar(b), E.groundColor.copy(x.groundColor).multiplyScalar(b), e.hemi[m] = E, m++
          }
        }
        e.ambient[0] = h, e.ambient[1] = c, e.ambient[2] = l, e.directional.length = u, e.spot.length = d, e.rectArea.length = f, e.point.length = p, e.hemi.length = m, e.hash.stateID = e.id, e.hash.directionalLength = u, e.hash.pointLength = p, e.hash.spotLength = d, e.hash.rectAreaLength = f, e.hash.hemiLength = m, e.hash.shadowsLength = o.length
      },
      state: e
    }
  }

  function vn() {
    var t = new mn,
      e = [],
      i = [];
    return {
      init: function() {
        e.length = 0, i.length = 0
      },
      state: {
        lightsArray: e,
        shadowsArray: i,
        lights: t
      },
      setupLights: function(n) {
        t.setup(e, i, n)
      },
      pushLight: function(t) {
        e.push(t)
      },
      pushShadow: function(t) {
        i.push(t)
      }
    }
  }

  function gn() {
    var t = {};
    return {
      get: function(e, i) {
        var n;
        return void 0 === t[e.id] ? (n = new vn, t[e.id] = {}, t[e.id][i.id] = n) : void 0 === t[e.id][i.id] ? (n = new vn, t[e.id][i.id] = n) : n = t[e.id][i.id], n
      },
      dispose: function() {
        t = {}
      }
    }
  }

  function yn(t) {
    Ne.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
  }

  function xn(t) {
    Ne.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new at, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
  }

  function _n(t, e, i) {
    for (var n = new Mt, r = new nt, a = new J, o = new J(i, i), s = new at, h = new at, c = new Array(4), l = new Array(4), u = {}, p = {
        0: 1,
        1: 0,
        2: 2
      }, d = [new at(1, 0, 0), new at(-1, 0, 0), new at(0, 0, 1), new at(0, 0, -1), new at(0, 1, 0), new at(0, -1, 0)], f = [new at(0, 1, 0), new at(0, 1, 0), new at(0, 1, 0), new at(0, 1, 0), new at(0, 0, 1), new at(0, 0, -1)], m = [new dt, new dt, new dt, new dt, new dt, new dt], g = 0; 4 !== g; ++g) {
      var y = !!(1 & g),
        x = !!(2 & g),
        _ = new yn({
          depthPacking: 3201,
          morphTargets: y,
          skinning: x
        });
      c[g] = _;
      var b = new xn({
        morphTargets: y,
        skinning: x
      });
      l[g] = b
    }
    var M = this;

    function w(e, i, n, r, a, o) {
      var s = e.geometry,
        h = null,
        d = c,
        f = e.customDepthMaterial;
      if (n && (d = l, f = e.customDistanceMaterial), f) h = f;
      else {
        var m = !1;
        i.morphTargets && (s && s.isBufferGeometry ? m = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (m = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && !1 === i.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
        var v = 0;
        m && (v |= 1), e.isSkinnedMesh && i.skinning && (v |= 2), h = d[v]
      }
      if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
        var g = h.uuid,
          y = i.uuid,
          x = u[g];
        void 0 === x && (x = {}, u[g] = x);
        var _ = x[y];
        void 0 === _ && (_ = h.clone(), x[y] = _), h = _
      }
      return h.visible = i.visible, h.wireframe = i.wireframe, h.side = null != i.shadowSide ? i.shadowSide : p[i.side], h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, n && h.isMeshDistanceMaterial && (h.referencePosition.copy(r), h.nearDistance = a, h.farDistance = o), h
    }

    function S(i, r, a, o) {
      if (!1 !== i.visible) {
        if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || n.intersectsObject(i))) {
          i.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, i.matrixWorld);
          var s = e.update(i),
            c = i.material;
          if (Array.isArray(c))
            for (var l = s.groups, u = 0, p = l.length; u < p; u++) {
              var d = l[u],
                f = c[d.materialIndex];
              if (f && f.visible) {
                var m = w(i, f, o, h, a.near, a.far);
                t.renderBufferDirect(a, null, s, m, i, d)
              }
            } else c.visible && (m = w(i, c, o, h, a.near, a.far), t.renderBufferDirect(a, null, s, m, i, null))
        }
        for (var v = i.children, g = 0, y = v.length; g < y; g++) S(v[g], r, a, o)
      }
    }
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, i, c) {
      if (!1 !== M.enabled && (!1 !== M.autoUpdate || !1 !== M.needsUpdate) && 0 !== e.length) {
        var l, u = t.context,
          p = t.state;
        p.disable(u.BLEND), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
        for (var g = 0, y = e.length; g < y; g++) {
          var x = e[g],
            _ = x.shadow,
            b = x && x.isPointLight;
          if (void 0 !== _) {
            var w = _.camera;
            if (a.copy(_.mapSize), a.min(o), b) {
              var E = a.x,
                T = a.y;
              m[0].set(2 * E, T, E, T), m[1].set(0, T, E, T), m[2].set(3 * E, T, E, T), m[3].set(E, T, E, T), m[4].set(3 * E, 0, E, T), m[5].set(E, 0, E, T), a.x *= 4, a.y *= 2
            }
            if (null === _.map) {
              var A = {
                minFilter: v,
                magFilter: v,
                format: C
              };
              _.map = new ft(a.x, a.y, A), _.map.texture.name = x.name + ".shadowMap", w.updateProjectionMatrix()
            }
            _.isSpotLightShadow && _.update(x);
            var L = _.map,
              P = _.matrix;
            h.setFromMatrixPosition(x.matrixWorld), w.position.copy(h), b ? (l = 6, P.makeTranslation(-h.x, -h.y, -h.z)) : (l = 1, s.setFromMatrixPosition(x.target.matrixWorld), w.lookAt(s), w.updateMatrixWorld(), P.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), P.multiply(w.projectionMatrix), P.multiply(w.matrixWorldInverse)), t.setRenderTarget(L), t.clear();
            for (var R = 0; R < l; R++) {
              if (b) {
                s.copy(w.position), s.add(d[R]), w.up.copy(f[R]), w.lookAt(s), w.updateMatrixWorld();
                var I = m[R];
                p.viewport(I)
              }
              r.multiplyMatrices(w.projectionMatrix, w.matrixWorldInverse), n.setFromMatrix(r), S(i, c, w, b)
            }
          } else console.warn("THREE.WebGLShadowMap:", x, "has no shadow.")
        }
        M.needsUpdate = !1
      }
    }
  }

  function bn(t, e, i, n) {
    var a = new function() {
        var e = !1,
          i = new dt,
          n = null,
          r = new dt(0, 0, 0, 0);
        return {
          setMask: function(i) {
            n === i || e || (t.colorMask(i, i, i, i), n = i)
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(e, n, a, o, s) {
            !0 === s && (e *= o, n *= o, a *= o), i.set(e, n, a, o), !1 === r.equals(i) && (t.clearColor(e, n, a, o), r.copy(i))
          },
          reset: function() {
            e = !1, n = null, r.set(-1, 0, 0, 0)
          }
        }
      },
      o = new function() {
        var e = !1,
          i = null,
          n = null,
          r = null;
        return {
          setTest: function(e) {
            e ? G(t.DEPTH_TEST) : V(t.DEPTH_TEST)
          },
          setMask: function(n) {
            i === n || e || (t.depthMask(n), i = n)
          },
          setFunc: function(e) {
            if (n !== e) {
              if (e) switch (e) {
                case 0:
                  t.depthFunc(t.NEVER);
                  break;
                case 1:
                  t.depthFunc(t.ALWAYS);
                  break;
                case 2:
                  t.depthFunc(t.LESS);
                  break;
                case 3:
                default:
                  t.depthFunc(t.LEQUAL);
                  break;
                case 4:
                  t.depthFunc(t.EQUAL);
                  break;
                case 5:
                  t.depthFunc(t.GEQUAL);
                  break;
                case 6:
                  t.depthFunc(t.GREATER);
                  break;
                case 7:
                  t.depthFunc(t.NOTEQUAL)
              } else t.depthFunc(t.LEQUAL);
              n = e
            }
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(e) {
            r !== e && (t.clearDepth(e), r = e)
          },
          reset: function() {
            e = !1, i = null, n = null, r = null
          }
        }
      },
      s = new function() {
        var e = !1,
          i = null,
          n = null,
          r = null,
          a = null,
          o = null,
          s = null,
          h = null,
          c = null;
        return {
          setTest: function(e) {
            e ? G(t.STENCIL_TEST) : V(t.STENCIL_TEST)
          },
          setMask: function(n) {
            i === n || e || (t.stencilMask(n), i = n)
          },
          setFunc: function(e, i, o) {
            n === e && r === i && a === o || (t.stencilFunc(e, i, o), n = e, r = i, a = o)
          },
          setOp: function(e, i, n) {
            o === e && s === i && h === n || (t.stencilOp(e, i, n), o = e, s = i, h = n)
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(e) {
            c !== e && (t.clearStencil(e), c = e)
          },
          reset: function() {
            e = !1, i = null, n = null, r = null, a = null, o = null, s = null, h = null, c = null
          }
        }
      },
      h = t.getParameter(t.MAX_VERTEX_ATTRIBS);
    h < 8 && (h = 8), h > n.maxVertexAttribs && (h = n.maxVertexAttribs);
    var c = new Uint8Array(h),
      l = new Uint8Array(h),
      u = new Uint8Array(h),
      p = {},
      d = null,
      f = null,
      m = null,
      v = null,
      g = null,
      y = null,
      x = null,
      _ = null,
      b = null,
      M = null,
      w = !1,
      S = null,
      E = null,
      T = null,
      A = null,
      L = null,
      C = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
      P = !1,
      R = 0,
      I = t.getParameter(t.VERSION);
    I ? I.indexOf && -1 !== I.indexOf("WebGL") ? (R = parseFloat(/^WebGL\ ([0-9])/.exec(I)[1]), P = R >= 1) : I.indexOf && -1 !== I.indexOf("OpenGL ES") && (R = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(I)[1]), P = R >= 2) : P = "function" == typeof t.lineWidth;
    var N = null,
      O = {},
      D = new dt,
      U = new dt;

    function B(e, i, n) {
      var r = new Uint8Array(4),
        a = t.createTexture();
      t.bindTexture(e, a), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
      for (var o = 0; o < n; o++) t.texImage2D(i + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
      return a
    }
    var z = {};

    function F(i, r) {
      c[i] = 1, 0 === l[i] && (t.enableVertexAttribArray(i), l[i] = 1), u[i] !== r && ((n.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), u[i] = r)
    }

    function G(e) {
      !0 !== p[e] && (t.enable(e), p[e] = !0)
    }

    function V(e) {
      !1 !== p[e] && (t.disable(e), p[e] = !1)
    }

    function k(e, n, a, o, s, h, c, l) {
      if (0 !== e) {
        if (m || (G(t.BLEND), m = !0), 5 === e) s = s || n, h = h || a, c = c || o, n === g && s === _ || (t.blendEquationSeparate(i.convert(n), i.convert(s)), g = n, _ = s), a === y && o === x && h === b && c === M || (t.blendFuncSeparate(i.convert(a), i.convert(o), i.convert(h), i.convert(c)), y = a, x = o, b = h, M = c), v = e, w = null;
        else if (e !== v || l !== w) {
          if (g === r && _ === r || (t.blendEquation(t.FUNC_ADD), g = r, _ = r), l) switch (e) {
            case 1:
              t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              t.blendFunc(t.ONE, t.ONE);
              break;
            case 3:
              t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA);
              break;
            case 4:
              t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e)
          } else switch (e) {
            case 1:
              t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              t.blendFunc(t.SRC_ALPHA, t.ONE);
              break;
            case 3:
              t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR);
              break;
            case 4:
              t.blendFunc(t.ZERO, t.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e)
          }
          y = null, x = null, b = null, M = null, v = e, w = l
        }
      } else m && (V(t.BLEND), m = !1)
    }

    function H(e) {
      S !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), S = e)
    }

    function j(e) {
      0 !== e ? (G(t.CULL_FACE), e !== E && (1 === e ? t.cullFace(t.BACK) : 2 === e ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : V(t.CULL_FACE), E = e
    }

    function W(e, i, n) {
      e ? (G(t.POLYGON_OFFSET_FILL), A === i && L === n || (t.polygonOffset(i, n), A = i, L = n)) : V(t.POLYGON_OFFSET_FILL)
    }

    function X(e) {
      void 0 === e && (e = t.TEXTURE0 + C - 1), N !== e && (t.activeTexture(e), N = e)
    }
    return z[t.TEXTURE_2D] = B(t.TEXTURE_2D, t.TEXTURE_2D, 1), z[t.TEXTURE_CUBE_MAP] = B(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), G(t.DEPTH_TEST), o.setFunc(3), H(!1), j(1), G(t.CULL_FACE), k(0), {
      buffers: {
        color: a,
        depth: o,
        stencil: s
      },
      initAttributes: function() {
        for (var t = 0, e = c.length; t < e; t++) c[t] = 0
      },
      enableAttribute: function(t) {
        F(t, 0)
      },
      enableAttributeAndDivisor: F,
      disableUnusedAttributes: function() {
        for (var e = 0, i = l.length; e !== i; ++e) l[e] !== c[e] && (t.disableVertexAttribArray(e), l[e] = 0)
      },
      enable: G,
      disable: V,
      getCompressedTextureFormats: function() {
        if (null === d && (d = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
          for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++) d.push(i[n]);
        return d
      },
      useProgram: function(e) {
        return f !== e && (t.useProgram(e), f = e, !0)
      },
      setBlending: k,
      setMaterial: function(e, i) {
        2 === e.side ? V(t.CULL_FACE) : G(t.CULL_FACE);
        var n = 1 === e.side;
        i && (n = !n), H(n), 1 === e.blending && !1 === e.transparent ? k(0) : k(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), o.setFunc(e.depthFunc), o.setTest(e.depthTest), o.setMask(e.depthWrite), a.setMask(e.colorWrite), W(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
      },
      setFlipSided: H,
      setCullFace: j,
      setLineWidth: function(e) {
        e !== T && (P && t.lineWidth(e), T = e)
      },
      setPolygonOffset: W,
      setScissorTest: function(e) {
        e ? G(t.SCISSOR_TEST) : V(t.SCISSOR_TEST)
      },
      activeTexture: X,
      bindTexture: function(e, i) {
        null === N && X();
        var n = O[N];
        void 0 === n && (n = {
          type: void 0,
          texture: void 0
        }, O[N] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || z[e]), n.type = e, n.texture = i)
      },
      compressedTexImage2D: function() {
        try {
          t.compressedTexImage2D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      },
      texImage2D: function() {
        try {
          t.texImage2D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      },
      texImage3D: function() {
        try {
          t.texImage3D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      },
      scissor: function(e) {
        !1 === D.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), D.copy(e))
      },
      viewport: function(e) {
        !1 === U.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), U.copy(e))
      },
      reset: function() {
        for (var e = 0; e < l.length; e++) 1 === l[e] && (t.disableVertexAttribArray(e), l[e] = 0);
        p = {}, d = null, N = null, O = {}, f = null, v = null, w = null, m = !1, V(t.BLEND), S = null, E = null, a.reset(), o.reset(), s.reset()
      }
    }
  }

  function Mn(t, e, i, n, r, a, o) {
    var s, h = {};

    function c(t, e) {
      if (t.width > e || t.height > e) {
        if ("data" in t) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + t.width + "x" + t.height + ").");
        var i = e / Math.max(t.width, t.height),
          n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        return n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i), n.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n.width + "x" + n.height), n
      }
      return t
    }

    function l(t) {
      return Y.isPowerOfTwo(t.width) && Y.isPowerOfTwo(t.height)
    }

    function u(t, e) {
      return t.generateMipmaps && e && t.minFilter !== v && t.minFilter !== x
    }

    function p(e, i, r, a) {
      t.generateMipmap(e), n.get(i).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
    }

    function d(e, i) {
      if (!r.isWebGL2) return e;
      if (e === t.RGB) {
        if (i === t.FLOAT) return t.RGB32F;
        if (i === t.HALF_FLOAT) return t.RGB16F;
        if (i === t.UNSIGNED_BYTE) return t.RGB8
      }
      if (e === t.RGBA) {
        if (i === t.FLOAT) return t.RGBA32F;
        if (i === t.HALF_FLOAT) return t.RGBA16F;
        if (i === t.UNSIGNED_BYTE) return t.RGBA8
      }
      return e
    }

    function m(e) {
      return e === v || e === g || e === y ? t.NEAREST : t.LINEAR
    }

    function _(e) {
      var i = e.target;
      i.removeEventListener("dispose", _),
        function(e) {
          var i = n.get(e);
          if (e.image && i.__image__webglTextureCube) t.deleteTexture(i.__image__webglTextureCube);
          else {
            if (void 0 === i.__webglInit) return;
            t.deleteTexture(i.__webglTexture)
          }
          n.remove(e)
        }(i), i.isVideoTexture && delete h[i.id], o.memory.textures--
    }

    function b(e) {
      var i = e.target;
      i.removeEventListener("dispose", b),
        function(e) {
          var i = n.get(e),
            r = n.get(e.texture);
          if (e) {
            if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
              for (var a = 0; a < 6; a++) t.deleteFramebuffer(i.__webglFramebuffer[a]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[a]);
            else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
            n.remove(e.texture), n.remove(e)
          }
        }(i), o.memory.textures--
    }

    function M(e, m) {
      var g = n.get(e);
      if (e.isVideoTexture && function(t) {
          var e = t.id,
            i = o.render.frame;
          h[e] !== i && (h[e] = i, t.update())
        }(e), e.version > 0 && g.__version !== e.version) {
        var y = e.image;
        if (void 0 === y) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
        else {
          if (!1 !== y.complete) return void
          function(e, n, h) {
            var m = t.TEXTURE_2D;
            void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", _), e.__webglTexture = t.createTexture(), o.memory.textures++), i.activeTexture(t.TEXTURE0 + h), i.bindTexture(m, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment);
            var g = c(n.image, r.maxTextureSize);
            (function(t) {
              return !r.isWebGL2 && (t.wrapS !== f || t.wrapT !== f || t.minFilter !== v && t.minFilter !== x)
            })(n) && !1 === l(g) && (g = function(t) {
              return t instanceof HTMLImageElement || t instanceof HTMLCanvasElement ? (void 0 === s && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), s.width = Y.floorPowerOfTwo(t.width), s.height = Y.floorPowerOfTwo(t.height), s.getContext("2d").drawImage(t, 0, 0, s.width, s.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + s.width + "x" + s.height), s) : t
            }(g));
            var y = l(g),
              b = a.convert(n.format),
              M = a.convert(n.type),
              T = d(b, M);
            I(m, n, y);
            var N, O = n.mipmaps;
            if (n.isDepthTexture) {
              if (T = t.DEPTH_COMPONENT, n.type === E) {
                if (!r.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
                T = t.DEPTH_COMPONENT32F
              } else r.isWebGL2 && (T = t.DEPTH_COMPONENT16);
              n.format === P && T === t.DEPTH_COMPONENT && n.type !== w && n.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = w, M = a.convert(n.type)), n.format === R && (T = t.DEPTH_STENCIL, n.type !== A && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = A, M = a.convert(n.type))), i.texImage2D(t.TEXTURE_2D, 0, T, g.width, g.height, 0, b, M, null)
            } else if (n.isDataTexture)
              if (O.length > 0 && y) {
                for (var D = 0, U = O.length; D < U; D++) N = O[D], i.texImage2D(t.TEXTURE_2D, D, T, N.width, N.height, 0, b, M, N.data);
                n.generateMipmaps = !1, e.__maxMipLevel = O.length - 1
              } else i.texImage2D(t.TEXTURE_2D, 0, T, g.width, g.height, 0, b, M, g.data), e.__maxMipLevel = 0;
            else if (n.isCompressedTexture) {
              for (D = 0, U = O.length; D < U; D++) N = O[D], n.format !== C && n.format !== L ? i.getCompressedTextureFormats().indexOf(b) > -1 ? i.compressedTexImage2D(t.TEXTURE_2D, D, T, N.width, N.height, 0, N.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(t.TEXTURE_2D, D, T, N.width, N.height, 0, b, M, N.data);
              e.__maxMipLevel = O.length - 1
            } else if (O.length > 0 && y) {
              for (D = 0, U = O.length; D < U; D++) N = O[D], i.texImage2D(t.TEXTURE_2D, D, T, b, M, N);
              n.generateMipmaps = !1, e.__maxMipLevel = O.length - 1
            } else i.texImage2D(t.TEXTURE_2D, 0, T, b, M, g), e.__maxMipLevel = 0;
            u(n, y) && p(t.TEXTURE_2D, n, g.width, g.height), e.__version = n.version, n.onUpdate && n.onUpdate(n)
          }(g, e, m);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
        }
      }
      i.activeTexture(t.TEXTURE0 + m), i.bindTexture(t.TEXTURE_2D, g.__webglTexture)
    }

    function I(i, o, s) {
      var h;
      if (s ? (t.texParameteri(i, t.TEXTURE_WRAP_S, a.convert(o.wrapS)), t.texParameteri(i, t.TEXTURE_WRAP_T, a.convert(o.wrapT)), t.texParameteri(i, t.TEXTURE_MAG_FILTER, a.convert(o.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, a.convert(o.minFilter))) : (t.texParameteri(i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), o.wrapS === f && o.wrapT === f || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(i, t.TEXTURE_MAG_FILTER, m(o.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, m(o.minFilter)), o.minFilter !== v && o.minFilter !== x && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), h = e.get("EXT_texture_filter_anisotropic")) {
        if (o.type === E && null === e.get("OES_texture_float_linear")) return;
        if (o.type === T && null === (r.isWebGL2 || e.get("OES_texture_half_float_linear"))) return;
        (o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (t.texParameterf(i, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), n.get(o).__currentAnisotropy = o.anisotropy)
      }
    }

    function N(e, r, o, s) {
      var h = a.convert(r.texture.format),
        c = a.convert(r.texture.type),
        l = d(h, c);
      i.texImage2D(s, 0, l, r.width, r.height, 0, h, c, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, o, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
    }

    function O(e, i) {
      t.bindRenderbuffer(t.RENDERBUFFER, e), i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : i.depthBuffer && i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i.width, i.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
    }
    this.setTexture2D = M, this.setTextureCube = function(e, s) {
      var h = n.get(e);
      if (6 === e.image.length)
        if (e.version > 0 && h.__version !== e.version) {
          h.__image__webglTextureCube || (e.addEventListener("dispose", _), h.__image__webglTextureCube = t.createTexture(), o.memory.textures++), i.activeTexture(t.TEXTURE0 + s), i.bindTexture(t.TEXTURE_CUBE_MAP, h.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
          for (var f = e && e.isCompressedTexture, m = e.image[0] && e.image[0].isDataTexture, v = [], g = 0; g < 6; g++) v[g] = f || m ? m ? e.image[g].image : e.image[g] : c(e.image[g], r.maxCubemapSize);
          var y = v[0],
            x = l(y),
            b = a.convert(e.format),
            M = a.convert(e.type),
            w = d(b, M);
          for (I(t.TEXTURE_CUBE_MAP, e, x), g = 0; g < 6; g++)
            if (f)
              for (var S, E = v[g].mipmaps, T = 0, A = E.length; T < A; T++) S = E[T], e.format !== C && e.format !== L ? i.getCompressedTextureFormats().indexOf(b) > -1 ? i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, T, w, S.width, S.height, 0, S.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, T, w, S.width, S.height, 0, b, M, S.data);
            else m ? i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, w, v[g].width, v[g].height, 0, b, M, v[g].data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, w, b, M, v[g]);
          h.__maxMipLevel = f ? E.length - 1 : 0, u(e, x) && p(t.TEXTURE_CUBE_MAP, e, y.width, y.height), h.__version = e.version, e.onUpdate && e.onUpdate(e)
        } else i.activeTexture(t.TEXTURE0 + s), i.bindTexture(t.TEXTURE_CUBE_MAP, h.__image__webglTextureCube)
    }, this.setTextureCubeDynamic = function(e, r) {
      i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_CUBE_MAP, n.get(e).__webglTexture)
    }, this.setupRenderTarget = function(e) {
      var r = n.get(e),
        a = n.get(e.texture);
      e.addEventListener("dispose", b), a.__webglTexture = t.createTexture(), o.memory.textures++;
      var s = !0 === e.isWebGLRenderTargetCube,
        h = l(e);
      if (s) {
        r.__webglFramebuffer = [];
        for (var c = 0; c < 6; c++) r.__webglFramebuffer[c] = t.createFramebuffer()
      } else r.__webglFramebuffer = t.createFramebuffer();
      if (s) {
        for (i.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture), I(t.TEXTURE_CUBE_MAP, e.texture, h), c = 0; c < 6; c++) N(r.__webglFramebuffer[c], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + c);
        u(e.texture, h) && p(t.TEXTURE_CUBE_MAP, e.texture, e.width, e.height), i.bindTexture(t.TEXTURE_CUBE_MAP, null)
      } else i.bindTexture(t.TEXTURE_2D, a.__webglTexture), I(t.TEXTURE_2D, e.texture, h), N(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), u(e.texture, h) && p(t.TEXTURE_2D, e.texture, e.width, e.height), i.bindTexture(t.TEXTURE_2D, null);
      e.depthBuffer && function(e) {
        var i = n.get(e),
          r = !0 === e.isWebGLRenderTargetCube;
        if (e.depthTexture) {
          if (r) throw new Error("target.depthTexture not supported in Cube render targets");
          ! function(e, i) {
            if (i && i.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
            if (t.bindFramebuffer(t.FRAMEBUFFER, e), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), M(i.depthTexture, 0);
            var r = n.get(i.depthTexture).__webglTexture;
            if (i.depthTexture.format === P) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0);
            else {
              if (i.depthTexture.format !== R) throw new Error("Unknown depthTexture format");
              t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0)
            }
          }(i.__webglFramebuffer, e)
        } else if (r) {
          i.__webglDepthbuffer = [];
          for (var a = 0; a < 6; a++) t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer[a]), i.__webglDepthbuffer[a] = t.createRenderbuffer(), O(i.__webglDepthbuffer[a], e)
        } else t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer = t.createRenderbuffer(), O(i.__webglDepthbuffer, e);
        t.bindFramebuffer(t.FRAMEBUFFER, null)
      }(e)
    }, this.updateRenderTargetMipmap = function(e) {
      var r = e.texture;
      if (u(r, l(e))) {
        var a = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
          o = n.get(r).__webglTexture;
        i.bindTexture(a, o), p(a, r, e.width, e.height), i.bindTexture(a, null)
      }
    }
  }

  function wn(t, e, i) {
    return {
      convert: function(n) {
        var s;
        if (n === d) return t.REPEAT;
        if (n === f) return t.CLAMP_TO_EDGE;
        if (n === m) return t.MIRRORED_REPEAT;
        if (n === v) return t.NEAREST;
        if (n === g) return t.NEAREST_MIPMAP_NEAREST;
        if (n === y) return t.NEAREST_MIPMAP_LINEAR;
        if (n === x) return t.LINEAR;
        if (n === _) return t.LINEAR_MIPMAP_NEAREST;
        if (n === b) return t.LINEAR_MIPMAP_LINEAR;
        if (n === M) return t.UNSIGNED_BYTE;
        if (1017 === n) return t.UNSIGNED_SHORT_4_4_4_4;
        if (1018 === n) return t.UNSIGNED_SHORT_5_5_5_1;
        if (1019 === n) return t.UNSIGNED_SHORT_5_6_5;
        if (1010 === n) return t.BYTE;
        if (1011 === n) return t.SHORT;
        if (n === w) return t.UNSIGNED_SHORT;
        if (1013 === n) return t.INT;
        if (n === S) return t.UNSIGNED_INT;
        if (n === E) return t.FLOAT;
        if (n === T) {
          if (i.isWebGL2) return t.HALF_FLOAT;
          if (null !== (s = e.get("OES_texture_half_float"))) return s.HALF_FLOAT_OES
        }
        if (1021 === n) return t.ALPHA;
        if (n === L) return t.RGB;
        if (n === C) return t.RGBA;
        if (1024 === n) return t.LUMINANCE;
        if (1025 === n) return t.LUMINANCE_ALPHA;
        if (n === P) return t.DEPTH_COMPONENT;
        if (n === R) return t.DEPTH_STENCIL;
        if (n === r) return t.FUNC_ADD;
        if (101 === n) return t.FUNC_SUBTRACT;
        if (102 === n) return t.FUNC_REVERSE_SUBTRACT;
        if (200 === n) return t.ZERO;
        if (201 === n) return t.ONE;
        if (202 === n) return t.SRC_COLOR;
        if (203 === n) return t.ONE_MINUS_SRC_COLOR;
        if (204 === n) return t.SRC_ALPHA;
        if (205 === n) return t.ONE_MINUS_SRC_ALPHA;
        if (206 === n) return t.DST_ALPHA;
        if (207 === n) return t.ONE_MINUS_DST_ALPHA;
        if (208 === n) return t.DST_COLOR;
        if (209 === n) return t.ONE_MINUS_DST_COLOR;
        if (210 === n) return t.SRC_ALPHA_SATURATE;
        if ((n === I || n === N || n === O || n === D) && null !== (s = e.get("WEBGL_compressed_texture_s3tc"))) {
          if (n === I) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (n === N) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (n === O) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (n === D) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if ((n === U || n === B || n === z || n === F) && null !== (s = e.get("WEBGL_compressed_texture_pvrtc"))) {
          if (n === U) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (n === B) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (n === z) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (n === F) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (36196 === n && null !== (s = e.get("WEBGL_compressed_texture_etc1"))) return s.COMPRESSED_RGB_ETC1_WEBGL;
        if ((37808 === n || 37809 === n || 37810 === n || 37811 === n || 37812 === n || 37813 === n || 37814 === n || 37815 === n || 37816 === n || 37817 === n || 37818 === n || 37819 === n || 37820 === n || 37821 === n) && null !== (s = e.get("WEBGL_compressed_texture_astc"))) return n;
        if (n === a || n === o) {
          if (i.isWebGL2) {
            if (n === a) return t.MIN;
            if (n === o) return t.MAX
          }
          if (null !== (s = e.get("EXT_blend_minmax"))) {
            if (n === a) return s.MIN_EXT;
            if (n === o) return s.MAX_EXT
          }
        }
        if (n === A) {
          if (i.isWebGL2) return t.UNSIGNED_INT_24_8;
          if (null !== (s = e.get("WEBGL_depth_texture"))) return s.UNSIGNED_INT_24_8_WEBGL
        }
        return 0
      }
    }
  }

  function Sn(t, e) {
    this.name = "", this.color = new Ct(t), this.density = void 0 !== e ? e : 25e-5
  }

  function En(t, e, i) {
    this.name = "", this.color = new Ct(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
  }

  function Tn() {
    Kt.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
  }

  function An(t, e) {
    this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0
  }

  function Ln(t, e, i, n) {
    this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
  }

  function Cn(t) {
    Ne.call(this), this.type = "SpriteMaterial", this.color = new Ct(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(t)
  }

  function Pn(t) {
    if (Kt.call(this), this.type = "Sprite", void 0 === an) {
      an = new me;
      var e = new An(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
      an.setIndex([0, 1, 2, 0, 2, 3]), an.addAttribute("position", new Ln(e, 3, 0, !1)), an.addAttribute("uv", new Ln(e, 2, 3, !1))
    }
    this.geometry = an, this.material = void 0 !== t ? t : new Cn, this.center = new J(.5, .5)
  }

  function Rn() {
    Kt.call(this), this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      }
    })
  }

  function In(t, e) {
    if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
    else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
    else {
      console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
      for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new nt)
    }
  }

  function Nn() {
    Kt.call(this), this.type = "Bone"
  }

  function On(t, e) {
    ze.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new nt, this.bindMatrixInverse = new nt;
    var i = new In(this.initBones());
    this.bind(i, this.matrixWorld), this.normalizeSkinWeights()
  }

  function Dn(t) {
    Ne.call(this), this.type = "LineBasicMaterial", this.color = new Ct(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
  }

  function Un(t, e, i) {
    1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Kt.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new me, this.material = void 0 !== e ? e : new Dn({
      color: 16777215 * Math.random()
    })
  }

  function Bn(t, e) {
    Un.call(this, t, e), this.type = "LineSegments"
  }

  function zn(t, e) {
    Un.call(this, t, e), this.type = "LineLoop"
  }

  function Fn(t) {
    Ne.call(this), this.type = "PointsMaterial", this.color = new Ct(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t)
  }

  function Gn(t, e) {
    Kt.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new me, this.material = void 0 !== e ? e : new Fn({
      color: 16777215 * Math.random()
    })
  }

  function Vn() {
    Kt.call(this), this.type = "Group"
  }

  function kn(t, e, i, n, r, a, o, s, h) {
    pt.call(this, t, e, i, n, r, a, o, s, h), this.generateMipmaps = !1
  }

  function Hn(t, e, i, n, r, a, o, s, h, c, l, u) {
    pt.call(this, null, a, o, s, h, c, n, r, l, u), this.image = {
      width: e,
      height: i
    }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
  }

  function jn(t, e, i, n, r, a, o, s, h) {
    pt.call(this, t, e, i, n, r, a, o, s, h), this.needsUpdate = !0
  }

  function Wn(t, e, i, n, r, a, o, s, h, c) {
    if ((c = void 0 !== c ? c : P) !== P && c !== R) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    void 0 === i && c === P && (i = w), void 0 === i && c === R && (i = A), pt.call(this, null, n, r, a, o, s, c, i, h), this.image = {
      width: t,
      height: e
    }, this.magFilter = void 0 !== o ? o : v, this.minFilter = void 0 !== s ? s : v, this.flipY = !1, this.generateMipmaps = !1
  }

  function Xn(t) {
    me.call(this), this.type = "WireframeGeometry";
    var e, i, n, r, a, o, s, h, c, l, u = [],
      p = [0, 0],
      d = {},
      f = ["a", "b", "c"];
    if (t && t.isGeometry) {
      var m = t.faces;
      for (e = 0, n = m.length; e < n; e++) {
        var v = m[e];
        for (i = 0; i < 3; i++) s = v[f[i]], h = v[f[(i + 1) % 3]], p[0] = Math.min(s, h), p[1] = Math.max(s, h), void 0 === d[c = p[0] + "," + p[1]] && (d[c] = {
          index1: p[0],
          index2: p[1]
        })
      }
      for (c in d) o = d[c], l = t.vertices[o.index1], u.push(l.x, l.y, l.z), l = t.vertices[o.index2], u.push(l.x, l.y, l.z)
    } else if (t && t.isBufferGeometry) {
      var g, y, x, _, b, M, w;
      if (l = new at, null !== t.index) {
        for (g = t.attributes.position, y = t.index, 0 === (x = t.groups).length && (x = [{
            start: 0,
            count: y.count,
            materialIndex: 0
          }]), r = 0, a = x.length; r < a; ++r)
          for (e = b = (_ = x[r]).start, n = b + _.count; e < n; e += 3)
            for (i = 0; i < 3; i++) s = y.getX(e + i), h = y.getX(e + (i + 1) % 3), p[0] = Math.min(s, h), p[1] = Math.max(s, h), void 0 === d[c = p[0] + "," + p[1]] && (d[c] = {
              index1: p[0],
              index2: p[1]
            });
        for (c in d) o = d[c], l.fromBufferAttribute(g, o.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(g, o.index2), u.push(l.x, l.y, l.z)
      } else
        for (e = 0, n = (g = t.attributes.position).count / 3; e < n; e++)
          for (i = 0; i < 3; i++) M = 3 * e + i, l.fromBufferAttribute(g, M), u.push(l.x, l.y, l.z), w = 3 * e + (i + 1) % 3, l.fromBufferAttribute(g, w), u.push(l.x, l.y, l.z)
    }
    this.addAttribute("position", new le(u, 3))
  }

  function qn(t, e, i) {
    ee.call(this), this.type = "ParametricGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: i
    }, this.fromBufferGeometry(new Yn(t, e, i)), this.mergeVertices()
  }

  function Yn(t, e, i) {
    me.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: i
    };
    var n, r, a = [],
      o = [],
      s = [],
      h = [],
      c = 1e-5,
      l = new at,
      u = new at,
      p = new at,
      d = new at,
      f = new at;
    t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    var m = e + 1;
    for (n = 0; n <= i; n++) {
      var v = n / i;
      for (r = 0; r <= e; r++) {
        var g = r / e;
        t(g, v, u), o.push(u.x, u.y, u.z), g - c >= 0 ? (t(g - c, v, p), d.subVectors(u, p)) : (t(g + c, v, p), d.subVectors(p, u)), v - c >= 0 ? (t(g, v - c, p), f.subVectors(u, p)) : (t(g, v + c, p), f.subVectors(p, u)), l.crossVectors(d, f).normalize(), s.push(l.x, l.y, l.z), h.push(g, v)
      }
    }
    for (n = 0; n < i; n++)
      for (r = 0; r < e; r++) {
        var y = n * m + r,
          x = n * m + r + 1,
          _ = (n + 1) * m + r + 1,
          b = (n + 1) * m + r;
        a.push(y, x, b), a.push(x, _, b)
      }
    this.setIndex(a), this.addAttribute("position", new le(o, 3)), this.addAttribute("normal", new le(s, 3)), this.addAttribute("uv", new le(h, 2))
  }

  function Jn(t, e, i, n) {
    ee.call(this), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: t,
      indices: e,
      radius: i,
      detail: n
    }, this.fromBufferGeometry(new Zn(t, e, i, n)), this.mergeVertices()
  }

  function Zn(t, e, i, n) {
    me.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
      vertices: t,
      indices: e,
      radius: i,
      detail: n
    }, i = i || 1;
    var r = [],
      a = [];

    function o(t, e, i, n) {
      var r, a, o = Math.pow(2, n),
        h = [];
      for (r = 0; r <= o; r++) {
        h[r] = [];
        var c = t.clone().lerp(i, r / o),
          l = e.clone().lerp(i, r / o),
          u = o - r;
        for (a = 0; a <= u; a++) h[r][a] = 0 === a && r === o ? c : c.clone().lerp(l, a / u)
      }
      for (r = 0; r < o; r++)
        for (a = 0; a < 2 * (o - r) - 1; a++) {
          var p = Math.floor(a / 2);
          a % 2 == 0 ? (s(h[r][p + 1]), s(h[r + 1][p]), s(h[r][p])) : (s(h[r][p + 1]), s(h[r + 1][p + 1]), s(h[r + 1][p]))
        }
    }

    function s(t) {
      r.push(t.x, t.y, t.z)
    }

    function h(e, i) {
      var n = 3 * e;
      i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
    }

    function c(t, e, i, n) {
      n < 0 && 1 === t.x && (a[e] = t.x - 1), 0 === i.x && 0 === i.z && (a[e] = n / 2 / Math.PI + .5)
    }

    function l(t) {
      return Math.atan2(t.z, -t.x)
    }

    function u(t) {
      return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
    }! function(t) {
      for (var i = new at, n = new at, r = new at, a = 0; a < e.length; a += 3) h(e[a + 0], i), h(e[a + 1], n), h(e[a + 2], r), o(i, n, r, t)
    }(n = n || 0),
    function(t) {
      for (var e = new at, i = 0; i < r.length; i += 3) e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar(t), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z
    }(i),
    function() {
      for (var t = new at, e = 0; e < r.length; e += 3) {
        t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2];
        var i = l(t) / 2 / Math.PI + .5,
          n = u(t) / Math.PI + .5;
        a.push(i, 1 - n)
      }(function() {
        for (var t = new at, e = new at, i = new at, n = new at, o = new J, s = new J, h = new J, u = 0, p = 0; u < r.length; u += 9, p += 6) {
          t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), i.set(r[u + 6], r[u + 7], r[u + 8]), o.set(a[p + 0], a[p + 1]), s.set(a[p + 2], a[p + 3]), h.set(a[p + 4], a[p + 5]), n.copy(t).add(e).add(i).divideScalar(3);
          var d = l(n);
          c(o, p + 0, t, d), c(s, p + 2, e, d), c(h, p + 4, i, d)
        }
      })(),
      function() {
        for (var t = 0; t < a.length; t += 6) {
          var e = a[t + 0],
            i = a[t + 2],
            n = a[t + 4],
            r = Math.max(e, i, n),
            o = Math.min(e, i, n);
          r > .9 && o < .1 && (e < .2 && (a[t + 0] += 1), i < .2 && (a[t + 2] += 1), n < .2 && (a[t + 4] += 1))
        }
      }()
    }(), this.addAttribute("position", new le(r, 3)), this.addAttribute("normal", new le(r.slice(), 3)), this.addAttribute("uv", new le(a, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
  }

  function Kn(t, e) {
    ee.call(this), this.type = "TetrahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new Qn(t, e)), this.mergeVertices()
  }

  function Qn(t, e) {
    Zn.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function $n(t, e) {
    ee.call(this), this.type = "OctahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new tr(t, e)), this.mergeVertices()
  }

  function tr(t, e) {
    Zn.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function er(t, e) {
    ee.call(this), this.type = "IcosahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new ir(t, e)), this.mergeVertices()
  }

  function ir(t, e) {
    var i = (1 + Math.sqrt(5)) / 2,
      n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
    Zn.call(this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function nr(t, e) {
    ee.call(this), this.type = "DodecahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new rr(t, e)), this.mergeVertices()
  }

  function rr(t, e) {
    var i = (1 + Math.sqrt(5)) / 2,
      n = 1 / i,
      r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
    Zn.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function ar(t, e, i, n, r, a) {
    ee.call(this), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: i,
      radialSegments: n,
      closed: r
    }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
    var o = new or(t, e, i, n, r);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
  }

  function or(t, e, i, n, r) {
    me.call(this), this.type = "TubeBufferGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: i,
      radialSegments: n,
      closed: r
    }, e = e || 64, i = i || 1, n = n || 8, r = r || !1;
    var a = t.computeFrenetFrames(e, r);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    var o, s, h = new at,
      c = new at,
      l = new J,
      u = new at,
      p = [],
      d = [],
      f = [],
      m = [];

    function v(r) {
      u = t.getPointAt(r / e, u);
      var o = a.normals[r],
        l = a.binormals[r];
      for (s = 0; s <= n; s++) {
        var f = s / n * Math.PI * 2,
          m = Math.sin(f),
          v = -Math.cos(f);
        c.x = v * o.x + m * l.x, c.y = v * o.y + m * l.y, c.z = v * o.z + m * l.z, c.normalize(), d.push(c.x, c.y, c.z), h.x = u.x + i * c.x, h.y = u.y + i * c.y, h.z = u.z + i * c.z, p.push(h.x, h.y, h.z)
      }
    }! function() {
      for (o = 0; o < e; o++) v(o);
      v(!1 === r ? e : 0),
        function() {
          for (o = 0; o <= e; o++)
            for (s = 0; s <= n; s++) l.x = o / e, l.y = s / n, f.push(l.x, l.y)
        }(),
        function() {
          for (s = 1; s <= e; s++)
            for (o = 1; o <= n; o++) {
              var t = (n + 1) * (s - 1) + (o - 1),
                i = (n + 1) * s + (o - 1),
                r = (n + 1) * s + o,
                a = (n + 1) * (s - 1) + o;
              m.push(t, i, a), m.push(i, r, a)
            }
        }()
    }(), this.setIndex(m), this.addAttribute("position", new le(p, 3)), this.addAttribute("normal", new le(d, 3)), this.addAttribute("uv", new le(f, 2))
  }

  function sr(t, e, i, n, r, a, o) {
    ee.call(this), this.type = "TorusKnotGeometry", this.parameters = {
      radius: t,
      tube: e,
      tubularSegments: i,
      radialSegments: n,
      p: r,
      q: a
    }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new hr(t, e, i, n, r, a)), this.mergeVertices()
  }

  function hr(t, e, i, n, r, a) {
    me.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
      radius: t,
      tube: e,
      tubularSegments: i,
      radialSegments: n,
      p: r,
      q: a
    }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3;
    var o, s, h = [],
      c = [],
      l = [],
      u = [],
      p = new at,
      d = new at,
      f = new at,
      m = new at,
      v = new at,
      g = new at,
      y = new at;
    for (o = 0; o <= i; ++o) {
      var x = o / i * r * Math.PI * 2;
      for (A(x, r, a, t, f), A(x + .01, r, a, t, m), g.subVectors(m, f), y.addVectors(m, f), v.crossVectors(g, y), y.crossVectors(v, g), v.normalize(), y.normalize(), s = 0; s <= n; ++s) {
        var _ = s / n * Math.PI * 2,
          b = -e * Math.cos(_),
          M = e * Math.sin(_);
        p.x = f.x + (b * y.x + M * v.x), p.y = f.y + (b * y.y + M * v.y), p.z = f.z + (b * y.z + M * v.z), c.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), l.push(d.x, d.y, d.z), u.push(o / i), u.push(s / n)
      }
    }
    for (s = 1; s <= i; s++)
      for (o = 1; o <= n; o++) {
        var w = (n + 1) * (s - 1) + (o - 1),
          S = (n + 1) * s + (o - 1),
          E = (n + 1) * s + o,
          T = (n + 1) * (s - 1) + o;
        h.push(w, S, T), h.push(S, E, T)
      }

    function A(t, e, i, n, r) {
      var a = Math.cos(t),
        o = Math.sin(t),
        s = i / e * t,
        h = Math.cos(s);
      r.x = n * (2 + h) * .5 * a, r.y = n * (2 + h) * o * .5, r.z = n * Math.sin(s) * .5
    }
    this.setIndex(h), this.addAttribute("position", new le(c, 3)), this.addAttribute("normal", new le(l, 3)), this.addAttribute("uv", new le(u, 2))
  }

  function cr(t, e, i, n, r) {
    ee.call(this), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: i,
      tubularSegments: n,
      arc: r
    }, this.fromBufferGeometry(new lr(t, e, i, n, r)), this.mergeVertices()
  }

  function lr(t, e, i, n, r) {
    me.call(this), this.type = "TorusBufferGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: i,
      tubularSegments: n,
      arc: r
    }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
    var a, o, s = [],
      h = [],
      c = [],
      l = [],
      u = new at,
      p = new at,
      d = new at;
    for (a = 0; a <= i; a++)
      for (o = 0; o <= n; o++) {
        var f = o / n * r,
          m = a / i * Math.PI * 2;
        p.x = (t + e * Math.cos(m)) * Math.cos(f), p.y = (t + e * Math.cos(m)) * Math.sin(f), p.z = e * Math.sin(m), h.push(p.x, p.y, p.z), u.x = t * Math.cos(f), u.y = t * Math.sin(f), d.subVectors(p, u).normalize(), c.push(d.x, d.y, d.z), l.push(o / n), l.push(a / i)
      }
    for (a = 1; a <= i; a++)
      for (o = 1; o <= n; o++) {
        var v = (n + 1) * a + o - 1,
          g = (n + 1) * (a - 1) + o - 1,
          y = (n + 1) * (a - 1) + o,
          x = (n + 1) * a + o;
        s.push(v, g, x), s.push(g, y, x)
      }
    this.setIndex(s), this.addAttribute("position", new le(h, 3)), this.addAttribute("normal", new le(c, 3)), this.addAttribute("uv", new le(l, 2))
  }
  yn.prototype = Object.create(Ne.prototype), yn.prototype.constructor = yn, yn.prototype.isMeshDepthMaterial = !0, yn.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
  }, xn.prototype = Object.create(Ne.prototype), xn.prototype.constructor = xn, xn.prototype.isMeshDistanceMaterial = !0, xn.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
  }, Sn.prototype.isFogExp2 = !0, Sn.prototype.clone = function() {
    return new Sn(this.color, this.density)
  }, Sn.prototype.toJSON = function() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    }
  }, En.prototype.isFog = !0, En.prototype.clone = function() {
    return new En(this.color, this.near, this.far)
  }, En.prototype.toJSON = function() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    }
  }, Tn.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Tn,
    copy: function(t, e) {
      return Kt.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
    },
    toJSON: function(t) {
      var e = Kt.prototype.toJSON.call(this, t);
      return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
    }
  }), Object.defineProperty(An.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(An.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function() {},
    setArray: function(t) {
      if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this
    },
    setDynamic: function(t) {
      return this.dynamic = t, this
    },
    copy: function(t) {
      return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
    },
    copyAt: function(t, e, i) {
      t *= this.stride, i *= e.stride;
      for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
      return this
    },
    set: function(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    onUpload: function(t) {
      return this.onUploadCallback = t, this
    }
  }), Object.defineProperties(Ln.prototype, {
    count: {
      get: function() {
        return this.data.count
      }
    },
    array: {
      get: function() {
        return this.data.array
      }
    }
  }), Object.assign(Ln.prototype, {
    isInterleavedBufferAttribute: !0,
    setX: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset] = e, this
    },
    setY: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 1] = e, this
    },
    setZ: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 2] = e, this
    },
    setW: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 3] = e, this
    },
    getX: function(t) {
      return this.data.array[t * this.data.stride + this.offset]
    },
    getY: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 1]
    },
    getZ: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 2]
    },
    getW: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 3]
    },
    setXY: function(t, e, i) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
    },
    setXYZ: function(t, e, i, n) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
    },
    setXYZW: function(t, e, i, n, r) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
    }
  }), Cn.prototype = Object.create(Ne.prototype), Cn.prototype.constructor = Cn, Cn.prototype.isSpriteMaterial = !0, Cn.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
  }, Pn.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Pn,
    isSprite: !0,
    raycast: function() {
      var t = new at,
        e = new at,
        i = new at,
        n = new J,
        r = new J,
        a = new nt,
        o = new at,
        s = new at,
        h = new at,
        c = new J,
        l = new J,
        u = new J;

      function p(t, e, i, o, s, h) {
        n.subVectors(t, i).addScalar(.5).multiply(o), void 0 !== s ? (r.x = h * n.x - s * n.y, r.y = s * n.x + h * n.y) : r.copy(n), t.copy(e), t.x += r.x, t.y += r.y, t.applyMatrix4(a)
      }
      return function(n, r) {
        e.setFromMatrixScale(this.matrixWorld), a.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), i.setFromMatrixPosition(this.modelViewMatrix);
        var d, f, m = this.material.rotation;
        0 !== m && (f = Math.cos(m), d = Math.sin(m));
        var v = this.center;
        p(o.set(-.5, -.5, 0), i, v, e, d, f), p(s.set(.5, -.5, 0), i, v, e, d, f), p(h.set(.5, .5, 0), i, v, e, d, f), c.set(0, 0), l.set(1, 0), u.set(1, 1);
        var g = n.ray.intersectTriangle(o, s, h, !1, t);
        if (null !== g || (p(s.set(-.5, .5, 0), i, v, e, d, f), l.set(0, 1), null !== (g = n.ray.intersectTriangle(o, h, s, !1, t)))) {
          var y = n.ray.origin.distanceTo(t);
          y < n.near || y > n.far || r.push({
            distance: y,
            point: t.clone(),
            uv: Ue.getUV(t, o, s, h, c, l, u, new J),
            face: null,
            object: this
          })
        }
      }
    }(),
    clone: function() {
      return new this.constructor(this.material).copy(this)
    },
    copy: function(t) {
      return Kt.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
    }
  }), Rn.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Rn,
    copy: function(t) {
      Kt.prototype.copy.call(this, t, !1);
      for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
        var r = e[i];
        this.addLevel(r.object.clone(), r.distance)
      }
      return this
    },
    addLevel: function(t, e) {
      void 0 === e && (e = 0), e = Math.abs(e);
      for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
      i.splice(n, 0, {
        distance: e,
        object: t
      }), this.add(t)
    },
    getObjectForDistance: function(t) {
      for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
      return e[i - 1].object
    },
    raycast: (on = new at, function(t, e) {
      on.setFromMatrixPosition(this.matrixWorld);
      var i = t.ray.origin.distanceTo(on);
      this.getObjectForDistance(i).raycast(t, e)
    }),
    update: function() {
      var t = new at,
        e = new at;
      return function(i) {
        var n = this.levels;
        if (n.length > 1) {
          t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
          var r = t.distanceTo(e);
          n[0].object.visible = !0;
          for (var a = 1, o = n.length; a < o && r >= n[a].distance; a++) n[a - 1].object.visible = !1, n[a].object.visible = !0;
          for (; a < o; a++) n[a].object.visible = !1
        }
      }
    }(),
    toJSON: function(t) {
      var e = Kt.prototype.toJSON.call(this, t);
      e.object.levels = [];
      for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
        var a = i[n];
        e.object.levels.push({
          object: a.object.uuid,
          distance: a.distance
        })
      }
      return e
    }
  }), Object.assign(In.prototype, {
    calculateInverses: function() {
      this.boneInverses = [];
      for (var t = 0, e = this.bones.length; t < e; t++) {
        var i = new nt;
        this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
      }
    },
    pose: function() {
      var t, e, i;
      for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
      for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
    },
    update: (sn = new nt, hn = new nt, function() {
      for (var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = t.length; r < a; r++) {
        var o = t[r] ? t[r].matrixWorld : hn;
        sn.multiplyMatrices(o, e[r]), sn.toArray(i, 16 * r)
      }
      void 0 !== n && (n.needsUpdate = !0)
    }),
    clone: function() {
      return new In(this.bones, this.boneInverses)
    },
    getBoneByName: function(t) {
      for (var e = 0, i = this.bones.length; e < i; e++) {
        var n = this.bones[e];
        if (n.name === t) return n
      }
    }
  }), Nn.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Nn,
    isBone: !0
  }), On.prototype = Object.assign(Object.create(ze.prototype), {
    constructor: On,
    isSkinnedMesh: !0,
    initBones: function() {
      var t, e, i, n, r = [];
      if (this.geometry && void 0 !== this.geometry.bones) {
        for (i = 0, n = this.geometry.bones.length; i < n; i++) e = this.geometry.bones[i], t = new Nn, r.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl);
        for (i = 0, n = this.geometry.bones.length; i < n; i++) - 1 !== (e = this.geometry.bones[i]).parent && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[i]) : this.add(r[i])
      }
      return this.updateMatrixWorld(!0), r
    },
    bind: function(t, e) {
      this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
    },
    pose: function() {
      this.skeleton.pose()
    },
    normalizeSkinWeights: function() {
      var t, e;
      if (this.geometry && this.geometry.isGeometry)
        for (e = 0; e < this.geometry.skinWeights.length; e++) {
          var i = this.geometry.skinWeights[e];
          (t = 1 / i.manhattanLength()) != 1 / 0 ? i.multiplyScalar(t) : i.set(1, 0, 0, 0)
        } else if (this.geometry && this.geometry.isBufferGeometry) {
          var n = new dt,
            r = this.geometry.attributes.skinWeight;
          for (e = 0; e < r.count; e++) n.x = r.getX(e), n.y = r.getY(e), n.z = r.getZ(e), n.w = r.getW(e), (t = 1 / n.manhattanLength()) != 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0), r.setXYZW(e, n.x, n.y, n.z, n.w)
        }
    },
    updateMatrixWorld: function(t) {
      ze.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    },
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), Dn.prototype = Object.create(Ne.prototype), Dn.prototype.constructor = Dn, Dn.prototype.isLineBasicMaterial = !0, Dn.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
  }, Un.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Un,
    isLine: !0,
    computeLineDistances: (pn = new at, dn = new at, function() {
      var t = this.geometry;
      if (t.isBufferGeometry)
        if (null === t.index) {
          for (var e = t.attributes.position, i = [0], n = 1, r = e.count; n < r; n++) pn.fromBufferAttribute(e, n - 1), dn.fromBufferAttribute(e, n), i[n] = i[n - 1], i[n] += pn.distanceTo(dn);
          t.addAttribute("lineDistance", new le(i, 1))
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      else if (t.isGeometry) {
        var a = t.vertices;
        for ((i = t.lineDistances)[0] = 0, n = 1, r = a.length; n < r; n++) i[n] = i[n - 1], i[n] += a[n - 1].distanceTo(a[n])
      }
      return this
    }),
    raycast: (cn = new nt, ln = new De, un = new yt, function(t, e) {
      var i = t.linePrecision,
        n = this.geometry,
        r = this.matrixWorld;
      if (null === n.boundingSphere && n.computeBoundingSphere(), un.copy(n.boundingSphere), un.applyMatrix4(r), un.radius += i, !1 !== t.ray.intersectsSphere(un)) {
        cn.getInverse(r), ln.copy(t.ray).applyMatrix4(cn);
        var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          o = a * a,
          s = new at,
          h = new at,
          c = new at,
          l = new at,
          u = this && this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
          var p = n.index,
            d = n.attributes.position.array;
          if (null !== p)
            for (var f = p.array, m = 0, v = f.length - 1; m < v; m += u) {
              var g = f[m],
                y = f[m + 1];
              s.fromArray(d, 3 * g), h.fromArray(d, 3 * y), ln.distanceSqToSegment(s, h, l, c) > o || (l.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(l)) < t.near || b > t.far || e.push({
                distance: b,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
              }))
            } else
              for (m = 0, v = d.length / 3 - 1; m < v; m += u) s.fromArray(d, 3 * m), h.fromArray(d, 3 * m + 3), ln.distanceSqToSegment(s, h, l, c) > o || (l.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(l)) < t.near || b > t.far || e.push({
                distance: b,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
              }))
        } else if (n.isGeometry) {
          var x = n.vertices,
            _ = x.length;
          for (m = 0; m < _ - 1; m += u) {
            var b;
            ln.distanceSqToSegment(x[m], x[m + 1], l, c) > o || (l.applyMatrix4(this.matrixWorld), (b = t.ray.origin.distanceTo(l)) < t.near || b > t.far || e.push({
              distance: b,
              point: c.clone().applyMatrix4(this.matrixWorld),
              index: m,
              face: null,
              faceIndex: null,
              object: this
            }))
          }
        }
      }
    }),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), Bn.prototype = Object.assign(Object.create(Un.prototype), {
    constructor: Bn,
    isLineSegments: !0,
    computeLineDistances: function() {
      var t = new at,
        e = new at;
      return function() {
        var i = this.geometry;
        if (i.isBufferGeometry)
          if (null === i.index) {
            for (var n = i.attributes.position, r = [], a = 0, o = n.count; a < o; a += 2) t.fromBufferAttribute(n, a), e.fromBufferAttribute(n, a + 1), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + t.distanceTo(e);
            i.addAttribute("lineDistance", new le(r, 1))
          } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else if (i.isGeometry) {
          var s = i.vertices;
          for (r = i.lineDistances, a = 0, o = s.length; a < o; a += 2) t.copy(s[a]), e.copy(s[a + 1]), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + t.distanceTo(e)
        }
        return this
      }
    }()
  }), zn.prototype = Object.assign(Object.create(Un.prototype), {
    constructor: zn,
    isLineLoop: !0
  }), Fn.prototype = Object.create(Ne.prototype), Fn.prototype.constructor = Fn, Fn.prototype.isPointsMaterial = !0, Fn.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
  }, Gn.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Gn,
    isPoints: !0,
    raycast: function() {
      var t = new nt,
        e = new De,
        i = new yt;
      return function(n, r) {
        var a = this,
          o = this.geometry,
          s = this.matrixWorld,
          h = n.params.Points.threshold;
        if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy(o.boundingSphere), i.applyMatrix4(s), i.radius += h, !1 !== n.ray.intersectsSphere(i)) {
          t.getInverse(s), e.copy(n.ray).applyMatrix4(t);
          var c = h / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = c * c,
            u = new at,
            p = new at;
          if (o.isBufferGeometry) {
            var d = o.index,
              f = o.attributes.position.array;
            if (null !== d)
              for (var m = d.array, v = 0, g = m.length; v < g; v++) {
                var y = m[v];
                u.fromArray(f, 3 * y), b(u, y)
              } else {
                v = 0;
                for (var x = f.length / 3; v < x; v++) u.fromArray(f, 3 * v), b(u, v)
              }
          } else {
            var _ = o.vertices;
            for (v = 0, x = _.length; v < x; v++) b(_[v], v)
          }
        }

        function b(t, i) {
          var o = e.distanceSqToPoint(t);
          if (o < l) {
            e.closestPointToPoint(t, p), p.applyMatrix4(s);
            var h = n.ray.origin.distanceTo(p);
            if (h < n.near || h > n.far) return;
            r.push({
              distance: h,
              distanceToRay: Math.sqrt(o),
              point: p.clone(),
              index: i,
              face: null,
              object: a
            })
          }
        }
      }
    }(),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), Vn.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Vn,
    isGroup: !0
  }), kn.prototype = Object.assign(Object.create(pt.prototype), {
    constructor: kn,
    isVideoTexture: !0,
    update: function() {
      var t = this.image;
      t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
  }), Hn.prototype = Object.create(pt.prototype), Hn.prototype.constructor = Hn, Hn.prototype.isCompressedTexture = !0, jn.prototype = Object.create(pt.prototype), jn.prototype.constructor = jn, jn.prototype.isCanvasTexture = !0, Wn.prototype = Object.create(pt.prototype), Wn.prototype.constructor = Wn, Wn.prototype.isDepthTexture = !0, Xn.prototype = Object.create(me.prototype), Xn.prototype.constructor = Xn, qn.prototype = Object.create(ee.prototype), qn.prototype.constructor = qn, Yn.prototype = Object.create(me.prototype), Yn.prototype.constructor = Yn, Jn.prototype = Object.create(ee.prototype), Jn.prototype.constructor = Jn, Zn.prototype = Object.create(me.prototype), Zn.prototype.constructor = Zn, Kn.prototype = Object.create(ee.prototype), Kn.prototype.constructor = Kn, Qn.prototype = Object.create(Zn.prototype), Qn.prototype.constructor = Qn, $n.prototype = Object.create(ee.prototype), $n.prototype.constructor = $n, tr.prototype = Object.create(Zn.prototype), tr.prototype.constructor = tr, er.prototype = Object.create(ee.prototype), er.prototype.constructor = er, ir.prototype = Object.create(Zn.prototype), ir.prototype.constructor = ir, nr.prototype = Object.create(ee.prototype), nr.prototype.constructor = nr, rr.prototype = Object.create(Zn.prototype), rr.prototype.constructor = rr, ar.prototype = Object.create(ee.prototype), ar.prototype.constructor = ar, or.prototype = Object.create(me.prototype), or.prototype.constructor = or, sr.prototype = Object.create(ee.prototype), sr.prototype.constructor = sr, hr.prototype = Object.create(me.prototype), hr.prototype.constructor = hr, cr.prototype = Object.create(ee.prototype), cr.prototype.constructor = cr, lr.prototype = Object.create(me.prototype), lr.prototype.constructor = lr;

  function ur(t, e, i, n, r) {
    var a, o;
    if (r === function(t, e, i, n) {
        for (var r = 0, a = e, o = i - n; a < i; a += n) r += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
        return r
      }(t, e, i, n) > 0)
      for (a = e; a < i; a += n) o = Cr(a, t[a], t[a + 1], o);
    else
      for (a = i - n; a >= e; a -= n) o = Cr(a, t[a], t[a + 1], o);
    return o && Er(o, o.next) && (Pr(o), o = o.next), o
  }

  function pr(t, e) {
    if (!t) return t;
    e || (e = t);
    var i, n = t;
    do {
      if (i = !1, n.steiner || !Er(n, n.next) && 0 !== Sr(n.prev, n, n.next)) n = n.next;
      else {
        if (Pr(n), (n = e = n.prev) === n.next) break;
        i = !0
      }
    } while (i || n !== e);
    return e
  }

  function dr(t, e, i, n, r, a, o) {
    if (t) {
      !o && a && function(t, e, i, n) {
        var r = t;
        do {
          null === r.z && (r.z = _r(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
        } while (r !== t);
        r.prevZ.nextZ = null, r.prevZ = null,
          function(t) {
            var e, i, n, r, a, o, s, h, c = 1;
            do {
              for (i = t, t = null, a = null, o = 0; i;) {
                for (o++, n = i, s = 0, e = 0; e < c && (s++, n = n.nextZ); e++);
                for (h = c; s > 0 || h > 0 && n;) 0 !== s && (0 === h || !n || i.z <= n.z) ? (r = i, i = i.nextZ, s--) : (r = n, n = n.nextZ, h--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                i = n
              }
              a.nextZ = null, c *= 2
            } while (o > 1)
          }(r)
      }(t, n, r, a);
      for (var s, h, c = t; t.prev !== t.next;)
        if (s = t.prev, h = t.next, a ? mr(t, n, r, a) : fr(t)) e.push(s.i / i), e.push(t.i / i), e.push(h.i / i), Pr(t), t = h.next, c = h.next;
        else if ((t = h) === c) {
        o ? 1 === o ? dr(t = vr(t, e, i), e, i, n, r, a, 2) : 2 === o && gr(t, e, i, n, r, a) : dr(pr(t), e, i, n, r, a, 1);
        break
      }
    }
  }

  function fr(t) {
    var e = t.prev,
      i = t,
      n = t.next;
    if (Sr(e, i, n) >= 0) return !1;
    for (var r = t.next.next; r !== t.prev;) {
      if (Mr(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && Sr(r.prev, r, r.next) >= 0) return !1;
      r = r.next
    }
    return !0
  }

  function mr(t, e, i, n) {
    var r = t.prev,
      a = t,
      o = t.next;
    if (Sr(r, a, o) >= 0) return !1;
    for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, h = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, c = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, l = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = _r(s, h, e, i, n), p = _r(c, l, e, i, n), d = t.nextZ; d && d.z <= p;) {
      if (d !== t.prev && d !== t.next && Mr(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && Sr(d.prev, d, d.next) >= 0) return !1;
      d = d.nextZ
    }
    for (d = t.prevZ; d && d.z >= u;) {
      if (d !== t.prev && d !== t.next && Mr(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && Sr(d.prev, d, d.next) >= 0) return !1;
      d = d.prevZ
    }
    return !0
  }

  function vr(t, e, i) {
    var n = t;
    do {
      var r = n.prev,
        a = n.next.next;
      !Er(r, a) && Tr(r, n, n.next, a) && Ar(r, a) && Ar(a, r) && (e.push(r.i / i), e.push(n.i / i), e.push(a.i / i), Pr(n), Pr(n.next), n = t = a), n = n.next
    } while (n !== t);
    return n
  }

  function gr(t, e, i, n, r, a) {
    var o = t;
    do {
      for (var s = o.next.next; s !== o.prev;) {
        if (o.i !== s.i && wr(o, s)) {
          var h = Lr(o, s);
          return o = pr(o, o.next), h = pr(h, h.next), dr(o, e, i, n, r, a), void dr(h, e, i, n, r, a)
        }
        s = s.next
      }
      o = o.next
    } while (o !== t)
  }

  function yr(t, e) {
    return t.x - e.x
  }

  function xr(t, e) {
    if (e = function(t, e) {
        var i, n = e,
          r = t.x,
          a = t.y,
          o = -1 / 0;
        do {
          if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
            var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
            if (s <= r && s > o) {
              if (o = s, s === r) {
                if (a === n.y) return n;
                if (a === n.next.y) return n.next
              }
              i = n.x < n.next.x ? n : n.next
            }
          }
          n = n.next
        } while (n !== e);
        if (!i) return null;
        if (r === o) return i.prev;
        var h, c = i,
          l = i.x,
          u = i.y,
          p = 1 / 0;
        for (n = i.next; n !== c;) r >= n.x && n.x >= l && r !== n.x && Mr(a < u ? r : o, a, l, u, a < u ? o : r, a, n.x, n.y) && ((h = Math.abs(a - n.y) / (r - n.x)) < p || h === p && n.x > i.x) && Ar(n, t) && (i = n, p = h), n = n.next;
        return i
      }(t, e), e) {
      var i = Lr(e, t);
      pr(i, i.next)
    }
  }

  function _r(t, e, i, n, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
  }

  function br(t) {
    var e = t,
      i = t;
    do {
      e.x < i.x && (i = e), e = e.next
    } while (e !== t);
    return i
  }

  function Mr(t, e, i, n, r, a, o, s) {
    return (r - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (n - s) - (i - o) * (e - s) >= 0 && (i - o) * (a - s) - (r - o) * (n - s) >= 0
  }

  function wr(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
      var i = t;
      do {
        if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Tr(i, i.next, t, e)) return !0;
        i = i.next
      } while (i !== t);
      return !1
    }(t, e) && Ar(t, e) && Ar(e, t) && function(t, e) {
      var i = t,
        n = !1,
        r = (t.x + e.x) / 2,
        a = (t.y + e.y) / 2;
      do {
        i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
      } while (i !== t);
      return n
    }(t, e)
  }

  function Sr(t, e, i) {
    return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
  }

  function Er(t, e) {
    return t.x === e.x && t.y === e.y
  }

  function Tr(t, e, i, n) {
    return !!(Er(t, e) && Er(i, n) || Er(t, n) && Er(i, e)) || Sr(t, e, i) > 0 != Sr(t, e, n) > 0 && Sr(i, n, t) > 0 != Sr(i, n, e) > 0
  }

  function Ar(t, e) {
    return Sr(t.prev, t, t.next) < 0 ? Sr(t, e, t.next) >= 0 && Sr(t, t.prev, e) >= 0 : Sr(t, e, t.prev) < 0 || Sr(t, t.next, e) < 0
  }

  function Lr(t, e) {
    var i = new Rr(t.i, t.x, t.y),
      n = new Rr(e.i, e.x, e.y),
      r = t.next,
      a = e.prev;
    return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
  }

  function Cr(t, e, i, n) {
    var r = new Rr(t, e, i);
    return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
  }

  function Pr(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
  }

  function Rr(t, e, i) {
    this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
  }
  var Ir = {
    area: function(t) {
      for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
      return .5 * i
    },
    isClockWise: function(t) {
      return Ir.area(t) < 0
    },
    triangulateShape: function(t, e) {
      var i = [],
        n = [],
        r = [];
      Nr(t), Or(i, t);
      var a = t.length;
      e.forEach(Nr);
      for (var o = 0; o < e.length; o++) n.push(a), a += e[o].length, Or(i, e[o]);
      var s = function(t, e, i) {
        i = i || 2;
        var n, r, a, o, s, h, c, l = e && e.length,
          u = l ? e[0] * i : t.length,
          p = ur(t, 0, u, i, !0),
          d = [];
        if (!p) return d;
        if (l && (p = function(t, e, i, n) {
            var r, a, o, s = [];
            for (r = 0, a = e.length; r < a; r++)(o = ur(t, e[r] * n, r < a - 1 ? e[r + 1] * n : t.length, n, !1)) === o.next && (o.steiner = !0), s.push(br(o));
            for (s.sort(yr), r = 0; r < s.length; r++) xr(s[r], i), i = pr(i, i.next);
            return i
          }(t, e, p, i)), t.length > 80 * i) {
          n = a = t[0], r = o = t[1];
          for (var f = i; f < u; f += i)(s = t[f]) < n && (n = s), (h = t[f + 1]) < r && (r = h), s > a && (a = s), h > o && (o = h);
          c = 0 !== (c = Math.max(a - n, o - r)) ? 1 / c : 0
        }
        return dr(p, d, i, n, r, c), d
      }(i, n);
      for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
      return r
    }
  };

  function Nr(t) {
    var e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop()
  }

  function Or(t, e) {
    for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
  }

  function Dr(t, e) {
    ee.call(this), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, this.fromBufferGeometry(new Ur(t, e)), this.mergeVertices()
  }

  function Ur(t, e) {
    me.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
      shapes: t,
      options: e
    }, t = Array.isArray(t) ? t : [t];
    for (var i = this, n = [], r = [], a = 0, o = t.length; a < o; a++) s(t[a]);

    function s(t) {
      var a = [],
        o = void 0 !== e.curveSegments ? e.curveSegments : 12,
        s = void 0 !== e.steps ? e.steps : 1,
        h = void 0 !== e.depth ? e.depth : 100,
        c = void 0 === e.bevelEnabled || e.bevelEnabled,
        l = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
        u = void 0 !== e.bevelSize ? e.bevelSize : l - 2,
        p = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
        d = e.extrudePath,
        f = void 0 !== e.UVGenerator ? e.UVGenerator : Br;
      void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), h = e.amount);
      var m, v, g, y, x, _, b, M, w = !1;
      d && (m = d.getSpacedPoints(s), w = !0, c = !1, v = d.computeFrenetFrames(s, !1), g = new at, y = new at, x = new at), c || (p = 0, l = 0, u = 0);
      var S = t.extractPoints(o),
        E = S.shape,
        T = S.holes;
      if (!Ir.isClockWise(E))
        for (E = E.reverse(), b = 0, M = T.length; b < M; b++) _ = T[b], Ir.isClockWise(_) && (T[b] = _.reverse());
      var A = Ir.triangulateShape(E, T),
        L = E;
      for (b = 0, M = T.length; b < M; b++) _ = T[b], E = E.concat(_);

      function C(t, e, i) {
        return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t)
      }
      var P, R, I, N, O, D, U = E.length,
        B = A.length;

      function z(t, e, i) {
        var n, r, a, o = t.x - e.x,
          s = t.y - e.y,
          h = i.x - t.x,
          c = i.y - t.y,
          l = o * o + s * s,
          u = o * c - s * h;
        if (Math.abs(u) > Number.EPSILON) {
          var p = Math.sqrt(l),
            d = Math.sqrt(h * h + c * c),
            f = e.x - s / p,
            m = e.y + o / p,
            v = ((i.x - c / d - f) * c - (i.y + h / d - m) * h) / (o * c - s * h),
            g = (n = f + o * v - t.x) * n + (r = m + s * v - t.y) * r;
          if (g <= 2) return new J(n, r);
          a = Math.sqrt(g / 2)
        } else {
          var y = !1;
          o > Number.EPSILON ? h > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? h < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(c) && (y = !0), y ? (n = -s, r = o, a = Math.sqrt(l)) : (n = o, r = s, a = Math.sqrt(l / 2))
        }
        return new J(n / a, r / a)
      }
      for (var F = [], G = 0, V = L.length, k = V - 1, H = G + 1; G < V; G++, k++, H++) k === V && (k = 0), H === V && (H = 0), F[G] = z(L[G], L[k], L[H]);
      var j, W, X = [],
        q = F.concat();
      for (b = 0, M = T.length; b < M; b++) {
        for (_ = T[b], j = [], G = 0, k = (V = _.length) - 1, H = G + 1; G < V; G++, k++, H++) k === V && (k = 0), H === V && (H = 0), j[G] = z(_[G], _[k], _[H]);
        X.push(j), q = q.concat(j)
      }
      for (P = 0; P < p; P++) {
        for (I = P / p, N = l * Math.cos(I * Math.PI / 2), R = u * Math.sin(I * Math.PI / 2), G = 0, V = L.length; G < V; G++) Z((O = C(L[G], F[G], R)).x, O.y, -N);
        for (b = 0, M = T.length; b < M; b++)
          for (_ = T[b], j = X[b], G = 0, V = _.length; G < V; G++) Z((O = C(_[G], j[G], R)).x, O.y, -N)
      }
      for (R = u, G = 0; G < U; G++) O = c ? C(E[G], q[G], R) : E[G], w ? (y.copy(v.normals[0]).multiplyScalar(O.x), g.copy(v.binormals[0]).multiplyScalar(O.y), x.copy(m[0]).add(y).add(g), Z(x.x, x.y, x.z)) : Z(O.x, O.y, 0);
      for (W = 1; W <= s; W++)
        for (G = 0; G < U; G++) O = c ? C(E[G], q[G], R) : E[G], w ? (y.copy(v.normals[W]).multiplyScalar(O.x), g.copy(v.binormals[W]).multiplyScalar(O.y), x.copy(m[W]).add(y).add(g), Z(x.x, x.y, x.z)) : Z(O.x, O.y, h / s * W);
      for (P = p - 1; P >= 0; P--) {
        for (I = P / p, N = l * Math.cos(I * Math.PI / 2), R = u * Math.sin(I * Math.PI / 2), G = 0, V = L.length; G < V; G++) Z((O = C(L[G], F[G], R)).x, O.y, h + N);
        for (b = 0, M = T.length; b < M; b++)
          for (_ = T[b], j = X[b], G = 0, V = _.length; G < V; G++) O = C(_[G], j[G], R), w ? Z(O.x, O.y + m[s - 1].y, m[s - 1].x + N) : Z(O.x, O.y, h + N)
      }

      function Y(t, e) {
        var i, n;
        for (G = t.length; --G >= 0;) {
          i = G, (n = G - 1) < 0 && (n = t.length - 1);
          var r = 0,
            a = s + 2 * p;
          for (r = 0; r < a; r++) {
            var o = U * r,
              h = U * (r + 1);
            Q(e + i + o, e + n + o, e + n + h, e + i + h)
          }
        }
      }

      function Z(t, e, i) {
        a.push(t), a.push(e), a.push(i)
      }

      function K(t, e, r) {
        $(t), $(e), $(r);
        var a = n.length / 3,
          o = f.generateTopUV(i, n, a - 3, a - 2, a - 1);
        tt(o[0]), tt(o[1]), tt(o[2])
      }

      function Q(t, e, r, a) {
        $(t), $(e), $(a), $(e), $(r), $(a);
        var o = n.length / 3,
          s = f.generateSideWallUV(i, n, o - 6, o - 3, o - 2, o - 1);
        tt(s[0]), tt(s[1]), tt(s[3]), tt(s[1]), tt(s[2]), tt(s[3])
      }

      function $(t) {
        n.push(a[3 * t + 0]), n.push(a[3 * t + 1]), n.push(a[3 * t + 2])
      }

      function tt(t) {
        r.push(t.x), r.push(t.y)
      }! function() {
        var t = n.length / 3;
        if (c) {
          var e = 0,
            r = U * e;
          for (G = 0; G < B; G++) K((D = A[G])[2] + r, D[1] + r, D[0] + r);
          for (r = U * (e = s + 2 * p), G = 0; G < B; G++) K((D = A[G])[0] + r, D[1] + r, D[2] + r)
        } else {
          for (G = 0; G < B; G++) K((D = A[G])[2], D[1], D[0]);
          for (G = 0; G < B; G++) K((D = A[G])[0] + U * s, D[1] + U * s, D[2] + U * s)
        }
        i.addGroup(t, n.length / 3 - t, 0)
      }(),
      function() {
        var t = n.length / 3,
          e = 0;
        for (Y(L, e), e += L.length, b = 0, M = T.length; b < M; b++) Y(_ = T[b], e), e += _.length;
        i.addGroup(t, n.length / 3 - t, 1)
      }()
    }
    this.addAttribute("position", new le(n, 3)), this.addAttribute("uv", new le(r, 2)), this.computeVertexNormals()
  }
  Dr.prototype = Object.create(ee.prototype), Dr.prototype.constructor = Dr, Dr.prototype.toJSON = function() {
    var t = ee.prototype.toJSON.call(this);
    return zr(this.parameters.shapes, this.parameters.options, t)
  }, Ur.prototype = Object.create(me.prototype), Ur.prototype.constructor = Ur, Ur.prototype.toJSON = function() {
    var t = me.prototype.toJSON.call(this);
    return zr(this.parameters.shapes, this.parameters.options, t)
  };
  var Br = {
    generateTopUV: function(t, e, i, n, r) {
      var a = e[3 * i],
        o = e[3 * i + 1],
        s = e[3 * n],
        h = e[3 * n + 1],
        c = e[3 * r],
        l = e[3 * r + 1];
      return [new J(a, o), new J(s, h), new J(c, l)]
    },
    generateSideWallUV: function(t, e, i, n, r, a) {
      var o = e[3 * i],
        s = e[3 * i + 1],
        h = e[3 * i + 2],
        c = e[3 * n],
        l = e[3 * n + 1],
        u = e[3 * n + 2],
        p = e[3 * r],
        d = e[3 * r + 1],
        f = e[3 * r + 2],
        m = e[3 * a],
        v = e[3 * a + 1],
        g = e[3 * a + 2];
      return Math.abs(s - l) < .01 ? [new J(o, 1 - h), new J(c, 1 - u), new J(p, 1 - f), new J(m, 1 - g)] : [new J(s, 1 - h), new J(l, 1 - u), new J(d, 1 - f), new J(v, 1 - g)]
    }
  };

  function zr(t, e, i) {
    if (i.shapes = [], Array.isArray(t))
      for (var n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        i.shapes.push(a.uuid)
      } else i.shapes.push(t.uuid);
    return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i
  }

  function Fr(t, e) {
    ee.call(this), this.type = "TextGeometry", this.parameters = {
      text: t,
      parameters: e
    }, this.fromBufferGeometry(new Gr(t, e)), this.mergeVertices()
  }

  function Gr(t, e) {
    var i = (e = e || {}).font;
    if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new ee;
    var n = i.generateShapes(t, e.size);
    e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Ur.call(this, n, e), this.type = "TextBufferGeometry"
  }

  function Vr(t, e, i, n, r, a, o) {
    ee.call(this), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: i,
      phiStart: n,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, this.fromBufferGeometry(new kr(t, e, i, n, r, a, o)), this.mergeVertices()
  }

  function kr(t, e, i, n, r, a, o) {
    me.call(this), this.type = "SphereBufferGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: i,
      phiStart: n,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
    var s, h, c = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
      l = 0,
      u = [],
      p = new at,
      d = new at,
      f = [],
      m = [],
      v = [],
      g = [];
    for (h = 0; h <= i; h++) {
      var y = [],
        x = h / i;
      for (s = 0; s <= e; s++) {
        var _ = s / e;
        p.x = -t * Math.cos(n + _ * r) * Math.sin(a + x * o), p.y = t * Math.cos(a + x * o), p.z = t * Math.sin(n + _ * r) * Math.sin(a + x * o), m.push(p.x, p.y, p.z), d.set(p.x, p.y, p.z).normalize(), v.push(d.x, d.y, d.z), g.push(_, 1 - x), y.push(l++)
      }
      u.push(y)
    }
    for (h = 0; h < i; h++)
      for (s = 0; s < e; s++) {
        var b = u[h][s + 1],
          M = u[h][s],
          w = u[h + 1][s],
          S = u[h + 1][s + 1];
        (0 !== h || a > 0) && f.push(b, M, S), (h !== i - 1 || c < Math.PI) && f.push(M, w, S)
      }
    this.setIndex(f), this.addAttribute("position", new le(m, 3)), this.addAttribute("normal", new le(v, 3)), this.addAttribute("uv", new le(g, 2))
  }

  function Hr(t, e, i, n, r, a) {
    ee.call(this), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: i,
      phiSegments: n,
      thetaStart: r,
      thetaLength: a
    }, this.fromBufferGeometry(new jr(t, e, i, n, r, a)), this.mergeVertices()
  }

  function jr(t, e, i, n, r, a) {
    me.call(this), this.type = "RingBufferGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: i,
      phiSegments: n,
      thetaStart: r,
      thetaLength: a
    }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8;
    var o, s, h, c = [],
      l = [],
      u = [],
      p = [],
      d = t,
      f = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
      m = new at,
      v = new J;
    for (s = 0; s <= n; s++) {
      for (h = 0; h <= i; h++) o = r + h / i * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), l.push(m.x, m.y, m.z), u.push(0, 0, 1), v.x = (m.x / e + 1) / 2, v.y = (m.y / e + 1) / 2, p.push(v.x, v.y);
      d += f
    }
    for (s = 0; s < n; s++) {
      var g = s * (i + 1);
      for (h = 0; h < i; h++) {
        var y = o = h + g,
          x = o + i + 1,
          _ = o + i + 2,
          b = o + 1;
        c.push(y, x, b), c.push(x, _, b)
      }
    }
    this.setIndex(c), this.addAttribute("position", new le(l, 3)), this.addAttribute("normal", new le(u, 3)), this.addAttribute("uv", new le(p, 2))
  }

  function Wr(t, e, i, n) {
    ee.call(this), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: i,
      phiLength: n
    }, this.fromBufferGeometry(new Xr(t, e, i, n)), this.mergeVertices()
  }

  function Xr(t, e, i, n) {
    me.call(this), this.type = "LatheBufferGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: i,
      phiLength: n
    }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = Y.clamp(n, 0, 2 * Math.PI);
    var r, a, o, s = [],
      h = [],
      c = [],
      l = 1 / e,
      u = new at,
      p = new J;
    for (a = 0; a <= e; a++) {
      var d = i + a * l * n,
        f = Math.sin(d),
        m = Math.cos(d);
      for (o = 0; o <= t.length - 1; o++) u.x = t[o].x * f, u.y = t[o].y, u.z = t[o].x * m, h.push(u.x, u.y, u.z), p.x = a / e, p.y = o / (t.length - 1), c.push(p.x, p.y)
    }
    for (a = 0; a < e; a++)
      for (o = 0; o < t.length - 1; o++) {
        var v = r = o + a * t.length,
          g = r + t.length,
          y = r + t.length + 1,
          x = r + 1;
        s.push(v, g, x), s.push(g, y, x)
      }
    if (this.setIndex(s), this.addAttribute("position", new le(h, 3)), this.addAttribute("uv", new le(c, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
      var _ = this.attributes.normal.array,
        b = new at,
        M = new at,
        w = new at;
      for (r = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3) b.x = _[o + 0], b.y = _[o + 1], b.z = _[o + 2], M.x = _[r + o + 0], M.y = _[r + o + 1], M.z = _[r + o + 2], w.addVectors(b, M).normalize(), _[o + 0] = _[r + o + 0] = w.x, _[o + 1] = _[r + o + 1] = w.y, _[o + 2] = _[r + o + 2] = w.z
    }
  }

  function qr(t, e) {
    ee.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
      shapes: t,
      curveSegments: e
    }, this.fromBufferGeometry(new Yr(t, e)), this.mergeVertices()
  }

  function Yr(t, e) {
    me.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
      shapes: t,
      curveSegments: e
    }, e = e || 12;
    var i = [],
      n = [],
      r = [],
      a = [],
      o = 0,
      s = 0;
    if (!1 === Array.isArray(t)) c(t);
    else
      for (var h = 0; h < t.length; h++) c(t[h]), this.addGroup(o, s, h), o += s, s = 0;

    function c(t) {
      var o, h, c, l = n.length / 3,
        u = t.extractPoints(e),
        p = u.shape,
        d = u.holes;
      if (!1 === Ir.isClockWise(p))
        for (p = p.reverse(), o = 0, h = d.length; o < h; o++) c = d[o], !0 === Ir.isClockWise(c) && (d[o] = c.reverse());
      var f = Ir.triangulateShape(p, d);
      for (o = 0, h = d.length; o < h; o++) c = d[o], p = p.concat(c);
      for (o = 0, h = p.length; o < h; o++) {
        var m = p[o];
        n.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y)
      }
      for (o = 0, h = f.length; o < h; o++) {
        var v = f[o],
          g = v[0] + l,
          y = v[1] + l,
          x = v[2] + l;
        i.push(g, y, x), s += 3
      }
    }
    this.setIndex(i), this.addAttribute("position", new le(n, 3)), this.addAttribute("normal", new le(r, 3)), this.addAttribute("uv", new le(a, 2))
  }

  function Jr(t, e) {
    if (e.shapes = [], Array.isArray(t))
      for (var i = 0, n = t.length; i < n; i++) {
        var r = t[i];
        e.shapes.push(r.uuid)
      } else e.shapes.push(t.uuid);
    return e
  }

  function Zr(t, e) {
    me.call(this), this.type = "EdgesGeometry", this.parameters = {
      thresholdAngle: e
    }, e = void 0 !== e ? e : 1;
    var i, n, r, a, o = [],
      s = Math.cos(Y.DEG2RAD * e),
      h = [0, 0],
      c = {},
      l = ["a", "b", "c"];
    t.isBufferGeometry ? (a = new ee).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
    for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
      for (var m = p[d], v = 0; v < 3; v++) i = m[l[v]], n = m[l[(v + 1) % 3]], h[0] = Math.min(i, n), h[1] = Math.max(i, n), void 0 === c[r = h[0] + "," + h[1]] ? c[r] = {
        index1: h[0],
        index2: h[1],
        face1: d,
        face2: void 0
      } : c[r].face2 = d;
    for (r in c) {
      var g = c[r];
      if (void 0 === g.face2 || p[g.face1].normal.dot(p[g.face2].normal) <= s) {
        var y = u[g.index1];
        o.push(y.x, y.y, y.z), y = u[g.index2], o.push(y.x, y.y, y.z)
      }
    }
    this.addAttribute("position", new le(o, 3))
  }

  function Kr(t, e, i, n, r, a, o, s) {
    ee.call(this), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: i,
      radialSegments: n,
      heightSegments: r,
      openEnded: a,
      thetaStart: o,
      thetaLength: s
    }, this.fromBufferGeometry(new Qr(t, e, i, n, r, a, o, s)), this.mergeVertices()
  }

  function Qr(t, e, i, n, r, a, o, s) {
    me.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: i,
      radialSegments: n,
      heightSegments: r,
      openEnded: a,
      thetaStart: o,
      thetaLength: s
    };
    var h = this;
    t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, i = i || 1, n = Math.floor(n) || 8, r = Math.floor(r) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
    var c = [],
      l = [],
      u = [],
      p = [],
      d = 0,
      f = [],
      m = i / 2,
      v = 0;

    function g(i) {
      var r, a, f, g = new J,
        y = new at,
        x = 0,
        _ = !0 === i ? t : e,
        b = !0 === i ? 1 : -1;
      for (a = d, r = 1; r <= n; r++) l.push(0, m * b, 0), u.push(0, b, 0), p.push(.5, .5), d++;
      for (f = d, r = 0; r <= n; r++) {
        var M = r / n * s + o,
          w = Math.cos(M),
          S = Math.sin(M);
        y.x = _ * S, y.y = m * b, y.z = _ * w, l.push(y.x, y.y, y.z), u.push(0, b, 0), g.x = .5 * w + .5, g.y = .5 * S * b + .5, p.push(g.x, g.y), d++
      }
      for (r = 0; r < n; r++) {
        var E = a + r,
          T = f + r;
        !0 === i ? c.push(T, T + 1, E) : c.push(T + 1, T, E), x += 3
      }
      h.addGroup(v, x, !0 === i ? 1 : 2), v += x
    }! function() {
      var a, g, y = new at,
        x = new at,
        _ = 0,
        b = (e - t) / i;
      for (g = 0; g <= r; g++) {
        var M = [],
          w = g / r,
          S = w * (e - t) + t;
        for (a = 0; a <= n; a++) {
          var E = a / n,
            T = E * s + o,
            A = Math.sin(T),
            L = Math.cos(T);
          x.x = S * A, x.y = -w * i + m, x.z = S * L, l.push(x.x, x.y, x.z), y.set(A, b, L).normalize(), u.push(y.x, y.y, y.z), p.push(E, 1 - w), M.push(d++)
        }
        f.push(M)
      }
      for (a = 0; a < n; a++)
        for (g = 0; g < r; g++) {
          var C = f[g][a],
            P = f[g + 1][a],
            R = f[g + 1][a + 1],
            I = f[g][a + 1];
          c.push(C, P, I), c.push(P, R, I), _ += 6
        }
      h.addGroup(v, _, 0), v += _
    }(), !1 === a && (t > 0 && g(!0), e > 0 && g(!1)), this.setIndex(c), this.addAttribute("position", new le(l, 3)), this.addAttribute("normal", new le(u, 3)), this.addAttribute("uv", new le(p, 2))
  }

  function $r(t, e, i, n, r, a, o) {
    Kr.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: i,
      heightSegments: n,
      openEnded: r,
      thetaStart: a,
      thetaLength: o
    }
  }

  function ta(t, e, i, n, r, a, o) {
    Qr.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: i,
      heightSegments: n,
      openEnded: r,
      thetaStart: a,
      thetaLength: o
    }
  }

  function ea(t, e, i, n) {
    ee.call(this), this.type = "CircleGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: i,
      thetaLength: n
    }, this.fromBufferGeometry(new ia(t, e, i, n)), this.mergeVertices()
  }

  function ia(t, e, i, n) {
    me.call(this), this.type = "CircleBufferGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: i,
      thetaLength: n
    }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
    var r, a, o = [],
      s = [],
      h = [],
      c = [],
      l = new at,
      u = new J;
    for (s.push(0, 0, 0), h.push(0, 0, 1), c.push(.5, .5), a = 0, r = 3; a <= e; a++, r += 3) {
      var p = i + a / e * n;
      l.x = t * Math.cos(p), l.y = t * Math.sin(p), s.push(l.x, l.y, l.z), h.push(0, 0, 1), u.x = (s[r] / t + 1) / 2, u.y = (s[r + 1] / t + 1) / 2, c.push(u.x, u.y)
    }
    for (r = 1; r <= e; r++) o.push(r, r + 1, 0);
    this.setIndex(o), this.addAttribute("position", new le(s, 3)), this.addAttribute("normal", new le(h, 3)), this.addAttribute("uv", new le(c, 2))
  }
  Fr.prototype = Object.create(ee.prototype), Fr.prototype.constructor = Fr, Gr.prototype = Object.create(Ur.prototype), Gr.prototype.constructor = Gr, Vr.prototype = Object.create(ee.prototype), Vr.prototype.constructor = Vr, kr.prototype = Object.create(me.prototype), kr.prototype.constructor = kr, Hr.prototype = Object.create(ee.prototype), Hr.prototype.constructor = Hr, jr.prototype = Object.create(me.prototype), jr.prototype.constructor = jr, Wr.prototype = Object.create(ee.prototype), Wr.prototype.constructor = Wr, Xr.prototype = Object.create(me.prototype), Xr.prototype.constructor = Xr, qr.prototype = Object.create(ee.prototype), qr.prototype.constructor = qr, qr.prototype.toJSON = function() {
    var t = ee.prototype.toJSON.call(this);
    return Jr(this.parameters.shapes, t)
  }, Yr.prototype = Object.create(me.prototype), Yr.prototype.constructor = Yr, Yr.prototype.toJSON = function() {
    var t = me.prototype.toJSON.call(this);
    return Jr(this.parameters.shapes, t)
  }, Zr.prototype = Object.create(me.prototype), Zr.prototype.constructor = Zr, Kr.prototype = Object.create(ee.prototype), Kr.prototype.constructor = Kr, Qr.prototype = Object.create(me.prototype), Qr.prototype.constructor = Qr, $r.prototype = Object.create(Kr.prototype), $r.prototype.constructor = $r, ta.prototype = Object.create(Qr.prototype), ta.prototype.constructor = ta, ea.prototype = Object.create(ee.prototype), ea.prototype.constructor = ea, ia.prototype = Object.create(me.prototype), ia.prototype.constructor = ia;
  var na = Object.freeze({
    __proto__: null,
    WireframeGeometry: Xn,
    ParametricGeometry: qn,
    ParametricBufferGeometry: Yn,
    TetrahedronGeometry: Kn,
    TetrahedronBufferGeometry: Qn,
    OctahedronGeometry: $n,
    OctahedronBufferGeometry: tr,
    IcosahedronGeometry: er,
    IcosahedronBufferGeometry: ir,
    DodecahedronGeometry: nr,
    DodecahedronBufferGeometry: rr,
    PolyhedronGeometry: Jn,
    PolyhedronBufferGeometry: Zn,
    TubeGeometry: ar,
    TubeBufferGeometry: or,
    TorusKnotGeometry: sr,
    TorusKnotBufferGeometry: hr,
    TorusGeometry: cr,
    TorusBufferGeometry: lr,
    TextGeometry: Fr,
    TextBufferGeometry: Gr,
    SphereGeometry: Vr,
    SphereBufferGeometry: kr,
    RingGeometry: Hr,
    RingBufferGeometry: jr,
    PlaneGeometry: ye,
    PlaneBufferGeometry: xe,
    LatheGeometry: Wr,
    LatheBufferGeometry: Xr,
    ShapeGeometry: qr,
    ShapeBufferGeometry: Yr,
    ExtrudeGeometry: Dr,
    ExtrudeBufferGeometry: Ur,
    EdgesGeometry: Zr,
    ConeGeometry: $r,
    ConeBufferGeometry: ta,
    CylinderGeometry: Kr,
    CylinderBufferGeometry: Qr,
    CircleGeometry: ea,
    CircleBufferGeometry: ia,
    BoxGeometry: ve,
    BoxBufferGeometry: ge
  });

  function ra(t) {
    Ne.call(this), this.type = "ShadowMaterial", this.color = new Ct(0), this.transparent = !0, this.setValues(t)
  }

  function aa(t) {
    Oe.call(this, t), this.type = "RawShaderMaterial"
  }

  function oa(t) {
    Ne.call(this), this.defines = {
      STANDARD: ""
    }, this.type = "MeshStandardMaterial", this.color = new Ct(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ct(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function sa(t) {
    oa.call(this), this.defines = {
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
  }

  function ha(t) {
    Ne.call(this), this.type = "MeshPhongMaterial", this.color = new Ct(16777215), this.specular = new Ct(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ct(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function ca(t) {
    ha.call(this), this.defines = {
      TOON: ""
    }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
  }

  function la(t) {
    Ne.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function ua(t) {
    Ne.call(this), this.type = "MeshLambertMaterial", this.color = new Ct(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ct(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function pa(t) {
    if (Ne.call(this), this.defines = {
        MATCAP: ""
      }, this.type = "MeshMatcapMaterial", this.color = new Ct(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !1, this.setValues(t), null === this.matcap) {
      var e = document.createElement("canvas");
      e.width = 1, e.height = 1;
      var i = e.getContext("2d");
      i.fillStyle = "#fff", i.fillRect(0, 0, 1, 1), this.matcap = new THREE.CanvasTexture(e)
    }
  }

  function da(t) {
    Dn.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
  }
  ra.prototype = Object.create(Ne.prototype), ra.prototype.constructor = ra, ra.prototype.isShadowMaterial = !0, ra.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.color.copy(t.color), this
  }, aa.prototype = Object.create(Oe.prototype), aa.prototype.constructor = aa, aa.prototype.isRawShaderMaterial = !0, oa.prototype = Object.create(Ne.prototype), oa.prototype.constructor = oa, oa.prototype.isMeshStandardMaterial = !0, oa.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.defines = {
      STANDARD: ""
    }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, sa.prototype = Object.create(oa.prototype), sa.prototype.constructor = sa, sa.prototype.isMeshPhysicalMaterial = !0, sa.prototype.copy = function(t) {
    return oa.prototype.copy.call(this, t), this.defines = {
      PHYSICAL: ""
    }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
  }, ha.prototype = Object.create(Ne.prototype), ha.prototype.constructor = ha, ha.prototype.isMeshPhongMaterial = !0, ha.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, ca.prototype = Object.create(ha.prototype), ca.prototype.constructor = ca, ca.prototype.isMeshToonMaterial = !0, ca.prototype.copy = function(t) {
    return ha.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
  }, la.prototype = Object.create(Ne.prototype), la.prototype.constructor = la, la.prototype.isMeshNormalMaterial = !0, la.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, ua.prototype = Object.create(Ne.prototype), ua.prototype.constructor = ua, ua.prototype.isMeshLambertMaterial = !0, ua.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, pa.prototype = Object.create(Ne.prototype), pa.prototype.constructor = pa, pa.prototype.isMeshMatcapMaterial = !0, pa.prototype.copy = function(t) {
    return Ne.prototype.copy.call(this, t), this.defines = {
      MATCAP: ""
    }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, da.prototype = Object.create(Dn.prototype), da.prototype.constructor = da, da.prototype.isLineDashedMaterial = !0, da.prototype.copy = function(t) {
    return Dn.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
  };
  var fa = Object.freeze({
      __proto__: null,
      ShadowMaterial: ra,
      SpriteMaterial: Cn,
      RawShaderMaterial: aa,
      ShaderMaterial: Oe,
      PointsMaterial: Fn,
      MeshPhysicalMaterial: sa,
      MeshStandardMaterial: oa,
      MeshPhongMaterial: ha,
      MeshToonMaterial: ca,
      MeshNormalMaterial: la,
      MeshLambertMaterial: ua,
      MeshDepthMaterial: yn,
      MeshDistanceMaterial: xn,
      MeshBasicMaterial: Be,
      MeshMatcapMaterial: pa,
      LineDashedMaterial: da,
      LineBasicMaterial: Dn,
      Material: Ne
    }),
    ma = {
      enabled: !1,
      files: {},
      add: function(t, e) {
        !1 !== this.enabled && (this.files[t] = e)
      },
      get: function(t) {
        if (!1 !== this.enabled) return this.files[t]
      },
      remove: function(t) {
        delete this.files[t]
      },
      clear: function() {
        this.files = {}
      }
    };

  function va(t, e, i) {
    var n = this,
      r = !1,
      a = 0,
      o = 0,
      s = void 0;
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
      o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
    }, this.itemEnd = function(t) {
      a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad())
    }, this.itemError = function(t) {
      void 0 !== n.onError && n.onError(t)
    }, this.resolveURL = function(t) {
      return s ? s(t) : t
    }, this.setURLModifier = function(t) {
      return s = t, this
    }
  }
  var ga = new va,
    ya = {};

  function xa(t) {
    this.manager = void 0 !== t ? t : ga
  }

  function _a(t) {
    this.manager = void 0 !== t ? t : ga, this._parser = null
  }

  function ba(t) {
    this.manager = void 0 !== t ? t : ga, this._parser = null
  }

  function Ma(t) {
    this.manager = void 0 !== t ? t : ga
  }

  function wa(t) {
    this.manager = void 0 !== t ? t : ga
  }

  function Sa(t) {
    this.manager = void 0 !== t ? t : ga
  }

  function Ea() {
    this.type = "Curve", this.arcLengthDivisions = 200
  }

  function Ta(t, e, i, n, r, a, o, s) {
    Ea.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
  }

  function Aa(t, e, i, n, r, a) {
    Ta.call(this, t, e, i, i, n, r, a), this.type = "ArcCurve"
  }

  function La() {
    var t = 0,
      e = 0,
      i = 0,
      n = 0;

    function r(r, a, o, s) {
      t = r, e = o, i = -3 * r + 3 * a - 2 * o - s, n = 2 * r - 2 * a + o + s
    }
    return {
      initCatmullRom: function(t, e, i, n, a) {
        r(e, i, a * (i - t), a * (n - e))
      },
      initNonuniformCatmullRom: function(t, e, i, n, a, o, s) {
        var h = (e - t) / a - (i - t) / (a + o) + (i - e) / o,
          c = (i - e) / o - (n - e) / (o + s) + (n - i) / s;
        r(e, i, h *= o, c *= o)
      },
      calc: function(r) {
        var a = r * r;
        return t + e * r + i * a + n * (a * r)
      }
    }
  }
  Object.assign(xa.prototype, {
    load: function(t, e, i, n) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var r = this,
        a = ma.get(t);
      if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
        e && e(a), r.manager.itemEnd(t)
      }), 0), a;
      if (void 0 === ya[t]) {
        var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
        if (o) {
          var s = o[1],
            h = !!o[2],
            c = o[3];
          c = window.decodeURIComponent(c), h && (c = window.atob(c));
          try {
            var l, u = (this.responseType || "").toLowerCase();
            switch (u) {
              case "arraybuffer":
              case "blob":
                for (var p = new Uint8Array(c.length), d = 0; d < c.length; d++) p[d] = c.charCodeAt(d);
                l = "blob" === u ? new Blob([p.buffer], {
                  type: s
                }) : p.buffer;
                break;
              case "document":
                var f = new DOMParser;
                l = f.parseFromString(c, s);
                break;
              case "json":
                l = JSON.parse(c);
                break;
              default:
                l = c
            }
            window.setTimeout((function() {
              e && e(l), r.manager.itemEnd(t)
            }), 0)
          } catch (e) {
            window.setTimeout((function() {
              n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
            }), 0)
          }
        } else {
          ya[t] = [], ya[t].push({
            onLoad: e,
            onProgress: i,
            onError: n
          });
          var m = new XMLHttpRequest;
          for (var v in m.open("GET", t, !0), m.addEventListener("load", (function(e) {
              var i = this.response;
              ma.add(t, i);
              var n = ya[t];
              if (delete ya[t], 200 === this.status || 0 === this.status) {
                0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                for (var a = 0, o = n.length; a < o; a++)(s = n[a]).onLoad && s.onLoad(i);
                r.manager.itemEnd(t)
              } else {
                for (a = 0, o = n.length; a < o; a++) {
                  var s;
                  (s = n[a]).onError && s.onError(e)
                }
                r.manager.itemEnd(t), r.manager.itemError(t)
              }
            }), !1), m.addEventListener("progress", (function(e) {
              for (var i = ya[t], n = 0, r = i.length; n < r; n++) {
                var a = i[n];
                a.onProgress && a.onProgress(e)
              }
            }), !1), m.addEventListener("error", (function(e) {
              var i = ya[t];
              delete ya[t];
              for (var n = 0, a = i.length; n < a; n++) {
                var o = i[n];
                o.onError && o.onError(e)
              }
              r.manager.itemEnd(t), r.manager.itemError(t)
            }), !1), m.addEventListener("abort", (function(e) {
              var i = ya[t];
              delete ya[t];
              for (var n = 0, a = i.length; n < a; n++) {
                var o = i[n];
                o.onError && o.onError(e)
              }
              r.manager.itemEnd(t), r.manager.itemError(t)
            }), !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
          m.send(null)
        }
        return r.manager.itemStart(t), m
      }
      ya[t].push({
        onLoad: e,
        onProgress: i,
        onError: n
      })
    },
    setPath: function(t) {
      return this.path = t, this
    },
    setResponseType: function(t) {
      return this.responseType = t, this
    },
    setWithCredentials: function(t) {
      return this.withCredentials = t, this
    },
    setMimeType: function(t) {
      return this.mimeType = t, this
    },
    setRequestHeader: function(t) {
      return this.requestHeader = t, this
    }
  }), Object.assign(_a.prototype, {
    load: function(t, e, i, n) {
      var r = this,
        a = [],
        o = new Hn;
      o.image = a;
      var s = new xa(this.manager);

      function h(h) {
        s.load(t[h], (function(t) {
          var i = r._parser(t, !0);
          a[h] = {
            width: i.width,
            height: i.height,
            format: i.format,
            mipmaps: i.mipmaps
          }, 6 === (c += 1) && (1 === i.mipmapCount && (o.minFilter = x), o.format = i.format, o.needsUpdate = !0, e && e(o))
        }), i, n)
      }
      if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
        for (var c = 0, l = 0, u = t.length; l < u; ++l) h(l);
      else s.load(t, (function(t) {
        var i = r._parser(t, !0);
        if (i.isCubemap)
          for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) {
            a[s] = {
              mipmaps: []
            };
            for (var h = 0; h < i.mipmapCount; h++) a[s].mipmaps.push(i.mipmaps[s * i.mipmapCount + h]), a[s].format = i.format, a[s].width = i.width, a[s].height = i.height
          } else o.image.width = i.width, o.image.height = i.height, o.mipmaps = i.mipmaps;
        1 === i.mipmapCount && (o.minFilter = x), o.format = i.format, o.needsUpdate = !0, e && e(o)
      }), i, n);
      return o
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(ba.prototype, {
    load: function(t, e, i, n) {
      var r = this,
        a = new vt,
        o = new xa(this.manager);
      return o.setResponseType("arraybuffer"), o.load(t, (function(t) {
        var i = r._parser(t);
        i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : f, a.wrapT = void 0 !== i.wrapT ? i.wrapT : f, a.magFilter = void 0 !== i.magFilter ? i.magFilter : x, a.minFilter = void 0 !== i.minFilter ? i.minFilter : b, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps), 1 === i.mipmapCount && (a.minFilter = x), a.needsUpdate = !0, e && e(a, i))
      }), i, n), a
    }
  }), Object.assign(Ma.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var r = this,
        a = ma.get(t);
      if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
        e && e(a), r.manager.itemEnd(t)
      }), 0), a;
      var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

      function s() {
        o.removeEventListener("load", s, !1), o.removeEventListener("error", h, !1), ma.add(t, this), e && e(this), r.manager.itemEnd(t)
      }

      function h(e) {
        o.removeEventListener("load", s, !1), o.removeEventListener("error", h, !1), n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
      }
      return o.addEventListener("load", s, !1), o.addEventListener("error", h, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(wa.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      var r = new Ze,
        a = new Ma(this.manager);
      a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
      var o = 0;

      function s(i) {
        a.load(t[i], (function(t) {
          r.images[i] = t, 6 == ++o && (r.needsUpdate = !0, e && e(r))
        }), void 0, n)
      }
      for (var h = 0; h < t.length; ++h) s(h);
      return r
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(Sa.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      var r = new pt,
        a = new Ma(this.manager);
      return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, (function(i) {
        r.image = i;
        var n = t.search(/\.jpe?g$/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
        r.format = n ? L : C, r.needsUpdate = !0, void 0 !== e && e(r)
      }), i, n), r
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(Ea.prototype, {
    getPoint: function() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null
    },
    getPointAt: function(t, e) {
      var i = this.getUtoTmapping(t);
      return this.getPoint(i, e)
    },
    getPoints: function(t, e) {
      void 0 === t && (t = 5), e = e || [];
      for (var i = 0; i <= t; i++) e.push(this.getPoint(i / t));
      return e
    },
    getSpacedPoints: function(t) {
      void 0 === t && (t = 5);
      for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
      return e
    },
    getLength: function() {
      var t = this.getLengths();
      return t[t.length - 1]
    },
    getLengths: function(t) {
      if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var e, i, n = [],
        r = this.getPoint(0),
        a = 0;
      for (n.push(0), i = 1; i <= t; i++) a += (e = this.getPoint(i / t)).distanceTo(r), n.push(a), r = e;
      return this.cacheArcLengths = n, n
    },
    updateArcLengths: function() {
      this.needsUpdate = !0, this.getLengths()
    },
    getUtoTmapping: function(t, e) {
      var i, n = this.getLengths(),
        r = 0,
        a = n.length;
      i = e || t * n[a - 1];
      for (var o, s = 0, h = a - 1; s <= h;)
        if ((o = n[r = Math.floor(s + (h - s) / 2)] - i) < 0) s = r + 1;
        else {
          if (!(o > 0)) {
            h = r;
            break
          }
          h = r - 1
        } if (n[r = h] === i) return r / (a - 1);
      var c = n[r];
      return (r + (i - c) / (n[r + 1] - c)) / (a - 1)
    },
    getTangent: function(t) {
      var e = 1e-4,
        i = t - e,
        n = t + e;
      i < 0 && (i = 0), n > 1 && (n = 1);
      var r = this.getPoint(i);
      return this.getPoint(n).clone().sub(r).normalize()
    },
    getTangentAt: function(t) {
      var e = this.getUtoTmapping(t);
      return this.getTangent(e)
    },
    computeFrenetFrames: function(t, e) {
      var i, n, r, a = new at,
        o = [],
        s = [],
        h = [],
        c = new at,
        l = new nt;
      for (i = 0; i <= t; i++) n = i / t, o[i] = this.getTangentAt(n), o[i].normalize();
      s[0] = new at, h[0] = new at;
      var u = Number.MAX_VALUE,
        p = Math.abs(o[0].x),
        d = Math.abs(o[0].y),
        f = Math.abs(o[0].z);
      for (p <= u && (u = p, a.set(1, 0, 0)), d <= u && (u = d, a.set(0, 1, 0)), f <= u && a.set(0, 0, 1), c.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], c), h[0].crossVectors(o[0], s[0]), i = 1; i <= t; i++) s[i] = s[i - 1].clone(), h[i] = h[i - 1].clone(), c.crossVectors(o[i - 1], o[i]), c.length() > Number.EPSILON && (c.normalize(), r = Math.acos(Y.clamp(o[i - 1].dot(o[i]), -1, 1)), s[i].applyMatrix4(l.makeRotationAxis(c, r))), h[i].crossVectors(o[i], s[i]);
      if (!0 === e)
        for (r = Math.acos(Y.clamp(s[0].dot(s[t]), -1, 1)), r /= t, o[0].dot(c.crossVectors(s[0], s[t])) > 0 && (r = -r), i = 1; i <= t; i++) s[i].applyMatrix4(l.makeRotationAxis(o[i], r * i)), h[i].crossVectors(o[i], s[i]);
      return {
        tangents: o,
        normals: s,
        binormals: h
      }
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this
    },
    toJSON: function() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
    },
    fromJSON: function(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this
    }
  }), Ta.prototype = Object.create(Ea.prototype), Ta.prototype.constructor = Ta, Ta.prototype.isEllipseCurve = !0, Ta.prototype.getPoint = function(t, e) {
    for (var i = e || new J, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += n;
    for (; r > n;) r -= n;
    r < Number.EPSILON && (r = a ? 0 : n), !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n);
    var o = this.aStartAngle + t * r,
      s = this.aX + this.xRadius * Math.cos(o),
      h = this.aY + this.yRadius * Math.sin(o);
    if (0 !== this.aRotation) {
      var c = Math.cos(this.aRotation),
        l = Math.sin(this.aRotation),
        u = s - this.aX,
        p = h - this.aY;
      s = u * c - p * l + this.aX, h = u * l + p * c + this.aY
    }
    return i.set(s, h)
  }, Ta.prototype.copy = function(t) {
    return Ea.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
  }, Ta.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
  }, Ta.prototype.fromJSON = function(t) {
    return Ea.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
  }, Aa.prototype = Object.create(Ta.prototype), Aa.prototype.constructor = Aa, Aa.prototype.isArcCurve = !0;
  var Ca = new at,
    Pa = new La,
    Ra = new La,
    Ia = new La;

  function Na(t, e, i, n) {
    Ea.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5
  }

  function Oa(t, e, i, n, r) {
    var a = .5 * (n - e),
      o = .5 * (r - i),
      s = t * t;
    return (2 * i - 2 * n + a + o) * (t * s) + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i
  }

  function Da(t, e, i, n) {
    return function(t, e) {
      var i = 1 - t;
      return i * i * e
    }(t, e) + function(t, e) {
      return 2 * (1 - t) * t * e
    }(t, i) + function(t, e) {
      return t * t * e
    }(t, n)
  }

  function Ua(t, e, i, n, r) {
    return function(t, e) {
      var i = 1 - t;
      return i * i * i * e
    }(t, e) + function(t, e) {
      var i = 1 - t;
      return 3 * i * i * t * e
    }(t, i) + function(t, e) {
      return 3 * (1 - t) * t * t * e
    }(t, n) + function(t, e) {
      return t * t * t * e
    }(t, r)
  }

  function Ba(t, e, i, n) {
    Ea.call(this), this.type = "CubicBezierCurve", this.v0 = t || new J, this.v1 = e || new J, this.v2 = i || new J, this.v3 = n || new J
  }

  function za(t, e, i, n) {
    Ea.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new at, this.v1 = e || new at, this.v2 = i || new at, this.v3 = n || new at
  }

  function Fa(t, e) {
    Ea.call(this), this.type = "LineCurve", this.v1 = t || new J, this.v2 = e || new J
  }

  function Ga(t, e) {
    Ea.call(this), this.type = "LineCurve3", this.v1 = t || new at, this.v2 = e || new at
  }

  function Va(t, e, i) {
    Ea.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new J, this.v1 = e || new J, this.v2 = i || new J
  }

  function ka(t, e, i) {
    Ea.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new at, this.v1 = e || new at, this.v2 = i || new at
  }

  function Ha(t) {
    Ea.call(this), this.type = "SplineCurve", this.points = t || []
  }
  Na.prototype = Object.create(Ea.prototype), Na.prototype.constructor = Na, Na.prototype.isCatmullRomCurve3 = !0, Na.prototype.getPoint = function(t, e) {
    var i, n, r, a, o = e || new at,
      s = this.points,
      h = s.length,
      c = (h - (this.closed ? 0 : 1)) * t,
      l = Math.floor(c),
      u = c - l;
    if (this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / h) + 1) * h : 0 === u && l === h - 1 && (l = h - 2, u = 1), this.closed || l > 0 ? i = s[(l - 1) % h] : (Ca.subVectors(s[0], s[1]).add(s[0]), i = Ca), n = s[l % h], r = s[(l + 1) % h], this.closed || l + 2 < h ? a = s[(l + 2) % h] : (Ca.subVectors(s[h - 1], s[h - 2]).add(s[h - 1]), a = Ca), "centripetal" === this.curveType || "chordal" === this.curveType) {
      var p = "chordal" === this.curveType ? .5 : .25,
        d = Math.pow(i.distanceToSquared(n), p),
        f = Math.pow(n.distanceToSquared(r), p),
        m = Math.pow(r.distanceToSquared(a), p);
      f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), Pa.initNonuniformCatmullRom(i.x, n.x, r.x, a.x, d, f, m), Ra.initNonuniformCatmullRom(i.y, n.y, r.y, a.y, d, f, m), Ia.initNonuniformCatmullRom(i.z, n.z, r.z, a.z, d, f, m)
    } else "catmullrom" === this.curveType && (Pa.initCatmullRom(i.x, n.x, r.x, a.x, this.tension), Ra.initCatmullRom(i.y, n.y, r.y, a.y, this.tension), Ia.initCatmullRom(i.z, n.z, r.z, a.z, this.tension));
    return o.set(Pa.calc(u), Ra.calc(u), Ia.calc(u)), o
  }, Na.prototype.copy = function(t) {
    Ea.prototype.copy.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; e < i; e++) {
      var n = t.points[e];
      this.points.push(n.clone())
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
  }, Na.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    t.points = [];
    for (var e = 0, i = this.points.length; e < i; e++) {
      var n = this.points[e];
      t.points.push(n.toArray())
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
  }, Na.prototype.fromJSON = function(t) {
    Ea.prototype.fromJSON.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; e < i; e++) {
      var n = t.points[e];
      this.points.push((new at).fromArray(n))
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
  }, Ba.prototype = Object.create(Ea.prototype), Ba.prototype.constructor = Ba, Ba.prototype.isCubicBezierCurve = !0, Ba.prototype.getPoint = function(t, e) {
    var i = e || new J,
      n = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3;
    return i.set(Ua(t, n.x, r.x, a.x, o.x), Ua(t, n.y, r.y, a.y, o.y)), i
  }, Ba.prototype.copy = function(t) {
    return Ea.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
  }, Ba.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
  }, Ba.prototype.fromJSON = function(t) {
    return Ea.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
  }, za.prototype = Object.create(Ea.prototype), za.prototype.constructor = za, za.prototype.isCubicBezierCurve3 = !0, za.prototype.getPoint = function(t, e) {
    var i = e || new at,
      n = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3;
    return i.set(Ua(t, n.x, r.x, a.x, o.x), Ua(t, n.y, r.y, a.y, o.y), Ua(t, n.z, r.z, a.z, o.z)), i
  }, za.prototype.copy = function(t) {
    return Ea.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
  }, za.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
  }, za.prototype.fromJSON = function(t) {
    return Ea.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
  }, Fa.prototype = Object.create(Ea.prototype), Fa.prototype.constructor = Fa, Fa.prototype.isLineCurve = !0, Fa.prototype.getPoint = function(t, e) {
    var i = e || new J;
    return 1 === t ? (i.x = this.v2.x, i.y = this.v2.y) : (i.x = (this.v2.x - this.v1.x) * t + this.v1.x, i.y = (this.v2.y - this.v1.y) * t + this.v1.y), i
  }, Fa.prototype.getPointAt = function(t, e) {
    return this.getPoint(t, e)
  }, Fa.prototype.getTangent = function() {
    return this.v2.clone().sub(this.v1).normalize()
  }, Fa.prototype.copy = function(t) {
    return Ea.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Fa.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Fa.prototype.fromJSON = function(t) {
    return Ea.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, Ga.prototype = Object.create(Ea.prototype), Ga.prototype.constructor = Ga, Ga.prototype.isLineCurve3 = !0, Ga.prototype.getPoint = function(t, e) {
    var i = e || new at;
    return 1 === t ? (i.x = this.v2.x, i.y = this.v2.y, i.z = this.v2.z) : (i.x = (this.v2.x - this.v1.x) * t + this.v1.x, i.y = (this.v2.y - this.v1.y) * t + this.v1.y, i.z = (this.v2.z - this.v1.z) * t + this.v1.z), i
  }, Ga.prototype.getPointAt = function(t, e) {
    return this.getPoint(t, e)
  }, Ga.prototype.copy = function(t) {
    return Ea.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Ga.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Ga.prototype.fromJSON = function(t) {
    return Ea.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, Va.prototype = Object.create(Ea.prototype), Va.prototype.constructor = Va, Va.prototype.isQuadraticBezierCurve = !0, Va.prototype.getPoint = function(t, e) {
    var i = e || new J,
      n = this.v0,
      r = this.v1,
      a = this.v2;
    return i.set(Da(t, n.x, r.x, a.x), Da(t, n.y, r.y, a.y)), i
  }, Va.prototype.copy = function(t) {
    return Ea.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Va.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Va.prototype.fromJSON = function(t) {
    return Ea.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, ka.prototype = Object.create(Ea.prototype), ka.prototype.constructor = ka, ka.prototype.isQuadraticBezierCurve3 = !0, ka.prototype.getPoint = function(t, e) {
    var i = e || new at,
      n = this.v0,
      r = this.v1,
      a = this.v2;
    return i.set(Da(t, n.x, r.x, a.x), Da(t, n.y, r.y, a.y), Da(t, n.z, r.z, a.z)), i
  }, ka.prototype.copy = function(t) {
    return Ea.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, ka.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, ka.prototype.fromJSON = function(t) {
    return Ea.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, Ha.prototype = Object.create(Ea.prototype), Ha.prototype.constructor = Ha, Ha.prototype.isSplineCurve = !0, Ha.prototype.getPoint = function(t, e) {
    var i = e || new J,
      n = this.points,
      r = (n.length - 1) * t,
      a = Math.floor(r),
      o = r - a,
      s = n[0 === a ? a : a - 1],
      h = n[a],
      c = n[a > n.length - 2 ? n.length - 1 : a + 1],
      l = n[a > n.length - 3 ? n.length - 1 : a + 2];
    return i.set(Oa(o, s.x, h.x, c.x, l.x), Oa(o, s.y, h.y, c.y, l.y)), i
  }, Ha.prototype.copy = function(t) {
    Ea.prototype.copy.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; e < i; e++) {
      var n = t.points[e];
      this.points.push(n.clone())
    }
    return this
  }, Ha.prototype.toJSON = function() {
    var t = Ea.prototype.toJSON.call(this);
    t.points = [];
    for (var e = 0, i = this.points.length; e < i; e++) {
      var n = this.points[e];
      t.points.push(n.toArray())
    }
    return t
  }, Ha.prototype.fromJSON = function(t) {
    Ea.prototype.fromJSON.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; e < i; e++) {
      var n = t.points[e];
      this.points.push((new J).fromArray(n))
    }
    return this
  };
  var ja = Object.freeze({
    __proto__: null,
    ArcCurve: Aa,
    CatmullRomCurve3: Na,
    CubicBezierCurve: Ba,
    CubicBezierCurve3: za,
    EllipseCurve: Ta,
    LineCurve: Fa,
    LineCurve3: Ga,
    QuadraticBezierCurve: Va,
    QuadraticBezierCurve3: ka,
    SplineCurve: Ha
  });

  function Wa() {
    Ea.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
  }

  function Xa(t) {
    Wa.call(this), this.type = "Path", this.currentPoint = new J, t && this.setFromPoints(t)
  }

  function qa(t) {
    Xa.call(this, t), this.uuid = Y.generateUUID(), this.type = "Shape", this.holes = []
  }

  function Ya(t, e) {
    Kt.call(this), this.type = "Light", this.color = new Ct(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
  }

  function Ja(t) {
    this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new J(512, 512), this.map = null, this.matrix = new nt
  }

  function Za() {
    Kt.call(this), this.type = "Camera", this.matrixWorldInverse = new nt, this.projectionMatrix = new nt, this.projectionMatrixInverse = new nt
  }

  function Ka(t, e, i, n) {
    Za.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
  }

  function Qa() {
    Ja.call(this, new Ka(50, 1, .5, 500))
  }

  function $a(t, e, i, n, r, a) {
    Ya.call(this, t, e), this.type = "SpotLight", this.position.copy(Kt.DefaultUp), this.updateMatrix(), this.target = new Kt, Object.defineProperty(this, "power", {
      get: function() {
        return this.intensity * Math.PI
      },
      set: function(t) {
        this.intensity = t / Math.PI
      }
    }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Qa
  }

  function to(t, e, i, n) {
    Ya.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
      get: function() {
        return 4 * this.intensity * Math.PI
      },
      set: function(t) {
        this.intensity = t / (4 * Math.PI)
      }
    }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Ja(new Ka(90, 1, .5, 500))
  }

  function eo(t, e, i, n, r, a) {
    Za.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
  }

  function io() {
    Ja.call(this, new eo(-5, 5, 5, -5, .5, 500))
  }

  function no(t, e) {
    Ya.call(this, t, e), this.type = "DirectionalLight", this.position.copy(Kt.DefaultUp), this.updateMatrix(), this.target = new Kt, this.shadow = new io
  }

  function ro(t, e) {
    Ya.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
  }
  Wa.prototype = Object.assign(Object.create(Ea.prototype), {
    constructor: Wa,
    add: function(t) {
      this.curves.push(t)
    },
    closePath: function() {
      var t = this.curves[0].getPoint(0),
        e = this.curves[this.curves.length - 1].getPoint(1);
      t.equals(e) || this.curves.push(new Fa(e, t))
    },
    getPoint: function(t) {
      for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
        if (i[n] >= e) {
          var r = i[n] - e,
            a = this.curves[n],
            o = a.getLength(),
            s = 0 === o ? 0 : 1 - r / o;
          return a.getPointAt(s)
        }
        n++
      }
      return null
    },
    getLength: function() {
      var t = this.getCurveLengths();
      return t[t.length - 1]
    },
    updateArcLengths: function() {
      this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    },
    getCurveLengths: function() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
      return this.cacheLengths = t, t
    },
    getSpacedPoints: function(t) {
      void 0 === t && (t = 40);
      for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
      return this.autoClose && e.push(e[0]), e
    },
    getPoints: function(t) {
      t = t || 12;
      for (var e, i = [], n = [], r = 0, a = this.curves; r < a.length; r++) {
        var o = a[r],
          s = o && o.isEllipseCurve ? 2 * t : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? t * o.points.length : t;
        n.length = 0, n = o.getPoints(s, n);
        for (var h = 0; h < n.length; h++) {
          var c = n[h];
          e && e.equals(c) || (i.push(c), e = c)
        }
      }
      return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
    },
    copy: function(t) {
      Ea.prototype.copy.call(this, t), this.curves = [];
      for (var e = 0, i = t.curves.length; e < i; e++) {
        var n = t.curves[e];
        this.curves.push(n.clone())
      }
      return this.autoClose = t.autoClose, this
    },
    toJSON: function() {
      var t = Ea.prototype.toJSON.call(this);
      t.autoClose = this.autoClose, t.curves = [];
      for (var e = 0, i = this.curves.length; e < i; e++) {
        var n = this.curves[e];
        t.curves.push(n.toJSON())
      }
      return t
    },
    fromJSON: function(t) {
      Ea.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
      for (var e = 0, i = t.curves.length; e < i; e++) {
        var n = t.curves[e];
        this.curves.push((new ja[n.type]).fromJSON(n))
      }
      return this
    }
  }), Xa.prototype = Object.assign(Object.create(Wa.prototype), {
    constructor: Xa,
    setFromPoints: function(t) {
      this.moveTo(t[0].x, t[0].y);
      for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y)
    },
    moveTo: function(t, e) {
      this.currentPoint.set(t, e)
    },
    lineTo: function(t, e) {
      var i = new Fa(this.currentPoint.clone(), new J(t, e));
      this.curves.push(i), this.currentPoint.set(t, e)
    },
    quadraticCurveTo: function(t, e, i, n) {
      var r = new Va(this.currentPoint.clone(), new J(t, e), new J(i, n));
      this.curves.push(r), this.currentPoint.set(i, n)
    },
    bezierCurveTo: function(t, e, i, n, r, a) {
      var o = new Ba(this.currentPoint.clone(), new J(t, e), new J(i, n), new J(r, a));
      this.curves.push(o), this.currentPoint.set(r, a)
    },
    splineThru: function(t) {
      var e = new Ha([this.currentPoint.clone()].concat(t));
      this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
    },
    arc: function(t, e, i, n, r, a) {
      var o = this.currentPoint.x,
        s = this.currentPoint.y;
      this.absarc(t + o, e + s, i, n, r, a)
    },
    absarc: function(t, e, i, n, r, a) {
      this.absellipse(t, e, i, i, n, r, a)
    },
    ellipse: function(t, e, i, n, r, a, o, s) {
      var h = this.currentPoint.x,
        c = this.currentPoint.y;
      this.absellipse(t + h, e + c, i, n, r, a, o, s)
    },
    absellipse: function(t, e, i, n, r, a, o, s) {
      var h = new Ta(t, e, i, n, r, a, o, s);
      if (this.curves.length > 0) {
        var c = h.getPoint(0);
        c.equals(this.currentPoint) || this.lineTo(c.x, c.y)
      }
      this.curves.push(h);
      var l = h.getPoint(1);
      this.currentPoint.copy(l)
    },
    copy: function(t) {
      return Wa.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
    },
    toJSON: function() {
      var t = Wa.prototype.toJSON.call(this);
      return t.currentPoint = this.currentPoint.toArray(), t
    },
    fromJSON: function(t) {
      return Wa.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
    }
  }), qa.prototype = Object.assign(Object.create(Xa.prototype), {
    constructor: qa,
    getPointsHoles: function(t) {
      for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
      return e
    },
    extractPoints: function(t) {
      return {
        shape: this.getPoints(t),
        holes: this.getPointsHoles(t)
      }
    },
    copy: function(t) {
      Xa.prototype.copy.call(this, t), this.holes = [];
      for (var e = 0, i = t.holes.length; e < i; e++) {
        var n = t.holes[e];
        this.holes.push(n.clone())
      }
      return this
    },
    toJSON: function() {
      var t = Xa.prototype.toJSON.call(this);
      t.uuid = this.uuid, t.holes = [];
      for (var e = 0, i = this.holes.length; e < i; e++) {
        var n = this.holes[e];
        t.holes.push(n.toJSON())
      }
      return t
    },
    fromJSON: function(t) {
      Xa.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
      for (var e = 0, i = t.holes.length; e < i; e++) {
        var n = t.holes[e];
        this.holes.push((new Xa).fromJSON(n))
      }
      return this
    }
  }), Ya.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Ya,
    isLight: !0,
    copy: function(t) {
      return Kt.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
    },
    toJSON: function(t) {
      var e = Kt.prototype.toJSON.call(this, t);
      return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
    }
  }), Object.assign(Ja.prototype, {
    copy: function(t) {
      return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    toJSON: function() {
      var t = {};
      return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
    }
  }), Za.prototype = Object.assign(Object.create(Kt.prototype), {
    constructor: Za,
    isCamera: !0,
    copy: function(t, e) {
      return Kt.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
    },
    getWorldDirection: function(t) {
      void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new at), this.updateMatrixWorld(!0);
      var e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize()
    },
    updateMatrixWorld: function(t) {
      Kt.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    }
  }), Ka.prototype = Object.assign(Object.create(Za.prototype), {
    constructor: Ka,
    isPerspectiveCamera: !0,
    copy: function(t, e) {
      return Za.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
    },
    setFocalLength: function(t) {
      var e = .5 * this.getFilmHeight() / t;
      this.fov = 2 * Y.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
    },
    getFocalLength: function() {
      var t = Math.tan(.5 * Y.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / t
    },
    getEffectiveFOV: function() {
      return 2 * Y.RAD2DEG * Math.atan(Math.tan(.5 * Y.DEG2RAD * this.fov) / this.zoom)
    },
    getFilmWidth: function() {
      return this.filmGauge * Math.min(this.aspect, 1)
    },
    getFilmHeight: function() {
      return this.filmGauge / Math.max(this.aspect, 1)
    },
    setViewOffset: function(t, e, i, n, r, a) {
      this.aspect = t / e, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
      var t = this.near,
        e = t * Math.tan(.5 * Y.DEG2RAD * this.fov) / this.zoom,
        i = 2 * e,
        n = this.aspect * i,
        r = -.5 * n,
        a = this.view;
      if (null !== this.view && this.view.enabled) {
        var o = a.fullWidth,
          s = a.fullHeight;
        r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
      }
      var h = this.filmOffset;
      0 !== h && (r += t * h / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
    },
    toJSON: function(t) {
      var e = Kt.prototype.toJSON.call(this, t);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
    }
  }), Qa.prototype = Object.assign(Object.create(Ja.prototype), {
    constructor: Qa,
    isSpotLightShadow: !0,
    update: function(t) {
      var e = this.camera,
        i = 2 * Y.RAD2DEG * t.angle,
        n = this.mapSize.width / this.mapSize.height,
        r = t.distance || e.far;
      i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix())
    }
  }), $a.prototype = Object.assign(Object.create(Ya.prototype), {
    constructor: $a,
    isSpotLight: !0,
    copy: function(t) {
      return Ya.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
  }), to.prototype = Object.assign(Object.create(Ya.prototype), {
    constructor: to,
    isPointLight: !0,
    copy: function(t) {
      return Ya.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
    }
  }), eo.prototype = Object.assign(Object.create(Za.prototype), {
    constructor: eo,
    isOrthographicCamera: !0,
    copy: function(t, e) {
      return Za.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
    },
    setViewOffset: function(t, e, i, n, r, a) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
      var t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        i = (this.right + this.left) / 2,
        n = (this.top + this.bottom) / 2,
        r = i - t,
        a = i + t,
        o = n + e,
        s = n - e;
      if (null !== this.view && this.view.enabled) {
        var h = this.zoom / (this.view.width / this.view.fullWidth),
          c = this.zoom / (this.view.height / this.view.fullHeight),
          l = (this.right - this.left) / this.view.width,
          u = (this.top - this.bottom) / this.view.height;
        a = (r += l * (this.view.offsetX / h)) + l * (this.view.width / h), s = (o -= u * (this.view.offsetY / c)) - u * (this.view.height / c)
      }
      this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
    },
    toJSON: function(t) {
      var e = Kt.prototype.toJSON.call(this, t);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
    }
  }), io.prototype = Object.assign(Object.create(Ja.prototype), {
    constructor: io
  }), no.prototype = Object.assign(Object.create(Ya.prototype), {
    constructor: no,
    isDirectionalLight: !0,
    copy: function(t) {
      return Ya.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
  }), ro.prototype = Object.assign(Object.create(Ya.prototype), {
    constructor: ro,
    isAmbientLight: !0
  });
  var ao = {
    arraySlice: function(t, e, i) {
      return ao.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
    },
    convertArray: function(t, e, i) {
      return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
    },
    isTypedArray: function(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView)
    },
    getKeyframeOrder: function(t) {
      for (var e = t.length, i = new Array(e), n = 0; n !== e; ++n) i[n] = n;
      return i.sort((function(e, i) {
        return t[e] - t[i]
      })), i
    },
    sortedArray: function(t, e, i) {
      for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
        for (var s = i[a] * e, h = 0; h !== e; ++h) r[o++] = t[s + h];
      return r
    },
    flattenJSON: function(t, e, i, n) {
      for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
      if (void 0 !== a) {
        var o = a[n];
        if (void 0 !== o)
          if (Array.isArray(o))
            do {
              void 0 !== (o = a[n]) && (e.push(a.time), i.push.apply(i, o)), a = t[r++]
            } while (void 0 !== a);
          else if (void 0 !== o.toArray)
          do {
            void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(i, i.length)), a = t[r++]
          } while (void 0 !== a);
        else
          do {
            void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)), a = t[r++]
          } while (void 0 !== a)
      }
    }
  };

  function oo(t, e, i, n) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
  }

  function so(t, e, i, n) {
    oo.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
  }

  function ho(t, e, i, n) {
    oo.call(this, t, e, i, n)
  }

  function co(t, e, i, n) {
    oo.call(this, t, e, i, n)
  }

  function lo(t, e, i, n) {
    if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = ao.convertArray(e, this.TimeBufferType), this.values = ao.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
  }

  function uo(t, e, i) {
    lo.call(this, t, e, i)
  }

  function po(t, e, i, n) {
    lo.call(this, t, e, i, n)
  }

  function fo(t, e, i, n) {
    lo.call(this, t, e, i, n)
  }

  function mo(t, e, i, n) {
    oo.call(this, t, e, i, n)
  }

  function vo(t, e, i, n) {
    lo.call(this, t, e, i, n)
  }

  function go(t, e, i, n) {
    lo.call(this, t, e, i, n)
  }

  function yo(t, e, i, n) {
    lo.call(this, t, e, i, n)
  }

  function xo(t, e, i) {
    this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = Y.generateUUID(), this.duration < 0 && this.resetDuration()
  }

  function _o(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var e = function(t) {
      switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return fo;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return yo;
        case "color":
          return po;
        case "quaternion":
          return vo;
        case "bool":
        case "boolean":
          return uo;
        case "string":
          return go
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
    }(t.type);
    if (void 0 === t.times) {
      var i = [],
        n = [];
      ao.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
    }
    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
  }

  function bo(t) {
    this.manager = void 0 !== t ? t : ga, this.textures = {}
  }

  function Mo(t) {
    this.manager = void 0 !== t ? t : ga
  }
  Object.assign(oo.prototype, {
    evaluate: function(t) {
      var e = this.parameterPositions,
        i = this._cachedIndex,
        n = e[i],
        r = e[i - 1];
      t: {
        e: {
          var a;i: {
            n: if (!(t < n)) {
              for (var o = i + 2;;) {
                if (void 0 === n) {
                  if (t < r) break n;
                  return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
                }
                if (i === o) break;
                if (r = n, t < (n = e[++i])) break e
              }
              a = e.length;
              break i
            }if (t >= r) break t;
            var s = e[1];
            for (t < s && (i = 2, r = s), o = i - 2;;) {
              if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
              if (i === o) break;
              if (n = r, t >= (r = e[--i - 1])) break e
            }
            a = i,
            i = 0
          }
          for (; i < a;) {
            var h = i + a >>> 1;
            t < e[h] ? a = h : i = h + 1
          }
          if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0,
          this.beforeStart_(0, t, n);
          if (void 0 === n) return i = e.length,
          this._cachedIndex = i,
          this.afterEnd_(i - 1, r, t)
        }
        this._cachedIndex = i,
        this.intervalChanged_(i, r, n)
      }
      return this.interpolate_(i, r, t, n)
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function() {
      return this.settings || this.DefaultSettings_
    },
    copySampleValue_: function(t) {
      for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) e[a] = i[r + a];
      return e
    },
    interpolate_: function() {
      throw new Error("call to abstract method")
    },
    intervalChanged_: function() {}
  }), Object.assign(oo.prototype, {
    beforeStart_: oo.prototype.copySampleValue_,
    afterEnd_: oo.prototype.copySampleValue_
  }), so.prototype = Object.assign(Object.create(oo.prototype), {
    constructor: so,
    DefaultSettings_: {
      endingStart: H,
      endingEnd: H
    },
    intervalChanged_: function(t, e, i) {
      var n = this.parameterPositions,
        r = t - 2,
        a = t + 1,
        o = n[r],
        s = n[a];
      if (void 0 === o) switch (this.getSettings_().endingStart) {
        case j:
          r = t, o = 2 * e - i;
          break;
        case W:
          o = e + n[r = n.length - 2] - n[r + 1];
          break;
        default:
          r = t, o = i
      }
      if (void 0 === s) switch (this.getSettings_().endingEnd) {
        case j:
          a = t, s = 2 * i - e;
          break;
        case W:
          a = 1, s = i + n[1] - n[0];
          break;
        default:
          a = t - 1, s = e
      }
      var h = .5 * (i - e),
        c = this.valueSize;
      this._weightPrev = h / (e - o), this._weightNext = h / (s - i), this._offsetPrev = r * c, this._offsetNext = a * c
    },
    interpolate_: function(t, e, i, n) {
      for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, h = s - o, c = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - e) / (n - e), f = d * d, m = f * d, v = -u * m + 2 * u * f - u * d, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, _ = 0; _ !== o; ++_) r[_] = v * a[c + _] + g * a[h + _] + y * a[s + _] + x * a[l + _];
      return r
    }
  }), ho.prototype = Object.assign(Object.create(oo.prototype), {
    constructor: ho,
    interpolate_: function(t, e, i, n) {
      for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, h = s - o, c = (i - e) / (n - e), l = 1 - c, u = 0; u !== o; ++u) r[u] = a[h + u] * l + a[s + u] * c;
      return r
    }
  }), co.prototype = Object.assign(Object.create(oo.prototype), {
    constructor: co,
    interpolate_: function(t) {
      return this.copySampleValue_(t - 1)
    }
  }), Object.assign(lo, {
    toJSON: function(t) {
      var e, i = t.constructor;
      if (void 0 !== i.toJSON) e = i.toJSON(t);
      else {
        e = {
          name: t.name,
          times: ao.convertArray(t.times, Array),
          values: ao.convertArray(t.values, Array)
        };
        var n = t.getInterpolation();
        n !== t.DefaultInterpolation && (e.interpolation = n)
      }
      return e.type = t.ValueTypeName, e
    }
  }), Object.assign(lo.prototype, {
    constructor: lo,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: V,
    InterpolantFactoryMethodDiscrete: function(t) {
      return new co(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodLinear: function(t) {
      return new ho(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodSmooth: function(t) {
      return new so(this.times, this.values, this.getValueSize(), t)
    },
    setInterpolation: function(t) {
      var e;
      switch (t) {
        case G:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case V:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case k:
          e = this.InterpolantFactoryMethodSmooth
      }
      if (void 0 === e) {
        var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t === this.DefaultInterpolation) throw new Error(i);
          this.setInterpolation(this.DefaultInterpolation)
        }
        return console.warn("THREE.KeyframeTrack:", i), this
      }
      return this.createInterpolant = e, this
    },
    getInterpolation: function() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return G;
        case this.InterpolantFactoryMethodLinear:
          return V;
        case this.InterpolantFactoryMethodSmooth:
          return k
      }
    },
    getValueSize: function() {
      return this.values.length / this.times.length
    },
    shift: function(t) {
      if (0 !== t)
        for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
      return this
    },
    scale: function(t) {
      if (1 !== t)
        for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
      return this
    },
    trim: function(t, e) {
      for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
      for (; - 1 !== a && i[a] > e;) --a;
      if (++a, 0 !== r || a !== n) {
        r >= a && (r = (a = Math.max(a, 1)) - 1);
        var o = this.getValueSize();
        this.times = ao.arraySlice(i, r, a), this.values = ao.arraySlice(this.values, r * o, a * o)
      }
      return this
    },
    validate: function() {
      var t = !0,
        e = this.getValueSize();
      e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
      var i = this.times,
        n = this.values,
        r = i.length;
      0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
      for (var a = null, o = 0; o !== r; o++) {
        var s = i[o];
        if ("number" == typeof s && isNaN(s)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1;
          break
        }
        if (null !== a && a > s) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1;
          break
        }
        a = s
      }
      if (void 0 !== n && ao.isTypedArray(n)) {
        o = 0;
        for (var h = n.length; o !== h; ++o) {
          var c = n[o];
          if (isNaN(c)) {
            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), t = !1;
            break
          }
        }
      }
      return t
    },
    optimize: function() {
      for (var t = this.times, e = this.values, i = this.getValueSize(), n = this.getInterpolation() === k, r = 1, a = t.length - 1, o = 1; o < a; ++o) {
        var s = !1,
          h = t[o];
        if (h !== t[o + 1] && (1 !== o || h !== h[0]))
          if (n) s = !0;
          else
            for (var c = o * i, l = c - i, u = c + i, p = 0; p !== i; ++p) {
              var d = e[c + p];
              if (d !== e[l + p] || d !== e[u + p]) {
                s = !0;
                break
              }
            }
        if (s) {
          if (o !== r) {
            t[r] = t[o];
            var f = o * i,
              m = r * i;
            for (p = 0; p !== i; ++p) e[m + p] = e[f + p]
          }++r
        }
      }
      if (a > 0) {
        for (t[r] = t[a], f = a * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[f + p];
        ++r
      }
      return r !== t.length && (this.times = ao.arraySlice(t, 0, r), this.values = ao.arraySlice(e, 0, r * i)), this
    }
  }), uo.prototype = Object.assign(Object.create(lo.prototype), {
    constructor: uo,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: G,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  }), po.prototype = Object.assign(Object.create(lo.prototype), {
    constructor: po,
    ValueTypeName: "color"
  }), fo.prototype = Object.assign(Object.create(lo.prototype), {
    constructor: fo,
    ValueTypeName: "number"
  }), mo.prototype = Object.assign(Object.create(oo.prototype), {
    constructor: mo,
    interpolate_: function(t, e, i, n) {
      for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, h = (i - e) / (n - e), c = s + o; s !== c; s += 4) rt.slerpFlat(r, 0, a, s - o, a, s, h);
      return r
    }
  }), vo.prototype = Object.assign(Object.create(lo.prototype), {
    constructor: vo,
    ValueTypeName: "quaternion",
    DefaultInterpolation: V,
    InterpolantFactoryMethodLinear: function(t) {
      return new mo(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodSmooth: void 0
  }), go.prototype = Object.assign(Object.create(lo.prototype), {
    constructor: go,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: G,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  }), yo.prototype = Object.assign(Object.create(lo.prototype), {
    constructor: yo,
    ValueTypeName: "vector"
  }), Object.assign(xo, {
    parse: function(t) {
      for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e.push(_o(i[r]).scale(n));
      return new xo(t.name, t.duration, e)
    },
    toJSON: function(t) {
      for (var e = [], i = t.tracks, n = {
          name: t.name,
          duration: t.duration,
          tracks: e,
          uuid: t.uuid
        }, r = 0, a = i.length; r !== a; ++r) e.push(lo.toJSON(i[r]));
      return n
    },
    CreateFromMorphTargetSequence: function(t, e, i, n) {
      for (var r = e.length, a = [], o = 0; o < r; o++) {
        var s = [],
          h = [];
        s.push((o + r - 1) % r, o, (o + 1) % r), h.push(0, 1, 0);
        var c = ao.getKeyframeOrder(s);
        s = ao.sortedArray(s, 1, c), h = ao.sortedArray(h, 1, c), n || 0 !== s[0] || (s.push(r), h.push(h[0])), a.push(new fo(".morphTargetInfluences[" + e[o].name + "]", s, h).scale(1 / i))
      }
      return new xo(t, -1, a)
    },
    findByName: function(t, e) {
      var i = t;
      if (!Array.isArray(t)) {
        var n = t;
        i = n.geometry && n.geometry.animations || n.animations
      }
      for (var r = 0; r < i.length; r++)
        if (i[r].name === e) return i[r];
      return null
    },
    CreateClipsFromMorphTargetSequences: function(t, e, i) {
      for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
        var s = t[a],
          h = s.name.match(r);
        if (h && h.length > 1) {
          var c = n[u = h[1]];
          c || (n[u] = c = []), c.push(s)
        }
      }
      var l = [];
      for (var u in n) l.push(xo.CreateFromMorphTargetSequence(u, n[u], e, i));
      return l
    },
    parseAnimation: function(t, e) {
      if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
      for (var i = function(t, e, i, n, r) {
          if (0 !== i.length) {
            var a = [],
              o = [];
            ao.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o))
          }
        }, n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], h = 0; h < s.length; h++) {
        var c = s[h].keys;
        if (c && 0 !== c.length)
          if (c[0].morphTargets) {
            for (var l = {}, u = 0; u < c.length; u++)
              if (c[u].morphTargets)
                for (var p = 0; p < c[u].morphTargets.length; p++) l[c[u].morphTargets[p]] = -1;
            for (var d in l) {
              var f = [],
                m = [];
              for (p = 0; p !== c[u].morphTargets.length; ++p) {
                var v = c[u];
                f.push(v.time), m.push(v.morphTarget === d ? 1 : 0)
              }
              n.push(new fo(".morphTargetInfluence[" + d + "]", f, m))
            }
            a = l.length * (o || 1)
          } else {
            var g = ".bones[" + e[h].name + "]";
            i(yo, g + ".position", c, "pos", n), i(vo, g + ".quaternion", c, "rot", n), i(yo, g + ".scale", c, "scl", n)
          }
      }
      return 0 === n.length ? null : new xo(r, a, n)
    }
  }), Object.assign(xo.prototype, {
    resetDuration: function() {
      for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
        var n = this.tracks[e];
        t = Math.max(t, n.times[n.times.length - 1])
      }
      return this.duration = t, this
    },
    trim: function() {
      for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
      return this
    },
    validate: function() {
      for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
      return t
    },
    optimize: function() {
      for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
      return this
    }
  }), Object.assign(bo.prototype, {
    load: function(t, e, i, n) {
      var r = this;
      new xa(r.manager).load(t, (function(t) {
        e(r.parse(JSON.parse(t)))
      }), i, n)
    },
    setTextures: function(t) {
      this.textures = t
    },
    parse: function(t) {
      var e = this.textures;

      function i(t) {
        return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
      }
      var n = new fa[t.type];
      if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearCoat && (n.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (n.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.combine && (n.combine = t.combine), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.uniforms)
        for (var r in t.uniforms) {
          var a = t.uniforms[r];
          switch (n.uniforms[r] = {}, a.type) {
            case "t":
              n.uniforms[r].value = i(a.value);
              break;
            case "c":
              n.uniforms[r].value = (new Ct).setHex(a.value);
              break;
            case "v2":
              n.uniforms[r].value = (new J).fromArray(a.value);
              break;
            case "v3":
              n.uniforms[r].value = (new at).fromArray(a.value);
              break;
            case "v4":
              n.uniforms[r].value = (new dt).fromArray(a.value);
              break;
            case "m4":
              n.uniforms[r].value = (new nt).fromArray(a.value);
              break;
            default:
              n.uniforms[r].value = a.value
          }
        }
      if (void 0 !== t.defines && (n.defines = t.defines), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = i(t.map)), void 0 !== t.alphaMap && (n.alphaMap = i(t.alphaMap), n.transparent = !0), void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
        var o = t.normalScale;
        !1 === Array.isArray(o) && (o = [o, o]), n.normalScale = (new J).fromArray(o)
      }
      return void 0 !== t.displacementMap && (n.displacementMap = i(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)), void 0 !== t.envMap && (n.envMap = i(t.envMap)), void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)), n
    }
  }), Object.assign(Mo.prototype, {
    load: function(t, e, i, n) {
      var r = this;
      new xa(r.manager).load(t, (function(t) {
        e(r.parse(JSON.parse(t)))
      }), i, n)
    },
    parse: function(t) {
      var e = new me,
        i = t.data.index;
      if (void 0 !== i) {
        var n = new Ao[i.type](i.array);
        e.setIndex(new ie(n, 1))
      }
      var r = t.data.attributes;
      for (var a in r) {
        var o = r[a];
        n = new Ao[o.type](o.array), e.addAttribute(a, new ie(n, o.itemSize, o.normalized))
      }
      var s = t.data.groups || t.data.drawcalls || t.data.offsets;
      if (void 0 !== s)
        for (var h = 0, c = s.length; h !== c; ++h) {
          var l = s[h];
          e.addGroup(l.start, l.count, l.materialIndex)
        }
      var u = t.data.boundingSphere;
      if (void 0 !== u) {
        var p = new at;
        void 0 !== u.center && p.fromArray(u.center), e.boundingSphere = new yt(p, u.radius)
      }
      return e
    }
  });
  var wo, So, Eo, To, Ao = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };

  function Lo() {}
  Lo.Handlers = {
    handlers: [],
    add: function(t, e) {
      this.handlers.push(t, e)
    },
    get: function(t) {
      for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
        var r = e[i],
          a = e[i + 1];
        if (r.test(t)) return a
      }
      return null
    }
  }, Object.assign(Lo.prototype, {
    crossOrigin: "anonymous",
    onLoadStart: function() {},
    onLoadProgress: function() {},
    onLoadComplete: function() {},
    initMaterials: function(t, e, i) {
      for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i);
      return n
    },
    createMaterial: (wo = {
      NoBlending: 0,
      NormalBlending: 1,
      AdditiveBlending: 2,
      SubtractiveBlending: 3,
      MultiplyBlending: 4,
      CustomBlending: 5
    }, So = new Ct, Eo = new Sa, To = new bo, function(t, e, i) {
      var n = {};

      function r(t, r, a, o, s) {
        var h, c = e + t,
          l = Lo.Handlers.get(c);
        null !== l ? h = l.load(c) : (Eo.setCrossOrigin(i), h = Eo.load(c)), void 0 !== r && (h.repeat.fromArray(r), 1 !== r[0] && (h.wrapS = d), 1 !== r[1] && (h.wrapT = d)), void 0 !== a && h.offset.fromArray(a), void 0 !== o && ("repeat" === o[0] && (h.wrapS = d), "mirror" === o[0] && (h.wrapS = m), "repeat" === o[1] && (h.wrapT = d), "mirror" === o[1] && (h.wrapT = m)), void 0 !== s && (h.anisotropy = s);
        var u = Y.generateUUID();
        return n[u] = h, u
      }
      var a = {
        uuid: Y.generateUUID(),
        type: "MeshLambertMaterial"
      };
      for (var o in t) {
        var s = t[o];
        switch (o) {
          case "DbgColor":
          case "DbgIndex":
          case "opticalDensity":
          case "illumination":
          case "mapDiffuseRepeat":
          case "mapDiffuseOffset":
          case "mapDiffuseWrap":
          case "mapDiffuseAnisotropy":
          case "mapEmissiveRepeat":
          case "mapEmissiveOffset":
          case "mapEmissiveWrap":
          case "mapEmissiveAnisotropy":
          case "mapLightRepeat":
          case "mapLightOffset":
          case "mapLightWrap":
          case "mapLightAnisotropy":
          case "mapAORepeat":
          case "mapAOOffset":
          case "mapAOWrap":
          case "mapAOAnisotropy":
          case "mapBumpRepeat":
          case "mapBumpOffset":
          case "mapBumpWrap":
          case "mapBumpAnisotropy":
          case "mapNormalRepeat":
          case "mapNormalOffset":
          case "mapNormalWrap":
          case "mapNormalAnisotropy":
          case "mapSpecularRepeat":
          case "mapSpecularOffset":
          case "mapSpecularWrap":
          case "mapSpecularAnisotropy":
          case "mapMetalnessRepeat":
          case "mapMetalnessOffset":
          case "mapMetalnessWrap":
          case "mapMetalnessAnisotropy":
          case "mapRoughnessRepeat":
          case "mapRoughnessOffset":
          case "mapRoughnessWrap":
          case "mapRoughnessAnisotropy":
          case "mapAlphaRepeat":
          case "mapAlphaOffset":
          case "mapAlphaWrap":
          case "mapAlphaAnisotropy":
            break;
          case "DbgName":
            a.name = s;
            break;
          case "blending":
            a.blending = wo[s];
            break;
          case "colorAmbient":
          case "mapAmbient":
            console.warn("THREE.Loader.createMaterial:", o, "is no longer supported.");
            break;
          case "colorDiffuse":
            a.color = So.fromArray(s).getHex();
            break;
          case "colorSpecular":
            a.specular = So.fromArray(s).getHex();
            break;
          case "colorEmissive":
            a.emissive = So.fromArray(s).getHex();
            break;
          case "specularCoef":
            a.shininess = s;
            break;
          case "shading":
            "basic" === s.toLowerCase() && (a.type = "MeshBasicMaterial"), "phong" === s.toLowerCase() && (a.type = "MeshPhongMaterial"), "standard" === s.toLowerCase() && (a.type = "MeshStandardMaterial");
            break;
          case "mapDiffuse":
            a.map = r(s, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy);
            break;
          case "mapEmissive":
            a.emissiveMap = r(s, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy);
            break;
          case "mapLight":
            a.lightMap = r(s, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy);
            break;
          case "mapAO":
            a.aoMap = r(s, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy);
            break;
          case "mapBump":
            a.bumpMap = r(s, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy);
            break;
          case "mapBumpScale":
            a.bumpScale = s;
            break;
          case "mapNormal":
            a.normalMap = r(s, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy);
            break;
          case "mapNormalFactor":
            a.normalScale = s;
            break;
          case "mapSpecular":
            a.specularMap = r(s, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy);
            break;
          case "mapMetalness":
            a.metalnessMap = r(s, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy);
            break;
          case "mapRoughness":
            a.roughnessMap = r(s, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy);
            break;
          case "mapAlpha":
            a.alphaMap = r(s, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy);
            break;
          case "flipSided":
            a.side = 1;
            break;
          case "doubleSided":
            a.side = 2;
            break;
          case "transparency":
            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), a.opacity = s;
            break;
          case "depthTest":
          case "depthWrite":
          case "colorWrite":
          case "opacity":
          case "reflectivity":
          case "transparent":
          case "visible":
          case "wireframe":
            a[o] = s;
            break;
          case "vertexColors":
            !0 === s && (a.vertexColors = 2), "face" === s && (a.vertexColors = 1);
            break;
          default:
            console.error("THREE.Loader.createMaterial: Unsupported", o, s)
        }
      }
      return "MeshBasicMaterial" === a.type && delete a.emissive, "MeshPhongMaterial" !== a.type && delete a.specular, a.opacity < 1 && (a.transparent = !0), To.setTextures(n), To.parse(a)
    })
  });
  var Co = {
    decodeText: function(t) {
      if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
      for (var e = "", i = 0, n = t.length; i < n; i++) e += String.fromCharCode(t[i]);
      return decodeURIComponent(escape(e))
    },
    extractUrlBase: function(t) {
      var e = t.lastIndexOf("/");
      return -1 === e ? "./" : t.substr(0, e + 1)
    }
  };

  function Po(t) {
    "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : ga, this.withCredentials = !1
  }

  function Ro(t) {
    this.manager = void 0 !== t ? t : ga, this.texturePath = ""
  }
  Object.assign(Po.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      var r = this,
        a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : Co.extractUrlBase(t),
        o = new xa(this.manager);
      o.setWithCredentials(this.withCredentials), o.load(t, (function(i) {
        var n = JSON.parse(i),
          o = n.metadata;
        if (void 0 !== o) {
          var s = o.type;
          if (void 0 !== s && "object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.")
        }
        var h = r.parse(n, a);
        e(h.geometry, h.materials)
      }), i, n)
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setTexturePath: function(t) {
      return this.texturePath = t, this
    },
    parse: function(t, e) {
      void 0 !== t.data && (t = t.data), void 0 !== t.scale ? t.scale = 1 / t.scale : t.scale = 1;
      var i = new ee;
      return function(t, e) {
          function i(t, e) {
            return t & 1 << e
          }
          var n, r, a, o, s, h, c, l, u, p, d, f, m, v, g, y, x, _, b, M, w, S, E, T, A, L = t.faces,
            C = t.vertices,
            P = t.normals,
            R = t.colors,
            I = t.scale,
            N = 0;
          if (void 0 !== t.uvs) {
            for (n = 0; n < t.uvs.length; n++) t.uvs[n].length && N++;
            for (n = 0; n < N; n++) e.faceVertexUvs[n] = []
          }
          for (o = 0, s = C.length; o < s;)(_ = new at).x = C[o++] * I, _.y = C[o++] * I, _.z = C[o++] * I, e.vertices.push(_);
          for (o = 0, s = L.length; o < s;)
            if (d = i(p = L[o++], 0), f = i(p, 1), m = i(p, 3), v = i(p, 4), g = i(p, 5), y = i(p, 6), x = i(p, 7), d) {
              if ((M = new Ot).a = L[o], M.b = L[o + 1], M.c = L[o + 3], (w = new Ot).a = L[o + 1], w.b = L[o + 2], w.c = L[o + 3], o += 4, f && (u = L[o++], M.materialIndex = u, w.materialIndex = u), a = e.faces.length, m)
                for (n = 0; n < N; n++)
                  for (T = t.uvs[n], e.faceVertexUvs[n][a] = [], e.faceVertexUvs[n][a + 1] = [], r = 0; r < 4; r++) A = new J(T[2 * (l = L[o++])], T[2 * l + 1]), 2 !== r && e.faceVertexUvs[n][a].push(A), 0 !== r && e.faceVertexUvs[n][a + 1].push(A);
              if (v && (c = 3 * L[o++], M.normal.set(P[c++], P[c++], P[c]), w.normal.copy(M.normal)), g)
                for (n = 0; n < 4; n++) c = 3 * L[o++], E = new at(P[c++], P[c++], P[c]), 2 !== n && M.vertexNormals.push(E), 0 !== n && w.vertexNormals.push(E);
              if (y && (S = R[h = L[o++]], M.color.setHex(S), w.color.setHex(S)), x)
                for (n = 0; n < 4; n++) S = R[h = L[o++]], 2 !== n && M.vertexColors.push(new Ct(S)), 0 !== n && w.vertexColors.push(new Ct(S));
              e.faces.push(M), e.faces.push(w)
            } else {
              if ((b = new Ot).a = L[o++], b.b = L[o++], b.c = L[o++], f && (u = L[o++], b.materialIndex = u), a = e.faces.length, m)
                for (n = 0; n < N; n++)
                  for (T = t.uvs[n], e.faceVertexUvs[n][a] = [], r = 0; r < 3; r++) A = new J(T[2 * (l = L[o++])], T[2 * l + 1]), e.faceVertexUvs[n][a].push(A);
              if (v && (c = 3 * L[o++], b.normal.set(P[c++], P[c++], P[c])), g)
                for (n = 0; n < 3; n++) c = 3 * L[o++], E = new at(P[c++], P[c++], P[c]), b.vertexNormals.push(E);
              if (y && (h = L[o++], b.color.setHex(R[h])), x)
                for (n = 0; n < 3; n++) h = L[o++], b.vertexColors.push(new Ct(R[h]));
              e.faces.push(b)
            }
        }(t, i),
        function(t, e) {
          var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
          if (t.skinWeights)
            for (var n = 0, r = t.skinWeights.length; n < r; n += i) {
              var a = t.skinWeights[n],
                o = i > 1 ? t.skinWeights[n + 1] : 0,
                s = i > 2 ? t.skinWeights[n + 2] : 0,
                h = i > 3 ? t.skinWeights[n + 3] : 0;
              e.skinWeights.push(new dt(a, o, s, h))
            }
          if (t.skinIndices)
            for (n = 0, r = t.skinIndices.length; n < r; n += i) {
              var c = t.skinIndices[n],
                l = i > 1 ? t.skinIndices[n + 1] : 0,
                u = i > 2 ? t.skinIndices[n + 2] : 0,
                p = i > 3 ? t.skinIndices[n + 3] : 0;
              e.skinIndices.push(new dt(c, l, u, p))
            }
          e.bones = t.bones, e.bones && e.bones.length > 0 && (e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console.warn("When skinning, number of vertices (" + e.vertices.length + "), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e.skinWeights.length + ") should match.")
        }(t, i),
        function(t, e) {
          var i = t.scale;
          if (void 0 !== t.morphTargets)
            for (var n = 0, r = t.morphTargets.length; n < r; n++) {
              e.morphTargets[n] = {}, e.morphTargets[n].name = t.morphTargets[n].name, e.morphTargets[n].vertices = [];
              for (var a = e.morphTargets[n].vertices, o = t.morphTargets[n].vertices, s = 0, h = o.length; s < h; s += 3) {
                var c = new at;
                c.x = o[s] * i, c.y = o[s + 1] * i, c.z = o[s + 2] * i, a.push(c)
              }
            }
          if (void 0 !== t.morphColors && t.morphColors.length > 0) {
            console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
            var l = e.faces,
              u = t.morphColors[0].colors;
            for (n = 0, r = l.length; n < r; n++) l[n].color.fromArray(u, 3 * n)
          }
        }(t, i),
        function(t, e) {
          var i = [],
            n = [];
          void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations));
          for (var r = 0; r < n.length; r++) {
            var a = xo.parseAnimation(n[r], e.bones);
            a && i.push(a)
          }
          if (e.morphTargets) {
            var o = xo.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
            i = i.concat(o)
          }
          i.length > 0 && (e.animations = i)
        }(t, i), i.computeFaceNormals(), i.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length ? {
          geometry: i
        } : {
          geometry: i,
          materials: Lo.prototype.initMaterials(t.materials, e, this.crossOrigin)
        }
    }
  }), Object.assign(Ro.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
      var r = this;
      new xa(r.manager).load(t, (function(i) {
        var a = null;
        try {
          a = JSON.parse(i)
        } catch (e) {
          return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
        }
        var o = a.metadata;
        void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? r.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.")
      }), i, n)
    },
    setTexturePath: function(t) {
      return this.texturePath = t, this
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    parse: function(t, e) {
      var i = this.parseShape(t.shapes),
        n = this.parseGeometries(t.geometries, i),
        r = this.parseImages(t.images, (function() {
          void 0 !== e && e(s)
        })),
        a = this.parseTextures(t.textures, r),
        o = this.parseMaterials(t.materials, a),
        s = this.parseObject(t.object, n, o);
      return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
    },
    parseShape: function(t) {
      var e = {};
      if (void 0 !== t)
        for (var i = 0, n = t.length; i < n; i++) {
          var r = (new qa).fromJSON(t[i]);
          e[r.uuid] = r
        }
      return e
    },
    parseGeometries: function(t, e) {
      var i = {};
      if (void 0 !== t)
        for (var n = new Po, r = new Mo, a = 0, o = t.length; a < o; a++) {
          var s, h = t[a];
          switch (h.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
              s = new na[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
              break;
            case "BoxGeometry":
            case "BoxBufferGeometry":
            case "CubeGeometry":
              s = new na[h.type](h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
              break;
            case "CircleGeometry":
            case "CircleBufferGeometry":
              s = new na[h.type](h.radius, h.segments, h.thetaStart, h.thetaLength);
              break;
            case "CylinderGeometry":
            case "CylinderBufferGeometry":
              s = new na[h.type](h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
              break;
            case "ConeGeometry":
            case "ConeBufferGeometry":
              s = new na[h.type](h.radius, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
              break;
            case "SphereGeometry":
            case "SphereBufferGeometry":
              s = new na[h.type](h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
              break;
            case "DodecahedronGeometry":
            case "DodecahedronBufferGeometry":
            case "IcosahedronGeometry":
            case "IcosahedronBufferGeometry":
            case "OctahedronGeometry":
            case "OctahedronBufferGeometry":
            case "TetrahedronGeometry":
            case "TetrahedronBufferGeometry":
              s = new na[h.type](h.radius, h.detail);
              break;
            case "RingGeometry":
            case "RingBufferGeometry":
              s = new na[h.type](h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
              break;
            case "TorusGeometry":
            case "TorusBufferGeometry":
              s = new na[h.type](h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
              break;
            case "TorusKnotGeometry":
            case "TorusKnotBufferGeometry":
              s = new na[h.type](h.radius, h.tube, h.tubularSegments, h.radialSegments, h.p, h.q);
              break;
            case "LatheGeometry":
            case "LatheBufferGeometry":
              s = new na[h.type](h.points, h.segments, h.phiStart, h.phiLength);
              break;
            case "PolyhedronGeometry":
            case "PolyhedronBufferGeometry":
              s = new na[h.type](h.vertices, h.indices, h.radius, h.details);
              break;
            case "ShapeGeometry":
            case "ShapeBufferGeometry":
              for (var c = [], l = 0, u = h.shapes.length; l < u; l++) {
                var p = e[h.shapes[l]];
                c.push(p)
              }
              s = new na[h.type](c, h.curveSegments);
              break;
            case "ExtrudeGeometry":
            case "ExtrudeBufferGeometry":
              for (c = [], l = 0, u = h.shapes.length; l < u; l++) p = e[h.shapes[l]], c.push(p);
              var d = h.options.extrudePath;
              void 0 !== d && (h.options.extrudePath = (new ja[d.type]).fromJSON(d)), s = new na[h.type](c, h.options);
              break;
            case "BufferGeometry":
              s = r.parse(h);
              break;
            case "Geometry":
              s = n.parse(h, this.texturePath).geometry;
              break;
            default:
              console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
              continue
          }
          s.uuid = h.uuid, void 0 !== h.name && (s.name = h.name), !0 === s.isBufferGeometry && void 0 !== h.userData && (s.userData = h.userData), i[h.uuid] = s
        }
      return i
    },
    parseMaterials: function(t, e) {
      var i = {};
      if (void 0 !== t) {
        var n = new bo;
        n.setTextures(e);
        for (var r = 0, a = t.length; r < a; r++) {
          var o = t[r];
          if ("MultiMaterial" === o.type) {
            for (var s = [], h = 0; h < o.materials.length; h++) s.push(n.parse(o.materials[h]));
            i[o.uuid] = s
          } else i[o.uuid] = n.parse(o)
        }
      }
      return i
    },
    parseAnimations: function(t) {
      for (var e = [], i = 0; i < t.length; i++) {
        var n = t[i],
          r = xo.parse(n);
        void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r)
      }
      return e
    },
    parseImages: function(t, e) {
      var i = this,
        n = {};

      function r(t) {
        return i.manager.itemStart(t), a.load(t, (function() {
          i.manager.itemEnd(t)
        }), void 0, (function() {
          i.manager.itemEnd(t), i.manager.itemError(t)
        }))
      }
      if (void 0 !== t && t.length > 0) {
        var a = new Ma(new va(e));
        a.setCrossOrigin(this.crossOrigin);
        for (var o = 0, s = t.length; o < s; o++) {
          var h = t[o],
            c = h.url;
          if (Array.isArray(c)) {
            n[h.uuid] = [];
            for (var l = 0, u = c.length; l < u; l++) {
              var p = c[l],
                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : i.texturePath + p;
              n[h.uuid].push(r(d))
            }
          } else d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : i.texturePath + h.url, n[h.uuid] = r(d)
        }
      }
      return n
    },
    parseTextures: function(t, e) {
      function i(t, e) {
        return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
      }
      var n = {};
      if (void 0 !== t)
        for (var r = 0, a = t.length; r < a; r++) {
          var o, s = t[r];
          void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(e[s.image]) ? new Ze(e[s.image]) : new pt(e[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = i(s.mapping, Io)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = i(s.wrap[0], No), o.wrapT = i(s.wrap[1], No)), void 0 !== s.format && (o.format = s.format), void 0 !== s.minFilter && (o.minFilter = i(s.minFilter, Oo)), void 0 !== s.magFilter && (o.magFilter = i(s.magFilter, Oo)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), n[s.uuid] = o
        }
      return n
    },
    parseObject: function(t, e, i) {
      var n;

      function r(t) {
        return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
      }

      function a(t) {
        if (void 0 !== t) {
          if (Array.isArray(t)) {
            for (var e = [], n = 0, r = t.length; n < r; n++) {
              var a = t[n];
              void 0 === i[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(i[a])
            }
            return e
          }
          return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t]
        }
      }
      switch (t.type) {
        case "Scene":
          n = new Tn, void 0 !== t.background && Number.isInteger(t.background) && (n.background = new Ct(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? n.fog = new En(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (n.fog = new Sn(t.fog.color, t.fog.density)));
          break;
        case "PerspectiveCamera":
          n = new Ka(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (n.focus = t.focus), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.filmGauge && (n.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (n.filmOffset = t.filmOffset), void 0 !== t.view && (n.view = Object.assign({}, t.view));
          break;
        case "OrthographicCamera":
          n = new eo(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.view && (n.view = Object.assign({}, t.view));
          break;
        case "AmbientLight":
          n = new ro(t.color, t.intensity);
          break;
        case "DirectionalLight":
          n = new no(t.color, t.intensity);
          break;
        case "PointLight":
          n = new to(t.color, t.intensity, t.distance, t.decay);
          break;
        case "SpotLight":
          n = new $a(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
          break;
        case "SkinnedMesh":
          console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
        case "Mesh":
          var o = r(t.geometry),
            s = a(t.material);
          n = o.bones && o.bones.length > 0 ? new On(o, s) : new ze(o, s);
          break;
        case "LOD":
          n = new Rn;
          break;
        case "Line":
          n = new Un(r(t.geometry), a(t.material), t.mode);
          break;
        case "LineLoop":
          n = new zn(r(t.geometry), a(t.material));
          break;
        case "LineSegments":
          n = new Bn(r(t.geometry), a(t.material));
          break;
        case "PointCloud":
        case "Points":
          n = new Gn(r(t.geometry), a(t.material));
          break;
        case "Sprite":
          n = new Pn(a(t.material));
          break;
        case "Group":
          n = new Vn;
          break;
        default:
          n = new Kt
      }
      if (n.uuid = t.uuid, void 0 !== t.name && (n.name = t.name), void 0 !== t.matrix ? (n.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (n.matrixAutoUpdate = t.matrixAutoUpdate), n.matrixAutoUpdate && n.matrix.decompose(n.position, n.quaternion, n.scale)) : (void 0 !== t.position && n.position.fromArray(t.position), void 0 !== t.rotation && n.rotation.fromArray(t.rotation), void 0 !== t.quaternion && n.quaternion.fromArray(t.quaternion), void 0 !== t.scale && n.scale.fromArray(t.scale)), void 0 !== t.castShadow && (n.castShadow = t.castShadow), void 0 !== t.receiveShadow && (n.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (n.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (n.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && n.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (n.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.frustumCulled && (n.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (n.renderOrder = t.renderOrder), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.layers && (n.layers.mask = t.layers), void 0 !== t.children)
        for (var h = t.children, c = 0; c < h.length; c++) n.add(this.parseObject(h[c], e, i));
      if ("LOD" === t.type)
        for (var l = t.levels, u = 0; u < l.length; u++) {
          var p = l[u],
            d = n.getObjectByProperty("uuid", p.object);
          void 0 !== d && n.addLevel(d, p.distance)
        }
      return n
    }
  });
  var Io = {
      UVMapping: s,
      CubeReflectionMapping: h,
      CubeRefractionMapping: c,
      EquirectangularReflectionMapping: 303,
      EquirectangularRefractionMapping: l,
      SphericalReflectionMapping: 305,
      CubeUVReflectionMapping: u,
      CubeUVRefractionMapping: p
    },
    No = {
      RepeatWrapping: d,
      ClampToEdgeWrapping: f,
      MirroredRepeatWrapping: m
    },
    Oo = {
      NearestFilter: v,
      NearestMipMapNearestFilter: g,
      NearestMipMapLinearFilter: y,
      LinearFilter: x,
      LinearMipMapNearestFilter: _,
      LinearMipMapLinearFilter: b
    };

  function Do() {
    this.type = "ShapePath", this.color = new Ct, this.subPaths = [], this.currentPath = null
  }

  function Uo(t) {
    this.type = "Font", this.data = t
  }

  function Bo(t, e, i, n, r) {
    var a = r.glyphs[t] || r.glyphs["?"];
    if (a) {
      var o, s, h, c, l, u, p, d, f = new Do;
      if (a.o)
        for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length; v < g;) switch (m[v++]) {
          case "m":
            o = m[v++] * e + i, s = m[v++] * e + n, f.moveTo(o, s);
            break;
          case "l":
            o = m[v++] * e + i, s = m[v++] * e + n, f.lineTo(o, s);
            break;
          case "q":
            h = m[v++] * e + i, c = m[v++] * e + n, l = m[v++] * e + i, u = m[v++] * e + n, f.quadraticCurveTo(l, u, h, c);
            break;
          case "b":
            h = m[v++] * e + i, c = m[v++] * e + n, l = m[v++] * e + i, u = m[v++] * e + n, p = m[v++] * e + i, d = m[v++] * e + n, f.bezierCurveTo(l, u, p, d, h, c)
        }
      return {
        offsetX: a.ha * e,
        path: f
      }
    }
  }

  function zo(t) {
    this.manager = void 0 !== t ? t : ga
  }

  function Fo(t, e, i) {
    Kt.call(this), this.type = "CubeCamera";
    var n = 90,
      r = new Ka(n, 1, t, e);
    r.up.set(0, -1, 0), r.lookAt(new at(1, 0, 0)), this.add(r);
    var a = new Ka(n, 1, t, e);
    a.up.set(0, -1, 0), a.lookAt(new at(-1, 0, 0)), this.add(a);
    var o = new Ka(n, 1, t, e);
    o.up.set(0, 0, 1), o.lookAt(new at(0, 1, 0)), this.add(o);
    var s = new Ka(n, 1, t, e);
    s.up.set(0, 0, -1), s.lookAt(new at(0, -1, 0)), this.add(s);
    var h = new Ka(n, 1, t, e);
    h.up.set(0, -1, 0), h.lookAt(new at(0, 0, 1)), this.add(h);
    var c = new Ka(n, 1, t, e);
    c.up.set(0, -1, 0), c.lookAt(new at(0, 0, -1)), this.add(c);
    var l = {
      format: L,
      magFilter: x,
      minFilter: x
    };
    this.renderTarget = new mt(i, i, l), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
      null === this.parent && this.updateMatrixWorld();
      var i = this.renderTarget,
        n = i.texture.generateMipmaps;
      i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, r, i), i.activeCubeFace = 1, t.render(e, a, i), i.activeCubeFace = 2, t.render(e, o, i), i.activeCubeFace = 3, t.render(e, s, i), i.activeCubeFace = 4, t.render(e, h, i), i.texture.generateMipmaps = n, i.activeCubeFace = 5, t.render(e, c, i), t.setRenderTarget(null)
    }, this.clear = function(t, e, i, n) {
      for (var r = this.renderTarget, a = 0; a < 6; a++) r.activeCubeFace = a, t.setRenderTarget(r), t.clear(e, i, n);
      t.setRenderTarget(null)
    }
  }

  function Go(t) {
    Ka.call(this), this.cameras = t || []
  }

  function Vo(t, e, i) {
    this.binding = t, this.valueSize = i;
    var n, r = Float64Array;
    switch (e) {
      case "quaternion":
        n = this._slerp;
        break;
      case "string":
      case "bool":
        r = Array, n = this._select;
        break;
      default:
        n = this._lerp
    }
    this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
  }
  Object.assign(Do.prototype, {
    moveTo: function(t, e) {
      this.currentPath = new Xa, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
    },
    lineTo: function(t, e) {
      this.currentPath.lineTo(t, e)
    },
    quadraticCurveTo: function(t, e, i, n) {
      this.currentPath.quadraticCurveTo(t, e, i, n)
    },
    bezierCurveTo: function(t, e, i, n, r, a) {
      this.currentPath.bezierCurveTo(t, e, i, n, r, a)
    },
    splineThru: function(t) {
      this.currentPath.splineThru(t)
    },
    toShapes: function(t, e) {
      function i(t) {
        for (var e = [], i = 0, n = t.length; i < n; i++) {
          var r = t[i],
            a = new qa;
          a.curves = r.curves, e.push(a)
        }
        return e
      }

      function n(t, e) {
        for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
          var o = e[r],
            s = e[a],
            h = s.x - o.x,
            c = s.y - o.y;
          if (Math.abs(c) > Number.EPSILON) {
            if (c < 0 && (o = e[a], h = -h, s = e[r], c = -c), t.y < o.y || t.y > s.y) continue;
            if (t.y === o.y) {
              if (t.x === o.x) return !0
            } else {
              var l = c * (t.x - o.x) - h * (t.y - o.y);
              if (0 === l) return !0;
              if (l < 0) continue;
              n = !n
            }
          } else {
            if (t.y !== o.y) continue;
            if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
          }
        }
        return n
      }
      var r = Ir.isClockWise,
        a = this.subPaths;
      if (0 === a.length) return [];
      if (!0 === e) return i(a);
      var o, s, h, c = [];
      if (1 === a.length) return s = a[0], (h = new qa).curves = s.curves, c.push(h), c;
      var l = !r(a[0].getPoints());
      l = t ? !l : l;
      var u, p, d = [],
        f = [],
        m = [],
        v = 0;
      f[v] = void 0, m[v] = [];
      for (var g = 0, y = a.length; g < y; g++) o = r(u = (s = a[g]).getPoints()), (o = t ? !o : o) ? (!l && f[v] && v++, f[v] = {
        s: new qa,
        p: u
      }, f[v].s.curves = s.curves, l && v++, m[v] = []) : m[v].push({
        h: s,
        p: u[0]
      });
      if (!f[0]) return i(a);
      if (f.length > 1) {
        for (var x = !1, _ = [], b = 0, M = f.length; b < M; b++) d[b] = [];
        for (b = 0, M = f.length; b < M; b++)
          for (var w = m[b], S = 0; S < w.length; S++) {
            for (var E = w[S], T = !0, A = 0; A < f.length; A++) n(E.p, f[A].p) && (b !== A && _.push({
              froms: b,
              tos: A,
              hole: S
            }), T ? (T = !1, d[A].push(E)) : x = !0);
            T && d[b].push(E)
          }
        _.length > 0 && (x || (m = d))
      }
      g = 0;
      for (var L = f.length; g < L; g++) {
        h = f[g].s, c.push(h);
        for (var C = 0, P = (p = m[g]).length; C < P; C++) h.holes.push(p[C].h)
      }
      return c
    }
  }), Object.assign(Uo.prototype, {
    isFont: !0,
    generateShapes: function(t, e) {
      void 0 === e && (e = 100);
      for (var i = [], n = function(t, e, i) {
          for (var n = Array.from ? Array.from(t) : String(t).split(""), r = e / i.resolution, a = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r, o = [], s = 0, h = 0, c = 0; c < n.length; c++) {
            var l = n[c];
            if ("\n" === l) s = 0, h -= a;
            else {
              var u = Bo(l, r, s, h, i);
              s += u.offsetX, o.push(u.path)
            }
          }
          return o
        }(t, e, this.data), r = 0, a = n.length; r < a; r++) Array.prototype.push.apply(i, n[r].toShapes());
      return i
    }
  }), Object.assign(zo.prototype, {
    load: function(t, e, i, n) {
      var r = this,
        a = new xa(this.manager);
      a.setPath(this.path), a.load(t, (function(t) {
        var i;
        try {
          i = JSON.parse(t)
        } catch (e) {
          console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(t.substring(65, t.length - 2))
        }
        var n = r.parse(i);
        e && e(n)
      }), i, n)
    },
    parse: function(t) {
      return new Uo(t)
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Fo.prototype = Object.create(Kt.prototype), Fo.prototype.constructor = Fo, Go.prototype = Object.assign(Object.create(Ka.prototype), {
    constructor: Go,
    isArrayCamera: !0
  }), Object.assign(Vo.prototype, {
    accumulate: function(t, e) {
      var i = this.buffer,
        n = this.valueSize,
        r = t * n + n,
        a = this.cumulativeWeight;
      if (0 === a) {
        for (var o = 0; o !== n; ++o) i[r + o] = i[o];
        a = e
      } else {
        var s = e / (a += e);
        this._mixBufferRegion(i, r, 0, s, n)
      }
      this.cumulativeWeight = a
    },
    apply: function(t) {
      var e = this.valueSize,
        i = this.buffer,
        n = t * e + e,
        r = this.cumulativeWeight,
        a = this.binding;
      if (this.cumulativeWeight = 0, r < 1) {
        var o = 3 * e;
        this._mixBufferRegion(i, n, o, 1 - r, e)
      }
      for (var s = e, h = e + e; s !== h; ++s)
        if (i[s] !== i[s + e]) {
          a.setValue(i, n);
          break
        }
    },
    saveOriginalState: function() {
      var t = this.binding,
        e = this.buffer,
        i = this.valueSize,
        n = 3 * i;
      t.getValue(e, n);
      for (var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
      this.cumulativeWeight = 0
    },
    restoreOriginalState: function() {
      var t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t)
    },
    _select: function(t, e, i, n, r) {
      if (n >= .5)
        for (var a = 0; a !== r; ++a) t[e + a] = t[i + a]
    },
    _slerp: function(t, e, i, n) {
      rt.slerpFlat(t, e, t, e, t, i, n)
    },
    _lerp: function(t, e, i, n, r) {
      for (var a = 1 - n, o = 0; o !== r; ++o) {
        var s = e + o;
        t[s] = t[s] * a + t[i + o] * n
      }
    }
  });
  var ko, Ho, jo, Wo, Xo, qo, Yo, Jo, Zo, Ko, Qo, $o, ts, es, is;

  function ns(t, e, i) {
    var n = i || rs.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, n)
  }

  function rs(t, e, i) {
    this.path = e, this.parsedPath = i || rs.parseTrackName(e), this.node = rs.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
  }

  function as() {
    this.uuid = Y.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    var t = {};
    this._indicesByUUID = t;
    for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    var n = this;
    this.stats = {
      objects: {
        get total() {
          return n._objects.length
        },
        get inUse() {
          return this.total - n.nCachedObjects_
        }
      },
      get bindingsPerObject() {
        return n._bindings.length
      }
    }
  }

  function os(t, e, i) {
    this._mixer = t, this._clip = e, this._localRoot = i || null;
    for (var n = e.tracks, r = n.length, a = new Array(r), o = {
        endingStart: H,
        endingEnd: H
      }, s = 0; s !== r; ++s) {
      var h = n[s].createInterpolant(null);
      a[s] = h, h.settings = o
    }
    this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
  }

  function ss(t) {
    this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
  }

  function hs(t) {
    "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
  }

  function cs() {
    me.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
  }

  function ls(t, e, i) {
    An.call(this, t, e), this.meshPerAttribute = i || 1
  }

  function us(t, e, i, n) {
    "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), ie.call(this, t, e, i), this.meshPerAttribute = n || 1
  }

  function ps(t, e, i, n) {
    this.ray = new De(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {
      Mesh: {},
      Line: {},
      LOD: {},
      Points: {
        threshold: 1
      },
      Sprite: {}
    }, Object.defineProperties(this.params, {
      PointCloud: {
        get: function() {
          return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
        }
      }
    })
  }

  function ds(t, e) {
    return t.distance - e.distance
  }

  function fs(t, e, i, n) {
    if (!1 !== t.visible && (t.raycast(e, i), !0 === n))
      for (var r = t.children, a = 0, o = r.length; a < o; a++) fs(r[a], e, i, !0)
  }

  function ms(t) {
    this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
  }

  function vs(t, e, i) {
    return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
  }

  function gs(t, e, i) {
    return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
  }

  function ys(t, e) {
    this.min = void 0 !== t ? t : new J(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new J(-1 / 0, -1 / 0)
  }

  function xs(t, e) {
    this.start = void 0 !== t ? t : new at, this.end = void 0 !== e ? e : new at
  }

  function _s(t) {
    Kt.call(this), this.material = t, this.render = function() {}
  }

  function bs(t, e, i, n) {
    this.object = t, this.size = void 0 !== e ? e : 1;
    var r = void 0 !== i ? i : 16711680,
      a = void 0 !== n ? n : 1,
      o = 0,
      s = this.object.geometry;
    s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
    var h = new me,
      c = new le(2 * o * 3, 3);
    h.addAttribute("position", c), Bn.call(this, h, new Dn({
      color: r,
      linewidth: a
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function Ms(t, e) {
    Kt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
    for (var i = new me, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
      var o = r / 32 * Math.PI * 2,
        s = a / 32 * Math.PI * 2;
      n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
    }
    i.addAttribute("position", new le(n, 3));
    var h = new Dn({
      fog: !1
    });
    this.cone = new Bn(i, h), this.add(this.cone), this.update()
  }

  function ws(t) {
    var e = [];
    t && t.isBone && e.push(t);
    for (var i = 0; i < t.children.length; i++) e.push.apply(e, ws(t.children[i]));
    return e
  }

  function Ss(t) {
    for (var e = ws(t), i = new me, n = [], r = [], a = new Ct(0, 0, 1), o = new Ct(0, 1, 0), s = 0; s < e.length; s++) {
      var h = e[s];
      h.parent && h.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
    }
    i.addAttribute("position", new le(n, 3)), i.addAttribute("color", new le(r, 3));
    var c = new Dn({
      vertexColors: 2,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    });
    Bn.call(this, i, c), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
  }

  function Es(t, e, i) {
    this.light = t, this.light.updateMatrixWorld(), this.color = i;
    var n = new kr(e, 4, 2),
      r = new Be({
        wireframe: !0,
        fog: !1
      });
    ze.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
  }

  function Ts(t, e, i, n) {
    t = t || 10, e = e || 10, i = new Ct(void 0 !== i ? i : 4473924), n = new Ct(void 0 !== n ? n : 8947848);
    for (var r = e / 2, a = t / e, o = t / 2, s = [], h = [], c = 0, l = 0, u = -o; c <= e; c++, u += a) {
      s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
      var p = c === r ? i : n;
      p.toArray(h, l), l += 3, p.toArray(h, l), l += 3, p.toArray(h, l), l += 3, p.toArray(h, l), l += 3
    }
    var d = new me;
    d.addAttribute("position", new le(s, 3)), d.addAttribute("color", new le(h, 3));
    var f = new Dn({
      vertexColors: 2
    });
    Bn.call(this, d, f)
  }

  function As(t, e, i, n, r, a) {
    t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new Ct(void 0 !== r ? r : 4473924), a = new Ct(void 0 !== a ? a : 8947848);
    var o, s, h, c, l, u, p, d = [],
      f = [];
    for (c = 0; c <= e; c++) h = c / e * (2 * Math.PI), o = Math.sin(h) * t, s = Math.cos(h) * t, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & c ? r : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
    for (c = 0; c <= i; c++)
      for (p = 1 & c ? r : a, u = t - t / i * c, l = 0; l < n; l++) h = l / n * (2 * Math.PI), o = Math.sin(h) * u, s = Math.cos(h) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b), h = (l + 1) / n * (2 * Math.PI), o = Math.sin(h) * u, s = Math.cos(h) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b);
    var m = new me;
    m.addAttribute("position", new le(d, 3)), m.addAttribute("color", new le(f, 3));
    var v = new Dn({
      vertexColors: 2
    });
    Bn.call(this, m, v)
  }

  function Ls(t, e, i, n) {
    this.object = t, this.size = void 0 !== e ? e : 1;
    var r = void 0 !== i ? i : 16776960,
      a = void 0 !== n ? n : 1,
      o = 0,
      s = this.object.geometry;
    s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    var h = new me,
      c = new le(2 * o * 3, 3);
    h.addAttribute("position", c), Bn.call(this, h, new Dn({
      color: r,
      linewidth: a
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function Cs(t, e, i) {
    Kt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
    var n = new me;
    n.addAttribute("position", new le([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
    var r = new Dn({
      fog: !1
    });
    this.lightPlane = new Un(n, r), this.add(this.lightPlane), (n = new me).addAttribute("position", new le([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Un(n, r), this.add(this.targetLine), this.update()
  }

  function Ps(t) {
    var e = new me,
      i = new Dn({
        color: 16777215,
        vertexColors: 1
      }),
      n = [],
      r = [],
      a = {},
      o = new Ct(16755200),
      s = new Ct(16711680),
      h = new Ct(43775),
      c = new Ct(16777215),
      l = new Ct(3355443);

    function u(t, e, i) {
      p(t, i), p(e, i)
    }

    function p(t, e) {
      n.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === a[t] && (a[t] = []), a[t].push(n.length / 3 - 1)
    }
    u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", h), u("u2", "u3", h), u("u3", "u1", h), u("c", "t", c), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), e.addAttribute("position", new le(n, 3)), e.addAttribute("color", new le(r, 3)), Bn.call(this, e, i), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
  }

  function Rs(t, e) {
    this.object = t, void 0 === e && (e = 16776960);
    var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      n = new Float32Array(24),
      r = new me;
    r.setIndex(new ie(i, 1)), r.addAttribute("position", new ie(n, 3)), Bn.call(this, r, new Dn({
      color: e
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function Is(t, e) {
    this.type = "Box3Helper", this.box = t;
    var i = void 0 !== e ? e : 16776960,
      n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      r = new me;
    r.setIndex(new ie(n, 1)), r.addAttribute("position", new le([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Bn.call(this, r, new Dn({
      color: i
    })), this.geometry.computeBoundingSphere()
  }

  function Ns(t, e, i) {
    this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
    var n = void 0 !== i ? i : 16776960,
      r = new me;
    r.addAttribute("position", new le([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Un.call(this, r, new Dn({
      color: n
    }));
    var a = new me;
    a.addAttribute("position", new le([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new ze(a, new Be({
      color: n,
      opacity: .2,
      transparent: !0,
      depthWrite: !1
    })))
  }

  function Os(t, e, i, n, r, a) {
    Kt.call(this), void 0 === n && (n = 16776960), void 0 === i && (i = 1), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === $o && (($o = new me).addAttribute("position", new le([0, 0, 0, 0, 1, 0], 3)), (ts = new Qr(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Un($o, new Dn({
      color: n
    })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new ze(ts, new Be({
      color: n
    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
  }

  function Ds(t) {
    var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
      i = new me;
    i.addAttribute("position", new le(e, 3)), i.addAttribute("color", new le([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
    var n = new Dn({
      vertexColors: 2
    });
    Bn.call(this, i, n)
  }
  Object.assign(ns.prototype, {
    getValue: function(t, e) {
      this.bind();
      var i = this._targetGroup.nCachedObjects_,
        n = this._bindings[i];
      void 0 !== n && n.getValue(t, e)
    },
    setValue: function(t, e) {
      for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
    },
    bind: function() {
      for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
    },
    unbind: function() {
      for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
    }
  }), Object.assign(rs, {
    Composite: ns,
    create: function(t, e, i) {
      return t && t.isAnimationObjectGroup ? new rs.Composite(t, e, i) : new rs(t, e, i)
    },
    sanitizeNodeName: (Zo = new RegExp("[\\[\\]\\.:\\/]", "g"), function(t) {
      return t.replace(/\s/g, "_").replace(Zo, "")
    }),
    parseTrackName: (ko = "[^\\[\\]\\.:\\/]", Ho = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", jo = /((?:WC+[\/:])*)/.source.replace("WC", ko), Wo = /(WCOD+)?/.source.replace("WCOD", Ho), Xo = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ko), qo = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ko), Yo = new RegExp("^" + jo + Wo + Xo + qo + "$"), Jo = ["material", "materials", "bones"], function(t) {
      var e = Yo.exec(t);
      if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      var i = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6]
        },
        n = i.nodeName && i.nodeName.lastIndexOf(".");
      if (void 0 !== n && -1 !== n) {
        var r = i.nodeName.substring(n + 1); - 1 !== Jo.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r)
      }
      if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
      return i
    }),
    findNode: function(t, e) {
      if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
      if (t.skeleton) {
        var i = t.skeleton.getBoneByName(e);
        if (void 0 !== i) return i
      }
      if (t.children) {
        var n = function t(i) {
          for (var n = 0; n < i.length; n++) {
            var r = i[n];
            if (r.name === e || r.uuid === e) return r;
            var a = t(r.children);
            if (a) return a
          }
          return null
        }(t.children);
        if (n) return n
      }
      return null
    }
  }), Object.assign(rs.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    },
    Versioning: {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function(t, e) {
      t[e] = this.node[this.propertyName]
    }, function(t, e) {
      for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
    }, function(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex]
    }, function(t, e) {
      this.resolvedProperty.toArray(t, e)
    }],
    SetterByBindingTypeAndVersioning: [
      [function(t, e) {
        this.targetObject[this.propertyName] = t[e]
      }, function(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
      }, function(t, e) {
        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
        this.targetObject.needsUpdate = !0
      }, function(t, e) {
        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e]
      }, function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        this.resolvedProperty.fromArray(t, e)
      }, function(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
      }]
    ],
    getValue: function(t, e) {
      this.bind(), this.getValue(t, e)
    },
    setValue: function(t, e) {
      this.bind(), this.setValue(t, e)
    },
    bind: function() {
      var t = this.node,
        e = this.parsedPath,
        i = e.objectName,
        n = e.propertyName,
        r = e.propertyIndex;
      if (t || (t = rs.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
        if (i) {
          var a = e.objectIndex;
          switch (i) {
            case "materials":
              if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              t = t.material.materials;
              break;
            case "bones":
              if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              t = t.skeleton.bones;
              for (var o = 0; o < t.length; o++)
                if (t[o].name === a) {
                  a = o;
                  break
                } break;
            default:
              if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              t = t[i]
          }
          if (void 0 !== a) {
            if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
            t = t[a]
          }
        }
        var s = t[n];
        if (void 0 !== s) {
          var h = this.Versioning.None;
          this.targetObject = t, void 0 !== t.needsUpdate ? h = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate);
          var c = this.BindingType.Direct;
          if (void 0 !== r) {
            if ("morphTargetInfluences" === n) {
              if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              if (t.geometry.isBufferGeometry) {
                if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                  if (t.geometry.morphAttributes.position[o].name === r) {
                    r = o;
                    break
                  }
              } else {
                if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                  if (t.geometry.morphTargets[o].name === r) {
                    r = o;
                    break
                  }
              }
            }
            c = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
          } else void 0 !== s.fromArray && void 0 !== s.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (c = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
          this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][h]
        } else {
          var l = e.nodeName;
          console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", t)
        }
      } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
    },
    unbind: function() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
  }), Object.assign(rs.prototype, {
    _getValue_unbound: rs.prototype.getValue,
    _setValue_unbound: rs.prototype.setValue
  }), Object.assign(as.prototype, {
    isAnimationObjectGroup: !0,
    add: function() {
      for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, h = void 0, c = 0, l = arguments.length; c !== l; ++c) {
        var u = arguments[c],
          p = u.uuid,
          d = n[p];
        if (void 0 === d) {
          d = e++, n[p] = d, t.push(u);
          for (var f = 0, m = s; f !== m; ++f) o[f].push(new rs(u, r[f], a[f]))
        } else if (d < i) {
          h = t[d];
          var v = --i,
            g = t[v];
          for (n[g.uuid] = d, t[d] = g, n[p] = v, t[v] = u, f = 0, m = s; f !== m; ++f) {
            var y = o[f],
              x = y[v],
              _ = y[d];
            y[d] = x, void 0 === _ && (_ = new rs(u, r[f], a[f])), y[v] = _
          }
        } else t[d] !== h && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
      }
      this.nCachedObjects_ = i
    },
    remove: function() {
      for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
        var s = arguments[a],
          h = s.uuid,
          c = i[h];
        if (void 0 !== c && c >= e) {
          var l = e++,
            u = t[l];
          i[u.uuid] = c, t[c] = u, i[h] = l, t[l] = s;
          for (var p = 0, d = r; p !== d; ++p) {
            var f = n[p],
              m = f[l],
              v = f[c];
            f[c] = m, f[l] = v
          }
        }
      }
      this.nCachedObjects_ = e
    },
    uncache: function() {
      for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
        var h = arguments[o].uuid,
          c = n[h];
        if (void 0 !== c)
          if (delete n[h], c < i) {
            var l = --i,
              u = t[l],
              p = t[g = --e];
            n[u.uuid] = c, t[c] = u, n[p.uuid] = l, t[l] = p, t.pop();
            for (var d = 0, f = a; d !== f; ++d) {
              var m = (y = r[d])[l],
                v = y[g];
              y[c] = m, y[l] = v, y.pop()
            }
          } else {
            var g;
            for (n[(p = t[g = --e]).uuid] = c, t[c] = p, t.pop(), d = 0, f = a; d !== f; ++d) {
              var y;
              (y = r[d])[c] = y[g], y.pop()
            }
          }
      }
      this.nCachedObjects_ = i
    },
    subscribe_: function(t, e) {
      var i = this._bindingsIndicesByPath,
        n = i[t],
        r = this._bindings;
      if (void 0 !== n) return r[n];
      var a = this._paths,
        o = this._parsedPaths,
        s = this._objects,
        h = s.length,
        c = this.nCachedObjects_,
        l = new Array(h);
      n = r.length, i[t] = n, a.push(t), o.push(e), r.push(l);
      for (var u = c, p = s.length; u !== p; ++u) {
        var d = s[u];
        l[u] = new rs(d, t, e)
      }
      return l
    },
    unsubscribe_: function(t) {
      var e = this._bindingsIndicesByPath,
        i = e[t];
      if (void 0 !== i) {
        var n = this._paths,
          r = this._parsedPaths,
          a = this._bindings,
          o = a.length - 1,
          s = a[o];
        e[t[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
      }
    }
  }), Object.assign(os.prototype, {
    play: function() {
      return this._mixer._activateAction(this), this
    },
    stop: function() {
      return this._mixer._deactivateAction(this), this.reset()
    },
    reset: function() {
      return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
    },
    isRunning: function() {
      return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    },
    isScheduled: function() {
      return this._mixer._isActiveAction(this)
    },
    startAt: function(t) {
      return this._startTime = t, this
    },
    setLoop: function(t, e) {
      return this.loop = t, this.repetitions = e, this
    },
    setEffectiveWeight: function(t) {
      return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
    },
    getEffectiveWeight: function() {
      return this._effectiveWeight
    },
    fadeIn: function(t) {
      return this._scheduleFading(t, 0, 1)
    },
    fadeOut: function(t) {
      return this._scheduleFading(t, 1, 0)
    },
    crossFadeFrom: function(t, e, i) {
      if (t.fadeOut(e), this.fadeIn(e), i) {
        var n = this._clip.duration,
          r = t._clip.duration,
          a = r / n,
          o = n / r;
        t.warp(1, a, e), this.warp(o, 1, e)
      }
      return this
    },
    crossFadeTo: function(t, e, i) {
      return t.crossFadeFrom(this, e, i)
    },
    stopFading: function() {
      var t = this._weightInterpolant;
      return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    },
    setEffectiveTimeScale: function(t) {
      return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
    },
    getEffectiveTimeScale: function() {
      return this._effectiveTimeScale
    },
    setDuration: function(t) {
      return this.timeScale = this._clip.duration / t, this.stopWarping()
    },
    syncWith: function(t) {
      return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
    },
    halt: function(t) {
      return this.warp(this._effectiveTimeScale, 0, t)
    },
    warp: function(t, e, i) {
      var n = this._mixer,
        r = n.time,
        a = this._timeScaleInterpolant,
        o = this.timeScale;
      null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
      var s = a.parameterPositions,
        h = a.sampleValues;
      return s[0] = r, s[1] = r + i, h[0] = t / o, h[1] = e / o, this
    },
    stopWarping: function() {
      var t = this._timeScaleInterpolant;
      return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    },
    getMixer: function() {
      return this._mixer
    },
    getClip: function() {
      return this._clip
    },
    getRoot: function() {
      return this._localRoot || this._mixer._root
    },
    _update: function(t, e, i, n) {
      if (this.enabled) {
        var r = this._startTime;
        if (null !== r) {
          var a = (t - r) * i;
          if (a < 0 || 0 === i) return;
          this._startTime = null, e = i * a
        }
        e *= this._updateTimeScale(t);
        var o = this._updateTime(e),
          s = this._updateWeight(t);
        if (s > 0)
          for (var h = this._interpolants, c = this._propertyBindings, l = 0, u = h.length; l !== u; ++l) h[l].evaluate(o), c[l].accumulate(n, s)
      } else this._updateWeight(t)
    },
    _updateWeight: function(t) {
      var e = 0;
      if (this.enabled) {
        e = this.weight;
        var i = this._weightInterpolant;
        if (null !== i) {
          var n = i.evaluate(t)[0];
          e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
        }
      }
      return this._effectiveWeight = e, e
    },
    _updateTimeScale: function(t) {
      var e = 0;
      if (!this.paused) {
        e = this.timeScale;
        var i = this._timeScaleInterpolant;
        null !== i && (e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e))
      }
      return this._effectiveTimeScale = e, e
    },
    _updateTime: function(t) {
      var e = this.time + t,
        i = this._clip.duration,
        n = this.loop,
        r = this._loopCount,
        a = 2202 === n;
      if (0 === t) return -1 === r || !a || 1 & ~r ? e : i - e;
      if (2200 === n) {
        -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
        t: {
          if (e >= i) e = i;
          else {
            if (!(e < 0)) break t;
            e = 0
          }
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t < 0 ? -1 : 1
          })
        }
      } else {
        if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= i || e < 0) {
          var o = Math.floor(e / i);
          e -= i * o, r += Math.abs(o);
          var s = this.repetitions - r;
          if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          });
          else {
            if (1 === s) {
              var h = t < 0;
              this._setEndings(h, !h, a)
            } else this._setEndings(!1, !1, a);
            this._loopCount = r, this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: o
            })
          }
        }
        if (a && !(1 & ~r)) return this.time = e, i - e
      }
      return this.time = e, e
    },
    _setEndings: function(t, e, i) {
      var n = this._interpolantSettings;
      i ? (n.endingStart = j, n.endingEnd = j) : (n.endingStart = t ? this.zeroSlopeAtStart ? j : H : W, n.endingEnd = e ? this.zeroSlopeAtEnd ? j : H : W)
    },
    _scheduleFading: function(t, e, i) {
      var n = this._mixer,
        r = n.time,
        a = this._weightInterpolant;
      null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
      var o = a.parameterPositions,
        s = a.sampleValues;
      return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this
    }
  }), ss.prototype = Object.assign(Object.create(e.prototype), {
    constructor: ss,
    _bindAction: function(t, e) {
      var i = t._localRoot || this._root,
        n = t._clip.tracks,
        r = n.length,
        a = t._propertyBindings,
        o = t._interpolants,
        s = i.uuid,
        h = this._bindingsByRootAndName,
        c = h[s];
      void 0 === c && (c = {}, h[s] = c);
      for (var l = 0; l !== r; ++l) {
        var u = n[l],
          p = u.name,
          d = c[p];
        if (void 0 !== d) a[l] = d;
        else {
          if (void 0 !== (d = a[l])) {
            null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
            continue
          }
          var f = e && e._propertyBindings[l].binding.parsedPath;
          ++(d = new Vo(rs.create(i, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[l] = d
        }
        o[l].resultBuffer = d.buffer
      }
    },
    _activateAction: function(t) {
      if (!this._isActiveAction(t)) {
        if (null === t._cacheIndex) {
          var e = (t._localRoot || this._root).uuid,
            i = t._clip.uuid,
            n = this._actionsByClip[i];
          this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
        }
        for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
          var s = r[a];
          0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
        }
        this._lendAction(t)
      }
    },
    _deactivateAction: function(t) {
      if (this._isActiveAction(t)) {
        for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
          var r = e[i];
          0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
        }
        this._takeBackAction(t)
      }
    },
    _initMemoryManager: function() {
      this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
      var t = this;
      this.stats = {
        actions: {
          get total() {
            return t._actions.length
          },
          get inUse() {
            return t._nActiveActions
          }
        },
        bindings: {
          get total() {
            return t._bindings.length
          },
          get inUse() {
            return t._nActiveBindings
          }
        },
        controlInterpolants: {
          get total() {
            return t._controlInterpolants.length
          },
          get inUse() {
            return t._nActiveControlInterpolants
          }
        }
      }
    },
    _isActiveAction: function(t) {
      var e = t._cacheIndex;
      return null !== e && e < this._nActiveActions
    },
    _addInactiveAction: function(t, e, i) {
      var n = this._actions,
        r = this._actionsByClip,
        a = r[e];
      if (void 0 === a) a = {
        knownActions: [t],
        actionByRoot: {}
      }, t._byClipCacheIndex = 0, r[e] = a;
      else {
        var o = a.knownActions;
        t._byClipCacheIndex = o.length, o.push(t)
      }
      t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
    },
    _removeInactiveAction: function(t) {
      var e = this._actions,
        i = e[e.length - 1],
        n = t._cacheIndex;
      i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
      var r = t._clip.uuid,
        a = this._actionsByClip,
        o = a[r],
        s = o.knownActions,
        h = s[s.length - 1],
        c = t._byClipCacheIndex;
      h._byClipCacheIndex = c, s[c] = h, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t)
    },
    _removeInactiveBindingsForAction: function(t) {
      for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
        var r = e[i];
        0 == --r.referenceCount && this._removeInactiveBinding(r)
      }
    },
    _lendAction: function(t) {
      var e = this._actions,
        i = t._cacheIndex,
        n = this._nActiveActions++,
        r = e[n];
      t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _takeBackAction: function(t) {
      var e = this._actions,
        i = t._cacheIndex,
        n = --this._nActiveActions,
        r = e[n];
      t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _addInactiveBinding: function(t, e, i) {
      var n = this._bindingsByRootAndName,
        r = n[e],
        a = this._bindings;
      void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = a.length, a.push(t)
    },
    _removeInactiveBinding: function(t) {
      var e = this._bindings,
        i = t.binding,
        n = i.rootNode.uuid,
        r = i.path,
        a = this._bindingsByRootAndName,
        o = a[n],
        s = e[e.length - 1],
        h = t._cacheIndex;
      s._cacheIndex = h, e[h] = s, e.pop(), delete o[r];
      t: {
        for (var c in o) break t;delete a[n]
      }
    },
    _lendBinding: function(t) {
      var e = this._bindings,
        i = t._cacheIndex,
        n = this._nActiveBindings++,
        r = e[n];
      t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _takeBackBinding: function(t) {
      var e = this._bindings,
        i = t._cacheIndex,
        n = --this._nActiveBindings,
        r = e[n];
      t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _lendControlInterpolant: function() {
      var t = this._controlInterpolants,
        e = this._nActiveControlInterpolants++,
        i = t[e];
      return void 0 === i && ((i = new ho(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = i), i
    },
    _takeBackControlInterpolant: function(t) {
      var e = this._controlInterpolants,
        i = t.__cacheIndex,
        n = --this._nActiveControlInterpolants,
        r = e[n];
      t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function(t, e) {
      var i = e || this._root,
        n = i.uuid,
        r = "string" == typeof t ? xo.findByName(i, t) : t,
        a = null !== r ? r.uuid : t,
        o = this._actionsByClip[a],
        s = null;
      if (void 0 !== o) {
        var h = o.actionByRoot[n];
        if (void 0 !== h) return h;
        s = o.knownActions[0], null === r && (r = s._clip)
      }
      if (null === r) return null;
      var c = new os(this, r, e);
      return this._bindAction(c, s), this._addInactiveAction(c, a, n), c
    },
    existingAction: function(t, e) {
      var i = e || this._root,
        n = i.uuid,
        r = "string" == typeof t ? xo.findByName(i, t) : t,
        a = r ? r.uuid : t,
        o = this._actionsByClip[a];
      return void 0 !== o && o.actionByRoot[n] || null
    },
    stopAllAction: function() {
      var t = this._actions,
        e = this._nActiveActions,
        i = this._bindings,
        n = this._nActiveBindings;
      this._nActiveActions = 0, this._nActiveBindings = 0;
      for (var r = 0; r !== e; ++r) t[r].reset();
      for (r = 0; r !== n; ++r) i[r].useCount = 0;
      return this
    },
    update: function(t) {
      t *= this.timeScale;
      for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) e[o]._update(n, t, r, a);
      var s = this._bindings,
        h = this._nActiveBindings;
      for (o = 0; o !== h; ++o) s[o].apply(a);
      return this
    },
    getRoot: function() {
      return this._root
    },
    uncacheClip: function(t) {
      var e = this._actions,
        i = t.uuid,
        n = this._actionsByClip,
        r = n[i];
      if (void 0 !== r) {
        for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
          var h = a[o];
          this._deactivateAction(h);
          var c = h._cacheIndex,
            l = e[e.length - 1];
          h._cacheIndex = null, h._byClipCacheIndex = null, l._cacheIndex = c, e[c] = l, e.pop(), this._removeInactiveBindingsForAction(h)
        }
        delete n[i]
      }
    },
    uncacheRoot: function(t) {
      var e = t.uuid,
        i = this._actionsByClip;
      for (var n in i) {
        var r = i[n].actionByRoot[e];
        void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
      }
      var a = this._bindingsByRootAndName[e];
      if (void 0 !== a)
        for (var o in a) {
          var s = a[o];
          s.restoreOriginalState(), this._removeInactiveBinding(s)
        }
    },
    uncacheAction: function(t, e) {
      var i = this.existingAction(t, e);
      null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
    }
  }), hs.prototype.clone = function() {
    return new hs(void 0 === this.value.clone ? this.value : this.value.clone())
  }, cs.prototype = Object.assign(Object.create(me.prototype), {
    constructor: cs,
    isInstancedBufferGeometry: !0,
    copy: function(t) {
      return me.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    }
  }), ls.prototype = Object.assign(Object.create(An.prototype), {
    constructor: ls,
    isInstancedInterleavedBuffer: !0,
    copy: function(t) {
      return An.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }
  }), us.prototype = Object.assign(Object.create(ie.prototype), {
    constructor: us,
    isInstancedBufferAttribute: !0,
    copy: function(t) {
      return ie.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }
  }), Object.assign(ps.prototype, {
    linePrecision: 1,
    set: function(t, e) {
      this.ray.set(t, e)
    },
    setFromCamera: function(t, e) {
      e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
    },
    intersectObject: function(t, e, i) {
      var n = i || [];
      return fs(t, this, n, e), n.sort(ds), n
    },
    intersectObjects: function(t, e, i) {
      var n = i || [];
      if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
      for (var r = 0, a = t.length; r < a; r++) fs(t[r], this, n, e);
      return n.sort(ds), n
    }
  }), Object.assign(ms.prototype, {
    start: function() {
      this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
    },
    stop: function() {
      this.getElapsedTime(), this.running = !1, this.autoStart = !1
    },
    getElapsedTime: function() {
      return this.getDelta(), this.elapsedTime
    },
    getDelta: function() {
      var t = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        var e = ("undefined" == typeof performance ? Date : performance).now();
        t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
      }
      return t
    }
  }), Object.assign(vs.prototype, {
    set: function(t, e, i) {
      return this.radius = t, this.phi = e, this.theta = i, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
    },
    makeSafe: function() {
      var t = 1e-6;
      return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
    },
    setFromVector3: function(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z)
    },
    setFromCartesianCoords: function(t, e, i) {
      return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(Y.clamp(e / this.radius, -1, 1))), this
    }
  }), Object.assign(gs.prototype, {
    set: function(t, e, i) {
      return this.radius = t, this.theta = e, this.y = i, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
    },
    setFromVector3: function(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z)
    },
    setFromCartesianCoords: function(t, e, i) {
      return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this
    }
  }), Object.assign(ys.prototype, {
    set: function(t, e) {
      return this.min.copy(t), this.max.copy(e), this
    },
    setFromPoints: function(t) {
      this.makeEmpty();
      for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
      return this
    },
    setFromCenterAndSize: function() {
      var t = new J;
      return function(e, i) {
        var n = t.copy(i).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
      }
    }(),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y
    },
    getCenter: function(t) {
      return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new J), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(t) {
      return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new J), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
    },
    expandByPoint: function(t) {
      return this.min.min(t), this.max.max(t), this
    },
    expandByVector: function(t) {
      return this.min.sub(t), this.max.add(t), this
    },
    expandByScalar: function(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this
    },
    containsPoint: function(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
    },
    containsBox: function(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
    },
    getParameter: function(t, e) {
      return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new J), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
    },
    clampPoint: function(t, e) {
      return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new J), e.copy(t).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
      var t = new J;
      return function(e) {
        return t.copy(e).clamp(this.min, this.max).sub(e).length()
      }
    }(),
    intersect: function(t) {
      return this.min.max(t.min), this.max.min(t.max), this
    },
    union: function(t) {
      return this.min.min(t.min), this.max.max(t.max), this
    },
    translate: function(t) {
      return this.min.add(t), this.max.add(t), this
    },
    equals: function(t) {
      return t.min.equals(this.min) && t.max.equals(this.max)
    }
  }), Object.assign(xs.prototype, {
    set: function(t, e) {
      return this.start.copy(t), this.end.copy(e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.start.copy(t.start), this.end.copy(t.end), this
    },
    getCenter: function(t) {
      return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new at), t.addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(t) {
      return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new at), t.subVectors(this.end, this.start)
    },
    distanceSq: function() {
      return this.start.distanceToSquared(this.end)
    },
    distance: function() {
      return this.start.distanceTo(this.end)
    },
    at: function(t, e) {
      return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new at), this.delta(e).multiplyScalar(t).add(this.start)
    },
    closestPointToPointParameter: (Ko = new at, Qo = new at, function(t, e) {
      Ko.subVectors(t, this.start), Qo.subVectors(this.end, this.start);
      var i = Qo.dot(Qo),
        n = Qo.dot(Ko) / i;
      return e && (n = Y.clamp(n, 0, 1)), n
    }),
    closestPointToPoint: function(t, e, i) {
      var n = this.closestPointToPointParameter(t, e);
      return void 0 === i && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), i = new at), this.delta(i).multiplyScalar(n).add(this.start)
    },
    applyMatrix4: function(t) {
      return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
    },
    equals: function(t) {
      return t.start.equals(this.start) && t.end.equals(this.end)
    }
  }), _s.prototype = Object.create(Kt.prototype), _s.prototype.constructor = _s, _s.prototype.isImmediateRenderObject = !0, bs.prototype = Object.create(Bn.prototype), bs.prototype.constructor = bs, bs.prototype.update = function() {
    var t = new at,
      e = new at,
      i = new ot;
    return function() {
      var n = ["a", "b", "c"];
      this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
      var r = this.object.matrixWorld,
        a = this.geometry.attributes.position,
        o = this.object.geometry;
      if (o && o.isGeometry)
        for (var s = o.vertices, h = o.faces, c = 0, l = 0, u = h.length; l < u; l++)
          for (var p = h[l], d = 0, f = p.vertexNormals.length; d < f; d++) {
            var m = s[p[n[d]]],
              v = p.vertexNormals[d];
            t.copy(m).applyMatrix4(r), e.copy(v).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(c, t.x, t.y, t.z), c += 1, a.setXYZ(c, e.x, e.y, e.z), c += 1
          } else if (o && o.isBufferGeometry) {
            var g = o.attributes.position,
              y = o.attributes.normal;
            for (c = 0, d = 0, f = g.count; d < f; d++) t.set(g.getX(d), g.getY(d), g.getZ(d)).applyMatrix4(r), e.set(y.getX(d), y.getY(d), y.getZ(d)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(c, t.x, t.y, t.z), c += 1, a.setXYZ(c, e.x, e.y, e.z), c += 1
          } a.needsUpdate = !0
    }
  }(), Ms.prototype = Object.create(Kt.prototype), Ms.prototype.constructor = Ms, Ms.prototype.dispose = function() {
    this.cone.geometry.dispose(), this.cone.material.dispose()
  }, Ms.prototype.update = function() {
    var t = new at,
      e = new at;
    return function() {
      this.light.updateMatrixWorld();
      var i = this.light.distance ? this.light.distance : 1e3,
        n = i * Math.tan(this.light.angle);
      this.cone.scale.set(n, n, i), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
    }
  }(), Ss.prototype = Object.create(Bn.prototype), Ss.prototype.constructor = Ss, Ss.prototype.updateMatrixWorld = function() {
    var t = new at,
      e = new nt,
      i = new nt;
    return function(n) {
      var r = this.bones,
        a = this.geometry,
        o = a.getAttribute("position");
      i.getInverse(this.root.matrixWorld);
      for (var s = 0, h = 0; s < r.length; s++) {
        var c = r[s];
        c.parent && c.parent.isBone && (e.multiplyMatrices(i, c.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(h, t.x, t.y, t.z), e.multiplyMatrices(i, c.parent.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(h + 1, t.x, t.y, t.z), h += 2)
      }
      a.getAttribute("position").needsUpdate = !0, Kt.prototype.updateMatrixWorld.call(this, n)
    }
  }(), Es.prototype = Object.create(ze.prototype), Es.prototype.constructor = Es, Es.prototype.dispose = function() {
    this.geometry.dispose(), this.material.dispose()
  }, Es.prototype.update = function() {
    void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
  }, Ts.prototype = Object.create(Bn.prototype), Ts.prototype.constructor = Ts, As.prototype = Object.create(Bn.prototype), As.prototype.constructor = As, Ls.prototype = Object.create(Bn.prototype), Ls.prototype.constructor = Ls, Ls.prototype.update = function() {
    var t = new at,
      e = new at,
      i = new ot;
    return function() {
      this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
      for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, h = 0, c = 0, l = s.length; c < l; c++) {
        var u = s[c],
          p = u.normal;
        t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n), e.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), r.setXYZ(h, t.x, t.y, t.z), h += 1, r.setXYZ(h, e.x, e.y, e.z), h += 1
      }
      r.needsUpdate = !0
    }
  }(), Cs.prototype = Object.create(Kt.prototype), Cs.prototype.constructor = Cs, Cs.prototype.dispose = function() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
  }, Cs.prototype.update = function() {
    var t = new at,
      e = new at,
      i = new at;
    return function() {
      t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(i), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(i), this.targetLine.scale.z = i.length()
    }
  }(), Ps.prototype = Object.create(Bn.prototype), Ps.prototype.constructor = Ps, Ps.prototype.update = function() {
    var t, e, i = new at,
      n = new Za;

    function r(r, a, o, s) {
      i.set(a, o, s).unproject(n);
      var h = e[r];
      if (void 0 !== h)
        for (var c = t.getAttribute("position"), l = 0, u = h.length; l < u; l++) c.setXYZ(h[l], i.x, i.y, i.z)
    }
    return function() {
      t = this.geometry, e = this.pointMap, n.projectionMatrix.copy(this.camera.projectionMatrix), r("c", 0, 0, -1), r("t", 0, 0, 1), r("n1", -1, -1, -1), r("n2", 1, -1, -1), r("n3", -1, 1, -1), r("n4", 1, 1, -1), r("f1", -1, -1, 1), r("f2", 1, -1, 1), r("f3", -1, 1, 1), r("f4", 1, 1, 1), r("u1", .7, 1.1, -1), r("u2", -.7, 1.1, -1), r("u3", 0, 2, -1), r("cf1", -1, 0, 1), r("cf2", 1, 0, 1), r("cf3", 0, -1, 1), r("cf4", 0, 1, 1), r("cn1", -1, 0, -1), r("cn2", 1, 0, -1), r("cn3", 0, -1, -1), r("cn4", 0, 1, -1), t.getAttribute("position").needsUpdate = !0
    }
  }(), Rs.prototype = Object.create(Bn.prototype), Rs.prototype.constructor = Rs, Rs.prototype.update = function() {
    var t = new gt;
    return function(e) {
      if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
        var i = t.min,
          n = t.max,
          r = this.geometry.attributes.position,
          a = r.array;
        a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = i.x, a[4] = n.y, a[5] = n.z, a[6] = i.x, a[7] = i.y, a[8] = n.z, a[9] = n.x, a[10] = i.y, a[11] = n.z, a[12] = n.x, a[13] = n.y, a[14] = i.z, a[15] = i.x, a[16] = n.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[21] = n.x, a[22] = i.y, a[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
      }
    }
  }(), Rs.prototype.setFromObject = function(t) {
    return this.object = t, this.update(), this
  }, Is.prototype = Object.create(Bn.prototype), Is.prototype.constructor = Is, Is.prototype.updateMatrixWorld = function(t) {
    var e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), Kt.prototype.updateMatrixWorld.call(this, t))
  }, Ns.prototype = Object.create(Un.prototype), Ns.prototype.constructor = Ns, Ns.prototype.updateMatrixWorld = function(t) {
    var e = -this.plane.constant;
    Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), Kt.prototype.updateMatrixWorld.call(this, t)
  }, Os.prototype = Object.create(Kt.prototype), Os.prototype.constructor = Os, Os.prototype.setDirection = (is = new at, function(t) {
    t.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : t.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (is.set(t.z, 0, -t.x).normalize(), es = Math.acos(t.y), this.quaternion.setFromAxisAngle(is, es))
  }), Os.prototype.setLength = function(t, e, i) {
    void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
  }, Os.prototype.setColor = function(t) {
    this.line.material.color.copy(t), this.cone.material.color.copy(t)
  }, Ds.prototype = Object.create(Bn.prototype), Ds.prototype.constructor = Ds, window.THREE = t, t.AddEquation = r, t.AddOperation = 2, t.AdditiveBlending = 2, t.AlphaFormat = 1021, t.AlwaysDepth = 1, t.AmbientLight = ro, t.AnimationClip = xo, t.AnimationMixer = ss, t.AnimationObjectGroup = as, t.AnimationUtils = ao, t.ArcCurve = Aa, t.ArrayCamera = Go, t.ArrowHelper = Os, t.AxesHelper = Ds, t.BackSide = 1, t.BasicDepthPacking = 3200, t.BasicShadowMap = 0, t.Bone = Nn, t.BooleanKeyframeTrack = uo, t.Box2 = ys, t.Box3 = gt, t.Box3Helper = Is, t.BoxBufferGeometry = ge, t.BoxGeometry = ve, t.BoxHelper = Rs, t.BufferAttribute = ie, t.BufferGeometry = me, t.BufferGeometryLoader = Mo, t.ByteType = 1010, t.Cache = ma, t.Camera = Za, t.CameraHelper = Ps, t.CanvasTexture = jn, t.CatmullRomCurve3 = Na, t.CineonToneMapping = 4, t.CircleBufferGeometry = ia, t.CircleGeometry = ea, t.ClampToEdgeWrapping = f, t.Clock = ms, t.Color = Ct, t.ColorKeyframeTrack = po, t.CompressedTexture = Hn, t.CompressedTextureLoader = _a, t.ConeBufferGeometry = ta, t.ConeGeometry = $r, t.CubeCamera = Fo, t.CubeReflectionMapping = h, t.CubeRefractionMapping = c, t.CubeTexture = Ze, t.CubeTextureLoader = wa, t.CubeUVReflectionMapping = u, t.CubeUVRefractionMapping = p, t.CubicBezierCurve = Ba, t.CubicBezierCurve3 = za, t.CubicInterpolant = so, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.CullFaceNone = 0, t.Curve = Ea, t.CurvePath = Wa, t.CustomBlending = 5, t.CylinderBufferGeometry = Qr, t.CylinderGeometry = Kr, t.Cylindrical = gs, t.DataTexture = vt, t.DataTextureLoader = ba, t.DefaultLoadingManager = ga, t.DepthFormat = P, t.DepthStencilFormat = R, t.DepthTexture = Wn, t.DirectionalLight = no, t.DirectionalLightHelper = Cs, t.DirectionalLightShadow = io, t.DiscreteInterpolant = co, t.DodecahedronBufferGeometry = rr, t.DodecahedronGeometry = nr, t.DoubleSide = 2, t.DstAlphaFactor = 206, t.DstColorFactor = 208, t.EdgesGeometry = Zr, t.EllipseCurve = Ta, t.EqualDepth = 4, t.EquirectangularReflectionMapping = 303, t.EquirectangularRefractionMapping = l, t.Euler = Bt, t.EventDispatcher = e, t.ExtrudeBufferGeometry = Ur, t.ExtrudeGeometry = Dr, t.Face3 = Ot, t.FaceColors = 1, t.FaceNormalsHelper = Ls, t.FileLoader = xa, t.FlatShading = 1, t.Float32BufferAttribute = le, t.Float64BufferAttribute = ue, t.FloatType = E, t.Fog = En, t.FogExp2 = Sn, t.Font = Uo, t.FontLoader = zo, t.FrontFaceDirectionCCW = 1, t.FrontFaceDirectionCW = 0, t.FrontSide = 0, t.Frustum = Mt, t.GammaEncoding = q, t.Geometry = ee, t.GreaterDepth = 6, t.GreaterEqualDepth = 5, t.GridHelper = Ts, t.Group = Vn, t.HalfFloatType = T, t.IcosahedronBufferGeometry = ir, t.IcosahedronGeometry = er, t.ImageLoader = Ma, t.ImageUtils = lt, t.ImmediateRenderObject = _s, t.InstancedBufferAttribute = us, t.InstancedBufferGeometry = cs, t.InstancedInterleavedBuffer = ls, t.Int16BufferAttribute = oe, t.Int32BufferAttribute = he, t.Int8BufferAttribute = ne, t.IntType = 1013, t.InterleavedBuffer = An, t.InterleavedBufferAttribute = Ln, t.Interpolant = oo, t.InterpolateDiscrete = G, t.InterpolateLinear = V, t.InterpolateSmooth = k, t.JSONLoader = Po, t.KeyframeTrack = lo, t.LOD = Rn, t.LatheBufferGeometry = Xr, t.LatheGeometry = Wr, t.Layers = zt, t.LessDepth = 2, t.LessEqualDepth = 3, t.Light = Ya, t.LightShadow = Ja, t.Line = Un, t.Line3 = xs, t.LineBasicMaterial = Dn, t.LineCurve = Fa, t.LineCurve3 = Ga, t.LineDashedMaterial = da, t.LineLoop = zn, t.LineSegments = Bn, t.LinearEncoding = X, t.LinearFilter = x, t.LinearInterpolant = ho, t.LinearMipMapLinearFilter = b, t.LinearMipMapNearestFilter = _, t.LinearToneMapping = 1, t.Loader = Lo, t.LoaderUtils = Co, t.LoadingManager = va, t.LogLuvEncoding = 3003, t.LoopOnce = 2200, t.LoopPingPong = 2202, t.LoopRepeat = 2201, t.LuminanceAlphaFormat = 1025, t.LuminanceFormat = 1024, t.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
  }, t.Material = Ne, t.MaterialLoader = bo, t.Math = Y, t.Matrix3 = ot, t.Matrix4 = nt, t.MaxEquation = o, t.Mesh = ze, t.MeshBasicMaterial = Be, t.MeshDepthMaterial = yn, t.MeshDistanceMaterial = xn, t.MeshLambertMaterial = ua, t.MeshMatcapMaterial = pa, t.MeshNormalMaterial = la, t.MeshPhongMaterial = ha, t.MeshPhysicalMaterial = sa, t.MeshStandardMaterial = oa, t.MeshToonMaterial = ca, t.MinEquation = a, t.MirroredRepeatWrapping = m, t.MixOperation = 1, t.MultiplyBlending = 4, t.MultiplyOperation = 0, t.NearestFilter = v, t.NearestMipMapLinearFilter = y, t.NearestMipMapNearestFilter = g, t.NeverDepth = 0, t.NoBlending = 0, t.NoColors = 0, t.NoToneMapping = 0, t.NormalBlending = 1, t.NotEqualDepth = 7, t.NumberKeyframeTrack = fo, t.Object3D = Kt, t.ObjectLoader = Ro, t.ObjectSpaceNormalMap = 1, t.OctahedronBufferGeometry = tr, t.OctahedronGeometry = $n, t.OneFactor = 201, t.OneMinusDstAlphaFactor = 207, t.OneMinusDstColorFactor = 209, t.OneMinusSrcAlphaFactor = 205, t.OneMinusSrcColorFactor = 203, t.OrthographicCamera = eo, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.ParametricBufferGeometry = Yn, t.ParametricGeometry = qn, t.Path = Xa, t.PerspectiveCamera = Ka, t.Plane = xt, t.PlaneBufferGeometry = xe, t.PlaneGeometry = ye, t.PlaneHelper = Ns, t.PointLight = to, t.PointLightHelper = Es, t.Points = Gn, t.PointsMaterial = Fn, t.PolarGridHelper = As, t.PolyhedronBufferGeometry = Zn, t.PolyhedronGeometry = Jn, t.PropertyBinding = rs, t.PropertyMixer = Vo, t.QuadraticBezierCurve = Va, t.QuadraticBezierCurve3 = ka, t.Quaternion = rt, t.QuaternionKeyframeTrack = vo, t.QuaternionLinearInterpolant = mo, t.REVISION = "97dev", t.RGBADepthPacking = 3201, t.RGBAFormat = C, t.RGBA_ASTC_10x10_Format = 37819, t.RGBA_ASTC_10x5_Format = 37816, t.RGBA_ASTC_10x6_Format = 37817, t.RGBA_ASTC_10x8_Format = 37818, t.RGBA_ASTC_12x10_Format = 37820, t.RGBA_ASTC_12x12_Format = 37821, t.RGBA_ASTC_4x4_Format = 37808, t.RGBA_ASTC_5x4_Format = 37809, t.RGBA_ASTC_5x5_Format = 37810, t.RGBA_ASTC_6x5_Format = 37811, t.RGBA_ASTC_6x6_Format = 37812, t.RGBA_ASTC_8x5_Format = 37813, t.RGBA_ASTC_8x6_Format = 37814, t.RGBA_ASTC_8x8_Format = 37815, t.RGBA_PVRTC_2BPPV1_Format = F, t.RGBA_PVRTC_4BPPV1_Format = z, t.RGBA_S3TC_DXT1_Format = N, t.RGBA_S3TC_DXT3_Format = O, t.RGBA_S3TC_DXT5_Format = D, t.RGBDEncoding = 3006, t.RGBEEncoding = 3002, t.RGBEFormat = 1023, t.RGBFormat = L, t.RGBM16Encoding = 3005, t.RGBM7Encoding = 3004, t.RGB_ETC1_Format = 36196, t.RGB_PVRTC_2BPPV1_Format = B, t.RGB_PVRTC_4BPPV1_Format = U, t.RGB_S3TC_DXT1_Format = I, t.RawShaderMaterial = aa, t.Ray = De, t.Raycaster = ps, t.RedFormat = 1028, t.ReinhardToneMapping = 2, t.RepeatWrapping = d, t.ReverseSubtractEquation = 102, t.RingBufferGeometry = jr, t.RingGeometry = Hr, t.Scene = Tn, t.ShaderChunk = Tt, t.ShaderLib = Rt, t.ShaderMaterial = Oe, t.ShadowMaterial = ra, t.Shape = qa, t.ShapeBufferGeometry = Yr, t.ShapeGeometry = qr, t.ShapePath = Do, t.ShapeUtils = Ir, t.ShortType = 1011, t.Skeleton = In, t.SkeletonHelper = Ss, t.SkinnedMesh = On, t.SmoothShading = 2, t.Sphere = yt, t.SphereBufferGeometry = kr, t.SphereGeometry = Vr, t.Spherical = vs, t.SphericalReflectionMapping = 305, t.SplineCurve = Ha, t.SpotLight = $a, t.SpotLightHelper = Ms, t.SpotLightShadow = Qa, t.Sprite = Pn, t.SpriteMaterial = Cn, t.SrcAlphaFactor = 204, t.SrcAlphaSaturateFactor = 210, t.SrcColorFactor = 202, t.StringKeyframeTrack = go, t.SubtractEquation = 101, t.SubtractiveBlending = 3, t.TangentSpaceNormalMap = 0, t.TetrahedronBufferGeometry = Qn, t.TetrahedronGeometry = Kn, t.TextBufferGeometry = Gr, t.TextGeometry = Fr, t.Texture = pt, t.TextureLoader = Sa, t.TorusBufferGeometry = lr, t.TorusGeometry = cr, t.TorusKnotBufferGeometry = hr, t.TorusKnotGeometry = sr, t.Triangle = Ue, t.TriangleFanDrawMode = 2, t.TriangleStripDrawMode = 1, t.TrianglesDrawMode = 0, t.TubeBufferGeometry = or, t.TubeGeometry = ar, t.UVMapping = s, t.Uint16BufferAttribute = se, t.Uint32BufferAttribute = ce, t.Uint8BufferAttribute = re, t.Uint8ClampedBufferAttribute = ae, t.Uncharted2ToneMapping = 3, t.Uniform = hs, t.UniformsLib = Pt, t.UniformsUtils = At, t.UnsignedByteType = M, t.UnsignedInt248Type = A, t.UnsignedIntType = S, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShort565Type = 1019, t.UnsignedShortType = w, t.Vector2 = J, t.Vector3 = at, t.Vector4 = dt, t.VectorKeyframeTrack = yo, t.VertexColors = 2, t.VertexNormalsHelper = bs, t.VideoTexture = kn, t.WebGLRenderTarget = ft, t.WebGLRenderTargetCube = mt, t.WebGLRenderer = function(t) {
    var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      i = void 0 !== t.context ? t.context : null,
      n = void 0 !== t.alpha && t.alpha,
      r = void 0 === t.depth || t.depth,
      a = void 0 === t.stencil || t.stencil,
      o = void 0 !== t.antialias && t.antialias,
      s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
      h = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
      c = void 0 !== t.powerPreference ? t.powerPreference : "default",
      l = null,
      u = null;
    this.domElement = e, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = 1, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
    var p, d, f, m, v, g, y, x, _, b, w, S, A, L, P, R, I, N, O = this,
      D = !1,
      U = null,
      B = null,
      z = null,
      F = -1,
      G = {
        geometry: null,
        program: null,
        wireframe: !1
      },
      V = null,
      k = null,
      H = new dt,
      j = new dt,
      W = null,
      X = 0,
      q = e.width,
      J = e.height,
      Z = 1,
      K = new dt(0, 0, q, J),
      Q = new dt(0, 0, q, J),
      $ = !1,
      tt = new Mt,
      et = new ke,
      it = !1,
      rt = !1,
      ot = new nt,
      st = new at;

    function ht() {
      return null === B ? Z : 1
    }
    try {
      var ct = {
        alpha: n,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: s,
        preserveDrawingBuffer: h,
        powerPreference: c
      };
      if (e.addEventListener("webglcontextlost", pt, !1), e.addEventListener("webglcontextrestored", ft, !1), null === (p = i || e.getContext("webgl", ct) || e.getContext("experimental-webgl", ct))) throw null !== e.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      void 0 === p.getShaderPrecisionFormat && (p.getShaderPrecisionFormat = function() {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        }
      })
    } catch (t) {
      console.error("THREE.WebGLRenderer: " + t.message)
    }

    function lt() {
      d = new He(p), (f = new Ve(p, d, t)).isWebGL2 || (d.get("WEBGL_depth_texture"), d.get("OES_texture_float"), d.get("OES_texture_half_float"), d.get("OES_texture_half_float_linear"), d.get("OES_standard_derivatives"), d.get("OES_element_index_uint"), d.get("ANGLE_instanced_arrays")), d.get("OES_texture_float_linear"), N = new wn(p, d, f), (m = new bn(p, d, N, f)).scissor(j.copy(Q).multiplyScalar(Z)), m.viewport(H.copy(K).multiplyScalar(Z)), v = new Xe(p), g = new Qi, y = new Mn(p, d, m, g, f, N, v), x = new Nt(p), _ = new je(p, x, v), b = new Je(_, v), P = new Ye(p), w = new Ki(O, d, f), S = new nn, A = new gn, L = new Fe(O, m, b, s), R = new Ge(p, d, v, f), I = new We(p, d, v, f), v.programs = w.programs, O.context = p, O.capabilities = f, O.extensions = d, O.properties = g, O.renderLists = S, O.state = m, O.info = v
    }
    lt();
    var ut = new _n(O, b, f.maxTextureSize);

    function pt(t) {
      t.preventDefault(), D = !0
    }

    function ft() {
      D = !1, lt()
    }

    function mt(t) {
      var e = t.target;
      e.removeEventListener("dispose", mt),
        function(t) {
          gt(t), g.remove(t)
        }(e)
    }

    function gt(t) {
      var e = g.get(t).program;
      t.program = void 0, void 0 !== e && w.releaseProgram(e)
    }
    this.shadowMap = ut, this.getContext = function() {
      return p
    }, this.getContextAttributes = function() {
      return p.getContextAttributes()
    }, this.forceContextLoss = function() {
      var t = d.get("WEBGL_lose_context");
      t && t.loseContext()
    }, this.forceContextRestore = function() {
      var t = d.get("WEBGL_lose_context");
      t && t.restoreContext()
    }, this.getPixelRatio = function() {
      return Z
    }, this.setPixelRatio = function(t) {
      void 0 !== t && (Z = t, this.setSize(q, J, !1))
    }, this.getSize = function() {
      return {
        width: q,
        height: J
      }
    }, this.setSize = function(t, i, n) {
      q = t, J = i, e.width = t * Z, e.height = i * Z, !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i)
    }, this.getDrawingBufferSize = function() {
      return {
        width: q * Z,
        height: J * Z
      }
    }, this.setDrawingBufferSize = function(t, i, n) {
      q = t, J = i, Z = n, e.width = t * n, e.height = i * n, this.setViewport(0, 0, t, i)
    }, this.getCurrentViewport = function() {
      return H
    }, this.setViewport = function(t, e, i, n) {
      K.set(t, J - e - n, i, n), m.viewport(H.copy(K).multiplyScalar(Z))
    }, this.setScissor = function(t, e, i, n) {
      Q.set(t, J - e - n, i, n), m.scissor(j.copy(Q).multiplyScalar(Z))
    }, this.setScissorTest = function(t) {
      m.setScissorTest($ = t)
    }, this.getClearColor = function() {
      return L.getClearColor()
    }, this.setClearColor = function() {
      L.setClearColor.apply(L, arguments)
    }, this.getClearAlpha = function() {
      return L.getClearAlpha()
    }, this.setClearAlpha = function() {
      L.setClearAlpha.apply(L, arguments)
    }, this.clear = function(t, e, i) {
      var n = 0;
      (void 0 === t || t) && (n |= p.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= p.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= p.STENCIL_BUFFER_BIT), p.clear(n)
    }, this.clearColor = function() {
      this.clear(!0, !1, !1)
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1)
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0)
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", pt, !1), e.removeEventListener("webglcontextrestored", ft, !1), S.dispose(), A.dispose(), g.dispose(), b.dispose(), _t.stop()
    }, this.renderBufferImmediate = function(t, e) {
      m.initAttributes();
      var i = g.get(t);
      t.hasPositions && !i.position && (i.position = p.createBuffer()), t.hasNormals && !i.normal && (i.normal = p.createBuffer()), t.hasUvs && !i.uv && (i.uv = p.createBuffer()), t.hasColors && !i.color && (i.color = p.createBuffer());
      var n = e.getAttributes();
      t.hasPositions && (p.bindBuffer(p.ARRAY_BUFFER, i.position), p.bufferData(p.ARRAY_BUFFER, t.positionArray, p.DYNAMIC_DRAW), m.enableAttribute(n.position), p.vertexAttribPointer(n.position, 3, p.FLOAT, !1, 0, 0)), t.hasNormals && (p.bindBuffer(p.ARRAY_BUFFER, i.normal), p.bufferData(p.ARRAY_BUFFER, t.normalArray, p.DYNAMIC_DRAW), m.enableAttribute(n.normal), p.vertexAttribPointer(n.normal, 3, p.FLOAT, !1, 0, 0)), t.hasUvs && (p.bindBuffer(p.ARRAY_BUFFER, i.uv), p.bufferData(p.ARRAY_BUFFER, t.uvArray, p.DYNAMIC_DRAW), m.enableAttribute(n.uv), p.vertexAttribPointer(n.uv, 2, p.FLOAT, !1, 0, 0)), t.hasColors && (p.bindBuffer(p.ARRAY_BUFFER, i.color), p.bufferData(p.ARRAY_BUFFER, t.colorArray, p.DYNAMIC_DRAW), m.enableAttribute(n.color), p.vertexAttribPointer(n.color, 3, p.FLOAT, !1, 0, 0)), m.disableUnusedAttributes(), p.drawArrays(p.TRIANGLES, 0, t.count), t.count = 0
    }, this.renderBufferDirect = function(t, e, i, n, r, a) {
      var o = r.isMesh && r.normalMatrix.determinant() < 0;
      m.setMaterial(n, o);
      var s = Tt(t, e, n, r),
        h = !1;
      G.geometry === i.id && G.program === s.id && G.wireframe === (!0 === n.wireframe) || (G.geometry = i.id, G.program = s.id, G.wireframe = !0 === n.wireframe, h = !0), r.morphTargetInfluences && (P.update(r, i, n, s), h = !0);
      var c, l = i.index,
        u = i.attributes.position,
        v = 1;
      !0 === n.wireframe && (l = _.getWireframeAttribute(i), v = 2);
      var g = R;
      null !== l && (c = x.get(l), (g = I).setIndex(c)), h && (function(t, e, i) {
        if (i && i.isInstancedBufferGeometry & !f.isWebGL2 && null === d.get("ANGLE_instanced_arrays")) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        else {
          m.initAttributes();
          var n = i.attributes,
            r = e.getAttributes(),
            a = t.defaultAttributeValues;
          for (var o in r) {
            var s = r[o];
            if (s >= 0) {
              var h = n[o];
              if (void 0 !== h) {
                var c = h.normalized,
                  l = h.itemSize,
                  u = x.get(h);
                if (void 0 === u) continue;
                var v = u.buffer,
                  g = u.type,
                  y = u.bytesPerElement;
                if (h.isInterleavedBufferAttribute) {
                  var _ = h.data,
                    b = _.stride,
                    M = h.offset;
                  _ && _.isInstancedInterleavedBuffer ? (m.enableAttributeAndDivisor(s, _.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = _.meshPerAttribute * _.count)) : m.enableAttribute(s), p.bindBuffer(p.ARRAY_BUFFER, v), p.vertexAttribPointer(s, l, g, c, b * y, M * y)
                } else h.isInstancedBufferAttribute ? (m.enableAttributeAndDivisor(s, h.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = h.meshPerAttribute * h.count)) : m.enableAttribute(s), p.bindBuffer(p.ARRAY_BUFFER, v), p.vertexAttribPointer(s, l, g, c, 0, 0)
              } else if (void 0 !== a) {
                var w = a[o];
                if (void 0 !== w) switch (w.length) {
                  case 2:
                    p.vertexAttrib2fv(s, w);
                    break;
                  case 3:
                    p.vertexAttrib3fv(s, w);
                    break;
                  case 4:
                    p.vertexAttrib4fv(s, w);
                    break;
                  default:
                    p.vertexAttrib1fv(s, w)
                }
              }
            }
          }
          m.disableUnusedAttributes()
        }
      }(n, s, i), null !== l && p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, c.buffer));
      var y = 1 / 0;
      null !== l ? y = l.count : void 0 !== u && (y = u.count);
      var b = i.drawRange.start * v,
        M = i.drawRange.count * v,
        w = null !== a ? a.start * v : 0,
        S = null !== a ? a.count * v : 1 / 0,
        E = Math.max(b, w),
        T = Math.min(y, b + M, w + S) - 1,
        A = Math.max(0, T - E + 1);
      if (0 !== A) {
        if (r.isMesh)
          if (!0 === n.wireframe) m.setLineWidth(n.wireframeLinewidth * ht()), g.setMode(p.LINES);
          else switch (r.drawMode) {
            case 0:
              g.setMode(p.TRIANGLES);
              break;
            case 1:
              g.setMode(p.TRIANGLE_STRIP);
              break;
            case 2:
              g.setMode(p.TRIANGLE_FAN)
          } else if (r.isLine) {
            var L = n.linewidth;
            void 0 === L && (L = 1), m.setLineWidth(L * ht()), r.isLineSegments ? g.setMode(p.LINES) : r.isLineLoop ? g.setMode(p.LINE_LOOP) : g.setMode(p.LINE_STRIP)
          } else r.isPoints ? g.setMode(p.POINTS) : r.isSprite && g.setMode(p.TRIANGLES);
        i && i.isInstancedBufferGeometry ? i.maxInstancedCount > 0 && g.renderInstances(i, E, A) : g.render(E, A)
      }
    }, this.compile = function(t, e) {
      (u = A.get(t, e)).init(), t.traverse((function(t) {
        t.isLight && (u.pushLight(t), t.castShadow && u.pushShadow(t))
      })), u.setupLights(e), t.traverse((function(e) {
        if (e.material)
          if (Array.isArray(e.material))
            for (var i = 0; i < e.material.length; i++) Et(e.material[i], t.fog, e);
          else Et(e.material, t.fog, e)
      }))
    };
    var yt, xt = null,
      _t = new It;

    function bt(t, e, i) {
      if (!1 !== t.visible) {
        if (t.layers.test(e.layers))
          if (t.isLight) u.pushLight(t), t.castShadow && u.pushShadow(t);
          else if (t.isSprite) {
          if (!t.frustumCulled || tt.intersectsSprite(t)) {
            i && st.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ot);
            var n = b.update(t),
              r = t.material;
            l.push(t, n, r, st.z, null)
          }
        } else if (t.isImmediateRenderObject) i && st.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ot), l.push(t, null, t.material, st.z, null);
        else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || tt.intersectsObject(t)))
          if (i && st.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ot), n = b.update(t), r = t.material, Array.isArray(r))
            for (var a = n.groups, o = 0, s = a.length; o < s; o++) {
              var h = a[o],
                c = r[h.materialIndex];
              c && c.visible && l.push(t, n, c, st.z, h)
            } else r.visible && l.push(t, n, r, st.z, null);
        var p = t.children;
        for (o = 0, s = p.length; o < s; o++) bt(p[o], e, i)
      }
    }

    function wt(t, e, i, n) {
      for (var r = 0, a = t.length; r < a; r++) {
        var o = t[r],
          s = o.object,
          h = o.geometry,
          c = void 0 === n ? o.material : n,
          l = o.group;
        if (i.isArrayCamera) {
          k = i;
          for (var p = i.cameras, d = 0, f = p.length; d < f; d++) {
            var v = p[d];
            if (s.layers.test(v.layers)) {
              if ("viewport" in v) m.viewport(H.copy(v.viewport));
              else {
                var g = v.bounds,
                  y = g.x * q,
                  x = g.y * J,
                  _ = g.z * q,
                  b = g.w * J;
                m.viewport(H.set(y, x, _, b).multiplyScalar(Z))
              }
              u.setupLights(v), St(s, e, v, h, c, l)
            }
          }
        } else k = null, St(s, e, i, h, c, l)
      }
    }

    function St(t, e, i, n, r, a) {
      if (t.onBeforeRender(O, e, i, n, r, a), u = A.get(e, k || i), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        m.setMaterial(r);
        var o = Tt(i, e.fog, r, t);
        G.geometry = null, G.program = null, G.wireframe = !1,
          function(t, e) {
            t.render((function(t) {
              O.renderBufferImmediate(t, e)
            }))
          }(t, o)
      } else O.renderBufferDirect(i, e.fog, n, r, t, a);
      t.onAfterRender(O, e, i, n, r, a), u = A.get(e, k || i)
    }

    function Et(t, e, i) {
      var n = g.get(t),
        r = u.state.lights,
        a = u.state.shadowsArray,
        o = n.lightsHash,
        s = r.state.hash,
        h = w.getParameters(t, r.state, a, e, et.numPlanes, et.numIntersection, i),
        c = w.getProgramCode(t, h),
        l = n.program,
        p = !0;
      if (void 0 === l) t.addEventListener("dispose", mt);
      else if (l.code !== c) gt(t);
      else if (o.stateID !== s.stateID || o.directionalLength !== s.directionalLength || o.pointLength !== s.pointLength || o.spotLength !== s.spotLength || o.rectAreaLength !== s.rectAreaLength || o.hemiLength !== s.hemiLength || o.shadowsLength !== s.shadowsLength) o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, p = !1;
      else {
        if (void 0 !== h.shaderID) return;
        p = !1
      }
      if (p) {
        if (h.shaderID) {
          var d = Rt[h.shaderID];
          n.shader = {
            name: t.type,
            uniforms: At.clone(d.uniforms),
            vertexShader: d.vertexShader,
            fragmentShader: d.fragmentShader
          }
        } else n.shader = {
          name: t.type,
          uniforms: t.uniforms,
          vertexShader: t.vertexShader,
          fragmentShader: t.fragmentShader
        };
        t.onBeforeCompile(n.shader, O), c = w.getProgramCode(t, h), l = w.acquireProgram(t, n.shader, h, c), n.program = l, t.program = l
      }
      var f = l.getAttributes();
      if (t.morphTargets) {
        t.numSupportedMorphTargets = 0;
        for (var m = 0; m < O.maxMorphTargets; m++) f["morphTarget" + m] >= 0 && t.numSupportedMorphTargets++
      }
      if (t.morphNormals)
        for (t.numSupportedMorphNormals = 0, m = 0; m < O.maxMorphNormals; m++) f["morphNormal" + m] >= 0 && t.numSupportedMorphNormals++;
      var v = n.shader.uniforms;
      (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = et.numPlanes, n.numIntersection = et.numIntersection, v.clippingPlanes = et.uniform), n.fog = e, void 0 === o && (n.lightsHash = o = {}), o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, t.lights && (v.ambientLightColor.value = r.state.ambient, v.directionalLights.value = r.state.directional, v.spotLights.value = r.state.spot, v.rectAreaLights.value = r.state.rectArea, v.pointLights.value = r.state.point, v.hemisphereLights.value = r.state.hemi, v.directionalShadowMap.value = r.state.directionalShadowMap, v.directionalShadowMatrix.value = r.state.directionalShadowMatrix, v.spotShadowMap.value = r.state.spotShadowMap, v.spotShadowMatrix.value = r.state.spotShadowMatrix, v.pointShadowMap.value = r.state.pointShadowMap, v.pointShadowMatrix.value = r.state.pointShadowMatrix);
      var y = n.program.getUniforms(),
        x = zi.seqWithValue(y.seq, v);
      n.uniformsList = x
    }

    function Tt(t, e, i, n) {
      X = 0;
      var r = g.get(i),
        a = u.state.lights,
        o = r.lightsHash,
        s = a.state.hash;
      if (it && (rt || t !== V)) {
        var h = t === V && i.id === F;
        et.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, h)
      }!1 === i.needsUpdate && (void 0 === r.program || i.fog && r.fog !== e ? i.needsUpdate = !0 : (!i.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === et.numPlanes && r.numIntersection === et.numIntersection) || (i.needsUpdate = !0)), i.needsUpdate && (Et(i, e, n), i.needsUpdate = !1);
      var c, l, d = !1,
        v = !1,
        y = !1,
        x = r.program,
        _ = x.getUniforms(),
        b = r.shader.uniforms;
      if (m.useProgram(x.program) && (d = !0, v = !0, y = !0), i.id !== F && (F = i.id, v = !0), d || V !== t) {
        if (_.setValue(p, "projectionMatrix", t.projectionMatrix), f.logarithmicDepthBuffer && _.setValue(p, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), V !== t && (V = t, v = !0, y = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
          var M = _.map.cameraPosition;
          void 0 !== M && M.setValue(p, st.setFromMatrixPosition(t.matrixWorld))
        }(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && _.setValue(p, "viewMatrix", t.matrixWorldInverse)
      }
      if (i.skinning) {
        _.setOptional(p, n, "bindMatrix"), _.setOptional(p, n, "bindMatrixInverse");
        var w = n.skeleton;
        if (w) {
          var S = w.bones;
          if (f.floatVertexTextures) {
            if (void 0 === w.boneTexture) {
              var T = Math.sqrt(4 * S.length);
              T = Y.ceilPowerOfTwo(T), T = Math.max(T, 4);
              var A = new Float32Array(T * T * 4);
              A.set(w.boneMatrices);
              var L = new vt(A, T, T, C, E);
              L.needsUpdate = !0, w.boneMatrices = A, w.boneTexture = L, w.boneTextureSize = T
            }
            _.setValue(p, "boneTexture", w.boneTexture), _.setValue(p, "boneTextureSize", w.boneTextureSize)
          } else _.setOptional(p, w, "boneMatrices")
        }
      }
      return v && (_.setValue(p, "toneMappingExposure", O.toneMappingExposure), _.setValue(p, "toneMappingWhitePoint", O.toneMappingWhitePoint), i.lights && (l = y, (c = b).ambientLightColor.needsUpdate = l, c.directionalLights.needsUpdate = l, c.pointLights.needsUpdate = l, c.spotLights.needsUpdate = l, c.rectAreaLights.needsUpdate = l, c.hemisphereLights.needsUpdate = l), e && i.fog && function(t, e) {
        t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
      }(b, e), i.isMeshBasicMaterial ? Lt(b, i) : i.isMeshLambertMaterial ? (Lt(b, i), function(t, e) {
        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
      }(b, i)) : i.isMeshPhongMaterial ? (Lt(b, i), i.isMeshToonMaterial ? function(t, e) {
        Ct(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
      }(b, i) : Ct(b, i)) : i.isMeshStandardMaterial ? (Lt(b, i), i.isMeshPhysicalMaterial ? function(t, e) {
        Ot(t, e), t.reflectivity.value = e.reflectivity, t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness
      }(b, i) : Ot(b, i)) : i.isMeshMatcapMaterial ? (Lt(b, i), function(t, e) {
        e.matcap && (t.matcap.value = e.matcap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
      }(b, i)) : i.isMeshDepthMaterial ? (Lt(b, i), function(t, e) {
        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
      }(b, i)) : i.isMeshDistanceMaterial ? (Lt(b, i), function(t, e) {
        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
      }(b, i)) : i.isMeshNormalMaterial ? (Lt(b, i), function(t, e) {
        e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
      }(b, i)) : i.isLineBasicMaterial ? (function(t, e) {
        t.diffuse.value = e.color, t.opacity.value = e.opacity
      }(b, i), i.isLineDashedMaterial && function(t, e) {
        t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
      }(b, i)) : i.isPointsMaterial ? function(t, e) {
        t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * Z, t.scale.value = .5 * J, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
      }(b, i) : i.isSpriteMaterial ? function(t, e) {
        t.diffuse.value = e.color, t.opacity.value = e.opacity, t.rotation.value = e.rotation, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
      }(b, i) : i.isShadowMaterial && (b.color.value = i.color, b.opacity.value = i.opacity), void 0 !== b.ltc_1 && (b.ltc_1.value = Pt.LTC_1), void 0 !== b.ltc_2 && (b.ltc_2.value = Pt.LTC_2), zi.upload(p, r.uniformsList, b, O)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (zi.upload(p, r.uniformsList, b, O), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && _.setValue(p, "center", n.center), _.setValue(p, "modelViewMatrix", n.modelViewMatrix), _.setValue(p, "normalMatrix", n.normalMatrix), _.setValue(p, "modelMatrix", n.matrixWorld), x
    }

    function Lt(t, e) {
      var i;
      t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = g.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
    }

    function Ct(t, e) {
      t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
    }

    function Ot(t, e) {
      t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
    }
    _t.setAnimationLoop((function(t) {
      xt && xt(t)
    })), "undefined" != typeof window && _t.setContext(window), this.setAnimationLoop = function(t) {
      xt = t, _t.start()
    }, this.render = function(t, e, i, n) {
      if (e && e.isCamera) {
        if (!D) {
          G.geometry = null, G.program = null, G.wireframe = !1, F = -1, V = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), (u = A.get(t, e)).init(), t.onBeforeRender(O, t, e, i), ot.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), tt.setFromMatrix(ot), rt = this.localClippingEnabled, it = et.init(this.clippingPlanes, rt, e), (l = S.get(t, e)).init(), bt(t, e, O.sortObjects), !0 === O.sortObjects && l.sort(), it && et.beginShadows();
          var r = u.state.shadowsArray;
          ut.render(r, t, e), u.setupLights(e), it && et.endShadows(), this.info.autoReset && this.info.reset(), void 0 === i && (i = null), this.setRenderTarget(i), L.render(l, t, e, n);
          var a = l.opaque,
            o = l.transparent;
          if (t.overrideMaterial) {
            var s = t.overrideMaterial;
            a.length && wt(a, t, e, s), o.length && wt(o, t, e, s)
          } else a.length && wt(a, t, e), o.length && wt(o, t, e);
          i && y.updateRenderTargetMipmap(i), m.buffers.depth.setTest(!0), m.buffers.depth.setMask(!0), m.buffers.color.setMask(!0), m.setPolygonOffset(!1), t.onAfterRender(O, t, e), l = null, u = null
        }
      } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
    }, this.allocTextureUnit = function() {
      var t = X;
      return t >= f.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + f.maxTextures), X += 1, t
    }, this.setTexture2D = (yt = !1, function(t, e) {
      t && t.isWebGLRenderTarget && (yt || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), yt = !0), t = t.texture), y.setTexture2D(t, e)
    }), this.setTexture = function() {
      var t = !1;
      return function(e, i) {
        t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), y.setTexture2D(e, i)
      }
    }(), this.setTextureCube = function() {
      var t = !1;
      return function(e, i) {
        e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? y.setTextureCube(e, i) : y.setTextureCubeDynamic(e, i)
      }
    }(), this.setFramebuffer = function(t) {
      U = t
    }, this.getRenderTarget = function() {
      return B
    }, this.setRenderTarget = function(t) {
      B = t, t && void 0 === g.get(t).__webglFramebuffer && y.setupRenderTarget(t);
      var e = U,
        i = !1;
      if (t) {
        var n = g.get(t).__webglFramebuffer;
        t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], i = !0) : e = n, H.copy(t.viewport), j.copy(t.scissor), W = t.scissorTest
      } else H.copy(K).multiplyScalar(Z), j.copy(Q).multiplyScalar(Z), W = $;
      if (z !== e && (p.bindFramebuffer(p.FRAMEBUFFER, e), z = e), m.viewport(H), m.scissor(j), m.setScissorTest(W), i) {
        var r = g.get(t.texture);
        p.framebufferTexture2D(p.FRAMEBUFFER, p.COLOR_ATTACHMENT0, p.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
      }
    }, this.readRenderTargetPixels = function(t, e, i, n, r, a) {
      if (t && t.isWebGLRenderTarget) {
        var o = g.get(t).__webglFramebuffer;
        if (o) {
          var s = !1;
          o !== z && (p.bindFramebuffer(p.FRAMEBUFFER, o), s = !0);
          try {
            var h = t.texture,
              c = h.format,
              l = h.type;
            if (c !== C && N.convert(c) !== p.getParameter(p.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!(l === M || N.convert(l) === p.getParameter(p.IMPLEMENTATION_COLOR_READ_TYPE) || l === E && (f.isWebGL2 || d.get("OES_texture_float") || d.get("WEBGL_color_buffer_float")) || l === T && (f.isWebGL2 ? d.get("EXT_color_buffer_float") : d.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            p.checkFramebufferStatus(p.FRAMEBUFFER) === p.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && p.readPixels(e, i, n, r, N.convert(c), N.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
          } finally {
            s && p.bindFramebuffer(p.FRAMEBUFFER, z)
          }
        }
      } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
    }, this.copyFramebufferToTexture = function(t, e, i) {
      var n = e.image.width,
        r = e.image.height,
        a = N.convert(e.format);
      this.setTexture2D(e, 0), p.copyTexImage2D(p.TEXTURE_2D, i || 0, a, t.x, t.y, n, r, 0)
    }, this.copyTextureToTexture = function(t, e, i, n) {
      var r = e.image.width,
        a = e.image.height,
        o = N.convert(i.format),
        s = N.convert(i.type);
      this.setTexture2D(i, 0), e.isDataTexture ? p.texSubImage2D(p.TEXTURE_2D, n || 0, t.x, t.y, r, a, o, s, e.image.data) : p.texSubImage2D(p.TEXTURE_2D, n || 0, t.x, t.y, o, s, e.image)
    }
  }, t.WebGLUtils = wn, t.WireframeGeometry = Xn, t.WrapAroundEnding = W, t.ZeroCurvatureEnding = H, t.ZeroFactor = 200, t.ZeroSlopeEnding = j, t.sRGBEncoding = 3001, Object.defineProperty(t, "__esModule", {
    value: !0
  })
}));