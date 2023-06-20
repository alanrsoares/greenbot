var ui = Object.defineProperty;
var ci = (r, e, t) =>
  e in r
    ? ui(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var nn = (r, e, t) => (ci(r, typeof e != "symbol" ? e + "" : e, t), t);
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
function se() {}
function K(r, e) {
  for (const t in e) r[t] = e[t];
  return r;
}
function ks(r) {
  return r();
}
function sn() {
  return Object.create(null);
}
function Pe(r) {
  r.forEach(ks);
}
function it(r) {
  return typeof r == "function";
}
function j(r, e) {
  return r != r
    ? e == e
    : r !== e || (r && typeof r == "object") || typeof r == "function";
}
let ct;
function rn(r, e) {
  return ct || (ct = document.createElement("a")), (ct.href = e), r === ct.href;
}
function fi(r) {
  return Object.keys(r).length === 0;
}
function Zt(r, ...e) {
  if (r == null) return se;
  const t = r.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function qt(r, e, t) {
  r.$$.on_destroy.push(Zt(e, t));
}
function x(r, e, t, n) {
  if (r) {
    const s = ys(r, e, t, n);
    return r[0](s);
  }
}
function ys(r, e, t, n) {
  return r[1] && n ? K(t.ctx.slice(), r[1](n(e))) : t.ctx;
}
function J(r, e, t, n) {
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
function X(r, e, t, n, s, i) {
  if (s) {
    const l = ys(e, t, n, i);
    r.p(l, s);
  }
}
function Y(r) {
  if (r.ctx.length > 32) {
    const e = [],
      t = r.ctx.length / 32;
    for (let n = 0; n < t; n++) e[n] = -1;
    return e;
  }
  return -1;
}
function oe(r) {
  const e = {};
  for (const t in r) t[0] !== "$" && (e[t] = r[t]);
  return e;
}
function _t(r, e) {
  const t = {};
  e = new Set(e);
  for (const n in r) !e.has(n) && n[0] !== "$" && (t[n] = r[n]);
  return t;
}
function ln(r) {
  return r ?? "";
}
function hi(r) {
  return r && it(r.destroy) ? r.destroy : se;
}
function k(r, e) {
  r.appendChild(e);
}
function R(r, e, t) {
  r.insertBefore(e, t || null);
}
function C(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function Ce(r, e) {
  for (let t = 0; t < r.length; t += 1) r[t] && r[t].d(e);
}
function v(r) {
  return document.createElement(r);
}
function we(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function W(r) {
  return document.createTextNode(r);
}
function U() {
  return W(" ");
}
function le() {
  return W("");
}
function $e(r, e, t, n) {
  return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
}
function g(r, e, t) {
  t == null
    ? r.removeAttribute(e)
    : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function bt(r, e) {
  for (const t in e) g(r, t, e[t]);
}
function di(r) {
  return Array.from(r.childNodes);
}
function de(r, e) {
  (e = "" + e), r.data !== e && (r.data = e);
}
function on(r, e) {
  r.value = e ?? "";
}
function an(r, e, t) {
  for (let n = 0; n < r.options.length; n += 1) {
    const s = r.options[n];
    if (s.__value === e) {
      s.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (r.selectedIndex = -1);
}
function pi(r) {
  const e = r.querySelector(":checked");
  return e && e.__value;
}
function fe(r, e, t) {
  r.classList[t ? "add" : "remove"](e);
}
function mi(r, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(r, t, n, e), s;
}
class gi {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, t, n = null) {
    this.e ||
      (this.is_svg
        ? (this.e = we(t.nodeName))
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
function ae(r, e) {
  return new r(e);
}
let Xe;
function Je(r) {
  Xe = r;
}
function rt() {
  if (!Xe) throw new Error("Function called outside component initialization");
  return Xe;
}
function Ge(r) {
  rt().$$.on_mount.push(r);
}
function Kt(r) {
  rt().$$.on_destroy.push(r);
}
function _i() {
  const r = rt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const s = r.$$.callbacks[e];
    if (s) {
      const i = mi(e, t, { cancelable: n });
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
  return rt().$$.context.set(r, e), e;
}
function vs(r) {
  return rt().$$.context.get(r);
}
function bi(r, e) {
  const t = r.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Ke = [],
  Ee = [];
let He = [];
const Mt = [],
  ki = Promise.resolve();
let zt = !1;
function yi() {
  zt || ((zt = !0), ki.then($s));
}
function kt(r) {
  He.push(r);
}
function Ye(r) {
  Mt.push(r);
}
const Tt = new Set();
let Be = 0;
function $s() {
  if (Be !== 0) return;
  const r = Xe;
  do {
    try {
      for (; Be < Ke.length; ) {
        const e = Ke[Be];
        Be++, Je(e), wi(e.$$);
      }
    } catch (e) {
      throw ((Ke.length = 0), (Be = 0), e);
    }
    for (Je(null), Ke.length = 0, Be = 0; Ee.length; ) Ee.pop()();
    for (let e = 0; e < He.length; e += 1) {
      const t = He[e];
      Tt.has(t) || (Tt.add(t), t());
    }
    He.length = 0;
  } while (Ke.length);
  for (; Mt.length; ) Mt.pop()();
  (zt = !1), Tt.clear(), Je(r);
}
function wi(r) {
  if (r.fragment !== null) {
    r.update(), Pe(r.before_update);
    const e = r.dirty;
    (r.dirty = [-1]),
      r.fragment && r.fragment.p(r.ctx, e),
      r.after_update.forEach(kt);
  }
}
function vi(r) {
  const e = [],
    t = [];
  He.forEach((n) => (r.indexOf(n) === -1 ? e.push(n) : t.push(n))),
    t.forEach((n) => n()),
    (He = e);
}
const dt = new Set();
let De;
function G() {
  De = { r: 0, c: [], p: De };
}
function V() {
  De.r || Pe(De.c), (De = De.p);
}
function m(r, e) {
  r && r.i && (dt.delete(r), r.i(e));
}
function _(r, e, t, n) {
  if (r && r.o) {
    if (dt.has(r)) return;
    dt.add(r),
      De.c.push(() => {
        dt.delete(r), n && (t && r.d(1), n());
      }),
      r.o(e);
  } else n && n();
}
function _e(r, e) {
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
function ye(r) {
  return typeof r == "object" && r !== null ? r : {};
}
function et(r, e, t) {
  const n = r.$$.props[e];
  n !== void 0 && ((r.$$.bound[n] = t), t(r.$$.ctx[n]));
}
function A(r) {
  r && r.c();
}
function O(r, e, t, n) {
  const { fragment: s, after_update: i } = r.$$;
  s && s.m(e, t),
    n ||
      kt(() => {
        const l = r.$$.on_mount.map(ks).filter(it);
        r.$$.on_destroy ? r.$$.on_destroy.push(...l) : Pe(l),
          (r.$$.on_mount = []);
      }),
    i.forEach(kt);
}
function E(r, e) {
  const t = r.$$;
  t.fragment !== null &&
    (vi(t.after_update),
    Pe(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function $i(r, e) {
  r.$$.dirty[0] === -1 && (Ke.push(r), yi(), r.$$.dirty.fill(0)),
    (r.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function B(r, e, t, n, s, i, l, o = [-1]) {
  const a = Xe;
  Je(r);
  const u = (r.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: se,
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
          const p = f.length ? f[0] : h;
          return (
            u.ctx &&
              s(u.ctx[d], (u.ctx[d] = p)) &&
              (!u.skip_bound && u.bound[d] && u.bound[d](p), c && $i(r, d)),
            h
          );
        })
      : []),
    u.update(),
    (c = !0),
    Pe(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const d = di(e.target);
      u.fragment && u.fragment.l(d), d.forEach(C);
    } else u.fragment && u.fragment.c();
    e.intro && m(r.$$.fragment),
      O(r, e.target, e.anchor, e.customElement),
      $s();
  }
  Je(a);
}
class Z {
  $destroy() {
    E(this, 1), (this.$destroy = se);
  }
  $on(e, t) {
    if (!it(t)) return se;
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
      !fi(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
class Ve {
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
const tt = typeof window > "u" || "Deno" in window;
function Le() {}
function Ci(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Dt(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function Cs(r, e) {
  return Math.max(r + (e || 0) - Date.now(), 0);
}
function xe(r, e, t) {
  return lt(r)
    ? typeof e == "function"
      ? { ...t, queryKey: r, queryFn: e }
      : { ...e, queryKey: r }
    : r;
}
function Ri(r, e, t) {
  return lt(r)
    ? typeof e == "function"
      ? { ...t, mutationKey: r, mutationFn: e }
      : { ...e, mutationKey: r }
    : typeof r == "function"
    ? { ...e, mutationFn: r }
    : { ...r };
}
function Oe(r, e, t) {
  return lt(r) ? [{ ...e, queryKey: r }, t] : [r || {}, e];
}
function un(r, e) {
  const {
    type: t = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: l,
    stale: o,
  } = r;
  if (lt(l)) {
    if (n) {
      if (e.queryHash !== Ht(l, e.options)) return !1;
    } else if (!yt(e.queryKey, l)) return !1;
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
function cn(r, e) {
  const { exact: t, fetching: n, predicate: s, mutationKey: i } = r;
  if (lt(i)) {
    if (!e.options.mutationKey) return !1;
    if (t) {
      if (Ne(e.options.mutationKey) !== Ne(i)) return !1;
    } else if (!yt(e.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof n == "boolean" && (e.state.status === "loading") !== n) ||
    (s && !s(e))
  );
}
function Ht(r, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Ne)(r);
}
function Ne(r) {
  return JSON.stringify(r, (e, t) =>
    Ft(t)
      ? Object.keys(t)
          .sort()
          .reduce((n, s) => ((n[s] = t[s]), n), {})
      : t
  );
}
function yt(r, e) {
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
  const t = fn(r) && fn(e);
  if (t || (Ft(r) && Ft(e))) {
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
function Nt(r, e) {
  if ((r && !e) || (e && !r)) return !1;
  for (const t in r) if (r[t] !== e[t]) return !1;
  return !0;
}
function fn(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function Ft(r) {
  if (!hn(r)) return !1;
  const e = r.constructor;
  if (typeof e > "u") return !0;
  const t = e.prototype;
  return !(!hn(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function hn(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function lt(r) {
  return Array.isArray(r);
}
function Ss(r) {
  return new Promise((e) => {
    setTimeout(e, r);
  });
}
function dn(r) {
  Ss(0).then(r);
}
function Li() {
  if (typeof AbortController == "function") return new AbortController();
}
function Qt(r, e, t) {
  return t.isDataEqual != null && t.isDataEqual(r, e)
    ? r
    : typeof t.structuralSharing == "function"
    ? t.structuralSharing(r, e)
    : t.structuralSharing !== !1
    ? Ls(r, e)
    : e;
}
class Si extends Ve {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!tt && window.addEventListener) {
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
const wt = new Si(),
  pn = ["online", "offline"];
class Pi extends Ve {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!tt && window.addEventListener) {
          const t = () => e();
          return (
            pn.forEach((n) => {
              window.addEventListener(n, t, !1);
            }),
            () => {
              pn.forEach((n) => {
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
const vt = new Pi();
function Ti(r) {
  return Math.min(1e3 * 2 ** r, 3e4);
}
function Lt(r) {
  return (r ?? "online") === "online" ? vt.isOnline() : !0;
}
class Ps {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
}
function pt(r) {
  return r instanceof Ps;
}
function Ts(r) {
  let e = !1,
    t = 0,
    n = !1,
    s,
    i,
    l;
  const o = new Promise((y, $) => {
      (i = y), (l = $);
    }),
    a = (y) => {
      n || (f(new Ps(y)), r.abort == null || r.abort());
    },
    u = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    d = () => !wt.isFocused() || (r.networkMode !== "always" && !vt.isOnline()),
    h = (y) => {
      n ||
        ((n = !0),
        r.onSuccess == null || r.onSuccess(y),
        s == null || s(),
        i(y));
    },
    f = (y) => {
      n ||
        ((n = !0), r.onError == null || r.onError(y), s == null || s(), l(y));
    },
    p = () =>
      new Promise((y) => {
        (s = ($) => {
          const w = n || !d();
          return w && y($), w;
        }),
          r.onPause == null || r.onPause();
      }).then(() => {
        (s = void 0), n || r.onContinue == null || r.onContinue();
      }),
    b = () => {
      if (n) return;
      let y;
      try {
        y = r.fn();
      } catch ($) {
        y = Promise.reject($);
      }
      Promise.resolve(y)
        .then(h)
        .catch(($) => {
          var w, P;
          if (n) return;
          const S = (w = r.retry) != null ? w : 3,
            I = (P = r.retryDelay) != null ? P : Ti,
            q = typeof I == "function" ? I(t, $) : I,
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
                if (d()) return p();
              })
              .then(() => {
                e ? f($) : b();
              });
        });
    };
  return (
    Lt(r.networkMode) ? b() : p().then(b),
    {
      promise: o,
      cancel: a,
      continue: () => ((s == null ? void 0 : s()) ? o : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const Gt = console;
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
        : dn(() => {
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
          dn(() => {
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
const he = Oi();
class Os {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Dt(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      e ?? (tt ? 1 / 0 : 5 * 60 * 1e3)
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
      (this.logger = e.logger || Gt),
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
    const n = Qt(this.state.data, e, this.options);
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
      n ? n.then(Le).catch(Le) : Promise.resolve()
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
      const f = this.observers.find((p) => p.options.queryFn);
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
        ((pt(f) && f.silent) || this.dispatch({ type: "error", error: f }),
        !pt(f))
      ) {
        var p, b, y, $;
        (p = (b = this.cache.config).onError) == null || p.call(b, f, this),
          (y = ($ = this.cache.config).onSettled) == null ||
            y.call($, this.state.data, f, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = Ts({
        fn: c.fetchFn,
        abort: l == null ? void 0 : l.abort.bind(l),
        onSuccess: (f) => {
          var p, b, y, $;
          if (typeof f > "u") {
            h(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(f),
            (p = (b = this.cache.config).onSuccess) == null ||
              p.call(b, f, this),
            (y = ($ = this.cache.config).onSettled) == null ||
              y.call($, f, this.state.error, this),
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
            fetchStatus: Lt(this.options.networkMode) ? "fetching" : "paused",
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
          return pt(l) && l.revert && this.revertState
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
      he.batch(() => {
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
class Ii extends Ve {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(e, t, n) {
    var s;
    const i = t.queryKey,
      l = (s = t.queryHash) != null ? s : Ht(i, t);
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
    he.batch(() => {
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
      typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => un(n, s))
    );
  }
  findAll(e, t) {
    const [n] = Oe(e, t);
    return Object.keys(n).length > 0
      ? this.queries.filter((s) => un(n, s))
      : this.queries;
  }
  notify(e) {
    he.batch(() => {
      this.listeners.forEach(({ listener: t }) => {
        t(e);
      });
    });
  }
  onFocus() {
    he.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    he.batch(() => {
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
      (this.logger = e.logger || Gt),
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
            onFail: (M, N) => {
              this.dispatch({ type: "failed", failureCount: M, error: N });
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
        var d, h, f, p;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((d = (h = this.mutationCache.config).onMutate) == null
            ? void 0
            : d.call(h, this.state.variables, this));
        const M = await ((f = (p = this.options).onMutate) == null
          ? void 0
          : f.call(p, this.state.variables));
        M !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: M,
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
        var b, y, $, w, P, S, I, q;
        throw (
          (await ((b = (y = this.mutationCache.config).onError) == null
            ? void 0
            : b.call(y, L, this.state.variables, this.state.context, this)),
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
          await ((I = (q = this.options).onSettled) == null
            ? void 0
            : I.call(q, void 0, L, this.state.variables, this.state.context)),
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
            isPaused: !Lt(this.options.networkMode),
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
      he.batch(() => {
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
class Mi extends Ve {
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
    he.batch(() => {
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
      this.mutations.find((t) => cn(e, t))
    );
  }
  findAll(e) {
    return this.mutations.filter((t) => cn(e, t));
  }
  notify(e) {
    he.batch(() => {
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
          return he.batch(() =>
            t.reduce(
              (n, s) => n.then(() => s.continue().catch(Le)),
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
        let p = f,
          b = !1;
        const y = (q) => {
            Object.defineProperty(q, "signal", {
              enumerable: !0,
              get: () => {
                var L;
                if ((L = r.signal) != null && L.aborted) b = !0;
                else {
                  var M;
                  (M = r.signal) == null ||
                    M.addEventListener("abort", () => {
                      b = !0;
                    });
                }
                return r.signal;
              },
            });
          },
          $ = r.options.queryFn || (() => Promise.reject("Missing queryFn")),
          w = (q, L, M, N) => (
            (p = N ? [L, ...p] : [...p, L]), N ? [M, ...q] : [...q, M]
          ),
          P = (q, L, M, N) => {
            if (b) return Promise.reject("Cancelled");
            if (typeof M > "u" && !L && q.length) return Promise.resolve(q);
            const H = {
              queryKey: r.queryKey,
              pageParam: M,
              meta: r.options.meta,
            };
            y(H);
            const te = $(H);
            return Promise.resolve(te).then((ke) => w(q, M, ke, N));
          };
        let S;
        if (!h.length) S = P([]);
        else if (c) {
          const q = typeof u < "u",
            L = q ? u : mn(r.options, h);
          S = P(h, q, L);
        } else if (d) {
          const q = typeof u < "u",
            L = q ? u : Di(r.options, h);
          S = P(h, q, L, !0);
        } else {
          p = [];
          const q = typeof r.options.getNextPageParam > "u";
          S = (o && h[0] ? o(h[0], 0, h) : !0)
            ? P([], q, f[0])
            : Promise.resolve(w([], f[0], h[0]));
          for (let M = 1; M < h.length; M++)
            S = S.then((N) => {
              if (o && h[M] ? o(h[M], M, h) : !0) {
                const te = q ? f[M] : mn(r.options, N);
                return P(N, q, te);
              }
              return Promise.resolve(w(N, f[M], h[M]));
            });
        }
        return S.then((q) => ({ pages: q, pageParams: p }));
      };
    },
  };
}
function mn(r, e) {
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
      (this.logger = e.logger || Gt),
      (this.defaultOptions = e.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = wt.subscribe(() => {
          wt.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = vt.subscribe(() => {
          vt.isOnline() &&
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
    const o = xe(e),
      a = this.defaultQueryOptions(o);
    return this.queryCache.build(this, a).setData(l, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return he.batch(() =>
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
    he.batch(() => {
      s.findAll(n).forEach((i) => {
        s.remove(i);
      });
    });
  }
  resetQueries(e, t, n) {
    const [s, i] = Oe(e, t, n),
      l = this.queryCache,
      o = { type: "active", ...s };
    return he.batch(
      () => (
        l.findAll(s).forEach((a) => {
          a.reset();
        }),
        this.refetchQueries(o, i)
      )
    );
  }
  cancelQueries(e, t, n) {
    const [s, i = {}] = Oe(e, t, n);
    typeof i.revert > "u" && (i.revert = !0);
    const l = he.batch(() =>
      this.queryCache.findAll(s).map((o) => o.cancel(i))
    );
    return Promise.all(l).then(Le).catch(Le);
  }
  invalidateQueries(e, t, n) {
    const [s, i] = Oe(e, t, n);
    return he.batch(() => {
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
    const [s, i] = Oe(e, t, n),
      l = he.batch(() =>
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
    let o = Promise.all(l).then(Le);
    return (i != null && i.throwOnError) || (o = o.catch(Le)), o;
  }
  fetchQuery(e, t, n) {
    const s = xe(e, t, n),
      i = this.defaultQueryOptions(s);
    typeof i.retry > "u" && (i.retry = !1);
    const l = this.queryCache.build(this, i);
    return l.isStaleByTime(i.staleTime)
      ? l.fetch(i)
      : Promise.resolve(l.state.data);
  }
  prefetchQuery(e, t, n) {
    return this.fetchQuery(e, t, n).then(Le).catch(Le);
  }
  fetchInfiniteQuery(e, t, n) {
    const s = xe(e, t, n);
    return (s.behavior = zi()), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, t, n) {
    return this.fetchInfiniteQuery(e, t, n).then(Le).catch(Le);
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
    const n = this.queryDefaults.find((s) => Ne(e) === Ne(s.queryKey));
    n
      ? (n.defaultOptions = t)
      : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    if (!e) return;
    const t = this.queryDefaults.find((n) => yt(e, n.queryKey));
    return t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const n = this.mutationDefaults.find((s) => Ne(e) === Ne(s.mutationKey));
    n
      ? (n.defaultOptions = t)
      : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    if (!e) return;
    const t = this.mutationDefaults.find((n) => yt(e, n.mutationKey));
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
      !t.queryHash && t.queryKey && (t.queryHash = Ht(t.queryKey, t)),
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
class Ni extends Ve {
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
      gn(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Ut(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Ut(
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
      Nt(n, this.options) ||
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
    i && _n(this.currentQuery, s, this.options, n) && this.executeFetch(),
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
    return (e != null && e.throwOnError) || (t = t.catch(Le)), t;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      tt || this.currentResult.isStale || !Dt(this.options.staleTime))
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
        tt ||
        this.options.enabled === !1 ||
        !Dt(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || wt.isFocused()) &&
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
        errorUpdatedAt: p,
        fetchStatus: b,
        status: y,
      } = d,
      $ = !1,
      w = !1,
      P;
    if (t._optimisticResults) {
      const M = this.hasListeners(),
        N = !M && gn(e, t),
        H = M && _n(e, n, t, s);
      (N || H) &&
        ((b = Lt(e.options.networkMode) ? "fetching" : "paused"),
        h || (y = "loading")),
        t._optimisticResults === "isRestoring" && (b = "idle");
    }
    if (
      t.keepPreviousData &&
      !d.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      y !== "error"
    )
      (P = c.data), (h = c.dataUpdatedAt), (y = c.status), ($ = !0);
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
            (P = Qt(i == null ? void 0 : i.data, P, t)),
            (this.selectResult = P),
            (this.selectError = null);
        } catch (M) {
          this.selectError = M;
        }
    else P = d.data;
    if (typeof t.placeholderData < "u" && typeof P > "u" && y === "loading") {
      let M;
      if (
        i != null &&
        i.isPlaceholderData &&
        t.placeholderData === (o == null ? void 0 : o.placeholderData)
      )
        M = i.data;
      else if (
        ((M =
          typeof t.placeholderData == "function"
            ? t.placeholderData()
            : t.placeholderData),
        t.select && typeof M < "u")
      )
        try {
          (M = t.select(M)), (this.selectError = null);
        } catch (N) {
          this.selectError = N;
        }
      typeof M < "u" &&
        ((y = "success"),
        (P = Qt(i == null ? void 0 : i.data, M, t)),
        (w = !0));
    }
    this.selectError &&
      ((f = this.selectError),
      (P = this.selectResult),
      (p = Date.now()),
      (y = "error"));
    const S = b === "fetching",
      I = y === "loading",
      q = y === "error";
    return {
      status: y,
      fetchStatus: b,
      isLoading: I,
      isSuccess: y === "success",
      isError: q,
      isInitialLoading: I && S,
      data: P,
      dataUpdatedAt: h,
      error: f,
      errorUpdatedAt: p,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount:
        d.dataUpdateCount > u.dataUpdateCount ||
        d.errorUpdateCount > u.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !I,
      isLoadingError: q && d.dataUpdatedAt === 0,
      isPaused: b === "paused",
      isPlaceholderData: w,
      isPreviousData: $,
      isRefetchError: q && d.dataUpdatedAt !== 0,
      isStale: Vt(e, t),
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
      Nt(n, t))
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
      : e.type === "error" && !pt(e.error) && (t.onError = !0),
      this.updateResult(t),
      this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    he.batch(() => {
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
function gn(r, e) {
  return Fi(r, e) || (r.state.dataUpdatedAt > 0 && Ut(r, e, e.refetchOnMount));
}
function Ut(r, e, t) {
  if (e.enabled !== !1) {
    const n = typeof t == "function" ? t(r) : t;
    return n === "always" || (n !== !1 && Vt(r, e));
  }
  return !1;
}
function _n(r, e, t, n) {
  return (
    t.enabled !== !1 &&
    (r !== e || n.enabled === !1) &&
    (!t.suspense || r.state.status !== "error") &&
    Vt(r, t)
  );
}
function Vt(r, e) {
  return r.isStaleByTime(e.staleTime);
}
let Qi = class extends Ve {
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
      Nt(n, this.options) ||
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
    he.batch(() => {
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
function St() {
  return Ui();
}
const Ze = [];
function nt(r, e) {
  return { subscribe: Bi(r, e).subscribe };
}
function Bi(r, e = se) {
  let t;
  const n = new Set();
  function s(o) {
    if (j(r, o) && ((r = o), t)) {
      const a = !Ze.length;
      for (const u of n) u[1](), Ze.push(u, r);
      if (a) {
        for (let u = 0; u < Ze.length; u += 2) Ze[u][0](Ze[u + 1]);
        Ze.length = 0;
      }
    }
  }
  function i(o) {
    s(o(r));
  }
  function l(o, a = se) {
    const u = [o, a];
    return (
      n.add(u),
      n.size === 1 && (t = e(s) || se),
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
    s = n ? [r] : r,
    i = e.length < 2;
  return nt(t, (l) => {
    let o = !1;
    const a = [];
    let u = 0,
      c = se;
    const d = () => {
        if (u) return;
        c();
        const f = e(n ? a[0] : a, l);
        i ? l(f) : (c = it(f) ? f : se);
      },
      h = s.map((f, p) =>
        Zt(
          f,
          (b) => {
            (a[p] = b), (u &= ~(1 << p)), o && d();
          },
          () => {
            u |= 1 << p;
          }
        )
      );
    return (
      (o = !0),
      d(),
      function () {
        Pe(h), c(), (o = !1);
      }
    );
  });
}
function Zi(r, e) {
  const t = St(),
    n = t.defaultQueryOptions(r);
  n._optimisticResults = "optimistic";
  let s = new e(t, n);
  n.onError && (n.onError = he.batchCalls(n.onError)),
    n.onSuccess && (n.onSuccess = he.batchCalls(n.onSuccess)),
    n.onSettled && (n.onSettled = he.batchCalls(n.onSettled)),
    nt(s).subscribe((o) => {
      (s = o), s.setOptions(n, { listeners: !1 });
    });
  const i = nt(s.getCurrentResult(), (o) => s.subscribe(he.batchCalls(o))),
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
  const n = xe(r, e, t);
  return Zi(n, Ni);
}
function Ki(r, e, t) {
  const n = Ri(r, e, t),
    s = St();
  let i = new Qi(s, n),
    l;
  nt(i).subscribe((u) => {
    (i = u),
      (l = (c, d) => {
        i.mutate(c, d).catch(Hi);
      }),
      i.setOptions(n);
  });
  const o = nt(i.getCurrentResult(), (u) =>
      i.subscribe(he.batchCalls((c) => u(c)))
    ),
    { subscribe: a } = qs(o, (u) => ({
      ...u,
      mutate: l,
      mutateAsync: u.mutate,
    }));
  return { subscribe: a };
}
function Hi() {}
function Gi(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[1], null);
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
        X(n, t, s, s[1], e ? J(t, s[1], i, null) : Y(s[1]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
    Ge(() => {
      i.mount();
    }),
    ji(i),
    Kt(() => {
      i.unmount();
    }),
    (r.$$set = (l) => {
      "client" in l && t(0, (i = l.client)),
        "$$scope" in l && t(1, (s = l.$$scope));
    }),
    [i, s, n]
  );
}
class Wi extends Z {
  constructor(e) {
    super(), B(this, e, Vi, Gi, j, { client: 0 });
  }
}
const zs = (r) => ({
    version: r.replace(/[\^~]/, ""),
    qualifier: isNaN(Number(r[0])) ? r[0] : void 0,
  }),
  Ds = (r, e) => zs(r).version === e,
  bn = (r, e) => (e.length <= r ? e : e.slice(0, r).concat("…")),
  Ot = 10,
  st = {
    package: (r) => ["package", r],
    bundlephobiaReport: (r) => ["bundlephobiaReport", r],
  };
class kn extends Error {
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
const mt = (r) => r !== null && typeof r == "object",
  ft = (...r) => {
    for (const e of r)
      if ((!mt(e) || Array.isArray(e)) && typeof e < "u")
        throw new TypeError("The `options` argument must be an object");
    return Wt({}, ...r);
  },
  Fs = (r = {}, e = {}) => {
    const t = new globalThis.Headers(r),
      n = e instanceof globalThis.Headers,
      s = new globalThis.Headers(e);
    for (const [i, l] of s.entries())
      (n && l === "undefined") || l === void 0 ? t.delete(i) : t.set(i, l);
    return t;
  },
  Wt = (...r) => {
    let e = {},
      t = {};
    for (const n of r)
      if (Array.isArray(n)) Array.isArray(e) || (e = []), (e = [...e, ...n]);
      else if (mt(n)) {
        for (let [s, i] of Object.entries(n))
          mt(i) && s in e && (i = Wt(e[s], i)), (e = { ...e, [s]: i });
        mt(n.headers) && ((t = Fs(t, n.headers)), (e.headers = t));
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
  Et = 2147483647,
  Us = Symbol("stop"),
  tr = (r) => (Qs.includes(r) ? r.toUpperCase() : r),
  nr = ["get", "put", "head", "delete", "options", "trace"],
  sr = [408, 413, 429, 500, 502, 503, 504],
  js = [413, 429, 503],
  yn = {
    limit: 2,
    methods: nr,
    statusCodes: sr,
    afterStatusCodes: js,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
  },
  ir = (r = {}) => {
    if (typeof r == "number") return { ...yn, limit: r };
    if (r.methods && !Array.isArray(r.methods))
      throw new Error("retry.methods must be an array");
    if (r.statusCodes && !Array.isArray(r.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...yn, ...r, afterStatusCodes: js };
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
function wn(r) {
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
        n(wn(e));
        return;
      }
      e.addEventListener("abort", s, { once: !0 });
    }
    function s() {
      n(wn(e)), clearTimeout(i);
    }
    const i = setTimeout(() => {
      e == null || e.removeEventListener("abort", s), t();
    }, r);
  });
}
class $t {
  static create(e, t) {
    const n = new $t(e, t),
      s = async () => {
        if (n._options.timeout > Et)
          throw new RangeError(
            `The \`timeout\` option cannot be greater than ${Et}`
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
          let a = new kn(o, n.request, n._options);
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
        hooks: Wt(
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
      if (e instanceof kn) {
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
      const n = Math.min(this._calculateRetryDelay(t), Et);
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
/*! MIT License © Sindre Sorhus */ const jt = (r) => {
    const e = (t, n) => $t.create(t, ft(r, n));
    for (const t of Qs) e[t] = (n, s) => $t.create(n, ft(r, s, { method: t }));
    return (
      (e.create = (t) => jt(ft(t))),
      (e.extend = (t) => jt(ft(r, t))),
      (e.stop = Us),
      e
    );
  },
  ar = jt(),
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
const Ks = (r) => Ki(fr, r),
  Hs = (r) => (e) => {
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
    Ms(st.package(r), cr.bind(null, r))
  ),
  pr = (r) => Ms(st.bundlephobiaReport(r), () => hr(r), { enabled: !!r });
function mr(r) {
  Ge(() => {
    window.addEventListener("keydown", r);
  }),
    Kt(() => {
      window.removeEventListener("keydown", r);
    });
}
function gr(r) {
  let e, t, n, s, i, l;
  return {
    c() {
      (e = we("svg")),
        (t = we("g")),
        (n = we("g")),
        (s = we("path")),
        (l = we("path")),
        g(s, "d", (i = vn[r[0]])),
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
      R(o, e, a), k(e, t), k(t, n), k(n, s), k(n, l);
    },
    p(o, [a]) {
      a & 1 && i !== (i = vn[o[0]]) && g(s, "d", i);
    },
    i: se,
    o: se,
    d(o) {
      o && C(e);
    },
  };
}
const vn = {
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
class br extends Z {
  constructor(e) {
    super(), B(this, e, _r, gr, j, { mood: 0 });
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
function Bt(r, e) {
  if (arguments.length === 1) return (s) => Bt(r, s);
  if (Number.isNaN(Number(r)) || Number.isNaN(Number(e)))
    throw new TypeError("Both arguments to range must be numbers");
  if (e < r) return [];
  const t = e - r,
    n = Array(t);
  for (let s = 0; s < t; s++) n[s] = r + s;
  return n;
}
const $n = {
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
function Cn(r, e, t) {
  const n = r.slice();
  return (n[10] = e[t][0]), (n[11] = e[t][1]), n;
}
function At(r) {
  let e,
    t = [r[11]],
    n = {};
  for (let s = 0; s < t.length; s += 1) n = K(n, t[s]);
  return {
    c() {
      (e = we(r[10])), bt(e, n);
    },
    m(s, i) {
      R(s, e, i);
    },
    p(s, i) {
      bt(e, (n = _e(t, [i & 32 && s[11]])));
    },
    d(s) {
      s && C(e);
    },
  };
}
function Rn(r) {
  let e = r[10],
    t,
    n = r[10] && At(r);
  return {
    c() {
      n && n.c(), (t = le());
    },
    m(s, i) {
      n && n.m(s, i), R(s, t, i);
    },
    p(s, i) {
      s[10]
        ? e
          ? j(e, s[10])
            ? (n.d(1), (n = At(s)), (e = s[10]), n.c(), n.m(t.parentNode, t))
            : n.p(s, i)
          : ((n = At(s)), (e = s[10]), n.c(), n.m(t.parentNode, t))
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
    l = r[5],
    o = [];
  for (let h = 0; h < l.length; h += 1) o[h] = Rn(Cn(r, l, h));
  const a = r[9].default,
    u = x(a, r, r[8], null);
  let c = [
      $n,
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
  for (let h = 0; h < c.length; h += 1) d = K(d, c[h]);
  return {
    c() {
      e = we("svg");
      for (let h = 0; h < o.length; h += 1) o[h].c();
      (t = le()), u && u.c(), bt(e, d);
    },
    m(h, f) {
      R(h, e, f);
      for (let p = 0; p < o.length; p += 1) o[p] && o[p].m(e, null);
      k(e, t), u && u.m(e, null), (i = !0);
    },
    p(h, [f]) {
      if (f & 32) {
        l = h[5];
        let p;
        for (p = 0; p < l.length; p += 1) {
          const b = Cn(h, l, p);
          o[p] ? o[p].p(b, f) : ((o[p] = Rn(b)), o[p].c(), o[p].m(e, t));
        }
        for (; p < o.length; p += 1) o[p].d(1);
        o.length = l.length;
      }
      u &&
        u.p &&
        (!i || f & 256) &&
        X(u, a, h, h[8], i ? J(a, h[8], f, null) : Y(h[8]), null),
        bt(
          e,
          (d = _e(c, [
            $n,
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
      i || (m(u, h), (i = !0));
    },
    o(h) {
      _(u, h), (i = !1);
    },
    d(h) {
      h && C(e), Ce(o, h), u && u.d(h);
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
  let s = _t(e, n),
    { $$slots: i = {}, $$scope: l } = e,
    { name: o } = e,
    { color: a = "currentColor" } = e,
    { size: u = 24 } = e,
    { strokeWidth: c = 2 } = e,
    { absoluteStrokeWidth: d = !1 } = e,
    { iconNode: h } = e;
  return (
    (r.$$set = (f) => {
      t(7, (e = K(K({}, e), oe(f)))),
        t(6, (s = _t(e, n))),
        "name" in f && t(0, (o = f.name)),
        "color" in f && t(1, (a = f.color)),
        "size" in f && t(2, (u = f.size)),
        "strokeWidth" in f && t(3, (c = f.strokeWidth)),
        "absoluteStrokeWidth" in f && t(4, (d = f.absoluteStrokeWidth)),
        "iconNode" in f && t(5, (h = f.iconNode)),
        "$$scope" in f && t(8, (l = f.$$scope));
    }),
    (e = oe(e)),
    [o, a, u, c, d, h, s, e, l, i]
  );
}
class Cr extends Z {
  constructor(e) {
    super(),
      B(this, e, $r, vr, j, {
        name: 0,
        color: 1,
        size: 2,
        strokeWidth: 3,
        absoluteStrokeWidth: 4,
        iconNode: 5,
      });
  }
}
const Te = Cr;
function Rr(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class Pr extends Z {
  constructor(e) {
    super(), B(this, e, Sr, Lr, j, {});
  }
}
const Ws = Pr;
function Tr(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class Ar extends Z {
  constructor(e) {
    super(), B(this, e, Er, Or, j, {});
  }
}
const Ir = Ar;
function qr(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class Dr extends Z {
  constructor(e) {
    super(), B(this, e, zr, Mr, j, {});
  }
}
const xs = Dr;
function Nr(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class Ur extends Z {
  constructor(e) {
    super(), B(this, e, Qr, Fr, j, {});
  }
}
const jr = Ur;
function Br(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
      },
    }
  );
}
function Kr(r, e, t) {
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class Hr extends Z {
  constructor(e) {
    super(), B(this, e, Kr, Zr, j, {});
  }
}
const Gr = Hr;
function Vr(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class Jr extends Z {
  constructor(e) {
    super(), B(this, e, xr, Wr, j, {});
  }
}
const Xr = Jr;
function Yr(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class nl extends Z {
  constructor(e) {
    super(), B(this, e, tl, el, j, {});
  }
}
const sl = nl;
function il(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class ol extends Z {
  constructor(e) {
    super(), B(this, e, ll, rl, j, {});
  }
}
const al = ol;
function ul(r) {
  let e;
  const t = r[2].default,
    n = x(t, r, r[3], null);
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
        X(n, t, s, s[3], e ? J(t, s[3], i, null) : Y(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Te({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, [l]) {
        const o =
          l & 3
            ? _e(n, [n[0], l & 2 && ye(i[1]), l & 1 && { iconNode: i[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [i, e, n, s]
  );
}
class hl extends Z {
  constructor(e) {
    super(), B(this, e, fl, cl, j, {});
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
    Ge(() => {
      console.warn = r;
    });
}
function Ln(r, e, t) {
  const n = r.slice();
  return (n[18] = e[t]), n;
}
function Sn(r, e, t) {
  const n = r.slice();
  return (n[18] = e[t]), n;
}
function Pn(r, e, t) {
  const n = r.slice();
  return (n[10] = e[t]), n;
}
function Tn(r, e, t) {
  const n = r.slice();
  return (n[13] = e[t]), (n[15] = t), n;
}
function On(r, e, t) {
  const n = r.slice();
  return (n[16] = e[t]), (n[15] = t), n;
}
function En(r, e, t) {
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
        t.c(), (n = le());
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
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
      },
    }
  );
}
function _l(r) {
  let e,
    t,
    n = r[1],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Dn(En(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = le();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 34) {
        n = l[1];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = En(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = Dn(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) m(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      Ce(s, l), l && C(e);
    },
  };
}
function bl(r) {
  let e, t, n;
  const s = [r[6]];
  var i = r[5][r[0]];
  function l(o) {
    let a = { $$slots: { default: [$l] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ae(i, l(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(o, a) {
        e && O(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? _e(s, [ye(o[6])]) : {};
        if (
          (a & 8388706 && (u.$$scope = { dirty: a, ctx: o }),
          a & 33 && i !== (i = o[5][o[0]]))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              V();
          }
          i
            ? ((e = ae(i, l(o))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
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
        t.c(), (n = le());
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
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
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
    s && (e = ae(s, i(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(l, o) {
        e && O(e, l, o), R(l, t, o), (n = !0);
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
              E(u, 1);
            }),
              V();
          }
          s
            ? ((e = ae(s, i(l))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
      },
    }
  );
}
function wl(r) {
  let e = r[6].raw + "",
    t;
  return {
    c() {
      t = W(e);
    },
    m(n, s) {
      R(n, t, s);
    },
    p(n, s) {
      s & 64 && e !== (e = n[6].raw + "") && de(t, e);
    },
    i: se,
    o: se,
    d(n) {
      n && C(t);
    },
  };
}
function vl(r) {
  let e, t;
  return (
    (e = new Fe({ props: { tokens: r[1], renderers: r[5] } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s & 2 && (i.tokens = n[1]), s & 32 && (i.renderers = n[5]), e.$set(i);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
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
        t.c(), (n = le());
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
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
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
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ae(i, l(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(o, a) {
        e && O(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u =
          a & 80
            ? _e(s, [a & 16 && { ordered: o[4] }, a & 64 && ye(o[6])])
            : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && i !== (i = o[5].list))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              V();
          }
          i
            ? ((e = ae(i, l(o))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
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
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ae(i, l(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(o, a) {
        e && O(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u =
          a & 80
            ? _e(s, [a & 16 && { ordered: o[4] }, a & 64 && ye(o[6])])
            : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && i !== (i = o[5].list))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              V();
          }
          i
            ? ((e = ae(i, l(o))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
      },
    }
  );
}
function Ll(r) {
  let e, t, n;
  return (
    (e = new Fe({ props: { tokens: r[18].tokens, renderers: r[5] } })),
    {
      c() {
        A(e.$$.fragment), (t = U());
      },
      m(s, i) {
        O(e, s, i), R(s, t, i), (n = !0);
      },
      p(s, i) {
        const l = {};
        i & 64 && (l.tokens = s[18].tokens),
          i & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (m(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && C(t);
      },
    }
  );
}
function An(r) {
  let e, t, n;
  const s = [r[18]];
  var i = r[5].unorderedlistitem || r[5].listitem;
  function l(o) {
    let a = { $$slots: { default: [Ll] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ae(i, l(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(o, a) {
        e && O(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? _e(s, [ye(o[18])]) : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && i !== (i = o[5].unorderedlistitem || o[5].listitem))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              V();
          }
          i
            ? ((e = ae(i, l(o))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
      },
    }
  );
}
function Sl(r) {
  let e,
    t,
    n = r[6].items,
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = An(Ln(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = le();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 96) {
        n = l[6].items;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Ln(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = An(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) m(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      Ce(s, l), l && C(e);
    },
  };
}
function Pl(r) {
  let e, t, n;
  return (
    (e = new Fe({ props: { tokens: r[18].tokens, renderers: r[5] } })),
    {
      c() {
        A(e.$$.fragment), (t = U());
      },
      m(s, i) {
        O(e, s, i), R(s, t, i), (n = !0);
      },
      p(s, i) {
        const l = {};
        i & 64 && (l.tokens = s[18].tokens),
          i & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (m(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && C(t);
      },
    }
  );
}
function In(r) {
  let e, t, n;
  const s = [r[18]];
  var i = r[5].orderedlistitem || r[5].listitem;
  function l(o) {
    let a = { $$slots: { default: [Pl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
    return { props: a };
  }
  return (
    i && (e = ae(i, l(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(o, a) {
        e && O(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? _e(s, [ye(o[18])]) : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && i !== (i = o[5].orderedlistitem || o[5].listitem))
        ) {
          if (e) {
            G();
            const c = e;
            _(c.$$.fragment, 1, 0, () => {
              E(c, 1);
            }),
              V();
          }
          i
            ? ((e = ae(i, l(o))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else i && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && _(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
      },
    }
  );
}
function Tl(r) {
  let e,
    t,
    n = r[6].items,
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = In(Sn(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = le();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 96) {
        n = l[6].items;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Sn(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = In(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) m(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      Ce(s, l), l && C(e);
    },
  };
}
function Ol(r) {
  let e, t, n;
  return (
    (e = new Fe({ props: { tokens: r[16].tokens, renderers: r[5] } })),
    {
      c() {
        A(e.$$.fragment), (t = U());
      },
      m(s, i) {
        O(e, s, i), R(s, t, i), (n = !0);
      },
      p(s, i) {
        const l = {};
        i & 4 && (l.tokens = s[16].tokens),
          i & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (m(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && C(t);
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
        header: !0,
        align: l[6].align[l[15]] || "center",
        $$slots: { default: [Ol] },
        $$scope: { ctx: l },
      },
    };
  }
  return (
    s && (e = ae(s, i(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(l, o) {
        e && O(e, l, o), R(l, t, o), (n = !0);
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
              E(u, 1);
            }),
              V();
          }
          s
            ? ((e = ae(s, i(l))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
      },
    }
  );
}
function El(r) {
  let e,
    t,
    n = r[2],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = qn(On(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = le();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 100) {
        n = l[2];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = On(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = qn(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) m(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      Ce(s, l), l && C(e);
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
    s && (e = ae(s, i(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(l, o) {
        e && O(e, l, o), R(l, t, o), (n = !0);
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
              E(u, 1);
            }),
              V();
          }
          s
            ? ((e = ae(s, i(l))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
      },
    }
  );
}
function Il(r) {
  let e, t;
  return (
    (e = new Fe({ props: { tokens: r[13].tokens, renderers: r[5] } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s & 8 && (i.tokens = n[13].tokens),
          s & 32 && (i.renderers = n[5]),
          e.$set(i);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Mn(r) {
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
    s && (e = ae(s, i(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(l, o) {
        e && O(e, l, o), R(l, t, o), (n = !0);
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
              E(u, 1);
            }),
              V();
          }
          s
            ? ((e = ae(s, i(l))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
      },
    }
  );
}
function ql(r) {
  let e,
    t,
    n = r[10],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Mn(Tn(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = U();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 104) {
        n = l[10];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Tn(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = Mn(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) m(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      Ce(s, l), l && C(e);
    },
  };
}
function zn(r) {
  let e, t, n;
  var s = r[5].tablerow;
  function i(l) {
    return { props: { $$slots: { default: [ql] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = ae(s, i(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = le());
      },
      m(l, o) {
        e && O(e, l, o), R(l, t, o), (n = !0);
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
              E(u, 1);
            }),
              V();
          }
          s
            ? ((e = ae(s, i(l))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && _(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
      },
    }
  );
}
function Ml(r) {
  let e,
    t,
    n = r[3],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = zn(Pn(r, n, l));
  const i = (l) =>
    _(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = le();
    },
    m(l, o) {
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(l, o);
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 104) {
        n = l[3];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Pn(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = zn(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (G(), a = n.length; a < s.length; a += 1) i(a);
        V();
      }
    },
    i(l) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) m(s[o]);
        t = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) _(s[o]);
      t = !1;
    },
    d(l) {
      Ce(s, l), l && C(e);
    },
  };
}
function zl(r) {
  let e, t, n, s, i;
  var l = r[5].tablehead;
  function o(c) {
    return { props: { $$slots: { default: [Al] }, $$scope: { ctx: c } } };
  }
  l && (e = ae(l, o(r)));
  var a = r[5].tablebody;
  function u(c) {
    return { props: { $$slots: { default: [Ml] }, $$scope: { ctx: c } } };
  }
  return (
    a && (n = ae(a, u(r))),
    {
      c() {
        e && A(e.$$.fragment), (t = U()), n && A(n.$$.fragment), (s = le());
      },
      m(c, d) {
        e && O(e, c, d), R(c, t, d), n && O(n, c, d), R(c, s, d), (i = !0);
      },
      p(c, d) {
        const h = {};
        if (
          (d & 8388708 && (h.$$scope = { dirty: d, ctx: c }),
          d & 32 && l !== (l = c[5].tablehead))
        ) {
          if (e) {
            G();
            const p = e;
            _(p.$$.fragment, 1, 0, () => {
              E(p, 1);
            }),
              V();
          }
          l
            ? ((e = ae(l, o(c))),
              A(e.$$.fragment),
              m(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(h);
        const f = {};
        if (
          (d & 8388712 && (f.$$scope = { dirty: d, ctx: c }),
          d & 32 && a !== (a = c[5].tablebody))
        ) {
          if (n) {
            G();
            const p = n;
            _(p.$$.fragment, 1, 0, () => {
              E(p, 1);
            }),
              V();
          }
          a
            ? ((n = ae(a, u(c))),
              A(n.$$.fragment),
              m(n.$$.fragment, 1),
              O(n, s.parentNode, s))
            : (n = null);
        } else a && n.$set(f);
      },
      i(c) {
        i || (e && m(e.$$.fragment, c), n && m(n.$$.fragment, c), (i = !0));
      },
      o(c) {
        e && _(e.$$.fragment, c), n && _(n.$$.fragment, c), (i = !1);
      },
      d(c) {
        e && E(e, c), c && C(t), c && C(s), n && E(n, c);
      },
    }
  );
}
function Dn(r) {
  let e, t;
  const n = [r[7], { renderers: r[5] }];
  let s = {};
  for (let i = 0; i < n.length; i += 1) s = K(s, n[i]);
  return (
    (e = new Fe({ props: s })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(i, l) {
        O(e, i, l), (t = !0);
      },
      p(i, l) {
        const o =
          l & 34
            ? _e(n, [l & 2 && ye(i[7]), l & 32 && { renderers: i[5] }])
            : {};
        e.$set(o);
      },
      i(i) {
        t || (m(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        E(e, i);
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
        t && t.c(), (n = le());
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
                  m(t, 1),
                  t.m(n.parentNode, n))
                : (t = null));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        ~e && l[e].d(a), a && C(n);
      },
    }
  );
}
function Nl(r, e, t) {
  const n = ["type", "tokens", "header", "rows", "ordered", "renderers"];
  let s = _t(e, n),
    { type: i = void 0 } = e,
    { tokens: l = void 0 } = e,
    { header: o = void 0 } = e,
    { rows: a = void 0 } = e,
    { ordered: u = !1 } = e,
    { renderers: c } = e;
  return (
    ml(),
    (r.$$set = (d) => {
      (e = K(K({}, e), oe(d))),
        t(6, (s = _t(e, n))),
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
let Fe = class extends Z {
  constructor(e) {
    super(),
      B(this, e, Nl, Dl, j, {
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
let Qe = Js();
function Fl(r) {
  Qe = r;
}
const Xs = /[&<>"']/,
  Ql = new RegExp(Xs.source, "g"),
  Ys = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  Ul = new RegExp(Ys.source, "g"),
  jl = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  Nn = (r) => jl[r];
function be(r, e) {
  if (e) {
    if (Xs.test(r)) return r.replace(Ql, Nn);
  } else if (Ys.test(r)) return r.replace(Ul, Nn);
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
const Kl = /[^\w:]/g,
  Hl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Fn(r, e, t) {
  if (r) {
    let n;
    try {
      n = decodeURIComponent(ei(t)).replace(Kl, "").toLowerCase();
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
  e && !Hl.test(t) && (t = xl(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const ht = {},
  Gl = /^[^:]+:\/*[^/]*$/,
  Vl = /^([^:]+:)[\s\S]*$/,
  Wl = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function xl(r, e) {
  ht[" " + r] ||
    (Gl.test(r) ? (ht[" " + r] = r + "/") : (ht[" " + r] = gt(r, "/", !0))),
    (r = ht[" " + r]);
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
const Ct = { exec: function () {} };
function Qn(r, e) {
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
function gt(r, e, t) {
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
function Un(r, e) {
  if (e < 1) return "";
  let t = "";
  for (; e > 1; ) e & 1 && (t += r), (e >>= 1), (r += r);
  return t + r;
}
function jn(r, e, t, n) {
  const s = e.href,
    i = e.title ? be(e.title) : null,
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
  return { type: "image", raw: t, href: s, title: i, text: be(l) };
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
class xt {
  constructor(e) {
    this.options = e || Qe;
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
          : gt(
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
        const s = gt(n, "#");
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
        p,
        b = t[1].trim();
      const y = b.length > 1,
        $ = {
          type: "list",
          raw: "",
          ordered: y,
          start: y ? +b.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      (b = y ? `\\d{1,9}\\${b.slice(-1)}` : `\\${b}`),
        this.options.pedantic && (b = y ? b : "[*+-]");
      const w = new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (
        ;
        e && ((p = !1), !(!(t = w.exec(e)) || this.rules.block.hr.test(e)));

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
            !(q.test(d) || L.test(d) || S.test(d) || I.test(e)));

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
                I.test(c)
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
            I = S.length > 0 && S.some((q) => /\n.*\n/.test(q.raw));
          $.loose = I;
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
          : be(t[0]);
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
        header: Qn(t[1]).map((s) => ({ text: s })),
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
          n.rows[i] = Qn(n.rows[i], n.header.length).map((u) => ({ text: u }));
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
    if (t) return { type: "escape", raw: t[0], text: be(t[1]) };
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
              : be(t[0])
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
        const l = gt(n.slice(0, -1), "\\");
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
        jn(
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
      return jn(n, s, n[0], this.lexer);
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
        i = /^ /.test(n) && / $/.test(n);
      return (
        s && i && (n = n.substring(1, n.length - 1)),
        (n = be(n, !0)),
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
          ? ((s = be(this.options.mangle ? t(n[1]) : n[1])),
            (i = "mailto:" + s))
          : ((s = be(n[1])), (i = s)),
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
        (s = be(this.options.mangle ? t(n[0]) : n[0])), (i = "mailto:" + s);
      else {
        let l;
        do (l = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
        while (l !== n[0]);
        (s = be(n[0])), n[1] === "www." ? (i = "http://" + n[0]) : (i = n[0]);
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
                : be(n[0])
              : n[0])
          : (s = be(this.options.smartypants ? t(n[0]) : n[0])),
        { type: "text", raw: n[0], text: s }
      );
    }
  }
}
const F = {
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
  table: Ct,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
F._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
F._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
F.def = re(F.def)
  .replace("label", F._label)
  .replace("title", F._title)
  .getRegex();
F.bullet = /(?:[*+-]|\d{1,9}[.)])/;
F.listItemStart = re(/^( *)(bull) */)
  .replace("bull", F.bullet)
  .getRegex();
F.list = re(F.list)
  .replace(/bull/g, F.bullet)
  .replace(
    "hr",
    "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
  )
  .replace("def", "\\n+(?=" + F.def.source + ")")
  .getRegex();
F._tag =
  "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
F._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
F.html = re(F.html, "i")
  .replace("comment", F._comment)
  .replace("tag", F._tag)
  .replace(
    "attribute",
    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
  )
  .getRegex();
F.paragraph = re(F._paragraph)
  .replace("hr", F.hr)
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
  .replace("tag", F._tag)
  .getRegex();
F.blockquote = re(F.blockquote).replace("paragraph", F.paragraph).getRegex();
F.normal = { ...F };
F.gfm = {
  ...F.normal,
  table:
    "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
};
F.gfm.table = re(F.gfm.table)
  .replace("hr", F.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("blockquote", " {0,3}>")
  .replace("code", " {4}[^\\n]")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", F._tag)
  .getRegex();
F.gfm.paragraph = re(F._paragraph)
  .replace("hr", F.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("|lheading", "")
  .replace("table", F.gfm.table)
  .replace("blockquote", " {0,3}>")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", F._tag)
  .getRegex();
F.pedantic = {
  ...F.normal,
  html: re(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  )
    .replace("comment", F._comment)
    .replace(
      /tag/g,
      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Ct,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: re(F.normal._paragraph)
    .replace("hr", F.hr)
    .replace(
      "heading",
      ` *#{1,6} *[^
]`
    )
    .replace("lheading", F.lheading)
    .replace("blockquote", " {0,3}>")
    .replace("|fences", "")
    .replace("|list", "")
    .replace("|html", "")
    .getRegex(),
};
const T = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Ct,
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
  del: Ct,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
T._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
T.punctuation = re(T.punctuation)
  .replace(/punctuation/g, T._punctuation)
  .getRegex();
T.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
T.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
T._comment = re(F._comment).replace("(?:-->|$)", "-->").getRegex();
T.emStrong.lDelim = re(T.emStrong.lDelim)
  .replace(/punct/g, T._punctuation)
  .getRegex();
T.emStrong.rDelimAst = re(T.emStrong.rDelimAst, "g")
  .replace(/punct/g, T._punctuation)
  .getRegex();
T.emStrong.rDelimUnd = re(T.emStrong.rDelimUnd, "g")
  .replace(/punct/g, T._punctuation)
  .getRegex();
T._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
T._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
T._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
T.autolink = re(T.autolink)
  .replace("scheme", T._scheme)
  .replace("email", T._email)
  .getRegex();
T._attribute =
  /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
T.tag = re(T.tag)
  .replace("comment", T._comment)
  .replace("attribute", T._attribute)
  .getRegex();
T._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
T._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
T._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
T.link = re(T.link)
  .replace("label", T._label)
  .replace("href", T._href)
  .replace("title", T._title)
  .getRegex();
T.reflink = re(T.reflink)
  .replace("label", T._label)
  .replace("ref", F._label)
  .getRegex();
T.nolink = re(T.nolink).replace("ref", F._label).getRegex();
T.reflinkSearch = re(T.reflinkSearch, "g")
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
  link: re(/^!?\[(label)\]\((.*?)\)/)
    .replace("label", T._label)
    .getRegex(),
  reflink: re(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace("label", T._label)
    .getRegex(),
};
T.gfm = {
  ...T.normal,
  escape: re(T.escape).replace("])", "~|])").getRegex(),
  _extended_email:
    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal:
    /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
};
T.gfm.url = re(T.gfm.url, "i")
  .replace("email", T.gfm._extended_email)
  .getRegex();
T.breaks = {
  ...T.gfm,
  br: re(T.br).replace("{2,}", "*").getRegex(),
  text: re(T.gfm.text)
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
function Bn(r) {
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
class Se {
  constructor(e) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || Qe),
      (this.options.tokenizer = this.options.tokenizer || new xt()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const t = { block: F.normal, inline: T.normal };
    this.options.pedantic
      ? ((t.block = F.pedantic), (t.inline = T.pedantic))
      : this.options.gfm &&
        ((t.block = F.gfm),
        this.options.breaks ? (t.inline = T.breaks) : (t.inline = T.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: F, inline: T };
  }
  static lex(e, t) {
    return new Se(t).lex(e);
  }
  static lexInline(e, t) {
    return new Se(t).inlineTokens(e);
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
              Un("a", o[0].length - 2) +
              "]" +
              l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l =
        l.slice(0, o.index) +
        "[" +
        Un("a", o[0].length - 2) +
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
        if ((n = this.tokenizer.autolink(e, Bn))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e, Bn))) {
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
class Jt {
  constructor(e) {
    this.options = e || Qe;
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
          be(s) +
          '">' +
          (n ? e : be(e, !0)) +
          `</code></pre>
`
        : "<pre><code>" +
          (n ? e : be(e, !0)) +
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
    if (((e = Fn(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return n;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), (s += ">" + n + "</a>"), s;
  }
  image(e, t, n) {
    if (((e = Fn(this.options.sanitize, this.options.baseUrl, e)), e === null))
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
class Xt {
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
class Ae {
  constructor(e) {
    (this.options = e || Qe),
      (this.options.renderer = this.options.renderer || new Jt()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new ti()),
      (this.slugger = new Xt());
  }
  static parse(e, t) {
    return new Ae(t).parse(e);
  }
  static parseInline(e, t) {
    return new Ae(t).parseInline(e);
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
      p,
      b,
      y,
      $,
      w,
      P,
      S,
      I,
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
            p = f.ordered,
              b = f.start,
              y = f.loose,
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
                ((I = this.renderer.checkbox(P)),
                y
                  ? w.tokens.length > 0 && w.tokens[0].type === "paragraph"
                    ? ((w.tokens[0].text = I + " " + w.tokens[0].text),
                      w.tokens[0].tokens &&
                        w.tokens[0].tokens.length > 0 &&
                        w.tokens[0].tokens[0].type === "text" &&
                        (w.tokens[0].tokens[0].text =
                          I + " " + w.tokens[0].tokens[0].text))
                    : w.tokens.unshift({ type: "text", text: I })
                  : ($ += I)),
              ($ += this.parse(w.tokens, y)),
              (h += this.renderer.listitem($, S, P));
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
          const M = 'Token with "' + f.type + '" type was not found.';
          if (this.options.silent) {
            console.error(M);
            return;
          } else throw new Error(M);
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
class Rt {
  constructor(e) {
    this.options = e || Qe;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
}
nn(Rt, "passThroughHooks", new Set(["preprocess", "postprocess"]));
function to(r, e, t) {
  return (n) => {
    if (
      ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
      r)
    ) {
      const s =
        "<p>An error occurred:</p><pre>" + be(n.message + "", !0) + "</pre>";
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
    n = { ...Q.defaults, ...i };
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
            n.walkTokens && Q.walkTokens(a, n.walkTokens),
              (h = e(a, n)),
              n.hooks && (h = n.hooks.postprocess(h));
          } catch (f) {
            d = f;
          }
        return (n.highlight = o), d ? l(d) : s(null, h);
      };
      if (!o || o.length < 3 || (delete n.highlight, !a.length)) return u();
      let c = 0;
      Q.walkTokens(a, function (d) {
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
            ? Promise.all(Q.walkTokens(o, n.walkTokens)).then(() => o)
            : o
        )
        .then((o) => e(o, n))
        .then((o) => (n.hooks ? n.hooks.postprocess(o) : o))
        .catch(l);
    try {
      n.hooks && (t = n.hooks.preprocess(t));
      const o = r(t, n);
      n.walkTokens && Q.walkTokens(o, n.walkTokens);
      let a = e(o, n);
      return n.hooks && (a = n.hooks.postprocess(a)), a;
    } catch (o) {
      return l(o);
    }
  };
}
function Q(r, e, t) {
  return ni(Se.lex, Ae.parse)(r, e, t);
}
Q.options = Q.setOptions = function (r) {
  return (Q.defaults = { ...Q.defaults, ...r }), Fl(Q.defaults), Q;
};
Q.getDefaults = Js;
Q.defaults = Qe;
Q.use = function (...r) {
  const e = Q.defaults.extensions || { renderers: {}, childTokens: {} };
  r.forEach((t) => {
    const n = { ...t };
    if (
      ((n.async = Q.defaults.async || n.async || !1),
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
      const s = Q.defaults.renderer || new Jt();
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
      const s = Q.defaults.tokenizer || new xt();
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
      const s = Q.defaults.hooks || new Rt();
      for (const i in t.hooks) {
        const l = s[i];
        Rt.passThroughHooks.has(i)
          ? (s[i] = (o) => {
              if (Q.defaults.async)
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
      const s = Q.defaults.walkTokens;
      n.walkTokens = function (i) {
        let l = [];
        return (
          l.push(t.walkTokens.call(this, i)),
          s && (l = l.concat(s.call(this, i))),
          l
        );
      };
    }
    Q.setOptions(n);
  });
};
Q.walkTokens = function (r, e) {
  let t = [];
  for (const n of r)
    switch (((t = t.concat(e.call(Q, n))), n.type)) {
      case "table": {
        for (const s of n.header) t = t.concat(Q.walkTokens(s.tokens, e));
        for (const s of n.rows)
          for (const i of s) t = t.concat(Q.walkTokens(i.tokens, e));
        break;
      }
      case "list": {
        t = t.concat(Q.walkTokens(n.items, e));
        break;
      }
      default:
        Q.defaults.extensions &&
        Q.defaults.extensions.childTokens &&
        Q.defaults.extensions.childTokens[n.type]
          ? Q.defaults.extensions.childTokens[n.type].forEach(function (s) {
              t = t.concat(Q.walkTokens(n[s], e));
            })
          : n.tokens && (t = t.concat(Q.walkTokens(n.tokens, e)));
    }
  return t;
};
Q.parseInline = ni(Se.lexInline, Ae.parseInline);
Q.Parser = Ae;
Q.parser = Ae.parse;
Q.Renderer = Jt;
Q.TextRenderer = ti;
Q.Lexer = Se;
Q.lexer = Se.lex;
Q.Tokenizer = xt;
Q.Slugger = Xt;
Q.Hooks = Rt;
Q.parse = Q;
Q.options;
Q.setOptions;
Q.use;
Q.walkTokens;
Q.parseInline;
Ae.parse;
Se.lex;
const si = {};
function no(r) {
  let e;
  return {
    c() {
      e = W(r[1]);
    },
    m(t, n) {
      R(t, e, n);
    },
    p(t, n) {
      n & 2 && de(e, t[1]);
    },
    i: se,
    o: se,
    d(t) {
      t && C(e);
    },
  };
}
function so(r) {
  let e, t;
  const n = r[5].default,
    s = x(n, r, r[4], null);
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
        X(s, n, i, i[4], t ? J(n, i[4], l, null) : Y(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
    s = x(n, r, r[4], null);
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
        X(s, n, i, i[4], t ? J(n, i[4], l, null) : Y(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
    s = x(n, r, r[4], null);
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
        X(s, n, i, i[4], t ? J(n, i[4], l, null) : Y(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
    s = x(n, r, r[4], null);
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
        X(s, n, i, i[4], t ? J(n, i[4], l, null) : Y(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
    s = x(n, r, r[4], null);
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
        X(s, n, i, i[4], t ? J(n, i[4], l, null) : Y(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
    s = x(n, r, r[4], null);
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
        X(s, n, i, i[4], t ? J(n, i[4], l, null) : Y(i[4]), null),
        (!t || l & 4) && g(e, "id", i[2]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
        t.c(), (n = le());
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
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
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
class fo extends Z {
  constructor(e) {
    super(), B(this, e, co, uo, j, { depth: 0, raw: 1, text: 3 });
  }
}
function ho(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class mo extends Z {
  constructor(e) {
    super(), B(this, e, po, ho, j, {});
  }
}
function go(r) {
  let e;
  const t = r[3].default,
    n = x(t, r, r[2], null);
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
        X(n, t, s, s[2], e ? J(t, s[2], i, null) : Y(s[2]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
class bo extends Z {
  constructor(e) {
    super(), B(this, e, _o, go, j, { text: 0, raw: 1 });
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
    i: se,
    o: se,
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
class wo extends Z {
  constructor(e) {
    super(), B(this, e, yo, ko, j, { href: 0, title: 1, text: 2 });
  }
}
function vo(r) {
  let e, t;
  const n = r[3].default,
    s = x(n, r, r[2], null);
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
        X(s, n, i, i[2], t ? J(n, i[2], l, null) : Y(i[2]), null),
        (!t || l & 1) && g(e, "href", i[0]),
        (!t || l & 2) && g(e, "title", i[1]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class Co extends Z {
  constructor(e) {
    super(), B(this, e, $o, vo, j, { href: 0, title: 1 });
  }
}
function Ro(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class So extends Z {
  constructor(e) {
    super(), B(this, e, Lo, Ro, j, {});
  }
}
function Po(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class Oo extends Z {
  constructor(e) {
    super(), B(this, e, To, Po, j, {});
  }
}
function Eo(r) {
  let e,
    t = r[0].replace(/`/g, "") + "",
    n;
  return {
    c() {
      (e = v("code")), (n = W(t));
    },
    m(s, i) {
      R(s, e, i), k(e, n);
    },
    p(s, [i]) {
      i & 1 && t !== (t = s[0].replace(/`/g, "") + "") && de(n, t);
    },
    i: se,
    o: se,
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
class Io extends Z {
  constructor(e) {
    super(), B(this, e, Ao, Eo, j, { raw: 0 });
  }
}
function qo(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class zo extends Z {
  constructor(e) {
    super(), B(this, e, Mo, qo, j, {});
  }
}
function Do(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class Fo extends Z {
  constructor(e) {
    super(), B(this, e, No, Do, j, {});
  }
}
function Qo(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class jo extends Z {
  constructor(e) {
    super(), B(this, e, Uo, Qo, j, {});
  }
}
function Bo(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class Ko extends Z {
  constructor(e) {
    super(), B(this, e, Zo, Bo, j, {});
  }
}
function Ho(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class Vo extends Z {
  constructor(e) {
    super(), B(this, e, Go, Ho, j, {});
  }
}
function Wo(r) {
  let e, t;
  const n = r[3].default,
    s = x(n, r, r[2], null);
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
        X(s, n, i, i[2], t ? J(n, i[2], l, null) : Y(i[2]), null),
        (!t || l & 2) && g(e, "align", i[1]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
    s = x(n, r, r[2], null);
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
        X(s, n, i, i[2], t ? J(n, i[2], l, null) : Y(i[2]), null),
        (!t || l & 2) && g(e, "align", i[1]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
        t.c(), (n = le());
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
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
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
class Yo extends Z {
  constructor(e) {
    super(), B(this, e, Xo, Jo, j, { header: 0, align: 1 });
  }
}
function ea(r) {
  let e, t;
  const n = r[3].default,
    s = x(n, r, r[2], null);
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
        X(s, n, i, i[2], t ? J(n, i[2], l, null) : Y(i[2]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
    s = x(n, r, r[2], null);
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
        X(s, n, i, i[2], t ? J(n, i[2], l, null) : Y(i[2]), null),
        (!t || l & 2) && g(e, "start", i[1]);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
        t.c(), (n = le());
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
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        _(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
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
class ia extends Z {
  constructor(e) {
    super(), B(this, e, sa, na, j, { ordered: 0, start: 1 });
  }
}
function ra(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class oa extends Z {
  constructor(e) {
    super(), B(this, e, la, ra, j, {});
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
    p: se,
    i: se,
    o: se,
    d(t) {
      t && C(e);
    },
  };
}
class ua extends Z {
  constructor(e) {
    super(), B(this, e, null, aa, j, {});
  }
}
function ca(r) {
  let e, t;
  return {
    c() {
      (e = new gi(!1)), (t = le()), (e.a = t);
    },
    m(n, s) {
      e.m(r[0], n, s), R(n, t, s);
    },
    p(n, [s]) {
      s & 1 && e.p(n[0]);
    },
    i: se,
    o: se,
    d(n) {
      n && C(t), n && e.d();
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
class ha extends Z {
  constructor(e) {
    super(), B(this, e, fa, ca, j, { text: 0 });
  }
}
function da(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class ma extends Z {
  constructor(e) {
    super(), B(this, e, pa, da, j, {});
  }
}
function ga(r) {
  let e, t, n;
  return {
    c() {
      (e = v("pre")), (t = v("code")), (n = W(r[1])), g(e, "class", r[0]);
    },
    m(s, i) {
      R(s, e, i), k(e, t), k(t, n);
    },
    p(s, [i]) {
      i & 2 && de(n, s[1]), i & 1 && g(e, "class", s[0]);
    },
    i: se,
    o: se,
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
class ba extends Z {
  constructor(e) {
    super(), B(this, e, _a, ga, j, { lang: 0, text: 1 });
  }
}
function ka(r) {
  let e, t;
  const n = r[1].default,
    s = x(n, r, r[0], null);
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
        X(s, n, i, i[0], t ? J(n, i[0], l, null) : Y(i[0]), null);
    },
    i(i) {
      t || (m(s, i), (t = !0));
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
class wa extends Z {
  constructor(e) {
    super(), B(this, e, ya, ka, j, {});
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
    tablebody: Ko,
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
    (e = new Fe({ props: { tokens: r[0], renderers: r[1] } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const i = {};
        s & 1 && (i.tokens = n[0]), s & 2 && (i.renderers = n[1]), e.$set(i);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
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
  const d = _i();
  let h, f, p;
  return (
    ws(si, { slug: (b) => (s ? s.slug(b) : ""), getOptions: () => i }),
    Ge(() => {
      t(7, (p = !0));
    }),
    (r.$$set = (b) => {
      "source" in b && t(2, (o = b.source)),
        "renderers" in b && t(3, (a = b.renderers)),
        "options" in b && t(4, (u = b.options)),
        "isInline" in b && t(5, (c = b.isInline));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 4 && t(8, (n = Array.isArray(o))),
        r.$$.dirty & 4 && (s = o ? new Xt() : void 0),
        r.$$.dirty & 16 && t(9, (i = { ...$a, ...u })),
        r.$$.dirty & 869 &&
          (n
            ? t(0, (h = o))
            : (t(6, (f = new Se(i))),
              t(0, (h = c ? f.inlineTokens(o) : f.lex(o))),
              d("parsed", { tokens: h }))),
        r.$$.dirty & 8 && t(1, (l = { ...va, ...a })),
        r.$$.dirty & 385 && p && !n && d("parsed", { tokens: h });
    }),
    [h, l, o, a, u, c, f, p, n, i]
  );
}
class La extends Z {
  constructor(e) {
    super(),
      B(this, e, Ra, Ca, j, {
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
    n = x(t, r, r[2], null);
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
        X(n, t, s, s[2], e ? J(t, s[2], i, null) : Y(s[2]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
    o = x(l, r, r[2], null);
  return {
    c() {
      (t = W(e)),
        (n = U()),
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
        X(o, l, a, a[2], i ? J(l, a[2], u, null) : Y(a[2]), null);
    },
    i(a) {
      i || (m(o, a), (i = !0));
    },
    o(a) {
      _(o, a), (i = !1);
    },
    d(a) {
      a && C(t), a && C(n), a && C(s), o && o.d(a);
    },
  };
}
function Ta(r) {
  let e, t, n, s, i, l, o, a, u, c;
  const d = [Pa, Sa],
    h = [];
  function f(p, b) {
    return p[0] ? 0 : 1;
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
          (i = U()),
          (l = v("div")),
          A(o.$$.fragment),
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
          fe(e, "opacity-90", r[0]),
          fe(e, "opacity-70", r[1]);
      },
      m(p, b) {
        R(p, e, b),
          k(e, t),
          h[n].m(t, null),
          k(e, i),
          k(e, l),
          O(o, l, null),
          (a = !0),
          u || ((c = $e(e, "click", r[4])), (u = !0));
      },
      p(p, [b]) {
        let y = n;
        (n = f(p)),
          n === y
            ? h[n].p(p, b)
            : (G(),
              _(h[y], 1, 1, () => {
                h[y] = null;
              }),
              V(),
              (s = h[n]),
              s ? s.p(p, b) : ((s = h[n] = d[n](p)), s.c()),
              m(s, 1),
              s.m(t, null)),
          (!a || b & 2) && (e.disabled = p[1]),
          (!a || b & 1) && fe(e, "opacity-90", p[0]),
          (!a || b & 2) && fe(e, "opacity-70", p[1]);
      },
      i(p) {
        a || (m(s), m(o.$$.fragment, p), (a = !0));
      },
      o(p) {
        _(s), _(o.$$.fragment, p), (a = !1);
      },
      d(p) {
        p && C(e), h[n].d(), E(o), (u = !1), c();
      },
    }
  );
}
function Oa(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { isLoading: i = !1 } = e,
    { disabled: l = !1 } = e;
  function o(a) {
    bi.call(this, r, a);
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
class ii extends Z {
  constructor(e) {
    super(), B(this, e, Oa, Ta, j, { isLoading: 0, disabled: 1 });
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
        (e = v("div")), A(t.$$.fragment), g(e, "class", "py-1");
      },
      m(s, i) {
        R(s, e, i), O(t, e, null), (n = !0);
      },
      p(s, i) {
        const l = {};
        i & 256 && (l.disabled = s[8].isLoading),
          i & 256 && (l.isLoading = s[8].isLoading),
          i & 2097158 && (l.$$scope = { dirty: i, ctx: s }),
          t.$set(l);
      },
      i(s) {
        n || (m(t.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(t.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(e), E(t);
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
          (n = W(r[1])),
          (s = U()),
          A(i.$$.fragment),
          g(e, "class", "flex items-center gap-2 justify-end py-2");
      },
      m(o, a) {
        R(o, e, a), k(e, t), k(t, n), k(e, s), O(i, e, null), (l = !0);
      },
      p(o, a) {
        (!l || a & 2) && de(n, o[1]);
      },
      i(o) {
        l || (m(i.$$.fragment, o), (l = !0));
      },
      o(o) {
        _(i.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), E(i);
      },
    }
  );
}
function Ia(r) {
  let e, t, n;
  return {
    c() {
      (e = W(r[1])), (t = W(" ⇒ ")), (n = W(r[2]));
    },
    m(s, i) {
      R(s, e, i), R(s, t, i), R(s, n, i);
    },
    p(s, i) {
      i & 2 && de(e, s[1]), i & 4 && de(n, s[2]);
    },
    d(s) {
      s && C(e), s && C(t), s && C(n);
    },
  };
}
function Zn(r) {
  var P;
  let e, t, n, s, i, l, o, a, u, c, d, h;
  t = new La({ props: { source: r[5].description ?? "" } });
  let f = r[5].license && Kn(r),
    p = r[5].author && Hn(r),
    b = r[9].data && Gn(r),
    y = ((P = r[5].repository) == null ? void 0 : P.url) && Vn(r),
    $ = r[5].homepage && Wn(r),
    w = r[5].bugs && xn(r);
  return {
    c() {
      (e = v("div")),
        A(t.$$.fragment),
        (n = U()),
        (s = v("div")),
        (i = v("div")),
        f && f.c(),
        (l = U()),
        p && p.c(),
        (o = U()),
        b && b.c(),
        (a = U()),
        (u = v("div")),
        y && y.c(),
        (c = U()),
        $ && $.c(),
        (d = U()),
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
    m(S, I) {
      R(S, e, I),
        O(t, e, null),
        R(S, n, I),
        R(S, s, I),
        k(s, i),
        f && f.m(i, null),
        k(i, l),
        p && p.m(i, null),
        k(i, o),
        b && b.m(i, null),
        k(s, a),
        k(s, u),
        y && y.m(u, null),
        k(u, c),
        $ && $.m(u, null),
        k(u, d),
        w && w.m(u, null),
        (h = !0);
    },
    p(S, I) {
      var L;
      const q = {};
      I & 32 && (q.source = S[5].description ?? ""),
        t.$set(q),
        S[5].license
          ? f
            ? (f.p(S, I), I & 32 && m(f, 1))
            : ((f = Kn(S)), f.c(), m(f, 1), f.m(i, l))
          : f &&
            (G(),
            _(f, 1, 1, () => {
              f = null;
            }),
            V()),
        S[5].author
          ? p
            ? p.p(S, I)
            : ((p = Hn(S)), p.c(), p.m(i, o))
          : p && (p.d(1), (p = null)),
        S[9].data
          ? b
            ? b.p(S, I)
            : ((b = Gn(S)), b.c(), b.m(i, null))
          : b && (b.d(1), (b = null)),
        (L = S[5].repository) != null && L.url
          ? y
            ? (y.p(S, I), I & 32 && m(y, 1))
            : ((y = Vn(S)), y.c(), m(y, 1), y.m(u, c))
          : y &&
            (G(),
            _(y, 1, 1, () => {
              y = null;
            }),
            V()),
        S[5].homepage
          ? $
            ? ($.p(S, I), I & 32 && m($, 1))
            : (($ = Wn(S)), $.c(), m($, 1), $.m(u, d))
          : $ &&
            (G(),
            _($, 1, 1, () => {
              $ = null;
            }),
            V()),
        S[5].bugs
          ? w
            ? (w.p(S, I), I & 32 && m(w, 1))
            : ((w = xn(S)), w.c(), m(w, 1), w.m(u, null))
          : w &&
            (G(),
            _(w, 1, 1, () => {
              w = null;
            }),
            V());
    },
    i(S) {
      h || (m(t.$$.fragment, S), m(f), m(y), m($), m(w), (h = !0));
    },
    o(S) {
      _(t.$$.fragment, S), _(f), _(y), _($), _(w), (h = !1);
    },
    d(S) {
      S && C(e),
        E(t),
        S && C(n),
        S && C(s),
        f && f.d(),
        p && p.d(),
        b && b.d(),
        y && y.d(),
        $ && $.d(),
        w && w.d();
    },
  };
}
function Kn(r) {
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
          A(t.$$.fragment),
          (n = U()),
          (s = v("span")),
          (l = W(i)),
          g(e, "class", "flex gap-1 items-center");
      },
      m(a, u) {
        R(a, e, u), O(t, e, null), k(e, n), k(e, s), k(s, l), (o = !0);
      },
      p(a, u) {
        (!o || u & 32) && i !== (i = (a[5].license ?? "") + "") && de(l, i);
      },
      i(a) {
        o || (m(t.$$.fragment, a), (o = !0));
      },
      o(a) {
        _(t.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && C(e), E(t);
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
        (n = U()),
        (s = v("span")),
        (l = W(i)),
        g(s, "class", "font-semibold"),
        g(e, "class", "text-granny-smith-apple flex items-center gap-2");
    },
    m(o, a) {
      R(o, e, a), k(e, t), k(e, n), k(e, s), k(s, l);
    },
    p(o, a) {
      a & 32 && i !== (i = o[5].author.name + "") && de(l, i);
    },
    d(o) {
      o && C(e);
    },
  };
}
function Gn(r) {
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
        (t = W(`Bundle size
              `)),
        (n = v("span")),
        (i = W(s)),
        (l = W("kb")),
        (o = W(`
              (gzipped) |
              `)),
        (a = v("span")),
        (c = W(u)),
        (d = W("kb")),
        (h = W(" (uncompressed)")),
        g(n, "class", "font-semibold"),
        g(a, "class", "font-semibold");
    },
    m(f, p) {
      R(f, e, p),
        k(e, t),
        k(e, n),
        k(n, i),
        k(n, l),
        k(e, o),
        k(e, a),
        k(a, c),
        k(a, d),
        k(e, h);
    },
    p(f, p) {
      p & 512 &&
        s !== (s = (f[9].data.gzip / 1024).toFixed(1) + "") &&
        de(i, s),
        p & 512 &&
          u !== (u = (f[9].data.size / 1024).toFixed(1) + "") &&
          de(c, u);
    },
    d(f) {
      f && C(e);
    },
  };
}
function Vn(r) {
  let e, t, n, s;
  return (
    (t = new jr({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = v("a")),
          A(t.$$.fragment),
          g(e, "href", (n = r[5].repository.url.replace(/^git\+/, ""))),
          g(e, "target", "_blank"),
          g(e, "class", "hover:underline"),
          g(e, "rel", "noopener noreferrer"),
          g(e, "title", "Github");
      },
      m(i, l) {
        R(i, e, l), O(t, e, null), (s = !0);
      },
      p(i, l) {
        (!s ||
          (l & 32 && n !== (n = i[5].repository.url.replace(/^git\+/, "")))) &&
          g(e, "href", n);
      },
      i(i) {
        s || (m(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && C(e), E(t);
      },
    }
  );
}
function Wn(r) {
  let e, t, n, s;
  return (
    (t = new Gr({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = v("a")),
          A(t.$$.fragment),
          g(e, "href", (n = r[5].homepage)),
          g(e, "target", "_blank"),
          g(e, "class", "hover:underline"),
          g(e, "rel", "noopener noreferrer"),
          g(e, "title", "Homepage");
      },
      m(i, l) {
        R(i, e, l), O(t, e, null), (s = !0);
      },
      p(i, l) {
        (!s || (l & 32 && n !== (n = i[5].homepage))) && g(e, "href", n);
      },
      i(i) {
        s || (m(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && C(e), E(t);
      },
    }
  );
}
function xn(r) {
  let e, t, n, s;
  return (
    (t = new Ir({ props: { class: "h-5 w-5" } })),
    {
      c() {
        (e = v("a")),
          A(t.$$.fragment),
          g(e, "href", (n = r[5].bugs.url)),
          g(e, "target", "_blank"),
          g(e, "class", "hover:underline"),
          g(e, "rel", "noopener noreferrer"),
          g(e, "title", "Bugs");
      },
      m(i, l) {
        R(i, e, l), O(t, e, null), (s = !0);
      },
      p(i, l) {
        (!s || (l & 32 && n !== (n = i[5].bugs.url))) && g(e, "href", n);
      },
      i(i) {
        s || (m(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && C(e), E(t);
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
    u = bn(Jn, r[0]) + "",
    c,
    d,
    h,
    f,
    p,
    b,
    y,
    $,
    w,
    P,
    S,
    I;
  o = new sl({ props: { class: "h-6 w-6" } });
  const q = [Aa, Ea],
    L = [];
  function M(H, te) {
    return H[4] ? 0 : 1;
  }
  (p = M(r)), (b = L[p] = q[p](r));
  let N = r[6] && r[5] && Zn(r);
  return {
    c() {
      (e = v("li")),
        (t = v("div")),
        (n = v("div")),
        (s = v("div")),
        (i = v("a")),
        (l = v("div")),
        A(o.$$.fragment),
        (a = U()),
        (c = W(u)),
        (h = U()),
        (f = v("div")),
        b.c(),
        (y = U()),
        N && N.c(),
        fe(l, "hidden", !r[6]),
        g(i, "href", (d = `https://npmjs.com/package/${r[0]}`)),
        g(i, "target", "_blank"),
        g(
          i,
          "class",
          "hover:underline font-medium whitespace-nowrap flex items-center gap-2 text-lg"
        ),
        g(i, "rel", "noopener noreferrer"),
        fe(i, "pt-1", r[6]),
        g(f, "class", "grid place-items-end gap-2 items-center"),
        g(n, "class", "flex justify-between p-4 py-2"),
        g(
          t,
          "class",
          "transition-[transform,background] duration-300 ease-in-out svelte-8luwom"
        ),
        fe(t, "expanded", r[6]),
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
    m(H, te) {
      R(H, e, te),
        k(e, t),
        k(t, n),
        k(n, s),
        k(s, i),
        k(i, l),
        O(o, l, null),
        k(i, a),
        k(i, c),
        k(n, h),
        k(n, f),
        L[p].m(f, null),
        k(t, y),
        N && N.m(t, null),
        (P = !0),
        S || ((I = [$e(e, "click", r[12]), $e(e, "keydown", r[12])]), (S = !0));
    },
    p(H, [te]) {
      (!P || te & 64) && fe(l, "hidden", !H[6]),
        (!P || te & 1) && u !== (u = bn(Jn, H[0]) + "") && de(c, u),
        (!P || (te & 1 && d !== (d = `https://npmjs.com/package/${H[0]}`))) &&
          g(i, "href", d),
        (!P || te & 64) && fe(i, "pt-1", H[6]);
      let ee = p;
      (p = M(H)),
        p === ee
          ? L[p].p(H, te)
          : (G(),
            _(L[ee], 1, 1, () => {
              L[ee] = null;
            }),
            V(),
            (b = L[p]),
            b ? b.p(H, te) : ((b = L[p] = q[p](H)), b.c()),
            m(b, 1),
            b.m(f, null)),
        H[6] && H[5]
          ? N
            ? (N.p(H, te), te & 96 && m(N, 1))
            : ((N = Zn(H)), N.c(), m(N, 1), N.m(t, null))
          : N &&
            (G(),
            _(N, 1, 1, () => {
              N = null;
            }),
            V()),
        (!P || te & 64) && fe(t, "expanded", H[6]),
        (!P ||
          (te & 32768 &&
            $ !==
              ($ =
                ln("animate-fadeIn transition-opacity ".concat(H[15].class)) +
                " svelte-8luwom"))) &&
          g(e, "class", $),
        (!P ||
          (te & 136 &&
            w !==
              (w = `animation-delay: ${(H[3] + 1) * H[14]}s; opacity: ${
                H[7] ? 0.4 : 1
              }!important;`))) &&
          g(e, "style", w);
    },
    i(H) {
      P || (m(o.$$.fragment, H), m(b), m(N), (P = !0));
    },
    o(H) {
      _(o.$$.fragment, H), _(b), _(N), (P = !1);
    },
    d(H) {
      H && C(e), E(o), L[p].d(), N && N.d(), (S = !1), Pe(I);
    },
  };
}
const Jn = 36;
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
    { selectedPackagePath: p = "" } = e;
  const b = St(),
    y = Ks();
  qt(r, y, (L) => t(8, (i = L)));
  async function $(L) {
    try {
      const M = await i.mutateAsync({ packages: L, path: p });
      b.setQueryData(st.package(p), Hs(M));
    } catch (M) {
      console.log("Failed to upgrade packages:", { originalError: M });
    }
  }
  function w() {
    f === c ? t(16, (f = -1)) : t(16, (f = c));
  }
  function P(L) {
    L.key === "Escape" && t(16, (f = -1));
  }
  const S = pr(o);
  qt(r, S, (L) => t(9, (l = L))),
    Ge(() => {
      window.addEventListener("keydown", P);
    }),
    Kt(() => {
      window.removeEventListener("keydown", P);
    });
  const I = 1 / 30,
    q = (L) => {
      L.stopPropagation(), $([{ name: o, version: a, latest: u, meta: h }]);
    };
  return (
    (r.$$set = (L) => {
      t(15, (e = K(K({}, e), oe(L)))),
        "name" in L && t(0, (o = L.name)),
        "version" in L && t(1, (a = L.version)),
        "latest" in L && t(2, (u = L.latest)),
        "index" in L && t(3, (c = L.index)),
        "isLatest" in L && t(4, (d = L.isLatest)),
        "meta" in L && t(5, (h = L.meta)),
        "expandedRowIndex" in L && t(16, (f = L.expandedRowIndex)),
        "selectedPackagePath" in L && t(17, (p = L.selectedPackagePath));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 65544 && t(6, (n = f === c)),
        r.$$.dirty & 65600 && t(7, (s = !n && f !== -1));
    }),
    (e = oe(e)),
    [o, a, u, c, d, h, n, s, i, l, y, $, w, S, I, e, f, p, q]
  );
}
class za extends Z {
  constructor(e) {
    super(),
      B(this, e, Ma, qa, j, {
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
function Xn(r, e, t) {
  const n = r.slice();
  return (n[5] = e[t]), n;
}
function Yn(r) {
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
        (s = W(n)),
        g(t, "data-page", (i = r[5])),
        g(t, "class", "btn-arrow text-xl svelte-16bdnnj"),
        fe(t, "bg-castleton-green", r[5] === r[0]);
    },
    m(a, u) {
      R(a, e, u), k(e, t), k(t, s), l || ((o = $e(t, "click", r[2])), (l = !0));
    },
    p(a, u) {
      u & 2 && n !== (n = a[5] + 1 + "") && de(s, n),
        u & 2 && i !== (i = a[5]) && g(t, "data-page", i),
        u & 3 && fe(t, "bg-castleton-green", a[5] === a[0]);
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
    p = Bt(0, r[1]),
    b = [];
  for (let y = 0; y < p.length; y += 1) b[y] = Yn(Xn(r, p, y));
  return {
    c() {
      (e = v("ul")), (t = v("li")), (n = v("button")), (s = W("◄")), (l = U());
      for (let y = 0; y < b.length; y += 1) b[y].c();
      (o = U()),
        (a = v("li")),
        (u = v("button")),
        (c = W("►")),
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
    m(y, $) {
      R(y, e, $), k(e, t), k(t, n), k(n, s), k(e, l);
      for (let w = 0; w < b.length; w += 1) b[w] && b[w].m(e, null);
      k(e, o),
        k(e, a),
        k(a, u),
        k(u, c),
        h || ((f = [$e(n, "click", r[4]), $e(u, "click", r[3])]), (h = !0));
    },
    p(y, [$]) {
      if (($ & 1 && i !== (i = y[0] === 0) && (n.disabled = i), $ & 7)) {
        p = Bt(0, y[1]);
        let w;
        for (w = 0; w < p.length; w += 1) {
          const P = Xn(y, p, w);
          b[w] ? b[w].p(P, $) : ((b[w] = Yn(P)), b[w].c(), b[w].m(e, o));
        }
        for (; w < b.length; w += 1) b[w].d(1);
        b.length = p.length;
      }
      $ & 3 && d !== (d = y[0] === y[1] - 1) && (u.disabled = d);
    },
    i: se,
    o: se,
    d(y) {
      y && C(e), Ce(b, y), (h = !1), Pe(f);
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
class Fa extends Z {
  constructor(e) {
    super(), B(this, e, Na, Da, j, { pages: 1, pageIndex: 0 });
  }
}
function es(r, e, t) {
  const n = r.slice();
  return (
    (n[33] = e[t].name),
    (n[34] = e[t].version),
    (n[35] = e[t].latest),
    (n[36] = e[t].isLatest),
    (n[37] = e[t].meta),
    (n[39] = t),
    n
  );
}
function ts(r, e, t) {
  const n = r.slice();
  return (n[40] = e[t].keys), (n[41] = e[t].label), n;
}
function ns(r, e, t) {
  const n = r.slice();
  return (n[44] = e[t].symbol), (n[45] = e[t].rotation), n;
}
function Qa(r) {
  let e, t;
  return (
    (e = new Xr({})),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
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
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function ss(r) {
  let e,
    t,
    n,
    s,
    i = r[44] + "",
    l,
    o,
    a;
  return (
    (t = new Ws({
      props: { class: "h-3 w-3", style: `transform: rotate(${r[45]}deg);` },
    })),
    {
      c() {
        (e = v("kbd")),
          A(t.$$.fragment),
          (n = U()),
          (s = v("span")),
          (l = W(i)),
          (o = U()),
          g(s, "class", "sr-only"),
          g(
            e,
            "class",
            "text-sm font-semibold flex p-1.5 bg-castleton-green/40 rounded"
          );
      },
      m(u, c) {
        R(u, e, c), O(t, e, null), k(e, n), k(e, s), k(s, l), k(e, o), (a = !0);
      },
      p: se,
      i(u) {
        a || (m(t.$$.fragment, u), (a = !0));
      },
      o(u) {
        _(t.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && C(e), E(t);
      },
    }
  );
}
function is(r) {
  let e,
    t,
    n,
    s,
    i = r[41] + "",
    l,
    o,
    a,
    u = r[40],
    c = [];
  for (let h = 0; h < u.length; h += 1) c[h] = ss(ns(r, u, h));
  const d = (h) =>
    _(c[h], 1, 1, () => {
      c[h] = null;
    });
  return {
    c() {
      (e = v("li")), (t = v("div"));
      for (let h = 0; h < c.length; h += 1) c[h].c();
      (n = U()),
        (s = v("span")),
        (l = W(i)),
        (o = U()),
        g(t, "class", "flex gap-2"),
        g(s, "class", "ml-2 text-sm"),
        g(e, "class", "flex items-center");
    },
    m(h, f) {
      R(h, e, f), k(e, t);
      for (let p = 0; p < c.length; p += 1) c[p] && c[p].m(t, null);
      k(e, n), k(e, s), k(s, l), k(e, o), (a = !0);
    },
    p(h, f) {
      if (f[0] & 262144) {
        u = h[40];
        let p;
        for (p = 0; p < u.length; p += 1) {
          const b = ns(h, u, p);
          c[p]
            ? (c[p].p(b, f), m(c[p], 1))
            : ((c[p] = ss(b)), c[p].c(), m(c[p], 1), c[p].m(t, null));
        }
        for (G(), p = u.length; p < c.length; p += 1) d(p);
        V();
      }
    },
    i(h) {
      if (!a) {
        for (let f = 0; f < u.length; f += 1) m(c[f]);
        a = !0;
      }
    },
    o(h) {
      c = c.filter(Boolean);
      for (let f = 0; f < c.length; f += 1) _(c[f]);
      a = !1;
    },
    d(h) {
      h && C(e), Ce(c, h);
    },
  };
}
function ja(r) {
  let e;
  return {
    c() {
      e = W("Ctrl+K");
    },
    m(t, n) {
      R(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function Ba(r) {
  let e;
  return {
    c() {
      e = W("⌘+K");
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
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
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
        $$slots: { default: [Za] },
        $$scope: { ctx: r },
      },
    })),
    e.$on("click", r[28]),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s[0] & 16384 && (i.disabled = n[14].isLoading),
          s[0] & 16384 && (i.isLoading = n[14].isLoading),
          s[1] & 131072 && (i.$$scope = { dirty: s, ctx: n }),
          e.$set(i);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Za(r) {
  let e;
  return {
    c() {
      e = W("Upgrade all");
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
    r[29](a);
  }
  function l(a) {
    r[30](a);
  }
  let o = {
    index: r[39],
    name: r[33],
    version: r[34],
    latest: r[35],
    isLatest: r[36],
    meta: r[37],
    class: r[39] !== r[12].length - 1 && r[39] !== r[6] ? "border-b" : "",
  };
  return (
    r[1] !== void 0 && (o.selectedPackagePath = r[1]),
    r[6] !== void 0 && (o.expandedRowIndex = r[6]),
    (e = new za({ props: o })),
    Ee.push(() => et(e, "selectedPackagePath", i)),
    Ee.push(() => et(e, "expandedRowIndex", l)),
    {
      c() {
        A(e.$$.fragment);
      },
      m(a, u) {
        O(e, a, u), (s = !0);
      },
      p(a, u) {
        const c = {};
        u[0] & 4096 && (c.name = a[33]),
          u[0] & 4096 && (c.version = a[34]),
          u[0] & 4096 && (c.latest = a[35]),
          u[0] & 4096 && (c.isLatest = a[36]),
          u[0] & 4096 && (c.meta = a[37]),
          u[0] & 4160 &&
            (c.class =
              a[39] !== a[12].length - 1 && a[39] !== a[6] ? "border-b" : ""),
          !t &&
            u[0] & 2 &&
            ((t = !0), (c.selectedPackagePath = a[1]), Ye(() => (t = !1))),
          !n &&
            u[0] & 64 &&
            ((n = !0), (c.expandedRowIndex = a[6]), Ye(() => (n = !1))),
          e.$set(c);
      },
      i(a) {
        s || (m(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        _(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        E(e, a);
      },
    }
  );
}
function as(r) {
  let e, t, n, s, i;
  function l(a) {
    r[31](a);
  }
  let o = { pages: r[13] };
  return (
    r[3] !== void 0 && (o.pageIndex = r[3]),
    (n = new Fa({ props: o })),
    Ee.push(() => et(n, "pageIndex", l)),
    {
      c() {
        (e = v("footer")),
          (t = v("div")),
          A(n.$$.fragment),
          g(t, "class", "bg-slate-900/90 rounded-full"),
          g(e, "class", "grid place-items-center");
      },
      m(a, u) {
        R(a, e, u), k(e, t), O(n, t, null), (i = !0);
      },
      p(a, u) {
        const c = {};
        u[0] & 8192 && (c.pages = a[13]),
          !s &&
            u[0] & 8 &&
            ((s = !0), (c.pageIndex = a[3]), Ye(() => (s = !1))),
          n.$set(c);
      },
      i(a) {
        i || (m(n.$$.fragment, a), (i = !0));
      },
      o(a) {
        _(n.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && C(e), E(n);
      },
    }
  );
}
function Ka(r) {
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
    p,
    b,
    y,
    $,
    w,
    P,
    S = r[0] === "dependencies" ? "Dependencies" : "Dev Dependencies",
    I,
    q,
    L,
    M = r[5].length + "",
    N,
    H,
    te = r[2].length + "",
    ee,
    ke,
    ot,
    Ue,
    at,
    je,
    Ie,
    ut,
    D,
    Re,
    Yt;
  const en = [Ua, Qa],
    qe = [];
  function tn(z, ne) {
    return z[7] ? 0 : 1;
  }
  (s = tn(r)), (i = qe[s] = en[s](r));
  let Me = r[18],
    ue = [];
  for (let z = 0; z < Me.length; z += 1) ue[z] = is(ts(r, Me, z));
  const li = (z) =>
    _(ue[z], 1, 1, () => {
      ue[z] = null;
    });
  function oi(z, ne) {
    return z[15] ? Ba : ja;
  }
  let Pt = oi(r)(r),
    ge = r[10] && rs(),
    pe = !r[10] && ls(r),
    ze = r[12],
    ce = [];
  for (let z = 0; z < ze.length; z += 1) ce[z] = os(es(r, ze, z));
  const ai = (z) =>
    _(ce[z], 1, 1, () => {
      ce[z] = null;
    });
  let me = r[13] > 1 && as(r);
  return {
    c() {
      (e = v("div")),
        (t = v("aside")),
        (n = v("button")),
        i.c(),
        (l = U()),
        (o = v("ul"));
      for (let z = 0; z < ue.length; z += 1) ue[z].c();
      (u = U()),
        (c = v("section")),
        (d = v("div")),
        (h = v("input")),
        (f = U()),
        (p = v("kbd")),
        (b = v("span")),
        Pt.c(),
        (y = U()),
        ($ = v("header")),
        (w = v("div")),
        (P = v("div")),
        (I = W(S)),
        (q = U()),
        (L = v("span")),
        (N = W(M)),
        (H = W("/")),
        (ee = W(te)),
        (ke = U()),
        ge && ge.c(),
        (ot = U()),
        (Ue = v("div")),
        pe && pe.c(),
        (at = U()),
        (je = v("main")),
        (Ie = v("ul"));
      for (let z = 0; z < ce.length; z += 1) ce[z].c();
      (ut = U()),
        me && me.c(),
        g(n, "class", "help-trigger svelte-1lgocty"),
        fe(n, "hidden", r[7]),
        g(o, "class", "bg-slate-900/60 p-4 rounded-xl grid gap-2 opacity-10"),
        g(o, "aria-hidden", (a = !r[7])),
        fe(o, "opacity-100", r[7]),
        g(
          t,
          "class",
          "absolute right-0 top-8 transition-all duration-300 ease-in"
        ),
        fe(t, "translate-x-64", r[7]),
        g(h, "type", "search"),
        g(h, "class", "search-input svelte-1lgocty"),
        g(h, "placeholder", "package name or version"),
        g(b, "class", "text-xs font-mono"),
        g(
          p,
          "class",
          "kbd absolute right-2 top-2 transition-opacity opacity-50 group-hover:opacity-100"
        ),
        g(d, "class", "relative group"),
        g(
          L,
          "class",
          "text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
        ),
        g(w, "class", "flex items-center justify-between w-full"),
        g(
          $,
          "class",
          "p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2"
        ),
        g(Ie, "class", "grid"),
        g(je, "class", "min-h-[32rem] mx-2"),
        g(
          c,
          "class",
          "bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2"
        ),
        g(e, "class", "relative");
    },
    m(z, ne) {
      R(z, e, ne), k(e, t), k(t, n), qe[s].m(n, null), k(t, l), k(t, o);
      for (let ve = 0; ve < ue.length; ve += 1) ue[ve] && ue[ve].m(o, null);
      k(e, u),
        k(e, c),
        k(c, d),
        k(d, h),
        r[24](h),
        on(h, r[4]),
        k(d, f),
        k(d, p),
        k(p, b),
        Pt.m(b, null),
        k(c, y),
        k(c, $),
        k($, w),
        k(w, P),
        k(P, I),
        k(P, q),
        k(P, L),
        k(L, N),
        k(L, H),
        k(L, ee),
        k(w, ke),
        ge && ge.m(w, null),
        k($, ot),
        k($, Ue),
        pe && pe.m(Ue, null),
        k(c, at),
        k(c, je),
        k(je, Ie);
      for (let ve = 0; ve < ce.length; ve += 1) ce[ve] && ce[ve].m(Ie, null);
      k(c, ut),
        me && me.m(c, null),
        (D = !0),
        Re ||
          ((Yt = [
            $e(n, "click", r[22]),
            hi(pl.call(null, t)),
            $e(t, "outsideclick", r[23]),
            $e(h, "input", r[25]),
            $e(h, "focus", r[26]),
            $e(h, "blur", r[27]),
          ]),
          (Re = !0));
    },
    p(z, ne) {
      let ve = s;
      if (
        ((s = tn(z)),
        s !== ve &&
          (G(),
          _(qe[ve], 1, 1, () => {
            qe[ve] = null;
          }),
          V(),
          (i = qe[s]),
          i || ((i = qe[s] = en[s](z)), i.c()),
          m(i, 1),
          i.m(n, null)),
        (!D || ne[0] & 128) && fe(n, "hidden", z[7]),
        ne[0] & 262144)
      ) {
        Me = z[18];
        let ie;
        for (ie = 0; ie < Me.length; ie += 1) {
          const We = ts(z, Me, ie);
          ue[ie]
            ? (ue[ie].p(We, ne), m(ue[ie], 1))
            : ((ue[ie] = is(We)), ue[ie].c(), m(ue[ie], 1), ue[ie].m(o, null));
        }
        for (G(), ie = Me.length; ie < ue.length; ie += 1) li(ie);
        V();
      }
      if (
        ((!D || (ne[0] & 128 && a !== (a = !z[7]))) && g(o, "aria-hidden", a),
        (!D || ne[0] & 128) && fe(o, "opacity-100", z[7]),
        (!D || ne[0] & 128) && fe(t, "translate-x-64", z[7]),
        ne[0] & 16 && h.value !== z[4] && on(h, z[4]),
        (!D || ne[0] & 1) &&
          S !==
            (S =
              z[0] === "dependencies" ? "Dependencies" : "Dev Dependencies") &&
          de(I, S),
        (!D || ne[0] & 32) && M !== (M = z[5].length + "") && de(N, M),
        (!D || ne[0] & 4) && te !== (te = z[2].length + "") && de(ee, te),
        z[10]
          ? ge
            ? ne[0] & 1024 && m(ge, 1)
            : ((ge = rs()), ge.c(), m(ge, 1), ge.m(w, null))
          : ge &&
            (G(),
            _(ge, 1, 1, () => {
              ge = null;
            }),
            V()),
        z[10]
          ? pe &&
            (G(),
            _(pe, 1, 1, () => {
              pe = null;
            }),
            V())
          : pe
          ? (pe.p(z, ne), ne[0] & 1024 && m(pe, 1))
          : ((pe = ls(z)), pe.c(), m(pe, 1), pe.m(Ue, null)),
        ne[0] & 4162)
      ) {
        ze = z[12];
        let ie;
        for (ie = 0; ie < ze.length; ie += 1) {
          const We = es(z, ze, ie);
          ce[ie]
            ? (ce[ie].p(We, ne), m(ce[ie], 1))
            : ((ce[ie] = os(We)), ce[ie].c(), m(ce[ie], 1), ce[ie].m(Ie, null));
        }
        for (G(), ie = ze.length; ie < ce.length; ie += 1) ai(ie);
        V();
      }
      z[13] > 1
        ? me
          ? (me.p(z, ne), ne[0] & 8192 && m(me, 1))
          : ((me = as(z)), me.c(), m(me, 1), me.m(c, null))
        : me &&
          (G(),
          _(me, 1, 1, () => {
            me = null;
          }),
          V());
    },
    i(z) {
      if (!D) {
        m(i);
        for (let ne = 0; ne < Me.length; ne += 1) m(ue[ne]);
        m(ge), m(pe);
        for (let ne = 0; ne < ze.length; ne += 1) m(ce[ne]);
        m(me), (D = !0);
      }
    },
    o(z) {
      _(i), (ue = ue.filter(Boolean));
      for (let ne = 0; ne < ue.length; ne += 1) _(ue[ne]);
      _(ge), _(pe), (ce = ce.filter(Boolean));
      for (let ne = 0; ne < ce.length; ne += 1) _(ce[ne]);
      _(me), (D = !1);
    },
    d(z) {
      z && C(e),
        qe[s].d(),
        Ce(ue, z),
        r[24](null),
        Pt.d(),
        ge && ge.d(),
        pe && pe.d(),
        Ce(ce, z),
        me && me.d(),
        (Re = !1),
        Pe(Yt);
    },
  };
}
function Ha(r, e, t) {
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
    { entries: p = [] } = e,
    b = 0,
    y = -1,
    $ = "",
    w = !1,
    P = !1,
    S = null;
  const I = navigator.userAgent.includes("Mac OS X"),
    q = Ks();
  qt(r, q, (D) => t(14, (d = D)));
  const L = St();
  async function M(D) {
    try {
      const Re = await d.mutateAsync({ packages: D, path: f });
      L.setQueryData(st.package(f), Hs(Re)),
        await L.refetchQueries(st.package(f));
    } catch (Re) {
      console.log("Failed to upgrade packages:", { originalError: Re });
    }
  }
  mr((D) => {
    if (D.shiftKey)
      switch (D.key) {
        case "ArrowRight":
        case "ArrowLeft":
          D.preventDefault(),
            t(
              0,
              (h = h === "dependencies" ? "devDependencies" : "dependencies")
            ),
            t(3, (b = 0)),
            t(6, (y = -1));
          break;
      }
    if (D.ctrlKey || D.metaKey)
      switch (D.key) {
        case "k":
          D.preventDefault(), !P && S && S.focus();
          break;
      }
    switch (D.key) {
      case "ArrowUp":
        D.preventDefault(), y > 0 ? t(6, y--, y) : t(6, (y = o.length - 1));
        break;
      case "ArrowDown":
        D.preventDefault(), y < o.length - 1 ? t(6, y++, y) : t(6, (y = 0));
        break;
      case "ArrowLeft":
        b > 0 && (D.preventDefault(), t(3, b--, b), t(6, (y = -1)));
        break;
      case "ArrowRight":
        b < s - 1 && (D.preventDefault(), t(3, b++, b), t(6, (y = -1)));
        break;
      case "Escape":
        D.preventDefault(), w && t(7, (w = !1));
        break;
      case "h":
        P || (D.preventDefault(), t(7, (w = !w)));
        break;
    }
  });
  const N = [
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
    H = () => {
      t(7, (w = !w));
    },
    te = () => t(7, (w = !1));
  function ee(D) {
    Ee[D ? "unshift" : "push"](() => {
      (S = D), t(9, S);
    });
  }
  function ke() {
    ($ = this.value), t(4, $);
  }
  const ot = () => {
      t(8, (P = !0));
    },
    Ue = () => {
      t(8, (P = !1));
    },
    at = () => M(u);
  function je(D) {
    (f = D), t(1, f);
  }
  function Ie(D) {
    (y = D), t(6, y), t(0, h), t(4, $);
  }
  function ut(D) {
    (b = D), t(3, b), t(0, h), t(4, $);
  }
  return (
    (r.$$set = (D) => {
      "selectedTab" in D && t(0, (h = D.selectedTab)),
        "selectedPackagePath" in D && t(1, (f = D.selectedPackagePath)),
        "entries" in D && t(2, (p = D.entries));
    }),
    (r.$$.update = () => {
      r.$$.dirty[0] & 20 &&
        t(
          21,
          (n = p.filter(
            ({ name: D, version: Re }) =>
              D.toLowerCase().includes($.toLowerCase()) ||
              Re.toLowerCase().includes($.toLowerCase())
          ))
        ),
        r.$$.dirty[0] & 2097152 && t(13, (s = Math.ceil(n.length / Ot))),
        r.$$.dirty[0] & 2097152 &&
          t(
            19,
            (i = n
              .map((D) => ({ ...D, isLatest: Ds(D.version, D.latest) }))
              .sort((D, Re) =>
                D.isLatest && Re.isLatest
                  ? 0
                  : D.isLatest && !Re.isLatest
                  ? 1
                  : -1
              ))
          ),
        r.$$.dirty[0] & 1 && h && (t(3, (b = 0)), t(6, (y = -1))),
        r.$$.dirty[0] & 16 && $ && (t(3, (b = 0)), t(6, (y = -1))),
        r.$$.dirty[0] & 8 && t(20, (l = b * Ot)),
        r.$$.dirty[0] & 1572864 && t(12, (o = i.slice(l, l + Ot))),
        r.$$.dirty[0] & 524288 &&
          t(
            5,
            ([a, u] = Vs(Gs("isLatest"), i)),
            a,
            (t(11, u), t(19, i), t(21, n), t(2, p), t(4, $))
          ),
        r.$$.dirty[0] & 36 && t(10, (c = a.length === p.length));
    }),
    [
      h,
      f,
      p,
      b,
      $,
      a,
      y,
      w,
      P,
      S,
      c,
      u,
      o,
      s,
      d,
      I,
      q,
      M,
      N,
      i,
      l,
      n,
      H,
      te,
      ee,
      ke,
      ot,
      Ue,
      at,
      je,
      Ie,
      ut,
    ]
  );
}
class Ga extends Z {
  constructor(e) {
    super(),
      B(
        this,
        e,
        Ha,
        Ka,
        j,
        { selectedTab: 0, selectedPackagePath: 1, entries: 2 },
        null,
        [-1, -1]
      );
  }
}
const Va = "@greenbot/cli",
  Wa = "0.26.2",
  xa = ["greenbot", "cli", "package updater"],
  Ja = "An interactive package updater for npm based applications",
  Xa = "https://github.com/alanrsoares/greenbot",
  Ya = "MIT",
  eu = ["dist/", "bin/", "scripts/"],
  tu = "./bin/greenbot.cjs",
  nu = "module",
  su = {
    dev: "vite",
    build: "vite build",
    serve: "vite preview",
    check: "svelte-check --tsconfig ./tsconfig.json",
    preversion: "yarn build",
    release: "npm publish && git push && git push --tags",
    prepare: "husky install",
    postinstall: "node scripts/postinstall.cjs",
  },
  iu = {
    "@sveltejs/vite-plugin-svelte": "^2.4.1",
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
    svelte: "^3.59.2",
    "svelte-check": "^3.4.3",
    "svelte-preprocess": "^5.0.4",
    tailwindcss: "^3.3.2",
    tslib: "^2.5.3",
    typescript: "^5.1.3",
    vite: "^4.3.9",
    "vite-tsconfig-paths": "^4.2.0",
  },
  ru = {
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
    "svelte-markdown": "^0.2.3",
    "typewriter-effect": "^2.20.1",
  },
  It = {
    name: Va,
    version: Wa,
    keywords: xa,
    description: Ja,
    homepage: Xa,
    license: Ya,
    files: eu,
    bin: tu,
    type: nu,
    scripts: su,
    devDependencies: iu,
    dependencies: ru,
  };
const lu = (r) => ({}),
  us = (r) => ({}),
  ou = (r) => ({}),
  cs = (r) => ({});
function au(r) {
  let e, t, n, s, i, l, o, a, u, c, d, h, f, p, b, y, $, w, P, S, I;
  const q = r[1].logo,
    L = x(q, r, r[0], cs),
    M = r[1].version,
    N = x(M, r, r[0], us),
    H = r[1].default,
    te = x(H, r, r[0], null);
  return {
    c() {
      (e = v("div")),
        (t = v("header")),
        (n = v("nav")),
        (s = v("h1")),
        (i = v("div")),
        L && L.c(),
        (l = U()),
        (o = v("div")),
        (o.textContent = "_greenbot"),
        (a = U()),
        (u = v("span")),
        (u.textContent = `v${It.version}`),
        (c = U()),
        N && N.c(),
        (d = U()),
        (h = v("main")),
        te && te.c(),
        (f = U()),
        (p = v("footer")),
        (b = v("div")),
        (y = v("span")),
        (y.textContent = `${It.name}@v${It.version}`),
        ($ = U()),
        (w = v("br")),
        (P = U()),
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
        g(y, "class", "text-sm font-semibold"),
        g(S, "href", "https://github.com/alanrsoares"),
        g(S, "class", "inline-flex gap-1 items-center text-sm opacity-75"),
        g(b, "class", "max-w-xl m-auto text-center"),
        g(p, "class", "p-12"),
        g(e, "class", "layout svelte-4vwhv6");
    },
    m(ee, ke) {
      R(ee, e, ke),
        k(e, t),
        k(t, n),
        k(n, s),
        k(s, i),
        L && L.m(i, null),
        k(s, l),
        k(s, o),
        k(s, a),
        k(s, u),
        k(n, c),
        N && N.m(n, null),
        k(e, d),
        k(e, h),
        te && te.m(h, null),
        k(e, f),
        k(e, p),
        k(p, b),
        k(b, y),
        k(b, $),
        k(b, w),
        k(b, P),
        k(b, S),
        (I = !0);
    },
    p(ee, [ke]) {
      L &&
        L.p &&
        (!I || ke & 1) &&
        X(L, q, ee, ee[0], I ? J(q, ee[0], ke, ou) : Y(ee[0]), cs),
        N &&
          N.p &&
          (!I || ke & 1) &&
          X(N, M, ee, ee[0], I ? J(M, ee[0], ke, lu) : Y(ee[0]), us),
        te &&
          te.p &&
          (!I || ke & 1) &&
          X(te, H, ee, ee[0], I ? J(H, ee[0], ke, null) : Y(ee[0]), null);
    },
    i(ee) {
      I || (m(L, ee), m(N, ee), m(te, ee), (I = !0));
    },
    o(ee) {
      _(L, ee), _(N, ee), _(te, ee), (I = !1);
    },
    d(ee) {
      ee && C(e), L && L.d(ee), N && N.d(ee), te && te.d(ee);
    },
  };
}
function uu(r, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (r.$$set = (i) => {
      "$$scope" in i && t(0, (s = i.$$scope));
    }),
    [s, n]
  );
}
class cu extends Z {
  constructor(e) {
    super(), B(this, e, uu, au, j, {});
  }
}
function fu(r) {
  let e, t, n, s, i, l;
  return {
    c() {
      (e = we("svg")),
        (t = we("title")),
        (n = W(r[0])),
        (s = we("path")),
        g(s, "d", (i = r[1][r[0]])),
        g(s, "fill", "currentColor"),
        g(e, "role", "img"),
        g(e, "viewBox", "0 0 24 24"),
        g(e, "xmlns", "http://www.w3.org/2000/svg"),
        g(e, "class", (l = r[2].class));
    },
    m(o, a) {
      R(o, e, a), k(e, t), k(t, n), k(e, s);
    },
    p(o, [a]) {
      a & 1 && de(n, o[0]),
        a & 1 && i !== (i = o[1][o[0]]) && g(s, "d", i),
        a & 4 && l !== (l = o[2].class) && g(e, "class", l);
    },
    i: se,
    o: se,
    d(o) {
      o && C(e);
    },
  };
}
function hu(r, e, t) {
  let { kind: n } = e;
  const s = {
    yarn: "M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z",
    npm: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
    pnpm: "M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z",
  };
  return (
    (r.$$set = (i) => {
      t(2, (e = K(K({}, e), oe(i)))), "kind" in i && t(0, (n = i.kind));
    }),
    (e = oe(e)),
    [n, s, e]
  );
}
class du extends Z {
  constructor(e) {
    super(), B(this, e, hu, fu, j, { kind: 0 });
  }
}
function pu(r) {
  let e, t, n, s, i, l, o, a, u, c;
  return (
    (n = new du({ props: { kind: r[2], class: "h-4 w-4" } })),
    {
      c() {
        (e = v("a")),
          (t = v("div")),
          A(n.$$.fragment),
          (s = U()),
          (i = v("div")),
          (l = W(r[0])),
          (o = W(" @ ")),
          (a = W(r[1])),
          g(t, "class", "rounded-full -translate-x-2 bg-black/25 p-2.5"),
          g(i, "class", "font-mono font-medium -translate-x-2"),
          g(e, "target", "_blank"),
          g(e, "href", (u = `https://www.npmjs.com/package/${r[0]}`)),
          g(e, "rel", "noopener noreferrer"),
          g(e, "class", "svelte-2pn84z");
      },
      m(d, h) {
        R(d, e, h),
          k(e, t),
          O(n, t, null),
          k(e, s),
          k(e, i),
          k(i, l),
          k(i, o),
          k(i, a),
          (c = !0);
      },
      p(d, [h]) {
        const f = {};
        h & 4 && (f.kind = d[2]),
          n.$set(f),
          (!c || h & 1) && de(l, d[0]),
          (!c || h & 2) && de(a, d[1]),
          (!c ||
            (h & 1 && u !== (u = `https://www.npmjs.com/package/${d[0]}`))) &&
            g(e, "href", u);
      },
      i(d) {
        c || (m(n.$$.fragment, d), (c = !0));
      },
      o(d) {
        _(n.$$.fragment, d), (c = !1);
      },
      d(d) {
        d && C(e), E(n);
      },
    }
  );
}
function mu(r, e, t) {
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
class gu extends Z {
  constructor(e) {
    super(), B(this, e, mu, pu, j, { name: 0, version: 1, manager: 2 });
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
        (n = W(t)),
        (s = U()),
        g(e, "data-value", (i = r[3].value)),
        g(e, "class", "svelte-u0zq3l"),
        fe(e, "bg-castleton-green", r[0] === r[3].value);
    },
    m(a, u) {
      R(a, e, u),
        k(e, n),
        k(e, s),
        l ||
          ((o = $e(e, "click", function () {
            it(r[2].bind(null, r[3])) &&
              r[2].bind(null, r[3]).apply(this, arguments);
          })),
          (l = !0));
    },
    p(a, u) {
      (r = a),
        u & 2 && t !== (t = r[3].label + "") && de(n, t),
        u & 2 && i !== (i = r[3].value) && g(e, "data-value", i),
        u & 3 && fe(e, "bg-castleton-green", r[0] === r[3].value);
    },
    d(a) {
      a && C(e), (l = !1), o();
    },
  };
}
function _u(r) {
  let e,
    t = r[1],
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
        t = s[1];
        let l;
        for (l = 0; l < t.length; l += 1) {
          const o = fs(s, t, l);
          n[l] ? n[l].p(o, i) : ((n[l] = hs(o)), n[l].c(), n[l].m(e, null));
        }
        for (; l < n.length; l += 1) n[l].d(1);
        n.length = t.length;
      }
    },
    i: se,
    o: se,
    d(s) {
      s && C(e), Ce(n, s);
    },
  };
}
function bu(r, e, t) {
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
class ku extends Z {
  constructor(e) {
    super(), B(this, e, bu, _u, j, { selectedTab: 0, tabs: 1, onChange: 2 });
  }
}
function yu(r) {
  let e, t, n;
  return {
    c() {
      (e = we("svg")),
        (t = we("path")),
        (n = we("path")),
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
        fe(e, "animate-spin", r[0]);
    },
    m(s, i) {
      R(s, e, i), k(e, t), k(e, n);
    },
    p(s, [i]) {
      i & 1 && fe(e, "animate-spin", s[0]);
    },
    i: se,
    o: se,
    d(s) {
      s && C(e);
    },
  };
}
function wu(r, e, t) {
  let { animated: n = !1 } = e;
  return (
    (r.$$set = (s) => {
      "animated" in s && t(0, (n = s.animated));
    }),
    [n]
  );
}
class vu extends Z {
  constructor(e) {
    super(), B(this, e, wu, yu, j, { animated: 0 });
  }
}
function ds(r, e, t) {
  const n = r.slice();
  return (n[13] = e[t]), n;
}
function ps(r) {
  let e, t, n, s, i, l;
  return (
    (n = new vu({ props: { animated: !0 } })),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          A(n.$$.fragment),
          (s = U()),
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
        R(o, e, a), k(e, t), O(n, t, null), k(e, s), k(e, i), (l = !0);
      },
      i(o) {
        l || (m(n.$$.fragment, o), (l = !0));
      },
      o(o) {
        _(n.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), E(n);
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
  t = new ku({
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
    (s = new Ga({ props: d })),
    Ee.push(() => et(s, "selectedTab", u)),
    Ee.push(() => et(s, "selectedPackagePath", c)),
    {
      c() {
        a && a.c(), (e = U()), A(t.$$.fragment), (n = U()), A(s.$$.fragment);
      },
      m(f, p) {
        a && a.m(f, p),
          R(f, e, p),
          O(t, f, p),
          R(f, n, p),
          O(s, f, p),
          (o = !0);
      },
      p(f, p) {
        var $;
        ($ = f[2].data.workspaces) != null && $.length
          ? a
            ? a.p(f, p)
            : ((a = gs(f)), a.c(), a.m(e.parentNode, e))
          : a && (a.d(1), (a = null));
        const b = {};
        p & 1 && (b.selectedTab = f[0]), t.$set(b);
        const y = {};
        p & 8 && (y.entries = f[3]),
          !i && p & 1 && ((i = !0), (y.selectedTab = f[0]), Ye(() => (i = !1))),
          !l &&
            p & 2 &&
            ((l = !0), (y.selectedPackagePath = f[1]), Ye(() => (l = !1))),
          s.$set(y);
      },
      i(f) {
        o || (m(t.$$.fragment, f), m(s.$$.fragment, f), (o = !0));
      },
      o(f) {
        _(t.$$.fragment, f), _(s.$$.fragment, f), (o = !1);
      },
      d(f) {
        a && a.d(f), f && C(e), E(t, f), f && C(n), E(s, f);
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
    c = r[2].data.workspaces,
    d = [];
  for (let h = 0; h < c.length; h += 1) d[h] = _s(ds(r, c, h));
  return {
    c() {
      (e = v("div")),
        (t = v("label")),
        (s = W(n)),
        (i = U()),
        (l = v("select")),
        (o = v("option")),
        (o.textContent = "root");
      for (let h = 0; h < d.length; h += 1) d[h].c();
      (o.__value = ""),
        (o.value = o.__value),
        g(l, "class", "select select-sm"),
        r[1] === void 0 && kt(() => r[8].call(l)),
        g(e, "class", "flex justify-end");
    },
    m(h, f) {
      R(h, e, f), k(e, t), k(t, s), k(t, i), k(t, l), k(l, o);
      for (let p = 0; p < d.length; p += 1) d[p] && d[p].m(l, null);
      an(l, r[1], !0), a || ((u = $e(l, "change", r[8])), (a = !0));
    },
    p(h, f) {
      if (f & 4) {
        c = h[2].data.workspaces;
        let p;
        for (p = 0; p < c.length; p += 1) {
          const b = ds(h, c, p);
          d[p] ? d[p].p(b, f) : ((d[p] = _s(b)), d[p].c(), d[p].m(l, null));
        }
        for (; p < d.length; p += 1) d[p].d(1);
        d.length = c.length;
      }
      f & 6 && an(l, h[1]);
    },
    d(h) {
      h && C(e), Ce(d, h), (a = !1), u();
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
        (n = W(t)),
        (e.__value = s = r[13].path),
        (e.value = e.__value);
    },
    m(i, l) {
      R(i, e, l), k(e, n);
    },
    p(i, l) {
      l & 4 && t !== (t = i[13].name + "") && de(n, t),
        l & 4 &&
          s !== (s = i[13].path) &&
          ((e.__value = s), (e.value = e.__value));
    },
    d(i) {
      i && C(e);
    },
  };
}
function $u(r) {
  let e,
    t,
    n,
    s = r[2].isLoading && ps(),
    i = r[2].data && ms(r);
  return {
    c() {
      (e = v("div")),
        s && s.c(),
        (t = U()),
        i && i.c(),
        g(e, "class", "w-full grid gap-4");
    },
    m(l, o) {
      R(l, e, o), s && s.m(e, null), k(e, t), i && i.m(e, null), (n = !0);
    },
    p(l, o) {
      l[2].isLoading
        ? s
          ? o & 4 && m(s, 1)
          : ((s = ps()), s.c(), m(s, 1), s.m(e, t))
        : s &&
          (G(),
          _(s, 1, 1, () => {
            s = null;
          }),
          V()),
        l[2].data
          ? i
            ? (i.p(l, o), o & 4 && m(i, 1))
            : ((i = ms(l)), i.c(), m(i, 1), i.m(e, null))
          : i &&
            (G(),
            _(i, 1, 1, () => {
              i = null;
            }),
            V());
    },
    i(l) {
      n || (m(s), m(i), (n = !0));
    },
    o(l) {
      _(s), _(i), (n = !1);
    },
    d(l) {
      l && C(e), s && s.d(), i && i.d();
    },
  };
}
function Cu(r) {
  let e, t;
  return (
    (e = new br({ props: { mood: r[4], slot: "logo" } })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s & 16 && (i.mood = n[4]), e.$set(i);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function bs(r) {
  let e, t;
  return (
    (e = new gu({
      props: {
        name: r[2].data.name,
        version: r[2].data.version,
        manager: r[2].data.packageManager,
      },
    })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, s) {
        const i = {};
        s & 4 && (i.name = n[2].data.name),
          s & 4 && (i.version = n[2].data.version),
          s & 4 && (i.manager = n[2].data.packageManager),
          e.$set(i);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Ru(r) {
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
          ? (n.p(s, i), i & 4 && m(n, 1))
          : ((n = bs(s)), n.c(), m(n, 1), n.m(e, null))
        : n &&
          (G(),
          _(n, 1, 1, () => {
            n = null;
          }),
          V());
    },
    i(s) {
      t || (m(n), (t = !0));
    },
    o(s) {
      _(n), (t = !1);
    },
    d(s) {
      s && C(e), n && n.d();
    },
  };
}
function Lu(r) {
  let e, t;
  return (
    (e = new cu({
      props: {
        $$slots: { version: [Ru], logo: [Cu], default: [$u] },
        $$scope: { ctx: r },
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
        const i = {};
        s & 65567 && (i.$$scope = { dirty: s, ctx: n }), e.$set(i);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Su([r, e], t, n) {
  return {
    name: r,
    version: e,
    latest: r in t ? t[r] : e,
    meta: r in n ? n[r] : void 0,
  };
}
function Pu(r, e, t) {
  let n,
    s,
    i,
    l,
    o,
    a = se,
    u = () => (a(), (a = Zt(n, (w) => t(2, (o = w)))), n);
  r.$$.on_destroy.push(() => a());
  let c = "dependencies",
    d = "";
  Ge(() => {
    const P = new URLSearchParams(window.location.search).get("path");
    P !== null && t(1, (d = P));
  });
  function h({ value: w }) {
    t(0, (c = w));
  }
  function f(w, P) {
    return w.filter(([S, I]) => P[S] !== I);
  }
  function p(w) {
    if (!w || w.isLoading) return "asleep";
    if (w.error) return "dead";
    if (w.data) {
      const { dependencies: P, devDependencies: S, resolutions: I } = w.data,
        q = Object.entries({ ...P, ...S });
      return f(q, w.data.resolutions).filter(([M, N]) => !Ds(N, I[M])).length
        ? "angry"
        : "happy";
    }
    return "awake";
  }
  function b() {
    (d = pi(this)), t(1, d);
  }
  function y(w) {
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
        r.$$.dirty & 4 && t(4, (s = p(o))),
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
              return Su(
                w,
                ((P = o.data) == null ? void 0 : P.resolutions) ?? {},
                ((S = o.data) == null ? void 0 : S.meta) ?? {}
              );
            }))
          );
    }),
    [c, d, o, l, s, n, h, i, b, y, $]
  );
}
class Tu extends Z {
  constructor(e) {
    super(), B(this, e, Pu, Lu, j, {});
  }
}
function Ou(r) {
  let e, t;
  return (
    (e = new Tu({})),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Eu(r) {
  let e, t;
  return (
    (e = new Wi({
      props: { client: r[0], $$slots: { default: [Ou] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const i = {};
        s & 2 && (i.$$scope = { dirty: s, ctx: n }), e.$set(i);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        _(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        E(e, n);
      },
    }
  );
}
function Au(r) {
  return [new As()];
}
class Iu extends Z {
  constructor(e) {
    super(), B(this, e, Au, Eu, j, {});
  }
}
const ri = document.getElementById("app");
if (!ri) throw new Error("Could not find target element");
new Iu({ target: ri });
