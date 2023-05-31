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
      r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossorigin === "anonymous"
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
function N() {}
function B(s, e) {
  for (const t in e) s[t] = e[t];
  return s;
}
function yn(s) {
  return s();
}
function Mt() {
  return Object.create(null);
}
function me(s) {
  s.forEach(yn);
}
function Ne(s) {
  return typeof s == "function";
}
function x(s, e) {
  return s != s
    ? e == e
    : s !== e || (s && typeof s == "object") || typeof s == "function";
}
function Xn(s) {
  return Object.keys(s).length === 0;
}
function vn(s, ...e) {
  if (s == null) return N;
  const t = s.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Ze(s, e, t) {
  s.$$.on_destroy.push(vn(e, t));
}
function ke(s, e, t, n) {
  if (s) {
    const r = _n(s, e, t, n);
    return s[0](r);
  }
}
function _n(s, e, t, n) {
  return s[1] && n ? B(t.ctx.slice(), s[1](n(e))) : t.ctx;
}
function Le(s, e, t, n) {
  if (s[2] && n) {
    const r = s[2](n(t));
    if (e.dirty === void 0) return r;
    if (typeof r == "object") {
      const i = [],
        o = Math.max(e.dirty.length, r.length);
      for (let a = 0; a < o; a += 1) i[a] = e.dirty[a] | r[a];
      return i;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Re(s, e, t, n, r, i) {
  if (r) {
    const o = _n(e, t, n, i);
    s.p(o, r);
  }
}
function Oe(s) {
  if (s.ctx.length > 32) {
    const e = [],
      t = s.ctx.length / 32;
    for (let n = 0; n < t; n++) e[n] = -1;
    return e;
  }
  return -1;
}
function X(s) {
  const e = {};
  for (const t in s) t[0] !== "$" && (e[t] = s[t]);
  return e;
}
function es(s) {
  return s && Ne(s.destroy) ? s.destroy : N;
}
function d(s, e) {
  s.appendChild(e);
}
function $(s, e, t) {
  s.insertBefore(e, t || null);
}
function S(s) {
  s.parentNode && s.parentNode.removeChild(s);
}
function Ie(s, e) {
  for (let t = 0; t < s.length; t += 1) s[t] && s[t].d(e);
}
function C(s) {
  return document.createElement(s);
}
function Y(s) {
  return document.createElementNS("http://www.w3.org/2000/svg", s);
}
function j(s) {
  return document.createTextNode(s);
}
function A() {
  return j(" ");
}
function ts() {
  return j("");
}
function ue(s, e, t, n) {
  return s.addEventListener(e, t, n), () => s.removeEventListener(e, t, n);
}
function h(s, e, t) {
  t == null
    ? s.removeAttribute(e)
    : s.getAttribute(e) !== t && s.setAttribute(e, t);
}
function ns(s) {
  return Array.from(s.childNodes);
}
function ie(s, e) {
  (e = "" + e), s.data !== e && (s.data = e);
}
function Et(s, e) {
  s.value = e == null ? "" : e;
}
function K(s, e, t) {
  s.classList[t ? "add" : "remove"](e);
}
let Ue;
function Qe(s) {
  Ue = s;
}
function et() {
  if (!Ue) throw new Error("Function called outside component initialization");
  return Ue;
}
function bt(s) {
  et().$$.on_mount.push(s);
}
function yt(s) {
  et().$$.on_destroy.push(s);
}
function ss(s, e) {
  return et().$$.context.set(s, e), e;
}
function rs(s) {
  return et().$$.context.get(s);
}
function is(s, e) {
  const t = s.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const $e = [],
  je = [];
let qe = [];
const at = [],
  os = Promise.resolve();
let lt = !1;
function as() {
  lt || ((lt = !0), os.then(wn));
}
function ut(s) {
  qe.push(s);
}
function vt(s) {
  at.push(s);
}
const rt = new Set();
let Ee = 0;
function wn() {
  if (Ee !== 0) return;
  const s = Ue;
  do {
    try {
      for (; Ee < $e.length; ) {
        const e = $e[Ee];
        Ee++, Qe(e), ls(e.$$);
      }
    } catch (e) {
      throw (($e.length = 0), (Ee = 0), e);
    }
    for (Qe(null), $e.length = 0, Ee = 0; je.length; ) je.pop()();
    for (let e = 0; e < qe.length; e += 1) {
      const t = qe[e];
      rt.has(t) || (rt.add(t), t());
    }
    qe.length = 0;
  } while ($e.length);
  for (; at.length; ) at.pop()();
  (lt = !1), rt.clear(), Qe(s);
}
function ls(s) {
  if (s.fragment !== null) {
    s.update(), me(s.before_update);
    const e = s.dirty;
    (s.dirty = [-1]),
      s.fragment && s.fragment.p(s.ctx, e),
      s.after_update.forEach(ut);
  }
}
function us(s) {
  const e = [],
    t = [];
  qe.forEach((n) => (s.indexOf(n) === -1 ? e.push(n) : t.push(n))),
    t.forEach((n) => n()),
    (qe = e);
}
const xe = new Set();
let we;
function se() {
  we = { r: 0, c: [], p: we };
}
function re() {
  we.r || me(we.c), (we = we.p);
}
function _(s, e) {
  s && s.i && (xe.delete(s), s.i(e));
}
function R(s, e, t, n) {
  if (s && s.o) {
    if (xe.has(s)) return;
    xe.add(s),
      we.c.push(() => {
        xe.delete(s), n && (t && s.d(1), n());
      }),
      s.o(e);
  } else n && n();
}
function he(s, e) {
  const t = {},
    n = {},
    r = { $$scope: 1 };
  let i = s.length;
  for (; i--; ) {
    const o = s[i],
      a = e[i];
    if (a) {
      for (const l in o) l in a || (n[l] = 1);
      for (const l in a) r[l] || ((t[l] = a[l]), (r[l] = 1));
      s[i] = a;
    } else for (const l in o) r[l] = 1;
  }
  for (const o in n) o in t || (t[o] = void 0);
  return t;
}
function de(s) {
  return typeof s == "object" && s !== null ? s : {};
}
function _t(s, e, t) {
  const n = s.$$.props[e];
  n !== void 0 && ((s.$$.bound[n] = t), t(s.$$.ctx[n]));
}
function U(s) {
  s && s.c();
}
function Q(s, e, t, n) {
  const { fragment: r, after_update: i } = s.$$;
  r && r.m(e, t),
    n ||
      ut(() => {
        const o = s.$$.on_mount.map(yn).filter(Ne);
        s.$$.on_destroy ? s.$$.on_destroy.push(...o) : me(o),
          (s.$$.on_mount = []);
      }),
    i.forEach(ut);
}
function I(s, e) {
  const t = s.$$;
  t.fragment !== null &&
    (us(t.after_update),
    me(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function cs(s, e) {
  s.$$.dirty[0] === -1 && ($e.push(s), as(), s.$$.dirty.fill(0)),
    (s.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function G(s, e, t, n, r, i, o, a = [-1]) {
  const l = Ue;
  Qe(s);
  const u = (s.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: N,
    not_equal: r,
    bound: Mt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: Mt(),
    dirty: a,
    skip_bound: !1,
    root: e.target || l.$$.root,
  });
  o && o(u.root);
  let c = !1;
  if (
    ((u.ctx = t
      ? t(s, e.props || {}, (b, g, ...p) => {
          const f = p.length ? p[0] : g;
          return (
            u.ctx &&
              r(u.ctx[b], (u.ctx[b] = f)) &&
              (!u.skip_bound && u.bound[b] && u.bound[b](f), c && cs(s, b)),
            g
          );
        })
      : []),
    u.update(),
    (c = !0),
    me(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const b = ns(e.target);
      u.fragment && u.fragment.l(b), b.forEach(S);
    } else u.fragment && u.fragment.c();
    e.intro && _(s.$$.fragment),
      Q(s, e.target, e.anchor, e.customElement),
      wn();
  }
  Qe(l);
}
class V {
  $destroy() {
    I(this, 1), (this.$destroy = N);
  }
  $on(e, t) {
    if (!Ne(t)) return N;
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
      !Xn(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
class Fe {
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
const ze = typeof window > "u" || "Deno" in window;
function le() {}
function fs(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function ct(s) {
  return typeof s == "number" && s >= 0 && s !== 1 / 0;
}
function Cn(s, e) {
  return Math.max(s + (e || 0) - Date.now(), 0);
}
function De(s, e, t) {
  return He(s)
    ? typeof e == "function"
      ? { ...t, queryKey: s, queryFn: e }
      : { ...e, queryKey: s }
    : s;
}
function hs(s, e, t) {
  return He(s)
    ? typeof e == "function"
      ? { ...t, mutationKey: s, mutationFn: e }
      : { ...e, mutationKey: s }
    : typeof s == "function"
    ? { ...e, mutationFn: s }
    : { ...s };
}
function ge(s, e, t) {
  return He(s) ? [{ ...e, queryKey: s }, t] : [s || {}, e];
}
function St(s, e) {
  const {
    type: t = "all",
    exact: n,
    fetchStatus: r,
    predicate: i,
    queryKey: o,
    stale: a,
  } = s;
  if (He(o)) {
    if (n) {
      if (e.queryHash !== wt(o, e.options)) return !1;
    } else if (!Je(e.queryKey, o)) return !1;
  }
  if (t !== "all") {
    const l = e.isActive();
    if ((t === "active" && !l) || (t === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && e.isStale() !== a) ||
    (typeof r < "u" && r !== e.state.fetchStatus) ||
    (i && !i(e))
  );
}
function $t(s, e) {
  const { exact: t, fetching: n, predicate: r, mutationKey: i } = s;
  if (He(i)) {
    if (!e.options.mutationKey) return !1;
    if (t) {
      if (Ce(e.options.mutationKey) !== Ce(i)) return !1;
    } else if (!Je(e.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof n == "boolean" && (e.state.status === "loading") !== n) ||
    (r && !r(e))
  );
}
function wt(s, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Ce)(s);
}
function Ce(s) {
  return JSON.stringify(s, (e, t) =>
    ht(t)
      ? Object.keys(t)
          .sort()
          .reduce((n, r) => ((n[r] = t[r]), n), {})
      : t
  );
}
function Je(s, e) {
  return kn(s, e);
}
function kn(s, e) {
  return s === e
    ? !0
    : typeof s != typeof e
    ? !1
    : s && e && typeof s == "object" && typeof e == "object"
    ? !Object.keys(e).some((t) => !kn(s[t], e[t]))
    : !1;
}
function Ln(s, e) {
  if (s === e) return s;
  const t = qt(s) && qt(e);
  if (t || (ht(s) && ht(e))) {
    const n = t ? s.length : Object.keys(s).length,
      r = t ? e : Object.keys(e),
      i = r.length,
      o = t ? [] : {};
    let a = 0;
    for (let l = 0; l < i; l++) {
      const u = t ? l : r[l];
      (o[u] = Ln(s[u], e[u])), o[u] === s[u] && a++;
    }
    return n === i && a === n ? s : o;
  }
  return e;
}
function ft(s, e) {
  if ((s && !e) || (e && !s)) return !1;
  for (const t in s) if (s[t] !== e[t]) return !1;
  return !0;
}
function qt(s) {
  return Array.isArray(s) && s.length === Object.keys(s).length;
}
function ht(s) {
  if (!Tt(s)) return !1;
  const e = s.constructor;
  if (typeof e > "u") return !0;
  const t = e.prototype;
  return !(!Tt(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function Tt(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function He(s) {
  return Array.isArray(s);
}
function Rn(s) {
  return new Promise((e) => {
    setTimeout(e, s);
  });
}
function Ft(s) {
  Rn(0).then(s);
}
function ds() {
  if (typeof AbortController == "function") return new AbortController();
}
function dt(s, e, t) {
  return t.isDataEqual != null && t.isDataEqual(s, e)
    ? s
    : typeof t.structuralSharing == "function"
    ? t.structuralSharing(s, e)
    : t.structuralSharing !== !1
    ? Ln(s, e)
    : e;
}
class ps extends Fe {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!ze && window.addEventListener) {
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
const We = new ps(),
  At = ["online", "offline"];
class ms extends Fe {
  constructor() {
    super(),
      (this.setup = (e) => {
        if (!ze && window.addEventListener) {
          const t = () => e();
          return (
            At.forEach((n) => {
              window.addEventListener(n, t, !1);
            }),
            () => {
              At.forEach((n) => {
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
const Ye = new ms();
function gs(s) {
  return Math.min(1e3 * 2 ** s, 3e4);
}
function tt(s) {
  return (s != null ? s : "online") === "online" ? Ye.isOnline() : !0;
}
class On {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
}
function Ge(s) {
  return s instanceof On;
}
function Pn(s) {
  let e = !1,
    t = 0,
    n = !1,
    r,
    i,
    o;
  const a = new Promise((y, w) => {
      (i = y), (o = w);
    }),
    l = (y) => {
      n || (p(new On(y)), s.abort == null || s.abort());
    },
    u = () => {
      e = !0;
    },
    c = () => {
      e = !1;
    },
    b = () => !We.isFocused() || (s.networkMode !== "always" && !Ye.isOnline()),
    g = (y) => {
      n ||
        ((n = !0),
        s.onSuccess == null || s.onSuccess(y),
        r == null || r(),
        i(y));
    },
    p = (y) => {
      n ||
        ((n = !0), s.onError == null || s.onError(y), r == null || r(), o(y));
    },
    f = () =>
      new Promise((y) => {
        (r = (w) => {
          const k = n || !b();
          return k && y(w), k;
        }),
          s.onPause == null || s.onPause();
      }).then(() => {
        (r = void 0), n || s.onContinue == null || s.onContinue();
      }),
    m = () => {
      if (n) return;
      let y;
      try {
        y = s.fn();
      } catch (w) {
        y = Promise.reject(w);
      }
      Promise.resolve(y)
        .then(g)
        .catch((w) => {
          var k, O;
          if (n) return;
          const T = (k = s.retry) != null ? k : 3,
            P = (O = s.retryDelay) != null ? O : gs,
            v = typeof P == "function" ? P(t, w) : P,
            L =
              T === !0 ||
              (typeof T == "number" && t < T) ||
              (typeof T == "function" && T(t, w));
          if (e || !L) {
            p(w);
            return;
          }
          t++,
            s.onFail == null || s.onFail(t, w),
            Rn(v)
              .then(() => {
                if (b()) return f();
              })
              .then(() => {
                e ? p(w) : m();
              });
        });
    };
  return (
    tt(s.networkMode) ? m() : f().then(m),
    {
      promise: a,
      cancel: l,
      continue: () => ((r == null ? void 0 : r()) ? a : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const Ct = console;
function bs() {
  let s = [],
    e = 0,
    t = (c) => {
      c();
    },
    n = (c) => {
      c();
    };
  const r = (c) => {
      let b;
      e++;
      try {
        b = c();
      } finally {
        e--, e || a();
      }
      return b;
    },
    i = (c) => {
      e
        ? s.push(c)
        : Ft(() => {
            t(c);
          });
    },
    o =
      (c) =>
      (...b) => {
        i(() => {
          c(...b);
        });
      },
    a = () => {
      const c = s;
      (s = []),
        c.length &&
          Ft(() => {
            n(() => {
              c.forEach((b) => {
                t(b);
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
const W = bs();
class Mn {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      ct(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      e != null ? e : ze ? 1 / 0 : 5 * 60 * 1e3
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class ys extends Mn {
  constructor(e) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.cache = e.cache),
      (this.logger = e.logger || Ct),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.initialState = e.state || vs(this.options)),
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
    const n = dt(this.state.data, e, this.options);
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
      n ? n.then(le).catch(le) : Promise.resolve()
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
      !Cn(this.state.dataUpdatedAt, e)
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
      const p = this.observers.find((f) => f.options.queryFn);
      p && this.setOptions(p.options);
    }
    Array.isArray(this.options.queryKey);
    const o = ds(),
      a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      l = (p) => {
        Object.defineProperty(p, "signal", {
          enumerable: !0,
          get: () => {
            if (o) return (this.abortSignalConsumed = !0), o.signal;
          },
        });
      };
    l(a);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
          : Promise.reject("Missing queryFn"),
      c = {
        fetchOptions: t,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: u,
      };
    if (
      (l(c),
      (n = this.options.behavior) == null || n.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((r = c.fetchOptions) == null ? void 0 : r.meta))
    ) {
      var b;
      this.dispatch({
        type: "fetch",
        meta: (b = c.fetchOptions) == null ? void 0 : b.meta,
      });
    }
    const g = (p) => {
      if (
        ((Ge(p) && p.silent) || this.dispatch({ type: "error", error: p }),
        !Ge(p))
      ) {
        var f, m, y, w;
        (f = (m = this.cache.config).onError) == null || f.call(m, p, this),
          (y = (w = this.cache.config).onSettled) == null ||
            y.call(w, this.state.data, p, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = Pn({
        fn: c.fetchFn,
        abort: o == null ? void 0 : o.abort.bind(o),
        onSuccess: (p) => {
          var f, m, y, w;
          if (typeof p > "u") {
            g(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(p),
            (f = (m = this.cache.config).onSuccess) == null ||
              f.call(m, p, this),
            (y = (w = this.cache.config).onSettled) == null ||
              y.call(w, p, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: g,
        onFail: (p, f) => {
          this.dispatch({ type: "failed", failureCount: p, error: f });
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
            fetchStatus: tt(this.options.networkMode) ? "fetching" : "paused",
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
          return Ge(o) && o.revert && this.revertState
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
function vs(s) {
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
    dataUpdatedAt: t ? (n != null ? n : Date.now()) : 0,
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
class _s extends Fe {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(e, t, n) {
    var r;
    const i = t.queryKey,
      o = (r = t.queryHash) != null ? r : wt(i, t);
    let a = this.get(o);
    return (
      a ||
        ((a = new ys({
          cache: this,
          logger: e.getLogger(),
          queryKey: i,
          queryHash: o,
          options: e.defaultQueryOptions(t),
          state: n,
          defaultOptions: e.getQueryDefaults(i),
        })),
        this.add(a)),
      a
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
    const [n] = ge(e, t);
    return (
      typeof n.exact > "u" && (n.exact = !0), this.queries.find((r) => St(n, r))
    );
  }
  findAll(e, t) {
    const [n] = ge(e, t);
    return Object.keys(n).length > 0
      ? this.queries.filter((r) => St(n, r))
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
class ws extends Mn {
  constructor(e) {
    super(),
      (this.defaultOptions = e.defaultOptions),
      (this.mutationId = e.mutationId),
      (this.mutationCache = e.mutationCache),
      (this.logger = e.logger || Ct),
      (this.observers = []),
      (this.state = e.state || En()),
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
          (this.retryer = Pn({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (M, q) => {
              this.dispatch({ type: "failed", failureCount: M, error: q });
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
      var n, r, i, o, a, l, u, c;
      if (!t) {
        var b, g, p, f;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((b = (g = this.mutationCache.config).onMutate) == null
            ? void 0
            : b.call(g, this.state.variables, this));
        const M = await ((p = (f = this.options).onMutate) == null
          ? void 0
          : p.call(f, this.state.variables));
        M !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: M,
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
        await ((a = (l = this.mutationCache.config).onSettled) == null
          ? void 0
          : a.call(l, L, null, this.state.variables, this.state.context, this)),
        await ((u = (c = this.options).onSettled) == null
          ? void 0
          : u.call(c, L, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: L }),
        L
      );
    } catch (L) {
      try {
        var m, y, w, k, O, T, P, v;
        throw (
          (await ((m = (y = this.mutationCache.config).onError) == null
            ? void 0
            : m.call(y, L, this.state.variables, this.state.context, this)),
          await ((w = (k = this.options).onError) == null
            ? void 0
            : w.call(k, L, this.state.variables, this.state.context)),
          await ((O = (T = this.mutationCache.config).onSettled) == null
            ? void 0
            : O.call(
                T,
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
            isPaused: !tt(this.options.networkMode),
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
function En() {
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
class Cs extends Fe {
  constructor(e) {
    super(),
      (this.config = e || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(e, t, n) {
    const r = new ws({
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
      this.mutations.find((t) => $t(e, t))
    );
  }
  findAll(e) {
    return this.mutations.filter((t) => $t(e, t));
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
              (n, r) => n.then(() => r.continue().catch(le)),
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
function ks() {
  return {
    onFetch: (s) => {
      s.fetchFn = () => {
        var e, t, n, r, i, o;
        const a =
            (e = s.fetchOptions) == null || (t = e.meta) == null
              ? void 0
              : t.refetchPage,
          l =
            (n = s.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.fetchMore,
          u = l == null ? void 0 : l.pageParam,
          c = (l == null ? void 0 : l.direction) === "forward",
          b = (l == null ? void 0 : l.direction) === "backward",
          g = ((i = s.state.data) == null ? void 0 : i.pages) || [],
          p = ((o = s.state.data) == null ? void 0 : o.pageParams) || [];
        let f = p,
          m = !1;
        const y = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => {
                var L;
                if ((L = s.signal) != null && L.aborted) m = !0;
                else {
                  var M;
                  (M = s.signal) == null ||
                    M.addEventListener("abort", () => {
                      m = !0;
                    });
                }
                return s.signal;
              },
            });
          },
          w = s.options.queryFn || (() => Promise.reject("Missing queryFn")),
          k = (v, L, M, q) => (
            (f = q ? [L, ...f] : [...f, L]), q ? [M, ...v] : [...v, M]
          ),
          O = (v, L, M, q) => {
            if (m) return Promise.reject("Cancelled");
            if (typeof M > "u" && !L && v.length) return Promise.resolve(v);
            const H = {
              queryKey: s.queryKey,
              pageParam: M,
              meta: s.options.meta,
            };
            y(H);
            const ae = w(H);
            return Promise.resolve(ae).then((Pe) => k(v, M, Pe, q));
          };
        let T;
        if (!g.length) T = O([]);
        else if (c) {
          const v = typeof u < "u",
            L = v ? u : Dt(s.options, g);
          T = O(g, v, L);
        } else if (b) {
          const v = typeof u < "u",
            L = v ? u : Ls(s.options, g);
          T = O(g, v, L, !0);
        } else {
          f = [];
          const v = typeof s.options.getNextPageParam > "u";
          T = (a && g[0] ? a(g[0], 0, g) : !0)
            ? O([], v, p[0])
            : Promise.resolve(k([], p[0], g[0]));
          for (let M = 1; M < g.length; M++)
            T = T.then((q) => {
              if (a && g[M] ? a(g[M], M, g) : !0) {
                const ae = v ? p[M] : Dt(s.options, q);
                return O(q, v, ae);
              }
              return Promise.resolve(k(q, p[M], g[M]));
            });
        }
        return T.then((v) => ({ pages: v, pageParams: f }));
      };
    },
  };
}
function Dt(s, e) {
  return s.getNextPageParam == null
    ? void 0
    : s.getNextPageParam(e[e.length - 1], e);
}
function Ls(s, e) {
  return s.getPreviousPageParam == null
    ? void 0
    : s.getPreviousPageParam(e[0], e);
}
class Sn {
  constructor(e = {}) {
    (this.queryCache = e.queryCache || new _s()),
      (this.mutationCache = e.mutationCache || new Cs()),
      (this.logger = e.logger || Ct),
      (this.defaultOptions = e.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = We.subscribe(() => {
          We.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = Ye.subscribe(() => {
          Ye.isOnline() &&
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
    const [n] = ge(e, t);
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
    const r = De(e, t, n),
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
      o = fs(t, i);
    if (typeof o > "u") return;
    const a = De(e),
      l = this.defaultQueryOptions(a);
    return this.queryCache.build(this, l).setData(o, { ...n, manual: !0 });
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
    const [n] = ge(e, t),
      r = this.queryCache;
    W.batch(() => {
      r.findAll(n).forEach((i) => {
        r.remove(i);
      });
    });
  }
  resetQueries(e, t, n) {
    const [r, i] = ge(e, t, n),
      o = this.queryCache,
      a = { type: "active", ...r };
    return W.batch(
      () => (
        o.findAll(r).forEach((l) => {
          l.reset();
        }),
        this.refetchQueries(a, i)
      )
    );
  }
  cancelQueries(e, t, n) {
    const [r, i = {}] = ge(e, t, n);
    typeof i.revert > "u" && (i.revert = !0);
    const o = W.batch(() => this.queryCache.findAll(r).map((a) => a.cancel(i)));
    return Promise.all(o).then(le).catch(le);
  }
  invalidateQueries(e, t, n) {
    const [r, i] = ge(e, t, n);
    return W.batch(() => {
      var o, a;
      if (
        (this.queryCache.findAll(r).forEach((u) => {
          u.invalidate();
        }),
        r.refetchType === "none")
      )
        return Promise.resolve();
      const l = {
        ...r,
        type:
          (o = (a = r.refetchType) != null ? a : r.type) != null ? o : "active",
      };
      return this.refetchQueries(l, i);
    });
  }
  refetchQueries(e, t, n) {
    const [r, i] = ge(e, t, n),
      o = W.batch(() =>
        this.queryCache
          .findAll(r)
          .filter((l) => !l.isDisabled())
          .map((l) => {
            var u;
            return l.fetch(void 0, {
              ...i,
              cancelRefetch:
                (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: r.refetchPage },
            });
          })
      );
    let a = Promise.all(o).then(le);
    return (i != null && i.throwOnError) || (a = a.catch(le)), a;
  }
  fetchQuery(e, t, n) {
    const r = De(e, t, n),
      i = this.defaultQueryOptions(r);
    typeof i.retry > "u" && (i.retry = !1);
    const o = this.queryCache.build(this, i);
    return o.isStaleByTime(i.staleTime)
      ? o.fetch(i)
      : Promise.resolve(o.state.data);
  }
  prefetchQuery(e, t, n) {
    return this.fetchQuery(e, t, n).then(le).catch(le);
  }
  fetchInfiniteQuery(e, t, n) {
    const r = De(e, t, n);
    return (r.behavior = ks()), this.fetchQuery(r);
  }
  prefetchInfiniteQuery(e, t, n) {
    return this.fetchInfiniteQuery(e, t, n).then(le).catch(le);
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
    const n = this.queryDefaults.find((r) => Ce(e) === Ce(r.queryKey));
    n
      ? (n.defaultOptions = t)
      : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    if (!e) return;
    const t = this.queryDefaults.find((n) => Je(e, n.queryKey));
    return t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const n = this.mutationDefaults.find((r) => Ce(e) === Ce(r.mutationKey));
    n
      ? (n.defaultOptions = t)
      : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    if (!e) return;
    const t = this.mutationDefaults.find((n) => Je(e, n.mutationKey));
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
      !t.queryHash && t.queryKey && (t.queryHash = wt(t.queryKey, t)),
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
class Rs extends Fe {
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
      Qt(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return pt(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return pt(
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
      ft(n, this.options) ||
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
    i && It(this.currentQuery, r, this.options, n) && this.executeFetch(),
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
    return (e != null && e.throwOnError) || (t = t.catch(le)), t;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      ze || this.currentResult.isStale || !ct(this.options.staleTime))
    )
      return;
    const t = Cn(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
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
        ze ||
        this.options.enabled === !1 ||
        !ct(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || We.isFocused()) &&
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
      a = this.currentResultOptions,
      l = e !== n,
      u = l ? e.state : this.currentQueryInitialState,
      c = l ? this.currentResult : this.previousQueryResult,
      { state: b } = e;
    let {
        dataUpdatedAt: g,
        error: p,
        errorUpdatedAt: f,
        fetchStatus: m,
        status: y,
      } = b,
      w = !1,
      k = !1,
      O;
    if (t._optimisticResults) {
      const M = this.hasListeners(),
        q = !M && Qt(e, t),
        H = M && It(e, n, t, r);
      (q || H) &&
        ((m = tt(e.options.networkMode) ? "fetching" : "paused"),
        g || (y = "loading")),
        t._optimisticResults === "isRestoring" && (m = "idle");
    }
    if (
      t.keepPreviousData &&
      !b.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      y !== "error"
    )
      (O = c.data), (g = c.dataUpdatedAt), (y = c.status), (w = !0);
    else if (t.select && typeof b.data < "u")
      if (
        i &&
        b.data === (o == null ? void 0 : o.data) &&
        t.select === this.selectFn
      )
        O = this.selectResult;
      else
        try {
          (this.selectFn = t.select),
            (O = t.select(b.data)),
            (O = dt(i == null ? void 0 : i.data, O, t)),
            (this.selectResult = O),
            (this.selectError = null);
        } catch (M) {
          this.selectError = M;
        }
    else O = b.data;
    if (typeof t.placeholderData < "u" && typeof O > "u" && y === "loading") {
      let M;
      if (
        i != null &&
        i.isPlaceholderData &&
        t.placeholderData === (a == null ? void 0 : a.placeholderData)
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
        } catch (q) {
          this.selectError = q;
        }
      typeof M < "u" &&
        ((y = "success"),
        (O = dt(i == null ? void 0 : i.data, M, t)),
        (k = !0));
    }
    this.selectError &&
      ((p = this.selectError),
      (O = this.selectResult),
      (f = Date.now()),
      (y = "error"));
    const T = m === "fetching",
      P = y === "loading",
      v = y === "error";
    return {
      status: y,
      fetchStatus: m,
      isLoading: P,
      isSuccess: y === "success",
      isError: v,
      isInitialLoading: P && T,
      data: O,
      dataUpdatedAt: g,
      error: p,
      errorUpdatedAt: f,
      failureCount: b.fetchFailureCount,
      failureReason: b.fetchFailureReason,
      errorUpdateCount: b.errorUpdateCount,
      isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
      isFetchedAfterMount:
        b.dataUpdateCount > u.dataUpdateCount ||
        b.errorUpdateCount > u.errorUpdateCount,
      isFetching: T,
      isRefetching: T && !P,
      isLoadingError: v && b.dataUpdatedAt === 0,
      isPaused: m === "paused",
      isPlaceholderData: k,
      isPreviousData: w,
      isRefetchError: v && b.dataUpdatedAt !== 0,
      isStale: kt(e, t),
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
      ft(n, t))
    )
      return;
    this.currentResult = n;
    const r = { cache: !0 },
      i = () => {
        if (!t) return !0;
        const { notifyOnChangeProps: o } = this.options;
        if (o === "all" || (!o && !this.trackedProps.size)) return !0;
        const a = new Set(o != null ? o : this.trackedProps);
        return (
          this.options.useErrorBoundary && a.add("error"),
          Object.keys(this.currentResult).some((l) => {
            const u = l;
            return this.currentResult[u] !== t[u] && a.has(u);
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
      : e.type === "error" && !Ge(e.error) && (t.onError = !0),
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
        var o, a, l, u;
        (o = (a = this.options).onError) == null ||
          o.call(a, this.currentResult.error),
          (l = (u = this.options).onSettled) == null ||
            l.call(u, void 0, this.currentResult.error);
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
function Os(s, e) {
  return (
    e.enabled !== !1 &&
    !s.state.dataUpdatedAt &&
    !(s.state.status === "error" && e.retryOnMount === !1)
  );
}
function Qt(s, e) {
  return Os(s, e) || (s.state.dataUpdatedAt > 0 && pt(s, e, e.refetchOnMount));
}
function pt(s, e, t) {
  if (e.enabled !== !1) {
    const n = typeof t == "function" ? t(s) : t;
    return n === "always" || (n !== !1 && kt(s, e));
  }
  return !1;
}
function It(s, e, t, n) {
  return (
    t.enabled !== !1 &&
    (s !== e || n.enabled === !1) &&
    (!t.suspense || s.state.status !== "error") &&
    kt(s, t)
  );
}
function kt(s, e) {
  return s.isStaleByTime(e.staleTime);
}
class Ps extends Fe {
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
      ft(n, this.options) ||
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
    const e = this.currentMutation ? this.currentMutation.state : En(),
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
          var o, a, l, u;
          (o = (a = this.mutateOptions).onError) == null ||
            o.call(
              a,
              this.currentResult.error,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (l = (u = this.mutateOptions).onSettled) == null ||
              l.call(
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
}
const $n = "$$_queryClient",
  Ms = () => {
    const s = rs($n);
    if (!s)
      throw new Error(
        "No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?"
      );
    return s;
  },
  Es = (s) => {
    ss($n, s);
  };
function nt() {
  return Ms();
}
const Se = [];
function Be(s, e) {
  return { subscribe: Ss(s, e).subscribe };
}
function Ss(s, e = N) {
  let t;
  const n = new Set();
  function r(a) {
    if (x(s, a) && ((s = a), t)) {
      const l = !Se.length;
      for (const u of n) u[1](), Se.push(u, s);
      if (l) {
        for (let u = 0; u < Se.length; u += 2) Se[u][0](Se[u + 1]);
        Se.length = 0;
      }
    }
  }
  function i(a) {
    r(a(s));
  }
  function o(a, l = N) {
    const u = [a, l];
    return (
      n.add(u),
      n.size === 1 && (t = e(r) || N),
      a(s),
      () => {
        n.delete(u), n.size === 0 && t && (t(), (t = null));
      }
    );
  }
  return { set: r, update: i, subscribe: o };
}
function qn(s, e, t) {
  const n = !Array.isArray(s),
    r = n ? [s] : s,
    i = e.length < 2;
  return Be(t, (o) => {
    let a = !1;
    const l = [];
    let u = 0,
      c = N;
    const b = () => {
        if (u) return;
        c();
        const p = e(n ? l[0] : l, o);
        i ? o(p) : (c = Ne(p) ? p : N);
      },
      g = r.map((p, f) =>
        vn(
          p,
          (m) => {
            (l[f] = m), (u &= ~(1 << f)), a && b();
          },
          () => {
            u |= 1 << f;
          }
        )
      );
    return (
      (a = !0),
      b(),
      function () {
        me(g), c(), (a = !1);
      }
    );
  });
}
function $s(s, e) {
  const t = nt(),
    n = t.defaultQueryOptions(s);
  n._optimisticResults = "optimistic";
  let r = new e(t, n);
  n.onError && (n.onError = W.batchCalls(n.onError)),
    n.onSuccess && (n.onSuccess = W.batchCalls(n.onSuccess)),
    n.onSettled && (n.onSettled = W.batchCalls(n.onSettled)),
    Be(r).subscribe((a) => {
      (r = a), r.setOptions(n, { listeners: !1 });
    });
  const i = Be(r.getCurrentResult(), (a) => r.subscribe(W.batchCalls(a))),
    { subscribe: o } = qn(
      i,
      (a) => (
        (a = r.getOptimisticResult(n)),
        n.notifyOnChangeProps ? a : r.trackResult(a)
      )
    );
  return { subscribe: o };
}
function Tn(s, e, t) {
  const n = De(s, e, t);
  return $s(n, Rs);
}
function qs(s, e, t) {
  const n = hs(s, e, t),
    r = nt();
  let i = new Ps(r, n),
    o;
  Be(i).subscribe((u) => {
    (i = u),
      (o = (c, b) => {
        i.mutate(c, b).catch(Ts);
      }),
      i.setOptions(n);
  });
  const a = Be(i.getCurrentResult(), (u) =>
      i.subscribe(W.batchCalls((c) => u(c)))
    ),
    { subscribe: l } = qn(a, (u) => ({
      ...u,
      mutate: o,
      mutateAsync: u.mutate,
    }));
  return { subscribe: l };
}
function Ts() {}
function Fs(s) {
  let e;
  const t = s[2].default,
    n = ke(t, s, s[1], null);
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
        Re(n, t, r, r[1], e ? Le(t, r[1], i, null) : Oe(r[1]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      R(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function As(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e,
    { client: i = new Sn() } = e;
  return (
    bt(() => {
      i.mount();
    }),
    Es(i),
    yt(() => {
      i.unmount();
    }),
    (s.$$set = (o) => {
      "client" in o && t(0, (i = o.client)),
        "$$scope" in o && t(1, (r = o.$$scope));
    }),
    [i, r, n]
  );
}
class Ds extends V {
  constructor(e) {
    super(), G(this, e, As, Fs, x, { client: 0 });
  }
}
const Fn = (s) => ({
    version: s.replace(/[\^~]/, ""),
    qualifier: isNaN(Number(s[0])) ? s[0] : void 0,
  }),
  An = (s, e) => Fn(s).version === e,
  Ut = (s, e) => (e.length <= s ? e : e.slice(0, s).concat("\u2026")),
  it = 10,
  Te = {
    package: ["package"],
    bundlephobiaReport: (s) => ["bundlephobiaReport", s],
  };
class jt extends Error {
  constructor(e, t, n) {
    const r = e.status || e.status === 0 ? e.status : "",
      i = e.statusText || "",
      o = `${r} ${i}`.trim(),
      a = o ? `status code ${o}` : "an unknown error";
    super(`Request failed with ${a}`),
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
class Dn extends Error {
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
const Ve = (s) => s !== null && typeof s == "object",
  Ke = (...s) => {
    for (const e of s)
      if ((!Ve(e) || Array.isArray(e)) && typeof e < "u")
        throw new TypeError("The `options` argument must be an object");
    return Lt({}, ...s);
  },
  Qn = (s = {}, e = {}) => {
    const t = new globalThis.Headers(s),
      n = e instanceof globalThis.Headers,
      r = new globalThis.Headers(e);
    for (const [i, o] of r.entries())
      (n && o === "undefined") || o === void 0 ? t.delete(i) : t.set(i, o);
    return t;
  },
  Lt = (...s) => {
    let e = {},
      t = {};
    for (const n of s)
      if (Array.isArray(n)) Array.isArray(e) || (e = []), (e = [...e, ...n]);
      else if (Ve(n)) {
        for (let [r, i] of Object.entries(n))
          Ve(i) && r in e && (i = Lt(e[r], i)), (e = { ...e, [r]: i });
        Ve(n.headers) && ((t = Qn(t, n.headers)), (e.headers = t));
      }
    return e;
  },
  Qs = (() => {
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
  Is = typeof globalThis.AbortController == "function",
  Us = typeof globalThis.ReadableStream == "function",
  js = typeof globalThis.FormData == "function",
  In = ["get", "post", "put", "patch", "head", "delete"],
  zs = {
    json: "application/json",
    text: "text/*",
    formData: "multipart/form-data",
    arrayBuffer: "*/*",
    blob: "*/*",
  },
  ot = 2147483647,
  Un = Symbol("stop"),
  Bs = (s) => (In.includes(s) ? s.toUpperCase() : s),
  Ns = ["get", "put", "head", "delete", "options", "trace"],
  Hs = [408, 413, 429, 500, 502, 503, 504],
  jn = [413, 429, 503],
  zt = {
    limit: 2,
    methods: Ns,
    statusCodes: Hs,
    afterStatusCodes: jn,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
  },
  Ks = (s = {}) => {
    if (typeof s == "number") return { ...zt, limit: s };
    if (s.methods && !Array.isArray(s.methods))
      throw new Error("retry.methods must be an array");
    if (s.statusCodes && !Array.isArray(s.statusCodes))
      throw new Error("retry.statusCodes must be an array");
    return { ...zt, ...s, afterStatusCodes: jn };
  };
async function xs(s, e, t) {
  return new Promise((n, r) => {
    const i = setTimeout(() => {
      e && e.abort(), r(new Dn(s));
    }, t.timeout);
    t.fetch(s)
      .then(n)
      .catch(r)
      .then(() => {
        clearTimeout(i);
      });
  });
}
const Gs = Boolean(globalThis.DOMException);
function Bt(s) {
  var t, n;
  if (Gs)
    return new DOMException(
      (t = s == null ? void 0 : s.reason) != null
        ? t
        : "The operation was aborted.",
      "AbortError"
    );
  const e = new Error(
    (n = s == null ? void 0 : s.reason) != null
      ? n
      : "The operation was aborted."
  );
  return (e.name = "AbortError"), e;
}
async function Vs(s, { signal: e }) {
  return new Promise((t, n) => {
    if (e) {
      if (e.aborted) {
        n(Bt(e));
        return;
      }
      e.addEventListener("abort", r, { once: !0 });
    }
    function r() {
      n(Bt(e)), clearTimeout(i);
    }
    const i = setTimeout(() => {
      e == null || e.removeEventListener("abort", r), t();
    }, s);
  });
}
class Xe {
  static create(e, t) {
    const n = new Xe(e, t),
      r = async () => {
        if (n._options.timeout > ot)
          throw new RangeError(
            `The \`timeout\` option cannot be greater than ${ot}`
          );
        await Promise.resolve();
        let a = await n._fetch();
        for (const l of n._options.hooks.afterResponse) {
          const u = await l(
            n.request,
            n._options,
            n._decorateResponse(a.clone())
          );
          u instanceof globalThis.Response && (a = u);
        }
        if ((n._decorateResponse(a), !a.ok && n._options.throwHttpErrors)) {
          let l = new jt(a, n.request, n._options);
          for (const u of n._options.hooks.beforeError) l = await u(l);
          throw l;
        }
        if (n._options.onDownloadProgress) {
          if (typeof n._options.onDownloadProgress != "function")
            throw new TypeError(
              "The `onDownloadProgress` option must be a function"
            );
          if (!Us)
            throw new Error(
              "Streams are not supported in your environment. `ReadableStream` is missing."
            );
          return n._stream(a.clone(), n._options.onDownloadProgress);
        }
        return a;
      },
      o = n._options.retry.methods.includes(n.request.method.toLowerCase())
        ? n._retry(r)
        : r();
    for (const [a, l] of Object.entries(zs))
      o[a] = async () => {
        n.request.headers.set("accept", n.request.headers.get("accept") || l);
        const c = (await o).clone();
        if (a === "json") {
          if (
            c.status === 204 ||
            (await c.clone().arrayBuffer()).byteLength === 0
          )
            return "";
          if (t.parseJson) return t.parseJson(await c.text());
        }
        return c[a]();
      };
    return o;
  }
  constructor(e, t = {}) {
    var n, r, i;
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
        headers: Qn(this._input.headers, t.headers),
        hooks: Lt(
          {
            beforeRequest: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: [],
          },
          t.hooks
        ),
        method: Bs((n = t.method) != null ? n : this._input.method),
        prefixUrl: String(t.prefixUrl || ""),
        retry: Ks(t.retry),
        throwHttpErrors: t.throwHttpErrors !== !1,
        timeout: typeof t.timeout > "u" ? 1e4 : t.timeout,
        fetch: (r = t.fetch) != null ? r : globalThis.fetch.bind(globalThis),
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
    if (Is) {
      if (
        ((this.abortController = new globalThis.AbortController()),
        this._options.signal)
      ) {
        const o = this._options.signal;
        this._options.signal.addEventListener("abort", () => {
          this.abortController.abort(o.reason);
        });
      }
      this._options.signal = this.abortController.signal;
    }
    if (
      (Qs && (this._options.duplex = "half"),
      (this.request = new globalThis.Request(this._input, this._options)),
      this._options.searchParams)
    ) {
      const o =
          typeof this._options.searchParams == "string"
            ? this._options.searchParams.replace(/^\?/, "")
            : new URLSearchParams(this._options.searchParams).toString(),
        a = "?" + o,
        l = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, a);
      ((js && this._options.body instanceof globalThis.FormData) ||
        this._options.body instanceof URLSearchParams) &&
        !(this._options.headers && this._options.headers["content-type"]) &&
        this.request.headers.delete("content-type"),
        (this.request = new globalThis.Request(
          new globalThis.Request(l, { ...this.request }),
          this._options
        ));
    }
    this._options.json !== void 0 &&
      ((this._options.body = JSON.stringify(this._options.json)),
      this.request.headers.set(
        "content-type",
        (i = this._options.headers.get("content-type")) != null
          ? i
          : "application/json"
      ),
      (this.request = new globalThis.Request(this.request, {
        body: this._options.body,
      })));
  }
  _calculateRetryDelay(e) {
    if (
      (this._retryCount++,
      this._retryCount < this._options.retry.limit && !(e instanceof Dn))
    ) {
      if (e instanceof jt) {
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
      const n = Math.min(this._calculateRetryDelay(t), ot);
      if (n !== 0 && this._retryCount > 0) {
        await Vs(n, { signal: this._options.signal });
        for (const r of this._options.hooks.beforeRetry)
          if (
            (await r({
              request: this.request,
              options: this._options,
              error: t,
              retryCount: this._retryCount,
            })) === Un
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
      : xs(this.request.clone(), this.abortController, this._options);
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
              async function a() {
                const { done: l, value: u } = await o.read();
                if (l) {
                  i.close();
                  return;
                }
                if (t) {
                  r += u.byteLength;
                  const c = n === 0 ? 0 : r / n;
                  t({ percent: c, transferredBytes: r, totalBytes: n }, u);
                }
                i.enqueue(u), await a();
              }
              await a();
            },
          }),
          { status: e.status, statusText: e.statusText, headers: e.headers }
        );
  }
}
/*! MIT License © Sindre Sorhus */ const mt = (s) => {
    const e = (t, n) => Xe.create(t, Ke(s, n));
    for (const t of In) e[t] = (n, r) => Xe.create(n, Ke(s, r, { method: t }));
    return (
      (e.create = (t) => mt(Ke(t))),
      (e.extend = (t) => mt(Ke(s, t))),
      (e.stop = Un),
      e
    );
  },
  Zs = mt(),
  zn = Zs,
  Bn = zn.create({ prefixUrl: "http://localhost:5001/" }),
  Js = zn.create({ prefixUrl: "https://bundlephobia.com/" });
function Ws() {
  return Bn.get("package").json();
}
function Ys(s) {
  return Bn.post("upgrade-packages", { json: s }).json();
}
function Xs(s) {
  return Js.get(`api/size?package=${s}`).json();
}
const Nn = (s) => qs(Ys, s),
  Hn = (s) => (e) => {
    for (let t of s) {
      const { qualifier: n } = Fn(t.version),
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
  er = () => Tn(Te.package, Ws),
  tr = (s) =>
    Tn(Te.bundlephobiaReport(s), () => Xs(s), { enabled: Boolean(s) });
function nr(s) {
  bt(() => {
    window.addEventListener("keydown", s);
  }),
    yt(() => {
      window.removeEventListener("keydown", s);
    });
}
function sr(s) {
  let e, t, n, r, i, o;
  return {
    c() {
      (e = Y("svg")),
        (t = Y("g")),
        (n = Y("g")),
        (r = Y("path")),
        (o = Y("path")),
        h(r, "d", (i = Nt[s[0]])),
        h(
          o,
          "d",
          "M50,20 C71.4336483,20 81.3822646,28.613774 86.0000023,36.6100918 L86,11.9417476 L86,10 L90,10 L90,11.9417476 L90,58.0582524 L90,59.0291262 L90,70 C90,70 90,90 50,90 C10,90 10,70 10,70 L10,59.0291262 L10,58.0582524 L10,11.9417476 L10,10 L14,10 L14,11.9417476 L14,36.6100878 C18.6177354,28.613774 28.5663517,20 50,20 Z M20,60 C20,51.7157288 26.7081139,45 35.0050808,45 L64.9949192,45 C73.2819965,45 80,51.7139073 80,60 C80,68.2842712 73.2918861,75 64.9949192,75 L35.0050808,75 C26.7180035,75 20,68.2860927 20,60 Z M14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 L14,10 Z M90,10 C90,8.8954305 89.1045695,8 88,8 C86.8954305,8 86,8.8954305 86,10 L90,10 Z"
        ),
        h(n, "fill", "currentColor"),
        h(t, "stroke", "none"),
        h(t, "stroke-width", "1"),
        h(t, "fill", "none"),
        h(t, "fill-rule", "evenodd"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        h(e, "viewBox", "0 0 100 125");
    },
    m(a, l) {
      $(a, e, l), d(e, t), d(t, n), d(n, r), d(n, o);
    },
    p(a, [l]) {
      l & 1 && i !== (i = Nt[a[0]]) && h(r, "d", i);
    },
    i: N,
    o: N,
    d(a) {
      a && S(e);
    },
  };
}
const Nt = {
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
function rr(s, e, t) {
  let { mood: n = "awake" } = e;
  return (
    (s.$$set = (r) => {
      "mood" in r && t(0, (n = r.mood));
    }),
    [n]
  );
}
class ir extends V {
  constructor(e) {
    super(), G(this, e, rr, sr, x, { mood: 0 });
  }
}
const { isArray: or } = Array;
function Kn(s, e) {
  if (arguments.length === 1) return (t) => Kn(s, t);
  if (!!e) return e[s];
}
function ar(s, e) {
  const t = {},
    n = {};
  return (
    Object.entries(e).forEach(([r, i]) => {
      s(i, r) ? (t[r] = i) : (n[r] = i);
    }),
    [t, n]
  );
}
function lr(s, e, t = !1) {
  const n = [],
    r = [];
  let i = -1;
  for (; i++ < e.length - 1; )
    (t ? s(e[i], i) : s(e[i])) ? n.push(e[i]) : r.push(e[i]);
  return [n, r];
}
function xn(s, e) {
  return arguments.length === 1 ? (t) => xn(s, t) : or(e) ? lr(s, e) : ar(s, e);
}
function gt(s, e) {
  if (arguments.length === 1) return (r) => gt(s, r);
  if (Number.isNaN(Number(s)) || Number.isNaN(Number(e)))
    throw new TypeError("Both arguments to range must be numbers");
  if (e < s) return [];
  const t = e - s,
    n = Array(t);
  for (let r = 0; r < t; r++) n[r] = s + r;
  return n;
}
function Ht(s) {
  let e, t;
  return {
    c() {
      (e = Y("title")), (t = j(s[0]));
    },
    m(n, r) {
      $(n, e, r), d(e, t);
    },
    p(n, r) {
      r & 1 && ie(t, n[0]);
    },
    d(n) {
      n && S(e);
    },
  };
}
function ur(s) {
  let e,
    t,
    n,
    r = s[0] && Ht(s);
  const i = s[3].default,
    o = ke(i, s, s[2], null);
  return {
    c() {
      (e = Y("svg")),
        r && r.c(),
        (t = ts()),
        o && o.c(),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        h(e, "viewBox", s[1]),
        h(e, "class", "svelte-heylkm");
    },
    m(a, l) {
      $(a, e, l), r && r.m(e, null), d(e, t), o && o.m(e, null), (n = !0);
    },
    p(a, [l]) {
      a[0]
        ? r
          ? r.p(a, l)
          : ((r = Ht(a)), r.c(), r.m(e, t))
        : r && (r.d(1), (r = null)),
        o &&
          o.p &&
          (!n || l & 4) &&
          Re(o, i, a, a[2], n ? Le(i, a[2], l, null) : Oe(a[2]), null),
        (!n || l & 2) && h(e, "viewBox", a[1]);
    },
    i(a) {
      n || (_(o, a), (n = !0));
    },
    o(a) {
      R(o, a), (n = !1);
    },
    d(a) {
      a && S(e), r && r.d(), o && o.d(a);
    },
  };
}
function cr(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e,
    { title: i = null } = e,
    { viewBox: o } = e;
  return (
    (s.$$set = (a) => {
      "title" in a && t(0, (i = a.title)),
        "viewBox" in a && t(1, (o = a.viewBox)),
        "$$scope" in a && t(2, (r = a.$$scope));
    }),
    [i, o, r, n]
  );
}
class pe extends V {
  constructor(e) {
    super(), G(this, e, cr, ur, x, { title: 0, viewBox: 1 });
  }
}
function fr(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function hr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 448 512" }, s[0]];
  let r = { $$slots: { default: [fr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function dr(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class pr extends V {
  constructor(e) {
    super(), G(this, e, dr, hr, x, {});
  }
}
function mr(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function gr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 512 512" }, s[0]];
  let r = { $$slots: { default: [mr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function br(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class Gn extends V {
  constructor(e) {
    super(), G(this, e, br, gr, x, {});
  }
}
function yr(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function vr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 14 16" }, s[0]];
  let r = { $$slots: { default: [yr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function _r(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class wr extends V {
  constructor(e) {
    super(), G(this, e, _r, vr, x, {});
  }
}
function Cr(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function kr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 12 16" }, s[0]];
  let r = { $$slots: { default: [Cr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function Lr(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class Rr extends V {
  constructor(e) {
    super(), G(this, e, Lr, kr, x, {});
  }
}
function Or(s) {
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
function Pr(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function Mr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 640 512" }, s[0]];
  let r = { $$slots: { default: [Pr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function Er(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class Sr extends V {
  constructor(e) {
    super(), G(this, e, Er, Mr, x, {});
  }
}
function $r(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function qr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 496 512" }, s[0]];
  let r = { $$slots: { default: [$r] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function Tr(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class Fr extends V {
  constructor(e) {
    super(), G(this, e, Tr, qr, x, {});
  }
}
function Ar(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function Dr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 576 512" }, s[0]];
  let r = { $$slots: { default: [Ar] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function Qr(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class Vn extends V {
  constructor(e) {
    super(), G(this, e, Qr, Dr, x, {});
  }
}
function Ir(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function Ur(s) {
  let e, t;
  const n = [{ viewBox: "0 0 512 512" }, s[0]];
  let r = { $$slots: { default: [Ir] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function jr(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class zr extends V {
  constructor(e) {
    super(), G(this, e, jr, Ur, x, {});
  }
}
function Br(s) {
  let e;
  return {
    c() {
      (e = Y("path")),
        h(
          e,
          "d",
          "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
        );
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function Nr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 496 512" }, s[0]];
  let r = { $$slots: { default: [Br] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function Hr(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class Kr extends V {
  constructor(e) {
    super(), G(this, e, Hr, Nr, x, {});
  }
}
function xr(s) {
  let e;
  return {
    c() {
      (e = Y("path")), h(e, "d", "M5 3L0 9h3v4h4V9h3L5 3z");
    },
    m(t, n) {
      $(t, e, n);
    },
    p: N,
    d(t) {
      t && S(e);
    },
  };
}
function Gr(s) {
  let e, t;
  const n = [{ viewBox: "0 0 10 16" }, s[0]];
  let r = { $$slots: { default: [xr] }, $$scope: { ctx: s } };
  for (let i = 0; i < n.length; i += 1) r = B(r, n[i]);
  return (
    (e = new pe({ props: r })),
    {
      c() {
        U(e.$$.fragment);
      },
      m(i, o) {
        Q(e, i, o), (t = !0);
      },
      p(i, [o]) {
        const a = o & 1 ? he(n, [n[0], de(i[0])]) : {};
        o & 2 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        R(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        I(e, i);
      },
    }
  );
}
function Vr(s, e, t) {
  return (
    (s.$$set = (n) => {
      t(0, (e = B(B({}, e), X(n))));
    }),
    (e = X(e)),
    [e]
  );
}
class Zr extends V {
  constructor(e) {
    super(), G(this, e, Vr, Gr, x, {});
  }
}
function Jr(s) {
  let e;
  const t = s[3].default,
    n = ke(t, s, s[2], null);
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
        Re(n, t, r, r[2], e ? Le(t, r[2], i, null) : Oe(r[2]), null);
    },
    i(r) {
      e || (_(n, r), (e = !0));
    },
    o(r) {
      R(n, r), (e = !1);
    },
    d(r) {
      n && n.d(r);
    },
  };
}
function Wr(s) {
  let e = "...",
    t,
    n,
    r,
    i;
  const o = s[3].default,
    a = ke(o, s, s[2], null);
  return {
    c() {
      (t = j(e)),
        (n = A()),
        (r = C("div")),
        a && a.c(),
        h(r, "class", "opacity-0 h-0");
    },
    m(l, u) {
      $(l, t, u), $(l, n, u), $(l, r, u), a && a.m(r, null), (i = !0);
    },
    p(l, u) {
      a &&
        a.p &&
        (!i || u & 4) &&
        Re(a, o, l, l[2], i ? Le(o, l[2], u, null) : Oe(l[2]), null);
    },
    i(l) {
      i || (_(a, l), (i = !0));
    },
    o(l) {
      R(a, l), (i = !1);
    },
    d(l) {
      l && S(t), l && S(n), l && S(r), a && a.d(l);
    },
  };
}
function Yr(s) {
  let e, t, n, r, i, o, a, l, u, c;
  const b = [Wr, Jr],
    g = [];
  function p(f, m) {
    return f[0] ? 0 : 1;
  }
  return (
    (n = p(s)),
    (r = g[n] = b[n](s)),
    (a = new Zr({ props: { height: "1em" } })),
    {
      c() {
        (e = C("button")),
          (t = C("div")),
          r.c(),
          (i = A()),
          (o = C("div")),
          U(a.$$.fragment),
          h(t, "class", "px-2 font-medium relative"),
          h(
            o,
            "class",
            "h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple"
          ),
          h(
            e,
            "class",
            "flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple/95 text-castleton-green -mr-1 whitespace-nowrap"
          ),
          (e.disabled = s[1]),
          K(e, "opacity-90", s[0]),
          K(e, "opacity-70", s[1]);
      },
      m(f, m) {
        $(f, e, m),
          d(e, t),
          g[n].m(t, null),
          d(e, i),
          d(e, o),
          Q(a, o, null),
          (l = !0),
          u || ((c = ue(e, "click", s[4])), (u = !0));
      },
      p(f, [m]) {
        let y = n;
        (n = p(f)),
          n === y
            ? g[n].p(f, m)
            : (se(),
              R(g[y], 1, 1, () => {
                g[y] = null;
              }),
              re(),
              (r = g[n]),
              r ? r.p(f, m) : ((r = g[n] = b[n](f)), r.c()),
              _(r, 1),
              r.m(t, null)),
          (!l || m & 2) && (e.disabled = f[1]),
          (!l || m & 1) && K(e, "opacity-90", f[0]),
          (!l || m & 2) && K(e, "opacity-70", f[1]);
      },
      i(f) {
        l || (_(r), _(a.$$.fragment, f), (l = !0));
      },
      o(f) {
        R(r), R(a.$$.fragment, f), (l = !1);
      },
      d(f) {
        f && S(e), g[n].d(), I(a), (u = !1), c();
      },
    }
  );
}
function Xr(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e,
    { isLoading: i = !1 } = e,
    { disabled: o = !1 } = e;
  function a(l) {
    is.call(this, s, l);
  }
  return (
    (s.$$set = (l) => {
      "isLoading" in l && t(0, (i = l.isLoading)),
        "disabled" in l && t(1, (o = l.disabled)),
        "$$scope" in l && t(2, (r = l.$$scope));
    }),
    [i, o, r, n, a]
  );
}
class Zn extends V {
  constructor(e) {
    super(), G(this, e, Xr, Yr, x, { isLoading: 0, disabled: 1 });
  }
}
function ei(s) {
  let e, t, n;
  return (
    (t = new Zn({
      props: {
        disabled: s[9].isLoading && s[7],
        isLoading: s[9].isLoading && s[7],
        $$slots: { default: [ni] },
        $$scope: { ctx: s },
      },
    })),
    t.$on("click", s[17]),
    {
      c() {
        (e = C("div")), U(t.$$.fragment), h(e, "class", "py-1");
      },
      m(r, i) {
        $(r, e, i), Q(t, e, null), (n = !0);
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
        R(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        r && S(e), I(t);
      },
    }
  );
}
function ti(s) {
  let e, t, n, r, i, o, a;
  return (
    (o = new Gn({})),
    {
      c() {
        (e = C("div")),
          (t = C("div")),
          (n = j(s[1])),
          (r = A()),
          (i = C("div")),
          U(o.$$.fragment),
          h(i, "class", "h-4 w-4 ml-1"),
          h(e, "class", "flex items-center gap-2 justify-end py-2");
      },
      m(l, u) {
        $(l, e, u), d(e, t), d(t, n), d(e, r), d(e, i), Q(o, i, null), (a = !0);
      },
      p(l, u) {
        (!a || u & 2) && ie(n, l[1]);
      },
      i(l) {
        a || (_(o.$$.fragment, l), (a = !0));
      },
      o(l) {
        R(o.$$.fragment, l), (a = !1);
      },
      d(l) {
        l && S(e), I(o);
      },
    }
  );
}
function ni(s) {
  let e, t, n;
  return {
    c() {
      (e = j(s[1])), (t = j(" \u21D2 ")), (n = j(s[2]));
    },
    m(r, i) {
      $(r, e, i), $(r, t, i), $(r, n, i);
    },
    p(r, i) {
      i & 2 && ie(e, r[1]), i & 4 && ie(n, r[2]);
    },
    d(r) {
      r && S(e), r && S(t), r && S(n);
    },
  };
}
function Kt(s) {
  var T;
  let e,
    t = s[5].description + "",
    n,
    r,
    i,
    o,
    a,
    l,
    u,
    c,
    b,
    g,
    p,
    f = s[5].license && xt(s),
    m = s[5].author && Gt(s),
    y = s[10].data && Vt(s),
    w = ((T = s[5].repository) == null ? void 0 : T.url) && Zt(s),
    k = s[5].homepage && Jt(s),
    O = s[5].bugs && Wt(s);
  return {
    c() {
      (e = C("div")),
        (n = j(t)),
        (r = A()),
        (i = C("div")),
        (o = C("div")),
        f && f.c(),
        (a = A()),
        m && m.c(),
        (l = A()),
        y && y.c(),
        (u = A()),
        (c = C("div")),
        w && w.c(),
        (b = A()),
        k && k.c(),
        (g = A()),
        O && O.c(),
        h(
          e,
          "class",
          "text-granny-smith-apple/90 max-w-md p-4 py-2 font-medium"
        ),
        h(o, "class", "grid gap-2"),
        h(c, "class", "flex gap-2 items-center text-lg"),
        h(
          i,
          "class",
          "px-2 pt-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60"
        );
    },
    m(P, v) {
      $(P, e, v),
        d(e, n),
        $(P, r, v),
        $(P, i, v),
        d(i, o),
        f && f.m(o, null),
        d(o, a),
        m && m.m(o, null),
        d(o, l),
        y && y.m(o, null),
        d(i, u),
        d(i, c),
        w && w.m(c, null),
        d(c, b),
        k && k.m(c, null),
        d(c, g),
        O && O.m(c, null),
        (p = !0);
    },
    p(P, v) {
      var L;
      (!p || v & 32) && t !== (t = P[5].description + "") && ie(n, t),
        P[5].license
          ? f
            ? (f.p(P, v), v & 32 && _(f, 1))
            : ((f = xt(P)), f.c(), _(f, 1), f.m(o, a))
          : f &&
            (se(),
            R(f, 1, 1, () => {
              f = null;
            }),
            re()),
        P[5].author
          ? m
            ? m.p(P, v)
            : ((m = Gt(P)), m.c(), m.m(o, l))
          : m && (m.d(1), (m = null)),
        P[10].data
          ? y
            ? y.p(P, v)
            : ((y = Vt(P)), y.c(), y.m(o, null))
          : y && (y.d(1), (y = null)),
        (L = P[5].repository) != null && L.url
          ? w
            ? (w.p(P, v), v & 32 && _(w, 1))
            : ((w = Zt(P)), w.c(), _(w, 1), w.m(c, b))
          : w &&
            (se(),
            R(w, 1, 1, () => {
              w = null;
            }),
            re()),
        P[5].homepage
          ? k
            ? (k.p(P, v), v & 32 && _(k, 1))
            : ((k = Jt(P)), k.c(), _(k, 1), k.m(c, g))
          : k &&
            (se(),
            R(k, 1, 1, () => {
              k = null;
            }),
            re()),
        P[5].bugs
          ? O
            ? (O.p(P, v), v & 32 && _(O, 1))
            : ((O = Wt(P)), O.c(), _(O, 1), O.m(c, null))
          : O &&
            (se(),
            R(O, 1, 1, () => {
              O = null;
            }),
            re());
    },
    i(P) {
      p || (_(f), _(w), _(k), _(O), (p = !0));
    },
    o(P) {
      R(f), R(w), R(k), R(O), (p = !1);
    },
    d(P) {
      P && S(e),
        P && S(r),
        P && S(i),
        f && f.d(),
        m && m.d(),
        y && y.d(),
        w && w.d(),
        k && k.d(),
        O && O.d();
    },
  };
}
function xt(s) {
  var u;
  let e,
    t,
    n,
    r,
    i,
    o = ((u = s[5].license) != null ? u : "") + "",
    a,
    l;
  return (
    (n = new Sr({})),
    {
      c() {
        (e = C("div")),
          (t = C("div")),
          U(n.$$.fragment),
          (r = A()),
          (i = C("span")),
          (a = j(o)),
          h(t, "class", "h-text -translate-y-px"),
          h(e, "class", "flex gap-1 items-center");
      },
      m(c, b) {
        $(c, e, b), d(e, t), Q(n, t, null), d(e, r), d(e, i), d(i, a), (l = !0);
      },
      p(c, b) {
        var g;
        (!l || b & 32) &&
          o !== (o = ((g = c[5].license) != null ? g : "") + "") &&
          ie(a, o);
      },
      i(c) {
        l || (_(n.$$.fragment, c), (l = !0));
      },
      o(c) {
        R(n.$$.fragment, c), (l = !1);
      },
      d(c) {
        c && S(e), I(n);
      },
    }
  );
}
function Gt(s) {
  let e,
    t,
    n,
    r,
    i = s[5].author.name + "",
    o;
  return {
    c() {
      (e = C("div")),
        (t = C("span")),
        (t.textContent = "Authored by"),
        (n = A()),
        (r = C("span")),
        (o = j(i)),
        h(r, "class", "font-semibold"),
        h(e, "class", "text-granny-smith-apple flex items-center gap-2");
    },
    m(a, l) {
      $(a, e, l), d(e, t), d(e, n), d(e, r), d(r, o);
    },
    p(a, l) {
      l & 32 && i !== (i = a[5].author.name + "") && ie(o, i);
    },
    d(a) {
      a && S(e);
    },
  };
}
function Vt(s) {
  let e,
    t,
    n,
    r = (s[10].data.gzip / 1024).toFixed(1) + "",
    i,
    o,
    a,
    l,
    u = (s[10].data.size / 1024).toFixed(1) + "",
    c,
    b,
    g;
  return {
    c() {
      (e = C("div")),
        (t = j(`Bundle size
              `)),
        (n = C("span")),
        (i = j(r)),
        (o = j("kb")),
        (a = j(`
              (gzipped) |
              `)),
        (l = C("span")),
        (c = j(u)),
        (b = j("kb")),
        (g = j(" (uncompressed)")),
        h(n, "class", "font-semibold"),
        h(l, "class", "font-semibold");
    },
    m(p, f) {
      $(p, e, f),
        d(e, t),
        d(e, n),
        d(n, i),
        d(n, o),
        d(e, a),
        d(e, l),
        d(l, c),
        d(l, b),
        d(e, g);
    },
    p(p, f) {
      f & 1024 &&
        r !== (r = (p[10].data.gzip / 1024).toFixed(1) + "") &&
        ie(i, r),
        f & 1024 &&
          u !== (u = (p[10].data.size / 1024).toFixed(1) + "") &&
          ie(c, u);
    },
    d(p) {
      p && S(e);
    },
  };
}
function Zt(s) {
  let e, t, n, r, i;
  return (
    (n = new Fr({})),
    {
      c() {
        (e = C("div")),
          (t = C("a")),
          U(n.$$.fragment),
          h(t, "href", (r = s[5].repository.url.replace(/^git\+/, ""))),
          h(t, "target", "_blank"),
          h(t, "class", "hover:underline"),
          h(t, "rel", "noopener noreferrer"),
          h(t, "title", "Github"),
          h(e, "class", "h-text");
      },
      m(o, a) {
        $(o, e, a), d(e, t), Q(n, t, null), (i = !0);
      },
      p(o, a) {
        (!i ||
          (a & 32 && r !== (r = o[5].repository.url.replace(/^git\+/, "")))) &&
          h(t, "href", r);
      },
      i(o) {
        i || (_(n.$$.fragment, o), (i = !0));
      },
      o(o) {
        R(n.$$.fragment, o), (i = !1);
      },
      d(o) {
        o && S(e), I(n);
      },
    }
  );
}
function Jt(s) {
  let e, t, n, r, i;
  return (
    (n = new Kr({})),
    {
      c() {
        (e = C("div")),
          (t = C("a")),
          U(n.$$.fragment),
          h(t, "href", (r = s[5].homepage)),
          h(t, "target", "_blank"),
          h(t, "class", "hover:underline"),
          h(t, "rel", "noopener noreferrer"),
          h(t, "title", "Homepage"),
          h(e, "class", "h-text");
      },
      m(o, a) {
        $(o, e, a), d(e, t), Q(n, t, null), (i = !0);
      },
      p(o, a) {
        (!i || (a & 32 && r !== (r = o[5].homepage))) && h(t, "href", r);
      },
      i(o) {
        i || (_(n.$$.fragment, o), (i = !0));
      },
      o(o) {
        R(n.$$.fragment, o), (i = !1);
      },
      d(o) {
        o && S(e), I(n);
      },
    }
  );
}
function Wt(s) {
  let e, t, n, r, i;
  return (
    (n = new zr({})),
    {
      c() {
        (e = C("div")),
          (t = C("a")),
          U(n.$$.fragment),
          h(t, "href", (r = s[5].bugs.url)),
          h(t, "target", "_blank"),
          h(t, "class", "hover:underline"),
          h(t, "rel", "noopener noreferrer"),
          h(t, "title", "Bugs"),
          h(e, "class", "h-text");
      },
      m(o, a) {
        $(o, e, a), d(e, t), Q(n, t, null), (i = !0);
      },
      p(o, a) {
        (!i || (a & 32 && r !== (r = o[5].bugs.url))) && h(t, "href", r);
      },
      i(o) {
        i || (_(n.$$.fragment, o), (i = !0));
      },
      o(o) {
        R(n.$$.fragment, o), (i = !1);
      },
      d(o) {
        o && S(e), I(n);
      },
    }
  );
}
function si(s) {
  let e,
    t,
    n,
    r,
    i,
    o,
    a,
    l,
    u = Ut(Yt, s[0]) + "",
    c,
    b,
    g,
    p,
    f,
    m,
    y,
    w,
    k,
    O,
    T;
  a = new Vn({});
  const P = [ti, ei],
    v = [];
  function L(q, H) {
    return q[4] ? 0 : 1;
  }
  (f = L(s)), (m = v[f] = P[f](s));
  let M = s[6] && Kt(s);
  return {
    c() {
      (e = C("li")),
        (t = C("div")),
        (n = C("div")),
        (r = C("div")),
        (i = C("a")),
        (o = C("div")),
        U(a.$$.fragment),
        (l = A()),
        (c = j(u)),
        (g = A()),
        (p = C("div")),
        m.c(),
        (y = A()),
        M && M.c(),
        h(o, "class", "h-8"),
        K(o, "hidden", !s[6]),
        h(i, "href", (b = `https://npmjs.com/package/${s[0]}`)),
        h(i, "target", "_blank"),
        h(
          i,
          "class",
          "hover:underline font-medium whitespace-nowrap flex items-center gap-2 text-lg"
        ),
        h(i, "rel", "noopener noreferrer"),
        K(i, "pt-1", s[6]),
        h(p, "class", "grid place-items-end gap-2 items-center"),
        h(n, "class", "flex justify-between p-4 py-2"),
        h(
          t,
          "class",
          "transition-[transform,background] duration-300 ease-in-out svelte-8luwom"
        ),
        K(t, "expanded", s[6]),
        h(e, "class", "animate-fadeIn transition-opacity svelte-8luwom"),
        h(
          e,
          "style",
          (w = `animation-delay: ${(s[3] + 1) * s[14]}s; opacity: ${
            s[8] ? 0.4 : 1
          }!important;`)
        ),
        K(e, "border-t", s[3] !== 0);
    },
    m(q, H) {
      $(q, e, H),
        d(e, t),
        d(t, n),
        d(n, r),
        d(r, i),
        d(i, o),
        Q(a, o, null),
        d(i, l),
        d(i, c),
        d(n, g),
        d(n, p),
        v[f].m(p, null),
        d(t, y),
        M && M.m(t, null),
        (k = !0),
        O || ((T = [ue(e, "click", s[13]), ue(e, "keydown", s[13])]), (O = !0));
    },
    p(q, [H]) {
      (!k || H & 64) && K(o, "hidden", !q[6]),
        (!k || H & 1) && u !== (u = Ut(Yt, q[0]) + "") && ie(c, u),
        (!k || (H & 1 && b !== (b = `https://npmjs.com/package/${q[0]}`))) &&
          h(i, "href", b),
        (!k || H & 64) && K(i, "pt-1", q[6]);
      let ae = f;
      (f = L(q)),
        f === ae
          ? v[f].p(q, H)
          : (se(),
            R(v[ae], 1, 1, () => {
              v[ae] = null;
            }),
            re(),
            (m = v[f]),
            m ? m.p(q, H) : ((m = v[f] = P[f](q)), m.c()),
            _(m, 1),
            m.m(p, null)),
        q[6]
          ? M
            ? (M.p(q, H), H & 64 && _(M, 1))
            : ((M = Kt(q)), M.c(), _(M, 1), M.m(t, null))
          : M &&
            (se(),
            R(M, 1, 1, () => {
              M = null;
            }),
            re()),
        (!k || H & 64) && K(t, "expanded", q[6]),
        (!k ||
          (H & 264 &&
            w !==
              (w = `animation-delay: ${(q[3] + 1) * q[14]}s; opacity: ${
                q[8] ? 0.4 : 1
              }!important;`))) &&
          h(e, "style", w),
        (!k || H & 8) && K(e, "border-t", q[3] !== 0);
    },
    i(q) {
      k || (_(a.$$.fragment, q), _(m), _(M), (k = !0));
    },
    o(q) {
      R(a.$$.fragment, q), R(m), R(M), (k = !1);
    },
    d(q) {
      q && S(e), I(a), v[f].d(), M && M.d(), (O = !1), me(T);
    },
  };
}
const Yt = 36;
function ri(s, e, t) {
  let n,
    r,
    i,
    o,
    { name: a = "" } = e,
    { version: l = "" } = e,
    { latest: u = "" } = e,
    { index: c = 0 } = e,
    { isLatest: b = !1 } = e,
    { meta: g } = e,
    { expandedRowIndex: p = -1 } = e,
    f = !1;
  const m = Nn({
    onMutate() {
      t(7, (f = !0));
    },
    onSettled() {
      t(7, (f = !1));
    },
  });
  Ze(s, m, (L) => t(9, (i = L)));
  const y = nt();
  async function w(L) {
    try {
      const M = await i.mutateAsync(L);
      y.setQueryData([Te.package], Hn(M)), await y.refetchQueries([Te.package]);
    } catch (M) {
      console.log("Failed to upgrade packages:", { originalError: M });
    }
  }
  function k() {
    p === c ? t(16, (p = -1)) : t(16, (p = c));
  }
  const O = 1 / 30;
  function T(L) {
    L.key === "Escape" && t(16, (p = -1));
  }
  const P = tr(a);
  Ze(s, P, (L) => t(10, (o = L))),
    bt(() => {
      window.addEventListener("keydown", T);
    }),
    yt(() => {
      window.removeEventListener("keydown", T);
    });
  const v = (L) => {
    L.stopPropagation(), w([{ name: a, version: l, latest: u, meta: g }]);
  };
  return (
    (s.$$set = (L) => {
      "name" in L && t(0, (a = L.name)),
        "version" in L && t(1, (l = L.version)),
        "latest" in L && t(2, (u = L.latest)),
        "index" in L && t(3, (c = L.index)),
        "isLatest" in L && t(4, (b = L.isLatest)),
        "meta" in L && t(5, (g = L.meta)),
        "expandedRowIndex" in L && t(16, (p = L.expandedRowIndex));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 65544 && t(6, (n = p === c)),
        s.$$.dirty & 65600 && t(8, (r = !n && p !== -1));
    }),
    [a, l, u, c, b, g, n, f, r, i, o, m, w, k, O, P, p, v]
  );
}
class ii extends V {
  constructor(e) {
    super(),
      G(this, e, ri, si, x, {
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
function Xt(s, e, t) {
  const n = s.slice();
  return (n[5] = e[t]), n;
}
function en(s) {
  let e,
    t,
    n = s[5] + 1 + "",
    r,
    i,
    o,
    a;
  return {
    c() {
      (e = C("li")),
        (t = C("button")),
        (r = j(n)),
        h(t, "data-page", (i = s[5])),
        h(t, "class", "btn-arrow text-xl svelte-16bdnnj"),
        K(t, "bg-castleton-green", s[5] === s[0]);
    },
    m(l, u) {
      $(l, e, u), d(e, t), d(t, r), o || ((a = ue(t, "click", s[2])), (o = !0));
    },
    p(l, u) {
      u & 2 && n !== (n = l[5] + 1 + "") && ie(r, n),
        u & 2 && i !== (i = l[5]) && h(t, "data-page", i),
        u & 3 && K(t, "bg-castleton-green", l[5] === l[0]);
    },
    d(l) {
      l && S(e), (o = !1), a();
    },
  };
}
function oi(s) {
  let e,
    t,
    n,
    r,
    i,
    o,
    a,
    l,
    u,
    c,
    b,
    g,
    p,
    f = gt(0, s[1]),
    m = [];
  for (let y = 0; y < f.length; y += 1) m[y] = en(Xt(s, f, y));
  return {
    c() {
      (e = C("ul")),
        (t = C("li")),
        (n = C("button")),
        (r = j("\u25C4")),
        (o = A());
      for (let y = 0; y < m.length; y += 1) m[y].c();
      (a = A()),
        (l = C("li")),
        (u = C("button")),
        (c = j("\u25BA")),
        h(n, "class", "btn-arrow svelte-16bdnnj"),
        (n.disabled = i = s[0] === 0),
        h(u, "class", "btn-arrow svelte-16bdnnj"),
        (u.disabled = b = s[0] === s[1] - 1),
        h(
          e,
          "class",
          "inline-flex mx-auto font-medium p-4 py-2 items-center gap-2"
        );
    },
    m(y, w) {
      $(y, e, w), d(e, t), d(t, n), d(n, r), d(e, o);
      for (let k = 0; k < m.length; k += 1) m[k] && m[k].m(e, null);
      d(e, a),
        d(e, l),
        d(l, u),
        d(u, c),
        g || ((p = [ue(n, "click", s[4]), ue(u, "click", s[3])]), (g = !0));
    },
    p(y, [w]) {
      if ((w & 1 && i !== (i = y[0] === 0) && (n.disabled = i), w & 7)) {
        f = gt(0, y[1]);
        let k;
        for (k = 0; k < f.length; k += 1) {
          const O = Xt(y, f, k);
          m[k] ? m[k].p(O, w) : ((m[k] = en(O)), m[k].c(), m[k].m(e, a));
        }
        for (; k < m.length; k += 1) m[k].d(1);
        m.length = f.length;
      }
      w & 3 && b !== (b = y[0] === y[1] - 1) && (u.disabled = b);
    },
    i: N,
    o: N,
    d(y) {
      y && S(e), Ie(m, y), (g = !1), me(p);
    },
  };
}
function ai(s, e, t) {
  let { pages: n = 0 } = e,
    { pageIndex: r = 0 } = e;
  function i(l) {
    const { page: u } = l.target.dataset;
    t(0, (r = Number(u)));
  }
  function o() {
    r < n - 1 && t(0, r++, r);
  }
  function a() {
    r > 0 && t(0, r--, r);
  }
  return (
    (s.$$set = (l) => {
      "pages" in l && t(1, (n = l.pages)),
        "pageIndex" in l && t(0, (r = l.pageIndex));
    }),
    [r, n, i, o, a]
  );
}
class li extends V {
  constructor(e) {
    super(), G(this, e, ai, oi, x, { pages: 1, pageIndex: 0 });
  }
}
function tn(s, e, t) {
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
function nn(s, e, t) {
  const n = s.slice();
  return (n[35] = e[t].keys), (n[36] = e[t].label), n;
}
function sn(s, e, t) {
  const n = s.slice();
  return (n[39] = e[t].symbol), (n[40] = e[t].rotation), n;
}
function ui(s) {
  let e, t;
  return (
    (e = new wr({})),
    {
      c() {
        U(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function ci(s) {
  let e, t;
  return (
    (e = new Rr({})),
    {
      c() {
        U(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function rn(s) {
  let e,
    t,
    n,
    r,
    i,
    o = s[39] + "",
    a,
    l,
    u;
  return (
    (n = new pr({})),
    {
      c() {
        (e = C("kbd")),
          (t = C("div")),
          U(n.$$.fragment),
          (r = A()),
          (i = C("span")),
          (a = j(o)),
          (l = A()),
          h(t, "class", "h-3 w-3"),
          h(t, "style", `transform: rotate(${s[40]}deg);`),
          h(i, "class", "sr-only"),
          h(
            e,
            "class",
            "text-sm font-semibold flex p-1.5 bg-castleton-green/40 rounded"
          );
      },
      m(c, b) {
        $(c, e, b),
          d(e, t),
          Q(n, t, null),
          d(e, r),
          d(e, i),
          d(i, a),
          d(e, l),
          (u = !0);
      },
      p: N,
      i(c) {
        u || (_(n.$$.fragment, c), (u = !0));
      },
      o(c) {
        R(n.$$.fragment, c), (u = !1);
      },
      d(c) {
        c && S(e), I(n);
      },
    }
  );
}
function on(s) {
  let e,
    t,
    n,
    r,
    i = s[36] + "",
    o,
    a,
    l,
    u = s[35],
    c = [];
  for (let g = 0; g < u.length; g += 1) c[g] = rn(sn(s, u, g));
  const b = (g) =>
    R(c[g], 1, 1, () => {
      c[g] = null;
    });
  return {
    c() {
      (e = C("li")), (t = C("div"));
      for (let g = 0; g < c.length; g += 1) c[g].c();
      (n = A()),
        (r = C("span")),
        (o = j(i)),
        (a = A()),
        h(t, "class", "flex gap-2"),
        h(r, "class", "ml-2 text-sm"),
        h(e, "class", "flex items-center");
    },
    m(g, p) {
      $(g, e, p), d(e, t);
      for (let f = 0; f < c.length; f += 1) c[f] && c[f].m(t, null);
      d(e, n), d(e, r), d(r, o), d(e, a), (l = !0);
    },
    p(g, p) {
      if (p[0] & 32768) {
        u = g[35];
        let f;
        for (f = 0; f < u.length; f += 1) {
          const m = sn(g, u, f);
          c[f]
            ? (c[f].p(m, p), _(c[f], 1))
            : ((c[f] = rn(m)), c[f].c(), _(c[f], 1), c[f].m(t, null));
        }
        for (se(), f = u.length; f < c.length; f += 1) b(f);
        re();
      }
    },
    i(g) {
      if (!l) {
        for (let p = 0; p < u.length; p += 1) _(c[p]);
        l = !0;
      }
    },
    o(g) {
      c = c.filter(Boolean);
      for (let p = 0; p < c.length; p += 1) R(c[p]);
      l = !1;
    },
    d(g) {
      g && S(e), Ie(c, g);
    },
  };
}
function an(s) {
  let e, t, n;
  return (
    (t = new Gn({})),
    {
      c() {
        (e = C("div")), U(t.$$.fragment), h(e, "class", "h-4 w-4 ml-1");
      },
      m(r, i) {
        $(r, e, i), Q(t, e, null), (n = !0);
      },
      i(r) {
        n || (_(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        R(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        r && S(e), I(t);
      },
    }
  );
}
function ln(s) {
  let e, t;
  return (
    (e = new Zn({
      props: {
        disabled: s[12].isLoading,
        isLoading: s[12].isLoading,
        $$slots: { default: [fi] },
        $$scope: { ctx: s },
      },
    })),
    e.$on("click", s[24]),
    {
      c() {
        U(e.$$.fragment);
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
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function fi(s) {
  let e;
  return {
    c() {
      e = j("Upgrade all");
    },
    m(t, n) {
      $(t, e, n);
    },
    d(t) {
      t && S(e);
    },
  };
}
function un(s) {
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
    (e = new ii({ props: i })),
    je.push(() => _t(e, "expandedRowIndex", r)),
    {
      c() {
        U(e.$$.fragment);
      },
      m(o, a) {
        Q(e, o, a), (n = !0);
      },
      p(o, a) {
        const l = {};
        a[0] & 1024 && (l.name = o[28]),
          a[0] & 1024 && (l.version = o[29]),
          a[0] & 1024 && (l.latest = o[30]),
          a[0] & 1024 && (l.isLatest = o[31]),
          a[0] & 1024 && (l.meta = o[32]),
          !t &&
            a[0] & 32 &&
            ((t = !0), (l.expandedRowIndex = o[5]), vt(() => (t = !1))),
          e.$set(l);
      },
      i(o) {
        n || (_(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        R(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        I(e, o);
      },
    }
  );
}
function cn(s) {
  let e, t, n, r, i;
  function o(l) {
    s[26](l);
  }
  let a = { pages: s[11] };
  return (
    s[2] !== void 0 && (a.pageIndex = s[2]),
    (n = new li({ props: a })),
    je.push(() => _t(n, "pageIndex", o)),
    {
      c() {
        (e = C("footer")),
          (t = C("div")),
          U(n.$$.fragment),
          h(t, "class", "bg-slate-900/90 rounded-full"),
          h(e, "class", "grid place-items-center");
      },
      m(l, u) {
        $(l, e, u), d(e, t), Q(n, t, null), (i = !0);
      },
      p(l, u) {
        const c = {};
        u[0] & 2048 && (c.pages = l[11]),
          !r &&
            u[0] & 4 &&
            ((r = !0), (c.pageIndex = l[2]), vt(() => (r = !1))),
          n.$set(c);
      },
      i(l) {
        i || (_(n.$$.fragment, l), (i = !0));
      },
      o(l) {
        R(n.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && S(e), I(n);
      },
    }
  );
}
function hi(s) {
  let e,
    t,
    n,
    r,
    i,
    o,
    a,
    l,
    u,
    c,
    b,
    g,
    p,
    f,
    m,
    y,
    w = s[0] === "dependencies" ? "Dependencies" : "Dev Dependencies",
    k,
    O,
    T,
    P = s[4].length + "",
    v,
    L,
    M = s[1].length + "",
    q,
    H,
    ae,
    be,
    Pe,
    Me,
    F,
    ce,
    fe,
    st,
    Rt;
  const Ot = [ci, ui],
    ye = [];
  function Pt(E, D) {
    return E[6] ? 0 : 1;
  }
  (r = Pt(s)), (i = ye[r] = Ot[r](s));
  let ve = s[15],
    Z = [];
  for (let E = 0; E < ve.length; E += 1) Z[E] = on(nn(s, ve, E));
  const Wn = (E) =>
    R(Z[E], 1, 1, () => {
      Z[E] = null;
    });
  let ne = s[8] && an(),
    ee = !s[8] && ln(s),
    _e = s[10],
    J = [];
  for (let E = 0; E < _e.length; E += 1) J[E] = un(tn(s, _e, E));
  const Yn = (E) =>
    R(J[E], 1, 1, () => {
      J[E] = null;
    });
  let te = s[11] > 1 && cn(s);
  return {
    c() {
      (e = C("div")),
        (t = C("aside")),
        (n = C("button")),
        i.c(),
        (o = A()),
        (a = C("ul"));
      for (let E = 0; E < Z.length; E += 1) Z[E].c();
      (u = A()),
        (c = C("section")),
        (b = C("div")),
        (g = C("input")),
        (p = A()),
        (f = C("header")),
        (m = C("div")),
        (y = C("div")),
        (k = j(w)),
        (O = A()),
        (T = C("span")),
        (v = j(P)),
        (L = j("/")),
        (q = j(M)),
        (H = A()),
        ne && ne.c(),
        (ae = A()),
        (be = C("div")),
        ee && ee.c(),
        (Pe = A()),
        (Me = C("main")),
        (F = C("ul"));
      for (let E = 0; E < J.length; E += 1) J[E].c();
      (ce = A()),
        te && te.c(),
        h(n, "class", "help-trigger svelte-1lgocty"),
        K(n, "hidden", s[6]),
        h(a, "class", "bg-slate-900/60 p-4 rounded-xl grid gap-2 opacity-10"),
        h(a, "aria-hidden", (l = !s[6])),
        K(a, "opacity-100", s[6]),
        h(
          t,
          "class",
          "absolute right-0 top-8 transition-all duration-300 ease-in"
        ),
        K(t, "translate-x-64", s[6]),
        h(g, "type", "search"),
        h(g, "class", "search-input svelte-1lgocty"),
        h(g, "placeholder", "package name or version"),
        h(b, "class", ""),
        h(
          T,
          "class",
          "text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
        ),
        h(m, "class", "flex items-center justify-between w-full"),
        h(
          f,
          "class",
          "p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2"
        ),
        h(F, "class", "grid"),
        h(Me, "class", "min-h-[32rem] mx-2"),
        h(
          c,
          "class",
          "bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2"
        ),
        h(e, "class", "relative");
    },
    m(E, D) {
      $(E, e, D), d(e, t), d(t, n), ye[r].m(n, null), d(t, o), d(t, a);
      for (let oe = 0; oe < Z.length; oe += 1) Z[oe] && Z[oe].m(a, null);
      d(e, u),
        d(e, c),
        d(c, b),
        d(b, g),
        Et(g, s[3]),
        d(c, p),
        d(c, f),
        d(f, m),
        d(m, y),
        d(y, k),
        d(y, O),
        d(y, T),
        d(T, v),
        d(T, L),
        d(T, q),
        d(m, H),
        ne && ne.m(m, null),
        d(f, ae),
        d(f, be),
        ee && ee.m(be, null),
        d(c, Pe),
        d(c, Me),
        d(Me, F);
      for (let oe = 0; oe < J.length; oe += 1) J[oe] && J[oe].m(F, null);
      d(c, ce),
        te && te.m(c, null),
        (fe = !0),
        st ||
          ((Rt = [
            ue(n, "click", s[19]),
            es(Or.call(null, t)),
            ue(t, "outsideclick", s[20]),
            ue(g, "input", s[21]),
            ue(g, "focus", s[22]),
            ue(g, "blur", s[23]),
          ]),
          (st = !0));
    },
    p(E, D) {
      let oe = r;
      if (
        ((r = Pt(E)),
        r !== oe &&
          (se(),
          R(ye[oe], 1, 1, () => {
            ye[oe] = null;
          }),
          re(),
          (i = ye[r]),
          i || ((i = ye[r] = Ot[r](E)), i.c()),
          _(i, 1),
          i.m(n, null)),
        (!fe || D[0] & 64) && K(n, "hidden", E[6]),
        D[0] & 32768)
      ) {
        ve = E[15];
        let z;
        for (z = 0; z < ve.length; z += 1) {
          const Ae = nn(E, ve, z);
          Z[z]
            ? (Z[z].p(Ae, D), _(Z[z], 1))
            : ((Z[z] = on(Ae)), Z[z].c(), _(Z[z], 1), Z[z].m(a, null));
        }
        for (se(), z = ve.length; z < Z.length; z += 1) Wn(z);
        re();
      }
      if (
        ((!fe || (D[0] & 64 && l !== (l = !E[6]))) && h(a, "aria-hidden", l),
        (!fe || D[0] & 64) && K(a, "opacity-100", E[6]),
        (!fe || D[0] & 64) && K(t, "translate-x-64", E[6]),
        D[0] & 8 && g.value !== E[3] && Et(g, E[3]),
        (!fe || D[0] & 1) &&
          w !==
            (w =
              E[0] === "dependencies" ? "Dependencies" : "Dev Dependencies") &&
          ie(k, w),
        (!fe || D[0] & 16) && P !== (P = E[4].length + "") && ie(v, P),
        (!fe || D[0] & 2) && M !== (M = E[1].length + "") && ie(q, M),
        E[8]
          ? ne
            ? D[0] & 256 && _(ne, 1)
            : ((ne = an()), ne.c(), _(ne, 1), ne.m(m, null))
          : ne &&
            (se(),
            R(ne, 1, 1, () => {
              ne = null;
            }),
            re()),
        E[8]
          ? ee &&
            (se(),
            R(ee, 1, 1, () => {
              ee = null;
            }),
            re())
          : ee
          ? (ee.p(E, D), D[0] & 256 && _(ee, 1))
          : ((ee = ln(E)), ee.c(), _(ee, 1), ee.m(be, null)),
        D[0] & 1056)
      ) {
        _e = E[10];
        let z;
        for (z = 0; z < _e.length; z += 1) {
          const Ae = tn(E, _e, z);
          J[z]
            ? (J[z].p(Ae, D), _(J[z], 1))
            : ((J[z] = un(Ae)), J[z].c(), _(J[z], 1), J[z].m(F, null));
        }
        for (se(), z = _e.length; z < J.length; z += 1) Yn(z);
        re();
      }
      E[11] > 1
        ? te
          ? (te.p(E, D), D[0] & 2048 && _(te, 1))
          : ((te = cn(E)), te.c(), _(te, 1), te.m(c, null))
        : te &&
          (se(),
          R(te, 1, 1, () => {
            te = null;
          }),
          re());
    },
    i(E) {
      if (!fe) {
        _(i);
        for (let D = 0; D < ve.length; D += 1) _(Z[D]);
        _(ne), _(ee);
        for (let D = 0; D < _e.length; D += 1) _(J[D]);
        _(te), (fe = !0);
      }
    },
    o(E) {
      R(i), (Z = Z.filter(Boolean));
      for (let D = 0; D < Z.length; D += 1) R(Z[D]);
      R(ne), R(ee), (J = J.filter(Boolean));
      for (let D = 0; D < J.length; D += 1) R(J[D]);
      R(te), (fe = !1);
    },
    d(E) {
      E && S(e),
        ye[r].d(),
        Ie(Z, E),
        ne && ne.d(),
        ee && ee.d(),
        Ie(J, E),
        te && te.d(),
        (st = !1),
        me(Rt);
    },
  };
}
function di(s, e, t) {
  let n,
    r,
    i,
    o,
    a,
    l,
    u,
    c,
    b,
    { selectedTab: g = "dependencies" } = e,
    { entries: p = [] } = e,
    f = 0,
    m = -1,
    y = "",
    w = !1,
    k = !1;
  const O = Nn();
  Ze(s, O, (F) => t(12, (b = F)));
  const T = nt();
  async function P(F) {
    try {
      const ce = await b.mutateAsync(F);
      T.setQueryData([Te.package], Hn(ce)),
        await T.refetchQueries([Te.package]);
    } catch (ce) {
      console.log("Failed to upgrade packages:", { originalError: ce });
    }
  }
  nr((F) => {
    if (F.shiftKey)
      switch (F.key) {
        case "ArrowRight":
        case "ArrowLeft":
          F.preventDefault(),
            t(
              0,
              (g = g === "dependencies" ? "devDependencies" : "dependencies")
            ),
            t(2, (f = 0)),
            t(5, (m = -1));
          break;
      }
    switch (F.key) {
      case "ArrowUp":
        F.preventDefault(), m > 0 ? t(5, m--, m) : t(5, (m = a.length - 1));
        break;
      case "ArrowDown":
        F.preventDefault(), m < a.length - 1 ? t(5, m++, m) : t(5, (m = 0));
        break;
      case "ArrowLeft":
        f > 0 && (F.preventDefault(), t(2, f--, f), t(5, (m = -1)));
        break;
      case "ArrowRight":
        f < r - 1 && (F.preventDefault(), t(2, f++, f), t(5, (m = -1)));
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
    L = () => {
      t(6, (w = !w));
    },
    M = () => t(6, (w = !1));
  function q() {
    (y = this.value), t(3, y);
  }
  const H = () => {
      t(7, (k = !0));
    },
    ae = () => {
      t(7, (k = !1));
    },
    be = () => P(u);
  function Pe(F) {
    (m = F), t(5, m), t(0, g), t(3, y);
  }
  function Me(F) {
    (f = F), t(2, f), t(0, g), t(3, y);
  }
  return (
    (s.$$set = (F) => {
      "selectedTab" in F && t(0, (g = F.selectedTab)),
        "entries" in F && t(1, (p = F.entries));
    }),
    (s.$$.update = () => {
      s.$$.dirty[0] & 10 &&
        t(
          18,
          (n = p.filter(
            ({ name: F, version: ce }) =>
              F.toLowerCase().includes(y.toLowerCase()) ||
              ce.toLowerCase().includes(y.toLowerCase())
          ))
        ),
        s.$$.dirty[0] & 262144 && t(11, (r = Math.ceil(n.length / it))),
        s.$$.dirty[0] & 262144 &&
          t(
            16,
            (i = n
              .map((F) => ({ ...F, isLatest: An(F.version, F.latest) }))
              .sort((F, ce) =>
                F.isLatest && ce.isLatest
                  ? 0
                  : F.isLatest && !ce.isLatest
                  ? 1
                  : -1
              ))
          ),
        s.$$.dirty[0] & 1 && g && (t(2, (f = 0)), t(5, (m = -1))),
        s.$$.dirty[0] & 8 && y && (t(2, (f = 0)), t(5, (m = -1))),
        s.$$.dirty[0] & 4 && t(17, (o = f * it)),
        s.$$.dirty[0] & 196608 && t(10, (a = i.slice(o, o + it))),
        s.$$.dirty[0] & 65536 &&
          t(
            4,
            ([l, u] = xn(Kn("isLatest"), i)),
            l,
            (t(9, u), t(16, i), t(18, n), t(1, p), t(3, y))
          ),
        s.$$.dirty[0] & 18 && t(8, (c = l.length === p.length));
    }),
    [
      g,
      p,
      f,
      y,
      l,
      m,
      w,
      k,
      c,
      u,
      a,
      r,
      b,
      O,
      P,
      v,
      i,
      o,
      n,
      L,
      M,
      q,
      H,
      ae,
      be,
      Pe,
      Me,
    ]
  );
}
class pi extends V {
  constructor(e) {
    super(),
      G(this, e, di, hi, x, { selectedTab: 0, entries: 1 }, null, [-1, -1]);
  }
}
const mi = "@greenbot/cli",
  gi = "0.20.5",
  bi = ["greenbot", "cli", "package updater"],
  yi = "An interactive package updater for npm based applications",
  vi = "https://github.com/alanrsoares/greenbot",
  _i = "MIT",
  wi = ["dist/", "bin/"],
  Ci = "./bin/greenbot.cjs",
  ki = "module",
  Li = {
    dev: "vite",
    build: "vite build",
    serve: "vite preview",
    check: "svelte-check --tsconfig ./tsconfig.json",
    preversion: "yarn build",
    release: "npm publish && git push && git push --tags",
    prepare: "husky install",
  },
  Ri = {
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
    vite: "^3.2.7",
    "vite-tsconfig-paths": "^3.6.0",
  },
  Oi = {
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
    "svelte-icons": "^2.1.0",
    "typewriter-effect": "^2.19.0",
  },
  Pi = {
    name: mi,
    version: gi,
    keywords: bi,
    description: yi,
    homepage: vi,
    license: _i,
    files: wi,
    bin: Ci,
    type: ki,
    scripts: Li,
    devDependencies: Ri,
    dependencies: Oi,
  };
const Mi = (s) => ({}),
  fn = (s) => ({}),
  Ei = (s) => ({}),
  hn = (s) => ({});
function Si(s) {
  let e, t, n, r, i, o, a, l, u, c, b, g, p, f, m;
  const y = s[1].logo,
    w = ke(y, s, s[0], hn),
    k = s[1].version,
    O = ke(k, s, s[0], fn),
    T = s[1].default,
    P = ke(T, s, s[0], null);
  return {
    c() {
      (e = C("div")),
        (t = C("header")),
        (n = C("nav")),
        (r = C("h1")),
        (i = C("div")),
        w && w.c(),
        (o = A()),
        (a = C("div")),
        (a.textContent = "_greenbot"),
        (l = A()),
        O && O.c(),
        (u = A()),
        (c = C("main")),
        P && P.c(),
        (b = A()),
        (g = C("footer")),
        (p = C("div")),
        (f = C("span")),
        (f.textContent = `npm-greenbot@v${Pi.version}`),
        h(i, "class", "w-12"),
        h(r, "class", "flex items-center gap-2 whitespace-nowrap p-2"),
        h(
          n,
          "class",
          "md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"
        ),
        h(t, "class", "border-b border-granny-smith-apple/50 bg-slate-900/60"),
        h(c, "class", "layout-main svelte-1m49ym4"),
        h(f, "class", "text-sm"),
        h(p, "class", "max-w-xl m-auto text-center"),
        h(e, "class", "layout svelte-1m49ym4");
    },
    m(v, L) {
      $(v, e, L),
        d(e, t),
        d(t, n),
        d(n, r),
        d(r, i),
        w && w.m(i, null),
        d(r, o),
        d(r, a),
        d(n, l),
        O && O.m(n, null),
        d(e, u),
        d(e, c),
        P && P.m(c, null),
        d(e, b),
        d(e, g),
        d(g, p),
        d(p, f),
        (m = !0);
    },
    p(v, [L]) {
      w &&
        w.p &&
        (!m || L & 1) &&
        Re(w, y, v, v[0], m ? Le(y, v[0], L, Ei) : Oe(v[0]), hn),
        O &&
          O.p &&
          (!m || L & 1) &&
          Re(O, k, v, v[0], m ? Le(k, v[0], L, Mi) : Oe(v[0]), fn),
        P &&
          P.p &&
          (!m || L & 1) &&
          Re(P, T, v, v[0], m ? Le(T, v[0], L, null) : Oe(v[0]), null);
    },
    i(v) {
      m || (_(w, v), _(O, v), _(P, v), (m = !0));
    },
    o(v) {
      R(w, v), R(O, v), R(P, v), (m = !1);
    },
    d(v) {
      v && S(e), w && w.d(v), O && O.d(v), P && P.d(v);
    },
  };
}
function $i(s, e, t) {
  let { $$slots: n = {}, $$scope: r } = e;
  return (
    (s.$$set = (i) => {
      "$$scope" in i && t(0, (r = i.$$scope));
    }),
    [r, n]
  );
}
class qi extends V {
  constructor(e) {
    super(), G(this, e, $i, Si, x, {});
  }
}
function Ti(s) {
  let e, t, n, r, i, o, a, l, u, c;
  return (
    (n = new Vn({})),
    {
      c() {
        (e = C("a")),
          (t = C("div")),
          U(n.$$.fragment),
          (r = A()),
          (i = C("div")),
          (o = j(s[0])),
          (a = j(" @ ")),
          (l = j(s[1])),
          h(t, "class", "h-10"),
          h(i, "class", "font-mono font-medium"),
          h(e, "target", "_blank"),
          h(e, "href", (u = `https://www.npmjs.com/package/${s[0]}`)),
          h(e, "rel", "noopener noreferrer"),
          h(e, "class", "svelte-8yqr22");
      },
      m(b, g) {
        $(b, e, g),
          d(e, t),
          Q(n, t, null),
          d(e, r),
          d(e, i),
          d(i, o),
          d(i, a),
          d(i, l),
          (c = !0);
      },
      p(b, [g]) {
        (!c || g & 1) && ie(o, b[0]),
          (!c || g & 2) && ie(l, b[1]),
          (!c ||
            (g & 1 && u !== (u = `https://www.npmjs.com/package/${b[0]}`))) &&
            h(e, "href", u);
      },
      i(b) {
        c || (_(n.$$.fragment, b), (c = !0));
      },
      o(b) {
        R(n.$$.fragment, b), (c = !1);
      },
      d(b) {
        b && S(e), I(n);
      },
    }
  );
}
function Fi(s, e, t) {
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
class Ai extends V {
  constructor(e) {
    super(), G(this, e, Fi, Ti, x, { name: 0, version: 1 });
  }
}
function dn(s, e, t) {
  const n = s.slice();
  return (n[3] = e[t]), n;
}
function pn(s) {
  let e,
    t = s[3].label + "",
    n,
    r,
    i,
    o,
    a;
  return {
    c() {
      (e = C("button")),
        (n = j(t)),
        (r = A()),
        h(e, "data-value", (i = s[3].value)),
        h(e, "class", "svelte-u0zq3l"),
        K(e, "bg-castleton-green", s[0] === s[3].value);
    },
    m(l, u) {
      $(l, e, u),
        d(e, n),
        d(e, r),
        o ||
          ((a = ue(e, "click", function () {
            Ne(s[2].bind(this, s[3])) &&
              s[2].bind(this, s[3]).apply(this, arguments);
          })),
          (o = !0));
    },
    p(l, u) {
      (s = l),
        u & 2 && t !== (t = s[3].label + "") && ie(n, t),
        u & 2 && i !== (i = s[3].value) && h(e, "data-value", i),
        u & 3 && K(e, "bg-castleton-green", s[0] === s[3].value);
    },
    d(l) {
      l && S(e), (o = !1), a();
    },
  };
}
function Di(s) {
  let e,
    t = s[1],
    n = [];
  for (let r = 0; r < t.length; r += 1) n[r] = pn(dn(s, t, r));
  return {
    c() {
      e = C("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      h(e, "class", "container svelte-u0zq3l");
    },
    m(r, i) {
      $(r, e, i);
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(e, null);
    },
    p(r, [i]) {
      if (i & 7) {
        t = r[1];
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = dn(r, t, o);
          n[o] ? n[o].p(a, i) : ((n[o] = pn(a)), n[o].c(), n[o].m(e, null));
        }
        for (; o < n.length; o += 1) n[o].d(1);
        n.length = t.length;
      }
    },
    i: N,
    o: N,
    d(r) {
      r && S(e), Ie(n, r);
    },
  };
}
function Qi(s, e, t) {
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
class Ii extends V {
  constructor(e) {
    super(), G(this, e, Qi, Di, x, { selectedTab: 0, tabs: 1, onChange: 2 });
  }
}
function Ui(s) {
  let e, t, n;
  return {
    c() {
      (e = Y("svg")),
        (t = Y("path")),
        (n = Y("path")),
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
          n,
          "d",
          "M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        ),
        h(n, "fill", "currentColor"),
        h(e, "stroke", "currentColor"),
        h(e, "fill", "none"),
        h(e, "stroke-width", "0"),
        h(e, "viewBox", "0 0 24 24"),
        h(e, "height", "1em"),
        h(e, "width", "1em"),
        h(e, "xmlns", "http://www.w3.org/2000/svg"),
        K(e, "animate-spin", s[0]);
    },
    m(r, i) {
      $(r, e, i), d(e, t), d(e, n);
    },
    p(r, [i]) {
      i & 1 && K(e, "animate-spin", r[0]);
    },
    i: N,
    o: N,
    d(r) {
      r && S(e);
    },
  };
}
function ji(s, e, t) {
  let { animated: n = !1 } = e;
  return (
    (s.$$set = (r) => {
      "animated" in r && t(0, (n = r.animated));
    }),
    [n]
  );
}
class zi extends V {
  constructor(e) {
    super(), G(this, e, ji, Ui, x, { animated: 0 });
  }
}
function mn(s) {
  let e, t, n, r, i, o;
  return (
    (n = new zi({ props: { animated: !0 } })),
    {
      c() {
        (e = C("div")),
          (t = C("div")),
          U(n.$$.fragment),
          (r = A()),
          (i = C("span")),
          (i.textContent = "Loading dependencies"),
          h(t, "class", "h-4 w-4"),
          h(
            e,
            "class",
            "border-2 border-slate-900 bg-slate-900/60 rounded-3xl flex justify-center items-center overflow-hidden p-8 gap-2"
          );
      },
      m(a, l) {
        $(a, e, l), d(e, t), Q(n, t, null), d(e, r), d(e, i), (o = !0);
      },
      i(a) {
        o || (_(n.$$.fragment, a), (o = !0));
      },
      o(a) {
        R(n.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && S(e), I(n);
      },
    }
  );
}
function gn(s) {
  let e, t, n, r, i;
  e = new Ii({
    props: {
      onChange: s[4],
      selectedTab: s[0],
      tabs: [
        { value: "dependencies", label: "Dependencies" },
        { value: "devDependencies", label: "Dev Dependencies" },
      ],
    },
  });
  function o(l) {
    s[7](l);
  }
  let a = { entries: s[2] };
  return (
    s[0] !== void 0 && (a.selectedTab = s[0]),
    (n = new pi({ props: a })),
    je.push(() => _t(n, "selectedTab", o)),
    {
      c() {
        U(e.$$.fragment), (t = A()), U(n.$$.fragment);
      },
      m(l, u) {
        Q(e, l, u), $(l, t, u), Q(n, l, u), (i = !0);
      },
      p(l, u) {
        const c = {};
        u & 1 && (c.selectedTab = l[0]), e.$set(c);
        const b = {};
        u & 4 && (b.entries = l[2]),
          !r && u & 1 && ((r = !0), (b.selectedTab = l[0]), vt(() => (r = !1))),
          n.$set(b);
      },
      i(l) {
        i || (_(e.$$.fragment, l), _(n.$$.fragment, l), (i = !0));
      },
      o(l) {
        R(e.$$.fragment, l), R(n.$$.fragment, l), (i = !1);
      },
      d(l) {
        I(e, l), l && S(t), I(n, l);
      },
    }
  );
}
function Bi(s) {
  let e,
    t,
    n,
    r = s[1].isLoading && mn(),
    i = s[1].data && gn(s);
  return {
    c() {
      (e = C("div")),
        r && r.c(),
        (t = A()),
        i && i.c(),
        h(e, "class", "w-full grid gap-4");
    },
    m(o, a) {
      $(o, e, a), r && r.m(e, null), d(e, t), i && i.m(e, null), (n = !0);
    },
    p(o, a) {
      o[1].isLoading
        ? r
          ? a & 2 && _(r, 1)
          : ((r = mn()), r.c(), _(r, 1), r.m(e, t))
        : r &&
          (se(),
          R(r, 1, 1, () => {
            r = null;
          }),
          re()),
        o[1].data
          ? i
            ? (i.p(o, a), a & 2 && _(i, 1))
            : ((i = gn(o)), i.c(), _(i, 1), i.m(e, null))
          : i &&
            (se(),
            R(i, 1, 1, () => {
              i = null;
            }),
            re());
    },
    i(o) {
      n || (_(r), _(i), (n = !0));
    },
    o(o) {
      R(r), R(i), (n = !1);
    },
    d(o) {
      o && S(e), r && r.d(), i && i.d();
    },
  };
}
function Ni(s) {
  let e, t;
  return (
    (e = new ir({ props: { mood: s[3], slot: "logo" } })),
    {
      c() {
        U(e.$$.fragment);
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
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function bn(s) {
  let e, t;
  return (
    (e = new Ai({
      props: { name: s[1].data.name, version: s[1].data.version },
    })),
    {
      c() {
        U(e.$$.fragment);
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
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function Hi(s) {
  let e,
    t,
    n = s[1].data && bn(s);
  return {
    c() {
      (e = C("div")), n && n.c(), h(e, "slot", "version");
    },
    m(r, i) {
      $(r, e, i), n && n.m(e, null), (t = !0);
    },
    p(r, i) {
      r[1].data
        ? n
          ? (n.p(r, i), i & 2 && _(n, 1))
          : ((n = bn(r)), n.c(), _(n, 1), n.m(e, null))
        : n &&
          (se(),
          R(n, 1, 1, () => {
            n = null;
          }),
          re());
    },
    i(r) {
      t || (_(n), (t = !0));
    },
    o(r) {
      R(n), (t = !1);
    },
    d(r) {
      r && S(e), n && n.d();
    },
  };
}
function Ki(s) {
  let e, t;
  return (
    (e = new qi({
      props: {
        $$slots: { version: [Hi], logo: [Ni], default: [Bi] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        U(e.$$.fragment);
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
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function xi([s, e], t, n) {
  return { name: s, version: e, latest: t[s], meta: n[s] };
}
function Gi(s, e, t) {
  let n,
    r,
    i,
    o,
    a = "dependencies";
  function l({ value: p }) {
    t(0, (a = p));
  }
  function u(p, f) {
    return p.filter(([m, y]) => f[m] !== y);
  }
  function c(p) {
    if (p.isLoading) return "asleep";
    if (p.error) return "dead";
    if (p.data) {
      const { dependencies: f, devDependencies: m, resolutions: y } = p.data,
        w = Object.entries({ ...f, ...m });
      return u(w, p.data.resolutions).filter(([O, T]) => !An(T, y[O])).length
        ? "angry"
        : "happy";
    }
    return "awake";
  }
  const b = er();
  Ze(s, b, (p) => t(1, (o = p)));
  function g(p) {
    (a = p), t(0, a);
  }
  return (
    (s.$$.update = () => {
      var p;
      s.$$.dirty & 2 && t(3, (n = c(o))),
        s.$$.dirty & 3 &&
          t(
            6,
            (r =
              o.isLoading || o.error
                ? []
                : u(
                    Object.entries((p = o.data[a]) != null ? p : {}),
                    o.data.resolutions
                  ))
          ),
        s.$$.dirty & 66 &&
          t(2, (i = r.map((f) => xi(f, o.data.resolutions, o.data.meta))));
    }),
    [a, o, i, n, l, b, r, g]
  );
}
class Vi extends V {
  constructor(e) {
    super(), G(this, e, Gi, Ki, x, {});
  }
}
function Zi(s) {
  let e, t;
  return (
    (e = new Vi({})),
    {
      c() {
        U(e.$$.fragment);
      },
      m(n, r) {
        Q(e, n, r), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function Ji(s) {
  let e, t;
  return (
    (e = new Ds({
      props: { client: s[0], $$slots: { default: [Zi] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        U(e.$$.fragment);
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
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function Wi(s) {
  return [new Sn()];
}
class Yi extends V {
  constructor(e) {
    super(), G(this, e, Wi, Ji, x, {});
  }
}
const Jn = document.getElementById("app");
if (!Jn) throw new Error("Could not find target element");
new Yi({ target: Jn });
