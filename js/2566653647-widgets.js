(function () {
  var aa = "&action=",
    ca = ".wikipedia.org",
    da = "CSSStyleDeclaration",
    ea = "Clobbering detected",
    fa = "Edge",
    ha = "Element",
    ia = "GET",
    ja = "Never attached to DOM.",
    ka = "SPAN",
    la = "STYLE",
    ma = "SW_READER_LIST_",
    na = "SW_READER_LIST_CLOSED_",
    oa = "Share this post",
    pa = "Symbol.iterator",
    qa = "_blank",
    ra = "about:invalid#zClosurez",
    sa = "about:invalid#zSoyz",
    ta = "attributes",
    ua = "block",
    va = "chooseWidget",
    wa = "click",
    xa = "collapsed",
    ya = "collapsed-backlink",
    za = "collapsible",
    Aa = "comment-editor",
    Ba = "complete",
    Ca = "configure",
    Da = "contact-form-email",
    Ea = "contact-form-email-message",
    Fa = "contact-form-error-message",
    Ga = "contact-form-error-message-with-border",
    Ha = "contact-form-name",
    Ia = "contact-form-submit",
    Ja = "contact-form-success-message",
    Ka = "contact-form-success-message-with-border",
    La = "data-height",
    Ma = "data-sanitizer-",
    Na = "data-viewurl",
    Oa = "displayModeFull",
    Pa = "displayModeLayout",
    Qa = "displayModeNone",
    k = "div",
    Ra = "dropdown-toggle",
    Sa = "error",
    Ta = "expanded",
    Ua = "expanded-backlink",
    Va = "followers-grid",
    l = "function",
    Wa = "getAttribute",
    Xa = "getElementsByTagName",
    Ya = "getPropertyValue",
    Za = "hasAttribute",
    $a = "hidden",
    ab = "layout-widget-description",
    bb = "layout-widget-title",
    cb = "max-height: 0;",
    db = "msMatchesSelector",
    n = "none",
    eb = "number",
    p = "object",
    fb = "ready",
    gb = "removeAttribute",
    hb = "rotate(-45deg)",
    ib = "setAttribute",
    jb = "status-message",
    kb = "status-message-inner",
    q = "string",
    lb = "style",
    mb = "success",
    nb = "text/javascript",
    ob = "thread-collapsed",
    pb = "thread-expanded",
    qb = "toggle",
    sb = "visible",
    tb = "wikipedia-search-input",
    ub = "wikipedia-search-more",
    vb = "wikipedia-search-results",
    wb = "wikipedia-search-results-header",
    xb = "zClosurez",
    r;
  function yb(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var zb =
    typeof Object.defineProperties == l
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function Ab(a) {
    a = [
      p == typeof globalThis && globalThis,
      a,
      p == typeof window && window,
      p == typeof self && self,
      p == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var Bb = Ab(this);
  function Cb(a, b) {
    if (b)
      a: {
        var c = Bb;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          zb(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  Cb("Symbol", function (a) {
    function b(e) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c("jscomp_symbol_" + (e || "") + "_" + d++, e);
    }
    function c(e, f) {
      this.C = e;
      zb(this, "description", { configurable: !0, writable: !0, value: f });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.C;
    };
    var d = 0;
    return b;
  });
  Cb(pa, function (a) {
    if (a) return a;
    a = Symbol(pa);
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = Bb[b[c]];
      typeof d === l &&
        typeof d.prototype[a] != l &&
        zb(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return Db(yb(this));
          },
        });
    }
    return a;
  });
  function Db(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  var Eb =
      typeof Object.create == l
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    Fb;
  if (typeof Object.setPrototypeOf == l) Fb = Object.setPrototypeOf;
  else {
    var Gb;
    a: {
      var Hb = { a: !0 },
        Ib = {};
      try {
        Ib.__proto__ = Hb;
        Gb = Ib.a;
        break a;
      } catch (a) {}
      Gb = !1;
    }
    Fb = Gb
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var Jb = Fb;
  function u(a, b) {
    a.prototype = Eb(b.prototype);
    a.prototype.constructor = a;
    if (Jb) Jb(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.O = b.prototype;
  }
  Cb("String.prototype.endsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.endsWith must not be null or undefined"
            );
          if (b instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype.endsWith must not be a regular expression"
            );
          var d = this + "";
          b += "";
          void 0 === c && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; 0 < e && 0 < c; )
            if (d[--c] != b[--e]) return !1;
          return 0 >= e;
        };
  });
  function Kb(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  }
  Cb("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Kb(this, function (b) {
            return b;
          });
        };
  });
  Cb("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if (typeof f == l) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  function Lb(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  Cb("WeakMap", function (a) {
    function b(m) {
      this.ea = (h += Math.random() + 1).toString();
      if (m) {
        var t =
          "undefined" != typeof Symbol && Symbol.iterator && m[Symbol.iterator];
        for (m = t ? t.call(m) : { next: yb(m) }; !(t = m.next()).done; )
          (t = t.value), this.set(t[0], t[1]);
      }
    }
    function c() {}
    function d(m) {
      var t = typeof m;
      return (t === p && null !== m) || t === l;
    }
    function e(m) {
      if (!Lb(m, g)) {
        var t = new c();
        zb(m, g, { value: t });
      }
    }
    function f(m) {
      var t = Object[m];
      t &&
        (Object[m] = function (H) {
          if (H instanceof c) return H;
          Object.isExtensible(H) && e(H);
          return t(H);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var m = Object.seal({}),
            t = Object.seal({}),
            H = new a([
              [m, 2],
              [t, 3],
            ]);
          if (2 != H.get(m) || 3 != H.get(t)) return !1;
          H.delete(m);
          H.set(t, 4);
          return !H.has(m) && 4 == H.get(t);
        } catch (A) {
          return !1;
        }
      })()
    )
      return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function (m, t) {
      if (!d(m)) throw Error("Invalid WeakMap key");
      e(m);
      if (!Lb(m, g)) throw Error("WeakMap key fail: " + m);
      m[g][this.ea] = t;
      return this;
    };
    b.prototype.get = function (m) {
      return d(m) && Lb(m, g) ? m[g][this.ea] : void 0;
    };
    b.prototype.has = function (m) {
      return d(m) && Lb(m, g) && Lb(m[g], this.ea);
    };
    b.prototype.delete = function (m) {
      return d(m) && Lb(m, g) && Lb(m[g], this.ea) ? delete m[g][this.ea] : !1;
    };
    return b;
  });
  var Mb =
    typeof Object.assign == l
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Lb(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  Cb("Object.assign", function (a) {
    return a || Mb;
  });
  window.jstiming && window.jstiming.load.tick("widgetJsStart");
  function Nb() {
    window.jstiming.load.tick("ol");
  }
  function Ob(a, b) {
    a.addEventListener
      ? a.addEventListener("load", b, !1)
      : a.attachEvent("onload", b);
  }
  function Pb(a, b) {
    return a.className && -1 != a.className.indexOf(b)
      ? a
      : a.parentNode
      ? Pb(a.parentNode, b)
      : null;
  }
  function Qb() {
    window.jstiming.load.tick("prt");
    window.tickAboveFold && window.tickAboveFold(this);
  }
  window.BLOG_attachCsiOnload = function (a, b) {
    if (window.jstiming) {
      window.jstiming.load.tick("widgetJsEnd");
      window.jstiming.load.tick("prt");
      window.jstiming.load.name = a + "blogspot";
      a = document.getElementsByTagName("img");
      for (var c = 0; c < a.length; c++)
        a[c].complete
          ? null != Pb(a[c], "post") && Qb.apply(a[c])
          : null != Pb(a[c], "post") && Ob(a[c], Qb);
      Ob(window, Nb);
      a = function () {
        for (
          var d = {},
            e = window.blogger_blog_id,
            f = [
              "google_blogger_adsense_experiment_id",
              "blogger_csi_e",
              "blogger_templates_experiment_id",
              "blogger_active_experiments",
            ],
            g = [],
            h = f.length,
            m = 0;
          m < h;
          m++
        ) {
          var t = f[m];
          t in window && g.push(window[t]);
        }
        e && (d.blogId = e);
        0 < g.length && (d.e = g.join(","));
        e =
          ("https:" == document.location.protocol ? "https:" : "http:") +
          "//csi.gstatic.com/csi";
        window.jstiming.report(window.jstiming.load, d, b || e);
      };
      window.addEventListener
        ? window.addEventListener("beforeunload", a, !1)
        : window.attachEvent("onbeforeunload", a);
    }
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Rb = Rb || {},
    v = this || self;
  function Sb(a) {
    if (a && a != v) return Tb(a.document);
    null === Ub && (Ub = Tb(v.document));
    return Ub;
  }
  var Vb = /^[\w+/_-]+[=]{0,2}$/,
    Ub = null;
  function Tb(a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) &&
      (a = a.nonce || a.getAttribute("nonce")) &&
      Vb.test(a)
      ? a
      : "";
  }
  function Wb() {}
  function Xb(a) {
    a.zb = void 0;
    a.Aa = function () {
      return a.zb ? a.zb : (a.zb = new a());
    };
  }
  function Yb(a) {
    var b = typeof a;
    b = b != p ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    return "array" == b || (b == p && typeof a.length == eb);
  }
  function Zb(a) {
    var b = typeof a;
    return (b == p && null != a) || b == l;
  }
  var $b = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    ac = 0;
  function bc(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function cc(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function w(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (w = bc)
      : (w = cc);
    return w.apply(null, arguments);
  }
  function dc(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function x(a, b) {
    a = a.split(".");
    var c = v;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function y(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.O = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Kd = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  function ec(a) {
    return a;
  }
  function fc(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, fc);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  y(fc, Error);
  fc.prototype.name = "CustomError";
  var gc;
  function hc(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    fc.call(this, c + a[d]);
  }
  y(hc, fc);
  hc.prototype.name = "AssertionError";
  var ic = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if (typeof a === q)
            return typeof b !== q || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    z = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length, e = typeof a === q ? a.split("") : a, f = 0;
            f < d;
            f++
          )
            f in e && b.call(c, e[f], f, a);
        },
    jc = Array.prototype.filter
      ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = [],
              e = 0,
              f = typeof a === q ? a.split("") : a,
              g = 0;
            g < c;
            g++
          )
            if (g in f) {
              var h = f[g];
              b.call(void 0, h, g, a) && (d[e++] = h);
            }
          return d;
        },
    kc = Array.prototype.map
      ? function (a, b, c) {
          return Array.prototype.map.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length,
              e = Array(d),
              f = typeof a === q ? a.split("") : a,
              g = 0;
            g < d;
            g++
          )
            g in f && (e[g] = b.call(c, f[g], g, a));
          return e;
        },
    lc = Array.prototype.some
      ? function (a, b) {
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length, d = typeof a === q ? a.split("") : a, e = 0;
            e < c;
            e++
          )
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
  function mc(a) {
    a: {
      var b = nc;
      for (
        var c = a.length, d = typeof a === q ? a.split("") : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : typeof a === q ? a.charAt(b) : a[b];
  }
  function oc(a, b) {
    return 0 <= ic(a, b);
  }
  function pc(a) {
    if (!Array.isArray(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
  }
  function qc(a, b) {
    b = ic(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function rc(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function sc(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function tc(a, b, c, d) {
    Array.prototype.splice.apply(a, uc(arguments, 1));
  }
  function uc(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  }
  function vc(a) {
    if (!arguments.length) return [];
    for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
      arguments[d].length < c && (c = arguments[d].length);
    for (d = 0; d < c; d++) {
      for (var e = [], f = 0; f < arguments.length; f++)
        e.push(arguments[f][d]);
      b.push(e);
    }
    return b;
  }
  function wc(a, b) {
    return rc.apply([], kc(a, b, void 0));
  }
  function xc(a) {
    a = a.className;
    return (typeof a === q && a.match(/\S+/g)) || [];
  }
  function yc(a, b) {
    var c = xc(a),
      d = uc(arguments, 1);
    zc(c, d);
    a.className = c.join(" ");
  }
  function Ac(a, b) {
    var c = xc(a),
      d = uc(arguments, 1);
    c = Bc(c, d);
    a.className = c.join(" ");
  }
  function zc(a, b) {
    for (var c = 0; c < b.length; c++) oc(a, b[c]) || a.push(b[c]);
  }
  function Bc(a, b) {
    return jc(a, function (c) {
      return !oc(b, c);
    });
  }
  function Cc(a, b, c) {
    for (var d = xc(a), e = !1, f = 0; f < d.length; f++)
      d[f] == b && (tc(d, f--, 1), (e = !0));
    e && (d.push(c), (a.className = d.join(" ")));
  }
  function B(a, b) {
    return oc(xc(a), b);
  }
  function Dc(a) {
    return function () {
      return a;
    };
  }
  function Ec() {
    return null;
  }
  function Fc(a) {
    return a;
  }
  function Gc(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function Hc(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function Ic(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function Jc(a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  }
  function Kc(a) {
    for (var b in a) return !1;
    return !0;
  }
  function Lc(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  var Mc =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function Nc(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Mc.length; f++)
        (c = Mc[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Oc = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  var Pc;
  function Qc() {
    if (void 0 === Pc) {
      var a = null,
        b = v.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: ec,
            createScript: ec,
            createScriptURL: ec,
          });
        } catch (c) {
          v.console && v.console.error(c.message);
        }
        Pc = a;
      } else Pc = a;
    }
    return Pc;
  }
  function Rc(a, b) {
    this.C = (a === Sc && b) || "";
    this.F = Tc;
  }
  Rc.prototype.ka = !0;
  Rc.prototype.da = function () {
    return this.C;
  };
  function Uc(a) {
    return a instanceof Rc && a.constructor === Rc && a.F === Tc
      ? a.C
      : "type_error:Const";
  }
  function Vc(a) {
    return new Rc(Sc, a);
  }
  var Tc = {},
    Sc = {};
  var Wc = {};
  function Xc(a, b) {
    this.C = b === Wc ? a : "";
    this.ka = !0;
  }
  function Yc() {
    var a = Uc(
      Vc(
        '(function(){/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar e="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var g;a:{var k={a:!0},l={};try{l.__proto__=k;g=l.a;break a}catch(a){}g=!1}f=g?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}\nvar m=f,n=function(a,b){a.prototype=e(b.prototype);a.prototype.constructor=a;if(m)m(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.j=b.prototype};var p={};function q(a){if(a!==p)throw Error("Bad secret");};function r(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}var t;function u(){var a,b;void 0===t&&(t=null!==(b=null===(a=r())||void 0===a?void 0:a.createPolicy("google#safe",{createHTML:function(c){return c},createScript:function(c){return c},createScriptURL:function(c){return c}}))&&void 0!==b?b:null);return t};var v,w=function(){},x=function(a,b){q(b);this.h=a};n(x,w);x.prototype.toString=function(){return this.h.toString()};var y=null===(v=r())||void 0===v?void 0:v.emptyHTML;new x(null!==y&&void 0!==y?y:"",p);var z,A=function(){},B=function(a,b){q(b);this.i=a};n(B,A);B.prototype.toString=function(){return this.i.toString()};var C=null===(z=r())||void 0===z?void 0:z.emptyScript;new B(null!==C&&void 0!==C?C:"",p);var D=function(){},E=function(a,b){q(b);this.g=a};n(E,D);E.prototype.toString=function(){return this.g.toString()};function F(a){var b;if(null===(b=r())||void 0===b?0:b.isScriptURL(a))return a;if(a instanceof E)return a.g;throw Error("wrong type");};var G=void 0;function H(a){return(a=a.querySelector("script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}function I(a){var b=a.ownerDocument&&a.ownerDocument.defaultView;!b||"undefined"!==typeof window&&b===window?(void 0===G&&(G=H(document)),b=G):b=H(b.document);b&&a.setAttribute("nonce",b)};function J(a){var b,c=null===(b=u())||void 0===b?void 0:b.createScriptURL(a);return new E(null!==c&&void 0!==c?c:a,p)};if(!function(){if(self.origin)return"null"===self.origin;if(""!==location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}())throw Error("sandboxing error");\nwindow.addEventListener("message",function(a){var b=a.ports[0];a=a.data;var c=a.callbackName.split("."),d=window;"window"===c[0]&&c.unshift();for(var h=0;h<c.length-1;h++)d[c[h]]={},d=d[c[h]];d[c[c.length-1]]=function(K){b.postMessage(JSON.stringify(K))};c=document.createElement("script");a=J(a.url);c.src=F(a);I(c);document.body.appendChild(c)},!0);}).call(this);\n'
      )
    );
    return 0 === a.length ? Zc : $c(a);
  }
  Xc.prototype.da = function () {
    return this.C.toString();
  };
  function $c(a) {
    var b = Qc();
    a = b ? b.createScript(a) : a;
    return new Xc(a, Wc);
  }
  var Zc = $c("");
  function ad(a, b) {
    this.F = b === bd ? a : "";
  }
  ad.prototype.ka = !0;
  ad.prototype.da = function () {
    return this.F.toString();
  };
  ad.prototype.D = !0;
  ad.prototype.C = function () {
    return 1;
  };
  function cd(a) {
    return a instanceof ad && a.constructor === ad
      ? a.F
      : "type_error:TrustedResourceUrl";
  }
  var dd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    bd = {};
  function ed(a) {
    var b = Qc();
    a = b ? b.createScriptURL(a) : a;
    return new ad(a, bd);
  }
  function fd(a, b, c) {
    if (null == c) return b;
    if (typeof c === q) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b +=
              (b.length > a.length ? "&" : "") +
              encodeURIComponent(d) +
              "=" +
              encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  function gd(a, b) {
    return 0 == a.lastIndexOf(b, 0);
  }
  var C = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  function hd(a, b) {
    if (b)
      a = a
        .replace(id, "&amp;")
        .replace(jd, "&lt;")
        .replace(kd, "&gt;")
        .replace(ld, "&quot;")
        .replace(md, "&#39;")
        .replace(nd, "&#0;");
    else {
      if (!od.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(id, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(jd, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(kd, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(ld, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(md, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(nd, "&#0;"));
    }
    return a;
  }
  var id = /&/g,
    jd = /</g,
    kd = />/g,
    ld = /"/g,
    md = /'/g,
    nd = /\x00/g,
    od = /[\x00&<>"']/;
  function pd(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function E(a, b) {
    this.F = b === qd ? a : "";
  }
  E.prototype.ka = !0;
  E.prototype.da = function () {
    return this.F.toString();
  };
  E.prototype.D = !0;
  E.prototype.C = function () {
    return 1;
  };
  function rd(a) {
    return a instanceof E && a.constructor === E ? a.F : "type_error:SafeUrl";
  }
  var sd =
      /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    td = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    ud = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function vd(a) {
    if (!(a instanceof E))
      if (((a = typeof a == p && a.ka ? a.da() : String(a)), ud.test(a)))
        a = new E(a, qd);
      else {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(td);
        a = b && sd.test(b[1]) ? new E(a, qd) : null;
      }
    return a || wd;
  }
  var qd = {},
    wd = new E(ra, qd);
  function xd(a, b) {
    this.C = b === yd ? a : "";
  }
  xd.prototype.ka = !0;
  xd.prototype.da = function () {
    return this.C;
  };
  function zd(a) {
    return a instanceof xd && a.constructor === xd
      ? a.C
      : "type_error:SafeStyle";
  }
  var yd = {},
    Ad = new xd("", yd);
  function Bd(a) {
    var b = "",
      c;
    for (c in a)
      if (Object.prototype.hasOwnProperty.call(a, c)) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c))
          throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        null != d &&
          ((d = Array.isArray(d) ? kc(d, Cd).join(" ") : Cd(d)),
          (b += c + ":" + d + ";"));
      }
    return b ? new xd(b, yd) : Ad;
  }
  function Cd(a) {
    if (a instanceof E)
      return (
        'url("' + rd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'
      );
    a = a instanceof Rc ? Uc(a) : Dd(String(a));
    if (/[{;}]/.test(a))
      throw new hc("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }
  function Dd(a) {
    var b = a.replace(Ed, "$1").replace(Ed, "$1").replace(Fd, "url");
    if (Gd.test(b)) {
      if (Hd.test(a)) return xb;
      for (var c = (b = !0), d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
      }
      if (!b || !c || !Id(a)) return xb;
    } else return xb;
    return Jd(a);
  }
  function Id(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0;
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1;
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  var Gd = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    Fd =
      /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    Ed =
      /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    Hd = /\/\*/;
  function Jd(a) {
    return a.replace(Fd, function (b, c, d, e) {
      var f = "";
      d = d.replace(/^(['"])(.*)\1$/, function (g, h, m) {
        f = h;
        return m;
      });
      b = vd(d).da();
      return c + f + b + f + e;
    });
  }
  var Kd = {};
  function Ld(a, b) {
    this.C = b === Kd ? a : "";
    this.ka = !0;
  }
  function Md(a) {
    function b(d) {
      Array.isArray(d) ? z(d, b) : (c += Nd(d));
    }
    var c = "";
    z(arguments, b);
    return new Ld(c, Kd);
  }
  Ld.prototype.da = function () {
    return this.C;
  };
  function Nd(a) {
    return a instanceof Ld && a.constructor === Ld
      ? a.C
      : "type_error:SafeStyleSheet";
  }
  var Od = new Ld("", Kd);
  var Pd;
  a: {
    var Qd = v.navigator;
    if (Qd) {
      var Rd = Qd.userAgent;
      if (Rd) {
        Pd = Rd;
        break a;
      }
    }
    Pd = "";
  }
  function F(a) {
    return -1 != Pd.indexOf(a);
  }
  function Sd() {
    return (F("Chrome") || F("CriOS")) && !F(fa);
  }
  function Td(a, b, c) {
    this.F = c === Ud ? a : "";
    this.G = b;
  }
  Td.prototype.D = !0;
  Td.prototype.C = function () {
    return this.G;
  };
  Td.prototype.ka = !0;
  Td.prototype.da = function () {
    return this.F.toString();
  };
  function Vd(a) {
    return a instanceof Td && a.constructor === Td
      ? a.F
      : "type_error:SafeHtml";
  }
  function Wd(a) {
    if (a instanceof Td) return a;
    var b = typeof a == p,
      c = null;
    b && a.D && (c = a.C());
    return Xd(hd(b && a.ka ? a.da() : String(a)), c);
  }
  var Yd = /^[a-zA-Z0-9-]+$/,
    Zd = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    },
    $d = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    };
  function ae(a) {
    if (!Yd.test("body")) throw Error("");
    if ("BODY" in $d) throw Error("");
    return be("body", {}, a);
  }
  function ce(a) {
    var b = { nonce: Sb() };
    for (d in b)
      if (Object.prototype.hasOwnProperty.call(b, d)) {
        var c = d.toLowerCase();
        if ("language" == c || "src" == c || "text" == c || "type" == c)
          throw Error("");
      }
    var d = "";
    a = rc(a);
    for (c = 0; c < a.length; c++) {
      var e = a[c];
      d += (
        e instanceof Xc && e.constructor === Xc ? e.C : "type_error:SafeScript"
      ).toString();
    }
    a = Xd(d, 0);
    return be("script", b, a);
  }
  function de(a) {
    function b(f) {
      Array.isArray(f)
        ? z(f, b)
        : ((f = Wd(f)),
          e.push(Vd(f).toString()),
          (f = f.C()),
          0 == d ? (d = f) : 0 != f && d != f && (d = null));
    }
    var c = Wd(ee),
      d = c.C(),
      e = [];
    z(a, b);
    return Xd(e.join(Vd(c).toString()), d);
  }
  function fe(a) {
    return de(Array.prototype.slice.call(arguments));
  }
  var Ud = {};
  function Xd(a, b) {
    var c = Qc();
    a = c ? c.createHTML(a) : a;
    return new Td(a, b, Ud);
  }
  function be(a, b, c) {
    var d = null,
      e = "";
    if (b)
      for (h in b)
        if (Object.prototype.hasOwnProperty.call(b, h)) {
          if (!Yd.test(h)) throw Error("");
          var f = b[h];
          if (null != f) {
            var g = h;
            if (f instanceof Rc) f = Uc(f);
            else if (g.toLowerCase() == lb) {
              if (!Zb(f)) throw Error("");
              f instanceof xd || (f = Bd(f));
              f = zd(f);
            } else {
              if (/^on/i.test(g)) throw Error("");
              if (g.toLowerCase() in Zd)
                if (f instanceof ad) f = cd(f).toString();
                else if (f instanceof E) f = rd(f);
                else if (typeof f === q) f = vd(f).da();
                else throw Error("");
            }
            f.ka && (f = f.da());
            g = g + '="' + hd(String(f)) + '"';
            e += " " + g;
          }
        }
    var h = "<" + a + e;
    null == c ? (c = []) : Array.isArray(c) || (c = [c]);
    !0 === Oc[a.toLowerCase()]
      ? (h += ">")
      : ((d = fe(c)),
        (h += ">" + Vd(d).toString() + "</" + a + ">"),
        (d = d.C()));
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (d = 0) : (d = null));
    return Xd(h, d);
  }
  var ge = Xd("<!DOCTYPE html>", 0),
    ee = new Td((v.trustedTypes && v.trustedTypes.emptyHTML) || "", 0, Ud),
    he = Xd("<br>", 0);
  function ie(a, b, c) {
    Uc(a);
    Uc(a);
    return Xd(b, c || null);
  }
  function je(a) {
    var b = Vc("Output of CSS sanitizer");
    Uc(b);
    Uc(b);
    return new xd(a, yd);
  }
  function ke(a, b) {
    Uc(a);
    Uc(a);
    return ed(b);
  }
  var le = (function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  })(function () {
    var a = document.createElement(k),
      b = document.createElement(k);
    b.appendChild(document.createElement(k));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = Vd(ee);
    return !b.parentElement;
  });
  function G(a, b) {
    if (le()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = Vd(b);
  }
  function me(a, b) {
    a.src = cd(b);
    (b = Sb(a.ownerDocument && a.ownerDocument.defaultView)) &&
      a.setAttribute("nonce", b);
  }
  function ne(a) {
    oe();
    return Xd(a, null);
  }
  var oe = Wb;
  function pe() {
    return function (a) {
      return 500 <= qe(a)
        ? (a.responseText.length
            ? (document.body.innerHTML = a.responseText)
            : window.alert(LayoutsMessages.SERVER_ERROR),
          !1)
        : !0;
    };
  }
  function re(a, b) {
    var c = I,
      d = a.ownerDocument;
    b = b._GetHelper();
    var e = b._GetData(),
      f = c._GetAllData();
    a = se(d, a, k, "widget-wrap1");
    a = se(d, a, k, "widget-wrap2");
    a = se(d, a, k, "widget-wrap3");
    var g = se(d, a, k, "widget-content");
    if ((a = e.version && 1 < e.version))
      (g.className += " visibility"),
        se(
          d,
          g,
          k,
          "layout-widget-state " + (e.isVisible ? sb : "not-visible")
        ).setAttribute("title", e.visibilityTooltipMessage);
    var h = se(d, g, k, "layout-title");
    if (e[bb]) {
      var m = se(d, g, k, ab);
      m.appendChild(d.createTextNode(e[bb]));
      m.setAttribute("title", e[ab]);
    }
    h.appendChild(d.createTextNode(e["layout-title"]));
    e = se(d, g, "a", "editlink");
    var t = b._GenerateWidgetMetadata();
    e.setAttribute("href", t.quickEditUrl);
    e.target = va;
    e.onclick = function () {
      return c._PopupConfig(d.getElementById(t.instanceId));
    };
    a && (e.className += " icon");
    e.appendChild(d.createTextNode(f.messages.edit || "Edit"));
  }
  function se(a, b, c, d) {
    a = a.createElement(c);
    a.className = d;
    b.appendChild(a);
    return a;
  }
  function te(a) {
    return (a = hd(a, void 0));
  }
  var ue = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b);
      }
    : function (a, b) {
        return Array(b + 1).join(a);
      };
  function ve(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function we(a) {
    return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  function xe(a) {
    xe[" "](a);
    return a;
  }
  xe[" "] = Wb;
  function ye(a, b) {
    var c = ze;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  }
  var Ae = F("Opera"),
    J = F("Trident") || F("MSIE"),
    Be = F(fa),
    Ce =
      F("Gecko") &&
      !(-1 != Pd.toLowerCase().indexOf("webkit") && !F(fa)) &&
      !(F("Trident") || F("MSIE")) &&
      !F(fa),
    De = -1 != Pd.toLowerCase().indexOf("webkit") && !F(fa);
  function Ee() {
    var a = v.document;
    return a ? a.documentMode : void 0;
  }
  var Fe;
  a: {
    var Ge = "",
      He = (function () {
        var a = Pd;
        if (Ce) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Be) return /Edge\/([\d\.]+)/.exec(a);
        if (J) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (De) return /WebKit\/(\S+)/.exec(a);
        if (Ae) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    He && (Ge = He ? He[1] : "");
    if (J) {
      var Ie = Ee();
      if (null != Ie && Ie > parseFloat(Ge)) {
        Fe = String(Ie);
        break a;
      }
    }
    Fe = Ge;
  }
  var Je = Fe,
    ze = {};
  function Ke(a) {
    return ye(a, function () {
      for (
        var b = 0,
          c = C(String(Je)).split("."),
          d = C(String(a)).split("."),
          e = Math.max(c.length, d.length),
          f = 0;
        0 == b && f < e;
        f++
      ) {
        var g = c[f] || "",
          h = d[f] || "";
        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == g[0].length && 0 == h[0].length) break;
          b =
            pd(
              0 == g[1].length ? 0 : parseInt(g[1], 10),
              0 == h[1].length ? 0 : parseInt(h[1], 10)
            ) ||
            pd(0 == g[2].length, 0 == h[2].length) ||
            pd(g[2], h[2]);
          g = g[3];
          h = h[3];
        } while (0 == b);
      }
      return 0 <= b;
    });
  }
  var Le;
  if (v.document && J) {
    var Me = Ee();
    Le = Me ? Me : parseInt(Je, 10) || void 0;
  } else Le = void 0;
  var Ne = Le;
  try {
    new self.OffscreenCanvas(0, 0).getContext("2d");
  } catch (a) {}
  var Oe = !J || 9 <= Number(Ne),
    Pe = J && !Ke("9"),
    Qe = J || Ae || De;
  function Re(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  }
  Re.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  Re.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  Re.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  function Se(a, b) {
    this.width = a;
    this.height = b;
  }
  r = Se.prototype;
  r.aspectRatio = function () {
    return this.width / this.height;
  };
  r.ia = function () {
    return !(this.width * this.height);
  };
  r.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  r.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  r.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function K(a) {
    return Te(document, a);
  }
  function Te(a, b) {
    return typeof b === q ? a.getElementById(b) : b;
  }
  function Ue(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector
      ? c.querySelectorAll("." + a)
      : Ve(document, "*", a, b);
  }
  function L(a, b) {
    var c = b || document;
    if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
    else {
      c = document;
      var d = b || c;
      a =
        d.querySelectorAll && d.querySelector && a
          ? d.querySelector(a ? "." + a : "")
          : Ve(c, "*", a, b)[0] || null;
    }
    return a || null;
  }
  function Ve(a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c))
      return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var e = 0, f = 0, g; (g = a[f]); f++)
          b == g.nodeName && (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (f = e = 0; (g = a[f]); f++)
        (b = g.className),
          typeof b.split == l && oc(b.split(/\s+/), c) && (d[e++] = g);
      d.length = e;
      return d;
    }
    return a;
  }
  function We(a, b) {
    Gc(b, function (c, d) {
      c && typeof c == p && c.ka && (c = c.da());
      d == lb
        ? (a.style.cssText = c)
        : "class" == d
        ? (a.className = c)
        : "for" == d
        ? (a.htmlFor = c)
        : Xe.hasOwnProperty(d)
        ? a.setAttribute(Xe[d], c)
        : gd(d, "aria-") || gd(d, "data-")
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  }
  var Xe = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  };
  function Ye(a, b, c) {
    return Ze(document, arguments);
  }
  function Ze(a, b) {
    var c = String(b[0]),
      d = b[1];
    if (!Oe && d && (d.name || d.type)) {
      c = ["<", c];
      d.name && c.push(' name="', te(d.name), '"');
      if (d.type) {
        c.push(' type="', te(d.type), '"');
        var e = {};
        Nc(e, d);
        delete e.type;
        d = e;
      }
      c.push(">");
      c = c.join("");
    }
    c = $e(a, c);
    d &&
      (typeof d === q
        ? (c.className = d)
        : Array.isArray(d)
        ? (c.className = d.join(" "))
        : We(c, d));
    2 < b.length && af(a, c, b);
    return c;
  }
  function af(a, b, c) {
    function d(h) {
      h && b.appendChild(typeof h === q ? a.createTextNode(h) : h);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      if (!Yb(f) || (Zb(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && typeof f.length == eb) {
            if (Zb(f)) {
              var g = typeof f.item == l || typeof f.item == q;
              break a;
            }
            if (typeof f === l) {
              g = typeof f.item == l;
              break a;
            }
          }
          g = !1;
        }
        z(g ? sc(f) : f, d);
      }
    }
  }
  function $e(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }
  function bf(a) {
    for (var b; (b = a.firstChild); ) a.removeChild(b);
  }
  function cf(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  }
  function df(a) {
    var b;
    if (
      Qe &&
      !(
        J &&
        Ke("9") &&
        !Ke("10") &&
        v.SVGElement &&
        a instanceof v.SVGElement
      ) &&
      (b = a.parentElement)
    )
      return b;
    b = a.parentNode;
    return Zb(b) && 1 == b.nodeType ? b : null;
  }
  function gf(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
      a.firstChild.data = String(b);
    } else
      bf(a),
        a.appendChild(
          (9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(
            String(b)
          )
        );
  }
  var hf = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    jf = { IMG: " ", BR: "\n" };
  function kf(a, b, c) {
    if (!(a.nodeName in hf))
      if (3 == a.nodeType)
        c
          ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
          : b.push(a.nodeValue);
      else if (a.nodeName in jf) b.push(jf[a.nodeName]);
      else for (a = a.firstChild; a; ) kf(a, b, c), (a = a.nextSibling);
  }
  function lf(a, b, c, d) {
    if (!b && !c) return null;
    var e = b ? String(b).toUpperCase() : null;
    return mf(
      a,
      function (f) {
        return (
          (!e || f.nodeName == e) &&
          (!c || (typeof f.className === q && oc(f.className.split(/\s+/), c)))
        );
      },
      d
    );
  }
  function mf(a, b, c) {
    for (var d = 0; a && (null == c || d <= c); ) {
      if (b(a)) return a;
      a = a.parentNode;
      d++;
    }
    return null;
  }
  function nf() {
    this.D = v.document || document;
  }
  nf.prototype.Ra = function () {
    return Te(this.D, void 0);
  };
  nf.prototype.C = function (a, b, c) {
    return Ze(this.D, arguments);
  };
  nf.prototype.appendChild = function (a, b) {
    a.appendChild(b);
  };
  nf.prototype.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  function of() {
    this.J = this.J;
    this.ga = this.ga;
  }
  of.prototype.J = !1;
  of.prototype.ua = function () {
    this.J || ((this.J = !0), this.W());
  };
  of.prototype.W = function () {
    if (this.ga) for (; this.ga.length; ) this.ga.shift()();
  };
  var pf = !J || 9 <= Number(Ne),
    qf = J && !Ke("9"),
    rf = (function () {
      if (!v.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
      try {
        v.addEventListener("test", Wb, b), v.removeEventListener("test", Wb, b);
      } catch (c) {}
      return a;
    })();
  function sf(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.va = !1;
  }
  sf.prototype.stopPropagation = function () {
    this.va = !0;
  };
  sf.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  function tf(a, b) {
    sf.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.C = null;
    a && this.init(a, b);
  }
  y(tf, sf);
  var uf = { 2: "touch", 3: "pen", 4: "mouse" };
  tf.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if ((b = a.relatedTarget)) {
      if (Ce) {
        a: {
          try {
            xe(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {}
          e = !1;
        }
        e || (b = null);
      }
    } else
      "mouseover" == c
        ? (b = a.fromElement)
        : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.offsetX = De || void 0 !== a.offsetX ? a.offsetX : a.layerX),
        (this.offsetY = De || void 0 !== a.offsetY ? a.offsetY : a.layerY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType =
      typeof a.pointerType === q ? a.pointerType : uf[a.pointerType] || "";
    this.state = a.state;
    this.C = a;
    a.defaultPrevented && this.preventDefault();
  };
  tf.prototype.stopPropagation = function () {
    tf.O.stopPropagation.call(this);
    this.C.stopPropagation
      ? this.C.stopPropagation()
      : (this.C.cancelBubble = !0);
  };
  tf.prototype.preventDefault = function () {
    tf.O.preventDefault.call(this);
    var a = this.C;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), qf))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var vf = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  function wf(a) {
    return !(!a || !a[vf]);
  }
  var xf = 0;
  function yf(a, b, c, d, e) {
    this.listener = a;
    this.C = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Va = e;
    this.key = ++xf;
    this.Ba = this.Pa = !1;
  }
  function zf(a) {
    a.Ba = !0;
    a.listener = null;
    a.C = null;
    a.src = null;
    a.Va = null;
  }
  function Af(a) {
    this.src = a;
    this.C = {};
    this.D = 0;
  }
  Af.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.C[f];
    a || ((a = this.C[f] = []), this.D++);
    var g = Bf(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.Pa = !1))
      : ((b = new yf(b, this.src, f, !!d, e)), (b.Pa = c), a.push(b));
    return b;
  };
  function Cf(a, b) {
    var c = b.type;
    if (!(c in a.C)) return !1;
    var d = qc(a.C[c], b);
    d && (zf(b), 0 == a.C[c].length && (delete a.C[c], a.D--));
    return d;
  }
  function Df(a) {
    var b = 0,
      c;
    for (c in a.C) {
      for (var d = a.C[c], e = 0; e < d.length; e++) ++b, zf(d[e]);
      delete a.C[c];
      a.D--;
    }
  }
  function Ef(a, b, c, d, e) {
    a = a.C[b.toString()];
    b = -1;
    a && (b = Bf(a, c, d, e));
    return -1 < b ? a[b] : null;
  }
  function Bf(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Ba && f.listener == b && f.capture == !!c && f.Va == d) return e;
    }
    return -1;
  }
  var Ff = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Gf = {},
    Hf = 0;
  function N(a, b, c, d, e) {
    if (d && d.once) return If(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) N(a, b[f], c, d, e);
      return null;
    }
    c = Jf(c);
    wf(a)
      ? (f = a.ca.add(String(b), c, !1, Zb(d) ? !!d.capture : !!d, e))
      : (f = Kf(a, b, c, !1, d, e));
    return f;
  }
  function Kf(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = Zb(e) ? !!e.capture : !!e,
      h = Lf(a);
    h || (a[Ff] = h = new Af(a));
    c = h.add(b, c, d, g, f);
    if (c.C) return c;
    d = Mf();
    c.C = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      rf || (e = g),
        void 0 === e && (e = !1),
        a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Nf(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Hf++;
    return c;
  }
  function Mf() {
    var a = Of,
      b = pf
        ? function (c) {
            return a.call(b.src, b.listener, c);
          }
        : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
    return b;
  }
  function If(a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) If(a, b[f], c, d, e);
      return null;
    }
    c = Jf(c);
    return wf(a)
      ? a.ca.add(String(b), c, !0, Zb(d) ? !!d.capture : !!d, e)
      : Kf(a, b, c, !0, d, e);
  }
  function Pf(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) Pf(a, b[f], c, d, e);
    else
      (d = Zb(d) ? !!d.capture : !!d),
        (c = Jf(c)),
        wf(a)
          ? ((a = a.ca),
            (b = String(b).toString()),
            b in a.C &&
              ((f = a.C[b]),
              (c = Bf(f, c, d, e)),
              -1 < c &&
                (zf(f[c]),
                Array.prototype.splice.call(f, c, 1),
                0 == f.length && (delete a.C[b], a.D--))))
          : a && (a = Lf(a)) && (c = Ef(a, b, c, d, e)) && Qf(c);
  }
  function Qf(a) {
    if (typeof a === eb || !a || a.Ba) return !1;
    var b = a.src;
    if (wf(b)) return Cf(b.ca, a);
    var c = a.type,
      d = a.C;
    b.removeEventListener
      ? b.removeEventListener(c, d, a.capture)
      : b.detachEvent
      ? b.detachEvent(Nf(c), d)
      : b.addListener && b.removeListener && b.removeListener(d);
    Hf--;
    (c = Lf(b))
      ? (Cf(c, a), 0 == c.D && ((c.src = null), (b[Ff] = null)))
      : zf(a);
    return !0;
  }
  function Rf(a) {
    if (a)
      if (wf(a)) a.ca && Df(a.ca);
      else if ((a = Lf(a))) {
        var b = 0,
          c;
        for (c in a.C)
          for (var d = a.C[c].concat(), e = 0; e < d.length; ++e)
            Qf(d[e]) && ++b;
      }
  }
  function Nf(a) {
    return a in Gf ? Gf[a] : (Gf[a] = "on" + a);
  }
  function Sf(a, b, c, d) {
    var e = !0;
    if ((a = Lf(a)))
      if ((b = a.C[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var f = b[a];
          f && f.capture == c && !f.Ba && ((f = Tf(f, d)), (e = e && !1 !== f));
        }
    return e;
  }
  function Tf(a, b) {
    var c = a.listener,
      d = a.Va || a.src;
    a.Pa && Qf(a);
    return c.call(d, b);
  }
  function Of(a, b) {
    if (a.Ba) return !0;
    if (!pf) {
      if (!b)
        a: {
          b = ["window", "event"];
          for (var c = v, d = 0; d < b.length; d++)
            if (((c = c[b[d]]), null == c)) {
              b = null;
              break a;
            }
          b = c;
        }
      d = b;
      b = new tf(d, this);
      c = !0;
      if (!(0 > d.keyCode || void 0 != d.returnValue)) {
        a: {
          var e = !1;
          if (0 == d.keyCode)
            try {
              d.keyCode = -1;
              break a;
            } catch (g) {
              e = !0;
            }
          if (e || void 0 == d.returnValue) d.returnValue = !0;
        }
        d = [];
        for (e = b.currentTarget; e; e = e.parentNode) d.push(e);
        a = a.type;
        for (e = d.length - 1; !b.va && 0 <= e; e--) {
          b.currentTarget = d[e];
          var f = Sf(d[e], a, !0, b);
          c = c && f;
        }
        for (e = 0; !b.va && e < d.length; e++)
          (b.currentTarget = d[e]), (f = Sf(d[e], a, !1, b)), (c = c && f);
      }
      return c;
    }
    return Tf(a, new tf(b, this));
  }
  function Lf(a) {
    a = a[Ff];
    return a instanceof Af ? a : null;
  }
  var Uf = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function Jf(a) {
    if (typeof a === l) return a;
    a[Uf] ||
      (a[Uf] = function (b) {
        return a.handleEvent(b);
      });
    return a[Uf];
  }
  function Vf(a) {
    of.call(this);
    this.D = a;
    this.C = {};
  }
  y(Vf, of);
  var Wf = [];
  function Xf(a, b, c, d) {
    Array.isArray(c) || (c && (Wf[0] = c.toString()), (c = Wf));
    for (var e = 0; e < c.length; e++) {
      var f = N(b, c[e], d || a.handleEvent, !1, a.D || a);
      if (!f) break;
      a.C[f.key] = f;
    }
  }
  function Yf(a, b, c, d, e, f) {
    if (Array.isArray(c))
      for (var g = 0; g < c.length; g++) Yf(a, b, c[g], d, e, f);
    else
      (d = d || a.handleEvent),
        (e = Zb(e) ? !!e.capture : !!e),
        (f = f || a.D || a),
        (d = Jf(d)),
        (e = !!e),
        (c = wf(b)
          ? Ef(b.ca, String(c), d, e, f)
          : b
          ? (b = Lf(b))
            ? Ef(b, c, d, e, f)
            : null
          : null),
        c && (Qf(c), delete a.C[c.key]);
  }
  function Zf(a) {
    Gc(
      a.C,
      function (b, c) {
        this.C.hasOwnProperty(c) && Qf(b);
      },
      a
    );
    a.C = {};
  }
  Vf.prototype.W = function () {
    Vf.O.W.call(this);
    Zf(this);
  };
  Vf.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function $f() {
    of.call(this);
    this.ca = new Af(this);
    this.$c = this;
    this.gb = null;
  }
  y($f, of);
  $f.prototype[vf] = !0;
  $f.prototype.addEventListener = function (a, b, c, d) {
    N(this, a, b, c, d);
  };
  $f.prototype.removeEventListener = function (a, b, c, d) {
    Pf(this, a, b, c, d);
  };
  function O(a, b) {
    var c = a.gb;
    if (c) {
      var d = [];
      for (var e = 1; c; c = c.gb) d.push(c), ++e;
    }
    a = a.$c;
    c = b.type || b;
    typeof b === q
      ? (b = new sf(b, a))
      : b instanceof sf
      ? (b.target = b.target || a)
      : ((e = b), (b = new sf(c, a)), Nc(b, e));
    e = !0;
    if (d)
      for (var f = d.length - 1; !b.va && 0 <= f; f--) {
        var g = (b.currentTarget = d[f]);
        e = ag(g, c, !0, b) && e;
      }
    b.va ||
      ((g = b.currentTarget = a),
      (e = ag(g, c, !0, b) && e),
      b.va || (e = ag(g, c, !1, b) && e));
    if (d)
      for (f = 0; !b.va && f < d.length; f++)
        (g = b.currentTarget = d[f]), (e = ag(g, c, !1, b) && e);
  }
  $f.prototype.W = function () {
    $f.O.W.call(this);
    this.ca && Df(this.ca);
    this.gb = null;
  };
  function ag(a, b, c, d) {
    b = a.ca.C[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Ba && g.capture == c) {
        var h = g.listener,
          m = g.Va || g.src;
        g.Pa && Cf(a.ca, g);
        e = !1 !== h.call(m, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function bg(a, b) {
    this.F = a;
    this.G = b;
    this.D = 0;
    this.C = null;
  }
  bg.prototype.get = function () {
    if (0 < this.D) {
      this.D--;
      var a = this.C;
      this.C = a.next;
      a.next = null;
    } else a = this.F();
    return a;
  };
  function cg(a, b) {
    a.G(b);
    100 > a.D && (a.D++, (b.next = a.C), (a.C = b));
  }
  function dg(a) {
    v.setTimeout(function () {
      throw a;
    }, 0);
  }
  var eg;
  function fg() {
    var a = v.MessageChannel;
    "undefined" === typeof a &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !F("Presto") &&
      (a = function () {
        var e = $e(document, "IFRAME");
        e.style.display = n;
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var g = "callImmediate" + Math.random(),
          h =
            "file:" == f.location.protocol
              ? "*"
              : f.location.protocol + "//" + f.location.host;
        e = w(function (m) {
          if (("*" == h || m.origin == h) && m.data == g)
            this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, h);
          },
        };
      });
    if ("undefined" !== typeof a && !F("Trident") && !F("MSIE")) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.Rb;
          c.Rb = null;
          e();
        }
      };
      return function (e) {
        d.next = { Rb: e };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function (e) {
      v.setTimeout(e, 0);
    };
  }
  function gg() {
    this.D = this.C = null;
  }
  gg.prototype.add = function (a, b) {
    var c = hg.get();
    c.set(a, b);
    this.D ? (this.D.next = c) : (this.C = c);
    this.D = c;
  };
  function ig() {
    var a = jg,
      b = null;
    a.C && ((b = a.C), (a.C = a.C.next), a.C || (a.D = null), (b.next = null));
    return b;
  }
  var hg = new bg(
    function () {
      return new kg();
    },
    function (a) {
      return a.reset();
    }
  );
  function kg() {
    this.next = this.D = this.C = null;
  }
  kg.prototype.set = function (a, b) {
    this.C = a;
    this.D = b;
    this.next = null;
  };
  kg.prototype.reset = function () {
    this.next = this.D = this.C = null;
  };
  function lg(a, b) {
    mg || ng();
    og || (mg(), (og = !0));
    jg.add(a, b);
  }
  var mg;
  function ng() {
    if (v.Promise && v.Promise.resolve) {
      var a = v.Promise.resolve(void 0);
      mg = function () {
        a.then(pg);
      };
    } else
      mg = function () {
        var b = pg;
        typeof v.setImmediate !== l ||
        (v.Window &&
          v.Window.prototype &&
          !F(fa) &&
          v.Window.prototype.setImmediate == v.setImmediate)
          ? (eg || (eg = fg()), eg(b))
          : v.setImmediate(b);
      };
  }
  var og = !1,
    jg = new gg();
  function pg() {
    for (var a; (a = ig()); ) {
      try {
        a.C.call(a.D);
      } catch (b) {
        dg(b);
      }
      cg(hg, a);
    }
    og = !1;
  }
  function qg(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  }
  function rg(a) {
    this.C = 0;
    this.L = void 0;
    this.G = this.D = this.F = null;
    this.J = this.K = !1;
    if (a != Wb)
      try {
        var b = this;
        a.call(
          void 0,
          function (c) {
            sg(b, 2, c);
          },
          function (c) {
            sg(b, 3, c);
          }
        );
      } catch (c) {
        sg(this, 3, c);
      }
  }
  function tg() {
    this.next = this.F = this.D = this.G = this.C = null;
    this.J = !1;
  }
  tg.prototype.reset = function () {
    this.F = this.D = this.G = this.C = null;
    this.J = !1;
  };
  var ug = new bg(
    function () {
      return new tg();
    },
    function (a) {
      a.reset();
    }
  );
  function vg(a, b, c) {
    var d = ug.get();
    d.G = a;
    d.D = b;
    d.F = c;
    return d;
  }
  function wg() {
    var a,
      b,
      c = new rg(function (d, e) {
        a = d;
        b = e;
      });
    return new xg(c, a, b);
  }
  rg.prototype.then = function (a, b, c) {
    return yg(this, typeof a === l ? a : null, typeof b === l ? b : null, c);
  };
  rg.prototype.$goog_Thenable = !0;
  rg.prototype.cancel = function (a) {
    if (0 == this.C) {
      var b = new zg(a);
      lg(function () {
        Ag(this, b);
      }, this);
    }
  };
  function Ag(a, b) {
    if (0 == a.C)
      if (a.F) {
        var c = a.F;
        if (c.D) {
          for (
            var d = 0, e = null, f = null, g = c.D;
            g && (g.J || (d++, g.C == a && (e = g), !(e && 1 < d)));
            g = g.next
          )
            e || (f = g);
          e &&
            (0 == c.C && 1 == d
              ? Ag(c, b)
              : (f
                  ? ((d = f),
                    d.next == c.G && (c.G = d),
                    (d.next = d.next.next))
                  : Bg(c),
                Cg(c, e, 3, b)));
        }
        a.F = null;
      } else sg(a, 3, b);
  }
  function Dg(a, b) {
    a.D || (2 != a.C && 3 != a.C) || Eg(a);
    a.G ? (a.G.next = b) : (a.D = b);
    a.G = b;
  }
  function yg(a, b, c, d) {
    var e = vg(null, null, null);
    e.C = new rg(function (f, g) {
      e.G = b
        ? function (h) {
            try {
              var m = b.call(d, h);
              f(m);
            } catch (t) {
              g(t);
            }
          }
        : f;
      e.D = c
        ? function (h) {
            try {
              var m = c.call(d, h);
              void 0 === m && h instanceof zg ? g(h) : f(m);
            } catch (t) {
              g(t);
            }
          }
        : g;
    });
    e.C.F = a;
    Dg(a, e);
    return e.C;
  }
  rg.prototype.R = function (a) {
    this.C = 0;
    sg(this, 2, a);
  };
  rg.prototype.V = function (a) {
    this.C = 0;
    sg(this, 3, a);
  };
  function sg(a, b, c) {
    if (0 == a.C) {
      a === c &&
        ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
      a.C = 1;
      a: {
        var d = c,
          e = a.R,
          f = a.V;
        if (d instanceof rg) {
          Dg(d, vg(e || Wb, f || null, a));
          var g = !0;
        } else if (qg(d)) d.then(e, f, a), (g = !0);
        else {
          if (Zb(d))
            try {
              var h = d.then;
              if (typeof h === l) {
                Fg(d, h, e, f, a);
                g = !0;
                break a;
              }
            } catch (m) {
              f.call(a, m);
              g = !0;
              break a;
            }
          g = !1;
        }
      }
      g ||
        ((a.L = c),
        (a.C = b),
        (a.F = null),
        Eg(a),
        3 != b || c instanceof zg || Gg(a, c));
    }
  }
  function Fg(a, b, c, d, e) {
    function f(m) {
      h || ((h = !0), d.call(e, m));
    }
    function g(m) {
      h || ((h = !0), c.call(e, m));
    }
    var h = !1;
    try {
      b.call(a, g, f);
    } catch (m) {
      f(m);
    }
  }
  function Eg(a) {
    a.K || ((a.K = !0), lg(a.M, a));
  }
  function Bg(a) {
    var b = null;
    a.D && ((b = a.D), (a.D = b.next), (b.next = null));
    a.D || (a.G = null);
    return b;
  }
  rg.prototype.M = function () {
    for (var a; (a = Bg(this)); ) Cg(this, a, this.C, this.L);
    this.K = !1;
  };
  function Cg(a, b, c, d) {
    if (3 == c && b.D && !b.J) for (; a && a.J; a = a.F) a.J = !1;
    if (b.C) (b.C.F = null), Hg(b, c, d);
    else
      try {
        b.J ? b.G.call(b.F) : Hg(b, c, d);
      } catch (e) {
        Ig.call(null, e);
      }
    cg(ug, b);
  }
  function Hg(a, b, c) {
    2 == b ? a.G.call(a.F, c) : a.D && a.D.call(a.F, c);
  }
  function Gg(a, b) {
    a.J = !0;
    lg(function () {
      a.J && Ig.call(null, b);
    });
  }
  var Ig = dg;
  function zg(a) {
    fc.call(this, a);
  }
  y(zg, fc);
  zg.prototype.name = "cancel";
  function xg(a, b, c) {
    this.promise = a;
    this.D = b;
    this.C = c;
  }
  function Jg(a, b) {
    $f.call(this);
    this.D = a || 1;
    this.C = b || v;
    this.F = w(this.Id, this);
    this.G = Date.now();
  }
  y(Jg, $f);
  r = Jg.prototype;
  r.Ta = !1;
  r.ma = null;
  r.Id = function () {
    if (this.Ta) {
      var a = Date.now() - this.G;
      0 < a && a < 0.8 * this.D
        ? (this.ma = this.C.setTimeout(this.F, this.D - a))
        : (this.ma && (this.C.clearTimeout(this.ma), (this.ma = null)),
          O(this, "tick"),
          this.Ta && (Kg(this), this.start()));
    }
  };
  r.start = function () {
    this.Ta = !0;
    this.ma ||
      ((this.ma = this.C.setTimeout(this.F, this.D)), (this.G = Date.now()));
  };
  function Kg(a) {
    a.Ta = !1;
    a.ma && (a.C.clearTimeout(a.ma), (a.ma = null));
  }
  r.W = function () {
    Jg.O.W.call(this);
    Kg(this);
    delete this.C;
  };
  function Lg(a, b, c) {
    if (typeof a === l) c && (a = w(a, c));
    else if (a && typeof a.handleEvent == l) a = w(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0);
  }
  function Mg() {
    this.K = {};
    this.C = {};
    this.F = {};
    this.G = null;
    this.D = [];
  }
  Xb(Mg);
  function Ng(a) {
    var b = Mg.Aa(),
      c = b.K,
      d = b.C;
    d.lightbox
      ? a(d.lightbox[1])
      : c.lightbox
      ? c.lightbox.push([1, a])
      : ((c.lightbox = [[1, a]]),
        typeof b.G === q ? Og(b, "lightbox") : b.D.push("lightbox"));
  }
  function Pg() {
    return function () {
      var a = arguments;
      Ng(function (b) {
        b.apply(null, a);
      });
    };
  }
  Mg.prototype.J = function (a, b) {
    return a + "_" + b + ".js";
  };
  function Qg(a) {
    eval(a);
  }
  Mg.prototype.init = function (a, b) {
    x("__gjsload__", Qg);
    this.G = a.replace(/\.js$/, "");
    b && (this.J = b);
    z(
      this.D,
      function (c) {
        Og(this, c);
      },
      this
    );
    pc(this.D);
  };
  function Og(a, b) {
    Lg(
      function () {
        if (!this.C[b]) {
          var c = this.J(this.G, b),
            d = Jc(this.F, c);
          this.F[b] = c;
          d ||
            ((d = Ye("SCRIPT", { type: nb })),
            oe(),
            (c = ed(c)),
            me(d, c),
            document.body.appendChild(d));
        }
      },
      0,
      a
    );
  }
  var Rg =
    "StopIteration" in v
      ? v.StopIteration
      : { message: "StopIteration", stack: "" };
  function Sg() {}
  Sg.prototype.next = function () {
    throw Rg;
  };
  Sg.prototype.hb = function () {
    return this;
  };
  function Tg(a, b) {
    this.C = {};
    this.D = [];
    this.G = this.F = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof Tg)
        for (c = a.ha(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  }
  r = Tg.prototype;
  r.T = function () {
    return this.F;
  };
  r.X = function () {
    Ug(this);
    for (var a = [], b = 0; b < this.D.length; b++) a.push(this.C[this.D[b]]);
    return a;
  };
  r.ha = function () {
    Ug(this);
    return this.D.concat();
  };
  r.ia = function () {
    return 0 == this.F;
  };
  function Vg(a, b) {
    return Wg(a.C, b)
      ? (delete a.C[b], a.F--, a.G++, a.D.length > 2 * a.F && Ug(a), !0)
      : !1;
  }
  function Ug(a) {
    if (a.F != a.D.length) {
      for (var b = 0, c = 0; b < a.D.length; ) {
        var d = a.D[b];
        Wg(a.C, d) && (a.D[c++] = d);
        b++;
      }
      a.D.length = c;
    }
    if (a.F != a.D.length) {
      var e = {};
      for (c = b = 0; b < a.D.length; )
        (d = a.D[b]), Wg(e, d) || ((a.D[c++] = d), (e[d] = 1)), b++;
      a.D.length = c;
    }
  }
  r.get = function (a, b) {
    return Wg(this.C, a) ? this.C[a] : b;
  };
  r.set = function (a, b) {
    Wg(this.C, a) || (this.F++, this.D.push(a), this.G++);
    this.C[a] = b;
  };
  r.forEach = function (a, b) {
    for (var c = this.ha(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  r.hb = function (a) {
    Ug(this);
    var b = 0,
      c = this.G,
      d = this,
      e = new Sg();
    e.next = function () {
      if (c != d.G)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.D.length) throw Rg;
      var f = d.D[b++];
      return a ? f : d.C[f];
    };
    return e;
  };
  function Wg(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function Xg(a) {
    a = String(a);
    if (
      /^\s*$/.test(a)
        ? 0
        : /^[\],:{}\s\u2028\u2029]*$/.test(
            a
              .replace(/\\["\\\/bfnrtu]/g, "@")
              .replace(
                /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                "]"
              )
              .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
          )
    )
      try {
        return eval("(" + a + ")");
      } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  }
  function Yg() {}
  Yg.prototype.C = null;
  function Zg(a) {
    var b;
    (b = a.C) || ((b = {}), $g(a) && ((b[0] = !0), (b[1] = !0)), (b = a.C = b));
    return b;
  }
  var ah;
  function bh() {}
  y(bh, Yg);
  function ch(a) {
    return (a = $g(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
  }
  function $g(a) {
    if (
      !a.D &&
      "undefined" == typeof XMLHttpRequest &&
      "undefined" != typeof ActiveXObject
    ) {
      for (
        var b = [
            "MSXML2.XMLHTTP.6.0",
            "MSXML2.XMLHTTP.3.0",
            "MSXML2.XMLHTTP",
            "Microsoft.XMLHTTP",
          ],
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c];
        try {
          return new ActiveXObject(d), (a.D = d);
        } catch (e) {}
      }
      throw Error(
        "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
      );
    }
    return a.D;
  }
  ah = new bh();
  function dh(a) {
    if (a.X && typeof a.X == l) return a.X();
    if (typeof a === q) return a.split("");
    if (Yb(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return Hc(a);
  }
  function eh(a) {
    if (a.ha && typeof a.ha == l) return a.ha();
    if (!a.X || typeof a.X != l) {
      if (Yb(a) || typeof a === q) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b;
      }
      return Ic(a);
    }
  }
  function fh(a, b, c) {
    if (a.forEach && typeof a.forEach == l) a.forEach(b, c);
    else if (Yb(a) || typeof a === q) z(a, b, c);
    else
      for (var d = eh(a), e = dh(a), f = e.length, g = 0; g < f; g++)
        b.call(c, e[g], d && d[g], a);
  }
  var gh =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function hh(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function ih(a) {
    $f.call(this);
    this.headers = new Tg();
    this.aa = a || null;
    this.D = !1;
    this.Z = this.C = null;
    this.fb = "";
    this.K = 0;
    this.G = this.eb = this.Y = this.qa = !1;
    this.V = 0;
    this.R = null;
    this.M = "";
    this.Za = this.L = !1;
  }
  y(ih, $f);
  var jh = /^https?$/i,
    kh = ["POST", "PUT"],
    lh = [];
  function mh(a, b, c, d) {
    var e = new ih();
    lh.push(e);
    b && e.ca.add(Ba, b, !1, void 0, void 0);
    e.ca.add(fb, e.hd, !0, void 0, void 0);
    nh(e, a, c, d, void 0);
  }
  r = ih.prototype;
  r.hd = function () {
    this.ua();
    qc(lh, this);
  };
  r.Yb = function () {
    return this.M;
  };
  r.Zb = function () {
    return this.L;
  };
  function nh(a, b, c, d, e) {
    if (a.C)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          a.fb +
          "; newUri=" +
          b
      );
    c = c ? c.toUpperCase() : ia;
    a.fb = b;
    a.K = 0;
    a.qa = !1;
    a.D = !0;
    a.C = a.aa ? ch(a.aa) : ch(ah);
    a.Z = a.aa ? Zg(a.aa) : Zg(ah);
    a.C.onreadystatechange = w(a.ec, a);
    try {
      (a.eb = !0), a.C.open(c, String(b), !0), (a.eb = !1);
    } catch (g) {
      oh(a);
      return;
    }
    b = d || "";
    var f = new Tg(a.headers);
    e &&
      fh(e, function (g, h) {
        f.set(h, g);
      });
    e = mc(f.ha());
    d = v.FormData && b instanceof v.FormData;
    !oc(kh, c) ||
      e ||
      d ||
      f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function (g, h) {
      this.C.setRequestHeader(h, g);
    }, a);
    a.M && (a.C.responseType = a.M);
    "withCredentials" in a.C &&
      a.C.withCredentials !== a.L &&
      (a.C.withCredentials = a.L);
    try {
      ph(a),
        0 < a.V &&
          ((a.Za = qh(a.C)),
          a.Za
            ? ((a.C.timeout = a.V), (a.C.ontimeout = w(a.la, a)))
            : (a.R = Lg(a.la, a.V, a))),
        (a.Y = !0),
        a.C.send(b),
        (a.Y = !1);
    } catch (g) {
      oh(a);
    }
  }
  function qh(a) {
    return J && Ke(9) && typeof a.timeout === eb && void 0 !== a.ontimeout;
  }
  function nc(a) {
    return "content-type" == a.toLowerCase();
  }
  r.la = function () {
    "undefined" != typeof Rb &&
      this.C &&
      ((this.K = 8), O(this, "timeout"), this.abort(8));
  };
  function oh(a) {
    a.D = !1;
    a.C && ((a.G = !0), a.C.abort(), (a.G = !1));
    a.K = 5;
    rh(a);
    sh(a);
  }
  function rh(a) {
    a.qa || ((a.qa = !0), O(a, Ba), O(a, Sa));
  }
  r.abort = function (a) {
    this.C &&
      this.D &&
      ((this.D = !1),
      (this.G = !0),
      this.C.abort(),
      (this.G = !1),
      (this.K = a || 7),
      O(this, Ba),
      O(this, "abort"),
      sh(this));
  };
  r.W = function () {
    this.C &&
      (this.D && ((this.D = !1), (this.G = !0), this.C.abort(), (this.G = !1)),
      sh(this, !0));
    ih.O.W.call(this);
  };
  r.ec = function () {
    this.J || (this.eb || this.Y || this.G ? th(this) : this.xd());
  };
  r.xd = function () {
    th(this);
  };
  function th(a) {
    if (
      a.D &&
      "undefined" != typeof Rb &&
      (!a.Z[1] || 4 != (a.C ? a.C.readyState : 0) || 2 != uh(a))
    )
      if (a.Y && 4 == (a.C ? a.C.readyState : 0)) Lg(a.ec, 0, a);
      else if ((O(a, "readystatechange"), 4 == (a.C ? a.C.readyState : 0))) {
        a.D = !1;
        try {
          vh(a) ? (O(a, Ba), O(a, mb)) : ((a.K = 6), rh(a));
        } finally {
          sh(a);
        }
      }
  }
  function sh(a, b) {
    if (a.C) {
      ph(a);
      var c = a.C,
        d = a.Z[0] ? Wb : null;
      a.C = null;
      a.Z = null;
      b || O(a, fb);
      try {
        c.onreadystatechange = d;
      } catch (e) {}
    }
  }
  function ph(a) {
    a.C && a.Za && (a.C.ontimeout = null);
    a.R && (v.clearTimeout(a.R), (a.R = null));
  }
  function vh(a) {
    var b = uh(a);
    a: switch (b) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var c = !0;
        break a;
      default:
        c = !1;
    }
    if (!c) {
      if ((b = 0 === b))
        (a = String(a.fb).match(gh)[1] || null),
          !a &&
            v.self &&
            v.self.location &&
            ((a = v.self.location.protocol), (a = a.substr(0, a.length - 1))),
          (b = !jh.test(a ? a.toLowerCase() : ""));
      c = b;
    }
    return c;
  }
  function uh(a) {
    try {
      return 2 < (a.C ? a.C.readyState : 0) ? a.C.status : -1;
    } catch (b) {
      return -1;
    }
  }
  function wh(a) {
    try {
      return a.C ? a.C.responseText : "";
    } catch (b) {
      return "";
    }
  }
  function xh() {
    this.D = [];
    this.C = [];
  }
  function yh(a) {
    0 == a.D.length && ((a.D = a.C), a.D.reverse(), (a.C = []));
    return a.D.pop();
  }
  xh.prototype.T = function () {
    return this.D.length + this.C.length;
  };
  xh.prototype.ia = function () {
    return 0 == this.D.length && 0 == this.C.length;
  };
  xh.prototype.contains = function (a) {
    return oc(this.D, a) || oc(this.C, a);
  };
  xh.prototype.X = function () {
    for (var a = [], b = this.D.length - 1; 0 <= b; --b) a.push(this.D[b]);
    var c = this.C.length;
    for (b = 0; b < c; ++b) a.push(this.C[b]);
    return a;
  };
  function zh() {
    this.C = new Tg();
  }
  function Ah(a) {
    var b = typeof a;
    return (b == p && a) || b == l
      ? "o" +
          ((Object.prototype.hasOwnProperty.call(a, $b) && a[$b]) ||
            (a[$b] = ++ac))
      : b.substr(0, 1) + a;
  }
  r = zh.prototype;
  r.T = function () {
    return this.C.T();
  };
  r.add = function (a) {
    this.C.set(Ah(a), a);
  };
  r.ia = function () {
    return this.C.ia();
  };
  r.contains = function (a) {
    a = Ah(a);
    return Wg(this.C.C, a);
  };
  r.X = function () {
    return this.C.X();
  };
  r.hb = function () {
    return this.C.hb(!1);
  };
  function Bh(a, b) {
    of.call(this);
    this.M = a || 0;
    this.F = b || 10;
    if (this.M > this.F)
      throw Error("[goog.structs.Pool] Min can not be greater than max");
    this.C = new xh();
    this.D = new zh();
    this.delay = 0;
    this.K = null;
    this.Ka();
  }
  y(Bh, of);
  r = Bh.prototype;
  r.Sa = function () {
    var a = Date.now();
    if (!(null != this.K && a - this.K < this.delay)) {
      for (var b; 0 < this.C.T() && ((b = yh(this.C)), !this.Ab(b)); )
        this.Ka();
      !b && this.T() < this.F && (b = this.ub());
      b && ((this.K = a), this.D.add(b));
      return b;
    }
  };
  function Ch(a, b) {
    Vg(a.D.C, Ah(b)) && a.ib(b);
  }
  r.ib = function (a) {
    Vg(this.D.C, Ah(a));
    this.Ab(a) && this.T() < this.F ? this.C.C.push(a) : Dh(a);
  };
  r.Ka = function () {
    for (var a = this.C; this.T() < this.M; ) {
      var b = this.ub();
      a.C.push(b);
    }
    for (; this.T() > this.F && 0 < this.C.T(); ) Dh(yh(a));
  };
  r.ub = function () {
    return {};
  };
  function Dh(a) {
    if (typeof a.ua == l) a.ua();
    else for (var b in a) a[b] = null;
  }
  r.Ab = function (a) {
    return typeof a.fd == l ? a.fd() : !0;
  };
  r.contains = function (a) {
    return this.C.contains(a) || this.D.contains(a);
  };
  r.T = function () {
    return this.C.T() + this.D.T();
  };
  r.ia = function () {
    return this.C.ia() && this.D.ia();
  };
  r.W = function () {
    Bh.O.W.call(this);
    if (0 < this.D.T()) throw Error("[goog.structs.Pool] Objects not released");
    delete this.D;
    for (var a = this.C; !a.ia(); ) Dh(yh(a));
    delete this.C;
  };
  function Eh(a, b) {
    this.C = a;
    this.D = b;
  }
  function Fh(a) {
    this.C = [];
    if (a)
      a: {
        if (a instanceof Fh) {
          var b = a.ha();
          a = a.X();
          if (0 >= this.T()) {
            for (var c = this.C, d = 0; d < b.length; d++)
              c.push(new Eh(b[d], a[d]));
            break a;
          }
        } else (b = Ic(a)), (a = Hc(a));
        for (d = 0; d < b.length; d++) this.insert(b[d], a[d]);
      }
  }
  r = Fh.prototype;
  r.insert = function (a, b) {
    var c = this.C;
    c.push(new Eh(a, b));
    a = c.length - 1;
    b = this.C;
    for (c = b[a]; 0 < a; ) {
      var d = (a - 1) >> 1;
      if (b[d].C > c.C) (b[a] = b[d]), (a = d);
      else break;
    }
    b[a] = c;
  };
  r.X = function () {
    for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++)
      b.push(a[d].D);
    return b;
  };
  r.ha = function () {
    for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++)
      b.push(a[d].C);
    return b;
  };
  r.T = function () {
    return this.C.length;
  };
  r.ia = function () {
    return 0 == this.C.length;
  };
  function Gh() {
    Fh.call(this);
  }
  y(Gh, Fh);
  function Hh(a, b) {
    this.L = void 0;
    this.G = new Gh();
    Bh.call(this, a, b);
  }
  y(Hh, Bh);
  r = Hh.prototype;
  r.Sa = function (a, b) {
    if (!a)
      return (
        (a = Hh.O.Sa.call(this)) &&
          this.delay &&
          (this.L = v.setTimeout(w(this.Ua, this), this.delay)),
        a
      );
    this.G.insert(void 0 !== b ? b : 100, a);
    this.Ua();
  };
  r.Ua = function () {
    for (var a = this.G; 0 < a.T(); ) {
      var b = this.Sa();
      if (b) {
        var c = a,
          d = c.C,
          e = d.length;
        var f = d[0];
        if (0 >= e) f = void 0;
        else {
          if (1 == e) pc(d);
          else {
            d[0] = d.pop();
            d = 0;
            c = c.C;
            e = c.length;
            for (var g = c[d]; d < e >> 1; ) {
              var h = 2 * d + 1,
                m = 2 * d + 2;
              h = m < e && c[m].C < c[h].C ? m : h;
              if (c[h].C > g.C) break;
              c[d] = c[h];
              d = h;
            }
            c[d] = g;
          }
          f = f.D;
        }
        f.apply(this, [b]);
      } else break;
    }
  };
  r.ib = function (a) {
    Hh.O.ib.call(this, a);
    this.Ua();
  };
  r.Ka = function () {
    Hh.O.Ka.call(this);
    this.Ua();
  };
  r.W = function () {
    Hh.O.W.call(this);
    v.clearTimeout(this.L);
    pc(this.G.C);
    this.G = null;
  };
  function Ih(a, b, c, d) {
    this.R = a;
    this.V = !!d;
    Hh.call(this, b, c);
  }
  y(Ih, Hh);
  Ih.prototype.ub = function () {
    var a = new ih(),
      b = this.R;
    b &&
      b.forEach(function (c, d) {
        a.headers.set(d, c);
      });
    this.V && (a.L = !0);
    return a;
  };
  Ih.prototype.Ab = function (a) {
    return !a.J && !a.C;
  };
  function Jh(a, b, c, d, e, f) {
    $f.call(this);
    this.G = void 0 !== a ? a : 1;
    this.K = void 0 !== e ? Math.max(0, e) : 0;
    this.L = !!f;
    this.D = new Ih(b, c, d, f);
    this.C = new Tg();
    this.F = new Vf(this);
  }
  y(Jh, $f);
  var Kh = [fb, Ba, mb, Sa, "abort", "timeout"];
  function Lh(a, b, c, d, e, f) {
    if (a.C.get(b)) throw Error("[goog.net.XhrManager] ID in use");
    c = new Mh(c, w(a.R, a, b), d, e, f, a.G, a.L);
    a.C.set(b, c);
    b = w(a.M, a, b);
    a.D.Sa(b, null);
  }
  Jh.prototype.abort = function (a, b) {
    var c = this.C.get(a);
    if (c) {
      var d = c.Xa;
      c.Ob = !0;
      b &&
        (d &&
          (Yf(this.F, d, Kh, c.Eb),
          If(
            d,
            fb,
            function () {
              Ch(this.D, d);
            },
            !1,
            this
          )),
        Vg(this.C, a));
      d && d.abort();
    }
  };
  Jh.prototype.M = function (a, b) {
    var c = this.C.get(a);
    c && !c.Xa
      ? (Xf(this.F, b, Kh, c.Eb),
        (b.V = Math.max(0, this.K)),
        (b.M = c.Yb()),
        (b.L = c.Zb()),
        (c.Xa = b),
        O(this, new Nh(fb, this, a, b)),
        Oh(this, a, b),
        c.Ob && b.abort())
      : Ch(this.D, b);
  };
  Jh.prototype.R = function (a, b) {
    var c = b.target;
    switch (b.type) {
      case fb:
        Oh(this, a, c);
        break;
      case Ba:
        a: {
          var d = this.C.get(a);
          if (7 == c.K || vh(c) || d.Na > d.yb)
            if ((O(this, new Nh(Ba, this, a, c)), d && ((d.Ub = !0), d.Tb))) {
              a = d.Tb.call(c, b);
              break a;
            }
          a = null;
        }
        return a;
      case mb:
        O(this, new Nh(mb, this, a, c));
        break;
      case "timeout":
      case Sa:
        b = this.C.get(a);
        b.Na > b.yb && O(this, new Nh(Sa, this, a, c));
        break;
      case "abort":
        O(this, new Nh("abort", this, a, c));
    }
    return null;
  };
  function Oh(a, b, c) {
    var d = a.C.get(b);
    !d || d.Ub || d.Na > d.yb
      ? (d && (Yf(a.F, c, Kh, d.Eb), Vg(a.C, b)), Ch(a.D, c))
      : (d.Na++, nh(c, d.getUrl(), d.vd, d.xb(), d.qd));
  }
  Jh.prototype.W = function () {
    Jh.O.W.call(this);
    this.D.ua();
    this.D = null;
    this.F.ua();
    this.F = null;
    var a = this.C;
    a.C = {};
    a.D.length = 0;
    a.F = 0;
    a.G = 0;
    this.C = null;
  };
  function Nh(a, b, c, d) {
    sf.call(this, a, b);
    this.id = c;
    this.Xa = d;
  }
  y(Nh, sf);
  function Mh(a, b, c, d, e, f, g) {
    this.D = a;
    this.vd = c || ia;
    this.C = d;
    this.qd = null;
    this.yb = void 0 !== f ? f : 1;
    this.Na = 0;
    this.Ob = this.Ub = !1;
    this.Eb = b;
    this.Tb = e;
    this.F = !!g;
    this.Xa = null;
  }
  Mh.prototype.getUrl = function () {
    return this.D;
  };
  Mh.prototype.xb = function () {
    return this.C;
  };
  Mh.prototype.Zb = function () {
    return this.F;
  };
  Mh.prototype.Yb = function () {
    return "";
  };
  function Ph(a, b, c, d, e) {
    this.D = a;
    this.J = b;
    this.C = c || null;
    this.data = d || null;
    if (e) {
      if (
        ((this.F = e),
        "displayModeSnippet" != e && e != Oa && e != Pa && e != Qa)
      )
        throw "bad display mode: " + e;
    } else this.F = Qa;
    this.G = !1;
  }
  Ph.prototype.K = function () {
    return this.D;
  };
  function Qh(a) {
    this.J = !0;
    this.N = a;
    this.D = null;
  }
  function P(a, b) {
    return document.getElementById(a.N.D + "_" + b);
  }
  function Rh(a, b) {
    a = P(a, b);
    if (!a) throw "did not find element for id " + b;
    return a;
  }
  Qh.prototype.G = function () {
    return this.N.data;
  };
  Qh.prototype.F = function () {
    var a = {};
    a.type = this.D.Ja();
    a.instanceId = this.N.D;
    a.sectionId = this.N.J;
    a.actionUrl = I.rb;
    a.quickEditUrl =
      I.Wb +
      "&widgetType=" +
      this.D.Ja() +
      "&widgetId=" +
      this.N.D +
      "&sectionId=" +
      this.N.J +
      aa +
      I.Hb;
    return a;
  };
  Qh.prototype.na = function (a, b, c, d) {
    b = b || {};
    window.__wavt && (b.xssi_token = window.__wavt);
    I.na(a, b, this.N.D, this.D.Ja(), c, d);
  };
  function qe(a) {
    var b = -1;
    try {
      b = a.status;
    } catch (c) {}
    return b;
  }
  function I() {}
  I.xc = function (a, b) {
    I.ta = {};
    I.Wb = a;
    I.rb = b;
    I.Da = {};
    I.Ya = new Jh();
    I.dc = 0;
    I.Cb = 0;
    N(I.Ya, fb, function () {
      I.Cb++;
    });
    N(I.Ya, Ba, function () {
      I.Cb--;
    });
  };
  I.Yc = function () {
    var a = I.mc();
    document.body.appendChild(a);
  };
  I.Rc = function (a) {
    I.Yc();
    if (window.parent == window) {
      var b = "Preview";
      a && (b = a);
      a = I.lc(b);
      document.body.appendChild(a[0]);
      document.body.appendChild(a[1]);
    }
  };
  I.Bc = va;
  I.kc = va;
  I.Hb = "editWidget";
  I.rc = function () {
    return I.rb;
  };
  I.Pc = function (a, b) {
    I.Bb = a;
    I.zd = b;
  };
  I.uc = function () {
    return I.Bb;
  };
  I.Qc = function (a) {
    I.Jd = a;
  };
  I.Jb = function () {
    return I.Jd;
  };
  I.Oc = function (a) {
    I.Da = a;
  };
  I.qc = function () {
    var a = {},
      b;
    for (b in I.Da) {
      var c = I.Da[b];
      a[c.name] = c.data;
    }
    c = {};
    for (b in I.ta) c[b] = I.ta[b].H.N.data;
    a.widgets = c;
    return a;
  };
  I.Lb = function (a, b) {
    var c = new Qh(b);
    a = new window[a](c);
    c.D = a;
    I.ta[b.D] = a;
    I.Gb(a);
    return a;
  };
  I.Hc = function (a, b) {
    a = I.Lb(a, b);
    a.H.N.G = !0;
    return a;
  };
  I.Gb = function (a) {
    var b = a.H;
    b.N.F != Qa && (b.N.F == Oa && a.fa(), (a.H.J = !1));
  };
  I.wa = function (a) {
    return I.ta ? I.ta[a] : null;
  };
  I.cb = function (a, b, c, d, e) {
    var f = "";
    d && (f = "&widgetId=" + d);
    a = I.Wb + aa + a + "&sectionId=" + b + "&widgetType=" + c + f;
    if (window.name == e)
      return window.location.replace(a), window.focus(), window;
    e = window.open(
      a,
      e,
      "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes"
    );
    e.focus();
    return e;
  };
  I.Fc = function (a) {
    var b = a.getAttribute("id"),
      c = I.wa(b);
    if (c) {
      var d = c.H.C;
      if (null != d && !d.closed) return d.focus(), !1;
    }
    d = "config" + b;
    a = I.cb(
      I.Hb,
      a.parentNode.getAttribute("id"),
      a.getAttribute("widgetType"),
      b,
      d
    );
    c && (c.H.C = a);
    return !1;
  };
  I.Gc = function (a) {
    I.cb(
      I.kc,
      a.parentNode.getAttribute("id"),
      a.getAttribute("widgetType"),
      a.getAttribute("id"),
      I.Bc
    );
    return !1;
  };
  I.oc = function (a, b, c) {
    I.oa(c, c.LayoutsMessages.DELETING);
    I.Nb("delete", {}, a, b);
  };
  I.Lc = function (a, b) {
    var c = window,
      d = document.getElementById("sectionId").value;
    a.sectionid = d;
    I.oa(c, c.LayoutsMessages.SAVING);
    I.Nb("addnew", a, "", b);
  };
  I.Mc = function (a, b, c) {
    b = I.wa(b);
    b.H.N.G
      ? I.Lc(a, c)
      : ((c = b.H),
        (b = window),
        I.oa(b, b.LayoutsMessages.SAVING),
        c.na(Ca, a));
  };
  I.na = function (a, b, c, d, e, f) {
    I.Mb(I.rb, a, b, c, d, e, f);
  };
  I.Nb = function (a, b, c, d) {
    I.Bb && ((b.security_token = I.zd), I.Mb(I.Bb, a, b, c, d, void 0));
  };
  I.Mb = function (a, b, c, d, e, f, g) {
    function h() {
      t(this.C) && window.eval(wh(this));
    }
    b = [
      "action=" + encodeURIComponent(b),
      "widgetId=" + encodeURIComponent(d),
      "widgetType=" + encodeURIComponent(e),
      "responseType=js",
    ];
    for (var m in c)
      if (typeof c[m] == p)
        for (d = c[m], e = 0; e < d.length; ++e)
          b.push(encodeURIComponent(m) + "=" + encodeURIComponent(d[e]));
      else b.push(encodeURIComponent(m) + "=" + encodeURIComponent(c[m]));
    var t = f || pe();
    g == ia
      ? ((a = 0 <= a.indexOf("?") ? a + "&" : a + "?"),
        Lh(I.Ya, "" + I.dc++, a + b.join("&"), ia, void 0, h))
      : Lh(I.Ya, "" + I.dc++, a, "POST", b.join("&"), h);
  };
  I.Nc = function (a, b) {
    a && (a = I.wa(a)) && (a.H.C = b);
  };
  I.Ha = function (a, b) {
    0 == I.Cb
      ? a.setTimeout(function () {
          a.close();
        }, b)
      : a.setTimeout(function () {
          I.Ha(a, b);
        }, 200);
  };
  I.yc = function (a, b) {
    a && (I.Ha(a, 100), I.Zc(a, b));
  };
  I.Zc = function (a, b) {
    if (a) {
      var c = a.document.getElementById(kb);
      c && (c = c.innerHTML);
      c &&
        a &&
        a.opener.parent &&
        a.opener.parent.editor &&
        a.opener.parent.editor.SetSaveMessage(c, b);
    }
  };
  I.ja = function (a, b, c) {
    a = I.ta[a];
    if (null != c.errors) {
      var d = a ? a.H.C : null;
      d || (d = window);
      I.oa(d, c.errors);
      a && a.xa ? a.xa(b, c, d) : I.xa(c, d);
    } else a.ja(b, c);
  };
  I.xa = function (a, b) {
    a = a["error-details"];
    for (var c in a) Sh(c, a[c], b.document);
  };
  function Th(a, b) {
    I.oa(a.C, b[jb]);
    I.Ib(a.N.D, "_OnWidgetConfigured", function (c) {
      window.opener._WidgetManager._OnWidgetConfigured(c, b);
    });
  }
  I.Cc = function (a, b) {
    window.parent && window.parent.editor && b
      ? I.Dc(a, b)
      : window.location.replace(window.location.href);
  };
  I.Dc = function (a, b) {
    var c = I.wa(a);
    c.H.N.data = b.data;
    a = document.getElementById(a);
    bf(a);
    re(a, c);
    c.H.C = null;
  };
  I.wc = function (a, b, c) {
    var d = c[jb];
    if (null != c.errors) I.oa(window, c.errors), I.xa(c, window);
    else if ("addnew" == b) {
      if (I.ab(window)) {
        if (window.opener && window.opener.parent) var e = window.opener.parent;
        e && e.editor && e.editor.HandleAddNewWidget(c);
      }
      I.oa(window, d);
      null == window.opener
        ? ((b = "/rearrange?blogID=" + c.blogID),
          (a = window.location),
          b instanceof E ||
            b instanceof E ||
            ((b = typeof b == p && b.ka ? b.da() : String(b)),
            ud.test(b) || (b = ra),
            (b = new E(b, qd))),
          (a.href = rd(b)))
        : e && e._WidgetManager
        ? e._WidgetManager._KillPopupDelay(window)
        : I.Ha(window, 100);
    } else
      (c = I.ta[a]),
        "delete" == b && (I.oa(c.H.C, d), I.Ib(a, "_OnWidgetDeleted"));
  };
  I.Ec = function (a) {
    var b = I.wa(a);
    b &&
      (b.H.N.F == Pa
        ? top.editor.HandleDeleteWidget(b.H.N.C)
        : ((b = b.H.N.C), b.parentNode.removeChild(b)),
      delete I.ta[a]);
  };
  I.Ib = function (a, b, c) {
    if (I.ab(window)) {
      var d = window.opener;
      c || (c = d._WidgetManager[b]);
      c(a);
      d._WidgetManager
        ? d._WidgetManager._KillPopupDelay(window, a)
        : I.Ha(window, 100);
    } else
      (a = I.Jb() + "?widgetId=" + a),
        (a += "&func=" + encodeURIComponent(b)),
        window.location.replace(a);
  };
  I.ab = function (a) {
    var b = !1;
    try {
      if (a.opener) {
        var c = "X" + a.opener.document.domain;
        c && "X" != c && (b = !0);
      }
    } catch (d) {}
    return b;
  };
  I.Kc = "status-msg-yellow-on-white";
  I.oa = function (a, b) {
    a || (a = self);
    var c = a.document.getElementById(kb);
    c && ((b = ne(b)), G(c, b));
    (a = a.document.getElementById(jb)) && yc(a, I.Kc);
  };
  I.Ia = function (a, b) {
    if (B(a, b)) return a;
    if (a)
      for (var c = a.childNodes.length, d = 0; d < c; d++) {
        var e = I.Ia(a.childNodes.item(d), b);
        if (e) return e;
      }
    return null;
  };
  I.mc = function () {
    var a = window.document.createElement(k);
    a.className = "blogger-clickTrap singleton-element";
    a.style.position = "fixed";
    a.style.top = "0";
    a.style.left = "0";
    a.style.width = "100%";
    a.style.height = "100%";
    J &&
      !Ke(7) &&
      (a.style.height = "expression(this.parentNode.clientHeight)");
    a.style.zIndex = "1000";
    a.style.cursor = "default";
    a.onclick = I.bb;
    a.onmousedown = I.bb;
    a.onmouseup = I.bb;
    a.style.background = "white";
    a.style.filter = "alpha(opacity=1)";
    a.style.opacity = ".01";
    a.textContent = "\u00a0";
    return a;
  };
  I.lc = function (a) {
    var b = window.document,
      c = I.Fb(b, a);
    a = I.Fb(b, a);
    c.style.backgroundColor = "#000";
    c.style.border = "1px solid #aaa";
    J &&
      (c.style.filter =
        ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678) alpha(opacity=50)');
    c.style.opacity = ".5";
    a.style.border = "1px solid transparent";
    c.style.zIndex = 1200;
    a.style.zIndex = 1200;
    return [c, a];
  };
  I.Fb = function (a, b) {
    a = a.createElement(k);
    a.style.position = "absolute";
    a.style.top = "75px";
    a.style.left = "-225px";
    a.style.width = "600px";
    a.style.height = "28px";
    a.style.margin = "0";
    a.style.padding = "10px";
    a.style.fontSize = "24px";
    a.style.textAlign = "center";
    a.style.color = "#fff";
    a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
    J &&
      ((a.style.top = "-140px"),
      (a.style.left = "-140px"),
      (a.style.filter =
        ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)'));
    a.style.MozTransform = hb;
    a.style.MozTransformOrigin = "50% 0";
    a.style.WebkitTransform = hb;
    a.style.WebkitTransformOrigin = "50% 0";
    b = ne(b);
    G(a, b);
    a.className = "singleton-element";
    return a;
  };
  I.bb = function (a) {
    a || (a = window.event);
    a && ((a.cancelBubble = !0), a.stopPropagation && a.stopPropagation());
    return !1;
  };
  function Uh(a) {
    if (a)
      if ("checkbox" == a.type) {
        if (a.checked) return a.value;
      } else {
        if (null == a.type) {
          for (var b = [], c = 0; c < a.length; c++)
            a[c].checked && (b[b.length] = a[c].value);
          switch (b.length) {
            case 0:
              return;
            case 1:
              return b[0];
            default:
              return b;
          }
        }
        return a.value;
      }
  }
  function Vh(a, b) {
    b || (b = document);
    return b.getElementById("errormessage_" + a);
  }
  function Sh(a, b, c) {
    if ((a = Vh(a, c)))
      (b = ne(b)), G(a, b), (a.className = "errorbox-bad errormsg");
  }
  function Wh() {
    this.C = [];
    for (var a = 0; a < I.Da.length; ++a) this.C[this.C.length] = I.Da[a];
  }
  function Xh(a, b) {
    null == b && (b = "");
    for (var c = a.C.length - 1; 0 <= c; --c)
      if (a.C[c].name == b) return a.C[c].data;
    return null;
  }
  function Yh(a, b) {
    var c = Xh(a, b);
    if (null !== c) return c;
    var d = b.split(".");
    if (1 == d.length) return (c = Xh(a, "")), c[b];
    c = Xh(a, d[0]);
    b = 0;
    c ? (b = 1) : (c = Xh(a, ""));
    for (a = b; a < d.length; a++) {
      if (null == c) return null;
      c = c[d[a]];
    }
    return c;
  }
  function Q(a, b) {
    this.R = a;
    this.H = b;
  }
  r = Q.prototype;
  r.Ja = function () {
    return this.R;
  };
  r.tc = function () {
    return this.H;
  };
  r.ja = function (a, b) {
    a == Ca && Th(this.H, b);
  };
  r.xa = function (a, b, c) {
    I.xa(b, c);
  };
  r.fa = function () {};
  x("_WidgetManager", I);
  I._Init = I.xc;
  I._SetPageActionUrl = I.Pc;
  I._GetPageActionUrl = I.uc;
  I._SetWidgetRefreshUrl = I.Qc;
  I._GetWidgetRefreshUrl = I.Jb;
  I._GetCallbackUrl = I.rc;
  I._DeleteWidgetFromPage = I.oc;
  I._DisplayWidget = I.Gb;
  I._GetWidget = I.wa;
  I._HandleControllerResult = I.ja;
  I._HandlePageActionResult = I.wc;
  I._IsOpenerReachable = I.ab;
  I._SetConfigWin = I.Nc;
  I._SetDataContext = I.Oc;
  I._SetupPreview = I.Rc;
  I._RegisterWidget = I.Lb;
  I._RegisterNewWidget = I.Hc;
  I._PopupPaneFromParams = I.cb;
  I._PopupConfig = I.Fc;
  I._PopupToolbox = I.Gc;
  I._KillPopupDelay = I.yc;
  I._OnWidgetConfigured = I.Cc;
  I._OnWidgetDeleted = I.Ec;
  x("_WidgetInfo", Ph);
  Ph.prototype._getInstanceId = Ph.prototype.K;
  Q.prototype._GetHelper = Q.prototype.tc;
  Qh.prototype._GetData = Qh.prototype.G;
  Qh.prototype._GenerateWidgetMetadata = Qh.prototype.F;
  I._GetAllData = I.qc;
  x("widget_module_provide", function (a, b, c) {
    var d = Mg.Aa(),
      e = d.C,
      f = d.K;
    e[a] || (e[a] = {});
    if (c) e[a][b] = c;
    else if (f[a]) {
      for (b = 0; b < f[a].length; ++b) (0, f[a][b][1])(e[a][f[a][b][0]]);
      delete f[a];
      delete d.F[a];
    }
  });
  function Zh(a) {
    Q.call(this, "AdSense", a);
    this.H = a;
  }
  u(Zh, Q);
  x("_AdSenseView", Zh);
  var $h = {};
  function ai(a) {
    if (J && !Ke(9)) return [0, 0, 0, 0];
    var b = $h.hasOwnProperty(a) ? $h[a] : null;
    if (b) return b;
    65536 < Object.keys($h).length && ($h = {});
    var c = [0, 0, 0, 0];
    b = bi(a, /\\[0-9A-Fa-f]{6}\s?/g);
    b = bi(b, /\\[0-9A-Fa-f]{1,5}\s/g);
    b = bi(b, /\\./g);
    b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
    b = b.replace(/{[^]*/gm, "");
    b = ci(b, c, /(\[[^\]]+\])/g, 2);
    b = ci(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
    b = ci(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
    b = ci(
      b,
      c,
      /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
      3
    );
    b = ci(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = ci(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    ci(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return ($h[a] = b);
  }
  function ci(a, b, c, d) {
    return a.replace(c, function (e) {
      b[d] += 1;
      return Array(e.length + 1).join(" ");
    });
  }
  function bi(a, b) {
    return a.replace(b, function (c) {
      return Array(c.length + 1).join("A");
    });
  }
  var di = {
      rgb: !0,
      rgba: !0,
      alpha: !0,
      rect: !0,
      image: !0,
      "linear-gradient": !0,
      "radial-gradient": !0,
      "repeating-linear-gradient": !0,
      "repeating-radial-gradient": !0,
      "cubic-bezier": !0,
      matrix: !0,
      perspective: !0,
      rotate: !0,
      rotate3d: !0,
      rotatex: !0,
      rotatey: !0,
      steps: !0,
      rotatez: !0,
      scale: !0,
      scale3d: !0,
      scalex: !0,
      scaley: !0,
      scalez: !0,
      skew: !0,
      skewx: !0,
      skewy: !0,
      translate: !0,
      translate3d: !0,
      translatex: !0,
      translatey: !0,
      translatez: !0,
    },
    ei = /[\n\f\r"'()*<>]/g,
    fi = {
      "\n": "%0a",
      "\f": "%0c",
      "\r": "%0d",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "*": "%2a",
      "<": "%3c",
      ">": "%3e",
    };
  function gi(a) {
    return fi[a];
  }
  function hi(a, b, c) {
    b = C(b);
    if ("" == b) return null;
    var d = String(b.substr(0, 4)).toLowerCase();
    if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
      if (
        !b.endsWith(")") ||
        1 < (b ? b.split("(").length - 1 : 0) ||
        1 < (b ? b.split(")").length - 1 : 0) ||
        !c
      )
        a = null;
      else {
        a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
          var e = "\"'".charAt(d);
          if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
            b = b.substring(1, b.length - 1);
            break a;
          }
        }
        a = c
          ? (a = c(b, a)) && rd(a) != ra
            ? 'url("' + rd(a).replace(ei, gi) + '")'
            : null
          : null;
      }
      return a;
    }
    if (0 < b.indexOf("(")) {
      if (/"|'/.test(b)) return null;
      for (a = /([\-\w]+)\(/g; (c = a.exec(b)); )
        if (!(c[1].toLowerCase() in di)) return null;
    }
    return b;
  }
  function ii(a, b) {
    a = v[a];
    return a && a.prototype
      ? ((b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get) || null
      : null;
  }
  function ji(a, b) {
    return ((a = v[a]) && a.prototype && a.prototype[b]) || null;
  }
  var ki = ii(ha, ta) || ii("Node", ta),
    li = ji(ha, Za),
    mi = ji(ha, Wa),
    ni = ji(ha, ib),
    oi = ji(ha, gb),
    pi = ji(ha, Xa),
    qi = ji(ha, "matches") || ji(ha, db),
    ri = ii("Node", "nodeName"),
    si = ii("Node", "nodeType"),
    ti = ii("Node", "parentNode"),
    ui = ii("HTMLElement", lb) || ii(ha, lb),
    vi = ii("HTMLStyleElement", "sheet"),
    wi = ji(da, Ya),
    xi = ji(da, "setProperty");
  function yi(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error(ea);
    return a;
  }
  function zi(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (J && 10 > document.documentMode) {
      if (!b[c].call) throw Error("IE Clobbering detected");
    } else if (typeof b[c] != l) throw Error(ea);
    return b[c].apply(b, d);
  }
  function Ai(a) {
    return yi(ki, a, ta, function (b) {
      return b instanceof NamedNodeMap;
    });
  }
  function Bi(a, b, c) {
    try {
      zi(ni, a, ib, [b, c]);
    } catch (d) {
      if (-1 == d.message.indexOf("A security problem occurred")) throw d;
    }
  }
  function Ci(a) {
    return yi(ui, a, lb, function (b) {
      return b instanceof CSSStyleDeclaration;
    });
  }
  function Di(a) {
    return yi(vi, a, "sheet", function (b) {
      return b instanceof CSSStyleSheet;
    });
  }
  function Ei(a) {
    return yi(ri, a, "nodeName", function (b) {
      return typeof b == q;
    });
  }
  function Fi(a) {
    return yi(si, a, "nodeType", function (b) {
      return typeof b == eb;
    });
  }
  function Gi(a) {
    return yi(ti, a, "parentNode", function (b) {
      return !(
        b &&
        typeof b.name == q &&
        b.name &&
        "parentnode" == b.name.toLowerCase()
      );
    });
  }
  function Hi(a, b) {
    return zi(wi, a, a.getPropertyValue ? Ya : Wa, [b]) || "";
  }
  function Ii(a, b, c) {
    zi(xi, a, a.setProperty ? "setProperty" : ib, [b, c]);
  }
  var Ji =
      J && 10 > document.documentMode
        ? null
        : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,
    Ki = {
      "-webkit-border-horizontal-spacing": !0,
      "-webkit-border-vertical-spacing": !0,
    };
  function Li(a, b, c) {
    var d = [];
    a = Ni(sc(a.cssRules));
    z(a, function (e) {
      if (b && !/[a-zA-Z][\w-:\.]*/.test(b))
        throw Error("Invalid container id");
      if (
        !(
          b &&
          J &&
          10 == document.documentMode &&
          /\\['"]/.test(e.selectorText)
        )
      ) {
        var f = b
            ? e.selectorText.replace(Ji, "#" + b + " $1")
            : e.selectorText,
          g = d.push;
        e = Oi(e.style, c);
        if (-1 != f.indexOf("<"))
          throw Error("Selector does not allow '<', got: " + f);
        var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(h))
          throw Error(
            "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
              f
          );
        a: {
          for (
            var m = { "(": ")", "[": "]" }, t = [], H = 0;
            H < h.length;
            H++
          ) {
            var A = h[H];
            if (m[A]) t.push(m[A]);
            else if (Jc(m, A) && t.pop() != A) {
              h = !1;
              break a;
            }
          }
          h = 0 == t.length;
        }
        if (!h)
          throw Error("() and [] in selector must be balanced, got: " + f);
        e instanceof xd || (e = Bd(e));
        f = f + "{" + zd(e).replace(/</g, "\\3C ") + "}";
        g.call(d, new Ld(f, Kd));
      }
    });
    return Md(d);
  }
  function Ni(a) {
    return jc(a, function (b) {
      return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE;
    });
  }
  function Pi(a, b, c) {
    a = Qi("<style>" + a + "</style>");
    return null == a || null == a.sheet
      ? Od
      : Li(a.sheet, void 0 != b ? b : null, c);
  }
  function Qi(a) {
    if ((J && !Ke(10)) || typeof v.DOMParser != l) return null;
    a = ie(Vc(ja), "<html><head></head><body>" + a + "</body></html>");
    return new DOMParser().parseFromString(Vd(a), "text/html").body.children[0];
  }
  function Oi(a, b) {
    if (!a) return Ad;
    var c = document.createElement(k).style,
      d = Ri(a);
    z(d, function (e) {
      var f =
        De && e in Ki
          ? e
          : e.replace(
              /^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,
              ""
            );
      gd(f, "--") ||
        gd(f, "var") ||
        ((e = Hi(a, e)), (e = hi(f, e, b)), null != e && Ii(c, f, e));
    });
    return je(c.cssText || "");
  }
  function Si(a) {
    var b = Array.from(zi(pi, a, Xa, [la])),
      c = wc(b, function (e) {
        return sc(Di(e).cssRules);
      });
    c = Ni(c);
    c.sort(function (e, f) {
      e = ai(e.selectorText);
      a: {
        f = ai(f.selectorText);
        for (var g = Math.min(e.length, f.length), h = 0; h < g; h++) {
          var m = e[h];
          var t = f[h];
          m = m > t ? 1 : m < t ? -1 : 0;
          if (0 != m) {
            e = m;
            break a;
          }
        }
        e = e.length;
        f = f.length;
        e = e > f ? 1 : e < f ? -1 : 0;
      }
      return -e;
    });
    a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
    for (var d; (d = a.nextNode()); )
      z(c, function (e) {
        zi(qi, d, d.matches ? "matches" : db, [e.selectorText]) &&
          e.style &&
          Ti(d, e.style);
      });
    z(b, cf);
  }
  function Ti(a, b) {
    var c = Ri(a.style),
      d = Ri(b);
    z(d, function (e) {
      if (!(0 <= c.indexOf(e))) {
        var f = Hi(b, e);
        Ii(a.style, e, f);
      }
    });
  }
  function Ri(a) {
    Yb(a) ? (a = sc(a)) : ((a = Ic(a)), qc(a, "cssText"));
    return a;
  }
  function Ui(a, b, c) {
    if (typeof b === q) (b = Vi(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = Vi(c, d);
        f && (c.style[f] = e);
      }
  }
  var Wi = {};
  function Vi(a, b) {
    var c = Wi[b];
    if (!c) {
      var d = ve(b);
      c = d;
      void 0 === a.style[d] &&
        ((d =
          (De ? "Webkit" : Ce ? "Moz" : J ? "ms" : Ae ? "O" : null) + we(d)),
        void 0 !== a.style[d] && (c = d));
      Wi[b] = c;
    }
    return c;
  }
  var Xi = {
      "* ARIA-CHECKED": !0,
      "* ARIA-COLCOUNT": !0,
      "* ARIA-COLINDEX": !0,
      "* ARIA-CONTROLS": !0,
      "* ARIA-DESCRIBEDBY": !0,
      "* ARIA-DISABLED": !0,
      "* ARIA-EXPANDED": !0,
      "* ARIA-GOOG-EDITABLE": !0,
      "* ARIA-HASPOPUP": !0,
      "* ARIA-HIDDEN": !0,
      "* ARIA-LABEL": !0,
      "* ARIA-LABELLEDBY": !0,
      "* ARIA-MULTILINE": !0,
      "* ARIA-MULTISELECTABLE": !0,
      "* ARIA-ORIENTATION": !0,
      "* ARIA-PLACEHOLDER": !0,
      "* ARIA-READONLY": !0,
      "* ARIA-REQUIRED": !0,
      "* ARIA-ROLEDESCRIPTION": !0,
      "* ARIA-ROWCOUNT": !0,
      "* ARIA-ROWINDEX": !0,
      "* ARIA-SELECTED": !0,
      "* ABBR": !0,
      "* ACCEPT": !0,
      "* ACCESSKEY": !0,
      "* ALIGN": !0,
      "* ALT": !0,
      "* AUTOCOMPLETE": !0,
      "* AXIS": !0,
      "* BGCOLOR": !0,
      "* BORDER": !0,
      "* CELLPADDING": !0,
      "* CELLSPACING": !0,
      "* CHAROFF": !0,
      "* CHAR": !0,
      "* CHECKED": !0,
      "* CLEAR": !0,
      "* COLOR": !0,
      "* COLSPAN": !0,
      "* COLS": !0,
      "* COMPACT": !0,
      "* COORDS": !0,
      "* DATETIME": !0,
      "* DIR": !0,
      "* DISABLED": !0,
      "* ENCTYPE": !0,
      "* FACE": !0,
      "* FRAME": !0,
      "* HEIGHT": !0,
      "* HREFLANG": !0,
      "* HSPACE": !0,
      "* ISMAP": !0,
      "* LABEL": !0,
      "* LANG": !0,
      "* MAX": !0,
      "* MAXLENGTH": !0,
      "* METHOD": !0,
      "* MULTIPLE": !0,
      "* NOHREF": !0,
      "* NOSHADE": !0,
      "* NOWRAP": !0,
      "* OPEN": !0,
      "* READONLY": !0,
      "* REQUIRED": !0,
      "* REL": !0,
      "* REV": !0,
      "* ROLE": !0,
      "* ROWSPAN": !0,
      "* ROWS": !0,
      "* RULES": !0,
      "* SCOPE": !0,
      "* SELECTED": !0,
      "* SHAPE": !0,
      "* SIZE": !0,
      "* SPAN": !0,
      "* START": !0,
      "* SUMMARY": !0,
      "* TABINDEX": !0,
      "* TITLE": !0,
      "* TYPE": !0,
      "* VALIGN": !0,
      "* VALUE": !0,
      "* VSPACE": !0,
      "* WIDTH": !0,
    },
    Yi = {
      "* USEMAP": !0,
      "* ACTION": !0,
      "* CITE": !0,
      "* HREF": !0,
      "* LONGDESC": !0,
      "* SRC": !0,
      "LINK HREF": !0,
      "* FOR": !0,
      "* HEADERS": !0,
      "* NAME": !0,
      "A TARGET": !0,
      "* CLASS": !0,
      "* ID": !0,
      "* STYLE": !0,
    };
  var Zi =
      "undefined" != typeof WeakMap &&
      -1 != WeakMap.toString().indexOf("[native code]"),
    $i = 0;
  function aj() {
    this.F = [];
    this.D = [];
    this.C = "data-elementweakmap-index-" + $i++;
  }
  aj.prototype.set = function (a, b) {
    if (zi(li, a, Za, [this.C])) {
      var c = parseInt(zi(mi, a, Wa, [this.C]) || null, 10);
      this.D[c] = b;
    } else
      (c = this.D.push(b) - 1), Bi(a, this.C, c.toString()), this.F.push(a);
    return this;
  };
  aj.prototype.get = function (a) {
    if (zi(li, a, Za, [this.C]))
      return (a = parseInt(zi(mi, a, Wa, [this.C]) || null, 10)), this.D[a];
  };
  aj.prototype.clear = function () {
    this.F.forEach(function (a) {
      zi(oi, a, gb, [this.C]);
    }, this);
    this.F = [];
    this.D = [];
  };
  var bj = !J || 10 <= Number(Ne),
    cj = !J || null == document.documentMode;
  function dj() {}
  var ej = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0,
  };
  var fj = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0,
  };
  var gj = {
    "ANNOTATION-XML": !0,
    "COLOR-PROFILE": !0,
    "FONT-FACE": !0,
    "FONT-FACE-SRC": !0,
    "FONT-FACE-URI": !0,
    "FONT-FACE-FORMAT": !0,
    "FONT-FACE-NAME": !0,
    "MISSING-GLYPH": !0,
  };
  function hj(a) {
    a = a || new ij();
    jj(a);
    this.C = Lc(a.C);
    this.J = Lc(a.qa);
    this.F = Lc(a.G);
    this.M = a.Z;
    z(
      a.Y,
      function (b) {
        if (!gd(b, "data-"))
          throw new hc('Only "data-" attributes allowed, got: %s.', [b]);
        if (gd(b, Ma))
          throw new hc(
            'Attributes with "%s" prefix are not allowed, got: %s.',
            [Ma, b]
          );
        this.C["* " + b.toUpperCase()] = kj;
      },
      this
    );
    z(
      a.V,
      function (b) {
        b = b.toUpperCase();
        if (-1 == b.indexOf("-") || gj[b])
          throw new hc(
            "Only valid custom element tag names allowed, got: %s.",
            [b]
          );
        this.F[b] = !0;
      },
      this
    );
    this.L = a.F;
    this.G = a.aa;
    this.D = null;
    this.K = a.ga;
  }
  y(hj, dj);
  function lj(a) {
    return function (b, c) {
      return (b = a(C(b), c)) && rd(b) != ra ? rd(b) : null;
    };
  }
  function ij() {
    this.C = {};
    z(
      [Xi, Yi],
      function (a) {
        z(
          Ic(a),
          function (b) {
            this.C[b] = kj;
          },
          this
        );
      },
      this
    );
    this.D = {};
    this.Y = [];
    this.V = [];
    this.qa = Lc(ej);
    this.G = Lc(fj);
    this.Z = !1;
    this.R = vd;
    this.M = this.J = this.K = this.F = Ec;
    this.aa = null;
    this.L = this.ga = !1;
  }
  function mj() {
    var a = new ij();
    a.G = { SPAN: !0 };
    z(
      "a b br em i strong".split(" "),
      function (b) {
        b = b.toUpperCase();
        if (fj[b]) this.G[b] = !0;
        else
          throw Error(
            "Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist."
          );
      },
      a
    );
    return a;
  }
  function nj(a, b) {
    return function (c, d, e, f) {
      c = a(c, d, e, f);
      return null == c ? null : b(c, d, e, f);
    };
  }
  function oj(a, b, c, d) {
    a[c] && !b[c] && (a[c] = nj(a[c], d));
  }
  function jj(a) {
    if (a.L)
      throw Error("HtmlSanitizer.Builder.build() can only be used once.");
    oj(a.C, a.D, "* USEMAP", pj);
    var b = lj(a.R);
    z(
      ["* ACTION", "* CITE", "* HREF"],
      function (d) {
        oj(this.C, this.D, d, b);
      },
      a
    );
    var c = lj(a.F);
    z(
      ["* LONGDESC", "* SRC", "LINK HREF"],
      function (d) {
        oj(this.C, this.D, d, c);
      },
      a
    );
    z(
      ["* FOR", "* HEADERS", "* NAME"],
      function (d) {
        oj(this.C, this.D, d, dc(qj, this.K));
      },
      a
    );
    oj(a.C, a.D, "A TARGET", dc(rj, [qa, "_self"]));
    oj(a.C, a.D, "* CLASS", dc(sj, a.J));
    oj(a.C, a.D, "* ID", dc(tj, a.J));
    oj(a.C, a.D, "* STYLE", dc(a.M, c));
    a.L = !0;
  }
  function uj(a, b) {
    a || (a = "*");
    return (a + " " + b).toUpperCase();
  }
  function vj(a, b, c, d) {
    if (!d.wb) return null;
    b = zd(
      Oi(d.wb, function (e, f) {
        c.kd = f;
        e = a(e, c);
        null == e
          ? (e = null)
          : ((f = Vc(
              "HtmlSanitizerPolicy created with networkRequestUrlPolicy_ when installing '* STYLE' handler."
            )),
            Uc(f),
            Uc(f),
            (e = new E(e, qd)));
        return e;
      })
    );
    return "" == b ? null : b;
  }
  function kj(a) {
    return C(a);
  }
  function rj(a, b) {
    b = C(b);
    return oc(a, b.toLowerCase()) ? b : null;
  }
  function pj(a) {
    return (a = C(a)) && "#" == a.charAt(0) ? a : null;
  }
  function qj(a, b, c) {
    return a(C(b), c);
  }
  function sj(a, b, c) {
    b = b.split(/(?:\s+)/);
    for (var d = [], e = 0; e < b.length; e++) {
      var f = a(b[e], c);
      f && d.push(f);
    }
    return 0 == d.length ? null : d.join(" ");
  }
  function tj(a, b, c) {
    return a(C(b), c);
  }
  function wj(a, b) {
    var c = !(la in a.J) && la in a.F;
    c =
      "*" == a.G && c
        ? "sanitizer-" +
          (Math.floor(2147483648 * Math.random()).toString(36) +
            Math.abs(
              Math.floor(2147483648 * Math.random()) ^ Date.now()
            ).toString(36))
        : a.G;
    a.D = c;
    if (bj) {
      c = b;
      if (bj) {
        b = $e(document, ka);
        a.D && "*" == a.G && (b.id = a.D);
        a.K && ((c = Qi("<div>" + c + "</div>")), Si(c), (c = c.innerHTML));
        c = ie(Vc(ja), c);
        var d = document.createElement("template");
        if (cj && "content" in d) G(d, c), (d = d.content);
        else {
          var e = document.implementation.createHTMLDocument("x");
          d = e.body;
          G(e.body, c);
        }
        c = document.createTreeWalker(
          d,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
          null,
          !1
        );
        for (d = Zi ? new WeakMap() : new aj(); (e = c.nextNode()); ) {
          c: {
            var f = a;
            var g = e;
            switch (Fi(g)) {
              case 3:
                f = xj(f, g);
                break c;
              case 1:
                if ("TEMPLATE" == Ei(g).toUpperCase()) f = null;
                else {
                  var h = Ei(g).toUpperCase();
                  if (h in f.J) var m = null;
                  else
                    f.F[h]
                      ? (m = document.createElement(h))
                      : ((m = $e(document, ka)),
                        f.M &&
                          Bi(
                            m,
                            "data-sanitizer-original-tag",
                            h.toLowerCase()
                          ));
                  if (m) {
                    var t = m,
                      H = Ai(g);
                    if (null != H)
                      for (var A = 0; (h = H[A]); A++)
                        if (h.specified) {
                          var D = f;
                          var M = g,
                            ba = h,
                            rb = ba.name;
                          if (gd(rb, Ma)) D = null;
                          else {
                            var Mi = Ei(M);
                            ba = ba.value;
                            var ef = {
                                tagName: C(Mi).toLowerCase(),
                                attributeName: C(rb).toLowerCase(),
                              },
                              ff = { wb: void 0 };
                            ef.attributeName == lb && (ff.wb = Ci(M));
                            M = uj(Mi, rb);
                            M in D.C
                              ? ((D = D.C[M]), (D = D(ba, ef, ff)))
                              : ((rb = uj(null, rb)),
                                rb in D.C
                                  ? ((D = D.C[rb]), (D = D(ba, ef, ff)))
                                  : (D = null));
                          }
                          null !== D && Bi(t, h.name, D);
                        }
                    f = m;
                  } else f = null;
                }
                break c;
              default:
                f = null;
            }
          }
          if (f) {
            if ((1 == Fi(f) && d.set(e, f), (e = Gi(e)), (g = !1), e))
              (h = Fi(e)),
                (m = Ei(e).toLowerCase()),
                (t = Gi(e)),
                11 != h || t
                  ? "body" == m && t && (h = Gi(t)) && !Gi(h) && (g = !0)
                  : (g = !0),
                (h = null),
                g || !e ? (h = b) : 1 == Fi(e) && (h = d.get(e)),
                h.content && (h = h.content),
                h.appendChild(f);
          } else bf(e);
        }
        d.clear && d.clear();
        a = b;
      } else a = $e(document, ka);
      0 < Ai(a).length && ((b = $e(document, ka)), b.appendChild(a), (a = b));
      a = new XMLSerializer().serializeToString(a);
      a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
    } else a = "";
    return ie(Vc("Output of HTML sanitizer"), a);
  }
  function xj(a, b) {
    var c = b.data;
    (b = Gi(b)) &&
      Ei(b).toLowerCase() == lb &&
      !(la in a.J) &&
      la in a.F &&
      (c = Nd(
        Pi(
          c,
          a.D,
          w(function (d, e) {
            return this.L(d, { kd: e });
          }, a)
        )
      ));
    return document.createTextNode(c);
  }
  function yj(a) {
    var b = new hj(new ij());
    return wj(b, a);
  }
  function zj(a) {
    Q.call(this, "BlogArchive", a);
    this.C = a.N;
  }
  y(zj, Q);
  var Aj = "&#9658;&nbsp;";
  r = zj.prototype;
  r.ja = function (a, b) {
    if (a == Ca) Th(this.H, b);
    else if ("getTitles" == a) {
      a: {
        a = b.path;
        var c = this.C.C.getElementsByTagName("A");
        for (e in c) {
          var d = c[e];
          if (d.href == a) {
            var e = lf(d, "li", "archivedate");
            break a;
          }
        }
        e = void 0;
      }
      a = L("posts", e);
      (c = lf(e, k, za)) && We(c, { style: "", "data-height": "" });
      bf(a);
      for (c = 0; c < b.posts.length; c++) {
        var f = b.posts[c];
        d = document.createElement("li");
        f = ne("<a href=" + f.url + ">" + f.title + "</a>");
        G(d, f);
        a.appendChild(d);
      }
      Bj(this, e);
      Cj(this, e);
    } else zj.O.ja.call(this, a, b);
  };
  r.fa = function () {
    if (P(this.H, "ArchiveList")) {
      var a = Ve(document, "a", qb, this.C.C);
      1 > a.length && (a = Ve(document, "li", qb, this.C.C));
      if (0 < a.length && a[0].currentStyle)
        var b = a[0].parentNode.currentStyle.color;
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        0 < Ve(document, k, za, d).length
          ? ((d.onclick = this.Sc.bind(this)), Bj(this, d))
          : (d.onclick = this.Tc.bind(this));
        b && (d.style.color = b);
      }
      if ((d = P(this.H, "ArchiveMenu"))) {
        for (c = 1; c < d.options.length; c++)
          if (
            ((a = d.options[c].value),
            a == window.location.href || null != window.location.href.match(a))
          ) {
            d.selectedIndex = c;
            break;
          }
        d.onchange = this.vc.bind(this);
      } else
        for (a = Ve(document, k, Ra, this.C.C), c = 0; c < a.length; c++)
          (d = a[c]),
            d.addEventListener(wa, this.Xc.bind(this), !1),
            d.addEventListener(wa, this.Jc.bind(this), !1);
      "rtl" == this.H.N.data.languageDirection && (Aj = "&#9668;&nbsp;");
    }
  };
  r.vc = function () {
    var a = P(this.H, "ArchiveMenu");
    a && "" != a.value && (window.location.href = a.value);
  };
  r.Tc = function (a) {
    a = a || window.event;
    var b = a.currentTarget || a.srcElement;
    b && !B(b, qb) && (b = b.parentNode);
    a = I.Ia(b, "zippy");
    b = b.parentNode;
    if (B(b, Ta))
      return Cc(b, Ta, xa), (b = yj(Aj)), G(a, b), Ac(a, "toggle-open"), !1;
    Cc(b, xa, Ta);
    var c = yj("&#9660;&nbsp;");
    G(a, c);
    yc(a, "toggle-open");
    Dj(this, b);
    return !1;
  };
  r.Xc = function (a) {
    a = a || window.event;
    a = a.currentTarget || a.srcElement;
    (a = B(a, Ra) ? a : lf(a, k, Ra)) &&
      (a = L("menu", a)) &&
      (B(a, "open") ? Ac(a, "open") : yc(a, "open"));
  };
  r.Jc = function (a) {
    a = a || window.event;
    var b = a.currentTarget || a.srcElement;
    if ((b = B(b, "ripple") ? b : lf(b, k, "ripple"))) {
      var c = L("splash", b);
      if (!c) {
        c = document.createElement("span");
        yc(c, "splash");
        var d = document.createElement(k);
        yc(d, "splash-wrapper");
        d.appendChild(c);
        b.insertBefore(d, b.firstChild);
      }
      Ac(c, "animate");
      d = b.offsetWidth;
      var e = getComputedStyle(b);
      d += parseInt(e.marginLeft) + parseInt(e.marginRight);
      d = Math.max(d, Ej(b));
      We(c, {
        style:
          "height: " +
          d +
          "px; width: " +
          d +
          "px; left: " +
          (a.pageX - b.offsetLeft - d / 2) +
          "px; top: " +
          (a.pageY - b.offsetTop - d / 2) +
          "px;",
      });
      yc(c, "animate");
    }
  };
  r.Sc = function (a) {
    a = a || window.event;
    if (
      !a.currentTarget ||
      a.currentTarget == a.srcElement ||
      "A" != a.srcElement.tagName
    ) {
      var b = a.currentTarget || a.srcElement;
      b && !B(b, qb) && (b = b.parentNode);
      a.stopPropagation();
      a = B(b, "archivedate") ? b : b.parentNode;
      B(a, Ta)
        ? (Fj(this, a), Cc(a, Ta, xa))
        : (Dj(this, a), Cj(this, a), Cc(a, xa, Ta));
    }
  };
  function Dj(a, b) {
    var c = b.getElementsByTagName("UL");
    0 < c.length && !B(c[0], "posts")
      ? (c = !1)
      : ((c = I.Ia(b, "post-count")),
        (c = parseInt(c.innerHTML.match(/\d+/), 10)),
        (c = b.getElementsByTagName("LI").length < c));
    if (c) {
      var d = L(za, b);
      c = L("posts", b);
      c ||
        ((c = document.createElement("UL")),
        d ? d.appendChild(c) : b.appendChild(c),
        yc(c, "posts"));
      d && We(d, { style: "", "data-height": "" });
      (d = lf(b, k, za)) && We(d, { style: "", "data-height": "" });
      d = document.createElement("LI");
      var e = ne(a.H.N.data.loadingMessage || "Loading...");
      G(d, e);
      c.appendChild(d);
      a.H.na("getTitles", { path: I.Ia(b, "post-count-link").href }, null, ia);
    }
  }
  function Cj(a, b) {
    var c = L(za, b);
    c.getAttribute(La) || Bj(a, b);
    var d = (a = c.getAttribute(La) || Ej(c)) ? a + "px" : n;
    window.setTimeout(function () {
      We(c, { style: "max-height: " + d + ";" });
    }, 10);
  }
  function Fj(a, b) {
    var c = L(za, b);
    c.getAttribute(La) || Bj(a, b);
    window.setTimeout(function () {
      We(c, { style: cb });
    }, 10);
  }
  function Bj(a, b) {
    var c = L(za, b);
    We(c, { style: "max-height: none;" });
    for (var d = 0, e = Ve(document, k, za, c), f = 0; f < e.length; f++) {
      var g = e[f],
        h = lf(g, "li", qb);
      if (B(h, xa)) {
        var m = g.getAttribute(La);
        m || (Bj(a, h), (m = g.getAttribute(La)));
        d += parseInt(m);
      }
    }
    a = d + Ej(c);
    c.setAttribute(La, a);
    c.setAttribute(lb, "max-height: " + a + "px;");
    B(b, xa) && c.setAttribute(lb, cb);
  }
  function Ej(a) {
    var b = a.offsetHeight;
    a = getComputedStyle(a);
    return (b += parseInt(a.marginTop) + parseInt(a.marginBottom));
  }
  x("_BlogArchiveView", zj);
  function Gj(a) {
    Q.call(this, Gj.$, a);
  }
  y(Gj, Q);
  Gj.$ = "Attribution";
  x("_AttributionView", Gj);
  function Hj() {}
  var Ij = typeof Uint8Array == l,
    Jj = [];
  function R(a, b) {
    if (b < a.F) {
      b += a.G;
      var c = a.C[b];
      return c !== Jj ? c : (a.C[b] = []);
    }
    if (a.D) return (c = a.D[b]), c === Jj ? (a.D[b] = []) : c;
  }
  function Kj(a, b) {
    a = R(a, b);
    return null == a ? a : +a;
  }
  function S(a, b) {
    a = R(a, b);
    return null == a ? a : !!a;
  }
  function T(a, b) {
    var c = !1;
    c = void 0 === c ? !1 : c;
    a = S(a, b);
    return null == a ? c : a;
  }
  function U(a, b, c) {
    if (b < a.F) a.C[b + a.G] = c;
    else {
      var d = a.F + a.G;
      a.C[d] || (a.D = a.C[d] = {});
      a.D[b] = c;
    }
    return a;
  }
  Hj.prototype.toString = function () {
    return this.C.toString();
  };
  function Lj(a, b) {
    this.G = this.M = this.F = "";
    this.K = null;
    this.L = this.J = "";
    this.D = !1;
    if (a instanceof Lj) {
      this.D = void 0 !== b ? b : a.D;
      Mj(this, a.F);
      this.M = a.M;
      this.G = a.G;
      Nj(this, a.K);
      Oj(this, a.J);
      b = a.C;
      var c = new Pj();
      c.F = b.F;
      b.C && ((c.C = new Tg(b.C)), (c.D = b.D));
      Qj(this, c);
      this.L = a.L;
    } else
      a && (c = String(a).match(gh))
        ? ((this.D = !!b),
          Mj(this, c[1] || "", !0),
          (this.M = Rj(c[2] || "")),
          (this.G = Rj(c[3] || "", !0)),
          Nj(this, c[4]),
          Oj(this, c[5] || "", !0),
          Qj(this, c[6] || "", !0),
          (this.L = Rj(c[7] || "")))
        : ((this.D = !!b), (this.C = new Pj(null, this.D)));
  }
  Lj.prototype.toString = function () {
    var a = [],
      b = this.F;
    b && a.push(Sj(b, Tj, !0), ":");
    var c = this.G;
    if (c || "file" == b)
      a.push("//"),
        (b = this.M) && a.push(Sj(b, Tj, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c = this.K),
        null != c && a.push(":", String(c));
    if ((c = this.J))
      this.G && "/" != c.charAt(0) && a.push("/"),
        a.push(Sj(c, "/" == c.charAt(0) ? Uj : Vj, !0));
    (c = this.C.toString()) && a.push("?", c);
    (c = this.L) && a.push("#", Sj(c, Wj));
    return a.join("");
  };
  function Mj(a, b, c) {
    a.F = c ? Rj(b, !0) : b;
    a.F && (a.F = a.F.replace(/:$/, ""));
  }
  function Nj(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.K = b;
    } else a.K = null;
  }
  function Oj(a, b, c) {
    a.J = c ? Rj(b, !0) : b;
    return a;
  }
  function Qj(a, b, c) {
    b instanceof Pj
      ? ((a.C = b), Xj(a.C, a.D))
      : (c || (b = Sj(b, Yj)), (a.C = new Pj(b, a.D)));
  }
  function Zj(a, b, c) {
    a.C.set(b, c);
    return a;
  }
  function ak(a, b) {
    return a instanceof Lj ? new Lj(a) : new Lj(a, b);
  }
  function Rj(a, b) {
    return a
      ? b
        ? decodeURI(a.replace(/%25/g, "%2525"))
        : decodeURIComponent(a)
      : "";
  }
  function Sj(a, b, c) {
    return typeof a === q
      ? ((a = encodeURI(a).replace(b, bk)),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  }
  function bk(a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  }
  var Tj = /[#\/\?@]/g,
    Vj = /[#\?:]/g,
    Uj = /[#\?]/g,
    Yj = /[#\?@]/g,
    Wj = /#/g;
  function Pj(a, b) {
    this.D = this.C = null;
    this.F = a || null;
    this.G = !!b;
  }
  function ck(a) {
    a.C ||
      ((a.C = new Tg()),
      (a.D = 0),
      a.F &&
        hh(a.F, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  }
  function dk(a) {
    var b = eh(a);
    if ("undefined" == typeof b) throw Error("Keys are undefined");
    var c = new Pj(null, void 0);
    a = dh(a);
    for (var d = 0; d < b.length; d++) {
      var e = b[d],
        f = a[d];
      Array.isArray(f) ? ek(c, e, f) : c.add(e, f);
    }
    return c;
  }
  r = Pj.prototype;
  r.T = function () {
    ck(this);
    return this.D;
  };
  r.add = function (a, b) {
    ck(this);
    this.F = null;
    a = fk(this, a);
    var c = this.C.get(a);
    c || this.C.set(a, (c = []));
    c.push(b);
    this.D = this.D + 1;
    return this;
  };
  function gk(a, b) {
    ck(a);
    b = fk(a, b);
    Wg(a.C.C, b) && ((a.F = null), (a.D = a.D - a.C.get(b).length), Vg(a.C, b));
  }
  r.ia = function () {
    ck(this);
    return 0 == this.D;
  };
  function hk(a, b) {
    ck(a);
    b = fk(a, b);
    return Wg(a.C.C, b);
  }
  r.forEach = function (a, b) {
    ck(this);
    this.C.forEach(function (c, d) {
      z(
        c,
        function (e) {
          a.call(b, e, d, this);
        },
        this
      );
    }, this);
  };
  r.ha = function () {
    ck(this);
    for (var a = this.C.X(), b = this.C.ha(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  r.X = function (a) {
    ck(this);
    var b = [];
    if (typeof a === q) hk(this, a) && (b = rc(b, this.C.get(fk(this, a))));
    else {
      a = this.C.X();
      for (var c = 0; c < a.length; c++) b = rc(b, a[c]);
    }
    return b;
  };
  r.set = function (a, b) {
    ck(this);
    this.F = null;
    a = fk(this, a);
    hk(this, a) && (this.D = this.D - this.C.get(a).length);
    this.C.set(a, [b]);
    this.D = this.D + 1;
    return this;
  };
  r.get = function (a, b) {
    if (!a) return b;
    a = this.X(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  function ek(a, b, c) {
    gk(a, b);
    0 < c.length &&
      ((a.F = null), a.C.set(fk(a, b), sc(c)), (a.D = a.D + c.length));
  }
  r.toString = function () {
    if (this.F) return this.F;
    if (!this.C) return "";
    for (var a = [], b = this.C.ha(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.X(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.F = a.join("&"));
  };
  function fk(a, b) {
    b = String(b);
    a.G && (b = b.toLowerCase());
    return b;
  }
  function Xj(a, b) {
    b &&
      !a.G &&
      (ck(a),
      (a.F = null),
      a.C.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (gk(this, d), ek(this, e, c));
      }, a));
    a.G = b;
  }
  r.od = function (a) {
    for (var b = 0; b < arguments.length; b++)
      fh(
        arguments[b],
        function (c, d) {
          this.add(d, c);
        },
        this
      );
  };
  var ik = {},
    jk = {},
    kk = {};
  function lk() {
    throw Error("Do not instantiate directly");
  }
  lk.prototype.tb = null;
  lk.prototype.xb = function () {
    return this.content;
  };
  lk.prototype.toString = function () {
    return this.content;
  };
  function mk() {
    lk.call(this);
  }
  y(mk, lk);
  mk.prototype.Vb = ik;
  function nk(a, b) {
    return null != a && a.Vb === b;
  }
  function ok(a) {
    if (null != a)
      switch (a.tb) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  }
  function pk(a) {
    return nk(a, ik)
      ? a
      : a instanceof Td
      ? qk(Vd(a).toString(), a.C())
      : qk(te(String(String(a))), ok(a));
  }
  var qk = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.tb = d);
      return c;
    };
  })(mk);
  function rk(a) {
    if (nk(a, ik)) {
      var b = String;
      a = String(a.xb()).replace(sk, "").replace(tk, "&lt;");
      b = b(a).replace(uk, vk);
    } else b = te(String(a));
    return b;
  }
  function wk(a) {
    nk(a, jk) || nk(a, kk)
      ? (a = xk(a))
      : a instanceof E
      ? (a = xk(rd(a)))
      : a instanceof ad
      ? (a = xk(cd(a).toString()))
      : ((a = String(a)), (a = yk.test(a) ? a.replace(zk, Ak) : sa));
    return a;
  }
  var Bk = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
  function vk(a) {
    return Bk[a];
  }
  var Ck = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD",
  };
  function Ak(a) {
    return Ck[a];
  }
  var uk = /[\x00\x22\x27\x3c\x3e]/g,
    zk =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    yk =
      /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    Dk =
      /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
  function xk(a) {
    return String(a).replace(zk, Ak);
  }
  var sk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    tk = /</g; /*

 Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  (function () {}.prototype = Object.create(null));
  var Ek = {};
  function Fk(a, b) {
    var c = a.config,
      d = a.ac,
      e = a.Sb;
    a = a.depth;
    var f = e.extraIconClass,
      g =
        '<li class="comment" id="c' +
        rk(e.id) +
        '"><div class="avatar-image-container"><img src="',
      h = e.authorAvatarSrc;
    nk(h, jk) || nk(h, kk)
      ? (h = xk(h))
      : h instanceof E
      ? (h = xk(rd(h)))
      : h instanceof ad
      ? (h = xk(cd(h).toString()))
      : ((h = String(h)), (h = Dk.test(h) ? h.replace(zk, Ak) : sa));
    f =
      g +
      rk(h) +
      '" alt=""/></div><div class="comment-block"><div class="comment-header"><cite class="user">' +
      (e.authorUrl
        ? '<a href="' +
          rk(wk(e.authorUrl)) +
          '" rel="nofollow">' +
          pk(e.author) +
          "</a>"
        : pk(e.author)) +
      '</cite><span class="icon user ' +
      rk(null != f ? f : "") +
      '"></span><span class="datetime secondary-text"><a rel="nofollow" href="' +
      rk(wk(e.url)) +
      '">' +
      pk(e.timestamp) +
      '</a></span></div><p class="comment-content">' +
      pk(e.body) +
      '</p><span class="comment-actions secondary-text">' +
      (a < c.maxDepth
        ? '<a class="comment-reply" target="_self" data-comment-id="' +
          rk(e.id) +
          '">' +
          pk(d.reply) +
          "</a>"
        : "") +
      '<span class="item-control blog-admin ' +
      rk(e.adminClass) +
      '"><a target="_self" href="' +
      rk(wk(e.deleteUrl)) +
      '">' +
      pk(d["delete"]) +
      '</a></span></span></div><div class="comment-replies">';
    g = e.replies;
    g = null != g ? g : [];
    f +=
      '<div id="c' +
      rk(e.id) +
      '-rt" class="comment-thread inline-thread' +
      (0 == g.length ? " hidden" : "") +
      '"><span class="thread-toggle thread-expanded"><span class="thread-arrow"></span><span class="thread-count"><a target="_self">' +
      pk(d.replies) +
      '</a></span></span><ol id="c' +
      rk(e.id) +
      '-ra" class="thread-chrome thread-expanded"><div>';
    h = g.length;
    for (var m = 0; m < h; m++)
      f += Fk({ config: c, ac: d, Sb: g[m], depth: a ? a + 1 : 1 }, b);
    f +=
      '</div><div id="c' +
      rk(e.id) +
      '-continue" class="continue"><a class="comment-reply" target="_self" data-comment-id="' +
      rk(e.id) +
      '">' +
      pk(d.reply) +
      '</a></div></ol></div></div><div class="comment-replybox-single" id="c' +
      rk(e.id) +
      '-ce"></div></li>';
    return qk(f);
  }
  function Gk() {}
  Xb(Gk);
  function Hk(a) {
    $f.call(this);
    this.Y = a || gc || (gc = new nf());
    this.ea = null;
    this.sa = !1;
    this.C = null;
    this.D = void 0;
    this.V = this.Z = null;
  }
  y(Hk, $f);
  Gk.Aa();
  r = Hk.prototype;
  r.Ra = function () {
    return this.C;
  };
  function Ik(a) {
    a.D || (a.D = new Vf(a));
    return a.D;
  }
  r.$b = function () {
    this.C = $e(this.Y.D, "DIV");
  };
  r.render = function (a) {
    if (this.sa) throw Error("Component already rendered");
    this.C || this.$b();
    a ? a.insertBefore(this.C, null) : this.Y.D.body.appendChild(this.C);
    (this.Z && !this.Z.sa) || this.Qa();
  };
  r.Qa = function () {
    this.sa = !0;
    Jk(this, function (a) {
      !a.sa && a.Ra() && a.Qa();
    });
  };
  function Kk(a) {
    Jk(a, function (b) {
      b.sa && Kk(b);
    });
    a.D && Zf(a.D);
    a.sa = !1;
  }
  r.W = function () {
    this.sa && Kk(this);
    this.D && (this.D.ua(), delete this.D);
    Jk(this, function (a) {
      a.ua();
    });
    this.C && cf(this.C);
    this.Z = this.C = this.V = null;
    Hk.O.W.call(this);
  };
  function Jk(a, b) {
    a.V && z(a.V, b, void 0);
  }
  function Lk(a, b, c, d, e) {
    Hk.call(this, e);
    this.K = d || window;
    this.aa = a;
    this.M = b;
    this.R = {};
    this.L = this.F = null;
    this.G = {};
    c || (this.G.GOOGLEPLUS = { Fa: "Google+", Oa: this.cd });
    this.G.EMAIL = { Fa: "Email", Oa: this.ad };
    this.G.FACEBOOK = { Fa: "Facebook", Oa: this.bd };
    this.G.TWITTER = { Fa: "Twitter", Oa: this.dd };
  }
  u(Lk, Hk);
  r = Lk.prototype;
  r.$b = function () {
    var a = this.Y,
      b = a.C("DIV", {
        style:
          "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;",
        class: "mobile-share-panel-outer",
      });
    this.F = a.C("DIV", {
      style: "position:absolute;;width:230px;height:200px;",
      class: "mobile-share-panel-inner",
    });
    b.appendChild(this.F);
    var c = a.C("DIV", { class: "mobile-share-panel-title" });
    c.innerText = oa;
    c.textContent = oa;
    this.F.appendChild(c);
    this.L = a.C("A", {
      href: "javascript:void(0)",
      class: "mobile-share-panel-button-close",
    });
    this.L.textContent = "\u00d7";
    c.appendChild(this.L);
    for (var d in this.G) {
      c = a.C("A", {
        target: qa,
        display: ua,
        class:
          "mobile-share-panel-button mobile-share-panel-button-" +
          d.toLowerCase(),
      });
      var e = a.C(ka),
        f = this.G[d];
      e.innerText = f.Fa;
      e.textContent = f.Fa;
      c.href = f.Oa.call(this);
      c.appendChild(e);
      this.F.appendChild(c);
      this.R[d] = c;
    }
    this.C = b;
  };
  r.Qa = function () {
    Hk.prototype.Qa.call(this);
    for (var a in this.R) {
      var b = this.R[a];
      b && Xf(Ik(this), b, wa, this.sb);
    }
    Xf(Ik(this), this.L, wa, this.sb);
    a = this.Ra();
    Xf(Ik(this), a, wa, this.sb);
    this.Pb();
    Xf(Ik(this), this.K, "scroll", this.Pb);
  };
  r.show = function (a) {
    var b = this.Ra();
    b && (b.style.display = a ? "" : n);
  };
  r.Pb = function () {
    var a = this.K.innerHeight,
      b = this.K.innerWidth,
      c = this.K.pageYOffset,
      d = this.K.pageXOffset,
      e = 0;
    200 < a && (e = (a - 200) / 2);
    Ui(this.F, "top", e + c + "px");
    a = 0;
    230 < b && (a = (b - 230) / 2);
    Ui(this.F, "left", a + d + "px");
  };
  r.dd = function () {
    return (
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(this.aa + ": " + this.M)
    );
  };
  r.bd = function () {
    return (
      "https://m.facebook.com/sharer.php?u=" +
      encodeURIComponent(this.M) +
      "&t=" +
      encodeURIComponent(this.aa)
    );
  };
  r.ad = function () {
    return (
      "mailto:?subject=" +
      encodeURIComponent(this.aa) +
      "&body=" +
      encodeURIComponent(this.M)
    );
  };
  r.cd = function () {
    return (
      "https://plus.google.com/share?source=blogger:mobile:share&url=" +
      encodeURIComponent(this.M)
    );
  };
  r.sb = function () {
    this.show(!1);
  };
  var Mk =
      /^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z]|-testonly)?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|(ccp-lh\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(play-(ti-)?lh\.googleusercontent)|(gz0\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(lh[3-6]\.(googleadsserving\.cn|xn--9kr7l\.com))|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\//i,
    Nk = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i,
    Ok =
      /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i,
    Pk =
      /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;
  function Qk(a) {
    return Mk.test(a) || Nk.test(a) || Ok.test(a) || Pk.test(a);
  }
  function Rk(a) {
    a || (a = []);
    this.G = -1;
    this.C = a;
    a: {
      if ((a = this.C.length)) {
        --a;
        var b = this.C[a];
        if (
          !(
            null === b ||
            typeof b != p ||
            Array.isArray(b) ||
            (Ij && b instanceof Uint8Array)
          )
        ) {
          this.F = a - -1;
          this.D = b;
          break a;
        }
      }
      this.F = Number.MAX_VALUE;
    }
  }
  y(Rk, Hj);
  Rk.prototype.getToken = function () {
    return R(this, 24);
  };
  Rk.prototype.setToken = function (a) {
    return U(this, 24, a);
  };
  function Sk() {
    this.D = void 0;
    this.C = {};
  }
  r = Sk.prototype;
  r.set = function (a, b) {
    Tk(this, a, b, !1);
  };
  r.add = function (a, b) {
    Tk(this, a, b, !0);
  };
  function Tk(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      a.C[f] || (a.C[f] = new Sk());
      a = a.C[f];
    }
    if (d && void 0 !== a.D)
      throw Error('The collection already contains the key "' + b + '"');
    a.D = c;
  }
  function Uk(a, b) {
    for (var c = 0; c < b.length; c++) if (((a = a.C[b.charAt(c)]), !a)) return;
    return a;
  }
  r.get = function (a) {
    return (a = Uk(this, a)) ? a.D : void 0;
  };
  r.X = function () {
    var a = [];
    Vk(this, a);
    return a;
  };
  function Vk(a, b) {
    void 0 !== a.D && b.push(a.D);
    for (var c in a.C) Vk(a.C[c], b);
  }
  r.ha = function (a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!c.C[e]) return [];
        c = c.C[e];
      }
      Wk(c, a, b);
    } else Wk(this, "", b);
    return b;
  };
  function Wk(a, b, c) {
    void 0 !== a.D && c.push(b);
    for (var d in a.C) Wk(a.C[d], b + d, c);
  }
  r.T = function () {
    var a = this.X();
    if (a.T && typeof a.T == l) a = a.T();
    else if (Yb(a) || typeof a === q) a = a.length;
    else {
      var b = 0,
        c;
      for (c in a) b++;
      a = b;
    }
    return a;
  };
  r.ia = function () {
    return void 0 === this.D && Kc(this.C);
  };
  function Xk() {
    if (!Yk) {
      var a = (Yk = new Sk()),
        b;
      for (b in Zk) a.add(b, Zk[b]);
    }
  }
  var Yk;
  function V(a, b) {
    this.types = a;
    this.C = b;
  }
  var Zk = {
    a: new V(
      [3, 0],
      [
        function (a, b) {
          U(a, 21, b);
        },
        function (a, b) {
          U(a, 56, b);
        },
      ]
    ),
    al: new V(
      [3],
      [
        function (a, b) {
          U(a, 74, b);
        },
      ]
    ),
    b: new V(
      [3, 0],
      [
        function (a, b) {
          U(a, 23, b);
        },
        function (a, b) {
          U(a, 38, b);
        },
      ]
    ),
    ba: new V(
      [0],
      [
        function (a, b) {
          U(a, 85, b);
        },
      ]
    ),
    bc: new V(
      [0],
      [
        function (a, b) {
          U(a, 87, b);
        },
      ]
    ),
    br: new V(
      [0],
      [
        function (a, b) {
          U(a, 86, b);
        },
      ]
    ),
    c: new V(
      [3, 0],
      [
        function (a, b) {
          U(a, 2, b);
        },
        function (a, b) {
          U(a, 39, b);
        },
      ]
    ),
    cc: new V(
      [3],
      [
        function (a, b) {
          U(a, 51, b);
        },
      ]
    ),
    ci: new V(
      [3],
      [
        function (a, b) {
          U(a, 32, b);
        },
      ]
    ),
    cp: new V(
      [0],
      [
        function (a, b) {
          U(a, 92, b);
        },
      ]
    ),
    cv: new V(
      [0],
      [
        function (a, b) {
          U(a, 94, b);
        },
      ]
    ),
    d: new V(
      [3],
      [
        function (a, b) {
          U(a, 3, b);
        },
      ]
    ),
    df: new V(
      [3],
      [
        function (a, b) {
          U(a, 80, b);
        },
      ]
    ),
    dv: new V(
      [3],
      [
        function (a, b) {
          U(a, 90, b);
        },
      ]
    ),
    e: new V(
      [0],
      [
        function (a, b) {
          U(a, 15, b);
        },
      ]
    ),
    f: new V(
      [4],
      [
        function (a, b) {
          U(a, 16, b);
        },
      ]
    ),
    fg: new V(
      [3],
      [
        function (a, b) {
          U(a, 34, b);
        },
      ]
    ),
    fh: new V(
      [3],
      [
        function (a, b) {
          U(a, 30, b);
        },
      ]
    ),
    fm: new V(
      [3],
      [
        function (a, b) {
          U(a, 84, b);
        },
      ]
    ),
    fo: new V(
      [2],
      [
        function (a, b) {
          U(a, 79, b);
        },
      ]
    ),
    ft: new V(
      [3],
      [
        function (a, b) {
          U(a, 50, b);
        },
      ]
    ),
    fv: new V(
      [3],
      [
        function (a, b) {
          U(a, 31, b);
        },
      ]
    ),
    g: new V(
      [3],
      [
        function (a, b) {
          U(a, 14, b);
        },
      ]
    ),
    gd: new V(
      [3],
      [
        function (a, b) {
          U(a, 83, b);
        },
      ]
    ),
    h: new V(
      [3, 0],
      [
        function (a, b) {
          U(a, 4, b);
        },
        function (a, b) {
          U(a, 13, b);
        },
      ]
    ),
    i: new V(
      [3],
      [
        function (a, b) {
          U(a, 22, b);
        },
      ]
    ),
    ic: new V(
      [0],
      [
        function (a, b) {
          U(a, 71, b);
        },
      ]
    ),
    id: new V(
      [3],
      [
        function (a, b) {
          U(a, 70, b);
        },
      ]
    ),
    il: new V(
      [3],
      [
        function (a, b) {
          U(a, 96, b);
        },
      ]
    ),
    ip: new V(
      [3],
      [
        function (a, b) {
          U(a, 54, b);
        },
      ]
    ),
    iv: new V(
      [0],
      [
        function (a, b) {
          U(a, 75, b);
        },
      ]
    ),
    j: new V(
      [1],
      [
        function (a, b) {
          U(a, 29, b);
        },
      ]
    ),
    k: new V(
      [3, 0],
      [
        function (a, b) {
          U(a, 17, b);
        },
        function (a, b) {
          U(a, 42, b);
        },
      ]
    ),
    l: new V(
      [0],
      [
        function (a, b) {
          U(a, 44, b);
        },
      ]
    ),
    lf: new V(
      [3],
      [
        function (a, b) {
          U(a, 65, b);
        },
      ]
    ),
    lo: new V(
      [3],
      [
        function (a, b) {
          U(a, 97, b);
        },
      ]
    ),
    m: new V(
      [0],
      [
        function (a, b) {
          U(a, 63, b);
        },
      ]
    ),
    md: new V(
      [3],
      [
        function (a, b) {
          U(a, 91, b);
        },
      ]
    ),
    mm: new V(
      [4],
      [
        function (a, b) {
          U(a, 81, b);
        },
      ]
    ),
    mo: new V(
      [3],
      [
        function (a, b) {
          U(a, 73, b);
        },
      ]
    ),
    mv: new V(
      [3],
      [
        function (a, b) {
          U(a, 66, b);
        },
      ]
    ),
    n: new V(
      [3],
      [
        function (a, b) {
          U(a, 20, b);
        },
      ]
    ),
    nc: new V(
      [3],
      [
        function (a, b) {
          U(a, 55, b);
        },
      ]
    ),
    nd: new V(
      [3],
      [
        function (a, b) {
          U(a, 53, b);
        },
      ]
    ),
    ng: new V(
      [3],
      [
        function (a, b) {
          U(a, 95, b);
        },
      ]
    ),
    no: new V(
      [3],
      [
        function (a, b) {
          U(a, 37, b);
        },
      ]
    ),
    ns: new V(
      [3],
      [
        function (a, b) {
          U(a, 40, b);
        },
      ]
    ),
    nt0: new V(
      [4],
      [
        function (a, b) {
          U(a, 36, b);
        },
      ]
    ),
    nu: new V(
      [3],
      [
        function (a, b) {
          U(a, 46, b);
        },
      ]
    ),
    nw: new V(
      [3],
      [
        function (a, b) {
          U(a, 48, b);
        },
      ]
    ),
    o: new V(
      [1, 3],
      [
        function (a, b) {
          U(a, 7, b);
        },
        function (a, b) {
          U(a, 27, b);
        },
      ]
    ),
    p: new V(
      [3, 0],
      [
        function (a, b) {
          U(a, 19, b);
        },
        function (a, b) {
          U(a, 43, b);
        },
      ]
    ),
    pa: new V(
      [3],
      [
        function (a, b) {
          U(a, 61, b);
        },
      ]
    ),
    pc: new V(
      [0],
      [
        function (a, b) {
          U(a, 88, b);
        },
      ]
    ),
    pd: new V(
      [3],
      [
        function (a, b) {
          U(a, 60, b);
        },
      ]
    ),
    pf: new V(
      [3],
      [
        function (a, b) {
          U(a, 67, b);
        },
      ]
    ),
    pg: new V(
      [3],
      [
        function (a, b) {
          U(a, 72, b);
        },
      ]
    ),
    pi: new V(
      [2],
      [
        function (a, b) {
          U(a, 76, b);
        },
      ]
    ),
    pp: new V(
      [3],
      [
        function (a, b) {
          U(a, 52, b);
        },
      ]
    ),
    q: new V(
      [4],
      [
        function (a, b) {
          U(a, 28, b);
        },
      ]
    ),
    r: new V(
      [3, 0],
      [
        function (a, b) {
          U(a, 6, b);
        },
        function (a, b) {
          U(a, 26, b);
        },
      ]
    ),
    rg: new V(
      [3],
      [
        function (a, b) {
          U(a, 59, b);
        },
      ]
    ),
    rh: new V(
      [3],
      [
        function (a, b) {
          U(a, 49, b);
        },
      ]
    ),
    rj: new V(
      [3],
      [
        function (a, b) {
          U(a, 57, b);
        },
      ]
    ),
    ro: new V(
      [2],
      [
        function (a, b) {
          U(a, 78, b);
        },
      ]
    ),
    rp: new V(
      [3],
      [
        function (a, b) {
          U(a, 58, b);
        },
      ]
    ),
    rw: new V(
      [3],
      [
        function (a, b) {
          U(a, 35, b);
        },
      ]
    ),
    rwa: new V(
      [3],
      [
        function (a, b) {
          U(a, 64, b);
        },
      ]
    ),
    rwu: new V(
      [3],
      [
        function (a, b) {
          U(a, 41, b);
        },
      ]
    ),
    s: new V(
      [3, 0],
      [
        function (a, b) {
          U(a, 33, b);
        },
        function (a, b) {
          U(a, 1, b);
        },
      ]
    ),
    sc: new V(
      [0],
      [
        function (a, b) {
          U(a, 89, b);
        },
      ]
    ),
    sg: new V(
      [3],
      [
        function (a, b) {
          U(a, 82, b);
        },
      ]
    ),
    sm: new V(
      [3],
      [
        function (a, b) {
          U(a, 93, b);
        },
      ]
    ),
    t: new V(
      [4],
      [
        function (a, b) {
          a.setToken(b);
        },
      ]
    ),
    u: new V(
      [3],
      [
        function (a, b) {
          U(a, 18, b);
        },
      ]
    ),
    ut: new V(
      [3],
      [
        function (a, b) {
          U(a, 45, b);
        },
      ]
    ),
    v: new V(
      [0],
      [
        function (a, b) {
          U(a, 62, b);
        },
      ]
    ),
    vb: new V(
      [0],
      [
        function (a, b) {
          U(a, 68, b);
        },
      ]
    ),
    vl: new V(
      [0],
      [
        function (a, b) {
          U(a, 69, b);
        },
      ]
    ),
    vm: new V(
      [3],
      [
        function (a, b) {
          U(a, 98, b);
        },
      ]
    ),
    w: new V(
      [0],
      [
        function (a, b) {
          U(a, 12, b);
        },
      ]
    ),
    x: new V(
      [0],
      [
        function (a, b) {
          U(a, 9, b);
        },
      ]
    ),
    y: new V(
      [0],
      [
        function (a, b) {
          U(a, 10, b);
        },
      ]
    ),
    ya: new V(
      [2],
      [
        function (a, b) {
          U(a, 77, b);
        },
      ]
    ),
    z: new V(
      [0],
      [
        function (a, b) {
          U(a, 11, b);
        },
      ]
    ),
  };
  r = Xk.prototype;
  r.parse = function (a) {
    var b = new Rk(),
      c = new Rk();
    if ("" != a) {
      a = a.split("-");
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (0 != e.length) {
          var f = e,
            g = !1,
            h = f;
          var m = f.substring(0, 1);
          m != m.toLowerCase() &&
            ((g = !0), (h = f.substring(0, 1).toLowerCase() + f.substring(1)));
          var t = Yk;
          for (m = 1; m <= h.length; ++m) {
            var H = t,
              A = h.substring(0, m);
            if (0 == A.length ? H.ia() : !Uk(H, A)) break;
          }
          m =
            1 == m
              ? null
              : (h = t.get(h.substring(0, m - 1)))
              ? {
                  yd: f.substring(0, m - 1),
                  value: f.substring(m - 1),
                  Hd: g,
                  attributes: h,
                }
              : null;
          if (m) {
            f = [];
            g = [];
            h = !1;
            for (t = 0; t < m.attributes.types.length; t++) {
              H = m.attributes.types[t];
              var D = m.value;
              A = d;
              if (m.Hd && 1 == H)
                for (var M = D.length; 12 > M && A < a.length - 1; )
                  (D += "-" + a[A + 1]), (M = D.length), ++A;
              else if (2 == H)
                for (; A < a.length - 1 && a[A + 1].match(/^[\d\.]/); )
                  (D += "-" + a[A + 1]), ++A;
              M = m.attributes.C[t];
              D = $k(this, H)(m.yd, D, b, c, M);
              if (null === D) {
                h = !0;
                d = A;
                break;
              } else f.push(H), g.push(D);
            }
            if (!h)
              for (m = 0; m < g.length; m++)
                (h = f[m]), (D = g[m]), al(this, h)(e, D);
          }
        }
      }
    }
    return new bl(b, c);
  };
  function cl(a, b, c, d, e) {
    e(c, b);
    a = a.substring(0, 1);
    e(d, a == a.toUpperCase());
  }
  r.Cd = function (a, b, c, d, e) {
    if ("" == b) return 0;
    isFinite(b) && (b = String(b));
    b =
      typeof b === q
        ? /^\s*-?0x/i.test(b)
          ? parseInt(b, 16)
          : parseInt(b, 10)
        : NaN;
    if (isNaN(b)) return 1;
    cl(a, b, c, d, e);
    return null;
  };
  r.td = function () {};
  r.Bd = function (a, b, c, d, e) {
    if ("" == b) return 0;
    var f = Number(b);
    b = 0 == f && /^[\s\xa0]*$/.test(b) ? NaN : f;
    if (isNaN(b)) return 1;
    cl(a, b, c, d, e);
    return null;
  };
  r.sd = function () {};
  r.Ad = function (a, b, c, d, e) {
    if ("" != b) return 2;
    cl(a, !0, c, d, e);
    return null;
  };
  r.rd = function () {};
  r.Dd = function (a, b, c, d, e) {
    if ("" == b) return 0;
    cl(a, b, c, d, e);
    return null;
  };
  r.ud = function () {};
  function $k(a, b) {
    switch (b) {
      case 0:
        return w(a.Cd, a);
      case 2:
        return w(a.Bd, a);
      case 3:
        return w(a.Ad, a);
      case 4:
      case 1:
        return w(a.Dd, a);
      default:
        return function () {};
    }
  }
  function al(a, b) {
    switch (b) {
      case 0:
        return w(a.td, a);
      case 2:
        return w(a.sd, a);
      case 3:
        return w(a.rd, a);
      case 4:
      case 1:
        return w(a.ud, a);
      default:
        return function () {};
    }
  }
  function bl(a, b) {
    this.C = a;
    this.D = b;
  }
  function dl(a, b) {
    null != a && this.D.apply(this, arguments);
  }
  dl.prototype.C = "";
  dl.prototype.set = function (a) {
    this.C = "" + a;
  };
  dl.prototype.D = function (a, b, c) {
    this.C += String(a);
    if (null != b)
      for (var d = 1; d < arguments.length; d++) this.C += arguments[d];
    return this;
  };
  dl.prototype.toString = function () {
    return this.C;
  };
  function el(a) {
    this.G = null;
    this.F = [];
    this.C = null;
    fl(this, a);
  }
  function gl(a) {
    null == a.G && (a.G = new Xk());
    return a.G;
  }
  function fl(a, b) {
    a.C = b ? (typeof b === q ? gl(a).parse(b) : b) : gl(a).parse("");
  }
  function hl(a, b) {
    return a == b ? !1 : !0;
  }
  r = el.prototype;
  r.lb = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, T(c, 2), T(b.D, 2)) && U(c, 2, a);
    return this;
  };
  r.kb = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, S(c, 51), S(b.D, 51)) && U(c, 51, a);
    return this;
  };
  r.mb = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, S(c, 32), S(b.D, 32)) && U(c, 32, a);
    return this;
  };
  r.La = function (a) {
    var b = this.C,
      c = b.C;
    hl(a, R(c, 13), R(b.D, 13)) && U(c, 13, a);
    return this;
  };
  r.jb = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, T(c, 20), T(b.D, 20)) && U(c, 20, a);
    return this;
  };
  r.ob = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, T(c, 19), T(b.D, 19)) && U(c, 19, a);
    return this;
  };
  r.nb = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, S(c, 60), S(b.D, 60)) && U(c, 60, a);
    return this;
  };
  r.qb = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, T(c, 67), T(b.D, 67)) && U(c, 67, a);
    return this;
  };
  r.pb = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, T(c, 52), T(b.D, 52)) && U(c, 52, a);
    return this;
  };
  r.za = function (a) {
    var b = this.C,
      c = b.C;
    hl(a, R(c, 1), R(b.D, 1)) && U(c, 1, a);
    return this;
  };
  r.setToken = function (a) {
    a = a || void 0;
    var b = this.C,
      c = b.C;
    hl(a, c.getToken(), b.D.getToken()) && c.setToken(a);
    return this;
  };
  r.Ma = function (a) {
    var b = this.C,
      c = b.C;
    hl(a, R(c, 12), R(b.D, 12)) && U(c, 12, a);
    return this;
  };
  function il(a) {
    fl(a, "");
    return a;
  }
  r.ra = function () {
    this.F.length = 0;
    var a = this.C,
      b = a.C;
    a = a.D;
    W(this, "s", R(b, 1), R(a, 1));
    W(this, "w", R(b, 12), R(a, 12));
    X(this, "c", T(b, 2), T(a, 2));
    X(this, "d", T(b, 3), T(a, 3));
    W(this, "h", R(b, 13), R(a, 13));
    X(this, "s", S(b, 33), S(a, 33));
    X(this, "h", T(b, 4), T(a, 4));
    X(this, "p", T(b, 19), T(a, 19));
    X(this, "pp", T(b, 52), T(a, 52));
    X(this, "pf", T(b, 67), T(a, 67));
    X(this, "n", T(b, 20), T(a, 20));
    W(this, "r", R(b, 26), R(a, 26));
    X(this, "r", T(b, 6), T(a, 6));
    X(this, "o", S(b, 27), S(a, 27));
    var c = R(b, 7),
      d = R(a, 7);
    c && jl(this, "o", c, !!d);
    c = R(b, 29);
    d = R(a, 29);
    c && jl(this, "j", c, !!d);
    W(this, "x", R(b, 9), R(a, 9));
    W(this, "y", R(b, 10), R(a, 10));
    W(this, "z", R(b, 11), R(a, 11));
    X(this, "g", T(b, 14), T(a, 14));
    W(this, "e", R(b, 15), R(a, 15));
    c = R(b, 16);
    d = R(a, 16);
    c && jl(this, "f", c, !!d);
    X(this, "k", S(b, 17), S(a, 17));
    X(this, "u", S(b, 18), S(a, 18));
    X(this, "ut", S(b, 45), S(a, 45));
    X(this, "i", S(b, 22), S(a, 22));
    X(this, "a", S(b, 21), S(a, 21));
    X(this, "b", T(b, 23), T(a, 23));
    W(this, "b", R(b, 38), R(a, 38));
    W(this, "c", R(b, 39), R(a, 39), 16, 8);
    c = R(b, 28);
    d = R(a, 28);
    c && jl(this, "q", c, !!d);
    X(this, "fh", S(b, 30), S(a, 30));
    X(this, "fv", S(b, 31), S(a, 31));
    X(this, "fg", T(b, 34), T(a, 34));
    X(this, "ci", S(b, 32), S(a, 32));
    c = b.getToken();
    d = a.getToken();
    c && jl(this, "t", c, !!d);
    c = R(b, 36);
    d = R(a, 36);
    c && jl(this, "nt0", c, !!d);
    X(this, "rw", T(b, 35), T(a, 35));
    X(this, "rwu", T(b, 41), T(a, 41));
    X(this, "rwa", T(b, 64), T(a, 64));
    X(this, "nw", T(b, 48), T(a, 48));
    X(this, "rh", T(b, 49), T(a, 49));
    X(this, "no", T(b, 37), T(a, 37));
    X(this, "ns", S(b, 40), S(a, 40));
    W(this, "k", R(b, 42), R(a, 42));
    W(this, "p", R(b, 43), R(a, 43));
    W(this, "l", R(b, 44), R(a, 44));
    W(this, "v", R(b, 62), R(a, 62));
    X(this, "nu", S(b, 46), S(a, 46));
    X(this, "ft", S(b, 50), S(a, 50));
    X(this, "cc", S(b, 51), S(a, 51));
    X(this, "nd", S(b, 53), S(a, 53));
    X(this, "ip", S(b, 54), S(a, 54));
    X(this, "nc", S(b, 55), S(a, 55));
    W(this, "a", R(b, 56), R(a, 56));
    X(this, "rj", S(b, 57), S(a, 57));
    X(this, "rp", S(b, 58), S(a, 58));
    X(this, "rg", S(b, 59), S(a, 59));
    X(this, "pd", S(b, 60), S(a, 60));
    X(this, "pa", S(b, 61), S(a, 61));
    W(this, "m", R(b, 63), R(a, 63));
    W(this, "vb", R(b, 68), R(a, 68));
    W(this, "vl", R(b, 69), R(a, 69));
    X(this, "lf", S(b, 65), S(a, 65));
    X(this, "mv", S(b, 66), S(a, 66));
    X(this, "id", S(b, 70), S(a, 70));
    W(this, "ic", R(b, 71), R(a, 71));
    X(this, "pg", T(b, 72), T(a, 72));
    X(this, "mo", S(b, 73), S(a, 73));
    X(this, "al", S(b, 74), S(a, 74));
    W(this, "iv", R(b, 75), R(a, 75));
    W(this, "pi", Kj(b, 76), Kj(a, 76));
    W(this, "ya", Kj(b, 77), Kj(a, 77));
    W(this, "ro", Kj(b, 78), Kj(a, 78));
    W(this, "fo", Kj(b, 79), Kj(a, 79));
    X(this, "df", S(b, 80), S(a, 80));
    c = R(b, 81);
    d = R(a, 81);
    c && jl(this, "mm", c, !!d);
    X(this, "sg", S(b, 82), S(a, 82));
    X(this, "gd", S(b, 83), S(a, 83));
    X(this, "fm", S(b, 84), S(a, 84));
    W(this, "ba", R(b, 85), R(a, 85));
    W(this, "br", R(b, 86), R(a, 86));
    W(this, "bc", R(b, 87), R(a, 87), 16, 8);
    W(this, "pc", R(b, 88), R(a, 88), 16, 8);
    W(this, "sc", R(b, 89), R(a, 89), 16, 8);
    X(this, "dv", S(b, 90), S(a, 90));
    X(this, "md", S(b, 91), S(a, 91));
    W(this, "cp", R(b, 92), R(a, 92));
    X(this, "sm", S(b, 93), S(a, 93));
    W(this, "cv", R(b, 94), R(a, 94));
    X(this, "ng", S(b, 95), S(a, 95));
    X(this, "il", S(b, 96), S(a, 96));
    X(this, "lo", S(b, 97), S(a, 97));
    X(this, "vm", S(b, 98), S(a, 98));
    return this.F.join("-");
  };
  function W(a, b, c, d, e, f) {
    if (null != c) {
      var g = void 0 == e || (10 != e && 16 != e) ? 10 : e;
      c = c.toString(g);
      e = new dl();
      e.D(16 == g ? "0x" : "");
      g = e.D;
      void 0 == f
        ? (f = "")
        : ((f -= c.length), (f = 0 >= f ? "" : ue("0", f)));
      g.call(e, f);
      e.D(c);
      jl(a, b, e.toString(), !!d);
    }
  }
  function X(a, b, c, d) {
    c && jl(a, b, "", !!d);
  }
  function jl(a, b, c, d) {
    d && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
    a.F.push(b + c);
  }
  function Y(a) {
    el.call(this, a);
  }
  y(Y, el);
  r = Y.prototype;
  r.lb = function (a) {
    a && kl(this);
    return Y.O.lb.call(this, a);
  };
  r.La = function (a) {
    a = null == a || 0 > a ? void 0 : a;
    null != a && this.za();
    return Y.O.La.call(this, a);
  };
  r.mb = function (a) {
    a && kl(this);
    return Y.O.mb.call(this, a);
  };
  r.kb = function (a) {
    a && kl(this);
    return Y.O.kb.call(this, a);
  };
  r.za = function (a) {
    Zb(a) && (a = Math.max(a.width, a.height));
    a = null == a || 0 > a ? void 0 : a;
    null != a && (this.Ma(), this.La());
    return Y.O.za.call(this, a);
  };
  r.ob = function (a) {
    a && kl(this);
    return Y.O.ob.call(this, a);
  };
  r.pb = function (a) {
    a && kl(this);
    return Y.O.pb.call(this, a);
  };
  r.qb = function (a) {
    a && kl(this);
    return Y.O.qb.call(this, a);
  };
  r.jb = function (a) {
    a && kl(this);
    return Y.O.jb.call(this, a);
  };
  r.nb = function (a) {
    a && kl(this);
    return Y.O.nb.call(this, a);
  };
  r.Ma = function (a) {
    a = null == a || 0 > a ? void 0 : a;
    null != a && this.za();
    return Y.O.Ma.call(this, a);
  };
  function kl(a) {
    a.jb();
    a.kb();
    a.lb();
    a.mb();
    a.nb();
    a.ob();
    a.pb();
    a.qb();
  }
  r.ra = function () {
    var a = this.C.C;
    S(a, 18) || S(a, 45)
      ? R(a, 1) || this.za(0)
      : ((a = this.C.C),
        R(a, 1) ||
          R(a, 12) ||
          R(a, 13) ||
          (this.za(), this.La(), this.Ma(), kl(this)));
    return Y.O.ra.call(this);
  };
  var ll = /^[^\/]*\/\//;
  function ml(a) {
    this.G = a;
    this.J = "";
    (a = this.G.match(ll)) && a[0]
      ? ((this.J = a[0]),
        (a = this.J.match(/\w+/)
          ? this.G
          : "http://" + this.G.substring(this.J.length)))
      : (a = "http://" + this.G);
    this.D = ak(a, !0);
    this.K = !0;
    this.ga = !1;
  }
  function nl(a, b) {
    a.F = a.F ? a.F + ("/" + b) : b;
  }
  function ol(a) {
    if (void 0 == a.C) {
      a.F = null;
      a.C = a.D.J.substring(1).split("/");
      var b = a.C.length;
      2 < b &&
        "u" == a.C[0] &&
        (nl(a, a.C[0] + "/" + a.C[1]), a.C.shift(), a.C.shift(), (b -= 2));
      if (0 == b || 4 == b || 7 < b) return (a.K = !1), a.C;
      if (2 == b) nl(a, a.C[0]);
      else if ("image" == a.C[0]) nl(a, a.C[0]);
      else if (7 == b || 3 == b) return (a.K = !1), a.C;
      if (3 >= b) {
        a.ga = !0;
        3 == b && (nl(a, a.C[1]), a.C.shift(), --b);
        --b;
        var c = a.C[b],
          d = c.indexOf("=");
        -1 != d && ((a.C[b] = c.substr(0, d)), a.C.push(c.substr(d + 1)));
      }
    }
    return a.C;
  }
  function pl(a) {
    ol(a);
    return a.ga;
  }
  function ql(a) {
    ol(a);
    void 0 == a.F && (a.F = null);
    return a.F;
  }
  function rl(a) {
    switch (ol(a).length) {
      case 7:
        return !0;
      case 6:
        return null == ql(a);
      case 5:
        return !1;
      case 3:
        return !0;
      case 2:
        return null == ql(a);
      case 1:
        return !1;
      default:
        return !1;
    }
  }
  function sl(a, b) {
    if (pl(a))
      a: {
        var c = null != ql(a) ? 1 : 0;
        switch (b) {
          case 6:
            b = 0 + c;
            break;
          case 4:
            if (!rl(a)) {
              a = null;
              break a;
            }
            b = 1 + c;
            break;
          default:
            a = null;
            break a;
        }
        a = ol(a)[b];
      }
    else
      a: {
        c = null != ql(a) ? 1 : 0;
        switch (b) {
          case 0:
            b = 0 + c;
            break;
          case 1:
            b = 1 + c;
            break;
          case 2:
            b = 2 + c;
            break;
          case 3:
            b = 3 + c;
            break;
          case 4:
            if (!rl(a)) {
              a = null;
              break a;
            }
            b = 4 + c;
            break;
          case 5:
            b = rl(a) ? 1 : 0;
            b = 4 + c + b;
            break;
          default:
            a = null;
            break a;
        }
        a = ol(a)[b];
      }
    return a;
  }
  function tl(a) {
    void 0 == a.Z && (a.Z = sl(a, 4));
    return a.Z;
  }
  function ul() {}
  ul.prototype.parse = function (a) {
    return new vl(a);
  };
  function vl(a) {
    ml.call(this, a);
  }
  u(vl, ml);
  function wl(a) {
    this.D = null;
    a instanceof vl ||
      (void 0 == xl && (xl = new ul()), (a = xl.parse(a.toString())));
    a = this.D = a;
    if (void 0 == a.L) {
      var b = tl(a);
      b || (b = "");
      a.L = new Xk().parse(b);
    }
    el.call(this, a.L);
    this.L = this.D.J;
    a = this.D;
    b = a.D.K;
    this.K = a.D.G + (b ? ":" + b : "");
    this.J = this.D.D.C.toString();
  }
  var xl;
  y(wl, Y);
  function yl(a) {
    a.J = "";
    return a;
  }
  wl.prototype.ra = function () {
    var a = this.D;
    ol(a);
    if (!a.K) return this.D.G;
    var b = wl.O.ra.call(this);
    a = [];
    null != ql(this.D) && a.push(ql(this.D));
    if (pl(this.D)) {
      var c = this.D;
      void 0 == c.V && (c.V = sl(c, 6));
      a.push(c.V + (b ? "=" + b : ""));
    } else {
      c = a.push;
      var d = this.D;
      void 0 == d.Y && (d.Y = sl(d, 0));
      c.call(a, d.Y);
      c = a.push;
      d = this.D;
      void 0 == d.aa && (d.aa = sl(d, 1));
      c.call(a, d.aa);
      c = a.push;
      d = this.D;
      void 0 == d.R && (d.R = sl(d, 2));
      c.call(a, d.R);
      c = a.push;
      d = this.D;
      void 0 == d.qa && (d.qa = sl(d, 3));
      c.call(a, d.qa);
      b && a.push(b);
      b = a.push;
      c = this.D;
      void 0 == c.M && (c.M = sl(c, 5));
      b.call(a, c.M);
    }
    return this.L + this.K + "/" + a.join("/") + (this.J ? "?" + this.J : "");
  };
  var zl = new ul();
  function Al() {
    this.F = null;
    this.C = {};
    this.D = !1;
  }
  Al.prototype.init = function (a, b) {
    var c = Dc(a);
    Mg.Aa().init(a, c);
    this.G = b;
  };
  Al.prototype.J = function (a, b, c) {
    c.ctrlKey ||
      c.altKey ||
      c.shiftKey ||
      c.metaKey ||
      ((a = this.C[a]) &&
        0 < a.length &&
        (Bl(this), Pg()(a, b), c.preventDefault()));
  };
  Al.prototype.K = function () {
    Bl(this);
    Ng(Wb);
  };
  function Bl(a) {
    a.D ||
      (document.body.appendChild(
        Ye("LINK", { type: "text/css", rel: "stylesheet", href: a.G })
      ),
      (a.D = !0));
  }
  Xb(Al);
  function Cl() {
    this.D = {};
    this.C = 0;
    this.J = [];
    this.F = [];
    var a = this;
    this.K = function () {
      Dl(a);
    };
  }
  Cl.prototype.init = function () {
    for (
      var a = this.D, b = Ve(document, "img", "delayLoad", void 0), c = 0;
      c < b.length;
      c++
    )
      if ((b[c].style.display == n && (b[c].style.display = ""), 5 > c)) {
        var d = b[c];
        "" != d.longDesc && (d.src = d.longDesc);
      } else
        (d = b[c].id),
          "" == d && (d = "av-delay-tempId-" + c),
          (a[d] = { Xb: b[c], key: d }),
          this.C++;
    0 != this.C &&
      ((this.M = N(window, "scroll", this.K)),
      (this.L = N(window, "resize", this.K)),
      El(this));
  };
  function Dl(a) {
    a.G && window.clearTimeout(a.G);
    a.G = window.setTimeout(function () {
      a.G = null;
      El(a);
    }, 100);
  }
  function El(a) {
    if (!(0 > a.C))
      if (0 == a.C) Qf(a.M), Qf(a.L), (a.C = -1);
      else {
        var b = !1,
          c;
        for (c in a.D) {
          a: {
            var d = a;
            var e = a.D[c],
              f = window.document;
            f = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
            f = new Se(f.clientWidth, f.clientHeight).height;
            var g = e.Xb;
            if (1 == g.nodeType) {
              try {
                var h = g.getBoundingClientRect();
              } catch (m) {
                h = { left: 0, top: 0, right: 0, bottom: 0 };
              }
              g = new Re(h.left, h.top);
            } else
              (g = g.changedTouches ? g.changedTouches[0] : g),
                (g = new Re(g.clientX, g.clientY));
            g = g.y;
            if (0 <= g && g <= f) d.J.push(e);
            else if (0 < g && g < Math.round(2.25 * f)) d.F.push(e);
            else if (0 > g && g > Math.round(-1.25 * f)) d.F.push(e);
            else {
              d = !1;
              break a;
            }
            d = !0;
          }
          d && (b = !0);
        }
        if (b) {
          b = a.J.concat(a.F);
          for (c = 0; c < b.length; c++)
            (h = b[c].Xb),
              "" != h.longDesc && (h.src = h.longDesc),
              a.C--,
              delete a.D[b[c].key];
          a.J = [];
          a.F = [];
        }
      }
  }
  var Fl =
    !J &&
    !(
      F("Safari") &&
      !(
        Sd() ||
        F("Coast") ||
        F("Opera") ||
        F(fa) ||
        F("Edg/") ||
        F("OPR") ||
        F("Firefox") ||
        F("FxiOS") ||
        F("Silk") ||
        F("Android")
      )
    );
  function Gl(a) {
    if (/-[a-z]/.test("commentId")) return null;
    if (Fl && a.dataset) {
      if (
        !(
          !F("Android") ||
          Sd() ||
          F("Firefox") ||
          F("FxiOS") ||
          F("Opera") ||
          F("Silk") ||
          "commentId" in a.dataset
        )
      )
        return null;
      a = a.dataset.commentId;
      return void 0 === a ? null : a;
    }
    return a.getAttribute(
      "data-" + "commentId".replace(/([A-Z])/g, "-$1").toLowerCase()
    );
  }
  function Hl(a) {
    Q.call(this, "Blog", a);
    this.C = a.N;
    this.J = new hj(mj());
    if (this.C.data) {
      a = new Wh();
      this.K = this.C.data.showBacklinks;
      this.L = Yh(a, "blog.canonicalUrl");
      if (this.C.data.lightboxEnabled) {
        var b = this.C.data.lightboxModuleUrl,
          c = this.C.data.lightboxCssUrl;
        Al.Aa().init(b, c);
        b = Ve(document, "DIV", "post-body", this.C.C);
        for (c = 0; c < b.length; c++) {
          for (
            var d = "fakeId" + Il++,
              e = Al.Aa(),
              f = Ve(document, "IMG", void 0, b[c]),
              g = f.length,
              h = [],
              m = 0;
            m < g;
            m++
          ) {
            var t = f[m].src,
              H = null,
              A = lf(f[m], "A");
            if (A) {
              A = A.href;
              var D = A;
              var M = t;
              if (Qk(D) && Qk(M)) {
                var ba = new ul();
                D = ba.parse(D ? il(yl(new wl(D))).ra() : "");
                M = ba.parse(M ? il(yl(new wl(M))).ra() : "");
                M = D.D.J == M.D.J;
              } else M = !1;
              if (M) {
                if ((A != t && (H = t), (t = A), (A = tl(zl.parse(t)))))
                  (A = new Xk().parse(A)),
                    (A = new Y(A)),
                    (M = ((M = void 0), void 0)),
                    (ba = A.C),
                    (D = ba.C),
                    hl(M, T(D, 4), T(ba.D, 4)) && U(D, 4, M),
                    (M = ((M = void 0), void 0)),
                    (ba = A.C),
                    (D = ba.C),
                    hl(M, T(D, 6), T(ba.D, 6)) && U(D, 6, M),
                    (A = A.ra()),
                    (t = new wl(t)),
                    fl(t, A),
                    (t = t.ra());
              } else if (A != t) continue;
              h.push({ imageUrl: t, thumbnailUrl: H });
              N(f[m], wa, w(e.J, e, d, h.length - 1));
            }
          }
          0 < h.length &&
            ((e.C[d] = h), e.F || (e.F = N(window, "load", e.K, !1, e)));
        }
      }
      this.C.data.mobile &&
        (this.F = new Lk(
          Yh(a, "blog.pageTitle"),
          this.L,
          !!Yh(a, "blog.sharing.disableGooglePlus")
        ));
      this.G = this.D = null;
    }
  }
  u(Hl, Q);
  r = Hl.prototype;
  r.ja = function (a, b) {
    if ("backlinks" == a) {
      this.K = !1;
      if ((a = P(this.H, "backlinks-container"))) (b = yj(b)), G(a, b);
      b = Ve(document, "span", "backlink-toggle-zippy", this.C.C);
      for (a = 0; a < b.length; a++) b[a].onclick = this.Uc.bind(this);
      b = P(this.H, "backlinks-create-link");
      null != b && (b.onclick = this.jc.bind(this, b.href));
    } else if ("getComments" == a) {
      if (b.comments && b.messages) {
        a = b.comments;
        for (var c = b.config, d = 0; d < a.length; d++)
          a: {
            var e = b,
              f = a[d];
            if (!document.getElementById("c" + f.id)) {
              f.author = wj(this.J, f.author);
              f.body = wj(this.J, f.body);
              var g = 1;
              if (f.inReplyTo) {
                var h = document.getElementById("c" + f.inReplyTo);
                if (h) {
                  var m;
                  g = h;
                  for (m = []; g; ) B(g, "comment") && m.push(g), (g = df(g));
                  g = m.length + 1;
                  m.length + 1 > e.config.maxDepth &&
                    ((h = lf(h.parentNode, null, "comment", void 0))
                      ? (g--, (f.inReplyTo = h.id.slice(1)))
                      : (g = 1));
                }
              }
              h = document.getElementById("c" + f.inReplyTo + "-ra");
              if (!h && ((h = document.getElementById("top-ra")), !h)) break a;
              g = { config: e.config, ac: e.messages, Sb: f, depth: g };
              m = Fk;
              e = gc || (gc = new nf());
              g = m(g || Ek, void 0);
              if (Zb(g))
                if (g instanceof lk) {
                  if (g.Vb !== ik)
                    throw Error("Sanitized content was not of kind HTML.");
                  g = ie(
                    Vc(
                      "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."
                    ),
                    g.toString(),
                    g.tb
                  );
                } else g = Wd("zSoyz");
              else g = Wd(String(g));
              e = e.D;
              m = g;
              g = $e(e, "DIV");
              J
                ? ((m = fe(he, m)), G(g, m), g.removeChild(g.firstChild))
                : G(g, m);
              if (1 == g.childNodes.length) e = g.removeChild(g.firstChild);
              else
                for (e = e.createDocumentFragment(); g.firstChild; )
                  e.appendChild(g.firstChild);
              Jl(this, e);
              h.appendChild(e);
              f.inReplyTo &&
                (f = document.getElementById("c" + f.inReplyTo + "-rt")) &&
                Ac(f, $a);
            }
          }
        a.length < c.commentsPerPage
          ? ((this.D = null), (b = L("loadmore", this.C.C)), yc(b, $a))
          : (this.D = a[a.length - 1].timestampAbs + 1);
      }
    } else Q.prototype.ja.call(this, a, b);
  };
  r.Wc = function (a) {
    var b = null,
      c = null;
    a = lf(a.currentTarget, null, "thread-toggle", void 0);
    B(a, pb) ? ((b = ob), (c = pb)) : ((b = pb), (c = ob));
    z(Ue(c, df(a)), function (d) {
      Cc(d, c, b);
    });
  };
  r.Ic = function (a) {
    a = Gl(a.currentTarget);
    Kl(this, a || void 0);
  };
  function Kl(a, b) {
    var c = document.getElementById(Aa);
    if (c) {
      var d = ak(c.src),
        e = b ? "c" + b : "top",
        f = document.getElementById(e + "-ce");
      f &&
        f !== df(c) &&
        ((c.height = "250px"),
        (c.style.display = ua),
        (c.src = ""),
        f.appendChild(c),
        b ? d.C.set("parentID", b) : gk(d.C, "parentID"),
        (c.src = d.toString()));
      z(Ue("continue", a.C.C), function (g) {
        Ac(g, $a);
      });
      (a = document.getElementById(e + "-continue")) && yc(a, $a);
    }
  }
  r.Ac = function () {
    this.G &&
      this.D &&
      this.H.na(
        "getComments",
        { postId: this.G, publishedMin: this.D },
        function (a) {
          return 500 > qe(a);
        },
        ia
      );
  };
  r.Uc = function (a) {
    a = a || window.event;
    for (
      a = (a.srcElement || a.target).parentNode;
      a && !B(a, "backlink-control");

    )
      a = a.parentNode;
    a && (B(a, Ua) ? (Ac(a, Ua), yc(a, ya)) : (yc(a, Ua), Ac(a, ya)));
  };
  r.fa = function () {
    this.K &&
      this.H.na(
        "backlinks",
        { postID: this.C.data.postId },
        function (b) {
          500 <= qe(b)
            ? (window.console &&
                console.log &&
                ((b = b.responseText.match(/bX-\w*/)[0]),
                console.log("Error loading backlinks: " + b)),
              (b = !1))
            : (b = !0);
          return b;
        },
        ia
      );
    if (this.C.data.mobile) {
      var a = K(Aa);
      Ll() ? a && (a.style.display = ua) : a && (a.style.display = n);
      a = P(this.H, "comment-editor-toggle-link");
      null != a && (a.onclick = this.Vc);
      (a = K("mobile-share-button")) &&
        this.F &&
        (a.onclick = w(this.wd, this));
    }
    this.M = new Cl();
    this.M.init();
    Ml(this);
  };
  function Ml(a) {
    Jl(a, a.C.C);
    var b = L("loadmore", a.C.C);
    if (b) {
      b.onclick = a.Ac.bind(a);
      if (Fl && b.dataset) var c = b.dataset;
      else {
        c = {};
        for (var d = b.attributes, e = 0; e < d.length; ++e) {
          var f = d[e];
          if (gd(f.name, "data-")) {
            var g = ve(f.name.substr(5));
            c[g] = f.value;
          }
        }
      }
      c.publishedMin &&
        c.postId &&
        ((a.D = parseInt(c.publishedMin, 10) + 1), (a.G = c.postId), Ac(b, $a));
    }
    Kl(a);
  }
  function Jl(a, b) {
    z(
      Ue("thread-toggle", b),
      function (c) {
        c.onclick = this.Wc.bind(this);
        z((c || document).getElementsByTagName("A"), function (d) {
          d.href = "javascript:;";
        });
      },
      a
    );
    z(
      Ue("comment-reply", b),
      function (c) {
        c.onclick = this.Ic.bind(this);
        c.href = "javascript:;";
      },
      a
    );
  }
  r.wd = function () {
    this.F.sa ? this.F.show(!0) : this.F.render();
  };
  function Ll() {
    var a = window.location.href.split("#");
    return a[a.length - 1] && "comment-form" == a[a.length - 1];
  }
  r.Vc = function () {
    var a = K(Aa);
    a && (a.style.display = a.style.display == n ? ua : n);
    return !1;
  };
  r.jc = function (a) {
    var b = "";
    document.selection
      ? (b = document.selection.createRange().text)
      : window.getSelection
      ? (b = window.getSelection())
      : document.getSelection && (b = document.getSelection());
    window.open(
      a +
        "?t=" +
        encodeURIComponent(b) +
        "&u=" +
        encodeURIComponent(window.location.href) +
        "&n=" +
        encodeURIComponent(document.title),
      "bloggerForm",
      "scrollbars=no,width=475,height=300,top=175,left=75,status=yes,resizable=yes"
    );
    return !1;
  };
  var Il = 0;
  x("_BlogView", Hl);
  function Nl(a) {
    Q.call(this, "BlogList", a);
  }
  u(Nl, Q);
  r = Nl.prototype;
  r.fa = function () {
    var a = this.H.N.data;
    this.Db = a.totalItems;
    this.Wa = a.numItemsToShow;
    0 != this.Wa &&
      this.Db > this.Wa &&
      ((Rh(this.H, "show-all").onclick = this.hc.bind(this)),
      (Rh(this.H, "show-n").onclick = this.hc.bind(this)));
    N(window, "load", this.zc);
  };
  r.hc = function () {
    var a = P(this.H, "blogs");
    if (null != a) {
      a = a.getElementsByTagName("li");
      for (var b = this.Wa; b < this.Db; b++) {
        var c = a[b];
        c.style.display = c.style.display == n ? ua : n;
      }
      a = Rh(this.H, "show-all");
      a.style.display = a.style.display == n ? "inline" : n;
      a = Rh(this.H, "show-n");
      a.style.display = a.style.display == n ? "inline" : n;
    }
  };
  r.zc = function () {
    for (var a = 0, b = document.images.length; a < b; a++) {
      var c = document.images[a],
        d = null;
      if ((d = c.getAttribute("data-lateloadsrc")))
        N(c, Sa, function () {
          this.style.visibility = $a;
        }),
          (c.src = d);
    }
  };
  r.Db = null;
  r.Wa = null;
  x("_BlogListView", Nl);
  function Ol(a) {
    Q.call(this, "BlogSearch", a);
  }
  u(Ol, Q);
  x("_BlogSearchView", Ol);
  var Pl =
    /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
  function Ql(a) {
    Q.call(this, "ContactForm", a);
    this.C = a.N;
    this.F = this.C.data;
  }
  y(Ql, Q);
  x("_ContactFormView", Ql);
  Ql.prototype.fa = function () {
    var a = K(P(this.H, Ia));
    if (a) {
      var b = this;
      a.onclick = function () {
        Rl(b) && Sl(b);
      };
    }
  };
  function Rl(a) {
    K(P(a.H, Fa)).className = Fa;
    K(P(a.H, Fa)).textContent = "";
    K(P(a.H, Ja)).className = Ja;
    K(P(a.H, Ja)).textContent = "";
    var b = $e(document, "IMG");
    b.src =
      "https://resources.blogblog.com/img/widgets/icon_contactform_cross.gif";
    b.className = "contact-form-cross";
    b.onclick = function () {
      K(P(a.H, Fa)).className = Fa;
      K(P(a.H, Fa)).textContent = "";
    };
    var c = C(K(P(a.H, Da)).value);
    if (!Pl.test(c))
      return (
        (K(P(a.H, Fa)).className = Ga),
        (K(P(a.H, Fa)).innerHTML = a.F.contactFormInvalidEmailMsg),
        K(P(a.H, Fa)).appendChild(b),
        !1
      );
    c = K(P(a.H, Ea)).value;
    return null == c || "" == C(c)
      ? ((K(P(a.H, Fa)).className = Ga),
        (K(P(a.H, Fa)).innerHTML = a.F.contactFormEmptyMessageMsg),
        K(P(a.H, Fa)).appendChild(b),
        !1)
      : !0;
  }
  function Sl(a) {
    K(P(a.H, Ia)).className =
      "contact-form-button contact-form-button-submit disabled";
    K(P(a.H, Ia)).disabled = !0;
    K(P(a.H, Ja)).className = Ka;
    K(P(a.H, Ja)).innerHTML = a.F.contactFormMessageSendingMsg;
    var b = encodeURIComponent(C(K(P(a.H, Ha)).value)),
      c = encodeURIComponent(C(K(P(a.H, Da)).value)),
      d = encodeURIComponent(C(K(P(a.H, Ea)).value)),
      e = encodeURIComponent(a.F.blogId);
    b = ["name=" + b, "email=" + c, "message=" + d, "blogID=" + e];
    c = a.F.submitUrl;
    if (window.XDomainRequest && J && !Ke("10")) {
      var f = new XDomainRequest();
      f.onload = function () {
        var g = eval("(" + f.responseText + ")");
        g = eval(g.details.emailSentStatus);
        Tl(a, g);
      };
      f.open("post", c, !0);
      f.send(b.join("&"));
    } else mh(c, a.ed.bind(a), "POST", b.join("&"));
  }
  Ql.prototype.ed = function (a) {
    a = a.target;
    var b = eval("(" + wh(a) + ")");
    b = eval(b.details.emailSentStatus);
    Tl(this, vh(a) && b);
  };
  function Tl(a, b) {
    K(P(a.H, Ja)).className = Ka;
    b
      ? ((K(P(a.H, Ha)).value = ""),
        (K(P(a.H, Da)).value = ""),
        (K(P(a.H, Ea)).value = ""),
        (K(P(a.H, Ja)).innerHTML = a.F.contactFormMessageSentMsg))
      : (K(P(a.H, Ja)).innerHTML = a.F.contactFormMessageNotSentMsg);
    setTimeout(function () {
      K(P(a.H, Ja)).className = Ja;
      K(P(a.H, Ja)).textContent = "";
      K(P(a.H, Ia)).className =
        "contact-form-button contact-form-button-submit";
      K(P(a.H, Ia)).removeAttribute("disabled");
    }, 3e3);
  }
  function Ul(a) {
    Q.call(this, "Example", a);
  }
  u(Ul, Q);
  x("_ExampleView", Ul);
  function Vl(a) {
    Q.call(this, "FeaturedPost", a);
  }
  u(Vl, Q);
  x("_FeaturedPostView", Vl); /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  function Wl(a) {
    var b = Xl;
    this.J = [];
    this.ga = b;
    this.Y = a || null;
    this.G = this.C = !1;
    this.F = void 0;
    this.R = this.Z = this.L = !1;
    this.K = 0;
    this.D = null;
    this.M = 0;
  }
  Wl.prototype.cancel = function (a) {
    if (this.C) this.F instanceof Wl && this.F.cancel();
    else {
      if (this.D) {
        var b = this.D;
        delete this.D;
        a ? b.cancel(a) : (b.M--, 0 >= b.M && b.cancel());
      }
      this.ga ? this.ga.call(this.Y, this) : (this.R = !0);
      this.C || ((a = new Yl(this)), Zl(this), $l(this, !1, a));
    }
  };
  Wl.prototype.V = function (a, b) {
    this.L = !1;
    $l(this, a, b);
  };
  function $l(a, b, c) {
    a.C = !0;
    a.F = c;
    a.G = !b;
    am(a);
  }
  function Zl(a) {
    if (a.C) {
      if (!a.R) throw new bm(a);
      a.R = !1;
    }
  }
  Wl.prototype.callback = function (a) {
    Zl(this);
    $l(this, !0, a);
  };
  function cm(a, b, c, d) {
    a.J.push([b, c, d]);
    a.C && am(a);
  }
  Wl.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new rg(function (g, h) {
        d = g;
        e = h;
      });
    cm(this, d, function (g) {
      g instanceof Yl ? f.cancel() : e(g);
    });
    return f.then(a, b, c);
  };
  Wl.prototype.$goog_Thenable = !0;
  function dm(a) {
    return lc(a.J, function (b) {
      return typeof b[1] === l;
    });
  }
  function am(a) {
    if (a.K && a.C && dm(a)) {
      var b = a.K,
        c = em[b];
      c && (v.clearTimeout(c.ea), delete em[b]);
      a.K = 0;
    }
    a.D && (a.D.M--, delete a.D);
    b = a.F;
    for (var d = (c = !1); a.J.length && !a.L; ) {
      var e = a.J.shift(),
        f = e[0],
        g = e[1];
      e = e[2];
      if ((f = a.G ? g : f))
        try {
          var h = f.call(e || a.Y, b);
          void 0 !== h &&
            ((a.G = a.G && (h == b || h instanceof Error)), (a.F = b = h));
          if (qg(b) || (typeof v.Promise === l && b instanceof v.Promise))
            (d = !0), (a.L = !0);
        } catch (m) {
          (b = m), (a.G = !0), dm(a) || (c = !0);
        }
    }
    a.F = b;
    d &&
      ((h = w(a.V, a, !0)),
      (d = w(a.V, a, !1)),
      b instanceof Wl ? (cm(b, h, d), (b.Z = !0)) : b.then(h, d));
    c && ((b = new fm(b)), (em[b.ea] = b), (a.K = b.ea));
  }
  function bm() {
    fc.call(this);
  }
  y(bm, fc);
  bm.prototype.message = "Deferred has already fired";
  bm.prototype.name = "AlreadyCalledError";
  function Yl() {
    fc.call(this);
  }
  y(Yl, fc);
  Yl.prototype.message = "Deferred was canceled";
  Yl.prototype.name = "CanceledError";
  function fm(a) {
    this.ea = v.setTimeout(w(this.D, this), 0);
    this.C = a;
  }
  fm.prototype.D = function () {
    delete em[this.ea];
    throw this.C;
  };
  var em = {};
  function gm(a, b) {
    var c = b || {};
    b = c.document || document;
    var d = cd(a).toString(),
      e = $e(document, "SCRIPT"),
      f = { fc: e, la: void 0 },
      g = new Wl(f),
      h = null,
      m = null != c.timeout ? c.timeout : 5e3;
    0 < m &&
      ((h = window.setTimeout(function () {
        hm(e, !0);
        var t = new im(1, "Timeout reached for loading script " + d);
        Zl(g);
        $l(g, !1, t);
      }, m)),
      (f.la = h));
    e.onload = e.onreadystatechange = function () {
      (e.readyState && "loaded" != e.readyState && e.readyState != Ba) ||
        (hm(e, c.jd || !1, h), g.callback(null));
    };
    e.onerror = function () {
      hm(e, !0, h);
      var t = new im(0, "Error while loading script " + d);
      Zl(g);
      $l(g, !1, t);
    };
    f = c.attributes || {};
    Nc(f, { type: nb, charset: "UTF-8" });
    We(e, f);
    me(e, a);
    jm(b).appendChild(e);
    return g;
  }
  function jm(a) {
    var b = (a || document).getElementsByTagName("HEAD");
    return b && 0 != b.length ? b[0] : a.documentElement;
  }
  function Xl() {
    if (this && this.fc) {
      var a = this.fc;
      a && "SCRIPT" == a.tagName && hm(a, !0, this.la);
    }
  }
  function hm(a, b, c) {
    null != c && v.clearTimeout(c);
    a.onload = Wb;
    a.onerror = Wb;
    a.onreadystatechange = Wb;
    b &&
      window.setTimeout(function () {
        cf(a);
      }, 0);
  }
  function im(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    fc.call(this, c);
    this.code = a;
  }
  y(im, fc);
  function km() {
    this.C = lm;
    this.la = 5e3;
  }
  var mm = 0;
  km.prototype.cancel = function (a) {
    a && (a.ld && a.ld.cancel(), a.ea && nm(a.ea, !1));
  };
  function om(a) {
    return function () {
      nm(a, !1);
    };
  }
  function pm(a, b) {
    return function (c) {
      nm(a, !0);
      b.apply(void 0, arguments);
    };
  }
  function nm(a, b) {
    a = "_callbacks___" + a;
    if (v[a])
      if (b)
        try {
          delete v[a];
        } catch (c) {
          v[a] = void 0;
        }
      else v[a] = Wb;
  }
  function qm(a) {
    Q.call(this, "Feed", a);
  }
  u(qm, Q);
  qm.prototype.ja = function (a, b) {
    "getFeed" == a
      ? ((this.C.F = b), rm(this.C))
      : Q.prototype.ja.call(this, a, b);
  };
  qm.prototype.fa = function () {
    if ((this.D = P(this.H, "feedItemListDisplay"))) {
      var a = this.H.N.data;
      this.C = new sm(a.feedUrl, this.D, {
        numItemsShow: a.numItemsShow,
        showItemAuthor: a.showItemAuthor,
        showItemDate: a.showItemDate,
        linkTarget: a.openLinksInNewWindow ? qa : "_self",
        useFeedWidgetServ: "true" === a.useFeedWidgetServ,
      });
      "true" === a.useFeedWidgetServ
        ? this.H.na("getFeed", null, null, ia)
        : rm(this.C);
    }
  };
  var tm = {
    moduleTitle: null,
    feedUrl: function (a) {
      a = a.replace(/^\s+/, "").replace(/\s+$/, "");
      if (0 == a.length) return LayoutsMessages.FIELD_CANNOT_BE_BLANK;
    },
    numItemsShow: (function (a, b) {
      return function (c) {
        c = parseInt(c, 10);
        if (isNaN(c)) return LayoutsMessages.MUST_SPECIFY_A_NUMBER;
        if (c < a) return LayoutsMessages.NUMBER_TOO_SMALL + " " + a;
        if (c > b) return LayoutsMessages.NUMBER_TOO_LARGE + " " + b;
      };
    })(1, 5),
    showItemDate: null,
    showItemAuthor: null,
    securityToken: null,
    openLinksInNewWindow: null,
  };
  function sm(a, b, c) {
    this.L = a;
    this.D = b;
    this.C = c;
  }
  function rm(a) {
    if (a.C.useFeedWidgetServ) "ok" == a.F.status ? um(a, a.F.feed) : vm(a);
    else {
      var b = new km();
      b.la = -1;
      var c = { q: a.L, num: a.C.numItemsShow, output: "json", v: "1.0" },
        d = w(a.G, a);
      a = c ? Lc(c) : {};
      c = "_" + (mm++).toString(36) + Date.now().toString(36);
      var e = "_callbacks___" + c;
      d && ((v[e] = pm(c, d)), (a.callback = e));
      d = { timeout: b.la, jd: !0 };
      b = cd(b.C).toString();
      b = dd.exec(b);
      e = b[3] || "";
      a = ed(b[1] + fd("?", b[2] || "", a) + fd("#", e, void 0));
      a = gm(a, d);
      cm(a, null, om(c), void 0);
    }
  }
  sm.prototype.G = function (a) {
    200 == a.responseStatus ? um(this, a.responseData.feed) : vm(this);
  };
  function um(a, b) {
    bf(a.D);
    var c = $e(document, "ul");
    a.D.appendChild(c);
    for (
      var d = Math.min(b.entries.length, a.C.numItemsShow), e = 0;
      e < d;
      e++
    ) {
      var f = b.entries[e],
        g = $e(document, "li");
      c.appendChild(g);
      var h;
      (h = a.C.previewMode) ||
        ((h = new Lj(f.link).F),
        (h = !("" == h || "http" == h || "https" == h)));
      h = h
        ? Ye("A", { href: "javascript:void(0);" }, f.title)
        : Ye("A", { href: f.link }, f.title);
      h.target = a.C.linkTarget;
      g.appendChild(Ye(ka, { class: "item-title" }, h));
      a.C.showItemDate &&
        ((h = Ye(
          ka,
          { class: "item-date" },
          "\u00a0-\u00a0" + new Date(f.publishedDate).toLocaleDateString()
        )),
        g.appendChild(h));
      a.C.showItemAuthor &&
        ((f = Ye(ka, { class: "item-author" }, "\u00a0-\u00a0" + f.author)),
        g.appendChild(f));
    }
    a.J && a.J(b);
  }
  function vm(a) {
    bf(a.D);
    a.D.appendChild(Ye(ka, null, "Error loading feed."));
    a.K && a.K();
  }
  var lm = ed(Uc(Vc("//ajax.googleapis.com/ajax/services/feed/load")));
  x("_FeedView", qm);
  qm._setConfigurationOptions = function () {
    var a;
    tm.security_token = null;
    tm.visible = null;
    a || (a = "config");
    var b = document.forms[a].widgetId.value,
      c = document.forms[a].widgetType.value;
    a = document.forms[a];
    var d = !0,
      e = {},
      f;
    for (f in tm) {
      var g = Uh(a[f]);
      if (void 0 !== g) {
        var h = tm[f],
          m = Vh(f);
        m && (bf(m), (m.className = "errorbox-good"));
        h && (h = h(g)) && (Sh(f, h), (d = !1));
        e[f] = g;
      }
    }
    d && I.Mc(e, b, c);
  };
  function wm(a) {
    Q.call(this, wm.$, a);
  }
  y(wm, Q);
  wm.$ = "FollowByEmail";
  x("_FollowByEmailView", wm);
  function xm(a) {
    Q.call(this, "Followers", a);
    this.C = a.N;
  }
  u(xm, Q);
  xm.prototype.ja = function (a, b) {
    "getFacepile" == a
      ? (ym(this, b), zm(this), Am(this, b))
      : Q.prototype.ja.call(this, a, b);
  };
  xm.prototype.fa = function () {
    Kc(this.C.data) || (zm(this), Am(this, this.C.data));
  };
  function ym(a, b) {
    a = L(Va, a.C.C);
    b = vc(b.followers, Ve(document, "a", "follower-link", a));
    for (a = 0; a < b.length; a++) {
      var c = b[a][0],
        d = b[a][1];
      d.setAttribute(Na, c.viewUrl);
      d.onclick = function () {
        return !1;
      };
      d = L("follower-thumbnail", d);
      d.setAttribute("src", c.thumbnailUrl);
      d.setAttribute("title", c.displayName);
    }
  }
  function zm(a) {
    var b = L(Va, a.C.C);
    if (b) {
      b = Ve(document, "a", "follower-link", b);
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.getAttribute(Na) && (d.onclick = w(Bm, a, d.getAttribute(Na)));
      }
    }
  }
  function Am(a, b) {
    var c = L("followers-next-link", a.C.C);
    c &&
      (b.nextTimestamp
        ? ((c.style.display = "inline"),
          (c = L("next-page-link", c)),
          (c.href = "#"),
          (c.onclick = function () {
            return !1;
          }),
          Rf(c),
          N(c, wa, w(xm.prototype.D, a, b.nextTimestamp)))
        : (c.style.display = n));
  }
  xm.prototype.D = function (a) {
    this.H.na("getFacepile", { fcMT: a }, null, ia);
  };
  function Bm(a) {
    window.open(
      a,
      qa,
      "height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no"
    );
  }
  x("_FollowersView", xm);
  function Cm(a) {
    Q.call(this, Cm.$, a);
  }
  y(Cm, Q);
  Cm.$ = "Header";
  x("_HeaderView", Cm);
  function Dm(a, b) {
    Q.call(this, b, a);
  }
  u(Dm, Q);
  function Em(a) {
    Q.call(this, "Text", a);
  }
  u(Em, Dm);
  function Fm(a) {
    Q.call(this, "HTML", a);
  }
  u(Fm, Dm);
  x("_TextView", Em);
  x("_HTMLView", Fm);
  function Gm(a) {
    Q.call(this, "Image", a);
    this.C = a.N;
  }
  u(Gm, Q);
  Gm.prototype.fa = function () {
    if (1 == this.C.data.resize) {
      var a = P(this.H, "img"),
        b = this.C.C;
      if (a && b) {
        if (document.defaultView)
          b = parseInt(
            document.defaultView.getComputedStyle(b, null).width,
            10
          );
        else if (b.currentStyle)
          (a.style.display = n), (b = b.offsetWidth), (a.style.display = "");
        else return;
        a.width > b &&
          ((a.height = Math.round((b / a.width) * a.height)), (a.width = b));
        a.style.visibility = sb;
      }
    }
  };
  x("_ImageView", Gm);
  function Hm(a) {
    Q.call(this, "Label", a);
  }
  u(Hm, Q);
  x("_LabelView", Hm);
  function Im(a) {
    Q.call(this, Im.$, a);
  }
  y(Im, Q);
  Im.$ = "TextList";
  x("_TextListView", Im);
  function Jm(a) {
    Q.call(this, Jm.$, a);
  }
  y(Jm, Q);
  Jm.$ = "LinkList";
  x("_LinkListView", Jm);
  function Km(a) {
    Q.call(this, "BloggerButton", a);
  }
  u(Km, Q);
  x("_BloggerButtonView", Km);
  function Lm(a) {
    Q.call(this, "Navbar", a);
  }
  u(Lm, Q);
  x("_NavbarView", Lm);
  function Mm(a) {
    Q.call(this, "PageList", a);
  }
  u(Mm, Q);
  Mm.prototype.Ja = function () {
    return "PageList";
  };
  Mm.prototype.fa = function () {
    if (0 != this.H.N.data.mobile) {
      var a = P(this.H, "select");
      a &&
        (a.onchange = function (b) {
          b = b || window.event;
          b = b.target || b.srcElement;
          if ((b = b.options[b.selectedIndex].value)) window.location = b;
        });
    }
  };
  var _PageListView = Mm;
  x("_PageListView", Mm);
  function Nm(a) {
    Q.call(this, "Poll", a);
    this.F = this.D = this.C = null;
    if ((a = this.H.N.data))
      (this.C = "poll-widget" + a.pollid),
        (this.D = a.iframeurl),
        (this.F = N(window, "message", this.G, !1, this)),
        (a = document.getElementsByName(this.C)[0]),
        void 0 != a && (a.src.src = cd(this.D).toString());
  }
  u(Nm, Q);
  Nm.prototype.G = function (a) {
    var b = document.getElementsByName(this.C)[0];
    void 0 != b &&
      ((a = a.C),
      a.source === b.contentWindow &&
        gd(this.D, a.origin) &&
        ((a = a.data),
        typeof a !== eb || 0 > a || ((b.height = a + "px"), Qf(this.F))));
  };
  x("_PollView", Nm);
  function Om(a) {
    Q.call(this, "PopularPosts", a);
  }
  u(Om, Q);
  x("_PopularPostsView", Om);
  function Pm(a) {
    Q.call(this, "Profile", a);
    this.C = a.N;
  }
  u(Pm, Q);
  Pm.prototype.fa = function () {
    this.C &&
      this.C.C &&
      0 == this.H.N.data.isDisplayable &&
      (this.C.C.style.display = n);
  };
  x("_ProfileView", Pm);
  function Qm(a) {
    Q.call(this, "RecentPosts", a);
  }
  u(Qm, Q);
  x("_RecentPostsView", Qm);
  function Rm(a) {
    Q.call(this, "ReportAbuse", a);
  }
  u(Rm, Q);
  x("_ReportAbuseView", Rm);
  function Sm(a) {
    Q.call(this, Sm.$, a);
  }
  y(Sm, Q);
  Sm.$ = "Sharing";
  x("_SharingView", Sm);
  function Tm(a) {
    Q.call(this, "Stats", a);
  }
  u(Tm, Q);
  Tm.prototype.fa = function () {
    null != P(this.H, "totalCount") &&
      mh(this.H.N.data.statsUrl, w(this.G, this));
  };
  Tm.prototype.G = function (a) {
    a = a.target;
    if (vh(a)) {
      if (a.C)
        b: {
          a = a.C.responseText;
          if (v.JSON)
            try {
              var b = v.JSON.parse(a);
              break b;
            } catch (h) {}
          b = Xg(a);
        }
      else b = void 0;
      a = this.H.N.data;
      var c = P(this.H, "totalCount");
      if (null != c) {
        if (a.showGraphicalCounter) {
          this.F = b.total;
          for (var d = "" + b.total, e = 0; e < d.length; e++)
            c.appendChild(
              Ye(
                ka,
                { class: "digit stage-0" },
                Ye(
                  "STRONG",
                  null,
                  document.createTextNode(String(d.charAt(e)))
                ),
                Ye(ka, { class: "blind-plate" })
              )
            );
          a.showAnimatedCounter &&
            ((this.D = new Jg(b.nextTickMs)),
            N(this.D, "tick", w(this.J, this, c)),
            this.D.start());
        } else {
          d = b.total;
          if (isNaN(d) || 0 > d) d = "NaN";
          else {
            d = d.toString();
            e = [];
            for (var f = 0, g = d.length; f < g; f++)
              0 < f && 0 == f % 3 && e.push(","), e.push(d.charAt(g - 1 - f));
            d = e.reverse().join("");
          }
          gf(c, d);
        }
        a.showSparkline &&
          ((a = Rh(this.H, "sparklinespan")),
          (c = b.sparklineData),
          (b = b.sparklineOptions),
          a && c && b ? Um(a, c, b) : a && a.parentNode.removeChild(a));
        Rh(this.H, "content").style.display = "";
      }
    }
  };
  function Um(a, b, c) {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(function () {
      new google.visualization.AreaChart(a).draw(
        google.visualization.arrayToDataTable(b, !0),
        Object.assign(
          {
            enableInteractivity: !1,
            chartArea: { top: 0, left: 0, width: 75, height: 30 },
            hAxis: { textPosition: n, gridlines: { color: "transparent" } },
            vAxis: { textPosition: n, gridlines: { color: "transparent" } },
            legend: { position: n },
          },
          c
        )
      );
    });
  }
  Tm.prototype.J = function (a) {
    if (Vm(this.F + 1) > Vm(this.F)) Rf(this.D), Kg(this.D);
    else {
      this.F++;
      for (var b = "" + this.F, c = 0; c < b.length; c++) {
        var d = a.childNodes[c],
          e = b.charAt(c);
        var f = d.firstChild;
        if (Pe && null !== f && "innerText" in f)
          f = f.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
          var g = [];
          kf(f, g, !0);
          f = g.join("");
        }
        f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        f = f.replace(/\u200B/g, "");
        Pe || (f = f.replace(/ +/g, " "));
        " " != f && (f = f.replace(/^\s*/, ""));
        f != e &&
          (gf(d.firstChild, e),
          Lg(w(this.C, this, d, 1), 50),
          Lg(w(this.C, this, d, 2), 100),
          Lg(w(this.C, this, d, 3), 150),
          Lg(w(this.C, this, d, 0), 200));
      }
    }
  };
  function Vm(a) {
    return 0 == a ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1;
  }
  Tm.prototype.C = function (a, b) {
    var c = "stage-" + (0 != b ? b - 1 : 3);
    b = "stage-" + b;
    var d = xc(a);
    typeof c === q ? qc(d, c) : Array.isArray(c) && (d = Bc(d, c));
    typeof b !== q || oc(d, b) ? Array.isArray(b) && zc(d, b) : d.push(b);
    a.className = d.join(" ");
  };
  x("_StatsView", Tm);
  function Wm(a) {
    Q.call(this, "Subscribe", a);
  }
  u(Wm, Q);
  function Xm(a, b) {
    a.style.zIndex = 1 == b ? "20" : "";
  }
  function Ym(a, b) {
    return a
      ? a.className && -1 != a.className.search(b)
        ? a
        : Ym(a.parentNode, b)
      : null;
  }
  function Zm(a, b) {
    Xm(a.parentNode, b);
    if (J) {
      var c = Ym(a, "section");
      c &&
        (c.parentNode.className &&
          -1 != c.parentNode.className.search("columns-cell") &&
          Xm(c.parentNode.parentNode.parentNode.parentNode, b),
        Xm(c, b));
      (a = Ym(a, "widget Subscribe")) && Xm(a.parentNode.parentNode, b);
    }
  }
  var $m = null,
    an = null;
  x("_SubscribeView", Wm);
  x("_SW_toggleReaderList", function (a, b) {
    var c = document.getElementById(ma + b),
      d = document.getElementById(na + b);
    a || (a = window.event);
    a.cancelBubble = !0;
    a.stopPropagation && a.stopPropagation();
    var e = document.onclick;
    null != $m &&
      $m != c &&
      (Zm($m, !1), ($m.style.display = n), (an.style.visibility = sb));
    c.style.display == n
      ? (Zm(c, !0),
        (c.style.display = ""),
        ($m = c),
        (an = d),
        (d.style.visibility = $a),
        (document.onclick = function () {
          c.style.display = n;
          Zm(c, !1);
          d.style.visibility = sb;
          e && (document.onclick = e);
        }))
      : ((c.style.display = n),
        Zm(c, !1),
        (d.style.visibility = sb),
        e && (document.onclick = e));
    return !1;
  });
  x("_SW_hideReaderList", function (a) {
    var b = document.getElementById(ma + a);
    a = document.getElementById(na + a);
    b.style.display = n;
    Zm(b, !1);
    a.style.visibility = sb;
  });
  function bn(a) {
    Q.call(this, bn.$, a);
  }
  y(bn, Q);
  bn.$ = "Translate";
  x("_TranslateView", bn);
  function cn(a) {
    this.J = a;
    this.G = "callback";
    this.C = this.D = null;
    this.la = 5e3;
  }
  function dn(a) {
    var b = { callback: "?" };
    b = void 0 === b ? {} : b;
    a.C = wg();
    var c = new Lj(a.J),
      d = {};
    d.callback = a.G;
    c.C.od(dk(b), d);
    en(a)
      .then(function () {
        return fn(a, c.toString());
      })
      .then(function () {
        return a.C.promise;
      })
      .then(
        function () {
          return gn(a);
        },
        function () {
          return gn(a);
        }
      );
    0 < a.la &&
      (a.F = setTimeout(function () {
        return a.C.C("Timeout!");
      }, a.la));
    return a.C.promise;
  }
  function fn(a, b) {
    var c = new MessageChannel();
    a.D.contentWindow.postMessage({ url: b, callbackName: a.G }, "*", [
      c.port2,
    ]);
    c.port1.onmessage = function (d) {
      void 0 != a.F && (clearTimeout(a.F), (a.F = void 0));
      "undefined" == typeof d.data &&
        a.C.C("Callback called, but no data received");
      typeof d.data != q &&
        a.C.C("Exploitation attempt! Data is not a string!");
      try {
        var e = JSON.parse(d.data);
      } catch (f) {
        a.C.C("Invalid Data received: " + f);
      }
      a.C.D(e);
    };
  }
  function en(a) {
    var b = wg(),
      c = $e(document, "IFRAME");
    if (!c.sandbox) throw Error("iframe sandboxes not supported");
    c.sandbox.value = "allow-scripts";
    c.style.display = n;
    a.D = c;
    a = Yc();
    a = fe(ge, ae(ce(a)));
    c.srcdoc = Vd(a);
    a = ke(
      Vc("data URL to be opened only in a sandbox"),
      "data:text/html;charset=UTF-8;base64," + btoa(Vd(a).toString())
    );
    c.src = cd(a).toString();
    c.addEventListener(
      "load",
      function () {
        return b.D(c);
      },
      !1
    );
    c.addEventListener(
      Sa,
      function (d) {
        return b.C(d);
      },
      !1
    );
    document.documentElement.appendChild(c);
    return b.promise;
  }
  function gn(a) {
    null != a.D && (document.documentElement.removeChild(a.D), (a.D = null));
  }
  function Z(a) {
    Q.call(this, Z.$, a);
  }
  y(Z, Q);
  Z.$ = "Wikipedia";
  x("_WikipediaView", Z);
  Z.Kb = 5;
  Z.Ea = "";
  Z.$a = "en";
  r = Z.prototype;
  r.Ga = !1;
  r.Ca = !1;
  r.fa = function () {
    var a = P(this.H, "wikipedia-search-form");
    if (a) {
      Z.Ea = this.H.N.data.language || "en";
      var b = this;
      N(a, "submit", function (c) {
        Z.prototype.Ca || ((Z.prototype.Ca = !0), hn(b));
        c.preventDefault();
      });
    }
  };
  function hn(a) {
    bf(K(P(a.H, vb)));
    bf(K(P(a.H, ub)));
    var b = C(K(P(a.H, tb)).value);
    b
      ? ((b = Zj(
          Zj(
            Zj(
              Oj(
                new Lj("https://" + ((a.Ga && Z.$a) || Z.Ea) + ca),
                "/w/api.php"
              ),
              "action",
              "opensearch"
            ),
            "search",
            b
          ),
          "format",
          "json"
        )),
        (b = new cn(b)),
        P(a.H, wb),
        P(a.H, vb),
        dn(b).then(w(a.Fd, a), w(a.Ed, a)))
      : ((K(P(a.H, wb)).style.display = n),
        (b = Rh(a.H, vb)),
        (a = ne(a.H.N.data.enterTextMsg)),
        G(b, a),
        (Z.prototype.Ca = !1));
  }
  r.Fd = function (a) {
    var b = P(this.H, wb),
      c = P(this.H, vb),
      d = C(K(P(this.H, tb)).value),
      e = [];
    a = a[1];
    var f = a.length;
    if (0 == f)
      (b = K(b)),
        (b.style.display = ua),
        (b = ne(this.H.N.data.noResultsFoundMsg)),
        G(c, b),
        (Z.prototype.Ca = !1);
    else {
      for (var g = 0; g < f; g++)
        e.push(
          '<div id="wikipedia-search-result-link"><a target="_blank" href=https://' +
            (((this.Ga && Z.$a) || Z.Ea) +
              ".wikipedia.org/wiki/" +
              a[g].replace(/ /g, "_")) +
            ">" +
            a[g] +
            "</a></div>"
        );
      if (f > Z.Kb) {
        for (g = 0; g < Z.Kb; g++) K(c).innerHTML += e[g];
        K(P(this.H, ub)).style.display = ua;
        d =
          '<a target="_blank" href=' +
          Zj(
            Zj(
              Zj(
                Zj(
                  Oj(
                    new Lj("https://" + ((this.Ga && Z.$a) || Z.Ea) + ca),
                    "/w/index.php"
                  ),
                  "title",
                  "Special:Search"
                ),
                "profile",
                "default"
              ),
              "search",
              d
            ),
            "fulltext",
            "Search"
          ) +
          ">" +
          this.H.N.data.moreMsg +
          "</a>";
        c = K(P(this.H, ub));
        e = new ij();
        e.M = vj;
        e.K = Fc;
        e.J = Fc;
        e.F = vd;
        e.R = vd;
        e = new hj(e);
        d = wj(e, d);
        G(c, d);
      } else for (g = 0; g < f; g++) K(c).innerHTML += e[g];
      b = K(b);
      b.style.display = ua;
      this.Ga = Z.prototype.Ca = !1;
    }
  };
  r.Ed = function () {
    if ("en" != Z.Ea) (this.Ga = !0), hn(this);
    else {
      K(P(this.H, wb)).style.display = n;
      var a = Rh(this.H, vb),
        b = ne(this.H.N.data.fetchingErrorMsg);
      G(a, b);
      Z.prototype.Ca = !1;
    }
  };
  if (window.jstiming) {
    window.jstiming.Qb = {};
    window.jstiming.Gd = 1;
    var jn = function (a, b, c) {
        var d = a.t[b],
          e = a.t.start;
        if (d && (e || c))
          return (
            (d = a.t[b][0]),
            void 0 != c ? (e = c) : (e = e[0]),
            Math.round(d - e)
          );
      },
      kn = function (a, b, c) {
        var d = "";
        window.jstiming.srt &&
          ((d += "&srt=" + window.jstiming.srt), delete window.jstiming.srt);
        window.jstiming.pt &&
          ((d += "&tbsrt=" + window.jstiming.pt), delete window.jstiming.pt);
        try {
          window.external && window.external.tran
            ? (d += "&tran=" + window.external.tran)
            : window.gtbExternal && window.gtbExternal.tran
            ? (d += "&tran=" + window.gtbExternal.tran())
            : window.chrome &&
              window.chrome.csi &&
              (d += "&tran=" + window.chrome.csi().tran);
        } catch (A) {}
        var e = window.chrome;
        if (e && (e = e.loadTimes)) {
          e().wasFetchedViaSpdy && (d += "&p=s");
          if (e().wasNpnNegotiated) {
            d += "&npn=1";
            var f = e().npnNegotiatedProtocol;
            f && (d += "&npnv=" + (encodeURIComponent || escape)(f));
          }
          e().wasAlternateProtocolAvailable && (d += "&apa=1");
        }
        var g = a.t,
          h = g.start;
        e = [];
        f = [];
        for (var m in g)
          if ("start" != m && 0 != m.indexOf("_")) {
            var t = g[m][1];
            t
              ? g[t] && f.push(m + "." + jn(a, m, g[t][0]))
              : h && e.push(m + "." + jn(a, m));
          }
        delete g.start;
        if (b) for (var H in b) d += "&" + H + "=" + b[H];
        (b = c) ||
          (b =
            "https:" == document.location.protocol
              ? "https://csi.gstatic.com/csi"
              : "http://csi.gstatic.com/csi");
        return [
          b,
          "?v=3",
          "&s=" + (window.jstiming.sn || "blogger") + aa,
          a.name,
          f.length ? "&it=" + f.join(",") : "",
          d,
          "&rt=",
          e.join(","),
        ].join("");
      },
      ln = function (a, b, c) {
        a = kn(a, b, c);
        if (!a) return "";
        b = new Image();
        var d = window.jstiming.Gd++;
        window.jstiming.Qb[d] = b;
        b.onload = b.onerror = function () {
          window.jstiming && delete window.jstiming.Qb[d];
        };
        b.src = a;
        b = null;
        return a;
      };
    window.jstiming.report = function (a, b, c) {
      var d = document.visibilityState,
        e = "visibilitychange";
      d ||
        ((d = document.webkitVisibilityState), (e = "webkitvisibilitychange"));
      if ("prerender" == d) {
        var f = !1,
          g = function () {
            if (!f) {
              b ? (b.prerender = "1") : (b = { prerender: "1" });
              if (
                "prerender" ==
                (document.visibilityState || document.webkitVisibilityState)
              )
                var h = !1;
              else ln(a, b, c), (h = !0);
              h && ((f = !0), document.removeEventListener(e, g, !1));
            }
          };
        document.addEventListener(e, g, !1);
        return "";
      }
      return ln(a, b, c);
    };
  }
}.call(this));
