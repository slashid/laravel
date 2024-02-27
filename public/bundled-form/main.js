var Ls = Object.defineProperty;
var Rs = (e, t, n) => t in e ? Ls(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var rr = (e, t, n) => (Rs(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as Z from "react";
import D, { createContext as He, useState as U, useRef as X, useCallback as G, useEffect as V, useMemo as ce, useLayoutEffect as jt, forwardRef as J, createElement as P, useContext as Mt, Children as Re, isValidElement as tn, cloneElement as po, Fragment as pn, useReducer as ta } from "react";
import { User as Ot, SlashID as Is, Errors as ar } from "@slashid/slashid";
import * as As from "react-dom";
import Ms, { flushSync as na, createPortal as vo } from "react-dom";
var Qn = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Ns() {
  if (ir)
    return Pt;
  ir = 1;
  var e = D, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, d) {
    var f, u = {}, C = null, v = null;
    d !== void 0 && (C = "" + d), l.key !== void 0 && (C = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (f in l)
      o.call(l, f) && !a.hasOwnProperty(f) && (u[f] = l[f]);
    if (c && c.defaultProps)
      for (f in l = c.defaultProps, l)
        u[f] === void 0 && (u[f] = l[f]);
    return { $$typeof: t, type: c, key: C, ref: v, props: u, _owner: r.current };
  }
  return Pt.Fragment = n, Pt.jsx = s, Pt.jsxs = s, Pt;
}
var Tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function zs() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = D, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b = Symbol.iterator, p = "@@iterator";
    function y(m) {
      if (m === null || typeof m != "object")
        return null;
      var T = b && m[b] || m[p];
      return typeof T == "function" ? T : null;
    }
    var h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(m) {
      {
        for (var T = arguments.length, R = new Array(T > 1 ? T - 1 : 0), Q = 1; Q < T; Q++)
          R[Q - 1] = arguments[Q];
        w("error", m, R);
      }
    }
    function w(m, T, R) {
      {
        var Q = h.ReactDebugCurrentFrame, ue = Q.getStackAddendum();
        ue !== "" && (T += "%s", R = R.concat([ue]));
        var me = R.map(function(se) {
          return String(se);
        });
        me.unshift("Warning: " + T), Function.prototype.apply.call(console[m], console, me);
      }
    }
    var _ = !1, k = !1, x = !1, $ = !1, S = !1, I;
    I = Symbol.for("react.module.reference");
    function j(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === o || m === a || S || m === r || m === d || m === f || $ || m === v || _ || k || x || typeof m == "object" && m !== null && (m.$$typeof === C || m.$$typeof === u || m.$$typeof === s || m.$$typeof === c || m.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === I || m.getModuleId !== void 0));
    }
    function L(m, T, R) {
      var Q = m.displayName;
      if (Q)
        return Q;
      var ue = T.displayName || T.name || "";
      return ue !== "" ? R + "(" + ue + ")" : R;
    }
    function F(m) {
      return m.displayName || "Context";
    }
    function B(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case r:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            var T = m;
            return F(T) + ".Consumer";
          case s:
            var R = m;
            return F(R._context) + ".Provider";
          case l:
            return L(m, m.render, "ForwardRef");
          case u:
            var Q = m.displayName || null;
            return Q !== null ? Q : B(m.type) || "Memo";
          case C: {
            var ue = m, me = ue._payload, se = ue._init;
            try {
              return B(se(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, A = 0, K, re, fe, q, E, O, W;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function te() {
      {
        if (A === 0) {
          K = console.log, re = console.info, fe = console.warn, q = console.error, E = console.group, O = console.groupCollapsed, W = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        A++;
      }
    }
    function pe() {
      {
        if (A--, A === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, m, {
              value: K
            }),
            info: H({}, m, {
              value: re
            }),
            warn: H({}, m, {
              value: fe
            }),
            error: H({}, m, {
              value: q
            }),
            group: H({}, m, {
              value: E
            }),
            groupCollapsed: H({}, m, {
              value: O
            }),
            groupEnd: H({}, m, {
              value: W
            })
          });
        }
        A < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = h.ReactCurrentDispatcher, z;
    function Y(m, T, R) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (ue) {
            var Q = ue.stack.trim().match(/\n( *(at )?)/);
            z = Q && Q[1] || "";
          }
        return `
` + z + m;
      }
    }
    var be = !1, ae;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ne();
    }
    function de(m, T) {
      if (!m || be)
        return "";
      {
        var R = ae.get(m);
        if (R !== void 0)
          return R;
      }
      var Q;
      be = !0;
      var ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = ve.current, ve.current = null, te();
      try {
        if (T) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (Ve) {
              Q = Ve;
            }
            Reflect.construct(m, [], se);
          } else {
            try {
              se.call();
            } catch (Ve) {
              Q = Ve;
            }
            m.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ve) {
            Q = Ve;
          }
          m();
        }
      } catch (Ve) {
        if (Ve && Q && typeof Ve.stack == "string") {
          for (var ie = Ve.stack.split(`
`), ke = Q.stack.split(`
`), ye = ie.length - 1, we = ke.length - 1; ye >= 1 && we >= 0 && ie[ye] !== ke[we]; )
            we--;
          for (; ye >= 1 && we >= 0; ye--, we--)
            if (ie[ye] !== ke[we]) {
              if (ye !== 1 || we !== 1)
                do
                  if (ye--, we--, we < 0 || ie[ye] !== ke[we]) {
                    var Oe = `
` + ie[ye].replace(" at new ", " at ");
                    return m.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", m.displayName)), typeof m == "function" && ae.set(m, Oe), Oe;
                  }
                while (ye >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        be = !1, ve.current = me, pe(), Error.prepareStackTrace = ue;
      }
      var ft = m ? m.displayName || m.name : "", or = ft ? Y(ft) : "";
      return typeof m == "function" && ae.set(m, or), or;
    }
    function $e(m, T, R) {
      return de(m, !1);
    }
    function _e(m) {
      var T = m.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ae(m, T, R) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return de(m, _e(m));
      if (typeof m == "string")
        return Y(m);
      switch (m) {
        case d:
          return Y("Suspense");
        case f:
          return Y("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case l:
            return $e(m.render);
          case u:
            return Ae(m.type, T, R);
          case C: {
            var Q = m, ue = Q._payload, me = Q._init;
            try {
              return Ae(me(ue), T, R);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, Je = {}, Bt = h.ReactDebugCurrentFrame;
    function lt(m) {
      if (m) {
        var T = m._owner, R = Ae(m.type, m._source, T ? T.type : null);
        Bt.setExtraStackFrame(R);
      } else
        Bt.setExtraStackFrame(null);
    }
    function dt(m, T, R, Q, ue) {
      {
        var me = Function.call.bind(Me);
        for (var se in m)
          if (me(m, se)) {
            var ie = void 0;
            try {
              if (typeof m[se] != "function") {
                var ke = Error((Q || "React class") + ": " + R + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              ie = m[se](T, se, Q, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              ie = ye;
            }
            ie && !(ie instanceof Error) && (lt(ue), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", R, se, typeof ie), lt(null)), ie instanceof Error && !(ie.message in Je) && (Je[ie.message] = !0, lt(ue), g("Failed %s type: %s", R, ie.message), lt(null));
          }
      }
    }
    var vs = Array.isArray;
    function Tn(m) {
      return vs(m);
    }
    function ms(m) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, R = T && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return R;
      }
    }
    function gs(m) {
      try {
        return Go(m), !1;
      } catch {
        return !0;
      }
    }
    function Go(m) {
      return "" + m;
    }
    function Ko(m) {
      if (gs(m))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ms(m)), Go(m);
    }
    var qt = h.ReactCurrentOwner, hs = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zo, Yo, On;
    On = {};
    function bs(m) {
      if (Me.call(m, "ref")) {
        var T = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Cs(m) {
      if (Me.call(m, "key")) {
        var T = Object.getOwnPropertyDescriptor(m, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function ys(m, T) {
      if (typeof m.ref == "string" && qt.current && T && qt.current.stateNode !== T) {
        var R = B(qt.current.type);
        On[R] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(qt.current.type), m.ref), On[R] = !0);
      }
    }
    function ws(m, T) {
      {
        var R = function() {
          Zo || (Zo = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        R.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function xs(m, T) {
      {
        var R = function() {
          Yo || (Yo = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        R.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var _s = function(m, T, R, Q, ue, me, se) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: T,
        ref: R,
        props: se,
        // Record the component responsible for creating this element.
        _owner: me
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function $s(m, T, R, Q, ue) {
      {
        var me, se = {}, ie = null, ke = null;
        R !== void 0 && (Ko(R), ie = "" + R), Cs(T) && (Ko(T.key), ie = "" + T.key), bs(T) && (ke = T.ref, ys(T, ue));
        for (me in T)
          Me.call(T, me) && !hs.hasOwnProperty(me) && (se[me] = T[me]);
        if (m && m.defaultProps) {
          var ye = m.defaultProps;
          for (me in ye)
            se[me] === void 0 && (se[me] = ye[me]);
        }
        if (ie || ke) {
          var we = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ie && ws(se, we), ke && xs(se, we);
        }
        return _s(m, ie, ke, ue, Q, qt.current, se);
      }
    }
    var jn = h.ReactCurrentOwner, Xo = h.ReactDebugCurrentFrame;
    function ut(m) {
      if (m) {
        var T = m._owner, R = Ae(m.type, m._source, T ? T.type : null);
        Xo.setExtraStackFrame(R);
      } else
        Xo.setExtraStackFrame(null);
    }
    var Ln;
    Ln = !1;
    function Rn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Jo() {
      {
        if (jn.current) {
          var m = B(jn.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function ks(m) {
      {
        if (m !== void 0) {
          var T = m.fileName.replace(/^.*[\\\/]/, ""), R = m.lineNumber;
          return `

Check your code at ` + T + ":" + R + ".";
        }
        return "";
      }
    }
    var Qo = {};
    function Ss(m) {
      {
        var T = Jo();
        if (!T) {
          var R = typeof m == "string" ? m : m.displayName || m.name;
          R && (T = `

Check the top-level render call using <` + R + ">.");
        }
        return T;
      }
    }
    function er(m, T) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var R = Ss(T);
        if (Qo[R])
          return;
        Qo[R] = !0;
        var Q = "";
        m && m._owner && m._owner !== jn.current && (Q = " It was passed a child from " + B(m._owner.type) + "."), ut(m), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, Q), ut(null);
      }
    }
    function tr(m, T) {
      {
        if (typeof m != "object")
          return;
        if (Tn(m))
          for (var R = 0; R < m.length; R++) {
            var Q = m[R];
            Rn(Q) && er(Q, T);
          }
        else if (Rn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ue = y(m);
          if (typeof ue == "function" && ue !== m.entries)
            for (var me = ue.call(m), se; !(se = me.next()).done; )
              Rn(se.value) && er(se.value, T);
        }
      }
    }
    function Es(m) {
      {
        var T = m.type;
        if (T == null || typeof T == "string")
          return;
        var R;
        if (typeof T == "function")
          R = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === u))
          R = T.propTypes;
        else
          return;
        if (R) {
          var Q = B(T);
          dt(R, m.props, "prop", Q, m);
        } else if (T.PropTypes !== void 0 && !Ln) {
          Ln = !0;
          var ue = B(T);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qs(m) {
      {
        for (var T = Object.keys(m.props), R = 0; R < T.length; R++) {
          var Q = T[R];
          if (Q !== "children" && Q !== "key") {
            ut(m), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), ut(null);
            break;
          }
        }
        m.ref !== null && (ut(m), g("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
      }
    }
    function nr(m, T, R, Q, ue, me) {
      {
        var se = j(m);
        if (!se) {
          var ie = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = ks(ue);
          ke ? ie += ke : ie += Jo();
          var ye;
          m === null ? ye = "null" : Tn(m) ? ye = "array" : m !== void 0 && m.$$typeof === t ? (ye = "<" + (B(m.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof m, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, ie);
        }
        var we = $s(m, T, R, ue, me);
        if (we == null)
          return we;
        if (se) {
          var Oe = T.children;
          if (Oe !== void 0)
            if (Q)
              if (Tn(Oe)) {
                for (var ft = 0; ft < Oe.length; ft++)
                  tr(Oe[ft], m);
                Object.freeze && Object.freeze(Oe);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tr(Oe, m);
        }
        return m === o ? qs(we) : Es(we), we;
      }
    }
    function Ps(m, T, R) {
      return nr(m, T, R, !0);
    }
    function Ts(m, T, R) {
      return nr(m, T, R, !1);
    }
    var Os = Ts, js = Ps;
    Tt.Fragment = o, Tt.jsx = Os, Tt.jsxs = js;
  }()), Tt;
}
process.env.NODE_ENV === "production" ? Qn.exports = Ns() : Qn.exports = zs();
var i = Qn.exports;
function oa(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = oa(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function ee() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = oa(e)) && (o && (o += " "), o += t);
  return o;
}
const Ds = {
  registerField: () => () => null,
  registerSubmit: () => () => null,
  resetForm: () => null,
  setError: () => null,
  hasError: () => !1,
  clearError: () => null,
  values: {},
  errors: {},
  status: "valid"
}, ra = He(Ds), nn = ({ children: e }) => {
  const [t, n] = U("valid"), [o, r] = U({}), [a, s] = U({}), c = X({}), l = G(
    (p, { validator: y, defaultValue: h } = {}) => (Object.keys(c.current).includes(p) || (c.current[p] = {
      defaultValue: h,
      validator: y
    }), (g) => {
      r((w) => ({ ...w, [p]: g.target.value })), y && t === "invalid" && (n("valid"), s({}));
    }),
    [t]
  );
  V(() => {
    Object.entries(c.current).forEach(
      ([p, { defaultValue: y }]) => {
        y && o[p] === void 0 && r((h) => ({ ...h, [p]: y }));
      }
    );
  }, [o]);
  const d = G(
    (p) => (y) => {
      y.preventDefault();
      let h = !1;
      if (Object.entries(c.current).forEach(
        ([g, { validator: w }]) => {
          const _ = o[g];
          if (w) {
            const k = w(_);
            k && (h = !0, s((x) => ({ ...x, [g]: k })));
          }
        }
      ), h) {
        n("invalid");
        return;
      }
      p(y);
    },
    [o]
  ), f = G(() => {
    r({}), s({}), n("valid"), c.current = {};
  }, [r, s, n]), u = G((p, y) => {
    s((h) => ({ ...h, [p]: y }));
  }, []), C = G(
    (p) => !!a[p],
    [a]
  ), v = G((p) => {
    s((y) => {
      const { [p]: h, ...g } = { ...y };
      return g;
    });
  }, []), b = ce(
    () => ({
      registerField: l,
      registerSubmit: d,
      resetForm: f,
      setError: u,
      hasError: C,
      clearError: v,
      values: o,
      status: t,
      errors: a
    }),
    [
      l,
      d,
      f,
      u,
      C,
      v,
      o,
      t,
      a
    ]
  );
  return /* @__PURE__ */ i.jsx(ra.Provider, { value: b, children: e });
};
var cr = "sid-theme-root", Fs = "_1fuhtfd2", Vs = "_1fuhtfd0", Bs = "_1fuhtfd1", wt = { color: { background: "var(--sid-color-background)", mute: "var(--sid-color-mute)", panel: "var(--sid-color-panel)", foreground: "var(--sid-color-foreground)", contrast: "var(--sid-color-contrast)", secondary: "var(--sid-color-secondary)", tertiary: "var(--sid-color-tertiary)", placeholder: "var(--sid-color-placeholder)", smooth: "var(--sid-color-smooth)", subtle: "var(--sid-color-subtle)", soft: "var(--sid-color-soft)", offset: "var(--sid-color-offset)", primary: "var(--sid-color-primary)", primaryHover: "var(--sid-color-primary-hover)", transparent: "var(--sid-color-transparent)", error: "var(--sid-color-error)", auxiliary: "var(--sid-color-auxiliary)", success: "var(--sid-color-success)", foregroundSuccess: "var(--sid-color-foreground-success)", backgroundSuccess: "var(--sid-color-background-success)", failure: "var(--sid-color-failure)", foregroundFailure: "var(--sid-color-foreground-failure)", backgroundFailure: "var(--sid-color-background-failure)" }, font: { fontFamily: "var(--sid-font-family)" }, border: { radius: "var(--sid-button-border-radius)", width: { panel: "var(--sid-border-width-panel)" } } }, Hs = "_1fuhtfd3";
function on() {
  return typeof window < "u" && globalThis === window;
}
function aa({ theme: e, className: t }) {
  return ee(
    cr,
    `${cr}__${e}`,
    Hs,
    {
      [Vs]: e === "dark",
      [Fs]: e === "auto",
      [Bs]: e === "light"
    },
    t
  );
}
function Us({ theme: e, className: t }) {
  const n = aa({ theme: e, className: t });
  document.body.classList.add(...n.split(" "));
}
const ia = ({ children: e }) => /* @__PURE__ */ i.jsx("div", { className: aa({ theme: "light" }), children: e }), Ws = ({ children: e, theme: t = "light", className: n }) => {
  const [o, r] = D.useState(!1);
  return jt(() => {
    o || r(!0);
  }, [n, o, t]), jt(() => {
    o && Us({ theme: t, className: n });
  }, [n, o, t]), o ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e }) : /* @__PURE__ */ i.jsx(ia, { children: e });
};
function Gs({ children: e, theme: t = "light", className: n }) {
  return on() ? /* @__PURE__ */ i.jsx(Ws, { theme: t, className: n, children: e }) : /* @__PURE__ */ i.jsx(ia, { children: e });
}
var Ks = { default: "_1v32gdc2 _1v32gdc1", short: "_1v32gdc3 _1v32gdc1" };
const sa = ({ className: e, variant: t = "default" }) => /* @__PURE__ */ i.jsx("div", { className: ee(Ks[t], e) });
var Zs = { primary: "_154fc2o2 _154fc2o0", secondary: "_154fc2o3 _154fc2o0", secondaryMd: "_154fc2o4 _154fc2o0 _154fc2o1", neutral: "_154fc2o5 _154fc2o0", neutralMd: "_154fc2o6 _154fc2o0 _154fc2o1", ghost: "_154fc2o7 _154fc2o0", ghostMd: "_154fc2o8 _154fc2o0 _154fc2o1" }, Ys = "_154fc2o9", Xs = "_154fc2oa", Js = { primary: "_154fc2ob", secondary: "_154fc2oc", secondaryMd: "_154fc2od", neutral: "_154fc2oe", neutralMd: "_154fc2of", ghost: "_154fc2og", ghostMd: "_154fc2oh" };
const Ie = J(
  ({
    children: e,
    onClick: t,
    className: n,
    type: o = "button",
    variant: r = "primary",
    testId: a,
    icon: s,
    disabled: c,
    loading: l = !1
  }, d) => /* @__PURE__ */ i.jsx(
    "button",
    {
      ref: d,
      "data-testid": a,
      type: o,
      disabled: c,
      className: ee(
        "sid-button",
        `sid-button--${r}`,
        Zs[r],
        { [Ys]: c },
        n
      ),
      onClick: t,
      children: l ? /* @__PURE__ */ i.jsx(sa, { variant: "short", className: Js[r] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        s ? /* @__PURE__ */ i.jsx("i", { className: Xs, children: s }) : null,
        e
      ] })
    }
  )
);
Ie.displayName = "Button";
const ca = ({ className: e }) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    className: ee(e),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.25 3.75L5.75 8L10.25 12.25",
        stroke: wt.color.tertiary,
        strokeOpacity: "0.5",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var Qs = { base: "axg5it0", back: "axg5it2 axg5it0" };
const vn = ({
  children: e,
  onClick: t,
  className: n,
  type: o = "button",
  variant: r = "base",
  testId: a
}) => /* @__PURE__ */ i.jsxs(
  "button",
  {
    "data-testid": a,
    type: o,
    className: ee("sid-link-button", Qs[r], n),
    onClick: t,
    children: [
      r === "back" ? /* @__PURE__ */ i.jsx(ca, {}) : null,
      e
    ]
  }
);
var ec = "_1c8zcycb", tc = "_1c8zcyc2", la = "_1c8zcyc4", mo = "_1c8zcyc3", nc = "_1c8zcyc0", oc = { text: "_1c8zcyc6 _1c8zcyc5", email: "_1c8zcyc7 _1c8zcyc5", password: "_1c8zcyc8 _1c8zcyc5", tel: "_1c8zcyc9 _1c8zcyc5" }, rc = "_1c8zcyca", ac = "_1c8zcycc", ic = "_1c8zcyc1";
const go = ({
  id: e,
  name: t,
  label: n,
  placeholder: o = "",
  autoComplete: r = "",
  value: a,
  onChange: s,
  type: c = "text"
}) => {
  const l = G(
    (d) => {
      s(d);
    },
    [s]
  );
  return /* @__PURE__ */ i.jsxs("div", { className: oc[c], children: [
    /* @__PURE__ */ i.jsx("label", { htmlFor: e, className: rc, children: n }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: c,
        id: e,
        name: t,
        className: nc,
        placeholder: o,
        value: a,
        onChange: l,
        autoComplete: r
      }
    )
  ] });
}, da = ({
  name: e,
  id: t,
  label: n,
  placeholder: o = "",
  className: r = "",
  type: a = "text",
  value: s,
  error: c,
  onChange: l
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: ee(
      "sid-input",
      `sid-input--${a}`,
      mo,
      c && la,
      r
    ),
    children: /* @__PURE__ */ i.jsx(
      go,
      {
        id: t,
        name: e,
        label: n,
        placeholder: o,
        className: r,
        type: a,
        value: s,
        onChange: l
      }
    )
  }
), qe = `
@media (prefers-color-scheme: dark) {
  .sid-theme-root__auto path { fill: white; }
}

.sid-theme-root__dark path { fill: white; }
`, ua = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsxs("g", { id: "microsoft-icon 1", clipPath: "url(#clip0_2115_8900)", children: [
        /* @__PURE__ */ i.jsx("path", { id: "Vector", d: "M0 0H7.6031V7.6031H0V0Z", fill: "#F25022" }),
        /* @__PURE__ */ i.jsx("path", { id: "Vector_2", d: "M8.39691 0H16V7.6031H8.39691V0Z", fill: "#7FBA00" }),
        /* @__PURE__ */ i.jsx("path", { id: "Vector_3", d: "M0 8.3969H7.6031V16H0V8.3969Z", fill: "#00A4EF" }),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            id: "Vector_4",
            d: "M8.39691 8.3969H16V16H8.39691V8.3969Z",
            fill: "#FFB900"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_2115_8900", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), fa = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx("g", { clipPath: "url(#clip0_505_1607)", children: /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#clip1_505_1607)", children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M0.575299 0.87666C0.501037 0.8757 0.427465 0.891009 0.359751 0.921512C0.292036 0.952016 0.231821 0.996974 0.183333 1.05323C0.134846 1.10949 0.099262 1.17567 0.0790809 1.24715C0.0588998 1.31862 0.0546107 1.39365 0.066515 1.46695L2.2264 14.5788C2.2533 14.7392 2.33588 14.8851 2.45964 14.9907C2.58339 15.0963 2.74041 15.1549 2.9031 15.1563H13.2649C13.3868 15.1578 13.5053 15.1155 13.5986 15.0371C13.692 14.9586 13.7541 14.8493 13.7736 14.7289L15.9335 1.4695C15.9454 1.39619 15.9411 1.32118 15.9209 1.24971C15.9007 1.17825 15.8651 1.11208 15.8166 1.05583C15.7681 0.999591 15.7079 0.954646 15.6402 0.924154C15.5725 0.893661 15.4989 0.878361 15.4247 0.879327L0.575299 0.87666ZM9.67013 10.3531H6.36292L5.46743 5.67469H10.4715L9.67013 10.3531Z",
            fill: "#2684FF"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M15.2335 5.66811H10.4623L9.66148 10.3428H6.35693L2.45502 14.9743C2.57869 15.0812 2.73636 15.1407 2.89985 15.142H13.2559C13.3778 15.1436 13.4961 15.1013 13.5894 15.023C13.6828 14.9446 13.7448 14.8353 13.7643 14.715L15.2335 5.66811Z",
            fill: "url(#paint0_linear_505_1607)"
          }
        )
      ] }) }),
      /* @__PURE__ */ i.jsxs("defs", { children: [
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "paint0_linear_505_1607",
            x1: "16.3366",
            y1: "6.97722",
            x2: "10.8251",
            y2: "14.803",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { offset: "0.18", stopColor: "#0052CC" }),
              /* @__PURE__ */ i.jsx("stop", { offset: "1", stopColor: "#2684FF" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_505_1607", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }),
        /* @__PURE__ */ i.jsx("clipPath", { id: "clip1_505_1607", children: /* @__PURE__ */ i.jsx(
          "rect",
          {
            width: "16",
            height: "14.4384",
            fill: "white",
            transform: "translate(0 0.780792)"
          }
        ) })
      ] })
    ]
  }
), pa = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx("g", { clipPath: "url(#clip0_244_1220)", children: /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M8 0.0410004C3.582 0.0410004 0 3.623 0 8.041C0 12.0517 2.95467 15.3637 6.804 15.9423V10.161H4.82467V8.05833H6.804V6.659C6.804 4.34233 7.93267 3.32567 9.858 3.32567C10.78 3.32567 11.268 3.39433 11.4987 3.425V5.26033H10.1853C9.368 5.26033 9.08267 6.03567 9.08267 6.909V8.05833H11.478L11.1533 10.161H9.08267V15.959C12.9873 15.4297 16 12.091 16 8.041C16 3.623 12.418 0.0410004 8 0.0410004Z",
          fill: "#1877F2"
        }
      ) }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_244_1220", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), va = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx("g", { clipPath: "url(#clip0_505_1582)", children: /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.97616 0.163269C3.56555 0.163269 0 3.75511 0 8.1987C0 11.7507 2.28457 14.7574 5.45388 15.8216C5.85012 15.9016 5.99527 15.6487 5.99527 15.4359C5.99527 15.2496 5.9822 14.6111 5.9822 13.9458C3.76343 14.4248 3.30139 12.9879 3.30139 12.9879C2.94482 12.0567 2.41649 11.8173 2.41649 11.8173C1.69029 11.3251 2.46939 11.3251 2.46939 11.3251C3.27494 11.3783 3.69763 12.1499 3.69763 12.1499C4.41061 13.3737 5.55951 13.0279 6.02171 12.815C6.08767 12.2962 6.2991 11.937 6.52359 11.7375C4.75396 11.5512 2.89208 10.8594 2.89208 7.7729C2.89208 6.89486 3.20882 6.17649 3.71069 5.6178C3.63151 5.41829 3.35412 4.59331 3.79004 3.48915C3.79004 3.48915 4.46351 3.27625 5.98204 4.31396C6.63218 4.13807 7.30265 4.04859 7.97616 4.04784C8.64963 4.04784 9.33616 4.14106 9.97012 4.31396C11.4888 3.27625 12.1623 3.48915 12.1623 3.48915C12.5982 4.59331 12.3207 5.41829 12.2415 5.6178C12.7566 6.17649 13.0602 6.89486 13.0602 7.7729C13.0602 10.8594 11.1984 11.5378 9.41551 11.7375C9.70612 11.9902 9.9569 12.4691 9.9569 13.2274C9.9569 14.305 9.94384 15.1698 9.94384 15.4358C9.94384 15.6487 10.0891 15.9016 10.4852 15.8217C13.6545 14.7572 15.9391 11.7507 15.9391 8.1987C15.9522 3.75511 12.3736 0.163269 7.97616 0.163269Z",
          fill: "#24292F"
        }
      ) }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_505_1582", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), ma = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#clip0_505_1689)", children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M15.7337 6.39379L15.7112 6.33631L13.5335 0.652895C13.4892 0.541503 13.4107 0.447009 13.3094 0.382971C13.2079 0.32002 13.0897 0.289702 12.9705 0.296108C12.8513 0.302514 12.7369 0.345337 12.6429 0.418794C12.5498 0.494361 12.4824 0.596756 12.4496 0.712045L10.9792 5.21079H5.02499L3.55457 0.712045C3.52268 0.596128 3.45505 0.49322 3.36129 0.417961C3.26722 0.344503 3.15287 0.301681 3.03368 0.295274C2.9145 0.288868 2.79622 0.319187 2.69481 0.382138C2.5937 0.446435 2.51531 0.540846 2.47071 0.652062L0.288816 6.33298L0.267156 6.39046C-0.046338 7.20957 -0.0850337 8.1084 0.156903 8.95142C0.39884 9.79444 0.908292 10.536 1.60845 11.0642L1.61595 11.07L1.63594 11.0842L4.95335 13.5685L6.59456 14.8106L7.59428 15.5654C7.71122 15.6542 7.85401 15.7023 8.00083 15.7023C8.14766 15.7023 8.29045 15.6542 8.40739 15.5654L9.40711 14.8106L11.0483 13.5685L14.3857 11.0692L14.3941 11.0625C15.0926 10.5342 15.6009 9.79344 15.8425 8.95156C16.084 8.10967 16.0459 7.21213 15.7337 6.39379Z",
            fill: "#E24329"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M15.7336 6.39379L15.7111 6.3363C14.65 6.55411 13.6501 7.00358 12.7828 7.6526L7.99994 11.2691C9.62865 12.5013 11.0466 13.5718 11.0466 13.5718L14.384 11.0725L14.3923 11.0658C15.0919 10.5375 15.601 9.79631 15.8429 8.9537C16.0848 8.1111 16.0464 7.21272 15.7336 6.39379Z",
            fill: "#FC6D26"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M4.95331 13.5718L6.59452 14.8139L7.59424 15.5687C7.71118 15.6575 7.85397 15.7056 8.00079 15.7056C8.14762 15.7056 8.29041 15.6575 8.40735 15.5687L9.40707 14.8139L11.0483 13.5718C11.0483 13.5718 9.62867 12.4979 7.99996 11.2691C6.37125 12.4979 4.95331 13.5718 4.95331 13.5718Z",
            fill: "#FCA326"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M3.21633 7.65262C2.34974 7.00226 1.35002 6.55163 0.288816 6.33299L0.267156 6.39048C-0.046338 7.20959 -0.0850337 8.10841 0.156903 8.95143C0.398839 9.79446 0.908292 10.536 1.60845 11.0642L1.61595 11.07L1.63594 11.0842L4.95335 13.5685C4.95335 13.5685 6.36962 12.4979 8 11.2658L3.21633 7.65262Z",
            fill: "#FC6D26"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_505_1689", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), ga = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.6801 8.1818C15.6801 7.61453 15.6292 7.06908 15.5346 6.54544H8.00006V9.63999H12.3055C12.1201 10.64 11.5564 11.4873 10.7092 12.0545V14.0618H13.2946C14.8073 12.6691 15.6801 10.6182 15.6801 8.1818Z",
          fill: "#4285F4"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.00001 16C10.16 16 11.9709 15.2836 13.2946 14.0618L10.7091 12.0545C9.99274 12.5345 9.07638 12.8182 8.00001 12.8182C5.91638 12.8182 4.15274 11.4109 3.52365 9.52H0.850922V11.5927C2.16729 14.2073 4.87274 16 8.00001 16Z",
          fill: "#34A853"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.52364 9.51998C3.36364 9.03998 3.27273 8.52726 3.27273 7.99998C3.27273 7.47271 3.36364 6.95998 3.52364 6.47998V4.40726H0.850909C0.309091 5.48726 0 6.70908 0 7.99998C0 9.29089 0.309091 10.5127 0.850909 11.5927L3.52364 9.51998Z",
          fill: "#FBBC05"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.00001 3.18182C9.17456 3.18182 10.2291 3.58545 11.0582 4.37818L13.3527 2.08364C11.9673 0.792727 10.1564 0 8.00001 0C4.87274 0 2.16729 1.79273 0.850922 4.40727L3.52365 6.48C4.15274 4.58909 5.91638 3.18182 8.00001 3.18182Z",
          fill: "#EA4335"
        }
      )
    ]
  }
), ha = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#clip0_505_1637)", children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M12.5339 16H3.46615C1.55208 16 0 14.4479 0 12.5339V3.46615C0 1.55208 1.55208 0 3.46615 0H12.5326C14.4479 0 15.9987 1.55208 15.9987 3.46615V12.5326C16 14.4479 14.4479 16 12.5339 16Z",
            fill: "#00B900"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M13.7995 7.29688C13.7995 4.69011 11.1862 2.56902 7.97396 2.56902C4.76172 2.56902 2.14844 4.69011 2.14844 7.29688C2.14844 9.63412 4.22135 11.5912 7.02083 11.9609C7.21094 12.0013 7.46875 12.0859 7.53385 12.2487C7.59245 12.3958 7.57161 12.6263 7.55208 12.7747C7.55208 12.7747 7.48438 13.1862 7.46875 13.2734C7.44271 13.4206 7.35156 13.849 7.97396 13.5872C8.59505 13.3255 11.3294 11.612 12.5508 10.2057C13.3945 9.27865 13.7995 8.33985 13.7995 7.29688Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M6.79039 6.03645H6.38153C6.31903 6.03645 6.26825 6.08723 6.26825 6.14973V8.6875C6.26825 8.75 6.31903 8.80078 6.38153 8.80078H6.79039C6.85289 8.80078 6.90367 8.75 6.90367 8.6875V6.14973C6.90367 6.08723 6.85289 6.03645 6.79039 6.03645Z",
            fill: "#00B900"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M9.60286 6.03646H9.19401C9.13151 6.03646 9.08073 6.08724 9.08073 6.14974V7.65756L7.91797 6.08724C7.91536 6.08334 7.91276 6.07943 7.90885 6.07553C7.90885 6.07553 7.90885 6.07553 7.90885 6.07422C7.90625 6.07162 7.90365 6.06902 7.90234 6.06771C7.90104 6.06771 7.90104 6.06641 7.89974 6.06511C7.89714 6.06381 7.89583 6.0612 7.89323 6.0599C7.89193 6.0586 7.89193 6.0586 7.89062 6.0573C7.88932 6.05599 7.88672 6.05469 7.88542 6.05339C7.88411 6.05209 7.88281 6.05209 7.88151 6.05079C7.87891 6.04948 7.8776 6.04818 7.875 6.04688C7.8737 6.04688 7.8724 6.04558 7.87109 6.04558C7.86849 6.04428 7.86719 6.04297 7.86458 6.04297C7.86328 6.04297 7.86198 6.04167 7.86068 6.04167C7.85807 6.04037 7.85677 6.04037 7.85417 6.03907C7.85286 6.03907 7.85156 6.03907 7.85026 6.03777C7.84766 6.03777 7.84635 6.03646 7.84375 6.03646C7.84245 6.03646 7.84115 6.03646 7.83854 6.03516C7.83594 6.03516 7.83464 6.03516 7.83203 6.03386C7.82943 6.03386 7.82813 6.03386 7.82682 6.03386C7.82552 6.03386 7.82422 6.03386 7.82292 6.03386H7.41406C7.35156 6.03386 7.30078 6.08464 7.30078 6.14714V8.6849C7.30078 8.7474 7.35156 8.79818 7.41406 8.79818H7.82292C7.88542 8.79818 7.9362 8.7474 7.9362 8.6849V7.18099L9.10026 8.75391C9.10807 8.76563 9.11849 8.77475 9.12891 8.78126C9.12891 8.78126 9.13021 8.78125 9.13021 8.78256C9.13281 8.78386 9.13542 8.78516 9.13672 8.78646C9.13802 8.78646 9.13932 8.78777 9.14062 8.78777C9.14193 8.78907 9.14453 8.78907 9.14583 8.79037C9.14714 8.79167 9.14974 8.79167 9.15104 8.79297C9.15234 8.79297 9.15365 8.79428 9.15495 8.79428C9.15755 8.79558 9.16016 8.79558 9.16276 8.79688H9.16406C9.17318 8.79948 9.18359 8.80079 9.19271 8.80079H9.60156C9.66406 8.80079 9.71484 8.75001 9.71484 8.68751V6.14974C9.71615 6.08724 9.66536 6.03646 9.60286 6.03646Z",
            fill: "#00B900"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M5.80597 8.16536H4.69529V6.14973C4.69529 6.08723 4.64451 6.03645 4.58201 6.03645H4.17316C4.11066 6.03645 4.05988 6.08723 4.05988 6.14973V8.68749C4.05988 8.71744 4.07159 8.74609 4.09113 8.76562L4.09243 8.76692L4.09373 8.76822C4.11456 8.78775 4.14191 8.79947 4.17185 8.79947H5.80467C5.86717 8.79947 5.91795 8.74869 5.91795 8.68619V8.27734C5.91925 8.21744 5.86847 8.16536 5.80597 8.16536Z",
            fill: "#00B900"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M11.8594 6.67187C11.9219 6.67187 11.9726 6.62109 11.9726 6.55859V6.14973C11.9726 6.08723 11.9219 6.03645 11.8594 6.03645H10.2265C10.1966 6.03645 10.1679 6.04817 10.1484 6.06901L10.1471 6.07031C10.1471 6.07161 10.1458 6.07161 10.1458 6.07291C10.1263 6.09374 10.1146 6.12109 10.1146 6.15104V8.6888C10.1146 8.71875 10.1263 8.74739 10.1458 8.76692L10.1471 8.76822L10.1484 8.76953C10.1693 8.78906 10.1966 8.80208 10.2265 8.80208H11.8594C11.9219 8.80208 11.9726 8.7513 11.9726 8.6888V8.27994C11.9726 8.21744 11.9219 8.16666 11.8594 8.16666H10.7487V7.73828H11.8594C11.9219 7.73828 11.9726 7.68749 11.9726 7.62499V7.21614C11.9726 7.15364 11.9219 7.10286 11.8594 7.10286H10.7487V6.67447H11.8594V6.67187Z",
            fill: "#00B900"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_505_1637", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), ba = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx("g", { clipPath: "url(#clip0_3100_16)", children: /* @__PURE__ */ i.jsx("g", { clipPath: "url(#clip1_3100_16)", children: /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.80298 0.115361L8.47375 4.16602C8.31816 4.14796 8.16258 4.13894 8.00298 4.13894C7.80323 4.13894 7.6075 4.15198 7.41578 4.18307L7.22908 2.22094C7.22506 2.15875 7.27425 2.10458 7.33648 2.10458H7.66973L7.50913 0.120377C7.50511 0.0581823 7.5543 0.00401306 7.61151 0.00401306H8.7006C8.76283 0.00401306 8.81202 0.0581823 8.80298 0.115361ZM7.13573 4.23223C6.78441 4.31248 6.45116 4.44088 6.14401 4.60941L5.29483 2.82884C5.26873 2.77567 5.29483 2.70947 5.35304 2.6864L5.66823 2.57103L4.83711 0.759374C4.81101 0.706207 4.83711 0.640001 4.89533 0.616928L5.91816 0.243762C5.97538 0.221693 6.03761 0.257806 6.05568 0.314985C6.05969 0.314985 7.13573 4.23223 7.13573 4.23223ZM3.54828 1.44351L5.9001 4.75586C5.60198 4.95147 5.33096 5.18219 5.1001 5.44903L3.68981 4.0637C3.64564 4.01956 3.65066 3.94834 3.69483 3.90821L3.95279 3.69455L2.55154 2.27812C2.50737 2.23398 2.51239 2.16276 2.56057 2.12263L3.39269 1.42546C3.44087 1.38533 3.50813 1.39436 3.54326 1.44351H3.54828ZM4.92243 5.67072C4.70863 5.9506 4.53598 6.26157 4.4065 6.59461L2.61076 5.77304C2.55254 5.75097 2.53046 5.67975 2.56158 5.62658L2.73021 5.33768L0.925441 4.48502C0.872242 4.45893 0.850159 4.39172 0.881276 4.33856L1.42331 3.39762C1.45442 3.34445 1.52569 3.3264 1.57488 3.36151L4.92243 5.67072ZM0.244889 5.9195C0.253923 5.8573 0.316156 5.8222 0.373371 5.83524L4.30813 6.86144C4.20574 7.19448 4.14853 7.54558 4.13949 7.90972L2.17011 7.74922C2.10788 7.7452 2.06271 7.68702 2.07676 7.62483L2.13397 7.2968L0.14652 7.11022C0.0842868 7.1052 0.04514 7.04803 0.0531701 6.98583L0.23987 5.91549L0.244889 5.9195ZM0.0943244 8.5748L4.14451 8.20163C4.16258 8.56176 4.23385 8.91285 4.34426 9.24088L2.44213 9.76552C2.38391 9.77856 2.32168 9.74345 2.31264 9.68125L2.25543 9.35223L0.32519 9.85379C0.267976 9.86784 0.205742 9.83173 0.196708 9.76953L0.00498944 8.69919C-0.00404444 8.63699 0.0361061 8.57981 0.0983395 8.5748H0.0943244ZM0.730711 11.3906C0.699594 11.3374 0.721677 11.2712 0.774876 11.2441L4.44765 9.5037C4.58517 9.83173 4.77187 10.1387 4.9937 10.4135L3.38466 11.5591C3.33548 11.5952 3.26421 11.5812 3.23309 11.528L3.06446 11.2351L1.42431 12.3677C1.37513 12.4028 1.30386 12.3857 1.27274 12.3325C1.27274 12.3325 0.725692 11.3906 0.730711 11.3906ZM6.0075 11.2973L4.8873 12.9224C4.85217 12.9766 4.7809 12.9846 4.73171 12.9455L4.47375 12.7278L3.31841 14.3529C3.28228 14.402 3.21603 14.411 3.16685 14.3709L2.33071 13.6737C2.28253 13.6336 2.27751 13.5624 2.32168 13.5182L5.1804 10.6272C5.42532 10.884 5.70537 11.1107 6.0075 11.2973ZM4.61628 15.2677C4.55806 15.2456 4.53197 15.1784 4.55806 15.1253L6.25242 11.4307C6.56358 11.5902 6.90185 11.7106 7.25317 11.7768L6.7543 13.6868C6.74125 13.744 6.675 13.7801 6.61678 13.758L6.3016 13.6426L5.77262 15.5656C5.75455 15.6228 5.69232 15.6589 5.6341 15.6359L4.61227 15.2637L4.61628 15.2677ZM8.00399 11.8571C8.20374 11.8571 8.39947 11.843 8.59018 11.8119L8.77688 13.775C8.7819 13.8372 8.73272 13.8904 8.67048 13.8904H8.33724L8.49683 15.8756C8.50587 15.9378 8.45769 15.991 8.39545 15.991H7.30537C7.24815 15.991 7.19897 15.9378 7.20298 15.8756L7.53222 11.826C7.6878 11.848 7.84338 11.8571 8.00399 11.8571ZM9.75555 4.55122C9.44439 4.39574 9.11114 4.27536 8.7548 4.20514L9.25267 2.29517C9.27074 2.23699 9.33297 2.20188 9.39119 2.22395L9.70637 2.33931L10.2354 0.416301C10.2534 0.359123 10.3157 0.32301 10.3739 0.345079L11.3957 0.718245C11.4539 0.740314 11.481 0.802508 11.4539 0.86069L9.75555 4.55122ZM13.6863 2.47273L10.8266 5.36376C10.5867 5.10596 10.3116 4.88025 10.0045 4.69367L11.1247 3.06759C11.1608 3.01944 11.2321 3.00539 11.2803 3.04552L11.5382 3.2632L12.6946 1.63812C12.7297 1.58897 12.801 1.57994 12.8451 1.62006L13.6813 2.31724C13.7305 2.35737 13.7305 2.42859 13.6863 2.47273ZM15.2291 4.75085L11.5563 6.49229C11.4138 6.16326 11.2321 5.8563 11.0093 5.58144L12.6183 4.43586C12.6675 4.39574 12.7387 4.41379 12.7699 4.46696L12.9385 4.75586L14.5796 3.62332C14.6288 3.59223 14.6991 3.60527 14.7302 3.65843L15.2773 4.60038C15.3084 4.65354 15.2913 4.71975 15.2331 4.74683L15.2291 4.75085ZM15.8113 6.22044L15.998 7.29078C16.007 7.35298 15.9668 7.40614 15.9046 7.41517L11.8544 7.79235C11.8364 7.42821 11.7651 7.08213 11.6547 6.7531L13.5578 6.22947C13.615 6.21141 13.6773 6.25154 13.6863 6.31373L13.7445 6.64276L15.6737 6.14019C15.732 6.12715 15.7942 6.16326 15.8022 6.22545L15.8113 6.22044ZM15.6246 10.1457L11.6898 9.1195C11.7922 8.78646 11.8504 8.43636 11.8594 8.07223L13.8288 8.23172C13.8911 8.24075 13.9312 8.29392 13.9222 8.35611L13.864 8.68514L15.8514 8.87173C15.9136 8.87975 15.9538 8.93292 15.9448 8.99511L15.7581 10.0655C15.749 10.1276 15.6868 10.1638 15.6296 10.1507L15.6246 10.1457ZM14.5796 12.5924C14.5485 12.6455 14.4773 12.6586 14.4281 12.6275L11.0805 10.3182C11.2943 10.0384 11.467 9.7274 11.5965 9.39436L13.3922 10.2159C13.4504 10.243 13.4725 10.3092 13.4414 10.3624L13.2727 10.6513L15.0775 11.504C15.1307 11.531 15.1528 11.5972 15.1217 11.6504L14.5796 12.5924ZM10.0978 11.2291C10.396 11.0385 10.663 10.8028 10.8988 10.5369L12.3081 11.9223C12.3523 11.9664 12.3523 12.0376 12.3031 12.0777L12.0451 12.2904L13.4464 13.7078C13.4865 13.752 13.4865 13.8232 13.4374 13.8623L12.6062 14.5605C12.5611 14.5996 12.4898 14.5916 12.4547 14.5424L10.1029 11.2291H10.0978ZM10.0798 15.7412C10.0226 15.7633 9.96032 15.7282 9.94225 15.67L8.86622 11.7537C9.21754 11.6735 9.55079 11.5451 9.85794 11.3755L10.7071 13.1571C10.7332 13.2143 10.7071 13.2815 10.6489 13.2986L10.3337 13.4139L11.1648 15.2266C11.1909 15.2838 11.1648 15.346 11.1066 15.368L10.0848 15.7412H10.0798Z",
          fill: "black"
        }
      ) }) }),
      /* @__PURE__ */ i.jsxs("defs", { children: [
        /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_3100_16", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }),
        /* @__PURE__ */ i.jsx("clipPath", { id: "clip1_3100_16", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) })
      ] })
    ]
  }
), sc = ({ className: e }) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    className: e,
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.716186 4.04581C0 5.03155 0 6.4377 0 9.25V10.75C0 13.5623 0 14.9684 0.716186 15.9542C0.947485 16.2725 1.22745 16.5525 1.54581 16.7838C2.53155 17.5 3.9377 17.5 6.75 17.5H11.25V19.375C11.25 19.8582 11.7749 20.1587 12.1916 19.9139L16.25 17.5C16.6491 17.2339 16.8487 17.1009 17.0291 16.9642C18.7741 15.6422 19.8543 13.6238 19.9863 11.4386C20 11.2126 20 10.9727 20 10.4931V8.53757C20 6.40191 20 5.33408 19.5778 4.52129C19.222 3.83642 18.6636 3.278 17.9787 2.92223C17.1659 2.5 16.0981 2.5 13.9624 2.5H6.75C3.9377 2.5 2.53155 2.5 1.54581 3.21619C1.22745 3.44748 0.947485 3.72745 0.716186 4.04581ZM2.5 7.1875C2.5 6.66973 2.91973 6.25 3.4375 6.25H10.3125C10.8303 6.25 11.25 6.66973 11.25 7.1875C11.25 7.70527 10.8303 8.125 10.3125 8.125H3.4375C2.91973 8.125 2.5 7.70527 2.5 7.1875ZM3.4375 10.625C2.91973 10.625 2.5 11.0447 2.5 11.5625C2.5 12.0803 2.91973 12.5 3.4375 12.5H6.5625C7.08027 12.5 7.5 12.0803 7.5 11.5625C7.5 11.0447 7.08027 10.625 6.5625 10.625H3.4375Z",
        fill: "white"
      }
    )
  }
), cc = ({ className: e }) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    className: ee(e),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.21967 4.21967C4.51256 3.92678 4.98744 3.92678 5.28033 4.21967L8 6.93934L10.7197 4.21967C11.0126 3.92678 11.4874 3.92678 11.7803 4.21967C12.0732 4.51256 12.0732 4.98744 11.7803 5.28033L9.06066 8L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L8 9.06066L5.28033 11.7803C4.98744 12.0732 4.51256 12.0732 4.21967 11.7803C3.92678 11.4874 3.92678 11.0126 4.21967 10.7197L6.93934 8L4.21967 5.28033C3.92678 4.98744 3.92678 4.51256 4.21967 4.21967Z",
          style: { fill: wt.color.placeholder }
        }
      )
    ]
  }
), lc = ({ className: e }) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    className: ee(e),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0676 5.49021C12.3384 5.17673 12.3037 4.70312 11.9902 4.43238C11.6767 4.16164 11.2031 4.1963 10.9324 4.50979L6.78035 9.3174L5.59201 7.78954C5.33771 7.46258 4.86651 7.40368 4.53954 7.65799C4.21258 7.91229 4.15368 8.3835 4.40799 8.71045L6.15799 10.9605C6.29594 11.1378 6.50614 11.244 6.73076 11.2498C6.95538 11.2555 7.17075 11.1603 7.31762 10.9902L12.0676 5.49021Z",
          fill: "#142049"
        }
      )
    ]
  }
), dc = ({ className: e }) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    className: e,
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.408726 4.54754C0 5.3497 0 6.3998 0 8.5V11.5C0 13.6002 0 14.6503 0.408726 15.4525C0.768251 16.1581 1.34193 16.7317 2.04754 17.0913C2.8497 17.5 3.8998 17.5 6 17.5H14C16.1002 17.5 17.1503 17.5 17.9525 17.0913C18.6581 16.7317 19.2317 16.1581 19.5913 15.4525C20 14.6503 20 13.6002 20 11.5V8.5C20 6.3998 20 5.3497 19.5913 4.54754C19.2317 3.84193 18.6581 3.26825 17.9525 2.90873C17.1503 2.5 16.1002 2.5 14 2.5H6C3.8998 2.5 2.8497 2.5 2.04754 2.90873C1.34193 3.26825 0.768251 3.84193 0.408726 4.54754ZM4.28165 5.97781C3.85518 5.68419 3.27144 5.79188 2.97782 6.21835C2.6842 6.64481 2.79189 7.22855 3.21835 7.52217L9.26883 11.6879C9.71786 11.9971 10.3112 11.9965 10.7596 11.6864L16.7832 7.52109C17.2091 7.2266 17.3156 6.64264 17.0211 6.21678C16.7266 5.79091 16.1426 5.68441 15.7168 5.9789L10.0124 9.92348L4.28165 5.97781Z",
        fill: "white"
      }
    )
  }
);
function uc() {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: "5",
      height: "20",
      viewBox: "0 0 5 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 0C3.32843 1.19209e-07 4 0.671573 4 1.5L4 11.5C4 12.3284 3.32843 13 2.5 13C1.67157 13 1 12.3284 1 11.5L1 1.5C1 0.671573 1.67157 -1.19209e-07 2.5 0Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M4.5 18C4.5 19.1046 3.60457 20 2.5 20C1.39543 20 0.5 19.1046 0.5 18C0.5 16.8954 1.39543 16 2.5 16C3.60457 16 4.5 16.8954 4.5 18Z",
            fill: "white"
          }
        )
      ]
    }
  );
}
const fc = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx("g", { clipPath: "url(#clip0_2610_9920)", children: /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0.220551 7.4C1.00905 5.8258 3.50342 2 8.00001 2C12.4966 2 14.991 5.8258 15.7796 7.4C16.0733 7.98635 16.0737 8.0153 15.7796 8.60228C14.99 10.1778 12.4949 14 8.00001 14C3.50298 14 1.00762 10.1738 0.219399 8.6C-0.0739824 8.01422 -0.0726647 7.98539 0.220551 7.4ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z",
          fill: "#142049"
        }
      ) }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_2610_9920", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), pc = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#clip0_2610_9933)", children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.220551 7.4C1.00905 5.8258 3.50342 2 8.00001 2C12.4966 2 14.991 5.8258 15.7796 7.4C16.0733 7.98635 16.0737 8.0153 15.7796 8.60228C14.99 10.1778 12.4949 14 8.00001 14C3.50298 14 1.00762 10.1738 0.219399 8.6C-0.0739824 8.01422 -0.0726647 7.98539 0.220551 7.4ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z",
            fill: "#142049"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M2.34314 2.34315L13.6568 13.6569",
            stroke: "#142049",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_2610_9933", children: /* @__PURE__ */ i.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), Ca = ({ className: e }) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    width: "16",
    className: ee(e),
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3.75 5.75L8 10.25L12.25 5.75",
        stroke: wt.color.foreground,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), ya = ({
  className: e,
  fill: t = wt.color.background
}) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    className: ee(e),
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.9998 6.96103L13.9998 6.95691C13.9974 6.79449 13.959 6.6346 13.8874 6.48877C13.8158 6.34294 13.7127 6.21479 13.5856 6.11357C13.4585 6.01235 13.3106 5.94058 13.1523 5.90346C12.9941 5.86634 12.8297 5.86479 12.6708 5.89894L12.6659 5.90001C12.4344 5.95196 12.1943 5.95157 11.9629 5.89886C11.7316 5.84615 11.515 5.74245 11.3288 5.59531C11.1425 5.44816 10.9915 5.26127 10.8866 5.04824C10.7821 4.83603 10.726 4.60323 10.7225 4.36668C10.7213 4.07884 10.6065 3.80298 10.4029 3.59926C10.1992 3.39552 9.92339 3.28054 9.63542 3.27933C9.39916 3.27578 9.16663 3.21974 8.95463 3.11523C8.74181 3.0103 8.55504 2.85917 8.40795 2.67282C8.26087 2.48647 8.15718 2.2696 8.10447 2.03803C8.05176 1.80645 8.05137 1.56602 8.10331 1.33427L8.10439 1.32937C8.13848 1.17054 8.13694 1.00612 8.09987 0.847953C8.0628 0.689787 7.99112 0.541797 7.88998 0.41465C7.78884 0.287501 7.66075 0.184359 7.51493 0.112677C7.3691 0.0409949 7.20918 0.00256304 7.04669 0.000166098L7.04169 0.000114905C5.64531 -0.00788549 4.27846 0.40206 3.11675 1.17724C1.95505 1.95242 1.05159 3.05742 0.522378 4.35021C-0.00682774 5.643 -0.137616 7.06456 0.146804 8.43228C0.431224 9.79999 1.11787 11.0514 2.11858 12.0258C4.84733 14.6831 9.25037 14.6542 11.9431 11.9606C12.601 11.3061 13.1217 10.5268 13.4749 9.66852C13.8281 8.80994 14.0066 7.88947 13.9998 6.96103ZM8.77386 10.7684C9.21895 10.7684 9.57977 10.4074 9.57977 9.96208C9.57977 9.51674 9.21895 9.15571 8.77386 9.15571C8.32878 9.15571 7.96796 9.51674 7.96796 9.96208C7.96796 10.4074 8.32878 10.7684 8.77386 10.7684ZM5.28166 9.4245C5.28166 9.86984 4.92084 10.2309 4.47576 10.2309C4.03067 10.2309 3.66986 9.86984 3.66986 9.4245C3.66986 8.97915 4.03067 8.61813 4.47576 8.61813C4.92084 8.61813 5.28166 8.97915 5.28166 9.4245ZM3.93849 6.46785C4.38358 6.46785 4.7444 6.10682 4.7444 5.66148C4.7444 5.21614 4.38358 4.85512 3.93849 4.85512C3.49341 4.85512 3.13259 5.21614 3.13259 5.66148C3.13259 6.10682 3.49341 6.46785 3.93849 6.46785ZM8.2365 6.73664C8.2365 7.18199 7.87569 7.54301 7.4306 7.54301C6.98551 7.54301 6.6247 7.18199 6.6247 6.73664C6.6247 6.2913 6.98551 5.93028 7.4306 5.93028C7.87569 5.93028 8.2365 6.2913 8.2365 6.73664Z",
        style: { fill: t }
      }
    )
  }
), vc = ({ className: e }) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    className: ee(e),
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.99998 0.522587L6.97554 0.522584H6.97546C6.81142 0.52257 6.69763 0.522561 6.59677 0.529171C5.05691 0.630098 3.83033 1.85668 3.7294 3.39654C3.72279 3.49741 3.7228 3.61122 3.72282 3.7753V3.77531L3.72282 3.79974V5.58433C3.59225 5.62566 3.47355 5.67717 3.36237 5.74136C2.99372 5.9542 2.68758 6.26034 2.47474 6.62899C2.14984 7.19173 2.14984 7.94724 2.14984 9.45825C2.14984 10.9693 2.14984 11.7248 2.47474 12.2875C2.68758 12.6562 2.99372 12.9623 3.36237 13.1751C3.92511 13.5 4.68062 13.5 6.19163 13.5H7.80832C9.31933 13.5 10.0748 13.5 10.6376 13.1751C11.0062 12.9623 11.3124 12.6562 11.5252 12.2875C11.8501 11.7248 11.8501 10.9693 11.8501 9.45825C11.8501 7.94724 11.8501 7.19173 11.5252 6.62899C11.3124 6.26034 11.0062 5.9542 10.6376 5.74136C10.5264 5.67717 10.4077 5.62566 10.2771 5.58433V3.79974L10.2771 3.77533V3.77522C10.2771 3.61119 10.2772 3.49739 10.2705 3.39654C10.1696 1.85668 8.94304 0.630098 7.40318 0.529171C7.30232 0.522561 7.18853 0.52257 7.02449 0.522584H7.02441L6.99998 0.522587ZM8.97713 5.42517V3.79974C8.97713 3.6018 8.97678 3.53419 8.97333 3.48156C8.91507 2.59268 8.20703 1.88465 7.31816 1.82639C7.26552 1.82294 7.19792 1.82259 6.99998 1.82259C6.80203 1.82259 6.73443 1.82294 6.68179 1.82639C5.79292 1.88465 5.08488 2.59268 5.02662 3.48156C5.02317 3.53419 5.02282 3.6018 5.02282 3.79974V5.42517C5.3548 5.41646 5.73937 5.41646 6.19163 5.41646H7.80832C8.26058 5.41646 8.64515 5.41646 8.97713 5.42517ZM6.99997 7.7978C7.35896 7.7978 7.64997 8.08882 7.64997 8.4478V10.4687C7.64997 10.8277 7.35896 11.1187 6.99997 11.1187C6.64099 11.1187 6.34997 10.8277 6.34997 10.4687V8.4478C6.34997 8.08882 6.64099 7.7978 6.99997 7.7978Z",
          style: { stroke: wt.color.foreground }
        }
      )
    ]
  }
), wa = () => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsx("style", { children: qe }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M10.1489 8L1.6001 24.1824H4.1585L12.7073 8H10.1489Z",
          fill: "#2A6AFF"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M15.8339 12.5552C16.7499 12.5552 17.4979 11.7856 17.4979 10.8704C17.4979 9.9552 16.7499 9.1856 15.8339 9.1856C14.8979 9.1856 14.1499 9.9552 14.1499 10.8704C14.1499 11.7856 14.8979 12.5552 15.8339 12.5552ZM14.4619 14.0112V24.1824H17.1659V14.0112H14.4619ZM27.3507 8V14.8016C26.5377 14.1118 25.5049 13.7356 24.4387 13.7408C21.4851 13.7408 19.2595 16.112 19.2595 19.1072C19.2595 22.1024 21.4851 24.4736 24.4387 24.4736C25.6659 24.4736 26.7475 24.016 27.5587 23.2256V24.1824H30.0547V8H27.3507ZM24.7507 21.936C23.1907 21.936 22.0467 20.7296 22.0467 19.1072C22.0467 17.4848 23.1907 16.2784 24.7507 16.2784C26.3107 16.2784 27.4547 17.4848 27.4547 19.1072C27.4547 20.7296 26.3107 21.936 24.7507 21.936Z",
          fill: "#142049"
        }
      )
    ]
  }
), lr = (e) => {
  const [t, n] = U(!1);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: ee(
        "sid-input",
        "sid-input--password",
        mo,
        e.error && la,
        e.className
      ),
      children: [
        /* @__PURE__ */ i.jsx(go, { ...e, type: t ? "text" : "password" }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            tabIndex: -1,
            className: ac,
            type: "button",
            onClick: () => n(!t),
            children: t ? /* @__PURE__ */ i.jsx(pc, {}) : /* @__PURE__ */ i.jsx(fc, {})
          }
        )
      ]
    }
  );
};
var mc = "dv1j860", gc = "dv1j861";
const hc = ({
  onChange: e,
  value: t = "",
  numInputs: n = 4,
  shouldAutoFocus: o = !1,
  inputType: r = "text"
}) => {
  const [a, s] = U(0), c = X([]), l = () => t ? t.toString().split("") : [], d = r === "number";
  V(() => {
    c.current = c.current.slice(0, n);
  }, [n]);
  const f = (x) => d ? !isNaN(Number(x)) : typeof x == "string", u = (x) => f(x) && x.trim().length === 1, C = (x) => {
    const { value: $ } = x.target;
    u($) && (w($), g(a + 1));
  }, v = (x) => {
    const $ = l(), S = x.slice(0, n).split(""), I = Math.min(S.length, n);
    if (!(d && S.some((j) => isNaN(Number(j))))) {
      for (let j = 0; j < n; ++j)
        j >= 0 && S.length > 0 && ($[j] = S.shift() ?? "");
      g(I), _($);
    }
  }, b = (x) => {
    const { value: $ } = x.target;
    if (!f($)) {
      x.target.value = "";
      return;
    }
    $.length === n && v($);
  }, p = (x) => ($) => {
    s($), x.target.select();
  }, y = () => {
    s(a - 1);
  }, h = (x) => {
    const $ = l();
    [x.code, x.key].includes("Backspace") ? (x.preventDefault(), w(""), g(a - 1)) : x.code === "Delete" ? (x.preventDefault(), w("")) : x.code === "ArrowLeft" ? (x.preventDefault(), g(a - 1)) : x.code === "ArrowRight" || x.key === $[a] ? (x.preventDefault(), g(a + 1)) : (x.code === "Spacebar" || x.code === "Space" || x.code === "ArrowUp" || x.code === "ArrowDown") && x.preventDefault();
  }, g = (x) => {
    var S, I;
    const $ = Math.max(Math.min(n - 1, x), 0);
    c.current[$] && ((S = c.current[$]) == null || S.focus(), (I = c.current[$]) == null || I.select(), s($));
  }, w = (x) => {
    const $ = l();
    $[a] = x[0], _($);
  }, _ = (x) => {
    e(x.join(""));
  }, k = (x) => {
    var S;
    x.preventDefault();
    const $ = (S = x.clipboardData) == null ? void 0 : S.getData("text/plain");
    v($);
  };
  return /* @__PURE__ */ i.jsx("div", { className: ee("sid-otp-input", mc), children: Array.from({ length: n }, (x, $) => $).map((x) => /* @__PURE__ */ i.jsx(
    "input",
    {
      className: gc,
      autoComplete: "one-time-code",
      maxLength: n,
      autoFocus: x === 0 && o,
      type: "text",
      inputMode: d ? "numeric" : "text",
      "aria-label": `Please enter OTP ${d ? "digit" : "character"} ${x + 1}`,
      value: l()[x] ?? "",
      ref: ($) => c.current[x] = $,
      onChange: C,
      onFocus: ($) => p($)(x),
      onBlur: y,
      onKeyDown: h,
      onPaste: k,
      onInput: b
    },
    x
  )) });
};
var In = /* @__PURE__ */ new Map();
function dr(e) {
  if (In.has(e))
    return In.get(e);
  var t = bc(e);
  return In.set(e, t), t;
}
var bc = function() {
  var e = null;
  try {
    e = document.createElement("canvas").getContext("2d");
  } catch {
  }
  if (!e)
    return function() {
      return !1;
    };
  var t = 25, n = 20, o = Math.floor(t / 2);
  return e.font = o + "px Arial, Sans-Serif", e.textBaseline = "top", e.canvas.width = n * 2, e.canvas.height = t, function(r) {
    e.clearRect(0, 0, n * 2, t), e.fillStyle = "#FF0000", e.fillText(r, 0, 22), e.fillStyle = "#0000FF", e.fillText(r, n, 22);
    for (var a = e.getImageData(0, 0, n, t).data, s = a.length, c = 0; c < s && !a[c + 3]; c += 4)
      ;
    if (c >= s)
      return !1;
    var l = n + c / 4 % n, d = Math.floor(c / 4 / n), f = e.getImageData(l, d, 1, 1).data;
    return !(a[c] !== f[0] || a[c + 2] !== f[2] || e.measureText(r).width >= n);
  };
}();
function Cc(e = "Twemoji Country Flags", t = "https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1/dist/TwemojiCountryFlags.woff2") {
  if (dr("😊") && !dr("🇨🇭")) {
    const n = document.createElement("style");
    return n.textContent = `@font-face {
      font-family: "${e}";
      unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067,
        U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
      src: url('${t}') format('woff2');
      font-display: swap;
    }`, document.head.appendChild(n), !0;
  }
  return !1;
}
var Le = {}, ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
var yc = [
  { name: "Afghanistan", dial_code: "+93", code: "AF", flag: "🇦🇫" },
  { name: "Albania", dial_code: "+355", code: "AL", flag: "🇦🇱" },
  { name: "Algeria", dial_code: "+213", code: "DZ", flag: "🇩🇿" },
  { name: "AmericanSamoa", dial_code: "+1684", code: "AS", flag: "🇦🇸" },
  { name: "Andorra", dial_code: "+376", code: "AD", flag: "🇦🇩" },
  { name: "Angola", dial_code: "+244", code: "AO", flag: "🇦🇴" },
  { name: "Anguilla", dial_code: "+1264", code: "AI", flag: "🇦🇮" },
  { name: "Antarctica", dial_code: "+672", code: "AQ", flag: "🇦🇶" },
  { name: "Antigua and Barbuda", dial_code: "+1268", code: "AG", flag: "🇦🇬" },
  { name: "Argentina", dial_code: "+54", code: "AR", flag: "🇦🇷" },
  { name: "Armenia", dial_code: "+374", code: "AM", flag: "🇦🇲" },
  { name: "Aruba", dial_code: "+297", code: "AW", flag: "🇦🇼" },
  { name: "Australia", dial_code: "+61", code: "AU", preferred: !0, flag: "🇦🇺" },
  { name: "Austria", dial_code: "+43", code: "AT", flag: "🇦🇹" },
  { name: "Azerbaijan", dial_code: "+994", code: "AZ", flag: "🇦🇿" },
  { name: "Bahamas", dial_code: "+1242", code: "BS", flag: "🇧🇸" },
  { name: "Bahrain", dial_code: "+973", code: "BH", flag: "🇧🇭" },
  { name: "Bangladesh", dial_code: "+880", code: "BD", flag: "🇧🇩" },
  { name: "Barbados", dial_code: "+1246", code: "BB", flag: "🇧🇧" },
  { name: "Belarus", dial_code: "+375", code: "BY", flag: "🇧🇾" },
  { name: "Belgium", dial_code: "+32", code: "BE", flag: "🇧🇪" },
  { name: "Belize", dial_code: "+501", code: "BZ", flag: "🇧🇿" },
  { name: "Benin", dial_code: "+229", code: "BJ", flag: "🇧🇯" },
  { name: "Bermuda", dial_code: "+1441", code: "BM", flag: "🇧🇲" },
  { name: "Bhutan", dial_code: "+975", code: "BT", flag: "🇧🇹" },
  { name: "Bolivia, Plurinational State of", dial_code: "+591", code: "BO", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", dial_code: "+387", code: "BA", flag: "🇧🇦" },
  { name: "Botswana", dial_code: "+267", code: "BW", flag: "🇧🇼" },
  { name: "Brazil", dial_code: "+55", code: "BR", flag: "🇧🇷" },
  { name: "British Indian Ocean Territory", dial_code: "+246", code: "IO", flag: "🇮🇴" },
  { name: "Brunei Darussalam", dial_code: "+673", code: "BN", flag: "🇧🇳" },
  { name: "Bulgaria", dial_code: "+359", code: "BG", flag: "🇧🇬" },
  { name: "Burkina Faso", dial_code: "+226", code: "BF", flag: "🇧🇫" },
  { name: "Burundi", dial_code: "+257", code: "BI", flag: "🇧🇮" },
  { name: "Cambodia", dial_code: "+855", code: "KH", flag: "🇰🇭" },
  { name: "Cameroon", dial_code: "+237", code: "CM", flag: "🇨🇲" },
  { name: "Canada", dial_code: "+1", code: "CA", flag: "🇨🇦" },
  { name: "Cape Verde", dial_code: "+238", code: "CV", flag: "🇨🇻" },
  { name: "Cayman Islands", dial_code: "+345", code: "KY", flag: "🇰🇾" },
  { name: "Central African Republic", dial_code: "+236", code: "CF", flag: "🇨🇫" },
  { name: "Chad", dial_code: "+235", code: "TD", flag: "🇹🇩" },
  { name: "Chile", dial_code: "+56", code: "CL", flag: "🇨🇱" },
  { name: "China", dial_code: "+86", code: "CN", flag: "🇨🇳" },
  { name: "Christmas Island", dial_code: "+61", code: "CX", flag: "🇨🇽" },
  { name: "Cocos (Keeling) Islands", dial_code: "+61", code: "CC", flag: "🇨🇨" },
  { name: "Colombia", dial_code: "+57", code: "CO", flag: "🇨🇴" },
  { name: "Comoros", dial_code: "+269", code: "KM", flag: "🇰🇲" },
  { name: "Congo", dial_code: "+242", code: "CG", flag: "🇨🇬" },
  { name: "Congo, The Democratic Republic of the", dial_code: "+243", code: "CD", flag: "🇨🇩" },
  { name: "Cook Islands", dial_code: "+682", code: "CK", flag: "🇨🇰" },
  { name: "Costa Rica", dial_code: "+506", code: "CR", flag: "🇨🇷" },
  { name: "Cote d'Ivoire", dial_code: "+225", code: "CI", flag: "🇨🇮" },
  { name: "Croatia", dial_code: "+385", code: "HR", flag: "🇭🇷" },
  { name: "Cuba", dial_code: "+53", code: "CU", flag: "🇨🇺" },
  { name: "Cyprus", dial_code: "+357", code: "CY", flag: "🇨🇾" },
  { name: "Czech Republic", dial_code: "+420", code: "CZ", flag: "🇨🇿" },
  { name: "Denmark", dial_code: "+45", code: "DK", flag: "🇩🇰" },
  { name: "Djibouti", dial_code: "+253", code: "DJ", flag: "🇩🇯" },
  { name: "Dominica", dial_code: "+1767", code: "DM", flag: "🇩🇲" },
  { name: "Dominican Republic", dial_code: "+1849", code: "DO", flag: "🇩🇴" },
  { name: "Ecuador", dial_code: "+593", code: "EC", flag: "🇪🇨" },
  { name: "Egypt", dial_code: "+20", code: "EG", flag: "🇪🇬" },
  { name: "El Salvador", dial_code: "+503", code: "SV", flag: "🇸🇻" },
  { name: "Equatorial Guinea", dial_code: "+240", code: "GQ", flag: "🇬🇶" },
  { name: "Eritrea", dial_code: "+291", code: "ER", flag: "🇪🇷" },
  { name: "Estonia", dial_code: "+372", code: "EE", flag: "🇪🇪" },
  { name: "Ethiopia", dial_code: "+251", code: "ET", flag: "🇪🇹" },
  { name: "Falkland Islands (Malvinas)", dial_code: "+500", code: "FK", flag: "🇫🇰" },
  { name: "Faroe Islands", dial_code: "+298", code: "FO", flag: "🇫🇴" },
  { name: "Fiji", dial_code: "+679", code: "FJ", flag: "🇫🇯" },
  { name: "Finland", dial_code: "+358", code: "FI", flag: "🇫🇮" },
  { name: "France", dial_code: "+33", code: "FR", flag: "🇫🇷" },
  { name: "French Guiana", dial_code: "+594", code: "GF", flag: "🇬🇫" },
  { name: "French Polynesia", dial_code: "+689", code: "PF", flag: "🇵🇫" },
  { name: "Gabon", dial_code: "+241", code: "GA", flag: "🇬🇦" },
  { name: "Gambia", dial_code: "+220", code: "GM", flag: "🇬🇲" },
  { name: "Georgia", dial_code: "+995", code: "GE", flag: "🇬🇪" },
  { name: "Germany", dial_code: "+49", code: "DE", flag: "🇩🇪" },
  { name: "Ghana", dial_code: "+233", code: "GH", flag: "🇬🇭" },
  { name: "Gibraltar", dial_code: "+350", code: "GI", flag: "🇬🇮" },
  { name: "Greece", dial_code: "+30", code: "GR", flag: "🇬🇷" },
  { name: "Greenland", dial_code: "+299", code: "GL", flag: "🇬🇱" },
  { name: "Grenada", dial_code: "+1473", code: "GD", flag: "🇬🇩" },
  { name: "Guadeloupe", dial_code: "+590", code: "GP", flag: "🇬🇵" },
  { name: "Guam", dial_code: "+1671", code: "GU", flag: "🇬🇺" },
  { name: "Guatemala", dial_code: "+502", code: "GT", flag: "🇬🇹" },
  { name: "Guernsey", dial_code: "+44", code: "GG", flag: "🇬🇬" },
  { name: "Guinea", dial_code: "+224", code: "GN", flag: "🇬🇳" },
  { name: "Guinea-Bissau", dial_code: "+245", code: "GW", flag: "🇬🇼" },
  { name: "Guyana", dial_code: "+592", code: "GY", flag: "🇬🇾" },
  { name: "Haiti", dial_code: "+509", code: "HT", flag: "🇭🇹" },
  { name: "Holy See (Vatican City State)", dial_code: "+379", code: "VA", flag: "🇻🇦" },
  { name: "Honduras", dial_code: "+504", code: "HN", flag: "🇭🇳" },
  { name: "Hong Kong", dial_code: "+852", code: "HK", flag: "🇭🇰" },
  { name: "Hungary", dial_code: "+36", code: "HU", flag: "🇭🇺" },
  { name: "Iceland", dial_code: "+354", code: "IS", flag: "🇮🇸" },
  { name: "India", dial_code: "+91", code: "IN", preferred: !0, flag: "🇮🇳" },
  { name: "Indonesia", dial_code: "+62", code: "ID", flag: "🇮🇩" },
  { name: "Iran, Islamic Republic of", dial_code: "+98", code: "IR", flag: "🇮🇷" },
  { name: "Iraq", dial_code: "+964", code: "IQ", flag: "🇮🇶" },
  { name: "Ireland", dial_code: "+353", code: "IE", flag: "🇮🇪" },
  { name: "Isle of Man", dial_code: "+44", code: "IM", flag: "🇮🇲" },
  { name: "Israel", dial_code: "+972", code: "IL", flag: "🇮🇱" },
  { name: "Italy", dial_code: "+39", code: "IT", flag: "🇮🇹" },
  { name: "Jamaica", dial_code: "+1876", code: "JM", flag: "🇯🇲" },
  { name: "Japan", dial_code: "+81", code: "JP", flag: "🇯🇵" },
  { name: "Jersey", dial_code: "+44", code: "JE", flag: "🇯🇪" },
  { name: "Jordan", dial_code: "+962", code: "JO", flag: "🇯🇴" },
  { name: "Kazakhstan", dial_code: "+77", code: "KZ", flag: "🇰🇿" },
  { name: "Kenya", dial_code: "+254", code: "KE", flag: "🇰🇪" },
  { name: "Kiribati", dial_code: "+686", code: "KI", flag: "🇰🇮" },
  { name: "Korea, Democratic People's Republic of", dial_code: "+850", code: "KP", flag: "🇰🇵" },
  { name: "Korea, Republic of", dial_code: "+82", code: "KR", flag: "🇰🇷" },
  { name: "Kuwait", dial_code: "+965", code: "KW", flag: "🇰🇼" },
  { name: "Kyrgyzstan", dial_code: "+996", code: "KG", flag: "🇰🇬" },
  { name: "Lao People's Democratic Republic", dial_code: "+856", code: "LA", flag: "🇱🇦" },
  { name: "Latvia", dial_code: "+371", code: "LV", flag: "🇱🇻" },
  { name: "Lebanon", dial_code: "+961", code: "LB", flag: "🇱🇧" },
  { name: "Lesotho", dial_code: "+266", code: "LS", flag: "🇱🇸" },
  { name: "Liberia", dial_code: "+231", code: "LR", flag: "🇱🇷" },
  { name: "Libyan Arab Jamahiriya", dial_code: "+218", code: "LY", flag: "🇱🇾" },
  { name: "Liechtenstein", dial_code: "+423", code: "LI", flag: "🇱🇮" },
  { name: "Lithuania", dial_code: "+370", code: "LT", flag: "🇱🇹" },
  { name: "Luxembourg", dial_code: "+352", code: "LU", flag: "🇱🇺" },
  { name: "Macao", dial_code: "+853", code: "MO", flag: "🇲🇴" },
  { name: "Macedonia, The Former Yugoslav Republic of", dial_code: "+389", code: "MK", flag: "🇲🇰" },
  { name: "Madagascar", dial_code: "+261", code: "MG", flag: "🇲🇬" },
  { name: "Malawi", dial_code: "+265", code: "MW", flag: "🇲🇼" },
  { name: "Malaysia", dial_code: "+60", code: "MY", flag: "🇲🇾" },
  { name: "Maldives", dial_code: "+960", code: "MV", flag: "🇲🇻" },
  { name: "Mali", dial_code: "+223", code: "ML", flag: "🇲🇱" },
  { name: "Malta", dial_code: "+356", code: "MT", flag: "🇲🇹" },
  { name: "Marshall Islands", dial_code: "+692", code: "MH", flag: "🇲🇭" },
  { name: "Martinique", dial_code: "+596", code: "MQ", flag: "🇲🇶" },
  { name: "Mauritania", dial_code: "+222", code: "MR", flag: "🇲🇷" },
  { name: "Mauritius", dial_code: "+230", code: "MU", flag: "🇲🇺" },
  { name: "Mayotte", dial_code: "+262", code: "YT", flag: "🇾🇹" },
  { name: "Mexico", dial_code: "+52", code: "MX", flag: "🇲🇽" },
  { name: "Micronesia, Federated States of", dial_code: "+691", code: "FM", flag: "🇫🇲" },
  { name: "Moldova, Republic of", dial_code: "+373", code: "MD", flag: "🇲🇩" },
  { name: "Monaco", dial_code: "+377", code: "MC", flag: "🇲🇨" },
  { name: "Mongolia", dial_code: "+976", code: "MN", flag: "🇲🇳" },
  { name: "Montenegro", dial_code: "+382", code: "ME", flag: "🇲🇪" },
  { name: "Montserrat", dial_code: "+1664", code: "MS", flag: "🇲🇸" },
  { name: "Morocco", dial_code: "+212", code: "MA", flag: "🇲🇦" },
  { name: "Mozambique", dial_code: "+258", code: "MZ", flag: "🇲🇿" },
  { name: "Myanmar", dial_code: "+95", code: "MM", flag: "🇲🇲" },
  { name: "Namibia", dial_code: "+264", code: "NA", flag: "🇳🇦" },
  { name: "Nauru", dial_code: "+674", code: "NR", flag: "🇳🇷" },
  { name: "Nepal", dial_code: "+977", code: "NP", flag: "🇳🇵" },
  { name: "Netherlands", dial_code: "+31", code: "NL", flag: "🇳🇱" },
  { name: "Netherlands Antilles", dial_code: "+599", code: "AN", flag: "🇦🇳" },
  { name: "New Caledonia", dial_code: "+687", code: "NC", flag: "🇳🇨" },
  { name: "New Zealand", dial_code: "+64", code: "NZ", flag: "🇳🇿" },
  { name: "Nicaragua", dial_code: "+505", code: "NI", flag: "🇳🇮" },
  { name: "Niger", dial_code: "+227", code: "NE", flag: "🇳🇪" },
  { name: "Nigeria", dial_code: "+234", code: "NG", flag: "🇳🇬" },
  { name: "Niue", dial_code: "+683", code: "NU", flag: "🇳🇺" },
  { name: "Norfolk Island", dial_code: "+672", code: "NF", flag: "🇳🇫" },
  { name: "Northern Mariana Islands", dial_code: "+1670", code: "MP", flag: "🇲🇵" },
  { name: "Norway", dial_code: "+47", code: "NO", flag: "🇳🇴" },
  { name: "Oman", dial_code: "+968", code: "OM", flag: "🇴🇲" },
  { name: "Pakistan", dial_code: "+92", code: "PK", flag: "🇵🇰" },
  { name: "Palau", dial_code: "+680", code: "PW", flag: "🇵🇼" },
  { name: "Palestinian Territory, Occupied", dial_code: "+970", code: "PS", flag: "🇵🇸" },
  { name: "Panama", dial_code: "+507", code: "PA", flag: "🇵🇦" },
  { name: "Papua New Guinea", dial_code: "+675", code: "PG", flag: "🇵🇬" },
  { name: "Paraguay", dial_code: "+595", code: "PY", flag: "🇵🇾" },
  { name: "Peru", dial_code: "+51", code: "PE", flag: "🇵🇪" },
  { name: "Philippines", dial_code: "+63", code: "PH", flag: "🇵🇭" },
  { name: "Pitcairn", dial_code: "+872", code: "PN", flag: "🇵🇳" },
  { name: "Poland", dial_code: "+48", code: "PL", flag: "🇵🇱" },
  { name: "Portugal", dial_code: "+351", code: "PT", flag: "🇵🇹" },
  { name: "Puerto Rico", dial_code: "+1939", code: "PR", flag: "🇵🇷" },
  { name: "Qatar", dial_code: "+974", code: "QA", flag: "🇶🇦" },
  { name: "Romania", dial_code: "+40", code: "RO", flag: "🇷🇴" },
  { name: "Russia", dial_code: "+7", code: "RU", flag: "🇷🇺" },
  { name: "Rwanda", dial_code: "+250", code: "RW", flag: "🇷🇼" },
  { name: "Réunion", dial_code: "+262", code: "RE", flag: "🇷🇪" },
  { name: "Saint Barthélemy", dial_code: "+590", code: "BL", flag: "🇧🇱" },
  { name: "Saint Helena, Ascension and Tristan Da Cunha", dial_code: "+290", code: "SH", flag: "🇸🇭" },
  { name: "Saint Kitts and Nevis", dial_code: "+1869", code: "KN", flag: "🇰🇳" },
  { name: "Saint Lucia", dial_code: "+1758", code: "LC", flag: "🇱🇨" },
  { name: "Saint Martin", dial_code: "+590", code: "MF", flag: "🇲🇫" },
  { name: "Saint Pierre and Miquelon", dial_code: "+508", code: "PM", flag: "🇵🇲" },
  { name: "Saint Vincent and the Grenadines", dial_code: "+1784", code: "VC", flag: "🇻🇨" },
  { name: "Samoa", dial_code: "+685", code: "WS", flag: "🇼🇸" },
  { name: "San Marino", dial_code: "+378", code: "SM", flag: "🇸🇲" },
  { name: "Sao Tome and Principe", dial_code: "+239", code: "ST", flag: "🇸🇹" },
  { name: "Saudi Arabia", dial_code: "+966", code: "SA", flag: "🇸🇦" },
  { name: "Senegal", dial_code: "+221", code: "SN", flag: "🇸🇳" },
  { name: "Serbia", dial_code: "+381", code: "RS", flag: "🇷🇸" },
  { name: "Seychelles", dial_code: "+248", code: "SC", flag: "🇸🇨" },
  { name: "Sierra Leone", dial_code: "+232", code: "SL", flag: "🇸🇱" },
  { name: "Singapore", dial_code: "+65", code: "SG", flag: "🇸🇬" },
  { name: "Slovakia", dial_code: "+421", code: "SK", flag: "🇸🇰" },
  { name: "Slovenia", dial_code: "+386", code: "SI", flag: "🇸🇮" },
  { name: "Solomon Islands", dial_code: "+677", code: "SB", flag: "🇸🇧" },
  { name: "Somalia", dial_code: "+252", code: "SO", flag: "🇸🇴" },
  { name: "South Africa", dial_code: "+27", code: "ZA", flag: "🇿🇦" },
  { name: "South Georgia and the South Sandwich Islands", dial_code: "+500", code: "GS", flag: "🇬🇸" },
  { name: "Spain", dial_code: "+34", code: "ES", flag: "🇪🇸" },
  { name: "Sri Lanka", dial_code: "+94", code: "LK", flag: "🇱🇰" },
  { name: "Sudan", dial_code: "+249", code: "SD", flag: "🇸🇩" },
  { name: "South Sudan", dial_code: "+211", code: "SS", flag: "🇸🇸" },
  { name: "Suriname", dial_code: "+597", code: "SR", flag: "🇸🇷" },
  { name: "Svalbard and Jan Mayen", dial_code: "+47", code: "SJ", flag: "🇸🇯" },
  { name: "Swaziland", dial_code: "+268", code: "SZ", flag: "🇸🇿" },
  { name: "Sweden", dial_code: "+46", code: "SE", flag: "🇸🇪" },
  { name: "Switzerland", dial_code: "+41", code: "CH", flag: "🇨🇭" },
  { name: "Syrian Arab Republic", dial_code: "+963", code: "SY", flag: "🇸🇾" },
  { name: "Taiwan, Province of China", dial_code: "+886", code: "TW", flag: "🇹🇼" },
  { name: "Tajikistan", dial_code: "+992", code: "TJ", flag: "🇹🇯" },
  { name: "Tanzania, United Republic of", dial_code: "+255", code: "TZ", flag: "🇹🇿" },
  { name: "Thailand", dial_code: "+66", code: "TH", flag: "🇹🇭" },
  { name: "Timor-Leste", dial_code: "+670", code: "TL", flag: "🇹🇱" },
  { name: "Togo", dial_code: "+228", code: "TG", flag: "🇹🇬" },
  { name: "Tokelau", dial_code: "+690", code: "TK", flag: "🇹🇰" },
  { name: "Tonga", dial_code: "+676", code: "TO", flag: "🇹🇴" },
  { name: "Trinidad and Tobago", dial_code: "+1868", code: "TT", flag: "🇹🇹" },
  { name: "Tunisia", dial_code: "+216", code: "TN", flag: "🇹🇳" },
  { name: "Turkey", dial_code: "+90", code: "TR", flag: "🇹🇷" },
  { name: "Turkmenistan", dial_code: "+993", code: "TM", flag: "🇹🇲" },
  { name: "Turks and Caicos Islands", dial_code: "+1649", code: "TC", flag: "🇹🇨" },
  { name: "Tuvalu", dial_code: "+688", code: "TV", flag: "🇹🇻" },
  { name: "Uganda", dial_code: "+256", code: "UG", flag: "🇺🇬" },
  { name: "Ukraine", dial_code: "+380", code: "UA", flag: "🇺🇦" },
  { name: "United Arab Emirates", dial_code: "+971", code: "AE", preferred: !0, flag: "🇦🇪" },
  { name: "United Kingdom", dial_code: "+44", code: "GB", preferred: !0, flag: "🇬🇧" },
  { name: "United States", dial_code: "+1", code: "US", preferred: !0, flag: "🇺🇸" },
  { name: "Uruguay", dial_code: "+598", code: "UY", flag: "🇺🇾" },
  { name: "Uzbekistan", dial_code: "+998", code: "UZ", flag: "🇺🇿" },
  { name: "Vanuatu", dial_code: "+678", code: "VU", flag: "🇻🇺" },
  { name: "Venezuela, Bolivarian Republic of", dial_code: "+58", code: "VE", flag: "🇻🇪" },
  { name: "Viet Nam", dial_code: "+84", code: "VN", flag: "🇻🇳" },
  { name: "Virgin Islands, British", dial_code: "+1284", code: "VG", flag: "🇻🇬" },
  { name: "Virgin Islands, U.S.", dial_code: "+1340", code: "VI", flag: "🇻🇮" },
  { name: "Wallis and Futuna", dial_code: "+681", code: "WF", flag: "🇼🇫" },
  { name: "Yemen", dial_code: "+967", code: "YE", flag: "🇾🇪" },
  { name: "Zambia", dial_code: "+260", code: "ZM", flag: "🇿🇲" },
  { name: "Zimbabwe", dial_code: "+263", code: "ZW", flag: "🇿🇼" },
  { name: "Åland Islands", dial_code: "+358", code: "AX", flag: "🇦🇽" }
];
ho.default = yc;
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.searchFlag = Le.findFlagsByDialCode = xa = Le.findFlagByDialCode = gn = Le.findFlag = bo = Le.getList = void 0;
var mn = ho, wc = function(e) {
  return mn.default.find(function(t) {
    return t.code.toLowerCase() === e.toLowerCase();
  });
}, gn = Le.findFlag = wc, xc = function(e) {
  var t, n = _a(e), o = n.find(function(r) {
    return r.dial_code === e && r.preferred;
  });
  return o || ((t = n[0]) !== null && t !== void 0 ? t : null);
}, xa = Le.findFlagByDialCode = xc, _a = function(e) {
  return mn.default.filter(function(t) {
    return t.dial_code === e;
  });
};
Le.findFlagsByDialCode = _a;
var _c = function() {
  return mn.default;
}, bo = Le.getList = _c, $c = function(e) {
  return mn.default.filter(function(t) {
    return t.code.toLowerCase().includes(e.toLowerCase()) || t.name.toLowerCase().includes(e.toLowerCase()) || t.dial_code.toLowerCase().includes(e.toLowerCase());
  });
};
Le.searchFlag = $c;
const $a = ({
  name: e,
  id: t,
  label: n,
  placeholder: o = "",
  className: r = "",
  value: a,
  flag: s,
  onChange: c,
  onFlagChange: l
}) => {
  jt(() => {
    Cc();
  }, []);
  const d = G(
    (f) => {
      const u = f.target.value;
      l(gn(u));
    },
    [l]
  );
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: ee("sid-input", "sid-input--tel", mo, r),
      children: [
        s ? /* @__PURE__ */ i.jsxs("div", { className: tc, children: [
          /* @__PURE__ */ i.jsxs("div", { className: ec, children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              s.flag,
              " ",
              s.dial_code
            ] }),
            /* @__PURE__ */ i.jsx(Ca, {})
          ] }),
          /* @__PURE__ */ i.jsx(
            "select",
            {
              className: ic,
              value: s.code,
              onChange: d,
              children: bo().map((f) => /* @__PURE__ */ i.jsxs("option", { value: f.code, children: [
                f.name,
                " ",
                f.dial_code
              ] }, f.code))
            }
          )
        ] }) : null,
        /* @__PURE__ */ i.jsx(
          go,
          {
            id: t,
            name: e,
            label: n,
            placeholder: o,
            className: r,
            type: "tel",
            value: a,
            onChange: c
          }
        )
      ]
    }
  );
};
var kc = "_1dpv0n91", Sc = "_1dpv0n90", ur = "_1dpv0n92";
const rn = ({ children: e }) => /* @__PURE__ */ i.jsxs("div", { className: ee("sid-divider", Sc), children: [
  /* @__PURE__ */ i.jsx("hr", { className: ur }),
  /* @__PURE__ */ i.jsx("span", { className: kc, children: e }),
  /* @__PURE__ */ i.jsx("hr", { className: ur })
] });
function M() {
  return M = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, M.apply(this, arguments);
}
function Ze(e, t = []) {
  let n = [];
  function o(a, s) {
    const c = /* @__PURE__ */ He(s), l = n.length;
    n = [
      ...n,
      s
    ];
    function d(u) {
      const { scope: C, children: v, ...b } = u, p = (C == null ? void 0 : C[e][l]) || c, y = ce(
        () => b,
        Object.values(b)
      );
      return /* @__PURE__ */ P(p.Provider, {
        value: y
      }, v);
    }
    function f(u, C) {
      const v = (C == null ? void 0 : C[e][l]) || c, b = Mt(v);
      if (b)
        return b;
      if (s !== void 0)
        return s;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return d.displayName = a + "Provider", [
      d,
      f
    ];
  }
  const r = () => {
    const a = n.map((s) => /* @__PURE__ */ He(s));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || a;
      return ce(
        () => ({
          [`__scope${e}`]: {
            ...c,
            [e]: l
          }
        }),
        [
          c,
          l
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    Ec(r, ...t)
  ];
}
function Ec(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map(
      (r) => ({
        useScope: r(),
        scopeName: r.scopeName
      })
    );
    return function(a) {
      const s = o.reduce((c, { useScope: l, scopeName: d }) => {
        const u = l(a)[`__scope${d}`];
        return {
          ...c,
          ...u
        };
      }, {});
      return ce(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function qc(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ka(...e) {
  return (t) => e.forEach(
    (n) => qc(n, t)
  );
}
function he(...e) {
  return G(ka(...e), e);
}
const bt = /* @__PURE__ */ J((e, t) => {
  const { children: n, ...o } = e, r = Re.toArray(n), a = r.find(Tc);
  if (a) {
    const s = a.props.children, c = r.map((l) => l === a ? Re.count(s) > 1 ? Re.only(null) : /* @__PURE__ */ tn(s) ? s.props.children : null : l);
    return /* @__PURE__ */ P(eo, M({}, o, {
      ref: t
    }), /* @__PURE__ */ tn(s) ? /* @__PURE__ */ po(s, void 0, c) : null);
  }
  return /* @__PURE__ */ P(eo, M({}, o, {
    ref: t
  }), n);
});
bt.displayName = "Slot";
const eo = /* @__PURE__ */ J((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ tn(n) ? /* @__PURE__ */ po(n, {
    ...Oc(o, n.props),
    ref: t ? ka(t, n.ref) : n.ref
  }) : Re.count(n) > 1 ? Re.only(null) : null;
});
eo.displayName = "SlotClone";
const Pc = ({ children: e }) => /* @__PURE__ */ P(pn, null, e);
function Tc(e) {
  return /* @__PURE__ */ tn(e) && e.type === Pc;
}
function Oc(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? r && a ? n[o] = (...c) => {
      a(...c), r(...c);
    } : r && (n[o] = r) : o === "style" ? n[o] = {
      ...r,
      ...a
    } : o === "className" && (n[o] = [
      r,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function Co(e) {
  const t = e + "CollectionProvider", [n, o] = Ze(t), [r, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (v) => {
    const { scope: b, children: p } = v, y = D.useRef(null), h = D.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ D.createElement(r, {
      scope: b,
      itemMap: h,
      collectionRef: y
    }, p);
  }, c = e + "CollectionSlot", l = /* @__PURE__ */ D.forwardRef((v, b) => {
    const { scope: p, children: y } = v, h = a(c, p), g = he(b, h.collectionRef);
    return /* @__PURE__ */ D.createElement(bt, {
      ref: g
    }, y);
  }), d = e + "CollectionItemSlot", f = "data-radix-collection-item", u = /* @__PURE__ */ D.forwardRef((v, b) => {
    const { scope: p, children: y, ...h } = v, g = D.useRef(null), w = he(b, g), _ = a(d, p);
    return D.useEffect(() => (_.itemMap.set(g, {
      ref: g,
      ...h
    }), () => void _.itemMap.delete(g))), /* @__PURE__ */ D.createElement(bt, {
      [f]: "",
      ref: w
    }, y);
  });
  function C(v) {
    const b = a(e + "CollectionConsumer", v);
    return D.useCallback(() => {
      const y = b.collectionRef.current;
      if (!y)
        return [];
      const h = Array.from(y.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (_, k) => h.indexOf(_.ref.current) - h.indexOf(k.ref.current)
      );
    }, [
      b.collectionRef,
      b.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: l,
      ItemSlot: u
    },
    C,
    o
  ];
}
function oe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function Se(e) {
  const t = X(e);
  return V(() => {
    t.current = e;
  }), ce(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function Ue({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = jc({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : o, c = Se(n), l = G((d) => {
    if (a) {
      const u = typeof d == "function" ? d(e) : d;
      u !== e && c(u);
    } else
      r(d);
  }, [
    a,
    e,
    r,
    c
  ]);
  return [
    s,
    l
  ];
}
function jc({ defaultProp: e, onChange: t }) {
  const n = U(e), [o] = n, r = X(o), a = Se(t);
  return V(() => {
    r.current !== o && (a(o), r.current = o);
  }, [
    o,
    r,
    a
  ]), n;
}
const Lc = [
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
  "span",
  "svg",
  "ul"
], le = Lc.reduce((e, t) => {
  const n = /* @__PURE__ */ J((o, r) => {
    const { asChild: a, ...s } = o, c = a ? bt : t;
    return V(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ P(c, M({}, s, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Sa(e, t) {
  e && na(
    () => e.dispatchEvent(t)
  );
}
const Ee = globalThis != null && globalThis.document ? jt : () => {
};
function Rc(e, t) {
  return ta((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const xt = (e) => {
  const { present: t, children: n } = e, o = Ic(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : Re.only(n), a = he(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ po(r, {
    ref: a
  }) : null;
};
xt.displayName = "Presence";
function Ic(e) {
  const [t, n] = U(), o = X({}), r = X(e), a = X("none"), s = e ? "mounted" : "unmounted", [c, l] = Rc(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return V(() => {
    const d = Ht(o.current);
    a.current = c === "mounted" ? d : "none";
  }, [
    c
  ]), Ee(() => {
    const d = o.current, f = r.current;
    if (f !== e) {
      const C = a.current, v = Ht(d);
      e ? l("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && C !== v ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    l
  ]), Ee(() => {
    if (t) {
      const d = (u) => {
        const v = Ht(o.current).includes(u.animationName);
        u.target === t && v && na(
          () => l("ANIMATION_END")
        );
      }, f = (u) => {
        u.target === t && (a.current = Ht(o.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [
    t,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(c),
    ref: G((d) => {
      d && (o.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function Ht(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const Ac = Z["useId".toString()] || (() => {
});
let Mc = 0;
function ze(e) {
  const [t, n] = Z.useState(Ac());
  return Ee(() => {
    e || n(
      (o) => o ?? String(Mc++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Ea = "Collapsible", [Nc, qa] = Ze(Ea), [zc, yo] = Nc(Ea), Dc = /* @__PURE__ */ J((e, t) => {
  const { __scopeCollapsible: n, open: o, defaultOpen: r, disabled: a, onOpenChange: s, ...c } = e, [l = !1, d] = Ue({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ P(zc, {
    scope: n,
    disabled: a,
    contentId: ze(),
    open: l,
    onOpenToggle: G(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    )
  }, /* @__PURE__ */ P(le.div, M({
    "data-state": wo(l),
    "data-disabled": a ? "" : void 0
  }, c, {
    ref: t
  })));
}), Fc = "CollapsibleTrigger", Vc = /* @__PURE__ */ J((e, t) => {
  const { __scopeCollapsible: n, ...o } = e, r = yo(Fc, n);
  return /* @__PURE__ */ P(le.button, M({
    type: "button",
    "aria-controls": r.contentId,
    "aria-expanded": r.open || !1,
    "data-state": wo(r.open),
    "data-disabled": r.disabled ? "" : void 0,
    disabled: r.disabled
  }, o, {
    ref: t,
    onClick: oe(e.onClick, r.onOpenToggle)
  }));
}), Pa = "CollapsibleContent", Bc = /* @__PURE__ */ J((e, t) => {
  const { forceMount: n, ...o } = e, r = yo(Pa, e.__scopeCollapsible);
  return /* @__PURE__ */ P(
    xt,
    {
      present: n || r.open
    },
    ({ present: a }) => /* @__PURE__ */ P(Hc, M({}, o, {
      ref: t,
      present: a
    }))
  );
}), Hc = /* @__PURE__ */ J((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...a } = e, s = yo(Pa, n), [c, l] = U(o), d = X(null), f = he(t, d), u = X(0), C = u.current, v = X(0), b = v.current, p = s.open || c, y = X(p), h = X();
  return V(() => {
    const g = requestAnimationFrame(
      () => y.current = !1
    );
    return () => cancelAnimationFrame(g);
  }, []), Ee(() => {
    const g = d.current;
    if (g) {
      h.current = h.current || {
        transitionDuration: g.style.transitionDuration,
        animationName: g.style.animationName
      }, g.style.transitionDuration = "0s", g.style.animationName = "none";
      const w = g.getBoundingClientRect();
      u.current = w.height, v.current = w.width, y.current || (g.style.transitionDuration = h.current.transitionDuration, g.style.animationName = h.current.animationName), l(o);
    }
  }, [
    s.open,
    o
  ]), /* @__PURE__ */ P(le.div, M({
    "data-state": wo(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !p
  }, a, {
    ref: f,
    style: {
      "--radix-collapsible-content-height": C ? `${C}px` : void 0,
      "--radix-collapsible-content-width": b ? `${b}px` : void 0,
      ...e.style
    }
  }), p && r);
});
function wo(e) {
  return e ? "open" : "closed";
}
const Uc = Dc, Wc = Vc, Gc = Bc, Kc = /* @__PURE__ */ He(void 0);
function hn(e) {
  const t = Mt(Kc);
  return e || t || "ltr";
}
const rt = "Accordion", Zc = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [xo, Yc, Xc] = Co(rt), [bn, Zp] = Ze(rt, [
  Xc,
  qa
]), _o = qa(), Ta = /* @__PURE__ */ D.forwardRef((e, t) => {
  const { type: n, ...o } = e, r = o, a = o;
  return /* @__PURE__ */ D.createElement(xo.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ D.createElement(tl, M({}, a, {
    ref: t
  })) : /* @__PURE__ */ D.createElement(el, M({}, r, {
    ref: t
  })));
});
Ta.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Oa, Jc] = bn(rt), [ja, Qc] = bn(rt, {
  collapsible: !1
}), el = /* @__PURE__ */ D.forwardRef((e, t) => {
  const { value: n, defaultValue: o, onValueChange: r = () => {
  }, collapsible: a = !1, ...s } = e, [c, l] = Ue({
    prop: n,
    defaultProp: o,
    onChange: r
  });
  return /* @__PURE__ */ D.createElement(Oa, {
    scope: e.__scopeAccordion,
    value: c ? [
      c
    ] : [],
    onItemOpen: l,
    onItemClose: D.useCallback(
      () => a && l(""),
      [
        a,
        l
      ]
    )
  }, /* @__PURE__ */ D.createElement(ja, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ D.createElement(La, M({}, s, {
    ref: t
  }))));
}), tl = /* @__PURE__ */ D.forwardRef((e, t) => {
  const { value: n, defaultValue: o, onValueChange: r = () => {
  }, ...a } = e, [s = [], c] = Ue({
    prop: n,
    defaultProp: o,
    onChange: r
  }), l = D.useCallback(
    (f) => c(
      (u = []) => [
        ...u,
        f
      ]
    ),
    [
      c
    ]
  ), d = D.useCallback(
    (f) => c(
      (u = []) => u.filter(
        (C) => C !== f
      )
    ),
    [
      c
    ]
  );
  return /* @__PURE__ */ D.createElement(Oa, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: l,
    onItemClose: d
  }, /* @__PURE__ */ D.createElement(ja, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ D.createElement(La, M({}, a, {
    ref: t
  }))));
}), [nl, Cn] = bn(rt), La = /* @__PURE__ */ D.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: o, dir: r, orientation: a = "vertical", ...s } = e, c = D.useRef(null), l = he(c, t), d = Yc(n), u = hn(r) === "ltr", C = oe(e.onKeyDown, (v) => {
    var b;
    if (!Zc.includes(v.key))
      return;
    const p = v.target, y = d().filter((I) => {
      var j;
      return !((j = I.ref.current) !== null && j !== void 0 && j.disabled);
    }), h = y.findIndex(
      (I) => I.ref.current === p
    ), g = y.length;
    if (h === -1)
      return;
    v.preventDefault();
    let w = h;
    const _ = 0, k = g - 1, x = () => {
      w = h + 1, w > k && (w = _);
    }, $ = () => {
      w = h - 1, w < _ && (w = k);
    };
    switch (v.key) {
      case "Home":
        w = _;
        break;
      case "End":
        w = k;
        break;
      case "ArrowRight":
        a === "horizontal" && (u ? x() : $());
        break;
      case "ArrowDown":
        a === "vertical" && x();
        break;
      case "ArrowLeft":
        a === "horizontal" && (u ? $() : x());
        break;
      case "ArrowUp":
        a === "vertical" && $();
        break;
    }
    const S = w % g;
    (b = y[S].ref.current) === null || b === void 0 || b.focus();
  });
  return /* @__PURE__ */ D.createElement(nl, {
    scope: n,
    disabled: o,
    direction: r,
    orientation: a
  }, /* @__PURE__ */ D.createElement(xo.Slot, {
    scope: n
  }, /* @__PURE__ */ D.createElement(le.div, M({}, s, {
    "data-orientation": a,
    ref: l,
    onKeyDown: o ? void 0 : C
  }))));
}), to = "AccordionItem", [ol, $o] = bn(to), rl = /* @__PURE__ */ D.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: o, ...r } = e, a = Cn(to, n), s = Jc(to, n), c = _o(n), l = ze(), d = o && s.value.includes(o) || !1, f = a.disabled || e.disabled;
  return /* @__PURE__ */ D.createElement(ol, {
    scope: n,
    open: d,
    disabled: f,
    triggerId: l
  }, /* @__PURE__ */ D.createElement(Uc, M({
    "data-orientation": a.orientation,
    "data-state": Ra(d)
  }, c, r, {
    ref: t,
    disabled: f,
    open: d,
    onOpenChange: (u) => {
      u ? s.onItemOpen(o) : s.onItemClose(o);
    }
  })));
}), al = "AccordionHeader", il = /* @__PURE__ */ D.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = Cn(rt, n), a = $o(al, n);
  return /* @__PURE__ */ D.createElement(le.h3, M({
    "data-orientation": r.orientation,
    "data-state": Ra(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  }));
}), fr = "AccordionTrigger", sl = /* @__PURE__ */ D.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = Cn(rt, n), a = $o(fr, n), s = Qc(fr, n), c = _o(n);
  return /* @__PURE__ */ D.createElement(xo.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ D.createElement(Wc, M({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": r.orientation,
    id: a.triggerId
  }, c, o, {
    ref: t
  })));
}), cl = "AccordionContent", ll = /* @__PURE__ */ D.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = Cn(rt, n), a = $o(cl, n), s = _o(n);
  return /* @__PURE__ */ D.createElement(Gc, M({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": r.orientation
  }, s, o, {
    ref: t,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Ra(e) {
  return e ? "open" : "closed";
}
const dl = Ta, ul = rl, fl = il, pl = sl, vl = ll;
var ml = "pb2eps4", gl = "pb2eps5", hl = "pb2eps2", bl = "pb2eps3";
const Cl = ({ items: e, className: t, itemClassName: n }) => /* @__PURE__ */ i.jsx(
  dl,
  {
    className: ee("sid-accordion", t),
    type: "multiple",
    children: e.map(({ value: o, trigger: r, icon: a, content: s }) => /* @__PURE__ */ i.jsxs(ul, { value: o, className: n, children: [
      /* @__PURE__ */ i.jsxs(fl, { className: hl, children: [
        /* @__PURE__ */ i.jsxs(pl, { className: bl, children: [
          /* @__PURE__ */ i.jsx(ca, { className: ml }),
          r
        ] }),
        a && /* @__PURE__ */ i.jsx("div", { children: a })
      ] }),
      /* @__PURE__ */ i.jsx(vl, { className: gl, children: s })
    ] }, o))
  }
);
function Ia(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Se(e);
  V(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const no = "dismissableLayer.update", yl = "dismissableLayer.pointerDownOutside", wl = "dismissableLayer.focusOutside";
let pr;
const xl = /* @__PURE__ */ He({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _l = /* @__PURE__ */ J((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...d } = e, f = Mt(xl), [u, C] = U(null), v = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, b] = U({}), p = he(
    t,
    (S) => C(S)
  ), y = Array.from(f.layers), [h] = [
    ...f.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = y.indexOf(h), w = u ? y.indexOf(u) : -1, _ = f.layersWithOutsidePointerEventsDisabled.size > 0, k = w >= g, x = $l((S) => {
    const I = S.target, j = [
      ...f.branches
    ].some(
      (L) => L.contains(I)
    );
    !k || j || (a == null || a(S), c == null || c(S), S.defaultPrevented || l == null || l());
  }, v), $ = kl((S) => {
    const I = S.target;
    [
      ...f.branches
    ].some(
      (L) => L.contains(I)
    ) || (s == null || s(S), c == null || c(S), S.defaultPrevented || l == null || l());
  }, v);
  return Ia((S) => {
    w === f.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && l && (S.preventDefault(), l()));
  }, v), V(() => {
    if (u)
      return o && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (pr = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), vr(), () => {
        o && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = pr);
      };
  }, [
    u,
    v,
    o,
    f
  ]), V(() => () => {
    u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), vr());
  }, [
    u,
    f
  ]), V(() => {
    const S = () => b({});
    return document.addEventListener(no, S), () => document.removeEventListener(no, S);
  }, []), /* @__PURE__ */ P(le.div, M({}, d, {
    ref: p,
    style: {
      pointerEvents: _ ? k ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: oe(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: oe(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: oe(e.onPointerDownCapture, x.onPointerDownCapture)
  }));
});
function $l(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Se(e), o = X(!1), r = X(() => {
  });
  return V(() => {
    const a = (c) => {
      if (c.target && !o.current) {
        let d = function() {
          Aa(yl, n, l, {
            discrete: !0
          });
        };
        const l = {
          originalEvent: c
        };
        c.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = d, t.addEventListener("click", r.current, {
          once: !0
        })) : d();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function kl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Se(e), o = X(!1);
  return V(() => {
    const r = (a) => {
      a.target && !o.current && Aa(wl, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function vr() {
  const e = new CustomEvent(no);
  document.dispatchEvent(e);
}
function Aa(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? Sa(r, a) : r.dispatchEvent(a);
}
const An = "focusScope.autoFocusOnMount", Mn = "focusScope.autoFocusOnUnmount", mr = {
  bubbles: !1,
  cancelable: !0
}, Sl = /* @__PURE__ */ J((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: a, ...s } = e, [c, l] = U(null), d = Se(r), f = Se(a), u = X(null), C = he(
    t,
    (p) => l(p)
  ), v = X({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  V(() => {
    if (o) {
      let p = function(w) {
        if (v.paused || !c)
          return;
        const _ = w.target;
        c.contains(_) ? u.current = _ : Qe(u.current, {
          select: !0
        });
      }, y = function(w) {
        if (v.paused || !c)
          return;
        const _ = w.relatedTarget;
        _ !== null && (c.contains(_) || Qe(u.current, {
          select: !0
        }));
      }, h = function(w) {
        if (document.activeElement === document.body)
          for (const k of w)
            k.removedNodes.length > 0 && Qe(c);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const g = new MutationObserver(h);
      return c && g.observe(c, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), g.disconnect();
      };
    }
  }, [
    o,
    c,
    v.paused
  ]), V(() => {
    if (c) {
      hr.add(v);
      const p = document.activeElement;
      if (!c.contains(p)) {
        const h = new CustomEvent(An, mr);
        c.addEventListener(An, d), c.dispatchEvent(h), h.defaultPrevented || (El(jl(Ma(c)), {
          select: !0
        }), document.activeElement === p && Qe(c));
      }
      return () => {
        c.removeEventListener(An, d), setTimeout(() => {
          const h = new CustomEvent(Mn, mr);
          c.addEventListener(Mn, f), c.dispatchEvent(h), h.defaultPrevented || Qe(p ?? document.body, {
            select: !0
          }), c.removeEventListener(Mn, f), hr.remove(v);
        }, 0);
      };
    }
  }, [
    c,
    d,
    f,
    v
  ]);
  const b = G((p) => {
    if (!n && !o || v.paused)
      return;
    const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, h = document.activeElement;
    if (y && h) {
      const g = p.currentTarget, [w, _] = ql(g);
      w && _ ? !p.shiftKey && h === _ ? (p.preventDefault(), n && Qe(w, {
        select: !0
      })) : p.shiftKey && h === w && (p.preventDefault(), n && Qe(_, {
        select: !0
      })) : h === g && p.preventDefault();
    }
  }, [
    n,
    o,
    v.paused
  ]);
  return /* @__PURE__ */ P(le.div, M({
    tabIndex: -1
  }, s, {
    ref: C,
    onKeyDown: b
  }));
});
function El(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Qe(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function ql(e) {
  const t = Ma(e), n = gr(t, e), o = gr(t.reverse(), e);
  return [
    n,
    o
  ];
}
function Ma(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function gr(e, t) {
  for (const n of e)
    if (!Pl(n, {
      upTo: t
    }))
      return n;
}
function Pl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Tl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Tl(e) && t && e.select();
  }
}
const hr = Ol();
function Ol() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = br(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = br(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function br(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function jl(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Ll = /* @__PURE__ */ J((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ Ms.createPortal(/* @__PURE__ */ P(le.div, M({}, r, {
    ref: t
  })), o) : null;
});
let Nn = 0;
function Na() {
  V(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Cr()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Cr()), Nn++, () => {
      Nn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), Nn--;
    };
  }, []);
}
function Cr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Ne = function() {
  return Ne = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ne.apply(this, arguments);
};
function za(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Rl(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, a; o < r; o++)
      (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Jt = "right-scroll-bar-position", Qt = "width-before-scroll-bar", Il = "with-scroll-bars-hidden", Al = "--removed-body-scroll-bar-size";
function Ml(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Nl(e, t) {
  var n = U(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function zl(e, t) {
  return Nl(t || null, function(n) {
    return e.forEach(function(o) {
      return Ml(o, n);
    });
  });
}
function Dl(e) {
  return e;
}
function Fl(e, t) {
  t === void 0 && (t = Dl);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, o);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(c) {
          return a(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var s = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(a), s = n;
      }
      var l = function() {
        var f = s;
        s = [], f.forEach(a);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), n = {
        push: function(f) {
          s.push(f), d();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return r;
}
function Vl(e) {
  e === void 0 && (e = {});
  var t = Fl(null);
  return t.options = Ne({ async: !0, ssr: !1 }, e), t;
}
var Da = function(e) {
  var t = e.sideCar, n = za(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return Z.createElement(o, Ne({}, n));
};
Da.isSideCarExport = !0;
function Bl(e, t) {
  return e.useMedium(t), Da;
}
var Fa = Vl(), zn = function() {
}, yn = Z.forwardRef(function(e, t) {
  var n = Z.useRef(null), o = Z.useState({
    onScrollCapture: zn,
    onWheelCapture: zn,
    onTouchMoveCapture: zn
  }), r = o[0], a = o[1], s = e.forwardProps, c = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, u = e.shards, C = e.sideCar, v = e.noIsolation, b = e.inert, p = e.allowPinchZoom, y = e.as, h = y === void 0 ? "div" : y, g = za(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = C, _ = zl([n, t]), k = Ne(Ne({}, g), r);
  return Z.createElement(
    Z.Fragment,
    null,
    f && Z.createElement(w, { sideCar: Fa, removeScrollBar: d, shards: u, noIsolation: v, inert: b, setCallbacks: a, allowPinchZoom: !!p, lockRef: n }),
    s ? Z.cloneElement(Z.Children.only(c), Ne(Ne({}, k), { ref: _ })) : Z.createElement(h, Ne({}, k, { className: l, ref: _ }), c)
  );
});
yn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
yn.classNames = {
  fullWidth: Qt,
  zeroRight: Jt
};
var yr, Hl = function() {
  if (yr)
    return yr;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ul() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Hl();
  return t && e.setAttribute("nonce", t), e;
}
function Wl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Gl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Kl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ul()) && (Wl(t, n), Gl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Zl = function() {
  var e = Kl();
  return function(t, n) {
    Z.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Va = function() {
  var e = Zl(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Yl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Dn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Xl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Dn(n), Dn(o), Dn(r)];
}, Jl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Yl;
  var t = Xl(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Ql = Va(), ed = function(e, t, n, o) {
  var r = e.left, a = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Il, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Jt, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Qt, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Jt, " .").concat(Jt, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Qt, " .").concat(Qt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body {
    `).concat(Al, ": ").concat(c, `px;
  }
`);
}, td = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o, a = Z.useMemo(function() {
    return Jl(r);
  }, [r]);
  return Z.createElement(Ql, { styles: ed(a, !t, r, n ? "" : "!important") });
}, oo = !1;
if (typeof window < "u")
  try {
    var Ut = Object.defineProperty({}, "passive", {
      get: function() {
        return oo = !0, !0;
      }
    });
    window.addEventListener("test", Ut, Ut), window.removeEventListener("test", Ut, Ut);
  } catch {
    oo = !1;
  }
var pt = oo ? { passive: !1 } : !1, nd = function(e) {
  return e.tagName === "TEXTAREA";
}, Ba = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !nd(e) && n[t] === "visible")
  );
}, od = function(e) {
  return Ba(e, "overflowY");
}, rd = function(e) {
  return Ba(e, "overflowX");
}, wr = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Ha(e, n);
    if (o) {
      var r = Ua(e, n), a = r[1], s = r[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, ad = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, id = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Ha = function(e, t) {
  return e === "v" ? od(t) : rd(t);
}, Ua = function(e, t) {
  return e === "v" ? ad(t) : id(t);
}, sd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, cd = function(e, t, n, o, r) {
  var a = sd(e, window.getComputedStyle(t).direction), s = a * o, c = n.target, l = t.contains(c), d = !1, f = s > 0, u = 0, C = 0;
  do {
    var v = Ua(e, c), b = v[0], p = v[1], y = v[2], h = p - y - a * b;
    (b || h) && Ha(e, c) && (u += h, C += b), c = c.parentNode;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (f && (r && u === 0 || !r && s > u) || !f && (r && C === 0 || !r && -s > C)) && (d = !0), d;
}, Wt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xr = function(e) {
  return [e.deltaX, e.deltaY];
}, _r = function(e) {
  return e && "current" in e ? e.current : e;
}, ld = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ud = 0, vt = [];
function fd(e) {
  var t = Z.useRef([]), n = Z.useRef([0, 0]), o = Z.useRef(), r = Z.useState(ud++)[0], a = Z.useState(function() {
    return Va();
  })[0], s = Z.useRef(e);
  Z.useEffect(function() {
    s.current = e;
  }, [e]), Z.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var p = Rl([e.lockRef.current], (e.shards || []).map(_r), !0).filter(Boolean);
      return p.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), p.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = Z.useCallback(function(p, y) {
    if ("touches" in p && p.touches.length === 2)
      return !s.current.allowPinchZoom;
    var h = Wt(p), g = n.current, w = "deltaX" in p ? p.deltaX : g[0] - h[0], _ = "deltaY" in p ? p.deltaY : g[1] - h[1], k, x = p.target, $ = Math.abs(w) > Math.abs(_) ? "h" : "v";
    if ("touches" in p && $ === "h" && x.type === "range")
      return !1;
    var S = wr($, x);
    if (!S)
      return !0;
    if (S ? k = $ : (k = $ === "v" ? "h" : "v", S = wr($, x)), !S)
      return !1;
    if (!o.current && "changedTouches" in p && (w || _) && (o.current = k), !k)
      return !0;
    var I = o.current || k;
    return cd(I, y, p, I === "h" ? w : _, !0);
  }, []), l = Z.useCallback(function(p) {
    var y = p;
    if (!(!vt.length || vt[vt.length - 1] !== a)) {
      var h = "deltaY" in y ? xr(y) : Wt(y), g = t.current.filter(function(k) {
        return k.name === y.type && k.target === y.target && ld(k.delta, h);
      })[0];
      if (g && g.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!g) {
        var w = (s.current.shards || []).map(_r).filter(Boolean).filter(function(k) {
          return k.contains(y.target);
        }), _ = w.length > 0 ? c(y, w[0]) : !s.current.noIsolation;
        _ && y.cancelable && y.preventDefault();
      }
    }
  }, []), d = Z.useCallback(function(p, y, h, g) {
    var w = { name: p, delta: y, target: h, should: g };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== w;
      });
    }, 1);
  }, []), f = Z.useCallback(function(p) {
    n.current = Wt(p), o.current = void 0;
  }, []), u = Z.useCallback(function(p) {
    d(p.type, xr(p), p.target, c(p, e.lockRef.current));
  }, []), C = Z.useCallback(function(p) {
    d(p.type, Wt(p), p.target, c(p, e.lockRef.current));
  }, []);
  Z.useEffect(function() {
    return vt.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: C
    }), document.addEventListener("wheel", l, pt), document.addEventListener("touchmove", l, pt), document.addEventListener("touchstart", f, pt), function() {
      vt = vt.filter(function(p) {
        return p !== a;
      }), document.removeEventListener("wheel", l, pt), document.removeEventListener("touchmove", l, pt), document.removeEventListener("touchstart", f, pt);
    };
  }, []);
  var v = e.removeScrollBar, b = e.inert;
  return Z.createElement(
    Z.Fragment,
    null,
    b ? Z.createElement(a, { styles: dd(r) }) : null,
    v ? Z.createElement(td, { gapMode: "margin" }) : null
  );
}
const pd = Bl(Fa, fd);
var Wa = Z.forwardRef(function(e, t) {
  return Z.createElement(yn, Ne({}, e, { ref: t, sideCar: pd }));
});
Wa.classNames = yn.classNames;
const Ga = Wa;
var vd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, mt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), Kt = {}, Fn = 0, Ka = function(e) {
  return e && (e.host || Ka(e.parentNode));
}, md = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ka(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, gd = function(e, t, n, o) {
  var r = md(t, Array.isArray(e) ? e : [e]);
  Kt[n] || (Kt[n] = /* @__PURE__ */ new WeakMap());
  var a = Kt[n], s = [], c = /* @__PURE__ */ new Set(), l = new Set(r), d = function(u) {
    !u || c.has(u) || (c.add(u), d(u.parentNode));
  };
  r.forEach(d);
  var f = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(C) {
      if (c.has(C))
        f(C);
      else {
        var v = C.getAttribute(o), b = v !== null && v !== "false", p = (mt.get(C) || 0) + 1, y = (a.get(C) || 0) + 1;
        mt.set(C, p), a.set(C, y), s.push(C), p === 1 && b && Gt.set(C, !0), y === 1 && C.setAttribute(n, "true"), b || C.setAttribute(o, "true");
      }
    });
  };
  return f(t), c.clear(), Fn++, function() {
    s.forEach(function(u) {
      var C = mt.get(u) - 1, v = a.get(u) - 1;
      mt.set(u, C), a.set(u, v), C || (Gt.has(u) || u.removeAttribute(o), Gt.delete(u)), v || u.removeAttribute(n);
    }), Fn--, Fn || (mt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), Kt = {});
  };
}, Za = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = t || vd(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), gd(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
const Ya = "Dialog", [Xa, Yp] = Ze(Ya), [hd, Ye] = Xa(Ya), bd = (e) => {
  const { __scopeDialog: t, children: n, open: o, defaultOpen: r, onOpenChange: a, modal: s = !0 } = e, c = X(null), l = X(null), [d = !1, f] = Ue({
    prop: o,
    defaultProp: r,
    onChange: a
  });
  return /* @__PURE__ */ P(hd, {
    scope: t,
    triggerRef: c,
    contentRef: l,
    contentId: ze(),
    titleId: ze(),
    descriptionId: ze(),
    open: d,
    onOpenChange: f,
    onOpenToggle: G(
      () => f(
        (u) => !u
      ),
      [
        f
      ]
    ),
    modal: s
  }, n);
}, Cd = "DialogTrigger", yd = /* @__PURE__ */ J((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Ye(Cd, n), a = he(t, r.triggerRef);
  return /* @__PURE__ */ P(le.button, M({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": ko(r.open)
  }, o, {
    ref: a,
    onClick: oe(e.onClick, r.onOpenToggle)
  }));
}), Ja = "DialogPortal", [wd, Qa] = Xa(Ja, {
  forceMount: void 0
}), xd = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, a = Ye(Ja, t);
  return /* @__PURE__ */ P(wd, {
    scope: t,
    forceMount: n
  }, Re.map(
    o,
    (s) => /* @__PURE__ */ P(xt, {
      present: n || a.open
    }, /* @__PURE__ */ P(Ll, {
      asChild: !0,
      container: r
    }, s))
  ));
}, ro = "DialogOverlay", _d = /* @__PURE__ */ J((e, t) => {
  const n = Qa(ro, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, a = Ye(ro, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ P(xt, {
    present: o || a.open
  }, /* @__PURE__ */ P($d, M({}, r, {
    ref: t
  }))) : null;
}), $d = /* @__PURE__ */ J((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Ye(ro, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ P(Ga, {
      as: bt,
      allowPinchZoom: !0,
      shards: [
        r.contentRef
      ]
    }, /* @__PURE__ */ P(le.div, M({
      "data-state": ko(r.open)
    }, o, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...o.style
      }
    })))
  );
}), Lt = "DialogContent", kd = /* @__PURE__ */ J((e, t) => {
  const n = Qa(Lt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, a = Ye(Lt, e.__scopeDialog);
  return /* @__PURE__ */ P(xt, {
    present: o || a.open
  }, a.modal ? /* @__PURE__ */ P(Sd, M({}, r, {
    ref: t
  })) : /* @__PURE__ */ P(Ed, M({}, r, {
    ref: t
  })));
}), Sd = /* @__PURE__ */ J((e, t) => {
  const n = Ye(Lt, e.__scopeDialog), o = X(null), r = he(t, n.contentRef, o);
  return V(() => {
    const a = o.current;
    if (a)
      return Za(a);
  }, []), /* @__PURE__ */ P(ei, M({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: oe(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: oe(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || c) && a.preventDefault();
    }),
    onFocusOutside: oe(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), Ed = /* @__PURE__ */ J((e, t) => {
  const n = Ye(Lt, e.__scopeDialog), o = X(!1), r = X(!1);
  return /* @__PURE__ */ P(ei, M({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var c;
        o.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus(), a.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (a) => {
      var s, c;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const l = a.target;
      ((c = n.triggerRef.current) === null || c === void 0 ? void 0 : c.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && r.current && a.preventDefault();
    }
  }));
}), ei = /* @__PURE__ */ J((e, t) => {
  const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: a, ...s } = e, c = Ye(Lt, n), l = X(null), d = he(t, l);
  return Na(), /* @__PURE__ */ P(pn, null, /* @__PURE__ */ P(Sl, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ P(_l, M({
    role: "dialog",
    id: c.contentId,
    "aria-describedby": c.descriptionId,
    "aria-labelledby": c.titleId,
    "data-state": ko(c.open)
  }, s, {
    ref: d,
    onDismiss: () => c.onOpenChange(!1)
  }))), !1);
}), qd = "DialogClose", Pd = /* @__PURE__ */ J((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Ye(qd, n);
  return /* @__PURE__ */ P(le.button, M({
    type: "button"
  }, o, {
    ref: t,
    onClick: oe(
      e.onClick,
      () => r.onOpenChange(!1)
    )
  }));
});
function ko(e) {
  return e ? "open" : "closed";
}
const Td = bd, Od = yd, jd = xd, Ld = _d, Rd = kd, Id = Pd;
var Ad = "_1wok3pl4", Md = "_1wok3pl3", Nd = "_1wok3pl1", zd = "_1wok3pl2";
const Dd = ({
  children: e,
  trigger: t,
  open: n,
  onOpenChange: o,
  icon: r,
  className: a,
  container: s,
  dismissable: c = !0,
  modal: l = !0
}) => t ? /* @__PURE__ */ i.jsxs(Td, { modal: l, open: n, onOpenChange: o, children: [
  /* @__PURE__ */ i.jsx(Od, { asChild: !0, children: t }),
  /* @__PURE__ */ i.jsxs(
    jd,
    {
      container: typeof s == "function" ? s() : s,
      children: [
        l && /* @__PURE__ */ i.jsx(Ld, { className: Nd }),
        /* @__PURE__ */ i.jsxs(
          Rd,
          {
            className: ee("sid-dialog", zd, a),
            onInteractOutside: (d) => {
              (!l || !c) && d.preventDefault();
            },
            children: [
              /* @__PURE__ */ i.jsxs("div", { className: Md, children: [
                /* @__PURE__ */ i.jsx("div", { children: r }),
                c && /* @__PURE__ */ i.jsx(Id, { asChild: !0, children: /* @__PURE__ */ i.jsx("button", { className: Ad, "aria-label": "Close", children: /* @__PURE__ */ i.jsx(cc, {}) }) })
              ] }),
              e
            ]
          }
        )
      ]
    }
  )
] }) : null;
var Fd = "_2ssqit0", Vd = "_2ssqit2", Bd = "_2ssqit1";
function ti(e) {
  const t = X({
    value: e,
    previous: e
  });
  return ce(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
function ni(e) {
  const [t, n] = U(void 0);
  return Ee(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const a = r[0];
        let s, c;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          s = d.inlineSize, c = d.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        n({
          width: s,
          height: c
        });
      });
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const oi = "Switch", [Hd, Xp] = Ze(oi), [Ud, Wd] = Hd(oi), Gd = /* @__PURE__ */ J((e, t) => {
  const { __scopeSwitch: n, name: o, checked: r, defaultChecked: a, required: s, disabled: c, value: l = "on", onCheckedChange: d, ...f } = e, [u, C] = U(null), v = he(
    t,
    (g) => C(g)
  ), b = X(!1), p = u ? !!u.closest("form") : !0, [y = !1, h] = Ue({
    prop: r,
    defaultProp: a,
    onChange: d
  });
  return /* @__PURE__ */ P(Ud, {
    scope: n,
    checked: y,
    disabled: c
  }, /* @__PURE__ */ P(le.button, M({
    type: "button",
    role: "switch",
    "aria-checked": y,
    "aria-required": s,
    "data-state": ri(y),
    "data-disabled": c ? "" : void 0,
    disabled: c,
    value: l
  }, f, {
    ref: v,
    onClick: oe(e.onClick, (g) => {
      h(
        (w) => !w
      ), p && (b.current = g.isPropagationStopped(), b.current || g.stopPropagation());
    })
  })), p && /* @__PURE__ */ P(Yd, {
    control: u,
    bubbles: !b.current,
    name: o,
    value: l,
    checked: y,
    required: s,
    disabled: c,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Kd = "SwitchThumb", Zd = /* @__PURE__ */ J((e, t) => {
  const { __scopeSwitch: n, ...o } = e, r = Wd(Kd, n);
  return /* @__PURE__ */ P(le.span, M({
    "data-state": ri(r.checked),
    "data-disabled": r.disabled ? "" : void 0
  }, o, {
    ref: t
  }));
}), Yd = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, a = X(null), s = ti(n), c = ni(t);
  return V(() => {
    const l = a.current, d = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (s !== n && u) {
      const C = new Event("click", {
        bubbles: o
      });
      u.call(l, n), l.dispatchEvent(C);
    }
  }, [
    s,
    n,
    o
  ]), /* @__PURE__ */ P("input", M({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, r, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...c,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function ri(e) {
  return e ? "checked" : "unchecked";
}
const Xd = Gd, Jd = Zd, Qd = ({ className: e, blocked: t = !1, ...n }) => /* @__PURE__ */ i.jsx(
  Xd,
  {
    className: ee("sid-switch", Fd, e),
    "data-blocked": t,
    disabled: t,
    ...n,
    children: t ? /* @__PURE__ */ i.jsx(vc, { className: Vd }) : /* @__PURE__ */ i.jsx(Jd, { className: Bd })
  }
);
var eu = "q9c0is3", tu = "q9c0isg", nu = { blue: "q9c0ise q9c0isc", red: "q9c0isf q9c0isc" }, ou = "q9c0isd", ru = { blue: "q9c0isa q9c0is8", red: "q9c0isb q9c0is8" }, au = "q9c0is9", iu = { blue: "q9c0is6 q9c0is4", red: "q9c0is7 q9c0is4" }, su = "q9c0is5";
const Nt = ({
  children: e,
  className: t,
  variant: n = "blue",
  shouldAnimate: o = !0
}) => /* @__PURE__ */ i.jsxs("div", { className: ee(eu, t), children: [
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: ee(iu[n], {
        [su]: o
      })
    }
  ),
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: ee(ru[n], {
        [au]: o
      })
    }
  ),
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: ee(nu[n], {
        [ou]: o
      })
    }
  ),
  /* @__PURE__ */ i.jsx("div", { className: tu, children: e })
] });
function cu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function $r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $r(Object(n), !0).forEach(function(o) {
      cu(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
var lu = (e, t, n) => {
  for (var o of Object.keys(e)) {
    var r;
    if (e[o] !== ((r = t[o]) !== null && r !== void 0 ? r : n[o]))
      return !1;
  }
  return !0;
}, du = (e) => (t) => {
  var n = e.defaultClassName, o = kr(kr({}, e.defaultVariants), t);
  for (var r in o) {
    var a, s = (a = o[r]) !== null && a !== void 0 ? a : e.defaultVariants[r];
    if (s != null) {
      var c = s;
      typeof c == "boolean" && (c = c === !0 ? "true" : "false");
      var l = (
        // @ts-expect-error
        e.variantClassNames[r][c]
      );
      l && (n += " " + l);
    }
  }
  for (var [d, f] of e.compoundVariants)
    lu(d, o, e.defaultVariants) && (n += " " + f);
  return n;
};
function uu(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fu(e) {
  var t = uu(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function pu(e, t, n) {
  return t = fu(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Sr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sr(Object(n), !0).forEach(function(o) {
      pu(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sr(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
var vu = (e) => function() {
  for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
    n[o] = arguments[o];
  var r = Object.assign({}, ...n.map((l) => l.styles)), a = Object.keys(r), s = a.filter((l) => "mappings" in r[l]), c = (l) => {
    var d = [], f = {}, u = Vn({}, l), C = !1;
    for (var v of s) {
      var b = l[v];
      if (b != null) {
        var p = r[v];
        C = !0;
        for (var y of p.mappings)
          f[y] = b, u[y] == null && delete u[y];
      }
    }
    var h = C ? Vn(Vn({}, f), u) : l, g = function() {
      var x = h[w], $ = r[w];
      try {
        if ($.mappings)
          return "continue";
        if (typeof x == "string" || typeof x == "number") {
          if (process.env.NODE_ENV !== "production" && !$.values[x].defaultClass)
            throw new Error();
          d.push($.values[x].defaultClass);
        } else if (Array.isArray(x))
          for (var S = 0; S < x.length; S++) {
            var I = x[S];
            if (I != null) {
              var j = $.responsiveArray[S];
              if (process.env.NODE_ENV !== "production" && !$.values[I].conditions[j])
                throw new Error();
              d.push($.values[I].conditions[j]);
            }
          }
        else
          for (var L in x) {
            var F = x[L];
            if (F != null) {
              if (process.env.NODE_ENV !== "production" && !$.values[F].conditions[L])
                throw new Error();
              d.push($.values[F].conditions[L]);
            }
          }
      } catch (q) {
        if (process.env.NODE_ENV !== "production") {
          class E extends Error {
            constructor(W) {
              super(W), this.name = "SprinklesError";
            }
          }
          var B = (O) => typeof O == "string" ? '"'.concat(O, '"') : O, H = (O, W, N) => {
            throw new E('"'.concat(O, '" has no value ').concat(B(W), ". Possible values are ").concat(Object.keys(N).map(B).join(", ")));
          };
          if (!$)
            throw new E('"'.concat(w, '" is not a valid sprinkle'));
          if ((typeof x == "string" || typeof x == "number") && (x in $.values || H(w, x, $.values), !$.values[x].defaultClass))
            throw new E('"'.concat(w, '" has no default condition. You must specify which conditions to target explicitly. Possible options are ').concat(Object.keys($.values[x].conditions).map(B).join(", ")));
          if (typeof x == "object") {
            if (!("conditions" in $.values[Object.keys($.values)[0]]))
              throw new E('"'.concat(w, '" is not a conditional property'));
            if (Array.isArray(x)) {
              if (!("responsiveArray" in $))
                throw new E('"'.concat(w, '" does not support responsive arrays'));
              var A = $.responsiveArray.length;
              if (A < x.length)
                throw new E('"'.concat(w, '" only supports up to ').concat(A, " breakpoints. You passed ").concat(x.length));
              for (var K of x)
                $.values[K] || H(w, K, $.values);
            } else
              for (var re in x) {
                var fe = x[re];
                if (fe != null && ($.values[fe] || H(w, fe, $.values), !$.values[fe].conditions[re]))
                  throw new E('"'.concat(w, '" has no condition named ').concat(B(re), ". Possible values are ").concat(Object.keys($.values[fe].conditions).map(B).join(", ")));
              }
          }
        }
        throw q;
      }
    };
    for (var w in h)
      var _ = g();
    return e(d.join(" "));
  };
  return Object.assign(c, {
    properties: new Set(a)
  });
}, mu = (e) => e, gu = function() {
  return vu(mu)(...arguments);
}, xe = gu({ conditions: { defaultCondition: "lightMode", conditionNames: ["lightMode", "darkMode"], responsiveArray: void 0 }, styles: { color: { values: { background: { conditions: { lightMode: "kqvzqt0", darkMode: "kqvzqt1" }, defaultClass: "kqvzqt0" }, mute: { conditions: { lightMode: "kqvzqt2", darkMode: "kqvzqt3" }, defaultClass: "kqvzqt2" }, panel: { conditions: { lightMode: "kqvzqt4", darkMode: "kqvzqt5" }, defaultClass: "kqvzqt4" }, foreground: { conditions: { lightMode: "kqvzqt6", darkMode: "kqvzqt7" }, defaultClass: "kqvzqt6" }, contrast: { conditions: { lightMode: "kqvzqt8", darkMode: "kqvzqt9" }, defaultClass: "kqvzqt8" }, secondary: { conditions: { lightMode: "kqvzqta", darkMode: "kqvzqtb" }, defaultClass: "kqvzqta" }, tertiary: { conditions: { lightMode: "kqvzqtc", darkMode: "kqvzqtd" }, defaultClass: "kqvzqtc" }, placeholder: { conditions: { lightMode: "kqvzqte", darkMode: "kqvzqtf" }, defaultClass: "kqvzqte" }, smooth: { conditions: { lightMode: "kqvzqtg", darkMode: "kqvzqth" }, defaultClass: "kqvzqtg" }, subtle: { conditions: { lightMode: "kqvzqti", darkMode: "kqvzqtj" }, defaultClass: "kqvzqti" }, soft: { conditions: { lightMode: "kqvzqtk", darkMode: "kqvzqtl" }, defaultClass: "kqvzqtk" }, offset: { conditions: { lightMode: "kqvzqtm", darkMode: "kqvzqtn" }, defaultClass: "kqvzqtm" }, primary: { conditions: { lightMode: "kqvzqto", darkMode: "kqvzqtp" }, defaultClass: "kqvzqto" }, primaryHover: { conditions: { lightMode: "kqvzqtq", darkMode: "kqvzqtr" }, defaultClass: "kqvzqtq" }, transparent: { conditions: { lightMode: "kqvzqts", darkMode: "kqvzqtt" }, defaultClass: "kqvzqts" }, error: { conditions: { lightMode: "kqvzqtu", darkMode: "kqvzqtv" }, defaultClass: "kqvzqtu" }, auxiliary: { conditions: { lightMode: "kqvzqtw", darkMode: "kqvzqtx" }, defaultClass: "kqvzqtw" }, success: { conditions: { lightMode: "kqvzqty", darkMode: "kqvzqtz" }, defaultClass: "kqvzqty" }, foregroundSuccess: { conditions: { lightMode: "kqvzqt10", darkMode: "kqvzqt11" }, defaultClass: "kqvzqt10" }, backgroundSuccess: { conditions: { lightMode: "kqvzqt12", darkMode: "kqvzqt13" }, defaultClass: "kqvzqt12" }, failure: { conditions: { lightMode: "kqvzqt14", darkMode: "kqvzqt15" }, defaultClass: "kqvzqt14" }, foregroundFailure: { conditions: { lightMode: "kqvzqt16", darkMode: "kqvzqt17" }, defaultClass: "kqvzqt16" }, backgroundFailure: { conditions: { lightMode: "kqvzqt18", darkMode: "kqvzqt19" }, defaultClass: "kqvzqt18" } } }, backgroundColor: { values: { background: { conditions: { lightMode: "kqvzqt1a", darkMode: "kqvzqt1b" }, defaultClass: "kqvzqt1a" }, mute: { conditions: { lightMode: "kqvzqt1c", darkMode: "kqvzqt1d" }, defaultClass: "kqvzqt1c" }, panel: { conditions: { lightMode: "kqvzqt1e", darkMode: "kqvzqt1f" }, defaultClass: "kqvzqt1e" }, foreground: { conditions: { lightMode: "kqvzqt1g", darkMode: "kqvzqt1h" }, defaultClass: "kqvzqt1g" }, contrast: { conditions: { lightMode: "kqvzqt1i", darkMode: "kqvzqt1j" }, defaultClass: "kqvzqt1i" }, secondary: { conditions: { lightMode: "kqvzqt1k", darkMode: "kqvzqt1l" }, defaultClass: "kqvzqt1k" }, tertiary: { conditions: { lightMode: "kqvzqt1m", darkMode: "kqvzqt1n" }, defaultClass: "kqvzqt1m" }, placeholder: { conditions: { lightMode: "kqvzqt1o", darkMode: "kqvzqt1p" }, defaultClass: "kqvzqt1o" }, smooth: { conditions: { lightMode: "kqvzqt1q", darkMode: "kqvzqt1r" }, defaultClass: "kqvzqt1q" }, subtle: { conditions: { lightMode: "kqvzqt1s", darkMode: "kqvzqt1t" }, defaultClass: "kqvzqt1s" }, soft: { conditions: { lightMode: "kqvzqt1u", darkMode: "kqvzqt1v" }, defaultClass: "kqvzqt1u" }, offset: { conditions: { lightMode: "kqvzqt1w", darkMode: "kqvzqt1x" }, defaultClass: "kqvzqt1w" }, primary: { conditions: { lightMode: "kqvzqt1y", darkMode: "kqvzqt1z" }, defaultClass: "kqvzqt1y" }, primaryHover: { conditions: { lightMode: "kqvzqt20", darkMode: "kqvzqt21" }, defaultClass: "kqvzqt20" }, transparent: { conditions: { lightMode: "kqvzqt22", darkMode: "kqvzqt23" }, defaultClass: "kqvzqt22" }, error: { conditions: { lightMode: "kqvzqt24", darkMode: "kqvzqt25" }, defaultClass: "kqvzqt24" }, auxiliary: { conditions: { lightMode: "kqvzqt26", darkMode: "kqvzqt27" }, defaultClass: "kqvzqt26" }, success: { conditions: { lightMode: "kqvzqt28", darkMode: "kqvzqt29" }, defaultClass: "kqvzqt28" }, foregroundSuccess: { conditions: { lightMode: "kqvzqt2a", darkMode: "kqvzqt2b" }, defaultClass: "kqvzqt2a" }, backgroundSuccess: { conditions: { lightMode: "kqvzqt2c", darkMode: "kqvzqt2d" }, defaultClass: "kqvzqt2c" }, failure: { conditions: { lightMode: "kqvzqt2e", darkMode: "kqvzqt2f" }, defaultClass: "kqvzqt2e" }, foregroundFailure: { conditions: { lightMode: "kqvzqt2g", darkMode: "kqvzqt2h" }, defaultClass: "kqvzqt2g" }, backgroundFailure: { conditions: { lightMode: "kqvzqt2i", darkMode: "kqvzqt2j" }, defaultClass: "kqvzqt2i" } } } } }, { conditions: void 0, styles: { marginY: { mappings: ["marginTop", "marginBottom"] }, marginX: { mappings: ["marginLeft", "marginRight"] }, gap: { values: { 0: { defaultClass: "kqvzqt2k" }, 1: { defaultClass: "kqvzqt2l" }, 2: { defaultClass: "kqvzqt2m" }, 3: { defaultClass: "kqvzqt2n" }, 4: { defaultClass: "kqvzqt2o" }, 5: { defaultClass: "kqvzqt2p" }, 6: { defaultClass: "kqvzqt2q" }, 7: { defaultClass: "kqvzqt2r" }, 8: { defaultClass: "kqvzqt2s" }, 9: { defaultClass: "kqvzqt2t" }, 10: { defaultClass: "kqvzqt2u" }, 11: { defaultClass: "kqvzqt2v" }, 12: { defaultClass: "kqvzqt2w" }, 13: { defaultClass: "kqvzqt2x" }, 14: { defaultClass: "kqvzqt2y" }, 15: { defaultClass: "kqvzqt2z" }, 16: { defaultClass: "kqvzqt30" }, 20: { defaultClass: "kqvzqt31" }, 24: { defaultClass: "kqvzqt32" }, 28: { defaultClass: "kqvzqt33" }, 32: { defaultClass: "kqvzqt34" }, 36: { defaultClass: "kqvzqt35" }, 40: { defaultClass: "kqvzqt36" }, 44: { defaultClass: "kqvzqt37" }, 48: { defaultClass: "kqvzqt38" }, 52: { defaultClass: "kqvzqt39" }, 56: { defaultClass: "kqvzqt3a" }, 60: { defaultClass: "kqvzqt3b" }, 64: { defaultClass: "kqvzqt3c" }, 68: { defaultClass: "kqvzqt3d" }, 72: { defaultClass: "kqvzqt3e" }, 76: { defaultClass: "kqvzqt3f" }, 80: { defaultClass: "kqvzqt3g" }, 96: { defaultClass: "kqvzqt3h" }, px: { defaultClass: "kqvzqt3i" }, "0.25": { defaultClass: "kqvzqt3j" }, "0.5": { defaultClass: "kqvzqt3k" }, "0.75": { defaultClass: "kqvzqt3l" }, "1.5": { defaultClass: "kqvzqt3m" }, "2.5": { defaultClass: "kqvzqt3n" }, "3.5": { defaultClass: "kqvzqt3o" } } }, marginTop: { values: { 0: { defaultClass: "kqvzqt3p" }, 1: { defaultClass: "kqvzqt3q" }, 2: { defaultClass: "kqvzqt3r" }, 3: { defaultClass: "kqvzqt3s" }, 4: { defaultClass: "kqvzqt3t" }, 5: { defaultClass: "kqvzqt3u" }, 6: { defaultClass: "kqvzqt3v" }, 7: { defaultClass: "kqvzqt3w" }, 8: { defaultClass: "kqvzqt3x" }, 9: { defaultClass: "kqvzqt3y" }, 10: { defaultClass: "kqvzqt3z" }, 11: { defaultClass: "kqvzqt40" }, 12: { defaultClass: "kqvzqt41" }, 13: { defaultClass: "kqvzqt42" }, 14: { defaultClass: "kqvzqt43" }, 15: { defaultClass: "kqvzqt44" }, 16: { defaultClass: "kqvzqt45" }, 20: { defaultClass: "kqvzqt46" }, 24: { defaultClass: "kqvzqt47" }, 28: { defaultClass: "kqvzqt48" }, 32: { defaultClass: "kqvzqt49" }, 36: { defaultClass: "kqvzqt4a" }, 40: { defaultClass: "kqvzqt4b" }, 44: { defaultClass: "kqvzqt4c" }, 48: { defaultClass: "kqvzqt4d" }, 52: { defaultClass: "kqvzqt4e" }, 56: { defaultClass: "kqvzqt4f" }, 60: { defaultClass: "kqvzqt4g" }, 64: { defaultClass: "kqvzqt4h" }, 68: { defaultClass: "kqvzqt4i" }, 72: { defaultClass: "kqvzqt4j" }, 76: { defaultClass: "kqvzqt4k" }, 80: { defaultClass: "kqvzqt4l" }, 96: { defaultClass: "kqvzqt4m" }, px: { defaultClass: "kqvzqt4n" }, "0.25": { defaultClass: "kqvzqt4o" }, "0.5": { defaultClass: "kqvzqt4p" }, "0.75": { defaultClass: "kqvzqt4q" }, "1.5": { defaultClass: "kqvzqt4r" }, "2.5": { defaultClass: "kqvzqt4s" }, "3.5": { defaultClass: "kqvzqt4t" } } }, marginBottom: { values: { 0: { defaultClass: "kqvzqt4u" }, 1: { defaultClass: "kqvzqt4v" }, 2: { defaultClass: "kqvzqt4w" }, 3: { defaultClass: "kqvzqt4x" }, 4: { defaultClass: "kqvzqt4y" }, 5: { defaultClass: "kqvzqt4z" }, 6: { defaultClass: "kqvzqt50" }, 7: { defaultClass: "kqvzqt51" }, 8: { defaultClass: "kqvzqt52" }, 9: { defaultClass: "kqvzqt53" }, 10: { defaultClass: "kqvzqt54" }, 11: { defaultClass: "kqvzqt55" }, 12: { defaultClass: "kqvzqt56" }, 13: { defaultClass: "kqvzqt57" }, 14: { defaultClass: "kqvzqt58" }, 15: { defaultClass: "kqvzqt59" }, 16: { defaultClass: "kqvzqt5a" }, 20: { defaultClass: "kqvzqt5b" }, 24: { defaultClass: "kqvzqt5c" }, 28: { defaultClass: "kqvzqt5d" }, 32: { defaultClass: "kqvzqt5e" }, 36: { defaultClass: "kqvzqt5f" }, 40: { defaultClass: "kqvzqt5g" }, 44: { defaultClass: "kqvzqt5h" }, 48: { defaultClass: "kqvzqt5i" }, 52: { defaultClass: "kqvzqt5j" }, 56: { defaultClass: "kqvzqt5k" }, 60: { defaultClass: "kqvzqt5l" }, 64: { defaultClass: "kqvzqt5m" }, 68: { defaultClass: "kqvzqt5n" }, 72: { defaultClass: "kqvzqt5o" }, 76: { defaultClass: "kqvzqt5p" }, 80: { defaultClass: "kqvzqt5q" }, 96: { defaultClass: "kqvzqt5r" }, px: { defaultClass: "kqvzqt5s" }, "0.25": { defaultClass: "kqvzqt5t" }, "0.5": { defaultClass: "kqvzqt5u" }, "0.75": { defaultClass: "kqvzqt5v" }, "1.5": { defaultClass: "kqvzqt5w" }, "2.5": { defaultClass: "kqvzqt5x" }, "3.5": { defaultClass: "kqvzqt5y" } } }, marginLeft: { values: { 0: { defaultClass: "kqvzqt5z" }, 1: { defaultClass: "kqvzqt60" }, 2: { defaultClass: "kqvzqt61" }, 3: { defaultClass: "kqvzqt62" }, 4: { defaultClass: "kqvzqt63" }, 5: { defaultClass: "kqvzqt64" }, 6: { defaultClass: "kqvzqt65" }, 7: { defaultClass: "kqvzqt66" }, 8: { defaultClass: "kqvzqt67" }, 9: { defaultClass: "kqvzqt68" }, 10: { defaultClass: "kqvzqt69" }, 11: { defaultClass: "kqvzqt6a" }, 12: { defaultClass: "kqvzqt6b" }, 13: { defaultClass: "kqvzqt6c" }, 14: { defaultClass: "kqvzqt6d" }, 15: { defaultClass: "kqvzqt6e" }, 16: { defaultClass: "kqvzqt6f" }, 20: { defaultClass: "kqvzqt6g" }, 24: { defaultClass: "kqvzqt6h" }, 28: { defaultClass: "kqvzqt6i" }, 32: { defaultClass: "kqvzqt6j" }, 36: { defaultClass: "kqvzqt6k" }, 40: { defaultClass: "kqvzqt6l" }, 44: { defaultClass: "kqvzqt6m" }, 48: { defaultClass: "kqvzqt6n" }, 52: { defaultClass: "kqvzqt6o" }, 56: { defaultClass: "kqvzqt6p" }, 60: { defaultClass: "kqvzqt6q" }, 64: { defaultClass: "kqvzqt6r" }, 68: { defaultClass: "kqvzqt6s" }, 72: { defaultClass: "kqvzqt6t" }, 76: { defaultClass: "kqvzqt6u" }, 80: { defaultClass: "kqvzqt6v" }, 96: { defaultClass: "kqvzqt6w" }, px: { defaultClass: "kqvzqt6x" }, "0.25": { defaultClass: "kqvzqt6y" }, "0.5": { defaultClass: "kqvzqt6z" }, "0.75": { defaultClass: "kqvzqt70" }, "1.5": { defaultClass: "kqvzqt71" }, "2.5": { defaultClass: "kqvzqt72" }, "3.5": { defaultClass: "kqvzqt73" } } }, marginRight: { values: { 0: { defaultClass: "kqvzqt74" }, 1: { defaultClass: "kqvzqt75" }, 2: { defaultClass: "kqvzqt76" }, 3: { defaultClass: "kqvzqt77" }, 4: { defaultClass: "kqvzqt78" }, 5: { defaultClass: "kqvzqt79" }, 6: { defaultClass: "kqvzqt7a" }, 7: { defaultClass: "kqvzqt7b" }, 8: { defaultClass: "kqvzqt7c" }, 9: { defaultClass: "kqvzqt7d" }, 10: { defaultClass: "kqvzqt7e" }, 11: { defaultClass: "kqvzqt7f" }, 12: { defaultClass: "kqvzqt7g" }, 13: { defaultClass: "kqvzqt7h" }, 14: { defaultClass: "kqvzqt7i" }, 15: { defaultClass: "kqvzqt7j" }, 16: { defaultClass: "kqvzqt7k" }, 20: { defaultClass: "kqvzqt7l" }, 24: { defaultClass: "kqvzqt7m" }, 28: { defaultClass: "kqvzqt7n" }, 32: { defaultClass: "kqvzqt7o" }, 36: { defaultClass: "kqvzqt7p" }, 40: { defaultClass: "kqvzqt7q" }, 44: { defaultClass: "kqvzqt7r" }, 48: { defaultClass: "kqvzqt7s" }, 52: { defaultClass: "kqvzqt7t" }, 56: { defaultClass: "kqvzqt7u" }, 60: { defaultClass: "kqvzqt7v" }, 64: { defaultClass: "kqvzqt7w" }, 68: { defaultClass: "kqvzqt7x" }, 72: { defaultClass: "kqvzqt7y" }, 76: { defaultClass: "kqvzqt7z" }, 80: { defaultClass: "kqvzqt80" }, 96: { defaultClass: "kqvzqt81" }, px: { defaultClass: "kqvzqt82" }, "0.25": { defaultClass: "kqvzqt83" }, "0.5": { defaultClass: "kqvzqt84" }, "0.75": { defaultClass: "kqvzqt85" }, "1.5": { defaultClass: "kqvzqt86" }, "2.5": { defaultClass: "kqvzqt87" }, "3.5": { defaultClass: "kqvzqt88" } } } } });
var hu = du({ defaultClassName: "_1qam6z30", variantClassNames: { size: { xs: "_1qam6z31", sm: "_1qam6z32", base: "_1qam6z33", xl: "_1qam6z34", "2xl-title": "_1qam6z35" }, weight: { medium: "_1qam6z36", semibold: "_1qam6z37", bold: "_1qam6z38" }, color: { contrast: "_1qam6z39", tertiary: "_1qam6z3a", placeholder: "_1qam6z3b", white: "_1qam6z3c", success: "_1qam6z3d", failure: "_1qam6z3e" } }, defaultVariants: { size: "base", weight: "medium" }, compoundVariants: [] });
const bu = {
  text: {}
}, So = He(bu);
So.displayName = "SlashIDTextContext";
const Cu = ({ text: e, children: t }) => {
  const n = ce(() => ({
    text: e
  }), [e]);
  return /* @__PURE__ */ i.jsx(So.Provider, { value: n, children: t });
};
function yu() {
  const { text: e } = D.useContext(So);
  return e;
}
const Bn = {
  opening: "{{",
  closing: "}}"
};
function ai(e, t) {
  return e.includes(Bn.opening) ? Object.keys(t).reduce(
    (o, r) => o.replace(
      `${Bn.opening}${r}${Bn.closing}`,
      t[r]
    ),
    e
  ) : e;
}
const wu = ({
  as: e,
  t,
  tokens: n,
  variant: o,
  className: r,
  children: a
}) => {
  const s = yu(), c = e || "p";
  return /* @__PURE__ */ i.jsxs(
    c,
    {
      className: ee(
        "sid-text",
        `sid-text--${e}`,
        hu(o),
        r
      ),
      children: [
        n ? ai(s[t], n) : s[t],
        a || null
      ]
    }
  );
};
function Er(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
const ao = "dismissableLayer.update", xu = "dismissableLayer.pointerDownOutside", _u = "dismissableLayer.focusOutside";
let qr;
const $u = /* @__PURE__ */ He({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ku = /* @__PURE__ */ J((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...d } = e, f = Mt($u), [u, C] = U(null), v = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, b] = U({}), p = he(
    t,
    (S) => C(S)
  ), y = Array.from(f.layers), [h] = [
    ...f.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = y.indexOf(h), w = u ? y.indexOf(u) : -1, _ = f.layersWithOutsidePointerEventsDisabled.size > 0, k = w >= g, x = Su((S) => {
    const I = S.target, j = [
      ...f.branches
    ].some(
      (L) => L.contains(I)
    );
    !k || j || (a == null || a(S), c == null || c(S), S.defaultPrevented || l == null || l());
  }, v), $ = Eu((S) => {
    const I = S.target;
    [
      ...f.branches
    ].some(
      (L) => L.contains(I)
    ) || (s == null || s(S), c == null || c(S), S.defaultPrevented || l == null || l());
  }, v);
  return Ia((S) => {
    w === f.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && l && (S.preventDefault(), l()));
  }, v), V(() => {
    if (u)
      return o && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (qr = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), Pr(), () => {
        o && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = qr);
      };
  }, [
    u,
    v,
    o,
    f
  ]), V(() => () => {
    u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), Pr());
  }, [
    u,
    f
  ]), V(() => {
    const S = () => b({});
    return document.addEventListener(ao, S), () => document.removeEventListener(ao, S);
  }, []), /* @__PURE__ */ P(le.div, M({}, d, {
    ref: p,
    style: {
      pointerEvents: _ ? k ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: oe(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: oe(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: oe(e.onPointerDownCapture, x.onPointerDownCapture)
  }));
});
function Su(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Se(e), o = X(!1), r = X(() => {
  });
  return V(() => {
    const a = (c) => {
      if (c.target && !o.current) {
        let d = function() {
          ii(xu, n, l, {
            discrete: !0
          });
        };
        const l = {
          originalEvent: c
        };
        c.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = d, t.addEventListener("click", r.current, {
          once: !0
        })) : d();
      }
      o.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Eu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Se(e), o = X(!1);
  return V(() => {
    const r = (a) => {
      a.target && !o.current && ii(_u, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Pr() {
  const e = new CustomEvent(ao);
  document.dispatchEvent(e);
}
function ii(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? Sa(r, a) : r.dispatchEvent(a);
}
const Hn = "focusScope.autoFocusOnMount", Un = "focusScope.autoFocusOnUnmount", Tr = {
  bubbles: !1,
  cancelable: !0
}, qu = /* @__PURE__ */ J((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: a, ...s } = e, [c, l] = U(null), d = Se(r), f = Se(a), u = X(null), C = he(
    t,
    (p) => l(p)
  ), v = X({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  V(() => {
    if (o) {
      let p = function(w) {
        if (v.paused || !c)
          return;
        const _ = w.target;
        c.contains(_) ? u.current = _ : et(u.current, {
          select: !0
        });
      }, y = function(w) {
        if (v.paused || !c)
          return;
        const _ = w.relatedTarget;
        _ !== null && (c.contains(_) || et(u.current, {
          select: !0
        }));
      }, h = function(w) {
        const _ = document.activeElement;
        for (const k of w)
          k.removedNodes.length > 0 && (c != null && c.contains(_) || et(c));
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const g = new MutationObserver(h);
      return c && g.observe(c, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), g.disconnect();
      };
    }
  }, [
    o,
    c,
    v.paused
  ]), V(() => {
    if (c) {
      jr.add(v);
      const p = document.activeElement;
      if (!c.contains(p)) {
        const h = new CustomEvent(Hn, Tr);
        c.addEventListener(Hn, d), c.dispatchEvent(h), h.defaultPrevented || (Pu(Ru(si(c)), {
          select: !0
        }), document.activeElement === p && et(c));
      }
      return () => {
        c.removeEventListener(Hn, d), setTimeout(() => {
          const h = new CustomEvent(Un, Tr);
          c.addEventListener(Un, f), c.dispatchEvent(h), h.defaultPrevented || et(p ?? document.body, {
            select: !0
          }), c.removeEventListener(Un, f), jr.remove(v);
        }, 0);
      };
    }
  }, [
    c,
    d,
    f,
    v
  ]);
  const b = G((p) => {
    if (!n && !o || v.paused)
      return;
    const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, h = document.activeElement;
    if (y && h) {
      const g = p.currentTarget, [w, _] = Tu(g);
      w && _ ? !p.shiftKey && h === _ ? (p.preventDefault(), n && et(w, {
        select: !0
      })) : p.shiftKey && h === w && (p.preventDefault(), n && et(_, {
        select: !0
      })) : h === g && p.preventDefault();
    }
  }, [
    n,
    o,
    v.paused
  ]);
  return /* @__PURE__ */ P(le.div, M({
    tabIndex: -1
  }, s, {
    ref: C,
    onKeyDown: b
  }));
});
function Pu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (et(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Tu(e) {
  const t = si(e), n = Or(t, e), o = Or(t.reverse(), e);
  return [
    n,
    o
  ];
}
function si(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Or(e, t) {
  for (const n of e)
    if (!Ou(n, {
      upTo: t
    }))
      return n;
}
function Ou(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function ju(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function et(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && ju(e) && t && e.select();
  }
}
const jr = Lu();
function Lu() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Lr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Lr(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Lr(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Ru(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Iu = ["top", "right", "bottom", "left"], tt = Math.min, Pe = Math.max, an = Math.round, Zt = Math.floor, nt = (e) => ({
  x: e,
  y: e
}), Au = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mu = {
  start: "end",
  end: "start"
};
function io(e, t, n) {
  return Pe(e, tt(t, n));
}
function We(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ge(e) {
  return e.split("-")[0];
}
function _t(e) {
  return e.split("-")[1];
}
function Eo(e) {
  return e === "x" ? "y" : "x";
}
function qo(e) {
  return e === "y" ? "height" : "width";
}
function $t(e) {
  return ["top", "bottom"].includes(Ge(e)) ? "y" : "x";
}
function Po(e) {
  return Eo($t(e));
}
function Nu(e, t, n) {
  n === void 0 && (n = !1);
  const o = _t(e), r = Po(e), a = qo(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = sn(s)), [s, sn(s)];
}
function zu(e) {
  const t = sn(e);
  return [so(e), t, so(t)];
}
function so(e) {
  return e.replace(/start|end/g, (t) => Mu[t]);
}
function Du(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Fu(e, t, n, o) {
  const r = _t(e);
  let a = Du(Ge(e), n === "start", o);
  return r && (a = a.map((s) => s + "-" + r), t && (a = a.concat(a.map(so)))), a;
}
function sn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Au[t]);
}
function Vu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ci(e) {
  return typeof e != "number" ? Vu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function cn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Rr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = $t(t), s = Po(t), c = qo(s), l = Ge(t), d = a === "y", f = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, C = o[c] / 2 - r[c] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      v = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      v = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      v = {
        x: o.x,
        y: o.y
      };
  }
  switch (_t(t)) {
    case "start":
      v[s] -= C * (n && d ? -1 : 1);
      break;
    case "end":
      v[s] += C * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const Bu = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: s
  } = n, c = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: u
  } = Rr(d, o, l), C = o, v = {}, b = 0;
  for (let p = 0; p < c.length; p++) {
    const {
      name: y,
      fn: h
    } = c[p], {
      x: g,
      y: w,
      data: _,
      reset: k
    } = await h({
      x: f,
      y: u,
      initialPlacement: o,
      placement: C,
      strategy: r,
      middlewareData: v,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (f = g ?? f, u = w ?? u, v = {
      ...v,
      [y]: {
        ...v[y],
        ..._
      }
    }, k && b <= 50) {
      b++, typeof k == "object" && (k.placement && (C = k.placement), k.rects && (d = k.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: r
      }) : k.rects), {
        x: f,
        y: u
      } = Rr(d, C, l)), p = -1;
      continue;
    }
  }
  return {
    x: f,
    y: u,
    placement: C,
    strategy: r,
    middlewareData: v
  };
};
async function Rt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: s,
    elements: c,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: C = !1,
    padding: v = 0
  } = We(t, e), b = ci(v), y = c[C ? u === "floating" ? "reference" : "floating" : u], h = cn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), g = u === "floating" ? {
    ...s.floating,
    x: o,
    y: r
  } : s.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = cn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: l
  }) : g);
  return {
    top: (h.top - k.top + b.top) / _.y,
    bottom: (k.bottom - h.bottom + b.bottom) / _.y,
    left: (h.left - k.left + b.left) / _.x,
    right: (k.right - h.right + b.right) / _.x
  };
}
const Ir = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: a,
      platform: s,
      elements: c,
      middlewareData: l
    } = t, {
      element: d,
      padding: f = 0
    } = We(e, t) || {};
    if (d == null)
      return {};
    const u = ci(f), C = {
      x: n,
      y: o
    }, v = Po(r), b = qo(v), p = await s.getDimensions(d), y = v === "y", h = y ? "top" : "left", g = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", _ = a.reference[b] + a.reference[v] - C[v] - a.floating[b], k = C[v] - a.reference[v], x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let $ = x ? x[w] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(x))) && ($ = c.floating[w] || a.floating[b]);
    const S = _ / 2 - k / 2, I = $ / 2 - p[b] / 2 - 1, j = tt(u[h], I), L = tt(u[g], I), F = j, B = $ - p[b] - L, H = $ / 2 - p[b] / 2 + S, A = io(F, H, B), K = !l.arrow && _t(r) != null && H != A && a.reference[b] / 2 - (H < F ? j : L) - p[b] / 2 < 0, re = K ? H < F ? H - F : H - B : 0;
    return {
      [v]: C[v] + re,
      data: {
        [v]: A,
        centerOffset: H - A - re,
        ...K && {
          alignmentOffset: re
        }
      },
      reset: K
    };
  }
}), Hu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: a,
        rects: s,
        initialPlacement: c,
        platform: l,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: C,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: p = !0,
        ...y
      } = We(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const h = Ge(r), g = Ge(c) === c, w = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), _ = C || (g || !p ? [sn(c)] : zu(c));
      !C && b !== "none" && _.push(...Fu(c, p, b, w));
      const k = [c, ..._], x = await Rt(t, y), $ = [];
      let S = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (f && $.push(x[h]), u) {
        const F = Nu(r, s, w);
        $.push(x[F[0]], x[F[1]]);
      }
      if (S = [...S, {
        placement: r,
        overflows: $
      }], !$.every((F) => F <= 0)) {
        var I, j;
        const F = (((I = a.flip) == null ? void 0 : I.index) || 0) + 1, B = k[F];
        if (B)
          return {
            data: {
              index: F,
              overflows: S
            },
            reset: {
              placement: B
            }
          };
        let H = (j = S.filter((A) => A.overflows[0] <= 0).sort((A, K) => A.overflows[1] - K.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!H)
          switch (v) {
            case "bestFit": {
              var L;
              const A = (L = S.map((K) => [K.placement, K.overflows.filter((re) => re > 0).reduce((re, fe) => re + fe, 0)]).sort((K, re) => K[1] - re[1])[0]) == null ? void 0 : L[0];
              A && (H = A);
              break;
            }
            case "initialPlacement":
              H = c;
              break;
          }
        if (r !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function Ar(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Mr(e) {
  return Iu.some((t) => e[t] >= 0);
}
const Uu = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = We(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Rt(t, {
            ...r,
            elementContext: "reference"
          }), s = Ar(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Mr(s)
            }
          };
        }
        case "escaped": {
          const a = await Rt(t, {
            ...r,
            altBoundary: !0
          }), s = Ar(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Mr(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Wu(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = Ge(n), c = _t(n), l = $t(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, f = a && l ? -1 : 1, u = We(t, e);
  let {
    mainAxis: C,
    crossAxis: v,
    alignmentAxis: b
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return c && typeof b == "number" && (v = c === "end" ? b * -1 : b), l ? {
    x: v * f,
    y: C * d
  } : {
    x: C * d,
    y: v * f
  };
}
const Gu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, r = await Wu(t, e);
      return {
        x: n + r.x,
        y: o + r.y,
        data: r
      };
    }
  };
}, Ku = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: h,
              y: g
            } = y;
            return {
              x: h,
              y: g
            };
          }
        },
        ...l
      } = We(e, t), d = {
        x: n,
        y: o
      }, f = await Rt(t, l), u = $t(Ge(r)), C = Eo(u);
      let v = d[C], b = d[u];
      if (a) {
        const y = C === "y" ? "top" : "left", h = C === "y" ? "bottom" : "right", g = v + f[y], w = v - f[h];
        v = io(g, v, w);
      }
      if (s) {
        const y = u === "y" ? "top" : "left", h = u === "y" ? "bottom" : "right", g = b + f[y], w = b - f[h];
        b = io(g, b, w);
      }
      const p = c.fn({
        ...t,
        [C]: v,
        [u]: b
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o
        }
      };
    }
  };
}, Zu = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: a,
        middlewareData: s
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = We(e, t), f = {
        x: n,
        y: o
      }, u = $t(r), C = Eo(u);
      let v = f[C], b = f[u];
      const p = We(c, t), y = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const w = C === "y" ? "height" : "width", _ = a.reference[C] - a.floating[w] + y.mainAxis, k = a.reference[C] + a.reference[w] - y.mainAxis;
        v < _ ? v = _ : v > k && (v = k);
      }
      if (d) {
        var h, g;
        const w = C === "y" ? "width" : "height", _ = ["top", "left"].includes(Ge(r)), k = a.reference[u] - a.floating[w] + (_ && ((h = s.offset) == null ? void 0 : h[u]) || 0) + (_ ? 0 : y.crossAxis), x = a.reference[u] + a.reference[w] + (_ ? 0 : ((g = s.offset) == null ? void 0 : g[u]) || 0) - (_ ? y.crossAxis : 0);
        b < k ? b = k : b > x && (b = x);
      }
      return {
        [C]: v,
        [u]: b
      };
    }
  };
}, Yu = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...c
      } = We(e, t), l = await Rt(t, c), d = Ge(n), f = _t(n), u = $t(n) === "y", {
        width: C,
        height: v
      } = o.floating;
      let b, p;
      d === "top" || d === "bottom" ? (b = d, p = f === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = d, b = f === "end" ? "top" : "bottom");
      const y = v - l[b], h = C - l[p], g = !t.middlewareData.shift;
      let w = y, _ = h;
      if (u) {
        const x = C - l.left - l.right;
        _ = f || g ? tt(h, x) : x;
      } else {
        const x = v - l.top - l.bottom;
        w = f || g ? tt(y, x) : x;
      }
      if (g && !f) {
        const x = Pe(l.left, 0), $ = Pe(l.right, 0), S = Pe(l.top, 0), I = Pe(l.bottom, 0);
        u ? _ = C - 2 * (x !== 0 || $ !== 0 ? x + $ : Pe(l.left, l.right)) : w = v - 2 * (S !== 0 || I !== 0 ? S + I : Pe(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: w
      });
      const k = await r.getDimensions(a.floating);
      return C !== k.width || v !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ot(e) {
  return li(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xe(e) {
  var t;
  return (t = (li(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function li(e) {
  return e instanceof Node || e instanceof Te(e).Node;
}
function Ke(e) {
  return e instanceof Element || e instanceof Te(e).Element;
}
function De(e) {
  return e instanceof HTMLElement || e instanceof Te(e).HTMLElement;
}
function Nr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
function zt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Xu(e) {
  return ["table", "td", "th"].includes(ot(e));
}
function To(e) {
  const t = Oo(), n = je(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ju(e) {
  let t = Ct(e);
  for (; De(t) && !wn(t); ) {
    if (To(t))
      return t;
    t = Ct(t);
  }
  return null;
}
function Oo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wn(e) {
  return ["html", "body", "#document"].includes(ot(e));
}
function je(e) {
  return Te(e).getComputedStyle(e);
}
function xn(e) {
  return Ke(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ct(e) {
  if (ot(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Nr(e) && e.host || // Fallback.
    Xe(e)
  );
  return Nr(t) ? t.host : t;
}
function di(e) {
  const t = Ct(e);
  return wn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : De(t) && zt(t) ? t : di(t);
}
function It(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = di(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = Te(r);
  return a ? t.concat(s, s.visualViewport || [], zt(r) ? r : [], s.frameElement && n ? It(s.frameElement) : []) : t.concat(r, It(r, [], n));
}
function ui(e) {
  const t = je(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = De(e), a = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, c = an(n) !== a || an(o) !== s;
  return c && (n = a, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function jo(e) {
  return Ke(e) ? e : e.contextElement;
}
function gt(e) {
  const t = jo(e);
  if (!De(t))
    return nt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = ui(t);
  let s = (a ? an(n.width) : n.width) / o, c = (a ? an(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Qu = /* @__PURE__ */ nt(0);
function fi(e) {
  const t = Te(e);
  return !Oo() || !t.visualViewport ? Qu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ef(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Te(e) ? !1 : t;
}
function at(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = jo(e);
  let s = nt(1);
  t && (o ? Ke(o) && (s = gt(o)) : s = gt(e));
  const c = ef(a, n, o) ? fi(a) : nt(0);
  let l = (r.left + c.x) / s.x, d = (r.top + c.y) / s.y, f = r.width / s.x, u = r.height / s.y;
  if (a) {
    const C = Te(a), v = o && Ke(o) ? Te(o) : o;
    let b = C.frameElement;
    for (; b && o && v !== C; ) {
      const p = gt(b), y = b.getBoundingClientRect(), h = je(b), g = y.left + (b.clientLeft + parseFloat(h.paddingLeft)) * p.x, w = y.top + (b.clientTop + parseFloat(h.paddingTop)) * p.y;
      l *= p.x, d *= p.y, f *= p.x, u *= p.y, l += g, d += w, b = Te(b).frameElement;
    }
  }
  return cn({
    width: f,
    height: u,
    x: l,
    y: d
  });
}
function tf(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const r = De(n), a = Xe(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = nt(1);
  const l = nt(0);
  if ((r || !r && o !== "fixed") && ((ot(n) !== "body" || zt(a)) && (s = xn(n)), De(n))) {
    const d = at(n);
    c = gt(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + l.x,
    y: t.y * c.y - s.scrollTop * c.y + l.y
  };
}
function nf(e) {
  return Array.from(e.getClientRects());
}
function pi(e) {
  return at(Xe(e)).left + xn(e).scrollLeft;
}
function of(e) {
  const t = Xe(e), n = xn(e), o = e.ownerDocument.body, r = Pe(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = Pe(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + pi(e);
  const c = -n.scrollTop;
  return je(o).direction === "rtl" && (s += Pe(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: s,
    y: c
  };
}
function rf(e, t) {
  const n = Te(e), o = Xe(e), r = n.visualViewport;
  let a = o.clientWidth, s = o.clientHeight, c = 0, l = 0;
  if (r) {
    a = r.width, s = r.height;
    const d = Oo();
    (!d || d && t === "fixed") && (c = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function af(e, t) {
  const n = at(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, a = De(e) ? gt(e) : nt(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, l = r * a.x, d = o * a.y;
  return {
    width: s,
    height: c,
    x: l,
    y: d
  };
}
function zr(e, t, n) {
  let o;
  if (t === "viewport")
    o = rf(e, n);
  else if (t === "document")
    o = of(Xe(e));
  else if (Ke(t))
    o = af(t, n);
  else {
    const r = fi(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return cn(o);
}
function vi(e, t) {
  const n = Ct(e);
  return n === t || !Ke(n) || wn(n) ? !1 : je(n).position === "fixed" || vi(n, t);
}
function sf(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = It(e, [], !1).filter((c) => Ke(c) && ot(c) !== "body"), r = null;
  const a = je(e).position === "fixed";
  let s = a ? Ct(e) : e;
  for (; Ke(s) && !wn(s); ) {
    const c = je(s), l = To(s);
    !l && c.position === "fixed" && (r = null), (a ? !l && !r : !l && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || zt(s) && !l && vi(e, s)) ? o = o.filter((f) => f !== s) : r = c, s = Ct(s);
  }
  return t.set(e, o), o;
}
function cf(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? sf(t, this._c) : [].concat(n), o], c = s[0], l = s.reduce((d, f) => {
    const u = zr(t, f, r);
    return d.top = Pe(u.top, d.top), d.right = tt(u.right, d.right), d.bottom = tt(u.bottom, d.bottom), d.left = Pe(u.left, d.left), d;
  }, zr(t, c, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function lf(e) {
  return ui(e);
}
function df(e, t, n) {
  const o = De(t), r = Xe(t), a = n === "fixed", s = at(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = nt(0);
  if (o || !o && !a)
    if ((ot(t) !== "body" || zt(r)) && (c = xn(t)), o) {
      const d = at(t, !0, a, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else
      r && (l.x = pi(r));
  return {
    x: s.left + c.scrollLeft - l.x,
    y: s.top + c.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Dr(e, t) {
  return !De(e) || je(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function mi(e, t) {
  const n = Te(e);
  if (!De(e))
    return n;
  let o = Dr(e, t);
  for (; o && Xu(o) && je(o).position === "static"; )
    o = Dr(o, t);
  return o && (ot(o) === "html" || ot(o) === "body" && je(o).position === "static" && !To(o)) ? n : o || Ju(e) || n;
}
const uf = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: o
  } = e;
  const r = this.getOffsetParent || mi, a = this.getDimensions;
  return {
    reference: df(t, await r(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function ff(e) {
  return je(e).direction === "rtl";
}
const pf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tf,
  getDocumentElement: Xe,
  getClippingRect: cf,
  getOffsetParent: mi,
  getElementRects: uf,
  getClientRects: nf,
  getDimensions: lf,
  getScale: gt,
  isElement: Ke,
  isRTL: ff
};
function vf(e, t) {
  let n = null, o;
  const r = Xe(e);
  function a() {
    clearTimeout(o), n && n.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), a();
    const {
      left: d,
      top: f,
      width: u,
      height: C
    } = e.getBoundingClientRect();
    if (c || t(), !u || !C)
      return;
    const v = Zt(f), b = Zt(r.clientWidth - (d + u)), p = Zt(r.clientHeight - (f + C)), y = Zt(d), g = {
      rootMargin: -v + "px " + -b + "px " + -p + "px " + -y + "px",
      threshold: Pe(0, tt(1, l)) || 1
    };
    let w = !0;
    function _(k) {
      const x = k[0].intersectionRatio;
      if (x !== l) {
        if (!w)
          return s();
        x ? s(!1, x) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...g,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, g);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function mf(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, d = jo(e), f = r || a ? [...d ? It(d) : [], ...It(t)] : [];
  f.forEach((h) => {
    r && h.addEventListener("scroll", n, {
      passive: !0
    }), a && h.addEventListener("resize", n);
  });
  const u = d && c ? vf(d, n) : null;
  let C = -1, v = null;
  s && (v = new ResizeObserver((h) => {
    let [g] = h;
    g && g.target === d && v && (v.unobserve(t), cancelAnimationFrame(C), C = requestAnimationFrame(() => {
      v && v.observe(t);
    })), n();
  }), d && !l && v.observe(d), v.observe(t));
  let b, p = l ? at(e) : null;
  l && y();
  function y() {
    const h = at(e);
    p && (h.x !== p.x || h.y !== p.y || h.width !== p.width || h.height !== p.height) && n(), p = h, b = requestAnimationFrame(y);
  }
  return n(), () => {
    f.forEach((h) => {
      r && h.removeEventListener("scroll", n), a && h.removeEventListener("resize", n);
    }), u && u(), v && v.disconnect(), v = null, l && cancelAnimationFrame(b);
  };
}
const gf = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: pf,
    ...n
  }, a = {
    ...r.platform,
    _c: o
  };
  return Bu(e, t, {
    ...r,
    platform: a
  });
}, hf = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Ir({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Ir({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var en = typeof document < "u" ? jt : V;
function ln(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!ln(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const a = r[o];
      if (!(a === "_owner" && e.$$typeof) && !ln(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function gi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fr(e, t) {
  const n = gi(e);
  return Math.round(t * n) / n;
}
function Vr(e) {
  const t = Z.useRef(e);
  return en(() => {
    t.current = e;
  }), t;
}
function bf(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: d
  } = e, [f, u] = Z.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [C, v] = Z.useState(o);
  ln(C, o) || v(o);
  const [b, p] = Z.useState(null), [y, h] = Z.useState(null), g = Z.useCallback((K) => {
    K != x.current && (x.current = K, p(K));
  }, [p]), w = Z.useCallback((K) => {
    K !== $.current && ($.current = K, h(K));
  }, [h]), _ = a || b, k = s || y, x = Z.useRef(null), $ = Z.useRef(null), S = Z.useRef(f), I = Vr(l), j = Vr(r), L = Z.useCallback(() => {
    if (!x.current || !$.current)
      return;
    const K = {
      placement: t,
      strategy: n,
      middleware: C
    };
    j.current && (K.platform = j.current), gf(x.current, $.current, K).then((re) => {
      const fe = {
        ...re,
        isPositioned: !0
      };
      F.current && !ln(S.current, fe) && (S.current = fe, As.flushSync(() => {
        u(fe);
      }));
    });
  }, [C, t, n, j]);
  en(() => {
    d === !1 && S.current.isPositioned && (S.current.isPositioned = !1, u((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [d]);
  const F = Z.useRef(!1);
  en(() => (F.current = !0, () => {
    F.current = !1;
  }), []), en(() => {
    if (_ && (x.current = _), k && ($.current = k), _ && k) {
      if (I.current)
        return I.current(_, k, L);
      L();
    }
  }, [_, k, L, I]);
  const B = Z.useMemo(() => ({
    reference: x,
    floating: $,
    setReference: g,
    setFloating: w
  }), [g, w]), H = Z.useMemo(() => ({
    reference: _,
    floating: k
  }), [_, k]), A = Z.useMemo(() => {
    const K = {
      position: n,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return K;
    const re = Fr(H.floating, f.x), fe = Fr(H.floating, f.y);
    return c ? {
      ...K,
      transform: "translate(" + re + "px, " + fe + "px)",
      ...gi(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: re,
      top: fe
    };
  }, [n, c, H.floating, f.x, f.y]);
  return Z.useMemo(() => ({
    ...f,
    update: L,
    refs: B,
    elements: H,
    floatingStyles: A
  }), [f, L, B, H, A]);
}
const hi = "Popper", [bi, Ci] = Ze(hi), [Cf, yi] = bi(hi), yf = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = U(null);
  return /* @__PURE__ */ P(Cf, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, wf = "PopperAnchor", xf = /* @__PURE__ */ J((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, a = yi(wf, n), s = X(null), c = he(t, s);
  return V(() => {
    a.onAnchorChange((o == null ? void 0 : o.current) || s.current);
  }), o ? null : /* @__PURE__ */ P(le.div, M({}, r, {
    ref: c
  }));
}), wi = "PopperContent", [_f, Jp] = bi(wi), $f = /* @__PURE__ */ J((e, t) => {
  var n, o, r, a, s, c, l, d;
  const { __scopePopper: f, side: u = "bottom", sideOffset: C = 0, align: v = "center", alignOffset: b = 0, arrowPadding: p = 0, collisionBoundary: y = [], collisionPadding: h = 0, sticky: g = "partial", hideWhenDetached: w = !1, avoidCollisions: _ = !0, onPlaced: k, ...x } = e, $ = yi(wi, f), [S, I] = U(null), j = he(
    t,
    (_e) => I(_e)
  ), [L, F] = U(null), B = ni(L), H = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, A = (o = B == null ? void 0 : B.height) !== null && o !== void 0 ? o : 0, K = u + (v !== "center" ? "-" + v : ""), re = typeof h == "number" ? h : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...h
  }, fe = Array.isArray(y) ? y : [
    y
  ], q = fe.length > 0, E = {
    padding: re,
    boundary: fe.filter(kf),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: q
  }, { refs: O, floatingStyles: W, placement: N, isPositioned: te, middlewareData: pe } = bf({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: K,
    whileElementsMounted: mf,
    elements: {
      reference: $.anchor
    },
    middleware: [
      Gu({
        mainAxis: C + A,
        alignmentAxis: b
      }),
      _ && Ku({
        mainAxis: !0,
        crossAxis: !1,
        limiter: g === "partial" ? Zu() : void 0,
        ...E
      }),
      _ && Hu({
        ...E
      }),
      Yu({
        ...E,
        apply: ({ elements: _e, rects: Ae, availableWidth: Me, availableHeight: Je }) => {
          const { width: Bt, height: lt } = Ae.reference, dt = _e.floating.style;
          dt.setProperty("--radix-popper-available-width", `${Me}px`), dt.setProperty("--radix-popper-available-height", `${Je}px`), dt.setProperty("--radix-popper-anchor-width", `${Bt}px`), dt.setProperty("--radix-popper-anchor-height", `${lt}px`);
        }
      }),
      L && hf({
        element: L,
        padding: p
      }),
      Sf({
        arrowWidth: H,
        arrowHeight: A
      }),
      w && Uu({
        strategy: "referenceHidden"
      })
    ]
  }), [ve, z] = xi(N), Y = Se(k);
  Ee(() => {
    te && (Y == null || Y());
  }, [
    te,
    Y
  ]);
  const be = (r = pe.arrow) === null || r === void 0 ? void 0 : r.x, ae = (a = pe.arrow) === null || a === void 0 ? void 0 : a.y, ne = ((s = pe.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [de, $e] = U();
  return Ee(() => {
    S && $e(window.getComputedStyle(S).zIndex);
  }, [
    S
  ]), /* @__PURE__ */ P("div", {
    ref: O.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...W,
      transform: te ? W.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: de,
      "--radix-popper-transform-origin": [
        (c = pe.transformOrigin) === null || c === void 0 ? void 0 : c.x,
        (l = pe.transformOrigin) === null || l === void 0 ? void 0 : l.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ P(_f, {
    scope: f,
    placedSide: ve,
    onArrowChange: F,
    arrowX: be,
    arrowY: ae,
    shouldHideArrow: ne
  }, /* @__PURE__ */ P(le.div, M({
    "data-side": ve,
    "data-align": z
  }, x, {
    ref: j,
    style: {
      ...x.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: te ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (d = pe.hide) !== null && d !== void 0 && d.referenceHidden ? 0 : void 0
    }
  }))));
});
function kf(e) {
  return e !== null;
}
const Sf = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, a, s;
    const { placement: c, rects: l, middlewareData: d } = t, u = ((n = d.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, C = u ? 0 : e.arrowWidth, v = u ? 0 : e.arrowHeight, [b, p] = xi(c), y = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[p], h = ((o = (r = d.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + C / 2, g = ((a = (s = d.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + v / 2;
    let w = "", _ = "";
    return b === "bottom" ? (w = u ? y : `${h}px`, _ = `${-v}px`) : b === "top" ? (w = u ? y : `${h}px`, _ = `${l.floating.height + v}px`) : b === "right" ? (w = `${-v}px`, _ = u ? y : `${g}px`) : b === "left" && (w = `${l.floating.width + v}px`, _ = u ? y : `${g}px`), {
      data: {
        x: w,
        y: _
      }
    };
  }
});
function xi(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Ef = yf, qf = xf, Pf = $f, Tf = /* @__PURE__ */ J((e, t) => /* @__PURE__ */ P(le.span, M({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), Of = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], jf = [
  " ",
  "Enter"
], _n = "Select", [$n, kn, Lf] = Co(_n), [kt, Qp] = Ze(_n, [
  Lf,
  Ci
]), Lo = Ci(), [Rf, it] = kt(_n), [If, Af] = kt(_n), Mf = (e) => {
  const { __scopeSelect: t, children: n, open: o, defaultOpen: r, onOpenChange: a, value: s, defaultValue: c, onValueChange: l, dir: d, name: f, autoComplete: u, disabled: C, required: v } = e, b = Lo(t), [p, y] = U(null), [h, g] = U(null), [w, _] = U(!1), k = hn(d), [x = !1, $] = Ue({
    prop: o,
    defaultProp: r,
    onChange: a
  }), [S, I] = Ue({
    prop: s,
    defaultProp: c,
    onChange: l
  }), j = X(null), L = p ? !!p.closest("form") : !0, [F, B] = U(/* @__PURE__ */ new Set()), H = Array.from(F).map(
    (A) => A.props.value
  ).join(";");
  return /* @__PURE__ */ P(Ef, b, /* @__PURE__ */ P(Rf, {
    required: v,
    scope: t,
    trigger: p,
    onTriggerChange: y,
    valueNode: h,
    onValueNodeChange: g,
    valueNodeHasChildren: w,
    onValueNodeHasChildrenChange: _,
    contentId: ze(),
    value: S,
    onValueChange: I,
    open: x,
    onOpenChange: $,
    dir: k,
    triggerPointerDownPosRef: j,
    disabled: C
  }, /* @__PURE__ */ P($n.Provider, {
    scope: t
  }, /* @__PURE__ */ P(If, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: G((A) => {
      B(
        (K) => new Set(K).add(A)
      );
    }, []),
    onNativeOptionRemove: G((A) => {
      B((K) => {
        const re = new Set(K);
        return re.delete(A), re;
      });
    }, [])
  }, n)), L ? /* @__PURE__ */ P(Si, {
    key: H,
    "aria-hidden": !0,
    required: v,
    tabIndex: -1,
    name: f,
    autoComplete: u,
    value: S,
    onChange: (A) => I(A.target.value),
    disabled: C
  }, S === void 0 ? /* @__PURE__ */ P("option", {
    value: ""
  }) : null, Array.from(F)) : null));
}, Nf = "SelectTrigger", zf = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, disabled: o = !1, ...r } = e, a = Lo(n), s = it(Nf, n), c = s.disabled || o, l = he(t, s.onTriggerChange), d = kn(n), [f, u, C] = Ei((b) => {
    const p = d().filter(
      (g) => !g.disabled
    ), y = p.find(
      (g) => g.value === s.value
    ), h = qi(p, b, y);
    h !== void 0 && s.onValueChange(h.value);
  }), v = () => {
    c || (s.onOpenChange(!0), C());
  };
  return /* @__PURE__ */ P(qf, M({
    asChild: !0
  }, a), /* @__PURE__ */ P(le.button, M({
    type: "button",
    role: "combobox",
    "aria-controls": s.contentId,
    "aria-expanded": s.open,
    "aria-required": s.required,
    "aria-autocomplete": "none",
    dir: s.dir,
    "data-state": s.open ? "open" : "closed",
    disabled: c,
    "data-disabled": c ? "" : void 0,
    "data-placeholder": s.value === void 0 ? "" : void 0
  }, r, {
    ref: l,
    onClick: oe(r.onClick, (b) => {
      b.currentTarget.focus();
    }),
    onPointerDown: oe(r.onPointerDown, (b) => {
      const p = b.target;
      p.hasPointerCapture(b.pointerId) && p.releasePointerCapture(b.pointerId), b.button === 0 && b.ctrlKey === !1 && (v(), s.triggerPointerDownPosRef.current = {
        x: Math.round(b.pageX),
        y: Math.round(b.pageY)
      }, b.preventDefault());
    }),
    onKeyDown: oe(r.onKeyDown, (b) => {
      const p = f.current !== "";
      !(b.ctrlKey || b.altKey || b.metaKey) && b.key.length === 1 && u(b.key), !(p && b.key === " ") && Of.includes(b.key) && (v(), b.preventDefault());
    })
  })));
}), Df = "SelectValue", Ff = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, className: o, style: r, children: a, placeholder: s, ...c } = e, l = it(Df, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, u = he(t, l.onValueNodeChange);
  return Ee(() => {
    d(f);
  }, [
    d,
    f
  ]), /* @__PURE__ */ P(le.span, M({}, c, {
    ref: u,
    style: {
      pointerEvents: "none"
    }
  }), l.value === void 0 && s !== void 0 ? s : a);
}), yt = "SelectContent", Vf = /* @__PURE__ */ J((e, t) => {
  const n = it(yt, e.__scopeSelect), [o, r] = U();
  if (Ee(() => {
    r(new DocumentFragment());
  }, []), !n.open) {
    const a = o;
    return a ? /* @__PURE__ */ vo(/* @__PURE__ */ P(_i, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ P($n.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ P("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ P(Bf, M({}, e, {
    ref: t
  }));
}), Be = 10, [_i, St] = kt(yt), Bf = /* @__PURE__ */ J((e, t) => {
  const {
    __scopeSelect: n,
    position: o = "item-aligned",
    onCloseAutoFocus: r,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: c,
    sideOffset: l,
    align: d,
    alignOffset: f,
    arrowPadding: u,
    collisionBoundary: C,
    collisionPadding: v,
    sticky: b,
    hideWhenDetached: p,
    avoidCollisions: y,
    //
    ...h
  } = e, g = it(yt, n), [w, _] = U(null), [k, x] = U(null), $ = he(
    t,
    (z) => _(z)
  ), [S, I] = U(null), [j, L] = U(null), F = kn(n), [B, H] = U(!1), A = X(!1);
  V(() => {
    if (w)
      return Za(w);
  }, [
    w
  ]), Na();
  const K = G((z) => {
    const [Y, ...be] = F().map(
      (de) => de.ref.current
    ), [ae] = be.slice(-1), ne = document.activeElement;
    for (const de of z)
      if (de === ne || (de == null || de.scrollIntoView({
        block: "nearest"
      }), de === Y && k && (k.scrollTop = 0), de === ae && k && (k.scrollTop = k.scrollHeight), de == null || de.focus(), document.activeElement !== ne))
        return;
  }, [
    F,
    k
  ]), re = G(
    () => K([
      S,
      w
    ]),
    [
      K,
      S,
      w
    ]
  );
  V(() => {
    B && re();
  }, [
    B,
    re
  ]);
  const { onOpenChange: fe, triggerPointerDownPosRef: q } = g;
  V(() => {
    if (w) {
      let z = {
        x: 0,
        y: 0
      };
      const Y = (ae) => {
        var ne, de, $e, _e;
        z = {
          x: Math.abs(Math.round(ae.pageX) - ((ne = (de = q.current) === null || de === void 0 ? void 0 : de.x) !== null && ne !== void 0 ? ne : 0)),
          y: Math.abs(Math.round(ae.pageY) - (($e = (_e = q.current) === null || _e === void 0 ? void 0 : _e.y) !== null && $e !== void 0 ? $e : 0))
        };
      }, be = (ae) => {
        z.x <= 10 && z.y <= 10 ? ae.preventDefault() : w.contains(ae.target) || fe(!1), document.removeEventListener("pointermove", Y), q.current = null;
      };
      return q.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", be, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", be, {
          capture: !0
        });
      };
    }
  }, [
    w,
    fe,
    q
  ]), V(() => {
    const z = () => fe(!1);
    return window.addEventListener("blur", z), window.addEventListener("resize", z), () => {
      window.removeEventListener("blur", z), window.removeEventListener("resize", z);
    };
  }, [
    fe
  ]);
  const [E, O] = Ei((z) => {
    const Y = F().filter(
      (ne) => !ne.disabled
    ), be = Y.find(
      (ne) => ne.ref.current === document.activeElement
    ), ae = qi(Y, z, be);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), W = G((z, Y, be) => {
    const ae = !A.current && !be;
    (g.value !== void 0 && g.value === Y || ae) && (I(z), ae && (A.current = !0));
  }, [
    g.value
  ]), N = G(
    () => w == null ? void 0 : w.focus(),
    [
      w
    ]
  ), te = G((z, Y, be) => {
    const ae = !A.current && !be;
    (g.value !== void 0 && g.value === Y || ae) && L(z);
  }, [
    g.value
  ]), pe = o === "popper" ? Br : Hf, ve = pe === Br ? {
    side: c,
    sideOffset: l,
    align: d,
    alignOffset: f,
    arrowPadding: u,
    collisionBoundary: C,
    collisionPadding: v,
    sticky: b,
    hideWhenDetached: p,
    avoidCollisions: y
  } : {};
  return /* @__PURE__ */ P(_i, {
    scope: n,
    content: w,
    viewport: k,
    onViewportChange: x,
    itemRefCallback: W,
    selectedItem: S,
    onItemLeave: N,
    itemTextRefCallback: te,
    focusSelectedItem: re,
    selectedItemText: j,
    position: o,
    isPositioned: B,
    searchRef: E
  }, /* @__PURE__ */ P(Ga, {
    as: bt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ P(qu, {
    asChild: !0,
    trapped: g.open,
    onMountAutoFocus: (z) => {
      z.preventDefault();
    },
    onUnmountAutoFocus: oe(r, (z) => {
      var Y;
      (Y = g.trigger) === null || Y === void 0 || Y.focus({
        preventScroll: !0
      }), z.preventDefault();
    })
  }, /* @__PURE__ */ P(ku, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (z) => z.preventDefault(),
    onDismiss: () => g.onOpenChange(!1)
  }, /* @__PURE__ */ P(pe, M({
    role: "listbox",
    id: g.contentId,
    "data-state": g.open ? "open" : "closed",
    dir: g.dir,
    onContextMenu: (z) => z.preventDefault()
  }, h, ve, {
    onPlaced: () => H(!0),
    ref: $,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...h.style
    },
    onKeyDown: oe(h.onKeyDown, (z) => {
      const Y = z.ctrlKey || z.altKey || z.metaKey;
      if (z.key === "Tab" && z.preventDefault(), !Y && z.key.length === 1 && O(z.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(z.key)) {
        let ae = F().filter(
          (ne) => !ne.disabled
        ).map(
          (ne) => ne.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(z.key) && (ae = ae.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(z.key)) {
          const ne = z.target, de = ae.indexOf(ne);
          ae = ae.slice(de + 1);
        }
        setTimeout(
          () => K(ae)
        ), z.preventDefault();
      }
    })
  }))))));
}), Hf = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, a = it(yt, n), s = St(yt, n), [c, l] = U(null), [d, f] = U(null), u = he(
    t,
    ($) => f($)
  ), C = kn(n), v = X(!1), b = X(!0), { viewport: p, selectedItem: y, selectedItemText: h, focusSelectedItem: g } = s, w = G(() => {
    if (a.trigger && a.valueNode && c && d && p && y && h) {
      const $ = a.trigger.getBoundingClientRect(), S = d.getBoundingClientRect(), I = a.valueNode.getBoundingClientRect(), j = h.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ne = j.left - S.left, de = I.left - ne, $e = $.left - de, _e = $.width + $e, Ae = Math.max(_e, S.width), Me = window.innerWidth - Be, Je = Er(de, [
          Be,
          Me - Ae
        ]);
        c.style.minWidth = _e + "px", c.style.left = Je + "px";
      } else {
        const ne = S.right - j.right, de = window.innerWidth - I.right - ne, $e = window.innerWidth - $.right - de, _e = $.width + $e, Ae = Math.max(_e, S.width), Me = window.innerWidth - Be, Je = Er(de, [
          Be,
          Me - Ae
        ]);
        c.style.minWidth = _e + "px", c.style.right = Je + "px";
      }
      const L = C(), F = window.innerHeight - Be * 2, B = p.scrollHeight, H = window.getComputedStyle(d), A = parseInt(H.borderTopWidth, 10), K = parseInt(H.paddingTop, 10), re = parseInt(H.borderBottomWidth, 10), fe = parseInt(H.paddingBottom, 10), q = A + K + B + fe + re, E = Math.min(y.offsetHeight * 5, q), O = window.getComputedStyle(p), W = parseInt(O.paddingTop, 10), N = parseInt(O.paddingBottom, 10), te = $.top + $.height / 2 - Be, pe = F - te, ve = y.offsetHeight / 2, z = y.offsetTop + ve, Y = A + K + z, be = q - Y;
      if (Y <= te) {
        const ne = y === L[L.length - 1].ref.current;
        c.style.bottom = "0px";
        const de = d.clientHeight - p.offsetTop - p.offsetHeight, $e = Math.max(pe, ve + (ne ? N : 0) + de + re), _e = Y + $e;
        c.style.height = _e + "px";
      } else {
        const ne = y === L[0].ref.current;
        c.style.top = "0px";
        const $e = Math.max(te, A + p.offsetTop + (ne ? W : 0) + ve) + be;
        c.style.height = $e + "px", p.scrollTop = Y - te + p.offsetTop;
      }
      c.style.margin = `${Be}px 0`, c.style.minHeight = E + "px", c.style.maxHeight = F + "px", o == null || o(), requestAnimationFrame(
        () => v.current = !0
      );
    }
  }, [
    C,
    a.trigger,
    a.valueNode,
    c,
    d,
    p,
    y,
    h,
    a.dir,
    o
  ]);
  Ee(
    () => w(),
    [
      w
    ]
  );
  const [_, k] = U();
  Ee(() => {
    d && k(window.getComputedStyle(d).zIndex);
  }, [
    d
  ]);
  const x = G(($) => {
    $ && b.current === !0 && (w(), g == null || g(), b.current = !1);
  }, [
    w,
    g
  ]);
  return /* @__PURE__ */ P(Uf, {
    scope: n,
    contentWrapper: c,
    shouldExpandOnScrollRef: v,
    onScrollButtonChange: x
  }, /* @__PURE__ */ P("div", {
    ref: l,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ P(le.div, M({}, r, {
    ref: u,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...r.style
    }
  }))));
}), Br = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, align: o = "start", collisionPadding: r = Be, ...a } = e, s = Lo(n);
  return /* @__PURE__ */ P(Pf, M({}, s, a, {
    ref: t,
    align: o,
    collisionPadding: r,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [Uf, $i] = kt(yt, {}), Hr = "SelectViewport", Wf = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = St(Hr, n), a = $i(Hr, n), s = he(t, r.onViewportChange), c = X(0);
  return /* @__PURE__ */ P(pn, null, /* @__PURE__ */ P("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ P($n.Slot, {
    scope: n
  }, /* @__PURE__ */ P(le.div, M({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, o, {
    ref: s,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...o.style
    },
    onScroll: oe(o.onScroll, (l) => {
      const d = l.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: u } = a;
      if (u != null && u.current && f) {
        const C = Math.abs(c.current - d.scrollTop);
        if (C > 0) {
          const v = window.innerHeight - Be * 2, b = parseFloat(f.style.minHeight), p = parseFloat(f.style.height), y = Math.max(b, p);
          if (y < v) {
            const h = y + C, g = Math.min(v, h), w = h - g;
            f.style.height = g + "px", f.style.bottom === "0px" && (d.scrollTop = w > 0 ? w : 0, f.style.justifyContent = "flex-end");
          }
        }
      }
      c.current = d.scrollTop;
    })
  }))));
}), Gf = "SelectGroup", [Kf, ev] = kt(Gf), Zf = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = ze();
  return /* @__PURE__ */ P(Kf, {
    scope: n,
    id: r
  }, /* @__PURE__ */ P(le.div, M({
    role: "group",
    "aria-labelledby": r
  }, o, {
    ref: t
  })));
}), co = "SelectItem", [Yf, ki] = kt(co), Xf = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, value: o, disabled: r = !1, textValue: a, ...s } = e, c = it(co, n), l = St(co, n), d = c.value === o, [f, u] = U(a ?? ""), [C, v] = U(!1), b = he(t, (h) => {
    var g;
    return (g = l.itemRefCallback) === null || g === void 0 ? void 0 : g.call(l, h, o, r);
  }), p = ze(), y = () => {
    r || (c.onValueChange(o), c.onOpenChange(!1));
  };
  return /* @__PURE__ */ P(Yf, {
    scope: n,
    value: o,
    disabled: r,
    textId: p,
    isSelected: d,
    onItemTextChange: G((h) => {
      u((g) => {
        var w;
        return g || ((w = h == null ? void 0 : h.textContent) !== null && w !== void 0 ? w : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ P($n.ItemSlot, {
    scope: n,
    value: o,
    disabled: r,
    textValue: f
  }, /* @__PURE__ */ P(le.div, M({
    role: "option",
    "aria-labelledby": p,
    "data-highlighted": C ? "" : void 0,
    "aria-selected": d && C,
    "data-state": d ? "checked" : "unchecked",
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0,
    tabIndex: r ? void 0 : -1
  }, s, {
    ref: b,
    onFocus: oe(
      s.onFocus,
      () => v(!0)
    ),
    onBlur: oe(
      s.onBlur,
      () => v(!1)
    ),
    onPointerUp: oe(s.onPointerUp, y),
    onPointerMove: oe(s.onPointerMove, (h) => {
      if (r) {
        var g;
        (g = l.onItemLeave) === null || g === void 0 || g.call(l);
      } else
        h.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: oe(s.onPointerLeave, (h) => {
      if (h.currentTarget === document.activeElement) {
        var g;
        (g = l.onItemLeave) === null || g === void 0 || g.call(l);
      }
    }),
    onKeyDown: oe(s.onKeyDown, (h) => {
      var g;
      ((g = l.searchRef) === null || g === void 0 ? void 0 : g.current) !== "" && h.key === " " || (jf.includes(h.key) && y(), h.key === " " && h.preventDefault());
    })
  }))));
}), Yt = "SelectItemText", Jf = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, className: o, style: r, ...a } = e, s = it(Yt, n), c = St(Yt, n), l = ki(Yt, n), d = Af(Yt, n), [f, u] = U(null), C = he(
    t,
    (h) => u(h),
    l.onItemTextChange,
    (h) => {
      var g;
      return (g = c.itemTextRefCallback) === null || g === void 0 ? void 0 : g.call(c, h, l.value, l.disabled);
    }
  ), v = f == null ? void 0 : f.textContent, b = ce(
    () => /* @__PURE__ */ P("option", {
      key: l.value,
      value: l.value,
      disabled: l.disabled
    }, v),
    [
      l.disabled,
      l.value,
      v
    ]
  ), { onNativeOptionAdd: p, onNativeOptionRemove: y } = d;
  return Ee(() => (p(b), () => y(b)), [
    p,
    y,
    b
  ]), /* @__PURE__ */ P(pn, null, /* @__PURE__ */ P(le.span, M({
    id: l.textId
  }, a, {
    ref: C
  })), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ vo(a.children, s.valueNode) : null);
}), Qf = "SelectItemIndicator", e1 = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, ...o } = e;
  return ki(Qf, n).isSelected ? /* @__PURE__ */ P(le.span, M({
    "aria-hidden": !0
  }, o, {
    ref: t
  })) : null;
}), Ur = "SelectScrollDownButton", t1 = /* @__PURE__ */ J((e, t) => {
  const n = St(Ur, e.__scopeSelect), o = $i(Ur, e.__scopeSelect), [r, a] = U(!1), s = he(t, o.onScrollButtonChange);
  return Ee(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const d = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < d;
        a(f);
      };
      const c = n.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), r ? /* @__PURE__ */ P(n1, M({}, e, {
    ref: s,
    onAutoScroll: () => {
      const { viewport: c, selectedItem: l } = n;
      c && l && (c.scrollTop = c.scrollTop + l.offsetHeight);
    }
  })) : null;
}), n1 = /* @__PURE__ */ J((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, a = St("SelectScrollButton", n), s = X(null), c = kn(n), l = G(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return V(() => () => l(), [
    l
  ]), Ee(() => {
    var d;
    const f = c().find(
      (u) => u.ref.current === document.activeElement
    );
    f == null || (d = f.ref.current) === null || d === void 0 || d.scrollIntoView({
      block: "nearest"
    });
  }, [
    c
  ]), /* @__PURE__ */ P(le.div, M({
    "aria-hidden": !0
  }, r, {
    ref: t,
    style: {
      flexShrink: 0,
      ...r.style
    },
    onPointerDown: oe(r.onPointerDown, () => {
      s.current === null && (s.current = window.setInterval(o, 50));
    }),
    onPointerMove: oe(r.onPointerMove, () => {
      var d;
      (d = a.onItemLeave) === null || d === void 0 || d.call(a), s.current === null && (s.current = window.setInterval(o, 50));
    }),
    onPointerLeave: oe(r.onPointerLeave, () => {
      l();
    })
  }));
}), Si = /* @__PURE__ */ J((e, t) => {
  const { value: n, ...o } = e, r = X(null), a = he(t, r), s = ti(n);
  return V(() => {
    const c = r.current, l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
    if (s !== n && f) {
      const u = new Event("change", {
        bubbles: !0
      });
      f.call(c, n), c.dispatchEvent(u);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ P(Tf, {
    asChild: !0
  }, /* @__PURE__ */ P("select", M({}, o, {
    ref: a,
    defaultValue: n
  })));
});
Si.displayName = "BubbleSelect";
function Ei(e) {
  const t = Se(e), n = X(""), o = X(0), r = G((s) => {
    const c = n.current + s;
    t(c), function l(d) {
      n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(
        () => l(""),
        1e3
      ));
    }(c);
  }, [
    t
  ]), a = G(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return V(() => () => window.clearTimeout(o.current), []), [
    n,
    r,
    a
  ];
}
function qi(e, t, n) {
  const r = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = o1(e, Math.max(a, 0));
  r.length === 1 && (s = s.filter(
    (d) => d !== n
  ));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function o1(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const r1 = Mf, a1 = zf, i1 = Ff, s1 = Vf, c1 = Wf, l1 = Zf, d1 = Xf, u1 = Jf, f1 = e1, p1 = t1;
var v1 = "_1wo163v3", m1 = "_1wo163v6", g1 = "_1wo163v2", h1 = "_1wo163v5", b1 = "_1wo163v1", C1 = "_1wo163v7", y1 = "_1wo163v0", w1 = "_1wo163v4";
const Sn = ({
  label: e,
  items: t,
  defaultValue: n,
  onChange: o,
  className: r,
  contentProps: a,
  disabled: s = !1
}) => {
  const [c, l] = U(n), d = G(
    (f) => {
      l(f), o(f);
    },
    [o]
  );
  return /* @__PURE__ */ i.jsx("div", { className: "sid-dropdown", children: /* @__PURE__ */ i.jsxs(
    r1,
    {
      disabled: s,
      onValueChange: d,
      defaultValue: n,
      children: [
        /* @__PURE__ */ i.jsxs(
          a1,
          {
            className: ee("sid-dropdown__trigger", y1, r),
            children: [
              /* @__PURE__ */ i.jsx("label", { className: ee("sid-dropdown__trigger__label", b1), children: e }),
              /* @__PURE__ */ i.jsx("div", { className: ee("sid-dropdown__trigger__input", g1), children: /* @__PURE__ */ i.jsx(i1, {}) }),
              /* @__PURE__ */ i.jsx(
                Ca,
                {
                  className: ee("sid-dropdown__trigger__icon", m1)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          s1,
          {
            ...a,
            className: ee(
              "sid-dropdown__popover",
              v1,
              a == null ? void 0 : a.className
            ),
            children: [
              /* @__PURE__ */ i.jsx(
                c1,
                {
                  className: ee("sid-dropdown__viewport", w1),
                  children: /* @__PURE__ */ i.jsx(l1, { children: t.map((f) => /* @__PURE__ */ i.jsxs(
                    d1,
                    {
                      className: ee(
                        "sid-dropdown__item",
                        f.value === c && "sid-dropdown__item--selected",
                        h1
                      ),
                      value: f.value,
                      textValue: f.textValue,
                      children: [
                        /* @__PURE__ */ i.jsx(u1, { children: f.label }),
                        /* @__PURE__ */ i.jsx(f1, { className: C1, children: /* @__PURE__ */ i.jsx(lc, { className: "sid-dropdown__item--selected__icon" }) })
                      ]
                    },
                    f.value
                  )) })
                }
              ),
              /* @__PURE__ */ i.jsx(p1, {})
            ]
          }
        )
      ]
    }
  ) });
}, Wn = "rovingFocusGroup.onEntryFocus", x1 = {
  bubbles: !1,
  cancelable: !0
}, Ro = "RovingFocusGroup", [lo, Pi, _1] = Co(Ro), [$1, Ti] = Ze(Ro, [
  _1
]), [k1, S1] = $1(Ro), E1 = /* @__PURE__ */ J((e, t) => /* @__PURE__ */ P(lo.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ P(lo.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ P(q1, M({}, e, {
  ref: t
}))))), q1 = /* @__PURE__ */ J((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: d, ...f } = e, u = X(null), C = he(t, u), v = hn(a), [b = null, p] = Ue({
    prop: s,
    defaultProp: c,
    onChange: l
  }), [y, h] = U(!1), g = Se(d), w = Pi(n), _ = X(!1), [k, x] = U(0);
  return V(() => {
    const $ = u.current;
    if ($)
      return $.addEventListener(Wn, g), () => $.removeEventListener(Wn, g);
  }, [
    g
  ]), /* @__PURE__ */ P(k1, {
    scope: n,
    orientation: o,
    dir: v,
    loop: r,
    currentTabStopId: b,
    onItemFocus: G(
      ($) => p($),
      [
        p
      ]
    ),
    onItemShiftTab: G(
      () => h(!0),
      []
    ),
    onFocusableItemAdd: G(
      () => x(
        ($) => $ + 1
      ),
      []
    ),
    onFocusableItemRemove: G(
      () => x(
        ($) => $ - 1
      ),
      []
    )
  }, /* @__PURE__ */ P(le.div, M({
    tabIndex: y || k === 0 ? -1 : 0,
    "data-orientation": o
  }, f, {
    ref: C,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: oe(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: oe(e.onFocus, ($) => {
      const S = !_.current;
      if ($.target === $.currentTarget && S && !y) {
        const I = new CustomEvent(Wn, x1);
        if ($.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
          const j = w().filter(
            (A) => A.focusable
          ), L = j.find(
            (A) => A.active
          ), F = j.find(
            (A) => A.id === b
          ), H = [
            L,
            F,
            ...j
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          Oi(H);
        }
      }
      _.current = !1;
    }),
    onBlur: oe(
      e.onBlur,
      () => h(!1)
    )
  })));
}), P1 = "RovingFocusGroupItem", T1 = /* @__PURE__ */ J((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = !0, active: r = !1, tabStopId: a, ...s } = e, c = ze(), l = a || c, d = S1(P1, n), f = d.currentTabStopId === l, u = Pi(n), { onFocusableItemAdd: C, onFocusableItemRemove: v } = d;
  return V(() => {
    if (o)
      return C(), () => v();
  }, [
    o,
    C,
    v
  ]), /* @__PURE__ */ P(lo.ItemSlot, {
    scope: n,
    id: l,
    focusable: o,
    active: r
  }, /* @__PURE__ */ P(le.span, M({
    tabIndex: f ? 0 : -1,
    "data-orientation": d.orientation
  }, s, {
    ref: t,
    onMouseDown: oe(e.onMouseDown, (b) => {
      o ? d.onItemFocus(l) : b.preventDefault();
    }),
    onFocus: oe(
      e.onFocus,
      () => d.onItemFocus(l)
    ),
    onKeyDown: oe(e.onKeyDown, (b) => {
      if (b.key === "Tab" && b.shiftKey) {
        d.onItemShiftTab();
        return;
      }
      if (b.target !== b.currentTarget)
        return;
      const p = L1(b, d.orientation, d.dir);
      if (p !== void 0) {
        b.preventDefault();
        let h = u().filter(
          (g) => g.focusable
        ).map(
          (g) => g.ref.current
        );
        if (p === "last")
          h.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && h.reverse();
          const g = h.indexOf(b.currentTarget);
          h = d.loop ? R1(h, g + 1) : h.slice(g + 1);
        }
        setTimeout(
          () => Oi(h)
        );
      }
    })
  })));
}), O1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function j1(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function L1(e, t, n) {
  const o = j1(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return O1[o];
}
function Oi(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function R1(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const I1 = E1, A1 = T1, ji = "Tabs", [M1, tv] = Ze(ji, [
  Ti
]), Li = Ti(), [N1, Io] = M1(ji), z1 = /* @__PURE__ */ J((e, t) => {
  const { __scopeTabs: n, value: o, onValueChange: r, defaultValue: a, orientation: s = "horizontal", dir: c, activationMode: l = "automatic", ...d } = e, f = hn(c), [u, C] = Ue({
    prop: o,
    onChange: r,
    defaultProp: a
  });
  return /* @__PURE__ */ P(N1, {
    scope: n,
    baseId: ze(),
    value: u,
    onValueChange: C,
    orientation: s,
    dir: f,
    activationMode: l
  }, /* @__PURE__ */ P(le.div, M({
    dir: f,
    "data-orientation": s
  }, d, {
    ref: t
  })));
}), D1 = "TabsList", F1 = /* @__PURE__ */ J((e, t) => {
  const { __scopeTabs: n, loop: o = !0, ...r } = e, a = Io(D1, n), s = Li(n);
  return /* @__PURE__ */ P(I1, M({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: o
  }), /* @__PURE__ */ P(le.div, M({
    role: "tablist",
    "aria-orientation": a.orientation
  }, r, {
    ref: t
  })));
}), V1 = "TabsTrigger", B1 = /* @__PURE__ */ J((e, t) => {
  const { __scopeTabs: n, value: o, disabled: r = !1, ...a } = e, s = Io(V1, n), c = Li(n), l = Ri(s.baseId, o), d = Ii(s.baseId, o), f = o === s.value;
  return /* @__PURE__ */ P(A1, M({
    asChild: !0
  }, c, {
    focusable: !r,
    active: f
  }), /* @__PURE__ */ P(le.button, M({
    type: "button",
    role: "tab",
    "aria-selected": f,
    "aria-controls": d,
    "data-state": f ? "active" : "inactive",
    "data-disabled": r ? "" : void 0,
    disabled: r,
    id: l
  }, a, {
    ref: t,
    onMouseDown: oe(e.onMouseDown, (u) => {
      !r && u.button === 0 && u.ctrlKey === !1 ? s.onValueChange(o) : u.preventDefault();
    }),
    onKeyDown: oe(e.onKeyDown, (u) => {
      [
        " ",
        "Enter"
      ].includes(u.key) && s.onValueChange(o);
    }),
    onFocus: oe(e.onFocus, () => {
      const u = s.activationMode !== "manual";
      !f && !r && u && s.onValueChange(o);
    })
  })));
}), H1 = "TabsContent", U1 = /* @__PURE__ */ J((e, t) => {
  const { __scopeTabs: n, value: o, forceMount: r, children: a, ...s } = e, c = Io(H1, n), l = Ri(c.baseId, o), d = Ii(c.baseId, o), f = o === c.value, u = X(f);
  return V(() => {
    const C = requestAnimationFrame(
      () => u.current = !1
    );
    return () => cancelAnimationFrame(C);
  }, []), /* @__PURE__ */ P(
    xt,
    {
      present: r || f
    },
    ({ present: C }) => /* @__PURE__ */ P(le.div, M({
      "data-state": f ? "active" : "inactive",
      "data-orientation": c.orientation,
      role: "tabpanel",
      "aria-labelledby": l,
      hidden: !C,
      id: d,
      tabIndex: 0
    }, s, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: u.current ? "0s" : void 0
      }
    }), C && a)
  );
});
function Ri(e, t) {
  return `${e}-trigger-${t}`;
}
function Ii(e, t) {
  return `${e}-content-${t}`;
}
const W1 = z1, G1 = F1, K1 = B1, Z1 = U1;
var Y1 = "_1bc2uou0", X1 = "_1bc2uou1";
const Ai = ({ className: e, tabs: t, defaultValue: n }) => {
  var o;
  return t.length ? /* @__PURE__ */ i.jsxs(
    W1,
    {
      className: ee("sid-tabs", e),
      defaultValue: n ?? ((o = t[0]) == null ? void 0 : o.id),
      children: [
        /* @__PURE__ */ i.jsx(G1, { className: Y1, "aria-label": "SlashID Tabs", children: t.map(({ id: r, title: a }) => /* @__PURE__ */ i.jsx(K1, { className: X1, value: r, children: a }, r)) }),
        t.map(({ id: r, content: a }) => /* @__PURE__ */ i.jsx(Z1, { value: r, children: a }, r))
      ]
    }
  ) : null;
}, J1 = (e) => {
  const t = globalThis.document.getElementById(e);
  if (t !== null)
    return t;
  const o = document.createElement("div");
  return o.id = e, document.body.appendChild(o), o;
}, Q1 = ({ to: e, children: t, renderKey: n }) => {
  const o = J1(e);
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: vo(t, o, n) });
};
class Wr {
  constructor() {
    rr(this, "data", /* @__PURE__ */ new Map());
  }
  clear() {
    this.data.clear();
  }
  getItem(t) {
    return this.data.get(String(t)) ?? null;
  }
  removeItem(t) {
    this.data.delete(String(t));
  }
  key(t) {
    return Array.from(this.data.keys())[Number(t)] ?? null;
  }
  setItem(t, n) {
    this.data.set(String(t), String(n));
  }
  get length() {
    return this.data.size;
  }
}
var dn = function() {
  return dn = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, dn.apply(this, arguments);
};
function e0(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function t0(e) {
  return e.replace(/[.*+?^$|[\](){}\\-]/g, "\\$&");
}
function n0(e) {
  var t = e.charAt(e.length - 1), n = parseInt(e, 10), o = /* @__PURE__ */ new Date();
  switch (t) {
    case "Y":
      o.setFullYear(o.getFullYear() + n);
      break;
    case "M":
      o.setMonth(o.getMonth() + n);
      break;
    case "D":
      o.setDate(o.getDate() + n);
      break;
    case "h":
      o.setHours(o.getHours() + n);
      break;
    case "m":
      o.setMinutes(o.getMinutes() + n);
      break;
    case "s":
      o.setSeconds(o.getSeconds() + n);
      break;
    default:
      o = new Date(e);
  }
  return o;
}
function o0(e) {
  for (var t = "", n = 0, o = Object.keys(e); n < o.length; n++) {
    var r = o[n];
    if (/^expires$/i.test(r)) {
      var a = e[r], s = void 0;
      typeof a == "object" ? s = a : (a += typeof a == "number" ? "D" : "", s = n0(String(a))), t += ";".concat(r, "=").concat(s.toUTCString());
    } else
      /^secure|partitioned$/.test(r) ? e[r] && (t += ";".concat(r)) : t += ";".concat(r, "=").concat(e[r]);
  }
  return e0(e, "path") || (t += ";path=/"), t;
}
function r0(e, t) {
  if (t === void 0 && (t = decodeURIComponent), typeof e != "string" || !e)
    return null;
  var n = new RegExp("(?:^|; )".concat(t0(e), "(?:=([^;]*))?(?:;|$)")), o = n.exec(document.cookie);
  return o === null ? null : typeof t == "function" ? t(o[1]) : o[1];
}
function Gn(e) {
  e === void 0 && (e = decodeURIComponent);
  for (var t = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g, n = {}, o; o = t.exec(document.cookie); )
    t.lastIndex = o.index + o.length - 1, n[o[1]] = typeof e == "function" ? e(o[2]) : o[2];
  return n;
}
function Mi(e, t, n, o) {
  n === void 0 && (n = encodeURIComponent), typeof n == "object" && n !== null && (o = n, n = encodeURIComponent);
  var r = o0(o || {}), a = typeof n == "function" ? n(t) : t, s = "".concat(e, "=").concat(a).concat(r);
  document.cookie = s;
}
function Gr(e, t) {
  var n = { expires: -1 };
  return t && (n = dn(dn({}, t), n)), Mi(e, "a", n);
}
class a0 {
  clear() {
    const t = Gn(), n = Object.keys(t);
    for (const o of n)
      Gr(String(o));
  }
  getItem(t) {
    return r0(String(t));
  }
  removeItem(t) {
    Gr(String(t));
  }
  key(t) {
    return [...Object.keys(Gn())][Number(t)] ?? null;
  }
  setItem(t, n) {
    Mi(String(t), String(n));
  }
  get length() {
    return Object.keys(Gn()).length;
  }
}
const nv = (e) => async ({ user: t }) => {
  const n = await t.getOrganizations(), o = typeof e == "string" ? e : await e({ organizations: n, user: t }), r = await t.getTokenForOrganization(o);
  return new Ot(r);
};
async function i0({
  user: e,
  sid: t,
  middleware: n
}) {
  return n === void 0 ? e : (Array.isArray(n) ? n : [n]).reduce((r, a) => r.then((s) => a({ user: s, sid: t })), Promise.resolve(e));
}
const Ni = {
  sid: void 0,
  user: void 0,
  sdkState: "initial",
  logOut: () => {
  },
  logIn: () => Promise.reject("NYI"),
  mfa: () => Promise.reject("NYI"),
  recover: () => Promise.reject("NYI"),
  validateToken: async () => !1,
  __switchOrganizationInContext: async () => {
  }
}, Ao = He(Ni);
Ao.displayName = "SlashIDContext";
const Xt = "@slashid/USER_TOKEN", s0 = (e) => {
  switch (e) {
    case "memory":
      return new Wr();
    case "localStorage":
      return window.localStorage;
    case "cookie":
      return new a0();
    default:
      return new Wr();
  }
}, ov = ({
  oid: e,
  initialToken: t,
  tokenStorage: n = "memory",
  baseApiUrl: o,
  sdkUrl: r,
  analyticsEnabled: a,
  themeProps: s,
  children: c
}) => {
  const [l, d] = U(e), [f, u] = U(t), [C, v] = U(Ni.sdkState), [b, p] = U(void 0), y = X(void 0), h = X(void 0), g = G(
    async ({ oid: j }) => {
      if (!b)
        return;
      const L = await b.getTokenForOrganization(j);
      u(L), d(j), v("initial");
    },
    [b]
  ), w = G(
    (j) => {
      var L, F;
      if (C !== "initial") {
        p(j), (L = y.current) == null || L.setItem(Xt, j.token);
        try {
          (F = h.current) == null || F.getAnalytics().identify(j);
        } catch {
        }
        j.oid !== l && g({ oid: j.oid });
      }
    },
    [C, g, l]
  ), _ = G(() => {
    var j, L;
    if (C !== "initial" && ((j = y.current) == null || j.removeItem(Xt), !!b)) {
      try {
        (L = h.current) == null || L.getAnalytics().logout();
      } catch {
      }
      b.logout(), p(void 0), d(e);
    }
  }, [C, b, e]), k = G(
    async ({ factor: j, handle: L }, { middleware: F } = {}) => {
      if (C === "initial")
        return;
      const B = h.current;
      if (B)
        try {
          const H = j.method === "oidc" || L === void 0 ? null : {
            type: L.type,
            value: L.value
          }, A = await B.id(l, H, j).then(async (K) => i0({ user: K, sid: B, middleware: F }));
          return w(A), A;
        } catch (H) {
          throw _(), H;
        }
    },
    [l, C, w, _]
  ), x = G(
    async ({ handle: j, factor: L }) => {
      if (!(C === "initial" || !b))
        return await b.mfa(j, L), b;
    },
    [b, C]
  ), $ = G(
    async ({ factor: j, handle: L }) => {
      var F;
      if (!(C !== "ready" || !h.current))
        return (F = h.current) == null ? void 0 : F.recover({ factor: j, handle: L });
    },
    [C]
  ), S = G(async (j) => {
    const L = new Ot(j, h.current);
    try {
      return (await L.validateToken()).valid;
    } catch (F) {
      return console.error(F), !1;
    }
  }, []);
  V(() => {
    if (C === "initial") {
      const j = new Is({
        oid: l,
        ...o && { baseURL: o },
        ...r && { sdkURL: r },
        ...a && { analyticsEnabled: a }
      }), L = s0(n);
      y.current = L, h.current = j, v("loaded");
    }
  }, [l, o, r, C, n, a]), V(() => {
    if (C !== "loaded")
      return;
    const j = h.current, L = y.current, F = async () => {
      try {
        const A = await j.getUserFromURL();
        return A ? (w(new Ot(A.token, h.current)), !0) : !1;
      } catch (A) {
        return console.error(A), !1;
      }
    }, B = async () => {
      const A = L.getItem(Xt);
      return A ? await S(A) ? (w(new Ot(A, h.current)), !0) : (L.removeItem(Xt), !1) : !1;
    }, H = async () => {
      f ? w(new Ot(f, h.current)) : await F() || await B(), v("ready");
    };
    v("retrievingToken"), H();
  }, [C, f, w, S]);
  const I = ce(() => C === "initial" ? {
    sid: void 0,
    user: b,
    sdkState: C,
    logOut: _,
    logIn: k,
    mfa: x,
    recover: $,
    validateToken: S,
    __switchOrganizationInContext: g
  } : {
    sid: h.current,
    user: b,
    sdkState: C,
    logOut: _,
    logIn: k,
    mfa: x,
    recover: $,
    validateToken: S,
    __switchOrganizationInContext: g
  }, [
    C,
    b,
    _,
    k,
    x,
    $,
    S,
    g
  ]);
  return /* @__PURE__ */ i.jsx(Ao.Provider, { value: I, children: /* @__PURE__ */ i.jsx(Gs, { ...s, children: c }) });
};
function Fe() {
  const e = D.useContext(Ao), t = ce(
    () => e.sdkState !== "ready",
    [e.sdkState]
  ), n = ce(
    () => e.user !== void 0,
    [e.user]
  );
  return {
    ...e,
    isLoading: t,
    isAuthenticated: n
  };
}
function zi(e) {
  if (e instanceof Error)
    return e;
  let t = "[Unable to stringify the thrown value]";
  try {
    t = JSON.stringify(e);
  } catch {
  }
  return new Error(
    `This value was thrown as is, not through an Error: ${t}`
  );
}
const c0 = [
  "webauthn",
  "otp_via_email",
  "email_link",
  "password"
], l0 = ["otp_via_sms", "sms_link", "password"], d0 = ["oidc", "saml"];
function u0(e) {
  const t = /* @__PURE__ */ new Set();
  return c0.includes(e.method) && t.add("email_address"), l0.includes(e.method) && t.add("phone_number"), t;
}
function En(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    u0(n).forEach(
      (o) => t.add(o)
    );
  }), Array.from(t);
}
function Di(e, t) {
  return e.filter(
    (n) => En([n]).includes(t)
  );
}
function Fi(e) {
  return e.method === "otp_via_email";
}
function Vi(e) {
  return e.method === "otp_via_sms";
}
function f0(e) {
  return Fi(e) || Vi(e);
}
function p0(e) {
  return Bi(e);
}
function Bi(e) {
  return e.method === "password";
}
function Dt(e) {
  return e.method === "oidc";
}
function uo(e) {
  return d0.includes(e.method);
}
function v0(e) {
  return e.method === "email_link";
}
function m0(e) {
  return e.method === "sms_link";
}
function Hi(e) {
  return e.method !== "oidc";
}
function Ui(e) {
  return e.some(uo) && e.some((t) => !uo(t));
}
function ht(e, t) {
  if (!(!e || e.type !== t))
    return e.value;
}
function Wi(e) {
  for (const t of bo())
    if (e.startsWith(t.dial_code))
      return {
        dialCode: t.dial_code,
        number: e.substring(t.dial_code.length).trim(),
        countryCode: xa(t.dial_code).code
      };
}
const Kr = (e) => ({
  status: "initial",
  logIn: (t, n) => {
    e({ type: "sid_login", config: t, options: n });
  }
}), Zr = (e, t, n, o) => {
  function r() {
    return n(t.config, t.options).then((s) => {
      e(s ? { type: "sid_login.success", user: s } : {
        type: "sid_login.error",
        error: new Error("User not returned from /id")
      });
    }).catch((s) => {
      e({ type: "sid_login.error", error: s });
    });
  }
  async function a() {
    if (!(!p0(t.config.factor) || !t.config.handle))
      try {
        return await o({
          factor: t.config.factor,
          handle: t.config.handle
        });
      } catch (s) {
        e({ type: "sid_login.error", error: zi(s) });
      }
  }
  return {
    status: "authenticating",
    context: {
      attempt: t.attempt,
      config: t.config,
      options: t.options
    },
    retry: () => {
      e({ type: "sid_retry", context: t });
    },
    recover: a,
    cancel: () => {
      e({ type: "sid_cancel" });
    },
    entry: r
  };
}, g0 = () => ({
  status: "success"
}), h0 = (e, t) => ({
  status: "error",
  context: t,
  retry: () => {
    e({ type: "sid_retry", context: t });
  },
  cancel: () => {
    e({ type: "sid_cancel" });
  }
});
function b0(e = {}) {
  let t, n, o = [];
  const r = (u) => {
    f(u);
  };
  let a = Kr(r);
  const s = [{ state: a, event: { type: "sid_init" } }], { onSuccess: c, onError: l } = e;
  function d(u, C) {
    a = u, s.push({ state: a, event: C }), typeof a.entry == "function" && a.entry(), o.forEach((v) => v(a, C));
  }
  async function f(u) {
    switch (u.type) {
      case "sid_login":
        if (!t || !n)
          break;
        const C = {
          config: u.config,
          options: u.options,
          attempt: 1
        };
        d(
          Zr(r, C, t, n),
          u
        );
        break;
      case "sid_login.success":
        typeof c == "function" && c(u.user), d(g0(), u);
        break;
      case "sid_login.error":
        if (a.status !== "authenticating")
          break;
        const v = {
          ...a.context,
          error: zi(u.error)
        };
        typeof l == "function" && l(u.error, v), d(h0(r, v), u);
        break;
      case "sid_retry":
        if (!t || !n)
          break;
        const b = {
          config: u.context.config,
          options: u.context.options,
          attempt: u.context.attempt + 1
        };
        d(
          Zr(r, b, t, n),
          u
        );
        break;
      case "sid_cancel":
        d(Kr(r), u);
        break;
    }
  }
  return {
    history: s,
    unsubscribe: (u) => {
      o = o.filter((C) => C === u);
    },
    subscribe: (u) => {
      o.push(u);
    },
    // SDK is instantiated asynchronously, so we need to set the logIn and recover functions when it is ready
    setLogIn: (u) => {
      t = u;
    },
    setRecover: (u) => {
      n = u;
    },
    state: a
  };
}
function Gi(e = {}) {
  const { logIn: t, mfa: n, recover: o, user: r, sdkState: a } = Fe(), s = X(b0(e)), [c, l] = U(s.current.state);
  return V(() => {
    const d = s.current;
    return d.subscribe(l), () => d.unsubscribe(l);
  }, []), V(() => {
    a === "ready" && s.current.setRecover(o);
  }, [o, a]), V(() => {
    r ? s.current.setLogIn(n) : s.current.setLogIn(t);
  }, [t, n, r]), c;
}
const Ce = (e) => /* @__PURE__ */ i.jsx(wu, { ...e });
function Ki(e, t = !1) {
  switch (e.method) {
    case "oidc":
      return {
        message: "authenticating.message.oidc",
        title: "authenticating.title.oidc"
      };
    case "webauthn":
      return {
        message: "authenticating.message.webauthn",
        title: "authenticating.title.webauthn"
      };
    case "sms_link":
      return {
        message: "authenticating.message.smsLink",
        title: "authenticating.title.smsLink"
      };
    case "otp_via_sms":
      return t ? {
        message: "authenticating.submitting.message.smsOtp",
        title: "authenticating.submitting.title.smsOtp"
      } : {
        message: "authenticating.message.smsOtp",
        title: "authenticating.title.smsOtp"
      };
    case "otp_via_email":
      return t ? {
        message: "authenticating.submitting.message.emailOtp",
        title: "authenticating.submitting.title.emailOtp"
      } : {
        message: "authenticating.message.emailOtp",
        title: "authenticating.title.emailOtp"
      };
    case "email_link":
    default:
      return {
        message: "authenticating.message.emailLink",
        title: "authenticating.title.emailLink"
      };
  }
}
const Zi = {
  "": "NYI",
  "footer.branding": "Top-tier security by SlashID",
  "initial.title": "Welcome to SlashID",
  "initial.subtitle": "Sign in to your account",
  "initial.oidc": "Sign in with",
  "initial.sso": "Sign in with",
  "initial.authenticationMethod": "Authentication method",
  "initial.handle.email": "Email address",
  "initial.handle.phone": "Phone number",
  "initial.handle.phone.email": "Type your email",
  "initial.handle.phone.placeholder": "Type your phone number",
  "initial.submit": "Continue",
  "initial.divider": "or",
  "authenticating.password.label": "Password",
  "authenticating.password.placeholder": "Type your password",
  "authenticating.passwordConfirm.label": "Confirm password",
  "authenticating.retryPrompt": "Didn’t receive the code?",
  "authenticating.retry": "Resend",
  "authenticating.back": "Back",
  "authenticating.initial.password.title": "Log in with a password.",
  "authenticating.initial.password.message.email": "If you are using a password for the first time, you will receive an email to verify your email address.",
  "authenticating.initial.password.message.phone": "If you are using a password for the first time, you will receive a message to verify your phone number.",
  "authenticating.setPassword.title": "Create your password",
  "authenticating.setPassword.message": "Define a secure password to sign up.",
  "authenticating.setPassword.validation.required": "Password is required",
  "authenticating.setPassword.validation.mismatch": "Passwords should match",
  "authenticating.setPassword.validation.incorrect": "Incorrect handle or password",
  "authenticating.setPassword.validation.length": "8-256 characters required",
  "authenticating.setPassword.validation.password_variants": "Contains word 'password'",
  "authenticating.setPassword.validation.admin_variants": "Contains word 'admin'",
  "authenticating.setPassword.validation.user_variants": "Contains word 'user'",
  "authenticating.setPassword.validation.alphanumeric_sequences_1": "Illegal sequence: {{ILLEGAL_SEQUENCE}}",
  "authenticating.setPassword.validation.alphanumeric_sequences_2": "Illegal sequence: {{ILLEGAL_SEQUENCE}}",
  "authenticating.setPassword.validation.numeric_sequences_ascending": "Illegal sequence: {{ILLEGAL_SEQUENCE}}",
  "authenticating.setPassword.validation.numeric_subsequences_ascending": "Illegal sequence: {{ILLEGAL_SEQUENCE}}",
  "authenticating.setPassword.validation.numeric_sequences_descending": "Illegal sequence: {{ILLEGAL_SEQUENCE}}",
  "authenticating.setPassword.validation.numeric_subsequences_descending": "Illegal sequence: {{ILLEGAL_SEQUENCE}}",
  "authenticating.setPassword.validation.common_password_xkcd": "Common password",
  "authenticating.verifyPassword.title": "Enter your password",
  "authenticating.verifyPassword.message": "Type your password to sign in.",
  "authenticating.verifyPassword.recover.prompt": "Forgot password?",
  "authenticating.verifyPassword.recover.cta": "Reset",
  "authenticating.recoverPassword.title.email": "Check your email",
  "authenticating.recoverPassword.message.email": "We have sent an email to {{EMAIL_ADDRESS}} with instructions for resetting your password. This email can take a few minutes to arrive, make sure to check your spam.",
  "authenticating.recoverPassword.title.phone": "Check your phone",
  "authenticating.recoverPassword.message.phone": "We have sent a message to {{PHONE_NUMBER}} with instructions for resetting your password. This message can take a few minutes to arrive, make sure to check your spam.",
  "authenticating.password.submit": "Continue",
  "authenticating.submitting.password.title": "Logging you in...",
  "authenticating.submitting.password.message": "This may take some time.",
  "authenticating.message.webauthn": "If you are registering for the first time, you will receive an email to verify your email address.",
  "authenticating.title.webauthn": "You'll be prompted to validate your login via your device",
  "authenticating.message.emailLink": "We have sent you a link via email. Follow the link provided to complete your registration.",
  "authenticating.title.emailLink": "Check your email",
  "authenticating.message.smsLink": "We have sent you a link via text. Follow the link provided to complete your registration.",
  "authenticating.title.smsLink": "Check your phone",
  "authenticating.message.emailOtp": "We have sent you a code via email. Please insert it here.",
  "authenticating.title.emailOtp": "Check your email",
  "authenticating.submitting.message.emailOtp": "We are verifying the code.",
  "authenticating.submitting.title.emailOtp": "Please wait",
  "authenticating.message.smsOtp": "We have sent you a code via text. Please insert it here.",
  "authenticating.title.smsOtp": "Check your phone",
  "authenticating.submitting.message.smsOtp": "We are verifying the code.",
  "authenticating.submitting.title.smsOtp": "Please wait",
  "authenticating.message.oidc": "Please follow the instructions in the login screen from your SSO provider.",
  "authenticating.title.oidc": "Sign in with ",
  "authenticating.otpInput": "OTP",
  "authenticating.otpInput.submit": "Submit",
  "success.title": "You are now authenticated!",
  "success.subtitle": "You can now close this page.",
  "error.title": "Something went wrong...",
  "error.subtitle": "There has been an error while submitting your form. Please try again.",
  "error.subtitle.rateLimit": "Your request has been rate limited. Please try again later.",
  "error.retry": "Try again",
  "factor.webauthn": "Passkeys",
  "factor.otpViaSms": "OTP via SMS",
  "factor.otpViaEmail": "OTP via email",
  "factor.emailLink": "Email link",
  "factor.smsLink": "SMS link",
  "factor.password": "Password",
  "validationError.otp": "Please enter the OTP code.",
  "validationError.email": "Please enter your email address.",
  "validationError.phoneNumber": "Please enter your phone number.",
  // KYC
  "kyc.mobile.end.title": "Upload was successful.",
  "kyc.mobile.end.description": "Please return to desktop.",
  "kyc.mobile.failure.generic.title": "Something went wrong",
  "kyc.mobile.failure.generic.description": "Please try again",
  "kyc.mobile.failure.upload_not_supported.title": "Upload not supported",
  "kyc.mobile.failure.upload_not_supported.description": "Please try with a different browser or device",
  // Technical message to alert the consumer
  "kyc.mobile.failure.invalid_state.title": "Invalid State",
  "kyc.mobile.failure.invalid_state.description": "Cannot render anything due to inconsistent state",
  "kyc.upload.mobile.empty.id_card.front": "Upload the front side of your ID card",
  "kyc.upload.mobile.empty.id_card.back": "Upload the back side of your ID card",
  "kyc.upload.mobile.empty.driver_license.front": "Upload the front side of your driver license",
  "kyc.upload.mobile.empty.driver_license.back": "Upload the back side of your driver license",
  "kyc.upload.mobile.empty.passport.front": "Upload the front side of your passport",
  "kyc.upload.mobile.empty.passport.back": "Upload the back side of your passport",
  "kyc.upload.mobile.empty.cta": "Upload",
  "kyc.upload.mobile.loading.message": "Checking image quality",
  "kyc.upload.mobile.failure.generic.title": "Cannot load image",
  "kyc.upload.mobile.failure.generic.description": "Please try with a different image",
  "kyc.upload.mobile.failure.quality.title": "Invalid Image",
  "kyc.upload.mobile.failure.quality.description": "Please try with a different image",
  "kyc.upload.mobile.failure.quality.detect_blur.title": "Image is too blurry",
  "kyc.upload.mobile.failure.quality.detect_blur.description": "Please try with a different image",
  "kyc.upload.mobile.failure.quality.detect_cutoff.title": "Document is not entirely visible",
  "kyc.upload.mobile.failure.quality.detect_cutoff.description": "Please try with a different image",
  "kyc.upload.mobile.failure.quality.document_detection.title": "Document not found",
  "kyc.upload.mobile.failure.quality.document_detection.description": "Please try with a different image",
  "kyc.upload.mobile.success.title": "Image looks good",
  "kyc.upload.mobile.upload.cta.continue": "Continue",
  "kyc.upload.mobile.upload.cta.again": "Upload again",
  "kyc.upload.mobile.title": "Your document",
  "kyc.upload.mobile.subtitle": "Upload the required images of your documents",
  "kyc.livephoto.mobile.upload.cta.continue": "Continue",
  "kyc.livephoto.mobile.upload.cta.again": "Upload again",
  "kyc.livephoto.mobile.empty": "Upload a selfie picture.",
  "kyc.livephoto.mobile.empty.cta": "Upload",
  "kyc.livephoto.mobile.loading.message": "Validating picture",
  "kyc.livephoto.mobile.failure.generic.title": "Cannot load image",
  "kyc.livephoto.mobile.failure.generic.description": "Please try with a different image",
  "kyc.livephoto.mobile.failure.validation.title": "An error occurred",
  "kyc.livephoto.mobile.failure.validation.description": "Please try with a different image",
  "kyc.livephoto.mobile.failure.validation.face_detection.title": "Face not detected",
  "kyc.livephoto.mobile.failure.validation.face_detection.description": "Please try with a different image",
  "kyc.livephoto.mobile.success.title": "Image looks good",
  "kyc.livephoto.mobile.title": "Selfie Check",
  "kyc.livephoto.mobile.subtitle": "Upload a selfie picture to confirm your identity.",
  "org.switcher.label": "Organization",
  // gdpr
  "gdpr.dialog.title": "We value your privacy",
  "gdpr.dialog.subtitle": "We use cookies to improve your experience. Learn more in our Cookie policy.",
  "gdpr.consent.necessary.title": "Necessary cookies",
  "gdpr.consent.necessary.description": "Cookies that are essential to provide the service you have requested or which are required to comply with legal requirements, like data protection laws.",
  "gdpr.consent.analytics.title": "Analytics",
  "gdpr.consent.analytics.description": "Cookies that are used for analytics or performance measurement purposes, like counting the number of unique visitors to our site, how long you stay on the site, and what parts of our site you visit.",
  "gdpr.consent.marketing.title": "Marketing",
  "gdpr.consent.marketing.description": "Cookies that are used to display advertising personalised to you (whether on or off our site) based on your browsing and profile.",
  "gdpr.consent.retargeting.title": "Retargeting",
  "gdpr.consent.retargeting.description": "Cookies that are used to display advertising personalised to you (whether on or off our site) based on your browsing and profile.",
  "gdpr.consent.tracking.title": "Tracking",
  "gdpr.consent.tracking.description": "Cookies that track your online behaviour, such as clicks, preferences, device specifications, location, and search history. This data helps in targeted advertising and gathering website analytics.",
  "gdpr.dialog.error.title": "Oops!",
  "gdpr.dialog.error.subtitle": "Looks like something went wrong..."
}, fo = {
  text: Zi,
  factors: [{ method: "webauthn" }, { method: "email_link" }],
  logo: /* @__PURE__ */ i.jsx(wa, {}),
  storeLastHandle: !1,
  showBanner: !0,
  defaultCountryCode: "US"
}, Mo = He(fo);
Mo.displayName = "SlashIDConfigurationContext";
const C0 = ({
  text: e,
  children: t,
  ...n
}) => {
  const o = ce(() => ({
    ...fo,
    ...n,
    text: e ? { ...Zi, ...e } : fo.text
  }), [n, e]);
  return /* @__PURE__ */ i.jsx(Mo.Provider, { value: o, children: /* @__PURE__ */ i.jsx(Cu, { text: o.text, children: t }) });
};
function ge() {
  return D.useContext(Mo);
}
const st = () => Mt(ra), y0 = new RegExp(
  "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[-\b\v\f-!#-[]-]|\\[-	\v\f-])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[-\b\v\f-!-ZS-]|\\[-	\v\f-])+)\\])"
), Yi = 6, Xi = (e) => !(typeof e != "string" || e === ""), Ji = (e) => typeof e != "string" || e === "" ? !1 : y0.test(e), Yr = (e) => !(Number.isNaN(Number(e)) || e.length !== Yi);
function w0(e) {
  return `authenticating.setPassword.validation.${e.failedRules[0].name}`;
}
function x0({
  errorEvent: e,
  password: t
}) {
  const n = e.failedRules[0];
  let o = "";
  if (n.matchType === "must_not_match") {
    const r = n.regexp.exec(t);
    o = r !== null ? r[0] : "";
  }
  return o ? {
    ILLEGAL_SEQUENCE: o
  } : {};
}
var _0 = "_1xl24760";
const qn = ({ name: e }) => {
  const { errors: t } = st(), n = t[e];
  return n ? /* @__PURE__ */ i.jsx("span", { "data-testid": "sid-form-error-message", className: _0, children: n.message }) : null;
};
var $0 = "h1jwma3", k0 = "h1jwma1", S0 = "h1jwma2", E0 = "h1jwma4", q0 = "h1jwma0";
const Ft = () => /* @__PURE__ */ i.jsx(Nt, { children: /* @__PURE__ */ i.jsx(sa, {}) }), No = () => /* @__PURE__ */ i.jsx(Nt, { children: /* @__PURE__ */ i.jsx(dc, {}) }), zo = () => /* @__PURE__ */ i.jsx(Nt, { children: /* @__PURE__ */ i.jsx(sc, {}) }), Do = ({ onCancel: e }) => {
  const { text: t } = ge();
  return /* @__PURE__ */ i.jsx(
    vn,
    {
      className: xe({ marginBottom: "4" }),
      testId: "sid-form-authenticating-cancel-button",
      variant: "back",
      onClick: e,
      children: t["authenticating.back"]
    }
  );
}, Qi = ({ onRetry: e }) => {
  const { text: t } = ge();
  return /* @__PURE__ */ i.jsxs("div", { className: q0, children: [
    /* @__PURE__ */ i.jsx(
      Ce,
      {
        variant: { size: "sm", color: "tertiary", weight: "semibold" },
        t: "authenticating.retryPrompt"
      }
    ),
    /* @__PURE__ */ i.jsx(
      vn,
      {
        className: xe({ marginLeft: "1" }),
        type: "button",
        testId: "sid-form-authenticating-retry-button",
        onClick: e,
        children: t["authenticating.retry"]
      }
    )
  ] });
}, P0 = ({ factor: e }) => v0(e) ? /* @__PURE__ */ i.jsx(No, {}) : m0(e) ? /* @__PURE__ */ i.jsx(zo, {}) : /* @__PURE__ */ i.jsx(Ft, {}), T0 = ({ factor: e }) => Fi(e) ? /* @__PURE__ */ i.jsx(No, {}) : Vi(e) ? /* @__PURE__ */ i.jsx(zo, {}) : /* @__PURE__ */ i.jsx(Ft, {}), O0 = ({ flowState: e }) => {
  const { text: t } = ge(), { sid: n } = Fe(), { values: o, registerField: r, registerSubmit: a } = st(), [s, c] = U("initial"), l = X(null), d = e.context.config.factor, { title: f, message: u } = Ki(
    d,
    s === "submitting"
  ), C = G(
    (b) => {
      b.preventDefault(), c("submitting"), n == null || n.publish("otpCodeSubmitted", o.otp);
    },
    [n, o]
  ), v = G(
    (b) => {
      r("otp", {
        validator: (h) => {
          if (!Yr(h))
            return { message: t["validationError.otp"] };
        }
      })({
        target: {
          value: b
        }
      });
    },
    [r, t]
  );
  return V(() => {
    var b;
    Yr(o.otp) && ((b = l.current) == null || b.click());
  }, [o]), V(() => {
    const b = () => c("input");
    s === "initial" && (n == null || n.subscribe("otpCodeSent", b));
  }, [s, n]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(Do, { onCancel: () => e.cancel() }),
    /* @__PURE__ */ i.jsx(Ce, { as: "h1", t: f, variant: { size: "2xl-title", weight: "bold" } }),
    /* @__PURE__ */ i.jsx(Ce, { t: u, variant: { color: "contrast", weight: "semibold" } }),
    s === "initial" && /* @__PURE__ */ i.jsx(T0, { factor: d }),
    s === "input" && /* @__PURE__ */ i.jsxs(
      "form",
      {
        onSubmit: a(C),
        className: S0,
        children: [
          /* @__PURE__ */ i.jsx(
            hc,
            {
              shouldAutoFocus: !0,
              inputType: "number",
              value: o.otp ?? "",
              onChange: v,
              numInputs: Yi
            }
          ),
          /* @__PURE__ */ i.jsx("input", { hidden: !0, type: "submit", ref: l }),
          /* @__PURE__ */ i.jsx(qn, { name: "otp" })
        ]
      }
    ),
    s === "submitting" ? /* @__PURE__ */ i.jsx(Ft, {}) : /* @__PURE__ */ i.jsx(Qi, { onRetry: () => e.retry() })
  ] });
}, j0 = ({
  onRecoverClick: e
}) => {
  const { text: t } = ge();
  return /* @__PURE__ */ i.jsxs("div", { className: E0, children: [
    /* @__PURE__ */ i.jsx(
      Ce,
      {
        variant: { size: "sm", color: "tertiary", weight: "semibold" },
        t: "authenticating.verifyPassword.recover.prompt"
      }
    ),
    /* @__PURE__ */ i.jsx(
      vn,
      {
        className: xe({ marginLeft: "1" }),
        type: "button",
        testId: "sid-form-authenticating-retry-button",
        onClick: e,
        children: t["authenticating.verifyPassword.recover.cta"]
      }
    )
  ] });
}, L0 = ({
  formState: e,
  handleType: t
}) => {
  if (e === "submitting")
    return /* @__PURE__ */ i.jsx(Ft, {});
  if (e === "recoverPassword") {
    if (t === "email_address")
      return /* @__PURE__ */ i.jsx(No, {});
    if (t === "phone_number")
      return /* @__PURE__ */ i.jsx(zo, {});
  }
  return null;
};
function R0(e, t) {
  var o, r;
  return {
    initial: {
      title: "authenticating.initial.password.title",
      message: ((o = t.context.config.handle) == null ? void 0 : o.type) === "email_address" ? "authenticating.initial.password.message.email" : "authenticating.initial.password.message.phone"
    },
    setPassword: {
      title: "authenticating.setPassword.title",
      message: "authenticating.setPassword.message"
    },
    verifyPassword: {
      title: "authenticating.verifyPassword.title",
      message: "authenticating.verifyPassword.message"
    },
    recoverPassword: ((r = t.context.config.handle) == null ? void 0 : r.type) === "email_address" ? {
      title: "authenticating.recoverPassword.title.email",
      message: "authenticating.recoverPassword.message.email"
    } : {
      title: "authenticating.recoverPassword.title.phone",
      message: "authenticating.recoverPassword.message.phone"
    },
    submitting: {
      title: "authenticating.submitting.password.title",
      message: "authenticating.submitting.password.message"
    }
  }[e];
}
const I0 = ({ flowState: e }) => {
  var g, w, _, k;
  const { sid: t } = Fe(), { text: n } = ge(), {
    values: o,
    registerField: r,
    setError: a,
    hasError: s,
    clearError: c,
    registerSubmit: l
  } = st(), [d, f] = U("initial"), { title: u, message: C } = R0(d, e), v = d === "recoverPassword" ? {
    ...((g = e.context.config.handle) == null ? void 0 : g.type) === "email_address" && {
      EMAIL_ADDRESS: e.context.config.handle.value
    },
    ...((w = e.context.config.handle) == null ? void 0 : w.type) === "phone_number" && {
      PHONE_NUMBER: e.context.config.handle.value
    }
  } : void 0, b = G(
    (x) => {
      if (x.preventDefault(), !o.password) {
        a("password", {
          message: n["authenticating.setPassword.validation.required"]
        });
        return;
      }
      if (d === "setPassword" && o.password !== o.passwordConfirm) {
        a("password", {
          message: n["authenticating.setPassword.validation.mismatch"]
        });
        return;
      }
      f("submitting"), t == null || t.publish("passwordSubmitted", o.password);
    },
    [d, a, t, n, o]
  ), p = G(
    (x) => {
      r("password", {})(x), c("password");
    },
    [c, r]
  ), y = G(
    (x) => {
      r("passwordConfirm", {})(x), c("password");
    },
    [c, r]
  ), h = G(async () => {
    if (d === "verifyPassword") {
      f("recoverPassword");
      try {
        await e.recover(), f("verifyPassword");
      } catch {
      }
    }
  }, [e, d]);
  return V(() => {
    const x = () => f("setPassword"), $ = () => f("verifyPassword"), S = () => a("password", {
      message: n["authenticating.setPassword.validation.incorrect"]
    }), I = (j) => a("password", {
      message: ai(
        n[w0(j)],
        x0({
          errorEvent: j,
          password: o.password
        })
      )
    });
    return t == null || t.subscribe("passwordSetReady", x), t == null || t.subscribe("passwordVerifyReady", $), t == null || t.subscribe("incorrectPasswordSubmitted", S), t == null || t.subscribe("invalidPasswordSubmitted", I), () => {
      t == null || t.unsubscribe("passwordSetReady", x), t == null || t.unsubscribe("passwordVerifyReady", $), t == null || t.unsubscribe("incorrectPasswordSubmitted", S), t == null || t.unsubscribe("invalidPasswordSubmitted", I);
    };
  }, [a, t, n, o]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(Do, { onCancel: () => e.cancel() }),
    /* @__PURE__ */ i.jsx(Ce, { as: "h1", t: u, variant: { size: "2xl-title", weight: "bold" } }),
    /* @__PURE__ */ i.jsx(
      Ce,
      {
        t: C,
        variant: { color: "contrast", weight: "semibold" },
        tokens: v
      }
    ),
    d === "initial" && /* @__PURE__ */ i.jsx(Ft, {}),
    (d === "setPassword" || d === "verifyPassword") && /* @__PURE__ */ i.jsxs("form", { onSubmit: l(b), children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "hidden",
          name: "username",
          value: (_ = e.context.config.handle) == null ? void 0 : _.value,
          autoComplete: "username"
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: $0, children: [
        /* @__PURE__ */ i.jsx(
          lr,
          {
            id: "password-input",
            label: n["authenticating.password.label"],
            placeholder: n["authenticating.password.placeholder"],
            name: "password",
            value: o.password ?? "",
            onChange: p,
            error: s("password"),
            autoComplete: d === "setPassword" ? "new-password" : "current-password"
          }
        ),
        d === "setPassword" && /* @__PURE__ */ i.jsx(
          lr,
          {
            id: "password-input-confirm",
            label: n["authenticating.passwordConfirm.label"],
            placeholder: n["authenticating.password.placeholder"],
            name: "passwordConfirm",
            value: o.passwordConfirm ?? "",
            onChange: y,
            error: s("password"),
            className: xe({ marginTop: "4" })
          }
        ),
        /* @__PURE__ */ i.jsx(qn, { name: "password" }),
        d === "verifyPassword" && /* @__PURE__ */ i.jsx(j0, { onRecoverClick: h })
      ] }),
      /* @__PURE__ */ i.jsx(
        Ie,
        {
          type: "submit",
          variant: "primary",
          testId: "sid-form-initial-submit-button",
          children: n["authenticating.password.submit"]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      L0,
      {
        formState: d,
        handleType: (k = e.context.config.handle) == null ? void 0 : k.type
      }
    )
  ] });
}, A0 = ({ flowState: e }) => {
  var r;
  const t = e.context.config.factor, { title: n, message: o } = Ki(t);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(Do, { onCancel: () => e.cancel() }),
    /* @__PURE__ */ i.jsx(Ce, { as: "h1", t: n, variant: { size: "2xl-title", weight: "bold" }, children: t.method === "oidc" ? /* @__PURE__ */ i.jsx("span", { className: k0, children: (r = t.options) == null ? void 0 : r.provider }) : void 0 }),
    /* @__PURE__ */ i.jsx(Ce, { t: o, variant: { color: "contrast", weight: "semibold" } }),
    /* @__PURE__ */ i.jsx(P0, { factor: t }),
    /* @__PURE__ */ i.jsx(Qi, { onRetry: () => e.retry() })
  ] });
};
function Kn({ children: e }) {
  return /* @__PURE__ */ i.jsx("article", { "data-testid": "sid-form-authenticating-state", children: e });
}
const es = ({ flowState: e }) => {
  const t = e.context.config.factor;
  return f0(t) ? /* @__PURE__ */ i.jsx(Kn, { children: /* @__PURE__ */ i.jsx(O0, { flowState: e }) }) : Bi(t) ? /* @__PURE__ */ i.jsx(Kn, { children: /* @__PURE__ */ i.jsx(I0, { flowState: e }) }) : /* @__PURE__ */ i.jsx(Kn, { children: /* @__PURE__ */ i.jsx(A0, { flowState: e }) });
}, M0 = () => /* @__PURE__ */ i.jsx(Nt, { children: /* @__PURE__ */ i.jsx(
  "svg",
  {
    width: "21",
    height: "18",
    viewBox: "0 0 21 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.8505 0.705985C20.6342 1.38283 20.7209 2.56684 20.044 3.35055L8.16908 17.1005C7.80192 17.5256 7.2635 17.7637 6.70195 17.7493C6.1404 17.7349 5.61489 17.4695 5.27002 17.0261L0.895049 11.4011C0.259296 10.5837 0.406547 9.4057 1.22394 8.76995C2.04134 8.13419 3.21935 8.28145 3.8551 9.09884L6.82592 12.9185L17.2059 0.89949C17.8828 0.115778 19.0668 0.0291434 19.8505 0.705985Z",
        fill: "white"
      }
    )
  }
) }), ts = () => /* @__PURE__ */ i.jsxs("article", { "data-testid": "sid-form-success-state", children: [
  /* @__PURE__ */ i.jsx(
    Ce,
    {
      as: "h1",
      t: "success.title",
      variant: { size: "2xl-title", weight: "bold" }
    }
  ),
  /* @__PURE__ */ i.jsx(
    Ce,
    {
      as: "h2",
      t: "success.subtitle",
      variant: { color: "contrast", weight: "semibold" }
    }
  ),
  /* @__PURE__ */ i.jsx(M0, {})
] }), ns = D.createContext(
  {
    flowState: null,
    lastHandle: void 0,
    submitPayloadRef: { current: {} },
    handleSubmit: () => null,
    selectedFactor: void 0,
    setSelectedFactor: () => null
  }
), Et = () => D.useContext(ns), N0 = () => /* @__PURE__ */ i.jsx(Nt, { variant: "red", shouldAnimate: !1, children: /* @__PURE__ */ i.jsx(uc, {}) });
function z0(e) {
  return ar.isResponseError(e) ? "response" : ar.isRateLimitError(e) ? "rateLimit" : "unknown";
}
function D0(e) {
  switch (e) {
    case "rateLimit":
      return "error.subtitle.rateLimit";
    default:
      return "error.subtitle";
  }
}
const Pn = ({ children: e }) => {
  const { flowState: t } = Et();
  return (t == null ? void 0 : t.status) !== "error" ? null : typeof e == "function" ? /* @__PURE__ */ i.jsx("div", { "data-testid": "sid-form-error-function", children: e({
    context: t.context,
    retry: t.retry,
    cancel: t.cancel
  }) }) : Re.count(e) > 0 ? /* @__PURE__ */ i.jsx("div", { "data-testid": "sid-form-error-children", children: e }) : /* @__PURE__ */ i.jsx(F0, { flowState: t });
};
Pn.displayName = "Form.Error";
const F0 = ({ flowState: e }) => {
  const { text: t } = ge(), n = z0(e.context.error);
  return /* @__PURE__ */ i.jsxs("article", { "data-testid": "sid-form-error-state", children: [
    /* @__PURE__ */ i.jsx(
      vn,
      {
        className: xe({ marginBottom: "4" }),
        testId: "sid-form-authenticating-cancel-button",
        variant: "back",
        onClick: () => e.cancel(),
        children: t["authenticating.back"]
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ce,
      {
        as: "h1",
        t: "error.title",
        variant: { size: "2xl-title", weight: "bold" }
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ce,
      {
        as: "h2",
        t: D0(n),
        variant: { color: "contrast", weight: "semibold" }
      }
    ),
    /* @__PURE__ */ i.jsx(N0, {}),
    /* @__PURE__ */ i.jsx(
      Ie,
      {
        type: "submit",
        variant: "primary",
        testId: "sid-form-error-retry-button",
        onClick: () => e.retry(),
        children: t["error.retry"]
      }
    )
  ] });
};
var V0 = "tgnhcw2", B0 = "tgnhcw0", H0 = "tgnhcw1";
var U0 = "_1xoz4765", W0 = "_1xoz4764", Xr = "_1xoz4763", os = "_1xoz4762", rs = "_1xoz4760", Jr = "_1xoz4766", G0 = "_1xoz4761";
const as = ({ logo: e }) => {
  if (typeof e == "string" && e)
    return /* @__PURE__ */ i.jsx(
      "img",
      {
        className: ee("sid-logo", "sid-logo--image", Xr),
        src: e,
        alt: "Company logo"
      }
    );
  const t = e || /* @__PURE__ */ i.jsx(wa, {});
  return e || console.info("SlashID: No logo provided. Using default logo."), /* @__PURE__ */ i.jsx("div", { className: ee("sid-logo", "sid-logo--component", Xr), children: t });
}, Fo = ({
  children: e
}) => {
  const { logo: t } = ge();
  return typeof e != "function" ? /* @__PURE__ */ i.jsx(as, { logo: t }) : /* @__PURE__ */ i.jsx(i.Fragment, { children: e({ logo: t }) });
};
Fo.displayName = "Logo";
const K0 = {
  google: /* @__PURE__ */ i.jsx(ga, {}),
  facebook: /* @__PURE__ */ i.jsx(pa, {}),
  github: /* @__PURE__ */ i.jsx(va, {}),
  gitlab: /* @__PURE__ */ i.jsx(ma, {}),
  line: /* @__PURE__ */ i.jsx(ha, {}),
  bitbucket: /* @__PURE__ */ i.jsx(fa, {}),
  azuread: /* @__PURE__ */ i.jsx(ua, {}),
  okta: /* @__PURE__ */ i.jsx(ba, {})
}, Z0 = {
  google: "Google",
  // apple: "Apple",
  facebook: "Facebook",
  github: "GitHub",
  gitlab: "GitLab",
  line: "LINE",
  bitbucket: "Bitbucket",
  azuread: "Azure AD",
  okta: "Okta"
}, Y0 = ({ providers: e, handleClick: t }) => {
  const { text: n } = ge();
  return e.length ? /* @__PURE__ */ i.jsx("div", { className: ee(xe({ marginTop: "4" }), os), children: e.map((o) => {
    var r, a, s, c;
    return (r = o.options) != null && r.provider ? /* @__PURE__ */ i.jsxs(
      Ie,
      {
        onClick: () => t({ method: "oidc", options: o.options }),
        variant: "secondary",
        icon: K0[(a = o.options) == null ? void 0 : a.provider],
        className: ee("sid-oidc--button"),
        children: [
          n["initial.oidc"],
          /* @__PURE__ */ i.jsx("span", { className: rs, children: o.label || Z0[(s = o.options) == null ? void 0 : s.provider] })
        ]
      },
      (c = o.options) == null ? void 0 : c.client_id
    ) : null;
  }) }) : null;
}, X0 = {
  email_link: "factor.emailLink",
  otp_via_sms: "factor.otpViaSms",
  otp_via_email: "factor.otpViaEmail",
  sms_link: "factor.smsLink",
  webauthn: "factor.webauthn",
  password: "factor.password",
  oidc: "",
  saml: ""
}, Zn = ({
  handleType: e,
  factors: t,
  handleSubmit: n,
  defaultValue: o
}) => {
  const r = ce(
    () => Di(t, e).filter((_) => !Dt(_)),
    [t, e]
  ), { text: a, defaultCountryCode: s } = ge(), { registerField: c, registerSubmit: l, values: d, status: f, resetForm: u } = st(), C = r.length > 1, v = Wi(o ?? ""), [b, p] = U(
    gn((v == null ? void 0 : v.countryCode) ?? s)
  ), [y, h] = U(r[0]);
  V(() => {
    h(r[0]);
  }, [r]), V(() => u, [u]);
  const g = ce(() => e === "phone_number" ? /* @__PURE__ */ i.jsx(
    $a,
    {
      className: xe({ marginTop: "4" }),
      id: `sid-input-${e}`,
      name: e,
      label: a["initial.handle.phone"],
      placeholder: a["initial.handle.phone.placeholder"],
      value: d[e] ?? "",
      flag: b,
      onChange: c(e, {
        defaultValue: v == null ? void 0 : v.number,
        validator: (_) => {
          if (!Xi(_))
            return { message: a["validationError.phoneNumber"] };
        }
      }),
      onFlagChange: p
    }
  ) : /* @__PURE__ */ i.jsx(
    da,
    {
      className: xe({ marginTop: "4" }),
      id: `sid-input-${e}`,
      name: e,
      label: a["initial.handle.email"],
      placeholder: a["initial.handle.phone.email"],
      value: d[e] ?? "",
      onChange: c(e, {
        defaultValue: o,
        validator: (_) => {
          if (!Ji(_))
            return { message: a["validationError.email"] };
        }
      })
    }
  ), [
    b,
    e,
    a,
    c,
    d,
    o,
    v
  ]), w = (_) => {
    _.preventDefault(), n(y, {
      type: e,
      value: e === "email_address" ? d[e] : `${b.dial_code}${d[e]}`
    });
  };
  return /* @__PURE__ */ i.jsxs("form", { onSubmit: l(w), children: [
    C && /* @__PURE__ */ i.jsx(
      Sn,
      {
        defaultValue: r[0].method,
        className: xe({ marginBottom: "3", marginTop: "6" }),
        label: a["initial.authenticationMethod"],
        items: r.map((_) => ({
          label: a[X0[_.method]],
          value: _.method
        })),
        onChange: (_) => h(t.find((k) => k.method === _)),
        contentProps: {
          className: V0,
          position: "popper"
        }
      }
    ),
    g,
    /* @__PURE__ */ i.jsx(qn, { name: e }),
    /* @__PURE__ */ i.jsx(
      Ie,
      {
        className: xe({ marginTop: "6" }),
        type: "submit",
        variant: "primary",
        testId: "sid-form-initial-submit-button",
        disabled: f === "invalid",
        children: a["initial.submit"]
      }
    )
  ] });
}, un = {
  email: "email",
  phone: "phone"
}, J0 = {
  phone_number: un.phone,
  email_address: un.email
}, Q0 = ({ handleSubmit: e, lastHandle: t }) => {
  const { factors: n, text: o } = ge(), r = ce(
    () => n.filter((c) => !Dt(c)),
    [n]
  ), a = ce(
    () => Ui(n),
    [n]
  ), s = ce(() => En(n), [n]);
  return r.length === 0 ? null : s.length === 1 ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      Zn,
      {
        handleSubmit: e,
        factors: n,
        handleType: s[0],
        defaultValue: ht(t, s[0])
      }
    ),
    a && /* @__PURE__ */ i.jsx(rn, { children: o["initial.divider"] })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      Ai,
      {
        className: xe({ marginY: "6" }),
        defaultValue: J0[(t == null ? void 0 : t.type) ?? "email_address"],
        tabs: [
          {
            id: un.email,
            title: o["initial.handle.email"],
            content: /* @__PURE__ */ i.jsx(
              Zn,
              {
                handleSubmit: e,
                factors: n,
                handleType: "email_address",
                defaultValue: ht(
                  t,
                  "email_address"
                )
              }
            )
          },
          {
            id: un.phone,
            title: o["initial.handle.phone"],
            content: /* @__PURE__ */ i.jsx(
              Zn,
              {
                handleSubmit: e,
                factors: n,
                handleType: "phone_number",
                defaultValue: ht(
                  t,
                  "phone_number"
                )
              }
            )
          }
        ]
      }
    ),
    a ? /* @__PURE__ */ i.jsx(rn, { children: o["initial.divider"] }) : null
  ] });
}, ep = ({ flowState: e, handleSubmit: t, middleware: n }) => {
  const { logo: o, text: r, factors: a } = ge(), s = ce(
    () => a.filter(Dt),
    [a]
  ), c = s.length > 0;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      "data-testid": "sid-dynamic-flow--initial-state",
      className: "sid-dynamic-flow--initial-state",
      children: [
        /* @__PURE__ */ i.jsx(as, { logo: o }),
        /* @__PURE__ */ i.jsxs("div", { className: H0, children: [
          /* @__PURE__ */ i.jsx(
            Ce,
            {
              as: "h1",
              t: "initial.title",
              variant: { size: "2xl-title", weight: "bold" }
            }
          ),
          /* @__PURE__ */ i.jsx(
            Ce,
            {
              as: "h2",
              t: "initial.subtitle",
              variant: { color: "contrast", weight: "semibold" }
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(nn, { children: /* @__PURE__ */ i.jsx(Q0, { handleSubmit: t }) }),
        c && /* @__PURE__ */ i.jsx(rn, { children: r["initial.divider"] }),
        /* @__PURE__ */ i.jsx(
          Y0,
          {
            providers: s,
            handleClick: (l) => e.logIn(
              {
                factor: l,
                handle: void 0
              },
              { middleware: n }
            )
          }
        )
      ]
    }
  );
}, rv = ({
  getFactor: e,
  className: t,
  onSuccess: n,
  middleware: o
}) => {
  const r = Gi({ onSuccess: n }), a = G(
    (s, c) => {
      if (r.status === "initial") {
        const l = e(c);
        r.logIn(
          {
            factor: l,
            handle: c
          },
          { middleware: o }
        );
      }
    },
    [e, r, o]
  );
  return /* @__PURE__ */ i.jsxs("div", { className: ee("sid-dynamic-flow", B0, t), children: [
    r.status === "initial" && /* @__PURE__ */ i.jsx(ep, { handleSubmit: a, flowState: r }),
    r.status === "authenticating" && /* @__PURE__ */ i.jsx(nn, { children: /* @__PURE__ */ i.jsx(es, { flowState: r }) }),
    r.status === "error" && /* @__PURE__ */ i.jsx(Pn, {}),
    r.status === "success" && /* @__PURE__ */ i.jsx(ts, { flowState: r })
  ] });
}, tp = {
  email_link: "factor.emailLink",
  otp_via_sms: "factor.otpViaSms",
  otp_via_email: "factor.otpViaEmail",
  sms_link: "factor.smsLink",
  webauthn: "factor.webauthn",
  password: "factor.password",
  oidc: "",
  saml: ""
}, fn = {
  email: "email",
  phone: "phone"
}, np = {
  phone_number: fn.phone,
  email_address: fn.email
}, Vt = ({ children: e }) => {
  const { factors: t, text: n } = ge(), { handleSubmit: o, submitPayloadRef: r, selectedFactor: a } = Et(), { registerSubmit: s } = st(), c = ce(
    () => t.filter((f) => Hi(f)),
    [t]
  ), l = ce(() => En(t), [t]);
  if (c.length === 0)
    return null;
  const d = (f) => {
    if (f.preventDefault(), !r.current.handleType || !r.current.handleValue || !a)
      return;
    const { handleType: u, handleValue: C, flag: v } = r.current;
    u === "phone_number" && !v || o(a, {
      type: u,
      value: u === "phone_number" ? `${v.dial_code}${C}` : C
    });
  };
  return typeof e == "function" ? /* @__PURE__ */ i.jsx("div", { "data-testid": "sid-form-initial-function", children: e({ handleSubmit: o, factors: c, handleTypes: l, text: n }) }) : Re.count(e) > 0 ? /* @__PURE__ */ i.jsx(
    "form",
    {
      "data-testid": "sid-form-initial-children",
      onSubmit: s(d),
      children: e
    }
  ) : /* @__PURE__ */ i.jsxs(
    "form",
    {
      "data-testid": "sid-form-initial-default",
      onSubmit: s(d),
      children: [
        /* @__PURE__ */ i.jsx(Vo, {}),
        /* @__PURE__ */ i.jsx(Bo, {})
      ]
    }
  );
}, Vo = ({ children: e }) => {
  const { lastHandle: t } = Et(), { factors: n, text: o } = ge(), r = ce(
    () => n.filter((s) => Hi(s)),
    [n]
  ), a = ce(() => En(n), [n]);
  return typeof e == "function" ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e({ factors: r, handleTypes: a }) }) : Re.count(e) > 0 ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e }) : a.length === 1 ? /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx(
    Yn,
    {
      factors: r,
      handleType: a[0],
      defaultValue: ht(t, a[0])
    }
  ) }) : /* @__PURE__ */ i.jsx(
    Ai,
    {
      className: xe({ marginY: "6" }),
      defaultValue: np[(t == null ? void 0 : t.type) ?? "email_address"],
      tabs: [
        {
          id: fn.email,
          title: o["initial.handle.email"],
          content: /* @__PURE__ */ i.jsx(
            Yn,
            {
              factors: r,
              handleType: "email_address",
              defaultValue: ht(
                t,
                "email_address"
              )
            }
          )
        },
        {
          id: fn.phone,
          title: o["initial.handle.phone"],
          content: /* @__PURE__ */ i.jsx(
            Yn,
            {
              factors: r,
              handleType: "phone_number",
              defaultValue: ht(
                t,
                "phone_number"
              )
            }
          )
        }
      ]
    }
  );
};
Vo.displayName = "Input";
const Bo = ({ children: e }) => {
  const { text: t } = ge(), { status: n } = st();
  return typeof e == "function" ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e({ text: t, status: n }) }) : Re.count(e) > 0 ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e }) : /* @__PURE__ */ i.jsx(
    Ie,
    {
      className: xe({ marginTop: "6" }),
      type: "submit",
      variant: "primary",
      testId: "sid-form-initial-submit-button",
      disabled: n === "invalid",
      children: t["initial.submit"]
    }
  );
};
Bo.displayName = "Submit";
const Yn = ({
  handleType: e,
  factors: t,
  defaultValue: n
}) => {
  const { setSelectedFactor: o, submitPayloadRef: r } = Et(), a = ce(
    () => Di(t, e).filter((y) => !Dt(y)),
    [t, e]
  ), { text: s, defaultCountryCode: c } = ge(), { registerField: l, values: d, resetForm: f } = st(), u = a.length > 1, C = Wi(n ?? ""), [v, b] = U(
    gn((C == null ? void 0 : C.countryCode) ?? c)
  );
  V(() => {
    o(a[0]);
  }, [a, o]), V(() => f, [f]), V(() => {
    r.current.flag = v;
  }, [v, r]), V(() => {
    const y = d[e];
    r.current = {
      ...r.current,
      handleType: e,
      handleValue: y
    };
  }, [e, r, d]);
  const p = ce(() => e === "phone_number" ? /* @__PURE__ */ i.jsx(
    $a,
    {
      className: xe({ marginTop: "4" }),
      id: `sid-input-${e}`,
      name: e,
      label: s["initial.handle.phone"],
      placeholder: s["initial.handle.phone.placeholder"],
      value: d[e] ?? "",
      flag: v,
      onChange: l(e, {
        defaultValue: C == null ? void 0 : C.number,
        validator: (y) => {
          if (!Xi(y))
            return { message: s["validationError.phoneNumber"] };
        }
      }),
      onFlagChange: b
    }
  ) : /* @__PURE__ */ i.jsx(
    da,
    {
      className: xe({ marginTop: "4" }),
      id: `sid-input-${e}`,
      name: e,
      label: s["initial.handle.email"],
      placeholder: s["initial.handle.phone.email"],
      value: d[e] ?? "",
      onChange: l(e, {
        defaultValue: n,
        validator: (y) => {
          if (!Ji(y))
            return { message: s["validationError.email"] };
        }
      })
    }
  ), [
    v,
    e,
    s,
    l,
    d,
    n,
    C
  ]);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    u && /* @__PURE__ */ i.jsx(
      Sn,
      {
        defaultValue: a[0].method,
        className: xe({ marginBottom: "3", marginTop: "6" }),
        label: s["initial.authenticationMethod"],
        items: a.map((y) => ({
          label: s[tp[y.method]],
          value: y.method
        })),
        onChange: (y) => {
          const h = a.find((g) => g.method === y);
          o(h);
        },
        contentProps: {
          className: U0,
          position: "popper"
        }
      }
    ),
    p,
    /* @__PURE__ */ i.jsx(qn, { name: e })
  ] });
};
Vt.displayName = "Controls";
Vt.Input = Vo;
Vt.Submit = Bo;
const Ho = ({
  children: e
}) => {
  const { text: t } = ge(), n = D.useMemo(() => /* @__PURE__ */ i.jsxs("div", { className: W0, children: [
    /* @__PURE__ */ i.jsx(
      Ce,
      {
        as: "h1",
        variant: { size: "2xl-title", weight: "bold" },
        t: "initial.title"
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ce,
      {
        variant: { color: "contrast", weight: "semibold" },
        as: "h2",
        t: "initial.subtitle"
      }
    )
  ] }), []);
  return typeof e == "function" ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e({ text: t }) }) : D.Children.count(e) > 0 ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e }) : n;
};
Ho.displayName = "Header";
const op = {
  google: /* @__PURE__ */ i.jsx(ga, {}),
  facebook: /* @__PURE__ */ i.jsx(pa, {}),
  github: /* @__PURE__ */ i.jsx(va, {}),
  gitlab: /* @__PURE__ */ i.jsx(ma, {}),
  line: /* @__PURE__ */ i.jsx(ha, {}),
  bitbucket: /* @__PURE__ */ i.jsx(fa, {}),
  azuread: /* @__PURE__ */ i.jsx(ua, {}),
  okta: /* @__PURE__ */ i.jsx(ba, {})
}, rp = {
  google: "Google",
  facebook: "Facebook",
  github: "GitHub",
  gitlab: "GitLab",
  line: "LINE",
  bitbucket: "Bitbucket",
  azuread: "Azure AD",
  okta: "Okta"
};
function ap({ provider: e, handleClick: t }) {
  var o;
  const { text: n } = ge();
  return (o = e.options) != null && o.provider_credentials_id ? /* @__PURE__ */ i.jsxs(
    Ie,
    {
      onClick: () => t({ method: "saml", options: e.options }),
      variant: "secondary",
      icon: /* @__PURE__ */ i.jsx(ip, { logo: e.logo, id: e.options.provider_credentials_id }),
      className: ee("sid-saml--button"),
      children: [
        n["initial.sso"],
        /* @__PURE__ */ i.jsx("span", { className: G0, children: e.label || "SAML" })
      ]
    }
  ) : null;
}
function ip({ logo: e, id: t }) {
  return e ? typeof e == "string" ? /* @__PURE__ */ i.jsx(
    "img",
    {
      className: ee("sid-sso-logo", `sid-sso-logo--${t}`, Jr),
      src: e,
      alt: "SSO provider logo"
    }
  ) : /* @__PURE__ */ i.jsx(
    "div",
    {
      className: ee("sid-sso-logo", `sid-sso-logo--${t}`, Jr),
      children: e
    }
  ) : null;
}
function sp({ provider: e, handleClick: t }) {
  var o, r, a;
  const { text: n } = ge();
  return (o = e.options) != null && o.provider ? /* @__PURE__ */ i.jsxs(
    Ie,
    {
      onClick: () => t({ method: "oidc", options: e.options }),
      variant: "secondary",
      icon: op[(r = e.options) == null ? void 0 : r.provider],
      className: ee("sid-oidc--button"),
      children: [
        n["initial.oidc"],
        /* @__PURE__ */ i.jsx("span", { className: rs, children: e.label || rp[(a = e.options) == null ? void 0 : a.provider] })
      ]
    }
  ) : null;
}
function is({ providers: e, handleClick: t }) {
  return e.length ? /* @__PURE__ */ i.jsx(
    "div",
    {
      className: ee(
        "sid-form-sso",
        xe({ marginTop: "4" }),
        os
      ),
      children: e.map((n) => {
        var o, r;
        switch (n.method) {
          case "oidc":
            return /* @__PURE__ */ i.jsx(
              sp,
              {
                provider: n,
                handleClick: t
              },
              (o = n.options) == null ? void 0 : o.client_id
            );
          case "saml":
            return /* @__PURE__ */ i.jsx(
              ap,
              {
                provider: n,
                handleClick: t
              },
              (r = n.options) == null ? void 0 : r.provider_credentials_id
            );
          default:
            throw new Error("unsupported SSO method");
        }
      })
    }
  ) : null;
}
const ss = ({
  children: e
}) => {
  const { factors: t } = ge(), { handleSubmit: n } = Et(), o = t.filter(Dt), r = D.useMemo(() => /* @__PURE__ */ i.jsx(is, { providers: o, handleClick: n }), [n, o]);
  return typeof e == "function" ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e({ factors: o, handleClick: n }) }) : D.Children.count(e) > 0 ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e }) : r;
};
ss.displayName = "OIDC";
const Uo = ({
  children: e
}) => {
  const { factors: t } = ge(), { handleSubmit: n } = Et(), o = t.filter(uo), r = D.useMemo(() => /* @__PURE__ */ i.jsx(is, { providers: o, handleClick: n }), [n, o]);
  return typeof e == "function" ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e({ factors: o, handleClick: n }) }) : D.Children.count(e) > 0 ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e }) : r;
};
Uo.displayName = "SSO";
const ct = () => {
  const { factors: e, text: t } = ge(), n = ce(
    () => Ui(e),
    [e]
  );
  return /* @__PURE__ */ i.jsxs("article", { "data-testid": "sid-form-initial-state", children: [
    /* @__PURE__ */ i.jsx(Fo, {}),
    /* @__PURE__ */ i.jsx(Ho, {}),
    /* @__PURE__ */ i.jsx(Vt, {}),
    n && /* @__PURE__ */ i.jsx(rn, { children: t["initial.divider"] }),
    /* @__PURE__ */ i.jsx(Uo, {})
  ] });
};
ct.Logo = Fo;
ct.Header = Ho;
ct.Controls = Vt;
ct.OIDC = ss;
ct.SSO = Uo;
var cp = "gwp8o20";
var lp = "_1iedw350";
const dp = () => /* @__PURE__ */ i.jsx(
  Ce,
  {
    className: lp,
    t: "footer.branding",
    variant: { size: "xs", weight: "semibold" }
  }
), up = ["email_address", "phone_number"], fp = (e) => {
  if (!e || Array.isArray(e) || typeof e != "object")
    return !1;
  const { type: t, value: n } = e;
  return up.includes(t) ? typeof n == "string" : !1;
}, Qr = "@slashid/LAST_HANDLE", pp = () => {
  const { storeLastHandle: e } = ge(), { sid: t } = Fe(), n = ce(() => {
    if (on())
      try {
        const r = window.localStorage.getItem(Qr);
        return !e || !r ? void 0 : JSON.parse(r);
      } catch {
        return;
      }
  }, [e]), o = G(({ handle: r }) => {
    if (on() && fp(r))
      try {
        window.localStorage.setItem(
          Qr,
          JSON.stringify(r)
        );
      } catch {
      }
  }, []);
  return V(() => (e && t && t.subscribe("idFlowSucceeded", o), () => {
    e && t && t.unsubscribe("idFlowSucceeded", o);
  }), [e, t, o]), { lastHandle: n };
};
function vp({
  factors: e,
  text: t,
  children: n
}) {
  const o = ge();
  return !e && !t ? /* @__PURE__ */ i.jsx(i.Fragment, { children: n }) : /* @__PURE__ */ i.jsx(
    C0,
    {
      ...o,
      text: {
        ...o.text,
        ...t
      },
      factors: e || o.factors,
      children: n
    }
  );
}
function mp({ children: e, name: t }) {
  return /* @__PURE__ */ i.jsx("div", { className: `sid-slot-${t}`, children: e });
}
function gp({ children: e, defaultSlots: t }) {
  return D.useMemo(() => {
    const o = { ...t };
    return D.Children.forEach(e, (r) => {
      if (D.isValidElement(r)) {
        if (r.type !== mp) {
          console.warn(`Passed a non-<Slot> component to a slot: ${r.type}`);
          return;
        }
        r.props.name in t ? o[r.props.name] = r : console.warn(
          `Passed a <Slot> with an unsupported name: ${r.props.name}`
        );
      }
    }), o;
  }, [e, t]);
}
const At = ({
  className: e,
  onSuccess: t,
  onError: n,
  factors: o,
  text: r,
  middleware: a,
  children: s
}) => {
  const c = Gi({ onSuccess: t, onError: n }), { showBanner: l } = ge(), { lastHandle: d } = pp(), f = D.useRef({
    handleType: void 0,
    handleValue: void 0,
    flag: void 0
  }), [u, C] = D.useState(), { status: v } = c, b = D.useMemo(() => ({
    footer: l ? /* @__PURE__ */ i.jsx(dp, {}) : null,
    initial: v === "initial" ? /* @__PURE__ */ i.jsx(ct, {}) : void 0,
    authenticating: v === "authenticating" ? /* @__PURE__ */ i.jsx(es, { flowState: c }) : void 0,
    success: v === "success" ? /* @__PURE__ */ i.jsx(ts, { flowState: c }) : void 0,
    error: v === "error" ? /* @__PURE__ */ i.jsx(Pn, {}) : void 0
  }), [v, l, c]), p = gp({ children: s, defaultSlots: b }), y = G(
    (h, g) => {
      c.status === "initial" && c.logIn(
        {
          factor: h,
          handle: g
        },
        { middleware: a }
      );
    },
    [c, a]
  );
  return /* @__PURE__ */ i.jsx(
    ns.Provider,
    {
      value: {
        flowState: c,
        lastHandle: d,
        handleSubmit: y,
        submitPayloadRef: f,
        selectedFactor: u,
        setSelectedFactor: C
      },
      children: /* @__PURE__ */ i.jsx("div", { className: ee("sid-form", cp, e), children: /* @__PURE__ */ i.jsxs(vp, { text: r, factors: o, children: [
        c.status === "initial" && /* @__PURE__ */ i.jsx(nn, { children: p.initial }),
        c.status === "authenticating" && /* @__PURE__ */ i.jsx(nn, { children: p.authenticating }),
        c.status === "success" && p.success,
        c.status === "error" && p.error,
        p.footer
      ] }) })
    }
  );
};
At.Initial = ct;
At.Error = Pn;
const Xn = "@slashid/GDPR_CONSENT", cs = () => ({
  getConsentLevels: async () => {
    const e = window.localStorage.getItem(
      Xn
    );
    return e === null ? [] : JSON.parse(e);
  },
  setConsentLevels: async (e) => {
    const t = e.map((n) => ({
      consent_level: n,
      created_at: /* @__PURE__ */ new Date()
    }));
    return window.localStorage.setItem(
      Xn,
      JSON.stringify(t)
    ), t;
  },
  deleteConsentLevels: async () => {
    window.localStorage.removeItem(Xn);
  }
}), hp = (e) => ({
  getConsentLevels: async () => {
    const { consents: t } = await e.getGDPRConsent(), n = cs(), o = await n.getConsentLevels();
    if (o.length > 0) {
      const { consents: r } = await e.setGDPRConsent({
        consentLevels: o.map((a) => a.consent_level)
      });
      return n.deleteConsentLevels(), r;
    }
    return t;
  },
  setConsentLevels: async (t) => {
    const { consents: n } = await e.setGDPRConsent({
      consentLevels: t
    });
    return n;
  },
  deleteConsentLevels: async () => e.removeGDPRConsentAll()
}), bp = () => {
  const { user: e, sdkState: t, sid: n } = Fe(), [o, r] = U([]), [a, s] = U("initial"), c = ce(() => {
    if (e)
      return hp(e);
    if (on())
      return cs();
  }, [e]), l = G(async () => {
    if (!c || t !== "ready")
      return;
    const u = await c.getConsentLevels();
    r(u), s("ready");
  }, [c, t]);
  V(() => {
    l();
  }, [l]), V(() => {
    if (n)
      return n.subscribe("idFlowSucceeded", l), () => n.unsubscribe("idFlowSucceeded", l);
  }, [n, l]);
  const d = G(
    async (u) => {
      if (!c)
        return [];
      const C = await c.setConsentLevels(u);
      return r(C), C;
    },
    [c]
  ), f = G(async () => {
    c && (await c.deleteConsentLevels(), r([]));
  }, [c]);
  return {
    consents: o,
    isLoading: a === "initial",
    updateGdprConsent: d,
    deleteGdprConsent: f
  };
}, Cp = ({ fallback: e, children: t }) => {
  const { isLoading: n } = Fe();
  return n ? e ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e,
    ";"
  ] }) : null : /* @__PURE__ */ i.jsx(i.Fragment, { children: t });
}, Jn = ({
  testId: e,
  variant: t,
  label: n,
  hasError: o,
  isActive: r,
  loading: a,
  onClick: s,
  className: c
}) => /* @__PURE__ */ i.jsx(
  Ie,
  {
    testId: e,
    className: c,
    variant: t,
    loading: a && r,
    disabled: a && !r,
    onClick: s,
    children: o && r ? "Try again" : n
  }
), Wo = [
  "necessary",
  "analytics",
  "marketing",
  "retargeting",
  "tracking"
];
var yp = "sluhu7d", wp = "sluhu7a", xp = "sluhu78", _p = "sluhu79", $p = "sluhu74", kp = "sluhu71", Sp = "sluhu72", Ep = "sluhu75", qp = "sluhu77", Pp = "sluhu7b", Tp = "sluhu7e", Op = "sluhu7c", jp = "sluhu73";
const Lp = ({
  consentSettings: e,
  necessaryCookiesRequired: t = !1,
  toggleConsent: n,
  disabled: o = !1
}) => /* @__PURE__ */ i.jsx(
  Cl,
  {
    itemClassName: xp,
    items: Wo.map((r) => ({
      value: r,
      icon: /* @__PURE__ */ i.jsx(
        Qd,
        {
          "data-testid": `sid-gdpr-consent-switch-${r}`,
          blocked: r === "necessary" && t,
          disabled: o,
          checked: e[r],
          onCheckedChange: () => n(r)
        }
      ),
      trigger: /* @__PURE__ */ i.jsx(
        Ce,
        {
          className: _p,
          t: `gdpr.consent.${r}.title`,
          variant: { weight: "semibold" }
        }
      ),
      content: /* @__PURE__ */ i.jsx(
        Ce,
        {
          className: wp,
          t: `gdpr.consent.${r}.description`,
          variant: { size: "sm", color: "contrast" }
        }
      )
    }))
  }
);
var Rp = { exports: {} };
(function(e) {
  var t = function(n) {
    var o = Object.prototype, r = o.hasOwnProperty, a = Object.defineProperty || function(q, E, O) {
      q[E] = O.value;
    }, s, c = typeof Symbol == "function" ? Symbol : {}, l = c.iterator || "@@iterator", d = c.asyncIterator || "@@asyncIterator", f = c.toStringTag || "@@toStringTag";
    function u(q, E, O) {
      return Object.defineProperty(q, E, {
        value: O,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), q[E];
    }
    try {
      u({}, "");
    } catch {
      u = function(E, O, W) {
        return E[O] = W;
      };
    }
    function C(q, E, O, W) {
      var N = E && E.prototype instanceof w ? E : w, te = Object.create(N.prototype), pe = new K(W || []);
      return a(te, "_invoke", { value: F(q, O, pe) }), te;
    }
    n.wrap = C;
    function v(q, E, O) {
      try {
        return { type: "normal", arg: q.call(E, O) };
      } catch (W) {
        return { type: "throw", arg: W };
      }
    }
    var b = "suspendedStart", p = "suspendedYield", y = "executing", h = "completed", g = {};
    function w() {
    }
    function _() {
    }
    function k() {
    }
    var x = {};
    u(x, l, function() {
      return this;
    });
    var $ = Object.getPrototypeOf, S = $ && $($(re([])));
    S && S !== o && r.call(S, l) && (x = S);
    var I = k.prototype = w.prototype = Object.create(x);
    _.prototype = k, a(I, "constructor", { value: k, configurable: !0 }), a(
      k,
      "constructor",
      { value: _, configurable: !0 }
    ), _.displayName = u(
      k,
      f,
      "GeneratorFunction"
    );
    function j(q) {
      ["next", "throw", "return"].forEach(function(E) {
        u(q, E, function(O) {
          return this._invoke(E, O);
        });
      });
    }
    n.isGeneratorFunction = function(q) {
      var E = typeof q == "function" && q.constructor;
      return E ? E === _ || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (E.displayName || E.name) === "GeneratorFunction" : !1;
    }, n.mark = function(q) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(q, k) : (q.__proto__ = k, u(q, f, "GeneratorFunction")), q.prototype = Object.create(I), q;
    }, n.awrap = function(q) {
      return { __await: q };
    };
    function L(q, E) {
      function O(te, pe, ve, z) {
        var Y = v(q[te], q, pe);
        if (Y.type === "throw")
          z(Y.arg);
        else {
          var be = Y.arg, ae = be.value;
          return ae && typeof ae == "object" && r.call(ae, "__await") ? E.resolve(ae.__await).then(function(ne) {
            O("next", ne, ve, z);
          }, function(ne) {
            O("throw", ne, ve, z);
          }) : E.resolve(ae).then(function(ne) {
            be.value = ne, ve(be);
          }, function(ne) {
            return O("throw", ne, ve, z);
          });
        }
      }
      var W;
      function N(te, pe) {
        function ve() {
          return new E(function(z, Y) {
            O(te, pe, z, Y);
          });
        }
        return W = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        W ? W.then(
          ve,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          ve
        ) : ve();
      }
      a(this, "_invoke", { value: N });
    }
    j(L.prototype), u(L.prototype, d, function() {
      return this;
    }), n.AsyncIterator = L, n.async = function(q, E, O, W, N) {
      N === void 0 && (N = Promise);
      var te = new L(
        C(q, E, O, W),
        N
      );
      return n.isGeneratorFunction(E) ? te : te.next().then(function(pe) {
        return pe.done ? pe.value : te.next();
      });
    };
    function F(q, E, O) {
      var W = b;
      return function(te, pe) {
        if (W === y)
          throw new Error("Generator is already running");
        if (W === h) {
          if (te === "throw")
            throw pe;
          return fe();
        }
        for (O.method = te, O.arg = pe; ; ) {
          var ve = O.delegate;
          if (ve) {
            var z = B(ve, O);
            if (z) {
              if (z === g)
                continue;
              return z;
            }
          }
          if (O.method === "next")
            O.sent = O._sent = O.arg;
          else if (O.method === "throw") {
            if (W === b)
              throw W = h, O.arg;
            O.dispatchException(O.arg);
          } else
            O.method === "return" && O.abrupt("return", O.arg);
          W = y;
          var Y = v(q, E, O);
          if (Y.type === "normal") {
            if (W = O.done ? h : p, Y.arg === g)
              continue;
            return {
              value: Y.arg,
              done: O.done
            };
          } else
            Y.type === "throw" && (W = h, O.method = "throw", O.arg = Y.arg);
        }
      };
    }
    function B(q, E) {
      var O = E.method, W = q.iterator[O];
      if (W === s)
        return E.delegate = null, O === "throw" && q.iterator.return && (E.method = "return", E.arg = s, B(q, E), E.method === "throw") || O !== "return" && (E.method = "throw", E.arg = new TypeError(
          "The iterator does not provide a '" + O + "' method"
        )), g;
      var N = v(W, q.iterator, E.arg);
      if (N.type === "throw")
        return E.method = "throw", E.arg = N.arg, E.delegate = null, g;
      var te = N.arg;
      if (!te)
        return E.method = "throw", E.arg = new TypeError("iterator result is not an object"), E.delegate = null, g;
      if (te.done)
        E[q.resultName] = te.value, E.next = q.nextLoc, E.method !== "return" && (E.method = "next", E.arg = s);
      else
        return te;
      return E.delegate = null, g;
    }
    j(I), u(I, f, "Generator"), u(I, l, function() {
      return this;
    }), u(I, "toString", function() {
      return "[object Generator]";
    });
    function H(q) {
      var E = { tryLoc: q[0] };
      1 in q && (E.catchLoc = q[1]), 2 in q && (E.finallyLoc = q[2], E.afterLoc = q[3]), this.tryEntries.push(E);
    }
    function A(q) {
      var E = q.completion || {};
      E.type = "normal", delete E.arg, q.completion = E;
    }
    function K(q) {
      this.tryEntries = [{ tryLoc: "root" }], q.forEach(H, this), this.reset(!0);
    }
    n.keys = function(q) {
      var E = Object(q), O = [];
      for (var W in E)
        O.push(W);
      return O.reverse(), function N() {
        for (; O.length; ) {
          var te = O.pop();
          if (te in E)
            return N.value = te, N.done = !1, N;
        }
        return N.done = !0, N;
      };
    };
    function re(q) {
      if (q) {
        var E = q[l];
        if (E)
          return E.call(q);
        if (typeof q.next == "function")
          return q;
        if (!isNaN(q.length)) {
          var O = -1, W = function N() {
            for (; ++O < q.length; )
              if (r.call(q, O))
                return N.value = q[O], N.done = !1, N;
            return N.value = s, N.done = !0, N;
          };
          return W.next = W;
        }
      }
      return { next: fe };
    }
    n.values = re;
    function fe() {
      return { value: s, done: !0 };
    }
    return K.prototype = {
      constructor: K,
      reset: function(q) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = s, this.done = !1, this.delegate = null, this.method = "next", this.arg = s, this.tryEntries.forEach(A), !q)
          for (var E in this)
            E.charAt(0) === "t" && r.call(this, E) && !isNaN(+E.slice(1)) && (this[E] = s);
      },
      stop: function() {
        this.done = !0;
        var q = this.tryEntries[0], E = q.completion;
        if (E.type === "throw")
          throw E.arg;
        return this.rval;
      },
      dispatchException: function(q) {
        if (this.done)
          throw q;
        var E = this;
        function O(z, Y) {
          return te.type = "throw", te.arg = q, E.next = z, Y && (E.method = "next", E.arg = s), !!Y;
        }
        for (var W = this.tryEntries.length - 1; W >= 0; --W) {
          var N = this.tryEntries[W], te = N.completion;
          if (N.tryLoc === "root")
            return O("end");
          if (N.tryLoc <= this.prev) {
            var pe = r.call(N, "catchLoc"), ve = r.call(N, "finallyLoc");
            if (pe && ve) {
              if (this.prev < N.catchLoc)
                return O(N.catchLoc, !0);
              if (this.prev < N.finallyLoc)
                return O(N.finallyLoc);
            } else if (pe) {
              if (this.prev < N.catchLoc)
                return O(N.catchLoc, !0);
            } else if (ve) {
              if (this.prev < N.finallyLoc)
                return O(N.finallyLoc);
            } else
              throw new Error("try statement without catch or finally");
          }
        }
      },
      abrupt: function(q, E) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var W = this.tryEntries[O];
          if (W.tryLoc <= this.prev && r.call(W, "finallyLoc") && this.prev < W.finallyLoc) {
            var N = W;
            break;
          }
        }
        N && (q === "break" || q === "continue") && N.tryLoc <= E && E <= N.finallyLoc && (N = null);
        var te = N ? N.completion : {};
        return te.type = q, te.arg = E, N ? (this.method = "next", this.next = N.finallyLoc, g) : this.complete(te);
      },
      complete: function(q, E) {
        if (q.type === "throw")
          throw q.arg;
        return q.type === "break" || q.type === "continue" ? this.next = q.arg : q.type === "return" ? (this.rval = this.arg = q.arg, this.method = "return", this.next = "end") : q.type === "normal" && E && (this.next = E), g;
      },
      finish: function(q) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var O = this.tryEntries[E];
          if (O.finallyLoc === q)
            return this.complete(O.completion, O.afterLoc), A(O), g;
        }
      },
      catch: function(q) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var O = this.tryEntries[E];
          if (O.tryLoc === q) {
            var W = O.completion;
            if (W.type === "throw") {
              var N = W.arg;
              A(O);
            }
            return N;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(q, E, O) {
        return this.delegate = {
          iterator: re(q),
          resultName: E,
          nextLoc: O
        }, this.method === "next" && (this.arg = s), g;
      }
    }, n;
  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    e.exports
  );
  try {
    regeneratorRuntime = t;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t);
  }
})(Rp);
const Ip = (e) => Object.fromEntries(e), ls = (e) => Ip(
  Wo.map(
    (t) => [
      t,
      e.map(({ consent_level: n }) => n).includes(t)
    ]
  )
), Ap = (e, t) => ({
  consentSettings: e,
  activeAction: null,
  open: t,
  isLoading: !1,
  hasError: !1,
  isCustomizing: !1
}), Mp = (e, t) => {
  switch (t.type) {
    case "SET_OPEN":
      return {
        ...e,
        open: t.payload
      };
    case "START_ACTION":
      return {
        ...e,
        activeAction: t.payload,
        hasError: !1,
        isLoading: !0
      };
    case "COMPLETE_ACTION":
      return {
        ...e,
        isLoading: !1
      };
    case "SET_HAS_ERROR":
      return {
        ...e,
        hasError: t.payload
      };
    case "SET_IS_CUSTOMIZING":
      return {
        ...e,
        hasError: !1,
        isCustomizing: t.payload
      };
    case "SYNC_CONSENT_SETTINGS":
      return {
        ...e,
        consentSettings: ls(t.payload),
        open: !1
      };
    case "TOGGLE_CONSENT":
      return {
        ...e,
        consentSettings: {
          ...e.consentSettings,
          [t.payload]: !e.consentSettings[t.payload]
        }
      };
    default:
      return e;
  }
}, ds = J(
  ({ buttonClassName: e, ...t }, n) => /* @__PURE__ */ i.jsx(Q1, { to: "sid-cookie-button", children: /* @__PURE__ */ i.jsx(
    Ie,
    {
      ...t,
      ref: n,
      testId: "sid-gdpr-consent-dialog-trigger",
      variant: "neutralMd",
      className: ee(
        "sid-gdpr-consent-dialog-trigger",
        Sp,
        e
      ),
      children: /* @__PURE__ */ i.jsx(ya, {})
    }
  ) })
);
ds.displayName = "TriggerButton";
const Np = ({
  consents: e,
  updateGdprConsent: t,
  className: n,
  triggerClassName: o,
  onSuccess: r,
  onError: a,
  container: s,
  necessaryCookiesRequired: c = !1,
  defaultAcceptAllLevels: l = [...Wo],
  defaultRejectAllLevels: d = ["none"],
  forceConsent: f = !1,
  forceOpen: u = !1
}) => {
  const C = ce(
    () => ({
      ...ls(e),
      necessary: c
    }),
    [e, c]
  ), v = ce(
    () => u ? !0 : !e.length,
    [e.length, u]
  ), [b, p] = ta(
    Mp,
    Ap(C, v)
  ), {
    consentSettings: y,
    activeAction: h,
    open: g,
    isLoading: w,
    hasError: _,
    isCustomizing: k
  } = b, x = async (L, F) => {
    p({ type: "START_ACTION", payload: F });
    try {
      const B = await t(L);
      r == null || r(B), p({ type: "SYNC_CONSENT_SETTINGS", payload: B });
    } catch (B) {
      p({ type: "SET_HAS_ERROR", payload: !0 }), a == null || a(B);
    } finally {
      p({ type: "COMPLETE_ACTION" });
    }
  }, $ = async () => {
    const L = Object.entries(y).filter(([, F]) => F).map(([F]) => F);
    return x(L, "save");
  }, S = () => x(l, "accept"), I = () => x(d, "reject"), j = () => {
    p({ type: "SET_IS_CUSTOMIZING", payload: !0 });
  };
  return V(() => {
    g || p({ type: "SET_IS_CUSTOMIZING", payload: !1 });
  }, [g]), /* @__PURE__ */ i.jsxs(
    Dd,
    {
      className: ee("sid-gdpr-consent-dialog", kp, n),
      modal: f,
      dismissable: !f,
      open: g,
      container: s,
      onOpenChange: (L) => p({ type: "SET_OPEN", payload: L }),
      trigger: /* @__PURE__ */ i.jsx(ds, { buttonClassName: o }),
      icon: /* @__PURE__ */ i.jsx(ya, { fill: wt.color.primary }),
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: jp, children: [
          /* @__PURE__ */ i.jsx(Ce, { t: "gdpr.dialog.title", variant: { weight: "bold" } }),
          /* @__PURE__ */ i.jsx(
            Ce,
            {
              t: "gdpr.dialog.subtitle",
              variant: { weight: "semibold", color: "contrast" }
            }
          )
        ] }),
        (k || _) && /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: ee($p, { [Ep]: _ }),
            children: [
              k && /* @__PURE__ */ i.jsx(
                Lp,
                {
                  consentSettings: y,
                  necessaryCookiesRequired: c,
                  toggleConsent: (L) => p({ type: "TOGGLE_CONSENT", payload: L }),
                  disabled: w
                }
              ),
              _ && /* @__PURE__ */ i.jsxs("div", { className: qp, children: [
                /* @__PURE__ */ i.jsx(
                  Ce,
                  {
                    t: "gdpr.dialog.error.title",
                    variant: {
                      weight: "semibold",
                      color: "contrast"
                    }
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  Ce,
                  {
                    t: "gdpr.dialog.error.subtitle",
                    variant: { weight: "semibold", color: "tertiary" }
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: Pp, children: [
          k && /* @__PURE__ */ i.jsx(
            Jn,
            {
              testId: "sid-gdpr-consent-dialog-save",
              variant: "neutralMd",
              label: "Save settings",
              hasError: _,
              isActive: h === "save",
              loading: w,
              onClick: $,
              className: Op
            }
          ),
          /* @__PURE__ */ i.jsx(
            Jn,
            {
              testId: "sid-gdpr-consent-dialog-accept",
              variant: "secondaryMd",
              label: "Accept all",
              hasError: _,
              isActive: h === "accept",
              loading: w,
              onClick: S,
              className: yp
            }
          ),
          /* @__PURE__ */ i.jsx(
            Jn,
            {
              testId: "sid-gdpr-consent-dialog-reject",
              variant: "secondaryMd",
              label: "Reject all",
              hasError: _,
              isActive: h === "reject",
              loading: w,
              onClick: I,
              className: Tp
            }
          ),
          !k && /* @__PURE__ */ i.jsx(
            Ie,
            {
              testId: "sid-gdpr-consent-dialog-customize",
              variant: "ghostMd",
              onClick: j,
              disabled: w,
              children: "Customize"
            }
          )
        ] })
      ]
    }
  );
}, av = (e) => {
  const { consents: t, isLoading: n, updateGdprConsent: o } = bp();
  return n ? null : /* @__PURE__ */ i.jsx(Cp, { children: /* @__PURE__ */ i.jsx(
    Np,
    {
      consents: t,
      updateGdprConsent: o,
      ...e
    }
  ) });
}, us = ({ belongsTo: e, children: t }) => {
  const { user: n } = Fe();
  return ce(() => {
    if (!n)
      return !1;
    const r = n.getGroups();
    return typeof e == "string" ? r.includes(e) : e(r);
  }, [n, e]) ? /* @__PURE__ */ i.jsx(i.Fragment, { children: t }) : null;
};
us.some = (...e) => (t) => e.some((n) => t.includes(n));
us.all = (...e) => (t) => e.every((n) => t.includes(n));
const zp = (e, t) => {
  for (const n of t)
    if (!e.authentication.includes(n))
      return !1;
  return !0;
}, fs = ({ children: e, withFactorMethods: t }) => {
  const { user: n, isAuthenticated: o } = Fe();
  return ce(() => !o || !n ? !1 : t && Array.isArray(t) ? zp(n, t) : t && typeof t == "function" ? t(n.authentication) : !0, [n, t, o]) ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e }) : null;
}, Dp = ({ children: e }) => {
  const { isAuthenticated: t, isLoading: n } = Fe();
  return t || n ? null : /* @__PURE__ */ i.jsx(i.Fragment, { children: e });
};
function iv({
  steps: e,
  className: t,
  onSuccess: n
}) {
  if (!e.length)
    return null;
  const o = e[0], r = e.slice(1);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(Dp, { children: /* @__PURE__ */ i.jsx(
      At,
      {
        className: t,
        factors: o.factors,
        text: o.text
      }
    ) }),
    r.map(({ factors: a, text: s }, c) => /* @__PURE__ */ i.jsx(
      fs,
      {
        withFactorMethods: (l) => l.length === c + 1,
        children: /* @__PURE__ */ i.jsx(
          At,
          {
            className: t,
            factors: a,
            text: {
              "initial.title": "Multi-Factor Authentication",
              ...s || {}
            },
            onSuccess: c === r.length + 1 ? n : void 0
          }
        )
      },
      c
    ))
  ] });
}
const Fp = () => {
  const { user: e, __switchOrganizationInContext: t } = Fe(), [n, o] = U([]);
  V(() => {
    e && (o([]), e.getOrganizations().then((c) => {
      o(c);
    }));
  }, [e]);
  const r = ce(() => e ? n.find((c) => c.id === e.oid) ?? null : null, [n, e]), a = ce(
    () => !n.length || !r,
    [n, r]
  ), s = G(
    ({ oid: c }) => t({ oid: c }),
    [t]
  );
  return {
    organizations: n,
    currentOrganization: r,
    switchOrganization: s,
    isLoading: a
  };
};
var Vp = "ccyrlr0";
const ps = xe({ marginBottom: "3", marginTop: "5" }), Bp = () => {
}, Hp = () => {
  const { text: e } = ge();
  return /* @__PURE__ */ i.jsx(
    Sn,
    {
      defaultValue: "",
      disabled: !0,
      className: ps,
      items: [{ label: "-", value: "" }],
      onChange: Bp,
      label: e["org.switcher.label"]
    }
  );
}, ea = ({ children: e }) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: ee(Vp, "sid-organization-switcher"),
    children: e
  }
), sv = ({
  filter: e,
  fallback: t = /* @__PURE__ */ i.jsx(Hp, {}),
  renderLabel: n
}) => {
  const { text: o } = ge(), {
    organizations: r,
    currentOrganization: a,
    switchOrganization: s,
    isLoading: c
  } = Fp(), l = ce(() => e ? r.filter(e) : r, [e, r]);
  return c || !a ? /* @__PURE__ */ i.jsx(ea, { children: t }) : /* @__PURE__ */ i.jsx(ea, { children: /* @__PURE__ */ i.jsx(
    Sn,
    {
      defaultValue: a.id,
      className: ps,
      label: o["org.switcher.label"],
      items: l.map((d) => ({
        label: n ? n(d) : d.org_name,
        value: d.id
      })),
      onChange: (d) => s({ oid: d })
    }
  ) });
};
function cv({
  factors: e,
  text: t,
  className: n,
  onSuccess: o
}) {
  return /* @__PURE__ */ i.jsx(fs, { children: /* @__PURE__ */ i.jsx(
    At,
    {
      className: n,
      factors: e,
      text: {
        "initial.title": "Confirm it's you",
        "initial.subtitle": "Reauthenticate to proceed",
        ...t || {}
      },
      onSuccess: o
    }
  ) });
}
export {
  Mo as ConfigurationContext,
  C0 as ConfigurationProvider,
  rv as DynamicFlow,
  At as Form,
  av as GDPRConsentDialog,
  us as Groups,
  fs as LoggedIn,
  Dp as LoggedOut,
  iv as MultiFactorAuth,
  sv as OrganizationSwitcher,
  ia as ServerThemeRoot,
  Ao as SlashIDContext,
  Cp as SlashIDLoaded,
  ov as SlashIDProvider,
  mp as Slot,
  cv as StepUpAuth,
  nv as defaultOrganization,
  bp as useGDPRConsent,
  Fp as useOrganizations,
  Fe as useSlashID
};
//# sourceMappingURL=main.js.map
