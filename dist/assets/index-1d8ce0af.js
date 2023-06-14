var Xs = Object.defineProperty;
var Ys = (i, e, t) =>
  e in i
    ? Xs(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var Wt = (i, e, t) => (Ys(i, typeof e != "symbol" ? e + "" : e, t), t);
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
function K(i, e) {
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
function er(i) {
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
  return i[1] && n ? K(t.ctx.slice(), i[1](n(e))) : t.ctx;
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
function V(i, e, t, n, s, r) {
  if (s) {
    const l = cs(e, t, n, r);
    i.p(l, s);
  }
}
function W(i) {
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
function ht(i, e) {
  const t = {};
  e = new Set(e);
  for (const n in i) !e.has(n) && n[0] !== "$" && (t[n] = i[n]);
  return t;
}
function tr(i) {
  return i && et(i.destroy) ? i.destroy : ee;
}
function y(i, e) {
  i.appendChild(e);
}
function L(i, e, t) {
  i.insertBefore(e, t || null);
}
function C(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function $e(i, e) {
  for (let t = 0; t < i.length; t += 1) i[t] && i[t].d(e);
}
function $(i) {
  return document.createElement(i);
}
function be(i) {
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
function ve(i, e, t, n) {
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
function nr(i) {
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
function sr(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(i, t, n, e), s;
}
class rr {
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
    for (let t = 0; t < this.n.length; t += 1) L(this.t, this.n[t], e);
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
let Ve;
function Ge(i) {
  Ve = i;
}
function tt() {
  if (!Ve) throw new Error("Function called outside component initialization");
  return Ve;
}
function nt(i) {
  tt().$$.on_mount.push(i);
}
function Dt(i) {
  tt().$$.on_destroy.push(i);
}
function ir() {
  const i = tt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const s = i.$$.callbacks[e];
    if (s) {
      const r = sr(e, t, { cancelable: n });
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
function lr(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Be = [],
  We = [];
let Ze = [];
const St = [],
  or = Promise.resolve();
let Tt = !1;
function ar() {
  Tt || ((Tt = !0), or.then(ds));
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
  const i = Ve;
  do {
    try {
      for (; Ue < Be.length; ) {
        const e = Be[Ue];
        Ue++, Ge(e), ur(e.$$);
      }
    } catch (e) {
      throw ((Be.length = 0), (Ue = 0), e);
    }
    for (Ge(null), Be.length = 0, Ue = 0; We.length; ) We.pop()();
    for (let e = 0; e < Ze.length; e += 1) {
      const t = Ze[e];
      $t.has(t) || ($t.add(t), t());
    }
    Ze.length = 0;
  } while (Be.length);
  for (; St.length; ) St.pop()();
  (Tt = !1), $t.clear(), Ge(i);
}
function ur(i) {
  if (i.fragment !== null) {
    i.update(), Se(i.before_update);
    const e = i.dirty;
    (i.dirty = [-1]),
      i.fragment && i.fragment.p(i.ctx, e),
      i.after_update.forEach(Ot);
  }
}
function cr(i) {
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
function H() {
  Me.r || Se(Me.c), (Me = Me.p);
}
function p(i, e) {
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
    (cr(t.after_update),
    Se(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function fr(i, e) {
  i.$$.dirty[0] === -1 && (Be.push(i), ar(), i.$$.dirty.fill(0)),
    (i.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function U(i, e, t, n, s, r, l, o = [-1]) {
  const a = Ve;
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
      ? t(i, e.props || {}, (d, h, ...f) => {
          const m = f.length ? f[0] : h;
          return (
            u.ctx &&
              s(u.ctx[d], (u.ctx[d] = m)) &&
              (!u.skip_bound && u.bound[d] && u.bound[d](m), c && fr(i, d)),
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
      const d = nr(e.target);
      u.fragment && u.fragment.l(d), d.forEach(C);
    } else u.fragment && u.fragment.c();
    e.intro && p(i.$$.fragment),
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
      !er(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
class He {
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
function we() {}
function hr(i, e) {
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
function dr(i, e, t) {
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
      if (ze(e.options.mutationKey) !== ze(r)) return !1;
    } else if (!pt(e.options.mutationKey, r)) return !1;
  }
  return !(
    (typeof n == "boolean" && (e.state.status === "loading") !== n) ||
    (s && !s(e))
  );
}
function Qt(i, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ze)(i);
}
function ze(i) {
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
function pr() {
  if (typeof AbortController == "function") return new AbortController();
}
function It(i, e, t) {
  return t.isDataEqual != null && t.isDataEqual(i, e)
    ? i
    : typeof t.structuralSharing == "function"
    ? t.structuralSharing(i, e)
    : t.structuralSharing !== !1
    ? gs(i, e)
    : e;
}
class mr extends He {
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
const mt = new mr(),
  ln = ["online", "offline"];
class gr extends He {
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
const gt = new gr();
function _r(i) {
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
  const o = new Promise((k, w) => {
      (r = k), (l = w);
    }),
    a = (k) => {
      n || (f(new bs(k)), i.abort == null || i.abort());
    },
    u = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    d = () => !mt.isFocused() || (i.networkMode !== "always" && !gt.isOnline()),
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
    m = () =>
      new Promise((k) => {
        (s = (w) => {
          const R = n || !d();
          return R && k(w), R;
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
      } catch (w) {
        k = Promise.reject(w);
      }
      Promise.resolve(k)
        .then(h)
        .catch((w) => {
          var R, I;
          if (n) return;
          const S = (R = i.retry) != null ? R : 3,
            q = (I = i.retryDelay) != null ? I : _r,
            v = typeof q == "function" ? q(t, w) : q,
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
                if (d()) return m();
              })
              .then(() => {
                e ? f(w) : b();
              });
        });
    };
  return (
    kt(i.networkMode) ? b() : m().then(b),
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
function br() {
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
        : rn(() => {
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
          rn(() => {
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
const ce = br();
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
class yr extends ks {
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
      (this.initialState = e.state || kr(this.options)),
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
    const n = It(this.state.data, e, this.options);
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
      n ? n.then(we).catch(we) : Promise.resolve()
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
      const f = this.observers.find((m) => m.options.queryFn);
      f && this.setOptions(f.options);
    }
    Array.isArray(this.options.queryKey);
    const l = pr(),
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
        ((at(f) && f.silent) || this.dispatch({ type: "error", error: f }),
        !at(f))
      ) {
        var m, b, k, w;
        (m = (b = this.cache.config).onError) == null || m.call(b, f, this),
          (k = (w = this.cache.config).onSettled) == null ||
            k.call(w, this.state.data, f, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = ys({
        fn: c.fetchFn,
        abort: l == null ? void 0 : l.abort.bind(l),
        onSuccess: (f) => {
          var m, b, k, w;
          if (typeof f > "u") {
            h(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(f),
            (m = (b = this.cache.config).onSuccess) == null ||
              m.call(b, f, this),
            (k = (w = this.cache.config).onSettled) == null ||
              k.call(w, f, this.state.error, this),
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
      ce.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(e);
        }),
          this.cache.notify({ query: this, type: "updated", action: e });
      });
  }
}
function kr(i) {
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
class wr extends He {
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
        ((o = new yr({
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
class vr extends ks {
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
        var d, h, f, m;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((d = (h = this.mutationCache.config).onMutate) == null
            ? void 0
            : d.call(h, this.state.variables, this));
        const P = await ((f = (m = this.options).onMutate) == null
          ? void 0
          : f.call(m, this.state.variables));
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
        var b, k, w, R, I, S, q, v;
        throw (
          (await ((b = (k = this.mutationCache.config).onError) == null
            ? void 0
            : b.call(k, M, this.state.variables, this.state.context, this)),
          await ((w = (R = this.options).onError) == null
            ? void 0
            : w.call(R, M, this.state.variables, this.state.context)),
          await ((I = (S = this.mutationCache.config).onSettled) == null
            ? void 0
            : I.call(
                S,
                void 0,
                M,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((q = (v = this.options).onSettled) == null
            ? void 0
            : q.call(v, void 0, M, this.state.variables, this.state.context)),
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
class $r extends He {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(e, t, n) {
    const s = new vr({
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
      this.mutations.find((t) => tn(e, t))
    );
  }
  findAll(e) {
    return this.mutations.filter((t) => tn(e, t));
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
              (n, s) => n.then(() => s.continue().catch(we)),
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
function Cr() {
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
        let m = f,
          b = !1;
        const k = (v) => {
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
          R = (v, M, P, F) => (
            (m = F ? [M, ...m] : [...m, M]), F ? [P, ...v] : [...v, P]
          ),
          I = (v, M, P, F) => {
            if (b) return Promise.reject("Cancelled");
            if (typeof P > "u" && !M && v.length) return Promise.resolve(v);
            const re = {
              queryKey: i.queryKey,
              pageParam: P,
              meta: i.options.meta,
            };
            k(re);
            const ke = w(re);
            return Promise.resolve(ke).then((Fe) => R(v, P, Fe, F));
          };
        let S;
        if (!h.length) S = I([]);
        else if (c) {
          const v = typeof u < "u",
            M = v ? u : on(i.options, h);
          S = I(h, v, M);
        } else if (d) {
          const v = typeof u < "u",
            M = v ? u : Rr(i.options, h);
          S = I(h, v, M, !0);
        } else {
          m = [];
          const v = typeof i.options.getNextPageParam > "u";
          S = (o && h[0] ? o(h[0], 0, h) : !0)
            ? I([], v, f[0])
            : Promise.resolve(R([], f[0], h[0]));
          for (let P = 1; P < h.length; P++)
            S = S.then((F) => {
              if (o && h[P] ? o(h[P], P, h) : !0) {
                const ke = v ? f[P] : on(i.options, F);
                return I(F, v, ke);
              }
              return Promise.resolve(R(F, f[P], h[P]));
            });
        }
        return S.then((v) => ({ pages: v, pageParams: m }));
      };
    },
  };
}
function on(i, e) {
  return i.getNextPageParam == null
    ? void 0
    : i.getNextPageParam(e[e.length - 1], e);
}
function Rr(i, e) {
  return i.getPreviousPageParam == null
    ? void 0
    : i.getPreviousPageParam(e[0], e);
}
class vs {
  constructor(e = {}) {
    (this.queryCache = e.queryCache || new wr()),
      (this.mutationCache = e.mutationCache || new $r()),
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
      l = hr(t, r);
    if (typeof l > "u") return;
    const o = xe(e),
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
    const [n] = Oe(e, t),
      s = this.queryCache;
    ce.batch(() => {
      s.findAll(n).forEach((r) => {
        s.remove(r);
      });
    });
  }
  resetQueries(e, t, n) {
    const [s, r] = Oe(e, t, n),
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
    const [s, r = {}] = Oe(e, t, n);
    typeof r.revert > "u" && (r.revert = !0);
    const l = ce.batch(() =>
      this.queryCache.findAll(s).map((o) => o.cancel(r))
    );
    return Promise.all(l).then(we).catch(we);
  }
  invalidateQueries(e, t, n) {
    const [s, r] = Oe(e, t, n);
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
    const [s, r] = Oe(e, t, n),
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
    let o = Promise.all(l).then(we);
    return (r != null && r.throwOnError) || (o = o.catch(we)), o;
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
    return this.fetchQuery(e, t, n).then(we).catch(we);
  }
  fetchInfiniteQuery(e, t, n) {
    const s = xe(e, t, n);
    return (s.behavior = Cr()), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, t, n) {
    return this.fetchInfiniteQuery(e, t, n).then(we).catch(we);
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
    const t = this.queryDefaults.find((n) => pt(e, n.queryKey));
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
class Lr extends He {
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
    return qt(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return qt(
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
    return (e != null && e.throwOnError) || (t = t.catch(we)), t;
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
      { state: d } = e;
    let {
        dataUpdatedAt: h,
        error: f,
        errorUpdatedAt: m,
        fetchStatus: b,
        status: k,
      } = d,
      w = !1,
      R = !1,
      I;
    if (t._optimisticResults) {
      const P = this.hasListeners(),
        F = !P && an(e, t),
        re = P && un(e, n, t, s);
      (F || re) &&
        ((b = kt(e.options.networkMode) ? "fetching" : "paused"),
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
      (I = c.data), (h = c.dataUpdatedAt), (k = c.status), (w = !0);
    else if (t.select && typeof d.data < "u")
      if (
        r &&
        d.data === (l == null ? void 0 : l.data) &&
        t.select === this.selectFn
      )
        I = this.selectResult;
      else
        try {
          (this.selectFn = t.select),
            (I = t.select(d.data)),
            (I = It(r == null ? void 0 : r.data, I, t)),
            (this.selectResult = I),
            (this.selectError = null);
        } catch (P) {
          this.selectError = P;
        }
    else I = d.data;
    if (typeof t.placeholderData < "u" && typeof I > "u" && k === "loading") {
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
        ((k = "success"),
        (I = It(r == null ? void 0 : r.data, P, t)),
        (R = !0));
    }
    this.selectError &&
      ((f = this.selectError),
      (I = this.selectResult),
      (m = Date.now()),
      (k = "error"));
    const S = b === "fetching",
      q = k === "loading",
      v = k === "error";
    return {
      status: k,
      fetchStatus: b,
      isLoading: q,
      isSuccess: k === "success",
      isError: v,
      isInitialLoading: q && S,
      data: I,
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
      isRefetching: S && !q,
      isLoadingError: v && d.dataUpdatedAt === 0,
      isPaused: b === "paused",
      isPlaceholderData: R,
      isPreviousData: w,
      isRefetchError: v && d.dataUpdatedAt !== 0,
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
function Sr(i, e) {
  return (
    e.enabled !== !1 &&
    !i.state.dataUpdatedAt &&
    !(i.state.status === "error" && e.retryOnMount === !1)
  );
}
function an(i, e) {
  return Sr(i, e) || (i.state.dataUpdatedAt > 0 && qt(i, e, e.refetchOnMount));
}
function qt(i, e, t) {
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
let Tr = class extends He {
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
const $s = "$$_queryClient",
  Or = () => {
    const i = hs($s);
    if (!i)
      throw new Error(
        "No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?"
      );
    return i;
  },
  Er = (i) => {
    fs($s, i);
  };
function wt() {
  return Or();
}
const je = [];
function Xe(i, e) {
  return { subscribe: Pr(i, e).subscribe };
}
function Pr(i, e = ee) {
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
    const d = () => {
        if (u) return;
        c();
        const f = e(n ? a[0] : a, l);
        r ? l(f) : (c = et(f) ? f : ee);
      },
      h = s.map((f, m) =>
        us(
          f,
          (b) => {
            (a[m] = b), (u &= ~(1 << m)), o && d();
          },
          () => {
            u |= 1 << m;
          }
        )
      );
    return (
      (o = !0),
      d(),
      function () {
        Se(h), c(), (o = !1);
      }
    );
  });
}
function Ar(i, e) {
  const t = wt(),
    n = t.defaultQueryOptions(i);
  n._optimisticResults = "optimistic";
  let s = new e(t, n);
  n.onError && (n.onError = ce.batchCalls(n.onError)),
    n.onSuccess && (n.onSuccess = ce.batchCalls(n.onSuccess)),
    n.onSettled && (n.onSettled = ce.batchCalls(n.onSettled)),
    Xe(s).subscribe((o) => {
      (s = o), s.setOptions(n, { listeners: !1 });
    });
  const r = Xe(s.getCurrentResult(), (o) => s.subscribe(ce.batchCalls(o))),
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
  return Ar(n, Lr);
}
function Ir(i, e, t) {
  const n = dr(i, e, t),
    s = wt();
  let r = new Tr(s, n),
    l;
  Xe(r).subscribe((u) => {
    (r = u),
      (l = (c, d) => {
        r.mutate(c, d).catch(qr);
      }),
      r.setOptions(n);
  });
  const o = Xe(r.getCurrentResult(), (u) =>
      r.subscribe(ce.batchCalls((c) => u(c)))
    ),
    { subscribe: a } = Cs(o, (u) => ({
      ...u,
      mutate: l,
      mutateAsync: u.mutate,
    }));
  return { subscribe: a };
}
function qr() {}
function Mr(i) {
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
        V(n, t, s, s[1], e ? G(t, s[1], r, null) : W(s[1]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
    Er(r),
    Dt(() => {
      r.unmount();
    }),
    (i.$$set = (l) => {
      "client" in l && t(0, (r = l.client)),
        "$$scope" in l && t(1, (s = l.$$scope));
    }),
    [r, s, n]
  );
}
class Dr extends j {
  constructor(e) {
    super(), U(this, e, zr, Mr, Q, { client: 0 });
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
  Nr = (() => {
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
  Fr = typeof globalThis.AbortController == "function",
  Qr = typeof globalThis.ReadableStream == "function",
  Ur = typeof globalThis.FormData == "function",
  Es = ["get", "post", "put", "patch", "head", "delete"],
  jr = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  Rt = 2147483647,
  Ps = Symbol("stop"),
  Br = (i) => (Es.includes(i) ? i.toUpperCase() : i),
  Zr = ["get", "put", "head", "delete", "options", "trace"],
  Hr = [408, 413, 429, 500, 502, 503, 504],
  As = [413, 429, 503],
  hn = {
    limit: 2,
    methods: Zr,
    statusCodes: Hr,
    afterStatusCodes: As,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
  },
  Kr = (i = {}) => {
    if (typeof i == "number") return { ...hn, limit: i };
    if (i.methods && !Array.isArray(i.methods))
      throw new Error("retry.methods must be an array");
    if (i.statusCodes && !Array.isArray(i.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...hn, ...i, afterStatusCodes: As };
  };
async function xr(i, e, t) {
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
const Gr = !!globalThis.DOMException;
function dn(i) {
  if (Gr)
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
          if (!Qr)
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
    for (const [o, a] of Object.entries(jr))
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
        method: Br(t.method ?? this._input.method),
        prefixUrl: String(t.prefixUrl || ""),
        retry: Kr(t.retry),
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
    if (Fr) {
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
      (Nr && (this._options.duplex = "half"),
      (this.request = new globalThis.Request(this._input, this._options)),
      this._options.searchParams)
    ) {
      const s =
          "?" +
          (typeof this._options.searchParams == "string"
            ? this._options.searchParams.replace(/^\?/, "")
            : new URLSearchParams(this._options.searchParams).toString()),
        r = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, s);
      ((Ur && this._options.body instanceof globalThis.FormData) ||
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
      : xr(this.request.clone(), this.abortController, this._options);
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
  Wr = Mt(),
  Is = Wr,
  qs = Is.create({ prefixUrl: "http://localhost:5001/" }),
  Jr = Is.create({ prefixUrl: "https://bundlephobia.com/" });
function Xr() {
  return qs.get("package").json();
}
function Yr(i) {
  return qs.post("upgrade-packages", { json: i }).json();
}
function ei(i) {
  return Jr.get(`api/size?package=${i}`).json();
}
const Ms = (i) => Ir(Yr, i),
  zs = (i) => (e) => {
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
  ti = () => Rs(Ye.package, Xr),
  ni = (i) => Rs(Ye.bundlephobiaReport(i), () => ei(i), { enabled: !!i });
function si(i) {
  nt(() => {
    window.addEventListener("keydown", i);
  }),
    Dt(() => {
      window.removeEventListener("keydown", i);
    });
}
function ri(i) {
  let e, t, n, s, r, l;
  return {
    c() {
      (e = be("svg")),
        (t = be("g")),
        (n = be("g")),
        (s = be("path")),
        (l = be("path")),
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
      L(o, e, a), y(e, t), y(t, n), y(n, s), y(n, l);
    },
    p(o, [a]) {
      a & 1 && r !== (r = pn[o[0]]) && _(s, "d", r);
    },
    i: ee,
    o: ee,
    d(o) {
      o && C(e);
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
function ii(i, e, t) {
  let { mood: n = "awake" } = e;
  return (
    (i.$$set = (s) => {
      "mood" in s && t(0, (n = s.mood));
    }),
    [n]
  );
}
class li extends j {
  constructor(e) {
    super(), U(this, e, ii, ri, Q, { mood: 0 });
  }
}
const { isArray: oi } = Array;
function Ds(i, e) {
  if (arguments.length === 1) return (t) => Ds(i, t);
  if (e) return e[i];
}
function ai(i, e) {
  const t = {},
    n = {};
  return (
    Object.entries(e).forEach(([s, r]) => {
      i(r, s) ? (t[s] = r) : (n[s] = r);
    }),
    [t, n]
  );
}
function ui(i, e, t = !1) {
  const n = [],
    s = [];
  let r = -1;
  for (; r++ < e.length - 1; )
    (t ? i(e[r], r) : i(e[r])) ? n.push(e[r]) : s.push(e[r]);
  return [n, s];
}
function Ns(i, e) {
  return arguments.length === 1 ? (t) => Ns(i, t) : oi(e) ? ui(i, e) : ai(i, e);
}
function zt(i, e) {
  if (arguments.length === 1) return (s) => zt(i, s);
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
  for (let s = 0; s < t.length; s += 1) n = K(n, t[s]);
  return {
    c() {
      (e = be(i[10])), dt(e, n);
    },
    m(s, r) {
      L(s, e, r);
    },
    p(s, r) {
      dt(e, (n = me(t, [r & 32 && s[11]])));
    },
    d(s) {
      s && C(e);
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
      s && C(t), n && n.d(s);
    },
  };
}
function ci(i) {
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
    d = {};
  for (let h = 0; h < c.length; h += 1) d = K(d, c[h]);
  return {
    c() {
      e = be("svg");
      for (let h = 0; h < o.length; h += 1) o[h].c();
      (t = se()), u && u.c(), dt(e, d);
    },
    m(h, f) {
      L(h, e, f);
      for (let m = 0; m < o.length; m += 1) o[m] && o[m].m(e, null);
      y(e, t), u && u.m(e, null), (r = !0);
    },
    p(h, [f]) {
      if (f & 32) {
        l = h[5];
        let m;
        for (m = 0; m < l.length; m += 1) {
          const b = gn(h, l, m);
          o[m] ? o[m].p(b, f) : ((o[m] = _n(b)), o[m].c(), o[m].m(e, t));
        }
        for (; m < o.length; m += 1) o[m].d(1);
        o.length = l.length;
      }
      u &&
        u.p &&
        (!r || f & 256) &&
        V(u, a, h, h[8], r ? G(a, h[8], f, null) : W(h[8]), null),
        dt(
          e,
          (d = me(c, [
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
      r || (p(u, h), (r = !0));
    },
    o(h) {
      g(u, h), (r = !1);
    },
    d(h) {
      h && C(e), $e(o, h), u && u.d(h);
    },
  };
}
function fi(i, e, t) {
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
    { absoluteStrokeWidth: d = !1 } = e,
    { iconNode: h } = e;
  return (
    (i.$$set = (f) => {
      t(7, (e = K(K({}, e), oe(f)))),
        t(6, (s = ht(e, n))),
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
class hi extends j {
  constructor(e) {
    super(),
      U(this, e, fi, ci, Q, {
        name: 0,
        color: 1,
        size: 2,
        strokeWidth: 3,
        absoluteStrokeWidth: 4,
        iconNode: 5,
      });
  }
}
const Te = hi;
function di(i) {
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function pi(i) {
  let e, t;
  const n = [{ name: "arrow-up" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [di] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
function mi(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["line", { x1: "12", x2: "12", y1: "19", y2: "5" }],
    ["polyline", { points: "5 12 12 5 19 12" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class gi extends j {
  constructor(e) {
    super(), U(this, e, mi, pi, Q, {});
  }
}
const Fs = gi;
function _i(i) {
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function bi(i) {
  let e, t;
  const n = [{ name: "bug" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [_i] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
function yi(i, e, t) {
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class ki extends j {
  constructor(e) {
    super(), U(this, e, yi, bi, Q, {});
  }
}
const wi = ki;
function vi(i) {
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
  const n = [{ name: "check-circle" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [vi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
function Ci(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }],
    ["polyline", { points: "22 4 12 14.01 9 11.01" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Ri extends j {
  constructor(e) {
    super(), U(this, e, Ci, $i, Q, {});
  }
}
const Qs = Ri;
function Li(i) {
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
    },
    o(s) {
      g(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Si(i) {
  let e, t;
  const n = [{ name: "github" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Li] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
function Ti(i, e, t) {
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Oi extends j {
  constructor(e) {
    super(), U(this, e, Ti, Si, Q, {});
  }
}
const Ei = Oi;
function Pi(i) {
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
  const n = [{ name: "globe" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Pi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class qi extends j {
  constructor(e) {
    super(), U(this, e, Ii, Ai, Q, {});
  }
}
const Mi = qi;
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
  const n = [{ name: "info" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [zi] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
function Ni(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e;
  const r = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 16v-4" }],
    ["path", { d: "M12 8h.01" }],
  ];
  return (
    (i.$$set = (l) => {
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Fi extends j {
  constructor(e) {
    super(), U(this, e, Ni, Di, Q, {});
  }
}
const Qi = Fi;
function Ui(i) {
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
  const n = [{ name: "package" }, i[1], { iconNode: i[0] }];
  let s = { $$slots: { default: [Ui] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
function Bi(i, e, t) {
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Zi extends j {
  constructor(e) {
    super(), U(this, e, Bi, ji, Q, {});
  }
}
const Hi = Zi;
function Ki(i) {
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
  let s = { $$slots: { default: [Ki] }, $$scope: { ctx: i } };
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
    [r, e, n, s]
  );
}
class Vi extends j {
  constructor(e) {
    super(), U(this, e, Gi, xi, Q, {});
  }
}
const Wi = Vi;
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
        V(n, t, s, s[3], e ? G(t, s[3], r, null) : W(s[3]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
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
        t || (p(e.$$.fragment, r), (t = !0));
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
      t(1, (e = K(K({}, e), oe(l)))), "$$scope" in l && t(3, (s = l.$$scope));
    }),
    (e = oe(e)),
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
              H(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
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
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = On(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        H();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      $e(s, l), l && C(e);
    },
  };
}
function ll(i) {
  let e, t, n;
  const s = [i[6]];
  var r = i[5][i[0]];
  function l(o) {
    let a = { $$slots: { default: [fl] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
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
              H();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
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
              H(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
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
              H();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
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
      n && C(t);
    },
  };
}
function cl(i) {
  let e, t;
  return (
    (e = new De({ props: { tokens: i[1], renderers: i[5] } })),
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
        t || (p(e.$$.fragment, n), (t = !0));
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
              H(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
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
function hl(i) {
  let e, t, n;
  const s = [{ ordered: i[4] }, i[6]];
  var r = i[5].list;
  function l(o) {
    let a = { $$slots: { default: [ml] }, $$scope: { ctx: o } };
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
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
              H();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
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
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
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
              H();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
      },
    }
  );
}
function pl(i) {
  let e, t, n;
  return (
    (e = new De({ props: { tokens: i[18].tokens, renderers: i[5] } })),
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
        n || (p(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && C(t);
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
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
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
              H();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
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
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = Cn(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        H();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      $e(s, l), l && C(e);
    },
  };
}
function gl(i) {
  let e, t, n;
  return (
    (e = new De({ props: { tokens: i[18].tokens, renderers: i[5] } })),
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
        n || (p(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && C(t);
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
    for (let u = 0; u < s.length; u += 1) a = K(a, s[u]);
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
              H();
          }
          r
            ? ((e = le(r, l(o))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(u);
      },
      i(o) {
        n || (e && p(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && g(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && C(t), e && E(e, o);
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
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = Rn(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        H();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      $e(s, l), l && C(e);
    },
  };
}
function bl(i) {
  let e, t, n;
  return (
    (e = new De({ props: { tokens: i[16].tokens, renderers: i[5] } })),
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
        n || (p(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s), s && C(t);
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
              H();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
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
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = Ln(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        H();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      $e(s, l), l && C(e);
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
              H();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
      },
    }
  );
}
function wl(i) {
  let e, t;
  return (
    (e = new De({ props: { tokens: i[13].tokens, renderers: i[5] } })),
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
        t || (p(e.$$.fragment, n), (t = !0));
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
              H();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
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
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = Sn(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        H();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      $e(s, l), l && C(e);
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
              H();
          }
          s
            ? ((e = le(s, r(l))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(a);
      },
      i(l) {
        n || (e && p(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        e && g(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && C(t), e && E(e, l);
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
            ? (s[a].p(u, o), p(s[a], 1))
            : ((s[a] = Tn(u)), s[a].c(), p(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (Z(), a = n.length; a < s.length; a += 1) r(a);
        H();
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
      for (let o = 0; o < s.length; o += 1) g(s[o]);
      t = !1;
    },
    d(l) {
      $e(s, l), l && C(e);
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
      m(c, d) {
        e && O(e, c, d), L(c, t, d), n && O(n, c, d), L(c, s, d), (r = !0);
      },
      p(c, d) {
        const h = {};
        if (
          (d & 8388708 && (h.$$scope = { dirty: d, ctx: c }),
          d & 32 && l !== (l = c[5].tablehead))
        ) {
          if (e) {
            Z();
            const m = e;
            g(m.$$.fragment, 1, 0, () => {
              E(m, 1);
            }),
              H();
          }
          l
            ? ((e = le(l, o(c))),
              A(e.$$.fragment),
              p(e.$$.fragment, 1),
              O(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(h);
        const f = {};
        if (
          (d & 8388712 && (f.$$scope = { dirty: d, ctx: c }),
          d & 32 && a !== (a = c[5].tablebody))
        ) {
          if (n) {
            Z();
            const m = n;
            g(m.$$.fragment, 1, 0, () => {
              E(m, 1);
            }),
              H();
          }
          a
            ? ((n = le(a, u(c))),
              A(n.$$.fragment),
              p(n.$$.fragment, 1),
              O(n, s.parentNode, s))
            : (n = null);
        } else a && n.$set(f);
      },
      i(c) {
        r || (e && p(e.$$.fragment, c), n && p(n.$$.fragment, c), (r = !0));
      },
      o(c) {
        e && g(e.$$.fragment, c), n && g(n.$$.fragment, c), (r = !1);
      },
      d(c) {
        e && E(e, c), c && C(t), c && C(s), n && E(n, c);
      },
    }
  );
}
function On(i) {
  let e, t;
  const n = [i[7], { renderers: i[5] }];
  let s = {};
  for (let r = 0; r < n.length; r += 1) s = K(s, n[r]);
  return (
    (e = new De({ props: s })),
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
        t || (p(e.$$.fragment, r), (t = !0));
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
                H()),
              ~e
                ? ((t = l[e]),
                  t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
                  p(t, 1),
                  t.m(n.parentNode, n))
                : (t = null));
      },
      i(a) {
        s || (p(t), (s = !0));
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
    (i.$$set = (d) => {
      (e = K(K({}, e), oe(d))),
        t(6, (s = ht(e, n))),
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
let De = class extends j {
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
function Us() {
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
let Ne = Us();
function Sl(i) {
  Ne = i;
}
const js = /[&<>"']/,
  Tl = new RegExp(js.source, "g"),
  Bs = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  Ol = new RegExp(Bs.source, "g"),
  El = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  En = (i) => El[i];
function ge(i, e) {
  if (e) {
    if (js.test(i)) return i.replace(Tl, En);
  } else if (Bs.test(i)) return i.replace(Ol, En);
  return i;
}
const Pl = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Zs(i) {
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
const Il = /[^\w:]/g,
  ql = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Pn(i, e, t) {
  if (i) {
    let n;
    try {
      n = decodeURIComponent(Zs(t)).replace(Il, "").toLowerCase();
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
  e && !ql.test(t) && (t = Nl(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const lt = {},
  Ml = /^[^:]+:\/*[^/]*$/,
  zl = /^([^:]+:)[\s\S]*$/,
  Dl = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Nl(i, e) {
  lt[" " + i] ||
    (Ml.test(i) ? (lt[" " + i] = i + "/") : (lt[" " + i] = ct(i, "/", !0))),
    (i = lt[" " + i]);
  const t = i.indexOf(":") === -1;
  return e.substring(0, 2) === "//"
    ? t
      ? e
      : i.replace(zl, "$1") + e
    : e.charAt(0) === "/"
    ? t
      ? e
      : i.replace(Dl, "$1") + e
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
function In(i, e) {
  if (e < 1) return "";
  let t = "";
  for (; e > 1; ) e & 1 && (t += i), (e >>= 1), (i += i);
  return t + i;
}
function qn(i, e, t, n) {
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
        d,
        h,
        f,
        m,
        b = t[1].trim();
      const k = b.length > 1,
        w = {
          type: "list",
          raw: "",
          ordered: k,
          start: k ? +b.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      (b = k ? `\\d{1,9}\\${b.slice(-1)}` : `\\${b}`),
        this.options.pedantic && (b = k ? b : "[*+-]");
      const R = new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (
        ;
        e && ((m = !1), !(!(t = R.exec(e)) || this.rules.block.hr.test(e)));

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
            q = new RegExp(
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
            (d = h),
            this.options.pedantic &&
              (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
            !(v.test(d) || M.test(d) || S.test(d) || q.test(e)));

          ) {
            if (d.search(/[^ ]/) >= l || !d.trim())
              f +=
                `
` + d.slice(l);
            else {
              if (
                a ||
                c.search(/[^ ]/) >= 4 ||
                v.test(c) ||
                M.test(c) ||
                q.test(c)
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
      const I = w.items.length;
      for (o = 0; o < I; o++)
        if (
          ((this.lexer.state.top = !1),
          (w.items[o].tokens = this.lexer.blockTokens(w.items[o].text, [])),
          !w.loose)
        ) {
          const S = w.items[o].tokens.filter((v) => v.type === "space"),
            q = S.length > 0 && S.some((v) => /\n.*\n/.test(v.raw));
          w.loose = q;
        }
      if (w.loose) for (o = 0; o < I; o++) w.items[o].loose = !0;
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
        qn(
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
      return qn(n, s, n[0], this.lexer);
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
  table: bt,
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
  fences: bt,
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
T._comment = ne(D._comment).replace("(?:-->|$)", "-->").getRegex();
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
  .replace("ref", D._label)
  .getRegex();
T.nolink = ne(T.nolink).replace("ref", D._label).getRegex();
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
    const t = { block: D.normal, inline: T.normal };
    this.options.pedantic
      ? ((t.block = D.pedantic), (t.inline = T.pedantic))
      : this.options.gfm &&
        ((t.block = D.gfm),
        this.options.breaks ? (t.inline = T.breaks) : (t.inline = T.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: D, inline: T };
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
              In("a", o[0].length - 2) +
              "]" +
              l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l =
        l.slice(0, o.index) +
        "[" +
        In("a", o[0].length - 2) +
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
          const d = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach(function (f) {
            (h = f.call({ lexer: this }, d)),
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
class Ht {
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
class Kt {
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
      (this.options.renderer = this.options.renderer || new Ht()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new Hs()),
      (this.slugger = new Kt());
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
      d,
      h,
      f,
      m,
      b,
      k,
      w,
      R,
      I,
      S,
      q,
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
            Zs(this.parseInline(f.tokens, this.textRenderer)),
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
            m = f.ordered,
              b = f.start,
              k = f.loose,
              o = f.items.length,
              h = "",
              r = 0;
            r < o;
            r++
          )
            (R = f.items[r]),
              (I = R.checked),
              (S = R.task),
              (w = ""),
              R.task &&
                ((q = this.renderer.checkbox(I)),
                k
                  ? R.tokens.length > 0 && R.tokens[0].type === "paragraph"
                    ? ((R.tokens[0].text = q + " " + R.tokens[0].text),
                      R.tokens[0].tokens &&
                        R.tokens[0].tokens.length > 0 &&
                        R.tokens[0].tokens[0].type === "text" &&
                        (R.tokens[0].tokens[0].text =
                          q + " " + R.tokens[0].tokens[0].text))
                    : R.tokens.unshift({ type: "text", text: q })
                  : (w += q)),
              (w += this.parse(R.tokens, k)),
              (h += this.renderer.listitem(w, S, I));
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
Wt(yt, "passThroughHooks", new Set(["preprocess", "postprocess"]));
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
function Ks(i, e) {
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
      } catch (d) {
        return l(d);
      }
      const u = function (d) {
        let h;
        if (!d)
          try {
            n.walkTokens && N.walkTokens(a, n.walkTokens),
              (h = e(a, n)),
              n.hooks && (h = n.hooks.postprocess(h));
          } catch (f) {
            d = f;
          }
        return (n.highlight = o), d ? l(d) : s(null, h);
      };
      if (!o || o.length < 3 || (delete n.highlight, !a.length)) return u();
      let c = 0;
      N.walkTokens(a, function (d) {
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
  return Ks(Le.lex, Ee.parse)(i, e, t);
}
N.options = N.setOptions = function (i) {
  return (N.defaults = { ...N.defaults, ...i }), Sl(N.defaults), N;
};
N.getDefaults = Us;
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
      const s = N.defaults.renderer || new Ht();
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
N.parseInline = Ks(Le.lexInline, Ee.parseInline);
N.Parser = Ee;
N.parser = Ee.parse;
N.Renderer = Ht;
N.TextRenderer = Hs;
N.Lexer = Le;
N.lexer = Le.lex;
N.Tokenizer = Zt;
N.Slugger = Kt;
N.Hooks = yt;
N.parse = N;
N.options;
N.setOptions;
N.use;
N.walkTokens;
N.parseInline;
Ee.parse;
Le.lex;
const xs = {};
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
      t && C(e);
    },
  };
}
function Hl(i) {
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
        V(s, n, r, r[4], t ? G(n, r[4], l, null) : W(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Kl(i) {
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
        V(s, n, r, r[4], t ? G(n, r[4], l, null) : W(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(s, n, r, r[4], t ? G(n, r[4], l, null) : W(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(s, n, r, r[4], t ? G(n, r[4], l, null) : W(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Vl(i) {
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
        V(s, n, r, r[4], t ? G(n, r[4], l, null) : W(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Wl(i) {
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
        V(s, n, r, r[4], t ? G(n, r[4], l, null) : W(r[4]), null),
        (!t || l & 4) && _(e, "id", r[2]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
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
  let e, t, n, s;
  const r = [Wl, Vl, Gl, xl, Kl, Hl, Zl],
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
              H(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
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
function Xl(i, e, t) {
  let n,
    { $$slots: s = {}, $$scope: r } = e,
    { depth: l } = e,
    { raw: o } = e,
    { text: a } = e;
  const { slug: u, getOptions: c } = hs(xs),
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(n, t, s, s[2], e ? G(t, s[2], r, null) : W(s[2]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
      n && C(e);
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
        V(s, n, r, r[2], t ? G(n, r[2], l, null) : W(r[2]), null),
        (!t || l & 1) && _(e, "href", r[0]),
        (!t || l & 2) && _(e, "title", r[1]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
      L(s, e, r), y(e, n);
    },
    p(s, [r]) {
      r & 1 && t !== (t = s[0].replace(/`/g, "") + "") && fe(n, t);
    },
    i: ee,
    o: ee,
    d(s) {
      s && C(e);
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
class Io extends j {
  constructor(e) {
    super(), U(this, e, Ao, Po, Q, {});
  }
}
function qo(i) {
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
class zo extends j {
  constructor(e) {
    super(), U(this, e, Mo, qo, Q, {});
  }
}
function Do(i) {
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
        V(s, n, r, r[2], t ? G(n, r[2], l, null) : W(r[2]), null),
        (!t || l & 2) && _(e, "align", r[1]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
        V(s, n, r, r[2], t ? G(n, r[2], l, null) : W(r[2]), null),
        (!t || l & 2) && _(e, "align", r[1]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
    },
  };
}
function Fo(i) {
  let e, t, n, s;
  const r = [No, Do],
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
              H(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
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
        V(s, n, r, r[2], t ? G(n, r[2], l, null) : W(r[2]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
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
        V(s, n, r, r[2], t ? G(n, r[2], l, null) : W(r[2]), null),
        (!t || l & 2) && _(e, "start", r[1]);
    },
    i(r) {
      t || (p(s, r), (t = !0));
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
              H(),
              (t = l[e]),
              t ? t.p(a, u) : ((t = l[e] = r[e](a)), t.c()),
              p(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        s || (p(t), (s = !0));
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
class Ko extends j {
  constructor(e) {
    super(), U(this, e, Ho, Zo, Q, { ordered: 0, start: 1 });
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
class Vo extends j {
  constructor(e) {
    super(), U(this, e, Go, xo, Q, {});
  }
}
function Wo(i) {
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
      t && C(e);
    },
  };
}
class Jo extends j {
  constructor(e) {
    super(), U(this, e, null, Wo, Q, {});
  }
}
function Xo(i) {
  let e, t;
  return {
    c() {
      (e = new rr(!1)), (t = se()), (e.a = t);
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
      n && C(t), n && e.d();
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
      L(s, e, r), y(e, t), y(t, n);
    },
    p(s, [r]) {
      r & 2 && fe(n, s[1]), r & 1 && _(e, "class", s[0]);
    },
    i: ee,
    o: ee,
    d(s) {
      s && C(e);
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
        V(s, n, r, r[0], t ? G(n, r[0], l, null) : W(r[0]), null);
    },
    i(r) {
      t || (p(s, r), (t = !0));
    },
    o(r) {
      g(s, r), (t = !1);
    },
    d(r) {
      r && C(e), s && s.d(r);
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
    tablebody: Io,
    tablerow: zo,
    tablecell: Uo,
    list: Ko,
    orderedlistitem: null,
    unorderedlistitem: null,
    listitem: Vo,
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
    (e = new De({ props: { tokens: i[0], renderers: i[1] } })),
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
        t || (p(e.$$.fragment, n), (t = !0));
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
  const d = ir();
  let h, f, m;
  return (
    fs(xs, { slug: (b) => (s ? s.slug(b) : ""), getOptions: () => r }),
    nt(() => {
      t(7, (m = !0));
    }),
    (i.$$set = (b) => {
      "source" in b && t(2, (o = b.source)),
        "renderers" in b && t(3, (a = b.renderers)),
        "options" in b && t(4, (u = b.options)),
        "isInline" in b && t(5, (c = b.isInline));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 4 && t(8, (n = Array.isArray(o))),
        i.$$.dirty & 4 && (s = o ? new Kt() : void 0),
        i.$$.dirty & 16 && t(9, (r = { ...fa, ...u })),
        i.$$.dirty & 869 &&
          (n
            ? t(0, (h = o))
            : (t(6, (f = new Le(r))),
              t(0, (h = c ? f.inlineTokens(o) : f.lex(o))),
              d("parsed", { tokens: h }))),
        i.$$.dirty & 8 && t(1, (l = { ...ca, ...a })),
        i.$$.dirty & 385 && m && !n && d("parsed", { tokens: h });
    }),
    [h, l, o, a, u, c, f, m, n, r]
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
        V(n, t, s, s[2], e ? G(t, s[2], r, null) : W(s[2]), null);
    },
    i(s) {
      e || (p(n, s), (e = !0));
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
        V(o, l, a, a[2], r ? G(l, a[2], u, null) : W(a[2]), null);
    },
    i(a) {
      r || (p(o, a), (r = !0));
    },
    o(a) {
      g(o, a), (r = !1);
    },
    d(a) {
      a && C(t), a && C(n), a && C(s), o && o.d(a);
    },
  };
}
function _a(i) {
  let e, t, n, s, r, l, o, a, u, c;
  const d = [ga, ma],
    h = [];
  function f(m, b) {
    return m[0] ? 0 : 1;
  }
  return (
    (n = f(i)),
    (s = h[n] = d[n](i)),
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
      m(m, b) {
        L(m, e, b),
          y(e, t),
          h[n].m(t, null),
          y(e, r),
          y(e, l),
          O(o, l, null),
          (a = !0),
          u || ((c = ve(e, "click", i[4])), (u = !0));
      },
      p(m, [b]) {
        let k = n;
        (n = f(m)),
          n === k
            ? h[n].p(m, b)
            : (Z(),
              g(h[k], 1, 1, () => {
                h[k] = null;
              }),
              H(),
              (s = h[n]),
              s ? s.p(m, b) : ((s = h[n] = d[n](m)), s.c()),
              p(s, 1),
              s.m(t, null)),
          (!a || b & 2) && (e.disabled = m[1]),
          (!a || b & 1) && ie(e, "opacity-90", m[0]),
          (!a || b & 2) && ie(e, "opacity-70", m[1]);
      },
      i(m) {
        a || (p(s), p(o.$$.fragment, m), (a = !0));
      },
      o(m) {
        g(s), g(o.$$.fragment, m), (a = !1);
      },
      d(m) {
        m && C(e), h[n].d(), E(o), (u = !1), c();
      },
    }
  );
}
function ba(i, e, t) {
  let { $$slots: n = {}, $$scope: s } = e,
    { isLoading: r = !1 } = e,
    { disabled: l = !1 } = e;
  function o(a) {
    lr.call(this, i, a);
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
class Gs extends j {
  constructor(e) {
    super(), U(this, e, ba, _a, Q, { isLoading: 0, disabled: 1 });
  }
}
function ya(i) {
  let e, t, n;
  return (
    (t = new Gs({
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
        n || (p(t.$$.fragment, s), (n = !0));
      },
      o(s) {
        g(t.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(e), E(t);
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
        L(o, e, a), y(e, t), y(t, n), y(e, s), O(r, e, null), (l = !0);
      },
      p(o, a) {
        (!l || a & 2) && fe(n, o[1]);
      },
      i(o) {
        l || (p(r.$$.fragment, o), (l = !0));
      },
      o(o) {
        g(r.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), E(r);
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
      s && C(e), s && C(t), s && C(n);
    },
  };
}
function zn(i) {
  var I;
  let e, t, n, s, r, l, o, a, u, c, d, h;
  t = new pa({ props: { source: i[5].description ?? "" } });
  let f = i[5].license && Dn(i),
    m = i[5].author && Nn(i),
    b = i[9].data && Fn(i),
    k = ((I = i[5].repository) == null ? void 0 : I.url) && Qn(i),
    w = i[5].homepage && Un(i),
    R = i[5].bugs && jn(i);
  return {
    c() {
      (e = $("div")),
        A(t.$$.fragment),
        (n = B()),
        (s = $("div")),
        (r = $("div")),
        f && f.c(),
        (l = B()),
        m && m.c(),
        (o = B()),
        b && b.c(),
        (a = B()),
        (u = $("div")),
        k && k.c(),
        (c = B()),
        w && w.c(),
        (d = B()),
        R && R.c(),
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
    m(S, q) {
      L(S, e, q),
        O(t, e, null),
        L(S, n, q),
        L(S, s, q),
        y(s, r),
        f && f.m(r, null),
        y(r, l),
        m && m.m(r, null),
        y(r, o),
        b && b.m(r, null),
        y(s, a),
        y(s, u),
        k && k.m(u, null),
        y(u, c),
        w && w.m(u, null),
        y(u, d),
        R && R.m(u, null),
        (h = !0);
    },
    p(S, q) {
      var M;
      const v = {};
      q & 32 && (v.source = S[5].description ?? ""),
        t.$set(v),
        S[5].license
          ? f
            ? (f.p(S, q), q & 32 && p(f, 1))
            : ((f = Dn(S)), f.c(), p(f, 1), f.m(r, l))
          : f &&
            (Z(),
            g(f, 1, 1, () => {
              f = null;
            }),
            H()),
        S[5].author
          ? m
            ? m.p(S, q)
            : ((m = Nn(S)), m.c(), m.m(r, o))
          : m && (m.d(1), (m = null)),
        S[9].data
          ? b
            ? b.p(S, q)
            : ((b = Fn(S)), b.c(), b.m(r, null))
          : b && (b.d(1), (b = null)),
        (M = S[5].repository) != null && M.url
          ? k
            ? (k.p(S, q), q & 32 && p(k, 1))
            : ((k = Qn(S)), k.c(), p(k, 1), k.m(u, c))
          : k &&
            (Z(),
            g(k, 1, 1, () => {
              k = null;
            }),
            H()),
        S[5].homepage
          ? w
            ? (w.p(S, q), q & 32 && p(w, 1))
            : ((w = Un(S)), w.c(), p(w, 1), w.m(u, d))
          : w &&
            (Z(),
            g(w, 1, 1, () => {
              w = null;
            }),
            H()),
        S[5].bugs
          ? R
            ? (R.p(S, q), q & 32 && p(R, 1))
            : ((R = jn(S)), R.c(), p(R, 1), R.m(u, null))
          : R &&
            (Z(),
            g(R, 1, 1, () => {
              R = null;
            }),
            H());
    },
    i(S) {
      h || (p(t.$$.fragment, S), p(f), p(k), p(w), p(R), (h = !0));
    },
    o(S) {
      g(t.$$.fragment, S), g(f), g(k), g(w), g(R), (h = !1);
    },
    d(S) {
      S && C(e),
        E(t),
        S && C(n),
        S && C(s),
        f && f.d(),
        m && m.d(),
        b && b.d(),
        k && k.d(),
        w && w.d(),
        R && R.d();
    },
  };
}
function Dn(i) {
  let e,
    t,
    n,
    s,
    r = (i[5].license ?? "") + "",
    l,
    o;
  return (
    (t = new Wi({ props: { class: "h-4 w-4 -translate-y-px" } })),
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
        L(a, e, u), O(t, e, null), y(e, n), y(e, s), y(s, l), (o = !0);
      },
      p(a, u) {
        (!o || u & 32) && r !== (r = (a[5].license ?? "") + "") && fe(l, r);
      },
      i(a) {
        o || (p(t.$$.fragment, a), (o = !0));
      },
      o(a) {
        g(t.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && C(e), E(t);
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
      L(o, e, a), y(e, t), y(e, n), y(e, s), y(s, l);
    },
    p(o, a) {
      a & 32 && r !== (r = o[5].author.name + "") && fe(l, r);
    },
    d(o) {
      o && C(e);
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
    d,
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
        (d = Y("kb")),
        (h = Y(" (uncompressed)")),
        _(n, "class", "font-semibold"),
        _(a, "class", "font-semibold");
    },
    m(f, m) {
      L(f, e, m),
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
    p(f, m) {
      m & 512 &&
        s !== (s = (f[9].data.gzip / 1024).toFixed(1) + "") &&
        fe(r, s),
        m & 512 &&
          u !== (u = (f[9].data.size / 1024).toFixed(1) + "") &&
          fe(c, u);
    },
    d(f) {
      f && C(e);
    },
  };
}
function Qn(i) {
  let e, t, n, s;
  return (
    (t = new Ei({ props: { class: "h-4 w-4" } })),
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
        s || (p(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && C(e), E(t);
      },
    }
  );
}
function Un(i) {
  let e, t, n, s;
  return (
    (t = new Mi({ props: { class: "h-4 w-4" } })),
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
        s || (p(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && C(e), E(t);
      },
    }
  );
}
function jn(i) {
  let e, t, n, s;
  return (
    (t = new wi({ props: { class: "h-5 w-5" } })),
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
        s || (p(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        g(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && C(e), E(t);
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
    d,
    h,
    f,
    m,
    b,
    k,
    w,
    R,
    I,
    S;
  o = new Hi({ props: { class: "h-6 w-6" } });
  const q = [ka, ya],
    v = [];
  function M(F, re) {
    return F[4] ? 0 : 1;
  }
  (m = M(i)), (b = v[m] = q[m](i));
  let P = i[6] && i[5] && zn(i);
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
        (k = B()),
        P && P.c(),
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
          (w = `animation-delay: ${(i[3] + 1) * i[13]}s; opacity: ${
            i[7] ? 0.4 : 1
          }!important;`)
        ),
        ie(e, "border-t", i[3] !== 0);
    },
    m(F, re) {
      L(F, e, re),
        y(e, t),
        y(t, n),
        y(n, s),
        y(s, r),
        y(r, l),
        O(o, l, null),
        y(r, a),
        y(r, c),
        y(n, h),
        y(n, f),
        v[m].m(f, null),
        y(t, k),
        P && P.m(t, null),
        (R = !0),
        I || ((S = [ve(e, "click", i[12]), ve(e, "keydown", i[12])]), (I = !0));
    },
    p(F, [re]) {
      (!R || re & 64) && ie(l, "hidden", !F[6]),
        (!R || re & 1) && u !== (u = cn(Bn, F[0]) + "") && fe(c, u),
        (!R || (re & 1 && d !== (d = `https://npmjs.com/package/${F[0]}`))) &&
          _(r, "href", d),
        (!R || re & 64) && ie(r, "pt-1", F[6]);
      let ke = m;
      (m = M(F)),
        m === ke
          ? v[m].p(F, re)
          : (Z(),
            g(v[ke], 1, 1, () => {
              v[ke] = null;
            }),
            H(),
            (b = v[m]),
            b ? b.p(F, re) : ((b = v[m] = q[m](F)), b.c()),
            p(b, 1),
            b.m(f, null)),
        F[6] && F[5]
          ? P
            ? (P.p(F, re), re & 96 && p(P, 1))
            : ((P = zn(F)), P.c(), p(P, 1), P.m(t, null))
          : P &&
            (Z(),
            g(P, 1, 1, () => {
              P = null;
            }),
            H()),
        (!R || re & 64) && ie(t, "expanded", F[6]),
        (!R ||
          (re & 136 &&
            w !==
              (w = `animation-delay: ${(F[3] + 1) * F[13]}s; opacity: ${
                F[7] ? 0.4 : 1
              }!important;`))) &&
          _(e, "style", w),
        (!R || re & 8) && ie(e, "border-t", F[3] !== 0);
    },
    i(F) {
      R || (p(o.$$.fragment, F), p(b), p(P), (R = !0));
    },
    o(F) {
      g(o.$$.fragment, F), g(b), g(P), (R = !1);
    },
    d(F) {
      F && C(e), E(o), v[m].d(), P && P.d(), (I = !1), Se(S);
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
    { isLatest: d = !1 } = e,
    { meta: h } = e,
    { expandedRowIndex: f = -1 } = e;
  const m = wt(),
    b = Ms();
  ft(i, b, (v) => t(8, (r = v)));
  async function k(v) {
    try {
      const M = await r.mutateAsync(v);
      m.setQueryData(Ye.package, zs(M));
    } catch (M) {
      console.log("Failed to upgrade packages:", { originalError: M });
    }
  }
  function w() {
    f === c ? t(15, (f = -1)) : t(15, (f = c));
  }
  const R = 1 / 30;
  function I(v) {
    v.key === "Escape" && t(15, (f = -1));
  }
  const S = ni(o);
  ft(i, S, (v) => t(9, (l = v))),
    nt(() => {
      window.addEventListener("keydown", I);
    }),
    Dt(() => {
      window.removeEventListener("keydown", I);
    });
  const q = (v) => {
    v.stopPropagation(), k([{ name: o, version: a, latest: u, meta: h }]);
  };
  return (
    (i.$$set = (v) => {
      "name" in v && t(0, (o = v.name)),
        "version" in v && t(1, (a = v.version)),
        "latest" in v && t(2, (u = v.latest)),
        "index" in v && t(3, (c = v.index)),
        "isLatest" in v && t(4, (d = v.isLatest)),
        "meta" in v && t(5, (h = v.meta)),
        "expandedRowIndex" in v && t(15, (f = v.expandedRowIndex));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 32776 && t(6, (n = f === c)),
        i.$$.dirty & 32832 && t(7, (s = !n && f !== -1));
    }),
    [o, a, u, c, d, h, n, s, r, l, b, k, w, R, S, f, q]
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
function Hn(i) {
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
      L(a, e, u), y(e, t), y(t, s), l || ((o = ve(t, "click", i[2])), (l = !0));
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
    d,
    h,
    f,
    m = zt(0, i[1]),
    b = [];
  for (let k = 0; k < m.length; k += 1) b[k] = Hn(Zn(i, m, k));
  return {
    c() {
      (e = $("ul")), (t = $("li")), (n = $("button")), (s = Y("◄")), (l = B());
      for (let k = 0; k < b.length; k += 1) b[k].c();
      (o = B()),
        (a = $("li")),
        (u = $("button")),
        (c = Y("►")),
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
    m(k, w) {
      L(k, e, w), y(e, t), y(t, n), y(n, s), y(e, l);
      for (let R = 0; R < b.length; R += 1) b[R] && b[R].m(e, null);
      y(e, o),
        y(e, a),
        y(a, u),
        y(u, c),
        h || ((f = [ve(n, "click", i[4]), ve(u, "click", i[3])]), (h = !0));
    },
    p(k, [w]) {
      if ((w & 1 && r !== (r = k[0] === 0) && (n.disabled = r), w & 7)) {
        m = zt(0, k[1]);
        let R;
        for (R = 0; R < m.length; R += 1) {
          const I = Zn(k, m, R);
          b[R] ? b[R].p(I, w) : ((b[R] = Hn(I)), b[R].c(), b[R].m(e, o));
        }
        for (; R < b.length; R += 1) b[R].d(1);
        b.length = m.length;
      }
      w & 3 && d !== (d = k[0] === k[1] - 1) && (u.disabled = d);
    },
    i: ee,
    o: ee,
    d(k) {
      k && C(e), $e(b, k), (h = !1), Se(f);
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
function Kn(i, e, t) {
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
    (e = new Qi({})),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
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
        t || (p(e.$$.fragment, n), (t = !0));
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
function Vn(i) {
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
        L(u, e, c), O(t, e, null), y(e, n), y(e, s), y(s, l), y(e, o), (a = !0);
      },
      p: ee,
      i(u) {
        a || (p(t.$$.fragment, u), (a = !0));
      },
      o(u) {
        g(t.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && C(e), E(t);
      },
    }
  );
}
function Wn(i) {
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
  for (let h = 0; h < u.length; h += 1) c[h] = Vn(Gn(i, u, h));
  const d = (h) =>
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
      L(h, e, f), y(e, t);
      for (let m = 0; m < c.length; m += 1) c[m] && c[m].m(t, null);
      y(e, n), y(e, s), y(s, l), y(e, o), (a = !0);
    },
    p(h, f) {
      if (f[0] & 32768) {
        u = h[35];
        let m;
        for (m = 0; m < u.length; m += 1) {
          const b = Gn(h, u, m);
          c[m]
            ? (c[m].p(b, f), p(c[m], 1))
            : ((c[m] = Vn(b)), c[m].c(), p(c[m], 1), c[m].m(t, null));
        }
        for (Z(), m = u.length; m < c.length; m += 1) d(m);
        H();
      }
    },
    i(h) {
      if (!a) {
        for (let f = 0; f < u.length; f += 1) p(c[f]);
        a = !0;
      }
    },
    o(h) {
      c = c.filter(Boolean);
      for (let f = 0; f < c.length; f += 1) g(c[f]);
      a = !1;
    },
    d(h) {
      h && C(e), $e(c, h);
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
        t || (p(e.$$.fragment, n), (t = !0));
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
    (e = new Gs({
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
        t || (p(e.$$.fragment, n), (t = !0));
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
      t && C(e);
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
    We.push(() => Ft(e, "expandedRowIndex", s)),
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
        n || (p(e.$$.fragment, l), (n = !0));
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
    We.push(() => Ft(n, "pageIndex", l)),
    {
      c() {
        (e = $("footer")),
          (t = $("div")),
          A(n.$$.fragment),
          _(t, "class", "bg-slate-900/90 rounded-full"),
          _(e, "class", "grid place-items-center");
      },
      m(a, u) {
        L(a, e, u), y(e, t), O(n, t, null), (r = !0);
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
        r || (p(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        g(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && C(e), E(n);
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
    d,
    h,
    f,
    m,
    b,
    k,
    w = i[0] === "dependencies" ? "Dependencies" : "Dev Dependencies",
    R,
    I,
    S,
    q = i[4].length + "",
    v,
    M,
    P = i[1].length + "",
    F,
    re,
    ke,
    Pe,
    Fe,
    Qe,
    J,
    Ce,
    Re,
    vt,
    xt;
  const Gt = [Oa, Ta],
    Ae = [];
  function Vt(z, X) {
    return z[6] ? 0 : 1;
  }
  (s = Vt(i)), (r = Ae[s] = Gt[s](i));
  let Ie = i[15],
    ae = [];
  for (let z = 0; z < Ie.length; z += 1) ae[z] = Wn(xn(i, Ie, z));
  const Ws = (z) =>
    g(ae[z], 1, 1, () => {
      ae[z] = null;
    });
  let pe = i[8] && Jn(),
    he = !i[8] && Xn(i),
    qe = i[10],
    ue = [];
  for (let z = 0; z < qe.length; z += 1) ue[z] = Yn(Kn(i, qe, z));
  const Js = (z) =>
    g(ue[z], 1, 1, () => {
      ue[z] = null;
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
      for (let z = 0; z < ae.length; z += 1) ae[z].c();
      (u = B()),
        (c = $("section")),
        (d = $("div")),
        (h = $("input")),
        (f = B()),
        (m = $("header")),
        (b = $("div")),
        (k = $("div")),
        (R = Y(w)),
        (I = B()),
        (S = $("span")),
        (v = Y(q)),
        (M = Y("/")),
        (F = Y(P)),
        (re = B()),
        pe && pe.c(),
        (ke = B()),
        (Pe = $("div")),
        he && he.c(),
        (Fe = B()),
        (Qe = $("main")),
        (J = $("ul"));
      for (let z = 0; z < ue.length; z += 1) ue[z].c();
      (Ce = B()),
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
        _(d, "class", ""),
        _(
          S,
          "class",
          "text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
        ),
        _(b, "class", "flex items-center justify-between w-full"),
        _(
          m,
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
    m(z, X) {
      L(z, e, X), y(e, t), y(t, n), Ae[s].m(n, null), y(t, l), y(t, o);
      for (let ye = 0; ye < ae.length; ye += 1) ae[ye] && ae[ye].m(o, null);
      y(e, u),
        y(e, c),
        y(c, d),
        y(d, h),
        Yt(h, i[3]),
        y(c, f),
        y(c, m),
        y(m, b),
        y(b, k),
        y(k, R),
        y(k, I),
        y(k, S),
        y(S, v),
        y(S, M),
        y(S, F),
        y(b, re),
        pe && pe.m(b, null),
        y(m, ke),
        y(m, Pe),
        he && he.m(Pe, null),
        y(c, Fe),
        y(c, Qe),
        y(Qe, J);
      for (let ye = 0; ye < ue.length; ye += 1) ue[ye] && ue[ye].m(J, null);
      y(c, Ce),
        de && de.m(c, null),
        (Re = !0),
        vt ||
          ((xt = [
            ve(n, "click", i[19]),
            tr(nl.call(null, t)),
            ve(t, "outsideclick", i[20]),
            ve(h, "input", i[21]),
            ve(h, "focus", i[22]),
            ve(h, "blur", i[23]),
          ]),
          (vt = !0));
    },
    p(z, X) {
      let ye = s;
      if (
        ((s = Vt(z)),
        s !== ye &&
          (Z(),
          g(Ae[ye], 1, 1, () => {
            Ae[ye] = null;
          }),
          H(),
          (r = Ae[s]),
          r || ((r = Ae[s] = Gt[s](z)), r.c()),
          p(r, 1),
          r.m(n, null)),
        (!Re || X[0] & 64) && ie(n, "hidden", z[6]),
        X[0] & 32768)
      ) {
        Ie = z[15];
        let te;
        for (te = 0; te < Ie.length; te += 1) {
          const Ke = xn(z, Ie, te);
          ae[te]
            ? (ae[te].p(Ke, X), p(ae[te], 1))
            : ((ae[te] = Wn(Ke)), ae[te].c(), p(ae[te], 1), ae[te].m(o, null));
        }
        for (Z(), te = Ie.length; te < ae.length; te += 1) Ws(te);
        H();
      }
      if (
        ((!Re || (X[0] & 64 && a !== (a = !z[6]))) && _(o, "aria-hidden", a),
        (!Re || X[0] & 64) && ie(o, "opacity-100", z[6]),
        (!Re || X[0] & 64) && ie(t, "translate-x-64", z[6]),
        X[0] & 8 && h.value !== z[3] && Yt(h, z[3]),
        (!Re || X[0] & 1) &&
          w !==
            (w =
              z[0] === "dependencies" ? "Dependencies" : "Dev Dependencies") &&
          fe(R, w),
        (!Re || X[0] & 16) && q !== (q = z[4].length + "") && fe(v, q),
        (!Re || X[0] & 2) && P !== (P = z[1].length + "") && fe(F, P),
        z[8]
          ? pe
            ? X[0] & 256 && p(pe, 1)
            : ((pe = Jn()), pe.c(), p(pe, 1), pe.m(b, null))
          : pe &&
            (Z(),
            g(pe, 1, 1, () => {
              pe = null;
            }),
            H()),
        z[8]
          ? he &&
            (Z(),
            g(he, 1, 1, () => {
              he = null;
            }),
            H())
          : he
          ? (he.p(z, X), X[0] & 256 && p(he, 1))
          : ((he = Xn(z)), he.c(), p(he, 1), he.m(Pe, null)),
        X[0] & 1056)
      ) {
        qe = z[10];
        let te;
        for (te = 0; te < qe.length; te += 1) {
          const Ke = Kn(z, qe, te);
          ue[te]
            ? (ue[te].p(Ke, X), p(ue[te], 1))
            : ((ue[te] = Yn(Ke)), ue[te].c(), p(ue[te], 1), ue[te].m(J, null));
        }
        for (Z(), te = qe.length; te < ue.length; te += 1) Js(te);
        H();
      }
      z[11] > 1
        ? de
          ? (de.p(z, X), X[0] & 2048 && p(de, 1))
          : ((de = es(z)), de.c(), p(de, 1), de.m(c, null))
        : de &&
          (Z(),
          g(de, 1, 1, () => {
            de = null;
          }),
          H());
    },
    i(z) {
      if (!Re) {
        p(r);
        for (let X = 0; X < Ie.length; X += 1) p(ae[X]);
        p(pe), p(he);
        for (let X = 0; X < qe.length; X += 1) p(ue[X]);
        p(de), (Re = !0);
      }
    },
    o(z) {
      g(r), (ae = ae.filter(Boolean));
      for (let X = 0; X < ae.length; X += 1) g(ae[X]);
      g(pe), g(he), (ue = ue.filter(Boolean));
      for (let X = 0; X < ue.length; X += 1) g(ue[X]);
      g(de), (Re = !1);
    },
    d(z) {
      z && C(e),
        Ae[s].d(),
        $e(ae, z),
        pe && pe.d(),
        he && he.d(),
        $e(ue, z),
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
    d,
    { selectedTab: h = "dependencies" } = e,
    { entries: f = [] } = e,
    m = 0,
    b = -1,
    k = "",
    w = !1,
    R = !1;
  const I = Ms();
  ft(i, I, (J) => t(12, (d = J)));
  const S = wt();
  async function q(J) {
    try {
      const Ce = await d.mutateAsync(J);
      S.setQueryData(Ye.package, zs(Ce)), await S.refetchQueries([Ye.package]);
    } catch (Ce) {
      console.log("Failed to upgrade packages:", { originalError: Ce });
    }
  }
  si((J) => {
    if (J.shiftKey)
      switch (J.key) {
        case "ArrowRight":
        case "ArrowLeft":
          J.preventDefault(),
            t(
              0,
              (h = h === "dependencies" ? "devDependencies" : "dependencies")
            ),
            t(2, (m = 0)),
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
        m > 0 && (J.preventDefault(), t(2, m--, m), t(5, (b = -1)));
        break;
      case "ArrowRight":
        m < s - 1 && (J.preventDefault(), t(2, m++, m), t(5, (b = -1)));
        break;
      case "Escape":
        J.preventDefault(), w && t(6, (w = !1));
        break;
      case "h":
        R || (J.preventDefault(), t(6, (w = !w)));
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
    (k = this.value), t(3, k);
  }
  const re = () => {
      t(7, (R = !0));
    },
    ke = () => {
      t(7, (R = !1));
    },
    Pe = () => q(u);
  function Fe(J) {
    (b = J), t(5, b), t(0, h), t(3, k);
  }
  function Qe(J) {
    (m = J), t(2, m), t(0, h), t(3, k);
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
            ({ name: J, version: Ce }) =>
              J.toLowerCase().includes(k.toLowerCase()) ||
              Ce.toLowerCase().includes(k.toLowerCase())
          ))
        ),
        i.$$.dirty[0] & 262144 && t(11, (s = Math.ceil(n.length / Ct))),
        i.$$.dirty[0] & 262144 &&
          t(
            16,
            (r = n
              .map((J) => ({ ...J, isLatest: Ss(J.version, J.latest) }))
              .sort((J, Ce) =>
                J.isLatest && Ce.isLatest
                  ? 0
                  : J.isLatest && !Ce.isLatest
                  ? 1
                  : -1
              ))
          ),
        i.$$.dirty[0] & 1 && h && (t(2, (m = 0)), t(5, (b = -1))),
        i.$$.dirty[0] & 8 && k && (t(2, (m = 0)), t(5, (b = -1))),
        i.$$.dirty[0] & 4 && t(17, (l = m * Ct)),
        i.$$.dirty[0] & 196608 && t(10, (o = r.slice(l, l + Ct))),
        i.$$.dirty[0] & 65536 &&
          t(
            4,
            ([a, u] = Ns(Ds("isLatest"), r)),
            a,
            (t(9, u), t(16, r), t(18, n), t(1, f), t(3, k))
          ),
        i.$$.dirty[0] & 18 && t(8, (c = a.length === f.length));
    }),
    [
      h,
      f,
      m,
      k,
      a,
      b,
      w,
      R,
      c,
      u,
      o,
      s,
      d,
      I,
      q,
      v,
      r,
      l,
      n,
      M,
      P,
      F,
      re,
      ke,
      Pe,
      Fe,
      Qe,
    ]
  );
}
class Ia extends j {
  constructor(e) {
    super(),
      U(this, e, Aa, Pa, Q, { selectedTab: 0, entries: 1 }, null, [-1, -1]);
  }
}
const qa = "@greenbot/cli",
  Ma = "0.25.0",
  za = ["greenbot", "cli", "package updater"],
  Da = "An interactive package updater for npm based applications",
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
    cssnano: "^6.0.1",
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
  Ha = {
    "@tailwindcss/typography": "^0.5.9",
    "@tanstack/svelte-query": "^4.29.11",
    "animate.css": "^4.1.1",
    "body-parser": "^1.20.2",
    chalk: "^4.1.2",
    cors: "^2.8.5",
    daisyui: "^3.1.0",
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
  Ka = {
    name: qa,
    version: Ma,
    keywords: za,
    description: Da,
    homepage: Na,
    license: Fa,
    files: Qa,
    bin: Ua,
    type: ja,
    scripts: Ba,
    devDependencies: Za,
    dependencies: Ha,
  };
const xa = (i) => ({}),
  ts = (i) => ({}),
  Ga = (i) => ({}),
  ns = (i) => ({});
function Va(i) {
  let e, t, n, s, r, l, o, a, u, c, d, h, f, m, b;
  const k = i[1].logo,
    w = x(k, i, i[0], ns),
    R = i[1].version,
    I = x(R, i, i[0], ts),
    S = i[1].default,
    q = x(S, i, i[0], null);
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
        I && I.c(),
        (u = B()),
        (c = $("main")),
        q && q.c(),
        (d = B()),
        (h = $("footer")),
        (f = $("div")),
        (m = $("span")),
        (m.textContent = `npm-greenbot@v${Ka.version}`),
        _(r, "class", "w-12"),
        _(s, "class", "flex items-center gap-2 whitespace-nowrap p-2"),
        _(
          n,
          "class",
          "md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"
        ),
        _(t, "class", "border-b border-granny-smith-apple/50 bg-slate-900/60"),
        _(c, "class", "layout-main svelte-1m49ym4"),
        _(m, "class", "text-sm"),
        _(f, "class", "max-w-xl m-auto text-center"),
        _(e, "class", "layout svelte-1m49ym4");
    },
    m(v, M) {
      L(v, e, M),
        y(e, t),
        y(t, n),
        y(n, s),
        y(s, r),
        w && w.m(r, null),
        y(s, l),
        y(s, o),
        y(n, a),
        I && I.m(n, null),
        y(e, u),
        y(e, c),
        q && q.m(c, null),
        y(e, d),
        y(e, h),
        y(h, f),
        y(f, m),
        (b = !0);
    },
    p(v, [M]) {
      w &&
        w.p &&
        (!b || M & 1) &&
        V(w, k, v, v[0], b ? G(k, v[0], M, Ga) : W(v[0]), ns),
        I &&
          I.p &&
          (!b || M & 1) &&
          V(I, R, v, v[0], b ? G(R, v[0], M, xa) : W(v[0]), ts),
        q &&
          q.p &&
          (!b || M & 1) &&
          V(q, S, v, v[0], b ? G(S, v[0], M, null) : W(v[0]), null);
    },
    i(v) {
      b || (p(w, v), p(I, v), p(q, v), (b = !0));
    },
    o(v) {
      g(w, v), g(I, v), g(q, v), (b = !1);
    },
    d(v) {
      v && C(e), w && w.d(v), I && I.d(v), q && q.d(v);
    },
  };
}
function Wa(i, e, t) {
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
    super(), U(this, e, Wa, Va, Q, {});
  }
}
function Xa(i) {
  let e, t, n, s, r, l;
  return {
    c() {
      (e = be("svg")),
        (t = be("title")),
        (n = Y(i[0])),
        (s = be("path")),
        _(s, "d", (r = i[1][i[0]])),
        _(s, "fill", "currentColor"),
        _(e, "role", "img"),
        _(e, "viewBox", "0 0 24 24"),
        _(e, "xmlns", "http://www.w3.org/2000/svg"),
        _(e, "class", (l = i[2].class));
    },
    m(o, a) {
      L(o, e, a), y(e, t), y(t, n), y(e, s);
    },
    p(o, [a]) {
      a & 1 && fe(n, o[0]),
        a & 1 && r !== (r = o[1][o[0]]) && _(s, "d", r),
        a & 4 && l !== (l = o[2].class) && _(e, "class", l);
    },
    i: ee,
    o: ee,
    d(o) {
      o && C(e);
    },
  };
}
function Ya(i, e, t) {
  let { kind: n } = e;
  const s = {
    yarn: "M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z",
    npm: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
    pnpm: "M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z",
  };
  return (
    (i.$$set = (r) => {
      t(2, (e = K(K({}, e), oe(r)))), "kind" in r && t(0, (n = r.kind));
    }),
    (e = oe(e)),
    [n, s, e]
  );
}
class eu extends j {
  constructor(e) {
    super(), U(this, e, Ya, Xa, Q, { kind: 0 });
  }
}
function tu(i) {
  let e, t, n, s, r, l, o, a, u, c;
  return (
    (n = new eu({ props: { kind: i[2], class: "h-4 w-4" } })),
    {
      c() {
        (e = $("a")),
          (t = $("div")),
          A(n.$$.fragment),
          (s = B()),
          (r = $("div")),
          (l = Y(i[0])),
          (o = Y(" @ ")),
          (a = Y(i[1])),
          _(t, "class", "rounded-full -translate-x-2 bg-black/25 p-2.5"),
          _(r, "class", "font-mono font-medium -translate-x-2"),
          _(e, "target", "_blank"),
          _(e, "href", (u = `https://www.npmjs.com/package/${i[0]}`)),
          _(e, "rel", "noopener noreferrer"),
          _(e, "class", "svelte-2pn84z");
      },
      m(d, h) {
        L(d, e, h),
          y(e, t),
          O(n, t, null),
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
        c || (p(n.$$.fragment, d), (c = !0));
      },
      o(d) {
        g(n.$$.fragment, d), (c = !1);
      },
      d(d) {
        d && C(e), E(n);
      },
    }
  );
}
function nu(i, e, t) {
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
class su extends j {
  constructor(e) {
    super(), U(this, e, nu, tu, Q, { name: 0, version: 1, manager: 2 });
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
        y(e, n),
        y(e, s),
        l ||
          ((o = ve(e, "click", function () {
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
      a && C(e), (l = !1), o();
    },
  };
}
function ru(i) {
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
      s && C(e), $e(n, s);
    },
  };
}
function iu(i, e, t) {
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
class lu extends j {
  constructor(e) {
    super(), U(this, e, iu, ru, Q, { selectedTab: 0, tabs: 1, onChange: 2 });
  }
}
function ou(i) {
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
      L(s, e, r), y(e, t), y(e, n);
    },
    p(s, [r]) {
      r & 1 && ie(e, "animate-spin", s[0]);
    },
    i: ee,
    o: ee,
    d(s) {
      s && C(e);
    },
  };
}
function au(i, e, t) {
  let { animated: n = !1 } = e;
  return (
    (i.$$set = (s) => {
      "animated" in s && t(0, (n = s.animated));
    }),
    [n]
  );
}
class uu extends j {
  constructor(e) {
    super(), U(this, e, au, ou, Q, { animated: 0 });
  }
}
function is(i) {
  let e, t, n, s, r, l;
  return (
    (n = new uu({ props: { animated: !0 } })),
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
        L(o, e, a), y(e, t), O(n, t, null), y(e, s), y(e, r), (l = !0);
      },
      i(o) {
        l || (p(n.$$.fragment, o), (l = !0));
      },
      o(o) {
        g(n.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && C(e), E(n);
      },
    }
  );
}
function ls(i) {
  let e, t, n, s, r;
  e = new lu({
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
    (n = new Ia({ props: o })),
    We.push(() => Ft(n, "selectedTab", l)),
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
        const d = {};
        u & 4 && (d.entries = a[2]),
          !s && u & 1 && ((s = !0), (d.selectedTab = a[0]), Nt(() => (s = !1))),
          n.$set(d);
      },
      i(a) {
        r || (p(e.$$.fragment, a), p(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        g(e.$$.fragment, a), g(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        E(e, a), a && C(t), E(n, a);
      },
    }
  );
}
function cu(i) {
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
      L(l, e, o), s && s.m(e, null), y(e, t), r && r.m(e, null), (n = !0);
    },
    p(l, o) {
      l[1].isLoading
        ? s
          ? o & 2 && p(s, 1)
          : ((s = is()), s.c(), p(s, 1), s.m(e, t))
        : s &&
          (Z(),
          g(s, 1, 1, () => {
            s = null;
          }),
          H()),
        l[1].data
          ? r
            ? (r.p(l, o), o & 2 && p(r, 1))
            : ((r = ls(l)), r.c(), p(r, 1), r.m(e, null))
          : r &&
            (Z(),
            g(r, 1, 1, () => {
              r = null;
            }),
            H());
    },
    i(l) {
      n || (p(s), p(r), (n = !0));
    },
    o(l) {
      g(s), g(r), (n = !1);
    },
    d(l) {
      l && C(e), s && s.d(), r && r.d();
    },
  };
}
function fu(i) {
  let e, t;
  return (
    (e = new li({ props: { mood: i[3], slot: "logo" } })),
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
        t || (p(e.$$.fragment, n), (t = !0));
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
    (e = new su({
      props: {
        name: i[1].data.name,
        version: i[1].data.version,
        manager: i[1].data.packageManager,
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
        const r = {};
        s & 2 && (r.name = n[1].data.name),
          s & 2 && (r.version = n[1].data.version),
          s & 2 && (r.manager = n[1].data.packageManager),
          e.$set(r);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
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
function hu(i) {
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
          ? (n.p(s, r), r & 2 && p(n, 1))
          : ((n = os(s)), n.c(), p(n, 1), n.m(e, null))
        : n &&
          (Z(),
          g(n, 1, 1, () => {
            n = null;
          }),
          H());
    },
    i(s) {
      t || (p(n), (t = !0));
    },
    o(s) {
      g(n), (t = !1);
    },
    d(s) {
      s && C(e), n && n.d();
    },
  };
}
function du(i) {
  let e, t;
  return (
    (e = new Ja({
      props: {
        $$slots: { version: [hu], logo: [fu], default: [cu] },
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
        t || (p(e.$$.fragment, n), (t = !0));
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
function pu([i, e], t, n) {
  return {
    name: i,
    version: e,
    latest: i in t ? t[i] : e,
    meta: i in n ? n[i] : void 0,
  };
}
function mu(i, e, t) {
  let n,
    s,
    r,
    l,
    o = "dependencies";
  function a({ value: f }) {
    t(0, (o = f));
  }
  function u(f, m) {
    return f.filter(([b, k]) => m[b] !== k);
  }
  function c(f) {
    if (!f || f.isLoading) return "asleep";
    if (f.error) return "dead";
    if (f.data) {
      const { dependencies: m, devDependencies: b, resolutions: k } = f.data,
        w = Object.entries({ ...m, ...b });
      return u(w, f.data.resolutions).filter(([I, S]) => !Ss(S, k[I])).length
        ? "angry"
        : "happy";
    }
    return "awake";
  }
  const d = ti();
  ft(i, d, (f) => t(1, (l = f)));
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
              l.isLoading || l.error || !l.data
                ? []
                : u(Object.entries(l.data[o] ?? {}), l.data.resolutions))
          ),
        i.$$.dirty & 66 &&
          t(
            2,
            (r = s.map((f) => {
              var m, b;
              return pu(
                f,
                ((m = l.data) == null ? void 0 : m.resolutions) ?? {},
                ((b = l.data) == null ? void 0 : b.meta) ?? {}
              );
            }))
          );
    }),
    [o, l, r, n, a, d, s, h]
  );
}
class gu extends j {
  constructor(e) {
    super(), U(this, e, mu, du, Q, {});
  }
}
function _u(i) {
  let e, t;
  return (
    (e = new gu({})),
    {
      c() {
        A(e.$$.fragment);
      },
      m(n, s) {
        O(e, n, s), (t = !0);
      },
      i(n) {
        t || (p(e.$$.fragment, n), (t = !0));
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
function bu(i) {
  let e, t;
  return (
    (e = new Dr({
      props: { client: i[0], $$slots: { default: [_u] }, $$scope: { ctx: i } },
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
        t || (p(e.$$.fragment, n), (t = !0));
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
function yu(i) {
  return [new vs()];
}
class ku extends j {
  constructor(e) {
    super(), U(this, e, yu, bu, Q, {});
  }
}
const Vs = document.getElementById("app");
if (!Vs) throw new Error("Could not find target element");
new ku({ target: Vs });
