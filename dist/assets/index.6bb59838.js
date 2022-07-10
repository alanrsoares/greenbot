const Zn = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
};
Zn();
function B() {}
function H(n, e) {
  for (const t in e) n[t] = e[t];
  return n;
}
function gn(n) {
  return n();
}
function Pt() {
  return Object.create(null);
}
function qe(n) {
  n.forEach(gn);
}
function _t(n) {
  return typeof n == "function";
}
function x(n, e) {
  return n != n
    ? e == e
    : n !== e || (n && typeof n == "object") || typeof n == "function";
}
function Gn(n) {
  return Object.keys(n).length === 0;
}
function Jn(n, ...e) {
  if (n == null) return B;
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Xe(n, e, t) {
  n.$$.on_destroy.push(Jn(e, t));
}
function Le(n, e, t, s) {
  if (n) {
    const i = bn(n, e, t, s);
    return n[0](i);
  }
}
function bn(n, e, t, s) {
  return n[1] && s ? H(t.ctx.slice(), n[1](s(e))) : t.ctx;
}
function Re(n, e, t, s) {
  if (n[2] && s) {
    const i = n[2](s(t));
    if (e.dirty === void 0) return i;
    if (typeof i == "object") {
      const r = [],
        a = Math.max(e.dirty.length, i.length);
      for (let o = 0; o < a; o += 1) r[o] = e.dirty[o] | i[o];
      return r;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function Pe(n, e, t, s, i, r) {
  if (i) {
    const a = bn(e, t, s, r);
    n.p(a, i);
  }
}
function je(n) {
  if (n.ctx.length > 32) {
    const e = [],
      t = n.ctx.length / 32;
    for (let s = 0; s < t; s++) e[s] = -1;
    return e;
  }
  return -1;
}
function Y(n) {
  const e = {};
  for (const t in n) t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function Wn(n) {
  return n && _t(n.destroy) ? n.destroy : B;
}
function p(n, e) {
  n.appendChild(e);
}
function $(n, e, t) {
  n.insertBefore(e, t || null);
}
function M(n) {
  n.parentNode.removeChild(n);
}
function Qe(n, e) {
  for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e);
}
function w(n) {
  return document.createElement(n);
}
function X(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function z(n) {
  return document.createTextNode(n);
}
function T() {
  return z(" ");
}
function Xn() {
  return z("");
}
function de(n, e, t, s) {
  return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
}
function h(n, e, t) {
  t == null
    ? n.removeAttribute(e)
    : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Yn(n) {
  return Array.from(n.childNodes);
}
function oe(n, e) {
  (e = "" + e), n.wholeText !== e && (n.data = e);
}
function jt(n, e) {
  n.value = e == null ? "" : e;
}
function K(n, e, t) {
  n.classList[t ? "add" : "remove"](e);
}
let Ie;
function Ae(n) {
  Ie = n;
}
function at() {
  if (!Ie) throw new Error("Function called outside component initialization");
  return Ie;
}
function yt(n) {
  at().$$.on_mount.push(n);
}
function wt(n) {
  at().$$.on_destroy.push(n);
}
function es(n, e) {
  return at().$$.context.set(n, e), e;
}
function ts(n) {
  return at().$$.context.get(n);
}
function ns(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((s) => s.call(this, e));
}
const Se = [],
  Ue = [],
  Ve = [],
  dt = [],
  ss = Promise.resolve();
let ht = !1;
function is() {
  ht || ((ht = !0), ss.then(vn));
}
function pt(n) {
  Ve.push(n);
}
function Ot(n) {
  dt.push(n);
}
const ut = new Set();
let Ke = 0;
function vn() {
  const n = Ie;
  do {
    for (; Ke < Se.length; ) {
      const e = Se[Ke];
      Ke++, Ae(e), rs(e.$$);
    }
    for (Ae(null), Se.length = 0, Ke = 0; Ue.length; ) Ue.pop()();
    for (let e = 0; e < Ve.length; e += 1) {
      const t = Ve[e];
      ut.has(t) || (ut.add(t), t());
    }
    Ve.length = 0;
  } while (Se.length);
  for (; dt.length; ) dt.pop()();
  (ht = !1), ut.clear(), Ae(n);
}
function rs(n) {
  if (n.fragment !== null) {
    n.update(), qe(n.before_update);
    const e = n.dirty;
    (n.dirty = [-1]),
      n.fragment && n.fragment.p(n.ctx, e),
      n.after_update.forEach(pt);
  }
}
const Ze = new Set();
let Ce;
function re() {
  Ce = { r: 0, c: [], p: Ce };
}
function ae() {
  Ce.r || qe(Ce.c), (Ce = Ce.p);
}
function _(n, e) {
  n && n.i && (Ze.delete(n), n.i(e));
}
function C(n, e, t, s) {
  if (n && n.o) {
    if (Ze.has(n)) return;
    Ze.add(n),
      Ce.c.push(() => {
        Ze.delete(n), s && (t && n.d(1), s());
      }),
      n.o(e);
  } else s && s();
}
function pe(n, e) {
  const t = {},
    s = {},
    i = { $$scope: 1 };
  let r = n.length;
  for (; r--; ) {
    const a = n[r],
      o = e[r];
    if (o) {
      for (const l in a) l in o || (s[l] = 1);
      for (const l in o) i[l] || ((t[l] = o[l]), (i[l] = 1));
      n[r] = o;
    } else for (const l in a) i[l] = 1;
  }
  for (const a in s) a in t || (t[a] = void 0);
  return t;
}
function me(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Ct(n, e, t) {
  const s = n.$$.props[e];
  s !== void 0 && ((n.$$.bound[s] = t), t(n.$$.ctx[s]));
}
function U(n) {
  n && n.c();
}
function Q(n, e, t, s) {
  const { fragment: i, on_mount: r, on_destroy: a, after_update: o } = n.$$;
  i && i.m(e, t),
    s ||
      pt(() => {
        const l = r.map(gn).filter(_t);
        a ? a.push(...l) : qe(l), (n.$$.on_mount = []);
      }),
    o.forEach(pt);
}
function I(n, e) {
  const t = n.$$;
  t.fragment !== null &&
    (qe(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function as(n, e) {
  n.$$.dirty[0] === -1 && (Se.push(n), is(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Z(n, e, t, s, i, r, a, o = [-1]) {
  const l = Ie;
  Ae(n);
  const u = (n.$$ = {
    fragment: null,
    ctx: null,
    props: r,
    update: B,
    not_equal: i,
    bound: Pt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: Pt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || l.$$.root,
  });
  a && a(u.root);
  let d = !1;
  if (
    ((u.ctx = t
      ? t(n, e.props || {}, (m, f, ...b) => {
          const c = b.length ? b[0] : f;
          return (
            u.ctx &&
              i(u.ctx[m], (u.ctx[m] = c)) &&
              (!u.skip_bound && u.bound[m] && u.bound[m](c), d && as(n, m)),
            f
          );
        })
      : []),
    u.update(),
    (d = !0),
    qe(u.before_update),
    (u.fragment = s ? s(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const m = Yn(e.target);
      u.fragment && u.fragment.l(m), m.forEach(M);
    } else u.fragment && u.fragment.c();
    e.intro && _(n.$$.fragment),
      Q(n, e.target, e.anchor, e.customElement),
      vn();
  }
  Ae(l);
}
class G {
  $destroy() {
    I(this, 1), (this.$destroy = B);
  }
  $on(e, t) {
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      s.push(t),
      () => {
        const i = s.indexOf(t);
        i !== -1 && s.splice(i, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Gn(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
class $e {
  constructor() {
    this.listeners = [];
  }
  subscribe(e) {
    const t = e || (() => {});
    return (
      this.listeners.push(t),
      this.onSubscribe(),
      () => {
        (this.listeners = this.listeners.filter((s) => s !== t)),
          this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const Ye = typeof window == "undefined";
function ie() {}
function os(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function mt(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function et(n) {
  return Array.isArray(n) ? n : [n];
}
function _n(n, e) {
  return Math.max(n + (e || 0) - Date.now(), 0);
}
function Te(n, e, t) {
  return Ne(n)
    ? typeof e == "function"
      ? Object.assign(Object.assign({}, t), { queryKey: n, queryFn: e })
      : Object.assign(Object.assign({}, e), { queryKey: n })
    : n;
}
function qt(n, e, t) {
  return Ne(n)
    ? typeof e == "function"
      ? Object.assign(Object.assign({}, t), { mutationKey: n, mutationFn: e })
      : Object.assign(Object.assign({}, e), { mutationKey: n })
    : typeof n == "function"
    ? Object.assign(Object.assign({}, e), { mutationFn: n })
    : Object.assign({}, n);
}
function _e(n, e, t) {
  return Ne(n)
    ? [Object.assign(Object.assign({}, e), { queryKey: n }), t]
    : [n || {}, e];
}
function ls(n, e) {
  return (n === !0 && e === !0) || (n == null && e == null)
    ? "all"
    : n === !1 && e === !1
    ? "none"
    : (n != null ? n : !e)
    ? "active"
    : "inactive";
}
function Mt(n, e) {
  const {
    active: t,
    exact: s,
    fetching: i,
    inactive: r,
    predicate: a,
    queryKey: o,
    stale: l,
  } = n;
  if (Ne(o)) {
    if (s) {
      if (e.queryHash !== ot(o, e.options)) return !1;
    } else if (!tt(e.queryKey, o)) return !1;
  }
  const u = ls(t, r);
  if (u === "none") return !1;
  if (u !== "all") {
    const d = e.isActive();
    if ((u === "active" && !d) || (u === "inactive" && d)) return !1;
  }
  return !(
    (typeof l == "boolean" && e.isStale() !== l) ||
    (typeof i == "boolean" && e.isFetching() !== i) ||
    (a && !a(e))
  );
}
function $t(n, e) {
  const { exact: t, fetching: s, predicate: i, mutationKey: r } = n;
  if (Ne(r)) {
    if (!e.options.mutationKey) return !1;
    if (t) {
      if (ke(e.options.mutationKey) !== ke(r)) return !1;
    } else if (!tt(e.options.mutationKey, r)) return !1;
  }
  return !(
    (typeof s == "boolean" && (e.state.status === "loading") !== s) ||
    (i && !i(e))
  );
}
function ot(n, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ke)(n);
}
function ke(n) {
  const e = et(n);
  return us(e);
}
function us(n) {
  return JSON.stringify(n, (e, t) =>
    gt(t)
      ? Object.keys(t)
          .sort()
          .reduce((s, i) => ((s[i] = t[i]), s), {})
      : t
  );
}
function tt(n, e) {
  return yn(et(n), et(e));
}
function yn(n, e) {
  return n === e
    ? !0
    : typeof n != typeof e
    ? !1
    : n && e && typeof n == "object" && typeof e == "object"
    ? !Object.keys(e).some((t) => !yn(n[t], e[t]))
    : !1;
}
function nt(n, e) {
  if (n === e) return n;
  const t = Array.isArray(n) && Array.isArray(e);
  if (t || (gt(n) && gt(e))) {
    const s = t ? n.length : Object.keys(n).length,
      i = t ? e : Object.keys(e),
      r = i.length,
      a = t ? [] : {};
    let o = 0;
    for (let l = 0; l < r; l++) {
      const u = t ? l : i[l];
      (a[u] = nt(n[u], e[u])), a[u] === n[u] && o++;
    }
    return s === r && o === s ? n : a;
  }
  return e;
}
function cs(n, e) {
  if ((n && !e) || (e && !n)) return !1;
  for (const t in n) if (n[t] !== e[t]) return !1;
  return !0;
}
function gt(n) {
  if (!Ft(n)) return !1;
  const e = n.constructor;
  if (typeof e == "undefined") return !0;
  const t = e.prototype;
  return !(!Ft(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function Ft(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ne(n) {
  return typeof n == "string" || Array.isArray(n);
}
function fs(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
function Et(n) {
  Promise.resolve()
    .then(n)
    .catch((e) =>
      setTimeout(() => {
        throw e;
      })
    );
}
function wn() {
  if (typeof AbortController == "function") return new AbortController();
}
class ds extends $e {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!Ye && (window == null ? void 0 : window.addEventListener)) {
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
    var e;
    this.hasListeners() ||
      ((e = this.cleanup) === null || e === void 0 || e.call(this),
      (this.cleanup = void 0));
  }
  setEventListener(e) {
    var t;
    (this.setup = e),
      (t = this.cleanup) === null || t === void 0 || t.call(this),
      (this.cleanup = e((s) => {
        typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
      }));
  }
  setFocused(e) {
    (this.focused = e), e && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((e) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document == "undefined"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const De = new ds();
class hs extends $e {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!Ye && (window == null ? void 0 : window.addEventListener)) {
          const t = () => e();
          return (
            window.addEventListener("online", t, !1),
            window.addEventListener("offline", t, !1),
            () => {
              window.removeEventListener("online", t),
                window.removeEventListener("offline", t);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() ||
      ((e = this.cleanup) === null || e === void 0 || e.call(this),
      (this.cleanup = void 0));
  }
  setEventListener(e) {
    var t;
    (this.setup = e),
      (t = this.cleanup) === null || t === void 0 || t.call(this),
      (this.cleanup = e((s) => {
        typeof s == "boolean" ? this.setOnline(s) : this.onOnline();
      }));
  }
  setOnline(e) {
    (this.online = e), e && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((e) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator == "undefined" ||
        typeof navigator.onLine == "undefined"
      ? !0
      : navigator.onLine;
  }
}
const Ge = new hs();
function ps(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function st(n) {
  return typeof (n == null ? void 0 : n.cancel) == "function";
}
class On {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
}
function Je(n) {
  return n instanceof On;
}
class Cn {
  constructor(e) {
    let t = !1,
      s,
      i,
      r,
      a;
    (this.abort = e.abort),
      (this.cancel = (m) => (s == null ? void 0 : s(m))),
      (this.cancelRetry = () => {
        t = !0;
      }),
      (this.continueRetry = () => {
        t = !1;
      }),
      (this.continue = () => (i == null ? void 0 : i())),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise((m, f) => {
        (r = m), (a = f);
      }));
    const o = (m) => {
        var f;
        this.isResolved ||
          ((this.isResolved = !0),
          (f = e.onSuccess) === null || f === void 0 || f.call(e, m),
          i == null || i(),
          r(m));
      },
      l = (m) => {
        var f;
        this.isResolved ||
          ((this.isResolved = !0),
          (f = e.onError) === null || f === void 0 || f.call(e, m),
          i == null || i(),
          a(m));
      },
      u = () =>
        new Promise((m) => {
          var f;
          (i = m),
            (this.isPaused = !0),
            (f = e.onPause) === null || f === void 0 || f.call(e);
        }).then(() => {
          var m;
          (i = void 0),
            (this.isPaused = !1),
            (m = e.onContinue) === null || m === void 0 || m.call(e);
        }),
      d = () => {
        if (this.isResolved) return;
        let m;
        try {
          m = e.fn();
        } catch (f) {
          m = Promise.reject(f);
        }
        (s = (f) => {
          var b;
          if (
            !this.isResolved &&
            (l(new On(f)),
            (b = this.abort) === null || b === void 0 || b.call(this),
            st(m))
          )
            try {
              m.cancel();
            } catch {}
        }),
          (this.isTransportCancelable = st(m)),
          Promise.resolve(m)
            .then(o)
            .catch((f) => {
              var b, c, g;
              if (this.isResolved) return;
              const v = (b = e.retry) !== null && b !== void 0 ? b : 3,
                y = (c = e.retryDelay) !== null && c !== void 0 ? c : ps,
                k = typeof y == "function" ? y(this.failureCount, f) : y,
                R =
                  v === !0 ||
                  (typeof v == "number" && this.failureCount < v) ||
                  (typeof v == "function" && v(this.failureCount, f));
              if (t || !R) {
                l(f);
                return;
              }
              this.failureCount++,
                (g = e.onFail) === null ||
                  g === void 0 ||
                  g.call(e, this.failureCount, f),
                fs(k)
                  .then(() => {
                    if (!De.isFocused() || !Ge.isOnline()) return u();
                  })
                  .then(() => {
                    t ? l(f) : d();
                  });
            });
      };
    d();
  }
}
class ms {
  constructor() {
    (this.queue = []),
      (this.transactions = 0),
      (this.notifyFn = (e) => {
        e();
      }),
      (this.batchNotifyFn = (e) => {
        e();
      });
  }
  batch(e) {
    let t;
    this.transactions++;
    try {
      t = e();
    } finally {
      this.transactions--, this.transactions || this.flush();
    }
    return t;
  }
  schedule(e) {
    this.transactions
      ? this.queue.push(e)
      : Et(() => {
          this.notifyFn(e);
        });
  }
  batchCalls(e) {
    return (...t) => {
      this.schedule(() => {
        e(...t);
      });
    };
  }
  flush() {
    const e = this.queue;
    (this.queue = []),
      e.length &&
        Et(() => {
          this.batchNotifyFn(() => {
            e.forEach((t) => {
              this.notifyFn(t);
            });
          });
        });
  }
  setNotifyFunction(e) {
    this.notifyFn = e;
  }
  setBatchNotifyFunction(e) {
    this.batchNotifyFn = e;
  }
}
const V = new ms();
let gs = console;
function it() {
  return gs;
}
class bs {
  constructor(e) {
    (this.abortSignalConsumed = !1),
      (this.hadObservers = !1),
      (this.defaultOptions = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.cache = e.cache),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.initialState = e.state || this.getDefaultState(this.options)),
      (this.state = this.initialState),
      (this.meta = e.meta),
      this.scheduleGc();
  }
  setOptions(e) {
    var t;
    (this.options = Object.assign(Object.assign({}, this.defaultOptions), e)),
      (this.meta = e == null ? void 0 : e.meta),
      (this.cacheTime = Math.max(
        this.cacheTime || 0,
        (t = this.options.cacheTime) !== null && t !== void 0 ? t : 5 * 60 * 1e3
      ));
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  scheduleGc() {
    this.clearGcTimeout(),
      mt(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  clearGcTimeout() {
    clearTimeout(this.gcTimeout), (this.gcTimeout = void 0);
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.isFetching
        ? this.hadObservers && this.scheduleGc()
        : this.cache.remove(this));
  }
  setData(e, t) {
    var s, i;
    const r = this.state.data;
    let a = os(e, r);
    return (
      !((i = (s = this.options).isDataEqual) === null || i === void 0) &&
      i.call(s, r, a)
        ? (a = r)
        : this.options.structuralSharing !== !1 && (a = nt(r, a)),
      this.dispatch({
        data: a,
        type: "success",
        dataUpdatedAt: t == null ? void 0 : t.updatedAt,
      }),
      a
    );
  }
  setState(e, t) {
    this.dispatch({ type: "setState", state: e, setStateOptions: t });
  }
  cancel(e) {
    var t;
    const s = this.promise;
    return (
      (t = this.retryer) === null || t === void 0 || t.cancel(e),
      s ? s.then(ie).catch(ie) : Promise.resolve()
    );
  }
  destroy() {
    this.clearGcTimeout(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((e) => e.options.enabled !== !1);
  }
  isFetching() {
    return this.state.isFetching;
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
      !_n(this.state.dataUpdatedAt, e)
    );
  }
  onFocus() {
    var e;
    const t = this.observers.find((s) => s.shouldFetchOnWindowFocus());
    t && t.refetch(),
      (e = this.retryer) === null || e === void 0 || e.continue();
  }
  onOnline() {
    var e;
    const t = this.observers.find((s) => s.shouldFetchOnReconnect());
    t && t.refetch(),
      (e = this.retryer) === null || e === void 0 || e.continue();
  }
  addObserver(e) {
    this.observers.indexOf(e) === -1 &&
      (this.observers.push(e),
      (this.hadObservers = !0),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.indexOf(e) !== -1 &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.retryer &&
          (this.retryer.isTransportCancelable || this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
      this.cache.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(e, t) {
    var s, i, r, a, o, l;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (t == null ? void 0 : t.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (this.promise)
        return (
          (s = this.retryer) === null || s === void 0 || s.continueRetry(),
          this.promise
        );
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const c = this.observers.find((g) => g.options.queryFn);
      c && this.setOptions(c.options);
    }
    const u = et(this.queryKey),
      d = wn(),
      m = { queryKey: u, pageParam: void 0, meta: this.meta };
    Object.defineProperty(m, "signal", {
      enumerable: !0,
      get: () => {
        if (d) return (this.abortSignalConsumed = !0), d.signal;
      },
    });
    const f = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(m))
          : Promise.reject("Missing queryFn"),
      b = {
        fetchOptions: t,
        options: this.options,
        queryKey: u,
        state: this.state,
        fetchFn: f,
        meta: this.meta,
      };
    return (
      !((i = this.options.behavior) === null || i === void 0) &&
        i.onFetch &&
        ((r = this.options.behavior) === null || r === void 0 || r.onFetch(b)),
      (this.revertState = this.state),
      (!this.state.isFetching ||
        this.state.fetchMeta !==
          ((a = b.fetchOptions) === null || a === void 0 ? void 0 : a.meta)) &&
        this.dispatch({
          type: "fetch",
          meta: (o = b.fetchOptions) === null || o === void 0 ? void 0 : o.meta,
        }),
      (this.retryer = new Cn({
        fn: b.fetchFn,
        abort:
          (l = d == null ? void 0 : d.abort) === null || l === void 0
            ? void 0
            : l.bind(d),
        onSuccess: (c) => {
          var g, v;
          this.setData(c),
            (v = (g = this.cache.config).onSuccess) === null ||
              v === void 0 ||
              v.call(g, c, this),
            this.cacheTime === 0 && this.optionalRemove();
        },
        onError: (c) => {
          var g, v;
          (Je(c) && c.silent) || this.dispatch({ type: "error", error: c }),
            Je(c) ||
              ((v = (g = this.cache.config).onError) === null ||
                v === void 0 ||
                v.call(g, c, this),
              it().error(c)),
            this.cacheTime === 0 && this.optionalRemove();
        },
        onFail: () => {
          this.dispatch({ type: "failed" });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: b.options.retry,
        retryDelay: b.options.retryDelay,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(e) {
    (this.state = this.reducer(this.state, e)),
      V.batch(() => {
        this.observers.forEach((t) => {
          t.onQueryUpdate(e);
        }),
          this.cache.notify({ query: this, type: "queryUpdated", action: e });
      });
  }
  getDefaultState(e) {
    const t =
        typeof e.initialData == "function" ? e.initialData() : e.initialData,
      i =
        typeof e.initialData != "undefined"
          ? typeof e.initialDataUpdatedAt == "function"
            ? e.initialDataUpdatedAt()
            : e.initialDataUpdatedAt
          : 0,
      r = typeof t != "undefined";
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: r ? (i != null ? i : Date.now()) : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: !1,
      isInvalidated: !1,
      isPaused: !1,
      status: r ? "success" : "idle",
    };
  }
  reducer(e, t) {
    var s, i;
    switch (t.type) {
      case "failed":
        return Object.assign(Object.assign({}, e), {
          fetchFailureCount: e.fetchFailureCount + 1,
        });
      case "pause":
        return Object.assign(Object.assign({}, e), { isPaused: !0 });
      case "continue":
        return Object.assign(Object.assign({}, e), { isPaused: !1 });
      case "fetch":
        return Object.assign(
          Object.assign(Object.assign({}, e), {
            fetchFailureCount: 0,
            fetchMeta: (s = t.meta) !== null && s !== void 0 ? s : null,
            isFetching: !0,
            isPaused: !1,
          }),
          !e.dataUpdatedAt && { error: null, status: "loading" }
        );
      case "success":
        return Object.assign(Object.assign({}, e), {
          data: t.data,
          dataUpdateCount: e.dataUpdateCount + 1,
          dataUpdatedAt:
            (i = t.dataUpdatedAt) !== null && i !== void 0 ? i : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: "success",
        });
      case "error":
        const r = t.error;
        return Je(r) && r.revert && this.revertState
          ? Object.assign({}, this.revertState)
          : Object.assign(Object.assign({}, e), {
              error: r,
              errorUpdateCount: e.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: e.fetchFailureCount + 1,
              isFetching: !1,
              isPaused: !1,
              status: "error",
            });
      case "invalidate":
        return Object.assign(Object.assign({}, e), { isInvalidated: !0 });
      case "setState":
        return Object.assign(Object.assign({}, e), t.state);
      default:
        return e;
    }
  }
}
class vs extends $e {
  constructor(e, t) {
    super(),
      (this.client = e),
      (this.options = t),
      (this.trackedProps = []),
      (this.previousSelectError = null),
      this.bindMethods(),
      this.setOptions(t);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.length === 1 &&
      (this.currentQuery.addObserver(this),
      St(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.listeners.length || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ws(this.currentQuery, this.options);
  }
  shouldFetchOnWindowFocus() {
    return Os(this.currentQuery, this.options);
  }
  destroy() {
    (this.listeners = []),
      this.clearTimers(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(e, t) {
    const s = this.options,
      i = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryObserverOptions(e)),
      typeof this.options.enabled != "undefined" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey),
      this.updateQuery();
    const r = this.hasListeners();
    r && At(this.currentQuery, i, this.options, s) && this.executeFetch(),
      this.updateResult(t),
      r &&
        (this.currentQuery !== i ||
          this.options.enabled !== s.enabled ||
          this.options.staleTime !== s.staleTime) &&
        this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    r &&
      (this.currentQuery !== i ||
        this.options.enabled !== s.enabled ||
        a !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(a);
  }
  updateOptions(e, t) {
    const s = Object.assign(Object.assign({}, this.options), e);
    e.queryKey &&
      !e.queryHash &&
      e.queryKey !== this.options.queryKey &&
      (s.queryHash = ot(e.queryKey, s)),
      this.setOptions(s, t);
  }
  getOptimisticResult(e) {
    const t = this.client.defaultQueryObserverOptions(e),
      s = this.client.getQueryCache().build(this.client, t);
    return this.createResult(s, t);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(e, t) {
    const s = {},
      i = (r) => {
        this.trackedProps.includes(r) || this.trackedProps.push(r);
      };
    return (
      Object.keys(e).forEach((r) => {
        Object.defineProperty(s, r, {
          configurable: !1,
          enumerable: !0,
          get: () => (i(r), e[r]),
        });
      }),
      (t.useErrorBoundary || t.suspense) && i("error"),
      s
    );
  }
  getNextResult(e) {
    return new Promise((t, s) => {
      const i = this.subscribe((r) => {
        r.isFetching ||
          (i(),
          r.isError && (e == null ? void 0 : e.throwOnError)
            ? s(r.error)
            : t(r));
      });
    });
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch(e) {
    return this.fetch(
      Object.assign(Object.assign({}, e), {
        meta: { refetchPage: e == null ? void 0 : e.refetchPage },
      })
    );
  }
  fetchOptimistic(e) {
    const t = this.client.defaultQueryObserverOptions(e),
      s = this.client.getQueryCache().build(this.client, t);
    return s.fetch().then(() => this.createResult(s, t));
  }
  fetch(e) {
    return this.executeFetch(e).then(
      () => (this.updateResult(), this.currentResult)
    );
  }
  executeFetch(e) {
    this.updateQuery();
    let t = this.currentQuery.fetch(this.options, e);
    return (e != null && e.throwOnError) || (t = t.catch(ie)), t;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      Ye || this.currentResult.isStale || !mt(this.options.staleTime))
    )
      return;
    const t = _n(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, t);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (e = this.options.refetchInterval) !== null && e !== void 0
      ? e
      : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = e),
      !(
        Ye ||
        this.options.enabled === !1 ||
        !mt(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || De.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearTimers() {
    this.clearStaleTimeout(), this.clearRefetchInterval();
  }
  clearStaleTimeout() {
    clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0);
  }
  createResult(e, t) {
    var s;
    const i = this.currentQuery,
      r = this.options,
      a = this.currentResult,
      o = this.currentResultState,
      l = this.currentResultOptions,
      u = e !== i,
      d = u ? e.state : this.currentQueryInitialState,
      m = u ? this.currentResult : this.previousQueryResult,
      { state: f } = e;
    let {
        dataUpdatedAt: b,
        error: c,
        errorUpdatedAt: g,
        isFetching: v,
        status: y,
      } = f,
      k = !1,
      R = !1,
      S;
    if (t.optimisticResults) {
      const O = this.hasListeners(),
        j = !O && St(e, t),
        q = O && At(e, i, t, r);
      (j || q) && ((v = !0), b || (y = "loading"));
    }
    if (
      t.keepPreviousData &&
      !f.dataUpdateCount &&
      (m == null ? void 0 : m.isSuccess) &&
      y !== "error"
    )
      (S = m.data), (b = m.dataUpdatedAt), (y = m.status), (k = !0);
    else if (t.select && typeof f.data != "undefined")
      if (
        a &&
        f.data === (o == null ? void 0 : o.data) &&
        t.select ===
          ((s = this.previousSelect) === null || s === void 0
            ? void 0
            : s.fn) &&
        !this.previousSelectError
      )
        S = this.previousSelect.result;
      else
        try {
          (S = t.select(f.data)),
            t.structuralSharing !== !1 &&
              (S = nt(a == null ? void 0 : a.data, S)),
            (this.previousSelect = { fn: t.select, result: S }),
            (this.previousSelectError = null);
        } catch (O) {
          it().error(O),
            (c = O),
            (this.previousSelectError = O),
            (g = Date.now()),
            (y = "error");
        }
    else S = f.data;
    if (
      typeof t.placeholderData != "undefined" &&
      typeof S == "undefined" &&
      (y === "loading" || y === "idle")
    ) {
      let O;
      if (
        (a == null ? void 0 : a.isPlaceholderData) &&
        t.placeholderData === (l == null ? void 0 : l.placeholderData)
      )
        O = a.data;
      else if (
        ((O =
          typeof t.placeholderData == "function"
            ? t.placeholderData()
            : t.placeholderData),
        t.select && typeof O != "undefined")
      )
        try {
          (O = t.select(O)),
            t.structuralSharing !== !1 &&
              (O = nt(a == null ? void 0 : a.data, O)),
            (this.previousSelectError = null);
        } catch (j) {
          it().error(j),
            (c = j),
            (this.previousSelectError = j),
            (g = Date.now()),
            (y = "error");
        }
      typeof O != "undefined" && ((y = "success"), (S = O), (R = !0));
    }
    return {
      status: y,
      isLoading: y === "loading",
      isSuccess: y === "success",
      isError: y === "error",
      isIdle: y === "idle",
      data: S,
      dataUpdatedAt: b,
      error: c,
      errorUpdatedAt: g,
      failureCount: f.fetchFailureCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount:
        f.dataUpdateCount > d.dataUpdateCount ||
        f.errorUpdateCount > d.errorUpdateCount,
      isFetching: v,
      isRefetching: v && y !== "loading",
      isLoadingError: y === "error" && f.dataUpdatedAt === 0,
      isPlaceholderData: R,
      isPreviousData: k,
      isRefetchError: y === "error" && f.dataUpdatedAt !== 0,
      isStale: He(e, t),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  shouldNotifyListeners(e, t) {
    if (!t) return !0;
    const { notifyOnChangeProps: s, notifyOnChangePropsExclusions: i } =
      this.options;
    if ((!s && !i) || (s === "tracked" && !this.trackedProps.length)) return !0;
    const r = s === "tracked" ? this.trackedProps : s;
    return Object.keys(e).some((a) => {
      const o = a,
        l = e[o] !== t[o],
        u = r == null ? void 0 : r.some((m) => m === a),
        d = i == null ? void 0 : i.some((m) => m === a);
      return l && !d && (!r || u);
    });
  }
  updateResult(e) {
    const t = this.currentResult;
    if (
      ((this.currentResult = this.createResult(
        this.currentQuery,
        this.options
      )),
      (this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      cs(this.currentResult, t))
    )
      return;
    const s = { cache: !0 };
    (e == null ? void 0 : e.listeners) !== !1 &&
      this.shouldNotifyListeners(this.currentResult, t) &&
      (s.listeners = !0),
      this.notify(Object.assign(Object.assign({}, s), e));
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
      ? (t.onSuccess = !0)
      : e.type === "error" && !Je(e.error) && (t.onError = !0),
      this.updateResult(t),
      this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    V.batch(() => {
      var t, s, i, r, a, o, l, u;
      e.onSuccess
        ? ((s = (t = this.options).onSuccess) === null ||
            s === void 0 ||
            s.call(t, this.currentResult.data),
          (r = (i = this.options).onSettled) === null ||
            r === void 0 ||
            r.call(i, this.currentResult.data, null))
        : e.onError &&
          ((o = (a = this.options).onError) === null ||
            o === void 0 ||
            o.call(a, this.currentResult.error),
          (u = (l = this.options).onSettled) === null ||
            u === void 0 ||
            u.call(l, void 0, this.currentResult.error)),
        e.listeners &&
          this.listeners.forEach((d) => {
            d(this.currentResult);
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
function _s(n, e) {
  return (
    e.enabled !== !1 &&
    !n.state.dataUpdatedAt &&
    !(n.state.status === "error" && e.retryOnMount === !1)
  );
}
function ys(n, e) {
  return (
    e.enabled !== !1 &&
    n.state.dataUpdatedAt > 0 &&
    (e.refetchOnMount === "always" || (e.refetchOnMount !== !1 && He(n, e)))
  );
}
function St(n, e) {
  return _s(n, e) || ys(n, e);
}
function ws(n, e) {
  return (
    e.enabled !== !1 &&
    (e.refetchOnReconnect === "always" ||
      (e.refetchOnReconnect !== !1 && He(n, e)))
  );
}
function Os(n, e) {
  return (
    e.enabled !== !1 &&
    (e.refetchOnWindowFocus === "always" ||
      (e.refetchOnWindowFocus !== !1 && He(n, e)))
  );
}
function At(n, e, t, s) {
  return (
    t.enabled !== !1 &&
    (n !== e || s.enabled === !1) &&
    (!t.suspense || n.state.status !== "error") &&
    He(n, t)
  );
}
function He(n, e) {
  return n.isStaleByTime(e.staleTime);
}
class kn extends $e {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(e, t, s) {
    var i;
    const r = t.queryKey,
      a = (i = t.queryHash) !== null && i !== void 0 ? i : ot(r, t);
    let o = this.get(a);
    return (
      o ||
        ((o = new bs({
          cache: this,
          queryKey: r,
          queryHash: a,
          options: e.defaultQueryOptions(t),
          state: s,
          defaultOptions: e.getQueryDefaults(r),
          meta: t.meta,
        })),
        this.add(o)),
      o
    );
  }
  add(e) {
    this.queriesMap[e.queryHash] ||
      ((this.queriesMap[e.queryHash] = e),
      this.queries.push(e),
      this.notify({ type: "queryAdded", query: e }));
  }
  remove(e) {
    const t = this.queriesMap[e.queryHash];
    t &&
      (e.destroy(),
      (this.queries = this.queries.filter((s) => s !== e)),
      t === e && delete this.queriesMap[e.queryHash],
      this.notify({ type: "queryRemoved", query: e }));
  }
  clear() {
    V.batch(() => {
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
    const [s] = _e(e, t);
    return (
      typeof s.exact == "undefined" && (s.exact = !0),
      this.queries.find((i) => Mt(s, i))
    );
  }
  findAll(e, t) {
    const [s] = _e(e, t);
    return Object.keys(s).length > 0
      ? this.queries.filter((i) => Mt(s, i))
      : this.queries;
  }
  notify(e) {
    V.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  onFocus() {
    V.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    V.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class Cs {
  constructor(e) {
    (this.options = Object.assign(
      Object.assign({}, e.defaultOptions),
      e.options
    )),
      (this.mutationId = e.mutationId),
      (this.mutationCache = e.mutationCache),
      (this.observers = []),
      (this.state = e.state || Ln()),
      (this.meta = e.meta);
  }
  setState(e) {
    this.dispatch({ type: "setState", state: e });
  }
  addObserver(e) {
    this.observers.indexOf(e) === -1 && this.observers.push(e);
  }
  removeObserver(e) {
    this.observers = this.observers.filter((t) => t !== e);
  }
  cancel() {
    return this.retryer
      ? (this.retryer.cancel(), this.retryer.promise.then(ie).catch(ie))
      : Promise.resolve();
  }
  continue() {
    return this.retryer
      ? (this.retryer.continue(), this.retryer.promise)
      : this.execute();
  }
  execute() {
    let e;
    const t = this.state.status === "loading";
    let s = Promise.resolve();
    return (
      t ||
        (this.dispatch({ type: "loading", variables: this.options.variables }),
        (s = s
          .then(() => {
            var i, r;
            (r = (i = this.mutationCache.config).onMutate) === null ||
              r === void 0 ||
              r.call(i, this.state.variables, this);
          })
          .then(() => {
            var i, r;
            return (r = (i = this.options).onMutate) === null || r === void 0
              ? void 0
              : r.call(i, this.state.variables);
          })
          .then((i) => {
            i !== this.state.context &&
              this.dispatch({
                type: "loading",
                context: i,
                variables: this.state.variables,
              });
          }))),
      s
        .then(() => this.executeMutation())
        .then((i) => {
          var r, a;
          (e = i),
            (a = (r = this.mutationCache.config).onSuccess) === null ||
              a === void 0 ||
              a.call(r, e, this.state.variables, this.state.context, this);
        })
        .then(() => {
          var i, r;
          return (r = (i = this.options).onSuccess) === null || r === void 0
            ? void 0
            : r.call(i, e, this.state.variables, this.state.context);
        })
        .then(() => {
          var i, r;
          return (r = (i = this.options).onSettled) === null || r === void 0
            ? void 0
            : r.call(i, e, null, this.state.variables, this.state.context);
        })
        .then(() => (this.dispatch({ type: "success", data: e }), e))
        .catch((i) => {
          var r, a;
          return (
            (a = (r = this.mutationCache.config).onError) === null ||
              a === void 0 ||
              a.call(r, i, this.state.variables, this.state.context, this),
            it().error(i),
            Promise.resolve()
              .then(() => {
                var o, l;
                return (l = (o = this.options).onError) === null || l === void 0
                  ? void 0
                  : l.call(o, i, this.state.variables, this.state.context);
              })
              .then(() => {
                var o, l;
                return (l = (o = this.options).onSettled) === null ||
                  l === void 0
                  ? void 0
                  : l.call(
                      o,
                      void 0,
                      i,
                      this.state.variables,
                      this.state.context
                    );
              })
              .then(() => {
                throw (this.dispatch({ type: "error", error: i }), i);
              })
          );
        })
    );
  }
  executeMutation() {
    var e;
    return (
      (this.retryer = new Cn({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(this.state.variables)
            : Promise.reject("No mutationFn found"),
        onFail: () => {
          this.dispatch({ type: "failed" });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: (e = this.options.retry) !== null && e !== void 0 ? e : 0,
        retryDelay: this.options.retryDelay,
      })),
      this.retryer.promise
    );
  }
  dispatch(e) {
    (this.state = ks(this.state, e)),
      V.batch(() => {
        this.observers.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.mutationCache.notify(this);
      });
  }
}
function Ln() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
function ks(n, e) {
  switch (e.type) {
    case "failed":
      return Object.assign(Object.assign({}, n), {
        failureCount: n.failureCount + 1,
      });
    case "pause":
      return Object.assign(Object.assign({}, n), { isPaused: !0 });
    case "continue":
      return Object.assign(Object.assign({}, n), { isPaused: !1 });
    case "loading":
      return Object.assign(Object.assign({}, n), {
        context: e.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: e.variables,
      });
    case "success":
      return Object.assign(Object.assign({}, n), {
        data: e.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return Object.assign(Object.assign({}, n), {
        data: void 0,
        error: e.error,
        failureCount: n.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return Object.assign(Object.assign({}, n), e.state);
    default:
      return n;
  }
}
class Rn extends $e {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(e, t, s) {
    const i = new Cs({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(t),
      state: s,
      defaultOptions: t.mutationKey
        ? e.getMutationDefaults(t.mutationKey)
        : void 0,
      meta: t.meta,
    });
    return this.add(i), i;
  }
  add(e) {
    this.mutations.push(e), this.notify(e);
  }
  remove(e) {
    (this.mutations = this.mutations.filter((t) => t !== e)),
      e.cancel(),
      this.notify(e);
  }
  clear() {
    V.batch(() => {
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
      typeof e.exact == "undefined" && (e.exact = !0),
      this.mutations.find((t) => $t(e, t))
    );
  }
  findAll(e) {
    return this.mutations.filter((t) => $t(e, t));
  }
  notify(e) {
    V.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  onFocus() {
    this.resumePausedMutations();
  }
  onOnline() {
    this.resumePausedMutations();
  }
  resumePausedMutations() {
    const e = this.mutations.filter((t) => t.state.isPaused);
    return V.batch(() =>
      e.reduce(
        (t, s) => t.then(() => s.continue().catch(ie)),
        Promise.resolve()
      )
    );
  }
}
function Ls() {
  return {
    onFetch: (n) => {
      n.fetchFn = () => {
        var e, t, s, i, r, a;
        const o =
            (t =
              (e = n.fetchOptions) === null || e === void 0
                ? void 0
                : e.meta) === null || t === void 0
              ? void 0
              : t.refetchPage,
          l =
            (i =
              (s = n.fetchOptions) === null || s === void 0
                ? void 0
                : s.meta) === null || i === void 0
              ? void 0
              : i.fetchMore,
          u = l == null ? void 0 : l.pageParam,
          d = (l == null ? void 0 : l.direction) === "forward",
          m = (l == null ? void 0 : l.direction) === "backward",
          f =
            ((r = n.state.data) === null || r === void 0 ? void 0 : r.pages) ||
            [],
          b =
            ((a = n.state.data) === null || a === void 0
              ? void 0
              : a.pageParams) || [],
          c = wn(),
          g = c == null ? void 0 : c.signal;
        let v = b,
          y = !1;
        const k =
            n.options.queryFn || (() => Promise.reject("Missing queryFn")),
          R = (q, F, A, ee) => (
            (v = ee ? [F, ...v] : [...v, F]), ee ? [A, ...q] : [...q, A]
          ),
          S = (q, F, A, ee) => {
            if (y) return Promise.reject("Cancelled");
            if (typeof A == "undefined" && !F && q.length)
              return Promise.resolve(q);
            const le = {
                queryKey: n.queryKey,
                signal: g,
                pageParam: A,
                meta: n.meta,
              },
              he = k(le),
              be = Promise.resolve(he).then((E) => R(q, A, E, ee));
            if (st(he)) {
              const E = be;
              E.cancel = he.cancel;
            }
            return be;
          };
        let L;
        if (!f.length) L = S([]);
        else if (d) {
          const q = typeof u != "undefined",
            F = q ? u : Tt(n.options, f);
          L = S(f, q, F);
        } else if (m) {
          const q = typeof u != "undefined",
            F = q ? u : Rs(n.options, f);
          L = S(f, q, F, !0);
        } else {
          v = [];
          const q = typeof n.options.getNextPageParam == "undefined";
          L = (o && f[0] ? o(f[0], 0, f) : !0)
            ? S([], q, b[0])
            : Promise.resolve(R([], b[0], f[0]));
          for (let A = 1; A < f.length; A++)
            L = L.then((ee) => {
              if (o && f[A] ? o(f[A], A, f) : !0) {
                const he = q ? b[A] : Tt(n.options, ee);
                return S(ee, q, he);
              }
              return Promise.resolve(R(ee, b[A], f[A]));
            });
        }
        const O = L.then((q) => ({ pages: q, pageParams: v })),
          j = O;
        return (
          (j.cancel = () => {
            (y = !0), c == null || c.abort(), st(L) && L.cancel();
          }),
          O
        );
      };
    },
  };
}
function Tt(n, e) {
  var t;
  return (t = n.getNextPageParam) === null || t === void 0
    ? void 0
    : t.call(n, e[e.length - 1], e);
}
function Rs(n, e) {
  var t;
  return (t = n.getPreviousPageParam) === null || t === void 0
    ? void 0
    : t.call(n, e[0], e);
}
class Pn {
  constructor(e = {}) {
    (this.queryCache = e.queryCache || new kn()),
      (this.mutationCache = e.mutationCache || new Rn()),
      (this.defaultOptions = e.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []);
  }
  mount() {
    (this.unsubscribeFocus = De.subscribe(() => {
      De.isFocused() &&
        Ge.isOnline() &&
        (this.mutationCache.onFocus(), this.queryCache.onFocus());
    })),
      (this.unsubscribeOnline = Ge.subscribe(() => {
        De.isFocused() &&
          Ge.isOnline() &&
          (this.mutationCache.onOnline(), this.queryCache.onOnline());
      }));
  }
  unmount() {
    var e, t;
    (e = this.unsubscribeFocus) === null || e === void 0 || e.call(this),
      (t = this.unsubscribeOnline) === null || t === void 0 || t.call(this);
  }
  isFetching(e, t) {
    const [s] = _e(e, t);
    return (s.fetching = !0), this.queryCache.findAll(s).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll(
      Object.assign(Object.assign({}, e), { fetching: !0 })
    ).length;
  }
  getQueryData(e, t) {
    var s;
    return (s = this.queryCache.find(e, t)) === null || s === void 0
      ? void 0
      : s.state.data;
  }
  getQueriesData(e) {
    return this.getQueryCache()
      .findAll(e)
      .map(({ queryKey: t, state: s }) => {
        const i = s.data;
        return [t, i];
      });
  }
  setQueryData(e, t, s) {
    const i = Te(e),
      r = this.defaultQueryOptions(i);
    return this.queryCache.build(this, r).setData(t, s);
  }
  setQueriesData(e, t, s) {
    return V.batch(() =>
      this.getQueryCache()
        .findAll(e)
        .map(({ queryKey: i }) => [i, this.setQueryData(i, t, s)])
    );
  }
  getQueryState(e, t) {
    var s;
    return (s = this.queryCache.find(e, t)) === null || s === void 0
      ? void 0
      : s.state;
  }
  removeQueries(e, t) {
    const [s] = _e(e, t),
      i = this.queryCache;
    V.batch(() => {
      i.findAll(s).forEach((r) => {
        i.remove(r);
      });
    });
  }
  resetQueries(e, t, s) {
    const [i, r] = _e(e, t, s),
      a = this.queryCache,
      o = Object.assign(Object.assign({}, i), { active: !0 });
    return V.batch(
      () => (
        a.findAll(i).forEach((l) => {
          l.reset();
        }),
        this.refetchQueries(o, r)
      )
    );
  }
  cancelQueries(e, t, s) {
    const [i, r = {}] = _e(e, t, s);
    typeof r.revert == "undefined" && (r.revert = !0);
    const a = V.batch(() => this.queryCache.findAll(i).map((o) => o.cancel(r)));
    return Promise.all(a).then(ie).catch(ie);
  }
  invalidateQueries(e, t, s) {
    var i, r, a;
    const [o, l] = _e(e, t, s),
      u = Object.assign(Object.assign({}, o), {
        active:
          (r =
            (i = o.refetchActive) !== null && i !== void 0 ? i : o.active) !==
            null && r !== void 0
            ? r
            : !0,
        inactive: (a = o.refetchInactive) !== null && a !== void 0 ? a : !1,
      });
    return V.batch(
      () => (
        this.queryCache.findAll(o).forEach((d) => {
          d.invalidate();
        }),
        this.refetchQueries(u, l)
      )
    );
  }
  refetchQueries(e, t, s) {
    const [i, r] = _e(e, t, s),
      a = V.batch(() =>
        this.queryCache
          .findAll(i)
          .map((l) =>
            l.fetch(
              void 0,
              Object.assign(Object.assign({}, r), {
                meta: { refetchPage: i == null ? void 0 : i.refetchPage },
              })
            )
          )
      );
    let o = Promise.all(a).then(ie);
    return (r != null && r.throwOnError) || (o = o.catch(ie)), o;
  }
  fetchQuery(e, t, s) {
    const i = Te(e, t, s),
      r = this.defaultQueryOptions(i);
    typeof r.retry == "undefined" && (r.retry = !1);
    const a = this.queryCache.build(this, r);
    return a.isStaleByTime(r.staleTime)
      ? a.fetch(r)
      : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, t, s) {
    return this.fetchQuery(e, t, s).then(ie).catch(ie);
  }
  fetchInfiniteQuery(e, t, s) {
    const i = Te(e, t, s);
    return (i.behavior = Ls()), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(e, t, s) {
    return this.fetchInfiniteQuery(e, t, s).then(ie).catch(ie);
  }
  cancelMutations() {
    const e = V.batch(() => this.mutationCache.getAll().map((t) => t.cancel()));
    return Promise.all(e).then(ie).catch(ie);
  }
  resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  }
  executeMutation(e) {
    return this.mutationCache.build(this, e).execute();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, t) {
    const s = this.queryDefaults.find((i) => ke(e) === ke(i.queryKey));
    s
      ? (s.defaultOptions = t)
      : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    var t;
    return e
      ? (t = this.queryDefaults.find((s) => tt(e, s.queryKey))) === null ||
        t === void 0
        ? void 0
        : t.defaultOptions
      : void 0;
  }
  setMutationDefaults(e, t) {
    const s = this.mutationDefaults.find((i) => ke(e) === ke(i.mutationKey));
    s
      ? (s.defaultOptions = t)
      : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    var t;
    return e
      ? (t = this.mutationDefaults.find((s) => tt(e, s.mutationKey))) ===
          null || t === void 0
        ? void 0
        : t.defaultOptions
      : void 0;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted) return e;
    const t = Object.assign(
      Object.assign(
        Object.assign(
          Object.assign({}, this.defaultOptions.queries),
          this.getQueryDefaults(e == null ? void 0 : e.queryKey)
        ),
        e
      ),
      { _defaulted: !0 }
    );
    return !t.queryHash && t.queryKey && (t.queryHash = ot(t.queryKey, t)), t;
  }
  defaultQueryObserverOptions(e) {
    return this.defaultQueryOptions(e);
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted
      ? e
      : Object.assign(
          Object.assign(
            Object.assign(
              Object.assign({}, this.defaultOptions.mutations),
              this.getMutationDefaults(e == null ? void 0 : e.mutationKey)
            ),
            e
          ),
          { _defaulted: !0 }
        );
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class Ps extends $e {
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
    this.options = this.client.defaultMutationOptions(e);
  }
  onUnsubscribe() {
    var e;
    this.listeners.length ||
      (e = this.currentMutation) === null ||
      e === void 0 ||
      e.removeObserver(this);
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
        .build(
          this.client,
          Object.assign(Object.assign({}, this.options), {
            variables: typeof e != "undefined" ? e : this.options.variables,
          })
        )),
      this.currentMutation.addObserver(this),
      this.currentMutation.execute()
    );
  }
  updateResult() {
    const e = this.currentMutation ? this.currentMutation.state : Ln(),
      t = Object.assign(Object.assign({}, e), {
        isLoading: e.status === "loading",
        isSuccess: e.status === "success",
        isError: e.status === "error",
        isIdle: e.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    this.currentResult = t;
  }
  notify(e) {
    V.batch(() => {
      var t, s, i, r, a, o, l, u;
      this.mutateOptions &&
        (e.onSuccess
          ? ((s = (t = this.mutateOptions).onSuccess) === null ||
              s === void 0 ||
              s.call(
                t,
                this.currentResult.data,
                this.currentResult.variables,
                this.currentResult.context
              ),
            (r = (i = this.mutateOptions).onSettled) === null ||
              r === void 0 ||
              r.call(
                i,
                this.currentResult.data,
                null,
                this.currentResult.variables,
                this.currentResult.context
              ))
          : e.onError &&
            ((o = (a = this.mutateOptions).onError) === null ||
              o === void 0 ||
              o.call(
                a,
                this.currentResult.error,
                this.currentResult.variables,
                this.currentResult.context
              ),
            (u = (l = this.mutateOptions).onSettled) === null ||
              u === void 0 ||
              u.call(
                l,
                void 0,
                this.currentResult.error,
                this.currentResult.variables,
                this.currentResult.context
              ))),
        e.listeners &&
          this.listeners.forEach((d) => {
            d(this.currentResult);
          });
    });
  }
}
function js(n) {
  let e;
  const t = n[5].default,
    s = Le(t, n, n[4], null);
  return {
    c() {
      s && s.c();
    },
    m(i, r) {
      s && s.m(i, r), (e = !0);
    },
    p(i, [r]) {
      s &&
        s.p &&
        (!e || r & 16) &&
        Pe(s, t, i, i[4], e ? Re(t, i[4], r, null) : je(i[4]), null);
    },
    i(i) {
      e || (_(s, i), (e = !0));
    },
    o(i) {
      C(s, i), (e = !1);
    },
    d(i) {
      s && s.d(i);
    },
  };
}
function qs(n, e, t) {
  let { $$slots: s = {}, $$scope: i } = e,
    { queryCache: r = new kn() } = e,
    { mutationCache: a = new Rn() } = e,
    { defaultOptions: o = {} } = e,
    {
      client: l = new Pn({
        queryCache: r,
        mutationCache: a,
        defaultOptions: o,
      }),
    } = e;
  return (
    yt(() => {
      l.mount();
    }),
    es("queryClient", l),
    wt(() => {
      l.unmount();
    }),
    (n.$$set = (u) => {
      "queryCache" in u && t(0, (r = u.queryCache)),
        "mutationCache" in u && t(1, (a = u.mutationCache)),
        "defaultOptions" in u && t(2, (o = u.defaultOptions)),
        "client" in u && t(3, (l = u.client)),
        "$$scope" in u && t(4, (i = u.$$scope));
    }),
    [r, a, o, l, i, s]
  );
}
class Ms extends G {
  constructor(e) {
    super(),
      Z(this, e, qs, js, x, {
        queryCache: 0,
        mutationCache: 1,
        defaultOptions: 2,
        client: 3,
      });
  }
}
function lt() {
  const n = ts("queryClient");
  if (!n)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return n;
}
const Me = [];
function jn(n, e) {
  return { subscribe: $s(n, e).subscribe };
}
function $s(n, e = B) {
  let t;
  const s = new Set();
  function i(o) {
    if (x(n, o) && ((n = o), t)) {
      const l = !Me.length;
      for (const u of s) u[1](), Me.push(u, n);
      if (l) {
        for (let u = 0; u < Me.length; u += 2) Me[u][0](Me[u + 1]);
        Me.length = 0;
      }
    }
  }
  function r(o) {
    i(o(n));
  }
  function a(o, l = B) {
    const u = [o, l];
    return (
      s.add(u),
      s.size === 1 && (t = e(i) || B),
      o(n),
      () => {
        s.delete(u), s.size === 0 && (t(), (t = null));
      }
    );
  }
  return { set: i, update: r, subscribe: a };
}
function Dt(n) {
  return (
    (n.optimisticResults = !0),
    n.onError && (n.onError = V.batchCalls(n.onError)),
    n.onSuccess && (n.onSuccess = V.batchCalls(n.onSuccess)),
    n.onSettled && (n.onSettled = V.batchCalls(n.onSettled)),
    n
  );
}
function qn(n, e, t) {
  const s = Te(n, e, t),
    i = lt();
  let r = i.defaultQueryObserverOptions(s);
  r = Dt(r);
  const a = new vs(i, r),
    { subscribe: o } = jn(a.getCurrentResult(), (m) =>
      a.subscribe(V.batchCalls(m))
    );
  a.updateResult();
  function l(m, f, b) {
    const c = Te(m, f, b);
    let g = i.defaultQueryObserverOptions(c);
    (g = Dt(g)), a.hasListeners() && a.setOptions(g, { listeners: !1 });
  }
  function u(m) {
    a.updateOptions(m);
  }
  function d(m) {
    u({ enabled: m });
  }
  return { subscribe: o, setOptions: l, updateOptions: u, setEnabled: d };
}
function Fs(n, e, t) {
  const s = qt(n, e, t),
    i = lt(),
    r = new Ps(i, s),
    a = (m, f) => {
      r.mutate(m, f).catch(ie);
    },
    o = r.getCurrentResult(),
    l = Object.assign(Object.assign({}, o), {
      mutate: a,
      mutateAsync: o.mutate,
    }),
    { subscribe: u } = jn(l, (m) =>
      r.subscribe(
        V.batchCalls((f) => {
          r.hasListeners() &&
            m(
              Object.assign(Object.assign({}, f), {
                mutate: a,
                mutateAsync: f.mutate,
              })
            );
        })
      )
    );
  function d(m, f, b) {
    if (r.hasListeners()) {
      const c = qt(m, f, b);
      r.setOptions(c);
    }
  }
  return { subscribe: u, setOptions: d };
}
const kt = (n) => ({
    version: n.replace(/[\^~]/, ""),
    qualifier: isNaN(Number(n[0])) ? n[0] : void 0,
  }),
  Mn = (n, e) => kt(n).version === e,
  Qt = (n, e) => (e.length <= n ? e : e.slice(0, n).concat("\u2026")),
  ct = 10,
  ze = { package: "package" };
class It extends Error {
  constructor(e, t, s) {
    const i = e.status || e.status === 0 ? e.status : "",
      r = e.statusText || "",
      a = `${i} ${r}`.trim(),
      o = a ? `status code ${a}` : "an unknown error";
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
      (this.options = s);
  }
}
class $n extends Error {
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
const We = (n) => n !== null && typeof n == "object",
  xe = (...n) => {
    for (const e of n)
      if ((!We(e) || Array.isArray(e)) && typeof e != "undefined")
        throw new TypeError("The `options` argument must be an object");
    return Lt({}, ...n);
  },
  Fn = (n = {}, e = {}) => {
    const t = new globalThis.Headers(n),
      s = e instanceof globalThis.Headers,
      i = new globalThis.Headers(e);
    for (const [r, a] of i.entries())
      (s && a === "undefined") || a === void 0 ? t.delete(r) : t.set(r, a);
    return t;
  },
  Lt = (...n) => {
    let e = {},
      t = {};
    for (const s of n)
      if (Array.isArray(s)) Array.isArray(e) || (e = []), (e = [...e, ...s]);
      else if (We(s)) {
        for (let [i, r] of Object.entries(s))
          We(r) && i in e && (r = Lt(e[i], r)), (e = { ...e, [i]: r });
        We(s.headers) && ((t = Fn(t, s.headers)), (e.headers = t));
      }
    return e;
  },
  Es = typeof globalThis.AbortController == "function",
  Ss = typeof globalThis.ReadableStream == "function",
  As = typeof globalThis.FormData == "function",
  En = ["get", "post", "put", "patch", "head", "delete"],
  Ts = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  ft = 2147483647,
  Sn = Symbol("stop"),
  Ds = (n) => (En.includes(n) ? n.toUpperCase() : n),
  Qs = ["get", "put", "head", "delete", "options", "trace"],
  Is = [408, 413, 429, 500, 502, 503, 504],
  An = [413, 429, 503],
  Ut = {
    limit: 2,
    methods: Qs,
    statusCodes: Is,
    afterStatusCodes: An,
    maxRetryAfter: Number.POSITIVE_INFINITY,
  },
  Us = (n = {}) => {
    if (typeof n == "number") return { ...Ut, limit: n };
    if (n.methods && !Array.isArray(n.methods))
      throw new Error("retry.methods must be an array");
    if (n.statusCodes && !Array.isArray(n.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...Ut, ...n, afterStatusCodes: An };
  },
  zs = async (n, e, t) =>
    new Promise((s, i) => {
      const r = setTimeout(() => {
        e && e.abort(), i(new $n(n));
      }, t.timeout);
      t.fetch(n)
        .then(s)
        .catch(i)
        .then(() => {
          clearTimeout(r);
        });
    }),
  Ns = async (n) =>
    new Promise((e) => {
      setTimeout(e, n);
    });
class rt {
  constructor(e, t = {}) {
    var s, i, r;
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
        headers: Fn(this._input.headers, t.headers),
        hooks: Lt(
          {
            beforeRequest: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: [],
          },
          t.hooks
        ),
        method: Ds((s = t.method) != null ? s : this._input.method),
        prefixUrl: String(t.prefixUrl || ""),
        retry: Us(t.retry),
        throwHttpErrors: t.throwHttpErrors !== !1,
        timeout: typeof t.timeout == "undefined" ? 1e4 : t.timeout,
        fetch: (i = t.fetch) != null ? i : globalThis.fetch.bind(globalThis),
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
    if (
      (Es &&
        ((this.abortController = new globalThis.AbortController()),
        this._options.signal &&
          this._options.signal.addEventListener("abort", () => {
            this.abortController.abort();
          }),
        (this._options.signal = this.abortController.signal)),
      (this.request = new globalThis.Request(this._input, this._options)),
      this._options.searchParams)
    ) {
      const a =
          typeof this._options.searchParams == "string"
            ? this._options.searchParams.replace(/^\?/, "")
            : new URLSearchParams(this._options.searchParams).toString(),
        o = "?" + a,
        l = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, o);
      ((As && this._options.body instanceof globalThis.FormData) ||
        this._options.body instanceof URLSearchParams) &&
        !(this._options.headers && this._options.headers["content-type"]) &&
        this.request.headers.delete("content-type"),
        (this.request = new globalThis.Request(
          new globalThis.Request(l, this.request),
          this._options
        ));
    }
    this._options.json !== void 0 &&
      ((this._options.body = JSON.stringify(this._options.json)),
      this.request.headers.set(
        "content-type",
        (r = this._options.headers.get("content-type")) != null
          ? r
          : "application/json"
      ),
      (this.request = new globalThis.Request(this.request, {
        body: this._options.body,
      })));
  }
  static create(e, t) {
    const s = new rt(e, t),
      i = async () => {
        if (s._options.timeout > ft)
          throw new RangeError(
            `The \`timeout\` option cannot be greater than ${ft}`
          );
        await Promise.resolve();
        let o = await s._fetch();
        for (const l of s._options.hooks.afterResponse) {
          const u = await l(
            s.request,
            s._options,
            s._decorateResponse(o.clone())
          );
          u instanceof globalThis.Response && (o = u);
        }
        if ((s._decorateResponse(o), !o.ok && s._options.throwHttpErrors)) {
          let l = new It(o, s.request, s._options);
          for (const u of s._options.hooks.beforeError) l = await u(l);
          throw l;
        }
        if (s._options.onDownloadProgress) {
          if (typeof s._options.onDownloadProgress != "function")
            throw new TypeError(
              "The `onDownloadProgress` option must be a function"
            );
          if (!Ss)
            throw new Error(
              "Streams are not supported in your environment. `ReadableStream` is missing."
            );
          return s._stream(o.clone(), s._options.onDownloadProgress);
        }
        return o;
      },
      a = s._options.retry.methods.includes(s.request.method.toLowerCase())
        ? s._retry(i)
        : i();
    for (const [o, l] of Object.entries(Ts))
      a[o] = async () => {
        s.request.headers.set("accept", s.request.headers.get("accept") || l);
        const d = (await a).clone();
        if (o === "json") {
          if (d.status === 204) return "";
          if (t.parseJson) return t.parseJson(await d.text());
        }
        return d[o]();
      };
    return a;
  }
  _calculateRetryDelay(e) {
    if (
      (this._retryCount++,
      this._retryCount < this._options.retry.limit && !(e instanceof $n))
    ) {
      if (e instanceof It) {
        if (!this._options.retry.statusCodes.includes(e.response.status))
          return 0;
        const s = e.response.headers.get("Retry-After");
        if (
          s &&
          this._options.retry.afterStatusCodes.includes(e.response.status)
        ) {
          let i = Number(s);
          return (
            Number.isNaN(i) ? (i = Date.parse(s) - Date.now()) : (i *= 1e3),
            typeof this._options.retry.maxRetryAfter != "undefined" &&
            i > this._options.retry.maxRetryAfter
              ? 0
              : i
          );
        }
        if (e.response.status === 413) return 0;
      }
      return 0.3 * 2 ** (this._retryCount - 1) * 1e3;
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
      const s = Math.min(this._calculateRetryDelay(t), ft);
      if (s !== 0 && this._retryCount > 0) {
        await Ns(s);
        for (const i of this._options.hooks.beforeRetry)
          if (
            (await i({
              request: this.request,
              options: this._options,
              error: t,
              retryCount: this._retryCount,
            })) === Sn
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
      : zs(this.request.clone(), this.abortController, this._options);
  }
  _stream(e, t) {
    const s = Number(e.headers.get("content-length")) || 0;
    let i = 0;
    return new globalThis.Response(
      new globalThis.ReadableStream({
        async start(r) {
          const a = e.body.getReader();
          t &&
            t(
              { percent: 0, transferredBytes: 0, totalBytes: s },
              new Uint8Array()
            );
          async function o() {
            const { done: l, value: u } = await a.read();
            if (l) {
              r.close();
              return;
            }
            if (t) {
              i += u.byteLength;
              const d = s === 0 ? 0 : i / s;
              t({ percent: d, transferredBytes: i, totalBytes: s }, u);
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
/*! MIT License © Sindre Sorhus */ const bt = (n) => {
    const e = (t, s) => rt.create(t, xe(n, s));
    for (const t of En) e[t] = (s, i) => rt.create(s, xe(n, i, { method: t }));
    return (
      (e.create = (t) => bt(xe(t))),
      (e.extend = (t) => bt(xe(n, t))),
      (e.stop = Sn),
      e
    );
  },
  Hs = bt();
var Bs = Hs;
const Tn = Bs.create({ prefixUrl: "http://localhost:5001/" });
async function Ks() {
  return await Tn.get("package").json();
}
async function xs(n) {
  return await Tn.post("upgrade-packages", { json: n }).json();
}
const Dn = (n) => Fs(xs, n),
  Vs = () => qn(ze.package, Ks);
function Zs(n) {
  yt(() => {
    window.addEventListener("keydown", n);
  }),
    wt(() => {
      window.removeEventListener("keydown", n);
    });
}
function Gs(n) {
  let e, t, s, i, r, a;
  return {
    c() {
      (e = X("svg")),
        (t = X("g")),
        (s = X("g")),
        (i = X("path")),
        (a = X("path")),
        h(i, "d", (r = zt[n[0]])),
        h(
          a,
          "d",
          "M50,20 C71.4336483,20 81.3822646,28.613774 86.0000023,36.6100918 L86,11.9417476 L86,10 L90,10 L90,11.9417476 L90,58.0582524 L90,59.0291262 L90,70 C90,70 90,90 50,90 C10,90 10,70 10,70 L10,59.0291262 L10,58.0582524 L10,11.9417476 L10,10 L14,10 L14,11.9417476 L14,36.6100878 C18.6177354,28.613774 28.5663517,20 50,20 Z M20,60 C20,51.7157288 26.7081139,45 35.0050808,45 L64.9949192,45 C73.2819965,45 80,51.7139073 80,60 C80,68.2842712 73.2918861,75 64.9949192,75 L35.0050808,75 C26.7180035,75 20,68.2860927 20,60 Z M14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 L14,10 Z M90,10 C90,8.8954305 89.1045695,8 88,8 C86.8954305,8 86,8.8954305 86,10 L90,10 Z"
        ),
        h(s, "fill", "currentColor"),
        h(t, "stroke", "none"),
        h(t, "stroke-width", "1"),
        h(t, "fill", "none"),
        h(t, "fill-rule", "evenodd"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        h(e, "viewBox", "0 0 100 125");
    },
    m(o, l) {
      $(o, e, l), p(e, t), p(t, s), p(s, i), p(s, a);
    },
    p(o, [l]) {
      l & 1 && r !== (r = zt[o[0]]) && h(i, "d", r);
    },
    i: B,
    o: B,
    d(o) {
      o && M(e);
    },
  };
}
const zt = {
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
function Js(n, e, t) {
  let { mood: s = "awake" } = e;
  return (
    (n.$$set = (i) => {
      "mood" in i && t(0, (s = i.mood));
    }),
    [s]
  );
}
class Ws extends G {
  constructor(e) {
    super(), Z(this, e, Js, Gs, x, { mood: 0 });
  }
}
function Qn(n, e = []) {
  return (...t) =>
    ((s) => (s.length >= n.length ? n(...s) : Qn(n, s)))([...e, ...t]);
}
const In = Array.isArray;
function Xs(n, e, t) {
  if (!In(t)) throw new TypeError("reduce: list must be array or iterable");
  let s = 0;
  const i = t.length;
  for (; s < i; ) (e = n(e, t[s], s, t)), s++;
  return e;
}
const Ys = Qn(Xs);
function Un(n, e) {
  if (arguments.length === 1) return (t) => Un(n, t);
  if (!!e) return e[n];
}
function zn(n, e) {
  return arguments.length === 1 ? (t) => zn(n, t) : n * e;
}
function ei(n, e) {
  const t = {},
    s = {};
  return (
    Object.entries(e).forEach(([i, r]) => {
      n(r, i) ? (t[i] = r) : (s[i] = r);
    }),
    [t, s]
  );
}
function ti(n, e, t = !1) {
  const s = [],
    i = [];
  let r = -1;
  for (; r++ < e.length - 1; )
    (t ? n(e[r], r) : n(e[r])) ? s.push(e[r]) : i.push(e[r]);
  return [s, i];
}
function Nn(n, e) {
  return arguments.length === 1 ? (t) => Nn(n, t) : In(e) ? ti(n, e) : ei(n, e);
}
Ys(zn, 1);
function vt(n, e) {
  if (arguments.length === 1) return (i) => vt(n, i);
  if (Number.isNaN(Number(n)) || Number.isNaN(Number(e)))
    throw new TypeError("Both arguments to range must be numbers");
  if (e < n) return [];
  const t = e - n,
    s = Array(t);
  for (let i = 0; i < t; i++) s[i] = n + i;
  return s;
}
function Nt(n) {
  let e, t;
  return {
    c() {
      (e = X("title")), (t = z(n[0]));
    },
    m(s, i) {
      $(s, e, i), p(e, t);
    },
    p(s, i) {
      i & 1 && oe(t, s[0]);
    },
    d(s) {
      s && M(e);
    },
  };
}
function ni(n) {
  let e,
    t,
    s,
    i = n[0] && Nt(n);
  const r = n[3].default,
    a = Le(r, n, n[2], null);
  return {
    c() {
      (e = X("svg")),
        i && i.c(),
        (t = Xn()),
        a && a.c(),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "viewBox", n[1]),
        h(e, "class", "svelte-heylkm");
    },
    m(o, l) {
      $(o, e, l), i && i.m(e, null), p(e, t), a && a.m(e, null), (s = !0);
    },
    p(o, [l]) {
      o[0]
        ? i
          ? i.p(o, l)
          : ((i = Nt(o)), i.c(), i.m(e, t))
        : i && (i.d(1), (i = null)),
        a &&
          a.p &&
          (!s || l & 4) &&
          Pe(a, r, o, o[2], s ? Re(r, o[2], l, null) : je(o[2]), null),
        (!s || l & 2) && h(e, "viewBox", o[1]);
    },
    i(o) {
      s || (_(a, o), (s = !0));
    },
    o(o) {
      C(a, o), (s = !1);
    },
    d(o) {
      o && M(e), i && i.d(), a && a.d(o);
    },
  };
}
function si(n, e, t) {
  let { $$slots: s = {}, $$scope: i } = e,
    { title: r = null } = e,
    { viewBox: a } = e;
  return (
    (n.$$set = (o) => {
      "title" in o && t(0, (r = o.title)),
        "viewBox" in o && t(1, (a = o.viewBox)),
        "$$scope" in o && t(2, (i = o.$$scope));
    }),
    [r, a, i, s]
  );
}
class ge extends G {
  constructor(e) {
    super(), Z(this, e, si, ni, x, { title: 0, viewBox: 1 });
  }
}
function ii(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function ri(n) {
  let e, t;
  const s = [{ viewBox: "0 0 512 512" }, n[0]];
  let i = { $$slots: { default: [ii] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function ai(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class Hn extends G {
  constructor(e) {
    super(), Z(this, e, ai, ri, x, {});
  }
}
function oi(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function li(n) {
  let e, t;
  const s = [{ viewBox: "0 0 448 512" }, n[0]];
  let i = { $$slots: { default: [oi] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function ui(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class ci extends G {
  constructor(e) {
    super(), Z(this, e, ui, li, x, {});
  }
}
function fi(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function di(n) {
  let e, t;
  const s = [{ viewBox: "0 0 12 16" }, n[0]];
  let i = { $$slots: { default: [fi] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function hi(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class pi extends G {
  constructor(e) {
    super(), Z(this, e, hi, di, x, {});
  }
}
function mi(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function gi(n) {
  let e, t;
  const s = [{ viewBox: "0 0 14 16" }, n[0]];
  let i = { $$slots: { default: [mi] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function bi(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class vi extends G {
  constructor(e) {
    super(), Z(this, e, bi, gi, x, {});
  }
}
function _i(n) {
  let e;
  return {
    c() {
      (e = X("path")), h(e, "d", "M5 3L0 9h3v4h4V9h3L5 3z");
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function yi(n) {
  let e, t;
  const s = [{ viewBox: "0 0 10 16" }, n[0]];
  let i = { $$slots: { default: [_i] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function wi(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class Oi extends G {
  constructor(e) {
    super(), Z(this, e, wi, yi, x, {});
  }
}
function Ci(n) {
  let e;
  const t = n[3].default,
    s = Le(t, n, n[2], null);
  return {
    c() {
      s && s.c();
    },
    m(i, r) {
      s && s.m(i, r), (e = !0);
    },
    p(i, r) {
      s &&
        s.p &&
        (!e || r & 4) &&
        Pe(s, t, i, i[2], e ? Re(t, i[2], r, null) : je(i[2]), null);
    },
    i(i) {
      e || (_(s, i), (e = !0));
    },
    o(i) {
      C(s, i), (e = !1);
    },
    d(i) {
      s && s.d(i);
    },
  };
}
function ki(n) {
  let e = "...",
    t,
    s,
    i,
    r;
  const a = n[3].default,
    o = Le(a, n, n[2], null);
  return {
    c() {
      (t = z(e)),
        (s = T()),
        (i = w("div")),
        o && o.c(),
        h(i, "class", "opacity-0 h-0");
    },
    m(l, u) {
      $(l, t, u), $(l, s, u), $(l, i, u), o && o.m(i, null), (r = !0);
    },
    p(l, u) {
      o &&
        o.p &&
        (!r || u & 4) &&
        Pe(o, a, l, l[2], r ? Re(a, l[2], u, null) : je(l[2]), null);
    },
    i(l) {
      r || (_(o, l), (r = !0));
    },
    o(l) {
      C(o, l), (r = !1);
    },
    d(l) {
      l && M(t), l && M(s), l && M(i), o && o.d(l);
    },
  };
}
function Li(n) {
  let e, t, s, i, r, a, o, l, u, d;
  const m = [ki, Ci],
    f = [];
  function b(c, g) {
    return c[0] ? 0 : 1;
  }
  return (
    (s = b(n)),
    (i = f[s] = m[s](n)),
    (o = new Oi({ props: { height: "1em" } })),
    {
      c() {
        (e = w("button")),
          (t = w("div")),
          i.c(),
          (r = T()),
          (a = w("div")),
          U(o.$$.fragment),
          h(t, "class", "px-2 font-medium relative"),
          h(
            a,
            "class",
            "h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple"
          ),
          h(
            e,
            "class",
            "flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple/95 text-castleton-green -mr-1 whitespace-nowrap"
          ),
          (e.disabled = n[1]),
          K(e, "opacity-90", n[0]),
          K(e, "opacity-70", n[1]);
      },
      m(c, g) {
        $(c, e, g),
          p(e, t),
          f[s].m(t, null),
          p(e, r),
          p(e, a),
          Q(o, a, null),
          (l = !0),
          u || ((d = de(e, "click", n[4])), (u = !0));
      },
      p(c, [g]) {
        let v = s;
        (s = b(c)),
          s === v
            ? f[s].p(c, g)
            : (re(),
              C(f[v], 1, 1, () => {
                f[v] = null;
              }),
              ae(),
              (i = f[s]),
              i ? i.p(c, g) : ((i = f[s] = m[s](c)), i.c()),
              _(i, 1),
              i.m(t, null)),
          (!l || g & 2) && (e.disabled = c[1]),
          g & 1 && K(e, "opacity-90", c[0]),
          g & 2 && K(e, "opacity-70", c[1]);
      },
      i(c) {
        l || (_(i), _(o.$$.fragment, c), (l = !0));
      },
      o(c) {
        C(i), C(o.$$.fragment, c), (l = !1);
      },
      d(c) {
        c && M(e), f[s].d(), I(o), (u = !1), d();
      },
    }
  );
}
function Ri(n, e, t) {
  let { $$slots: s = {}, $$scope: i } = e,
    { isLoading: r = !1 } = e,
    { disabled: a = !1 } = e;
  function o(l) {
    ns.call(this, n, l);
  }
  return (
    (n.$$set = (l) => {
      "isLoading" in l && t(0, (r = l.isLoading)),
        "disabled" in l && t(1, (a = l.disabled)),
        "$$scope" in l && t(2, (i = l.$$scope));
    }),
    [r, a, i, s, o]
  );
}
class Bn extends G {
  constructor(e) {
    super(), Z(this, e, Ri, Li, x, { isLoading: 0, disabled: 1 });
  }
}
function Pi(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function ji(n) {
  let e, t;
  const s = [{ viewBox: "0 0 640 512" }, n[0]];
  let i = { $$slots: { default: [Pi] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function qi(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class Mi extends G {
  constructor(e) {
    super(), Z(this, e, qi, ji, x, {});
  }
}
function $i(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function Fi(n) {
  let e, t;
  const s = [{ viewBox: "0 0 496 512" }, n[0]];
  let i = { $$slots: { default: [$i] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function Ei(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class Si extends G {
  constructor(e) {
    super(), Z(this, e, Ei, Fi, x, {});
  }
}
function Ai(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function Ti(n) {
  let e, t;
  const s = [{ viewBox: "0 0 496 512" }, n[0]];
  let i = { $$slots: { default: [Ai] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function Di(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class Qi extends G {
  constructor(e) {
    super(), Z(this, e, Di, Ti, x, {});
  }
}
function Ii(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function Ui(n) {
  let e, t;
  const s = [{ viewBox: "0 0 576 512" }, n[0]];
  let i = { $$slots: { default: [Ii] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function zi(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class Kn extends G {
  constructor(e) {
    super(), Z(this, e, zi, Ui, x, {});
  }
}
function Ni(n) {
  let e;
  return {
    c() {
      (e = X("path")),
        h(
          e,
          "d",
          "M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"
        );
    },
    m(t, s) {
      $(t, e, s);
    },
    p: B,
    d(t) {
      t && M(e);
    },
  };
}
function Hi(n) {
  let e, t;
  const s = [{ viewBox: "0 0 512 512" }, n[0]];
  let i = { $$slots: { default: [Ni] }, $$scope: { ctx: n } };
  for (let r = 0; r < s.length; r += 1) i = H(i, s[r]);
  return (
    (e = new ge({ props: i })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(r, a) {
        Q(e, r, a), (t = !0);
      },
      p(r, [a]) {
        const o = a & 1 ? pe(s, [s[0], me(r[0])]) : {};
        a & 2 && (o.$$scope = { dirty: a, ctx: r }), e.$set(o);
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (t = !1);
      },
      d(r) {
        I(e, r);
      },
    }
  );
}
function Bi(n, e, t) {
  return (
    (n.$$set = (s) => {
      t(0, (e = H(H({}, e), Y(s))));
    }),
    (e = Y(e)),
    [e]
  );
}
class Ki extends G {
  constructor(e) {
    super(), Z(this, e, Bi, Hi, x, {});
  }
}
function xi(n) {
  let e, t, s;
  return (
    (t = new Bn({
      props: {
        disabled: n[9].isLoading && n[7],
        isLoading: n[9].isLoading && n[7],
        $$slots: { default: [Zi] },
        $$scope: { ctx: n },
      },
    })),
    t.$on("click", n[17]),
    {
      c() {
        (e = w("div")), U(t.$$.fragment), h(e, "class", "py-1");
      },
      m(i, r) {
        $(i, e, r), Q(t, e, null), (s = !0);
      },
      p(i, r) {
        const a = {};
        r & 640 && (a.disabled = i[9].isLoading && i[7]),
          r & 640 && (a.isLoading = i[9].isLoading && i[7]),
          r & 1048582 && (a.$$scope = { dirty: r, ctx: i }),
          t.$set(a);
      },
      i(i) {
        s || (_(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        C(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && M(e), I(t);
      },
    }
  );
}
function Vi(n) {
  let e, t, s, i, r, a, o;
  return (
    (a = new Hn({})),
    {
      c() {
        (e = w("div")),
          (t = w("div")),
          (s = z(n[1])),
          (i = T()),
          (r = w("div")),
          U(a.$$.fragment),
          h(r, "class", "h-4 w-4 ml-1"),
          h(e, "class", "flex items-center gap-2 justify-end py-2");
      },
      m(l, u) {
        $(l, e, u), p(e, t), p(t, s), p(e, i), p(e, r), Q(a, r, null), (o = !0);
      },
      p(l, u) {
        (!o || u & 2) && oe(s, l[1]);
      },
      i(l) {
        o || (_(a.$$.fragment, l), (o = !0));
      },
      o(l) {
        C(a.$$.fragment, l), (o = !1);
      },
      d(l) {
        l && M(e), I(a);
      },
    }
  );
}
function Zi(n) {
  let e, t, s;
  return {
    c() {
      (e = z(n[1])), (t = z(" \u21D2 ")), (s = z(n[2]));
    },
    m(i, r) {
      $(i, e, r), $(i, t, r), $(i, s, r);
    },
    p(i, r) {
      r & 2 && oe(e, i[1]), r & 4 && oe(s, i[2]);
    },
    d(i) {
      i && M(e), i && M(t), i && M(s);
    },
  };
}
function Ht(n) {
  var S;
  let e,
    t = n[5].description + "",
    s,
    i,
    r,
    a,
    o,
    l,
    u,
    d,
    m,
    f,
    b,
    c = n[5].license && Bt(n),
    g = n[5].author && Kt(n),
    v = n[10].data && xt(n),
    y = ((S = n[5].repository) == null ? void 0 : S.url) && Vt(n),
    k = n[5].homepage && Zt(n),
    R = n[5].bugs && Gt(n);
  return {
    c() {
      (e = w("div")),
        (s = z(t)),
        (i = T()),
        (r = w("div")),
        (a = w("div")),
        c && c.c(),
        (o = T()),
        g && g.c(),
        (l = T()),
        v && v.c(),
        (u = T()),
        (d = w("div")),
        y && y.c(),
        (m = T()),
        k && k.c(),
        (f = T()),
        R && R.c(),
        h(
          e,
          "class",
          "text-granny-smith-apple/90 max-w-md p-4 py-2 font-medium"
        ),
        h(a, "class", "grid gap-2"),
        h(d, "class", "flex gap-2 items-center text-lg"),
        h(
          r,
          "class",
          "px-2 pt-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60"
        );
    },
    m(L, O) {
      $(L, e, O),
        p(e, s),
        $(L, i, O),
        $(L, r, O),
        p(r, a),
        c && c.m(a, null),
        p(a, o),
        g && g.m(a, null),
        p(a, l),
        v && v.m(a, null),
        p(r, u),
        p(r, d),
        y && y.m(d, null),
        p(d, m),
        k && k.m(d, null),
        p(d, f),
        R && R.m(d, null),
        (b = !0);
    },
    p(L, O) {
      var j;
      (!b || O & 32) && t !== (t = L[5].description + "") && oe(s, t),
        L[5].license
          ? c
            ? (c.p(L, O), O & 32 && _(c, 1))
            : ((c = Bt(L)), c.c(), _(c, 1), c.m(a, o))
          : c &&
            (re(),
            C(c, 1, 1, () => {
              c = null;
            }),
            ae()),
        L[5].author
          ? g
            ? g.p(L, O)
            : ((g = Kt(L)), g.c(), g.m(a, l))
          : g && (g.d(1), (g = null)),
        L[10].data
          ? v
            ? v.p(L, O)
            : ((v = xt(L)), v.c(), v.m(a, null))
          : v && (v.d(1), (v = null)),
        (j = L[5].repository) != null && j.url
          ? y
            ? (y.p(L, O), O & 32 && _(y, 1))
            : ((y = Vt(L)), y.c(), _(y, 1), y.m(d, m))
          : y &&
            (re(),
            C(y, 1, 1, () => {
              y = null;
            }),
            ae()),
        L[5].homepage
          ? k
            ? (k.p(L, O), O & 32 && _(k, 1))
            : ((k = Zt(L)), k.c(), _(k, 1), k.m(d, f))
          : k &&
            (re(),
            C(k, 1, 1, () => {
              k = null;
            }),
            ae()),
        L[5].bugs
          ? R
            ? (R.p(L, O), O & 32 && _(R, 1))
            : ((R = Gt(L)), R.c(), _(R, 1), R.m(d, null))
          : R &&
            (re(),
            C(R, 1, 1, () => {
              R = null;
            }),
            ae());
    },
    i(L) {
      b || (_(c), _(y), _(k), _(R), (b = !0));
    },
    o(L) {
      C(c), C(y), C(k), C(R), (b = !1);
    },
    d(L) {
      L && M(e),
        L && M(i),
        L && M(r),
        c && c.d(),
        g && g.d(),
        v && v.d(),
        y && y.d(),
        k && k.d(),
        R && R.d();
    },
  };
}
function Bt(n) {
  var u;
  let e,
    t,
    s,
    i,
    r,
    a = ((u = n[5].license) != null ? u : "") + "",
    o,
    l;
  return (
    (s = new Mi({})),
    {
      c() {
        (e = w("div")),
          (t = w("div")),
          U(s.$$.fragment),
          (i = T()),
          (r = w("span")),
          (o = z(a)),
          h(t, "class", "h-text -translate-y-px"),
          h(e, "class", "flex gap-1 items-center");
      },
      m(d, m) {
        $(d, e, m), p(e, t), Q(s, t, null), p(e, i), p(e, r), p(r, o), (l = !0);
      },
      p(d, m) {
        var f;
        (!l || m & 32) &&
          a !== (a = ((f = d[5].license) != null ? f : "") + "") &&
          oe(o, a);
      },
      i(d) {
        l || (_(s.$$.fragment, d), (l = !0));
      },
      o(d) {
        C(s.$$.fragment, d), (l = !1);
      },
      d(d) {
        d && M(e), I(s);
      },
    }
  );
}
function Kt(n) {
  let e,
    t,
    s,
    i,
    r = n[5].author.name + "",
    a;
  return {
    c() {
      (e = w("div")),
        (t = w("span")),
        (t.textContent = "Authored by"),
        (s = T()),
        (i = w("span")),
        (a = z(r)),
        h(i, "class", "font-semibold"),
        h(e, "class", "text-granny-smith-apple flex items-center gap-2");
    },
    m(o, l) {
      $(o, e, l), p(e, t), p(e, s), p(e, i), p(i, a);
    },
    p(o, l) {
      l & 32 && r !== (r = o[5].author.name + "") && oe(a, r);
    },
    d(o) {
      o && M(e);
    },
  };
}
function xt(n) {
  let e,
    t,
    s,
    i = (n[10].data.gzip / 1024).toFixed(1) + "",
    r,
    a,
    o,
    l,
    u = (n[10].data.size / 1024).toFixed(1) + "",
    d,
    m,
    f;
  return {
    c() {
      (e = w("div")),
        (t = z(`Bundle size
              `)),
        (s = w("span")),
        (r = z(i)),
        (a = z("kb")),
        (o = z(`
              (gzipped) |
              `)),
        (l = w("span")),
        (d = z(u)),
        (m = z("kb")),
        (f = z(" (uncompressed)")),
        h(s, "class", "font-semibold"),
        h(l, "class", "font-semibold");
    },
    m(b, c) {
      $(b, e, c),
        p(e, t),
        p(e, s),
        p(s, r),
        p(s, a),
        p(e, o),
        p(e, l),
        p(l, d),
        p(l, m),
        p(e, f);
    },
    p(b, c) {
      c & 1024 &&
        i !== (i = (b[10].data.gzip / 1024).toFixed(1) + "") &&
        oe(r, i),
        c & 1024 &&
          u !== (u = (b[10].data.size / 1024).toFixed(1) + "") &&
          oe(d, u);
    },
    d(b) {
      b && M(e);
    },
  };
}
function Vt(n) {
  let e, t, s, i, r;
  return (
    (s = new Si({})),
    {
      c() {
        (e = w("div")),
          (t = w("a")),
          U(s.$$.fragment),
          h(t, "href", (i = n[5].repository.url.replace(/^git\+/, ""))),
          h(t, "target", "_blank"),
          h(t, "class", "hover:underline"),
          h(t, "rel", "noopener roreferrer"),
          h(t, "title", "Github"),
          h(e, "class", "h-text");
      },
      m(a, o) {
        $(a, e, o), p(e, t), Q(s, t, null), (r = !0);
      },
      p(a, o) {
        (!r ||
          (o & 32 && i !== (i = a[5].repository.url.replace(/^git\+/, "")))) &&
          h(t, "href", i);
      },
      i(a) {
        r || (_(s.$$.fragment, a), (r = !0));
      },
      o(a) {
        C(s.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && M(e), I(s);
      },
    }
  );
}
function Zt(n) {
  let e, t, s, i, r;
  return (
    (s = new Qi({})),
    {
      c() {
        (e = w("div")),
          (t = w("a")),
          U(s.$$.fragment),
          h(t, "href", (i = n[5].homepage)),
          h(t, "target", "_blank"),
          h(t, "class", "hover:underline"),
          h(t, "rel", "noopener roreferrer"),
          h(t, "title", "Homepage"),
          h(e, "class", "h-text");
      },
      m(a, o) {
        $(a, e, o), p(e, t), Q(s, t, null), (r = !0);
      },
      p(a, o) {
        (!r || (o & 32 && i !== (i = a[5].homepage))) && h(t, "href", i);
      },
      i(a) {
        r || (_(s.$$.fragment, a), (r = !0));
      },
      o(a) {
        C(s.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && M(e), I(s);
      },
    }
  );
}
function Gt(n) {
  let e, t, s, i, r;
  return (
    (s = new Ki({})),
    {
      c() {
        (e = w("div")),
          (t = w("a")),
          U(s.$$.fragment),
          h(t, "href", (i = n[5].bugs.url)),
          h(t, "target", "_blank"),
          h(t, "class", "hover:underline"),
          h(t, "rel", "noopener roreferrer"),
          h(t, "title", "Bugs"),
          h(e, "class", "h-text");
      },
      m(a, o) {
        $(a, e, o), p(e, t), Q(s, t, null), (r = !0);
      },
      p(a, o) {
        (!r || (o & 32 && i !== (i = a[5].bugs.url))) && h(t, "href", i);
      },
      i(a) {
        r || (_(s.$$.fragment, a), (r = !0));
      },
      o(a) {
        C(s.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && M(e), I(s);
      },
    }
  );
}
function Gi(n) {
  let e,
    t,
    s,
    i,
    r,
    a,
    o,
    l,
    u = Qt(Jt, n[0]) + "",
    d,
    m,
    f,
    b,
    c,
    g,
    v,
    y,
    k,
    R,
    S;
  o = new Kn({});
  const L = [Vi, xi],
    O = [];
  function j(F, A) {
    return F[4] ? 0 : 1;
  }
  (c = j(n)), (g = O[c] = L[c](n));
  let q = n[6] && Ht(n);
  return {
    c() {
      (e = w("li")),
        (t = w("div")),
        (s = w("div")),
        (i = w("div")),
        (r = w("a")),
        (a = w("div")),
        U(o.$$.fragment),
        (l = T()),
        (d = z(u)),
        (f = T()),
        (b = w("div")),
        g.c(),
        (v = T()),
        q && q.c(),
        h(a, "class", "h-8"),
        K(a, "hidden", !n[6]),
        h(r, "href", (m = `https://npmjs.com/package/${n[0]}`)),
        h(r, "target", "_blank"),
        h(
          r,
          "class",
          "hover:underline font-medium whitespace-nowrap flex items-center gap-2 text-lg"
        ),
        h(r, "rel", "noopener roreferrer"),
        K(r, "pt-1", n[6]),
        h(b, "class", "grid place-items-end gap-2 items-center"),
        h(s, "class", "flex justify-between p-4 py-2"),
        h(
          t,
          "class",
          "transition-[transform,background] duration-300 ease-in-out svelte-8luwom"
        ),
        K(t, "expanded", n[6]),
        h(e, "role", "button"),
        h(e, "class", "animate-fadeIn transition-opacity svelte-8luwom"),
        h(
          e,
          "style",
          (y = `animation-delay: ${(n[3] + 1) * n[14]}s; opacity: ${
            n[8] ? 0.4 : 1
          }!important;`)
        ),
        K(e, "border-t", n[3] !== 0);
    },
    m(F, A) {
      $(F, e, A),
        p(e, t),
        p(t, s),
        p(s, i),
        p(i, r),
        p(r, a),
        Q(o, a, null),
        p(r, l),
        p(r, d),
        p(s, f),
        p(s, b),
        O[c].m(b, null),
        p(t, v),
        q && q.m(t, null),
        (k = !0),
        R || ((S = de(e, "click", n[13])), (R = !0));
    },
    p(F, [A]) {
      A & 64 && K(a, "hidden", !F[6]),
        (!k || A & 1) && u !== (u = Qt(Jt, F[0]) + "") && oe(d, u),
        (!k || (A & 1 && m !== (m = `https://npmjs.com/package/${F[0]}`))) &&
          h(r, "href", m),
        A & 64 && K(r, "pt-1", F[6]);
      let ee = c;
      (c = j(F)),
        c === ee
          ? O[c].p(F, A)
          : (re(),
            C(O[ee], 1, 1, () => {
              O[ee] = null;
            }),
            ae(),
            (g = O[c]),
            g ? g.p(F, A) : ((g = O[c] = L[c](F)), g.c()),
            _(g, 1),
            g.m(b, null)),
        F[6]
          ? q
            ? (q.p(F, A), A & 64 && _(q, 1))
            : ((q = Ht(F)), q.c(), _(q, 1), q.m(t, null))
          : q &&
            (re(),
            C(q, 1, 1, () => {
              q = null;
            }),
            ae()),
        A & 64 && K(t, "expanded", F[6]),
        (!k ||
          (A & 264 &&
            y !==
              (y = `animation-delay: ${(F[3] + 1) * F[14]}s; opacity: ${
                F[8] ? 0.4 : 1
              }!important;`))) &&
          h(e, "style", y),
        A & 8 && K(e, "border-t", F[3] !== 0);
    },
    i(F) {
      k || (_(o.$$.fragment, F), _(g), _(q), (k = !0));
    },
    o(F) {
      C(o.$$.fragment, F), C(g), C(q), (k = !1);
    },
    d(F) {
      F && M(e), I(o), O[c].d(), q && q.d(), (R = !1), S();
    },
  };
}
const Jt = 36;
function Ji(n, e, t) {
  let s,
    i,
    r,
    a,
    { name: o = "" } = e,
    { version: l = "" } = e,
    { latest: u = "" } = e,
    { index: d = 0 } = e,
    { isLatest: m = !1 } = e,
    { meta: f } = e,
    { expandedRowIndex: b = -1 } = e,
    c = !1;
  const g = Dn({
    onMutate() {
      t(7, (c = !0));
    },
    onSettled() {
      t(7, (c = !1));
    },
  });
  Xe(n, g, (j) => t(9, (r = j)));
  const v = lt();
  async function y(j) {
    try {
      const q = await r.mutateAsync(j);
      v.setQueryData([ze.package], (F) => {
        for (let A of q) {
          const { qualifier: ee } = kt(A.version),
            le = `${ee}${A.latest}`;
          (F.dependencies[A.name] = le), (F.devDependencies[A.name] = le);
        }
        return F;
      }),
        await v.refetchQueries([ze.package]);
    } catch (q) {
      console.log("Failed to upgrade packages:", { originalError: q });
    }
  }
  function k() {
    b === d ? t(16, (b = -1)) : t(16, (b = d));
  }
  const R = 1 / 30;
  function S(j) {
    j.key === "Escape" && t(16, (b = -1));
  }
  const L = qn(
    ["bundlephobia", o],
    async () =>
      await (
        await fetch(
          `https://bundlephobia.com/api/size?package=${o}&record=true`
        )
      ).json()
  );
  Xe(n, L, (j) => t(10, (a = j))),
    yt(() => {
      window.addEventListener("keydown", S);
    }),
    wt(() => {
      window.removeEventListener("keydown", S);
    });
  const O = (j) => {
    j.stopPropagation(), y([{ name: o, version: l, latest: u, meta: f }]);
  };
  return (
    (n.$$set = (j) => {
      "name" in j && t(0, (o = j.name)),
        "version" in j && t(1, (l = j.version)),
        "latest" in j && t(2, (u = j.latest)),
        "index" in j && t(3, (d = j.index)),
        "isLatest" in j && t(4, (m = j.isLatest)),
        "meta" in j && t(5, (f = j.meta)),
        "expandedRowIndex" in j && t(16, (b = j.expandedRowIndex));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 65544 && t(6, (s = b === d)),
        n.$$.dirty & 65600 && t(8, (i = !s && b !== -1));
    }),
    [o, l, u, d, m, f, s, c, i, r, a, g, y, k, R, L, b, O]
  );
}
class Wi extends G {
  constructor(e) {
    super(),
      Z(this, e, Ji, Gi, x, {
        name: 0,
        version: 1,
        latest: 2,
        index: 3,
        isLatest: 4,
        meta: 5,
        expandedRowIndex: 16,
      });
  }
}
function Wt(n, e, t) {
  const s = n.slice();
  return (s[5] = e[t]), s;
}
function Xt(n) {
  let e,
    t,
    s = n[5] + 1 + "",
    i,
    r,
    a,
    o;
  return {
    c() {
      (e = w("li")),
        (t = w("button")),
        (i = z(s)),
        h(t, "data-page", (r = n[5])),
        h(t, "class", "btn-arrow text-xl svelte-16bdnnj"),
        K(t, "bg-castleton-green", n[5] === n[0]);
    },
    m(l, u) {
      $(l, e, u), p(e, t), p(t, i), a || ((o = de(t, "click", n[2])), (a = !0));
    },
    p(l, u) {
      u & 2 && s !== (s = l[5] + 1 + "") && oe(i, s),
        u & 2 && r !== (r = l[5]) && h(t, "data-page", r),
        u & 3 && K(t, "bg-castleton-green", l[5] === l[0]);
    },
    d(l) {
      l && M(e), (a = !1), o();
    },
  };
}
function Xi(n) {
  let e,
    t,
    s,
    i,
    r,
    a,
    o,
    l,
    u,
    d,
    m,
    f,
    b,
    c = vt(0, n[1]),
    g = [];
  for (let v = 0; v < c.length; v += 1) g[v] = Xt(Wt(n, c, v));
  return {
    c() {
      (e = w("ul")),
        (t = w("li")),
        (s = w("button")),
        (i = z("\u25C4")),
        (a = T());
      for (let v = 0; v < g.length; v += 1) g[v].c();
      (o = T()),
        (l = w("li")),
        (u = w("button")),
        (d = z("\u25BA")),
        h(s, "class", "btn-arrow svelte-16bdnnj"),
        (s.disabled = r = n[0] === 0),
        h(u, "class", "btn-arrow svelte-16bdnnj"),
        (u.disabled = m = n[0] === n[1] - 1),
        h(
          e,
          "class",
          "inline-flex mx-auto font-medium p-4 py-2 items-center gap-2"
        );
    },
    m(v, y) {
      $(v, e, y), p(e, t), p(t, s), p(s, i), p(e, a);
      for (let k = 0; k < g.length; k += 1) g[k].m(e, null);
      p(e, o),
        p(e, l),
        p(l, u),
        p(u, d),
        f || ((b = [de(s, "click", n[4]), de(u, "click", n[3])]), (f = !0));
    },
    p(v, [y]) {
      if ((y & 1 && r !== (r = v[0] === 0) && (s.disabled = r), y & 7)) {
        c = vt(0, v[1]);
        let k;
        for (k = 0; k < c.length; k += 1) {
          const R = Wt(v, c, k);
          g[k] ? g[k].p(R, y) : ((g[k] = Xt(R)), g[k].c(), g[k].m(e, o));
        }
        for (; k < g.length; k += 1) g[k].d(1);
        g.length = c.length;
      }
      y & 3 && m !== (m = v[0] === v[1] - 1) && (u.disabled = m);
    },
    i: B,
    o: B,
    d(v) {
      v && M(e), Qe(g, v), (f = !1), qe(b);
    },
  };
}
function Yi(n, e, t) {
  let { pages: s = 0 } = e,
    { pageIndex: i = 0 } = e;
  function r(l) {
    const { page: u } = l.target.dataset;
    t(0, (i = Number(u)));
  }
  function a() {
    i < s - 1 && t(0, i++, i);
  }
  function o() {
    i > 0 && t(0, i--, i);
  }
  return (
    (n.$$set = (l) => {
      "pages" in l && t(1, (s = l.pages)),
        "pageIndex" in l && t(0, (i = l.pageIndex));
    }),
    [i, s, r, a, o]
  );
}
class er extends G {
  constructor(e) {
    super(), Z(this, e, Yi, Xi, x, { pages: 1, pageIndex: 0 });
  }
}
function tr(n) {
  const e = (t) => {
    n.contains(t.target) || n.dispatchEvent(new CustomEvent("outsideclick"));
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
function Yt(n, e, t) {
  const s = n.slice();
  return (
    (s[28] = e[t].name),
    (s[29] = e[t].version),
    (s[30] = e[t].latest),
    (s[31] = e[t].isLatest),
    (s[32] = e[t].meta),
    (s[34] = t),
    s
  );
}
function en(n, e, t) {
  const s = n.slice();
  return (s[35] = e[t].keys), (s[36] = e[t].label), s;
}
function tn(n, e, t) {
  const s = n.slice();
  return (s[39] = e[t].symbol), (s[40] = e[t].rotation), s;
}
function nr(n) {
  let e, t;
  return (
    (e = new vi({})),
    {
      c() {
        U(e.$$.fragment);
      },
      m(s, i) {
        Q(e, s, i), (t = !0);
      },
      i(s) {
        t || (_(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        I(e, s);
      },
    }
  );
}
function sr(n) {
  let e, t;
  return (
    (e = new pi({})),
    {
      c() {
        U(e.$$.fragment);
      },
      m(s, i) {
        Q(e, s, i), (t = !0);
      },
      i(s) {
        t || (_(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        I(e, s);
      },
    }
  );
}
function nn(n) {
  let e,
    t,
    s,
    i,
    r,
    a = n[39] + "",
    o,
    l,
    u;
  return (
    (s = new ci({})),
    {
      c() {
        (e = w("kbd")),
          (t = w("div")),
          U(s.$$.fragment),
          (i = T()),
          (r = w("span")),
          (o = z(a)),
          (l = T()),
          h(t, "class", "h-3 w-3"),
          h(t, "style", `transform: rotate(${n[40]}deg);`),
          h(r, "class", "sr-only"),
          h(
            e,
            "class",
            "text-sm font-semibold flex p-1.5 bg-castleton-green/40 rounded"
          );
      },
      m(d, m) {
        $(d, e, m),
          p(e, t),
          Q(s, t, null),
          p(e, i),
          p(e, r),
          p(r, o),
          p(e, l),
          (u = !0);
      },
      p: B,
      i(d) {
        u || (_(s.$$.fragment, d), (u = !0));
      },
      o(d) {
        C(s.$$.fragment, d), (u = !1);
      },
      d(d) {
        d && M(e), I(s);
      },
    }
  );
}
function sn(n) {
  let e,
    t,
    s,
    i,
    r = n[36] + "",
    a,
    o,
    l,
    u = n[35],
    d = [];
  for (let f = 0; f < u.length; f += 1) d[f] = nn(tn(n, u, f));
  const m = (f) =>
    C(d[f], 1, 1, () => {
      d[f] = null;
    });
  return {
    c() {
      (e = w("li")), (t = w("div"));
      for (let f = 0; f < d.length; f += 1) d[f].c();
      (s = T()),
        (i = w("span")),
        (a = z(r)),
        (o = T()),
        h(t, "class", "flex gap-2"),
        h(i, "class", "ml-2 text-sm"),
        h(e, "class", "flex items-center");
    },
    m(f, b) {
      $(f, e, b), p(e, t);
      for (let c = 0; c < d.length; c += 1) d[c].m(t, null);
      p(e, s), p(e, i), p(i, a), p(e, o), (l = !0);
    },
    p(f, b) {
      if (b[0] & 32768) {
        u = f[35];
        let c;
        for (c = 0; c < u.length; c += 1) {
          const g = tn(f, u, c);
          d[c]
            ? (d[c].p(g, b), _(d[c], 1))
            : ((d[c] = nn(g)), d[c].c(), _(d[c], 1), d[c].m(t, null));
        }
        for (re(), c = u.length; c < d.length; c += 1) m(c);
        ae();
      }
    },
    i(f) {
      if (!l) {
        for (let b = 0; b < u.length; b += 1) _(d[b]);
        l = !0;
      }
    },
    o(f) {
      d = d.filter(Boolean);
      for (let b = 0; b < d.length; b += 1) C(d[b]);
      l = !1;
    },
    d(f) {
      f && M(e), Qe(d, f);
    },
  };
}
function rn(n) {
  let e, t, s;
  return (
    (t = new Hn({})),
    {
      c() {
        (e = w("div")), U(t.$$.fragment), h(e, "class", "h-4 w-4 ml-1");
      },
      m(i, r) {
        $(i, e, r), Q(t, e, null), (s = !0);
      },
      i(i) {
        s || (_(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        C(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && M(e), I(t);
      },
    }
  );
}
function an(n) {
  let e, t;
  return (
    (e = new Bn({
      props: {
        disabled: n[12].isLoading,
        isLoading: n[12].isLoading,
        $$slots: { default: [ir] },
        $$scope: { ctx: n },
      },
    })),
    e.$on("click", n[24]),
    {
      c() {
        U(e.$$.fragment);
      },
      m(s, i) {
        Q(e, s, i), (t = !0);
      },
      p(s, i) {
        const r = {};
        i[0] & 4096 && (r.disabled = s[12].isLoading),
          i[0] & 4096 && (r.isLoading = s[12].isLoading),
          i[1] & 4096 && (r.$$scope = { dirty: i, ctx: s }),
          e.$set(r);
      },
      i(s) {
        t || (_(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        I(e, s);
      },
    }
  );
}
function ir(n) {
  let e;
  return {
    c() {
      e = z("Upgrade all");
    },
    m(t, s) {
      $(t, e, s);
    },
    d(t) {
      t && M(e);
    },
  };
}
function on(n) {
  let e, t, s;
  function i(a) {
    n[25](a);
  }
  let r = {
    index: n[34],
    name: n[28],
    version: n[29],
    latest: n[30],
    isLatest: n[31],
    meta: n[32],
  };
  return (
    n[5] !== void 0 && (r.expandedRowIndex = n[5]),
    (e = new Wi({ props: r })),
    Ue.push(() => Ct(e, "expandedRowIndex", i)),
    {
      c() {
        U(e.$$.fragment);
      },
      m(a, o) {
        Q(e, a, o), (s = !0);
      },
      p(a, o) {
        const l = {};
        o[0] & 1024 && (l.name = a[28]),
          o[0] & 1024 && (l.version = a[29]),
          o[0] & 1024 && (l.latest = a[30]),
          o[0] & 1024 && (l.isLatest = a[31]),
          o[0] & 1024 && (l.meta = a[32]),
          !t &&
            o[0] & 32 &&
            ((t = !0), (l.expandedRowIndex = a[5]), Ot(() => (t = !1))),
          e.$set(l);
      },
      i(a) {
        s || (_(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        C(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        I(e, a);
      },
    }
  );
}
function ln(n) {
  let e, t, s, i, r;
  function a(l) {
    n[26](l);
  }
  let o = { pages: n[11] };
  return (
    n[2] !== void 0 && (o.pageIndex = n[2]),
    (s = new er({ props: o })),
    Ue.push(() => Ct(s, "pageIndex", a)),
    {
      c() {
        (e = w("footer")),
          (t = w("div")),
          U(s.$$.fragment),
          h(t, "class", "bg-slate-900/90 rounded-full"),
          h(e, "class", "grid place-items-center");
      },
      m(l, u) {
        $(l, e, u), p(e, t), Q(s, t, null), (r = !0);
      },
      p(l, u) {
        const d = {};
        u[0] & 2048 && (d.pages = l[11]),
          !i &&
            u[0] & 4 &&
            ((i = !0), (d.pageIndex = l[2]), Ot(() => (i = !1))),
          s.$set(d);
      },
      i(l) {
        r || (_(s.$$.fragment, l), (r = !0));
      },
      o(l) {
        C(s.$$.fragment, l), (r = !1);
      },
      d(l) {
        l && M(e), I(s);
      },
    }
  );
}
function rr(n) {
  let e,
    t,
    s,
    i,
    r,
    a,
    o,
    l,
    u,
    d,
    m,
    f,
    b,
    c,
    g,
    v,
    y = n[0] === "dependencies" ? "Dependencies" : "Dev Dependencies",
    k,
    R,
    S,
    L = n[4].length + "",
    O,
    j,
    q = n[1].length + "",
    F,
    A,
    ee,
    le,
    he,
    be,
    E,
    ce,
    ue,
    ve,
    Be;
  const Fe = [sr, nr],
    ye = [];
  function Rt(P, D) {
    return P[6] ? 0 : 1;
  }
  (i = Rt(n)), (r = ye[i] = Fe[i](n));
  let we = n[15],
    J = [];
  for (let P = 0; P < we.length; P += 1) J[P] = sn(en(n, we, P));
  const xn = (P) =>
    C(J[P], 1, 1, () => {
      J[P] = null;
    });
  let se = n[8] && rn(),
    te = !n[8] && an(n),
    Oe = n[10],
    W = [];
  for (let P = 0; P < Oe.length; P += 1) W[P] = on(Yt(n, Oe, P));
  const Vn = (P) =>
    C(W[P], 1, 1, () => {
      W[P] = null;
    });
  let ne = n[11] > 1 && ln(n);
  return {
    c() {
      (e = w("div")),
        (t = w("aside")),
        (s = w("button")),
        r.c(),
        (a = T()),
        (o = w("ul"));
      for (let P = 0; P < J.length; P += 1) J[P].c();
      (u = T()),
        (d = w("section")),
        (m = w("div")),
        (f = w("input")),
        (b = T()),
        (c = w("header")),
        (g = w("div")),
        (v = w("div")),
        (k = z(y)),
        (R = T()),
        (S = w("span")),
        (O = z(L)),
        (j = z("/")),
        (F = z(q)),
        (A = T()),
        se && se.c(),
        (ee = T()),
        (le = w("div")),
        te && te.c(),
        (he = T()),
        (be = w("main")),
        (E = w("ul"));
      for (let P = 0; P < W.length; P += 1) W[P].c();
      (ce = T()),
        ne && ne.c(),
        h(s, "class", "help-trigger svelte-1lgocty"),
        K(s, "hidden", n[6]),
        h(o, "class", "bg-slate-900/60 p-4 rounded-xl grid gap-2 opacity-10"),
        h(o, "aria-hidden", (l = !n[6])),
        K(o, "opacity-100", n[6]),
        h(
          t,
          "class",
          "absolute right-0 top-8 transition-all duration-300 ease-in"
        ),
        K(t, "translate-x-64", n[6]),
        h(f, "type", "search"),
        h(f, "class", "search-input svelte-1lgocty"),
        h(f, "placeholder", "package name or version"),
        h(m, "class", ""),
        h(
          S,
          "class",
          "text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
        ),
        h(g, "class", "flex items-center justify-between w-full"),
        h(
          c,
          "class",
          "p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2"
        ),
        h(E, "class", "grid"),
        h(be, "class", "min-h-[32rem] mx-2"),
        h(
          d,
          "class",
          "bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2"
        ),
        h(e, "class", "relative");
    },
    m(P, D) {
      $(P, e, D), p(e, t), p(t, s), ye[i].m(s, null), p(t, a), p(t, o);
      for (let fe = 0; fe < J.length; fe += 1) J[fe].m(o, null);
      p(e, u),
        p(e, d),
        p(d, m),
        p(m, f),
        jt(f, n[3]),
        p(d, b),
        p(d, c),
        p(c, g),
        p(g, v),
        p(v, k),
        p(v, R),
        p(v, S),
        p(S, O),
        p(S, j),
        p(S, F),
        p(g, A),
        se && se.m(g, null),
        p(c, ee),
        p(c, le),
        te && te.m(le, null),
        p(d, he),
        p(d, be),
        p(be, E);
      for (let fe = 0; fe < W.length; fe += 1) W[fe].m(E, null);
      p(d, ce),
        ne && ne.m(d, null),
        (ue = !0),
        ve ||
          ((Be = [
            de(s, "click", n[19]),
            Wn(tr.call(null, t)),
            de(t, "outsideclick", n[20]),
            de(f, "input", n[21]),
            de(f, "focus", n[22]),
            de(f, "blur", n[23]),
          ]),
          (ve = !0));
    },
    p(P, D) {
      let fe = i;
      if (
        ((i = Rt(P)),
        i !== fe &&
          (re(),
          C(ye[fe], 1, 1, () => {
            ye[fe] = null;
          }),
          ae(),
          (r = ye[i]),
          r || ((r = ye[i] = Fe[i](P)), r.c()),
          _(r, 1),
          r.m(s, null)),
        D[0] & 64 && K(s, "hidden", P[6]),
        D[0] & 32768)
      ) {
        we = P[15];
        let N;
        for (N = 0; N < we.length; N += 1) {
          const Ee = en(P, we, N);
          J[N]
            ? (J[N].p(Ee, D), _(J[N], 1))
            : ((J[N] = sn(Ee)), J[N].c(), _(J[N], 1), J[N].m(o, null));
        }
        for (re(), N = we.length; N < J.length; N += 1) xn(N);
        ae();
      }
      if (
        ((!ue || (D[0] & 64 && l !== (l = !P[6]))) && h(o, "aria-hidden", l),
        D[0] & 64 && K(o, "opacity-100", P[6]),
        D[0] & 64 && K(t, "translate-x-64", P[6]),
        D[0] & 8 && jt(f, P[3]),
        (!ue || D[0] & 1) &&
          y !==
            (y =
              P[0] === "dependencies" ? "Dependencies" : "Dev Dependencies") &&
          oe(k, y),
        (!ue || D[0] & 16) && L !== (L = P[4].length + "") && oe(O, L),
        (!ue || D[0] & 2) && q !== (q = P[1].length + "") && oe(F, q),
        P[8]
          ? se
            ? D[0] & 256 && _(se, 1)
            : ((se = rn()), se.c(), _(se, 1), se.m(g, null))
          : se &&
            (re(),
            C(se, 1, 1, () => {
              se = null;
            }),
            ae()),
        P[8]
          ? te &&
            (re(),
            C(te, 1, 1, () => {
              te = null;
            }),
            ae())
          : te
          ? (te.p(P, D), D[0] & 256 && _(te, 1))
          : ((te = an(P)), te.c(), _(te, 1), te.m(le, null)),
        D[0] & 1056)
      ) {
        Oe = P[10];
        let N;
        for (N = 0; N < Oe.length; N += 1) {
          const Ee = Yt(P, Oe, N);
          W[N]
            ? (W[N].p(Ee, D), _(W[N], 1))
            : ((W[N] = on(Ee)), W[N].c(), _(W[N], 1), W[N].m(E, null));
        }
        for (re(), N = Oe.length; N < W.length; N += 1) Vn(N);
        ae();
      }
      P[11] > 1
        ? ne
          ? (ne.p(P, D), D[0] & 2048 && _(ne, 1))
          : ((ne = ln(P)), ne.c(), _(ne, 1), ne.m(d, null))
        : ne &&
          (re(),
          C(ne, 1, 1, () => {
            ne = null;
          }),
          ae());
    },
    i(P) {
      if (!ue) {
        _(r);
        for (let D = 0; D < we.length; D += 1) _(J[D]);
        _(se), _(te);
        for (let D = 0; D < Oe.length; D += 1) _(W[D]);
        _(ne), (ue = !0);
      }
    },
    o(P) {
      C(r), (J = J.filter(Boolean));
      for (let D = 0; D < J.length; D += 1) C(J[D]);
      C(se), C(te), (W = W.filter(Boolean));
      for (let D = 0; D < W.length; D += 1) C(W[D]);
      C(ne), (ue = !1);
    },
    d(P) {
      P && M(e),
        ye[i].d(),
        Qe(J, P),
        se && se.d(),
        te && te.d(),
        Qe(W, P),
        ne && ne.d(),
        (ve = !1),
        qe(Be);
    },
  };
}
function ar(n, e, t) {
  let s,
    i,
    r,
    a,
    o,
    l,
    u,
    d,
    m,
    { selectedTab: f = "dependencies" } = e,
    { entries: b = [] } = e,
    c = 0,
    g = -1,
    v = "",
    y = !1,
    k = !1;
  const R = Dn();
  Xe(n, R, (E) => t(12, (m = E)));
  const S = lt();
  async function L(E) {
    try {
      const ce = await m.mutateAsync(E);
      S.setQueryData([ze.package], (ue) => {
        for (let ve of ce) {
          const { qualifier: Be } = kt(ve.version),
            Fe = `${Be}${ve.latest}`;
          (ue.dependencies[ve.name] = Fe), (ue.devDependencies[ve.name] = Fe);
        }
        return ue;
      }),
        await S.refetchQueries([ze.package]);
    } catch (ce) {
      console.log("Failed to upgrade packages:", { originalError: ce });
    }
  }
  Zs((E) => {
    if (E.shiftKey)
      switch (E.key) {
        case "ArrowRight":
        case "ArrowLeft":
          E.preventDefault(),
            t(
              0,
              (f = f === "dependencies" ? "devDependencies" : "dependencies")
            ),
            t(2, (c = 0)),
            t(5, (g = -1));
          break;
      }
    switch (E.key) {
      case "ArrowUp":
        E.preventDefault(), g > 0 ? t(5, g--, g) : t(5, (g = o.length - 1));
        break;
      case "ArrowDown":
        E.preventDefault(), g < o.length - 1 ? t(5, g++, g) : t(5, (g = 0));
        break;
      case "ArrowLeft":
        c > 0 && (E.preventDefault(), t(2, c--, c), t(5, (g = -1)));
        break;
      case "ArrowRight":
        c < i - 1 && (E.preventDefault(), t(2, c++, c), t(5, (g = -1)));
        break;
      case "Escape":
        E.preventDefault(), y && t(6, (y = !1));
        break;
      case "h":
        k || (E.preventDefault(), t(6, (y = !y)));
    }
  });
  const O = [
      {
        keys: [
          { symbol: "\u2191", rotation: 0 },
          { symbol: "\u2193", rotation: 180 },
        ],
        label: "Switch rows.",
      },
      {
        keys: [
          { symbol: "\u2190", rotation: -90 },
          { symbol: "\u2192", rotation: 90 },
        ],
        label: "Switch pages.",
      },
      {
        keys: [
          { symbol: "\u2190", rotation: -90 },
          { symbol: "\u2192", rotation: 90 },
        ],
        label: "+ Shift, Switch tabs.",
      },
    ],
    j = () => {
      t(6, (y = !y));
    },
    q = () => t(6, (y = !1));
  function F() {
    (v = this.value), t(3, v);
  }
  const A = () => {
      t(7, (k = !0));
    },
    ee = () => {
      t(7, (k = !1));
    },
    le = () => L(u);
  function he(E) {
    (g = E), t(5, g), t(0, f), t(3, v);
  }
  function be(E) {
    (c = E), t(2, c), t(0, f), t(3, v);
  }
  return (
    (n.$$set = (E) => {
      "selectedTab" in E && t(0, (f = E.selectedTab)),
        "entries" in E && t(1, (b = E.entries));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 10 &&
        t(
          18,
          (s = b.filter(
            ({ name: E, version: ce }) =>
              E.toLowerCase().includes(v.toLowerCase()) ||
              ce.toLowerCase().includes(v.toLowerCase())
          ))
        ),
        n.$$.dirty[0] & 262144 && t(11, (i = Math.ceil(s.length / ct))),
        n.$$.dirty[0] & 262144 &&
          t(
            16,
            (r = s
              .map((E) => ({ ...E, isLatest: Mn(E.version, E.latest) }))
              .sort((E, ce) =>
                E.isLatest && ce.isLatest
                  ? 0
                  : E.isLatest && !ce.isLatest
                  ? 1
                  : -1
              ))
          ),
        n.$$.dirty[0] & 1 && f && (t(2, (c = 0)), t(5, (g = -1))),
        n.$$.dirty[0] & 8 && v && (t(2, (c = 0)), t(5, (g = -1))),
        n.$$.dirty[0] & 4 && t(17, (a = c * ct)),
        n.$$.dirty[0] & 196608 && t(10, (o = r.slice(a, a + ct))),
        n.$$.dirty[0] & 65536 &&
          t(
            4,
            ([l, u] = Nn(Un("isLatest"), r)),
            l,
            (t(9, u), t(16, r), t(18, s), t(1, b), t(3, v))
          ),
        n.$$.dirty[0] & 18 && t(8, (d = l.length === b.length));
    }),
    [
      f,
      b,
      c,
      v,
      l,
      g,
      y,
      k,
      d,
      u,
      o,
      i,
      m,
      R,
      L,
      O,
      r,
      a,
      s,
      j,
      q,
      F,
      A,
      ee,
      le,
      he,
      be,
    ]
  );
}
class or extends G {
  constructor(e) {
    super(),
      Z(this, e, ar, rr, x, { selectedTab: 0, entries: 1 }, null, [-1, -1]);
  }
}
const lr = "@greenbot/cli",
  ur = "0.18.2",
  cr = ["greenbot", "cli", "package updater"],
  fr = "An interactive package updater for npm based applications",
  dr = "https://github.com/alanrsoares/greenbot",
  hr = "MIT",
  pr = ["dist/", "bin/"],
  mr = "./bin/greenbot.cjs",
  gr = "module",
  br = {
    dev: "vite",
    build: "vite build",
    serve: "vite preview",
    check: "svelte-check --tsconfig ./tsconfig.json",
    preversion: "yarn build",
    release: "npm publish && git push && git push --tags",
    prepare: "husky install",
  },
  vr = {
    "@sveltejs/vite-plugin-svelte": "^1.0.0-next.49",
    "@tsconfig/svelte": "^3.0.0",
    autoprefixer: "^10.4.7",
    "broadcast-channel": "^4.13.0",
    cssnano: "^5.1.12",
    husky: "^8.0.1",
    postcss: "^8.4.14",
    "postcss-load-config": "^4.0.1",
    prettier: "^2.7.1",
    "pretty-quick": "^3.1.3",
    svelte: "^3.49.0",
    "svelte-check": "^2.8.0",
    "svelte-preprocess": "^4.10.7",
    tailwindcss: "^3.1.5",
    tslib: "^2.4.0",
    typescript: "^4.7.4",
    vite: "^2.9.14",
  },
  _r = {
    "@sveltestack/svelte-query": "^1.6.0",
    "body-parser": "^1.20.0",
    chalk: "^4.1.2",
    cors: "^2.8.5",
    express: "^4.18.1",
    ky: "^0.31.0",
    open: "^8.4.0",
    "package-json": "^7.0.0",
    rambda: "^7.1.4",
    "replace-in-file": "^6.3.5",
    "svelte-icons": "^2.1.0",
  };
var yr = {
  name: lr,
  version: ur,
  keywords: cr,
  description: fr,
  homepage: dr,
  license: hr,
  files: pr,
  bin: mr,
  type: gr,
  scripts: br,
  devDependencies: vr,
  dependencies: _r,
};
const wr = (n) => ({}),
  un = (n) => ({}),
  Or = (n) => ({}),
  cn = (n) => ({});
function Cr(n) {
  let e, t, s, i, r, a, o, l, u, d, m, f, b, c, g;
  const v = n[1].logo,
    y = Le(v, n, n[0], cn),
    k = n[1].version,
    R = Le(k, n, n[0], un),
    S = n[1].default,
    L = Le(S, n, n[0], null);
  return {
    c() {
      (e = w("div")),
        (t = w("header")),
        (s = w("nav")),
        (i = w("h1")),
        (r = w("div")),
        y && y.c(),
        (a = T()),
        (o = w("div")),
        (o.textContent = "_greenbot"),
        (l = T()),
        R && R.c(),
        (u = T()),
        (d = w("main")),
        L && L.c(),
        (m = T()),
        (f = w("footer")),
        (b = w("div")),
        (c = w("span")),
        (c.textContent = `npm-greenbot@v${yr.version}`),
        h(r, "class", "w-12"),
        h(i, "class", "flex items-center gap-2 whitespace-nowrap p-2"),
        h(
          s,
          "class",
          "md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"
        ),
        h(t, "class", "border-b border-granny-smith-apple/50 bg-slate-900/60"),
        h(d, "class", "layout-main svelte-1m49ym4"),
        h(c, "class", "text-sm"),
        h(b, "class", "max-w-xl m-auto text-center"),
        h(e, "class", "layout svelte-1m49ym4");
    },
    m(O, j) {
      $(O, e, j),
        p(e, t),
        p(t, s),
        p(s, i),
        p(i, r),
        y && y.m(r, null),
        p(i, a),
        p(i, o),
        p(s, l),
        R && R.m(s, null),
        p(e, u),
        p(e, d),
        L && L.m(d, null),
        p(e, m),
        p(e, f),
        p(f, b),
        p(b, c),
        (g = !0);
    },
    p(O, [j]) {
      y &&
        y.p &&
        (!g || j & 1) &&
        Pe(y, v, O, O[0], g ? Re(v, O[0], j, Or) : je(O[0]), cn),
        R &&
          R.p &&
          (!g || j & 1) &&
          Pe(R, k, O, O[0], g ? Re(k, O[0], j, wr) : je(O[0]), un),
        L &&
          L.p &&
          (!g || j & 1) &&
          Pe(L, S, O, O[0], g ? Re(S, O[0], j, null) : je(O[0]), null);
    },
    i(O) {
      g || (_(y, O), _(R, O), _(L, O), (g = !0));
    },
    o(O) {
      C(y, O), C(R, O), C(L, O), (g = !1);
    },
    d(O) {
      O && M(e), y && y.d(O), R && R.d(O), L && L.d(O);
    },
  };
}
function kr(n, e, t) {
  let { $$slots: s = {}, $$scope: i } = e;
  return (
    (n.$$set = (r) => {
      "$$scope" in r && t(0, (i = r.$$scope));
    }),
    [i, s]
  );
}
class Lr extends G {
  constructor(e) {
    super(), Z(this, e, kr, Cr, x, {});
  }
}
function Rr(n) {
  let e, t, s, i, r, a, o, l, u, d;
  return (
    (s = new Kn({})),
    {
      c() {
        (e = w("a")),
          (t = w("div")),
          U(s.$$.fragment),
          (i = T()),
          (r = w("div")),
          (a = z(n[0])),
          (o = z(" @ ")),
          (l = z(n[1])),
          h(t, "class", "h-10"),
          h(r, "class", "font-mono font-medium"),
          h(e, "target", "_blank"),
          h(e, "href", (u = `https://www.npmjs.com/package/${n[0]}`)),
          h(e, "class", "svelte-8yqr22");
      },
      m(m, f) {
        $(m, e, f),
          p(e, t),
          Q(s, t, null),
          p(e, i),
          p(e, r),
          p(r, a),
          p(r, o),
          p(r, l),
          (d = !0);
      },
      p(m, [f]) {
        (!d || f & 1) && oe(a, m[0]),
          (!d || f & 2) && oe(l, m[1]),
          (!d ||
            (f & 1 && u !== (u = `https://www.npmjs.com/package/${m[0]}`))) &&
            h(e, "href", u);
      },
      i(m) {
        d || (_(s.$$.fragment, m), (d = !0));
      },
      o(m) {
        C(s.$$.fragment, m), (d = !1);
      },
      d(m) {
        m && M(e), I(s);
      },
    }
  );
}
function Pr(n, e, t) {
  let { name: s = "" } = e,
    { version: i = "" } = e;
  return (
    (n.$$set = (r) => {
      "name" in r && t(0, (s = r.name)),
        "version" in r && t(1, (i = r.version));
    }),
    [s, i]
  );
}
class jr extends G {
  constructor(e) {
    super(), Z(this, e, Pr, Rr, x, { name: 0, version: 1 });
  }
}
function fn(n, e, t) {
  const s = n.slice();
  return (s[3] = e[t]), s;
}
function dn(n) {
  let e,
    t = n[3].label + "",
    s,
    i,
    r,
    a,
    o;
  return {
    c() {
      (e = w("button")),
        (s = z(t)),
        (i = T()),
        h(e, "data-value", (r = n[3].value)),
        h(e, "class", "svelte-u0zq3l"),
        K(e, "bg-castleton-green", n[0] === n[3].value);
    },
    m(l, u) {
      $(l, e, u),
        p(e, s),
        p(e, i),
        a ||
          ((o = de(e, "click", function () {
            _t(n[2].bind(this, n[3])) &&
              n[2].bind(this, n[3]).apply(this, arguments);
          })),
          (a = !0));
    },
    p(l, u) {
      (n = l),
        u & 2 && t !== (t = n[3].label + "") && oe(s, t),
        u & 2 && r !== (r = n[3].value) && h(e, "data-value", r),
        u & 3 && K(e, "bg-castleton-green", n[0] === n[3].value);
    },
    d(l) {
      l && M(e), (a = !1), o();
    },
  };
}
function qr(n) {
  let e,
    t = n[1],
    s = [];
  for (let i = 0; i < t.length; i += 1) s[i] = dn(fn(n, t, i));
  return {
    c() {
      e = w("div");
      for (let i = 0; i < s.length; i += 1) s[i].c();
      h(e, "class", "container svelte-u0zq3l");
    },
    m(i, r) {
      $(i, e, r);
      for (let a = 0; a < s.length; a += 1) s[a].m(e, null);
    },
    p(i, [r]) {
      if (r & 7) {
        t = i[1];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const o = fn(i, t, a);
          s[a] ? s[a].p(o, r) : ((s[a] = dn(o)), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1) s[a].d(1);
        s.length = t.length;
      }
    },
    i: B,
    o: B,
    d(i) {
      i && M(e), Qe(s, i);
    },
  };
}
function Mr(n, e, t) {
  let { selectedTab: s = "" } = e,
    { tabs: i = [] } = e,
    { onChange: r } = e;
  return (
    (n.$$set = (a) => {
      "selectedTab" in a && t(0, (s = a.selectedTab)),
        "tabs" in a && t(1, (i = a.tabs)),
        "onChange" in a && t(2, (r = a.onChange));
    }),
    [s, i, r]
  );
}
class $r extends G {
  constructor(e) {
    super(), Z(this, e, Mr, qr, x, { selectedTab: 0, tabs: 1, onChange: 2 });
  }
}
function Fr(n) {
  let e, t, s;
  return {
    c() {
      (e = X("svg")),
        (t = X("path")),
        (s = X("path")),
        h(t, "opacity", "0.2"),
        h(t, "fill-rule", "evenodd"),
        h(t, "clip-rule", "evenodd"),
        h(
          t,
          "d",
          "M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        ),
        h(t, "fill", "currentColor"),
        h(
          s,
          "d",
          "M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        ),
        h(s, "fill", "currentColor"),
        h(e, "stroke", "currentColor"),
        h(e, "fill", "none"),
        h(e, "stroke-width", "0"),
        h(e, "viewBox", "0 0 24 24"),
        h(e, "height", "1em"),
        h(e, "width", "1em"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        K(e, "animate-spin", n[0]);
    },
    m(i, r) {
      $(i, e, r), p(e, t), p(e, s);
    },
    p(i, [r]) {
      r & 1 && K(e, "animate-spin", i[0]);
    },
    i: B,
    o: B,
    d(i) {
      i && M(e);
    },
  };
}
function Er(n, e, t) {
  let { animated: s = !1 } = e;
  return (
    (n.$$set = (i) => {
      "animated" in i && t(0, (s = i.animated));
    }),
    [s]
  );
}
class Sr extends G {
  constructor(e) {
    super(), Z(this, e, Er, Fr, x, { animated: 0 });
  }
}
function hn(n) {
  let e, t, s, i, r, a;
  return (
    (s = new Sr({ props: { animated: !0 } })),
    {
      c() {
        (e = w("div")),
          (t = w("div")),
          U(s.$$.fragment),
          (i = T()),
          (r = w("span")),
          (r.textContent = "Loading dependencies"),
          h(t, "class", "h-4 w-4"),
          h(
            e,
            "class",
            "border-2 border-slate-900 bg-slate-900/60 rounded-3xl flex justify-center items-center overflow-hidden p-8 gap-2"
          );
      },
      m(o, l) {
        $(o, e, l), p(e, t), Q(s, t, null), p(e, i), p(e, r), (a = !0);
      },
      i(o) {
        a || (_(s.$$.fragment, o), (a = !0));
      },
      o(o) {
        C(s.$$.fragment, o), (a = !1);
      },
      d(o) {
        o && M(e), I(s);
      },
    }
  );
}
function pn(n) {
  let e, t, s, i, r;
  e = new $r({
    props: {
      onChange: n[4],
      selectedTab: n[0],
      tabs: [
        { value: "dependencies", label: "Dependencies" },
        { value: "devDependencies", label: "Dev Dependencies" },
      ],
    },
  });
  function a(l) {
    n[7](l);
  }
  let o = { entries: n[2] };
  return (
    n[0] !== void 0 && (o.selectedTab = n[0]),
    (s = new or({ props: o })),
    Ue.push(() => Ct(s, "selectedTab", a)),
    {
      c() {
        U(e.$$.fragment), (t = T()), U(s.$$.fragment);
      },
      m(l, u) {
        Q(e, l, u), $(l, t, u), Q(s, l, u), (r = !0);
      },
      p(l, u) {
        const d = {};
        u & 1 && (d.selectedTab = l[0]), e.$set(d);
        const m = {};
        u & 4 && (m.entries = l[2]),
          !i && u & 1 && ((i = !0), (m.selectedTab = l[0]), Ot(() => (i = !1))),
          s.$set(m);
      },
      i(l) {
        r || (_(e.$$.fragment, l), _(s.$$.fragment, l), (r = !0));
      },
      o(l) {
        C(e.$$.fragment, l), C(s.$$.fragment, l), (r = !1);
      },
      d(l) {
        I(e, l), l && M(t), I(s, l);
      },
    }
  );
}
function Ar(n) {
  let e,
    t,
    s,
    i = n[1].isLoading && hn(),
    r = n[1].data && pn(n);
  return {
    c() {
      (e = w("div")),
        i && i.c(),
        (t = T()),
        r && r.c(),
        h(e, "class", "w-full grid gap-4");
    },
    m(a, o) {
      $(a, e, o), i && i.m(e, null), p(e, t), r && r.m(e, null), (s = !0);
    },
    p(a, o) {
      a[1].isLoading
        ? i
          ? o & 2 && _(i, 1)
          : ((i = hn()), i.c(), _(i, 1), i.m(e, t))
        : i &&
          (re(),
          C(i, 1, 1, () => {
            i = null;
          }),
          ae()),
        a[1].data
          ? r
            ? (r.p(a, o), o & 2 && _(r, 1))
            : ((r = pn(a)), r.c(), _(r, 1), r.m(e, null))
          : r &&
            (re(),
            C(r, 1, 1, () => {
              r = null;
            }),
            ae());
    },
    i(a) {
      s || (_(i), _(r), (s = !0));
    },
    o(a) {
      C(i), C(r), (s = !1);
    },
    d(a) {
      a && M(e), i && i.d(), r && r.d();
    },
  };
}
function Tr(n) {
  let e, t;
  return (
    (e = new Ws({ props: { mood: n[3], slot: "logo" } })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(s, i) {
        Q(e, s, i), (t = !0);
      },
      p(s, i) {
        const r = {};
        i & 8 && (r.mood = s[3]), e.$set(r);
      },
      i(s) {
        t || (_(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        I(e, s);
      },
    }
  );
}
function mn(n) {
  let e, t;
  return (
    (e = new jr({
      props: { name: n[1].data.name, version: n[1].data.version },
    })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(s, i) {
        Q(e, s, i), (t = !0);
      },
      p(s, i) {
        const r = {};
        i & 2 && (r.name = s[1].data.name),
          i & 2 && (r.version = s[1].data.version),
          e.$set(r);
      },
      i(s) {
        t || (_(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        I(e, s);
      },
    }
  );
}
function Dr(n) {
  let e,
    t,
    s = n[1].data && mn(n);
  return {
    c() {
      (e = w("div")), s && s.c(), h(e, "slot", "version");
    },
    m(i, r) {
      $(i, e, r), s && s.m(e, null), (t = !0);
    },
    p(i, r) {
      i[1].data
        ? s
          ? (s.p(i, r), r & 2 && _(s, 1))
          : ((s = mn(i)), s.c(), _(s, 1), s.m(e, null))
        : s &&
          (re(),
          C(s, 1, 1, () => {
            s = null;
          }),
          ae());
    },
    i(i) {
      t || (_(s), (t = !0));
    },
    o(i) {
      C(s), (t = !1);
    },
    d(i) {
      i && M(e), s && s.d();
    },
  };
}
function Qr(n) {
  let e, t;
  return (
    (e = new Lr({
      props: {
        $$slots: { version: [Dr], logo: [Tr], default: [Ar] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(s, i) {
        Q(e, s, i), (t = !0);
      },
      p(s, [i]) {
        const r = {};
        i & 1039 && (r.$$scope = { dirty: i, ctx: s }), e.$set(r);
      },
      i(s) {
        t || (_(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        I(e, s);
      },
    }
  );
}
function Ir([n, e], t, s) {
  return { name: n, version: e, latest: t[n], meta: s[n] };
}
function Ur(n, e, t) {
  let s,
    i,
    r,
    a,
    o = "dependencies";
  function l({ value: b }) {
    t(0, (o = b));
  }
  function u(b, c) {
    return b.filter(([g, v]) => c[g] !== v);
  }
  function d(b) {
    if (b.isLoading) return "asleep";
    if (b.error) return "dead";
    if (b.data) {
      const { dependencies: c, devDependencies: g, resolutions: v } = b.data,
        y = Object.entries({ ...c, ...g });
      return u(y, b.data.resolutions).filter(([R, S]) => !Mn(S, v[R])).length
        ? "angry"
        : "happy";
    }
    return "awake";
  }
  const m = Vs();
  Xe(n, m, (b) => t(1, (a = b)));
  function f(b) {
    (o = b), t(0, o);
  }
  return (
    (n.$$.update = () => {
      var b;
      n.$$.dirty & 2 && t(3, (s = d(a))),
        n.$$.dirty & 3 &&
          t(
            6,
            (i =
              a.isLoading || a.error
                ? []
                : u(
                    Object.entries((b = a.data[o]) != null ? b : {}),
                    a.data.resolutions
                  ))
          ),
        n.$$.dirty & 66 &&
          t(2, (r = i.map((c) => Ir(c, a.data.resolutions, a.data.meta))));
    }),
    [o, a, r, s, l, m, i, f]
  );
}
class zr extends G {
  constructor(e) {
    super(), Z(this, e, Ur, Qr, x, {});
  }
}
function Nr(n) {
  let e, t;
  return (
    (e = new zr({})),
    {
      c() {
        U(e.$$.fragment);
      },
      m(s, i) {
        Q(e, s, i), (t = !0);
      },
      i(s) {
        t || (_(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        I(e, s);
      },
    }
  );
}
function Hr(n) {
  let e, t;
  return (
    (e = new Ms({
      props: { client: n[0], $$slots: { default: [Nr] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(s, i) {
        Q(e, s, i), (t = !0);
      },
      p(s, [i]) {
        const r = {};
        i & 2 && (r.$$scope = { dirty: i, ctx: s }), e.$set(r);
      },
      i(s) {
        t || (_(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        I(e, s);
      },
    }
  );
}
function Br(n) {
  return [new Pn()];
}
class Kr extends G {
  constructor(e) {
    super(), Z(this, e, Br, Hr, x, {});
  }
}
new Kr({ target: document.getElementById("app") });
