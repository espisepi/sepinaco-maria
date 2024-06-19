!(function (t) {
  'function' == typeof define && define.amd ? define(t) : t();
})(function () {
  'use strict';
  /**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   */ const t = '162',
    e = 1,
    n = 2,
    i = 3,
    r = 0,
    a = 1,
    s = 2,
    o = 100,
    l = 101,
    c = 102,
    h = 200,
    u = 201,
    d = 202,
    p = 203,
    f = 204,
    m = 205,
    g = 206,
    _ = 207,
    v = 208,
    x = 209,
    M = 210,
    S = 211,
    E = 212,
    T = 213,
    y = 214,
    b = 0,
    A = 1,
    w = 2,
    R = 0,
    C = 1,
    L = 2,
    P = 3,
    U = 4,
    D = 5,
    N = 6,
    I = 7,
    O = 301,
    F = 302,
    B = 306,
    z = 1e3,
    H = 1001,
    G = 1002,
    V = 1003,
    k = 1004,
    W = 1005,
    X = 1006,
    j = 1007,
    q = 1008,
    Y = 1009,
    K = 1012,
    Z = 1013,
    J = 1014,
    $ = 1015,
    Q = 1016,
    tt = 1020,
    et = 1023,
    nt = 1026,
    it = 1027,
    rt = 33776,
    at = 33777,
    st = 33778,
    ot = 33779,
    lt = 36492,
    ct = '',
    ht = 'srgb',
    ut = 'srgb-linear',
    dt = 'display-p3',
    pt = 'display-p3-linear',
    ft = 'linear',
    mt = 'srgb',
    gt = 'rec709',
    _t = 'p3',
    vt = 7680,
    xt = 512,
    Mt = 513,
    St = 514,
    Et = 515,
    Tt = 516,
    yt = 517,
    bt = 518,
    At = 519,
    wt = '300 es',
    Rt = 1035,
    Ct = 2e3,
    Lt = 2001;
  class Pt {
    addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    }
    hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    }
    removeEventListener(t, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t];
      if (void 0 !== n) {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1);
      }
    }
    dispatchEvent(t) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t.type];
      if (void 0 !== e) {
        t.target = this;
        const n = e.slice(0);
        for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
        t.target = null;
      }
    }
  }
  const Ut = [
      '00',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '0a',
      '0b',
      '0c',
      '0d',
      '0e',
      '0f',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '1a',
      '1b',
      '1c',
      '1d',
      '1e',
      '1f',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '2a',
      '2b',
      '2c',
      '2d',
      '2e',
      '2f',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '3a',
      '3b',
      '3c',
      '3d',
      '3e',
      '3f',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '4a',
      '4b',
      '4c',
      '4d',
      '4e',
      '4f',
      '50',
      '51',
      '52',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59',
      '5a',
      '5b',
      '5c',
      '5d',
      '5e',
      '5f',
      '60',
      '61',
      '62',
      '63',
      '64',
      '65',
      '66',
      '67',
      '68',
      '69',
      '6a',
      '6b',
      '6c',
      '6d',
      '6e',
      '6f',
      '70',
      '71',
      '72',
      '73',
      '74',
      '75',
      '76',
      '77',
      '78',
      '79',
      '7a',
      '7b',
      '7c',
      '7d',
      '7e',
      '7f',
      '80',
      '81',
      '82',
      '83',
      '84',
      '85',
      '86',
      '87',
      '88',
      '89',
      '8a',
      '8b',
      '8c',
      '8d',
      '8e',
      '8f',
      '90',
      '91',
      '92',
      '93',
      '94',
      '95',
      '96',
      '97',
      '98',
      '99',
      '9a',
      '9b',
      '9c',
      '9d',
      '9e',
      '9f',
      'a0',
      'a1',
      'a2',
      'a3',
      'a4',
      'a5',
      'a6',
      'a7',
      'a8',
      'a9',
      'aa',
      'ab',
      'ac',
      'ad',
      'ae',
      'af',
      'b0',
      'b1',
      'b2',
      'b3',
      'b4',
      'b5',
      'b6',
      'b7',
      'b8',
      'b9',
      'ba',
      'bb',
      'bc',
      'bd',
      'be',
      'bf',
      'c0',
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
      'c7',
      'c8',
      'c9',
      'ca',
      'cb',
      'cc',
      'cd',
      'ce',
      'cf',
      'd0',
      'd1',
      'd2',
      'd3',
      'd4',
      'd5',
      'd6',
      'd7',
      'd8',
      'd9',
      'da',
      'db',
      'dc',
      'dd',
      'de',
      'df',
      'e0',
      'e1',
      'e2',
      'e3',
      'e4',
      'e5',
      'e6',
      'e7',
      'e8',
      'e9',
      'ea',
      'eb',
      'ec',
      'ed',
      'ee',
      'ef',
      'f0',
      'f1',
      'f2',
      'f3',
      'f4',
      'f5',
      'f6',
      'f7',
      'f8',
      'f9',
      'fa',
      'fb',
      'fc',
      'fd',
      'fe',
      'ff',
    ],
    Dt = Math.PI / 180,
    Nt = 180 / Math.PI;
  function It() {
    const t = (4294967295 * Math.random()) | 0,
      e = (4294967295 * Math.random()) | 0,
      n = (4294967295 * Math.random()) | 0,
      i = (4294967295 * Math.random()) | 0;
    return (
      Ut[255 & t] +
      Ut[(t >> 8) & 255] +
      Ut[(t >> 16) & 255] +
      Ut[(t >> 24) & 255] +
      '-' +
      Ut[255 & e] +
      Ut[(e >> 8) & 255] +
      '-' +
      Ut[((e >> 16) & 15) | 64] +
      Ut[(e >> 24) & 255] +
      '-' +
      Ut[(63 & n) | 128] +
      Ut[(n >> 8) & 255] +
      '-' +
      Ut[(n >> 16) & 255] +
      Ut[(n >> 24) & 255] +
      Ut[255 & i] +
      Ut[(i >> 8) & 255] +
      Ut[(i >> 16) & 255] +
      Ut[(i >> 24) & 255]
    ).toLowerCase();
  }
  function Ot(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function Ft(t, e, n) {
    return (1 - n) * t + n * e;
  }
  function Bt(t) {
    return !(t & (t - 1)) && 0 !== t;
  }
  function zt(t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
  }
  function Ht(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;
      case Uint32Array:
        return t / 4294967295;
      case Uint16Array:
        return t / 65535;
      case Uint8Array:
        return t / 255;
      case Int32Array:
        return Math.max(t / 2147483647, -1);
      case Int16Array:
        return Math.max(t / 32767, -1);
      case Int8Array:
        return Math.max(t / 127, -1);
      default:
        throw new Error('Invalid component type.');
    }
  }
  function Gt(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;
      case Uint32Array:
        return Math.round(4294967295 * t);
      case Uint16Array:
        return Math.round(65535 * t);
      case Uint8Array:
        return Math.round(255 * t);
      case Int32Array:
        return Math.round(2147483647 * t);
      case Int16Array:
        return Math.round(32767 * t);
      case Int8Array:
        return Math.round(127 * t);
      default:
        throw new Error('Invalid component type.');
    }
  }
  class Vt {
    constructor(t = 0, e = 0) {
      (Vt.prototype.isVector2 = !0), (this.x = t), (this.y = e);
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return (this.x = t), (this.y = e), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error('index is out of range: ' + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error('index is out of range: ' + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), this;
    }
    add(t) {
      return (this.x += t.x), (this.y += t.y), this;
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), this;
    }
    addVectors(t, e) {
      return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
    }
    addScaledVector(t, e) {
      return (this.x += t.x * e), (this.y += t.y * e), this;
    }
    sub(t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), this;
    }
    subVectors(t, e) {
      return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = t.elements;
      return (
        (this.x = i[0] * e + i[3] * n + i[6]),
        (this.y = i[1] * e + i[4] * n + i[7]),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(Ot(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
      );
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), t;
    }
    fromBufferAttribute(t, e) {
      return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
    }
    rotateAround(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return (
        (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class kt {
    constructor(t, e, n, i, r, a, s, o, l) {
      (kt.prototype.isMatrix3 = !0),
        (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        void 0 !== t && this.set(t, e, n, i, r, a, s, o, l);
    }
    set(t, e, n, i, r, a, s, o, l) {
      const c = this.elements;
      return (
        (c[0] = t),
        (c[1] = i),
        (c[2] = s),
        (c[3] = e),
        (c[4] = r),
        (c[5] = o),
        (c[6] = n),
        (c[7] = a),
        (c[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(t) {
      const e = t.elements;
      return (
        this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        s = n[3],
        o = n[6],
        l = n[1],
        c = n[4],
        h = n[7],
        u = n[2],
        d = n[5],
        p = n[8],
        f = i[0],
        m = i[3],
        g = i[6],
        _ = i[1],
        v = i[4],
        x = i[7],
        M = i[2],
        S = i[5],
        E = i[8];
      return (
        (r[0] = a * f + s * _ + o * M),
        (r[3] = a * m + s * v + o * S),
        (r[6] = a * g + s * x + o * E),
        (r[1] = l * f + c * _ + h * M),
        (r[4] = l * m + c * v + h * S),
        (r[7] = l * g + c * x + h * E),
        (r[2] = u * f + d * _ + p * M),
        (r[5] = u * m + d * v + p * S),
        (r[8] = u * g + d * x + p * E),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[3] *= t),
        (e[6] *= t),
        (e[1] *= t),
        (e[4] *= t),
        (e[7] *= t),
        (e[2] *= t),
        (e[5] *= t),
        (e[8] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8];
      return (
        e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = c * a - s * l,
        u = s * o - c * r,
        d = l * r - a * o,
        p = e * h + n * u + i * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const f = 1 / p;
      return (
        (t[0] = h * f),
        (t[1] = (i * l - c * n) * f),
        (t[2] = (s * n - i * a) * f),
        (t[3] = u * f),
        (t[4] = (c * e - i * o) * f),
        (t[5] = (i * r - s * e) * f),
        (t[6] = d * f),
        (t[7] = (n * o - l * e) * f),
        (t[8] = (a * e - n * r) * f),
        this
      );
    }
    transpose() {
      let t;
      const e = this.elements;
      return (
        (t = e[1]),
        (e[1] = e[3]),
        (e[3] = t),
        (t = e[2]),
        (e[2] = e[6]),
        (e[6] = t),
        (t = e[5]),
        (e[5] = e[7]),
        (e[7] = t),
        this
      );
    }
    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
      const e = this.elements;
      return (
        (t[0] = e[0]),
        (t[1] = e[3]),
        (t[2] = e[6]),
        (t[3] = e[1]),
        (t[4] = e[4]),
        (t[5] = e[7]),
        (t[6] = e[2]),
        (t[7] = e[5]),
        (t[8] = e[8]),
        this
      );
    }
    setUvTransform(t, e, n, i, r, a, s) {
      const o = Math.cos(r),
        l = Math.sin(r);
      return (
        this.set(
          n * o,
          n * l,
          -n * (o * a + l * s) + a + t,
          -i * l,
          i * o,
          -i * (-l * a + o * s) + s + e,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(t, e) {
      return this.premultiply(Wt.makeScale(t, e)), this;
    }
    rotate(t) {
      return this.premultiply(Wt.makeRotation(-t)), this;
    }
    translate(t, e) {
      return this.premultiply(Wt.makeTranslation(t, e)), this;
    }
    makeTranslation(t, e) {
      return (
        t.isVector2
          ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
          : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
        this
      );
    }
    makeRotation(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
    }
    makeScale(t, e) {
      return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        t
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Wt = new kt();
  function Xt(t) {
    for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
    return !1;
  }
  function jt(t) {
    return document.createElementNS('http://www.w3.org/1999/xhtml', t);
  }
  function qt() {
    const t = jt('canvas');
    return (t.style.display = 'block'), t;
  }
  const Yt = {};
  const Kt = new kt().set(
      0.8224621,
      0.177538,
      0,
      0.0331941,
      0.9668058,
      0,
      0.0170827,
      0.0723974,
      0.9105199
    ),
    Zt = new kt().set(
      1.2249401,
      -0.2249404,
      0,
      -0.0420569,
      1.0420571,
      0,
      -0.0196376,
      -0.0786361,
      1.0982735
    ),
    Jt = {
      [ut]: {
        transfer: ft,
        primaries: gt,
        toReference: (t) => t,
        fromReference: (t) => t,
      },
      [ht]: {
        transfer: mt,
        primaries: gt,
        toReference: (t) => t.convertSRGBToLinear(),
        fromReference: (t) => t.convertLinearToSRGB(),
      },
      [pt]: {
        transfer: ft,
        primaries: _t,
        toReference: (t) => t.applyMatrix3(Zt),
        fromReference: (t) => t.applyMatrix3(Kt),
      },
      [dt]: {
        transfer: mt,
        primaries: _t,
        toReference: (t) => t.convertSRGBToLinear().applyMatrix3(Zt),
        fromReference: (t) => t.applyMatrix3(Kt).convertLinearToSRGB(),
      },
    },
    $t = new Set([ut, pt]),
    Qt = {
      enabled: !0,
      _workingColorSpace: ut,
      get workingColorSpace() {
        return this._workingColorSpace;
      },
      set workingColorSpace(t) {
        if (!$t.has(t))
          throw new Error(`Unsupported working color space, "${t}".`);
        this._workingColorSpace = t;
      },
      convert: function (t, e, n) {
        if (!1 === this.enabled || e === n || !e || !n) return t;
        const i = Jt[e].toReference;
        return (0, Jt[n].fromReference)(i(t));
      },
      fromWorkingColorSpace: function (t, e) {
        return this.convert(t, this._workingColorSpace, e);
      },
      toWorkingColorSpace: function (t, e) {
        return this.convert(t, e, this._workingColorSpace);
      },
      getPrimaries: function (t) {
        return Jt[t].primaries;
      },
      getTransfer: function (t) {
        return t === ct ? ft : Jt[t].transfer;
      },
    };
  function te(t) {
    return t < 0.04045
      ? 0.0773993808 * t
      : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
  }
  function ee(t) {
    return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
  }
  let ne;
  class ie {
    static getDataURL(t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ('undefined' == typeof HTMLCanvasElement) return t.src;
      let e;
      if (t instanceof HTMLCanvasElement) e = t;
      else {
        void 0 === ne && (ne = jt('canvas')),
          (ne.width = t.width),
          (ne.height = t.height);
        const n = ne.getContext('2d');
        t instanceof ImageData
          ? n.putImageData(t, 0, 0)
          : n.drawImage(t, 0, 0, t.width, t.height),
          (e = ne);
      }
      return e.width > 2048 || e.height > 2048
        ? (console.warn(
            'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
            t
          ),
          e.toDataURL('image/jpeg', 0.6))
        : e.toDataURL('image/png');
    }
    static sRGBToLinear(t) {
      if (
        ('undefined' != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
        ('undefined' != typeof HTMLCanvasElement &&
          t instanceof HTMLCanvasElement) ||
        ('undefined' != typeof ImageBitmap && t instanceof ImageBitmap)
      ) {
        const e = jt('canvas');
        (e.width = t.width), (e.height = t.height);
        const n = e.getContext('2d');
        n.drawImage(t, 0, 0, t.width, t.height);
        const i = n.getImageData(0, 0, t.width, t.height),
          r = i.data;
        for (let t = 0; t < r.length; t++) r[t] = 255 * te(r[t] / 255);
        return n.putImageData(i, 0, 0), e;
      }
      if (t.data) {
        const e = t.data.slice(0);
        for (let t = 0; t < e.length; t++)
          e instanceof Uint8Array || e instanceof Uint8ClampedArray
            ? (e[t] = Math.floor(255 * te(e[t] / 255)))
            : (e[t] = te(e[t]));
        return { data: e, width: t.width, height: t.height };
      }
      return (
        console.warn(
          'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.'
        ),
        t
      );
    }
  }
  let re = 0;
  class ae {
    constructor(t = null) {
      (this.isSource = !0),
        Object.defineProperty(this, 'id', { value: re++ }),
        (this.uuid = It()),
        (this.data = t),
        (this.dataReady = !0),
        (this.version = 0);
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    toJSON(t) {
      const e = void 0 === t || 'string' == typeof t;
      if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
      const n = { uuid: this.uuid, url: '' },
        i = this.data;
      if (null !== i) {
        let t;
        if (Array.isArray(i)) {
          t = [];
          for (let e = 0, n = i.length; e < n; e++)
            i[e].isDataTexture ? t.push(se(i[e].image)) : t.push(se(i[e]));
        } else t = se(i);
        n.url = t;
      }
      return e || (t.images[this.uuid] = n), n;
    }
  }
  function se(t) {
    return ('undefined' != typeof HTMLImageElement &&
      t instanceof HTMLImageElement) ||
      ('undefined' != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement) ||
      ('undefined' != typeof ImageBitmap && t instanceof ImageBitmap)
      ? ie.getDataURL(t)
      : t.data
        ? {
            data: Array.from(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name,
          }
        : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
  }
  let oe = 0;
  class le extends Pt {
    constructor(
      t = le.DEFAULT_IMAGE,
      e = le.DEFAULT_MAPPING,
      n = 1001,
      i = 1001,
      r = 1006,
      a = 1008,
      s = 1023,
      o = 1009,
      l = le.DEFAULT_ANISOTROPY,
      c = ''
    ) {
      super(),
        (this.isTexture = !0),
        Object.defineProperty(this, 'id', { value: oe++ }),
        (this.uuid = It()),
        (this.name = ''),
        (this.source = new ae(t)),
        (this.mipmaps = []),
        (this.mapping = e),
        (this.channel = 0),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = r),
        (this.minFilter = a),
        (this.anisotropy = l),
        (this.format = s),
        (this.internalFormat = null),
        (this.type = o),
        (this.offset = new Vt(0, 0)),
        (this.repeat = new Vt(1, 1)),
        (this.center = new Vt(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new kt()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.colorSpace = c),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1),
        (this.needsPMREMUpdate = !1);
    }
    get image() {
      return this.source.data;
    }
    set image(t = null) {
      this.source.data = t;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.source = t.source),
        (this.mipmaps = t.mipmaps.slice(0)),
        (this.mapping = t.mapping),
        (this.channel = t.channel),
        (this.wrapS = t.wrapS),
        (this.wrapT = t.wrapT),
        (this.magFilter = t.magFilter),
        (this.minFilter = t.minFilter),
        (this.anisotropy = t.anisotropy),
        (this.format = t.format),
        (this.internalFormat = t.internalFormat),
        (this.type = t.type),
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        (this.rotation = t.rotation),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this.matrix.copy(t.matrix),
        (this.generateMipmaps = t.generateMipmaps),
        (this.premultiplyAlpha = t.premultiplyAlpha),
        (this.flipY = t.flipY),
        (this.unpackAlignment = t.unpackAlignment),
        (this.colorSpace = t.colorSpace),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    toJSON(t) {
      const e = void 0 === t || 'string' == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.6,
          type: 'Texture',
          generator: 'Texture.toJSON',
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(t).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e || (t.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: 'dispose' });
    }
    transformUv(t) {
      if (300 !== this.mapping) return t;
      if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
        switch (this.wrapS) {
          case z:
            t.x = t.x - Math.floor(t.x);
            break;
          case H:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case G:
            1 === Math.abs(Math.floor(t.x) % 2)
              ? (t.x = Math.ceil(t.x) - t.x)
              : (t.x = t.x - Math.floor(t.x));
        }
      if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
          case z:
            t.y = t.y - Math.floor(t.y);
            break;
          case H:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case G:
            1 === Math.abs(Math.floor(t.y) % 2)
              ? (t.y = Math.ceil(t.y) - t.y)
              : (t.y = t.y - Math.floor(t.y));
        }
      return this.flipY && (t.y = 1 - t.y), t;
    }
    set needsUpdate(t) {
      !0 === t && (this.version++, (this.source.needsUpdate = !0));
    }
  }
  (le.DEFAULT_IMAGE = null),
    (le.DEFAULT_MAPPING = 300),
    (le.DEFAULT_ANISOTROPY = 1);
  class ce {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (ce.prototype.isVector4 = !0),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        (this.w = i);
    }
    get width() {
      return this.z;
    }
    set width(t) {
      this.z = t;
    }
    get height() {
      return this.w;
    }
    set height(t) {
      this.w = t;
    }
    set(t, e, n, i) {
      return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setW(t) {
      return (this.w = t), this;
    }
    setComponent(t, e) {
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
          throw new Error('index is out of range: ' + t);
      }
      return this;
    }
    getComponent(t) {
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
          throw new Error('index is out of range: ' + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
      return (
        (this.x = t.x),
        (this.y = t.y),
        (this.z = t.z),
        (this.w = void 0 !== t.w ? t.w : 1),
        this
      );
    }
    add(t) {
      return (
        (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
      );
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x),
        (this.y = t.y + e.y),
        (this.z = t.z + e.z),
        (this.w = t.w + e.w),
        this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e),
        (this.y += t.y * e),
        (this.z += t.z * e),
        (this.w += t.w * e),
        this
      );
    }
    sub(t) {
      return (
        (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
      );
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x),
        (this.y = t.y - e.y),
        (this.z = t.z - e.z),
        (this.w = t.w - e.w),
        this
      );
    }
    multiply(t) {
      return (
        (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
      );
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = this.w,
        a = t.elements;
      return (
        (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
        (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
        (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
        (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
        this
      );
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      const e = Math.sqrt(1 - t.w * t.w);
      return (
        e < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(t) {
      let e, n, i, r;
      const a = 0.01,
        s = 0.1,
        o = t.elements,
        l = o[0],
        c = o[4],
        h = o[8],
        u = o[1],
        d = o[5],
        p = o[9],
        f = o[2],
        m = o[6],
        g = o[10];
      if (Math.abs(c - u) < a && Math.abs(h - f) < a && Math.abs(p - m) < a) {
        if (
          Math.abs(c + u) < s &&
          Math.abs(h + f) < s &&
          Math.abs(p + m) < s &&
          Math.abs(l + d + g - 3) < s
        )
          return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t = (l + 1) / 2,
          o = (d + 1) / 2,
          _ = (g + 1) / 2,
          v = (c + u) / 4,
          x = (h + f) / 4,
          M = (p + m) / 4;
        return (
          t > o && t > _
            ? t < a
              ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
              : ((n = Math.sqrt(t)), (i = v / n), (r = x / n))
            : o > _
              ? o < a
                ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
                : ((i = Math.sqrt(o)), (n = v / i), (r = M / i))
              : _ < a
                ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
                : ((r = Math.sqrt(_)), (n = x / r), (i = M / r)),
          this.set(n, i, r, e),
          this
        );
      }
      let _ = Math.sqrt(
        (m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)
      );
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (m - p) / _),
        (this.y = (h - f) / _),
        (this.z = (u - c) / _),
        (this.w = Math.acos((l + d + g - 1) / 2)),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        (this.w = Math.min(this.w, t.w)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        (this.w = Math.max(this.w, t.w)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        (this.w = Math.max(t.w, Math.min(e.w, this.w))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        (this.w = Math.max(t, Math.min(e, this.w))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        (this.w = Math.trunc(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        (this.w += (t.w - this.w) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        (this.w = t.w + (e.w - t.w) * n),
        this
      );
    }
    equals(t) {
      return (
        t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this.x = t[e]),
        (this.y = t[e + 1]),
        (this.z = t[e + 2]),
        (this.w = t[e + 3]),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this.x),
        (t[e + 1] = this.y),
        (t[e + 2] = this.z),
        (t[e + 3] = this.w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        (this.z = t.getZ(e)),
        (this.w = t.getW(e)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class he extends Pt {
    constructor(t = 1, e = 1, n = {}) {
      super(),
        (this.isRenderTarget = !0),
        (this.width = t),
        (this.height = e),
        (this.depth = 1),
        (this.scissor = new ce(0, 0, t, e)),
        (this.scissorTest = !1),
        (this.viewport = new ce(0, 0, t, e));
      const i = { width: t, height: e, depth: 1 };
      n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: X,
          depthBuffer: !0,
          stencilBuffer: !1,
          depthTexture: null,
          samples: 0,
          count: 1,
        },
        n
      );
      const r = new le(
        i,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.colorSpace
      );
      (r.flipY = !1),
        (r.generateMipmaps = n.generateMipmaps),
        (r.internalFormat = n.internalFormat),
        (this.textures = []);
      const a = n.count;
      for (let t = 0; t < a; t++)
        (this.textures[t] = r.clone()),
          (this.textures[t].isRenderTargetTexture = !0);
      (this.depthBuffer = n.depthBuffer),
        (this.stencilBuffer = n.stencilBuffer),
        (this.depthTexture = n.depthTexture),
        (this.samples = n.samples);
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t) {
      this.textures[0] = t;
    }
    setSize(t, e, n = 1) {
      if (this.width !== t || this.height !== e || this.depth !== n) {
        (this.width = t), (this.height = e), (this.depth = n);
        for (let i = 0, r = this.textures.length; i < r; i++)
          (this.textures[i].image.width = t),
            (this.textures[i].image.height = e),
            (this.textures[i].image.depth = n);
        this.dispose();
      }
      this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.width = t.width),
        (this.height = t.height),
        (this.depth = t.depth),
        this.scissor.copy(t.scissor),
        (this.scissorTest = t.scissorTest),
        this.viewport.copy(t.viewport),
        (this.textures.length = 0);
      for (let e = 0, n = t.textures.length; e < n; e++)
        (this.textures[e] = t.textures[e].clone()),
          (this.textures[e].isRenderTargetTexture = !0);
      const e = Object.assign({}, t.texture.image);
      return (
        (this.texture.source = new ae(e)),
        (this.depthBuffer = t.depthBuffer),
        (this.stencilBuffer = t.stencilBuffer),
        null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
        (this.samples = t.samples),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: 'dispose' });
    }
  }
  class ue extends he {
    constructor(t = 1, e = 1, n = {}) {
      super(t, e, n), (this.isWebGLRenderTarget = !0);
    }
  }
  class de extends le {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = V),
        (this.minFilter = V),
        (this.wrapR = H),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class pe extends le {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = V),
        (this.minFilter = V),
        (this.wrapR = H),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class fe {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (this.isQuaternion = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i);
    }
    static slerpFlat(t, e, n, i, r, a, s) {
      let o = n[i + 0],
        l = n[i + 1],
        c = n[i + 2],
        h = n[i + 3];
      const u = r[a + 0],
        d = r[a + 1],
        p = r[a + 2],
        f = r[a + 3];
      if (0 === s)
        return (
          (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
        );
      if (1 === s)
        return (
          (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = f)
        );
      if (h !== f || o !== u || l !== d || c !== p) {
        let t = 1 - s;
        const e = o * u + l * d + c * p + h * f,
          n = e >= 0 ? 1 : -1,
          i = 1 - e * e;
        if (i > Number.EPSILON) {
          const r = Math.sqrt(i),
            a = Math.atan2(r, e * n);
          (t = Math.sin(t * a) / r), (s = Math.sin(s * a) / r);
        }
        const r = s * n;
        if (
          ((o = o * t + u * r),
          (l = l * t + d * r),
          (c = c * t + p * r),
          (h = h * t + f * r),
          t === 1 - s)
        ) {
          const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          (o *= t), (l *= t), (c *= t), (h *= t);
        }
      }
      (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
    }
    static multiplyQuaternionsFlat(t, e, n, i, r, a) {
      const s = n[i],
        o = n[i + 1],
        l = n[i + 2],
        c = n[i + 3],
        h = r[a],
        u = r[a + 1],
        d = r[a + 2],
        p = r[a + 3];
      return (
        (t[e] = s * p + c * h + o * d - l * u),
        (t[e + 1] = o * p + c * u + l * h - s * d),
        (t[e + 2] = l * p + c * d + s * u - o * h),
        (t[e + 3] = c * p - s * h - o * u - l * d),
        t
      );
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t) {
      (this._w = t), this._onChangeCallback();
    }
    set(t, e, n, i) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
      return (
        (this._x = t.x),
        (this._y = t.y),
        (this._z = t.z),
        (this._w = t.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(t, e = !0) {
      const n = t._x,
        i = t._y,
        r = t._z,
        a = t._order,
        s = Math.cos,
        o = Math.sin,
        l = s(n / 2),
        c = s(i / 2),
        h = s(r / 2),
        u = o(n / 2),
        d = o(i / 2),
        p = o(r / 2);
      switch (a) {
        case 'XYZ':
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case 'YXZ':
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case 'ZXY':
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case 'ZYX':
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case 'YZX':
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case 'XZY':
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        default:
          console.warn(
            'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' +
              a
          );
      }
      return !0 === e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t, e) {
      const n = e / 2,
        i = Math.sin(n);
      return (
        (this._x = t.x * i),
        (this._y = t.y * i),
        (this._z = t.z * i),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t) {
      const e = t.elements,
        n = e[0],
        i = e[4],
        r = e[8],
        a = e[1],
        s = e[5],
        o = e[9],
        l = e[2],
        c = e[6],
        h = e[10],
        u = n + s + h;
      if (u > 0) {
        const t = 0.5 / Math.sqrt(u + 1);
        (this._w = 0.25 / t),
          (this._x = (c - o) * t),
          (this._y = (r - l) * t),
          (this._z = (a - i) * t);
      } else if (n > s && n > h) {
        const t = 2 * Math.sqrt(1 + n - s - h);
        (this._w = (c - o) / t),
          (this._x = 0.25 * t),
          (this._y = (i + a) / t),
          (this._z = (r + l) / t);
      } else if (s > h) {
        const t = 2 * Math.sqrt(1 + s - n - h);
        (this._w = (r - l) / t),
          (this._x = (i + a) / t),
          (this._y = 0.25 * t),
          (this._z = (o + c) / t);
      } else {
        const t = 2 * Math.sqrt(1 + h - n - s);
        (this._w = (a - i) / t),
          (this._x = (r + l) / t),
          (this._y = (o + c) / t),
          (this._z = 0.25 * t);
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t, e) {
      let n = t.dot(e) + 1;
      return (
        n < Number.EPSILON
          ? ((n = 0),
            Math.abs(t.x) > Math.abs(t.z)
              ? ((this._x = -t.y),
                (this._y = t.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -t.z),
                (this._z = t.y),
                (this._w = n)))
          : ((this._x = t.y * e.z - t.z * e.y),
            (this._y = t.z * e.x - t.x * e.z),
            (this._z = t.x * e.y - t.y * e.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(t) {
      return 2 * Math.acos(Math.abs(Ot(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
      const n = this.angleTo(t);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    }
    normalize() {
      let t = this.length();
      return (
        0 === t
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((t = 1 / t),
            (this._x = this._x * t),
            (this._y = this._y * t),
            (this._z = this._z * t),
            (this._w = this._w * t)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(t) {
      return this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
      return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
      const n = t._x,
        i = t._y,
        r = t._z,
        a = t._w,
        s = e._x,
        o = e._y,
        l = e._z,
        c = e._w;
      return (
        (this._x = n * c + a * s + i * l - r * o),
        (this._y = i * c + a * o + r * s - n * l),
        (this._z = r * c + a * l + n * o - i * s),
        (this._w = a * c - n * s - i * o - r * l),
        this._onChangeCallback(),
        this
      );
    }
    slerp(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      const n = this._x,
        i = this._y,
        r = this._z,
        a = this._w;
      let s = a * t._w + n * t._x + i * t._y + r * t._z;
      if (
        (s < 0
          ? ((this._w = -t._w),
            (this._x = -t._x),
            (this._y = -t._y),
            (this._z = -t._z),
            (s = -s))
          : this.copy(t),
        s >= 1)
      )
        return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
      const o = 1 - s * s;
      if (o <= Number.EPSILON) {
        const t = 1 - e;
        return (
          (this._w = t * a + e * this._w),
          (this._x = t * n + e * this._x),
          (this._y = t * i + e * this._y),
          (this._z = t * r + e * this._z),
          this.normalize(),
          this
        );
      }
      const l = Math.sqrt(o),
        c = Math.atan2(l, s),
        h = Math.sin((1 - e) * c) / l,
        u = Math.sin(e * c) / l;
      return (
        (this._w = a * h + this._w * u),
        (this._x = n * h + this._x * u),
        (this._y = i * h + this._y * u),
        (this._z = r * h + this._z * u),
        this._onChangeCallback(),
        this
      );
    }
    slerpQuaternions(t, e, n) {
      return this.copy(t).slerp(e, n);
    }
    random() {
      const t = 2 * Math.PI * Math.random(),
        e = 2 * Math.PI * Math.random(),
        n = Math.random(),
        i = Math.sqrt(1 - n),
        r = Math.sqrt(n);
      return this.set(
        i * Math.sin(t),
        i * Math.cos(t),
        r * Math.sin(e),
        r * Math.cos(e)
      );
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._w === this._w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this._x = t[e]),
        (this._y = t[e + 1]),
        (this._z = t[e + 2]),
        (this._w = t[e + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this._x = t.getX(e)),
        (this._y = t.getY(e)),
        (this._z = t.getZ(e)),
        (this._w = t.getW(e)),
        this._onChangeCallback(),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class me {
    constructor(t = 0, e = 0, n = 0) {
      (me.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n);
    }
    set(t, e, n) {
      return (
        void 0 === n && (n = this.z),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        this
      );
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setComponent(t, e) {
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
          throw new Error('index is out of range: ' + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error('index is out of range: ' + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
    }
    add(t) {
      return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
      );
    }
    sub(t) {
      return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
      );
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), this;
    }
    multiplyVectors(t, e) {
      return (
        (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
      );
    }
    applyEuler(t) {
      return this.applyQuaternion(_e.setFromEuler(t));
    }
    applyAxisAngle(t, e) {
      return this.applyQuaternion(_e.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[3] * n + r[6] * i),
        (this.y = r[1] * e + r[4] * n + r[7] * i),
        (this.z = r[2] * e + r[5] * n + r[8] * i),
        this
      );
    }
    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return (
        (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
        (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
        (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
        this
      );
    }
    applyQuaternion(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.x,
        a = t.y,
        s = t.z,
        o = t.w,
        l = 2 * (a * i - s * n),
        c = 2 * (s * e - r * i),
        h = 2 * (r * n - a * e);
      return (
        (this.x = e + o * l + a * h - s * c),
        (this.y = n + o * c + s * l - r * h),
        (this.z = i + o * h + r * c - a * l),
        this
      );
    }
    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
        t.projectionMatrix
      );
    }
    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
        t.matrixWorld
      );
    }
    transformDirection(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[4] * n + r[8] * i),
        (this.y = r[1] * e + r[5] * n + r[9] * i),
        (this.z = r[2] * e + r[6] * n + r[10] * i),
        this.normalize()
      );
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        this
      );
    }
    cross(t) {
      return this.crossVectors(this, t);
    }
    crossVectors(t, e) {
      const n = t.x,
        i = t.y,
        r = t.z,
        a = e.x,
        s = e.y,
        o = e.z;
      return (
        (this.x = i * o - r * s),
        (this.y = r * a - n * o),
        (this.z = n * s - i * a),
        this
      );
    }
    projectOnVector(t) {
      const e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    }
    projectOnPlane(t) {
      return ge.copy(this).projectOnVector(t), this.sub(ge);
    }
    reflect(t) {
      return this.sub(ge.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(Ot(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y,
        i = this.z - t.z;
      return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t) {
      return (
        Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      );
    }
    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, n) {
      const i = Math.sin(e) * t;
      return (
        (this.x = i * Math.sin(n)),
        (this.y = Math.cos(e) * t),
        (this.z = i * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, n) {
      return (
        (this.x = t * Math.sin(e)),
        (this.y = n),
        (this.z = t * Math.cos(e)),
        this
      );
    }
    setFromMatrixPosition(t) {
      const e = t.elements;
      return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
    }
    setFromMatrixScale(t) {
      const e = this.setFromMatrixColumn(t, 0).length(),
        n = this.setFromMatrixColumn(t, 1).length(),
        i = this.setFromMatrixColumn(t, 2).length();
      return (this.x = e), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, 4 * e);
    }
    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, 3 * e);
    }
    setFromEuler(t) {
      return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
    }
    setFromColor(t) {
      return (this.x = t.r), (this.y = t.g), (this.z = t.b), this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      const t = Math.random() * Math.PI * 2,
        e = 2 * Math.random() - 1,
        n = Math.sqrt(1 - e * e);
      return (
        (this.x = n * Math.cos(t)),
        (this.y = e),
        (this.z = n * Math.sin(t)),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const ge = new me(),
    _e = new fe();
  class ve {
    constructor(
      t = new me(1 / 0, 1 / 0, 1 / 0),
      e = new me(-1 / 0, -1 / 0, -1 / 0)
    ) {
      (this.isBox3 = !0), (this.min = t), (this.max = e);
    }
    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }
    setFromArray(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e += 3)
        this.expandByPoint(Me.fromArray(t, e));
      return this;
    }
    setFromBufferAttribute(t) {
      this.makeEmpty();
      for (let e = 0, n = t.count; e < n; e++)
        this.expandByPoint(Me.fromBufferAttribute(t, e));
      return this;
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      const n = Me.copy(e).multiplyScalar(0.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    }
    setFromObject(t, e = !1) {
      return this.makeEmpty(), this.expandByObject(t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(t) {
      return this.isEmpty()
        ? t.set(0, 0, 0)
        : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this;
    }
    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this;
    }
    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }
    expandByObject(t, e = !1) {
      t.updateWorldMatrix(!1, !1);
      const n = t.geometry;
      if (void 0 !== n) {
        const i = n.getAttribute('position');
        if (!0 === e && void 0 !== i && !0 !== t.isInstancedMesh)
          for (let e = 0, n = i.count; e < n; e++)
            !0 === t.isMesh
              ? t.getVertexPosition(e, Me)
              : Me.fromBufferAttribute(i, e),
              Me.applyMatrix4(t.matrixWorld),
              this.expandByPoint(Me);
        else
          void 0 !== t.boundingBox
            ? (null === t.boundingBox && t.computeBoundingBox(),
              Se.copy(t.boundingBox))
            : (null === n.boundingBox && n.computeBoundingBox(),
              Se.copy(n.boundingBox)),
            Se.applyMatrix4(t.matrixWorld),
            this.union(Se);
      }
      const i = t.children;
      for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
      return this;
    }
    containsPoint(t) {
      return !(
        t.x < this.min.x ||
        t.x > this.max.x ||
        t.y < this.min.y ||
        t.y > this.max.y ||
        t.z < this.min.z ||
        t.z > this.max.z
      );
    }
    containsBox(t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y &&
        this.min.z <= t.min.z &&
        t.max.z <= this.max.z
      );
    }
    getParameter(t, e) {
      return e.set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
        (t.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y ||
        t.max.z < this.min.z ||
        t.min.z > this.max.z
      );
    }
    intersectsSphere(t) {
      return (
        this.clampPoint(t.center, Me),
        Me.distanceToSquared(t.center) <= t.radius * t.radius
      );
    }
    intersectsPlane(t) {
      let e, n;
      return (
        t.normal.x > 0
          ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
          : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
        t.normal.y > 0
          ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
          : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
        t.normal.z > 0
          ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
          : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
        e <= -t.constant && n >= -t.constant
      );
    }
    intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      this.getCenter(Re),
        Ce.subVectors(this.max, Re),
        Ee.subVectors(t.a, Re),
        Te.subVectors(t.b, Re),
        ye.subVectors(t.c, Re),
        be.subVectors(Te, Ee),
        Ae.subVectors(ye, Te),
        we.subVectors(Ee, ye);
      let e = [
        0,
        -be.z,
        be.y,
        0,
        -Ae.z,
        Ae.y,
        0,
        -we.z,
        we.y,
        be.z,
        0,
        -be.x,
        Ae.z,
        0,
        -Ae.x,
        we.z,
        0,
        -we.x,
        -be.y,
        be.x,
        0,
        -Ae.y,
        Ae.x,
        0,
        -we.y,
        we.x,
        0,
      ];
      return (
        !!Ue(e, Ee, Te, ye, Ce) &&
        ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        !!Ue(e, Ee, Te, ye, Ce) &&
          (Le.crossVectors(be, Ae),
          (e = [Le.x, Le.y, Le.z]),
          Ue(e, Ee, Te, ye, Ce)))
      );
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return this.clampPoint(t, Me).distanceTo(t);
    }
    getBoundingSphere(t) {
      return (
        this.isEmpty()
          ? t.makeEmpty()
          : (this.getCenter(t.center),
            (t.radius = 0.5 * this.getSize(Me).length())),
        t
      );
    }
    intersect(t) {
      return (
        this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }
    applyMatrix4(t) {
      return (
        this.isEmpty() ||
          (xe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
          xe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
          xe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
          xe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
          xe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
          xe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
          xe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
          xe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
          this.setFromPoints(xe)),
        this
      );
    }
    translate(t) {
      return this.min.add(t), this.max.add(t), this;
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  }
  const xe = [
      new me(),
      new me(),
      new me(),
      new me(),
      new me(),
      new me(),
      new me(),
      new me(),
    ],
    Me = new me(),
    Se = new ve(),
    Ee = new me(),
    Te = new me(),
    ye = new me(),
    be = new me(),
    Ae = new me(),
    we = new me(),
    Re = new me(),
    Ce = new me(),
    Le = new me(),
    Pe = new me();
  function Ue(t, e, n, i, r) {
    for (let a = 0, s = t.length - 3; a <= s; a += 3) {
      Pe.fromArray(t, a);
      const s =
          r.x * Math.abs(Pe.x) + r.y * Math.abs(Pe.y) + r.z * Math.abs(Pe.z),
        o = e.dot(Pe),
        l = n.dot(Pe),
        c = i.dot(Pe);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
    }
    return !0;
  }
  const De = new ve(),
    Ne = new me(),
    Ie = new me();
  class Oe {
    constructor(t = new me(), e = -1) {
      (this.isSphere = !0), (this.center = t), (this.radius = e);
    }
    set(t, e) {
      return this.center.copy(t), (this.radius = e), this;
    }
    setFromPoints(t, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : De.setFromPoints(t).getCenter(n);
      let i = 0;
      for (let e = 0, r = t.length; e < r; e++)
        i = Math.max(i, n.distanceToSquared(t[e]));
      return (this.radius = Math.sqrt(i)), this;
    }
    copy(t) {
      return this.center.copy(t.center), (this.radius = t.radius), this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      const e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      const n = this.center.distanceToSquared(t);
      return (
        e.copy(t),
        n > this.radius * this.radius &&
          (e.sub(this.center).normalize(),
          e.multiplyScalar(this.radius).add(this.center)),
        e
      );
    }
    getBoundingBox(t) {
      return this.isEmpty()
        ? (t.makeEmpty(), t)
        : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }
    applyMatrix4(t) {
      return (
        this.center.applyMatrix4(t),
        (this.radius = this.radius * t.getMaxScaleOnAxis()),
        this
      );
    }
    translate(t) {
      return this.center.add(t), this;
    }
    expandByPoint(t) {
      if (this.isEmpty()) return this.center.copy(t), (this.radius = 0), this;
      Ne.subVectors(t, this.center);
      const e = Ne.lengthSq();
      if (e > this.radius * this.radius) {
        const t = Math.sqrt(e),
          n = 0.5 * (t - this.radius);
        this.center.addScaledVector(Ne, n / t), (this.radius += n);
      }
      return this;
    }
    union(t) {
      return t.isEmpty()
        ? this
        : this.isEmpty()
          ? (this.copy(t), this)
          : (!0 === this.center.equals(t.center)
              ? (this.radius = Math.max(this.radius, t.radius))
              : (Ie.subVectors(t.center, this.center).setLength(t.radius),
                this.expandByPoint(Ne.copy(t.center).add(Ie)),
                this.expandByPoint(Ne.copy(t.center).sub(Ie))),
            this);
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Fe = new me(),
    Be = new me(),
    ze = new me(),
    He = new me(),
    Ge = new me(),
    Ve = new me(),
    ke = new me();
  class We {
    constructor(t = new me(), e = new me(0, 0, -1)) {
      (this.origin = t), (this.direction = e);
    }
    set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }
    copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }
    at(t, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t);
    }
    lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }
    recast(t) {
      return this.origin.copy(this.at(t, Fe)), this;
    }
    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      const n = e.dot(this.direction);
      return n < 0
        ? e.copy(this.origin)
        : e.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      const e = Fe.subVectors(t, this.origin).dot(this.direction);
      return e < 0
        ? this.origin.distanceToSquared(t)
        : (Fe.copy(this.origin).addScaledVector(this.direction, e),
          Fe.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n, i) {
      Be.copy(t).add(e).multiplyScalar(0.5),
        ze.copy(e).sub(t).normalize(),
        He.copy(this.origin).sub(Be);
      const r = 0.5 * t.distanceTo(e),
        a = -this.direction.dot(ze),
        s = He.dot(this.direction),
        o = -He.dot(ze),
        l = He.lengthSq(),
        c = Math.abs(1 - a * a);
      let h, u, d, p;
      if (c > 0)
        if (((h = a * o - s), (u = a * s - o), (p = r * c), h >= 0))
          if (u >= -p)
            if (u <= p) {
              const t = 1 / c;
              (h *= t),
                (u *= t),
                (d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l);
            } else
              (u = r),
                (h = Math.max(0, -(a * u + s))),
                (d = -h * h + u * (u + 2 * o) + l);
          else
            (u = -r),
              (h = Math.max(0, -(a * u + s))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          u <= -p
            ? ((h = Math.max(0, -(-a * r + s))),
              (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l))
            : u <= p
              ? ((h = 0),
                (u = Math.min(Math.max(-r, -o), r)),
                (d = u * (u + 2 * o) + l))
              : ((h = Math.max(0, -(a * r + s))),
                (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
                (d = -h * h + u * (u + 2 * o) + l));
      else
        (u = a > 0 ? -r : r),
          (h = Math.max(0, -(a * u + s))),
          (d = -h * h + u * (u + 2 * o) + l);
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, h),
        i && i.copy(Be).addScaledVector(ze, u),
        d
      );
    }
    intersectSphere(t, e) {
      Fe.subVectors(t.center, this.origin);
      const n = Fe.dot(this.direction),
        i = Fe.dot(Fe) - n * n,
        r = t.radius * t.radius;
      if (i > r) return null;
      const a = Math.sqrt(r - i),
        s = n - a,
        o = n + a;
      return o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e);
    }
    intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      const e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t, e) {
      const n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t) {
      const e = t.distanceToPoint(this.origin);
      if (0 === e) return !0;
      return t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let n, i, r, a, s, o;
      const l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return (
        l >= 0
          ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
          : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
        c >= 0
          ? ((r = (t.min.y - u.y) * c), (a = (t.max.y - u.y) * c))
          : ((r = (t.max.y - u.y) * c), (a = (t.min.y - u.y) * c)),
        n > a || r > i
          ? null
          : ((r > n || isNaN(n)) && (n = r),
            (a < i || isNaN(i)) && (i = a),
            h >= 0
              ? ((s = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
              : ((s = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
            n > o || s > i
              ? null
              : ((s > n || n != n) && (n = s),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, e)))
      );
    }
    intersectsBox(t) {
      return null !== this.intersectBox(t, Fe);
    }
    intersectTriangle(t, e, n, i, r) {
      Ge.subVectors(e, t), Ve.subVectors(n, t), ke.crossVectors(Ge, Ve);
      let a,
        s = this.direction.dot(ke);
      if (s > 0) {
        if (i) return null;
        a = 1;
      } else {
        if (!(s < 0)) return null;
        (a = -1), (s = -s);
      }
      He.subVectors(this.origin, t);
      const o = a * this.direction.dot(Ve.crossVectors(He, Ve));
      if (o < 0) return null;
      const l = a * this.direction.dot(Ge.cross(He));
      if (l < 0) return null;
      if (o + l > s) return null;
      const c = -a * He.dot(ke);
      return c < 0 ? null : this.at(c / s, r);
    }
    applyMatrix4(t) {
      return (
        this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
      );
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Xe {
    constructor(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
      (Xe.prototype.isMatrix4 = !0),
        (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        void 0 !== t &&
          this.set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m);
    }
    set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
      const g = this.elements;
      return (
        (g[0] = t),
        (g[4] = e),
        (g[8] = n),
        (g[12] = i),
        (g[1] = r),
        (g[5] = a),
        (g[9] = s),
        (g[13] = o),
        (g[2] = l),
        (g[6] = c),
        (g[10] = h),
        (g[14] = u),
        (g[3] = d),
        (g[7] = p),
        (g[11] = f),
        (g[15] = m),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new Xe().fromArray(this.elements);
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        (e[9] = n[9]),
        (e[10] = n[10]),
        (e[11] = n[11]),
        (e[12] = n[12]),
        (e[13] = n[13]),
        (e[14] = n[14]),
        (e[15] = n[15]),
        this
      );
    }
    copyPosition(t) {
      const e = this.elements,
        n = t.elements;
      return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
    }
    setFromMatrix3(t) {
      const e = t.elements;
      return (
        this.set(
          e[0],
          e[3],
          e[6],
          0,
          e[1],
          e[4],
          e[7],
          0,
          e[2],
          e[5],
          e[8],
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(t, e, n) {
      return (
        this.set(
          t.x,
          e.x,
          n.x,
          0,
          t.y,
          e.y,
          n.y,
          0,
          t.z,
          e.z,
          n.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractRotation(t) {
      const e = this.elements,
        n = t.elements,
        i = 1 / je.setFromMatrixColumn(t, 0).length(),
        r = 1 / je.setFromMatrixColumn(t, 1).length(),
        a = 1 / je.setFromMatrixColumn(t, 2).length();
      return (
        (e[0] = n[0] * i),
        (e[1] = n[1] * i),
        (e[2] = n[2] * i),
        (e[3] = 0),
        (e[4] = n[4] * r),
        (e[5] = n[5] * r),
        (e[6] = n[6] * r),
        (e[7] = 0),
        (e[8] = n[8] * a),
        (e[9] = n[9] * a),
        (e[10] = n[10] * a),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromEuler(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z,
        a = Math.cos(n),
        s = Math.sin(n),
        o = Math.cos(i),
        l = Math.sin(i),
        c = Math.cos(r),
        h = Math.sin(r);
      if ('XYZ' === t.order) {
        const t = a * c,
          n = a * h,
          i = s * c,
          r = s * h;
        (e[0] = o * c),
          (e[4] = -o * h),
          (e[8] = l),
          (e[1] = n + i * l),
          (e[5] = t - r * l),
          (e[9] = -s * o),
          (e[2] = r - t * l),
          (e[6] = i + n * l),
          (e[10] = a * o);
      } else if ('YXZ' === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t + r * s),
          (e[4] = i * s - n),
          (e[8] = a * l),
          (e[1] = a * h),
          (e[5] = a * c),
          (e[9] = -s),
          (e[2] = n * s - i),
          (e[6] = r + t * s),
          (e[10] = a * o);
      } else if ('ZXY' === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t - r * s),
          (e[4] = -a * h),
          (e[8] = i + n * s),
          (e[1] = n + i * s),
          (e[5] = a * c),
          (e[9] = r - t * s),
          (e[2] = -a * l),
          (e[6] = s),
          (e[10] = a * o);
      } else if ('ZYX' === t.order) {
        const t = a * c,
          n = a * h,
          i = s * c,
          r = s * h;
        (e[0] = o * c),
          (e[4] = i * l - n),
          (e[8] = t * l + r),
          (e[1] = o * h),
          (e[5] = r * l + t),
          (e[9] = n * l - i),
          (e[2] = -l),
          (e[6] = s * o),
          (e[10] = a * o);
      } else if ('YZX' === t.order) {
        const t = a * o,
          n = a * l,
          i = s * o,
          r = s * l;
        (e[0] = o * c),
          (e[4] = r - t * h),
          (e[8] = i * h + n),
          (e[1] = h),
          (e[5] = a * c),
          (e[9] = -s * c),
          (e[2] = -l * c),
          (e[6] = n * h + i),
          (e[10] = t - r * h);
      } else if ('XZY' === t.order) {
        const t = a * o,
          n = a * l,
          i = s * o,
          r = s * l;
        (e[0] = o * c),
          (e[4] = -h),
          (e[8] = l * c),
          (e[1] = t * h + r),
          (e[5] = a * c),
          (e[9] = n * h - i),
          (e[2] = i * h - n),
          (e[6] = s * c),
          (e[10] = r * h + t);
      }
      return (
        (e[3] = 0),
        (e[7] = 0),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(t) {
      return this.compose(Ye, t, Ke);
    }
    lookAt(t, e, n) {
      const i = this.elements;
      return (
        $e.subVectors(t, e),
        0 === $e.lengthSq() && ($e.z = 1),
        $e.normalize(),
        Ze.crossVectors(n, $e),
        0 === Ze.lengthSq() &&
          (1 === Math.abs(n.z) ? ($e.x += 1e-4) : ($e.z += 1e-4),
          $e.normalize(),
          Ze.crossVectors(n, $e)),
        Ze.normalize(),
        Je.crossVectors($e, Ze),
        (i[0] = Ze.x),
        (i[4] = Je.x),
        (i[8] = $e.x),
        (i[1] = Ze.y),
        (i[5] = Je.y),
        (i[9] = $e.y),
        (i[2] = Ze.z),
        (i[6] = Je.z),
        (i[10] = $e.z),
        this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        s = n[4],
        o = n[8],
        l = n[12],
        c = n[1],
        h = n[5],
        u = n[9],
        d = n[13],
        p = n[2],
        f = n[6],
        m = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        x = n[11],
        M = n[15],
        S = i[0],
        E = i[4],
        T = i[8],
        y = i[12],
        b = i[1],
        A = i[5],
        w = i[9],
        R = i[13],
        C = i[2],
        L = i[6],
        P = i[10],
        U = i[14],
        D = i[3],
        N = i[7],
        I = i[11],
        O = i[15];
      return (
        (r[0] = a * S + s * b + o * C + l * D),
        (r[4] = a * E + s * A + o * L + l * N),
        (r[8] = a * T + s * w + o * P + l * I),
        (r[12] = a * y + s * R + o * U + l * O),
        (r[1] = c * S + h * b + u * C + d * D),
        (r[5] = c * E + h * A + u * L + d * N),
        (r[9] = c * T + h * w + u * P + d * I),
        (r[13] = c * y + h * R + u * U + d * O),
        (r[2] = p * S + f * b + m * C + g * D),
        (r[6] = p * E + f * A + m * L + g * N),
        (r[10] = p * T + f * w + m * P + g * I),
        (r[14] = p * y + f * R + m * U + g * O),
        (r[3] = _ * S + v * b + x * C + M * D),
        (r[7] = _ * E + v * A + x * L + M * N),
        (r[11] = _ * T + v * w + x * P + M * I),
        (r[15] = _ * y + v * R + x * U + M * O),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[4] *= t),
        (e[8] *= t),
        (e[12] *= t),
        (e[1] *= t),
        (e[5] *= t),
        (e[9] *= t),
        (e[13] *= t),
        (e[2] *= t),
        (e[6] *= t),
        (e[10] *= t),
        (e[14] *= t),
        (e[3] *= t),
        (e[7] *= t),
        (e[11] *= t),
        (e[15] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[4],
        i = t[8],
        r = t[12],
        a = t[1],
        s = t[5],
        o = t[9],
        l = t[13],
        c = t[2],
        h = t[6],
        u = t[10],
        d = t[14];
      return (
        t[3] *
          (+r * o * h -
            i * l * h -
            r * s * u +
            n * l * u +
            i * s * d -
            n * o * d) +
        t[7] *
          (+e * o * d -
            e * l * u +
            r * a * u -
            i * a * d +
            i * l * c -
            r * o * c) +
        t[11] *
          (+e * l * h -
            e * s * d -
            r * a * h +
            n * a * d +
            r * s * c -
            n * l * c) +
        t[15] *
          (-i * s * c -
            e * o * h +
            e * s * u +
            i * a * h -
            n * a * u +
            n * o * c)
      );
    }
    transpose() {
      const t = this.elements;
      let e;
      return (
        (e = t[1]),
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    }
    setPosition(t, e, n) {
      const i = this.elements;
      return (
        t.isVector3
          ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
          : ((i[12] = t), (i[13] = e), (i[14] = n)),
        this
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = t[9],
        u = t[10],
        d = t[11],
        p = t[12],
        f = t[13],
        m = t[14],
        g = t[15],
        _ =
          h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g,
        v =
          p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g,
        x =
          c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g,
        M =
          p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m,
        S = e * _ + n * v + i * x + r * M;
      if (0 === S)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const E = 1 / S;
      return (
        (t[0] = _ * E),
        (t[1] =
          (f * u * r -
            h * m * r -
            f * i * d +
            n * m * d +
            h * i * g -
            n * u * g) *
          E),
        (t[2] =
          (s * m * r -
            f * o * r +
            f * i * l -
            n * m * l -
            s * i * g +
            n * o * g) *
          E),
        (t[3] =
          (h * o * r -
            s * u * r -
            h * i * l +
            n * u * l +
            s * i * d -
            n * o * d) *
          E),
        (t[4] = v * E),
        (t[5] =
          (c * m * r -
            p * u * r +
            p * i * d -
            e * m * d -
            c * i * g +
            e * u * g) *
          E),
        (t[6] =
          (p * o * r -
            a * m * r -
            p * i * l +
            e * m * l +
            a * i * g -
            e * o * g) *
          E),
        (t[7] =
          (a * u * r -
            c * o * r +
            c * i * l -
            e * u * l -
            a * i * d +
            e * o * d) *
          E),
        (t[8] = x * E),
        (t[9] =
          (p * h * r -
            c * f * r -
            p * n * d +
            e * f * d +
            c * n * g -
            e * h * g) *
          E),
        (t[10] =
          (a * f * r -
            p * s * r +
            p * n * l -
            e * f * l -
            a * n * g +
            e * s * g) *
          E),
        (t[11] =
          (c * s * r -
            a * h * r -
            c * n * l +
            e * h * l +
            a * n * d -
            e * s * d) *
          E),
        (t[12] = M * E),
        (t[13] =
          (c * f * i -
            p * h * i +
            p * n * u -
            e * f * u -
            c * n * m +
            e * h * m) *
          E),
        (t[14] =
          (p * s * i -
            a * f * i -
            p * n * o +
            e * f * o +
            a * n * m -
            e * s * m) *
          E),
        (t[15] =
          (a * h * i -
            c * s * i +
            c * n * o -
            e * h * o -
            a * n * u +
            e * s * u) *
          E),
        this
      );
    }
    scale(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z;
      return (
        (e[0] *= n),
        (e[4] *= i),
        (e[8] *= r),
        (e[1] *= n),
        (e[5] *= i),
        (e[9] *= r),
        (e[2] *= n),
        (e[6] *= i),
        (e[10] *= r),
        (e[3] *= n),
        (e[7] *= i),
        (e[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      const t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t, e, n) {
      return (
        t.isVector3
          ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
          : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
        this
      );
    }
    makeRotationX(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = 1 - n,
        a = t.x,
        s = t.y,
        o = t.z,
        l = r * a,
        c = r * s;
      return (
        this.set(
          l * a + n,
          l * s - i * o,
          l * o + i * s,
          0,
          l * s + i * o,
          c * s + n,
          c * o - i * a,
          0,
          l * o - i * s,
          c * o + i * a,
          r * o * o + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(t, e, n) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t, e, n, i, r, a) {
      return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t, e, n) {
      const i = this.elements,
        r = e._x,
        a = e._y,
        s = e._z,
        o = e._w,
        l = r + r,
        c = a + a,
        h = s + s,
        u = r * l,
        d = r * c,
        p = r * h,
        f = a * c,
        m = a * h,
        g = s * h,
        _ = o * l,
        v = o * c,
        x = o * h,
        M = n.x,
        S = n.y,
        E = n.z;
      return (
        (i[0] = (1 - (f + g)) * M),
        (i[1] = (d + x) * M),
        (i[2] = (p - v) * M),
        (i[3] = 0),
        (i[4] = (d - x) * S),
        (i[5] = (1 - (u + g)) * S),
        (i[6] = (m + _) * S),
        (i[7] = 0),
        (i[8] = (p + v) * E),
        (i[9] = (m - _) * E),
        (i[10] = (1 - (u + f)) * E),
        (i[11] = 0),
        (i[12] = t.x),
        (i[13] = t.y),
        (i[14] = t.z),
        (i[15] = 1),
        this
      );
    }
    decompose(t, e, n) {
      const i = this.elements;
      let r = je.set(i[0], i[1], i[2]).length();
      const a = je.set(i[4], i[5], i[6]).length(),
        s = je.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r),
        (t.x = i[12]),
        (t.y = i[13]),
        (t.z = i[14]),
        qe.copy(this);
      const o = 1 / r,
        l = 1 / a,
        c = 1 / s;
      return (
        (qe.elements[0] *= o),
        (qe.elements[1] *= o),
        (qe.elements[2] *= o),
        (qe.elements[4] *= l),
        (qe.elements[5] *= l),
        (qe.elements[6] *= l),
        (qe.elements[8] *= c),
        (qe.elements[9] *= c),
        (qe.elements[10] *= c),
        e.setFromRotationMatrix(qe),
        (n.x = r),
        (n.y = a),
        (n.z = s),
        this
      );
    }
    makePerspective(t, e, n, i, r, a, s = 2e3) {
      const o = this.elements,
        l = (2 * r) / (e - t),
        c = (2 * r) / (n - i),
        h = (e + t) / (e - t),
        u = (n + i) / (n - i);
      let d, p;
      if (s === Ct) (d = -(a + r) / (a - r)), (p = (-2 * a * r) / (a - r));
      else {
        if (s !== Lt)
          throw new Error(
            'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + s
          );
        (d = -a / (a - r)), (p = (-a * r) / (a - r));
      }
      return (
        (o[0] = l),
        (o[4] = 0),
        (o[8] = h),
        (o[12] = 0),
        (o[1] = 0),
        (o[5] = c),
        (o[9] = u),
        (o[13] = 0),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = d),
        (o[14] = p),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = -1),
        (o[15] = 0),
        this
      );
    }
    makeOrthographic(t, e, n, i, r, a, s = 2e3) {
      const o = this.elements,
        l = 1 / (e - t),
        c = 1 / (n - i),
        h = 1 / (a - r),
        u = (e + t) * l,
        d = (n + i) * c;
      let p, f;
      if (s === Ct) (p = (a + r) * h), (f = -2 * h);
      else {
        if (s !== Lt)
          throw new Error(
            'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + s
          );
        (p = r * h), (f = -1 * h);
      }
      return (
        (o[0] = 2 * l),
        (o[4] = 0),
        (o[8] = 0),
        (o[12] = -u),
        (o[1] = 0),
        (o[5] = 2 * c),
        (o[9] = 0),
        (o[13] = -d),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = f),
        (o[14] = -p),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = 0),
        (o[15] = 1),
        this
      );
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        (t[e + 9] = n[9]),
        (t[e + 10] = n[10]),
        (t[e + 11] = n[11]),
        (t[e + 12] = n[12]),
        (t[e + 13] = n[13]),
        (t[e + 14] = n[14]),
        (t[e + 15] = n[15]),
        t
      );
    }
  }
  const je = new me(),
    qe = new Xe(),
    Ye = new me(0, 0, 0),
    Ke = new me(1, 1, 1),
    Ze = new me(),
    Je = new me(),
    $e = new me(),
    Qe = new Xe(),
    tn = new fe();
  class en {
    constructor(t = 0, e = 0, n = 0, i = en.DEFAULT_ORDER) {
      (this.isEuler = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i);
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t) {
      (this._order = t), this._onChangeCallback();
    }
    set(t, e, n, i = this._order) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return (
        (this._x = t._x),
        (this._y = t._y),
        (this._z = t._z),
        (this._order = t._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t, e = this._order, n = !0) {
      const i = t.elements,
        r = i[0],
        a = i[4],
        s = i[8],
        o = i[1],
        l = i[5],
        c = i[9],
        h = i[2],
        u = i[6],
        d = i[10];
      switch (e) {
        case 'XYZ':
          (this._y = Math.asin(Ot(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-a, r)))
              : ((this._x = Math.atan2(u, l)), (this._z = 0));
          break;
        case 'YXZ':
          (this._x = Math.asin(-Ot(c, -1, 1))),
            Math.abs(c) < 0.9999999
              ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(o, l)))
              : ((this._y = Math.atan2(-h, r)), (this._z = 0));
          break;
        case 'ZXY':
          (this._x = Math.asin(Ot(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-a, l)))
              : ((this._y = 0), (this._z = Math.atan2(o, r)));
          break;
        case 'ZYX':
          (this._y = Math.asin(-Ot(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
              : ((this._x = 0), (this._z = Math.atan2(-a, l)));
          break;
        case 'YZX':
          (this._z = Math.asin(Ot(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
              : ((this._x = 0), (this._y = Math.atan2(s, d)));
          break;
        case 'XZY':
          (this._z = Math.asin(-Ot(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
              : ((this._x = Math.atan2(-c, d)), (this._y = 0));
          break;
        default:
          console.warn(
            'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' +
              e
          );
      }
      return (this._order = e), !0 === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t, e, n) {
      return (
        Qe.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Qe, e, n)
      );
    }
    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
      return tn.setFromEuler(this), this.setFromQuaternion(tn, t);
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._order === this._order
      );
    }
    fromArray(t) {
      return (
        (this._x = t[0]),
        (this._y = t[1]),
        (this._z = t[2]),
        void 0 !== t[3] && (this._order = t[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._order),
        t
      );
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  en.DEFAULT_ORDER = 'XYZ';
  class nn {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = (1 << t) >>> 0;
    }
    enable(t) {
      this.mask |= 1 << t;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= 1 << t;
    }
    disable(t) {
      this.mask &= ~(1 << t);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return !!(this.mask & t.mask);
    }
    isEnabled(t) {
      return !!(this.mask & (1 << t));
    }
  }
  let rn = 0;
  const an = new me(),
    sn = new fe(),
    on = new Xe(),
    ln = new me(),
    cn = new me(),
    hn = new me(),
    un = new fe(),
    dn = new me(1, 0, 0),
    pn = new me(0, 1, 0),
    fn = new me(0, 0, 1),
    mn = { type: 'added' },
    gn = { type: 'removed' },
    _n = { type: 'childadded', child: null },
    vn = { type: 'childremoved', child: null };
  class xn extends Pt {
    constructor() {
      super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, 'id', { value: rn++ }),
        (this.uuid = It()),
        (this.name = ''),
        (this.type = 'Object3D'),
        (this.parent = null),
        (this.children = []),
        (this.up = xn.DEFAULT_UP.clone());
      const t = new me(),
        e = new en(),
        n = new fe(),
        i = new me(1, 1, 1);
      e._onChange(function () {
        n.setFromEuler(e, !1);
      }),
        n._onChange(function () {
          e.setFromQuaternion(n, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: e },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new Xe() },
          normalMatrix: { value: new kt() },
        }),
        (this.matrix = new Xe()),
        (this.matrixWorld = new Xe()),
        (this.matrixAutoUpdate = xn.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldAutoUpdate = xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new nn()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {});
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return sn.setFromAxisAngle(t, e), this.quaternion.multiply(sn), this;
    }
    rotateOnWorldAxis(t, e) {
      return sn.setFromAxisAngle(t, e), this.quaternion.premultiply(sn), this;
    }
    rotateX(t) {
      return this.rotateOnAxis(dn, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(pn, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(fn, t);
    }
    translateOnAxis(t, e) {
      return (
        an.copy(t).applyQuaternion(this.quaternion),
        this.position.add(an.multiplyScalar(e)),
        this
      );
    }
    translateX(t) {
      return this.translateOnAxis(dn, t);
    }
    translateY(t) {
      return this.translateOnAxis(pn, t);
    }
    translateZ(t) {
      return this.translateOnAxis(fn, t);
    }
    localToWorld(t) {
      return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(on.copy(this.matrixWorld).invert())
      );
    }
    lookAt(t, e, n) {
      t.isVector3 ? ln.copy(t) : ln.set(t, e, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1),
        cn.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? on.lookAt(cn, ln, this.up)
          : on.lookAt(ln, cn, this.up),
        this.quaternion.setFromRotationMatrix(on),
        i &&
          (on.extractRotation(i.matrixWorld),
          sn.setFromRotationMatrix(on),
          this.quaternion.premultiply(sn.invert()));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return t === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            t
          ),
          this)
        : (t && t.isObject3D
            ? (null !== t.parent && t.parent.remove(t),
              (t.parent = this),
              this.children.push(t),
              t.dispatchEvent(mn),
              (_n.child = t),
              this.dispatchEvent(_n),
              (_n.child = null))
            : console.error(
                'THREE.Object3D.add: object not an instance of THREE.Object3D.',
                t
              ),
          this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        return this;
      }
      const e = this.children.indexOf(t);
      return (
        -1 !== e &&
          ((t.parent = null),
          this.children.splice(e, 1),
          t.dispatchEvent(gn),
          (vn.child = t),
          this.dispatchEvent(vn),
          (vn.child = null)),
        this
      );
    }
    removeFromParent() {
      const t = this.parent;
      return null !== t && t.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        on.copy(this.matrixWorld).invert(),
        null !== t.parent &&
          (t.parent.updateWorldMatrix(!0, !1),
          on.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(on),
        this.add(t),
        t.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(t) {
      return this.getObjectByProperty('id', t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty('name', t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i) return i;
      }
    }
    getObjectsByProperty(t, e, n = []) {
      this[t] === e && n.push(this);
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++)
        i[r].getObjectsByProperty(t, e, n);
      return n;
    }
    getWorldPosition(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(t) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(cn, t, hn), t
      );
    }
    getWorldScale(t) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(cn, un, t), t
      );
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {}
    traverse(t) {
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
    }
    traverseVisible(t) {
      if (!1 === this.visible) return;
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
    }
    traverseAncestors(t) {
      const e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (t = !0));
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) {
        const i = e[n];
        (!0 !== i.matrixWorldAutoUpdate && !0 !== t) || i.updateMatrixWorld(t);
      }
    }
    updateWorldMatrix(t, e) {
      const n = this.parent;
      if (
        (!0 === t &&
          null !== n &&
          !0 === n.matrixWorldAutoUpdate &&
          n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        !0 === e)
      ) {
        const t = this.children;
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0);
        }
      }
    }
    toJSON(t) {
      const e = void 0 === t || 'string' == typeof t,
        n = {};
      e &&
        ((t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.6,
          type: 'Object',
          generator: 'Object3D.toJSON',
        }));
      const i = {};
      function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
      }
      if (
        ((i.uuid = this.uuid),
        (i.type = this.type),
        '' !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        (i.up = this.up.toArray()),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = 'InstancedMesh'),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          null !== this.instanceColor &&
            (i.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh &&
          ((i.type = 'BatchedMesh'),
          (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
          (i.sortObjects = this.sortObjects),
          (i.drawRanges = this._drawRanges),
          (i.reservedRanges = this._reservedRanges),
          (i.visibility = this._visibility),
          (i.active = this._active),
          (i.bounds = this._bounds.map((t) => ({
            boxInitialized: t.boxInitialized,
            boxMin: t.box.min.toArray(),
            boxMax: t.box.max.toArray(),
            sphereInitialized: t.sphereInitialized,
            sphereRadius: t.sphere.radius,
            sphereCenter: t.sphere.center.toArray(),
          }))),
          (i.maxGeometryCount = this._maxGeometryCount),
          (i.maxVertexCount = this._maxVertexCount),
          (i.maxIndexCount = this._maxIndexCount),
          (i.geometryInitialized = this._geometryInitialized),
          (i.geometryCount = this._geometryCount),
          (i.matricesTexture = this._matricesTexture.toJSON(t)),
          null !== this.boundingSphere &&
            (i.boundingSphere = {
              center: i.boundingSphere.center.toArray(),
              radius: i.boundingSphere.radius,
            }),
          null !== this.boundingBox &&
            (i.boundingBox = {
              min: i.boundingBox.min.toArray(),
              max: i.boundingBox.max.toArray(),
            })),
        this.isScene)
      )
        this.background &&
          (this.background.isColor
            ? (i.background = this.background.toJSON())
            : this.background.isTexture &&
              (i.background = this.background.toJSON(t).uuid)),
          this.environment &&
            this.environment.isTexture &&
            !0 !== this.environment.isRenderTargetTexture &&
            (i.environment = this.environment.toJSON(t).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        const e = this.geometry.parameters;
        if (void 0 !== e && void 0 !== e.shapes) {
          const n = e.shapes;
          if (Array.isArray(n))
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              r(t.shapes, i);
            }
          else r(t.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          void 0 !== this.skeleton &&
            (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        void 0 !== this.material)
      )
        if (Array.isArray(this.material)) {
          const e = [];
          for (let n = 0, i = this.material.length; n < i; n++)
            e.push(r(t.materials, this.material[n]));
          i.material = e;
        } else i.material = r(t.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e = 0; e < this.children.length; e++)
          i.children.push(this.children[e].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e = 0; e < this.animations.length; e++) {
          const n = this.animations[e];
          i.animations.push(r(t.animations, n));
        }
      }
      if (e) {
        const e = a(t.geometries),
          i = a(t.materials),
          r = a(t.textures),
          s = a(t.images),
          o = a(t.shapes),
          l = a(t.skeletons),
          c = a(t.animations),
          h = a(t.nodes);
        e.length > 0 && (n.geometries = e),
          i.length > 0 && (n.materials = i),
          r.length > 0 && (n.textures = r),
          s.length > 0 && (n.images = s),
          o.length > 0 && (n.shapes = o),
          l.length > 0 && (n.skeletons = l),
          c.length > 0 && (n.animations = c),
          h.length > 0 && (n.nodes = h);
      }
      return (n.object = i), n;
      function a(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = !0) {
      if (
        ((this.name = t.name),
        this.up.copy(t.up),
        this.position.copy(t.position),
        (this.rotation.order = t.rotation.order),
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
        (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
        (this.layers.mask = t.layers.mask),
        (this.visible = t.visible),
        (this.castShadow = t.castShadow),
        (this.receiveShadow = t.receiveShadow),
        (this.frustumCulled = t.frustumCulled),
        (this.renderOrder = t.renderOrder),
        (this.animations = t.animations.slice()),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        !0 === e)
      )
        for (let e = 0; e < t.children.length; e++) {
          const n = t.children[e];
          this.add(n.clone());
        }
      return this;
    }
  }
  (xn.DEFAULT_UP = new me(0, 1, 0)),
    (xn.DEFAULT_MATRIX_AUTO_UPDATE = !0),
    (xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
  const Mn = new me(),
    Sn = new me(),
    En = new me(),
    Tn = new me(),
    yn = new me(),
    bn = new me(),
    An = new me(),
    wn = new me(),
    Rn = new me(),
    Cn = new me();
  class Ln {
    constructor(t = new me(), e = new me(), n = new me()) {
      (this.a = t), (this.b = e), (this.c = n);
    }
    static getNormal(t, e, n, i) {
      i.subVectors(n, e), Mn.subVectors(t, e), i.cross(Mn);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t, e, n, i, r) {
      Mn.subVectors(i, e), Sn.subVectors(n, e), En.subVectors(t, e);
      const a = Mn.dot(Mn),
        s = Mn.dot(Sn),
        o = Mn.dot(En),
        l = Sn.dot(Sn),
        c = Sn.dot(En),
        h = a * l - s * s;
      if (0 === h) return r.set(0, 0, 0), null;
      const u = 1 / h,
        d = (l * o - s * c) * u,
        p = (a * c - s * o) * u;
      return r.set(1 - d - p, p, d);
    }
    static containsPoint(t, e, n, i) {
      return (
        null !== this.getBarycoord(t, e, n, i, Tn) &&
        Tn.x >= 0 &&
        Tn.y >= 0 &&
        Tn.x + Tn.y <= 1
      );
    }
    static getInterpolation(t, e, n, i, r, a, s, o) {
      return null === this.getBarycoord(t, e, n, i, Tn)
        ? ((o.x = 0),
          (o.y = 0),
          'z' in o && (o.z = 0),
          'w' in o && (o.w = 0),
          null)
        : (o.setScalar(0),
          o.addScaledVector(r, Tn.x),
          o.addScaledVector(a, Tn.y),
          o.addScaledVector(s, Tn.z),
          o);
    }
    static isFrontFacing(t, e, n, i) {
      return Mn.subVectors(n, e), Sn.subVectors(t, e), Mn.cross(Sn).dot(i) < 0;
    }
    set(t, e, n) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t, e, n, i) {
      return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
    }
    setFromAttributeAndIndices(t, e, n, i) {
      return (
        this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, n),
        this.c.fromBufferAttribute(t, i),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }
    getArea() {
      return (
        Mn.subVectors(this.c, this.b),
        Sn.subVectors(this.a, this.b),
        0.5 * Mn.cross(Sn).length()
      );
    }
    getMidpoint(t) {
      return t
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return Ln.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
      return Ln.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getInterpolation(t, e, n, i, r) {
      return Ln.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t) {
      return Ln.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return Ln.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      const n = this.a,
        i = this.b,
        r = this.c;
      let a, s;
      yn.subVectors(i, n), bn.subVectors(r, n), wn.subVectors(t, n);
      const o = yn.dot(wn),
        l = bn.dot(wn);
      if (o <= 0 && l <= 0) return e.copy(n);
      Rn.subVectors(t, i);
      const c = yn.dot(Rn),
        h = bn.dot(Rn);
      if (c >= 0 && h <= c) return e.copy(i);
      const u = o * h - c * l;
      if (u <= 0 && o >= 0 && c <= 0)
        return (a = o / (o - c)), e.copy(n).addScaledVector(yn, a);
      Cn.subVectors(t, r);
      const d = yn.dot(Cn),
        p = bn.dot(Cn);
      if (p >= 0 && d <= p) return e.copy(r);
      const f = d * l - o * p;
      if (f <= 0 && l >= 0 && p <= 0)
        return (s = l / (l - p)), e.copy(n).addScaledVector(bn, s);
      const m = c * p - d * h;
      if (m <= 0 && h - c >= 0 && d - p >= 0)
        return (
          An.subVectors(r, i),
          (s = (h - c) / (h - c + (d - p))),
          e.copy(i).addScaledVector(An, s)
        );
      const g = 1 / (m + f + u);
      return (
        (a = f * g),
        (s = u * g),
        e.copy(n).addScaledVector(yn, a).addScaledVector(bn, s)
      );
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  }
  const Pn = {
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
      yellowgreen: 10145074,
    },
    Un = { h: 0, s: 0, l: 0 },
    Dn = { h: 0, s: 0, l: 0 };
  function Nn(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
          ? e
          : n < 2 / 3
            ? t + 6 * (e - t) * (2 / 3 - n)
            : t
    );
  }
  class In {
    constructor(t, e, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        this.set(t, e, n)
      );
    }
    set(t, e, n) {
      if (void 0 === e && void 0 === n) {
        const e = t;
        e && e.isColor
          ? this.copy(e)
          : 'number' == typeof e
            ? this.setHex(e)
            : 'string' == typeof e && this.setStyle(e);
      } else this.setRGB(t, e, n);
      return this;
    }
    setScalar(t) {
      return (this.r = t), (this.g = t), (this.b = t), this;
    }
    setHex(t, e = ht) {
      return (
        (t = Math.floor(t)),
        (this.r = ((t >> 16) & 255) / 255),
        (this.g = ((t >> 8) & 255) / 255),
        (this.b = (255 & t) / 255),
        Qt.toWorkingColorSpace(this, e),
        this
      );
    }
    setRGB(t, e, n, i = Qt.workingColorSpace) {
      return (
        (this.r = t),
        (this.g = e),
        (this.b = n),
        Qt.toWorkingColorSpace(this, i),
        this
      );
    }
    setHSL(t, e, n, i = Qt.workingColorSpace) {
      var r;
      if (
        ((t = ((t % (r = 1)) + r) % r),
        (e = Ot(e, 0, 1)),
        (n = Ot(n, 0, 1)),
        0 === e)
      )
        this.r = this.g = this.b = n;
      else {
        const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
          r = 2 * n - i;
        (this.r = Nn(r, i, t + 1 / 3)),
          (this.g = Nn(r, i, t)),
          (this.b = Nn(r, i, t - 1 / 3));
      }
      return Qt.toWorkingColorSpace(this, i), this;
    }
    setStyle(t, e = ht) {
      function n(e) {
        void 0 !== e &&
          parseFloat(e) < 1 &&
          console.warn(
            'THREE.Color: Alpha component of ' + t + ' will be ignored.'
          );
      }
      let i;
      if ((i = /^(\w+)\(([^\)]*)\)/.exec(t))) {
        let r;
        const a = i[1],
          s = i[2];
        switch (a) {
          case 'rgb':
          case 'rgba':
            if (
              (r =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setRGB(
                  Math.min(255, parseInt(r[1], 10)) / 255,
                  Math.min(255, parseInt(r[2], 10)) / 255,
                  Math.min(255, parseInt(r[3], 10)) / 255,
                  e
                )
              );
            if (
              (r =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setRGB(
                  Math.min(100, parseInt(r[1], 10)) / 100,
                  Math.min(100, parseInt(r[2], 10)) / 100,
                  Math.min(100, parseInt(r[3], 10)) / 100,
                  e
                )
              );
            break;
          case 'hsl':
          case 'hsla':
            if (
              (r =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setHSL(
                  parseFloat(r[1]) / 360,
                  parseFloat(r[2]) / 100,
                  parseFloat(r[3]) / 100,
                  e
                )
              );
            break;
          default:
            console.warn('THREE.Color: Unknown color model ' + t);
        }
      } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
        const n = i[1],
          r = n.length;
        if (3 === r)
          return this.setRGB(
            parseInt(n.charAt(0), 16) / 15,
            parseInt(n.charAt(1), 16) / 15,
            parseInt(n.charAt(2), 16) / 15,
            e
          );
        if (6 === r) return this.setHex(parseInt(n, 16), e);
        console.warn('THREE.Color: Invalid hex color ' + t);
      } else if (t && t.length > 0) return this.setColorName(t, e);
      return this;
    }
    setColorName(t, e = ht) {
      const n = Pn[t.toLowerCase()];
      return (
        void 0 !== n
          ? this.setHex(n, e)
          : console.warn('THREE.Color: Unknown color ' + t),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
      return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
    }
    copySRGBToLinear(t) {
      return (this.r = te(t.r)), (this.g = te(t.g)), (this.b = te(t.b)), this;
    }
    copyLinearToSRGB(t) {
      return (this.r = ee(t.r)), (this.g = ee(t.g)), (this.b = ee(t.b)), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t = ht) {
      return (
        Qt.fromWorkingColorSpace(On.copy(this), t),
        65536 * Math.round(Ot(255 * On.r, 0, 255)) +
          256 * Math.round(Ot(255 * On.g, 0, 255)) +
          Math.round(Ot(255 * On.b, 0, 255))
      );
    }
    getHexString(t = ht) {
      return ('000000' + this.getHex(t).toString(16)).slice(-6);
    }
    getHSL(t, e = Qt.workingColorSpace) {
      Qt.fromWorkingColorSpace(On.copy(this), e);
      const n = On.r,
        i = On.g,
        r = On.b,
        a = Math.max(n, i, r),
        s = Math.min(n, i, r);
      let o, l;
      const c = (s + a) / 2;
      if (s === a) (o = 0), (l = 0);
      else {
        const t = a - s;
        switch (((l = c <= 0.5 ? t / (a + s) : t / (2 - a - s)), a)) {
          case n:
            o = (i - r) / t + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / t + 2;
            break;
          case r:
            o = (n - i) / t + 4;
        }
        o /= 6;
      }
      return (t.h = o), (t.s = l), (t.l = c), t;
    }
    getRGB(t, e = Qt.workingColorSpace) {
      return (
        Qt.fromWorkingColorSpace(On.copy(this), e),
        (t.r = On.r),
        (t.g = On.g),
        (t.b = On.b),
        t
      );
    }
    getStyle(t = ht) {
      Qt.fromWorkingColorSpace(On.copy(this), t);
      const e = On.r,
        n = On.g,
        i = On.b;
      return t !== ht
        ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
        : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(255 * i)})`;
    }
    offsetHSL(t, e, n) {
      return this.getHSL(Un), this.setHSL(Un.h + t, Un.s + e, Un.l + n);
    }
    add(t) {
      return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
    }
    addColors(t, e) {
      return (
        (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
      );
    }
    addScalar(t) {
      return (this.r += t), (this.g += t), (this.b += t), this;
    }
    sub(t) {
      return (
        (this.r = Math.max(0, this.r - t.r)),
        (this.g = Math.max(0, this.g - t.g)),
        (this.b = Math.max(0, this.b - t.b)),
        this
      );
    }
    multiply(t) {
      return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
    }
    multiplyScalar(t) {
      return (this.r *= t), (this.g *= t), (this.b *= t), this;
    }
    lerp(t, e) {
      return (
        (this.r += (t.r - this.r) * e),
        (this.g += (t.g - this.g) * e),
        (this.b += (t.b - this.b) * e),
        this
      );
    }
    lerpColors(t, e, n) {
      return (
        (this.r = t.r + (e.r - t.r) * n),
        (this.g = t.g + (e.g - t.g) * n),
        (this.b = t.b + (e.b - t.b) * n),
        this
      );
    }
    lerpHSL(t, e) {
      this.getHSL(Un), t.getHSL(Dn);
      const n = Ft(Un.h, Dn.h, e),
        i = Ft(Un.s, Dn.s, e),
        r = Ft(Un.l, Dn.l, e);
      return this.setHSL(n, i, r), this;
    }
    setFromVector3(t) {
      return (this.r = t.x), (this.g = t.y), (this.b = t.z), this;
    }
    applyMatrix3(t) {
      const e = this.r,
        n = this.g,
        i = this.b,
        r = t.elements;
      return (
        (this.r = r[0] * e + r[3] * n + r[6] * i),
        (this.g = r[1] * e + r[4] * n + r[7] * i),
        (this.b = r[2] * e + r[5] * n + r[8] * i),
        this
      );
    }
    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
      return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const On = new In();
  In.NAMES = Pn;
  let Fn = 0;
  class Bn extends Pt {
    constructor() {
      super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, 'id', { value: Fn++ }),
        (this.uuid = It()),
        (this.name = ''),
        (this.type = 'Material'),
        (this.blending = 1),
        (this.side = r),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.alphaHash = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = o),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.blendColor = new In(0, 0, 0)),
        (this.blendAlpha = 0),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = vt),
        (this.stencilZFail = vt),
        (this.stencilZPass = vt),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.forceSinglePass = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0);
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t) {
      this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t) {
      if (void 0 !== t)
        for (const e in t) {
          const n = t[e];
          if (void 0 === n) {
            console.warn(
              `THREE.Material: parameter '${e}' has value of undefined.`
            );
            continue;
          }
          const i = this[e];
          void 0 !== i
            ? i && i.isColor
              ? i.set(n)
              : i && i.isVector3 && n && n.isVector3
                ? i.copy(n)
                : (this[e] = n)
            : console.warn(
                `THREE.Material: '${e}' is not a property of THREE.${this.type}.`
              );
        }
    }
    toJSON(t) {
      const e = void 0 === t || 'string' == typeof t;
      e && (t = { textures: {}, images: {} });
      const n = {
        metadata: {
          version: 4.6,
          type: 'Material',
          generator: 'Material.toJSON',
        },
      };
      function i(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
      if (
        ((n.uuid = this.uuid),
        (n.type = this.type),
        '' !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        void 0 !== this.sheen && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        void 0 !== this.sheenRoughness &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        void 0 !== this.emissiveIntensity &&
          1 !== this.emissiveIntensity &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        void 0 !== this.specularIntensity &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        void 0 !== this.iridescence && (n.iridescence = this.iridescence),
        void 0 !== this.iridescenceIOR &&
          (n.iridescenceIOR = this.iridescenceIOR),
        void 0 !== this.iridescenceThicknessRange &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(t).uuid),
        void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy),
        void 0 !== this.anisotropyRotation &&
          (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap &&
          this.anisotropyMap.isTexture &&
          (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(t).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(t).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(t).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(t).uuid),
          void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapRotation &&
          (n.envMapRotation = this.envMapRotation.toArray()),
        void 0 !== this.envMapIntensity &&
          (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        void 0 !== this.transmission && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        void 0 !== this.thickness && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        void 0 !== this.attenuationDistance &&
          this.attenuationDistance !== 1 / 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        void 0 !== this.attenuationColor &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation &&
          (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        this.side !== r && (n.side = this.side),
        !0 === this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = !0),
        204 !== this.blendSrc && (n.blendSrc = this.blendSrc),
        205 !== this.blendDst && (n.blendDst = this.blendDst),
        this.blendEquation !== o && (n.blendEquation = this.blendEquation),
        null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha),
        null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha),
        null !== this.blendEquationAlpha &&
          (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor &&
          this.blendColor.isColor &&
          (n.blendColor = this.blendColor.getHex()),
        0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha),
        3 !== this.depthFunc && (n.depthFunc = this.depthFunc),
        !1 === this.depthTest && (n.depthTest = this.depthTest),
        !1 === this.depthWrite && (n.depthWrite = this.depthWrite),
        !1 === this.colorWrite && (n.colorWrite = this.colorWrite),
        255 !== this.stencilWriteMask &&
          (n.stencilWriteMask = this.stencilWriteMask),
        519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc),
        0 !== this.stencilRef && (n.stencilRef = this.stencilRef),
        255 !== this.stencilFuncMask &&
          (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== vt && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== vt && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== vt && (n.stencilZPass = this.stencilZPass),
        !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite),
        void 0 !== this.rotation &&
          0 !== this.rotation &&
          (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        void 0 !== this.linewidth &&
          1 !== this.linewidth &&
          (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaHash && (n.alphaHash = !0),
        !0 === this.alphaToCoverage && (n.alphaToCoverage = !0),
        !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0),
        !0 === this.forceSinglePass && (n.forceSinglePass = !0),
        !0 === this.wireframe && (n.wireframe = !0),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        'round' !== this.wireframeLinecap &&
          (n.wireframeLinecap = this.wireframeLinecap),
        'round' !== this.wireframeLinejoin &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.flatShading && (n.flatShading = !0),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        !1 === this.fog && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e)
      ) {
        const e = i(t.textures),
          r = i(t.images);
        e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.name = t.name),
        (this.blending = t.blending),
        (this.side = t.side),
        (this.vertexColors = t.vertexColors),
        (this.opacity = t.opacity),
        (this.transparent = t.transparent),
        (this.blendSrc = t.blendSrc),
        (this.blendDst = t.blendDst),
        (this.blendEquation = t.blendEquation),
        (this.blendSrcAlpha = t.blendSrcAlpha),
        (this.blendDstAlpha = t.blendDstAlpha),
        (this.blendEquationAlpha = t.blendEquationAlpha),
        this.blendColor.copy(t.blendColor),
        (this.blendAlpha = t.blendAlpha),
        (this.depthFunc = t.depthFunc),
        (this.depthTest = t.depthTest),
        (this.depthWrite = t.depthWrite),
        (this.stencilWriteMask = t.stencilWriteMask),
        (this.stencilFunc = t.stencilFunc),
        (this.stencilRef = t.stencilRef),
        (this.stencilFuncMask = t.stencilFuncMask),
        (this.stencilFail = t.stencilFail),
        (this.stencilZFail = t.stencilZFail),
        (this.stencilZPass = t.stencilZPass),
        (this.stencilWrite = t.stencilWrite);
      const e = t.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t = e.length;
        n = new Array(t);
        for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = t.clipIntersection),
        (this.clipShadows = t.clipShadows),
        (this.shadowSide = t.shadowSide),
        (this.colorWrite = t.colorWrite),
        (this.precision = t.precision),
        (this.polygonOffset = t.polygonOffset),
        (this.polygonOffsetFactor = t.polygonOffsetFactor),
        (this.polygonOffsetUnits = t.polygonOffsetUnits),
        (this.dithering = t.dithering),
        (this.alphaTest = t.alphaTest),
        (this.alphaHash = t.alphaHash),
        (this.alphaToCoverage = t.alphaToCoverage),
        (this.premultipliedAlpha = t.premultipliedAlpha),
        (this.forceSinglePass = t.forceSinglePass),
        (this.visible = t.visible),
        (this.toneMapped = t.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: 'dispose' });
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
  }
  class zn extends Bn {
    constructor(t) {
      super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = 'MeshBasicMaterial'),
        (this.color = new In(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new en()),
        (this.combine = b),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = 'round'),
        (this.wireframeLinejoin = 'round'),
        (this.fog = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        this.envMapRotation.copy(t.envMapRotation),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.fog = t.fog),
        this
      );
    }
  }
  const Hn = new me(),
    Gn = new Vt();
  class Vn {
    constructor(t, e, n = !1) {
      if (Array.isArray(t))
        throw new TypeError(
          'THREE.BufferAttribute: array should be a Typed Array.'
        );
      (this.isBufferAttribute = !0),
        (this.name = ''),
        (this.array = t),
        (this.itemSize = e),
        (this.count = void 0 !== t ? t.length / e : 0),
        (this.normalized = n),
        (this.usage = 35044),
        (this._updateRange = { offset: 0, count: -1 }),
        (this.updateRanges = []),
        (this.gpuType = $),
        (this.version = 0);
    }
    onUploadCallback() {}
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    get updateRange() {
      var t;
      return (
        (t =
          'THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.') in
          Yt || ((Yt[t] = !0), console.warn(t)),
        this._updateRange
      );
    }
    setUsage(t) {
      return (this.usage = t), this;
    }
    addUpdateRange(t, e) {
      this.updateRanges.push({ start: t, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.array = new t.array.constructor(t.array)),
        (this.itemSize = t.itemSize),
        (this.count = t.count),
        (this.normalized = t.normalized),
        (this.usage = t.usage),
        (this.gpuType = t.gpuType),
        this
      );
    }
    copyAt(t, e, n) {
      (t *= this.itemSize), (n *= e.itemSize);
      for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[t + i] = e.array[n + i];
      return this;
    }
    copyArray(t) {
      return this.array.set(t), this;
    }
    applyMatrix3(t) {
      if (2 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Gn.fromBufferAttribute(this, e),
            Gn.applyMatrix3(t),
            this.setXY(e, Gn.x, Gn.y);
      else if (3 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Hn.fromBufferAttribute(this, e),
            Hn.applyMatrix3(t),
            this.setXYZ(e, Hn.x, Hn.y, Hn.z);
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Hn.fromBufferAttribute(this, e),
          Hn.applyMatrix4(t),
          this.setXYZ(e, Hn.x, Hn.y, Hn.z);
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Hn.fromBufferAttribute(this, e),
          Hn.applyNormalMatrix(t),
          this.setXYZ(e, Hn.x, Hn.y, Hn.z);
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Hn.fromBufferAttribute(this, e),
          Hn.transformDirection(t),
          this.setXYZ(e, Hn.x, Hn.y, Hn.z);
      return this;
    }
    set(t, e = 0) {
      return this.array.set(t, e), this;
    }
    getComponent(t, e) {
      let n = this.array[t * this.itemSize + e];
      return this.normalized && (n = Ht(n, this.array)), n;
    }
    setComponent(t, e, n) {
      return (
        this.normalized && (n = Gt(n, this.array)),
        (this.array[t * this.itemSize + e] = n),
        this
      );
    }
    getX(t) {
      let e = this.array[t * this.itemSize];
      return this.normalized && (e = Ht(e, this.array)), e;
    }
    setX(t, e) {
      return (
        this.normalized && (e = Gt(e, this.array)),
        (this.array[t * this.itemSize] = e),
        this
      );
    }
    getY(t) {
      let e = this.array[t * this.itemSize + 1];
      return this.normalized && (e = Ht(e, this.array)), e;
    }
    setY(t, e) {
      return (
        this.normalized && (e = Gt(e, this.array)),
        (this.array[t * this.itemSize + 1] = e),
        this
      );
    }
    getZ(t) {
      let e = this.array[t * this.itemSize + 2];
      return this.normalized && (e = Ht(e, this.array)), e;
    }
    setZ(t, e) {
      return (
        this.normalized && (e = Gt(e, this.array)),
        (this.array[t * this.itemSize + 2] = e),
        this
      );
    }
    getW(t) {
      let e = this.array[t * this.itemSize + 3];
      return this.normalized && (e = Ht(e, this.array)), e;
    }
    setW(t, e) {
      return (
        this.normalized && (e = Gt(e, this.array)),
        (this.array[t * this.itemSize + 3] = e),
        this
      );
    }
    setXY(t, e, n) {
      return (
        (t *= this.itemSize),
        this.normalized && ((e = Gt(e, this.array)), (n = Gt(n, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, i) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = Gt(e, this.array)),
          (n = Gt(n, this.array)),
          (i = Gt(i, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        this
      );
    }
    setXYZW(t, e, n, i, r) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = Gt(e, this.array)),
          (n = Gt(n, this.array)),
          (i = Gt(i, this.array)),
          (r = Gt(r, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        (this.array[t + 3] = r),
        this
      );
    }
    onUpload(t) {
      return (this.onUploadCallback = t), this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        '' !== this.name && (t.name = this.name),
        35044 !== this.usage && (t.usage = this.usage),
        t
      );
    }
  }
  class kn extends Vn {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n);
    }
  }
  class Wn extends Vn {
    constructor(t, e, n) {
      super(new Uint32Array(t), e, n);
    }
  }
  class Xn extends Vn {
    constructor(t, e, n) {
      super(new Float32Array(t), e, n);
    }
  }
  let jn = 0;
  const qn = new Xe(),
    Yn = new xn(),
    Kn = new me(),
    Zn = new ve(),
    Jn = new ve(),
    $n = new me();
  class Qn extends Pt {
    constructor() {
      super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, 'id', { value: jn++ }),
        (this.uuid = It()),
        (this.name = ''),
        (this.type = 'BufferGeometry'),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return (
        Array.isArray(t)
          ? (this.index = new (Xt(t) ? Wn : kn)(t, 1))
          : (this.index = t),
        this
      );
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return (this.attributes[t] = e), this;
    }
    deleteAttribute(t) {
      return delete this.attributes[t], this;
    }
    hasAttribute(t) {
      return void 0 !== this.attributes[t];
    }
    addGroup(t, e, n = 0) {
      this.groups.push({ start: t, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      (this.drawRange.start = t), (this.drawRange.count = e);
    }
    applyMatrix4(t) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e = new kt().getNormalMatrix(t);
        n.applyNormalMatrix(e), (n.needsUpdate = !0);
      }
      const i = this.attributes.tangent;
      return (
        void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(t) {
      return qn.makeRotationFromQuaternion(t), this.applyMatrix4(qn), this;
    }
    rotateX(t) {
      return qn.makeRotationX(t), this.applyMatrix4(qn), this;
    }
    rotateY(t) {
      return qn.makeRotationY(t), this.applyMatrix4(qn), this;
    }
    rotateZ(t) {
      return qn.makeRotationZ(t), this.applyMatrix4(qn), this;
    }
    translate(t, e, n) {
      return qn.makeTranslation(t, e, n), this.applyMatrix4(qn), this;
    }
    scale(t, e, n) {
      return qn.makeScale(t, e, n), this.applyMatrix4(qn), this;
    }
    lookAt(t) {
      return (
        Yn.lookAt(t), Yn.updateMatrix(), this.applyMatrix4(Yn.matrix), this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(Kn).negate(),
        this.translate(Kn.x, Kn.y, Kn.z),
        this
      );
    }
    setFromPoints(t) {
      const e = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }
      return this.setAttribute('position', new Xn(e, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new ve());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.',
            this
          ),
          void this.boundingBox.set(
            new me(-1 / 0, -1 / 0, -1 / 0),
            new me(1 / 0, 1 / 0, 1 / 0)
          )
        );
      if (void 0 !== t) {
        if ((this.boundingBox.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            Zn.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? ($n.addVectors(this.boundingBox.min, Zn.min),
                  this.boundingBox.expandByPoint($n),
                  $n.addVectors(this.boundingBox.max, Zn.max),
                  this.boundingBox.expandByPoint($n))
                : (this.boundingBox.expandByPoint(Zn.min),
                  this.boundingBox.expandByPoint(Zn.max));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Oe());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.',
            this
          ),
          void this.boundingSphere.set(new me(), 1 / 0)
        );
      if (t) {
        const n = this.boundingSphere.center;
        if ((Zn.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            Jn.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? ($n.addVectors(Zn.min, Jn.min),
                  Zn.expandByPoint($n),
                  $n.addVectors(Zn.max, Jn.max),
                  Zn.expandByPoint($n))
                : (Zn.expandByPoint(Jn.min), Zn.expandByPoint(Jn.max));
          }
        Zn.getCenter(n);
        let i = 0;
        for (let e = 0, r = t.count; e < r; e++)
          $n.fromBufferAttribute(t, e),
            (i = Math.max(i, n.distanceToSquared($n)));
        if (e)
          for (let r = 0, a = e.length; r < a; r++) {
            const a = e[r],
              s = this.morphTargetsRelative;
            for (let e = 0, r = a.count; e < r; e++)
              $n.fromBufferAttribute(a, e),
                s && (Kn.fromBufferAttribute(t, e), $n.add(Kn)),
                (i = Math.max(i, n.distanceToSquared($n)));
          }
        (this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    }
    computeTangents() {
      const t = this.index,
        e = this.attributes;
      if (
        null === t ||
        void 0 === e.position ||
        void 0 === e.normal ||
        void 0 === e.uv
      )
        return void console.error(
          'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)'
        );
      const n = e.position,
        i = e.normal,
        r = e.uv;
      !1 === this.hasAttribute('tangent') &&
        this.setAttribute('tangent', new Vn(new Float32Array(4 * n.count), 4));
      const a = this.getAttribute('tangent'),
        s = [],
        o = [];
      for (let t = 0; t < n.count; t++) (s[t] = new me()), (o[t] = new me());
      const l = new me(),
        c = new me(),
        h = new me(),
        u = new Vt(),
        d = new Vt(),
        p = new Vt(),
        f = new me(),
        m = new me();
      function g(t, e, i) {
        l.fromBufferAttribute(n, t),
          c.fromBufferAttribute(n, e),
          h.fromBufferAttribute(n, i),
          u.fromBufferAttribute(r, t),
          d.fromBufferAttribute(r, e),
          p.fromBufferAttribute(r, i),
          c.sub(l),
          h.sub(l),
          d.sub(u),
          p.sub(u);
        const a = 1 / (d.x * p.y - p.x * d.y);
        isFinite(a) &&
          (f
            .copy(c)
            .multiplyScalar(p.y)
            .addScaledVector(h, -d.y)
            .multiplyScalar(a),
          m
            .copy(h)
            .multiplyScalar(d.x)
            .addScaledVector(c, -p.x)
            .multiplyScalar(a),
          s[t].add(f),
          s[e].add(f),
          s[i].add(f),
          o[t].add(m),
          o[e].add(m),
          o[i].add(m));
      }
      let _ = this.groups;
      0 === _.length && (_ = [{ start: 0, count: t.count }]);
      for (let e = 0, n = _.length; e < n; ++e) {
        const n = _[e],
          i = n.start;
        for (let e = i, r = i + n.count; e < r; e += 3)
          g(t.getX(e + 0), t.getX(e + 1), t.getX(e + 2));
      }
      const v = new me(),
        x = new me(),
        M = new me(),
        S = new me();
      function E(t) {
        M.fromBufferAttribute(i, t), S.copy(M);
        const e = s[t];
        v.copy(e),
          v.sub(M.multiplyScalar(M.dot(e))).normalize(),
          x.crossVectors(S, e);
        const n = x.dot(o[t]) < 0 ? -1 : 1;
        a.setXYZW(t, v.x, v.y, v.z, n);
      }
      for (let e = 0, n = _.length; e < n; ++e) {
        const n = _[e],
          i = n.start;
        for (let e = i, r = i + n.count; e < r; e += 3)
          E(t.getX(e + 0)), E(t.getX(e + 1)), E(t.getX(e + 2));
      }
    }
    computeVertexNormals() {
      const t = this.index,
        e = this.getAttribute('position');
      if (void 0 !== e) {
        let n = this.getAttribute('normal');
        if (void 0 === n)
          (n = new Vn(new Float32Array(3 * e.count), 3)),
            this.setAttribute('normal', n);
        else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
        const i = new me(),
          r = new me(),
          a = new me(),
          s = new me(),
          o = new me(),
          l = new me(),
          c = new me(),
          h = new me();
        if (t)
          for (let u = 0, d = t.count; u < d; u += 3) {
            const d = t.getX(u + 0),
              p = t.getX(u + 1),
              f = t.getX(u + 2);
            i.fromBufferAttribute(e, d),
              r.fromBufferAttribute(e, p),
              a.fromBufferAttribute(e, f),
              c.subVectors(a, r),
              h.subVectors(i, r),
              c.cross(h),
              s.fromBufferAttribute(n, d),
              o.fromBufferAttribute(n, p),
              l.fromBufferAttribute(n, f),
              s.add(c),
              o.add(c),
              l.add(c),
              n.setXYZ(d, s.x, s.y, s.z),
              n.setXYZ(p, o.x, o.y, o.z),
              n.setXYZ(f, l.x, l.y, l.z);
          }
        else
          for (let t = 0, s = e.count; t < s; t += 3)
            i.fromBufferAttribute(e, t + 0),
              r.fromBufferAttribute(e, t + 1),
              a.fromBufferAttribute(e, t + 2),
              c.subVectors(a, r),
              h.subVectors(i, r),
              c.cross(h),
              n.setXYZ(t + 0, c.x, c.y, c.z),
              n.setXYZ(t + 1, c.x, c.y, c.z),
              n.setXYZ(t + 2, c.x, c.y, c.z);
        this.normalizeNormals(), (n.needsUpdate = !0);
      }
    }
    normalizeNormals() {
      const t = this.attributes.normal;
      for (let e = 0, n = t.count; e < n; e++)
        $n.fromBufferAttribute(t, e),
          $n.normalize(),
          t.setXYZ(e, $n.x, $n.y, $n.z);
    }
    toNonIndexed() {
      function t(t, e) {
        const n = t.array,
          i = t.itemSize,
          r = t.normalized,
          a = new n.constructor(e.length * i);
        let s = 0,
          o = 0;
        for (let r = 0, l = e.length; r < l; r++) {
          s = t.isInterleavedBufferAttribute
            ? e[r] * t.data.stride + t.offset
            : e[r] * i;
          for (let t = 0; t < i; t++) a[o++] = n[s++];
        }
        return new Vn(a, i, r);
      }
      if (null === this.index)
        return (
          console.warn(
            'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'
          ),
          this
        );
      const e = new Qn(),
        n = this.index.array,
        i = this.attributes;
      for (const r in i) {
        const a = t(i[r], n);
        e.setAttribute(r, a);
      }
      const r = this.morphAttributes;
      for (const i in r) {
        const a = [],
          s = r[i];
        for (let e = 0, i = s.length; e < i; e++) {
          const i = t(s[e], n);
          a.push(i);
        }
        e.morphAttributes[i] = a;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const a = this.groups;
      for (let t = 0, n = a.length; t < n; t++) {
        const n = a[t];
        e.addGroup(n.start, n.count, n.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t = {
        metadata: {
          version: 4.6,
          type: 'BufferGeometry',
          generator: 'BufferGeometry.toJSON',
        },
      };
      if (
        ((t.uuid = this.uuid),
        (t.type = this.type),
        '' !== this.name && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        void 0 !== this.parameters)
      ) {
        const e = this.parameters;
        for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t;
      }
      t.data = { attributes: {} };
      const e = this.index;
      null !== e &&
        (t.data.index = {
          type: e.array.constructor.name,
          array: Array.prototype.slice.call(e.array),
        });
      const n = this.attributes;
      for (const e in n) {
        const i = n[e];
        t.data.attributes[e] = i.toJSON(t.data);
      }
      const i = {};
      let r = !1;
      for (const e in this.morphAttributes) {
        const n = this.morphAttributes[e],
          a = [];
        for (let e = 0, i = n.length; e < i; e++) {
          const i = n[e];
          a.push(i.toJSON(t.data));
        }
        a.length > 0 && ((i[e] = a), (r = !0));
      }
      r &&
        ((t.data.morphAttributes = i),
        (t.data.morphTargetsRelative = this.morphTargetsRelative));
      const a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      const s = this.boundingSphere;
      return (
        null !== s &&
          (t.data.boundingSphere = {
            center: s.center.toArray(),
            radius: s.radius,
          }),
        t
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      const e = {};
      this.name = t.name;
      const n = t.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t.attributes;
      for (const t in i) {
        const n = i[t];
        this.setAttribute(t, n.clone(e));
      }
      const r = t.morphAttributes;
      for (const t in r) {
        const n = [],
          i = r[t];
        for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
        this.morphAttributes[t] = n;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      const a = t.groups;
      for (let t = 0, e = a.length; t < e; t++) {
        const e = a[t];
        this.addGroup(e.start, e.count, e.materialIndex);
      }
      const s = t.boundingBox;
      null !== s && (this.boundingBox = s.clone());
      const o = t.boundingSphere;
      return (
        null !== o && (this.boundingSphere = o.clone()),
        (this.drawRange.start = t.drawRange.start),
        (this.drawRange.count = t.drawRange.count),
        (this.userData = t.userData),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: 'dispose' });
    }
  }
  const ti = new Xe(),
    ei = new We(),
    ni = new Oe(),
    ii = new me(),
    ri = new me(),
    ai = new me(),
    si = new me(),
    oi = new me(),
    li = new me(),
    ci = new Vt(),
    hi = new Vt(),
    ui = new Vt(),
    di = new me(),
    pi = new me(),
    fi = new me(),
    mi = new me(),
    gi = new me();
  class _i extends xn {
    constructor(t = new Qn(), e = new zn()) {
      super(),
        (this.isMesh = !0),
        (this.type = 'Mesh'),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        void 0 !== t.morphTargetInfluences &&
          (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        void 0 !== t.morphTargetDictionary &&
          (this.morphTargetDictionary = Object.assign(
            {},
            t.morphTargetDictionary
          )),
        (this.material = Array.isArray(t.material)
          ? t.material.slice()
          : t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        e = Object.keys(t);
      if (e.length > 0) {
        const n = t[e[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, e = n.length; t < e; t++) {
            const e = n[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[e] = t);
          }
        }
      }
    }
    getVertexPosition(t, e) {
      const n = this.geometry,
        i = n.attributes.position,
        r = n.morphAttributes.position,
        a = n.morphTargetsRelative;
      e.fromBufferAttribute(i, t);
      const s = this.morphTargetInfluences;
      if (r && s) {
        li.set(0, 0, 0);
        for (let n = 0, i = r.length; n < i; n++) {
          const i = s[n],
            o = r[n];
          0 !== i &&
            (oi.fromBufferAttribute(o, t),
            a ? li.addScaledVector(oi, i) : li.addScaledVector(oi.sub(e), i));
        }
        e.add(li);
      }
      return e;
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.material,
        r = this.matrixWorld;
      if (void 0 !== i) {
        if (
          (null === n.boundingSphere && n.computeBoundingSphere(),
          ni.copy(n.boundingSphere),
          ni.applyMatrix4(r),
          ei.copy(t.ray).recast(t.near),
          !1 === ni.containsPoint(ei.origin))
        ) {
          if (null === ei.intersectSphere(ni, ii)) return;
          if (ei.origin.distanceToSquared(ii) > (t.far - t.near) ** 2) return;
        }
        ti.copy(r).invert(),
          ei.copy(t.ray).applyMatrix4(ti),
          (null !== n.boundingBox && !1 === ei.intersectsBox(n.boundingBox)) ||
            this._computeIntersections(t, e, ei);
      }
    }
    _computeIntersections(t, e, n) {
      let i;
      const r = this.geometry,
        a = this.material,
        s = r.index,
        o = r.attributes.position,
        l = r.attributes.uv,
        c = r.attributes.uv1,
        h = r.attributes.normal,
        u = r.groups,
        d = r.drawRange;
      if (null !== s)
        if (Array.isArray(a))
          for (let r = 0, o = u.length; r < o; r++) {
            const o = u[r],
              p = a[o.materialIndex];
            for (
              let r = Math.max(o.start, d.start),
                a = Math.min(
                  s.count,
                  Math.min(o.start + o.count, d.start + d.count)
                );
              r < a;
              r += 3
            ) {
              (i = vi(
                this,
                p,
                t,
                n,
                l,
                c,
                h,
                s.getX(r),
                s.getX(r + 1),
                s.getX(r + 2)
              )),
                i &&
                  ((i.faceIndex = Math.floor(r / 3)),
                  (i.face.materialIndex = o.materialIndex),
                  e.push(i));
            }
          }
        else {
          for (
            let r = Math.max(0, d.start),
              o = Math.min(s.count, d.start + d.count);
            r < o;
            r += 3
          ) {
            (i = vi(
              this,
              a,
              t,
              n,
              l,
              c,
              h,
              s.getX(r),
              s.getX(r + 1),
              s.getX(r + 2)
            )),
              i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
          }
        }
      else if (void 0 !== o)
        if (Array.isArray(a))
          for (let r = 0, s = u.length; r < s; r++) {
            const s = u[r],
              p = a[s.materialIndex];
            for (
              let r = Math.max(s.start, d.start),
                a = Math.min(
                  o.count,
                  Math.min(s.start + s.count, d.start + d.count)
                );
              r < a;
              r += 3
            ) {
              (i = vi(this, p, t, n, l, c, h, r, r + 1, r + 2)),
                i &&
                  ((i.faceIndex = Math.floor(r / 3)),
                  (i.face.materialIndex = s.materialIndex),
                  e.push(i));
            }
          }
        else {
          for (
            let r = Math.max(0, d.start),
              s = Math.min(o.count, d.start + d.count);
            r < s;
            r += 3
          ) {
            (i = vi(this, a, t, n, l, c, h, r, r + 1, r + 2)),
              i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
          }
        }
    }
  }
  function vi(t, e, n, i, s, o, l, c, h, u) {
    t.getVertexPosition(c, ri),
      t.getVertexPosition(h, ai),
      t.getVertexPosition(u, si);
    const d = (function (t, e, n, i, s, o, l, c) {
      let h;
      if (
        ((h =
          e.side === a
            ? i.intersectTriangle(l, o, s, !0, c)
            : i.intersectTriangle(s, o, l, e.side === r, c)),
        null === h)
      )
        return null;
      gi.copy(c), gi.applyMatrix4(t.matrixWorld);
      const u = n.ray.origin.distanceTo(gi);
      return u < n.near || u > n.far
        ? null
        : { distance: u, point: gi.clone(), object: t };
    })(t, e, n, i, ri, ai, si, mi);
    if (d) {
      s &&
        (ci.fromBufferAttribute(s, c),
        hi.fromBufferAttribute(s, h),
        ui.fromBufferAttribute(s, u),
        (d.uv = Ln.getInterpolation(mi, ri, ai, si, ci, hi, ui, new Vt()))),
        o &&
          (ci.fromBufferAttribute(o, c),
          hi.fromBufferAttribute(o, h),
          ui.fromBufferAttribute(o, u),
          (d.uv1 = Ln.getInterpolation(mi, ri, ai, si, ci, hi, ui, new Vt()))),
        l &&
          (di.fromBufferAttribute(l, c),
          pi.fromBufferAttribute(l, h),
          fi.fromBufferAttribute(l, u),
          (d.normal = Ln.getInterpolation(
            mi,
            ri,
            ai,
            si,
            di,
            pi,
            fi,
            new me()
          )),
          d.normal.dot(i.direction) > 0 && d.normal.multiplyScalar(-1));
      const t = { a: c, b: h, c: u, normal: new me(), materialIndex: 0 };
      Ln.getNormal(ri, ai, si, t.normal), (d.face = t);
    }
    return d;
  }
  class xi extends Qn {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
      super(),
        (this.type = 'BoxGeometry'),
        (this.parameters = {
          width: t,
          height: e,
          depth: n,
          widthSegments: i,
          heightSegments: r,
          depthSegments: a,
        });
      const s = this;
      (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
      const o = [],
        l = [],
        c = [],
        h = [];
      let u = 0,
        d = 0;
      function p(t, e, n, i, r, a, p, f, m, g, _) {
        const v = a / m,
          x = p / g,
          M = a / 2,
          S = p / 2,
          E = f / 2,
          T = m + 1,
          y = g + 1;
        let b = 0,
          A = 0;
        const w = new me();
        for (let a = 0; a < y; a++) {
          const s = a * x - S;
          for (let o = 0; o < T; o++) {
            const u = o * v - M;
            (w[t] = u * i),
              (w[e] = s * r),
              (w[n] = E),
              l.push(w.x, w.y, w.z),
              (w[t] = 0),
              (w[e] = 0),
              (w[n] = f > 0 ? 1 : -1),
              c.push(w.x, w.y, w.z),
              h.push(o / m),
              h.push(1 - a / g),
              (b += 1);
          }
        }
        for (let t = 0; t < g; t++)
          for (let e = 0; e < m; e++) {
            const n = u + e + T * t,
              i = u + e + T * (t + 1),
              r = u + (e + 1) + T * (t + 1),
              a = u + (e + 1) + T * t;
            o.push(n, i, a), o.push(i, r, a), (A += 6);
          }
        s.addGroup(d, A, _), (d += A), (u += b);
      }
      p('z', 'y', 'x', -1, -1, n, e, t, a, r, 0),
        p('z', 'y', 'x', 1, -1, n, e, -t, a, r, 1),
        p('x', 'z', 'y', 1, 1, t, n, e, i, a, 2),
        p('x', 'z', 'y', 1, -1, t, n, -e, i, a, 3),
        p('x', 'y', 'z', 1, -1, t, e, n, i, r, 4),
        p('x', 'y', 'z', -1, -1, t, e, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute('position', new Xn(l, 3)),
        this.setAttribute('normal', new Xn(c, 3)),
        this.setAttribute('uv', new Xn(h, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new xi(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
    }
  }
  function Mi(t) {
    const e = {};
    for (const n in t) {
      e[n] = {};
      for (const i in t[n]) {
        const r = t[n][i];
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture ||
          r.isQuaternion)
          ? r.isRenderTargetTexture
            ? (console.warn(
                'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().'
              ),
              (e[n][i] = null))
            : (e[n][i] = r.clone())
          : Array.isArray(r)
            ? (e[n][i] = r.slice())
            : (e[n][i] = r);
      }
    }
    return e;
  }
  function Si(t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = Mi(t[n]);
      for (const t in i) e[t] = i[t];
    }
    return e;
  }
  function Ei(t) {
    return null === t.getRenderTarget()
      ? t.outputColorSpace
      : Qt.workingColorSpace;
  }
  const Ti = { clone: Mi, merge: Si };
  class yi extends Bn {
    constructor(t) {
      super(),
        (this.isShaderMaterial = !0),
        (this.type = 'ShaderMaterial'),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader =
          'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}'),
        (this.fragmentShader =
          'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}'),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
          clipCullDistance: !1,
          multiDraw: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv1: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        void 0 !== t && this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.fragmentShader = t.fragmentShader),
        (this.vertexShader = t.vertexShader),
        (this.uniforms = Mi(t.uniforms)),
        (this.uniformsGroups = (function (t) {
          const e = [];
          for (let n = 0; n < t.length; n++) e.push(t[n].clone());
          return e;
        })(t.uniformsGroups)),
        (this.defines = Object.assign({}, t.defines)),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.fog = t.fog),
        (this.lights = t.lights),
        (this.clipping = t.clipping),
        (this.extensions = Object.assign({}, t.extensions)),
        (this.glslVersion = t.glslVersion),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      (e.glslVersion = this.glslVersion), (e.uniforms = {});
      for (const n in this.uniforms) {
        const i = this.uniforms[n].value;
        i && i.isTexture
          ? (e.uniforms[n] = { type: 't', value: i.toJSON(t).uuid })
          : i && i.isColor
            ? (e.uniforms[n] = { type: 'c', value: i.getHex() })
            : i && i.isVector2
              ? (e.uniforms[n] = { type: 'v2', value: i.toArray() })
              : i && i.isVector3
                ? (e.uniforms[n] = { type: 'v3', value: i.toArray() })
                : i && i.isVector4
                  ? (e.uniforms[n] = { type: 'v4', value: i.toArray() })
                  : i && i.isMatrix3
                    ? (e.uniforms[n] = { type: 'm3', value: i.toArray() })
                    : i && i.isMatrix4
                      ? (e.uniforms[n] = { type: 'm4', value: i.toArray() })
                      : (e.uniforms[n] = { value: i });
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        (e.vertexShader = this.vertexShader),
        (e.fragmentShader = this.fragmentShader),
        (e.lights = this.lights),
        (e.clipping = this.clipping);
      const n = {};
      for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
      return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
  }
  class bi extends xn {
    constructor() {
      super(),
        (this.isCamera = !0),
        (this.type = 'Camera'),
        (this.matrixWorldInverse = new Xe()),
        (this.projectionMatrix = new Xe()),
        (this.projectionMatrixInverse = new Xe()),
        (this.coordinateSystem = Ct);
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        (this.coordinateSystem = t.coordinateSystem),
        this
      );
    }
    getWorldDirection(t) {
      return super.getWorldDirection(t).negate();
    }
    updateMatrixWorld(t) {
      super.updateMatrixWorld(t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t, e) {
      super.updateWorldMatrix(t, e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Ai = new me(),
    wi = new Vt(),
    Ri = new Vt();
  class Ci extends bi {
    constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
      super(),
        (this.isPerspectiveCamera = !0),
        (this.type = 'PerspectiveCamera'),
        (this.fov = t),
        (this.zoom = 1),
        (this.near = n),
        (this.far = i),
        (this.focus = 10),
        (this.aspect = e),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.fov = t.fov),
        (this.zoom = t.zoom),
        (this.near = t.near),
        (this.far = t.far),
        (this.focus = t.focus),
        (this.aspect = t.aspect),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        (this.filmGauge = t.filmGauge),
        (this.filmOffset = t.filmOffset),
        this
      );
    }
    setFocalLength(t) {
      const e = (0.5 * this.getFilmHeight()) / t;
      (this.fov = 2 * Nt * Math.atan(e)), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t = Math.tan(0.5 * Dt * this.fov);
      return (0.5 * this.getFilmHeight()) / t;
    }
    getEffectiveFOV() {
      return 2 * Nt * Math.atan(Math.tan(0.5 * Dt * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t, e, n) {
      Ai.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        e.set(Ai.x, Ai.y).multiplyScalar(-t / Ai.z),
        Ai.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        n.set(Ai.x, Ai.y).multiplyScalar(-t / Ai.z);
    }
    getViewSize(t, e) {
      return this.getViewBounds(t, wi, Ri), e.subVectors(Ri, wi);
    }
    setViewOffset(t, e, n, i, r, a) {
      (this.aspect = t / e),
        null === this.view &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = this.near;
      let e = (t * Math.tan(0.5 * Dt * this.fov)) / this.zoom,
        n = 2 * e,
        i = this.aspect * n,
        r = -0.5 * i;
      const a = this.view;
      if (null !== this.view && this.view.enabled) {
        const t = a.fullWidth,
          s = a.fullHeight;
        (r += (a.offsetX * i) / t),
          (e -= (a.offsetY * n) / s),
          (i *= a.width / t),
          (n *= a.height / s);
      }
      const s = this.filmOffset;
      0 !== s && (r += (t * s) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(
          r,
          r + i,
          e,
          e - n,
          t,
          this.far,
          this.coordinateSystem
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.fov = this.fov),
        (e.object.zoom = this.zoom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        (e.object.focus = this.focus),
        (e.object.aspect = this.aspect),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        (e.object.filmGauge = this.filmGauge),
        (e.object.filmOffset = this.filmOffset),
        e
      );
    }
  }
  const Li = -90;
  class Pi extends xn {
    constructor(t, e, n) {
      super(),
        (this.type = 'CubeCamera'),
        (this.renderTarget = n),
        (this.coordinateSystem = null),
        (this.activeMipmapLevel = 0);
      const i = new Ci(Li, 1, t, e);
      (i.layers = this.layers), this.add(i);
      const r = new Ci(Li, 1, t, e);
      (r.layers = this.layers), this.add(r);
      const a = new Ci(Li, 1, t, e);
      (a.layers = this.layers), this.add(a);
      const s = new Ci(Li, 1, t, e);
      (s.layers = this.layers), this.add(s);
      const o = new Ci(Li, 1, t, e);
      (o.layers = this.layers), this.add(o);
      const l = new Ci(Li, 1, t, e);
      (l.layers = this.layers), this.add(l);
    }
    updateCoordinateSystem() {
      const t = this.coordinateSystem,
        e = this.children.concat(),
        [n, i, r, a, s, o] = e;
      for (const t of e) this.remove(t);
      if (t === Ct)
        n.up.set(0, 1, 0),
          n.lookAt(1, 0, 0),
          i.up.set(0, 1, 0),
          i.lookAt(-1, 0, 0),
          r.up.set(0, 0, -1),
          r.lookAt(0, 1, 0),
          a.up.set(0, 0, 1),
          a.lookAt(0, -1, 0),
          s.up.set(0, 1, 0),
          s.lookAt(0, 0, 1),
          o.up.set(0, 1, 0),
          o.lookAt(0, 0, -1);
      else {
        if (t !== Lt)
          throw new Error(
            'THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' +
              t
          );
        n.up.set(0, -1, 0),
          n.lookAt(-1, 0, 0),
          i.up.set(0, -1, 0),
          i.lookAt(1, 0, 0),
          r.up.set(0, 0, 1),
          r.lookAt(0, 1, 0),
          a.up.set(0, 0, -1),
          a.lookAt(0, -1, 0),
          s.up.set(0, -1, 0),
          s.lookAt(0, 0, 1),
          o.up.set(0, -1, 0),
          o.lookAt(0, 0, -1);
      }
      for (const t of e) this.add(t), t.updateMatrixWorld();
    }
    update(t, e) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: n, activeMipmapLevel: i } = this;
      this.coordinateSystem !== t.coordinateSystem &&
        ((this.coordinateSystem = t.coordinateSystem),
        this.updateCoordinateSystem());
      const [r, a, s, o, l, c] = this.children,
        h = t.getRenderTarget(),
        u = t.getActiveCubeFace(),
        d = t.getActiveMipmapLevel(),
        p = t.xr.enabled;
      t.xr.enabled = !1;
      const f = n.texture.generateMipmaps;
      (n.texture.generateMipmaps = !1),
        t.setRenderTarget(n, 0, i),
        t.render(e, r),
        t.setRenderTarget(n, 1, i),
        t.render(e, a),
        t.setRenderTarget(n, 2, i),
        t.render(e, s),
        t.setRenderTarget(n, 3, i),
        t.render(e, o),
        t.setRenderTarget(n, 4, i),
        t.render(e, l),
        (n.texture.generateMipmaps = f),
        t.setRenderTarget(n, 5, i),
        t.render(e, c),
        t.setRenderTarget(h, u, d),
        (t.xr.enabled = p),
        (n.texture.needsPMREMUpdate = !0);
    }
  }
  class Ui extends le {
    constructor(t, e, n, i, r, a, s, o, l, c) {
      super(
        (t = void 0 !== t ? t : []),
        (e = void 0 !== e ? e : O),
        n,
        i,
        r,
        a,
        s,
        o,
        l,
        c
      ),
        (this.isCubeTexture = !0),
        (this.flipY = !1);
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  }
  class Di extends ue {
    constructor(t = 1, e = {}) {
      super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
      const n = { width: t, height: t, depth: 1 },
        i = [n, n, n, n, n, n];
      (this.texture = new Ui(
        i,
        e.mapping,
        e.wrapS,
        e.wrapT,
        e.magFilter,
        e.minFilter,
        e.format,
        e.type,
        e.anisotropy,
        e.colorSpace
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.generateMipmaps =
          void 0 !== e.generateMipmaps && e.generateMipmaps),
        (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : X);
    }
    fromEquirectangularTexture(t, e) {
      (this.texture.type = e.type),
        (this.texture.colorSpace = e.colorSpace),
        (this.texture.generateMipmaps = e.generateMipmaps),
        (this.texture.minFilter = e.minFilter),
        (this.texture.magFilter = e.magFilter);
      const n = {
          uniforms: { tEquirect: { value: null } },
          vertexShader:
            '\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t',
          fragmentShader:
            '\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t',
        },
        i = new xi(5, 5, 5),
        r = new yi({
          name: 'CubemapFromEquirect',
          uniforms: Mi(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader,
          side: a,
          blending: 0,
        });
      r.uniforms.tEquirect.value = e;
      const s = new _i(i, r),
        o = e.minFilter;
      e.minFilter === q && (e.minFilter = X);
      return (
        new Pi(1, 10, this).update(t, s),
        (e.minFilter = o),
        s.geometry.dispose(),
        s.material.dispose(),
        this
      );
    }
    clear(t, e, n, i) {
      const r = t.getRenderTarget();
      for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
      t.setRenderTarget(r);
    }
  }
  const Ni = new me(),
    Ii = new me(),
    Oi = new kt();
  class Fi {
    constructor(t = new me(1, 0, 0), e = 0) {
      (this.isPlane = !0), (this.normal = t), (this.constant = e);
    }
    set(t, e) {
      return this.normal.copy(t), (this.constant = e), this;
    }
    setComponents(t, e, n, i) {
      return this.normal.set(t, e, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(t, e) {
      return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
    }
    setFromCoplanarPoints(t, e, n) {
      const i = Ni.subVectors(n, e).cross(Ii.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t), this;
    }
    copy(t) {
      return this.normal.copy(t.normal), (this.constant = t.constant), this;
    }
    normalize() {
      const t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), (this.constant *= t), this;
    }
    negate() {
      return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
      return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
    }
    intersectLine(t, e) {
      const n = t.delta(Ni),
        i = this.normal.dot(n);
      if (0 === i)
        return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
      const r = -(t.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
    }
    intersectsLine(t) {
      const e = this.distanceToPoint(t.start),
        n = this.distanceToPoint(t.end);
      return (e < 0 && n > 0) || (n < 0 && e > 0);
    }
    intersectsBox(t) {
      return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
      return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
      return t.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t, e) {
      const n = e || Oi.getNormalMatrix(t),
        i = this.coplanarPoint(Ni).applyMatrix4(t),
        r = this.normal.applyMatrix3(n).normalize();
      return (this.constant = -i.dot(r)), this;
    }
    translate(t) {
      return (this.constant -= t.dot(this.normal)), this;
    }
    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Bi = new Oe(),
    zi = new me();
  class Hi {
    constructor(
      t = new Fi(),
      e = new Fi(),
      n = new Fi(),
      i = new Fi(),
      r = new Fi(),
      a = new Fi()
    ) {
      this.planes = [t, e, n, i, r, a];
    }
    set(t, e, n, i, r, a) {
      const s = this.planes;
      return (
        s[0].copy(t),
        s[1].copy(e),
        s[2].copy(n),
        s[3].copy(i),
        s[4].copy(r),
        s[5].copy(a),
        this
      );
    }
    copy(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t, e = 2e3) {
      const n = this.planes,
        i = t.elements,
        r = i[0],
        a = i[1],
        s = i[2],
        o = i[3],
        l = i[4],
        c = i[5],
        h = i[6],
        u = i[7],
        d = i[8],
        p = i[9],
        f = i[10],
        m = i[11],
        g = i[12],
        _ = i[13],
        v = i[14],
        x = i[15];
      if (
        (n[0].setComponents(o - r, u - l, m - d, x - g).normalize(),
        n[1].setComponents(o + r, u + l, m + d, x + g).normalize(),
        n[2].setComponents(o + a, u + c, m + p, x + _).normalize(),
        n[3].setComponents(o - a, u - c, m - p, x - _).normalize(),
        n[4].setComponents(o - s, u - h, m - f, x - v).normalize(),
        e === Ct)
      )
        n[5].setComponents(o + s, u + h, m + f, x + v).normalize();
      else {
        if (e !== Lt)
          throw new Error(
            'THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' +
              e
          );
        n[5].setComponents(s, h, f, v).normalize();
      }
      return this;
    }
    intersectsObject(t) {
      if (void 0 !== t.boundingSphere)
        null === t.boundingSphere && t.computeBoundingSphere(),
          Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
      else {
        const e = t.geometry;
        null === e.boundingSphere && e.computeBoundingSphere(),
          Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
      }
      return this.intersectsSphere(Bi);
    }
    intersectsSprite(t) {
      return (
        Bi.center.set(0, 0, 0),
        (Bi.radius = 0.7071067811865476),
        Bi.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(Bi)
      );
    }
    intersectsSphere(t) {
      const e = this.planes,
        n = t.center,
        i = -t.radius;
      for (let t = 0; t < 6; t++) {
        if (e[t].distanceToPoint(n) < i) return !1;
      }
      return !0;
    }
    intersectsBox(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (
          ((zi.x = i.normal.x > 0 ? t.max.x : t.min.x),
          (zi.y = i.normal.y > 0 ? t.max.y : t.min.y),
          (zi.z = i.normal.z > 0 ? t.max.z : t.min.z),
          i.distanceToPoint(zi) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function Gi() {
    let t = null,
      e = !1,
      n = null,
      i = null;
    function r(e, a) {
      n(e, a), (i = t.requestAnimationFrame(r));
    }
    return {
      start: function () {
        !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
      },
      stop: function () {
        t.cancelAnimationFrame(i), (e = !1);
      },
      setAnimationLoop: function (t) {
        n = t;
      },
      setContext: function (e) {
        t = e;
      },
    };
  }
  function Vi(t, e) {
    const n = e.isWebGL2,
      i = new WeakMap();
    return {
      get: function (t) {
        return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
      },
      remove: function (e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        const n = i.get(e);
        n && (t.deleteBuffer(n.buffer), i.delete(e));
      },
      update: function (e, r) {
        if (e.isGLBufferAttribute) {
          const t = i.get(e);
          return void (
            (!t || t.version < e.version) &&
            i.set(e, {
              buffer: e.buffer,
              type: e.type,
              bytesPerElement: e.elementSize,
              version: e.version,
            })
          );
        }
        e.isInterleavedBufferAttribute && (e = e.data);
        const a = i.get(e);
        if (void 0 === a)
          i.set(
            e,
            (function (e, i) {
              const r = e.array,
                a = e.usage,
                s = r.byteLength,
                o = t.createBuffer();
              let l;
              if (
                (t.bindBuffer(i, o),
                t.bufferData(i, r, a),
                e.onUploadCallback(),
                r instanceof Float32Array)
              )
                l = t.FLOAT;
              else if (r instanceof Uint16Array)
                if (e.isFloat16BufferAttribute) {
                  if (!n)
                    throw new Error(
                      'THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.'
                    );
                  l = t.HALF_FLOAT;
                } else l = t.UNSIGNED_SHORT;
              else if (r instanceof Int16Array) l = t.SHORT;
              else if (r instanceof Uint32Array) l = t.UNSIGNED_INT;
              else if (r instanceof Int32Array) l = t.INT;
              else if (r instanceof Int8Array) l = t.BYTE;
              else if (r instanceof Uint8Array) l = t.UNSIGNED_BYTE;
              else {
                if (!(r instanceof Uint8ClampedArray))
                  throw new Error(
                    'THREE.WebGLAttributes: Unsupported buffer data format: ' +
                      r
                  );
                l = t.UNSIGNED_BYTE;
              }
              return {
                buffer: o,
                type: l,
                bytesPerElement: r.BYTES_PER_ELEMENT,
                version: e.version,
                size: s,
              };
            })(e, r)
          );
        else if (a.version < e.version) {
          if (a.size !== e.array.byteLength)
            throw new Error(
              "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
            );
          !(function (e, i, r) {
            const a = i.array,
              s = i._updateRange,
              o = i.updateRanges;
            if (
              (t.bindBuffer(r, e),
              -1 === s.count && 0 === o.length && t.bufferSubData(r, 0, a),
              0 !== o.length)
            ) {
              for (let e = 0, i = o.length; e < i; e++) {
                const i = o[e];
                n
                  ? t.bufferSubData(
                      r,
                      i.start * a.BYTES_PER_ELEMENT,
                      a,
                      i.start,
                      i.count
                    )
                  : t.bufferSubData(
                      r,
                      i.start * a.BYTES_PER_ELEMENT,
                      a.subarray(i.start, i.start + i.count)
                    );
              }
              i.clearUpdateRanges();
            }
            -1 !== s.count &&
              (n
                ? t.bufferSubData(
                    r,
                    s.offset * a.BYTES_PER_ELEMENT,
                    a,
                    s.offset,
                    s.count
                  )
                : t.bufferSubData(
                    r,
                    s.offset * a.BYTES_PER_ELEMENT,
                    a.subarray(s.offset, s.offset + s.count)
                  ),
              (s.count = -1)),
              i.onUploadCallback();
          })(a.buffer, e, r),
            (a.version = e.version);
        }
      },
    };
  }
  class ki extends Qn {
    constructor(t = 1, e = 1, n = 1, i = 1) {
      super(),
        (this.type = 'PlaneGeometry'),
        (this.parameters = {
          width: t,
          height: e,
          widthSegments: n,
          heightSegments: i,
        });
      const r = t / 2,
        a = e / 2,
        s = Math.floor(n),
        o = Math.floor(i),
        l = s + 1,
        c = o + 1,
        h = t / s,
        u = e / o,
        d = [],
        p = [],
        f = [],
        m = [];
      for (let t = 0; t < c; t++) {
        const e = t * u - a;
        for (let n = 0; n < l; n++) {
          const i = n * h - r;
          p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - t / o);
        }
      }
      for (let t = 0; t < o; t++)
        for (let e = 0; e < s; e++) {
          const n = e + l * t,
            i = e + l * (t + 1),
            r = e + 1 + l * (t + 1),
            a = e + 1 + l * t;
          d.push(n, i, a), d.push(i, r, a);
        }
      this.setIndex(d),
        this.setAttribute('position', new Xn(p, 3)),
        this.setAttribute('normal', new Xn(f, 3)),
        this.setAttribute('uv', new Xn(m, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new ki(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  }
  const Wi = {
      alphahash_fragment:
        '#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif',
      alphahash_pars_fragment:
        '#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif',
      alphamap_fragment:
        '#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif',
      alphamap_pars_fragment:
        '#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
      alphatest_fragment:
        '#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif',
      alphatest_pars_fragment:
        '#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif',
      aomap_fragment:
        '#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif',
      aomap_pars_fragment:
        '#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif',
      batching_pars_vertex:
        '#ifdef USE_BATCHING\n\tattribute float batchId;\n\tuniform highp sampler2D batchingTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif',
      batching_vertex:
        '#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( batchId );\n#endif',
      begin_vertex:
        'vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif',
      beginnormal_vertex:
        'vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif',
      bsdfs:
        'float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated',
      iridescence_fragment:
        '#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif',
      bumpmap_pars_fragment:
        '#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif',
      clipping_planes_fragment:
        '#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif',
      clipping_planes_pars_fragment:
        '#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif',
      clipping_planes_pars_vertex:
        '#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif',
      clipping_planes_vertex:
        '#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif',
      color_fragment:
        '#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif',
      color_pars_fragment:
        '#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif',
      color_pars_vertex:
        '#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif',
      color_vertex:
        '#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif',
      common:
        '#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated',
      cube_uv_reflection_fragment:
        '#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif',
      defaultnormal_vertex:
        'vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif',
      displacementmap_pars_vertex:
        '#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif',
      displacementmap_vertex:
        '#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif',
      emissivemap_fragment:
        '#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif',
      emissivemap_pars_fragment:
        '#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif',
      colorspace_fragment:
        'gl_FragColor = linearToOutputTexel( gl_FragColor );',
      colorspace_pars_fragment:
        '\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}',
      envmap_fragment:
        '#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif',
      envmap_common_pars_fragment:
        '#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif',
      envmap_pars_fragment:
        '#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif',
      envmap_pars_vertex:
        '#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif',
      envmap_physical_pars_fragment:
        '#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif',
      envmap_vertex:
        '#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif',
      fog_vertex: '#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif',
      fog_pars_vertex: '#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif',
      fog_fragment:
        '#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif',
      fog_pars_fragment:
        '#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif',
      gradientmap_pars_fragment:
        '#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}',
      lightmap_fragment:
        '#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif',
      lightmap_pars_fragment:
        '#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif',
      lights_lambert_fragment:
        'LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;',
      lights_lambert_pars_fragment:
        'varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert',
      lights_pars_begin:
        'uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif',
      lights_toon_fragment:
        'ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;',
      lights_toon_pars_fragment:
        'varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon',
      lights_phong_fragment:
        'BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;',
      lights_phong_pars_fragment:
        'varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong',
      lights_physical_fragment:
        'PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif',
      lights_physical_pars_fragment:
        'struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}',
      lights_fragment_begin:
        '\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif',
      lights_fragment_maps:
        '#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif',
      lights_fragment_end:
        '#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif',
      logdepthbuf_fragment:
        '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif',
      logdepthbuf_pars_fragment:
        '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif',
      logdepthbuf_pars_vertex:
        '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif',
      logdepthbuf_vertex:
        '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif',
      map_fragment:
        '#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif',
      map_pars_fragment: '#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif',
      map_particle_fragment:
        '#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif',
      map_particle_pars_fragment:
        '#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
      metalnessmap_fragment:
        'float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif',
      metalnessmap_pars_fragment:
        '#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif',
      morphinstance_vertex:
        '#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[MORPHTARGETS_COUNT];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif',
      morphcolor_vertex:
        '#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif',
      morphnormal_vertex:
        '#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif',
      morphtarget_pars_vertex:
        '#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t#endif\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\t#ifndef USE_INSTANCING_MORPH\n\t\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\t#endif\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif',
      morphtarget_vertex:
        '#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif',
      normal_fragment_begin:
        'float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;',
      normal_fragment_maps:
        '#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif',
      normal_pars_fragment:
        '#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif',
      normal_pars_vertex:
        '#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif',
      normal_vertex:
        '#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif',
      normalmap_pars_fragment:
        '#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif',
      clearcoat_normal_fragment_begin:
        '#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif',
      clearcoat_normal_fragment_maps:
        '#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif',
      clearcoat_pars_fragment:
        '#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif',
      iridescence_pars_fragment:
        '#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif',
      opaque_fragment:
        '#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );',
      packing:
        'vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}',
      premultiplied_alpha_fragment:
        '#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif',
      project_vertex:
        'vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;',
      dithering_fragment:
        '#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif',
      dithering_pars_fragment:
        '#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif',
      roughnessmap_fragment:
        'float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif',
      roughnessmap_pars_fragment:
        '#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif',
      shadowmap_pars_fragment:
        '#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif',
      shadowmap_pars_vertex:
        '#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif',
      shadowmap_vertex:
        '#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif',
      shadowmask_pars_fragment:
        'float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}',
      skinbase_vertex:
        '#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif',
      skinning_pars_vertex:
        '#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif',
      skinning_vertex:
        '#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif',
      skinnormal_vertex:
        '#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif',
      specularmap_fragment:
        'float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif',
      specularmap_pars_fragment:
        '#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif',
      tonemapping_fragment:
        '#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif',
      tonemapping_pars_fragment:
        '#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tfloat startCompression = 0.8 - 0.04;\n\tfloat desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min(color.r, min(color.g, color.b));\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max(color.r, max(color.g, color.b));\n\tif (peak < startCompression) return color;\n\tfloat d = 1. - startCompression;\n\tfloat newPeak = 1. - d * d / (peak + d - startCompression);\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);\n\treturn mix(color, vec3(1, 1, 1), g);\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }',
      transmission_fragment:
        '#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif',
      transmission_pars_fragment:
        '#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif',
      uv_pars_fragment:
        '#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif',
      uv_pars_vertex:
        '#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif',
      uv_vertex:
        '#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif',
      worldpos_vertex:
        '#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif',
      background_vert:
        'varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}',
      background_frag:
        'uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}',
      backgroundCube_vert:
        'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}',
      backgroundCube_frag:
        '#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}',
      cube_vert:
        'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}',
      cube_frag:
        'uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}',
      depth_vert:
        '#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}',
      depth_frag:
        '#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}',
      distanceRGBA_vert:
        '#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}',
      distanceRGBA_frag:
        '#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}',
      equirect_vert:
        'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}',
      equirect_frag:
        'uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}',
      linedashed_vert:
        'uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
      linedashed_frag:
        'uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}',
      meshbasic_vert:
        '#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}',
      meshbasic_frag:
        'uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshlambert_vert:
        '#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      meshlambert_frag:
        '#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshmatcap_vert:
        '#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}',
      meshmatcap_frag:
        '#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshnormal_vert:
        '#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}',
      meshnormal_frag:
        '#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}',
      meshphong_vert:
        '#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      meshphong_frag:
        '#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshphysical_vert:
        '#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}',
      meshphysical_frag:
        '#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshtoon_vert:
        '#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      meshtoon_frag:
        '#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      points_vert:
        'uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}',
      points_frag:
        'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}',
      shadow_vert:
        '#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      shadow_frag:
        'uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}',
      sprite_vert:
        'uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
      sprite_frag:
        'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}',
    },
    Xi = {
      common: {
        diffuse: { value: new In(16777215) },
        opacity: { value: 1 },
        map: { value: null },
        mapTransform: { value: new kt() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new kt() },
        alphaTest: { value: 0 },
      },
      specularmap: {
        specularMap: { value: null },
        specularMapTransform: { value: new kt() },
      },
      envmap: {
        envMap: { value: null },
        envMapRotation: { value: new kt() },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        ior: { value: 1.5 },
        refractionRatio: { value: 0.98 },
      },
      aomap: {
        aoMap: { value: null },
        aoMapIntensity: { value: 1 },
        aoMapTransform: { value: new kt() },
      },
      lightmap: {
        lightMap: { value: null },
        lightMapIntensity: { value: 1 },
        lightMapTransform: { value: new kt() },
      },
      bumpmap: {
        bumpMap: { value: null },
        bumpMapTransform: { value: new kt() },
        bumpScale: { value: 1 },
      },
      normalmap: {
        normalMap: { value: null },
        normalMapTransform: { value: new kt() },
        normalScale: { value: new Vt(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementMapTransform: { value: new kt() },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      emissivemap: {
        emissiveMap: { value: null },
        emissiveMapTransform: { value: new kt() },
      },
      metalnessmap: {
        metalnessMap: { value: null },
        metalnessMapTransform: { value: new kt() },
      },
      roughnessmap: {
        roughnessMap: { value: null },
        roughnessMapTransform: { value: new kt() },
      },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new In(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} },
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
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
          },
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotLightMap: { value: [] },
        spotShadowMap: { value: [] },
        spotLightMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} },
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
        ltc_1: { value: null },
        ltc_2: { value: null },
      },
      points: {
        diffuse: { value: new In(16777215) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        alphaMapTransform: { value: new kt() },
        alphaTest: { value: 0 },
        uvTransform: { value: new kt() },
      },
      sprite: {
        diffuse: { value: new In(16777215) },
        opacity: { value: 1 },
        center: { value: new Vt(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        mapTransform: { value: new kt() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new kt() },
        alphaTest: { value: 0 },
      },
    },
    ji = {
      basic: {
        uniforms: Si([
          Xi.common,
          Xi.specularmap,
          Xi.envmap,
          Xi.aomap,
          Xi.lightmap,
          Xi.fog,
        ]),
        vertexShader: Wi.meshbasic_vert,
        fragmentShader: Wi.meshbasic_frag,
      },
      lambert: {
        uniforms: Si([
          Xi.common,
          Xi.specularmap,
          Xi.envmap,
          Xi.aomap,
          Xi.lightmap,
          Xi.emissivemap,
          Xi.bumpmap,
          Xi.normalmap,
          Xi.displacementmap,
          Xi.fog,
          Xi.lights,
          { emissive: { value: new In(0) } },
        ]),
        vertexShader: Wi.meshlambert_vert,
        fragmentShader: Wi.meshlambert_frag,
      },
      phong: {
        uniforms: Si([
          Xi.common,
          Xi.specularmap,
          Xi.envmap,
          Xi.aomap,
          Xi.lightmap,
          Xi.emissivemap,
          Xi.bumpmap,
          Xi.normalmap,
          Xi.displacementmap,
          Xi.fog,
          Xi.lights,
          {
            emissive: { value: new In(0) },
            specular: { value: new In(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: Wi.meshphong_vert,
        fragmentShader: Wi.meshphong_frag,
      },
      standard: {
        uniforms: Si([
          Xi.common,
          Xi.envmap,
          Xi.aomap,
          Xi.lightmap,
          Xi.emissivemap,
          Xi.bumpmap,
          Xi.normalmap,
          Xi.displacementmap,
          Xi.roughnessmap,
          Xi.metalnessmap,
          Xi.fog,
          Xi.lights,
          {
            emissive: { value: new In(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: Wi.meshphysical_vert,
        fragmentShader: Wi.meshphysical_frag,
      },
      toon: {
        uniforms: Si([
          Xi.common,
          Xi.aomap,
          Xi.lightmap,
          Xi.emissivemap,
          Xi.bumpmap,
          Xi.normalmap,
          Xi.displacementmap,
          Xi.gradientmap,
          Xi.fog,
          Xi.lights,
          { emissive: { value: new In(0) } },
        ]),
        vertexShader: Wi.meshtoon_vert,
        fragmentShader: Wi.meshtoon_frag,
      },
      matcap: {
        uniforms: Si([
          Xi.common,
          Xi.bumpmap,
          Xi.normalmap,
          Xi.displacementmap,
          Xi.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: Wi.meshmatcap_vert,
        fragmentShader: Wi.meshmatcap_frag,
      },
      points: {
        uniforms: Si([Xi.points, Xi.fog]),
        vertexShader: Wi.points_vert,
        fragmentShader: Wi.points_frag,
      },
      dashed: {
        uniforms: Si([
          Xi.common,
          Xi.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: Wi.linedashed_vert,
        fragmentShader: Wi.linedashed_frag,
      },
      depth: {
        uniforms: Si([Xi.common, Xi.displacementmap]),
        vertexShader: Wi.depth_vert,
        fragmentShader: Wi.depth_frag,
      },
      normal: {
        uniforms: Si([
          Xi.common,
          Xi.bumpmap,
          Xi.normalmap,
          Xi.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: Wi.meshnormal_vert,
        fragmentShader: Wi.meshnormal_frag,
      },
      sprite: {
        uniforms: Si([Xi.sprite, Xi.fog]),
        vertexShader: Wi.sprite_vert,
        fragmentShader: Wi.sprite_frag,
      },
      background: {
        uniforms: {
          uvTransform: { value: new kt() },
          t2D: { value: null },
          backgroundIntensity: { value: 1 },
        },
        vertexShader: Wi.background_vert,
        fragmentShader: Wi.background_frag,
      },
      backgroundCube: {
        uniforms: {
          envMap: { value: null },
          flipEnvMap: { value: -1 },
          backgroundBlurriness: { value: 0 },
          backgroundIntensity: { value: 1 },
          backgroundRotation: { value: new kt() },
        },
        vertexShader: Wi.backgroundCube_vert,
        fragmentShader: Wi.backgroundCube_frag,
      },
      cube: {
        uniforms: {
          tCube: { value: null },
          tFlip: { value: -1 },
          opacity: { value: 1 },
        },
        vertexShader: Wi.cube_vert,
        fragmentShader: Wi.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: Wi.equirect_vert,
        fragmentShader: Wi.equirect_frag,
      },
      distanceRGBA: {
        uniforms: Si([
          Xi.common,
          Xi.displacementmap,
          {
            referencePosition: { value: new me() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: Wi.distanceRGBA_vert,
        fragmentShader: Wi.distanceRGBA_frag,
      },
      shadow: {
        uniforms: Si([
          Xi.lights,
          Xi.fog,
          { color: { value: new In(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: Wi.shadow_vert,
        fragmentShader: Wi.shadow_frag,
      },
    };
  ji.physical = {
    uniforms: Si([
      ji.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatMapTransform: { value: new kt() },
        clearcoatNormalMap: { value: null },
        clearcoatNormalMapTransform: { value: new kt() },
        clearcoatNormalScale: { value: new Vt(1, 1) },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatRoughnessMapTransform: { value: new kt() },
        iridescence: { value: 0 },
        iridescenceMap: { value: null },
        iridescenceMapTransform: { value: new kt() },
        iridescenceIOR: { value: 1.3 },
        iridescenceThicknessMinimum: { value: 100 },
        iridescenceThicknessMaximum: { value: 400 },
        iridescenceThicknessMap: { value: null },
        iridescenceThicknessMapTransform: { value: new kt() },
        sheen: { value: 0 },
        sheenColor: { value: new In(0) },
        sheenColorMap: { value: null },
        sheenColorMapTransform: { value: new kt() },
        sheenRoughness: { value: 1 },
        sheenRoughnessMap: { value: null },
        sheenRoughnessMapTransform: { value: new kt() },
        transmission: { value: 0 },
        transmissionMap: { value: null },
        transmissionMapTransform: { value: new kt() },
        transmissionSamplerSize: { value: new Vt() },
        transmissionSamplerMap: { value: null },
        thickness: { value: 0 },
        thicknessMap: { value: null },
        thicknessMapTransform: { value: new kt() },
        attenuationDistance: { value: 0 },
        attenuationColor: { value: new In(0) },
        specularColor: { value: new In(1, 1, 1) },
        specularColorMap: { value: null },
        specularColorMapTransform: { value: new kt() },
        specularIntensity: { value: 1 },
        specularIntensityMap: { value: null },
        specularIntensityMapTransform: { value: new kt() },
        anisotropyVector: { value: new Vt() },
        anisotropyMap: { value: null },
        anisotropyMapTransform: { value: new kt() },
      },
    ]),
    vertexShader: Wi.meshphysical_vert,
    fragmentShader: Wi.meshphysical_frag,
  };
  const qi = { r: 0, b: 0, g: 0 },
    Yi = new en(),
    Ki = new Xe();
  function Zi(t, e, n, i, s, o, l) {
    const c = new In(0);
    let h,
      u,
      d = !0 === o ? 0 : 1,
      p = null,
      f = 0,
      m = null;
    function g(e, n) {
      e.getRGB(qi, Ei(t)), i.buffers.color.setClear(qi.r, qi.g, qi.b, n, l);
    }
    return {
      getClearColor: function () {
        return c;
      },
      setClearColor: function (t, e = 1) {
        c.set(t), (d = e), g(c, d);
      },
      getClearAlpha: function () {
        return d;
      },
      setClearAlpha: function (t) {
        (d = t), g(c, d);
      },
      render: function (o, _) {
        let v = !1,
          x = !0 === _.isScene ? _.background : null;
        if (x && x.isTexture) {
          x = (_.backgroundBlurriness > 0 ? n : e).get(x);
        }
        null === x ? g(c, d) : x && x.isColor && (g(x, 1), (v = !0));
        const M = t.xr.getEnvironmentBlendMode();
        'additive' === M
          ? i.buffers.color.setClear(0, 0, 0, 1, l)
          : 'alpha-blend' === M && i.buffers.color.setClear(0, 0, 0, 0, l),
          (t.autoClear || v) &&
            t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
          x && (x.isCubeTexture || x.mapping === B)
            ? (void 0 === u &&
                ((u = new _i(
                  new xi(1, 1, 1),
                  new yi({
                    name: 'BackgroundCubeMaterial',
                    uniforms: Mi(ji.backgroundCube.uniforms),
                    vertexShader: ji.backgroundCube.vertexShader,
                    fragmentShader: ji.backgroundCube.fragmentShader,
                    side: a,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                u.geometry.deleteAttribute('normal'),
                u.geometry.deleteAttribute('uv'),
                (u.onBeforeRender = function (t, e, n) {
                  this.matrixWorld.copyPosition(n.matrixWorld);
                }),
                Object.defineProperty(u.material, 'envMap', {
                  get: function () {
                    return this.uniforms.envMap.value;
                  },
                }),
                s.update(u)),
              Yi.copy(_.backgroundRotation),
              (Yi.x *= -1),
              (Yi.y *= -1),
              (Yi.z *= -1),
              x.isCubeTexture &&
                !1 === x.isRenderTargetTexture &&
                ((Yi.y *= -1), (Yi.z *= -1)),
              (u.material.uniforms.envMap.value = x),
              (u.material.uniforms.flipEnvMap.value =
                x.isCubeTexture && !1 === x.isRenderTargetTexture ? -1 : 1),
              (u.material.uniforms.backgroundBlurriness.value =
                _.backgroundBlurriness),
              (u.material.uniforms.backgroundIntensity.value =
                _.backgroundIntensity),
              u.material.uniforms.backgroundRotation.value.setFromMatrix4(
                Ki.makeRotationFromEuler(Yi)
              ),
              (u.material.toneMapped = Qt.getTransfer(x.colorSpace) !== mt),
              (p === x && f === x.version && m === t.toneMapping) ||
                ((u.material.needsUpdate = !0),
                (p = x),
                (f = x.version),
                (m = t.toneMapping)),
              u.layers.enableAll(),
              o.unshift(u, u.geometry, u.material, 0, 0, null))
            : x &&
              x.isTexture &&
              (void 0 === h &&
                ((h = new _i(
                  new ki(2, 2),
                  new yi({
                    name: 'BackgroundMaterial',
                    uniforms: Mi(ji.background.uniforms),
                    vertexShader: ji.background.vertexShader,
                    fragmentShader: ji.background.fragmentShader,
                    side: r,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                h.geometry.deleteAttribute('normal'),
                Object.defineProperty(h.material, 'map', {
                  get: function () {
                    return this.uniforms.t2D.value;
                  },
                }),
                s.update(h)),
              (h.material.uniforms.t2D.value = x),
              (h.material.uniforms.backgroundIntensity.value =
                _.backgroundIntensity),
              (h.material.toneMapped = Qt.getTransfer(x.colorSpace) !== mt),
              !0 === x.matrixAutoUpdate && x.updateMatrix(),
              h.material.uniforms.uvTransform.value.copy(x.matrix),
              (p === x && f === x.version && m === t.toneMapping) ||
                ((h.material.needsUpdate = !0),
                (p = x),
                (f = x.version),
                (m = t.toneMapping)),
              h.layers.enableAll(),
              o.unshift(h, h.geometry, h.material, 0, 0, null));
      },
    };
  }
  function Ji(t, e, n, i) {
    const r = t.getParameter(t.MAX_VERTEX_ATTRIBS),
      a = i.isWebGL2 ? null : e.get('OES_vertex_array_object'),
      s = i.isWebGL2 || null !== a,
      o = {},
      l = p(null);
    let c = l,
      h = !1;
    function u(e) {
      return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
    }
    function d(e) {
      return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e);
    }
    function p(t) {
      const e = [],
        n = [],
        i = [];
      for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: i,
        object: t,
        attributes: {},
        index: null,
      };
    }
    function f() {
      const t = c.newAttributes;
      for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
    }
    function m(t) {
      g(t, 0);
    }
    function g(n, r) {
      const a = c.newAttributes,
        s = c.enabledAttributes,
        o = c.attributeDivisors;
      if (
        ((a[n] = 1),
        0 === s[n] && (t.enableVertexAttribArray(n), (s[n] = 1)),
        o[n] !== r)
      ) {
        (i.isWebGL2 ? t : e.get('ANGLE_instanced_arrays'))[
          i.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
        ](n, r),
          (o[n] = r);
      }
    }
    function _() {
      const e = c.newAttributes,
        n = c.enabledAttributes;
      for (let i = 0, r = n.length; i < r; i++)
        n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
    }
    function v(e, n, i, r, a, s, o) {
      !0 === o
        ? t.vertexAttribIPointer(e, n, i, a, s)
        : t.vertexAttribPointer(e, n, i, r, a, s);
    }
    function x() {
      M(), (h = !0), c !== l && ((c = l), u(c.object));
    }
    function M() {
      (l.geometry = null), (l.program = null), (l.wireframe = !1);
    }
    return {
      setup: function (r, l, d, x, M) {
        let S = !1;
        if (s) {
          const e = (function (e, n, r) {
            const s = !0 === r.wireframe;
            let l = o[e.id];
            void 0 === l && ((l = {}), (o[e.id] = l));
            let c = l[n.id];
            void 0 === c && ((c = {}), (l[n.id] = c));
            let h = c[s];
            void 0 === h &&
              ((h = p(
                i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()
              )),
              (c[s] = h));
            return h;
          })(x, d, l);
          c !== e && ((c = e), u(c.object)),
            (S = (function (t, e, n, i) {
              const r = c.attributes,
                a = e.attributes;
              let s = 0;
              const o = n.getAttributes();
              for (const e in o) {
                if (o[e].location >= 0) {
                  const n = r[e];
                  let i = a[e];
                  if (
                    (void 0 === i &&
                      ('instanceMatrix' === e &&
                        t.instanceMatrix &&
                        (i = t.instanceMatrix),
                      'instanceColor' === e &&
                        t.instanceColor &&
                        (i = t.instanceColor)),
                    void 0 === n)
                  )
                    return !0;
                  if (n.attribute !== i) return !0;
                  if (i && n.data !== i.data) return !0;
                  s++;
                }
              }
              return c.attributesNum !== s || c.index !== i;
            })(r, x, d, M)),
            S &&
              (function (t, e, n, i) {
                const r = {},
                  a = e.attributes;
                let s = 0;
                const o = n.getAttributes();
                for (const e in o) {
                  if (o[e].location >= 0) {
                    let n = a[e];
                    void 0 === n &&
                      ('instanceMatrix' === e &&
                        t.instanceMatrix &&
                        (n = t.instanceMatrix),
                      'instanceColor' === e &&
                        t.instanceColor &&
                        (n = t.instanceColor));
                    const i = {};
                    (i.attribute = n),
                      n && n.data && (i.data = n.data),
                      (r[e] = i),
                      s++;
                  }
                }
                (c.attributes = r), (c.attributesNum = s), (c.index = i);
              })(r, x, d, M);
        } else {
          const t = !0 === l.wireframe;
          (c.geometry === x.id && c.program === d.id && c.wireframe === t) ||
            ((c.geometry = x.id),
            (c.program = d.id),
            (c.wireframe = t),
            (S = !0));
        }
        null !== M && n.update(M, t.ELEMENT_ARRAY_BUFFER),
          (S || h) &&
            ((h = !1),
            (function (r, a, s, o) {
              if (
                !1 === i.isWebGL2 &&
                (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                null === e.get('ANGLE_instanced_arrays')
              )
                return;
              f();
              const l = o.attributes,
                c = s.getAttributes(),
                h = a.defaultAttributeValues;
              for (const e in c) {
                const a = c[e];
                if (a.location >= 0) {
                  let s = l[e];
                  if (
                    (void 0 === s &&
                      ('instanceMatrix' === e &&
                        r.instanceMatrix &&
                        (s = r.instanceMatrix),
                      'instanceColor' === e &&
                        r.instanceColor &&
                        (s = r.instanceColor)),
                    void 0 !== s)
                  ) {
                    const e = s.normalized,
                      l = s.itemSize,
                      c = n.get(s);
                    if (void 0 === c) continue;
                    const h = c.buffer,
                      u = c.type,
                      d = c.bytesPerElement,
                      p =
                        !0 === i.isWebGL2 &&
                        (u === t.INT ||
                          u === t.UNSIGNED_INT ||
                          s.gpuType === Z);
                    if (s.isInterleavedBufferAttribute) {
                      const n = s.data,
                        i = n.stride,
                        c = s.offset;
                      if (n.isInstancedInterleavedBuffer) {
                        for (let t = 0; t < a.locationSize; t++)
                          g(a.location + t, n.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = n.meshPerAttribute * n.count);
                      } else
                        for (let t = 0; t < a.locationSize; t++)
                          m(a.location + t);
                      t.bindBuffer(t.ARRAY_BUFFER, h);
                      for (let t = 0; t < a.locationSize; t++)
                        v(
                          a.location + t,
                          l / a.locationSize,
                          u,
                          e,
                          i * d,
                          (c + (l / a.locationSize) * t) * d,
                          p
                        );
                    } else {
                      if (s.isInstancedBufferAttribute) {
                        for (let t = 0; t < a.locationSize; t++)
                          g(a.location + t, s.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = s.meshPerAttribute * s.count);
                      } else
                        for (let t = 0; t < a.locationSize; t++)
                          m(a.location + t);
                      t.bindBuffer(t.ARRAY_BUFFER, h);
                      for (let t = 0; t < a.locationSize; t++)
                        v(
                          a.location + t,
                          l / a.locationSize,
                          u,
                          e,
                          l * d,
                          (l / a.locationSize) * t * d,
                          p
                        );
                    }
                  } else if (void 0 !== h) {
                    const n = h[e];
                    if (void 0 !== n)
                      switch (n.length) {
                        case 2:
                          t.vertexAttrib2fv(a.location, n);
                          break;
                        case 3:
                          t.vertexAttrib3fv(a.location, n);
                          break;
                        case 4:
                          t.vertexAttrib4fv(a.location, n);
                          break;
                        default:
                          t.vertexAttrib1fv(a.location, n);
                      }
                  }
                }
              }
              _();
            })(r, l, d, x),
            null !== M &&
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(M).buffer));
      },
      reset: x,
      resetDefaultState: M,
      dispose: function () {
        x();
        for (const t in o) {
          const e = o[t];
          for (const t in e) {
            const n = e[t];
            for (const t in n) d(n[t].object), delete n[t];
            delete e[t];
          }
          delete o[t];
        }
      },
      releaseStatesOfGeometry: function (t) {
        if (void 0 === o[t.id]) return;
        const e = o[t.id];
        for (const t in e) {
          const n = e[t];
          for (const t in n) d(n[t].object), delete n[t];
          delete e[t];
        }
        delete o[t.id];
      },
      releaseStatesOfProgram: function (t) {
        for (const e in o) {
          const n = o[e];
          if (void 0 === n[t.id]) continue;
          const i = n[t.id];
          for (const t in i) d(i[t].object), delete i[t];
          delete n[t.id];
        }
      },
      initAttributes: f,
      enableAttribute: m,
      disableUnusedAttributes: _,
    };
  }
  function $i(t, e, n, i) {
    const r = i.isWebGL2;
    let a;
    (this.setMode = function (t) {
      a = t;
    }),
      (this.render = function (e, i) {
        t.drawArrays(a, e, i), n.update(i, a, 1);
      }),
      (this.renderInstances = function (i, s, o) {
        if (0 === o) return;
        let l, c;
        if (r) (l = t), (c = 'drawArraysInstanced');
        else if (
          ((l = e.get('ANGLE_instanced_arrays')),
          (c = 'drawArraysInstancedANGLE'),
          null === l)
        )
          return void console.error(
            'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
          );
        l[c](a, i, s, o), n.update(s, a, o);
      }),
      (this.renderMultiDraw = function (t, i, r) {
        if (0 === r) return;
        const s = e.get('WEBGL_multi_draw');
        if (null === s) for (let e = 0; e < r; e++) this.render(t[e], i[e]);
        else {
          s.multiDrawArraysWEBGL(a, t, 0, i, 0, r);
          let e = 0;
          for (let t = 0; t < r; t++) e += i[t];
          n.update(e, a, 1);
        }
      });
  }
  function Qi(t, e, n) {
    let i;
    function r(e) {
      if ('highp' === e) {
        if (
          t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision >
            0 &&
          t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)
            .precision > 0
        )
          return 'highp';
        e = 'mediump';
      }
      return 'mediump' === e &&
        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision >
          0 &&
        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)
          .precision > 0
        ? 'mediump'
        : 'lowp';
    }
    const a =
      'undefined' != typeof WebGL2RenderingContext &&
      'WebGL2RenderingContext' === t.constructor.name;
    let s = void 0 !== n.precision ? n.precision : 'highp';
    const o = r(s);
    o !== s &&
      (console.warn(
        'THREE.WebGLRenderer:',
        s,
        'not supported, using',
        o,
        'instead.'
      ),
      (s = o));
    const l = a || e.has('WEBGL_draw_buffers'),
      c = !0 === n.logarithmicDepthBuffer,
      h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
      u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      d = t.getParameter(t.MAX_TEXTURE_SIZE),
      p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
      f = t.getParameter(t.MAX_VERTEX_ATTRIBS),
      m = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
      g = t.getParameter(t.MAX_VARYING_VECTORS),
      _ = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
      v = u > 0,
      x = a || e.has('OES_texture_float');
    return {
      isWebGL2: a,
      drawBuffers: l,
      getMaxAnisotropy: function () {
        if (void 0 !== i) return i;
        if (!0 === e.has('EXT_texture_filter_anisotropic')) {
          const n = e.get('EXT_texture_filter_anisotropic');
          i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else i = 0;
        return i;
      },
      getMaxPrecision: r,
      precision: s,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: u,
      maxTextureSize: d,
      maxCubemapSize: p,
      maxAttributes: f,
      maxVertexUniforms: m,
      maxVaryings: g,
      maxFragmentUniforms: _,
      vertexTextures: v,
      floatFragmentTextures: x,
      floatVertexTextures: v && x,
      maxSamples: a ? t.getParameter(t.MAX_SAMPLES) : 0,
    };
  }
  function tr(t) {
    const e = this;
    let n = null,
      i = 0,
      r = !1,
      a = !1;
    const s = new Fi(),
      o = new kt(),
      l = { value: null, needsUpdate: !1 };
    function c(t, n, i, r) {
      const a = null !== t ? t.length : 0;
      let c = null;
      if (0 !== a) {
        if (((c = l.value), !0 !== r || null === c)) {
          const e = i + 4 * a,
            r = n.matrixWorldInverse;
          o.getNormalMatrix(r),
            (null === c || c.length < e) && (c = new Float32Array(e));
          for (let e = 0, n = i; e !== a; ++e, n += 4)
            s.copy(t[e]).applyMatrix4(r, o),
              s.normal.toArray(c, n),
              (c[n + 3] = s.constant);
        }
        (l.value = c), (l.needsUpdate = !0);
      }
      return (e.numPlanes = a), (e.numIntersection = 0), c;
    }
    (this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (t, e) {
        const n = 0 !== t.length || e || 0 !== i || r;
        return (r = e), (i = t.length), n;
      }),
      (this.beginShadows = function () {
        (a = !0), c(null);
      }),
      (this.endShadows = function () {
        a = !1;
      }),
      (this.setGlobalState = function (t, e) {
        n = c(t, e, 0);
      }),
      (this.setState = function (s, o, h) {
        const u = s.clippingPlanes,
          d = s.clipIntersection,
          p = s.clipShadows,
          f = t.get(s);
        if (!r || null === u || 0 === u.length || (a && !p))
          a
            ? c(null)
            : (function () {
                l.value !== n && ((l.value = n), (l.needsUpdate = i > 0));
                (e.numPlanes = i), (e.numIntersection = 0);
              })();
        else {
          const t = a ? 0 : i,
            e = 4 * t;
          let r = f.clippingState || null;
          (l.value = r), (r = c(u, o, e, h));
          for (let t = 0; t !== e; ++t) r[t] = n[t];
          (f.clippingState = r),
            (this.numIntersection = d ? this.numPlanes : 0),
            (this.numPlanes += t);
        }
      });
  }
  function er(t) {
    let e = new WeakMap();
    function n(t, e) {
      return 303 === e ? (t.mapping = O) : 304 === e && (t.mapping = F), t;
    }
    function i(t) {
      const n = t.target;
      n.removeEventListener('dispose', i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          const a = r.mapping;
          if (303 === a || 304 === a) {
            if (e.has(r)) {
              return n(e.get(r).texture, r.mapping);
            }
            {
              const a = r.image;
              if (a && a.height > 0) {
                const s = new Di(a.height);
                return (
                  s.fromEquirectangularTexture(t, r),
                  e.set(r, s),
                  r.addEventListener('dispose', i),
                  n(s.texture, r.mapping)
                );
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  class nr extends bi {
    constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
      super(),
        (this.isOrthographicCamera = !0),
        (this.type = 'OrthographicCamera'),
        (this.zoom = 1),
        (this.view = null),
        (this.left = t),
        (this.right = e),
        (this.top = n),
        (this.bottom = i),
        (this.near = r),
        (this.far = a),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.left = t.left),
        (this.right = t.right),
        (this.top = t.top),
        (this.bottom = t.bottom),
        (this.near = t.near),
        (this.far = t.far),
        (this.zoom = t.zoom),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        this
      );
    }
    setViewOffset(t, e, n, i, r, a) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
      let r = n - t,
        a = n + t,
        s = i + e,
        o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
          e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (r += t * this.view.offsetX),
          (a = r + t * this.view.width),
          (s -= e * this.view.offsetY),
          (o = s - e * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(
        r,
        a,
        s,
        o,
        this.near,
        this.far,
        this.coordinateSystem
      ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.zoom = this.zoom),
        (e.object.left = this.left),
        (e.object.right = this.right),
        (e.object.top = this.top),
        (e.object.bottom = this.bottom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        e
      );
    }
  }
  const ir = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    rr = 20,
    ar = new nr(),
    sr = new In();
  let or = null,
    lr = 0,
    cr = 0;
  const hr = (1 + Math.sqrt(5)) / 2,
    ur = 1 / hr,
    dr = [
      new me(1, 1, 1),
      new me(-1, 1, 1),
      new me(1, 1, -1),
      new me(-1, 1, -1),
      new me(0, hr, ur),
      new me(0, hr, -ur),
      new me(ur, 0, hr),
      new me(-ur, 0, hr),
      new me(hr, ur, 0),
      new me(-hr, ur, 0),
    ];
  class pr {
    constructor(t) {
      (this._renderer = t),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._lodPlanes = []),
        (this._sizeLods = []),
        (this._sigmas = []),
        (this._blurMaterial = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        this._compileMaterial(this._blurMaterial);
    }
    fromScene(t, e = 0, n = 0.1, i = 100) {
      (or = this._renderer.getRenderTarget()),
        (lr = this._renderer.getActiveCubeFace()),
        (cr = this._renderer.getActiveMipmapLevel()),
        this._setSize(256);
      const r = this._allocateTargets();
      return (
        (r.depthBuffer = !0),
        this._sceneToCubeUV(t, n, i, r),
        e > 0 && this._blur(r, 0, 0, e),
        this._applyPMREM(r),
        this._cleanup(r),
        r
      );
    }
    fromEquirectangular(t, e = null) {
      return this._fromTexture(t, e);
    }
    fromCubemap(t, e = null) {
      return this._fromTexture(t, e);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial &&
        ((this._cubemapMaterial = _r()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial &&
        ((this._equirectMaterial = gr()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(),
        null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
        null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(t) {
      (this._lodMax = Math.floor(Math.log2(t))),
        (this._cubeSize = Math.pow(2, this._lodMax));
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(),
        null !== this._pingPongRenderTarget &&
          this._pingPongRenderTarget.dispose();
      for (let t = 0; t < this._lodPlanes.length; t++)
        this._lodPlanes[t].dispose();
    }
    _cleanup(t) {
      this._renderer.setRenderTarget(or, lr, cr),
        (t.scissorTest = !1),
        mr(t, 0, 0, t.width, t.height);
    }
    _fromTexture(t, e) {
      t.mapping === O || t.mapping === F
        ? this._setSize(
            0 === t.image.length
              ? 16
              : t.image[0].width || t.image[0].image.width
          )
        : this._setSize(t.image.width / 4),
        (or = this._renderer.getRenderTarget()),
        (lr = this._renderer.getActiveCubeFace()),
        (cr = this._renderer.getActiveMipmapLevel());
      const n = e || this._allocateTargets();
      return (
        this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
      );
    }
    _allocateTargets() {
      const t = 3 * Math.max(this._cubeSize, 112),
        e = 4 * this._cubeSize,
        n = {
          magFilter: X,
          minFilter: X,
          generateMipmaps: !1,
          type: Q,
          format: et,
          colorSpace: ut,
          depthBuffer: !1,
        },
        i = fr(t, e, n);
      if (
        null === this._pingPongRenderTarget ||
        this._pingPongRenderTarget.width !== t ||
        this._pingPongRenderTarget.height !== e
      ) {
        null !== this._pingPongRenderTarget && this._dispose(),
          (this._pingPongRenderTarget = fr(t, e, n));
        const { _lodMax: i } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas,
        } = (function (t) {
          const e = [],
            n = [],
            i = [];
          let r = t;
          const a = t - 4 + 1 + ir.length;
          for (let s = 0; s < a; s++) {
            const a = Math.pow(2, r);
            n.push(a);
            let o = 1 / a;
            s > t - 4 ? (o = ir[s - t + 4 - 1]) : 0 === s && (o = 0), i.push(o);
            const l = 1 / (a - 2),
              c = -l,
              h = 1 + l,
              u = [c, c, h, c, h, h, c, c, h, h, c, h],
              d = 6,
              p = 6,
              f = 3,
              m = 2,
              g = 1,
              _ = new Float32Array(f * p * d),
              v = new Float32Array(m * p * d),
              x = new Float32Array(g * p * d);
            for (let t = 0; t < d; t++) {
              const e = ((t % 3) * 2) / 3 - 1,
                n = t > 2 ? 0 : -1,
                i = [
                  e,
                  n,
                  0,
                  e + 2 / 3,
                  n,
                  0,
                  e + 2 / 3,
                  n + 1,
                  0,
                  e,
                  n,
                  0,
                  e + 2 / 3,
                  n + 1,
                  0,
                  e,
                  n + 1,
                  0,
                ];
              _.set(i, f * p * t), v.set(u, m * p * t);
              const r = [t, t, t, t, t, t];
              x.set(r, g * p * t);
            }
            const M = new Qn();
            M.setAttribute('position', new Vn(_, f)),
              M.setAttribute('uv', new Vn(v, m)),
              M.setAttribute('faceIndex', new Vn(x, g)),
              e.push(M),
              r > 4 && r--;
          }
          return { lodPlanes: e, sizeLods: n, sigmas: i };
        })(i)),
          (this._blurMaterial = (function (t, e, n) {
            const i = new Float32Array(rr),
              r = new me(0, 1, 0),
              a = new yi({
                name: 'SphericalGaussianBlur',
                defines: {
                  n: rr,
                  CUBEUV_TEXEL_WIDTH: 1 / e,
                  CUBEUV_TEXEL_HEIGHT: 1 / n,
                  CUBEUV_MAX_MIP: `${t}.0`,
                },
                uniforms: {
                  envMap: { value: null },
                  samples: { value: 1 },
                  weights: { value: i },
                  latitudinal: { value: !1 },
                  dTheta: { value: 0 },
                  mipInt: { value: 0 },
                  poleAxis: { value: r },
                },
                vertexShader: vr(),
                fragmentShader:
                  "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                blending: 0,
                depthTest: !1,
                depthWrite: !1,
              });
            return a;
          })(i, t, e));
      }
      return i;
    }
    _compileMaterial(t) {
      const e = new _i(this._lodPlanes[0], t);
      this._renderer.compile(e, ar);
    }
    _sceneToCubeUV(t, e, n, i) {
      const r = new Ci(90, 1, e, n),
        s = [1, -1, 1, 1, 1, 1],
        o = [1, 1, 1, -1, -1, -1],
        l = this._renderer,
        c = l.autoClear,
        h = l.toneMapping;
      l.getClearColor(sr), (l.toneMapping = R), (l.autoClear = !1);
      const u = new zn({
          name: 'PMREM.Background',
          side: a,
          depthWrite: !1,
          depthTest: !1,
        }),
        d = new _i(new xi(), u);
      let p = !1;
      const f = t.background;
      f
        ? f.isColor && (u.color.copy(f), (t.background = null), (p = !0))
        : (u.color.copy(sr), (p = !0));
      for (let e = 0; e < 6; e++) {
        const n = e % 3;
        0 === n
          ? (r.up.set(0, s[e], 0), r.lookAt(o[e], 0, 0))
          : 1 === n
            ? (r.up.set(0, 0, s[e]), r.lookAt(0, o[e], 0))
            : (r.up.set(0, s[e], 0), r.lookAt(0, 0, o[e]));
        const a = this._cubeSize;
        mr(i, n * a, e > 2 ? a : 0, a, a),
          l.setRenderTarget(i),
          p && l.render(d, r),
          l.render(t, r);
      }
      d.geometry.dispose(),
        d.material.dispose(),
        (l.toneMapping = h),
        (l.autoClear = c),
        (t.background = f);
    }
    _textureToCubeUV(t, e) {
      const n = this._renderer,
        i = t.mapping === O || t.mapping === F;
      i
        ? (null === this._cubemapMaterial && (this._cubemapMaterial = _r()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            !1 === t.isRenderTargetTexture ? -1 : 1))
        : null === this._equirectMaterial && (this._equirectMaterial = gr());
      const r = i ? this._cubemapMaterial : this._equirectMaterial,
        a = new _i(this._lodPlanes[0], r);
      r.uniforms.envMap.value = t;
      const s = this._cubeSize;
      mr(e, 0, 0, 3 * s, 2 * s), n.setRenderTarget(e), n.render(a, ar);
    }
    _applyPMREM(t) {
      const e = this._renderer,
        n = e.autoClear;
      e.autoClear = !1;
      for (let e = 1; e < this._lodPlanes.length; e++) {
        const n = Math.sqrt(
            this._sigmas[e] * this._sigmas[e] -
              this._sigmas[e - 1] * this._sigmas[e - 1]
          ),
          i = dr[(e - 1) % dr.length];
        this._blur(t, e - 1, e, n, i);
      }
      e.autoClear = n;
    }
    _blur(t, e, n, i, r) {
      const a = this._pingPongRenderTarget;
      this._halfBlur(t, a, e, n, i, 'latitudinal', r),
        this._halfBlur(a, t, n, n, i, 'longitudinal', r);
    }
    _halfBlur(t, e, n, i, r, a, s) {
      const o = this._renderer,
        l = this._blurMaterial;
      'latitudinal' !== a &&
        'longitudinal' !== a &&
        console.error(
          'blur direction must be either latitudinal or longitudinal!'
        );
      const c = new _i(this._lodPlanes[i], l),
        h = l.uniforms,
        u = this._sizeLods[n] - 1,
        d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
        p = r / d,
        f = isFinite(r) ? 1 + Math.floor(3 * p) : rr;
      f > rr &&
        console.warn(
          `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
        );
      const m = [];
      let g = 0;
      for (let t = 0; t < rr; ++t) {
        const e = t / p,
          n = Math.exp((-e * e) / 2);
        m.push(n), 0 === t ? (g += n) : t < f && (g += 2 * n);
      }
      for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
      (h.envMap.value = t.texture),
        (h.samples.value = f),
        (h.weights.value = m),
        (h.latitudinal.value = 'latitudinal' === a),
        s && (h.poleAxis.value = s);
      const { _lodMax: _ } = this;
      (h.dTheta.value = d), (h.mipInt.value = _ - n);
      const v = this._sizeLods[i];
      mr(
        e,
        3 * v * (i > _ - 4 ? i - _ + 4 : 0),
        4 * (this._cubeSize - v),
        3 * v,
        2 * v
      ),
        o.setRenderTarget(e),
        o.render(c, ar);
    }
  }
  function fr(t, e, n) {
    const i = new ue(t, e, n);
    return (
      (i.texture.mapping = B),
      (i.texture.name = 'PMREM.cubeUv'),
      (i.scissorTest = !0),
      i
    );
  }
  function mr(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
  }
  function gr() {
    return new yi({
      name: 'EquirectangularToCubeUV',
      uniforms: { envMap: { value: null } },
      vertexShader: vr(),
      fragmentShader:
        '\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t',
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function _r() {
    return new yi({
      name: 'CubemapToCubeUV',
      uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
      vertexShader: vr(),
      fragmentShader:
        '\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t',
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function vr() {
    return '\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t';
  }
  function xr(t) {
    let e = new WeakMap(),
      n = null;
    function i(t) {
      const n = t.target;
      n.removeEventListener('dispose', i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          const a = r.mapping,
            s = 303 === a || 304 === a,
            o = a === O || a === F;
          if (s || o) {
            if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
              r.needsPMREMUpdate = !1;
              let i = e.get(r);
              return (
                null === n && (n = new pr(t)),
                (i = s ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i)),
                e.set(r, i),
                i.texture
              );
            }
            if (e.has(r)) return e.get(r).texture;
            {
              const a = r.image;
              if (
                (s && a && a.height > 0) ||
                (o &&
                  a &&
                  (function (t) {
                    let e = 0;
                    const n = 6;
                    for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                    return e === n;
                  })(a))
              ) {
                null === n && (n = new pr(t));
                const a = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
                return e.set(r, a), r.addEventListener('dispose', i), a.texture;
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
      },
    };
  }
  function Mr(t) {
    const e = {};
    function n(n) {
      if (void 0 !== e[n]) return e[n];
      let i;
      switch (n) {
        case 'WEBGL_depth_texture':
          i =
            t.getExtension('WEBGL_depth_texture') ||
            t.getExtension('MOZ_WEBGL_depth_texture') ||
            t.getExtension('WEBKIT_WEBGL_depth_texture');
          break;
        case 'EXT_texture_filter_anisotropic':
          i =
            t.getExtension('EXT_texture_filter_anisotropic') ||
            t.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
            t.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
          break;
        case 'WEBGL_compressed_texture_s3tc':
          i =
            t.getExtension('WEBGL_compressed_texture_s3tc') ||
            t.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
            t.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
          break;
        case 'WEBGL_compressed_texture_pvrtc':
          i =
            t.getExtension('WEBGL_compressed_texture_pvrtc') ||
            t.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
          break;
        default:
          i = t.getExtension(n);
      }
      return (e[n] = i), i;
    }
    return {
      has: function (t) {
        return null !== n(t);
      },
      init: function (t) {
        t.isWebGL2
          ? (n('EXT_color_buffer_float'), n('WEBGL_clip_cull_distance'))
          : (n('WEBGL_depth_texture'),
            n('OES_texture_float'),
            n('OES_texture_half_float'),
            n('OES_texture_half_float_linear'),
            n('OES_standard_derivatives'),
            n('OES_element_index_uint'),
            n('OES_vertex_array_object'),
            n('ANGLE_instanced_arrays')),
          n('OES_texture_float_linear'),
          n('EXT_color_buffer_half_float'),
          n('WEBGL_multisampled_render_to_texture');
      },
      get: function (t) {
        const e = n(t);
        return (
          null === e &&
            console.warn(
              'THREE.WebGLRenderer: ' + t + ' extension not supported.'
            ),
          e
        );
      },
    };
  }
  function Sr(t, e, n, i) {
    const r = {},
      a = new WeakMap();
    function s(t) {
      const o = t.target;
      null !== o.index && e.remove(o.index);
      for (const t in o.attributes) e.remove(o.attributes[t]);
      for (const t in o.morphAttributes) {
        const n = o.morphAttributes[t];
        for (let t = 0, i = n.length; t < i; t++) e.remove(n[t]);
      }
      o.removeEventListener('dispose', s), delete r[o.id];
      const l = a.get(o);
      l && (e.remove(l), a.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--;
    }
    function o(t) {
      const n = [],
        i = t.index,
        r = t.attributes.position;
      let s = 0;
      if (null !== i) {
        const t = i.array;
        s = i.version;
        for (let e = 0, i = t.length; e < i; e += 3) {
          const i = t[e + 0],
            r = t[e + 1],
            a = t[e + 2];
          n.push(i, r, r, a, a, i);
        }
      } else {
        if (void 0 === r) return;
        {
          const t = r.array;
          s = r.version;
          for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
            const t = e + 0,
              i = e + 1,
              r = e + 2;
            n.push(t, i, i, r, r, t);
          }
        }
      }
      const o = new (Xt(n) ? Wn : kn)(n, 1);
      o.version = s;
      const l = a.get(t);
      l && e.remove(l), a.set(t, o);
    }
    return {
      get: function (t, e) {
        return (
          !0 === r[e.id] ||
            (e.addEventListener('dispose', s),
            (r[e.id] = !0),
            n.memory.geometries++),
          e
        );
      },
      update: function (n) {
        const i = n.attributes;
        for (const n in i) e.update(i[n], t.ARRAY_BUFFER);
        const r = n.morphAttributes;
        for (const n in r) {
          const i = r[n];
          for (let n = 0, r = i.length; n < r; n++)
            e.update(i[n], t.ARRAY_BUFFER);
        }
      },
      getWireframeAttribute: function (t) {
        const e = a.get(t);
        if (e) {
          const n = t.index;
          null !== n && e.version < n.version && o(t);
        } else o(t);
        return a.get(t);
      },
    };
  }
  function Er(t, e, n, i) {
    const r = i.isWebGL2;
    let a, s, o;
    (this.setMode = function (t) {
      a = t;
    }),
      (this.setIndex = function (t) {
        (s = t.type), (o = t.bytesPerElement);
      }),
      (this.render = function (e, i) {
        t.drawElements(a, i, s, e * o), n.update(i, a, 1);
      }),
      (this.renderInstances = function (i, l, c) {
        if (0 === c) return;
        let h, u;
        if (r) (h = t), (u = 'drawElementsInstanced');
        else if (
          ((h = e.get('ANGLE_instanced_arrays')),
          (u = 'drawElementsInstancedANGLE'),
          null === h)
        )
          return void console.error(
            'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
          );
        h[u](a, l, s, i * o, c), n.update(l, a, c);
      }),
      (this.renderMultiDraw = function (t, i, r) {
        if (0 === r) return;
        const l = e.get('WEBGL_multi_draw');
        if (null === l) for (let e = 0; e < r; e++) this.render(t[e] / o, i[e]);
        else {
          l.multiDrawElementsWEBGL(a, i, 0, s, t, 0, r);
          let e = 0;
          for (let t = 0; t < r; t++) e += i[t];
          n.update(e, a, 1);
        }
      });
  }
  function Tr(t) {
    const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function () {
        (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
      },
      update: function (n, i, r) {
        switch ((e.calls++, i)) {
          case t.TRIANGLES:
            e.triangles += r * (n / 3);
            break;
          case t.LINES:
            e.lines += r * (n / 2);
            break;
          case t.LINE_STRIP:
            e.lines += r * (n - 1);
            break;
          case t.LINE_LOOP:
            e.lines += r * n;
            break;
          case t.POINTS:
            e.points += r * n;
            break;
          default:
            console.error('THREE.WebGLInfo: Unknown draw mode:', i);
        }
      },
    };
  }
  function yr(t, e) {
    return t[0] - e[0];
  }
  function br(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }
  function Ar(t, e, n) {
    const i = {},
      r = new Float32Array(8),
      a = new WeakMap(),
      s = new ce(),
      o = [];
    for (let t = 0; t < 8; t++) o[t] = [t, 0];
    return {
      update: function (l, c, h) {
        const u = l.morphTargetInfluences;
        if (!0 === e.isWebGL2) {
          const d =
              c.morphAttributes.position ||
              c.morphAttributes.normal ||
              c.morphAttributes.color,
            p = void 0 !== d ? d.length : 0;
          let f = a.get(c);
          if (void 0 === f || f.count !== p) {
            void 0 !== f && f.texture.dispose();
            const m = void 0 !== c.morphAttributes.position,
              g = void 0 !== c.morphAttributes.normal,
              _ = void 0 !== c.morphAttributes.color,
              v = c.morphAttributes.position || [],
              x = c.morphAttributes.normal || [],
              M = c.morphAttributes.color || [];
            let S = 0;
            !0 === m && (S = 1), !0 === g && (S = 2), !0 === _ && (S = 3);
            let E = c.attributes.position.count * S,
              T = 1;
            E > e.maxTextureSize &&
              ((T = Math.ceil(E / e.maxTextureSize)), (E = e.maxTextureSize));
            const y = new Float32Array(E * T * 4 * p),
              b = new de(y, E, T, p);
            (b.type = $), (b.needsUpdate = !0);
            const A = 4 * S;
            for (let R = 0; R < p; R++) {
              const C = v[R],
                L = x[R],
                P = M[R],
                U = E * T * 4 * R;
              for (let D = 0; D < C.count; D++) {
                const N = D * A;
                !0 === m &&
                  (s.fromBufferAttribute(C, D),
                  (y[U + N + 0] = s.x),
                  (y[U + N + 1] = s.y),
                  (y[U + N + 2] = s.z),
                  (y[U + N + 3] = 0)),
                  !0 === g &&
                    (s.fromBufferAttribute(L, D),
                    (y[U + N + 4] = s.x),
                    (y[U + N + 5] = s.y),
                    (y[U + N + 6] = s.z),
                    (y[U + N + 7] = 0)),
                  !0 === _ &&
                    (s.fromBufferAttribute(P, D),
                    (y[U + N + 8] = s.x),
                    (y[U + N + 9] = s.y),
                    (y[U + N + 10] = s.z),
                    (y[U + N + 11] = 4 === P.itemSize ? s.w : 1));
              }
            }
            function w() {
              b.dispose(), a.delete(c), c.removeEventListener('dispose', w);
            }
            (f = { count: p, texture: b, size: new Vt(E, T) }),
              a.set(c, f),
              c.addEventListener('dispose', w);
          }
          if (!0 === l.isInstancedMesh && null !== l.morphTexture)
            h.getUniforms().setValue(t, 'morphTexture', l.morphTexture, n);
          else {
            let I = 0;
            for (let F = 0; F < u.length; F++) I += u[F];
            const O = c.morphTargetsRelative ? 1 : 1 - I;
            h.getUniforms().setValue(t, 'morphTargetBaseInfluence', O),
              h.getUniforms().setValue(t, 'morphTargetInfluences', u);
          }
          h.getUniforms().setValue(t, 'morphTargetsTexture', f.texture, n),
            h.getUniforms().setValue(t, 'morphTargetsTextureSize', f.size);
        } else {
          const B = void 0 === u ? 0 : u.length;
          let z = i[c.id];
          if (void 0 === z || z.length !== B) {
            z = [];
            for (let W = 0; W < B; W++) z[W] = [W, 0];
            i[c.id] = z;
          }
          for (let X = 0; X < B; X++) {
            const j = z[X];
            (j[0] = X), (j[1] = u[X]);
          }
          z.sort(br);
          for (let q = 0; q < 8; q++)
            q < B && z[q][1]
              ? ((o[q][0] = z[q][0]), (o[q][1] = z[q][1]))
              : ((o[q][0] = Number.MAX_SAFE_INTEGER), (o[q][1] = 0));
          o.sort(yr);
          const H = c.morphAttributes.position,
            G = c.morphAttributes.normal;
          let V = 0;
          for (let Y = 0; Y < 8; Y++) {
            const K = o[Y],
              Z = K[0],
              J = K[1];
            Z !== Number.MAX_SAFE_INTEGER && J
              ? (H &&
                  c.getAttribute('morphTarget' + Y) !== H[Z] &&
                  c.setAttribute('morphTarget' + Y, H[Z]),
                G &&
                  c.getAttribute('morphNormal' + Y) !== G[Z] &&
                  c.setAttribute('morphNormal' + Y, G[Z]),
                (r[Y] = J),
                (V += J))
              : (H &&
                  !0 === c.hasAttribute('morphTarget' + Y) &&
                  c.deleteAttribute('morphTarget' + Y),
                G &&
                  !0 === c.hasAttribute('morphNormal' + Y) &&
                  c.deleteAttribute('morphNormal' + Y),
                (r[Y] = 0));
          }
          const k = c.morphTargetsRelative ? 1 : 1 - V;
          h.getUniforms().setValue(t, 'morphTargetBaseInfluence', k),
            h.getUniforms().setValue(t, 'morphTargetInfluences', r);
        }
      },
    };
  }
  function wr(t, e, n, i) {
    let r = new WeakMap();
    function a(t) {
      const e = t.target;
      e.removeEventListener('dispose', a),
        n.remove(e.instanceMatrix),
        null !== e.instanceColor && n.remove(e.instanceColor);
    }
    return {
      update: function (s) {
        const o = i.render.frame,
          l = s.geometry,
          c = e.get(s, l);
        if (
          (r.get(c) !== o && (e.update(c), r.set(c, o)),
          s.isInstancedMesh &&
            (!1 === s.hasEventListener('dispose', a) &&
              s.addEventListener('dispose', a),
            r.get(s) !== o &&
              (n.update(s.instanceMatrix, t.ARRAY_BUFFER),
              null !== s.instanceColor &&
                n.update(s.instanceColor, t.ARRAY_BUFFER),
              r.set(s, o))),
          s.isSkinnedMesh)
        ) {
          const t = s.skeleton;
          r.get(t) !== o && (t.update(), r.set(t, o));
        }
        return c;
      },
      dispose: function () {
        r = new WeakMap();
      },
    };
  }
  class Rr extends le {
    constructor(t, e, n, i, r, a, s, o, l, c) {
      if ((c = void 0 !== c ? c : nt) !== nt && c !== it)
        throw new Error(
          'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
        );
      void 0 === n && c === nt && (n = J),
        void 0 === n && c === it && (n = tt),
        super(null, i, r, a, s, o, c, n, l),
        (this.isDepthTexture = !0),
        (this.image = { width: t, height: e }),
        (this.magFilter = void 0 !== s ? s : V),
        (this.minFilter = void 0 !== o ? o : V),
        (this.flipY = !1),
        (this.generateMipmaps = !1),
        (this.compareFunction = null);
    }
    copy(t) {
      return super.copy(t), (this.compareFunction = t.compareFunction), this;
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        null !== this.compareFunction &&
          (e.compareFunction = this.compareFunction),
        e
      );
    }
  }
  const Cr = new le(),
    Lr = new Rr(1, 1);
  Lr.compareFunction = 515;
  const Pr = new de(),
    Ur = new pe(),
    Dr = new Ui(),
    Nr = [],
    Ir = [],
    Or = new Float32Array(16),
    Fr = new Float32Array(9),
    Br = new Float32Array(4);
  function zr(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0) return t;
    const r = e * n;
    let a = Nr[r];
    if ((void 0 === a && ((a = new Float32Array(r)), (Nr[r] = a)), 0 !== e)) {
      i.toArray(a, 0);
      for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(a, r);
    }
    return a;
  }
  function Hr(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
    return !0;
  }
  function Gr(t, e) {
    for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
  }
  function Vr(t, e) {
    let n = Ir[e];
    void 0 === n && ((n = new Int32Array(e)), (Ir[e] = n));
    for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
    return n;
  }
  function kr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
  }
  function Wr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (Hr(n, e)) return;
      t.uniform2fv(this.addr, e), Gr(n, e);
    }
  }
  function Xr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3f(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else if (void 0 !== e.r)
      (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
        (t.uniform3f(this.addr, e.r, e.g, e.b),
        (n[0] = e.r),
        (n[1] = e.g),
        (n[2] = e.b));
    else {
      if (Hr(n, e)) return;
      t.uniform3fv(this.addr, e), Gr(n, e);
    }
  }
  function jr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (Hr(n, e)) return;
      t.uniform4fv(this.addr, e), Gr(n, e);
    }
  }
  function qr(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Hr(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Gr(n, e);
    } else {
      if (Hr(n, i)) return;
      Br.set(i), t.uniformMatrix2fv(this.addr, !1, Br), Gr(n, i);
    }
  }
  function Yr(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Hr(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Gr(n, e);
    } else {
      if (Hr(n, i)) return;
      Fr.set(i), t.uniformMatrix3fv(this.addr, !1, Fr), Gr(n, i);
    }
  }
  function Kr(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Hr(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Gr(n, e);
    } else {
      if (Hr(n, i)) return;
      Or.set(i), t.uniformMatrix4fv(this.addr, !1, Or), Gr(n, i);
    }
  }
  function Zr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
  }
  function Jr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (Hr(n, e)) return;
      t.uniform2iv(this.addr, e), Gr(n, e);
    }
  }
  function $r(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3i(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else {
      if (Hr(n, e)) return;
      t.uniform3iv(this.addr, e), Gr(n, e);
    }
  }
  function Qr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (Hr(n, e)) return;
      t.uniform4iv(this.addr, e), Gr(n, e);
    }
  }
  function ta(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
  }
  function ea(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (Hr(n, e)) return;
      t.uniform2uiv(this.addr, e), Gr(n, e);
    }
  }
  function na(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3ui(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else {
      if (Hr(n, e)) return;
      t.uniform3uiv(this.addr, e), Gr(n, e);
    }
  }
  function ia(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (Hr(n, e)) return;
      t.uniform4uiv(this.addr, e), Gr(n, e);
    }
  }
  function ra(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r));
    const a = this.type === t.SAMPLER_2D_SHADOW ? Lr : Cr;
    n.setTexture2D(e || a, r);
  }
  function aa(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture3D(e || Ur, r);
  }
  function sa(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTextureCube(e || Dr, r);
  }
  function oa(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2DArray(e || Pr, r);
  }
  function la(t, e) {
    t.uniform1fv(this.addr, e);
  }
  function ca(t, e) {
    const n = zr(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }
  function ha(t, e) {
    const n = zr(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }
  function ua(t, e) {
    const n = zr(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }
  function da(t, e) {
    const n = zr(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }
  function pa(t, e) {
    const n = zr(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }
  function fa(t, e) {
    const n = zr(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }
  function ma(t, e) {
    t.uniform1iv(this.addr, e);
  }
  function ga(t, e) {
    t.uniform2iv(this.addr, e);
  }
  function _a(t, e) {
    t.uniform3iv(this.addr, e);
  }
  function va(t, e) {
    t.uniform4iv(this.addr, e);
  }
  function xa(t, e) {
    t.uniform1uiv(this.addr, e);
  }
  function Ma(t, e) {
    t.uniform2uiv(this.addr, e);
  }
  function Sa(t, e) {
    t.uniform3uiv(this.addr, e);
  }
  function Ea(t, e) {
    t.uniform4uiv(this.addr, e);
  }
  function Ta(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = Vr(n, r);
    Hr(i, a) || (t.uniform1iv(this.addr, a), Gr(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || Cr, a[t]);
  }
  function ya(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = Vr(n, r);
    Hr(i, a) || (t.uniform1iv(this.addr, a), Gr(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || Ur, a[t]);
  }
  function ba(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = Vr(n, r);
    Hr(i, a) || (t.uniform1iv(this.addr, a), Gr(i, a));
    for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || Dr, a[t]);
  }
  function Aa(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = Vr(n, r);
    Hr(i, a) || (t.uniform1iv(this.addr, a), Gr(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || Pr, a[t]);
  }
  class wa {
    constructor(t, e, n) {
      (this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.type = e.type),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return kr;
            case 35664:
              return Wr;
            case 35665:
              return Xr;
            case 35666:
              return jr;
            case 35674:
              return qr;
            case 35675:
              return Yr;
            case 35676:
              return Kr;
            case 5124:
            case 35670:
              return Zr;
            case 35667:
            case 35671:
              return Jr;
            case 35668:
            case 35672:
              return $r;
            case 35669:
            case 35673:
              return Qr;
            case 5125:
              return ta;
            case 36294:
              return ea;
            case 36295:
              return na;
            case 36296:
              return ia;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return ra;
            case 35679:
            case 36299:
            case 36307:
              return aa;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return sa;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return oa;
          }
        })(e.type));
    }
  }
  class Ra {
    constructor(t, e, n) {
      (this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.type = e.type),
        (this.size = e.size),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return la;
            case 35664:
              return ca;
            case 35665:
              return ha;
            case 35666:
              return ua;
            case 35674:
              return da;
            case 35675:
              return pa;
            case 35676:
              return fa;
            case 5124:
            case 35670:
              return ma;
            case 35667:
            case 35671:
              return ga;
            case 35668:
            case 35672:
              return _a;
            case 35669:
            case 35673:
              return va;
            case 5125:
              return xa;
            case 36294:
              return Ma;
            case 36295:
              return Sa;
            case 36296:
              return Ea;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return Ta;
            case 35679:
            case 36299:
            case 36307:
              return ya;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return ba;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return Aa;
          }
        })(e.type));
    }
  }
  class Ca {
    constructor(t) {
      (this.id = t), (this.seq = []), (this.map = {});
    }
    setValue(t, e, n) {
      const i = this.seq;
      for (let r = 0, a = i.length; r !== a; ++r) {
        const a = i[r];
        a.setValue(t, e[a.id], n);
      }
    }
  }
  const La = /(\w+)(\])?(\[|\.)?/g;
  function Pa(t, e) {
    t.seq.push(e), (t.map[e.id] = e);
  }
  function Ua(t, e, n) {
    const i = t.name,
      r = i.length;
    for (La.lastIndex = 0; ; ) {
      const a = La.exec(i),
        s = La.lastIndex;
      let o = a[1];
      const l = ']' === a[2],
        c = a[3];
      if ((l && (o |= 0), void 0 === c || ('[' === c && s + 2 === r))) {
        Pa(n, void 0 === c ? new wa(o, t, e) : new Ra(o, t, e));
        break;
      }
      {
        let t = n.map[o];
        void 0 === t && ((t = new Ca(o)), Pa(n, t)), (n = t);
      }
    }
  }
  class Da {
    constructor(t, e) {
      (this.seq = []), (this.map = {});
      const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; ++i) {
        const n = t.getActiveUniform(e, i);
        Ua(n, t.getUniformLocation(e, n.name), this);
      }
    }
    setValue(t, e, n, i) {
      const r = this.map[e];
      void 0 !== r && r.setValue(t, n, i);
    }
    setOptional(t, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t, n, i);
    }
    static upload(t, e, n, i) {
      for (let r = 0, a = e.length; r !== a; ++r) {
        const a = e[r],
          s = n[a.id];
        !1 !== s.needsUpdate && a.setValue(t, s.value, i);
      }
    }
    static seqWithValue(t, e) {
      const n = [];
      for (let i = 0, r = t.length; i !== r; ++i) {
        const r = t[i];
        r.id in e && n.push(r);
      }
      return n;
    }
  }
  function Na(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
  }
  const Ia = 37297;
  let Oa = 0;
  function Fa(t, e, n) {
    const i = t.getShaderParameter(e, t.COMPILE_STATUS),
      r = t.getShaderInfoLog(e).trim();
    if (i && '' === r) return '';
    const a = /ERROR: 0:(\d+)/.exec(r);
    if (a) {
      const i = parseInt(a[1]);
      return (
        n.toUpperCase() +
        '\n\n' +
        r +
        '\n\n' +
        (function (t, e) {
          const n = t.split('\n'),
            i = [],
            r = Math.max(e - 6, 0),
            a = Math.min(e + 6, n.length);
          for (let t = r; t < a; t++) {
            const r = t + 1;
            i.push(`${r === e ? '>' : ' '} ${r}: ${n[t]}`);
          }
          return i.join('\n');
        })(t.getShaderSource(e), i)
      );
    }
    return r;
  }
  function Ba(t, e) {
    const n = (function (t) {
      const e = Qt.getPrimaries(Qt.workingColorSpace),
        n = Qt.getPrimaries(t);
      let i;
      switch (
        (e === n
          ? (i = '')
          : e === _t && n === gt
            ? (i = 'LinearDisplayP3ToLinearSRGB')
            : e === gt && n === _t && (i = 'LinearSRGBToLinearDisplayP3'),
        t)
      ) {
        case ut:
        case pt:
          return [i, 'LinearTransferOETF'];
        case ht:
        case dt:
          return [i, 'sRGBTransferOETF'];
        default:
          return (
            console.warn('THREE.WebGLProgram: Unsupported color space:', t),
            [i, 'LinearTransferOETF']
          );
      }
    })(e);
    return `vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
  }
  function za(t, e) {
    let n;
    switch (e) {
      case C:
        n = 'Linear';
        break;
      case L:
        n = 'Reinhard';
        break;
      case P:
        n = 'OptimizedCineon';
        break;
      case U:
        n = 'ACESFilmic';
        break;
      case N:
        n = 'AgX';
        break;
      case I:
        n = 'Neutral';
        break;
      case D:
        n = 'Custom';
        break;
      default:
        console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e),
          (n = 'Linear');
    }
    return (
      'vec3 ' + t + '( vec3 color ) { return ' + n + 'ToneMapping( color ); }'
    );
  }
  function Ha(t) {
    return '' !== t;
  }
  function Ga(t, e) {
    const n =
      e.numSpotLightShadows +
      e.numSpotLightMaps -
      e.numSpotLightShadowsWithMaps;
    return t
      .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
      .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
      .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
      .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
      .replace(
        /NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,
        e.numSpotLightShadowsWithMaps
      )
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function Va(t, e) {
    return t
      .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        e.numClippingPlanes - e.numClipIntersection
      );
  }
  const ka = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Wa(t) {
    return t.replace(ka, ja);
  }
  const Xa = new Map([
    ['encodings_fragment', 'colorspace_fragment'],
    ['encodings_pars_fragment', 'colorspace_pars_fragment'],
    ['output_fragment', 'opaque_fragment'],
  ]);
  function ja(t, e) {
    let n = Wi[e];
    if (void 0 === n) {
      const t = Xa.get(e);
      if (void 0 === t) throw new Error('Can not resolve #include <' + e + '>');
      (n = Wi[t]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          t
        );
    }
    return Wa(n);
  }
  const qa =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Ya(t) {
    return t.replace(qa, Ka);
  }
  function Ka(t, e, n, i) {
    let r = '';
    for (let t = parseInt(e); t < parseInt(n); t++)
      r += i
        .replace(/\[\s*i\s*\]/g, '[ ' + t + ' ]')
        .replace(/UNROLLED_LOOP_INDEX/g, t);
    return r;
  }
  function Za(t) {
    let e = `precision ${t.precision} float;\n\tprecision ${t.precision} int;\n\tprecision ${t.precision} sampler2D;\n\tprecision ${t.precision} samplerCube;\n\t`;
    return (
      t.isWebGL2 &&
        (e += `precision ${t.precision} sampler3D;\n\t\tprecision ${t.precision} sampler2DArray;\n\t\tprecision ${t.precision} sampler2DShadow;\n\t\tprecision ${t.precision} samplerCubeShadow;\n\t\tprecision ${t.precision} sampler2DArrayShadow;\n\t\tprecision ${t.precision} isampler2D;\n\t\tprecision ${t.precision} isampler3D;\n\t\tprecision ${t.precision} isamplerCube;\n\t\tprecision ${t.precision} isampler2DArray;\n\t\tprecision ${t.precision} usampler2D;\n\t\tprecision ${t.precision} usampler3D;\n\t\tprecision ${t.precision} usamplerCube;\n\t\tprecision ${t.precision} usampler2DArray;\n\t\t`),
      'highp' === t.precision
        ? (e += '\n#define HIGH_PRECISION')
        : 'mediump' === t.precision
          ? (e += '\n#define MEDIUM_PRECISION')
          : 'lowp' === t.precision && (e += '\n#define LOW_PRECISION'),
      e
    );
  }
  function Ja(t, r, a, s) {
    const o = t.getContext(),
      l = a.defines;
    let c = a.vertexShader,
      h = a.fragmentShader;
    const u = (function (t) {
        let r = 'SHADOWMAP_TYPE_BASIC';
        return (
          t.shadowMapType === e
            ? (r = 'SHADOWMAP_TYPE_PCF')
            : t.shadowMapType === n
              ? (r = 'SHADOWMAP_TYPE_PCF_SOFT')
              : t.shadowMapType === i && (r = 'SHADOWMAP_TYPE_VSM'),
          r
        );
      })(a),
      d = (function (t) {
        let e = 'ENVMAP_TYPE_CUBE';
        if (t.envMap)
          switch (t.envMapMode) {
            case O:
            case F:
              e = 'ENVMAP_TYPE_CUBE';
              break;
            case B:
              e = 'ENVMAP_TYPE_CUBE_UV';
          }
        return e;
      })(a),
      p = (function (t) {
        let e = 'ENVMAP_MODE_REFLECTION';
        t.envMap && t.envMapMode === F && (e = 'ENVMAP_MODE_REFRACTION');
        return e;
      })(a),
      f = (function (t) {
        let e = 'ENVMAP_BLENDING_NONE';
        if (t.envMap)
          switch (t.combine) {
            case b:
              e = 'ENVMAP_BLENDING_MULTIPLY';
              break;
            case A:
              e = 'ENVMAP_BLENDING_MIX';
              break;
            case w:
              e = 'ENVMAP_BLENDING_ADD';
          }
        return e;
      })(a),
      m = (function (t) {
        const e = t.envMapCubeUVHeight;
        if (null === e) return null;
        const n = Math.log2(e) - 2,
          i = 1 / e;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
          texelHeight: i,
          maxMip: n,
        };
      })(a),
      g = a.isWebGL2
        ? ''
        : (function (t) {
            return [
              t.extensionDerivatives ||
              t.envMapCubeUVHeight ||
              t.bumpMap ||
              t.normalMapTangentSpace ||
              t.clearcoatNormalMap ||
              t.flatShading ||
              t.alphaToCoverage ||
              'physical' === t.shaderID
                ? '#extension GL_OES_standard_derivatives : enable'
                : '',
              (t.extensionFragDepth || t.logarithmicDepthBuffer) &&
              t.rendererExtensionFragDepth
                ? '#extension GL_EXT_frag_depth : enable'
                : '',
              t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
                ? '#extension GL_EXT_draw_buffers : require'
                : '',
              (t.extensionShaderTextureLOD || t.envMap || t.transmission) &&
              t.rendererExtensionShaderTextureLod
                ? '#extension GL_EXT_shader_texture_lod : enable'
                : '',
            ]
              .filter(Ha)
              .join('\n');
          })(a),
      _ = (function (t) {
        return [
          t.extensionClipCullDistance
            ? '#extension GL_ANGLE_clip_cull_distance : require'
            : '',
          t.extensionMultiDraw
            ? '#extension GL_ANGLE_multi_draw : require'
            : '',
        ]
          .filter(Ha)
          .join('\n');
      })(a),
      v = (function (t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          !1 !== i && e.push('#define ' + n + ' ' + i);
        }
        return e.join('\n');
      })(l),
      x = o.createProgram();
    let M,
      S,
      E = a.glslVersion ? '#version ' + a.glslVersion + '\n' : '';
    a.isRawShaderMaterial
      ? ((M = [
          '#define SHADER_TYPE ' + a.shaderType,
          '#define SHADER_NAME ' + a.shaderName,
          v,
        ]
          .filter(Ha)
          .join('\n')),
        M.length > 0 && (M += '\n'),
        (S = [
          g,
          '#define SHADER_TYPE ' + a.shaderType,
          '#define SHADER_NAME ' + a.shaderName,
          v,
        ]
          .filter(Ha)
          .join('\n')),
        S.length > 0 && (S += '\n'))
      : ((M = [
          Za(a),
          '#define SHADER_TYPE ' + a.shaderType,
          '#define SHADER_NAME ' + a.shaderName,
          v,
          a.extensionClipCullDistance ? '#define USE_CLIP_DISTANCE' : '',
          a.batching ? '#define USE_BATCHING' : '',
          a.instancing ? '#define USE_INSTANCING' : '',
          a.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
          a.instancingMorph ? '#define USE_INSTANCING_MORPH' : '',
          a.useFog && a.fog ? '#define USE_FOG' : '',
          a.useFog && a.fogExp2 ? '#define FOG_EXP2' : '',
          a.map ? '#define USE_MAP' : '',
          a.envMap ? '#define USE_ENVMAP' : '',
          a.envMap ? '#define ' + p : '',
          a.lightMap ? '#define USE_LIGHTMAP' : '',
          a.aoMap ? '#define USE_AOMAP' : '',
          a.bumpMap ? '#define USE_BUMPMAP' : '',
          a.normalMap ? '#define USE_NORMALMAP' : '',
          a.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
          a.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
          a.displacementMap ? '#define USE_DISPLACEMENTMAP' : '',
          a.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
          a.anisotropy ? '#define USE_ANISOTROPY' : '',
          a.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
          a.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
          a.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
          a.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
          a.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
          a.iridescenceThicknessMap
            ? '#define USE_IRIDESCENCE_THICKNESSMAP'
            : '',
          a.specularMap ? '#define USE_SPECULARMAP' : '',
          a.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
          a.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
          a.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
          a.metalnessMap ? '#define USE_METALNESSMAP' : '',
          a.alphaMap ? '#define USE_ALPHAMAP' : '',
          a.alphaHash ? '#define USE_ALPHAHASH' : '',
          a.transmission ? '#define USE_TRANSMISSION' : '',
          a.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
          a.thicknessMap ? '#define USE_THICKNESSMAP' : '',
          a.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
          a.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
          a.mapUv ? '#define MAP_UV ' + a.mapUv : '',
          a.alphaMapUv ? '#define ALPHAMAP_UV ' + a.alphaMapUv : '',
          a.lightMapUv ? '#define LIGHTMAP_UV ' + a.lightMapUv : '',
          a.aoMapUv ? '#define AOMAP_UV ' + a.aoMapUv : '',
          a.emissiveMapUv ? '#define EMISSIVEMAP_UV ' + a.emissiveMapUv : '',
          a.bumpMapUv ? '#define BUMPMAP_UV ' + a.bumpMapUv : '',
          a.normalMapUv ? '#define NORMALMAP_UV ' + a.normalMapUv : '',
          a.displacementMapUv
            ? '#define DISPLACEMENTMAP_UV ' + a.displacementMapUv
            : '',
          a.metalnessMapUv ? '#define METALNESSMAP_UV ' + a.metalnessMapUv : '',
          a.roughnessMapUv ? '#define ROUGHNESSMAP_UV ' + a.roughnessMapUv : '',
          a.anisotropyMapUv
            ? '#define ANISOTROPYMAP_UV ' + a.anisotropyMapUv
            : '',
          a.clearcoatMapUv ? '#define CLEARCOATMAP_UV ' + a.clearcoatMapUv : '',
          a.clearcoatNormalMapUv
            ? '#define CLEARCOAT_NORMALMAP_UV ' + a.clearcoatNormalMapUv
            : '',
          a.clearcoatRoughnessMapUv
            ? '#define CLEARCOAT_ROUGHNESSMAP_UV ' + a.clearcoatRoughnessMapUv
            : '',
          a.iridescenceMapUv
            ? '#define IRIDESCENCEMAP_UV ' + a.iridescenceMapUv
            : '',
          a.iridescenceThicknessMapUv
            ? '#define IRIDESCENCE_THICKNESSMAP_UV ' +
              a.iridescenceThicknessMapUv
            : '',
          a.sheenColorMapUv
            ? '#define SHEEN_COLORMAP_UV ' + a.sheenColorMapUv
            : '',
          a.sheenRoughnessMapUv
            ? '#define SHEEN_ROUGHNESSMAP_UV ' + a.sheenRoughnessMapUv
            : '',
          a.specularMapUv ? '#define SPECULARMAP_UV ' + a.specularMapUv : '',
          a.specularColorMapUv
            ? '#define SPECULAR_COLORMAP_UV ' + a.specularColorMapUv
            : '',
          a.specularIntensityMapUv
            ? '#define SPECULAR_INTENSITYMAP_UV ' + a.specularIntensityMapUv
            : '',
          a.transmissionMapUv
            ? '#define TRANSMISSIONMAP_UV ' + a.transmissionMapUv
            : '',
          a.thicknessMapUv ? '#define THICKNESSMAP_UV ' + a.thicknessMapUv : '',
          a.vertexTangents && !1 === a.flatShading ? '#define USE_TANGENT' : '',
          a.vertexColors ? '#define USE_COLOR' : '',
          a.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
          a.vertexUv1s ? '#define USE_UV1' : '',
          a.vertexUv2s ? '#define USE_UV2' : '',
          a.vertexUv3s ? '#define USE_UV3' : '',
          a.pointsUvs ? '#define USE_POINTS_UV' : '',
          a.flatShading ? '#define FLAT_SHADED' : '',
          a.skinning ? '#define USE_SKINNING' : '',
          a.morphTargets ? '#define USE_MORPHTARGETS' : '',
          a.morphNormals && !1 === a.flatShading
            ? '#define USE_MORPHNORMALS'
            : '',
          a.morphColors && a.isWebGL2 ? '#define USE_MORPHCOLORS' : '',
          a.morphTargetsCount > 0 && a.isWebGL2
            ? '#define MORPHTARGETS_TEXTURE'
            : '',
          a.morphTargetsCount > 0 && a.isWebGL2
            ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + a.morphTextureStride
            : '',
          a.morphTargetsCount > 0 && a.isWebGL2
            ? '#define MORPHTARGETS_COUNT ' + a.morphTargetsCount
            : '',
          a.doubleSided ? '#define DOUBLE_SIDED' : '',
          a.flipSided ? '#define FLIP_SIDED' : '',
          a.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
          a.shadowMapEnabled ? '#define ' + u : '',
          a.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
          a.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
          a.useLegacyLights ? '#define LEGACY_LIGHTS' : '',
          a.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
          a.logarithmicDepthBuffer && a.rendererExtensionFragDepth
            ? '#define USE_LOGDEPTHBUF_EXT'
            : '',
          'uniform mat4 modelMatrix;',
          'uniform mat4 modelViewMatrix;',
          'uniform mat4 projectionMatrix;',
          'uniform mat4 viewMatrix;',
          'uniform mat3 normalMatrix;',
          'uniform vec3 cameraPosition;',
          'uniform bool isOrthographic;',
          '#ifdef USE_INSTANCING',
          '\tattribute mat4 instanceMatrix;',
          '#endif',
          '#ifdef USE_INSTANCING_COLOR',
          '\tattribute vec3 instanceColor;',
          '#endif',
          '#ifdef USE_INSTANCING_MORPH',
          '\tuniform sampler2D morphTexture;',
          '#endif',
          'attribute vec3 position;',
          'attribute vec3 normal;',
          'attribute vec2 uv;',
          '#ifdef USE_UV1',
          '\tattribute vec2 uv1;',
          '#endif',
          '#ifdef USE_UV2',
          '\tattribute vec2 uv2;',
          '#endif',
          '#ifdef USE_UV3',
          '\tattribute vec2 uv3;',
          '#endif',
          '#ifdef USE_TANGENT',
          '\tattribute vec4 tangent;',
          '#endif',
          '#if defined( USE_COLOR_ALPHA )',
          '\tattribute vec4 color;',
          '#elif defined( USE_COLOR )',
          '\tattribute vec3 color;',
          '#endif',
          '#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )',
          '\tattribute vec3 morphTarget0;',
          '\tattribute vec3 morphTarget1;',
          '\tattribute vec3 morphTarget2;',
          '\tattribute vec3 morphTarget3;',
          '\t#ifdef USE_MORPHNORMALS',
          '\t\tattribute vec3 morphNormal0;',
          '\t\tattribute vec3 morphNormal1;',
          '\t\tattribute vec3 morphNormal2;',
          '\t\tattribute vec3 morphNormal3;',
          '\t#else',
          '\t\tattribute vec3 morphTarget4;',
          '\t\tattribute vec3 morphTarget5;',
          '\t\tattribute vec3 morphTarget6;',
          '\t\tattribute vec3 morphTarget7;',
          '\t#endif',
          '#endif',
          '#ifdef USE_SKINNING',
          '\tattribute vec4 skinIndex;',
          '\tattribute vec4 skinWeight;',
          '#endif',
          '\n',
        ]
          .filter(Ha)
          .join('\n')),
        (S = [
          g,
          Za(a),
          '#define SHADER_TYPE ' + a.shaderType,
          '#define SHADER_NAME ' + a.shaderName,
          v,
          a.useFog && a.fog ? '#define USE_FOG' : '',
          a.useFog && a.fogExp2 ? '#define FOG_EXP2' : '',
          a.alphaToCoverage ? '#define ALPHA_TO_COVERAGE' : '',
          a.map ? '#define USE_MAP' : '',
          a.matcap ? '#define USE_MATCAP' : '',
          a.envMap ? '#define USE_ENVMAP' : '',
          a.envMap ? '#define ' + d : '',
          a.envMap ? '#define ' + p : '',
          a.envMap ? '#define ' + f : '',
          m ? '#define CUBEUV_TEXEL_WIDTH ' + m.texelWidth : '',
          m ? '#define CUBEUV_TEXEL_HEIGHT ' + m.texelHeight : '',
          m ? '#define CUBEUV_MAX_MIP ' + m.maxMip + '.0' : '',
          a.lightMap ? '#define USE_LIGHTMAP' : '',
          a.aoMap ? '#define USE_AOMAP' : '',
          a.bumpMap ? '#define USE_BUMPMAP' : '',
          a.normalMap ? '#define USE_NORMALMAP' : '',
          a.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
          a.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
          a.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
          a.anisotropy ? '#define USE_ANISOTROPY' : '',
          a.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
          a.clearcoat ? '#define USE_CLEARCOAT' : '',
          a.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
          a.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
          a.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
          a.iridescence ? '#define USE_IRIDESCENCE' : '',
          a.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
          a.iridescenceThicknessMap
            ? '#define USE_IRIDESCENCE_THICKNESSMAP'
            : '',
          a.specularMap ? '#define USE_SPECULARMAP' : '',
          a.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
          a.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
          a.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
          a.metalnessMap ? '#define USE_METALNESSMAP' : '',
          a.alphaMap ? '#define USE_ALPHAMAP' : '',
          a.alphaTest ? '#define USE_ALPHATEST' : '',
          a.alphaHash ? '#define USE_ALPHAHASH' : '',
          a.sheen ? '#define USE_SHEEN' : '',
          a.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
          a.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
          a.transmission ? '#define USE_TRANSMISSION' : '',
          a.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
          a.thicknessMap ? '#define USE_THICKNESSMAP' : '',
          a.vertexTangents && !1 === a.flatShading ? '#define USE_TANGENT' : '',
          a.vertexColors || a.instancingColor ? '#define USE_COLOR' : '',
          a.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
          a.vertexUv1s ? '#define USE_UV1' : '',
          a.vertexUv2s ? '#define USE_UV2' : '',
          a.vertexUv3s ? '#define USE_UV3' : '',
          a.pointsUvs ? '#define USE_POINTS_UV' : '',
          a.gradientMap ? '#define USE_GRADIENTMAP' : '',
          a.flatShading ? '#define FLAT_SHADED' : '',
          a.doubleSided ? '#define DOUBLE_SIDED' : '',
          a.flipSided ? '#define FLIP_SIDED' : '',
          a.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
          a.shadowMapEnabled ? '#define ' + u : '',
          a.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
          a.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
          a.useLegacyLights ? '#define LEGACY_LIGHTS' : '',
          a.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
          a.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
          a.logarithmicDepthBuffer && a.rendererExtensionFragDepth
            ? '#define USE_LOGDEPTHBUF_EXT'
            : '',
          'uniform mat4 viewMatrix;',
          'uniform vec3 cameraPosition;',
          'uniform bool isOrthographic;',
          a.toneMapping !== R ? '#define TONE_MAPPING' : '',
          a.toneMapping !== R ? Wi.tonemapping_pars_fragment : '',
          a.toneMapping !== R ? za('toneMapping', a.toneMapping) : '',
          a.dithering ? '#define DITHERING' : '',
          a.opaque ? '#define OPAQUE' : '',
          Wi.colorspace_pars_fragment,
          Ba('linearToOutputTexel', a.outputColorSpace),
          a.useDepthPacking ? '#define DEPTH_PACKING ' + a.depthPacking : '',
          '\n',
        ]
          .filter(Ha)
          .join('\n'))),
      (c = Wa(c)),
      (c = Ga(c, a)),
      (c = Va(c, a)),
      (h = Wa(h)),
      (h = Ga(h, a)),
      (h = Va(h, a)),
      (c = Ya(c)),
      (h = Ya(h)),
      a.isWebGL2 &&
        !0 !== a.isRawShaderMaterial &&
        ((E = '#version 300 es\n'),
        (M =
          [
            _,
            'precision mediump sampler2DArray;',
            '#define attribute in',
            '#define varying out',
            '#define texture2D texture',
          ].join('\n') +
          '\n' +
          M),
        (S =
          [
            'precision mediump sampler2DArray;',
            '#define varying in',
            a.glslVersion === wt
              ? ''
              : 'layout(location = 0) out highp vec4 pc_fragColor;',
            a.glslVersion === wt ? '' : '#define gl_FragColor pc_fragColor',
            '#define gl_FragDepthEXT gl_FragDepth',
            '#define texture2D texture',
            '#define textureCube texture',
            '#define texture2DProj textureProj',
            '#define texture2DLodEXT textureLod',
            '#define texture2DProjLodEXT textureProjLod',
            '#define textureCubeLodEXT textureLod',
            '#define texture2DGradEXT textureGrad',
            '#define texture2DProjGradEXT textureProjGrad',
            '#define textureCubeGradEXT textureGrad',
          ].join('\n') +
          '\n' +
          S));
    const T = E + M + c,
      y = E + S + h,
      C = Na(o, o.VERTEX_SHADER, T),
      L = Na(o, o.FRAGMENT_SHADER, y);
    function P(e) {
      if (t.debug.checkShaderErrors) {
        const n = o.getProgramInfoLog(x).trim(),
          i = o.getShaderInfoLog(C).trim(),
          r = o.getShaderInfoLog(L).trim();
        let a = !0,
          s = !0;
        if (!1 === o.getProgramParameter(x, o.LINK_STATUS))
          if (((a = !1), 'function' == typeof t.debug.onShaderError))
            t.debug.onShaderError(o, x, C, L);
          else {
            const t = Fa(o, C, 'vertex'),
              i = Fa(o, L, 'fragment');
            console.error(
              'THREE.WebGLProgram: Shader Error ' +
                o.getError() +
                ' - VALIDATE_STATUS ' +
                o.getProgramParameter(x, o.VALIDATE_STATUS) +
                '\n\nMaterial Name: ' +
                e.name +
                '\nMaterial Type: ' +
                e.type +
                '\n\nProgram Info Log: ' +
                n +
                '\n' +
                t +
                '\n' +
                i
            );
          }
        else
          '' !== n
            ? console.warn('THREE.WebGLProgram: Program Info Log:', n)
            : ('' !== i && '' !== r) || (s = !1);
        s &&
          (e.diagnostics = {
            runnable: a,
            programLog: n,
            vertexShader: { log: i, prefix: M },
            fragmentShader: { log: r, prefix: S },
          });
      }
      o.deleteShader(C),
        o.deleteShader(L),
        (U = new Da(o, x)),
        (D = (function (t, e) {
          const n = {},
            i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
          for (let r = 0; r < i; r++) {
            const i = t.getActiveAttrib(e, r),
              a = i.name;
            let s = 1;
            i.type === t.FLOAT_MAT2 && (s = 2),
              i.type === t.FLOAT_MAT3 && (s = 3),
              i.type === t.FLOAT_MAT4 && (s = 4),
              (n[a] = {
                type: i.type,
                location: t.getAttribLocation(e, a),
                locationSize: s,
              });
          }
          return n;
        })(o, x));
    }
    let U, D;
    o.attachShader(x, C),
      o.attachShader(x, L),
      void 0 !== a.index0AttributeName
        ? o.bindAttribLocation(x, 0, a.index0AttributeName)
        : !0 === a.morphTargets && o.bindAttribLocation(x, 0, 'position'),
      o.linkProgram(x),
      (this.getUniforms = function () {
        return void 0 === U && P(this), U;
      }),
      (this.getAttributes = function () {
        return void 0 === D && P(this), D;
      });
    let N = !1 === a.rendererExtensionParallelShaderCompile;
    return (
      (this.isReady = function () {
        return !1 === N && (N = o.getProgramParameter(x, Ia)), N;
      }),
      (this.destroy = function () {
        s.releaseStatesOfProgram(this),
          o.deleteProgram(x),
          (this.program = void 0);
      }),
      (this.type = a.shaderType),
      (this.name = a.shaderName),
      (this.id = Oa++),
      (this.cacheKey = r),
      (this.usedTimes = 1),
      (this.program = x),
      (this.vertexShader = C),
      (this.fragmentShader = L),
      this
    );
  }
  let $a = 0;
  class Qa {
    constructor() {
      (this.shaderCache = new Map()), (this.materialCache = new Map());
    }
    update(t) {
      const e = t.vertexShader,
        n = t.fragmentShader,
        i = this._getShaderStage(e),
        r = this._getShaderStage(n),
        a = this._getShaderCacheForMaterial(t);
      return (
        !1 === a.has(i) && (a.add(i), i.usedTimes++),
        !1 === a.has(r) && (a.add(r), r.usedTimes++),
        this
      );
    }
    remove(t) {
      const e = this.materialCache.get(t);
      for (const t of e)
        t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
      return this.materialCache.delete(t), this;
    }
    getVertexShaderID(t) {
      return this._getShaderStage(t.vertexShader).id;
    }
    getFragmentShaderID(t) {
      return this._getShaderStage(t.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t) {
      const e = this.materialCache;
      let n = e.get(t);
      return void 0 === n && ((n = new Set()), e.set(t, n)), n;
    }
    _getShaderStage(t) {
      const e = this.shaderCache;
      let n = e.get(t);
      return void 0 === n && ((n = new ts(t)), e.set(t, n)), n;
    }
  }
  class ts {
    constructor(t) {
      (this.id = $a++), (this.code = t), (this.usedTimes = 0);
    }
  }
  function es(t, e, n, i, r, s, o) {
    const l = new nn(),
      c = new Qa(),
      h = new Set(),
      u = [],
      d = r.isWebGL2,
      p = r.logarithmicDepthBuffer,
      f = r.vertexTextures;
    let m = r.precision;
    const g = {
      MeshDepthMaterial: 'depth',
      MeshDistanceMaterial: 'distanceRGBA',
      MeshNormalMaterial: 'normal',
      MeshBasicMaterial: 'basic',
      MeshLambertMaterial: 'lambert',
      MeshPhongMaterial: 'phong',
      MeshToonMaterial: 'toon',
      MeshStandardMaterial: 'physical',
      MeshPhysicalMaterial: 'physical',
      MeshMatcapMaterial: 'matcap',
      LineBasicMaterial: 'basic',
      LineDashedMaterial: 'dashed',
      PointsMaterial: 'points',
      ShadowMaterial: 'shadow',
      SpriteMaterial: 'sprite',
    };
    function _(t) {
      return h.add(t), 0 === t ? 'uv' : `uv${t}`;
    }
    return {
      getParameters: function (s, l, u, v, x) {
        const M = v.fog,
          S = x.geometry,
          E = s.isMeshStandardMaterial ? v.environment : null,
          T = (s.isMeshStandardMaterial ? n : e).get(s.envMap || E),
          y = T && T.mapping === B ? T.image.height : null,
          b = g[s.type];
        null !== s.precision &&
          ((m = r.getMaxPrecision(s.precision)),
          m !== s.precision &&
            console.warn(
              'THREE.WebGLProgram.getParameters:',
              s.precision,
              'not supported, using',
              m,
              'instead.'
            ));
        const A =
            S.morphAttributes.position ||
            S.morphAttributes.normal ||
            S.morphAttributes.color,
          w = void 0 !== A ? A.length : 0;
        let C,
          L,
          P,
          U,
          D = 0;
        if (
          (void 0 !== S.morphAttributes.position && (D = 1),
          void 0 !== S.morphAttributes.normal && (D = 2),
          void 0 !== S.morphAttributes.color && (D = 3),
          b)
        ) {
          const t = ji[b];
          (C = t.vertexShader), (L = t.fragmentShader);
        } else
          (C = s.vertexShader),
            (L = s.fragmentShader),
            c.update(s),
            (P = c.getVertexShaderID(s)),
            (U = c.getFragmentShaderID(s));
        const N = t.getRenderTarget(),
          I = !0 === x.isInstancedMesh,
          O = !0 === x.isBatchedMesh,
          F = !!s.map,
          z = !!s.matcap,
          H = !!T,
          G = !!s.aoMap,
          V = !!s.lightMap,
          k = !!s.bumpMap,
          W = !!s.normalMap,
          X = !!s.displacementMap,
          j = !!s.emissiveMap,
          q = !!s.metalnessMap,
          Y = !!s.roughnessMap,
          K = s.anisotropy > 0,
          Z = s.clearcoat > 0,
          J = s.iridescence > 0,
          $ = s.sheen > 0,
          Q = s.transmission > 0,
          tt = K && !!s.anisotropyMap,
          et = Z && !!s.clearcoatMap,
          nt = Z && !!s.clearcoatNormalMap,
          it = Z && !!s.clearcoatRoughnessMap,
          rt = J && !!s.iridescenceMap,
          at = J && !!s.iridescenceThicknessMap,
          st = $ && !!s.sheenColorMap,
          ot = $ && !!s.sheenRoughnessMap,
          lt = !!s.specularMap,
          ct = !!s.specularColorMap,
          ht = !!s.specularIntensityMap,
          dt = Q && !!s.transmissionMap,
          pt = Q && !!s.thicknessMap,
          ft = !!s.gradientMap,
          gt = !!s.alphaMap,
          _t = s.alphaTest > 0,
          vt = !!s.alphaHash,
          xt = !!s.extensions;
        let Mt = R;
        s.toneMapped &&
          ((null !== N && !0 !== N.isXRRenderTarget) || (Mt = t.toneMapping));
        const St = {
          isWebGL2: d,
          shaderID: b,
          shaderType: s.type,
          shaderName: s.name,
          vertexShader: C,
          fragmentShader: L,
          defines: s.defines,
          customVertexShaderID: P,
          customFragmentShaderID: U,
          isRawShaderMaterial: !0 === s.isRawShaderMaterial,
          glslVersion: s.glslVersion,
          precision: m,
          batching: O,
          instancing: I,
          instancingColor: I && null !== x.instanceColor,
          instancingMorph: I && null !== x.morphTexture,
          supportsVertexTextures: f,
          outputColorSpace:
            null === N
              ? t.outputColorSpace
              : !0 === N.isXRRenderTarget
                ? N.texture.colorSpace
                : ut,
          alphaToCoverage: !!s.alphaToCoverage,
          map: F,
          matcap: z,
          envMap: H,
          envMapMode: H && T.mapping,
          envMapCubeUVHeight: y,
          aoMap: G,
          lightMap: V,
          bumpMap: k,
          normalMap: W,
          displacementMap: f && X,
          emissiveMap: j,
          normalMapObjectSpace: W && 1 === s.normalMapType,
          normalMapTangentSpace: W && 0 === s.normalMapType,
          metalnessMap: q,
          roughnessMap: Y,
          anisotropy: K,
          anisotropyMap: tt,
          clearcoat: Z,
          clearcoatMap: et,
          clearcoatNormalMap: nt,
          clearcoatRoughnessMap: it,
          iridescence: J,
          iridescenceMap: rt,
          iridescenceThicknessMap: at,
          sheen: $,
          sheenColorMap: st,
          sheenRoughnessMap: ot,
          specularMap: lt,
          specularColorMap: ct,
          specularIntensityMap: ht,
          transmission: Q,
          transmissionMap: dt,
          thicknessMap: pt,
          gradientMap: ft,
          opaque:
            !1 === s.transparent &&
            1 === s.blending &&
            !1 === s.alphaToCoverage,
          alphaMap: gt,
          alphaTest: _t,
          alphaHash: vt,
          combine: s.combine,
          mapUv: F && _(s.map.channel),
          aoMapUv: G && _(s.aoMap.channel),
          lightMapUv: V && _(s.lightMap.channel),
          bumpMapUv: k && _(s.bumpMap.channel),
          normalMapUv: W && _(s.normalMap.channel),
          displacementMapUv: X && _(s.displacementMap.channel),
          emissiveMapUv: j && _(s.emissiveMap.channel),
          metalnessMapUv: q && _(s.metalnessMap.channel),
          roughnessMapUv: Y && _(s.roughnessMap.channel),
          anisotropyMapUv: tt && _(s.anisotropyMap.channel),
          clearcoatMapUv: et && _(s.clearcoatMap.channel),
          clearcoatNormalMapUv: nt && _(s.clearcoatNormalMap.channel),
          clearcoatRoughnessMapUv: it && _(s.clearcoatRoughnessMap.channel),
          iridescenceMapUv: rt && _(s.iridescenceMap.channel),
          iridescenceThicknessMapUv: at && _(s.iridescenceThicknessMap.channel),
          sheenColorMapUv: st && _(s.sheenColorMap.channel),
          sheenRoughnessMapUv: ot && _(s.sheenRoughnessMap.channel),
          specularMapUv: lt && _(s.specularMap.channel),
          specularColorMapUv: ct && _(s.specularColorMap.channel),
          specularIntensityMapUv: ht && _(s.specularIntensityMap.channel),
          transmissionMapUv: dt && _(s.transmissionMap.channel),
          thicknessMapUv: pt && _(s.thicknessMap.channel),
          alphaMapUv: gt && _(s.alphaMap.channel),
          vertexTangents: !!S.attributes.tangent && (W || K),
          vertexColors: s.vertexColors,
          vertexAlphas:
            !0 === s.vertexColors &&
            !!S.attributes.color &&
            4 === S.attributes.color.itemSize,
          pointsUvs: !0 === x.isPoints && !!S.attributes.uv && (F || gt),
          fog: !!M,
          useFog: !0 === s.fog,
          fogExp2: !!M && M.isFogExp2,
          flatShading: !0 === s.flatShading,
          sizeAttenuation: !0 === s.sizeAttenuation,
          logarithmicDepthBuffer: p,
          skinning: !0 === x.isSkinnedMesh,
          morphTargets: void 0 !== S.morphAttributes.position,
          morphNormals: void 0 !== S.morphAttributes.normal,
          morphColors: void 0 !== S.morphAttributes.color,
          morphTargetsCount: w,
          morphTextureStride: D,
          numDirLights: l.directional.length,
          numPointLights: l.point.length,
          numSpotLights: l.spot.length,
          numSpotLightMaps: l.spotLightMap.length,
          numRectAreaLights: l.rectArea.length,
          numHemiLights: l.hemi.length,
          numDirLightShadows: l.directionalShadowMap.length,
          numPointLightShadows: l.pointShadowMap.length,
          numSpotLightShadows: l.spotShadowMap.length,
          numSpotLightShadowsWithMaps: l.numSpotLightShadowsWithMaps,
          numLightProbes: l.numLightProbes,
          numClippingPlanes: o.numPlanes,
          numClipIntersection: o.numIntersection,
          dithering: s.dithering,
          shadowMapEnabled: t.shadowMap.enabled && u.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: Mt,
          useLegacyLights: t._useLegacyLights,
          decodeVideoTexture:
            F &&
            !0 === s.map.isVideoTexture &&
            Qt.getTransfer(s.map.colorSpace) === mt,
          premultipliedAlpha: s.premultipliedAlpha,
          doubleSided: 2 === s.side,
          flipSided: s.side === a,
          useDepthPacking: s.depthPacking >= 0,
          depthPacking: s.depthPacking || 0,
          index0AttributeName: s.index0AttributeName,
          extensionDerivatives: xt && !0 === s.extensions.derivatives,
          extensionFragDepth: xt && !0 === s.extensions.fragDepth,
          extensionDrawBuffers: xt && !0 === s.extensions.drawBuffers,
          extensionShaderTextureLOD: xt && !0 === s.extensions.shaderTextureLOD,
          extensionClipCullDistance:
            xt &&
            !0 === s.extensions.clipCullDistance &&
            i.has('WEBGL_clip_cull_distance'),
          extensionMultiDraw:
            xt && !0 === s.extensions.multiDraw && i.has('WEBGL_multi_draw'),
          rendererExtensionFragDepth: d || i.has('EXT_frag_depth'),
          rendererExtensionDrawBuffers: d || i.has('WEBGL_draw_buffers'),
          rendererExtensionShaderTextureLod:
            d || i.has('EXT_shader_texture_lod'),
          rendererExtensionParallelShaderCompile: i.has(
            'KHR_parallel_shader_compile'
          ),
          customProgramCacheKey: s.customProgramCacheKey(),
        };
        return (
          (St.vertexUv1s = h.has(1)),
          (St.vertexUv2s = h.has(2)),
          (St.vertexUv3s = h.has(3)),
          h.clear(),
          St
        );
      },
      getProgramCacheKey: function (e) {
        const n = [];
        if (
          (e.shaderID
            ? n.push(e.shaderID)
            : (n.push(e.customVertexShaderID),
              n.push(e.customFragmentShaderID)),
          void 0 !== e.defines)
        )
          for (const t in e.defines) n.push(t), n.push(e.defines[t]);
        return (
          !1 === e.isRawShaderMaterial &&
            (!(function (t, e) {
              t.push(e.precision),
                t.push(e.outputColorSpace),
                t.push(e.envMapMode),
                t.push(e.envMapCubeUVHeight),
                t.push(e.mapUv),
                t.push(e.alphaMapUv),
                t.push(e.lightMapUv),
                t.push(e.aoMapUv),
                t.push(e.bumpMapUv),
                t.push(e.normalMapUv),
                t.push(e.displacementMapUv),
                t.push(e.emissiveMapUv),
                t.push(e.metalnessMapUv),
                t.push(e.roughnessMapUv),
                t.push(e.anisotropyMapUv),
                t.push(e.clearcoatMapUv),
                t.push(e.clearcoatNormalMapUv),
                t.push(e.clearcoatRoughnessMapUv),
                t.push(e.iridescenceMapUv),
                t.push(e.iridescenceThicknessMapUv),
                t.push(e.sheenColorMapUv),
                t.push(e.sheenRoughnessMapUv),
                t.push(e.specularMapUv),
                t.push(e.specularColorMapUv),
                t.push(e.specularIntensityMapUv),
                t.push(e.transmissionMapUv),
                t.push(e.thicknessMapUv),
                t.push(e.combine),
                t.push(e.fogExp2),
                t.push(e.sizeAttenuation),
                t.push(e.morphTargetsCount),
                t.push(e.morphAttributeCount),
                t.push(e.numDirLights),
                t.push(e.numPointLights),
                t.push(e.numSpotLights),
                t.push(e.numSpotLightMaps),
                t.push(e.numHemiLights),
                t.push(e.numRectAreaLights),
                t.push(e.numDirLightShadows),
                t.push(e.numPointLightShadows),
                t.push(e.numSpotLightShadows),
                t.push(e.numSpotLightShadowsWithMaps),
                t.push(e.numLightProbes),
                t.push(e.shadowMapType),
                t.push(e.toneMapping),
                t.push(e.numClippingPlanes),
                t.push(e.numClipIntersection),
                t.push(e.depthPacking);
            })(n, e),
            (function (t, e) {
              l.disableAll(), e.isWebGL2 && l.enable(0);
              e.supportsVertexTextures && l.enable(1);
              e.instancing && l.enable(2);
              e.instancingColor && l.enable(3);
              e.instancingMorph && l.enable(4);
              e.matcap && l.enable(5);
              e.envMap && l.enable(6);
              e.normalMapObjectSpace && l.enable(7);
              e.normalMapTangentSpace && l.enable(8);
              e.clearcoat && l.enable(9);
              e.iridescence && l.enable(10);
              e.alphaTest && l.enable(11);
              e.vertexColors && l.enable(12);
              e.vertexAlphas && l.enable(13);
              e.vertexUv1s && l.enable(14);
              e.vertexUv2s && l.enable(15);
              e.vertexUv3s && l.enable(16);
              e.vertexTangents && l.enable(17);
              e.anisotropy && l.enable(18);
              e.alphaHash && l.enable(19);
              e.batching && l.enable(20);
              t.push(l.mask), l.disableAll(), e.fog && l.enable(0);
              e.useFog && l.enable(1);
              e.flatShading && l.enable(2);
              e.logarithmicDepthBuffer && l.enable(3);
              e.skinning && l.enable(4);
              e.morphTargets && l.enable(5);
              e.morphNormals && l.enable(6);
              e.morphColors && l.enable(7);
              e.premultipliedAlpha && l.enable(8);
              e.shadowMapEnabled && l.enable(9);
              e.useLegacyLights && l.enable(10);
              e.doubleSided && l.enable(11);
              e.flipSided && l.enable(12);
              e.useDepthPacking && l.enable(13);
              e.dithering && l.enable(14);
              e.transmission && l.enable(15);
              e.sheen && l.enable(16);
              e.opaque && l.enable(17);
              e.pointsUvs && l.enable(18);
              e.decodeVideoTexture && l.enable(19);
              e.alphaToCoverage && l.enable(20);
              t.push(l.mask);
            })(n, e),
            n.push(t.outputColorSpace)),
          n.push(e.customProgramCacheKey),
          n.join()
        );
      },
      getUniforms: function (t) {
        const e = g[t.type];
        let n;
        if (e) {
          const t = ji[e];
          n = Ti.clone(t.uniforms);
        } else n = t.uniforms;
        return n;
      },
      acquireProgram: function (e, n) {
        let i;
        for (let t = 0, e = u.length; t < e; t++) {
          const e = u[t];
          if (e.cacheKey === n) {
            (i = e), ++i.usedTimes;
            break;
          }
        }
        return void 0 === i && ((i = new Ja(t, n, e, s)), u.push(i)), i;
      },
      releaseProgram: function (t) {
        if (0 == --t.usedTimes) {
          const e = u.indexOf(t);
          (u[e] = u[u.length - 1]), u.pop(), t.destroy();
        }
      },
      releaseShaderCache: function (t) {
        c.remove(t);
      },
      programs: u,
      dispose: function () {
        c.dispose();
      },
    };
  }
  function ns() {
    let t = new WeakMap();
    return {
      get: function (e) {
        let n = t.get(e);
        return void 0 === n && ((n = {}), t.set(e, n)), n;
      },
      remove: function (e) {
        t.delete(e);
      },
      update: function (e, n, i) {
        t.get(e)[n] = i;
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function is(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
        ? t.renderOrder - e.renderOrder
        : t.material.id !== e.material.id
          ? t.material.id - e.material.id
          : t.z !== e.z
            ? t.z - e.z
            : t.id - e.id;
  }
  function rs(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
        ? t.renderOrder - e.renderOrder
        : t.z !== e.z
          ? e.z - t.z
          : t.id - e.id;
  }
  function as() {
    const t = [];
    let e = 0;
    const n = [],
      i = [],
      r = [];
    function a(n, i, r, a, s, o) {
      let l = t[e];
      return (
        void 0 === l
          ? ((l = {
              id: n.id,
              object: n,
              geometry: i,
              material: r,
              groupOrder: a,
              renderOrder: n.renderOrder,
              z: s,
              group: o,
            }),
            (t[e] = l))
          : ((l.id = n.id),
            (l.object = n),
            (l.geometry = i),
            (l.material = r),
            (l.groupOrder = a),
            (l.renderOrder = n.renderOrder),
            (l.z = s),
            (l.group = o)),
        e++,
        l
      );
    }
    return {
      opaque: n,
      transmissive: i,
      transparent: r,
      init: function () {
        (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
      },
      push: function (t, e, s, o, l, c) {
        const h = a(t, e, s, o, l, c);
        s.transmission > 0
          ? i.push(h)
          : !0 === s.transparent
            ? r.push(h)
            : n.push(h);
      },
      unshift: function (t, e, s, o, l, c) {
        const h = a(t, e, s, o, l, c);
        s.transmission > 0
          ? i.unshift(h)
          : !0 === s.transparent
            ? r.unshift(h)
            : n.unshift(h);
      },
      finish: function () {
        for (let n = e, i = t.length; n < i; n++) {
          const e = t[n];
          if (null === e.id) break;
          (e.id = null),
            (e.object = null),
            (e.geometry = null),
            (e.material = null),
            (e.group = null);
        }
      },
      sort: function (t, e) {
        n.length > 1 && n.sort(t || is),
          i.length > 1 && i.sort(e || rs),
          r.length > 1 && r.sort(e || rs);
      },
    };
  }
  function ss() {
    let t = new WeakMap();
    return {
      get: function (e, n) {
        const i = t.get(e);
        let r;
        return (
          void 0 === i
            ? ((r = new as()), t.set(e, [r]))
            : n >= i.length
              ? ((r = new as()), i.push(r))
              : (r = i[n]),
          r
        );
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function os() {
    const t = {};
    return {
      get: function (e) {
        if (void 0 !== t[e.id]) return t[e.id];
        let n;
        switch (e.type) {
          case 'DirectionalLight':
            n = { direction: new me(), color: new In() };
            break;
          case 'SpotLight':
            n = {
              position: new me(),
              direction: new me(),
              color: new In(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case 'PointLight':
            n = { position: new me(), color: new In(), distance: 0, decay: 0 };
            break;
          case 'HemisphereLight':
            n = {
              direction: new me(),
              skyColor: new In(),
              groundColor: new In(),
            };
            break;
          case 'RectAreaLight':
            n = {
              color: new In(),
              position: new me(),
              halfWidth: new me(),
              halfHeight: new me(),
            };
        }
        return (t[e.id] = n), n;
      },
    };
  }
  let ls = 0;
  function cs(t, e) {
    return (
      (e.castShadow ? 2 : 0) -
      (t.castShadow ? 2 : 0) +
      (e.map ? 1 : 0) -
      (t.map ? 1 : 0)
    );
  }
  function hs(t, e) {
    const n = new os(),
      i = (function () {
        const t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case 'DirectionalLight':
              case 'SpotLight':
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Vt(),
                };
                break;
              case 'PointLight':
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Vt(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3,
                };
            }
            return (t[e.id] = n), n;
          },
        };
      })(),
      r = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1,
          numLightProbes: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0,
      };
    for (let t = 0; t < 9; t++) r.probe.push(new me());
    const a = new me(),
      s = new Xe(),
      o = new Xe();
    return {
      setup: function (a, s) {
        let o = 0,
          l = 0,
          c = 0;
        for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
        let h = 0,
          u = 0,
          d = 0,
          p = 0,
          f = 0,
          m = 0,
          g = 0,
          _ = 0,
          v = 0,
          x = 0,
          M = 0;
        a.sort(cs);
        const S = !0 === s ? Math.PI : 1;
        for (let t = 0, e = a.length; t < e; t++) {
          const e = a[t],
            s = e.color,
            E = e.intensity,
            T = e.distance,
            y = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
          if (e.isAmbientLight)
            (o += s.r * E * S), (l += s.g * E * S), (c += s.b * E * S);
          else if (e.isLightProbe) {
            for (let t = 0; t < 9; t++)
              r.probe[t].addScaledVector(e.sh.coefficients[t], E);
            M++;
          } else if (e.isDirectionalLight) {
            const t = n.get(e);
            if (
              (t.color.copy(e.color).multiplyScalar(e.intensity * S),
              e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (r.directionalShadow[h] = n),
                (r.directionalShadowMap[h] = y),
                (r.directionalShadowMatrix[h] = e.shadow.matrix),
                m++;
            }
            (r.directional[h] = t), h++;
          } else if (e.isSpotLight) {
            const t = n.get(e);
            t.position.setFromMatrixPosition(e.matrixWorld),
              t.color.copy(s).multiplyScalar(E * S),
              (t.distance = T),
              (t.coneCos = Math.cos(e.angle)),
              (t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
              (t.decay = e.decay),
              (r.spot[d] = t);
            const a = e.shadow;
            if (
              (e.map &&
                ((r.spotLightMap[v] = e.map),
                v++,
                a.updateMatrices(e),
                e.castShadow && x++),
              (r.spotLightMatrix[d] = a.matrix),
              e.castShadow)
            ) {
              const t = i.get(e);
              (t.shadowBias = a.bias),
                (t.shadowNormalBias = a.normalBias),
                (t.shadowRadius = a.radius),
                (t.shadowMapSize = a.mapSize),
                (r.spotShadow[d] = t),
                (r.spotShadowMap[d] = y),
                _++;
            }
            d++;
          } else if (e.isRectAreaLight) {
            const t = n.get(e);
            t.color.copy(s).multiplyScalar(E),
              t.halfWidth.set(0.5 * e.width, 0, 0),
              t.halfHeight.set(0, 0.5 * e.height, 0),
              (r.rectArea[p] = t),
              p++;
          } else if (e.isPointLight) {
            const t = n.get(e);
            if (
              (t.color.copy(e.color).multiplyScalar(e.intensity * S),
              (t.distance = e.distance),
              (t.decay = e.decay),
              e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (n.shadowCameraNear = t.camera.near),
                (n.shadowCameraFar = t.camera.far),
                (r.pointShadow[u] = n),
                (r.pointShadowMap[u] = y),
                (r.pointShadowMatrix[u] = e.shadow.matrix),
                g++;
            }
            (r.point[u] = t), u++;
          } else if (e.isHemisphereLight) {
            const t = n.get(e);
            t.skyColor.copy(e.color).multiplyScalar(E * S),
              t.groundColor.copy(e.groundColor).multiplyScalar(E * S),
              (r.hemi[f] = t),
              f++;
          }
        }
        p > 0 &&
          (e.isWebGL2
            ? !0 === t.has('OES_texture_float_linear')
              ? ((r.rectAreaLTC1 = Xi.LTC_FLOAT_1),
                (r.rectAreaLTC2 = Xi.LTC_FLOAT_2))
              : ((r.rectAreaLTC1 = Xi.LTC_HALF_1),
                (r.rectAreaLTC2 = Xi.LTC_HALF_2))
            : !0 === t.has('OES_texture_float_linear')
              ? ((r.rectAreaLTC1 = Xi.LTC_FLOAT_1),
                (r.rectAreaLTC2 = Xi.LTC_FLOAT_2))
              : !0 === t.has('OES_texture_half_float_linear')
                ? ((r.rectAreaLTC1 = Xi.LTC_HALF_1),
                  (r.rectAreaLTC2 = Xi.LTC_HALF_2))
                : console.error(
                    'THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.'
                  )),
          (r.ambient[0] = o),
          (r.ambient[1] = l),
          (r.ambient[2] = c);
        const E = r.hash;
        (E.directionalLength === h &&
          E.pointLength === u &&
          E.spotLength === d &&
          E.rectAreaLength === p &&
          E.hemiLength === f &&
          E.numDirectionalShadows === m &&
          E.numPointShadows === g &&
          E.numSpotShadows === _ &&
          E.numSpotMaps === v &&
          E.numLightProbes === M) ||
          ((r.directional.length = h),
          (r.spot.length = d),
          (r.rectArea.length = p),
          (r.point.length = u),
          (r.hemi.length = f),
          (r.directionalShadow.length = m),
          (r.directionalShadowMap.length = m),
          (r.pointShadow.length = g),
          (r.pointShadowMap.length = g),
          (r.spotShadow.length = _),
          (r.spotShadowMap.length = _),
          (r.directionalShadowMatrix.length = m),
          (r.pointShadowMatrix.length = g),
          (r.spotLightMatrix.length = _ + v - x),
          (r.spotLightMap.length = v),
          (r.numSpotLightShadowsWithMaps = x),
          (r.numLightProbes = M),
          (E.directionalLength = h),
          (E.pointLength = u),
          (E.spotLength = d),
          (E.rectAreaLength = p),
          (E.hemiLength = f),
          (E.numDirectionalShadows = m),
          (E.numPointShadows = g),
          (E.numSpotShadows = _),
          (E.numSpotMaps = v),
          (E.numLightProbes = M),
          (r.version = ls++));
      },
      setupView: function (t, e) {
        let n = 0,
          i = 0,
          l = 0,
          c = 0,
          h = 0;
        const u = e.matrixWorldInverse;
        for (let e = 0, d = t.length; e < d; e++) {
          const d = t[e];
          if (d.isDirectionalLight) {
            const t = r.directional[n];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              a.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(a),
              t.direction.transformDirection(u),
              n++;
          } else if (d.isSpotLight) {
            const t = r.spot[l];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              t.direction.setFromMatrixPosition(d.matrixWorld),
              a.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(a),
              t.direction.transformDirection(u),
              l++;
          } else if (d.isRectAreaLight) {
            const t = r.rectArea[c];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              o.identity(),
              s.copy(d.matrixWorld),
              s.premultiply(u),
              o.extractRotation(s),
              t.halfWidth.set(0.5 * d.width, 0, 0),
              t.halfHeight.set(0, 0.5 * d.height, 0),
              t.halfWidth.applyMatrix4(o),
              t.halfHeight.applyMatrix4(o),
              c++;
          } else if (d.isPointLight) {
            const t = r.point[i];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              i++;
          } else if (d.isHemisphereLight) {
            const t = r.hemi[h];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              t.direction.transformDirection(u),
              h++;
          }
        }
      },
      state: r,
    };
  }
  function us(t, e) {
    const n = new hs(t, e),
      i = [],
      r = [];
    return {
      init: function () {
        (i.length = 0), (r.length = 0);
      },
      state: { lightsArray: i, shadowsArray: r, lights: n },
      setupLights: function (t) {
        n.setup(i, t);
      },
      setupLightsView: function (t) {
        n.setupView(i, t);
      },
      pushLight: function (t) {
        i.push(t);
      },
      pushShadow: function (t) {
        r.push(t);
      },
    };
  }
  function ds(t, e) {
    let n = new WeakMap();
    return {
      get: function (i, r = 0) {
        const a = n.get(i);
        let s;
        return (
          void 0 === a
            ? ((s = new us(t, e)), n.set(i, [s]))
            : r >= a.length
              ? ((s = new us(t, e)), a.push(s))
              : (s = a[r]),
          s
        );
      },
      dispose: function () {
        n = new WeakMap();
      },
    };
  }
  class ps extends Bn {
    constructor(t) {
      super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = 'MeshDepthMaterial'),
        (this.depthPacking = 3200),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.depthPacking = t.depthPacking),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        this
      );
    }
  }
  class fs extends Bn {
    constructor(t) {
      super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = 'MeshDistanceMaterial'),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        this
      );
    }
  }
  function ms(t, n, o) {
    let l = new Hi();
    const c = new Vt(),
      h = new Vt(),
      u = new ce(),
      d = new ps({ depthPacking: 3201 }),
      p = new fs(),
      f = {},
      m = o.maxTextureSize,
      g = { [r]: a, [a]: r, [s]: 2 },
      _ = new yi({
        defines: { VSM_SAMPLES: 8 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new Vt() },
          radius: { value: 4 },
        },
        vertexShader:
          'void main() {\n\tgl_Position = vec4( position, 1.0 );\n}',
        fragmentShader:
          'uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}',
      }),
      v = _.clone();
    v.defines.HORIZONTAL_PASS = 1;
    const x = new Qn();
    x.setAttribute(
      'position',
      new Vn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    const M = new _i(x, _),
      S = this;
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = e);
    let E = this.type;
    function T(e, i) {
      const r = n.update(M);
      _.defines.VSM_SAMPLES !== e.blurSamples &&
        ((_.defines.VSM_SAMPLES = e.blurSamples),
        (v.defines.VSM_SAMPLES = e.blurSamples),
        (_.needsUpdate = !0),
        (v.needsUpdate = !0)),
        null === e.mapPass && (e.mapPass = new ue(c.x, c.y)),
        (_.uniforms.shadow_pass.value = e.map.texture),
        (_.uniforms.resolution.value = e.mapSize),
        (_.uniforms.radius.value = e.radius),
        t.setRenderTarget(e.mapPass),
        t.clear(),
        t.renderBufferDirect(i, null, r, _, M, null),
        (v.uniforms.shadow_pass.value = e.mapPass.texture),
        (v.uniforms.resolution.value = e.mapSize),
        (v.uniforms.radius.value = e.radius),
        t.setRenderTarget(e.map),
        t.clear(),
        t.renderBufferDirect(i, null, r, v, M, null);
    }
    function y(e, n, r, a) {
      let s = null;
      const o =
        !0 === r.isPointLight
          ? e.customDistanceMaterial
          : e.customDepthMaterial;
      if (void 0 !== o) s = o;
      else if (
        ((s = !0 === r.isPointLight ? p : d),
        (t.localClippingEnabled &&
          !0 === n.clipShadows &&
          Array.isArray(n.clippingPlanes) &&
          0 !== n.clippingPlanes.length) ||
          (n.displacementMap && 0 !== n.displacementScale) ||
          (n.alphaMap && n.alphaTest > 0) ||
          (n.map && n.alphaTest > 0))
      ) {
        const t = s.uuid,
          e = n.uuid;
        let i = f[t];
        void 0 === i && ((i = {}), (f[t] = i));
        let r = i[e];
        void 0 === r &&
          ((r = s.clone()), (i[e] = r), n.addEventListener('dispose', A)),
          (s = r);
      }
      if (
        ((s.visible = n.visible),
        (s.wireframe = n.wireframe),
        (s.side =
          a === i
            ? null !== n.shadowSide
              ? n.shadowSide
              : n.side
            : null !== n.shadowSide
              ? n.shadowSide
              : g[n.side]),
        (s.alphaMap = n.alphaMap),
        (s.alphaTest = n.alphaTest),
        (s.map = n.map),
        (s.clipShadows = n.clipShadows),
        (s.clippingPlanes = n.clippingPlanes),
        (s.clipIntersection = n.clipIntersection),
        (s.displacementMap = n.displacementMap),
        (s.displacementScale = n.displacementScale),
        (s.displacementBias = n.displacementBias),
        (s.wireframeLinewidth = n.wireframeLinewidth),
        (s.linewidth = n.linewidth),
        !0 === r.isPointLight && !0 === s.isMeshDistanceMaterial)
      ) {
        t.properties.get(s).light = r;
      }
      return s;
    }
    function b(e, r, a, s, o) {
      if (!1 === e.visible) return;
      if (
        e.layers.test(r.layers) &&
        (e.isMesh || e.isLine || e.isPoints) &&
        (e.castShadow || (e.receiveShadow && o === i)) &&
        (!e.frustumCulled || l.intersectsObject(e))
      ) {
        e.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, e.matrixWorld);
        const i = n.update(e),
          l = e.material;
        if (Array.isArray(l)) {
          const n = i.groups;
          for (let c = 0, h = n.length; c < h; c++) {
            const h = n[c],
              u = l[h.materialIndex];
            if (u && u.visible) {
              const n = y(e, u, s, o);
              e.onBeforeShadow(t, e, r, a, i, n, h),
                t.renderBufferDirect(a, null, i, n, e, h),
                e.onAfterShadow(t, e, r, a, i, n, h);
            }
          }
        } else if (l.visible) {
          const n = y(e, l, s, o);
          e.onBeforeShadow(t, e, r, a, i, n, null),
            t.renderBufferDirect(a, null, i, n, e, null),
            e.onAfterShadow(t, e, r, a, i, n, null);
        }
      }
      const c = e.children;
      for (let t = 0, e = c.length; t < e; t++) b(c[t], r, a, s, o);
    }
    function A(t) {
      t.target.removeEventListener('dispose', A);
      for (const e in f) {
        const n = f[e],
          i = t.target.uuid;
        if (i in n) {
          n[i].dispose(), delete n[i];
        }
      }
    }
    this.render = function (e, n, r) {
      if (!1 === S.enabled) return;
      if (!1 === S.autoUpdate && !1 === S.needsUpdate) return;
      if (0 === e.length) return;
      const a = t.getRenderTarget(),
        s = t.getActiveCubeFace(),
        o = t.getActiveMipmapLevel(),
        d = t.state;
      d.setBlending(0),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
      const p = E !== i && this.type === i,
        f = E === i && this.type !== i;
      for (let a = 0, s = e.length; a < s; a++) {
        const s = e[a],
          o = s.shadow;
        if (void 0 === o) {
          console.warn('THREE.WebGLShadowMap:', s, 'has no shadow.');
          continue;
        }
        if (!1 === o.autoUpdate && !1 === o.needsUpdate) continue;
        c.copy(o.mapSize);
        const g = o.getFrameExtents();
        if (
          (c.multiply(g),
          h.copy(o.mapSize),
          (c.x > m || c.y > m) &&
            (c.x > m &&
              ((h.x = Math.floor(m / g.x)),
              (c.x = h.x * g.x),
              (o.mapSize.x = h.x)),
            c.y > m &&
              ((h.y = Math.floor(m / g.y)),
              (c.y = h.y * g.y),
              (o.mapSize.y = h.y))),
          null === o.map || !0 === p || !0 === f)
        ) {
          const t = this.type !== i ? { minFilter: V, magFilter: V } : {};
          null !== o.map && o.map.dispose(),
            (o.map = new ue(c.x, c.y, t)),
            (o.map.texture.name = s.name + '.shadowMap'),
            o.camera.updateProjectionMatrix();
        }
        t.setRenderTarget(o.map), t.clear();
        const _ = o.getViewportCount();
        for (let t = 0; t < _; t++) {
          const e = o.getViewport(t);
          u.set(h.x * e.x, h.y * e.y, h.x * e.z, h.y * e.w),
            d.viewport(u),
            o.updateMatrices(s, t),
            (l = o.getFrustum()),
            b(n, r, o.camera, s, this.type);
        }
        !0 !== o.isPointLightShadow && this.type === i && T(o, r),
          (o.needsUpdate = !1);
      }
      (E = this.type), (S.needsUpdate = !1), t.setRenderTarget(a, s, o);
    };
  }
  function gs(t, e, n) {
    const i = n.isWebGL2;
    const r = new (function () {
        let e = !1;
        const n = new ce();
        let i = null;
        const r = new ce(0, 0, 0, 0);
        return {
          setMask: function (n) {
            i === n || e || (t.colorMask(n, n, n, n), (i = n));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e, i, a, s, o) {
            !0 === o && ((e *= s), (i *= s), (a *= s)),
              n.set(e, i, a, s),
              !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n));
          },
          reset: function () {
            (e = !1), (i = null), r.set(-1, 0, 0, 0);
          },
        };
      })(),
      s = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null;
        return {
          setTest: function (e) {
            e ? ot(t.DEPTH_TEST) : lt(t.DEPTH_TEST);
          },
          setMask: function (i) {
            n === i || e || (t.depthMask(i), (n = i));
          },
          setFunc: function (e) {
            if (i !== e) {
              switch (e) {
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
                  t.depthFunc(t.NOTEQUAL);
              }
              i = e;
            }
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            r !== e && (t.clearDepth(e), (r = e));
          },
          reset: function () {
            (e = !1), (n = null), (i = null), (r = null);
          },
        };
      })(),
      b = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null,
          a = null,
          s = null,
          o = null,
          l = null,
          c = null;
        return {
          setTest: function (n) {
            e || (n ? ot(t.STENCIL_TEST) : lt(t.STENCIL_TEST));
          },
          setMask: function (i) {
            n === i || e || (t.stencilMask(i), (n = i));
          },
          setFunc: function (e, n, s) {
            (i === e && r === n && a === s) ||
              (t.stencilFunc(e, n, s), (i = e), (r = n), (a = s));
          },
          setOp: function (e, n, i) {
            (s === e && o === n && l === i) ||
              (t.stencilOp(e, n, i), (s = e), (o = n), (l = i));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            c !== e && (t.clearStencil(e), (c = e));
          },
          reset: function () {
            (e = !1),
              (n = null),
              (i = null),
              (r = null),
              (a = null),
              (s = null),
              (o = null),
              (l = null),
              (c = null);
          },
        };
      })(),
      A = new WeakMap(),
      w = new WeakMap();
    let R = {},
      C = {},
      L = new WeakMap(),
      P = [],
      U = null,
      D = !1,
      N = null,
      I = null,
      O = null,
      F = null,
      B = null,
      z = null,
      H = null,
      G = new In(0, 0, 0),
      V = 0,
      k = !1,
      W = null,
      X = null,
      j = null,
      q = null,
      Y = null;
    const K = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let Z = !1,
      J = 0;
    const $ = t.getParameter(t.VERSION);
    -1 !== $.indexOf('WebGL')
      ? ((J = parseFloat(/^WebGL (\d)/.exec($)[1])), (Z = J >= 1))
      : -1 !== $.indexOf('OpenGL ES') &&
        ((J = parseFloat(/^OpenGL ES (\d)/.exec($)[1])), (Z = J >= 2));
    let Q = null,
      tt = {};
    const et = t.getParameter(t.SCISSOR_BOX),
      nt = t.getParameter(t.VIEWPORT),
      it = new ce().fromArray(et),
      rt = new ce().fromArray(nt);
    function at(e, n, r, a) {
      const s = new Uint8Array(4),
        o = t.createTexture();
      t.bindTexture(e, o),
        t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
        t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
      for (let o = 0; o < r; o++)
        !i || (e !== t.TEXTURE_3D && e !== t.TEXTURE_2D_ARRAY)
          ? t.texImage2D(n + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, s)
          : t.texImage3D(n, 0, t.RGBA, 1, 1, a, 0, t.RGBA, t.UNSIGNED_BYTE, s);
      return o;
    }
    const st = {};
    function ot(e) {
      !0 !== R[e] && (t.enable(e), (R[e] = !0));
    }
    function lt(e) {
      !1 !== R[e] && (t.disable(e), (R[e] = !1));
    }
    (st[t.TEXTURE_2D] = at(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
      (st[t.TEXTURE_CUBE_MAP] = at(
        t.TEXTURE_CUBE_MAP,
        t.TEXTURE_CUBE_MAP_POSITIVE_X,
        6
      )),
      i &&
        ((st[t.TEXTURE_2D_ARRAY] = at(
          t.TEXTURE_2D_ARRAY,
          t.TEXTURE_2D_ARRAY,
          1,
          1
        )),
        (st[t.TEXTURE_3D] = at(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1))),
      r.setClear(0, 0, 0, 1),
      s.setClear(1),
      b.setClear(0),
      ot(t.DEPTH_TEST),
      s.setFunc(3),
      dt(!1),
      pt(1),
      ot(t.CULL_FACE),
      ut(0);
    const ct = {
      [o]: t.FUNC_ADD,
      [l]: t.FUNC_SUBTRACT,
      [c]: t.FUNC_REVERSE_SUBTRACT,
    };
    if (i) (ct[103] = t.MIN), (ct[104] = t.MAX);
    else {
      const t = e.get('EXT_blend_minmax');
      null !== t && ((ct[103] = t.MIN_EXT), (ct[104] = t.MAX_EXT));
    }
    const ht = {
      [h]: t.ZERO,
      [u]: t.ONE,
      [d]: t.SRC_COLOR,
      [f]: t.SRC_ALPHA,
      [M]: t.SRC_ALPHA_SATURATE,
      [v]: t.DST_COLOR,
      [g]: t.DST_ALPHA,
      [p]: t.ONE_MINUS_SRC_COLOR,
      [m]: t.ONE_MINUS_SRC_ALPHA,
      [x]: t.ONE_MINUS_DST_COLOR,
      [_]: t.ONE_MINUS_DST_ALPHA,
      [S]: t.CONSTANT_COLOR,
      [E]: t.ONE_MINUS_CONSTANT_COLOR,
      [T]: t.CONSTANT_ALPHA,
      [y]: t.ONE_MINUS_CONSTANT_ALPHA,
    };
    function ut(e, n, i, r, a, s, l, c, h, u) {
      if (0 !== e) {
        if ((!1 === D && (ot(t.BLEND), (D = !0)), 5 === e))
          (a = a || n),
            (s = s || i),
            (l = l || r),
            (n === I && a === B) ||
              (t.blendEquationSeparate(ct[n], ct[a]), (I = n), (B = a)),
            (i === O && r === F && s === z && l === H) ||
              (t.blendFuncSeparate(ht[i], ht[r], ht[s], ht[l]),
              (O = i),
              (F = r),
              (z = s),
              (H = l)),
            (!1 !== c.equals(G) && h === V) ||
              (t.blendColor(c.r, c.g, c.b, h), G.copy(c), (V = h)),
            (N = e),
            (k = !1);
        else if (e !== N || u !== k) {
          if (
            ((I === o && B === o) ||
              (t.blendEquation(t.FUNC_ADD), (I = o), (B = o)),
            u)
          )
            switch (e) {
              case 1:
                t.blendFuncSeparate(
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA
                );
                break;
              case 2:
                t.blendFunc(t.ONE, t.ONE);
                break;
              case 3:
                t.blendFuncSeparate(
                  t.ZERO,
                  t.ONE_MINUS_SRC_COLOR,
                  t.ZERO,
                  t.ONE
                );
                break;
              case 4:
                t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
                break;
              default:
                console.error('THREE.WebGLState: Invalid blending: ', e);
            }
          else
            switch (e) {
              case 1:
                t.blendFuncSeparate(
                  t.SRC_ALPHA,
                  t.ONE_MINUS_SRC_ALPHA,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA
                );
                break;
              case 2:
                t.blendFunc(t.SRC_ALPHA, t.ONE);
                break;
              case 3:
                t.blendFuncSeparate(
                  t.ZERO,
                  t.ONE_MINUS_SRC_COLOR,
                  t.ZERO,
                  t.ONE
                );
                break;
              case 4:
                t.blendFunc(t.ZERO, t.SRC_COLOR);
                break;
              default:
                console.error('THREE.WebGLState: Invalid blending: ', e);
            }
          (O = null),
            (F = null),
            (z = null),
            (H = null),
            G.set(0, 0, 0),
            (V = 0),
            (N = e),
            (k = u);
        }
      } else !0 === D && (lt(t.BLEND), (D = !1));
    }
    function dt(e) {
      W !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (W = e));
    }
    function pt(e) {
      0 !== e
        ? (ot(t.CULL_FACE),
          e !== X &&
            (1 === e
              ? t.cullFace(t.BACK)
              : 2 === e
                ? t.cullFace(t.FRONT)
                : t.cullFace(t.FRONT_AND_BACK)))
        : lt(t.CULL_FACE),
        (X = e);
    }
    function ft(e, n, i) {
      e
        ? (ot(t.POLYGON_OFFSET_FILL),
          (q === n && Y === i) || (t.polygonOffset(n, i), (q = n), (Y = i)))
        : lt(t.POLYGON_OFFSET_FILL);
    }
    return {
      buffers: { color: r, depth: s, stencil: b },
      enable: ot,
      disable: lt,
      bindFramebuffer: function (e, n) {
        return (
          C[e] !== n &&
          (t.bindFramebuffer(e, n),
          (C[e] = n),
          i &&
            (e === t.DRAW_FRAMEBUFFER && (C[t.FRAMEBUFFER] = n),
            e === t.FRAMEBUFFER && (C[t.DRAW_FRAMEBUFFER] = n)),
          !0)
        );
      },
      drawBuffers: function (i, r) {
        let a = P,
          s = !1;
        if (i) {
          (a = L.get(r)), void 0 === a && ((a = []), L.set(r, a));
          const e = i.textures;
          if (a.length !== e.length || a[0] !== t.COLOR_ATTACHMENT0) {
            for (let n = 0, i = e.length; n < i; n++)
              a[n] = t.COLOR_ATTACHMENT0 + n;
            (a.length = e.length), (s = !0);
          }
        } else a[0] !== t.BACK && ((a[0] = t.BACK), (s = !0));
        if (s)
          if (n.isWebGL2) t.drawBuffers(a);
          else {
            if (!0 !== e.has('WEBGL_draw_buffers'))
              throw new Error(
                'THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension'
              );
            e.get('WEBGL_draw_buffers').drawBuffersWEBGL(a);
          }
      },
      useProgram: function (e) {
        return U !== e && (t.useProgram(e), (U = e), !0);
      },
      setBlending: ut,
      setMaterial: function (e, n) {
        2 === e.side ? lt(t.CULL_FACE) : ot(t.CULL_FACE);
        let i = e.side === a;
        n && (i = !i),
          dt(i),
          1 === e.blending && !1 === e.transparent
            ? ut(0)
            : ut(
                e.blending,
                e.blendEquation,
                e.blendSrc,
                e.blendDst,
                e.blendEquationAlpha,
                e.blendSrcAlpha,
                e.blendDstAlpha,
                e.blendColor,
                e.blendAlpha,
                e.premultipliedAlpha
              ),
          s.setFunc(e.depthFunc),
          s.setTest(e.depthTest),
          s.setMask(e.depthWrite),
          r.setMask(e.colorWrite);
        const o = e.stencilWrite;
        b.setTest(o),
          o &&
            (b.setMask(e.stencilWriteMask),
            b.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
            b.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
          ft(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
          !0 === e.alphaToCoverage
            ? ot(t.SAMPLE_ALPHA_TO_COVERAGE)
            : lt(t.SAMPLE_ALPHA_TO_COVERAGE);
      },
      setFlipSided: dt,
      setCullFace: pt,
      setLineWidth: function (e) {
        e !== j && (Z && t.lineWidth(e), (j = e));
      },
      setPolygonOffset: ft,
      setScissorTest: function (e) {
        e ? ot(t.SCISSOR_TEST) : lt(t.SCISSOR_TEST);
      },
      activeTexture: function (e) {
        void 0 === e && (e = t.TEXTURE0 + K - 1),
          Q !== e && (t.activeTexture(e), (Q = e));
      },
      bindTexture: function (e, n, i) {
        void 0 === i && (i = null === Q ? t.TEXTURE0 + K - 1 : Q);
        let r = tt[i];
        void 0 === r && ((r = { type: void 0, texture: void 0 }), (tt[i] = r)),
          (r.type === e && r.texture === n) ||
            (Q !== i && (t.activeTexture(i), (Q = i)),
            t.bindTexture(e, n || st[e]),
            (r.type = e),
            (r.texture = n));
      },
      unbindTexture: function () {
        const e = tt[Q];
        void 0 !== e &&
          void 0 !== e.type &&
          (t.bindTexture(e.type, null),
          (e.type = void 0),
          (e.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      compressedTexImage3D: function () {
        try {
          t.compressedTexImage3D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      texImage2D: function () {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      texImage3D: function () {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      updateUBOMapping: function (e, n) {
        let i = w.get(n);
        void 0 === i && ((i = new WeakMap()), w.set(n, i));
        let r = i.get(e);
        void 0 === r && ((r = t.getUniformBlockIndex(n, e.name)), i.set(e, r));
      },
      uniformBlockBinding: function (e, n) {
        const i = w.get(n).get(e);
        A.get(n) !== i &&
          (t.uniformBlockBinding(n, i, e.__bindingPointIndex), A.set(n, i));
      },
      texStorage2D: function () {
        try {
          t.texStorage2D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      texStorage3D: function () {
        try {
          t.texStorage3D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      texSubImage2D: function () {
        try {
          t.texSubImage2D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      texSubImage3D: function () {
        try {
          t.texSubImage3D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      compressedTexSubImage2D: function () {
        try {
          t.compressedTexSubImage2D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      compressedTexSubImage3D: function () {
        try {
          t.compressedTexSubImage3D.apply(t, arguments);
        } catch (t) {
          console.error('THREE.WebGLState:', t);
        }
      },
      scissor: function (e) {
        !1 === it.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), it.copy(e));
      },
      viewport: function (e) {
        !1 === rt.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), rt.copy(e));
      },
      reset: function () {
        t.disable(t.BLEND),
          t.disable(t.CULL_FACE),
          t.disable(t.DEPTH_TEST),
          t.disable(t.POLYGON_OFFSET_FILL),
          t.disable(t.SCISSOR_TEST),
          t.disable(t.STENCIL_TEST),
          t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
          t.blendEquation(t.FUNC_ADD),
          t.blendFunc(t.ONE, t.ZERO),
          t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
          t.blendColor(0, 0, 0, 0),
          t.colorMask(!0, !0, !0, !0),
          t.clearColor(0, 0, 0, 0),
          t.depthMask(!0),
          t.depthFunc(t.LESS),
          t.clearDepth(1),
          t.stencilMask(4294967295),
          t.stencilFunc(t.ALWAYS, 0, 4294967295),
          t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
          t.clearStencil(0),
          t.cullFace(t.BACK),
          t.frontFace(t.CCW),
          t.polygonOffset(0, 0),
          t.activeTexture(t.TEXTURE0),
          t.bindFramebuffer(t.FRAMEBUFFER, null),
          !0 === i &&
            (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            t.bindFramebuffer(t.READ_FRAMEBUFFER, null)),
          t.useProgram(null),
          t.lineWidth(1),
          t.scissor(0, 0, t.canvas.width, t.canvas.height),
          t.viewport(0, 0, t.canvas.width, t.canvas.height),
          (R = {}),
          (Q = null),
          (tt = {}),
          (C = {}),
          (L = new WeakMap()),
          (P = []),
          (U = null),
          (D = !1),
          (N = null),
          (I = null),
          (O = null),
          (F = null),
          (B = null),
          (z = null),
          (H = null),
          (G = new In(0, 0, 0)),
          (V = 0),
          (k = !1),
          (W = null),
          (X = null),
          (j = null),
          (q = null),
          (Y = null),
          it.set(0, 0, t.canvas.width, t.canvas.height),
          rt.set(0, 0, t.canvas.width, t.canvas.height),
          r.reset(),
          s.reset(),
          b.reset();
      },
    };
  }
  function _s(t, e, n, i, r, a, s) {
    const o = r.isWebGL2,
      l = e.has('WEBGL_multisampled_render_to_texture')
        ? e.get('WEBGL_multisampled_render_to_texture')
        : null,
      c =
        'undefined' != typeof navigator &&
        /OculusBrowser/g.test(navigator.userAgent),
      h = new Vt(),
      u = new WeakMap();
    let d;
    const p = new WeakMap();
    let f = !1;
    try {
      f =
        'undefined' != typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext('2d');
    } catch (t) {}
    function m(t, e) {
      return f ? new OffscreenCanvas(t, e) : jt('canvas');
    }
    function g(t, e, n, i) {
      let r = 1;
      const a = rt(t);
      if (
        ((a.width > i || a.height > i) && (r = i / Math.max(a.width, a.height)),
        r < 1 || !0 === e)
      ) {
        if (
          ('undefined' != typeof HTMLImageElement &&
            t instanceof HTMLImageElement) ||
          ('undefined' != typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ('undefined' != typeof ImageBitmap && t instanceof ImageBitmap) ||
          ('undefined' != typeof VideoFrame && t instanceof VideoFrame)
        ) {
          const i = e ? zt : Math.floor,
            s = i(r * a.width),
            o = i(r * a.height);
          void 0 === d && (d = m(s, o));
          const l = n ? m(s, o) : d;
          (l.width = s), (l.height = o);
          return (
            l.getContext('2d').drawImage(t, 0, 0, s, o),
            console.warn(
              'THREE.WebGLRenderer: Texture has been resized from (' +
                a.width +
                'x' +
                a.height +
                ') to (' +
                s +
                'x' +
                o +
                ').'
            ),
            l
          );
        }
        return (
          'data' in t &&
            console.warn(
              'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                a.width +
                'x' +
                a.height +
                ').'
            ),
          t
        );
      }
      return t;
    }
    function _(t) {
      const e = rt(t);
      return Bt(e.width) && Bt(e.height);
    }
    function v(t, e) {
      return t.generateMipmaps && e && t.minFilter !== V && t.minFilter !== X;
    }
    function x(e) {
      t.generateMipmap(e);
    }
    function M(n, i, r, a, s = !1) {
      if (!1 === o) return i;
      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            n +
            "'"
        );
      }
      let l = i;
      if (
        (i === t.RED &&
          (r === t.FLOAT && (l = t.R32F),
          r === t.HALF_FLOAT && (l = t.R16F),
          r === t.UNSIGNED_BYTE && (l = t.R8)),
        i === t.RED_INTEGER &&
          (r === t.UNSIGNED_BYTE && (l = t.R8UI),
          r === t.UNSIGNED_SHORT && (l = t.R16UI),
          r === t.UNSIGNED_INT && (l = t.R32UI),
          r === t.BYTE && (l = t.R8I),
          r === t.SHORT && (l = t.R16I),
          r === t.INT && (l = t.R32I)),
        i === t.RG &&
          (r === t.FLOAT && (l = t.RG32F),
          r === t.HALF_FLOAT && (l = t.RG16F),
          r === t.UNSIGNED_BYTE && (l = t.RG8)),
        i === t.RG_INTEGER &&
          (r === t.UNSIGNED_BYTE && (l = t.RG8UI),
          r === t.UNSIGNED_SHORT && (l = t.RG16UI),
          r === t.UNSIGNED_INT && (l = t.RG32UI),
          r === t.BYTE && (l = t.RG8I),
          r === t.SHORT && (l = t.RG16I),
          r === t.INT && (l = t.RG32I)),
        i === t.RGBA)
      ) {
        const e = s ? ft : Qt.getTransfer(a);
        r === t.FLOAT && (l = t.RGBA32F),
          r === t.HALF_FLOAT && (l = t.RGBA16F),
          r === t.UNSIGNED_BYTE && (l = e === mt ? t.SRGB8_ALPHA8 : t.RGBA8),
          r === t.UNSIGNED_SHORT_4_4_4_4 && (l = t.RGBA4),
          r === t.UNSIGNED_SHORT_5_5_5_1 && (l = t.RGB5_A1);
      }
      return (
        (l !== t.R16F &&
          l !== t.R32F &&
          l !== t.RG16F &&
          l !== t.RG32F &&
          l !== t.RGBA16F &&
          l !== t.RGBA32F) ||
          e.get('EXT_color_buffer_float'),
        l
      );
    }
    function S(t, e, n) {
      return !0 === v(t, n) ||
        (t.isFramebufferTexture && t.minFilter !== V && t.minFilter !== X)
        ? Math.log2(Math.max(e.width, e.height)) + 1
        : void 0 !== t.mipmaps && t.mipmaps.length > 0
          ? t.mipmaps.length
          : t.isCompressedTexture && Array.isArray(t.image)
            ? e.mipmaps.length
            : 1;
    }
    function E(e) {
      return e === V || 1004 === e || e === W ? t.NEAREST : t.LINEAR;
    }
    function T(t) {
      const e = t.target;
      e.removeEventListener('dispose', T),
        (function (t) {
          const e = i.get(t);
          if (void 0 === e.__webglInit) return;
          const n = t.source,
            r = p.get(n);
          if (r) {
            const i = r[e.__cacheKey];
            i.usedTimes--,
              0 === i.usedTimes && b(t),
              0 === Object.keys(r).length && p.delete(n);
          }
          i.remove(t);
        })(e),
        e.isVideoTexture && u.delete(e);
    }
    function y(e) {
      const n = e.target;
      n.removeEventListener('dispose', y),
        (function (e) {
          const n = i.get(e);
          e.depthTexture && e.depthTexture.dispose();
          if (e.isWebGLCubeRenderTarget)
            for (let e = 0; e < 6; e++) {
              if (Array.isArray(n.__webglFramebuffer[e]))
                for (let i = 0; i < n.__webglFramebuffer[e].length; i++)
                  t.deleteFramebuffer(n.__webglFramebuffer[e][i]);
              else t.deleteFramebuffer(n.__webglFramebuffer[e]);
              n.__webglDepthbuffer &&
                t.deleteRenderbuffer(n.__webglDepthbuffer[e]);
            }
          else {
            if (Array.isArray(n.__webglFramebuffer))
              for (let e = 0; e < n.__webglFramebuffer.length; e++)
                t.deleteFramebuffer(n.__webglFramebuffer[e]);
            else t.deleteFramebuffer(n.__webglFramebuffer);
            if (
              (n.__webglDepthbuffer &&
                t.deleteRenderbuffer(n.__webglDepthbuffer),
              n.__webglMultisampledFramebuffer &&
                t.deleteFramebuffer(n.__webglMultisampledFramebuffer),
              n.__webglColorRenderbuffer)
            )
              for (let e = 0; e < n.__webglColorRenderbuffer.length; e++)
                n.__webglColorRenderbuffer[e] &&
                  t.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);
            n.__webglDepthRenderbuffer &&
              t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
          }
          const r = e.textures;
          for (let e = 0, n = r.length; e < n; e++) {
            const n = i.get(r[e]);
            n.__webglTexture &&
              (t.deleteTexture(n.__webglTexture), s.memory.textures--),
              i.remove(r[e]);
          }
          i.remove(e);
        })(n);
    }
    function b(e) {
      const n = i.get(e);
      t.deleteTexture(n.__webglTexture);
      const r = e.source;
      delete p.get(r)[n.__cacheKey], s.memory.textures--;
    }
    let A = 0;
    function w(e, r) {
      const a = i.get(e);
      if (
        (e.isVideoTexture &&
          (function (t) {
            const e = s.render.frame;
            u.get(t) !== e && (u.set(t, e), t.update());
          })(e),
        !1 === e.isRenderTargetTexture &&
          e.version > 0 &&
          a.__version !== e.version)
      ) {
        const t = e.image;
        if (null === t)
          console.warn(
            'THREE.WebGLRenderer: Texture marked for update but no image data found.'
          );
        else {
          if (!1 !== t.complete) return void D(a, e, r);
          console.warn(
            'THREE.WebGLRenderer: Texture marked for update but image is incomplete'
          );
        }
      }
      n.bindTexture(t.TEXTURE_2D, a.__webglTexture, t.TEXTURE0 + r);
    }
    const R = { [z]: t.REPEAT, [H]: t.CLAMP_TO_EDGE, [G]: t.MIRRORED_REPEAT },
      C = {
        [V]: t.NEAREST,
        [k]: t.NEAREST_MIPMAP_NEAREST,
        [W]: t.NEAREST_MIPMAP_LINEAR,
        [X]: t.LINEAR,
        [j]: t.LINEAR_MIPMAP_NEAREST,
        [q]: t.LINEAR_MIPMAP_LINEAR,
      },
      L = {
        [xt]: t.NEVER,
        [At]: t.ALWAYS,
        [Mt]: t.LESS,
        [Et]: t.LEQUAL,
        [St]: t.EQUAL,
        [bt]: t.GEQUAL,
        [Tt]: t.GREATER,
        [yt]: t.NOTEQUAL,
      };
    function P(n, a, s) {
      if (
        (a.type !== $ ||
          !1 !== e.has('OES_texture_float_linear') ||
          (a.magFilter !== X &&
            a.magFilter !== j &&
            a.magFilter !== W &&
            a.magFilter !== q &&
            a.minFilter !== X &&
            a.minFilter !== j &&
            a.minFilter !== W &&
            a.minFilter !== q) ||
          console.warn(
            'THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.'
          ),
        s
          ? (t.texParameteri(n, t.TEXTURE_WRAP_S, R[a.wrapS]),
            t.texParameteri(n, t.TEXTURE_WRAP_T, R[a.wrapT]),
            (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
              t.texParameteri(n, t.TEXTURE_WRAP_R, R[a.wrapR]),
            t.texParameteri(n, t.TEXTURE_MAG_FILTER, C[a.magFilter]),
            t.texParameteri(n, t.TEXTURE_MIN_FILTER, C[a.minFilter]))
          : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
              t.texParameteri(n, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE),
            (a.wrapS === H && a.wrapT === H) ||
              console.warn(
                'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'
              ),
            t.texParameteri(n, t.TEXTURE_MAG_FILTER, E(a.magFilter)),
            t.texParameteri(n, t.TEXTURE_MIN_FILTER, E(a.minFilter)),
            a.minFilter !== V &&
              a.minFilter !== X &&
              console.warn(
                'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
              )),
        a.compareFunction &&
          (t.texParameteri(n, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE),
          t.texParameteri(n, t.TEXTURE_COMPARE_FUNC, L[a.compareFunction])),
        !0 === e.has('EXT_texture_filter_anisotropic'))
      ) {
        if (a.magFilter === V) return;
        if (a.minFilter !== W && a.minFilter !== q) return;
        if (a.type === $ && !1 === e.has('OES_texture_float_linear')) return;
        if (
          !1 === o &&
          a.type === Q &&
          !1 === e.has('OES_texture_half_float_linear')
        )
          return;
        if (a.anisotropy > 1 || i.get(a).__currentAnisotropy) {
          const s = e.get('EXT_texture_filter_anisotropic');
          t.texParameterf(
            n,
            s.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(a.anisotropy, r.getMaxAnisotropy())
          ),
            (i.get(a).__currentAnisotropy = a.anisotropy);
        }
      }
    }
    function U(e, n) {
      let i = !1;
      void 0 === e.__webglInit &&
        ((e.__webglInit = !0), n.addEventListener('dispose', T));
      const r = n.source;
      let a = p.get(r);
      void 0 === a && ((a = {}), p.set(r, a));
      const o = (function (t) {
        const e = [];
        return (
          e.push(t.wrapS),
          e.push(t.wrapT),
          e.push(t.wrapR || 0),
          e.push(t.magFilter),
          e.push(t.minFilter),
          e.push(t.anisotropy),
          e.push(t.internalFormat),
          e.push(t.format),
          e.push(t.type),
          e.push(t.generateMipmaps),
          e.push(t.premultiplyAlpha),
          e.push(t.flipY),
          e.push(t.unpackAlignment),
          e.push(t.colorSpace),
          e.join()
        );
      })(n);
      if (o !== e.__cacheKey) {
        void 0 === a[o] &&
          ((a[o] = { texture: t.createTexture(), usedTimes: 0 }),
          s.memory.textures++,
          (i = !0)),
          a[o].usedTimes++;
        const r = a[e.__cacheKey];
        void 0 !== r &&
          (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && b(n)),
          (e.__cacheKey = o),
          (e.__webglTexture = a[o].texture);
      }
      return i;
    }
    function D(e, s, l) {
      let c = t.TEXTURE_2D;
      (s.isDataArrayTexture || s.isCompressedArrayTexture) &&
        (c = t.TEXTURE_2D_ARRAY),
        s.isData3DTexture && (c = t.TEXTURE_3D);
      const h = U(e, s),
        u = s.source;
      n.bindTexture(c, e.__webglTexture, t.TEXTURE0 + l);
      const d = i.get(u);
      if (u.version !== d.__version || !0 === h) {
        n.activeTexture(t.TEXTURE0 + l);
        const e = Qt.getPrimaries(Qt.workingColorSpace),
          i = s.colorSpace === ct ? null : Qt.getPrimaries(s.colorSpace),
          p = s.colorSpace === ct || e === i ? t.NONE : t.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s.flipY),
          t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha),
          t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment),
          t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, p);
        const f =
          (function (t) {
            return (
              !o &&
              (t.wrapS !== H ||
                t.wrapT !== H ||
                (t.minFilter !== V && t.minFilter !== X))
            );
          })(s) && !1 === _(s.image);
        let m = g(s.image, f, !1, r.maxTextureSize);
        m = Z(s, m);
        const E = _(m) || o,
          T = a.convert(s.format, s.colorSpace);
        let y,
          b = a.convert(s.type),
          A = M(s.internalFormat, T, b, s.colorSpace, s.isVideoTexture);
        P(c, s, E);
        const w = s.mipmaps,
          R = o && !0 !== s.isVideoTexture && 36196 !== A,
          C = void 0 === d.__version || !0 === h,
          L = u.dataReady,
          U = S(s, m, E);
        if (s.isDepthTexture)
          (A = t.DEPTH_COMPONENT),
            o
              ? (A =
                  s.type === $
                    ? t.DEPTH_COMPONENT32F
                    : s.type === J
                      ? t.DEPTH_COMPONENT24
                      : s.type === tt
                        ? t.DEPTH24_STENCIL8
                        : t.DEPTH_COMPONENT16)
              : s.type === $ &&
                console.error(
                  'WebGLRenderer: Floating point depth texture requires WebGL2.'
                ),
            s.format === nt &&
              A === t.DEPTH_COMPONENT &&
              s.type !== K &&
              s.type !== J &&
              (console.warn(
                'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
              ),
              (s.type = J),
              (b = a.convert(s.type))),
            s.format === it &&
              A === t.DEPTH_COMPONENT &&
              ((A = t.DEPTH_STENCIL),
              s.type !== tt &&
                (console.warn(
                  'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
                ),
                (s.type = tt),
                (b = a.convert(s.type)))),
            C &&
              (R
                ? n.texStorage2D(t.TEXTURE_2D, 1, A, m.width, m.height)
                : n.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    A,
                    m.width,
                    m.height,
                    0,
                    T,
                    b,
                    null
                  ));
        else if (s.isDataTexture)
          if (w.length > 0 && E) {
            R &&
              C &&
              n.texStorage2D(t.TEXTURE_2D, U, A, w[0].width, w[0].height);
            for (let e = 0, i = w.length; e < i; e++)
              (y = w[e]),
                R
                  ? L &&
                    n.texSubImage2D(
                      t.TEXTURE_2D,
                      e,
                      0,
                      0,
                      y.width,
                      y.height,
                      T,
                      b,
                      y.data
                    )
                  : n.texImage2D(
                      t.TEXTURE_2D,
                      e,
                      A,
                      y.width,
                      y.height,
                      0,
                      T,
                      b,
                      y.data
                    );
            s.generateMipmaps = !1;
          } else
            R
              ? (C && n.texStorage2D(t.TEXTURE_2D, U, A, m.width, m.height),
                L &&
                  n.texSubImage2D(
                    t.TEXTURE_2D,
                    0,
                    0,
                    0,
                    m.width,
                    m.height,
                    T,
                    b,
                    m.data
                  ))
              : n.texImage2D(
                  t.TEXTURE_2D,
                  0,
                  A,
                  m.width,
                  m.height,
                  0,
                  T,
                  b,
                  m.data
                );
        else if (s.isCompressedTexture)
          if (s.isCompressedArrayTexture) {
            R &&
              C &&
              n.texStorage3D(
                t.TEXTURE_2D_ARRAY,
                U,
                A,
                w[0].width,
                w[0].height,
                m.depth
              );
            for (let e = 0, i = w.length; e < i; e++)
              (y = w[e]),
                s.format !== et
                  ? null !== T
                    ? R
                      ? L &&
                        n.compressedTexSubImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          0,
                          0,
                          0,
                          y.width,
                          y.height,
                          m.depth,
                          T,
                          y.data,
                          0,
                          0
                        )
                      : n.compressedTexImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          A,
                          y.width,
                          y.height,
                          m.depth,
                          0,
                          y.data,
                          0,
                          0
                        )
                    : console.warn(
                        'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                      )
                  : R
                    ? L &&
                      n.texSubImage3D(
                        t.TEXTURE_2D_ARRAY,
                        e,
                        0,
                        0,
                        0,
                        y.width,
                        y.height,
                        m.depth,
                        T,
                        b,
                        y.data
                      )
                    : n.texImage3D(
                        t.TEXTURE_2D_ARRAY,
                        e,
                        A,
                        y.width,
                        y.height,
                        m.depth,
                        0,
                        T,
                        b,
                        y.data
                      );
          } else {
            R &&
              C &&
              n.texStorage2D(t.TEXTURE_2D, U, A, w[0].width, w[0].height);
            for (let e = 0, i = w.length; e < i; e++)
              (y = w[e]),
                s.format !== et
                  ? null !== T
                    ? R
                      ? L &&
                        n.compressedTexSubImage2D(
                          t.TEXTURE_2D,
                          e,
                          0,
                          0,
                          y.width,
                          y.height,
                          T,
                          y.data
                        )
                      : n.compressedTexImage2D(
                          t.TEXTURE_2D,
                          e,
                          A,
                          y.width,
                          y.height,
                          0,
                          y.data
                        )
                    : console.warn(
                        'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                      )
                  : R
                    ? L &&
                      n.texSubImage2D(
                        t.TEXTURE_2D,
                        e,
                        0,
                        0,
                        y.width,
                        y.height,
                        T,
                        b,
                        y.data
                      )
                    : n.texImage2D(
                        t.TEXTURE_2D,
                        e,
                        A,
                        y.width,
                        y.height,
                        0,
                        T,
                        b,
                        y.data
                      );
          }
        else if (s.isDataArrayTexture)
          R
            ? (C &&
                n.texStorage3D(
                  t.TEXTURE_2D_ARRAY,
                  U,
                  A,
                  m.width,
                  m.height,
                  m.depth
                ),
              L &&
                n.texSubImage3D(
                  t.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  0,
                  m.width,
                  m.height,
                  m.depth,
                  T,
                  b,
                  m.data
                ))
            : n.texImage3D(
                t.TEXTURE_2D_ARRAY,
                0,
                A,
                m.width,
                m.height,
                m.depth,
                0,
                T,
                b,
                m.data
              );
        else if (s.isData3DTexture)
          R
            ? (C &&
                n.texStorage3D(t.TEXTURE_3D, U, A, m.width, m.height, m.depth),
              L &&
                n.texSubImage3D(
                  t.TEXTURE_3D,
                  0,
                  0,
                  0,
                  0,
                  m.width,
                  m.height,
                  m.depth,
                  T,
                  b,
                  m.data
                ))
            : n.texImage3D(
                t.TEXTURE_3D,
                0,
                A,
                m.width,
                m.height,
                m.depth,
                0,
                T,
                b,
                m.data
              );
        else if (s.isFramebufferTexture) {
          if (C)
            if (R) n.texStorage2D(t.TEXTURE_2D, U, A, m.width, m.height);
            else {
              let e = m.width,
                i = m.height;
              for (let r = 0; r < U; r++)
                n.texImage2D(t.TEXTURE_2D, r, A, e, i, 0, T, b, null),
                  (e >>= 1),
                  (i >>= 1);
            }
        } else if (w.length > 0 && E) {
          if (R && C) {
            const e = rt(w[0]);
            n.texStorage2D(t.TEXTURE_2D, U, A, e.width, e.height);
          }
          for (let e = 0, i = w.length; e < i; e++)
            (y = w[e]),
              R
                ? L && n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, T, b, y)
                : n.texImage2D(t.TEXTURE_2D, e, A, T, b, y);
          s.generateMipmaps = !1;
        } else if (R) {
          if (C) {
            const e = rt(m);
            n.texStorage2D(t.TEXTURE_2D, U, A, e.width, e.height);
          }
          L && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, T, b, m);
        } else n.texImage2D(t.TEXTURE_2D, 0, A, T, b, m);
        v(s, E) && x(c), (d.__version = u.version), s.onUpdate && s.onUpdate(s);
      }
      e.__version = s.version;
    }
    function N(e, r, s, o, c, h) {
      const u = a.convert(s.format, s.colorSpace),
        d = a.convert(s.type),
        p = M(s.internalFormat, u, d, s.colorSpace);
      if (!i.get(r).__hasExternalTextures) {
        const e = Math.max(1, r.width >> h),
          i = Math.max(1, r.height >> h);
        c === t.TEXTURE_3D || c === t.TEXTURE_2D_ARRAY
          ? n.texImage3D(c, h, p, e, i, r.depth, 0, u, d, null)
          : n.texImage2D(c, h, p, e, i, 0, u, d, null);
      }
      n.bindFramebuffer(t.FRAMEBUFFER, e),
        B(r)
          ? l.framebufferTexture2DMultisampleEXT(
              t.FRAMEBUFFER,
              o,
              c,
              i.get(s).__webglTexture,
              0,
              F(r)
            )
          : (c === t.TEXTURE_2D ||
              (c >= t.TEXTURE_CUBE_MAP_POSITIVE_X &&
                c <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
            t.framebufferTexture2D(
              t.FRAMEBUFFER,
              o,
              c,
              i.get(s).__webglTexture,
              h
            ),
        n.bindFramebuffer(t.FRAMEBUFFER, null);
    }
    function I(e, n, i) {
      if (
        (t.bindRenderbuffer(t.RENDERBUFFER, e),
        n.depthBuffer && !n.stencilBuffer)
      ) {
        let r = !0 === o ? t.DEPTH_COMPONENT24 : t.DEPTH_COMPONENT16;
        if (i || B(n)) {
          const e = n.depthTexture;
          e &&
            e.isDepthTexture &&
            (e.type === $
              ? (r = t.DEPTH_COMPONENT32F)
              : e.type === J && (r = t.DEPTH_COMPONENT24));
          const i = F(n);
          B(n)
            ? l.renderbufferStorageMultisampleEXT(
                t.RENDERBUFFER,
                i,
                r,
                n.width,
                n.height
              )
            : t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                i,
                r,
                n.width,
                n.height
              );
        } else t.renderbufferStorage(t.RENDERBUFFER, r, n.width, n.height);
        t.framebufferRenderbuffer(
          t.FRAMEBUFFER,
          t.DEPTH_ATTACHMENT,
          t.RENDERBUFFER,
          e
        );
      } else if (n.depthBuffer && n.stencilBuffer) {
        const r = F(n);
        i && !1 === B(n)
          ? t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              r,
              t.DEPTH24_STENCIL8,
              n.width,
              n.height
            )
          : B(n)
            ? l.renderbufferStorageMultisampleEXT(
                t.RENDERBUFFER,
                r,
                t.DEPTH24_STENCIL8,
                n.width,
                n.height
              )
            : t.renderbufferStorage(
                t.RENDERBUFFER,
                t.DEPTH_STENCIL,
                n.width,
                n.height
              ),
          t.framebufferRenderbuffer(
            t.FRAMEBUFFER,
            t.DEPTH_STENCIL_ATTACHMENT,
            t.RENDERBUFFER,
            e
          );
      } else {
        const e = n.textures;
        for (let r = 0; r < e.length; r++) {
          const s = e[r],
            o = a.convert(s.format, s.colorSpace),
            c = a.convert(s.type),
            h = M(s.internalFormat, o, c, s.colorSpace),
            u = F(n);
          i && !1 === B(n)
            ? t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                u,
                h,
                n.width,
                n.height
              )
            : B(n)
              ? l.renderbufferStorageMultisampleEXT(
                  t.RENDERBUFFER,
                  u,
                  h,
                  n.width,
                  n.height
                )
              : t.renderbufferStorage(t.RENDERBUFFER, h, n.width, n.height);
        }
      }
      t.bindRenderbuffer(t.RENDERBUFFER, null);
    }
    function O(e) {
      const r = i.get(e),
        a = !0 === e.isWebGLCubeRenderTarget;
      if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
        if (a)
          throw new Error(
            'target.depthTexture not supported in Cube render targets'
          );
        !(function (e, r) {
          if (r && r.isWebGLCubeRenderTarget)
            throw new Error(
              'Depth Texture with cube render targets is not supported'
            );
          if (
            (n.bindFramebuffer(t.FRAMEBUFFER, e),
            !r.depthTexture || !r.depthTexture.isDepthTexture)
          )
            throw new Error(
              'renderTarget.depthTexture must be an instance of THREE.DepthTexture'
            );
          (i.get(r.depthTexture).__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
            w(r.depthTexture, 0);
          const a = i.get(r.depthTexture).__webglTexture,
            s = F(r);
          if (r.depthTexture.format === nt)
            B(r)
              ? l.framebufferTexture2DMultisampleEXT(
                  t.FRAMEBUFFER,
                  t.DEPTH_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0,
                  s
                )
              : t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.DEPTH_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0
                );
          else {
            if (r.depthTexture.format !== it)
              throw new Error('Unknown depthTexture format');
            B(r)
              ? l.framebufferTexture2DMultisampleEXT(
                  t.FRAMEBUFFER,
                  t.DEPTH_STENCIL_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0,
                  s
                )
              : t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.DEPTH_STENCIL_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0
                );
          }
        })(r.__webglFramebuffer, e);
      } else if (a) {
        r.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++)
          n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]),
            (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
            I(r.__webglDepthbuffer[i], e, !1);
      } else
        n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
          (r.__webglDepthbuffer = t.createRenderbuffer()),
          I(r.__webglDepthbuffer, e, !1);
      n.bindFramebuffer(t.FRAMEBUFFER, null);
    }
    function F(t) {
      return Math.min(r.maxSamples, t.samples);
    }
    function B(t) {
      const n = i.get(t);
      return (
        o &&
        t.samples > 0 &&
        !0 === e.has('WEBGL_multisampled_render_to_texture') &&
        !1 !== n.__useRenderToTexture
      );
    }
    function Z(t, n) {
      const i = t.colorSpace,
        r = t.format,
        a = t.type;
      return (
        !0 === t.isCompressedTexture ||
          !0 === t.isVideoTexture ||
          t.format === Rt ||
          (i !== ut &&
            i !== ct &&
            (Qt.getTransfer(i) === mt
              ? !1 === o
                ? !0 === e.has('EXT_sRGB') && r === et
                  ? ((t.format = Rt),
                    (t.minFilter = X),
                    (t.generateMipmaps = !1))
                  : (n = ie.sRGBToLinear(n))
                : (r === et && a === Y) ||
                  console.warn(
                    'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.'
                  )
              : console.error(
                  'THREE.WebGLTextures: Unsupported texture color space:',
                  i
                ))),
        n
      );
    }
    function rt(t) {
      return (
        'undefined' != typeof HTMLImageElement && t instanceof HTMLImageElement
          ? ((h.width = t.naturalWidth || t.width),
            (h.height = t.naturalHeight || t.height))
          : 'undefined' != typeof VideoFrame && t instanceof VideoFrame
            ? ((h.width = t.displayWidth), (h.height = t.displayHeight))
            : ((h.width = t.width), (h.height = t.height)),
        h
      );
    }
    (this.allocateTextureUnit = function () {
      const t = A;
      return (
        t >= r.maxTextures &&
          console.warn(
            'THREE.WebGLTextures: Trying to use ' +
              t +
              ' texture units while this GPU supports only ' +
              r.maxTextures
          ),
        (A += 1),
        t
      );
    }),
      (this.resetTextureUnits = function () {
        A = 0;
      }),
      (this.setTexture2D = w),
      (this.setTexture2DArray = function (e, r) {
        const a = i.get(e);
        e.version > 0 && a.__version !== e.version
          ? D(a, e, r)
          : n.bindTexture(t.TEXTURE_2D_ARRAY, a.__webglTexture, t.TEXTURE0 + r);
      }),
      (this.setTexture3D = function (e, r) {
        const a = i.get(e);
        e.version > 0 && a.__version !== e.version
          ? D(a, e, r)
          : n.bindTexture(t.TEXTURE_3D, a.__webglTexture, t.TEXTURE0 + r);
      }),
      (this.setTextureCube = function (e, s) {
        const l = i.get(e);
        e.version > 0 && l.__version !== e.version
          ? (function (e, s, l) {
              if (6 !== s.image.length) return;
              const c = U(e, s),
                h = s.source;
              n.bindTexture(
                t.TEXTURE_CUBE_MAP,
                e.__webglTexture,
                t.TEXTURE0 + l
              );
              const u = i.get(h);
              if (h.version !== u.__version || !0 === c) {
                n.activeTexture(t.TEXTURE0 + l);
                const e = Qt.getPrimaries(Qt.workingColorSpace),
                  i =
                    s.colorSpace === ct ? null : Qt.getPrimaries(s.colorSpace),
                  d =
                    s.colorSpace === ct || e === i
                      ? t.NONE
                      : t.BROWSER_DEFAULT_WEBGL;
                t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s.flipY),
                  t.pixelStorei(
                    t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    s.premultiplyAlpha
                  ),
                  t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment),
                  t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
                const p =
                    s.isCompressedTexture || s.image[0].isCompressedTexture,
                  f = s.image[0] && s.image[0].isDataTexture,
                  m = [];
                for (let t = 0; t < 6; t++)
                  (m[t] =
                    p || f
                      ? f
                        ? s.image[t].image
                        : s.image[t]
                      : g(s.image[t], !1, !0, r.maxCubemapSize)),
                    (m[t] = Z(s, m[t]));
                const E = m[0],
                  T = _(E) || o,
                  y = a.convert(s.format, s.colorSpace),
                  b = a.convert(s.type),
                  A = M(s.internalFormat, y, b, s.colorSpace),
                  w = o && !0 !== s.isVideoTexture,
                  R = void 0 === u.__version || !0 === c,
                  C = h.dataReady;
                let L,
                  U = S(s, E, T);
                if ((P(t.TEXTURE_CUBE_MAP, s, T), p)) {
                  w &&
                    R &&
                    n.texStorage2D(t.TEXTURE_CUBE_MAP, U, A, E.width, E.height);
                  for (let e = 0; e < 6; e++) {
                    L = m[e].mipmaps;
                    for (let i = 0; i < L.length; i++) {
                      const r = L[i];
                      s.format !== et
                        ? null !== y
                          ? w
                            ? C &&
                              n.compressedTexSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                i,
                                0,
                                0,
                                r.width,
                                r.height,
                                y,
                                r.data
                              )
                            : n.compressedTexImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                i,
                                A,
                                r.width,
                                r.height,
                                0,
                                r.data
                              )
                          : console.warn(
                              'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'
                            )
                        : w
                          ? C &&
                            n.texSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i,
                              0,
                              0,
                              r.width,
                              r.height,
                              y,
                              b,
                              r.data
                            )
                          : n.texImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i,
                              A,
                              r.width,
                              r.height,
                              0,
                              y,
                              b,
                              r.data
                            );
                    }
                  }
                } else {
                  if (((L = s.mipmaps), w && R)) {
                    L.length > 0 && U++;
                    const e = rt(m[0]);
                    n.texStorage2D(t.TEXTURE_CUBE_MAP, U, A, e.width, e.height);
                  }
                  for (let e = 0; e < 6; e++)
                    if (f) {
                      w
                        ? C &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            0,
                            0,
                            m[e].width,
                            m[e].height,
                            y,
                            b,
                            m[e].data
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            A,
                            m[e].width,
                            m[e].height,
                            0,
                            y,
                            b,
                            m[e].data
                          );
                      for (let i = 0; i < L.length; i++) {
                        const r = L[i].image[e].image;
                        w
                          ? C &&
                            n.texSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              0,
                              0,
                              r.width,
                              r.height,
                              y,
                              b,
                              r.data
                            )
                          : n.texImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              A,
                              r.width,
                              r.height,
                              0,
                              y,
                              b,
                              r.data
                            );
                      }
                    } else {
                      w
                        ? C &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            0,
                            0,
                            y,
                            b,
                            m[e]
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            A,
                            y,
                            b,
                            m[e]
                          );
                      for (let i = 0; i < L.length; i++) {
                        const r = L[i];
                        w
                          ? C &&
                            n.texSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              0,
                              0,
                              y,
                              b,
                              r.image[e]
                            )
                          : n.texImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              A,
                              y,
                              b,
                              r.image[e]
                            );
                      }
                    }
                }
                v(s, T) && x(t.TEXTURE_CUBE_MAP),
                  (u.__version = h.version),
                  s.onUpdate && s.onUpdate(s);
              }
              e.__version = s.version;
            })(l, e, s)
          : n.bindTexture(t.TEXTURE_CUBE_MAP, l.__webglTexture, t.TEXTURE0 + s);
      }),
      (this.rebindTextures = function (e, n, r) {
        const a = i.get(e);
        void 0 !== n &&
          N(
            a.__webglFramebuffer,
            e,
            e.texture,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_2D,
            0
          ),
          void 0 !== r && O(e);
      }),
      (this.setupRenderTarget = function (e) {
        const l = e.texture,
          c = i.get(e),
          h = i.get(l);
        e.addEventListener('dispose', y);
        const u = e.textures,
          d = !0 === e.isWebGLCubeRenderTarget,
          p = u.length > 1,
          f = _(e) || o;
        if (
          (p ||
            (void 0 === h.__webglTexture &&
              (h.__webglTexture = t.createTexture()),
            (h.__version = l.version),
            s.memory.textures++),
          d)
        ) {
          c.__webglFramebuffer = [];
          for (let e = 0; e < 6; e++)
            if (o && l.mipmaps && l.mipmaps.length > 0) {
              c.__webglFramebuffer[e] = [];
              for (let n = 0; n < l.mipmaps.length; n++)
                c.__webglFramebuffer[e][n] = t.createFramebuffer();
            } else c.__webglFramebuffer[e] = t.createFramebuffer();
        } else {
          if (o && l.mipmaps && l.mipmaps.length > 0) {
            c.__webglFramebuffer = [];
            for (let e = 0; e < l.mipmaps.length; e++)
              c.__webglFramebuffer[e] = t.createFramebuffer();
          } else c.__webglFramebuffer = t.createFramebuffer();
          if (p)
            if (r.drawBuffers)
              for (let e = 0, n = u.length; e < n; e++) {
                const n = i.get(u[e]);
                void 0 === n.__webglTexture &&
                  ((n.__webglTexture = t.createTexture()), s.memory.textures++);
              }
            else
              console.warn(
                'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.'
              );
          if (o && e.samples > 0 && !1 === B(e)) {
            (c.__webglMultisampledFramebuffer = t.createFramebuffer()),
              (c.__webglColorRenderbuffer = []),
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                c.__webglMultisampledFramebuffer
              );
            for (let n = 0; n < u.length; n++) {
              const i = u[n];
              (c.__webglColorRenderbuffer[n] = t.createRenderbuffer()),
                t.bindRenderbuffer(
                  t.RENDERBUFFER,
                  c.__webglColorRenderbuffer[n]
                );
              const r = a.convert(i.format, i.colorSpace),
                s = a.convert(i.type),
                o = M(
                  i.internalFormat,
                  r,
                  s,
                  i.colorSpace,
                  !0 === e.isXRRenderTarget
                ),
                l = F(e);
              t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                l,
                o,
                e.width,
                e.height
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + n,
                  t.RENDERBUFFER,
                  c.__webglColorRenderbuffer[n]
                );
            }
            t.bindRenderbuffer(t.RENDERBUFFER, null),
              e.depthBuffer &&
                ((c.__webglDepthRenderbuffer = t.createRenderbuffer()),
                I(c.__webglDepthRenderbuffer, e, !0)),
              n.bindFramebuffer(t.FRAMEBUFFER, null);
          }
        }
        if (d) {
          n.bindTexture(t.TEXTURE_CUBE_MAP, h.__webglTexture),
            P(t.TEXTURE_CUBE_MAP, l, f);
          for (let n = 0; n < 6; n++)
            if (o && l.mipmaps && l.mipmaps.length > 0)
              for (let i = 0; i < l.mipmaps.length; i++)
                N(
                  c.__webglFramebuffer[n][i],
                  e,
                  l,
                  t.COLOR_ATTACHMENT0,
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                  i
                );
            else
              N(
                c.__webglFramebuffer[n],
                e,
                l,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                0
              );
          v(l, f) && x(t.TEXTURE_CUBE_MAP), n.unbindTexture();
        } else if (p) {
          for (let r = 0, a = u.length; r < a; r++) {
            const a = u[r],
              s = i.get(a);
            n.bindTexture(t.TEXTURE_2D, s.__webglTexture),
              P(t.TEXTURE_2D, a, f),
              N(
                c.__webglFramebuffer,
                e,
                a,
                t.COLOR_ATTACHMENT0 + r,
                t.TEXTURE_2D,
                0
              ),
              v(a, f) && x(t.TEXTURE_2D);
          }
          n.unbindTexture();
        } else {
          let i = t.TEXTURE_2D;
          if (
            ((e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
              (o
                ? (i = e.isWebGL3DRenderTarget
                    ? t.TEXTURE_3D
                    : t.TEXTURE_2D_ARRAY)
                : console.error(
                    'THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.'
                  )),
            n.bindTexture(i, h.__webglTexture),
            P(i, l, f),
            o && l.mipmaps && l.mipmaps.length > 0)
          )
            for (let n = 0; n < l.mipmaps.length; n++)
              N(c.__webglFramebuffer[n], e, l, t.COLOR_ATTACHMENT0, i, n);
          else N(c.__webglFramebuffer, e, l, t.COLOR_ATTACHMENT0, i, 0);
          v(l, f) && x(i), n.unbindTexture();
        }
        e.depthBuffer && O(e);
      }),
      (this.updateRenderTargetMipmap = function (e) {
        const r = _(e) || o,
          a = e.textures;
        for (let s = 0, o = a.length; s < o; s++) {
          const o = a[s];
          if (v(o, r)) {
            const r = e.isWebGLCubeRenderTarget
                ? t.TEXTURE_CUBE_MAP
                : t.TEXTURE_2D,
              a = i.get(o).__webglTexture;
            n.bindTexture(r, a), x(r), n.unbindTexture();
          }
        }
      }),
      (this.updateMultisampleRenderTarget = function (e) {
        if (o && e.samples > 0 && !1 === B(e)) {
          const r = e.textures,
            a = e.width,
            s = e.height;
          let o = t.COLOR_BUFFER_BIT;
          const l = [],
            h = e.stencilBuffer
              ? t.DEPTH_STENCIL_ATTACHMENT
              : t.DEPTH_ATTACHMENT,
            u = i.get(e),
            d = r.length > 1;
          if (d)
            for (let e = 0; e < r.length; e++)
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                u.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  null
                ),
                n.bindFramebuffer(t.FRAMEBUFFER, u.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  null,
                  0
                );
          n.bindFramebuffer(
            t.READ_FRAMEBUFFER,
            u.__webglMultisampledFramebuffer
          ),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
          for (let n = 0; n < r.length; n++) {
            l.push(t.COLOR_ATTACHMENT0 + n), e.depthBuffer && l.push(h);
            const p = void 0 !== u.__ignoreDepthValues && u.__ignoreDepthValues;
            if (
              (!1 === p &&
                (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT),
                e.stencilBuffer && (o |= t.STENCIL_BUFFER_BIT)),
              d &&
                t.framebufferRenderbuffer(
                  t.READ_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0,
                  t.RENDERBUFFER,
                  u.__webglColorRenderbuffer[n]
                ),
              !0 === p &&
                (t.invalidateFramebuffer(t.READ_FRAMEBUFFER, [h]),
                t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [h])),
              d)
            ) {
              const e = i.get(r[n]).__webglTexture;
              t.framebufferTexture2D(
                t.DRAW_FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_2D,
                e,
                0
              );
            }
            t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, t.NEAREST),
              c && t.invalidateFramebuffer(t.READ_FRAMEBUFFER, l);
          }
          if (
            (n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            d)
          )
            for (let e = 0; e < r.length; e++) {
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                u.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  u.__webglColorRenderbuffer[e]
                );
              const a = i.get(r[e]).__webglTexture;
              n.bindFramebuffer(t.FRAMEBUFFER, u.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  a,
                  0
                );
            }
          n.bindFramebuffer(
            t.DRAW_FRAMEBUFFER,
            u.__webglMultisampledFramebuffer
          );
        }
      }),
      (this.setupDepthRenderbuffer = O),
      (this.setupFrameBufferTexture = N),
      (this.useMultisampledRTT = B);
  }
  function vs(t, e, n) {
    const i = n.isWebGL2;
    return {
      convert: function (n, r = '') {
        let a;
        const s = Qt.getTransfer(r);
        if (n === Y) return t.UNSIGNED_BYTE;
        if (1017 === n) return t.UNSIGNED_SHORT_4_4_4_4;
        if (1018 === n) return t.UNSIGNED_SHORT_5_5_5_1;
        if (1010 === n) return t.BYTE;
        if (1011 === n) return t.SHORT;
        if (n === K) return t.UNSIGNED_SHORT;
        if (n === Z) return t.INT;
        if (n === J) return t.UNSIGNED_INT;
        if (n === $) return t.FLOAT;
        if (n === Q)
          return i
            ? t.HALF_FLOAT
            : ((a = e.get('OES_texture_half_float')),
              null !== a ? a.HALF_FLOAT_OES : null);
        if (1021 === n) return t.ALPHA;
        if (n === et) return t.RGBA;
        if (1024 === n) return t.LUMINANCE;
        if (1025 === n) return t.LUMINANCE_ALPHA;
        if (n === nt) return t.DEPTH_COMPONENT;
        if (n === it) return t.DEPTH_STENCIL;
        if (n === Rt)
          return (a = e.get('EXT_sRGB')), null !== a ? a.SRGB_ALPHA_EXT : null;
        if (1028 === n) return t.RED;
        if (1029 === n) return t.RED_INTEGER;
        if (1030 === n) return t.RG;
        if (1031 === n) return t.RG_INTEGER;
        if (1033 === n) return t.RGBA_INTEGER;
        if (n === rt || n === at || n === st || n === ot)
          if (s === mt) {
            if (((a = e.get('WEBGL_compressed_texture_s3tc_srgb')), null === a))
              return null;
            if (n === rt) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (n === at) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (n === st) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (n === ot) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else {
            if (((a = e.get('WEBGL_compressed_texture_s3tc')), null === a))
              return null;
            if (n === rt) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (n === at) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (n === st) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (n === ot) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
          if (((a = e.get('WEBGL_compressed_texture_pvrtc')), null === a))
            return null;
          if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (36196 === n)
          return (
            (a = e.get('WEBGL_compressed_texture_etc1')),
            null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null
          );
        if (37492 === n || 37496 === n) {
          if (((a = e.get('WEBGL_compressed_texture_etc')), null === a))
            return null;
          if (37492 === n)
            return s === mt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
          if (37496 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
              : a.COMPRESSED_RGBA8_ETC2_EAC;
        }
        if (
          37808 === n ||
          37809 === n ||
          37810 === n ||
          37811 === n ||
          37812 === n ||
          37813 === n ||
          37814 === n ||
          37815 === n ||
          37816 === n ||
          37817 === n ||
          37818 === n ||
          37819 === n ||
          37820 === n ||
          37821 === n
        ) {
          if (((a = e.get('WEBGL_compressed_texture_astc')), null === a))
            return null;
          if (37808 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
              : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (37809 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
              : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (37810 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
              : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (37811 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
              : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (37812 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
              : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (37813 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
              : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (37814 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
              : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (37815 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
              : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (37816 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
              : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (37817 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
              : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (37818 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
              : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (37819 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
              : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (37820 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
              : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (37821 === n)
            return s === mt
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
              : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
        }
        if (n === lt || 36494 === n || 36495 === n) {
          if (((a = e.get('EXT_texture_compression_bptc')), null === a))
            return null;
          if (n === lt)
            return s === mt
              ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
              : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
          if (36494 === n) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
          if (36495 === n) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
        }
        if (36283 === n || 36284 === n || 36285 === n || 36286 === n) {
          if (((a = e.get('EXT_texture_compression_rgtc')), null === a))
            return null;
          if (n === lt) return a.COMPRESSED_RED_RGTC1_EXT;
          if (36284 === n) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
          if (36285 === n) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
          if (36286 === n) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        }
        return n === tt
          ? i
            ? t.UNSIGNED_INT_24_8
            : ((a = e.get('WEBGL_depth_texture')),
              null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null)
          : void 0 !== t[n]
            ? t[n]
            : null;
      },
    };
  }
  class xs extends Ci {
    constructor(t = []) {
      super(), (this.isArrayCamera = !0), (this.cameras = t);
    }
  }
  class Ms extends xn {
    constructor() {
      super(), (this.isGroup = !0), (this.type = 'Group');
    }
  }
  const Ss = { type: 'move' };
  class Es {
    constructor() {
      (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
      return (
        null === this._hand &&
          ((this._hand = new Ms()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        null === this._targetRay &&
          ((this._targetRay = new Ms()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new me()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new me())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        null === this._grip &&
          ((this._grip = new Ms()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new me()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new me())),
        this._grip
      );
    }
    dispatchEvent(t) {
      return (
        null !== this._targetRay && this._targetRay.dispatchEvent(t),
        null !== this._grip && this._grip.dispatchEvent(t),
        null !== this._hand && this._hand.dispatchEvent(t),
        this
      );
    }
    connect(t) {
      if (t && t.hand) {
        const e = this._hand;
        if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
      }
      return this.dispatchEvent({ type: 'connected', data: t }), this;
    }
    disconnect(t) {
      return (
        this.dispatchEvent({ type: 'disconnected', data: t }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
      );
    }
    update(t, e, n) {
      let i = null,
        r = null,
        a = null;
      const s = this._targetRay,
        o = this._grip,
        l = this._hand;
      if (t && 'visible-blurred' !== e.session.visibilityState) {
        if (l && t.hand) {
          a = !0;
          for (const i of t.hand.values()) {
            const t = e.getJointPose(i, n),
              r = this._getHandJoint(l, i);
            null !== t &&
              (r.matrix.fromArray(t.transform.matrix),
              r.matrix.decompose(r.position, r.rotation, r.scale),
              (r.matrixWorldNeedsUpdate = !0),
              (r.jointRadius = t.radius)),
              (r.visible = null !== t);
          }
          const i = l.joints['index-finger-tip'],
            r = l.joints['thumb-tip'],
            s = i.position.distanceTo(r.position),
            o = 0.02,
            c = 0.005;
          l.inputState.pinching && s > o + c
            ? ((l.inputState.pinching = !1),
              this.dispatchEvent({
                type: 'pinchend',
                handedness: t.handedness,
                target: this,
              }))
            : !l.inputState.pinching &&
              s <= o - c &&
              ((l.inputState.pinching = !0),
              this.dispatchEvent({
                type: 'pinchstart',
                handedness: t.handedness,
                target: this,
              }));
        } else
          null !== o &&
            t.gripSpace &&
            ((r = e.getPose(t.gripSpace, n)),
            null !== r &&
              (o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              (o.matrixWorldNeedsUpdate = !0),
              r.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(r.linearVelocity))
                : (o.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(r.angularVelocity))
                : (o.hasAngularVelocity = !1)));
        null !== s &&
          ((i = e.getPose(t.targetRaySpace, n)),
          null === i && null !== r && (i = r),
          null !== i &&
            (s.matrix.fromArray(i.transform.matrix),
            s.matrix.decompose(s.position, s.rotation, s.scale),
            (s.matrixWorldNeedsUpdate = !0),
            i.linearVelocity
              ? ((s.hasLinearVelocity = !0),
                s.linearVelocity.copy(i.linearVelocity))
              : (s.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((s.hasAngularVelocity = !0),
                s.angularVelocity.copy(i.angularVelocity))
              : (s.hasAngularVelocity = !1),
            this.dispatchEvent(Ss)));
      }
      return (
        null !== s && (s.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== a),
        this
      );
    }
    _getHandJoint(t, e) {
      if (void 0 === t.joints[e.jointName]) {
        const n = new Ms();
        (n.matrixAutoUpdate = !1),
          (n.visible = !1),
          (t.joints[e.jointName] = n),
          t.add(n);
      }
      return t.joints[e.jointName];
    }
  }
  class Ts {
    constructor() {
      (this.texture = null),
        (this.mesh = null),
        (this.depthNear = 0),
        (this.depthFar = 0);
    }
    init(t, e, n) {
      if (null === this.texture) {
        const i = new le();
        (t.properties.get(i).__webglTexture = e.texture),
          (e.depthNear == n.depthNear && e.depthFar == n.depthFar) ||
            ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
          (this.texture = i);
      }
    }
    render(t, e) {
      if (null !== this.texture) {
        if (null === this.mesh) {
          const t = e.cameras[0].viewport,
            n = new yi({
              extensions: { fragDepth: !0 },
              vertexShader:
                '\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}',
              fragmentShader:
                '\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n\tvec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n\tif ( coord.x >= 1.0 ) {\n\n\t\tgl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n\t} else {\n\n\t\tgl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n\t}\n\n}',
              uniforms: {
                depthColor: { value: this.texture },
                depthWidth: { value: t.z },
                depthHeight: { value: t.w },
              },
            });
          this.mesh = new _i(new ki(20, 20), n);
        }
        t.render(this.mesh, e);
      }
    }
    reset() {
      (this.texture = null), (this.mesh = null);
    }
  }
  class ys extends Pt {
    constructor(t, e) {
      super();
      const n = this;
      let i = null,
        r = 1,
        a = null,
        s = 'local-floor',
        o = 1,
        l = null,
        c = null,
        h = null,
        u = null,
        d = null,
        p = null;
      const f = new Ts(),
        m = e.getContextAttributes();
      let g = null,
        _ = null;
      const v = [],
        x = [],
        M = new Vt();
      let S = null;
      const E = new Ci();
      E.layers.enable(1), (E.viewport = new ce());
      const T = new Ci();
      T.layers.enable(2), (T.viewport = new ce());
      const y = [E, T],
        b = new xs();
      b.layers.enable(1), b.layers.enable(2);
      let A = null,
        w = null;
      function R(t) {
        const e = x.indexOf(t.inputSource);
        if (-1 === e) return;
        const n = v[e];
        void 0 !== n &&
          (n.update(t.inputSource, t.frame, l || a),
          n.dispatchEvent({ type: t.type, data: t.inputSource }));
      }
      function C() {
        i.removeEventListener('select', R),
          i.removeEventListener('selectstart', R),
          i.removeEventListener('selectend', R),
          i.removeEventListener('squeeze', R),
          i.removeEventListener('squeezestart', R),
          i.removeEventListener('squeezeend', R),
          i.removeEventListener('end', C),
          i.removeEventListener('inputsourceschange', L);
        for (let t = 0; t < v.length; t++) {
          const e = x[t];
          null !== e && ((x[t] = null), v[t].disconnect(e));
        }
        (A = null),
          (w = null),
          f.reset(),
          t.setRenderTarget(g),
          (d = null),
          (u = null),
          (h = null),
          (i = null),
          (_ = null),
          I.stop(),
          (n.isPresenting = !1),
          t.setPixelRatio(S),
          t.setSize(M.width, M.height, !1),
          n.dispatchEvent({ type: 'sessionend' });
      }
      function L(t) {
        for (let e = 0; e < t.removed.length; e++) {
          const n = t.removed[e],
            i = x.indexOf(n);
          i >= 0 && ((x[i] = null), v[i].disconnect(n));
        }
        for (let e = 0; e < t.added.length; e++) {
          const n = t.added[e];
          let i = x.indexOf(n);
          if (-1 === i) {
            for (let t = 0; t < v.length; t++) {
              if (t >= x.length) {
                x.push(n), (i = t);
                break;
              }
              if (null === x[t]) {
                (x[t] = n), (i = t);
                break;
              }
            }
            if (-1 === i) break;
          }
          const r = v[i];
          r && r.connect(n);
        }
      }
      (this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (t) {
          let e = v[t];
          return (
            void 0 === e && ((e = new Es()), (v[t] = e)), e.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (t) {
          let e = v[t];
          return void 0 === e && ((e = new Es()), (v[t] = e)), e.getGripSpace();
        }),
        (this.getHand = function (t) {
          let e = v[t];
          return void 0 === e && ((e = new Es()), (v[t] = e)), e.getHandSpace();
        }),
        (this.setFramebufferScaleFactor = function (t) {
          (r = t),
            !0 === n.isPresenting &&
              console.warn(
                'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
              );
        }),
        (this.setReferenceSpaceType = function (t) {
          (s = t),
            !0 === n.isPresenting &&
              console.warn(
                'THREE.WebXRManager: Cannot change reference space type while presenting.'
              );
        }),
        (this.getReferenceSpace = function () {
          return l || a;
        }),
        (this.setReferenceSpace = function (t) {
          l = t;
        }),
        (this.getBaseLayer = function () {
          return null !== u ? u : d;
        }),
        (this.getBinding = function () {
          return h;
        }),
        (this.getFrame = function () {
          return p;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = async function (c) {
          if (((i = c), null !== i)) {
            if (
              ((g = t.getRenderTarget()),
              i.addEventListener('select', R),
              i.addEventListener('selectstart', R),
              i.addEventListener('selectend', R),
              i.addEventListener('squeeze', R),
              i.addEventListener('squeezestart', R),
              i.addEventListener('squeezeend', R),
              i.addEventListener('end', C),
              i.addEventListener('inputsourceschange', L),
              !0 !== m.xrCompatible && (await e.makeXRCompatible()),
              (S = t.getPixelRatio()),
              t.getSize(M),
              void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2)
            ) {
              const n = {
                antialias: void 0 !== i.renderState.layers || m.antialias,
                alpha: !0,
                depth: m.depth,
                stencil: m.stencil,
                framebufferScaleFactor: r,
              };
              (d = new XRWebGLLayer(i, e, n)),
                i.updateRenderState({ baseLayer: d }),
                t.setPixelRatio(1),
                t.setSize(d.framebufferWidth, d.framebufferHeight, !1),
                (_ = new ue(d.framebufferWidth, d.framebufferHeight, {
                  format: et,
                  type: Y,
                  colorSpace: t.outputColorSpace,
                  stencilBuffer: m.stencil,
                }));
            } else {
              let n = null,
                a = null,
                s = null;
              m.depth &&
                ((s = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
                (n = m.stencil ? it : nt),
                (a = m.stencil ? tt : J));
              const o = {
                colorFormat: e.RGBA8,
                depthFormat: s,
                scaleFactor: r,
              };
              (h = new XRWebGLBinding(i, e)),
                (u = h.createProjectionLayer(o)),
                i.updateRenderState({ layers: [u] }),
                t.setPixelRatio(1),
                t.setSize(u.textureWidth, u.textureHeight, !1),
                (_ = new ue(u.textureWidth, u.textureHeight, {
                  format: et,
                  type: Y,
                  depthTexture: new Rr(
                    u.textureWidth,
                    u.textureHeight,
                    a,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    n
                  ),
                  stencilBuffer: m.stencil,
                  colorSpace: t.outputColorSpace,
                  samples: m.antialias ? 4 : 0,
                }));
              t.properties.get(_).__ignoreDepthValues = u.ignoreDepthValues;
            }
            (_.isXRRenderTarget = !0),
              this.setFoveation(o),
              (l = null),
              (a = await i.requestReferenceSpace(s)),
              I.setContext(i),
              I.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: 'sessionstart' });
          }
        }),
        (this.getEnvironmentBlendMode = function () {
          if (null !== i) return i.environmentBlendMode;
        });
      const P = new me(),
        U = new me();
      function D(t, e) {
        null === e
          ? t.matrixWorld.copy(t.matrix)
          : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
          t.matrixWorldInverse.copy(t.matrixWorld).invert();
      }
      (this.updateCamera = function (t) {
        if (null === i) return;
        null !== f.texture && ((t.near = f.depthNear), (t.far = f.depthFar)),
          (b.near = T.near = E.near = t.near),
          (b.far = T.far = E.far = t.far),
          (A === b.near && w === b.far) ||
            (i.updateRenderState({ depthNear: b.near, depthFar: b.far }),
            (A = b.near),
            (w = b.far),
            (E.near = A),
            (E.far = w),
            (T.near = A),
            (T.far = w),
            E.updateProjectionMatrix(),
            T.updateProjectionMatrix(),
            t.updateProjectionMatrix());
        const e = t.parent,
          n = b.cameras;
        D(b, e);
        for (let t = 0; t < n.length; t++) D(n[t], e);
        2 === n.length
          ? (function (t, e, n) {
              P.setFromMatrixPosition(e.matrixWorld),
                U.setFromMatrixPosition(n.matrixWorld);
              const i = P.distanceTo(U),
                r = e.projectionMatrix.elements,
                a = n.projectionMatrix.elements,
                s = r[14] / (r[10] - 1),
                o = r[14] / (r[10] + 1),
                l = (r[9] + 1) / r[5],
                c = (r[9] - 1) / r[5],
                h = (r[8] - 1) / r[0],
                u = (a[8] + 1) / a[0],
                d = s * h,
                p = s * u,
                f = i / (-h + u),
                m = f * -h;
              e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                t.translateX(m),
                t.translateZ(f),
                t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                t.matrixWorldInverse.copy(t.matrixWorld).invert();
              const g = s + f,
                _ = o + f,
                v = d - m,
                x = p + (i - m),
                M = ((l * o) / _) * g,
                S = ((c * o) / _) * g;
              t.projectionMatrix.makePerspective(v, x, M, S, g, _),
                t.projectionMatrixInverse.copy(t.projectionMatrix).invert();
            })(b, E, T)
          : b.projectionMatrix.copy(E.projectionMatrix),
          (function (t, e, n) {
            null === n
              ? t.matrix.copy(e.matrixWorld)
              : (t.matrix.copy(n.matrixWorld),
                t.matrix.invert(),
                t.matrix.multiply(e.matrixWorld));
            t.matrix.decompose(t.position, t.quaternion, t.scale),
              t.updateMatrixWorld(!0),
              t.projectionMatrix.copy(e.projectionMatrix),
              t.projectionMatrixInverse.copy(e.projectionMatrixInverse),
              t.isPerspectiveCamera &&
                ((t.fov =
                  2 * Nt * Math.atan(1 / t.projectionMatrix.elements[5])),
                (t.zoom = 1));
          })(t, b, e);
      }),
        (this.getCamera = function () {
          return b;
        }),
        (this.getFoveation = function () {
          if (null !== u || null !== d) return o;
        }),
        (this.setFoveation = function (t) {
          (o = t),
            null !== u && (u.fixedFoveation = t),
            null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t);
        }),
        (this.hasDepthSensing = function () {
          return null !== f.texture;
        });
      let N = null;
      const I = new Gi();
      I.setAnimationLoop(function (e, r) {
        if (((c = r.getViewerPose(l || a)), (p = r), null !== c)) {
          const e = c.views;
          null !== d &&
            (t.setRenderTargetFramebuffer(_, d.framebuffer),
            t.setRenderTarget(_));
          let n = !1;
          e.length !== b.cameras.length && ((b.cameras.length = 0), (n = !0));
          for (let i = 0; i < e.length; i++) {
            const r = e[i];
            let a = null;
            if (null !== d) a = d.getViewport(r);
            else {
              const e = h.getViewSubImage(u, r);
              (a = e.viewport),
                0 === i &&
                  (t.setRenderTargetTextures(
                    _,
                    e.colorTexture,
                    u.ignoreDepthValues ? void 0 : e.depthStencilTexture
                  ),
                  t.setRenderTarget(_));
            }
            let s = y[i];
            void 0 === s &&
              ((s = new Ci()),
              s.layers.enable(i),
              (s.viewport = new ce()),
              (y[i] = s)),
              s.matrix.fromArray(r.transform.matrix),
              s.matrix.decompose(s.position, s.quaternion, s.scale),
              s.projectionMatrix.fromArray(r.projectionMatrix),
              s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),
              s.viewport.set(a.x, a.y, a.width, a.height),
              0 === i &&
                (b.matrix.copy(s.matrix),
                b.matrix.decompose(b.position, b.quaternion, b.scale)),
              !0 === n && b.cameras.push(s);
          }
          const r = i.enabledFeatures;
          if (r && r.includes('depth-sensing')) {
            const n = h.getDepthInformation(e[0]);
            n && n.isValid && n.texture && f.init(t, n, i.renderState);
          }
        }
        for (let t = 0; t < v.length; t++) {
          const e = x[t],
            n = v[t];
          null !== e && void 0 !== n && n.update(e, r, l || a);
        }
        f.render(t, b),
          N && N(e, r),
          r.detectedPlanes &&
            n.dispatchEvent({ type: 'planesdetected', data: r }),
          (p = null);
      }),
        (this.setAnimationLoop = function (t) {
          N = t;
        }),
        (this.dispose = function () {});
    }
  }
  const bs = new en(),
    As = new Xe();
  function ws(t, e) {
    function n(t, e) {
      !0 === t.matrixAutoUpdate && t.updateMatrix(), e.value.copy(t.matrix);
    }
    function i(i, r) {
      (i.opacity.value = r.opacity),
        r.color && i.diffuse.value.copy(r.color),
        r.emissive &&
          i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),
        r.map && ((i.map.value = r.map), n(r.map, i.mapTransform)),
        r.alphaMap &&
          ((i.alphaMap.value = r.alphaMap), n(r.alphaMap, i.alphaMapTransform)),
        r.bumpMap &&
          ((i.bumpMap.value = r.bumpMap),
          n(r.bumpMap, i.bumpMapTransform),
          (i.bumpScale.value = r.bumpScale),
          r.side === a && (i.bumpScale.value *= -1)),
        r.normalMap &&
          ((i.normalMap.value = r.normalMap),
          n(r.normalMap, i.normalMapTransform),
          i.normalScale.value.copy(r.normalScale),
          r.side === a && i.normalScale.value.negate()),
        r.displacementMap &&
          ((i.displacementMap.value = r.displacementMap),
          n(r.displacementMap, i.displacementMapTransform),
          (i.displacementScale.value = r.displacementScale),
          (i.displacementBias.value = r.displacementBias)),
        r.emissiveMap &&
          ((i.emissiveMap.value = r.emissiveMap),
          n(r.emissiveMap, i.emissiveMapTransform)),
        r.specularMap &&
          ((i.specularMap.value = r.specularMap),
          n(r.specularMap, i.specularMapTransform)),
        r.alphaTest > 0 && (i.alphaTest.value = r.alphaTest);
      const s = e.get(r),
        o = s.envMap,
        l = s.envMapRotation;
      if (
        (o &&
          ((i.envMap.value = o),
          bs.copy(l),
          (bs.x *= -1),
          (bs.y *= -1),
          (bs.z *= -1),
          o.isCubeTexture &&
            !1 === o.isRenderTargetTexture &&
            ((bs.y *= -1), (bs.z *= -1)),
          i.envMapRotation.value.setFromMatrix4(As.makeRotationFromEuler(bs)),
          (i.flipEnvMap.value =
            o.isCubeTexture && !1 === o.isRenderTargetTexture ? -1 : 1),
          (i.reflectivity.value = r.reflectivity),
          (i.ior.value = r.ior),
          (i.refractionRatio.value = r.refractionRatio)),
        r.lightMap)
      ) {
        i.lightMap.value = r.lightMap;
        const e = !0 === t._useLegacyLights ? Math.PI : 1;
        (i.lightMapIntensity.value = r.lightMapIntensity * e),
          n(r.lightMap, i.lightMapTransform);
      }
      r.aoMap &&
        ((i.aoMap.value = r.aoMap),
        (i.aoMapIntensity.value = r.aoMapIntensity),
        n(r.aoMap, i.aoMapTransform));
    }
    return {
      refreshFogUniforms: function (e, n) {
        n.color.getRGB(e.fogColor.value, Ei(t)),
          n.isFog
            ? ((e.fogNear.value = n.near), (e.fogFar.value = n.far))
            : n.isFogExp2 && (e.fogDensity.value = n.density);
      },
      refreshMaterialUniforms: function (t, r, s, o, l) {
        r.isMeshBasicMaterial || r.isMeshLambertMaterial
          ? i(t, r)
          : r.isMeshToonMaterial
            ? (i(t, r),
              (function (t, e) {
                e.gradientMap && (t.gradientMap.value = e.gradientMap);
              })(t, r))
            : r.isMeshPhongMaterial
              ? (i(t, r),
                (function (t, e) {
                  t.specular.value.copy(e.specular),
                    (t.shininess.value = Math.max(e.shininess, 1e-4));
                })(t, r))
              : r.isMeshStandardMaterial
                ? (i(t, r),
                  (function (t, i) {
                    (t.metalness.value = i.metalness),
                      i.metalnessMap &&
                        ((t.metalnessMap.value = i.metalnessMap),
                        n(i.metalnessMap, t.metalnessMapTransform));
                    (t.roughness.value = i.roughness),
                      i.roughnessMap &&
                        ((t.roughnessMap.value = i.roughnessMap),
                        n(i.roughnessMap, t.roughnessMapTransform));
                    const r = e.get(i).envMap;
                    r && (t.envMapIntensity.value = i.envMapIntensity);
                  })(t, r),
                  r.isMeshPhysicalMaterial &&
                    (function (t, e, i) {
                      (t.ior.value = e.ior),
                        e.sheen > 0 &&
                          (t.sheenColor.value
                            .copy(e.sheenColor)
                            .multiplyScalar(e.sheen),
                          (t.sheenRoughness.value = e.sheenRoughness),
                          e.sheenColorMap &&
                            ((t.sheenColorMap.value = e.sheenColorMap),
                            n(e.sheenColorMap, t.sheenColorMapTransform)),
                          e.sheenRoughnessMap &&
                            ((t.sheenRoughnessMap.value = e.sheenRoughnessMap),
                            n(
                              e.sheenRoughnessMap,
                              t.sheenRoughnessMapTransform
                            )));
                      e.clearcoat > 0 &&
                        ((t.clearcoat.value = e.clearcoat),
                        (t.clearcoatRoughness.value = e.clearcoatRoughness),
                        e.clearcoatMap &&
                          ((t.clearcoatMap.value = e.clearcoatMap),
                          n(e.clearcoatMap, t.clearcoatMapTransform)),
                        e.clearcoatRoughnessMap &&
                          ((t.clearcoatRoughnessMap.value =
                            e.clearcoatRoughnessMap),
                          n(
                            e.clearcoatRoughnessMap,
                            t.clearcoatRoughnessMapTransform
                          )),
                        e.clearcoatNormalMap &&
                          ((t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                          n(
                            e.clearcoatNormalMap,
                            t.clearcoatNormalMapTransform
                          ),
                          t.clearcoatNormalScale.value.copy(
                            e.clearcoatNormalScale
                          ),
                          e.side === a &&
                            t.clearcoatNormalScale.value.negate()));
                      e.iridescence > 0 &&
                        ((t.iridescence.value = e.iridescence),
                        (t.iridescenceIOR.value = e.iridescenceIOR),
                        (t.iridescenceThicknessMinimum.value =
                          e.iridescenceThicknessRange[0]),
                        (t.iridescenceThicknessMaximum.value =
                          e.iridescenceThicknessRange[1]),
                        e.iridescenceMap &&
                          ((t.iridescenceMap.value = e.iridescenceMap),
                          n(e.iridescenceMap, t.iridescenceMapTransform)),
                        e.iridescenceThicknessMap &&
                          ((t.iridescenceThicknessMap.value =
                            e.iridescenceThicknessMap),
                          n(
                            e.iridescenceThicknessMap,
                            t.iridescenceThicknessMapTransform
                          )));
                      e.transmission > 0 &&
                        ((t.transmission.value = e.transmission),
                        (t.transmissionSamplerMap.value = i.texture),
                        t.transmissionSamplerSize.value.set(i.width, i.height),
                        e.transmissionMap &&
                          ((t.transmissionMap.value = e.transmissionMap),
                          n(e.transmissionMap, t.transmissionMapTransform)),
                        (t.thickness.value = e.thickness),
                        e.thicknessMap &&
                          ((t.thicknessMap.value = e.thicknessMap),
                          n(e.thicknessMap, t.thicknessMapTransform)),
                        (t.attenuationDistance.value = e.attenuationDistance),
                        t.attenuationColor.value.copy(e.attenuationColor));
                      e.anisotropy > 0 &&
                        (t.anisotropyVector.value.set(
                          e.anisotropy * Math.cos(e.anisotropyRotation),
                          e.anisotropy * Math.sin(e.anisotropyRotation)
                        ),
                        e.anisotropyMap &&
                          ((t.anisotropyMap.value = e.anisotropyMap),
                          n(e.anisotropyMap, t.anisotropyMapTransform)));
                      (t.specularIntensity.value = e.specularIntensity),
                        t.specularColor.value.copy(e.specularColor),
                        e.specularColorMap &&
                          ((t.specularColorMap.value = e.specularColorMap),
                          n(e.specularColorMap, t.specularColorMapTransform));
                      e.specularIntensityMap &&
                        ((t.specularIntensityMap.value =
                          e.specularIntensityMap),
                        n(
                          e.specularIntensityMap,
                          t.specularIntensityMapTransform
                        ));
                    })(t, r, l))
                : r.isMeshMatcapMaterial
                  ? (i(t, r),
                    (function (t, e) {
                      e.matcap && (t.matcap.value = e.matcap);
                    })(t, r))
                  : r.isMeshDepthMaterial
                    ? i(t, r)
                    : r.isMeshDistanceMaterial
                      ? (i(t, r),
                        (function (t, n) {
                          const i = e.get(n).light;
                          t.referencePosition.value.setFromMatrixPosition(
                            i.matrixWorld
                          ),
                            (t.nearDistance.value = i.shadow.camera.near),
                            (t.farDistance.value = i.shadow.camera.far);
                        })(t, r))
                      : r.isMeshNormalMaterial
                        ? i(t, r)
                        : r.isLineBasicMaterial
                          ? ((function (t, e) {
                              t.diffuse.value.copy(e.color),
                                (t.opacity.value = e.opacity),
                                e.map &&
                                  ((t.map.value = e.map),
                                  n(e.map, t.mapTransform));
                            })(t, r),
                            r.isLineDashedMaterial &&
                              (function (t, e) {
                                (t.dashSize.value = e.dashSize),
                                  (t.totalSize.value = e.dashSize + e.gapSize),
                                  (t.scale.value = e.scale);
                              })(t, r))
                          : r.isPointsMaterial
                            ? (function (t, e, i, r) {
                                t.diffuse.value.copy(e.color),
                                  (t.opacity.value = e.opacity),
                                  (t.size.value = e.size * i),
                                  (t.scale.value = 0.5 * r),
                                  e.map &&
                                    ((t.map.value = e.map),
                                    n(e.map, t.uvTransform));
                                e.alphaMap &&
                                  ((t.alphaMap.value = e.alphaMap),
                                  n(e.alphaMap, t.alphaMapTransform));
                                e.alphaTest > 0 &&
                                  (t.alphaTest.value = e.alphaTest);
                              })(t, r, s, o)
                            : r.isSpriteMaterial
                              ? (function (t, e) {
                                  t.diffuse.value.copy(e.color),
                                    (t.opacity.value = e.opacity),
                                    (t.rotation.value = e.rotation),
                                    e.map &&
                                      ((t.map.value = e.map),
                                      n(e.map, t.mapTransform));
                                  e.alphaMap &&
                                    ((t.alphaMap.value = e.alphaMap),
                                    n(e.alphaMap, t.alphaMapTransform));
                                  e.alphaTest > 0 &&
                                    (t.alphaTest.value = e.alphaTest);
                                })(t, r)
                              : r.isShadowMaterial
                                ? (t.color.value.copy(r.color),
                                  (t.opacity.value = r.opacity))
                                : r.isShaderMaterial &&
                                  (r.uniformsNeedUpdate = !1);
      },
    };
  }
  function Rs(t, e, n, i) {
    let r = {},
      a = {},
      s = [];
    const o = n.isWebGL2 ? t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
    function l(t, e, n, i) {
      const r = t.value,
        a = e + '_' + n;
      if (void 0 === i[a])
        return (
          (i[a] =
            'number' == typeof r || 'boolean' == typeof r ? r : r.clone()),
          !0
        );
      {
        const t = i[a];
        if ('number' == typeof r || 'boolean' == typeof r) {
          if (t !== r) return (i[a] = r), !0;
        } else if (!1 === t.equals(r)) return t.copy(r), !0;
      }
      return !1;
    }
    function c(t) {
      const e = { boundary: 0, storage: 0 };
      return (
        'number' == typeof t || 'boolean' == typeof t
          ? ((e.boundary = 4), (e.storage = 4))
          : t.isVector2
            ? ((e.boundary = 8), (e.storage = 8))
            : t.isVector3 || t.isColor
              ? ((e.boundary = 16), (e.storage = 12))
              : t.isVector4
                ? ((e.boundary = 16), (e.storage = 16))
                : t.isMatrix3
                  ? ((e.boundary = 48), (e.storage = 48))
                  : t.isMatrix4
                    ? ((e.boundary = 64), (e.storage = 64))
                    : t.isTexture
                      ? console.warn(
                          'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.'
                        )
                      : console.warn(
                          'THREE.WebGLRenderer: Unsupported uniform value type.',
                          t
                        ),
        e
      );
    }
    function h(e) {
      const n = e.target;
      n.removeEventListener('dispose', h);
      const i = s.indexOf(n.__bindingPointIndex);
      s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id];
    }
    return {
      bind: function (t, e) {
        const n = e.program;
        i.uniformBlockBinding(t, n);
      },
      update: function (n, u) {
        let d = r[n.id];
        void 0 === d &&
          (!(function (t) {
            const e = t.uniforms;
            let n = 0;
            const i = 16;
            for (let t = 0, r = e.length; t < r; t++) {
              const r = Array.isArray(e[t]) ? e[t] : [e[t]];
              for (let t = 0, e = r.length; t < e; t++) {
                const e = r[t],
                  a = Array.isArray(e.value) ? e.value : [e.value];
                for (let t = 0, r = a.length; t < r; t++) {
                  const r = c(a[t]),
                    s = n % i;
                  0 !== s && i - s < r.boundary && (n += i - s),
                    (e.__data = new Float32Array(
                      r.storage / Float32Array.BYTES_PER_ELEMENT
                    )),
                    (e.__offset = n),
                    (n += r.storage);
                }
              }
            }
            const r = n % i;
            r > 0 && (n += i - r);
            (t.__size = n), (t.__cache = {});
          })(n),
          (d = (function (e) {
            const n = (function () {
              for (let t = 0; t < o; t++)
                if (-1 === s.indexOf(t)) return s.push(t), t;
              return (
                console.error(
                  'THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.'
                ),
                0
              );
            })();
            e.__bindingPointIndex = n;
            const i = t.createBuffer(),
              r = e.__size,
              a = e.usage;
            return (
              t.bindBuffer(t.UNIFORM_BUFFER, i),
              t.bufferData(t.UNIFORM_BUFFER, r, a),
              t.bindBuffer(t.UNIFORM_BUFFER, null),
              t.bindBufferBase(t.UNIFORM_BUFFER, n, i),
              i
            );
          })(n)),
          (r[n.id] = d),
          n.addEventListener('dispose', h));
        const p = u.program;
        i.updateUBOMapping(n, p);
        const f = e.render.frame;
        a[n.id] !== f &&
          (!(function (e) {
            const n = r[e.id],
              i = e.uniforms,
              a = e.__cache;
            t.bindBuffer(t.UNIFORM_BUFFER, n);
            for (let e = 0, n = i.length; e < n; e++) {
              const n = Array.isArray(i[e]) ? i[e] : [i[e]];
              for (let i = 0, r = n.length; i < r; i++) {
                const r = n[i];
                if (!0 === l(r, e, i, a)) {
                  const e = r.__offset,
                    n = Array.isArray(r.value) ? r.value : [r.value];
                  let i = 0;
                  for (let a = 0; a < n.length; a++) {
                    const s = n[a],
                      o = c(s);
                    'number' == typeof s || 'boolean' == typeof s
                      ? ((r.__data[0] = s),
                        t.bufferSubData(t.UNIFORM_BUFFER, e + i, r.__data))
                      : s.isMatrix3
                        ? ((r.__data[0] = s.elements[0]),
                          (r.__data[1] = s.elements[1]),
                          (r.__data[2] = s.elements[2]),
                          (r.__data[3] = 0),
                          (r.__data[4] = s.elements[3]),
                          (r.__data[5] = s.elements[4]),
                          (r.__data[6] = s.elements[5]),
                          (r.__data[7] = 0),
                          (r.__data[8] = s.elements[6]),
                          (r.__data[9] = s.elements[7]),
                          (r.__data[10] = s.elements[8]),
                          (r.__data[11] = 0))
                        : (s.toArray(r.__data, i),
                          (i += o.storage / Float32Array.BYTES_PER_ELEMENT));
                  }
                  t.bufferSubData(t.UNIFORM_BUFFER, e, r.__data);
                }
              }
            }
            t.bindBuffer(t.UNIFORM_BUFFER, null);
          })(n),
          (a[n.id] = f));
      },
      dispose: function () {
        for (const e in r) t.deleteBuffer(r[e]);
        (s = []), (r = {}), (a = {});
      },
    };
  }
  class Cs {
    constructor(e = {}) {
      const {
        canvas: n = qt(),
        context: i = null,
        depth: s = !0,
        stencil: o = !0,
        alpha: l = !1,
        antialias: c = !1,
        premultipliedAlpha: h = !0,
        preserveDrawingBuffer: u = !1,
        powerPreference: d = 'default',
        failIfMajorPerformanceCaveat: p = !1,
      } = e;
      let f;
      (this.isWebGLRenderer = !0),
        (f = null !== i ? i.getContextAttributes().alpha : l);
      const m = new Uint32Array(4),
        g = new Int32Array(4);
      let _ = null,
        v = null;
      const x = [],
        M = [];
      (this.domElement = n),
        (this.debug = { checkShaderErrors: !0, onShaderError: null }),
        (this.autoClear = !0),
        (this.autoClearColor = !0),
        (this.autoClearDepth = !0),
        (this.autoClearStencil = !0),
        (this.sortObjects = !0),
        (this.clippingPlanes = []),
        (this.localClippingEnabled = !1),
        (this._outputColorSpace = ht),
        (this._useLegacyLights = !1),
        (this.toneMapping = R),
        (this.toneMappingExposure = 1);
      const S = this;
      let E = !1,
        T = 0,
        y = 0,
        b = null,
        A = -1,
        w = null;
      const C = new ce(),
        L = new ce();
      let P = null;
      const U = new In(0);
      let D = 0,
        N = n.width,
        I = n.height,
        O = 1,
        F = null,
        B = null;
      const z = new ce(0, 0, N, I),
        H = new ce(0, 0, N, I);
      let G = !1;
      const V = new Hi();
      let k = !1,
        W = !1,
        X = null;
      const j = new Xe(),
        Z = new Vt(),
        nt = new me(),
        it = {
          background: null,
          fog: null,
          environment: null,
          overrideMaterial: null,
          isScene: !0,
        };
      function rt() {
        return null === b ? O : 1;
      }
      let at,
        st,
        ot,
        lt,
        ct,
        dt,
        pt,
        ft,
        mt,
        gt,
        _t,
        vt,
        xt,
        Mt,
        St,
        Et,
        Tt,
        yt,
        bt,
        At,
        wt,
        Rt,
        Ct,
        Lt,
        Pt = i;
      function Ut(t, e) {
        for (let i = 0; i < t.length; i++) {
          const r = t[i],
            a = n.getContext(r, e);
          if (null !== a) return a;
        }
        return null;
      }
      try {
        const e = {
          alpha: !0,
          depth: s,
          stencil: o,
          antialias: c,
          premultipliedAlpha: h,
          preserveDrawingBuffer: u,
          powerPreference: d,
          failIfMajorPerformanceCaveat: p,
        };
        if (
          ('setAttribute' in n &&
            n.setAttribute('data-engine', `three.js r${t}`),
          n.addEventListener('webglcontextlost', It, !1),
          n.addEventListener('webglcontextrestored', Ot, !1),
          n.addEventListener('webglcontextcreationerror', Ft, !1),
          null === Pt)
        ) {
          const t = ['webgl2', 'webgl', 'experimental-webgl'];
          if (
            (!0 === S.isWebGL1Renderer && t.shift(),
            (Pt = Ut(t, e)),
            null === Pt)
          )
            throw Ut(t)
              ? new Error(
                  'Error creating WebGL context with your selected attributes.'
                )
              : new Error('Error creating WebGL context.');
        }
        'undefined' != typeof WebGLRenderingContext &&
          Pt instanceof WebGLRenderingContext &&
          console.warn(
            'THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.'
          ),
          void 0 === Pt.getShaderPrecisionFormat &&
            (Pt.getShaderPrecisionFormat = function () {
              return { rangeMin: 1, rangeMax: 1, precision: 1 };
            });
      } catch (t) {
        throw (console.error('THREE.WebGLRenderer: ' + t.message), t);
      }
      function Dt() {
        (at = new Mr(Pt)),
          (st = new Qi(Pt, at, e)),
          at.init(st),
          (Rt = new vs(Pt, at, st)),
          (ot = new gs(Pt, at, st)),
          (lt = new Tr(Pt)),
          (ct = new ns()),
          (dt = new _s(Pt, at, ot, ct, st, Rt, lt)),
          (pt = new er(S)),
          (ft = new xr(S)),
          (mt = new Vi(Pt, st)),
          (Ct = new Ji(Pt, at, mt, st)),
          (gt = new Sr(Pt, mt, lt, Ct)),
          (_t = new wr(Pt, gt, mt, lt)),
          (bt = new Ar(Pt, st, dt)),
          (Et = new tr(ct)),
          (vt = new es(S, pt, ft, at, st, Ct, Et)),
          (xt = new ws(S, ct)),
          (Mt = new ss()),
          (St = new ds(at, st)),
          (yt = new Zi(S, pt, ft, ot, _t, f, h)),
          (Tt = new ms(S, _t, st)),
          (Lt = new Rs(Pt, lt, st, ot)),
          (At = new $i(Pt, at, lt, st)),
          (wt = new Er(Pt, at, lt, st)),
          (lt.programs = vt.programs),
          (S.capabilities = st),
          (S.extensions = at),
          (S.properties = ct),
          (S.renderLists = Mt),
          (S.shadowMap = Tt),
          (S.state = ot),
          (S.info = lt);
      }
      Dt();
      const Nt = new ys(S, Pt);
      function It(t) {
        t.preventDefault(),
          console.log('THREE.WebGLRenderer: Context Lost.'),
          (E = !0);
      }
      function Ot() {
        console.log('THREE.WebGLRenderer: Context Restored.'), (E = !1);
        const t = lt.autoReset,
          e = Tt.enabled,
          n = Tt.autoUpdate,
          i = Tt.needsUpdate,
          r = Tt.type;
        Dt(),
          (lt.autoReset = t),
          (Tt.enabled = e),
          (Tt.autoUpdate = n),
          (Tt.needsUpdate = i),
          (Tt.type = r);
      }
      function Ft(t) {
        console.error(
          'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
          t.statusMessage
        );
      }
      function Bt(t) {
        const e = t.target;
        e.removeEventListener('dispose', Bt),
          (function (t) {
            (function (t) {
              const e = ct.get(t).programs;
              void 0 !== e &&
                (e.forEach(function (t) {
                  vt.releaseProgram(t);
                }),
                t.isShaderMaterial && vt.releaseShaderCache(t));
            })(t),
              ct.remove(t);
          })(e);
      }
      function Ht(t, e, n) {
        !0 === t.transparent && 2 === t.side && !1 === t.forceSinglePass
          ? ((t.side = a),
            (t.needsUpdate = !0),
            Jt(t, e, n),
            (t.side = r),
            (t.needsUpdate = !0),
            Jt(t, e, n),
            (t.side = 2))
          : Jt(t, e, n);
      }
      (this.xr = Nt),
        (this.getContext = function () {
          return Pt;
        }),
        (this.getContextAttributes = function () {
          return Pt.getContextAttributes();
        }),
        (this.forceContextLoss = function () {
          const t = at.get('WEBGL_lose_context');
          t && t.loseContext();
        }),
        (this.forceContextRestore = function () {
          const t = at.get('WEBGL_lose_context');
          t && t.restoreContext();
        }),
        (this.getPixelRatio = function () {
          return O;
        }),
        (this.setPixelRatio = function (t) {
          void 0 !== t && ((O = t), this.setSize(N, I, !1));
        }),
        (this.getSize = function (t) {
          return t.set(N, I);
        }),
        (this.setSize = function (t, e, i = !0) {
          Nt.isPresenting
            ? console.warn(
                "THREE.WebGLRenderer: Can't change size while VR device is presenting."
              )
            : ((N = t),
              (I = e),
              (n.width = Math.floor(t * O)),
              (n.height = Math.floor(e * O)),
              !0 === i &&
                ((n.style.width = t + 'px'), (n.style.height = e + 'px')),
              this.setViewport(0, 0, t, e));
        }),
        (this.getDrawingBufferSize = function (t) {
          return t.set(N * O, I * O).floor();
        }),
        (this.setDrawingBufferSize = function (t, e, i) {
          (N = t),
            (I = e),
            (O = i),
            (n.width = Math.floor(t * i)),
            (n.height = Math.floor(e * i)),
            this.setViewport(0, 0, t, e);
        }),
        (this.getCurrentViewport = function (t) {
          return t.copy(C);
        }),
        (this.getViewport = function (t) {
          return t.copy(z);
        }),
        (this.setViewport = function (t, e, n, i) {
          t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, i),
            ot.viewport(C.copy(z).multiplyScalar(O).round());
        }),
        (this.getScissor = function (t) {
          return t.copy(H);
        }),
        (this.setScissor = function (t, e, n, i) {
          t.isVector4 ? H.set(t.x, t.y, t.z, t.w) : H.set(t, e, n, i),
            ot.scissor(L.copy(H).multiplyScalar(O).round());
        }),
        (this.getScissorTest = function () {
          return G;
        }),
        (this.setScissorTest = function (t) {
          ot.setScissorTest((G = t));
        }),
        (this.setOpaqueSort = function (t) {
          F = t;
        }),
        (this.setTransparentSort = function (t) {
          B = t;
        }),
        (this.getClearColor = function (t) {
          return t.copy(yt.getClearColor());
        }),
        (this.setClearColor = function () {
          yt.setClearColor.apply(yt, arguments);
        }),
        (this.getClearAlpha = function () {
          return yt.getClearAlpha();
        }),
        (this.setClearAlpha = function () {
          yt.setClearAlpha.apply(yt, arguments);
        }),
        (this.clear = function (t = !0, e = !0, n = !0) {
          let i = 0;
          if (t) {
            let t = !1;
            if (null !== b) {
              const e = b.texture.format;
              t = 1033 === e || 1031 === e || 1029 === e;
            }
            if (t) {
              const t = b.texture.type,
                e =
                  t === Y ||
                  t === J ||
                  t === K ||
                  t === tt ||
                  1017 === t ||
                  1018 === t,
                n = yt.getClearColor(),
                i = yt.getClearAlpha(),
                r = n.r,
                a = n.g,
                s = n.b;
              e
                ? ((m[0] = r),
                  (m[1] = a),
                  (m[2] = s),
                  (m[3] = i),
                  Pt.clearBufferuiv(Pt.COLOR, 0, m))
                : ((g[0] = r),
                  (g[1] = a),
                  (g[2] = s),
                  (g[3] = i),
                  Pt.clearBufferiv(Pt.COLOR, 0, g));
            } else i |= Pt.COLOR_BUFFER_BIT;
          }
          e && (i |= Pt.DEPTH_BUFFER_BIT),
            n &&
              ((i |= Pt.STENCIL_BUFFER_BIT),
              this.state.buffers.stencil.setMask(4294967295)),
            Pt.clear(i);
        }),
        (this.clearColor = function () {
          this.clear(!0, !1, !1);
        }),
        (this.clearDepth = function () {
          this.clear(!1, !0, !1);
        }),
        (this.clearStencil = function () {
          this.clear(!1, !1, !0);
        }),
        (this.dispose = function () {
          n.removeEventListener('webglcontextlost', It, !1),
            n.removeEventListener('webglcontextrestored', Ot, !1),
            n.removeEventListener('webglcontextcreationerror', Ft, !1),
            Mt.dispose(),
            St.dispose(),
            ct.dispose(),
            pt.dispose(),
            ft.dispose(),
            _t.dispose(),
            Ct.dispose(),
            Lt.dispose(),
            vt.dispose(),
            Nt.dispose(),
            Nt.removeEventListener('sessionstart', kt),
            Nt.removeEventListener('sessionend', Wt),
            X && (X.dispose(), (X = null)),
            Xt.stop();
        }),
        (this.renderBufferDirect = function (t, e, n, i, r, a) {
          null === e && (e = it);
          const s = r.isMesh && r.matrixWorld.determinant() < 0,
            o = (function (t, e, n, i, r) {
              !0 !== e.isScene && (e = it);
              dt.resetTextureUnits();
              const a = e.fog,
                s = i.isMeshStandardMaterial ? e.environment : null,
                o =
                  null === b
                    ? S.outputColorSpace
                    : !0 === b.isXRRenderTarget
                      ? b.texture.colorSpace
                      : ut,
                l = (i.isMeshStandardMaterial ? ft : pt).get(i.envMap || s),
                c =
                  !0 === i.vertexColors &&
                  !!n.attributes.color &&
                  4 === n.attributes.color.itemSize,
                h =
                  !!n.attributes.tangent && (!!i.normalMap || i.anisotropy > 0),
                u = !!n.morphAttributes.position,
                d = !!n.morphAttributes.normal,
                p = !!n.morphAttributes.color;
              let f = R;
              i.toneMapped &&
                ((null !== b && !0 !== b.isXRRenderTarget) ||
                  (f = S.toneMapping));
              const m =
                  n.morphAttributes.position ||
                  n.morphAttributes.normal ||
                  n.morphAttributes.color,
                g = void 0 !== m ? m.length : 0,
                _ = ct.get(i),
                x = v.state.lights;
              if (!0 === k && (!0 === W || t !== w)) {
                const e = t === w && i.id === A;
                Et.setState(i, t, e);
              }
              let M = !1;
              i.version === _.__version
                ? (_.needsLights && _.lightsStateVersion !== x.state.version) ||
                  _.outputColorSpace !== o ||
                  (r.isBatchedMesh && !1 === _.batching)
                  ? (M = !0)
                  : r.isBatchedMesh || !0 !== _.batching
                    ? r.isInstancedMesh && !1 === _.instancing
                      ? (M = !0)
                      : r.isInstancedMesh || !0 !== _.instancing
                        ? r.isSkinnedMesh && !1 === _.skinning
                          ? (M = !0)
                          : r.isSkinnedMesh || !0 !== _.skinning
                            ? (r.isInstancedMesh &&
                                !0 === _.instancingColor &&
                                null === r.instanceColor) ||
                              (r.isInstancedMesh &&
                                !1 === _.instancingColor &&
                                null !== r.instanceColor) ||
                              (r.isInstancedMesh &&
                                !0 === _.instancingMorph &&
                                null === r.morphTexture) ||
                              (r.isInstancedMesh &&
                                !1 === _.instancingMorph &&
                                null !== r.morphTexture) ||
                              _.envMap !== l ||
                              (!0 === i.fog && _.fog !== a)
                              ? (M = !0)
                              : void 0 === _.numClippingPlanes ||
                                  (_.numClippingPlanes === Et.numPlanes &&
                                    _.numIntersection === Et.numIntersection)
                                ? (_.vertexAlphas !== c ||
                                    _.vertexTangents !== h ||
                                    _.morphTargets !== u ||
                                    _.morphNormals !== d ||
                                    _.morphColors !== p ||
                                    _.toneMapping !== f ||
                                    (!0 === st.isWebGL2 &&
                                      _.morphTargetsCount !== g)) &&
                                  (M = !0)
                                : (M = !0)
                            : (M = !0)
                        : (M = !0)
                    : (M = !0)
                : ((M = !0), (_.__version = i.version));
              let E = _.currentProgram;
              !0 === M && (E = Jt(i, e, r));
              let T = !1,
                y = !1,
                C = !1;
              const L = E.getUniforms(),
                P = _.uniforms;
              ot.useProgram(E.program) && ((T = !0), (y = !0), (C = !0));
              i.id !== A && ((A = i.id), (y = !0));
              if (T || w !== t) {
                L.setValue(Pt, 'projectionMatrix', t.projectionMatrix),
                  L.setValue(Pt, 'viewMatrix', t.matrixWorldInverse);
                const e = L.map.cameraPosition;
                void 0 !== e &&
                  e.setValue(Pt, nt.setFromMatrixPosition(t.matrixWorld)),
                  st.logarithmicDepthBuffer &&
                    L.setValue(
                      Pt,
                      'logDepthBufFC',
                      2 / (Math.log(t.far + 1) / Math.LN2)
                    ),
                  (i.isMeshPhongMaterial ||
                    i.isMeshToonMaterial ||
                    i.isMeshLambertMaterial ||
                    i.isMeshBasicMaterial ||
                    i.isMeshStandardMaterial ||
                    i.isShaderMaterial) &&
                    L.setValue(
                      Pt,
                      'isOrthographic',
                      !0 === t.isOrthographicCamera
                    ),
                  w !== t && ((w = t), (y = !0), (C = !0));
              }
              if (r.isSkinnedMesh) {
                L.setOptional(Pt, r, 'bindMatrix'),
                  L.setOptional(Pt, r, 'bindMatrixInverse');
                const t = r.skeleton;
                t &&
                  (st.floatVertexTextures
                    ? (null === t.boneTexture && t.computeBoneTexture(),
                      L.setValue(Pt, 'boneTexture', t.boneTexture, dt))
                    : console.warn(
                        'THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.'
                      ));
              }
              r.isBatchedMesh &&
                (L.setOptional(Pt, r, 'batchingTexture'),
                L.setValue(Pt, 'batchingTexture', r._matricesTexture, dt));
              const U = n.morphAttributes;
              (void 0 !== U.position ||
                void 0 !== U.normal ||
                (void 0 !== U.color && !0 === st.isWebGL2)) &&
                bt.update(r, n, E);
              (y || _.receiveShadow !== r.receiveShadow) &&
                ((_.receiveShadow = r.receiveShadow),
                L.setValue(Pt, 'receiveShadow', r.receiveShadow));
              i.isMeshGouraudMaterial &&
                null !== i.envMap &&
                ((P.envMap.value = l),
                (P.flipEnvMap.value =
                  l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1));
              y &&
                (L.setValue(Pt, 'toneMappingExposure', S.toneMappingExposure),
                _.needsLights &&
                  ((N = C),
                  ((D = P).ambientLightColor.needsUpdate = N),
                  (D.lightProbe.needsUpdate = N),
                  (D.directionalLights.needsUpdate = N),
                  (D.directionalLightShadows.needsUpdate = N),
                  (D.pointLights.needsUpdate = N),
                  (D.pointLightShadows.needsUpdate = N),
                  (D.spotLights.needsUpdate = N),
                  (D.spotLightShadows.needsUpdate = N),
                  (D.rectAreaLights.needsUpdate = N),
                  (D.hemisphereLights.needsUpdate = N)),
                a && !0 === i.fog && xt.refreshFogUniforms(P, a),
                xt.refreshMaterialUniforms(P, i, O, I, X),
                Da.upload(Pt, $t(_), P, dt));
              var D, N;
              i.isShaderMaterial &&
                !0 === i.uniformsNeedUpdate &&
                (Da.upload(Pt, $t(_), P, dt), (i.uniformsNeedUpdate = !1));
              i.isSpriteMaterial && L.setValue(Pt, 'center', r.center);
              if (
                (L.setValue(Pt, 'modelViewMatrix', r.modelViewMatrix),
                L.setValue(Pt, 'normalMatrix', r.normalMatrix),
                L.setValue(Pt, 'modelMatrix', r.matrixWorld),
                i.isShaderMaterial || i.isRawShaderMaterial)
              ) {
                const t = i.uniformsGroups;
                for (let e = 0, n = t.length; e < n; e++)
                  if (st.isWebGL2) {
                    const n = t[e];
                    Lt.update(n, E), Lt.bind(n, E);
                  } else
                    console.warn(
                      'THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.'
                    );
              }
              return E;
            })(t, e, n, i, r);
          ot.setMaterial(i, s);
          let l = n.index,
            c = 1;
          if (!0 === i.wireframe) {
            if (((l = gt.getWireframeAttribute(n)), void 0 === l)) return;
            c = 2;
          }
          const h = n.drawRange,
            u = n.attributes.position;
          let d = h.start * c,
            p = (h.start + h.count) * c;
          null !== a &&
            ((d = Math.max(d, a.start * c)),
            (p = Math.min(p, (a.start + a.count) * c))),
            null !== l
              ? ((d = Math.max(d, 0)), (p = Math.min(p, l.count)))
              : null != u && ((d = Math.max(d, 0)), (p = Math.min(p, u.count)));
          const f = p - d;
          if (f < 0 || f === 1 / 0) return;
          let m;
          Ct.setup(r, i, o, n, l);
          let g = At;
          if (
            (null !== l && ((m = mt.get(l)), (g = wt), g.setIndex(m)), r.isMesh)
          )
            !0 === i.wireframe
              ? (ot.setLineWidth(i.wireframeLinewidth * rt()),
                g.setMode(Pt.LINES))
              : g.setMode(Pt.TRIANGLES);
          else if (r.isLine) {
            let t = i.linewidth;
            void 0 === t && (t = 1),
              ot.setLineWidth(t * rt()),
              r.isLineSegments
                ? g.setMode(Pt.LINES)
                : r.isLineLoop
                  ? g.setMode(Pt.LINE_LOOP)
                  : g.setMode(Pt.LINE_STRIP);
          } else
            r.isPoints
              ? g.setMode(Pt.POINTS)
              : r.isSprite && g.setMode(Pt.TRIANGLES);
          if (r.isBatchedMesh)
            g.renderMultiDraw(
              r._multiDrawStarts,
              r._multiDrawCounts,
              r._multiDrawCount
            );
          else if (r.isInstancedMesh) g.renderInstances(d, f, r.count);
          else if (n.isInstancedBufferGeometry) {
            const t =
                void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
              e = Math.min(n.instanceCount, t);
            g.renderInstances(d, f, e);
          } else g.render(d, f);
        }),
        (this.compile = function (t, e, n = null) {
          null === n && (n = t),
            (v = St.get(n)),
            v.init(),
            M.push(v),
            n.traverseVisible(function (t) {
              t.isLight &&
                t.layers.test(e.layers) &&
                (v.pushLight(t), t.castShadow && v.pushShadow(t));
            }),
            t !== n &&
              t.traverseVisible(function (t) {
                t.isLight &&
                  t.layers.test(e.layers) &&
                  (v.pushLight(t), t.castShadow && v.pushShadow(t));
              }),
            v.setupLights(S._useLegacyLights);
          const i = new Set();
          return (
            t.traverse(function (t) {
              const e = t.material;
              if (e)
                if (Array.isArray(e))
                  for (let r = 0; r < e.length; r++) {
                    const a = e[r];
                    Ht(a, n, t), i.add(a);
                  }
                else Ht(e, n, t), i.add(e);
            }),
            M.pop(),
            (v = null),
            i
          );
        }),
        (this.compileAsync = function (t, e, n = null) {
          const i = this.compile(t, e, n);
          return new Promise((e) => {
            function n() {
              i.forEach(function (t) {
                ct.get(t).currentProgram.isReady() && i.delete(t);
              }),
                0 !== i.size ? setTimeout(n, 10) : e(t);
            }
            null !== at.get('KHR_parallel_shader_compile')
              ? n()
              : setTimeout(n, 10);
          });
        });
      let Gt = null;
      function kt() {
        Xt.stop();
      }
      function Wt() {
        Xt.start();
      }
      const Xt = new Gi();
      function jt(t, e, n, i) {
        if (!1 === t.visible) return;
        if (t.layers.test(e.layers))
          if (t.isGroup) n = t.renderOrder;
          else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
          else if (t.isLight) v.pushLight(t), t.castShadow && v.pushShadow(t);
          else if (t.isSprite) {
            if (!t.frustumCulled || V.intersectsSprite(t)) {
              i && nt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);
              const e = _t.update(t),
                r = t.material;
              r.visible && _.push(t, e, r, n, nt.z, null);
            }
          } else if (
            (t.isMesh || t.isLine || t.isPoints) &&
            (!t.frustumCulled || V.intersectsObject(t))
          ) {
            const e = _t.update(t),
              r = t.material;
            if (
              (i &&
                (void 0 !== t.boundingSphere
                  ? (null === t.boundingSphere && t.computeBoundingSphere(),
                    nt.copy(t.boundingSphere.center))
                  : (null === e.boundingSphere && e.computeBoundingSphere(),
                    nt.copy(e.boundingSphere.center)),
                nt.applyMatrix4(t.matrixWorld).applyMatrix4(j)),
              Array.isArray(r))
            ) {
              const i = e.groups;
              for (let a = 0, s = i.length; a < s; a++) {
                const s = i[a],
                  o = r[s.materialIndex];
                o && o.visible && _.push(t, e, o, n, nt.z, s);
              }
            } else r.visible && _.push(t, e, r, n, nt.z, null);
          }
        const r = t.children;
        for (let t = 0, a = r.length; t < a; t++) jt(r[t], e, n, i);
      }
      function Yt(t, e, n, i) {
        const r = t.opaque,
          s = t.transmissive,
          o = t.transparent;
        v.setupLightsView(n),
          !0 === k && Et.setGlobalState(S.clippingPlanes, n),
          s.length > 0 &&
            (function (t, e, n, i) {
              const r = !0 === n.isScene ? n.overrideMaterial : null;
              if (null !== r) return;
              const s = st.isWebGL2;
              null === X &&
                (X = new ue(1, 1, {
                  generateMipmaps: !0,
                  type: at.has('EXT_color_buffer_half_float') ? Q : Y,
                  minFilter: q,
                  samples: s ? 4 : 0,
                }));
              S.getDrawingBufferSize(Z),
                s ? X.setSize(Z.x, Z.y) : X.setSize(zt(Z.x), zt(Z.y));
              const o = S.getRenderTarget();
              S.setRenderTarget(X),
                S.getClearColor(U),
                (D = S.getClearAlpha()),
                D < 1 && S.setClearColor(16777215, 0.5);
              S.clear();
              const l = S.toneMapping;
              (S.toneMapping = R),
                Kt(t, n, i),
                dt.updateMultisampleRenderTarget(X),
                dt.updateRenderTargetMipmap(X);
              let c = !1;
              for (let t = 0, r = e.length; t < r; t++) {
                const r = e[t],
                  s = r.object,
                  o = r.geometry,
                  l = r.material,
                  h = r.group;
                if (2 === l.side && s.layers.test(i.layers)) {
                  const t = l.side;
                  (l.side = a),
                    (l.needsUpdate = !0),
                    Zt(s, n, i, o, l, h),
                    (l.side = t),
                    (l.needsUpdate = !0),
                    (c = !0);
                }
              }
              !0 === c &&
                (dt.updateMultisampleRenderTarget(X),
                dt.updateRenderTargetMipmap(X));
              S.setRenderTarget(o), S.setClearColor(U, D), (S.toneMapping = l);
            })(r, s, e, n),
          i && ot.viewport(C.copy(i)),
          r.length > 0 && Kt(r, e, n),
          s.length > 0 && Kt(s, e, n),
          o.length > 0 && Kt(o, e, n),
          ot.buffers.depth.setTest(!0),
          ot.buffers.depth.setMask(!0),
          ot.buffers.color.setMask(!0),
          ot.setPolygonOffset(!1);
      }
      function Kt(t, e, n) {
        const i = !0 === e.isScene ? e.overrideMaterial : null;
        for (let r = 0, a = t.length; r < a; r++) {
          const a = t[r],
            s = a.object,
            o = a.geometry,
            l = null === i ? a.material : i,
            c = a.group;
          s.layers.test(n.layers) && Zt(s, e, n, o, l, c);
        }
      }
      function Zt(t, e, n, i, s, o) {
        t.onBeforeRender(S, e, n, i, s, o),
          t.modelViewMatrix.multiplyMatrices(
            n.matrixWorldInverse,
            t.matrixWorld
          ),
          t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
          s.onBeforeRender(S, e, n, i, t, o),
          !0 === s.transparent && 2 === s.side && !1 === s.forceSinglePass
            ? ((s.side = a),
              (s.needsUpdate = !0),
              S.renderBufferDirect(n, e, i, s, t, o),
              (s.side = r),
              (s.needsUpdate = !0),
              S.renderBufferDirect(n, e, i, s, t, o),
              (s.side = 2))
            : S.renderBufferDirect(n, e, i, s, t, o),
          t.onAfterRender(S, e, n, i, s, o);
      }
      function Jt(t, e, n) {
        !0 !== e.isScene && (e = it);
        const i = ct.get(t),
          r = v.state.lights,
          a = v.state.shadowsArray,
          s = r.state.version,
          o = vt.getParameters(t, r.state, a, e, n),
          l = vt.getProgramCacheKey(o);
        let c = i.programs;
        (i.environment = t.isMeshStandardMaterial ? e.environment : null),
          (i.fog = e.fog),
          (i.envMap = (t.isMeshStandardMaterial ? ft : pt).get(
            t.envMap || i.environment
          )),
          (i.envMapRotation =
            null !== i.environment && null === t.envMap
              ? e.environmentRotation
              : t.envMapRotation),
          void 0 === c &&
            (t.addEventListener('dispose', Bt),
            (c = new Map()),
            (i.programs = c));
        let h = c.get(l);
        if (void 0 !== h) {
          if (i.currentProgram === h && i.lightsStateVersion === s)
            return Qt(t, o), h;
        } else
          (o.uniforms = vt.getUniforms(t)),
            t.onBuild(n, o, S),
            t.onBeforeCompile(o, S),
            (h = vt.acquireProgram(o, l)),
            c.set(l, h),
            (i.uniforms = o.uniforms);
        const u = i.uniforms;
        return (
          ((t.isShaderMaterial || t.isRawShaderMaterial) &&
            !0 !== t.clipping) ||
            (u.clippingPlanes = Et.uniform),
          Qt(t, o),
          (i.needsLights = (function (t) {
            return (
              t.isMeshLambertMaterial ||
              t.isMeshToonMaterial ||
              t.isMeshPhongMaterial ||
              t.isMeshStandardMaterial ||
              t.isShadowMaterial ||
              (t.isShaderMaterial && !0 === t.lights)
            );
          })(t)),
          (i.lightsStateVersion = s),
          i.needsLights &&
            ((u.ambientLightColor.value = r.state.ambient),
            (u.lightProbe.value = r.state.probe),
            (u.directionalLights.value = r.state.directional),
            (u.directionalLightShadows.value = r.state.directionalShadow),
            (u.spotLights.value = r.state.spot),
            (u.spotLightShadows.value = r.state.spotShadow),
            (u.rectAreaLights.value = r.state.rectArea),
            (u.ltc_1.value = r.state.rectAreaLTC1),
            (u.ltc_2.value = r.state.rectAreaLTC2),
            (u.pointLights.value = r.state.point),
            (u.pointLightShadows.value = r.state.pointShadow),
            (u.hemisphereLights.value = r.state.hemi),
            (u.directionalShadowMap.value = r.state.directionalShadowMap),
            (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
            (u.spotShadowMap.value = r.state.spotShadowMap),
            (u.spotLightMatrix.value = r.state.spotLightMatrix),
            (u.spotLightMap.value = r.state.spotLightMap),
            (u.pointShadowMap.value = r.state.pointShadowMap),
            (u.pointShadowMatrix.value = r.state.pointShadowMatrix)),
          (i.currentProgram = h),
          (i.uniformsList = null),
          h
        );
      }
      function $t(t) {
        if (null === t.uniformsList) {
          const e = t.currentProgram.getUniforms();
          t.uniformsList = Da.seqWithValue(e.seq, t.uniforms);
        }
        return t.uniformsList;
      }
      function Qt(t, e) {
        const n = ct.get(t);
        (n.outputColorSpace = e.outputColorSpace),
          (n.batching = e.batching),
          (n.instancing = e.instancing),
          (n.instancingColor = e.instancingColor),
          (n.instancingMorph = e.instancingMorph),
          (n.skinning = e.skinning),
          (n.morphTargets = e.morphTargets),
          (n.morphNormals = e.morphNormals),
          (n.morphColors = e.morphColors),
          (n.morphTargetsCount = e.morphTargetsCount),
          (n.numClippingPlanes = e.numClippingPlanes),
          (n.numIntersection = e.numClipIntersection),
          (n.vertexAlphas = e.vertexAlphas),
          (n.vertexTangents = e.vertexTangents),
          (n.toneMapping = e.toneMapping);
      }
      Xt.setAnimationLoop(function (t) {
        Gt && Gt(t);
      }),
        'undefined' != typeof self && Xt.setContext(self),
        (this.setAnimationLoop = function (t) {
          (Gt = t), Nt.setAnimationLoop(t), null === t ? Xt.stop() : Xt.start();
        }),
        Nt.addEventListener('sessionstart', kt),
        Nt.addEventListener('sessionend', Wt),
        (this.render = function (t, e) {
          if (void 0 !== e && !0 !== e.isCamera)
            return void console.error(
              'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
            );
          if (!0 === E) return;
          !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
            null === e.parent &&
              !0 === e.matrixWorldAutoUpdate &&
              e.updateMatrixWorld(),
            !0 === Nt.enabled &&
              !0 === Nt.isPresenting &&
              (!0 === Nt.cameraAutoUpdate && Nt.updateCamera(e),
              (e = Nt.getCamera())),
            !0 === t.isScene && t.onBeforeRender(S, t, e, b),
            (v = St.get(t, M.length)),
            v.init(),
            M.push(v),
            j.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            V.setFromProjectionMatrix(j),
            (W = this.localClippingEnabled),
            (k = Et.init(this.clippingPlanes, W)),
            (_ = Mt.get(t, x.length)),
            _.init(),
            x.push(_),
            jt(t, e, 0, S.sortObjects),
            _.finish(),
            !0 === S.sortObjects && _.sort(F, B),
            this.info.render.frame++,
            !0 === k && Et.beginShadows();
          const n = v.state.shadowsArray;
          if (
            (Tt.render(n, t, e),
            !0 === k && Et.endShadows(),
            !0 === this.info.autoReset && this.info.reset(),
            (!1 !== Nt.enabled &&
              !1 !== Nt.isPresenting &&
              !1 !== Nt.hasDepthSensing()) ||
              yt.render(_, t),
            v.setupLights(S._useLegacyLights),
            e.isArrayCamera)
          ) {
            const n = e.cameras;
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              Yt(_, t, i, i.viewport);
            }
          } else Yt(_, t, e);
          null !== b &&
            (dt.updateMultisampleRenderTarget(b),
            dt.updateRenderTargetMipmap(b)),
            !0 === t.isScene && t.onAfterRender(S, t, e),
            Ct.resetDefaultState(),
            (A = -1),
            (w = null),
            M.pop(),
            (v = M.length > 0 ? M[M.length - 1] : null),
            x.pop(),
            (_ = x.length > 0 ? x[x.length - 1] : null);
        }),
        (this.getActiveCubeFace = function () {
          return T;
        }),
        (this.getActiveMipmapLevel = function () {
          return y;
        }),
        (this.getRenderTarget = function () {
          return b;
        }),
        (this.setRenderTargetTextures = function (t, e, n) {
          (ct.get(t.texture).__webglTexture = e),
            (ct.get(t.depthTexture).__webglTexture = n);
          const i = ct.get(t);
          (i.__hasExternalTextures = !0),
            (i.__autoAllocateDepthBuffer = void 0 === n),
            i.__autoAllocateDepthBuffer ||
              (!0 === at.has('WEBGL_multisampled_render_to_texture') &&
                (console.warn(
                  'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided'
                ),
                (i.__useRenderToTexture = !1)));
        }),
        (this.setRenderTargetFramebuffer = function (t, e) {
          const n = ct.get(t);
          (n.__webglFramebuffer = e),
            (n.__useDefaultFramebuffer = void 0 === e);
        }),
        (this.setRenderTarget = function (t, e = 0, n = 0) {
          (b = t), (T = e), (y = n);
          let i = !0,
            r = null,
            a = !1,
            s = !1;
          if (t) {
            const o = ct.get(t);
            void 0 !== o.__useDefaultFramebuffer
              ? (ot.bindFramebuffer(Pt.FRAMEBUFFER, null), (i = !1))
              : void 0 === o.__webglFramebuffer
                ? dt.setupRenderTarget(t)
                : o.__hasExternalTextures &&
                  dt.rebindTextures(
                    t,
                    ct.get(t.texture).__webglTexture,
                    ct.get(t.depthTexture).__webglTexture
                  );
            const l = t.texture;
            (l.isData3DTexture ||
              l.isDataArrayTexture ||
              l.isCompressedArrayTexture) &&
              (s = !0);
            const c = ct.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget
              ? ((r = Array.isArray(c[e]) ? c[e][n] : c[e]), (a = !0))
              : (r =
                  st.isWebGL2 &&
                  t.samples > 0 &&
                  !1 === dt.useMultisampledRTT(t)
                    ? ct.get(t).__webglMultisampledFramebuffer
                    : Array.isArray(c)
                      ? c[n]
                      : c),
              C.copy(t.viewport),
              L.copy(t.scissor),
              (P = t.scissorTest);
          } else
            C.copy(z).multiplyScalar(O).floor(),
              L.copy(H).multiplyScalar(O).floor(),
              (P = G);
          if (
            (ot.bindFramebuffer(Pt.FRAMEBUFFER, r) &&
              st.drawBuffers &&
              i &&
              ot.drawBuffers(t, r),
            ot.viewport(C),
            ot.scissor(L),
            ot.setScissorTest(P),
            a)
          ) {
            const i = ct.get(t.texture);
            Pt.framebufferTexture2D(
              Pt.FRAMEBUFFER,
              Pt.COLOR_ATTACHMENT0,
              Pt.TEXTURE_CUBE_MAP_POSITIVE_X + e,
              i.__webglTexture,
              n
            );
          } else if (s) {
            const i = ct.get(t.texture),
              r = e || 0;
            Pt.framebufferTextureLayer(
              Pt.FRAMEBUFFER,
              Pt.COLOR_ATTACHMENT0,
              i.__webglTexture,
              n || 0,
              r
            );
          }
          A = -1;
        }),
        (this.readRenderTargetPixels = function (t, e, n, i, r, a, s) {
          if (!t || !t.isWebGLRenderTarget)
            return void console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
            );
          let o = ct.get(t).__webglFramebuffer;
          if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
            ot.bindFramebuffer(Pt.FRAMEBUFFER, o);
            try {
              const s = t.texture,
                o = s.format,
                l = s.type;
              if (
                o !== et &&
                Rt.convert(o) !==
                  Pt.getParameter(Pt.IMPLEMENTATION_COLOR_READ_FORMAT)
              )
                return void console.error(
                  'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
                );
              const c =
                l === Q &&
                (at.has('EXT_color_buffer_half_float') ||
                  (st.isWebGL2 && at.has('EXT_color_buffer_float')));
              if (
                !(
                  l === Y ||
                  Rt.convert(l) ===
                    Pt.getParameter(Pt.IMPLEMENTATION_COLOR_READ_TYPE) ||
                  (l === $ &&
                    (st.isWebGL2 ||
                      at.has('OES_texture_float') ||
                      at.has('WEBGL_color_buffer_float'))) ||
                  c
                )
              )
                return void console.error(
                  'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
                );
              e >= 0 &&
                e <= t.width - i &&
                n >= 0 &&
                n <= t.height - r &&
                Pt.readPixels(e, n, i, r, Rt.convert(o), Rt.convert(l), a);
            } finally {
              const t = null !== b ? ct.get(b).__webglFramebuffer : null;
              ot.bindFramebuffer(Pt.FRAMEBUFFER, t);
            }
          }
        }),
        (this.copyFramebufferToTexture = function (t, e, n = 0) {
          const i = Math.pow(2, -n),
            r = Math.floor(e.image.width * i),
            a = Math.floor(e.image.height * i);
          dt.setTexture2D(e, 0),
            Pt.copyTexSubImage2D(Pt.TEXTURE_2D, n, 0, 0, t.x, t.y, r, a),
            ot.unbindTexture();
        }),
        (this.copyTextureToTexture = function (t, e, n, i = 0) {
          const r = e.image.width,
            a = e.image.height,
            s = Rt.convert(n.format),
            o = Rt.convert(n.type);
          dt.setTexture2D(n, 0),
            Pt.pixelStorei(Pt.UNPACK_FLIP_Y_WEBGL, n.flipY),
            Pt.pixelStorei(
              Pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              n.premultiplyAlpha
            ),
            Pt.pixelStorei(Pt.UNPACK_ALIGNMENT, n.unpackAlignment),
            e.isDataTexture
              ? Pt.texSubImage2D(
                  Pt.TEXTURE_2D,
                  i,
                  t.x,
                  t.y,
                  r,
                  a,
                  s,
                  o,
                  e.image.data
                )
              : e.isCompressedTexture
                ? Pt.compressedTexSubImage2D(
                    Pt.TEXTURE_2D,
                    i,
                    t.x,
                    t.y,
                    e.mipmaps[0].width,
                    e.mipmaps[0].height,
                    s,
                    e.mipmaps[0].data
                  )
                : Pt.texSubImage2D(Pt.TEXTURE_2D, i, t.x, t.y, s, o, e.image),
            0 === i && n.generateMipmaps && Pt.generateMipmap(Pt.TEXTURE_2D),
            ot.unbindTexture();
        }),
        (this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
          if (S.isWebGL1Renderer)
            return void console.warn(
              'THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.'
            );
          const a = Math.round(t.max.x - t.min.x),
            s = Math.round(t.max.y - t.min.y),
            o = t.max.z - t.min.z + 1,
            l = Rt.convert(i.format),
            c = Rt.convert(i.type);
          let h;
          if (i.isData3DTexture) dt.setTexture3D(i, 0), (h = Pt.TEXTURE_3D);
          else {
            if (!i.isDataArrayTexture && !i.isCompressedArrayTexture)
              return void console.warn(
                'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.'
              );
            dt.setTexture2DArray(i, 0), (h = Pt.TEXTURE_2D_ARRAY);
          }
          Pt.pixelStorei(Pt.UNPACK_FLIP_Y_WEBGL, i.flipY),
            Pt.pixelStorei(
              Pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              i.premultiplyAlpha
            ),
            Pt.pixelStorei(Pt.UNPACK_ALIGNMENT, i.unpackAlignment);
          const u = Pt.getParameter(Pt.UNPACK_ROW_LENGTH),
            d = Pt.getParameter(Pt.UNPACK_IMAGE_HEIGHT),
            p = Pt.getParameter(Pt.UNPACK_SKIP_PIXELS),
            f = Pt.getParameter(Pt.UNPACK_SKIP_ROWS),
            m = Pt.getParameter(Pt.UNPACK_SKIP_IMAGES),
            g = n.isCompressedTexture ? n.mipmaps[r] : n.image;
          Pt.pixelStorei(Pt.UNPACK_ROW_LENGTH, g.width),
            Pt.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT, g.height),
            Pt.pixelStorei(Pt.UNPACK_SKIP_PIXELS, t.min.x),
            Pt.pixelStorei(Pt.UNPACK_SKIP_ROWS, t.min.y),
            Pt.pixelStorei(Pt.UNPACK_SKIP_IMAGES, t.min.z),
            n.isDataTexture || n.isData3DTexture
              ? Pt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, g.data)
              : i.isCompressedArrayTexture
                ? Pt.compressedTexSubImage3D(
                    h,
                    r,
                    e.x,
                    e.y,
                    e.z,
                    a,
                    s,
                    o,
                    l,
                    g.data
                  )
                : Pt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, g),
            Pt.pixelStorei(Pt.UNPACK_ROW_LENGTH, u),
            Pt.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT, d),
            Pt.pixelStorei(Pt.UNPACK_SKIP_PIXELS, p),
            Pt.pixelStorei(Pt.UNPACK_SKIP_ROWS, f),
            Pt.pixelStorei(Pt.UNPACK_SKIP_IMAGES, m),
            0 === r && i.generateMipmaps && Pt.generateMipmap(h),
            ot.unbindTexture();
        }),
        (this.initTexture = function (t) {
          t.isCubeTexture
            ? dt.setTextureCube(t, 0)
            : t.isData3DTexture
              ? dt.setTexture3D(t, 0)
              : t.isDataArrayTexture || t.isCompressedArrayTexture
                ? dt.setTexture2DArray(t, 0)
                : dt.setTexture2D(t, 0),
            ot.unbindTexture();
        }),
        (this.resetState = function () {
          (T = 0), (y = 0), (b = null), ot.reset(), Ct.reset();
        }),
        'undefined' != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent('observe', { detail: this })
          );
    }
    get coordinateSystem() {
      return Ct;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(t) {
      this._outputColorSpace = t;
      const e = this.getContext();
      (e.drawingBufferColorSpace = t === dt ? 'display-p3' : 'srgb'),
        (e.unpackColorSpace =
          Qt.workingColorSpace === pt ? 'display-p3' : 'srgb');
    }
    get useLegacyLights() {
      return (
        console.warn(
          'THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.'
        ),
        this._useLegacyLights
      );
    }
    set useLegacyLights(t) {
      console.warn(
        'THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.'
      ),
        (this._useLegacyLights = t);
    }
  }
  (class extends Cs {}).prototype.isWebGL1Renderer = !0;
  class Ls extends xn {
    constructor() {
      super(),
        (this.isScene = !0),
        (this.type = 'Scene'),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.backgroundBlurriness = 0),
        (this.backgroundIntensity = 1),
        (this.backgroundRotation = new en()),
        (this.environmentRotation = new en()),
        (this.overrideMaterial = null),
        'undefined' != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent('observe', { detail: this })
          );
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        null !== t.background && (this.background = t.background.clone()),
        null !== t.environment && (this.environment = t.environment.clone()),
        null !== t.fog && (this.fog = t.fog.clone()),
        (this.backgroundBlurriness = t.backgroundBlurriness),
        (this.backgroundIntensity = t.backgroundIntensity),
        this.backgroundRotation.copy(t.backgroundRotation),
        this.environmentRotation.copy(t.environmentRotation),
        null !== t.overrideMaterial &&
          (this.overrideMaterial = t.overrideMaterial.clone()),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        null !== this.fog && (e.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 &&
          (e.object.backgroundBlurriness = this.backgroundBlurriness),
        1 !== this.backgroundIntensity &&
          (e.object.backgroundIntensity = this.backgroundIntensity),
        (e.object.backgroundRotation = this.backgroundRotation.toArray()),
        (e.object.environmentRotation = this.environmentRotation.toArray()),
        e
      );
    }
  }
  class Ps {
    constructor(t = !0) {
      (this.autoStart = t),
        (this.startTime = 0),
        (this.oldTime = 0),
        (this.elapsedTime = 0),
        (this.running = !1);
    }
    start() {
      (this.startTime = Us()),
        (this.oldTime = this.startTime),
        (this.elapsedTime = 0),
        (this.running = !0);
    }
    stop() {
      this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let t = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const e = Us();
        (t = (e - this.oldTime) / 1e3),
          (this.oldTime = e),
          (this.elapsedTime += t);
      }
      return t;
    }
  }
  function Us() {
    return ('undefined' == typeof performance ? Date : performance).now();
  }
  const Ds = new Xe();
  class Ns {
    constructor(t, e, n = 0, i = 1 / 0) {
      (this.ray = new We(t, e)),
        (this.near = n),
        (this.far = i),
        (this.camera = null),
        (this.layers = new nn()),
        (this.params = {
          Mesh: {},
          Line: { threshold: 1 },
          LOD: {},
          Points: { threshold: 1 },
          Sprite: {},
        });
    }
    set(t, e) {
      this.ray.set(t, e);
    }
    setFromCamera(t, e) {
      e.isPerspectiveCamera
        ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
          this.ray.direction
            .set(t.x, t.y, 0.5)
            .unproject(e)
            .sub(this.ray.origin)
            .normalize(),
          (this.camera = e))
        : e.isOrthographicCamera
          ? (this.ray.origin
              .set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
              .unproject(e),
            this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
            (this.camera = e))
          : console.error(
              'THREE.Raycaster: Unsupported camera type: ' + e.type
            );
    }
    setFromXRController(t) {
      return (
        Ds.identity().extractRotation(t.matrixWorld),
        this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction.set(0, 0, -1).applyMatrix4(Ds),
        this
      );
    }
    intersectObject(t, e = !0, n = []) {
      return Os(t, this, n, e), n.sort(Is), n;
    }
    intersectObjects(t, e = !0, n = []) {
      for (let i = 0, r = t.length; i < r; i++) Os(t[i], this, n, e);
      return n.sort(Is), n;
    }
  }
  function Is(t, e) {
    return t.distance - e.distance;
  }
  function Os(t, e, n, i) {
    if ((t.layers.test(e.layers) && t.raycast(e, n), !0 === i)) {
      const i = t.children;
      for (let t = 0, r = i.length; t < r; t++) Os(i[t], e, n, !0);
    }
  }
  let Fs, Bs, zs;
  'undefined' != typeof __THREE_DEVTOOLS__ &&
    __THREE_DEVTOOLS__.dispatchEvent(
      new CustomEvent('register', { detail: { revision: t } })
    ),
    'undefined' != typeof window &&
      (window.__THREE__
        ? console.warn(
            'WARNING: Multiple instances of Three.js being imported.'
          )
        : (window.__THREE__ = t));
  class Hs {
    constructor(t) {
      (this.krpano = t),
        console.log('App Class: krpano attribute: ', this.krpano),
        (this.renderer = null),
        (this.camera = null),
        (this.scene = null),
        (this.stereocamera = new bi()),
        (this.camera_hittest_raycaster = new Ns()),
        (this.krpano_panoview_euler = new en()),
        (this.clock = new Ps()),
        this.init();
    }
    init() {
      (Fs = new Ci(70, window.innerWidth / window.innerHeight, 0.01, 10)),
        (Fs.position.z = 4),
        (Bs = new Ls());
      const t = new xi(500, 500, 500),
        e = new zn({ side: 2, color: new In(16711680) }),
        n = new _i(t, e);
      Bs.add(n),
        (n.name = 'box'),
        this.initVideoPoints(),
        (zs = new Cs({
          canvas: krpano.webGL.canvas,
          context: krpano.webGL.context,
        })),
        (this.renderer = zs),
        (this.scene = Bs),
        (this.camera = Fs);
    }
    resolve_url_path(t) {
      return (
        '/' != t.charAt(0) &&
          t.indexOf('://') < 0 &&
          (t = this.krpano.parsepath(
            '%CURRENTXML%/plugin-threejs/three-jsm-master/assets/' + t
          )),
        t
      );
    }
    initVideoPoints() {
      console.log('SETUP VIDEOPOINTS'), this.initVideo();
    }
    initVideo() {}
  }
  !(function (t, e, n = 1e3) {
    const i = setInterval(function () {
      let n = null;
      'string' == typeof t
        ? ((n = window[t]),
          void 0 !== n
            ? (clearInterval(i), e(n))
            : ((n = document.querySelector(t)),
              n
                ? (clearInterval(i), e(n))
                : console.log(`Waiting for ${t} to be defined...`)))
        : console.error(
            'The parameter must be a string representing a global variable or an HTML element selector.'
          );
    }, n);
  })(
    'krpano',
    function (t) {
      const e = new Hs(t);
      (window.threejsm = e),
        console.log('execute threejsm project, app:  ', {
          appwindow: window.threejsm,
        });
    },
    1e3
  );
});
