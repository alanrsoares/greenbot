var ai = Object.defineProperty;
var ui = (r, e, t) =>
  e in r
    ? ai(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var Oe = (r, e, t) => (ui(r, typeof e != "symbol" ? e + "" : e, t), t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = t(s);
    fetch(s.href, i);
  }
})();
function ee() {}
function H(r, e) {
  for (const t in e) r[t] = e[t];
  return r;
}
function ks(r) {
  return r();
}
function sn() {
  return Object.create(null);
}
function Ae(r) {
  r.forEach(ks);
}
function at(r) {
  return typeof r == "function";
}
function U(r, e) {
  return r != r
    ? e == e
    : r !== e || (r && typeof r == "object") || typeof r == "function";
}
let dt;
function rn(r, e) {
  return dt || (dt = document.createElement("a")), (dt.href = e), r === dt.href;
}
function ci(r) {
  return Object.keys(r).length === 0;
}
function Kt(r, ...e) {
  if (r == null) {
    for (const n of e) n(void 0);
    return ee;
  }
  const t = r.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function zt(r, e, t) {
  r.$$.on_destroy.push(Kt(e, t));
}
function W(r, e, t, n) {
  if (r) {
    const s = ys(r, e, t, n);
    return r[0](s);
  }
}
function ys(r, e, t, n) {
  return r[1] && n ? H(t.ctx.slice(), r[1](n(e))) : t.ctx;
}
function x(r, e, t, n) {
  if (r[2] && n) {
    const s = r[2](n(t));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const i = [],
        l = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < l; o += 1) i[o] = e.dirty[o] | s[o];
      return i;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function J(r, e, t, n, s, i) {
  if (s) {
    const l = ys(e, t, n, i);
    r.p(l, s);
  }
}
function X(r) {
  if (r.ctx.length > 32) {
    const e = [],
      t = r.ctx.length / 32;
    for (let n = 0; n < t; n++) e[n] = -1;
    return e;
  }
  return -1;
}
function ae(r) {
  const e = {};
  for (const t in r) t[0] !== "$" && (e[t] = r[t]);
  return e;
}
function yt(r, e) {
  const t = {};
  e = new Set(e);
  for (const n in r) !e.has(n) && n[0] !== "$" && (t[n] = r[n]);
  return t;
}
function ln(r) {
  return r ?? "";
}
function fi(r) {
  return r && at(r.destroy) ? r.destroy : ee;
}
function y(r, e) {
  r.appendChild(e);
}
function R(r, e, t) {
  r.insertBefore(e, t || null);
}
function C(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function Se(r, e) {
  for (let t = 0; t < r.length; t += 1) r[t] && r[t].d(e);
}
function v(r) {
  return document.createElement(r);
}
function ve(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function ne(r) {
  return document.createTextNode(r);
}
function Q() {
  return ne(" ");
}
function oe() {
  return ne("");
}
function Le(r, e, t, n) {
  return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
}
function g(r, e, t) {
  t == null
    ? r.removeAttribute(e)
    : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function wt(r, e) {
  for (const t in e) g(r, t, e[t]);
}
function hi(r) {
  return Array.from(r.childNodes);
}
function pe(r, e) {
  (e = "" + e), r.data !== e && (r.data = e);
}
function tt(r, e) {
  r.value = e ?? "";
}
function on(r, e, t) {
  for (let n = 0; n < r.options.length; n += 1) {
    const s = r.options[n];
    if (s.__value === e) {
      s.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (r.selectedIndex = -1);
}
function di(r) {
  const e = r.querySelector(":checked");
  return e && e.__value;
}
function he(r, e, t) {
  r.classList.toggle(e, !!t);
}
function pi(r, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: t, cancelable: n });
}
class mi {
  constructor(e = !1) {
    Oe(this, "is_svg", !1);
    Oe(this, "e");
    Oe(this, "n");
    Oe(this, "t");
    Oe(this, "a");
    (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, t, n = null) {
    this.e ||
      (this.is_svg
        ? (this.e = ve(t.nodeName))
        : (this.e = v(t.nodeType === 11 ? "TEMPLATE" : t.nodeName)),
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
    for (let t = 0; t < this.n.length; t += 1) R(this.t, this.n[t], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(C);
  }
}
function ue(r, e) {
  return new r(e);
}
let nt;
function et(r) {
  nt = r;
}
function ut() {
  if (!nt) throw new Error("Function called outside component initialization");
  return nt;
}
function xe(r) {
  ut().$$.on_mount.push(r);
}
function Gt(r) {
  ut().$$.on_destroy.push(r);
}
function gi() {
  const r = ut();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const s = r.$$.callbacks[e];
    if (s) {
      const i = pi(e, t, { cancelable: n });
      return (
        s.slice().forEach((l) => {
          l.call(r, i);
        }),
        !i.defaultPrevented
      );
    }
    return !0;
  };
}
function ws(r, e) {
  return ut().$$.context.set(r, e), e;
}
function vs(r) {
  return ut().$$.context.get(r);
}
function _i(r, e) {
  const t = r.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Ve = [],
  Me = [];
let We = [];
const Dt = [],
  bi = Promise.resolve();
let Nt = !1;
function ki() {
  Nt || ((Nt = !0), bi.then($s));
}
function vt(r) {
  We.push(r);
}
function st(r) {
  Dt.push(r);
}
const Et = new Set();
let Ke = 0;
function $s() {
  if (Ke !== 0) return;
  const r = nt;
  do {
    try {
      for (; Ke < Ve.length; ) {
        const e = Ve[Ke];
        Ke++, et(e), yi(e.$$);
      }
    } catch (e) {
      throw ((Ve.length = 0), (Ke = 0), e);
    }
    for (et(null), Ve.length = 0, Ke = 0; Me.length; ) Me.pop()();
    for (let e = 0; e < We.length; e += 1) {
      const t = We[e];
      Et.has(t) || (Et.add(t), t());
    }
    We.length = 0;
  } while (Ve.length);
  for (; Dt.length; ) Dt.pop()();
  (Nt = !1), Et.clear(), et(r);
}
function yi(r) {
  if (r.fragment !== null) {
    r.update(), Ae(r.before_update);
    const e = r.dirty;
    (r.dirty = [-1]),
      r.fragment && r.fragment.p(r.ctx, e),
      r.after_update.forEach(vt);
  }
}
function wi(r) {
  const e = [],
    t = [];
  We.forEach((n) => (r.indexOf(n) === -1 ? e.push(n) : t.push(n))),
    t.forEach((n) => n()),
    (We = e);
}
const gt = new Set();
let Ue;
function G() {
  Ue = { r: 0, c: [], p: Ue };
}
function V() {
  Ue.r || Ae(Ue.c), (Ue = Ue.p);
}
function p(r, e) {
  r && r.i && (gt.delete(r), r.i(e));
}
function _(r, e, t, n) {
  if (r && r.o) {
    if (gt.has(r)) return;
    gt.add(r),
      Ue.c.push(() => {
        gt.delete(r), n && (t && r.d(1), n());
      }),
      r.o(e);
  } else n && n();
}
function le(r) {
  return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r);
}
function ke(r, e) {
  const t = {},
    n = {},
    s = { $$scope: 1 };
  let i = r.length;
  for (; i--; ) {
    const l = r[i],
      o = e[i];
    if (o) {
      for (const a in l) a in o || (n[a] = 1);
      for (const a in o) s[a] || ((t[a] = o[a]), (s[a] = 1));
      r[i] = o;
    } else for (const a in l) s[a] = 1;
  }
  for (const l in n) l in t || (t[l] = void 0);
  return t;
}
function we(r) {
  return typeof r == "object" && r !== null ? r : {};
}
function it(r, e, t) {
  const n = r.$$.props[e];
  n !== void 0 && ((r.$$.bound[n] = t), t(r.$$.ctx[n]));
}
function I(r) {
  r && r.c();
}
function E(r, e, t) {
  const { fragment: n, after_update: s } = r.$$;
  n && n.m(e, t),
    vt(() => {
      const i = r.$$.on_mount.map(ks).filter(at);
      r.$$.on_destroy ? r.$$.on_destroy.push(...i) : Ae(i),
        (r.$$.on_mount = []);
    }),
    s.forEach(vt);
}
function A(r, e) {
  const t = r.$$;
  t.fragment !== null &&
    (wi(t.after_update),
    Ae(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function vi(r, e) {
  r.$$.dirty[0] === -1 && (Ve.push(r), ki(), r.$$.dirty.fill(0)),
    (r.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function j(r, e, t, n, s, i, l, o = [-1]) {
  const a = nt;
  et(r);
  const u = (r.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: ee,
    not_equal: s,
    bound: sn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: sn(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root,
  });
  l && l(u.root);
  let c = !1;
  if (
    ((u.ctx = t
      ? t(r, e.props || {}, (d, h, ...f) => {
          const m = f.length ? f[0] : h;
          return (
            u.ctx &&
              s(u.ctx[d], (u.ctx[d] = m)) &&
              (!u.skip_bound && u.bound[d] && u.bound[d](m), c && vi(r, d)),
            h
          );
        })
      : []),
    u.update(),
    (c = !0),
    Ae(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const d = hi(e.target);
      u.fragment && u.fragment.l(d), d.forEach(C);
    } else u.fragment && u.fragment.c();
    e.intro && p(r.$$.fragment), E(r, e.target, e.anchor), $s();
  }
  et(a);
}
class B {
  constructor() {
    Oe(this, "$$");
    Oe(this, "$$set");
  }
  $destroy() {
    A(this, 1), (this.$destroy = ee);
  }
  $on(e, t) {
    if (!at(t)) return ee;
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
      !ci(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const $i = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add($i);
class Je {
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
const rt = typeof window > "u" || "Deno" in window;
function Pe() {}
function Ci(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Ft(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function Cs(r, e) {
  return Math.max(r + (e || 0) - Date.now(), 0);
}
function Ye(r, e, t) {
  return ct(r)
    ? typeof e == "function"
      ? { ...t, queryKey: r, queryFn: e }
      : { ...e, queryKey: r }
    : r;
}
function Ri(r, e, t) {
  return ct(r)
    ? typeof e == "function"
      ? { ...t, mutationKey: r, mutationFn: e }
      : { ...e, mutationKey: r }
    : typeof r == "function"
    ? { ...e, mutationFn: r }
    : { ...r };
}
function qe(r, e, t) {
  return ct(r) ? [{ ...e, queryKey: r }, t] : [r || {}, e];
}
function an(r, e) {
  const {
    type: t = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: l,
    stale: o,
  } = r;
  if (ct(l)) {
    if (n) {
      if (e.queryHash !== Vt(l, e.options)) return !1;
    } else if (!$t(e.queryKey, l)) return !1;
  }
  if (t !== "all") {
    const a = e.isActive();
    if ((t === "active" && !a) || (t === "inactive" && a)) return !1;
  }
  return !(
    (typeof o == "boolean" && e.isStale() !== o) ||
    (typeof s < "u" && s !== e.state.fetchStatus) ||
    (i && !i(e))
  );
}
function un(r, e) {
  const { exact: t, fetching: n, predicate: s, mutationKey: i } = r;
  if (ct(i)) {
    if (!e.options.mutationKey) return !1;
    if (t) {
      if (je(e.options.mutationKey) !== je(i)) return !1;
    } else if (!$t(e.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof n == "boolean" && (e.state.status === "loading") !== n) ||
    (s && !s(e))
  );
}
function Vt(r, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || je)(r);
}
function je(r) {
  return JSON.stringify(r, (e, t) =>
    Ut(t)
      ? Object.keys(t)
          .sort()
          .reduce((n, s) => ((n[s] = t[s]), n), {})
      : t
  );
}
function $t(r, e) {
  return Rs(r, e);
}
function Rs(r, e) {
  return r === e
    ? !0
    : typeof r != typeof e
    ? !1
    : r && e && typeof r == "object" && typeof e == "object"
    ? !Object.keys(e).some((t) => !Rs(r[t], e[t]))
    : !1;
}
function Ls(r, e) {
  if (r === e) return r;
  const t = cn(r) && cn(e);
  if (t || (Ut(r) && Ut(e))) {
    const n = t ? r.length : Object.keys(r).length,
      s = t ? e : Object.keys(e),
      i = s.length,
      l = t ? [] : {};
    let o = 0;
    for (let a = 0; a < i; a++) {
      const u = t ? a : s[a];
      (l[u] = Ls(r[u], e[u])), l[u] === r[u] && o++;
    }
    return n === i && o === n ? r : l;
  }
  return e;
}
function Qt(r, e) {
  if ((r && !e) || (e && !r)) return !1;
  for (const t in r) if (r[t] !== e[t]) return !1;
  return !0;
}
function cn(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function Ut(r) {
  if (!fn(r)) return !1;
  const e = r.constructor;
  if (typeof e > "u") return !0;
  const t = e.prototype;
  return !(!fn(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function fn(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function ct(r) {
  return Array.isArray(r);
}
function Ss(r) {
  return new Promise((e) => {
    setTimeout(e, r);
  });
}
function hn(r) {
  Ss(0).then(r);
}
function Li() {
  if (typeof AbortController == "function") return new AbortController();
}
function jt(r, e, t) {
  return t.isDataEqual != null && t.isDataEqual(r, e)
    ? r
    : typeof t.structuralSharing == "function"
    ? t.structuralSharing(r, e)
    : t.structuralSharing !== !1
    ? Ls(r, e)
    : e;
}
class Si extends Je {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!rt && window.addEventListener) {
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
const Ct = new Si(),
  dn = ["online", "offline"];
class Pi extends Je {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!rt && window.addEventListener) {
          const t = () => e();
          return (
            dn.forEach((n) => {
              window.addEventListener(n, t, !1);
            }),
            () => {
              dn.forEach((n) => {
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
const Rt = new Pi();
function Ti(r) {
  return Math.min(1e3 * 2 ** r, 3e4);
}
function Tt(r) {
  return (r ?? "online") === "online" ? Rt.isOnline() : !0;
}
class Ps {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
}
function _t(r) {
  return r instanceof Ps;
}
function Ts(r) {
  let e = !1,
    t = 0,
    n = !1,
    s,
    i,
    l;
  const o = new Promise((k, $) => {
      (i = k), (l = $);
    }),
    a = (k) => {
      n || (f(new Ps(k)), r.abort == null || r.abort());
    },
    u = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    d = () => !Ct.isFocused() || (r.networkMode !== "always" && !Rt.isOnline()),
    h = (k) => {
      n ||
        ((n = !0),
        r.onSuccess == null || r.onSuccess(k),
        s == null || s(),
        i(k));
    },
    f = (k) => {
      n ||
        ((n = !0), r.onError == null || r.onError(k), s == null || s(), l(k));
    },
    m = () =>
      new Promise((k) => {
        (s = ($) => {
          const w = n || !d();
          return w && k($), w;
        }),
          r.onPause == null || r.onPause();
      }).then(() => {
        (s = void 0), n || r.onContinue == null || r.onContinue();
      }),
    b = () => {
      if (n) return;
      let k;
      try {
        k = r.fn();
      } catch ($) {
        k = Promise.reject($);
      }
      Promise.resolve(k)
        .then(h)
        .catch(($) => {
          var w, P;
          if (n) return;
          const S = (w = r.retry) != null ? w : 3,
            T = (P = r.retryDelay) != null ? P : Ti,
            q = typeof T == "function" ? T(t, $) : T,
            L =
              S === !0 ||
              (typeof S == "number" && t < S) ||
              (typeof S == "function" && S(t, $));
          if (e || !L) {
            f($);
            return;
          }
          t++,
            r.onFail == null || r.onFail(t, $),
            Ss(q)
              .then(() => {
                if (d()) return m();
              })
              .then(() => {
                e ? f($) : b();
              });
        });
    };
  return (
    Tt(r.networkMode) ? b() : m().then(b),
    {
      promise: o,
      cancel: a,
      continue: () => ((s == null ? void 0 : s()) ? o : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const Wt = console;
function Oi() {
  let r = [],
    e = 0,
    t = (c) => {
      c();
    },
    n = (c) => {
      c();
    };
  const s = (c) => {
      let d;
      e++;
      try {
        d = c();
      } finally {
        e--, e || o();
      }
      return d;
    },
    i = (c) => {
      e
        ? r.push(c)
        : hn(() => {
            t(c);
          });
    },
    l =
      (c) =>
      (...d) => {
        i(() => {
          c(...d);
        });
      },
    o = () => {
      const c = r;
      (r = []),
        c.length &&
          hn(() => {
            n(() => {
              c.forEach((d) => {
                t(d);
              });
            });
          });
    };
  return {
    batch: s,
    batchCalls: l,
    schedule: i,
    setNotifyFunction: (c) => {
      t = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
  };
}
const de = Oi();
class Os {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Ft(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      e ?? (rt ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class Ei extends Os {
  constructor(e) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.cache = e.cache),
      (this.logger = e.logger || Wt),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.initialState = e.state || Ai(this.options)),
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
    const n = jt(this.state.data, e, this.options);
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
      n ? n.then(Pe).catch(Pe) : Promise.resolve()
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
      !Cs(this.state.dataUpdatedAt, e)
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
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const f = this.observers.find((m) => m.options.queryFn);
      f && this.setOptions(f.options);
    }
    Array.isArray(this.options.queryKey);
    const l = Li(),
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
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = c.fetchOptions) == null ? void 0 : d.meta,
      });
    }
    const h = (f) => {
      if (
        ((_t(f) && f.silent) || this.dispatch({ type: "error", error: f }),
        !_t(f))
      ) {
        var m, b, k, $;
        (m = (b = this.cache.config).onError) == null || m.call(b, f, this),
          (k = ($ = this.cache.config).onSettled) == null ||
            k.call($, this.state.data, f, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = Ts({
        fn: c.fetchFn,
        abort: l == null ? void 0 : l.abort.bind(l),
        onSuccess: (f) => {
          var m, b, k, $;
          if (typeof f > "u") {
            h(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(f),
            (m = (b = this.cache.config).onSuccess) == null ||
              m.call(b, f, this),
            (k = ($ = this.cache.config).onSettled) == null ||
              k.call($, f, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: h,
        onFail: (f, m) => {
          this.dispatch({ type: "failed", failureCount: f, error: m });
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
      var s, i;
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
            fetchStatus: Tt(this.options.networkMode) ? "fetching" : "paused",
            ...(!n.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...n,
            data: e.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (i = e.dataUpdatedAt) != null ? i : Date.now(),
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
          return _t(l) && l.revert && this.revertState
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
      de.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(e);
        }),
          this.cache.notify({ query: this, type: "updated", action: e });
      });
  }
}
function Ai(r) {
  const e =
      typeof r.initialData == "function" ? r.initialData() : r.initialData,
    t = typeof e < "u",
    n = t
      ? typeof r.initialDataUpdatedAt == "function"
        ? r.initialDataUpdatedAt()
        : r.initialDataUpdatedAt
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
class Ii extends Je {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(e, t, n) {
    var s;
    const i = t.queryKey,
      l = (s = t.queryHash) != null ? s : Vt(i, t);
    let o = this.get(l);
    return (
      o ||
        ((o = new Ei({
          cache: this,
          logger: e.getLogger(),
          queryKey: i,
          queryHash: l,
          options: e.defaultQueryOptions(t),
          state: n,
          defaultOptions: e.getQueryDefaults(i),
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
    de.batch(() => {
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
    const [n] = qe(e, t);
    return (
      typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => an(n, s))
    );
  }
  findAll(e, t) {
    const [n] = qe(e, t);
    return Object.keys(n).length > 0
      ? this.queries.filter((s) => an(n, s))
      : this.queries;
  }
  notify(e) {
    de.batch(() => {
      this.listeners.forEach(({ listener: t }) => {
        t(e);
      });
    });
  }
  onFocus() {
    de.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    de.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class qi extends Os {
  constructor(e) {
    super(),
      (this.defaultOptions = e.defaultOptions),
      (this.mutationId = e.mutationId),
      (this.mutationCache = e.mutationCache),
      (this.logger = e.logger || Wt),
      (this.observers = []),
      (this.state = e.state || Es()),
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
        var L;
        return (
          (this.retryer = Ts({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (z, D) => {
              this.dispatch({ type: "failed", failureCount: z, error: D });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (L = this.options.retry) != null ? L : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      t = this.state.status === "loading";
    try {
      var n, s, i, l, o, a, u, c;
      if (!t) {
        var d, h, f, m;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((d = (h = this.mutationCache.config).onMutate) == null
            ? void 0
            : d.call(h, this.state.variables, this));
        const z = await ((f = (m = this.options).onMutate) == null
          ? void 0
          : f.call(m, this.state.variables));
        z !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: z,
            variables: this.state.variables,
          });
      }
      const L = await e();
      return (
        await ((n = (s = this.mutationCache.config).onSuccess) == null
          ? void 0
          : n.call(s, L, this.state.variables, this.state.context, this)),
        await ((i = (l = this.options).onSuccess) == null
          ? void 0
          : i.call(l, L, this.state.variables, this.state.context)),
        await ((o = (a = this.mutationCache.config).onSettled) == null
          ? void 0
          : o.call(a, L, null, this.state.variables, this.state.context, this)),
        await ((u = (c = this.options).onSettled) == null
          ? void 0
          : u.call(c, L, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: L }),
        L
      );
    } catch (L) {
      try {
        var b, k, $, w, P, S, T, q;
        throw (
          (await ((b = (k = this.mutationCache.config).onError) == null
            ? void 0
            : b.call(k, L, this.state.variables, this.state.context, this)),
          await (($ = (w = this.options).onError) == null
            ? void 0
            : $.call(w, L, this.state.variables, this.state.context)),
          await ((P = (S = this.mutationCache.config).onSettled) == null
            ? void 0
            : P.call(
                S,
                void 0,
                L,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((T = (q = this.options).onSettled) == null
            ? void 0
            : T.call(q, void 0, L, this.state.variables, this.state.context)),
          L)
        );
      } finally {
        this.dispatch({ type: "error", error: L });
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
            isPaused: !Tt(this.options.networkMode),
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
      de.batch(() => {
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
function Es() {
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
class Mi extends Je {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(e, t, n) {
    const s = new qi({
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
    de.batch(() => {
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
      this.mutations.find((t) => un(e, t))
    );
  }
  findAll(e) {
    return this.mutations.filter((t) => un(e, t));
  }
  notify(e) {
    de.batch(() => {
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
          return de.batch(() =>
            t.reduce(
              (n, s) => n.then(() => s.continue().catch(Pe)),
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
function zi() {
  return {
    onFetch: (r) => {
      r.fetchFn = () => {
        var e, t, n, s, i, l;
        const o =
            (e = r.fetchOptions) == null || (t = e.meta) == null
              ? void 0
              : t.refetchPage,
          a =
            (n = r.fetchOptions) == null || (s = n.meta) == null
              ? void 0
              : s.fetchMore,
          u = a == null ? void 0 : a.pageParam,
          c = (a == null ? void 0 : a.direction) === "forward",
          d = (a == null ? void 0 : a.direction) === "backward",
          h = ((i = r.state.data) == null ? void 0 : i.pages) || [],
          f = ((l = r.state.data) == null ? void 0 : l.pageParams) || [];
        let m = f,
          b = !1;
        const k = (q) => {
            Object.defineProperty(q, "signal", {
              enumerable: !0,
              get: () => {
                var L;
                if ((L = r.signal) != null && L.aborted) b = !0;
                else {
                  var z;
                  (z = r.signal) == null ||
                    z.addEventListener("abort", () => {
                      b = !0;
                    });
                }
                return r.signal;
              },
            });
          },
          $ = r.options.queryFn || (() => Promise.reject("Missing queryFn")),
          w = (q, L, z, D) => (
            (m = D ? [L, ...m] : [...m, L]), D ? [z, ...q] : [...q, z]
          ),
          P = (q, L, z, D) => {
            if (b) return Promise.reject("Cancelled");
            if (typeof z > "u" && !L && q.length) return Promise.resolve(q);
            const K = {
              queryKey: r.queryKey,
              pageParam: z,
              meta: r.options.meta,
            };
            k(K);
            const se = $(K);
            return Promise.resolve(se).then((_e) => w(q, z, _e, D));
          };
        let S;
        if (!h.length) S = P([]);
        else if (c) {
          const q = typeof u < "u",
            L = q ? u : pn(r.options, h);
          S = P(h, q, L);
        } else if (d) {
          const q = typeof u < "u",
            L = q ? u : Di(r.options, h);
          S = P(h, q, L, !0);
        } else {
          m = [];
          const q = typeof r.options.getNextPageParam > "u";
          S = (o && h[0] ? o(h[0], 0, h) : !0)
            ? P([], q, f[0])
            : Promise.resolve(w([], f[0], h[0]));
          for (let z = 1; z < h.length; z++)
            S = S.then((D) => {
              if (o && h[z] ? o(h[z], z, h) : !0) {
                const se = q ? f[z] : pn(r.options, D);
                return P(D, q, se);
              }
              return Promise.resolve(w(D, f[z], h[z]));
            });
        }
        return S.then((q) => ({ pages: q, pageParams: m }));
      };
    },
  };
}
function pn(r, e) {
  return r.getNextPageParam == null
    ? void 0
    : r.getNextPageParam(e[e.length - 1], e);
}
function Di(r, e) {
  return r.getPreviousPageParam == null
    ? void 0
    : r.getPreviousPageParam(e[0], e);
}
class As {
  constructor(e = {}) {
    (this.queryCache = e.queryCache || new Ii()),
      (this.mutationCache = e.mutationCache || new Mi()),
      (this.logger = e.logger || Wt),
      (this.defaultOptions = e.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Ct.subscribe(() => {
          Ct.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = Rt.subscribe(() => {
          Rt.isOnline() &&
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
    const [n] = qe(e, t);
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
    const s = Ye(e, t, n),
      i = this.getQueryData(s.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(s);
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
      i = s == null ? void 0 : s.state.data,
      l = Ci(t, i);
    if (typeof l > "u") return;
    const o = Ye(e),
      a = this.defaultQueryOptions(o);
    return this.queryCache.build(this, a).setData(l, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return de.batch(() =>
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
    const [n] = qe(e, t),
      s = this.queryCache;
    de.batch(() => {
      s.findAll(n).forEach((i) => {
        s.remove(i);
      });
    });
  }
  resetQueries(e, t, n) {
    const [s, i] = qe(e, t, n),
      l = this.queryCache,
      o = { type: "active", ...s };
    return de.batch(
      () => (
        l.findAll(s).forEach((a) => {
          a.reset();
        }),
        this.refetchQueries(o, i)
      )
    );
  }
  cancelQueries(e, t, n) {
    const [s, i = {}] = qe(e, t, n);
    typeof i.revert > "u" && (i.revert = !0);
    const l = de.batch(() =>
      this.queryCache.findAll(s).map((o) => o.cancel(i))
    );
    return Promise.all(l).then(Pe).catch(Pe);
  }
  invalidateQueries(e, t, n) {
    const [s, i] = qe(e, t, n);
    return de.batch(() => {
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
      return this.refetchQueries(a, i);
    });
  }
  refetchQueries(e, t, n) {
    const [s, i] = qe(e, t, n),
      l = de.batch(() =>
        this.queryCache
          .findAll(s)
          .filter((a) => !a.isDisabled())
          .map((a) => {
            var u;
            return a.fetch(void 0, {
              ...i,
              cancelRefetch:
                (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: s.refetchPage },
            });
          })
      );
    let o = Promise.all(l).then(Pe);
    return (i != null && i.throwOnError) || (o = o.catch(Pe)), o;
  }
  fetchQuery(e, t, n) {
    const s = Ye(e, t, n),
      i = this.defaultQueryOptions(s);
    typeof i.retry > "u" && (i.retry = !1);
    const l = this.queryCache.build(this, i);
    return l.isStaleByTime(i.staleTime)
      ? l.fetch(i)
      : Promise.resolve(l.state.data);
  }
  prefetchQuery(e, t, n) {
    return this.fetchQuery(e, t, n).then(Pe).catch(Pe);
  }
  fetchInfiniteQuery(e, t, n) {
    const s = Ye(e, t, n);
    return (s.behavior = zi()), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, t, n) {
    return this.fetchInfiniteQuery(e, t, n).then(Pe).catch(Pe);
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
    const n = this.queryDefaults.find((s) => je(e) === je(s.queryKey));
    n
      ? (n.defaultOptions = t)
      : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    if (!e) return;
    const t = this.queryDefaults.find((n) => $t(e, n.queryKey));
    return t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const n = this.mutationDefaults.find((s) => je(e) === je(s.mutationKey));
    n
      ? (n.defaultOptions = t)
      : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    if (!e) return;
    const t = this.mutationDefaults.find((n) => $t(e, n.mutationKey));
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
      !t.queryHash && t.queryKey && (t.queryHash = Vt(t.queryKey, t)),
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
class Ni extends Je {
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
      mn(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Bt(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Bt(
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
      Qt(n, this.options) ||
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
    const i = this.hasListeners();
    i && gn(this.currentQuery, s, this.options, n) && this.executeFetch(),
      this.updateResult(t),
      i &&
        (this.currentQuery !== s ||
          this.options.enabled !== n.enabled ||
          this.options.staleTime !== n.staleTime) &&
        this.updateStaleTimeout();
    const l = this.computeRefetchInterval();
    i &&
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
    return (e != null && e.throwOnError) || (t = t.catch(Pe)), t;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      rt || this.currentResult.isStale || !Ft(this.options.staleTime))
    )
      return;
    const t = Cs(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
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
        rt ||
        this.options.enabled === !1 ||
        !Ft(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Ct.isFocused()) &&
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
      i = this.currentResult,
      l = this.currentResultState,
      o = this.currentResultOptions,
      a = e !== n,
      u = a ? e.state : this.currentQueryInitialState,
      c = a ? this.currentResult : this.previousQueryResult,
      { state: d } = e;
    let {
        dataUpdatedAt: h,
        error: f,
        errorUpdatedAt: m,
        fetchStatus: b,
        status: k,
      } = d,
      $ = !1,
      w = !1,
      P;
    if (t._optimisticResults) {
      const z = this.hasListeners(),
        D = !z && mn(e, t),
        K = z && gn(e, n, t, s);
      (D || K) &&
        ((b = Tt(e.options.networkMode) ? "fetching" : "paused"),
        h || (k = "loading")),
        t._optimisticResults === "isRestoring" && (b = "idle");
    }
    if (
      t.keepPreviousData &&
      !d.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      k !== "error"
    )
      (P = c.data), (h = c.dataUpdatedAt), (k = c.status), ($ = !0);
    else if (t.select && typeof d.data < "u")
      if (
        i &&
        d.data === (l == null ? void 0 : l.data) &&
        t.select === this.selectFn
      )
        P = this.selectResult;
      else
        try {
          (this.selectFn = t.select),
            (P = t.select(d.data)),
            (P = jt(i == null ? void 0 : i.data, P, t)),
            (this.selectResult = P),
            (this.selectError = null);
        } catch (z) {
          this.selectError = z;
        }
    else P = d.data;
    if (typeof t.placeholderData < "u" && typeof P > "u" && k === "loading") {
      let z;
      if (
        i != null &&
        i.isPlaceholderData &&
        t.placeholderData === (o == null ? void 0 : o.placeholderData)
      )
        z = i.data;
      else if (
        ((z =
          typeof t.placeholderData == "function"
            ? t.placeholderData()
            : t.placeholderData),
        t.select && typeof z < "u")
      )
        try {
          (z = t.select(z)), (this.selectError = null);
        } catch (D) {
          this.selectError = D;
        }
      typeof z < "u" &&
        ((k = "success"),
        (P = jt(i == null ? void 0 : i.data, z, t)),
        (w = !0));
    }
    this.selectError &&
      ((f = this.selectError),
      (P = this.selectResult),
      (m = Date.now()),
      (k = "error"));
    const S = b === "fetching",
      T = k === "loading",
      q = k === "error";
    return {
      status: k,
      fetchStatus: b,
      isLoading: T,
      isSuccess: k === "success",
      isError: q,
      isInitialLoading: T && S,
      data: P,
      dataUpdatedAt: h,
      error: f,
      errorUpdatedAt: m,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount:
        d.dataUpdateCount > u.dataUpdateCount ||
        d.errorUpdateCount > u.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !T,
      isLoadingError: q && d.dataUpdatedAt === 0,
      isPaused: b === "paused",
      isPlaceholderData: w,
      isPreviousData: $,
      isRefetchError: q && d.dataUpdatedAt !== 0,
      isStale: xt(e, t),
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
      Qt(n, t))
    )
      return;
    this.currentResult = n;
    const s = { cache: !0 },
      i = () => {
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
    (e == null ? void 0 : e.listeners) !== !1 && i() && (s.listeners = !0),
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
      : e.type === "error" && !_t(e.error) && (t.onError = !0),
      this.updateResult(t),
      this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    de.batch(() => {
      if (e.onSuccess) {
        var t, n, s, i;
        (t = (n = this.options).onSuccess) == null ||
          t.call(n, this.currentResult.data),
          (s = (i = this.options).onSettled) == null ||
            s.call(i, this.currentResult.data, null);
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
function Fi(r, e) {
  return (
    e.enabled !== !1 &&
    !r.state.dataUpdatedAt &&
    !(r.state.status === "error" && e.retryOnMount === !1)
  );
}
function mn(r, e) {
  return Fi(r, e) || (r.state.dataUpdatedAt > 0 && Bt(r, e, e.refetchOnMount));
}
function Bt(r, e, t) {
  if (e.enabled !== !1) {
    const n = typeof t == "function" ? t(r) : t;
    return n === "always" || (n !== !1 && xt(r, e));
  }
  return !1;
}
function gn(r, e, t, n) {
  return (
    t.enabled !== !1 &&
    (r !== e || n.enabled === !1) &&
    (!t.suspense || r.state.status !== "error") &&
    xt(r, t)
  );
}
function xt(r, e) {
  return r.isStaleByTime(e.staleTime);
}
let Qi = class extends Je {
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
      Qt(n, this.options) ||
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
    const e = this.currentMutation ? this.currentMutation.state : Es(),
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
    de.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (e.onSuccess) {
          var t, n, s, i;
          (t = (n = this.mutateOptions).onSuccess) == null ||
            t.call(
              n,
              this.currentResult.data,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (s = (i = this.mutateOptions).onSettled) == null ||
              s.call(
                i,
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
const Is = "$$_queryClient",
  Ui = () => {
    const r = vs(Is);
    if (!r)
      throw new Error(
        "No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?"
      );
    return r;
  },
  ji = (r) => {
    ws(Is, r);
  };
function Ot() {
  return Ui();
}
const Ge = [];
function lt(r, e) {
  return { subscribe: Bi(r, e).subscribe };
}
function Bi(r, e = ee) {
  let t;
  const n = new Set();
  function s(o) {
    if (U(r, o) && ((r = o), t)) {
      const a = !Ge.length;
      for (const u of n) u[1](), Ge.push(u, r);
      if (a) {
        for (let u = 0; u < Ge.length; u += 2) Ge[u][0](Ge[u + 1]);
        Ge.length = 0;
      }
    }
  }
  function i(o) {
    s(o(r));
  }
  function l(o, a = ee) {
    const u = [o, a];
    return (
      n.add(u),
      n.size === 1 && (t = e(s, i) || ee),
      o(r),
      () => {
        n.delete(u), n.size === 0 && t && (t(), (t = null));
      }
    );
  }
  return { set: s, update: i, subscribe: l };
}
function qs(r, e, t) {
  const n = !Array.isArray(r),
    s = n ? [r] : r;
  if (!s.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = e.length < 2;
  return lt(t, (l, o) => {
    let a = !1;
    const u = [];
    let c = 0,
      d = ee;
    const h = () => {
        if (c) return;
        d();
        const m = e(n ? u[0] : u, l, o);
        i ? l(m) : (d = at(m) ? m : ee);
      },
      f = s.map((m, b) =>
        Kt(
          m,
          (k) => {
            (u[b] = k), (c &= ~(1 << b)), a && h();
          },
          () => {
            c |= 1 << b;
          }
        )
      );
    return (
      (a = !0),
      h(),
      function () {
        Ae(f), d(), (a = !1);
      }
    );
  });
}
function Zi(r, e) {
  const t = Ot(),
    n = t.defaultQueryOptions(r);
  n._optimisticResults = "optimistic";
  let s = new e(t, n);
  n.onError && (n.onError = de.batchCalls(n.onError)),
    n.onSuccess && (n.onSuccess = de.batchCalls(n.onSuccess)),
    n.onSettled && (n.onSettled = de.batchCalls(n.onSettled)),
    lt(s).subscribe((o) => {
      (s = o), s.setOptions(n, { listeners: !1 });
    });
  const i = lt(s.getCurrentResult(), (o) => s.subscribe(de.batchCalls(o))),
    { subscribe: l } = qs(
      i,
      (o) => (
        (o = s.getOptimisticResult(n)),
        n.notifyOnChangeProps ? o : s.trackResult(o)
      )
    );
  return { subscribe: l };
}
function Ms(r, e, t) {
  const n = Ye(r, e, t);
  return Zi(n, Ni);
}
function Hi(r, e, t) {
  const n = Ri(r, e, t),
    s = Ot();
  let i = new Qi(s, n),
    l;
  lt(i).subscribe((u) => {
    (i = u),
      (l = (c, d) => {
        i.mutate(c, d).catch(Ki);
      }),
      i.setOptions(n);
  });
  const o = lt(i.getCurrentResult(), (u) =>
      i.subscribe(de.batchCalls((c) => u(c)))
    ),
    { subscribe: a } = qs(o, (u) => ({
      ...u,
      mutate: l,
      mutateAsync: u.mutate,
    }));
  return { subscribe: a };
}
function Ki() {}
function Gi(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[1], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, [i]) {
      n &&
        n.p &&
        (!e || i & 2) &&
        J(n, t, s, s[1], e ? x(t, s[1], i, null) : X(s[1]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Vi(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { client: i = new As() } = e;
  return (
    xe(() => {
      i.mount();
    }),
    ji(i),
    Gt(() => {
      i.unmount();
    }),
    (r.$$set = (l) => {
      "client" in l && t(0, (i = l.client)),
        "$$scope" in l && t(1, (s = l.$$scope));
    }),
    [i, s, n]
  );
}
class Wi extends B {
  constructor(e) {
    super(), j(this, e, Vi, Gi, U, { client: 0 });
  }
}
const zs = (r) => ({
    version: r.replace(/[\^~]/, ""),
    qualifier: isNaN(Number(r[0])) ? r[0] : void 0,
  }),
  Ds = (r, e) => zs(r).version === e,
  _n = (r, e) => (e.length <= r ? e : e.slice(0, r).concat("…")),
  At = 10,
  ot = {
    package: (r) => ["package", r],
    bundlephobiaReport: (r) => ["bundlephobiaReport", r],
  };
class bn extends Error {
  constructor(e, t, n) {
    const s = e.status || e.status === 0 ? e.status : "",
      i = e.statusText || "",
      l = `${s} ${i}`.trim(),
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
class Ns extends Error {
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
const bt = (r) => r !== null && typeof r == "object",
  pt = (...r) => {
    for (const e of r)
      if ((!bt(e) || Array.isArray(e)) && typeof e < "u")
        throw new TypeError("The `options` argument must be an object");
    return Jt({}, ...r);
  },
  Fs = (r = {}, e = {}) => {
    const t = new globalThis.Headers(r),
      n = e instanceof globalThis.Headers,
      s = new globalThis.Headers(e);
    for (const [i, l] of s.entries())
      (n && l === "undefined") || l === void 0 ? t.delete(i) : t.set(i, l);
    return t;
  },
  Jt = (...r) => {
    let e = {},
      t = {};
    for (const n of r)
      if (Array.isArray(n)) Array.isArray(e) || (e = []), (e = [...e, ...n]);
      else if (bt(n)) {
        for (let [s, i] of Object.entries(n))
          bt(i) && s in e && (i = Jt(e[s], i)), (e = { ...e, [s]: i });
        bt(n.headers) && ((t = Fs(t, n.headers)), (e.headers = t));
      }
    return e;
  },
  xi = (() => {
    let r = !1,
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
            return (r = !0), "half";
          },
        }).headers.has("Content-Type")),
      r && !e
    );
  })(),
  Ji = typeof globalThis.AbortController == "function",
  Xi = typeof globalThis.ReadableStream == "function",
  Yi = typeof globalThis.FormData == "function",
  Qs = ["get", "post", "put", "patch", "head", "delete"],
  er = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  It = 2147483647,
  Us = Symbol("stop"),
  tr = (r) => (Qs.includes(r) ? r.toUpperCase() : r),
  nr = ["get", "put", "head", "delete", "options", "trace"],
  sr = [408, 413, 429, 500, 502, 503, 504],
  js = [413, 429, 503],
  kn = {
    limit: 2,
    methods: nr,
    statusCodes: sr,
    afterStatusCodes: js,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
  },
  ir = (r = {}) => {
    if (typeof r == "number") return { ...kn, limit: r };
    if (r.methods && !Array.isArray(r.methods))
      throw new Error("retry.methods must be an array");
    if (r.statusCodes && !Array.isArray(r.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...kn, ...r, afterStatusCodes: js };
  };
async function rr(r, e, t) {
  return new Promise((n, s) => {
    const i = setTimeout(() => {
      e && e.abort(), s(new Ns(r));
    }, t.timeout);
    t.fetch(r)
      .then(n)
      .catch(s)
      .then(() => {
        clearTimeout(i);
      });
  });
}
const lr = !!globalThis.DOMException;
function yn(r) {
  if (lr)
    return new DOMException(
      (r == null ? void 0 : r.reason) ?? "The operation was aborted.",
      "AbortError"
    );
  const e = new Error(
    (r == null ? void 0 : r.reason) ?? "The operation was aborted."
  );
  return (e.name = "AbortError"), e;
}
async function or(r, { signal: e }) {
  return new Promise((t, n) => {
    if (e) {
      if (e.aborted) {
        n(yn(e));
        return;
      }
      e.addEventListener("abort", s, { once: !0 });
    }
    function s() {
      n(yn(e)), clearTimeout(i);
    }
    const i = setTimeout(() => {
      e == null || e.removeEventListener("abort", s), t();
    }, r);
  });
}
class Lt {
  static create(e, t) {
    const n = new Lt(e, t),
      s = async () => {
        if (n._options.timeout > It)
          throw new RangeError(
            `The \`timeout\` option cannot be greater than ${It}`
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
          let a = new bn(o, n.request, n._options);
          for (const u of n._options.hooks.beforeError) a = await u(a);
          throw a;
        }
        if (n._options.onDownloadProgress) {
          if (typeof n._options.onDownloadProgress != "function")
            throw new TypeError(
              "The `onDownloadProgress` option must be a function"
            );
          if (!Xi)
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
    for (const [o, a] of Object.entries(er))
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
        headers: Fs(this._input.headers, t.headers),
        hooks: Jt(
          {
            beforeRequest: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: [],
          },
          t.hooks
        ),
        method: tr(t.method ?? this._input.method),
        prefixUrl: String(t.prefixUrl || ""),
        retry: ir(t.retry),
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
    if (Ji) {
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
      (xi && (this._options.duplex = "half"),
      (this.request = new globalThis.Request(this._input, this._options)),
      this._options.searchParams)
    ) {
      const s =
          "?" +
          (typeof this._options.searchParams == "string"
            ? this._options.searchParams.replace(/^\?/, "")
            : new URLSearchParams(this._options.searchParams).toString()),
        i = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, s);
      ((Yi && this._options.body instanceof globalThis.FormData) ||
        this._options.body instanceof URLSearchParams) &&
        !(this._options.headers && this._options.headers["content-type"]) &&
        this.request.headers.delete("content-type"),
        (this.request = new globalThis.Request(
          new globalThis.Request(i, { ...this.request }),
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
      this._retryCount < this._options.retry.limit && !(e instanceof Ns))
    ) {
      if (e instanceof bn) {
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
      const n = Math.min(this._calculateRetryDelay(t), It);
      if (n !== 0 && this._retryCount > 0) {
        await or(n, { signal: this._options.signal });
        for (const s of this._options.hooks.beforeRetry)
          if (
            (await s({
              request: this.request,
              options: this._options,
              error: t,
              retryCount: this._retryCount,
            })) === Us
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
      : rr(this.request.clone(), this.abortController, this._options);
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
            async start(i) {
              const l = e.body.getReader();
              t &&
                t(
                  { percent: 0, transferredBytes: 0, totalBytes: n },
                  new Uint8Array()
                );
              async function o() {
                const { done: a, value: u } = await l.read();
                if (a) {
                  i.close();
                  return;
                }
                if (t) {
                  s += u.byteLength;
                  const c = n === 0 ? 0 : s / n;
                  t({ percent: c, transferredBytes: s, totalBytes: n }, u);
                }
                i.enqueue(u), await o();
              }
              await o();
            },
          }),
          { status: e.status, statusText: e.statusText, headers: e.headers }
        );
  }
}
/*! MIT License © Sindre Sorhus */ const Zt = (r) => {
    const e = (t, n) => Lt.create(t, pt(r, n));
    for (const t of Qs) e[t] = (n, s) => Lt.create(n, pt(r, s, { method: t }));
    return (
      (e.create = (t) => Zt(pt(t))),
      (e.extend = (t) => Zt(pt(r, t))),
      (e.stop = Us),
      e
    );
  },
  ar = Zt(),
  Bs = ar,
  Zs = Bs.create({ prefixUrl: "http://localhost:5001/" }),
  ur = Bs.create({ prefixUrl: "https://bundlephobia.com/" });
function cr(r) {
  const e = r ? { path: r } : void 0;
  return Zs.get("package", { searchParams: e }).json();
}
function fr(r) {
  return Zs.post("upgrade-packages", { json: r }).json();
}
function hr(r) {
  return ur.get(`api/size?package=${r}`).json();
}
const Hs = (r) => Hi(fr, r),
  Ks = (r) => (e) => {
    const t = structuredClone(e ?? {});
    for (let n of r) {
      const { qualifier: s } = zs(n.version),
        i = `${s}${n.latest}`;
      t.dependencies &&
        n.name in t.dependencies &&
        (console.log("updating dependency", n.name, "to", i),
        (t.dependencies[n.name] = i)),
        t.devDependencies &&
          n.name in t.devDependencies &&
          (console.log("updating devDependency", n.name, "to", i),
          (t.devDependencies[n.name] = i));
    }
    return t;
  },
  dr = (r) => (
    console.log("usePackageQuery", { path: r }),
    Ms(ot.package(r), cr.bind(null, r))
  ),
  pr = (r) => Ms(ot.bundlephobiaReport(r), () => hr(r), { enabled: !!r });
function mr(r) {
  xe(() => {
    window.addEventListener("keydown", r);
  }),
    Gt(() => {
      window.removeEventListener("keydown", r);
    });
}
function gr(r) {
  let e, t, n, s, i, l;
  return {
    c() {
      (e = ve("svg")),
        (t = ve("g")),
        (n = ve("g")),
        (s = ve("path")),
        (l = ve("path")),
        g(s, "d", (i = wn[r[0]])),
        g(
          l,
          "d",
          "M50,20 C71.4336483,20 81.3822646,28.613774 86.0000023,36.6100918 L86,11.9417476 L86,10 L90,10 L90,11.9417476 L90,58.0582524 L90,59.0291262 L90,70 C90,70 90,90 50,90 C10,90 10,70 10,70 L10,59.0291262 L10,58.0582524 L10,11.9417476 L10,10 L14,10 L14,11.9417476 L14,36.6100878 C18.6177354,28.613774 28.5663517,20 50,20 Z M20,60 C20,51.7157288 26.7081139,45 35.0050808,45 L64.9949192,45 C73.2819965,45 80,51.7139073 80,60 C80,68.2842712 73.2918861,75 64.9949192,75 L35.0050808,75 C26.7180035,75 20,68.2860927 20,60 Z M14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 L14,10 Z M90,10 C90,8.8954305 89.1045695,8 88,8 C86.8954305,8 86,8.8954305 86,10 L90,10 Z"
        ),
        g(n, "fill", "currentColor"),
        g(t, "stroke", "none"),
        g(t, "stroke-width", "1"),
        g(t, "fill", "none"),
        g(t, "fill-rule", "evenodd"),
        g(e, "xmlns", "http://www.w3.org/2000/svg"),
        g(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        g(e, "viewBox", "0 0 100 125");
    },
    m(o, a) {
      R(o, e, a), y(e, t), y(t, n), y(n, s), y(n, l);
    },
    p(o, [a]) {
      a & 1 && i !== (i = wn[o[0]]) && g(s, "d", i);
    },
    i: ee,
    o: ee,
    d(o) {
      o && C(e);
    },
  };
}
const wn = {
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
function _r(r, e, t) {
  let { mood: n = "awake" } = e;
  return (
    (r.$$set = (s) => {
      "mood" in s && t(0, (n = s.mood));
    }),
    [n]
  );
}
class br extends B {
  constructor(e) {
    super(), j(this, e, _r, gr, U, { mood: 0 });
  }
}
const { isArray: kr } = Array;
function Gs(r, e) {
  if (arguments.length === 1) return (t) => Gs(r, t);
  if (e) return e[r];
}
function yr(r, e) {
  const t = {},
    n = {};
  return (
    Object.entries(e).forEach(([s, i]) => {
      r(i, s) ? (t[s] = i) : (n[s] = i);
    }),
    [t, n]
  );
}
function wr(r, e, t = !1) {
  const n = [],
    s = [];
  let i = -1;
  for (; i++ < e.length - 1; )
    (t ? r(e[i], i) : r(e[i])) ? n.push(e[i]) : s.push(e[i]);
  return [n, s];
}
function Vs(r, e) {
  return arguments.length === 1 ? (t) => Vs(r, t) : kr(e) ? wr(r, e) : yr(r, e);
}
function Ht(r, e) {
  if (arguments.length === 1) return (s) => Ht(r, s);
  if (Number.isNaN(Number(r)) || Number.isNaN(Number(e)))
    throw new TypeError("Both arguments to range must be numbers");
  if (e < r) return [];
  const t = e - r,
    n = Array(t);
  for (let s = 0; s < t; s++) n[s] = r + s;
  return n;
}
const vn = {
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
function $n(r, e, t) {
  const n = r.slice();
  return (n[10] = e[t][0]), (n[11] = e[t][1]), n;
}
function qt(r) {
  let e,
    t = [r[11]],
    n = {};
  for (let s = 0; s < t.length; s += 1) n = H(n, t[s]);
  return {
    c() {
      (e = ve(r[10])), wt(e, n);
    },
    m(s, i) {
      R(s, e, i);
    },
    p(s, i) {
      wt(e, (n = ke(t, [i & 32 && s[11]])));
    },
    d(s) {
      s && C(e);
    },
  };
}
function Cn(r) {
  let e = r[10],
    t,
    n = r[10] && qt(r);
  return {
    c() {
      n && n.c(), (t = oe());
    },
    m(s, i) {
      n && n.m(s, i), R(s, t, i);
    },
    p(s, i) {
      s[10]
        ? e
          ? U(e, s[10])
            ? (n.d(1), (n = qt(s)), (e = s[10]), n.c(), n.m(t.parentNode, t))
            : n.p(s, i)
          : ((n = qt(s)), (e = s[10]), n.c(), n.m(t.parentNode, t))
        : e && (n.d(1), (n = null), (e = s[10]));
    },
    d(s) {
      s && C(t), n && n.d(s);
    },
  };
}
function vr(r) {
  let e,
    t,
    n,
    s,
    i,
    l = le(r[5]),
    o = [];
  for (let h = 0; h < l.length; h += 1) o[h] = Cn($n(r, l, h));
  const a = r[9].default,
    u = W(a, r, r[8], null);
  let c = [
      vn,
      r[6],
      { width: r[2] },
      { height: r[2] },
      { stroke: r[1] },
      {
        "stroke-width": (n = r[4] ? (Number(r[3]) * 24) / Number(r[2]) : r[3]),
      },
      { class: (s = `lucide-icon lucide lucide-${r[0]} ${r[7].class ?? ""}`) },
    ],
    d = {};
  for (let h = 0; h < c.length; h += 1) d = H(d, c[h]);
  return {
    c() {
      e = ve("svg");
      for (let h = 0; h < o.length; h += 1) o[h].c();
      (t = oe()), u && u.c(), wt(e, d);
    },
    m(h, f) {
      R(h, e, f);
      for (let m = 0; m < o.length; m += 1) o[m] && o[m].m(e, null);
      y(e, t), u && u.m(e, null), (i = !0);
    },
    p(h, [f]) {
      if (f & 32) {
        l = le(h[5]);
        let m;
        for (m = 0; m < l.length; m += 1) {
          const b = $n(h, l, m);
          o[m] ? o[m].p(b, f) : ((o[m] = Cn(b)), o[m].c(), o[m].m(e, t));
        }
        for (; m < o.length; m += 1) o[m].d(1);
        o.length = l.length;
      }
      u &&
        u.p &&
        (!i || f & 256) &&
        J(u, a, h, h[8], i ? x(a, h[8], f, null) : X(h[8]), null),
        wt(
          e,
          (d = ke(c, [
            vn,
            f & 64 && h[6],
            (!i || f & 4) && { width: h[2] },
            (!i || f & 4) && { height: h[2] },
            (!i || f & 2) && { stroke: h[1] },
            (!i ||
              (f & 28 &&
                n !==
                  (n = h[4] ? (Number(h[3]) * 24) / Number(h[2]) : h[3]))) && {
              "stroke-width": n,
            },
            (!i ||
              (f & 129 &&
                s !==
                  (s = `lucide-icon lucide lucide-${h[0]} ${
                    h[7].class ?? ""
                  }`))) && { class: s },
          ]))
        );
    },
    i(h) {
      i || (p(u, h), (i = !0));
    },
    o(h) {
      _(u, h), (i = !1);
    },
    d(h) {
      h && C(e), Se(o, h), u && u.d(h);
    },
  };
}
function $r(r, e, t) {
  const n = [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
  ];
  let s = yt(e, n),
    { $$slots: i = {}, $$scope: l } = e,
    { name: o } = e,
    { color: a = "currentColor" } = e,
    { size: u = 24 } = e,
    { strokeWidth: c = 2 } = e,
    { absoluteStrokeWidth: d = !1 } = e,
    { iconNode: h } = e;
  return (
    (r.$$set = (f) => {
      t(7, (e = H(H({}, e), ae(f)))),
        t(6, (s = yt(e, n))),
        "name" in f && t(0, (o = f.name)),
        "color" in f && t(1, (a = f.color)),
        "size" in f && t(2, (u = f.size)),
        "strokeWidth" in f && t(3, (c = f.strokeWidth)),
        "absoluteStrokeWidth" in f && t(4, (d = f.absoluteStrokeWidth)),
        "iconNode" in f && t(5, (h = f.iconNode)),
        "$$scope" in f && t(8, (l = f.$$scope));
    }),
    (e = ae(e)),
    [o, a, u, c, d, h, s, e, l, i]
  );
}
class Cr extends B {
  constructor(e) {
    super(),
      j(this, e, $r, vr, U, {
        name: 0,
        color: 1,
        size: 2,
        strokeWidth: 3,
        absoluteStrokeWidth: 4,
        iconNode: 5,
      });
  }
}
const Ie = Cr;
function Rr(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Lr(r) {
  let e, t;
  const n = [{ name: "arrow-up" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [Rr] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function Sr(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
    ["line", { x1: "12", x2: "12", y1: "19", y2: "5" }],
    ["polyline", { points: "5 12 12 5 19 12" }],
  ];
  return (
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class Pr extends B {
  constructor(e) {
    super(), j(this, e, Sr, Lr, U, {});
  }
}
const Ws = Pr;
function Tr(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Or(r) {
  let e, t;
  const n = [{ name: "bug" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [Tr] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function Er(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
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
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class Ar extends B {
  constructor(e) {
    super(), j(this, e, Er, Or, U, {});
  }
}
const Ir = Ar;
function qr(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Mr(r) {
  let e, t;
  const n = [{ name: "check-circle" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [qr] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function zr(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
    ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }],
    ["polyline", { points: "22 4 12 14.01 9 11.01" }],
  ];
  return (
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class Dr extends B {
  constructor(e) {
    super(), j(this, e, zr, Mr, U, {});
  }
}
const xs = Dr;
function Nr(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Fr(r) {
  let e, t;
  const n = [{ name: "github" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [Nr] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function Qr(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2" }],
  ];
  return (
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class Ur extends B {
  constructor(e) {
    super(), j(this, e, Qr, Fr, U, {});
  }
}
const jr = Ur;
function Br(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Zr(r) {
  let e, t;
  const n = [{ name: "globe" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [Br] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function Hr(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
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
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class Kr extends B {
  constructor(e) {
    super(), j(this, e, Hr, Zr, U, {});
  }
}
const Gr = Kr;
function Vr(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Wr(r) {
  let e, t;
  const n = [{ name: "info" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [Vr] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function xr(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 16v-4" }],
    ["path", { d: "M12 8h.01" }],
  ];
  return (
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class Jr extends B {
  constructor(e) {
    super(), j(this, e, xr, Wr, U, {});
  }
}
const Xr = Jr;
function Yr(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function el(r) {
  let e, t;
  const n = [{ name: "package" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [Yr] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function tl(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
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
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class nl extends B {
  constructor(e) {
    super(), j(this, e, tl, el, U, {});
  }
}
const sl = nl;
function il(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function rl(r) {
  let e, t;
  const n = [{ name: "scale" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [il] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function ll(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
    ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
    ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
    ["path", { d: "M7 21h10" }],
    ["path", { d: "M12 3v18" }],
    ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }],
  ];
  return (
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class ol extends B {
  constructor(e) {
    super(), j(this, e, ll, rl, U, {});
  }
}
const al = ol;
function ul(r) {
  let e;
  const t = r[2].default,
    n = W(t, r, r[3], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        J(n, t, s, s[3], e ? x(t, s[3], i, null) : X(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function cl(r) {
  let e, t;
  const n = [{ name: "x" }, r[1], { iconNode: r[0] }];
  let s = { $$slots: { default: [ul] }, $$scope: { ctx: r } };
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Ie({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? ke(n, [n[0], l & 2 && we(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function fl(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const i = [
    ["line", { x1: "18", x2: "6", y1: "6", y2: "18" }],
    ["line", { x1: "6", x2: "18", y1: "6", y2: "18" }],
  ];
  return (
    (r.$$set = (l) => {
      t(1, (e = H(H({}, e), ae(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = ae(e)),
    [i, e, n, s]
  );
}
class hl extends B {
  constructor(e) {
    super(), j(this, e, fl, cl, U, {});
  }
}
const dl = hl;
function pl(r) {
  const e = (t) => {
    r.contains(t.target) || r.dispatchEvent(new CustomEvent("outsideclick"));
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
function ml() {
  const r = console.warn;
  (console.warn = (e) => {
    e.includes("unknown prop") || e.includes("unexpected slot") || r(e);
  }),
    xe(() => {
      console.warn = r;
    });
}
function Rn(r, e, t) {
  const n = r.slice();
  return (n[18] = e[t]), n;
}
function Ln(r, e, t) {
  const n = r.slice();
  return (n[18] = e[t]), n;
}
function Sn(r, e, t) {
  const n = r.slice();
  return (n[10] = e[t]), n;
}
function Pn(r, e, t) {
  const n = r.slice();
  return (n[13] = e[t]), (n[15] = t), n;
}
function Tn(r, e, t) {
  const n = r.slice();
  return (n[16] = e[t]), (n[15] = t), n;
}
function On(r, e, t) {
  const n = r.slice();
  return (n[7] = e[t]), n;
}
function gl(r) {
  let e, t, n, s;
  const i = [yl, kl, bl],
    l = [];
  function o(a, u) {
    return a[0] === "table" ? 0 : a[0] === "list" ? 1 : 2;
  }
  return (
    (e = o(r)),
    (t = l[e] = i[e](r)),
    {
      c() {
        t.c(), (n = oe());
      },
      m(a, u) {
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (G(),
              _(l[c], 1, 1, () => {
                l[c] = null;
              }),
              V(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = i[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        a && C(n), l[e].d(a);
      },
    }
  );
}
function _l(r) {
  let e,
    t,
    n = le(r[1]),
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = zn(On(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = oe();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 34) {
        n = le(l[1]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = On(l, n, a);
          s[a]
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = zn(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) p(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      l && C(e), Se(s, l);
    },
  };
}
function bl(r) {
  let e, t, n;
  const s = [r[6]];
  var i = r[5][r[0]];
  function l(o) {
    let a = { $$slots: { default: [$l] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ue(i, l(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(o, a) {
        e && E(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? ke(s, [we(o[6])]) : {};
        if (
          (a & 8388706 && (u.$$scope = { dirty: a, ctx: o }),
          a & 33 && i !== (i = o[5][o[0]]))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              V();
          }
          i
            ? ((e = ue(i, l(o))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && A(e, o);
      },
    }
  );
}
function kl(r) {
  let e, t, n, s;
  const i = [Rl, Cl],
    l = [];
  function o(a, u) {
    return a[4] ? 0 : 1;
  }
  return (
    (e = o(r)),
    (t = l[e] = i[e](r)),
    {
      c() {
        t.c(), (n = oe());
      },
      m(a, u) {
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (G(),
              _(l[c], 1, 1, () => {
                l[c] = null;
              }),
              V(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = i[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        a && C(n), l[e].d(a);
      },
    }
  );
}
function yl(r) {
  let e, t, n;
  var s = r[5].table;
  function i(l) {
    return { props: { $$slots: { default: [zl] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = ue(s, i(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(l, o) {
        e && E(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388716 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].table))
        ) {
          if (e) {
            G();
            const u = e;
            _(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              V();
          }
          s
            ? ((e = ue(s, i(l))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && A(e, l);
      },
    }
  );
}
function wl(r) {
  let e = r[6].raw + "",
    t;
  return {
    c() {
      t = ne(e);
    },
    m(n, s) {
      R(n, t, s);
    },
    p(n, s) {
      s & 64 && e !== (e = n[6].raw + "") && pe(t, e);
    },
    i: ee,
    o: ee,
    d(n) {
      n && C(t);
    },
  };
}
function vl(r) {
  let e, t;
  return (
    (e = new Be({ props: { tokens: r[1], renderers: r[5] } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s & 2 && (i.tokens = n[1]), s & 32 && (i.renderers = n[5]), e.$set(i);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function $l(r) {
  let e, t, n, s;
  const i = [vl, wl],
    l = [];
  function o(a, u) {
    return a[1] ? 0 : 1;
  }
  return (
    (e = o(r)),
    (t = l[e] = i[e](r)),
    {
      c() {
        t.c(), (n = oe());
      },
      m(a, u) {
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (G(),
              _(l[c], 1, 1, () => {
                l[c] = null;
              }),
              V(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = i[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        a && C(n), l[e].d(a);
      },
    }
  );
}
function Cl(r) {
  let e, t, n;
  const s = [{ ordered: r[4] }, r[6]];
  var i = r[5].list;
  function l(o) {
    let a = { $$slots: { default: [Sl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ue(i, l(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(o, a) {
        e && E(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u =
          a & 80
            ? ke(s, [a & 16 && { ordered: o[4] }, a & 64 && we(o[6])])
            : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && i !== (i = o[5].list))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              V();
          }
          i
            ? ((e = ue(i, l(o))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && A(e, o);
      },
    }
  );
}
function Rl(r) {
  let e, t, n;
  const s = [{ ordered: r[4] }, r[6]];
  var i = r[5].list;
  function l(o) {
    let a = { $$slots: { default: [Tl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ue(i, l(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(o, a) {
        e && E(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u =
          a & 80
            ? ke(s, [a & 16 && { ordered: o[4] }, a & 64 && we(o[6])])
            : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && i !== (i = o[5].list))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              V();
          }
          i
            ? ((e = ue(i, l(o))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && A(e, o);
      },
    }
  );
}
function Ll(r) {
  let e, t, n;
  return (
    (e = new Be({ props: { tokens: r[18].tokens, renderers: r[5] } })),
    {
      c() {
        I(e.$$.fragment), (t = Q());
      },
      m(s, i) {
        E(e, s, i), R(s, t, i), (n = !0);
      },
      p(s, i) {
        const l = {};
        i & 64 && (l.tokens = s[18].tokens),
          i & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (p(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(t), A(e, s);
      },
    }
  );
}
function En(r) {
  let e, t, n;
  const s = [r[18]];
  var i = r[5].unorderedlistitem || r[5].listitem;
  function l(o) {
    let a = { $$slots: { default: [Ll] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ue(i, l(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(o, a) {
        e && E(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? ke(s, [we(o[18])]) : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && i !== (i = o[5].unorderedlistitem || o[5].listitem))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              V();
          }
          i
            ? ((e = ue(i, l(o))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && A(e, o);
      },
    }
  );
}
function Sl(r) {
  let e,
    t,
    n = le(r[6].items),
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = En(Rn(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = oe();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 96) {
        n = le(l[6].items);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Rn(l, n, a);
          s[a]
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = En(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) p(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      l && C(e), Se(s, l);
    },
  };
}
function Pl(r) {
  let e, t, n;
  return (
    (e = new Be({ props: { tokens: r[18].tokens, renderers: r[5] } })),
    {
      c() {
        I(e.$$.fragment), (t = Q());
      },
      m(s, i) {
        E(e, s, i), R(s, t, i), (n = !0);
      },
      p(s, i) {
        const l = {};
        i & 64 && (l.tokens = s[18].tokens),
          i & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (p(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(t), A(e, s);
      },
    }
  );
}
function An(r) {
  let e, t, n;
  const s = [r[18]];
  var i = r[5].orderedlistitem || r[5].listitem;
  function l(o) {
    let a = { $$slots: { default: [Pl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = H(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ue(i, l(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(o, a) {
        e && E(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? ke(s, [we(o[18])]) : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && i !== (i = o[5].orderedlistitem || o[5].listitem))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              V();
          }
          i
            ? ((e = ue(i, l(o))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && A(e, o);
      },
    }
  );
}
function Tl(r) {
  let e,
    t,
    n = le(r[6].items),
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = An(Ln(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = oe();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 96) {
        n = le(l[6].items);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Ln(l, n, a);
          s[a]
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = An(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) p(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      l && C(e), Se(s, l);
    },
  };
}
function Ol(r) {
  let e, t, n;
  return (
    (e = new Be({ props: { tokens: r[16].tokens, renderers: r[5] } })),
    {
      c() {
        I(e.$$.fragment), (t = Q());
      },
      m(s, i) {
        E(e, s, i), R(s, t, i), (n = !0);
      },
      p(s, i) {
        const l = {};
        i & 4 && (l.tokens = s[16].tokens),
          i & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (p(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(t), A(e, s);
      },
    }
  );
}
function In(r) {
  let e, t, n;
  var s = r[5].tablecell;
  function i(l) {
    return {
      props: {
        header: !0,
        align: l[6].align[l[15]] || "center",
        $$slots: { default: [Ol] },
        $$scope: { ctx: l },
      },
    };
  }
  return (
    s && (e = ue(s, i(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(l, o) {
        e && E(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 64 && (a.align = l[6].align[l[15]] || "center"),
          o & 8388644 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablecell))
        ) {
          if (e) {
            G();
            const u = e;
            _(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              V();
          }
          s
            ? ((e = ue(s, i(l))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && A(e, l);
      },
    }
  );
}
function El(r) {
  let e,
    t,
    n = le(r[2]),
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = In(Tn(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = oe();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 100) {
        n = le(l[2]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Tn(l, n, a);
          s[a]
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = In(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) p(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      l && C(e), Se(s, l);
    },
  };
}
function Al(r) {
  let e, t, n;
  var s = r[5].tablerow;
  function i(l) {
    return { props: { $$slots: { default: [El] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = ue(s, i(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(l, o) {
        e && E(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388708 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablerow))
        ) {
          if (e) {
            G();
            const u = e;
            _(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              V();
          }
          s
            ? ((e = ue(s, i(l))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && A(e, l);
      },
    }
  );
}
function Il(r) {
  let e, t;
  return (
    (e = new Be({ props: { tokens: r[13].tokens, renderers: r[5] } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s & 8 && (i.tokens = n[13].tokens),
          s & 32 && (i.renderers = n[5]),
          e.$set(i);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function qn(r) {
  let e, t, n;
  var s = r[5].tablecell;
  function i(l) {
    return {
      props: {
        header: !1,
        align: l[6].align[l[15]] || "center",
        $$slots: { default: [Il] },
        $$scope: { ctx: l },
      },
    };
  }
  return (
    s && (e = ue(s, i(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(l, o) {
        e && E(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 64 && (a.align = l[6].align[l[15]] || "center"),
          o & 8388648 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablecell))
        ) {
          if (e) {
            G();
            const u = e;
            _(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              V();
          }
          s
            ? ((e = ue(s, i(l))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && A(e, l);
      },
    }
  );
}
function ql(r) {
  let e,
    t,
    n = le(r[10]),
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = qn(Pn(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = Q();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 104) {
        n = le(l[10]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Pn(l, n, a);
          s[a]
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = qn(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) p(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      l && C(e), Se(s, l);
    },
  };
}
function Mn(r) {
  let e, t, n;
  var s = r[5].tablerow;
  function i(l) {
    return { props: { $$slots: { default: [ql] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = ue(s, i(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = oe());
      },
      m(l, o) {
        e && E(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388712 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablerow))
        ) {
          if (e) {
            G();
            const u = e;
            _(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              V();
          }
          s
            ? ((e = ue(s, i(l))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && A(e, l);
      },
    }
  );
}
function Ml(r) {
  let e,
    t,
    n = le(r[3]),
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Mn(Sn(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = oe();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 104) {
        n = le(l[3]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Sn(l, n, a);
          s[a]
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = Mn(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) p(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      l && C(e), Se(s, l);
    },
  };
}
function zl(r) {
  let e, t, n, s, i;
  var l = r[5].tablehead;
  function o(c) {
    return { props: { $$slots: { default: [Al] }, $$scope: { ctx: c } } };
  }
  l && (e = ue(l, o(r)));
  var a = r[5].tablebody;
  function u(c) {
    return { props: { $$slots: { default: [Ml] }, $$scope: { ctx: c } } };
  }
  return (
    a && (n = ue(a, u(r))),
    {
      c() {
        e && I(e.$$.fragment), (t = Q()), n && I(n.$$.fragment), (s = oe());
      },
      m(c, d) {
        e && E(e, c, d), R(c, t, d), n && E(n, c, d), R(c, s, d), (i = !0);
      },
      p(c, d) {
        const h = {};
        if (
          (d & 8388708 && (h.$$scope = { dirty: d, ctx: c }),
          d & 32 && l !== (l = c[5].tablehead))
        ) {
          if (e) {
            G();
            const m = e;
            _(m.$$.fragment, 1, 0, () => {
              A(m, 1);
            }),
              V();
          }
          l
            ? ((e = ue(l, o(c))),
              I(e.$$.fragment),
              p(e.$$.fragment, 1),
              E(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(h);
        const f = {};
        if (
          (d & 8388712 && (f.$$scope = { dirty: d, ctx: c }),
          d & 32 && a !== (a = c[5].tablebody))
        ) {
          if (n) {
            G();
            const m = n;
            _(m.$$.fragment, 1, 0, () => {
              A(m, 1);
            }),
              V();
          }
          a
            ? ((n = ue(a, u(c))),
              I(n.$$.fragment),
              p(n.$$.fragment, 1),
              E(n, s.parentNode, s))
            : (n = null);
        } else a && n.$set(f);
      },
      i(c) {
        i || (e && p(e.$$.fragment, c), n && p(n.$$.fragment, c), (i = !0));
      },
      o(c) {
        e && _(e.$$.fragment, c), n && _(n.$$.fragment, c), (i = !1);
      },
      d(c) {
        c && (C(t), C(s)), e && A(e, c), n && A(n, c);
      },
    }
  );
}
function zn(r) {
  let e, t;
  const n = [r[7], { renderers: r[5] }];
  let s = {};
  for (let i = 0; i < n.length; i += 1) s = H(s, n[i]);
  return (
    (e = new Be({ props: s })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(i, l) {
        E(e, i, l), (t = !0);
      },
      p(i, l) {
        const o =
          l & 34
            ? ke(n, [l & 2 && we(i[7]), l & 32 && { renderers: i[5] }])
            : {};
        e.$set(o);
      },
      i(i) {
        t || (p(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        A(e, i);
      },
    }
  );
}
function Dl(r) {
  let e, t, n, s;
  const i = [_l, gl],
    l = [];
  function o(a, u) {
    return a[0] ? (a[5][a[0]] ? 1 : -1) : 0;
  }
  return (
    ~(e = o(r)) && (t = l[e] = i[e](r)),
    {
      c() {
        t && t.c(), (n = oe());
      },
      m(a, u) {
        ~e && l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? ~e && l[e].p(a, u)
            : (t &&
                (G(),
                _(l[c], 1, 1, () => {
                  l[c] = null;
                }),
                V()),
              ~e
                ? ((t = l[e]),
                  t ? t.p(a, u) : ((t = l[e] = i[e](a)), t.c()),
                  p(t, 1),
                  t.m(n.parentNode, n))
                : (t = null));
      },
      i(a) {
        s || (p(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        a && C(n), ~e && l[e].d(a);
      },
    }
  );
}
function Nl(r, e, t) {
  const n = ["type", "tokens", "header", "rows", "ordered", "renderers"];
  let s = yt(e, n),
    { type: i = void 0 } = e,
    { tokens: l = void 0 } = e,
    { header: o = void 0 } = e,
    { rows: a = void 0 } = e,
    { ordered: u = !1 } = e,
    { renderers: c } = e;
  return (
    ml(),
    (r.$$set = (d) => {
      (e = H(H({}, e), ae(d))),
        t(6, (s = yt(e, n))),
        "type" in d && t(0, (i = d.type)),
        "tokens" in d && t(1, (l = d.tokens)),
        "header" in d && t(2, (o = d.header)),
        "rows" in d && t(3, (a = d.rows)),
        "ordered" in d && t(4, (u = d.ordered)),
        "renderers" in d && t(5, (c = d.renderers));
    }),
    [i, l, o, a, u, c, s]
  );
}
let Be = class extends B {
  constructor(e) {
    super(),
      j(this, e, Nl, Dl, U, {
        type: 0,
        tokens: 1,
        header: 2,
        rows: 3,
        ordered: 4,
        renderers: 5,
      });
  }
};
function Js() {
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
let Ze = Js();
function Fl(r) {
  Ze = r;
}
const Xs = /[&<>"']/,
  Ql = new RegExp(Xs.source, "g"),
  Ys = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  Ul = new RegExp(Ys.source, "g"),
  jl = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  Dn = (r) => jl[r];
function ye(r, e) {
  if (e) {
    if (Xs.test(r)) return r.replace(Ql, Dn);
  } else if (Ys.test(r)) return r.replace(Ul, Dn);
  return r;
}
const Bl = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function ei(r) {
  return r.replace(
    Bl,
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
const Zl = /(^|[^\[])\^/g;
function re(r, e) {
  (r = typeof r == "string" ? r : r.source), (e = e || "");
  const t = {
    replace: (n, s) => (
      (s = s.source || s), (s = s.replace(Zl, "$1")), (r = r.replace(n, s)), t
    ),
    getRegex: () => new RegExp(r, e),
  };
  return t;
}
const Hl = /[^\w:]/g,
  Kl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Nn(r, e, t) {
  if (r) {
    let n;
    try {
      n = decodeURIComponent(ei(t)).replace(Hl, "").toLowerCase();
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
  e && !Kl.test(t) && (t = xl(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const mt = {},
  Gl = /^[^:]+:\/*[^/]*$/,
  Vl = /^([^:]+:)[\s\S]*$/,
  Wl = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function xl(r, e) {
  mt[" " + r] ||
    (Gl.test(r) ? (mt[" " + r] = r + "/") : (mt[" " + r] = kt(r, "/", !0))),
    (r = mt[" " + r]);
  const t = r.indexOf(":") === -1;
  return e.substring(0, 2) === "//"
    ? t
      ? e
      : r.replace(Vl, "$1") + e
    : e.charAt(0) === "/"
    ? t
      ? e
      : r.replace(Wl, "$1") + e
    : r + e;
}
const St = { exec: function () {} };
function Fn(r, e) {
  const t = r.replace(/\|/g, (i, l, o) => {
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
function kt(r, e, t) {
  const n = r.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    const i = r.charAt(n - s - 1);
    if (i === e && !t) s++;
    else if (i !== e && t) s++;
    else break;
  }
  return r.slice(0, n - s);
}
function Jl(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  const t = r.length;
  let n = 0,
    s = 0;
  for (; s < t; s++)
    if (r[s] === "\\") s++;
    else if (r[s] === e[0]) n++;
    else if (r[s] === e[1] && (n--, n < 0)) return s;
  return -1;
}
function Xl(r) {
  r &&
    r.sanitize &&
    !r.silent &&
    console.warn(
      "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
    );
}
function Qn(r, e) {
  if (e < 1) return "";
  let t = "";
  for (; e > 1; ) e & 1 && (t += r), (e >>= 1), (r += r);
  return t + r;
}
function Un(r, e, t, n) {
  const s = e.href,
    i = e.title ? ye(e.title) : null,
    l = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: s,
      title: i,
      text: l,
      tokens: n.inlineTokens(l),
    };
    return (n.state.inLink = !1), o;
  }
  return { type: "image", raw: t, href: s, title: i, text: ye(l) };
}
function Yl(r, e) {
  const t = r.match(/^(\s+)(?:```)/);
  if (t === null) return e;
  const n = t[1];
  return e
    .split(
      `
`
    )
    .map((s) => {
      const i = s.match(/^\s+/);
      if (i === null) return s;
      const [l] = i;
      return l.length >= n.length ? s.slice(n.length) : s;
    }).join(`
`);
}
class Xt {
  constructor(e) {
    this.options = e || Ze;
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
          : kt(
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
        s = Yl(n, t[3] || "");
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
        const s = kt(n, "#");
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
      const i = this.lexer.blockTokens(n);
      return (
        (this.lexer.state.top = s),
        { type: "blockquote", raw: t[0], tokens: i, text: n }
      );
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n,
        s,
        i,
        l,
        o,
        a,
        u,
        c,
        d,
        h,
        f,
        m,
        b = t[1].trim();
      const k = b.length > 1,
        $ = {
          type: "list",
          raw: "",
          ordered: k,
          start: k ? +b.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      (b = k ? `\\d{1,9}\\${b.slice(-1)}` : `\\${b}`),
        this.options.pedantic && (b = k ? b : "[*+-]");
      const w = new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (
        ;
        e && ((m = !1), !(!(t = w.exec(e)) || this.rules.block.hr.test(e)));

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
          (d = e.split(
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
            /^ *$/.test(d) &&
            ((n +=
              d +
              `
`),
            (e = e.substring(d.length + 1)),
            (m = !0)),
          !m)
        ) {
          const S = new RegExp(
              `^ {0,${Math.min(
                3,
                l - 1
              )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
            ),
            T = new RegExp(
              `^ {0,${Math.min(
                3,
                l - 1
              )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
            ),
            q = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`),
            L = new RegExp(`^ {0,${Math.min(3, l - 1)}}#`);
          for (
            ;
            e &&
            ((h = e.split(
              `
`,
              1
            )[0]),
            (d = h),
            this.options.pedantic &&
              (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
            !(q.test(d) || L.test(d) || S.test(d) || T.test(e)));

          ) {
            if (d.search(/[^ ]/) >= l || !d.trim())
              f +=
                `
` + d.slice(l);
            else {
              if (
                a ||
                c.search(/[^ ]/) >= 4 ||
                q.test(c) ||
                L.test(c) ||
                T.test(c)
              )
                break;
              f +=
                `
` + d;
            }
            !a && !d.trim() && (a = !0),
              (n +=
                h +
                `
`),
              (e = e.substring(h.length + 1)),
              (c = d.slice(l));
          }
        }
        $.loose || (u ? ($.loose = !0) : /\n *\n *$/.test(n) && (u = !0)),
          this.options.gfm &&
            ((s = /^\[[ xX]\] /.exec(f)),
            s && ((i = s[0] !== "[ ] "), (f = f.replace(/^\[[ xX]\] +/, "")))),
          $.items.push({
            type: "list_item",
            raw: n,
            task: !!s,
            checked: i,
            loose: !1,
            text: f,
          }),
          ($.raw += n);
      }
      ($.items[$.items.length - 1].raw = n.trimRight()),
        ($.items[$.items.length - 1].text = f.trimRight()),
        ($.raw = $.raw.trimRight());
      const P = $.items.length;
      for (o = 0; o < P; o++)
        if (
          ((this.lexer.state.top = !1),
          ($.items[o].tokens = this.lexer.blockTokens($.items[o].text, [])),
          !$.loose)
        ) {
          const S = $.items[o].tokens.filter((q) => q.type === "space"),
            T = S.length > 0 && S.some((q) => /\n.*\n/.test(q.raw));
          $.loose = T;
        }
      if ($.loose) for (o = 0; o < P; o++) $.items[o].loose = !0;
      return $;
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
          : ye(t[0]);
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
        i = t[3]
          ? t[3]
              .substring(1, t[3].length - 1)
              .replace(this.rules.inline._escapes, "$1")
          : t[3];
      return { type: "def", tag: n, raw: t[0], href: s, title: i };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      const n = {
        type: "table",
        header: Fn(t[1]).map((s) => ({ text: s })),
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
          i,
          l,
          o,
          a;
        for (i = 0; i < s; i++)
          /^ *-+: *$/.test(n.align[i])
            ? (n.align[i] = "right")
            : /^ *:-+: *$/.test(n.align[i])
            ? (n.align[i] = "center")
            : /^ *:-+ *$/.test(n.align[i])
            ? (n.align[i] = "left")
            : (n.align[i] = null);
        for (s = n.rows.length, i = 0; i < s; i++)
          n.rows[i] = Fn(n.rows[i], n.header.length).map((u) => ({ text: u }));
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
    if (t) return { type: "escape", raw: t[0], text: ye(t[1]) };
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
              : ye(t[0])
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
        const l = kt(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0) return;
      } else {
        const l = Jl(t[2], "()");
        if (l > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          (t[2] = t[2].substring(0, l)),
            (t[0] = t[0].substring(0, a).trim()),
            (t[3] = "");
        }
      }
      let s = t[2],
        i = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        l && ((s = l[1]), (i = l[3]));
      } else i = t[3] ? t[3].slice(1, -1) : "";
      return (
        (s = s.trim()),
        /^</.test(s) &&
          (this.options.pedantic && !/>$/.test(n)
            ? (s = s.slice(1))
            : (s = s.slice(1, -1))),
        Un(
          t,
          {
            href: s && s.replace(this.rules.inline._escapes, "$1"),
            title: i && i.replace(this.rules.inline._escapes, "$1"),
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
        const i = n[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return Un(n, s, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrong.lDelim.exec(e);
    if (!s || (s[3] && n.match(/[\p{L}\p{N}]/u))) return;
    const i = s[1] || s[2] || "";
    if (!i || (i && (n === "" || this.rules.inline.punctuation.exec(n)))) {
      const l = s[0].length - 1;
      let o,
        a,
        u = l,
        c = 0;
      const d =
        s[0][0] === "*"
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (
        d.lastIndex = 0, t = t.slice(-1 * e.length + l);
        (s = d.exec(t)) != null;

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
          const m = h.slice(1, -1);
          return {
            type: "em",
            raw: h,
            text: m,
            tokens: this.lexer.inlineTokens(m),
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
        i = /^ /.test(n) && / $/.test(n);
      return (
        s && i && (n = n.substring(1, n.length - 1)),
        (n = ye(n, !0)),
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
      let s, i;
      return (
        n[2] === "@"
          ? ((s = ye(this.options.mangle ? t(n[1]) : n[1])),
            (i = "mailto:" + s))
          : ((s = ye(n[1])), (i = s)),
        {
          type: "link",
          raw: n[0],
          text: s,
          href: i,
          tokens: [{ type: "text", raw: s, text: s }],
        }
      );
    }
  }
  url(e, t) {
    let n;
    if ((n = this.rules.inline.url.exec(e))) {
      let s, i;
      if (n[2] === "@")
        (s = ye(this.options.mangle ? t(n[0]) : n[0])), (i = "mailto:" + s);
      else {
        let l;
        do (l = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
        while (l !== n[0]);
        (s = ye(n[0])), n[1] === "www." ? (i = "http://" + n[0]) : (i = n[0]);
      }
      return {
        type: "link",
        raw: n[0],
        text: s,
        href: i,
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
                : ye(n[0])
              : n[0])
          : (s = ye(this.options.smartypants ? t(n[0]) : n[0])),
        { type: "text", raw: n[0], text: s }
      );
    }
  }
}
const N = {
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
  table: St,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
N._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
N._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
N.def = re(N.def)
  .replace("label", N._label)
  .replace("title", N._title)
  .getRegex();
N.bullet = /(?:[*+-]|\d{1,9}[.)])/;
N.listItemStart = re(/^( *)(bull) */)
  .replace("bull", N.bullet)
  .getRegex();
N.list = re(N.list)
  .replace(/bull/g, N.bullet)
  .replace(
    "hr",
    "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
  )
  .replace("def", "\\n+(?=" + N.def.source + ")")
  .getRegex();
N._tag =
  "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
N._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
N.html = re(N.html, "i")
  .replace("comment", N._comment)
  .replace("tag", N._tag)
  .replace(
    "attribute",
    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
  )
  .getRegex();
N.paragraph = re(N._paragraph)
  .replace("hr", N.hr)
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
  .replace("tag", N._tag)
  .getRegex();
N.blockquote = re(N.blockquote).replace("paragraph", N.paragraph).getRegex();
N.normal = { ...N };
N.gfm = {
  ...N.normal,
  table:
    "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
};
N.gfm.table = re(N.gfm.table)
  .replace("hr", N.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("blockquote", " {0,3}>")
  .replace("code", " {4}[^\\n]")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", N._tag)
  .getRegex();
N.gfm.paragraph = re(N._paragraph)
  .replace("hr", N.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("|lheading", "")
  .replace("table", N.gfm.table)
  .replace("blockquote", " {0,3}>")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", N._tag)
  .getRegex();
N.pedantic = {
  ...N.normal,
  html: re(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  )
    .replace("comment", N._comment)
    .replace(
      /tag/g,
      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: St,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: re(N.normal._paragraph)
    .replace("hr", N.hr)
    .replace(
      "heading",
      ` *#{1,6} *[^
]`
    )
    .replace("lheading", N.lheading)
    .replace("blockquote", " {0,3}>")
    .replace("|fences", "")
    .replace("|list", "")
    .replace("|html", "")
    .getRegex(),
};
const O = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: St,
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
  del: St,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
O._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
O.punctuation = re(O.punctuation)
  .replace(/punctuation/g, O._punctuation)
  .getRegex();
O.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
O.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
O._comment = re(N._comment).replace("(?:-->|$)", "-->").getRegex();
O.emStrong.lDelim = re(O.emStrong.lDelim)
  .replace(/punct/g, O._punctuation)
  .getRegex();
O.emStrong.rDelimAst = re(O.emStrong.rDelimAst, "g")
  .replace(/punct/g, O._punctuation)
  .getRegex();
O.emStrong.rDelimUnd = re(O.emStrong.rDelimUnd, "g")
  .replace(/punct/g, O._punctuation)
  .getRegex();
O._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
O._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
O._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
O.autolink = re(O.autolink)
  .replace("scheme", O._scheme)
  .replace("email", O._email)
  .getRegex();
O._attribute =
  /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
O.tag = re(O.tag)
  .replace("comment", O._comment)
  .replace("attribute", O._attribute)
  .getRegex();
O._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
O._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
O._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
O.link = re(O.link)
  .replace("label", O._label)
  .replace("href", O._href)
  .replace("title", O._title)
  .getRegex();
O.reflink = re(O.reflink)
  .replace("label", O._label)
  .replace("ref", N._label)
  .getRegex();
O.nolink = re(O.nolink).replace("ref", N._label).getRegex();
O.reflinkSearch = re(O.reflinkSearch, "g")
  .replace("reflink", O.reflink)
  .replace("nolink", O.nolink)
  .getRegex();
O.normal = { ...O };
O.pedantic = {
  ...O.normal,
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
  link: re(/^!?\[(label)\]\((.*?)\)/)
    .replace("label", O._label)
    .getRegex(),
  reflink: re(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace("label", O._label)
    .getRegex(),
};
O.gfm = {
  ...O.normal,
  escape: re(O.escape).replace("])", "~|])").getRegex(),
  _extended_email:
    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal:
    /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
};
O.gfm.url = re(O.gfm.url, "i")
  .replace("email", O.gfm._extended_email)
  .getRegex();
O.breaks = {
  ...O.gfm,
  br: re(O.br).replace("{2,}", "*").getRegex(),
  text: re(O.gfm.text)
    .replace("\\b_", "\\b_| {2,}\\n")
    .replace(/\{2,\}/g, "*")
    .getRegex(),
};
function eo(r) {
  return r
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…");
}
function jn(r) {
  let e = "",
    t,
    n;
  const s = r.length;
  for (t = 0; t < s; t++)
    (n = r.charCodeAt(t)),
      Math.random() > 0.5 && (n = "x" + n.toString(16)),
      (e += "&#" + n + ";");
  return e;
}
class Ee {
  constructor(e) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || Ze),
      (this.options.tokenizer = this.options.tokenizer || new Xt()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const t = { block: N.normal, inline: O.normal };
    this.options.pedantic
      ? ((t.block = N.pedantic), (t.inline = O.pedantic))
      : this.options.gfm &&
        ((t.block = N.gfm),
        this.options.breaks ? (t.inline = O.breaks) : (t.inline = O.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: N, inline: O };
  }
  static lex(e, t) {
    return new Ee(t).lex(e);
  }
  static lexInline(e, t) {
    return new Ee(t).inlineTokens(e);
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
    let n, s, i, l;
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
          ((i = e),
          this.options.extensions && this.options.extensions.startBlock)
        ) {
          let o = 1 / 0;
          const a = e.slice(1);
          let u;
          this.options.extensions.startBlock.forEach(function (c) {
            (u = c.call({ lexer: this }, a)),
              typeof u == "number" && u >= 0 && (o = Math.min(o, u));
          }),
            o < 1 / 0 && o >= 0 && (i = e.substring(0, o + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(i))) {
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
            (l = i.length !== e.length),
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
      i,
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
              Qn("a", o[0].length - 2) +
              "]" +
              l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l =
        l.slice(0, o.index) +
        "[" +
        Qn("a", o[0].length - 2) +
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
        if ((n = this.tokenizer.autolink(e, jn))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e, jn))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (
          ((i = e),
          this.options.extensions && this.options.extensions.startInline)
        ) {
          let c = 1 / 0;
          const d = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach(function (f) {
            (h = f.call({ lexer: this }, d)),
              typeof h == "number" && h >= 0 && (c = Math.min(c, h));
          }),
            c < 1 / 0 && c >= 0 && (i = e.substring(0, c + 1));
        }
        if ((n = this.tokenizer.inlineText(i, eo))) {
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
class Yt {
  constructor(e) {
    this.options = e || Ze;
  }
  code(e, t, n) {
    const s = (t || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const i = this.options.highlight(e, s);
      i != null && i !== e && ((n = !0), (e = i));
    }
    return (
      (e =
        e.replace(/\n$/, "") +
        `
`),
      s
        ? '<pre><code class="' +
          this.options.langPrefix +
          ye(s) +
          '">' +
          (n ? e : ye(e, !0)) +
          `</code></pre>
`
        : "<pre><code>" +
          (n ? e : ye(e, !0)) +
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
      const i = this.options.headerPrefix + s.slug(n);
      return `<h${t} id="${i}">${e}</h${t}>
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
      i = t && n !== 1 ? ' start="' + n + '"' : "";
    return (
      "<" +
      s +
      i +
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
    if (((e = Nn(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return n;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), (s += ">" + n + "</a>"), s;
  }
  image(e, t, n) {
    if (((e = Nn(this.options.sanitize, this.options.baseUrl, e)), e === null))
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
class ti {
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
class en {
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
class ze {
  constructor(e) {
    (this.options = e || Ze),
      (this.options.renderer = this.options.renderer || new Yt()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new ti()),
      (this.slugger = new en());
  }
  static parse(e, t) {
    return new ze(t).parse(e);
  }
  static parseInline(e, t) {
    return new ze(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n = "",
      s,
      i,
      l,
      o,
      a,
      u,
      c,
      d,
      h,
      f,
      m,
      b,
      k,
      $,
      w,
      P,
      S,
      T,
      q;
    const L = e.length;
    for (s = 0; s < L; s++) {
      if (
        ((f = e[s]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[f.type] &&
          ((q = this.options.extensions.renderers[f.type].call(
            { parser: this },
            f
          )),
          q !== !1 ||
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
        n += q || "";
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
            ei(this.parseInline(f.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          n += this.renderer.code(f.text, f.lang, f.escaped);
          continue;
        }
        case "table": {
          for (d = "", c = "", o = f.header.length, i = 0; i < o; i++)
            c += this.renderer.tablecell(this.parseInline(f.header[i].tokens), {
              header: !0,
              align: f.align[i],
            });
          for (
            d += this.renderer.tablerow(c), h = "", o = f.rows.length, i = 0;
            i < o;
            i++
          ) {
            for (u = f.rows[i], c = "", a = u.length, l = 0; l < a; l++)
              c += this.renderer.tablecell(this.parseInline(u[l].tokens), {
                header: !1,
                align: f.align[l],
              });
            h += this.renderer.tablerow(c);
          }
          n += this.renderer.table(d, h);
          continue;
        }
        case "blockquote": {
          (h = this.parse(f.tokens)), (n += this.renderer.blockquote(h));
          continue;
        }
        case "list": {
          for (
            m = f.ordered,
              b = f.start,
              k = f.loose,
              o = f.items.length,
              h = "",
              i = 0;
            i < o;
            i++
          )
            (w = f.items[i]),
              (P = w.checked),
              (S = w.task),
              ($ = ""),
              w.task &&
                ((T = this.renderer.checkbox(P)),
                k
                  ? w.tokens.length > 0 && w.tokens[0].type === "paragraph"
                    ? ((w.tokens[0].text = T + " " + w.tokens[0].text),
                      w.tokens[0].tokens &&
                        w.tokens[0].tokens.length > 0 &&
                        w.tokens[0].tokens[0].type === "text" &&
                        (w.tokens[0].tokens[0].text =
                          T + " " + w.tokens[0].tokens[0].text))
                    : w.tokens.unshift({ type: "text", text: T })
                  : ($ += T)),
              ($ += this.parse(w.tokens, k)),
              (h += this.renderer.listitem($, S, P));
          n += this.renderer.list(h, m, b);
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
            s + 1 < L && e[s + 1].type === "text";

          )
            (f = e[++s]),
              (h +=
                `
` + (f.tokens ? this.parseInline(f.tokens) : f.text));
          n += t ? this.renderer.paragraph(h) : h;
          continue;
        }
        default: {
          const z = 'Token with "' + f.type + '" type was not found.';
          if (this.options.silent) {
            console.error(z);
            return;
          } else throw new Error(z);
        }
      }
    }
    return n;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let n = "",
      s,
      i,
      l;
    const o = e.length;
    for (s = 0; s < o; s++) {
      if (
        ((i = e[s]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[i.type] &&
          ((l = this.options.extensions.renderers[i.type].call(
            { parser: this },
            i
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
            ].includes(i.type)))
      ) {
        n += l || "";
        continue;
      }
      switch (i.type) {
        case "escape": {
          n += t.text(i.text);
          break;
        }
        case "html": {
          n += t.html(i.text);
          break;
        }
        case "link": {
          n += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          n += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          n += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          n += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          n += t.codespan(i.text);
          break;
        }
        case "br": {
          n += t.br();
          break;
        }
        case "del": {
          n += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          n += t.text(i.text);
          break;
        }
        default: {
          const a = 'Token with "' + i.type + '" type was not found.';
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
class Pt {
  constructor(e) {
    this.options = e || Ze;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
}
Oe(Pt, "passThroughHooks", new Set(["preprocess", "postprocess"]));
function to(r, e, t) {
  return (n) => {
    if (
      ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
      r)
    ) {
      const s =
        "<p>An error occurred:</p><pre>" + ye(n.message + "", !0) + "</pre>";
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
function ni(r, e) {
  return (t, n, s) => {
    typeof n == "function" && ((s = n), (n = null));
    const i = { ...n };
    n = { ...F.defaults, ...i };
    const l = to(n.silent, n.async, s);
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
    if ((Xl(n), n.hooks && (n.hooks.options = n), s)) {
      const o = n.highlight;
      let a;
      try {
        n.hooks && (t = n.hooks.preprocess(t)), (a = r(t, n));
      } catch (d) {
        return l(d);
      }
      const u = function (d) {
        let h;
        if (!d)
          try {
            n.walkTokens && F.walkTokens(a, n.walkTokens),
              (h = e(a, n)),
              n.hooks && (h = n.hooks.postprocess(h));
          } catch (f) {
            d = f;
          }
        return (n.highlight = o), d ? l(d) : s(null, h);
      };
      if (!o || o.length < 3 || (delete n.highlight, !a.length)) return u();
      let c = 0;
      F.walkTokens(a, function (d) {
        d.type === "code" &&
          (c++,
          setTimeout(() => {
            o(d.text, d.lang, function (h, f) {
              if (h) return u(h);
              f != null && f !== d.text && ((d.text = f), (d.escaped = !0)),
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
        .then((o) => r(o, n))
        .then((o) =>
          n.walkTokens
            ? Promise.all(F.walkTokens(o, n.walkTokens)).then(() => o)
            : o
        )
        .then((o) => e(o, n))
        .then((o) => (n.hooks ? n.hooks.postprocess(o) : o))
        .catch(l);
    try {
      n.hooks && (t = n.hooks.preprocess(t));
      const o = r(t, n);
      n.walkTokens && F.walkTokens(o, n.walkTokens);
      let a = e(o, n);
      return n.hooks && (a = n.hooks.postprocess(a)), a;
    } catch (o) {
      return l(o);
    }
  };
}
function F(r, e, t) {
  return ni(Ee.lex, ze.parse)(r, e, t);
}
F.options = F.setOptions = function (r) {
  return (F.defaults = { ...F.defaults, ...r }), Fl(F.defaults), F;
};
F.getDefaults = Js;
F.defaults = Ze;
F.use = function (...r) {
  const e = F.defaults.extensions || { renderers: {}, childTokens: {} };
  r.forEach((t) => {
    const n = { ...t };
    if (
      ((n.async = F.defaults.async || n.async || !1),
      t.extensions &&
        (t.extensions.forEach((s) => {
          if (!s.name) throw new Error("extension name required");
          if (s.renderer) {
            const i = e.renderers[s.name];
            i
              ? (e.renderers[s.name] = function (...l) {
                  let o = s.renderer.apply(this, l);
                  return o === !1 && (o = i.apply(this, l)), o;
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
      const s = F.defaults.renderer || new Yt();
      for (const i in t.renderer) {
        const l = s[i];
        s[i] = (...o) => {
          let a = t.renderer[i].apply(s, o);
          return a === !1 && (a = l.apply(s, o)), a;
        };
      }
      n.renderer = s;
    }
    if (t.tokenizer) {
      const s = F.defaults.tokenizer || new Xt();
      for (const i in t.tokenizer) {
        const l = s[i];
        s[i] = (...o) => {
          let a = t.tokenizer[i].apply(s, o);
          return a === !1 && (a = l.apply(s, o)), a;
        };
      }
      n.tokenizer = s;
    }
    if (t.hooks) {
      const s = F.defaults.hooks || new Pt();
      for (const i in t.hooks) {
        const l = s[i];
        Pt.passThroughHooks.has(i)
          ? (s[i] = (o) => {
              if (F.defaults.async)
                return Promise.resolve(t.hooks[i].call(s, o)).then((u) =>
                  l.call(s, u)
                );
              const a = t.hooks[i].call(s, o);
              return l.call(s, a);
            })
          : (s[i] = (...o) => {
              let a = t.hooks[i].apply(s, o);
              return a === !1 && (a = l.apply(s, o)), a;
            });
      }
      n.hooks = s;
    }
    if (t.walkTokens) {
      const s = F.defaults.walkTokens;
      n.walkTokens = function (i) {
        let l = [];
        return (
          l.push(t.walkTokens.call(this, i)),
          s && (l = l.concat(s.call(this, i))),
          l
        );
      };
    }
    F.setOptions(n);
  });
};
F.walkTokens = function (r, e) {
  let t = [];
  for (const n of r)
    switch (((t = t.concat(e.call(F, n))), n.type)) {
      case "table": {
        for (const s of n.header) t = t.concat(F.walkTokens(s.tokens, e));
        for (const s of n.rows)
          for (const i of s) t = t.concat(F.walkTokens(i.tokens, e));
        break;
      }
      case "list": {
        t = t.concat(F.walkTokens(n.items, e));
        break;
      }
      default:
        F.defaults.extensions &&
        F.defaults.extensions.childTokens &&
        F.defaults.extensions.childTokens[n.type]
          ? F.defaults.extensions.childTokens[n.type].forEach(function (s) {
              t = t.concat(F.walkTokens(n[s], e));
            })
          : n.tokens && (t = t.concat(F.walkTokens(n.tokens, e)));
    }
  return t;
};
F.parseInline = ni(Ee.lexInline, ze.parseInline);
F.Parser = ze;
F.parser = ze.parse;
F.Renderer = Yt;
F.TextRenderer = ti;
F.Lexer = Ee;
F.lexer = Ee.lex;
F.Tokenizer = Xt;
F.Slugger = en;
F.Hooks = Pt;
F.parse = F;
F.options;
F.setOptions;
F.use;
F.walkTokens;
F.parseInline;
ze.parse;
Ee.lex;
const si = {};
function no(r) {
  let e;
  return {
    c() {
      e = ne(r[1]);
    },
    m(t, n) {
      R(t, e, n);
    },
    p(t, n) {
      n & 2 && pe(e, t[1]);
    },
    i: ee,
    o: ee,
    d(t) {
      t && C(e);
    },
  };
}
function so(r) {
  let e, t;
  const n = r[5].default,
    s = W(n, r, r[4], null);
  return {
    c() {
      (e = v("h6")), s && s.c(), g(e, "id", r[2]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        J(s, n, i, i[4], t ? x(n, i[4], l, null) : X(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function io(r) {
  let e, t;
  const n = r[5].default,
    s = W(n, r, r[4], null);
  return {
    c() {
      (e = v("h5")), s && s.c(), g(e, "id", r[2]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        J(s, n, i, i[4], t ? x(n, i[4], l, null) : X(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function ro(r) {
  let e, t;
  const n = r[5].default,
    s = W(n, r, r[4], null);
  return {
    c() {
      (e = v("h4")), s && s.c(), g(e, "id", r[2]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        J(s, n, i, i[4], t ? x(n, i[4], l, null) : X(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function lo(r) {
  let e, t;
  const n = r[5].default,
    s = W(n, r, r[4], null);
  return {
    c() {
      (e = v("h3")), s && s.c(), g(e, "id", r[2]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        J(s, n, i, i[4], t ? x(n, i[4], l, null) : X(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function oo(r) {
  let e, t;
  const n = r[5].default,
    s = W(n, r, r[4], null);
  return {
    c() {
      (e = v("h2")), s && s.c(), g(e, "id", r[2]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        J(s, n, i, i[4], t ? x(n, i[4], l, null) : X(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function ao(r) {
  let e, t;
  const n = r[5].default,
    s = W(n, r, r[4], null);
  return {
    c() {
      (e = v("h1")), s && s.c(), g(e, "id", r[2]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        J(s, n, i, i[4], t ? x(n, i[4], l, null) : X(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function uo(r) {
  let e, t, n, s;
  const i = [ao, oo, lo, ro, io, so, no],
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
    (e = o(r)),
    (t = l[e] = i[e](r)),
    {
      c() {
        t.c(), (n = oe());
      },
      m(a, u) {
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (G(),
              _(l[c], 1, 1, () => {
                l[c] = null;
              }),
              V(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = i[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        a && C(n), l[e].d(a);
      },
    }
  );
}
function co(r, e, t) {
  let n,
    { $$slots: s = {}, $$scope: i } = e,
    { depth: l } = e,
    { raw: o } = e,
    { text: a } = e;
  const { slug: u, getOptions: c } = vs(si),
    d = c();
  return (
    (r.$$set = (h) => {
      "depth" in h && t(0, (l = h.depth)),
        "raw" in h && t(1, (o = h.raw)),
        "text" in h && t(3, (a = h.text)),
        "$$scope" in h && t(4, (i = h.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 8 &&
        t(2, (n = d.headerIds ? d.headerPrefix + u(a) : void 0));
    }),
    [l, o, n, a, i, s]
  );
}
class fo extends B {
  constructor(e) {
    super(), j(this, e, co, uo, U, { depth: 0, raw: 1, text: 3 });
  }
}
function ho(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("p")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function po(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class mo extends B {
  constructor(e) {
    super(), j(this, e, po, ho, U, {});
  }
}
function go(r) {
  let e;
  const t = r[3].default,
    n = W(t, r, r[2], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, [i]) {
      n &&
        n.p &&
        (!e || i & 4) &&
        J(n, t, s, s[2], e ? x(t, s[2], i, null) : X(s[2]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function _o(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { text: i } = e,
    { raw: l } = e;
  return (
    (r.$$set = (o) => {
      "text" in o && t(0, (i = o.text)),
        "raw" in o && t(1, (l = o.raw)),
        "$$scope" in o && t(2, (s = o.$$scope));
    }),
    [i, l, s, n]
  );
}
class bo extends B {
  constructor(e) {
    super(), j(this, e, _o, go, U, { text: 0, raw: 1 });
  }
}
function ko(r) {
  let e, t;
  return {
    c() {
      (e = v("img")),
        rn(e.src, (t = r[0])) || g(e, "src", t),
        g(e, "title", r[1]),
        g(e, "alt", r[2]);
    },
    m(n, s) {
      R(n, e, s);
    },
    p(n, [s]) {
      s & 1 && !rn(e.src, (t = n[0])) && g(e, "src", t),
        s & 2 && g(e, "title", n[1]),
        s & 4 && g(e, "alt", n[2]);
    },
    i: ee,
    o: ee,
    d(n) {
      n && C(e);
    },
  };
}
function yo(r, e, t) {
  let { href: n = "" } = e,
    { title: s = void 0 } = e,
    { text: i = "" } = e;
  return (
    (r.$$set = (l) => {
      "href" in l && t(0, (n = l.href)),
        "title" in l && t(1, (s = l.title)),
        "text" in l && t(2, (i = l.text));
    }),
    [n, s, i]
  );
}
class wo extends B {
  constructor(e) {
    super(), j(this, e, yo, ko, U, { href: 0, title: 1, text: 2 });
  }
}
function vo(r) {
  let e, t;
  const n = r[3].default,
    s = W(n, r, r[2], null);
  return {
    c() {
      (e = v("a")), s && s.c(), g(e, "href", r[0]), g(e, "title", r[1]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 4) &&
        J(s, n, i, i[2], t ? x(n, i[2], l, null) : X(i[2]), null),
        (!t || l & 1) && g(e, "href", i[0]),
        (!t || l & 2) && g(e, "title", i[1]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function $o(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { href: i = "" } = e,
    { title: l = void 0 } = e;
  return (
    (r.$$set = (o) => {
      "href" in o && t(0, (i = o.href)),
        "title" in o && t(1, (l = o.title)),
        "$$scope" in o && t(2, (s = o.$$scope));
    }),
    [i, l, s, n]
  );
}
class Co extends B {
  constructor(e) {
    super(), j(this, e, $o, vo, U, { href: 0, title: 1 });
  }
}
function Ro(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("em")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function Lo(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class So extends B {
  constructor(e) {
    super(), j(this, e, Lo, Ro, U, {});
  }
}
function Po(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("del")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function To(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class Oo extends B {
  constructor(e) {
    super(), j(this, e, To, Po, U, {});
  }
}
function Eo(r) {
  let e,
    t = r[0].replace(/`/g, "") + "",
    n;
  return {
    c() {
      (e = v("code")), (n = ne(t));
    },
    m(s, i) {
      R(s, e, i), y(e, n);
    },
    p(s, [i]) {
      i & 1 && t !== (t = s[0].replace(/`/g, "") + "") && pe(n, t);
    },
    i: ee,
    o: ee,
    d(s) {
      s && C(e);
    },
  };
}
function Ao(r, e, t) {
  let { raw: n } = e;
  return (
    (r.$$set = (s) => {
      "raw" in s && t(0, (n = s.raw));
    }),
    [n]
  );
}
class Io extends B {
  constructor(e) {
    super(), j(this, e, Ao, Eo, U, { raw: 0 });
  }
}
function qo(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("strong")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function Mo(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class zo extends B {
  constructor(e) {
    super(), j(this, e, Mo, qo, U, {});
  }
}
function Do(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("table")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function No(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class Fo extends B {
  constructor(e) {
    super(), j(this, e, No, Do, U, {});
  }
}
function Qo(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("thead")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function Uo(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class jo extends B {
  constructor(e) {
    super(), j(this, e, Uo, Qo, U, {});
  }
}
function Bo(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("tbody")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function Zo(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class Ho extends B {
  constructor(e) {
    super(), j(this, e, Zo, Bo, U, {});
  }
}
function Ko(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("tr")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function Go(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class Vo extends B {
  constructor(e) {
    super(), j(this, e, Go, Ko, U, {});
  }
}
function Wo(r) {
  let e, t;
  const n = r[3].default,
    s = W(n, r, r[2], null);
  return {
    c() {
      (e = v("td")), s && s.c(), g(e, "align", r[1]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        J(s, n, i, i[2], t ? x(n, i[2], l, null) : X(i[2]), null),
        (!t || l & 2) && g(e, "align", i[1]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function xo(r) {
  let e, t;
  const n = r[3].default,
    s = W(n, r, r[2], null);
  return {
    c() {
      (e = v("th")), s && s.c(), g(e, "align", r[1]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        J(s, n, i, i[2], t ? x(n, i[2], l, null) : X(i[2]), null),
        (!t || l & 2) && g(e, "align", i[1]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function Jo(r) {
  let e, t, n, s;
  const i = [xo, Wo],
    l = [];
  function o(a, u) {
    return a[0] ? 0 : 1;
  }
  return (
    (e = o(r)),
    (t = l[e] = i[e](r)),
    {
      c() {
        t.c(), (n = oe());
      },
      m(a, u) {
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (G(),
              _(l[c], 1, 1, () => {
                l[c] = null;
              }),
              V(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = i[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        a && C(n), l[e].d(a);
      },
    }
  );
}
function Xo(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { header: i } = e,
    { align: l } = e;
  return (
    (r.$$set = (o) => {
      "header" in o && t(0, (i = o.header)),
        "align" in o && t(1, (l = o.align)),
        "$$scope" in o && t(2, (s = o.$$scope));
    }),
    [i, l, s, n]
  );
}
class Yo extends B {
  constructor(e) {
    super(), j(this, e, Xo, Jo, U, { header: 0, align: 1 });
  }
}
function ea(r) {
  let e, t;
  const n = r[3].default,
    s = W(n, r, r[2], null);
  return {
    c() {
      (e = v("ul")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        J(s, n, i, i[2], t ? x(n, i[2], l, null) : X(i[2]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function ta(r) {
  let e, t;
  const n = r[3].default,
    s = W(n, r, r[2], null);
  return {
    c() {
      (e = v("ol")), s && s.c(), g(e, "start", r[1]);
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        J(s, n, i, i[2], t ? x(n, i[2], l, null) : X(i[2]), null),
        (!t || l & 2) && g(e, "start", i[1]);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function na(r) {
  let e, t, n, s;
  const i = [ta, ea],
    l = [];
  function o(a, u) {
    return a[0] ? 0 : 1;
  }
  return (
    (e = o(r)),
    (t = l[e] = i[e](r)),
    {
      c() {
        t.c(), (n = oe());
      },
      m(a, u) {
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (G(),
              _(l[c], 1, 1, () => {
                l[c] = null;
              }),
              V(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = i[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        a && C(n), l[e].d(a);
      },
    }
  );
}
function sa(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { ordered: i } = e,
    { start: l } = e;
  return (
    (r.$$set = (o) => {
      "ordered" in o && t(0, (i = o.ordered)),
        "start" in o && t(1, (l = o.start)),
        "$$scope" in o && t(2, (s = o.$$scope));
    }),
    [i, l, s, n]
  );
}
class ia extends B {
  constructor(e) {
    super(), j(this, e, sa, na, U, { ordered: 0, start: 1 });
  }
}
function ra(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("li")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function la(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class oa extends B {
  constructor(e) {
    super(), j(this, e, la, ra, U, {});
  }
}
function aa(r) {
  let e;
  return {
    c() {
      e = v("hr");
    },
    m(t, n) {
      R(t, e, n);
    },
    p: ee,
    i: ee,
    o: ee,
    d(t) {
      t && C(e);
    },
  };
}
class ua extends B {
  constructor(e) {
    super(), j(this, e, null, aa, U, {});
  }
}
function ca(r) {
  let e, t;
  return {
    c() {
      (e = new mi(!1)), (t = oe()), (e.a = t);
    },
    m(n, s) {
      e.m(r[0], n, s), R(n, t, s);
    },
    p(n, [s]) {
      s & 1 && e.p(n[0]);
    },
    i: ee,
    o: ee,
    d(n) {
      n && (C(t), e.d());
    },
  };
}
function fa(r, e, t) {
  let { text: n } = e;
  return (
    (r.$$set = (s) => {
      "text" in s && t(0, (n = s.text));
    }),
    [n]
  );
}
class ha extends B {
  constructor(e) {
    super(), j(this, e, fa, ca, U, { text: 0 });
  }
}
function da(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("blockquote")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function pa(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class ma extends B {
  constructor(e) {
    super(), j(this, e, pa, da, U, {});
  }
}
function ga(r) {
  let e, t, n;
  return {
    c() {
      (e = v("pre")), (t = v("code")), (n = ne(r[1])), g(e, "class", r[0]);
    },
    m(s, i) {
      R(s, e, i), y(e, t), y(t, n);
    },
    p(s, [i]) {
      i & 2 && pe(n, s[1]), i & 1 && g(e, "class", s[0]);
    },
    i: ee,
    o: ee,
    d(s) {
      s && C(e);
    },
  };
}
function _a(r, e, t) {
  let { lang: n } = e,
    { text: s } = e;
  return (
    (r.$$set = (i) => {
      "lang" in i && t(0, (n = i.lang)), "text" in i && t(1, (s = i.text));
    }),
    [n, s]
  );
}
class ba extends B {
  constructor(e) {
    super(), j(this, e, _a, ga, U, { lang: 0, text: 1 });
  }
}
function ka(r) {
  let e, t;
  const n = r[1].default,
    s = W(n, r, r[0], null);
  return {
    c() {
      (e = v("br")), s && s.c();
    },
    m(i, l) {
      R(i, e, l), s && s.m(i, l), (t = !0);
    },
    p(i, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        J(s, n, i, i[0], t ? x(n, i[0], l, null) : X(i[0]), null);
    },
    i(i) {
      t || (p(s, i), (t = !0));
    },
    o(i) {
      _(s, i), (t = !1);
    },
    d(i) {
      i && C(e), s && s.d(i);
    },
  };
}
function ya(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class wa extends B {
  constructor(e) {
    super(), j(this, e, ya, ka, U, {});
  }
}
const va = {
    heading: fo,
    paragraph: mo,
    text: bo,
    image: wo,
    link: Co,
    em: So,
    strong: zo,
    codespan: Io,
    del: Oo,
    table: Fo,
    tablehead: jo,
    tablebody: Ho,
    tablerow: Vo,
    tablecell: Yo,
    list: ia,
    orderedlistitem: null,
    unorderedlistitem: null,
    listitem: oa,
    hr: ua,
    html: ha,
    blockquote: ma,
    code: ba,
    br: wa,
  },
  $a = {
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
function Ca(r) {
  let e, t;
  return (
    (e = new Be({ props: { tokens: r[0], renderers: r[1] } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const i = {};
        s & 1 && (i.tokens = n[0]), s & 2 && (i.renderers = n[1]), e.$set(i);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function Ra(r, e, t) {
  let n,
    s,
    i,
    l,
    { source: o = [] } = e,
    { renderers: a = {} } = e,
    { options: u = {} } = e,
    { isInline: c = !1 } = e;
  const d = gi();
  let h, f, m;
  return (
    ws(si, { slug: (b) => (s ? s.slug(b) : ""), getOptions: () => i }),
    xe(() => {
      t(7, (m = !0));
    }),
    (r.$$set = (b) => {
      "source" in b && t(2, (o = b.source)),
        "renderers" in b && t(3, (a = b.renderers)),
        "options" in b && t(4, (u = b.options)),
        "isInline" in b && t(5, (c = b.isInline));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 4 && t(8, (n = Array.isArray(o))),
        r.$$.dirty & 4 && (s = o ? new en() : void 0),
        r.$$.dirty & 16 && t(9, (i = { ...$a, ...u })),
        r.$$.dirty & 869 &&
          (n
            ? t(0, (h = o))
            : (t(6, (f = new Ee(i))),
              t(0, (h = c ? f.inlineTokens(o) : f.lex(o))),
              d("parsed", { tokens: h }))),
        r.$$.dirty & 8 && t(1, (l = { ...va, ...a })),
        r.$$.dirty & 385 && m && !n && d("parsed", { tokens: h });
    }),
    [h, l, o, a, u, c, f, m, n, i]
  );
}
class La extends B {
  constructor(e) {
    super(),
      j(this, e, Ra, Ca, U, {
        source: 2,
        renderers: 3,
        options: 4,
        isInline: 5,
      });
  }
}
function Sa(r) {
  let e;
  const t = r[3].default,
    n = W(t, r, r[2], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!e || i & 4) &&
        J(n, t, s, s[2], e ? x(t, s[2], i, null) : X(s[2]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      _(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Pa(r) {
  let e = "...",
    t,
    n,
    s,
    i;
  const l = r[3].default,
    o = W(l, r, r[2], null);
  return {
    c() {
      (t = ne(e)),
        (n = Q()),
        (s = v("div")),
        o && o.c(),
        g(s, "class", "opacity-0 h-0");
    },
    m(a, u) {
      R(a, t, u), R(a, n, u), R(a, s, u), o && o.m(s, null), (i = !0);
    },
    p(a, u) {
      o &&
        o.p &&
        (!i || u & 4) &&
        J(o, l, a, a[2], i ? x(l, a[2], u, null) : X(a[2]), null);
    },
    i(a) {
      i || (p(o, a), (i = !0));
    },
    o(a) {
      _(o, a), (i = !1);
    },
    d(a) {
      a && (C(t), C(n), C(s)), o && o.d(a);
    },
  };
}
function Ta(r) {
  let e, t, n, s, i, l, o, a, u, c;
  const d = [Pa, Sa],
    h = [];
  function f(m, b) {
    return m[0] ? 0 : 1;
  }
  return (
    (n = f(r)),
    (s = h[n] = d[n](r)),
    (o = new Ws({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = v("button")),
          (t = v("div")),
          s.c(),
          (i = Q()),
          (l = v("div")),
          I(o.$$.fragment),
          g(t, "class", "px-2 font-medium relative"),
          g(
            l,
            "class",
            "h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple"
          ),
          g(
            e,
            "class",
            "flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple/95 text-castleton-green -mr-1 whitespace-nowrap"
          ),
          (e.disabled = r[1]),
          he(e, "opacity-90", r[0]),
          he(e, "opacity-70", r[1]);
      },
      m(m, b) {
        R(m, e, b),
          y(e, t),
          h[n].m(t, null),
          y(e, i),
          y(e, l),
          E(o, l, null),
          (a = !0),
          u || ((c = Le(e, "click", r[4])), (u = !0));
      },
      p(m, [b]) {
        let k = n;
        (n = f(m)),
          n === k
            ? h[n].p(m, b)
            : (G(),
              _(h[k], 1, 1, () => {
                h[k] = null;
              }),
              V(),
              (s = h[n]),
              s ? s.p(m, b) : ((s = h[n] = d[n](m)), s.c()),
              p(s, 1),
              s.m(t, null)),
          (!a || b & 2) && (e.disabled = m[1]),
          (!a || b & 1) && he(e, "opacity-90", m[0]),
          (!a || b & 2) && he(e, "opacity-70", m[1]);
      },
      i(m) {
        a || (p(s), p(o.$$.fragment, m), (a = !0));
      },
      o(m) {
        _(s), _(o.$$.fragment, m), (a = !1);
      },
      d(m) {
        m && C(e), h[n].d(), A(o), (u = !1), c();
      },
    }
  );
}
function Oa(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { isLoading: i = !1 } = e,
    { disabled: l = !1 } = e;
  function o(a) {
    _i.call(this, r, a);
  }
  return (
    (r.$$set = (a) => {
      "isLoading" in a && t(0, (i = a.isLoading)),
        "disabled" in a && t(1, (l = a.disabled)),
        "$$scope" in a && t(2, (s = a.$$scope));
    }),
    [i, l, s, n, o]
  );
}
class ii extends B {
  constructor(e) {
    super(), j(this, e, Oa, Ta, U, { isLoading: 0, disabled: 1 });
  }
}
function Ea(r) {
  let e, t, n;
  return (
    (t = new ii({
      props: {
        disabled: r[8].isLoading,
        isLoading: r[8].isLoading,
        $$slots: { default: [Ia] },
        $$scope: { ctx: r },
      },
    })),
    t.$on("click", r[18]),
    {
      c() {
        (e = v("div")), I(t.$$.fragment), g(e, "class", "py-1");
      },
      m(s, i) {
        R(s, e, i), E(t, e, null), (n = !0);
      },
      p(s, i) {
        const l = {};
        i & 256 && (l.disabled = s[8].isLoading),
          i & 256 && (l.isLoading = s[8].isLoading),
          i & 2097158 && (l.$$scope = { dirty: i, ctx: s }),
          t.$set(l);
      },
      i(s) {
        n || (p(t.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(t.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(e), A(t);
      },
    }
  );
}
function Aa(r) {
  let e, t, n, s, i, l;
  return (
    (i = new xs({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = v("div")),
          (t = v("span")),
          (n = ne(r[1])),
          (s = Q()),
          I(i.$$.fragment),
          g(e, "class", "flex items-center gap-2 justify-end py-2");
      },
      m(o, a) {
        R(o, e, a), y(e, t), y(t, n), y(e, s), E(i, e, null), (l = !0);
      },
      p(o, a) {
        (!l || a & 2) && pe(n, o[1]);
      },
      i(o) {
        l || (p(i.$$.fragment, o), (l = !0));
      },
      o(o) {
        _(i.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), A(i);
      },
    }
  );
}
function Ia(r) {
  let e, t, n;
  return {
    c() {
      (e = ne(r[1])), (t = ne(" ⇒ ")), (n = ne(r[2]));
    },
    m(s, i) {
      R(s, e, i), R(s, t, i), R(s, n, i);
    },
    p(s, i) {
      i & 2 && pe(e, s[1]), i & 4 && pe(n, s[2]);
    },
    d(s) {
      s && (C(e), C(t), C(n));
    },
  };
}
function Bn(r) {
  var P;
  let e, t, n, s, i, l, o, a, u, c, d, h;
  t = new La({ props: { source: r[5].description ?? "" } });
  let f = r[5].license && Zn(r),
    m = r[5].author && Hn(r),
    b = r[9].data && Kn(r),
    k = ((P = r[5].repository) == null ? void 0 : P.url) && Gn(r),
    $ = r[5].homepage && Vn(r),
    w = r[5].bugs && Wn(r);
  return {
    c() {
      (e = v("div")),
        I(t.$$.fragment),
        (n = Q()),
        (s = v("div")),
        (i = v("div")),
        f && f.c(),
        (l = Q()),
        m && m.c(),
        (o = Q()),
        b && b.c(),
        (a = Q()),
        (u = v("div")),
        k && k.c(),
        (c = Q()),
        $ && $.c(),
        (d = Q()),
        w && w.c(),
        g(
          e,
          "class",
          "text-granny-smith-apple/90 max-w-md p-4 py-2 font-medium"
        ),
        g(i, "class", "grid gap-2"),
        g(u, "class", "flex gap-2 items-center text-lg"),
        g(
          s,
          "class",
          "px-2 pt-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60"
        );
    },
    m(S, T) {
      R(S, e, T),
        E(t, e, null),
        R(S, n, T),
        R(S, s, T),
        y(s, i),
        f && f.m(i, null),
        y(i, l),
        m && m.m(i, null),
        y(i, o),
        b && b.m(i, null),
        y(s, a),
        y(s, u),
        k && k.m(u, null),
        y(u, c),
        $ && $.m(u, null),
        y(u, d),
        w && w.m(u, null),
        (h = !0);
    },
    p(S, T) {
      var L;
      const q = {};
      T & 32 && (q.source = S[5].description ?? ""),
        t.$set(q),
        S[5].license
          ? f
            ? (f.p(S, T), T & 32 && p(f, 1))
            : ((f = Zn(S)), f.c(), p(f, 1), f.m(i, l))
          : f &&
            (G(),
            _(f, 1, 1, () => {
              f = null;
            }),
            V()),
        S[5].author
          ? m
            ? m.p(S, T)
            : ((m = Hn(S)), m.c(), m.m(i, o))
          : m && (m.d(1), (m = null)),
        S[9].data
          ? b
            ? b.p(S, T)
            : ((b = Kn(S)), b.c(), b.m(i, null))
          : b && (b.d(1), (b = null)),
        (L = S[5].repository) != null && L.url
          ? k
            ? (k.p(S, T), T & 32 && p(k, 1))
            : ((k = Gn(S)), k.c(), p(k, 1), k.m(u, c))
          : k &&
            (G(),
            _(k, 1, 1, () => {
              k = null;
            }),
            V()),
        S[5].homepage
          ? $
            ? ($.p(S, T), T & 32 && p($, 1))
            : (($ = Vn(S)), $.c(), p($, 1), $.m(u, d))
          : $ &&
            (G(),
            _($, 1, 1, () => {
              $ = null;
            }),
            V()),
        S[5].bugs
          ? w
            ? (w.p(S, T), T & 32 && p(w, 1))
            : ((w = Wn(S)), w.c(), p(w, 1), w.m(u, null))
          : w &&
            (G(),
            _(w, 1, 1, () => {
              w = null;
            }),
            V());
    },
    i(S) {
      h || (p(t.$$.fragment, S), p(f), p(k), p($), p(w), (h = !0));
    },
    o(S) {
      _(t.$$.fragment, S), _(f), _(k), _($), _(w), (h = !1);
    },
    d(S) {
      S && (C(e), C(n), C(s)),
        A(t),
        f && f.d(),
        m && m.d(),
        b && b.d(),
        k && k.d(),
        $ && $.d(),
        w && w.d();
    },
  };
}
function Zn(r) {
  let e,
    t,
    n,
    s,
    i = (r[5].license ?? "") + "",
    l,
    o;
  return (
    (t = new al({ props: { class: "h-4 w-4 -translate-y-px" } })),
    {
      c() {
        (e = v("div")),
          I(t.$$.fragment),
          (n = Q()),
          (s = v("span")),
          (l = ne(i)),
          g(e, "class", "flex gap-1 items-center");
      },
      m(a, u) {
        R(a, e, u), E(t, e, null), y(e, n), y(e, s), y(s, l), (o = !0);
      },
      p(a, u) {
        (!o || u & 32) && i !== (i = (a[5].license ?? "") + "") && pe(l, i);
      },
      i(a) {
        o || (p(t.$$.fragment, a), (o = !0));
      },
      o(a) {
        _(t.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && C(e), A(t);
      },
    }
  );
}
function Hn(r) {
  let e,
    t,
    n,
    s,
    i = r[5].author.name + "",
    l;
  return {
    c() {
      (e = v("div")),
        (t = v("span")),
        (t.textContent = "Authored by"),
        (n = Q()),
        (s = v("span")),
        (l = ne(i)),
        g(s, "class", "font-semibold"),
        g(e, "class", "text-granny-smith-apple flex items-center gap-2");
    },
    m(o, a) {
      R(o, e, a), y(e, t), y(e, n), y(e, s), y(s, l);
    },
    p(o, a) {
      a & 32 && i !== (i = o[5].author.name + "") && pe(l, i);
    },
    d(o) {
      o && C(e);
    },
  };
}
function Kn(r) {
  let e,
    t,
    n,
    s = (r[9].data.gzip / 1024).toFixed(1) + "",
    i,
    l,
    o,
    a,
    u = (r[9].data.size / 1024).toFixed(1) + "",
    c,
    d,
    h;
  return {
    c() {
      (e = v("div")),
        (t = ne(`Bundle size
              `)),
        (n = v("span")),
        (i = ne(s)),
        (l = ne("kb")),
        (o = ne(`
              (gzipped) |
              `)),
        (a = v("span")),
        (c = ne(u)),
        (d = ne("kb")),
        (h = ne(" (uncompressed)")),
        g(n, "class", "font-semibold"),
        g(a, "class", "font-semibold");
    },
    m(f, m) {
      R(f, e, m),
        y(e, t),
        y(e, n),
        y(n, i),
        y(n, l),
        y(e, o),
        y(e, a),
        y(a, c),
        y(a, d),
        y(e, h);
    },
    p(f, m) {
      m & 512 &&
        s !== (s = (f[9].data.gzip / 1024).toFixed(1) + "") &&
        pe(i, s),
        m & 512 &&
          u !== (u = (f[9].data.size / 1024).toFixed(1) + "") &&
          pe(c, u);
    },
    d(f) {
      f && C(e);
    },
  };
}
function Gn(r) {
  let e, t, n, s;
  return (
    (t = new jr({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = v("a")),
          I(t.$$.fragment),
          g(e, "href", (n = r[5].repository.url.replace(/^git\+/, ""))),
          g(e, "target", "_blank"),
          g(e, "class", "hover:underline"),
          g(e, "rel", "noopener noreferrer"),
          g(e, "title", "Github");
      },
      m(i, l) {
        R(i, e, l), E(t, e, null), (s = !0);
      },
      p(i, l) {
        (!s ||
          (l & 32 && n !== (n = i[5].repository.url.replace(/^git\+/, "")))) &&
          g(e, "href", n);
      },
      i(i) {
        s || (p(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && C(e), A(t);
      },
    }
  );
}
function Vn(r) {
  let e, t, n, s;
  return (
    (t = new Gr({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = v("a")),
          I(t.$$.fragment),
          g(e, "href", (n = r[5].homepage)),
          g(e, "target", "_blank"),
          g(e, "class", "hover:underline"),
          g(e, "rel", "noopener noreferrer"),
          g(e, "title", "Homepage");
      },
      m(i, l) {
        R(i, e, l), E(t, e, null), (s = !0);
      },
      p(i, l) {
        (!s || (l & 32 && n !== (n = i[5].homepage))) && g(e, "href", n);
      },
      i(i) {
        s || (p(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && C(e), A(t);
      },
    }
  );
}
function Wn(r) {
  let e, t, n, s;
  return (
    (t = new Ir({ props: { class: "h-5 w-5" } })),
    {
      c() {
        (e = v("a")),
          I(t.$$.fragment),
          g(e, "href", (n = r[5].bugs.url)),
          g(e, "target", "_blank"),
          g(e, "class", "hover:underline"),
          g(e, "rel", "noopener noreferrer"),
          g(e, "title", "Bugs");
      },
      m(i, l) {
        R(i, e, l), E(t, e, null), (s = !0);
      },
      p(i, l) {
        (!s || (l & 32 && n !== (n = i[5].bugs.url))) && g(e, "href", n);
      },
      i(i) {
        s || (p(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && C(e), A(t);
      },
    }
  );
}
function qa(r) {
  let e,
    t,
    n,
    s,
    i,
    l,
    o,
    a,
    u = _n(xn, r[0]) + "",
    c,
    d,
    h,
    f,
    m,
    b,
    k,
    $,
    w,
    P,
    S,
    T;
  o = new sl({ props: { class: "h-6 w-6" } });
  const q = [Aa, Ea],
    L = [];
  function z(K, se) {
    return K[4] ? 0 : 1;
  }
  (m = z(r)), (b = L[m] = q[m](r));
  let D = r[6] && r[5] && Bn(r);
  return {
    c() {
      (e = v("li")),
        (t = v("div")),
        (n = v("div")),
        (s = v("div")),
        (i = v("a")),
        (l = v("div")),
        I(o.$$.fragment),
        (a = Q()),
        (c = ne(u)),
        (h = Q()),
        (f = v("div")),
        b.c(),
        (k = Q()),
        D && D.c(),
        he(l, "hidden", !r[6]),
        g(i, "href", (d = `https://npmjs.com/package/${r[0]}`)),
        g(i, "target", "_blank"),
        g(
          i,
          "class",
          "hover:underline font-medium whitespace-nowrap flex items-center gap-2 text-lg"
        ),
        g(i, "rel", "noopener noreferrer"),
        he(i, "pt-1", r[6]),
        g(f, "class", "grid place-items-end gap-2 items-center"),
        g(n, "class", "flex justify-between p-4 py-2"),
        g(
          t,
          "class",
          "transition-[transform,background] duration-300 ease-in-out svelte-8luwom"
        ),
        he(t, "expanded", r[6]),
        g(
          e,
          "class",
          ($ =
            ln("animate-fadeIn transition-opacity ".concat(r[15].class)) +
            " svelte-8luwom")
        ),
        g(
          e,
          "style",
          (w = `animation-delay: ${(r[3] + 1) * r[14]}s; opacity: ${
            r[7] ? 0.4 : 1
          }!important;`)
        );
    },
    m(K, se) {
      R(K, e, se),
        y(e, t),
        y(t, n),
        y(n, s),
        y(s, i),
        y(i, l),
        E(o, l, null),
        y(i, a),
        y(i, c),
        y(n, h),
        y(n, f),
        L[m].m(f, null),
        y(t, k),
        D && D.m(t, null),
        (P = !0),
        S || ((T = [Le(e, "click", r[12]), Le(e, "keydown", r[12])]), (S = !0));
    },
    p(K, [se]) {
      (!P || se & 64) && he(l, "hidden", !K[6]),
        (!P || se & 1) && u !== (u = _n(xn, K[0]) + "") && pe(c, u),
        (!P || (se & 1 && d !== (d = `https://npmjs.com/package/${K[0]}`))) &&
          g(i, "href", d),
        (!P || se & 64) && he(i, "pt-1", K[6]);
      let Y = m;
      (m = z(K)),
        m === Y
          ? L[m].p(K, se)
          : (G(),
            _(L[Y], 1, 1, () => {
              L[Y] = null;
            }),
            V(),
            (b = L[m]),
            b ? b.p(K, se) : ((b = L[m] = q[m](K)), b.c()),
            p(b, 1),
            b.m(f, null)),
        K[6] && K[5]
          ? D
            ? (D.p(K, se), se & 96 && p(D, 1))
            : ((D = Bn(K)), D.c(), p(D, 1), D.m(t, null))
          : D &&
            (G(),
            _(D, 1, 1, () => {
              D = null;
            }),
            V()),
        (!P || se & 64) && he(t, "expanded", K[6]),
        (!P ||
          (se & 32768 &&
            $ !==
              ($ =
                ln("animate-fadeIn transition-opacity ".concat(K[15].class)) +
                " svelte-8luwom"))) &&
          g(e, "class", $),
        (!P ||
          (se & 136 &&
            w !==
              (w = `animation-delay: ${(K[3] + 1) * K[14]}s; opacity: ${
                K[7] ? 0.4 : 1
              }!important;`))) &&
          g(e, "style", w);
    },
    i(K) {
      P || (p(o.$$.fragment, K), p(b), p(D), (P = !0));
    },
    o(K) {
      _(o.$$.fragment, K), _(b), _(D), (P = !1);
    },
    d(K) {
      K && C(e), A(o), L[m].d(), D && D.d(), (S = !1), Ae(T);
    },
  };
}
const xn = 36;
function Ma(r, e, t) {
  let n,
    s,
    i,
    l,
    { name: o = "" } = e,
    { version: a = "" } = e,
    { latest: u = "" } = e,
    { index: c = 0 } = e,
    { isLatest: d = !1 } = e,
    { meta: h } = e,
    { expandedRowIndex: f = -1 } = e,
    { selectedPackagePath: m = "" } = e;
  const b = Ot(),
    k = Hs();
  zt(r, k, (L) => t(8, (i = L)));
  async function $(L) {
    try {
      const z = await i.mutateAsync({ packages: L, path: m });
      b.setQueryData(ot.package(m), Ks(z));
    } catch (z) {
      console.log("Failed to upgrade packages:", { originalError: z });
    }
  }
  function w() {
    f === c ? t(16, (f = -1)) : t(16, (f = c));
  }
  function P(L) {
    L.key === "Escape" && t(16, (f = -1));
  }
  const S = pr(o);
  zt(r, S, (L) => t(9, (l = L))),
    xe(() => {
      window.addEventListener("keydown", P);
    }),
    Gt(() => {
      window.removeEventListener("keydown", P);
    });
  const T = 1 / 30,
    q = (L) => {
      L.stopPropagation(), $([{ name: o, version: a, latest: u, meta: h }]);
    };
  return (
    (r.$$set = (L) => {
      t(15, (e = H(H({}, e), ae(L)))),
        "name" in L && t(0, (o = L.name)),
        "version" in L && t(1, (a = L.version)),
        "latest" in L && t(2, (u = L.latest)),
        "index" in L && t(3, (c = L.index)),
        "isLatest" in L && t(4, (d = L.isLatest)),
        "meta" in L && t(5, (h = L.meta)),
        "expandedRowIndex" in L && t(16, (f = L.expandedRowIndex)),
        "selectedPackagePath" in L && t(17, (m = L.selectedPackagePath));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 65544 && t(6, (n = f === c)),
        r.$$.dirty & 65600 && t(7, (s = !n && f !== -1));
    }),
    (e = ae(e)),
    [o, a, u, c, d, h, n, s, i, l, k, $, w, S, T, e, f, m, q]
  );
}
class za extends B {
  constructor(e) {
    super(),
      j(this, e, Ma, qa, U, {
        name: 0,
        version: 1,
        latest: 2,
        index: 3,
        isLatest: 4,
        meta: 5,
        expandedRowIndex: 16,
        selectedPackagePath: 17,
      });
  }
}
function Jn(r, e, t) {
  const n = r.slice();
  return (n[5] = e[t]), n;
}
function Xn(r) {
  let e,
    t,
    n = r[5] + 1 + "",
    s,
    i,
    l,
    o;
  return {
    c() {
      (e = v("li")),
        (t = v("button")),
        (s = ne(n)),
        g(t, "data-page", (i = r[5])),
        g(t, "class", "btn-arrow text-xl svelte-16bdnnj"),
        he(t, "bg-castleton-green", r[5] === r[0]);
    },
    m(a, u) {
      R(a, e, u), y(e, t), y(t, s), l || ((o = Le(t, "click", r[2])), (l = !0));
    },
    p(a, u) {
      u & 2 && n !== (n = a[5] + 1 + "") && pe(s, n),
        u & 2 && i !== (i = a[5]) && g(t, "data-page", i),
        u & 3 && he(t, "bg-castleton-green", a[5] === a[0]);
    },
    d(a) {
      a && C(e), (l = !1), o();
    },
  };
}
function Da(r) {
  let e,
    t,
    n,
    s,
    i,
    l,
    o,
    a,
    u,
    c,
    d,
    h,
    f,
    m = le(Ht(0, r[1])),
    b = [];
  for (let k = 0; k < m.length; k += 1) b[k] = Xn(Jn(r, m, k));
  return {
    c() {
      (e = v("ul")), (t = v("li")), (n = v("button")), (s = ne("◄")), (l = Q());
      for (let k = 0; k < b.length; k += 1) b[k].c();
      (o = Q()),
        (a = v("li")),
        (u = v("button")),
        (c = ne("►")),
        g(n, "class", "btn-arrow svelte-16bdnnj"),
        (n.disabled = i = r[0] === 0),
        g(u, "class", "btn-arrow svelte-16bdnnj"),
        (u.disabled = d = r[0] === r[1] - 1),
        g(
          e,
          "class",
          "inline-flex mx-auto font-medium p-4 py-2 items-center gap-2"
        );
    },
    m(k, $) {
      R(k, e, $), y(e, t), y(t, n), y(n, s), y(e, l);
      for (let w = 0; w < b.length; w += 1) b[w] && b[w].m(e, null);
      y(e, o),
        y(e, a),
        y(a, u),
        y(u, c),
        h || ((f = [Le(n, "click", r[4]), Le(u, "click", r[3])]), (h = !0));
    },
    p(k, [$]) {
      if (($ & 1 && i !== (i = k[0] === 0) && (n.disabled = i), $ & 7)) {
        m = le(Ht(0, k[1]));
        let w;
        for (w = 0; w < m.length; w += 1) {
          const P = Jn(k, m, w);
          b[w] ? b[w].p(P, $) : ((b[w] = Xn(P)), b[w].c(), b[w].m(e, o));
        }
        for (; w < b.length; w += 1) b[w].d(1);
        b.length = m.length;
      }
      $ & 3 && d !== (d = k[0] === k[1] - 1) && (u.disabled = d);
    },
    i: ee,
    o: ee,
    d(k) {
      k && C(e), Se(b, k), (h = !1), Ae(f);
    },
  };
}
function Na(r, e, t) {
  let { pages: n = 0 } = e,
    { pageIndex: s = 0 } = e;
  function i(a) {
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
    (r.$$set = (a) => {
      "pages" in a && t(1, (n = a.pages)),
        "pageIndex" in a && t(0, (s = a.pageIndex));
    }),
    [s, n, i, l, o]
  );
}
class Fa extends B {
  constructor(e) {
    super(), j(this, e, Na, Da, U, { pages: 1, pageIndex: 0 });
  }
}
function Yn(r, e, t) {
  const n = r.slice();
  return (
    (n[32] = e[t].name),
    (n[33] = e[t].version),
    (n[34] = e[t].latest),
    (n[35] = e[t].isLatest),
    (n[36] = e[t].meta),
    (n[38] = t),
    n
  );
}
function es(r, e, t) {
  const n = r.slice();
  return (n[39] = e[t].keys), (n[40] = e[t].label), n;
}
function ts(r, e, t) {
  const n = r.slice();
  return (n[43] = e[t].symbol), (n[44] = e[t].rotation), n;
}
function Qa(r) {
  let e, t;
  return (
    (e = new Xr({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function Ua(r) {
  let e, t;
  return (
    (e = new dl({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function ns(r) {
  let e, t, n, s, i, l;
  return (
    (t = new Ws({
      props: { class: "h-3 w-3", style: `transform: rotate(${r[44]}deg);` },
    })),
    {
      c() {
        (e = v("kbd")),
          I(t.$$.fragment),
          (n = Q()),
          (s = v("span")),
          (s.textContent = `${r[43]}`),
          (i = Q()),
          g(s, "class", "sr-only"),
          g(
            e,
            "class",
            "text-sm font-semibold flex p-1.5 bg-castleton-green/40 rounded"
          );
      },
      m(o, a) {
        R(o, e, a), E(t, e, null), y(e, n), y(e, s), y(e, i), (l = !0);
      },
      p: ee,
      i(o) {
        l || (p(t.$$.fragment, o), (l = !0));
      },
      o(o) {
        _(t.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), A(t);
      },
    }
  );
}
function ss(r) {
  let e,
    t,
    n,
    s,
    i,
    l,
    o = le(r[39]),
    a = [];
  for (let c = 0; c < o.length; c += 1) a[c] = ns(ts(r, o, c));
  const u = (c) =>
    _(a[c], 1, 1, () => {
      a[c] = null;
    });
  return {
    c() {
      (e = v("li")), (t = v("div"));
      for (let c = 0; c < a.length; c += 1) a[c].c();
      (n = Q()),
        (s = v("span")),
        (s.textContent = `${r[40]}`),
        (i = Q()),
        g(t, "class", "flex gap-2"),
        g(s, "class", "ml-2 text-sm"),
        g(e, "class", "flex items-center");
    },
    m(c, d) {
      R(c, e, d), y(e, t);
      for (let h = 0; h < a.length; h += 1) a[h] && a[h].m(t, null);
      y(e, n), y(e, s), y(e, i), (l = !0);
    },
    p(c, d) {
      if (d[0] & 131072) {
        o = le(c[39]);
        let h;
        for (h = 0; h < o.length; h += 1) {
          const f = ts(c, o, h);
          a[h]
            ? (a[h].p(f, d), p(a[h], 1))
            : ((a[h] = ns(f)), a[h].c(), p(a[h], 1), a[h].m(t, null));
        }
        for (G(), h = o.length; h < a.length; h += 1) u(h);
        V();
      }
    },
    i(c) {
      if (!l) {
        for (let d = 0; d < o.length; d += 1) p(a[d]);
        l = !0;
      }
    },
    o(c) {
      a = a.filter(Boolean);
      for (let d = 0; d < a.length; d += 1) _(a[d]);
      l = !1;
    },
    d(c) {
      c && C(e), Se(a, c);
    },
  };
}
function is(r) {
  let e;
  return {
    c() {
      (e = v("kbd")),
        (e.innerHTML = '<span class="text-xs font-mono">/</span>'),
        g(
          e,
          "class",
          "kbd absolute right-2 top-2 transition-opacity opacity-50 group-hover:opacity-100"
        );
    },
    m(t, n) {
      R(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function rs(r) {
  let e, t;
  return (
    (e = new xs({ props: { class: "h-4 w-4 ml-1" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function ls(r) {
  let e, t;
  return (
    (e = new ii({
      props: {
        disabled: r[14].isLoading,
        isLoading: r[14].isLoading,
        $$slots: { default: [ja] },
        $$scope: { ctx: r },
      },
    })),
    e.$on("click", r[27]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s[0] & 16384 && (i.disabled = n[14].isLoading),
          s[0] & 16384 && (i.isLoading = n[14].isLoading),
          s[1] & 65536 && (i.$$scope = { dirty: s, ctx: n }),
          e.$set(i);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function ja(r) {
  let e;
  return {
    c() {
      e = ne("Upgrade all");
    },
    m(t, n) {
      R(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function os(r) {
  let e, t, n, s;
  function i(a) {
    r[28](a);
  }
  function l(a) {
    r[29](a);
  }
  let o = {
    index: r[38],
    name: r[32],
    version: r[33],
    latest: r[34],
    isLatest: r[35],
    meta: r[36],
    class: r[38] !== r[12].length - 1 && r[38] !== r[6] ? "border-b" : "",
  };
  return (
    r[1] !== void 0 && (o.selectedPackagePath = r[1]),
    r[6] !== void 0 && (o.expandedRowIndex = r[6]),
    (e = new za({ props: o })),
    Me.push(() => it(e, "selectedPackagePath", i)),
    Me.push(() => it(e, "expandedRowIndex", l)),
    {
      c() {
        I(e.$$.fragment);
      },
      m(a, u) {
        E(e, a, u), (s = !0);
      },
      p(a, u) {
        const c = {};
        u[0] & 4096 && (c.name = a[32]),
          u[0] & 4096 && (c.version = a[33]),
          u[0] & 4096 && (c.latest = a[34]),
          u[0] & 4096 && (c.isLatest = a[35]),
          u[0] & 4096 && (c.meta = a[36]),
          u[0] & 4160 &&
            (c.class =
              a[38] !== a[12].length - 1 && a[38] !== a[6] ? "border-b" : ""),
          !t &&
            u[0] & 2 &&
            ((t = !0), (c.selectedPackagePath = a[1]), st(() => (t = !1))),
          !n &&
            u[0] & 64 &&
            ((n = !0), (c.expandedRowIndex = a[6]), st(() => (n = !1))),
          e.$set(c);
      },
      i(a) {
        s || (p(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        _(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        A(e, a);
      },
    }
  );
}
function as(r) {
  let e, t, n, s, i;
  function l(a) {
    r[30](a);
  }
  let o = { pages: r[13] };
  return (
    r[3] !== void 0 && (o.pageIndex = r[3]),
    (n = new Fa({ props: o })),
    Me.push(() => it(n, "pageIndex", l)),
    {
      c() {
        (e = v("footer")),
          (t = v("div")),
          I(n.$$.fragment),
          g(t, "class", "bg-slate-900/90 rounded-full"),
          g(e, "class", "grid place-items-center");
      },
      m(a, u) {
        R(a, e, u), y(e, t), E(n, t, null), (i = !0);
      },
      p(a, u) {
        const c = {};
        u[0] & 8192 && (c.pages = a[13]),
          !s &&
            u[0] & 8 &&
            ((s = !0), (c.pageIndex = a[3]), st(() => (s = !1))),
          n.$set(c);
      },
      i(a) {
        i || (p(n.$$.fragment, a), (i = !0));
      },
      o(a) {
        _(n.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && C(e), A(n);
      },
    }
  );
}
function Ba(r) {
  let e,
    t,
    n,
    s,
    i,
    l,
    o,
    a,
    u,
    c,
    d,
    h,
    f,
    m,
    b,
    k,
    $,
    w = r[0] === "dependencies" ? "Dependencies" : "Dev Dependencies",
    P,
    S,
    T,
    q = r[5].length + "",
    L,
    z,
    D = r[2].length + "",
    K,
    se,
    Y,
    _e,
    ft,
    He,
    De,
    ht,
    $e,
    Z,
    Te;
  const tn = [Ua, Qa],
    Ne = [];
  function nn(M, te) {
    return M[7] ? 0 : 1;
  }
  (s = nn(r)), (i = Ne[s] = tn[s](r));
  let Fe = le(r[17]),
    ce = [];
  for (let M = 0; M < Fe.length; M += 1) ce[M] = ss(es(r, Fe, M));
  const li = (M) =>
    _(ce[M], 1, 1, () => {
      ce[M] = null;
    });
  let Ce = (!r[8] || !r[4]) && is(),
    be = r[10] && rs(),
    me = !r[10] && ls(r),
    Qe = le(r[12]),
    fe = [];
  for (let M = 0; M < Qe.length; M += 1) fe[M] = os(Yn(r, Qe, M));
  const oi = (M) =>
    _(fe[M], 1, 1, () => {
      fe[M] = null;
    });
  let ge = r[13] > 1 && as(r);
  return {
    c() {
      (e = v("div")),
        (t = v("aside")),
        (n = v("button")),
        i.c(),
        (l = Q()),
        (o = v("ul"));
      for (let M = 0; M < ce.length; M += 1) ce[M].c();
      (u = Q()),
        (c = v("section")),
        (d = v("div")),
        (h = v("input")),
        (f = Q()),
        Ce && Ce.c(),
        (m = Q()),
        (b = v("header")),
        (k = v("div")),
        ($ = v("div")),
        (P = ne(w)),
        (S = Q()),
        (T = v("span")),
        (L = ne(q)),
        (z = ne("/")),
        (K = ne(D)),
        (se = Q()),
        be && be.c(),
        (Y = Q()),
        (_e = v("div")),
        me && me.c(),
        (ft = Q()),
        (He = v("main")),
        (De = v("ul"));
      for (let M = 0; M < fe.length; M += 1) fe[M].c();
      (ht = Q()),
        ge && ge.c(),
        g(n, "class", "help-trigger svelte-1lgocty"),
        he(n, "hidden", r[7]),
        g(o, "class", "bg-slate-900/60 p-4 rounded-xl grid gap-2 opacity-10"),
        g(o, "aria-hidden", (a = !r[7])),
        he(o, "opacity-100", r[7]),
        g(
          t,
          "class",
          "absolute right-0 top-8 transition-all duration-300 ease-in"
        ),
        he(t, "translate-x-64", r[7]),
        g(h, "type", "search"),
        g(h, "class", "search-input svelte-1lgocty"),
        g(h, "placeholder", "search package by name or version"),
        g(d, "class", "relative group"),
        g(
          T,
          "class",
          "text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
        ),
        g(k, "class", "flex items-center justify-between w-full"),
        g(
          b,
          "class",
          "p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2"
        ),
        g(De, "class", "grid"),
        g(He, "class", "min-h-[32rem] mx-2"),
        g(
          c,
          "class",
          "bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2"
        ),
        g(e, "class", "relative");
    },
    m(M, te) {
      R(M, e, te), y(e, t), y(t, n), Ne[s].m(n, null), y(t, l), y(t, o);
      for (let Re = 0; Re < ce.length; Re += 1) ce[Re] && ce[Re].m(o, null);
      y(e, u),
        y(e, c),
        y(c, d),
        y(d, h),
        r[23](h),
        tt(h, r[4]),
        y(d, f),
        Ce && Ce.m(d, null),
        y(c, m),
        y(c, b),
        y(b, k),
        y(k, $),
        y($, P),
        y($, S),
        y($, T),
        y(T, L),
        y(T, z),
        y(T, K),
        y(k, se),
        be && be.m(k, null),
        y(b, Y),
        y(b, _e),
        me && me.m(_e, null),
        y(c, ft),
        y(c, He),
        y(He, De);
      for (let Re = 0; Re < fe.length; Re += 1) fe[Re] && fe[Re].m(De, null);
      y(c, ht),
        ge && ge.m(c, null),
        ($e = !0),
        Z ||
          ((Te = [
            Le(n, "click", r[21]),
            fi(pl.call(null, t)),
            Le(t, "outsideclick", r[22]),
            Le(h, "input", r[24]),
            Le(h, "focus", r[25]),
            Le(h, "blur", r[26]),
          ]),
          (Z = !0));
    },
    p(M, te) {
      let Re = s;
      if (
        ((s = nn(M)),
        s !== Re &&
          (G(),
          _(Ne[Re], 1, 1, () => {
            Ne[Re] = null;
          }),
          V(),
          (i = Ne[s]),
          i || ((i = Ne[s] = tn[s](M)), i.c()),
          p(i, 1),
          i.m(n, null)),
        (!$e || te[0] & 128) && he(n, "hidden", M[7]),
        te[0] & 131072)
      ) {
        Fe = le(M[17]);
        let ie;
        for (ie = 0; ie < Fe.length; ie += 1) {
          const Xe = es(M, Fe, ie);
          ce[ie]
            ? (ce[ie].p(Xe, te), p(ce[ie], 1))
            : ((ce[ie] = ss(Xe)), ce[ie].c(), p(ce[ie], 1), ce[ie].m(o, null));
        }
        for (G(), ie = Fe.length; ie < ce.length; ie += 1) li(ie);
        V();
      }
      if (
        ((!$e || (te[0] & 128 && a !== (a = !M[7]))) && g(o, "aria-hidden", a),
        (!$e || te[0] & 128) && he(o, "opacity-100", M[7]),
        (!$e || te[0] & 128) && he(t, "translate-x-64", M[7]),
        te[0] & 16 && h.value !== M[4] && tt(h, M[4]),
        !M[8] || !M[4]
          ? Ce || ((Ce = is()), Ce.c(), Ce.m(d, null))
          : Ce && (Ce.d(1), (Ce = null)),
        (!$e || te[0] & 1) &&
          w !==
            (w =
              M[0] === "dependencies" ? "Dependencies" : "Dev Dependencies") &&
          pe(P, w),
        (!$e || te[0] & 32) && q !== (q = M[5].length + "") && pe(L, q),
        (!$e || te[0] & 4) && D !== (D = M[2].length + "") && pe(K, D),
        M[10]
          ? be
            ? te[0] & 1024 && p(be, 1)
            : ((be = rs()), be.c(), p(be, 1), be.m(k, null))
          : be &&
            (G(),
            _(be, 1, 1, () => {
              be = null;
            }),
            V()),
        M[10]
          ? me &&
            (G(),
            _(me, 1, 1, () => {
              me = null;
            }),
            V())
          : me
          ? (me.p(M, te), te[0] & 1024 && p(me, 1))
          : ((me = ls(M)), me.c(), p(me, 1), me.m(_e, null)),
        te[0] & 4162)
      ) {
        Qe = le(M[12]);
        let ie;
        for (ie = 0; ie < Qe.length; ie += 1) {
          const Xe = Yn(M, Qe, ie);
          fe[ie]
            ? (fe[ie].p(Xe, te), p(fe[ie], 1))
            : ((fe[ie] = os(Xe)), fe[ie].c(), p(fe[ie], 1), fe[ie].m(De, null));
        }
        for (G(), ie = Qe.length; ie < fe.length; ie += 1) oi(ie);
        V();
      }
      M[13] > 1
        ? ge
          ? (ge.p(M, te), te[0] & 8192 && p(ge, 1))
          : ((ge = as(M)), ge.c(), p(ge, 1), ge.m(c, null))
        : ge &&
          (G(),
          _(ge, 1, 1, () => {
            ge = null;
          }),
          V());
    },
    i(M) {
      if (!$e) {
        p(i);
        for (let te = 0; te < Fe.length; te += 1) p(ce[te]);
        p(be), p(me);
        for (let te = 0; te < Qe.length; te += 1) p(fe[te]);
        p(ge), ($e = !0);
      }
    },
    o(M) {
      _(i), (ce = ce.filter(Boolean));
      for (let te = 0; te < ce.length; te += 1) _(ce[te]);
      _(be), _(me), (fe = fe.filter(Boolean));
      for (let te = 0; te < fe.length; te += 1) _(fe[te]);
      _(ge), ($e = !1);
    },
    d(M) {
      M && C(e),
        Ne[s].d(),
        Se(ce, M),
        r[23](null),
        Ce && Ce.d(),
        be && be.d(),
        me && me.d(),
        Se(fe, M),
        ge && ge.d(),
        (Z = !1),
        Ae(Te);
    },
  };
}
function Za(r, e, t) {
  let n,
    s,
    i,
    l,
    o,
    a,
    u,
    c,
    d,
    { selectedTab: h = "dependencies" } = e,
    { selectedPackagePath: f = "" } = e,
    { entries: m = [] } = e,
    b = 0,
    k = -1,
    $ = "",
    w = !1,
    P = !1,
    S = null;
  const T = Hs();
  zt(r, T, (Z) => t(14, (d = Z)));
  const q = Ot();
  async function L(Z) {
    try {
      const Te = await d.mutateAsync({ packages: Z, path: f });
      q.setQueryData(ot.package(f), Ks(Te)),
        await q.refetchQueries(ot.package(f));
    } catch (Te) {
      console.log("Failed to upgrade packages:", { originalError: Te });
    }
  }
  mr((Z) => {
    if (Z.shiftKey)
      switch (Z.key) {
        case "ArrowRight":
        case "ArrowLeft":
          Z.preventDefault(),
            t(
              0,
              (h = h === "dependencies" ? "devDependencies" : "dependencies")
            ),
            t(3, (b = 0)),
            t(6, (k = -1));
          break;
      }
    switch (Z.key) {
      case "ArrowUp":
        Z.preventDefault(), k > 0 ? t(6, k--, k) : t(6, (k = o.length - 1));
        break;
      case "ArrowDown":
        Z.preventDefault(), k < o.length - 1 ? t(6, k++, k) : t(6, (k = 0));
        break;
      case "ArrowLeft":
        b > 0 && (Z.preventDefault(), t(3, b--, b), t(6, (k = -1)));
        break;
      case "ArrowRight":
        b < s - 1 && (Z.preventDefault(), t(3, b++, b), t(6, (k = -1)));
        break;
      case "Escape":
        Z.preventDefault(), w && t(7, (w = !1));
        break;
      case "h":
        P || (Z.preventDefault(), t(7, (w = !w)));
        break;
      case "/":
        !P && S && (Z.preventDefault(), S.focus());
        break;
    }
  });
  const z = [
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
    D = () => {
      t(7, (w = !w));
    },
    K = () => t(7, (w = !1));
  function se(Z) {
    Me[Z ? "unshift" : "push"](() => {
      (S = Z), t(9, S);
    });
  }
  function Y() {
    ($ = this.value), t(4, $);
  }
  const _e = () => {
      t(8, (P = !0));
    },
    ft = () => {
      t(8, (P = !1));
    },
    He = () => L(u);
  function De(Z) {
    (f = Z), t(1, f);
  }
  function ht(Z) {
    (k = Z), t(6, k), t(0, h), t(4, $);
  }
  function $e(Z) {
    (b = Z), t(3, b), t(0, h), t(4, $);
  }
  return (
    (r.$$set = (Z) => {
      "selectedTab" in Z && t(0, (h = Z.selectedTab)),
        "selectedPackagePath" in Z && t(1, (f = Z.selectedPackagePath)),
        "entries" in Z && t(2, (m = Z.entries));
    }),
    (r.$$.update = () => {
      r.$$.dirty[0] & 20 &&
        t(
          20,
          (n = m.filter(
            ({ name: Z, version: Te }) =>
              Z.toLowerCase().includes($.toLowerCase()) ||
              Te.toLowerCase().includes($.toLowerCase())
          ))
        ),
        r.$$.dirty[0] & 1048576 && t(13, (s = Math.ceil(n.length / At))),
        r.$$.dirty[0] & 1048576 &&
          t(
            18,
            (i = n
              .map((Z) => ({ ...Z, isLatest: Ds(Z.version, Z.latest) }))
              .sort((Z, Te) =>
                Z.isLatest && Te.isLatest
                  ? 0
                  : Z.isLatest && !Te.isLatest
                  ? 1
                  : -1
              ))
          ),
        r.$$.dirty[0] & 1 && h && (t(3, (b = 0)), t(6, (k = -1))),
        r.$$.dirty[0] & 16 && $ && (t(3, (b = 0)), t(6, (k = -1))),
        r.$$.dirty[0] & 8 && t(19, (l = b * At)),
        r.$$.dirty[0] & 786432 && t(12, (o = i.slice(l, l + At))),
        r.$$.dirty[0] & 262144 &&
          t(
            5,
            ([a, u] = Vs(Gs("isLatest"), i)),
            a,
            (t(11, u), t(18, i), t(20, n), t(2, m), t(4, $))
          ),
        r.$$.dirty[0] & 36 && t(10, (c = a.length === m.length));
    }),
    [
      h,
      f,
      m,
      b,
      $,
      a,
      k,
      w,
      P,
      S,
      c,
      u,
      o,
      s,
      d,
      T,
      L,
      z,
      i,
      l,
      n,
      D,
      K,
      se,
      Y,
      _e,
      ft,
      He,
      De,
      ht,
      $e,
    ]
  );
}
class Ha extends B {
  constructor(e) {
    super(),
      j(
        this,
        e,
        Za,
        Ba,
        U,
        { selectedTab: 0, selectedPackagePath: 1, entries: 2 },
        null,
        [-1, -1]
      );
  }
}
const Ka = "@greenbot/cli",
  Ga = "0.26.3",
  Va = ["greenbot", "cli", "package updater"],
  Wa = "An interactive package updater for npm based applications",
  xa = "https://github.com/alanrsoares/greenbot",
  Ja = "MIT",
  Xa = ["dist/", "bin/", "scripts/"],
  Ya = "./bin/greenbot.cjs",
  eu = "module",
  tu = {
    dev: "vite",
    build: "vite build",
    serve: "vite preview",
    check: "svelte-check --tsconfig ./tsconfig.json",
    preversion: "yarn build",
    release: "npm publish && git push && git push --tags",
    prepare: "husky install",
    postinstall: "node scripts/postinstall.cjs",
  },
  nu = {
    "@sveltejs/vite-plugin-svelte": "^2.4.2",
    "@tsconfig/strictest": "^2.0.1",
    "@types/cors": "^2.8.13",
    autoprefixer: "^10.4.14",
    chalk: "^4.1.2",
    cssnano: "^6.0.1",
    husky: "^8.0.3",
    postcss: "^8.4.24",
    "postcss-load-config": "^4.0.1",
    prettier: "^2.8.8",
    "pretty-quick": "^3.1.3",
    "strip-ansi": "^6.0.1",
    "svelte-check": "^3.4.4",
    "svelte-preprocess": "^5.0.4",
    tailwindcss: "^3.3.2",
    tslib: "^2.5.3",
    typescript: "^5.1.3",
    vite: "^4.3.9",
    "vite-tsconfig-paths": "^4.2.0",
  },
  su = {
    "@tailwindcss/typography": "^0.5.9",
    "@tanstack/svelte-query": "^4.29.15",
    "animate.css": "^4.1.1",
    "body-parser": "^1.20.2",
    cors: "^2.8.5",
    daisyui: "^3.1.5",
    express: "^4.18.2",
    "js-yaml": "^4.1.0",
    ky: "^0.33.3",
    "lucide-svelte": "^0.244.0",
    open: "^8.4.2",
    "package-json": "^7.0.0",
    rambda: "^7.5.0",
    "replace-in-file": "^7.0.1",
    svelte: "^4.0.0",
    "svelte-markdown": "^0.2.3",
    "typewriter-effect": "^2.20.1",
  },
  Mt = {
    name: Ka,
    version: Ga,
    keywords: Va,
    description: Wa,
    homepage: xa,
    license: Ja,
    files: Xa,
    bin: Ya,
    type: eu,
    scripts: tu,
    devDependencies: nu,
    dependencies: su,
  };
const iu = (r) => ({}),
  us = (r) => ({}),
  ru = (r) => ({}),
  cs = (r) => ({});
function lu(r) {
  let e, t, n, s, i, l, o, a, u, c, d, h, f, m, b, k, $, w, P, S, T;
  const q = r[1].logo,
    L = W(q, r, r[0], cs),
    z = r[1].version,
    D = W(z, r, r[0], us),
    K = r[1].default,
    se = W(K, r, r[0], null);
  return {
    c() {
      (e = v("div")),
        (t = v("header")),
        (n = v("nav")),
        (s = v("h1")),
        (i = v("div")),
        L && L.c(),
        (l = Q()),
        (o = v("div")),
        (o.textContent = "_greenbot"),
        (a = Q()),
        (u = v("span")),
        (u.textContent = `v${Mt.version}`),
        (c = Q()),
        D && D.c(),
        (d = Q()),
        (h = v("main")),
        se && se.c(),
        (f = Q()),
        (m = v("footer")),
        (b = v("div")),
        (k = v("span")),
        (k.textContent = `${Mt.name}@v${Mt.version}`),
        ($ = Q()),
        (w = v("br")),
        (P = Q()),
        (S = v("a")),
        (S.textContent = "@alanrsoares"),
        g(i, "class", "w-12"),
        g(
          u,
          "class",
          "absolute right-2 bottom-2 text-xs font-semibold opacity-[calc(2/3)] text-white group-hover:text-inherit transition-colors"
        ),
        g(
          s,
          "class",
          "flex items-center gap-2 whitespace-nowrap p-2 relative group"
        ),
        g(
          n,
          "class",
          "md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"
        ),
        g(t, "class", "border-b border-granny-smith-apple/50 bg-slate-900/60"),
        g(h, "class", "layout-main svelte-4vwhv6"),
        g(k, "class", "text-sm font-semibold"),
        g(S, "href", "https://github.com/alanrsoares"),
        g(S, "class", "inline-flex gap-1 items-center text-sm opacity-75"),
        g(b, "class", "max-w-xl m-auto text-center"),
        g(m, "class", "p-12"),
        g(e, "class", "layout svelte-4vwhv6");
    },
    m(Y, _e) {
      R(Y, e, _e),
        y(e, t),
        y(t, n),
        y(n, s),
        y(s, i),
        L && L.m(i, null),
        y(s, l),
        y(s, o),
        y(s, a),
        y(s, u),
        y(n, c),
        D && D.m(n, null),
        y(e, d),
        y(e, h),
        se && se.m(h, null),
        y(e, f),
        y(e, m),
        y(m, b),
        y(b, k),
        y(b, $),
        y(b, w),
        y(b, P),
        y(b, S),
        (T = !0);
    },
    p(Y, [_e]) {
      L &&
        L.p &&
        (!T || _e & 1) &&
        J(L, q, Y, Y[0], T ? x(q, Y[0], _e, ru) : X(Y[0]), cs),
        D &&
          D.p &&
          (!T || _e & 1) &&
          J(D, z, Y, Y[0], T ? x(z, Y[0], _e, iu) : X(Y[0]), us),
        se &&
          se.p &&
          (!T || _e & 1) &&
          J(se, K, Y, Y[0], T ? x(K, Y[0], _e, null) : X(Y[0]), null);
    },
    i(Y) {
      T || (p(L, Y), p(D, Y), p(se, Y), (T = !0));
    },
    o(Y) {
      _(L, Y), _(D, Y), _(se, Y), (T = !1);
    },
    d(Y) {
      Y && C(e), L && L.d(Y), D && D.d(Y), se && se.d(Y);
    },
  };
}
function ou(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class au extends B {
  constructor(e) {
    super(), j(this, e, ou, lu, U, {});
  }
}
function uu(r) {
  let e, t, n, s, i, l;
  return {
    c() {
      (e = ve("svg")),
        (t = ve("title")),
        (n = ne(r[0])),
        (s = ve("path")),
        g(s, "d", (i = r[1][r[0]])),
        g(s, "fill", "currentColor"),
        g(e, "role", "img"),
        g(e, "viewBox", "0 0 24 24"),
        g(e, "xmlns", "http://www.w3.org/2000/svg"),
        g(e, "class", (l = r[2].class));
    },
    m(o, a) {
      R(o, e, a), y(e, t), y(t, n), y(e, s);
    },
    p(o, [a]) {
      a & 1 && pe(n, o[0]),
        a & 1 && i !== (i = o[1][o[0]]) && g(s, "d", i),
        a & 4 && l !== (l = o[2].class) && g(e, "class", l);
    },
    i: ee,
    o: ee,
    d(o) {
      o && C(e);
    },
  };
}
function cu(r, e, t) {
  let { kind: n } = e;
  const s = {
    yarn: "M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z",
    npm: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
    pnpm: "M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z",
  };
  return (
    (r.$$set = (i) => {
      t(2, (e = H(H({}, e), ae(i)))), "kind" in i && t(0, (n = i.kind));
    }),
    (e = ae(e)),
    [n, s, e]
  );
}
class fu extends B {
  constructor(e) {
    super(), j(this, e, cu, uu, U, { kind: 0 });
  }
}
function hu(r) {
  let e, t, n, s, i, l, o, a, u, c;
  return (
    (n = new fu({ props: { kind: r[2], class: "h-4 w-4" } })),
    {
      c() {
        (e = v("a")),
          (t = v("div")),
          I(n.$$.fragment),
          (s = Q()),
          (i = v("div")),
          (l = ne(r[0])),
          (o = ne(" @ ")),
          (a = ne(r[1])),
          g(t, "class", "rounded-full -translate-x-2 bg-black/25 p-2.5"),
          g(i, "class", "font-mono font-medium -translate-x-2"),
          g(e, "target", "_blank"),
          g(e, "href", (u = `https://www.npmjs.com/package/${r[0]}`)),
          g(e, "rel", "noopener noreferrer"),
          g(e, "class", "svelte-2pn84z");
      },
      m(d, h) {
        R(d, e, h),
          y(e, t),
          E(n, t, null),
          y(e, s),
          y(e, i),
          y(i, l),
          y(i, o),
          y(i, a),
          (c = !0);
      },
      p(d, [h]) {
        const f = {};
        h & 4 && (f.kind = d[2]),
          n.$set(f),
          (!c || h & 1) && pe(l, d[0]),
          (!c || h & 2) && pe(a, d[1]),
          (!c ||
            (h & 1 && u !== (u = `https://www.npmjs.com/package/${d[0]}`))) &&
            g(e, "href", u);
      },
      i(d) {
        c || (p(n.$$.fragment, d), (c = !0));
      },
      o(d) {
        _(n.$$.fragment, d), (c = !1);
      },
      d(d) {
        d && C(e), A(n);
      },
    }
  );
}
function du(r, e, t) {
  let { name: n = "" } = e,
    { version: s = "" } = e,
    { manager: i = "npm" } = e;
  return (
    (r.$$set = (l) => {
      "name" in l && t(0, (n = l.name)),
        "version" in l && t(1, (s = l.version)),
        "manager" in l && t(2, (i = l.manager));
    }),
    [n, s, i]
  );
}
class pu extends B {
  constructor(e) {
    super(), j(this, e, du, hu, U, { name: 0, version: 1, manager: 2 });
  }
}
function fs(r, e, t) {
  const n = r.slice();
  return (n[3] = e[t]), n;
}
function hs(r) {
  let e,
    t = r[3].label + "",
    n,
    s,
    i,
    l,
    o;
  return {
    c() {
      (e = v("button")),
        (n = ne(t)),
        (s = Q()),
        g(e, "data-value", (i = r[3].value)),
        g(e, "class", "svelte-u0zq3l"),
        he(e, "bg-castleton-green", r[0] === r[3].value);
    },
    m(a, u) {
      R(a, e, u),
        y(e, n),
        y(e, s),
        l ||
          ((o = Le(e, "click", function () {
            at(r[2].bind(null, r[3])) &&
              r[2].bind(null, r[3]).apply(this, arguments);
          })),
          (l = !0));
    },
    p(a, u) {
      (r = a),
        u & 2 && t !== (t = r[3].label + "") && pe(n, t),
        u & 2 && i !== (i = r[3].value) && g(e, "data-value", i),
        u & 3 && he(e, "bg-castleton-green", r[0] === r[3].value);
    },
    d(a) {
      a && C(e), (l = !1), o();
    },
  };
}
function mu(r) {
  let e,
    t = le(r[1]),
    n = [];
  for (let s = 0; s < t.length; s += 1) n[s] = hs(fs(r, t, s));
  return {
    c() {
      e = v("div");
      for (let s = 0; s < n.length; s += 1) n[s].c();
      g(e, "class", "container svelte-u0zq3l");
    },
    m(s, i) {
      R(s, e, i);
      for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
    },
    p(s, [i]) {
      if (i & 7) {
        t = le(s[1]);
        let l;
        for (l = 0; l < t.length; l += 1) {
          const o = fs(s, t, l);
          n[l] ? n[l].p(o, i) : ((n[l] = hs(o)), n[l].c(), n[l].m(e, null));
        }
        for (; l < n.length; l += 1) n[l].d(1);
        n.length = t.length;
      }
    },
    i: ee,
    o: ee,
    d(s) {
      s && C(e), Se(n, s);
    },
  };
}
function gu(r, e, t) {
  let { selectedTab: n = "" } = e,
    { tabs: s = [] } = e,
    { onChange: i } = e;
  return (
    (r.$$set = (l) => {
      "selectedTab" in l && t(0, (n = l.selectedTab)),
        "tabs" in l && t(1, (s = l.tabs)),
        "onChange" in l && t(2, (i = l.onChange));
    }),
    [n, s, i]
  );
}
class _u extends B {
  constructor(e) {
    super(), j(this, e, gu, mu, U, { selectedTab: 0, tabs: 1, onChange: 2 });
  }
}
function bu(r) {
  let e, t, n;
  return {
    c() {
      (e = ve("svg")),
        (t = ve("path")),
        (n = ve("path")),
        g(t, "opacity", "0.2"),
        g(t, "fill-rule", "evenodd"),
        g(t, "clip-rule", "evenodd"),
        g(
          t,
          "d",
          "M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        ),
        g(t, "fill", "currentColor"),
        g(
          n,
          "d",
          "M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        ),
        g(n, "fill", "currentColor"),
        g(e, "stroke", "currentColor"),
        g(e, "fill", "none"),
        g(e, "stroke-width", "0"),
        g(e, "viewBox", "0 0 24 24"),
        g(e, "height", "1em"),
        g(e, "width", "1em"),
        g(e, "xmlns", "http://www.w3.org/2000/svg"),
        he(e, "animate-spin", r[0]);
    },
    m(s, i) {
      R(s, e, i), y(e, t), y(e, n);
    },
    p(s, [i]) {
      i & 1 && he(e, "animate-spin", s[0]);
    },
    i: ee,
    o: ee,
    d(s) {
      s && C(e);
    },
  };
}
function ku(r, e, t) {
  let { animated: n = !1 } = e;
  return (
    (r.$$set = (s) => {
      "animated" in s && t(0, (n = s.animated));
    }),
    [n]
  );
}
class yu extends B {
  constructor(e) {
    super(), j(this, e, ku, bu, U, { animated: 0 });
  }
}
function ds(r, e, t) {
  const n = r.slice();
  return (n[13] = e[t]), n;
}
function ps(r) {
  let e, t, n, s, i, l;
  return (
    (n = new yu({ props: { animated: !0 } })),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          I(n.$$.fragment),
          (s = Q()),
          (i = v("span")),
          (i.textContent = "Loading dependencies"),
          g(t, "class", "h-4 w-4"),
          g(
            e,
            "class",
            "border-2 border-slate-900 bg-slate-900/60 rounded-3xl flex justify-center items-center overflow-hidden p-8 gap-2"
          );
      },
      m(o, a) {
        R(o, e, a), y(e, t), E(n, t, null), y(e, s), y(e, i), (l = !0);
      },
      i(o) {
        l || (p(n.$$.fragment, o), (l = !0));
      },
      o(o) {
        _(n.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), A(n);
      },
    }
  );
}
function ms(r) {
  var h;
  let e,
    t,
    n,
    s,
    i,
    l,
    o,
    a = ((h = r[2].data.workspaces) == null ? void 0 : h.length) && gs(r);
  t = new _u({
    props: {
      onChange: r[6],
      selectedTab: r[0],
      tabs: [
        { value: "dependencies", label: "Dependencies" },
        { value: "devDependencies", label: "Dev Dependencies" },
      ],
    },
  });
  function u(f) {
    r[9](f);
  }
  function c(f) {
    r[10](f);
  }
  let d = { entries: r[3] };
  return (
    r[0] !== void 0 && (d.selectedTab = r[0]),
    r[1] !== void 0 && (d.selectedPackagePath = r[1]),
    (s = new Ha({ props: d })),
    Me.push(() => it(s, "selectedTab", u)),
    Me.push(() => it(s, "selectedPackagePath", c)),
    {
      c() {
        a && a.c(), (e = Q()), I(t.$$.fragment), (n = Q()), I(s.$$.fragment);
      },
      m(f, m) {
        a && a.m(f, m),
          R(f, e, m),
          E(t, f, m),
          R(f, n, m),
          E(s, f, m),
          (o = !0);
      },
      p(f, m) {
        var $;
        ($ = f[2].data.workspaces) != null && $.length
          ? a
            ? a.p(f, m)
            : ((a = gs(f)), a.c(), a.m(e.parentNode, e))
          : a && (a.d(1), (a = null));
        const b = {};
        m & 1 && (b.selectedTab = f[0]), t.$set(b);
        const k = {};
        m & 8 && (k.entries = f[3]),
          !i && m & 1 && ((i = !0), (k.selectedTab = f[0]), st(() => (i = !1))),
          !l &&
            m & 2 &&
            ((l = !0), (k.selectedPackagePath = f[1]), st(() => (l = !1))),
          s.$set(k);
      },
      i(f) {
        o || (p(t.$$.fragment, f), p(s.$$.fragment, f), (o = !0));
      },
      o(f) {
        _(t.$$.fragment, f), _(s.$$.fragment, f), (o = !1);
      },
      d(f) {
        f && (C(e), C(n)), a && a.d(f), A(t, f), A(s, f);
      },
    }
  );
}
function gs(r) {
  let e,
    t,
    n = "workspace",
    s,
    i,
    l,
    o,
    a,
    u,
    c = le(r[2].data.workspaces),
    d = [];
  for (let h = 0; h < c.length; h += 1) d[h] = _s(ds(r, c, h));
  return {
    c() {
      (e = v("div")),
        (t = v("label")),
        (s = ne(n)),
        (i = Q()),
        (l = v("select")),
        (o = v("option")),
        (o.textContent = "root");
      for (let h = 0; h < d.length; h += 1) d[h].c();
      (o.__value = ""),
        tt(o, o.__value),
        g(l, "class", "select select-sm"),
        r[1] === void 0 && vt(() => r[8].call(l)),
        g(e, "class", "flex justify-end");
    },
    m(h, f) {
      R(h, e, f), y(e, t), y(t, s), y(t, i), y(t, l), y(l, o);
      for (let m = 0; m < d.length; m += 1) d[m] && d[m].m(l, null);
      on(l, r[1], !0), a || ((u = Le(l, "change", r[8])), (a = !0));
    },
    p(h, f) {
      if (f & 4) {
        c = le(h[2].data.workspaces);
        let m;
        for (m = 0; m < c.length; m += 1) {
          const b = ds(h, c, m);
          d[m] ? d[m].p(b, f) : ((d[m] = _s(b)), d[m].c(), d[m].m(l, null));
        }
        for (; m < d.length; m += 1) d[m].d(1);
        d.length = c.length;
      }
      f & 6 && on(l, h[1]);
    },
    d(h) {
      h && C(e), Se(d, h), (a = !1), u();
    },
  };
}
function _s(r) {
  let e,
    t = r[13].name + "",
    n,
    s;
  return {
    c() {
      (e = v("option")),
        (n = ne(t)),
        (e.__value = s = r[13].path),
        tt(e, e.__value);
    },
    m(i, l) {
      R(i, e, l), y(e, n);
    },
    p(i, l) {
      l & 4 && t !== (t = i[13].name + "") && pe(n, t),
        l & 4 && s !== (s = i[13].path) && ((e.__value = s), tt(e, e.__value));
    },
    d(i) {
      i && C(e);
    },
  };
}
function wu(r) {
  let e,
    t,
    n,
    s = r[2].isLoading && ps(),
    i = r[2].data && ms(r);
  return {
    c() {
      (e = v("div")),
        s && s.c(),
        (t = Q()),
        i && i.c(),
        g(e, "class", "w-full grid gap-4");
    },
    m(l, o) {
      R(l, e, o), s && s.m(e, null), y(e, t), i && i.m(e, null), (n = !0);
    },
    p(l, o) {
      l[2].isLoading
        ? s
          ? o & 4 && p(s, 1)
          : ((s = ps()), s.c(), p(s, 1), s.m(e, t))
        : s &&
          (G(),
          _(s, 1, 1, () => {
            s = null;
          }),
          V()),
        l[2].data
          ? i
            ? (i.p(l, o), o & 4 && p(i, 1))
            : ((i = ms(l)), i.c(), p(i, 1), i.m(e, null))
          : i &&
            (G(),
            _(i, 1, 1, () => {
              i = null;
            }),
            V());
    },
    i(l) {
      n || (p(s), p(i), (n = !0));
    },
    o(l) {
      _(s), _(i), (n = !1);
    },
    d(l) {
      l && C(e), s && s.d(), i && i.d();
    },
  };
}
function vu(r) {
  let e, t;
  return (
    (e = new br({ props: { mood: r[4], slot: "logo" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s & 16 && (i.mood = n[4]), e.$set(i);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function bs(r) {
  let e, t;
  return (
    (e = new pu({
      props: {
        name: r[2].data.name,
        version: r[2].data.version,
        manager: r[2].data.packageManager,
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s & 4 && (i.name = n[2].data.name),
          s & 4 && (i.version = n[2].data.version),
          s & 4 && (i.manager = n[2].data.packageManager),
          e.$set(i);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function $u(r) {
  let e,
    t,
    n = r[2].data && bs(r);
  return {
    c() {
      (e = v("div")), n && n.c(), g(e, "slot", "version");
    },
    m(s, i) {
      R(s, e, i), n && n.m(e, null), (t = !0);
    },
    p(s, i) {
      s[2].data
        ? n
          ? (n.p(s, i), i & 4 && p(n, 1))
          : ((n = bs(s)), n.c(), p(n, 1), n.m(e, null))
        : n &&
          (G(),
          _(n, 1, 1, () => {
            n = null;
          }),
          V());
    },
    i(s) {
      t || (p(n), (t = !0));
    },
    o(s) {
      _(n), (t = !1);
    },
    d(s) {
      s && C(e), n && n.d();
    },
  };
}
function Cu(r) {
  let e, t;
  return (
    (e = new au({
      props: {
        $$slots: { version: [$u], logo: [vu], default: [wu] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const i = {};
        s & 65567 && (i.$$scope = { dirty: s, ctx: n }), e.$set(i);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function Ru([r, e], t, n) {
  return {
    name: r,
    version: e,
    latest: r in t ? t[r] : e,
    meta: r in n ? n[r] : void 0,
  };
}
function Lu(r, e, t) {
  let n,
    s,
    i,
    l,
    o,
    a = ee,
    u = () => (a(), (a = Kt(n, (w) => t(2, (o = w)))), n);
  r.$$.on_destroy.push(() => a());
  let c = "dependencies",
    d = "";
  xe(() => {
    const P = new URLSearchParams(window.location.search).get("path");
    P !== null && t(1, (d = P));
  });
  function h({ value: w }) {
    t(0, (c = w));
  }
  function f(w, P) {
    return w.filter(([S, T]) => P[S] !== T);
  }
  function m(w) {
    if (!w || w.isLoading) return "asleep";
    if (w.error) return "dead";
    if (w.data) {
      const { dependencies: P, devDependencies: S, resolutions: T } = w.data,
        q = Object.entries({ ...P, ...S });
      return f(q, w.data.resolutions).filter(([z, D]) => !Ds(D, T[z])).length
        ? "angry"
        : "happy";
    }
    return "awake";
  }
  function b() {
    (d = di(this)), t(1, d);
  }
  function k(w) {
    (c = w), t(0, c);
  }
  function $(w) {
    (d = w), t(1, d);
  }
  return (
    (r.$$.update = () => {
      if (r.$$.dirty & 2 && d !== null) {
        const w = new URLSearchParams(window.location.search);
        d ? w.set("path", d) : w.delete("path"),
          window.history.replaceState(
            {},
            "",
            `${window.location.pathname}?${w.toString()}`
          );
      }
      r.$$.dirty & 2 && u(t(5, (n = dr(d)))),
        r.$$.dirty & 4 && t(4, (s = m(o))),
        r.$$.dirty & 5 &&
          t(
            7,
            (i =
              o.isLoading || o.error || !o.data
                ? []
                : f(Object.entries(o.data[c] ?? {}), o.data.resolutions))
          ),
        r.$$.dirty & 132 &&
          t(
            3,
            (l = i.map((w) => {
              var P, S;
              return Ru(
                w,
                ((P = o.data) == null ? void 0 : P.resolutions) ?? {},
                ((S = o.data) == null ? void 0 : S.meta) ?? {}
              );
            }))
          );
    }),
    [c, d, o, l, s, n, h, i, b, k, $]
  );
}
class Su extends B {
  constructor(e) {
    super(), j(this, e, Lu, Cu, U, {});
  }
}
function Pu(r) {
  let e, t;
  return (
    (e = new Su({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function Tu(r) {
  let e, t;
  return (
    (e = new Wi({
      props: { client: r[0], $$slots: { default: [Pu] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(n, s) {
        E(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const i = {};
        s & 2 && (i.$$scope = { dirty: s, ctx: n }), e.$set(i);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        A(e, n);
      },
    }
  );
}
function Ou(r) {
  return [new As()];
}
class Eu extends B {
  constructor(e) {
    super(), j(this, e, Ou, Tu, U, {});
  }
}
const ri = document.getElementById("app");
if (!ri) throw new Error("Could not find target element");
new Eu({ target: ri });
