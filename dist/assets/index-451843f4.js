(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = t(r);
    fetch(r.href, i);
  }
})();
function X() {}
function U(s, e) {
  for (const t in e) s[t] = e[t];
  return s;
}
function kn(s) {
  return s();
}
function Mt() {
  return Object.create(null);
}
function be(s) {
  s.forEach(kn);
}
function Ke(s) {
  return typeof s == "function";
}
function H(s, e) {
  return s != s
    ? e == e
    : s !== e || (s && typeof s == "object") || typeof s == "function";
}
function os(s) {
  return Object.keys(s).length === 0;
}
function Ln(s, ...e) {
  if (s == null) return X;
  const t = s.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Ve(s, e, t) {
  s.$$.on_destroy.push(Ln(e, t));
}
function re(s, e, t, n) {
  if (s) {
    const r = Rn(s, e, t, n);
    return s[0](r);
  }
}
function Rn(s, e, t, n) {
  return s[1] && n ? U(t.ctx.slice(), s[1](n(e))) : t.ctx;
}
function ie(s, e, t, n) {
  if (s[2] && n) {
    const r = s[2](n(t));
    if (e.dirty === void 0) return r;
    if (typeof r == "object") {
      const i = [],
        o = Math.max(e.dirty.length, r.length);
      for (let l = 0; l < o; l += 1) i[l] = e.dirty[l] | r[l];
      return i;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function oe(s, e, t, n, r, i) {
  if (r) {
    const o = Rn(e, t, n, i);
    s.p(o, r);
  }
}
function le(s) {
  if (s.ctx.length > 32) {
    const e = [],
      t = s.ctx.length / 32;
    for (let n = 0; n < t; n++) e[n] = -1;
    return e;
  }
  return -1;
}
function Y(s) {
  const e = {};
  for (const t in s) t[0] !== "$" && (e[t] = s[t]);
  return e;
}
function qt(s, e) {
  const t = {};
  e = new Set(e);
  for (const n in s) !e.has(n) && n[0] !== "$" && (t[n] = s[n]);
  return t;
}
function ls(s) {
  return s && Ke(s.destroy) ? s.destroy : X;
}
function g(s, e) {
  s.appendChild(e);
}
function A(s, e, t) {
  s.insertBefore(e, t || null);
}
function T(s) {
  s.parentNode && s.parentNode.removeChild(s);
}
function Ae(s, e) {
  for (let t = 0; t < s.length; t += 1) s[t] && s[t].d(e);
}
function R(s) {
  return document.createElement(s);
}
function ge(s) {
  return document.createElementNS("http://www.w3.org/2000/svg", s);
}
function j(s) {
  return document.createTextNode(s);
}
function D() {
  return j(" ");
}
function On() {
  return j("");
}
function de(s, e, t, n) {
  return s.addEventListener(e, t, n), () => s.removeEventListener(e, t, n);
}
function m(s, e, t) {
  t == null
    ? s.removeAttribute(e)
    : s.getAttribute(e) !== t && s.setAttribute(e, t);
}
function Je(s, e) {
  for (const t in e) m(s, t, e[t]);
}
function as(s) {
  return Array.from(s.childNodes);
}
function ae(s, e) {
  (e = "" + e), s.data !== e && (s.data = e);
}
function Tt(s, e) {
  s.value = e ?? "";
}
function z(s, e, t) {
  s.classList[t ? "add" : "remove"](e);
}
let Ne;
function $e(s) {
  Ne = s;
}
function tt() {
  if (!Ne) throw new Error("Function called outside component initialization");
  return Ne;
}
function _t(s) {
  tt().$$.on_mount.push(s);
}
function vt(s) {
  tt().$$.on_destroy.push(s);
}
function us(s, e) {
  return tt().$$.context.set(s, e), e;
}
function cs(s) {
  return tt().$$.context.get(s);
}
function fs(s, e) {
  const t = s.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const qe = [],
  je = [];
let Te = [];
const ut = [],
  ds = Promise.resolve();
let ct = !1;
function hs() {
  ct || ((ct = !0), ds.then(Pn));
}
function ft(s) {
  Te.push(s);
}
function wt(s) {
  ut.push(s);
}
const it = new Set();
let Ee = 0;
function Pn() {
  if (Ee !== 0) return;
  const s = Ne;
  do {
    try {
      for (; Ee < qe.length; ) {
        const e = qe[Ee];
        Ee++, $e(e), ps(e.$$);
      }
    } catch (e) {
      throw ((qe.length = 0), (Ee = 0), e);
    }
    for ($e(null), qe.length = 0, Ee = 0; je.length; ) je.pop()();
    for (let e = 0; e < Te.length; e += 1) {
      const t = Te[e];
      it.has(t) || (it.add(t), t());
    }
    Te.length = 0;
  } while (qe.length);
  for (; ut.length; ) ut.pop()();
  (ct = !1), it.clear(), $e(s);
}
function ps(s) {
  if (s.fragment !== null) {
    s.update(), be(s.before_update);
    const e = s.dirty;
    (s.dirty = [-1]),
      s.fragment && s.fragment.p(s.ctx, e),
      s.after_update.forEach(ft);
  }
}
function ms(s) {
  const e = [],
    t = [];
  Te.forEach((n) => (s.indexOf(n) === -1 ? e.push(n) : t.push(n))),
    t.forEach((n) => n()),
    (Te = e);
}
const Ge = new Set();
let Re;
function ne() {
  Re = { r: 0, c: [], p: Re };
}
function se() {
  Re.r || be(Re.c), (Re = Re.p);
}
function _(s, e) {
  s && s.i && (Ge.delete(s), s.i(e));
}
function C(s, e, t, n) {
  if (s && s.o) {
    if (Ge.has(s)) return;
    Ge.add(s),
      Re.c.push(() => {
        Ge.delete(s), n && (t && s.d(1), n());
      }),
      s.o(e);
  } else n && n();
}
function me(s, e) {
  const t = {},
    n = {},
    r = { $$scope: 1 };
  let i = s.length;
  for (; i--; ) {
    const o = s[i],
      l = e[i];
    if (l) {
      for (const a in o) a in l || (n[a] = 1);
      for (const a in l) r[a] || ((t[a] = l[a]), (r[a] = 1));
      s[i] = l;
    } else for (const a in o) r[a] = 1;
  }
  for (const o in n) o in t || (t[o] = void 0);
  return t;
}
function ye(s) {
  return typeof s == "object" && s !== null ? s : {};
}
function Ct(s, e, t) {
  const n = s.$$.props[e];
  n !== void 0 && ((s.$$.bound[n] = t), t(s.$$.ctx[n]));
}
function N(s) {
  s && s.c();
}
function Q(s, e, t, n) {
  const { fragment: r, after_update: i } = s.$$;
  r && r.m(e, t),
    n ||
      ft(() => {
        const o = s.$$.on_mount.map(kn).filter(Ke);
        s.$$.on_destroy ? s.$$.on_destroy.push(...o) : be(o),
          (s.$$.on_mount = []);
      }),
    i.forEach(ft);
}
function $(s, e) {
  const t = s.$$;
  t.fragment !== null &&
    (ms(t.after_update),
    be(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function gs(s, e) {
  s.$$.dirty[0] === -1 && (qe.push(s), hs(), s.$$.dirty.fill(0)),
    (s.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function V(s, e, t, n, r, i, o, l = [-1]) {
  const a = Ne;
  $e(s);
  const u = (s.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: X,
    not_equal: r,
    bound: Mt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: Mt(),
    dirty: l,
    skip_bound: !1,
    root: e.target || a.$$.root,
  });
  o && o(u.root);
  let c = !1;
  if (
    ((u.ctx = t
      ? t(s, e.props || {}, (y, d, ...h) => {
          const f = h.length ? h[0] : d;
          return (
            u.ctx &&
              r(u.ctx[y], (u.ctx[y] = f)) &&
              (!u.skip_bound && u.bound[y] && u.bound[y](f), c && gs(s, y)),
            d
          );
        })
      : []),
    u.update(),
    (c = !0),
    be(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const y = as(e.target);
      u.fragment && u.fragment.l(y), y.forEach(T);
    } else u.fragment && u.fragment.c();
    e.intro && _(s.$$.fragment),
      Q(s, e.target, e.anchor, e.customElement),
      Pn();
  }
  $e(a);
}
class J {
  $destroy() {
    $(this, 1), (this.$destroy = X);
  }
  $on(e, t) {
    if (!Ke(t)) return X;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      n.push(t),
      () => {
        const r = n.indexOf(t);
        r !== -1 && n.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !os(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
class De {
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
const Ue = typeof window > "u" || "Deno" in window;
function fe() {}
function bs(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function dt(s) {
  return typeof s == "number" && s >= 0 && s !== 1 / 0;
}
function Sn(s, e) {
  return Math.max(s + (e || 0) - Date.now(), 0);
}
function Qe(s, e, t) {
  return ze(s)
    ? typeof e == "function"
      ? { ...t, queryKey: s, queryFn: e }
      : { ...e, queryKey: s }
    : s;
}
function ys(s, e, t) {
  return ze(s)
    ? typeof e == "function"
      ? { ...t, mutationKey: s, mutationFn: e }
      : { ...e, mutationKey: s }
    : typeof s == "function"
    ? { ...e, mutationFn: s }
    : { ...s };
}
function ve(s, e, t) {
  return ze(s) ? [{ ...e, queryKey: s }, t] : [s || {}, e];
}
function At(s, e) {
  const {
    type: t = "all",
    exact: n,
    fetchStatus: r,
    predicate: i,
    queryKey: o,
    stale: l,
  } = s;
  if (ze(o)) {
    if (n) {
      if (e.queryHash !== kt(o, e.options)) return !1;
    } else if (!Ye(e.queryKey, o)) return !1;
  }
  if (t !== "all") {
    const a = e.isActive();
    if ((t === "active" && !a) || (t === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && e.isStale() !== l) ||
    (typeof r < "u" && r !== e.state.fetchStatus) ||
    (i && !i(e))
  );
}
function Ft(s, e) {
  const { exact: t, fetching: n, predicate: r, mutationKey: i } = s;
  if (ze(i)) {
    if (!e.options.mutationKey) return !1;
    if (t) {
      if (Oe(e.options.mutationKey) !== Oe(i)) return !1;
    } else if (!Ye(e.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof n == "boolean" && (e.state.status === "loading") !== n) ||
    (r && !r(e))
  );
}
function kt(s, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Oe)(s);
}
function Oe(s) {
  return JSON.stringify(s, (e, t) =>
    pt(t)
      ? Object.keys(t)
          .sort()
          .reduce((n, r) => ((n[r] = t[r]), n), {})
      : t
  );
}
function Ye(s, e) {
  return En(s, e);
}
function En(s, e) {
  return s === e
    ? !0
    : typeof s != typeof e
    ? !1
    : s && e && typeof s == "object" && typeof e == "object"
    ? !Object.keys(e).some((t) => !En(s[t], e[t]))
    : !1;
}
function Mn(s, e) {
  if (s === e) return s;
  const t = Dt(s) && Dt(e);
  if (t || (pt(s) && pt(e))) {
    const n = t ? s.length : Object.keys(s).length,
      r = t ? e : Object.keys(e),
      i = r.length,
      o = t ? [] : {};
    let l = 0;
    for (let a = 0; a < i; a++) {
      const u = t ? a : r[a];
      (o[u] = Mn(s[u], e[u])), o[u] === s[u] && l++;
    }
    return n === i && l === n ? s : o;
  }
  return e;
}
function ht(s, e) {
  if ((s && !e) || (e && !s)) return !1;
  for (const t in s) if (s[t] !== e[t]) return !1;
  return !0;
}
function Dt(s) {
  return Array.isArray(s) && s.length === Object.keys(s).length;
}
function pt(s) {
  if (!It(s)) return !1;
  const e = s.constructor;
  if (typeof e > "u") return !0;
  const t = e.prototype;
  return !(!It(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function It(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function ze(s) {
  return Array.isArray(s);
}
function qn(s) {
  return new Promise((e) => {
    setTimeout(e, s);
  });
}
function Qt(s) {
  qn(0).then(s);
}
function _s() {
  if (typeof AbortController == "function") return new AbortController();
}
function mt(s, e, t) {
  return t.isDataEqual != null && t.isDataEqual(s, e)
    ? s
    : typeof t.structuralSharing == "function"
    ? t.structuralSharing(s, e)
    : t.structuralSharing !== !1
    ? Mn(s, e)
    : e;
}
class vs extends De {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!Ue && window.addEventListener) {
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
const Xe = new vs(),
  $t = ["online", "offline"];
class ws extends De {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!Ue && window.addEventListener) {
          const t = () => e();
          return (
            $t.forEach((n) => {
              window.addEventListener(n, t, !1);
            }),
            () => {
              $t.forEach((n) => {
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
const xe = new ws();
function Cs(s) {
  return Math.min(1e3 * 2 ** s, 3e4);
}
function nt(s) {
  return (s ?? "online") === "online" ? xe.isOnline() : !0;
}
class Tn {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
}
function Ze(s) {
  return s instanceof Tn;
}
function An(s) {
  let e = !1,
    t = 0,
    n = !1,
    r,
    i,
    o;
  const l = new Promise((b, w) => {
      (i = b), (o = w);
    }),
    a = (b) => {
      n || (h(new Tn(b)), s.abort == null || s.abort());
    },
    u = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    y = () => !Xe.isFocused() || (s.networkMode !== "always" && !xe.isOnline()),
    d = (b) => {
      n ||
        ((n = !0),
        s.onSuccess == null || s.onSuccess(b),
        r == null || r(),
        i(b));
    },
    h = (b) => {
      n ||
        ((n = !0), s.onError == null || s.onError(b), r == null || r(), o(b));
    },
    f = () =>
      new Promise((b) => {
        (r = (w) => {
          const k = n || !y();
          return k && b(w), k;
        }),
          s.onPause == null || s.onPause();
      }).then(() => {
        (r = void 0), n || s.onContinue == null || s.onContinue();
      }),
    p = () => {
      if (n) return;
      let b;
      try {
        b = s.fn();
      } catch (w) {
        b = Promise.reject(w);
      }
      Promise.resolve(b)
        .then(d)
        .catch((w) => {
          var k, O;
          if (n) return;
          const q = (k = s.retry) != null ? k : 3,
            P = (O = s.retryDelay) != null ? O : Cs,
            v = typeof P == "function" ? P(t, w) : P,
            L =
              q === !0 ||
              (typeof q == "number" && t < q) ||
              (typeof q == "function" && q(t, w));
          if (e || !L) {
            h(w);
            return;
          }
          t++,
            s.onFail == null || s.onFail(t, w),
            qn(v)
              .then(() => {
                if (y()) return f();
              })
              .then(() => {
                e ? h(w) : p();
              });
        });
    };
  return (
    nt(s.networkMode) ? p() : f().then(p),
    {
      promise: l,
      cancel: a,
      continue: () => ((r == null ? void 0 : r()) ? l : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const Lt = console;
function ks() {
  let s = [],
    e = 0,
    t = (c) => {
      c();
    },
    n = (c) => {
      c();
    };
  const r = (c) => {
      let y;
      e++;
      try {
        y = c();
      } finally {
        e--, e || l();
      }
      return y;
    },
    i = (c) => {
      e
        ? s.push(c)
        : Qt(() => {
            t(c);
          });
    },
    o =
      (c) =>
      (...y) => {
        i(() => {
          c(...y);
        });
      },
    l = () => {
      const c = s;
      (s = []),
        c.length &&
          Qt(() => {
            n(() => {
              c.forEach((y) => {
                t(y);
              });
            });
          });
    };
  return {
    batch: r,
    batchCalls: o,
    schedule: i,
    setNotifyFunction: (c) => {
      t = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
  };
}
const W = ks();
class Fn {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      dt(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      e ?? (Ue ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class Ls extends Fn {
  constructor(e) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.cache = e.cache),
      (this.logger = e.logger || Lt),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.initialState = e.state || Rs(this.options)),
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
    const n = mt(this.state.data, e, this.options);
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
      n ? n.then(fe).catch(fe) : Promise.resolve()
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
      !Sn(this.state.dataUpdatedAt, e)
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
    var n, r;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && t != null && t.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const h = this.observers.find((f) => f.options.queryFn);
      h && this.setOptions(h.options);
    }
    Array.isArray(this.options.queryKey);
    const o = _s(),
      l = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      a = (h) => {
        Object.defineProperty(h, "signal", {
          enumerable: !0,
          get: () => {
            if (o) return (this.abortSignalConsumed = !0), o.signal;
          },
        });
      };
    a(l);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(l))
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
          ((r = c.fetchOptions) == null ? void 0 : r.meta))
    ) {
      var y;
      this.dispatch({
        type: "fetch",
        meta: (y = c.fetchOptions) == null ? void 0 : y.meta,
      });
    }
    const d = (h) => {
      if (
        ((Ze(h) && h.silent) || this.dispatch({ type: "error", error: h }),
        !Ze(h))
      ) {
        var f, p, b, w;
        (f = (p = this.cache.config).onError) == null || f.call(p, h, this),
          (b = (w = this.cache.config).onSettled) == null ||
            b.call(w, this.state.data, h, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = An({
        fn: c.fetchFn,
        abort: o == null ? void 0 : o.abort.bind(o),
        onSuccess: (h) => {
          var f, p, b, w;
          if (typeof h > "u") {
            d(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(h),
            (f = (p = this.cache.config).onSuccess) == null ||
              f.call(p, h, this),
            (b = (w = this.cache.config).onSettled) == null ||
              b.call(w, h, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: d,
        onFail: (h, f) => {
          this.dispatch({ type: "failed", failureCount: h, error: f });
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
      var r, i;
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
            fetchMeta: (r = e.meta) != null ? r : null,
            fetchStatus: nt(this.options.networkMode) ? "fetching" : "paused",
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
          const o = e.error;
          return Ze(o) && o.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...n,
                error: o,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: o,
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
      W.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(e);
        }),
          this.cache.notify({ query: this, type: "updated", action: e });
      });
  }
}
function Rs(s) {
  const e =
      typeof s.initialData == "function" ? s.initialData() : s.initialData,
    t = typeof e < "u",
    n = t
      ? typeof s.initialDataUpdatedAt == "function"
        ? s.initialDataUpdatedAt()
        : s.initialDataUpdatedAt
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
class Os extends De {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(e, t, n) {
    var r;
    const i = t.queryKey,
      o = (r = t.queryHash) != null ? r : kt(i, t);
    let l = this.get(o);
    return (
      l ||
        ((l = new Ls({
          cache: this,
          logger: e.getLogger(),
          queryKey: i,
          queryHash: o,
          options: e.defaultQueryOptions(t),
          state: n,
          defaultOptions: e.getQueryDefaults(i),
        })),
        this.add(l)),
      l
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
    W.batch(() => {
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
    const [n] = ve(e, t);
    return (
      typeof n.exact > "u" && (n.exact = !0), this.queries.find((r) => At(n, r))
    );
  }
  findAll(e, t) {
    const [n] = ve(e, t);
    return Object.keys(n).length > 0
      ? this.queries.filter((r) => At(n, r))
      : this.queries;
  }
  notify(e) {
    W.batch(() => {
      this.listeners.forEach(({ listener: t }) => {
        t(e);
      });
    });
  }
  onFocus() {
    W.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    W.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class Ps extends Fn {
  constructor(e) {
    super(),
      (this.defaultOptions = e.defaultOptions),
      (this.mutationId = e.mutationId),
      (this.mutationCache = e.mutationCache),
      (this.logger = e.logger || Lt),
      (this.observers = []),
      (this.state = e.state || Dn()),
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
          (this.retryer = An({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (S, M) => {
              this.dispatch({ type: "failed", failureCount: S, error: M });
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
      var n, r, i, o, l, a, u, c;
      if (!t) {
        var y, d, h, f;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((y = (d = this.mutationCache.config).onMutate) == null
            ? void 0
            : y.call(d, this.state.variables, this));
        const S = await ((h = (f = this.options).onMutate) == null
          ? void 0
          : h.call(f, this.state.variables));
        S !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: S,
            variables: this.state.variables,
          });
      }
      const L = await e();
      return (
        await ((n = (r = this.mutationCache.config).onSuccess) == null
          ? void 0
          : n.call(r, L, this.state.variables, this.state.context, this)),
        await ((i = (o = this.options).onSuccess) == null
          ? void 0
          : i.call(o, L, this.state.variables, this.state.context)),
        await ((l = (a = this.mutationCache.config).onSettled) == null
          ? void 0
          : l.call(a, L, null, this.state.variables, this.state.context, this)),
        await ((u = (c = this.options).onSettled) == null
          ? void 0
          : u.call(c, L, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: L }),
        L
      );
    } catch (L) {
      try {
        var p, b, w, k, O, q, P, v;
        throw (
          (await ((p = (b = this.mutationCache.config).onError) == null
            ? void 0
            : p.call(b, L, this.state.variables, this.state.context, this)),
          await ((w = (k = this.options).onError) == null
            ? void 0
            : w.call(k, L, this.state.variables, this.state.context)),
          await ((O = (q = this.mutationCache.config).onSettled) == null
            ? void 0
            : O.call(
                q,
                void 0,
                L,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((P = (v = this.options).onSettled) == null
            ? void 0
            : P.call(v, void 0, L, this.state.variables, this.state.context)),
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
            isPaused: !nt(this.options.networkMode),
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
      W.batch(() => {
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
function Dn() {
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
class Ss extends De {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(e, t, n) {
    const r = new Ps({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(t),
      state: n,
      defaultOptions: t.mutationKey
        ? e.getMutationDefaults(t.mutationKey)
        : void 0,
    });
    return this.add(r), r;
  }
  add(e) {
    this.mutations.push(e), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    (this.mutations = this.mutations.filter((t) => t !== e)),
      this.notify({ type: "removed", mutation: e });
  }
  clear() {
    W.batch(() => {
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
      this.mutations.find((t) => Ft(e, t))
    );
  }
  findAll(e) {
    return this.mutations.filter((t) => Ft(e, t));
  }
  notify(e) {
    W.batch(() => {
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
          return W.batch(() =>
            t.reduce(
              (n, r) => n.then(() => r.continue().catch(fe)),
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
function Es() {
  return {
    onFetch: (s) => {
      s.fetchFn = () => {
        var e, t, n, r, i, o;
        const l =
            (e = s.fetchOptions) == null || (t = e.meta) == null
              ? void 0
              : t.refetchPage,
          a =
            (n = s.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.fetchMore,
          u = a == null ? void 0 : a.pageParam,
          c = (a == null ? void 0 : a.direction) === "forward",
          y = (a == null ? void 0 : a.direction) === "backward",
          d = ((i = s.state.data) == null ? void 0 : i.pages) || [],
          h = ((o = s.state.data) == null ? void 0 : o.pageParams) || [];
        let f = h,
          p = !1;
        const b = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => {
                var L;
                if ((L = s.signal) != null && L.aborted) p = !0;
                else {
                  var S;
                  (S = s.signal) == null ||
                    S.addEventListener("abort", () => {
                      p = !0;
                    });
                }
                return s.signal;
              },
            });
          },
          w = s.options.queryFn || (() => Promise.reject("Missing queryFn")),
          k = (v, L, S, M) => (
            (f = M ? [L, ...f] : [...f, L]), M ? [S, ...v] : [...v, S]
          ),
          O = (v, L, S, M) => {
            if (p) return Promise.reject("Cancelled");
            if (typeof S > "u" && !L && v.length) return Promise.resolve(v);
            const K = {
              queryKey: s.queryKey,
              pageParam: S,
              meta: s.options.meta,
            };
            b(K);
            const ce = w(K);
            return Promise.resolve(ce).then((Pe) => k(v, S, Pe, M));
          };
        let q;
        if (!d.length) q = O([]);
        else if (c) {
          const v = typeof u < "u",
            L = v ? u : Nt(s.options, d);
          q = O(d, v, L);
        } else if (y) {
          const v = typeof u < "u",
            L = v ? u : Ms(s.options, d);
          q = O(d, v, L, !0);
        } else {
          f = [];
          const v = typeof s.options.getNextPageParam > "u";
          q = (l && d[0] ? l(d[0], 0, d) : !0)
            ? O([], v, h[0])
            : Promise.resolve(k([], h[0], d[0]));
          for (let S = 1; S < d.length; S++)
            q = q.then((M) => {
              if (l && d[S] ? l(d[S], S, d) : !0) {
                const ce = v ? h[S] : Nt(s.options, M);
                return O(M, v, ce);
              }
              return Promise.resolve(k(M, h[S], d[S]));
            });
        }
        return q.then((v) => ({ pages: v, pageParams: f }));
      };
    },
  };
}
function Nt(s, e) {
  return s.getNextPageParam == null
    ? void 0
    : s.getNextPageParam(e[e.length - 1], e);
}
function Ms(s, e) {
  return s.getPreviousPageParam == null
    ? void 0
    : s.getPreviousPageParam(e[0], e);
}
class In {
  constructor(e = {}) {
    (this.queryCache = e.queryCache || new Os()),
      (this.mutationCache = e.mutationCache || new Ss()),
      (this.logger = e.logger || Lt),
      (this.defaultOptions = e.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Xe.subscribe(() => {
          Xe.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = xe.subscribe(() => {
          xe.isOnline() &&
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
    const [n] = ve(e, t);
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
    const r = Qe(e, t, n),
      i = this.getQueryData(r.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(r);
  }
  getQueriesData(e) {
    return this.getQueryCache()
      .findAll(e)
      .map(({ queryKey: t, state: n }) => {
        const r = n.data;
        return [t, r];
      });
  }
  setQueryData(e, t, n) {
    const r = this.queryCache.find(e),
      i = r == null ? void 0 : r.state.data,
      o = bs(t, i);
    if (typeof o > "u") return;
    const l = Qe(e),
      a = this.defaultQueryOptions(l);
    return this.queryCache.build(this, a).setData(o, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return W.batch(() =>
      this.getQueryCache()
        .findAll(e)
        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
    );
  }
  getQueryState(e, t) {
    var n;
    return (n = this.queryCache.find(e, t)) == null ? void 0 : n.state;
  }
  removeQueries(e, t) {
    const [n] = ve(e, t),
      r = this.queryCache;
    W.batch(() => {
      r.findAll(n).forEach((i) => {
        r.remove(i);
      });
    });
  }
  resetQueries(e, t, n) {
    const [r, i] = ve(e, t, n),
      o = this.queryCache,
      l = { type: "active", ...r };
    return W.batch(
      () => (
        o.findAll(r).forEach((a) => {
          a.reset();
        }),
        this.refetchQueries(l, i)
      )
    );
  }
  cancelQueries(e, t, n) {
    const [r, i = {}] = ve(e, t, n);
    typeof i.revert > "u" && (i.revert = !0);
    const o = W.batch(() => this.queryCache.findAll(r).map((l) => l.cancel(i)));
    return Promise.all(o).then(fe).catch(fe);
  }
  invalidateQueries(e, t, n) {
    const [r, i] = ve(e, t, n);
    return W.batch(() => {
      var o, l;
      if (
        (this.queryCache.findAll(r).forEach((u) => {
          u.invalidate();
        }),
        r.refetchType === "none")
      )
        return Promise.resolve();
      const a = {
        ...r,
        type:
          (o = (l = r.refetchType) != null ? l : r.type) != null ? o : "active",
      };
      return this.refetchQueries(a, i);
    });
  }
  refetchQueries(e, t, n) {
    const [r, i] = ve(e, t, n),
      o = W.batch(() =>
        this.queryCache
          .findAll(r)
          .filter((a) => !a.isDisabled())
          .map((a) => {
            var u;
            return a.fetch(void 0, {
              ...i,
              cancelRefetch:
                (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: r.refetchPage },
            });
          })
      );
    let l = Promise.all(o).then(fe);
    return (i != null && i.throwOnError) || (l = l.catch(fe)), l;
  }
  fetchQuery(e, t, n) {
    const r = Qe(e, t, n),
      i = this.defaultQueryOptions(r);
    typeof i.retry > "u" && (i.retry = !1);
    const o = this.queryCache.build(this, i);
    return o.isStaleByTime(i.staleTime)
      ? o.fetch(i)
      : Promise.resolve(o.state.data);
  }
  prefetchQuery(e, t, n) {
    return this.fetchQuery(e, t, n).then(fe).catch(fe);
  }
  fetchInfiniteQuery(e, t, n) {
    const r = Qe(e, t, n);
    return (r.behavior = Es()), this.fetchQuery(r);
  }
  prefetchInfiniteQuery(e, t, n) {
    return this.fetchInfiniteQuery(e, t, n).then(fe).catch(fe);
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
    const n = this.queryDefaults.find((r) => Oe(e) === Oe(r.queryKey));
    n
      ? (n.defaultOptions = t)
      : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    if (!e) return;
    const t = this.queryDefaults.find((n) => Ye(e, n.queryKey));
    return t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const n = this.mutationDefaults.find((r) => Oe(e) === Oe(r.mutationKey));
    n
      ? (n.defaultOptions = t)
      : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    if (!e) return;
    const t = this.mutationDefaults.find((n) => Ye(e, n.mutationKey));
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
      !t.queryHash && t.queryKey && (t.queryHash = kt(t.queryKey, t)),
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
class qs extends De {
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
      jt(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return gt(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return gt(
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
      r = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(e)),
      ht(n, this.options) ||
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
    i && Ut(this.currentQuery, r, this.options, n) && this.executeFetch(),
      this.updateResult(t),
      i &&
        (this.currentQuery !== r ||
          this.options.enabled !== n.enabled ||
          this.options.staleTime !== n.staleTime) &&
        this.updateStaleTimeout();
    const o = this.computeRefetchInterval();
    i &&
      (this.currentQuery !== r ||
        this.options.enabled !== n.enabled ||
        o !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(o);
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
    return (e != null && e.throwOnError) || (t = t.catch(fe)), t;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      Ue || this.currentResult.isStale || !dt(this.options.staleTime))
    )
      return;
    const t = Sn(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
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
        Ue ||
        this.options.enabled === !1 ||
        !dt(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Xe.isFocused()) &&
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
      r = this.options,
      i = this.currentResult,
      o = this.currentResultState,
      l = this.currentResultOptions,
      a = e !== n,
      u = a ? e.state : this.currentQueryInitialState,
      c = a ? this.currentResult : this.previousQueryResult,
      { state: y } = e;
    let {
        dataUpdatedAt: d,
        error: h,
        errorUpdatedAt: f,
        fetchStatus: p,
        status: b,
      } = y,
      w = !1,
      k = !1,
      O;
    if (t._optimisticResults) {
      const S = this.hasListeners(),
        M = !S && jt(e, t),
        K = S && Ut(e, n, t, r);
      (M || K) &&
        ((p = nt(e.options.networkMode) ? "fetching" : "paused"),
        d || (b = "loading")),
        t._optimisticResults === "isRestoring" && (p = "idle");
    }
    if (
      t.keepPreviousData &&
      !y.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      b !== "error"
    )
      (O = c.data), (d = c.dataUpdatedAt), (b = c.status), (w = !0);
    else if (t.select && typeof y.data < "u")
      if (
        i &&
        y.data === (o == null ? void 0 : o.data) &&
        t.select === this.selectFn
      )
        O = this.selectResult;
      else
        try {
          (this.selectFn = t.select),
            (O = t.select(y.data)),
            (O = mt(i == null ? void 0 : i.data, O, t)),
            (this.selectResult = O),
            (this.selectError = null);
        } catch (S) {
          this.selectError = S;
        }
    else O = y.data;
    if (typeof t.placeholderData < "u" && typeof O > "u" && b === "loading") {
      let S;
      if (
        i != null &&
        i.isPlaceholderData &&
        t.placeholderData === (l == null ? void 0 : l.placeholderData)
      )
        S = i.data;
      else if (
        ((S =
          typeof t.placeholderData == "function"
            ? t.placeholderData()
            : t.placeholderData),
        t.select && typeof S < "u")
      )
        try {
          (S = t.select(S)), (this.selectError = null);
        } catch (M) {
          this.selectError = M;
        }
      typeof S < "u" &&
        ((b = "success"),
        (O = mt(i == null ? void 0 : i.data, S, t)),
        (k = !0));
    }
    this.selectError &&
      ((h = this.selectError),
      (O = this.selectResult),
      (f = Date.now()),
      (b = "error"));
    const q = p === "fetching",
      P = b === "loading",
      v = b === "error";
    return {
      status: b,
      fetchStatus: p,
      isLoading: P,
      isSuccess: b === "success",
      isError: v,
      isInitialLoading: P && q,
      data: O,
      dataUpdatedAt: d,
      error: h,
      errorUpdatedAt: f,
      failureCount: y.fetchFailureCount,
      failureReason: y.fetchFailureReason,
      errorUpdateCount: y.errorUpdateCount,
      isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
      isFetchedAfterMount:
        y.dataUpdateCount > u.dataUpdateCount ||
        y.errorUpdateCount > u.errorUpdateCount,
      isFetching: q,
      isRefetching: q && !P,
      isLoadingError: v && y.dataUpdatedAt === 0,
      isPaused: p === "paused",
      isPlaceholderData: k,
      isPreviousData: w,
      isRefetchError: v && y.dataUpdatedAt !== 0,
      isStale: Rt(e, t),
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
      ht(n, t))
    )
      return;
    this.currentResult = n;
    const r = { cache: !0 },
      i = () => {
        if (!t) return !0;
        const { notifyOnChangeProps: o } = this.options;
        if (o === "all" || (!o && !this.trackedProps.size)) return !0;
        const l = new Set(o ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && l.add("error"),
          Object.keys(this.currentResult).some((a) => {
            const u = a;
            return this.currentResult[u] !== t[u] && l.has(u);
          })
        );
      };
    (e == null ? void 0 : e.listeners) !== !1 && i() && (r.listeners = !0),
      this.notify({ ...r, ...e });
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
      : e.type === "error" && !Ze(e.error) && (t.onError = !0),
      this.updateResult(t),
      this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    W.batch(() => {
      if (e.onSuccess) {
        var t, n, r, i;
        (t = (n = this.options).onSuccess) == null ||
          t.call(n, this.currentResult.data),
          (r = (i = this.options).onSettled) == null ||
            r.call(i, this.currentResult.data, null);
      } else if (e.onError) {
        var o, l, a, u;
        (o = (l = this.options).onError) == null ||
          o.call(l, this.currentResult.error),
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
function Ts(s, e) {
  return (
    e.enabled !== !1 &&
    !s.state.dataUpdatedAt &&
    !(s.state.status === "error" && e.retryOnMount === !1)
  );
}
function jt(s, e) {
  return Ts(s, e) || (s.state.dataUpdatedAt > 0 && gt(s, e, e.refetchOnMount));
}
function gt(s, e, t) {
  if (e.enabled !== !1) {
    const n = typeof t == "function" ? t(s) : t;
    return n === "always" || (n !== !1 && Rt(s, e));
  }
  return !1;
}
function Ut(s, e, t, n) {
  return (
    t.enabled !== !1 &&
    (s !== e || n.enabled === !1) &&
    (!t.suspense || s.state.status !== "error") &&
    Rt(s, t)
  );
}
function Rt(s, e) {
  return s.isStaleByTime(e.staleTime);
}
let As = class extends De {
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
      ht(n, this.options) ||
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
    const e = this.currentMutation ? this.currentMutation.state : Dn(),
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
    W.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (e.onSuccess) {
          var t, n, r, i;
          (t = (n = this.mutateOptions).onSuccess) == null ||
            t.call(
              n,
              this.currentResult.data,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (r = (i = this.mutateOptions).onSettled) == null ||
              r.call(
                i,
                this.currentResult.data,
                null,
                this.currentResult.variables,
                this.currentResult.context
              );
        } else if (e.onError) {
          var o, l, a, u;
          (o = (l = this.mutateOptions).onError) == null ||
            o.call(
              l,
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
const Qn = "$$_queryClient",
  Fs = () => {
    const s = cs(Qn);
    if (!s)
      throw new Error(
        "No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?"
      );
    return s;
  },
  Ds = (s) => {
    us(Qn, s);
  };
function st() {
  return Fs();
}
const Me = [];
function Be(s, e) {
  return { subscribe: Is(s, e).subscribe };
}
function Is(s, e = X) {
  let t;
  const n = new Set();
  function r(l) {
    if (H(s, l) && ((s = l), t)) {
      const a = !Me.length;
      for (const u of n) u[1](), Me.push(u, s);
      if (a) {
        for (let u = 0; u < Me.length; u += 2) Me[u][0](Me[u + 1]);
        Me.length = 0;
      }
    }
  }
  function i(l) {
    r(l(s));
  }
  function o(l, a = X) {
    const u = [l, a];
    return (
      n.add(u),
      n.size === 1 && (t = e(r) || X),
      l(s),
      () => {
        n.delete(u), n.size === 0 && t && (t(), (t = null));
      }
    );
  }
  return { set: r, update: i, subscribe: o };
}
function $n(s, e, t) {
  const n = !Array.isArray(s),
    r = n ? [s] : s,
    i = e.length < 2;
  return Be(t, (o) => {
    let l = !1;
    const a = [];
    let u = 0,
      c = X;
    const y = () => {
        if (u) return;
        c();
        const h = e(n ? a[0] : a, o);
        i ? o(h) : (c = Ke(h) ? h : X);
      },
      d = r.map((h, f) =>
        Ln(
          h,
          (p) => {
            (a[f] = p), (u &= ~(1 << f)), l && y();
          },
          () => {
            u |= 1 << f;
          }
        )
      );
    return (
      (l = !0),
      y(),
      function () {
        be(d), c(), (l = !1);
      }
    );
  });
}
function Qs(s, e) {
  const t = st(),
    n = t.defaultQueryOptions(s);
  n._optimisticResults = "optimistic";
  let r = new e(t, n);
  n.onError && (n.onError = W.batchCalls(n.onError)),
    n.onSuccess && (n.onSuccess = W.batchCalls(n.onSuccess)),
    n.onSettled && (n.onSettled = W.batchCalls(n.onSettled)),
    Be(r).subscribe((l) => {
      (r = l), r.setOptions(n, { listeners: !1 });
    });
  const i = Be(r.getCurrentResult(), (l) => r.subscribe(W.batchCalls(l))),
    { subscribe: o } = $n(
      i,
      (l) => (
        (l = r.getOptimisticResult(n)),
        n.notifyOnChangeProps ? l : r.trackResult(l)
      )
    );
  return { subscribe: o };
}
function Nn(s, e, t) {
  const n = Qe(s, e, t);
  return Qs(n, qs);
}
function $s(s, e, t) {
  const n = ys(s, e, t),
    r = st();
  let i = new As(r, n),
    o;
  Be(i).subscribe((u) => {
    (i = u),
      (o = (c, y) => {
        i.mutate(c, y).catch(Ns);
      }),
      i.setOptions(n);
  });
  const l = Be(i.getCurrentResult(), (u) =>
      i.subscribe(W.batchCalls((c) => u(c)))
    ),
    { subscribe: a } = $n(l, (u) => ({
      ...u,
      mutate: o,
      mutateAsync: u.mutate,
    }));
  return { subscribe: a };
}
function Ns() {}
function js(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[1], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, [i]) {
      n &&
        n.p &&
        (!e || i & 2) &&
        oe(n, t, r, r[1], e ? ie(t, r[1], i, null) : le(r[1]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function Us(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e,
    { client: i = new In() } = e;
  return (
    _t(() => {
      i.mount();
    }),
    Ds(i),
    vt(() => {
      i.unmount();
    }),
    (s.$$set = (o) => {
      "client" in o && t(0, (i = o.client)),
        "$$scope" in o && t(1, (r = o.$$scope));
    }),
    [i, r, n]
  );
}
class Bs extends J {
  constructor(e) {
    super(), V(this, e, Us, js, H, { client: 0 });
  }
}
const jn = (s) => ({
    version: s.replace(/[\^~]/, ""),
    qualifier: isNaN(Number(s[0])) ? s[0] : void 0,
  }),
  Un = (s, e) => jn(s).version === e,
  Bt = (s, e) => (e.length <= s ? e : e.slice(0, s).concat("…")),
  ot = 10,
  Fe = {
    package: ["package"],
    bundlephobiaReport: (s) => ["bundlephobiaReport", s],
  };
class Kt extends Error {
  constructor(e, t, n) {
    const r = e.status || e.status === 0 ? e.status : "",
      i = e.statusText || "",
      o = `${r} ${i}`.trim(),
      l = o ? `status code ${o}` : "an unknown error";
    super(`Request failed with ${l}`),
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
class Bn extends Error {
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
const We = (s) => s !== null && typeof s == "object",
  He = (...s) => {
    for (const e of s)
      if ((!We(e) || Array.isArray(e)) && typeof e < "u")
        throw new TypeError("The `options` argument must be an object");
    return Ot({}, ...s);
  },
  Kn = (s = {}, e = {}) => {
    const t = new globalThis.Headers(s),
      n = e instanceof globalThis.Headers,
      r = new globalThis.Headers(e);
    for (const [i, o] of r.entries())
      (n && o === "undefined") || o === void 0 ? t.delete(i) : t.set(i, o);
    return t;
  },
  Ot = (...s) => {
    let e = {},
      t = {};
    for (const n of s)
      if (Array.isArray(n)) Array.isArray(e) || (e = []), (e = [...e, ...n]);
      else if (We(n)) {
        for (let [r, i] of Object.entries(n))
          We(i) && r in e && (i = Ot(e[r], i)), (e = { ...e, [r]: i });
        We(n.headers) && ((t = Kn(t, n.headers)), (e.headers = t));
      }
    return e;
  },
  Ks = (() => {
    let s = !1,
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
            return (s = !0), "half";
          },
        }).headers.has("Content-Type")),
      s && !e
    );
  })(),
  zs = typeof globalThis.AbortController == "function",
  Hs = typeof globalThis.ReadableStream == "function",
  Gs = typeof globalThis.FormData == "function",
  zn = ["get", "post", "put", "patch", "head", "delete"],
  Zs = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  lt = 2147483647,
  Hn = Symbol("stop"),
  Ws = (s) => (zn.includes(s) ? s.toUpperCase() : s),
  Vs = ["get", "put", "head", "delete", "options", "trace"],
  Js = [408, 413, 429, 500, 502, 503, 504],
  Gn = [413, 429, 503],
  zt = {
    limit: 2,
    methods: Vs,
    statusCodes: Js,
    afterStatusCodes: Gn,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
  },
  Ys = (s = {}) => {
    if (typeof s == "number") return { ...zt, limit: s };
    if (s.methods && !Array.isArray(s.methods))
      throw new Error("retry.methods must be an array");
    if (s.statusCodes && !Array.isArray(s.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...zt, ...s, afterStatusCodes: Gn };
  };
async function Xs(s, e, t) {
  return new Promise((n, r) => {
    const i = setTimeout(() => {
      e && e.abort(), r(new Bn(s));
    }, t.timeout);
    t.fetch(s)
      .then(n)
      .catch(r)
      .then(() => {
        clearTimeout(i);
      });
  });
}
const xs = !!globalThis.DOMException;
function Ht(s) {
  if (xs)
    return new DOMException(
      (s == null ? void 0 : s.reason) ?? "The operation was aborted.",
      "AbortError"
    );
  const e = new Error(
    (s == null ? void 0 : s.reason) ?? "The operation was aborted."
  );
  return (e.name = "AbortError"), e;
}
async function er(s, { signal: e }) {
  return new Promise((t, n) => {
    if (e) {
      if (e.aborted) {
        n(Ht(e));
        return;
      }
      e.addEventListener("abort", r, { once: !0 });
    }
    function r() {
      n(Ht(e)), clearTimeout(i);
    }
    const i = setTimeout(() => {
      e == null || e.removeEventListener("abort", r), t();
    }, s);
  });
}
class et {
  static create(e, t) {
    const n = new et(e, t),
      r = async () => {
        if (n._options.timeout > lt)
          throw new RangeError(
            `The \`timeout\` option cannot be greater than ${lt}`
          );
        await Promise.resolve();
        let l = await n._fetch();
        for (const a of n._options.hooks.afterResponse) {
          const u = await a(
            n.request,
            n._options,
            n._decorateResponse(l.clone())
          );
          u instanceof globalThis.Response && (l = u);
        }
        if ((n._decorateResponse(l), !l.ok && n._options.throwHttpErrors)) {
          let a = new Kt(l, n.request, n._options);
          for (const u of n._options.hooks.beforeError) a = await u(a);
          throw a;
        }
        if (n._options.onDownloadProgress) {
          if (typeof n._options.onDownloadProgress != "function")
            throw new TypeError(
              "The `onDownloadProgress` option must be a function"
            );
          if (!Hs)
            throw new Error(
              "Streams are not supported in your environment. `ReadableStream` is missing."
            );
          return n._stream(l.clone(), n._options.onDownloadProgress);
        }
        return l;
      },
      o = n._options.retry.methods.includes(n.request.method.toLowerCase())
        ? n._retry(r)
        : r();
    for (const [l, a] of Object.entries(Zs))
      o[l] = async () => {
        n.request.headers.set("accept", n.request.headers.get("accept") || a);
        const c = (await o).clone();
        if (l === "json") {
          if (
            c.status === 204 ||
            (await c.clone().arrayBuffer()).byteLength === 0
          )
            return "";
          if (t.parseJson) return t.parseJson(await c.text());
        }
        return c[l]();
      };
    return o;
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
        headers: Kn(this._input.headers, t.headers),
        hooks: Ot(
          {
            beforeRequest: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: [],
          },
          t.hooks
        ),
        method: Ws(t.method ?? this._input.method),
        prefixUrl: String(t.prefixUrl || ""),
        retry: Ys(t.retry),
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
    if (zs) {
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
      (Ks && (this._options.duplex = "half"),
      (this.request = new globalThis.Request(this._input, this._options)),
      this._options.searchParams)
    ) {
      const r =
          "?" +
          (typeof this._options.searchParams == "string"
            ? this._options.searchParams.replace(/^\?/, "")
            : new URLSearchParams(this._options.searchParams).toString()),
        i = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, r);
      ((Gs && this._options.body instanceof globalThis.FormData) ||
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
      this._retryCount < this._options.retry.limit && !(e instanceof Bn))
    ) {
      if (e instanceof Kt) {
        if (!this._options.retry.statusCodes.includes(e.response.status))
          return 0;
        const n = e.response.headers.get("Retry-After");
        if (
          n &&
          this._options.retry.afterStatusCodes.includes(e.response.status)
        ) {
          let r = Number(n);
          return (
            Number.isNaN(r) ? (r = Date.parse(n) - Date.now()) : (r *= 1e3),
            typeof this._options.retry.maxRetryAfter < "u" &&
            r > this._options.retry.maxRetryAfter
              ? 0
              : r
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
      const n = Math.min(this._calculateRetryDelay(t), lt);
      if (n !== 0 && this._retryCount > 0) {
        await er(n, { signal: this._options.signal });
        for (const r of this._options.hooks.beforeRetry)
          if (
            (await r({
              request: this.request,
              options: this._options,
              error: t,
              retryCount: this._retryCount,
            })) === Hn
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
      : Xs(this.request.clone(), this.abortController, this._options);
  }
  _stream(e, t) {
    const n = Number(e.headers.get("content-length")) || 0;
    let r = 0;
    return e.status === 204
      ? (t &&
          t(
            { percent: 1, totalBytes: n, transferredBytes: r },
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
              const o = e.body.getReader();
              t &&
                t(
                  { percent: 0, transferredBytes: 0, totalBytes: n },
                  new Uint8Array()
                );
              async function l() {
                const { done: a, value: u } = await o.read();
                if (a) {
                  i.close();
                  return;
                }
                if (t) {
                  r += u.byteLength;
                  const c = n === 0 ? 0 : r / n;
                  t({ percent: c, transferredBytes: r, totalBytes: n }, u);
                }
                i.enqueue(u), await l();
              }
              await l();
            },
          }),
          { status: e.status, statusText: e.statusText, headers: e.headers }
        );
  }
}
/*! MIT License © Sindre Sorhus */ const bt = (s) => {
    const e = (t, n) => et.create(t, He(s, n));
    for (const t of zn) e[t] = (n, r) => et.create(n, He(s, r, { method: t }));
    return (
      (e.create = (t) => bt(He(t))),
      (e.extend = (t) => bt(He(s, t))),
      (e.stop = Hn),
      e
    );
  },
  tr = bt(),
  Zn = tr,
  Wn = Zn.create({ prefixUrl: "http://localhost:5001/" }),
  nr = Zn.create({ prefixUrl: "https://bundlephobia.com/" });
function sr() {
  return Wn.get("package").json();
}
function rr(s) {
  return Wn.post("upgrade-packages", { json: s }).json();
}
function ir(s) {
  return nr.get(`api/size?package=${s}`).json();
}
const Vn = (s) => $s(rr, s),
  Jn = (s) => (e) => {
    for (let t of s) {
      const { qualifier: n } = jn(t.version),
        r = `${n}${t.latest}`;
      e.dependencies &&
        t.name in e.dependencies &&
        (e.dependencies[t.name] = r),
        e.devDependencies &&
          t.name in e.devDependencies &&
          (e.devDependencies[t.name] = r);
    }
    return e;
  },
  or = () => Nn(Fe.package, sr),
  lr = (s) => Nn(Fe.bundlephobiaReport(s), () => ir(s), { enabled: !!s });
function ar(s) {
  _t(() => {
    window.addEventListener("keydown", s);
  }),
    vt(() => {
      window.removeEventListener("keydown", s);
    });
}
function ur(s) {
  let e, t, n, r, i, o;
  return {
    c() {
      (e = ge("svg")),
        (t = ge("g")),
        (n = ge("g")),
        (r = ge("path")),
        (o = ge("path")),
        m(r, "d", (i = Gt[s[0]])),
        m(
          o,
          "d",
          "M50,20 C71.4336483,20 81.3822646,28.613774 86.0000023,36.6100918 L86,11.9417476 L86,10 L90,10 L90,11.9417476 L90,58.0582524 L90,59.0291262 L90,70 C90,70 90,90 50,90 C10,90 10,70 10,70 L10,59.0291262 L10,58.0582524 L10,11.9417476 L10,10 L14,10 L14,11.9417476 L14,36.6100878 C18.6177354,28.613774 28.5663517,20 50,20 Z M20,60 C20,51.7157288 26.7081139,45 35.0050808,45 L64.9949192,45 C73.2819965,45 80,51.7139073 80,60 C80,68.2842712 73.2918861,75 64.9949192,75 L35.0050808,75 C26.7180035,75 20,68.2860927 20,60 Z M14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 L14,10 Z M90,10 C90,8.8954305 89.1045695,8 88,8 C86.8954305,8 86,8.8954305 86,10 L90,10 Z"
        ),
        m(n, "fill", "currentColor"),
        m(t, "stroke", "none"),
        m(t, "stroke-width", "1"),
        m(t, "fill", "none"),
        m(t, "fill-rule", "evenodd"),
        m(e, "xmlns", "http://www.w3.org/2000/svg"),
        m(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        m(e, "viewBox", "0 0 100 125");
    },
    m(l, a) {
      A(l, e, a), g(e, t), g(t, n), g(n, r), g(n, o);
    },
    p(l, [a]) {
      a & 1 && i !== (i = Gt[l[0]]) && m(r, "d", i);
    },
    i: X,
    o: X,
    d(l) {
      l && T(e);
    },
  };
}
const Gt = {
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
function cr(s, e, t) {
  let { mood: n = "awake" } = e;
  return (
    (s.$$set = (r) => {
      "mood" in r && t(0, (n = r.mood));
    }),
    [n]
  );
}
class fr extends J {
  constructor(e) {
    super(), V(this, e, cr, ur, H, { mood: 0 });
  }
}
const { isArray: dr } = Array;
function Yn(s, e) {
  if (arguments.length === 1) return (t) => Yn(s, t);
  if (e) return e[s];
}
function hr(s, e) {
  const t = {},
    n = {};
  return (
    Object.entries(e).forEach(([r, i]) => {
      s(i, r) ? (t[r] = i) : (n[r] = i);
    }),
    [t, n]
  );
}
function pr(s, e, t = !1) {
  const n = [],
    r = [];
  let i = -1;
  for (; i++ < e.length - 1; )
    (t ? s(e[i], i) : s(e[i])) ? n.push(e[i]) : r.push(e[i]);
  return [n, r];
}
function Xn(s, e) {
  return arguments.length === 1 ? (t) => Xn(s, t) : dr(e) ? pr(s, e) : hr(s, e);
}
function yt(s, e) {
  if (arguments.length === 1) return (r) => yt(s, r);
  if (Number.isNaN(Number(s)) || Number.isNaN(Number(e)))
    throw new TypeError("Both arguments to range must be numbers");
  if (e < s) return [];
  const t = e - s,
    n = Array(t);
  for (let r = 0; r < t; r++) n[r] = s + r;
  return n;
}
const Zt = {
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
function Wt(s, e, t) {
  const n = s.slice();
  return (n[10] = e[t][0]), (n[11] = e[t][1]), n;
}
function at(s) {
  let e,
    t = [s[11]],
    n = {};
  for (let r = 0; r < t.length; r += 1) n = U(n, t[r]);
  return {
    c() {
      (e = ge(s[10])), Je(e, n);
    },
    m(r, i) {
      A(r, e, i);
    },
    p(r, i) {
      Je(e, (n = me(t, [i & 32 && r[11]])));
    },
    d(r) {
      r && T(e);
    },
  };
}
function Vt(s) {
  let e = s[10],
    t,
    n = s[10] && at(s);
  return {
    c() {
      n && n.c(), (t = On());
    },
    m(r, i) {
      n && n.m(r, i), A(r, t, i);
    },
    p(r, i) {
      r[10]
        ? e
          ? H(e, r[10])
            ? (n.d(1), (n = at(r)), (e = r[10]), n.c(), n.m(t.parentNode, t))
            : n.p(r, i)
          : ((n = at(r)), (e = r[10]), n.c(), n.m(t.parentNode, t))
        : e && (n.d(1), (n = null), (e = r[10]));
    },
    d(r) {
      r && T(t), n && n.d(r);
    },
  };
}
function mr(s) {
  let e,
    t,
    n,
    r,
    i,
    o = s[5],
    l = [];
  for (let d = 0; d < o.length; d += 1) l[d] = Vt(Wt(s, o, d));
  const a = s[9].default,
    u = re(a, s, s[8], null);
  let c = [
      Zt,
      s[6],
      { width: s[2] },
      { height: s[2] },
      { stroke: s[1] },
      {
        "stroke-width": (n = s[4] ? (Number(s[3]) * 24) / Number(s[2]) : s[3]),
      },
      { class: (r = `lucide-icon lucide lucide-${s[0]} ${s[7].class ?? ""}`) },
    ],
    y = {};
  for (let d = 0; d < c.length; d += 1) y = U(y, c[d]);
  return {
    c() {
      e = ge("svg");
      for (let d = 0; d < l.length; d += 1) l[d].c();
      (t = On()), u && u.c(), Je(e, y);
    },
    m(d, h) {
      A(d, e, h);
      for (let f = 0; f < l.length; f += 1) l[f] && l[f].m(e, null);
      g(e, t), u && u.m(e, null), (i = !0);
    },
    p(d, [h]) {
      if (h & 32) {
        o = d[5];
        let f;
        for (f = 0; f < o.length; f += 1) {
          const p = Wt(d, o, f);
          l[f] ? l[f].p(p, h) : ((l[f] = Vt(p)), l[f].c(), l[f].m(e, t));
        }
        for (; f < l.length; f += 1) l[f].d(1);
        l.length = o.length;
      }
      u &&
        u.p &&
        (!i || h & 256) &&
        oe(u, a, d, d[8], i ? ie(a, d[8], h, null) : le(d[8]), null),
        Je(
          e,
          (y = me(c, [
            Zt,
            h & 64 && d[6],
            (!i || h & 4) && { width: d[2] },
            (!i || h & 4) && { height: d[2] },
            (!i || h & 2) && { stroke: d[1] },
            (!i ||
              (h & 28 &&
                n !==
                  (n = d[4] ? (Number(d[3]) * 24) / Number(d[2]) : d[3]))) && {
              "stroke-width": n,
            },
            (!i ||
              (h & 129 &&
                r !==
                  (r = `lucide-icon lucide lucide-${d[0]} ${
                    d[7].class ?? ""
                  }`))) && { class: r },
          ]))
        );
    },
    i(d) {
      i || (_(u, d), (i = !0));
    },
    o(d) {
      C(u, d), (i = !1);
    },
    d(d) {
      d && T(e), Ae(l, d), u && u.d(d);
    },
  };
}
function gr(s, e, t) {
  const n = [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
  ];
  let r = qt(e, n),
    { $$slots: i = {}, $$scope: o } = e,
    { name: l } = e,
    { color: a = "currentColor" } = e,
    { size: u = 24 } = e,
    { strokeWidth: c = 2 } = e,
    { absoluteStrokeWidth: y = !1 } = e,
    { iconNode: d } = e;
  return (
    (s.$$set = (h) => {
      t(7, (e = U(U({}, e), Y(h)))),
        t(6, (r = qt(e, n))),
        "name" in h && t(0, (l = h.name)),
        "color" in h && t(1, (a = h.color)),
        "size" in h && t(2, (u = h.size)),
        "strokeWidth" in h && t(3, (c = h.strokeWidth)),
        "absoluteStrokeWidth" in h && t(4, (y = h.absoluteStrokeWidth)),
        "iconNode" in h && t(5, (d = h.iconNode)),
        "$$scope" in h && t(8, (o = h.$$scope));
    }),
    (e = Y(e)),
    [l, a, u, c, y, d, r, e, o, i]
  );
}
class br extends J {
  constructor(e) {
    super(),
      V(this, e, gr, mr, H, {
        name: 0,
        color: 1,
        size: 2,
        strokeWidth: 3,
        absoluteStrokeWidth: 4,
        iconNode: 5,
      });
  }
}
const _e = br;
function yr(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function _r(s) {
  let e, t;
  const n = [{ name: "arrow-up" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [yr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function vr(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
  const i = [
    ["line", { x1: "12", x2: "12", y1: "19", y2: "5" }],
    ["polyline", { points: "5 12 12 5 19 12" }],
  ];
  return (
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class wr extends J {
  constructor(e) {
    super(), V(this, e, vr, _r, H, {});
  }
}
const xn = wr;
function Cr(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function kr(s) {
  let e, t;
  const n = [{ name: "bug" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [Cr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function Lr(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
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
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class Rr extends J {
  constructor(e) {
    super(), V(this, e, Lr, kr, H, {});
  }
}
const Or = Rr;
function Pr(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function Sr(s) {
  let e, t;
  const n = [{ name: "check-circle" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [Pr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function Er(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
  const i = [
    ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }],
    ["polyline", { points: "22 4 12 14.01 9 11.01" }],
  ];
  return (
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class Mr extends J {
  constructor(e) {
    super(), V(this, e, Er, Sr, H, {});
  }
}
const es = Mr;
function qr(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function Tr(s) {
  let e, t;
  const n = [{ name: "github" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [qr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function Ar(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
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
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class Fr extends J {
  constructor(e) {
    super(), V(this, e, Ar, Tr, H, {});
  }
}
const Dr = Fr;
function Ir(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function Qr(s) {
  let e, t;
  const n = [{ name: "globe" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [Ir] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function $r(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
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
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class Nr extends J {
  constructor(e) {
    super(), V(this, e, $r, Qr, H, {});
  }
}
const jr = Nr;
function Ur(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function Br(s) {
  let e, t;
  const n = [{ name: "info" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [Ur] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function Kr(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
  const i = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 16v-4" }],
    ["path", { d: "M12 8h.01" }],
  ];
  return (
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class zr extends J {
  constructor(e) {
    super(), V(this, e, Kr, Br, H, {});
  }
}
const Hr = zr;
function Gr(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function Zr(s) {
  let e, t;
  const n = [{ name: "package" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [Gr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function Wr(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
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
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class Vr extends J {
  constructor(e) {
    super(), V(this, e, Wr, Zr, H, {});
  }
}
const ts = Vr;
function Jr(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function Yr(s) {
  let e, t;
  const n = [{ name: "scale" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [Jr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function Xr(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
  const i = [
    ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
    ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
    ["path", { d: "M7 21h10" }],
    ["path", { d: "M12 3v18" }],
    ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }],
  ];
  return (
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class xr extends J {
  constructor(e) {
    super(), V(this, e, Xr, Yr, H, {});
  }
}
const ei = xr;
function ti(s) {
  let e;
  const t = s[2].default,
    n = re(t, s, s[3], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 8) &&
        oe(n, t, r, r[3], e ? ie(t, r[3], i, null) : le(r[3]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function ni(s) {
  let e, t;
  const n = [{ name: "x" }, s[1], { iconNode: s[0] }];
  let r = { $$slots: { default: [ti] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = U(r, n[i]);
  return (
    (e = new _e({ props: r })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const l =
          o & 3
            ? me(n, [n[0], o & 2 && ye(i[1]), o & 1 && { iconNode: i[0] }])
            : {};
        o & 8 && (l.$$scope = { dirty: o, ctx: i }), e.$set(l);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        $(e, i);
      },
    }
  );
}
function si(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
  const i = [
    ["line", { x1: "18", x2: "6", y1: "6", y2: "18" }],
    ["line", { x1: "6", x2: "18", y1: "6", y2: "18" }],
  ];
  return (
    (s.$$set = (o) => {
      t(1, (e = U(U({}, e), Y(o)))), "$$scope" in o && t(3, (r = o.$$scope));
    }),
    (e = Y(e)),
    [i, e, n, r]
  );
}
class ri extends J {
  constructor(e) {
    super(), V(this, e, si, ni, H, {});
  }
}
const ii = ri;
function oi(s) {
  const e = (t) => {
    s.contains(t.target) || s.dispatchEvent(new CustomEvent("outsideclick"));
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
function li(s) {
  let e;
  const t = s[3].default,
    n = re(t, s, s[2], null);
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), (e = !0);
    },
    p(r, i) {
      n &&
        n.p &&
        (!e || i & 4) &&
        oe(n, t, r, r[2], e ? ie(t, r[2], i, null) : le(r[2]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      C(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function ai(s) {
  let e = "...",
    t,
    n,
    r,
    i;
  const o = s[3].default,
    l = re(o, s, s[2], null);
  return {
    c() {
      (t = j(e)),
        (n = D()),
        (r = R("div")),
        l && l.c(),
        m(r, "class", "opacity-0 h-0");
    },
    m(a, u) {
      A(a, t, u), A(a, n, u), A(a, r, u), l && l.m(r, null), (i = !0);
    },
    p(a, u) {
      l &&
        l.p &&
        (!i || u & 4) &&
        oe(l, o, a, a[2], i ? ie(o, a[2], u, null) : le(a[2]), null);
    },
    i(a) {
      i || (_(l, a), (i = !0));
    },
    o(a) {
      C(l, a), (i = !1);
    },
    d(a) {
      a && T(t), a && T(n), a && T(r), l && l.d(a);
    },
  };
}
function ui(s) {
  let e, t, n, r, i, o, l, a, u, c;
  const y = [ai, li],
    d = [];
  function h(f, p) {
    return f[0] ? 0 : 1;
  }
  return (
    (n = h(s)),
    (r = d[n] = y[n](s)),
    (l = new xn({ props: { class: "h-5 w-5" } })),
    {
      c() {
        (e = R("button")),
          (t = R("div")),
          r.c(),
          (i = D()),
          (o = R("div")),
          N(l.$$.fragment),
          m(t, "class", "px-2 font-medium relative"),
          m(
            o,
            "class",
            "h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple"
          ),
          m(
            e,
            "class",
            "flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple/95 text-castleton-green -mr-1 whitespace-nowrap"
          ),
          (e.disabled = s[1]),
          z(e, "opacity-90", s[0]),
          z(e, "opacity-70", s[1]);
      },
      m(f, p) {
        A(f, e, p),
          g(e, t),
          d[n].m(t, null),
          g(e, i),
          g(e, o),
          Q(l, o, null),
          (a = !0),
          u || ((c = de(e, "click", s[4])), (u = !0));
      },
      p(f, [p]) {
        let b = n;
        (n = h(f)),
          n === b
            ? d[n].p(f, p)
            : (ne(),
              C(d[b], 1, 1, () => {
                d[b] = null;
              }),
              se(),
              (r = d[n]),
              r ? r.p(f, p) : ((r = d[n] = y[n](f)), r.c()),
              _(r, 1),
              r.m(t, null)),
          (!a || p & 2) && (e.disabled = f[1]),
          (!a || p & 1) && z(e, "opacity-90", f[0]),
          (!a || p & 2) && z(e, "opacity-70", f[1]);
      },
      i(f) {
        a || (_(r), _(l.$$.fragment, f), (a = !0));
      },
      o(f) {
        C(r), C(l.$$.fragment, f), (a = !1);
      },
      d(f) {
        f && T(e), d[n].d(), $(l), (u = !1), c();
      },
    }
  );
}
function ci(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e,
    { isLoading: i = !1 } = e,
    { disabled: o = !1 } = e;
  function l(a) {
    fs.call(this, s, a);
  }
  return (
    (s.$$set = (a) => {
      "isLoading" in a && t(0, (i = a.isLoading)),
        "disabled" in a && t(1, (o = a.disabled)),
        "$$scope" in a && t(2, (r = a.$$scope));
    }),
    [i, o, r, n, l]
  );
}
class ns extends J {
  constructor(e) {
    super(), V(this, e, ci, ui, H, { isLoading: 0, disabled: 1 });
  }
}
function fi(s) {
  let e, t, n;
  return (
    (t = new ns({
      props: {
        disabled: s[9].isLoading && s[7],
        isLoading: s[9].isLoading && s[7],
        $$slots: { default: [hi] },
        $$scope: { ctx: s },
      },
    })),
    t.$on("click", s[17]),
    {
      c() {
        (e = R("div")), N(t.$$.fragment), m(e, "class", "py-1");
      },
      m(r, i) {
        A(r, e, i), Q(t, e, null), (n = !0);
      },
      p(r, i) {
        const o = {};
        i & 640 && (o.disabled = r[9].isLoading && r[7]),
          i & 640 && (o.isLoading = r[9].isLoading && r[7]),
          i & 1048582 && (o.$$scope = { dirty: i, ctx: r }),
          t.$set(o);
      },
      i(r) {
        n || (_(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        C(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        r && T(e), $(t);
      },
    }
  );
}
function di(s) {
  let e, t, n, r, i, o;
  return (
    (i = new es({ props: { class: "h-4 w-4 ml-1" } })),
    {
      c() {
        (e = R("div")),
          (t = R("div")),
          (n = j(s[1])),
          (r = D()),
          N(i.$$.fragment),
          m(e, "class", "flex items-center gap-2 justify-end py-2");
      },
      m(l, a) {
        A(l, e, a), g(e, t), g(t, n), g(e, r), Q(i, e, null), (o = !0);
      },
      p(l, a) {
        (!o || a & 2) && ae(n, l[1]);
      },
      i(l) {
        o || (_(i.$$.fragment, l), (o = !0));
      },
      o(l) {
        C(i.$$.fragment, l), (o = !1);
      },
      d(l) {
        l && T(e), $(i);
      },
    }
  );
}
function hi(s) {
  let e, t, n;
  return {
    c() {
      (e = j(s[1])), (t = j(" ⇒ ")), (n = j(s[2]));
    },
    m(r, i) {
      A(r, e, i), A(r, t, i), A(r, n, i);
    },
    p(r, i) {
      i & 2 && ae(e, r[1]), i & 4 && ae(n, r[2]);
    },
    d(r) {
      r && T(e), r && T(t), r && T(n);
    },
  };
}
function Jt(s) {
  var q;
  let e,
    t = s[5].description + "",
    n,
    r,
    i,
    o,
    l,
    a,
    u,
    c,
    y,
    d,
    h,
    f = s[5].license && Yt(s),
    p = s[5].author && Xt(s),
    b = s[10].data && xt(s),
    w = ((q = s[5].repository) == null ? void 0 : q.url) && en(s),
    k = s[5].homepage && tn(s),
    O = s[5].bugs && nn(s);
  return {
    c() {
      (e = R("div")),
        (n = j(t)),
        (r = D()),
        (i = R("div")),
        (o = R("div")),
        f && f.c(),
        (l = D()),
        p && p.c(),
        (a = D()),
        b && b.c(),
        (u = D()),
        (c = R("div")),
        w && w.c(),
        (y = D()),
        k && k.c(),
        (d = D()),
        O && O.c(),
        m(
          e,
          "class",
          "text-granny-smith-apple/90 max-w-md p-4 py-2 font-medium"
        ),
        m(o, "class", "grid gap-2"),
        m(c, "class", "flex gap-2 items-center text-lg"),
        m(
          i,
          "class",
          "px-2 pt-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60"
        );
    },
    m(P, v) {
      A(P, e, v),
        g(e, n),
        A(P, r, v),
        A(P, i, v),
        g(i, o),
        f && f.m(o, null),
        g(o, l),
        p && p.m(o, null),
        g(o, a),
        b && b.m(o, null),
        g(i, u),
        g(i, c),
        w && w.m(c, null),
        g(c, y),
        k && k.m(c, null),
        g(c, d),
        O && O.m(c, null),
        (h = !0);
    },
    p(P, v) {
      var L;
      (!h || v & 32) && t !== (t = P[5].description + "") && ae(n, t),
        P[5].license
          ? f
            ? (f.p(P, v), v & 32 && _(f, 1))
            : ((f = Yt(P)), f.c(), _(f, 1), f.m(o, l))
          : f &&
            (ne(),
            C(f, 1, 1, () => {
              f = null;
            }),
            se()),
        P[5].author
          ? p
            ? p.p(P, v)
            : ((p = Xt(P)), p.c(), p.m(o, a))
          : p && (p.d(1), (p = null)),
        P[10].data
          ? b
            ? b.p(P, v)
            : ((b = xt(P)), b.c(), b.m(o, null))
          : b && (b.d(1), (b = null)),
        (L = P[5].repository) != null && L.url
          ? w
            ? (w.p(P, v), v & 32 && _(w, 1))
            : ((w = en(P)), w.c(), _(w, 1), w.m(c, y))
          : w &&
            (ne(),
            C(w, 1, 1, () => {
              w = null;
            }),
            se()),
        P[5].homepage
          ? k
            ? (k.p(P, v), v & 32 && _(k, 1))
            : ((k = tn(P)), k.c(), _(k, 1), k.m(c, d))
          : k &&
            (ne(),
            C(k, 1, 1, () => {
              k = null;
            }),
            se()),
        P[5].bugs
          ? O
            ? (O.p(P, v), v & 32 && _(O, 1))
            : ((O = nn(P)), O.c(), _(O, 1), O.m(c, null))
          : O &&
            (ne(),
            C(O, 1, 1, () => {
              O = null;
            }),
            se());
    },
    i(P) {
      h || (_(f), _(w), _(k), _(O), (h = !0));
    },
    o(P) {
      C(f), C(w), C(k), C(O), (h = !1);
    },
    d(P) {
      P && T(e),
        P && T(r),
        P && T(i),
        f && f.d(),
        p && p.d(),
        b && b.d(),
        w && w.d(),
        k && k.d(),
        O && O.d();
    },
  };
}
function Yt(s) {
  let e,
    t,
    n,
    r,
    i = (s[5].license ?? "") + "",
    o,
    l;
  return (
    (t = new ei({ props: { class: "h-4 w-4 -translate-y-px" } })),
    {
      c() {
        (e = R("div")),
          N(t.$$.fragment),
          (n = D()),
          (r = R("span")),
          (o = j(i)),
          m(e, "class", "flex gap-1 items-center");
      },
      m(a, u) {
        A(a, e, u), Q(t, e, null), g(e, n), g(e, r), g(r, o), (l = !0);
      },
      p(a, u) {
        (!l || u & 32) && i !== (i = (a[5].license ?? "") + "") && ae(o, i);
      },
      i(a) {
        l || (_(t.$$.fragment, a), (l = !0));
      },
      o(a) {
        C(t.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && T(e), $(t);
      },
    }
  );
}
function Xt(s) {
  let e,
    t,
    n,
    r,
    i = s[5].author.name + "",
    o;
  return {
    c() {
      (e = R("div")),
        (t = R("span")),
        (t.textContent = "Authored by"),
        (n = D()),
        (r = R("span")),
        (o = j(i)),
        m(r, "class", "font-semibold"),
        m(e, "class", "text-granny-smith-apple flex items-center gap-2");
    },
    m(l, a) {
      A(l, e, a), g(e, t), g(e, n), g(e, r), g(r, o);
    },
    p(l, a) {
      a & 32 && i !== (i = l[5].author.name + "") && ae(o, i);
    },
    d(l) {
      l && T(e);
    },
  };
}
function xt(s) {
  let e,
    t,
    n,
    r = (s[10].data.gzip / 1024).toFixed(1) + "",
    i,
    o,
    l,
    a,
    u = (s[10].data.size / 1024).toFixed(1) + "",
    c,
    y,
    d;
  return {
    c() {
      (e = R("div")),
        (t = j(`Bundle size
              `)),
        (n = R("span")),
        (i = j(r)),
        (o = j("kb")),
        (l = j(`
              (gzipped) |
              `)),
        (a = R("span")),
        (c = j(u)),
        (y = j("kb")),
        (d = j(" (uncompressed)")),
        m(n, "class", "font-semibold"),
        m(a, "class", "font-semibold");
    },
    m(h, f) {
      A(h, e, f),
        g(e, t),
        g(e, n),
        g(n, i),
        g(n, o),
        g(e, l),
        g(e, a),
        g(a, c),
        g(a, y),
        g(e, d);
    },
    p(h, f) {
      f & 1024 &&
        r !== (r = (h[10].data.gzip / 1024).toFixed(1) + "") &&
        ae(i, r),
        f & 1024 &&
          u !== (u = (h[10].data.size / 1024).toFixed(1) + "") &&
          ae(c, u);
    },
    d(h) {
      h && T(e);
    },
  };
}
function en(s) {
  let e, t, n, r;
  return (
    (t = new Dr({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = R("a")),
          N(t.$$.fragment),
          m(e, "href", (n = s[5].repository.url.replace(/^git\+/, ""))),
          m(e, "target", "_blank"),
          m(e, "class", "hover:underline"),
          m(e, "rel", "noopener noreferrer"),
          m(e, "title", "Github");
      },
      m(i, o) {
        A(i, e, o), Q(t, e, null), (r = !0);
      },
      p(i, o) {
        (!r ||
          (o & 32 && n !== (n = i[5].repository.url.replace(/^git\+/, "")))) &&
          m(e, "href", n);
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        C(t.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && T(e), $(t);
      },
    }
  );
}
function tn(s) {
  let e, t, n, r;
  return (
    (t = new jr({ props: { class: "h-4 w-4" } })),
    {
      c() {
        (e = R("a")),
          N(t.$$.fragment),
          m(e, "href", (n = s[5].homepage)),
          m(e, "target", "_blank"),
          m(e, "class", "hover:underline"),
          m(e, "rel", "noopener noreferrer"),
          m(e, "title", "Homepage");
      },
      m(i, o) {
        A(i, e, o), Q(t, e, null), (r = !0);
      },
      p(i, o) {
        (!r || (o & 32 && n !== (n = i[5].homepage))) && m(e, "href", n);
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        C(t.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && T(e), $(t);
      },
    }
  );
}
function nn(s) {
  let e, t, n, r;
  return (
    (t = new Or({ props: { class: "h-5 w-5" } })),
    {
      c() {
        (e = R("a")),
          N(t.$$.fragment),
          m(e, "href", (n = s[5].bugs.url)),
          m(e, "target", "_blank"),
          m(e, "class", "hover:underline"),
          m(e, "rel", "noopener noreferrer"),
          m(e, "title", "Bugs");
      },
      m(i, o) {
        A(i, e, o), Q(t, e, null), (r = !0);
      },
      p(i, o) {
        (!r || (o & 32 && n !== (n = i[5].bugs.url))) && m(e, "href", n);
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        C(t.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && T(e), $(t);
      },
    }
  );
}
function pi(s) {
  let e,
    t,
    n,
    r,
    i,
    o,
    l,
    a,
    u = Bt(sn, s[0]) + "",
    c,
    y,
    d,
    h,
    f,
    p,
    b,
    w,
    k,
    O,
    q;
  l = new ts({ props: { class: "h-6 w-6" } });
  const P = [di, fi],
    v = [];
  function L(M, K) {
    return M[4] ? 0 : 1;
  }
  (f = L(s)), (p = v[f] = P[f](s));
  let S = s[6] && Jt(s);
  return {
    c() {
      (e = R("li")),
        (t = R("div")),
        (n = R("div")),
        (r = R("div")),
        (i = R("a")),
        (o = R("div")),
        N(l.$$.fragment),
        (a = D()),
        (c = j(u)),
        (d = D()),
        (h = R("div")),
        p.c(),
        (b = D()),
        S && S.c(),
        z(o, "hidden", !s[6]),
        m(i, "href", (y = `https://npmjs.com/package/${s[0]}`)),
        m(i, "target", "_blank"),
        m(
          i,
          "class",
          "hover:underline font-medium whitespace-nowrap flex items-center gap-2 text-lg"
        ),
        m(i, "rel", "noopener noreferrer"),
        z(i, "pt-1", s[6]),
        m(h, "class", "grid place-items-end gap-2 items-center"),
        m(n, "class", "flex justify-between p-4 py-2"),
        m(
          t,
          "class",
          "transition-[transform,background] duration-300 ease-in-out svelte-8luwom"
        ),
        z(t, "expanded", s[6]),
        m(e, "class", "animate-fadeIn transition-opacity svelte-8luwom"),
        m(
          e,
          "style",
          (w = `animation-delay: ${(s[3] + 1) * s[14]}s; opacity: ${
            s[8] ? 0.4 : 1
          }!important;`)
        ),
        z(e, "border-t", s[3] !== 0);
    },
    m(M, K) {
      A(M, e, K),
        g(e, t),
        g(t, n),
        g(n, r),
        g(r, i),
        g(i, o),
        Q(l, o, null),
        g(i, a),
        g(i, c),
        g(n, d),
        g(n, h),
        v[f].m(h, null),
        g(t, b),
        S && S.m(t, null),
        (k = !0),
        O || ((q = [de(e, "click", s[13]), de(e, "keydown", s[13])]), (O = !0));
    },
    p(M, [K]) {
      (!k || K & 64) && z(o, "hidden", !M[6]),
        (!k || K & 1) && u !== (u = Bt(sn, M[0]) + "") && ae(c, u),
        (!k || (K & 1 && y !== (y = `https://npmjs.com/package/${M[0]}`))) &&
          m(i, "href", y),
        (!k || K & 64) && z(i, "pt-1", M[6]);
      let ce = f;
      (f = L(M)),
        f === ce
          ? v[f].p(M, K)
          : (ne(),
            C(v[ce], 1, 1, () => {
              v[ce] = null;
            }),
            se(),
            (p = v[f]),
            p ? p.p(M, K) : ((p = v[f] = P[f](M)), p.c()),
            _(p, 1),
            p.m(h, null)),
        M[6]
          ? S
            ? (S.p(M, K), K & 64 && _(S, 1))
            : ((S = Jt(M)), S.c(), _(S, 1), S.m(t, null))
          : S &&
            (ne(),
            C(S, 1, 1, () => {
              S = null;
            }),
            se()),
        (!k || K & 64) && z(t, "expanded", M[6]),
        (!k ||
          (K & 264 &&
            w !==
              (w = `animation-delay: ${(M[3] + 1) * M[14]}s; opacity: ${
                M[8] ? 0.4 : 1
              }!important;`))) &&
          m(e, "style", w),
        (!k || K & 8) && z(e, "border-t", M[3] !== 0);
    },
    i(M) {
      k || (_(l.$$.fragment, M), _(p), _(S), (k = !0));
    },
    o(M) {
      C(l.$$.fragment, M), C(p), C(S), (k = !1);
    },
    d(M) {
      M && T(e), $(l), v[f].d(), S && S.d(), (O = !1), be(q);
    },
  };
}
const sn = 36;
function mi(s, e, t) {
  let n,
    r,
    i,
    o,
    { name: l = "" } = e,
    { version: a = "" } = e,
    { latest: u = "" } = e,
    { index: c = 0 } = e,
    { isLatest: y = !1 } = e,
    { meta: d } = e,
    { expandedRowIndex: h = -1 } = e,
    f = !1;
  const p = Vn({
    onMutate() {
      t(7, (f = !0));
    },
    onSettled() {
      t(7, (f = !1));
    },
  });
  Ve(s, p, (L) => t(9, (i = L)));
  const b = st();
  async function w(L) {
    try {
      const S = await i.mutateAsync(L);
      b.setQueryData([Fe.package], Jn(S)), await b.refetchQueries([Fe.package]);
    } catch (S) {
      console.log("Failed to upgrade packages:", { originalError: S });
    }
  }
  function k() {
    h === c ? t(16, (h = -1)) : t(16, (h = c));
  }
  const O = 1 / 30;
  function q(L) {
    L.key === "Escape" && t(16, (h = -1));
  }
  const P = lr(l);
  Ve(s, P, (L) => t(10, (o = L))),
    _t(() => {
      window.addEventListener("keydown", q);
    }),
    vt(() => {
      window.removeEventListener("keydown", q);
    });
  const v = (L) => {
    L.stopPropagation(), w([{ name: l, version: a, latest: u, meta: d }]);
  };
  return (
    (s.$$set = (L) => {
      "name" in L && t(0, (l = L.name)),
        "version" in L && t(1, (a = L.version)),
        "latest" in L && t(2, (u = L.latest)),
        "index" in L && t(3, (c = L.index)),
        "isLatest" in L && t(4, (y = L.isLatest)),
        "meta" in L && t(5, (d = L.meta)),
        "expandedRowIndex" in L && t(16, (h = L.expandedRowIndex));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 65544 && t(6, (n = h === c)),
        s.$$.dirty & 65600 && t(8, (r = !n && h !== -1));
    }),
    [l, a, u, c, y, d, n, f, r, i, o, p, w, k, O, P, h, v]
  );
}
class gi extends J {
  constructor(e) {
    super(),
      V(this, e, mi, pi, H, {
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
function rn(s, e, t) {
  const n = s.slice();
  return (n[5] = e[t]), n;
}
function on(s) {
  let e,
    t,
    n = s[5] + 1 + "",
    r,
    i,
    o,
    l;
  return {
    c() {
      (e = R("li")),
        (t = R("button")),
        (r = j(n)),
        m(t, "data-page", (i = s[5])),
        m(t, "class", "btn-arrow text-xl svelte-16bdnnj"),
        z(t, "bg-castleton-green", s[5] === s[0]);
    },
    m(a, u) {
      A(a, e, u), g(e, t), g(t, r), o || ((l = de(t, "click", s[2])), (o = !0));
    },
    p(a, u) {
      u & 2 && n !== (n = a[5] + 1 + "") && ae(r, n),
        u & 2 && i !== (i = a[5]) && m(t, "data-page", i),
        u & 3 && z(t, "bg-castleton-green", a[5] === a[0]);
    },
    d(a) {
      a && T(e), (o = !1), l();
    },
  };
}
function bi(s) {
  let e,
    t,
    n,
    r,
    i,
    o,
    l,
    a,
    u,
    c,
    y,
    d,
    h,
    f = yt(0, s[1]),
    p = [];
  for (let b = 0; b < f.length; b += 1) p[b] = on(rn(s, f, b));
  return {
    c() {
      (e = R("ul")), (t = R("li")), (n = R("button")), (r = j("◄")), (o = D());
      for (let b = 0; b < p.length; b += 1) p[b].c();
      (l = D()),
        (a = R("li")),
        (u = R("button")),
        (c = j("►")),
        m(n, "class", "btn-arrow svelte-16bdnnj"),
        (n.disabled = i = s[0] === 0),
        m(u, "class", "btn-arrow svelte-16bdnnj"),
        (u.disabled = y = s[0] === s[1] - 1),
        m(
          e,
          "class",
          "inline-flex mx-auto font-medium p-4 py-2 items-center gap-2"
        );
    },
    m(b, w) {
      A(b, e, w), g(e, t), g(t, n), g(n, r), g(e, o);
      for (let k = 0; k < p.length; k += 1) p[k] && p[k].m(e, null);
      g(e, l),
        g(e, a),
        g(a, u),
        g(u, c),
        d || ((h = [de(n, "click", s[4]), de(u, "click", s[3])]), (d = !0));
    },
    p(b, [w]) {
      if ((w & 1 && i !== (i = b[0] === 0) && (n.disabled = i), w & 7)) {
        f = yt(0, b[1]);
        let k;
        for (k = 0; k < f.length; k += 1) {
          const O = rn(b, f, k);
          p[k] ? p[k].p(O, w) : ((p[k] = on(O)), p[k].c(), p[k].m(e, l));
        }
        for (; k < p.length; k += 1) p[k].d(1);
        p.length = f.length;
      }
      w & 3 && y !== (y = b[0] === b[1] - 1) && (u.disabled = y);
    },
    i: X,
    o: X,
    d(b) {
      b && T(e), Ae(p, b), (d = !1), be(h);
    },
  };
}
function yi(s, e, t) {
  let { pages: n = 0 } = e,
    { pageIndex: r = 0 } = e;
  function i(a) {
    const { page: u } = a.target.dataset;
    t(0, (r = Number(u)));
  }
  function o() {
    r < n - 1 && t(0, r++, r);
  }
  function l() {
    r > 0 && t(0, r--, r);
  }
  return (
    (s.$$set = (a) => {
      "pages" in a && t(1, (n = a.pages)),
        "pageIndex" in a && t(0, (r = a.pageIndex));
    }),
    [r, n, i, o, l]
  );
}
class _i extends J {
  constructor(e) {
    super(), V(this, e, yi, bi, H, { pages: 1, pageIndex: 0 });
  }
}
function ln(s, e, t) {
  const n = s.slice();
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
function an(s, e, t) {
  const n = s.slice();
  return (n[35] = e[t].keys), (n[36] = e[t].label), n;
}
function un(s, e, t) {
  const n = s.slice();
  return (n[39] = e[t].symbol), (n[40] = e[t].rotation), n;
}
function vi(s) {
  let e, t;
  return (
    (e = new Hr({})),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function wi(s) {
  let e, t;
  return (
    (e = new ii({})),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function cn(s) {
  let e,
    t,
    n,
    r,
    i = s[39] + "",
    o,
    l,
    a;
  return (
    (t = new xn({
      props: { class: "h-3 w-3", style: `transform: rotate(${s[40]}deg);` },
    })),
    {
      c() {
        (e = R("kbd")),
          N(t.$$.fragment),
          (n = D()),
          (r = R("span")),
          (o = j(i)),
          (l = D()),
          m(r, "class", "sr-only"),
          m(
            e,
            "class",
            "text-sm font-semibold flex p-1.5 bg-castleton-green/40 rounded"
          );
      },
      m(u, c) {
        A(u, e, c), Q(t, e, null), g(e, n), g(e, r), g(r, o), g(e, l), (a = !0);
      },
      p: X,
      i(u) {
        a || (_(t.$$.fragment, u), (a = !0));
      },
      o(u) {
        C(t.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && T(e), $(t);
      },
    }
  );
}
function fn(s) {
  let e,
    t,
    n,
    r,
    i = s[36] + "",
    o,
    l,
    a,
    u = s[35],
    c = [];
  for (let d = 0; d < u.length; d += 1) c[d] = cn(un(s, u, d));
  const y = (d) =>
    C(c[d], 1, 1, () => {
      c[d] = null;
    });
  return {
    c() {
      (e = R("li")), (t = R("div"));
      for (let d = 0; d < c.length; d += 1) c[d].c();
      (n = D()),
        (r = R("span")),
        (o = j(i)),
        (l = D()),
        m(t, "class", "flex gap-2"),
        m(r, "class", "ml-2 text-sm"),
        m(e, "class", "flex items-center");
    },
    m(d, h) {
      A(d, e, h), g(e, t);
      for (let f = 0; f < c.length; f += 1) c[f] && c[f].m(t, null);
      g(e, n), g(e, r), g(r, o), g(e, l), (a = !0);
    },
    p(d, h) {
      if (h[0] & 32768) {
        u = d[35];
        let f;
        for (f = 0; f < u.length; f += 1) {
          const p = un(d, u, f);
          c[f]
            ? (c[f].p(p, h), _(c[f], 1))
            : ((c[f] = cn(p)), c[f].c(), _(c[f], 1), c[f].m(t, null));
        }
        for (ne(), f = u.length; f < c.length; f += 1) y(f);
        se();
      }
    },
    i(d) {
      if (!a) {
        for (let h = 0; h < u.length; h += 1) _(c[h]);
        a = !0;
      }
    },
    o(d) {
      c = c.filter(Boolean);
      for (let h = 0; h < c.length; h += 1) C(c[h]);
      a = !1;
    },
    d(d) {
      d && T(e), Ae(c, d);
    },
  };
}
function dn(s) {
  let e, t;
  return (
    (e = new es({ props: { class: "h-4 w-4 ml-1" } })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function hn(s) {
  let e, t;
  return (
    (e = new ns({
      props: {
        disabled: s[12].isLoading,
        isLoading: s[12].isLoading,
        $$slots: { default: [Ci] },
        $$scope: { ctx: s },
      },
    })),
    e.$on("click", s[24]),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      p(n, r) {
        const i = {};
        r[0] & 4096 && (i.disabled = n[12].isLoading),
          r[0] & 4096 && (i.isLoading = n[12].isLoading),
          r[1] & 4096 && (i.$$scope = { dirty: r, ctx: n }),
          e.$set(i);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function Ci(s) {
  let e;
  return {
    c() {
      e = j("Upgrade all");
    },
    m(t, n) {
      A(t, e, n);
    },
    d(t) {
      t && T(e);
    },
  };
}
function pn(s) {
  let e, t, n;
  function r(o) {
    s[25](o);
  }
  let i = {
    index: s[34],
    name: s[28],
    version: s[29],
    latest: s[30],
    isLatest: s[31],
    meta: s[32],
  };
  return (
    s[5] !== void 0 && (i.expandedRowIndex = s[5]),
    (e = new gi({ props: i })),
    je.push(() => Ct(e, "expandedRowIndex", r)),
    {
      c() {
        N(e.$$.fragment);
      },
      m(o, l) {
        Q(e, o, l), (n = !0);
      },
      p(o, l) {
        const a = {};
        l[0] & 1024 && (a.name = o[28]),
          l[0] & 1024 && (a.version = o[29]),
          l[0] & 1024 && (a.latest = o[30]),
          l[0] & 1024 && (a.isLatest = o[31]),
          l[0] & 1024 && (a.meta = o[32]),
          !t &&
            l[0] & 32 &&
            ((t = !0), (a.expandedRowIndex = o[5]), wt(() => (t = !1))),
          e.$set(a);
      },
      i(o) {
        n || (_(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        $(e, o);
      },
    }
  );
}
function mn(s) {
  let e, t, n, r, i;
  function o(a) {
    s[26](a);
  }
  let l = { pages: s[11] };
  return (
    s[2] !== void 0 && (l.pageIndex = s[2]),
    (n = new _i({ props: l })),
    je.push(() => Ct(n, "pageIndex", o)),
    {
      c() {
        (e = R("footer")),
          (t = R("div")),
          N(n.$$.fragment),
          m(t, "class", "bg-slate-900/90 rounded-full"),
          m(e, "class", "grid place-items-center");
      },
      m(a, u) {
        A(a, e, u), g(e, t), Q(n, t, null), (i = !0);
      },
      p(a, u) {
        const c = {};
        u[0] & 2048 && (c.pages = a[11]),
          !r &&
            u[0] & 4 &&
            ((r = !0), (c.pageIndex = a[2]), wt(() => (r = !1))),
          n.$set(c);
      },
      i(a) {
        i || (_(n.$$.fragment, a), (i = !0));
      },
      o(a) {
        C(n.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && T(e), $(n);
      },
    }
  );
}
function ki(s) {
  let e,
    t,
    n,
    r,
    i,
    o,
    l,
    a,
    u,
    c,
    y,
    d,
    h,
    f,
    p,
    b,
    w = s[0] === "dependencies" ? "Dependencies" : "Dev Dependencies",
    k,
    O,
    q,
    P = s[4].length + "",
    v,
    L,
    S = s[1].length + "",
    M,
    K,
    ce,
    we,
    Pe,
    Se,
    F,
    he,
    pe,
    rt,
    Pt;
  const St = [wi, vi],
    Ce = [];
  function Et(E, I) {
    return E[6] ? 0 : 1;
  }
  (r = Et(s)), (i = Ce[r] = St[r](s));
  let ke = s[15],
    G = [];
  for (let E = 0; E < ke.length; E += 1) G[E] = fn(an(s, ke, E));
  const rs = (E) =>
    C(G[E], 1, 1, () => {
      G[E] = null;
    });
  let te = s[8] && dn(),
    x = !s[8] && hn(s),
    Le = s[10],
    Z = [];
  for (let E = 0; E < Le.length; E += 1) Z[E] = pn(ln(s, Le, E));
  const is = (E) =>
    C(Z[E], 1, 1, () => {
      Z[E] = null;
    });
  let ee = s[11] > 1 && mn(s);
  return {
    c() {
      (e = R("div")),
        (t = R("aside")),
        (n = R("button")),
        i.c(),
        (o = D()),
        (l = R("ul"));
      for (let E = 0; E < G.length; E += 1) G[E].c();
      (u = D()),
        (c = R("section")),
        (y = R("div")),
        (d = R("input")),
        (h = D()),
        (f = R("header")),
        (p = R("div")),
        (b = R("div")),
        (k = j(w)),
        (O = D()),
        (q = R("span")),
        (v = j(P)),
        (L = j("/")),
        (M = j(S)),
        (K = D()),
        te && te.c(),
        (ce = D()),
        (we = R("div")),
        x && x.c(),
        (Pe = D()),
        (Se = R("main")),
        (F = R("ul"));
      for (let E = 0; E < Z.length; E += 1) Z[E].c();
      (he = D()),
        ee && ee.c(),
        m(n, "class", "help-trigger svelte-1lgocty"),
        z(n, "hidden", s[6]),
        m(l, "class", "bg-slate-900/60 p-4 rounded-xl grid gap-2 opacity-10"),
        m(l, "aria-hidden", (a = !s[6])),
        z(l, "opacity-100", s[6]),
        m(
          t,
          "class",
          "absolute right-0 top-8 transition-all duration-300 ease-in"
        ),
        z(t, "translate-x-64", s[6]),
        m(d, "type", "search"),
        m(d, "class", "search-input svelte-1lgocty"),
        m(d, "placeholder", "package name or version"),
        m(y, "class", ""),
        m(
          q,
          "class",
          "text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
        ),
        m(p, "class", "flex items-center justify-between w-full"),
        m(
          f,
          "class",
          "p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2"
        ),
        m(F, "class", "grid"),
        m(Se, "class", "min-h-[32rem] mx-2"),
        m(
          c,
          "class",
          "bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2"
        ),
        m(e, "class", "relative");
    },
    m(E, I) {
      A(E, e, I), g(e, t), g(t, n), Ce[r].m(n, null), g(t, o), g(t, l);
      for (let ue = 0; ue < G.length; ue += 1) G[ue] && G[ue].m(l, null);
      g(e, u),
        g(e, c),
        g(c, y),
        g(y, d),
        Tt(d, s[3]),
        g(c, h),
        g(c, f),
        g(f, p),
        g(p, b),
        g(b, k),
        g(b, O),
        g(b, q),
        g(q, v),
        g(q, L),
        g(q, M),
        g(p, K),
        te && te.m(p, null),
        g(f, ce),
        g(f, we),
        x && x.m(we, null),
        g(c, Pe),
        g(c, Se),
        g(Se, F);
      for (let ue = 0; ue < Z.length; ue += 1) Z[ue] && Z[ue].m(F, null);
      g(c, he),
        ee && ee.m(c, null),
        (pe = !0),
        rt ||
          ((Pt = [
            de(n, "click", s[19]),
            ls(oi.call(null, t)),
            de(t, "outsideclick", s[20]),
            de(d, "input", s[21]),
            de(d, "focus", s[22]),
            de(d, "blur", s[23]),
          ]),
          (rt = !0));
    },
    p(E, I) {
      let ue = r;
      if (
        ((r = Et(E)),
        r !== ue &&
          (ne(),
          C(Ce[ue], 1, 1, () => {
            Ce[ue] = null;
          }),
          se(),
          (i = Ce[r]),
          i || ((i = Ce[r] = St[r](E)), i.c()),
          _(i, 1),
          i.m(n, null)),
        (!pe || I[0] & 64) && z(n, "hidden", E[6]),
        I[0] & 32768)
      ) {
        ke = E[15];
        let B;
        for (B = 0; B < ke.length; B += 1) {
          const Ie = an(E, ke, B);
          G[B]
            ? (G[B].p(Ie, I), _(G[B], 1))
            : ((G[B] = fn(Ie)), G[B].c(), _(G[B], 1), G[B].m(l, null));
        }
        for (ne(), B = ke.length; B < G.length; B += 1) rs(B);
        se();
      }
      if (
        ((!pe || (I[0] & 64 && a !== (a = !E[6]))) && m(l, "aria-hidden", a),
        (!pe || I[0] & 64) && z(l, "opacity-100", E[6]),
        (!pe || I[0] & 64) && z(t, "translate-x-64", E[6]),
        I[0] & 8 && d.value !== E[3] && Tt(d, E[3]),
        (!pe || I[0] & 1) &&
          w !==
            (w =
              E[0] === "dependencies" ? "Dependencies" : "Dev Dependencies") &&
          ae(k, w),
        (!pe || I[0] & 16) && P !== (P = E[4].length + "") && ae(v, P),
        (!pe || I[0] & 2) && S !== (S = E[1].length + "") && ae(M, S),
        E[8]
          ? te
            ? I[0] & 256 && _(te, 1)
            : ((te = dn()), te.c(), _(te, 1), te.m(p, null))
          : te &&
            (ne(),
            C(te, 1, 1, () => {
              te = null;
            }),
            se()),
        E[8]
          ? x &&
            (ne(),
            C(x, 1, 1, () => {
              x = null;
            }),
            se())
          : x
          ? (x.p(E, I), I[0] & 256 && _(x, 1))
          : ((x = hn(E)), x.c(), _(x, 1), x.m(we, null)),
        I[0] & 1056)
      ) {
        Le = E[10];
        let B;
        for (B = 0; B < Le.length; B += 1) {
          const Ie = ln(E, Le, B);
          Z[B]
            ? (Z[B].p(Ie, I), _(Z[B], 1))
            : ((Z[B] = pn(Ie)), Z[B].c(), _(Z[B], 1), Z[B].m(F, null));
        }
        for (ne(), B = Le.length; B < Z.length; B += 1) is(B);
        se();
      }
      E[11] > 1
        ? ee
          ? (ee.p(E, I), I[0] & 2048 && _(ee, 1))
          : ((ee = mn(E)), ee.c(), _(ee, 1), ee.m(c, null))
        : ee &&
          (ne(),
          C(ee, 1, 1, () => {
            ee = null;
          }),
          se());
    },
    i(E) {
      if (!pe) {
        _(i);
        for (let I = 0; I < ke.length; I += 1) _(G[I]);
        _(te), _(x);
        for (let I = 0; I < Le.length; I += 1) _(Z[I]);
        _(ee), (pe = !0);
      }
    },
    o(E) {
      C(i), (G = G.filter(Boolean));
      for (let I = 0; I < G.length; I += 1) C(G[I]);
      C(te), C(x), (Z = Z.filter(Boolean));
      for (let I = 0; I < Z.length; I += 1) C(Z[I]);
      C(ee), (pe = !1);
    },
    d(E) {
      E && T(e),
        Ce[r].d(),
        Ae(G, E),
        te && te.d(),
        x && x.d(),
        Ae(Z, E),
        ee && ee.d(),
        (rt = !1),
        be(Pt);
    },
  };
}
function Li(s, e, t) {
  let n,
    r,
    i,
    o,
    l,
    a,
    u,
    c,
    y,
    { selectedTab: d = "dependencies" } = e,
    { entries: h = [] } = e,
    f = 0,
    p = -1,
    b = "",
    w = !1,
    k = !1;
  const O = Vn();
  Ve(s, O, (F) => t(12, (y = F)));
  const q = st();
  async function P(F) {
    try {
      const he = await y.mutateAsync(F);
      q.setQueryData([Fe.package], Jn(he)),
        await q.refetchQueries([Fe.package]);
    } catch (he) {
      console.log("Failed to upgrade packages:", { originalError: he });
    }
  }
  ar((F) => {
    if (F.shiftKey)
      switch (F.key) {
        case "ArrowRight":
        case "ArrowLeft":
          F.preventDefault(),
            t(
              0,
              (d = d === "dependencies" ? "devDependencies" : "dependencies")
            ),
            t(2, (f = 0)),
            t(5, (p = -1));
          break;
      }
    switch (F.key) {
      case "ArrowUp":
        F.preventDefault(), p > 0 ? t(5, p--, p) : t(5, (p = l.length - 1));
        break;
      case "ArrowDown":
        F.preventDefault(), p < l.length - 1 ? t(5, p++, p) : t(5, (p = 0));
        break;
      case "ArrowLeft":
        f > 0 && (F.preventDefault(), t(2, f--, f), t(5, (p = -1)));
        break;
      case "ArrowRight":
        f < r - 1 && (F.preventDefault(), t(2, f++, f), t(5, (p = -1)));
        break;
      case "Escape":
        F.preventDefault(), w && t(6, (w = !1));
        break;
      case "h":
        k || (F.preventDefault(), t(6, (w = !w)));
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
    L = () => {
      t(6, (w = !w));
    },
    S = () => t(6, (w = !1));
  function M() {
    (b = this.value), t(3, b);
  }
  const K = () => {
      t(7, (k = !0));
    },
    ce = () => {
      t(7, (k = !1));
    },
    we = () => P(u);
  function Pe(F) {
    (p = F), t(5, p), t(0, d), t(3, b);
  }
  function Se(F) {
    (f = F), t(2, f), t(0, d), t(3, b);
  }
  return (
    (s.$$set = (F) => {
      "selectedTab" in F && t(0, (d = F.selectedTab)),
        "entries" in F && t(1, (h = F.entries));
    }),
    (s.$$.update = () => {
      s.$$.dirty[0] & 10 &&
        t(
          18,
          (n = h.filter(
            ({ name: F, version: he }) =>
              F.toLowerCase().includes(b.toLowerCase()) ||
              he.toLowerCase().includes(b.toLowerCase())
          ))
        ),
        s.$$.dirty[0] & 262144 && t(11, (r = Math.ceil(n.length / ot))),
        s.$$.dirty[0] & 262144 &&
          t(
            16,
            (i = n
              .map((F) => ({ ...F, isLatest: Un(F.version, F.latest) }))
              .sort((F, he) =>
                F.isLatest && he.isLatest
                  ? 0
                  : F.isLatest && !he.isLatest
                  ? 1
                  : -1
              ))
          ),
        s.$$.dirty[0] & 1 && d && (t(2, (f = 0)), t(5, (p = -1))),
        s.$$.dirty[0] & 8 && b && (t(2, (f = 0)), t(5, (p = -1))),
        s.$$.dirty[0] & 4 && t(17, (o = f * ot)),
        s.$$.dirty[0] & 196608 && t(10, (l = i.slice(o, o + ot))),
        s.$$.dirty[0] & 65536 &&
          t(
            4,
            ([a, u] = Xn(Yn("isLatest"), i)),
            a,
            (t(9, u), t(16, i), t(18, n), t(1, h), t(3, b))
          ),
        s.$$.dirty[0] & 18 && t(8, (c = a.length === h.length));
    }),
    [
      d,
      h,
      f,
      b,
      a,
      p,
      w,
      k,
      c,
      u,
      l,
      r,
      y,
      O,
      P,
      v,
      i,
      o,
      n,
      L,
      S,
      M,
      K,
      ce,
      we,
      Pe,
      Se,
    ]
  );
}
class Ri extends J {
  constructor(e) {
    super(),
      V(this, e, Li, ki, H, { selectedTab: 0, entries: 1 }, null, [-1, -1]);
  }
}
const Oi = "@greenbot/cli",
  Pi = "0.22.0",
  Si = ["greenbot", "cli", "package updater"],
  Ei = "An interactive package updater for npm based applications",
  Mi = "https://github.com/alanrsoares/greenbot",
  qi = "MIT",
  Ti = ["dist/", "bin/"],
  Ai = "./bin/greenbot.cjs",
  Fi = "module",
  Di = {
    dev: "vite",
    build: "vite build",
    serve: "vite preview",
    check: "svelte-check --tsconfig ./tsconfig.json",
    preversion: "yarn build",
    release: "npm publish && git push && git push --tags",
    prepare: "husky install",
  },
  Ii = {
    "@sveltejs/vite-plugin-svelte": "^1.4.0",
    "@tsconfig/svelte": "^3.0.0",
    "@types/cors": "^2.8.13",
    autoprefixer: "^10.4.14",
    "broadcast-channel": "^4.20.2",
    cssnano: "^5.1.15",
    husky: "^8.0.3",
    postcss: "^8.4.24",
    "postcss-load-config": "^4.0.1",
    prettier: "^2.8.8",
    "pretty-quick": "^3.1.3",
    svelte: "^3.59.1",
    "svelte-check": "^2.10.3",
    "svelte-preprocess": "^4.10.7",
    tailwindcss: "^3.3.2",
    tslib: "^2.5.2",
    typescript: "^4.9.5",
    vite: "^4.3.9",
    "vite-tsconfig-paths": "^4.2.0",
  },
  Qi = {
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
    "typewriter-effect": "^2.19.0",
  },
  $i = {
    name: Oi,
    version: Pi,
    keywords: Si,
    description: Ei,
    homepage: Mi,
    license: qi,
    files: Ti,
    bin: Ai,
    type: Fi,
    scripts: Di,
    devDependencies: Ii,
    dependencies: Qi,
  };
const Ni = (s) => ({}),
  gn = (s) => ({}),
  ji = (s) => ({}),
  bn = (s) => ({});
function Ui(s) {
  let e, t, n, r, i, o, l, a, u, c, y, d, h, f, p;
  const b = s[1].logo,
    w = re(b, s, s[0], bn),
    k = s[1].version,
    O = re(k, s, s[0], gn),
    q = s[1].default,
    P = re(q, s, s[0], null);
  return {
    c() {
      (e = R("div")),
        (t = R("header")),
        (n = R("nav")),
        (r = R("h1")),
        (i = R("div")),
        w && w.c(),
        (o = D()),
        (l = R("div")),
        (l.textContent = "_greenbot"),
        (a = D()),
        O && O.c(),
        (u = D()),
        (c = R("main")),
        P && P.c(),
        (y = D()),
        (d = R("footer")),
        (h = R("div")),
        (f = R("span")),
        (f.textContent = `npm-greenbot@v${$i.version}`),
        m(i, "class", "w-12"),
        m(r, "class", "flex items-center gap-2 whitespace-nowrap p-2"),
        m(
          n,
          "class",
          "md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"
        ),
        m(t, "class", "border-b border-granny-smith-apple/50 bg-slate-900/60"),
        m(c, "class", "layout-main svelte-1m49ym4"),
        m(f, "class", "text-sm"),
        m(h, "class", "max-w-xl m-auto text-center"),
        m(e, "class", "layout svelte-1m49ym4");
    },
    m(v, L) {
      A(v, e, L),
        g(e, t),
        g(t, n),
        g(n, r),
        g(r, i),
        w && w.m(i, null),
        g(r, o),
        g(r, l),
        g(n, a),
        O && O.m(n, null),
        g(e, u),
        g(e, c),
        P && P.m(c, null),
        g(e, y),
        g(e, d),
        g(d, h),
        g(h, f),
        (p = !0);
    },
    p(v, [L]) {
      w &&
        w.p &&
        (!p || L & 1) &&
        oe(w, b, v, v[0], p ? ie(b, v[0], L, ji) : le(v[0]), bn),
        O &&
          O.p &&
          (!p || L & 1) &&
          oe(O, k, v, v[0], p ? ie(k, v[0], L, Ni) : le(v[0]), gn),
        P &&
          P.p &&
          (!p || L & 1) &&
          oe(P, q, v, v[0], p ? ie(q, v[0], L, null) : le(v[0]), null);
    },
    i(v) {
      p || (_(w, v), _(O, v), _(P, v), (p = !0));
    },
    o(v) {
      C(w, v), C(O, v), C(P, v), (p = !1);
    },
    d(v) {
      v && T(e), w && w.d(v), O && O.d(v), P && P.d(v);
    },
  };
}
function Bi(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
  return (
    (s.$$set = (i) => {
      "$$scope" in i && t(0, (r = i.$$scope));
    }),
    [r, n]
  );
}
class Ki extends J {
  constructor(e) {
    super(), V(this, e, Bi, Ui, H, {});
  }
}
function zi(s) {
  let e, t, n, r, i, o, l, a, u;
  return (
    (t = new ts({ props: { class: "h-6 w-6" } })),
    {
      c() {
        (e = R("a")),
          N(t.$$.fragment),
          (n = D()),
          (r = R("div")),
          (i = j(s[0])),
          (o = j(" @ ")),
          (l = j(s[1])),
          m(r, "class", "font-mono font-medium"),
          m(e, "target", "_blank"),
          m(e, "href", (a = `https://www.npmjs.com/package/${s[0]}`)),
          m(e, "rel", "noopener noreferrer"),
          m(e, "class", "svelte-2pn84z");
      },
      m(c, y) {
        A(c, e, y),
          Q(t, e, null),
          g(e, n),
          g(e, r),
          g(r, i),
          g(r, o),
          g(r, l),
          (u = !0);
      },
      p(c, [y]) {
        (!u || y & 1) && ae(i, c[0]),
          (!u || y & 2) && ae(l, c[1]),
          (!u ||
            (y & 1 && a !== (a = `https://www.npmjs.com/package/${c[0]}`))) &&
            m(e, "href", a);
      },
      i(c) {
        u || (_(t.$$.fragment, c), (u = !0));
      },
      o(c) {
        C(t.$$.fragment, c), (u = !1);
      },
      d(c) {
        c && T(e), $(t);
      },
    }
  );
}
function Hi(s, e, t) {
  let { name: n = "" } = e,
    { version: r = "" } = e;
  return (
    (s.$$set = (i) => {
      "name" in i && t(0, (n = i.name)),
        "version" in i && t(1, (r = i.version));
    }),
    [n, r]
  );
}
class Gi extends J {
  constructor(e) {
    super(), V(this, e, Hi, zi, H, { name: 0, version: 1 });
  }
}
function yn(s, e, t) {
  const n = s.slice();
  return (n[3] = e[t]), n;
}
function _n(s) {
  let e,
    t = s[3].label + "",
    n,
    r,
    i,
    o,
    l;
  return {
    c() {
      (e = R("button")),
        (n = j(t)),
        (r = D()),
        m(e, "data-value", (i = s[3].value)),
        m(e, "class", "svelte-u0zq3l"),
        z(e, "bg-castleton-green", s[0] === s[3].value);
    },
    m(a, u) {
      A(a, e, u),
        g(e, n),
        g(e, r),
        o ||
          ((l = de(e, "click", function () {
            Ke(s[2].bind(this, s[3])) &&
              s[2].bind(this, s[3]).apply(this, arguments);
          })),
          (o = !0));
    },
    p(a, u) {
      (s = a),
        u & 2 && t !== (t = s[3].label + "") && ae(n, t),
        u & 2 && i !== (i = s[3].value) && m(e, "data-value", i),
        u & 3 && z(e, "bg-castleton-green", s[0] === s[3].value);
    },
    d(a) {
      a && T(e), (o = !1), l();
    },
  };
}
function Zi(s) {
  let e,
    t = s[1],
    n = [];
  for (let r = 0; r < t.length; r += 1) n[r] = _n(yn(s, t, r));
  return {
    c() {
      e = R("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      m(e, "class", "container svelte-u0zq3l");
    },
    m(r, i) {
      A(r, e, i);
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(e, null);
    },
    p(r, [i]) {
      if (i & 7) {
        t = r[1];
        let o;
        for (o = 0; o < t.length; o += 1) {
          const l = yn(r, t, o);
          n[o] ? n[o].p(l, i) : ((n[o] = _n(l)), n[o].c(), n[o].m(e, null));
        }
        for (; o < n.length; o += 1) n[o].d(1);
        n.length = t.length;
      }
    },
    i: X,
    o: X,
    d(r) {
      r && T(e), Ae(n, r);
    },
  };
}
function Wi(s, e, t) {
  let { selectedTab: n = "" } = e,
    { tabs: r = [] } = e,
    { onChange: i } = e;
  return (
    (s.$$set = (o) => {
      "selectedTab" in o && t(0, (n = o.selectedTab)),
        "tabs" in o && t(1, (r = o.tabs)),
        "onChange" in o && t(2, (i = o.onChange));
    }),
    [n, r, i]
  );
}
class Vi extends J {
  constructor(e) {
    super(), V(this, e, Wi, Zi, H, { selectedTab: 0, tabs: 1, onChange: 2 });
  }
}
function Ji(s) {
  let e, t, n;
  return {
    c() {
      (e = ge("svg")),
        (t = ge("path")),
        (n = ge("path")),
        m(t, "opacity", "0.2"),
        m(t, "fill-rule", "evenodd"),
        m(t, "clip-rule", "evenodd"),
        m(
          t,
          "d",
          "M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        ),
        m(t, "fill", "currentColor"),
        m(
          n,
          "d",
          "M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        ),
        m(n, "fill", "currentColor"),
        m(e, "stroke", "currentColor"),
        m(e, "fill", "none"),
        m(e, "stroke-width", "0"),
        m(e, "viewBox", "0 0 24 24"),
        m(e, "height", "1em"),
        m(e, "width", "1em"),
        m(e, "xmlns", "http://www.w3.org/2000/svg"),
        z(e, "animate-spin", s[0]);
    },
    m(r, i) {
      A(r, e, i), g(e, t), g(e, n);
    },
    p(r, [i]) {
      i & 1 && z(e, "animate-spin", r[0]);
    },
    i: X,
    o: X,
    d(r) {
      r && T(e);
    },
  };
}
function Yi(s, e, t) {
  let { animated: n = !1 } = e;
  return (
    (s.$$set = (r) => {
      "animated" in r && t(0, (n = r.animated));
    }),
    [n]
  );
}
class Xi extends J {
  constructor(e) {
    super(), V(this, e, Yi, Ji, H, { animated: 0 });
  }
}
function vn(s) {
  let e, t, n, r, i, o;
  return (
    (n = new Xi({ props: { animated: !0 } })),
    {
      c() {
        (e = R("div")),
          (t = R("div")),
          N(n.$$.fragment),
          (r = D()),
          (i = R("span")),
          (i.textContent = "Loading dependencies"),
          m(t, "class", "h-4 w-4"),
          m(
            e,
            "class",
            "border-2 border-slate-900 bg-slate-900/60 rounded-3xl flex justify-center items-center overflow-hidden p-8 gap-2"
          );
      },
      m(l, a) {
        A(l, e, a), g(e, t), Q(n, t, null), g(e, r), g(e, i), (o = !0);
      },
      i(l) {
        o || (_(n.$$.fragment, l), (o = !0));
      },
      o(l) {
        C(n.$$.fragment, l), (o = !1);
      },
      d(l) {
        l && T(e), $(n);
      },
    }
  );
}
function wn(s) {
  let e, t, n, r, i;
  e = new Vi({
    props: {
      onChange: s[4],
      selectedTab: s[0],
      tabs: [
        { value: "dependencies", label: "Dependencies" },
        { value: "devDependencies", label: "Dev Dependencies" },
      ],
    },
  });
  function o(a) {
    s[7](a);
  }
  let l = { entries: s[2] };
  return (
    s[0] !== void 0 && (l.selectedTab = s[0]),
    (n = new Ri({ props: l })),
    je.push(() => Ct(n, "selectedTab", o)),
    {
      c() {
        N(e.$$.fragment), (t = D()), N(n.$$.fragment);
      },
      m(a, u) {
        Q(e, a, u), A(a, t, u), Q(n, a, u), (i = !0);
      },
      p(a, u) {
        const c = {};
        u & 1 && (c.selectedTab = a[0]), e.$set(c);
        const y = {};
        u & 4 && (y.entries = a[2]),
          !r && u & 1 && ((r = !0), (y.selectedTab = a[0]), wt(() => (r = !1))),
          n.$set(y);
      },
      i(a) {
        i || (_(e.$$.fragment, a), _(n.$$.fragment, a), (i = !0));
      },
      o(a) {
        C(e.$$.fragment, a), C(n.$$.fragment, a), (i = !1);
      },
      d(a) {
        $(e, a), a && T(t), $(n, a);
      },
    }
  );
}
function xi(s) {
  let e,
    t,
    n,
    r = s[1].isLoading && vn(),
    i = s[1].data && wn(s);
  return {
    c() {
      (e = R("div")),
        r && r.c(),
        (t = D()),
        i && i.c(),
        m(e, "class", "w-full grid gap-4");
    },
    m(o, l) {
      A(o, e, l), r && r.m(e, null), g(e, t), i && i.m(e, null), (n = !0);
    },
    p(o, l) {
      o[1].isLoading
        ? r
          ? l & 2 && _(r, 1)
          : ((r = vn()), r.c(), _(r, 1), r.m(e, t))
        : r &&
          (ne(),
          C(r, 1, 1, () => {
            r = null;
          }),
          se()),
        o[1].data
          ? i
            ? (i.p(o, l), l & 2 && _(i, 1))
            : ((i = wn(o)), i.c(), _(i, 1), i.m(e, null))
          : i &&
            (ne(),
            C(i, 1, 1, () => {
              i = null;
            }),
            se());
    },
    i(o) {
      n || (_(r), _(i), (n = !0));
    },
    o(o) {
      C(r), C(i), (n = !1);
    },
    d(o) {
      o && T(e), r && r.d(), i && i.d();
    },
  };
}
function eo(s) {
  let e, t;
  return (
    (e = new fr({ props: { mood: s[3], slot: "logo" } })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      p(n, r) {
        const i = {};
        r & 8 && (i.mood = n[3]), e.$set(i);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function Cn(s) {
  let e, t;
  return (
    (e = new Gi({
      props: { name: s[1].data.name, version: s[1].data.version },
    })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      p(n, r) {
        const i = {};
        r & 2 && (i.name = n[1].data.name),
          r & 2 && (i.version = n[1].data.version),
          e.$set(i);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function to(s) {
  let e,
    t,
    n = s[1].data && Cn(s);
  return {
    c() {
      (e = R("div")), n && n.c(), m(e, "slot", "version");
    },
    m(r, i) {
      A(r, e, i), n && n.m(e, null), (t = !0);
    },
    p(r, i) {
      r[1].data
        ? n
          ? (n.p(r, i), i & 2 && _(n, 1))
          : ((n = Cn(r)), n.c(), _(n, 1), n.m(e, null))
        : n &&
          (ne(),
          C(n, 1, 1, () => {
            n = null;
          }),
          se());
    },
    i(r) {
      t || (_(n), (t = !0));
    },
    o(r) {
      C(n), (t = !1);
    },
    d(r) {
      r && T(e), n && n.d();
    },
  };
}
function no(s) {
  let e, t;
  return (
    (e = new Ki({
      props: {
        $$slots: { version: [to], logo: [eo], default: [xi] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      p(n, [r]) {
        const i = {};
        r & 1039 && (i.$$scope = { dirty: r, ctx: n }), e.$set(i);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function so([s, e], t, n) {
  return { name: s, version: e, latest: t[s], meta: n[s] };
}
function ro(s, e, t) {
  let n,
    r,
    i,
    o,
    l = "dependencies";
  function a({ value: h }) {
    t(0, (l = h));
  }
  function u(h, f) {
    return h.filter(([p, b]) => f[p] !== b);
  }
  function c(h) {
    if (h.isLoading) return "asleep";
    if (h.error) return "dead";
    if (h.data) {
      const { dependencies: f, devDependencies: p, resolutions: b } = h.data,
        w = Object.entries({ ...f, ...p });
      return u(w, h.data.resolutions).filter(([O, q]) => !Un(q, b[O])).length
        ? "angry"
        : "happy";
    }
    return "awake";
  }
  const y = or();
  Ve(s, y, (h) => t(1, (o = h)));
  function d(h) {
    (l = h), t(0, l);
  }
  return (
    (s.$$.update = () => {
      s.$$.dirty & 2 && t(3, (n = c(o))),
        s.$$.dirty & 3 &&
          t(
            6,
            (r =
              o.isLoading || o.error
                ? []
                : u(Object.entries(o.data[l] ?? {}), o.data.resolutions))
          ),
        s.$$.dirty & 66 &&
          t(2, (i = r.map((h) => so(h, o.data.resolutions, o.data.meta))));
    }),
    [l, o, i, n, a, y, r, d]
  );
}
class io extends J {
  constructor(e) {
    super(), V(this, e, ro, no, H, {});
  }
}
function oo(s) {
  let e, t;
  return (
    (e = new io({})),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function lo(s) {
  let e, t;
  return (
    (e = new Bs({
      props: { client: s[0], $$slots: { default: [oo] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        N(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      p(n, [r]) {
        const i = {};
        r & 2 && (i.$$scope = { dirty: r, ctx: n }), e.$set(i);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        $(e, n);
      },
    }
  );
}
function ao(s) {
  return [new In()];
}
class uo extends J {
  constructor(e) {
    super(), V(this, e, ao, lo, H, {});
  }
}
const ss = document.getElementById("app");
if (!ss) throw new Error("Could not find target element");
new uo({ target: ss });
