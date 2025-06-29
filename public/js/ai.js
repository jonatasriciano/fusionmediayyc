!(function () {
  "use strict";
  var e,
    t,
    n,
    r,
    o,
    a,
    i,
    l,
    s,
    c,
    u,
    d,
    f,
    p = {},
    h = [],
    v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    m = Array.isArray;
  function g(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function _(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function w(t, n, r) {
    var o,
      a,
      i,
      l = {};
    for (i in n)
      "key" == i ? (o = n[i]) : "ref" == i ? (a = n[i]) : (l[i] = n[i]);
    if (
      (arguments.length > 2 &&
        (l.children = arguments.length > 3 ? e.call(arguments, 2) : r),
      "function" == typeof t && null != t.defaultProps)
    )
      for (i in t.defaultProps) null == l[i] && (l[i] = t.defaultProps[i]);
    return y(t, l, o, a, null);
  }
  function y(e, r, o, a, i) {
    var l = {
      type: e,
      props: r,
      key: o,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: i ?? ++n,
      __i: -1,
      __u: 0
    };
    return null == i && null != t.vnode && t.vnode(l), l;
  }
  function b() {
    return { current: null };
  }
  function x(e) {
    return e.children;
  }
  function C(e, t) {
    (this.props = e), (this.context = t);
  }
  function k(e, t) {
    if (null == t) return e.__ ? k(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? k(e) : null;
  }
  function S(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return S(e);
    }
  }
  function E(e) {
    ((!e.__d && (e.__d = !0) && o.push(e) && !N.__r++) ||
      a != t.debounceRendering) &&
      ((a = t.debounceRendering) || i)(N);
  }
  function N() {
    for (var e, n, r, a, i, s, c, u = 1; o.length; )
      o.length > u && o.sort(l),
        (e = o.shift()),
        (u = o.length),
        e.__d &&
          ((r = void 0),
          (i = (a = (n = e).__v).__e),
          (s = []),
          (c = []),
          n.__P &&
            (((r = g({}, a)).__v = a.__v + 1),
            t.vnode && t.vnode(r),
            L(
              n.__P,
              r,
              a,
              n.__n,
              n.__P.namespaceURI,
              32 & a.__u ? [i] : null,
              s,
              i ?? k(a),
              !!(32 & a.__u),
              c
            ),
            (r.__v = a.__v),
            (r.__.__k[r.__i] = r),
            R(s, r, c),
            r.__e != i && S(r)));
    N.__r = 0;
  }
  function T(e, t, n, r, o, a, i, l, s, c, u) {
    var d,
      f,
      v,
      g,
      _,
      w,
      b = (r && r.__k) || h,
      C = t.length;
    for (
      s = (function (e, t, n, r, o) {
        var a,
          i,
          l,
          s,
          c,
          u = n.length,
          d = u,
          f = 0;
        for (e.__k = new Array(o), a = 0; a < o; a++)
          null != (i = t[a]) && "boolean" != typeof i && "function" != typeof i
            ? ((s = a + f),
              ((i = e.__k[a] =
                "string" == typeof i ||
                "number" == typeof i ||
                "bigint" == typeof i ||
                i.constructor == String
                  ? y(null, i, null, null, null)
                  : m(i)
                    ? y(x, { children: i }, null, null, null)
                    : null == i.constructor && i.__b > 0
                      ? y(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                      : i).__ = e),
              (i.__b = e.__b + 1),
              (l = null),
              -1 != (c = i.__i = I(i, n, s, d)) &&
                (d--, (l = n[c]) && (l.__u |= 2)),
              null == l || null == l.__v
                ? (-1 == c && (o > u ? f-- : o < u && f++),
                  "function" != typeof i.type && (i.__u |= 4))
                : c != s &&
                  (c == s - 1
                    ? f--
                    : c == s + 1
                      ? f++
                      : (c > s ? f-- : f++, (i.__u |= 4))))
            : (e.__k[a] = null);
        if (d)
          for (a = 0; a < u; a++)
            null != (l = n[a]) &&
              0 == (2 & l.__u) &&
              (l.__e == r && (r = k(l)), U(l, l));
        return r;
      })(n, t, b, s, C),
        d = 0;
      d < C;
      d++
    )
      null != (v = n.__k[d]) &&
        ((f = -1 == v.__i ? p : b[v.__i] || p),
        (v.__i = d),
        (w = L(e, v, f, o, a, i, l, s, c, u)),
        (g = v.__e),
        v.ref &&
          f.ref != v.ref &&
          (f.ref && z(f.ref, null, v), u.push(v.ref, v.__c || g, v)),
        null == _ && null != g && (_ = g),
        4 & v.__u || f.__k === v.__k
          ? (s = A(v, s, e))
          : "function" == typeof v.type && void 0 !== w
            ? (s = w)
            : g && (s = g.nextSibling),
        (v.__u &= -7));
    return (n.__e = _), s;
  }
  function A(e, t, n) {
    var r, o;
    if ("function" == typeof e.type) {
      for (r = e.__k, o = 0; r && o < r.length; o++)
        r[o] && ((r[o].__ = e), (t = A(r[o], t, n)));
      return t;
    }
    e.__e != t &&
      (t && e.type && !n.contains(t) && (t = k(e)),
      n.insertBefore(e.__e, t || null),
      (t = e.__e));
    do {
      t = t && t.nextSibling;
    } while (null != t && 8 == t.nodeType);
    return t;
  }
  function P(e, t) {
    return (
      (t = t || []),
      null == e ||
        "boolean" == typeof e ||
        (m(e)
          ? e.some(function (e) {
              P(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function I(e, t, n, r) {
    var o,
      a,
      i = e.key,
      l = e.type,
      s = t[n];
    if (
      (null === s && null == e.key) ||
      (s && i == s.key && l == s.type && 0 == (2 & s.__u))
    )
      return n;
    if (r > (null != s && 0 == (2 & s.__u) ? 1 : 0))
      for (o = n - 1, a = n + 1; o >= 0 || a < t.length; ) {
        if (o >= 0) {
          if ((s = t[o]) && 0 == (2 & s.__u) && i == s.key && l == s.type)
            return o;
          o--;
        }
        if (a < t.length) {
          if ((s = t[a]) && 0 == (2 & s.__u) && i == s.key && l == s.type)
            return a;
          a++;
        }
      }
    return -1;
  }
  function D(e, t, n) {
    "-" == t[0]
      ? e.setProperty(t, n ?? "")
      : (e[t] =
          null == n ? "" : "number" != typeof n || v.test(t) ? n : n + "px");
  }
  function M(e, t, n, r, o) {
    var a;
    e: if ("style" == t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof r && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || D(e.style, t, "");
        if (n) for (t in n) (r && n[t] == r[t]) || D(e.style, t, n[t]);
      }
    else if ("o" == t[0] && "n" == t[1])
      (a = t != (t = t.replace(s, "$1"))),
        (t =
          t.toLowerCase() in e || "onFocusOut" == t || "onFocusIn" == t
            ? t.toLowerCase().slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + a] = n),
        n
          ? r
            ? (n.u = r.u)
            : ((n.u = c), e.addEventListener(t, a ? d : u, a))
          : e.removeEventListener(t, a ? d : u, a);
    else {
      if ("http://www.w3.org/2000/svg" == o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "width" != t &&
        "height" != t &&
        "href" != t &&
        "list" != t &&
        "form" != t &&
        "tabIndex" != t &&
        "download" != t &&
        "rowSpan" != t &&
        "colSpan" != t &&
        "role" != t &&
        "popover" != t &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      "function" == typeof n ||
        (null == n || (!1 === n && "-" != t[4])
          ? e.removeAttribute(t)
          : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
    }
  }
  function O(e) {
    return function (n) {
      if (this.l) {
        var r = this.l[n.type + e];
        if (null == n.t) n.t = c++;
        else if (n.t < r.u) return;
        return r(t.event ? t.event(n) : n);
      }
    };
  }
  function L(n, r, o, a, i, l, s, c, u, d) {
    var f,
      h,
      v,
      w,
      y,
      b,
      S,
      E,
      N,
      A,
      P,
      I,
      D,
      O,
      L,
      R,
      z,
      U = r.type;
    if (null != r.constructor) return null;
    128 & o.__u && ((u = !!(32 & o.__u)), (l = [(c = r.__e = o.__e)])),
      (f = t.__b) && f(r);
    e: if ("function" == typeof U)
      try {
        if (
          ((E = r.props),
          (N = "prototype" in U && U.prototype.render),
          (A = (f = U.contextType) && a[f.__c]),
          (P = f ? (A ? A.props.value : f.__) : a),
          o.__c
            ? (S = (h = r.__c = o.__c).__ = h.__E)
            : (N
                ? (r.__c = h = new U(E, P))
                : ((r.__c = h = new C(E, P)),
                  (h.constructor = U),
                  (h.render = B)),
              A && A.sub(h),
              (h.props = E),
              h.state || (h.state = {}),
              (h.context = P),
              (h.__n = a),
              (v = h.__d = !0),
              (h.__h = []),
              (h._sb = [])),
          N && null == h.__s && (h.__s = h.state),
          N &&
            null != U.getDerivedStateFromProps &&
            (h.__s == h.state && (h.__s = g({}, h.__s)),
            g(h.__s, U.getDerivedStateFromProps(E, h.__s))),
          (w = h.props),
          (y = h.state),
          (h.__v = r),
          v)
        )
          N &&
            null == U.getDerivedStateFromProps &&
            null != h.componentWillMount &&
            h.componentWillMount(),
            N && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
          if (
            (N &&
              null == U.getDerivedStateFromProps &&
              E !== w &&
              null != h.componentWillReceiveProps &&
              h.componentWillReceiveProps(E, P),
            (!h.__e &&
              null != h.shouldComponentUpdate &&
              !1 === h.shouldComponentUpdate(E, h.__s, P)) ||
              r.__v == o.__v)
          ) {
            for (
              r.__v != o.__v &&
                ((h.props = E), (h.state = h.__s), (h.__d = !1)),
                r.__e = o.__e,
                r.__k = o.__k,
                r.__k.some(function (e) {
                  e && (e.__ = r);
                }),
                I = 0;
              I < h._sb.length;
              I++
            )
              h.__h.push(h._sb[I]);
            (h._sb = []), h.__h.length && s.push(h);
            break e;
          }
          null != h.componentWillUpdate && h.componentWillUpdate(E, h.__s, P),
            N &&
              null != h.componentDidUpdate &&
              h.__h.push(function () {
                h.componentDidUpdate(w, y, b);
              });
        }
        if (
          ((h.context = P),
          (h.props = E),
          (h.__P = n),
          (h.__e = !1),
          (D = t.__r),
          (O = 0),
          N)
        ) {
          for (
            h.state = h.__s,
              h.__d = !1,
              D && D(r),
              f = h.render(h.props, h.state, h.context),
              L = 0;
            L < h._sb.length;
            L++
          )
            h.__h.push(h._sb[L]);
          h._sb = [];
        } else
          do {
            (h.__d = !1),
              D && D(r),
              (f = h.render(h.props, h.state, h.context)),
              (h.state = h.__s);
          } while (h.__d && ++O < 25);
        (h.state = h.__s),
          null != h.getChildContext && (a = g(g({}, a), h.getChildContext())),
          N &&
            !v &&
            null != h.getSnapshotBeforeUpdate &&
            (b = h.getSnapshotBeforeUpdate(w, y)),
          (R = f),
          null != f &&
            f.type === x &&
            null == f.key &&
            (R = F(f.props.children)),
          (c = T(n, m(R) ? R : [R], r, o, a, i, l, s, c, u, d)),
          (h.base = r.__e),
          (r.__u &= -161),
          h.__h.length && s.push(h),
          S && (h.__E = h.__ = null);
      } catch (e) {
        if (((r.__v = null), u || null != l))
          if (e.then) {
            for (
              r.__u |= u ? 160 : 128;
              c && 8 == c.nodeType && c.nextSibling;

            )
              c = c.nextSibling;
            (l[l.indexOf(c)] = null), (r.__e = c);
          } else for (z = l.length; z--; ) _(l[z]);
        else (r.__e = o.__e), (r.__k = o.__k);
        t.__e(e, r, o);
      }
    else
      null == l && r.__v == o.__v
        ? ((r.__k = o.__k), (r.__e = o.__e))
        : (c = r.__e =
            (function (n, r, o, a, i, l, s, c, u) {
              var d,
                f,
                h,
                v,
                g,
                w,
                y,
                b = o.props,
                x = r.props,
                C = r.type;
              if (
                ("svg" == C
                  ? (i = "http://www.w3.org/2000/svg")
                  : "math" == C
                    ? (i = "http://www.w3.org/1998/Math/MathML")
                    : i || (i = "http://www.w3.org/1999/xhtml"),
                null != l)
              )
                for (d = 0; d < l.length; d++)
                  if (
                    (g = l[d]) &&
                    "setAttribute" in g == !!C &&
                    (C ? g.localName == C : 3 == g.nodeType)
                  ) {
                    (n = g), (l[d] = null);
                    break;
                  }
              if (null == n) {
                if (null == C) return document.createTextNode(x);
                (n = document.createElementNS(i, C, x.is && x)),
                  c && (t.__m && t.__m(r, l), (c = !1)),
                  (l = null);
              }
              if (null == C) b === x || (c && n.data == x) || (n.data = x);
              else {
                if (
                  ((l = l && e.call(n.childNodes)),
                  (b = o.props || p),
                  !c && null != l)
                )
                  for (b = {}, d = 0; d < n.attributes.length; d++)
                    b[(g = n.attributes[d]).name] = g.value;
                for (d in b)
                  if (((g = b[d]), "children" != d))
                    if ("dangerouslySetInnerHTML" == d) h = g;
                    else if (!(d in x)) {
                      if (
                        ("value" == d && "defaultValue" in x) ||
                        ("checked" == d && "defaultChecked" in x)
                      )
                        continue;
                      M(n, d, null, g, i);
                    }
                for (d in x)
                  (g = x[d]),
                    "children" == d
                      ? (v = g)
                      : "dangerouslySetInnerHTML" == d
                        ? (f = g)
                        : "value" == d
                          ? (w = g)
                          : "checked" == d
                            ? (y = g)
                            : (c && "function" != typeof g) ||
                              b[d] === g ||
                              M(n, d, g, b[d], i);
                if (f)
                  c ||
                    (h && (f.__html == h.__html || f.__html == n.innerHTML)) ||
                    (n.innerHTML = f.__html),
                    (r.__k = []);
                else if (
                  (h && (n.innerHTML = ""),
                  T(
                    "template" == r.type ? n.content : n,
                    m(v) ? v : [v],
                    r,
                    o,
                    a,
                    "foreignObject" == C ? "http://www.w3.org/1999/xhtml" : i,
                    l,
                    s,
                    l ? l[0] : o.__k && k(o, 0),
                    c,
                    u
                  ),
                  null != l)
                )
                  for (d = l.length; d--; ) _(l[d]);
                c ||
                  ((d = "value"),
                  "progress" == C && null == w
                    ? n.removeAttribute("value")
                    : null != w &&
                      (w !== n[d] ||
                        ("progress" == C && !w) ||
                        ("option" == C && w != b[d])) &&
                      M(n, d, w, b[d], i),
                  (d = "checked"),
                  null != y && y != n[d] && M(n, d, y, b[d], i));
              }
              return n;
            })(o.__e, r, o, a, i, l, s, u, d));
    return (f = t.diffed) && f(r), 128 & r.__u ? void 0 : c;
  }
  function R(e, n, r) {
    for (var o = 0; o < r.length; o++) z(r[o], r[++o], r[++o]);
    t.__c && t.__c(n, e),
      e.some(function (n) {
        try {
          (e = n.__h),
            (n.__h = []),
            e.some(function (e) {
              e.call(n);
            });
        } catch (e) {
          t.__e(e, n.__v);
        }
      });
  }
  function F(e) {
    return "object" != typeof e || null == e || (e.__b && e.__b > 0)
      ? e
      : m(e)
        ? e.map(F)
        : g({}, e);
  }
  function z(e, n, r) {
    try {
      if ("function" == typeof e) {
        var o = "function" == typeof e.__u;
        o && e.__u(), (o && null == n) || (e.__u = e(n));
      } else e.current = n;
    } catch (e) {
      t.__e(e, r);
    }
  }
  function U(e, n, r) {
    var o, a;
    if (
      (t.unmount && t.unmount(e),
      (o = e.ref) && ((o.current && o.current != e.__e) || z(o, null, n)),
      null != (o = e.__c))
    ) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (e) {
          t.__e(e, n);
        }
      o.base = o.__P = null;
    }
    if ((o = e.__k))
      for (a = 0; a < o.length; a++)
        o[a] && U(o[a], n, r || "function" != typeof e.type);
    r || _(e.__e), (e.__c = e.__ = e.__e = void 0);
  }
  function B(e, t, n) {
    return this.constructor(e, n);
  }
  function W(n, r, o) {
    var a, i, l, s;
    r == document && (r = document.documentElement),
      t.__ && t.__(n, r),
      (i = (a = "function" == typeof o) ? null : (o && o.__k) || r.__k),
      (l = []),
      (s = []),
      L(
        r,
        (n = ((!a && o) || r).__k = w(x, null, [n])),
        i || p,
        p,
        r.namespaceURI,
        !a && o ? [o] : i ? null : r.firstChild ? e.call(r.childNodes) : null,
        l,
        !a && o ? o : i ? i.__e : r.firstChild,
        a,
        s
      ),
      R(l, n, s);
  }
  function H(e, t) {
    W(e, t, H);
  }
  function $(t, n, r) {
    var o,
      a,
      i,
      l,
      s = g({}, t.props);
    for (i in (t.type && t.type.defaultProps && (l = t.type.defaultProps), n))
      "key" == i
        ? (o = n[i])
        : "ref" == i
          ? (a = n[i])
          : (s[i] = null == n[i] && null != l ? l[i] : n[i]);
    return (
      arguments.length > 2 &&
        (s.children = arguments.length > 3 ? e.call(arguments, 2) : r),
      y(t.type, s, o || t.key, a || t.ref, null)
    );
  }
  function j(e) {
    function t(e) {
      var n, r;
      return (
        this.getChildContext ||
          ((n = new Set()),
          ((r = {})[t.__c] = this),
          (this.getChildContext = function () {
            return r;
          }),
          (this.componentWillUnmount = function () {
            n = null;
          }),
          (this.shouldComponentUpdate = function (e) {
            this.props.value != e.value &&
              n.forEach(function (e) {
                (e.__e = !0), E(e);
              });
          }),
          (this.sub = function (e) {
            n.add(e);
            var t = e.componentWillUnmount;
            e.componentWillUnmount = function () {
              n && n.delete(e), t && t.call(e);
            };
          })),
        e.children
      );
    }
    return (
      (t.__c = "__cC" + f++),
      (t.__ = e),
      (t.Provider =
        t.__l =
        (t.Consumer = function (e, t) {
          return e.children(t);
        }).contextType =
          t),
      t
    );
  }
  function V() {
    return (V = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
  }
  (e = h.slice),
    (t = {
      __e: function (e, t, n, r) {
        for (var o, a, i; (t = t.__); )
          if ((o = t.__c) && !o.__)
            try {
              if (
                ((a = o.constructor) &&
                  null != a.getDerivedStateFromError &&
                  (o.setState(a.getDerivedStateFromError(e)), (i = o.__d)),
                null != o.componentDidCatch &&
                  (o.componentDidCatch(e, r || {}), (i = o.__d)),
                i)
              )
                return (o.__E = o);
            } catch (t) {
              e = t;
            }
        throw e;
      }
    }),
    (n = 0),
    (r = function (e) {
      return null != e && null == e.constructor;
    }),
    (C.prototype.setState = function (e, t) {
      var n;
      (n =
        null != this.__s && this.__s != this.state
          ? this.__s
          : (this.__s = g({}, this.state))),
        "function" == typeof e && (e = e(g({}, n), this.props)),
        e && g(n, e),
        null != e && this.__v && (t && this._sb.push(t), E(this));
    }),
    (C.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), E(this));
    }),
    (C.prototype.render = x),
    (o = []),
    (i =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (l = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (N.__r = 0),
    (s = /(PointerCapture)$|Capture$/i),
    (c = 0),
    (u = O(!1)),
    (d = O(!0)),
    (f = 0);
  var Y = ["context", "children"];
  function q(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      $(
        e.children,
        (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            t.indexOf((n = a[r])) >= 0 || (o[n] = e[n]);
          return o;
        })(e, Y)
      )
    );
  }
  function X() {
    var e = new CustomEvent("_preact", {
      detail: {},
      bubbles: !0,
      cancelable: !0
    });
    this.dispatchEvent(e),
      (this._vdom = w(
        q,
        V({}, this._props, { context: e.detail.context }),
        (function e(t, n) {
          if (3 === t.nodeType) return t.data;
          if (1 !== t.nodeType) return null;
          var r = [],
            o = {},
            a = 0,
            i = t.attributes,
            l = t.childNodes;
          for (a = i.length; a--; )
            "slot" !== i[a].name &&
              ((o[i[a].name] = i[a].value), (o[K(i[a].name)] = i[a].value));
          for (a = l.length; a--; ) {
            var s = e(l[a], null),
              c = l[a].slot;
            c ? (o[c] = w(J, { name: c }, s)) : (r[a] = s);
          }
          var u = n ? w(J, null, r) : r;
          return w(n || t.nodeName.toLowerCase(), o, u);
        })(this, this._vdomComponent)
      )),
      (this.hasAttribute("hydrate") ? H : W)(this._vdom, this._root);
  }
  function K(e) {
    return e.replace(/-(\w)/g, function (e, t) {
      return t ? t.toUpperCase() : "";
    });
  }
  function Z(e, t, n) {
    if (this._vdom) {
      var r = {};
      (r[e] = n = n ?? void 0),
        (r[K(e)] = n),
        (this._vdom = $(this._vdom, r)),
        W(this._vdom, this._root);
    }
  }
  function G() {
    W((this._vdom = null), this._root);
  }
  function J(e, t) {
    var n = this;
    return w(
      "slot",
      V({}, e, {
        ref: function (e) {
          e
            ? ((n.ref = e),
              n._listener ||
                ((n._listener = function (e) {
                  e.stopPropagation(), (e.detail.context = t);
                }),
                e.addEventListener("_preact", n._listener)))
            : n.ref.removeEventListener("_preact", n._listener);
        }
      })
    );
  }
  var Q = 0;
  function ee(e, n, r, o, a, i) {
    n || (n = {});
    var l,
      s,
      c = n;
    if ("ref" in c)
      for (s in ((c = {}), n)) "ref" == s ? (l = n[s]) : (c[s] = n[s]);
    var u = {
      type: e,
      props: c,
      key: r,
      ref: l,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --Q,
      __i: -1,
      __u: 0,
      __source: a,
      __self: i
    };
    if ("function" == typeof e && (l = e.defaultProps))
      for (s in l) void 0 === c[s] && (c[s] = l[s]);
    return t.vnode && t.vnode(u), u;
  }
  var te,
    ne,
    re,
    oe,
    ae = 0,
    ie = [],
    le = t,
    se = le.__b,
    ce = le.__r,
    ue = le.diffed,
    de = le.__c,
    fe = le.unmount,
    pe = le.__;
  function he(e, t) {
    le.__h && le.__h(ne, e, ae || t), (ae = 0);
    var n = ne.__H || (ne.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function ve(e) {
    return (ae = 1), me(De, e);
  }
  function me(e, t, n) {
    var r = he(te++, 2);
    if (
      ((r.t = e),
      !r.__c &&
        ((r.__ = [
          n ? n(t) : De(void 0, t),
          function (e) {
            var t = r.__N ? r.__N[0] : r.__[0],
              n = r.t(t, e);
            t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
          }
        ]),
        (r.__c = ne),
        !ne.__f))
    ) {
      var o = function (e, t, n) {
        if (!r.__c.__H) return !0;
        var o = r.__c.__H.__.filter(function (e) {
          return !!e.__c;
        });
        if (
          o.every(function (e) {
            return !e.__N;
          })
        )
          return !a || a.call(this, e, t, n);
        var i = r.__c.props !== e;
        return (
          o.forEach(function (e) {
            if (e.__N) {
              var t = e.__[0];
              (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (i = !0);
            }
          }),
          (a && a.call(this, e, t, n)) || i
        );
      };
      ne.__f = !0;
      var a = ne.shouldComponentUpdate,
        i = ne.componentWillUpdate;
      (ne.componentWillUpdate = function (e, t, n) {
        if (this.__e) {
          var r = a;
          (a = void 0), o(e, t, n), (a = r);
        }
        i && i.call(this, e, t, n);
      }),
        (ne.shouldComponentUpdate = o);
    }
    return r.__N || r.__;
  }
  function ge(e, t) {
    var n = he(te++, 3);
    !le.__s && Ie(n.__H, t) && ((n.__ = e), (n.u = t), ne.__H.__h.push(n));
  }
  function _e(e, t) {
    var n = he(te++, 4);
    !le.__s && Ie(n.__H, t) && ((n.__ = e), (n.u = t), ne.__h.push(n));
  }
  function we(e) {
    return (
      (ae = 5),
      be(function () {
        return { current: e };
      }, [])
    );
  }
  function ye(e, t, n) {
    (ae = 6),
      _e(
        function () {
          if ("function" == typeof e) {
            var n = e(t());
            return function () {
              e(null), n && "function" == typeof n && n();
            };
          }
          if (e)
            return (
              (e.current = t()),
              function () {
                return (e.current = null);
              }
            );
        },
        null == n ? n : n.concat(e)
      );
  }
  function be(e, t) {
    var n = he(te++, 7);
    return Ie(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function xe(e, t) {
    return (
      (ae = 8),
      be(function () {
        return e;
      }, t)
    );
  }
  function Ce(e) {
    var t = ne.context[e.__c],
      n = he(te++, 9);
    return (
      (n.c = e),
      t ? (null == n.__ && ((n.__ = !0), t.sub(ne)), t.props.value) : e.__
    );
  }
  function ke(e, t) {
    le.useDebugValue && le.useDebugValue(t ? t(e) : e);
  }
  function Se() {
    var e = he(te++, 11);
    if (!e.__) {
      for (var t = ne.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function Ee() {
    for (var e; (e = ie.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Ae), e.__H.__h.forEach(Pe), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), le.__e(t, e.__v);
        }
  }
  (le.__b = function (e) {
    (ne = null), se && se(e);
  }),
    (le.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), pe && pe(e, t);
    }),
    (le.__r = function (e) {
      ce && ce(e), (te = 0);
      var t = (ne = e.__c).__H;
      t &&
        (re === ne
          ? ((t.__h = []),
            (ne.__h = []),
            t.__.forEach(function (e) {
              e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
            }))
          : (t.__h.forEach(Ae), t.__h.forEach(Pe), (t.__h = []), (te = 0))),
        (re = ne);
    }),
    (le.diffed = function (e) {
      ue && ue(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((1 !== ie.push(t) && oe === le.requestAnimationFrame) ||
            ((oe = le.requestAnimationFrame) || Te)(Ee)),
        t.__H.__.forEach(function (e) {
          e.u && (e.__H = e.u), (e.u = void 0);
        })),
        (re = ne = null);
    }),
    (le.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(Ae),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || Pe(e);
            }));
        } catch (n) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            le.__e(n, e.__v);
        }
      }),
        de && de(e, t);
    }),
    (le.unmount = function (e) {
      fe && fe(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (e) {
          try {
            Ae(e);
          } catch (e) {
            t = e;
          }
        }),
        (n.__H = void 0),
        t && le.__e(t, n.__v));
    });
  var Ne = "function" == typeof requestAnimationFrame;
  function Te(e) {
    var t,
      n = function () {
        clearTimeout(r), Ne && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    Ne && (t = requestAnimationFrame(n));
  }
  function Ae(e) {
    var t = ne,
      n = e.__c;
    "function" == typeof n && ((e.__c = void 0), n()), (ne = t);
  }
  function Pe(e) {
    var t = ne;
    (e.__c = e.__()), (ne = t);
  }
  function Ie(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (t, n) {
        return t !== e[n];
      })
    );
  }
  function De(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function Me(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function Oe(e, t) {
    for (var n in e) if ("__source" !== n && !(n in t)) return !0;
    for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1;
  }
  function Le(e, t) {
    var n = t(),
      r = ve({ t: { __: n, u: t } }),
      o = r[0].t,
      a = r[1];
    return (
      _e(
        function () {
          (o.__ = n), (o.u = t), Re(o) && a({ t: o });
        },
        [e, n, t]
      ),
      ge(
        function () {
          return (
            Re(o) && a({ t: o }),
            e(function () {
              Re(o) && a({ t: o });
            })
          );
        },
        [e]
      ),
      n
    );
  }
  function Re(e) {
    var t,
      n,
      r = e.u,
      o = e.__;
    try {
      var a = r();
      return !(
        ((t = o) === (n = a) && (0 !== t || 1 / t == 1 / n)) ||
        (t != t && n != n)
      );
    } catch {
      return !0;
    }
  }
  function Fe(e) {
    e();
  }
  function ze(e) {
    return e;
  }
  function Ue() {
    return [!1, Fe];
  }
  var Be = _e;
  function We(e, t) {
    (this.props = e), (this.context = t);
  }
  function He(e, t) {
    function n(e) {
      var n = this.props.ref,
        r = n == e.ref;
      return (
        !r && n && (n.call ? n(null) : (n.current = null)),
        t ? !t(this.props, e) || !r : Oe(this.props, e)
      );
    }
    function r(t) {
      return (this.shouldComponentUpdate = n), w(e, t);
    }
    return (
      (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (r.prototype.isReactComponent = !0),
      (r.__f = !0),
      r
    );
  }
  ((We.prototype = new C()).isPureReactComponent = !0),
    (We.prototype.shouldComponentUpdate = function (e, t) {
      return Oe(this.props, e) || Oe(this.state, t);
    });
  var $e = t.__b;
  t.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      $e && $e(e);
  };
  var je =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  function Ve(e) {
    function t(t) {
      var n = Me({}, t);
      return delete n.ref, e(n, t.ref || null);
    }
    return (
      (t.$$typeof = je),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  var Ye = function (e, t) {
      return null == e ? null : P(P(e).map(t));
    },
    qe = {
      map: Ye,
      forEach: Ye,
      count: function (e) {
        return e ? P(e).length : 0;
      },
      only: function (e) {
        var t = P(e);
        if (1 !== t.length) throw "Children.only";
        return t[0];
      },
      toArray: P
    },
    Xe = t.__e;
  t.__e = function (e, t, n, r) {
    if (e.then)
      for (var o, a = t; (a = a.__); )
        if ((o = a.__c) && o.__c)
          return (
            null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t)
          );
    Xe(e, t, n, r);
  };
  var Ke = t.unmount;
  function Ze(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (e) {
            "function" == typeof e.__c && e.__c();
          }),
          (e.__c.__H = null)),
        null != (e = Me({}, e)).__c &&
          (e.__c.__P === n && (e.__c.__P = t),
          (e.__c.__e = !0),
          (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (e) {
            return Ze(e, t, n);
          }))),
      e
    );
  }
  function Ge(e, t, n) {
    return (
      e &&
        n &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (e) {
            return Ge(e, t, n);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function Je() {
    (this.__u = 0), (this.o = null), (this.__b = null);
  }
  function Qe(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function et(e) {
    var t, n, r;
    function o(o) {
      if (
        (t ||
          (t = e()).then(
            function (e) {
              n = e.default || e;
            },
            function (e) {
              r = e;
            }
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return w(n, o);
    }
    return (o.displayName = "Lazy"), (o.__f = !0), o;
  }
  function tt() {
    (this.i = null), (this.l = null);
  }
  (t.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Ke && Ke(e);
  }),
    ((Je.prototype = new C()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      null == r.o && (r.o = []), r.o.push(n);
      var o = Qe(r.__v),
        a = !1,
        i = function () {
          a || ((a = !0), (n.__R = null), o ? o(l) : l());
        };
      n.__R = i;
      var l = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var e = r.state.__a;
            r.__v.__k[0] = Ge(e, e.__c.__P, e.__c.__O);
          }
          var t;
          for (r.setState({ __a: (r.__b = null) }); (t = r.o.pop()); )
            t.forceUpdate();
        }
      };
      r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
        e.then(i, i);
    }),
    (Je.prototype.componentWillUnmount = function () {
      this.o = [];
    }),
    (Je.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = Ze(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var o = t.__a && w(x, null, e.fallback);
      return o && (o.__u &= -33), [w(x, null, t.__a ? null : e.children), o];
    });
  var nt = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.l.delete(t),
      e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
    )
      for (n = e.i; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.i = n = n[2];
      }
  };
  function rt(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function ot(e) {
    var t = this,
      n = e.h;
    (t.componentWillUnmount = function () {
      W(null, t.v), (t.v = null), (t.h = null);
    }),
      t.h && t.h !== n && t.componentWillUnmount(),
      t.v ||
        ((t.h = n),
        (t.v = {
          nodeType: 1,
          parentNode: n,
          childNodes: [],
          contains: function () {
            return !0;
          },
          appendChild: function (e) {
            this.childNodes.push(e), t.h.appendChild(e);
          },
          insertBefore: function (e, n) {
            this.childNodes.push(e), t.h.insertBefore(e, n);
          },
          removeChild: function (e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
              t.h.removeChild(e);
          }
        })),
      W(w(rt, { context: t.context }, e.__v), t.v);
  }
  function at(e, t) {
    var n = w(ot, { __v: e, h: t });
    return (n.containerInfo = t), n;
  }
  ((tt.prototype = new C()).__a = function (e) {
    var t = this,
      n = Qe(t.__v),
      r = t.l.get(e);
    return (
      r[0]++,
      function (o) {
        var a = function () {
          t.props.revealOrder ? (r.push(o), nt(t, e, r)) : o();
        };
        n ? n(a) : a();
      }
    );
  }),
    (tt.prototype.render = function (e) {
      (this.i = null), (this.l = new Map());
      var t = P(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.l.set(t[n], (this.i = [1, 0, this.i]));
      return e.children;
    }),
    (tt.prototype.componentDidUpdate = tt.prototype.componentDidMount =
      function () {
        var e = this;
        this.l.forEach(function (t, n) {
          nt(e, n, t);
        });
      });
  var it =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    lt =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    st = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    ct = /[A-Z0-9]/g,
    ut = typeof document < "u",
    dt = function (e) {
      return (
        typeof Symbol < "u" && "symbol" == typeof Symbol()
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  function ft(e, t, n) {
    return (
      null == t.__k && (t.textContent = ""),
      W(e, t),
      "function" == typeof n && n(),
      e ? e.__c : null
    );
  }
  function pt(e, t, n) {
    return H(e, t), "function" == typeof n && n(), e ? e.__c : null;
  }
  (C.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate"
    ].forEach(function (e) {
      Object.defineProperty(C.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    });
  var ht = t.event;
  function vt() {}
  function mt() {
    return this.cancelBubble;
  }
  function gt() {
    return this.defaultPrevented;
  }
  t.event = function (e) {
    return (
      ht && (e = ht(e)),
      (e.persist = vt),
      (e.isPropagationStopped = mt),
      (e.isDefaultPrevented = gt),
      (e.nativeEvent = e)
    );
  };
  var _t,
    wt = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      }
    },
    yt = t.vnode;
  t.vnode = function (e) {
    "string" == typeof e.type &&
      (function (e) {
        var t = e.props,
          n = e.type,
          r = {},
          o = -1 === n.indexOf("-");
        for (var a in t) {
          var i = t[a];
          if (
            !(
              ("value" === a && "defaultValue" in t && null == i) ||
              (ut && "children" === a && "noscript" === n) ||
              "class" === a ||
              "className" === a
            )
          ) {
            var l = a.toLowerCase();
            "defaultValue" === a && "value" in t && null == t.value
              ? (a = "value")
              : "download" === a && !0 === i
                ? (i = "")
                : "translate" === l && "no" === i
                  ? (i = !1)
                  : "o" === l[0] && "n" === l[1]
                    ? "ondoubleclick" === l
                      ? (a = "ondblclick")
                      : "onchange" !== l ||
                          ("input" !== n && "textarea" !== n) ||
                          dt(t.type)
                        ? "onfocus" === l
                          ? (a = "onfocusin")
                          : "onblur" === l
                            ? (a = "onfocusout")
                            : st.test(a) && (a = l)
                        : (l = a = "oninput")
                    : o && lt.test(a)
                      ? (a = a.replace(ct, "-$&").toLowerCase())
                      : null === i && (i = void 0),
              "oninput" === l && r[(a = l)] && (a = "oninputCapture"),
              (r[a] = i);
          }
        }
        "select" == n &&
          r.multiple &&
          Array.isArray(r.value) &&
          (r.value = P(t.children).forEach(function (e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value);
          })),
          "select" == n &&
            null != r.defaultValue &&
            (r.value = P(t.children).forEach(function (e) {
              e.props.selected = r.multiple
                ? -1 != r.defaultValue.indexOf(e.props.value)
                : r.defaultValue == e.props.value;
            })),
          t.class && !t.className
            ? ((r.class = t.class), Object.defineProperty(r, "className", wt))
            : ((t.className && !t.class) || (t.class && t.className)) &&
              (r.class = r.className = t.className),
          (e.props = r);
      })(e),
      (e.$$typeof = it),
      yt && yt(e);
  };
  var bt = t.__r;
  t.__r = function (e) {
    bt && bt(e), (_t = e.__c);
  };
  var xt = t.diffed;
  t.diffed = function (e) {
    xt && xt(e);
    var t = e.props,
      n = e.__e;
    null != n &&
      "textarea" === e.type &&
      "value" in t &&
      t.value !== n.value &&
      (n.value = null == t.value ? "" : t.value),
      (_t = null);
  };
  var Ct = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return _t.__n[e.__c].props.value;
        },
        useCallback: xe,
        useContext: Ce,
        useDebugValue: ke,
        useDeferredValue: ze,
        useEffect: ge,
        useId: Se,
        useImperativeHandle: ye,
        useInsertionEffect: Be,
        useLayoutEffect: _e,
        useMemo: be,
        useReducer: me,
        useRef: we,
        useState: ve,
        useSyncExternalStore: Le,
        useTransition: Ue
      }
    }
  };
  function kt(e) {
    return w.bind(null, e);
  }
  function St(e) {
    return !!e && e.$$typeof === it;
  }
  function Et(e) {
    return St(e) && e.type === x;
  }
  function Nt(e) {
    return (
      !!e &&
      !!e.displayName &&
      ("string" == typeof e.displayName || e.displayName instanceof String) &&
      e.displayName.startsWith("Memo(")
    );
  }
  function Tt(e) {
    return St(e) ? $.apply(null, arguments) : e;
  }
  function At(e) {
    return !!e.__k && (W(null, e), !0);
  }
  function Pt(e) {
    return (e && (e.base || (1 === e.nodeType && e))) || null;
  }
  var It = function (e, t) {
      return e(t);
    },
    Dt = function (e, t) {
      return e(t);
    },
    Mt = x,
    Ot = St,
    Lt = {
      useState: ve,
      useId: Se,
      useReducer: me,
      useEffect: ge,
      useLayoutEffect: _e,
      useInsertionEffect: Be,
      useTransition: Ue,
      useDeferredValue: ze,
      useSyncExternalStore: Le,
      startTransition: Fe,
      useRef: we,
      useImperativeHandle: ye,
      useMemo: be,
      useCallback: xe,
      useContext: Ce,
      useDebugValue: ke,
      version: "18.3.1",
      Children: qe,
      render: ft,
      hydrate: pt,
      unmountComponentAtNode: At,
      createPortal: at,
      createElement: w,
      createContext: j,
      createFactory: kt,
      cloneElement: Tt,
      createRef: b,
      Fragment: x,
      isValidElement: St,
      isElement: Ot,
      isFragment: Et,
      isMemo: Nt,
      findDOMNode: Pt,
      Component: C,
      PureComponent: We,
      memo: He,
      forwardRef: Ve,
      flushSync: Dt,
      unstable_batchedUpdates: It,
      StrictMode: Mt,
      Suspense: Je,
      SuspenseList: tt,
      lazy: et,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ct
    };
  const Rt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: qe,
        Component: C,
        Fragment: x,
        PureComponent: We,
        StrictMode: Mt,
        Suspense: Je,
        SuspenseList: tt,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ct,
        cloneElement: Tt,
        createContext: j,
        createElement: w,
        createFactory: kt,
        createPortal: at,
        createRef: b,
        default: Lt,
        findDOMNode: Pt,
        flushSync: Dt,
        forwardRef: Ve,
        hydrate: pt,
        isElement: Ot,
        isFragment: Et,
        isMemo: Nt,
        isValidElement: St,
        lazy: et,
        memo: He,
        render: ft,
        startTransition: Fe,
        unmountComponentAtNode: At,
        unstable_batchedUpdates: It,
        useCallback: xe,
        useContext: Ce,
        useDebugValue: ke,
        useDeferredValue: ze,
        useEffect: ge,
        useErrorBoundary: function (e) {
          var t = he(te++, 10),
            n = ve();
          return (
            (t.__ = e),
            ne.componentDidCatch ||
              (ne.componentDidCatch = function (e, r) {
                t.__ && t.__(e, r), n[1](e);
              }),
            [
              n[0],
              function () {
                n[1](void 0);
              }
            ]
          );
        },
        useId: Se,
        useImperativeHandle: ye,
        useInsertionEffect: Be,
        useLayoutEffect: _e,
        useMemo: be,
        useReducer: me,
        useRef: we,
        useState: ve,
        useSyncExternalStore: Le,
        useTransition: Ue,
        version: "18.3.1"
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  var Ft = Symbol.for("preact-signals");
  function zt() {
    if (Ht > 1) Ht--;
    else {
      for (var e, t = !1; void 0 !== Wt; ) {
        var n = Wt;
        for (Wt = void 0, $t++; void 0 !== n; ) {
          var r = n.o;
          if (((n.o = void 0), (n.f &= -3), !(8 & n.f) && Xt(n)))
            try {
              n.c();
            } catch (n) {
              t || ((e = n), (t = !0));
            }
          n = r;
        }
      }
      if ((($t = 0), Ht--, t)) throw e;
    }
  }
  function Ut(e) {
    if (Ht > 0) return e();
    Ht++;
    try {
      return e();
    } finally {
      zt();
    }
  }
  var Bt = void 0,
    Wt = void 0,
    Ht = 0,
    $t = 0,
    jt = 0;
  function Vt(e) {
    if (void 0 !== Bt) {
      var t = e.n;
      if (void 0 === t || t.t !== Bt)
        return (
          (t = {
            i: 0,
            S: e,
            p: Bt.s,
            n: void 0,
            t: Bt,
            e: void 0,
            x: void 0,
            r: t
          }),
          void 0 !== Bt.s && (Bt.s.n = t),
          (Bt.s = t),
          (e.n = t),
          32 & Bt.f && e.S(t),
          t
        );
      if (-1 === t.i)
        return (
          (t.i = 0),
          void 0 !== t.n &&
            ((t.n.p = t.p),
            void 0 !== t.p && (t.p.n = t.n),
            (t.p = Bt.s),
            (t.n = void 0),
            (Bt.s.n = t),
            (Bt.s = t)),
          t
        );
    }
  }
  function Yt(e) {
    (this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0);
  }
  function qt(e) {
    return new Yt(e);
  }
  function Xt(e) {
    for (var t = e.s; void 0 !== t; t = t.n)
      if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
    return !1;
  }
  function Kt(e) {
    for (var t = e.s; void 0 !== t; t = t.n) {
      var n = t.S.n;
      if (
        (void 0 !== n && (t.r = n), (t.S.n = t), (t.i = -1), void 0 === t.n)
      ) {
        e.s = t;
        break;
      }
    }
  }
  function Zt(e) {
    for (var t = e.s, n = void 0; void 0 !== t; ) {
      var r = t.p;
      -1 === t.i
        ? (t.S.U(t), void 0 !== r && (r.n = t.n), void 0 !== t.n && (t.n.p = r))
        : (n = t),
        (t.S.n = t.r),
        void 0 !== t.r && (t.r = void 0),
        (t = r);
    }
    e.s = n;
  }
  function Gt(e) {
    Yt.call(this, void 0),
      (this.x = e),
      (this.s = void 0),
      (this.g = jt - 1),
      (this.f = 4);
  }
  function Jt(e) {
    return new Gt(e);
  }
  function Qt(e) {
    var t = e.u;
    if (((e.u = void 0), "function" == typeof t)) {
      Ht++;
      var n = Bt;
      Bt = void 0;
      try {
        t();
      } catch (t) {
        throw ((e.f &= -2), (e.f |= 8), en(e), t);
      } finally {
        (Bt = n), zt();
      }
    }
  }
  function en(e) {
    for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
    (e.x = void 0), (e.s = void 0), Qt(e);
  }
  function tn(e) {
    if (Bt !== this) throw new Error("Out-of-order effect");
    Zt(this), (Bt = e), (this.f &= -2), 8 & this.f && en(this), zt();
  }
  function nn(e) {
    (this.x = e),
      (this.u = void 0),
      (this.s = void 0),
      (this.o = void 0),
      (this.f = 32);
  }
  function rn(e) {
    var t = new nn(e);
    try {
      t.c();
    } catch (e) {
      throw (t.d(), e);
    }
    return t.d.bind(t);
  }
  (Yt.prototype.brand = Ft),
    (Yt.prototype.h = function () {
      return !0;
    }),
    (Yt.prototype.S = function (e) {
      this.t !== e &&
        void 0 === e.e &&
        ((e.x = this.t), void 0 !== this.t && (this.t.e = e), (this.t = e));
    }),
    (Yt.prototype.U = function (e) {
      if (void 0 !== this.t) {
        var t = e.e,
          n = e.x;
        void 0 !== t && ((t.x = n), (e.e = void 0)),
          void 0 !== n && ((n.e = t), (e.x = void 0)),
          e === this.t && (this.t = n);
      }
    }),
    (Yt.prototype.subscribe = function (e) {
      var t = this;
      return rn(function () {
        var n = t.value,
          r = Bt;
        Bt = void 0;
        try {
          e(n);
        } finally {
          Bt = r;
        }
      });
    }),
    (Yt.prototype.valueOf = function () {
      return this.value;
    }),
    (Yt.prototype.toString = function () {
      return this.value + "";
    }),
    (Yt.prototype.toJSON = function () {
      return this.value;
    }),
    (Yt.prototype.peek = function () {
      var e = Bt;
      Bt = void 0;
      try {
        return this.value;
      } finally {
        Bt = e;
      }
    }),
    Object.defineProperty(Yt.prototype, "value", {
      get: function () {
        var e = Vt(this);
        return void 0 !== e && (e.i = this.i), this.v;
      },
      set: function (e) {
        if (e !== this.v) {
          if ($t > 100) throw new Error("Cycle detected");
          (this.v = e), this.i++, jt++, Ht++;
          try {
            for (var t = this.t; void 0 !== t; t = t.x) t.t.N();
          } finally {
            zt();
          }
        }
      }
    }),
    ((Gt.prototype = new Yt()).h = function () {
      if (((this.f &= -3), 1 & this.f)) return !1;
      if (32 == (36 & this.f) || ((this.f &= -5), this.g === jt)) return !0;
      if (((this.g = jt), (this.f |= 1), this.i > 0 && !Xt(this)))
        return (this.f &= -2), !0;
      var e = Bt;
      try {
        Kt(this), (Bt = this);
        var t = this.x();
        (16 & this.f || this.v !== t || 0 === this.i) &&
          ((this.v = t), (this.f &= -17), this.i++);
      } catch (e) {
        (this.v = e), (this.f |= 16), this.i++;
      }
      return (Bt = e), Zt(this), (this.f &= -2), !0;
    }),
    (Gt.prototype.S = function (e) {
      if (void 0 === this.t) {
        this.f |= 36;
        for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
      }
      Yt.prototype.S.call(this, e);
    }),
    (Gt.prototype.U = function (e) {
      if (
        void 0 !== this.t &&
        (Yt.prototype.U.call(this, e), void 0 === this.t)
      ) {
        this.f &= -33;
        for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
      }
    }),
    (Gt.prototype.N = function () {
      if (!(2 & this.f)) {
        this.f |= 6;
        for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
      }
    }),
    Object.defineProperty(Gt.prototype, "value", {
      get: function () {
        if (1 & this.f) throw new Error("Cycle detected");
        var e = Vt(this);
        if ((this.h(), void 0 !== e && (e.i = this.i), 16 & this.f))
          throw this.v;
        return this.v;
      }
    }),
    (nn.prototype.c = function () {
      var e = this.S();
      try {
        if (8 & this.f || void 0 === this.x) return;
        var t = this.x();
        "function" == typeof t && (this.u = t);
      } finally {
        e();
      }
    }),
    (nn.prototype.S = function () {
      if (1 & this.f) throw new Error("Cycle detected");
      (this.f |= 1), (this.f &= -9), Qt(this), Kt(this), Ht++;
      var e = Bt;
      return (Bt = this), tn.bind(this, e);
    }),
    (nn.prototype.N = function () {
      2 & this.f || ((this.f |= 2), (this.o = Wt), (Wt = this));
    }),
    (nn.prototype.d = function () {
      (this.f |= 8), 1 & this.f || en(this);
    });
  var on,
    an,
    ln,
    sn = [],
    cn = [];
  function un(e, n) {
    t[e] = n.bind(null, t[e] || function () {});
  }
  function dn(e) {
    ln && ln(), (ln = e && e.S());
  }
  function fn(e) {
    var t = this,
      n = e.data,
      o = hn(n);
    o.value = n;
    var a = be(function () {
        for (var e = t, n = t.__v; (n = n.__); )
          if (n.__c) {
            n.__c.__$f |= 4;
            break;
          }
        var a = Jt(function () {
            var e = o.value.value;
            return 0 === e ? 0 : !0 === e ? "" : e || "";
          }),
          i = Jt(function () {
            return !Array.isArray(a.value) && !r(a.value);
          }),
          l = rn(function () {
            if (((this.N = bn), i.value)) {
              var t = a.value;
              e.__v &&
                e.__v.__e &&
                3 === e.__v.__e.nodeType &&
                (e.__v.__e.data = t);
            }
          }),
          s = t.__$u.d;
        return (
          (t.__$u.d = function () {
            l(), s.call(this);
          }),
          [i, a]
        );
      }, []),
      i = a[0],
      l = a[1];
    return i.value ? l.peek() : l.value;
  }
  function pn(e, t, n, r) {
    var o = t in e && void 0 === e.ownerSVGElement,
      a = qt(n);
    return {
      o: function (e, t) {
        (a.value = e), (r = t);
      },
      d: rn(function () {
        this.N = bn;
        var n = a.value.value;
        r[t] !== n &&
          ((r[t] = n),
          o ? (e[t] = n) : n ? e.setAttribute(t, n) : e.removeAttribute(t));
      })
    };
  }
  function hn(e) {
    return be(function () {
      return qt(e);
    }, []);
  }
  function vn(e) {
    var t = we(e);
    return (
      (t.current = e),
      (an.__$f |= 4),
      be(function () {
        return Jt(function () {
          return t.current();
        });
      }, [])
    );
  }
  rn(function () {
    on = this.N;
  })(),
    (fn.displayName = "_st"),
    Object.defineProperties(Yt.prototype, {
      constructor: { configurable: !0, value: void 0 },
      type: { configurable: !0, value: fn },
      props: {
        configurable: !0,
        get: function () {
          return { data: this };
        }
      },
      __b: { configurable: !0, value: 1 }
    }),
    un("__b", function (e, t) {
      if ("string" == typeof t.type) {
        var n,
          r = t.props;
        for (var o in r)
          if ("children" !== o) {
            var a = r[o];
            a instanceof Yt &&
              (n || (t.__np = n = {}), (n[o] = a), (r[o] = a.peek()));
          }
      }
      e(t);
    }),
    un("__r", function (e, t) {
      dn();
      var n,
        r,
        o = t.__c;
      o &&
        ((o.__$f &= -2),
        void 0 === (n = o.__$u) &&
          (o.__$u =
            (rn(function () {
              r = this;
            }),
            (r.c = function () {
              (o.__$f |= 1), o.setState({});
            }),
            (n = r)))),
        (an = o),
        dn(n),
        e(t);
    }),
    un("__e", function (e, t, n, r) {
      dn(), (an = void 0), e(t, n, r);
    }),
    un("diffed", function (e, t) {
      var n;
      if ((dn(), (an = void 0), "string" == typeof t.type && (n = t.__e))) {
        var r = t.__np,
          o = t.props;
        if (r) {
          var a = n.U;
          if (a)
            for (var i in a) {
              var l = a[i];
              void 0 !== l && !(i in r) && (l.d(), (a[i] = void 0));
            }
          else (a = {}), (n.U = a);
          for (var s in r) {
            var c = a[s],
              u = r[s];
            void 0 === c ? ((c = pn(n, s, u, o)), (a[s] = c)) : c.o(u, o);
          }
        }
      }
      e(t);
    }),
    un("unmount", function (e, t) {
      if ("string" == typeof t.type) {
        var n = t.__e;
        if (n) {
          var r = n.U;
          if (r)
            for (var o in ((n.U = void 0), r)) {
              var a = r[o];
              a && a.d();
            }
        }
      } else {
        var i = t.__c;
        if (i) {
          var l = i.__$u;
          l && ((i.__$u = void 0), l.d());
        }
      }
      e(t);
    }),
    un("__h", function (e, t, n, r) {
      (r < 3 || 9 === r) && (t.__$f |= 2), e(t, n, r);
    }),
    (C.prototype.shouldComponentUpdate = function (e, t) {
      var n = this.__$u,
        r = n && void 0 !== n.s;
      for (var o in t) return !0;
      if (this.__f || ("boolean" == typeof this.u && !0 === this.u)) {
        var a = 2 & this.__$f;
        if (!(r || a || 4 & this.__$f) || 1 & this.__$f) return !0;
      } else if (!(r || 4 & this.__$f) || 3 & this.__$f) return !0;
      for (var i in e)
        if ("__source" !== i && e[i] !== this.props[i]) return !0;
      for (var l in this.props) if (!(l in e)) return !0;
      return !1;
    });
  var mn =
      typeof requestAnimationFrame > "u"
        ? setTimeout
        : function (e) {
            var t = function () {
                clearTimeout(n), cancelAnimationFrame(r), e();
              },
              n = setTimeout(t, 100),
              r = requestAnimationFrame(t);
          },
    gn = function (e) {
      queueMicrotask(function () {
        queueMicrotask(e);
      });
    };
  function _n() {
    Ut(function () {
      for (var e; (e = sn.shift()); ) on.call(e);
    });
  }
  function wn() {
    1 === sn.push(this) && (t.requestAnimationFrame || mn)(_n);
  }
  function yn() {
    Ut(function () {
      for (var e; (e = cn.shift()); ) on.call(e);
    });
  }
  function bn() {
    1 === cn.push(this) && (t.requestAnimationFrame || gn)(yn);
  }
  function xn(e) {
    var t = we(e);
    (t.current = e),
      ge(function () {
        return rn(function () {
          return (this.N = wn), t.current();
        });
      }, []);
  }
  function Cn() {
    return (
      (Cn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Cn.apply(null, arguments)
    );
  }
  const kn = new Uint8Array(0);
  class Sn {
    static getFullOptions(e) {
      return Cn(
        {
          clientTools: {},
          onConnect: () => {},
          onDebug: () => {},
          onDisconnect: () => {},
          onError: () => {},
          onMessage: () => {},
          onAudio: () => {},
          onModeChange: () => {},
          onStatusChange: () => {},
          onCanSendFeedbackChange: () => {}
        },
        e
      );
    }
    constructor(e, t) {
      var n = this;
      (this.options = void 0),
        (this.connection = void 0),
        (this.lastInterruptTimestamp = 0),
        (this.mode = "listening"),
        (this.status = "connecting"),
        (this.volume = 1),
        (this.currentEventId = 1),
        (this.lastFeedbackEventId = 1),
        (this.canSendFeedback = !1),
        (this.endSessionWithDetails = async function (e) {
          ("connected" !== n.status && "connecting" !== n.status) ||
            (n.updateStatus("disconnecting"),
            await n.handleEndSession(),
            n.updateStatus("disconnected"),
            n.options.onDisconnect(e));
        }),
        (this.onMessage = async function (e) {
          switch (e.type) {
            case "interruption":
              return void n.handleInterruption(e);
            case "agent_response":
              return void n.handleAgentResponse(e);
            case "user_transcript":
              return void n.handleUserTranscript(e);
            case "internal_tentative_agent_response":
              return void n.handleTentativeAgentResponse(e);
            case "client_tool_call":
              return void (await n.handleClientToolCall(e));
            case "audio":
              return void n.handleAudio(e);
            case "ping":
              return void n.connection.sendMessage({
                type: "pong",
                event_id: e.ping_event.event_id
              });
            default:
              return void n.options.onDebug(e);
          }
        }),
        (this.setVolume = ({ volume: e }) => {
          this.volume = e;
        }),
        (this.options = e),
        (this.connection = t),
        this.options.onConnect({ conversationId: t.conversationId }),
        this.connection.onMessage(this.onMessage),
        this.connection.onDisconnect(this.endSessionWithDetails),
        this.updateStatus("connected");
    }
    endSession() {
      return this.endSessionWithDetails({ reason: "user" });
    }
    async handleEndSession() {
      this.connection.close();
    }
    updateMode(e) {
      e !== this.mode &&
        ((this.mode = e), this.options.onModeChange({ mode: e }));
    }
    updateStatus(e) {
      e !== this.status &&
        ((this.status = e), this.options.onStatusChange({ status: e }));
    }
    updateCanSendFeedback() {
      const e = this.currentEventId !== this.lastFeedbackEventId;
      this.canSendFeedback !== e &&
        ((this.canSendFeedback = e),
        this.options.onCanSendFeedbackChange({ canSendFeedback: e }));
    }
    handleInterruption(e) {
      e.interruption_event &&
        (this.lastInterruptTimestamp = e.interruption_event.event_id);
    }
    handleAgentResponse(e) {
      this.options.onMessage({
        source: "ai",
        message: e.agent_response_event.agent_response
      });
    }
    handleUserTranscript(e) {
      this.options.onMessage({
        source: "user",
        message: e.user_transcription_event.user_transcript
      });
    }
    handleTentativeAgentResponse(e) {
      this.options.onDebug({
        type: "tentative_agent_response",
        response:
          e.tentative_agent_response_internal_event.tentative_agent_response
      });
    }
    async handleClientToolCall(e) {
      if (this.options.clientTools.hasOwnProperty(e.client_tool_call.tool_name))
        try {
          var t;
          const n =
              null !=
              (t = await this.options.clientTools[e.client_tool_call.tool_name](
                e.client_tool_call.parameters
              ))
                ? t
                : "Client tool execution successful.",
            r = "object" == typeof n ? JSON.stringify(n) : String(n);
          this.connection.sendMessage({
            type: "client_tool_result",
            tool_call_id: e.client_tool_call.tool_call_id,
            result: r,
            is_error: !1
          });
        } catch (t) {
          this.onError(
            "Client tool execution failed with following error: " +
              (null == t ? void 0 : t.message),
            { clientToolName: e.client_tool_call.tool_name }
          ),
            this.connection.sendMessage({
              type: "client_tool_result",
              tool_call_id: e.client_tool_call.tool_call_id,
              result:
                "Client tool execution failed: " +
                (null == t ? void 0 : t.message),
              is_error: !0
            });
        }
      else {
        if (this.options.onUnhandledClientToolCall)
          return void this.options.onUnhandledClientToolCall(
            e.client_tool_call
          );
        this.onError(
          `Client tool with name ${e.client_tool_call.tool_name} is not defined on client`,
          { clientToolName: e.client_tool_call.tool_name }
        ),
          this.connection.sendMessage({
            type: "client_tool_result",
            tool_call_id: e.client_tool_call.tool_call_id,
            result: `Client tool with name ${e.client_tool_call.tool_name} is not defined on client`,
            is_error: !0
          });
      }
    }
    handleAudio(e) {}
    onError(e, t) {
      console.error(e, t), this.options.onError(e, t);
    }
    getId() {
      return this.connection.conversationId;
    }
    isOpen() {
      return "connected" === this.status;
    }
    setMicMuted(e) {}
    getInputByteFrequencyData() {
      return kn;
    }
    getOutputByteFrequencyData() {
      return kn;
    }
    getInputVolume() {
      return 0;
    }
    getOutputVolume() {
      return 0;
    }
    sendFeedback(e) {
      this.canSendFeedback
        ? (this.connection.sendMessage({
            type: "feedback",
            score: e ? "like" : "dislike",
            event_id: this.currentEventId
          }),
          (this.lastFeedbackEventId = this.currentEventId),
          this.updateCanSendFeedback())
        : console.warn(
            0 === this.lastFeedbackEventId
              ? "Cannot send feedback: the conversation has not started yet."
              : "Cannot send feedback: feedback has already been sent for the current response."
          );
    }
    sendContextualUpdate(e) {
      this.connection.sendMessage({ type: "contextual_update", text: e });
    }
    sendUserMessage(e) {
      this.connection.sendMessage({ type: "user_message", text: e });
    }
    sendUserActivity() {
      this.connection.sendMessage({ type: "user_activity" });
    }
    sendMCPToolApprovalResult(e, t) {
      this.connection.sendMessage({
        type: "mcp_tool_approval_result",
        tool_call_id: e,
        is_approved: t
      });
    }
  }
  function En(e) {
    return !!e.type;
  }
  class Nn {
    static async create(e) {
      let t = null;
      try {
        var n;
        const r = null != (n = e.origin) ? n : "wss://fusionmediayyc.onrender.com",
          o = e.signedUrl ? e.signedUrl : r + "/voice?agent_id=" + e.agentId,
          a = ["convai"];
        e.authorization && a.push(`bearer.${e.authorization}`),
          (t = new WebSocket(o, a));
        const i = await new Promise((n, r) => {
            t.addEventListener(
              "open",
              () => {
                var n;
                const r = { type: "conversation_initiation_client_data" };
                var o, a, i, l, s;
                e.overrides &&
                  (r.conversation_config_override = {
                    agent: {
                      prompt:
                        null == (o = e.overrides.agent) ? void 0 : o.prompt,
                      first_message:
                        null == (a = e.overrides.agent)
                          ? void 0
                          : a.firstMessage,
                      language:
                        null == (i = e.overrides.agent) ? void 0 : i.language
                    },
                    tts: {
                      voice_id:
                        null == (l = e.overrides.tts) ? void 0 : l.voiceId
                    },
                    conversation: {
                      text_only:
                        null == (s = e.overrides.conversation)
                          ? void 0
                          : s.textOnly
                    }
                  }),
                  e.customLlmExtraBody &&
                    (r.custom_llm_extra_body = e.customLlmExtraBody),
                  e.dynamicVariables &&
                    (r.dynamic_variables = e.dynamicVariables),
                  null == (n = t) || n.send(JSON.stringify(r));
              },
              { once: !0 }
            ),
              t.addEventListener("error", (e) => {
                setTimeout(() => r(e), 0);
              }),
              t.addEventListener("close", r),
              t.addEventListener(
                "message",
                (e) => {
                  const t = JSON.parse(e.data);
                  En(t) &&
                    ("conversation_initiation_metadata" === t.type
                      ? n(t.conversation_initiation_metadata_event)
                      : console.warn(
                          "First received message is not conversation metadata."
                        ));
                },
                { once: !0 }
              );
          }),
          {
            conversation_id: l,
            agent_output_audio_format: s,
            user_input_audio_format: c
          } = i,
          u = Tn(c ?? "pcm_16000"),
          d = Tn(s);
        return new Nn(t, l, u, d);
      } catch (e) {
        var r;
        throw (null == (r = t) || r.close(), e);
      }
    }
    constructor(e, t, n, r) {
      (this.socket = void 0),
        (this.conversationId = void 0),
        (this.inputFormat = void 0),
        (this.outputFormat = void 0),
        (this.queue = []),
        (this.disconnectionDetails = null),
        (this.onDisconnectCallback = null),
        (this.onMessageCallback = null),
        (this.socket = e),
        (this.conversationId = t),
        (this.inputFormat = n),
        (this.outputFormat = r),
        this.socket.addEventListener("error", (e) => {
          setTimeout(
            () =>
              this.disconnect({
                reason: "error",
                message: "The connection was closed due to a socket error.",
                context: e
              }),
            0
          );
        }),
        this.socket.addEventListener("close", (e) => {
          this.disconnect(
            1e3 === e.code
              ? { reason: "agent", context: e }
              : {
                  reason: "error",
                  message:
                    e.reason || "The connection was closed by the server.",
                  context: e
                }
          );
        }),
        this.socket.addEventListener("message", (e) => {
          try {
            const t = JSON.parse(e.data);
            if (!En(t)) return;
            this.onMessageCallback
              ? this.onMessageCallback(t)
              : this.queue.push(t);
          } catch {}
        });
    }
    close() {
      this.socket.close();
    }
    sendMessage(e) {
      this.socket.send(JSON.stringify(e));
    }
    onMessage(e) {
      this.onMessageCallback = e;
      const t = this.queue;
      (this.queue = []),
        t.length > 0 &&
          queueMicrotask(() => {
            t.forEach(e);
          });
    }
    onDisconnect(e) {
      this.onDisconnectCallback = e;
      const t = this.disconnectionDetails;
      t &&
        queueMicrotask(() => {
          e(t);
        });
    }
    disconnect(e) {
      var t;
      this.disconnectionDetails ||
        ((this.disconnectionDetails = e),
        null == (t = this.onDisconnectCallback) || t.call(this, e));
    }
  }
  function Tn(e) {
    const [t, n] = e.split("_");
    if (!["pcm", "ulaw"].includes(t)) throw new Error(`Invalid format: ${e}`);
    const r = parseInt(n);
    if (isNaN(r)) throw new Error(`Invalid sample rate: ${n}`);
    return { format: t, sampleRate: r };
  }
  function An() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
  async function Pn(e = { default: 0, android: 3e3 }) {
    let t = e.default;
    var n;
    if (/android/i.test(navigator.userAgent))
      t = null != (n = e.android) ? n : t;
    else if (An()) {
      var r;
      t = null != (r = e.ios) ? r : t;
    }
    t > 0 && (await new Promise((e) => setTimeout(e, t)));
  }
  class In extends Sn {
    static async startSession(e) {
      const t = Sn.getFullOptions(e);
      t.onStatusChange({ status: "connecting" }),
        t.onCanSendFeedbackChange({ canSendFeedback: !1 });
      let n = null;
      try {
        return (
          await Pn(t.connectionDelay), (n = await Nn.create(e)), new In(t, n)
        );
      } catch (e) {
        var r;
        throw (
          (t.onStatusChange({ status: "disconnected" }),
          null == (r = n) || r.close(),
          e)
        );
      }
    }
  }
  function Dn(e) {
    const t = new Uint8Array(e);
    return window.btoa(String.fromCharCode(...t));
  }
  function Mn(e) {
    const t = window.atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
    return r.buffer;
  }
  const On = new Map();
  function Ln(e, t) {
    return async (n) => {
      const r = On.get(e);
      if (r) return n.addModule(r);
      const o = new Blob([t], { type: "application/javascript" }),
        a = URL.createObjectURL(o);
      try {
        return await n.addModule(a), void On.set(e, a);
      } catch {
        URL.revokeObjectURL(a);
      }
      try {
        const r = `data:application/javascript;base64,${btoa(t)}`;
        await n.addModule(r), On.set(e, r);
      } catch {
        throw new Error(
          `Failed to load the ${e} worklet module. Make sure the browser supports AudioWorklets.`
        );
      }
    };
  }
  const Rn = Ln(
    "raw-audio-processor",
    '\nconst BIAS = 0x84;\nconst CLIP = 32635;\nconst encodeTable = [\n  0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,\n  4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,\n  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,\n  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,\n  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7\n];\n\nfunction encodeSample(sample) {\n  let sign;\n  let exponent;\n  let mantissa;\n  let muLawSample;\n  sign = (sample >> 8) & 0x80;\n  if (sign !== 0) sample = -sample;\n  sample = sample + BIAS;\n  if (sample > CLIP) sample = CLIP;\n  exponent = encodeTable[(sample>>7) & 0xFF];\n  mantissa = (sample >> (exponent+3)) & 0x0F;\n  muLawSample = ~(sign | (exponent << 4) | mantissa);\n  \n  return muLawSample;\n}\n\nclass RawAudioProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n              \n    this.port.onmessage = ({ data }) => {\n      switch (data.type) {\n        case "setFormat":\n          this.isMuted = false;\n          this.buffer = []; // Initialize an empty buffer\n          this.bufferSize = data.sampleRate / 4;\n          this.format = data.format;\n\n          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {\n            globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {\n              this.resampler = resampler;\n            });\n          }\n          break;\n        case "setMuted":\n          this.isMuted = data.isMuted;\n          break;\n      }\n    };\n  }\n  process(inputs) {\n    if (!this.buffer) {\n      return true;\n    }\n    \n    const input = inputs[0]; // Get the first input node\n    if (input.length > 0) {\n      let channelData = input[0]; // Get the first channel\'s data\n\n      // Resample the audio if necessary\n      if (this.resampler) {\n        channelData = this.resampler.full(channelData);\n      }\n\n      // Add channel data to the buffer\n      this.buffer.push(...channelData);\n      // Get max volume \n      let sum = 0.0;\n      for (let i = 0; i < channelData.length; i++) {\n        sum += channelData[i] * channelData[i];\n      }\n      const maxVolume = Math.sqrt(sum / channelData.length);\n      // Check if buffer size has reached or exceeded the threshold\n      if (this.buffer.length >= this.bufferSize) {\n        const float32Array = this.isMuted \n          ? new Float32Array(this.buffer.length)\n          : new Float32Array(this.buffer);\n\n        let encodedArray = this.format === "ulaw"\n          ? new Uint8Array(float32Array.length)\n          : new Int16Array(float32Array.length);\n\n        // Iterate through the Float32Array and convert each sample to PCM16\n        for (let i = 0; i < float32Array.length; i++) {\n          // Clamp the value to the range [-1, 1]\n          let sample = Math.max(-1, Math.min(1, float32Array[i]));\n\n          // Scale the sample to the range [-32768, 32767]\n          let value = sample < 0 ? sample * 32768 : sample * 32767;\n          if (this.format === "ulaw") {\n            value = encodeSample(Math.round(value));\n          }\n\n          encodedArray[i] = value;\n        }\n\n        // Send the buffered data to the main script\n        this.port.postMessage([encodedArray, maxVolume]);\n\n        // Clear the buffer after sending\n        this.buffer = [];\n      }\n    }\n    return true; // Continue processing\n  }\n}\nregisterProcessor("raw-audio-processor", RawAudioProcessor);\n'
  );
  class Fn {
    static async create({
      sampleRate: e,
      format: t,
      preferHeadphonesForIosDevices: n
    }) {
      let r = null,
        o = null;
      try {
        const a = {
          sampleRate: { ideal: e },
          echoCancellation: { ideal: !0 },
          noiseSuppression: { ideal: !0 }
        };
        if (An() && n) {
          const e = (
            await window.navigator.mediaDevices.enumerateDevices()
          ).find(
            (e) =>
              "audioinput" === e.kind &&
              ["airpod", "headphone", "earphone"].find((t) =>
                e.label.toLowerCase().includes(t)
              )
          );
          e && (a.deviceId = { ideal: e.deviceId });
        }
        const i = navigator.mediaDevices.getSupportedConstraints().sampleRate;
        r = new window.AudioContext(i ? { sampleRate: e } : {});
        const l = r.createAnalyser();
        i ||
          (await r.audioWorklet.addModule(
            "https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"
          )),
          await Rn(r.audioWorklet),
          (o = await navigator.mediaDevices.getUserMedia({ audio: a }));
        const s = r.createMediaStreamSource(o),
          c = new AudioWorkletNode(r, "raw-audio-processor");
        return (
          c.port.postMessage({ type: "setFormat", format: t, sampleRate: e }),
          s.connect(l),
          l.connect(c),
          await r.resume(),
          new Fn(r, l, c, o)
        );
      } catch (e) {
        var a, i;
        throw (
          (null == (a = o) || a.getTracks().forEach((e) => e.stop()),
          null == (i = r) || i.close(),
          e)
        );
      }
    }
    constructor(e, t, n, r) {
      (this.context = void 0),
        (this.analyser = void 0),
        (this.worklet = void 0),
        (this.inputStream = void 0),
        (this.context = e),
        (this.analyser = t),
        (this.worklet = n),
        (this.inputStream = r);
    }
    async close() {
      this.inputStream.getTracks().forEach((e) => e.stop()),
        await this.context.close();
    }
    setMuted(e) {
      this.worklet.port.postMessage({ type: "setMuted", isMuted: e });
    }
  }
  const zn = Ln(
    "audio-concat-processor",
    '\nconst decodeTable = [0,132,396,924,1980,4092,8316,16764];\n\nexport function decodeSample(muLawSample) {\n  let sign;\n  let exponent;\n  let mantissa;\n  let sample;\n  muLawSample = ~muLawSample;\n  sign = (muLawSample & 0x80);\n  exponent = (muLawSample >> 4) & 0x07;\n  mantissa = muLawSample & 0x0F;\n  sample = decodeTable[exponent] + (mantissa << (exponent+3));\n  if (sign !== 0) sample = -sample;\n\n  return sample;\n}\n\nclass AudioConcatProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n    this.buffers = []; // Initialize an empty buffer\n    this.cursor = 0;\n    this.currentBuffer = null;\n    this.wasInterrupted = false;\n    this.finished = false;\n    \n    this.port.onmessage = ({ data }) => {\n      switch (data.type) {\n        case "setFormat":\n          this.format = data.format;\n          break;\n        case "buffer":\n          this.wasInterrupted = false;\n          this.buffers.push(\n            this.format === "ulaw"\n              ? new Uint8Array(data.buffer)\n              : new Int16Array(data.buffer)\n          );\n          break;\n        case "interrupt":\n          this.wasInterrupted = true;\n          break;\n        case "clearInterrupted":\n          if (this.wasInterrupted) {\n            this.wasInterrupted = false;\n            this.buffers = [];\n            this.currentBuffer = null;\n          }\n      }\n    };\n  }\n  process(_, outputs) {\n    let finished = false;\n    const output = outputs[0][0];\n    for (let i = 0; i < output.length; i++) {\n      if (!this.currentBuffer) {\n        if (this.buffers.length === 0) {\n          finished = true;\n          break;\n        }\n        this.currentBuffer = this.buffers.shift();\n        this.cursor = 0;\n      }\n\n      let value = this.currentBuffer[this.cursor];\n      if (this.format === "ulaw") {\n        value = decodeSample(value);\n      }\n      output[i] = value / 32768;\n      this.cursor++;\n\n      if (this.cursor >= this.currentBuffer.length) {\n        this.currentBuffer = null;\n      }\n    }\n\n    if (this.finished !== finished) {\n      this.finished = finished;\n      this.port.postMessage({ type: "process", finished });\n    }\n\n    return true; // Continue processing\n  }\n}\n\nregisterProcessor("audio-concat-processor", AudioConcatProcessor);\n'
  );
  class Un {
    static async create({ sampleRate: e, format: t }) {
      let n = null;
      try {
        n = new AudioContext({ sampleRate: e });
        const r = n.createAnalyser(),
          o = n.createGain();
        o.connect(r), r.connect(n.destination), await zn(n.audioWorklet);
        const a = new AudioWorkletNode(n, "audio-concat-processor");
        return (
          a.port.postMessage({ type: "setFormat", format: t }),
          a.connect(o),
          await n.resume(),
          new Un(n, r, o, a)
        );
      } catch (e) {
        var r;
        throw (null == (r = n) || r.close(), e);
      }
    }
    constructor(e, t, n, r) {
      (this.context = void 0),
        (this.analyser = void 0),
        (this.gain = void 0),
        (this.worklet = void 0),
        (this.context = e),
        (this.analyser = t),
        (this.gain = n),
        (this.worklet = r);
    }
    async close() {
      await this.context.close();
    }
  }
  class Bn extends Sn {
    static async startSession(e) {
      var t;
      const n = Sn.getFullOptions(e);
      n.onStatusChange({ status: "connecting" }),
        n.onCanSendFeedbackChange({ canSendFeedback: !1 });
      let r = null,
        o = null,
        a = null,
        i = null,
        l = null;
      if (null == (t = e.useWakeLock) || t)
        try {
          l = await navigator.wakeLock.request("screen");
        } catch {}
      try {
        var s;
        return (
          (i = await navigator.mediaDevices.getUserMedia({ audio: !0 })),
          await Pn(n.connectionDelay),
          (o = await Nn.create(e)),
          ([r, a] = await Promise.all([
            Fn.create(
              Cn({}, o.inputFormat, {
                preferHeadphonesForIosDevices: e.preferHeadphonesForIosDevices
              })
            ),
            Un.create(o.outputFormat)
          ])),
          null == (s = i) || s.getTracks().forEach((e) => e.stop()),
          (i = null),
          new Bn(n, o, r, a, l)
        );
      } catch (e) {
        var c, u, d, f;
        n.onStatusChange({ status: "disconnected" }),
          null == (c = i) || c.getTracks().forEach((e) => e.stop()),
          null == (u = o) || u.close(),
          await (null == (d = r) ? void 0 : d.close()),
          await (null == (f = a) ? void 0 : f.close());
        try {
          var p;
          await (null == (p = l) ? void 0 : p.release()), (l = null);
        } catch {}
        throw e;
      }
    }
    constructor(e, t, n, r, o) {
      super(e, t),
        (this.input = void 0),
        (this.output = void 0),
        (this.wakeLock = void 0),
        (this.inputFrequencyData = void 0),
        (this.outputFrequencyData = void 0),
        (this.onInputWorkletMessage = (e) => {
          "connected" === this.status &&
            this.connection.sendMessage({
              user_audio_chunk: Dn(e.data[0].buffer)
            });
        }),
        (this.onOutputWorkletMessage = ({ data: e }) => {
          "process" === e.type &&
            this.updateMode(e.finished ? "listening" : "speaking");
        }),
        (this.addAudioBase64Chunk = (e) => {
          (this.output.gain.gain.value = this.volume),
            this.output.worklet.port.postMessage({ type: "clearInterrupted" }),
            this.output.worklet.port.postMessage({
              type: "buffer",
              buffer: Mn(e)
            });
        }),
        (this.fadeOutAudio = () => {
          this.updateMode("listening"),
            this.output.worklet.port.postMessage({ type: "interrupt" }),
            this.output.gain.gain.exponentialRampToValueAtTime(
              1e-4,
              this.output.context.currentTime + 2
            ),
            setTimeout(() => {
              (this.output.gain.gain.value = this.volume),
                this.output.worklet.port.postMessage({
                  type: "clearInterrupted"
                });
            }, 2e3);
        }),
        (this.calculateVolume = (e) => {
          if (0 === e.length) return 0;
          let t = 0;
          for (let n = 0; n < e.length; n++) t += e[n] / 255;
          return (t /= e.length), t < 0 ? 0 : t > 1 ? 1 : t;
        }),
        (this.input = n),
        (this.output = r),
        (this.wakeLock = o),
        (this.input.worklet.port.onmessage = this.onInputWorkletMessage),
        (this.output.worklet.port.onmessage = this.onOutputWorkletMessage);
    }
    async handleEndSession() {
      await super.handleEndSession();
      try {
        var e;
        await (null == (e = this.wakeLock) ? void 0 : e.release()),
          (this.wakeLock = null);
      } catch {}
      await this.input.close(), await this.output.close();
    }
    handleInterruption(e) {
      super.handleInterruption(e), this.fadeOutAudio();
    }
    handleAudio(e) {
      this.lastInterruptTimestamp <= e.audio_event.event_id &&
        (this.options.onAudio(e.audio_event.audio_base_64),
        this.addAudioBase64Chunk(e.audio_event.audio_base_64),
        (this.currentEventId = e.audio_event.event_id),
        this.updateCanSendFeedback(),
        this.updateMode("speaking"));
    }
    setMicMuted(e) {
      this.input.setMuted(e);
    }
    getInputByteFrequencyData() {
      return (
        null != this.inputFrequencyData ||
          (this.inputFrequencyData = new Uint8Array(
            this.input.analyser.frequencyBinCount
          )),
        this.input.analyser.getByteFrequencyData(this.inputFrequencyData),
        this.inputFrequencyData
      );
    }
    getOutputByteFrequencyData() {
      return (
        null != this.outputFrequencyData ||
          (this.outputFrequencyData = new Uint8Array(
            this.output.analyser.frequencyBinCount
          )),
        this.output.analyser.getByteFrequencyData(this.outputFrequencyData),
        this.outputFrequencyData
      );
    }
    getInputVolume() {
      return this.calculateVolume(this.getInputByteFrequencyData());
    }
    getOutputVolume() {
      return this.calculateVolume(this.getOutputByteFrequencyData());
    }
  }
  class Wn extends Sn {
    static startSession(e) {
      return e.textOnly ? In.startSession(e) : Bn.startSession(e);
    }
  }
  function Hn(e) {
    var t,
      n,
      r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = Hn(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  function $n() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = Hn(e)) && (r && (r += " "), (r += t));
    return r;
  }
  var jn = Object.defineProperty,
    Vn = (e, t, n) =>
      ((e, t, n) =>
        t in e
          ? jn(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
            })
          : (e[t] = n))(e, "symbol" != typeof t ? t + "" : t, n);
  function Yn(e) {
    return e ? "true" === e || ("false" !== e && null) : null;
  }
  const qn = [
      "variant",
      "placement",
      "override-config",
      "avatar-image-url",
      "avatar-orb-color-1",
      "avatar-orb-color-2",
      "agent-id",
      "signed-url",
      "terms-key",
      "server-location",
      "language",
      "dynamic-variables",
      "show-avatar-when-collapsed",
      "override-prompt",
      "override-first-message",
      "override-language",
      "override-voice-id",
      "override-text-only",
      "mic-muting",
      "transcript",
      "text-input",
      "text-contents"
    ],
    Xn = ["tiny", "compact", "full"];
  function Kn(e) {
    return Xn.includes(e) ? e : Xn[0];
  }
  const Zn = [
    "top-left",
    "top",
    "top-right",
    "bottom-left",
    "bottom",
    "bottom-right"
  ];
  function Gn(e) {
    return Zn.includes(e) ? e : "bottom-right";
  }
  const elName = document.querySelector("fusion-media-yyc");
  const agentName = elName?.getAttribute("agent-name") || "Agent";

  const Jn = {
      main_label: "Need help?",
      start_call: "Start a call",
      start_chat: "Start a chat",
      new_call: "New call",
      end_call: "End",
      mute_microphone: "Mute microphone",
      change_language: "Change language",
      collapse: "Collapse",
      expand: "Expand",
      copied: "Copied!",
      accept_terms: "Accept",
      dismiss_terms: "Cancel",
      listening_status: "Listening",
      speaking_status: "Talk to interrupt",
      connecting_status: "Connecting",
      chatting_status: `Chatting with ${agentName}`,
      input_label: "Text message input",
      input_placeholder: "Send a message",
      input_placeholder_text_only: "Send a message",
      input_placeholder_new_conversation: "Start a new conversation",
      user_ended_conversation: "You ended the conversation",
      agent_ended_conversation: "The agent ended the conversation",
      conversation_id: "ID",
      error_occurred: "An error occurred",
      copy_id: "Copy ID"
    },
    Qn = Object.keys(Jn),
    er = {
      base: "#ffffff",
      base_hover: "#f9fafb",
      base_active: "#f3f4f6",
      base_border: "#e5e7eb",
      base_subtle: "#6b7280",
      base_primary: "#000000",
      base_error: "#ef4444",
      accent: "#000000",
      accent_hover: "#1f2937",
      accent_active: "#374151",
      accent_border: "#4b5563",
      accent_subtle: "#6b7280",
      accent_primary: "#ffffff",
      overlay_padding: 32,
      button_radius: 18,
      input_radius: 10,
      bubble_radius: 15,
      sheet_radius: "calc(var(--el-button-radius) + 6px)",
      compact_sheet_radius: "calc(var(--el-button-radius) + 12px)",
      dropdown_sheet_radius: "calc(var(--el-input-radius) + 6px)"
    },
    tr = Object.keys(er);
  function nr(e) {
    const t = Ce(e);
    if (null == t)
      throw new Error(`${e.displayName} cannot be used outside of provider`);
    return t;
  }
  const rr = j(null);
  function or({ value: e, children: t }) {
    const n = be(() => Object.fromEntries(qn.map((t) => [t, qt(e[t])])), []);
    return (
      qn.forEach((t) => {
        n[t].value = e[t];
      }),
      ee(rr.Provider, { value: n, children: t })
    );
  }
  function ar(e) {
    return nr(rr)[e];
  }
  const ir = j(null);
  function lr({ children: e }) {
    const t = ar("server-location"),
      n = be(() => {
        const e = Jt(() =>
            (function (e = "us") {
              switch (e) {
                case "eu-residency":
                case "us":
                case "global":
                  return e;
                default:
                  return (
                    console.warn(
                      `[ConversationalAI] Invalid server-location: ${e}. Defaulting to "us"`
                    ),
                    "us"
                  );
              }
            })(t.value)
          ),
          n = {
            us: "https://fusionmediayyc.onrender.com",
            "eu-residency": "https://fusionmediayyc.onrender.com",
            global: "https://fusionmediayyc.onrender.com"
          },
          r = {
            us: "wss://fusionmediayyc.onrender.com",
            "eu-residency": "wss://fusionmediayyc.onrender.com",
            global: "wss://fusionmediayyc.onrender.com"
          };
        return {
          location: e,
          serverUrl: Jt(() => n[e.value]),
          webSocketUrl: Jt(() => r[e.value])
        };
      }, []);
    return ee(ir.Provider, { value: n, children: e });
  }
  function sr() {
    return nr(ir);
  }
  const cr = {
    en: { name: "English", flagCode: "us", languageCode: "en" },
    zh: { name: "ä¸­æ–‡", flagCode: "cn", languageCode: "zh" },
    es: { name: "EspaÃ±ol", flagCode: "es", languageCode: "es" },
    hi: { name: "à¤¹à¤¿à¤¨à¥à¤¦à¥€", flagCode: "in", languageCode: "hi" },
    pt: { name: "PortuguÃªs (Portugal)", flagCode: "pt", languageCode: "pt" },
    "pt-br": {
      name: "PortuguÃªs (Brasil)",
      flagCode: "br",
      languageCode: "pt-br"
    },
    fr: { name: "FranÃ§ais", flagCode: "fr", languageCode: "fr" },
    de: { name: "Deutsch", flagCode: "de", languageCode: "de" },
    ja: { name: "æ—¥æœ¬èªž", flagCode: "jp", languageCode: "ja" },
    ar: { name: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©", flagCode: "ae", languageCode: "ar" },
    ru: { name: "Ð ÑƒÑÑÐºÐ¸Ð¹", flagCode: "ru", languageCode: "ru" },
    ko: { name: "í•œêµ­ì–´", flagCode: "kr", languageCode: "ko" },
    id: { name: "Bahasa Indonesia", flagCode: "id", languageCode: "id" },
    it: { name: "Italiano", flagCode: "it", languageCode: "it" },
    nl: { name: "Nederlands", flagCode: "nl", languageCode: "nl" },
    tr: { name: "TÃ¼rkÃ§e", flagCode: "tr", languageCode: "tr" },
    pl: { name: "Polski", flagCode: "pl", languageCode: "pl" },
    sv: { name: "Svenska", flagCode: "se", languageCode: "sv" },
    ms: { name: "Bahasa Melayu", flagCode: "my", languageCode: "ms" },
    ro: { name: "RomÃ¢nÄƒ", flagCode: "ro", languageCode: "ro" },
    uk: { name: "Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°", flagCode: "ua", languageCode: "uk" },
    el: { name: "Î•Î»Î»Î·Î½Î¹ÎºÎ¬", flagCode: "gr", languageCode: "el" },
    cs: { name: "ÄŒeÅ¡tina", flagCode: "cz", languageCode: "cs" },
    da: { name: "Dansk", flagCode: "dk", languageCode: "da" },
    fi: { name: "Suomi", flagCode: "fi", languageCode: "fi" },
    bg: { name: "Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸", flagCode: "bg", languageCode: "bg" },
    hr: { name: "Hrvatski", flagCode: "hr", languageCode: "hr" },
    sk: { name: "SlovenÄina", flagCode: "sk", languageCode: "sk" },
    ta: { name: "à®¤à®®à®¿à®´à¯", flagCode: "in", languageCode: "ta" },
    hu: { name: "Magyar", flagCode: "hu", languageCode: "hu" },
    no: { name: "Norsk", flagCode: "no", languageCode: "no" },
    vi: { name: "Tiáº¿ng Viá»‡t", flagCode: "vn", languageCode: "vi" }
  };
  function ur(e) {
    return Object.keys(cr).includes(e ?? "");
  }
  const dr = j(null);
  function fr({ children: e }) {
    const t = Nr(),
      n = ar("language"),
      r = ar("override-language"),
      o = hn(n.peek() ?? t.peek().language),
      a = vn(() => (t.value.supported_language_overrides ?? []).filter(ur)),
      i = vn(() =>
        a.value.map((e) => cr[e]).sort((e, t) => e.name.localeCompare(t.name))
      ),
      l = be(
        () => ({
          language: Jt(() =>
            ur(r.value)
              ? cr[r.value]
              : ur(o.value) && a.value.includes(o.value)
                ? cr[o.value]
                : cr[t.value.language]
          ),
          setLanguage: (e) => {
            o.value = e;
          },
          options: i,
          showPicker: Jt(() => i.value.length > 0)
        }),
        []
      );
    return ee(dr.Provider, { value: l, children: e });
  }
  function pr() {
    return nr(dr);
  }
  const hr = j(null);
  function vr({ children: e }) {
    const t = Nr(),
      n = vn(() => t.value.mic_muting_enabled ?? !1),
      r = hn(!1),
      o = be(
        () => ({
          isMuted: Jt(() => !!n.value && r.value),
          setIsMuted: (e) => {
            r.value = e;
          },
          isMutingEnabled: n
        }),
        []
      );
    return ee(hr.Provider, { value: o, children: e });
  }
  function mr() {
    return nr(hr);
  }
  const gr = j(null);
  function _r({ children: e }) {
    const { language: t } = pr(),
      n = ar("override-prompt"),
      r = ar("override-first-message"),
      o = ar("override-voice-id"),
      a = ar("override-text-only"),
      i = vn(() => ({
        agent: {
          prompt: { prompt: n.value },
          firstMessage: r.value,
          language: t.value.languageCode
        },
        tts: { voiceId: o.value },
        conversation: { textOnly: Yn(a.value) ?? void 0 }
      })),
      l = ar("dynamic-variables"),
      s = vn(() => {
        if (l.value)
          try {
            return JSON.parse(l.value);
          } catch (e) {
            console.error(
              `[ConversationalAI] Cannot parse dynamic-variables: ${null == e ? void 0 : e.message}`
            );
          }
      }),
      { webSocketUrl: c } = sr(),
      u = ar("agent-id"),
      d = ar("signed-url"),
      f = Tr(),
      p = vn(() => {
        const e = {
          dynamicVariables: s.value,
          overrides: i.value,
          connectionDelay: { default: 300 },
          textOnly: f.value
        };
        return u.value
          ? { agentId: u.value, origin: c.value, ...e }
          : d.value
            ? { signedUrl: d.value, ...e }
            : (console.error(
                "[ConversationalAI] Either agent-id or signed-url is required"
              ),
              null);
      });
    return p.value ? ee(gr.Provider, { value: p, children: e }) : null;
  }
  const wr = j(null);
  function yr({ children: e }) {
    const t = Nr(),
      n = be(() => {
        const e = t.peek().terms_key,
          n = !!e && !!localStorage.getItem(e),
          r = qt(!1),
          o = qt(n),
          a = Jt(() => !t.value.terms_html || o.value);
        let i = [];
        return {
          termsShown: r,
          termsAccepted: a,
          dismissTerms: () => {
            (r.value = !1), i.forEach((e) => e.reject()), (i = []);
          },
          acceptTerms: () => {
            (o.value = !0), (r.value = !1);
            const e = t.peek().terms_key;
            e && localStorage.setItem(e, "true"),
              i.forEach((e) => e.resolve()),
              (i = []);
          },
          requestTerms: async () => {
            a.peek() ||
              ((r.value = !0),
              await new Promise((e, t) => {
                i.push({ resolve: e, reject: t });
              }));
          }
        };
      }, []);
    return ee(wr.Provider, { value: n, children: e });
  }
  function br() {
    return nr(wr);
  }
  const xr = j(null);
  function Cr({ children: e }) {
    const t = (function () {
      const e = we(null),
        t = we(null),
        n = Nr(),
        r = Pr(),
        o = br(),
        a = nr(gr),
        { isMuted: i } = mr();
      return (
        xn(() => {
          var t;
          const n = i.value;
          null == (t = null == e ? void 0 : e.current) || t.setMicMuted(n);
        }),
        ge(
          () => () => {
            var t;
            null == (t = e.current) || t.endSession();
          },
          []
        ),
        be(() => {
          const l = qt("disconnected"),
            s = Jt(() => "disconnected" === l.value),
            c = qt("listening"),
            u = Jt(() => "speaking" === c.value),
            d = qt(null),
            f = qt(null),
            p = qt(!1),
            h = qt([]),
            v = qt(0),
            m = qt(null);
          return {
            status: l,
            isSpeaking: u,
            mode: c,
            isDisconnected: s,
            lastId: f,
            error: d,
            canSendFeedback: p,
            conversationIndex: v,
            conversationTextOnly: m,
            transcript: h,
            startSession: async (s, u) => {
              var g, _;
              if (
                (await o.requestTerms(), null != (g = e.current) && g.isOpen())
              )
                return e.current.getId();
              if (t.current) return (await t.current).getId();
              let w = structuredClone(a.peek());
              u &&
                n.value.supports_text_only &&
                ((w.textOnly = !0),
                n.value.text_only ||
                  (w.overrides ?? (w.overrides = {}),
                  (_ = w.overrides).conversation ?? (_.conversation = {}),
                  (w.overrides.conversation.textOnly = !0)));
              try {
                w = (function (e, t) {
                  try {
                    const n = new CustomEvent("fusion-media-yyc:call", {
                      bubbles: !0,
                      composed: !0,
                      detail: { config: t }
                    });
                    return e.dispatchEvent(n), n.detail.config;
                  } catch (e) {
                    return (
                      console.error(
                        "[ConversationalAI] Could not trigger call event:",
                        e
                      ),
                      t
                    );
                  }
                })(s, w);
              } catch (e) {
                console.error(
                  "[ConversationalAI] Error triggering call event:",
                  e
                );
              }
              (m.value = w.textOnly ?? !1),
                (h.value = u
                  ? [
                      {
                        type: "message",
                        role: "user",
                        message: u,
                        isText: !0,
                        conversationIndex: v.peek()
                      }
                    ]
                  : []);
              try {
                if (
                  ((t.current = Wn.startSession({
                    ...w,
                    onModeChange: (e) => {
                      c.value = e.mode;
                    },
                    onStatusChange: (e) => {
                      l.value = e.status;
                    },
                    onCanSendFeedbackChange: (e) => {
                      p.value = e.canSendFeedback;
                    },
                    onMessage: ({ source: e, message: t }) => {
                      (!0 === m.peek() && "ai" === e && t === r.peek()) ||
                        (h.value = [
                          ...h.value,
                          {
                            type: "message",
                            role: e,
                            message: t,
                            isText: !1,
                            conversationIndex: v.peek()
                          }
                        ]);
                    },
                    onDisconnect: (e) => {
                      (m.value = null),
                        (h.value = [
                          ...h.value,
                          "error" === e.reason
                            ? {
                                type: "error",
                                message: e.message,
                                conversationIndex: v.peek()
                              }
                            : {
                                type: "disconnection",
                                role: "user" === e.reason ? "user" : "ai",
                                conversationIndex: v.peek()
                              }
                        ]),
                        v.value++,
                        "error" === e.reason &&
                          ((d.value = e.message),
                          console.error(
                            "[ConversationalAI] Disconnected due to an error:",
                            e.message
                          ));
                    }
                  })),
                  (e.current = await t.current),
                  e.current.setMicMuted(i.peek()),
                  u)
                ) {
                  const t = e.current;
                  setTimeout(() => t.sendUserMessage(u), 100);
                }
                const n = e.current.getId();
                return (f.value = n), (d.value = null), n;
              } catch (e) {
                let t = "Could not start a conversation.";
                e instanceof CloseEvent
                  ? (t = e.reason || t)
                  : e instanceof Error && (t = e.message || t),
                  (d.value = t),
                  (h.value = [
                    ...h.value,
                    { type: "error", message: t, conversationIndex: v.peek() }
                  ]);
              } finally {
                t.current = null;
              }
            },
            endSession: async () => {
              const t = e.current;
              (e.current = null), await (null == t ? void 0 : t.endSession());
            },
            getInputVolume: () => {
              var t;
              return (
                (null == (t = e.current) ? void 0 : t.getInputVolume()) ?? 0
              );
            },
            getOutputVolume: () => {
              var t;
              return (
                (null == (t = e.current) ? void 0 : t.getOutputVolume()) ?? 0
              );
            },
            sendFeedback: (t) => {
              var n;
              null == (n = e.current) || n.sendFeedback(t);
            },
            sendUserMessage: (t) => {
              var n;
              null == (n = e.current) || n.sendUserMessage(t),
                (h.value = [
                  ...h.value,
                  {
                    type: "message",
                    role: "user",
                    message: t,
                    isText: !0,
                    conversationIndex: v.peek()
                  }
                ]);
            },
            sendUserActivity: () => {
              var t;
              null == (t = e.current) || t.sendUserActivity();
            }
          };
        }, [a, i])
      );
    })();
    return (
      xn(() => {
        if (!0 === t.conversationTextOnly.value) {
          t.transcript.value;
          const e = setTimeout(() => {
            t.endSession();
          }, 6e5);
          return () => {
            clearTimeout(e);
          };
        }
      }),
      ee(xr.Provider, { value: t, children: e })
    );
  }
  function kr() {
    return nr(xr);
  }
  const Sr = j(null);
  function Er({ children: e }) {
    const { serverUrl: t } = sr(),
      n = ar("agent-id"),
      r = ar("override-config"),
      o = hn(null);
    xn(() => {
      if (r.value)
        try {
          const e = JSON.parse(r.value);
          if (e) return void (o.value = e);
        } catch (e) {
          console.error(
            `[ConversationalAI] Cannot parse override-config: ${null == e ? void 0 : e.message}`
          );
        }
      if (!n.value) return void (o.value = null);
      const e = new AbortController();
      return (
        (async function (e, t, n) {
          const r = await (
            await fetch(`${t}/v1/convai/agents/${e}/widget`, { signal: n })
          ).json();
          if (!r.widget_config)
            throw new Error("Response does not contain widget_config");
          return r.widget_config;
        })(n.value, t.value, e.signal)
          .then((t) => {
            e.signal.aborted || (o.value = t);
          })
          .catch((t) => {
            console.error(
              `[ConversationalAI] Cannot fetch config for agent ${n.value}: ${null == t ? void 0 : t.message}`
            ),
              e.signal.aborted || (o.value = null);
          }),
        () => {
          e.abort();
        }
      );
    });
    const a = ar("variant"),
      i = ar("placement"),
      l = ar("terms-key"),
      s = ar("mic-muting"),
      c = ar("transcript"),
      u = ar("text-input"),
      d = ar("override-text-only"),
      f = vn(() => {
        if (!o.value) return null;
        const e = a.value ?? o.value.variant,
          t = i.value ?? o.value.placement,
          n = l.value ?? o.value.terms_key,
          r = Yn(d.value) ?? o.value.text_only ?? !1,
          f = Yn(s.value) ?? o.value.mic_muting_enabled,
          p = Yn(c.value) ?? o.value.transcript_enabled,
          h = Yn(u.value) ?? o.value.text_input_enabled;
        return {
          ...o.value,
          variant: Kn(e),
          placement: Gn(t),
          terms_key: n,
          mic_muting_enabled: !r && f,
          transcript_enabled: r || p,
          text_input_enabled: r || h
        };
      });
    return f.value ? ee(Sr.Provider, { value: f, children: e }) : null;
  }
  function Nr() {
    return nr(Sr);
  }
  function Tr() {
    const e = ar("override-text-only"),
      t = Nr();
    return vn(() => Yn(e.value) ?? t.value.text_only ?? !1);
  }
  function Ar() {
    const e = Tr(),
      { conversationTextOnly: t } = kr();
    return vn(() => t.value ?? e.value);
  }
  function Pr() {
    const e = ar("override-first-message"),
      t = Nr(),
      { language: n } = pr();
    return vn(() => {
      var r, o;
      return (
        e.value ??
        (null ==
        (o =
          null == (r = t.value.language_presets)
            ? void 0
            : r[n.value.languageCode])
          ? void 0
          : o.first_message) ??
        t.value.first_message ??
        null
      );
    });
  }
  const Ir = He(function () {
    const e = Nr(),
      t = vn(() => {
        const t = e.value.styles;
        return `:host, :root {\n${tr
          .map(
            (e) =>
              `${(function (e) {
                return `--el-${e.replace(/_/g, "-")}`;
              })(e)}: ${(function (e) {
                return "number" == typeof e ? `${e}px` : e;
              })((null == t ? void 0 : t[e]) ?? er[e])};`
          )
          .join("\n")}\n}`;
      });
    return ee("style", {
      children: [
        t,
        '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400,500&display=swap";*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-auto{pointer-events:auto}.\\!visible{visibility:visible!important}.visible{visibility:visible}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.-bottom-3{bottom:-12px}.bottom-0{bottom:0}.bottom-20{bottom:80px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:16px}.right-0{right:0}.top-0{top:0}.top-1\\/2{top:50%}.top-20{top:80px}.top-4{top:16px}.z-1{z-index:1}.z-10{z-index:10}.m-1{margin:4px}.-mx-0\\.5{margin-left:-2px;margin-right:-2px}.mx-1{margin-left:4px;margin-right:4px}.-mr-1\\.5{margin-right:-6px}.ml-auto{margin-left:auto}.mt-2{margin-top:8px}.block{display:block}.inline{display:inline}.\\!flex{display:flex!important}.flex{display:flex}.inline-flex{display:inline-flex}.contents{display:contents}.hidden{display:none}.h-11{height:44px}.h-16{height:64px}.h-4{height:16px}.h-48{height:192px}.h-5{height:20px}.h-6{height:24px}.h-9{height:36px}.h-\\[calc\\(100\\%-80px\\)\\]{height:calc(100% - 80px)}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[550px\\]{max-height:550px}.max-h-\\[8lh\\]{max-height:8lh}.max-h-\\[min\\(384px\\,var\\(--radix-select-content-available-height\\)\\)\\]{max-height:min(384px,var(--radix-select-content-available-height))}.min-h-min{min-height:-moz-min-content;min-height:min-content}.w-16{width:64px}.w-4{width:16px}.w-48{width:192px}.w-5{width:20px}.w-6{width:24px}.w-64{width:256px}.w-9{width:36px}.w-full{width:100%}.w-screen{width:100vw}.\\!min-w-60{min-width:240px!important}.min-w-0{min-width:0px}.min-w-60{min-width:240px}.min-w-9{min-width:36px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.min-w-max{min-width:-moz-max-content;min-width:max-content}.min-w-min{min-width:-moz-min-content;min-width:min-content}.max-w-64{max-width:256px}.max-w-\\[400px\\]{max-width:400px}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.origin-bottom{transform-origin:bottom}.origin-bottom-left{transform-origin:bottom left}.origin-bottom-right{transform-origin:bottom right}.origin-top{transform-origin:top}.origin-top-left{transform-origin:top left}.origin-top-right{transform-origin:top right}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[calc\\(var\\(--el-overlay-padding\\)\\)\\]{--tw-translate-y: calc(calc(var(--el-overlay-padding)) * -1);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[calc\\(var\\(--el-overlay-padding\\)\\)\\]{--tw-translate-y: calc(var(--el-overlay-padding));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-150{--tw-scale-x: 1.5;--tw-scale-y: 1.5;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x: .75;--tw-scale-y: .75;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-90{--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-\\[0\\.333\\]{--tw-scale-x: .333;--tw-scale-y: .333;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-none{resize:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-1{gap:4px}.gap-2{gap:8px}.gap-2\\.5{gap:10px}.gap-3{gap:12px}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.break-all{word-break:break-all}.rounded-\\[calc\\(var\\(--el-button-radius\\)\\+4px\\)\\]{border-radius:calc(var(--el-button-radius) + 4px)}.rounded-bubble{border-radius:var(--el-bubble-radius)}.rounded-button{border-radius:var(--el-button-radius)}.rounded-compact-sheet{border-radius:var(--el-compact-sheet-radius)}.rounded-dropdown-sheet{border-radius:var(--el-dropdown-sheet-radius)}.rounded-full{border-radius:9999px}.rounded-input{border-radius:var(--el-input-radius)}.rounded-sheet{border-radius:var(--el-sheet-radius)}.rounded-bl-\\[calc\\(var\\(--el-bubble-radius\\)\\/3\\)\\]{border-bottom-left-radius:calc(var(--el-bubble-radius) / 3)}.border{border-width:1px}.border-accent{border-color:var(--el-accent)}.border-base-border{border-color:var(--el-base-border)}.bg-accent{background-color:var(--el-accent)}.bg-base{background-color:var(--el-base)}.bg-base-active{background-color:var(--el-base-active)}.bg-base-border{background-color:var(--el-base-border)}.bg-base-hover{background-color:var(--el-base-hover)}.bg-cover{background-size:cover}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:4px}.p-1\\.5{padding:6px}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-1{padding-left:4px;padding-right:4px}.px-1\\.5{padding-left:6px;padding-right:6px}.px-2{padding-left:8px;padding-right:8px}.px-2\\.5{padding-left:10px;padding-right:10px}.px-3{padding-left:12px;padding-right:12px}.px-4{padding-left:16px;padding-right:16px}.px-8{padding-left:32px;padding-right:32px}.py-1\\.5{padding-top:6px;padding-bottom:6px}.py-2\\.5{padding-top:10px;padding-bottom:10px}.py-\\[calc\\(theme\\(spacing\\.2\\)-1px\\)\\]{padding-top:7px;padding-bottom:7px}.pb-1{padding-bottom:4px}.pb-3{padding-bottom:12px}.pl-16{padding-left:64px}.pr-16{padding-right:64px}.pr-3{padding-right:12px}.pt-1{padding-top:4px}.text-center{text-align:center}.text-\\[10px\\]{font-size:10px}.text-lg{font-size:18px;line-height:26px}.text-md{font-size:16px;line-height:24px}.text-sm{font-size:14px;line-height:20px}.text-xs{font-size:12px;line-height:16px}.font-medium{font-weight:500}.text-accent-primary{color:var(--el-accent-primary)}.text-base-error{color:var(--el-base-error)}.text-base-primary{color:var(--el-base-primary)}.text-base-subtle{color:var(--el-base-subtle)}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-30{opacity:.3}.shadow-lg{--tw-shadow: 0 2px 40px 1px rgba(0, 0, 0, .12);--tw-shadow-colored: 0 2px 40px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 2px 24px 1px rgba(0, 0, 0, .16);--tw-shadow-colored: 0 2px 24px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[border-radius\\]{transition-property:border-radius;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[margin\\]{transition-property:margin;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[opacity\\,transform\\]{transition-property:opacity,transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[opacity\\,width\\,height\\,transform\\,flex-grow\\]{transition-property:opacity,width,height,transform,flex-grow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[transform\\,left\\,top\\]{transition-property:transform,left,top;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[transform\\,opacity\\]{transition-property:transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.overlay{position:absolute;inset:var(--el-overlay-padding);right:calc(var(--el-overlay-padding) + var(--removed-body-scroll-bar-size, 0px))}.focus-ring{--tw-ring-color: var(--el-accent);--tw-ring-offset-width: 2px;--tw-ring-offset-color: var(--el-base)}.focus-ring:focus-visible{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.animate-text{background-image:linear-gradient(75deg,var(--el-base-primary),var(--el-base-subtle),var(--el-base-primary),var(--el-base-subtle));background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:TextAnimation 2s linear infinite}@keyframes TextAnimation{0%{background-position:0 0}to{background-position:100% 0}}.\\!terms h6,.terms h6{font-size:12px;line-height:16px;font-weight:500;color:var(--el-base-primary)}.\\!terms h5,.terms h5{font-size:14px;line-height:20px;font-weight:500;color:var(--el-base-primary)}.\\!terms h4,.terms h4{font-size:16px;line-height:24px;font-weight:500;color:var(--el-base-primary)}.\\!terms h3,.terms h3{font-size:18px;line-height:26px;font-weight:500;color:var(--el-base-primary)}.\\!terms h2,.terms h2{font-size:20px;line-height:28px;font-weight:500;color:var(--el-base-primary)}.\\!terms h2,.terms h2{font-size:24px;line-height:30px;font-weight:500;color:var(--el-base-primary)}.\\[field-sizing\\:content\\]{field-sizing:content}.\\[line-height\\:var\\(--el-overlay-padding\\)\\]{line-height:var(--el-overlay-padding)}.\\[overflow-wrap\\:break-word\\]{overflow-wrap:break-word}.dev-host,:host{pointer-events:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;font-size:16px;line-height:24px;color:var(--el-base-primary);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;scrollbar-color:#e5e7eb transparent}.placeholder\\:text-base-subtle::-moz-placeholder{color:var(--el-base-subtle)}.placeholder\\:text-base-subtle::placeholder{color:var(--el-base-subtle)}.hover\\:border-accent-hover:hover{border-color:var(--el-accent-hover)}.hover\\:bg-accent-hover:hover{background-color:var(--el-accent-hover)}.hover\\:bg-base-hover:hover{background-color:var(--el-base-hover)}.hover\\:opacity-50:hover{opacity:.5}.focus-visible\\:underline-offset-2:focus-visible{text-underline-offset:2px}.focus-visible\\:opacity-100:focus-visible{opacity:1}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.active\\:border-accent-active:active{border-color:var(--el-accent-active)}.active\\:bg-accent-active:active{background-color:var(--el-accent-active)}.active\\:bg-base-active:active{background-color:var(--el-base-active)}.data-hidden\\:-translate-y-4[data-shown=false]{--tw-translate-y: -16px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-hidden\\:translate-y-2[data-shown=false]{--tw-translate-y: 8px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-hidden\\:scale-100[data-shown=false]{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-hidden\\:scale-75[data-shown=false]{--tw-scale-x: .75;--tw-scale-y: .75;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-hidden\\:scale-90[data-shown=false]{--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-hidden\\:opacity-0[data-shown=false]{opacity:0}.data-\\[highlighted\\]\\:bg-base-active[data-highlighted]{background-color:var(--el-base-active)}'
      ]
    });
  });
  const Dr = j(null);
  function Mr({ children: e }) {
    const t = Nr(),
      { language: n } = pr(),
      r = ar("text-contents"),
      o = vn(() => {
        try {
          if (r.value) {
            const e = JSON.parse(r.value);
            if ("object" == typeof e) return e;
          }
        } catch (e) {
          console.error("[ConversationalAI] Cannot parse text-contents:", e);
        }
        return {};
      }),
      a = be(
        () =>
          Object.fromEntries(
            Qn.map((e) => [
              e,
              Jt(() => {
                var r, a, i, l;
                return (
                  o.value[e] ??
                  (null ==
                  (i =
                    null ==
                    (a =
                      null == (r = t.value.language_presets)
                        ? void 0
                        : r[n.value.languageCode])
                      ? void 0
                      : a.text_contents)
                    ? void 0
                    : i[e]) ??
                  (null == (l = t.value.text_contents) ? void 0 : l[e]) ??
                  Jn[e]
                );
              })
            ])
          ),
        []
      );
    return ee(Dr.Provider, { value: a, children: e });
  }
  function Or() {
    return nr(Dr);
  }
  const Lr = j(null);
  function Rr({ children: e }) {
    const t = Nr(),
      n = ar("avatar-image-url"),
      r = ar("avatar-orb-color-1"),
      o = ar("avatar-orb-color-2"),
      a = hn(""),
      i = vn(() =>
        n.value
          ? { type: "image", url: n.value }
          : r.value && o.value
            ? { type: "orb", color_1: r.value, color_2: o.value }
            : t.value.avatar
      ),
      l = vn(() => {
        switch (i.value.type) {
          case "url":
            return i.value.custom_url;
          case "orb":
            return a.value;
          case "image":
            return i.value.url;
        }
      }),
      s = be(() => ({ config: i, previewUrl: l, canvasUrl: a }), []);
    return ee(Lr.Provider, { value: s, children: e });
  }
  function Fr() {
    return nr(Lr);
  }
  const zr = j(null);
  function Ur({ children: e, ...t }) {
    const [n, r] = ve(null);
    return ee("div", {
      ref: r,
      ...t,
      children: n && ee(zr.Provider, { value: n, children: e })
    });
  }
  function Br(e) {
    return e && "object" == typeof e && "peek" in e;
  }
  function Wr(e) {
    return Br(e) ? e.value : e;
  }
  function Hr(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
  }
  function $r(...e) {
    return (t) => {
      let n = !1;
      const r = e.map((e) => {
        const r = Hr(e, t);
        return !n && "function" == typeof r && (n = !0), r;
      });
      if (n)
        return () => {
          for (let t = 0; t < r.length; t++) {
            const n = r[t];
            "function" == typeof n ? n() : Hr(e[t], null);
          }
        };
    };
  }
  function jr(...e) {
    return xe($r(...e), e);
  }
  function Vr(e) {
    const t = (function (e) {
        const t = Ve((e, t) => {
          const { children: n, ...r } = e;
          if (St(n)) {
            const e = (function (e) {
                var t, n;
                let r =
                    null ==
                    (t = Object.getOwnPropertyDescriptor(e.props, "ref"))
                      ? void 0
                      : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning;
                return o
                  ? e.ref
                  : ((r =
                      null == (n = Object.getOwnPropertyDescriptor(e, "ref"))
                        ? void 0
                        : n.get),
                    (o = r && "isReactWarning" in r && r.isReactWarning),
                    o ? e.props.ref : e.props.ref || e.ref);
              })(n),
              o = (function (e, t) {
                const n = { ...t };
                for (const r in t) {
                  const o = e[r],
                    a = t[r];
                  /^on[A-Z]/.test(r)
                    ? o && a
                      ? (n[r] = (...e) => {
                          a(...e), o(...e);
                        })
                      : o && (n[r] = o)
                    : "style" === r
                      ? (n[r] = { ...o, ...a })
                      : "className" === r &&
                        (n[r] = [o, a].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props);
            return n.type !== x && (o.ref = t ? $r(t, e) : e), Tt(n, o);
          }
          return qe.count(n) > 1 ? qe.only(null) : null;
        });
        return (t.displayName = `${e}.SlotClone`), t;
      })(e),
      n = Ve((e, n) => {
        const { children: r, ...o } = e,
          a = qe.toArray(r),
          i = a.find(Xr);
        if (i) {
          const e = i.props.children,
            r = a.map((t) =>
              t === i
                ? qe.count(e) > 1
                  ? qe.only(null)
                  : St(e)
                    ? e.props.children
                    : null
                : t
            );
          return ee(t, {
            ...o,
            ref: n,
            children: St(e) ? Tt(e, void 0, r) : null
          });
        }
        return ee(t, { ...o, ref: n, children: r });
      });
    return (n.displayName = `${e}.Slot`), n;
  }
  var Yr = Vr("Slot");
  var qr = Symbol("radix.slottable");
  function Xr(e) {
    return (
      St(e) &&
      "function" == typeof e.type &&
      "__radixId" in e.type &&
      e.type.__radixId === qr
    );
  }
  const Kr = window.matchMedia("(prefers-reduced-motion: reduce)");
  function Zr() {
    const e = hn(Kr.matches);
    return (
      ge(() => {
        const t = (t) => {
          e.value = t.matches;
        };
        return (
          Kr.addEventListener("change", t),
          () => Kr.removeEventListener("change", t)
        );
      }, []),
      e
    );
  }
  function Gr({ onStart: e, onEnd: t }) {
    const n = we();
    n.current ?? (n.current = new Set());
    const r = we(e);
    r.current = e;
    const o = we(t);
    o.current = t;
    const a = hn(!1),
      i = xe((e) => {
        var t, o;
        e.target === e.currentTarget &&
          (null == (t = n.current) || t.add(e.propertyName),
          a.peek() || ((a.value = !0), null == (o = r.current) || o.call(r)));
      }, []),
      l = xe((e) => {
        var t, r, i;
        e.target === e.currentTarget &&
          (null == (t = n.current) || t.delete(e.propertyName),
          (null != (r = n.current) && r.size) ||
            ((a.value = !1), null == (i = o.current) || i.call(o)));
      }, []);
    return {
      transitioning: a,
      handlers: { onTransitionStart: i, onTransitionEnd: l }
    };
  }
  function Jr(e) {
    return ee(Zr().value ? Qr : eo, { ...e });
  }
  function Qr({ active: e, ...t }) {
    return Wr(e) ? ee(Yr, { "data-shown": !0, ...t }) : null;
  }
  function eo({ active: e, initial: t = e, ...n }) {
    const r = (function (e) {
        const t = Br(e),
          n = hn(t ? e.peek() : e);
        return t ? e : ((n.value = e), n);
      })(e),
      o = hn(
        (function (e) {
          return Br(e) ? e.peek() : e;
        })(t)
      );
    xn(() => {
      r.value && (o.value = r.value);
    });
    const { handlers: a } = Gr({
      onEnd: () => {
        o.value = r.value;
      }
    });
    return r.value || o.value
      ? ee(Yr, { "data-shown": r.value && o.value, ...a, ...n })
      : null;
  }
  const to = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
    no = class e {
      constructor(t) {
        Vn(this, "gl"),
          Vn(this, "program"),
          Vn(this, "startTime"),
          Vn(this, "targetSpeed", 0),
          Vn(this, "speed", 0.5),
          Vn(this, "rafId", null),
          Vn(this, "resizeObserver"),
          Vn(this, "colorA", [0, 0, 0]),
          Vn(this, "colorB", [0, 0, 0]),
          Vn(
            this,
            "offsets",
            new Float32Array(7).map(() => Math.random() * Math.PI * 2)
          ),
          Vn(this, "copyNoiseImage", () => {
            this.gl &&
              (this.gl.texImage2D(
                this.gl.TEXTURE_2D,
                0,
                this.gl.RGBA,
                this.gl.RGBA,
                this.gl.UNSIGNED_BYTE,
                e.noiseImage
              ),
              this.gl.generateMipmap(this.gl.TEXTURE_2D));
          }),
          Vn(this, "toDataURL", () => this.gl.canvas.toDataURL("image/png")),
          Vn(this, "render", () => {
            if (!this.gl) return void (this.rafId = null);
            const e = (performance.now() - this.startTime) / 1e3;
            this.gl.uniform1f(
              this.gl.getUniformLocation(this.program, "uTime"),
              e
            ),
              this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4),
              (this.rafId = requestAnimationFrame(this.render));
          });
        const n = t.getContext("webgl2", { depth: !1, stencil: !1 });
        (this.gl = n),
          (this.program = this.setupProgram(
            "#version 300 es\nprecision highp float;\n\nuniform float uTime;\nuniform float uOffsets[7];\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nuniform sampler2D uPerlinTexture;\n\nin vec2 vUv;\n\nout vec4 outColor;\n\nconst float PI = 3.14159265358979323846;\n\n// Draw a single oval with soft edges and calculate its gradient color\nbool drawOval(vec2 polarUv, vec2 polarCenter, float a, float b, bool reverseGradient, float softness, out vec4 color) {\n    vec2 p = polarUv - polarCenter;\n    float oval = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);\n    \n    float edge = smoothstep(1.0, 1.0 - softness, oval);\n    \n    if (edge > 0.0) {\n        float gradient = reverseGradient ? (1.0 - (p.x / a + 1.0) / 2.0) : ((p.x / a + 1.0) / 2.0);\n        color = vec4(vec3(gradient), 0.8 * edge);\n        return true;\n    }\n    return false;\n}\n\n// Map grayscale value to a 4-color ramp (color1, color2, color3, color4)\nvec3 colorRamp(float grayscale, vec3 color1, vec3 color2, vec3 color3, vec3 color4) {\n    if (grayscale < 0.33) {\n        return mix(color1, color2, grayscale * 3.0);\n    } else if (grayscale < 0.66) {\n        return mix(color2, color3, (grayscale - 0.33) * 3.0);\n    } else {\n        return mix(color3, color4, (grayscale - 0.66) * 3.0);\n    }\n}\n\nvec2 hash2(vec2 p) {\n    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);\n}\n\n// 2D noise for the ring\nfloat noise2D(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    \n    vec2 u = f * f * (3.0 - 2.0 * f);\n    float n = mix(\n        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),\n            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),\n        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),\n            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),\n        u.y\n    );\n\n    return 0.5 + 0.5 * n;\n}\n\nfloat sharpRing(vec2 uv, float theta, float time) {\n    float ringStart = 1.0;\n    float ringWidth = 0.5;\n    float noiseScale = 5.0;\n    \n    vec2 noiseCoord = vec2(theta / (2.0 * PI), time * 0.1);\n    noiseCoord *= noiseScale;\n    \n    float noise = noise2D(noiseCoord);\n    noise = (noise - 0.5) * 4.0;\n    \n    return ringStart + noise * ringWidth * 1.5;\n}\n\nfloat smoothRing(vec2 uv, float time) {\n    float angle = atan(uv.y, uv.x);\n    if (angle < 0.0) angle += 2.0 * PI;\n    \n    vec2 noiseCoord = vec2(angle / (2.0 * PI), time * 0.1);\n    noiseCoord *= 6.0;\n    \n    float noise = noise2D(noiseCoord);\n    noise = (noise - 0.5) * 8.0;\n    \n    float ringStart = 0.9;\n    float ringWidth = 0.3;\n    \n    return ringStart + noise * ringWidth;\n}\n\nvoid main() {\n    // Normalize vUv to be centered around (0.0, 0.0)\n    vec2 uv = vUv * 2.0 - 1.0;\n\n    // Convert uv to polar coordinates\n    float radius = length(uv);\n    float theta = atan(uv.y, uv.x);\n    if (theta < 0.0) theta += 2.0 * PI; // Normalize theta to [0, 2*PI]\n\n    // Initialize the base color to white\n    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);\n\n    // Original parameters for the ovals in polar coordinates\n    float originalCenters[7] = float[7](0.0, 0.5 * PI, 1.0 * PI, 1.5 * PI, 2.0 * PI, 2.5 * PI, 3.0 * PI);\n\n    // Parameters for the animated centers in polar coordinates\n    float centers[7];\n    for (int i = 0; i < 7; i++) {\n        centers[i] = originalCenters[i] + 0.5 * sin(uTime / 20.0 + uOffsets[i]);\n    }\n\n    float a, b;\n    vec4 ovalColor;\n\n    // Check if the pixel is inside any of the ovals\n    for (int i = 0; i < 7; i++) {\n        float noise = texture(uPerlinTexture, vec2(mod(centers[i] + uTime * 0.05, 1.0), 0.5)).r;\n        a = noise * 1.5; // Increased variance: goes from 0.0 to 1.0\n        b = noise * 4.5; // Tall semi-minor axis\n        bool reverseGradient = (i % 2 == 1); // Reverse gradient for every second oval\n\n        // Calculate the distance in polar coordinates\n        float distTheta = abs(theta - centers[i]);\n        if (distTheta > PI) distTheta = 2.0 * PI - distTheta; // Shortest distance on circle\n        float distRadius = radius;\n\n        float softness = 0.4; // Controls edge softness (e.g. how much blur is applied to the ovals)\n\n        // Check if the pixel is inside the oval in polar coordinates\n        if (drawOval(vec2(distTheta, distRadius), vec2(0.0, 0.0), a, b, reverseGradient, softness, ovalColor)) {\n            // Blend the oval color with the existing color\n            color.rgb = mix(color.rgb, ovalColor.rgb, ovalColor.a);\n            color.a = max(color.a, ovalColor.a); // Max alpha\n        }\n    }\n    \n    // Calculate both noisy rings\n    float ringRadius1 = sharpRing(uv, theta, uTime);\n    float ringRadius2 = smoothRing(uv, uTime);\n    \n    // Blend both rings\n    float ringAlpha1 = (radius >= ringRadius1) ? 0.3 : 0.0;\n    float ringAlpha2 = smoothstep(ringRadius2 - 0.05, ringRadius2 + 0.05, radius) * 0.25;\n    \n    float totalRingAlpha = max(ringAlpha1, ringAlpha2);\n    \n    // Apply screen blend mode for combined rings\n    vec3 ringColor = vec3(1.0); // White ring color\n    color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - ringColor * totalRingAlpha);\n\n    // Define colours to ramp against greyscale (could increase the amount of colours in the ramp)\n    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black\n    vec3 color2 = uColor1; // Darker Color\n    vec3 color3 = uColor2; // Lighter Color\n    vec3 color4 = vec3(1.0, 1.0, 1.0); // White\n\n    // Convert grayscale color to the color ramp\n    float luminance = color.r; \n    color.rgb = colorRamp(luminance, color1, color2, color3, color4); // Apply the color ramp\n\n    outColor = color;\n}\n",
            "#version 300 es\nprecision highp float;\n\nin vec2 position;\n\nout vec2 vUv;\n\nvoid main() {\n  vUv = position * 0.5 + 0.5;\n  gl_Position = vec4(position, 0, 1);\n}\n"
          ));
        const r = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, r),
          n.texImage2D(
            n.TEXTURE_2D,
            0,
            n.RGBA,
            1,
            1,
            0,
            n.RGBA,
            n.UNSIGNED_BYTE,
            new Uint8Array([128, 128, 128, 255])
          ),
          e.noiseImage ||
            ((e.noiseImage = new Image()),
            (e.noiseImage.crossOrigin = "anonymous"),
            (e.noiseImage.src = "https://fusionmediayyc.onrender.com/img/perlin-noise.png")),
          e.noiseImage.complete
            ? this.copyNoiseImage()
            : e.noiseImage.addEventListener("load", this.copyNoiseImage);
        const o = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, o),
          n.bufferData(n.ARRAY_BUFFER, to, n.STATIC_DRAW),
          n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0),
          n.enableVertexAttribArray(0),
          this.updateColors("#2792DC", "#9CE6E6"),
          (this.resizeObserver = new ResizeObserver((e) => {
            const n = e[0],
              r = n.devicePixelContentBoxSize
                ? n.devicePixelContentBoxSize[0]
                : n.contentBoxSize[0];
            (t.width = Math.min(512, r.inlineSize)),
              (t.height = Math.min(512, r.blockSize)),
              this.updateViewport();
          }));
        const a = t.parentElement;
        if (a)
          try {
            this.resizeObserver.observe(a, { box: "device-pixel-content-box" });
          } catch {
            this.resizeObserver.observe(a);
          }
        (this.startTime = performance.now()),
          (this.rafId = requestAnimationFrame(this.render));
      }
      dispose() {
        var e;
        null !== this.rafId && cancelAnimationFrame(this.rafId),
          null == (e = this.resizeObserver) || e.disconnect(),
          (this.gl = null),
          (this.program = null);
      }
      updateViewport() {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      }
      updateColors(e, t) {
        this.gl &&
          ((this.colorA = this.updateColor("uColor1", e) ?? this.colorA),
          (this.colorB = this.updateColor("uColor2", t) ?? this.colorB));
      }
      updateVolume(e, t) {
        (this.targetSpeed = 0.2 + 1.8 * (1 - Math.pow(t - 1, 2))),
          this.targetSpeed > this.speed && (this.speed = this.targetSpeed),
          this.gl.uniform1f(
            this.gl.getUniformLocation(this.program, "uInputVolume"),
            e
          ),
          this.gl.uniform1f(
            this.gl.getUniformLocation(this.program, "uOutputVolume"),
            t
          );
      }
      updateColor(e, t) {
        try {
          const n = parseInt(t.slice(1, 3), 16) / 255,
            r = parseInt(t.slice(3, 5), 16) / 255,
            o = parseInt(t.slice(5, 7), 16) / 255,
            a = [Math.pow(n, 2.2), Math.pow(r, 2.2), Math.pow(o, 2.2)];
          return (
            this.gl.uniform3fv(this.gl.getUniformLocation(this.program, e), a),
            a
          );
        } catch (e) {
          console.error(`[ConversationalAI] Failed to parse ${t} as color:`, e);
        }
      }
      setupProgram(e, t) {
        const n = this.getShader(this.gl.FRAGMENT_SHADER, e),
          r = this.getShader(this.gl.VERTEX_SHADER, t);
        if (!n || !r) throw new Error("Failed to compile shaders");
        if (
          ((this.program = this.gl.createProgram()),
          this.gl.attachShader(this.program, n),
          this.gl.attachShader(this.program, r),
          this.gl.linkProgram(this.program),
          !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
        )
          throw new Error("Failed to link program");
        return (
          this.gl.useProgram(this.program),
          this.gl.uniform1i(
            this.gl.getUniformLocation(this.program, "uPerlinTexture"),
            0
          ),
          this.gl.uniform1fv(
            this.gl.getUniformLocation(this.program, "uOffsets"),
            this.offsets
          ),
          this.gl.uniform3fv(
            this.gl.getUniformLocation(this.program, "uColor1"),
            this.colorA
          ),
          this.gl.uniform3fv(
            this.gl.getUniformLocation(this.program, "uColor2"),
            this.colorB
          ),
          this.program
        );
      }
      getShader(e, t) {
        const n = this.gl.createShader(e);
        return (
          this.gl.shaderSource(n, t),
          this.gl.compileShader(n),
          this.gl.getShaderParameter(n, this.gl.COMPILE_STATUS)
            ? n
            : (this.gl.deleteShader(n), null)
        );
      }
    };
  Vn(no, "noiseImage");
  let ro = no;
  const oo = { sm: "w-9 h-9", lg: "w-48 h-48" };
  function ao({ size: e = "sm", className: t }) {
    const {
        getInputVolume: n,
        getOutputVolume: r,
        isSpeaking: o,
        isDisconnected: a
      } = kr(),
      { config: i } = Fr(),
      l = we(null),
      s = we(null);
    xn(() => {
      if (a.value)
        return (
          (l.current.style.transform = ""),
          void (s.current.style.transform = "")
        );
      let e;
      return (
        (function t() {
          const a = n(),
            i = r(),
            c = o.peek() ? 1 : 1 - 0.4 * a,
            u = o.peek() ? 1 + 0.4 * i : 1;
          (l.current.style.transform = `scale(${u})`),
            (s.current.style.transform = `scale(${c})`),
            (e = requestAnimationFrame(t));
        })(),
        () => {
          cancelAnimationFrame(e);
        }
      );
    });
    const c = vn(() => ({
      backgroundImage:
        "image" === i.value.type
          ? `url(${i.value.url})`
          : "url" === i.value.type
            ? `url(${i.value.custom_url})`
            : void 0
    }));
    return ee("div", {
      className: $n("relative shrink-0", oo[e], t),
      children: [
        ee("div", {
          ref: l,
          className: "absolute inset-0 rounded-full bg-base-border"
        }),
        ee("div", {
          ref: s,
          style: c,
          className:
            "absolute inset-0 rounded-full overflow-hidden bg-base bg-cover",
          children:
            "orb" === i.value.type &&
            ee(io, { color1: i.value.color_1, color2: i.value.color_2 })
        })
      ]
    });
  }
  function io({ color1: e, color2: t }) {
    const { canvasUrl: n } = Fr(),
      [r, o] = ve(null);
    ge(() => {
      r && (r.updateColors(e, t), r.render(), (n.value = r.toDataURL()));
    }, [r, e, t]);
    return ee("canvas", {
      className: "w-full h-full",
      ref: xe(
        (e) => {
          if (e) {
            const t = new ro(e);
            return o(t), () => t.dispose();
          }
          o(null);
        },
        [o]
      )
    });
  }
  const lo = {
      phone: function (e) {
        return ee("svg", {
          height: "1em",
          width: "1em",
          viewBox: "0 0 18 18",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: ee("path", {
            d: "M3.7489 2.25C2.93286 2.25 2.21942 2.92142 2.27338 3.7963C2.6686 10.2041 7.79483 15.3303 14.2026 15.7255C15.0775 15.7795 15.7489 15.066 15.7489 14.25V11.958C15.7489 11.2956 15.3144 10.7116 14.6799 10.5213L12.6435 9.91035C12.1149 9.75179 11.542 9.89623 11.1518 10.2864L10.5901 10.8482C9.15291 10.0389 7.95998 8.84599 7.15074 7.40881L7.71246 6.84709C8.10266 6.45689 8.24711 5.88396 8.08854 5.35541L7.47761 3.31898C7.28727 2.6845 6.70329 2.25 6.04087 2.25H3.7489Z"
          })
        });
      },
      "phone-off": function (e) {
        return ee("svg", {
          height: "1em",
          width: "1em",
          viewBox: "0 0 19 18",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            ee("path", {
              d: "M16.0303 3.53033C16.3232 3.23744 16.3232 2.76256 16.0303 2.46967C15.7374 2.17678 15.2626 2.17678 14.9697 2.46967L8.6271 8.81224C8.25925 8.3778 7.93185 7.90804 7.65074 7.40881L8.21246 6.84709C8.60266 6.45689 8.74711 5.88396 8.58854 5.35541L7.97761 3.31898C7.78727 2.6845 7.20329 2.25 6.54087 2.25H4.2489C3.43286 2.25 2.71942 2.92142 2.77338 3.7963C2.95462 6.73468 4.13069 9.40357 5.96899 11.4703L2.96967 14.4697C2.67678 14.7626 2.67678 15.2374 2.96967 15.5303C3.26256 15.8232 3.73744 15.8232 4.03033 15.5303L16.0303 3.53033Z"
            }),
            ee("path", {
              d: "M14.7026 15.7255C12.2994 15.5773 10.0765 14.7636 8.21584 13.4665L10.9278 10.7545C10.9815 10.7863 11.0356 10.8175 11.0901 10.8482L11.6518 10.2864C12.042 9.89623 12.6149 9.75179 13.1435 9.91035L15.1799 10.5213C15.8144 10.7116 16.2489 11.2956 16.2489 11.958V14.25C16.2489 15.066 15.5775 15.7795 14.7026 15.7255Z"
            })
          ]
        });
      },
      chat: function (e) {
        return ee("svg", {
          height: "1em",
          width: "1em",
          viewBox: "0 0 19 18",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: ee("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M1.5 6.75C1.5 4.26472 3.51472 2.25 6 2.25H12C14.4853 2.25 16.5 4.26472 16.5 6.75V11.25C16.5 13.7353 14.4853 15.75 12 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V6.75ZM6 9.9375C5.48223 9.9375 5.0625 9.51777 5.0625 9C5.0625 8.48223 5.48223 8.0625 6 8.0625C6.51777 8.0625 6.9375 8.48223 6.9375 9C6.9375 9.51777 6.51777 9.9375 6 9.9375ZM9 9.9375C8.48223 9.9375 8.0625 9.51777 8.0625 9C8.0625 8.48223 8.48223 8.0625 9 8.0625C9.51777 8.0625 9.9375 8.48223 9.9375 9C9.9375 9.51777 9.51777 9.9375 9 9.9375ZM11.0625 9C11.0625 9.51777 11.4822 9.9375 12 9.9375C12.5178 9.9375 12.9375 9.51777 12.9375 9C12.9375 8.48223 12.5178 8.0625 12 8.0625C11.4822 8.0625 11.0625 8.48223 11.0625 9Z"
          })
        });
      },
      mic: function (e) {
        return ee("svg", {
          height: "1em",
          width: "1em",
          viewBox: "0 0 19 18",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            ee("path", {
              d: "M9.50008 1.5C7.42901 1.5 5.75008 3.17893 5.75008 5.25V8.25C5.75008 10.3211 7.42901 12 9.50008 12C11.5712 12 13.2501 10.3211 13.2501 8.25V5.25C13.2501 3.17893 11.5712 1.5 9.50008 1.5Z"
            }),
            ee("path", {
              d: "M4.88997 10.8417C4.66448 10.4943 4.20002 10.3954 3.85256 10.6209C3.50509 10.8463 3.40621 11.3108 3.63169 11.6583C4.47442 12.9569 6.08493 14.6838 8.75008 14.9616V15.75C8.75008 16.1642 9.08587 16.5 9.50008 16.5C9.9143 16.5 10.2501 16.1642 10.2501 15.75V14.9616C12.9152 14.6838 14.5257 12.9569 15.3685 11.6583C15.594 11.3108 15.4951 10.8463 15.1476 10.6209C14.8001 10.3954 14.3357 10.4943 14.1102 10.8417C13.3305 12.0432 11.9002 13.5 9.50008 13.5C7.1 13.5 5.66968 12.0432 4.88997 10.8417Z"
            })
          ]
        });
      },
      "mic-off": function (e) {
        return ee("svg", {
          height: "1em",
          width: "1em",
          viewBox: "0 0 19 18",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            ee("path", {
              d: "M13.25 8.25C13.25 8.64791 13.188 9.03135 13.0732 9.39119L6.57947 2.8975C7.26687 2.04521 8.31974 1.5 9.49995 1.5C11.571 1.5 13.25 3.17893 13.25 5.25V8.25Z"
            }),
            ee("path", {
              d: "M2.21967 1.71967C2.51256 1.42678 2.98744 1.42678 3.28033 1.71967L16.7803 15.2197C17.0732 15.5126 17.0732 15.9874 16.7803 16.2803C16.4874 16.5732 16.0126 16.5732 15.7197 16.2803L13.2828 13.8435C12.4719 14.4022 11.4678 14.8338 10.25 14.9614V15.75C10.25 16.1642 9.91422 16.5 9.50001 16.5C9.08579 16.5 8.75001 16.1642 8.75001 15.75V14.9616C6.08485 14.6838 4.47434 12.9569 3.63162 11.6583C3.40614 11.3108 3.50502 10.8463 3.85248 10.6209C4.19995 10.3954 4.66441 10.4943 4.88989 10.8417C5.6696 12.0432 7.09993 13.5 9.50001 13.5C10.5978 13.5 11.4845 13.1981 12.1992 12.7598L11.0875 11.6482C10.605 11.8739 10.0667 12 9.50001 12C7.42894 12 5.75001 10.3211 5.75001 8.25V6.31067L2.21967 2.78033C1.92678 2.48744 1.92678 2.01256 2.21967 1.71967Z"
            })
          ]
        });
      },
      check: function (e) {
        return ee("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: "1em",
          width: "1em",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          ...e,
          children: ee("path", { d: "M20 6 9 17l-5-5" })
        });
      },
      "chevron-down": function (e) {
        return ee("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: "1em",
          width: "1em",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          ...e,
          children: ee("path", { d: "m6 9 6 6 6-6" })
        });
      },
      "chevron-up": function (e) {
        return ee("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: "1em",
          width: "1em",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          ...e,
          children: ee("path", { d: "m18 15-6-6-6 6" })
        });
      }
    },
    so = { sm: "text-xs", md: "text-lg" };
  function co({ name: e, size: t = "md", className: n }) {
    const r = lo[e];
    return ee("slot", {
      name: `icon-${e}`,
      className: $n("flex", so[t], n),
      "aria-hidden": !0,
      children: ee(r, {})
    });
  }
  function uo(e) {
    return ee(Zr().value ? fo : po, { ...e });
  }
  function fo({ visible: e, className: t, grow: n, dep: r, ...o }) {
    return e ? ee("div", { className: $n(n && "grow", t), ...o }) : null;
  }
  function po({
    visible: e,
    children: t,
    className: n,
    grow: r,
    dep: o,
    ...a
  }) {
    const [i, l] = ve(e),
      [s, c] = ve(null),
      [u, d] = ve(null),
      f = we(t);
    e && (f.current = t);
    const p = xe((t) => {
      c(t), t && !e && ((t.style.width = "0px"), (t.style.height = "0px"));
    }, []);
    ge(() => {
      u &&
        ((u.style.transition = "none"),
        (u.style.opacity = "0"),
        u.offsetWidth,
        (u.style.transition = ""),
        (u.style.opacity = ""));
    }, [o]),
      be(() => {
        s &&
          ((s.style.width = `${s.offsetWidth}px`),
          (s.style.height = `${s.offsetHeight}px`));
      }, [s, e, o]),
      ge(() => {
        if (!s || !u) return;
        e && l(!0);
        const t = e ? u.offsetWidth : 0,
          n = e ? u.offsetHeight : 0;
        (s.style.width = e && s.offsetWidth === t ? "" : `${t}px`),
          (s.style.height = e && s.offsetHeight === n ? "" : `${n}px`);
      }, [s, u, e, o]);
    const { transitioning: h, handlers: v } = Gr({
      onEnd: () => {
        e ? ((s.style.width = ""), (s.style.height = "")) : l(!1);
      }
    });
    return ee("div", {
      ref: p,
      className: $n(
        "relative inline-flex shrink-0 justify-center items-center transition-[opacity,width,height,transform,flex-grow] duration-200 min-w-0",
        !e && "opacity-0 scale-75",
        e && r && "grow",
        e && i && !h.value && "z-1"
      ),
      ...v,
      children: ee("div", {
        ref: d,
        className: $n(
          "shrink-0 min-h-min min-w-min transition-opacity duration-200",
          r && "grow",
          n
        ),
        ...a,
        children: (e || i) && f.current
      })
    });
  }
  const ho = {
      primary:
        "text-accent-primary border border-accent bg-accent hover:border-accent-hover hover:bg-accent-hover active:border-accent-active active:bg-accent-active",
      secondary:
        "text-base-primary border border-base-border bg-base hover:bg-base-hover active:bg-base-active"
    },
    vo = Ve(function (
      {
        variant: e = "secondary",
        children: t,
        icon: n,
        className: r,
        iconClassName: o,
        truncate: a = !0,
        ...i
      },
      l
    ) {
      const s = !!n && !t;
      return ee("button", {
        ref: l,
        className: $n(
          "h-9 flex px-2.5 text-sm items-center transition-colors justify-center rounded-button duration-200 focus-ring overflow-hidden select-none",
          ho[e],
          s && "min-w-9",
          r
        ),
        type: "button",
        ...i,
        children: [
          n &&
            ee(co, {
              className: $n(
                "transition-[margin] duration-200",
                s && "-mx-0.5",
                o
              ),
              name: n
            }),
          ee(uo, {
            visible: !!t,
            dep: t,
            children: ee("span", {
              className: "block whitespace-nowrap max-w-64 truncate px-1.5",
              children: t
            })
          })
        ]
      });
    });
  function mo({ className: e, ...t }) {
    const { status: n, isSpeaking: r } = kr(),
      o = Ar(),
      a = Or(),
      i = vn(() =>
        "connected" !== n.value
          ? a.connecting_status.value
          : o.value
            ? a.chatting_status.value
            : r.value
              ? a.speaking_status.value
              : a.listening_status.value
      ),
      [l, s] = ve(i.peek());
    return (
      xn(() => {
        const e = i.value;
        if ("connected" !== n.value || !r.value) {
          const t = setTimeout(() => {
            s(e);
          }, 500);
          return () => clearTimeout(t);
        }
        s(e);
      }),
      ee("div", {
        className: $n(
          "py-1.5 px-3 bg-base-active overflow-hidden rounded-bubble text-sm",
          e
        ),
        ...t,
        children: ee(
          Jr,
          {
            initial: !1,
            active: !0,
            children: ee("div", {
              className:
                "animate-text whitespace-nowrap transition-[opacity,transform] ease-out duration-200 data-hidden:opacity-0 transform data-hidden:translate-y-2",
              children: l
            })
          },
          l
        )
      })
    );
  }
  function go(e, [t, n]) {
    return Math.min(n, Math.max(t, e));
  }
  function _o(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (r) {
      if ((null == e || e(r), !1 === n || !r.defaultPrevented))
        return null == t ? void 0 : t(r);
    };
  }
  function wo(e, t = []) {
    let n = [];
    const r = () => {
      const t = n.map((e) => j(e));
      return function (n) {
        const r = (null == n ? void 0 : n[e]) || t;
        return be(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
      };
    };
    return (
      (r.scopeName = e),
      [
        function (t, r) {
          const o = j(r),
            a = n.length;
          n = [...n, r];
          const i = (t) => {
            var n;
            const { scope: r, children: i, ...l } = t,
              s =
                (null == (n = null == r ? void 0 : r[e]) ? void 0 : n[a]) || o,
              c = be(() => l, Object.values(l));
            return ee(s.Provider, { value: c, children: i });
          };
          return (
            (i.displayName = t + "Provider"),
            [
              i,
              function (n, i) {
                var l;
                const s = Ce(
                  (null == (l = null == i ? void 0 : i[e]) ? void 0 : l[a]) || o
                );
                if (s) return s;
                if (void 0 !== r) return r;
                throw new Error(`\`${n}\` must be used within \`${t}\``);
              }
            ]
          );
        },
        yo(r, ...t)
      ]
    );
  }
  function yo(...e) {
    const t = e[0];
    if (1 === e.length) return t;
    const n = () => {
      const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
      return function (e) {
        const r = n.reduce(
          (t, { useScope: n, scopeName: r }) => ({
            ...t,
            ...n(e)[`__scope${r}`]
          }),
          {}
        );
        return be(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  var bo = j(void 0);
  var xo = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ].reduce((e, t) => {
    const n = Vr(`Primitive.${t}`),
      r = Ve((e, r) => {
        const { asChild: o, ...a } = e,
          i = o ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          ee(i, { ...a, ref: r })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
  function Co(e) {
    const t = we(e);
    return (
      ge(() => {
        t.current = e;
      }),
      be(
        () =>
          (...e) => {
            var n;
            return null == (n = t.current) ? void 0 : n.call(t, ...e);
          },
        []
      )
    );
  }
  var ko,
    So = "dismissableLayer.update",
    Eo = "dismissableLayer.pointerDownOutside",
    No = "dismissableLayer.focusOutside",
    To = j({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set()
    }),
    Ao = Ve((e, t) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: r,
          onPointerDownOutside: o,
          onFocusOutside: a,
          onInteractOutside: i,
          onDismiss: l,
          ...s
        } = e,
        c = Ce(To),
        [u, d] = ve(null),
        f =
          (null == u ? void 0 : u.ownerDocument) ??
          (null == globalThis ? void 0 : globalThis.document),
        [, p] = ve({}),
        h = jr(t, (e) => d(e)),
        v = Array.from(c.layers),
        [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
        g = v.indexOf(m),
        _ = u ? v.indexOf(u) : -1,
        w = c.layersWithOutsidePointerEventsDisabled.size > 0,
        y = _ >= g,
        b = (function (
          e,
          t = null == globalThis ? void 0 : globalThis.document
        ) {
          const n = Co(e),
            r = we(!1),
            o = we(() => {});
          return (
            ge(() => {
              const e = (e) => {
                  if (e.target && !r.current) {
                    let r = function () {
                      Do(Eo, n, a, { discrete: !0 });
                    };
                    const a = { originalEvent: e };
                    "touch" === e.pointerType
                      ? (t.removeEventListener("click", o.current),
                        (o.current = r),
                        t.addEventListener("click", o.current, { once: !0 }))
                      : r();
                  } else t.removeEventListener("click", o.current);
                  r.current = !1;
                },
                a = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e);
                }, 0);
              return () => {
                window.clearTimeout(a),
                  t.removeEventListener("pointerdown", e),
                  t.removeEventListener("click", o.current);
              };
            }, [t, n]),
            { onPointerDownCapture: () => (r.current = !0) }
          );
        })((e) => {
          const t = e.target,
            n = [...c.branches].some((e) => e.contains(t));
          !y ||
            n ||
            (null == o || o(e),
            null == i || i(e),
            e.defaultPrevented || null == l || l());
        }, f),
        x = (function (
          e,
          t = null == globalThis ? void 0 : globalThis.document
        ) {
          const n = Co(e),
            r = we(!1);
          return (
            ge(() => {
              const e = (e) => {
                e.target &&
                  !r.current &&
                  Do(No, n, { originalEvent: e }, { discrete: !1 });
              };
              return (
                t.addEventListener("focusin", e),
                () => t.removeEventListener("focusin", e)
              );
            }, [t, n]),
            {
              onFocusCapture: () => (r.current = !0),
              onBlurCapture: () => (r.current = !1)
            }
          );
        })((e) => {
          const t = e.target;
          [...c.branches].some((e) => e.contains(t)) ||
            (null == a || a(e),
            null == i || i(e),
            e.defaultPrevented || null == l || l());
        }, f);
      return (
        (function (e, t = null == globalThis ? void 0 : globalThis.document) {
          const n = Co(e);
          ge(() => {
            const e = (e) => {
              "Escape" === e.key && n(e);
            };
            return (
              t.addEventListener("keydown", e, { capture: !0 }),
              () => t.removeEventListener("keydown", e, { capture: !0 })
            );
          }, [n, t]);
        })((e) => {
          _ === c.layers.size - 1 &&
            (null == r || r(e),
            !e.defaultPrevented && l && (e.preventDefault(), l()));
        }, f),
        ge(() => {
          if (u)
            return (
              n &&
                (0 === c.layersWithOutsidePointerEventsDisabled.size &&
                  ((ko = f.body.style.pointerEvents),
                  (f.body.style.pointerEvents = "none")),
                c.layersWithOutsidePointerEventsDisabled.add(u)),
              c.layers.add(u),
              Io(),
              () => {
                n &&
                  1 === c.layersWithOutsidePointerEventsDisabled.size &&
                  (f.body.style.pointerEvents = ko);
              }
            );
        }, [u, f, n, c]),
        ge(
          () => () => {
            u &&
              (c.layers.delete(u),
              c.layersWithOutsidePointerEventsDisabled.delete(u),
              Io());
          },
          [u, c]
        ),
        ge(() => {
          const e = () => p({});
          return (
            document.addEventListener(So, e),
            () => document.removeEventListener(So, e)
          );
        }, []),
        ee(xo.div, {
          ...s,
          ref: h,
          style: {
            pointerEvents: w ? (y ? "auto" : "none") : void 0,
            ...e.style
          },
          onFocusCapture: _o(e.onFocusCapture, x.onFocusCapture),
          onBlurCapture: _o(e.onBlurCapture, x.onBlurCapture),
          onPointerDownCapture: _o(
            e.onPointerDownCapture,
            b.onPointerDownCapture
          )
        })
      );
    });
  Ao.displayName = "DismissableLayer";
  var Po = Ve((e, t) => {
    const n = Ce(To),
      r = we(null),
      o = jr(t, r);
    return (
      ge(() => {
        const e = r.current;
        if (e)
          return (
            n.branches.add(e),
            () => {
              n.branches.delete(e);
            }
          );
      }, [n.branches]),
      ee(xo.div, { ...e, ref: o })
    );
  });
  function Io() {
    const e = new CustomEvent(So);
    document.dispatchEvent(e);
  }
  function Do(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
      a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }),
      r
        ? (function (e, t) {
            e && Dt(() => e.dispatchEvent(t));
          })(o, a)
        : o.dispatchEvent(a);
  }
  Po.displayName = "DismissableLayerBranch";
  var Mo = 0;
  function Oo() {
    const e = document.createElement("span");
    return (
      e.setAttribute("data-radix-focus-guard", ""),
      (e.tabIndex = 0),
      (e.style.outline = "none"),
      (e.style.opacity = "0"),
      (e.style.position = "fixed"),
      (e.style.pointerEvents = "none"),
      e
    );
  }
  var Lo = "focusScope.autoFocusOnMount",
    Ro = "focusScope.autoFocusOnUnmount",
    Fo = { bubbles: !1, cancelable: !0 },
    zo = Ve((e, t) => {
      const {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          ...i
        } = e,
        [l, s] = ve(null),
        c = Co(o),
        u = Co(a),
        d = we(null),
        f = jr(t, (e) => s(e)),
        p = we({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          }
        }).current;
      ge(() => {
        if (r) {
          let e = function (e) {
              if (p.paused || !l) return;
              const t = e.target;
              l.contains(t) ? (d.current = t) : Ho(d.current, { select: !0 });
            },
            t = function (e) {
              if (p.paused || !l) return;
              const t = e.relatedTarget;
              null !== t && (l.contains(t) || Ho(d.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (const t of e) t.removedNodes.length > 0 && Ho(l);
            };
          document.addEventListener("focusin", e),
            document.addEventListener("focusout", t);
          const r = new MutationObserver(n);
          return (
            l && r.observe(l, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener("focusin", e),
                document.removeEventListener("focusout", t),
                r.disconnect();
            }
          );
        }
      }, [r, l, p.paused]),
        ge(() => {
          if (l) {
            $o.add(p);
            const e = document.activeElement;
            if (!l.contains(e)) {
              const t = new CustomEvent(Lo, Fo);
              l.addEventListener(Lo, c),
                l.dispatchEvent(t),
                t.defaultPrevented ||
                  ((function (e, { select: t = !1 } = {}) {
                    const n = document.activeElement;
                    for (const r of e)
                      if ((Ho(r, { select: t }), document.activeElement !== n))
                        return;
                  })(
                    (function (e) {
                      return e.filter((e) => "A" !== e.tagName);
                    })(Uo(l)),
                    { select: !0 }
                  ),
                  document.activeElement === e && Ho(l));
            }
            return () => {
              l.removeEventListener(Lo, c),
                setTimeout(() => {
                  const t = new CustomEvent(Ro, Fo);
                  l.addEventListener(Ro, u),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      Ho(e ?? document.body, { select: !0 }),
                    l.removeEventListener(Ro, u),
                    $o.remove(p);
                }, 0);
            };
          }
        }, [l, c, u, p]);
      const h = xe(
        (e) => {
          if ((!n && !r) || p.paused) return;
          const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
            o = document.activeElement;
          if (t && o) {
            const t = e.currentTarget,
              [r, a] = (function (e) {
                const t = Uo(e),
                  n = Bo(t, e),
                  r = Bo(t.reverse(), e);
                return [n, r];
              })(t);
            r && a
              ? e.shiftKey || o !== a
                ? e.shiftKey &&
                  o === r &&
                  (e.preventDefault(), n && Ho(a, { select: !0 }))
                : (e.preventDefault(), n && Ho(r, { select: !0 }))
              : o === t && e.preventDefault();
          }
        },
        [n, r, p.paused]
      );
      return ee(xo.div, { tabIndex: -1, ...i, ref: f, onKeyDown: h });
    });
  function Uo(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (e) => {
          const t = "INPUT" === e.tagName && "hidden" === e.type;
          return e.disabled || e.hidden || t
            ? NodeFilter.FILTER_SKIP
            : e.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
        }
      });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function Bo(e, t) {
    for (const n of e) if (!Wo(n, { upTo: t })) return n;
  }
  function Wo(e, { upTo: t }) {
    if ("hidden" === getComputedStyle(e).visibility) return !0;
    for (; e; ) {
      if (void 0 !== t && e === t) return !1;
      if ("none" === getComputedStyle(e).display) return !0;
      e = e.parentElement;
    }
    return !1;
  }
  function Ho(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
      const n = document.activeElement;
      e.focus({ preventScroll: !0 }),
        e !== n &&
          (function (e) {
            return e instanceof HTMLInputElement && "select" in e;
          })(e) &&
          t &&
          e.select();
    }
  }
  zo.displayName = "FocusScope";
  var $o = (function () {
    let e = [];
    return {
      add(t) {
        const n = e[0];
        t !== n && (null == n || n.pause()), (e = jo(e, t)), e.unshift(t);
      },
      remove(t) {
        var n;
        (e = jo(e, t)), null == (n = e[0]) || n.resume();
      }
    };
  })();
  function jo(e, t) {
    const n = [...e],
      r = n.indexOf(t);
    return -1 !== r && n.splice(r, 1), n;
  }
  var Vo = null != globalThis && globalThis.document ? _e : () => {},
    Yo = Rt[" useId ".trim().toString()] || (() => {}),
    qo = 0;
  function Xo(e) {
    const [t, n] = ve(Yo());
    return (
      Vo(() => {
        n((e) => e ?? String(qo++));
      }, [e]),
      t ? `radix-${t}` : ""
    );
  }
  const Ko = ["top", "right", "bottom", "left"],
    Zo = Math.min,
    Go = Math.max,
    Jo = Math.round,
    Qo = Math.floor,
    ea = (e) => ({ x: e, y: e }),
    ta = { left: "right", right: "left", bottom: "top", top: "bottom" },
    na = { start: "end", end: "start" };
  function ra(e, t, n) {
    return Go(e, Zo(t, n));
  }
  function oa(e, t) {
    return "function" == typeof e ? e(t) : e;
  }
  function aa(e) {
    return e.split("-")[0];
  }
  function ia(e) {
    return e.split("-")[1];
  }
  function la(e) {
    return "x" === e ? "y" : "x";
  }
  function sa(e) {
    return "y" === e ? "height" : "width";
  }
  function ca(e) {
    return ["top", "bottom"].includes(aa(e)) ? "y" : "x";
  }
  function ua(e) {
    return la(ca(e));
  }
  function da(e) {
    return e.replace(/start|end/g, (e) => na[e]);
  }
  function fa(e) {
    return e.replace(/left|right|bottom|top/g, (e) => ta[e]);
  }
  function pa(e) {
    return "number" != typeof e
      ? (function (e) {
          return { top: 0, right: 0, bottom: 0, left: 0, ...e };
        })(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function ha(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return {
      width: r,
      height: o,
      top: n,
      left: t,
      right: t + r,
      bottom: n + o,
      x: t,
      y: n
    };
  }
  function va(e, t, n) {
    let { reference: r, floating: o } = e;
    const a = ca(t),
      i = ua(t),
      l = sa(i),
      s = aa(t),
      c = "y" === a,
      u = r.x + r.width / 2 - o.width / 2,
      d = r.y + r.height / 2 - o.height / 2,
      f = r[l] / 2 - o[l] / 2;
    let p;
    switch (s) {
      case "top":
        p = { x: u, y: r.y - o.height };
        break;
      case "bottom":
        p = { x: u, y: r.y + r.height };
        break;
      case "right":
        p = { x: r.x + r.width, y: d };
        break;
      case "left":
        p = { x: r.x - o.width, y: d };
        break;
      default:
        p = { x: r.x, y: r.y };
    }
    switch (ia(t)) {
      case "start":
        p[i] -= f * (n && c ? -1 : 1);
        break;
      case "end":
        p[i] += f * (n && c ? -1 : 1);
    }
    return p;
  }
  async function ma(e, t) {
    var n;
    void 0 === t && (t = {});
    const { x: r, y: o, platform: a, rects: i, elements: l, strategy: s } = e,
      {
        boundary: c = "clippingAncestors",
        rootBoundary: u = "viewport",
        elementContext: d = "floating",
        altBoundary: f = !1,
        padding: p = 0
      } = oa(t, e),
      h = pa(p),
      v = l[f ? ("floating" === d ? "reference" : "floating") : d],
      m = ha(
        await a.getClippingRect({
          element:
            null ==
              (n = await (null == a.isElement ? void 0 : a.isElement(v))) || n
              ? v
              : v.contextElement ||
                (await (null == a.getDocumentElement
                  ? void 0
                  : a.getDocumentElement(l.floating))),
          boundary: c,
          rootBoundary: u,
          strategy: s
        })
      ),
      g =
        "floating" === d
          ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
          : i.reference,
      _ = await (null == a.getOffsetParent
        ? void 0
        : a.getOffsetParent(l.floating)),
      w = ((await (null == a.isElement ? void 0 : a.isElement(_))) &&
        (await (null == a.getScale ? void 0 : a.getScale(_)))) || {
        x: 1,
        y: 1
      },
      y = ha(
        a.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: l,
              rect: g,
              offsetParent: _,
              strategy: s
            })
          : g
      );
    return {
      top: (m.top - y.top + h.top) / w.y,
      bottom: (y.bottom - m.bottom + h.bottom) / w.y,
      left: (m.left - y.left + h.left) / w.x,
      right: (y.right - m.right + h.right) / w.x
    };
  }
  function ga(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width
    };
  }
  function _a(e) {
    return Ko.some((t) => e[t] >= 0);
  }
  function wa() {
    return typeof window < "u";
  }
  function ya(e) {
    return Ca(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function ba(e) {
    var t;
    return (
      (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) ||
      window
    );
  }
  function xa(e) {
    var t;
    return null ==
      (t = (Ca(e) ? e.ownerDocument : e.document) || window.document)
      ? void 0
      : t.documentElement;
  }
  function Ca(e) {
    return !!wa() && (e instanceof Node || e instanceof ba(e).Node);
  }
  function ka(e) {
    return !!wa() && (e instanceof Element || e instanceof ba(e).Element);
  }
  function Sa(e) {
    return (
      !!wa() && (e instanceof HTMLElement || e instanceof ba(e).HTMLElement)
    );
  }
  function Ea(e) {
    return (
      !(!wa() || typeof ShadowRoot > "u") &&
      (e instanceof ShadowRoot || e instanceof ba(e).ShadowRoot)
    );
  }
  function Na(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Ma(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
      !["inline", "contents"].includes(o)
    );
  }
  function Ta(e) {
    return ["table", "td", "th"].includes(ya(e));
  }
  function Aa(e) {
    return [":popover-open", ":modal"].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return !1;
      }
    });
  }
  function Pa(e) {
    const t = Ia(),
      n = ka(e) ? Ma(e) : e;
    return (
      ["transform", "translate", "scale", "rotate", "perspective"].some(
        (e) => !!n[e] && "none" !== n[e]
      ) ||
      (!!n.containerType && "normal" !== n.containerType) ||
      (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
      (!t && !!n.filter && "none" !== n.filter) ||
      [
        "transform",
        "translate",
        "scale",
        "rotate",
        "perspective",
        "filter"
      ].some((e) => (n.willChange || "").includes(e)) ||
      ["paint", "layout", "strict", "content"].some((e) =>
        (n.contain || "").includes(e)
      )
    );
  }
  function Ia() {
    return (
      !(typeof CSS > "u" || !CSS.supports) &&
      CSS.supports("-webkit-backdrop-filter", "none")
    );
  }
  function Da(e) {
    return ["html", "body", "#document"].includes(ya(e));
  }
  function Ma(e) {
    return ba(e).getComputedStyle(e);
  }
  function Oa(e) {
    return ka(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function La(e) {
    if ("html" === ya(e)) return e;
    const t = e.assignedSlot || e.parentNode || (Ea(e) && e.host) || xa(e);
    return Ea(t) ? t.host : t;
  }
  function Ra(e) {
    const t = La(e);
    return Da(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : Sa(t) && Na(t)
        ? t
        : Ra(t);
  }
  function Fa(e, t, n) {
    var r;
    void 0 === t && (t = []), void 0 === n && (n = !0);
    const o = Ra(e),
      a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
      i = ba(o);
    if (a) {
      const e = za(i);
      return t.concat(
        i,
        i.visualViewport || [],
        Na(o) ? o : [],
        e && n ? Fa(e) : []
      );
    }
    return t.concat(o, Fa(o, [], n));
  }
  function za(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function Ua(e) {
    const t = Ma(e);
    let n = parseFloat(t.width) || 0,
      r = parseFloat(t.height) || 0;
    const o = Sa(e),
      a = o ? e.offsetWidth : n,
      i = o ? e.offsetHeight : r,
      l = Jo(n) !== a || Jo(r) !== i;
    return l && ((n = a), (r = i)), { width: n, height: r, $: l };
  }
  function Ba(e) {
    return ka(e) ? e : e.contextElement;
  }
  function Wa(e) {
    const t = Ba(e);
    if (!Sa(t)) return ea(1);
    const n = t.getBoundingClientRect(),
      { width: r, height: o, $: a } = Ua(t);
    let i = (a ? Jo(n.width) : n.width) / r,
      l = (a ? Jo(n.height) : n.height) / o;
    return (
      (!i || !Number.isFinite(i)) && (i = 1),
      (!l || !Number.isFinite(l)) && (l = 1),
      { x: i, y: l }
    );
  }
  const Ha = ea(0);
  function $a(e) {
    const t = ba(e);
    return Ia() && t.visualViewport
      ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
      : Ha;
  }
  function ja(e, t, n, r) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    const o = e.getBoundingClientRect(),
      a = Ba(e);
    let i = ea(1);
    t && (r ? ka(r) && (i = Wa(r)) : (i = Wa(e)));
    const l = (function (e, t, n) {
      return void 0 === t && (t = !1), !(!n || (t && n !== ba(e))) && t;
    })(a, n, r)
      ? $a(a)
      : ea(0);
    let s = (o.left + l.x) / i.x,
      c = (o.top + l.y) / i.y,
      u = o.width / i.x,
      d = o.height / i.y;
    if (a) {
      const e = ba(a),
        t = r && ka(r) ? ba(r) : r;
      let n = e,
        o = za(n);
      for (; o && r && t !== n; ) {
        const e = Wa(o),
          t = o.getBoundingClientRect(),
          r = Ma(o),
          a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
          i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
        (s *= e.x),
          (c *= e.y),
          (u *= e.x),
          (d *= e.y),
          (s += a),
          (c += i),
          (n = ba(o)),
          (o = za(n));
      }
    }
    return ha({ width: u, height: d, x: s, y: c });
  }
  function Va(e, t) {
    const n = Oa(e).scrollLeft;
    return t ? t.left + n : ja(xa(e)).left + n;
  }
  function Ya(e, t, n) {
    void 0 === n && (n = !1);
    const r = e.getBoundingClientRect();
    return {
      x: r.left + t.scrollLeft - (n ? 0 : Va(e, r)),
      y: r.top + t.scrollTop
    };
  }
  function qa(e, t, n) {
    let r;
    if ("viewport" === t)
      r = (function (e, t) {
        const n = ba(e),
          r = xa(e),
          o = n.visualViewport;
        let a = r.clientWidth,
          i = r.clientHeight,
          l = 0,
          s = 0;
        if (o) {
          (a = o.width), (i = o.height);
          const e = Ia();
          (!e || (e && "fixed" === t)) &&
            ((l = o.offsetLeft), (s = o.offsetTop));
        }
        return { width: a, height: i, x: l, y: s };
      })(e, n);
    else if ("document" === t)
      r = (function (e) {
        const t = xa(e),
          n = Oa(e),
          r = e.ownerDocument.body,
          o = Go(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
          a = Go(
            t.scrollHeight,
            t.clientHeight,
            r.scrollHeight,
            r.clientHeight
          );
        let i = -n.scrollLeft + Va(e);
        const l = -n.scrollTop;
        return (
          "rtl" === Ma(r).direction &&
            (i += Go(t.clientWidth, r.clientWidth) - o),
          { width: o, height: a, x: i, y: l }
        );
      })(xa(e));
    else if (ka(t))
      r = (function (e, t) {
        const n = ja(e, !0, "fixed" === t),
          r = n.top + e.clientTop,
          o = n.left + e.clientLeft,
          a = Sa(e) ? Wa(e) : ea(1);
        return {
          width: e.clientWidth * a.x,
          height: e.clientHeight * a.y,
          x: o * a.x,
          y: r * a.y
        };
      })(t, n);
    else {
      const n = $a(e);
      r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return ha(r);
  }
  function Xa(e, t) {
    const n = La(e);
    return (
      !(n === t || !ka(n) || Da(n)) && ("fixed" === Ma(n).position || Xa(n, t))
    );
  }
  function Ka(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Fa(e, [], !1).filter((e) => ka(e) && "body" !== ya(e)),
      o = null;
    const a = "fixed" === Ma(e).position;
    let i = a ? La(e) : e;
    for (; ka(i) && !Da(i); ) {
      const t = Ma(i),
        n = Pa(i);
      !n && "fixed" === t.position && (o = null),
        (
          a
            ? !n && !o
            : (!n &&
                "static" === t.position &&
                o &&
                ["absolute", "fixed"].includes(o.position)) ||
              (Na(i) && !n && Xa(e, i))
        )
          ? (r = r.filter((e) => e !== i))
          : (o = t),
        (i = La(i));
    }
    return t.set(e, r), r;
  }
  function Za(e, t, n) {
    const r = Sa(t),
      o = xa(t),
      a = "fixed" === n,
      i = ja(e, !0, a, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const s = ea(0);
    if (r || (!r && !a))
      if ((("body" !== ya(t) || Na(o)) && (l = Oa(t)), r)) {
        const e = ja(t, !0, a, t);
        (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
      } else o && (s.x = Va(o));
    const c = !o || r || a ? ea(0) : Ya(o, l);
    return {
      x: i.left + l.scrollLeft - s.x - c.x,
      y: i.top + l.scrollTop - s.y - c.y,
      width: i.width,
      height: i.height
    };
  }
  function Ga(e) {
    return "static" === Ma(e).position;
  }
  function Ja(e, t) {
    if (!Sa(e) || "fixed" === Ma(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return xa(e) === n && (n = n.ownerDocument.body), n;
  }
  function Qa(e, t) {
    const n = ba(e);
    if (Aa(e)) return n;
    if (!Sa(e)) {
      let t = La(e);
      for (; t && !Da(t); ) {
        if (ka(t) && !Ga(t)) return t;
        t = La(t);
      }
      return n;
    }
    let r = Ja(e, t);
    for (; r && Ta(r) && Ga(r); ) r = Ja(r, t);
    return r && Da(r) && Ga(r) && !Pa(r)
      ? n
      : r ||
          (function (e) {
            let t = La(e);
            for (; Sa(t) && !Da(t); ) {
              if (Pa(t)) return t;
              if (Aa(t)) return null;
              t = La(t);
            }
            return null;
          })(e) ||
          n;
  }
  const ei = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
      const a = "fixed" === o,
        i = xa(r),
        l = !!t && Aa(t.floating);
      if (r === i || (l && a)) return n;
      let s = { scrollLeft: 0, scrollTop: 0 },
        c = ea(1);
      const u = ea(0),
        d = Sa(r);
      if (
        (d || (!d && !a)) &&
        (("body" !== ya(r) || Na(i)) && (s = Oa(r)), Sa(r))
      ) {
        const e = ja(r);
        (c = Wa(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
      }
      const f = !i || d || a ? ea(0) : Ya(i, s, !0);
      return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - s.scrollLeft * c.x + u.x + f.x,
        y: n.y * c.y - s.scrollTop * c.y + u.y + f.y
      };
    },
    getDocumentElement: xa,
    getClippingRect: function (e) {
      let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
      const a = [
          ...("clippingAncestors" === n
            ? Aa(t)
              ? []
              : Ka(t, this._c)
            : [].concat(n)),
          r
        ],
        i = a[0],
        l = a.reduce(
          (e, n) => {
            const r = qa(t, n, o);
            return (
              (e.top = Go(r.top, e.top)),
              (e.right = Zo(r.right, e.right)),
              (e.bottom = Zo(r.bottom, e.bottom)),
              (e.left = Go(r.left, e.left)),
              e
            );
          },
          qa(t, i, o)
        );
      return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
      };
    },
    getOffsetParent: Qa,
    getElementRects: async function (e) {
      const t = this.getOffsetParent || Qa,
        n = this.getDimensions,
        r = await n(e.floating);
      return {
        reference: Za(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height }
      };
    },
    getClientRects: function (e) {
      return Array.from(e.getClientRects());
    },
    getDimensions: function (e) {
      const { width: t, height: n } = Ua(e);
      return { width: t, height: n };
    },
    getScale: Wa,
    isElement: ka,
    isRTL: function (e) {
      return "rtl" === Ma(e).direction;
    }
  };
  function ti(e, t) {
    return (
      e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
    );
  }
  function ni(e, t, n, r) {
    void 0 === r && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: a = !0,
        elementResize: i = "function" == typeof ResizeObserver,
        layoutShift: l = "function" == typeof IntersectionObserver,
        animationFrame: s = !1
      } = r,
      c = Ba(e),
      u = o || a ? [...(c ? Fa(c) : []), ...Fa(t)] : [];
    u.forEach((e) => {
      o && e.addEventListener("scroll", n, { passive: !0 }),
        a && e.addEventListener("resize", n);
    });
    const d =
      c && l
        ? (function (e, t) {
            let n,
              r = null;
            const o = xa(e);
            function a() {
              var e;
              clearTimeout(n), null == (e = r) || e.disconnect(), (r = null);
            }
            return (
              (function i(l, s) {
                void 0 === l && (l = !1), void 0 === s && (s = 1), a();
                const c = e.getBoundingClientRect(),
                  { left: u, top: d, width: f, height: p } = c;
                if ((l || t(), !f || !p)) return;
                const h = {
                  rootMargin:
                    -Qo(d) +
                    "px " +
                    -Qo(o.clientWidth - (u + f)) +
                    "px " +
                    -Qo(o.clientHeight - (d + p)) +
                    "px " +
                    -Qo(u) +
                    "px",
                  threshold: Go(0, Zo(1, s)) || 1
                };
                let v = !0;
                function m(t) {
                  const r = t[0].intersectionRatio;
                  if (r !== s) {
                    if (!v) return i();
                    r
                      ? i(!1, r)
                      : (n = setTimeout(() => {
                          i(!1, 1e-7);
                        }, 1e3));
                  }
                  1 === r && !ti(c, e.getBoundingClientRect()) && i(), (v = !1);
                }
                try {
                  r = new IntersectionObserver(m, {
                    ...h,
                    root: o.ownerDocument
                  });
                } catch {
                  r = new IntersectionObserver(m, h);
                }
                r.observe(e);
              })(!0),
              a
            );
          })(c, n)
        : null;
    let f = -1,
      p = null;
    i &&
      ((p = new ResizeObserver((e) => {
        let [r] = e;
        r &&
          r.target === c &&
          p &&
          (p.unobserve(t),
          cancelAnimationFrame(f),
          (f = requestAnimationFrame(() => {
            var e;
            null == (e = p) || e.observe(t);
          }))),
          n();
      })),
      c && !s && p.observe(c),
      p.observe(t));
    let h,
      v = s ? ja(e) : null;
    return (
      s &&
        (function t() {
          const r = ja(e);
          v && !ti(v, r) && n(), (v = r), (h = requestAnimationFrame(t));
        })(),
      n(),
      () => {
        var e;
        u.forEach((e) => {
          o && e.removeEventListener("scroll", n),
            a && e.removeEventListener("resize", n);
        }),
          null == d || d(),
          null == (e = p) || e.disconnect(),
          (p = null),
          s && cancelAnimationFrame(h);
      }
    );
  }
  const ri = function (e) {
      return (
        void 0 === e && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, r;
            const { x: o, y: a, placement: i, middlewareData: l } = t,
              s = await (async function (e, t) {
                const { placement: n, platform: r, elements: o } = e,
                  a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                  i = aa(n),
                  l = ia(n),
                  s = "y" === ca(n),
                  c = ["left", "top"].includes(i) ? -1 : 1,
                  u = a && s ? -1 : 1,
                  d = oa(t, e);
                let {
                  mainAxis: f,
                  crossAxis: p,
                  alignmentAxis: h
                } = "number" == typeof d
                  ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                  : {
                      mainAxis: d.mainAxis || 0,
                      crossAxis: d.crossAxis || 0,
                      alignmentAxis: d.alignmentAxis
                    };
                return (
                  l && "number" == typeof h && (p = "end" === l ? -1 * h : h),
                  s ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
                );
              })(t, e);
            return i === (null == (n = l.offset) ? void 0 : n.placement) &&
              null != (r = l.arrow) &&
              r.alignmentOffset
              ? {}
              : { x: o + s.x, y: a + s.y, data: { ...s, placement: i } };
          }
        }
      );
    },
    oi = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: r, placement: o } = t,
              {
                mainAxis: a = !0,
                crossAxis: i = !1,
                limiter: l = {
                  fn: (e) => {
                    let { x: t, y: n } = e;
                    return { x: t, y: n };
                  }
                },
                ...s
              } = oa(e, t),
              c = { x: n, y: r },
              u = await ma(t, s),
              d = ca(aa(o)),
              f = la(d);
            let p = c[f],
              h = c[d];
            if (a) {
              const e = "y" === f ? "bottom" : "right";
              p = ra(p + u["y" === f ? "top" : "left"], p, p - u[e]);
            }
            if (i) {
              const e = "y" === d ? "bottom" : "right";
              h = ra(h + u["y" === d ? "top" : "left"], h, h - u[e]);
            }
            const v = l.fn({ ...t, [f]: p, [d]: h });
            return {
              ...v,
              data: { x: v.x - n, y: v.y - r, enabled: { [f]: a, [d]: i } }
            };
          }
        }
      );
    },
    ai = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var n, r;
            const {
                placement: o,
                middlewareData: a,
                rects: i,
                initialPlacement: l,
                platform: s,
                elements: c
              } = t,
              {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: v = !0,
                ...m
              } = oa(e, t);
            if (null != (n = a.arrow) && n.alignmentOffset) return {};
            const g = aa(o),
              _ = ca(l),
              w = aa(l) === l,
              y = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
              b =
                f ||
                (w || !v
                  ? [fa(l)]
                  : (function (e) {
                      const t = fa(e);
                      return [da(e), t, da(t)];
                    })(l)),
              x = "none" !== h;
            !f &&
              x &&
              b.push(
                ...(function (e, t, n, r) {
                  const o = ia(e);
                  let a = (function (e, t, n) {
                    const r = ["left", "right"],
                      o = ["right", "left"],
                      a = ["top", "bottom"],
                      i = ["bottom", "top"];
                    switch (e) {
                      case "top":
                      case "bottom":
                        return n ? (t ? o : r) : t ? r : o;
                      case "left":
                      case "right":
                        return t ? a : i;
                      default:
                        return [];
                    }
                  })(aa(e), "start" === n, r);
                  return (
                    o &&
                      ((a = a.map((e) => e + "-" + o)),
                      t && (a = a.concat(a.map(da)))),
                    a
                  );
                })(l, v, h, y)
              );
            const C = [l, ...b],
              k = await ma(t, m),
              S = [];
            let E = (null == (r = a.flip) ? void 0 : r.overflows) || [];
            if ((u && S.push(k[g]), d)) {
              const e = (function (e, t, n) {
                void 0 === n && (n = !1);
                const r = ia(e),
                  o = ua(e),
                  a = sa(o);
                let i =
                  "x" === o
                    ? r === (n ? "end" : "start")
                      ? "right"
                      : "left"
                    : "start" === r
                      ? "bottom"
                      : "top";
                return (
                  t.reference[a] > t.floating[a] && (i = fa(i)), [i, fa(i)]
                );
              })(o, i, y);
              S.push(k[e[0]], k[e[1]]);
            }
            if (
              ((E = [...E, { placement: o, overflows: S }]),
              !S.every((e) => e <= 0))
            ) {
              var N, T;
              const e = ((null == (N = a.flip) ? void 0 : N.index) || 0) + 1,
                t = C[e];
              if (t)
                return {
                  data: { index: e, overflows: E },
                  reset: { placement: t }
                };
              let n =
                null ==
                (T = E.filter((e) => e.overflows[0] <= 0).sort(
                  (e, t) => e.overflows[1] - t.overflows[1]
                )[0])
                  ? void 0
                  : T.placement;
              if (!n)
                switch (p) {
                  case "bestFit": {
                    var A;
                    const e =
                      null ==
                      (A = E.filter((e) => {
                        if (x) {
                          const t = ca(e.placement);
                          return t === _ || "y" === t;
                        }
                        return !0;
                      })
                        .map((e) => [
                          e.placement,
                          e.overflows
                            .filter((e) => e > 0)
                            .reduce((e, t) => e + t, 0)
                        ])
                        .sort((e, t) => e[1] - t[1])[0])
                        ? void 0
                        : A[0];
                    e && (n = e);
                    break;
                  }
                  case "initialPlacement":
                    n = l;
                }
              if (o !== n) return { reset: { placement: n } };
            }
            return {};
          }
        }
      );
    },
    ii = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, r;
            const { placement: o, rects: a, platform: i, elements: l } = t,
              { apply: s = () => {}, ...c } = oa(e, t),
              u = await ma(t, c),
              d = aa(o),
              f = ia(o),
              p = "y" === ca(o),
              { width: h, height: v } = a.floating;
            let m, g;
            "top" === d || "bottom" === d
              ? ((m = d),
                (g =
                  f ===
                  ((await (null == i.isRTL ? void 0 : i.isRTL(l.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((g = d), (m = "end" === f ? "top" : "bottom"));
            const _ = v - u.top - u.bottom,
              w = h - u.left - u.right,
              y = Zo(v - u[m], _),
              b = Zo(h - u[g], w),
              x = !t.middlewareData.shift;
            let C = y,
              k = b;
            if (
              (null != (n = t.middlewareData.shift) && n.enabled.x && (k = w),
              null != (r = t.middlewareData.shift) && r.enabled.y && (C = _),
              x && !f)
            ) {
              const e = Go(u.left, 0),
                t = Go(u.right, 0),
                n = Go(u.top, 0),
                r = Go(u.bottom, 0);
              p
                ? (k =
                    h - 2 * (0 !== e || 0 !== t ? e + t : Go(u.left, u.right)))
                : (C =
                    v - 2 * (0 !== n || 0 !== r ? n + r : Go(u.top, u.bottom)));
            }
            await s({ ...t, availableWidth: k, availableHeight: C });
            const S = await i.getDimensions(l.floating);
            return h !== S.width || v !== S.height
              ? { reset: { rects: !0 } }
              : {};
          }
        }
      );
    },
    li = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "hide",
          options: e,
          async fn(t) {
            const { rects: n } = t,
              { strategy: r = "referenceHidden", ...o } = oa(e, t);
            switch (r) {
              case "referenceHidden": {
                const e = ga(
                  await ma(t, { ...o, elementContext: "reference" }),
                  n.reference
                );
                return {
                  data: { referenceHiddenOffsets: e, referenceHidden: _a(e) }
                };
              }
              case "escaped": {
                const e = ga(
                  await ma(t, { ...o, altBoundary: !0 }),
                  n.floating
                );
                return { data: { escapedOffsets: e, escaped: _a(e) } };
              }
              default:
                return {};
            }
          }
        }
      );
    },
    si = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: r,
            placement: o,
            rects: a,
            platform: i,
            elements: l,
            middlewareData: s
          } = t,
          { element: c, padding: u = 0 } = oa(e, t) || {};
        if (null == c) return {};
        const d = pa(u),
          f = { x: n, y: r },
          p = ua(o),
          h = sa(p),
          v = await i.getDimensions(c),
          m = "y" === p,
          g = m ? "top" : "left",
          _ = m ? "bottom" : "right",
          w = m ? "clientHeight" : "clientWidth",
          y = a.reference[h] + a.reference[p] - f[p] - a.floating[h],
          b = f[p] - a.reference[p],
          x = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c));
        let C = x ? x[w] : 0;
        (!C || !(await (null == i.isElement ? void 0 : i.isElement(x)))) &&
          (C = l.floating[w] || a.floating[h]);
        const k = y / 2 - b / 2,
          S = C / 2 - v[h] / 2 - 1,
          E = Zo(d[g], S),
          N = Zo(d[_], S),
          T = E,
          A = C - v[h] - N,
          P = C / 2 - v[h] / 2 + k,
          I = ra(T, P, A),
          D =
            !s.arrow &&
            null != ia(o) &&
            P !== I &&
            a.reference[h] / 2 - (P < T ? E : N) - v[h] / 2 < 0,
          M = D ? (P < T ? P - T : P - A) : 0;
        return {
          [p]: f[p] + M,
          data: {
            [p]: I,
            centerOffset: P - I - M,
            ...(D && { alignmentOffset: M })
          },
          reset: D
        };
      }
    }),
    ci = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          options: e,
          fn(t) {
            const { x: n, y: r, placement: o, rects: a, middlewareData: i } = t,
              { offset: l = 0, mainAxis: s = !0, crossAxis: c = !0 } = oa(e, t),
              u = { x: n, y: r },
              d = ca(o),
              f = la(d);
            let p = u[f],
              h = u[d];
            const v = oa(l, t),
              m =
                "number" == typeof v
                  ? { mainAxis: v, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...v };
            if (s) {
              const e = "y" === f ? "height" : "width",
                t = a.reference[f] - a.floating[e] + m.mainAxis,
                n = a.reference[f] + a.reference[e] - m.mainAxis;
              p < t ? (p = t) : p > n && (p = n);
            }
            if (c) {
              var g, _;
              const e = "y" === f ? "width" : "height",
                t = ["top", "left"].includes(aa(o)),
                n =
                  a.reference[d] -
                  a.floating[e] +
                  ((t && (null == (g = i.offset) ? void 0 : g[d])) || 0) +
                  (t ? 0 : m.crossAxis),
                r =
                  a.reference[d] +
                  a.reference[e] +
                  (t ? 0 : (null == (_ = i.offset) ? void 0 : _[d]) || 0) -
                  (t ? m.crossAxis : 0);
              h < n ? (h = n) : h > r && (h = r);
            }
            return { [f]: p, [d]: h };
          }
        }
      );
    },
    ui = (e, t, n) => {
      const r = new Map(),
        o = { platform: ei, ...n },
        a = { ...o.platform, _c: r };
      return (async (e, t, n) => {
        const {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: a = [],
            platform: i
          } = n,
          l = a.filter(Boolean),
          s = await (null == i.isRTL ? void 0 : i.isRTL(t));
        let c = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
          }),
          { x: u, y: d } = va(c, r, s),
          f = r,
          p = {},
          h = 0;
        for (let n = 0; n < l.length; n++) {
          const { name: a, fn: v } = l[n],
            {
              x: m,
              y: g,
              data: _,
              reset: w
            } = await v({
              x: u,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: i,
              elements: { reference: e, floating: t }
            });
          (u = m ?? u),
            (d = g ?? d),
            (p = { ...p, [a]: { ...p[a], ..._ } }),
            w &&
              h <= 50 &&
              (h++,
              "object" == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o
                        })
                      : w.rects),
                ({ x: u, y: d } = va(c, f, s))),
              (n = -1));
        }
        return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
      })(e, t, { ...o, platform: a });
    };
  var di = typeof document < "u" ? _e : ge;
  function fi(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && "object" == typeof e) {
      if (Array.isArray(e)) {
        if (((n = e.length), n !== t.length)) return !1;
        for (r = n; 0 != r--; ) if (!fi(e[r], t[r])) return !1;
        return !0;
      }
      if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
        return !1;
      for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
      for (r = n; 0 != r--; ) {
        const n = o[r];
        if (!(("_owner" === n && e.$$typeof) || fi(e[n], t[n]))) return !1;
      }
      return !0;
    }
    return e != e && t != t;
  }
  function pi(e) {
    return typeof window > "u"
      ? 1
      : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function hi(e, t) {
    const n = pi(e);
    return Math.round(t * n) / n;
  }
  function vi(e) {
    const t = we(e);
    return (
      di(() => {
        t.current = e;
      }),
      t
    );
  }
  const mi = (e) => ({
      name: "arrow",
      options: e,
      fn(t) {
        const { element: n, padding: r } = "function" == typeof e ? e(t) : e;
        return n &&
          (function (e) {
            return {}.hasOwnProperty.call(e, "current");
          })(n)
          ? null != n.current
            ? si({ element: n.current, padding: r }).fn(t)
            : {}
          : n
            ? si({ element: n, padding: r }).fn(t)
            : {};
      }
    }),
    gi = (e, t) => ({ ...ri(e), options: [e, t] }),
    _i = (e, t) => ({ ...oi(e), options: [e, t] }),
    wi = (e, t) => ({ ...ci(e), options: [e, t] }),
    yi = (e, t) => ({ ...ai(e), options: [e, t] }),
    bi = (e, t) => ({ ...ii(e), options: [e, t] }),
    xi = (e, t) => ({ ...li(e), options: [e, t] }),
    Ci = (e, t) => ({ ...mi(e), options: [e, t] });
  var ki = Ve((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...a } = e;
    return ee(xo.svg, {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : ee("polygon", { points: "0,0 30,0 15,10" })
    });
  });
  ki.displayName = "Arrow";
  var Si = ki;
  var Ei = "Popper",
    [Ni, Ti] = wo(Ei),
    [Ai, Pi] = Ni(Ei),
    Ii = (e) => {
      const { __scopePopper: t, children: n } = e,
        [r, o] = ve(null);
      return ee(Ai, { scope: t, anchor: r, onAnchorChange: o, children: n });
    };
  Ii.displayName = Ei;
  var Di = "PopperAnchor",
    Mi = Ve((e, t) => {
      const { __scopePopper: n, virtualRef: r, ...o } = e,
        a = Pi(Di, n),
        i = we(null),
        l = jr(t, i);
      return (
        ge(() => {
          a.onAnchorChange((null == r ? void 0 : r.current) || i.current);
        }),
        r ? null : ee(xo.div, { ...o, ref: l })
      );
    });
  Mi.displayName = Di;
  var Oi = "PopperContent",
    [Li, Ri] = Ni(Oi),
    Fi = Ve((e, t) => {
      var n, r, o, a, i, l;
      const {
          __scopePopper: s,
          side: c = "bottom",
          sideOffset: u = 0,
          align: d = "center",
          alignOffset: f = 0,
          arrowPadding: p = 0,
          avoidCollisions: h = !0,
          collisionBoundary: v = [],
          collisionPadding: m = 0,
          sticky: g = "partial",
          hideWhenDetached: _ = !1,
          updatePositionStrategy: w = "optimized",
          onPlaced: y,
          ...b
        } = e,
        x = Pi(Oi, s),
        [C, k] = ve(null),
        S = jr(t, (e) => k(e)),
        [E, N] = ve(null),
        T = (function (e) {
          const [t, n] = ve(void 0);
          return (
            Vo(() => {
              if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const t = new ResizeObserver((t) => {
                  if (!Array.isArray(t) || !t.length) return;
                  const r = t[0];
                  let o, a;
                  if ("borderBoxSize" in r) {
                    const e = r.borderBoxSize,
                      t = Array.isArray(e) ? e[0] : e;
                    (o = t.inlineSize), (a = t.blockSize);
                  } else (o = e.offsetWidth), (a = e.offsetHeight);
                  n({ width: o, height: a });
                });
                return (
                  t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                );
              }
              n(void 0);
            }, [e]),
            t
          );
        })(E),
        A = (null == T ? void 0 : T.width) ?? 0,
        P = (null == T ? void 0 : T.height) ?? 0,
        I = c + ("center" !== d ? "-" + d : ""),
        D =
          "number" == typeof m
            ? m
            : { top: 0, right: 0, bottom: 0, left: 0, ...m },
        M = Array.isArray(v) ? v : [v],
        O = M.length > 0,
        L = { padding: D, boundary: M.filter(Wi), altBoundary: O },
        {
          refs: R,
          floatingStyles: F,
          placement: z,
          isPositioned: U,
          middlewareData: B
        } = (function (e) {
          void 0 === e && (e = {});
          const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: r = [],
              platform: o,
              elements: { reference: a, floating: i } = {},
              transform: l = !0,
              whileElementsMounted: s,
              open: c
            } = e,
            [u, d] = ve({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }),
            [f, p] = ve(r);
          fi(f, r) || p(r);
          const [h, v] = ve(null),
            [m, g] = ve(null),
            _ = xe((e) => {
              e !== x.current && ((x.current = e), v(e));
            }, []),
            w = xe((e) => {
              e !== C.current && ((C.current = e), g(e));
            }, []),
            y = a || h,
            b = i || m,
            x = we(null),
            C = we(null),
            k = we(u),
            S = null != s,
            E = vi(s),
            N = vi(o),
            T = vi(c),
            A = xe(() => {
              if (!x.current || !C.current) return;
              const e = { placement: t, strategy: n, middleware: f };
              N.current && (e.platform = N.current),
                ui(x.current, C.current, e).then((e) => {
                  const t = { ...e, isPositioned: !1 !== T.current };
                  P.current &&
                    !fi(k.current, t) &&
                    ((k.current = t),
                    Dt(() => {
                      d(t);
                    }));
                });
            }, [f, t, n, N, T]);
          di(() => {
            !1 === c &&
              k.current.isPositioned &&
              ((k.current.isPositioned = !1),
              d((e) => ({ ...e, isPositioned: !1 })));
          }, [c]);
          const P = we(!1);
          di(
            () => (
              (P.current = !0),
              () => {
                P.current = !1;
              }
            ),
            []
          ),
            di(() => {
              if ((y && (x.current = y), b && (C.current = b), y && b)) {
                if (E.current) return E.current(y, b, A);
                A();
              }
            }, [y, b, A, E, S]);
          const I = be(
              () => ({
                reference: x,
                floating: C,
                setReference: _,
                setFloating: w
              }),
              [_, w]
            ),
            D = be(() => ({ reference: y, floating: b }), [y, b]),
            M = be(() => {
              const e = { position: n, left: 0, top: 0 };
              if (!D.floating) return e;
              const t = hi(D.floating, u.x),
                r = hi(D.floating, u.y);
              return l
                ? {
                    ...e,
                    transform: "translate(" + t + "px, " + r + "px)",
                    ...(pi(D.floating) >= 1.5 && { willChange: "transform" })
                  }
                : { position: n, left: t, top: r };
            }, [n, l, D.floating, u.x, u.y]);
          return be(
            () => ({
              ...u,
              update: A,
              refs: I,
              elements: D,
              floatingStyles: M
            }),
            [u, A, I, D, M]
          );
        })({
          strategy: "fixed",
          placement: I,
          whileElementsMounted: (...e) =>
            ni(...e, { animationFrame: "always" === w }),
          elements: { reference: x.anchor },
          middleware: [
            gi({ mainAxis: u + P, alignmentAxis: f }),
            h &&
              _i({
                mainAxis: !0,
                crossAxis: !1,
                limiter: "partial" === g ? wi() : void 0,
                ...L
              }),
            h && yi({ ...L }),
            bi({
              ...L,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const { width: o, height: a } = t.reference,
                  i = e.floating.style;
                i.setProperty("--radix-popper-available-width", `${n}px`),
                  i.setProperty("--radix-popper-available-height", `${r}px`),
                  i.setProperty("--radix-popper-anchor-width", `${o}px`),
                  i.setProperty("--radix-popper-anchor-height", `${a}px`);
              }
            }),
            E && Ci({ element: E, padding: p }),
            Hi({ arrowWidth: A, arrowHeight: P }),
            _ && xi({ strategy: "referenceHidden", ...L })
          ]
        }),
        [W, H] = $i(z),
        $ = Co(y);
      Vo(() => {
        U && (null == $ || $());
      }, [U, $]);
      const j = null == (n = B.arrow) ? void 0 : n.x,
        V = null == (r = B.arrow) ? void 0 : r.y,
        Y = 0 !== (null == (o = B.arrow) ? void 0 : o.centerOffset),
        [q, X] = ve();
      return (
        Vo(() => {
          C && X(window.getComputedStyle(C).zIndex);
        }, [C]),
        ee("div", {
          ref: R.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...F,
            transform: U ? F.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: q,
            "--radix-popper-transform-origin": [
              null == (a = B.transformOrigin) ? void 0 : a.x,
              null == (i = B.transformOrigin) ? void 0 : i.y
            ].join(" "),
            ...((null == (l = B.hide) ? void 0 : l.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none"
            })
          },
          dir: e.dir,
          children: ee(Li, {
            scope: s,
            placedSide: W,
            onArrowChange: N,
            arrowX: j,
            arrowY: V,
            shouldHideArrow: Y,
            children: ee(xo.div, {
              "data-side": W,
              "data-align": H,
              ...b,
              ref: S,
              style: { ...b.style, animation: U ? void 0 : "none" }
            })
          })
        })
      );
    });
  Fi.displayName = Oi;
  var zi = "PopperArrow",
    Ui = { top: "bottom", right: "left", bottom: "top", left: "right" },
    Bi = Ve(function (e, t) {
      const { __scopePopper: n, ...r } = e,
        o = Ri(zi, n),
        a = Ui[o.placedSide];
      return ee("span", {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: ee(Si, {
          ...r,
          ref: t,
          style: { ...r.style, display: "block" }
        })
      });
    });
  function Wi(e) {
    return null !== e;
  }
  Bi.displayName = zi;
  var Hi = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, r, o;
      const { placement: a, rects: i, middlewareData: l } = t,
        s = 0 !== (null == (n = l.arrow) ? void 0 : n.centerOffset),
        c = s ? 0 : e.arrowWidth,
        u = s ? 0 : e.arrowHeight,
        [d, f] = $i(a),
        p = { start: "0%", center: "50%", end: "100%" }[f],
        h = ((null == (r = l.arrow) ? void 0 : r.x) ?? 0) + c / 2,
        v = ((null == (o = l.arrow) ? void 0 : o.y) ?? 0) + u / 2;
      let m = "",
        g = "";
      return (
        "bottom" === d
          ? ((m = s ? p : `${h}px`), (g = -u + "px"))
          : "top" === d
            ? ((m = s ? p : `${h}px`), (g = `${i.floating.height + u}px`))
            : "right" === d
              ? ((m = -u + "px"), (g = s ? p : `${v}px`))
              : "left" === d &&
                ((m = `${i.floating.width + u}px`), (g = s ? p : `${v}px`)),
        { data: { x: m, y: g } }
      );
    }
  });
  function $i(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var ji = Ii,
    Vi = Mi,
    Yi = Fi,
    qi = Bi,
    Xi = Ve((e, t) => {
      var n;
      const { container: r, ...o } = e,
        [a, i] = ve(!1);
      Vo(() => i(!0), []);
      const l =
        r ||
        (a &&
          (null == (n = null == globalThis ? void 0 : globalThis.document)
            ? void 0
            : n.body));
      return l ? Lt.createPortal(ee(xo.div, { ...o, ref: t }), l) : null;
    });
  Xi.displayName = "Portal";
  var Ki = Rt[" useInsertionEffect ".trim().toString()] || Vo;
  function Zi({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, a, i] = (function ({ defaultProp: e, onChange: t }) {
        const [n, r] = ve(e),
          o = we(n),
          a = we(t);
        return (
          Ki(() => {
            a.current = t;
          }, [t]),
          ge(() => {
            var e;
            o.current !== n &&
              (null == (e = a.current) || e.call(a, n), (o.current = n));
          }, [n, o]),
          [n, r, a]
        );
      })({ defaultProp: t, onChange: n }),
      l = void 0 !== e,
      s = l ? e : o;
    {
      const t = we(void 0 !== e);
      ge(() => {
        const e = t.current;
        e !== l &&
          console.warn(
            `${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
          ),
          (t.current = l);
      }, [l, r]);
    }
    return [
      s,
      xe(
        (t) => {
          var n;
          if (l) {
            const r = (function (e) {
              return "function" == typeof e;
            })(t)
              ? t(e)
              : t;
            r !== e && (null == (n = i.current) || n.call(i, r));
          } else a(t);
        },
        [l, e, a, i]
      )
    ];
  }
  var Gi = Object.freeze({
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }),
    Ji = Ve((e, t) =>
      ee(xo.span, { ...e, ref: t, style: { ...Gi, ...e.style } })
    );
  Ji.displayName = "VisuallyHidden";
  var Qi = new WeakMap(),
    el = new WeakMap(),
    tl = {},
    nl = 0,
    rl = function (e) {
      return e && (e.host || rl(e.parentNode));
    },
    ol = function (e, t, n, r) {
      var o = (function (e, t) {
        return t
          .map(function (t) {
            if (e.contains(t)) return t;
            var n = rl(t);
            return n && e.contains(n)
              ? n
              : (console.error(
                  "aria-hidden",
                  t,
                  "in not contained inside",
                  e,
                  ". Doing nothing"
                ),
                null);
          })
          .filter(function (e) {
            return !!e;
          });
      })(t, Array.isArray(e) ? e : [e]);
      tl[n] || (tl[n] = new WeakMap());
      var a = tl[n],
        i = [],
        l = new Set(),
        s = new Set(o),
        c = function (e) {
          !e || l.has(e) || (l.add(e), c(e.parentNode));
        };
      o.forEach(c);
      var u = function (e) {
        !e ||
          s.has(e) ||
          Array.prototype.forEach.call(e.children, function (e) {
            if (l.has(e)) u(e);
            else
              try {
                var t = e.getAttribute(r),
                  o = null !== t && "false" !== t,
                  s = (Qi.get(e) || 0) + 1,
                  c = (a.get(e) || 0) + 1;
                Qi.set(e, s),
                  a.set(e, c),
                  i.push(e),
                  1 === s && o && el.set(e, !0),
                  1 === c && e.setAttribute(n, "true"),
                  o || e.setAttribute(r, "true");
              } catch (t) {
                console.error("aria-hidden: cannot operate on ", e, t);
              }
          });
      };
      return (
        u(t),
        l.clear(),
        nl++,
        function () {
          i.forEach(function (e) {
            var t = Qi.get(e) - 1,
              o = a.get(e) - 1;
            Qi.set(e, t),
              a.set(e, o),
              t || (el.has(e) || e.removeAttribute(r), el.delete(e)),
              o || e.removeAttribute(n);
          }),
            --nl ||
              ((Qi = new WeakMap()),
              (Qi = new WeakMap()),
              (el = new WeakMap()),
              (tl = {}));
        }
      );
    },
    al = function (e, t, n) {
      void 0 === n && (n = "data-aria-hidden");
      var r = Array.from(Array.isArray(e) ? e : [e]),
        o = (function (e) {
          return typeof document > "u"
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        })(e);
      return o
        ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
          ol(r, o, n, "aria-hidden"))
        : function () {
            return null;
          };
    },
    il = function () {
      return (
        (il =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        il.apply(this, arguments)
      );
    };
  function ll(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  }
  var sl = "right-scroll-bar-position",
    cl = "width-before-scroll-bar";
  function ul(e, t) {
    return "function" == typeof e ? e(t) : e && (e.current = t), e;
  }
  var dl = typeof window < "u" ? _e : ge,
    fl = new WeakMap();
  function pl(e, t) {
    var n = (function (e, t) {
      var n = ve(function () {
        return {
          value: e,
          callback: t,
          facade: {
            get current() {
              return n.value;
            },
            set current(e) {
              var t = n.value;
              t !== e && ((n.value = e), n.callback(e, t));
            }
          }
        };
      })[0];
      return (n.callback = t), n.facade;
    })(null, function (t) {
      return e.forEach(function (e) {
        return ul(e, t);
      });
    });
    return (
      dl(
        function () {
          var t = fl.get(n);
          if (t) {
            var r = new Set(t),
              o = new Set(e),
              a = n.current;
            r.forEach(function (e) {
              o.has(e) || ul(e, null);
            }),
              o.forEach(function (e) {
                r.has(e) || ul(e, a);
              });
          }
          fl.set(n, e);
        },
        [e]
      ),
      n
    );
  }
  function hl(e) {
    return e;
  }
  var vl = function (e) {
    var t = e.sideCar,
      n = ll(e, ["sideCar"]);
    if (!t)
      throw new Error(
        "Sidecar: please provide `sideCar` property to import the right car"
      );
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return w(r, il({}, n));
  };
  vl.isSideCarExport = !0;
  var ml = (function (e) {
      void 0 === e && (e = {});
      var t = (function (e, t) {
        void 0 === t && (t = hl);
        var n = [],
          r = !1;
        return {
          read: function () {
            if (r)
              throw new Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
              );
            return n.length ? n[n.length - 1] : e;
          },
          useMedium: function (e) {
            var o = t(e, r);
            return (
              n.push(o),
              function () {
                n = n.filter(function (e) {
                  return e !== o;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (r = !0; n.length; ) {
              var t = n;
              (n = []), t.forEach(e);
            }
            n = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return n;
              }
            };
          },
          assignMedium: function (e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              (n = []), o.forEach(e), (t = n);
            }
            var a = function () {
                var n = t;
                (t = []), n.forEach(e);
              },
              i = function () {
                return Promise.resolve().then(a);
              };
            i(),
              (n = {
                push: function (e) {
                  t.push(e), i();
                },
                filter: function (e) {
                  return (t = t.filter(e)), n;
                }
              });
          }
        };
      })(null);
      return (t.options = il({ async: !0, ssr: !1 }, e)), t;
    })(),
    gl = function () {},
    _l = Ve(function (e, t) {
      var n = we(null),
        r = ve({
          onScrollCapture: gl,
          onWheelCapture: gl,
          onTouchMoveCapture: gl
        }),
        o = r[0],
        a = r[1],
        i = e.forwardProps,
        l = e.children,
        s = e.className,
        c = e.removeScrollBar,
        u = e.enabled,
        d = e.shards,
        f = e.sideCar,
        p = e.noIsolation,
        h = e.inert,
        v = e.allowPinchZoom,
        m = e.as,
        g = void 0 === m ? "div" : m,
        _ = e.gapMode,
        y = ll(e, [
          "forwardProps",
          "children",
          "className",
          "removeScrollBar",
          "enabled",
          "shards",
          "sideCar",
          "noIsolation",
          "inert",
          "allowPinchZoom",
          "as",
          "gapMode"
        ]),
        b = f,
        C = pl([n, t]),
        k = il(il({}, y), o);
      return w(
        x,
        null,
        u &&
          w(b, {
            sideCar: ml,
            removeScrollBar: c,
            shards: d,
            noIsolation: p,
            inert: h,
            setCallbacks: a,
            allowPinchZoom: !!v,
            lockRef: n,
            gapMode: _
          }),
        i
          ? Tt(qe.only(l), il(il({}, k), { ref: C }))
          : w(g, il({}, k, { className: s, ref: C }), l)
      );
    });
  (_l.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
    (_l.classNames = { fullWidth: cl, zeroRight: sl });
  function wl() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = (function () {
      if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
    })();
    return t && e.setAttribute("nonce", t), e;
  }
  var yl = function () {
      var e = 0,
        t = null;
      return {
        add: function (n) {
          0 == e &&
            (t = wl()) &&
            ((function (e, t) {
              e.styleSheet
                ? (e.styleSheet.cssText = t)
                : e.appendChild(document.createTextNode(t));
            })(t, n),
            (function (e) {
              (
                document.head || document.getElementsByTagName("head")[0]
              ).appendChild(e);
            })(t)),
            e++;
        },
        remove: function () {
          !--e &&
            t &&
            (t.parentNode && t.parentNode.removeChild(t), (t = null));
        }
      };
    },
    bl = function () {
      var e = (function () {
        var e = yl();
        return function (t, n) {
          ge(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && n]
          );
        };
      })();
      return function (t) {
        var n = t.styles,
          r = t.dynamic;
        return e(n, r), null;
      };
    },
    xl = { left: 0, top: 0, right: 0, gap: 0 },
    Cl = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    kl = function (e) {
      if ((void 0 === e && (e = "margin"), typeof window > "u")) return xl;
      var t = (function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [Cl(n), Cl(r), Cl(o)];
        })(e),
        n = document.documentElement.clientWidth,
        r = window.innerWidth;
      return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
      };
    },
    Sl = bl(),
    El = "data-scroll-locked",
    Nl = function (e, t, n, r) {
      var o = e.left,
        a = e.top,
        i = e.right,
        l = e.gap;
      return (
        void 0 === n && (n = "margin"),
        "\n  ."
          .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
          .concat(r, ";\n   padding-right: ")
          .concat(l, "px ")
          .concat(r, ";\n  }\n  body[")
          .concat(El, "] {\n    overflow: hidden ")
          .concat(r, ";\n    overscroll-behavior: contain;\n    ")
          .concat(
            [
              t && "position: relative ".concat(r, ";"),
              "margin" === n &&
                "\n    padding-left: "
                  .concat(o, "px;\n    padding-top: ")
                  .concat(a, "px;\n    padding-right: ")
                  .concat(
                    i,
                    "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                  )
                  .concat(l, "px ")
                  .concat(r, ";\n    "),
              "padding" === n &&
                "padding-right: ".concat(l, "px ").concat(r, ";")
            ]
              .filter(Boolean)
              .join(""),
            "\n  }\n  \n  ."
          )
          .concat(sl, " {\n    right: ")
          .concat(l, "px ")
          .concat(r, ";\n  }\n  \n  .")
          .concat(cl, " {\n    margin-right: ")
          .concat(l, "px ")
          .concat(r, ";\n  }\n  \n  .")
          .concat(sl, " .")
          .concat(sl, " {\n    right: 0 ")
          .concat(r, ";\n  }\n  \n  .")
          .concat(cl, " .")
          .concat(cl, " {\n    margin-right: 0 ")
          .concat(r, ";\n  }\n  \n  body[")
          .concat(El, "] {\n    ")
          .concat("--removed-body-scroll-bar-size", ": ")
          .concat(l, "px;\n  }\n")
      );
    },
    Tl = function () {
      var e = parseInt(document.body.getAttribute(El) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    Al = function (e) {
      var t = e.noRelative,
        n = e.noImportant,
        r = e.gapMode,
        o = void 0 === r ? "margin" : r;
      ge(function () {
        return (
          document.body.setAttribute(El, (Tl() + 1).toString()),
          function () {
            var e = Tl() - 1;
            e <= 0
              ? document.body.removeAttribute(El)
              : document.body.setAttribute(El, e.toString());
          }
        );
      }, []);
      var a = be(
        function () {
          return kl(o);
        },
        [o]
      );
      return w(Sl, { styles: Nl(a, !t, o, n ? "" : "!important") });
    },
    Pl = !1;
  if (typeof window < "u")
    try {
      var Il = Object.defineProperty({}, "passive", {
        get: function () {
          return (Pl = !0), !0;
        }
      });
      window.addEventListener("test", Il, Il),
        window.removeEventListener("test", Il, Il);
    } catch {
      Pl = !1;
    }
  var Dl = !!Pl && { passive: !1 },
    Ml = function (e, t) {
      if (!(e instanceof Element)) return !1;
      var n = window.getComputedStyle(e);
      return (
        "hidden" !== n[t] &&
        !(
          n.overflowY === n.overflowX &&
          !(function (e) {
            return "TEXTAREA" === e.tagName;
          })(e) &&
          "visible" === n[t]
        )
      );
    },
    Ol = function (e, t) {
      var n = t.ownerDocument,
        r = t;
      do {
        if (
          (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host),
          Ll(e, r))
        ) {
          var o = Rl(e, r);
          if (o[1] > o[2]) return !0;
        }
        r = r.parentNode;
      } while (r && r !== n.body);
      return !1;
    },
    Ll = function (e, t) {
      return "v" === e
        ? (function (e) {
            return Ml(e, "overflowY");
          })(t)
        : (function (e) {
            return Ml(e, "overflowX");
          })(t);
    },
    Rl = function (e, t) {
      return "v" === e
        ? (function (e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight];
          })(t)
        : (function (e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth];
          })(t);
    },
    Fl = function (e) {
      return "changedTouches" in e
        ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
        : [0, 0];
    },
    zl = function (e) {
      return [e.deltaX, e.deltaY];
    },
    Ul = function (e) {
      return e && "current" in e ? e.current : e;
    },
    Bl = function (e) {
      return "\n  .block-interactivity-"
        .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
        .concat(e, " {pointer-events: all;}\n");
    },
    Wl = 0,
    Hl = [];
  function $l(e) {
    for (var t = null; null !== e; )
      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
        (e = e.parentNode);
    return t;
  }
  const jl =
    ((Vl = function (e) {
      var t = we([]),
        n = we([0, 0]),
        r = we(),
        o = ve(Wl++)[0],
        a = ve(bl)[0],
        i = we(e);
      ge(
        function () {
          i.current = e;
        },
        [e]
      ),
        ge(
          function () {
            if (e.inert) {
              document.body.classList.add("block-interactivity-".concat(o));
              var t = (function (e, t, n) {
                for (var r, o = 0, a = t.length; o < a; o++)
                  (r || !(o in t)) &&
                    (r || (r = Array.prototype.slice.call(t, 0, o)),
                    (r[o] = t[o]));
                return e.concat(r || Array.prototype.slice.call(t));
              })([e.lockRef.current], (e.shards || []).map(Ul)).filter(Boolean);
              return (
                t.forEach(function (e) {
                  return e.classList.add("allow-interactivity-".concat(o));
                }),
                function () {
                  document.body.classList.remove(
                    "block-interactivity-".concat(o)
                  ),
                    t.forEach(function (e) {
                      return e.classList.remove(
                        "allow-interactivity-".concat(o)
                      );
                    });
                }
              );
            }
          },
          [e.inert, e.lockRef.current, e.shards]
        );
      var l = xe(function (e, t) {
          if (
            ("touches" in e && 2 === e.touches.length) ||
            ("wheel" === e.type && e.ctrlKey)
          )
            return !i.current.allowPinchZoom;
          var o,
            a = Fl(e),
            l = n.current,
            s = "deltaX" in e ? e.deltaX : l[0] - a[0],
            c = "deltaY" in e ? e.deltaY : l[1] - a[1],
            u = e.target,
            d = Math.abs(s) > Math.abs(c) ? "h" : "v";
          if ("touches" in e && "h" === d && "range" === u.type) return !1;
          var f = Ol(d, u);
          if (!f) return !0;
          if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = Ol(d, u))), !f))
            return !1;
          if (
            (!r.current && "changedTouches" in e && (s || c) && (r.current = o),
            !o)
          )
            return !0;
          var p = r.current || o;
          return (function (e, t, n, r, o) {
            var a = (function (e, t) {
                return "h" === e && "rtl" === t ? -1 : 1;
              })(e, window.getComputedStyle(t).direction),
              i = a * r,
              l = n.target,
              s = t.contains(l),
              c = !1,
              u = i > 0,
              d = 0,
              f = 0;
            do {
              var p = Rl(e, l),
                h = p[0],
                v = p[1] - p[2] - a * h;
              (h || v) && Ll(e, l) && ((d += v), (f += h)),
                (l = l instanceof ShadowRoot ? l.host : l.parentNode);
            } while (
              (!s && l !== document.body) ||
              (s && (t.contains(l) || t === l))
            );
            return (
              ((u && Math.abs(d) < 1) || (!u && Math.abs(f) < 1)) && (c = !0), c
            );
          })(p, t, e, "h" === p ? s : c);
        }, []),
        s = xe(function (e) {
          var n = e;
          if (Hl.length && Hl[Hl.length - 1] === a) {
            var r = "deltaY" in n ? zl(n) : Fl(n),
              o = t.current.filter(function (e) {
                return (
                  e.name === n.type &&
                  (e.target === n.target || n.target === e.shadowParent) &&
                  (function (e, t) {
                    return e[0] === t[0] && e[1] === t[1];
                  })(e.delta, r)
                );
              })[0];
            if (o && o.should) return void (n.cancelable && n.preventDefault());
            if (!o) {
              var s = (i.current.shards || [])
                .map(Ul)
                .filter(Boolean)
                .filter(function (e) {
                  return e.contains(n.target);
                });
              (s.length > 0 ? l(n, s[0]) : !i.current.noIsolation) &&
                n.cancelable &&
                n.preventDefault();
            }
          }
        }, []),
        c = xe(function (e, n, r, o) {
          var a = {
            name: e,
            delta: n,
            target: r,
            should: o,
            shadowParent: $l(r)
          };
          t.current.push(a),
            setTimeout(function () {
              t.current = t.current.filter(function (e) {
                return e !== a;
              });
            }, 1);
        }, []),
        u = xe(function (e) {
          (n.current = Fl(e)), (r.current = void 0);
        }, []),
        d = xe(function (t) {
          c(t.type, zl(t), t.target, l(t, e.lockRef.current));
        }, []),
        f = xe(function (t) {
          c(t.type, Fl(t), t.target, l(t, e.lockRef.current));
        }, []);
      ge(function () {
        return (
          Hl.push(a),
          e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: f
          }),
          document.addEventListener("wheel", s, Dl),
          document.addEventListener("touchmove", s, Dl),
          document.addEventListener("touchstart", u, Dl),
          function () {
            (Hl = Hl.filter(function (e) {
              return e !== a;
            })),
              document.removeEventListener("wheel", s, Dl),
              document.removeEventListener("touchmove", s, Dl),
              document.removeEventListener("touchstart", u, Dl);
          }
        );
      }, []);
      var p = e.removeScrollBar;
      return w(
        x,
        null,
        e.inert ? w(a, { styles: Bl(o) }) : null,
        p ? w(Al, { gapMode: e.gapMode }) : null
      );
    }),
    ml.useMedium(Vl),
    vl);
  var Vl,
    Yl = Ve(function (e, t) {
      return w(_l, il({}, e, { ref: t, sideCar: jl }));
    });
  Yl.classNames = _l.classNames;
  var ql = [" ", "Enter", "ArrowUp", "ArrowDown"],
    Xl = [" ", "Enter"],
    Kl = "Select",
    [Zl, Gl, Jl] = (function (e) {
      const t = e + "CollectionProvider",
        [n, r] = wo(t),
        [o, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        i = (e) => {
          const { scope: t, children: n } = e,
            r = Lt.useRef(null),
            a = Lt.useRef(new Map()).current;
          return ee(o, { scope: t, itemMap: a, collectionRef: r, children: n });
        };
      i.displayName = t;
      const l = e + "CollectionSlot",
        s = Vr(l),
        c = Lt.forwardRef((e, t) => {
          const { scope: n, children: r } = e,
            o = jr(t, a(l, n).collectionRef);
          return ee(s, { ref: o, children: r });
        });
      c.displayName = l;
      const u = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = Vr(u),
        p = Lt.forwardRef((e, t) => {
          const { scope: n, children: r, ...o } = e,
            i = Lt.useRef(null),
            l = jr(t, i),
            s = a(u, n);
          return (
            Lt.useEffect(
              () => (
                s.itemMap.set(i, { ref: i, ...o }),
                () => {
                  s.itemMap.delete(i);
                }
              )
            ),
            ee(f, { [d]: "", ref: l, children: r })
          );
        });
      return (
        (p.displayName = u),
        [
          { Provider: i, Slot: c, ItemSlot: p },
          function (t) {
            const n = a(e + "CollectionConsumer", t);
            return Lt.useCallback(() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${d}]`));
              return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          r
        ]
      );
    })(Kl),
    [Ql, es] = wo(Kl, [Jl, Ti]),
    ts = Ti(),
    [ns, rs] = Ql(Kl),
    [os, as] = Ql(Kl),
    is = (e) => {
      const {
          __scopeSelect: t,
          children: n,
          open: r,
          defaultOpen: o,
          onOpenChange: a,
          value: i,
          defaultValue: l,
          onValueChange: s,
          dir: c,
          name: u,
          autoComplete: d,
          disabled: f,
          required: p,
          form: h
        } = e,
        v = ts(t),
        [m, g] = ve(null),
        [_, w] = ve(null),
        [y, b] = ve(!1),
        x = (function (e) {
          const t = Ce(bo);
          return e || t || "ltr";
        })(c),
        [C, k] = Zi({ prop: r, defaultProp: o ?? !1, onChange: a, caller: Kl }),
        [S, E] = Zi({ prop: i, defaultProp: l, onChange: s, caller: Kl }),
        N = we(null),
        T = !m || h || !!m.closest("form"),
        [A, P] = ve(new Set()),
        I = Array.from(A)
          .map((e) => e.props.value)
          .join(";");
      return ee(ji, {
        ...v,
        children: ee(ns, {
          required: p,
          scope: t,
          trigger: m,
          onTriggerChange: g,
          valueNode: _,
          onValueNodeChange: w,
          valueNodeHasChildren: y,
          onValueNodeHasChildrenChange: b,
          contentId: Xo(),
          value: S,
          onValueChange: E,
          open: C,
          onOpenChange: k,
          dir: x,
          triggerPointerDownPosRef: N,
          disabled: f,
          children: [
            ee(Zl.Provider, {
              scope: t,
              children: ee(os, {
                scope: e.__scopeSelect,
                onNativeOptionAdd: xe((e) => {
                  P((t) => new Set(t).add(e));
                }, []),
                onNativeOptionRemove: xe((e) => {
                  P((t) => {
                    const n = new Set(t);
                    return n.delete(e), n;
                  });
                }, []),
                children: n
              })
            }),
            T
              ? ee(
                  Xs,
                  {
                    "aria-hidden": !0,
                    required: p,
                    tabIndex: -1,
                    name: u,
                    autoComplete: d,
                    value: S,
                    onChange: (e) => E(e.target.value),
                    disabled: f,
                    form: h,
                    children: [
                      void 0 === S ? ee("option", { value: "" }) : null,
                      Array.from(A)
                    ]
                  },
                  I
                )
              : null
          ]
        })
      });
    };
  is.displayName = Kl;
  var ls = "SelectTrigger",
    ss = Ve((e, t) => {
      const { __scopeSelect: n, disabled: r = !1, ...o } = e,
        a = ts(n),
        i = rs(ls, n),
        l = i.disabled || r,
        s = jr(t, i.onTriggerChange),
        c = Gl(n),
        u = we("touch"),
        [d, f, p] = Zs((e) => {
          const t = c().filter((e) => !e.disabled),
            n = t.find((e) => e.value === i.value),
            r = Gs(t, e, n);
          void 0 !== r && i.onValueChange(r.value);
        }),
        h = (e) => {
          l || (i.onOpenChange(!0), p()),
            e &&
              (i.triggerPointerDownPosRef.current = {
                x: Math.round(e.pageX),
                y: Math.round(e.pageY)
              });
        };
      return ee(Vi, {
        asChild: !0,
        ...a,
        children: ee(xo.button, {
          type: "button",
          role: "combobox",
          "aria-controls": i.contentId,
          "aria-expanded": i.open,
          "aria-required": i.required,
          "aria-autocomplete": "none",
          dir: i.dir,
          "data-state": i.open ? "open" : "closed",
          disabled: l,
          "data-disabled": l ? "" : void 0,
          "data-placeholder": Ks(i.value) ? "" : void 0,
          ...o,
          ref: s,
          onClick: _o(o.onClick, (e) => {
            e.currentTarget.focus(), "mouse" !== u.current && h(e);
          }),
          onPointerDown: _o(o.onPointerDown, (e) => {
            u.current = e.pointerType;
            const t = e.target;
            t.hasPointerCapture(e.pointerId) &&
              t.releasePointerCapture(e.pointerId),
              0 === e.button &&
                !1 === e.ctrlKey &&
                "mouse" === e.pointerType &&
                (h(e), e.preventDefault());
          }),
          onKeyDown: _o(o.onKeyDown, (e) => {
            const t = "" !== d.current;
            !(e.ctrlKey || e.altKey || e.metaKey) &&
              1 === e.key.length &&
              f(e.key),
              (!t || " " !== e.key) &&
                ql.includes(e.key) &&
                (h(), e.preventDefault());
          })
        })
      });
    });
  ss.displayName = ls;
  var cs = "SelectValue",
    us = Ve((e, t) => {
      const {
          __scopeSelect: n,
          className: r,
          style: o,
          children: a,
          placeholder: i = "",
          ...l
        } = e,
        s = rs(cs, n),
        { onValueNodeHasChildrenChange: c } = s,
        u = void 0 !== a,
        d = jr(t, s.onValueNodeChange);
      return (
        Vo(() => {
          c(u);
        }, [c, u]),
        ee(xo.span, {
          ...l,
          ref: d,
          style: { pointerEvents: "none" },
          children: Ks(s.value) ? ee(x, { children: i }) : a
        })
      );
    });
  us.displayName = cs;
  var ds = Ve((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return ee(xo.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "â–¼"
    });
  });
  ds.displayName = "SelectIcon";
  var fs = (e) => ee(Xi, { asChild: !0, ...e });
  fs.displayName = "SelectPortal";
  var ps = "SelectContent",
    hs = Ve((e, t) => {
      const n = rs(ps, e.__scopeSelect),
        [r, o] = ve();
      if (
        (Vo(() => {
          o(new DocumentFragment());
        }, []),
        !n.open)
      ) {
        const t = r;
        return t
          ? at(
              ee(ms, {
                scope: e.__scopeSelect,
                children: ee(Zl.Slot, {
                  scope: e.__scopeSelect,
                  children: ee("div", { children: e.children })
                })
              }),
              t
            )
          : null;
      }
      return ee(ws, { ...e, ref: t });
    });
  hs.displayName = ps;
  var vs = 10,
    [ms, gs] = Ql(ps),
    _s = Vr("SelectContent.RemoveScroll"),
    ws = Ve((e, t) => {
      const {
          __scopeSelect: n,
          position: r = "item-aligned",
          onCloseAutoFocus: o,
          onEscapeKeyDown: a,
          onPointerDownOutside: i,
          side: l,
          sideOffset: s,
          align: c,
          alignOffset: u,
          arrowPadding: d,
          collisionBoundary: f,
          collisionPadding: p,
          sticky: h,
          hideWhenDetached: v,
          avoidCollisions: m,
          ...g
        } = e,
        _ = rs(ps, n),
        [w, y] = ve(null),
        [b, x] = ve(null),
        C = jr(t, (e) => y(e)),
        [k, S] = ve(null),
        [E, N] = ve(null),
        T = Gl(n),
        [A, P] = ve(!1),
        I = we(!1);
      ge(() => {
        if (w) return al(w);
      }, [w]),
        ge(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement("afterbegin", e[0] ?? Oo()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? Oo()),
            Mo++,
            () => {
              1 === Mo &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                Mo--;
            }
          );
        }, []);
      const D = xe(
          (e) => {
            const [t, ...n] = T().map((e) => e.ref.current),
              [r] = n.slice(-1),
              o = document.activeElement;
            for (const n of e)
              if (
                n === o ||
                (null == n || n.scrollIntoView({ block: "nearest" }),
                n === t && b && (b.scrollTop = 0),
                n === r && b && (b.scrollTop = b.scrollHeight),
                null == n || n.focus(),
                document.activeElement !== o)
              )
                return;
          },
          [T, b]
        ),
        M = xe(() => D([k, w]), [D, k, w]);
      ge(() => {
        A && M();
      }, [A, M]);
      const { onOpenChange: O, triggerPointerDownPosRef: L } = _;
      ge(() => {
        if (w) {
          let e = { x: 0, y: 0 };
          const t = (t) => {
              var n, r;
              e = {
                x: Math.abs(
                  Math.round(t.pageX) -
                    ((null == (n = L.current) ? void 0 : n.x) ?? 0)
                ),
                y: Math.abs(
                  Math.round(t.pageY) -
                    ((null == (r = L.current) ? void 0 : r.y) ?? 0)
                )
              };
            },
            n = (n) => {
              e.x <= 10 && e.y <= 10
                ? n.preventDefault()
                : w.contains(n.target) || O(!1),
                document.removeEventListener("pointermove", t),
                (L.current = null);
            };
          return (
            null !== L.current &&
              (document.addEventListener("pointermove", t),
              document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })),
            () => {
              document.removeEventListener("pointermove", t),
                document.removeEventListener("pointerup", n, { capture: !0 });
            }
          );
        }
      }, [w, O, L]),
        ge(() => {
          const e = () => O(!1);
          return (
            window.addEventListener("blur", e),
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("blur", e),
                window.removeEventListener("resize", e);
            }
          );
        }, [O]);
      const [R, F] = Zs((e) => {
          const t = T().filter((e) => !e.disabled),
            n = t.find((e) => e.ref.current === document.activeElement),
            r = Gs(t, e, n);
          r && setTimeout(() => r.ref.current.focus());
        }),
        z = xe(
          (e, t, n) => {
            const r = !I.current && !n;
            ((void 0 !== _.value && _.value === t) || r) &&
              (S(e), r && (I.current = !0));
          },
          [_.value]
        ),
        U = xe(() => (null == w ? void 0 : w.focus()), [w]),
        B = xe(
          (e, t, n) => {
            const r = !I.current && !n;
            ((void 0 !== _.value && _.value === t) || r) && N(e);
          },
          [_.value]
        ),
        W = "popper" === r ? bs : ys,
        H =
          W === bs
            ? {
                side: l,
                sideOffset: s,
                align: c,
                alignOffset: u,
                arrowPadding: d,
                collisionBoundary: f,
                collisionPadding: p,
                sticky: h,
                hideWhenDetached: v,
                avoidCollisions: m
              }
            : {};
      return ee(ms, {
        scope: n,
        content: w,
        viewport: b,
        onViewportChange: x,
        itemRefCallback: z,
        selectedItem: k,
        onItemLeave: U,
        itemTextRefCallback: B,
        focusSelectedItem: M,
        selectedItemText: E,
        position: r,
        isPositioned: A,
        searchRef: R,
        children: ee(Yl, {
          as: _s,
          allowPinchZoom: !0,
          children: ee(zo, {
            asChild: !0,
            trapped: _.open,
            onMountAutoFocus: (e) => {
              e.preventDefault();
            },
            onUnmountAutoFocus: _o(o, (e) => {
              var t;
              null == (t = _.trigger) || t.focus({ preventScroll: !0 }),
                e.preventDefault();
            }),
            children: ee(Ao, {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: a,
              onPointerDownOutside: i,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: () => _.onOpenChange(!1),
              children: ee(W, {
                role: "listbox",
                id: _.contentId,
                "data-state": _.open ? "open" : "closed",
                dir: _.dir,
                onContextMenu: (e) => e.preventDefault(),
                ...g,
                ...H,
                onPlaced: () => P(!0),
                ref: C,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...g.style
                },
                onKeyDown: _o(g.onKeyDown, (e) => {
                  const t = e.ctrlKey || e.altKey || e.metaKey;
                  if (
                    ("Tab" === e.key && e.preventDefault(),
                    !t && 1 === e.key.length && F(e.key),
                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                  ) {
                    let t = T()
                      .filter((e) => !e.disabled)
                      .map((e) => e.ref.current);
                    if (
                      (["ArrowUp", "End"].includes(e.key) &&
                        (t = t.slice().reverse()),
                      ["ArrowUp", "ArrowDown"].includes(e.key))
                    ) {
                      const n = e.target,
                        r = t.indexOf(n);
                      t = t.slice(r + 1);
                    }
                    setTimeout(() => D(t)), e.preventDefault();
                  }
                })
              })
            })
          })
        })
      });
    });
  ws.displayName = "SelectContentImpl";
  var ys = Ve((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      a = rs(ps, n),
      i = gs(ps, n),
      [l, s] = ve(null),
      [c, u] = ve(null),
      d = jr(t, (e) => u(e)),
      f = Gl(n),
      p = we(!1),
      h = we(!0),
      {
        viewport: v,
        selectedItem: m,
        selectedItemText: g,
        focusSelectedItem: _
      } = i,
      w = xe(() => {
        if (a.trigger && a.valueNode && l && c && v && m && g) {
          const e = a.trigger.getBoundingClientRect(),
            t = c.getBoundingClientRect(),
            n = a.valueNode.getBoundingClientRect(),
            o = g.getBoundingClientRect();
          if ("rtl" !== a.dir) {
            const r = o.left - t.left,
              a = n.left - r,
              i = e.left - a,
              s = e.width + i,
              c = Math.max(s, t.width),
              u = window.innerWidth - vs,
              d = go(a, [vs, Math.max(vs, u - c)]);
            (l.style.minWidth = s + "px"), (l.style.left = d + "px");
          } else {
            const r = t.right - o.right,
              a = window.innerWidth - n.right - r,
              i = window.innerWidth - e.right - a,
              s = e.width + i,
              c = Math.max(s, t.width),
              u = window.innerWidth - vs,
              d = go(a, [vs, Math.max(vs, u - c)]);
            (l.style.minWidth = s + "px"), (l.style.right = d + "px");
          }
          const i = f(),
            s = window.innerHeight - 2 * vs,
            u = v.scrollHeight,
            d = window.getComputedStyle(c),
            h = parseInt(d.borderTopWidth, 10),
            _ = parseInt(d.paddingTop, 10),
            w = parseInt(d.borderBottomWidth, 10),
            y = h + _ + u + parseInt(d.paddingBottom, 10) + w,
            b = Math.min(5 * m.offsetHeight, y),
            x = window.getComputedStyle(v),
            C = parseInt(x.paddingTop, 10),
            k = parseInt(x.paddingBottom, 10),
            S = e.top + e.height / 2 - vs,
            E = s - S,
            N = m.offsetHeight / 2,
            T = h + _ + (m.offsetTop + N),
            A = y - T;
          if (T <= S) {
            const e = i.length > 0 && m === i[i.length - 1].ref.current;
            l.style.bottom = "0px";
            const t = c.clientHeight - v.offsetTop - v.offsetHeight,
              n = T + Math.max(E, N + (e ? k : 0) + t + w);
            l.style.height = n + "px";
          } else {
            const e = i.length > 0 && m === i[0].ref.current;
            l.style.top = "0px";
            const t = Math.max(S, h + v.offsetTop + (e ? C : 0) + N) + A;
            (l.style.height = t + "px"), (v.scrollTop = T - S + v.offsetTop);
          }
          (l.style.margin = `${vs}px 0`),
            (l.style.minHeight = b + "px"),
            (l.style.maxHeight = s + "px"),
            null == r || r(),
            requestAnimationFrame(() => (p.current = !0));
        }
      }, [f, a.trigger, a.valueNode, l, c, v, m, g, a.dir, r]);
    Vo(() => w(), [w]);
    const [y, b] = ve();
    Vo(() => {
      c && b(window.getComputedStyle(c).zIndex);
    }, [c]);
    const x = xe(
      (e) => {
        e && !0 === h.current && (w(), null == _ || _(), (h.current = !1));
      },
      [w, _]
    );
    return ee(xs, {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: x,
      children: ee("div", {
        ref: s,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: y
        },
        children: ee(xo.div, {
          ...o,
          ref: d,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style }
        })
      })
    });
  });
  ys.displayName = "SelectItemAlignedPosition";
  var bs = Ve((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = vs,
        ...a
      } = e,
      i = ts(n);
    return ee(Yi, {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  bs.displayName = "SelectPopperPosition";
  var [xs, Cs] = Ql(ps, {}),
    ks = "SelectViewport",
    Ss = Ve((e, t) => {
      const { __scopeSelect: n, nonce: r, ...o } = e,
        a = gs(ks, n),
        i = Cs(ks, n),
        l = jr(t, a.onViewportChange),
        s = we(0);
      return ee(x, {
        children: [
          ee("style", {
            dangerouslySetInnerHTML: {
              __html:
                "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }),
          ee(Zl.Slot, {
            scope: n,
            children: ee(xo.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: l,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: _o(o.onScroll, (e) => {
                const t = e.currentTarget,
                  { contentWrapper: n, shouldExpandOnScrollRef: r } = i;
                if (null != r && r.current && n) {
                  const e = Math.abs(s.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * vs,
                      o = parseFloat(n.style.minHeight),
                      a = parseFloat(n.style.height),
                      i = Math.max(o, a);
                    if (i < r) {
                      const o = i + e,
                        a = Math.min(r, o),
                        l = o - a;
                      (n.style.height = a + "px"),
                        "0px" === n.style.bottom &&
                          ((t.scrollTop = l > 0 ? l : 0),
                          (n.style.justifyContent = "flex-end"));
                    }
                  }
                }
                s.current = t.scrollTop;
              })
            })
          })
        ]
      });
    });
  Ss.displayName = ks;
  var Es = "SelectGroup",
    [Ns, Ts] = Ql(Es),
    As = Ve((e, t) => {
      const { __scopeSelect: n, ...r } = e,
        o = Xo();
      return ee(Ns, {
        scope: n,
        id: o,
        children: ee(xo.div, {
          role: "group",
          "aria-labelledby": o,
          ...r,
          ref: t
        })
      });
    });
  As.displayName = Es;
  var Ps = "SelectLabel",
    Is = Ve((e, t) => {
      const { __scopeSelect: n, ...r } = e,
        o = Ts(Ps, n);
      return ee(xo.div, { id: o.id, ...r, ref: t });
    });
  Is.displayName = Ps;
  var Ds = "SelectItem",
    [Ms, Os] = Ql(Ds),
    Ls = Ve((e, t) => {
      const {
          __scopeSelect: n,
          value: r,
          disabled: o = !1,
          textValue: a,
          ...i
        } = e,
        l = rs(Ds, n),
        s = gs(Ds, n),
        c = l.value === r,
        [u, d] = ve(a ?? ""),
        [f, p] = ve(!1),
        h = jr(t, (e) => {
          var t;
          return null == (t = s.itemRefCallback) ? void 0 : t.call(s, e, r, o);
        }),
        v = Xo(),
        m = we("touch"),
        g = () => {
          o || (l.onValueChange(r), l.onOpenChange(!1));
        };
      if ("" === r)
        throw new Error(
          "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
        );
      return ee(Ms, {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: c,
        onItemTextChange: xe((e) => {
          d((t) => t || ((null == e ? void 0 : e.textContent) ?? "").trim());
        }, []),
        children: ee(Zl.ItemSlot, {
          scope: n,
          value: r,
          disabled: o,
          textValue: u,
          children: ee(xo.div, {
            role: "option",
            "aria-labelledby": v,
            "data-highlighted": f ? "" : void 0,
            "aria-selected": c && f,
            "data-state": c ? "checked" : "unchecked",
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            tabIndex: o ? void 0 : -1,
            ...i,
            ref: h,
            onFocus: _o(i.onFocus, () => p(!0)),
            onBlur: _o(i.onBlur, () => p(!1)),
            onClick: _o(i.onClick, () => {
              "mouse" !== m.current && g();
            }),
            onPointerUp: _o(i.onPointerUp, () => {
              "mouse" === m.current && g();
            }),
            onPointerDown: _o(i.onPointerDown, (e) => {
              m.current = e.pointerType;
            }),
            onPointerMove: _o(i.onPointerMove, (e) => {
              var t;
              (m.current = e.pointerType),
                o
                  ? null == (t = s.onItemLeave) || t.call(s)
                  : "mouse" === m.current &&
                    e.currentTarget.focus({ preventScroll: !0 });
            }),
            onPointerLeave: _o(i.onPointerLeave, (e) => {
              var t;
              e.currentTarget === document.activeElement &&
                (null == (t = s.onItemLeave) || t.call(s));
            }),
            onKeyDown: _o(i.onKeyDown, (e) => {
              var t;
              ("" !== (null == (t = s.searchRef) ? void 0 : t.current) &&
                " " === e.key) ||
                (Xl.includes(e.key) && g(),
                " " === e.key && e.preventDefault());
            })
          })
        })
      });
    });
  Ls.displayName = Ds;
  var Rs = "SelectItemText",
    Fs = Ve((e, t) => {
      const { __scopeSelect: n, className: r, style: o, ...a } = e,
        i = rs(Rs, n),
        l = gs(Rs, n),
        s = Os(Rs, n),
        c = as(Rs, n),
        [u, d] = ve(null),
        f = jr(
          t,
          (e) => d(e),
          s.onItemTextChange,
          (e) => {
            var t;
            return null == (t = l.itemTextRefCallback)
              ? void 0
              : t.call(l, e, s.value, s.disabled);
          }
        ),
        p = null == u ? void 0 : u.textContent,
        h = be(
          () =>
            ee(
              "option",
              { value: s.value, disabled: s.disabled, children: p },
              s.value
            ),
          [s.disabled, s.value, p]
        ),
        { onNativeOptionAdd: v, onNativeOptionRemove: m } = c;
      return (
        Vo(() => (v(h), () => m(h)), [v, m, h]),
        ee(x, {
          children: [
            ee(xo.span, { id: s.textId, ...a, ref: f }),
            s.isSelected && i.valueNode && !i.valueNodeHasChildren
              ? at(a.children, i.valueNode)
              : null
          ]
        })
      );
    });
  Fs.displayName = Rs;
  var zs = "SelectItemIndicator",
    Us = Ve((e, t) => {
      const { __scopeSelect: n, ...r } = e;
      return Os(zs, n).isSelected
        ? ee(xo.span, { "aria-hidden": !0, ...r, ref: t })
        : null;
    });
  Us.displayName = zs;
  var Bs = "SelectScrollUpButton",
    Ws = Ve((e, t) => {
      const n = gs(Bs, e.__scopeSelect),
        r = Cs(Bs, e.__scopeSelect),
        [o, a] = ve(!1),
        i = jr(t, r.onScrollButtonChange);
      return (
        Vo(() => {
          if (n.viewport && n.isPositioned) {
            let e = function () {
              const e = t.scrollTop > 0;
              a(e);
            };
            const t = n.viewport;
            return (
              e(),
              t.addEventListener("scroll", e),
              () => t.removeEventListener("scroll", e)
            );
          }
        }, [n.viewport, n.isPositioned]),
        o
          ? ee(js, {
              ...e,
              ref: i,
              onAutoScroll: () => {
                const { viewport: e, selectedItem: t } = n;
                e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
              }
            })
          : null
      );
    });
  Ws.displayName = Bs;
  var Hs = "SelectScrollDownButton",
    $s = Ve((e, t) => {
      const n = gs(Hs, e.__scopeSelect),
        r = Cs(Hs, e.__scopeSelect),
        [o, a] = ve(!1),
        i = jr(t, r.onScrollButtonChange);
      return (
        Vo(() => {
          if (n.viewport && n.isPositioned) {
            let e = function () {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n);
            };
            const t = n.viewport;
            return (
              e(),
              t.addEventListener("scroll", e),
              () => t.removeEventListener("scroll", e)
            );
          }
        }, [n.viewport, n.isPositioned]),
        o
          ? ee(js, {
              ...e,
              ref: i,
              onAutoScroll: () => {
                const { viewport: e, selectedItem: t } = n;
                e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
              }
            })
          : null
      );
    });
  $s.displayName = Hs;
  var js = Ve((e, t) => {
      const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
        a = gs("SelectScrollButton", n),
        i = we(null),
        l = Gl(n),
        s = xe(() => {
          null !== i.current &&
            (window.clearInterval(i.current), (i.current = null));
        }, []);
      return (
        ge(() => () => s(), [s]),
        Vo(() => {
          var e;
          const t = l().find((e) => e.ref.current === document.activeElement);
          null == (e = null == t ? void 0 : t.ref.current) ||
            e.scrollIntoView({ block: "nearest" });
        }, [l]),
        ee(xo.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: { flexShrink: 0, ...o.style },
          onPointerDown: _o(o.onPointerDown, () => {
            null === i.current && (i.current = window.setInterval(r, 50));
          }),
          onPointerMove: _o(o.onPointerMove, () => {
            var e;
            null == (e = a.onItemLeave) || e.call(a),
              null === i.current && (i.current = window.setInterval(r, 50));
          }),
          onPointerLeave: _o(o.onPointerLeave, () => {
            s();
          })
        })
      );
    }),
    Vs = Ve((e, t) => {
      const { __scopeSelect: n, ...r } = e;
      return ee(xo.div, { "aria-hidden": !0, ...r, ref: t });
    });
  Vs.displayName = "SelectSeparator";
  var Ys = "SelectArrow",
    qs = Ve((e, t) => {
      const { __scopeSelect: n, ...r } = e,
        o = ts(n),
        a = rs(Ys, n),
        i = gs(Ys, n);
      return a.open && "popper" === i.position
        ? ee(qi, { ...o, ...r, ref: t })
        : null;
    });
  qs.displayName = Ys;
  var Xs = Ve(({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = we(null),
      a = jr(r, o),
      i = (function (e) {
        const t = we({ value: e, previous: e });
        return be(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      })(t);
    return (
      ge(() => {
        const e = o.current;
        if (!e) return;
        const n = window.HTMLSelectElement.prototype,
          r = Object.getOwnPropertyDescriptor(n, "value").set;
        if (i !== t && r) {
          const n = new Event("change", { bubbles: !0 });
          r.call(e, t), e.dispatchEvent(n);
        }
      }, [i, t]),
      ee(xo.select, {
        ...n,
        style: { ...Gi, ...n.style },
        ref: a,
        defaultValue: t
      })
    );
  });
  function Ks(e) {
    return "" === e || void 0 === e;
  }
  function Zs(e) {
    const t = Co(e),
      n = we(""),
      r = we(0),
      o = xe(
        (e) => {
          const o = n.current + e;
          t(o),
            (function e(t) {
              (n.current = t),
                window.clearTimeout(r.current),
                "" !== t && (r.current = window.setTimeout(() => e(""), 1e3));
            })(o);
        },
        [t]
      ),
      a = xe(() => {
        (n.current = ""), window.clearTimeout(r.current);
      }, []);
    return ge(() => () => window.clearTimeout(r.current), []), [n, o, a];
  }
  function Gs(e, t, n) {
    const r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
      o = n ? e.indexOf(n) : -1;
    let a = (function (e, t) {
      return e.map((n, r) => e[(t + r) % e.length]);
    })(e, Math.max(o, 0));
    1 === r.length && (a = a.filter((e) => e !== n));
    const i = a.find((e) =>
      e.textValue.toLowerCase().startsWith(r.toLowerCase())
    );
    return i !== n ? i : void 0;
  }
  Xs.displayName = "SelectBubbleInput";
  var Js = is,
    Qs = ss,
    ec = ds,
    tc = fs,
    nc = hs,
    rc = Ss,
    oc = Ls,
    ac = Fs,
    ic = Us,
    lc = Ws,
    sc = $s;
  const cc = { sm: "w-4 h-4", md: "w-6 h-6" };
  function uc({ size: e = "md", flagCode: t, className: n, ...r }) {
    return ee("img", {
      className: $n("rounded-full object-cover", cc[e], n),
      src: `https://storage.googleapis.com/eleven-public-cdn/images/flags/circle-flags/${t}.svg`,
      alt: `${t.toUpperCase()} flag`,
      backgroundColor: "white",
      ...r
    });
  }
  function dc({ children: e, ...t }) {
    const [n, r] = ve(!1),
      { language: o, setLanguage: a, options: i } = pr(),
      l = nr(zr);
    return ee(Js, {
      open: n,
      value: o.value.languageCode,
      onValueChange: (e) => {
        a(e), r(!1);
      },
      onOpenChange: (e) => {
        e && r(!0);
      },
      children: [
        e,
        ee(tc, {
          container: l,
          children: ee(nc, {
            className:
              "overflow-hidden bg-base border border-base-border rounded-dropdown-sheet max-h-[min(384px,var(--radix-select-content-available-height))] min-w-[var(--radix-select-trigger-width)] z-10",
            position: "popper",
            sideOffset: 8,
            align: "end",
            side: "top",
            onPointerDownOutside: () => r(!1),
            onCloseAutoFocus: () => r(!1),
            onEscapeKeyDown: () => r(!1),
            ...t,
            children: [
              ee(lc, {
                className:
                  "flex items-center justify-center h-6 bg-base text-base-subtle cursor-default",
                children: ee(co, { size: "sm", name: "chevron-up" })
              }),
              ee(rc, {
                className: "p-1.5",
                children: i.value.map((e) =>
                  ee(
                    oc,
                    {
                      value: e.languageCode,
                      className:
                        "flex select-none items-center p-1.5 pr-3 gap-2 cursor-pointer rounded-input relative focus-visible:outline-none data-[highlighted]:bg-base-active text-sm",
                      children: [
                        ee(uc, { flagCode: e.flagCode }),
                        ee(ac, { children: e.name }),
                        ee(ic, {
                          className: "text-base-primary p-1.5 -mr-1.5 ml-auto",
                          children: ee(co, { size: "sm", name: "check" })
                        })
                      ]
                    },
                    e.languageCode
                  )
                )
              }),
              ee(sc, {
                className:
                  "flex items-center justify-center h-6 bg-base text-base-subtle cursor-default",
                children: ee(co, { size: "sm", name: "chevron-down" })
              })
            ]
          })
        })
      ]
    });
  }
  function fc({ className: e, ...t }) {
    const n = Or(),
      { language: r, showPicker: o } = pr();
    return o.value
      ? ee(dc, {
          align: "center",
          children: ee(Qs, {
            className: $n(
              "h-9 min-w-max rounded-button focus-ring px-2 flex gap-2 items-center text-base-primary bg-base hover:bg-base-hover active:bg-base-active font-medium",
              e
            ),
            "aria-label": n.change_language,
            ...t,
            children: [
              ee(uc, { size: "sm", flagCode: r.value.flagCode }),
              r.value.name,
              ee(ec, {
                className: "text-base-subtle",
                asChild: !0,
                children: ee(co, { size: "sm", name: "chevron-down" })
              })
            ]
          })
        })
      : null;
  }
  function pc({ className: e, ...t }) {
    return ee("textarea", {
      className: $n(
        "px-3 py-[calc(theme(spacing.2)-1px)] border text-sm text-base-primary bg-base border-base-border rounded-input focus-ring resize-none [field-sizing:content] placeholder:text-base-subtle",
        e
      ),
      ...t
    });
  }
  function hc({ visible: e, ...t }) {
    const n = Or(),
      { isMuted: r, isMutingEnabled: o, setIsMuted: a } = mr(),
      i = xe(() => {
        a(!r.peek());
      }, [a]);
    return o.value
      ? ee(uo, {
          visible: e,
          className: "p-1",
          children: ee(vo, {
            "aria-label": n.mute_microphone,
            "aria-pressed": r,
            icon: r.value ? "mic-off" : "mic",
            onClick: i,
            ...t
          })
        })
      : null;
  }
  function vc({ iconOnly: e, isDisconnected: t, children: n, ...r }) {
    const { endSession: o, startSession: a } = kr(),
      i = Or();
    return ee(vo, {
      variant: t ? "primary" : "secondary",
      icon: t ? "phone" : "phone-off",
      onClick: t ? (e) => a(e.currentTarget) : o,
      "aria-label": t ? i.start_call : i.end_call,
      ...r,
      children: e ? void 0 : (n ?? (t ? i.start_call : i.end_call))
    });
  }
  function mc({ showTranscript: e, scrollPinned: t }) {
    const [n, r] = ve(""),
      o = Ar(),
      { text_input_enabled: a } = Nr().value,
      i = Or(),
      {
        isDisconnected: l,
        status: s,
        startSession: c,
        sendUserMessage: u,
        sendUserActivity: d,
        conversationIndex: f
      } = kr();
    return ee("div", {
      className: "shrink-0 overflow-hidden flex p-3 items-end justify-end",
      children: [
        a &&
          ee(pc, {
            rows: 1,
            "aria-label": i.input_label,
            value: n,
            onInput: d,
            onChange: (e) => r(e.currentTarget.value),
            onKeyDown: async (e) => {
              "Enter" === e.key &&
                !e.shiftKey &&
                (e.preventDefault(),
                n.trim() &&
                  ((t.value = !0),
                  r(""),
                  l.value ? await c(e.currentTarget, n) : u(n)));
            },
            className: "m-1 grow z-1 max-h-[8lh]",
            placeholder: o.value
              ? l.value && f.value > 0
                ? i.input_placeholder_new_conversation
                : i.input_placeholder_text_only
              : i.input_placeholder
          }),
        ee("div", {
          className: "flex h-11 items-center",
          children: [
            ee(hc, { visible: !o.value && !l.value }),
            ee(uo, {
              visible: !o.value && (!l.value || e),
              className: "p-1",
              children: ee(vc, {
                iconOnly: !l.value,
                isDisconnected: l.value,
                disabled:
                  "disconnecting" === s.value || "connecting" === s.value,
                children: i.new_call
              })
            })
          ]
        })
      ]
    });
  }
  function gc({ entry: e, animateIn: t }) {
    const n = Or(),
      { previewUrl: r } = Fr(),
      { lastId: o } = kr();
    return ee(Jr, {
      initial: !t,
      active: !0,
      children:
        "message" === e.type
          ? ee("div", {
              className: $n(
                "flex gap-2.5 transition-[opacity,transform] duration-200 data-hidden:opacity-0 data-hidden:scale-75",
                "user" == e.role
                  ? "justify-end pl-16 origin-top-right"
                  : "pr-16 origin-top-left"
              ),
              children: [
                "ai" === e.role &&
                  ee("img", {
                    src: r,
                    alt: "Agent avatar",
                    className: "bg-base-border shrink-0 w-5 h-5 rounded-full"
                  }),
                ee("div", {
                  dir: "auto",
                  className: $n(
                    "px-3 py-2.5 rounded-bubble text-sm min-w-0 [overflow-wrap:break-word]",
                    "user" === e.role
                      ? "bg-accent text-accent-primary"
                      : "bg-base-active text-base-primary"
                  ),
                  children: e.message
                })
              ]
            })
          : "disconnection" === e.type
            ? ee("div", {
                className:
                  "mt-2 px-8 text-xs text-base-subtle text-center transition-opacity duration-200 data-hidden:opacity-0",
                children: [
                  "user" === e.role
                    ? n.user_ended_conversation
                    : n.agent_ended_conversation,
                  ee("br", {}),
                  o.value &&
                    ee("span", {
                      className: "break-all",
                      children: [n.conversation_id, ": ", o.value]
                    })
                ]
              })
            : ee("div", {
                className:
                  "mt-2 px-8 text-xs text-base-error text-center transition-opacity duration-200 data-hidden:opacity-0",
                children: [
                  n.error_occurred,
                  ee("br", {}),
                  e.message,
                  o.value &&
                    ee(x, {
                      children: [
                        ee("br", {}),
                        ee("span", {
                          className: "text-base-subtle break-all",
                          children: [n.conversation_id, ": ", o.value]
                        })
                      ]
                    })
                ]
              })
    });
  }
  const _c = 16;
  function wc({ scrollPinned: e, transcript: t }) {
    const n = we(null),
      r = (e) => {
        var t;
        null == (t = n.current) ||
          t.scrollTo({
            top: n.current.scrollHeight,
            behavior: e ? "smooth" : "instant"
          });
      },
      o = we(!0);
    return (
      ge(() => {
        (o.current = !1), r(!1);
      }, []),
      xn(() => {
        t.value, e.peek() && r(!0);
      }),
      ee("div", {
        ref: n,
        onScroll: (t) => {
          e.value =
            t.currentTarget.scrollTop >=
            t.currentTarget.scrollHeight - t.currentTarget.clientHeight - _c;
        },
        className:
          "px-4 pb-3 grow flex flex-col gap-3 overflow-x-hidden overflow-y-auto",
        children: t.value.map((e, t) =>
          ee(
            gc,
            { entry: e, animateIn: !o.current },
            `${e.message}-${t}-${e.conversationIndex}`
          )
        )
      })
    );
  }
  const yc = {
    "top-left": "origin-top-left",
    top: "origin-top",
    "top-right": "origin-top-right",
    "bottom-left": "origin-bottom-left",
    "bottom-right": "origin-bottom-right",
    bottom: "origin-bottom"
  };
  function bc({ open: e }) {
    const t = Or(),
      n = Tr(),
      r = Ar(),
      o = Nr(),
      a = o.value.placement,
      {
        isDisconnected: i,
        startSession: l,
        transcript: s,
        conversationIndex: c
      } = kr(),
      u = Pr(),
      d = vn(() => {
        var e;
        return n.value || r.value
          ? u.value && n.value
            ? [
                {
                  type: "message",
                  role: "ai",
                  message: u.value,
                  isText: !0,
                  conversationIndex:
                    (null == (e = s.value[0]) ? void 0 : e.conversationIndex) ??
                    c.peek()
                },
                ...s.value
              ]
            : s.value
          : o.value.transcript_enabled
            ? s.value
            : s.value.filter((e) => "message" !== e.type || e.isText);
      }),
      f = d.value.length > 0 || (!i.value && o.value.transcript_enabled),
      p = hn(!0);
    return ee(Jr, {
      initial: !1,
      active: e,
      children: ee("div", {
        className: $n(
          "flex flex-col overflow-hidden absolute bg-base shadow-lg pointer-events-auto rounded-sheet w-full max-w-[400px] h-[calc(100%-80px)] max-h-[550px]",
          "transition-[transform,opacity] duration-200 data-hidden:scale-90 data-hidden:opacity-0",
          yc[a],
          a.startsWith("top") ? "top-20" : "bottom-20"
        ),
        children: [
          ee("div", {
            className: "bg-base shrink-0 flex gap-2 p-4 items-start",
            children: [
              ee("div", { className: "relative w-16 h-16" }),
              ee(Jr, {
                active: f && !i.value,
                children: ee(mo, {
                  className:
                    "rounded-bl-[calc(var(--el-bubble-radius)/3)] transition-opacity data-hidden:opacity-0"
                })
              })
            ]
          }),
          ee(wc, { transcript: d, scrollPinned: p }),
          ee(mc, { scrollPinned: p, showTranscript: f }),
          ee(Jr, {
            active: !f || i.value,
            children: ee("div", {
              className:
                "absolute top-0 left-0 right-0 p-4 flex justify-center transition-[opacity,transform] duration-200 data-hidden:opacity-0 data-hidden:-translate-y-4",
              children: ee(fc, {})
            })
          }),
          ee("div", {
            className: $n(
              "absolute origin-top-left transition-[transform,left,top] duration-200 z-1",
              f
                ? "top-4 left-4 scale-[0.333]"
                : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100"
            ),
            children: [
              ee(ao, { size: "lg" }),
              ee(Jr, {
                active: !f && i.value && !n.value,
                children: ee("div", {
                  className:
                    "absolute bottom-0 p-1 rounded-[calc(var(--el-button-radius)+4px)] bg-base left-1/2 -translate-x-1/2 translate-y-1/2 transition-[opacity,transform] data-hidden:opacity-0 data-hidden:scale-100 scale-150",
                  children: ee(vo, {
                    "aria-label": t.start_call,
                    variant: "primary",
                    icon: "phone",
                    onClick: (e) => l(e.currentTarget)
                  })
                })
              }),
              ee(Jr, {
                active: !f && !i.value,
                children: ee("div", {
                  className:
                    "absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-full transition-[opacity,transform] data-hidden:opacity-0 data-hidden:scale-75",
                  children: ee(mo, {})
                })
              })
            ]
          })
        ]
      })
    });
  }
  function xc({ expanded: e }) {
    const t = Ar(),
      n = Nr().value.variant,
      { isDisconnected: r } = kr(),
      o = Or(),
      a = xe(() => {
        e.value = !e.value;
      }, [e]);
    return ee(x, {
      children: [
        "full" === n &&
          ee(uo, {
            visible: !e.value && !r.value,
            className: "p-1",
            children: ee(ao, {})
          }),
        ee(uo, {
          grow: "tiny" !== n,
          visible: !t.value && !e.value && !r.value,
          className: "p-1",
          children: ee(vc, { iconOnly: !0, isDisconnected: !1 })
        }),
        ee(hc, { visible: !t.value && !e.value && !r.value }),
        ee(uo, {
          grow: r.value,
          visible: !0,
          className: "p-1",
          children: ee(vo, {
            className: "w-full",
            variant: "primary",
            iconClassName: $n(
              (e.value || !r.value) && "transition-transform duration-200",
              e.value && "-rotate-180"
            ),
            icon: e.value
              ? "chevron-up"
              : r.value
                ? t.value
                  ? "chat"
                  : "phone"
                : "chevron-up",
            "aria-label": e.value
              ? o.collapse
              : r.value
                ? t.value
                  ? o.start_chat
                  : o.start_call
                : o.expand,
            onClick: e.value || r.value ? void 0 : a,
            children:
              !e.value && r.value && "tiny" !== n
                ? t.value
                  ? o.start_chat
                  : o.start_call
                : void 0
          })
        })
      ]
    });
  }
  function Cc({ expanded: e, className: t, ...n }) {
    const { isDisconnected: r } = kr(),
      o = Or();
    return ee("div", {
      className: $n(
        "transition-[border-radius] flex flex-col p-2",
        !e.value && r.value ? "rounded-sheet" : "rounded-compact-sheet",
        t
      ),
      ...n,
      children: [
        ee(uo, {
          visible: !e.value && r.value,
          className: "p-1 !min-w-60",
          children: ee("div", {
            className: "flex items-center gap-2",
            children: [
              ee(ao, {}),
              ee("div", {
                className: "text-sm max-w-64",
                children: o.main_label
              })
            ]
          })
        }),
        ee("div", {
          className: "flex items-center",
          children: ee(xc, { expanded: e })
        })
      ]
    });
  }
  function kc({ expanded: e, className: t, ...n }) {
    return ee("div", {
      className: $n("rounded-compact-sheet flex items-center p-2", t),
      ...n,
      children: [
        ee(uo, { visible: !e.value, className: "p-1", children: ee(ao, {}) }),
        ee(xc, { expanded: e })
      ]
    });
  }
  function Sc({ visible: e, className: t, ...n }) {
    const r = Or(),
      { language: o, showPicker: a } = pr();
    return a.value
      ? ee(uo, {
          visible: e,
          className: "p-1",
          children: ee(dc, {
            children: ee(Qs, {
              className: $n(
                "h-9 min-w-max border border-base-border rounded-button focus-ring px-1.5 flex gap-1 items-center transition-colors duration-200 hover:bg-base-hover active:bg-base-active",
                t
              ),
              "aria-label": r.change_language,
              ...n,
              children: [
                ee(uc, { flagCode: o.value.flagCode }),
                ee(ec, {
                  className: "px-1 text-base-subtle",
                  asChild: !0,
                  children: ee(co, { size: "sm", name: "chevron-down" })
                })
              ]
            })
          })
        })
      : null;
  }
  function Ec() {
    const e = Nr().value.variant,
      { isDisconnected: t, status: n } = kr();
    return ee(x, {
      children: [
        ee(vc, {
          isDisconnected: t.value,
          iconOnly: "tiny" === e,
          className: "w-full m-1 z-1",
          disabled: "disconnecting" === n.value || "connecting" === n.value
        }),
        ee(Sc, { visible: t.value }),
        ee(hc, { visible: !t.value })
      ]
    });
  }
  function Nc({ className: e, ...t }) {
    const { isDisconnected: n } = kr(),
      r = Or();
    return ee("div", {
      className: $n("flex flex-col p-2 rounded-sheet", e),
      ...t,
      children: [
        ee("div", {
          className: "flex items-center p-1 gap-2 min-w-60",
          children: [
            ee(ao, {}),
            ee("div", {
              className: "relative text-sm max-w-64",
              children: [
                ee("span", {
                  className: $n(
                    "block transition-[transform,opacity] duration-200",
                    !n.value && "opacity-0 scale-90"
                  ),
                  children: r.main_label
                }),
                ee(Jr, {
                  active: !n.value,
                  children: ee(mo, {
                    className:
                      "absolute top-1/2 -translate-y-1/2 transition-[transform,opacity] duration-200 data-hidden:opacity-0 data-hidden:scale-90"
                  })
                })
              ]
            })
          ]
        }),
        ee("div", { className: "flex items-center", children: ee(Ec, {}) })
      ]
    });
  }
  function Tc({ className: e, ...t }) {
    return ee("div", {
      className: $n("rounded-compact-sheet flex items-center p-2", e),
      ...t,
      children: [ee(ao, { className: "mx-1" }), ee(Ec, {})]
    });
  }
  function Ac({ expandable: e, expanded: t }) {
    const n = Nr().value.variant,
      r = br(),
      { isDisconnected: o } = kr(),
      a = xe(async () => {
        await r.requestTerms(), (t.value = !t.peek());
      }, [t]),
      i = "full" === n;
    return e
      ? ee(i ? Cc : kc, {
          expanded: t,
          className: $n(
            "bg-base shadow-md pointer-events-auto overflow-hidden",
            (o.value || t.value) && "cursor-pointer"
          ),
          onClick: o.value || t.value ? a : void 0
        })
      : ee(i ? Nc : Tc, {
          className: "bg-base shadow-md pointer-events-auto overflow-hidden"
        });
  }
  function Pc() {
    const e = Or(),
      t = Nr(),
      { dismissTerms: n, acceptTerms: r } = br();
    return ee("div", {
      className:
        "max-w-[400px] flex flex-col gap-2 bg-base shadow-md pointer-events-auto rounded-sheet p-3 text-sm",
      children: [
        ee("div", {
          className: "flex flex-col gap-1 terms p-2 pt-1",
          dangerouslySetInnerHTML: { __html: t.value.terms_html ?? "" }
        }),
        ee("div", {
          className: "flex justify-end gap-2",
          children: [
            ee(vo, { onClick: n, children: e.dismiss_terms }),
            ee(vo, { onClick: r, variant: "primary", children: e.accept_terms })
          ]
        })
      ]
    });
  }
  function Ic({ copyText: e, children: t }) {
    const n = Or(),
      [r, o] = ve(!1);
    ge(() => {
      if (r) {
        const e = setTimeout(() => {
          o(!1);
        }, 2e3);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]);
    const a = xe(() => {
      const t = Wr(e);
      t && (navigator.clipboard.writeText(t), o(!0));
    }, []);
    return ee(vo, { onClick: a, children: r ? n.copied : t });
  }
  function Dc({ sawError: e }) {
    const t = Or(),
      { error: n, lastId: r } = kr(),
      o = xe(() => {
        e.value = !0;
      }, []);
    return ee("div", {
      className:
        "max-w-[400px] flex flex-col gap-2 bg-base shadow-md pointer-events-auto rounded-sheet p-3 text-sm",
      children: [
        ee("div", {
          className: "p-2 pt-1",
          children: [
            ee("h1", {
              className: "text-md font-medium pb-1",
              children: t.error_occurred
            }),
            n.value,
            r.value &&
              ee(x, {
                children: [
                  ee("br", {}),
                  ee("span", {
                    className: "text-base-subtle",
                    children: [t.conversation_id, ": ", r.value]
                  })
                ]
              })
          ]
        }),
        ee("div", {
          className: "flex justify-end gap-2",
          children: [
            ee(Ic, { copyText: r, children: t.copy_id }),
            ee(vo, { variant: "primary", onClick: o, children: "Close" })
          ]
        })
      ]
    });
  }
  function Mc() {
    const e = Nr();
    return e.value.disable_banner
      ? null
      : ee("p", {
          className: $n(
            "whitespace-nowrap [line-height:var(--el-overlay-padding)] text-[10px] px-3",
            e.value.placement.startsWith("top")
              ? "-translate-y-[calc(var(--el-overlay-padding))]"
              : "translate-y-[calc(var(--el-overlay-padding))]"
          ),
          children: [
            ee("span", {
              className: "opacity-30",
              children: "Powered by"
            }),
            " ",
            ee("a", {
              href: e.value.override_link || "https://fusionmediayyc.com",
              className:
                "underline cursor-pointer pointer-events-auto focus-visible:outline-none opacity-30 hover:opacity-50 focus-visible:opacity-100 focus-visible:underline-offset-2",
              target: "_blank",
              children: "Fusion Media YYC"
            })
          ]
        });
  }
  const Oc = "items-start",
    Lc = "items-center",
    Rc = "items-end",
    Fc = "flex-col-reverse justify-end",
    zc = "flex-col justify-end",
    Uc = {
      "top-left": `${Fc} ${Oc}`,
      top: `${Fc} ${Lc}`,
      "top-right": `${Fc} ${Rc}`,
      "bottom-left": `${zc} ${Oc}`,
      bottom: `${zc} ${Lc}`,
      "bottom-right": `${zc} ${Rc}`
    },
    Bc = { display: "none" },
    Wc = He(function () {
      const e = hn(!1),
        t = Nr(),
        n = hn(!1),
        { error: r } = kr(),
        o = br(),
        a = vn(() => t.value.transcript_enabled || t.value.text_input_enabled),
        i = vn(() =>
          $n(
            "overlay !flex transition-opacity duration-200 data-hidden:opacity-0",
            Uc[t.value.placement]
          )
        );
      xn(() => {
        r.value &&
          (a.value ? ((n.value = !0), (e.value = !0)) : (n.value = !1));
      });
      const l = vn(() =>
          a.value || !r.value || n.value
            ? !o.termsAccepted.value && o.termsShown.value
              ? "terms"
              : "conversation"
            : "error"
        ),
        s = vn(() => "error" === l.value),
        c = vn(() => "terms" === l.value);
      return ee(x, {
        children: [
          ee(Jr, {
            initial: !1,
            active: vn(() => "conversation" === l.value),
            children: ee(Ur, {
              className: i,
              style: Bc,
              children: [
                a.value && ee(bc, { open: e }),
                ee(Ac, { expandable: a.value, expanded: e })
              ]
            })
          }),
          ee(Jr, {
            initial: !1,
            active: c,
            children: ee(Ur, { className: i, style: Bc, children: ee(Pc, {}) })
          }),
          ee(Jr, {
            initial: !1,
            active: s,
            children: ee(Ur, {
              className: i,
              style: Bc,
              children: ee(Dc, { sawError: n })
            })
          }),
          ee(Ur, { className: i, style: Bc, children: ee(Mc, {}) })
        ]
      });
    });
  function Hc(e) {
    return ee(or, {
      value: e,
      children: ee(lr, {
        children: ee(Er, {
          children: ee(yr, {
            children: ee(fr, {
              children: ee(vr, {
                children: ee(_r, {
                  children: ee(Cr, {
                    children: ee(Mr, {
                      children: ee(Rr, { children: [ee(Ir, {}), ee(Wc, {})] })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  }
  !(function (e = "fusion-media-yyc") {
    !(function (e, t, n, r) {
      function o() {
        var t = Reflect.construct(HTMLElement, [], o);
        return (
          (t._vdomComponent = e),
          (t._root =
            r && r.shadow ? t.attachShadow({ mode: r.mode || "open" }) : t),
          t
        );
      }
      ((o.prototype = Object.create(HTMLElement.prototype)).constructor = o),
        (o.prototype.connectedCallback = X),
        (o.prototype.attributeChangedCallback = Z),
        (o.prototype.disconnectedCallback = G),
        (n = n || e.observedAttributes || Object.keys(e.propTypes || {})),
        (o.observedAttributes = n),
        n.forEach(function (e) {
          Object.defineProperty(o.prototype, e, {
            get: function () {
              return this._vdom.props[e];
            },
            set: function (t) {
              this._vdom
                ? this.attributeChangedCallback(e, null, t)
                : (this._props || (this._props = {}),
                  (this._props[e] = t),
                  this.connectedCallback());
              var n = typeof t;
              (null != t &&
                "string" !== n &&
                "boolean" !== n &&
                "number" !== n) ||
                this.setAttribute(e, t);
            }
          });
        }),
        customElements.define(t || e.tagName || e.displayName || e.name, o);
    })(Hc, e, [...qn], { shadow: !0 });
  })();
})();
