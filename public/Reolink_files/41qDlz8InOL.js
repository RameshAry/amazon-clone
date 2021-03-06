/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function () {
  'use strict';

  (function (c, x) {
    typeof exports === 'object' && typeof module !== 'undefined'
      ? x(exports)
      : typeof define === 'function' && define.amd
      ? define(['exports'], x)
      : ((c = c || self), x((c.React = {})));
  })(this, (c) => {
    function x(a) {
      if (a === null || typeof a !== 'object') return null;
      a = (Y && a[Y]) || a['@@iterator'];
      return typeof a === 'function' ? a : null;
    }
    function y(a) {
      for (var b = `https://reactjs.org/docs/error-decoder.html?invariant=${a}`, e = 1; e < arguments.length; e++) {
        b += `&args[]=${encodeURIComponent(arguments[e])}`;
      }
      return `Minified React error #${a}; visit ${b} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function v(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = Z;
      this.updater = e || aa;
    }
    function ba() {}
    function K(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = Z;
      this.updater = e || aa;
    }
    function ca(a, b, e) {
      let l,
        f = {},
        c = null,
        da = null;
      if (b != null) {
        for (l in (void 0 !== b.ref && (da = b.ref), void 0 !== b.key && (c = `${b.key}`), b)) {
          ea.call(b, l) && !fa.hasOwnProperty(l) && (f[l] = b[l]);
        }
      }
      let k = arguments.length - 2;
      if (k === 1) f.children = e;
      else if (k > 1) {
        for (var h = Array(k), d = 0; d < k; d++) h[d] = arguments[d + 2];
        f.children = h;
      }
      if (a && a.defaultProps) for (l in ((k = a.defaultProps), k)) void 0 === f[l] && (f[l] = k[l]);
      return { $$typeof: w, type: a, key: c, ref: da, props: f, _owner: L.current };
    }
    function va(a, b) {
      return { $$typeof: w, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function M(a) {
      return typeof a === 'object' && a !== null && a.$$typeof === w;
    }
    function wa(a) {
      const b = { '=': '=0', ':': '=2' };
      return `$${a.replace(/[=:]/g, (a) => b[a])}`;
    }
    function N(a, b) {
      return typeof a === 'object' && a !== null && a.key != null ? wa(`${a.key}`) : b.toString(36);
    }
    function C(a, b, e, l, f) {
      let c = typeof a;
      if (c === 'undefined' || c === 'boolean') a = null;
      let d = !1;
      if (a === null) d = !0;
      else {
        switch (c) {
          case 'string':
          case 'number':
            d = !0;
            break;
          case 'object':
            switch (a.$$typeof) {
              case w:
              case ha:
                d = !0;
            }
        }
      }
      if (d) {
        return (
          (d = a),
          (f = f(d)),
          (a = l === '' ? `.${N(d, 0)}` : l),
          Array.isArray(f)
            ? ((e = ''), a != null && (e = `${a.replace(ia, '$&/')}/`), C(f, b, e, '', (a) => a))
            : f != null &&
              (M(f) && (f = va(f, e + (!f.key || (d && d.key === f.key) ? '' : `${`${f.key}`.replace(ia, '$&/')}/`) + a)), b.push(f)),
          1
        );
      }
      d = 0;
      l = l === '' ? '.' : `${l}:`;
      if (Array.isArray(a)) {
        for (var k = 0; k < a.length; k++) {
          c = a[k];
          var h = l + N(c, k);
          d += C(c, b, e, h, f);
        }
      } else if (((h = x(a)), typeof h === 'function')) {
        for (a = h.call(a), k = 0; !(c = a.next()).done; ) (c = c.value), (h = l + N(c, k++)), (d += C(c, b, e, h, f));
      } else if (c === 'object') {
        throw ((b = `${a}`), Error(y(31, b === '[object Object]' ? `object with keys {${Object.keys(a).join(', ')}}` : b)));
      }
      return d;
    }
    function D(a, b, e) {
      if (a == null) return a;
      let l = [],
        c = 0;
      C(a, l, '', '', (a) => b.call(e, a, c++));
      return l;
    }
    function xa(a) {
      if (a._status === -1) {
        let b = a._result;
        b = b();
        a._status = 0;
        a._result = b;
        b.then(
          (b) => {
            a._status === 0 && ((b = b.default), (a._status = 1), (a._result = b));
          },
          (b) => {
            a._status === 0 && ((a._status = 2), (a._result = b));
          },
        );
      }
      if (a._status === 1) return a._result;
      throw a._result;
    }
    function n() {
      const a = ja.current;
      if (a === null) throw Error(y(321));
      return a;
    }
    function O(a, b) {
      let e = a.length;
      a.push(b);
      for (;;) {
        let c = (e - 1) >>> 1,
          f = a[c];
        if (void 0 !== f && E(f, b) > 0) (a[c] = b), (a[e] = f), (e = c);
        else break;
      }
    }
    function p(a) {
      a = a[0];
      return void 0 === a ? null : a;
    }
    function F(a) {
      const b = a[0];
      if (void 0 !== b) {
        const e = a.pop();
        if (e !== b) {
          a[0] = e;
          for (let c = 0, f = a.length; c < f; ) {
            let d = 2 * (c + 1) - 1,
              g = a[d],
              k = d + 1,
              h = a[k];
            if (void 0 !== g && E(g, e) < 0) {
              void 0 !== h && E(h, g) < 0 ? ((a[c] = h), (a[k] = e), (c = k)) : ((a[c] = g), (a[d] = e), (c = d));
            } else if (void 0 !== h && E(h, e) < 0) (a[c] = h), (a[k] = e), (c = k);
            else break;
          }
        }
        return b;
      }
      return null;
    }
    function E(a, b) {
      const e = a.sortIndex - b.sortIndex;
      return e !== 0 ? e : a.id - b.id;
    }
    function P(a) {
      for (let b = p(r); b !== null; ) {
        if (b.callback === null) F(r);
        else if (b.startTime <= a) F(r), (b.sortIndex = b.expirationTime), O(q, b);
        else break;
        b = p(r);
      }
    }
    function Q(a) {
      z = !1;
      P(a);
      if (!u) {
        if (p(q) !== null) (u = !0), A(R);
        else {
          const b = p(r);
          b !== null && G(Q, b.startTime - a);
        }
      }
    }
    function R(a, b) {
      u = !1;
      z && ((z = !1), S());
      H = !0;
      const e = g;
      try {
        P(b);
        for (m = p(q); m !== null && (!(m.expirationTime > b) || (a && !T())); ) {
          const c = m.callback;
          if (typeof c === 'function') {
            m.callback = null;
            g = m.priorityLevel;
            const f = c(m.expirationTime <= b);
            b = t();
            typeof f === 'function' ? (m.callback = f) : m === p(q) && F(q);
            P(b);
          } else F(q);
          m = p(q);
        }
        if (m !== null) var d = !0;
        else {
          const n = p(r);
          n !== null && G(Q, n.startTime - b);
          d = !1;
        }
        return d;
      } finally {
        (m = null), (g = e), (H = !1);
      }
    }
    var w = 60103,
      ha = 60106;
    c.Fragment = 60107;
    c.StrictMode = 60108;
    c.Profiler = 60114;
    let ka = 60109,
      la = 60110,
      ma = 60112;
    c.Suspense = 60113;
    let na = 60115,
      oa = 60116;
    if (typeof Symbol === 'function' && Symbol.for) {
      var d = Symbol.for;
      w = d('react.element');
      ha = d('react.portal');
      c.Fragment = d('react.fragment');
      c.StrictMode = d('react.strict_mode');
      c.Profiler = d('react.profiler');
      ka = d('react.provider');
      la = d('react.context');
      ma = d('react.forward_ref');
      c.Suspense = d('react.suspense');
      na = d('react.memo');
      oa = d('react.lazy');
    }
    var Y = typeof Symbol === 'function' && Symbol.iterator,
      ya = Object.prototype.hasOwnProperty,
      U =
        Object.assign ||
        function (a, b) {
          if (a == null) throw new TypeError('Object.assign target cannot be null or undefined');
          for (var e = Object(a), c = 1; c < arguments.length; c++) {
            let d = arguments[c];
            if (d != null) {
              let g = void 0;
              d = Object(d);
              for (g in d) ya.call(d, g) && (e[g] = d[g]);
            }
          }
          return e;
        },
      aa = {
        isMounted(a) {
          return !1;
        },
        enqueueForceUpdate(a, b, c) {},
        enqueueReplaceState(a, b, c, d) {},
        enqueueSetState(a, b, c, d) {},
      },
      Z = {};
    v.prototype.isReactComponent = {};
    v.prototype.setState = function (a, b) {
      if (typeof a !== 'object' && typeof a !== 'function' && a != null) throw Error(y(85));
      this.updater.enqueueSetState(this, a, b, 'setState');
    };
    v.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, 'forceUpdate');
    };
    ba.prototype = v.prototype;
    d = K.prototype = new ba();
    d.constructor = K;
    U(d, v.prototype);
    d.isPureReactComponent = !0;
    var L = { current: null },
      ea = Object.prototype.hasOwnProperty,
      fa = { key: !0, ref: !0, __self: !0, __source: !0 },
      ia = /\/+/g,
      ja = { current: null },
      V;
    if (typeof performance === 'object' && typeof performance.now === 'function') {
      const za = performance;
      var t = function () {
        return za.now();
      };
    } else {
      let pa = Date,
        Aa = pa.now();
      t = function () {
        return pa.now() - Aa;
      };
    }
    if (typeof window === 'undefined' || typeof MessageChannel !== 'function') {
      var B = null,
        qa = null,
        ra = function () {
          if (B !== null) {
            try {
              const a = t();
              B(!0, a);
              B = null;
            } catch (b) {
              throw (setTimeout(ra, 0), b);
            }
          }
        };
      var A = function (a) {
        B !== null ? setTimeout(A, 0, a) : ((B = a), setTimeout(ra, 0));
      };
      var G = function (a, b) {
        qa = setTimeout(a, b);
      };
      var S = function () {
        clearTimeout(qa);
      };
      var T = function () {
        return !1;
      };
      d = V = function () {};
    } else {
      let Ba = window.setTimeout,
        Ca = window.clearTimeout;
      typeof console !== 'undefined' &&
        ((d = window.cancelAnimationFrame),
        typeof window.requestAnimationFrame !== 'function' &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          ),
        typeof d !== 'function' &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          ));
      let I = !1,
        J = null,
        W = -1,
        sa = 5,
        ta = 0;
      T = function () {
        return t() >= ta;
      };
      d = function () {};
      V = function (a) {
        a < 0 || a > 125
          ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported')
          : (sa = a > 0 ? Math.floor(1e3 / a) : 5);
      };
      let ua = new MessageChannel(),
        X = ua.port2;
      ua.port1.onmessage = function () {
        if (J !== null) {
          const a = t();
          ta = a + sa;
          try {
            J(!0, a) ? X.postMessage(null) : ((I = !1), (J = null));
          } catch (b) {
            throw (X.postMessage(null), b);
          }
        } else I = !1;
      };
      A = function (a) {
        J = a;
        I || ((I = !0), X.postMessage(null));
      };
      G = function (a, b) {
        W = Ba(() => {
          a(t());
        }, b);
      };
      S = function () {
        Ca(W);
        W = -1;
      };
    }
    var q = [],
      r = [],
      Da = 1,
      m = null,
      g = 3,
      H = !1,
      u = !1,
      z = !1,
      Ea = 0;
    d = {
      ReactCurrentDispatcher: ja,
      ReactCurrentOwner: L,
      IsSomeRendererActing: { current: !1 },
      ReactCurrentBatchConfig: { transition: 0 },
      assign: U,
      Scheduler: {
        __proto__: null,
        unstable_ImmediatePriority: 1,
        unstable_UserBlockingPriority: 2,
        unstable_NormalPriority: 3,
        unstable_IdlePriority: 5,
        unstable_LowPriority: 4,
        unstable_runWithPriority(a, b) {
          switch (a) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              a = 3;
          }
          const c = g;
          g = a;
          try {
            return b();
          } finally {
            g = c;
          }
        },
        unstable_next(a) {
          switch (g) {
            case 1:
            case 2:
            case 3:
              var b = 3;
              break;
            default:
              b = g;
          }
          const c = g;
          g = b;
          try {
            return a();
          } finally {
            g = c;
          }
        },
        unstable_scheduleCallback(a, b, c) {
          const d = t();
          typeof c === 'object' && c !== null ? ((c = c.delay), (c = typeof c === 'number' && c > 0 ? d + c : d)) : (c = d);
          switch (a) {
            case 1:
              var e = -1;
              break;
            case 2:
              e = 250;
              break;
            case 5:
              e = 1073741823;
              break;
            case 4:
              e = 1e4;
              break;
            default:
              e = 5e3;
          }
          e = c + e;
          a = { id: Da++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
          c > d
            ? ((a.sortIndex = c), O(r, a), p(q) === null && a === p(r) && (z ? S() : (z = !0), G(Q, c - d)))
            : ((a.sortIndex = e), O(q, a), u || H || ((u = !0), A(R)));
          return a;
        },
        unstable_cancelCallback(a) {
          a.callback = null;
        },
        unstable_wrapCallback(a) {
          const b = g;
          return function () {
            const c = g;
            g = b;
            try {
              return a.apply(this, arguments);
            } finally {
              g = c;
            }
          };
        },
        unstable_getCurrentPriorityLevel() {
          return g;
        },
        get unstable_shouldYield() {
          return T;
        },
        unstable_requestPaint: d,
        unstable_continueExecution() {
          u || H || ((u = !0), A(R));
        },
        unstable_pauseExecution() {},
        unstable_getFirstCallbackNode() {
          return p(q);
        },
        get unstable_now() {
          return t;
        },
        get unstable_forceFrameRate() {
          return V;
        },
        unstable_Profiling: null,
      },
      SchedulerTracing: {
        __proto__: null,
        __interactionsRef: null,
        __subscriberRef: null,
        unstable_clear(a) {
          return a();
        },
        unstable_getCurrent() {
          return null;
        },
        unstable_getThreadID() {
          return ++Ea;
        },
        unstable_trace(a, b, c) {
          return c();
        },
        unstable_wrap(a) {
          return a;
        },
        unstable_subscribe(a) {},
        unstable_unsubscribe(a) {},
      },
    };
    c.Children = {
      map: D,
      forEach(a, b, c) {
        D(
          a,
          function () {
            b.apply(this, arguments);
          },
          c,
        );
      },
      count(a) {
        let b = 0;
        D(a, () => {
          b++;
        });
        return b;
      },
      toArray(a) {
        return D(a, (a) => a) || [];
      },
      only(a) {
        if (!M(a)) throw Error(y(143));
        return a;
      },
    };
    c.Component = v;
    c.PureComponent = K;
    c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d;
    c.cloneElement = function (a, b, c) {
      if (a === null || void 0 === a) throw Error(y(267, a));
      let d = U({}, a.props),
        e = a.key,
        g = a.ref,
        n = a._owner;
      if (b != null) {
        void 0 !== b.ref && ((g = b.ref), (n = L.current));
        void 0 !== b.key && (e = `${b.key}`);
        if (a.type && a.type.defaultProps) var k = a.type.defaultProps;
        for (h in b) ea.call(b, h) && !fa.hasOwnProperty(h) && (d[h] = void 0 === b[h] && void 0 !== k ? k[h] : b[h]);
      }
      var h = arguments.length - 2;
      if (h === 1) d.children = c;
      else if (h > 1) {
        k = Array(h);
        for (let m = 0; m < h; m++) k[m] = arguments[m + 2];
        d.children = k;
      }
      return { $$typeof: w, type: a.type, key: e, ref: g, props: d, _owner: n };
    };
    c.createContext = function (a, b) {
      void 0 === b && (b = null);
      a = { $$typeof: la, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
      a.Provider = { $$typeof: ka, _context: a };
      return (a.Consumer = a);
    };
    c.createElement = ca;
    c.createFactory = function (a) {
      const b = ca.bind(null, a);
      b.type = a;
      return b;
    };
    c.createRef = function () {
      return { current: null };
    };
    c.forwardRef = function (a) {
      return { $$typeof: ma, render: a };
    };
    c.isValidElement = M;
    c.lazy = function (a) {
      return { $$typeof: oa, _payload: { _status: -1, _result: a }, _init: xa };
    };
    c.memo = function (a, b) {
      return { $$typeof: na, type: a, compare: void 0 === b ? null : b };
    };
    c.useCallback = function (a, b) {
      return n().useCallback(a, b);
    };
    c.useContext = function (a, b) {
      return n().useContext(a, b);
    };
    c.useDebugValue = function (a, b) {};
    c.useEffect = function (a, b) {
      return n().useEffect(a, b);
    };
    c.useImperativeHandle = function (a, b, c) {
      return n().useImperativeHandle(a, b, c);
    };
    c.useLayoutEffect = function (a, b) {
      return n().useLayoutEffect(a, b);
    };
    c.useMemo = function (a, b) {
      return n().useMemo(a, b);
    };
    c.useReducer = function (a, b, c) {
      return n().useReducer(a, b, c);
    };
    c.useRef = function (a) {
      return n().useRef(a);
    };
    c.useState = function (a) {
      return n().useState(a);
    };
    c.version = '17.0.1';
  });
})();
