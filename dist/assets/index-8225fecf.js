var nr = Object.defineProperty;
var sr = (i, e, t) =>
  e in i
    ? nr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var Jt = (i, e, t) => (sr(i, typeof e != "symbol" ? e + "" : e, t), t);
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
function Y() {}
function G(i, e) {
  for (const t in e) i[t] = e[t];
  return i;
}
function ds(i) {
  return i();
}
function Xt() {
  return Object.create(null);
}
function Le(i) {
  i.forEach(ds);
}
function st(i) {
  return typeof i == "function";
}
function U(i, e) {
  return i != i
    ? e == e
    : i !== e || (i && typeof i == "object") || typeof i == "function";
}
let ot;
function Yt(i, e) {
  return ot || (ot = document.createElement("a")), (ot.href = e), i === ot.href;
}
function rr(i) {
  return Object.keys(i).length === 0;
}
function Ft(i, ...e) {
  if (i == null) return Y;
  const t = i.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Tt(i, e, t) {
  i.$$.on_destroy.push(Ft(e, t));
}
function V(i, e, t, n) {
  if (i) {
    const s = ps(i, e, t, n);
    return i[0](s);
  }
}
function ps(i, e, t, n) {
  return i[1] && n ? G(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function W(i, e, t, n) {
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
function x(i, e, t, n, s, r) {
  if (s) {
    const l = ps(e, t, n, r);
    i.p(l, s);
  }
}
function J(i) {
  if (i.ctx.length > 32) {
    const e = [],
      t = i.ctx.length / 32;
    for (let n = 0; n < t; n++) e[n] = -1;
    return e;
  }
  return -1;
}
function oe(i) {
  const e = {};
  for (const t in i) t[0] !== "$" && (e[t] = i[t]);
  return e;
}
function pt(i, e) {
  const t = {};
  e = new Set(e);
  for (const n in i) !e.has(n) && n[0] !== "$" && (t[n] = i[n]);
  return t;
}
function ir(i) {
  return i && st(i.destroy) ? i.destroy : Y;
}
function y(i, e) {
  i.appendChild(e);
}
function R(i, e, t) {
  i.insertBefore(e, t || null);
}
function C(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function we(i, e) {
  for (let t = 0; t < i.length; t += 1) i[t] && i[t].d(e);
}
function $(i) {
  return document.createElement(i);
}
function be(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function X(i) {
  return document.createTextNode(i);
}
function Z() {
  return X(" ");
}
function se() {
  return X("");
}
function ye(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function _(i, e, t) {
  t == null
    ? i.removeAttribute(e)
    : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function mt(i, e) {
  for (const t in e) _(i, t, e[t]);
}
function lr(i) {
  return Array.from(i.childNodes);
}
function fe(i, e) {
  (e = "" + e), i.data !== e && (i.data = e);
}
function en(i, e) {
  i.value = e ?? "";
}
function tn(i, e, t) {
  for (let n = 0; n < i.options.length; n += 1) {
    const s = i.options[n];
    if (s.__value === e) {
      s.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (i.selectedIndex = -1);
}
function or(i) {
  const e = i.querySelector(":checked");
  return e && e.__value;
}
function ie(i, e, t) {
  i.classList[t ? "add" : "remove"](e);
}
function ar(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(i, t, n, e), s;
}
class ur {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, t, n = null) {
    this.e ||
      (this.is_svg
        ? (this.e = be(t.nodeName))
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
    for (let t = 0; t < this.n.length; t += 1) R(this.t, this.n[t], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(C);
  }
}
function le(i, e) {
  return new i(e);
}
let Je;
function xe(i) {
  Je = i;
}
function rt() {
  if (!Je) throw new Error("Function called outside component initialization");
  return Je;
}
function Ke(i) {
  rt().$$.on_mount.push(i);
}
function Qt(i) {
  rt().$$.on_destroy.push(i);
}
function cr() {
  const i = rt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const s = i.$$.callbacks[e];
    if (s) {
      const r = ar(e, t, { cancelable: n });
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
function ms(i, e) {
  return rt().$$.context.set(i, e), e;
}
function gs(i) {
  return rt().$$.context.get(i);
}
function fr(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Ze = [],
  De = [];
let He = [];
const Ot = [],
  hr = Promise.resolve();
let Et = !1;
function dr() {
  Et || ((Et = !0), hr.then(_s));
}
function gt(i) {
  He.push(i);
}
function Xe(i) {
  Ot.push(i);
}
const Rt = new Set();
let je = 0;
function _s() {
  if (je !== 0) return;
  const i = Je;
  do {
    try {
      for (; je < Ze.length; ) {
        const e = Ze[je];
        je++, xe(e), pr(e.$$);
      }
    } catch (e) {
      throw ((Ze.length = 0), (je = 0), e);
    }
    for (xe(null), Ze.length = 0, je = 0; De.length; ) De.pop()();
    for (let e = 0; e < He.length; e += 1) {
      const t = He[e];
      Rt.has(t) || (Rt.add(t), t());
    }
    He.length = 0;
  } while (Ze.length);
  for (; Ot.length; ) Ot.pop()();
  (Et = !1), Rt.clear(), xe(i);
}
function pr(i) {
  if (i.fragment !== null) {
    i.update(), Le(i.before_update);
    const e = i.dirty;
    (i.dirty = [-1]),
      i.fragment && i.fragment.p(i.ctx, e),
      i.after_update.forEach(gt);
  }
}
function mr(i) {
  const e = [],
    t = [];
  He.forEach((n) => (i.indexOf(n) === -1 ? e.push(n) : t.push(n))),
    t.forEach((n) => n()),
    (He = e);
}
const ct = new Set();
let Me;
function H() {
  Me = { r: 0, c: [], p: Me };
}
function K() {
  Me.r || Le(Me.c), (Me = Me.p);
}
function m(i, e) {
  i && i.i && (ct.delete(i), i.i(e));
}
function g(i, e, t, n) {
  if (i && i.o) {
    if (ct.has(i)) return;
    ct.add(i),
      Me.c.push(() => {
        ct.delete(i), n && (t && i.d(1), n());
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
function Ye(i, e, t) {
  const n = i.$$.props[e];
  n !== void 0 && ((i.$$.bound[n] = t), t(i.$$.ctx[n]));
}
function M(i) {
  i && i.c();
}
function I(i, e, t, n) {
  const { fragment: s, after_update: r } = i.$$;
  s && s.m(e, t),
    n ||
      gt(() => {
        const l = i.$$.on_mount.map(ds).filter(st);
        i.$$.on_destroy ? i.$$.on_destroy.push(...l) : Le(l),
          (i.$$.on_mount = []);
      }),
    r.forEach(gt);
}
function q(i, e) {
  const t = i.$$;
  t.fragment !== null &&
    (mr(t.after_update),
    Le(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function gr(i, e) {
  i.$$.dirty[0] === -1 && (Ze.push(i), dr(), i.$$.dirty.fill(0)),
    (i.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function j(i, e, t, n, s, r, l, o = [-1]) {
  const a = Je;
  xe(i);
  const u = (i.$$ = {
    fragment: null,
    ctx: [],
    props: r,
    update: Y,
    not_equal: s,
    bound: Xt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: Xt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root,
  });
  l && l(u.root);
  let c = !1;
  if (
    ((u.ctx = t
      ? t(i, e.props || {}, (d, h, ...f) => {
          const p = f.length ? f[0] : h;
          return (
            u.ctx &&
              s(u.ctx[d], (u.ctx[d] = p)) &&
              (!u.skip_bound && u.bound[d] && u.bound[d](p), c && gr(i, d)),
            h
          );
        })
      : []),
    u.update(),
    (c = !0),
    Le(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const d = lr(e.target);
      u.fragment && u.fragment.l(d), d.forEach(C);
    } else u.fragment && u.fragment.c();
    e.intro && m(i.$$.fragment),
      I(i, e.target, e.anchor, e.customElement),
      _s();
  }
  xe(a);
}
class B {
  $destroy() {
    q(this, 1), (this.$destroy = Y);
  }
  $on(e, t) {
    if (!st(t)) return Y;
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
      !rr(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
class Ge {
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
const et = typeof window > "u" || "Deno" in window;
function Ce() {}
function _r(i, e) {
  return typeof i == "function" ? i(e) : i;
}
function At(i) {
  return typeof i == "number" && i >= 0 && i !== 1 / 0;
}
function bs(i, e) {
  return Math.max(i + (e || 0) - Date.now(), 0);
}
function We(i, e, t) {
  return it(i)
    ? typeof e == "function"
      ? { ...t, queryKey: i, queryFn: e }
      : { ...e, queryKey: i }
    : i;
}
function br(i, e, t) {
  return it(i)
    ? typeof e == "function"
      ? { ...t, mutationKey: i, mutationFn: e }
      : { ...e, mutationKey: i }
    : typeof i == "function"
    ? { ...e, mutationFn: i }
    : { ...i };
}
function Pe(i, e, t) {
  return it(i) ? [{ ...e, queryKey: i }, t] : [i || {}, e];
}
function nn(i, e) {
  const {
    type: t = "all",
    exact: n,
    fetchStatus: s,
    predicate: r,
    queryKey: l,
    stale: o,
  } = i;
  if (it(l)) {
    if (n) {
      if (e.queryHash !== Ut(l, e.options)) return !1;
    } else if (!_t(e.queryKey, l)) return !1;
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
function sn(i, e) {
  const { exact: t, fetching: n, predicate: s, mutationKey: r } = i;
  if (it(r)) {
    if (!e.options.mutationKey) return !1;
    if (t) {
      if (ze(e.options.mutationKey) !== ze(r)) return !1;
    } else if (!_t(e.options.mutationKey, r)) return !1;
  }
  return !(
    (typeof n == "boolean" && (e.state.status === "loading") !== n) ||
    (s && !s(e))
  );
}
function Ut(i, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ze)(i);
}
function ze(i) {
  return JSON.stringify(i, (e, t) =>
    qt(t)
      ? Object.keys(t)
          .sort()
          .reduce((n, s) => ((n[s] = t[s]), n), {})
      : t
  );
}
function _t(i, e) {
  return ks(i, e);
}
function ks(i, e) {
  return i === e
    ? !0
    : typeof i != typeof e
    ? !1
    : i && e && typeof i == "object" && typeof e == "object"
    ? !Object.keys(e).some((t) => !ks(i[t], e[t]))
    : !1;
}
function ys(i, e) {
  if (i === e) return i;
  const t = rn(i) && rn(e);
  if (t || (qt(i) && qt(e))) {
    const n = t ? i.length : Object.keys(i).length,
      s = t ? e : Object.keys(e),
      r = s.length,
      l = t ? [] : {};
    let o = 0;
    for (let a = 0; a < r; a++) {
      const u = t ? a : s[a];
      (l[u] = ys(i[u], e[u])), l[u] === i[u] && o++;
    }
    return n === r && o === n ? i : l;
  }
  return e;
}
function It(i, e) {
  if ((i && !e) || (e && !i)) return !1;
  for (const t in i) if (i[t] !== e[t]) return !1;
  return !0;
}
function rn(i) {
  return Array.isArray(i) && i.length === Object.keys(i).length;
}
function qt(i) {
  if (!ln(i)) return !1;
  const e = i.constructor;
  if (typeof e > "u") return !0;
  const t = e.prototype;
  return !(!ln(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function ln(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function it(i) {
  return Array.isArray(i);
}
function ws(i) {
  return new Promise((e) => {
    setTimeout(e, i);
  });
}
function on(i) {
  ws(0).then(i);
}
function kr() {
  if (typeof AbortController == "function") return new AbortController();
}
function Mt(i, e, t) {
  return t.isDataEqual != null && t.isDataEqual(i, e)
    ? i
    : typeof t.structuralSharing == "function"
    ? t.structuralSharing(i, e)
    : t.structuralSharing !== !1
    ? ys(i, e)
    : e;
}
class yr extends Ge {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!et && window.addEventListener) {
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
const bt = new yr(),
  an = ["online", "offline"];
class wr extends Ge {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!et && window.addEventListener) {
          const t = () => e();
          return (
            an.forEach((n) => {
              window.addEventListener(n, t, !1);
            }),
            () => {
              an.forEach((n) => {
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
const kt = new wr();
function vr(i) {
  return Math.min(1e3 * 2 ** i, 3e4);
}
function $t(i) {
  return (i ?? "online") === "online" ? kt.isOnline() : !0;
}
class vs {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
}
function ft(i) {
  return i instanceof vs;
}
function $s(i) {
  let e = !1,
    t = 0,
    n = !1,
    s,
    r,
    l;
  const o = new Promise((k, v) => {
      (r = k), (l = v);
    }),
    a = (k) => {
      n || (f(new vs(k)), i.abort == null || i.abort());
    },
    u = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    d = () => !bt.isFocused() || (i.networkMode !== "always" && !kt.isOnline()),
    h = (k) => {
      n ||
        ((n = !0),
        i.onSuccess == null || i.onSuccess(k),
        s == null || s(),
        r(k));
    },
    f = (k) => {
      n ||
        ((n = !0), i.onError == null || i.onError(k), s == null || s(), l(k));
    },
    p = () =>
      new Promise((k) => {
        (s = (v) => {
          const w = n || !d();
          return w && k(v), w;
        }),
          i.onPause == null || i.onPause();
      }).then(() => {
        (s = void 0), n || i.onContinue == null || i.onContinue();
      }),
    b = () => {
      if (n) return;
      let k;
      try {
        k = i.fn();
      } catch (v) {
        k = Promise.reject(v);
      }
      Promise.resolve(k)
        .then(h)
        .catch((v) => {
          var w, T;
          if (n) return;
          const S = (w = i.retry) != null ? w : 3,
            E = (T = i.retryDelay) != null ? T : vr,
            L = typeof E == "function" ? E(t, v) : E,
            P =
              S === !0 ||
              (typeof S == "number" && t < S) ||
              (typeof S == "function" && S(t, v));
          if (e || !P) {
            f(v);
            return;
          }
          t++,
            i.onFail == null || i.onFail(t, v),
            ws(L)
              .then(() => {
                if (d()) return p();
              })
              .then(() => {
                e ? f(v) : b();
              });
        });
    };
  return (
    $t(i.networkMode) ? b() : p().then(b),
    {
      promise: o,
      cancel: a,
      continue: () => ((s == null ? void 0 : s()) ? o : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const jt = console;
function $r() {
  let i = [],
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
    r = (c) => {
      e
        ? i.push(c)
        : on(() => {
            t(c);
          });
    },
    l =
      (c) =>
      (...d) => {
        r(() => {
          c(...d);
        });
      },
    o = () => {
      const c = i;
      (i = []),
        c.length &&
          on(() => {
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
    schedule: r,
    setNotifyFunction: (c) => {
      t = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
  };
}
const ce = $r();
class Cs {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      At(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      e ?? (et ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class Cr extends Cs {
  constructor(e) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.cache = e.cache),
      (this.logger = e.logger || jt),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.initialState = e.state || Rr(this.options)),
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
    const n = Mt(this.state.data, e, this.options);
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
      n ? n.then(Ce).catch(Ce) : Promise.resolve()
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
      !bs(this.state.dataUpdatedAt, e)
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
    const l = kr(),
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
        ((ft(f) && f.silent) || this.dispatch({ type: "error", error: f }),
        !ft(f))
      ) {
        var p, b, k, v;
        (p = (b = this.cache.config).onError) == null || p.call(b, f, this),
          (k = (v = this.cache.config).onSettled) == null ||
            k.call(v, this.state.data, f, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = $s({
        fn: c.fetchFn,
        abort: l == null ? void 0 : l.abort.bind(l),
        onSuccess: (f) => {
          var p, b, k, v;
          if (typeof f > "u") {
            h(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(f),
            (p = (b = this.cache.config).onSuccess) == null ||
              p.call(b, f, this),
            (k = (v = this.cache.config).onSettled) == null ||
              k.call(v, f, this.state.error, this),
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
            fetchStatus: $t(this.options.networkMode) ? "fetching" : "paused",
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
          return ft(l) && l.revert && this.revertState
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
      ce.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(e);
        }),
          this.cache.notify({ query: this, type: "updated", action: e });
      });
  }
}
function Rr(i) {
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
class Lr extends Ge {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(e, t, n) {
    var s;
    const r = t.queryKey,
      l = (s = t.queryHash) != null ? s : Ut(r, t);
    let o = this.get(l);
    return (
      o ||
        ((o = new Cr({
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
    ce.batch(() => {
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
    const [n] = Pe(e, t);
    return (
      typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => nn(n, s))
    );
  }
  findAll(e, t) {
    const [n] = Pe(e, t);
    return Object.keys(n).length > 0
      ? this.queries.filter((s) => nn(n, s))
      : this.queries;
  }
  notify(e) {
    ce.batch(() => {
      this.listeners.forEach(({ listener: t }) => {
        t(e);
      });
    });
  }
  onFocus() {
    ce.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    ce.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class Sr extends Cs {
  constructor(e) {
    super(),
      (this.defaultOptions = e.defaultOptions),
      (this.mutationId = e.mutationId),
      (this.mutationCache = e.mutationCache),
      (this.logger = e.logger || jt),
      (this.observers = []),
      (this.state = e.state || Rs()),
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
        var P;
        return (
          (this.retryer = $s({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (O, N) => {
              this.dispatch({ type: "failed", failureCount: O, error: N });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (P = this.options.retry) != null ? P : 0,
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
        var d, h, f, p;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((d = (h = this.mutationCache.config).onMutate) == null
            ? void 0
            : d.call(h, this.state.variables, this));
        const O = await ((f = (p = this.options).onMutate) == null
          ? void 0
          : f.call(p, this.state.variables));
        O !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: O,
            variables: this.state.variables,
          });
      }
      const P = await e();
      return (
        await ((n = (s = this.mutationCache.config).onSuccess) == null
          ? void 0
          : n.call(s, P, this.state.variables, this.state.context, this)),
        await ((r = (l = this.options).onSuccess) == null
          ? void 0
          : r.call(l, P, this.state.variables, this.state.context)),
        await ((o = (a = this.mutationCache.config).onSettled) == null
          ? void 0
          : o.call(a, P, null, this.state.variables, this.state.context, this)),
        await ((u = (c = this.options).onSettled) == null
          ? void 0
          : u.call(c, P, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: P }),
        P
      );
    } catch (P) {
      try {
        var b, k, v, w, T, S, E, L;
        throw (
          (await ((b = (k = this.mutationCache.config).onError) == null
            ? void 0
            : b.call(k, P, this.state.variables, this.state.context, this)),
          await ((v = (w = this.options).onError) == null
            ? void 0
            : v.call(w, P, this.state.variables, this.state.context)),
          await ((T = (S = this.mutationCache.config).onSettled) == null
            ? void 0
            : T.call(
                S,
                void 0,
                P,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((E = (L = this.options).onSettled) == null
            ? void 0
            : E.call(L, void 0, P, this.state.variables, this.state.context)),
          P)
        );
      } finally {
        this.dispatch({ type: "error", error: P });
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
            isPaused: !$t(this.options.networkMode),
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
      ce.batch(() => {
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
function Rs() {
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
class Pr extends Ge {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(e, t, n) {
    const s = new Sr({
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
    ce.batch(() => {
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
      this.mutations.find((t) => sn(e, t))
    );
  }
  findAll(e) {
    return this.mutations.filter((t) => sn(e, t));
  }
  notify(e) {
    ce.batch(() => {
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
          return ce.batch(() =>
            t.reduce(
              (n, s) => n.then(() => s.continue().catch(Ce)),
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
function Tr() {
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
          d = (a == null ? void 0 : a.direction) === "backward",
          h = ((r = i.state.data) == null ? void 0 : r.pages) || [],
          f = ((l = i.state.data) == null ? void 0 : l.pageParams) || [];
        let p = f,
          b = !1;
        const k = (L) => {
            Object.defineProperty(L, "signal", {
              enumerable: !0,
              get: () => {
                var P;
                if ((P = i.signal) != null && P.aborted) b = !0;
                else {
                  var O;
                  (O = i.signal) == null ||
                    O.addEventListener("abort", () => {
                      b = !0;
                    });
                }
                return i.signal;
              },
            });
          },
          v = i.options.queryFn || (() => Promise.reject("Missing queryFn")),
          w = (L, P, O, N) => (
            (p = N ? [P, ...p] : [...p, P]), N ? [O, ...L] : [...L, O]
          ),
          T = (L, P, O, N) => {
            if (b) return Promise.reject("Cancelled");
            if (typeof O > "u" && !P && L.length) return Promise.resolve(L);
            const re = {
              queryKey: i.queryKey,
              pageParam: O,
              meta: i.options.meta,
            };
            k(re);
            const ve = v(re);
            return Promise.resolve(ve).then((Qe) => w(L, O, Qe, N));
          };
        let S;
        if (!h.length) S = T([]);
        else if (c) {
          const L = typeof u < "u",
            P = L ? u : un(i.options, h);
          S = T(h, L, P);
        } else if (d) {
          const L = typeof u < "u",
            P = L ? u : Or(i.options, h);
          S = T(h, L, P, !0);
        } else {
          p = [];
          const L = typeof i.options.getNextPageParam > "u";
          S = (o && h[0] ? o(h[0], 0, h) : !0)
            ? T([], L, f[0])
            : Promise.resolve(w([], f[0], h[0]));
          for (let O = 1; O < h.length; O++)
            S = S.then((N) => {
              if (o && h[O] ? o(h[O], O, h) : !0) {
                const ve = L ? f[O] : un(i.options, N);
                return T(N, L, ve);
              }
              return Promise.resolve(w(N, f[O], h[O]));
            });
        }
        return S.then((L) => ({ pages: L, pageParams: p }));
      };
    },
  };
}
function un(i, e) {
  return i.getNextPageParam == null
    ? void 0
    : i.getNextPageParam(e[e.length - 1], e);
}
function Or(i, e) {
  return i.getPreviousPageParam == null
    ? void 0
    : i.getPreviousPageParam(e[0], e);
}
class Ls {
  constructor(e = {}) {
    (this.queryCache = e.queryCache || new Lr()),
      (this.mutationCache = e.mutationCache || new Pr()),
      (this.logger = e.logger || jt),
      (this.defaultOptions = e.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = bt.subscribe(() => {
          bt.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = kt.subscribe(() => {
          kt.isOnline() &&
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
    const [n] = Pe(e, t);
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
    const s = We(e, t, n),
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
      l = _r(t, r);
    if (typeof l > "u") return;
    const o = We(e),
      a = this.defaultQueryOptions(o);
    return this.queryCache.build(this, a).setData(l, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return ce.batch(() =>
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
    const [n] = Pe(e, t),
      s = this.queryCache;
    ce.batch(() => {
      s.findAll(n).forEach((r) => {
        s.remove(r);
      });
    });
  }
  resetQueries(e, t, n) {
    const [s, r] = Pe(e, t, n),
      l = this.queryCache,
      o = { type: "active", ...s };
    return ce.batch(
      () => (
        l.findAll(s).forEach((a) => {
          a.reset();
        }),
        this.refetchQueries(o, r)
      )
    );
  }
  cancelQueries(e, t, n) {
    const [s, r = {}] = Pe(e, t, n);
    typeof r.revert > "u" && (r.revert = !0);
    const l = ce.batch(() =>
      this.queryCache.findAll(s).map((o) => o.cancel(r))
    );
    return Promise.all(l).then(Ce).catch(Ce);
  }
  invalidateQueries(e, t, n) {
    const [s, r] = Pe(e, t, n);
    return ce.batch(() => {
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
    const [s, r] = Pe(e, t, n),
      l = ce.batch(() =>
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
    let o = Promise.all(l).then(Ce);
    return (r != null && r.throwOnError) || (o = o.catch(Ce)), o;
  }
  fetchQuery(e, t, n) {
    const s = We(e, t, n),
      r = this.defaultQueryOptions(s);
    typeof r.retry > "u" && (r.retry = !1);
    const l = this.queryCache.build(this, r);
    return l.isStaleByTime(r.staleTime)
      ? l.fetch(r)
      : Promise.resolve(l.state.data);
  }
  prefetchQuery(e, t, n) {
    return this.fetchQuery(e, t, n).then(Ce).catch(Ce);
  }
  fetchInfiniteQuery(e, t, n) {
    const s = We(e, t, n);
    return (s.behavior = Tr()), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, t, n) {
    return this.fetchInfiniteQuery(e, t, n).then(Ce).catch(Ce);
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
    const n = this.queryDefaults.find((s) => ze(e) === ze(s.queryKey));
    n
      ? (n.defaultOptions = t)
      : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    if (!e) return;
    const t = this.queryDefaults.find((n) => _t(e, n.queryKey));
    return t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const n = this.mutationDefaults.find((s) => ze(e) === ze(s.mutationKey));
    n
      ? (n.defaultOptions = t)
      : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    if (!e) return;
    const t = this.mutationDefaults.find((n) => _t(e, n.mutationKey));
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
      !t.queryHash && t.queryKey && (t.queryHash = Ut(t.queryKey, t)),
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
class Er extends Ge {
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
      cn(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return zt(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return zt(
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
      It(n, this.options) ||
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
    r && fn(this.currentQuery, s, this.options, n) && this.executeFetch(),
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
    return (e != null && e.throwOnError) || (t = t.catch(Ce)), t;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      et || this.currentResult.isStale || !At(this.options.staleTime))
    )
      return;
    const t = bs(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
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
        et ||
        this.options.enabled === !1 ||
        !At(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || bt.isFocused()) &&
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
      { state: d } = e;
    let {
        dataUpdatedAt: h,
        error: f,
        errorUpdatedAt: p,
        fetchStatus: b,
        status: k,
      } = d,
      v = !1,
      w = !1,
      T;
    if (t._optimisticResults) {
      const O = this.hasListeners(),
        N = !O && cn(e, t),
        re = O && fn(e, n, t, s);
      (N || re) &&
        ((b = $t(e.options.networkMode) ? "fetching" : "paused"),
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
      (T = c.data), (h = c.dataUpdatedAt), (k = c.status), (v = !0);
    else if (t.select && typeof d.data < "u")
      if (
        r &&
        d.data === (l == null ? void 0 : l.data) &&
        t.select === this.selectFn
      )
        T = this.selectResult;
      else
        try {
          (this.selectFn = t.select),
            (T = t.select(d.data)),
            (T = Mt(r == null ? void 0 : r.data, T, t)),
            (this.selectResult = T),
            (this.selectError = null);
        } catch (O) {
          this.selectError = O;
        }
    else T = d.data;
    if (typeof t.placeholderData < "u" && typeof T > "u" && k === "loading") {
      let O;
      if (
        r != null &&
        r.isPlaceholderData &&
        t.placeholderData === (o == null ? void 0 : o.placeholderData)
      )
        O = r.data;
      else if (
        ((O =
          typeof t.placeholderData == "function"
            ? t.placeholderData()
            : t.placeholderData),
        t.select && typeof O < "u")
      )
        try {
          (O = t.select(O)), (this.selectError = null);
        } catch (N) {
          this.selectError = N;
        }
      typeof O < "u" &&
        ((k = "success"),
        (T = Mt(r == null ? void 0 : r.data, O, t)),
        (w = !0));
    }
    this.selectError &&
      ((f = this.selectError),
      (T = this.selectResult),
      (p = Date.now()),
      (k = "error"));
    const S = b === "fetching",
      E = k === "loading",
      L = k === "error";
    return {
      status: k,
      fetchStatus: b,
      isLoading: E,
      isSuccess: k === "success",
      isError: L,
      isInitialLoading: E && S,
      data: T,
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
      isRefetching: S && !E,
      isLoadingError: L && d.dataUpdatedAt === 0,
      isPaused: b === "paused",
      isPlaceholderData: w,
      isPreviousData: v,
      isRefetchError: L && d.dataUpdatedAt !== 0,
      isStale: Bt(e, t),
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
      It(n, t))
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
      : e.type === "error" && !ft(e.error) && (t.onError = !0),
      this.updateResult(t),
      this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    ce.batch(() => {
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
function Ar(i, e) {
  return (
    e.enabled !== !1 &&
    !i.state.dataUpdatedAt &&
    !(i.state.status === "error" && e.retryOnMount === !1)
  );
}
function cn(i, e) {
  return Ar(i, e) || (i.state.dataUpdatedAt > 0 && zt(i, e, e.refetchOnMount));
}
function zt(i, e, t) {
  if (e.enabled !== !1) {
    const n = typeof t == "function" ? t(i) : t;
    return n === "always" || (n !== !1 && Bt(i, e));
  }
  return !1;
}
function fn(i, e, t, n) {
  return (
    t.enabled !== !1 &&
    (i !== e || n.enabled === !1) &&
    (!t.suspense || i.state.status !== "error") &&
    Bt(i, t)
  );
}
function Bt(i, e) {
  return i.isStaleByTime(e.staleTime);
}
let Ir = class extends Ge {
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
      It(n, this.options) ||
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
    const e = this.currentMutation ? this.currentMutation.state : Rs(),
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
    ce.batch(() => {
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
const Ss = "$$_queryClient",
  qr = () => {
    const i = gs(Ss);
    if (!i)
      throw new Error(
        "No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?"
      );
    return i;
  },
  Mr = (i) => {
    ms(Ss, i);
  };
function Ct() {
  return qr();
}
const Be = [];
function tt(i, e) {
  return { subscribe: zr(i, e).subscribe };
}
function zr(i, e = Y) {
  let t;
  const n = new Set();
  function s(o) {
    if (U(i, o) && ((i = o), t)) {
      const a = !Be.length;
      for (const u of n) u[1](), Be.push(u, i);
      if (a) {
        for (let u = 0; u < Be.length; u += 2) Be[u][0](Be[u + 1]);
        Be.length = 0;
      }
    }
  }
  function r(o) {
    s(o(i));
  }
  function l(o, a = Y) {
    const u = [o, a];
    return (
      n.add(u),
      n.size === 1 && (t = e(s) || Y),
      o(i),
      () => {
        n.delete(u), n.size === 0 && t && (t(), (t = null));
      }
    );
  }
  return { set: s, update: r, subscribe: l };
}
function Ps(i, e, t) {
  const n = !Array.isArray(i),
    s = n ? [i] : i,
    r = e.length < 2;
  return tt(t, (l) => {
    let o = !1;
    const a = [];
    let u = 0,
      c = Y;
    const d = () => {
        if (u) return;
        c();
        const f = e(n ? a[0] : a, l);
        r ? l(f) : (c = st(f) ? f : Y);
      },
      h = s.map((f, p) =>
        Ft(
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
        Le(h), c(), (o = !1);
      }
    );
  });
}
function Dr(i, e) {
  const t = Ct(),
    n = t.defaultQueryOptions(i);
  n._optimisticResults = "optimistic";
  let s = new e(t, n);
  n.onError && (n.onError = ce.batchCalls(n.onError)),
    n.onSuccess && (n.onSuccess = ce.batchCalls(n.onSuccess)),
    n.onSettled && (n.onSettled = ce.batchCalls(n.onSettled)),
    tt(s).subscribe((o) => {
      (s = o), s.setOptions(n, { listeners: !1 });
    });
  const r = tt(s.getCurrentResult(), (o) => s.subscribe(ce.batchCalls(o))),
    { subscribe: l } = Ps(
      r,
      (o) => (
        (o = s.getOptimisticResult(n)),
        n.notifyOnChangeProps ? o : s.trackResult(o)
      )
    );
  return { subscribe: l };
}
function Ts(i, e, t) {
  const n = We(i, e, t);
  return Dr(n, Er);
}
function Nr(i, e, t) {
  const n = br(i, e, t),
    s = Ct();
  let r = new Ir(s, n),
    l;
  tt(r).subscribe((u) => {
    (r = u),
      (l = (c, d) => {
        r.mutate(c, d).catch(Fr);
      }),
      r.setOptions(n);
  });
  const o = tt(r.getCurrentResult(), (u) =>
      r.subscribe(ce.batchCalls((c) => u(c)))
    ),
    { subscribe: a } = Ps(o, (u) => ({
      ...u,
      mutate: l,
      mutateAsync: u.mutate,
    }));
  return { subscribe: a };
}
function Fr() {}
function Qr(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[1], null);
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
        x(n, t, s, s[1], e ? W(t, s[1], r, null) : J(s[1]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Ur(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { client: r = new Ls() } = e;
  return (
    Ke(() => {
      r.mount();
    }),
    Mr(r),
    Qt(() => {
      r.unmount();
    }),
    (i.$$set = (l) => {
      "client" in l && t(0, (r = l.client)),
        "$$scope" in l && t(1, (s = l.$$scope));
    }),
    [r, s, n]
  );
}
class jr extends B {
  constructor(e) {
    super(), j(this, e, Ur, Qr, U, { client: 0 });
  }
}
const Os = (i) => ({
    version: i.replace(/[\^~]/, ""),
    qualifier: isNaN(Number(i[0])) ? i[0] : void 0,
  }),
  Es = (i, e) => Os(i).version === e,
  hn = (i, e) => (e.length <= i ? e : e.slice(0, i).concat("…")),
  Lt = 10,
  nt = {
    package: (i) => ["package", i],
    bundlephobiaReport: (i) => ["bundlephobiaReport", i],
  };
class dn extends Error {
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
class As extends Error {
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
const ht = (i) => i !== null && typeof i == "object",
  at = (...i) => {
    for (const e of i)
      if ((!ht(e) || Array.isArray(e)) && typeof e < "u")
        throw new TypeError("The `options` argument must be an object");
    return Zt({}, ...i);
  },
  Is = (i = {}, e = {}) => {
    const t = new globalThis.Headers(i),
      n = e instanceof globalThis.Headers,
      s = new globalThis.Headers(e);
    for (const [r, l] of s.entries())
      (n && l === "undefined") || l === void 0 ? t.delete(r) : t.set(r, l);
    return t;
  },
  Zt = (...i) => {
    let e = {},
      t = {};
    for (const n of i)
      if (Array.isArray(n)) Array.isArray(e) || (e = []), (e = [...e, ...n]);
      else if (ht(n)) {
        for (let [s, r] of Object.entries(n))
          ht(r) && s in e && (r = Zt(e[s], r)), (e = { ...e, [s]: r });
        ht(n.headers) && ((t = Is(t, n.headers)), (e.headers = t));
      }
    return e;
  },
  Br = (() => {
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
  Zr = typeof globalThis.AbortController == "function",
  Hr = typeof globalThis.ReadableStream == "function",
  Kr = typeof globalThis.FormData == "function",
  qs = ["get", "post", "put", "patch", "head", "delete"],
  Gr = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  St = 2147483647,
  Ms = Symbol("stop"),
  Vr = (i) => (qs.includes(i) ? i.toUpperCase() : i),
  Wr = ["get", "put", "head", "delete", "options", "trace"],
  xr = [408, 413, 429, 500, 502, 503, 504],
  zs = [413, 429, 503],
  pn = {
    limit: 2,
    methods: Wr,
    statusCodes: xr,
    afterStatusCodes: zs,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
  },
  Jr = (i = {}) => {
    if (typeof i == "number") return { ...pn, limit: i };
    if (i.methods && !Array.isArray(i.methods))
      throw new Error("retry.methods must be an array");
    if (i.statusCodes && !Array.isArray(i.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...pn, ...i, afterStatusCodes: zs };
  };
async function Xr(i, e, t) {
  return new Promise((n, s) => {
    const r = setTimeout(() => {
      e && e.abort(), s(new As(i));
    }, t.timeout);
    t.fetch(i)
      .then(n)
      .catch(s)
      .then(() => {
        clearTimeout(r);
      });
  });
}
const Yr = !!globalThis.DOMException;
function mn(i) {
  if (Yr)
    return new DOMException(
      (i == null ? void 0 : i.reason) ?? "The operation was aborted.",
      "AbortError"
    );
  const e = new Error(
    (i == null ? void 0 : i.reason) ?? "The operation was aborted."
  );
  return (e.name = "AbortError"), e;
}
async function ei(i, { signal: e }) {
  return new Promise((t, n) => {
    if (e) {
      if (e.aborted) {
        n(mn(e));
        return;
      }
      e.addEventListener("abort", s, { once: !0 });
    }
    function s() {
      n(mn(e)), clearTimeout(r);
    }
    const r = setTimeout(() => {
      e == null || e.removeEventListener("abort", s), t();
    }, i);
  });
}
class yt {
  static create(e, t) {
    const n = new yt(e, t),
      s = async () => {
        if (n._options.timeout > St)
          throw new RangeError(
            `The \`timeout\` option cannot be greater than ${St}`
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
          let a = new dn(o, n.request, n._options);
          for (const u of n._options.hooks.beforeError) a = await u(a);
          throw a;
        }
        if (n._options.onDownloadProgress) {
          if (typeof n._options.onDownloadProgress != "function")
            throw new TypeError(
              "The `onDownloadProgress` option must be a function"
            );
          if (!Hr)
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
    for (const [o, a] of Object.entries(Gr))
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
        headers: Is(this._input.headers, t.headers),
        hooks: Zt(
          {
            beforeRequest: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: [],
          },
          t.hooks
        ),
        method: Vr(t.method ?? this._input.method),
        prefixUrl: String(t.prefixUrl || ""),
        retry: Jr(t.retry),
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
    if (Zr) {
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
      (Br && (this._options.duplex = "half"),
      (this.request = new globalThis.Request(this._input, this._options)),
      this._options.searchParams)
    ) {
      const s =
          "?" +
          (typeof this._options.searchParams == "string"
            ? this._options.searchParams.replace(/^\?/, "")
            : new URLSearchParams(this._options.searchParams).toString()),
        r = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, s);
      ((Kr && this._options.body instanceof globalThis.FormData) ||
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
      this._retryCount < this._options.retry.limit && !(e instanceof As))
    ) {
      if (e instanceof dn) {
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
      const n = Math.min(this._calculateRetryDelay(t), St);
      if (n !== 0 && this._retryCount > 0) {
        await ei(n, { signal: this._options.signal });
        for (const s of this._options.hooks.beforeRetry)
          if (
            (await s({
              request: this.request,
              options: this._options,
              error: t,
              retryCount: this._retryCount,
            })) === Ms
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
      : Xr(this.request.clone(), this.abortController, this._options);
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
/*! MIT License © Sindre Sorhus */ const Dt = (i) => {
    const e = (t, n) => yt.create(t, at(i, n));
    for (const t of qs) e[t] = (n, s) => yt.create(n, at(i, s, { method: t }));
    return (
      (e.create = (t) => Dt(at(t))),
      (e.extend = (t) => Dt(at(i, t))),
      (e.stop = Ms),
      e
    );
  },
  ti = Dt(),
  Ds = ti,
  Ns = Ds.create({ prefixUrl: "http://localhost:5001/" }),
  ni = Ds.create({ prefixUrl: "https://bundlephobia.com/" });
function si(i) {
  const e = i ? { path: i } : void 0;
  return Ns.get("package", { searchParams: e }).json();
}
function ri(i) {
  return Ns.post("upgrade-packages", { json: i }).json();
}
function ii(i) {
  return ni.get(`api/size?package=${i}`).json();
}
const Fs = (i) => Nr(ri, i),
  Qs = (i) => (e) => {
    const t = structuredClone(e ?? {});
    for (let n of i) {
      const { qualifier: s } = Os(n.version),
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
  li = (i) => (
    console.log("usePackageQuery", { path: i }),
    Ts(nt.package(i), si.bind(null, i))
  ),
  oi = (i) => Ts(nt.bundlephobiaReport(i), () => ii(i), { enabled: !!i });
function ai(i) {
  Ke(() => {
    window.addEventListener("keydown", i);
  }),
    Qt(() => {
      window.removeEventListener("keydown", i);
    });
}
function ui(i) {
  let e, t, n, s, r, l;
  return {
    c() {
      (e = be("svg")),
        (t = be("g")),
        (n = be("g")),
        (s = be("path")),
        (l = be("path")),
        _(s, "d", (r = gn[i[0]])),
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
      R(o, e, a), y(e, t), y(t, n), y(n, s), y(n, l);
    },
    p(o, [a]) {
      a & 1 && r !== (r = gn[o[0]]) && _(s, "d", r);
    },
    i: Y,
    o: Y,
    d(o) {
      o && C(e);
    },
  };
}
const gn = {
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
function ci(i, e, t) {
  let { mood: n = "awake" } = e;
  return (
    (i.$$set = (s) => {
      "mood" in s && t(0, (n = s.mood));
    }),
    [n]
  );
}
class fi extends B {
  constructor(e) {
    super(), j(this, e, ci, ui, U, { mood: 0 });
  }
}
const { isArray: hi } = Array;
function Us(i, e) {
  if (arguments.length === 1) return (t) => Us(i, t);
  if (e) return e[i];
}
function di(i, e) {
  const t = {},
    n = {};
  return (
    Object.entries(e).forEach(([s, r]) => {
      i(r, s) ? (t[s] = r) : (n[s] = r);
    }),
    [t, n]
  );
}
function pi(i, e, t = !1) {
  const n = [],
    s = [];
  let r = -1;
  for (; r++ < e.length - 1; )
    (t ? i(e[r], r) : i(e[r])) ? n.push(e[r]) : s.push(e[r]);
  return [n, s];
}
function js(i, e) {
  return arguments.length === 1 ? (t) => js(i, t) : hi(e) ? pi(i, e) : di(i, e);
}
function Nt(i, e) {
  if (arguments.length === 1) return (s) => Nt(i, s);
  if (Number.isNaN(Number(i)) || Number.isNaN(Number(e)))
    throw new TypeError("Both arguments to range must be numbers");
  if (e < i) return [];
  const t = e - i,
    n = Array(t);
  for (let s = 0; s < t; s++) n[s] = i + s;
  return n;
}
const _n = {
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
function bn(i, e, t) {
  const n = i.slice();
  return (n[10] = e[t][0]), (n[11] = e[t][1]), n;
}
function Pt(i) {
  let e,
    t = [i[11]],
    n = {};
  for (let s = 0; s < t.length; s += 1) n = G(n, t[s]);
  return {
    c() {
      (e = be(i[10])), mt(e, n);
    },
    m(s, r) {
      R(s, e, r);
    },
    p(s, r) {
      mt(e, (n = me(t, [r & 32 && s[11]])));
    },
    d(s) {
      s && C(e);
    },
  };
}
function kn(i) {
  let e = i[10],
    t,
    n = i[10] && Pt(i);
  return {
    c() {
      n && n.c(), (t = se());
    },
    m(s, r) {
      n && n.m(s, r), R(s, t, r);
    },
    p(s, r) {
      s[10]
        ? e
          ? U(e, s[10])
            ? (n.d(1), (n = Pt(s)), (e = s[10]), n.c(), n.m(t.parentNode, t))
            : n.p(s, r)
          : ((n = Pt(s)), (e = s[10]), n.c(), n.m(t.parentNode, t))
        : e && (n.d(1), (n = null), (e = s[10]));
    },
    d(s) {
      s && C(t), n && n.d(s);
    },
  };
}
function mi(i) {
  let e,
    t,
    n,
    s,
    r,
    l = i[5],
    o = [];
  for (let h = 0; h < l.length; h += 1) o[h] = kn(bn(i, l, h));
  const a = i[9].default,
    u = V(a, i, i[8], null);
  let c = [
      _n,
      i[6],
      { width: i[2] },
      { height: i[2] },
      { stroke: i[1] },
      {
        "stroke-width": (n = i[4] ? (Number(i[3]) * 24) / Number(i[2]) : i[3]),
      },
      { class: (s = `lucide-icon lucide lucide-${i[0]} ${i[7].class ?? ""}`) },
    ],
    d = {};
  for (let h = 0; h < c.length; h += 1) d = G(d, c[h]);
  return {
    c() {
      e = be("svg");
      for (let h = 0; h < o.length; h += 1) o[h].c();
      (t = se()), u && u.c(), mt(e, d);
    },
    m(h, f) {
      R(h, e, f);
      for (let p = 0; p < o.length; p += 1) o[p] && o[p].m(e, null);
      y(e, t), u && u.m(e, null), (r = !0);
    },
    p(h, [f]) {
      if (f & 32) {
        l = h[5];
        let p;
        for (p = 0; p < l.length; p += 1) {
          const b = bn(h, l, p);
          o[p] ? o[p].p(b, f) : ((o[p] = kn(b)), o[p].c(), o[p].m(e, t));
        }
        for (; p < o.length; p += 1) o[p].d(1);
        o.length = l.length;
      }
      u &&
        u.p &&
        (!r || f & 256) &&
        x(u, a, h, h[8], r ? W(a, h[8], f, null) : J(h[8]), null),
        mt(
          e,
          (d = me(c, [
            _n,
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
      r || (m(u, h), (r = !0));
    },
    o(h) {
      g(u, h), (r = !1);
    },
    d(h) {
      h && C(e), we(o, h), u && u.d(h);
    },
  };
}
function gi(i, e, t) {
  const n = [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
  ];
  let s = pt(e, n),
    { $$slots: r = {}, $$scope: l } = e,
    { name: o } = e,
    { color: a = "currentColor" } = e,
    { size: u = 24 } = e,
    { strokeWidth: c = 2 } = e,
    { absoluteStrokeWidth: d = !1 } = e,
    { iconNode: h } = e;
  return (
    (i.$$set = (f) => {
      t(7, (e = G(G({}, e), oe(f)))),
        t(6, (s = pt(e, n))),
        "name" in f && t(0, (o = f.name)),
        "color" in f && t(1, (a = f.color)),
        "size" in f && t(2, (u = f.size)),
        "strokeWidth" in f && t(3, (c = f.strokeWidth)),
        "absoluteStrokeWidth" in f && t(4, (d = f.absoluteStrokeWidth)),
        "iconNode" in f && t(5, (h = f.iconNode)),
        "$$scope" in f && t(8, (l = f.$$scope));
    }),
    (e = oe(e)),
    [o, a, u, c, d, h, s, e, l, r]
  );
}
class _i extends B {
  constructor(e) {
    super(),
      j(this, e, gi, mi, U, {
        name: 0,
        color: 1,
        size: 2,
        strokeWidth: 3,
        absoluteStrokeWidth: 4,
        iconNode: 5,
      });
  }
}
const Se = _i;
function bi(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function ki(i) {
  let e, t;
  const n = [{ name: "arrow-up" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [bi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function yi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["line", { x1: "12", x2: "12", y1: "19", y2: "5" }],
    ["polyline", { points: "5 12 12 5 19 12" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class wi extends B {
  constructor(e) {
    super(), j(this, e, yi, ki, U, {});
  }
}
const Bs = wi;
function vi(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function $i(i) {
  let e, t;
  const n = [{ name: "bug" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [vi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Ci(i, e, t) {
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
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Ri extends B {
  constructor(e) {
    super(), j(this, e, Ci, $i, U, {});
  }
}
const Li = Ri;
function Si(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Pi(i) {
  let e, t;
  const n = [{ name: "check-circle" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Si] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Ti(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }],
    ["polyline", { points: "22 4 12 14.01 9 11.01" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Oi extends B {
  constructor(e) {
    super(), j(this, e, Ti, Pi, U, {});
  }
}
const Zs = Oi;
function Ei(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Ai(i) {
  let e, t;
  const n = [{ name: "github" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Ei] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Ii(i, e, t) {
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
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class qi extends B {
  constructor(e) {
    super(), j(this, e, Ii, Ai, U, {});
  }
}
const Mi = qi;
function zi(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Di(i) {
  let e, t;
  const n = [{ name: "globe" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [zi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Ni(i, e, t) {
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
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Fi extends B {
  constructor(e) {
    super(), j(this, e, Ni, Di, U, {});
  }
}
const Qi = Fi;
function Ui(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function ji(i) {
  let e, t;
  const n = [{ name: "info" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Ui] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Bi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 16v-4" }],
    ["path", { d: "M12 8h.01" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Zi extends B {
  constructor(e) {
    super(), j(this, e, Bi, ji, U, {});
  }
}
const Hi = Zi;
function Ki(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Gi(i) {
  let e, t;
  const n = [{ name: "package" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Ki] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Vi(i, e, t) {
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
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Wi extends B {
  constructor(e) {
    super(), j(this, e, Vi, Gi, U, {});
  }
}
const xi = Wi;
function Ji(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
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
  const n = [{ name: "scale" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Ji] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Yi(i, e, t) {
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
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class el extends B {
  constructor(e) {
    super(), j(this, e, Yi, Xi, U, {});
  }
}
const tl = el;
function nl(i) {
  let e;
  const t = i[2].default,
    n = V(t, i, i[3], null);
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
        x(n, t, s, s[3], e ? W(t, s[3], r, null) : J(s[3]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function sl(i) {
  let e, t;
  const n = [{ name: "x" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [nl] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Se({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, [l]) {
        const o =
          l & 3
            ? me(n, [n[0], l & 2 && _e(r[1]), l & 1 && { iconNode: r[0] }])
            : {};
        l & 8 && (o.$$scope = { dirty: l, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function rl(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["line", { x1: "18", x2: "6", y1: "6", y2: "18" }],
    ["line", { x1: "6", x2: "18", y1: "6", y2: "18" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = G(G({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class il extends B {
  constructor(e) {
    super(), j(this, e, rl, sl, U, {});
  }
}
const ll = il;
function ol(i) {
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
function al() {
  const i = console.warn;
  (console.warn = (e) => {
    e.includes("unknown prop") || e.includes("unexpected slot") || i(e);
  }),
    Ke(() => {
      console.warn = i;
    });
}
function yn(i, e, t) {
  const n = i.slice();
  return (n[18] = e[t]), n;
}
function wn(i, e, t) {
  const n = i.slice();
  return (n[18] = e[t]), n;
}
function vn(i, e, t) {
  const n = i.slice();
  return (n[10] = e[t]), n;
}
function $n(i, e, t) {
  const n = i.slice();
  return (n[13] = e[t]), (n[15] = t), n;
}
function Cn(i, e, t) {
  const n = i.slice();
  return (n[16] = e[t]), (n[15] = t), n;
}
function Rn(i, e, t) {
  const n = i.slice();
  return (n[7] = e[t]), n;
}
function ul(i) {
  let e, t, n, s;
  const r = [dl, hl, fl],
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
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (H(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
      },
    }
  );
}
function cl(i) {
  let e,
    t,
    n = i[1],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = En(Rn(i, n, l));
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
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 34) {
        n = l[1];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Rn(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = En(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (H(), a = n.length; a < s.length; a += 1) r(a);
        K();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      we(s, l), l && C(e);
    },
  };
}
function fl(i) {
  let e, t, n;
  const s = [i[6]];
  var r = i[5][i[0]];
  function l(o) {
    let a = { $$slots: { default: [gl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = G(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && I(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? me(s, [_e(o[6])]) : {};
        if (
          (a & 8388706 && (u.$$scope = { dirty: a, ctx: o }),
          a & 33 && r !== (r = o[5][o[0]]))
        ) {
          if (e) {
            H();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              q(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && q(e, o);
      },
    }
  );
}
function hl(i) {
  let e, t, n, s;
  const r = [bl, _l],
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
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (H(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
      },
    }
  );
}
function dl(i) {
  let e, t, n;
  var s = i[5].table;
  function r(l) {
    return { props: { $$slots: { default: [Tl] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && I(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388716 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].table))
        ) {
          if (e) {
            H();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              q(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && q(e, l);
      },
    }
  );
}
function pl(i) {
  let e = i[6].raw + "",
    t;
  return {
    c() {
      t = X(e);
    },
    m(n, s) {
      R(n, t, s);
    },
    p(n, s) {
      s & 64 && e !== (e = n[6].raw + "") && fe(t, e);
    },
    i: Y,
    o: Y,
    d(n) {
      n && C(t);
    },
  };
}
function ml(i) {
  let e, t;
  return (
    (e = new Ne({ props: { tokens: i[1], renderers: i[5] } })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s & 2 && (r.tokens = n[1]), s & 32 && (r.renderers = n[5]), e.$set(r);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function gl(i) {
  let e, t, n, s;
  const r = [ml, pl],
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
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, u) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (H(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
      },
    }
  );
}
function _l(i) {
  let e, t, n;
  const s = [{ ordered: i[4] }, i[6]];
  var r = i[5].list;
  function l(o) {
    let a = { $$slots: { default: [yl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = G(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && I(e, o, a), R(o, t, a), (n = !0);
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
            H();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              q(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && q(e, o);
      },
    }
  );
}
function bl(i) {
  let e, t, n;
  const s = [{ ordered: i[4] }, i[6]];
  var r = i[5].list;
  function l(o) {
    let a = { $$slots: { default: [vl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = G(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && I(e, o, a), R(o, t, a), (n = !0);
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
            H();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              q(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && q(e, o);
      },
    }
  );
}
function kl(i) {
  let e, t, n;
  return (
    (e = new Ne({ props: { tokens: i[18].tokens, renderers: i[5] } })),
    {
      c() {
        M(e.$$.fragment), (t = Z());
      },
      m(s, r) {
        I(e, s, r), R(s, t, r), (n = !0);
      },
      p(s, r) {
        const l = {};
        r & 64 && (l.tokens = s[18].tokens),
          r & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (m(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        q(e, s), s && C(t);
      },
    }
  );
}
function Ln(i) {
  let e, t, n;
  const s = [i[18]];
  var r = i[5].unorderedlistitem || i[5].listitem;
  function l(o) {
    let a = { $$slots: { default: [kl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = G(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && I(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? me(s, [_e(o[18])]) : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && r !== (r = o[5].unorderedlistitem || o[5].listitem))
        ) {
          if (e) {
            H();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              q(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && q(e, o);
      },
    }
  );
}
function yl(i) {
  let e,
    t,
    n = i[6].items,
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Ln(yn(i, n, l));
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
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 96) {
        n = l[6].items;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = yn(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = Ln(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (H(), a = n.length; a < s.length; a += 1) r(a);
        K();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      we(s, l), l && C(e);
    },
  };
}
function wl(i) {
  let e, t, n;
  return (
    (e = new Ne({ props: { tokens: i[18].tokens, renderers: i[5] } })),
    {
      c() {
        M(e.$$.fragment), (t = Z());
      },
      m(s, r) {
        I(e, s, r), R(s, t, r), (n = !0);
      },
      p(s, r) {
        const l = {};
        r & 64 && (l.tokens = s[18].tokens),
          r & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (m(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        q(e, s), s && C(t);
      },
    }
  );
}
function Sn(i) {
  let e, t, n;
  const s = [i[18]];
  var r = i[5].orderedlistitem || i[5].listitem;
  function l(o) {
    let a = { $$slots: { default: [wl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = G(a, s[u]);
    return { props: a };
  }
  return (
    r && (e = le(r, l(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(o, a) {
        e && I(e, o, a), R(o, t, a), (n = !0);
      },
      p(o, a) {
        const u = a & 64 ? me(s, [_e(o[18])]) : {};
        if (
          (a & 8388704 && (u.$$scope = { dirty: a, ctx: o }),
          a & 32 && r !== (r = o[5].orderedlistitem || o[5].listitem))
        ) {
          if (e) {
            H();
            const c = e;
            g(c.$$.fragment, 1, 0, () => {
              q(c, 1);
            }),
              K();
          }
          r
            ? ((e = le(r, l(o))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && m(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && q(e, o);
      },
    }
  );
}
function vl(i) {
  let e,
    t,
    n = i[6].items,
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Sn(wn(i, n, l));
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
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 96) {
        n = l[6].items;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = wn(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = Sn(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (H(), a = n.length; a < s.length; a += 1) r(a);
        K();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      we(s, l), l && C(e);
    },
  };
}
function $l(i) {
  let e, t, n;
  return (
    (e = new Ne({ props: { tokens: i[16].tokens, renderers: i[5] } })),
    {
      c() {
        M(e.$$.fragment), (t = Z());
      },
      m(s, r) {
        I(e, s, r), R(s, t, r), (n = !0);
      },
      p(s, r) {
        const l = {};
        r & 4 && (l.tokens = s[16].tokens),
          r & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        n || (m(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        q(e, s), s && C(t);
      },
    }
  );
}
function Pn(i) {
  let e, t, n;
  var s = i[5].tablecell;
  function r(l) {
    return {
      props: {
        header: !0,
        align: l[6].align[l[15]] || "center",
        $$slots: { default: [$l] },
        $$scope: { ctx: l },
      },
    };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && I(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 64 && (a.align = l[6].align[l[15]] || "center"),
          o & 8388644 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablecell))
        ) {
          if (e) {
            H();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              q(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && q(e, l);
      },
    }
  );
}
function Cl(i) {
  let e,
    t,
    n = i[2],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Pn(Cn(i, n, l));
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
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 100) {
        n = l[2];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = Cn(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = Pn(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (H(), a = n.length; a < s.length; a += 1) r(a);
        K();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      we(s, l), l && C(e);
    },
  };
}
function Rl(i) {
  let e, t, n;
  var s = i[5].tablerow;
  function r(l) {
    return { props: { $$slots: { default: [Cl] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && I(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388708 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablerow))
        ) {
          if (e) {
            H();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              q(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && q(e, l);
      },
    }
  );
}
function Ll(i) {
  let e, t;
  return (
    (e = new Ne({ props: { tokens: i[13].tokens, renderers: i[5] } })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s & 8 && (r.tokens = n[13].tokens),
          s & 32 && (r.renderers = n[5]),
          e.$set(r);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function Tn(i) {
  let e, t, n;
  var s = i[5].tablecell;
  function r(l) {
    return {
      props: {
        header: !1,
        align: l[6].align[l[15]] || "center",
        $$slots: { default: [Ll] },
        $$scope: { ctx: l },
      },
    };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && I(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 64 && (a.align = l[6].align[l[15]] || "center"),
          o & 8388648 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablecell))
        ) {
          if (e) {
            H();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              q(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && q(e, l);
      },
    }
  );
}
function Sl(i) {
  let e,
    t,
    n = i[10],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Tn($n(i, n, l));
  const r = (l) =>
    g(s[l], 1, 1, () => {
      s[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = Z();
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
          const u = $n(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = Tn(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (H(), a = n.length; a < s.length; a += 1) r(a);
        K();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      we(s, l), l && C(e);
    },
  };
}
function On(i) {
  let e, t, n;
  var s = i[5].tablerow;
  function r(l) {
    return { props: { $$slots: { default: [Sl] }, $$scope: { ctx: l } } };
  }
  return (
    s && (e = le(s, r(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = se());
      },
      m(l, o) {
        e && I(e, l, o), R(l, t, o), (n = !0);
      },
      p(l, o) {
        const a = {};
        if (
          (o & 8388712 && (a.$$scope = { dirty: o, ctx: l }),
          o & 32 && s !== (s = l[5].tablerow))
        ) {
          if (e) {
            H();
            const u = e;
            g(u.$$.fragment, 1, 0, () => {
              q(u, 1);
            }),
              K();
          }
          s
            ? ((e = le(s, r(l))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && m(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && q(e, l);
      },
    }
  );
}
function Pl(i) {
  let e,
    t,
    n = i[3],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = On(vn(i, n, l));
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
      R(l, e, o), (t = !0);
    },
    p(l, o) {
      if (o & 104) {
        n = l[3];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const u = vn(l, n, a);
          s[a]
            ? (s[a].p(u, o), m(s[a], 1))
            : ((s[a] = On(u)), s[a].c(), m(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (H(), a = n.length; a < s.length; a += 1) r(a);
        K();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      we(s, l), l && C(e);
    },
  };
}
function Tl(i) {
  let e, t, n, s, r;
  var l = i[5].tablehead;
  function o(c) {
    return { props: { $$slots: { default: [Rl] }, $$scope: { ctx: c } } };
  }
  l && (e = le(l, o(i)));
  var a = i[5].tablebody;
  function u(c) {
    return { props: { $$slots: { default: [Pl] }, $$scope: { ctx: c } } };
  }
  return (
    a && (n = le(a, u(i))),
    {
      c() {
        e && M(e.$$.fragment), (t = Z()), n && M(n.$$.fragment), (s = se());
      },
      m(c, d) {
        e && I(e, c, d), R(c, t, d), n && I(n, c, d), R(c, s, d), (r = !0);
      },
      p(c, d) {
        const h = {};
        if (
          (d & 8388708 && (h.$$scope = { dirty: d, ctx: c }),
          d & 32 && l !== (l = c[5].tablehead))
        ) {
          if (e) {
            H();
            const p = e;
            g(p.$$.fragment, 1, 0, () => {
              q(p, 1);
            }),
              K();
          }
          l
            ? ((e = le(l, o(c))),
              M(e.$$.fragment),
              m(e.$$.fragment, 1),
              I(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(h);
        const f = {};
        if (
          (d & 8388712 && (f.$$scope = { dirty: d, ctx: c }),
          d & 32 && a !== (a = c[5].tablebody))
        ) {
          if (n) {
            H();
            const p = n;
            g(p.$$.fragment, 1, 0, () => {
              q(p, 1);
            }),
              K();
          }
          a
            ? ((n = le(a, u(c))),
              M(n.$$.fragment),
              m(n.$$.fragment, 1),
              I(n, s.parentNode, s))
            : (n = null);
        } else a && n.$set(f);
      },
      i(c) {
        r || (e && m(e.$$.fragment, c), n && m(n.$$.fragment, c), (r = !0));
      },
      o(c) {
        e && g(e.$$.fragment, c), n && g(n.$$.fragment, c), (r = !1);
      },
      d(c) {
        e && q(e, c), c && C(t), c && C(s), n && q(n, c);
      },
    }
  );
}
function En(i) {
  let e, t;
  const n = [i[7], { renderers: i[5] }];
  let s = {};
  for (let r = 0; r < n.length; r += 1) s = G(s, n[r]);
  return (
    (e = new Ne({ props: s })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(r, l) {
        I(e, r, l), (t = !0);
      },
      p(r, l) {
        const o =
          l & 34
            ? me(n, [l & 2 && _e(r[7]), l & 32 && { renderers: r[5] }])
            : {};
        e.$set(o);
      },
      i(r) {
        t || (m(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        g(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Ol(i) {
  let e, t, n, s;
  const r = [cl, ul],
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
        ~e && l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? ~e && l[e].p(a, u)
            : (t &&
                (H(),
                g(l[c], 1, 1, () => {
                  l[c] = null;
                }),
                K()),
              ~e
                ? ((t = l[e]),
                  t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
                  m(t, 1),
                  t.m(n.parentNode, n))
                : (t = null));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        ~e && l[e].d(a), a && C(n);
      },
    }
  );
}
function El(i, e, t) {
  const n = ["type", "tokens", "header", "rows", "ordered", "renderers"];
  let s = pt(e, n),
    { type: r = void 0 } = e,
    { tokens: l = void 0 } = e,
    { header: o = void 0 } = e,
    { rows: a = void 0 } = e,
    { ordered: u = !1 } = e,
    { renderers: c } = e;
  return (
    al(),
    (i.$$set = (d) => {
      (e = G(G({}, e), oe(d))),
        t(6, (s = pt(e, n))),
        "type" in d && t(0, (r = d.type)),
        "tokens" in d && t(1, (l = d.tokens)),
        "header" in d && t(2, (o = d.header)),
        "rows" in d && t(3, (a = d.rows)),
        "ordered" in d && t(4, (u = d.ordered)),
        "renderers" in d && t(5, (c = d.renderers));
    }),
    [r, l, o, a, u, c, s]
  );
}
let Ne = class extends B {
  constructor(e) {
    super(),
      j(this, e, El, Ol, U, {
        type: 0,
        tokens: 1,
        header: 2,
        rows: 3,
        ordered: 4,
        renderers: 5,
      });
  }
};
function Hs() {
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
let Fe = Hs();
function Al(i) {
  Fe = i;
}
const Ks = /[&<>"']/,
  Il = new RegExp(Ks.source, "g"),
  Gs = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  ql = new RegExp(Gs.source, "g"),
  Ml = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  An = (i) => Ml[i];
function ge(i, e) {
  if (e) {
    if (Ks.test(i)) return i.replace(Il, An);
  } else if (Gs.test(i)) return i.replace(ql, An);
  return i;
}
const zl = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Vs(i) {
  return i.replace(
    zl,
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
const Dl = /(^|[^\[])\^/g;
function ne(i, e) {
  (i = typeof i == "string" ? i : i.source), (e = e || "");
  const t = {
    replace: (n, s) => (
      (s = s.source || s), (s = s.replace(Dl, "$1")), (i = i.replace(n, s)), t
    ),
    getRegex: () => new RegExp(i, e),
  };
  return t;
}
const Nl = /[^\w:]/g,
  Fl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function In(i, e, t) {
  if (i) {
    let n;
    try {
      n = decodeURIComponent(Vs(t)).replace(Nl, "").toLowerCase();
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
  e && !Fl.test(t) && (t = Bl(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const ut = {},
  Ql = /^[^:]+:\/*[^/]*$/,
  Ul = /^([^:]+:)[\s\S]*$/,
  jl = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Bl(i, e) {
  ut[" " + i] ||
    (Ql.test(i) ? (ut[" " + i] = i + "/") : (ut[" " + i] = dt(i, "/", !0))),
    (i = ut[" " + i]);
  const t = i.indexOf(":") === -1;
  return e.substring(0, 2) === "//"
    ? t
      ? e
      : i.replace(Ul, "$1") + e
    : e.charAt(0) === "/"
    ? t
      ? e
      : i.replace(jl, "$1") + e
    : i + e;
}
const wt = { exec: function () {} };
function qn(i, e) {
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
function dt(i, e, t) {
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
function Zl(i, e) {
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
function Hl(i) {
  i &&
    i.sanitize &&
    !i.silent &&
    console.warn(
      "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
    );
}
function Mn(i, e) {
  if (e < 1) return "";
  let t = "";
  for (; e > 1; ) e & 1 && (t += i), (e >>= 1), (i += i);
  return t + i;
}
function zn(i, e, t, n) {
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
function Kl(i, e) {
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
class Ht {
  constructor(e) {
    this.options = e || Fe;
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
          : dt(
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
        s = Kl(n, t[3] || "");
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
        const s = dt(n, "#");
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
        d,
        h,
        f,
        p,
        b = t[1].trim();
      const k = b.length > 1,
        v = {
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
            E = new RegExp(
              `^ {0,${Math.min(
                3,
                l - 1
              )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
            ),
            L = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`),
            P = new RegExp(`^ {0,${Math.min(3, l - 1)}}#`);
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
            !(L.test(d) || P.test(d) || S.test(d) || E.test(e)));

          ) {
            if (d.search(/[^ ]/) >= l || !d.trim())
              f +=
                `
` + d.slice(l);
            else {
              if (
                a ||
                c.search(/[^ ]/) >= 4 ||
                L.test(c) ||
                P.test(c) ||
                E.test(c)
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
        v.loose || (u ? (v.loose = !0) : /\n *\n *$/.test(n) && (u = !0)),
          this.options.gfm &&
            ((s = /^\[[ xX]\] /.exec(f)),
            s && ((r = s[0] !== "[ ] "), (f = f.replace(/^\[[ xX]\] +/, "")))),
          v.items.push({
            type: "list_item",
            raw: n,
            task: !!s,
            checked: r,
            loose: !1,
            text: f,
          }),
          (v.raw += n);
      }
      (v.items[v.items.length - 1].raw = n.trimRight()),
        (v.items[v.items.length - 1].text = f.trimRight()),
        (v.raw = v.raw.trimRight());
      const T = v.items.length;
      for (o = 0; o < T; o++)
        if (
          ((this.lexer.state.top = !1),
          (v.items[o].tokens = this.lexer.blockTokens(v.items[o].text, [])),
          !v.loose)
        ) {
          const S = v.items[o].tokens.filter((L) => L.type === "space"),
            E = S.length > 0 && S.some((L) => /\n.*\n/.test(L.raw));
          v.loose = E;
        }
      if (v.loose) for (o = 0; o < T; o++) v.items[o].loose = !0;
      return v;
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
        header: qn(t[1]).map((s) => ({ text: s })),
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
          n.rows[r] = qn(n.rows[r], n.header.length).map((u) => ({ text: u }));
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
        const l = dt(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0) return;
      } else {
        const l = Zl(t[2], "()");
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
        zn(
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
      return zn(n, s, n[0], this.lexer);
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
const D = {
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
  table: wt,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
D._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
D._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
D.def = ne(D.def)
  .replace("label", D._label)
  .replace("title", D._title)
  .getRegex();
D.bullet = /(?:[*+-]|\d{1,9}[.)])/;
D.listItemStart = ne(/^( *)(bull) */)
  .replace("bull", D.bullet)
  .getRegex();
D.list = ne(D.list)
  .replace(/bull/g, D.bullet)
  .replace(
    "hr",
    "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
  )
  .replace("def", "\\n+(?=" + D.def.source + ")")
  .getRegex();
D._tag =
  "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
D._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
D.html = ne(D.html, "i")
  .replace("comment", D._comment)
  .replace("tag", D._tag)
  .replace(
    "attribute",
    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
  )
  .getRegex();
D.paragraph = ne(D._paragraph)
  .replace("hr", D.hr)
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
  .replace("tag", D._tag)
  .getRegex();
D.blockquote = ne(D.blockquote).replace("paragraph", D.paragraph).getRegex();
D.normal = { ...D };
D.gfm = {
  ...D.normal,
  table:
    "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
};
D.gfm.table = ne(D.gfm.table)
  .replace("hr", D.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("blockquote", " {0,3}>")
  .replace("code", " {4}[^\\n]")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", D._tag)
  .getRegex();
D.gfm.paragraph = ne(D._paragraph)
  .replace("hr", D.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("|lheading", "")
  .replace("table", D.gfm.table)
  .replace("blockquote", " {0,3}>")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", D._tag)
  .getRegex();
D.pedantic = {
  ...D.normal,
  html: ne(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  )
    .replace("comment", D._comment)
    .replace(
      /tag/g,
      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: wt,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ne(D.normal._paragraph)
    .replace("hr", D.hr)
    .replace(
      "heading",
      ` *#{1,6} *[^
]`
    )
    .replace("lheading", D.lheading)
    .replace("blockquote", " {0,3}>")
    .replace("|fences", "")
    .replace("|list", "")
    .replace("|html", "")
    .getRegex(),
};
const A = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: wt,
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
  del: wt,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
A._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
A.punctuation = ne(A.punctuation)
  .replace(/punctuation/g, A._punctuation)
  .getRegex();
A.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
A.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
A._comment = ne(D._comment).replace("(?:-->|$)", "-->").getRegex();
A.emStrong.lDelim = ne(A.emStrong.lDelim)
  .replace(/punct/g, A._punctuation)
  .getRegex();
A.emStrong.rDelimAst = ne(A.emStrong.rDelimAst, "g")
  .replace(/punct/g, A._punctuation)
  .getRegex();
A.emStrong.rDelimUnd = ne(A.emStrong.rDelimUnd, "g")
  .replace(/punct/g, A._punctuation)
  .getRegex();
A._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
A._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
A._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
A.autolink = ne(A.autolink)
  .replace("scheme", A._scheme)
  .replace("email", A._email)
  .getRegex();
A._attribute =
  /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
A.tag = ne(A.tag)
  .replace("comment", A._comment)
  .replace("attribute", A._attribute)
  .getRegex();
A._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
A._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
A._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
A.link = ne(A.link)
  .replace("label", A._label)
  .replace("href", A._href)
  .replace("title", A._title)
  .getRegex();
A.reflink = ne(A.reflink)
  .replace("label", A._label)
  .replace("ref", D._label)
  .getRegex();
A.nolink = ne(A.nolink).replace("ref", D._label).getRegex();
A.reflinkSearch = ne(A.reflinkSearch, "g")
  .replace("reflink", A.reflink)
  .replace("nolink", A.nolink)
  .getRegex();
A.normal = { ...A };
A.pedantic = {
  ...A.normal,
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
    .replace("label", A._label)
    .getRegex(),
  reflink: ne(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace("label", A._label)
    .getRegex(),
};
A.gfm = {
  ...A.normal,
  escape: ne(A.escape).replace("])", "~|])").getRegex(),
  _extended_email:
    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal:
    /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
};
A.gfm.url = ne(A.gfm.url, "i")
  .replace("email", A.gfm._extended_email)
  .getRegex();
A.breaks = {
  ...A.gfm,
  br: ne(A.br).replace("{2,}", "*").getRegex(),
  text: ne(A.gfm.text)
    .replace("\\b_", "\\b_| {2,}\\n")
    .replace(/\{2,\}/g, "*")
    .getRegex(),
};
function Gl(i) {
  return i
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…");
}
function Dn(i) {
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
class Re {
  constructor(e) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || Fe),
      (this.options.tokenizer = this.options.tokenizer || new Ht()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const t = { block: D.normal, inline: A.normal };
    this.options.pedantic
      ? ((t.block = D.pedantic), (t.inline = A.pedantic))
      : this.options.gfm &&
        ((t.block = D.gfm),
        this.options.breaks ? (t.inline = A.breaks) : (t.inline = A.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: D, inline: A };
  }
  static lex(e, t) {
    return new Re(t).lex(e);
  }
  static lexInline(e, t) {
    return new Re(t).inlineTokens(e);
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
              Mn("a", o[0].length - 2) +
              "]" +
              l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l =
        l.slice(0, o.index) +
        "[" +
        Mn("a", o[0].length - 2) +
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
        if ((n = this.tokenizer.autolink(e, Dn))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e, Dn))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (
          ((r = e),
          this.options.extensions && this.options.extensions.startInline)
        ) {
          let c = 1 / 0;
          const d = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach(function (f) {
            (h = f.call({ lexer: this }, d)),
              typeof h == "number" && h >= 0 && (c = Math.min(c, h));
          }),
            c < 1 / 0 && c >= 0 && (r = e.substring(0, c + 1));
        }
        if ((n = this.tokenizer.inlineText(r, Gl))) {
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
    this.options = e || Fe;
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
    if (((e = In(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return n;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), (s += ">" + n + "</a>"), s;
  }
  image(e, t, n) {
    if (((e = In(this.options.sanitize, this.options.baseUrl, e)), e === null))
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
class Ws {
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
class Gt {
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
class Te {
  constructor(e) {
    (this.options = e || Fe),
      (this.options.renderer = this.options.renderer || new Kt()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new Ws()),
      (this.slugger = new Gt());
  }
  static parse(e, t) {
    return new Te(t).parse(e);
  }
  static parseInline(e, t) {
    return new Te(t).parseInline(e);
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
      d,
      h,
      f,
      p,
      b,
      k,
      v,
      w,
      T,
      S,
      E,
      L;
    const P = e.length;
    for (s = 0; s < P; s++) {
      if (
        ((f = e[s]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[f.type] &&
          ((L = this.options.extensions.renderers[f.type].call(
            { parser: this },
            f
          )),
          L !== !1 ||
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
        n += L || "";
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
            Vs(this.parseInline(f.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          n += this.renderer.code(f.text, f.lang, f.escaped);
          continue;
        }
        case "table": {
          for (d = "", c = "", o = f.header.length, r = 0; r < o; r++)
            c += this.renderer.tablecell(this.parseInline(f.header[r].tokens), {
              header: !0,
              align: f.align[r],
            });
          for (
            d += this.renderer.tablerow(c), h = "", o = f.rows.length, r = 0;
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
              k = f.loose,
              o = f.items.length,
              h = "",
              r = 0;
            r < o;
            r++
          )
            (w = f.items[r]),
              (T = w.checked),
              (S = w.task),
              (v = ""),
              w.task &&
                ((E = this.renderer.checkbox(T)),
                k
                  ? w.tokens.length > 0 && w.tokens[0].type === "paragraph"
                    ? ((w.tokens[0].text = E + " " + w.tokens[0].text),
                      w.tokens[0].tokens &&
                        w.tokens[0].tokens.length > 0 &&
                        w.tokens[0].tokens[0].type === "text" &&
                        (w.tokens[0].tokens[0].text =
                          E + " " + w.tokens[0].tokens[0].text))
                    : w.tokens.unshift({ type: "text", text: E })
                  : (v += E)),
              (v += this.parse(w.tokens, k)),
              (h += this.renderer.listitem(v, S, T));
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
            s + 1 < P && e[s + 1].type === "text";

          )
            (f = e[++s]),
              (h +=
                `
` + (f.tokens ? this.parseInline(f.tokens) : f.text));
          n += t ? this.renderer.paragraph(h) : h;
          continue;
        }
        default: {
          const O = 'Token with "' + f.type + '" type was not found.';
          if (this.options.silent) {
            console.error(O);
            return;
          } else throw new Error(O);
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
class vt {
  constructor(e) {
    this.options = e || Fe;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
}
Jt(vt, "passThroughHooks", new Set(["preprocess", "postprocess"]));
function Vl(i, e, t) {
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
    n = { ...F.defaults, ...r };
    const l = Vl(n.silent, n.async, s);
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
    if ((Hl(n), n.hooks && (n.hooks.options = n), s)) {
      const o = n.highlight;
      let a;
      try {
        n.hooks && (t = n.hooks.preprocess(t)), (a = i(t, n));
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
        .then((o) => i(o, n))
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
      const o = i(t, n);
      n.walkTokens && F.walkTokens(o, n.walkTokens);
      let a = e(o, n);
      return n.hooks && (a = n.hooks.postprocess(a)), a;
    } catch (o) {
      return l(o);
    }
  };
}
function F(i, e, t) {
  return xs(Re.lex, Te.parse)(i, e, t);
}
F.options = F.setOptions = function (i) {
  return (F.defaults = { ...F.defaults, ...i }), Al(F.defaults), F;
};
F.getDefaults = Hs;
F.defaults = Fe;
F.use = function (...i) {
  const e = F.defaults.extensions || { renderers: {}, childTokens: {} };
  i.forEach((t) => {
    const n = { ...t };
    if (
      ((n.async = F.defaults.async || n.async || !1),
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
      const s = F.defaults.renderer || new Kt();
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
      const s = F.defaults.tokenizer || new Ht();
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
      const s = F.defaults.hooks || new vt();
      for (const r in t.hooks) {
        const l = s[r];
        vt.passThroughHooks.has(r)
          ? (s[r] = (o) => {
              if (F.defaults.async)
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
      const s = F.defaults.walkTokens;
      n.walkTokens = function (r) {
        let l = [];
        return (
          l.push(t.walkTokens.call(this, r)),
          s && (l = l.concat(s.call(this, r))),
          l
        );
      };
    }
    F.setOptions(n);
  });
};
F.walkTokens = function (i, e) {
  let t = [];
  for (const n of i)
    switch (((t = t.concat(e.call(F, n))), n.type)) {
      case "table": {
        for (const s of n.header) t = t.concat(F.walkTokens(s.tokens, e));
        for (const s of n.rows)
          for (const r of s) t = t.concat(F.walkTokens(r.tokens, e));
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
F.parseInline = xs(Re.lexInline, Te.parseInline);
F.Parser = Te;
F.parser = Te.parse;
F.Renderer = Kt;
F.TextRenderer = Ws;
F.Lexer = Re;
F.lexer = Re.lex;
F.Tokenizer = Ht;
F.Slugger = Gt;
F.Hooks = vt;
F.parse = F;
F.options;
F.setOptions;
F.use;
F.walkTokens;
F.parseInline;
Te.parse;
Re.lex;
const Js = {};
function Wl(i) {
  let e;
  return {
    c() {
      e = X(i[1]);
    },
    m(t, n) {
      R(t, e, n);
    },
    p(t, n) {
      n & 2 && fe(e, t[1]);
    },
    i: Y,
    o: Y,
    d(t) {
      t && C(e);
    },
  };
}
function xl(i) {
  let e, t;
  const n = i[5].default,
    s = V(n, i, i[4], null);
  return {
    c() {
      (e = $("h6")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        x(s, n, r, r[4], t ? W(n, r[4], l, null) : J(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Jl(i) {
  let e, t;
  const n = i[5].default,
    s = V(n, i, i[4], null);
  return {
    c() {
      (e = $("h5")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        x(s, n, r, r[4], t ? W(n, r[4], l, null) : J(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Xl(i) {
  let e, t;
  const n = i[5].default,
    s = V(n, i, i[4], null);
  return {
    c() {
      (e = $("h4")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        x(s, n, r, r[4], t ? W(n, r[4], l, null) : J(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Yl(i) {
  let e, t;
  const n = i[5].default,
    s = V(n, i, i[4], null);
  return {
    c() {
      (e = $("h3")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        x(s, n, r, r[4], t ? W(n, r[4], l, null) : J(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function eo(i) {
  let e, t;
  const n = i[5].default,
    s = V(n, i, i[4], null);
  return {
    c() {
      (e = $("h2")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        x(s, n, r, r[4], t ? W(n, r[4], l, null) : J(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function to(i) {
  let e, t;
  const n = i[5].default,
    s = V(n, i, i[4], null);
  return {
    c() {
      (e = $("h1")), s && s.c(), _(e, "id", i[2]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 16) &&
        x(s, n, r, r[4], t ? W(n, r[4], l, null) : J(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function no(i) {
  let e, t, n, s;
  const r = [to, eo, Yl, Xl, Jl, xl, Wl],
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
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (H(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
      },
    }
  );
}
function so(i, e, t) {
  let n,
    { $$slots: s = {}, $$scope: r } = e,
    { depth: l } = e,
    { raw: o } = e,
    { text: a } = e;
  const { slug: u, getOptions: c } = gs(Js),
    d = c();
  return (
    (i.$$set = (h) => {
      "depth" in h && t(0, (l = h.depth)),
        "raw" in h && t(1, (o = h.raw)),
        "text" in h && t(3, (a = h.text)),
        "$$scope" in h && t(4, (r = h.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 8 &&
        t(2, (n = d.headerIds ? d.headerPrefix + u(a) : void 0));
    }),
    [l, o, n, a, r, s]
  );
}
class ro extends B {
  constructor(e) {
    super(), j(this, e, so, no, U, { depth: 0, raw: 1, text: 3 });
  }
}
function io(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("p")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function lo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class oo extends B {
  constructor(e) {
    super(), j(this, e, lo, io, U, {});
  }
}
function ao(i) {
  let e;
  const t = i[3].default,
    n = V(t, i, i[2], null);
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
        x(n, t, s, s[2], e ? W(t, s[2], r, null) : J(s[2]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function uo(i, e, t) {
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
class co extends B {
  constructor(e) {
    super(), j(this, e, uo, ao, U, { text: 0, raw: 1 });
  }
}
function fo(i) {
  let e, t;
  return {
    c() {
      (e = $("img")),
        Yt(e.src, (t = i[0])) || _(e, "src", t),
        _(e, "title", i[1]),
        _(e, "alt", i[2]);
    },
    m(n, s) {
      R(n, e, s);
    },
    p(n, [s]) {
      s & 1 && !Yt(e.src, (t = n[0])) && _(e, "src", t),
        s & 2 && _(e, "title", n[1]),
        s & 4 && _(e, "alt", n[2]);
    },
    i: Y,
    o: Y,
    d(n) {
      n && C(e);
    },
  };
}
function ho(i, e, t) {
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
class po extends B {
  constructor(e) {
    super(), j(this, e, ho, fo, U, { href: 0, title: 1, text: 2 });
  }
}
function mo(i) {
  let e, t;
  const n = i[3].default,
    s = V(n, i, i[2], null);
  return {
    c() {
      (e = $("a")), s && s.c(), _(e, "href", i[0]), _(e, "title", i[1]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 4) &&
        x(s, n, r, r[2], t ? W(n, r[2], l, null) : J(r[2]), null),
        (!t || l & 1) && _(e, "href", r[0]),
        (!t || l & 2) && _(e, "title", r[1]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function go(i, e, t) {
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
class _o extends B {
  constructor(e) {
    super(), j(this, e, go, mo, U, { href: 0, title: 1 });
  }
}
function bo(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("em")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function ko(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class yo extends B {
  constructor(e) {
    super(), j(this, e, ko, bo, U, {});
  }
}
function wo(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("del")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function vo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class $o extends B {
  constructor(e) {
    super(), j(this, e, vo, wo, U, {});
  }
}
function Co(i) {
  let e,
    t = i[0].replace(/`/g, "") + "",
    n;
  return {
    c() {
      (e = $("code")), (n = X(t));
    },
    m(s, r) {
      R(s, e, r), y(e, n);
    },
    p(s, [r]) {
      r & 1 && t !== (t = s[0].replace(/`/g, "") + "") && fe(n, t);
    },
    i: Y,
    o: Y,
    d(s) {
      s && C(e);
    },
  };
}
function Ro(i, e, t) {
  let { raw: n } = e;
  return (
    (i.$$set = (s) => {
      "raw" in s && t(0, (n = s.raw));
    }),
    [n]
  );
}
class Lo extends B {
  constructor(e) {
    super(), j(this, e, Ro, Co, U, { raw: 0 });
  }
}
function So(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("strong")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Po(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class To extends B {
  constructor(e) {
    super(), j(this, e, Po, So, U, {});
  }
}
function Oo(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("table")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Eo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class Ao extends B {
  constructor(e) {
    super(), j(this, e, Eo, Oo, U, {});
  }
}
function Io(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("thead")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function qo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class Mo extends B {
  constructor(e) {
    super(), j(this, e, qo, Io, U, {});
  }
}
function zo(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("tbody")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Do(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class No extends B {
  constructor(e) {
    super(), j(this, e, Do, zo, U, {});
  }
}
function Fo(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("tr")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Qo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class Uo extends B {
  constructor(e) {
    super(), j(this, e, Qo, Fo, U, {});
  }
}
function jo(i) {
  let e, t;
  const n = i[3].default,
    s = V(n, i, i[2], null);
  return {
    c() {
      (e = $("td")), s && s.c(), _(e, "align", i[1]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        x(s, n, r, r[2], t ? W(n, r[2], l, null) : J(r[2]), null),
        (!t || l & 2) && _(e, "align", r[1]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Bo(i) {
  let e, t;
  const n = i[3].default,
    s = V(n, i, i[2], null);
  return {
    c() {
      (e = $("th")), s && s.c(), _(e, "align", i[1]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        x(s, n, r, r[2], t ? W(n, r[2], l, null) : J(r[2]), null),
        (!t || l & 2) && _(e, "align", r[1]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (H(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
      },
    }
  );
}
function Ho(i, e, t) {
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
class Ko extends B {
  constructor(e) {
    super(), j(this, e, Ho, Zo, U, { header: 0, align: 1 });
  }
}
function Go(i) {
  let e, t;
  const n = i[3].default,
    s = V(n, i, i[2], null);
  return {
    c() {
      (e = $("ul")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        x(s, n, r, r[2], t ? W(n, r[2], l, null) : J(r[2]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Vo(i) {
  let e, t;
  const n = i[3].default,
    s = V(n, i, i[2], null);
  return {
    c() {
      (e = $("ol")), s && s.c(), _(e, "start", i[1]);
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, l) {
      s &&
        s.p &&
        (!t || l & 4) &&
        x(s, n, r, r[2], t ? W(n, r[2], l, null) : J(r[2]), null),
        (!t || l & 2) && _(e, "start", r[1]);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Wo(i) {
  let e, t, n, s;
  const r = [Vo, Go],
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
        l[e].m(a, u), R(a, n, u), (s = !0);
      },
      p(a, [u]) {
        let c = e;
        (e = o(a)),
          e === c
            ? l[e].p(a, u)
            : (H(),
              g(l[c], 1, 1, () => {
                l[c] = null;
              }),
              K(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              m(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (m(t), (s = !0));
      },
      o(a) {
        g(t), (s = !1);
      },
      d(a) {
        l[e].d(a), a && C(n);
      },
    }
  );
}
function xo(i, e, t) {
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
class Jo extends B {
  constructor(e) {
    super(), j(this, e, xo, Wo, U, { ordered: 0, start: 1 });
  }
}
function Xo(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("li")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Yo(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class ea extends B {
  constructor(e) {
    super(), j(this, e, Yo, Xo, U, {});
  }
}
function ta(i) {
  let e;
  return {
    c() {
      e = $("hr");
    },
    m(t, n) {
      R(t, e, n);
    },
    p: Y,
    i: Y,
    o: Y,
    d(t) {
      t && C(e);
    },
  };
}
class na extends B {
  constructor(e) {
    super(), j(this, e, null, ta, U, {});
  }
}
function sa(i) {
  let e, t;
  return {
    c() {
      (e = new ur(!1)), (t = se()), (e.a = t);
    },
    m(n, s) {
      e.m(i[0], n, s), R(n, t, s);
    },
    p(n, [s]) {
      s & 1 && e.p(n[0]);
    },
    i: Y,
    o: Y,
    d(n) {
      n && C(t), n && e.d();
    },
  };
}
function ra(i, e, t) {
  let { text: n } = e;
  return (
    (i.$$set = (s) => {
      "text" in s && t(0, (n = s.text));
    }),
    [n]
  );
}
class ia extends B {
  constructor(e) {
    super(), j(this, e, ra, sa, U, { text: 0 });
  }
}
function la(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("blockquote")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(e, null), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function oa(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class aa extends B {
  constructor(e) {
    super(), j(this, e, oa, la, U, {});
  }
}
function ua(i) {
  let e, t, n;
  return {
    c() {
      (e = $("pre")), (t = $("code")), (n = X(i[1])), _(e, "class", i[0]);
    },
    m(s, r) {
      R(s, e, r), y(e, t), y(t, n);
    },
    p(s, [r]) {
      r & 2 && fe(n, s[1]), r & 1 && _(e, "class", s[0]);
    },
    i: Y,
    o: Y,
    d(s) {
      s && C(e);
    },
  };
}
function ca(i, e, t) {
  let { lang: n } = e,
    { text: s } = e;
  return (
    (i.$$set = (r) => {
      "lang" in r && t(0, (n = r.lang)), "text" in r && t(1, (s = r.text));
    }),
    [n, s]
  );
}
class fa extends B {
  constructor(e) {
    super(), j(this, e, ca, ua, U, { lang: 0, text: 1 });
  }
}
function ha(i) {
  let e, t;
  const n = i[1].default,
    s = V(n, i, i[0], null);
  return {
    c() {
      (e = $("br")), s && s.c();
    },
    m(r, l) {
      R(r, e, l), s && s.m(r, l), (t = !0);
    },
    p(r, [l]) {
      s &&
        s.p &&
        (!t || l & 1) &&
        x(s, n, r, r[0], t ? W(n, r[0], l, null) : J(r[0]), null);
    },
    i(r) {
      t || (m(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function da(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class pa extends B {
  constructor(e) {
    super(), j(this, e, da, ha, U, {});
  }
}
const ma = {
    heading: ro,
    paragraph: oo,
    text: co,
    image: po,
    link: _o,
    em: yo,
    strong: To,
    codespan: Lo,
    del: $o,
    table: Ao,
    tablehead: Mo,
    tablebody: No,
    tablerow: Uo,
    tablecell: Ko,
    list: Jo,
    orderedlistitem: null,
    unorderedlistitem: null,
    listitem: ea,
    hr: na,
    html: ia,
    blockquote: aa,
    code: fa,
    br: pa,
  },
  ga = {
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
function _a(i) {
  let e, t;
  return (
    (e = new Ne({ props: { tokens: i[0], renderers: i[1] } })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const r = {};
        s & 1 && (r.tokens = n[0]), s & 2 && (r.renderers = n[1]), e.$set(r);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function ba(i, e, t) {
  let n,
    s,
    r,
    l,
    { source: o = [] } = e,
    { renderers: a = {} } = e,
    { options: u = {} } = e,
    { isInline: c = !1 } = e;
  const d = cr();
  let h, f, p;
  return (
    ms(Js, { slug: (b) => (s ? s.slug(b) : ""), getOptions: () => r }),
    Ke(() => {
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
        i.$$.dirty & 4 && (s = o ? new Gt() : void 0),
        i.$$.dirty & 16 && t(9, (r = { ...ga, ...u })),
        i.$$.dirty & 869 &&
          (n
            ? t(0, (h = o))
            : (t(6, (f = new Re(r))),
              t(0, (h = c ? f.inlineTokens(o) : f.lex(o))),
              d("parsed", { tokens: h }))),
        i.$$.dirty & 8 && t(1, (l = { ...ma, ...a })),
        i.$$.dirty & 385 && p && !n && d("parsed", { tokens: h });
    }),
    [h, l, o, a, u, c, f, p, n, r]
  );
}
class ka extends B {
  constructor(e) {
    super(),
      j(this, e, ba, _a, U, {
        source: 2,
        renderers: 3,
        options: 4,
        isInline: 5,
      });
  }
}
function ya(i) {
  let e;
  const t = i[3].default,
    n = V(t, i, i[2], null);
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
        x(n, t, s, s[2], e ? W(t, s[2], r, null) : J(s[2]), null);
    },
    i(s) {
      e || (m(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function wa(i) {
  let e = "...",
    t,
    n,
    s,
    r;
  const l = i[3].default,
    o = V(l, i, i[2], null);
  return {
    c() {
      (t = X(e)),
        (n = Z()),
        (s = $("div")),
        o && o.c(),
        _(s, "class", "opacity-0 h-0");
    },
    m(a, u) {
      R(a, t, u), R(a, n, u), R(a, s, u), o && o.m(s, null), (r = !0);
    },
    p(a, u) {
      o &&
        o.p &&
        (!r || u & 4) &&
        x(o, l, a, a[2], r ? W(l, a[2], u, null) : J(a[2]), null);
    },
    i(a) {
      r || (m(o, a), (r = !0));
    },
    o(a) {
      g(o, a), (r = !1);
    },
    d(a) {
      a && C(t), a && C(n), a && C(s), o && o.d(a);
    },
  };
}
function va(i) {
  let e, t, n, s, r, l, o, a, u, c;
  const d = [wa, ya],
    h = [];
  function f(p, b) {
    return p[0] ? 0 : 1;
  }
  return (
    (n = f(i)),
    (s = h[n] = d[n](i)),
    (o = new Bs({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = $("button")),
          (t = $("div")),
          s.c(),
          (r = Z()),
          (l = $("div")),
          M(o.$$.fragment),
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
        R(p, e, b),
          y(e, t),
          h[n].m(t, null),
          y(e, r),
          y(e, l),
          I(o, l, null),
          (a = !0),
          u || ((c = ye(e, "click", i[4])), (u = !0));
      },
      p(p, [b]) {
        let k = n;
        (n = f(p)),
          n === k
            ? h[n].p(p, b)
            : (H(),
              g(h[k], 1, 1, () => {
                h[k] = null;
              }),
              K(),
              (s = h[n]),
              s ? s.p(p, b) : ((s = h[n] = d[n](p)), s.c()),
              m(s, 1),
              s.m(t, null)),
          (!a || b & 2) && (e.disabled = p[1]),
          (!a || b & 1) && ie(e, "opacity-90", p[0]),
          (!a || b & 2) && ie(e, "opacity-70", p[1]);
      },
      i(p) {
        a || (m(s), m(o.$$.fragment, p), (a = !0));
      },
      o(p) {
        g(s), g(o.$$.fragment, p), (a = !1);
      },
      d(p) {
        p && C(e), h[n].d(), q(o), (u = !1), c();
      },
    }
  );
}
function $a(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { isLoading: r = !1 } = e,
    { disabled: l = !1 } = e;
  function o(a) {
    fr.call(this, i, a);
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
class Xs extends B {
  constructor(e) {
    super(), j(this, e, $a, va, U, { isLoading: 0, disabled: 1 });
  }
}
function Ca(i) {
  let e, t, n;
  return (
    (t = new Xs({
      props: {
        disabled: i[8].isLoading,
        isLoading: i[8].isLoading,
        $$slots: { default: [La] },
        $$scope: { ctx: i },
      },
    })),
    t.$on("click", i[17]),
    {
      c() {
        (e = $("div")), M(t.$$.fragment), _(e, "class", "py-1");
      },
      m(s, r) {
        R(s, e, r), I(t, e, null), (n = !0);
      },
      p(s, r) {
        const l = {};
        r & 256 && (l.disabled = s[8].isLoading),
          r & 256 && (l.isLoading = s[8].isLoading),
          r & 1048582 && (l.$$scope = { dirty: r, ctx: s }),
          t.$set(l);
      },
      i(s) {
        n || (m(t.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(t.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(e), q(t);
      },
    }
  );
}
function Ra(i) {
  let e, t, n, s, r, l;
  return (
    (r = new Zs({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = $("div")),
          (t = $("span")),
          (n = X(i[1])),
          (s = Z()),
          M(r.$$.fragment),
          _(e, "class", "flex items-center gap-2 justify-end py-2");
      },
      m(o, a) {
        R(o, e, a), y(e, t), y(t, n), y(e, s), I(r, e, null), (l = !0);
      },
      p(o, a) {
        (!l || a & 2) && fe(n, o[1]);
      },
      i(o) {
        l || (m(r.$$.fragment, o), (l = !0));
      },
      o(o) {
        g(r.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), q(r);
      },
    }
  );
}
function La(i) {
  let e, t, n;
  return {
    c() {
      (e = X(i[1])), (t = X(" ⇒ ")), (n = X(i[2]));
    },
    m(s, r) {
      R(s, e, r), R(s, t, r), R(s, n, r);
    },
    p(s, r) {
      r & 2 && fe(e, s[1]), r & 4 && fe(n, s[2]);
    },
    d(s) {
      s && C(e), s && C(t), s && C(n);
    },
  };
}
function Nn(i) {
  var T;
  let e, t, n, s, r, l, o, a, u, c, d, h;
  t = new ka({ props: { source: i[5].description ?? "" } });
  let f = i[5].license && Fn(i),
    p = i[5].author && Qn(i),
    b = i[9].data && Un(i),
    k = ((T = i[5].repository) == null ? void 0 : T.url) && jn(i),
    v = i[5].homepage && Bn(i),
    w = i[5].bugs && Zn(i);
  return {
    c() {
      (e = $("div")),
        M(t.$$.fragment),
        (n = Z()),
        (s = $("div")),
        (r = $("div")),
        f && f.c(),
        (l = Z()),
        p && p.c(),
        (o = Z()),
        b && b.c(),
        (a = Z()),
        (u = $("div")),
        k && k.c(),
        (c = Z()),
        v && v.c(),
        (d = Z()),
        w && w.c(),
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
    m(S, E) {
      R(S, e, E),
        I(t, e, null),
        R(S, n, E),
        R(S, s, E),
        y(s, r),
        f && f.m(r, null),
        y(r, l),
        p && p.m(r, null),
        y(r, o),
        b && b.m(r, null),
        y(s, a),
        y(s, u),
        k && k.m(u, null),
        y(u, c),
        v && v.m(u, null),
        y(u, d),
        w && w.m(u, null),
        (h = !0);
    },
    p(S, E) {
      var P;
      const L = {};
      E & 32 && (L.source = S[5].description ?? ""),
        t.$set(L),
        S[5].license
          ? f
            ? (f.p(S, E), E & 32 && m(f, 1))
            : ((f = Fn(S)), f.c(), m(f, 1), f.m(r, l))
          : f &&
            (H(),
            g(f, 1, 1, () => {
              f = null;
            }),
            K()),
        S[5].author
          ? p
            ? p.p(S, E)
            : ((p = Qn(S)), p.c(), p.m(r, o))
          : p && (p.d(1), (p = null)),
        S[9].data
          ? b
            ? b.p(S, E)
            : ((b = Un(S)), b.c(), b.m(r, null))
          : b && (b.d(1), (b = null)),
        (P = S[5].repository) != null && P.url
          ? k
            ? (k.p(S, E), E & 32 && m(k, 1))
            : ((k = jn(S)), k.c(), m(k, 1), k.m(u, c))
          : k &&
            (H(),
            g(k, 1, 1, () => {
              k = null;
            }),
            K()),
        S[5].homepage
          ? v
            ? (v.p(S, E), E & 32 && m(v, 1))
            : ((v = Bn(S)), v.c(), m(v, 1), v.m(u, d))
          : v &&
            (H(),
            g(v, 1, 1, () => {
              v = null;
            }),
            K()),
        S[5].bugs
          ? w
            ? (w.p(S, E), E & 32 && m(w, 1))
            : ((w = Zn(S)), w.c(), m(w, 1), w.m(u, null))
          : w &&
            (H(),
            g(w, 1, 1, () => {
              w = null;
            }),
            K());
    },
    i(S) {
      h || (m(t.$$.fragment, S), m(f), m(k), m(v), m(w), (h = !0));
    },
    o(S) {
      g(t.$$.fragment, S), g(f), g(k), g(v), g(w), (h = !1);
    },
    d(S) {
      S && C(e),
        q(t),
        S && C(n),
        S && C(s),
        f && f.d(),
        p && p.d(),
        b && b.d(),
        k && k.d(),
        v && v.d(),
        w && w.d();
    },
  };
}
function Fn(i) {
  let e,
    t,
    n,
    s,
    r = (i[5].license ?? "") + "",
    l,
    o;
  return (
    (t = new tl({ props: { class: "h-4 w-4 -translate-y-px" } })),
    {
      c() {
        (e = $("div")),
          M(t.$$.fragment),
          (n = Z()),
          (s = $("span")),
          (l = X(r)),
          _(e, "class", "flex gap-1 items-center");
      },
      m(a, u) {
        R(a, e, u), I(t, e, null), y(e, n), y(e, s), y(s, l), (o = !0);
      },
      p(a, u) {
        (!o || u & 32) && r !== (r = (a[5].license ?? "") + "") && fe(l, r);
      },
      i(a) {
        o || (m(t.$$.fragment, a), (o = !0));
      },
      o(a) {
        g(t.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && C(e), q(t);
      },
    }
  );
}
function Qn(i) {
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
        (n = Z()),
        (s = $("span")),
        (l = X(r)),
        _(s, "class", "font-semibold"),
        _(e, "class", "text-granny-smith-apple flex items-center gap-2");
    },
    m(o, a) {
      R(o, e, a), y(e, t), y(e, n), y(e, s), y(s, l);
    },
    p(o, a) {
      a & 32 && r !== (r = o[5].author.name + "") && fe(l, r);
    },
    d(o) {
      o && C(e);
    },
  };
}
function Un(i) {
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
    d,
    h;
  return {
    c() {
      (e = $("div")),
        (t = X(`Bundle size
              `)),
        (n = $("span")),
        (r = X(s)),
        (l = X("kb")),
        (o = X(`
              (gzipped) |
              `)),
        (a = $("span")),
        (c = X(u)),
        (d = X("kb")),
        (h = X(" (uncompressed)")),
        _(n, "class", "font-semibold"),
        _(a, "class", "font-semibold");
    },
    m(f, p) {
      R(f, e, p),
        y(e, t),
        y(e, n),
        y(n, r),
        y(n, l),
        y(e, o),
        y(e, a),
        y(a, c),
        y(a, d),
        y(e, h);
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
      f && C(e);
    },
  };
}
function jn(i) {
  let e, t, n, s;
  return (
    (t = new Mi({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = $("a")),
          M(t.$$.fragment),
          _(e, "href", (n = i[5].repository.url.replace(/^git\+/, ""))),
          _(e, "target", "_blank"),
          _(e, "class", "hover:underline"),
          _(e, "rel", "noopener noreferrer"),
          _(e, "title", "Github");
      },
      m(r, l) {
        R(r, e, l), I(t, e, null), (s = !0);
      },
      p(r, l) {
        (!s ||
          (l & 32 && n !== (n = r[5].repository.url.replace(/^git\+/, "")))) &&
          _(e, "href", n);
      },
      i(r) {
        s || (m(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && C(e), q(t);
      },
    }
  );
}
function Bn(i) {
  let e, t, n, s;
  return (
    (t = new Qi({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = $("a")),
          M(t.$$.fragment),
          _(e, "href", (n = i[5].homepage)),
          _(e, "target", "_blank"),
          _(e, "class", "hover:underline"),
          _(e, "rel", "noopener noreferrer"),
          _(e, "title", "Homepage");
      },
      m(r, l) {
        R(r, e, l), I(t, e, null), (s = !0);
      },
      p(r, l) {
        (!s || (l & 32 && n !== (n = r[5].homepage))) && _(e, "href", n);
      },
      i(r) {
        s || (m(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && C(e), q(t);
      },
    }
  );
}
function Zn(i) {
  let e, t, n, s;
  return (
    (t = new Li({ props: { class: "h-5 w-5" } })),
    {
      c() {
        (e = $("a")),
          M(t.$$.fragment),
          _(e, "href", (n = i[5].bugs.url)),
          _(e, "target", "_blank"),
          _(e, "class", "hover:underline"),
          _(e, "rel", "noopener noreferrer"),
          _(e, "title", "Bugs");
      },
      m(r, l) {
        R(r, e, l), I(t, e, null), (s = !0);
      },
      p(r, l) {
        (!s || (l & 32 && n !== (n = r[5].bugs.url))) && _(e, "href", n);
      },
      i(r) {
        s || (m(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && C(e), q(t);
      },
    }
  );
}
function Sa(i) {
  let e,
    t,
    n,
    s,
    r,
    l,
    o,
    a,
    u = hn(Hn, i[0]) + "",
    c,
    d,
    h,
    f,
    p,
    b,
    k,
    v,
    w,
    T,
    S;
  o = new xi({ props: { class: "h-6 w-6" } });
  const E = [Ra, Ca],
    L = [];
  function P(N, re) {
    return N[4] ? 0 : 1;
  }
  (p = P(i)), (b = L[p] = E[p](i));
  let O = i[6] && i[5] && Nn(i);
  return {
    c() {
      (e = $("li")),
        (t = $("div")),
        (n = $("div")),
        (s = $("div")),
        (r = $("a")),
        (l = $("div")),
        M(o.$$.fragment),
        (a = Z()),
        (c = X(u)),
        (h = Z()),
        (f = $("div")),
        b.c(),
        (k = Z()),
        O && O.c(),
        ie(l, "hidden", !i[6]),
        _(r, "href", (d = `https://npmjs.com/package/${i[0]}`)),
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
          (v = `animation-delay: ${(i[3] + 1) * i[13]}s; opacity: ${
            i[7] ? 0.4 : 1
          }!important;`)
        ),
        ie(e, "border-t", i[3] !== 0);
    },
    m(N, re) {
      R(N, e, re),
        y(e, t),
        y(t, n),
        y(n, s),
        y(s, r),
        y(r, l),
        I(o, l, null),
        y(r, a),
        y(r, c),
        y(n, h),
        y(n, f),
        L[p].m(f, null),
        y(t, k),
        O && O.m(t, null),
        (w = !0),
        T || ((S = [ye(e, "click", i[12]), ye(e, "keydown", i[12])]), (T = !0));
    },
    p(N, [re]) {
      (!w || re & 64) && ie(l, "hidden", !N[6]),
        (!w || re & 1) && u !== (u = hn(Hn, N[0]) + "") && fe(c, u),
        (!w || (re & 1 && d !== (d = `https://npmjs.com/package/${N[0]}`))) &&
          _(r, "href", d),
        (!w || re & 64) && ie(r, "pt-1", N[6]);
      let ve = p;
      (p = P(N)),
        p === ve
          ? L[p].p(N, re)
          : (H(),
            g(L[ve], 1, 1, () => {
              L[ve] = null;
            }),
            K(),
            (b = L[p]),
            b ? b.p(N, re) : ((b = L[p] = E[p](N)), b.c()),
            m(b, 1),
            b.m(f, null)),
        N[6] && N[5]
          ? O
            ? (O.p(N, re), re & 96 && m(O, 1))
            : ((O = Nn(N)), O.c(), m(O, 1), O.m(t, null))
          : O &&
            (H(),
            g(O, 1, 1, () => {
              O = null;
            }),
            K()),
        (!w || re & 64) && ie(t, "expanded", N[6]),
        (!w ||
          (re & 136 &&
            v !==
              (v = `animation-delay: ${(N[3] + 1) * N[13]}s; opacity: ${
                N[7] ? 0.4 : 1
              }!important;`))) &&
          _(e, "style", v),
        (!w || re & 8) && ie(e, "border-t", N[3] !== 0);
    },
    i(N) {
      w || (m(o.$$.fragment, N), m(b), m(O), (w = !0));
    },
    o(N) {
      g(o.$$.fragment, N), g(b), g(O), (w = !1);
    },
    d(N) {
      N && C(e), q(o), L[p].d(), O && O.d(), (T = !1), Le(S);
    },
  };
}
const Hn = 36;
function Pa(i, e, t) {
  let n,
    s,
    r,
    l,
    { name: o = "" } = e,
    { version: a = "" } = e,
    { latest: u = "" } = e,
    { index: c = 0 } = e,
    { isLatest: d = !1 } = e,
    { meta: h } = e,
    { expandedRowIndex: f = -1 } = e,
    { selectedPackagePath: p = "" } = e;
  const b = Ct(),
    k = Fs();
  Tt(i, k, (P) => t(8, (r = P)));
  async function v(P) {
    try {
      const O = await r.mutateAsync({ packages: P, path: p });
      b.setQueryData(nt.package(p), Qs(O));
    } catch (O) {
      console.log("Failed to upgrade packages:", { originalError: O });
    }
  }
  function w() {
    f === c ? t(15, (f = -1)) : t(15, (f = c));
  }
  const T = 1 / 30;
  function S(P) {
    P.key === "Escape" && t(15, (f = -1));
  }
  const E = oi(o);
  Tt(i, E, (P) => t(9, (l = P))),
    Ke(() => {
      window.addEventListener("keydown", S);
    }),
    Qt(() => {
      window.removeEventListener("keydown", S);
    });
  const L = (P) => {
    P.stopPropagation(), v([{ name: o, version: a, latest: u, meta: h }]);
  };
  return (
    (i.$$set = (P) => {
      "name" in P && t(0, (o = P.name)),
        "version" in P && t(1, (a = P.version)),
        "latest" in P && t(2, (u = P.latest)),
        "index" in P && t(3, (c = P.index)),
        "isLatest" in P && t(4, (d = P.isLatest)),
        "meta" in P && t(5, (h = P.meta)),
        "expandedRowIndex" in P && t(15, (f = P.expandedRowIndex)),
        "selectedPackagePath" in P && t(16, (p = P.selectedPackagePath));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 32776 && t(6, (n = f === c)),
        i.$$.dirty & 32832 && t(7, (s = !n && f !== -1));
    }),
    [o, a, u, c, d, h, n, s, r, l, k, v, w, T, E, f, p, L]
  );
}
class Ta extends B {
  constructor(e) {
    super(),
      j(this, e, Pa, Sa, U, {
        name: 0,
        version: 1,
        latest: 2,
        index: 3,
        isLatest: 4,
        meta: 5,
        expandedRowIndex: 15,
        selectedPackagePath: 16,
      });
  }
}
function Kn(i, e, t) {
  const n = i.slice();
  return (n[5] = e[t]), n;
}
function Gn(i) {
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
        (s = X(n)),
        _(t, "data-page", (r = i[5])),
        _(t, "class", "btn-arrow text-xl svelte-16bdnnj"),
        ie(t, "bg-castleton-green", i[5] === i[0]);
    },
    m(a, u) {
      R(a, e, u), y(e, t), y(t, s), l || ((o = ye(t, "click", i[2])), (l = !0));
    },
    p(a, u) {
      u & 2 && n !== (n = a[5] + 1 + "") && fe(s, n),
        u & 2 && r !== (r = a[5]) && _(t, "data-page", r),
        u & 3 && ie(t, "bg-castleton-green", a[5] === a[0]);
    },
    d(a) {
      a && C(e), (l = !1), o();
    },
  };
}
function Oa(i) {
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
    d,
    h,
    f,
    p = Nt(0, i[1]),
    b = [];
  for (let k = 0; k < p.length; k += 1) b[k] = Gn(Kn(i, p, k));
  return {
    c() {
      (e = $("ul")), (t = $("li")), (n = $("button")), (s = X("◄")), (l = Z());
      for (let k = 0; k < b.length; k += 1) b[k].c();
      (o = Z()),
        (a = $("li")),
        (u = $("button")),
        (c = X("►")),
        _(n, "class", "btn-arrow svelte-16bdnnj"),
        (n.disabled = r = i[0] === 0),
        _(u, "class", "btn-arrow svelte-16bdnnj"),
        (u.disabled = d = i[0] === i[1] - 1),
        _(
          e,
          "class",
          "inline-flex mx-auto font-medium p-4 py-2 items-center gap-2"
        );
    },
    m(k, v) {
      R(k, e, v), y(e, t), y(t, n), y(n, s), y(e, l);
      for (let w = 0; w < b.length; w += 1) b[w] && b[w].m(e, null);
      y(e, o),
        y(e, a),
        y(a, u),
        y(u, c),
        h || ((f = [ye(n, "click", i[4]), ye(u, "click", i[3])]), (h = !0));
    },
    p(k, [v]) {
      if ((v & 1 && r !== (r = k[0] === 0) && (n.disabled = r), v & 7)) {
        p = Nt(0, k[1]);
        let w;
        for (w = 0; w < p.length; w += 1) {
          const T = Kn(k, p, w);
          b[w] ? b[w].p(T, v) : ((b[w] = Gn(T)), b[w].c(), b[w].m(e, o));
        }
        for (; w < b.length; w += 1) b[w].d(1);
        b.length = p.length;
      }
      v & 3 && d !== (d = k[0] === k[1] - 1) && (u.disabled = d);
    },
    i: Y,
    o: Y,
    d(k) {
      k && C(e), we(b, k), (h = !1), Le(f);
    },
  };
}
function Ea(i, e, t) {
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
class Aa extends B {
  constructor(e) {
    super(), j(this, e, Ea, Oa, U, { pages: 1, pageIndex: 0 });
  }
}
function Vn(i, e, t) {
  const n = i.slice();
  return (
    (n[30] = e[t].name),
    (n[31] = e[t].version),
    (n[32] = e[t].latest),
    (n[33] = e[t].isLatest),
    (n[34] = e[t].meta),
    (n[36] = t),
    n
  );
}
function Wn(i, e, t) {
  const n = i.slice();
  return (n[37] = e[t].keys), (n[38] = e[t].label), n;
}
function xn(i, e, t) {
  const n = i.slice();
  return (n[41] = e[t].symbol), (n[42] = e[t].rotation), n;
}
function Ia(i) {
  let e, t;
  return (
    (e = new Hi({})),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function qa(i) {
  let e, t;
  return (
    (e = new ll({})),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function Jn(i) {
  let e,
    t,
    n,
    s,
    r = i[41] + "",
    l,
    o,
    a;
  return (
    (t = new Bs({
      props: { class: "h-3 w-3", style: `transform: rotate(${i[42]}deg);` },
    })),
    {
      c() {
        (e = $("kbd")),
          M(t.$$.fragment),
          (n = Z()),
          (s = $("span")),
          (l = X(r)),
          (o = Z()),
          _(s, "class", "sr-only"),
          _(
            e,
            "class",
            "text-sm font-semibold flex p-1.5 bg-castleton-green/40 rounded"
          );
      },
      m(u, c) {
        R(u, e, c), I(t, e, null), y(e, n), y(e, s), y(s, l), y(e, o), (a = !0);
      },
      p: Y,
      i(u) {
        a || (m(t.$$.fragment, u), (a = !0));
      },
      o(u) {
        g(t.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && C(e), q(t);
      },
    }
  );
}
function Xn(i) {
  let e,
    t,
    n,
    s,
    r = i[38] + "",
    l,
    o,
    a,
    u = i[37],
    c = [];
  for (let h = 0; h < u.length; h += 1) c[h] = Jn(xn(i, u, h));
  const d = (h) =>
    g(c[h], 1, 1, () => {
      c[h] = null;
    });
  return {
    c() {
      (e = $("li")), (t = $("div"));
      for (let h = 0; h < c.length; h += 1) c[h].c();
      (n = Z()),
        (s = $("span")),
        (l = X(r)),
        (o = Z()),
        _(t, "class", "flex gap-2"),
        _(s, "class", "ml-2 text-sm"),
        _(e, "class", "flex items-center");
    },
    m(h, f) {
      R(h, e, f), y(e, t);
      for (let p = 0; p < c.length; p += 1) c[p] && c[p].m(t, null);
      y(e, n), y(e, s), y(s, l), y(e, o), (a = !0);
    },
    p(h, f) {
      if (f[0] & 65536) {
        u = h[37];
        let p;
        for (p = 0; p < u.length; p += 1) {
          const b = xn(h, u, p);
          c[p]
            ? (c[p].p(b, f), m(c[p], 1))
            : ((c[p] = Jn(b)), c[p].c(), m(c[p], 1), c[p].m(t, null));
        }
        for (H(), p = u.length; p < c.length; p += 1) d(p);
        K();
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
      for (let f = 0; f < c.length; f += 1) g(c[f]);
      a = !1;
    },
    d(h) {
      h && C(e), we(c, h);
    },
  };
}
function Yn(i) {
  let e, t;
  return (
    (e = new Zs({ props: { class: "h-4 w-4 ml-1" } })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function es(i) {
  let e, t;
  return (
    (e = new Xs({
      props: {
        disabled: i[13].isLoading,
        isLoading: i[13].isLoading,
        $$slots: { default: [Ma] },
        $$scope: { ctx: i },
      },
    })),
    e.$on("click", i[25]),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s[0] & 8192 && (r.disabled = n[13].isLoading),
          s[0] & 8192 && (r.isLoading = n[13].isLoading),
          s[1] & 16384 && (r.$$scope = { dirty: s, ctx: n }),
          e.$set(r);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function Ma(i) {
  let e;
  return {
    c() {
      e = X("Upgrade all");
    },
    m(t, n) {
      R(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function ts(i) {
  let e, t, n, s;
  function r(a) {
    i[26](a);
  }
  function l(a) {
    i[27](a);
  }
  let o = {
    index: i[36],
    name: i[30],
    version: i[31],
    latest: i[32],
    isLatest: i[33],
    meta: i[34],
  };
  return (
    i[1] !== void 0 && (o.selectedPackagePath = i[1]),
    i[6] !== void 0 && (o.expandedRowIndex = i[6]),
    (e = new Ta({ props: o })),
    De.push(() => Ye(e, "selectedPackagePath", r)),
    De.push(() => Ye(e, "expandedRowIndex", l)),
    {
      c() {
        M(e.$$.fragment);
      },
      m(a, u) {
        I(e, a, u), (s = !0);
      },
      p(a, u) {
        const c = {};
        u[0] & 2048 && (c.name = a[30]),
          u[0] & 2048 && (c.version = a[31]),
          u[0] & 2048 && (c.latest = a[32]),
          u[0] & 2048 && (c.isLatest = a[33]),
          u[0] & 2048 && (c.meta = a[34]),
          !t &&
            u[0] & 2 &&
            ((t = !0), (c.selectedPackagePath = a[1]), Xe(() => (t = !1))),
          !n &&
            u[0] & 64 &&
            ((n = !0), (c.expandedRowIndex = a[6]), Xe(() => (n = !1))),
          e.$set(c);
      },
      i(a) {
        s || (m(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        g(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        q(e, a);
      },
    }
  );
}
function ns(i) {
  let e, t, n, s, r;
  function l(a) {
    i[28](a);
  }
  let o = { pages: i[12] };
  return (
    i[3] !== void 0 && (o.pageIndex = i[3]),
    (n = new Aa({ props: o })),
    De.push(() => Ye(n, "pageIndex", l)),
    {
      c() {
        (e = $("footer")),
          (t = $("div")),
          M(n.$$.fragment),
          _(t, "class", "bg-slate-900/90 rounded-full"),
          _(e, "class", "grid place-items-center");
      },
      m(a, u) {
        R(a, e, u), y(e, t), I(n, t, null), (r = !0);
      },
      p(a, u) {
        const c = {};
        u[0] & 4096 && (c.pages = a[12]),
          !s &&
            u[0] & 8 &&
            ((s = !0), (c.pageIndex = a[3]), Xe(() => (s = !1))),
          n.$set(c);
      },
      i(a) {
        r || (m(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        g(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && C(e), q(n);
      },
    }
  );
}
function za(i) {
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
    d,
    h,
    f,
    p,
    b,
    k,
    v = i[0] === "dependencies" ? "Dependencies" : "Dev Dependencies",
    w,
    T,
    S,
    E = i[5].length + "",
    L,
    P,
    O = i[2].length + "",
    N,
    re,
    ve,
    Oe,
    Qe,
    Ue,
    Ee,
    lt,
    Q,
    $e,
    Vt;
  const Wt = [qa, Ia],
    Ae = [];
  function xt(z, ee) {
    return z[7] ? 0 : 1;
  }
  (s = xt(i)), (r = Ae[s] = Wt[s](i));
  let Ie = i[16],
    ae = [];
  for (let z = 0; z < Ie.length; z += 1) ae[z] = Xn(Wn(i, Ie, z));
  const er = (z) =>
    g(ae[z], 1, 1, () => {
      ae[z] = null;
    });
  let pe = i[9] && Yn(),
    he = !i[9] && es(i),
    qe = i[11],
    ue = [];
  for (let z = 0; z < qe.length; z += 1) ue[z] = ts(Vn(i, qe, z));
  const tr = (z) =>
    g(ue[z], 1, 1, () => {
      ue[z] = null;
    });
  let de = i[12] > 1 && ns(i);
  return {
    c() {
      (e = $("div")),
        (t = $("aside")),
        (n = $("button")),
        r.c(),
        (l = Z()),
        (o = $("ul"));
      for (let z = 0; z < ae.length; z += 1) ae[z].c();
      (u = Z()),
        (c = $("section")),
        (d = $("div")),
        (h = $("input")),
        (f = Z()),
        (p = $("header")),
        (b = $("div")),
        (k = $("div")),
        (w = X(v)),
        (T = Z()),
        (S = $("span")),
        (L = X(E)),
        (P = X("/")),
        (N = X(O)),
        (re = Z()),
        pe && pe.c(),
        (ve = Z()),
        (Oe = $("div")),
        he && he.c(),
        (Qe = Z()),
        (Ue = $("main")),
        (Ee = $("ul"));
      for (let z = 0; z < ue.length; z += 1) ue[z].c();
      (lt = Z()),
        de && de.c(),
        _(n, "class", "help-trigger svelte-1lgocty"),
        ie(n, "hidden", i[7]),
        _(o, "class", "bg-slate-900/60 p-4 rounded-xl grid gap-2 opacity-10"),
        _(o, "aria-hidden", (a = !i[7])),
        ie(o, "opacity-100", i[7]),
        _(
          t,
          "class",
          "absolute right-0 top-8 transition-all duration-300 ease-in"
        ),
        ie(t, "translate-x-64", i[7]),
        _(h, "type", "search"),
        _(h, "class", "search-input svelte-1lgocty"),
        _(h, "placeholder", "package name or version"),
        _(d, "class", ""),
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
        _(Ee, "class", "grid"),
        _(Ue, "class", "min-h-[32rem] mx-2"),
        _(
          c,
          "class",
          "bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2"
        ),
        _(e, "class", "relative");
    },
    m(z, ee) {
      R(z, e, ee), y(e, t), y(t, n), Ae[s].m(n, null), y(t, l), y(t, o);
      for (let ke = 0; ke < ae.length; ke += 1) ae[ke] && ae[ke].m(o, null);
      y(e, u),
        y(e, c),
        y(c, d),
        y(d, h),
        en(h, i[4]),
        y(c, f),
        y(c, p),
        y(p, b),
        y(b, k),
        y(k, w),
        y(k, T),
        y(k, S),
        y(S, L),
        y(S, P),
        y(S, N),
        y(b, re),
        pe && pe.m(b, null),
        y(p, ve),
        y(p, Oe),
        he && he.m(Oe, null),
        y(c, Qe),
        y(c, Ue),
        y(Ue, Ee);
      for (let ke = 0; ke < ue.length; ke += 1) ue[ke] && ue[ke].m(Ee, null);
      y(c, lt),
        de && de.m(c, null),
        (Q = !0),
        $e ||
          ((Vt = [
            ye(n, "click", i[20]),
            ir(ol.call(null, t)),
            ye(t, "outsideclick", i[21]),
            ye(h, "input", i[22]),
            ye(h, "focus", i[23]),
            ye(h, "blur", i[24]),
          ]),
          ($e = !0));
    },
    p(z, ee) {
      let ke = s;
      if (
        ((s = xt(z)),
        s !== ke &&
          (H(),
          g(Ae[ke], 1, 1, () => {
            Ae[ke] = null;
          }),
          K(),
          (r = Ae[s]),
          r || ((r = Ae[s] = Wt[s](z)), r.c()),
          m(r, 1),
          r.m(n, null)),
        (!Q || ee[0] & 128) && ie(n, "hidden", z[7]),
        ee[0] & 65536)
      ) {
        Ie = z[16];
        let te;
        for (te = 0; te < Ie.length; te += 1) {
          const Ve = Wn(z, Ie, te);
          ae[te]
            ? (ae[te].p(Ve, ee), m(ae[te], 1))
            : ((ae[te] = Xn(Ve)), ae[te].c(), m(ae[te], 1), ae[te].m(o, null));
        }
        for (H(), te = Ie.length; te < ae.length; te += 1) er(te);
        K();
      }
      if (
        ((!Q || (ee[0] & 128 && a !== (a = !z[7]))) && _(o, "aria-hidden", a),
        (!Q || ee[0] & 128) && ie(o, "opacity-100", z[7]),
        (!Q || ee[0] & 128) && ie(t, "translate-x-64", z[7]),
        ee[0] & 16 && h.value !== z[4] && en(h, z[4]),
        (!Q || ee[0] & 1) &&
          v !==
            (v =
              z[0] === "dependencies" ? "Dependencies" : "Dev Dependencies") &&
          fe(w, v),
        (!Q || ee[0] & 32) && E !== (E = z[5].length + "") && fe(L, E),
        (!Q || ee[0] & 4) && O !== (O = z[2].length + "") && fe(N, O),
        z[9]
          ? pe
            ? ee[0] & 512 && m(pe, 1)
            : ((pe = Yn()), pe.c(), m(pe, 1), pe.m(b, null))
          : pe &&
            (H(),
            g(pe, 1, 1, () => {
              pe = null;
            }),
            K()),
        z[9]
          ? he &&
            (H(),
            g(he, 1, 1, () => {
              he = null;
            }),
            K())
          : he
          ? (he.p(z, ee), ee[0] & 512 && m(he, 1))
          : ((he = es(z)), he.c(), m(he, 1), he.m(Oe, null)),
        ee[0] & 2114)
      ) {
        qe = z[11];
        let te;
        for (te = 0; te < qe.length; te += 1) {
          const Ve = Vn(z, qe, te);
          ue[te]
            ? (ue[te].p(Ve, ee), m(ue[te], 1))
            : ((ue[te] = ts(Ve)), ue[te].c(), m(ue[te], 1), ue[te].m(Ee, null));
        }
        for (H(), te = qe.length; te < ue.length; te += 1) tr(te);
        K();
      }
      z[12] > 1
        ? de
          ? (de.p(z, ee), ee[0] & 4096 && m(de, 1))
          : ((de = ns(z)), de.c(), m(de, 1), de.m(c, null))
        : de &&
          (H(),
          g(de, 1, 1, () => {
            de = null;
          }),
          K());
    },
    i(z) {
      if (!Q) {
        m(r);
        for (let ee = 0; ee < Ie.length; ee += 1) m(ae[ee]);
        m(pe), m(he);
        for (let ee = 0; ee < qe.length; ee += 1) m(ue[ee]);
        m(de), (Q = !0);
      }
    },
    o(z) {
      g(r), (ae = ae.filter(Boolean));
      for (let ee = 0; ee < ae.length; ee += 1) g(ae[ee]);
      g(pe), g(he), (ue = ue.filter(Boolean));
      for (let ee = 0; ee < ue.length; ee += 1) g(ue[ee]);
      g(de), (Q = !1);
    },
    d(z) {
      z && C(e),
        Ae[s].d(),
        we(ae, z),
        pe && pe.d(),
        he && he.d(),
        we(ue, z),
        de && de.d(),
        ($e = !1),
        Le(Vt);
    },
  };
}
function Da(i, e, t) {
  let n,
    s,
    r,
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
    k = -1,
    v = "",
    w = !1,
    T = !1;
  const S = Fs();
  Tt(i, S, (Q) => t(13, (d = Q)));
  const E = Ct();
  async function L(Q) {
    try {
      const $e = await d.mutateAsync({ packages: Q, path: f });
      E.setQueryData(nt.package(f), Qs($e)),
        await E.refetchQueries(nt.package(f));
    } catch ($e) {
      console.log("Failed to upgrade packages:", { originalError: $e });
    }
  }
  ai((Q) => {
    if (Q.shiftKey)
      switch (Q.key) {
        case "ArrowRight":
        case "ArrowLeft":
          Q.preventDefault(),
            t(
              0,
              (h = h === "dependencies" ? "devDependencies" : "dependencies")
            ),
            t(3, (b = 0)),
            t(6, (k = -1));
          break;
      }
    switch (Q.key) {
      case "ArrowUp":
        Q.preventDefault(), k > 0 ? t(6, k--, k) : t(6, (k = o.length - 1));
        break;
      case "ArrowDown":
        Q.preventDefault(), k < o.length - 1 ? t(6, k++, k) : t(6, (k = 0));
        break;
      case "ArrowLeft":
        b > 0 && (Q.preventDefault(), t(3, b--, b), t(6, (k = -1)));
        break;
      case "ArrowRight":
        b < s - 1 && (Q.preventDefault(), t(3, b++, b), t(6, (k = -1)));
        break;
      case "Escape":
        Q.preventDefault(), w && t(7, (w = !1));
        break;
      case "h":
        T || (Q.preventDefault(), t(7, (w = !w)));
    }
  });
  const P = [
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
    O = () => {
      t(7, (w = !w));
    },
    N = () => t(7, (w = !1));
  function re() {
    (v = this.value), t(4, v);
  }
  const ve = () => {
      t(8, (T = !0));
    },
    Oe = () => {
      t(8, (T = !1));
    },
    Qe = () => L(u);
  function Ue(Q) {
    (f = Q), t(1, f);
  }
  function Ee(Q) {
    (k = Q), t(6, k), t(0, h), t(4, v);
  }
  function lt(Q) {
    (b = Q), t(3, b), t(0, h), t(4, v);
  }
  return (
    (i.$$set = (Q) => {
      "selectedTab" in Q && t(0, (h = Q.selectedTab)),
        "selectedPackagePath" in Q && t(1, (f = Q.selectedPackagePath)),
        "entries" in Q && t(2, (p = Q.entries));
    }),
    (i.$$.update = () => {
      i.$$.dirty[0] & 20 &&
        t(
          19,
          (n = p.filter(
            ({ name: Q, version: $e }) =>
              Q.toLowerCase().includes(v.toLowerCase()) ||
              $e.toLowerCase().includes(v.toLowerCase())
          ))
        ),
        i.$$.dirty[0] & 524288 && t(12, (s = Math.ceil(n.length / Lt))),
        i.$$.dirty[0] & 524288 &&
          t(
            17,
            (r = n
              .map((Q) => ({ ...Q, isLatest: Es(Q.version, Q.latest) }))
              .sort((Q, $e) =>
                Q.isLatest && $e.isLatest
                  ? 0
                  : Q.isLatest && !$e.isLatest
                  ? 1
                  : -1
              ))
          ),
        i.$$.dirty[0] & 1 && h && (t(3, (b = 0)), t(6, (k = -1))),
        i.$$.dirty[0] & 16 && v && (t(3, (b = 0)), t(6, (k = -1))),
        i.$$.dirty[0] & 8 && t(18, (l = b * Lt)),
        i.$$.dirty[0] & 393216 && t(11, (o = r.slice(l, l + Lt))),
        i.$$.dirty[0] & 131072 &&
          t(
            5,
            ([a, u] = js(Us("isLatest"), r)),
            a,
            (t(10, u), t(17, r), t(19, n), t(2, p), t(4, v))
          ),
        i.$$.dirty[0] & 36 && t(9, (c = a.length === p.length));
    }),
    [
      h,
      f,
      p,
      b,
      v,
      a,
      k,
      w,
      T,
      c,
      u,
      o,
      s,
      d,
      S,
      L,
      P,
      r,
      l,
      n,
      O,
      N,
      re,
      ve,
      Oe,
      Qe,
      Ue,
      Ee,
      lt,
    ]
  );
}
class Na extends B {
  constructor(e) {
    super(),
      j(
        this,
        e,
        Da,
        za,
        U,
        { selectedTab: 0, selectedPackagePath: 1, entries: 2 },
        null,
        [-1, -1]
      );
  }
}
const Fa = "@greenbot/cli",
  Qa = "0.26.0",
  Ua = ["greenbot", "cli", "package updater"],
  ja = "An interactive package updater for npm based applications",
  Ba = "https://github.com/alanrsoares/greenbot",
  Za = "MIT",
  Ha = ["dist/", "bin/", "scripts/"],
  Ka = "./bin/greenbot.cjs",
  Ga = "module",
  Va = {
    dev: "vite",
    build: "vite build",
    serve: "vite preview",
    check: "svelte-check --tsconfig ./tsconfig.json",
    preversion: "yarn build",
    release: "npm publish && git push && git push --tags",
    prepare: "husky install",
    postinstall: "node scripts/postinstall.cjs",
  },
  Wa = {
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
    svelte: "^3.59.1",
    "svelte-check": "^3.4.3",
    "svelte-preprocess": "^5.0.4",
    tailwindcss: "^3.3.2",
    tslib: "^2.5.3",
    typescript: "^5.1.3",
    vite: "^4.3.9",
    "vite-tsconfig-paths": "^4.2.0",
  },
  xa = {
    "@tailwindcss/typography": "^0.5.9",
    "@tanstack/svelte-query": "^4.29.14",
    "animate.css": "^4.1.1",
    "body-parser": "^1.20.2",
    cors: "^2.8.5",
    daisyui: "^3.1.1",
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
  Ja = {
    name: Fa,
    version: Qa,
    keywords: Ua,
    description: ja,
    homepage: Ba,
    license: Za,
    files: Ha,
    bin: Ka,
    type: Ga,
    scripts: Va,
    devDependencies: Wa,
    dependencies: xa,
  };
const Xa = (i) => ({}),
  ss = (i) => ({}),
  Ya = (i) => ({}),
  rs = (i) => ({});
function eu(i) {
  let e, t, n, s, r, l, o, a, u, c, d, h, f, p, b;
  const k = i[1].logo,
    v = V(k, i, i[0], rs),
    w = i[1].version,
    T = V(w, i, i[0], ss),
    S = i[1].default,
    E = V(S, i, i[0], null);
  return {
    c() {
      (e = $("div")),
        (t = $("header")),
        (n = $("nav")),
        (s = $("h1")),
        (r = $("div")),
        v && v.c(),
        (l = Z()),
        (o = $("div")),
        (o.textContent = "_greenbot"),
        (a = Z()),
        T && T.c(),
        (u = Z()),
        (c = $("main")),
        E && E.c(),
        (d = Z()),
        (h = $("footer")),
        (f = $("div")),
        (p = $("span")),
        (p.textContent = `npm-greenbot@v${Ja.version}`),
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
    m(L, P) {
      R(L, e, P),
        y(e, t),
        y(t, n),
        y(n, s),
        y(s, r),
        v && v.m(r, null),
        y(s, l),
        y(s, o),
        y(n, a),
        T && T.m(n, null),
        y(e, u),
        y(e, c),
        E && E.m(c, null),
        y(e, d),
        y(e, h),
        y(h, f),
        y(f, p),
        (b = !0);
    },
    p(L, [P]) {
      v &&
        v.p &&
        (!b || P & 1) &&
        x(v, k, L, L[0], b ? W(k, L[0], P, Ya) : J(L[0]), rs),
        T &&
          T.p &&
          (!b || P & 1) &&
          x(T, w, L, L[0], b ? W(w, L[0], P, Xa) : J(L[0]), ss),
        E &&
          E.p &&
          (!b || P & 1) &&
          x(E, S, L, L[0], b ? W(S, L[0], P, null) : J(L[0]), null);
    },
    i(L) {
      b || (m(v, L), m(T, L), m(E, L), (b = !0));
    },
    o(L) {
      g(v, L), g(T, L), g(E, L), (b = !1);
    },
    d(L) {
      L && C(e), v && v.d(L), T && T.d(L), E && E.d(L);
    },
  };
}
function tu(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && t(0, (s = r.$$scope));
    }),
    [s, n]
  );
}
class nu extends B {
  constructor(e) {
    super(), j(this, e, tu, eu, U, {});
  }
}
function su(i) {
  let e, t, n, s, r, l;
  return {
    c() {
      (e = be("svg")),
        (t = be("title")),
        (n = X(i[0])),
        (s = be("path")),
        _(s, "d", (r = i[1][i[0]])),
        _(s, "fill", "currentColor"),
        _(e, "role", "img"),
        _(e, "viewBox", "0 0 24 24"),
        _(e, "xmlns", "http://www.w3.org/2000/svg"),
        _(e, "class", (l = i[2].class));
    },
    m(o, a) {
      R(o, e, a), y(e, t), y(t, n), y(e, s);
    },
    p(o, [a]) {
      a & 1 && fe(n, o[0]),
        a & 1 && r !== (r = o[1][o[0]]) && _(s, "d", r),
        a & 4 && l !== (l = o[2].class) && _(e, "class", l);
    },
    i: Y,
    o: Y,
    d(o) {
      o && C(e);
    },
  };
}
function ru(i, e, t) {
  let { kind: n } = e;
  const s = {
    yarn: "M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z",
    npm: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
    pnpm: "M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z",
  };
  return (
    (i.$$set = (r) => {
      t(2, (e = G(G({}, e), oe(r)))), "kind" in r && t(0, (n = r.kind));
    }),
    (e = oe(e)),
    [n, s, e]
  );
}
class iu extends B {
  constructor(e) {
    super(), j(this, e, ru, su, U, { kind: 0 });
  }
}
function lu(i) {
  let e, t, n, s, r, l, o, a, u, c;
  return (
    (n = new iu({ props: { kind: i[2], class: "h-4 w-4" } })),
    {
      c() {
        (e = $("a")),
          (t = $("div")),
          M(n.$$.fragment),
          (s = Z()),
          (r = $("div")),
          (l = X(i[0])),
          (o = X(" @ ")),
          (a = X(i[1])),
          _(t, "class", "rounded-full -translate-x-2 bg-black/25 p-2.5"),
          _(r, "class", "font-mono font-medium -translate-x-2"),
          _(e, "target", "_blank"),
          _(e, "href", (u = `https://www.npmjs.com/package/${i[0]}`)),
          _(e, "rel", "noopener noreferrer"),
          _(e, "class", "svelte-2pn84z");
      },
      m(d, h) {
        R(d, e, h),
          y(e, t),
          I(n, t, null),
          y(e, s),
          y(e, r),
          y(r, l),
          y(r, o),
          y(r, a),
          (c = !0);
      },
      p(d, [h]) {
        const f = {};
        h & 4 && (f.kind = d[2]),
          n.$set(f),
          (!c || h & 1) && fe(l, d[0]),
          (!c || h & 2) && fe(a, d[1]),
          (!c ||
            (h & 1 && u !== (u = `https://www.npmjs.com/package/${d[0]}`))) &&
            _(e, "href", u);
      },
      i(d) {
        c || (m(n.$$.fragment, d), (c = !0));
      },
      o(d) {
        g(n.$$.fragment, d), (c = !1);
      },
      d(d) {
        d && C(e), q(n);
      },
    }
  );
}
function ou(i, e, t) {
  let { name: n = "" } = e,
    { version: s = "" } = e,
    { manager: r = "npm" } = e;
  return (
    (i.$$set = (l) => {
      "name" in l && t(0, (n = l.name)),
        "version" in l && t(1, (s = l.version)),
        "manager" in l && t(2, (r = l.manager));
    }),
    [n, s, r]
  );
}
class au extends B {
  constructor(e) {
    super(), j(this, e, ou, lu, U, { name: 0, version: 1, manager: 2 });
  }
}
function is(i, e, t) {
  const n = i.slice();
  return (n[3] = e[t]), n;
}
function ls(i) {
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
        (n = X(t)),
        (s = Z()),
        _(e, "data-value", (r = i[3].value)),
        _(e, "class", "svelte-u0zq3l"),
        ie(e, "bg-castleton-green", i[0] === i[3].value);
    },
    m(a, u) {
      R(a, e, u),
        y(e, n),
        y(e, s),
        l ||
          ((o = ye(e, "click", function () {
            st(i[2].bind(null, i[3])) &&
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
      a && C(e), (l = !1), o();
    },
  };
}
function uu(i) {
  let e,
    t = i[1],
    n = [];
  for (let s = 0; s < t.length; s += 1) n[s] = ls(is(i, t, s));
  return {
    c() {
      e = $("div");
      for (let s = 0; s < n.length; s += 1) n[s].c();
      _(e, "class", "container svelte-u0zq3l");
    },
    m(s, r) {
      R(s, e, r);
      for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
    },
    p(s, [r]) {
      if (r & 7) {
        t = s[1];
        let l;
        for (l = 0; l < t.length; l += 1) {
          const o = is(s, t, l);
          n[l] ? n[l].p(o, r) : ((n[l] = ls(o)), n[l].c(), n[l].m(e, null));
        }
        for (; l < n.length; l += 1) n[l].d(1);
        n.length = t.length;
      }
    },
    i: Y,
    o: Y,
    d(s) {
      s && C(e), we(n, s);
    },
  };
}
function cu(i, e, t) {
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
class fu extends B {
  constructor(e) {
    super(), j(this, e, cu, uu, U, { selectedTab: 0, tabs: 1, onChange: 2 });
  }
}
function hu(i) {
  let e, t, n;
  return {
    c() {
      (e = be("svg")),
        (t = be("path")),
        (n = be("path")),
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
      R(s, e, r), y(e, t), y(e, n);
    },
    p(s, [r]) {
      r & 1 && ie(e, "animate-spin", s[0]);
    },
    i: Y,
    o: Y,
    d(s) {
      s && C(e);
    },
  };
}
function du(i, e, t) {
  let { animated: n = !1 } = e;
  return (
    (i.$$set = (s) => {
      "animated" in s && t(0, (n = s.animated));
    }),
    [n]
  );
}
class pu extends B {
  constructor(e) {
    super(), j(this, e, du, hu, U, { animated: 0 });
  }
}
function os(i, e, t) {
  const n = i.slice();
  return (n[13] = e[t]), n;
}
function as(i) {
  let e, t, n, s, r, l;
  return (
    (n = new pu({ props: { animated: !0 } })),
    {
      c() {
        (e = $("div")),
          (t = $("div")),
          M(n.$$.fragment),
          (s = Z()),
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
        R(o, e, a), y(e, t), I(n, t, null), y(e, s), y(e, r), (l = !0);
      },
      i(o) {
        l || (m(n.$$.fragment, o), (l = !0));
      },
      o(o) {
        g(n.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), q(n);
      },
    }
  );
}
function us(i) {
  var h;
  let e,
    t,
    n,
    s,
    r,
    l,
    o,
    a = ((h = i[2].data.workspaces) == null ? void 0 : h.length) && cs(i);
  t = new fu({
    props: {
      onChange: i[6],
      selectedTab: i[0],
      tabs: [
        { value: "dependencies", label: "Dependencies" },
        { value: "devDependencies", label: "Dev Dependencies" },
      ],
    },
  });
  function u(f) {
    i[9](f);
  }
  function c(f) {
    i[10](f);
  }
  let d = { entries: i[3] };
  return (
    i[0] !== void 0 && (d.selectedTab = i[0]),
    i[1] !== void 0 && (d.selectedPackagePath = i[1]),
    (s = new Na({ props: d })),
    De.push(() => Ye(s, "selectedTab", u)),
    De.push(() => Ye(s, "selectedPackagePath", c)),
    {
      c() {
        a && a.c(), (e = Z()), M(t.$$.fragment), (n = Z()), M(s.$$.fragment);
      },
      m(f, p) {
        a && a.m(f, p),
          R(f, e, p),
          I(t, f, p),
          R(f, n, p),
          I(s, f, p),
          (o = !0);
      },
      p(f, p) {
        var v;
        (v = f[2].data.workspaces) != null && v.length
          ? a
            ? a.p(f, p)
            : ((a = cs(f)), a.c(), a.m(e.parentNode, e))
          : a && (a.d(1), (a = null));
        const b = {};
        p & 1 && (b.selectedTab = f[0]), t.$set(b);
        const k = {};
        p & 8 && (k.entries = f[3]),
          !r && p & 1 && ((r = !0), (k.selectedTab = f[0]), Xe(() => (r = !1))),
          !l &&
            p & 2 &&
            ((l = !0), (k.selectedPackagePath = f[1]), Xe(() => (l = !1))),
          s.$set(k);
      },
      i(f) {
        o || (m(t.$$.fragment, f), m(s.$$.fragment, f), (o = !0));
      },
      o(f) {
        g(t.$$.fragment, f), g(s.$$.fragment, f), (o = !1);
      },
      d(f) {
        a && a.d(f), f && C(e), q(t, f), f && C(n), q(s, f);
      },
    }
  );
}
function cs(i) {
  let e,
    t,
    n = "workspace",
    s,
    r,
    l,
    o,
    a,
    u,
    c = i[2].data.workspaces,
    d = [];
  for (let h = 0; h < c.length; h += 1) d[h] = fs(os(i, c, h));
  return {
    c() {
      (e = $("div")),
        (t = $("label")),
        (s = X(n)),
        (r = Z()),
        (l = $("select")),
        (o = $("option")),
        (o.textContent = "root");
      for (let h = 0; h < d.length; h += 1) d[h].c();
      (o.__value = ""),
        (o.value = o.__value),
        _(l, "class", "select select-sm"),
        i[1] === void 0 && gt(() => i[8].call(l)),
        _(e, "class", "flex justify-end");
    },
    m(h, f) {
      R(h, e, f), y(e, t), y(t, s), y(t, r), y(t, l), y(l, o);
      for (let p = 0; p < d.length; p += 1) d[p] && d[p].m(l, null);
      tn(l, i[1], !0), a || ((u = ye(l, "change", i[8])), (a = !0));
    },
    p(h, f) {
      if (f & 4) {
        c = h[2].data.workspaces;
        let p;
        for (p = 0; p < c.length; p += 1) {
          const b = os(h, c, p);
          d[p] ? d[p].p(b, f) : ((d[p] = fs(b)), d[p].c(), d[p].m(l, null));
        }
        for (; p < d.length; p += 1) d[p].d(1);
        d.length = c.length;
      }
      f & 6 && tn(l, h[1]);
    },
    d(h) {
      h && C(e), we(d, h), (a = !1), u();
    },
  };
}
function fs(i) {
  let e,
    t = i[13].name + "",
    n,
    s;
  return {
    c() {
      (e = $("option")),
        (n = X(t)),
        (e.__value = s = i[13].path),
        (e.value = e.__value);
    },
    m(r, l) {
      R(r, e, l), y(e, n);
    },
    p(r, l) {
      l & 4 && t !== (t = r[13].name + "") && fe(n, t),
        l & 4 &&
          s !== (s = r[13].path) &&
          ((e.__value = s), (e.value = e.__value));
    },
    d(r) {
      r && C(e);
    },
  };
}
function mu(i) {
  let e,
    t,
    n,
    s = i[2].isLoading && as(),
    r = i[2].data && us(i);
  return {
    c() {
      (e = $("div")),
        s && s.c(),
        (t = Z()),
        r && r.c(),
        _(e, "class", "w-full grid gap-4");
    },
    m(l, o) {
      R(l, e, o), s && s.m(e, null), y(e, t), r && r.m(e, null), (n = !0);
    },
    p(l, o) {
      l[2].isLoading
        ? s
          ? o & 4 && m(s, 1)
          : ((s = as()), s.c(), m(s, 1), s.m(e, t))
        : s &&
          (H(),
          g(s, 1, 1, () => {
            s = null;
          }),
          K()),
        l[2].data
          ? r
            ? (r.p(l, o), o & 4 && m(r, 1))
            : ((r = us(l)), r.c(), m(r, 1), r.m(e, null))
          : r &&
            (H(),
            g(r, 1, 1, () => {
              r = null;
            }),
            K());
    },
    i(l) {
      n || (m(s), m(r), (n = !0));
    },
    o(l) {
      g(s), g(r), (n = !1);
    },
    d(l) {
      l && C(e), s && s.d(), r && r.d();
    },
  };
}
function gu(i) {
  let e, t;
  return (
    (e = new fi({ props: { mood: i[4], slot: "logo" } })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s & 16 && (r.mood = n[4]), e.$set(r);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function hs(i) {
  let e, t;
  return (
    (e = new au({
      props: {
        name: i[2].data.name,
        version: i[2].data.version,
        manager: i[2].data.packageManager,
      },
    })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      p(n, s) {
        const r = {};
        s & 4 && (r.name = n[2].data.name),
          s & 4 && (r.version = n[2].data.version),
          s & 4 && (r.manager = n[2].data.packageManager),
          e.$set(r);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function _u(i) {
  let e,
    t,
    n = i[2].data && hs(i);
  return {
    c() {
      (e = $("div")), n && n.c(), _(e, "slot", "version");
    },
    m(s, r) {
      R(s, e, r), n && n.m(e, null), (t = !0);
    },
    p(s, r) {
      s[2].data
        ? n
          ? (n.p(s, r), r & 4 && m(n, 1))
          : ((n = hs(s)), n.c(), m(n, 1), n.m(e, null))
        : n &&
          (H(),
          g(n, 1, 1, () => {
            n = null;
          }),
          K());
    },
    i(s) {
      t || (m(n), (t = !0));
    },
    o(s) {
      g(n), (t = !1);
    },
    d(s) {
      s && C(e), n && n.d();
    },
  };
}
function bu(i) {
  let e, t;
  return (
    (e = new nu({
      props: {
        $$slots: { version: [_u], logo: [gu], default: [mu] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const r = {};
        s & 65567 && (r.$$scope = { dirty: s, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function ku([i, e], t, n) {
  return {
    name: i,
    version: e,
    latest: i in t ? t[i] : e,
    meta: i in n ? n[i] : void 0,
  };
}
function yu(i, e, t) {
  let n,
    s,
    r,
    l,
    o,
    a = Y,
    u = () => (a(), (a = Ft(n, (w) => t(2, (o = w)))), n);
  i.$$.on_destroy.push(() => a());
  let c = "dependencies",
    d = "";
  Ke(() => {
    const T = new URLSearchParams(window.location.search).get("path");
    T !== null && t(1, (d = T));
  });
  function h({ value: w }) {
    t(0, (c = w));
  }
  function f(w, T) {
    return w.filter(([S, E]) => T[S] !== E);
  }
  function p(w) {
    if (!w || w.isLoading) return "asleep";
    if (w.error) return "dead";
    if (w.data) {
      const { dependencies: T, devDependencies: S, resolutions: E } = w.data,
        L = Object.entries({ ...T, ...S });
      return f(L, w.data.resolutions).filter(([O, N]) => !Es(N, E[O])).length
        ? "angry"
        : "happy";
    }
    return "awake";
  }
  function b() {
    (d = or(this)), t(1, d);
  }
  function k(w) {
    (c = w), t(0, c);
  }
  function v(w) {
    (d = w), t(1, d);
  }
  return (
    (i.$$.update = () => {
      if (i.$$.dirty & 2 && d !== null) {
        const w = new URLSearchParams(window.location.search);
        d ? w.set("path", d) : w.delete("path"),
          window.history.replaceState(
            {},
            "",
            `${window.location.pathname}?${w.toString()}`
          );
      }
      i.$$.dirty & 2 && u(t(5, (n = li(d)))),
        i.$$.dirty & 4 && t(4, (s = p(o))),
        i.$$.dirty & 5 &&
          t(
            7,
            (r =
              o.isLoading || o.error || !o.data
                ? []
                : f(Object.entries(o.data[c] ?? {}), o.data.resolutions))
          ),
        i.$$.dirty & 132 &&
          t(
            3,
            (l = r.map((w) => {
              var T, S;
              return ku(
                w,
                ((T = o.data) == null ? void 0 : T.resolutions) ?? {},
                ((S = o.data) == null ? void 0 : S.meta) ?? {}
              );
            }))
          );
    }),
    [c, d, o, l, s, n, h, r, b, k, v]
  );
}
class wu extends B {
  constructor(e) {
    super(), j(this, e, yu, bu, U, {});
  }
}
function vu(i) {
  let e, t;
  return (
    (e = new wu({})),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function $u(i) {
  let e, t;
  return (
    (e = new jr({
      props: { client: i[0], $$slots: { default: [vu] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        M(e.$$.fragment);
      },
      m(n, s) {
        I(e, n, s), (t = !0);
      },
      p(n, [s]) {
        const r = {};
        s & 2 && (r.$$scope = { dirty: s, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (m(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        q(e, n);
      },
    }
  );
}
function Cu(i) {
  return [new Ls()];
}
class Ru extends B {
  constructor(e) {
    super(), j(this, e, Cu, $u, U, {});
  }
}
const Ys = document.getElementById("app");
if (!Ys) throw new Error("Could not find target element");
new Ru({ target: Ys });
