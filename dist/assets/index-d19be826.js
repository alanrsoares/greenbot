var Ys = Object.defineProperty;
var er = (i, e, t) =>
  e in i
    ? Ys(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var Vt = (i, e, t) => (er(i, typeof e != "symbol" ? e + "" : e, t), t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = t(s);
    fetch(s.href, r);
  }
})();
function ee() {}
function H(i, e) {
  for (const t in e) i[t] = e[t];
  return i;
}
function as(i) {
  return i();
}
function Jt() {
  return Object.create(null);
}
function Se(i) {
  i.forEach(as);
}
function et(i) {
  return typeof i == "function";
}
function Q(i, e) {
  return i != i
    ? e == e
    : i !== e || (i && typeof i == "object") || typeof i == "function";
}
let rt;
function Xt(i, e) {
  return rt || (rt = document.createElement("a")), (rt.href = e), i === rt.href;
}
function tr(i) {
  return Object.keys(i).length === 0;
}
function us(i, ...e) {
  if (i == null) return ee;
  const t = i.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ft(i, e, t) {
  i.$$.on_destroy.push(us(e, t));
}
function x(i, e, t, n) {
  if (i) {
    const s = cs(i, e, t, n);
    return i[0](s);
  }
}
function cs(i, e, t, n) {
  return i[1] && n ? H(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function G(i, e, t, n) {
  if (i[2] && n) {
    const s = i[2](n(t));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const r = [],
        l = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < l; o += 1) r[o] = e.dirty[o] | s[o];
      return r;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function W(i, e, t, n, s, r) {
  if (s) {
    const l = cs(e, t, n, r);
    i.p(l, s);
  }
}
function V(i) {
  if (i.ctx.length > 32) {
    const e = [],
      t = i.ctx.length / 32;
    for (let n = 0; n < t; n++) e[n] = -1;
    return e;
  }
  return -1;
}
function ce(i) {
  const e = {};
  for (const t in i) t[0] !== "$" && (e[t] = i[t]);
  return e;
}
function ht(i, e) {
  const t = {};
  e = new Set(e);
  for (const n in i) !e.has(n) && n[0] !== "$" && (t[n] = i[n]);
  return t;
}
function nr(i) {
  return i && et(i.destroy) ? i.destroy : ee;
}
function k(i, e) {
  i.appendChild(e);
}
function L(i, e, t) {
  i.insertBefore(e, t || null);
}
function R(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function ve(i, e) {
  for (let t = 0; t < i.length; t += 1) i[t] && i[t].d(e);
}
function $(i) {
  return document.createElement(i);
}
function Re(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Y(i) {
  return document.createTextNode(i);
}
function B() {
  return Y(" ");
}
function se() {
  return Y("");
}
function we(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function _(i, e, t) {
  t == null
    ? i.removeAttribute(e)
    : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function dt(i, e) {
  for (const t in e) _(i, t, e[t]);
}
function sr(i) {
  return Array.from(i.childNodes);
}
function fe(i, e) {
  (e = "" + e), i.data !== e && (i.data = e);
}
function Yt(i, e) {
  i.value = e ?? "";
}
function ie(i, e, t) {
  i.classList[t ? "add" : "remove"](e);
}
function rr(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(i, t, n, e), s;
}
class ir {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, t, n = null) {
    this.e ||
      (this.is_svg
        ? (this.e = Re(t.nodeName))
        : (this.e = $(t.nodeType === 11 ? "TEMPLATE" : t.nodeName)),
      (this.t = t.tagName !== "TEMPLATE" ? t : t.content),
      this.c(e)),
      this.i(n);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes
      ));
  }
  i(e) {
    for (let t = 0; t < this.n.length; t += 1) L(this.t, this.n[t], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(R);
  }
}
function le(i, e) {
  return new i(e);
}
let We;
function Ge(i) {
  We = i;
}
function tt() {
  if (!We) throw new Error("Function called outside component initialization");
  return We;
}
function nt(i) {
  tt().$$.on_mount.push(i);
}
function zt(i) {
  tt().$$.on_destroy.push(i);
}
function lr() {
  const i = tt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const s = i.$$.callbacks[e];
    if (s) {
      const r = rr(e, t, { cancelable: n });
      return (
        s.slice().forEach((l) => {
          l.call(i, r);
        }),
        !r.defaultPrevented
      );
    }
    return !0;
  };
}
function fs(i, e) {
  return tt().$$.context.set(i, e), e;
}
function hs(i) {
  return tt().$$.context.get(i);
}
function or(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Be = [],
  Ve = [];
let Ze = [];
const St = [],
  ar = Promise.resolve();
let Tt = !1;
function ur() {
  Tt || ((Tt = !0), ar.then(ds));
}
function Ot(i) {
  Ze.push(i);
}
function Nt(i) {
  St.push(i);
}
const $t = new Set();
let Ue = 0;
function ds() {
  if (Ue !== 0) return;
  const i = We;
  do {
    try {
      for (; Ue < Be.length; ) {
        const e = Be[Ue];
        Ue++, Ge(e), cr(e.$$);
      }
    } catch (e) {
      throw ((Be.length = 0), (Ue = 0), e);
    }
    for (Ge(null), Be.length = 0, Ue = 0; Ve.length; ) Ve.pop()();
    for (let e = 0; e < Ze.length; e += 1) {
      const t = Ze[e];
      $t.has(t) || ($t.add(t), t());
    }
    Ze.length = 0;
  } while (Be.length);
  for (; St.length; ) St.pop()();
  (Tt = !1), $t.clear(), Ge(i);
}
function cr(i) {
  if (i.fragment !== null) {
    i.update(), Se(i.before_update);
    const e = i.dirty;
    (i.dirty = [-1]),
      i.fragment && i.fragment.p(i.ctx, e),
      i.after_update.forEach(Ot);
  }
}
function fr(i) {
  const e = [],
    t = [];
  Ze.forEach((n) => (i.indexOf(n) === -1 ? e.push(n) : t.push(n))),
    t.forEach((n) => n()),
    (Ze = e);
}
const ot = new Set();
let Me;
function Z() {
  Me = { r: 0, c: [], p: Me };
}
function K() {
  Me.r || Se(Me.c), (Me = Me.p);
}
function d(i, e) {
  i && i.i && (ot.delete(i), i.i(e));
}
function g(i, e, t, n) {
  if (i && i.o) {
    if (ot.has(i)) return;
    ot.add(i),
      Me.c.push(() => {
        ot.delete(i), n && (t && i.d(1), n());
      }),
      i.o(e);
  } else n && n();
}
function me(i, e) {
  const t = {},
    n = {},
    s = { $$scope: 1 };
  let r = i.length;
  for (; r--; ) {
    const l = i[r],
      o = e[r];
    if (o) {
      for (const a in l) a in o || (n[a] = 1);
      for (const a in o) s[a] || ((t[a] = o[a]), (s[a] = 1));
      i[r] = o;
    } else for (const a in l) s[a] = 1;
  }
  for (const l in n) l in t || (t[l] = void 0);
  return t;
}
function _e(i) {
  return typeof i == "object" && i !== null ? i : {};
}
function Ft(i, e, t) {
  const n = i.$$.props[e];
  n !== void 0 && ((i.$$.bound[n] = t), t(i.$$.ctx[n]));
}
function A(i) {
  i && i.c();
}
function O(i, e, t, n) {
  const { fragment: s, after_update: r } = i.$$;
  s && s.m(e, t),
    n ||
      Ot(() => {
        const l = i.$$.on_mount.map(as).filter(et);
        i.$$.on_destroy ? i.$$.on_destroy.push(...l) : Se(l),
          (i.$$.on_mount = []);
      }),
    r.forEach(Ot);
}
function E(i, e) {
  const t = i.$$;
  t.fragment !== null &&
    (fr(t.after_update),
    Se(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function hr(i, e) {
  i.$$.dirty[0] === -1 && (Be.push(i), ur(), i.$$.dirty.fill(0)),
    (i.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function U(i, e, t, n, s, r, l, o = [-1]) {
  const a = We;
  Ge(i);
  const u = (i.$$ = {
    fragment: null,
    ctx: [],
    props: r,
    update: ee,
    not_equal: s,
    bound: Jt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: Jt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root,
  });
  l && l(u.root);
  let c = !1;
  if (
    ((u.ctx = t
      ? t(i, e.props || {}, (m, h, ...f) => {
          const p = f.length ? f[0] : h;
          return (
            u.ctx &&
              s(u.ctx[m], (u.ctx[m] = p)) &&
              (!u.skip_bound && u.bound[m] && u.bound[m](p), c && hr(i, m)),
            h
          );
        })
      : []),
    u.update(),
    (c = !0),
    Se(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const m = sr(e.target);
      u.fragment && u.fragment.l(m), m.forEach(R);
    } else u.fragment && u.fragment.c();
    e.intro && d(i.$$.fragment),
      O(i, e.target, e.anchor, e.customElement),
      ds();
  }
  Ge(a);
}
class j {
  $destroy() {
    E(this, 1), (this.$destroy = ee);
  }
  $on(e, t) {
    if (!et(t)) return ee;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      n.push(t),
      () => {
        const s = n.indexOf(t);
        s !== -1 && n.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !tr(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
class Ke {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(e) {
    const t = { listener: e };
    return (
      this.listeners.add(t),
      this.onSubscribe(),
      () => {
        this.listeners.delete(t), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const Je = typeof window > "u" || "Deno" in window;
function ke() {}
function dr(i, e) {
  return typeof i == "function" ? i(e) : i;
}
function Et(i) {
  return typeof i == "number" && i >= 0 && i !== 1 / 0;
}
function ps(i, e) {
  return Math.max(i + (e || 0) - Date.now(), 0);
}
function xe(i, e, t) {
  return st(i)
    ? typeof e == "function"
      ? { ...t, queryKey: i, queryFn: e }
      : { ...e, queryKey: i }
    : i;
}
function pr(i, e, t) {
  return st(i)
    ? typeof e == "function"
      ? { ...t, mutationKey: i, mutationFn: e }
      : { ...e, mutationKey: i }
    : typeof i == "function"
    ? { ...e, mutationFn: i }
    : { ...i };
}
function Oe(i, e, t) {
  return st(i) ? [{ ...e, queryKey: i }, t] : [i || {}, e];
}
function en(i, e) {
  const {
    type: t = "all",
    exact: n,
    fetchStatus: s,
    predicate: r,
    queryKey: l,
    stale: o,
  } = i;
  if (st(l)) {
    if (n) {
      if (e.queryHash !== Qt(l, e.options)) return !1;
    } else if (!pt(e.queryKey, l)) return !1;
  }
  if (t !== "all") {
    const a = e.isActive();
    if ((t === "active" && !a) || (t === "inactive" && a)) return !1;
  }
  return !(
    (typeof o == "boolean" && e.isStale() !== o) ||
    (typeof s < "u" && s !== e.state.fetchStatus) ||
    (r && !r(e))
  );
}
function tn(i, e) {
  const { exact: t, fetching: n, predicate: s, mutationKey: r } = i;
  if (st(r)) {
    if (!e.options.mutationKey) return !1;
    if (t) {
      if (De(e.options.mutationKey) !== De(r)) return !1;
    } else if (!pt(e.options.mutationKey, r)) return !1;
  }
  return !(
    (typeof n == "boolean" && (e.state.status === "loading") !== n) ||
    (s && !s(e))
  );
}
function Qt(i, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || De)(i);
}
function De(i) {
  return JSON.stringify(i, (e, t) =>
    At(t)
      ? Object.keys(t)
          .sort()
          .reduce((n, s) => ((n[s] = t[s]), n), {})
      : t
  );
}
function pt(i, e) {
  return ms(i, e);
}
function ms(i, e) {
  return i === e
    ? !0
    : typeof i != typeof e
    ? !1
    : i && e && typeof i == "object" && typeof e == "object"
    ? !Object.keys(e).some((t) => !ms(i[t], e[t]))
    : !1;
}
function gs(i, e) {
  if (i === e) return i;
  const t = nn(i) && nn(e);
  if (t || (At(i) && At(e))) {
    const n = t ? i.length : Object.keys(i).length,
      s = t ? e : Object.keys(e),
      r = s.length,
      l = t ? [] : {};
    let o = 0;
    for (let a = 0; a < r; a++) {
      const u = t ? a : s[a];
      (l[u] = gs(i[u], e[u])), l[u] === i[u] && o++;
    }
    return n === r && o === n ? i : l;
  }
  return e;
}
function Pt(i, e) {
  if ((i && !e) || (e && !i)) return !1;
  for (const t in i) if (i[t] !== e[t]) return !1;
  return !0;
}
function nn(i) {
  return Array.isArray(i) && i.length === Object.keys(i).length;
}
function At(i) {
  if (!sn(i)) return !1;
  const e = i.constructor;
  if (typeof e > "u") return !0;
  const t = e.prototype;
  return !(!sn(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function sn(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function st(i) {
  return Array.isArray(i);
}
function _s(i) {
  return new Promise((e) => {
    setTimeout(e, i);
  });
}
function rn(i) {
  _s(0).then(i);
}
function mr() {
  if (typeof AbortController == "function") return new AbortController();
}
function qt(i, e, t) {
  return t.isDataEqual != null && t.isDataEqual(i, e)
    ? i
    : typeof t.structuralSharing == "function"
    ? t.structuralSharing(i, e)
    : t.structuralSharing !== !1
    ? gs(i, e)
    : e;
}
class gr extends Ke {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!Je && window.addEventListener) {
          const t = () => e();
          return (
            window.addEventListener("visibilitychange", t, !1),
            window.addEventListener("focus", t, !1),
            () => {
              window.removeEventListener("visibilitychange", t),
                window.removeEventListener("focus", t);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(e) {
    var t;
    (this.setup = e),
      (t = this.cleanup) == null || t.call(this),
      (this.cleanup = e((n) => {
        typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
      }));
  }
  setFocused(e) {
    (this.focused = e), e && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach(({ listener: e }) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const mt = new gr(),
  ln = ["online", "offline"];
class _r extends Ke {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!Je && window.addEventListener) {
          const t = () => e();
          return (
            ln.forEach((n) => {
              window.addEventListener(n, t, !1);
            }),
            () => {
              ln.forEach((n) => {
                window.removeEventListener(n, t);
              });
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(e) {
    var t;
    (this.setup = e),
      (t = this.cleanup) == null || t.call(this),
      (this.cleanup = e((n) => {
        typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
      }));
  }
  setOnline(e) {
    (this.online = e), e && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach(({ listener: e }) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const gt = new _r();
function br(i) {
  return Math.min(1e3 * 2 ** i, 3e4);
}
function kt(i) {
  return (i ?? "online") === "online" ? gt.isOnline() : !0;
}
class bs {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
}
function at(i) {
  return i instanceof bs;
}
function ys(i) {
  let e = !1,
    t = 0,
    n = !1,
    s,
    r,
    l;
  const o = new Promise((y, w) => {
      (r = y), (l = w);
    }),
    a = (y) => {
      n || (f(new bs(y)), i.abort == null || i.abort());
    },
    u = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    m = () => !mt.isFocused() || (i.networkMode !== "always" && !gt.isOnline()),
    h = (y) => {
      n ||
        ((n = !0),
        i.onSuccess == null || i.onSuccess(y),
        s == null || s(),
        r(y));
    },
    f = (y) => {
      n ||
        ((n = !0), i.onError == null || i.onError(y), s == null || s(), l(y));
    },
    p = () =>
      new Promise((y) => {
        (s = (w) => {
          const C = n || !m();
          return C && y(w), C;
        }),
          i.onPause == null || i.onPause();
      }).then(() => {
        (s = void 0), n || i.onContinue == null || i.onContinue();
      }),
    b = () => {
      if (n) return;
      let y;
      try {
        y = i.fn();
      } catch (w) {
        y = Promise.reject(w);
      }
      Promise.resolve(y)
        .then(h)
        .catch((w) => {
          var C, q;
          if (n) return;
          const S = (C = i.retry) != null ? C : 3,
            I = (q = i.retryDelay) != null ? q : br,
            v = typeof I == "function" ? I(t, w) : I,
            M =
              S === !0 ||
              (typeof S == "number" && t < S) ||
              (typeof S == "function" && S(t, w));
          if (e || !M) {
            f(w);
            return;
          }
          t++,
            i.onFail == null || i.onFail(t, w),
            _s(v)
              .then(() => {
                if (m()) return p();
              })
              .then(() => {
                e ? f(w) : b();
              });
        });
    };
  return (
    kt(i.networkMode) ? b() : p().then(b),
    {
      promise: o,
      cancel: a,
      continue: () => ((s == null ? void 0 : s()) ? o : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const Ut = console;
function yr() {
  let i = [],
    e = 0,
    t = (c) => {
      c();
    },
    n = (c) => {
      c();
    };
  const s = (c) => {
      let m;
      e++;
      try {
        m = c();
      } finally {
        e--, e || o();
      }
      return m;
    },
    r = (c) => {
      e
        ? i.push(c)
        : rn(() => {
            t(c);
          });
    },
    l =
      (c) =>
      (...m) => {
        r(() => {
          c(...m);
        });
      },
    o = () => {
      const c = i;
      (i = []),
        c.length &&
          rn(() => {
            n(() => {
              c.forEach((m) => {
                t(m);
              });
            });
          });
    };
  return {
    batch: s,
    batchCalls: l,
    schedule: r,
    setNotifyFunction: (c) => {
      t = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
  };
}
const ue = yr();
class ks {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Et(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      e ?? (Je ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class kr extends ks {
  constructor(e) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.cache = e.cache),
      (this.logger = e.logger || Ut),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.initialState = e.state || wr(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    (this.options = { ...this.defaultOptions, ...e }),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(e, t) {
    const n = qt(this.state.data, e, this.options);
    return (
      this.dispatch({
        data: n,
        type: "success",
        dataUpdatedAt: t == null ? void 0 : t.updatedAt,
        manual: t == null ? void 0 : t.manual,
      }),
      n
    );
  }
  setState(e, t) {
    this.dispatch({ type: "setState", state: e, setStateOptions: t });
  }
  cancel(e) {
    var t;
    const n = this.promise;
    return (
      (t = this.retryer) == null || t.cancel(e),
      n ? n.then(ke).catch(ke) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((e) => e.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((e) => e.getCurrentResult().isStale)
    );
  }
  isStaleByTime(e = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !ps(this.state.dataUpdatedAt, e)
    );
  }
  onFocus() {
    var e;
    const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    t && t.refetch({ cancelRefetch: !1 }),
      (e = this.retryer) == null || e.continue();
  }
  onOnline() {
    var e;
    const t = this.observers.find((n) => n.shouldFetchOnReconnect());
    t && t.refetch({ cancelRefetch: !1 }),
      (e = this.retryer) == null || e.continue();
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(e, t) {
    var n, s;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && t != null && t.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var r;
        return (r = this.retryer) == null || r.continueRetry(), this.promise;
      }
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const f = this.observers.find((p) => p.options.queryFn);
      f && this.setOptions(f.options);
    }
    Array.isArray(this.options.queryKey);
    const l = mr(),
      o = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      a = (f) => {
        Object.defineProperty(f, "signal", {
          enumerable: !0,
          get: () => {
            if (l) return (this.abortSignalConsumed = !0), l.signal;
          },
        });
      };
    a(o);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(o))
          : Promise.reject("Missing queryFn"),
      c = {
        fetchOptions: t,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: u,
      };
    if (
      (a(c),
      (n = this.options.behavior) == null || n.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((s = c.fetchOptions) == null ? void 0 : s.meta))
    ) {
      var m;
      this.dispatch({
        type: "fetch",
        meta: (m = c.fetchOptions) == null ? void 0 : m.meta,
      });
    }
    const h = (f) => {
      if (
        ((at(f) && f.silent) || this.dispatch({ type: "error", error: f }),
        !at(f))
      ) {
        var p, b, y, w;
        (p = (b = this.cache.config).onError) == null || p.call(b, f, this),
          (y = (w = this.cache.config).onSettled) == null ||
            y.call(w, this.state.data, f, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = ys({
        fn: c.fetchFn,
        abort: l == null ? void 0 : l.abort.bind(l),
        onSuccess: (f) => {
          var p, b, y, w;
          if (typeof f > "u") {
            h(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(f),
            (p = (b = this.cache.config).onSuccess) == null ||
              p.call(b, f, this),
            (y = (w = this.cache.config).onSettled) == null ||
              y.call(w, f, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: h,
        onFail: (f, p) => {
          this.dispatch({ type: "failed", failureCount: f, error: p });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(e) {
    const t = (n) => {
      var s, r;
      switch (e.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case "pause":
          return { ...n, fetchStatus: "paused" };
        case "continue":
          return { ...n, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (s = e.meta) != null ? s : null,
            fetchStatus: kt(this.options.networkMode) ? "fetching" : "paused",
            ...(!n.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...n,
            data: e.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (r = e.dataUpdatedAt) != null ? r : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case "error":
          const l = e.error;
          return at(l) && l.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...n,
                error: l,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: l,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...n, isInvalidated: !0 };
        case "setState":
          return { ...n, ...e.state };
      }
    };
    (this.state = t(this.state)),
      ue.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(e);
        }),
          this.cache.notify({ query: this, type: "updated", action: e });
      });
  }
}
function wr(i) {
  const e =
      typeof i.initialData == "function" ? i.initialData() : i.initialData,
    t = typeof e < "u",
    n = t
      ? typeof i.initialDataUpdatedAt == "function"
        ? i.initialDataUpdatedAt()
        : i.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: t ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: t ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class vr extends Ke {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(e, t, n) {
    var s;
    const r = t.queryKey,
      l = (s = t.queryHash) != null ? s : Qt(r, t);
    let o = this.get(l);
    return (
      o ||
        ((o = new kr({
          cache: this,
          logger: e.getLogger(),
          queryKey: r,
          queryHash: l,
          options: e.defaultQueryOptions(t),
          state: n,
          defaultOptions: e.getQueryDefaults(r),
        })),
        this.add(o)),
      o
    );
  }
  add(e) {
    this.queriesMap[e.queryHash] ||
      ((this.queriesMap[e.queryHash] = e),
      this.queries.push(e),
      this.notify({ type: "added", query: e }));
  }
  remove(e) {
    const t = this.queriesMap[e.queryHash];
    t &&
      (e.destroy(),
      (this.queries = this.queries.filter((n) => n !== e)),
      t === e && delete this.queriesMap[e.queryHash],
      this.notify({ type: "removed", query: e }));
  }
  clear() {
    ue.batch(() => {
      this.queries.forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.queriesMap[e];
  }
  getAll() {
    return this.queries;
  }
  find(e, t) {
    const [n] = Oe(e, t);
    return (
      typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => en(n, s))
    );
  }
  findAll(e, t) {
    const [n] = Oe(e, t);
    return Object.keys(n).length > 0
      ? this.queries.filter((s) => en(n, s))
      : this.queries;
  }
  notify(e) {
    ue.batch(() => {
      this.listeners.forEach(({ listener: t }) => {
        t(e);
      });
    });
  }
  onFocus() {
    ue.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    ue.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class $r extends ks {
  constructor(e) {
    super(),
      (this.defaultOptions = e.defaultOptions),
      (this.mutationId = e.mutationId),
      (this.mutationCache = e.mutationCache),
      (this.logger = e.logger || Ut),
      (this.observers = []),
      (this.state = e.state || ws()),
      this.setOptions(e.options),
      this.scheduleGc();
  }
  setOptions(e) {
    (this.options = { ...this.defaultOptions, ...e }),
      this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(e) {
    this.dispatch({ type: "setState", state: e });
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: e,
      }));
  }
  removeObserver(e) {
    (this.observers = this.observers.filter((t) => t !== e)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: e,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    var e, t;
    return (e = (t = this.retryer) == null ? void 0 : t.continue()) != null
      ? e
      : this.execute();
  }
  async execute() {
    const e = () => {
        var M;
        return (
          (this.retryer = ys({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (P, F) => {
              this.dispatch({ type: "failed", failureCount: P, error: F });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (M = this.options.retry) != null ? M : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      t = this.state.status === "loading";
    try {
      var n, s, r, l, o, a, u, c;
      if (!t) {
        var m, h, f, p;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((m = (h = this.mutationCache.config).onMutate) == null
            ? void 0
            : m.call(h, this.state.variables, this));
        const P = await ((f = (p = this.options).onMutate) == null
          ? void 0
          : f.call(p, this.state.variables));
        P !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: P,
            variables: this.state.variables,
          });
      }
      const M = await e();
      return (
        await ((n = (s = this.mutationCache.config).onSuccess) == null
          ? void 0
          : n.call(s, M, this.state.variables, this.state.context, this)),
        await ((r = (l = this.options).onSuccess) == null
          ? void 0
          : r.call(l, M, this.state.variables, this.state.context)),
        await ((o = (a = this.mutationCache.config).onSettled) == null
          ? void 0
          : o.call(a, M, null, this.state.variables, this.state.context, this)),
        await ((u = (c = this.options).onSettled) == null
          ? void 0
          : u.call(c, M, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: M }),
        M
      );
    } catch (M) {
      try {
        var b, y, w, C, q, S, I, v;
        throw (
          (await ((b = (y = this.mutationCache.config).onError) == null
            ? void 0
            : b.call(y, M, this.state.variables, this.state.context, this)),
          await ((w = (C = this.options).onError) == null
            ? void 0
            : w.call(C, M, this.state.variables, this.state.context)),
          await ((q = (S = this.mutationCache.config).onSettled) == null
            ? void 0
            : q.call(
                S,
                void 0,
                M,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((I = (v = this.options).onSettled) == null
            ? void 0
            : I.call(v, void 0, M, this.state.variables, this.state.context)),
          M)
        );
      } finally {
        this.dispatch({ type: "error", error: M });
      }
    }
  }
  dispatch(e) {
    const t = (n) => {
      switch (e.type) {
        case "failed":
          return { ...n, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...n, isPaused: !0 };
        case "continue":
          return { ...n, isPaused: !1 };
        case "loading":
          return {
            ...n,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !kt(this.options.networkMode),
            status: "loading",
            variables: e.variables,
          };
        case "success":
          return {
            ...n,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: e.error,
            failureCount: n.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...n, ...e.state };
      }
    };
    (this.state = t(this.state)),
      ue.batch(() => {
        this.observers.forEach((n) => {
          n.onMutationUpdate(e);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: e,
          });
      });
  }
}
function ws() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class Cr extends Ke {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(e, t, n) {
    const s = new $r({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(t),
      state: n,
      defaultOptions: t.mutationKey
        ? e.getMutationDefaults(t.mutationKey)
        : void 0,
    });
    return this.add(s), s;
  }
  add(e) {
    this.mutations.push(e), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    (this.mutations = this.mutations.filter((t) => t !== e)),
      this.notify({ type: "removed", mutation: e });
  }
  clear() {
    ue.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return (
      typeof e.exact > "u" && (e.exact = !0),
      this.mutations.find((t) => tn(e, t))
    );
  }
  findAll(e) {
    return this.mutations.filter((t) => tn(e, t));
  }
  notify(e) {
    ue.batch(() => {
      this.listeners.forEach(({ listener: t }) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    return (
      (this.resuming = ((e = this.resuming) != null ? e : Promise.resolve())
        .then(() => {
          const t = this.mutations.filter((n) => n.state.isPaused);
          return ue.batch(() =>
            t.reduce(
              (n, s) => n.then(() => s.continue().catch(ke)),
              Promise.resolve()
            )
          );
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function Rr() {
  return {
    onFetch: (i) => {
      i.fetchFn = () => {
        var e, t, n, s, r, l;
        const o =
            (e = i.fetchOptions) == null || (t = e.meta) == null
              ? void 0
              : t.refetchPage,
          a =
            (n = i.fetchOptions) == null || (s = n.meta) == null
              ? void 0
              : s.fetchMore,
          u = a == null ? void 0 : a.pageParam,
          c = (a == null ? void 0 : a.direction) === "forward",
          m = (a == null ? void 0 : a.direction) === "backward",
          h = ((r = i.state.data) == null ? void 0 : r.pages) || [],
          f = ((l = i.state.data) == null ? void 0 : l.pageParams) || [];
        let p = f,
          b = !1;
        const y = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => {
                var M;
                if ((M = i.signal) != null && M.aborted) b = !0;
                else {
                  var P;
                  (P = i.signal) == null ||
                    P.addEventListener("abort", () => {
                      b = !0;
                    });
                }
                return i.signal;
              },
            });
          },
          w = i.options.queryFn || (() => Promise.reject("Missing queryFn")),
          C = (v, M, P, F) => (
            (p = F ? [M, ...p] : [...p, M]), F ? [P, ...v] : [...v, P]
          ),
          q = (v, M, P, F) => {
            if (b) return Promise.reject("Cancelled");
            if (typeof P > "u" && !M && v.length) return Promise.resolve(v);
            const re = {
              queryKey: i.queryKey,
              pageParam: P,
              meta: i.options.meta,
            };
            y(re);
            const ye = w(re);
            return Promise.resolve(ye).then((Fe) => C(v, P, Fe, F));
          };
        let S;
        if (!h.length) S = q([]);
        else if (c) {
          const v = typeof u < "u",
            M = v ? u : on(i.options, h);
          S = q(h, v, M);
        } else if (m) {
          const v = typeof u < "u",
            M = v ? u : Lr(i.options, h);
          S = q(h, v, M, !0);
        } else {
          p = [];
          const v = typeof i.options.getNextPageParam > "u";
          S = (o && h[0] ? o(h[0], 0, h) : !0)
            ? q([], v, f[0])
            : Promise.resolve(C([], f[0], h[0]));
          for (let P = 1; P < h.length; P++)
            S = S.then((F) => {
              if (o && h[P] ? o(h[P], P, h) : !0) {
                const ye = v ? f[P] : on(i.options, F);
                return q(F, v, ye);
              }
              return Promise.resolve(C(F, f[P], h[P]));
            });
        }
        return S.then((v) => ({ pages: v, pageParams: p }));
      };
    },
  };
}
function on(i, e) {
  return i.getNextPageParam == null
    ? void 0
    : i.getNextPageParam(e[e.length - 1], e);
}
function Lr(i, e) {
  return i.getPreviousPageParam == null
    ? void 0
    : i.getPreviousPageParam(e[0], e);
}
class vs {
  constructor(e = {}) {
    (this.queryCache = e.queryCache || new vr()),
      (this.mutationCache = e.mutationCache || new Cr()),
      (this.logger = e.logger || Ut),
      (this.defaultOptions = e.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = mt.subscribe(() => {
          mt.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = gt.subscribe(() => {
          gt.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var e, t;
    this.mountCount--,
      this.mountCount === 0 &&
        ((e = this.unsubscribeFocus) == null || e.call(this),
        (this.unsubscribeFocus = void 0),
        (t = this.unsubscribeOnline) == null || t.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(e, t) {
    const [n] = Oe(e, t);
    return (n.fetchStatus = "fetching"), this.queryCache.findAll(n).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll({ ...e, fetching: !0 }).length;
  }
  getQueryData(e, t) {
    var n;
    return (n = this.queryCache.find(e, t)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e, t, n) {
    const s = xe(e, t, n),
      r = this.getQueryData(s.queryKey);
    return r ? Promise.resolve(r) : this.fetchQuery(s);
  }
  getQueriesData(e) {
    return this.getQueryCache()
      .findAll(e)
      .map(({ queryKey: t, state: n }) => {
        const s = n.data;
        return [t, s];
      });
  }
  setQueryData(e, t, n) {
    const s = this.queryCache.find(e),
      r = s == null ? void 0 : s.state.data,
      l = dr(t, r);
    if (typeof l > "u") return;
    const o = xe(e),
      a = this.defaultQueryOptions(o);
    return this.queryCache.build(this, a).setData(l, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return ue.batch(() =>
      this.getQueryCache()
        .findAll(e)
        .map(({ queryKey: s }) => [s, this.setQueryData(s, t, n)])
    );
  }
  getQueryState(e, t) {
    var n;
    return (n = this.queryCache.find(e, t)) == null ? void 0 : n.state;
  }
  removeQueries(e, t) {
    const [n] = Oe(e, t),
      s = this.queryCache;
    ue.batch(() => {
      s.findAll(n).forEach((r) => {
        s.remove(r);
      });
    });
  }
  resetQueries(e, t, n) {
    const [s, r] = Oe(e, t, n),
      l = this.queryCache,
      o = { type: "active", ...s };
    return ue.batch(
      () => (
        l.findAll(s).forEach((a) => {
          a.reset();
        }),
        this.refetchQueries(o, r)
      )
    );
  }
  cancelQueries(e, t, n) {
    const [s, r = {}] = Oe(e, t, n);
    typeof r.revert > "u" && (r.revert = !0);
    const l = ue.batch(() =>
      this.queryCache.findAll(s).map((o) => o.cancel(r))
    );
    return Promise.all(l).then(ke).catch(ke);
  }
  invalidateQueries(e, t, n) {
    const [s, r] = Oe(e, t, n);
    return ue.batch(() => {
      var l, o;
      if (
        (this.queryCache.findAll(s).forEach((u) => {
          u.invalidate();
        }),
        s.refetchType === "none")
      )
        return Promise.resolve();
      const a = {
        ...s,
        type:
          (l = (o = s.refetchType) != null ? o : s.type) != null ? l : "active",
      };
      return this.refetchQueries(a, r);
    });
  }
  refetchQueries(e, t, n) {
    const [s, r] = Oe(e, t, n),
      l = ue.batch(() =>
        this.queryCache
          .findAll(s)
          .filter((a) => !a.isDisabled())
          .map((a) => {
            var u;
            return a.fetch(void 0, {
              ...r,
              cancelRefetch:
                (u = r == null ? void 0 : r.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: s.refetchPage },
            });
          })
      );
    let o = Promise.all(l).then(ke);
    return (r != null && r.throwOnError) || (o = o.catch(ke)), o;
  }
  fetchQuery(e, t, n) {
    const s = xe(e, t, n),
      r = this.defaultQueryOptions(s);
    typeof r.retry > "u" && (r.retry = !1);
    const l = this.queryCache.build(this, r);
    return l.isStaleByTime(r.staleTime)
      ? l.fetch(r)
      : Promise.resolve(l.state.data);
  }
  prefetchQuery(e, t, n) {
    return this.fetchQuery(e, t, n).then(ke).catch(ke);
  }
  fetchInfiniteQuery(e, t, n) {
    const s = xe(e, t, n);
    return (s.behavior = Rr()), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, t, n) {
    return this.fetchInfiniteQuery(e, t, n).then(ke).catch(ke);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, t) {
    const n = this.queryDefaults.find((s) => De(e) === De(s.queryKey));
    n
      ? (n.defaultOptions = t)
      : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    if (!e) return;
    const t = this.queryDefaults.find((n) => pt(e, n.queryKey));
    return t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const n = this.mutationDefaults.find((s) => De(e) === De(s.mutationKey));
    n
      ? (n.defaultOptions = t)
      : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    if (!e) return;
    const t = this.mutationDefaults.find((n) => pt(e, n.mutationKey));
    return t == null ? void 0 : t.defaultOptions;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted) return e;
    const t = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
      ...e,
      _defaulted: !0,
    };
    return (
      !t.queryHash && t.queryKey && (t.queryHash = Qt(t.queryKey, t)),
      typeof t.refetchOnReconnect > "u" &&
        (t.refetchOnReconnect = t.networkMode !== "always"),
      typeof t.useErrorBoundary > "u" && (t.useErrorBoundary = !!t.suspense),
      t
    );
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted
      ? e
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
          ...e,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class Sr extends Ke {
  constructor(e, t) {
    super(),
      (this.client = e),
      (this.options = t),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(t);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.currentQuery.addObserver(this),
      an(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return It(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return It(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = new Set()),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(e, t) {
    const n = this.options,
      s = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(e)),
      Pt(n, this.options) ||
        this.client
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.currentQuery,
            observer: this,
          }),
      typeof this.options.enabled < "u" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey),
      this.updateQuery();
    const r = this.hasListeners();
    r && un(this.currentQuery, s, this.options, n) && this.executeFetch(),
      this.updateResult(t),
      r &&
        (this.currentQuery !== s ||
          this.options.enabled !== n.enabled ||
          this.options.staleTime !== n.staleTime) &&
        this.updateStaleTimeout();
    const l = this.computeRefetchInterval();
    r &&
      (this.currentQuery !== s ||
        this.options.enabled !== n.enabled ||
        l !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(l);
  }
  getOptimisticResult(e) {
    const t = this.client.getQueryCache().build(this.client, e);
    return this.createResult(t, e);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(e) {
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(n), e[n]),
        });
      }),
      t
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: e, ...t } = {}) {
    return this.fetch({ ...t, meta: { refetchPage: e } });
  }
  fetchOptimistic(e) {
    const t = this.client.defaultQueryOptions(e),
      n = this.client.getQueryCache().build(this.client, t);
    return (
      (n.isFetchingOptimistic = !0),
      n.fetch().then(() => this.createResult(n, t))
    );
  }
  fetch(e) {
    var t;
    return this.executeFetch({
      ...e,
      cancelRefetch: (t = e.cancelRefetch) != null ? t : !0,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(e) {
    this.updateQuery();
    let t = this.currentQuery.fetch(this.options, e);
    return (e != null && e.throwOnError) || (t = t.catch(ke)), t;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      Je || this.currentResult.isStale || !Et(this.options.staleTime))
    )
      return;
    const t = ps(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, t);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (e = this.options.refetchInterval) != null
      ? e
      : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = e),
      !(
        Je ||
        this.options.enabled === !1 ||
        !Et(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || mt.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(e, t) {
    const n = this.currentQuery,
      s = this.options,
      r = this.currentResult,
      l = this.currentResultState,
      o = this.currentResultOptions,
      a = e !== n,
      u = a ? e.state : this.currentQueryInitialState,
      c = a ? this.currentResult : this.previousQueryResult,
      { state: m } = e;
    let {
        dataUpdatedAt: h,
        error: f,
        errorUpdatedAt: p,
        fetchStatus: b,
        status: y,
      } = m,
      w = !1,
      C = !1,
      q;
    if (t._optimisticResults) {
      const P = this.hasListeners(),
        F = !P && an(e, t),
        re = P && un(e, n, t, s);
      (F || re) &&
        ((b = kt(e.options.networkMode) ? "fetching" : "paused"),
        h || (y = "loading")),
        t._optimisticResults === "isRestoring" && (b = "idle");
    }
    if (
      t.keepPreviousData &&
      !m.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      y !== "error"
    )
      (q = c.data), (h = c.dataUpdatedAt), (y = c.status), (w = !0);
    else if (t.select && typeof m.data < "u")
      if (
        r &&
        m.data === (l == null ? void 0 : l.data) &&
        t.select === this.selectFn
      )
        q = this.selectResult;
      else
        try {
          (this.selectFn = t.select),
            (q = t.select(m.data)),
            (q = qt(r == null ? void 0 : r.data, q, t)),
            (this.selectResult = q),
            (this.selectError = null);
        } catch (P) {
          this.selectError = P;
        }
    else q = m.data;
    if (typeof t.placeholderData < "u" && typeof q > "u" && y === "loading") {
      let P;
      if (
        r != null &&
        r.isPlaceholderData &&
        t.placeholderData === (o == null ? void 0 : o.placeholderData)
      )
        P = r.data;
      else if (
        ((P =
          typeof t.placeholderData == "function"
            ? t.placeholderData()
            : t.placeholderData),
        t.select && typeof P < "u")
      )
        try {
          (P = t.select(P)), (this.selectError = null);
        } catch (F) {
          this.selectError = F;
        }
      typeof P < "u" &&
        ((y = "success"),
        (q = qt(r == null ? void 0 : r.data, P, t)),
        (C = !0));
    }
    this.selectError &&
      ((f = this.selectError),
      (q = this.selectResult),
      (p = Date.now()),
      (y = "error"));
    const S = b === "fetching",
      I = y === "loading",
      v = y === "error";
    return {
      status: y,
      fetchStatus: b,
      isLoading: I,
      isSuccess: y === "success",
      isError: v,
      isInitialLoading: I && S,
      data: q,
      dataUpdatedAt: h,
      error: f,
      errorUpdatedAt: p,
      failureCount: m.fetchFailureCount,
      failureReason: m.fetchFailureReason,
      errorUpdateCount: m.errorUpdateCount,
      isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
      isFetchedAfterMount:
        m.dataUpdateCount > u.dataUpdateCount ||
        m.errorUpdateCount > u.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !I,
      isLoadingError: v && m.dataUpdatedAt === 0,
      isPaused: b === "paused",
      isPlaceholderData: C,
      isPreviousData: w,
      isRefetchError: v && m.dataUpdatedAt !== 0,
      isStale: jt(e, t),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(e) {
    const t = this.currentResult,
      n = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      Pt(n, t))
    )
      return;
    this.currentResult = n;
    const s = { cache: !0 },
      r = () => {
        if (!t) return !0;
        const { notifyOnChangeProps: l } = this.options;
        if (l === "all" || (!l && !this.trackedProps.size)) return !0;
        const o = new Set(l ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && o.add("error"),
          Object.keys(this.currentResult).some((a) => {
            const u = a;
            return this.currentResult[u] !== t[u] && o.has(u);
          })
        );
      };
    (e == null ? void 0 : e.listeners) !== !1 && r() && (s.listeners = !0),
      this.notify({ ...s, ...e });
  }
  updateQuery() {
    const e = this.client.getQueryCache().build(this.client, this.options);
    if (e === this.currentQuery) return;
    const t = this.currentQuery;
    (this.currentQuery = e),
      (this.currentQueryInitialState = e.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (t == null || t.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate(e) {
    const t = {};
    e.type === "success"
      ? (t.onSuccess = !e.manual)
      : e.type === "error" && !at(e.error) && (t.onError = !0),
      this.updateResult(t),
      this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    ue.batch(() => {
      if (e.onSuccess) {
        var t, n, s, r;
        (t = (n = this.options).onSuccess) == null ||
          t.call(n, this.currentResult.data),
          (s = (r = this.options).onSettled) == null ||
            s.call(r, this.currentResult.data, null);
      } else if (e.onError) {
        var l, o, a, u;
        (l = (o = this.options).onError) == null ||
          l.call(o, this.currentResult.error),
          (a = (u = this.options).onSettled) == null ||
            a.call(u, void 0, this.currentResult.error);
      }
      e.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        }),
        e.cache &&
          this.client
            .getQueryCache()
            .notify({
              query: this.currentQuery,
              type: "observerResultsUpdated",
            });
    });
  }
}
function Tr(i, e) {
  return (
    e.enabled !== !1 &&
    !i.state.dataUpdatedAt &&
    !(i.state.status === "error" && e.retryOnMount === !1)
  );
}
function an(i, e) {
  return Tr(i, e) || (i.state.dataUpdatedAt > 0 && It(i, e, e.refetchOnMount));
}
function It(i, e, t) {
  if (e.enabled !== !1) {
    const n = typeof t == "function" ? t(i) : t;
    return n === "always" || (n !== !1 && jt(i, e));
  }
  return !1;
}
function un(i, e, t, n) {
  return (
    t.enabled !== !1 &&
    (i !== e || n.enabled === !1) &&
    (!t.suspense || i.state.status !== "error") &&
    jt(i, t)
  );
}
function jt(i, e) {
  return i.isStaleByTime(e.staleTime);
}
let Or = class extends Ke {
  constructor(e, t) {
    super(),
      (this.client = e),
      this.setOptions(t),
      this.bindMethods(),
      this.updateResult();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(e) {
    var t;
    const n = this.options;
    (this.options = this.client.defaultMutationOptions(e)),
      Pt(n, this.options) ||
        this.client
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.currentMutation,
            observer: this,
          }),
      (t = this.currentMutation) == null || t.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.currentMutation) == null || e.removeObserver(this);
    }
  }
  onMutationUpdate(e) {
    this.updateResult();
    const t = { listeners: !0 };
    e.type === "success"
      ? (t.onSuccess = !0)
      : e.type === "error" && (t.onError = !0),
      this.notify(t);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    (this.currentMutation = void 0),
      this.updateResult(),
      this.notify({ listeners: !0 });
  }
  mutate(e, t) {
    return (
      (this.mutateOptions = t),
      this.currentMutation && this.currentMutation.removeObserver(this),
      (this.currentMutation = this.client
        .getMutationCache()
        .build(this.client, {
          ...this.options,
          variables: typeof e < "u" ? e : this.options.variables,
        })),
      this.currentMutation.addObserver(this),
      this.currentMutation.execute()
    );
  }
  updateResult() {
    const e = this.currentMutation ? this.currentMutation.state : ws(),
      t = {
        ...e,
        isLoading: e.status === "loading",
        isSuccess: e.status === "success",
        isError: e.status === "error",
        isIdle: e.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    this.currentResult = t;
  }
  notify(e) {
    ue.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (e.onSuccess) {
          var t, n, s, r;
          (t = (n = this.mutateOptions).onSuccess) == null ||
            t.call(
              n,
              this.currentResult.data,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (s = (r = this.mutateOptions).onSettled) == null ||
              s.call(
                r,
                this.currentResult.data,
                null,
                this.currentResult.variables,
                this.currentResult.context
              );
        } else if (e.onError) {
          var l, o, a, u;
          (l = (o = this.mutateOptions).onError) == null ||
            l.call(
              o,
              this.currentResult.error,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (a = (u = this.mutateOptions).onSettled) == null ||
              a.call(
                u,
                void 0,
                this.currentResult.error,
                this.currentResult.variables,
                this.currentResult.context
              );
        }
      }
      e.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        });
    });
  }
};
const $s = "$$_queryClient",
  Er = () => {
    const i = hs($s);
    if (!i)
      throw new Error(
        "No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?"
      );
    return i;
  },
  Pr = (i) => {
    fs($s, i);
  };
function wt() {
  return Er();
}
const je = [];
function Xe(i, e) {
  return { subscribe: Ar(i, e).subscribe };
}
function Ar(i, e = ee) {
  let t;
  const n = new Set();
  function s(o) {
    if (Q(i, o) && ((i = o), t)) {
      const a = !je.length;
      for (const u of n) u[1](), je.push(u, i);
      if (a) {
        for (let u = 0; u < je.length; u += 2) je[u][0](je[u + 1]);
        je.length = 0;
      }
    }
  }
  function r(o) {
    s(o(i));
  }
  function l(o, a = ee) {
    const u = [o, a];
    return (
      n.add(u),
      n.size === 1 && (t = e(s) || ee),
      o(i),
      () => {
        n.delete(u), n.size === 0 && t && (t(), (t = null));
      }
    );
  }
  return { set: s, update: r, subscribe: l };
}
function Cs(i, e, t) {
  const n = !Array.isArray(i),
    s = n ? [i] : i,
    r = e.length < 2;
  return Xe(t, (l) => {
    let o = !1;
    const a = [];
    let u = 0,
      c = ee;
    const m = () => {
        if (u) return;
        c();
        const f = e(n ? a[0] : a, l);
        r ? l(f) : (c = et(f) ? f : ee);
      },
      h = s.map((f, p) =>
        us(
          f,
          (b) => {
            (a[p] = b), (u &= ~(1 << p)), o && m();
          },
          () => {
            u |= 1 << p;
          }
        )
      );
    return (
      (o = !0),
      m(),
      function () {
        Se(h), c(), (o = !1);
      }
    );
  });
}
function qr(i, e) {
  const t = wt(),
    n = t.defaultQueryOptions(i);
  n._optimisticResults = "optimistic";
  let s = new e(t, n);
  n.onError && (n.onError = ue.batchCalls(n.onError)),
    n.onSuccess && (n.onSuccess = ue.batchCalls(n.onSuccess)),
    n.onSettled && (n.onSettled = ue.batchCalls(n.onSettled)),
    Xe(s).subscribe((o) => {
      (s = o), s.setOptions(n, { listeners: !1 });
    });
  const r = Xe(s.getCurrentResult(), (o) => s.subscribe(ue.batchCalls(o))),
    { subscribe: l } = Cs(
      r,
      (o) => (
        (o = s.getOptimisticResult(n)),
        n.notifyOnChangeProps ? o : s.trackResult(o)
      )
    );
  return { subscribe: l };
}
function Rs(i, e, t) {
  const n = xe(i, e, t);
  return qr(n, Sr);
}
function Ir(i, e, t) {
  const n = pr(i, e, t),
    s = wt();
  let r = new Or(s, n),
    l;
  Xe(r).subscribe((u) => {
    (r = u),
      (l = (c, m) => {
        r.mutate(c, m).catch(Mr);
      }),
      r.setOptions(n);
  });
  const o = Xe(r.getCurrentResult(), (u) =>
      r.subscribe(ue.batchCalls((c) => u(c)))
    ),
    { subscribe: a } = Cs(o, (u) => ({
      ...u,
      mutate: l,
      mutateAsync: u.mutate,
    }));
  return { subscribe: a };
}
function Mr() {}
function Dr(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[1], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, [r]) {
      n &&
        n.p &&
        (!e || r & 2) &&
        W(n, t, s, s[1], e ? G(t, s[1], r, null) : V(s[1]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function zr(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { client: r = new vs() } = e;
  return (
    nt(() => {
      r.mount();
    }),
    Pr(r),
    zt(() => {
      r.unmount();
    }),
    (i.$$set = (l) => {
      "client" in l && t(0, (r = l.client)),
        "$$scope" in l && t(1, (s = l.$$scope));
    }),
    [r, s, n]
  );
}
class Nr extends j {
  constructor(e) {
    super(), U(this, e, zr, Dr, Q, { client: 0 });
  }
}
const Ls = (i) => ({
    version: i.replace(/[\^~]/, ""),
    qualifier: isNaN(Number(i[0])) ? i[0] : void 0,
  }),
  Ss = (i, e) => Ls(i).version === e,
  cn = (i, e) => (e.length <= i ? e : e.slice(0, i).concat("…")),
  Ct = 10,
  Ye = {
    package: ["package"],
    bundlephobiaReport: (i) => ["bundlephobiaReport", i],
  };
class fn extends Error {
  constructor(e, t, n) {
    const s = e.status || e.status === 0 ? e.status : "",
      r = e.statusText || "",
      l = `${s} ${r}`.trim(),
      o = l ? `status code ${l}` : "an unknown error";
    super(`Request failed with ${o}`),
      Object.defineProperty(this, "response", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "request", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "options", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.name = "HTTPError"),
      (this.response = e),
      (this.request = t),
      (this.options = n);
  }
}
class Ts extends Error {
  constructor(e) {
    super("Request timed out"),
      Object.defineProperty(this, "request", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.name = "TimeoutError"),
      (this.request = e);
  }
}
const ut = (i) => i !== null && typeof i == "object",
  it = (...i) => {
    for (const e of i)
      if ((!ut(e) || Array.isArray(e)) && typeof e < "u")
        throw new TypeError("The `options` argument must be an object");
    return Bt({}, ...i);
  },
  Os = (i = {}, e = {}) => {
    const t = new globalThis.Headers(i),
      n = e instanceof globalThis.Headers,
      s = new globalThis.Headers(e);
    for (const [r, l] of s.entries())
      (n && l === "undefined") || l === void 0 ? t.delete(r) : t.set(r, l);
    return t;
  },
  Bt = (...i) => {
    let e = {},
      t = {};
    for (const n of i)
      if (Array.isArray(n)) Array.isArray(e) || (e = []), (e = [...e, ...n]);
      else if (ut(n)) {
        for (let [s, r] of Object.entries(n))
          ut(r) && s in e && (r = Bt(e[s], r)), (e = { ...e, [s]: r });
        ut(n.headers) && ((t = Os(t, n.headers)), (e.headers = t));
      }
    return e;
  },
  Fr = (() => {
    let i = !1,
      e = !1;
    const t = typeof globalThis.ReadableStream == "function",
      n = typeof globalThis.Request == "function";
    return (
      t &&
        n &&
        (e = new globalThis.Request("https://a.com", {
          body: new globalThis.ReadableStream(),
          method: "POST",
          get duplex() {
            return (i = !0), "half";
          },
        }).headers.has("Content-Type")),
      i && !e
    );
  })(),
  Qr = typeof globalThis.AbortController == "function",
  Ur = typeof globalThis.ReadableStream == "function",
  jr = typeof globalThis.FormData == "function",
  Es = ["get", "post", "put", "patch", "head", "delete"],
  Br = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  Rt = 2147483647,
  Ps = Symbol("stop"),
  Zr = (i) => (Es.includes(i) ? i.toUpperCase() : i),
  Kr = ["get", "put", "head", "delete", "options", "trace"],
  Hr = [408, 413, 429, 500, 502, 503, 504],
  As = [413, 429, 503],
  hn = {
    limit: 2,
    methods: Kr,
    statusCodes: Hr,
    afterStatusCodes: As,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
  },
  xr = (i = {}) => {
    if (typeof i == "number") return { ...hn, limit: i };
    if (i.methods && !Array.isArray(i.methods))
      throw new Error("retry.methods must be an array");
    if (i.statusCodes && !Array.isArray(i.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...hn, ...i, afterStatusCodes: As };
  };
async function Gr(i, e, t) {
  return new Promise((n, s) => {
    const r = setTimeout(() => {
      e && e.abort(), s(new Ts(i));
    }, t.timeout);
    t.fetch(i)
      .then(n)
      .catch(s)
      .then(() => {
        clearTimeout(r);
      });
  });
}
const Wr = !!globalThis.DOMException;
function dn(i) {
  if (Wr)
    return new DOMException(
      (i == null ? void 0 : i.reason) ?? "The operation was aborted.",
      "AbortError"
    );
  const e = new Error(
    (i == null ? void 0 : i.reason) ?? "The operation was aborted."
  );
  return (e.name = "AbortError"), e;
}
async function Vr(i, { signal: e }) {
  return new Promise((t, n) => {
    if (e) {
      if (e.aborted) {
        n(dn(e));
        return;
      }
      e.addEventListener("abort", s, { once: !0 });
    }
    function s() {
      n(dn(e)), clearTimeout(r);
    }
    const r = setTimeout(() => {
      e == null || e.removeEventListener("abort", s), t();
    }, i);
  });
}
class _t {
  static create(e, t) {
    const n = new _t(e, t),
      s = async () => {
        if (n._options.timeout > Rt)
          throw new RangeError(
            `The \`timeout\` option cannot be greater than ${Rt}`
          );
        await Promise.resolve();
        let o = await n._fetch();
        for (const a of n._options.hooks.afterResponse) {
          const u = await a(
            n.request,
            n._options,
            n._decorateResponse(o.clone())
          );
          u instanceof globalThis.Response && (o = u);
        }
        if ((n._decorateResponse(o), !o.ok && n._options.throwHttpErrors)) {
          let a = new fn(o, n.request, n._options);
          for (const u of n._options.hooks.beforeError) a = await u(a);
          throw a;
        }
        if (n._options.onDownloadProgress) {
          if (typeof n._options.onDownloadProgress != "function")
            throw new TypeError(
              "The `onDownloadProgress` option must be a function"
            );
          if (!Ur)
            throw new Error(
              "Streams are not supported in your environment. `ReadableStream` is missing."
            );
          return n._stream(o.clone(), n._options.onDownloadProgress);
        }
        return o;
      },
      l = n._options.retry.methods.includes(n.request.method.toLowerCase())
        ? n._retry(s)
        : s();
    for (const [o, a] of Object.entries(Br))
      l[o] = async () => {
        n.request.headers.set("accept", n.request.headers.get("accept") || a);
        const c = (await l).clone();
        if (o === "json") {
          if (
            c.status === 204 ||
            (await c.clone().arrayBuffer()).byteLength === 0
          )
            return "";
          if (t.parseJson) return t.parseJson(await c.text());
        }
        return c[o]();
      };
    return l;
  }
  constructor(e, t = {}) {
    if (
      (Object.defineProperty(this, "request", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "abortController", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "_retryCount", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0,
      }),
      Object.defineProperty(this, "_input", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "_options", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this._input = e),
      (this._options = {
        credentials: this._input.credentials || "same-origin",
        ...t,
        headers: Os(this._input.headers, t.headers),
        hooks: Bt(
          {
            beforeRequest: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: [],
          },
          t.hooks
        ),
        method: Zr(t.method ?? this._input.method),
        prefixUrl: String(t.prefixUrl || ""),
        retry: xr(t.retry),
        throwHttpErrors: t.throwHttpErrors !== !1,
        timeout: typeof t.timeout > "u" ? 1e4 : t.timeout,
        fetch: t.fetch ?? globalThis.fetch.bind(globalThis),
      }),
      typeof this._input != "string" &&
        !(
          this._input instanceof URL ||
          this._input instanceof globalThis.Request
        ))
    )
      throw new TypeError("`input` must be a string, URL, or Request");
    if (this._options.prefixUrl && typeof this._input == "string") {
      if (this._input.startsWith("/"))
        throw new Error(
          "`input` must not begin with a slash when using `prefixUrl`"
        );
      this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"),
        (this._input = this._options.prefixUrl + this._input);
    }
    if (Qr) {
      if (
        ((this.abortController = new globalThis.AbortController()),
        this._options.signal)
      ) {
        const n = this._options.signal;
        this._options.signal.addEventListener("abort", () => {
          this.abortController.abort(n.reason);
        });
      }
      this._options.signal = this.abortController.signal;
    }
    if (
      (Fr && (this._options.duplex = "half"),
      (this.request = new globalThis.Request(this._input, this._options)),
      this._options.searchParams)
    ) {
      const s =
          "?" +
          (typeof this._options.searchParams == "string"
            ? this._options.searchParams.replace(/^\?/, "")
            : new URLSearchParams(this._options.searchParams).toString()),
        r = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, s);
      ((jr && this._options.body instanceof globalThis.FormData) ||
        this._options.body instanceof URLSearchParams) &&
        !(this._options.headers && this._options.headers["content-type"]) &&
        this.request.headers.delete("content-type"),
        (this.request = new globalThis.Request(
          new globalThis.Request(r, { ...this.request }),
          this._options
        ));
    }
    this._options.json !== void 0 &&
      ((this._options.body = JSON.stringify(this._options.json)),
      this.request.headers.set(
        "content-type",
        this._options.headers.get("content-type") ?? "application/json"
      ),
      (this.request = new globalThis.Request(this.request, {
        body: this._options.body,
      })));
  }
  _calculateRetryDelay(e) {
    if (
      (this._retryCount++,
      this._retryCount < this._options.retry.limit && !(e instanceof Ts))
    ) {
      if (e instanceof fn) {
        if (!this._options.retry.statusCodes.includes(e.response.status))
          return 0;
        const n = e.response.headers.get("Retry-After");
        if (
          n &&
          this._options.retry.afterStatusCodes.includes(e.response.status)
        ) {
          let s = Number(n);
          return (
            Number.isNaN(s) ? (s = Date.parse(n) - Date.now()) : (s *= 1e3),
            typeof this._options.retry.maxRetryAfter < "u" &&
            s > this._options.retry.maxRetryAfter
              ? 0
              : s
          );
        }
        if (e.response.status === 413) return 0;
      }
      const t = 0.3;
      return Math.min(
        this._options.retry.backoffLimit,
        t * 2 ** (this._retryCount - 1) * 1e3
      );
    }
    return 0;
  }
  _decorateResponse(e) {
    return (
      this._options.parseJson &&
        (e.json = async () => this._options.parseJson(await e.text())),
      e
    );
  }
  async _retry(e) {
    try {
      return await e();
    } catch (t) {
      const n = Math.min(this._calculateRetryDelay(t), Rt);
      if (n !== 0 && this._retryCount > 0) {
        await Vr(n, { signal: this._options.signal });
        for (const s of this._options.hooks.beforeRetry)
          if (
            (await s({
              request: this.request,
              options: this._options,
              error: t,
              retryCount: this._retryCount,
            })) === Ps
          )
            return;
        return this._retry(e);
      }
      throw t;
    }
  }
  async _fetch() {
    for (const e of this._options.hooks.beforeRequest) {
      const t = await e(this.request, this._options);
      if (t instanceof Request) {
        this.request = t;
        break;
      }
      if (t instanceof Response) return t;
    }
    return this._options.timeout === !1
      ? this._options.fetch(this.request.clone())
      : Gr(this.request.clone(), this.abortController, this._options);
  }
  _stream(e, t) {
    const n = Number(e.headers.get("content-length")) || 0;
    let s = 0;
    return e.status === 204
      ? (t &&
          t(
            { percent: 1, totalBytes: n, transferredBytes: s },
            new Uint8Array()
          ),
        new globalThis.Response(null, {
          status: e.status,
          statusText: e.statusText,
          headers: e.headers,
        }))
      : new globalThis.Response(
          new globalThis.ReadableStream({
            async start(r) {
              const l = e.body.getReader();
              t &&
                t(
                  { percent: 0, transferredBytes: 0, totalBytes: n },
                  new Uint8Array()
                );
              async function o() {
                const { done: a, value: u } = await l.read();
                if (a) {
                  r.close();
                  return;
                }
                if (t) {
                  s += u.byteLength;
                  const c = n === 0 ? 0 : s / n;
                  t({ percent: c, transferredBytes: s, totalBytes: n }, u);
                }
                r.enqueue(u), await o();
              }
              await o();
            },
          }),
          { status: e.status, statusText: e.statusText, headers: e.headers }
        );
  }
}
/*! MIT License © Sindre Sorhus */ const Mt = (i) => {
    const e = (t, n) => _t.create(t, it(i, n));
    for (const t of Es) e[t] = (n, s) => _t.create(n, it(i, s, { method: t }));
    return (
      (e.create = (t) => Mt(it(t))),
      (e.extend = (t) => Mt(it(i, t))),
      (e.stop = Ps),
      e
    );
  },
  Jr = Mt(),
  qs = Jr,
  Is = qs.create({ prefixUrl: "http://localhost:5001/" }),
  Xr = qs.create({ prefixUrl: "https://bundlephobia.com/" });
function Yr() {
  return Is.get("package").json();
}
function ei(i) {
  return Is.post("upgrade-packages", { json: i }).json();
}
function ti(i) {
  return Xr.get(`api/size?package=${i}`).json();
}
const Ms = (i) => Ir(ei, i),
  Ds = (i) => (e) => {
    const t = structuredClone(e);
    for (let n of i) {
      const { qualifier: s } = Ls(n.version),
        r = `${s}${n.latest}`;
      t.dependencies &&
        n.name in t.dependencies &&
        (console.log("updating dependency", n.name, "to", r),
        (t.dependencies[n.name] = r)),
        t.devDependencies &&
          n.name in t.devDependencies &&
          (console.log("updating devDependency", n.name, "to", r),
          (t.devDependencies[n.name] = r));
    }
    return t;
  },
  ni = () => Rs(Ye.package, Yr),
  si = (i) => Rs(Ye.bundlephobiaReport(i), () => ti(i), { enabled: !!i });
function ri(i) {
  nt(() => {
    window.addEventListener("keydown", i);
  }),
    zt(() => {
      window.removeEventListener("keydown", i);
    });
}
function ii(i) {
  let e, t, n, s, r, l;
  return {
    c() {
      (e = Re("svg")),
        (t = Re("g")),
        (n = Re("g")),
        (s = Re("path")),
        (l = Re("path")),
        _(s, "d", (r = pn[i[0]])),
        _(
          l,
          "d",
          "M50,20 C71.4336483,20 81.3822646,28.613774 86.0000023,36.6100918 L86,11.9417476 L86,10 L90,10 L90,11.9417476 L90,58.0582524 L90,59.0291262 L90,70 C90,70 90,90 50,90 C10,90 10,70 10,70 L10,59.0291262 L10,58.0582524 L10,11.9417476 L10,10 L14,10 L14,11.9417476 L14,36.6100878 C18.6177354,28.613774 28.5663517,20 50,20 Z M20,60 C20,51.7157288 26.7081139,45 35.0050808,45 L64.9949192,45 C73.2819965,45 80,51.7139073 80,60 C80,68.2842712 73.2918861,75 64.9949192,75 L35.0050808,75 C26.7180035,75 20,68.2860927 20,60 Z M14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 L14,10 Z M90,10 C90,8.8954305 89.1045695,8 88,8 C86.8954305,8 86,8.8954305 86,10 L90,10 Z"
        ),
        _(n, "fill", "currentColor"),
        _(t, "stroke", "none"),
        _(t, "stroke-width", "1"),
        _(t, "fill", "none"),
        _(t, "fill-rule", "evenodd"),
        _(e, "xmlns", "http://www.w3.org/2000/svg"),
        _(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        _(e, "viewBox", "0 0 100 125");
    },
    m(o, a) {
      L(o, e, a), k(e, t), k(t, n), k(n, s), k(n, l);
    },
    p(o, [a]) {
      a & 1 && r !== (r = pn[o[0]]) && _(s, "d", r);
    },
    i: ee,
    o: ee,
    d(o) {
      o && R(e);
    },
  };
}
const pn = {
  angry:
    "M31.8382901,59.4644187 L38.8382901,62.4644187 L40.6765801,63.2522573 L42.2522573,59.5756772 L40.4139673,58.7878386 L33.4139673,55.7878386 L31.5756772,55 L30,58.6765801 L31.8382901,59.4644187 Z M68.4139673,59.4644187 L61.4139673,62.4644187 L59.5756772,63.2522573 L58,59.5756772 L59.8382901,58.7878386 L66.8382901,55.7878386 L68.6765801,55 L70.2522573,58.6765801 L68.4139673,59.4644187 Z",
  asleep:
    "M32.1818182,62 L39.8181818,62 L42,62 L42,58 L39.8181818,58 L32.1818182,58 L30,58 L30,62 L32.1818182,62 Z M60,62 L68,62 L70,62 L70,58 L68,58 L60,58 L58,58 L58,62 L60,62 Z",
  awake:
    "M35,62 L35,62 C36.1045695,62 37,61.1045695 37,60 C37,58.8954305 36.1045695,58 35,58 C33.8954305,58 33,58.8954305 33,60 C33,61.1045695 33.8954305,62 35,62 L35,62 Z M35,66 C31.6862915,66 29,63.3137085 29,60 C29,56.6862915 31.6862915,54 35,54 C38.3137085,54 41,56.6862915 41,60 C41,63.3137085 38.3137085,66 35,66 Z M65,62 C66.1045695,62 67,61.1045695 67,60 C67,58.8954305 66.1045695,58 65,58 C63.8954305,58 63,58.8954305 63,60 C63,61.1045695 63.8954305,62 65,62 Z M65,66 L65,66 C61.6862915,66 59,63.3137085 59,60 C59,56.6862915 61.6862915,54 65,54 C68.3137085,54 71,56.6862915 71,60 C71,63.3137085 68.3137085,66 65,66 L65,66 Z",
  happy:
    "M33.3832069,61.2316055 C33.4663305,61.1252515 33.7052431,60.8852671 34.0606164,60.6356114 C34.613312,60.2473334 35.2172668,60.0168253 35.8618908,59.9992577 L35.7533604,59.9992696 C36.4066289,60.0169293 37.0106683,60.2470018 37.5592314,60.6337226 C37.910109,60.881081 38.144039,61.1181155 38.2235934,61.221285 L39.4448784,62.8050978 L42.612504,60.3625278 L41.391219,58.778715 C41.0848685,58.3814269 40.5779442,57.8677752 39.8639741,57.3644473 C38.7121463,56.5524427 37.3707855,56.0415318 35.861452,56.0007304 L35.7529217,56.0007423 C34.2523726,56.0416358 32.9148757,56.5521111 31.7612415,57.3625585 C31.0480478,57.8635891 30.5396267,58.374291 30.2316055,58.7683945 L29,60.3441952 L32.1516014,62.8074062 L33.3832069,61.2316055 Z M61.3832069,61.2316055 C61.4663305,61.1252515 61.7052431,60.8852671 62.0606164,60.6356114 C62.613312,60.2473334 63.2172668,60.0168253 63.8618908,59.9992577 L63.7533604,59.9992696 C64.4066289,60.0169293 65.0106683,60.2470018 65.5592314,60.6337226 C65.910109,60.881081 66.144039,61.1181155 66.2235934,61.221285 L67.4448784,62.8050978 L70.612504,60.3625278 L69.391219,58.778715 C69.0848685,58.3814269 68.5779442,57.8677752 67.8639741,57.3644473 C66.7121463,56.5524427 65.3707855,56.0415318 63.861452,56.0007304 L63.7529217,56.0007423 C62.2523726,56.0416358 60.9148757,56.5521111 59.7612415,57.3625585 C59.0480478,57.8635891 58.5396267,58.374291 58.2316055,58.7683945 L57,60.3441952 L60.1516014,62.8074062 L61.3832069,61.2316055 Z",
  dead: "M61.1715729,60 L59.7573593,58.5857864 L58.3431458,57.1715729 L61.1715729,54.3431458 L62.5857864,55.7573593 L64,57.1715729 L65.4142136,55.7573593 L66.8284271,54.3431458 L69.6568542,57.1715729 L68.2426407,58.5857864 L66.8284271,60 L68.2426407,61.4142136 L69.6568542,62.8284271 L66.8284271,65.6568542 L65.4142136,64.2426407 L64,62.8284271 L62.5857864,64.2426407 L61.1715729,65.6568542 L58.3431458,62.8284271 L59.7573593,61.4142136 L61.1715729,60 Z M33.1715729,60 L31.7573593,58.5857864 L30.3431458,57.1715729 L33.1715729,54.3431458 L34.5857864,55.7573593 L36,57.1715729 L37.4142136,55.7573593 L38.8284271,54.3431458 L41.6568542,57.1715729 L40.2426407,58.5857864 L38.8284271,60 L40.2426407,61.4142136 L41.6568542,62.8284271 L38.8284271,65.6568542 L37.4142136,64.2426407 L36,62.8284271 L34.5857864,64.2426407 L33.1715729,65.6568542 L30.3431458,62.8284271 L31.7573593,61.4142136 L33.1715729,60 Z",
};
function li(i, e, t) {
  let { mood: n = "awake" } = e;
  return (
    (i.$$set = (s) => {
      "mood" in s && t(0, (n = s.mood));
    }),
    [n]
  );
}
class oi extends j {
  constructor(e) {
    super(), U(this, e, li, ii, Q, { mood: 0 });
  }
}
const { isArray: ai } = Array;
function zs(i, e) {
  if (arguments.length === 1) return (t) => zs(i, t);
  if (e) return e[i];
}
function ui(i, e) {
  const t = {},
    n = {};
  return (
    Object.entries(e).forEach(([s, r]) => {
      i(r, s) ? (t[s] = r) : (n[s] = r);
    }),
    [t, n]
  );
}
function ci(i, e, t = !1) {
  const n = [],
    s = [];
  let r = -1;
  for (; r++ < e.length - 1; )
    (t ? i(e[r], r) : i(e[r])) ? n.push(e[r]) : s.push(e[r]);
  return [n, s];
}
function Ns(i, e) {
  return arguments.length === 1 ? (t) => Ns(i, t) : ai(e) ? ci(i, e) : ui(i, e);
}
function Dt(i, e) {
  if (arguments.length === 1) return (s) => Dt(i, s);
  if (Number.isNaN(Number(i)) || Number.isNaN(Number(e)))
    throw new TypeError("Both arguments to range must be numbers");
  if (e < i) return [];
  const t = e - i,
    n = Array(t);
  for (let s = 0; s < t; s++) n[s] = i + s;
  return n;
}
const mn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
function gn(i, e, t) {
  const n = i.slice();
  return (n[10] = e[t][0]), (n[11] = e[t][1]), n;
}
function Lt(i) {
  let e,
    t = [i[11]],
    n = {};
  for (let s = 0; s < t.length; s += 1) n = H(n, t[s]);
  return {
    c() {
      (e = Re(i[10])), dt(e, n);
    },
    m(s, r) {
      L(s, e, r);
    },
    p(s, r) {
      dt(e, (n = me(t, [r & 32 && s[11]])));
    },
    d(s) {
      s && R(e);
    },
  };
}
function _n(i) {
  let e = i[10],
    t,
    n = i[10] && Lt(i);
  return {
    c() {
      n && n.c(), (t = se());
    },
    m(s, r) {
      n && n.m(s, r), L(s, t, r);
    },
    p(s, r) {
      s[10]
        ? e
          ? Q(e, s[10])
            ? (n.d(1), (n = Lt(s)), (e = s[10]), n.c(), n.m(t.parentNode, t))
            : n.p(s, r)
          : ((n = Lt(s)), (e = s[10]), n.c(), n.m(t.parentNode, t))
        : e && (n.d(1), (n = null), (e = s[10]));
    },
    d(s) {
      s && R(t), n && n.d(s);
    },
  };
}
function fi(i) {
  let e,
    t,
    n,
    s,
    r,
    l = i[5],
    o = [];
  for (let h = 0; h < l.length; h += 1) o[h] = _n(gn(i, l, h));
  const a = i[9].default,
    u = x(a, i, i[8], null);
  let c = [
      mn,
      i[6],
      { width: i[2] },
      { height: i[2] },
      { stroke: i[1] },
      {
        "stroke-width": (n = i[4] ? (Number(i[3]) * 24) / Number(i[2]) : i[3]),
      },
      { class: (s = `lucide-icon lucide lucide-${i[0]} ${i[7].class ?? ""}`) },
    ],
    m = {};
  for (let h = 0; h < c.length; h += 1) m = H(m, c[h]);
  return {
    c() {
      e = Re("svg");
      for (let h = 0; h < o.length; h += 1) o[h].c();
      (t = se()), u && u.c(), dt(e, m);
    },
    m(h, f) {
      L(h, e, f);
      for (let p = 0; p < o.length; p += 1) o[p] && o[p].m(e, null);
      k(e, t), u && u.m(e, null), (r = !0);
    },
    p(h, [f]) {
      if (f & 32) {
        l = h[5];
        let p;
        for (p = 0; p < l.length; p += 1) {
          const b = gn(h, l, p);
          o[p] ? o[p].p(b, f) : ((o[p] = _n(b)), o[p].c(), o[p].m(e, t));
        }
        for (; p < o.length; p += 1) o[p].d(1);
        o.length = l.length;
      }
      u &&
        u.p &&
        (!r || f & 256) &&
        W(u, a, h, h[8], r ? G(a, h[8], f, null) : V(h[8]), null),
        dt(
          e,
          (m = me(c, [
            mn,
            f & 64 && h[6],
            (!r || f & 4) && { width: h[2] },
            (!r || f & 4) && { height: h[2] },
            (!r || f & 2) && { stroke: h[1] },
            (!r ||
              (f & 28 &&
                n !==
                  (n = h[4] ? (Number(h[3]) * 24) / Number(h[2]) : h[3]))) && {
              "stroke-width": n,
            },
            (!r ||
              (f & 129 &&
                s !==
                  (s = `lucide-icon lucide lucide-${h[0]} ${
                    h[7].class ?? ""
                  }`))) && { class: s },
          ]))
        );
    },
    i(h) {
      r || (d(u, h), (r = !0));
    },
    o(h) {
      g(u, h), (r = !1);
    },
    d(h) {
      h && R(e), ve(o, h), u && u.d(h);
    },
  };
}
function hi(i, e, t) {
  const n = [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
  ];
  let s = ht(e, n),
    { $$slots: r = {}, $$scope: l } = e,
    { name: o } = e,
    { color: a = "currentColor" } = e,
    { size: u = 24 } = e,
    { strokeWidth: c = 2 } = e,
    { absoluteStrokeWidth: m = !1 } = e,
    { iconNode: h } = e;
  return (
    (i.$$set = (f) => {
      t(7, (e = H(H({}, e), ce(f)))),
        t(6, (s = ht(e, n))),
        "name" in f && t(0, (o = f.name)),
        "color" in f && t(1, (a = f.color)),
        "size" in f && t(2, (u = f.size)),
        "strokeWidth" in f && t(3, (c = f.strokeWidth)),
        "absoluteStrokeWidth" in f && t(4, (m = f.absoluteStrokeWidth)),
        "iconNode" in f && t(5, (h = f.iconNode)),
        "$$scope" in f && t(8, (l = f.$$scope));
    }),
    (e = ce(e)),
    [o, a, u, c, m, h, s, e, l, r]
  );
}
class di extends j {
  constructor(e) {
    super(),
      U(this, e, hi, fi, Q, {
        name: 0,
        color: 1,
        size: 2,
        strokeWidth: 3,
        absoluteStrokeWidth: 4,
        iconNode: 5,
      });
  }
}
const Te = di;
function pi(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function mi(i) {
  let e, t;
  const n = [{ name: "arrow-up" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [pi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function gi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["line", { x1: "12", x2: "12", y1: "19", y2: "5" }],
    ["polyline", { points: "5 12 12 5 19 12" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class _i extends j {
  constructor(e) {
    super(), U(this, e, gi, mi, Q, {});
  }
}
const Fs = _i;
function bi(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function yi(i) {
  let e, t;
  const n = [{ name: "bug" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [bi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function ki(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["rect", { width: "8", height: "14", x: "8", y: "6", rx: "4" }],
    ["path", { d: "m19 7-3 2" }],
    ["path", { d: "m5 7 3 2" }],
    ["path", { d: "m19 19-3-2" }],
    ["path", { d: "m5 19 3-2" }],
    ["path", { d: "M20 13h-4" }],
    ["path", { d: "M4 13h4" }],
    ["path", { d: "m10 4 1 2" }],
    ["path", { d: "m14 4-1 2" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class wi extends j {
  constructor(e) {
    super(), U(this, e, ki, yi, Q, {});
  }
}
const vi = wi;
function $i(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Ci(i) {
  let e, t;
  const n = [{ name: "check-circle" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [$i] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function Ri(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }],
    ["polyline", { points: "22 4 12 14.01 9 11.01" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class Li extends j {
  constructor(e) {
    super(), U(this, e, Ri, Ci, Q, {});
  }
}
const Qs = Li;
function Si(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Ti(i) {
  let e, t;
  const n = [{ name: "github" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Si] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function Oi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class Ei extends j {
  constructor(e) {
    super(), U(this, e, Oi, Ti, Q, {});
  }
}
const Pi = Ei;
function Ai(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function qi(i) {
  let e, t;
  const n = [{ name: "globe" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Ai] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function Ii(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
    [
      "path",
      {
        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
      },
    ],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class Mi extends j {
  constructor(e) {
    super(), U(this, e, Ii, qi, Q, {});
  }
}
const Di = Mi;
function zi(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Ni(i) {
  let e, t;
  const n = [{ name: "info" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [zi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function Fi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 16v-4" }],
    ["path", { d: "M12 8h.01" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class Qi extends j {
  constructor(e) {
    super(), U(this, e, Fi, Ni, Q, {});
  }
}
const Ui = Qi;
function ji(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Bi(i) {
  let e, t;
  const n = [{ name: "package" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [ji] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function Zi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["path", { d: "M16.5 9.4 7.55 4.24" }],
    [
      "path",
      {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      },
    ],
    ["polyline", { points: "3.29 7 12 12 20.71 7" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class Ki extends j {
  constructor(e) {
    super(), U(this, e, Zi, Bi, Q, {});
  }
}
const Us = Ki;
function Hi(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function xi(i) {
  let e, t;
  const n = [{ name: "scale" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Hi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function Gi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
    ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
    ["path", { d: "M7 21h10" }],
    ["path", { d: "M12 3v18" }],
    ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class Wi extends j {
  constructor(e) {
    super(), U(this, e, Gi, xi, Q, {});
  }
}
const Vi = Wi;
function Ji(i) {
  let e;
  const t = i[2].default,
    n = x(t, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        W(n, t, s, s[3], e ? G(t, s[3], r, null) : V(s[3]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Xi(i) {
  let e, t;
  const n = [{ name: "x" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Ji] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function Yi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["line", { x1: "18", x2: "6", y1: "6", y2: "18" }],
    ["line", { x1: "6", x2: "18", y1: "6", y2: "18" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = H(H({}, e), ce(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ce(e)),
    [r, e, n, s]
  );
}
class el extends j {
  constructor(e) {
    super(), U(this, e, Yi, Xi, Q, {});
  }
}
const tl = el;
function nl(i) {
  const e = (t) => {
    i.contains(t.target) || i.dispatchEvent(new CustomEvent("outsideclick"));
  };
  return (
    document.addEventListener("click", e, !0),
    {
      destroy() {
        document.removeEventListener("click", e, !0);
      },
    }
  );
}
function sl() {
  const i = console.warn;
  (console.warn = (e) => {
    e.includes("unknown prop") || e.includes("unexpected slot") || i(e);
  }),
    nt(() => {
      console.warn = i;
    });
}
function bn(i, e, t) {
  const n = i.slice();
  return (n[18] = e[t]), n;
}
function yn(i, e, t) {
  const n = i.slice();
  return (n[18] = e[t]), n;
}
function kn(i, e, t) {
  const n = i.slice();
  return (n[10] = e[t]), n;
}
function wn(i, e, t) {
  const n = i.slice();
  return (n[13] = e[t]), (n[15] = t), n;
}
function vn(i, e, t) {
  const n = i.slice();
  return (n[16] = e[t]), (n[15] = t), n;
}
function $n(i, e, t) {
  const n = i.slice();
  return (n[7] = e[t]), n;
}
function rl(i) {
  let e, t, n, s;
  const r = [al, ol, ll],
    l = [];
  function o(a, u) {
    return a[0] === "table" ? 0 : a[0] === "list" ? 1 : 2;
  }
  return (
    (e = o(i)),
    (t = l[e] = r[e](i)),
    {
      c() {
        t.c(), (n = se());
      },
      m(a, u) {
        l[e].m(a, u), L(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (Z(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              d(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (d(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && R(n);
      },
    }
  );
}
function il(i) {
  let e,
    t,
    n = i[1],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = On($n(i, n, l));
  const r = (l) =>
    g(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = se();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      L(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 34) {
        n = l[1];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = $n(l, n, a);
          s[a]
            ? (s[a].p(u, o), d(s[a], 1))
            : ((s[a] = On(u)), s[a].c(), d(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        K();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) d(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      ve(s, l), l && R(e);
    },
  };
}
function ll(i) {
  let e, t, n;
  const s = [i[6]];
  var r = i[5][i[0]];
  function l(o) {
    let a = { $$slots: { default: [fl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && O(e, o, a), L(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? me(s, [_e(o[6])]) : {};
        if (
          (a & 8388706 && (u.$$scope = { dirty: a, ctx: o }),
          a & 33 && r !== (r = o[5][o[0]]))
        ) {
          if (e) {
            Z();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && d(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && R(t), e && E(e, o);
      },
    }
  );
}
function ol(i) {
  let e, t, n, s;
  const r = [dl, hl],
    l = [];
  function o(a, u) {
    return a[4] ? 0 : 1;
  }
  return (
    (e = o(i)),
    (t = l[e] = r[e](i)),
    {
      c() {
        t.c(), (n = se());
      },
      m(a, u) {
        l[e].m(a, u), L(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (Z(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              d(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (d(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && R(n);
      },
    }
  );
}
function al(i) {
  let e, t, n;
  var s = i[5].table;
  function r(l) {
    return { props: { $$slots: { default: [Cl] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && O(e, l, o), L(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388716 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].table))
        ) {
          if (e) {
            Z();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              E(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && d(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && R(t), e && E(e, l);
      },
    }
  );
}
function ul(i) {
  let e = i[6].raw + "",
    t;
  return {
    c() {
      t = Y(e);
    },
    m(n, s) {
      L(n, t, s);
    },
    p(n, s) {
      s & 64 && e !== (e = n[6].raw + "") && fe(t, e);
    },
    i: ee,
    o: ee,
    d(n) {
      n && R(t);
    },
  };
}
function cl(i) {
  let e, t;
  return (
    (e = new ze({ props: { tokens: i[1], renderers: i[5] } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s & 2 && (r.tokens = n[1]), s & 32 && (r.renderers = n[5]), e.$set(r);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function fl(i) {
  let e, t, n, s;
  const r = [cl, ul],
    l = [];
  function o(a, u) {
    return a[1] ? 0 : 1;
  }
  return (
    (e = o(i)),
    (t = l[e] = r[e](i)),
    {
      c() {
        t.c(), (n = se());
      },
      m(a, u) {
        l[e].m(a, u), L(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (Z(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              d(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (d(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && R(n);
      },
    }
  );
}
function hl(i) {
  let e, t, n;
  const s = [{ ordered: i[4] }, i[6]];
  var r = i[5].list;
  function l(o) {
    let a = { $$slots: { default: [ml] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && O(e, o, a), L(o, t, a), (n = !0);
      },
      p(o, a) {
        const u =
          a & 80
            ? me(s, [a & 16 && { ordered: o[4] }, a & 64 && _e(o[6])])
            : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && r !== (r = o[5].list))
        ) {
          if (e) {
            Z();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && d(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && R(t), e && E(e, o);
      },
    }
  );
}
function dl(i) {
  let e, t, n;
  const s = [{ ordered: i[4] }, i[6]];
  var r = i[5].list;
  function l(o) {
    let a = { $$slots: { default: [_l] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && O(e, o, a), L(o, t, a), (n = !0);
      },
      p(o, a) {
        const u =
          a & 80
            ? me(s, [a & 16 && { ordered: o[4] }, a & 64 && _e(o[6])])
            : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && r !== (r = o[5].list))
        ) {
          if (e) {
            Z();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && d(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && R(t), e && E(e, o);
      },
    }
  );
}
function pl(i) {
  let e, t, n;
  return (
    (e = new ze({ props: { tokens: i[18].tokens, renderers: i[5] } })),
    {
      c() {
        A(e.$$.fragment), (t = B());
      },
      m(s, r) {
        O(e, s, r), L(s, t, r), (n = !0);
      },
      p(s, r) {
        const l = {};
        r & 64 && (l.tokens = s[18].tokens),
          r & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (d(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && R(t);
      },
    }
  );
}
function Cn(i) {
  let e, t, n;
  const s = [i[18]];
  var r = i[5].unorderedlistitem || i[5].listitem;
  function l(o) {
    let a = { $$slots: { default: [pl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && O(e, o, a), L(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? me(s, [_e(o[18])]) : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && r !== (r = o[5].unorderedlistitem || o[5].listitem))
        ) {
          if (e) {
            Z();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && d(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && R(t), e && E(e, o);
      },
    }
  );
}
function ml(i) {
  let e,
    t,
    n = i[6].items,
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Cn(bn(i, n, l));
  const r = (l) =>
    g(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = se();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      L(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 96) {
        n = l[6].items;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = bn(l, n, a);
          s[a]
            ? (s[a].p(u, o), d(s[a], 1))
            : ((s[a] = Cn(u)), s[a].c(), d(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        K();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) d(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      ve(s, l), l && R(e);
    },
  };
}
function gl(i) {
  let e, t, n;
  return (
    (e = new ze({ props: { tokens: i[18].tokens, renderers: i[5] } })),
    {
      c() {
        A(e.$$.fragment), (t = B());
      },
      m(s, r) {
        O(e, s, r), L(s, t, r), (n = !0);
      },
      p(s, r) {
        const l = {};
        r & 64 && (l.tokens = s[18].tokens),
          r & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (d(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && R(t);
      },
    }
  );
}
function Rn(i) {
  let e, t, n;
  const s = [i[18]];
  var r = i[5].orderedlistitem || i[5].listitem;
  function l(o) {
    let a = { $$slots: { default: [gl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && O(e, o, a), L(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? me(s, [_e(o[18])]) : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && r !== (r = o[5].orderedlistitem || o[5].listitem))
        ) {
          if (e) {
            Z();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && d(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && R(t), e && E(e, o);
      },
    }
  );
}
function _l(i) {
  let e,
    t,
    n = i[6].items,
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Rn(yn(i, n, l));
  const r = (l) =>
    g(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = se();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      L(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 96) {
        n = l[6].items;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = yn(l, n, a);
          s[a]
            ? (s[a].p(u, o), d(s[a], 1))
            : ((s[a] = Rn(u)), s[a].c(), d(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        K();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) d(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      ve(s, l), l && R(e);
    },
  };
}
function bl(i) {
  let e, t, n;
  return (
    (e = new ze({ props: { tokens: i[16].tokens, renderers: i[5] } })),
    {
      c() {
        A(e.$$.fragment), (t = B());
      },
      m(s, r) {
        O(e, s, r), L(s, t, r), (n = !0);
      },
      p(s, r) {
        const l = {};
        r & 4 && (l.tokens = s[16].tokens),
          r & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (d(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && R(t);
      },
    }
  );
}
function Ln(i) {
  let e, t, n;
  var s = i[5].tablecell;
  function r(l) {
    return {
      props: {
        header: !0,
        align: l[6].align[l[15]] || "center",
        $$slots: { default: [bl] },
        $$scope: { ctx: l },
      },
    };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && O(e, l, o), L(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 64 && (a.align = l[6].align[l[15]] || "center"),
          o & 8388644 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablecell))
        ) {
          if (e) {
            Z();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              E(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && d(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && R(t), e && E(e, l);
      },
    }
  );
}
function yl(i) {
  let e,
    t,
    n = i[2],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Ln(vn(i, n, l));
  const r = (l) =>
    g(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = se();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      L(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 100) {
        n = l[2];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = vn(l, n, a);
          s[a]
            ? (s[a].p(u, o), d(s[a], 1))
            : ((s[a] = Ln(u)), s[a].c(), d(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        K();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) d(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      ve(s, l), l && R(e);
    },
  };
}
function kl(i) {
  let e, t, n;
  var s = i[5].tablerow;
  function r(l) {
    return { props: { $$slots: { default: [yl] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && O(e, l, o), L(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388708 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablerow))
        ) {
          if (e) {
            Z();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              E(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && d(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && R(t), e && E(e, l);
      },
    }
  );
}
function wl(i) {
  let e, t;
  return (
    (e = new ze({ props: { tokens: i[13].tokens, renderers: i[5] } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s & 8 && (r.tokens = n[13].tokens),
          s & 32 && (r.renderers = n[5]),
          e.$set(r);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Sn(i) {
  let e, t, n;
  var s = i[5].tablecell;
  function r(l) {
    return {
      props: {
        header: !1,
        align: l[6].align[l[15]] || "center",
        $$slots: { default: [wl] },
        $$scope: { ctx: l },
      },
    };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && O(e, l, o), L(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 64 && (a.align = l[6].align[l[15]] || "center"),
          o & 8388648 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablecell))
        ) {
          if (e) {
            Z();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              E(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && d(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && R(t), e && E(e, l);
      },
    }
  );
}
function vl(i) {
  let e,
    t,
    n = i[10],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Sn(wn(i, n, l));
  const r = (l) =>
    g(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = B();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      L(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 104) {
        n = l[10];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = wn(l, n, a);
          s[a]
            ? (s[a].p(u, o), d(s[a], 1))
            : ((s[a] = Sn(u)), s[a].c(), d(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        K();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) d(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      ve(s, l), l && R(e);
    },
  };
}
function Tn(i) {
  let e, t, n;
  var s = i[5].tablerow;
  function r(l) {
    return { props: { $$slots: { default: [vl] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && O(e, l, o), L(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388712 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablerow))
        ) {
          if (e) {
            Z();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              E(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && d(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && R(t), e && E(e, l);
      },
    }
  );
}
function $l(i) {
  let e,
    t,
    n = i[3],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Tn(kn(i, n, l));
  const r = (l) =>
    g(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = se();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      L(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 104) {
        n = l[3];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = kn(l, n, a);
          s[a]
            ? (s[a].p(u, o), d(s[a], 1))
            : ((s[a] = Tn(u)), s[a].c(), d(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        K();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) d(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      ve(s, l), l && R(e);
    },
  };
}
function Cl(i) {
  let e, t, n, s, r;
  var l = i[5].tablehead;
  function o(c) {
    return { props: { $$slots: { default: [kl] }, $$scope: { ctx: c } } };
  }
  l && (e = le(l, o(i)));
  var a = i[5].tablebody;
  function u(c) {
    return { props: { $$slots: { default: [$l] }, $$scope: { ctx: c } } };
  }
  return (
    a && (n = le(a, u(i))),
    {
      c() {
        e && A(e.$$.fragment), (t = B()), n && A(n.$$.fragment), (s = se());
      },
      m(c, m) {
        e && O(e, c, m), L(c, t, m), n && O(n, c, m), L(c, s, m), (r = !0);
      },
      p(c, m) {
        const h = {};
        if (
          (m & 8388708 && (h.$$scope = { dirty: m, ctx: c }),
          m & 32 && l !== (l = c[5].tablehead))
        ) {
          if (e) {
            Z();
            const p = e;
            g(p.$$.fragment, 1, 0, () => {
              E(p, 1);
            }),
              K();
          }
          l
            ? ((e = le(l, o(c))),
              A(e.$$.fragment),
              d(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(h);
        const f = {};
        if (
          (m & 8388712 && (f.$$scope = { dirty: m, ctx: c }),
          m & 32 && a !== (a = c[5].tablebody))
        ) {
          if (n) {
            Z();
            const p = n;
            g(p.$$.fragment, 1, 0, () => {
              E(p, 1);
            }),
              K();
          }
          a
            ? ((n = le(a, u(c))),
              A(n.$$.fragment),
              d(n.$$.fragment, 1),
              O(n, s.parentNode, s))
            : (n = null);
        } else a && n.$set(f);
      },
      i(c) {
        r || (e && d(e.$$.fragment, c), n && d(n.$$.fragment, c), (r = !0));
      },
      o(c) {
        e && g(e.$$.fragment, c), n && g(n.$$.fragment, c), (r = !1);
      },
      d(c) {
        e && E(e, c), c && R(t), c && R(s), n && E(n, c);
      },
    }
  );
}
function On(i) {
  let e, t;
  const n = [i[7], { renderers: i[5] }];
  let s = {};
  for (let r = 0; r < n.length; r += 1) s = H(s, n[r]);
  return (
    (e = new ze({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(r, l) {
        O(e, r, l), (t = !0);
      },
      p(r, l) {
        const o =
          l & 34
            ? me(n, [l & 2 && _e(r[7]), l & 32 && { renderers: r[5] }])
            : {};
        e.$set(o);
      },
      i(r) {
        t || (d(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        E(e, r);
      },
    }
  );
}
function Rl(i) {
  let e, t, n, s;
  const r = [il, rl],
    l = [];
  function o(a, u) {
    return a[0] ? (a[5][a[0]] ? 1 : -1) : 0;
  }
  return (
    ~(e = o(i)) && (t = l[e] = r[e](i)),
    {
      c() {
        t && t.c(), (n = se());
      },
      m(a, u) {
        ~e && l[e].m(a, u), L(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? ~e && l[e].p(a, u)
            : (t &&
                (Z(),
                g(l[c], 1, 1, () => {
                  l[c] = null;
                }),
                K()),
              ~e
                ? ((t = l[e]),
                  t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
                  d(t, 1),
                  t.m(n.parentNode, n))
                : (t = null));
      },
      i(a) {
        s || (d(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        ~e && l[e].d(a), a && R(n);
      },
    }
  );
}
function Ll(i, e, t) {
  const n = ["type", "tokens", "header", "rows", "ordered", "renderers"];
  let s = ht(e, n),
    { type: r = void 0 } = e,
    { tokens: l = void 0 } = e,
    { header: o = void 0 } = e,
    { rows: a = void 0 } = e,
    { ordered: u = !1 } = e,
    { renderers: c } = e;
  return (
    sl(),
    (i.$$set = (m) => {
      (e = H(H({}, e), ce(m))),
        t(6, (s = ht(e, n))),
        "type" in m && t(0, (r = m.type)),
        "tokens" in m && t(1, (l = m.tokens)),
        "header" in m && t(2, (o = m.header)),
        "rows" in m && t(3, (a = m.rows)),
        "ordered" in m && t(4, (u = m.ordered)),
        "renderers" in m && t(5, (c = m.renderers));
    }),
    [r, l, o, a, u, c, s]
  );
}
let ze = class extends j {
  constructor(e) {
    super(),
      U(this, e, Ll, Rl, Q, {
        type: 0,
        tokens: 1,
        header: 2,
        rows: 3,
        ordered: 4,
        renderers: 5,
      });
  }
};
function js() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  };
}
let Ne = js();
function Sl(i) {
  Ne = i;
}
const Bs = /[&<>"']/,
  Tl = new RegExp(Bs.source, "g"),
  Zs = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  Ol = new RegExp(Zs.source, "g"),
  El = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  En = (i) => El[i];
function ge(i, e) {
  if (e) {
    if (Bs.test(i)) return i.replace(Tl, En);
  } else if (Zs.test(i)) return i.replace(Ol, En);
  return i;
}
const Pl = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Ks(i) {
  return i.replace(
    Pl,
    (e, t) => (
      (t = t.toLowerCase()),
      t === "colon"
        ? ":"
        : t.charAt(0) === "#"
        ? t.charAt(1) === "x"
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : ""
    )
  );
}
const Al = /(^|[^\[])\^/g;
function ne(i, e) {
  (i = typeof i == "string" ? i : i.source), (e = e || "");
  const t = {
    replace: (n, s) => (
      (s = s.source || s), (s = s.replace(Al, "$1")), (i = i.replace(n, s)), t
    ),
    getRegex: () => new RegExp(i, e),
  };
  return t;
}
const ql = /[^\w:]/g,
  Il = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Pn(i, e, t) {
  if (i) {
    let n;
    try {
      n = decodeURIComponent(Ks(t)).replace(ql, "").toLowerCase();
    } catch {
      return null;
    }
    if (
      n.indexOf("javascript:") === 0 ||
      n.indexOf("vbscript:") === 0 ||
      n.indexOf("data:") === 0
    )
      return null;
  }
  e && !Il.test(t) && (t = Nl(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const lt = {},
  Ml = /^[^:]+:\/*[^/]*$/,
  Dl = /^([^:]+:)[\s\S]*$/,
  zl = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Nl(i, e) {
  lt[" " + i] ||
    (Ml.test(i) ? (lt[" " + i] = i + "/") : (lt[" " + i] = ct(i, "/", !0))),
    (i = lt[" " + i]);
  const t = i.indexOf(":") === -1;
  return e.substring(0, 2) === "//"
    ? t
      ? e
      : i.replace(Dl, "$1") + e
    : e.charAt(0) === "/"
    ? t
      ? e
      : i.replace(zl, "$1") + e
    : i + e;
}
const bt = { exec: function () {} };
function An(i, e) {
  const t = i.replace(/\|/g, (r, l, o) => {
      let a = !1,
        u = l;
      for (; --u >= 0 && o[u] === "\\"; ) a = !a;
      return a ? "|" : " |";
    }),
    n = t.split(/ \|/);
  let s = 0;
  if (
    (n[0].trim() || n.shift(),
    n.length > 0 && !n[n.length - 1].trim() && n.pop(),
    n.length > e)
  )
    n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; s < n.length; s++) n[s] = n[s].trim().replace(/\\\|/g, "|");
  return n;
}
function ct(i, e, t) {
  const n = i.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    const r = i.charAt(n - s - 1);
    if (r === e && !t) s++;
    else if (r !== e && t) s++;
    else break;
  }
  return i.slice(0, n - s);
}
function Fl(i, e) {
  if (i.indexOf(e[1]) === -1) return -1;
  const t = i.length;
  let n = 0,
    s = 0;
  for (; s < t; s++)
    if (i[s] === "\\") s++;
    else if (i[s] === e[0]) n++;
    else if (i[s] === e[1] && (n--, n < 0)) return s;
  return -1;
}
function Ql(i) {
  i &&
    i.sanitize &&
    !i.silent &&
    console.warn(
      "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
    );
}
function qn(i, e) {
  if (e < 1) return "";
  let t = "";
  for (; e > 1; ) e & 1 && (t += i), (e >>= 1), (i += i);
  return t + i;
}
function In(i, e, t, n) {
  const s = e.href,
    r = e.title ? ge(e.title) : null,
    l = i[1].replace(/\\([\[\]])/g, "$1");
  if (i[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: s,
      title: r,
      text: l,
      tokens: n.inlineTokens(l),
    };
    return (n.state.inLink = !1), o;
  }
  return { type: "image", raw: t, href: s, title: r, text: ge(l) };
}
function Ul(i, e) {
  const t = i.match(/^(\s+)(?:```)/);
  if (t === null) return e;
  const n = t[1];
  return e
    .split(
      `
`
    )
    .map((s) => {
      const r = s.match(/^\s+/);
      if (r === null) return s;
      const [l] = r;
      return l.length >= n.length ? s.slice(n.length) : s;
    }).join(`
`);
}
class Zt {
  constructor(e) {
    this.options = e || Ne;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic
          ? n
          : ct(
              n,
              `
`
            ),
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0],
        s = Ul(n, t[3] || "");
      return {
        type: "code",
        raw: n,
        lang: t[2]
          ? t[2].trim().replace(this.rules.inline._escapes, "$1")
          : t[2],
        text: s,
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (/#$/.test(n)) {
        const s = ct(n, "#");
        (this.options.pedantic || !s || / $/.test(s)) && (n = s.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n),
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: t[0] };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const n = t[0].replace(/^ *>[ \t]?/gm, ""),
        s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const r = this.lexer.blockTokens(n);
      return (
        (this.lexer.state.top = s),
        { type: "blockquote", raw: t[0], tokens: r, text: n }
      );
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n,
        s,
        r,
        l,
        o,
        a,
        u,
        c,
        m,
        h,
        f,
        p,
        b = t[1].trim();
      const y = b.length > 1,
        w = {
          type: "list",
          raw: "",
          ordered: y,
          start: y ? +b.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      (b = y ? `\\d{1,9}\\${b.slice(-1)}` : `\\${b}`),
        this.options.pedantic && (b = y ? b : "[*+-]");
      const C = new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (
        ;
        e && ((p = !1), !(!(t = C.exec(e)) || this.rules.block.hr.test(e)));

      ) {
        if (
          ((n = t[0]),
          (e = e.substring(n.length)),
          (c = t[2]
            .split(
              `
`,
              1
            )[0]
            .replace(/^\t+/, (S) => " ".repeat(3 * S.length))),
          (m = e.split(
            `
`,
            1
          )[0]),
          this.options.pedantic
            ? ((l = 2), (f = c.trimLeft()))
            : ((l = t[2].search(/[^ ]/)),
              (l = l > 4 ? 1 : l),
              (f = c.slice(l)),
              (l += t[1].length)),
          (a = !1),
          !c &&
            /^ *$/.test(m) &&
            ((n +=
              m +
              `
`),
            (e = e.substring(m.length + 1)),
            (p = !0)),
          !p)
        ) {
          const S = new RegExp(
              `^ {0,${Math.min(
                3,
                l - 1
              )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
            ),
            I = new RegExp(
              `^ {0,${Math.min(
                3,
                l - 1
              )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
            ),
            v = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`),
            M = new RegExp(`^ {0,${Math.min(3, l - 1)}}#`);
          for (
            ;
            e &&
            ((h = e.split(
              `
`,
              1
            )[0]),
            (m = h),
            this.options.pedantic &&
              (m = m.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
            !(v.test(m) || M.test(m) || S.test(m) || I.test(e)));

          ) {
            if (m.search(/[^ ]/) >= l || !m.trim())
              f +=
                `
` + m.slice(l);
            else {
              if (
                a ||
                c.search(/[^ ]/) >= 4 ||
                v.test(c) ||
                M.test(c) ||
                I.test(c)
              )
                break;
              f +=
                `
` + m;
            }
            !a && !m.trim() && (a = !0),
              (n +=
                h +
                `
`),
              (e = e.substring(h.length + 1)),
              (c = m.slice(l));
          }
        }
        w.loose || (u ? (w.loose = !0) : /\n *\n *$/.test(n) && (u = !0)),
          this.options.gfm &&
            ((s = /^\[[ xX]\] /.exec(f)),
            s && ((r = s[0] !== "[ ] "), (f = f.replace(/^\[[ xX]\] +/, "")))),
          w.items.push({
            type: "list_item",
            raw: n,
            task: !!s,
            checked: r,
            loose: !1,
            text: f,
          }),
          (w.raw += n);
      }
      (w.items[w.items.length - 1].raw = n.trimRight()),
        (w.items[w.items.length - 1].text = f.trimRight()),
        (w.raw = w.raw.trimRight());
      const q = w.items.length;
      for (o = 0; o < q; o++)
        if (
          ((this.lexer.state.top = !1),
          (w.items[o].tokens = this.lexer.blockTokens(w.items[o].text, [])),
          !w.loose)
        ) {
          const S = w.items[o].tokens.filter((v) => v.type === "space"),
            I = S.length > 0 && S.some((v) => /\n.*\n/.test(v.raw));
          w.loose = I;
        }
      if (w.loose) for (o = 0; o < q; o++) w.items[o].loose = !0;
      return w;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) {
      const n = {
        type: "html",
        raw: t[0],
        pre:
          !this.options.sanitizer &&
          (t[1] === "pre" || t[1] === "script" || t[1] === "style"),
        text: t[0],
      };
      if (this.options.sanitize) {
        const s = this.options.sanitizer
          ? this.options.sanitizer(t[0])
          : ge(t[0]);
        (n.type = "paragraph"), (n.text = s), (n.tokens = this.lexer.inline(s));
      }
      return n;
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(/\s+/g, " "),
        s = t[2]
          ? t[2]
              .replace(/^<(.*)>$/, "$1")
              .replace(this.rules.inline._escapes, "$1")
          : "",
        r = t[3]
          ? t[3]
              .substring(1, t[3].length - 1)
              .replace(this.rules.inline._escapes, "$1")
          : t[3];
      return { type: "def", tag: n, raw: t[0], href: s, title: r };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      const n = {
        type: "table",
        header: An(t[1]).map((s) => ({ text: s })),
        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows:
          t[3] && t[3].trim()
            ? t[3].replace(/\n[ \t]*$/, "").split(`
`)
            : [],
      };
      if (n.header.length === n.align.length) {
        n.raw = t[0];
        let s = n.align.length,
          r,
          l,
          o,
          a;
        for (r = 0; r < s; r++)
          /^ *-+: *$/.test(n.align[r])
            ? (n.align[r] = "right")
            : /^ *:-+: *$/.test(n.align[r])
            ? (n.align[r] = "center")
            : /^ *:-+ *$/.test(n.align[r])
            ? (n.align[r] = "left")
            : (n.align[r] = null);
        for (s = n.rows.length, r = 0; r < s; r++)
          n.rows[r] = An(n.rows[r], n.header.length).map((u) => ({ text: u }));
        for (s = n.header.length, l = 0; l < s; l++)
          n.header[l].tokens = this.lexer.inline(n.header[l].text);
        for (s = n.rows.length, l = 0; l < s; l++)
          for (a = n.rows[l], o = 0; o < a.length; o++)
            a[o].tokens = this.lexer.inline(a[o].text);
        return n;
      }
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1]),
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n =
        t[1].charAt(t[1].length - 1) ===
        `
`
          ? t[1].slice(0, -1)
          : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n),
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0]),
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: ge(t[1]) };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return (
        !this.lexer.state.inLink && /^<a /i.test(t[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink &&
            /^<\/a>/i.test(t[0]) &&
            (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock &&
        /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: this.options.sanitize ? "text" : "html",
          raw: t[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize
            ? this.options.sanitizer
              ? this.options.sanitizer(t[0])
              : ge(t[0])
            : t[0],
        }
      );
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n)) return;
        const l = ct(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0) return;
      } else {
        const l = Fl(t[2], "()");
        if (l > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          (t[2] = t[2].substring(0, l)),
            (t[0] = t[0].substring(0, a).trim()),
            (t[3] = "");
        }
      }
      let s = t[2],
        r = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        l && ((s = l[1]), (r = l[3]));
      } else r = t[3] ? t[3].slice(1, -1) : "";
      return (
        (s = s.trim()),
        /^</.test(s) &&
          (this.options.pedantic && !/>$/.test(n)
            ? (s = s.slice(1))
            : (s = s.slice(1, -1))),
        In(
          t,
          {
            href: s && s.replace(this.rules.inline._escapes, "$1"),
            title: r && r.replace(this.rules.inline._escapes, "$1"),
          },
          t[0],
          this.lexer
        )
      );
    }
  }
  reflink(e, t) {
    let n;
    if (
      (n = this.rules.inline.reflink.exec(e)) ||
      (n = this.rules.inline.nolink.exec(e))
    ) {
      let s = (n[2] || n[1]).replace(/\s+/g, " ");
      if (((s = t[s.toLowerCase()]), !s)) {
        const r = n[0].charAt(0);
        return { type: "text", raw: r, text: r };
      }
      return In(n, s, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrong.lDelim.exec(e);
    if (!s || (s[3] && n.match(/[\p{L}\p{N}]/u))) return;
    const r = s[1] || s[2] || "";
    if (!r || (r && (n === "" || this.rules.inline.punctuation.exec(n)))) {
      const l = s[0].length - 1;
      let o,
        a,
        u = l,
        c = 0;
      const m =
        s[0][0] === "*"
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (
        m.lastIndex = 0, t = t.slice(-1 * e.length + l);
        (s = m.exec(t)) != null;

      ) {
        if (((o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), !o)) continue;
        if (((a = o.length), s[3] || s[4])) {
          u += a;
          continue;
        } else if ((s[5] || s[6]) && l % 3 && !((l + a) % 3)) {
          c += a;
          continue;
        }
        if (((u -= a), u > 0)) continue;
        a = Math.min(a, a + u + c);
        const h = e.slice(0, l + s.index + (s[0].length - o.length) + a);
        if (Math.min(l, a) % 2) {
          const p = h.slice(1, -1);
          return {
            type: "em",
            raw: h,
            text: p,
            tokens: this.lexer.inlineTokens(p),
          };
        }
        const f = h.slice(2, -2);
        return {
          type: "strong",
          raw: h,
          text: f,
          tokens: this.lexer.inlineTokens(f),
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n),
        r = /^ /.test(n) && / $/.test(n);
      return (
        s && r && (n = n.substring(1, n.length - 1)),
        (n = ge(n, !0)),
        { type: "codespan", raw: t[0], text: n }
      );
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2]),
      };
  }
  autolink(e, t) {
    const n = this.rules.inline.autolink.exec(e);
    if (n) {
      let s, r;
      return (
        n[2] === "@"
          ? ((s = ge(this.options.mangle ? t(n[1]) : n[1])),
            (r = "mailto:" + s))
          : ((s = ge(n[1])), (r = s)),
        {
          type: "link",
          raw: n[0],
          text: s,
          href: r,
          tokens: [{ type: "text", raw: s, text: s }],
        }
      );
    }
  }
  url(e, t) {
    let n;
    if ((n = this.rules.inline.url.exec(e))) {
      let s, r;
      if (n[2] === "@")
        (s = ge(this.options.mangle ? t(n[0]) : n[0])), (r = "mailto:" + s);
      else {
        let l;
        do (l = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
        while (l !== n[0]);
        (s = ge(n[0])), n[1] === "www." ? (r = "http://" + n[0]) : (r = n[0]);
      }
      return {
        type: "link",
        raw: n[0],
        text: s,
        href: r,
        tokens: [{ type: "text", raw: s, text: s }],
      };
    }
  }
  inlineText(e, t) {
    const n = this.rules.inline.text.exec(e);
    if (n) {
      let s;
      return (
        this.lexer.state.inRawBlock
          ? (s = this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(n[0])
                : ge(n[0])
              : n[0])
          : (s = ge(this.options.smartypants ? t(n[0]) : n[0])),
        { type: "text", raw: n[0], text: s }
      );
    }
  }
}
const z = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences:
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: bt,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
z._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
z._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
z.def = ne(z.def)
  .replace("label", z._label)
  .replace("title", z._title)
  .getRegex();
z.bullet = /(?:[*+-]|\d{1,9}[.)])/;
z.listItemStart = ne(/^( *)(bull) */)
  .replace("bull", z.bullet)
  .getRegex();
z.list = ne(z.list)
  .replace(/bull/g, z.bullet)
  .replace(
    "hr",
    "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
  )
  .replace("def", "\\n+(?=" + z.def.source + ")")
  .getRegex();
z._tag =
  "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
z._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
z.html = ne(z.html, "i")
  .replace("comment", z._comment)
  .replace("tag", z._tag)
  .replace(
    "attribute",
    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
  )
  .getRegex();
z.paragraph = ne(z._paragraph)
  .replace("hr", z.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("|lheading", "")
  .replace("|table", "")
  .replace("blockquote", " {0,3}>")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", z._tag)
  .getRegex();
z.blockquote = ne(z.blockquote).replace("paragraph", z.paragraph).getRegex();
z.normal = { ...z };
z.gfm = {
  ...z.normal,
  table:
    "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
};
z.gfm.table = ne(z.gfm.table)
  .replace("hr", z.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("blockquote", " {0,3}>")
  .replace("code", " {4}[^\\n]")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", z._tag)
  .getRegex();
z.gfm.paragraph = ne(z._paragraph)
  .replace("hr", z.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("|lheading", "")
  .replace("table", z.gfm.table)
  .replace("blockquote", " {0,3}>")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", z._tag)
  .getRegex();
z.pedantic = {
  ...z.normal,
  html: ne(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  )
    .replace("comment", z._comment)
    .replace(
      /tag/g,
      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: bt,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ne(z.normal._paragraph)
    .replace("hr", z.hr)
    .replace(
      "heading",
      ` *#{1,6} *[^
]`
    )
    .replace("lheading", z.lheading)
    .replace("blockquote", " {0,3}>")
    .replace("|fences", "")
    .replace("|list", "")
    .replace("|html", "")
    .getRegex(),
};
const T = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: bt,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst:
      /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd:
      /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: bt,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
T._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
T.punctuation = ne(T.punctuation)
  .replace(/punctuation/g, T._punctuation)
  .getRegex();
T.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
T.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
T._comment = ne(z._comment).replace("(?:-->|$)", "-->").getRegex();
T.emStrong.lDelim = ne(T.emStrong.lDelim)
  .replace(/punct/g, T._punctuation)
  .getRegex();
T.emStrong.rDelimAst = ne(T.emStrong.rDelimAst, "g")
  .replace(/punct/g, T._punctuation)
  .getRegex();
T.emStrong.rDelimUnd = ne(T.emStrong.rDelimUnd, "g")
  .replace(/punct/g, T._punctuation)
  .getRegex();
T._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
T._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
T._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
T.autolink = ne(T.autolink)
  .replace("scheme", T._scheme)
  .replace("email", T._email)
  .getRegex();
T._attribute =
  /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
T.tag = ne(T.tag)
  .replace("comment", T._comment)
  .replace("attribute", T._attribute)
  .getRegex();
T._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
T._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
T._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
T.link = ne(T.link)
  .replace("label", T._label)
  .replace("href", T._href)
  .replace("title", T._title)
  .getRegex();
T.reflink = ne(T.reflink)
  .replace("label", T._label)
  .replace("ref", z._label)
  .getRegex();
T.nolink = ne(T.nolink).replace("ref", z._label).getRegex();
T.reflinkSearch = ne(T.reflinkSearch, "g")
  .replace("reflink", T.reflink)
  .replace("nolink", T.nolink)
  .getRegex();
T.normal = { ...T };
T.pedantic = {
  ...T.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g,
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g,
  },
  link: ne(/^!?\[(label)\]\((.*?)\)/)
    .replace("label", T._label)
    .getRegex(),
  reflink: ne(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace("label", T._label)
    .getRegex(),
};
T.gfm = {
  ...T.normal,
  escape: ne(T.escape).replace("])", "~|])").getRegex(),
  _extended_email:
    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal:
    /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
};
T.gfm.url = ne(T.gfm.url, "i")
  .replace("email", T.gfm._extended_email)
  .getRegex();
T.breaks = {
  ...T.gfm,
  br: ne(T.br).replace("{2,}", "*").getRegex(),
  text: ne(T.gfm.text)
    .replace("\\b_", "\\b_| {2,}\\n")
    .replace(/\{2,\}/g, "*")
    .getRegex(),
};
function jl(i) {
  return i
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…");
}
function Mn(i) {
  let e = "",
    t,
    n;
  const s = i.length;
  for (t = 0; t < s; t++)
    (n = i.charCodeAt(t)),
      Math.random() > 0.5 && (n = "x" + n.toString(16)),
      (e += "&#" + n + ";");
  return e;
}
class Le {
  constructor(e) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || Ne),
      (this.options.tokenizer = this.options.tokenizer || new Zt()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const t = { block: z.normal, inline: T.normal };
    this.options.pedantic
      ? ((t.block = z.pedantic), (t.inline = T.pedantic))
      : this.options.gfm &&
        ((t.block = z.gfm),
        this.options.breaks ? (t.inline = T.breaks) : (t.inline = T.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: z, inline: T };
  }
  static lex(e, t) {
    return new Le(t).lex(e);
  }
  static lexInline(e, t) {
    return new Le(t).inlineTokens(e);
  }
  lex(e) {
    (e = e.replace(
      /\r\n|\r/g,
      `
`
    )),
      this.blockTokens(e, this.tokens);
    let t;
    for (; (t = this.inlineQueue.shift()); ) this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic
      ? (e = e.replace(/\t/g, "    ").replace(/^ +$/gm, ""))
      : (e = e.replace(
          /^( *)(\t+)/gm,
          (o, a, u) => a + "    ".repeat(u.length)
        ));
    let n, s, r, l;
    for (; e; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((o) =>
            (n = o.call({ lexer: this }, e, t))
              ? ((e = e.substring(n.raw.length)), t.push(n), !0)
              : !1
          )
        )
      ) {
        if ((n = this.tokenizer.space(e))) {
          (e = e.substring(n.raw.length)),
            n.raw.length === 1 && t.length > 0
              ? (t[t.length - 1].raw += `
`)
              : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.code(e))) {
          (e = e.substring(n.raw.length)),
            (s = t[t.length - 1]),
            s && (s.type === "paragraph" || s.type === "text")
              ? ((s.raw +=
                  `
` + n.raw),
                (s.text +=
                  `
` + n.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.fences(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.heading(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.hr(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.blockquote(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.list(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.html(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.def(e))) {
          (e = e.substring(n.raw.length)),
            (s = t[t.length - 1]),
            s && (s.type === "paragraph" || s.type === "text")
              ? ((s.raw +=
                  `
` + n.raw),
                (s.text +=
                  `
` + n.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : this.tokens.links[n.tag] ||
                (this.tokens.links[n.tag] = { href: n.href, title: n.title });
          continue;
        }
        if ((n = this.tokenizer.table(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.lheading(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (
          ((r = e),
          this.options.extensions && this.options.extensions.startBlock)
        ) {
          let o = 1 / 0;
          const a = e.slice(1);
          let u;
          this.options.extensions.startBlock.forEach(function (c) {
            (u = c.call({ lexer: this }, a)),
              typeof u == "number" && u >= 0 && (o = Math.min(o, u));
          }),
            o < 1 / 0 && o >= 0 && (r = e.substring(0, o + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(r))) {
          (s = t[t.length - 1]),
            l && s.type === "paragraph"
              ? ((s.raw +=
                  `
` + n.raw),
                (s.text +=
                  `
` + n.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : t.push(n),
            (l = r.length !== e.length),
            (e = e.substring(n.raw.length));
          continue;
        }
        if ((n = this.tokenizer.text(e))) {
          (e = e.substring(n.raw.length)),
            (s = t[t.length - 1]),
            s && s.type === "text"
              ? ((s.raw +=
                  `
` + n.raw),
                (s.text +=
                  `
` + n.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : t.push(n);
          continue;
        }
        if (e) {
          const o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else throw new Error(o);
        }
      }
    return (this.state.top = !0), t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n,
      s,
      r,
      l = e,
      o,
      a,
      u;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (
          ;
          (o = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null;

        )
          c.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) &&
            (l =
              l.slice(0, o.index) +
              "[" +
              qn("a", o[0].length - 2) +
              "]" +
              l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l =
        l.slice(0, o.index) +
        "[" +
        qn("a", o[0].length - 2) +
        "]" +
        l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.escapedEmSt.exec(l)) != null; )
      (l =
        l.slice(0, o.index + o[0].length - 2) +
        "++" +
        l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; e; )
      if (
        (a || (u = ""),
        (a = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((c) =>
            (n = c.call({ lexer: this }, e, t))
              ? ((e = e.substring(n.raw.length)), t.push(n), !0)
              : !1
          )
        ))
      ) {
        if ((n = this.tokenizer.escape(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.tag(e))) {
          (e = e.substring(n.raw.length)),
            (s = t[t.length - 1]),
            s && n.type === "text" && s.type === "text"
              ? ((s.raw += n.raw), (s.text += n.text))
              : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.link(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.reflink(e, this.tokens.links))) {
          (e = e.substring(n.raw.length)),
            (s = t[t.length - 1]),
            s && n.type === "text" && s.type === "text"
              ? ((s.raw += n.raw), (s.text += n.text))
              : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.emStrong(e, l, u))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.codespan(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.br(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.del(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.autolink(e, Mn))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e, Mn))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (
          ((r = e),
          this.options.extensions && this.options.extensions.startInline)
        ) {
          let c = 1 / 0;
          const m = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach(function (f) {
            (h = f.call({ lexer: this }, m)),
              typeof h == "number" && h >= 0 && (c = Math.min(c, h));
          }),
            c < 1 / 0 && c >= 0 && (r = e.substring(0, c + 1));
        }
        if ((n = this.tokenizer.inlineText(r, jl))) {
          (e = e.substring(n.raw.length)),
            n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)),
            (a = !0),
            (s = t[t.length - 1]),
            s && s.type === "text"
              ? ((s.raw += n.raw), (s.text += n.text))
              : t.push(n);
          continue;
        }
        if (e) {
          const c = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else throw new Error(c);
        }
      }
    return t;
  }
}
class Kt {
  constructor(e) {
    this.options = e || Ne;
  }
  code(e, t, n) {
    const s = (t || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const r = this.options.highlight(e, s);
      r != null && r !== e && ((n = !0), (e = r));
    }
    return (
      (e =
        e.replace(/\n$/, "") +
        `
`),
      s
        ? '<pre><code class="' +
          this.options.langPrefix +
          ge(s) +
          '">' +
          (n ? e : ge(e, !0)) +
          `</code></pre>
`
        : "<pre><code>" +
          (n ? e : ge(e, !0)) +
          `</code></pre>
`
    );
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e) {
    return e;
  }
  heading(e, t, n, s) {
    if (this.options.headerIds) {
      const r = this.options.headerPrefix + s.slug(n);
      return `<h${t} id="${r}">${e}</h${t}>
`;
    }
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return this.options.xhtml
      ? `<hr/>
`
      : `<hr>
`;
  }
  list(e, t, n) {
    const s = t ? "ol" : "ul",
      r = t && n !== 1 ? ' start="' + n + '"' : "";
    return (
      "<" +
      s +
      r +
      `>
` +
      e +
      "</" +
      s +
      `>
`
    );
  }
  listitem(e) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return (
      "<input " +
      (e ? 'checked="" ' : "") +
      'disabled="" type="checkbox"' +
      (this.options.xhtml ? " /" : "") +
      "> "
    );
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return (
      t && (t = `<tbody>${t}</tbody>`),
      `<table>
<thead>
` +
        e +
        `</thead>
` +
        t +
        `</table>
`
    );
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const n = t.header ? "th" : "td";
    return (
      (t.align ? `<${n} align="${t.align}">` : `<${n}>`) +
      e +
      `</${n}>
`
    );
  }
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, n) {
    if (((e = Pn(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return n;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), (s += ">" + n + "</a>"), s;
  }
  image(e, t, n) {
    if (((e = Pn(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return n;
    let s = `<img src="${e}" alt="${n}"`;
    return (
      t && (s += ` title="${t}"`), (s += this.options.xhtml ? "/>" : ">"), s
    );
  }
  text(e) {
    return e;
  }
}
class Hs {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, n) {
    return "" + n;
  }
  image(e, t, n) {
    return "" + n;
  }
  br() {
    return "";
  }
}
class Ht {
  constructor() {
    this.seen = {};
  }
  serialize(e) {
    return e
      .toLowerCase()
      .trim()
      .replace(/<[!\/a-z].*?>/gi, "")
      .replace(
        /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
        ""
      )
      .replace(/\s/g, "-");
  }
  getNextSafeSlug(e, t) {
    let n = e,
      s = 0;
    if (this.seen.hasOwnProperty(n)) {
      s = this.seen[e];
      do s++, (n = e + "-" + s);
      while (this.seen.hasOwnProperty(n));
    }
    return t || ((this.seen[e] = s), (this.seen[n] = 0)), n;
  }
  slug(e, t = {}) {
    const n = this.serialize(e);
    return this.getNextSafeSlug(n, t.dryrun);
  }
}
class Ee {
  constructor(e) {
    (this.options = e || Ne),
      (this.options.renderer = this.options.renderer || new Kt()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new Hs()),
      (this.slugger = new Ht());
  }
  static parse(e, t) {
    return new Ee(t).parse(e);
  }
  static parseInline(e, t) {
    return new Ee(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n = "",
      s,
      r,
      l,
      o,
      a,
      u,
      c,
      m,
      h,
      f,
      p,
      b,
      y,
      w,
      C,
      q,
      S,
      I,
      v;
    const M = e.length;
    for (s = 0; s < M; s++) {
      if (
        ((f = e[s]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[f.type] &&
          ((v = this.options.extensions.renderers[f.type].call(
            { parser: this },
            f
          )),
          v !== !1 ||
            ![
              "space",
              "hr",
              "heading",
              "code",
              "table",
              "blockquote",
              "list",
              "html",
              "paragraph",
              "text",
            ].includes(f.type)))
      ) {
        n += v || "";
        continue;
      }
      switch (f.type) {
        case "space":
          continue;
        case "hr": {
          n += this.renderer.hr();
          continue;
        }
        case "heading": {
          n += this.renderer.heading(
            this.parseInline(f.tokens),
            f.depth,
            Ks(this.parseInline(f.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          n += this.renderer.code(f.text, f.lang, f.escaped);
          continue;
        }
        case "table": {
          for (m = "", c = "", o = f.header.length, r = 0; r < o; r++)
            c += this.renderer.tablecell(this.parseInline(f.header[r].tokens), {
              header: !0,
              align: f.align[r],
            });
          for (
            m += this.renderer.tablerow(c), h = "", o = f.rows.length, r = 0;
            r < o;
            r++
          ) {
            for (u = f.rows[r], c = "", a = u.length, l = 0; l < a; l++)
              c += this.renderer.tablecell(this.parseInline(u[l].tokens), {
                header: !1,
                align: f.align[l],
              });
            h += this.renderer.tablerow(c);
          }
          n += this.renderer.table(m, h);
          continue;
        }
        case "blockquote": {
          (h = this.parse(f.tokens)), (n += this.renderer.blockquote(h));
          continue;
        }
        case "list": {
          for (
            p = f.ordered,
              b = f.start,
              y = f.loose,
              o = f.items.length,
              h = "",
              r = 0;
            r < o;
            r++
          )
            (C = f.items[r]),
              (q = C.checked),
              (S = C.task),
              (w = ""),
              C.task &&
                ((I = this.renderer.checkbox(q)),
                y
                  ? C.tokens.length > 0 && C.tokens[0].type === "paragraph"
                    ? ((C.tokens[0].text = I + " " + C.tokens[0].text),
                      C.tokens[0].tokens &&
                        C.tokens[0].tokens.length > 0 &&
                        C.tokens[0].tokens[0].type === "text" &&
                        (C.tokens[0].tokens[0].text =
                          I + " " + C.tokens[0].tokens[0].text))
                    : C.tokens.unshift({ type: "text", text: I })
                  : (w += I)),
              (w += this.parse(C.tokens, y)),
              (h += this.renderer.listitem(w, S, q));
          n += this.renderer.list(h, p, b);
          continue;
        }
        case "html": {
          n += this.renderer.html(f.text);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(this.parseInline(f.tokens));
          continue;
        }
        case "text": {
          for (
            h = f.tokens ? this.parseInline(f.tokens) : f.text;
            s + 1 < M && e[s + 1].type === "text";

          )
            (f = e[++s]),
              (h +=
                `
` + (f.tokens ? this.parseInline(f.tokens) : f.text));
          n += t ? this.renderer.paragraph(h) : h;
          continue;
        }
        default: {
          const P = 'Token with "' + f.type + '" type was not found.';
          if (this.options.silent) {
            console.error(P);
            return;
          } else throw new Error(P);
        }
      }
    }
    return n;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let n = "",
      s,
      r,
      l;
    const o = e.length;
    for (s = 0; s < o; s++) {
      if (
        ((r = e[s]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[r.type] &&
          ((l = this.options.extensions.renderers[r.type].call(
            { parser: this },
            r
          )),
          l !== !1 ||
            ![
              "escape",
              "html",
              "link",
              "image",
              "strong",
              "em",
              "codespan",
              "br",
              "del",
              "text",
            ].includes(r.type)))
      ) {
        n += l || "";
        continue;
      }
      switch (r.type) {
        case "escape": {
          n += t.text(r.text);
          break;
        }
        case "html": {
          n += t.html(r.text);
          break;
        }
        case "link": {
          n += t.link(r.href, r.title, this.parseInline(r.tokens, t));
          break;
        }
        case "image": {
          n += t.image(r.href, r.title, r.text);
          break;
        }
        case "strong": {
          n += t.strong(this.parseInline(r.tokens, t));
          break;
        }
        case "em": {
          n += t.em(this.parseInline(r.tokens, t));
          break;
        }
        case "codespan": {
          n += t.codespan(r.text);
          break;
        }
        case "br": {
          n += t.br();
          break;
        }
        case "del": {
          n += t.del(this.parseInline(r.tokens, t));
          break;
        }
        case "text": {
          n += t.text(r.text);
          break;
        }
        default: {
          const a = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) {
            console.error(a);
            return;
          } else throw new Error(a);
        }
      }
    }
    return n;
  }
}
class yt {
  constructor(e) {
    this.options = e || Ne;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
}
Vt(yt, "passThroughHooks", new Set(["preprocess", "postprocess"]));
function Bl(i, e, t) {
  return (n) => {
    if (
      ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
      i)
    ) {
      const s =
        "<p>An error occurred:</p><pre>" + ge(n.message + "", !0) + "</pre>";
      if (e) return Promise.resolve(s);
      if (t) {
        t(null, s);
        return;
      }
      return s;
    }
    if (e) return Promise.reject(n);
    if (t) {
      t(n);
      return;
    }
    throw n;
  };
}
function xs(i, e) {
  return (t, n, s) => {
    typeof n == "function" && ((s = n), (n = null));
    const r = { ...n };
    n = { ...N.defaults, ...r };
    const l = Bl(n.silent, n.async, s);
    if (typeof t > "u" || t === null)
      return l(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string")
      return l(
        new Error(
          "marked(): input parameter is of type " +
            Object.prototype.toString.call(t) +
            ", string expected"
        )
      );
    if ((Ql(n), n.hooks && (n.hooks.options = n), s)) {
      const o = n.highlight;
      let a;
      try {
        n.hooks && (t = n.hooks.preprocess(t)), (a = i(t, n));
      } catch (m) {
        return l(m);
      }
      const u = function (m) {
        let h;
        if (!m)
          try {
            n.walkTokens && N.walkTokens(a, n.walkTokens),
              (h = e(a, n)),
              n.hooks && (h = n.hooks.postprocess(h));
          } catch (f) {
            m = f;
          }
        return (n.highlight = o), m ? l(m) : s(null, h);
      };
      if (!o || o.length < 3 || (delete n.highlight, !a.length)) return u();
      let c = 0;
      N.walkTokens(a, function (m) {
        m.type === "code" &&
          (c++,
          setTimeout(() => {
            o(m.text, m.lang, function (h, f) {
              if (h) return u(h);
              f != null && f !== m.text && ((m.text = f), (m.escaped = !0)),
                c--,
                c === 0 && u();
            });
          }, 0));
      }),
        c === 0 && u();
      return;
    }
    if (n.async)
      return Promise.resolve(n.hooks ? n.hooks.preprocess(t) : t)
        .then((o) => i(o, n))
        .then((o) =>
          n.walkTokens
            ? Promise.all(N.walkTokens(o, n.walkTokens)).then(() => o)
            : o
        )
        .then((o) => e(o, n))
        .then((o) => (n.hooks ? n.hooks.postprocess(o) : o))
        .catch(l);
    try {
      n.hooks && (t = n.hooks.preprocess(t));
      const o = i(t, n);
      n.walkTokens && N.walkTokens(o, n.walkTokens);
      let a = e(o, n);
      return n.hooks && (a = n.hooks.postprocess(a)), a;
    } catch (o) {
      return l(o);
    }
  };
}
function N(i, e, t) {
  return xs(Le.lex, Ee.parse)(i, e, t);
}
N.options = N.setOptions = function (i) {
  return (N.defaults = { ...N.defaults, ...i }), Sl(N.defaults), N;
};
N.getDefaults = js;
N.defaults = Ne;
N.use = function (...i) {
  const e = N.defaults.extensions || { renderers: {}, childTokens: {} };
  i.forEach((t) => {
    const n = { ...t };
    if (
      ((n.async = N.defaults.async || n.async || !1),
      t.extensions &&
        (t.extensions.forEach((s) => {
          if (!s.name) throw new Error("extension name required");
          if (s.renderer) {
            const r = e.renderers[s.name];
            r
              ? (e.renderers[s.name] = function (...l) {
                  let o = s.renderer.apply(this, l);
                  return o === !1 && (o = r.apply(this, l)), o;
                })
              : (e.renderers[s.name] = s.renderer);
          }
          if (s.tokenizer) {
            if (!s.level || (s.level !== "block" && s.level !== "inline"))
              throw new Error("extension level must be 'block' or 'inline'");
            e[s.level]
              ? e[s.level].unshift(s.tokenizer)
              : (e[s.level] = [s.tokenizer]),
              s.start &&
                (s.level === "block"
                  ? e.startBlock
                    ? e.startBlock.push(s.start)
                    : (e.startBlock = [s.start])
                  : s.level === "inline" &&
                    (e.startInline
                      ? e.startInline.push(s.start)
                      : (e.startInline = [s.start])));
          }
          s.childTokens && (e.childTokens[s.name] = s.childTokens);
        }),
        (n.extensions = e)),
      t.renderer)
    ) {
      const s = N.defaults.renderer || new Kt();
      for (const r in t.renderer) {
        const l = s[r];
        s[r] = (...o) => {
          let a = t.renderer[r].apply(s, o);
          return a === !1 && (a = l.apply(s, o)), a;
        };
      }
      n.renderer = s;
    }
    if (t.tokenizer) {
      const s = N.defaults.tokenizer || new Zt();
      for (const r in t.tokenizer) {
        const l = s[r];
        s[r] = (...o) => {
          let a = t.tokenizer[r].apply(s, o);
          return a === !1 && (a = l.apply(s, o)), a;
        };
      }
      n.tokenizer = s;
    }
    if (t.hooks) {
      const s = N.defaults.hooks || new yt();
      for (const r in t.hooks) {
        const l = s[r];
        yt.passThroughHooks.has(r)
          ? (s[r] = (o) => {
              if (N.defaults.async)
                return Promise.resolve(t.hooks[r].call(s, o)).then((u) =>
                  l.call(s, u)
                );
              const a = t.hooks[r].call(s, o);
              return l.call(s, a);
            })
          : (s[r] = (...o) => {
              let a = t.hooks[r].apply(s, o);
              return a === !1 && (a = l.apply(s, o)), a;
            });
      }
      n.hooks = s;
    }
    if (t.walkTokens) {
      const s = N.defaults.walkTokens;
      n.walkTokens = function (r) {
        let l = [];
        return (
          l.push(t.walkTokens.call(this, r)),
          s && (l = l.concat(s.call(this, r))),
          l
        );
      };
    }
    N.setOptions(n);
  });
};
N.walkTokens = function (i, e) {
  let t = [];
  for (const n of i)
    switch (((t = t.concat(e.call(N, n))), n.type)) {
      case "table": {
        for (const s of n.header) t = t.concat(N.walkTokens(s.tokens, e));
        for (const s of n.rows)
          for (const r of s) t = t.concat(N.walkTokens(r.tokens, e));
        break;
      }
      case "list": {
        t = t.concat(N.walkTokens(n.items, e));
        break;
      }
      default:
        N.defaults.extensions &&
        N.defaults.extensions.childTokens &&
        N.defaults.extensions.childTokens[n.type]
          ? N.defaults.extensions.childTokens[n.type].forEach(function (s) {
              t = t.concat(N.walkTokens(n[s], e));
            })
          : n.tokens && (t = t.concat(N.walkTokens(n.tokens, e)));
    }
  return t;
};
N.parseInline = xs(Le.lexInline, Ee.parseInline);
N.Parser = Ee;
N.parser = Ee.parse;
N.Renderer = Kt;
N.TextRenderer = Hs;
N.Lexer = Le;
N.lexer = Le.lex;
N.Tokenizer = Zt;
N.Slugger = Ht;
N.Hooks = yt;
N.parse = N;
N.options;
N.setOptions;
N.use;
N.walkTokens;
N.parseInline;
Ee.parse;
Le.lex;
const Gs = {};
function Zl(i) {
  let e;
  return {
    c() {
      e = Y(i[1]);
    },
    m(t, n) {
      L(t, e, n);
    },
    p(t, n) {
      n & 2 && fe(e, t[1]);
    },
    i: ee,
    o: ee,
    d(t) {
      t && R(e);
    },
  };
}
function Kl(i) {
  let e, t;
  const n = i[5].default,
    s = x(n, i, i[4], null);
  return {
    c() {
      (e = $("h6")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        W(s, n, r, r[4], t ? G(n, r[4], l, null) : V(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Hl(i) {
  let e, t;
  const n = i[5].default,
    s = x(n, i, i[4], null);
  return {
    c() {
      (e = $("h5")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        W(s, n, r, r[4], t ? G(n, r[4], l, null) : V(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function xl(i) {
  let e, t;
  const n = i[5].default,
    s = x(n, i, i[4], null);
  return {
    c() {
      (e = $("h4")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        W(s, n, r, r[4], t ? G(n, r[4], l, null) : V(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Gl(i) {
  let e, t;
  const n = i[5].default,
    s = x(n, i, i[4], null);
  return {
    c() {
      (e = $("h3")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        W(s, n, r, r[4], t ? G(n, r[4], l, null) : V(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Wl(i) {
  let e, t;
  const n = i[5].default,
    s = x(n, i, i[4], null);
  return {
    c() {
      (e = $("h2")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        W(s, n, r, r[4], t ? G(n, r[4], l, null) : V(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Vl(i) {
  let e, t;
  const n = i[5].default,
    s = x(n, i, i[4], null);
  return {
    c() {
      (e = $("h1")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        W(s, n, r, r[4], t ? G(n, r[4], l, null) : V(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Jl(i) {
  let e, t, n, s;
  const r = [Vl, Wl, Gl, xl, Hl, Kl, Zl],
    l = [];
  function o(a, u) {
    return a[0] === 1
      ? 0
      : a[0] === 2
      ? 1
      : a[0] === 3
      ? 2
      : a[0] === 4
      ? 3
      : a[0] === 5
      ? 4
      : a[0] === 6
      ? 5
      : 6;
  }
  return (
    (e = o(i)),
    (t = l[e] = r[e](i)),
    {
      c() {
        t.c(), (n = se());
      },
      m(a, u) {
        l[e].m(a, u), L(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (Z(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              d(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (d(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && R(n);
      },
    }
  );
}
function Xl(i, e, t) {
  let n,
    { $$slots: s = {}, $$scope: r } = e,
    { depth: l } = e,
    { raw: o } = e,
    { text: a } = e;
  const { slug: u, getOptions: c } = hs(Gs),
    m = c();
  return (
    (i.$$set = (h) => {
      "depth" in h && t(0, (l = h.depth)),
        "raw" in h && t(1, (o = h.raw)),
        "text" in h && t(3, (a = h.text)),
        "$$scope" in h && t(4, (r = h.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 8 &&
        t(2, (n = m.headerIds ? m.headerPrefix + u(a) : void 0));
    }),
    [l, o, n, a, r, s]
  );
}
class Yl extends j {
  constructor(e) {
    super(), U(this, e, Xl, Jl, Q, { depth: 0, raw: 1, text: 3 });
  }
}
function eo(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("p")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function to(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class no extends j {
  constructor(e) {
    super(), U(this, e, to, eo, Q, {});
  }
}
function so(i) {
  let e;
  const t = i[3].default,
    n = x(t, i, i[2], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, [r]) {
      n &&
        n.p &&
        (!e || r & 4) &&
        W(n, t, s, s[2], e ? G(t, s[2], r, null) : V(s[2]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function ro(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { text: r } = e,
    { raw: l } = e;
  return (
    (i.$$set = (o) => {
      "text" in o && t(0, (r = o.text)),
        "raw" in o && t(1, (l = o.raw)),
        "$$scope" in o && t(2, (s = o.$$scope));
    }),
    [r, l, s, n]
  );
}
class io extends j {
  constructor(e) {
    super(), U(this, e, ro, so, Q, { text: 0, raw: 1 });
  }
}
function lo(i) {
  let e, t;
  return {
    c() {
      (e = $("img")),
        Xt(e.src, (t = i[0])) || _(e, "src", t),
        _(e, "title", i[1]),
        _(e, "alt", i[2]);
    },
    m(n, s) {
      L(n, e, s);
    },
    p(n, [s]) {
      s & 1 && !Xt(e.src, (t = n[0])) && _(e, "src", t),
        s & 2 && _(e, "title", n[1]),
        s & 4 && _(e, "alt", n[2]);
    },
    i: ee,
    o: ee,
    d(n) {
      n && R(e);
    },
  };
}
function oo(i, e, t) {
  let { href: n = "" } = e,
    { title: s = void 0 } = e,
    { text: r = "" } = e;
  return (
    (i.$$set = (l) => {
      "href" in l && t(0, (n = l.href)),
        "title" in l && t(1, (s = l.title)),
        "text" in l && t(2, (r = l.text));
    }),
    [n, s, r]
  );
}
class ao extends j {
  constructor(e) {
    super(), U(this, e, oo, lo, Q, { href: 0, title: 1, text: 2 });
  }
}
function uo(i) {
  let e, t;
  const n = i[3].default,
    s = x(n, i, i[2], null);
  return {
    c() {
      (e = $("a")), s && s.c(), _(e, "href", i[0]), _(e, "title", i[1]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 4) &&
        W(s, n, r, r[2], t ? G(n, r[2], l, null) : V(r[2]), null),
        (!t || l & 1) && _(e, "href", r[0]),
        (!t || l & 2) && _(e, "title", r[1]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function co(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { href: r = "" } = e,
    { title: l = void 0 } = e;
  return (
    (i.$$set = (o) => {
      "href" in o && t(0, (r = o.href)),
        "title" in o && t(1, (l = o.title)),
        "$$scope" in o && t(2, (s = o.$$scope));
    }),
    [r, l, s, n]
  );
}
class fo extends j {
  constructor(e) {
    super(), U(this, e, co, uo, Q, { href: 0, title: 1 });
  }
}
function ho(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("em")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function po(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class mo extends j {
  constructor(e) {
    super(), U(this, e, po, ho, Q, {});
  }
}
function go(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("del")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function _o(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class bo extends j {
  constructor(e) {
    super(), U(this, e, _o, go, Q, {});
  }
}
function yo(i) {
  let e,
    t = i[0].replace(/`/g, "") + "",
    n;
  return {
    c() {
      (e = $("code")), (n = Y(t));
    },
    m(s, r) {
      L(s, e, r), k(e, n);
    },
    p(s, [r]) {
      r & 1 && t !== (t = s[0].replace(/`/g, "") + "") && fe(n, t);
    },
    i: ee,
    o: ee,
    d(s) {
      s && R(e);
    },
  };
}
function ko(i, e, t) {
  let { raw: n } = e;
  return (
    (i.$$set = (s) => {
      "raw" in s && t(0, (n = s.raw));
    }),
    [n]
  );
}
class wo extends j {
  constructor(e) {
    super(), U(this, e, ko, yo, Q, { raw: 0 });
  }
}
function vo(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("strong")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function $o(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class Co extends j {
  constructor(e) {
    super(), U(this, e, $o, vo, Q, {});
  }
}
function Ro(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("table")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Lo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class So extends j {
  constructor(e) {
    super(), U(this, e, Lo, Ro, Q, {});
  }
}
function To(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("thead")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Oo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class Eo extends j {
  constructor(e) {
    super(), U(this, e, Oo, To, Q, {});
  }
}
function Po(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("tbody")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Ao(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class qo extends j {
  constructor(e) {
    super(), U(this, e, Ao, Po, Q, {});
  }
}
function Io(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("tr")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Mo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class Do extends j {
  constructor(e) {
    super(), U(this, e, Mo, Io, Q, {});
  }
}
function zo(i) {
  let e, t;
  const n = i[3].default,
    s = x(n, i, i[2], null);
  return {
    c() {
      (e = $("td")), s && s.c(), _(e, "align", i[1]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        W(s, n, r, r[2], t ? G(n, r[2], l, null) : V(r[2]), null),
        (!t || l & 2) && _(e, "align", r[1]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function No(i) {
  let e, t;
  const n = i[3].default,
    s = x(n, i, i[2], null);
  return {
    c() {
      (e = $("th")), s && s.c(), _(e, "align", i[1]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        W(s, n, r, r[2], t ? G(n, r[2], l, null) : V(r[2]), null),
        (!t || l & 2) && _(e, "align", r[1]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Fo(i) {
  let e, t, n, s;
  const r = [No, zo],
    l = [];
  function o(a, u) {
    return a[0] ? 0 : 1;
  }
  return (
    (e = o(i)),
    (t = l[e] = r[e](i)),
    {
      c() {
        t.c(), (n = se());
      },
      m(a, u) {
        l[e].m(a, u), L(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (Z(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              d(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (d(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && R(n);
      },
    }
  );
}
function Qo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { header: r } = e,
    { align: l } = e;
  return (
    (i.$$set = (o) => {
      "header" in o && t(0, (r = o.header)),
        "align" in o && t(1, (l = o.align)),
        "$$scope" in o && t(2, (s = o.$$scope));
    }),
    [r, l, s, n]
  );
}
class Uo extends j {
  constructor(e) {
    super(), U(this, e, Qo, Fo, Q, { header: 0, align: 1 });
  }
}
function jo(i) {
  let e, t;
  const n = i[3].default,
    s = x(n, i, i[2], null);
  return {
    c() {
      (e = $("ul")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        W(s, n, r, r[2], t ? G(n, r[2], l, null) : V(r[2]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Bo(i) {
  let e, t;
  const n = i[3].default,
    s = x(n, i, i[2], null);
  return {
    c() {
      (e = $("ol")), s && s.c(), _(e, "start", i[1]);
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        W(s, n, r, r[2], t ? G(n, r[2], l, null) : V(r[2]), null),
        (!t || l & 2) && _(e, "start", r[1]);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Zo(i) {
  let e, t, n, s;
  const r = [Bo, jo],
    l = [];
  function o(a, u) {
    return a[0] ? 0 : 1;
  }
  return (
    (e = o(i)),
    (t = l[e] = r[e](i)),
    {
      c() {
        t.c(), (n = se());
      },
      m(a, u) {
        l[e].m(a, u), L(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (Z(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              d(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (d(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && R(n);
      },
    }
  );
}
function Ko(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { ordered: r } = e,
    { start: l } = e;
  return (
    (i.$$set = (o) => {
      "ordered" in o && t(0, (r = o.ordered)),
        "start" in o && t(1, (l = o.start)),
        "$$scope" in o && t(2, (s = o.$$scope));
    }),
    [r, l, s, n]
  );
}
class Ho extends j {
  constructor(e) {
    super(), U(this, e, Ko, Zo, Q, { ordered: 0, start: 1 });
  }
}
function xo(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("li")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function Go(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class Wo extends j {
  constructor(e) {
    super(), U(this, e, Go, xo, Q, {});
  }
}
function Vo(i) {
  let e;
  return {
    c() {
      e = $("hr");
    },
    m(t, n) {
      L(t, e, n);
    },
    p: ee,
    i: ee,
    o: ee,
    d(t) {
      t && R(e);
    },
  };
}
class Jo extends j {
  constructor(e) {
    super(), U(this, e, null, Vo, Q, {});
  }
}
function Xo(i) {
  let e, t;
  return {
    c() {
      (e = new ir(!1)), (t = se()), (e.a = t);
    },
    m(n, s) {
      e.m(i[0], n, s), L(n, t, s);
    },
    p(n, [s]) {
      s & 1 && e.p(n[0]);
    },
    i: ee,
    o: ee,
    d(n) {
      n && R(t), n && e.d();
    },
  };
}
function Yo(i, e, t) {
  let { text: n } = e;
  return (
    (i.$$set = (s) => {
      "text" in s && t(0, (n = s.text));
    }),
    [n]
  );
}
class ea extends j {
  constructor(e) {
    super(), U(this, e, Yo, Xo, Q, { text: 0 });
  }
}
function ta(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("blockquote")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function na(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class sa extends j {
  constructor(e) {
    super(), U(this, e, na, ta, Q, {});
  }
}
function ra(i) {
  let e, t, n;
  return {
    c() {
      (e = $("pre")), (t = $("code")), (n = Y(i[1])), _(e, "class", i[0]);
    },
    m(s, r) {
      L(s, e, r), k(e, t), k(t, n);
    },
    p(s, [r]) {
      r & 2 && fe(n, s[1]), r & 1 && _(e, "class", s[0]);
    },
    i: ee,
    o: ee,
    d(s) {
      s && R(e);
    },
  };
}
function ia(i, e, t) {
  let { lang: n } = e,
    { text: s } = e;
  return (
    (i.$$set = (r) => {
      "lang" in r && t(0, (n = r.lang)), "text" in r && t(1, (s = r.text));
    }),
    [n, s]
  );
}
class la extends j {
  constructor(e) {
    super(), U(this, e, ia, ra, Q, { lang: 0, text: 1 });
  }
}
function oa(i) {
  let e, t;
  const n = i[1].default,
    s = x(n, i, i[0], null);
  return {
    c() {
      (e = $("br")), s && s.c();
    },
    m(r, l) {
      L(r, e, l), s && s.m(r, l), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        W(s, n, r, r[0], t ? G(n, r[0], l, null) : V(r[0]), null);
    },
    i(r) {
      t || (d(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && R(e), s && s.d(r);
    },
  };
}
function aa(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class ua extends j {
  constructor(e) {
    super(), U(this, e, aa, oa, Q, {});
  }
}
const ca = {
    heading: Yl,
    paragraph: no,
    text: io,
    image: ao,
    link: fo,
    em: mo,
    strong: Co,
    codespan: wo,
    del: bo,
    table: So,
    tablehead: Eo,
    tablebody: qo,
    tablerow: Do,
    tablecell: Uo,
    list: Ho,
    orderedlistitem: null,
    unorderedlistitem: null,
    listitem: Wo,
    hr: Jo,
    html: ea,
    blockquote: sa,
    code: la,
    br: ua,
  },
  fa = {
    baseUrl: null,
    breaks: !1,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    xhtml: !1,
  };
function ha(i) {
  let e, t;
  return (
    (e = new ze({ props: { tokens: i[0], renderers: i[1] } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const r = {};
        s & 1 && (r.tokens = n[0]), s & 2 && (r.renderers = n[1]), e.$set(r);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function da(i, e, t) {
  let n,
    s,
    r,
    l,
    { source: o = [] } = e,
    { renderers: a = {} } = e,
    { options: u = {} } = e,
    { isInline: c = !1 } = e;
  const m = lr();
  let h, f, p;
  return (
    fs(Gs, { slug: (b) => (s ? s.slug(b) : ""), getOptions: () => r }),
    nt(() => {
      t(7, (p = !0));
    }),
    (i.$$set = (b) => {
      "source" in b && t(2, (o = b.source)),
        "renderers" in b && t(3, (a = b.renderers)),
        "options" in b && t(4, (u = b.options)),
        "isInline" in b && t(5, (c = b.isInline));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 4 && t(8, (n = Array.isArray(o))),
        i.$$.dirty & 4 && (s = o ? new Ht() : void 0),
        i.$$.dirty & 16 && t(9, (r = { ...fa, ...u })),
        i.$$.dirty & 869 &&
          (n
            ? t(0, (h = o))
            : (t(6, (f = new Le(r))),
              t(0, (h = c ? f.inlineTokens(o) : f.lex(o))),
              m("parsed", { tokens: h }))),
        i.$$.dirty & 8 && t(1, (l = { ...ca, ...a })),
        i.$$.dirty & 385 && p && !n && m("parsed", { tokens: h });
    }),
    [h, l, o, a, u, c, f, p, n, r]
  );
}
class pa extends j {
  constructor(e) {
    super(),
      U(this, e, da, ha, Q, {
        source: 2,
        renderers: 3,
        options: 4,
        isInline: 5,
      });
  }
}
function ma(i) {
  let e;
  const t = i[3].default,
    n = x(t, i, i[2], null);
  return {
    c() {
      n && n.c();
    },
    m(s, r) {
      n && n.m(s, r), (e = !0);
    },
    p(s, r) {
      n &&
        n.p &&
        (!e || r & 4) &&
        W(n, t, s, s[2], e ? G(t, s[2], r, null) : V(s[2]), null);
    },
    i(s) {
      e || (d(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function ga(i) {
  let e = "...",
    t,
    n,
    s,
    r;
  const l = i[3].default,
    o = x(l, i, i[2], null);
  return {
    c() {
      (t = Y(e)),
        (n = B()),
        (s = $("div")),
        o && o.c(),
        _(s, "class", "opacity-0 h-0");
    },
    m(a, u) {
      L(a, t, u), L(a, n, u), L(a, s, u), o && o.m(s, null), (r = !0);
    },
    p(a, u) {
      o &&
        o.p &&
        (!r || u & 4) &&
        W(o, l, a, a[2], r ? G(l, a[2], u, null) : V(a[2]), null);
    },
    i(a) {
      r || (d(o, a), (r = !0));
    },
    o(a) {
      g(o, a), (r = !1);
    },
    d(a) {
      a && R(t), a && R(n), a && R(s), o && o.d(a);
    },
  };
}
function _a(i) {
  let e, t, n, s, r, l, o, a, u, c;
  const m = [ga, ma],
    h = [];
  function f(p, b) {
    return p[0] ? 0 : 1;
  }
  return (
    (n = f(i)),
    (s = h[n] = m[n](i)),
    (o = new Fs({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = $("button")),
          (t = $("div")),
          s.c(),
          (r = B()),
          (l = $("div")),
          A(o.$$.fragment),
          _(t, "class", "px-2 font-medium relative"),
          _(
            l,
            "class",
            "h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple"
          ),
          _(
            e,
            "class",
            "flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple/95 text-castleton-green -mr-1 whitespace-nowrap"
          ),
          (e.disabled = i[1]),
          ie(e, "opacity-90", i[0]),
          ie(e, "opacity-70", i[1]);
      },
      m(p, b) {
        L(p, e, b),
          k(e, t),
          h[n].m(t, null),
          k(e, r),
          k(e, l),
          O(o, l, null),
          (a = !0),
          u || ((c = we(e, "click", i[4])), (u = !0));
      },
      p(p, [b]) {
        let y = n;
        (n = f(p)),
          n === y
            ? h[n].p(p, b)
            : (Z(),
              g(h[y], 1, 1, () => {
                h[y] = null;
              }),
              K(),
              (s = h[n]),
              s ? s.p(p, b) : ((s = h[n] = m[n](p)), s.c()),
              d(s, 1),
              s.m(t, null)),
          (!a || b & 2) && (e.disabled = p[1]),
          (!a || b & 1) && ie(e, "opacity-90", p[0]),
          (!a || b & 2) && ie(e, "opacity-70", p[1]);
      },
      i(p) {
        a || (d(s), d(o.$$.fragment, p), (a = !0));
      },
      o(p) {
        g(s), g(o.$$.fragment, p), (a = !1);
      },
      d(p) {
        p && R(e), h[n].d(), E(o), (u = !1), c();
      },
    }
  );
}
function ba(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { isLoading: r = !1 } = e,
    { disabled: l = !1 } = e;
  function o(a) {
    or.call(this, i, a);
  }
  return (
    (i.$$set = (a) => {
      "isLoading" in a && t(0, (r = a.isLoading)),
        "disabled" in a && t(1, (l = a.disabled)),
        "$$scope" in a && t(2, (s = a.$$scope));
    }),
    [r, l, s, n, o]
  );
}
class Ws extends j {
  constructor(e) {
    super(), U(this, e, ba, _a, Q, { isLoading: 0, disabled: 1 });
  }
}
function ya(i) {
  let e, t, n;
  return (
    (t = new Ws({
      props: {
        disabled: i[8].isLoading,
        isLoading: i[8].isLoading,
        $$slots: { default: [wa] },
        $$scope: { ctx: i },
      },
    })),
    t.$on("click", i[16]),
    {
      c() {
        (e = $("div")), A(t.$$.fragment), _(e, "class", "py-1");
      },
      m(s, r) {
        L(s, e, r), O(t, e, null), (n = !0);
      },
      p(s, r) {
        const l = {};
        r & 256 && (l.disabled = s[8].isLoading),
          r & 256 && (l.isLoading = s[8].isLoading),
          r & 524294 && (l.$$scope = { dirty: r, ctx: s }),
          t.$set(l);
      },
      i(s) {
        n || (d(t.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(t.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && R(e), E(t);
      },
    }
  );
}
function ka(i) {
  let e, t, n, s, r, l;
  return (
    (r = new Qs({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = $("div")),
          (t = $("span")),
          (n = Y(i[1])),
          (s = B()),
          A(r.$$.fragment),
          _(e, "class", "flex items-center gap-2 justify-end py-2");
      },
      m(o, a) {
        L(o, e, a), k(e, t), k(t, n), k(e, s), O(r, e, null), (l = !0);
      },
      p(o, a) {
        (!l || a & 2) && fe(n, o[1]);
      },
      i(o) {
        l || (d(r.$$.fragment, o), (l = !0));
      },
      o(o) {
        g(r.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && R(e), E(r);
      },
    }
  );
}
function wa(i) {
  let e, t, n;
  return {
    c() {
      (e = Y(i[1])), (t = Y(" ⇒ ")), (n = Y(i[2]));
    },
    m(s, r) {
      L(s, e, r), L(s, t, r), L(s, n, r);
    },
    p(s, r) {
      r & 2 && fe(e, s[1]), r & 4 && fe(n, s[2]);
    },
    d(s) {
      s && R(e), s && R(t), s && R(n);
    },
  };
}
function Dn(i) {
  var q;
  let e, t, n, s, r, l, o, a, u, c, m, h;
  t = new pa({ props: { source: i[5].description ?? "" } });
  let f = i[5].license && zn(i),
    p = i[5].author && Nn(i),
    b = i[9].data && Fn(i),
    y = ((q = i[5].repository) == null ? void 0 : q.url) && Qn(i),
    w = i[5].homepage && Un(i),
    C = i[5].bugs && jn(i);
  return {
    c() {
      (e = $("div")),
        A(t.$$.fragment),
        (n = B()),
        (s = $("div")),
        (r = $("div")),
        f && f.c(),
        (l = B()),
        p && p.c(),
        (o = B()),
        b && b.c(),
        (a = B()),
        (u = $("div")),
        y && y.c(),
        (c = B()),
        w && w.c(),
        (m = B()),
        C && C.c(),
        _(
          e,
          "class",
          "text-granny-smith-apple/90 max-w-md p-4 py-2 font-medium"
        ),
        _(r, "class", "grid gap-2"),
        _(u, "class", "flex gap-2 items-center text-lg"),
        _(
          s,
          "class",
          "px-2 pt-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60"
        );
    },
    m(S, I) {
      L(S, e, I),
        O(t, e, null),
        L(S, n, I),
        L(S, s, I),
        k(s, r),
        f && f.m(r, null),
        k(r, l),
        p && p.m(r, null),
        k(r, o),
        b && b.m(r, null),
        k(s, a),
        k(s, u),
        y && y.m(u, null),
        k(u, c),
        w && w.m(u, null),
        k(u, m),
        C && C.m(u, null),
        (h = !0);
    },
    p(S, I) {
      var M;
      const v = {};
      I & 32 && (v.source = S[5].description ?? ""),
        t.$set(v),
        S[5].license
          ? f
            ? (f.p(S, I), I & 32 && d(f, 1))
            : ((f = zn(S)), f.c(), d(f, 1), f.m(r, l))
          : f &&
            (Z(),
            g(f, 1, 1, () => {
              f = null;
            }),
            K()),
        S[5].author
          ? p
            ? p.p(S, I)
            : ((p = Nn(S)), p.c(), p.m(r, o))
          : p && (p.d(1), (p = null)),
        S[9].data
          ? b
            ? b.p(S, I)
            : ((b = Fn(S)), b.c(), b.m(r, null))
          : b && (b.d(1), (b = null)),
        (M = S[5].repository) != null && M.url
          ? y
            ? (y.p(S, I), I & 32 && d(y, 1))
            : ((y = Qn(S)), y.c(), d(y, 1), y.m(u, c))
          : y &&
            (Z(),
            g(y, 1, 1, () => {
              y = null;
            }),
            K()),
        S[5].homepage
          ? w
            ? (w.p(S, I), I & 32 && d(w, 1))
            : ((w = Un(S)), w.c(), d(w, 1), w.m(u, m))
          : w &&
            (Z(),
            g(w, 1, 1, () => {
              w = null;
            }),
            K()),
        S[5].bugs
          ? C
            ? (C.p(S, I), I & 32 && d(C, 1))
            : ((C = jn(S)), C.c(), d(C, 1), C.m(u, null))
          : C &&
            (Z(),
            g(C, 1, 1, () => {
              C = null;
            }),
            K());
    },
    i(S) {
      h || (d(t.$$.fragment, S), d(f), d(y), d(w), d(C), (h = !0));
    },
    o(S) {
      g(t.$$.fragment, S), g(f), g(y), g(w), g(C), (h = !1);
    },
    d(S) {
      S && R(e),
        E(t),
        S && R(n),
        S && R(s),
        f && f.d(),
        p && p.d(),
        b && b.d(),
        y && y.d(),
        w && w.d(),
        C && C.d();
    },
  };
}
function zn(i) {
  let e,
    t,
    n,
    s,
    r = (i[5].license ?? "") + "",
    l,
    o;
  return (
    (t = new Vi({ props: { class: "h-4 w-4 -translate-y-px" } })),
    {
      c() {
        (e = $("div")),
          A(t.$$.fragment),
          (n = B()),
          (s = $("span")),
          (l = Y(r)),
          _(e, "class", "flex gap-1 items-center");
      },
      m(a, u) {
        L(a, e, u), O(t, e, null), k(e, n), k(e, s), k(s, l), (o = !0);
      },
      p(a, u) {
        (!o || u & 32) && r !== (r = (a[5].license ?? "") + "") && fe(l, r);
      },
      i(a) {
        o || (d(t.$$.fragment, a), (o = !0));
      },
      o(a) {
        g(t.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && R(e), E(t);
      },
    }
  );
}
function Nn(i) {
  let e,
    t,
    n,
    s,
    r = i[5].author.name + "",
    l;
  return {
    c() {
      (e = $("div")),
        (t = $("span")),
        (t.textContent = "Authored by"),
        (n = B()),
        (s = $("span")),
        (l = Y(r)),
        _(s, "class", "font-semibold"),
        _(e, "class", "text-granny-smith-apple flex items-center gap-2");
    },
    m(o, a) {
      L(o, e, a), k(e, t), k(e, n), k(e, s), k(s, l);
    },
    p(o, a) {
      a & 32 && r !== (r = o[5].author.name + "") && fe(l, r);
    },
    d(o) {
      o && R(e);
    },
  };
}
function Fn(i) {
  let e,
    t,
    n,
    s = (i[9].data.gzip / 1024).toFixed(1) + "",
    r,
    l,
    o,
    a,
    u = (i[9].data.size / 1024).toFixed(1) + "",
    c,
    m,
    h;
  return {
    c() {
      (e = $("div")),
        (t = Y(`Bundle size
              `)),
        (n = $("span")),
        (r = Y(s)),
        (l = Y("kb")),
        (o = Y(`
              (gzipped) |
              `)),
        (a = $("span")),
        (c = Y(u)),
        (m = Y("kb")),
        (h = Y(" (uncompressed)")),
        _(n, "class", "font-semibold"),
        _(a, "class", "font-semibold");
    },
    m(f, p) {
      L(f, e, p),
        k(e, t),
        k(e, n),
        k(n, r),
        k(n, l),
        k(e, o),
        k(e, a),
        k(a, c),
        k(a, m),
        k(e, h);
    },
    p(f, p) {
      p & 512 &&
        s !== (s = (f[9].data.gzip / 1024).toFixed(1) + "") &&
        fe(r, s),
        p & 512 &&
          u !== (u = (f[9].data.size / 1024).toFixed(1) + "") &&
          fe(c, u);
    },
    d(f) {
      f && R(e);
    },
  };
}
function Qn(i) {
  let e, t, n, s;
  return (
    (t = new Pi({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = $("a")),
          A(t.$$.fragment),
          _(e, "href", (n = i[5].repository.url.replace(/^git\+/, ""))),
          _(e, "target", "_blank"),
          _(e, "class", "hover:underline"),
          _(e, "rel", "noopener noreferrer"),
          _(e, "title", "Github");
      },
      m(r, l) {
        L(r, e, l), O(t, e, null), (s = !0);
      },
      p(r, l) {
        (!s ||
          (l & 32 && n !== (n = r[5].repository.url.replace(/^git\+/, "")))) &&
          _(e, "href", n);
      },
      i(r) {
        s || (d(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && R(e), E(t);
      },
    }
  );
}
function Un(i) {
  let e, t, n, s;
  return (
    (t = new Di({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = $("a")),
          A(t.$$.fragment),
          _(e, "href", (n = i[5].homepage)),
          _(e, "target", "_blank"),
          _(e, "class", "hover:underline"),
          _(e, "rel", "noopener noreferrer"),
          _(e, "title", "Homepage");
      },
      m(r, l) {
        L(r, e, l), O(t, e, null), (s = !0);
      },
      p(r, l) {
        (!s || (l & 32 && n !== (n = r[5].homepage))) && _(e, "href", n);
      },
      i(r) {
        s || (d(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && R(e), E(t);
      },
    }
  );
}
function jn(i) {
  let e, t, n, s;
  return (
    (t = new vi({ props: { class: "h-5 w-5" } })),
    {
      c() {
        (e = $("a")),
          A(t.$$.fragment),
          _(e, "href", (n = i[5].bugs.url)),
          _(e, "target", "_blank"),
          _(e, "class", "hover:underline"),
          _(e, "rel", "noopener noreferrer"),
          _(e, "title", "Bugs");
      },
      m(r, l) {
        L(r, e, l), O(t, e, null), (s = !0);
      },
      p(r, l) {
        (!s || (l & 32 && n !== (n = r[5].bugs.url))) && _(e, "href", n);
      },
      i(r) {
        s || (d(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && R(e), E(t);
      },
    }
  );
}
function va(i) {
  let e,
    t,
    n,
    s,
    r,
    l,
    o,
    a,
    u = cn(Bn, i[0]) + "",
    c,
    m,
    h,
    f,
    p,
    b,
    y,
    w,
    C,
    q,
    S;
  o = new Us({ props: { class: "h-6 w-6" } });
  const I = [ka, ya],
    v = [];
  function M(F, re) {
    return F[4] ? 0 : 1;
  }
  (p = M(i)), (b = v[p] = I[p](i));
  let P = i[6] && Dn(i);
  return {
    c() {
      (e = $("li")),
        (t = $("div")),
        (n = $("div")),
        (s = $("div")),
        (r = $("a")),
        (l = $("div")),
        A(o.$$.fragment),
        (a = B()),
        (c = Y(u)),
        (h = B()),
        (f = $("div")),
        b.c(),
        (y = B()),
        P && P.c(),
        ie(l, "hidden", !i[6]),
        _(r, "href", (m = `https://npmjs.com/package/${i[0]}`)),
        _(r, "target", "_blank"),
        _(
          r,
          "class",
          "hover:underline font-medium whitespace-nowrap flex items-center gap-2 text-lg"
        ),
        _(r, "rel", "noopener noreferrer"),
        ie(r, "pt-1", i[6]),
        _(f, "class", "grid place-items-end gap-2 items-center"),
        _(n, "class", "flex justify-between p-4 py-2"),
        _(
          t,
          "class",
          "transition-[transform,background] duration-300 ease-in-out svelte-8luwom"
        ),
        ie(t, "expanded", i[6]),
        _(e, "class", "animate-fadeIn transition-opacity svelte-8luwom"),
        _(
          e,
          "style",
          (w = `animation-delay: ${(i[3] + 1) * i[13]}s; opacity: ${
            i[7] ? 0.4 : 1
          }!important;`)
        ),
        ie(e, "border-t", i[3] !== 0);
    },
    m(F, re) {
      L(F, e, re),
        k(e, t),
        k(t, n),
        k(n, s),
        k(s, r),
        k(r, l),
        O(o, l, null),
        k(r, a),
        k(r, c),
        k(n, h),
        k(n, f),
        v[p].m(f, null),
        k(t, y),
        P && P.m(t, null),
        (C = !0),
        q || ((S = [we(e, "click", i[12]), we(e, "keydown", i[12])]), (q = !0));
    },
    p(F, [re]) {
      (!C || re & 64) && ie(l, "hidden", !F[6]),
        (!C || re & 1) && u !== (u = cn(Bn, F[0]) + "") && fe(c, u),
        (!C || (re & 1 && m !== (m = `https://npmjs.com/package/${F[0]}`))) &&
          _(r, "href", m),
        (!C || re & 64) && ie(r, "pt-1", F[6]);
      let ye = p;
      (p = M(F)),
        p === ye
          ? v[p].p(F, re)
          : (Z(),
            g(v[ye], 1, 1, () => {
              v[ye] = null;
            }),
            K(),
            (b = v[p]),
            b ? b.p(F, re) : ((b = v[p] = I[p](F)), b.c()),
            d(b, 1),
            b.m(f, null)),
        F[6]
          ? P
            ? (P.p(F, re), re & 64 && d(P, 1))
            : ((P = Dn(F)), P.c(), d(P, 1), P.m(t, null))
          : P &&
            (Z(),
            g(P, 1, 1, () => {
              P = null;
            }),
            K()),
        (!C || re & 64) && ie(t, "expanded", F[6]),
        (!C ||
          (re & 136 &&
            w !==
              (w = `animation-delay: ${(F[3] + 1) * F[13]}s; opacity: ${
                F[7] ? 0.4 : 1
              }!important;`))) &&
          _(e, "style", w),
        (!C || re & 8) && ie(e, "border-t", F[3] !== 0);
    },
    i(F) {
      C || (d(o.$$.fragment, F), d(b), d(P), (C = !0));
    },
    o(F) {
      g(o.$$.fragment, F), g(b), g(P), (C = !1);
    },
    d(F) {
      F && R(e), E(o), v[p].d(), P && P.d(), (q = !1), Se(S);
    },
  };
}
const Bn = 36;
function $a(i, e, t) {
  let n,
    s,
    r,
    l,
    { name: o = "" } = e,
    { version: a = "" } = e,
    { latest: u = "" } = e,
    { index: c = 0 } = e,
    { isLatest: m = !1 } = e,
    { meta: h } = e,
    { expandedRowIndex: f = -1 } = e;
  const p = wt(),
    b = Ms();
  ft(i, b, (v) => t(8, (r = v)));
  async function y(v) {
    try {
      const M = await r.mutateAsync(v);
      p.setQueryData(Ye.package, Ds(M));
    } catch (M) {
      console.log("Failed to upgrade packages:", { originalError: M });
    }
  }
  function w() {
    f === c ? t(15, (f = -1)) : t(15, (f = c));
  }
  const C = 1 / 30;
  function q(v) {
    v.key === "Escape" && t(15, (f = -1));
  }
  const S = si(o);
  ft(i, S, (v) => t(9, (l = v))),
    nt(() => {
      window.addEventListener("keydown", q);
    }),
    zt(() => {
      window.removeEventListener("keydown", q);
    });
  const I = (v) => {
    v.stopPropagation(), y([{ name: o, version: a, latest: u, meta: h }]);
  };
  return (
    (i.$$set = (v) => {
      "name" in v && t(0, (o = v.name)),
        "version" in v && t(1, (a = v.version)),
        "latest" in v && t(2, (u = v.latest)),
        "index" in v && t(3, (c = v.index)),
        "isLatest" in v && t(4, (m = v.isLatest)),
        "meta" in v && t(5, (h = v.meta)),
        "expandedRowIndex" in v && t(15, (f = v.expandedRowIndex));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 32776 && t(6, (n = f === c)),
        i.$$.dirty & 32832 && t(7, (s = !n && f !== -1));
    }),
    [o, a, u, c, m, h, n, s, r, l, b, y, w, C, S, f, I]
  );
}
class Ca extends j {
  constructor(e) {
    super(),
      U(this, e, $a, va, Q, {
        name: 0,
        version: 1,
        latest: 2,
        index: 3,
        isLatest: 4,
        meta: 5,
        expandedRowIndex: 15,
      });
  }
}
function Zn(i, e, t) {
  const n = i.slice();
  return (n[5] = e[t]), n;
}
function Kn(i) {
  let e,
    t,
    n = i[5] + 1 + "",
    s,
    r,
    l,
    o;
  return {
    c() {
      (e = $("li")),
        (t = $("button")),
        (s = Y(n)),
        _(t, "data-page", (r = i[5])),
        _(t, "class", "btn-arrow text-xl svelte-16bdnnj"),
        ie(t, "bg-castleton-green", i[5] === i[0]);
    },
    m(a, u) {
      L(a, e, u), k(e, t), k(t, s), l || ((o = we(t, "click", i[2])), (l = !0));
    },
    p(a, u) {
      u & 2 && n !== (n = a[5] + 1 + "") && fe(s, n),
        u & 2 && r !== (r = a[5]) && _(t, "data-page", r),
        u & 3 && ie(t, "bg-castleton-green", a[5] === a[0]);
    },
    d(a) {
      a && R(e), (l = !1), o();
    },
  };
}
function Ra(i) {
  let e,
    t,
    n,
    s,
    r,
    l,
    o,
    a,
    u,
    c,
    m,
    h,
    f,
    p = Dt(0, i[1]),
    b = [];
  for (let y = 0; y < p.length; y += 1) b[y] = Kn(Zn(i, p, y));
  return {
    c() {
      (e = $("ul")), (t = $("li")), (n = $("button")), (s = Y("◄")), (l = B());
      for (let y = 0; y < b.length; y += 1) b[y].c();
      (o = B()),
        (a = $("li")),
        (u = $("button")),
        (c = Y("►")),
        _(n, "class", "btn-arrow svelte-16bdnnj"),
        (n.disabled = r = i[0] === 0),
        _(u, "class", "btn-arrow svelte-16bdnnj"),
        (u.disabled = m = i[0] === i[1] - 1),
        _(
          e,
          "class",
          "inline-flex mx-auto font-medium p-4 py-2 items-center gap-2"
        );
    },
    m(y, w) {
      L(y, e, w), k(e, t), k(t, n), k(n, s), k(e, l);
      for (let C = 0; C < b.length; C += 1) b[C] && b[C].m(e, null);
      k(e, o),
        k(e, a),
        k(a, u),
        k(u, c),
        h || ((f = [we(n, "click", i[4]), we(u, "click", i[3])]), (h = !0));
    },
    p(y, [w]) {
      if ((w & 1 && r !== (r = y[0] === 0) && (n.disabled = r), w & 7)) {
        p = Dt(0, y[1]);
        let C;
        for (C = 0; C < p.length; C += 1) {
          const q = Zn(y, p, C);
          b[C] ? b[C].p(q, w) : ((b[C] = Kn(q)), b[C].c(), b[C].m(e, o));
        }
        for (; C < b.length; C += 1) b[C].d(1);
        b.length = p.length;
      }
      w & 3 && m !== (m = y[0] === y[1] - 1) && (u.disabled = m);
    },
    i: ee,
    o: ee,
    d(y) {
      y && R(e), ve(b, y), (h = !1), Se(f);
    },
  };
}
function La(i, e, t) {
  let { pages: n = 0 } = e,
    { pageIndex: s = 0 } = e;
  function r(a) {
    const { page: u } = a.target.dataset;
    t(0, (s = Number(u)));
  }
  function l() {
    s < n - 1 && t(0, s++, s);
  }
  function o() {
    s > 0 && t(0, s--, s);
  }
  return (
    (i.$$set = (a) => {
      "pages" in a && t(1, (n = a.pages)),
        "pageIndex" in a && t(0, (s = a.pageIndex));
    }),
    [s, n, r, l, o]
  );
}
class Sa extends j {
  constructor(e) {
    super(), U(this, e, La, Ra, Q, { pages: 1, pageIndex: 0 });
  }
}
function Hn(i, e, t) {
  const n = i.slice();
  return (
    (n[28] = e[t].name),
    (n[29] = e[t].version),
    (n[30] = e[t].latest),
    (n[31] = e[t].isLatest),
    (n[32] = e[t].meta),
    (n[34] = t),
    n
  );
}
function xn(i, e, t) {
  const n = i.slice();
  return (n[35] = e[t].keys), (n[36] = e[t].label), n;
}
function Gn(i, e, t) {
  const n = i.slice();
  return (n[39] = e[t].symbol), (n[40] = e[t].rotation), n;
}
function Ta(i) {
  let e, t;
  return (
    (e = new Ui({})),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Oa(i) {
  let e, t;
  return (
    (e = new tl({})),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Wn(i) {
  let e,
    t,
    n,
    s,
    r = i[39] + "",
    l,
    o,
    a;
  return (
    (t = new Fs({
      props: { class: "h-3 w-3", style: `transform: rotate(${i[40]}deg);` },
    })),
    {
      c() {
        (e = $("kbd")),
          A(t.$$.fragment),
          (n = B()),
          (s = $("span")),
          (l = Y(r)),
          (o = B()),
          _(s, "class", "sr-only"),
          _(
            e,
            "class",
            "text-sm font-semibold flex p-1.5 bg-castleton-green/40 rounded"
          );
      },
      m(u, c) {
        L(u, e, c), O(t, e, null), k(e, n), k(e, s), k(s, l), k(e, o), (a = !0);
      },
      p: ee,
      i(u) {
        a || (d(t.$$.fragment, u), (a = !0));
      },
      o(u) {
        g(t.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && R(e), E(t);
      },
    }
  );
}
function Vn(i) {
  let e,
    t,
    n,
    s,
    r = i[36] + "",
    l,
    o,
    a,
    u = i[35],
    c = [];
  for (let h = 0; h < u.length; h += 1) c[h] = Wn(Gn(i, u, h));
  const m = (h) =>
    g(c[h], 1, 1, () => {
      c[h] = null;
    });
  return {
    c() {
      (e = $("li")), (t = $("div"));
      for (let h = 0; h < c.length; h += 1) c[h].c();
      (n = B()),
        (s = $("span")),
        (l = Y(r)),
        (o = B()),
        _(t, "class", "flex gap-2"),
        _(s, "class", "ml-2 text-sm"),
        _(e, "class", "flex items-center");
    },
    m(h, f) {
      L(h, e, f), k(e, t);
      for (let p = 0; p < c.length; p += 1) c[p] && c[p].m(t, null);
      k(e, n), k(e, s), k(s, l), k(e, o), (a = !0);
    },
    p(h, f) {
      if (f[0] & 32768) {
        u = h[35];
        let p;
        for (p = 0; p < u.length; p += 1) {
          const b = Gn(h, u, p);
          c[p]
            ? (c[p].p(b, f), d(c[p], 1))
            : ((c[p] = Wn(b)), c[p].c(), d(c[p], 1), c[p].m(t, null));
        }
        for (Z(), p = u.length; p < c.length; p += 1) m(p);
        K();
      }
    },
    i(h) {
      if (!a) {
        for (let f = 0; f < u.length; f += 1) d(c[f]);
        a = !0;
      }
    },
    o(h) {
      c = c.filter(Boolean);
      for (let f = 0; f < c.length; f += 1) g(c[f]);
      a = !1;
    },
    d(h) {
      h && R(e), ve(c, h);
    },
  };
}
function Jn(i) {
  let e, t;
  return (
    (e = new Qs({ props: { class: "h-4 w-4 ml-1" } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Xn(i) {
  let e, t;
  return (
    (e = new Ws({
      props: {
        disabled: i[12].isLoading,
        isLoading: i[12].isLoading,
        $$slots: { default: [Ea] },
        $$scope: { ctx: i },
      },
    })),
    e.$on("click", i[24]),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s[0] & 4096 && (r.disabled = n[12].isLoading),
          s[0] & 4096 && (r.isLoading = n[12].isLoading),
          s[1] & 4096 && (r.$$scope = { dirty: s, ctx: n }),
          e.$set(r);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Ea(i) {
  let e;
  return {
    c() {
      e = Y("Upgrade all");
    },
    m(t, n) {
      L(t, e, n);
    },
    d(t) {
      t && R(e);
    },
  };
}
function Yn(i) {
  let e, t, n;
  function s(l) {
    i[25](l);
  }
  let r = {
    index: i[34],
    name: i[28],
    version: i[29],
    latest: i[30],
    isLatest: i[31],
    meta: i[32],
  };
  return (
    i[5] !== void 0 && (r.expandedRowIndex = i[5]),
    (e = new Ca({ props: r })),
    Ve.push(() => Ft(e, "expandedRowIndex", s)),
    {
      c() {
        A(e.$$.fragment);
      },
      m(l, o) {
        O(e, l, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        o[0] & 1024 && (a.name = l[28]),
          o[0] & 1024 && (a.version = l[29]),
          o[0] & 1024 && (a.latest = l[30]),
          o[0] & 1024 && (a.isLatest = l[31]),
          o[0] & 1024 && (a.meta = l[32]),
          !t &&
            o[0] & 32 &&
            ((t = !0), (a.expandedRowIndex = l[5]), Nt(() => (t = !1))),
          e.$set(a);
      },
      i(l) {
        n || (d(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
function es(i) {
  let e, t, n, s, r;
  function l(a) {
    i[26](a);
  }
  let o = { pages: i[11] };
  return (
    i[2] !== void 0 && (o.pageIndex = i[2]),
    (n = new Sa({ props: o })),
    Ve.push(() => Ft(n, "pageIndex", l)),
    {
      c() {
        (e = $("footer")),
          (t = $("div")),
          A(n.$$.fragment),
          _(t, "class", "bg-slate-900/90 rounded-full"),
          _(e, "class", "grid place-items-center");
      },
      m(a, u) {
        L(a, e, u), k(e, t), O(n, t, null), (r = !0);
      },
      p(a, u) {
        const c = {};
        u[0] & 2048 && (c.pages = a[11]),
          !s &&
            u[0] & 4 &&
            ((s = !0), (c.pageIndex = a[2]), Nt(() => (s = !1))),
          n.$set(c);
      },
      i(a) {
        r || (d(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        g(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && R(e), E(n);
      },
    }
  );
}
function Pa(i) {
  let e,
    t,
    n,
    s,
    r,
    l,
    o,
    a,
    u,
    c,
    m,
    h,
    f,
    p,
    b,
    y,
    w = i[0] === "dependencies" ? "Dependencies" : "Dev Dependencies",
    C,
    q,
    S,
    I = i[4].length + "",
    v,
    M,
    P = i[1].length + "",
    F,
    re,
    ye,
    Pe,
    Fe,
    Qe,
    J,
    $e,
    Ce,
    vt,
    xt;
  const Gt = [Oa, Ta],
    Ae = [];
  function Wt(D, X) {
    return D[6] ? 0 : 1;
  }
  (s = Wt(i)), (r = Ae[s] = Gt[s](i));
  let qe = i[15],
    oe = [];
  for (let D = 0; D < qe.length; D += 1) oe[D] = Vn(xn(i, qe, D));
  const Js = (D) =>
    g(oe[D], 1, 1, () => {
      oe[D] = null;
    });
  let pe = i[8] && Jn(),
    he = !i[8] && Xn(i),
    Ie = i[10],
    ae = [];
  for (let D = 0; D < Ie.length; D += 1) ae[D] = Yn(Hn(i, Ie, D));
  const Xs = (D) =>
    g(ae[D], 1, 1, () => {
      ae[D] = null;
    });
  let de = i[11] > 1 && es(i);
  return {
    c() {
      (e = $("div")),
        (t = $("aside")),
        (n = $("button")),
        r.c(),
        (l = B()),
        (o = $("ul"));
      for (let D = 0; D < oe.length; D += 1) oe[D].c();
      (u = B()),
        (c = $("section")),
        (m = $("div")),
        (h = $("input")),
        (f = B()),
        (p = $("header")),
        (b = $("div")),
        (y = $("div")),
        (C = Y(w)),
        (q = B()),
        (S = $("span")),
        (v = Y(I)),
        (M = Y("/")),
        (F = Y(P)),
        (re = B()),
        pe && pe.c(),
        (ye = B()),
        (Pe = $("div")),
        he && he.c(),
        (Fe = B()),
        (Qe = $("main")),
        (J = $("ul"));
      for (let D = 0; D < ae.length; D += 1) ae[D].c();
      ($e = B()),
        de && de.c(),
        _(n, "class", "help-trigger svelte-1lgocty"),
        ie(n, "hidden", i[6]),
        _(o, "class", "bg-slate-900/60 p-4 rounded-xl grid gap-2 opacity-10"),
        _(o, "aria-hidden", (a = !i[6])),
        ie(o, "opacity-100", i[6]),
        _(
          t,
          "class",
          "absolute right-0 top-8 transition-all duration-300 ease-in"
        ),
        ie(t, "translate-x-64", i[6]),
        _(h, "type", "search"),
        _(h, "class", "search-input svelte-1lgocty"),
        _(h, "placeholder", "package name or version"),
        _(m, "class", ""),
        _(
          S,
          "class",
          "text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
        ),
        _(b, "class", "flex items-center justify-between w-full"),
        _(
          p,
          "class",
          "p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2"
        ),
        _(J, "class", "grid"),
        _(Qe, "class", "min-h-[32rem] mx-2"),
        _(
          c,
          "class",
          "bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2"
        ),
        _(e, "class", "relative");
    },
    m(D, X) {
      L(D, e, X), k(e, t), k(t, n), Ae[s].m(n, null), k(t, l), k(t, o);
      for (let be = 0; be < oe.length; be += 1) oe[be] && oe[be].m(o, null);
      k(e, u),
        k(e, c),
        k(c, m),
        k(m, h),
        Yt(h, i[3]),
        k(c, f),
        k(c, p),
        k(p, b),
        k(b, y),
        k(y, C),
        k(y, q),
        k(y, S),
        k(S, v),
        k(S, M),
        k(S, F),
        k(b, re),
        pe && pe.m(b, null),
        k(p, ye),
        k(p, Pe),
        he && he.m(Pe, null),
        k(c, Fe),
        k(c, Qe),
        k(Qe, J);
      for (let be = 0; be < ae.length; be += 1) ae[be] && ae[be].m(J, null);
      k(c, $e),
        de && de.m(c, null),
        (Ce = !0),
        vt ||
          ((xt = [
            we(n, "click", i[19]),
            nr(nl.call(null, t)),
            we(t, "outsideclick", i[20]),
            we(h, "input", i[21]),
            we(h, "focus", i[22]),
            we(h, "blur", i[23]),
          ]),
          (vt = !0));
    },
    p(D, X) {
      let be = s;
      if (
        ((s = Wt(D)),
        s !== be &&
          (Z(),
          g(Ae[be], 1, 1, () => {
            Ae[be] = null;
          }),
          K(),
          (r = Ae[s]),
          r || ((r = Ae[s] = Gt[s](D)), r.c()),
          d(r, 1),
          r.m(n, null)),
        (!Ce || X[0] & 64) && ie(n, "hidden", D[6]),
        X[0] & 32768)
      ) {
        qe = D[15];
        let te;
        for (te = 0; te < qe.length; te += 1) {
          const He = xn(D, qe, te);
          oe[te]
            ? (oe[te].p(He, X), d(oe[te], 1))
            : ((oe[te] = Vn(He)), oe[te].c(), d(oe[te], 1), oe[te].m(o, null));
        }
        for (Z(), te = qe.length; te < oe.length; te += 1) Js(te);
        K();
      }
      if (
        ((!Ce || (X[0] & 64 && a !== (a = !D[6]))) && _(o, "aria-hidden", a),
        (!Ce || X[0] & 64) && ie(o, "opacity-100", D[6]),
        (!Ce || X[0] & 64) && ie(t, "translate-x-64", D[6]),
        X[0] & 8 && h.value !== D[3] && Yt(h, D[3]),
        (!Ce || X[0] & 1) &&
          w !==
            (w =
              D[0] === "dependencies" ? "Dependencies" : "Dev Dependencies") &&
          fe(C, w),
        (!Ce || X[0] & 16) && I !== (I = D[4].length + "") && fe(v, I),
        (!Ce || X[0] & 2) && P !== (P = D[1].length + "") && fe(F, P),
        D[8]
          ? pe
            ? X[0] & 256 && d(pe, 1)
            : ((pe = Jn()), pe.c(), d(pe, 1), pe.m(b, null))
          : pe &&
            (Z(),
            g(pe, 1, 1, () => {
              pe = null;
            }),
            K()),
        D[8]
          ? he &&
            (Z(),
            g(he, 1, 1, () => {
              he = null;
            }),
            K())
          : he
          ? (he.p(D, X), X[0] & 256 && d(he, 1))
          : ((he = Xn(D)), he.c(), d(he, 1), he.m(Pe, null)),
        X[0] & 1056)
      ) {
        Ie = D[10];
        let te;
        for (te = 0; te < Ie.length; te += 1) {
          const He = Hn(D, Ie, te);
          ae[te]
            ? (ae[te].p(He, X), d(ae[te], 1))
            : ((ae[te] = Yn(He)), ae[te].c(), d(ae[te], 1), ae[te].m(J, null));
        }
        for (Z(), te = Ie.length; te < ae.length; te += 1) Xs(te);
        K();
      }
      D[11] > 1
        ? de
          ? (de.p(D, X), X[0] & 2048 && d(de, 1))
          : ((de = es(D)), de.c(), d(de, 1), de.m(c, null))
        : de &&
          (Z(),
          g(de, 1, 1, () => {
            de = null;
          }),
          K());
    },
    i(D) {
      if (!Ce) {
        d(r);
        for (let X = 0; X < qe.length; X += 1) d(oe[X]);
        d(pe), d(he);
        for (let X = 0; X < Ie.length; X += 1) d(ae[X]);
        d(de), (Ce = !0);
      }
    },
    o(D) {
      g(r), (oe = oe.filter(Boolean));
      for (let X = 0; X < oe.length; X += 1) g(oe[X]);
      g(pe), g(he), (ae = ae.filter(Boolean));
      for (let X = 0; X < ae.length; X += 1) g(ae[X]);
      g(de), (Ce = !1);
    },
    d(D) {
      D && R(e),
        Ae[s].d(),
        ve(oe, D),
        pe && pe.d(),
        he && he.d(),
        ve(ae, D),
        de && de.d(),
        (vt = !1),
        Se(xt);
    },
  };
}
function Aa(i, e, t) {
  let n,
    s,
    r,
    l,
    o,
    a,
    u,
    c,
    m,
    { selectedTab: h = "dependencies" } = e,
    { entries: f = [] } = e,
    p = 0,
    b = -1,
    y = "",
    w = !1,
    C = !1;
  const q = Ms();
  ft(i, q, (J) => t(12, (m = J)));
  const S = wt();
  async function I(J) {
    try {
      const $e = await m.mutateAsync(J);
      S.setQueryData(Ye.package, Ds($e)), await S.refetchQueries([Ye.package]);
    } catch ($e) {
      console.log("Failed to upgrade packages:", { originalError: $e });
    }
  }
  ri((J) => {
    if (J.shiftKey)
      switch (J.key) {
        case "ArrowRight":
        case "ArrowLeft":
          J.preventDefault(),
            t(
              0,
              (h = h === "dependencies" ? "devDependencies" : "dependencies")
            ),
            t(2, (p = 0)),
            t(5, (b = -1));
          break;
      }
    switch (J.key) {
      case "ArrowUp":
        J.preventDefault(), b > 0 ? t(5, b--, b) : t(5, (b = o.length - 1));
        break;
      case "ArrowDown":
        J.preventDefault(), b < o.length - 1 ? t(5, b++, b) : t(5, (b = 0));
        break;
      case "ArrowLeft":
        p > 0 && (J.preventDefault(), t(2, p--, p), t(5, (b = -1)));
        break;
      case "ArrowRight":
        p < s - 1 && (J.preventDefault(), t(2, p++, p), t(5, (b = -1)));
        break;
      case "Escape":
        J.preventDefault(), w && t(6, (w = !1));
        break;
      case "h":
        C || (J.preventDefault(), t(6, (w = !w)));
    }
  });
  const v = [
      {
        keys: [
          { symbol: "↑", rotation: 0 },
          { symbol: "↓", rotation: 180 },
        ],
        label: "Switch rows.",
      },
      {
        keys: [
          { symbol: "←", rotation: -90 },
          { symbol: "→", rotation: 90 },
        ],
        label: "Switch pages.",
      },
      {
        keys: [
          { symbol: "←", rotation: -90 },
          { symbol: "→", rotation: 90 },
        ],
        label: "+ Shift, Switch tabs.",
      },
    ],
    M = () => {
      t(6, (w = !w));
    },
    P = () => t(6, (w = !1));
  function F() {
    (y = this.value), t(3, y);
  }
  const re = () => {
      t(7, (C = !0));
    },
    ye = () => {
      t(7, (C = !1));
    },
    Pe = () => I(u);
  function Fe(J) {
    (b = J), t(5, b), t(0, h), t(3, y);
  }
  function Qe(J) {
    (p = J), t(2, p), t(0, h), t(3, y);
  }
  return (
    (i.$$set = (J) => {
      "selectedTab" in J && t(0, (h = J.selectedTab)),
        "entries" in J && t(1, (f = J.entries));
    }),
    (i.$$.update = () => {
      i.$$.dirty[0] & 10 &&
        t(
          18,
          (n = f.filter(
            ({ name: J, version: $e }) =>
              J.toLowerCase().includes(y.toLowerCase()) ||
              $e.toLowerCase().includes(y.toLowerCase())
          ))
        ),
        i.$$.dirty[0] & 262144 && t(11, (s = Math.ceil(n.length / Ct))),
        i.$$.dirty[0] & 262144 &&
          t(
            16,
            (r = n
              .map((J) => ({ ...J, isLatest: Ss(J.version, J.latest) }))
              .sort((J, $e) =>
                J.isLatest && $e.isLatest
                  ? 0
                  : J.isLatest && !$e.isLatest
                  ? 1
                  : -1
              ))
          ),
        i.$$.dirty[0] & 1 && h && (t(2, (p = 0)), t(5, (b = -1))),
        i.$$.dirty[0] & 8 && y && (t(2, (p = 0)), t(5, (b = -1))),
        i.$$.dirty[0] & 4 && t(17, (l = p * Ct)),
        i.$$.dirty[0] & 196608 && t(10, (o = r.slice(l, l + Ct))),
        i.$$.dirty[0] & 65536 &&
          t(
            4,
            ([a, u] = Ns(zs("isLatest"), r)),
            a,
            (t(9, u), t(16, r), t(18, n), t(1, f), t(3, y))
          ),
        i.$$.dirty[0] & 18 && t(8, (c = a.length === f.length));
    }),
    [
      h,
      f,
      p,
      y,
      a,
      b,
      w,
      C,
      c,
      u,
      o,
      s,
      m,
      q,
      I,
      v,
      r,
      l,
      n,
      M,
      P,
      F,
      re,
      ye,
      Pe,
      Fe,
      Qe,
    ]
  );
}
class qa extends j {
  constructor(e) {
    super(),
      U(this, e, Aa, Pa, Q, { selectedTab: 0, entries: 1 }, null, [-1, -1]);
  }
}
const Ia = "@greenbot/cli",
  Ma = "0.23.0",
  Da = ["greenbot", "cli", "package updater"],
  za = "An interactive package updater for npm based applications",
  Na = "https://github.com/alanrsoares/greenbot",
  Fa = "MIT",
  Qa = ["dist/", "bin/"],
  Ua = "./bin/greenbot.cjs",
  ja = "module",
  Ba = {
    dev: "vite",
    build: "vite build",
    serve: "vite preview",
    check: "svelte-check --tsconfig ./tsconfig.json",
    preversion: "yarn build",
    release: "npm publish && git push && git push --tags",
    prepare: "husky install",
  },
  Za = {
    "@sveltejs/vite-plugin-svelte": "^2.4.1",
    "@tsconfig/strictest": "^2.0.1",
    "@types/cors": "^2.8.13",
    autoprefixer: "^10.4.14",
    cssnano: "^5.1.15",
    husky: "^8.0.3",
    postcss: "^8.4.24",
    "postcss-load-config": "^4.0.1",
    prettier: "^2.8.8",
    "pretty-quick": "^3.1.3",
    svelte: "^3.59.1",
    "svelte-check": "^3.4.3",
    "svelte-preprocess": "^5.0.4",
    tailwindcss: "^3.3.2",
    tslib: "^2.5.3",
    typescript: "^5.1.3",
    vite: "^4.3.9",
    "vite-tsconfig-paths": "^4.2.0",
  },
  Ka = {
    "@tanstack/svelte-query": "^4.29.11",
    "body-parser": "^1.20.2",
    chalk: "^4.1.2",
    cors: "^2.8.5",
    express: "^4.18.2",
    ky: "^0.33.3",
    "lucide-svelte": "^0.229.0",
    open: "^8.4.2",
    "package-json": "^7.0.0",
    rambda: "^7.5.0",
    "replace-in-file": "^6.3.5",
    "svelte-markdown": "^0.2.3",
    "typewriter-effect": "^2.20.1",
  },
  Ha = {
    name: Ia,
    version: Ma,
    keywords: Da,
    description: za,
    homepage: Na,
    license: Fa,
    files: Qa,
    bin: Ua,
    type: ja,
    scripts: Ba,
    devDependencies: Za,
    dependencies: Ka,
  };
const xa = (i) => ({}),
  ts = (i) => ({}),
  Ga = (i) => ({}),
  ns = (i) => ({});
function Wa(i) {
  let e, t, n, s, r, l, o, a, u, c, m, h, f, p, b;
  const y = i[1].logo,
    w = x(y, i, i[0], ns),
    C = i[1].version,
    q = x(C, i, i[0], ts),
    S = i[1].default,
    I = x(S, i, i[0], null);
  return {
    c() {
      (e = $("div")),
        (t = $("header")),
        (n = $("nav")),
        (s = $("h1")),
        (r = $("div")),
        w && w.c(),
        (l = B()),
        (o = $("div")),
        (o.textContent = "_greenbot"),
        (a = B()),
        q && q.c(),
        (u = B()),
        (c = $("main")),
        I && I.c(),
        (m = B()),
        (h = $("footer")),
        (f = $("div")),
        (p = $("span")),
        (p.textContent = `npm-greenbot@v${Ha.version}`),
        _(r, "class", "w-12"),
        _(s, "class", "flex items-center gap-2 whitespace-nowrap p-2"),
        _(
          n,
          "class",
          "md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"
        ),
        _(t, "class", "border-b border-granny-smith-apple/50 bg-slate-900/60"),
        _(c, "class", "layout-main svelte-1m49ym4"),
        _(p, "class", "text-sm"),
        _(f, "class", "max-w-xl m-auto text-center"),
        _(e, "class", "layout svelte-1m49ym4");
    },
    m(v, M) {
      L(v, e, M),
        k(e, t),
        k(t, n),
        k(n, s),
        k(s, r),
        w && w.m(r, null),
        k(s, l),
        k(s, o),
        k(n, a),
        q && q.m(n, null),
        k(e, u),
        k(e, c),
        I && I.m(c, null),
        k(e, m),
        k(e, h),
        k(h, f),
        k(f, p),
        (b = !0);
    },
    p(v, [M]) {
      w &&
        w.p &&
        (!b || M & 1) &&
        W(w, y, v, v[0], b ? G(y, v[0], M, Ga) : V(v[0]), ns),
        q &&
          q.p &&
          (!b || M & 1) &&
          W(q, C, v, v[0], b ? G(C, v[0], M, xa) : V(v[0]), ts),
        I &&
          I.p &&
          (!b || M & 1) &&
          W(I, S, v, v[0], b ? G(S, v[0], M, null) : V(v[0]), null);
    },
    i(v) {
      b || (d(w, v), d(q, v), d(I, v), (b = !0));
    },
    o(v) {
      g(w, v), g(q, v), g(I, v), (b = !1);
    },
    d(v) {
      v && R(e), w && w.d(v), q && q.d(v), I && I.d(v);
    },
  };
}
function Va(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class Ja extends j {
  constructor(e) {
    super(), U(this, e, Va, Wa, Q, {});
  }
}
function Xa(i) {
  let e, t, n, s, r, l, o, a, u;
  return (
    (t = new Us({ props: { class: "h-6 w-6" } })),
    {
      c() {
        (e = $("a")),
          A(t.$$.fragment),
          (n = B()),
          (s = $("div")),
          (r = Y(i[0])),
          (l = Y(" @ ")),
          (o = Y(i[1])),
          _(s, "class", "font-mono font-medium"),
          _(e, "target", "_blank"),
          _(e, "href", (a = `https://www.npmjs.com/package/${i[0]}`)),
          _(e, "rel", "noopener noreferrer"),
          _(e, "class", "svelte-2pn84z");
      },
      m(c, m) {
        L(c, e, m),
          O(t, e, null),
          k(e, n),
          k(e, s),
          k(s, r),
          k(s, l),
          k(s, o),
          (u = !0);
      },
      p(c, [m]) {
        (!u || m & 1) && fe(r, c[0]),
          (!u || m & 2) && fe(o, c[1]),
          (!u ||
            (m & 1 && a !== (a = `https://www.npmjs.com/package/${c[0]}`))) &&
            _(e, "href", a);
      },
      i(c) {
        u || (d(t.$$.fragment, c), (u = !0));
      },
      o(c) {
        g(t.$$.fragment, c), (u = !1);
      },
      d(c) {
        c && R(e), E(t);
      },
    }
  );
}
function Ya(i, e, t) {
  let { name: n = "" } = e,
    { version: s = "" } = e;
  return (
    (i.$$set = (r) => {
      "name" in r && t(0, (n = r.name)),
        "version" in r && t(1, (s = r.version));
    }),
    [n, s]
  );
}
class eu extends j {
  constructor(e) {
    super(), U(this, e, Ya, Xa, Q, { name: 0, version: 1 });
  }
}
function ss(i, e, t) {
  const n = i.slice();
  return (n[3] = e[t]), n;
}
function rs(i) {
  let e,
    t = i[3].label + "",
    n,
    s,
    r,
    l,
    o;
  return {
    c() {
      (e = $("button")),
        (n = Y(t)),
        (s = B()),
        _(e, "data-value", (r = i[3].value)),
        _(e, "class", "svelte-u0zq3l"),
        ie(e, "bg-castleton-green", i[0] === i[3].value);
    },
    m(a, u) {
      L(a, e, u),
        k(e, n),
        k(e, s),
        l ||
          ((o = we(e, "click", function () {
            et(i[2].bind(null, i[3])) &&
              i[2].bind(null, i[3]).apply(this, arguments);
          })),
          (l = !0));
    },
    p(a, u) {
      (i = a),
        u & 2 && t !== (t = i[3].label + "") && fe(n, t),
        u & 2 && r !== (r = i[3].value) && _(e, "data-value", r),
        u & 3 && ie(e, "bg-castleton-green", i[0] === i[3].value);
    },
    d(a) {
      a && R(e), (l = !1), o();
    },
  };
}
function tu(i) {
  let e,
    t = i[1],
    n = [];
  for (let s = 0; s < t.length; s += 1) n[s] = rs(ss(i, t, s));
  return {
    c() {
      e = $("div");
      for (let s = 0; s < n.length; s += 1) n[s].c();
      _(e, "class", "container svelte-u0zq3l");
    },
    m(s, r) {
      L(s, e, r);
      for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
    },
    p(s, [r]) {
      if (r & 7) {
        t = s[1];
        let l;
        for (l = 0; l < t.length; l += 1) {
          const o = ss(s, t, l);
          n[l] ? n[l].p(o, r) : ((n[l] = rs(o)), n[l].c(), n[l].m(e, null));
        }
        for (; l < n.length; l += 1) n[l].d(1);
        n.length = t.length;
      }
    },
    i: ee,
    o: ee,
    d(s) {
      s && R(e), ve(n, s);
    },
  };
}
function nu(i, e, t) {
  let { selectedTab: n = "" } = e,
    { tabs: s = [] } = e,
    { onChange: r } = e;
  return (
    (i.$$set = (l) => {
      "selectedTab" in l && t(0, (n = l.selectedTab)),
        "tabs" in l && t(1, (s = l.tabs)),
        "onChange" in l && t(2, (r = l.onChange));
    }),
    [n, s, r]
  );
}
class su extends j {
  constructor(e) {
    super(), U(this, e, nu, tu, Q, { selectedTab: 0, tabs: 1, onChange: 2 });
  }
}
function ru(i) {
  let e, t, n;
  return {
    c() {
      (e = Re("svg")),
        (t = Re("path")),
        (n = Re("path")),
        _(t, "opacity", "0.2"),
        _(t, "fill-rule", "evenodd"),
        _(t, "clip-rule", "evenodd"),
        _(
          t,
          "d",
          "M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        ),
        _(t, "fill", "currentColor"),
        _(
          n,
          "d",
          "M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        ),
        _(n, "fill", "currentColor"),
        _(e, "stroke", "currentColor"),
        _(e, "fill", "none"),
        _(e, "stroke-width", "0"),
        _(e, "viewBox", "0 0 24 24"),
        _(e, "height", "1em"),
        _(e, "width", "1em"),
        _(e, "xmlns", "http://www.w3.org/2000/svg"),
        ie(e, "animate-spin", i[0]);
    },
    m(s, r) {
      L(s, e, r), k(e, t), k(e, n);
    },
    p(s, [r]) {
      r & 1 && ie(e, "animate-spin", s[0]);
    },
    i: ee,
    o: ee,
    d(s) {
      s && R(e);
    },
  };
}
function iu(i, e, t) {
  let { animated: n = !1 } = e;
  return (
    (i.$$set = (s) => {
      "animated" in s && t(0, (n = s.animated));
    }),
    [n]
  );
}
class lu extends j {
  constructor(e) {
    super(), U(this, e, iu, ru, Q, { animated: 0 });
  }
}
function is(i) {
  let e, t, n, s, r, l;
  return (
    (n = new lu({ props: { animated: !0 } })),
    {
      c() {
        (e = $("div")),
          (t = $("div")),
          A(n.$$.fragment),
          (s = B()),
          (r = $("span")),
          (r.textContent = "Loading dependencies"),
          _(t, "class", "h-4 w-4"),
          _(
            e,
            "class",
            "border-2 border-slate-900 bg-slate-900/60 rounded-3xl flex justify-center items-center overflow-hidden p-8 gap-2"
          );
      },
      m(o, a) {
        L(o, e, a), k(e, t), O(n, t, null), k(e, s), k(e, r), (l = !0);
      },
      i(o) {
        l || (d(n.$$.fragment, o), (l = !0));
      },
      o(o) {
        g(n.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && R(e), E(n);
      },
    }
  );
}
function ls(i) {
  let e, t, n, s, r;
  e = new su({
    props: {
      onChange: i[4],
      selectedTab: i[0],
      tabs: [
        { value: "dependencies", label: "Dependencies" },
        { value: "devDependencies", label: "Dev Dependencies" },
      ],
    },
  });
  function l(a) {
    i[7](a);
  }
  let o = { entries: i[2] };
  return (
    i[0] !== void 0 && (o.selectedTab = i[0]),
    (n = new qa({ props: o })),
    Ve.push(() => Ft(n, "selectedTab", l)),
    {
      c() {
        A(e.$$.fragment), (t = B()), A(n.$$.fragment);
      },
      m(a, u) {
        O(e, a, u), L(a, t, u), O(n, a, u), (r = !0);
      },
      p(a, u) {
        const c = {};
        u & 1 && (c.selectedTab = a[0]), e.$set(c);
        const m = {};
        u & 4 && (m.entries = a[2]),
          !s && u & 1 && ((s = !0), (m.selectedTab = a[0]), Nt(() => (s = !1))),
          n.$set(m);
      },
      i(a) {
        r || (d(e.$$.fragment, a), d(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        g(e.$$.fragment, a), g(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        E(e, a), a && R(t), E(n, a);
      },
    }
  );
}
function ou(i) {
  let e,
    t,
    n,
    s = i[1].isLoading && is(),
    r = i[1].data && ls(i);
  return {
    c() {
      (e = $("div")),
        s && s.c(),
        (t = B()),
        r && r.c(),
        _(e, "class", "w-full grid gap-4");
    },
    m(l, o) {
      L(l, e, o), s && s.m(e, null), k(e, t), r && r.m(e, null), (n = !0);
    },
    p(l, o) {
      l[1].isLoading
        ? s
          ? o & 2 && d(s, 1)
          : ((s = is()), s.c(), d(s, 1), s.m(e, t))
        : s &&
          (Z(),
          g(s, 1, 1, () => {
            s = null;
          }),
          K()),
        l[1].data
          ? r
            ? (r.p(l, o), o & 2 && d(r, 1))
            : ((r = ls(l)), r.c(), d(r, 1), r.m(e, null))
          : r &&
            (Z(),
            g(r, 1, 1, () => {
              r = null;
            }),
            K());
    },
    i(l) {
      n || (d(s), d(r), (n = !0));
    },
    o(l) {
      g(s), g(r), (n = !1);
    },
    d(l) {
      l && R(e), s && s.d(), r && r.d();
    },
  };
}
function au(i) {
  let e, t;
  return (
    (e = new oi({ props: { mood: i[3], slot: "logo" } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s & 8 && (r.mood = n[3]), e.$set(r);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function os(i) {
  let e, t;
  return (
    (e = new eu({
      props: { name: i[1].data.name, version: i[1].data.version },
    })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s & 2 && (r.name = n[1].data.name),
          s & 2 && (r.version = n[1].data.version),
          e.$set(r);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function uu(i) {
  let e,
    t,
    n = i[1].data && os(i);
  return {
    c() {
      (e = $("div")), n && n.c(), _(e, "slot", "version");
    },
    m(s, r) {
      L(s, e, r), n && n.m(e, null), (t = !0);
    },
    p(s, r) {
      s[1].data
        ? n
          ? (n.p(s, r), r & 2 && d(n, 1))
          : ((n = os(s)), n.c(), d(n, 1), n.m(e, null))
        : n &&
          (Z(),
          g(n, 1, 1, () => {
            n = null;
          }),
          K());
    },
    i(s) {
      t || (d(n), (t = !0));
    },
    o(s) {
      g(n), (t = !1);
    },
    d(s) {
      s && R(e), n && n.d();
    },
  };
}
function cu(i) {
  let e, t;
  return (
    (e = new Ja({
      props: {
        $$slots: { version: [uu], logo: [au], default: [ou] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const r = {};
        s & 1039 && (r.$$scope = { dirty: s, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function fu([i, e], t, n) {
  return { name: i, version: e, latest: t[i], meta: n[i] };
}
function hu(i, e, t) {
  let n,
    s,
    r,
    l,
    o = "dependencies";
  function a({ value: f }) {
    t(0, (o = f));
  }
  function u(f, p) {
    return f.filter(([b, y]) => p[b] !== y);
  }
  function c(f) {
    if (f.isLoading) return "asleep";
    if (f.error) return "dead";
    if (f.data) {
      const { dependencies: p, devDependencies: b, resolutions: y } = f.data,
        w = Object.entries({ ...p, ...b });
      return u(w, f.data.resolutions).filter(([q, S]) => !Ss(S, y[q])).length
        ? "angry"
        : "happy";
    }
    return "awake";
  }
  const m = ni();
  ft(i, m, (f) => t(1, (l = f)));
  function h(f) {
    (o = f), t(0, o);
  }
  return (
    (i.$$.update = () => {
      i.$$.dirty & 2 && t(3, (n = c(l))),
        i.$$.dirty & 3 &&
          t(
            6,
            (s =
              l.isLoading || l.error
                ? []
                : u(Object.entries(l.data[o] ?? {}), l.data.resolutions))
          ),
        i.$$.dirty & 66 &&
          t(2, (r = s.map((f) => fu(f, l.data.resolutions, l.data.meta))));
    }),
    [o, l, r, n, a, m, s, h]
  );
}
class du extends j {
  constructor(e) {
    super(), U(this, e, hu, cu, Q, {});
  }
}
function pu(i) {
  let e, t;
  return (
    (e = new du({})),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function mu(i) {
  let e, t;
  return (
    (e = new Nr({
      props: { client: i[0], $$slots: { default: [pu] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const r = {};
        s & 2 && (r.$$scope = { dirty: s, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (d(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function gu(i) {
  return [new vs()];
}
class _u extends j {
  constructor(e) {
    super(), U(this, e, gu, mu, Q, {});
  }
}
const Vs = document.getElementById("app");
if (!Vs) throw new Error("Could not find target element");
new _u({ target: Vs });
