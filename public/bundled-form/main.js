var dR = Object.defineProperty;
var fR = (n, a, o) => a in n ? dR(n, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[a] = o;
var Hw = (n, a, o) => (fR(n, typeof a != "symbol" ? a + "" : a, o), o);
function pR(n, a) {
  for (var o = 0; o < a.length; o++) {
    const l = a[o];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const c in l)
        if (c !== "default" && !(c in n)) {
          const p = Object.getOwnPropertyDescriptor(l, c);
          p && Object.defineProperty(n, c, p.get ? p : {
            enumerable: !0,
            get: () => l[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function hR(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var a5 = { exports: {} }, Pf = {}, i5 = { exports: {} }, Hf = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Hf.exports;
(function(n, a) {
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = "18.2.0", l = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), b = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function q(g) {
      if (g === null || typeof g != "object")
        return null;
      var $ = z && g[z] || g[M];
      return typeof $ == "function" ? $ : null;
    }
    var P = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, Z = {
      transition: null
    }, j = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, I = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, N = {}, J = null;
    function Ce(g) {
      J = g;
    }
    N.setExtraStackFrame = function(g) {
      J = g;
    }, N.getCurrentStack = null, N.getStackAddendum = function() {
      var g = "";
      J && (g += J);
      var $ = N.getCurrentStack;
      return $ && (g += $() || ""), g;
    };
    var ne = !1, re = !1, we = !1, le = !1, oe = !1, se = {
      ReactCurrentDispatcher: P,
      ReactCurrentBatchConfig: Z,
      ReactCurrentOwner: I
    };
    se.ReactDebugCurrentFrame = N, se.ReactCurrentActQueue = j;
    function ge(g) {
      {
        for (var $ = arguments.length, B = new Array($ > 1 ? $ - 1 : 0), G = 1; G < $; G++)
          B[G - 1] = arguments[G];
        Ie("warn", g, B);
      }
    }
    function ce(g) {
      {
        for (var $ = arguments.length, B = new Array($ > 1 ? $ - 1 : 0), G = 1; G < $; G++)
          B[G - 1] = arguments[G];
        Ie("error", g, B);
      }
    }
    function Ie(g, $, B) {
      {
        var G = se.ReactDebugCurrentFrame, te = G.getStackAddendum();
        te !== "" && ($ += "%s", B = B.concat([te]));
        var De = B.map(function(be) {
          return String(be);
        });
        De.unshift("Warning: " + $), Function.prototype.apply.call(console[g], console, De);
      }
    }
    var It = {};
    function bt(g, $) {
      {
        var B = g.constructor, G = B && (B.displayName || B.name) || "ReactClass", te = G + "." + $;
        if (It[te])
          return;
        ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", $, G), It[te] = !0;
      }
    }
    var Rt = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function(g) {
        return !1;
      },
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function(g, $, B) {
        bt(g, "forceUpdate");
      },
      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function(g, $, B, G) {
        bt(g, "replaceState");
      },
      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function(g, $, B, G) {
        bt(g, "setState");
      }
    }, yt = Object.assign, Ut = {};
    Object.freeze(Ut);
    function kt(g, $, B) {
      this.props = g, this.context = $, this.refs = Ut, this.updater = B || Rt;
    }
    kt.prototype.isReactComponent = {}, kt.prototype.setState = function(g, $) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, g, $, "setState");
    }, kt.prototype.forceUpdate = function(g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    };
    {
      var Ft = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, Wt = function(g, $) {
        Object.defineProperty(kt.prototype, g, {
          get: function() {
            ge("%s(...) is deprecated in plain JavaScript React classes. %s", $[0], $[1]);
          }
        });
      };
      for (var Re in Ft)
        Ft.hasOwnProperty(Re) && Wt(Re, Ft[Re]);
    }
    function Ve() {
    }
    Ve.prototype = kt.prototype;
    function at(g, $, B) {
      this.props = g, this.context = $, this.refs = Ut, this.updater = B || Rt;
    }
    var He = at.prototype = new Ve();
    He.constructor = at, yt(He, kt.prototype), He.isPureReactComponent = !0;
    function Ne() {
      var g = {
        current: null
      };
      return Object.seal(g), g;
    }
    var Pe = Array.isArray;
    function Je(g) {
      return Pe(g);
    }
    function ut(g) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, B = $ && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return B;
      }
    }
    function qt(g) {
      try {
        return zt(g), !1;
      } catch {
        return !0;
      }
    }
    function zt(g) {
      return "" + g;
    }
    function Tt(g) {
      if (qt(g))
        return ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(g)), zt(g);
    }
    function Fn(g, $, B) {
      var G = g.displayName;
      if (G)
        return G;
      var te = $.displayName || $.name || "";
      return te !== "" ? B + "(" + te + ")" : B;
    }
    function Xn(g) {
      return g.displayName || "Context";
    }
    function tn(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case v:
          return "Profiler";
        case d:
          return "StrictMode";
        case _:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case b:
            var $ = g;
            return Xn($) + ".Consumer";
          case w:
            var B = g;
            return Xn(B._context) + ".Provider";
          case E:
            return Fn(g, g.render, "ForwardRef");
          case k:
            var G = g.displayName || null;
            return G !== null ? G : tn(g.type) || "Memo";
          case T: {
            var te = g, De = te._payload, be = te._init;
            try {
              return tn(be(De));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Pr = Object.prototype.hasOwnProperty, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Vn, kr, On;
    On = {};
    function cr(g) {
      if (Pr.call(g, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(g, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Bt(g) {
      if (Pr.call(g, "key")) {
        var $ = Object.getOwnPropertyDescriptor(g, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Tr(g, $) {
      var B = function() {
        Vn || (Vn = !0, ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
      };
      B.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: B,
        configurable: !0
      });
    }
    function Da(g, $) {
      var B = function() {
        kr || (kr = !0, ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
      };
      B.isReactWarning = !0, Object.defineProperty(g, "ref", {
        get: B,
        configurable: !0
      });
    }
    function Oa(g) {
      if (typeof g.ref == "string" && I.current && g.__self && I.current.stateNode !== g.__self) {
        var $ = tn(I.current.type);
        On[$] || (ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $, g.ref), On[$] = !0);
      }
    }
    var ue = function(g, $, B, G, te, De, be) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: g,
        key: $,
        ref: B,
        props: be,
        // Record the component responsible for creating this element.
        _owner: De
      };
      return Le._store = {}, Object.defineProperty(Le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function xe(g, $, B) {
      var G, te = {}, De = null, be = null, Le = null, We = null;
      if ($ != null) {
        cr($) && (be = $.ref, Oa($)), Bt($) && (Tt($.key), De = "" + $.key), Le = $.__self === void 0 ? null : $.__self, We = $.__source === void 0 ? null : $.__source;
        for (G in $)
          Pr.call($, G) && !Rr.hasOwnProperty(G) && (te[G] = $[G]);
      }
      var ht = arguments.length - 2;
      if (ht === 1)
        te.children = B;
      else if (ht > 1) {
        for (var wt = Array(ht), St = 0; St < ht; St++)
          wt[St] = arguments[St + 2];
        Object.freeze && Object.freeze(wt), te.children = wt;
      }
      if (g && g.defaultProps) {
        var At = g.defaultProps;
        for (G in At)
          te[G] === void 0 && (te[G] = At[G]);
      }
      if (De || be) {
        var Vt = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
        De && Tr(te, Vt), be && Da(te, Vt);
      }
      return ue(g, De, be, Le, We, I.current, te);
    }
    function Be(g, $) {
      var B = ue(g.type, $, g.ref, g._self, g._source, g._owner, g.props);
      return B;
    }
    function ft(g, $, B) {
      if (g == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
      var G, te = yt({}, g.props), De = g.key, be = g.ref, Le = g._self, We = g._source, ht = g._owner;
      if ($ != null) {
        cr($) && (be = $.ref, ht = I.current), Bt($) && (Tt($.key), De = "" + $.key);
        var wt;
        g.type && g.type.defaultProps && (wt = g.type.defaultProps);
        for (G in $)
          Pr.call($, G) && !Rr.hasOwnProperty(G) && ($[G] === void 0 && wt !== void 0 ? te[G] = wt[G] : te[G] = $[G]);
      }
      var St = arguments.length - 2;
      if (St === 1)
        te.children = B;
      else if (St > 1) {
        for (var At = Array(St), Vt = 0; Vt < St; Vt++)
          At[Vt] = arguments[Vt + 2];
        te.children = At;
      }
      return ue(g.type, De, be, Le, We, ht, te);
    }
    function pt(g) {
      return typeof g == "object" && g !== null && g.$$typeof === l;
    }
    var nn = ".", jt = ":";
    function Jn(g) {
      var $ = /[=:]/g, B = {
        "=": "=0",
        ":": "=2"
      }, G = g.replace($, function(te) {
        return B[te];
      });
      return "$" + G;
    }
    var Ct = !1, dr = /\/+/g;
    function $t(g) {
      return g.replace(dr, "$&/");
    }
    function Dt(g, $) {
      return typeof g == "object" && g !== null && g.key != null ? (Tt(g.key), Jn("" + g.key)) : $.toString(36);
    }
    function oa(g, $, B, G, te) {
      var De = typeof g;
      (De === "undefined" || De === "boolean") && (g = null);
      var be = !1;
      if (g === null)
        be = !0;
      else
        switch (De) {
          case "string":
          case "number":
            be = !0;
            break;
          case "object":
            switch (g.$$typeof) {
              case l:
              case c:
                be = !0;
            }
        }
      if (be) {
        var Le = g, We = te(Le), ht = G === "" ? nn + Dt(Le, 0) : G;
        if (Je(We)) {
          var wt = "";
          ht != null && (wt = $t(ht) + "/"), oa(We, $, wt, "", function(gp) {
            return gp;
          });
        } else
          We != null && (pt(We) && (We.key && (!Le || Le.key !== We.key) && Tt(We.key), We = Be(
            We,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (We.key && (!Le || Le.key !== We.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              $t("" + We.key) + "/"
            ) : "") + ht
          )), $.push(We));
        return 1;
      }
      var St, At, Vt = 0, ot = G === "" ? nn : G + jt;
      if (Je(g))
        for (var Ci = 0; Ci < g.length; Ci++)
          St = g[Ci], At = ot + Dt(St, Ci), Vt += oa(St, $, B, At, te);
      else {
        var Yo = q(g);
        if (typeof Yo == "function") {
          var Cl = g;
          Yo === Cl.entries && (Ct || ge("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ct = !0);
          for (var mp = Yo.call(Cl), za, wl = 0; !(za = mp.next()).done; )
            St = za.value, At = ot + Dt(St, wl++), Vt += oa(St, $, B, At, te);
        } else if (De === "object") {
          var Sl = String(g);
          throw new Error("Objects are not valid as a React child (found: " + (Sl === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : Sl) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return Vt;
    }
    function Ur(g, $, B) {
      if (g == null)
        return g;
      var G = [], te = 0;
      return oa(g, G, "", "", function(De) {
        return $.call(B, De, te++);
      }), G;
    }
    function Qi(g) {
      var $ = 0;
      return Ur(g, function() {
        $++;
      }), $;
    }
    function Uo(g, $, B) {
      Ur(g, function() {
        $.apply(this, arguments);
      }, B);
    }
    function ol(g) {
      return Ur(g, function($) {
        return $;
      }) || [];
    }
    function Xi(g) {
      if (!pt(g))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return g;
    }
    function Ji(g) {
      var $ = {
        $$typeof: b,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: g,
        _currentValue2: g,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null,
        // Add these to use same hidden class in VM as ServerContext
        _defaultValue: null,
        _globalName: null
      };
      $.Provider = {
        $$typeof: w,
        _context: $
      };
      var B = !1, G = !1, te = !1;
      {
        var De = {
          $$typeof: b,
          _context: $
        };
        Object.defineProperties(De, {
          Provider: {
            get: function() {
              return G || (G = !0, ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), $.Provider;
            },
            set: function(be) {
              $.Provider = be;
            }
          },
          _currentValue: {
            get: function() {
              return $._currentValue;
            },
            set: function(be) {
              $._currentValue = be;
            }
          },
          _currentValue2: {
            get: function() {
              return $._currentValue2;
            },
            set: function(be) {
              $._currentValue2 = be;
            }
          },
          _threadCount: {
            get: function() {
              return $._threadCount;
            },
            set: function(be) {
              $._threadCount = be;
            }
          },
          Consumer: {
            get: function() {
              return B || (B = !0, ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), $.Consumer;
            }
          },
          displayName: {
            get: function() {
              return $.displayName;
            },
            set: function(be) {
              te || (ge("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", be), te = !0);
            }
          }
        }), $.Consumer = De;
      }
      return $._currentRenderer = null, $._currentRenderer2 = null, $;
    }
    var La = -1, fi = 0, Aa = 1, sa = 2;
    function Fr(g) {
      if (g._status === La) {
        var $ = g._result, B = $();
        if (B.then(function(De) {
          if (g._status === fi || g._status === La) {
            var be = g;
            be._status = Aa, be._result = De;
          }
        }, function(De) {
          if (g._status === fi || g._status === La) {
            var be = g;
            be._status = sa, be._result = De;
          }
        }), g._status === La) {
          var G = g;
          G._status = fi, G._result = B;
        }
      }
      if (g._status === Aa) {
        var te = g._result;
        return te === void 0 && ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, te), "default" in te || ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, te), te.default;
      } else
        throw g._result;
    }
    function la(g) {
      var $ = {
        // We use these fields to store the result.
        _status: La,
        _result: g
      }, B = {
        $$typeof: T,
        _payload: $,
        _init: Fr
      };
      {
        var G, te;
        Object.defineProperties(B, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(De) {
              ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = De, Object.defineProperty(B, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return te;
            },
            set: function(De) {
              ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = De, Object.defineProperty(B, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return B;
    }
    function eo(g) {
      g != null && g.$$typeof === k ? ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? ce("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && ce("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var $ = {
        $$typeof: E,
        render: g
      };
      {
        var B;
        Object.defineProperty($, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return B;
          },
          set: function(G) {
            B = G, !g.name && !g.displayName && (g.displayName = G);
          }
        });
      }
      return $;
    }
    var D;
    D = Symbol.for("react.module.reference");
    function X(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === p || g === v || oe || g === d || g === _ || g === R || le || g === O || ne || re || we || typeof g == "object" && g !== null && (g.$$typeof === T || g.$$typeof === k || g.$$typeof === w || g.$$typeof === b || g.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === D || g.getModuleId !== void 0));
    }
    function ie(g, $) {
      X(g) || ce("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
      var B = {
        $$typeof: k,
        type: g,
        compare: $ === void 0 ? null : $
      };
      {
        var G;
        Object.defineProperty(B, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return G;
          },
          set: function(te) {
            G = te, !g.name && !g.displayName && (g.displayName = te);
          }
        });
      }
      return B;
    }
    function me() {
      var g = P.current;
      return g === null && ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
    }
    function Ge(g) {
      var $ = me();
      if (g._context !== void 0) {
        var B = g._context;
        B.Consumer === g ? ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === g && ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return $.useContext(g);
    }
    function et(g) {
      var $ = me();
      return $.useState(g);
    }
    function Ue(g, $, B) {
      var G = me();
      return G.useReducer(g, $, B);
    }
    function ke(g) {
      var $ = me();
      return $.useRef(g);
    }
    function rn(g, $) {
      var B = me();
      return B.useEffect(g, $);
    }
    function Ot(g, $) {
      var B = me();
      return B.useInsertionEffect(g, $);
    }
    function Lt(g, $) {
      var B = me();
      return B.useLayoutEffect(g, $);
    }
    function Ln(g, $) {
      var B = me();
      return B.useCallback(g, $);
    }
    function ua(g, $) {
      var B = me();
      return B.useMemo(g, $);
    }
    function Fo(g, $, B) {
      var G = me();
      return G.useImperativeHandle(g, $, B);
    }
    function er(g, $) {
      {
        var B = me();
        return B.useDebugValue(g, $);
      }
    }
    function dp() {
      var g = me();
      return g.useTransition();
    }
    function Ma(g) {
      var $ = me();
      return $.useDeferredValue(g);
    }
    function Ye() {
      var g = me();
      return g.useId();
    }
    function to(g, $, B) {
      var G = me();
      return G.useSyncExternalStore(g, $, B);
    }
    var pi = 0, sl, ll, ul, cl, dl, fl, pl;
    function vc() {
    }
    vc.__reactDisabledLog = !0;
    function fp() {
      {
        if (pi === 0) {
          sl = console.log, ll = console.info, ul = console.warn, cl = console.error, dl = console.group, fl = console.groupCollapsed, pl = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: vc,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        pi++;
      }
    }
    function hl() {
      {
        if (pi--, pi === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: yt({}, g, {
              value: sl
            }),
            info: yt({}, g, {
              value: ll
            }),
            warn: yt({}, g, {
              value: ul
            }),
            error: yt({}, g, {
              value: cl
            }),
            group: yt({}, g, {
              value: dl
            }),
            groupCollapsed: yt({}, g, {
              value: fl
            }),
            groupEnd: yt({}, g, {
              value: pl
            })
          });
        }
        pi < 0 && ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var no = se.ReactCurrentDispatcher, $r;
    function hi(g, $, B) {
      {
        if ($r === void 0)
          try {
            throw Error();
          } catch (te) {
            var G = te.stack.trim().match(/\n( *(at )?)/);
            $r = G && G[1] || "";
          }
        return `
` + $r + g;
      }
    }
    var vi = !1, Vo;
    {
      var vl = typeof WeakMap == "function" ? WeakMap : Map;
      Vo = new vl();
    }
    function mc(g, $) {
      if (!g || vi)
        return "";
      {
        var B = Vo.get(g);
        if (B !== void 0)
          return B;
      }
      var G;
      vi = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var De;
      De = no.current, no.current = null, fp();
      try {
        if ($) {
          var be = function() {
            throw Error();
          };
          if (Object.defineProperty(be.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(be, []);
            } catch (ot) {
              G = ot;
            }
            Reflect.construct(g, [], be);
          } else {
            try {
              be.call();
            } catch (ot) {
              G = ot;
            }
            g.call(be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            G = ot;
          }
          g();
        }
      } catch (ot) {
        if (ot && G && typeof ot.stack == "string") {
          for (var Le = ot.stack.split(`
`), We = G.stack.split(`
`), ht = Le.length - 1, wt = We.length - 1; ht >= 1 && wt >= 0 && Le[ht] !== We[wt]; )
            wt--;
          for (; ht >= 1 && wt >= 0; ht--, wt--)
            if (Le[ht] !== We[wt]) {
              if (ht !== 1 || wt !== 1)
                do
                  if (ht--, wt--, wt < 0 || Le[ht] !== We[wt]) {
                    var St = `
` + Le[ht].replace(" at new ", " at ");
                    return g.displayName && St.includes("<anonymous>") && (St = St.replace("<anonymous>", g.displayName)), typeof g == "function" && Vo.set(g, St), St;
                  }
                while (ht >= 1 && wt >= 0);
              break;
            }
        }
      } finally {
        vi = !1, no.current = De, hl(), Error.prepareStackTrace = te;
      }
      var At = g ? g.displayName || g.name : "", Vt = At ? hi(At) : "";
      return typeof g == "function" && Vo.set(g, Vt), Vt;
    }
    function ml(g, $, B) {
      return mc(g, !1);
    }
    function pp(g) {
      var $ = g.prototype;
      return !!($ && $.isReactComponent);
    }
    function mi(g, $, B) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return mc(g, pp(g));
      if (typeof g == "string")
        return hi(g);
      switch (g) {
        case _:
          return hi("Suspense");
        case R:
          return hi("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case E:
            return ml(g.render);
          case k:
            return mi(g.type, $, B);
          case T: {
            var G = g, te = G._payload, De = G._init;
            try {
              return mi(De(te), $, B);
            } catch {
            }
          }
        }
      return "";
    }
    var gc = {}, gl = se.ReactDebugCurrentFrame;
    function Ho(g) {
      if (g) {
        var $ = g._owner, B = mi(g.type, g._source, $ ? $.type : null);
        gl.setExtraStackFrame(B);
      } else
        gl.setExtraStackFrame(null);
    }
    function yc(g, $, B, G, te) {
      {
        var De = Function.call.bind(Pr);
        for (var be in g)
          if (De(g, be)) {
            var Le = void 0;
            try {
              if (typeof g[be] != "function") {
                var We = Error((G || "React class") + ": " + B + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw We.name = "Invariant Violation", We;
              }
              Le = g[be]($, be, G, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ht) {
              Le = ht;
            }
            Le && !(Le instanceof Error) && (Ho(te), ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", B, be, typeof Le), Ho(null)), Le instanceof Error && !(Le.message in gc) && (gc[Le.message] = !0, Ho(te), ce("Failed %s type: %s", B, Le.message), Ho(null));
          }
      }
    }
    function it(g) {
      if (g) {
        var $ = g._owner, B = mi(g.type, g._source, $ ? $.type : null);
        Ce(B);
      } else
        Ce(null);
    }
    var yl;
    yl = !1;
    function bl() {
      if (I.current) {
        var g = tn(I.current.type);
        if (g)
          return `

Check the render method of \`` + g + "`.";
      }
      return "";
    }
    function ze(g) {
      if (g !== void 0) {
        var $ = g.fileName.replace(/^.*[\\\/]/, ""), B = g.lineNumber;
        return `

Check your code at ` + $ + ":" + B + ".";
      }
      return "";
    }
    function bc(g) {
      return g != null ? ze(g.__source) : "";
    }
    var An = {};
    function ro(g) {
      var $ = bl();
      if (!$) {
        var B = typeof g == "string" ? g : g.displayName || g.name;
        B && ($ = `

Check the top-level render call using <` + B + ">.");
      }
      return $;
    }
    function gi(g, $) {
      if (!(!g._store || g._store.validated || g.key != null)) {
        g._store.validated = !0;
        var B = ro($);
        if (!An[B]) {
          An[B] = !0;
          var G = "";
          g && g._owner && g._owner !== I.current && (G = " It was passed a child from " + tn(g._owner.type) + "."), it(g), ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, G), it(null);
        }
      }
    }
    function Cc(g, $) {
      if (typeof g == "object") {
        if (Je(g))
          for (var B = 0; B < g.length; B++) {
            var G = g[B];
            pt(G) && gi(G, $);
          }
        else if (pt(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var te = q(g);
          if (typeof te == "function" && te !== g.entries)
            for (var De = te.call(g), be; !(be = De.next()).done; )
              pt(be.value) && gi(be.value, $);
        }
      }
    }
    function hn(g) {
      {
        var $ = g.type;
        if ($ == null || typeof $ == "string")
          return;
        var B;
        if (typeof $ == "function")
          B = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === k))
          B = $.propTypes;
        else
          return;
        if (B) {
          var G = tn($);
          yc(B, g.props, "prop", G, g);
        } else if ($.PropTypes !== void 0 && !yl) {
          yl = !0;
          var te = tn($);
          ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nt(g) {
      {
        for (var $ = Object.keys(g.props), B = 0; B < $.length; B++) {
          var G = $[B];
          if (G !== "children" && G !== "key") {
            it(g), ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), it(null);
            break;
          }
        }
        g.ref !== null && (it(g), ce("Invalid attribute `ref` supplied to `React.Fragment`."), it(null));
      }
    }
    function wc(g, $, B) {
      var G = X(g);
      if (!G) {
        var te = "";
        (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var De = bc($);
        De ? te += De : te += bl();
        var be;
        g === null ? be = "null" : Je(g) ? be = "array" : g !== void 0 && g.$$typeof === l ? (be = "<" + (tn(g.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : be = typeof g, ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, te);
      }
      var Le = xe.apply(this, arguments);
      if (Le == null)
        return Le;
      if (G)
        for (var We = 2; We < arguments.length; We++)
          Cc(arguments[We], g);
      return g === p ? Nt(Le) : hn(Le), Le;
    }
    var fr = !1;
    function tr(g) {
      var $ = wc.bind(null, g);
      return $.type = g, fr || (fr = !0, ge("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty($, "type", {
        enumerable: !1,
        get: function() {
          return ge("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: g
          }), g;
        }
      }), $;
    }
    function ca(g, $, B) {
      for (var G = ft.apply(this, arguments), te = 2; te < arguments.length; te++)
        Cc(arguments[te], G.type);
      return hn(G), G;
    }
    function hp(g, $) {
      var B = Z.transition;
      Z.transition = {};
      var G = Z.transition;
      Z.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        g();
      } finally {
        if (Z.transition = B, B === null && G._updatedFibers) {
          var te = G._updatedFibers.size;
          te > 10 && ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), G._updatedFibers.clear();
        }
      }
    }
    var Bo = !1, ao = null;
    function Sc(g) {
      if (ao === null)
        try {
          var $ = ("require" + Math.random()).slice(0, 7), B = n && n[$];
          ao = B.call(n, "timers").setImmediate;
        } catch {
          ao = function(te) {
            Bo === !1 && (Bo = !0, typeof MessageChannel > "u" && ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var De = new MessageChannel();
            De.port1.onmessage = te, De.port2.postMessage(void 0);
          };
        }
      return ao(g);
    }
    var yi = 0, _c = !1;
    function vp(g) {
      {
        var $ = yi;
        yi++, j.current === null && (j.current = []);
        var B = j.isBatchingLegacy, G;
        try {
          if (j.isBatchingLegacy = !0, G = g(), !B && j.didScheduleLegacyUpdate) {
            var te = j.current;
            te !== null && (j.didScheduleLegacyUpdate = !1, Go(te));
          }
        } catch (At) {
          throw qa($), At;
        } finally {
          j.isBatchingLegacy = B;
        }
        if (G !== null && typeof G == "object" && typeof G.then == "function") {
          var De = G, be = !1, Le = {
            then: function(At, Vt) {
              be = !0, De.then(function(ot) {
                qa($), yi === 0 ? jo(ot, At, Vt) : At(ot);
              }, function(ot) {
                qa($), Vt(ot);
              });
            }
          };
          return !_c && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            be || (_c = !0, ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), Le;
        } else {
          var We = G;
          if (qa($), yi === 0) {
            var ht = j.current;
            ht !== null && (Go(ht), j.current = null);
            var wt = {
              then: function(At, Vt) {
                j.current === null ? (j.current = [], jo(We, At, Vt)) : At(We);
              }
            };
            return wt;
          } else {
            var St = {
              then: function(At, Vt) {
                At(We);
              }
            };
            return St;
          }
        }
      }
    }
    function qa(g) {
      g !== yi - 1 && ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), yi = g;
    }
    function jo(g, $, B) {
      {
        var G = j.current;
        if (G !== null)
          try {
            Go(G), Sc(function() {
              G.length === 0 ? (j.current = null, $(g)) : jo(g, $, B);
            });
          } catch (te) {
            B(te);
          }
        else
          $(g);
      }
    }
    var bi = !1;
    function Go(g) {
      if (!bi) {
        bi = !0;
        var $ = 0;
        try {
          for (; $ < g.length; $++) {
            var B = g[$];
            do
              B = B(!0);
            while (B !== null);
          }
          g.length = 0;
        } catch (G) {
          throw g = g.slice($ + 1), G;
        } finally {
          bi = !1;
        }
      }
    }
    var xc = wc, Ec = ca, Rc = tr, kc = {
      map: Ur,
      forEach: Uo,
      count: Qi,
      toArray: ol,
      only: Xi
    };
    a.Children = kc, a.Component = kt, a.Fragment = p, a.Profiler = v, a.PureComponent = at, a.StrictMode = d, a.Suspense = _, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, a.cloneElement = Ec, a.createContext = Ji, a.createElement = xc, a.createFactory = Rc, a.createRef = Ne, a.forwardRef = eo, a.isValidElement = pt, a.lazy = la, a.memo = ie, a.startTransition = hp, a.unstable_act = vp, a.useCallback = Ln, a.useContext = Ge, a.useDebugValue = er, a.useDeferredValue = Ma, a.useEffect = rn, a.useId = Ye, a.useImperativeHandle = Fo, a.useInsertionEffect = Ot, a.useLayoutEffect = Lt, a.useMemo = ua, a.useReducer = Ue, a.useRef = ke, a.useState = et, a.useSyncExternalStore = to, a.useTransition = dp, a.version = o, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(Hf, Hf.exports);
var vR = Hf.exports;
i5.exports = vR;
var y = i5.exports;
const dt = /* @__PURE__ */ hR(y), mR = /* @__PURE__ */ pR({
  __proto__: null,
  default: dt
}, [y]);
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var n = y, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), T = Symbol.iterator, O = "@@iterator";
  function z(D) {
    if (D === null || typeof D != "object")
      return null;
    var X = T && D[T] || D[O];
    return typeof X == "function" ? X : null;
  }
  var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function q(D) {
    {
      for (var X = arguments.length, ie = new Array(X > 1 ? X - 1 : 0), me = 1; me < X; me++)
        ie[me - 1] = arguments[me];
      P("error", D, ie);
    }
  }
  function P(D, X, ie) {
    {
      var me = M.ReactDebugCurrentFrame, Ge = me.getStackAddendum();
      Ge !== "" && (X += "%s", ie = ie.concat([Ge]));
      var et = ie.map(function(Ue) {
        return String(Ue);
      });
      et.unshift("Warning: " + X), Function.prototype.apply.call(console[D], console, et);
    }
  }
  var Z = !1, j = !1, I = !1, N = !1, J = !1, Ce;
  Ce = Symbol.for("react.module.reference");
  function ne(D) {
    return !!(typeof D == "string" || typeof D == "function" || D === l || D === p || J || D === c || D === b || D === E || N || D === k || Z || j || I || typeof D == "object" && D !== null && (D.$$typeof === R || D.$$typeof === _ || D.$$typeof === d || D.$$typeof === v || D.$$typeof === w || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    D.$$typeof === Ce || D.getModuleId !== void 0));
  }
  function re(D, X, ie) {
    var me = D.displayName;
    if (me)
      return me;
    var Ge = X.displayName || X.name || "";
    return Ge !== "" ? ie + "(" + Ge + ")" : ie;
  }
  function we(D) {
    return D.displayName || "Context";
  }
  function le(D) {
    if (D == null)
      return null;
    if (typeof D.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
      return D.displayName || D.name || null;
    if (typeof D == "string")
      return D;
    switch (D) {
      case l:
        return "Fragment";
      case o:
        return "Portal";
      case p:
        return "Profiler";
      case c:
        return "StrictMode";
      case b:
        return "Suspense";
      case E:
        return "SuspenseList";
    }
    if (typeof D == "object")
      switch (D.$$typeof) {
        case v:
          var X = D;
          return we(X) + ".Consumer";
        case d:
          var ie = D;
          return we(ie._context) + ".Provider";
        case w:
          return re(D, D.render, "ForwardRef");
        case _:
          var me = D.displayName || null;
          return me !== null ? me : le(D.type) || "Memo";
        case R: {
          var Ge = D, et = Ge._payload, Ue = Ge._init;
          try {
            return le(Ue(et));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var oe = Object.assign, se = 0, ge, ce, Ie, It, bt, Rt, yt;
  function Ut() {
  }
  Ut.__reactDisabledLog = !0;
  function kt() {
    {
      if (se === 0) {
        ge = console.log, ce = console.info, Ie = console.warn, It = console.error, bt = console.group, Rt = console.groupCollapsed, yt = console.groupEnd;
        var D = {
          configurable: !0,
          enumerable: !0,
          value: Ut,
          writable: !0
        };
        Object.defineProperties(console, {
          info: D,
          log: D,
          warn: D,
          error: D,
          group: D,
          groupCollapsed: D,
          groupEnd: D
        });
      }
      se++;
    }
  }
  function Ft() {
    {
      if (se--, se === 0) {
        var D = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: oe({}, D, {
            value: ge
          }),
          info: oe({}, D, {
            value: ce
          }),
          warn: oe({}, D, {
            value: Ie
          }),
          error: oe({}, D, {
            value: It
          }),
          group: oe({}, D, {
            value: bt
          }),
          groupCollapsed: oe({}, D, {
            value: Rt
          }),
          groupEnd: oe({}, D, {
            value: yt
          })
        });
      }
      se < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Wt = M.ReactCurrentDispatcher, Re;
  function Ve(D, X, ie) {
    {
      if (Re === void 0)
        try {
          throw Error();
        } catch (Ge) {
          var me = Ge.stack.trim().match(/\n( *(at )?)/);
          Re = me && me[1] || "";
        }
      return `
` + Re + D;
    }
  }
  var at = !1, He;
  {
    var Ne = typeof WeakMap == "function" ? WeakMap : Map;
    He = new Ne();
  }
  function Pe(D, X) {
    if (!D || at)
      return "";
    {
      var ie = He.get(D);
      if (ie !== void 0)
        return ie;
    }
    var me;
    at = !0;
    var Ge = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var et;
    et = Wt.current, Wt.current = null, kt();
    try {
      if (X) {
        var Ue = function() {
          throw Error();
        };
        if (Object.defineProperty(Ue.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(Ue, []);
          } catch (er) {
            me = er;
          }
          Reflect.construct(D, [], Ue);
        } else {
          try {
            Ue.call();
          } catch (er) {
            me = er;
          }
          D.call(Ue.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (er) {
          me = er;
        }
        D();
      }
    } catch (er) {
      if (er && me && typeof er.stack == "string") {
        for (var ke = er.stack.split(`
`), rn = me.stack.split(`
`), Ot = ke.length - 1, Lt = rn.length - 1; Ot >= 1 && Lt >= 0 && ke[Ot] !== rn[Lt]; )
          Lt--;
        for (; Ot >= 1 && Lt >= 0; Ot--, Lt--)
          if (ke[Ot] !== rn[Lt]) {
            if (Ot !== 1 || Lt !== 1)
              do
                if (Ot--, Lt--, Lt < 0 || ke[Ot] !== rn[Lt]) {
                  var Ln = `
` + ke[Ot].replace(" at new ", " at ");
                  return D.displayName && Ln.includes("<anonymous>") && (Ln = Ln.replace("<anonymous>", D.displayName)), typeof D == "function" && He.set(D, Ln), Ln;
                }
              while (Ot >= 1 && Lt >= 0);
            break;
          }
      }
    } finally {
      at = !1, Wt.current = et, Ft(), Error.prepareStackTrace = Ge;
    }
    var ua = D ? D.displayName || D.name : "", Fo = ua ? Ve(ua) : "";
    return typeof D == "function" && He.set(D, Fo), Fo;
  }
  function Je(D, X, ie) {
    return Pe(D, !1);
  }
  function ut(D) {
    var X = D.prototype;
    return !!(X && X.isReactComponent);
  }
  function qt(D, X, ie) {
    if (D == null)
      return "";
    if (typeof D == "function")
      return Pe(D, ut(D));
    if (typeof D == "string")
      return Ve(D);
    switch (D) {
      case b:
        return Ve("Suspense");
      case E:
        return Ve("SuspenseList");
    }
    if (typeof D == "object")
      switch (D.$$typeof) {
        case w:
          return Je(D.render);
        case _:
          return qt(D.type, X, ie);
        case R: {
          var me = D, Ge = me._payload, et = me._init;
          try {
            return qt(et(Ge), X, ie);
          } catch {
          }
        }
      }
    return "";
  }
  var zt = Object.prototype.hasOwnProperty, Tt = {}, Fn = M.ReactDebugCurrentFrame;
  function Xn(D) {
    if (D) {
      var X = D._owner, ie = qt(D.type, D._source, X ? X.type : null);
      Fn.setExtraStackFrame(ie);
    } else
      Fn.setExtraStackFrame(null);
  }
  function tn(D, X, ie, me, Ge) {
    {
      var et = Function.call.bind(zt);
      for (var Ue in D)
        if (et(D, Ue)) {
          var ke = void 0;
          try {
            if (typeof D[Ue] != "function") {
              var rn = Error((me || "React class") + ": " + ie + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw rn.name = "Invariant Violation", rn;
            }
            ke = D[Ue](X, Ue, me, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (Ot) {
            ke = Ot;
          }
          ke && !(ke instanceof Error) && (Xn(Ge), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ie, Ue, typeof ke), Xn(null)), ke instanceof Error && !(ke.message in Tt) && (Tt[ke.message] = !0, Xn(Ge), q("Failed %s type: %s", ie, ke.message), Xn(null));
        }
    }
  }
  var Pr = Array.isArray;
  function Rr(D) {
    return Pr(D);
  }
  function Vn(D) {
    {
      var X = typeof Symbol == "function" && Symbol.toStringTag, ie = X && D[Symbol.toStringTag] || D.constructor.name || "Object";
      return ie;
    }
  }
  function kr(D) {
    try {
      return On(D), !1;
    } catch {
      return !0;
    }
  }
  function On(D) {
    return "" + D;
  }
  function cr(D) {
    if (kr(D))
      return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(D)), On(D);
  }
  var Bt = M.ReactCurrentOwner, Tr = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, Da, Oa, ue;
  ue = {};
  function xe(D) {
    if (zt.call(D, "ref")) {
      var X = Object.getOwnPropertyDescriptor(D, "ref").get;
      if (X && X.isReactWarning)
        return !1;
    }
    return D.ref !== void 0;
  }
  function Be(D) {
    if (zt.call(D, "key")) {
      var X = Object.getOwnPropertyDescriptor(D, "key").get;
      if (X && X.isReactWarning)
        return !1;
    }
    return D.key !== void 0;
  }
  function ft(D, X) {
    if (typeof D.ref == "string" && Bt.current && X && Bt.current.stateNode !== X) {
      var ie = le(Bt.current.type);
      ue[ie] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', le(Bt.current.type), D.ref), ue[ie] = !0);
    }
  }
  function pt(D, X) {
    {
      var ie = function() {
        Da || (Da = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
      };
      ie.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: ie,
        configurable: !0
      });
    }
  }
  function nn(D, X) {
    {
      var ie = function() {
        Oa || (Oa = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
      };
      ie.isReactWarning = !0, Object.defineProperty(D, "ref", {
        get: ie,
        configurable: !0
      });
    }
  }
  var jt = function(D, X, ie, me, Ge, et, Ue) {
    var ke = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: a,
      // Built-in properties that belong on the element
      type: D,
      key: X,
      ref: ie,
      props: Ue,
      // Record the component responsible for creating this element.
      _owner: et
    };
    return ke._store = {}, Object.defineProperty(ke._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(ke, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: me
    }), Object.defineProperty(ke, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: Ge
    }), Object.freeze && (Object.freeze(ke.props), Object.freeze(ke)), ke;
  };
  function Jn(D, X, ie, me, Ge) {
    {
      var et, Ue = {}, ke = null, rn = null;
      ie !== void 0 && (cr(ie), ke = "" + ie), Be(X) && (cr(X.key), ke = "" + X.key), xe(X) && (rn = X.ref, ft(X, Ge));
      for (et in X)
        zt.call(X, et) && !Tr.hasOwnProperty(et) && (Ue[et] = X[et]);
      if (D && D.defaultProps) {
        var Ot = D.defaultProps;
        for (et in Ot)
          Ue[et] === void 0 && (Ue[et] = Ot[et]);
      }
      if (ke || rn) {
        var Lt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
        ke && pt(Ue, Lt), rn && nn(Ue, Lt);
      }
      return jt(D, ke, rn, Ge, me, Bt.current, Ue);
    }
  }
  var Ct = M.ReactCurrentOwner, dr = M.ReactDebugCurrentFrame;
  function $t(D) {
    if (D) {
      var X = D._owner, ie = qt(D.type, D._source, X ? X.type : null);
      dr.setExtraStackFrame(ie);
    } else
      dr.setExtraStackFrame(null);
  }
  var Dt;
  Dt = !1;
  function oa(D) {
    return typeof D == "object" && D !== null && D.$$typeof === a;
  }
  function Ur() {
    {
      if (Ct.current) {
        var D = le(Ct.current.type);
        if (D)
          return `

Check the render method of \`` + D + "`.";
      }
      return "";
    }
  }
  function Qi(D) {
    {
      if (D !== void 0) {
        var X = D.fileName.replace(/^.*[\\\/]/, ""), ie = D.lineNumber;
        return `

Check your code at ` + X + ":" + ie + ".";
      }
      return "";
    }
  }
  var Uo = {};
  function ol(D) {
    {
      var X = Ur();
      if (!X) {
        var ie = typeof D == "string" ? D : D.displayName || D.name;
        ie && (X = `

Check the top-level render call using <` + ie + ">.");
      }
      return X;
    }
  }
  function Xi(D, X) {
    {
      if (!D._store || D._store.validated || D.key != null)
        return;
      D._store.validated = !0;
      var ie = ol(X);
      if (Uo[ie])
        return;
      Uo[ie] = !0;
      var me = "";
      D && D._owner && D._owner !== Ct.current && (me = " It was passed a child from " + le(D._owner.type) + "."), $t(D), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, me), $t(null);
    }
  }
  function Ji(D, X) {
    {
      if (typeof D != "object")
        return;
      if (Rr(D))
        for (var ie = 0; ie < D.length; ie++) {
          var me = D[ie];
          oa(me) && Xi(me, X);
        }
      else if (oa(D))
        D._store && (D._store.validated = !0);
      else if (D) {
        var Ge = z(D);
        if (typeof Ge == "function" && Ge !== D.entries)
          for (var et = Ge.call(D), Ue; !(Ue = et.next()).done; )
            oa(Ue.value) && Xi(Ue.value, X);
      }
    }
  }
  function La(D) {
    {
      var X = D.type;
      if (X == null || typeof X == "string")
        return;
      var ie;
      if (typeof X == "function")
        ie = X.propTypes;
      else if (typeof X == "object" && (X.$$typeof === w || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      X.$$typeof === _))
        ie = X.propTypes;
      else
        return;
      if (ie) {
        var me = le(X);
        tn(ie, D.props, "prop", me, D);
      } else if (X.PropTypes !== void 0 && !Dt) {
        Dt = !0;
        var Ge = le(X);
        q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
      }
      typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function fi(D) {
    {
      for (var X = Object.keys(D.props), ie = 0; ie < X.length; ie++) {
        var me = X[ie];
        if (me !== "children" && me !== "key") {
          $t(D), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), $t(null);
          break;
        }
      }
      D.ref !== null && ($t(D), q("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
    }
  }
  function Aa(D, X, ie, me, Ge, et) {
    {
      var Ue = ne(D);
      if (!Ue) {
        var ke = "";
        (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (ke += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var rn = Qi(Ge);
        rn ? ke += rn : ke += Ur();
        var Ot;
        D === null ? Ot = "null" : Rr(D) ? Ot = "array" : D !== void 0 && D.$$typeof === a ? (Ot = "<" + (le(D.type) || "Unknown") + " />", ke = " Did you accidentally export a JSX literal instead of a component?") : Ot = typeof D, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ot, ke);
      }
      var Lt = Jn(D, X, ie, Ge, et);
      if (Lt == null)
        return Lt;
      if (Ue) {
        var Ln = X.children;
        if (Ln !== void 0)
          if (me)
            if (Rr(Ln)) {
              for (var ua = 0; ua < Ln.length; ua++)
                Ji(Ln[ua], D);
              Object.freeze && Object.freeze(Ln);
            } else
              q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            Ji(Ln, D);
      }
      return D === l ? fi(Lt) : La(Lt), Lt;
    }
  }
  function sa(D, X, ie) {
    return Aa(D, X, ie, !0);
  }
  function Fr(D, X, ie) {
    return Aa(D, X, ie, !1);
  }
  var la = Fr, eo = sa;
  Pf.Fragment = l, Pf.jsx = la, Pf.jsxs = eo;
})();
a5.exports = Pf;
var C = a5.exports;
function o5(n) {
  var a, o, l = "";
  if (typeof n == "string" || typeof n == "number")
    l += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (a = 0; a < n.length; a++)
        n[a] && (o = o5(n[a])) && (l && (l += " "), l += o);
    else
      for (a in n)
        n[a] && (l && (l += " "), l += a);
  return l;
}
function lt() {
  for (var n, a, o = 0, l = ""; o < arguments.length; )
    (n = arguments[o++]) && (a = o5(n)) && (l && (l += " "), l += a);
  return l;
}
const gR = {
  registerField: () => () => null,
  registerSubmit: () => () => null,
  resetForm: () => null,
  setError: () => null,
  hasError: () => !1,
  clearError: () => null,
  values: {},
  errors: {},
  status: "valid"
}, s5 = y.createContext(gR), Bw = ({ children: n }) => {
  const [a, o] = y.useState("valid"), [l, c] = y.useState({}), [p, d] = y.useState({}), v = y.useRef({}), w = y.useCallback(
    (O, { validator: z, defaultValue: M } = {}) => (Object.keys(v.current).includes(O) || (v.current[O] = {
      defaultValue: M,
      validator: z
    }), (q) => {
      c((P) => ({ ...P, [O]: q.target.value })), z && a === "invalid" && (o("valid"), d({}));
    }),
    [a]
  );
  y.useEffect(() => {
    Object.entries(v.current).forEach(
      ([O, { defaultValue: z }]) => {
        z && l[O] === void 0 && c((M) => ({ ...M, [O]: z }));
      }
    );
  }, [l]);
  const b = y.useCallback(
    (O) => (z) => {
      z.preventDefault();
      let M = !1;
      if (Object.entries(v.current).forEach(
        ([q, { validator: P }]) => {
          const Z = l[q];
          if (P) {
            const j = P(Z);
            j && (M = !0, d((I) => ({ ...I, [q]: j })));
          }
        }
      ), M) {
        o("invalid");
        return;
      }
      O(z);
    },
    [l]
  ), E = y.useCallback(() => {
    c({}), d({}), o("valid"), v.current = {};
  }, [c, d, o]), _ = y.useCallback((O, z) => {
    d((M) => ({ ...M, [O]: z }));
  }, []), R = y.useCallback(
    (O) => !!p[O],
    [p]
  ), k = y.useCallback((O) => {
    d((z) => {
      const { [O]: M, ...q } = { ...z };
      return q;
    });
  }, []), T = y.useMemo(
    () => ({
      registerField: w,
      registerSubmit: b,
      resetForm: E,
      setError: _,
      hasError: R,
      clearError: k,
      values: l,
      status: a,
      errors: p
    }),
    [
      w,
      b,
      E,
      _,
      R,
      k,
      l,
      a,
      p
    ]
  );
  return /* @__PURE__ */ C.jsx(s5.Provider, { value: T, children: n });
};
function ur(n, a, o, l) {
  Object.defineProperty(n, a, { get: o, set: l, enumerable: !0, configurable: !0 });
}
var ay = {};
ay = JSON.parse(`{"name":"@slashid/slashid","private":false,"publishConfig":{"access":"public"},"version":"3.18.0","description":"Client SDK for the /id platform","homepage":"https://slashid.dev","author":"SlashID","license":"MIT","main":"./dist/bundle/slashid.js","module":"./dist/esmodule/slashid.esm.js","esmodule":"./dist/esmodule/slashid.esm.js","commonjs":"./dist/commonjs/slashid.cjs.js","bundle":"./dist/bundle/slashid.js","types":"./dist/types/slashid.d.ts","exports":{".":{"require":"./dist/commonjs/slashid.cjs.js","import":"./dist/esmodule/slashid.esm.js","default":"./dist/commonjs/slashid.cjs.js","types":"./dist/types/slashid.d.ts"}},"targets":{"esmodule":{"source":"src/targets/package.ts","context":"browser","isLibrary":true,"outputFormat":"esmodule","engines":{"browsers":["and_chr >= 73","chrome >= 73","and_ff >= 67","android >= 114","edge >= 79","samsung >= 11.2","safari >= 13","ios_saf >= 13.1","opera >= 60","firefox >= 67","unreleased and_chr versions","unreleased chrome versions","unreleased and_ff versions","unreleased android versions","unreleased edge versions","unreleased samsung versions","unreleased safari versions","unreleased ios_saf versions","unreleased opera versions","unreleased firefox versions"]}},"commonjs":{"source":"src/targets/package.ts","context":"node","isLibrary":true,"outputFormat":"commonjs","engines":{"node":">= 12"}},"bundle":{"source":"src/targets/bundle.ts","context":"browser","outputFormat":"global","engines":{"browsers":["> 0.5%","last 2 versions","not dead"]}},"page":{"source":"static/sdk.html","context":"browser","engines":{"browsers":["and_chr >= 73","chrome >= 73","and_ff >= 67","android >= 114","edge >= 79","samsung >= 11.2","safari >= 13","ios_saf >= 13.1","opera >= 60","firefox >= 67","unreleased and_chr versions","unreleased chrome versions","unreleased and_ff versions","unreleased android versions","unreleased edge versions","unreleased samsung versions","unreleased safari versions","unreleased ios_saf versions","unreleased opera versions","unreleased firefox versions"]}},"types":{"source":"src/targets/package.ts"}},"files":["dist/*"],"keywords":["slashid","SlashID","auth","openid","authentication","jwt","browser"],"scripts":{"clean":"rm -rf dist docs","lint":"eslint ./src --ext .ts","format":"prettier --config .prettierrc.json 'src/**/*.ts' --write","test:ts":"tsc --project tsconfig.json --noEmit","test:unit":"jest","test:unit:watch":"jest --watch","test:unit:ci":"jest --ci","test:integration":"playwright test","build":"rm -rf dist && parcel build && cp compat/esmodule/package.json dist/esmodule","docs":"rm -rf docs && typedoc","dist":"npm run lint && npm run build","all":"npm run dist && npm run docs","serve:all":"parcel serve 'static/*.html' --port 8080","serve:example":"parcel serve static/index.html --port 8080","serve:jump":"parcel serve static/sdk.html --port 8080","serve:docs":"parcel serve docs/index.html --port 8081","push:docs":"aws s3 sync docs s3://slashiddoc/sdk/v$(node tools/version.js --major) && (aws cloudfront create-invalidation --distribution-id ETLBNGAAF97EN --paths \\"/*\\")","changeset":"changeset","prepublishOnly":"npm run all","publish:ci":"npm run build && changeset publish"},"devDependencies":{"@parcel/core":"2.9.3","@parcel/packager-ts":"2.9.3","@parcel/transformer-babel":"2.9.3","@parcel/transformer-js":"2.9.3","@parcel/transformer-json":"2.9.3","@parcel/transformer-react-refresh-wrap":"2.9.3","@parcel/transformer-typescript-types":"2.9.3","@playwright/test":"^1.25.0","@types/jest":"^28.1.7","@types/node":"~15.0.2","@types/qrcode":"^1.5.0","@typescript-eslint/eslint-plugin":"^4.15.1","@typescript-eslint/parser":"^4.15.1","danger":"^11.2.6","eslint":"^7.20.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.2.1","isomorphic-fetch":"^3.0.0","jest":"^28.1.3","jest-environment-jsdom":"^28.1.3","jest-fetch-mock":"^3.0.3","parcel":"^2.7.0","prettier":"^2.7.1","ts-jest":"^28.0.8","typedoc":"^0.23.00","typedoc-plugin-mdn-links":"^2.0.0","typedoc-plugin-missing-exports":"^1.0.0","typescript":"~4.7.0"},"dependencies":{"@changesets/cli":"^2.26.2","@types/uuid":"8.3.4","changeset":"^0.2.6","docdash":"^1.2.0","jwt-decode":"^3.1.2","mitt":"^3.0.0","qrcode":"^1.5.1","querystring-es3":"^0.2.1","regenerator-runtime":"^0.13.9","url":"^0.11.0","uuid":"8.3.2"}}`);
const [yR, bR, CR] = ay.version.split("."), $n = {
  major: yR,
  minor: bR,
  patch: CR,
  raw: ay.version
}, wR = "https://api.slashid.com".replace(/\/+$/, "");
class Ws {
  set config(a) {
    this.configuration = a;
  }
  get basePath() {
    return this.configuration.basePath != null ? this.configuration.basePath : wR;
  }
  get fetchApi() {
    return this.configuration.fetchApi;
  }
  get middleware() {
    return this.configuration.middleware || [];
  }
  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || l5;
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const a = this.configuration.apiKey;
    if (a)
      return typeof a == "function" ? a : () => a;
  }
  get accessToken() {
    const a = this.configuration.accessToken;
    if (a)
      return typeof a == "function" ? a : async () => a;
  }
  get headers() {
    return this.configuration.headers;
  }
  get credentials() {
    return this.configuration.credentials;
  }
  constructor(a = {}) {
    this.configuration = a;
  }
}
const Ks = new Ws();
class Zi {
  withMiddleware(...a) {
    const o = this.clone();
    return o.middleware = o.middleware.concat(...a), o;
  }
  withPreMiddleware(...a) {
    const o = a.map((l) => ({
      pre: l
    }));
    return this.withMiddleware(...o);
  }
  withPostMiddleware(...a) {
    const o = a.map((l) => ({
      post: l
    }));
    return this.withMiddleware(...o);
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(a) {
    return a ? Zi.jsonRegex.test(a) : !1;
  }
  async request(a, o) {
    const { url: l, init: c } = await this.createFetchParams(a, o), p = await this.fetchApi(l, c);
    if (p && p.status >= 200 && p.status < 300)
      return p;
    throw new xR(p, "Response returned an error code");
  }
  async createFetchParams(a, o) {
    let l = this.configuration.basePath + a.path;
    a.query !== void 0 && Object.keys(a.query).length !== 0 && (l += "?" + this.configuration.queryParamsStringify(a.query));
    const c = Object.assign({}, this.configuration.headers, a.headers);
    Object.keys(c).forEach((b) => c[b] === void 0 ? delete c[b] : {});
    const p = typeof o == "function" ? o : async () => o, d = {
      method: a.method,
      headers: c,
      body: a.body,
      credentials: this.configuration.credentials
    }, v = {
      ...d,
      ...await p({
        init: d,
        context: a
      })
    }, w = {
      ...v,
      body: _R(v.body) || v.body instanceof URLSearchParams || SR(v.body) ? v.body : JSON.stringify(v.body)
    };
    return {
      url: l,
      init: w
    };
  }
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  clone() {
    const a = this.constructor, o = new a(this.configuration);
    return o.middleware = this.middleware.slice(), o;
  }
  constructor(a = Ks) {
    this.configuration = a, this.fetchApi = async (o, l) => {
      let c = {
        url: o,
        init: l
      };
      for (const d of this.middleware)
        d.pre && (c = await d.pre({
          fetch: this.fetchApi,
          ...c
        }) || c);
      let p;
      try {
        p = await (this.configuration.fetchApi || fetch)(c.url, c.init);
      } catch (d) {
        for (const v of this.middleware)
          v.onError && (p = await v.onError({
            fetch: this.fetchApi,
            url: c.url,
            init: c.init,
            error: d,
            response: p ? p.clone() : void 0
          }) || p);
        if (p === void 0)
          throw d instanceof Error ? new ER(d, "The request failed and the interceptors did not return an alternative response") : d;
      }
      for (const d of this.middleware)
        d.post && (p = await d.post({
          fetch: this.fetchApi,
          url: c.url,
          init: c.init,
          response: p.clone()
        }) || p);
      return p;
    }, this.middleware = a.middleware;
  }
}
Zi.jsonRegex = new RegExp("^(:?application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(:?;.*)?$", "i");
function SR(n) {
  return typeof Blob < "u" && n instanceof Blob;
}
function _R(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
class xR extends Error {
  constructor(a, o) {
    super(o), this.response = a, this.name = "ResponseError";
  }
}
class ER extends Error {
  constructor(a, o) {
    super(o), this.cause = a, this.name = "FetchError";
  }
}
class Yt extends Error {
  constructor(a, o) {
    super(o), this.field = a, this.name = "RequiredError";
  }
}
const yg = {
  csv: ",",
  ssv: " ",
  tsv: "	",
  pipes: "|"
};
function _e(n, a) {
  const o = n[a];
  return o != null;
}
function l5(n, a = "") {
  return Object.keys(n).map((o) => u5(o, n[o], a)).filter((o) => o.length > 0).join("&");
}
function u5(n, a, o = "") {
  const l = o + (o.length ? `[${n}]` : n);
  if (a instanceof Array) {
    const c = a.map((p) => encodeURIComponent(String(p))).join(`&${encodeURIComponent(l)}=`);
    return `${encodeURIComponent(l)}=${c}`;
  }
  if (a instanceof Set) {
    const c = Array.from(a);
    return u5(n, c, o);
  }
  return a instanceof Date ? `${encodeURIComponent(l)}=${encodeURIComponent(a.toISOString())}` : a instanceof Object ? l5(a, l) : `${encodeURIComponent(l)}=${encodeURIComponent(String(a))}`;
}
class pn {
  async value() {
    return this.transformer(await this.raw.json());
  }
  constructor(a, o = (l) => l) {
    this.raw = a, this.transformer = o;
  }
}
class Bf {
  async value() {
  }
  constructor(a) {
    this.raw = a;
  }
}
function RR(n) {
  return kR(n);
}
function kR(n, a) {
  return n == null ? n : {
    limit: n.limit,
    offset: n.offset,
    total_count: n.total_count
  };
}
function aa(n) {
  return TR(n);
}
function TR(n, a) {
  return n == null ? n : {
    pagination: _e(n, "pagination") ? RR(n.pagination) : void 0
  };
}
function ia(n) {
  return $R(n);
}
function $R(n, a) {
  return n == null ? n : {
    httpcode: _e(n, "httpcode") ? n.httpcode : void 0,
    message: _e(n, "message") ? n.message : void 0
  };
}
function bg(n) {
  return DR(n);
}
function DR(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0
  };
}
const lr = {
  Proxy: "proxy",
  WebauthnCreate: "webauthn_create",
  WebauthnGet: "webauthn_get",
  Nonce: "nonce",
  Otp: "otp",
  Oidc: "oidc",
  Saml: "saml",
  PasswordSet: "password_set",
  PasswordVerify: "password_verify",
  PasswordReset: "password_reset"
};
function Ta(n) {
  return OR(n);
}
function OR(n, a) {
  return n;
}
function LR(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge: n.challenge
    };
}
function AR(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge_id: n.challenge_id,
      challenge_type: n.challenge_type,
      data: LR(n.data)
    };
}
function MR(n) {
  if (n !== void 0)
    return n === null ? null : {
      otp: n.otp
    };
}
function qR(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge_id: n.challenge_id,
      challenge_type: n.challenge_type,
      data: MR(n.data)
    };
}
function zR(n) {
  if (n !== void 0)
    return n === null ? null : {
      password: n.password
    };
}
function IR(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge_id: n.challenge_id,
      challenge_type: n.challenge_type,
      data: zR(n.data)
    };
}
function NR(n) {
  if (n !== void 0)
    return n === null ? null : {
      password: n.password
    };
}
function PR(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge_id: n.challenge_id,
      challenge_type: n.challenge_type,
      data: NR(n.data)
    };
}
function UR(n) {
  if (n !== void 0)
    return n === null ? null : {
      password: n.password
    };
}
function FR(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge_id: n.challenge_id,
      challenge_type: n.challenge_type,
      data: UR(n.data)
    };
}
function VR(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge_id: n.challenge_id,
      challenge_type: n.challenge_type,
      data: n.data
    };
}
function HR(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge_id: n.challenge_id,
      challenge_type: n.challenge_type,
      data: n.data
    };
}
function jw(n) {
  if (n !== void 0) {
    if (n === null)
      return null;
    switch (n.challenge_type) {
      case "nonce":
        return AR(n);
      case "otp":
        return qR(n);
      case "password_reset":
        return IR(n);
      case "password_set":
        return PR(n);
      case "password_verify":
        return FR(n);
      case "webauthn_create":
        return VR(n);
      case "webauthn_get":
        return HR(n);
      default:
        throw new Error(`No variant of Attestation exists with 'challenge_type=${n.challenge_type}'`);
    }
  }
}
const Zn = {
  Webauthn: "webauthn",
  EmailLink: "email_link",
  SmsLink: "sms_link",
  OtpViaSms: "otp_via_sms",
  OtpViaEmail: "otp_via_email",
  Oidc: "oidc",
  Saml: "saml",
  Api: "api",
  DirectId: "direct_id",
  Password: "password"
};
function $a(n) {
  return BR(n);
}
function BR(n, a) {
  return n;
}
function c5(n) {
  return n;
}
const Fs = {
  EmailAddress: "email_address",
  PhoneNumber: "phone_number"
};
function jR(n) {
  return GR(n);
}
function GR(n, a) {
  return n;
}
function d5(n) {
  return YR(n);
}
function YR(n, a) {
  return n == null ? n : {
    type: jR(n.type),
    value: n.value
  };
}
function ep(n) {
  if (n !== void 0)
    return n === null ? null : {
      type: n.type,
      value: n.value
    };
}
function WR(n) {
  return KR(n);
}
function KR(n, a) {
  return n;
}
function ZR(n) {
  return QR(n);
}
function QR(n, a) {
  return n == null ? n : {
    challenge: _e(n, "challenge") ? n.challenge : void 0
  };
}
function XR(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method),
    options: _e(n, "options") ? ZR(n.options) : void 0
  };
}
function JR(n) {
  return ek(n);
}
function ek(n, a) {
  return n == null ? n : {
    auth_code_url: n.auth_code_url
  };
}
function tk(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method),
    options: JR(n.options)
  };
}
function nk(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method)
  };
}
function rk(n) {
  return ak(n);
}
function ak(n, a) {
  return n;
}
function ik(n) {
  return ok(n);
}
function ok(n, a) {
  return n;
}
function sk(n) {
  return lk(n);
}
function lk(n, a) {
  return n == null ? n : {
    name: WR(n.name),
    pattern: n.pattern,
    match_type: rk(n.match_type),
    pattern_qualifiers: _e(n, "pattern_qualifiers") ? n.pattern_qualifiers.map(ik) : void 0
  };
}
function f5(n) {
  return uk(n);
}
function uk(n, a) {
  return n == null ? n : {
    regular_expressions: _e(n, "regular_expressions") ? n.regular_expressions.map(sk) : void 0
  };
}
function ck(n) {
  return dk(n);
}
function dk(n, a) {
  return n == null ? n : {
    validation_rules: f5(n.validation_rules)
  };
}
function fk(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method),
    options: ck(n.options)
  };
}
function pk(n) {
  return hk(n);
}
function hk(n, a) {
  return n == null ? n : {
    validation_rules: f5(n.validation_rules)
  };
}
function vk(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method),
    options: pk(n.options)
  };
}
function mk(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method)
  };
}
function gk(n) {
  return yk(n);
}
function yk(n, a) {
  return n == null ? n : {
    challenge_id: _e(n, "challenge_id") ? n.challenge_id : void 0
  };
}
function bk(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method),
    options: _e(n, "options") ? gk(n.options) : void 0
  };
}
function Ck(n) {
  return wk(n);
}
function wk(n, a) {
  return n == null ? n : {
    start_authentication_url: n.start_authentication_url
  };
}
function Sk(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method),
    options: Ck(n.options)
  };
}
function _k(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method),
    options: _e(n, "options") ? n.options : void 0
  };
}
function xk(n, a) {
  return n == null ? n : {
    id: n.id,
    type: Ta(n.type),
    authentication_method: $a(n.authentication_method),
    options: _e(n, "options") ? n.options : void 0
  };
}
function Ek(n) {
  return Rk(n);
}
function Rk(n, a) {
  if (n == null)
    return n;
  switch (n.type) {
    case "nonce":
      return {
        ...XR(n, !0),
        type: "nonce"
      };
    case "oidc":
      return {
        ...tk(n, !0),
        type: "oidc"
      };
    case "otp":
      return {
        ...nk(n, !0),
        type: "otp"
      };
    case "password_reset":
      return {
        ...fk(n, !0),
        type: "password_reset"
      };
    case "password_set":
      return {
        ...vk(n, !0),
        type: "password_set"
      };
    case "password_verify":
      return {
        ...mk(n, !0),
        type: "password_verify"
      };
    case "proxy":
      return {
        ...bk(n, !0),
        type: "proxy"
      };
    case "saml":
      return {
        ...Sk(n, !0),
        type: "saml"
      };
    case "webauthn_create":
      return {
        ..._k(n, !0),
        type: "webauthn_create"
      };
    case "webauthn_get":
      return {
        ...xk(n, !0),
        type: "webauthn_get"
      };
    default:
      throw new Error(`No variant of ChallengeListInner exists with 'type=${n.type}'`);
  }
}
function kk(n) {
  return Tk(n);
}
function Tk(n, a) {
  return n;
}
const Vs = {
  AuthenticationSucceededV1: "AuthenticationSucceeded_v1",
  AuthenticationFailedV1: "AuthenticationFailed_v1",
  PersonCreatedV1: "PersonCreated_v1",
  PersonDeletedV1: "PersonDeleted_v1",
  VirtualPageLoadedV1: "VirtualPageLoaded_v1",
  SlashIdsdkLoadedV1: "SlashIDSDKLoaded_v1",
  PersonIdentifiedV1: "PersonIdentified_v1",
  PersonLoggedOutV1: "PersonLoggedOut_v1",
  TokenMintedV1: "TokenMinted_v1",
  PasswordChangedV1: "PasswordChanged_v1",
  GdprConsentsChangedV1: "GdprConsentsChanged_v1",
  GateServerStartedV1: "GateServerStarted_v1",
  GateRequestHandledV1: "GateRequestHandled_v1"
};
function $k(n) {
  if (n !== void 0)
    return n === null ? null : {
      event_name: n.event_name,
      person_id: n.person_id,
      authenticated_methods: n.authenticated_methods === void 0 ? void 0 : n.authenticated_methods.map(c5),
      failed_authn_method: n.failed_authn_method,
      failure_reason: n.failure_reason,
      failure_detail: n.failure_detail,
      handle: ep(n.handle),
      challenge_id: n.challenge_id
    };
}
function Dk(n) {
  if (n !== void 0)
    return n === null ? null : {
      event_name: n.event_name,
      person_id: n.person_id,
      success_authn_method: n.success_authn_method,
      authenticated_methods: n.authenticated_methods.map(c5),
      handle: ep(n.handle)
    };
}
function Ok(n) {
  if (n !== void 0)
    return n === null ? null : {
      event_name: n.event_name,
      person_id: n.person_id
    };
}
function Lk(n) {
  if (n !== void 0)
    return n === null ? null : {
      event_name: n.event_name,
      person_id: n.person_id
    };
}
function Ak(n) {
  if (n !== void 0)
    return n === null ? null : {
      event_name: n.event_name
    };
}
function Mk(n) {
  if (n !== void 0)
    return n === null ? null : {
      event_name: n.event_name,
      person_id: n.person_id
    };
}
function qk(n) {
  if (n !== void 0) {
    if (n === null)
      return null;
    switch (n.event_name) {
      case "AuthenticationFailed_v1":
        return $k(n);
      case "AuthenticationSucceeded_v1":
        return Dk(n);
      case "PersonIdentified_v1":
        return Ok(n);
      case "PersonLoggedOut_v1":
        return Lk(n);
      case "SlashIDSDKLoaded_v1":
        return Ak(n);
      case "VirtualPageLoaded_v1":
        return Mk(n);
      default:
        throw new Error(`No variant of EventPostRequestEventData exists with 'event_name=${n.event_name}'`);
    }
  }
}
function Gw(n) {
  if (n !== void 0)
    return n === null ? null : {
      organization_id: n.organization_id,
      analytics_correlation_id: n.analytics_correlation_id,
      window_location: n.window_location,
      user_agent: n.user_agent,
      event_data: qk(n.event_data)
    };
}
function zk(n) {
  return Ik(n);
}
function Ik(n, a) {
  return n == null ? n : {
    params: _e(n, "params") ? n.params : void 0,
    type: kk(n.type),
    label: _e(n, "label") ? n.label : void 0,
    id: n.id,
    last_used: _e(n, "last_used") ? new Date(n.last_used) : void 0
  };
}
const Qu = {
  Popup: "popup",
  Redirect: "redirect"
};
function Nk(n) {
  let a = !0;
  return a = a && "client_id" in n, a = a && "provider" in n, a;
}
function Pk(n) {
  if (n !== void 0)
    return n === null ? null : {
      client_id: n.client_id,
      provider: n.provider,
      ux_mode: n.ux_mode,
      redirect_target: n.redirect_target,
      requires_groups: n.requires_groups,
      pkce_code_challenge: n.pkce_code_challenge,
      csrf_token: n.csrf_token
    };
}
const Xu = {
  Popup: "popup",
  Redirect: "redirect"
};
function Uk(n) {
  let a = !0;
  return a = a && "provider_credentials_id" in n, a;
}
function Fk(n) {
  if (n !== void 0)
    return n === null ? null : {
      provider_credentials_id: n.provider_credentials_id,
      ux_mode: n.ux_mode,
      redirect_target: n.redirect_target,
      pkce_code_challenge: n.pkce_code_challenge,
      csrf_token: n.csrf_token
    };
}
const Vk = {
  None: "none",
  Indirect: "indirect",
  Direct: "direct"
};
const Yw = {
  Any: "any",
  Platform: "platform",
  CrossPlatform: "cross_platform"
};
const Hk = {
  Discouraged: "discouraged",
  Preferred: "preferred",
  Required: "required"
};
const Bk = {
  Discouraged: "discouraged",
  Preferred: "preferred",
  Required: "required"
};
function jk(n) {
  return !0;
}
function Gk(n) {
  if (n !== void 0)
    return n === null ? null : {
      scope: n.scope,
      available_credential_ids: n.available_credential_ids,
      attachment: n.attachment,
      user_verification: n.user_verification,
      resident_key: n.resident_key,
      attestation: n.attestation
    };
}
function Yk(n) {
  if (n !== void 0)
    return n === null ? null : Nk(n) ? Pk(n) : Uk(n) ? Fk(n) : jk(n) ? Gk(n) : {};
}
function Wk(n) {
  if (n !== void 0)
    return n === null ? null : {
      method: n.method,
      options: Yk(n.options)
    };
}
function Kk(n) {
  return Zk(n);
}
function Zk(n, a) {
  return n;
}
function Qk(n) {
  return n;
}
function Xk(n) {
  return Jk(n);
}
function Jk(n, a) {
  return n == null ? n : {
    consent_level: Kk(n.consent_level),
    created_at: new Date(n.created_at)
  };
}
function Ww(n) {
  if (n !== void 0)
    return n === null ? null : {
      consent_levels: n.consent_levels.map(Qk)
    };
}
function p5(n) {
  return eT(n);
}
function eT(n, a) {
  return n == null ? n : {
    consents: n.consents.map(Xk)
  };
}
function tT(n) {
  return nT(n);
}
function nT(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: _e(n, "result") ? n.result : void 0
  };
}
function rT(n) {
  return aT(n);
}
function aT(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: _e(n, "result") ? n.result : void 0
  };
}
function Kw(n) {
  return iT(n);
}
function iT(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: _e(n, "result") ? n.result : void 0
  };
}
function Cg(n) {
  return oT(n);
}
function oT(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: _e(n, "result") ? n.result : void 0
  };
}
function sT(n) {
  return lT(n);
}
function lT(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: _e(n, "result") ? p5(n.result) : void 0
  };
}
function uT(n) {
  return cT(n);
}
function cT(n, a) {
  return n == null ? n : {
    id: n.id,
    org_name: n.org_name,
    tenant_name: n.tenant_name
  };
}
function dT(n) {
  return fT(n);
}
function fT(n, a) {
  return n == null ? n : {
    id: n.id,
    org_name: n.org_name,
    tenant_name: n.tenant_name,
    managed_organizations: _e(n, "managed_organizations") ? n.managed_organizations.map(uT) : void 0
  };
}
function pT(n) {
  return hT(n);
}
function hT(n, a) {
  return n == null ? n : {
    id: n.id,
    parent_id: _e(n, "parent_id") ? n.parent_id : void 0,
    name: _e(n, "name") ? n.name : void 0,
    tenant_name: _e(n, "tenant_name") ? n.tenant_name : void 0,
    children_ids: _e(n, "children_ids") ? n.children_ids : void 0,
    person_pool_orgs_ids: _e(n, "person_pool_orgs_ids") ? n.person_pool_orgs_ids : void 0,
    group_pool_orgs_ids: _e(n, "group_pool_orgs_ids") ? n.group_pool_orgs_ids : void 0,
    manager_org_id: _e(n, "manager_org_id") ? n.manager_org_id : void 0,
    person_in_manager_org: n.person_in_manager_org
  };
}
function vT(n) {
  return mT(n);
}
function mT(n, a) {
  return n == null ? n : {
    active: n.active,
    person_id: n.person_id,
    roles: _e(n, "roles") ? n.roles : void 0,
    region: n.region,
    handles: _e(n, "handles") ? n.handles.map(d5) : void 0,
    groups: _e(n, "groups") ? n.groups : void 0,
    attributes: _e(n, "attributes") ? n.attributes : void 0
  };
}
function gT(n) {
  return yT(n);
}
function yT(n, a) {
  return n == null ? n : {
    person: vT(n.person),
    organizations: n.organizations.map(dT),
    org_hierarchy: n.org_hierarchy.map(pT),
    handles: n.handles.map(d5),
    credentials: n.credentials.map(zk)
  };
}
function bT(n) {
  return CT(n);
}
function CT(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: gT(n.result)
  };
}
function wT(n) {
  if (n !== void 0)
    return n === null ? null : {
      handle: ep(n.handle),
      factor: Wk(n.factor)
    };
}
function ST(n) {
  return _T(n);
}
function _T(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: _e(n, "result") ? n.result : void 0
  };
}
function wg(n) {
  return xT(n);
}
function xT(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: _e(n, "result") ? n.result.map(Ek) : void 0
  };
}
function ET(n) {
  if (n !== void 0)
    return n === null ? null : {
      challenge_id: n.challenge_id,
      code: n.code,
      pkce_code_verifier: n.pkce_code_verifier
    };
}
function RT(n) {
  return kT(n);
}
function kT(n, a) {
  return n == null ? n : {
    valid: n.valid,
    invalidity_reason: _e(n, "invalidity_reason") ? n.invalidity_reason : void 0,
    expires_in_seconds: _e(n, "expires_in_seconds") ? n.expires_in_seconds : void 0,
    expires_at: _e(n, "expires_at") ? new Date(n.expires_at) : void 0
  };
}
function TT(n) {
  return $T(n);
}
function $T(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: _e(n, "result") ? RT(n.result) : void 0
  };
}
function Zw(n) {
  return DT(n);
}
function DT(n, a) {
  return n == null ? n : {
    meta: _e(n, "meta") ? aa(n.meta) : void 0,
    errors: _e(n, "errors") ? n.errors.map(ia) : void 0,
    result: p5(n.result)
  };
}
function OT(n) {
  if (n !== void 0)
    return n === null ? null : {
      method: n.method
    };
}
function LT(n) {
  if (n !== void 0)
    return n === null ? null : {
      handle: ep(n.handle),
      factor: OT(n.factor)
    };
}
function AT(n) {
  if (n !== void 0)
    return n === null ? null : {
      token: n.token
    };
}
class Qw extends Zi {
  /**
   * Delete attributes from a single bucket
   */
  async deleteAttributesBucketNameRaw(a, o) {
    if (a.bucketName === null || a.bucketName === void 0)
      throw new Yt("bucketName", "Required parameter requestParameters.bucketName was null or undefined when calling deleteAttributesBucketName.");
    const l = {};
    a.attributes && (l.attributes = a.attributes.join(yg.csv));
    const c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/attributes/{bucket_name}".replace("{bucket_name}", encodeURIComponent(String(a.bucketName))),
      method: "DELETE",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => bg(d));
  }
  /**
   * Delete attributes from a single bucket
   */
  async deleteAttributesBucketName(a, o) {
    return await (await this.deleteAttributesBucketNameRaw(a, o)).value();
  }
  /**
   * Retrieve attributes from multiple buckets
   */
  async getAttributesRaw(a, o) {
    const l = {};
    a.buckets && (l.buckets = a.buckets.join(yg.csv));
    const c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/attributes",
      method: "GET",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => tT(d));
  }
  /**
   * Retrieve attributes from multiple buckets
   */
  async getAttributes(a = {}, o) {
    return await (await this.getAttributesRaw(a, o)).value();
  }
  /**
   * Retrieve attributes from a single bucket
   */
  async getAttributesBucketNameRaw(a, o) {
    if (a.bucketName === null || a.bucketName === void 0)
      throw new Yt("bucketName", "Required parameter requestParameters.bucketName was null or undefined when calling getAttributesBucketName.");
    const l = {};
    a.attributes && (l.attributes = a.attributes.join(yg.csv));
    const c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/attributes/{bucket_name}".replace("{bucket_name}", encodeURIComponent(String(a.bucketName))),
      method: "GET",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => rT(d));
  }
  /**
   * Retrieve attributes from a single bucket
   */
  async getAttributesBucketName(a, o) {
    return await (await this.getAttributesBucketNameRaw(a, o)).value();
  }
  /**
   * Create or modify attributes in multiple buckets
   */
  async putAttributesRaw(a, o) {
    if (a.body === null || a.body === void 0)
      throw new Yt("body", "Required parameter requestParameters.body was null or undefined when calling putAttributes.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/attributes",
      method: "PUT",
      headers: c,
      query: l,
      body: a.body
    }, o);
    return new pn(p, (d) => bg(d));
  }
  /**
   * Create or modify attributes in multiple buckets
   */
  async putAttributes(a, o) {
    return await (await this.putAttributesRaw(a, o)).value();
  }
  /**
   * Create or modify attributes in a single bucket
   */
  async putAttributesBucketNameRaw(a, o) {
    if (a.bucketName === null || a.bucketName === void 0)
      throw new Yt("bucketName", "Required parameter requestParameters.bucketName was null or undefined when calling putAttributesBucketName.");
    if (a.body === null || a.body === void 0)
      throw new Yt("body", "Required parameter requestParameters.body was null or undefined when calling putAttributesBucketName.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/attributes/{bucket_name}".replace("{bucket_name}", encodeURIComponent(String(a.bucketName))),
      method: "PUT",
      headers: c,
      query: l,
      body: a.body
    }, o);
    return new pn(p, (d) => bg(d));
  }
  /**
   * Create or modify attributes in a single bucket
   */
  async putAttributesBucketName(a, o) {
    return await (await this.putAttributesBucketNameRaw(a, o)).value();
  }
}
class jf extends Zi {
  /**
   */
  async getChallengeChallengeIdRaw(a, o) {
    if (a.challengeId === null || a.challengeId === void 0)
      throw new Yt("challengeId", "Required parameter requestParameters.challengeId was null or undefined when calling getChallengeChallengeId.");
    const l = {}, c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/challenge/{challenge_id}".replace("{challenge_id}", encodeURIComponent(String(a.challengeId))),
      method: "GET",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => Kw(d));
  }
  /**
   */
  async getChallengeChallengeId(a, o) {
    return await (await this.getChallengeChallengeIdRaw(a, o)).value();
  }
  /**
   */
  async getChallengeChallengeIdV2Raw(a, o) {
    if (a.challengeId === null || a.challengeId === void 0)
      throw new Yt("challengeId", "Required parameter requestParameters.challengeId was null or undefined when calling getChallengeChallengeIdV2.");
    const l = {}, c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/challenge/{challenge_id}/v2".replace("{challenge_id}", encodeURIComponent(String(a.challengeId))),
      method: "GET",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => Cg(d));
  }
  /**
   */
  async getChallengeChallengeIdV2(a, o) {
    return await (await this.getChallengeChallengeIdV2Raw(a, o)).value();
  }
  /**
   */
  async getChallengePackChallengePackIdRaw(a, o) {
    if (a.challengePackId === null || a.challengePackId === void 0)
      throw new Yt("challengePackId", "Required parameter requestParameters.challengePackId was null or undefined when calling getChallengePackChallengePackId.");
    const l = {}, c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/challenge_pack/{challenge_pack_id}".replace("{challenge_pack_id}", encodeURIComponent(String(a.challengePackId))),
      method: "GET",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => wg(d));
  }
  /**
   */
  async getChallengePackChallengePackId(a, o) {
    return await (await this.getChallengePackChallengePackIdRaw(a, o)).value();
  }
  /**
   * Retrieve details of the person and all the organizations they belong to, including:  - The organization of the request: the person must be a member of the organization you authenticate    with for you to be allowed to retrieve this list  - Any other organizations that share the person pool with the organization specified in the request and to which the person also belongs.    A hierarchy of organizations can be created using [this API endpoint](/docs/api/post-organizations-suborganizations).    When organizations are configured to share a person pool, if the same person registers with multiple organizations    in the pool using the same handle, all organizations will see the same person ID for that person. 
   * Retrieve the person details and list of organizations
   */
  async getMeRaw(a) {
    const o = {}, l = {};
    if (this.configuration && this.configuration.accessToken) {
      const p = this.configuration.accessToken, d = await p("Bearer", []);
      d && (l.Authorization = `Bearer ${d}`);
    }
    const c = await this.request({
      path: "/me",
      method: "GET",
      headers: l,
      query: o
    }, a);
    return new pn(c, (p) => bT(p));
  }
  /**
   * Retrieve details of the person and all the organizations they belong to, including:  - The organization of the request: the person must be a member of the organization you authenticate    with for you to be allowed to retrieve this list  - Any other organizations that share the person pool with the organization specified in the request and to which the person also belongs.    A hierarchy of organizations can be created using [this API endpoint](/docs/api/post-organizations-suborganizations).    When organizations are configured to share a person pool, if the same person registers with multiple organizations    in the pool using the same handle, all organizations will see the same person ID for that person. 
   * Retrieve the person details and list of organizations
   */
  async getMe(a) {
    return await (await this.getMeRaw(a)).value();
  }
  /**
   * Given a token for a Person in an Organization, return a new token for the same user in the Organization specified in the SlashID-OrgID request header. For the call to succeed the following conditions must be met: - the token must be valid at the time of the request - the two Organizations must share the same person pool - the user must be a member of both Organizations This operation does not count as an authentication, so the new token will have the same expiration time as the original. 
   * Get a new token for the specified Organization ID
   */
  async getTokenRaw(a, o) {
    if (a.slashIDOrgID === null || a.slashIDOrgID === void 0)
      throw new Yt("slashIDOrgID", "Required parameter requestParameters.slashIDOrgID was null or undefined when calling getToken.");
    const l = {}, c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), a.slashIDOrgID !== void 0 && a.slashIDOrgID !== null && (c["SlashID-OrgID"] = String(a.slashIDOrgID)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/token",
      method: "GET",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => Cg(d));
  }
  /**
   * Given a token for a Person in an Organization, return a new token for the same user in the Organization specified in the SlashID-OrgID request header. For the call to succeed the following conditions must be met: - the token must be valid at the time of the request - the two Organizations must share the same person pool - the user must be a member of both Organizations This operation does not count as an authentication, so the new token will have the same expiration time as the original. 
   * Get a new token for the specified Organization ID
   */
  async getToken(a, o) {
    return await (await this.getTokenRaw(a, o)).value();
  }
  /**
   */
  async postAttestationRaw(a, o) {
    if (a.attestation === null || a.attestation === void 0)
      throw new Yt("attestation", "Required parameter requestParameters.attestation was null or undefined when calling postAttestation.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/attestation",
      method: "POST",
      headers: c,
      query: l,
      body: jw(a.attestation)
    }, o);
    return new pn(p, (d) => Kw(d));
  }
  /**
   */
  async postAttestation(a, o) {
    return await (await this.postAttestationRaw(a, o)).value();
  }
  /**
   */
  async postAttestationV2Raw(a, o) {
    if (a.attestation === null || a.attestation === void 0)
      throw new Yt("attestation", "Required parameter requestParameters.attestation was null or undefined when calling postAttestationV2.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/attestation/v2",
      method: "POST",
      headers: c,
      query: l,
      body: jw(a.attestation)
    }, o);
    return new pn(p, (d) => Cg(d));
  }
  /**
   */
  async postAttestationV2(a, o) {
    return await (await this.postAttestationV2Raw(a, o)).value();
  }
  /**
   */
  async postDirectIdRaw(a, o) {
    const l = {}, c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/direct-id",
      method: "POST",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => ST(d));
  }
  /**
   */
  async postDirectId(a = {}, o) {
    return await (await this.postDirectIdRaw(a, o)).value();
  }
  /**
   */
  async postIdRaw(a, o) {
    if (a.slashIDOrgID === null || a.slashIDOrgID === void 0)
      throw new Yt("slashIDOrgID", "Required parameter requestParameters.slashIDOrgID was null or undefined when calling postId.");
    if (a.iDRequest === null || a.iDRequest === void 0)
      throw new Yt("iDRequest", "Required parameter requestParameters.iDRequest was null or undefined when calling postId.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDOrgID !== void 0 && a.slashIDOrgID !== null && (c["SlashID-OrgID"] = String(a.slashIDOrgID)), a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/id",
      method: "POST",
      headers: c,
      query: l,
      body: wT(a.iDRequest)
    }, o);
    return new pn(p, (d) => wg(d));
  }
  /**
   */
  async postId(a, o) {
    return await (await this.postIdRaw(a, o)).value();
  }
  /**
   */
  async postRecoverRaw(a, o) {
    if (a.slashIDOrgID === null || a.slashIDOrgID === void 0)
      throw new Yt("slashIDOrgID", "Required parameter requestParameters.slashIDOrgID was null or undefined when calling postRecover.");
    if (a.recoverRequest === null || a.recoverRequest === void 0)
      throw new Yt("recoverRequest", "Required parameter requestParameters.recoverRequest was null or undefined when calling postRecover.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDOrgID !== void 0 && a.slashIDOrgID !== null && (c["SlashID-OrgID"] = String(a.slashIDOrgID)), a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/recover",
      method: "POST",
      headers: c,
      query: l,
      body: LT(a.recoverRequest)
    }, o);
    return new pn(p, (d) => wg(d));
  }
  /**
   */
  async postRecover(a, o) {
    return await (await this.postRecoverRaw(a, o)).value();
  }
  /**
   * Resolve endpoint for SSO flows using PKCE.
   * SSO resolve challenge endpoint
   */
  async postSsoResolveRaw(a, o) {
    if (a.slashIDOrgID === null || a.slashIDOrgID === void 0)
      throw new Yt("slashIDOrgID", "Required parameter requestParameters.slashIDOrgID was null or undefined when calling postSsoResolve.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDOrgID !== void 0 && a.slashIDOrgID !== null && (c["SlashID-OrgID"] = String(a.slashIDOrgID)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/sso/resolve",
      method: "POST",
      headers: c,
      query: l,
      body: ET(a.postSsoResolveRequest)
    }, o);
    return new Bf(p);
  }
  /**
   * Resolve endpoint for SSO flows using PKCE.
   * SSO resolve challenge endpoint
   */
  async postSsoResolve(a, o) {
    await this.postSsoResolveRaw(a, o);
  }
}
class MT extends Zi {
  /**
   * Post information that can used to build and publish an event originating from the SlashID SDK
   * Publish an event from the SDK
   */
  async postActionsSdkRaw(a, o) {
    if (a.eventPostRequest === null || a.eventPostRequest === void 0)
      throw new Yt("eventPostRequest", "Required parameter requestParameters.eventPostRequest was null or undefined when calling postActionsSdk.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/actions/sdk",
      method: "POST",
      headers: c,
      query: l,
      body: Gw(a.eventPostRequest)
    }, o);
    return new Bf(p);
  }
  /**
   * Post information that can used to build and publish an event originating from the SlashID SDK
   * Publish an event from the SDK
   */
  async postActionsSdk(a, o) {
    await this.postActionsSdkRaw(a, o);
  }
  /**
   * Post information that can used to build and publish an event. Deprecated, use `/actions`.
   * Publish an event
   */
  async postEventsRaw(a, o) {
    if (a.eventPostRequest === null || a.eventPostRequest === void 0)
      throw new Yt("eventPostRequest", "Required parameter requestParameters.eventPostRequest was null or undefined when calling postEvents.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/events",
      method: "POST",
      headers: c,
      query: l,
      body: Gw(a.eventPostRequest)
    }, o);
    return new Bf(p);
  }
  /**
   * Post information that can used to build and publish an event. Deprecated, use `/actions`.
   * Publish an event
   */
  async postEvents(a, o) {
    await this.postEventsRaw(a, o);
  }
}
class Xw extends Zi {
  /**
   * Removes the specified GDPR consent, or all consents.
   * Remove GDPR consent of current user
   */
  async deleteConsentGdprRaw(a, o) {
    const l = {};
    a.consentLevels && (l.consent_levels = a.consentLevels), a.deleteAll !== void 0 && (l.deleteAll = a.deleteAll);
    const c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/consent/gdpr",
      method: "DELETE",
      headers: c,
      query: l
    }, o);
    return new Bf(p);
  }
  /**
   * Removes the specified GDPR consent, or all consents.
   * Remove GDPR consent of current user
   */
  async deleteConsentGdpr(a = {}, o) {
    await this.deleteConsentGdprRaw(a, o);
  }
  /**
   * Returns the GDPR consent levels and timestamp for current person, if it exists. 
   * Get GDPR consent of current user
   */
  async getConsentGdprRaw(a, o) {
    const l = {}, c = {};
    if (a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/consent/gdpr",
      method: "GET",
      headers: c,
      query: l
    }, o);
    return new pn(p, (d) => sT(d));
  }
  /**
   * Returns the GDPR consent levels and timestamp for current person, if it exists. 
   * Get GDPR consent of current user
   */
  async getConsentGdpr(a = {}, o) {
    return await (await this.getConsentGdprRaw(a, o)).value();
  }
  /**
   * Stores the GDPR consent levels and timestamp. Returns the consent levels and the timestamp at which the consent information was received. This will overwrite existing GDPR consent levels for the specified person. The consent levels indicate the types of data classes the person has allowed during their use of your services, in accordance with GDPR. 
   * Store GDPR consent of current user
   */
  async postConsentGdprRaw(a, o) {
    if (a.gDPRConsentRequest === null || a.gDPRConsentRequest === void 0)
      throw new Yt("gDPRConsentRequest", "Required parameter requestParameters.gDPRConsentRequest was null or undefined when calling postConsentGdpr.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/consent/gdpr",
      method: "POST",
      headers: c,
      query: l,
      body: Ww(a.gDPRConsentRequest)
    }, o);
    return new pn(p, (d) => Zw(d));
  }
  /**
   * Stores the GDPR consent levels and timestamp. Returns the consent levels and the timestamp at which the consent information was received. This will overwrite existing GDPR consent levels for the specified person. The consent levels indicate the types of data classes the person has allowed during their use of your services, in accordance with GDPR. 
   * Store GDPR consent of current user
   */
  async postConsentGdpr(a, o) {
    return await (await this.postConsentGdprRaw(a, o)).value();
  }
  /**
   * Stores the GDPR consent levels and timestamp. Returns the consent levels and the timestamp at which the consent information was received. This will overwrite existing GDPR consent levels for the specified person. The consent levels indicate the types of data classes the person has allowed during their use of your services, in accordance with GDPR. 
   * Set GDPR consent of current user
   */
  async putConsentGdprRaw(a, o) {
    if (a.gDPRConsentRequest === null || a.gDPRConsentRequest === void 0)
      throw new Yt("gDPRConsentRequest", "Required parameter requestParameters.gDPRConsentRequest was null or undefined when calling putConsentGdpr.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/consent/gdpr",
      method: "PUT",
      headers: c,
      query: l,
      body: Ww(a.gDPRConsentRequest)
    }, o);
    return new pn(p, (d) => Zw(d));
  }
  /**
   * Stores the GDPR consent levels and timestamp. Returns the consent levels and the timestamp at which the consent information was received. This will overwrite existing GDPR consent levels for the specified person. The consent levels indicate the types of data classes the person has allowed during their use of your services, in accordance with GDPR. 
   * Set GDPR consent of current user
   */
  async putConsentGdpr(a, o) {
    return await (await this.putConsentGdprRaw(a, o)).value();
  }
}
class Jw extends Zi {
  /**
   * This endpoint validates a SlashID user token. The response indicates whether the token is valid and its expiration time if so. If the token is not valid, the reason is returned. 
   * Validate a user token
   */
  async postTokenValidateRaw(a, o) {
    if (a.validateTokenReq === null || a.validateTokenReq === void 0)
      throw new Yt("validateTokenReq", "Required parameter requestParameters.validateTokenReq was null or undefined when calling postTokenValidate.");
    const l = {}, c = {};
    if (c["Content-Type"] = "application/json", a.slashIDSdkVersion !== void 0 && a.slashIDSdkVersion !== null && (c["SlashID-SdkVersion"] = String(a.slashIDSdkVersion)), this.configuration && this.configuration.accessToken) {
      const d = this.configuration.accessToken, v = await d("Bearer", []);
      v && (c.Authorization = `Bearer ${v}`);
    }
    const p = await this.request({
      path: "/token/validate",
      method: "POST",
      headers: c,
      query: l,
      body: AT(a.validateTokenReq)
    }, o);
    return new pn(p, (d) => TT(d));
  }
  /**
   * This endpoint validates a SlashID user token. The response indicates whether the token is valid and its expiration time if so. If the token is not valid, the reason is returned. 
   * Validate a user token
   */
  async postTokenValidate(a, o) {
    return await (await this.postTokenValidateRaw(a, o)).value();
  }
}
function qT() {
  const o = window.screenX + (window.innerWidth - 400) / 2;
  return `width=400,height=600,top=${window.screenY + (window.innerHeight - 600) / 2},left=${o},resizable,scrollbars=yes,status=1`;
}
function h5() {
  const n = qT(), a = window.open(window.location.href, "/id:popup", n);
  if (!a)
    throw new Error("SlashId: Popup blocked, please consider redirect instead");
  const o = '<div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);">You will be redirected in a moment...</div>';
  try {
    var l;
    a == null || (l = a.document) === null || l === void 0 || l.write(o);
  } catch (p) {
    console.error(p), a.document && a.document.body && (a.document.body.innerHTML = o);
  } finally {
    a.blur();
  }
  return [
    a,
    (p) => (a && (a.location = p, a.focus()), a)
  ];
}
function zT(n, a) {
  return n.origin + n.pathname === a.origin + a.pathname;
}
function v5(n) {
  let a;
  try {
    a = new URL(n);
  } catch {
    return !1;
  }
  return a.protocol === "http:" || a.protocol === "https:";
}
var Tf, IT = new Uint8Array(16);
function NT() {
  if (!Tf && (Tf = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Tf))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Tf(IT);
}
var PT = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function UT(n) {
  return typeof n == "string" && PT.test(n);
}
var FT = UT, Tn = [];
for (var Sg = 0; Sg < 256; ++Sg)
  Tn.push((Sg + 256).toString(16).substr(1));
function VT(n) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = (Tn[n[a + 0]] + Tn[n[a + 1]] + Tn[n[a + 2]] + Tn[n[a + 3]] + "-" + Tn[n[a + 4]] + Tn[n[a + 5]] + "-" + Tn[n[a + 6]] + Tn[n[a + 7]] + "-" + Tn[n[a + 8]] + Tn[n[a + 9]] + "-" + Tn[n[a + 10]] + Tn[n[a + 11]] + Tn[n[a + 12]] + Tn[n[a + 13]] + Tn[n[a + 14]] + Tn[n[a + 15]]).toLowerCase();
  if (!FT(o))
    throw TypeError("Stringified UUID is invalid");
  return o;
}
var HT = VT;
function BT(n, a, o) {
  n = n || {};
  var l = n.random || (n.rng || NT)();
  if (l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, a) {
    o = o || 0;
    for (var c = 0; c < 16; ++c)
      a[o + c] = l[c];
    return a;
  }
  return HT(l);
}
var Ju = BT;
function Hs(n) {
  const a = n.replace(/_/g, "/").replace(/-/g, "+"), o = atob(a);
  return Uint8Array.from(o, (l) => l.charCodeAt(0));
}
function ii(n, a = !0) {
  const o = String.fromCharCode(...n), l = btoa(o);
  return a ? l.replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "") : l;
}
const jT = "challenges", GT = "sidcp", Vg = "@SLASHID/CSRF_TOKEN", Hg = "@SLASHID/PKCE_CODE_VERIFIER";
var xr;
(function(n) {
  n[n.StorageGetItem = 0] = "StorageGetItem", n[n.StorageSetItem = 1] = "StorageSetItem", n[n.Ping = 2] = "Ping", n[n.ChallengeWebauthnCreate = 3] = "ChallengeWebauthnCreate", n[n.ChallengeWebauthnGet = 4] = "ChallengeWebauthnGet", n[n.SSOChallenge = 5] = "SSOChallenge";
})(xr || (xr = {}));
class YT {
  constructor() {
    this.id = lc(), this.type = xr.Ping;
  }
}
class e2 {
  constructor(a, o) {
    this.id = a, this.error = o;
  }
}
class WT {
  constructor(a, o) {
    this.type = xr.ChallengeWebauthnCreate, this.id = lc(), this.slashIDOptions = a, this.challenge = o;
  }
}
class t2 {
  constructor(a, o, l) {
    this.id = a, this.attestation = o, this.error = l;
  }
}
class KT {
  constructor(a, o) {
    this.type = xr.ChallengeWebauthnGet, this.id = lc(), this.slashIDOptions = a, this.challenge = o;
  }
}
class n2 {
  constructor(a, o, l) {
    this.id = a, this.attestation = o, this.error = l;
  }
}
class ZT {
  constructor(a) {
    this.type = xr.StorageGetItem, this.id = lc(), this.key = a;
  }
}
class r2 {
  constructor(a, o, l) {
    this.id = a, this.value = o, this.error = l;
  }
}
class QT {
  constructor(a, o) {
    this.id = lc(), this.type = xr.StorageSetItem, this.key = a, this.value = o;
  }
}
class a2 {
  constructor(a, o) {
    this.id = a, this.error = o;
  }
}
function lc() {
  const n = new Uint32Array(1);
  return window.crypto.getRandomValues(n), n[0];
}
function i2(n) {
  const a = new URLSearchParams(n), o = a.get("sso_challenge_id"), l = a.get("sso_code"), c = a.get("csrf_token");
  return !o || !l || !c ? null : {
    ssoChallengeID: o,
    ssoCode: l,
    csrfToken: c
  };
}
function XT(n) {
  return n.type === xr.ChallengeWebauthnCreate;
}
function JT(n) {
  return n.type === xr.ChallengeWebauthnGet;
}
function e$(n) {
  return n && n.type === xr.SSOChallenge;
}
function t$(n) {
  return n.type === xr.Ping;
}
function n$(n) {
  return typeof n == "object" && !!n.baseURL && !!n.sdkURL;
}
const r$ = [
  "http:",
  "https:"
];
function a$(n) {
  if (!n)
    throw new TypeError("options cannot be null");
  if (n.environment) {
    if (typeof n.environment == "string" && n.environment !== "production" && n.environment !== "sandbox")
      throw new TypeError("If 'environment' is set as a string, it must be either 'production' or 'sandbox'");
    if (typeof n.environment == "object") {
      if (typeof n.environment.baseURL != "string")
        throw new TypeError("'environment.baseURL' must be a string");
      if (typeof n.environment.sdkURL != "string")
        throw new TypeError("'environment.sdkURL' must be a string");
    }
  }
  if (n.environment && (n.baseURL || n.sdkURL))
    throw new TypeError("If 'environment' is set, 'baseURL' and 'sdkURL' cannot be set at the same time. Use a custom environment instead.");
  if (n.baseURL) {
    if (typeof n.baseURL != "string")
      throw new TypeError("'baseURL' must be a string");
    let l;
    try {
      l = new URL(n.baseURL);
    } catch {
      throw new TypeError("'baseURL' must be a valid URL");
    }
    if (r$.indexOf(l.protocol) === -1)
      throw new TypeError("'baseURL' must be either an http or https URL");
  }
  if (n.sdkURL) {
    if (typeof n.sdkURL != "string")
      throw new TypeError("'sdkURL' must be a string");
    try {
      new URL(n.sdkURL);
    } catch {
      throw new TypeError("'sdkURL' must be a valid URL");
    }
  }
  const { analyticsEnabled: a = !0, oid: o } = n;
  if (a && !o)
    throw new Error("Analytics require the 'oid' parameter to be set when instantiating SlashID()");
}
function i$(n) {
  return n.environment ? o$(n.environment) : {
    baseURL: n.baseURL || Bg.production.baseURL,
    sdkURL: n.sdkURL || Bg.production.sdkURL
  };
}
const Bg = {
  production: {
    baseURL: "https://api.slashid.com",
    sdkURL: "https://cdn.slashid.com/sdk.html"
  },
  sandbox: {
    baseURL: "https://api.sandbox.slashid.com",
    sdkURL: "https://cdn.sandbox.slashid.com/sdk.html"
  }
};
function o$(n) {
  if (typeof n == "string")
    return Bg[n];
  if (n$(n))
    return {
      baseURL: n.baseURL,
      sdkURL: n.sdkURL
    };
  throw new TypeError("'environment' must be either a string or an object");
}
function m5(n) {
  const a = i$(n);
  var o;
  return {
    oid: n.oid,
    analyticsEnabled: (o = n.analyticsEnabled) !== null && o !== void 0 ? o : !0,
    ...a
  };
}
class o2 {
  constructor(a) {
    this.getOTP = a == null ? void 0 : a.getOTP;
  }
}
async function g5() {
  const n = Ju(), a = Ju() + Ju(), o = new TextEncoder().encode(a), l = await window.crypto.subtle.digest("SHA-256", o), c = ii(new Uint8Array(l));
  return window.localStorage.setItem(Vg, n), window.localStorage.setItem(Hg, a), {
    csrf_token: n,
    pkce_code_challenge: c
  };
}
async function s$(n) {
  if (n.method !== "oidc")
    throw new Error(`Can't create OIDC extras for method: ${n.method}`);
  let a = {};
  const { client_id: o, provider: l } = n.options;
  let { ux_mode: c, redirect_target: p } = n.options;
  if (c || (c = Qu.Popup), p || (p = window.location.href), c === Qu.Redirect && !v5(p))
    throw new Error(`If OIDC ux_mode was set to "redirect" a "redirect_target" is required, got ${p}`);
  if (c === Qu.Popup) {
    const [w, b] = h5();
    a = {
      ...a,
      popup: w,
      setPopupUrl: b
    };
  }
  const { csrf_token: d, pkce_code_challenge: v } = await g5();
  return {
    ...n,
    options: {
      ...n.options,
      client_id: o,
      provider: l,
      ux_mode: c,
      redirect_target: p,
      csrf_token: d,
      pkce_code_challenge: v
    },
    extras: a
  };
}
async function l$(n) {
  if (n.method !== "saml")
    throw new Error(`Can't create SAML extras for method: ${n.method}`);
  let a = {}, { ux_mode: o, redirect_target: l } = n.options;
  if (o || (o = Xu.Popup), l || (l = window.location.href), o === Xu.Redirect && !v5(l))
    throw new Error(`If SAML ux_mode was set to "redirect" a "redirect_target" is required, got ${l}`);
  if (o === Xu.Popup) {
    const [d, v] = h5();
    a = {
      ...a,
      popup: d,
      setPopupUrl: v
    };
  }
  const { csrf_token: c, pkce_code_challenge: p } = await g5();
  return {
    ...n,
    options: {
      ...n.options,
      ux_mode: o,
      redirect_target: l,
      csrf_token: c,
      pkce_code_challenge: p
    },
    extras: a
  };
}
function jg(n) {
  this.message = n;
}
jg.prototype = new Error(), jg.prototype.name = "InvalidCharacterError";
var s2 = typeof window < "u" && window.atob && window.atob.bind(window) || function(n) {
  var a = String(n).replace(/=+$/, "");
  if (a.length % 4 == 1)
    throw new jg("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var o, l, c = 0, p = 0, d = ""; l = a.charAt(p++); ~l && (o = c % 4 ? 64 * o + l : l, c++ % 4) && (d += String.fromCharCode(255 & o >> (-2 * c & 6))))
    l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(l);
  return d;
};
function u$(n) {
  var a = n.replace(/-/g, "+").replace(/_/g, "/");
  switch (a.length % 4) {
    case 0:
      break;
    case 2:
      a += "==";
      break;
    case 3:
      a += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  try {
    return function(o) {
      return decodeURIComponent(s2(o).replace(/(.)/g, function(l, c) {
        var p = c.charCodeAt(0).toString(16).toUpperCase();
        return p.length < 2 && (p = "0" + p), "%" + p;
      }));
    }(a);
  } catch {
    return s2(a);
  }
}
function Gf(n) {
  this.message = n;
}
function c$(n, a) {
  if (typeof n != "string")
    throw new Gf("Invalid token specified");
  var o = (a = a || {}).header === !0 ? 0 : 1;
  try {
    return JSON.parse(u$(n.split(".")[o]));
  } catch (l) {
    throw new Gf("Invalid token specified: " + l.message);
  }
}
Gf.prototype = new Error(), Gf.prototype.name = "InvalidTokenError";
var _g = c$;
const d$ = {
  end_user_read_write: "end_user_read_write",
  end_user_read_only: "end_user_read_only",
  end_user_no_access: "end_user_no_access",
  "person_pool-end_user_read_write": "person_pool-end_user_read_write",
  "person_pool-end_user_read_only": "person_pool-end_user_read_only",
  "person_pool-end_user_no_access": "person_pool-end_user_no_access"
};
class f$ {
  /**
   * Retrieve attributes for a person from the bucket
   *
   * @param attributeNames You can optionally filter which attributes to retrieve by supplying a list of attribute names. If you don't the method returns all attributes.
   *
   * @returns A map from `string` to basic types containing user data previously associated with {@link set}.
   * @throws `Error` if the operation fails.
   */
  async get(a) {
    const o = await this.user.getAttributesClient().getAttributesBucketName({
      bucketName: this.bucketName,
      attributes: a,
      slashIDSdkVersion: $n.raw
    }, {
      cache: "no-cache"
    }), l = o.errors;
    if (l)
      throw l;
    return o.result;
  }
  /**
   * Set attributes for a person in the bucket
   *
   * @param attributes A serializable object to associate with the user credential.
   * @throws `Error` if the operation fails.
   */
  async set(a) {
    const l = (await this.user.getAttributesClient().putAttributesBucketName({
      bucketName: this.bucketName,
      body: a,
      slashIDSdkVersion: $n.raw
    }, {
      cache: "no-cache"
    })).errors;
    if (l)
      throw l;
  }
  /**
   * Delete person attributes from the bucket
   *
   * @param attributeNames You must specify which data attributes to delete by supplying a list of filter strings.
   * @throws `Error` if the operation fails.
   */
  async delete(a) {
    const l = (await this.user.getAttributesClient().deleteAttributesBucketName({
      bucketName: this.bucketName,
      slashIDSdkVersion: $n.raw,
      attributes: a
    }, {
      cache: "no-cache"
    })).errors;
    if (l)
      throw l;
  }
  constructor({ user: a, bucketName: o }) {
    this.user = a, this.bucketName = o;
  }
}
function p$(n) {
  return n ? typeof n.user_token == "string" : !1;
}
class y5 {
  get decoded() {
    if (!this._token)
      throw new Error("Cannot call methods on unauthenticated user");
    try {
      return _g(this._token);
    } catch (a) {
      throw new TypeError(a.toString());
    }
  }
  /**
   * The claims of the user token.
   * @returns {api.UserToken}
   */
  get tokenClaims() {
    return this.decoded;
  }
  get decodedTokenContainer() {
    if (this._tokenContainer)
      try {
        return _g(this._tokenContainer);
      } catch (a) {
        throw new TypeError(a.toString());
      }
  }
  /**
   * If the user instance is created with a {@link Types.TokenContainer} this will return the claims of the token container.
   * Otherwise it will return undefined.
   * @returns {api.TokenContainer | undefined}
   */
  get tokenContainerClaims() {
    return this.decodedTokenContainer;
  }
  updateClient(a) {
    var o;
    this._token = a;
    const l = new Ws({
      ...Ks,
      ...((o = this._clientOptions) === null || o === void 0 ? void 0 : o.baseURL) && {
        basePath: this._clientOptions.baseURL
      },
      accessToken: a
    });
    this._apiClient = new jf(l), this._attrsClient = new Qw(l), this._tokenClient = new Jw(l), this._personConsentsApi = new Xw(l);
  }
  /**
   * This user's ID. Use this property in your backend services when interacting with the [SlashID User Management API](https://developer.slashid.dev/docs/category/api/persons).
   */
  get ID() {
    return this.decoded.person_id;
  }
  /**
   * The entire, signed authentication token of this user.
   */
  get token() {
    var a;
    return (a = this._token) !== null && a !== void 0 ? a : "";
  }
  /**
   * The entire token container
   * @returns either the token container string or an empty string
   */
  get tokenContainer() {
    return this._tokenContainer || "";
  }
  /**
   * The organization ID this user belongs to.
   */
  get oid() {
    return this.decoded.oid;
  }
  /**
   * Indicates whether the user has been just registered, otherwise it's a returning user.
   */
  get firstLogin() {
    return this.decoded.first_token;
  }
  /**
   * Indicates which authentication methods the user has been verified with. It can contain multiple items in case of multi factor authentication.
   */
  get authentication() {
    return this.decoded.authenticated_methods || [];
  }
  /**
   * Indicates which authentication methods the user has been verified with, including the handles used for each method.
   */
  get authentications() {
    return this.decoded.authentications || [];
  }
  /**
   * Create a DirectID based on your token
   * @returns directID token
   */
  async createDirectID() {
    const { result: a } = await this._apiClient.postDirectId({
      slashIDSdkVersion: $n.raw
    });
    return a;
  }
  /**
   * Log out of the current session. Clears the SlashID token.
   */
  async logout() {
    this.updateClient(void 0), this._tokenContainer = void 0;
  }
  /**
   * Resolves to a token validity info object which tells if the token is genuine and if it has expired yet.
   * @returns {Promise} Token validity info
   */
  async validateToken() {
    var a;
    const o = await ((a = this._tokenClient) === null || a === void 0 ? void 0 : a.postTokenValidate({
      validateTokenReq: {
        token: this.token
      },
      slashIDSdkVersion: $n.raw
    }, {
      cache: "no-cache"
    })), l = o.errors;
    if (l)
      throw l;
    return o.result;
  }
  /**
   * Get an array of group names that the user belongs to.
   */
  getGroups() {
    const a = this.decoded.groups_claim_name || "groups";
    return this.decoded[a];
  }
  /**
   * Exposes the attributes client so the Bucket instance can access it
   */
  getAttributesClient() {
    return this._attrsClient;
  }
  /**
   *  Creates a {@link Types.Bucket} object used to access attributes.
   *
   * @param bucketName name of the bucket we want to access - uses "end_user_read_write" as default.
   * You can pass in any string that corresponds to a name of a bucket set up for your organization.
   * You can use any of the preset bucket names with corresponding permissions and scopes - {@link Types.DefaultBucketName}.
   * @returns
   */
  getBucket(a = d$.end_user_read_write) {
    return new f$({
      user: this,
      bucketName: a
    });
  }
  /**
   * @deprecated Use {@link getBucket} instead.
   */
  async get(a) {
    return this.getBucket().get(a);
  }
  /**
   * @deprecated Use {@link getBucket} instead.
   */
  async set(a) {
    return this.getBucket().set(a);
  }
  /**
   * @deprecated Use {@link getBucket} instead.
   */
  async delete(a) {
    return this.getBucket().delete(a);
  }
  /**
   * Fetch the GDPR consent levels for the current user.
   * @returns {Promise} GDPR consent info
   */
  async getGDPRConsent() {
    const a = await this._personConsentsApi.getConsentGdpr({
      slashIDSdkVersion: $n.raw
    }), o = a.errors;
    if (o)
      throw o;
    return a.result;
  }
  /**
   * Set the GDPR consent levels for the current user.
   * This will overwrite any existing consent levels and set the consent levels to only the ones included with the request.
   *
   * @param {api.GDPRConsentRequest} request with consentLevels to set
   * @returns {Promise} GDPR consent info
   */
  async setGDPRConsent({ consentLevels: a }) {
    const o = await this._personConsentsApi.putConsentGdpr({
      gDPRConsentRequest: {
        consent_levels: a
      },
      slashIDSdkVersion: $n.raw
    }), l = o.errors;
    if (l)
      throw l;
    return o.result;
  }
  /**
   * Add the GDPR consent levels to the current user.
   * Consent levels not included in the request will not be changed.
   *
   * @param {api.GDPRConsentRequest} request with consent levels to add
   * @returns {Promise} GDPR consent info
   */
  async addGDPRConsent({ consentLevels: a }) {
    const o = await this._personConsentsApi.postConsentGdpr({
      gDPRConsentRequest: {
        consent_levels: a
      },
      slashIDSdkVersion: $n.raw
    }), l = o.errors;
    if (l)
      throw l;
    return o.result;
  }
  /**
   * Remove the GDPR consent levels from the current user.
   * Consent levels not included in the request will not be changed.
   *
   * @param {api.ConsentGdprDeleteRequest} request with consentLevels to remove
   */
  async removeGDPRConsent({ consentLevels: a }) {
    return this._personConsentsApi.deleteConsentGdpr({
      slashIDSdkVersion: $n.raw,
      consentLevels: a
    });
  }
  /**
   * Remove all stored GDPR consent levels from the current user.
   * Consent levels not included in the request will not be changed, unless deleteAll flag is set to true.
   */
  async removeGDPRConsentAll() {
    return this._personConsentsApi.deleteConsentGdpr({
      slashIDSdkVersion: $n.raw,
      deleteAll: !0
    });
  }
  /**
   * Get the organizations the user belongs to.
   * @returns {Promise} A list of organizations the user belongs to
   */
  async getOrganizations() {
    const a = await this._apiClient.getMe(), o = a.errors;
    if (o)
      throw o;
    return a.result.organizations;
  }
  /**
   * Fetch all the handles associated with this user from the SlashID API.
   * @returns {Promise} A list of handles available for the user
   */
  async getHandles() {
    const { errors: a, result: o } = await this._apiClient.getMe();
    if (a)
      throw a;
    return o.handles;
  }
  /**
   * Given an organization ID, get a new token for the same user in the Organization specified by the Organization ID.
   *
   * For the call to succeed the following conditions must be met:
   * - the token must be valid at the time of the request
   * - the two Organizations must share the same person pool
   * - the user must be a member of both Organizations
   *
   * This operation does not count as an authentication, so the new token will have the same expiration time as the original.
   * @param oid
   * @returns {Promise} A new token for the specified Organization ID
   */
  async getTokenForOrganization(a) {
    const o = await this._apiClient.getToken({
      slashIDOrgID: a,
      slashIDSdkVersion: $n.raw
    }), l = o.errors;
    if (l)
      throw l;
    return o.result;
  }
  /**
   * User objects stringify to their token value for convenience:
   *
   * @example
   * ```js
   * user.toString() === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBTbWl0aCIsImlhdCI6MTUxNjIzOTAyMn0.dzKuKf6u9G7Crk9tsFnS2cey1zglWTFQv_hjWjmtXms"
   * ```
   */
  toString() {
    var a, o;
    return (o = (a = this._tokenContainer) !== null && a !== void 0 ? a : this._token) !== null && o !== void 0 ? o : "";
  }
  /**
   * User objects encode to JSON as a string containing their token value.
   *
   * @example
   * ```js
   * JSON.stringify(user) === "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBTbWl0aCIsImlhdCI6MTUxNjIzOTAyMn0.dzKuKf6u9G7Crk9tsFnS2cey1zglWTFQv_hjWjmtXms\""
   * ```
   */
  toJSON() {
    var a, o;
    return `${(o = (a = this._tokenContainer) !== null && a !== void 0 ? a : this._token) !== null && o !== void 0 ? o : ""}`;
  }
  /**
   * Reconstruct an authenticated user from its token value.
   *
   * @param token A user {@link token} value.
   * @param optionsOrSid SlashID instance or SlashID connection options. It is preferred to pass in the SlashID instance
   *
   * @throws `TypeError` If the given `optionsOrSid`, if defined, fail validation, or
   * the given token cannot be decoded.
   */
  constructor(a, o) {
    try {
      a = JSON.parse(a);
    } catch {
    }
    if (typeof a != "string")
      throw new TypeError("token must be a string");
    try {
      const c = _g(a);
      p$(c) ? (this._token = c.user_token, this._tokenContainer = a) : this._token = a;
    } catch (c) {
      throw new TypeError(c.toString());
    }
    this._clientOptions = m5(o ?? {});
    const l = new Ws({
      ...Ks,
      ...(o == null ? void 0 : o.baseURL) && {
        basePath: o.baseURL
      },
      accessToken: this._token
    });
    this._apiClient = new jf(l), this._attrsClient = new Qw(l), this._tokenClient = new Jw(l), this._personConsentsApi = new Xw(l);
  }
}
var Un = {};
ur(Un, "InvalidAuthenticationMethodError", function() {
  return zo;
});
ur(Un, "isResponseError", function() {
  return Gi;
});
ur(Un, "isRateLimitError", function() {
  return iy;
});
ur(Un, "isTimeoutError", function() {
  return b5;
});
ur(Un, "isBadPasskeyScopeError", function() {
  return C5;
});
ur(Un, "isThrownResponse", function() {
  return tc;
});
ur(Un, "isTimeoutInPayload", function() {
  return w5;
});
ur(Un, "isRateLimitInPayload", function() {
  return S5;
});
ur(Un, "RateLimitError", function() {
  return nc;
});
ur(Un, "clientGeneratedErrorSlugs", function() {
  return _5;
});
ur(Un, "isClientGeneratedErrorSlug", function() {
  return h$;
});
ur(Un, "ensureError", function() {
  return Gg;
});
ur(Un, "getErrorMessage", function() {
  return oy;
});
ur(Un, "createEventFromError", function() {
  return x5;
});
class zo extends Error {
  constructor(a, o) {
    super(`Authentication method '${a}': ${o}`);
  }
}
function Gi(n) {
  return n.name === "ResponseError" && n.response instanceof Response;
}
function iy(n) {
  var a;
  return ((a = n.response) === null || a === void 0 ? void 0 : a.status) === 429;
}
async function b5(n) {
  var a, o, l, c;
  return (((a = n.response) === null || a === void 0 ? void 0 : a.status) === 401 || ((o = n.response) === null || o === void 0 ? void 0 : o.status) === 403) && Gi(n) && ((l = (await n.response.clone().json()).errors) === null || l === void 0 || (c = l[0]) === null || c === void 0 ? void 0 : c.message) === "authentication has expired";
}
async function C5(n) {
  var a, o, l;
  const c = /selected scope '(.*?)' is not equal to or a registrable domain suffix of origin '(.*?)'/;
  return ((a = n.response) === null || a === void 0 ? void 0 : a.status) === 400 && Gi(n) && c.test((o = (await n.response.clone().json()).errors) === null || o === void 0 || (l = o[0]) === null || l === void 0 ? void 0 : l.message);
}
function tc(n) {
  return typeof n == "object" && Array.isArray(n.errors) && n.errors.every((a) => typeof a.httpcode == "number" && typeof a.message == "string");
}
function w5(n) {
  return n.errors.some((a) => a.message === "authentication has expired");
}
function S5(n) {
  return n.errors.some((a) => a.httpcode === 429);
}
class nc extends Error {
  static async fromResponseError(a) {
    const l = (await a.response.clone().json()).errors.find((c) => c.httpcode === 429);
    return l ? new nc(a, l.message) : new nc(a);
  }
  constructor(a, o) {
    super(o || "Too many requests!"), this.name = "RateLimitError", this.response = a.response;
  }
}
const _5 = [
  "incorrect_otp_code_via_email",
  "incorrect_otp_code_via_sms",
  "incorrect_otp_code",
  "invalid_password",
  "incorrect_password",
  "recovery_failed",
  "bad_passkey_scope",
  "rate_limit_exceeded",
  "timeout",
  "client_side_error",
  "unspecified"
], h$ = (n) => _5.includes(n);
function Gg(n) {
  if (n instanceof Error)
    return n;
  let a = "[Unable to stringify the thrown value]";
  try {
    a = JSON.stringify(n);
  } catch {
  }
  return new Error(`Non-Error thrown: ${a}`);
}
async function oy(n) {
  if (Gi(n) || tc(n)) {
    let a;
    try {
      return Gi(n) ? a = await n.response.clone().json() : a = n, JSON.stringify(a);
    } catch {
      return Gg(n).message;
    }
  }
  return Gg(n).message;
}
async function x5(n, { authenticationFactor: a, handle: o, previousToken: l, challengeId: c }) {
  const p = await (async () => {
    if (!Gi(n) && !tc(n))
      return null;
    if (iy(n))
      return "rate_limit_exceeded";
    if (await b5(n))
      return "timeout";
    if (await C5(n))
      return "bad_passkey_scope";
    if (tc(n)) {
      if (w5(n))
        return "timeout";
      if (S5(n))
        return "rate_limit_exceeded";
    }
    return "unspecified";
  })();
  return {
    authenticationFactor: a,
    handle: o,
    errorText: p || "client_side_error",
    previousToken: l,
    challengeId: c,
    failureDetail: await oy(n)
  };
}
function ec(n) {
  return new Promise((a) => setTimeout(a, n));
}
function v$(n) {
  return {
    all: n = n || /* @__PURE__ */ new Map(),
    on: function(a, o) {
      var l = n.get(a);
      l ? l.push(o) : n.set(a, [
        o
      ]);
    },
    off: function(a, o) {
      var l = n.get(a);
      l && (o ? l.splice(l.indexOf(o) >>> 0, 1) : n.set(a, []));
    },
    emit: function(a, o) {
      var l = n.get(a);
      l && l.slice().map(function(c) {
        c(o);
      }), (l = n.get("*")) && l.slice().map(function(c) {
        c(a, o);
      });
    }
  };
}
async function l2() {
  const n = document.hasFocus();
  for (; !n && !document.hasFocus(); )
    await ec(50);
  return n;
}
const u2 = {
  PopupBlocked: "Popup blocked",
  BadOAuthURL: "Bad OAuth sign in URL"
}, c2 = {
  PopupBlocked: "Popup blocked",
  BadAuthURL: "Bad authentication URL"
};
function m$(n) {
  return n.errorText === "client_side_error";
}
const g$ = [
  "otpSmsSent",
  "otpCodeSent",
  "otpIncorrectCodeSubmitted",
  "passwordSetReady",
  "passwordResetReady",
  "passwordVerifyReady",
  "invalidPasswordSubmitted",
  "incorrectPasswordSubmitted",
  "oauthFlowStarted",
  "oauthFlowFailed",
  "userAuthenticatedFromURL",
  "idFlowSucceeded",
  "idFlowStarted",
  "idFlowFailed",
  "recoveryFlowStarted",
  "recoveryFlowSucceeded",
  "recoveryFlowFailed",
  "webAuthnChallengeProcessed"
], y$ = [
  "otpCodeSubmitted",
  "passwordSubmitted"
], b$ = [
  "clientSideError"
];
function d2(n) {
  return g$.includes(n);
}
function C$(n) {
  return y$.includes(n);
}
function xg(n) {
  return b$.includes(n);
}
function w$() {
  return v$();
}
async function Yg(n) {
  return new Promise(async (o, l) => {
    const c = new YT();
    let p = !1;
    const d = (v) => {
      const w = v.data;
      w.id === c.id && (window.removeEventListener("message", d), w.error ? l(w.error) : (p = !0, o(n)));
    };
    for (window.addEventListener("message", d); !p; )
      n.postMessage(c, "*"), await ec(50);
  });
}
class S$ {
  async getRemoteWindow() {
    var a;
    const o = (a = this.remote) === null || a === void 0 ? void 0 : a.contentWindow;
    if (!o)
      throw new Error("this context has no remote");
    return this.remoteReady || (await Yg(o), this.remoteReady = !0), o;
  }
  async processEvent(a) {
    let o = null;
    if (window.parent && a.source === window.parent && (o = window.parent), !!o)
      switch (a.data.type) {
        case xr.StorageGetItem:
          {
            const l = a.data;
            try {
              const c = await this.localGetItem(l.key);
              o.postMessage(new r2(a.data.id, c), "*");
            } catch (c) {
              o.postMessage(new r2(a.data.id, null, c), "*");
            }
          }
          break;
        case xr.StorageSetItem:
          {
            const l = a.data;
            try {
              await this.localSetItem(l.key, l.value), o.postMessage(new a2(a.data.id), "*");
            } catch (c) {
              o.postMessage(new a2(a.data.id, c), "*");
            }
          }
          break;
      }
  }
  async localGetItem(a) {
    return window.localStorage.getItem(a);
  }
  async remoteGetItem(a) {
    let o = null;
    return this.remote && (o = await new Promise((l, c) => {
      const p = new ZT(a), d = (v) => {
        const w = v.data;
        w.id === p.id && (window.removeEventListener("message", d), w.error ? c(w.error) : l(w.value));
      };
      window.addEventListener("message", d), this.getRemoteWindow().then((v) => {
        v.postMessage(p, "*");
      });
    })), o;
  }
  async localSetItem(a, o) {
    return window.localStorage.setItem(a, o);
  }
  async remoteSetItem(a, o) {
    this.remote && await new Promise((l, c) => {
      const p = new QT(a, o), d = (v) => {
        const w = v.data;
        w.id === p.id && (window.removeEventListener("message", d), w.error ? c(w.error) : l());
      };
      window.addEventListener("message", d), this.getRemoteWindow().then((v) => {
        v.postMessage(p, "*");
      });
    });
  }
  constructor(a, o) {
    this.remoteReady = !1, this.remote = a, this.remoteOrigin = o, this.remote || window.addEventListener("message", this.processEvent.bind(this));
  }
}
class E5 {
  constructor(a) {
    this.store = a;
  }
}
class xa extends E5 {
  stringify(a) {
    return JSON.stringify(a);
  }
  parse(a) {
    return a ? JSON.parse(a) : [];
  }
  async getAll() {
    const a = this.parse(await this.store.localGetItem(xa.LOCAL_STORAGE_IDENTIFIERS_KEY)), o = this.parse(await this.store.remoteGetItem(xa.LOCAL_STORAGE_IDENTIFIERS_KEY));
    return xa.merge(a, o);
  }
  async add(a) {
    const o = await this.getAll(), l = this.stringify(xa.merge(o, [
      a
    ]));
    await this.store.localSetItem(xa.LOCAL_STORAGE_IDENTIFIERS_KEY, l), await this.store.remoteSetItem(xa.LOCAL_STORAGE_IDENTIFIERS_KEY, l);
  }
  static identifiersEqual(a, o) {
    return a.type === o.type && a.value === o.value;
  }
  static merge(a, o) {
    return a.concat(...o).reduce((l, c) => {
      for (const p of l)
        if (xa.identifiersEqual(p, c))
          return l;
      return l.push(c), l;
    }, []);
  }
}
xa.LOCAL_STORAGE_IDENTIFIERS_KEY = "SLASHID_IDENTIFIERS";
class tp extends E5 {
  static identifiersEqual(a, o) {
    return a === o;
  }
  static merge(a, o) {
    return a.concat(...o).reduce((l, c) => {
      for (const p of l)
        if (tp.identifiersEqual(p, c))
          return l;
      return l.push(c), l;
    }, []);
  }
}
class si extends tp {
  stringify(a) {
    return JSON.stringify(a);
  }
  parse(a) {
    if (!a)
      return [];
    let o = null;
    try {
      o = JSON.parse(a);
    } catch {
      return [
        a
      ];
    }
    return Array.isArray(o) ? o.filter((c) => typeof c == "string") : [];
  }
  async getAll() {
    const a = this.parse(await this.store.localGetItem(si.LOCAL_STORAGE_WEBAUTHN_CREDENTIAL_ID_KEY)), o = this.parse(await this.store.remoteGetItem(si.LOCAL_STORAGE_WEBAUTHN_CREDENTIAL_ID_KEY));
    return si.merge(a, o);
  }
  async add(a) {
    const o = await this.getAll(), l = this.stringify(si.merge(o, [
      a
    ]));
    await this.store.localSetItem(si.LOCAL_STORAGE_WEBAUTHN_CREDENTIAL_ID_KEY, l), await this.store.remoteSetItem(si.LOCAL_STORAGE_WEBAUTHN_CREDENTIAL_ID_KEY, l);
  }
}
si.LOCAL_STORAGE_WEBAUTHN_CREDENTIAL_ID_KEY = "SLASHID_WEBAUTHN_CREDENTIAL_ID";
class rc extends tp {
  stringify(a) {
    return JSON.stringify(a);
  }
  parse(a) {
    if (!a)
      return {};
    let o = null;
    try {
      o = JSON.parse(a);
    } catch {
      return {};
    }
    if (typeof o != "object")
      return {};
    const l = {};
    for (const c of Object.keys(o)) {
      if (typeof c != "string" || !Array.isArray(o[c]))
        continue;
      const p = o[c].filter((d) => typeof d == "string");
      l[c] = p;
    }
    return l;
  }
  async getAll() {
    return this.parse(await this.store.localGetItem(rc.LOCAL_STORAGE_WEBAUTHN_CREDENTIAL_ID_KEY_V2));
  }
  async get(a) {
    return !this.store.remoteOrigin || this.store.remoteOrigin.endsWith(a) ? this.v1Storage.getAll() : (await this.getAll())[a] || [];
  }
  async add(a, o) {
    if (!this.store.remoteOrigin || this.store.remoteOrigin.endsWith(a)) {
      this.v1Storage.add(o);
      return;
    }
    const l = await this.getAll(), c = l[a] || [];
    for (const d of c)
      if (d === o) {
        console.warn(`Attempted to add already present credential ID: scope=${a} credId=${o}`);
        return;
      }
    c.push(o), l[a] = c;
    const p = this.stringify(l);
    await this.store.localSetItem(rc.LOCAL_STORAGE_WEBAUTHN_CREDENTIAL_ID_KEY_V2, p);
  }
  constructor(a) {
    super(a), this.v1Storage = new si(a);
  }
}
rc.LOCAL_STORAGE_WEBAUTHN_CREDENTIAL_ID_KEY_V2 = "SLASHID_WEBAUTHN_CREDENTIAL_ID_V2";
class Zu extends y5 {
  /**
   * Request the user to authenticate with the given method. This method is essentially equivalent to
   * {@link SlashID.id}, but since the user is already authenticated you can omit the `handle` or
   * `authenticationFactor` parameters, depending on the desired outcome. Please refer to the examples
   * for the use cases this method covers.
   *
   * @param handle A user handle, either a new one to be associated to the user, or an existing
   * one to deliver the authetication request to.
   *
   * @param authenticationFactor The authentication factor, please to refer to {@link SlashID.id}
   * documentation for details.
   *
   * @throws `slashid.errors.InvalidAuthenticationMethodError` if the chosen method is
   * incompatible with the given handle or is not available on the current device.
   * `Error` if the operation fails otherwise.
   *
   * @example
   *
   * One thing you can do with `mfa()` is attach other handles to the user.
   * For example, the user has already authenticated via e-mail magic link with
   * {@link SlashID.id}, but you want to also attach their phone number. In that case all
   * the method requires is the handle, not
   *
   * ```js
   * await user.mfa({
   *   type: "phone_number",
   *   value: "+13337777777"
   * })
   * ```
   *
   * SlashID will send a challenge SMS to the phone number to verify it. If `mfa()` returns
   * without throwing any error the procedure is complete and the user object will have been
   * updated with a refreshed {@link token}. For future authentications the user will be able
   * to use the newly-attached phone number as an alternative to the e-mail address. Consider
   * though that this call only verified ownership of the phone number and added it to the user
   * handles, as such the {@link authentication} array stays unchanged.
   *
   * If you want to step-up the user authentication, or simply re-authenticate the user,
   * you can do so by also providing an authentication factor. For example let's assume
   * you want to send a magic link to one of the user's e-mail address:
   *
   * ```js
   * await user.mfa({
   *   type: "email_address",
   *   value: "..." // one previously-attached address, or a new one to be attached
   * }, {
   *   method: "email_link"
   * })
   * ```
   *
   * If the e-mail address provided above was not attached to the user, SlashID will verify it
   * and also perform the authentication. Once again, when `mfa()` returns the user will have
   * a refreshed {@link token}, but this time its {@link authentication} array will also include
   * `"email_link"` in addition to the method chosen for the first authentication with
   * {@link SlashID.id}.
   *
   * The only edge case to note is that for performing MFA with WebAuthn authentication
   * there's no need to specify an handle, as the ceremony happens on the current device:
   *
   * ```js
   * await user.mfa(undefined, {
   *   method: "webauthn"
   * })
   * ```
   */
  async mfa(a, o) {
    let l;
    if (!a)
      throw new Error("at least one of PersonHandle or Factor is required");
    a.type && a.value && (l = a), a.method && (o = a);
    const c = await this._slashid._id(this.decoded.oid, l, o, this._token);
    this.updateClient(c._token);
  }
  constructor(a, o) {
    super(a, o), this._slashid = o instanceof ac ? o : new ac(o), this._slashid.updateClient(this._token);
  }
}
function _$(n, a) {
  return a.get ? a.get.call(n) : a.value;
}
function R5(n, a, o) {
  if (!a.has(n))
    throw new TypeError("attempted to " + o + " private field on non-instance");
  return a.get(n);
}
function x$(n, a) {
  var o = R5(n, a, "get");
  return _$(n, o);
}
function k5(n, a) {
  if (a.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function E$(n, a, o) {
  k5(n, a), a.set(n, o);
}
function R$(n, a, o) {
  if (a.set)
    a.set.call(n, o);
  else {
    if (!a.writable)
      throw new TypeError("attempted to set read only private field");
    a.value = o;
  }
}
function k$(n, a, o) {
  var l = R5(n, a, "set");
  return R$(n, l, o), o;
}
function T$(n, a, o) {
  if (!a.has(n))
    throw new TypeError("attempted to get private field on non-instance");
  return o;
}
function $$(n, a) {
  k5(n, a), a.add(n);
}
var Eg = /* @__PURE__ */ new WeakMap(), f2 = /* @__PURE__ */ new WeakSet();
class D$ {
  subscribeToDomainEvents() {
    this.sdk.subscribe("idFlowSucceeded", (o) => this.trackAuthenticationSuccess(o)), this.sdk.subscribe("idFlowFailed", (o) => this.trackAuthenticationFailure(o)), this.sdk.subscribe("invalidPasswordSubmitted", (o) => this.trackAuthenticationFailure({
      ...o,
      errorText: "invalid_password"
    })), this.sdk.subscribe("incorrectPasswordSubmitted", (o) => this.trackAuthenticationFailure({
      ...o,
      errorText: "incorrect_password"
    })), this.sdk.subscribe("otpIncorrectCodeSubmitted", (o) => {
      var l;
      const c = (() => {
        var p, d;
        return ((p = o.factor) === null || p === void 0 ? void 0 : p.method) === "otp_via_email" ? "incorrect_otp_code_via_email" : ((d = o.factor) === null || d === void 0 ? void 0 : d.method) === "otp_via_sms" ? "incorrect_otp_code_via_sms" : "incorrect_otp_code";
      })();
      this.trackAuthenticationFailure({
        errorText: c,
        authenticationFactor: {
          method: (l = o.factor) === null || l === void 0 ? void 0 : l.method
        },
        challengeId: o.challengeId
      });
    }), this.sdk.subscribe("incorrectPasswordSubmitted", (o) => {
      this.trackAuthenticationFailure({
        errorText: "incorrect_password",
        authenticationFactor: {
          method: "password"
        },
        challengeId: o.challengeId,
        failureDetail: o.failureDetail
      });
    }), O5(this.sdk).subscribe("clientSideError", (o) => {
      this.trackAuthenticationFailure({
        ...o,
        errorText: "client_side_error"
      });
    });
  }
  getFlowID() {
    return Ju();
  }
  createEventMetadata({ location: a = window.location.href } = {}) {
    var o, l, c;
    return {
      organization_id: (c = (l = this.sdk.oid) !== null && l !== void 0 ? l : (o = this.user) === null || o === void 0 ? void 0 : o.oid) !== null && c !== void 0 ? c : "",
      analytics_correlation_id: x$(this, Eg),
      window_location: a,
      user_agent: navigator.userAgent
    };
  }
  sendEvent(a) {
    const o = new Blob([
      JSON.stringify(a)
    ], {
      type: "application/json"
    });
    navigator.sendBeacon(`${this.sdk.baseURL}/actions/sdk`, o);
  }
  trackPersonIdentified({ user: a }) {
    const o = {
      event_name: Vs.PersonIdentifiedV1,
      person_id: a.ID
    }, l = {
      ...this.createEventMetadata(),
      event_data: o
    };
    this.sendEvent(l);
  }
  trackPersonLoggedOut(a) {
    const o = this.sdk.getUser(a.token), l = {
      event_name: Vs.PersonLoggedOutV1,
      person_id: o.ID
    }, c = {
      ...this.createEventMetadata(),
      event_data: l
    };
    this.sendEvent(c);
  }
  trackAuthenticationSuccess(a) {
    var o;
    const l = this.sdk.getUser(a.token);
    this.identify(l);
    const c = {
      event_name: Vs.AuthenticationSucceededV1,
      person_id: l.ID,
      success_authn_method: (o = a.authenticationFactor) === null || o === void 0 ? void 0 : o.method,
      authenticated_methods: l.authentication,
      ...a.handle && {
        handle: a.handle
      }
    }, p = {
      ...this.createEventMetadata(),
      event_data: c
    };
    this.sendEvent(p);
  }
  trackAuthenticationFailure(a) {
    var o, l;
    const c = {
      event_name: Vs.AuthenticationFailedV1,
      failed_authn_method: (o = a.authenticationFactor) === null || o === void 0 ? void 0 : o.method,
      authenticated_methods: (l = this.user) === null || l === void 0 ? void 0 : l.authentication,
      failure_reason: a.errorText,
      ...a.handle && {
        handle: a.handle
      },
      ...a.challengeId && {
        challenge_id: a.challengeId
      },
      ...a.failureDetail && {
        failure_detail: a.failureDetail
      }
    }, p = {
      ...this.createEventMetadata({}),
      event_data: c
    };
    this.sendEvent(p);
  }
  trackSdkLoaded() {
    const a = {
      ...this.createEventMetadata(),
      event_data: {
        event_name: Vs.SlashIdsdkLoadedV1
      }
    };
    this.sendEvent(a);
  }
  /**
   * Identifies a user for the purpose of user activity tracking. Where possible
   * user identification is done automatically.
   *
   * @param user The user being identified.
   */
  identify(a) {
    this.user = a, this.trackPersonIdentified({
      user: a
    });
  }
  /**
   * Logs the user out from the point-of-view of the {@link Types.Analytics} class only,
   * this method does not have a side-effect which affects the logged in state of the user.
   *
   * After removing a stored token this method should be called to record the log out event.
   */
  logout() {
    const a = this.user;
    a && (this.trackPersonLoggedOut({
      token: a.token
    }), this.user = void 0);
  }
  /**
   * Tracks a virtual page view
   *
   * A virtual page view allows you to track a page view, even when a page is not physically
   * loaded in the browser. For example, when navigating using a client-side router in a
   * single page application, or navigating within a sub-section of a page (like a tabbed pane,
   * or navigation drawer) without changing the page itself.
   *
   * The exact meaning of a virtual page view will vary by implementation, it depends on your
   * routing paradigm and what you're trying to track. You will need to implement this event
   * in a way which makes sense for your product.
   *
   * @param options.url The URL of the page to track as the subject of the virtual page view.
   */
  trackVirtualPageView(a) {
    const { url: o = window.location.href } = a, l = {
      event_name: Vs.VirtualPageLoadedV1
    }, c = {
      ...this.createEventMetadata({
        location: o
      }),
      event_data: l
    };
    this.sendEvent(c);
  }
  constructor(a) {
    $$(this, f2), E$(this, Eg, {
      writable: !0,
      value: void 0
    }), this.sdk = a.sdk, this.eventsAPI = new MT(new Ws({
      ...Ks,
      basePath: this.sdk.baseURL
    })), this.user = a.user, this.subscribeToDomainEvents(), this.trackSdkLoaded(), k$(this, Eg, T$(this, f2, O$).call(this));
  }
}
function O$() {
  const n = "@slashid/EVENTS_CORRELATION_ID";
  try {
    const o = sessionStorage.getItem(n);
    if (o)
      return o;
  } catch {
  }
  const a = Ju();
  try {
    sessionStorage.setItem(n, a);
  } catch {
  }
  return a;
}
function L$(n) {
  var a;
  const o = (a = n.pattern_qualifiers) === null || a === void 0 ? void 0 : a.reduce((c, p) => p === "case_insensitive" ? c + "i" : c, "");
  return new RegExp(n.pattern, o);
}
function p2(n) {
  const a = n.options.validation_rules.regular_expressions;
  return a ? a.map((l) => {
    const c = L$(l);
    return {
      type: "regex",
      name: l.name,
      regexp: c,
      matchType: l.match_type
    };
  }) : [];
}
function h2({ password: n, rules: a }) {
  const o = [];
  return a.forEach((l) => {
    const c = l.regexp.test(n);
    (c && l.matchType === "must_not_match" || !c && l.matchType === "must_match") && o.push(l);
  }), o.length === 0 ? {
    valid: !0,
    failedRules: []
  } : {
    valid: !1,
    failedRules: o
  };
}
const v2 = "__SlashID_iframe", T5 = Symbol(), $5 = Symbol(), D5 = Symbol(), O5 = (n) => ({
  publish: (a, o) => n[T5](a, o),
  subscribe: (a, o) => n[$5](a, o),
  unsubscribe: (a, o) => n[D5](a, o)
});
class ac {
  /**
   * Get an instance of the Analytics class. Use the instance to track virtual page views.
   * @throws `Error` If analytics is not enabled or oid is not set.
   * @returns Analytics instance
   */
  getAnalytics() {
    if (!this.analytics)
      throw new Error("Analytics has to be enabled and oid has to be set to use this method");
    return this.analytics;
  }
  static async canGetPublicKeyCredentialsInIFrame() {
    const a = window;
    return !!a.chrome && (!!a.chrome.webstore || !!a.chrome.runtime);
  }
  /**
   * Publish an event to the SDK. Currently available events are listed in {@link Types.PublicWriteEvents}.
   * @param type
   * @param event
   */
  publish(a, o) {
    if (!C$(a))
      throw new Error(`Unsupported event name: ${a}`);
    this.emitter.emit(a, o);
  }
  /**
   * Variant of [publish] for private events
   */
  [T5](a, o) {
    if (!xg(a))
      throw new Error(`Unsupported event name: ${a}`);
    this.emitter.emit(a, o);
  }
  /**
   * Subscribe to the events published by the SDK. Currently available events are listed in {@link Types.PublicReadEvents}.
   * @param type
   * @param handler
   */
  subscribe(a, o) {
    if (!d2(a))
      throw new Error(`Unsupported event name: ${a}`);
    this.emitter.on(a, o);
  }
  /**
   * Variant of [subscribe] for private events
   */
  [$5](a, o) {
    if (!xg(a))
      throw new Error(`Unsupported event name: ${a}`);
    this.emitter.on(a, o);
  }
  /**
   * Unsubscribe from the SDK events. Currently available events are listed in {@link Types.PublicReadEvents}.
   * @param type
   * @param handler
   */
  unsubscribe(a, o) {
    if (!d2(a))
      throw new Error(`Unsupported event name: ${a}`);
    this.emitter.off(a, o);
  }
  /**
   * Variant of [subscribe] for private events
   */
  [D5](a, o) {
    if (!xg(a))
      throw new Error(`Unsupported event name: ${a}`);
    this.emitter.off(a, o);
  }
  /**
   * @ignore
   */
  updateClient(a) {
    this.authnClient = new jf(new Ws({
      ...Ks,
      basePath: this.baseURL,
      accessToken: a
    }));
  }
  /**
   * @ignore
   *
   * Removes reference to any old user token
   */
  resetClient() {
    this.updateClient(void 0);
  }
  /**
   * Get a Promise that resolves to an array of challenge objects.
   */
  async getChallengesFromURL() {
    const a = window.location.search, o = new URLSearchParams(a);
    let l;
    const c = o.get(GT), p = o.get(jT);
    if (c && p)
      throw new Error("found both 'challenges' and 'sidcp' URL query parameters");
    if (c) {
      const d = await this.authnClient.getChallengePackChallengePackId({
        challengePackId: c,
        slashIDSdkVersion: $n.raw
      }, {
        cache: "no-cache"
      });
      if (d.errors)
        throw d;
      l = d.result;
    } else if (p) {
      const d = Hs(p), v = new TextDecoder("utf-8").decode(d);
      l = JSON.parse(v);
    }
    return l;
  }
  /**
   * Process authentication challenges from the URL query parameters.
   * You can use this in conjunction with the Direct-ID API to allow your users to land on your
   * target page already authenticated.
   *
   * @returns The authenticated user from the `challenges` URL parameter, if present, `null` otherwise.
   */
  async getUserFromURL() {
    if (!this.urlChallengesUser) {
      let o;
      try {
        o = await this.getChallengesFromURL();
      } catch (l) {
        throw await this.processError(l, {}), l;
      }
      if (o) {
        var a;
        const l = i2(window.location.search);
        l && this.resolveSSOChallenge(l);
        let c;
        for (const p of o) {
          const d = p;
          try {
            c = await this.processChallenge(d, void 0);
          } catch (v) {
            throw await this.processError(v, {
              challengeId: d.id,
              authenticationFactor: {
                method: d.authentication_method
              }
            }), v;
          }
          this.updateClient(c);
        }
        if (this.urlChallengesUser = new y5(c, {
          baseURL: this.baseURL,
          sdkURL: this.sdkURL
        }), !((a = this.urlChallengesUser.authentications) === null || a === void 0) && a.length) {
          const p = this.urlChallengesUser.authentications[this.urlChallengesUser.authentications.length - 1];
          this.emitter.emit("idFlowSucceeded", {
            token: c,
            authenticationFactor: {
              method: p.method
            },
            handle: p.handle
          });
        }
      }
    }
    return this.urlChallengesUser && this.emitter.emit("userAuthenticatedFromURL", {
      token: this.urlChallengesUser.token
    }), this.urlChallengesUser;
  }
  /**
   * This method first checks for URL params associated with SSO. If they are present, it:
   *  - performs CSRF protection checks
   *  - resolves SSO challenge
   * @returns void
   */
  async resolveSSOChallenge({ ssoChallengeID: a, ssoCode: o, csrfToken: l }) {
    if (!(!a || !o || !l))
      try {
        const c = window.localStorage.getItem(Vg);
        if (!c)
          throw new Error("no CSRF token stored");
        if (l !== c)
          throw new Error("CSRF token mismatch");
        const p = window.localStorage.getItem(Hg);
        if (!p)
          throw new Error("no PKCE code verifier stored");
        await this.authnClient.postSsoResolve({
          slashIDOrgID: this.oid,
          postSsoResolveRequest: {
            challenge_id: a,
            code: o,
            pkce_code_verifier: p
          }
        });
      } catch (c) {
        this.processError(c, {});
      } finally {
        window.localStorage.removeItem(Vg), window.localStorage.removeItem(Hg);
      }
  }
  async processEvent(a) {
    if (e$(a.data)) {
      if (a.origin !== this.baseURL)
        return;
      const l = i2(a.data.urlParams);
      l && await this.resolveSSOChallenge(l);
      return;
    }
    let o = null;
    if (window.opener && a.source === window.opener && (o = window.opener), window.parent && a.source === window.parent && (o = window.parent), !!o) {
      if (t$(a.data)) {
        const l = a.data;
        try {
          o.postMessage(new e2(l.id), "*");
        } catch (c) {
          o.postMessage(new e2(l.id, c.toString()), "*");
        }
      }
      if (XT(a.data)) {
        const l = a.data;
        try {
          const c = await this.processWebAuthnCreateChallenge(l.challenge);
          o.postMessage(new t2(l.id, c), "*");
        } catch (c) {
          o.postMessage(new t2(l.id, null, c.toString()), "*");
        }
      }
      if (JT(a.data)) {
        const l = a.data;
        try {
          const c = await this.processWebAuthnGetChallenge(l.challenge);
          o.postMessage(new n2(l.id, c), "*");
        } catch (c) {
          o.postMessage(new n2(l.id, null, c.toString()), "*");
        }
      }
    }
  }
  async listenForEvents() {
    window.addEventListener("message", this.processEvent.bind(this));
  }
  setupIFrame() {
    const a = this.getSDKUrl().toString();
    if (zT(new URL(window.location.href), new URL(this.sdkURL)))
      return null;
    let o = document.getElementById(v2);
    return o && o.src !== a && (o.remove(), o = null), o || (o = document.createElement("iframe"), o.id = v2, o.allow = "publickey-credentials-get *", o.src = a, o.style.display = "none", document.body.appendChild(o)), o;
  }
  /**
   * List the available authentication methods for the chosen handle type. Currently available
   * authentication methods are listed in {@link Types.FactorMethod}. Before choosing a method to pass
   * to {@link id} you should consult the result of this method. In particular the availability of
   * the {@link Types.FactorMethod['Webauthn']} method depends on the current device configuration and
   * might not always be available.
   *
   * It's important to note that you can rely on some authentication methods to always be available:
   *
   *  - for {@link PersonHandleType['EmailAddress']}: {@link Types.FactorMethod['OtpViaEmail']} and
   *    {@link Types.FactorMethod['EmailLink']} are always available;
   *  - for {@link PersonHandleType['PhoneNumber']}: {@link Types.FactorMethod['OtpViaSms']} and
   *    {@link Types.FactorMethod['SmsLink']} are always available;
   *
   * On the contrary, the availability of {@link Types.FactorMethod['Webauthn']} depends exclusively on the
   * current device configuration.
   *
   * @remarks The availability of authetication methods can vary over time, you probably should not
   * cache or store the result and instead invoke the method any time you need to authenticate a user.
   *
   * @example
   *
   * SlashID supports a number of handle types, each in turn supporting a set of
   * authentication methods. Supposing you identify your users with e-mail addresses,
   * you should check the authentication methods available on the current device before
   * kicking off the authentication flow:
   *
   * ```js
   * const availableMethods = sid.getAvailableAuthenticationMethods("email_address")
   * // => availableMethods === ["webauthn", "email_link"]
   * ```
   *
   * At this point you can choose which method to use in {@link id}. You could decide based on
   * one or a combination of:
   *
   *  - Your static preference: e.g. require WebAuthn, prefer WebAuthn ({@link Types.FactorMethod['Webauthn']})
   *    if available, otherwise fallback to magic link via e-mail ({@link Types.FactorMethod['EmailLink']})
   *    ```
   *    const chosenMethod = availableMethods.includes("webauthn") ? "webauthn" : "email_link"
   *    ```
   *  - User's choice: you could present your users with a selection of the available methods;
   *
   * In general the SlashID SDK does not impose any restriction on how you decide to choose which
   * authentication method to use.
   *
   * @param handleType Available handle types are ``"email_address"``, ``"phone_number"``
   * @returns  An array of the available authentication methods on this device.
   */
  async getAvailableAuthenticationMethods(a) {
    const o = [
      Zn.Password
    ];
    switch (a) {
      case Fs.EmailAddress:
        o.push(Zn.EmailLink, Zn.OtpViaEmail);
        break;
      case Fs.PhoneNumber:
        o.push(Zn.SmsLink, Zn.OtpViaSms);
        break;
      default:
        throw new Error(`unhandled handle type: ${a}`);
    }
    return navigator && window.PublicKeyCredential && o.unshift(Zn.Webauthn), o;
  }
  /**
   * Preferred way of creating  a {@link Types.BaseUser} instance based on an existing token.
   *
   * @param token A user {@link Types.UserTokenText} value.
   * @returns User instance
   */
  getUser(a) {
    return new Zu(a, this);
  }
  /**
   * Identify a user. This method implements the SlashID authentication flow.
   * In particular the flow is:
   *
   *  - **passwordless**: all you need to specify to authenticate a user is their handle,
   *    be it an e-mail address or phone number, and how they wish to authenticate; please see
   *    the parameters documentation for more details;
   *
   *  - **unified**: it does not require you to differentiate between first registration and
   *    subsequent logins attempts. The SlashID service takes care of the distinction and will
   *    perform the necessary verification ceremonies on your behalf under the hood.
   *
   *  - **synchronous**: on successful return the user has verified their identity; even when
   *    the authentication spans multiple devices and is comprised of multiple steps (e.g
   *    clicking a magic link on the provided e-mail address and creating a new biometric
   *    credential on the current device), this method will not return until all steps have
   *    completed or errors have been encountered.
   *
   *
   * Before utilizing any authentication method you should check whether it is available with {@link getAvailableAuthenticationMethods}.
   *
   * The currently available options for the `authenticationFactor.method` field are:
   *
   *  - **``"webauthn"``**: Authenticate the user via WebAuthn on this device. If available this
   *    usually entails built-in biometric authentication or the use of an external FIDO key, with a
   *    preference for the former. Please also see the [WebAuthn scope](#webauthn_scope) and
   *    [WebAuthn attachment](#webauthn_attachment) sections below for details.
   *
   *  - **``"email_link"``**: Deliver a magic link via e-mail.
   *
   *  - **``"otp_via_email"``**: Deliver an OTP security code via e-mail. This authentication method requires you to {@link publish} an
   *    `otpCodeSubmitted` event to the SDK. The event payload must be a string containing the OTP
   *    value, which your user will receive via e-mail.
   *
   *  - **``"sms_link"``**: Deliver a magic link via SMS.
   *
   *  - **``"otp_via_sms"``**: Deliver an OTP security code via SMS. This authentication method requires you to {@link publish} an
   *    `otpCodeSubmitted` event to the SDK. The event payload must be a string containing the OTP
   *    value, which your user will receive via SMS.
   *
   *  - **``oidc``**: Authenticate the user using OIDC through a preconfigured Identity Provider.
   *
   * <a name="webauthn_scope"></a>
   * <b>WebAuthn scope</b>
   *
   * In case you have chosen the WebAuthn method, you have the option to specify a `scope`
   * in the `options` field. This field allows you to control the breadth of your users' WebAuthn credentials.
   * The field is optional, but if specified it can either be your domain or any "registrable domain suffix" of it.
   * E.g. if your domain is `shop.domain.com` you have two options to choose from:
   *
   *  - `shop.domain.com`: scope your users to the current domain. Credentials created here will not be shared with sibling domains such as `services.domain.com`;
   *  - `domain.com`: scope your users to the least specific domain. Credentials created here will be allowed to access all subdomains such as `services.domain.com`;
   *
   * Please consult the HTML spec for the formal definition of [registrable domain suffix](https://html.spec.whatwg.org/multipage/origin.html#is-a-registrable-domain-suffix-of-or-is-equal-to)
   * if you need detailed information. When not specified the `scope` option defaults to the current origin, `shop.domain.com`
   * in the example above.
   *
   * <a name="webauthn_attachment"></a>
   * <b>WebAuthn attachment</b>
   *
   * Users can perform WebAuthn either with built-in authenticators (FaceID, TouchID, fingerprint readers, etc.)
   * or external security keys, and in case you have a preference you can control which authenticator type to use
   * by specifying an `attachment` option field in the `options` field.
   * The field is optional and has 3 allowed values from the {@link WebAuthnAuthenticatorAttachment} enum:
   *
   *  - `"platform"`: mandate use of built-in authenticators;
   *  - `"cross-platform"`: mandate use of external security keys;
   *  - `"any"`: the default value if unspecified, allows both types;
   *
   * If left unspecified (or explicitly set to `"any"`) the user will be prompted with a system dialog to choose
   * which type of authenticator they prefer. By providing one of the other options instead (e.g. `"platform"`)
   * you explicitly limit the authenticator types the user can choose from. On most devices this results in the
   * most seamless WebAuthn user experience possible, as the system dialog will not be shown and the user will be
   * prompted to authenticate directly.
   *
   * @param oid Your organization ID.
   * @param handle How the user wishes to identify, e.g. their e-mail address.
   * @param authenticationFactor How to verify the user's identity matches the handle.
   *
   * @throws `slashid.errors.InvalidAuthenticationMethodError` if the chosen method is
   * incompatible with the given handle or is not available on the current device.
   *
   * @fires {@link Types.IdFlowSucceededEvent} when the flow resolves successfully
   *
   * @returns The authenticated user.
   *
   * @example
   *
   * Authenticating a user is as simple as:
   *
   * ```js
   * const user = await slashID.id({
   *   type: "phone_number",
   *   value: "+13337777777",
   * }, {
   *   method: "webauthn"
   * })
   * ```
   *
   * At this point the user has been authenticated; either registered or logged in.
   *
   * You can use it in a header in your HTTP requests:
   *
   * ```js
   * const response = await fetch(url, {
   *   ...
   *   headers: {
   *     'Authorization': `Bearer ${user.token}`,
   *      ...
   *   }
   * });
   * ```
   *
   * You can collect and associate user attributes:
   *
   * ```js
   * const userDetails = { name: "...", streetAddress: "..." }
   * await user.set(userDetails)
   * ```
   *
   * You can perform multi-factor authentication before proceeding with your application logic:
   *
   * ```js
   * await user.mfa({
   *   type: "email_address",
   *   value: "my.email@example.com"
   * }, {
   *   method: "email_link"
   * })
   * ```
   */
  async id(a, o, l) {
    return this._id(a, o, l);
  }
  /**
   * @internal
   */
  async _id(a, o, l, c) {
    this.resetClient(), c && this.updateClient(c);
    try {
      if (l)
        switch (l.method) {
          case Zn.Webauthn.toString():
            {
              if (!(navigator && window.PublicKeyCredential))
                throw new zo(Zn.Webauthn, "The WebAuthn API is not available in the current environment");
              let b = l.options;
              b || (b = {}), b.scope || (b.scope = window.location.hostname);
              const E = await this.credentialStorage.get(b.scope);
              if (E && (b.available_credential_ids = E), b.attachment || (b.attachment = Yw.Any), b.user_verification || (b.user_verification = Bk.Preferred), b.resident_key || (b.resident_key = Hk.Preferred), b.attestation || (b.attestation = Vk.None), b.attachment === Yw.Platform && !await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())
                throw new zo(Zn.Webauthn, `This device has no authenticator available with attachment '${b.attachment}'`);
              l.options = b;
            }
            break;
          case Zn.EmailLink.toString():
          case Zn.OtpViaEmail.toString():
            if (o && o.type !== Fs.EmailAddress)
              throw new zo(l.method, `A handle of type '${Fs.EmailAddress}' is required, got '${o.type}' instead`);
            break;
          case Zn.SmsLink.toString():
          case Zn.OtpViaSms.toString():
            if (o && o.type !== Fs.PhoneNumber)
              throw new zo(l.method, `A handle of type '${Fs.PhoneNumber}' is required, got '${o.type}' instead`);
            l.options = new o2(l.options);
            break;
          case Zn.Oidc.toString():
            {
              if (o)
                throw new zo(l.method, "OIDC should not be used with handles");
              l = await s$(l);
              const b = () => {
                var E, _;
                const R = l;
                !(R == null || (E = R.extras) === null || E === void 0) && E.popup && (R == null || (_ = R.extras) === null || _ === void 0 || _.popup.close()), this.emitter.off("oauthFlowFailed", b);
              };
              this.emitter.on("oauthFlowFailed", b);
            }
            break;
          case Zn.Saml.toString():
            {
              if (o)
                throw new zo(l.method, "SAML should not be used with handles");
              l = await l$(l);
              const b = () => {
                var E, _;
                const R = l;
                !(R == null || (E = R.extras) === null || E === void 0) && E.popup && (R == null || (_ = R.extras) === null || _ === void 0 || _.popup.close()), this.emitter.off("popupFailed", b);
              };
              this.emitter.on("popupFailed", b);
            }
            break;
          default:
            break;
        }
      const p = {
        method: l == null ? void 0 : l.method,
        options: l == null ? void 0 : l.options
      };
      this.emitter.emit("idFlowStarted", {
        authenticationFactor: l
      });
      const d = await this.authnClient.postId({
        slashIDOrgID: a,
        slashIDSdkVersion: $n.raw,
        iDRequest: {
          handle: o,
          factor: p
        }
      }, {
        cache: "no-cache"
      });
      if (d.errors)
        throw d;
      const v = d.result;
      if (!v)
        throw new Error("no challenges in ID response");
      let w = c;
      for (const b of v)
        w = await this.processChallenge(b, l), w && this.updateClient(w);
      if (o)
        try {
          this.identifiersStorage.add(o);
        } catch (b) {
          console.warn(b);
        }
      return this.emitter.emit("idFlowSucceeded", {
        token: `${w}`,
        authenticationFactor: l,
        handle: o
      }), this.getUser(w);
    } catch (p) {
      throw await this.processError(p, {
        authenticationFactor: l,
        handle: o,
        previousToken: c
      }), Gi(p) && iy(p) ? await nc.fromResponseError(p) : p;
    } finally {
      this.resetClient();
    }
  }
  /**
   * List the handles previously used to authenticate successfully.
   *
   * @remarks Use of this method is in no way required to authenticate with SlashID. The SDK
   * provides it to allow you to more easily implement loging suggestion drop-down lists
   * and similar UX niceties, by e.g. tying it to a `<datalist>`:
   *
   * ```js
   * const handles = await sid.getAvailableIdentifiers()
   * const options = handles.map((handle) => {
   *   const option = document.createElement("option")
   *   option.value = handle.value
   *   return option
   * })
   * const datalist = document.getElementById("available_identifiers")
   * datalist.replaceChildren(...options)
   *
   * ...
   *
   * <input ... list="available_identifiers" />
   * ```
   *
   * Depending on browser settings, it may not be possible to discover these
   * identifiers.
   *
   * @returns An array of identifiers of previously-authenticated users.
   */
  async getAvailableIdentifiers() {
    try {
      return this.identifiersStorage.getAll();
    } catch (a) {
      return console.warn(a), [];
    }
  }
  /**
   * Use a verified handle and a factor to start the account recovery flow.
   * The user will receive instructions on how to proceed using a delivery mechanism based on the given handle.
   * After this method resolves, the user will be able to authenticate using the same handle and factor.
   */
  async recover({ handle: a, factor: o }) {
    if (!this.oid)
      throw new Error("oid is required - please initialize the SDK with an organization ID");
    this.emitter.emit("recoveryFlowStarted", {
      handle: a,
      authenticationFactor: o
    });
    try {
      const { result: l } = await this.authnClient.postRecover({
        recoverRequest: {
          handle: a,
          factor: o
        },
        slashIDSdkVersion: $n.raw,
        slashIDOrgID: this.oid
      });
      if (!l)
        throw new Error("no result in recover response");
      let c;
      for (const p of l)
        c = await this.processChallenge(p, o), c && this.updateClient(c);
      if (a)
        try {
          this.identifiersStorage.add(a);
        } catch (p) {
          console.warn(p);
        }
      this.emitter.emit("recoveryFlowSucceeded", {
        authenticationFactor: o,
        handle: a
      });
    } catch (l) {
      const c = await oy(l), p = {
        errorText: "recovery_failed",
        authenticationFactor: o,
        handle: a,
        failureDetail: c
      };
      throw this.emitter.emit("recoveryFlowFailed", p), l;
    }
  }
  async processChallenge(a, o) {
    let l;
    switch (a.type) {
      case lr.Proxy:
        return this.processProxyChallenge(a);
      case lr.Nonce:
        l = await this.processNonceChallenge(a);
        break;
      case lr.Otp: {
        const d = new o2(o == null ? void 0 : o.options);
        l = await this.processOTPChallenge(a, d);
        break;
      }
      case lr.WebauthnGet:
        l = await this.processWebAuthnGetChallenge(a);
        break;
      case lr.WebauthnCreate:
        l = await this.processWebAuthnCreateChallenge(a);
        break;
      case lr.Oidc:
        return this.processOIDCChallenge(a, o);
      case lr.Saml:
        return this.processSAMLChallenge(a, o);
      case lr.PasswordSet:
        l = await this.processPasswordSetChallenge(a);
        break;
      case lr.PasswordVerify:
        l = await this.processPasswordVerifyChallenge(a);
        break;
      case lr.PasswordReset:
        l = await this.processPasswordResetChallenge(a);
        break;
      default:
        throw new Error("unhandled challenge type: " + a.toString());
    }
    let c;
    try {
      c = await this.authnClient.postAttestationV2({
        // @ts-expect-error challenge_type is typed as possible undefined
        attestation: l,
        slashIDSdkVersion: $n.raw
      }, {
        cache: "no-cache"
      });
    } catch (d) {
      if (Gi(d))
        c = await d.response.json();
      else
        throw d;
    }
    if (tc(c) && c.errors.length) {
      if (c.errors[0].httpcode === 400 && a.type === lr.PasswordSet)
        return this.emitter.emit("invalidPasswordSubmitted", {
          failedRules: [],
          authenticationFactor: o,
          challengeId: a.id,
          failureDetail: c.errors[0].message
        }), this.processChallenge(a, o);
      if (c.errors[0].httpcode === 401 && a.type === lr.PasswordVerify)
        return this.emitter.emit("incorrectPasswordSubmitted", {
          authenticationFactor: o,
          challengeId: a.id,
          failureDetail: c.errors[0].message
        }), this.processChallenge(a, o);
      if (c.errors[0].httpcode === 401 && a.type === lr.Otp)
        return this.emitter.emit("otpIncorrectCodeSubmitted", {
          factor: o,
          challengeId: a.id
        }), this.processChallenge(a, o);
      throw c;
    }
    const p = c.result;
    if (!p)
      throw new Error("no user token in attestation response");
    if (a.type === lr.WebauthnCreate) {
      const d = a.options;
      this.credentialStorage.add(d.rp.id, l.data.rawId);
    }
    return p;
  }
  async processProxyChallenge(a) {
    let o;
    for (; !o; ) {
      await ec(1e3);
      const l = await this.authnClient.getChallengeChallengeIdV2({
        challengeId: a.options.challenge_id,
        slashIDSdkVersion: $n.raw
      }, {
        cache: "no-cache"
      });
      if (l.errors && (l.errors.length !== 1 || l.errors[0].httpcode !== 202))
        throw l;
      o = l.result;
    }
    return o;
  }
  async processNonceChallenge(a) {
    var o;
    return {
      challenge_id: a.id,
      challenge_type: a.type,
      data: {
        challenge: (o = a.options) === null || o === void 0 ? void 0 : o.challenge
      }
    };
  }
  async processOTPChallenge(a, o) {
    this.emitter.emit("otpSmsSent"), this.emitter.emit("otpCodeSent");
    const l = new Promise((d) => {
      const v = (w) => {
        this.emitter.off("otpCodeSubmitted", v), d(w);
      };
      this.emitter.on("otpCodeSubmitted", v);
    });
    typeof o.getOTP == "function" && o.getOTP().then((d) => this.emitter.emit("otpCodeSubmitted", d));
    const c = await l;
    if (!c)
      throw new Error("no OTP code provided");
    return {
      challenge_id: a.id,
      challenge_type: a.type,
      data: {
        otp: c
      }
    };
  }
  async processWebAuthnGetChallenge(a) {
    const o = await l2(), l = a.options;
    if (this.isLocalScope(l.rpId)) {
      const c = {
        challenge: Hs(l.challenge),
        extensions: l.extensions,
        rpId: l.rpId,
        timeout: l.timeout,
        userVerification: l.userVerification
      }, p = l.allowCredentials;
      if (p) {
        c.allowCredentials = new Array(p.length);
        for (let _ = 0; _ < p.length; _++) {
          const R = p[_];
          c.allowCredentials[_] = {
            id: Hs(R.id),
            type: R.type,
            transports: R.transports
          };
        }
      }
      const d = await navigator.credentials.get({
        publicKey: c
      });
      if (!d)
        throw new Error("could not create assert credential");
      const v = d.response, w = ii(new Uint8Array(d.rawId)), b = {
        id: d.id,
        rawId: w,
        type: d.type,
        clientExtensionResults: d.getClientExtensionResults(),
        response: {
          clientDataJSON: ii(new Uint8Array(v.clientDataJSON)),
          authenticatorData: ii(new Uint8Array(v.authenticatorData)),
          signature: ii(new Uint8Array(v.signature)),
          userHandle: v.userHandle ? ii(new Uint8Array(v.userHandle)) : null
        }
      }, E = {
        challenge_id: a.id,
        challenge_type: a.type,
        data: b
      };
      return this.emitter.emit("webAuthnChallengeProcessed", {
        credentialId: w
      }), E;
    } else {
      const c = this.getSDKUrl();
      let p;
      if (await ac.canGetPublicKeyCredentialsInIFrame()) {
        if (p = this.iframe.contentWindow, !p)
          throw new Error("cannot get global id iframe");
      } else if (o || await ec(200), p = window.open(c.toString()), !p)
        throw new Error("cannot open global id window");
      return new Promise((v, w) => {
        const b = new KT({
          baseURL: this.baseURL,
          sdkURL: this.sdkURL
        }, a), E = (_) => {
          const R = _.data;
          R.id === b.id && (p.close(), window.removeEventListener("message", E), R.error ? w(R.error) : v(R.attestation));
        };
        window.addEventListener("message", E), Yg(p).then((_) => {
          _.postMessage(b, c.origin);
        });
      });
    }
  }
  async processWebAuthnCreateChallenge(a) {
    const o = await l2(), l = a.options;
    if (this.isLocalScope(l.rp.id)) {
      const c = {
        challenge: Hs(l.challenge),
        rp: l.rp,
        user: {
          id: Hs(l.user.id),
          name: l.user.name,
          displayName: l.user.displayName
        },
        pubKeyCredParams: l.pubKeyCredParams,
        authenticatorSelection: l.authenticatorSelection,
        timeout: l.timeout,
        extensions: l.extensions,
        attestation: l.attestation
      }, p = l.excludeCredentials;
      if (p) {
        c.excludeCredentials = new Array(p.length);
        for (let _ = 0; _ < p.length; _++) {
          const R = p[_];
          c.excludeCredentials[_] = {
            id: Hs(R.id),
            type: R.type,
            transports: R.transports
          };
        }
      }
      const d = await navigator.credentials.create({
        publicKey: c
      });
      if (!d)
        throw new Error("cannot create credential");
      const v = d.response, w = ii(new Uint8Array(d.rawId)), b = {
        id: d.id,
        rawId: w,
        type: d.type,
        clientExtensionResults: d.getClientExtensionResults(),
        response: {
          attestationObject: ii(new Uint8Array(v.attestationObject)),
          clientDataJSON: ii(new Uint8Array(v.clientDataJSON))
        }
      }, E = {
        challenge_id: a.id,
        challenge_type: a.type,
        data: b
      };
      return this.emitter.emit("webAuthnChallengeProcessed", {
        credentialId: w
      }), E;
    } else
      return o || await ec(200), new Promise((p, d) => {
        const v = this.getSDKUrl(), w = window.open(v.toString());
        if (!w) {
          d(new Error("cannot open global id window"));
          return;
        }
        const b = new WT({
          baseURL: this.baseURL,
          sdkURL: this.sdkURL
        }, a), E = (_) => {
          const R = _.data;
          R.id === b.id && (w.close(), window.removeEventListener("message", E), R.error ? d(R.error) : p(R.attestation));
        };
        window.addEventListener("message", E), Yg(w).then((_) => {
          _.postMessage(b, v.origin);
        });
      });
  }
  async processOIDCChallenge(a, o) {
    if (o.options.ux_mode === Qu.Popup) {
      var l;
      const p = o.extras.setPopupUrl(a.options.auth_code_url);
      if (!(!(a == null || (l = a.options) === null || l === void 0) && l.auth_code_url)) {
        var c;
        throw this.emitter.emit("oauthFlowFailed", {
          ...o.options,
          reason: u2.BadOAuthURL
        }), new Error(`Bad OAuth URL - got ${a == null || (c = a.options) === null || c === void 0 ? void 0 : c.auth_code_url}`);
      }
      if (!p)
        throw this.emitter.emit("oauthFlowFailed", {
          ...o.options,
          reason: u2.PopupBlocked
        }), new Error("OIDC flow unsuccesful!");
    } else if (o.options.ux_mode === Qu.Redirect)
      window.location.assign(a.options.auth_code_url);
    else
      throw new Error(`Unsupported OAuth ux_mode - got ${o.options.ux_mode}`);
    return this.emitter.emit("oauthFlowStarted", o.options), "";
  }
  async processSAMLChallenge(a, o) {
    if (o.options.ux_mode === Xu.Popup) {
      var l;
      const p = o.extras.setPopupUrl(a.options.start_authentication_url);
      if (!(!(a == null || (l = a.options) === null || l === void 0) && l.start_authentication_url)) {
        var c;
        throw this.emitter.emit("popupFailed", {
          reason: c2.BadAuthURL
        }), new Error(`Bad authentication URL - got ${a == null || (c = a.options) === null || c === void 0 ? void 0 : c.start_authentication_url}`);
      }
      if (!p)
        throw this.emitter.emit("popupFailed", {
          reason: c2.PopupBlocked
        }), new Error("SAML flow unsuccesful!");
    } else if (o.options.ux_mode === Xu.Redirect)
      window.location.assign(a.options.start_authentication_url);
    else
      throw new Error(`Unsupported SAML ux_mode - got ${o.options.ux_mode}`);
    return "";
  }
  async processPasswordSetChallenge(a) {
    this.emitter.emit("passwordSetReady");
    const l = await new Promise((d) => {
      const v = (w) => {
        this.emitter.off("passwordSubmitted", v), d(w);
      };
      this.emitter.on("passwordSubmitted", v);
    }), c = h2({
      password: l,
      rules: p2(a)
    });
    return c.valid ? {
      challenge_id: a.id,
      challenge_type: a.type,
      data: {
        password: l
      }
    } : (this.emitter.emit("invalidPasswordSubmitted", {
      failedRules: c.failedRules,
      challengeId: a.id,
      failureDetail: `invalid_password: ${c.failedRules.map((d) => d.name).join(",")}`
    }), await this.processPasswordSetChallenge(a));
  }
  processPasswordVerifyChallenge(a) {
    return this.emitter.emit("passwordVerifyReady"), new Promise((l) => {
      const c = (p) => {
        this.emitter.off("passwordSubmitted", c), l(p);
      };
      this.emitter.on("passwordSubmitted", c);
    }).then((l) => {
      if (!l)
        throw new Error("No password provided");
      return {
        challenge_id: a.id,
        challenge_type: a.type,
        data: {
          password: l
        }
      };
    });
  }
  /**
   * TODO complete copy paste of password set challenge
   * TODO write docs
   */
  async processPasswordResetChallenge(a) {
    this.emitter.emit("passwordResetReady");
    const l = await new Promise((d) => {
      const v = (w) => {
        this.emitter.off("passwordSubmitted", v), d(w);
      };
      this.emitter.on("passwordSubmitted", v);
    }), c = h2({
      password: l,
      rules: p2(a)
    });
    return c.valid ? {
      challenge_id: a.id,
      challenge_type: a.type,
      data: {
        password: l
      }
    } : (this.emitter.emit("invalidPasswordSubmitted", {
      failedRules: c.failedRules,
      challengeId: a.id,
      failureDetail: `invalid_password: ${c.failedRules.map((d) => d.name).join(",")}`
    }), await this.processPasswordSetChallenge(a));
  }
  getSDKUrl() {
    const a = new URL(this.sdkURL);
    return a.searchParams.append("v", $n.raw), a;
  }
  isLocalScope(a) {
    return window.location.hostname.endsWith(a);
  }
  /**
   * Examine the error object and publish the proper event as a reaction to it.
   */
  async processError(a, { authenticationFactor: o, handle: l, previousToken: c, challengeId: p }) {
    const d = await x5(a, {
      authenticationFactor: o,
      handle: l,
      previousToken: c,
      challengeId: p
    });
    m$(d) ? O5(this).publish("clientSideError", d) : this.emitter.emit("idFlowFailed", d);
  }
  /**
   * @example
   *
   * For production you can simply create your _SlashID_ instance with:
   *
   * ```js
   * import * as slashid from "slashid"
   * const sid = new slashid.SlashID()
   * ```
   *
   * If you want to experiment and connect to the sandbox environment instead:
   *
   * ```js
   * const sid = new slashid.SlashID({
   *   environment: "sandbox"
   * })
   * ```
   *
   * @param options Your SlashID connection options.
   * @throws `TypeError` If the given `options`, if defined, fail validation
   */
  constructor(a) {
    a && a$(a);
    const { baseURL: o, sdkURL: l, oid: c, analyticsEnabled: p = !0 } = m5(a ?? {});
    this.baseURL = o, this.sdkURL = l, this.oid = c, this.authnClient = new jf(new Ws({
      ...Ks,
      basePath: this.baseURL
    })), this.iframe = this.setupIFrame();
    const d = new S$(this.iframe, this.getSDKUrl().origin);
    this.identifiersStorage = new xa(d), this.credentialStorage = new rc(d), this.urlChallengesUser = null, this.emitter = w$(), this.analytics = p ? new D$({
      sdk: this
    }) : void 0, this.listenForEvents();
  }
}
({
  ...Un
});
const m2 = {
  ...Un
};
var g2 = "sid-theme-root", A$ = "_1fuhtfd2", M$ = "_1fuhtfd0", q$ = "_1fuhtfd1", L5 = { color: { background: "var(--sid-color-background)", mute: "var(--sid-color-mute)", panel: "var(--sid-color-panel)", foreground: "var(--sid-color-foreground)", contrast: "var(--sid-color-contrast)", secondary: "var(--sid-color-secondary)", tertiary: "var(--sid-color-tertiary)", placeholder: "var(--sid-color-placeholder)", smooth: "var(--sid-color-smooth)", subtle: "var(--sid-color-subtle)", soft: "var(--sid-color-soft)", offset: "var(--sid-color-offset)", primary: "var(--sid-color-primary)", primaryHover: "var(--sid-color-primary-hover)", transparent: "var(--sid-color-transparent)", error: "var(--sid-color-error)", auxiliary: "var(--sid-color-auxiliary)", success: "var(--sid-color-success)", foregroundSuccess: "var(--sid-color-foreground-success)", backgroundSuccess: "var(--sid-color-background-success)", failure: "var(--sid-color-failure)", foregroundFailure: "var(--sid-color-foreground-failure)", backgroundFailure: "var(--sid-color-background-failure)" }, font: { fontFamily: "var(--sid-font-family)" }, border: { radius: "var(--sid-button-border-radius)", width: { panel: "var(--sid-border-width-panel)" } } }, z$ = "_1fuhtfd3";
function Wg() {
  return typeof window < "u" && globalThis === window;
}
function A5({ theme: n, className: a }) {
  return lt(
    g2,
    `${g2}__${n}`,
    z$,
    {
      [M$]: n === "dark",
      [A$]: n === "auto",
      [q$]: n === "light"
    },
    a
  );
}
function I$({ theme: n, className: a }) {
  const o = A5({ theme: n, className: a });
  document.body.classList.add(...o.split(" "));
}
const M5 = ({ children: n }) => /* @__PURE__ */ C.jsx("div", { className: A5({ theme: "light" }), children: n }), N$ = ({ children: n, theme: a = "light", className: o }) => {
  const [l, c] = dt.useState(!1);
  return y.useLayoutEffect(() => {
    l || c(!0);
  }, [o, l, a]), y.useLayoutEffect(() => {
    l && I$({ theme: a, className: o });
  }, [o, l, a]), l ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n }) : /* @__PURE__ */ C.jsx(M5, { children: n });
};
function P$({ children: n, theme: a = "light", className: o }) {
  return Wg() ? /* @__PURE__ */ C.jsx(N$, { theme: a, className: o, children: n }) : /* @__PURE__ */ C.jsx(M5, { children: n });
}
var U$ = { default: "_1v32gdc2 _1v32gdc1", short: "_1v32gdc3 _1v32gdc1" };
const q5 = ({ className: n, variant: a = "default" }) => /* @__PURE__ */ C.jsx("div", { className: lt(U$[a], n) });
var F$ = { primary: "_154fc2o2 _154fc2o0", secondary: "_154fc2o3 _154fc2o0", secondaryMd: "_154fc2o4 _154fc2o0 _154fc2o1", neutral: "_154fc2o5 _154fc2o0", neutralMd: "_154fc2o6 _154fc2o0 _154fc2o1", ghost: "_154fc2o7 _154fc2o0", ghostMd: "_154fc2o8 _154fc2o0 _154fc2o1" }, V$ = "_154fc2o9", H$ = "_154fc2oa", B$ = { primary: "_154fc2ob", secondary: "_154fc2oc", secondaryMd: "_154fc2od", neutral: "_154fc2oe", neutralMd: "_154fc2of", ghost: "_154fc2og", ghostMd: "_154fc2oh" };
const Xs = y.forwardRef(
  ({
    children: n,
    onClick: a,
    className: o,
    type: l = "button",
    variant: c = "primary",
    testId: p,
    icon: d,
    disabled: v,
    loading: w = !1
  }, b) => /* @__PURE__ */ C.jsx(
    "button",
    {
      ref: b,
      "data-testid": p,
      type: l,
      disabled: v,
      className: lt(
        "sid-button",
        `sid-button--${c}`,
        F$[c],
        { [V$]: v },
        o
      ),
      onClick: a,
      children: w ? /* @__PURE__ */ C.jsx(q5, { variant: "short", className: B$[c] }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
        d ? /* @__PURE__ */ C.jsx("i", { className: H$, children: d }) : null,
        n
      ] })
    }
  )
);
Xs.displayName = "Button";
const j$ = ({ className: n }) => /* @__PURE__ */ C.jsx(
  "svg",
  {
    className: lt(n),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ C.jsx(
      "path",
      {
        d: "M10.25 3.75L5.75 8L10.25 12.25",
        stroke: L5.color.tertiary,
        strokeOpacity: "0.5",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var G$ = { base: "axg5it0", back: "axg5it2 axg5it0" };
const np = ({
  children: n,
  onClick: a,
  className: o,
  type: l = "button",
  variant: c = "base",
  testId: p
}) => /* @__PURE__ */ C.jsxs(
  "button",
  {
    "data-testid": p,
    type: l,
    className: lt("sid-link-button", G$[c], o),
    onClick: a,
    children: [
      c === "back" ? /* @__PURE__ */ C.jsx(j$, {}) : null,
      n
    ]
  }
);
var Y$ = "_1c8zcycb", W$ = "_1c8zcyc2", z5 = "_1c8zcyc4", sy = "_1c8zcyc3", K$ = "_1c8zcyc0", Z$ = { text: "_1c8zcyc6 _1c8zcyc5", email: "_1c8zcyc7 _1c8zcyc5", password: "_1c8zcyc8 _1c8zcyc5", tel: "_1c8zcyc9 _1c8zcyc5" }, Q$ = "_1c8zcyca", X$ = "_1c8zcycc", J$ = "_1c8zcyc1";
const ly = ({
  id: n,
  name: a,
  label: o,
  placeholder: l = "",
  autoComplete: c = "",
  value: p,
  onChange: d,
  type: v = "text"
}) => {
  const w = y.useCallback(
    (b) => {
      d(b);
    },
    [d]
  );
  return /* @__PURE__ */ C.jsxs("div", { className: Z$[v], children: [
    /* @__PURE__ */ C.jsx("label", { htmlFor: n, className: Q$, children: o }),
    /* @__PURE__ */ C.jsx(
      "input",
      {
        type: v,
        id: n,
        name: a,
        className: K$,
        placeholder: l,
        value: p,
        onChange: w,
        autoComplete: c
      }
    )
  ] });
}, eD = ({
  name: n,
  id: a,
  label: o,
  placeholder: l = "",
  className: c = "",
  type: p = "text",
  value: d,
  error: v,
  onChange: w
}) => /* @__PURE__ */ C.jsx(
  "div",
  {
    className: lt(
      "sid-input",
      `sid-input--${p}`,
      sy,
      v && z5,
      c
    ),
    children: /* @__PURE__ */ C.jsx(
      ly,
      {
        id: a,
        name: n,
        label: o,
        placeholder: l,
        className: c,
        type: p,
        value: d,
        onChange: w
      }
    )
  }
), Nr = `
@media (prefers-color-scheme: dark) {
  .sid-theme-root__auto path { fill: white; }
}

.sid-theme-root__dark path { fill: white; }
`, tD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsxs("g", { id: "microsoft-icon 1", clipPath: "url(#clip0_2115_8900)", children: [
        /* @__PURE__ */ C.jsx("path", { id: "Vector", d: "M0 0H7.6031V7.6031H0V0Z", fill: "#F25022" }),
        /* @__PURE__ */ C.jsx("path", { id: "Vector_2", d: "M8.39691 0H16V7.6031H8.39691V0Z", fill: "#7FBA00" }),
        /* @__PURE__ */ C.jsx("path", { id: "Vector_3", d: "M0 8.3969H7.6031V16H0V8.3969Z", fill: "#00A4EF" }),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            id: "Vector_4",
            d: "M8.39691 8.3969H16V16H8.39691V8.3969Z",
            fill: "#FFB900"
          }
        )
      ] }),
      /* @__PURE__ */ C.jsx("defs", { children: /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_2115_8900", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), nD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsx("g", { clipPath: "url(#clip0_505_1607)", children: /* @__PURE__ */ C.jsxs("g", { clipPath: "url(#clip1_505_1607)", children: [
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M0.575299 0.87666C0.501037 0.8757 0.427465 0.891009 0.359751 0.921512C0.292036 0.952016 0.231821 0.996974 0.183333 1.05323C0.134846 1.10949 0.099262 1.17567 0.0790809 1.24715C0.0588998 1.31862 0.0546107 1.39365 0.066515 1.46695L2.2264 14.5788C2.2533 14.7392 2.33588 14.8851 2.45964 14.9907C2.58339 15.0963 2.74041 15.1549 2.9031 15.1563H13.2649C13.3868 15.1578 13.5053 15.1155 13.5986 15.0371C13.692 14.9586 13.7541 14.8493 13.7736 14.7289L15.9335 1.4695C15.9454 1.39619 15.9411 1.32118 15.9209 1.24971C15.9007 1.17825 15.8651 1.11208 15.8166 1.05583C15.7681 0.999591 15.7079 0.954646 15.6402 0.924154C15.5725 0.893661 15.4989 0.878361 15.4247 0.879327L0.575299 0.87666ZM9.67013 10.3531H6.36292L5.46743 5.67469H10.4715L9.67013 10.3531Z",
            fill: "#2684FF"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M15.2335 5.66811H10.4623L9.66148 10.3428H6.35693L2.45502 14.9743C2.57869 15.0812 2.73636 15.1407 2.89985 15.142H13.2559C13.3778 15.1436 13.4961 15.1013 13.5894 15.023C13.6828 14.9446 13.7448 14.8353 13.7643 14.715L15.2335 5.66811Z",
            fill: "url(#paint0_linear_505_1607)"
          }
        )
      ] }) }),
      /* @__PURE__ */ C.jsxs("defs", { children: [
        /* @__PURE__ */ C.jsxs(
          "linearGradient",
          {
            id: "paint0_linear_505_1607",
            x1: "16.3366",
            y1: "6.97722",
            x2: "10.8251",
            y2: "14.803",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ C.jsx("stop", { offset: "0.18", stopColor: "#0052CC" }),
              /* @__PURE__ */ C.jsx("stop", { offset: "1", stopColor: "#2684FF" })
            ]
          }
        ),
        /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_505_1607", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }),
        /* @__PURE__ */ C.jsx("clipPath", { id: "clip1_505_1607", children: /* @__PURE__ */ C.jsx(
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
), rD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsx("g", { clipPath: "url(#clip0_244_1220)", children: /* @__PURE__ */ C.jsx(
        "path",
        {
          d: "M8 0.0410004C3.582 0.0410004 0 3.623 0 8.041C0 12.0517 2.95467 15.3637 6.804 15.9423V10.161H4.82467V8.05833H6.804V6.659C6.804 4.34233 7.93267 3.32567 9.858 3.32567C10.78 3.32567 11.268 3.39433 11.4987 3.425V5.26033H10.1853C9.368 5.26033 9.08267 6.03567 9.08267 6.909V8.05833H11.478L11.1533 10.161H9.08267V15.959C12.9873 15.4297 16 12.091 16 8.041C16 3.623 12.418 0.0410004 8 0.0410004Z",
          fill: "#1877F2"
        }
      ) }),
      /* @__PURE__ */ C.jsx("defs", { children: /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_244_1220", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), aD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsx("g", { clipPath: "url(#clip0_505_1582)", children: /* @__PURE__ */ C.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.97616 0.163269C3.56555 0.163269 0 3.75511 0 8.1987C0 11.7507 2.28457 14.7574 5.45388 15.8216C5.85012 15.9016 5.99527 15.6487 5.99527 15.4359C5.99527 15.2496 5.9822 14.6111 5.9822 13.9458C3.76343 14.4248 3.30139 12.9879 3.30139 12.9879C2.94482 12.0567 2.41649 11.8173 2.41649 11.8173C1.69029 11.3251 2.46939 11.3251 2.46939 11.3251C3.27494 11.3783 3.69763 12.1499 3.69763 12.1499C4.41061 13.3737 5.55951 13.0279 6.02171 12.815C6.08767 12.2962 6.2991 11.937 6.52359 11.7375C4.75396 11.5512 2.89208 10.8594 2.89208 7.7729C2.89208 6.89486 3.20882 6.17649 3.71069 5.6178C3.63151 5.41829 3.35412 4.59331 3.79004 3.48915C3.79004 3.48915 4.46351 3.27625 5.98204 4.31396C6.63218 4.13807 7.30265 4.04859 7.97616 4.04784C8.64963 4.04784 9.33616 4.14106 9.97012 4.31396C11.4888 3.27625 12.1623 3.48915 12.1623 3.48915C12.5982 4.59331 12.3207 5.41829 12.2415 5.6178C12.7566 6.17649 13.0602 6.89486 13.0602 7.7729C13.0602 10.8594 11.1984 11.5378 9.41551 11.7375C9.70612 11.9902 9.9569 12.4691 9.9569 13.2274C9.9569 14.305 9.94384 15.1698 9.94384 15.4358C9.94384 15.6487 10.0891 15.9016 10.4852 15.8217C13.6545 14.7572 15.9391 11.7507 15.9391 8.1987C15.9522 3.75511 12.3736 0.163269 7.97616 0.163269Z",
          fill: "#24292F"
        }
      ) }),
      /* @__PURE__ */ C.jsx("defs", { children: /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_505_1582", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), iD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsxs("g", { clipPath: "url(#clip0_505_1689)", children: [
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M15.7337 6.39379L15.7112 6.33631L13.5335 0.652895C13.4892 0.541503 13.4107 0.447009 13.3094 0.382971C13.2079 0.32002 13.0897 0.289702 12.9705 0.296108C12.8513 0.302514 12.7369 0.345337 12.6429 0.418794C12.5498 0.494361 12.4824 0.596756 12.4496 0.712045L10.9792 5.21079H5.02499L3.55457 0.712045C3.52268 0.596128 3.45505 0.49322 3.36129 0.417961C3.26722 0.344503 3.15287 0.301681 3.03368 0.295274C2.9145 0.288868 2.79622 0.319187 2.69481 0.382138C2.5937 0.446435 2.51531 0.540846 2.47071 0.652062L0.288816 6.33298L0.267156 6.39046C-0.046338 7.20957 -0.0850337 8.1084 0.156903 8.95142C0.39884 9.79444 0.908292 10.536 1.60845 11.0642L1.61595 11.07L1.63594 11.0842L4.95335 13.5685L6.59456 14.8106L7.59428 15.5654C7.71122 15.6542 7.85401 15.7023 8.00083 15.7023C8.14766 15.7023 8.29045 15.6542 8.40739 15.5654L9.40711 14.8106L11.0483 13.5685L14.3857 11.0692L14.3941 11.0625C15.0926 10.5342 15.6009 9.79344 15.8425 8.95156C16.084 8.10967 16.0459 7.21213 15.7337 6.39379Z",
            fill: "#E24329"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M15.7336 6.39379L15.7111 6.3363C14.65 6.55411 13.6501 7.00358 12.7828 7.6526L7.99994 11.2691C9.62865 12.5013 11.0466 13.5718 11.0466 13.5718L14.384 11.0725L14.3923 11.0658C15.0919 10.5375 15.601 9.79631 15.8429 8.9537C16.0848 8.1111 16.0464 7.21272 15.7336 6.39379Z",
            fill: "#FC6D26"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M4.95331 13.5718L6.59452 14.8139L7.59424 15.5687C7.71118 15.6575 7.85397 15.7056 8.00079 15.7056C8.14762 15.7056 8.29041 15.6575 8.40735 15.5687L9.40707 14.8139L11.0483 13.5718C11.0483 13.5718 9.62867 12.4979 7.99996 11.2691C6.37125 12.4979 4.95331 13.5718 4.95331 13.5718Z",
            fill: "#FCA326"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M3.21633 7.65262C2.34974 7.00226 1.35002 6.55163 0.288816 6.33299L0.267156 6.39048C-0.046338 7.20959 -0.0850337 8.10841 0.156903 8.95143C0.398839 9.79446 0.908292 10.536 1.60845 11.0642L1.61595 11.07L1.63594 11.0842L4.95335 13.5685C4.95335 13.5685 6.36962 12.4979 8 11.2658L3.21633 7.65262Z",
            fill: "#FC6D26"
          }
        )
      ] }),
      /* @__PURE__ */ C.jsx("defs", { children: /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_505_1689", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), oD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.6801 8.1818C15.6801 7.61453 15.6292 7.06908 15.5346 6.54544H8.00006V9.63999H12.3055C12.1201 10.64 11.5564 11.4873 10.7092 12.0545V14.0618H13.2946C14.8073 12.6691 15.6801 10.6182 15.6801 8.1818Z",
          fill: "#4285F4"
        }
      ),
      /* @__PURE__ */ C.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.00001 16C10.16 16 11.9709 15.2836 13.2946 14.0618L10.7091 12.0545C9.99274 12.5345 9.07638 12.8182 8.00001 12.8182C5.91638 12.8182 4.15274 11.4109 3.52365 9.52H0.850922V11.5927C2.16729 14.2073 4.87274 16 8.00001 16Z",
          fill: "#34A853"
        }
      ),
      /* @__PURE__ */ C.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.52364 9.51998C3.36364 9.03998 3.27273 8.52726 3.27273 7.99998C3.27273 7.47271 3.36364 6.95998 3.52364 6.47998V4.40726H0.850909C0.309091 5.48726 0 6.70908 0 7.99998C0 9.29089 0.309091 10.5127 0.850909 11.5927L3.52364 9.51998Z",
          fill: "#FBBC05"
        }
      ),
      /* @__PURE__ */ C.jsx(
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
), sD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsxs("g", { clipPath: "url(#clip0_505_1637)", children: [
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M12.5339 16H3.46615C1.55208 16 0 14.4479 0 12.5339V3.46615C0 1.55208 1.55208 0 3.46615 0H12.5326C14.4479 0 15.9987 1.55208 15.9987 3.46615V12.5326C16 14.4479 14.4479 16 12.5339 16Z",
            fill: "#00B900"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M13.7995 7.29688C13.7995 4.69011 11.1862 2.56902 7.97396 2.56902C4.76172 2.56902 2.14844 4.69011 2.14844 7.29688C2.14844 9.63412 4.22135 11.5912 7.02083 11.9609C7.21094 12.0013 7.46875 12.0859 7.53385 12.2487C7.59245 12.3958 7.57161 12.6263 7.55208 12.7747C7.55208 12.7747 7.48438 13.1862 7.46875 13.2734C7.44271 13.4206 7.35156 13.849 7.97396 13.5872C8.59505 13.3255 11.3294 11.612 12.5508 10.2057C13.3945 9.27865 13.7995 8.33985 13.7995 7.29688Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M6.79039 6.03645H6.38153C6.31903 6.03645 6.26825 6.08723 6.26825 6.14973V8.6875C6.26825 8.75 6.31903 8.80078 6.38153 8.80078H6.79039C6.85289 8.80078 6.90367 8.75 6.90367 8.6875V6.14973C6.90367 6.08723 6.85289 6.03645 6.79039 6.03645Z",
            fill: "#00B900"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M9.60286 6.03646H9.19401C9.13151 6.03646 9.08073 6.08724 9.08073 6.14974V7.65756L7.91797 6.08724C7.91536 6.08334 7.91276 6.07943 7.90885 6.07553C7.90885 6.07553 7.90885 6.07553 7.90885 6.07422C7.90625 6.07162 7.90365 6.06902 7.90234 6.06771C7.90104 6.06771 7.90104 6.06641 7.89974 6.06511C7.89714 6.06381 7.89583 6.0612 7.89323 6.0599C7.89193 6.0586 7.89193 6.0586 7.89062 6.0573C7.88932 6.05599 7.88672 6.05469 7.88542 6.05339C7.88411 6.05209 7.88281 6.05209 7.88151 6.05079C7.87891 6.04948 7.8776 6.04818 7.875 6.04688C7.8737 6.04688 7.8724 6.04558 7.87109 6.04558C7.86849 6.04428 7.86719 6.04297 7.86458 6.04297C7.86328 6.04297 7.86198 6.04167 7.86068 6.04167C7.85807 6.04037 7.85677 6.04037 7.85417 6.03907C7.85286 6.03907 7.85156 6.03907 7.85026 6.03777C7.84766 6.03777 7.84635 6.03646 7.84375 6.03646C7.84245 6.03646 7.84115 6.03646 7.83854 6.03516C7.83594 6.03516 7.83464 6.03516 7.83203 6.03386C7.82943 6.03386 7.82813 6.03386 7.82682 6.03386C7.82552 6.03386 7.82422 6.03386 7.82292 6.03386H7.41406C7.35156 6.03386 7.30078 6.08464 7.30078 6.14714V8.6849C7.30078 8.7474 7.35156 8.79818 7.41406 8.79818H7.82292C7.88542 8.79818 7.9362 8.7474 7.9362 8.6849V7.18099L9.10026 8.75391C9.10807 8.76563 9.11849 8.77475 9.12891 8.78126C9.12891 8.78126 9.13021 8.78125 9.13021 8.78256C9.13281 8.78386 9.13542 8.78516 9.13672 8.78646C9.13802 8.78646 9.13932 8.78777 9.14062 8.78777C9.14193 8.78907 9.14453 8.78907 9.14583 8.79037C9.14714 8.79167 9.14974 8.79167 9.15104 8.79297C9.15234 8.79297 9.15365 8.79428 9.15495 8.79428C9.15755 8.79558 9.16016 8.79558 9.16276 8.79688H9.16406C9.17318 8.79948 9.18359 8.80079 9.19271 8.80079H9.60156C9.66406 8.80079 9.71484 8.75001 9.71484 8.68751V6.14974C9.71615 6.08724 9.66536 6.03646 9.60286 6.03646Z",
            fill: "#00B900"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M5.80597 8.16536H4.69529V6.14973C4.69529 6.08723 4.64451 6.03645 4.58201 6.03645H4.17316C4.11066 6.03645 4.05988 6.08723 4.05988 6.14973V8.68749C4.05988 8.71744 4.07159 8.74609 4.09113 8.76562L4.09243 8.76692L4.09373 8.76822C4.11456 8.78775 4.14191 8.79947 4.17185 8.79947H5.80467C5.86717 8.79947 5.91795 8.74869 5.91795 8.68619V8.27734C5.91925 8.21744 5.86847 8.16536 5.80597 8.16536Z",
            fill: "#00B900"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M11.8594 6.67187C11.9219 6.67187 11.9726 6.62109 11.9726 6.55859V6.14973C11.9726 6.08723 11.9219 6.03645 11.8594 6.03645H10.2265C10.1966 6.03645 10.1679 6.04817 10.1484 6.06901L10.1471 6.07031C10.1471 6.07161 10.1458 6.07161 10.1458 6.07291C10.1263 6.09374 10.1146 6.12109 10.1146 6.15104V8.6888C10.1146 8.71875 10.1263 8.74739 10.1458 8.76692L10.1471 8.76822L10.1484 8.76953C10.1693 8.78906 10.1966 8.80208 10.2265 8.80208H11.8594C11.9219 8.80208 11.9726 8.7513 11.9726 8.6888V8.27994C11.9726 8.21744 11.9219 8.16666 11.8594 8.16666H10.7487V7.73828H11.8594C11.9219 7.73828 11.9726 7.68749 11.9726 7.62499V7.21614C11.9726 7.15364 11.9219 7.10286 11.8594 7.10286H10.7487V6.67447H11.8594V6.67187Z",
            fill: "#00B900"
          }
        )
      ] }),
      /* @__PURE__ */ C.jsx("defs", { children: /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_505_1637", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), lD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsx("g", { clipPath: "url(#clip0_3100_16)", children: /* @__PURE__ */ C.jsx("g", { clipPath: "url(#clip1_3100_16)", children: /* @__PURE__ */ C.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.80298 0.115361L8.47375 4.16602C8.31816 4.14796 8.16258 4.13894 8.00298 4.13894C7.80323 4.13894 7.6075 4.15198 7.41578 4.18307L7.22908 2.22094C7.22506 2.15875 7.27425 2.10458 7.33648 2.10458H7.66973L7.50913 0.120377C7.50511 0.0581823 7.5543 0.00401306 7.61151 0.00401306H8.7006C8.76283 0.00401306 8.81202 0.0581823 8.80298 0.115361ZM7.13573 4.23223C6.78441 4.31248 6.45116 4.44088 6.14401 4.60941L5.29483 2.82884C5.26873 2.77567 5.29483 2.70947 5.35304 2.6864L5.66823 2.57103L4.83711 0.759374C4.81101 0.706207 4.83711 0.640001 4.89533 0.616928L5.91816 0.243762C5.97538 0.221693 6.03761 0.257806 6.05568 0.314985C6.05969 0.314985 7.13573 4.23223 7.13573 4.23223ZM3.54828 1.44351L5.9001 4.75586C5.60198 4.95147 5.33096 5.18219 5.1001 5.44903L3.68981 4.0637C3.64564 4.01956 3.65066 3.94834 3.69483 3.90821L3.95279 3.69455L2.55154 2.27812C2.50737 2.23398 2.51239 2.16276 2.56057 2.12263L3.39269 1.42546C3.44087 1.38533 3.50813 1.39436 3.54326 1.44351H3.54828ZM4.92243 5.67072C4.70863 5.9506 4.53598 6.26157 4.4065 6.59461L2.61076 5.77304C2.55254 5.75097 2.53046 5.67975 2.56158 5.62658L2.73021 5.33768L0.925441 4.48502C0.872242 4.45893 0.850159 4.39172 0.881276 4.33856L1.42331 3.39762C1.45442 3.34445 1.52569 3.3264 1.57488 3.36151L4.92243 5.67072ZM0.244889 5.9195C0.253923 5.8573 0.316156 5.8222 0.373371 5.83524L4.30813 6.86144C4.20574 7.19448 4.14853 7.54558 4.13949 7.90972L2.17011 7.74922C2.10788 7.7452 2.06271 7.68702 2.07676 7.62483L2.13397 7.2968L0.14652 7.11022C0.0842868 7.1052 0.04514 7.04803 0.0531701 6.98583L0.23987 5.91549L0.244889 5.9195ZM0.0943244 8.5748L4.14451 8.20163C4.16258 8.56176 4.23385 8.91285 4.34426 9.24088L2.44213 9.76552C2.38391 9.77856 2.32168 9.74345 2.31264 9.68125L2.25543 9.35223L0.32519 9.85379C0.267976 9.86784 0.205742 9.83173 0.196708 9.76953L0.00498944 8.69919C-0.00404444 8.63699 0.0361061 8.57981 0.0983395 8.5748H0.0943244ZM0.730711 11.3906C0.699594 11.3374 0.721677 11.2712 0.774876 11.2441L4.44765 9.5037C4.58517 9.83173 4.77187 10.1387 4.9937 10.4135L3.38466 11.5591C3.33548 11.5952 3.26421 11.5812 3.23309 11.528L3.06446 11.2351L1.42431 12.3677C1.37513 12.4028 1.30386 12.3857 1.27274 12.3325C1.27274 12.3325 0.725692 11.3906 0.730711 11.3906ZM6.0075 11.2973L4.8873 12.9224C4.85217 12.9766 4.7809 12.9846 4.73171 12.9455L4.47375 12.7278L3.31841 14.3529C3.28228 14.402 3.21603 14.411 3.16685 14.3709L2.33071 13.6737C2.28253 13.6336 2.27751 13.5624 2.32168 13.5182L5.1804 10.6272C5.42532 10.884 5.70537 11.1107 6.0075 11.2973ZM4.61628 15.2677C4.55806 15.2456 4.53197 15.1784 4.55806 15.1253L6.25242 11.4307C6.56358 11.5902 6.90185 11.7106 7.25317 11.7768L6.7543 13.6868C6.74125 13.744 6.675 13.7801 6.61678 13.758L6.3016 13.6426L5.77262 15.5656C5.75455 15.6228 5.69232 15.6589 5.6341 15.6359L4.61227 15.2637L4.61628 15.2677ZM8.00399 11.8571C8.20374 11.8571 8.39947 11.843 8.59018 11.8119L8.77688 13.775C8.7819 13.8372 8.73272 13.8904 8.67048 13.8904H8.33724L8.49683 15.8756C8.50587 15.9378 8.45769 15.991 8.39545 15.991H7.30537C7.24815 15.991 7.19897 15.9378 7.20298 15.8756L7.53222 11.826C7.6878 11.848 7.84338 11.8571 8.00399 11.8571ZM9.75555 4.55122C9.44439 4.39574 9.11114 4.27536 8.7548 4.20514L9.25267 2.29517C9.27074 2.23699 9.33297 2.20188 9.39119 2.22395L9.70637 2.33931L10.2354 0.416301C10.2534 0.359123 10.3157 0.32301 10.3739 0.345079L11.3957 0.718245C11.4539 0.740314 11.481 0.802508 11.4539 0.86069L9.75555 4.55122ZM13.6863 2.47273L10.8266 5.36376C10.5867 5.10596 10.3116 4.88025 10.0045 4.69367L11.1247 3.06759C11.1608 3.01944 11.2321 3.00539 11.2803 3.04552L11.5382 3.2632L12.6946 1.63812C12.7297 1.58897 12.801 1.57994 12.8451 1.62006L13.6813 2.31724C13.7305 2.35737 13.7305 2.42859 13.6863 2.47273ZM15.2291 4.75085L11.5563 6.49229C11.4138 6.16326 11.2321 5.8563 11.0093 5.58144L12.6183 4.43586C12.6675 4.39574 12.7387 4.41379 12.7699 4.46696L12.9385 4.75586L14.5796 3.62332C14.6288 3.59223 14.6991 3.60527 14.7302 3.65843L15.2773 4.60038C15.3084 4.65354 15.2913 4.71975 15.2331 4.74683L15.2291 4.75085ZM15.8113 6.22044L15.998 7.29078C16.007 7.35298 15.9668 7.40614 15.9046 7.41517L11.8544 7.79235C11.8364 7.42821 11.7651 7.08213 11.6547 6.7531L13.5578 6.22947C13.615 6.21141 13.6773 6.25154 13.6863 6.31373L13.7445 6.64276L15.6737 6.14019C15.732 6.12715 15.7942 6.16326 15.8022 6.22545L15.8113 6.22044ZM15.6246 10.1457L11.6898 9.1195C11.7922 8.78646 11.8504 8.43636 11.8594 8.07223L13.8288 8.23172C13.8911 8.24075 13.9312 8.29392 13.9222 8.35611L13.864 8.68514L15.8514 8.87173C15.9136 8.87975 15.9538 8.93292 15.9448 8.99511L15.7581 10.0655C15.749 10.1276 15.6868 10.1638 15.6296 10.1507L15.6246 10.1457ZM14.5796 12.5924C14.5485 12.6455 14.4773 12.6586 14.4281 12.6275L11.0805 10.3182C11.2943 10.0384 11.467 9.7274 11.5965 9.39436L13.3922 10.2159C13.4504 10.243 13.4725 10.3092 13.4414 10.3624L13.2727 10.6513L15.0775 11.504C15.1307 11.531 15.1528 11.5972 15.1217 11.6504L14.5796 12.5924ZM10.0978 11.2291C10.396 11.0385 10.663 10.8028 10.8988 10.5369L12.3081 11.9223C12.3523 11.9664 12.3523 12.0376 12.3031 12.0777L12.0451 12.2904L13.4464 13.7078C13.4865 13.752 13.4865 13.8232 13.4374 13.8623L12.6062 14.5605C12.5611 14.5996 12.4898 14.5916 12.4547 14.5424L10.1029 11.2291H10.0978ZM10.0798 15.7412C10.0226 15.7633 9.96032 15.7282 9.94225 15.67L8.86622 11.7537C9.21754 11.6735 9.55079 11.5451 9.85794 11.3755L10.7071 13.1571C10.7332 13.2143 10.7071 13.2815 10.6489 13.2986L10.3337 13.4139L11.1648 15.2266C11.1909 15.2838 11.1648 15.346 11.1066 15.368L10.0848 15.7412H10.0798Z",
          fill: "black"
        }
      ) }) }),
      /* @__PURE__ */ C.jsxs("defs", { children: [
        /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_3100_16", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }),
        /* @__PURE__ */ C.jsx("clipPath", { id: "clip1_3100_16", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) })
      ] })
    ]
  }
), uD = ({ className: n }) => /* @__PURE__ */ C.jsx(
  "svg",
  {
    className: n,
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ C.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.716186 4.04581C0 5.03155 0 6.4377 0 9.25V10.75C0 13.5623 0 14.9684 0.716186 15.9542C0.947485 16.2725 1.22745 16.5525 1.54581 16.7838C2.53155 17.5 3.9377 17.5 6.75 17.5H11.25V19.375C11.25 19.8582 11.7749 20.1587 12.1916 19.9139L16.25 17.5C16.6491 17.2339 16.8487 17.1009 17.0291 16.9642C18.7741 15.6422 19.8543 13.6238 19.9863 11.4386C20 11.2126 20 10.9727 20 10.4931V8.53757C20 6.40191 20 5.33408 19.5778 4.52129C19.222 3.83642 18.6636 3.278 17.9787 2.92223C17.1659 2.5 16.0981 2.5 13.9624 2.5H6.75C3.9377 2.5 2.53155 2.5 1.54581 3.21619C1.22745 3.44748 0.947485 3.72745 0.716186 4.04581ZM2.5 7.1875C2.5 6.66973 2.91973 6.25 3.4375 6.25H10.3125C10.8303 6.25 11.25 6.66973 11.25 7.1875C11.25 7.70527 10.8303 8.125 10.3125 8.125H3.4375C2.91973 8.125 2.5 7.70527 2.5 7.1875ZM3.4375 10.625C2.91973 10.625 2.5 11.0447 2.5 11.5625C2.5 12.0803 2.91973 12.5 3.4375 12.5H6.5625C7.08027 12.5 7.5 12.0803 7.5 11.5625C7.5 11.0447 7.08027 10.625 6.5625 10.625H3.4375Z",
        fill: "white"
      }
    )
  }
), cD = ({ className: n }) => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    className: lt(n),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsx(
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
), dD = ({ className: n }) => /* @__PURE__ */ C.jsx(
  "svg",
  {
    className: n,
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ C.jsx(
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
function fD() {
  return /* @__PURE__ */ C.jsxs(
    "svg",
    {
      width: "5",
      height: "20",
      viewBox: "0 0 5 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ C.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 0C3.32843 1.19209e-07 4 0.671573 4 1.5L4 11.5C4 12.3284 3.32843 13 2.5 13C1.67157 13 1 12.3284 1 11.5L1 1.5C1 0.671573 1.67157 -1.19209e-07 2.5 0Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ C.jsx(
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
const pD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsx("g", { clipPath: "url(#clip0_2610_9920)", children: /* @__PURE__ */ C.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0.220551 7.4C1.00905 5.8258 3.50342 2 8.00001 2C12.4966 2 14.991 5.8258 15.7796 7.4C16.0733 7.98635 16.0737 8.0153 15.7796 8.60228C14.99 10.1778 12.4949 14 8.00001 14C3.50298 14 1.00762 10.1738 0.219399 8.6C-0.0739824 8.01422 -0.0726647 7.98539 0.220551 7.4ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z",
          fill: "#142049"
        }
      ) }),
      /* @__PURE__ */ C.jsx("defs", { children: /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_2610_9920", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), hD = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsxs("g", { clipPath: "url(#clip0_2610_9933)", children: [
        /* @__PURE__ */ C.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.220551 7.4C1.00905 5.8258 3.50342 2 8.00001 2C12.4966 2 14.991 5.8258 15.7796 7.4C16.0733 7.98635 16.0737 8.0153 15.7796 8.60228C14.99 10.1778 12.4949 14 8.00001 14C3.50298 14 1.00762 10.1738 0.219399 8.6C-0.0739824 8.01422 -0.0726647 7.98539 0.220551 7.4ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z",
            fill: "#142049"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M2.34314 2.34315L13.6568 13.6569",
            stroke: "#142049",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ C.jsx("defs", { children: /* @__PURE__ */ C.jsx("clipPath", { id: "clip0_2610_9933", children: /* @__PURE__ */ C.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
    ]
  }
), I5 = ({ className: n }) => /* @__PURE__ */ C.jsx(
  "svg",
  {
    width: "16",
    className: lt(n),
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ C.jsx(
      "path",
      {
        d: "M3.75 5.75L8 10.25L12.25 5.75",
        stroke: L5.color.foreground,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), N5 = () => /* @__PURE__ */ C.jsxs(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ C.jsx("style", { children: Nr }),
      /* @__PURE__ */ C.jsx(
        "path",
        {
          d: "M10.1489 8L1.6001 24.1824H4.1585L12.7073 8H10.1489Z",
          fill: "#2A6AFF"
        }
      ),
      /* @__PURE__ */ C.jsx(
        "path",
        {
          d: "M15.8339 12.5552C16.7499 12.5552 17.4979 11.7856 17.4979 10.8704C17.4979 9.9552 16.7499 9.1856 15.8339 9.1856C14.8979 9.1856 14.1499 9.9552 14.1499 10.8704C14.1499 11.7856 14.8979 12.5552 15.8339 12.5552ZM14.4619 14.0112V24.1824H17.1659V14.0112H14.4619ZM27.3507 8V14.8016C26.5377 14.1118 25.5049 13.7356 24.4387 13.7408C21.4851 13.7408 19.2595 16.112 19.2595 19.1072C19.2595 22.1024 21.4851 24.4736 24.4387 24.4736C25.6659 24.4736 26.7475 24.016 27.5587 23.2256V24.1824H30.0547V8H27.3507ZM24.7507 21.936C23.1907 21.936 22.0467 20.7296 22.0467 19.1072C22.0467 17.4848 23.1907 16.2784 24.7507 16.2784C26.3107 16.2784 27.4547 17.4848 27.4547 19.1072C27.4547 20.7296 26.3107 21.936 24.7507 21.936Z",
          fill: "#142049"
        }
      )
    ]
  }
), y2 = (n) => {
  const [a, o] = y.useState(!1);
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: lt(
        "sid-input",
        "sid-input--password",
        sy,
        n.error && z5,
        n.className
      ),
      children: [
        /* @__PURE__ */ C.jsx(ly, { ...n, type: a ? "text" : "password" }),
        /* @__PURE__ */ C.jsx(
          "button",
          {
            tabIndex: -1,
            className: X$,
            type: "button",
            onClick: () => o(!a),
            children: a ? /* @__PURE__ */ C.jsx(hD, {}) : /* @__PURE__ */ C.jsx(pD, {})
          }
        )
      ]
    }
  );
};
var vD = "dv1j860", mD = "dv1j861";
const gD = ({
  onChange: n,
  value: a = "",
  numInputs: o = 4,
  shouldAutoFocus: l = !1,
  inputType: c = "text"
}) => {
  const [p, d] = y.useState(0), v = y.useRef([]), w = () => a ? a.toString().split("") : [], b = c === "number";
  y.useEffect(() => {
    v.current = v.current.slice(0, o);
  }, [o]);
  const E = (I) => b ? !isNaN(Number(I)) : typeof I == "string", _ = (I) => E(I) && I.trim().length === 1, R = (I) => {
    const { value: N } = I.target;
    _(N) && (P(N), q(p + 1));
  }, k = (I) => {
    const N = w(), J = I.slice(0, o).split(""), Ce = Math.min(J.length, o);
    if (!(b && J.some((ne) => isNaN(Number(ne))))) {
      for (let ne = 0; ne < o; ++ne)
        ne >= 0 && J.length > 0 && (N[ne] = J.shift() ?? "");
      q(Ce), Z(N);
    }
  }, T = (I) => {
    const { value: N } = I.target;
    if (!E(N)) {
      I.target.value = "";
      return;
    }
    N.length === o && k(N);
  }, O = (I) => (N) => {
    d(N), I.target.select();
  }, z = () => {
    d(p - 1);
  }, M = (I) => {
    const N = w();
    [I.code, I.key].includes("Backspace") ? (I.preventDefault(), P(""), q(p - 1)) : I.code === "Delete" ? (I.preventDefault(), P("")) : I.code === "ArrowLeft" ? (I.preventDefault(), q(p - 1)) : I.code === "ArrowRight" || I.key === N[p] ? (I.preventDefault(), q(p + 1)) : (I.code === "Spacebar" || I.code === "Space" || I.code === "ArrowUp" || I.code === "ArrowDown") && I.preventDefault();
  }, q = (I) => {
    var J, Ce;
    const N = Math.max(Math.min(o - 1, I), 0);
    v.current[N] && ((J = v.current[N]) == null || J.focus(), (Ce = v.current[N]) == null || Ce.select(), d(N));
  }, P = (I) => {
    const N = w();
    N[p] = I[0], Z(N);
  }, Z = (I) => {
    n(I.join(""));
  }, j = (I) => {
    var J;
    I.preventDefault();
    const N = (J = I.clipboardData) == null ? void 0 : J.getData("text/plain");
    k(N);
  };
  return /* @__PURE__ */ C.jsx("div", { className: lt("sid-otp-input", vD), children: Array.from({ length: o }, (I, N) => N).map((I) => /* @__PURE__ */ C.jsx(
    "input",
    {
      className: mD,
      autoComplete: "one-time-code",
      maxLength: o,
      autoFocus: I === 0 && l,
      type: "text",
      inputMode: b ? "numeric" : "text",
      "aria-label": `Please enter OTP ${b ? "digit" : "character"} ${I + 1}`,
      value: w()[I] ?? "",
      ref: (N) => v.current[I] = N,
      onChange: R,
      onFocus: (N) => O(N)(I),
      onBlur: z,
      onKeyDown: M,
      onPaste: j,
      onInput: T
    },
    I
  )) });
};
var Rg = /* @__PURE__ */ new Map();
function b2(n) {
  if (Rg.has(n))
    return Rg.get(n);
  var a = yD(n);
  return Rg.set(n, a), a;
}
var yD = function() {
  var n = null;
  try {
    n = document.createElement("canvas").getContext("2d");
  } catch {
  }
  if (!n)
    return function() {
      return !1;
    };
  var a = 25, o = 20, l = Math.floor(a / 2);
  return n.font = l + "px Arial, Sans-Serif", n.textBaseline = "top", n.canvas.width = o * 2, n.canvas.height = a, function(c) {
    n.clearRect(0, 0, o * 2, a), n.fillStyle = "#FF0000", n.fillText(c, 0, 22), n.fillStyle = "#0000FF", n.fillText(c, o, 22);
    for (var p = n.getImageData(0, 0, o, a).data, d = p.length, v = 0; v < d && !p[v + 3]; v += 4)
      ;
    if (v >= d)
      return !1;
    var w = o + v / 4 % o, b = Math.floor(v / 4 / o), E = n.getImageData(w, b, 1, 1).data;
    return !(p[v] !== E[0] || p[v + 2] !== E[2] || n.measureText(c).width >= o);
  };
}();
function bD(n = "Twemoji Country Flags", a = "https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1/dist/TwemojiCountryFlags.woff2") {
  if (b2("😊") && !b2("🇨🇭")) {
    const o = document.createElement("style");
    return o.textContent = `@font-face {
      font-family: "${n}";
      unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067,
        U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
      src: url('${a}') format('woff2');
      font-display: swap;
    }`, document.head.appendChild(o), !0;
  }
  return !1;
}
var na = {}, uy = {};
Object.defineProperty(uy, "__esModule", { value: !0 });
var CD = [
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
uy.default = CD;
Object.defineProperty(na, "__esModule", { value: !0 });
na.searchFlag = na.findFlagsByDialCode = P5 = na.findFlagByDialCode = cy = na.findFlag = dy = na.getList = void 0;
var rp = uy, wD = function(n) {
  return rp.default.find(function(a) {
    return a.code.toLowerCase() === n.toLowerCase();
  });
}, cy = na.findFlag = wD, SD = function(n) {
  var a, o = U5(n), l = o.find(function(c) {
    return c.dial_code === n && c.preferred;
  });
  return l || ((a = o[0]) !== null && a !== void 0 ? a : null);
}, P5 = na.findFlagByDialCode = SD, U5 = function(n) {
  return rp.default.filter(function(a) {
    return a.dial_code === n;
  });
};
na.findFlagsByDialCode = U5;
var _D = function() {
  return rp.default;
}, dy = na.getList = _D, xD = function(n) {
  return rp.default.filter(function(a) {
    return a.code.toLowerCase().includes(n.toLowerCase()) || a.name.toLowerCase().includes(n.toLowerCase()) || a.dial_code.toLowerCase().includes(n.toLowerCase());
  });
};
na.searchFlag = xD;
const ED = ({
  name: n,
  id: a,
  label: o,
  placeholder: l = "",
  className: c = "",
  value: p,
  flag: d,
  onChange: v,
  onFlagChange: w
}) => {
  y.useLayoutEffect(() => {
    bD();
  }, []);
  const b = y.useCallback(
    (E) => {
      const _ = E.target.value;
      w(cy(_));
    },
    [w]
  );
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: lt("sid-input", "sid-input--tel", sy, c),
      children: [
        d ? /* @__PURE__ */ C.jsxs("div", { className: W$, children: [
          /* @__PURE__ */ C.jsxs("div", { className: Y$, children: [
            /* @__PURE__ */ C.jsxs("div", { children: [
              d.flag,
              " ",
              d.dial_code
            ] }),
            /* @__PURE__ */ C.jsx(I5, {})
          ] }),
          /* @__PURE__ */ C.jsx(
            "select",
            {
              className: J$,
              value: d.code,
              onChange: b,
              children: dy().map((E) => /* @__PURE__ */ C.jsxs("option", { value: E.code, children: [
                E.name,
                " ",
                E.dial_code
              ] }, E.code))
            }
          )
        ] }) : null,
        /* @__PURE__ */ C.jsx(
          ly,
          {
            id: a,
            name: n,
            label: o,
            placeholder: l,
            className: c,
            type: "tel",
            value: p,
            onChange: v
          }
        )
      ]
    }
  );
};
var RD = "_1dpv0n91", kD = "_1dpv0n90", C2 = "_1dpv0n92";
const TD = ({ children: n }) => /* @__PURE__ */ C.jsxs("div", { className: lt("sid-divider", kD), children: [
  /* @__PURE__ */ C.jsx("hr", { className: C2 }),
  /* @__PURE__ */ C.jsx("span", { className: RD, children: n }),
  /* @__PURE__ */ C.jsx("hr", { className: C2 })
] });
function rt() {
  return rt = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var l in o)
        Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
    }
    return n;
  }, rt.apply(this, arguments);
}
function uc(n, a = []) {
  let o = [];
  function l(p, d) {
    const v = /* @__PURE__ */ y.createContext(d), w = o.length;
    o = [
      ...o,
      d
    ];
    function b(_) {
      const { scope: R, children: k, ...T } = _, O = (R == null ? void 0 : R[n][w]) || v, z = y.useMemo(
        () => T,
        Object.values(T)
      );
      return /* @__PURE__ */ y.createElement(O.Provider, {
        value: z
      }, k);
    }
    function E(_, R) {
      const k = (R == null ? void 0 : R[n][w]) || v, T = y.useContext(k);
      if (T)
        return T;
      if (d !== void 0)
        return d;
      throw new Error(`\`${_}\` must be used within \`${p}\``);
    }
    return b.displayName = p + "Provider", [
      b,
      E
    ];
  }
  const c = () => {
    const p = o.map((d) => /* @__PURE__ */ y.createContext(d));
    return function(v) {
      const w = (v == null ? void 0 : v[n]) || p;
      return y.useMemo(
        () => ({
          [`__scope${n}`]: {
            ...v,
            [n]: w
          }
        }),
        [
          v,
          w
        ]
      );
    };
  };
  return c.scopeName = n, [
    l,
    $D(c, ...a)
  ];
}
function $D(...n) {
  const a = n[0];
  if (n.length === 1)
    return a;
  const o = () => {
    const l = n.map(
      (c) => ({
        useScope: c(),
        scopeName: c.scopeName
      })
    );
    return function(p) {
      const d = l.reduce((v, { useScope: w, scopeName: b }) => {
        const _ = w(p)[`__scope${b}`];
        return {
          ...v,
          ..._
        };
      }, {});
      return y.useMemo(
        () => ({
          [`__scope${a.scopeName}`]: d
        }),
        [
          d
        ]
      );
    };
  };
  return o.scopeName = a.scopeName, o;
}
function DD(n, a) {
  typeof n == "function" ? n(a) : n != null && (n.current = a);
}
function F5(...n) {
  return (a) => n.forEach(
    (o) => DD(o, a)
  );
}
function Dn(...n) {
  return y.useCallback(F5(...n), n);
}
const ic = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { children: o, ...l } = n, c = y.Children.toArray(o), p = c.find(LD);
  if (p) {
    const d = p.props.children, v = c.map((w) => w === p ? y.Children.count(d) > 1 ? y.Children.only(null) : /* @__PURE__ */ y.isValidElement(d) ? d.props.children : null : w);
    return /* @__PURE__ */ y.createElement(Kg, rt({}, l, {
      ref: a
    }), /* @__PURE__ */ y.isValidElement(d) ? /* @__PURE__ */ y.cloneElement(d, void 0, v) : null);
  }
  return /* @__PURE__ */ y.createElement(Kg, rt({}, l, {
    ref: a
  }), o);
});
ic.displayName = "Slot";
const Kg = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { children: o, ...l } = n;
  return /* @__PURE__ */ y.isValidElement(o) ? /* @__PURE__ */ y.cloneElement(o, {
    ...AD(l, o.props),
    ref: a ? F5(a, o.ref) : o.ref
  }) : y.Children.count(o) > 1 ? y.Children.only(null) : null;
});
Kg.displayName = "SlotClone";
const OD = ({ children: n }) => /* @__PURE__ */ y.createElement(y.Fragment, null, n);
function LD(n) {
  return /* @__PURE__ */ y.isValidElement(n) && n.type === OD;
}
function AD(n, a) {
  const o = {
    ...a
  };
  for (const l in a) {
    const c = n[l], p = a[l];
    /^on[A-Z]/.test(l) ? c && p ? o[l] = (...v) => {
      p(...v), c(...v);
    } : c && (o[l] = c) : l === "style" ? o[l] = {
      ...c,
      ...p
    } : l === "className" && (o[l] = [
      c,
      p
    ].filter(Boolean).join(" "));
  }
  return {
    ...n,
    ...o
  };
}
function V5(n) {
  const a = n + "CollectionProvider", [o, l] = uc(a), [c, p] = o(a, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), d = (k) => {
    const { scope: T, children: O } = k, z = dt.useRef(null), M = dt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ dt.createElement(c, {
      scope: T,
      itemMap: M,
      collectionRef: z
    }, O);
  }, v = n + "CollectionSlot", w = /* @__PURE__ */ dt.forwardRef((k, T) => {
    const { scope: O, children: z } = k, M = p(v, O), q = Dn(T, M.collectionRef);
    return /* @__PURE__ */ dt.createElement(ic, {
      ref: q
    }, z);
  }), b = n + "CollectionItemSlot", E = "data-radix-collection-item", _ = /* @__PURE__ */ dt.forwardRef((k, T) => {
    const { scope: O, children: z, ...M } = k, q = dt.useRef(null), P = Dn(T, q), Z = p(b, O);
    return dt.useEffect(() => (Z.itemMap.set(q, {
      ref: q,
      ...M
    }), () => void Z.itemMap.delete(q))), /* @__PURE__ */ dt.createElement(ic, {
      [E]: "",
      ref: P
    }, z);
  });
  function R(k) {
    const T = p(n + "CollectionConsumer", k);
    return dt.useCallback(() => {
      const z = T.collectionRef.current;
      if (!z)
        return [];
      const M = Array.from(z.querySelectorAll(`[${E}]`));
      return Array.from(T.itemMap.values()).sort(
        (Z, j) => M.indexOf(Z.ref.current) - M.indexOf(j.ref.current)
      );
    }, [
      T.collectionRef,
      T.itemMap
    ]);
  }
  return [
    {
      Provider: d,
      Slot: w,
      ItemSlot: _
    },
    R,
    l
  ];
}
function xt(n, a, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(c) {
    if (n == null || n(c), o === !1 || !c.defaultPrevented)
      return a == null ? void 0 : a(c);
  };
}
function Ra(n) {
  const a = y.useRef(n);
  return y.useEffect(() => {
    a.current = n;
  }), y.useMemo(
    () => (...o) => {
      var l;
      return (l = a.current) === null || l === void 0 ? void 0 : l.call(a, ...o);
    },
    []
  );
}
function Yf({ prop: n, defaultProp: a, onChange: o = () => {
} }) {
  const [l, c] = MD({
    defaultProp: a,
    onChange: o
  }), p = n !== void 0, d = p ? n : l, v = Ra(o), w = y.useCallback((b) => {
    if (p) {
      const _ = typeof b == "function" ? b(n) : b;
      _ !== n && v(_);
    } else
      c(b);
  }, [
    p,
    n,
    c,
    v
  ]);
  return [
    d,
    w
  ];
}
function MD({ defaultProp: n, onChange: a }) {
  const o = y.useState(n), [l] = o, c = y.useRef(l), p = Ra(a);
  return y.useEffect(() => {
    c.current !== l && (p(l), c.current = l);
  }, [
    l,
    c,
    p
  ]), o;
}
var H5 = { exports: {} }, wr = {}, B5 = { exports: {} }, j5 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(n) {
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = !1, o = !1, l = 5;
    function c(ue, xe) {
      var Be = ue.length;
      ue.push(xe), v(ue, xe, Be);
    }
    function p(ue) {
      return ue.length === 0 ? null : ue[0];
    }
    function d(ue) {
      if (ue.length === 0)
        return null;
      var xe = ue[0], Be = ue.pop();
      return Be !== xe && (ue[0] = Be, w(ue, Be, 0)), xe;
    }
    function v(ue, xe, Be) {
      for (var ft = Be; ft > 0; ) {
        var pt = ft - 1 >>> 1, nn = ue[pt];
        if (b(nn, xe) > 0)
          ue[pt] = xe, ue[ft] = nn, ft = pt;
        else
          return;
      }
    }
    function w(ue, xe, Be) {
      for (var ft = Be, pt = ue.length, nn = pt >>> 1; ft < nn; ) {
        var jt = (ft + 1) * 2 - 1, Jn = ue[jt], Ct = jt + 1, dr = ue[Ct];
        if (b(Jn, xe) < 0)
          Ct < pt && b(dr, Jn) < 0 ? (ue[ft] = dr, ue[Ct] = xe, ft = Ct) : (ue[ft] = Jn, ue[jt] = xe, ft = jt);
        else if (Ct < pt && b(dr, xe) < 0)
          ue[ft] = dr, ue[Ct] = xe, ft = Ct;
        else
          return;
      }
    }
    function b(ue, xe) {
      var Be = ue.sortIndex - xe.sortIndex;
      return Be !== 0 ? Be : ue.id - xe.id;
    }
    var E = 1, _ = 2, R = 3, k = 4, T = 5;
    function O(ue, xe) {
    }
    var z = typeof performance == "object" && typeof performance.now == "function";
    if (z) {
      var M = performance;
      n.unstable_now = function() {
        return M.now();
      };
    } else {
      var q = Date, P = q.now();
      n.unstable_now = function() {
        return q.now() - P;
      };
    }
    var Z = 1073741823, j = -1, I = 250, N = 5e3, J = 1e4, Ce = Z, ne = [], re = [], we = 1, le = null, oe = R, se = !1, ge = !1, ce = !1, Ie = typeof setTimeout == "function" ? setTimeout : null, It = typeof clearTimeout == "function" ? clearTimeout : null, bt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Rt(ue) {
      for (var xe = p(re); xe !== null; ) {
        if (xe.callback === null)
          d(re);
        else if (xe.startTime <= ue)
          d(re), xe.sortIndex = xe.expirationTime, c(ne, xe);
        else
          return;
        xe = p(re);
      }
    }
    function yt(ue) {
      if (ce = !1, Rt(ue), !ge)
        if (p(ne) !== null)
          ge = !0, cr(Ut);
        else {
          var xe = p(re);
          xe !== null && Bt(yt, xe.startTime - ue);
        }
    }
    function Ut(ue, xe) {
      ge = !1, ce && (ce = !1, Tr()), se = !0;
      var Be = oe;
      try {
        var ft;
        if (!o)
          return kt(ue, xe);
      } finally {
        le = null, oe = Be, se = !1;
      }
    }
    function kt(ue, xe) {
      var Be = xe;
      for (Rt(Be), le = p(ne); le !== null && !a && !(le.expirationTime > Be && (!ue || Xn())); ) {
        var ft = le.callback;
        if (typeof ft == "function") {
          le.callback = null, oe = le.priorityLevel;
          var pt = le.expirationTime <= Be, nn = ft(pt);
          Be = n.unstable_now(), typeof nn == "function" ? le.callback = nn : le === p(ne) && d(ne), Rt(Be);
        } else
          d(ne);
        le = p(ne);
      }
      if (le !== null)
        return !0;
      var jt = p(re);
      return jt !== null && Bt(yt, jt.startTime - Be), !1;
    }
    function Ft(ue, xe) {
      switch (ue) {
        case E:
        case _:
        case R:
        case k:
        case T:
          break;
        default:
          ue = R;
      }
      var Be = oe;
      oe = ue;
      try {
        return xe();
      } finally {
        oe = Be;
      }
    }
    function Wt(ue) {
      var xe;
      switch (oe) {
        case E:
        case _:
        case R:
          xe = R;
          break;
        default:
          xe = oe;
          break;
      }
      var Be = oe;
      oe = xe;
      try {
        return ue();
      } finally {
        oe = Be;
      }
    }
    function Re(ue) {
      var xe = oe;
      return function() {
        var Be = oe;
        oe = xe;
        try {
          return ue.apply(this, arguments);
        } finally {
          oe = Be;
        }
      };
    }
    function Ve(ue, xe, Be) {
      var ft = n.unstable_now(), pt;
      if (typeof Be == "object" && Be !== null) {
        var nn = Be.delay;
        typeof nn == "number" && nn > 0 ? pt = ft + nn : pt = ft;
      } else
        pt = ft;
      var jt;
      switch (ue) {
        case E:
          jt = j;
          break;
        case _:
          jt = I;
          break;
        case T:
          jt = Ce;
          break;
        case k:
          jt = J;
          break;
        case R:
        default:
          jt = N;
          break;
      }
      var Jn = pt + jt, Ct = {
        id: we++,
        callback: xe,
        priorityLevel: ue,
        startTime: pt,
        expirationTime: Jn,
        sortIndex: -1
      };
      return pt > ft ? (Ct.sortIndex = pt, c(re, Ct), p(ne) === null && Ct === p(re) && (ce ? Tr() : ce = !0, Bt(yt, pt - ft))) : (Ct.sortIndex = Jn, c(ne, Ct), !ge && !se && (ge = !0, cr(Ut))), Ct;
    }
    function at() {
    }
    function He() {
      !ge && !se && (ge = !0, cr(Ut));
    }
    function Ne() {
      return p(ne);
    }
    function Pe(ue) {
      ue.callback = null;
    }
    function Je() {
      return oe;
    }
    var ut = !1, qt = null, zt = -1, Tt = l, Fn = -1;
    function Xn() {
      var ue = n.unstable_now() - Fn;
      return !(ue < Tt);
    }
    function tn() {
    }
    function Pr(ue) {
      if (ue < 0 || ue > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      ue > 0 ? Tt = Math.floor(1e3 / ue) : Tt = l;
    }
    var Rr = function() {
      if (qt !== null) {
        var ue = n.unstable_now();
        Fn = ue;
        var xe = !0, Be = !0;
        try {
          Be = qt(xe, ue);
        } finally {
          Be ? Vn() : (ut = !1, qt = null);
        }
      } else
        ut = !1;
    }, Vn;
    if (typeof bt == "function")
      Vn = function() {
        bt(Rr);
      };
    else if (typeof MessageChannel < "u") {
      var kr = new MessageChannel(), On = kr.port2;
      kr.port1.onmessage = Rr, Vn = function() {
        On.postMessage(null);
      };
    } else
      Vn = function() {
        Ie(Rr, 0);
      };
    function cr(ue) {
      qt = ue, ut || (ut = !0, Vn());
    }
    function Bt(ue, xe) {
      zt = Ie(function() {
        ue(n.unstable_now());
      }, xe);
    }
    function Tr() {
      It(zt), zt = -1;
    }
    var Da = tn, Oa = null;
    n.unstable_IdlePriority = T, n.unstable_ImmediatePriority = E, n.unstable_LowPriority = k, n.unstable_NormalPriority = R, n.unstable_Profiling = Oa, n.unstable_UserBlockingPriority = _, n.unstable_cancelCallback = Pe, n.unstable_continueExecution = He, n.unstable_forceFrameRate = Pr, n.unstable_getCurrentPriorityLevel = Je, n.unstable_getFirstCallbackNode = Ne, n.unstable_next = Wt, n.unstable_pauseExecution = at, n.unstable_requestPaint = Da, n.unstable_runWithPriority = Ft, n.unstable_scheduleCallback = Ve, n.unstable_shouldYield = Xn, n.unstable_wrapCallback = Re, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(j5);
B5.exports = j5;
var qD = B5.exports;
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var n = y, a = qD, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, l = !1;
  function c(e) {
    l = e;
  }
  function p(e) {
    if (!l) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        r[i - 1] = arguments[i];
      v("warn", e, r);
    }
  }
  function d(e) {
    if (!l) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        r[i - 1] = arguments[i];
      v("error", e, r);
    }
  }
  function v(e, t, r) {
    {
      var i = o.ReactDebugCurrentFrame, s = i.getStackAddendum();
      s !== "" && (t += "%s", r = r.concat([s]));
      var u = r.map(function(f) {
        return String(f);
      });
      u.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, u);
    }
  }
  var w = 0, b = 1, E = 2, _ = 3, R = 4, k = 5, T = 6, O = 7, z = 8, M = 9, q = 10, P = 11, Z = 12, j = 13, I = 14, N = 15, J = 16, Ce = 17, ne = 18, re = 19, we = 21, le = 22, oe = 23, se = 24, ge = 25, ce = !0, Ie = !1, It = !1, bt = !1, Rt = !1, yt = !0, Ut = !1, kt = !1, Ft = !0, Wt = !0, Re = !0, Ve = /* @__PURE__ */ new Set(), at = {}, He = {};
  function Ne(e, t) {
    Pe(e, t), Pe(e + "Capture", t);
  }
  function Pe(e, t) {
    at[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), at[e] = t;
    {
      var r = e.toLowerCase();
      He[r] = e, e === "onDoubleClick" && (He.ondblclick = e);
    }
    for (var i = 0; i < t.length; i++)
      Ve.add(t[i]);
  }
  var Je = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ut = Object.prototype.hasOwnProperty;
  function qt(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return r;
    }
  }
  function zt(e) {
    try {
      return Tt(e), !1;
    } catch {
      return !0;
    }
  }
  function Tt(e) {
    return "" + e;
  }
  function Fn(e, t) {
    if (zt(e))
      return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qt(e)), Tt(e);
  }
  function Xn(e) {
    if (zt(e))
      return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qt(e)), Tt(e);
  }
  function tn(e, t) {
    if (zt(e))
      return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qt(e)), Tt(e);
  }
  function Pr(e, t) {
    if (zt(e))
      return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qt(e)), Tt(e);
  }
  function Rr(e) {
    if (zt(e))
      return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", qt(e)), Tt(e);
  }
  function Vn(e) {
    if (zt(e))
      return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", qt(e)), Tt(e);
  }
  var kr = 0, On = 1, cr = 2, Bt = 3, Tr = 4, Da = 5, Oa = 6, ue = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = ue + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Be = new RegExp("^[" + ue + "][" + xe + "]*$"), ft = {}, pt = {};
  function nn(e) {
    return ut.call(pt, e) ? !0 : ut.call(ft, e) ? !1 : Be.test(e) ? (pt[e] = !0, !0) : (ft[e] = !0, d("Invalid attribute name: `%s`", e), !1);
  }
  function jt(e, t, r) {
    return t !== null ? t.type === kr : r ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function Jn(e, t, r, i) {
    if (r !== null && r.type === kr)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (i)
          return !1;
        if (r !== null)
          return !r.acceptsBooleans;
        var s = e.toLowerCase().slice(0, 5);
        return s !== "data-" && s !== "aria-";
      }
      default:
        return !1;
    }
  }
  function Ct(e, t, r, i) {
    if (t === null || typeof t > "u" || Jn(e, t, r, i))
      return !0;
    if (i)
      return !1;
    if (r !== null)
      switch (r.type) {
        case Bt:
          return !t;
        case Tr:
          return t === !1;
        case Da:
          return isNaN(t);
        case Oa:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function dr(e) {
    return Dt.hasOwnProperty(e) ? Dt[e] : null;
  }
  function $t(e, t, r, i, s, u, f) {
    this.acceptsBooleans = t === cr || t === Bt || t === Tr, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = f;
  }
  var Dt = {}, oa = [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ];
  oa.forEach(function(e) {
    Dt[e] = new $t(
      e,
      kr,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0], r = e[1];
    Dt[t] = new $t(
      t,
      On,
      !1,
      // mustUseProperty
      r,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Dt[e] = new $t(
      e,
      cr,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Dt[e] = new $t(
      e,
      cr,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach(function(e) {
    Dt[e] = new $t(
      e,
      Bt,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    Dt[e] = new $t(
      e,
      Bt,
      !0,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    Dt[e] = new $t(
      e,
      Tr,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    Dt[e] = new $t(
      e,
      Oa,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["rowSpan", "start"].forEach(function(e) {
    Dt[e] = new $t(
      e,
      Da,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Ur = /[\-\:]([a-z])/g, Qi = function(e) {
    return e[1].toUpperCase();
  };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Ur, Qi);
    Dt[t] = new $t(
      t,
      On,
      !1,
      // mustUseProperty
      e,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Ur, Qi);
    Dt[t] = new $t(
      t,
      On,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Ur, Qi);
    Dt[t] = new $t(
      t,
      On,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Dt[e] = new $t(
      e,
      On,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Uo = "xlinkHref";
  Dt[Uo] = new $t(
    "xlinkHref",
    On,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    Dt[e] = new $t(
      e,
      On,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
    );
  });
  var ol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Xi = !1;
  function Ji(e) {
    !Xi && ol.test(e) && (Xi = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function La(e, t, r, i) {
    if (i.mustUseProperty) {
      var s = i.propertyName;
      return e[s];
    } else {
      Fn(r, t), i.sanitizeURL && Ji("" + r);
      var u = i.attributeName, f = null;
      if (i.type === Tr) {
        if (e.hasAttribute(u)) {
          var h = e.getAttribute(u);
          return h === "" ? !0 : Ct(t, r, i, !1) ? h : h === "" + r ? r : h;
        }
      } else if (e.hasAttribute(u)) {
        if (Ct(t, r, i, !1))
          return e.getAttribute(u);
        if (i.type === Bt)
          return r;
        f = e.getAttribute(u);
      }
      return Ct(t, r, i, !1) ? f === null ? r : f : f === "" + r ? r : f;
    }
  }
  function fi(e, t, r, i) {
    {
      if (!nn(t))
        return;
      if (!e.hasAttribute(t))
        return r === void 0 ? void 0 : null;
      var s = e.getAttribute(t);
      return Fn(r, t), s === "" + r ? r : s;
    }
  }
  function Aa(e, t, r, i) {
    var s = dr(t);
    if (!jt(t, s, i)) {
      if (Ct(t, r, s, i) && (r = null), i || s === null) {
        if (nn(t)) {
          var u = t;
          r === null ? e.removeAttribute(u) : (Fn(r, t), e.setAttribute(u, "" + r));
        }
        return;
      }
      var f = s.mustUseProperty;
      if (f) {
        var h = s.propertyName;
        if (r === null) {
          var m = s.type;
          e[h] = m === Bt ? !1 : "";
        } else
          e[h] = r;
        return;
      }
      var S = s.attributeName, x = s.attributeNamespace;
      if (r === null)
        e.removeAttribute(S);
      else {
        var A = s.type, L;
        A === Bt || A === Tr && r === !0 ? L = "" : (Fn(r, S), L = "" + r, s.sanitizeURL && Ji(L.toString())), x ? e.setAttributeNS(x, S, L) : e.setAttribute(S, L);
      }
    }
  }
  var sa = Symbol.for("react.element"), Fr = Symbol.for("react.portal"), la = Symbol.for("react.fragment"), eo = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), X = Symbol.for("react.provider"), ie = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), Ue = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), rn = Symbol.for("react.scope"), Ot = Symbol.for("react.debug_trace_mode"), Lt = Symbol.for("react.offscreen"), Ln = Symbol.for("react.legacy_hidden"), ua = Symbol.for("react.cache"), Fo = Symbol.for("react.tracing_marker"), er = Symbol.iterator, dp = "@@iterator";
  function Ma(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = er && e[er] || e[dp];
    return typeof t == "function" ? t : null;
  }
  var Ye = Object.assign, to = 0, pi, sl, ll, ul, cl, dl, fl;
  function pl() {
  }
  pl.__reactDisabledLog = !0;
  function vc() {
    {
      if (to === 0) {
        pi = console.log, sl = console.info, ll = console.warn, ul = console.error, cl = console.group, dl = console.groupCollapsed, fl = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: pl,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      to++;
    }
  }
  function fp() {
    {
      if (to--, to === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Ye({}, e, {
            value: pi
          }),
          info: Ye({}, e, {
            value: sl
          }),
          warn: Ye({}, e, {
            value: ll
          }),
          error: Ye({}, e, {
            value: ul
          }),
          group: Ye({}, e, {
            value: cl
          }),
          groupCollapsed: Ye({}, e, {
            value: dl
          }),
          groupEnd: Ye({}, e, {
            value: fl
          })
        });
      }
      to < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var hl = o.ReactCurrentDispatcher, no;
  function $r(e, t, r) {
    {
      if (no === void 0)
        try {
          throw Error();
        } catch (s) {
          var i = s.stack.trim().match(/\n( *(at )?)/);
          no = i && i[1] || "";
        }
      return `
` + no + e;
    }
  }
  var hi = !1, vi;
  {
    var Vo = typeof WeakMap == "function" ? WeakMap : Map;
    vi = new Vo();
  }
  function vl(e, t) {
    if (!e || hi)
      return "";
    {
      var r = vi.get(e);
      if (r !== void 0)
        return r;
    }
    var i;
    hi = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    u = hl.current, hl.current = null, vc();
    try {
      if (t) {
        var f = function() {
          throw Error();
        };
        if (Object.defineProperty(f.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(f, []);
          } catch (H) {
            i = H;
          }
          Reflect.construct(e, [], f);
        } else {
          try {
            f.call();
          } catch (H) {
            i = H;
          }
          e.call(f.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (H) {
          i = H;
        }
        e();
      }
    } catch (H) {
      if (H && i && typeof H.stack == "string") {
        for (var h = H.stack.split(`
`), m = i.stack.split(`
`), S = h.length - 1, x = m.length - 1; S >= 1 && x >= 0 && h[S] !== m[x]; )
          x--;
        for (; S >= 1 && x >= 0; S--, x--)
          if (h[S] !== m[x]) {
            if (S !== 1 || x !== 1)
              do
                if (S--, x--, x < 0 || h[S] !== m[x]) {
                  var A = `
` + h[S].replace(" at new ", " at ");
                  return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && vi.set(e, A), A;
                }
              while (S >= 1 && x >= 0);
            break;
          }
      }
    } finally {
      hi = !1, hl.current = u, fp(), Error.prepareStackTrace = s;
    }
    var L = e ? e.displayName || e.name : "", V = L ? $r(L) : "";
    return typeof e == "function" && vi.set(e, V), V;
  }
  function mc(e, t, r) {
    return vl(e, !0);
  }
  function ml(e, t, r) {
    return vl(e, !1);
  }
  function pp(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function mi(e, t, r) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return vl(e, pp(e));
    if (typeof e == "string")
      return $r(e);
    switch (e) {
      case Ge:
        return $r("Suspense");
      case et:
        return $r("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case me:
          return ml(e.render);
        case Ue:
          return mi(e.type, t, r);
        case ke: {
          var i = e, s = i._payload, u = i._init;
          try {
            return mi(u(s), t, r);
          } catch {
          }
        }
      }
    return "";
  }
  function gc(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case k:
        return $r(e.type);
      case J:
        return $r("Lazy");
      case j:
        return $r("Suspense");
      case re:
        return $r("SuspenseList");
      case w:
      case E:
      case N:
        return ml(e.type);
      case P:
        return ml(e.type.render);
      case b:
        return mc(e.type);
      default:
        return "";
    }
  }
  function gl(e) {
    try {
      var t = "", r = e;
      do
        t += gc(r), r = r.return;
      while (r);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function Ho(e, t, r) {
    var i = e.displayName;
    if (i)
      return i;
    var s = t.displayName || t.name || "";
    return s !== "" ? r + "(" + s + ")" : r;
  }
  function yc(e) {
    return e.displayName || "Context";
  }
  function it(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case la:
        return "Fragment";
      case Fr:
        return "Portal";
      case D:
        return "Profiler";
      case eo:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ie:
          var t = e;
          return yc(t) + ".Consumer";
        case X:
          var r = e;
          return yc(r._context) + ".Provider";
        case me:
          return Ho(e, e.render, "ForwardRef");
        case Ue:
          var i = e.displayName || null;
          return i !== null ? i : it(e.type) || "Memo";
        case ke: {
          var s = e, u = s._payload, f = s._init;
          try {
            return it(f(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function yl(e, t, r) {
    var i = t.displayName || t.name || "";
    return e.displayName || (i !== "" ? r + "(" + i + ")" : r);
  }
  function bl(e) {
    return e.displayName || "Context";
  }
  function ze(e) {
    var t = e.tag, r = e.type;
    switch (t) {
      case se:
        return "Cache";
      case M:
        var i = r;
        return bl(i) + ".Consumer";
      case q:
        var s = r;
        return bl(s._context) + ".Provider";
      case ne:
        return "DehydratedFragment";
      case P:
        return yl(r, r.render, "ForwardRef");
      case O:
        return "Fragment";
      case k:
        return r;
      case R:
        return "Portal";
      case _:
        return "Root";
      case T:
        return "Text";
      case J:
        return it(r);
      case z:
        return r === eo ? "StrictMode" : "Mode";
      case le:
        return "Offscreen";
      case Z:
        return "Profiler";
      case we:
        return "Scope";
      case j:
        return "Suspense";
      case re:
        return "SuspenseList";
      case ge:
        return "TracingMarker";
      case b:
      case w:
      case Ce:
      case E:
      case I:
      case N:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        break;
    }
    return null;
  }
  var bc = o.ReactDebugCurrentFrame, An = null, ro = !1;
  function gi() {
    {
      if (An === null)
        return null;
      var e = An._debugOwner;
      if (e !== null && typeof e < "u")
        return ze(e);
    }
    return null;
  }
  function Cc() {
    return An === null ? "" : gl(An);
  }
  function hn() {
    bc.getCurrentStack = null, An = null, ro = !1;
  }
  function Nt(e) {
    bc.getCurrentStack = e === null ? null : Cc, An = e, ro = !1;
  }
  function wc() {
    return An;
  }
  function fr(e) {
    ro = e;
  }
  function tr(e) {
    return "" + e;
  }
  function ca(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return Vn(e), e;
      default:
        return "";
    }
  }
  var hp = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function Bo(e, t) {
    hp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function ao(e) {
    var t = e.type, r = e.nodeName;
    return r && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Sc(e) {
    return e._valueTracker;
  }
  function yi(e) {
    e._valueTracker = null;
  }
  function _c(e) {
    var t = "";
    return e && (ao(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function vp(e) {
    var t = ao(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    Vn(e[t]);
    var i = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof r > "u" || typeof r.get != "function" || typeof r.set != "function")) {
      var s = r.get, u = r.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(h) {
          Vn(h), i = "" + h, u.call(this, h);
        }
      }), Object.defineProperty(e, t, {
        enumerable: r.enumerable
      });
      var f = {
        getValue: function() {
          return i;
        },
        setValue: function(h) {
          Vn(h), i = "" + h;
        },
        stopTracking: function() {
          yi(e), delete e[t];
        }
      };
      return f;
    }
  }
  function qa(e) {
    Sc(e) || (e._valueTracker = vp(e));
  }
  function jo(e) {
    if (!e)
      return !1;
    var t = Sc(e);
    if (!t)
      return !0;
    var r = t.getValue(), i = _c(e);
    return i !== r ? (t.setValue(i), !0) : !1;
  }
  function bi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Go = !1, xc = !1, Ec = !1, Rc = !1;
  function kc(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function g(e, t) {
    var r = e, i = t.checked, s = Ye({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? r._wrapperState.initialChecked
    });
    return s;
  }
  function $(e, t) {
    Bo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !xc && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", gi() || "A component", t.type), xc = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Go && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", gi() || "A component", t.type), Go = !0);
    var r = e, i = t.defaultValue == null ? "" : t.defaultValue;
    r._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: ca(t.value != null ? t.value : i),
      controlled: kc(t)
    };
  }
  function B(e, t) {
    var r = e, i = t.checked;
    i != null && Aa(r, "checked", i, !1);
  }
  function G(e, t) {
    var r = e;
    {
      var i = kc(t);
      !r._wrapperState.controlled && i && !Rc && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rc = !0), r._wrapperState.controlled && !i && !Ec && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ec = !0);
    }
    B(e, t);
    var s = ca(t.value), u = t.type;
    if (s != null)
      u === "number" ? (s === 0 && r.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      r.value != s) && (r.value = tr(s)) : r.value !== tr(s) && (r.value = tr(s));
    else if (u === "submit" || u === "reset") {
      r.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Le(r, t.type, s) : t.hasOwnProperty("defaultValue") && Le(r, t.type, ca(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
  }
  function te(e, t, r) {
    var i = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type, u = s === "submit" || s === "reset";
      if (u && (t.value === void 0 || t.value === null))
        return;
      var f = tr(i._wrapperState.initialValue);
      r || f !== i.value && (i.value = f), i.defaultValue = f;
    }
    var h = i.name;
    h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
  }
  function De(e, t) {
    var r = e;
    G(r, t), be(r, t);
  }
  function be(e, t) {
    var r = t.name;
    if (t.type === "radio" && r != null) {
      for (var i = e; i.parentNode; )
        i = i.parentNode;
      Fn(r, "name");
      for (var s = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), u = 0; u < s.length; u++) {
        var f = s[u];
        if (!(f === e || f.form !== e.form)) {
          var h = pd(f);
          if (!h)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          jo(f), G(f, h);
        }
      }
    }
  }
  function Le(e, t, r) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || bi(e.ownerDocument) !== e) && (r == null ? e.defaultValue = tr(e._wrapperState.initialValue) : e.defaultValue !== tr(r) && (e.defaultValue = tr(r)));
  }
  var We = !1, ht = !1, wt = !1;
  function St(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? n.Children.forEach(t.children, function(r) {
      r != null && (typeof r == "string" || typeof r == "number" || ht || (ht = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (wt || (wt = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !We && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), We = !0);
  }
  function At(e, t) {
    t.value != null && e.setAttribute("value", tr(ca(t.value)));
  }
  var Vt = Array.isArray;
  function ot(e) {
    return Vt(e);
  }
  var Ci;
  Ci = !1;
  function Yo() {
    var e = gi();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var Cl = ["value", "defaultValue"];
  function mp(e) {
    {
      Bo("select", e);
      for (var t = 0; t < Cl.length; t++) {
        var r = Cl[t];
        if (e[r] != null) {
          var i = ot(e[r]);
          e.multiple && !i ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", r, Yo()) : !e.multiple && i && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", r, Yo());
        }
      }
    }
  }
  function za(e, t, r, i) {
    var s = e.options;
    if (t) {
      for (var u = r, f = {}, h = 0; h < u.length; h++)
        f["$" + u[h]] = !0;
      for (var m = 0; m < s.length; m++) {
        var S = f.hasOwnProperty("$" + s[m].value);
        s[m].selected !== S && (s[m].selected = S), S && i && (s[m].defaultSelected = !0);
      }
    } else {
      for (var x = tr(ca(r)), A = null, L = 0; L < s.length; L++) {
        if (s[L].value === x) {
          s[L].selected = !0, i && (s[L].defaultSelected = !0);
          return;
        }
        A === null && !s[L].disabled && (A = s[L]);
      }
      A !== null && (A.selected = !0);
    }
  }
  function wl(e, t) {
    return Ye({}, t, {
      value: void 0
    });
  }
  function Sl(e, t) {
    var r = e;
    mp(t), r._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !Ci && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ci = !0);
  }
  function gp(e, t) {
    var r = e;
    r.multiple = !!t.multiple;
    var i = t.value;
    i != null ? za(r, !!t.multiple, i, !1) : t.defaultValue != null && za(r, !!t.multiple, t.defaultValue, !0);
  }
  function ZS(e, t) {
    var r = e, i = r._wrapperState.wasMultiple;
    r._wrapperState.wasMultiple = !!t.multiple;
    var s = t.value;
    s != null ? za(r, !!t.multiple, s, !1) : i !== !!t.multiple && (t.defaultValue != null ? za(r, !!t.multiple, t.defaultValue, !0) : za(r, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function QS(e, t) {
    var r = e, i = t.value;
    i != null && za(r, !!t.multiple, i, !1);
  }
  var Iy = !1;
  function yp(e, t) {
    var r = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var i = Ye({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: tr(r._wrapperState.initialValue)
    });
    return i;
  }
  function Ny(e, t) {
    var r = e;
    Bo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Iy && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", gi() || "A component"), Iy = !0);
    var i = t.value;
    if (i == null) {
      var s = t.children, u = t.defaultValue;
      if (s != null) {
        d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (u != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (ot(s)) {
            if (s.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            s = s[0];
          }
          u = s;
        }
      }
      u == null && (u = ""), i = u;
    }
    r._wrapperState = {
      initialValue: ca(i)
    };
  }
  function Py(e, t) {
    var r = e, i = ca(t.value), s = ca(t.defaultValue);
    if (i != null) {
      var u = tr(i);
      u !== r.value && (r.value = u), t.defaultValue == null && r.defaultValue !== u && (r.defaultValue = u);
    }
    s != null && (r.defaultValue = tr(s));
  }
  function Uy(e, t) {
    var r = e, i = r.textContent;
    i === r._wrapperState.initialValue && i !== "" && i !== null && (r.value = i);
  }
  function XS(e, t) {
    Py(e, t);
  }
  var Ia = "http://www.w3.org/1999/xhtml", JS = "http://www.w3.org/1998/Math/MathML", bp = "http://www.w3.org/2000/svg";
  function Cp(e) {
    switch (e) {
      case "svg":
        return bp;
      case "math":
        return JS;
      default:
        return Ia;
    }
  }
  function wp(e, t) {
    return e == null || e === Ia ? Cp(t) : e === bp && t === "foreignObject" ? Ia : e;
  }
  var e6 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, i, s);
      });
    } : e;
  }, Tc, Fy = e6(function(e, t) {
    if (e.namespaceURI === bp && !("innerHTML" in e)) {
      Tc = Tc || document.createElement("div"), Tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var r = Tc.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; r.firstChild; )
        e.appendChild(r.firstChild);
      return;
    }
    e.innerHTML = t;
  }), nr = 1, Na = 3, Kt = 8, Pa = 9, Sp = 11, $c = function(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === Na) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, t6 = {
    animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
    background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
    backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
    border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
    borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
    borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
    borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
    borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
    borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
    borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
    borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
    borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
    borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
    borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
    borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
    columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
    columns: ["columnCount", "columnWidth"],
    flex: ["flexBasis", "flexGrow", "flexShrink"],
    flexFlow: ["flexDirection", "flexWrap"],
    font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
    fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
    gap: ["columnGap", "rowGap"],
    grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
    gridColumn: ["gridColumnEnd", "gridColumnStart"],
    gridColumnGap: ["columnGap"],
    gridGap: ["columnGap", "rowGap"],
    gridRow: ["gridRowEnd", "gridRowStart"],
    gridRowGap: ["rowGap"],
    gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    marker: ["markerEnd", "markerMid", "markerStart"],
    mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
    maskPosition: ["maskPositionX", "maskPositionY"],
    outline: ["outlineColor", "outlineStyle", "outlineWidth"],
    overflow: ["overflowX", "overflowY"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    placeContent: ["alignContent", "justifyContent"],
    placeItems: ["alignItems", "justifyItems"],
    placeSelf: ["alignSelf", "justifySelf"],
    textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
    textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
    transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
    wordWrap: ["overflowWrap"]
  }, _l = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  };
  function n6(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var r6 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_l).forEach(function(e) {
    r6.forEach(function(t) {
      _l[n6(t, e)] = _l[e];
    });
  });
  function _p(e, t, r) {
    var i = t == null || typeof t == "boolean" || t === "";
    return i ? "" : !r && typeof t == "number" && t !== 0 && !(_l.hasOwnProperty(e) && _l[e]) ? t + "px" : (Pr(t, e), ("" + t).trim());
  }
  var a6 = /([A-Z])/g, i6 = /^ms-/;
  function o6(e) {
    return e.replace(a6, "-$1").toLowerCase().replace(i6, "-ms-");
  }
  var Vy = function() {
  };
  {
    var s6 = /^(?:webkit|moz|o)[A-Z]/, l6 = /^-ms-/, u6 = /-(.)/g, Hy = /;\s*$/, Wo = {}, xp = {}, By = !1, jy = !1, c6 = function(e) {
      return e.replace(u6, function(t, r) {
        return r.toUpperCase();
      });
    }, d6 = function(e) {
      Wo.hasOwnProperty(e) && Wo[e] || (Wo[e] = !0, d(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        c6(e.replace(l6, "ms-"))
      ));
    }, f6 = function(e) {
      Wo.hasOwnProperty(e) && Wo[e] || (Wo[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, p6 = function(e, t) {
      xp.hasOwnProperty(t) && xp[t] || (xp[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Hy, "")));
    }, h6 = function(e, t) {
      By || (By = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
    }, v6 = function(e, t) {
      jy || (jy = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    Vy = function(e, t) {
      e.indexOf("-") > -1 ? d6(e) : s6.test(e) ? f6(e) : Hy.test(t) && p6(e, t), typeof t == "number" && (isNaN(t) ? h6(e, t) : isFinite(t) || v6(e, t));
    };
  }
  var m6 = Vy;
  function g6(e) {
    {
      var t = "", r = "";
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var s = e[i];
          if (s != null) {
            var u = i.indexOf("--") === 0;
            t += r + (u ? i : o6(i)) + ":", t += _p(i, s, u), r = ";";
          }
        }
      return t || null;
    }
  }
  function Gy(e, t) {
    var r = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var s = i.indexOf("--") === 0;
        s || m6(i, t[i]);
        var u = _p(i, t[i], s);
        i === "float" && (i = "cssFloat"), s ? r.setProperty(i, u) : r[i] = u;
      }
  }
  function y6(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function Yy(e) {
    var t = {};
    for (var r in e)
      for (var i = t6[r] || [r], s = 0; s < i.length; s++)
        t[i[s]] = r;
    return t;
  }
  function b6(e, t) {
    {
      if (!t)
        return;
      var r = Yy(e), i = Yy(t), s = {};
      for (var u in r) {
        var f = r[u], h = i[u];
        if (h && f !== h) {
          var m = f + "," + h;
          if (s[m])
            continue;
          s[m] = !0, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", y6(e[f]) ? "Removing" : "Updating", f, h);
        }
      }
    }
  }
  var C6 = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
    // NOTE: menuitem's close tag should be omitted, but that causes problems.
  }, w6 = Ye({
    menuitem: !0
  }, C6), S6 = "__html";
  function Ep(e, t) {
    if (t) {
      if (w6[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(S6 in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function io(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Dc = {
    // HTML
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    // SVG
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  }, Wy = {
    "aria-current": 0,
    // state
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    // state
    "aria-hidden": 0,
    // state
    "aria-invalid": 0,
    // state
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    // Widget Attributes
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    // Live Region Attributes
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    // Drag-and-Drop Attributes
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    // Relationship Attributes
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  }, Ko = {}, _6 = new RegExp("^(aria)-[" + xe + "]*$"), x6 = new RegExp("^(aria)[A-Z][" + xe + "]*$");
  function E6(e, t) {
    {
      if (ut.call(Ko, t) && Ko[t])
        return !0;
      if (x6.test(t)) {
        var r = "aria-" + t.slice(4).toLowerCase(), i = Wy.hasOwnProperty(r) ? r : null;
        if (i == null)
          return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ko[t] = !0, !0;
        if (t !== i)
          return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ko[t] = !0, !0;
      }
      if (_6.test(t)) {
        var s = t.toLowerCase(), u = Wy.hasOwnProperty(s) ? s : null;
        if (u == null)
          return Ko[t] = !0, !1;
        if (t !== u)
          return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, u), Ko[t] = !0, !0;
      }
    }
    return !0;
  }
  function R6(e, t) {
    {
      var r = [];
      for (var i in t) {
        var s = E6(e, i);
        s || r.push(i);
      }
      var u = r.map(function(f) {
        return "`" + f + "`";
      }).join(", ");
      r.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e) : r.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e);
    }
  }
  function k6(e, t) {
    io(e, t) || R6(e, t);
  }
  var Ky = !1;
  function T6(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !Ky && (Ky = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var Zy = function() {
  };
  {
    var Hn = {}, Qy = /^on./, $6 = /^on[^A-Z]/, D6 = new RegExp("^(aria)-[" + xe + "]*$"), O6 = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    Zy = function(e, t, r, i) {
      if (ut.call(Hn, t) && Hn[t])
        return !0;
      var s = t.toLowerCase();
      if (s === "onfocusin" || s === "onfocusout")
        return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Hn[t] = !0, !0;
      if (i != null) {
        var u = i.registrationNameDependencies, f = i.possibleRegistrationNames;
        if (u.hasOwnProperty(t))
          return !0;
        var h = f.hasOwnProperty(s) ? f[s] : null;
        if (h != null)
          return d("Invalid event handler property `%s`. Did you mean `%s`?", t, h), Hn[t] = !0, !0;
        if (Qy.test(t))
          return d("Unknown event handler property `%s`. It will be ignored.", t), Hn[t] = !0, !0;
      } else if (Qy.test(t))
        return $6.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Hn[t] = !0, !0;
      if (D6.test(t) || O6.test(t))
        return !0;
      if (s === "innerhtml")
        return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Hn[t] = !0, !0;
      if (s === "aria")
        return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Hn[t] = !0, !0;
      if (s === "is" && r !== null && r !== void 0 && typeof r != "string")
        return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), Hn[t] = !0, !0;
      if (typeof r == "number" && isNaN(r))
        return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Hn[t] = !0, !0;
      var m = dr(t), S = m !== null && m.type === kr;
      if (Dc.hasOwnProperty(s)) {
        var x = Dc[s];
        if (x !== t)
          return d("Invalid DOM property `%s`. Did you mean `%s`?", t, x), Hn[t] = !0, !0;
      } else if (!S && t !== s)
        return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), Hn[t] = !0, !0;
      return typeof r == "boolean" && Jn(t, r, m, !1) ? (r ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), Hn[t] = !0, !0) : S ? !0 : Jn(t, r, m, !1) ? (Hn[t] = !0, !1) : ((r === "false" || r === "true") && m !== null && m.type === Bt && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), Hn[t] = !0), !0);
    };
  }
  var L6 = function(e, t, r) {
    {
      var i = [];
      for (var s in t) {
        var u = Zy(e, s, t[s], r);
        u || i.push(s);
      }
      var f = i.map(function(h) {
        return "`" + h + "`";
      }).join(", ");
      i.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
    }
  };
  function A6(e, t, r) {
    io(e, t) || L6(e, t, r);
  }
  var Xy = 1, Rp = 2, xl = 4, M6 = Xy | Rp | xl, El = null;
  function q6(e) {
    El !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), El = e;
  }
  function z6() {
    El === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), El = null;
  }
  function I6(e) {
    return e === El;
  }
  function kp(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Na ? t.parentNode : t;
  }
  var Tp = null, Zo = null, Qo = null;
  function Jy(e) {
    var t = Ti(e);
    if (t) {
      if (typeof Tp != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var r = t.stateNode;
      if (r) {
        var i = pd(r);
        Tp(t.stateNode, t.type, i);
      }
    }
  }
  function N6(e) {
    Tp = e;
  }
  function e1(e) {
    Zo ? Qo ? Qo.push(e) : Qo = [e] : Zo = e;
  }
  function P6() {
    return Zo !== null || Qo !== null;
  }
  function t1() {
    if (Zo) {
      var e = Zo, t = Qo;
      if (Zo = null, Qo = null, Jy(e), t)
        for (var r = 0; r < t.length; r++)
          Jy(t[r]);
    }
  }
  var n1 = function(e, t) {
    return e(t);
  }, r1 = function() {
  }, $p = !1;
  function U6() {
    var e = P6();
    e && (r1(), t1());
  }
  function a1(e, t, r) {
    if ($p)
      return e(t, r);
    $p = !0;
    try {
      return n1(e, t, r);
    } finally {
      $p = !1, U6();
    }
  }
  function F6(e, t, r) {
    n1 = e, r1 = r;
  }
  function V6(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function H6(e, t, r) {
    switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        return !!(r.disabled && V6(t));
      default:
        return !1;
    }
  }
  function Rl(e, t) {
    var r = e.stateNode;
    if (r === null)
      return null;
    var i = pd(r);
    if (i === null)
      return null;
    var s = i[t];
    if (H6(t, e.type, i))
      return null;
    if (s && typeof s != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof s + "` type.");
    return s;
  }
  var Dp = !1;
  if (Je)
    try {
      var kl = {};
      Object.defineProperty(kl, "passive", {
        get: function() {
          Dp = !0;
        }
      }), window.addEventListener("test", kl, kl), window.removeEventListener("test", kl, kl);
    } catch {
      Dp = !1;
    }
  function i1(e, t, r, i, s, u, f, h, m) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, S);
    } catch (x) {
      this.onError(x);
    }
  }
  var o1 = i1;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var Op = document.createElement("react");
    o1 = function(t, r, i, s, u, f, h, m, S) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var x = document.createEvent("Event"), A = !1, L = !0, V = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
      function Y() {
        Op.removeEventListener(W, Ee, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
      }
      var he = Array.prototype.slice.call(arguments, 3);
      function Ee() {
        A = !0, Y(), r.apply(i, he), L = !1;
      }
      var Se, Qe = !1, je = !1;
      function U(F) {
        if (Se = F.error, Qe = !0, Se === null && F.colno === 0 && F.lineno === 0 && (je = !0), F.defaultPrevented && Se != null && typeof Se == "object")
          try {
            Se._suppressLogging = !0;
          } catch {
          }
      }
      var W = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", U), Op.addEventListener(W, Ee, !1), x.initEvent(W, !1, !1), Op.dispatchEvent(x), H && Object.defineProperty(window, "event", H), A && L && (Qe ? je && (Se = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Se = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Se)), window.removeEventListener("error", U), !A)
        return Y(), i1.apply(this, arguments);
    };
  }
  var B6 = o1, Xo = !1, Oc = null, Lc = !1, Lp = null, j6 = {
    onError: function(e) {
      Xo = !0, Oc = e;
    }
  };
  function Ap(e, t, r, i, s, u, f, h, m) {
    Xo = !1, Oc = null, B6.apply(j6, arguments);
  }
  function G6(e, t, r, i, s, u, f, h, m) {
    if (Ap.apply(this, arguments), Xo) {
      var S = Mp();
      Lc || (Lc = !0, Lp = S);
    }
  }
  function Y6() {
    if (Lc) {
      var e = Lp;
      throw Lc = !1, Lp = null, e;
    }
  }
  function W6() {
    return Xo;
  }
  function Mp() {
    if (Xo) {
      var e = Oc;
      return Xo = !1, Oc = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Jo(e) {
    return e._reactInternals;
  }
  function K6(e) {
    return e._reactInternals !== void 0;
  }
  function Z6(e, t) {
    e._reactInternals = t;
  }
  var Te = (
    /*                      */
    0
  ), es = (
    /*                */
    1
  ), Zt = (
    /*                    */
    2
  ), Xe = (
    /*                       */
    4
  ), oo = (
    /*                */
    16
  ), Tl = (
    /*                 */
    32
  ), qp = (
    /*                     */
    64
  ), st = (
    /*                   */
    128
  ), Ua = (
    /*            */
    256
  ), wi = (
    /*                          */
    512
  ), so = (
    /*                     */
    1024
  ), Vr = (
    /*                      */
    2048
  ), Fa = (
    /*                    */
    4096
  ), lo = (
    /*                   */
    8192
  ), Ac = (
    /*             */
    16384
  ), Q6 = Vr | Xe | qp | wi | so | Ac, X6 = (
    /*               */
    32767
  ), $l = (
    /*                   */
    32768
  ), Bn = (
    /*                */
    65536
  ), zp = (
    /* */
    131072
  ), s1 = (
    /*                       */
    1048576
  ), Ip = (
    /*                    */
    2097152
  ), uo = (
    /*                 */
    4194304
  ), Np = (
    /*                */
    8388608
  ), Va = (
    /*               */
    16777216
  ), Mc = (
    /*              */
    33554432
  ), Pp = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Xe | so | 0
  ), Up = Zt | Xe | oo | Tl | wi | Fa | lo, Dl = Xe | qp | wi | lo, ts = Vr | oo, Ha = uo | Np | Ip, J6 = o.ReactCurrentOwner;
  function co(e) {
    var t = e, r = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var i = t;
      do
        t = i, (t.flags & (Zt | Fa)) !== Te && (r = t.return), i = t.return;
      while (i);
    }
    return t.tag === _ ? r : null;
  }
  function l1(e) {
    if (e.tag === j) {
      var t = e.memoizedState;
      if (t === null) {
        var r = e.alternate;
        r !== null && (t = r.memoizedState);
      }
      if (t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function u1(e) {
    return e.tag === _ ? e.stateNode.containerInfo : null;
  }
  function e3(e) {
    return co(e) === e;
  }
  function t3(e) {
    {
      var t = J6.current;
      if (t !== null && t.tag === b) {
        var r = t, i = r.stateNode;
        i._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ze(r) || "A component"), i._warnedAboutRefsInRender = !0;
      }
    }
    var s = Jo(e);
    return s ? co(s) === s : !1;
  }
  function c1(e) {
    if (co(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function d1(e) {
    var t = e.alternate;
    if (!t) {
      var r = co(e);
      if (r === null)
        throw new Error("Unable to find node on an unmounted component.");
      return r !== e ? null : e;
    }
    for (var i = e, s = t; ; ) {
      var u = i.return;
      if (u === null)
        break;
      var f = u.alternate;
      if (f === null) {
        var h = u.return;
        if (h !== null) {
          i = s = h;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (var m = u.child; m; ) {
          if (m === i)
            return c1(u), e;
          if (m === s)
            return c1(u), t;
          m = m.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (i.return !== s.return)
        i = u, s = f;
      else {
        for (var S = !1, x = u.child; x; ) {
          if (x === i) {
            S = !0, i = u, s = f;
            break;
          }
          if (x === s) {
            S = !0, s = u, i = f;
            break;
          }
          x = x.sibling;
        }
        if (!S) {
          for (x = f.child; x; ) {
            if (x === i) {
              S = !0, i = f, s = u;
              break;
            }
            if (x === s) {
              S = !0, s = f, i = u;
              break;
            }
            x = x.sibling;
          }
          if (!S)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (i.alternate !== s)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (i.tag !== _)
      throw new Error("Unable to find node on an unmounted component.");
    return i.stateNode.current === i ? e : t;
  }
  function f1(e) {
    var t = d1(e);
    return t !== null ? p1(t) : null;
  }
  function p1(e) {
    if (e.tag === k || e.tag === T)
      return e;
    for (var t = e.child; t !== null; ) {
      var r = p1(t);
      if (r !== null)
        return r;
      t = t.sibling;
    }
    return null;
  }
  function n3(e) {
    var t = d1(e);
    return t !== null ? h1(t) : null;
  }
  function h1(e) {
    if (e.tag === k || e.tag === T)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== R) {
        var r = h1(t);
        if (r !== null)
          return r;
      }
      t = t.sibling;
    }
    return null;
  }
  var v1 = a.unstable_scheduleCallback, r3 = a.unstable_cancelCallback, a3 = a.unstable_shouldYield, i3 = a.unstable_requestPaint, vn = a.unstable_now, o3 = a.unstable_getCurrentPriorityLevel, qc = a.unstable_ImmediatePriority, Fp = a.unstable_UserBlockingPriority, fo = a.unstable_NormalPriority, s3 = a.unstable_LowPriority, Vp = a.unstable_IdlePriority, l3 = a.unstable_yieldValue, u3 = a.unstable_setDisableYieldValue, ns = null, Mn = null, fe = null, da = !1, Hr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function c3(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      Ft && (e = Ye({}, e, {
        getLaneLabelMap: m3,
        injectProfilingHooks: v3
      })), ns = t.inject(e), Mn = t;
    } catch (r) {
      d("React instrumentation encountered an error: %s.", r);
    }
    return !!t.checkDCE;
  }
  function d3(e, t) {
    if (Mn && typeof Mn.onScheduleFiberRoot == "function")
      try {
        Mn.onScheduleFiberRoot(ns, e, t);
      } catch (r) {
        da || (da = !0, d("React instrumentation encountered an error: %s", r));
      }
  }
  function f3(e, t) {
    if (Mn && typeof Mn.onCommitFiberRoot == "function")
      try {
        var r = (e.current.flags & st) === st;
        if (Wt) {
          var i;
          switch (t) {
            case vr:
              i = qc;
              break;
            case ja:
              i = Fp;
              break;
            case Ga:
              i = fo;
              break;
            case Vc:
              i = Vp;
              break;
            default:
              i = fo;
              break;
          }
          Mn.onCommitFiberRoot(ns, e, i, r);
        }
      } catch (s) {
        da || (da = !0, d("React instrumentation encountered an error: %s", s));
      }
  }
  function p3(e) {
    if (Mn && typeof Mn.onPostCommitFiberRoot == "function")
      try {
        Mn.onPostCommitFiberRoot(ns, e);
      } catch (t) {
        da || (da = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function h3(e) {
    if (Mn && typeof Mn.onCommitFiberUnmount == "function")
      try {
        Mn.onCommitFiberUnmount(ns, e);
      } catch (t) {
        da || (da = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function mn(e) {
    if (typeof l3 == "function" && (u3(e), c(e)), Mn && typeof Mn.setStrictMode == "function")
      try {
        Mn.setStrictMode(ns, e);
      } catch (t) {
        da || (da = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function v3(e) {
    fe = e;
  }
  function m3() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, r = 0; r < Bp; r++) {
        var i = z3(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
  }
  function g3(e) {
    fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
  }
  function m1() {
    fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
  }
  function Ol(e) {
    fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
  }
  function rs() {
    fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
  }
  function y3(e) {
    fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
  }
  function b3() {
    fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
  }
  function C3(e) {
    fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
  }
  function w3() {
    fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
  }
  function S3(e) {
    fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
  }
  function _3() {
    fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
  }
  function g1(e) {
    fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
  }
  function y1() {
    fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
  }
  function x3(e, t, r) {
    fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, r);
  }
  function E3(e, t, r) {
    fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, r);
  }
  function R3(e) {
    fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
  }
  function k3() {
    fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
  }
  function T3(e) {
    fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
  }
  function $3() {
    fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
  }
  function b1(e) {
    fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
  }
  function D3() {
    fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
  }
  function C1() {
    fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
  }
  function O3(e) {
    fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
  }
  function L3(e, t) {
    fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
  }
  function Hp(e, t) {
    fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
  }
  var $e = (
    /*                         */
    0
  ), Ke = (
    /*                 */
    1
  ), vt = (
    /*                    */
    2
  ), Qt = (
    /*               */
    8
  ), fa = (
    /*              */
    16
  ), w1 = Math.clz32 ? Math.clz32 : q3, A3 = Math.log, M3 = Math.LN2;
  function q3(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (A3(t) / M3 | 0) | 0;
  }
  var Bp = 31, Q = (
    /*                        */
    0
  ), gn = (
    /*                          */
    0
  ), Ae = (
    /*                        */
    1
  ), as = (
    /*    */
    2
  ), Ba = (
    /*             */
    4
  ), po = (
    /*            */
    8
  ), pa = (
    /*                     */
    16
  ), Ll = (
    /*                */
    32
  ), is = (
    /*                       */
    4194240
  ), Al = (
    /*                        */
    64
  ), jp = (
    /*                        */
    128
  ), Gp = (
    /*                        */
    256
  ), Yp = (
    /*                        */
    512
  ), Wp = (
    /*                        */
    1024
  ), Kp = (
    /*                        */
    2048
  ), Zp = (
    /*                        */
    4096
  ), Qp = (
    /*                        */
    8192
  ), Xp = (
    /*                        */
    16384
  ), Jp = (
    /*                       */
    32768
  ), eh = (
    /*                       */
    65536
  ), th = (
    /*                       */
    131072
  ), nh = (
    /*                       */
    262144
  ), rh = (
    /*                       */
    524288
  ), ah = (
    /*                       */
    1048576
  ), ih = (
    /*                       */
    2097152
  ), zc = (
    /*                            */
    130023424
  ), os = (
    /*                             */
    4194304
  ), oh = (
    /*                             */
    8388608
  ), sh = (
    /*                             */
    16777216
  ), lh = (
    /*                             */
    33554432
  ), uh = (
    /*                             */
    67108864
  ), S1 = os, Ml = (
    /*          */
    134217728
  ), _1 = (
    /*                          */
    268435455
  ), ql = (
    /*               */
    268435456
  ), ho = (
    /*                        */
    536870912
  ), pr = (
    /*                   */
    1073741824
  );
  function z3(e) {
    {
      if (e & Ae)
        return "Sync";
      if (e & as)
        return "InputContinuousHydration";
      if (e & Ba)
        return "InputContinuous";
      if (e & po)
        return "DefaultHydration";
      if (e & pa)
        return "Default";
      if (e & Ll)
        return "TransitionHydration";
      if (e & is)
        return "Transition";
      if (e & zc)
        return "Retry";
      if (e & Ml)
        return "SelectiveHydration";
      if (e & ql)
        return "IdleHydration";
      if (e & ho)
        return "Idle";
      if (e & pr)
        return "Offscreen";
    }
  }
  var Et = -1, Ic = Al, Nc = os;
  function zl(e) {
    switch (vo(e)) {
      case Ae:
        return Ae;
      case as:
        return as;
      case Ba:
        return Ba;
      case po:
        return po;
      case pa:
        return pa;
      case Ll:
        return Ll;
      case Al:
      case jp:
      case Gp:
      case Yp:
      case Wp:
      case Kp:
      case Zp:
      case Qp:
      case Xp:
      case Jp:
      case eh:
      case th:
      case nh:
      case rh:
      case ah:
      case ih:
        return e & is;
      case os:
      case oh:
      case sh:
      case lh:
      case uh:
        return e & zc;
      case Ml:
        return Ml;
      case ql:
        return ql;
      case ho:
        return ho;
      case pr:
        return pr;
      default:
        return d("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function Pc(e, t) {
    var r = e.pendingLanes;
    if (r === Q)
      return Q;
    var i = Q, s = e.suspendedLanes, u = e.pingedLanes, f = r & _1;
    if (f !== Q) {
      var h = f & ~s;
      if (h !== Q)
        i = zl(h);
      else {
        var m = f & u;
        m !== Q && (i = zl(m));
      }
    } else {
      var S = r & ~s;
      S !== Q ? i = zl(S) : u !== Q && (i = zl(u));
    }
    if (i === Q)
      return Q;
    if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & s) === Q) {
      var x = vo(i), A = vo(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        x >= A || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        x === pa && (A & is) !== Q
      )
        return t;
    }
    (i & Ba) !== Q && (i |= r & pa);
    var L = e.entangledLanes;
    if (L !== Q)
      for (var V = e.entanglements, H = i & L; H > 0; ) {
        var Y = mo(H), he = 1 << Y;
        i |= V[Y], H &= ~he;
      }
    return i;
  }
  function I3(e, t) {
    for (var r = e.eventTimes, i = Et; t > 0; ) {
      var s = mo(t), u = 1 << s, f = r[s];
      f > i && (i = f), t &= ~u;
    }
    return i;
  }
  function N3(e, t) {
    switch (e) {
      case Ae:
      case as:
      case Ba:
        return t + 250;
      case po:
      case pa:
      case Ll:
      case Al:
      case jp:
      case Gp:
      case Yp:
      case Wp:
      case Kp:
      case Zp:
      case Qp:
      case Xp:
      case Jp:
      case eh:
      case th:
      case nh:
      case rh:
      case ah:
      case ih:
        return t + 5e3;
      case os:
      case oh:
      case sh:
      case lh:
      case uh:
        return Et;
      case Ml:
      case ql:
      case ho:
      case pr:
        return Et;
      default:
        return d("Should have found matching lanes. This is a bug in React."), Et;
    }
  }
  function P3(e, t) {
    for (var r = e.pendingLanes, i = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, f = r; f > 0; ) {
      var h = mo(f), m = 1 << h, S = u[h];
      S === Et ? ((m & i) === Q || (m & s) !== Q) && (u[h] = N3(m, t)) : S <= t && (e.expiredLanes |= m), f &= ~m;
    }
  }
  function U3(e) {
    return zl(e.pendingLanes);
  }
  function ch(e) {
    var t = e.pendingLanes & ~pr;
    return t !== Q ? t : t & pr ? pr : Q;
  }
  function F3(e) {
    return (e & Ae) !== Q;
  }
  function dh(e) {
    return (e & _1) !== Q;
  }
  function x1(e) {
    return (e & zc) === e;
  }
  function V3(e) {
    var t = Ae | Ba | pa;
    return (e & t) === Q;
  }
  function H3(e) {
    return (e & is) === e;
  }
  function Uc(e, t) {
    var r = as | Ba | po | pa;
    return (t & r) !== Q;
  }
  function B3(e, t) {
    return (t & e.expiredLanes) !== Q;
  }
  function E1(e) {
    return (e & is) !== Q;
  }
  function R1() {
    var e = Ic;
    return Ic <<= 1, (Ic & is) === Q && (Ic = Al), e;
  }
  function j3() {
    var e = Nc;
    return Nc <<= 1, (Nc & zc) === Q && (Nc = os), e;
  }
  function vo(e) {
    return e & -e;
  }
  function Il(e) {
    return vo(e);
  }
  function mo(e) {
    return 31 - w1(e);
  }
  function fh(e) {
    return mo(e);
  }
  function hr(e, t) {
    return (e & t) !== Q;
  }
  function ss(e, t) {
    return (e & t) === t;
  }
  function Fe(e, t) {
    return e | t;
  }
  function Fc(e, t) {
    return e & ~t;
  }
  function k1(e, t) {
    return e & t;
  }
  function cz(e) {
    return e;
  }
  function G3(e, t) {
    return e !== gn && e < t ? e : t;
  }
  function ph(e) {
    for (var t = [], r = 0; r < Bp; r++)
      t.push(e);
    return t;
  }
  function Nl(e, t, r) {
    e.pendingLanes |= t, t !== ho && (e.suspendedLanes = Q, e.pingedLanes = Q);
    var i = e.eventTimes, s = fh(t);
    i[s] = r;
  }
  function Y3(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var r = e.expirationTimes, i = t; i > 0; ) {
      var s = mo(i), u = 1 << s;
      r[s] = Et, i &= ~u;
    }
  }
  function T1(e, t, r) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function W3(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var i = e.entanglements, s = e.eventTimes, u = e.expirationTimes, f = r; f > 0; ) {
      var h = mo(f), m = 1 << h;
      i[h] = Q, s[h] = Et, u[h] = Et, f &= ~m;
    }
  }
  function hh(e, t) {
    for (var r = e.entangledLanes |= t, i = e.entanglements, s = r; s; ) {
      var u = mo(s), f = 1 << u;
      // Is this one of the newly entangled lanes?
      f & t | // Is this lane transitively entangled with the newly entangled lanes?
      i[u] & t && (i[u] |= t), s &= ~f;
    }
  }
  function K3(e, t) {
    var r = vo(t), i;
    switch (r) {
      case Ba:
        i = as;
        break;
      case pa:
        i = po;
        break;
      case Al:
      case jp:
      case Gp:
      case Yp:
      case Wp:
      case Kp:
      case Zp:
      case Qp:
      case Xp:
      case Jp:
      case eh:
      case th:
      case nh:
      case rh:
      case ah:
      case ih:
      case os:
      case oh:
      case sh:
      case lh:
      case uh:
        i = Ll;
        break;
      case ho:
        i = ql;
        break;
      default:
        i = gn;
        break;
    }
    return (i & (e.suspendedLanes | t)) !== gn ? gn : i;
  }
  function $1(e, t, r) {
    if (Hr)
      for (var i = e.pendingUpdatersLaneMap; r > 0; ) {
        var s = fh(r), u = 1 << s, f = i[s];
        f.add(t), r &= ~u;
      }
  }
  function D1(e, t) {
    if (Hr)
      for (var r = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
        var s = fh(t), u = 1 << s, f = r[s];
        f.size > 0 && (f.forEach(function(h) {
          var m = h.alternate;
          (m === null || !i.has(m)) && i.add(h);
        }), f.clear()), t &= ~u;
      }
  }
  function O1(e, t) {
    return null;
  }
  var vr = Ae, ja = Ba, Ga = pa, Vc = ho, Pl = gn;
  function Br() {
    return Pl;
  }
  function yn(e) {
    Pl = e;
  }
  function Z3(e, t) {
    var r = Pl;
    try {
      return Pl = e, t();
    } finally {
      Pl = r;
    }
  }
  function Q3(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function X3(e, t) {
    return e === 0 || e > t ? e : t;
  }
  function vh(e, t) {
    return e !== 0 && e < t;
  }
  function L1(e) {
    var t = vo(e);
    return vh(vr, t) ? vh(ja, t) ? dh(t) ? Ga : Vc : ja : vr;
  }
  function Hc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var A1;
  function J3(e) {
    A1 = e;
  }
  function e7(e) {
    A1(e);
  }
  var mh;
  function t7(e) {
    mh = e;
  }
  var M1;
  function n7(e) {
    M1 = e;
  }
  var q1;
  function r7(e) {
    q1 = e;
  }
  var z1;
  function a7(e) {
    z1 = e;
  }
  var gh = !1, Bc = [], Si = null, _i = null, xi = null, Ul = /* @__PURE__ */ new Map(), Fl = /* @__PURE__ */ new Map(), Ei = [], i7 = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    // Intentionally camelCase
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
    "submit"
  ];
  function o7(e) {
    return i7.indexOf(e) > -1;
  }
  function s7(e, t, r, i, s) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: r,
      nativeEvent: s,
      targetContainers: [i]
    };
  }
  function I1(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Si = null;
        break;
      case "dragenter":
      case "dragleave":
        _i = null;
        break;
      case "mouseover":
      case "mouseout":
        xi = null;
        break;
      case "pointerover":
      case "pointerout": {
        var r = t.pointerId;
        Ul.delete(r);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var i = t.pointerId;
        Fl.delete(i);
        break;
      }
    }
  }
  function Vl(e, t, r, i, s, u) {
    if (e === null || e.nativeEvent !== u) {
      var f = s7(t, r, i, s, u);
      if (t !== null) {
        var h = Ti(t);
        h !== null && mh(h);
      }
      return f;
    }
    e.eventSystemFlags |= i;
    var m = e.targetContainers;
    return s !== null && m.indexOf(s) === -1 && m.push(s), e;
  }
  function l7(e, t, r, i, s) {
    switch (t) {
      case "focusin": {
        var u = s;
        return Si = Vl(Si, e, t, r, i, u), !0;
      }
      case "dragenter": {
        var f = s;
        return _i = Vl(_i, e, t, r, i, f), !0;
      }
      case "mouseover": {
        var h = s;
        return xi = Vl(xi, e, t, r, i, h), !0;
      }
      case "pointerover": {
        var m = s, S = m.pointerId;
        return Ul.set(S, Vl(Ul.get(S) || null, e, t, r, i, m)), !0;
      }
      case "gotpointercapture": {
        var x = s, A = x.pointerId;
        return Fl.set(A, Vl(Fl.get(A) || null, e, t, r, i, x)), !0;
      }
    }
    return !1;
  }
  function N1(e) {
    var t = bo(e.target);
    if (t !== null) {
      var r = co(t);
      if (r !== null) {
        var i = r.tag;
        if (i === j) {
          var s = l1(r);
          if (s !== null) {
            e.blockedOn = s, z1(e.priority, function() {
              M1(r);
            });
            return;
          }
        } else if (i === _) {
          var u = r.stateNode;
          if (Hc(u)) {
            e.blockedOn = u1(r);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function u7(e) {
    for (var t = q1(), r = {
      blockedOn: null,
      target: e,
      priority: t
    }, i = 0; i < Ei.length && vh(t, Ei[i].priority); i++)
      ;
    Ei.splice(i, 0, r), i === 0 && N1(r);
  }
  function jc(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var r = t[0], i = Ch(e.domEventName, e.eventSystemFlags, r, e.nativeEvent);
      if (i === null) {
        var s = e.nativeEvent, u = new s.constructor(s.type, s);
        q6(u), s.target.dispatchEvent(u), z6();
      } else {
        var f = Ti(i);
        return f !== null && mh(f), e.blockedOn = i, !1;
      }
      t.shift();
    }
    return !0;
  }
  function P1(e, t, r) {
    jc(e) && r.delete(t);
  }
  function c7() {
    gh = !1, Si !== null && jc(Si) && (Si = null), _i !== null && jc(_i) && (_i = null), xi !== null && jc(xi) && (xi = null), Ul.forEach(P1), Fl.forEach(P1);
  }
  function Hl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, gh || (gh = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, c7)));
  }
  function Bl(e) {
    if (Bc.length > 0) {
      Hl(Bc[0], e);
      for (var t = 1; t < Bc.length; t++) {
        var r = Bc[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    Si !== null && Hl(Si, e), _i !== null && Hl(_i, e), xi !== null && Hl(xi, e);
    var i = function(h) {
      return Hl(h, e);
    };
    Ul.forEach(i), Fl.forEach(i);
    for (var s = 0; s < Ei.length; s++) {
      var u = Ei[s];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; Ei.length > 0; ) {
      var f = Ei[0];
      if (f.blockedOn !== null)
        break;
      N1(f), f.blockedOn === null && Ei.shift();
    }
  }
  var ls = o.ReactCurrentBatchConfig, yh = !0;
  function U1(e) {
    yh = !!e;
  }
  function d7() {
    return yh;
  }
  function f7(e, t, r) {
    var i = F1(t), s;
    switch (i) {
      case vr:
        s = p7;
        break;
      case ja:
        s = h7;
        break;
      case Ga:
      default:
        s = bh;
        break;
    }
    return s.bind(null, t, r, e);
  }
  function p7(e, t, r, i) {
    var s = Br(), u = ls.transition;
    ls.transition = null;
    try {
      yn(vr), bh(e, t, r, i);
    } finally {
      yn(s), ls.transition = u;
    }
  }
  function h7(e, t, r, i) {
    var s = Br(), u = ls.transition;
    ls.transition = null;
    try {
      yn(ja), bh(e, t, r, i);
    } finally {
      yn(s), ls.transition = u;
    }
  }
  function bh(e, t, r, i) {
    yh && v7(e, t, r, i);
  }
  function v7(e, t, r, i) {
    var s = Ch(e, t, r, i);
    if (s === null) {
      Mh(e, t, i, Gc, r), I1(e, i);
      return;
    }
    if (l7(s, e, t, r, i)) {
      i.stopPropagation();
      return;
    }
    if (I1(e, i), t & xl && o7(e)) {
      for (; s !== null; ) {
        var u = Ti(s);
        u !== null && e7(u);
        var f = Ch(e, t, r, i);
        if (f === null && Mh(e, t, i, Gc, r), f === s)
          break;
        s = f;
      }
      s !== null && i.stopPropagation();
      return;
    }
    Mh(e, t, i, null, r);
  }
  var Gc = null;
  function Ch(e, t, r, i) {
    Gc = null;
    var s = kp(i), u = bo(s);
    if (u !== null) {
      var f = co(u);
      if (f === null)
        u = null;
      else {
        var h = f.tag;
        if (h === j) {
          var m = l1(f);
          if (m !== null)
            return m;
          u = null;
        } else if (h === _) {
          var S = f.stateNode;
          if (Hc(S))
            return u1(f);
          u = null;
        } else
          f !== u && (u = null);
      }
    }
    return Gc = u, null;
  }
  function F1(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return vr;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return ja;
      case "message": {
        var t = o3();
        switch (t) {
          case qc:
            return vr;
          case Fp:
            return ja;
          case fo:
          case s3:
            return Ga;
          case Vp:
            return Vc;
          default:
            return Ga;
        }
      }
      default:
        return Ga;
    }
  }
  function m7(e, t, r) {
    return e.addEventListener(t, r, !1), r;
  }
  function g7(e, t, r) {
    return e.addEventListener(t, r, !0), r;
  }
  function y7(e, t, r, i) {
    return e.addEventListener(t, r, {
      capture: !0,
      passive: i
    }), r;
  }
  function b7(e, t, r, i) {
    return e.addEventListener(t, r, {
      passive: i
    }), r;
  }
  var jl = null, wh = null, Gl = null;
  function C7(e) {
    return jl = e, wh = H1(), !0;
  }
  function w7() {
    jl = null, wh = null, Gl = null;
  }
  function V1() {
    if (Gl)
      return Gl;
    var e, t = wh, r = t.length, i, s = H1(), u = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++)
      ;
    var f = r - e;
    for (i = 1; i <= f && t[r - i] === s[u - i]; i++)
      ;
    var h = i > 1 ? 1 - i : void 0;
    return Gl = s.slice(e, h), Gl;
  }
  function H1() {
    return "value" in jl ? jl.value : jl.textContent;
  }
  function Yc(e) {
    var t, r = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function Wc() {
    return !0;
  }
  function B1() {
    return !1;
  }
  function mr(e) {
    function t(r, i, s, u, f) {
      this._reactName = r, this._targetInst = s, this.type = i, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var h in e)
        if (e.hasOwnProperty(h)) {
          var m = e[h];
          m ? this[h] = m(u) : this[h] = u[h];
        }
      var S = u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1;
      return S ? this.isDefaultPrevented = Wc : this.isDefaultPrevented = B1, this.isPropagationStopped = B1, this;
    }
    return Ye(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Wc);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Wc);
      },
      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function() {
      },
      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: Wc
    }), t;
  }
  var us = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Sh = mr(us), Yl = Ye({}, us, {
    view: 0,
    detail: 0
  }), S7 = mr(Yl), _h, xh, Wl;
  function _7(e) {
    e !== Wl && (Wl && e.type === "mousemove" ? (_h = e.screenX - Wl.screenX, xh = e.screenY - Wl.screenY) : (_h = 0, xh = 0), Wl = e);
  }
  var Kc = Ye({}, Yl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rh,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (_7(e), _h);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : xh;
    }
  }), j1 = mr(Kc), x7 = Ye({}, Kc, {
    dataTransfer: 0
  }), E7 = mr(x7), R7 = Ye({}, Yl, {
    relatedTarget: 0
  }), Eh = mr(R7), k7 = Ye({}, us, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), T7 = mr(k7), $7 = Ye({}, us, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), D7 = mr($7), O7 = Ye({}, us, {
    data: 0
  }), G1 = mr(O7), L7 = G1, A7 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, M7 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  };
  function q7(e) {
    if (e.key) {
      var t = A7[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var r = Yc(e);
      return r === 13 ? "Enter" : String.fromCharCode(r);
    }
    return e.type === "keydown" || e.type === "keyup" ? M7[e.keyCode] || "Unidentified" : "";
  }
  var z7 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function I7(e) {
    var t = this, r = t.nativeEvent;
    if (r.getModifierState)
      return r.getModifierState(e);
    var i = z7[e];
    return i ? !!r[i] : !1;
  }
  function Rh(e) {
    return I7;
  }
  var N7 = Ye({}, Yl, {
    key: q7,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rh,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? Yc(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Yc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), P7 = mr(N7), U7 = Ye({}, Kc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Y1 = mr(U7), F7 = Ye({}, Yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rh
  }), V7 = mr(F7), H7 = Ye({}, us, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), B7 = mr(H7), j7 = Ye({}, Kc, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : (
        // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
        "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      );
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : (
        // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
        "wheelDeltaY" in e ? -e.wheelDeltaY : (
          // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
          "wheelDelta" in e ? -e.wheelDelta : 0
        )
      );
    },
    deltaZ: 0,
    // Browsers without "deltaMode" is reporting in raw wheel delta where one
    // notch on the scroll is always +/- 120, roughly equivalent to pixels.
    // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
    // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
    deltaMode: 0
  }), G7 = mr(j7), Y7 = [9, 13, 27, 32], W1 = 229, kh = Je && "CompositionEvent" in window, Kl = null;
  Je && "documentMode" in document && (Kl = document.documentMode);
  var W7 = Je && "TextEvent" in window && !Kl, K1 = Je && (!kh || Kl && Kl > 8 && Kl <= 11), Z1 = 32, Q1 = String.fromCharCode(Z1);
  function K7() {
    Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ne("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ne("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ne("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var X1 = !1;
  function Z7(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function Q7(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function X7(e, t) {
    return e === "keydown" && t.keyCode === W1;
  }
  function J1(e, t) {
    switch (e) {
      case "keyup":
        return Y7.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== W1;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function e0(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function t0(e) {
    return e.locale === "ko";
  }
  var cs = !1;
  function J7(e, t, r, i, s) {
    var u, f;
    if (kh ? u = Q7(t) : cs ? J1(t, i) && (u = "onCompositionEnd") : X7(t, i) && (u = "onCompositionStart"), !u)
      return null;
    K1 && !t0(i) && (!cs && u === "onCompositionStart" ? cs = C7(s) : u === "onCompositionEnd" && cs && (f = V1()));
    var h = ed(r, u);
    if (h.length > 0) {
      var m = new G1(u, t, null, i, s);
      if (e.push({
        event: m,
        listeners: h
      }), f)
        m.data = f;
      else {
        var S = e0(i);
        S !== null && (m.data = S);
      }
    }
  }
  function e8(e, t) {
    switch (e) {
      case "compositionend":
        return e0(t);
      case "keypress":
        var r = t.which;
        return r !== Z1 ? null : (X1 = !0, Q1);
      case "textInput":
        var i = t.data;
        return i === Q1 && X1 ? null : i;
      default:
        return null;
    }
  }
  function t8(e, t) {
    if (cs) {
      if (e === "compositionend" || !kh && J1(e, t)) {
        var r = V1();
        return w7(), cs = !1, r;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!Z7(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return K1 && !t0(t) ? null : t.data;
      default:
        return null;
    }
  }
  function n8(e, t, r, i, s) {
    var u;
    if (W7 ? u = e8(t, i) : u = t8(t, i), !u)
      return null;
    var f = ed(r, "onBeforeInput");
    if (f.length > 0) {
      var h = new L7("onBeforeInput", "beforeinput", null, i, s);
      e.push({
        event: h,
        listeners: f
      }), h.data = u;
    }
  }
  function r8(e, t, r, i, s, u, f) {
    J7(e, t, r, i, s), n8(e, t, r, i, s);
  }
  var a8 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function n0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!a8[e.type] : t === "textarea";
  }
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function i8(e) {
    if (!Je)
      return !1;
    var t = "on" + e, r = t in document;
    if (!r) {
      var i = document.createElement("div");
      i.setAttribute(t, "return;"), r = typeof i[t] == "function";
    }
    return r;
  }
  function o8() {
    Ne("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function r0(e, t, r, i) {
    e1(i);
    var s = ed(t, "onChange");
    if (s.length > 0) {
      var u = new Sh("onChange", "change", null, r, i);
      e.push({
        event: u,
        listeners: s
      });
    }
  }
  var Zl = null, Ql = null;
  function s8(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function l8(e) {
    var t = [];
    r0(t, Ql, e, kp(e)), a1(u8, t);
  }
  function u8(e) {
    w0(e, 0);
  }
  function Zc(e) {
    var t = ms(e);
    if (jo(t))
      return e;
  }
  function c8(e, t) {
    if (e === "change")
      return t;
  }
  var a0 = !1;
  Je && (a0 = i8("input") && (!document.documentMode || document.documentMode > 9));
  function d8(e, t) {
    Zl = e, Ql = t, Zl.attachEvent("onpropertychange", o0);
  }
  function i0() {
    Zl && (Zl.detachEvent("onpropertychange", o0), Zl = null, Ql = null);
  }
  function o0(e) {
    e.propertyName === "value" && Zc(Ql) && l8(e);
  }
  function f8(e, t, r) {
    e === "focusin" ? (i0(), d8(t, r)) : e === "focusout" && i0();
  }
  function p8(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zc(Ql);
  }
  function h8(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function v8(e, t) {
    if (e === "click")
      return Zc(t);
  }
  function m8(e, t) {
    if (e === "input" || e === "change")
      return Zc(t);
  }
  function g8(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
  }
  function y8(e, t, r, i, s, u, f) {
    var h = r ? ms(r) : window, m, S;
    if (s8(h) ? m = c8 : n0(h) ? a0 ? m = m8 : (m = p8, S = f8) : h8(h) && (m = v8), m) {
      var x = m(t, r);
      if (x) {
        r0(e, x, i, s);
        return;
      }
    }
    S && S(t, h, r), t === "focusout" && g8(h);
  }
  function b8() {
    Pe("onMouseEnter", ["mouseout", "mouseover"]), Pe("onMouseLeave", ["mouseout", "mouseover"]), Pe("onPointerEnter", ["pointerout", "pointerover"]), Pe("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function C8(e, t, r, i, s, u, f) {
    var h = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout";
    if (h && !I6(i)) {
      var S = i.relatedTarget || i.fromElement;
      if (S && (bo(S) || fu(S)))
        return;
    }
    if (!(!m && !h)) {
      var x;
      if (s.window === s)
        x = s;
      else {
        var A = s.ownerDocument;
        A ? x = A.defaultView || A.parentWindow : x = window;
      }
      var L, V;
      if (m) {
        var H = i.relatedTarget || i.toElement;
        if (L = r, V = H ? bo(H) : null, V !== null) {
          var Y = co(V);
          (V !== Y || V.tag !== k && V.tag !== T) && (V = null);
        }
      } else
        L = null, V = r;
      if (L !== V) {
        var he = j1, Ee = "onMouseLeave", Se = "onMouseEnter", Qe = "mouse";
        (t === "pointerout" || t === "pointerover") && (he = Y1, Ee = "onPointerLeave", Se = "onPointerEnter", Qe = "pointer");
        var je = L == null ? x : ms(L), U = V == null ? x : ms(V), W = new he(Ee, Qe + "leave", L, i, s);
        W.target = je, W.relatedTarget = U;
        var F = null, ee = bo(s);
        if (ee === r) {
          var ve = new he(Se, Qe + "enter", V, i, s);
          ve.target = U, ve.relatedTarget = je, F = ve;
        }
        B8(e, W, F, L, V);
      }
    }
  }
  function w8(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var gr = typeof Object.is == "function" ? Object.is : w8;
  function Xl(e, t) {
    if (gr(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var r = Object.keys(e), i = Object.keys(t);
    if (r.length !== i.length)
      return !1;
    for (var s = 0; s < r.length; s++) {
      var u = r[s];
      if (!ut.call(t, u) || !gr(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function s0(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function S8(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function l0(e, t) {
    for (var r = s0(e), i = 0, s = 0; r; ) {
      if (r.nodeType === Na) {
        if (s = i + r.textContent.length, i <= t && s >= t)
          return {
            node: r,
            offset: t - i
          };
        i = s;
      }
      r = s0(S8(r));
    }
  }
  function _8(e) {
    var t = e.ownerDocument, r = t && t.defaultView || window, i = r.getSelection && r.getSelection();
    if (!i || i.rangeCount === 0)
      return null;
    var s = i.anchorNode, u = i.anchorOffset, f = i.focusNode, h = i.focusOffset;
    try {
      s.nodeType, f.nodeType;
    } catch {
      return null;
    }
    return x8(e, s, u, f, h);
  }
  function x8(e, t, r, i, s) {
    var u = 0, f = -1, h = -1, m = 0, S = 0, x = e, A = null;
    e:
      for (; ; ) {
        for (var L = null; x === t && (r === 0 || x.nodeType === Na) && (f = u + r), x === i && (s === 0 || x.nodeType === Na) && (h = u + s), x.nodeType === Na && (u += x.nodeValue.length), (L = x.firstChild) !== null; )
          A = x, x = L;
        for (; ; ) {
          if (x === e)
            break e;
          if (A === t && ++m === r && (f = u), A === i && ++S === s && (h = u), (L = x.nextSibling) !== null)
            break;
          x = A, A = x.parentNode;
        }
        x = L;
      }
    return f === -1 || h === -1 ? null : {
      start: f,
      end: h
    };
  }
  function E8(e, t) {
    var r = e.ownerDocument || document, i = r && r.defaultView || window;
    if (i.getSelection) {
      var s = i.getSelection(), u = e.textContent.length, f = Math.min(t.start, u), h = t.end === void 0 ? f : Math.min(t.end, u);
      if (!s.extend && f > h) {
        var m = h;
        h = f, f = m;
      }
      var S = l0(e, f), x = l0(e, h);
      if (S && x) {
        if (s.rangeCount === 1 && s.anchorNode === S.node && s.anchorOffset === S.offset && s.focusNode === x.node && s.focusOffset === x.offset)
          return;
        var A = r.createRange();
        A.setStart(S.node, S.offset), s.removeAllRanges(), f > h ? (s.addRange(A), s.extend(x.node, x.offset)) : (A.setEnd(x.node, x.offset), s.addRange(A));
      }
    }
  }
  function u0(e) {
    return e && e.nodeType === Na;
  }
  function c0(e, t) {
    return !e || !t ? !1 : e === t ? !0 : u0(e) ? !1 : u0(t) ? c0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function R8(e) {
    return e && e.ownerDocument && c0(e.ownerDocument.documentElement, e);
  }
  function k8(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function d0() {
    for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
      if (k8(t))
        e = t.contentWindow;
      else
        return t;
      t = bi(e.document);
    }
    return t;
  }
  function Th(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function T8() {
    var e = d0();
    return {
      focusedElem: e,
      selectionRange: Th(e) ? D8(e) : null
    };
  }
  function $8(e) {
    var t = d0(), r = e.focusedElem, i = e.selectionRange;
    if (t !== r && R8(r)) {
      i !== null && Th(r) && O8(r, i);
      for (var s = [], u = r; u = u.parentNode; )
        u.nodeType === nr && s.push({
          element: u,
          left: u.scrollLeft,
          top: u.scrollTop
        });
      typeof r.focus == "function" && r.focus();
      for (var f = 0; f < s.length; f++) {
        var h = s[f];
        h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
      }
    }
  }
  function D8(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = _8(e), t || {
      start: 0,
      end: 0
    };
  }
  function O8(e, t) {
    var r = t.start, i = t.end;
    i === void 0 && (i = r), "selectionStart" in e ? (e.selectionStart = r, e.selectionEnd = Math.min(i, e.value.length)) : E8(e, t);
  }
  var L8 = Je && "documentMode" in document && document.documentMode <= 11;
  function A8() {
    Ne("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var ds = null, $h = null, Jl = null, Dh = !1;
  function M8(e) {
    if ("selectionStart" in e && Th(e))
      return {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    var t = e.ownerDocument && e.ownerDocument.defaultView || window, r = t.getSelection();
    return {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    };
  }
  function q8(e) {
    return e.window === e ? e.document : e.nodeType === Pa ? e : e.ownerDocument;
  }
  function f0(e, t, r) {
    var i = q8(r);
    if (!(Dh || ds == null || ds !== bi(i))) {
      var s = M8(ds);
      if (!Jl || !Xl(Jl, s)) {
        Jl = s;
        var u = ed($h, "onSelect");
        if (u.length > 0) {
          var f = new Sh("onSelect", "select", null, t, r);
          e.push({
            event: f,
            listeners: u
          }), f.target = ds;
        }
      }
    }
  }
  function z8(e, t, r, i, s, u, f) {
    var h = r ? ms(r) : window;
    switch (t) {
      case "focusin":
        (n0(h) || h.contentEditable === "true") && (ds = h, $h = r, Jl = null);
        break;
      case "focusout":
        ds = null, $h = null, Jl = null;
        break;
      case "mousedown":
        Dh = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        Dh = !1, f0(e, i, s);
        break;
      case "selectionchange":
        if (L8)
          break;
      case "keydown":
      case "keyup":
        f0(e, i, s);
    }
  }
  function Qc(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var fs = {
    animationend: Qc("Animation", "AnimationEnd"),
    animationiteration: Qc("Animation", "AnimationIteration"),
    animationstart: Qc("Animation", "AnimationStart"),
    transitionend: Qc("Transition", "TransitionEnd")
  }, Oh = {}, p0 = {};
  Je && (p0 = document.createElement("div").style, "AnimationEvent" in window || (delete fs.animationend.animation, delete fs.animationiteration.animation, delete fs.animationstart.animation), "TransitionEvent" in window || delete fs.transitionend.transition);
  function Xc(e) {
    if (Oh[e])
      return Oh[e];
    if (!fs[e])
      return e;
    var t = fs[e];
    for (var r in t)
      if (t.hasOwnProperty(r) && r in p0)
        return Oh[e] = t[r];
    return e;
  }
  var h0 = Xc("animationend"), v0 = Xc("animationiteration"), m0 = Xc("animationstart"), g0 = Xc("transitionend"), y0 = /* @__PURE__ */ new Map(), b0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function Ri(e, t) {
    y0.set(e, t), Ne(t, [e]);
  }
  function I8() {
    for (var e = 0; e < b0.length; e++) {
      var t = b0[e], r = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
      Ri(r, "on" + i);
    }
    Ri(h0, "onAnimationEnd"), Ri(v0, "onAnimationIteration"), Ri(m0, "onAnimationStart"), Ri("dblclick", "onDoubleClick"), Ri("focusin", "onFocus"), Ri("focusout", "onBlur"), Ri(g0, "onTransitionEnd");
  }
  function N8(e, t, r, i, s, u, f) {
    var h = y0.get(t);
    if (h !== void 0) {
      var m = Sh, S = t;
      switch (t) {
        case "keypress":
          if (Yc(i) === 0)
            return;
        case "keydown":
        case "keyup":
          m = P7;
          break;
        case "focusin":
          S = "focus", m = Eh;
          break;
        case "focusout":
          S = "blur", m = Eh;
          break;
        case "beforeblur":
        case "afterblur":
          m = Eh;
          break;
        case "click":
          if (i.button === 2)
            return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          m = j1;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          m = E7;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          m = V7;
          break;
        case h0:
        case v0:
        case m0:
          m = T7;
          break;
        case g0:
          m = B7;
          break;
        case "scroll":
          m = S7;
          break;
        case "wheel":
          m = G7;
          break;
        case "copy":
        case "cut":
        case "paste":
          m = D7;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          m = Y1;
          break;
      }
      var x = (u & xl) !== 0;
      {
        var A = !x && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", L = V8(r, h, i.type, x, A);
        if (L.length > 0) {
          var V = new m(h, S, null, i, s);
          e.push({
            event: V,
            listeners: L
          });
        }
      }
    }
  }
  I8(), b8(), o8(), A8(), K7();
  function P8(e, t, r, i, s, u, f) {
    N8(e, t, r, i, s, u);
    var h = (u & M6) === 0;
    h && (C8(e, t, r, i, s), y8(e, t, r, i, s), z8(e, t, r, i, s), r8(e, t, r, i, s));
  }
  var eu = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Lh = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(eu));
  function C0(e, t, r) {
    var i = e.type || "unknown-event";
    e.currentTarget = r, G6(i, t, void 0, e), e.currentTarget = null;
  }
  function U8(e, t, r) {
    var i;
    if (r)
      for (var s = t.length - 1; s >= 0; s--) {
        var u = t[s], f = u.instance, h = u.currentTarget, m = u.listener;
        if (f !== i && e.isPropagationStopped())
          return;
        C0(e, m, h), i = f;
      }
    else
      for (var S = 0; S < t.length; S++) {
        var x = t[S], A = x.instance, L = x.currentTarget, V = x.listener;
        if (A !== i && e.isPropagationStopped())
          return;
        C0(e, V, L), i = A;
      }
  }
  function w0(e, t) {
    for (var r = (t & xl) !== 0, i = 0; i < e.length; i++) {
      var s = e[i], u = s.event, f = s.listeners;
      U8(u, f, r);
    }
    Y6();
  }
  function F8(e, t, r, i, s) {
    var u = kp(r), f = [];
    P8(f, e, i, r, u, t), w0(f, t);
  }
  function Mt(e, t) {
    Lh.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var r = !1, i = g_(t), s = j8(e, r);
    i.has(s) || (S0(t, e, Rp, r), i.add(s));
  }
  function Ah(e, t, r) {
    Lh.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var i = 0;
    t && (i |= xl), S0(r, e, i, t);
  }
  var Jc = "_reactListening" + Math.random().toString(36).slice(2);
  function tu(e) {
    if (!e[Jc]) {
      e[Jc] = !0, Ve.forEach(function(r) {
        r !== "selectionchange" && (Lh.has(r) || Ah(r, !1, e), Ah(r, !0, e));
      });
      var t = e.nodeType === Pa ? e : e.ownerDocument;
      t !== null && (t[Jc] || (t[Jc] = !0, Ah("selectionchange", !1, t)));
    }
  }
  function S0(e, t, r, i, s) {
    var u = f7(e, t, r), f = void 0;
    Dp && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? y7(e, t, u, f) : g7(e, t, u) : f !== void 0 ? b7(e, t, u, f) : m7(e, t, u);
  }
  function _0(e, t) {
    return e === t || e.nodeType === Kt && e.parentNode === t;
  }
  function Mh(e, t, r, i, s) {
    var u = i;
    if (!(t & Xy) && !(t & Rp)) {
      var f = s;
      if (i !== null) {
        var h = i;
        e:
          for (; ; ) {
            if (h === null)
              return;
            var m = h.tag;
            if (m === _ || m === R) {
              var S = h.stateNode.containerInfo;
              if (_0(S, f))
                break;
              if (m === R)
                for (var x = h.return; x !== null; ) {
                  var A = x.tag;
                  if (A === _ || A === R) {
                    var L = x.stateNode.containerInfo;
                    if (_0(L, f))
                      return;
                  }
                  x = x.return;
                }
              for (; S !== null; ) {
                var V = bo(S);
                if (V === null)
                  return;
                var H = V.tag;
                if (H === k || H === T) {
                  h = u = V;
                  continue e;
                }
                S = S.parentNode;
              }
            }
            h = h.return;
          }
      }
    }
    a1(function() {
      return F8(e, t, r, u);
    });
  }
  function nu(e, t, r) {
    return {
      instance: e,
      listener: t,
      currentTarget: r
    };
  }
  function V8(e, t, r, i, s, u) {
    for (var f = t !== null ? t + "Capture" : null, h = i ? f : t, m = [], S = e, x = null; S !== null; ) {
      var A = S, L = A.stateNode, V = A.tag;
      if (V === k && L !== null && (x = L, h !== null)) {
        var H = Rl(S, h);
        H != null && m.push(nu(S, H, x));
      }
      if (s)
        break;
      S = S.return;
    }
    return m;
  }
  function ed(e, t) {
    for (var r = t + "Capture", i = [], s = e; s !== null; ) {
      var u = s, f = u.stateNode, h = u.tag;
      if (h === k && f !== null) {
        var m = f, S = Rl(s, r);
        S != null && i.unshift(nu(s, S, m));
        var x = Rl(s, t);
        x != null && i.push(nu(s, x, m));
      }
      s = s.return;
    }
    return i;
  }
  function ps(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== k);
    return e || null;
  }
  function H8(e, t) {
    for (var r = e, i = t, s = 0, u = r; u; u = ps(u))
      s++;
    for (var f = 0, h = i; h; h = ps(h))
      f++;
    for (; s - f > 0; )
      r = ps(r), s--;
    for (; f - s > 0; )
      i = ps(i), f--;
    for (var m = s; m--; ) {
      if (r === i || i !== null && r === i.alternate)
        return r;
      r = ps(r), i = ps(i);
    }
    return null;
  }
  function x0(e, t, r, i, s) {
    for (var u = t._reactName, f = [], h = r; h !== null && h !== i; ) {
      var m = h, S = m.alternate, x = m.stateNode, A = m.tag;
      if (S !== null && S === i)
        break;
      if (A === k && x !== null) {
        var L = x;
        if (s) {
          var V = Rl(h, u);
          V != null && f.unshift(nu(h, V, L));
        } else if (!s) {
          var H = Rl(h, u);
          H != null && f.push(nu(h, H, L));
        }
      }
      h = h.return;
    }
    f.length !== 0 && e.push({
      event: t,
      listeners: f
    });
  }
  function B8(e, t, r, i, s) {
    var u = i && s ? H8(i, s) : null;
    i !== null && x0(e, t, i, u, !1), s !== null && r !== null && x0(e, r, s, u, !0);
  }
  function j8(e, t) {
    return e + "__" + (t ? "capture" : "bubble");
  }
  var rr = !1, ru = "dangerouslySetInnerHTML", td = "suppressContentEditableWarning", ki = "suppressHydrationWarning", E0 = "autoFocus", go = "children", yo = "style", nd = "__html", qh, rd, au, R0, ad, k0, T0;
  qh = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, rd = function(e, t) {
    k6(e, t), T6(e, t), A6(e, t, {
      registrationNameDependencies: at,
      possibleRegistrationNames: He
    });
  }, k0 = Je && !document.documentMode, au = function(e, t, r) {
    if (!rr) {
      var i = id(r), s = id(t);
      s !== i && (rr = !0, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(i)));
    }
  }, R0 = function(e) {
    if (!rr) {
      rr = !0;
      var t = [];
      e.forEach(function(r) {
        t.push(r);
      }), d("Extra attributes from the server: %s", t);
    }
  }, ad = function(e, t) {
    t === !1 ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, T0 = function(e, t) {
    var r = e.namespaceURI === Ia ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return r.innerHTML = t, r.innerHTML;
  };
  var G8 = /\r\n?/g, Y8 = /\u0000|\uFFFD/g;
  function id(e) {
    Rr(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(G8, `
`).replace(Y8, "");
  }
  function od(e, t, r, i) {
    var s = id(t), u = id(e);
    if (u !== s && (i && (rr || (rr = !0, d('Text content did not match. Server: "%s" Client: "%s"', u, s))), r && ce))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function $0(e) {
    return e.nodeType === Pa ? e : e.ownerDocument;
  }
  function W8() {
  }
  function sd(e) {
    e.onclick = W8;
  }
  function K8(e, t, r, i, s) {
    for (var u in i)
      if (i.hasOwnProperty(u)) {
        var f = i[u];
        if (u === yo)
          f && Object.freeze(f), Gy(t, f);
        else if (u === ru) {
          var h = f ? f[nd] : void 0;
          h != null && Fy(t, h);
        } else if (u === go)
          if (typeof f == "string") {
            var m = e !== "textarea" || f !== "";
            m && $c(t, f);
          } else
            typeof f == "number" && $c(t, "" + f);
        else
          u === td || u === ki || u === E0 || (at.hasOwnProperty(u) ? f != null && (typeof f != "function" && ad(u, f), u === "onScroll" && Mt("scroll", t)) : f != null && Aa(t, u, f, s));
      }
  }
  function Z8(e, t, r, i) {
    for (var s = 0; s < t.length; s += 2) {
      var u = t[s], f = t[s + 1];
      u === yo ? Gy(e, f) : u === ru ? Fy(e, f) : u === go ? $c(e, f) : Aa(e, u, f, i);
    }
  }
  function Q8(e, t, r, i) {
    var s, u = $0(r), f, h = i;
    if (h === Ia && (h = Cp(e)), h === Ia) {
      if (s = io(e, t), !s && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var m = u.createElement("div");
        m.innerHTML = "<script><\/script>";
        var S = m.firstChild;
        f = m.removeChild(S);
      } else if (typeof t.is == "string")
        f = u.createElement(e, {
          is: t.is
        });
      else if (f = u.createElement(e), e === "select") {
        var x = f;
        t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
      }
    } else
      f = u.createElementNS(h, e);
    return h === Ia && !s && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ut.call(qh, e) && (qh[e] = !0, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
  }
  function X8(e, t) {
    return $0(t).createTextNode(e);
  }
  function J8(e, t, r, i) {
    var s = io(t, r);
    rd(t, r);
    var u;
    switch (t) {
      case "dialog":
        Mt("cancel", e), Mt("close", e), u = r;
        break;
      case "iframe":
      case "object":
      case "embed":
        Mt("load", e), u = r;
        break;
      case "video":
      case "audio":
        for (var f = 0; f < eu.length; f++)
          Mt(eu[f], e);
        u = r;
        break;
      case "source":
        Mt("error", e), u = r;
        break;
      case "img":
      case "image":
      case "link":
        Mt("error", e), Mt("load", e), u = r;
        break;
      case "details":
        Mt("toggle", e), u = r;
        break;
      case "input":
        $(e, r), u = g(e, r), Mt("invalid", e);
        break;
      case "option":
        St(e, r), u = r;
        break;
      case "select":
        Sl(e, r), u = wl(e, r), Mt("invalid", e);
        break;
      case "textarea":
        Ny(e, r), u = yp(e, r), Mt("invalid", e);
        break;
      default:
        u = r;
    }
    switch (Ep(t, u), K8(t, e, i, u, s), t) {
      case "input":
        qa(e), te(e, r, !1);
        break;
      case "textarea":
        qa(e), Uy(e);
        break;
      case "option":
        At(e, r);
        break;
      case "select":
        gp(e, r);
        break;
      default:
        typeof u.onClick == "function" && sd(e);
        break;
    }
  }
  function e9(e, t, r, i, s) {
    rd(t, i);
    var u = null, f, h;
    switch (t) {
      case "input":
        f = g(e, r), h = g(e, i), u = [];
        break;
      case "select":
        f = wl(e, r), h = wl(e, i), u = [];
        break;
      case "textarea":
        f = yp(e, r), h = yp(e, i), u = [];
        break;
      default:
        f = r, h = i, typeof f.onClick != "function" && typeof h.onClick == "function" && sd(e);
        break;
    }
    Ep(t, h);
    var m, S, x = null;
    for (m in f)
      if (!(h.hasOwnProperty(m) || !f.hasOwnProperty(m) || f[m] == null))
        if (m === yo) {
          var A = f[m];
          for (S in A)
            A.hasOwnProperty(S) && (x || (x = {}), x[S] = "");
        } else
          m === ru || m === go || m === td || m === ki || m === E0 || (at.hasOwnProperty(m) ? u || (u = []) : (u = u || []).push(m, null));
    for (m in h) {
      var L = h[m], V = f != null ? f[m] : void 0;
      if (!(!h.hasOwnProperty(m) || L === V || L == null && V == null))
        if (m === yo)
          if (L && Object.freeze(L), V) {
            for (S in V)
              V.hasOwnProperty(S) && (!L || !L.hasOwnProperty(S)) && (x || (x = {}), x[S] = "");
            for (S in L)
              L.hasOwnProperty(S) && V[S] !== L[S] && (x || (x = {}), x[S] = L[S]);
          } else
            x || (u || (u = []), u.push(m, x)), x = L;
        else if (m === ru) {
          var H = L ? L[nd] : void 0, Y = V ? V[nd] : void 0;
          H != null && Y !== H && (u = u || []).push(m, H);
        } else
          m === go ? (typeof L == "string" || typeof L == "number") && (u = u || []).push(m, "" + L) : m === td || m === ki || (at.hasOwnProperty(m) ? (L != null && (typeof L != "function" && ad(m, L), m === "onScroll" && Mt("scroll", e)), !u && V !== L && (u = [])) : (u = u || []).push(m, L));
    }
    return x && (b6(x, h[yo]), (u = u || []).push(yo, x)), u;
  }
  function t9(e, t, r, i, s) {
    r === "input" && s.type === "radio" && s.name != null && B(e, s);
    var u = io(r, i), f = io(r, s);
    switch (Z8(e, t, u, f), r) {
      case "input":
        G(e, s);
        break;
      case "textarea":
        Py(e, s);
        break;
      case "select":
        ZS(e, s);
        break;
    }
  }
  function n9(e) {
    {
      var t = e.toLowerCase();
      return Dc.hasOwnProperty(t) && Dc[t] || null;
    }
  }
  function r9(e, t, r, i, s, u, f) {
    var h, m;
    switch (h = io(t, r), rd(t, r), t) {
      case "dialog":
        Mt("cancel", e), Mt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Mt("load", e);
        break;
      case "video":
      case "audio":
        for (var S = 0; S < eu.length; S++)
          Mt(eu[S], e);
        break;
      case "source":
        Mt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Mt("error", e), Mt("load", e);
        break;
      case "details":
        Mt("toggle", e);
        break;
      case "input":
        $(e, r), Mt("invalid", e);
        break;
      case "option":
        St(e, r);
        break;
      case "select":
        Sl(e, r), Mt("invalid", e);
        break;
      case "textarea":
        Ny(e, r), Mt("invalid", e);
        break;
    }
    Ep(t, r);
    {
      m = /* @__PURE__ */ new Set();
      for (var x = e.attributes, A = 0; A < x.length; A++) {
        var L = x[A].name.toLowerCase();
        switch (L) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            m.add(x[A].name);
        }
      }
    }
    var V = null;
    for (var H in r)
      if (r.hasOwnProperty(H)) {
        var Y = r[H];
        if (H === go)
          typeof Y == "string" ? e.textContent !== Y && (r[ki] !== !0 && od(e.textContent, Y, u, f), V = [go, Y]) : typeof Y == "number" && e.textContent !== "" + Y && (r[ki] !== !0 && od(e.textContent, Y, u, f), V = [go, "" + Y]);
        else if (at.hasOwnProperty(H))
          Y != null && (typeof Y != "function" && ad(H, Y), H === "onScroll" && Mt("scroll", e));
        else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof h == "boolean") {
          var he = void 0, Ee = h && Ut ? null : dr(H);
          if (r[ki] !== !0) {
            if (!(H === td || H === ki || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            H === "value" || H === "checked" || H === "selected")) {
              if (H === ru) {
                var Se = e.innerHTML, Qe = Y ? Y[nd] : void 0;
                if (Qe != null) {
                  var je = T0(e, Qe);
                  je !== Se && au(H, Se, je);
                }
              } else if (H === yo) {
                if (m.delete(H), k0) {
                  var U = g6(Y);
                  he = e.getAttribute("style"), U !== he && au(H, he, U);
                }
              } else if (h && !Ut)
                m.delete(H.toLowerCase()), he = fi(e, H, Y), Y !== he && au(H, he, Y);
              else if (!jt(H, Ee, h) && !Ct(H, Y, Ee, h)) {
                var W = !1;
                if (Ee !== null)
                  m.delete(Ee.attributeName), he = La(e, H, Y, Ee);
                else {
                  var F = i;
                  if (F === Ia && (F = Cp(t)), F === Ia)
                    m.delete(H.toLowerCase());
                  else {
                    var ee = n9(H);
                    ee !== null && ee !== H && (W = !0, m.delete(ee)), m.delete(H);
                  }
                  he = fi(e, H, Y);
                }
                var ve = Ut;
                !ve && Y !== he && !W && au(H, he, Y);
              }
            }
          }
        }
      }
    switch (f && // $FlowFixMe - Should be inferred as not undefined.
    m.size > 0 && r[ki] !== !0 && R0(m), t) {
      case "input":
        qa(e), te(e, r, !0);
        break;
      case "textarea":
        qa(e), Uy(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof r.onClick == "function" && sd(e);
        break;
    }
    return V;
  }
  function a9(e, t, r) {
    var i = e.nodeValue !== t;
    return i;
  }
  function zh(e, t) {
    {
      if (rr)
        return;
      rr = !0, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function Ih(e, t) {
    {
      if (rr)
        return;
      rr = !0, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function Nh(e, t, r) {
    {
      if (rr)
        return;
      rr = !0, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function Ph(e, t) {
    {
      if (t === "" || rr)
        return;
      rr = !0, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function i9(e, t, r) {
    switch (t) {
      case "input":
        De(e, r);
        return;
      case "textarea":
        XS(e, r);
        return;
      case "select":
        QS(e, r);
        return;
    }
  }
  var iu = function() {
  }, ou = function() {
  };
  {
    var o9 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], D0 = [
      "applet",
      "caption",
      "html",
      "table",
      "td",
      "th",
      "marquee",
      "object",
      "template",
      // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
      // TODO: Distinguish by namespace here -- for <title>, including it here
      // errs on the side of fewer warnings
      "foreignObject",
      "desc",
      "title"
    ], s9 = D0.concat(["button"]), l9 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], O0 = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    ou = function(e, t) {
      var r = Ye({}, e || O0), i = {
        tag: t
      };
      return D0.indexOf(t) !== -1 && (r.aTagInScope = null, r.buttonTagInScope = null, r.nobrTagInScope = null), s9.indexOf(t) !== -1 && (r.pTagInButtonScope = null), o9.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (r.listItemTagAutoclosing = null, r.dlItemTagAutoclosing = null), r.current = i, t === "form" && (r.formTag = i), t === "a" && (r.aTagInScope = i), t === "button" && (r.buttonTagInScope = i), t === "nobr" && (r.nobrTagInScope = i), t === "p" && (r.pTagInButtonScope = i), t === "li" && (r.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (r.dlItemTagAutoclosing = i), r;
    };
    var u9 = function(e, t) {
      switch (t) {
        case "select":
          return e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return l9.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }, c9 = function(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }, L0 = {};
    iu = function(e, t, r) {
      r = r || O0;
      var i = r.current, s = i && i.tag;
      t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var u = u9(e, s) ? null : i, f = u ? null : c9(e, r), h = u || f;
      if (h) {
        var m = h.tag, S = !!u + "|" + e + "|" + m;
        if (!L0[S]) {
          L0[S] = !0;
          var x = e, A = "";
          if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", u) {
            var L = "";
            m === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, m, A, L);
          } else
            d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, m);
        }
      }
    };
  }
  var ld = "suppressHydrationWarning", ud = "$", cd = "/$", su = "$?", lu = "$!", d9 = "style", Uh = null, Fh = null;
  function f9(e) {
    var t, r, i = e.nodeType;
    switch (i) {
      case Pa:
      case Sp: {
        t = i === Pa ? "#document" : "#fragment";
        var s = e.documentElement;
        r = s ? s.namespaceURI : wp(null, "");
        break;
      }
      default: {
        var u = i === Kt ? e.parentNode : e, f = u.namespaceURI || null;
        t = u.tagName, r = wp(f, t);
        break;
      }
    }
    {
      var h = t.toLowerCase(), m = ou(null, h);
      return {
        namespace: r,
        ancestorInfo: m
      };
    }
  }
  function p9(e, t, r) {
    {
      var i = e, s = wp(i.namespace, t), u = ou(i.ancestorInfo, t);
      return {
        namespace: s,
        ancestorInfo: u
      };
    }
  }
  function dz(e) {
    return e;
  }
  function h9(e) {
    Uh = d7(), Fh = T8();
    var t = null;
    return U1(!1), t;
  }
  function v9(e) {
    $8(Fh), U1(Uh), Uh = null, Fh = null;
  }
  function m9(e, t, r, i, s) {
    var u;
    {
      var f = i;
      if (iu(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var h = "" + t.children, m = ou(f.ancestorInfo, e);
        iu(null, h, m);
      }
      u = f.namespace;
    }
    var S = Q8(e, t, r, u);
    return du(s, S), Kh(S, t), S;
  }
  function g9(e, t) {
    e.appendChild(t);
  }
  function y9(e, t, r, i, s) {
    switch (J8(e, t, r, i), t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!r.autoFocus;
      case "img":
        return !0;
      default:
        return !1;
    }
  }
  function b9(e, t, r, i, s, u) {
    {
      var f = u;
      if (typeof i.children != typeof r.children && (typeof i.children == "string" || typeof i.children == "number")) {
        var h = "" + i.children, m = ou(f.ancestorInfo, t);
        iu(null, h, m);
      }
    }
    return e9(e, t, r, i);
  }
  function Vh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function C9(e, t, r, i) {
    {
      var s = r;
      iu(null, e, s.ancestorInfo);
    }
    var u = X8(e, t);
    return du(i, u), u;
  }
  function w9() {
    var e = window.event;
    return e === void 0 ? Ga : F1(e.type);
  }
  var Hh = typeof setTimeout == "function" ? setTimeout : void 0, S9 = typeof clearTimeout == "function" ? clearTimeout : void 0, Bh = -1, A0 = typeof Promise == "function" ? Promise : void 0, _9 = typeof queueMicrotask == "function" ? queueMicrotask : typeof A0 < "u" ? function(e) {
    return A0.resolve(null).then(e).catch(x9);
  } : Hh;
  function x9(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function E9(e, t, r, i) {
    switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        r.autoFocus && e.focus();
        return;
      case "img": {
        r.src && (e.src = r.src);
        return;
      }
    }
  }
  function R9(e, t, r, i, s, u) {
    t9(e, t, r, i, s), Kh(e, s);
  }
  function M0(e) {
    $c(e, "");
  }
  function k9(e, t, r) {
    e.nodeValue = r;
  }
  function T9(e, t) {
    e.appendChild(t);
  }
  function $9(e, t) {
    var r;
    e.nodeType === Kt ? (r = e.parentNode, r.insertBefore(t, e)) : (r = e, r.appendChild(t));
    var i = e._reactRootContainer;
    i == null && r.onclick === null && sd(r);
  }
  function D9(e, t, r) {
    e.insertBefore(t, r);
  }
  function O9(e, t, r) {
    e.nodeType === Kt ? e.parentNode.insertBefore(t, r) : e.insertBefore(t, r);
  }
  function L9(e, t) {
    e.removeChild(t);
  }
  function A9(e, t) {
    e.nodeType === Kt ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function jh(e, t) {
    var r = t, i = 0;
    do {
      var s = r.nextSibling;
      if (e.removeChild(r), s && s.nodeType === Kt) {
        var u = s.data;
        if (u === cd)
          if (i === 0) {
            e.removeChild(s), Bl(t);
            return;
          } else
            i--;
        else
          (u === ud || u === su || u === lu) && i++;
      }
      r = s;
    } while (r);
    Bl(t);
  }
  function M9(e, t) {
    e.nodeType === Kt ? jh(e.parentNode, t) : e.nodeType === nr && jh(e, t), Bl(e);
  }
  function q9(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function z9(e) {
    e.nodeValue = "";
  }
  function I9(e, t) {
    e = e;
    var r = t[d9], i = r != null && r.hasOwnProperty("display") ? r.display : null;
    e.style.display = _p("display", i);
  }
  function N9(e, t) {
    e.nodeValue = t;
  }
  function P9(e) {
    e.nodeType === nr ? e.textContent = "" : e.nodeType === Pa && e.documentElement && e.removeChild(e.documentElement);
  }
  function U9(e, t, r) {
    return e.nodeType !== nr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function F9(e, t) {
    return t === "" || e.nodeType !== Na ? null : e;
  }
  function V9(e) {
    return e.nodeType !== Kt ? null : e;
  }
  function q0(e) {
    return e.data === su;
  }
  function Gh(e) {
    return e.data === lu;
  }
  function H9(e) {
    var t = e.nextSibling && e.nextSibling.dataset, r, i, s;
    return t && (r = t.dgst, i = t.msg, s = t.stck), {
      message: i,
      digest: r,
      stack: s
    };
  }
  function B9(e, t) {
    e._reactRetry = t;
  }
  function dd(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === nr || t === Na)
        break;
      if (t === Kt) {
        var r = e.data;
        if (r === ud || r === lu || r === su)
          break;
        if (r === cd)
          return null;
      }
    }
    return e;
  }
  function uu(e) {
    return dd(e.nextSibling);
  }
  function j9(e) {
    return dd(e.firstChild);
  }
  function G9(e) {
    return dd(e.firstChild);
  }
  function Y9(e) {
    return dd(e.nextSibling);
  }
  function W9(e, t, r, i, s, u, f) {
    du(u, e), Kh(e, r);
    var h;
    {
      var m = s;
      h = m.namespace;
    }
    var S = (u.mode & Ke) !== $e;
    return r9(e, t, r, h, i, S, f);
  }
  function K9(e, t, r, i) {
    return du(r, e), r.mode & Ke, a9(e, t);
  }
  function Z9(e, t) {
    du(t, e);
  }
  function Q9(e) {
    for (var t = e.nextSibling, r = 0; t; ) {
      if (t.nodeType === Kt) {
        var i = t.data;
        if (i === cd) {
          if (r === 0)
            return uu(t);
          r--;
        } else
          (i === ud || i === lu || i === su) && r++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function z0(e) {
    for (var t = e.previousSibling, r = 0; t; ) {
      if (t.nodeType === Kt) {
        var i = t.data;
        if (i === ud || i === lu || i === su) {
          if (r === 0)
            return t;
          r--;
        } else
          i === cd && r++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function X9(e) {
    Bl(e);
  }
  function J9(e) {
    Bl(e);
  }
  function e_(e) {
    return e !== "head" && e !== "body";
  }
  function t_(e, t, r, i) {
    var s = !0;
    od(t.nodeValue, r, i, s);
  }
  function n_(e, t, r, i, s, u) {
    if (t[ld] !== !0) {
      var f = !0;
      od(i.nodeValue, s, u, f);
    }
  }
  function r_(e, t) {
    t.nodeType === nr ? zh(e, t) : t.nodeType === Kt || Ih(e, t);
  }
  function a_(e, t) {
    {
      var r = e.parentNode;
      r !== null && (t.nodeType === nr ? zh(r, t) : t.nodeType === Kt || Ih(r, t));
    }
  }
  function i_(e, t, r, i, s) {
    (s || t[ld] !== !0) && (i.nodeType === nr ? zh(r, i) : i.nodeType === Kt || Ih(r, i));
  }
  function o_(e, t, r) {
    Nh(e, t);
  }
  function s_(e, t) {
    Ph(e, t);
  }
  function l_(e, t, r) {
    {
      var i = e.parentNode;
      i !== null && Nh(i, t);
    }
  }
  function u_(e, t) {
    {
      var r = e.parentNode;
      r !== null && Ph(r, t);
    }
  }
  function c_(e, t, r, i, s, u) {
    (u || t[ld] !== !0) && Nh(r, i);
  }
  function d_(e, t, r, i, s) {
    (s || t[ld] !== !0) && Ph(r, i);
  }
  function f_(e) {
    d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function p_(e) {
    tu(e);
  }
  var hs = Math.random().toString(36).slice(2), vs = "__reactFiber$" + hs, Yh = "__reactProps$" + hs, cu = "__reactContainer$" + hs, Wh = "__reactEvents$" + hs, h_ = "__reactListeners$" + hs, v_ = "__reactHandles$" + hs;
  function m_(e) {
    delete e[vs], delete e[Yh], delete e[Wh], delete e[h_], delete e[v_];
  }
  function du(e, t) {
    t[vs] = e;
  }
  function fd(e, t) {
    t[cu] = e;
  }
  function I0(e) {
    e[cu] = null;
  }
  function fu(e) {
    return !!e[cu];
  }
  function bo(e) {
    var t = e[vs];
    if (t)
      return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[cu] || r[vs], t) {
        var i = t.alternate;
        if (t.child !== null || i !== null && i.child !== null)
          for (var s = z0(e); s !== null; ) {
            var u = s[vs];
            if (u)
              return u;
            s = z0(s);
          }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Ti(e) {
    var t = e[vs] || e[cu];
    return t && (t.tag === k || t.tag === T || t.tag === j || t.tag === _) ? t : null;
  }
  function ms(e) {
    if (e.tag === k || e.tag === T)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function pd(e) {
    return e[Yh] || null;
  }
  function Kh(e, t) {
    e[Yh] = t;
  }
  function g_(e) {
    var t = e[Wh];
    return t === void 0 && (t = e[Wh] = /* @__PURE__ */ new Set()), t;
  }
  var N0 = {}, P0 = o.ReactDebugCurrentFrame;
  function hd(e) {
    if (e) {
      var t = e._owner, r = mi(e.type, e._source, t ? t.type : null);
      P0.setExtraStackFrame(r);
    } else
      P0.setExtraStackFrame(null);
  }
  function jr(e, t, r, i, s) {
    {
      var u = Function.call.bind(ut);
      for (var f in e)
        if (u(e, f)) {
          var h = void 0;
          try {
            if (typeof e[f] != "function") {
              var m = Error((i || "React class") + ": " + r + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw m.name = "Invariant Violation", m;
            }
            h = e[f](t, f, i, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (S) {
            h = S;
          }
          h && !(h instanceof Error) && (hd(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", r, f, typeof h), hd(null)), h instanceof Error && !(h.message in N0) && (N0[h.message] = !0, hd(s), d("Failed %s type: %s", r, h.message), hd(null));
        }
    }
  }
  var Zh = [], vd;
  vd = [];
  var Ya = -1;
  function $i(e) {
    return {
      current: e
    };
  }
  function qn(e, t) {
    if (Ya < 0) {
      d("Unexpected pop.");
      return;
    }
    t !== vd[Ya] && d("Unexpected Fiber popped."), e.current = Zh[Ya], Zh[Ya] = null, vd[Ya] = null, Ya--;
  }
  function zn(e, t, r) {
    Ya++, Zh[Ya] = e.current, vd[Ya] = r, e.current = t;
  }
  var Qh;
  Qh = {};
  var yr = {};
  Object.freeze(yr);
  var Wa = $i(yr), ha = $i(!1), Xh = yr;
  function gs(e, t, r) {
    return r && va(t) ? Xh : Wa.current;
  }
  function U0(e, t, r) {
    {
      var i = e.stateNode;
      i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = r;
    }
  }
  function ys(e, t) {
    {
      var r = e.type, i = r.contextTypes;
      if (!i)
        return yr;
      var s = e.stateNode;
      if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
        return s.__reactInternalMemoizedMaskedChildContext;
      var u = {};
      for (var f in i)
        u[f] = t[f];
      {
        var h = ze(e) || "Unknown";
        jr(i, u, "context", h);
      }
      return s && U0(e, t, u), u;
    }
  }
  function md() {
    return ha.current;
  }
  function va(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function gd(e) {
    qn(ha, e), qn(Wa, e);
  }
  function Jh(e) {
    qn(ha, e), qn(Wa, e);
  }
  function F0(e, t, r) {
    {
      if (Wa.current !== yr)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      zn(Wa, t, e), zn(ha, r, e);
    }
  }
  function V0(e, t, r) {
    {
      var i = e.stateNode, s = t.childContextTypes;
      if (typeof i.getChildContext != "function") {
        {
          var u = ze(e) || "Unknown";
          Qh[u] || (Qh[u] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", u, u));
        }
        return r;
      }
      var f = i.getChildContext();
      for (var h in f)
        if (!(h in s))
          throw new Error((ze(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
      {
        var m = ze(e) || "Unknown";
        jr(s, f, "child context", m);
      }
      return Ye({}, r, f);
    }
  }
  function yd(e) {
    {
      var t = e.stateNode, r = t && t.__reactInternalMemoizedMergedChildContext || yr;
      return Xh = Wa.current, zn(Wa, r, e), zn(ha, ha.current, e), !0;
    }
  }
  function H0(e, t, r) {
    {
      var i = e.stateNode;
      if (!i)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (r) {
        var s = V0(e, t, Xh);
        i.__reactInternalMemoizedMergedChildContext = s, qn(ha, e), qn(Wa, e), zn(Wa, s, e), zn(ha, r, e);
      } else
        qn(ha, e), zn(ha, r, e);
    }
  }
  function y_(e) {
    {
      if (!e3(e) || e.tag !== b)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case _:
            return t.stateNode.context;
          case b: {
            var r = t.type;
            if (va(r))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var Di = 0, bd = 1, Ka = null, ev = !1, tv = !1;
  function B0(e) {
    Ka === null ? Ka = [e] : Ka.push(e);
  }
  function b_(e) {
    ev = !0, B0(e);
  }
  function j0() {
    ev && Oi();
  }
  function Oi() {
    if (!tv && Ka !== null) {
      tv = !0;
      var e = 0, t = Br();
      try {
        var r = !0, i = Ka;
        for (yn(vr); e < i.length; e++) {
          var s = i[e];
          do
            s = s(r);
          while (s !== null);
        }
        Ka = null, ev = !1;
      } catch (u) {
        throw Ka !== null && (Ka = Ka.slice(e + 1)), v1(qc, Oi), u;
      } finally {
        yn(t), tv = !1;
      }
    }
    return null;
  }
  var bs = [], Cs = 0, Cd = null, wd = 0, Dr = [], Or = 0, Co = null, Za = 1, Qa = "";
  function C_(e) {
    return So(), (e.flags & s1) !== Te;
  }
  function w_(e) {
    return So(), wd;
  }
  function S_() {
    var e = Qa, t = Za, r = t & ~__(t);
    return r.toString(32) + e;
  }
  function wo(e, t) {
    So(), bs[Cs++] = wd, bs[Cs++] = Cd, Cd = e, wd = t;
  }
  function G0(e, t, r) {
    So(), Dr[Or++] = Za, Dr[Or++] = Qa, Dr[Or++] = Co, Co = e;
    var i = Za, s = Qa, u = Sd(i) - 1, f = i & ~(1 << u), h = r + 1, m = Sd(t) + u;
    if (m > 30) {
      var S = u - u % 5, x = (1 << S) - 1, A = (f & x).toString(32), L = f >> S, V = u - S, H = Sd(t) + V, Y = h << V, he = Y | L, Ee = A + s;
      Za = 1 << H | he, Qa = Ee;
    } else {
      var Se = h << u, Qe = Se | f, je = s;
      Za = 1 << m | Qe, Qa = je;
    }
  }
  function nv(e) {
    So();
    var t = e.return;
    if (t !== null) {
      var r = 1, i = 0;
      wo(e, r), G0(e, r, i);
    }
  }
  function Sd(e) {
    return 32 - w1(e);
  }
  function __(e) {
    return 1 << Sd(e) - 1;
  }
  function rv(e) {
    for (; e === Cd; )
      Cd = bs[--Cs], bs[Cs] = null, wd = bs[--Cs], bs[Cs] = null;
    for (; e === Co; )
      Co = Dr[--Or], Dr[Or] = null, Qa = Dr[--Or], Dr[Or] = null, Za = Dr[--Or], Dr[Or] = null;
  }
  function x_() {
    return So(), Co !== null ? {
      id: Za,
      overflow: Qa
    } : null;
  }
  function E_(e, t) {
    So(), Dr[Or++] = Za, Dr[Or++] = Qa, Dr[Or++] = Co, Za = t.id, Qa = t.overflow, Co = e;
  }
  function So() {
    Cn() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var bn = null, Lr = null, Gr = !1, _o = !1, Li = null;
  function R_() {
    Gr && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function Y0() {
    _o = !0;
  }
  function k_() {
    return _o;
  }
  function T_(e) {
    var t = e.stateNode.containerInfo;
    return Lr = G9(t), bn = e, Gr = !0, Li = null, _o = !1, !0;
  }
  function $_(e, t, r) {
    return Lr = Y9(t), bn = e, Gr = !0, Li = null, _o = !1, r !== null && E_(e, r), !0;
  }
  function W0(e, t) {
    switch (e.tag) {
      case _: {
        r_(e.stateNode.containerInfo, t);
        break;
      }
      case k: {
        var r = (e.mode & Ke) !== $e;
        i_(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          r
        );
        break;
      }
      case j: {
        var i = e.memoizedState;
        i.dehydrated !== null && a_(i.dehydrated, t);
        break;
      }
    }
  }
  function K0(e, t) {
    W0(e, t);
    var r = LE();
    r.stateNode = t, r.return = e;
    var i = e.deletions;
    i === null ? (e.deletions = [r], e.flags |= oo) : i.push(r);
  }
  function av(e, t) {
    {
      if (_o)
        return;
      switch (e.tag) {
        case _: {
          var r = e.stateNode.containerInfo;
          switch (t.tag) {
            case k:
              var i = t.type;
              t.pendingProps, o_(r, i);
              break;
            case T:
              var s = t.pendingProps;
              s_(r, s);
              break;
          }
          break;
        }
        case k: {
          var u = e.type, f = e.memoizedProps, h = e.stateNode;
          switch (t.tag) {
            case k: {
              var m = t.type, S = t.pendingProps, x = (e.mode & Ke) !== $e;
              c_(
                u,
                f,
                h,
                m,
                S,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
            case T: {
              var A = t.pendingProps, L = (e.mode & Ke) !== $e;
              d_(
                u,
                f,
                h,
                A,
                // TODO: Delete this argument when we remove the legacy root API.
                L
              );
              break;
            }
          }
          break;
        }
        case j: {
          var V = e.memoizedState, H = V.dehydrated;
          if (H !== null)
            switch (t.tag) {
              case k:
                var Y = t.type;
                t.pendingProps, l_(H, Y);
                break;
              case T:
                var he = t.pendingProps;
                u_(H, he);
                break;
            }
          break;
        }
        default:
          return;
      }
    }
  }
  function Z0(e, t) {
    t.flags = t.flags & ~Fa | Zt, av(e, t);
  }
  function Q0(e, t) {
    switch (e.tag) {
      case k: {
        var r = e.type;
        e.pendingProps;
        var i = U9(t, r);
        return i !== null ? (e.stateNode = i, bn = e, Lr = j9(i), !0) : !1;
      }
      case T: {
        var s = e.pendingProps, u = F9(t, s);
        return u !== null ? (e.stateNode = u, bn = e, Lr = null, !0) : !1;
      }
      case j: {
        var f = V9(t);
        if (f !== null) {
          var h = {
            dehydrated: f,
            treeContext: x_(),
            retryLane: pr
          };
          e.memoizedState = h;
          var m = AE(f);
          return m.return = e, e.child = m, bn = e, Lr = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function iv(e) {
    return (e.mode & Ke) !== $e && (e.flags & st) === Te;
  }
  function ov(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function sv(e) {
    if (Gr) {
      var t = Lr;
      if (!t) {
        iv(e) && (av(bn, e), ov()), Z0(bn, e), Gr = !1, bn = e;
        return;
      }
      var r = t;
      if (!Q0(e, t)) {
        iv(e) && (av(bn, e), ov()), t = uu(r);
        var i = bn;
        if (!t || !Q0(e, t)) {
          Z0(bn, e), Gr = !1, bn = e;
          return;
        }
        K0(i, r);
      }
    }
  }
  function D_(e, t, r) {
    var i = e.stateNode, s = !_o, u = W9(i, e.type, e.memoizedProps, t, r, e, s);
    return e.updateQueue = u, u !== null;
  }
  function O_(e) {
    var t = e.stateNode, r = e.memoizedProps, i = K9(t, r, e);
    if (i) {
      var s = bn;
      if (s !== null)
        switch (s.tag) {
          case _: {
            var u = s.stateNode.containerInfo, f = (s.mode & Ke) !== $e;
            t_(
              u,
              t,
              r,
              // TODO: Delete this argument when we remove the legacy root API.
              f
            );
            break;
          }
          case k: {
            var h = s.type, m = s.memoizedProps, S = s.stateNode, x = (s.mode & Ke) !== $e;
            n_(
              h,
              m,
              S,
              t,
              r,
              // TODO: Delete this argument when we remove the legacy root API.
              x
            );
            break;
          }
        }
    }
    return i;
  }
  function L_(e) {
    var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
    if (!r)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    Z9(r, e);
  }
  function A_(e) {
    var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
    if (!r)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return Q9(r);
  }
  function X0(e) {
    for (var t = e.return; t !== null && t.tag !== k && t.tag !== _ && t.tag !== j; )
      t = t.return;
    bn = t;
  }
  function _d(e) {
    if (e !== bn)
      return !1;
    if (!Gr)
      return X0(e), Gr = !0, !1;
    if (e.tag !== _ && (e.tag !== k || e_(e.type) && !Vh(e.type, e.memoizedProps))) {
      var t = Lr;
      if (t)
        if (iv(e))
          J0(e), ov();
        else
          for (; t; )
            K0(e, t), t = uu(t);
    }
    return X0(e), e.tag === j ? Lr = A_(e) : Lr = bn ? uu(e.stateNode) : null, !0;
  }
  function M_() {
    return Gr && Lr !== null;
  }
  function J0(e) {
    for (var t = Lr; t; )
      W0(e, t), t = uu(t);
  }
  function ws() {
    bn = null, Lr = null, Gr = !1, _o = !1;
  }
  function eb() {
    Li !== null && (WC(Li), Li = null);
  }
  function Cn() {
    return Gr;
  }
  function lv(e) {
    Li === null ? Li = [e] : Li.push(e);
  }
  var q_ = o.ReactCurrentBatchConfig, z_ = null;
  function I_() {
    return q_.transition;
  }
  var Yr = {
    recordUnsafeLifecycleWarnings: function(e, t) {
    },
    flushPendingUnsafeLifecycleWarnings: function() {
    },
    recordLegacyContextWarning: function(e, t) {
    },
    flushLegacyContextWarning: function() {
    },
    discardPendingWarnings: function() {
    }
  };
  {
    var N_ = function(e) {
      for (var t = null, r = e; r !== null; )
        r.mode & Qt && (t = r), r = r.return;
      return t;
    }, xo = function(e) {
      var t = [];
      return e.forEach(function(r) {
        t.push(r);
      }), t.sort().join(", ");
    }, pu = [], hu = [], vu = [], mu = [], gu = [], yu = [], Eo = /* @__PURE__ */ new Set();
    Yr.recordUnsafeLifecycleWarnings = function(e, t) {
      Eo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && pu.push(e), e.mode & Qt && typeof t.UNSAFE_componentWillMount == "function" && hu.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vu.push(e), e.mode & Qt && typeof t.UNSAFE_componentWillReceiveProps == "function" && mu.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gu.push(e), e.mode & Qt && typeof t.UNSAFE_componentWillUpdate == "function" && yu.push(e));
    }, Yr.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      pu.length > 0 && (pu.forEach(function(L) {
        e.add(ze(L) || "Component"), Eo.add(L.type);
      }), pu = []);
      var t = /* @__PURE__ */ new Set();
      hu.length > 0 && (hu.forEach(function(L) {
        t.add(ze(L) || "Component"), Eo.add(L.type);
      }), hu = []);
      var r = /* @__PURE__ */ new Set();
      vu.length > 0 && (vu.forEach(function(L) {
        r.add(ze(L) || "Component"), Eo.add(L.type);
      }), vu = []);
      var i = /* @__PURE__ */ new Set();
      mu.length > 0 && (mu.forEach(function(L) {
        i.add(ze(L) || "Component"), Eo.add(L.type);
      }), mu = []);
      var s = /* @__PURE__ */ new Set();
      gu.length > 0 && (gu.forEach(function(L) {
        s.add(ze(L) || "Component"), Eo.add(L.type);
      }), gu = []);
      var u = /* @__PURE__ */ new Set();
      if (yu.length > 0 && (yu.forEach(function(L) {
        u.add(ze(L) || "Component"), Eo.add(L.type);
      }), yu = []), t.size > 0) {
        var f = xo(t);
        d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
      }
      if (i.size > 0) {
        var h = xo(i);
        d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
      }
      if (u.size > 0) {
        var m = xo(u);
        d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, m);
      }
      if (e.size > 0) {
        var S = xo(e);
        p(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
      }
      if (r.size > 0) {
        var x = xo(r);
        p(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
      }
      if (s.size > 0) {
        var A = xo(s);
        p(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
      }
    };
    var xd = /* @__PURE__ */ new Map(), tb = /* @__PURE__ */ new Set();
    Yr.recordLegacyContextWarning = function(e, t) {
      var r = N_(e);
      if (r === null) {
        d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!tb.has(e.type)) {
        var i = xd.get(r);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], xd.set(r, i)), i.push(e));
      }
    }, Yr.flushLegacyContextWarning = function() {
      xd.forEach(function(e, t) {
        if (e.length !== 0) {
          var r = e[0], i = /* @__PURE__ */ new Set();
          e.forEach(function(u) {
            i.add(ze(u) || "Component"), tb.add(u.type);
          });
          var s = xo(i);
          try {
            Nt(r), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s);
          } finally {
            hn();
          }
        }
      });
    }, Yr.discardPendingWarnings = function() {
      pu = [], hu = [], vu = [], mu = [], gu = [], yu = [], xd = /* @__PURE__ */ new Map();
    };
  }
  function Wr(e, t) {
    if (e && e.defaultProps) {
      var r = Ye({}, t), i = e.defaultProps;
      for (var s in i)
        r[s] === void 0 && (r[s] = i[s]);
      return r;
    }
    return t;
  }
  var uv = $i(null), cv;
  cv = {};
  var Ed = null, Ss = null, dv = null, Rd = !1;
  function kd() {
    Ed = null, Ss = null, dv = null, Rd = !1;
  }
  function nb() {
    Rd = !0;
  }
  function rb() {
    Rd = !1;
  }
  function ab(e, t, r) {
    zn(uv, t._currentValue, e), t._currentValue = r, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cv && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cv;
  }
  function fv(e, t) {
    var r = uv.current;
    qn(uv, t), e._currentValue = r;
  }
  function pv(e, t, r) {
    for (var i = e; i !== null; ) {
      var s = i.alternate;
      if (ss(i.childLanes, t) ? s !== null && !ss(s.childLanes, t) && (s.childLanes = Fe(s.childLanes, t)) : (i.childLanes = Fe(i.childLanes, t), s !== null && (s.childLanes = Fe(s.childLanes, t))), i === r)
        break;
      i = i.return;
    }
    i !== r && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function P_(e, t, r) {
    U_(e, t, r);
  }
  function U_(e, t, r) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var s = void 0, u = i.dependencies;
      if (u !== null) {
        s = i.child;
        for (var f = u.firstContext; f !== null; ) {
          if (f.context === t) {
            if (i.tag === b) {
              var h = Il(r), m = Xa(Et, h);
              m.tag = $d;
              var S = i.updateQueue;
              if (S !== null) {
                var x = S.shared, A = x.pending;
                A === null ? m.next = m : (m.next = A.next, A.next = m), x.pending = m;
              }
            }
            i.lanes = Fe(i.lanes, r);
            var L = i.alternate;
            L !== null && (L.lanes = Fe(L.lanes, r)), pv(i.return, r, e), u.lanes = Fe(u.lanes, r);
            break;
          }
          f = f.next;
        }
      } else if (i.tag === q)
        s = i.type === e.type ? null : i.child;
      else if (i.tag === ne) {
        var V = i.return;
        if (V === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        V.lanes = Fe(V.lanes, r);
        var H = V.alternate;
        H !== null && (H.lanes = Fe(H.lanes, r)), pv(V, r, e), s = i.sibling;
      } else
        s = i.child;
      if (s !== null)
        s.return = i;
      else
        for (s = i; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          var Y = s.sibling;
          if (Y !== null) {
            Y.return = s.return, s = Y;
            break;
          }
          s = s.return;
        }
      i = s;
    }
  }
  function _s(e, t) {
    Ed = e, Ss = null, dv = null;
    var r = e.dependencies;
    if (r !== null) {
      var i = r.firstContext;
      i !== null && (hr(r.lanes, t) && Lu(), r.firstContext = null);
    }
  }
  function Xt(e) {
    Rd && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (dv !== e) {
      var r = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (Ss === null) {
        if (Ed === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Ss = r, Ed.dependencies = {
          lanes: Q,
          firstContext: r
        };
      } else
        Ss = Ss.next = r;
    }
    return t;
  }
  var Ro = null;
  function hv(e) {
    Ro === null ? Ro = [e] : Ro.push(e);
  }
  function F_() {
    if (Ro !== null) {
      for (var e = 0; e < Ro.length; e++) {
        var t = Ro[e], r = t.interleaved;
        if (r !== null) {
          t.interleaved = null;
          var i = r.next, s = t.pending;
          if (s !== null) {
            var u = s.next;
            s.next = i, r.next = u;
          }
          t.pending = r;
        }
      }
      Ro = null;
    }
  }
  function ib(e, t, r, i) {
    var s = t.interleaved;
    return s === null ? (r.next = r, hv(t)) : (r.next = s.next, s.next = r), t.interleaved = r, Td(e, i);
  }
  function V_(e, t, r, i) {
    var s = t.interleaved;
    s === null ? (r.next = r, hv(t)) : (r.next = s.next, s.next = r), t.interleaved = r;
  }
  function H_(e, t, r, i) {
    var s = t.interleaved;
    return s === null ? (r.next = r, hv(t)) : (r.next = s.next, s.next = r), t.interleaved = r, Td(e, i);
  }
  function ar(e, t) {
    return Td(e, t);
  }
  var B_ = Td;
  function Td(e, t) {
    e.lanes = Fe(e.lanes, t);
    var r = e.alternate;
    r !== null && (r.lanes = Fe(r.lanes, t)), r === null && (e.flags & (Zt | Fa)) !== Te && ow(e);
    for (var i = e, s = e.return; s !== null; )
      s.childLanes = Fe(s.childLanes, t), r = s.alternate, r !== null ? r.childLanes = Fe(r.childLanes, t) : (s.flags & (Zt | Fa)) !== Te && ow(e), i = s, s = s.return;
    if (i.tag === _) {
      var u = i.stateNode;
      return u;
    } else
      return null;
  }
  var ob = 0, sb = 1, $d = 2, vv = 3, Dd = !1, mv, Od;
  mv = !1, Od = null;
  function gv(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: Q
      },
      effects: null
    };
    e.updateQueue = t;
  }
  function lb(e, t) {
    var r = t.updateQueue, i = e.updateQueue;
    if (r === i) {
      var s = {
        baseState: i.baseState,
        firstBaseUpdate: i.firstBaseUpdate,
        lastBaseUpdate: i.lastBaseUpdate,
        shared: i.shared,
        effects: i.effects
      };
      t.updateQueue = s;
    }
  }
  function Xa(e, t) {
    var r = {
      eventTime: e,
      lane: t,
      tag: ob,
      payload: null,
      callback: null,
      next: null
    };
    return r;
  }
  function Ai(e, t, r) {
    var i = e.updateQueue;
    if (i === null)
      return null;
    var s = i.shared;
    if (Od === s && !mv && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mv = !0), Bx()) {
      var u = s.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), s.pending = t, B_(e, r);
    } else
      return H_(e, s, t, r);
  }
  function Ld(e, t, r) {
    var i = t.updateQueue;
    if (i !== null) {
      var s = i.shared;
      if (E1(r)) {
        var u = s.lanes;
        u = k1(u, e.pendingLanes);
        var f = Fe(u, r);
        s.lanes = f, hh(e, f);
      }
    }
  }
  function yv(e, t) {
    var r = e.updateQueue, i = e.alternate;
    if (i !== null) {
      var s = i.updateQueue;
      if (r === s) {
        var u = null, f = null, h = r.firstBaseUpdate;
        if (h !== null) {
          var m = h;
          do {
            var S = {
              eventTime: m.eventTime,
              lane: m.lane,
              tag: m.tag,
              payload: m.payload,
              callback: m.callback,
              next: null
            };
            f === null ? u = f = S : (f.next = S, f = S), m = m.next;
          } while (m !== null);
          f === null ? u = f = t : (f.next = t, f = t);
        } else
          u = f = t;
        r = {
          baseState: s.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: f,
          shared: s.shared,
          effects: s.effects
        }, e.updateQueue = r;
        return;
      }
    }
    var x = r.lastBaseUpdate;
    x === null ? r.firstBaseUpdate = t : x.next = t, r.lastBaseUpdate = t;
  }
  function j_(e, t, r, i, s, u) {
    switch (r.tag) {
      case sb: {
        var f = r.payload;
        if (typeof f == "function") {
          nb();
          var h = f.call(u, i, s);
          {
            if (e.mode & Qt) {
              mn(!0);
              try {
                f.call(u, i, s);
              } finally {
                mn(!1);
              }
            }
            rb();
          }
          return h;
        }
        return f;
      }
      case vv:
        e.flags = e.flags & ~Bn | st;
      case ob: {
        var m = r.payload, S;
        if (typeof m == "function") {
          nb(), S = m.call(u, i, s);
          {
            if (e.mode & Qt) {
              mn(!0);
              try {
                m.call(u, i, s);
              } finally {
                mn(!1);
              }
            }
            rb();
          }
        } else
          S = m;
        return S == null ? i : Ye({}, i, S);
      }
      case $d:
        return Dd = !0, i;
    }
    return i;
  }
  function Ad(e, t, r, i) {
    var s = e.updateQueue;
    Dd = !1, Od = s.shared;
    var u = s.firstBaseUpdate, f = s.lastBaseUpdate, h = s.shared.pending;
    if (h !== null) {
      s.shared.pending = null;
      var m = h, S = m.next;
      m.next = null, f === null ? u = S : f.next = S, f = m;
      var x = e.alternate;
      if (x !== null) {
        var A = x.updateQueue, L = A.lastBaseUpdate;
        L !== f && (L === null ? A.firstBaseUpdate = S : L.next = S, A.lastBaseUpdate = m);
      }
    }
    if (u !== null) {
      var V = s.baseState, H = Q, Y = null, he = null, Ee = null, Se = u;
      do {
        var Qe = Se.lane, je = Se.eventTime;
        if (ss(i, Qe)) {
          if (Ee !== null) {
            var W = {
              eventTime: je,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: gn,
              tag: Se.tag,
              payload: Se.payload,
              callback: Se.callback,
              next: null
            };
            Ee = Ee.next = W;
          }
          V = j_(e, s, Se, V, t, r);
          var F = Se.callback;
          if (F !== null && // If the update was already committed, we should not queue its
          // callback again.
          Se.lane !== gn) {
            e.flags |= qp;
            var ee = s.effects;
            ee === null ? s.effects = [Se] : ee.push(Se);
          }
        } else {
          var U = {
            eventTime: je,
            lane: Qe,
            tag: Se.tag,
            payload: Se.payload,
            callback: Se.callback,
            next: null
          };
          Ee === null ? (he = Ee = U, Y = V) : Ee = Ee.next = U, H = Fe(H, Qe);
        }
        if (Se = Se.next, Se === null) {
          if (h = s.shared.pending, h === null)
            break;
          var ve = h, de = ve.next;
          ve.next = null, Se = de, s.lastBaseUpdate = ve, s.shared.pending = null;
        }
      } while (!0);
      Ee === null && (Y = V), s.baseState = Y, s.firstBaseUpdate = he, s.lastBaseUpdate = Ee;
      var Oe = s.shared.interleaved;
      if (Oe !== null) {
        var qe = Oe;
        do
          H = Fe(H, qe.lane), qe = qe.next;
        while (qe !== Oe);
      } else
        u === null && (s.shared.lanes = Q);
      Bu(H), e.lanes = H, e.memoizedState = V;
    }
    Od = null;
  }
  function G_(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function ub() {
    Dd = !1;
  }
  function Md() {
    return Dd;
  }
  function cb(e, t, r) {
    var i = t.effects;
    if (t.effects = null, i !== null)
      for (var s = 0; s < i.length; s++) {
        var u = i[s], f = u.callback;
        f !== null && (u.callback = null, G_(f, r));
      }
  }
  var bv = {}, db = new n.Component().refs, Cv, wv, Sv, _v, xv, fb, qd, Ev, Rv, kv;
  {
    Cv = /* @__PURE__ */ new Set(), wv = /* @__PURE__ */ new Set(), Sv = /* @__PURE__ */ new Set(), _v = /* @__PURE__ */ new Set(), Ev = /* @__PURE__ */ new Set(), xv = /* @__PURE__ */ new Set(), Rv = /* @__PURE__ */ new Set(), kv = /* @__PURE__ */ new Set();
    var pb = /* @__PURE__ */ new Set();
    qd = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var r = t + "_" + e;
        pb.has(r) || (pb.add(r), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, fb = function(e, t) {
      if (t === void 0) {
        var r = it(e) || "Component";
        xv.has(r) || (xv.add(r), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", r));
      }
    }, Object.defineProperty(bv, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(bv);
  }
  function Tv(e, t, r, i) {
    var s = e.memoizedState, u = r(i, s);
    {
      if (e.mode & Qt) {
        mn(!0);
        try {
          u = r(i, s);
        } finally {
          mn(!1);
        }
      }
      fb(t, u);
    }
    var f = u == null ? s : Ye({}, s, u);
    if (e.memoizedState = f, e.lanes === Q) {
      var h = e.updateQueue;
      h.baseState = f;
    }
  }
  var $v = {
    isMounted: t3,
    enqueueSetState: function(e, t, r) {
      var i = Jo(e), s = Yn(), u = Fi(i), f = Xa(s, u);
      f.payload = t, r != null && (qd(r, "setState"), f.callback = r);
      var h = Ai(i, f, u);
      h !== null && (fn(h, i, u, s), Ld(h, i, u)), Hp(i, u);
    },
    enqueueReplaceState: function(e, t, r) {
      var i = Jo(e), s = Yn(), u = Fi(i), f = Xa(s, u);
      f.tag = sb, f.payload = t, r != null && (qd(r, "replaceState"), f.callback = r);
      var h = Ai(i, f, u);
      h !== null && (fn(h, i, u, s), Ld(h, i, u)), Hp(i, u);
    },
    enqueueForceUpdate: function(e, t) {
      var r = Jo(e), i = Yn(), s = Fi(r), u = Xa(i, s);
      u.tag = $d, t != null && (qd(t, "forceUpdate"), u.callback = t);
      var f = Ai(r, u, s);
      f !== null && (fn(f, r, s, i), Ld(f, r, s)), L3(r, s);
    }
  };
  function hb(e, t, r, i, s, u, f) {
    var h = e.stateNode;
    if (typeof h.shouldComponentUpdate == "function") {
      var m = h.shouldComponentUpdate(i, u, f);
      {
        if (e.mode & Qt) {
          mn(!0);
          try {
            m = h.shouldComponentUpdate(i, u, f);
          } finally {
            mn(!1);
          }
        }
        m === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", it(t) || "Component");
      }
      return m;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !Xl(r, i) || !Xl(s, u) : !0;
  }
  function Y_(e, t, r) {
    var i = e.stateNode;
    {
      var s = it(t) || "Component", u = i.render;
      u || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), i.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), i.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), i.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !Rv.has(t) && (Rv.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof i.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", it(t) || "A pure component"), typeof i.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof i.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof i.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof i.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
      var f = i.props !== r;
      i.props !== void 0 && f && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), i.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Sv.has(t) && (Sv.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", it(t))), typeof i.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof i.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
      var h = i.state;
      h && (typeof h != "object" || ot(h)) && d("%s.state: must be set to an object or null", s), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
    }
  }
  function vb(e, t) {
    t.updater = $v, e.stateNode = t, Z6(t, e), t._reactInternalInstance = bv;
  }
  function mb(e, t, r) {
    var i = !1, s = yr, u = yr, f = t.contextType;
    if ("contextType" in t) {
      var h = (
        // Allow null for conditional declaration
        f === null || f !== void 0 && f.$$typeof === ie && f._context === void 0
      );
      if (!h && !kv.has(t)) {
        kv.add(t);
        var m = "";
        f === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? m = " However, it is set to a " + typeof f + "." : f.$$typeof === X ? m = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", it(t) || "Component", m);
      }
    }
    if (typeof f == "object" && f !== null)
      u = Xt(f);
    else {
      s = gs(e, t, !0);
      var S = t.contextTypes;
      i = S != null, u = i ? ys(e, s) : yr;
    }
    var x = new t(r, u);
    if (e.mode & Qt) {
      mn(!0);
      try {
        x = new t(r, u);
      } finally {
        mn(!1);
      }
    }
    var A = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
    vb(e, x);
    {
      if (typeof t.getDerivedStateFromProps == "function" && A === null) {
        var L = it(t) || "Component";
        wv.has(L) || (wv.add(L), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, x.state === null ? "null" : "undefined", L));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
        var V = null, H = null, Y = null;
        if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), V !== null || H !== null || Y !== null) {
          var he = it(t) || "Component", Ee = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          _v.has(he) || (_v.add(he), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, he, Ee, V !== null ? `
  ` + V : "", H !== null ? `
  ` + H : "", Y !== null ? `
  ` + Y : ""));
        }
      }
    }
    return i && U0(e, s, u), x;
  }
  function W_(e, t) {
    var r = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ze(e) || "Component"), $v.enqueueReplaceState(t, t.state, null));
  }
  function gb(e, t, r, i) {
    var s = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== s) {
      {
        var u = ze(e) || "Component";
        Cv.has(u) || (Cv.add(u), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", u));
      }
      $v.enqueueReplaceState(t, t.state, null);
    }
  }
  function Dv(e, t, r, i) {
    Y_(e, t, r);
    var s = e.stateNode;
    s.props = r, s.state = e.memoizedState, s.refs = db, gv(e);
    var u = t.contextType;
    if (typeof u == "object" && u !== null)
      s.context = Xt(u);
    else {
      var f = gs(e, t, !0);
      s.context = ys(e, f);
    }
    {
      if (s.state === r) {
        var h = it(t) || "Component";
        Ev.has(h) || (Ev.add(h), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
      }
      e.mode & Qt && Yr.recordLegacyContextWarning(e, s), Yr.recordUnsafeLifecycleWarnings(e, s);
    }
    s.state = e.memoizedState;
    var m = t.getDerivedStateFromProps;
    if (typeof m == "function" && (Tv(e, t, m, r), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (W_(e, s), Ad(e, r, s, i), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
      var S = Xe;
      S |= uo, (e.mode & fa) !== $e && (S |= Va), e.flags |= S;
    }
  }
  function K_(e, t, r, i) {
    var s = e.stateNode, u = e.memoizedProps;
    s.props = u;
    var f = s.context, h = t.contextType, m = yr;
    if (typeof h == "object" && h !== null)
      m = Xt(h);
    else {
      var S = gs(e, t, !0);
      m = ys(e, S);
    }
    var x = t.getDerivedStateFromProps, A = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (u !== r || f !== m) && gb(e, s, r, m), ub();
    var L = e.memoizedState, V = s.state = L;
    if (Ad(e, r, s, i), V = e.memoizedState, u === r && L === V && !md() && !Md()) {
      if (typeof s.componentDidMount == "function") {
        var H = Xe;
        H |= uo, (e.mode & fa) !== $e && (H |= Va), e.flags |= H;
      }
      return !1;
    }
    typeof x == "function" && (Tv(e, t, x, r), V = e.memoizedState);
    var Y = Md() || hb(e, t, u, r, L, V, m);
    if (Y) {
      if (!A && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
        var he = Xe;
        he |= uo, (e.mode & fa) !== $e && (he |= Va), e.flags |= he;
      }
    } else {
      if (typeof s.componentDidMount == "function") {
        var Ee = Xe;
        Ee |= uo, (e.mode & fa) !== $e && (Ee |= Va), e.flags |= Ee;
      }
      e.memoizedProps = r, e.memoizedState = V;
    }
    return s.props = r, s.state = V, s.context = m, Y;
  }
  function Z_(e, t, r, i, s) {
    var u = t.stateNode;
    lb(e, t);
    var f = t.memoizedProps, h = t.type === t.elementType ? f : Wr(t.type, f);
    u.props = h;
    var m = t.pendingProps, S = u.context, x = r.contextType, A = yr;
    if (typeof x == "object" && x !== null)
      A = Xt(x);
    else {
      var L = gs(t, r, !0);
      A = ys(t, L);
    }
    var V = r.getDerivedStateFromProps, H = typeof V == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    !H && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (f !== m || S !== A) && gb(t, u, i, A), ub();
    var Y = t.memoizedState, he = u.state = Y;
    if (Ad(t, i, u, s), he = t.memoizedState, f === m && Y === he && !md() && !Md() && !It)
      return typeof u.componentDidUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Xe), typeof u.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= so), !1;
    typeof V == "function" && (Tv(t, r, V, i), he = t.memoizedState);
    var Ee = Md() || hb(t, r, h, i, Y, he, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    It;
    return Ee ? (!H && (typeof u.UNSAFE_componentWillUpdate == "function" || typeof u.componentWillUpdate == "function") && (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, he, A), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(i, he, A)), typeof u.componentDidUpdate == "function" && (t.flags |= Xe), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= so)) : (typeof u.componentDidUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Xe), typeof u.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= so), t.memoizedProps = i, t.memoizedState = he), u.props = i, u.state = he, u.context = A, Ee;
  }
  var Ov, Lv, Av, Mv, qv, yb = function(e, t) {
  };
  Ov = !1, Lv = !1, Av = {}, Mv = {}, qv = {}, yb = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var r = ze(t) || "Component";
      Mv[r] || (Mv[r] = !0, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function bu(e, t, r) {
    var i = r.ref;
    if (i !== null && typeof i != "function" && typeof i != "object") {
      if ((e.mode & Qt || kt) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(r._owner && r._self && r._owner.stateNode !== r._self)) {
        var s = ze(e) || "Component";
        Av[s] || (d('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Av[s] = !0);
      }
      if (r._owner) {
        var u = r._owner, f;
        if (u) {
          var h = u;
          if (h.tag !== b)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          f = h.stateNode;
        }
        if (!f)
          throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
        var m = f;
        tn(i, "ref");
        var S = "" + i;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
          return t.ref;
        var x = function(A) {
          var L = m.refs;
          L === db && (L = m.refs = {}), A === null ? delete L[S] : L[S] = A;
        };
        return x._stringRef = S, x;
      } else {
        if (typeof i != "string")
          throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
        if (!r._owner)
          throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
      }
    }
    return i;
  }
  function zd(e, t) {
    var r = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
  }
  function Id(e) {
    {
      var t = ze(e) || "Component";
      if (qv[t])
        return;
      qv[t] = !0, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function bb(e) {
    var t = e._payload, r = e._init;
    return r(t);
  }
  function Cb(e) {
    function t(U, W) {
      if (e) {
        var F = U.deletions;
        F === null ? (U.deletions = [W], U.flags |= oo) : F.push(W);
      }
    }
    function r(U, W) {
      if (!e)
        return null;
      for (var F = W; F !== null; )
        t(U, F), F = F.sibling;
      return null;
    }
    function i(U, W) {
      for (var F = /* @__PURE__ */ new Map(), ee = W; ee !== null; )
        ee.key !== null ? F.set(ee.key, ee) : F.set(ee.index, ee), ee = ee.sibling;
      return F;
    }
    function s(U, W) {
      var F = Mo(U, W);
      return F.index = 0, F.sibling = null, F;
    }
    function u(U, W, F) {
      if (U.index = F, !e)
        return U.flags |= s1, W;
      var ee = U.alternate;
      if (ee !== null) {
        var ve = ee.index;
        return ve < W ? (U.flags |= Zt, W) : ve;
      } else
        return U.flags |= Zt, W;
    }
    function f(U) {
      return e && U.alternate === null && (U.flags |= Zt), U;
    }
    function h(U, W, F, ee) {
      if (W === null || W.tag !== T) {
        var ve = lg(F, U.mode, ee);
        return ve.return = U, ve;
      } else {
        var de = s(W, F);
        return de.return = U, de;
      }
    }
    function m(U, W, F, ee) {
      var ve = F.type;
      if (ve === la)
        return x(U, W, F.props.children, ee, F.key);
      if (W !== null && (W.elementType === ve || // Keep this check inline so it only runs on the false path:
      cw(W, F) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof ve == "object" && ve !== null && ve.$$typeof === ke && bb(ve) === W.type)) {
        var de = s(W, F.props);
        return de.ref = bu(U, W, F), de.return = U, de._debugSource = F._source, de._debugOwner = F._owner, de;
      }
      var Oe = sg(F, U.mode, ee);
      return Oe.ref = bu(U, W, F), Oe.return = U, Oe;
    }
    function S(U, W, F, ee) {
      if (W === null || W.tag !== R || W.stateNode.containerInfo !== F.containerInfo || W.stateNode.implementation !== F.implementation) {
        var ve = ug(F, U.mode, ee);
        return ve.return = U, ve;
      } else {
        var de = s(W, F.children || []);
        return de.return = U, de;
      }
    }
    function x(U, W, F, ee, ve) {
      if (W === null || W.tag !== O) {
        var de = Hi(F, U.mode, ee, ve);
        return de.return = U, de;
      } else {
        var Oe = s(W, F);
        return Oe.return = U, Oe;
      }
    }
    function A(U, W, F) {
      if (typeof W == "string" && W !== "" || typeof W == "number") {
        var ee = lg("" + W, U.mode, F);
        return ee.return = U, ee;
      }
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case sa: {
            var ve = sg(W, U.mode, F);
            return ve.ref = bu(U, null, W), ve.return = U, ve;
          }
          case Fr: {
            var de = ug(W, U.mode, F);
            return de.return = U, de;
          }
          case ke: {
            var Oe = W._payload, qe = W._init;
            return A(U, qe(Oe), F);
          }
        }
        if (ot(W) || Ma(W)) {
          var gt = Hi(W, U.mode, F, null);
          return gt.return = U, gt;
        }
        zd(U, W);
      }
      return typeof W == "function" && Id(U), null;
    }
    function L(U, W, F, ee) {
      var ve = W !== null ? W.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return ve !== null ? null : h(U, W, "" + F, ee);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case sa:
            return F.key === ve ? m(U, W, F, ee) : null;
          case Fr:
            return F.key === ve ? S(U, W, F, ee) : null;
          case ke: {
            var de = F._payload, Oe = F._init;
            return L(U, W, Oe(de), ee);
          }
        }
        if (ot(F) || Ma(F))
          return ve !== null ? null : x(U, W, F, ee, null);
        zd(U, F);
      }
      return typeof F == "function" && Id(U), null;
    }
    function V(U, W, F, ee, ve) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
        var de = U.get(F) || null;
        return h(W, de, "" + ee, ve);
      }
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case sa: {
            var Oe = U.get(ee.key === null ? F : ee.key) || null;
            return m(W, Oe, ee, ve);
          }
          case Fr: {
            var qe = U.get(ee.key === null ? F : ee.key) || null;
            return S(W, qe, ee, ve);
          }
          case ke:
            var gt = ee._payload, tt = ee._init;
            return V(U, W, F, tt(gt), ve);
        }
        if (ot(ee) || Ma(ee)) {
          var Gt = U.get(F) || null;
          return x(W, Gt, ee, ve, null);
        }
        zd(W, ee);
      }
      return typeof ee == "function" && Id(W), null;
    }
    function H(U, W, F) {
      {
        if (typeof U != "object" || U === null)
          return W;
        switch (U.$$typeof) {
          case sa:
          case Fr:
            yb(U, F);
            var ee = U.key;
            if (typeof ee != "string")
              break;
            if (W === null) {
              W = /* @__PURE__ */ new Set(), W.add(ee);
              break;
            }
            if (!W.has(ee)) {
              W.add(ee);
              break;
            }
            d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ee);
            break;
          case ke:
            var ve = U._payload, de = U._init;
            H(de(ve), W, F);
            break;
        }
      }
      return W;
    }
    function Y(U, W, F, ee) {
      for (var ve = null, de = 0; de < F.length; de++) {
        var Oe = F[de];
        ve = H(Oe, ve, U);
      }
      for (var qe = null, gt = null, tt = W, Gt = 0, nt = 0, Ht = null; tt !== null && nt < F.length; nt++) {
        tt.index > nt ? (Ht = tt, tt = null) : Ht = tt.sibling;
        var Nn = L(U, tt, F[nt], ee);
        if (Nn === null) {
          tt === null && (tt = Ht);
          break;
        }
        e && tt && Nn.alternate === null && t(U, tt), Gt = u(Nn, Gt, nt), gt === null ? qe = Nn : gt.sibling = Nn, gt = Nn, tt = Ht;
      }
      if (nt === F.length) {
        if (r(U, tt), Cn()) {
          var kn = nt;
          wo(U, kn);
        }
        return qe;
      }
      if (tt === null) {
        for (; nt < F.length; nt++) {
          var Cr = A(U, F[nt], ee);
          Cr !== null && (Gt = u(Cr, Gt, nt), gt === null ? qe = Cr : gt.sibling = Cr, gt = Cr);
        }
        if (Cn()) {
          var Wn = nt;
          wo(U, Wn);
        }
        return qe;
      }
      for (var Kn = i(U, tt); nt < F.length; nt++) {
        var Pn = V(Kn, U, nt, F[nt], ee);
        Pn !== null && (e && Pn.alternate !== null && Kn.delete(Pn.key === null ? nt : Pn.key), Gt = u(Pn, Gt, nt), gt === null ? qe = Pn : gt.sibling = Pn, gt = Pn);
      }
      if (e && Kn.forEach(function(Us) {
        return t(U, Us);
      }), Cn()) {
        var ai = nt;
        wo(U, ai);
      }
      return qe;
    }
    function he(U, W, F, ee) {
      var ve = Ma(F);
      if (typeof ve != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        F[Symbol.toStringTag] === "Generator" && (Lv || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Lv = !0), F.entries === ve && (Ov || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ov = !0);
        var de = ve.call(F);
        if (de)
          for (var Oe = null, qe = de.next(); !qe.done; qe = de.next()) {
            var gt = qe.value;
            Oe = H(gt, Oe, U);
          }
      }
      var tt = ve.call(F);
      if (tt == null)
        throw new Error("An iterable object provided no iterator.");
      for (var Gt = null, nt = null, Ht = W, Nn = 0, kn = 0, Cr = null, Wn = tt.next(); Ht !== null && !Wn.done; kn++, Wn = tt.next()) {
        Ht.index > kn ? (Cr = Ht, Ht = null) : Cr = Ht.sibling;
        var Kn = L(U, Ht, Wn.value, ee);
        if (Kn === null) {
          Ht === null && (Ht = Cr);
          break;
        }
        e && Ht && Kn.alternate === null && t(U, Ht), Nn = u(Kn, Nn, kn), nt === null ? Gt = Kn : nt.sibling = Kn, nt = Kn, Ht = Cr;
      }
      if (Wn.done) {
        if (r(U, Ht), Cn()) {
          var Pn = kn;
          wo(U, Pn);
        }
        return Gt;
      }
      if (Ht === null) {
        for (; !Wn.done; kn++, Wn = tt.next()) {
          var ai = A(U, Wn.value, ee);
          ai !== null && (Nn = u(ai, Nn, kn), nt === null ? Gt = ai : nt.sibling = ai, nt = ai);
        }
        if (Cn()) {
          var Us = kn;
          wo(U, Us);
        }
        return Gt;
      }
      for (var Ku = i(U, Ht); !Wn.done; kn++, Wn = tt.next()) {
        var _a = V(Ku, U, kn, Wn.value, ee);
        _a !== null && (e && _a.alternate !== null && Ku.delete(_a.key === null ? kn : _a.key), Nn = u(_a, Nn, kn), nt === null ? Gt = _a : nt.sibling = _a, nt = _a);
      }
      if (e && Ku.forEach(function(cR) {
        return t(U, cR);
      }), Cn()) {
        var uR = kn;
        wo(U, uR);
      }
      return Gt;
    }
    function Ee(U, W, F, ee) {
      if (W !== null && W.tag === T) {
        r(U, W.sibling);
        var ve = s(W, F);
        return ve.return = U, ve;
      }
      r(U, W);
      var de = lg(F, U.mode, ee);
      return de.return = U, de;
    }
    function Se(U, W, F, ee) {
      for (var ve = F.key, de = W; de !== null; ) {
        if (de.key === ve) {
          var Oe = F.type;
          if (Oe === la) {
            if (de.tag === O) {
              r(U, de.sibling);
              var qe = s(de, F.props.children);
              return qe.return = U, qe._debugSource = F._source, qe._debugOwner = F._owner, qe;
            }
          } else if (de.elementType === Oe || // Keep this check inline so it only runs on the false path:
          cw(de, F) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof Oe == "object" && Oe !== null && Oe.$$typeof === ke && bb(Oe) === de.type) {
            r(U, de.sibling);
            var gt = s(de, F.props);
            return gt.ref = bu(U, de, F), gt.return = U, gt._debugSource = F._source, gt._debugOwner = F._owner, gt;
          }
          r(U, de);
          break;
        } else
          t(U, de);
        de = de.sibling;
      }
      if (F.type === la) {
        var tt = Hi(F.props.children, U.mode, ee, F.key);
        return tt.return = U, tt;
      } else {
        var Gt = sg(F, U.mode, ee);
        return Gt.ref = bu(U, W, F), Gt.return = U, Gt;
      }
    }
    function Qe(U, W, F, ee) {
      for (var ve = F.key, de = W; de !== null; ) {
        if (de.key === ve)
          if (de.tag === R && de.stateNode.containerInfo === F.containerInfo && de.stateNode.implementation === F.implementation) {
            r(U, de.sibling);
            var Oe = s(de, F.children || []);
            return Oe.return = U, Oe;
          } else {
            r(U, de);
            break;
          }
        else
          t(U, de);
        de = de.sibling;
      }
      var qe = ug(F, U.mode, ee);
      return qe.return = U, qe;
    }
    function je(U, W, F, ee) {
      var ve = typeof F == "object" && F !== null && F.type === la && F.key === null;
      if (ve && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case sa:
            return f(Se(U, W, F, ee));
          case Fr:
            return f(Qe(U, W, F, ee));
          case ke:
            var de = F._payload, Oe = F._init;
            return je(U, W, Oe(de), ee);
        }
        if (ot(F))
          return Y(U, W, F, ee);
        if (Ma(F))
          return he(U, W, F, ee);
        zd(U, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? f(Ee(U, W, "" + F, ee)) : (typeof F == "function" && Id(U), r(U, W));
    }
    return je;
  }
  var xs = Cb(!0), wb = Cb(!1);
  function Q_(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var r = t.child, i = Mo(r, r.pendingProps);
      for (t.child = i, i.return = t; r.sibling !== null; )
        r = r.sibling, i = i.sibling = Mo(r, r.pendingProps), i.return = t;
      i.sibling = null;
    }
  }
  function X_(e, t) {
    for (var r = e.child; r !== null; )
      kE(r, t), r = r.sibling;
  }
  var Cu = {}, Mi = $i(Cu), wu = $i(Cu), Nd = $i(Cu);
  function Pd(e) {
    if (e === Cu)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function Sb() {
    var e = Pd(Nd.current);
    return e;
  }
  function zv(e, t) {
    zn(Nd, t, e), zn(wu, e, e), zn(Mi, Cu, e);
    var r = f9(t);
    qn(Mi, e), zn(Mi, r, e);
  }
  function Es(e) {
    qn(Mi, e), qn(wu, e), qn(Nd, e);
  }
  function Iv() {
    var e = Pd(Mi.current);
    return e;
  }
  function _b(e) {
    Pd(Nd.current);
    var t = Pd(Mi.current), r = p9(t, e.type);
    t !== r && (zn(wu, e, e), zn(Mi, r, e));
  }
  function Nv(e) {
    wu.current === e && (qn(Mi, e), qn(wu, e));
  }
  var J_ = 0, xb = 1, Eb = 1, Su = 2, Kr = $i(J_);
  function Pv(e, t) {
    return (e & t) !== 0;
  }
  function Rs(e) {
    return e & xb;
  }
  function Uv(e, t) {
    return e & xb | t;
  }
  function e4(e, t) {
    return e | t;
  }
  function qi(e, t) {
    zn(Kr, t, e);
  }
  function ks(e) {
    qn(Kr, e);
  }
  function t4(e, t) {
    var r = e.memoizedState;
    return r !== null ? r.dehydrated !== null : (e.memoizedProps, !0);
  }
  function Ud(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === j) {
        var r = t.memoizedState;
        if (r !== null) {
          var i = r.dehydrated;
          if (i === null || q0(i) || Gh(i))
            return t;
        }
      } else if (t.tag === re && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var s = (t.flags & st) !== Te;
        if (s)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        return null;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ir = (
    /*   */
    0
  ), an = (
    /* */
    1
  ), ma = (
    /*  */
    2
  ), on = (
    /*    */
    4
  ), wn = (
    /*   */
    8
  ), Fv = [];
  function Vv() {
    for (var e = 0; e < Fv.length; e++) {
      var t = Fv[e];
      t._workInProgressVersionPrimary = null;
    }
    Fv.length = 0;
  }
  function n4(e, t) {
    var r = t._getVersion, i = r(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
  }
  var pe = o.ReactCurrentDispatcher, _u = o.ReactCurrentBatchConfig, Hv, Ts;
  Hv = /* @__PURE__ */ new Set();
  var ko = Q, mt = null, sn = null, ln = null, Fd = !1, xu = !1, Eu = 0, r4 = 0, a4 = 25, K = null, Ar = null, zi = -1, Bv = !1;
  function ct() {
    {
      var e = K;
      Ar === null ? Ar = [e] : Ar.push(e);
    }
  }
  function ae() {
    {
      var e = K;
      Ar !== null && (zi++, Ar[zi] !== e && i4(e));
    }
  }
  function $s(e) {
    e != null && !ot(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", K, typeof e);
  }
  function i4(e) {
    {
      var t = ze(mt);
      if (!Hv.has(t) && (Hv.add(t), Ar !== null)) {
        for (var r = "", i = 30, s = 0; s <= zi; s++) {
          for (var u = Ar[s], f = s === zi ? e : u, h = s + 1 + ". " + u; h.length < i; )
            h += " ";
          h += f + `
`, r += h;
        }
        d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, r);
      }
    }
  }
  function In() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function jv(e, t) {
    if (Bv)
      return !1;
    if (t === null)
      return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", K), !1;
    e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, K, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!gr(e[r], t[r]))
        return !1;
    return !0;
  }
  function Ds(e, t, r, i, s, u) {
    ko = u, mt = t, Ar = e !== null ? e._debugHookTypes : null, zi = -1, Bv = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? pe.current = Yb : Ar !== null ? pe.current = Gb : pe.current = jb;
    var f = r(i, s);
    if (xu) {
      var h = 0;
      do {
        if (xu = !1, Eu = 0, h >= a4)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        h += 1, Bv = !1, sn = null, ln = null, t.updateQueue = null, zi = -1, pe.current = Wb, f = r(i, s);
      } while (xu);
    }
    pe.current = ef, t._debugHookTypes = Ar;
    var m = sn !== null && sn.next !== null;
    if (ko = Q, mt = null, sn = null, ln = null, K = null, Ar = null, zi = -1, e !== null && (e.flags & Ha) !== (t.flags & Ha) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & Ke) !== $e && d("Internal React error: Expected static flag was missing. Please notify the React team."), Fd = !1, m)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return f;
  }
  function Os() {
    var e = Eu !== 0;
    return Eu = 0, e;
  }
  function Rb(e, t, r) {
    t.updateQueue = e.updateQueue, (t.mode & fa) !== $e ? t.flags &= ~(Mc | Va | Vr | Xe) : t.flags &= ~(Vr | Xe), e.lanes = Fc(e.lanes, r);
  }
  function kb() {
    if (pe.current = ef, Fd) {
      for (var e = mt.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Fd = !1;
    }
    ko = Q, mt = null, sn = null, ln = null, Ar = null, zi = -1, K = null, Ub = !1, xu = !1, Eu = 0;
  }
  function ga() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ln === null ? mt.memoizedState = ln = e : ln = ln.next = e, ln;
  }
  function Mr() {
    var e;
    if (sn === null) {
      var t = mt.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = sn.next;
    var r;
    if (ln === null ? r = mt.memoizedState : r = ln.next, r !== null)
      ln = r, r = ln.next, sn = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      sn = e;
      var i = {
        memoizedState: sn.memoizedState,
        baseState: sn.baseState,
        baseQueue: sn.baseQueue,
        queue: sn.queue,
        next: null
      };
      ln === null ? mt.memoizedState = ln = i : ln = ln.next = i;
    }
    return ln;
  }
  function Tb() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function Gv(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yv(e, t, r) {
    var i = ga(), s;
    r !== void 0 ? s = r(t) : s = t, i.memoizedState = i.baseState = s;
    var u = {
      pending: null,
      interleaved: null,
      lanes: Q,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: s
    };
    i.queue = u;
    var f = u.dispatch = u4.bind(null, mt, u);
    return [i.memoizedState, f];
  }
  function Wv(e, t, r) {
    var i = Mr(), s = i.queue;
    if (s === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    s.lastRenderedReducer = e;
    var u = sn, f = u.baseQueue, h = s.pending;
    if (h !== null) {
      if (f !== null) {
        var m = f.next, S = h.next;
        f.next = S, h.next = m;
      }
      u.baseQueue !== f && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), u.baseQueue = f = h, s.pending = null;
    }
    if (f !== null) {
      var x = f.next, A = u.baseState, L = null, V = null, H = null, Y = x;
      do {
        var he = Y.lane;
        if (ss(ko, he)) {
          if (H !== null) {
            var Se = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: gn,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            };
            H = H.next = Se;
          }
          if (Y.hasEagerState)
            A = Y.eagerState;
          else {
            var Qe = Y.action;
            A = e(A, Qe);
          }
        } else {
          var Ee = {
            lane: he,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          };
          H === null ? (V = H = Ee, L = A) : H = H.next = Ee, mt.lanes = Fe(mt.lanes, he), Bu(he);
        }
        Y = Y.next;
      } while (Y !== null && Y !== x);
      H === null ? L = A : H.next = V, gr(A, i.memoizedState) || Lu(), i.memoizedState = A, i.baseState = L, i.baseQueue = H, s.lastRenderedState = A;
    }
    var je = s.interleaved;
    if (je !== null) {
      var U = je;
      do {
        var W = U.lane;
        mt.lanes = Fe(mt.lanes, W), Bu(W), U = U.next;
      } while (U !== je);
    } else
      f === null && (s.lanes = Q);
    var F = s.dispatch;
    return [i.memoizedState, F];
  }
  function Kv(e, t, r) {
    var i = Mr(), s = i.queue;
    if (s === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    s.lastRenderedReducer = e;
    var u = s.dispatch, f = s.pending, h = i.memoizedState;
    if (f !== null) {
      s.pending = null;
      var m = f.next, S = m;
      do {
        var x = S.action;
        h = e(h, x), S = S.next;
      } while (S !== m);
      gr(h, i.memoizedState) || Lu(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), s.lastRenderedState = h;
    }
    return [h, u];
  }
  function fz(e, t, r) {
  }
  function pz(e, t, r) {
  }
  function Zv(e, t, r) {
    var i = mt, s = ga(), u, f = Cn();
    if (f) {
      if (r === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      u = r(), Ts || u !== r() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ts = !0);
    } else {
      if (u = t(), !Ts) {
        var h = t();
        gr(u, h) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Ts = !0);
      }
      var m = bf();
      if (m === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      Uc(m, ko) || $b(i, t, u);
    }
    s.memoizedState = u;
    var S = {
      value: u,
      getSnapshot: t
    };
    return s.queue = S, Gd(Ob.bind(null, i, S, e), [e]), i.flags |= Vr, Ru(an | wn, Db.bind(null, i, S, u, t), void 0, null), u;
  }
  function Vd(e, t, r) {
    var i = mt, s = Mr(), u = t();
    if (!Ts) {
      var f = t();
      gr(u, f) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Ts = !0);
    }
    var h = s.memoizedState, m = !gr(h, u);
    m && (s.memoizedState = u, Lu());
    var S = s.queue;
    if (Tu(Ob.bind(null, i, S, e), [e]), S.getSnapshot !== t || m || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    ln !== null && ln.memoizedState.tag & an) {
      i.flags |= Vr, Ru(an | wn, Db.bind(null, i, S, u, t), void 0, null);
      var x = bf();
      if (x === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      Uc(x, ko) || $b(i, t, u);
    }
    return u;
  }
  function $b(e, t, r) {
    e.flags |= Ac;
    var i = {
      getSnapshot: t,
      value: r
    }, s = mt.updateQueue;
    if (s === null)
      s = Tb(), mt.updateQueue = s, s.stores = [i];
    else {
      var u = s.stores;
      u === null ? s.stores = [i] : u.push(i);
    }
  }
  function Db(e, t, r, i) {
    t.value = r, t.getSnapshot = i, Lb(t) && Ab(e);
  }
  function Ob(e, t, r) {
    var i = function() {
      Lb(t) && Ab(e);
    };
    return r(i);
  }
  function Lb(e) {
    var t = e.getSnapshot, r = e.value;
    try {
      var i = t();
      return !gr(r, i);
    } catch {
      return !0;
    }
  }
  function Ab(e) {
    var t = ar(e, Ae);
    t !== null && fn(t, e, Ae, Et);
  }
  function Hd(e) {
    var t = ga();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var r = {
      pending: null,
      interleaved: null,
      lanes: Q,
      dispatch: null,
      lastRenderedReducer: Gv,
      lastRenderedState: e
    };
    t.queue = r;
    var i = r.dispatch = c4.bind(null, mt, r);
    return [t.memoizedState, i];
  }
  function Qv(e) {
    return Wv(Gv);
  }
  function Xv(e) {
    return Kv(Gv);
  }
  function Ru(e, t, r, i) {
    var s = {
      tag: e,
      create: t,
      destroy: r,
      deps: i,
      // Circular
      next: null
    }, u = mt.updateQueue;
    if (u === null)
      u = Tb(), mt.updateQueue = u, u.lastEffect = s.next = s;
    else {
      var f = u.lastEffect;
      if (f === null)
        u.lastEffect = s.next = s;
      else {
        var h = f.next;
        f.next = s, s.next = h, u.lastEffect = s;
      }
    }
    return s;
  }
  function Jv(e) {
    var t = ga();
    {
      var r = {
        current: e
      };
      return t.memoizedState = r, r;
    }
  }
  function Bd(e) {
    var t = Mr();
    return t.memoizedState;
  }
  function ku(e, t, r, i) {
    var s = ga(), u = i === void 0 ? null : i;
    mt.flags |= e, s.memoizedState = Ru(an | t, r, void 0, u);
  }
  function jd(e, t, r, i) {
    var s = Mr(), u = i === void 0 ? null : i, f = void 0;
    if (sn !== null) {
      var h = sn.memoizedState;
      if (f = h.destroy, u !== null) {
        var m = h.deps;
        if (jv(u, m)) {
          s.memoizedState = Ru(t, r, f, u);
          return;
        }
      }
    }
    mt.flags |= e, s.memoizedState = Ru(an | t, r, f, u);
  }
  function Gd(e, t) {
    return (mt.mode & fa) !== $e ? ku(Mc | Vr | Np, wn, e, t) : ku(Vr | Np, wn, e, t);
  }
  function Tu(e, t) {
    return jd(Vr, wn, e, t);
  }
  function em(e, t) {
    return ku(Xe, ma, e, t);
  }
  function Yd(e, t) {
    return jd(Xe, ma, e, t);
  }
  function tm(e, t) {
    var r = Xe;
    return r |= uo, (mt.mode & fa) !== $e && (r |= Va), ku(r, on, e, t);
  }
  function Wd(e, t) {
    return jd(Xe, on, e, t);
  }
  function Mb(e, t) {
    if (typeof t == "function") {
      var r = t, i = e();
      return r(i), function() {
        r(null);
      };
    } else if (t != null) {
      var s = t;
      s.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(s).join(", ") + "}");
      var u = e();
      return s.current = u, function() {
        s.current = null;
      };
    }
  }
  function nm(e, t, r) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var i = r != null ? r.concat([e]) : null, s = Xe;
    return s |= uo, (mt.mode & fa) !== $e && (s |= Va), ku(s, on, Mb.bind(null, t, e), i);
  }
  function Kd(e, t, r) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var i = r != null ? r.concat([e]) : null;
    return jd(Xe, on, Mb.bind(null, t, e), i);
  }
  function o4(e, t) {
  }
  var Zd = o4;
  function rm(e, t) {
    var r = ga(), i = t === void 0 ? null : t;
    return r.memoizedState = [e, i], e;
  }
  function Qd(e, t) {
    var r = Mr(), i = t === void 0 ? null : t, s = r.memoizedState;
    if (s !== null && i !== null) {
      var u = s[1];
      if (jv(i, u))
        return s[0];
    }
    return r.memoizedState = [e, i], e;
  }
  function am(e, t) {
    var r = ga(), i = t === void 0 ? null : t, s = e();
    return r.memoizedState = [s, i], s;
  }
  function Xd(e, t) {
    var r = Mr(), i = t === void 0 ? null : t, s = r.memoizedState;
    if (s !== null && i !== null) {
      var u = s[1];
      if (jv(i, u))
        return s[0];
    }
    var f = e();
    return r.memoizedState = [f, i], f;
  }
  function im(e) {
    var t = ga();
    return t.memoizedState = e, e;
  }
  function qb(e) {
    var t = Mr(), r = sn, i = r.memoizedState;
    return Ib(t, i, e);
  }
  function zb(e) {
    var t = Mr();
    if (sn === null)
      return t.memoizedState = e, e;
    var r = sn.memoizedState;
    return Ib(t, r, e);
  }
  function Ib(e, t, r) {
    var i = !V3(ko);
    if (i) {
      if (!gr(r, t)) {
        var s = R1();
        mt.lanes = Fe(mt.lanes, s), Bu(s), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, Lu()), e.memoizedState = r, r;
  }
  function s4(e, t, r) {
    var i = Br();
    yn(Q3(i, ja)), e(!0);
    var s = _u.transition;
    _u.transition = {};
    var u = _u.transition;
    _u.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (yn(i), _u.transition = s, s === null && u._updatedFibers) {
        var f = u._updatedFibers.size;
        f > 10 && p("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
      }
    }
  }
  function om() {
    var e = Hd(!1), t = e[0], r = e[1], i = s4.bind(null, r), s = ga();
    return s.memoizedState = i, [t, i];
  }
  function Nb() {
    var e = Qv(), t = e[0], r = Mr(), i = r.memoizedState;
    return [t, i];
  }
  function Pb() {
    var e = Xv(), t = e[0], r = Mr(), i = r.memoizedState;
    return [t, i];
  }
  var Ub = !1;
  function l4() {
    return Ub;
  }
  function sm() {
    var e = ga(), t = bf(), r = t.identifierPrefix, i;
    if (Cn()) {
      var s = S_();
      i = ":" + r + "R" + s;
      var u = Eu++;
      u > 0 && (i += "H" + u.toString(32)), i += ":";
    } else {
      var f = r4++;
      i = ":" + r + "r" + f.toString(32) + ":";
    }
    return e.memoizedState = i, i;
  }
  function Jd() {
    var e = Mr(), t = e.memoizedState;
    return t;
  }
  function u4(e, t, r) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var i = Fi(e), s = {
      lane: i,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fb(e))
      Vb(t, s);
    else {
      var u = ib(e, t, s, i);
      if (u !== null) {
        var f = Yn();
        fn(u, e, i, f), Hb(u, t, i);
      }
    }
    Bb(e, i);
  }
  function c4(e, t, r) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var i = Fi(e), s = {
      lane: i,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fb(e))
      Vb(t, s);
    else {
      var u = e.alternate;
      if (e.lanes === Q && (u === null || u.lanes === Q)) {
        var f = t.lastRenderedReducer;
        if (f !== null) {
          var h;
          h = pe.current, pe.current = Zr;
          try {
            var m = t.lastRenderedState, S = f(m, r);
            if (s.hasEagerState = !0, s.eagerState = S, gr(S, m)) {
              V_(e, t, s, i);
              return;
            }
          } catch {
          } finally {
            pe.current = h;
          }
        }
      }
      var x = ib(e, t, s, i);
      if (x !== null) {
        var A = Yn();
        fn(x, e, i, A), Hb(x, t, i);
      }
    }
    Bb(e, i);
  }
  function Fb(e) {
    var t = e.alternate;
    return e === mt || t !== null && t === mt;
  }
  function Vb(e, t) {
    xu = Fd = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function Hb(e, t, r) {
    if (E1(r)) {
      var i = t.lanes;
      i = k1(i, e.pendingLanes);
      var s = Fe(i, r);
      t.lanes = s, hh(e, s);
    }
  }
  function Bb(e, t, r) {
    Hp(e, t);
  }
  var ef = {
    readContext: Xt,
    useCallback: In,
    useContext: In,
    useEffect: In,
    useImperativeHandle: In,
    useInsertionEffect: In,
    useLayoutEffect: In,
    useMemo: In,
    useReducer: In,
    useRef: In,
    useState: In,
    useDebugValue: In,
    useDeferredValue: In,
    useTransition: In,
    useMutableSource: In,
    useSyncExternalStore: In,
    useId: In,
    unstable_isNewReconciler: Ie
  }, jb = null, Gb = null, Yb = null, Wb = null, ya = null, Zr = null, tf = null;
  {
    var lm = function() {
      d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, Me = function() {
      d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    jb = {
      readContext: function(e) {
        return Xt(e);
      },
      useCallback: function(e, t) {
        return K = "useCallback", ct(), $s(t), rm(e, t);
      },
      useContext: function(e) {
        return K = "useContext", ct(), Xt(e);
      },
      useEffect: function(e, t) {
        return K = "useEffect", ct(), $s(t), Gd(e, t);
      },
      useImperativeHandle: function(e, t, r) {
        return K = "useImperativeHandle", ct(), $s(r), nm(e, t, r);
      },
      useInsertionEffect: function(e, t) {
        return K = "useInsertionEffect", ct(), $s(t), em(e, t);
      },
      useLayoutEffect: function(e, t) {
        return K = "useLayoutEffect", ct(), $s(t), tm(e, t);
      },
      useMemo: function(e, t) {
        K = "useMemo", ct(), $s(t);
        var r = pe.current;
        pe.current = ya;
        try {
          return am(e, t);
        } finally {
          pe.current = r;
        }
      },
      useReducer: function(e, t, r) {
        K = "useReducer", ct();
        var i = pe.current;
        pe.current = ya;
        try {
          return Yv(e, t, r);
        } finally {
          pe.current = i;
        }
      },
      useRef: function(e) {
        return K = "useRef", ct(), Jv(e);
      },
      useState: function(e) {
        K = "useState", ct();
        var t = pe.current;
        pe.current = ya;
        try {
          return Hd(e);
        } finally {
          pe.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return K = "useDebugValue", ct(), void 0;
      },
      useDeferredValue: function(e) {
        return K = "useDeferredValue", ct(), im(e);
      },
      useTransition: function() {
        return K = "useTransition", ct(), om();
      },
      useMutableSource: function(e, t, r) {
        return K = "useMutableSource", ct(), void 0;
      },
      useSyncExternalStore: function(e, t, r) {
        return K = "useSyncExternalStore", ct(), Zv(e, t, r);
      },
      useId: function() {
        return K = "useId", ct(), sm();
      },
      unstable_isNewReconciler: Ie
    }, Gb = {
      readContext: function(e) {
        return Xt(e);
      },
      useCallback: function(e, t) {
        return K = "useCallback", ae(), rm(e, t);
      },
      useContext: function(e) {
        return K = "useContext", ae(), Xt(e);
      },
      useEffect: function(e, t) {
        return K = "useEffect", ae(), Gd(e, t);
      },
      useImperativeHandle: function(e, t, r) {
        return K = "useImperativeHandle", ae(), nm(e, t, r);
      },
      useInsertionEffect: function(e, t) {
        return K = "useInsertionEffect", ae(), em(e, t);
      },
      useLayoutEffect: function(e, t) {
        return K = "useLayoutEffect", ae(), tm(e, t);
      },
      useMemo: function(e, t) {
        K = "useMemo", ae();
        var r = pe.current;
        pe.current = ya;
        try {
          return am(e, t);
        } finally {
          pe.current = r;
        }
      },
      useReducer: function(e, t, r) {
        K = "useReducer", ae();
        var i = pe.current;
        pe.current = ya;
        try {
          return Yv(e, t, r);
        } finally {
          pe.current = i;
        }
      },
      useRef: function(e) {
        return K = "useRef", ae(), Jv(e);
      },
      useState: function(e) {
        K = "useState", ae();
        var t = pe.current;
        pe.current = ya;
        try {
          return Hd(e);
        } finally {
          pe.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return K = "useDebugValue", ae(), void 0;
      },
      useDeferredValue: function(e) {
        return K = "useDeferredValue", ae(), im(e);
      },
      useTransition: function() {
        return K = "useTransition", ae(), om();
      },
      useMutableSource: function(e, t, r) {
        return K = "useMutableSource", ae(), void 0;
      },
      useSyncExternalStore: function(e, t, r) {
        return K = "useSyncExternalStore", ae(), Zv(e, t, r);
      },
      useId: function() {
        return K = "useId", ae(), sm();
      },
      unstable_isNewReconciler: Ie
    }, Yb = {
      readContext: function(e) {
        return Xt(e);
      },
      useCallback: function(e, t) {
        return K = "useCallback", ae(), Qd(e, t);
      },
      useContext: function(e) {
        return K = "useContext", ae(), Xt(e);
      },
      useEffect: function(e, t) {
        return K = "useEffect", ae(), Tu(e, t);
      },
      useImperativeHandle: function(e, t, r) {
        return K = "useImperativeHandle", ae(), Kd(e, t, r);
      },
      useInsertionEffect: function(e, t) {
        return K = "useInsertionEffect", ae(), Yd(e, t);
      },
      useLayoutEffect: function(e, t) {
        return K = "useLayoutEffect", ae(), Wd(e, t);
      },
      useMemo: function(e, t) {
        K = "useMemo", ae();
        var r = pe.current;
        pe.current = Zr;
        try {
          return Xd(e, t);
        } finally {
          pe.current = r;
        }
      },
      useReducer: function(e, t, r) {
        K = "useReducer", ae();
        var i = pe.current;
        pe.current = Zr;
        try {
          return Wv(e, t, r);
        } finally {
          pe.current = i;
        }
      },
      useRef: function(e) {
        return K = "useRef", ae(), Bd();
      },
      useState: function(e) {
        K = "useState", ae();
        var t = pe.current;
        pe.current = Zr;
        try {
          return Qv(e);
        } finally {
          pe.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return K = "useDebugValue", ae(), Zd();
      },
      useDeferredValue: function(e) {
        return K = "useDeferredValue", ae(), qb(e);
      },
      useTransition: function() {
        return K = "useTransition", ae(), Nb();
      },
      useMutableSource: function(e, t, r) {
        return K = "useMutableSource", ae(), void 0;
      },
      useSyncExternalStore: function(e, t, r) {
        return K = "useSyncExternalStore", ae(), Vd(e, t);
      },
      useId: function() {
        return K = "useId", ae(), Jd();
      },
      unstable_isNewReconciler: Ie
    }, Wb = {
      readContext: function(e) {
        return Xt(e);
      },
      useCallback: function(e, t) {
        return K = "useCallback", ae(), Qd(e, t);
      },
      useContext: function(e) {
        return K = "useContext", ae(), Xt(e);
      },
      useEffect: function(e, t) {
        return K = "useEffect", ae(), Tu(e, t);
      },
      useImperativeHandle: function(e, t, r) {
        return K = "useImperativeHandle", ae(), Kd(e, t, r);
      },
      useInsertionEffect: function(e, t) {
        return K = "useInsertionEffect", ae(), Yd(e, t);
      },
      useLayoutEffect: function(e, t) {
        return K = "useLayoutEffect", ae(), Wd(e, t);
      },
      useMemo: function(e, t) {
        K = "useMemo", ae();
        var r = pe.current;
        pe.current = tf;
        try {
          return Xd(e, t);
        } finally {
          pe.current = r;
        }
      },
      useReducer: function(e, t, r) {
        K = "useReducer", ae();
        var i = pe.current;
        pe.current = tf;
        try {
          return Kv(e, t, r);
        } finally {
          pe.current = i;
        }
      },
      useRef: function(e) {
        return K = "useRef", ae(), Bd();
      },
      useState: function(e) {
        K = "useState", ae();
        var t = pe.current;
        pe.current = tf;
        try {
          return Xv(e);
        } finally {
          pe.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return K = "useDebugValue", ae(), Zd();
      },
      useDeferredValue: function(e) {
        return K = "useDeferredValue", ae(), zb(e);
      },
      useTransition: function() {
        return K = "useTransition", ae(), Pb();
      },
      useMutableSource: function(e, t, r) {
        return K = "useMutableSource", ae(), void 0;
      },
      useSyncExternalStore: function(e, t, r) {
        return K = "useSyncExternalStore", ae(), Vd(e, t);
      },
      useId: function() {
        return K = "useId", ae(), Jd();
      },
      unstable_isNewReconciler: Ie
    }, ya = {
      readContext: function(e) {
        return lm(), Xt(e);
      },
      useCallback: function(e, t) {
        return K = "useCallback", Me(), ct(), rm(e, t);
      },
      useContext: function(e) {
        return K = "useContext", Me(), ct(), Xt(e);
      },
      useEffect: function(e, t) {
        return K = "useEffect", Me(), ct(), Gd(e, t);
      },
      useImperativeHandle: function(e, t, r) {
        return K = "useImperativeHandle", Me(), ct(), nm(e, t, r);
      },
      useInsertionEffect: function(e, t) {
        return K = "useInsertionEffect", Me(), ct(), em(e, t);
      },
      useLayoutEffect: function(e, t) {
        return K = "useLayoutEffect", Me(), ct(), tm(e, t);
      },
      useMemo: function(e, t) {
        K = "useMemo", Me(), ct();
        var r = pe.current;
        pe.current = ya;
        try {
          return am(e, t);
        } finally {
          pe.current = r;
        }
      },
      useReducer: function(e, t, r) {
        K = "useReducer", Me(), ct();
        var i = pe.current;
        pe.current = ya;
        try {
          return Yv(e, t, r);
        } finally {
          pe.current = i;
        }
      },
      useRef: function(e) {
        return K = "useRef", Me(), ct(), Jv(e);
      },
      useState: function(e) {
        K = "useState", Me(), ct();
        var t = pe.current;
        pe.current = ya;
        try {
          return Hd(e);
        } finally {
          pe.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return K = "useDebugValue", Me(), ct(), void 0;
      },
      useDeferredValue: function(e) {
        return K = "useDeferredValue", Me(), ct(), im(e);
      },
      useTransition: function() {
        return K = "useTransition", Me(), ct(), om();
      },
      useMutableSource: function(e, t, r) {
        return K = "useMutableSource", Me(), ct(), void 0;
      },
      useSyncExternalStore: function(e, t, r) {
        return K = "useSyncExternalStore", Me(), ct(), Zv(e, t, r);
      },
      useId: function() {
        return K = "useId", Me(), ct(), sm();
      },
      unstable_isNewReconciler: Ie
    }, Zr = {
      readContext: function(e) {
        return lm(), Xt(e);
      },
      useCallback: function(e, t) {
        return K = "useCallback", Me(), ae(), Qd(e, t);
      },
      useContext: function(e) {
        return K = "useContext", Me(), ae(), Xt(e);
      },
      useEffect: function(e, t) {
        return K = "useEffect", Me(), ae(), Tu(e, t);
      },
      useImperativeHandle: function(e, t, r) {
        return K = "useImperativeHandle", Me(), ae(), Kd(e, t, r);
      },
      useInsertionEffect: function(e, t) {
        return K = "useInsertionEffect", Me(), ae(), Yd(e, t);
      },
      useLayoutEffect: function(e, t) {
        return K = "useLayoutEffect", Me(), ae(), Wd(e, t);
      },
      useMemo: function(e, t) {
        K = "useMemo", Me(), ae();
        var r = pe.current;
        pe.current = Zr;
        try {
          return Xd(e, t);
        } finally {
          pe.current = r;
        }
      },
      useReducer: function(e, t, r) {
        K = "useReducer", Me(), ae();
        var i = pe.current;
        pe.current = Zr;
        try {
          return Wv(e, t, r);
        } finally {
          pe.current = i;
        }
      },
      useRef: function(e) {
        return K = "useRef", Me(), ae(), Bd();
      },
      useState: function(e) {
        K = "useState", Me(), ae();
        var t = pe.current;
        pe.current = Zr;
        try {
          return Qv(e);
        } finally {
          pe.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return K = "useDebugValue", Me(), ae(), Zd();
      },
      useDeferredValue: function(e) {
        return K = "useDeferredValue", Me(), ae(), qb(e);
      },
      useTransition: function() {
        return K = "useTransition", Me(), ae(), Nb();
      },
      useMutableSource: function(e, t, r) {
        return K = "useMutableSource", Me(), ae(), void 0;
      },
      useSyncExternalStore: function(e, t, r) {
        return K = "useSyncExternalStore", Me(), ae(), Vd(e, t);
      },
      useId: function() {
        return K = "useId", Me(), ae(), Jd();
      },
      unstable_isNewReconciler: Ie
    }, tf = {
      readContext: function(e) {
        return lm(), Xt(e);
      },
      useCallback: function(e, t) {
        return K = "useCallback", Me(), ae(), Qd(e, t);
      },
      useContext: function(e) {
        return K = "useContext", Me(), ae(), Xt(e);
      },
      useEffect: function(e, t) {
        return K = "useEffect", Me(), ae(), Tu(e, t);
      },
      useImperativeHandle: function(e, t, r) {
        return K = "useImperativeHandle", Me(), ae(), Kd(e, t, r);
      },
      useInsertionEffect: function(e, t) {
        return K = "useInsertionEffect", Me(), ae(), Yd(e, t);
      },
      useLayoutEffect: function(e, t) {
        return K = "useLayoutEffect", Me(), ae(), Wd(e, t);
      },
      useMemo: function(e, t) {
        K = "useMemo", Me(), ae();
        var r = pe.current;
        pe.current = Zr;
        try {
          return Xd(e, t);
        } finally {
          pe.current = r;
        }
      },
      useReducer: function(e, t, r) {
        K = "useReducer", Me(), ae();
        var i = pe.current;
        pe.current = Zr;
        try {
          return Kv(e, t, r);
        } finally {
          pe.current = i;
        }
      },
      useRef: function(e) {
        return K = "useRef", Me(), ae(), Bd();
      },
      useState: function(e) {
        K = "useState", Me(), ae();
        var t = pe.current;
        pe.current = Zr;
        try {
          return Xv(e);
        } finally {
          pe.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return K = "useDebugValue", Me(), ae(), Zd();
      },
      useDeferredValue: function(e) {
        return K = "useDeferredValue", Me(), ae(), zb(e);
      },
      useTransition: function() {
        return K = "useTransition", Me(), ae(), Pb();
      },
      useMutableSource: function(e, t, r) {
        return K = "useMutableSource", Me(), ae(), void 0;
      },
      useSyncExternalStore: function(e, t, r) {
        return K = "useSyncExternalStore", Me(), ae(), Vd(e, t);
      },
      useId: function() {
        return K = "useId", Me(), ae(), Jd();
      },
      unstable_isNewReconciler: Ie
    };
  }
  var Ii = a.unstable_now, Kb = 0, nf = -1, $u = -1, rf = -1, um = !1, af = !1;
  function Zb() {
    return um;
  }
  function d4() {
    af = !0;
  }
  function f4() {
    um = !1, af = !1;
  }
  function p4() {
    um = af, af = !1;
  }
  function Qb() {
    return Kb;
  }
  function Xb() {
    Kb = Ii();
  }
  function cm(e) {
    $u = Ii(), e.actualStartTime < 0 && (e.actualStartTime = Ii());
  }
  function Jb(e) {
    $u = -1;
  }
  function of(e, t) {
    if ($u >= 0) {
      var r = Ii() - $u;
      e.actualDuration += r, t && (e.selfBaseDuration = r), $u = -1;
    }
  }
  function ba(e) {
    if (nf >= 0) {
      var t = Ii() - nf;
      nf = -1;
      for (var r = e.return; r !== null; ) {
        switch (r.tag) {
          case _:
            var i = r.stateNode;
            i.effectDuration += t;
            return;
          case Z:
            var s = r.stateNode;
            s.effectDuration += t;
            return;
        }
        r = r.return;
      }
    }
  }
  function dm(e) {
    if (rf >= 0) {
      var t = Ii() - rf;
      rf = -1;
      for (var r = e.return; r !== null; ) {
        switch (r.tag) {
          case _:
            var i = r.stateNode;
            i !== null && (i.passiveEffectDuration += t);
            return;
          case Z:
            var s = r.stateNode;
            s !== null && (s.passiveEffectDuration += t);
            return;
        }
        r = r.return;
      }
    }
  }
  function Ca() {
    nf = Ii();
  }
  function fm() {
    rf = Ii();
  }
  function pm(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function To(e, t) {
    return {
      value: e,
      source: t,
      stack: gl(t),
      digest: null
    };
  }
  function hm(e, t, r) {
    return {
      value: e,
      source: null,
      stack: r ?? null,
      digest: t ?? null
    };
  }
  function h4(e, t) {
    return !0;
  }
  function vm(e, t) {
    try {
      var r = h4(e, t);
      if (r === !1)
        return;
      var i = t.value, s = t.source, u = t.stack, f = u !== null ? u : "";
      if (i != null && i._suppressLogging) {
        if (e.tag === b)
          return;
        console.error(i);
      }
      var h = s ? ze(s) : null, m = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", S;
      if (e.tag === _)
        S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var x = ze(e) || "Anonymous";
        S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
      }
      var A = m + `
` + f + `

` + ("" + S);
      console.error(A);
    } catch (L) {
      setTimeout(function() {
        throw L;
      });
    }
  }
  var v4 = typeof WeakMap == "function" ? WeakMap : Map;
  function eC(e, t, r) {
    var i = Xa(Et, r);
    i.tag = vv, i.payload = {
      element: null
    };
    var s = t.value;
    return i.callback = function() {
      sE(s), vm(e, t);
    }, i;
  }
  function mm(e, t, r) {
    var i = Xa(Et, r);
    i.tag = vv;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = t.value;
      i.payload = function() {
        return s(u);
      }, i.callback = function() {
        dw(e), vm(e, t);
      };
    }
    var f = e.stateNode;
    return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
      dw(e), vm(e, t), typeof s != "function" && iE(this);
      var m = t.value, S = t.stack;
      this.componentDidCatch(m, {
        componentStack: S !== null ? S : ""
      }), typeof s != "function" && (hr(e.lanes, Ae) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ze(e) || "Unknown"));
    }), i;
  }
  function tC(e, t, r) {
    var i = e.pingCache, s;
    if (i === null ? (i = e.pingCache = new v4(), s = /* @__PURE__ */ new Set(), i.set(t, s)) : (s = i.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s))), !s.has(r)) {
      s.add(r);
      var u = lE.bind(null, e, t, r);
      Hr && ju(e, r), t.then(u, u);
    }
  }
  function m4(e, t, r, i) {
    var s = e.updateQueue;
    if (s === null) {
      var u = /* @__PURE__ */ new Set();
      u.add(r), e.updateQueue = u;
    } else
      s.add(r);
  }
  function g4(e, t) {
    var r = e.tag;
    if ((e.mode & Ke) === $e && (r === w || r === P || r === N)) {
      var i = e.alternate;
      i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function nC(e) {
    var t = e;
    do {
      if (t.tag === j && t4(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function rC(e, t, r, i, s) {
    if ((e.mode & Ke) === $e) {
      if (e === t)
        e.flags |= Bn;
      else {
        if (e.flags |= st, r.flags |= zp, r.flags &= ~(Q6 | $l), r.tag === b) {
          var u = r.alternate;
          if (u === null)
            r.tag = Ce;
          else {
            var f = Xa(Et, Ae);
            f.tag = $d, Ai(r, f, Ae);
          }
        }
        r.lanes = Fe(r.lanes, Ae);
      }
      return e;
    }
    return e.flags |= Bn, e.lanes = s, e;
  }
  function y4(e, t, r, i, s) {
    if (r.flags |= $l, Hr && ju(e, s), i !== null && typeof i == "object" && typeof i.then == "function") {
      var u = i;
      g4(r), Cn() && r.mode & Ke && Y0();
      var f = nC(t);
      if (f !== null) {
        f.flags &= ~Ua, rC(f, t, r, e, s), f.mode & Ke && tC(e, u, s), m4(f, e, u);
        return;
      } else {
        if (!F3(s)) {
          tC(e, u, s), Km();
          return;
        }
        var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        i = h;
      }
    } else if (Cn() && r.mode & Ke) {
      Y0();
      var m = nC(t);
      if (m !== null) {
        (m.flags & Bn) === Te && (m.flags |= Ua), rC(m, t, r, e, s), lv(To(i, r));
        return;
      }
    }
    i = To(i, r), Qx(i);
    var S = t;
    do {
      switch (S.tag) {
        case _: {
          var x = i;
          S.flags |= Bn;
          var A = Il(s);
          S.lanes = Fe(S.lanes, A);
          var L = eC(S, x, A);
          yv(S, L);
          return;
        }
        case b:
          var V = i, H = S.type, Y = S.stateNode;
          if ((S.flags & st) === Te && (typeof H.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && !nw(Y))) {
            S.flags |= Bn;
            var he = Il(s);
            S.lanes = Fe(S.lanes, he);
            var Ee = mm(S, V, he);
            yv(S, Ee);
            return;
          }
          break;
      }
      S = S.return;
    } while (S !== null);
  }
  function b4() {
    return null;
  }
  var Du = o.ReactCurrentOwner, Qr = !1, gm, Ou, ym, bm, Cm, $o, wm, sf;
  gm = {}, Ou = {}, ym = {}, bm = {}, Cm = {}, $o = !1, wm = {}, sf = {};
  function jn(e, t, r, i) {
    e === null ? t.child = wb(t, null, r, i) : t.child = xs(t, e.child, r, i);
  }
  function C4(e, t, r, i) {
    t.child = xs(t, e.child, null, i), t.child = xs(t, null, r, i);
  }
  function aC(e, t, r, i, s) {
    if (t.type !== t.elementType) {
      var u = r.propTypes;
      u && jr(
        u,
        i,
        // Resolved props
        "prop",
        it(r)
      );
    }
    var f = r.render, h = t.ref, m, S;
    _s(t, s), Ol(t);
    {
      if (Du.current = t, fr(!0), m = Ds(e, t, f, i, h, s), S = Os(), t.mode & Qt) {
        mn(!0);
        try {
          m = Ds(e, t, f, i, h, s), S = Os();
        } finally {
          mn(!1);
        }
      }
      fr(!1);
    }
    return rs(), e !== null && !Qr ? (Rb(e, t, s), Ja(e, t, s)) : (Cn() && S && nv(t), t.flags |= es, jn(e, t, m, s), t.child);
  }
  function iC(e, t, r, i, s) {
    if (e === null) {
      var u = r.type;
      if (EE(u) && r.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      r.defaultProps === void 0) {
        var f = u;
        return f = Ps(u), t.tag = N, t.type = f, xm(t, u), oC(e, t, f, i, s);
      }
      {
        var h = u.propTypes;
        h && jr(
          h,
          i,
          // Resolved props
          "prop",
          it(u)
        );
      }
      var m = og(r.type, null, i, t, t.mode, s);
      return m.ref = t.ref, m.return = t, t.child = m, m;
    }
    {
      var S = r.type, x = S.propTypes;
      x && jr(
        x,
        i,
        // Resolved props
        "prop",
        it(S)
      );
    }
    var A = e.child, L = Dm(e, s);
    if (!L) {
      var V = A.memoizedProps, H = r.compare;
      if (H = H !== null ? H : Xl, H(V, i) && e.ref === t.ref)
        return Ja(e, t, s);
    }
    t.flags |= es;
    var Y = Mo(A, i);
    return Y.ref = t.ref, Y.return = t, t.child = Y, Y;
  }
  function oC(e, t, r, i, s) {
    if (t.type !== t.elementType) {
      var u = t.elementType;
      if (u.$$typeof === ke) {
        var f = u, h = f._payload, m = f._init;
        try {
          u = m(h);
        } catch {
          u = null;
        }
        var S = u && u.propTypes;
        S && jr(
          S,
          i,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          it(u)
        );
      }
    }
    if (e !== null) {
      var x = e.memoizedProps;
      if (Xl(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (Qr = !1, t.pendingProps = i = x, Dm(e, s))
          (e.flags & zp) !== Te && (Qr = !0);
        else
          return t.lanes = e.lanes, Ja(e, t, s);
    }
    return Sm(e, t, r, i, s);
  }
  function sC(e, t, r) {
    var i = t.pendingProps, s = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden" || bt)
      if ((t.mode & Ke) === $e) {
        var f = {
          baseLanes: Q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = f, Cf(t, r);
      } else if (hr(r, pr)) {
        var A = {
          baseLanes: Q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = A;
        var L = u !== null ? u.baseLanes : r;
        Cf(t, L);
      } else {
        var h = null, m;
        if (u !== null) {
          var S = u.baseLanes;
          m = Fe(S, r);
        } else
          m = r;
        t.lanes = t.childLanes = pr;
        var x = {
          baseLanes: m,
          cachePool: h,
          transitions: null
        };
        return t.memoizedState = x, t.updateQueue = null, Cf(t, m), null;
      }
    else {
      var V;
      u !== null ? (V = Fe(u.baseLanes, r), t.memoizedState = null) : V = r, Cf(t, V);
    }
    return jn(e, t, s, r), t.child;
  }
  function w4(e, t, r) {
    var i = t.pendingProps;
    return jn(e, t, i, r), t.child;
  }
  function S4(e, t, r) {
    var i = t.pendingProps.children;
    return jn(e, t, i, r), t.child;
  }
  function _4(e, t, r) {
    {
      t.flags |= Xe;
      {
        var i = t.stateNode;
        i.effectDuration = 0, i.passiveEffectDuration = 0;
      }
    }
    var s = t.pendingProps, u = s.children;
    return jn(e, t, u, r), t.child;
  }
  function lC(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= wi, t.flags |= Ip);
  }
  function Sm(e, t, r, i, s) {
    if (t.type !== t.elementType) {
      var u = r.propTypes;
      u && jr(
        u,
        i,
        // Resolved props
        "prop",
        it(r)
      );
    }
    var f;
    {
      var h = gs(t, r, !0);
      f = ys(t, h);
    }
    var m, S;
    _s(t, s), Ol(t);
    {
      if (Du.current = t, fr(!0), m = Ds(e, t, r, i, f, s), S = Os(), t.mode & Qt) {
        mn(!0);
        try {
          m = Ds(e, t, r, i, f, s), S = Os();
        } finally {
          mn(!1);
        }
      }
      fr(!1);
    }
    return rs(), e !== null && !Qr ? (Rb(e, t, s), Ja(e, t, s)) : (Cn() && S && nv(t), t.flags |= es, jn(e, t, m, s), t.child);
  }
  function uC(e, t, r, i, s) {
    {
      switch (UE(t)) {
        case !1: {
          var u = t.stateNode, f = t.type, h = new f(t.memoizedProps, u.context), m = h.state;
          u.updater.enqueueSetState(u, m, null);
          break;
        }
        case !0: {
          t.flags |= st, t.flags |= Bn;
          var S = new Error("Simulated error coming from DevTools"), x = Il(s);
          t.lanes = Fe(t.lanes, x);
          var A = mm(t, To(S, t), x);
          yv(t, A);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var L = r.propTypes;
        L && jr(
          L,
          i,
          // Resolved props
          "prop",
          it(r)
        );
      }
    }
    var V;
    va(r) ? (V = !0, yd(t)) : V = !1, _s(t, s);
    var H = t.stateNode, Y;
    H === null ? (uf(e, t), mb(t, r, i), Dv(t, r, i, s), Y = !0) : e === null ? Y = K_(t, r, i, s) : Y = Z_(e, t, r, i, s);
    var he = _m(e, t, r, Y, V, s);
    {
      var Ee = t.stateNode;
      Y && Ee.props !== i && ($o || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ze(t) || "a component"), $o = !0);
    }
    return he;
  }
  function _m(e, t, r, i, s, u) {
    lC(e, t);
    var f = (t.flags & st) !== Te;
    if (!i && !f)
      return s && H0(t, r, !1), Ja(e, t, u);
    var h = t.stateNode;
    Du.current = t;
    var m;
    if (f && typeof r.getDerivedStateFromError != "function")
      m = null, Jb();
    else {
      Ol(t);
      {
        if (fr(!0), m = h.render(), t.mode & Qt) {
          mn(!0);
          try {
            h.render();
          } finally {
            mn(!1);
          }
        }
        fr(!1);
      }
      rs();
    }
    return t.flags |= es, e !== null && f ? C4(e, t, m, u) : jn(e, t, m, u), t.memoizedState = h.state, s && H0(t, r, !0), t.child;
  }
  function cC(e) {
    var t = e.stateNode;
    t.pendingContext ? F0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && F0(e, t.context, !1), zv(e, t.containerInfo);
  }
  function x4(e, t, r) {
    if (cC(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var i = t.pendingProps, s = t.memoizedState, u = s.element;
    lb(e, t), Ad(t, i, null, r);
    var f = t.memoizedState;
    t.stateNode;
    var h = f.element;
    if (s.isDehydrated) {
      var m = {
        element: h,
        isDehydrated: !1,
        cache: f.cache,
        pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
        transitions: f.transitions
      }, S = t.updateQueue;
      if (S.baseState = m, t.memoizedState = m, t.flags & Ua) {
        var x = To(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return dC(e, t, h, r, x);
      } else if (h !== u) {
        var A = To(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return dC(e, t, h, r, A);
      } else {
        T_(t);
        var L = wb(t, null, h, r);
        t.child = L;
        for (var V = L; V; )
          V.flags = V.flags & ~Zt | Fa, V = V.sibling;
      }
    } else {
      if (ws(), h === u)
        return Ja(e, t, r);
      jn(e, t, h, r);
    }
    return t.child;
  }
  function dC(e, t, r, i, s) {
    return ws(), lv(s), t.flags |= Ua, jn(e, t, r, i), t.child;
  }
  function E4(e, t, r) {
    _b(t), e === null && sv(t);
    var i = t.type, s = t.pendingProps, u = e !== null ? e.memoizedProps : null, f = s.children, h = Vh(i, s);
    return h ? f = null : u !== null && Vh(i, u) && (t.flags |= Tl), lC(e, t), jn(e, t, f, r), t.child;
  }
  function R4(e, t) {
    return e === null && sv(t), null;
  }
  function k4(e, t, r, i) {
    uf(e, t);
    var s = t.pendingProps, u = r, f = u._payload, h = u._init, m = h(f);
    t.type = m;
    var S = t.tag = RE(m), x = Wr(m, s), A;
    switch (S) {
      case w:
        return xm(t, m), t.type = m = Ps(m), A = Sm(null, t, m, x, i), A;
      case b:
        return t.type = m = eg(m), A = uC(null, t, m, x, i), A;
      case P:
        return t.type = m = tg(m), A = aC(null, t, m, x, i), A;
      case I: {
        if (t.type !== t.elementType) {
          var L = m.propTypes;
          L && jr(
            L,
            x,
            // Resolved for outer only
            "prop",
            it(m)
          );
        }
        return A = iC(
          null,
          t,
          m,
          Wr(m.type, x),
          // The inner type can have defaults too
          i
        ), A;
      }
    }
    var V = "";
    throw m !== null && typeof m == "object" && m.$$typeof === ke && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + m + ". " + ("Lazy element type must resolve to a class or function." + V));
  }
  function T4(e, t, r, i, s) {
    uf(e, t), t.tag = b;
    var u;
    return va(r) ? (u = !0, yd(t)) : u = !1, _s(t, s), mb(t, r, i), Dv(t, r, i, s), _m(null, t, r, !0, u, s);
  }
  function $4(e, t, r, i) {
    uf(e, t);
    var s = t.pendingProps, u;
    {
      var f = gs(t, r, !1);
      u = ys(t, f);
    }
    _s(t, i);
    var h, m;
    Ol(t);
    {
      if (r.prototype && typeof r.prototype.render == "function") {
        var S = it(r) || "Unknown";
        gm[S] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), gm[S] = !0);
      }
      t.mode & Qt && Yr.recordLegacyContextWarning(t, null), fr(!0), Du.current = t, h = Ds(null, t, r, s, u, i), m = Os(), fr(!1);
    }
    if (rs(), t.flags |= es, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
      var x = it(r) || "Unknown";
      Ou[x] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Ou[x] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
    ) {
      {
        var A = it(r) || "Unknown";
        Ou[A] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), Ou[A] = !0);
      }
      t.tag = b, t.memoizedState = null, t.updateQueue = null;
      var L = !1;
      return va(r) ? (L = !0, yd(t)) : L = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, gv(t), vb(t, h), Dv(t, r, s, i), _m(null, t, r, !0, L, i);
    } else {
      if (t.tag = w, t.mode & Qt) {
        mn(!0);
        try {
          h = Ds(null, t, r, s, u, i), m = Os();
        } finally {
          mn(!1);
        }
      }
      return Cn() && m && nv(t), jn(null, t, h, i), xm(t, r), t.child;
    }
  }
  function xm(e, t) {
    {
      if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var r = "", i = gi();
        i && (r += `

Check the render method of \`` + i + "`.");
        var s = i || "", u = e._debugSource;
        u && (s = u.fileName + ":" + u.lineNumber), Cm[s] || (Cm[s] = !0, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", r));
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var f = it(t) || "Unknown";
        bm[f] || (d("%s: Function components do not support getDerivedStateFromProps.", f), bm[f] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var h = it(t) || "Unknown";
        ym[h] || (d("%s: Function components do not support contextType.", h), ym[h] = !0);
      }
    }
  }
  var Em = {
    dehydrated: null,
    treeContext: null,
    retryLane: gn
  };
  function Rm(e) {
    return {
      baseLanes: e,
      cachePool: b4(),
      transitions: null
    };
  }
  function D4(e, t) {
    var r = null;
    return {
      baseLanes: Fe(e.baseLanes, t),
      cachePool: r,
      transitions: e.transitions
    };
  }
  function O4(e, t, r, i) {
    if (t !== null) {
      var s = t.memoizedState;
      if (s === null)
        return !1;
    }
    return Pv(e, Su);
  }
  function L4(e, t) {
    return Fc(e.childLanes, t);
  }
  function fC(e, t, r) {
    var i = t.pendingProps;
    FE(t) && (t.flags |= st);
    var s = Kr.current, u = !1, f = (t.flags & st) !== Te;
    if (f || O4(s, e) ? (u = !0, t.flags &= ~st) : (e === null || e.memoizedState !== null) && (s = e4(s, Eb)), s = Rs(s), qi(t, s), e === null) {
      sv(t);
      var h = t.memoizedState;
      if (h !== null) {
        var m = h.dehydrated;
        if (m !== null)
          return I4(t, m);
      }
      var S = i.children, x = i.fallback;
      if (u) {
        var A = A4(t, S, x, r), L = t.child;
        return L.memoizedState = Rm(r), t.memoizedState = Em, A;
      } else
        return km(t, S);
    } else {
      var V = e.memoizedState;
      if (V !== null) {
        var H = V.dehydrated;
        if (H !== null)
          return N4(e, t, f, i, H, V, r);
      }
      if (u) {
        var Y = i.fallback, he = i.children, Ee = q4(e, t, he, Y, r), Se = t.child, Qe = e.child.memoizedState;
        return Se.memoizedState = Qe === null ? Rm(r) : D4(Qe, r), Se.childLanes = L4(e, r), t.memoizedState = Em, Ee;
      } else {
        var je = i.children, U = M4(e, t, je, r);
        return t.memoizedState = null, U;
      }
    }
  }
  function km(e, t, r) {
    var i = e.mode, s = {
      mode: "visible",
      children: t
    }, u = Tm(s, i);
    return u.return = e, e.child = u, u;
  }
  function A4(e, t, r, i) {
    var s = e.mode, u = e.child, f = {
      mode: "hidden",
      children: t
    }, h, m;
    return (s & Ke) === $e && u !== null ? (h = u, h.childLanes = Q, h.pendingProps = f, e.mode & vt && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), m = Hi(r, s, i, null)) : (h = Tm(f, s), m = Hi(r, s, i, null)), h.return = e, m.return = e, h.sibling = m, e.child = h, m;
  }
  function Tm(e, t, r) {
    return pw(e, t, Q, null);
  }
  function pC(e, t) {
    return Mo(e, t);
  }
  function M4(e, t, r, i) {
    var s = e.child, u = s.sibling, f = pC(s, {
      mode: "visible",
      children: r
    });
    if ((t.mode & Ke) === $e && (f.lanes = i), f.return = t, f.sibling = null, u !== null) {
      var h = t.deletions;
      h === null ? (t.deletions = [u], t.flags |= oo) : h.push(u);
    }
    return t.child = f, f;
  }
  function q4(e, t, r, i, s) {
    var u = t.mode, f = e.child, h = f.sibling, m = {
      mode: "hidden",
      children: r
    }, S;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (u & Ke) === $e && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== f
    ) {
      var x = t.child;
      S = x, S.childLanes = Q, S.pendingProps = m, t.mode & vt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f.selfBaseDuration, S.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
    } else
      S = pC(f, m), S.subtreeFlags = f.subtreeFlags & Ha;
    var A;
    return h !== null ? A = Mo(h, i) : (A = Hi(i, u, s, null), A.flags |= Zt), A.return = t, S.return = t, S.sibling = A, t.child = S, A;
  }
  function lf(e, t, r, i) {
    i !== null && lv(i), xs(t, e.child, null, r);
    var s = t.pendingProps, u = s.children, f = km(t, u);
    return f.flags |= Zt, t.memoizedState = null, f;
  }
  function z4(e, t, r, i, s) {
    var u = t.mode, f = {
      mode: "visible",
      children: r
    }, h = Tm(f, u), m = Hi(i, u, s, null);
    return m.flags |= Zt, h.return = t, m.return = t, h.sibling = m, t.child = h, (t.mode & Ke) !== $e && xs(t, e.child, null, s), m;
  }
  function I4(e, t, r) {
    return (e.mode & Ke) === $e ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Gh(t) ? e.lanes = po : e.lanes = pr, null;
  }
  function N4(e, t, r, i, s, u, f) {
    if (r)
      if (t.flags & Ua) {
        t.flags &= ~Ua;
        var U = hm(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return lf(e, t, f, U);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= st, null;
        var W = i.children, F = i.fallback, ee = z4(e, t, W, F, f), ve = t.child;
        return ve.memoizedState = Rm(f), t.memoizedState = Em, ee;
      }
    else {
      if (R_(), (t.mode & Ke) === $e)
        return lf(
          e,
          t,
          f,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Gh(s)) {
        var h, m, S;
        {
          var x = H9(s);
          h = x.digest, m = x.message, S = x.stack;
        }
        var A;
        m ? A = new Error(m) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var L = hm(A, h, S);
        return lf(e, t, f, L);
      }
      var V = hr(f, e.childLanes);
      if (Qr || V) {
        var H = bf();
        if (H !== null) {
          var Y = K3(H, f);
          if (Y !== gn && Y !== u.retryLane) {
            u.retryLane = Y;
            var he = Et;
            ar(e, Y), fn(H, e, Y, he);
          }
        }
        Km();
        var Ee = hm(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return lf(e, t, f, Ee);
      } else if (q0(s)) {
        t.flags |= st, t.child = e.child;
        var Se = uE.bind(null, e);
        return B9(s, Se), null;
      } else {
        $_(t, s, u.treeContext);
        var Qe = i.children, je = km(t, Qe);
        return je.flags |= Fa, je;
      }
    }
  }
  function hC(e, t, r) {
    e.lanes = Fe(e.lanes, t);
    var i = e.alternate;
    i !== null && (i.lanes = Fe(i.lanes, t)), pv(e.return, t, r);
  }
  function P4(e, t, r) {
    for (var i = t; i !== null; ) {
      if (i.tag === j) {
        var s = i.memoizedState;
        s !== null && hC(i, r, e);
      } else if (i.tag === re)
        hC(i, r, e);
      else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === e)
        return;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e)
          return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }
  function U4(e) {
    for (var t = e, r = null; t !== null; ) {
      var i = t.alternate;
      i !== null && Ud(i) === null && (r = t), t = t.sibling;
    }
    return r;
  }
  function F4(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !wm[e])
      if (wm[e] = !0, typeof e == "string")
        switch (e.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards": {
            d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
            break;
          }
          case "forward":
          case "backward": {
            d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
            break;
          }
          default:
            d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
            break;
        }
      else
        d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
  }
  function V4(e, t) {
    e !== void 0 && !sf[e] && (e !== "collapsed" && e !== "hidden" ? (sf[e] = !0, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (sf[e] = !0, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function vC(e, t) {
    {
      var r = ot(e), i = !r && typeof Ma(e) == "function";
      if (r || i) {
        var s = r ? "array" : "iterable";
        return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
      }
    }
    return !0;
  }
  function H4(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (ot(e)) {
        for (var r = 0; r < e.length; r++)
          if (!vC(e[r], r))
            return;
      } else {
        var i = Ma(e);
        if (typeof i == "function") {
          var s = i.call(e);
          if (s)
            for (var u = s.next(), f = 0; !u.done; u = s.next()) {
              if (!vC(u.value, f))
                return;
              f++;
            }
        } else
          d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function $m(e, t, r, i, s) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: r,
      tailMode: s
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = r, u.tailMode = s);
  }
  function mC(e, t, r) {
    var i = t.pendingProps, s = i.revealOrder, u = i.tail, f = i.children;
    F4(s), V4(u, s), H4(f, s), jn(e, t, f, r);
    var h = Kr.current, m = Pv(h, Su);
    if (m)
      h = Uv(h, Su), t.flags |= st;
    else {
      var S = e !== null && (e.flags & st) !== Te;
      S && P4(t, t.child, r), h = Rs(h);
    }
    if (qi(t, h), (t.mode & Ke) === $e)
      t.memoizedState = null;
    else
      switch (s) {
        case "forwards": {
          var x = U4(t.child), A;
          x === null ? (A = t.child, t.child = null) : (A = x.sibling, x.sibling = null), $m(
            t,
            !1,
            // isBackwards
            A,
            x,
            u
          );
          break;
        }
        case "backwards": {
          var L = null, V = t.child;
          for (t.child = null; V !== null; ) {
            var H = V.alternate;
            if (H !== null && Ud(H) === null) {
              t.child = V;
              break;
            }
            var Y = V.sibling;
            V.sibling = L, L = V, V = Y;
          }
          $m(
            t,
            !0,
            // isBackwards
            L,
            null,
            // last
            u
          );
          break;
        }
        case "together": {
          $m(
            t,
            !1,
            // isBackwards
            null,
            // tail
            null,
            // last
            void 0
          );
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function B4(e, t, r) {
    zv(t, t.stateNode.containerInfo);
    var i = t.pendingProps;
    return e === null ? t.child = xs(t, null, i, r) : jn(e, t, i, r), t.child;
  }
  var gC = !1;
  function j4(e, t, r) {
    var i = t.type, s = i._context, u = t.pendingProps, f = t.memoizedProps, h = u.value;
    {
      "value" in u || gC || (gC = !0, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var m = t.type.propTypes;
      m && jr(m, u, "prop", "Context.Provider");
    }
    if (ab(t, s, h), f !== null) {
      var S = f.value;
      if (gr(S, h)) {
        if (f.children === u.children && !md())
          return Ja(e, t, r);
      } else
        P_(t, s, r);
    }
    var x = u.children;
    return jn(e, t, x, r), t.child;
  }
  var yC = !1;
  function G4(e, t, r) {
    var i = t.type;
    i._context === void 0 ? i !== i.Consumer && (yC || (yC = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
    var s = t.pendingProps, u = s.children;
    typeof u != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), _s(t, r);
    var f = Xt(i);
    Ol(t);
    var h;
    return Du.current = t, fr(!0), h = u(f), fr(!1), rs(), t.flags |= es, jn(e, t, h, r), t.child;
  }
  function Lu() {
    Qr = !0;
  }
  function uf(e, t) {
    (t.mode & Ke) === $e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
  }
  function Ja(e, t, r) {
    return e !== null && (t.dependencies = e.dependencies), Jb(), Bu(t.lanes), hr(r, t.childLanes) ? (Q_(e, t), t.child) : null;
  }
  function Y4(e, t, r) {
    {
      var i = t.return;
      if (i === null)
        throw new Error("Cannot swap the root fiber.");
      if (e.alternate = null, t.alternate = null, r.index = t.index, r.sibling = t.sibling, r.return = t.return, r.ref = t.ref, t === i.child)
        i.child = r;
      else {
        var s = i.child;
        if (s === null)
          throw new Error("Expected parent to have a child.");
        for (; s.sibling !== t; )
          if (s = s.sibling, s === null)
            throw new Error("Expected to find the previous sibling.");
        s.sibling = r;
      }
      var u = i.deletions;
      return u === null ? (i.deletions = [e], i.flags |= oo) : u.push(e), r.flags |= Zt, r;
    }
  }
  function Dm(e, t) {
    var r = e.lanes;
    return !!hr(r, t);
  }
  function W4(e, t, r) {
    switch (t.tag) {
      case _:
        cC(t), t.stateNode, ws();
        break;
      case k:
        _b(t);
        break;
      case b: {
        var i = t.type;
        va(i) && yd(t);
        break;
      }
      case R:
        zv(t, t.stateNode.containerInfo);
        break;
      case q: {
        var s = t.memoizedProps.value, u = t.type._context;
        ab(t, u, s);
        break;
      }
      case Z:
        {
          var f = hr(r, t.childLanes);
          f && (t.flags |= Xe);
          {
            var h = t.stateNode;
            h.effectDuration = 0, h.passiveEffectDuration = 0;
          }
        }
        break;
      case j: {
        var m = t.memoizedState;
        if (m !== null) {
          if (m.dehydrated !== null)
            return qi(t, Rs(Kr.current)), t.flags |= st, null;
          var S = t.child, x = S.childLanes;
          if (hr(r, x))
            return fC(e, t, r);
          qi(t, Rs(Kr.current));
          var A = Ja(e, t, r);
          return A !== null ? A.sibling : null;
        } else
          qi(t, Rs(Kr.current));
        break;
      }
      case re: {
        var L = (e.flags & st) !== Te, V = hr(r, t.childLanes);
        if (L) {
          if (V)
            return mC(e, t, r);
          t.flags |= st;
        }
        var H = t.memoizedState;
        if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), qi(t, Kr.current), V)
          break;
        return null;
      }
      case le:
      case oe:
        return t.lanes = Q, sC(e, t, r);
    }
    return Ja(e, t, r);
  }
  function bC(e, t, r) {
    if (t._debugNeedsRemount && e !== null)
      return Y4(e, t, og(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var i = e.memoizedProps, s = t.pendingProps;
      if (i !== s || md() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        Qr = !0;
      else {
        var u = Dm(e, r);
        if (!u && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & st) === Te)
          return Qr = !1, W4(e, t, r);
        (e.flags & zp) !== Te ? Qr = !0 : Qr = !1;
      }
    } else if (Qr = !1, Cn() && C_(t)) {
      var f = t.index, h = w_();
      G0(t, h, f);
    }
    switch (t.lanes = Q, t.tag) {
      case E:
        return $4(e, t, t.type, r);
      case J: {
        var m = t.elementType;
        return k4(e, t, m, r);
      }
      case w: {
        var S = t.type, x = t.pendingProps, A = t.elementType === S ? x : Wr(S, x);
        return Sm(e, t, S, A, r);
      }
      case b: {
        var L = t.type, V = t.pendingProps, H = t.elementType === L ? V : Wr(L, V);
        return uC(e, t, L, H, r);
      }
      case _:
        return x4(e, t, r);
      case k:
        return E4(e, t, r);
      case T:
        return R4(e, t);
      case j:
        return fC(e, t, r);
      case R:
        return B4(e, t, r);
      case P: {
        var Y = t.type, he = t.pendingProps, Ee = t.elementType === Y ? he : Wr(Y, he);
        return aC(e, t, Y, Ee, r);
      }
      case O:
        return w4(e, t, r);
      case z:
        return S4(e, t, r);
      case Z:
        return _4(e, t, r);
      case q:
        return j4(e, t, r);
      case M:
        return G4(e, t, r);
      case I: {
        var Se = t.type, Qe = t.pendingProps, je = Wr(Se, Qe);
        if (t.type !== t.elementType) {
          var U = Se.propTypes;
          U && jr(
            U,
            je,
            // Resolved for outer only
            "prop",
            it(Se)
          );
        }
        return je = Wr(Se.type, je), iC(e, t, Se, je, r);
      }
      case N:
        return oC(e, t, t.type, t.pendingProps, r);
      case Ce: {
        var W = t.type, F = t.pendingProps, ee = t.elementType === W ? F : Wr(W, F);
        return T4(e, t, W, ee, r);
      }
      case re:
        return mC(e, t, r);
      case we:
        break;
      case le:
        return sC(e, t, r);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function Ls(e) {
    e.flags |= Xe;
  }
  function CC(e) {
    e.flags |= wi, e.flags |= Ip;
  }
  var wC, Om, SC, _C;
  wC = function(e, t, r, i) {
    for (var s = t.child; s !== null; ) {
      if (s.tag === k || s.tag === T)
        g9(e, s.stateNode);
      else if (s.tag !== R) {
        if (s.child !== null) {
          s.child.return = s, s = s.child;
          continue;
        }
      }
      if (s === t)
        return;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === t)
          return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, Om = function(e, t) {
  }, SC = function(e, t, r, i, s) {
    var u = e.memoizedProps;
    if (u !== i) {
      var f = t.stateNode, h = Iv(), m = b9(f, r, u, i, s, h);
      t.updateQueue = m, m && Ls(t);
    }
  }, _C = function(e, t, r, i) {
    r !== i && Ls(t);
  };
  function Au(e, t) {
    if (!Cn())
      switch (e.tailMode) {
        case "hidden": {
          for (var r = e.tail, i = null; r !== null; )
            r.alternate !== null && (i = r), r = r.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        }
        case "collapsed": {
          for (var s = e.tail, u = null; s !== null; )
            s.alternate !== null && (u = s), s = s.sibling;
          u === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : u.sibling = null;
          break;
        }
      }
  }
  function Sn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = Q, i = Te;
    if (t) {
      if ((e.mode & vt) !== $e) {
        for (var m = e.selfBaseDuration, S = e.child; S !== null; )
          r = Fe(r, Fe(S.lanes, S.childLanes)), i |= S.subtreeFlags & Ha, i |= S.flags & Ha, m += S.treeBaseDuration, S = S.sibling;
        e.treeBaseDuration = m;
      } else
        for (var x = e.child; x !== null; )
          r = Fe(r, Fe(x.lanes, x.childLanes)), i |= x.subtreeFlags & Ha, i |= x.flags & Ha, x.return = e, x = x.sibling;
      e.subtreeFlags |= i;
    } else {
      if ((e.mode & vt) !== $e) {
        for (var s = e.actualDuration, u = e.selfBaseDuration, f = e.child; f !== null; )
          r = Fe(r, Fe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, s += f.actualDuration, u += f.treeBaseDuration, f = f.sibling;
        e.actualDuration = s, e.treeBaseDuration = u;
      } else
        for (var h = e.child; h !== null; )
          r = Fe(r, Fe(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
      e.subtreeFlags |= i;
    }
    return e.childLanes = r, t;
  }
  function K4(e, t, r) {
    if (M_() && (t.mode & Ke) !== $e && (t.flags & st) === Te)
      return J0(t), ws(), t.flags |= Ua | $l | Bn, !1;
    var i = _d(t);
    if (r !== null && r.dehydrated !== null)
      if (e === null) {
        if (!i)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (L_(t), Sn(t), (t.mode & vt) !== $e) {
          var s = r !== null;
          if (s) {
            var u = t.child;
            u !== null && (t.treeBaseDuration -= u.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (ws(), (t.flags & st) === Te && (t.memoizedState = null), t.flags |= Xe, Sn(t), (t.mode & vt) !== $e) {
          var f = r !== null;
          if (f) {
            var h = t.child;
            h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return eb(), !0;
  }
  function xC(e, t, r) {
    var i = t.pendingProps;
    switch (rv(t), t.tag) {
      case E:
      case J:
      case N:
      case w:
      case P:
      case O:
      case z:
      case Z:
      case M:
      case I:
        return Sn(t), null;
      case b: {
        var s = t.type;
        return va(s) && gd(t), Sn(t), null;
      }
      case _: {
        var u = t.stateNode;
        if (Es(t), Jh(t), Vv(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), e === null || e.child === null) {
          var f = _d(t);
          if (f)
            Ls(t);
          else if (e !== null) {
            var h = e.memoizedState;
            // Check if this is a client root
            (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & Ua) !== Te) && (t.flags |= so, eb());
          }
        }
        return Om(e, t), Sn(t), null;
      }
      case k: {
        Nv(t);
        var m = Sb(), S = t.type;
        if (e !== null && t.stateNode != null)
          SC(e, t, S, i, m), e.ref !== t.ref && CC(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return Sn(t), null;
          }
          var x = Iv(), A = _d(t);
          if (A)
            D_(t, m, x) && Ls(t);
          else {
            var L = m9(S, i, m, x, t);
            wC(L, t, !1, !1), t.stateNode = L, y9(L, S, i, m) && Ls(t);
          }
          t.ref !== null && CC(t);
        }
        return Sn(t), null;
      }
      case T: {
        var V = i;
        if (e && t.stateNode != null) {
          var H = e.memoizedProps;
          _C(e, t, H, V);
        } else {
          if (typeof V != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var Y = Sb(), he = Iv(), Ee = _d(t);
          Ee ? O_(t) && Ls(t) : t.stateNode = C9(V, Y, he, t);
        }
        return Sn(t), null;
      }
      case j: {
        ks(t);
        var Se = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Qe = K4(e, t, Se);
          if (!Qe)
            return t.flags & Bn ? t : null;
        }
        if ((t.flags & st) !== Te)
          return t.lanes = r, (t.mode & vt) !== $e && pm(t), t;
        var je = Se !== null, U = e !== null && e.memoizedState !== null;
        if (je !== U && je) {
          var W = t.child;
          if (W.flags |= lo, (t.mode & Ke) !== $e) {
            var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Rt);
            F || Pv(Kr.current, Eb) ? Zx() : Km();
          }
        }
        var ee = t.updateQueue;
        if (ee !== null && (t.flags |= Xe), Sn(t), (t.mode & vt) !== $e && je) {
          var ve = t.child;
          ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
        }
        return null;
      }
      case R:
        return Es(t), Om(e, t), e === null && p_(t.stateNode.containerInfo), Sn(t), null;
      case q:
        var de = t.type._context;
        return fv(de, t), Sn(t), null;
      case Ce: {
        var Oe = t.type;
        return va(Oe) && gd(t), Sn(t), null;
      }
      case re: {
        ks(t);
        var qe = t.memoizedState;
        if (qe === null)
          return Sn(t), null;
        var gt = (t.flags & st) !== Te, tt = qe.rendering;
        if (tt === null)
          if (gt)
            Au(qe, !1);
          else {
            var Gt = Xx() && (e === null || (e.flags & st) === Te);
            if (!Gt)
              for (var nt = t.child; nt !== null; ) {
                var Ht = Ud(nt);
                if (Ht !== null) {
                  gt = !0, t.flags |= st, Au(qe, !1);
                  var Nn = Ht.updateQueue;
                  return Nn !== null && (t.updateQueue = Nn, t.flags |= Xe), t.subtreeFlags = Te, X_(t, r), qi(t, Uv(Kr.current, Su)), t.child;
                }
                nt = nt.sibling;
              }
            qe.tail !== null && vn() > jC() && (t.flags |= st, gt = !0, Au(qe, !1), t.lanes = S1);
          }
        else {
          if (!gt) {
            var kn = Ud(tt);
            if (kn !== null) {
              t.flags |= st, gt = !0;
              var Cr = kn.updateQueue;
              if (Cr !== null && (t.updateQueue = Cr, t.flags |= Xe), Au(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !tt.alternate && !Cn())
                return Sn(t), null;
            } else
              // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              vn() * 2 - qe.renderingStartTime > jC() && r !== pr && (t.flags |= st, gt = !0, Au(qe, !1), t.lanes = S1);
          }
          if (qe.isBackwards)
            tt.sibling = t.child, t.child = tt;
          else {
            var Wn = qe.last;
            Wn !== null ? Wn.sibling = tt : t.child = tt, qe.last = tt;
          }
        }
        if (qe.tail !== null) {
          var Kn = qe.tail;
          qe.rendering = Kn, qe.tail = Kn.sibling, qe.renderingStartTime = vn(), Kn.sibling = null;
          var Pn = Kr.current;
          return gt ? Pn = Uv(Pn, Su) : Pn = Rs(Pn), qi(t, Pn), Kn;
        }
        return Sn(t), null;
      }
      case we:
        break;
      case le:
      case oe: {
        Wm(t);
        var ai = t.memoizedState, Us = ai !== null;
        if (e !== null) {
          var Ku = e.memoizedState, _a = Ku !== null;
          _a !== Us && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !bt && (t.flags |= lo);
        }
        return !Us || (t.mode & Ke) === $e ? Sn(t) : hr(Sa, pr) && (Sn(t), t.subtreeFlags & (Zt | Xe) && (t.flags |= lo)), null;
      }
      case se:
        return null;
      case ge:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function Z4(e, t, r) {
    switch (rv(t), t.tag) {
      case b: {
        var i = t.type;
        va(i) && gd(t);
        var s = t.flags;
        return s & Bn ? (t.flags = s & ~Bn | st, (t.mode & vt) !== $e && pm(t), t) : null;
      }
      case _: {
        t.stateNode, Es(t), Jh(t), Vv();
        var u = t.flags;
        return (u & Bn) !== Te && (u & st) === Te ? (t.flags = u & ~Bn | st, t) : null;
      }
      case k:
        return Nv(t), null;
      case j: {
        ks(t);
        var f = t.memoizedState;
        if (f !== null && f.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          ws();
        }
        var h = t.flags;
        return h & Bn ? (t.flags = h & ~Bn | st, (t.mode & vt) !== $e && pm(t), t) : null;
      }
      case re:
        return ks(t), null;
      case R:
        return Es(t), null;
      case q:
        var m = t.type._context;
        return fv(m, t), null;
      case le:
      case oe:
        return Wm(t), null;
      case se:
        return null;
      default:
        return null;
    }
  }
  function EC(e, t, r) {
    switch (rv(t), t.tag) {
      case b: {
        var i = t.type.childContextTypes;
        i != null && gd(t);
        break;
      }
      case _: {
        t.stateNode, Es(t), Jh(t), Vv();
        break;
      }
      case k: {
        Nv(t);
        break;
      }
      case R:
        Es(t);
        break;
      case j:
        ks(t);
        break;
      case re:
        ks(t);
        break;
      case q:
        var s = t.type._context;
        fv(s, t);
        break;
      case le:
      case oe:
        Wm(t);
        break;
    }
  }
  var RC = null;
  RC = /* @__PURE__ */ new Set();
  var cf = !1, _n = !1, Q4 = typeof WeakSet == "function" ? WeakSet : Set, ye = null, As = null, Ms = null;
  function X4(e) {
    Ap(null, function() {
      throw e;
    }), Mp();
  }
  var J4 = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & vt)
      try {
        Ca(), t.componentWillUnmount();
      } finally {
        ba(e);
      }
    else
      t.componentWillUnmount();
  };
  function kC(e, t) {
    try {
      Ni(on, e);
    } catch (r) {
      _t(e, t, r);
    }
  }
  function Lm(e, t, r) {
    try {
      J4(e, r);
    } catch (i) {
      _t(e, t, i);
    }
  }
  function ex(e, t, r) {
    try {
      r.componentDidMount();
    } catch (i) {
      _t(e, t, i);
    }
  }
  function TC(e, t) {
    try {
      DC(e);
    } catch (r) {
      _t(e, t, r);
    }
  }
  function qs(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function") {
        var i;
        try {
          if (Wt && Re && e.mode & vt)
            try {
              Ca(), i = r(null);
            } finally {
              ba(e);
            }
          else
            i = r(null);
        } catch (s) {
          _t(e, t, s);
        }
        typeof i == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ze(e));
      } else
        r.current = null;
  }
  function df(e, t, r) {
    try {
      r();
    } catch (i) {
      _t(e, t, i);
    }
  }
  var $C = !1;
  function tx(e, t) {
    h9(e.containerInfo), ye = t, nx();
    var r = $C;
    return $C = !1, r;
  }
  function nx() {
    for (; ye !== null; ) {
      var e = ye, t = e.child;
      (e.subtreeFlags & Pp) !== Te && t !== null ? (t.return = e, ye = t) : rx();
    }
  }
  function rx() {
    for (; ye !== null; ) {
      var e = ye;
      Nt(e);
      try {
        ax(e);
      } catch (r) {
        _t(e, e.return, r);
      }
      hn();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ye = t;
        return;
      }
      ye = e.return;
    }
  }
  function ax(e) {
    var t = e.alternate, r = e.flags;
    if ((r & so) !== Te) {
      switch (Nt(e), e.tag) {
        case w:
        case P:
        case N:
          break;
        case b: {
          if (t !== null) {
            var i = t.memoizedProps, s = t.memoizedState, u = e.stateNode;
            e.type === e.elementType && !$o && (u.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(e) || "instance"), u.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(e) || "instance"));
            var f = u.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Wr(e.type, i), s);
            {
              var h = RC;
              f === void 0 && !h.has(e.type) && (h.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ze(e)));
            }
            u.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        }
        case _: {
          {
            var m = e.stateNode;
            P9(m.containerInfo);
          }
          break;
        }
        case k:
        case T:
        case R:
        case Ce:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      hn();
    }
  }
  function Xr(e, t, r) {
    var i = t.updateQueue, s = i !== null ? i.lastEffect : null;
    if (s !== null) {
      var u = s.next, f = u;
      do {
        if ((f.tag & e) === e) {
          var h = f.destroy;
          f.destroy = void 0, h !== void 0 && ((e & wn) !== ir ? C3(t) : (e & on) !== ir && g1(t), (e & ma) !== ir && Gu(!0), df(t, r, h), (e & ma) !== ir && Gu(!1), (e & wn) !== ir ? w3() : (e & on) !== ir && y1());
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function Ni(e, t) {
    var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
    if (i !== null) {
      var s = i.next, u = s;
      do {
        if ((u.tag & e) === e) {
          (e & wn) !== ir ? y3(t) : (e & on) !== ir && S3(t);
          var f = u.create;
          (e & ma) !== ir && Gu(!0), u.destroy = f(), (e & ma) !== ir && Gu(!1), (e & wn) !== ir ? b3() : (e & on) !== ir && _3();
          {
            var h = u.destroy;
            if (h !== void 0 && typeof h != "function") {
              var m = void 0;
              (u.tag & on) !== Te ? m = "useLayoutEffect" : (u.tag & ma) !== Te ? m = "useInsertionEffect" : m = "useEffect";
              var S = void 0;
              h === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? S = `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + h, d("%s must not return anything besides a function, which is used for clean-up.%s", m, S);
            }
          }
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function ix(e, t) {
    if ((t.flags & Xe) !== Te)
      switch (t.tag) {
        case Z: {
          var r = t.stateNode.passiveEffectDuration, i = t.memoizedProps, s = i.id, u = i.onPostCommit, f = Qb(), h = t.alternate === null ? "mount" : "update";
          Zb() && (h = "nested-update"), typeof u == "function" && u(s, h, r, f);
          var m = t.return;
          e:
            for (; m !== null; ) {
              switch (m.tag) {
                case _:
                  var S = m.stateNode;
                  S.passiveEffectDuration += r;
                  break e;
                case Z:
                  var x = m.stateNode;
                  x.passiveEffectDuration += r;
                  break e;
              }
              m = m.return;
            }
          break;
        }
      }
  }
  function ox(e, t, r, i) {
    if ((r.flags & Dl) !== Te)
      switch (r.tag) {
        case w:
        case P:
        case N: {
          if (!_n)
            if (r.mode & vt)
              try {
                Ca(), Ni(on | an, r);
              } finally {
                ba(r);
              }
            else
              Ni(on | an, r);
          break;
        }
        case b: {
          var s = r.stateNode;
          if (r.flags & Xe && !_n)
            if (t === null)
              if (r.type === r.elementType && !$o && (s.props !== r.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(r) || "instance"), s.state !== r.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(r) || "instance")), r.mode & vt)
                try {
                  Ca(), s.componentDidMount();
                } finally {
                  ba(r);
                }
              else
                s.componentDidMount();
            else {
              var u = r.elementType === r.type ? t.memoizedProps : Wr(r.type, t.memoizedProps), f = t.memoizedState;
              if (r.type === r.elementType && !$o && (s.props !== r.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(r) || "instance"), s.state !== r.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(r) || "instance")), r.mode & vt)
                try {
                  Ca(), s.componentDidUpdate(u, f, s.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  ba(r);
                }
              else
                s.componentDidUpdate(u, f, s.__reactInternalSnapshotBeforeUpdate);
            }
          var h = r.updateQueue;
          h !== null && (r.type === r.elementType && !$o && (s.props !== r.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(r) || "instance"), s.state !== r.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(r) || "instance")), cb(r, h, s));
          break;
        }
        case _: {
          var m = r.updateQueue;
          if (m !== null) {
            var S = null;
            if (r.child !== null)
              switch (r.child.tag) {
                case k:
                  S = r.child.stateNode;
                  break;
                case b:
                  S = r.child.stateNode;
                  break;
              }
            cb(r, m, S);
          }
          break;
        }
        case k: {
          var x = r.stateNode;
          if (t === null && r.flags & Xe) {
            var A = r.type, L = r.memoizedProps;
            E9(x, A, L);
          }
          break;
        }
        case T:
          break;
        case R:
          break;
        case Z: {
          {
            var V = r.memoizedProps, H = V.onCommit, Y = V.onRender, he = r.stateNode.effectDuration, Ee = Qb(), Se = t === null ? "mount" : "update";
            Zb() && (Se = "nested-update"), typeof Y == "function" && Y(r.memoizedProps.id, Se, r.actualDuration, r.treeBaseDuration, r.actualStartTime, Ee);
            {
              typeof H == "function" && H(r.memoizedProps.id, Se, he, Ee), rE(r);
              var Qe = r.return;
              e:
                for (; Qe !== null; ) {
                  switch (Qe.tag) {
                    case _:
                      var je = Qe.stateNode;
                      je.effectDuration += he;
                      break e;
                    case Z:
                      var U = Qe.stateNode;
                      U.effectDuration += he;
                      break e;
                  }
                  Qe = Qe.return;
                }
            }
          }
          break;
        }
        case j: {
          hx(e, r);
          break;
        }
        case re:
        case Ce:
        case we:
        case le:
        case oe:
        case ge:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    _n || r.flags & wi && DC(r);
  }
  function sx(e) {
    switch (e.tag) {
      case w:
      case P:
      case N: {
        if (e.mode & vt)
          try {
            Ca(), kC(e, e.return);
          } finally {
            ba(e);
          }
        else
          kC(e, e.return);
        break;
      }
      case b: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && ex(e, e.return, t), TC(e, e.return);
        break;
      }
      case k: {
        TC(e, e.return);
        break;
      }
    }
  }
  function lx(e, t) {
    for (var r = null, i = e; ; ) {
      if (i.tag === k) {
        if (r === null) {
          r = i;
          try {
            var s = i.stateNode;
            t ? q9(s) : I9(i.stateNode, i.memoizedProps);
          } catch (f) {
            _t(e, e.return, f);
          }
        }
      } else if (i.tag === T) {
        if (r === null)
          try {
            var u = i.stateNode;
            t ? z9(u) : N9(u, i.memoizedProps);
          } catch (f) {
            _t(e, e.return, f);
          }
      } else if (!((i.tag === le || i.tag === oe) && i.memoizedState !== null && i !== e)) {
        if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
      }
      if (i === e)
        return;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e)
          return;
        r === i && (r = null), i = i.return;
      }
      r === i && (r = null), i.sibling.return = i.return, i = i.sibling;
    }
  }
  function DC(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode, i;
      switch (e.tag) {
        case k:
          i = r;
          break;
        default:
          i = r;
      }
      if (typeof t == "function") {
        var s;
        if (e.mode & vt)
          try {
            Ca(), s = t(i);
          } finally {
            ba(e);
          }
        else
          s = t(i);
        typeof s == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ze(e));
      } else
        t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ze(e)), t.current = i;
    }
  }
  function ux(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function OC(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, OC(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === k) {
        var r = e.stateNode;
        r !== null && m_(r);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function cx(e) {
    for (var t = e.return; t !== null; ) {
      if (LC(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function LC(e) {
    return e.tag === k || e.tag === _ || e.tag === R;
  }
  function AC(e) {
    var t = e;
    e:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || LC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== k && t.tag !== T && t.tag !== ne; ) {
          if (t.flags & Zt || t.child === null || t.tag === R)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Zt))
          return t.stateNode;
      }
  }
  function dx(e) {
    var t = cx(e);
    switch (t.tag) {
      case k: {
        var r = t.stateNode;
        t.flags & Tl && (M0(r), t.flags &= ~Tl);
        var i = AC(e);
        Mm(e, i, r);
        break;
      }
      case _:
      case R: {
        var s = t.stateNode.containerInfo, u = AC(e);
        Am(e, u, s);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function Am(e, t, r) {
    var i = e.tag, s = i === k || i === T;
    if (s) {
      var u = e.stateNode;
      t ? O9(r, u, t) : $9(r, u);
    } else if (i !== R) {
      var f = e.child;
      if (f !== null) {
        Am(f, t, r);
        for (var h = f.sibling; h !== null; )
          Am(h, t, r), h = h.sibling;
      }
    }
  }
  function Mm(e, t, r) {
    var i = e.tag, s = i === k || i === T;
    if (s) {
      var u = e.stateNode;
      t ? D9(r, u, t) : T9(r, u);
    } else if (i !== R) {
      var f = e.child;
      if (f !== null) {
        Mm(f, t, r);
        for (var h = f.sibling; h !== null; )
          Mm(h, t, r), h = h.sibling;
      }
    }
  }
  var xn = null, Jr = !1;
  function fx(e, t, r) {
    {
      var i = t;
      e:
        for (; i !== null; ) {
          switch (i.tag) {
            case k: {
              xn = i.stateNode, Jr = !1;
              break e;
            }
            case _: {
              xn = i.stateNode.containerInfo, Jr = !0;
              break e;
            }
            case R: {
              xn = i.stateNode.containerInfo, Jr = !0;
              break e;
            }
          }
          i = i.return;
        }
      if (xn === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      MC(e, t, r), xn = null, Jr = !1;
    }
    ux(r);
  }
  function Pi(e, t, r) {
    for (var i = r.child; i !== null; )
      MC(e, t, i), i = i.sibling;
  }
  function MC(e, t, r) {
    switch (h3(r), r.tag) {
      case k:
        _n || qs(r, t);
      case T: {
        {
          var i = xn, s = Jr;
          xn = null, Pi(e, t, r), xn = i, Jr = s, xn !== null && (Jr ? A9(xn, r.stateNode) : L9(xn, r.stateNode));
        }
        return;
      }
      case ne: {
        xn !== null && (Jr ? M9(xn, r.stateNode) : jh(xn, r.stateNode));
        return;
      }
      case R: {
        {
          var u = xn, f = Jr;
          xn = r.stateNode.containerInfo, Jr = !0, Pi(e, t, r), xn = u, Jr = f;
        }
        return;
      }
      case w:
      case P:
      case I:
      case N: {
        if (!_n) {
          var h = r.updateQueue;
          if (h !== null) {
            var m = h.lastEffect;
            if (m !== null) {
              var S = m.next, x = S;
              do {
                var A = x, L = A.destroy, V = A.tag;
                L !== void 0 && ((V & ma) !== ir ? df(r, t, L) : (V & on) !== ir && (g1(r), r.mode & vt ? (Ca(), df(r, t, L), ba(r)) : df(r, t, L), y1())), x = x.next;
              } while (x !== S);
            }
          }
        }
        Pi(e, t, r);
        return;
      }
      case b: {
        if (!_n) {
          qs(r, t);
          var H = r.stateNode;
          typeof H.componentWillUnmount == "function" && Lm(r, t, H);
        }
        Pi(e, t, r);
        return;
      }
      case we: {
        Pi(e, t, r);
        return;
      }
      case le: {
        if (
          // TODO: Remove this dead flag
          r.mode & Ke
        ) {
          var Y = _n;
          _n = Y || r.memoizedState !== null, Pi(e, t, r), _n = Y;
        } else
          Pi(e, t, r);
        break;
      }
      default: {
        Pi(e, t, r);
        return;
      }
    }
  }
  function px(e) {
    e.memoizedState;
  }
  function hx(e, t) {
    var r = t.memoizedState;
    if (r === null) {
      var i = t.alternate;
      if (i !== null) {
        var s = i.memoizedState;
        if (s !== null) {
          var u = s.dehydrated;
          u !== null && J9(u);
        }
      }
    }
  }
  function qC(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Q4()), t.forEach(function(i) {
        var s = cE.bind(null, e, i);
        if (!r.has(i)) {
          if (r.add(i), Hr)
            if (As !== null && Ms !== null)
              ju(Ms, As);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          i.then(s, s);
        }
      });
    }
  }
  function vx(e, t, r) {
    As = r, Ms = e, Nt(t), zC(t, e), Nt(t), As = null, Ms = null;
  }
  function ea(e, t, r) {
    var i = t.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var u = i[s];
        try {
          fx(e, t, u);
        } catch (m) {
          _t(u, t, m);
        }
      }
    var f = wc();
    if (t.subtreeFlags & Up)
      for (var h = t.child; h !== null; )
        Nt(h), zC(h, e), h = h.sibling;
    Nt(f);
  }
  function zC(e, t, r) {
    var i = e.alternate, s = e.flags;
    switch (e.tag) {
      case w:
      case P:
      case I:
      case N: {
        if (ea(t, e), wa(e), s & Xe) {
          try {
            Xr(ma | an, e, e.return), Ni(ma | an, e);
          } catch (Oe) {
            _t(e, e.return, Oe);
          }
          if (e.mode & vt) {
            try {
              Ca(), Xr(on | an, e, e.return);
            } catch (Oe) {
              _t(e, e.return, Oe);
            }
            ba(e);
          } else
            try {
              Xr(on | an, e, e.return);
            } catch (Oe) {
              _t(e, e.return, Oe);
            }
        }
        return;
      }
      case b: {
        ea(t, e), wa(e), s & wi && i !== null && qs(i, i.return);
        return;
      }
      case k: {
        ea(t, e), wa(e), s & wi && i !== null && qs(i, i.return);
        {
          if (e.flags & Tl) {
            var u = e.stateNode;
            try {
              M0(u);
            } catch (Oe) {
              _t(e, e.return, Oe);
            }
          }
          if (s & Xe) {
            var f = e.stateNode;
            if (f != null) {
              var h = e.memoizedProps, m = i !== null ? i.memoizedProps : h, S = e.type, x = e.updateQueue;
              if (e.updateQueue = null, x !== null)
                try {
                  R9(f, x, S, m, h, e);
                } catch (Oe) {
                  _t(e, e.return, Oe);
                }
            }
          }
        }
        return;
      }
      case T: {
        if (ea(t, e), wa(e), s & Xe) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var A = e.stateNode, L = e.memoizedProps, V = i !== null ? i.memoizedProps : L;
          try {
            k9(A, V, L);
          } catch (Oe) {
            _t(e, e.return, Oe);
          }
        }
        return;
      }
      case _: {
        if (ea(t, e), wa(e), s & Xe && i !== null) {
          var H = i.memoizedState;
          if (H.isDehydrated)
            try {
              X9(t.containerInfo);
            } catch (Oe) {
              _t(e, e.return, Oe);
            }
        }
        return;
      }
      case R: {
        ea(t, e), wa(e);
        return;
      }
      case j: {
        ea(t, e), wa(e);
        var Y = e.child;
        if (Y.flags & lo) {
          var he = Y.stateNode, Ee = Y.memoizedState, Se = Ee !== null;
          if (he.isHidden = Se, Se) {
            var Qe = Y.alternate !== null && Y.alternate.memoizedState !== null;
            Qe || Kx();
          }
        }
        if (s & Xe) {
          try {
            px(e);
          } catch (Oe) {
            _t(e, e.return, Oe);
          }
          qC(e);
        }
        return;
      }
      case le: {
        var je = i !== null && i.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & Ke
        ) {
          var U = _n;
          _n = U || je, ea(t, e), _n = U;
        } else
          ea(t, e);
        if (wa(e), s & lo) {
          var W = e.stateNode, F = e.memoizedState, ee = F !== null, ve = e;
          if (W.isHidden = ee, ee && !je && (ve.mode & Ke) !== $e) {
            ye = ve;
            for (var de = ve.child; de !== null; )
              ye = de, gx(de), de = de.sibling;
          }
          lx(ve, ee);
        }
        return;
      }
      case re: {
        ea(t, e), wa(e), s & Xe && qC(e);
        return;
      }
      case we:
        return;
      default: {
        ea(t, e), wa(e);
        return;
      }
    }
  }
  function wa(e) {
    var t = e.flags;
    if (t & Zt) {
      try {
        dx(e);
      } catch (r) {
        _t(e, e.return, r);
      }
      e.flags &= ~Zt;
    }
    t & Fa && (e.flags &= ~Fa);
  }
  function mx(e, t, r) {
    As = r, Ms = t, ye = e, IC(e, t, r), As = null, Ms = null;
  }
  function IC(e, t, r) {
    for (var i = (e.mode & Ke) !== $e; ye !== null; ) {
      var s = ye, u = s.child;
      if (s.tag === le && i) {
        var f = s.memoizedState !== null, h = f || cf;
        if (h) {
          qm(e, t, r);
          continue;
        } else {
          var m = s.alternate, S = m !== null && m.memoizedState !== null, x = S || _n, A = cf, L = _n;
          cf = h, _n = x, _n && !L && (ye = s, yx(s));
          for (var V = u; V !== null; )
            ye = V, IC(
              V,
              // New root; bubble back up to here and stop.
              t,
              r
            ), V = V.sibling;
          ye = s, cf = A, _n = L, qm(e, t, r);
          continue;
        }
      }
      (s.subtreeFlags & Dl) !== Te && u !== null ? (u.return = s, ye = u) : qm(e, t, r);
    }
  }
  function qm(e, t, r) {
    for (; ye !== null; ) {
      var i = ye;
      if ((i.flags & Dl) !== Te) {
        var s = i.alternate;
        Nt(i);
        try {
          ox(t, s, i, r);
        } catch (f) {
          _t(i, i.return, f);
        }
        hn();
      }
      if (i === e) {
        ye = null;
        return;
      }
      var u = i.sibling;
      if (u !== null) {
        u.return = i.return, ye = u;
        return;
      }
      ye = i.return;
    }
  }
  function gx(e) {
    for (; ye !== null; ) {
      var t = ye, r = t.child;
      switch (t.tag) {
        case w:
        case P:
        case I:
        case N: {
          if (t.mode & vt)
            try {
              Ca(), Xr(on, t, t.return);
            } finally {
              ba(t);
            }
          else
            Xr(on, t, t.return);
          break;
        }
        case b: {
          qs(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && Lm(t, t.return, i);
          break;
        }
        case k: {
          qs(t, t.return);
          break;
        }
        case le: {
          var s = t.memoizedState !== null;
          if (s) {
            NC(e);
            continue;
          }
          break;
        }
      }
      r !== null ? (r.return = t, ye = r) : NC(e);
    }
  }
  function NC(e) {
    for (; ye !== null; ) {
      var t = ye;
      if (t === e) {
        ye = null;
        return;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, ye = r;
        return;
      }
      ye = t.return;
    }
  }
  function yx(e) {
    for (; ye !== null; ) {
      var t = ye, r = t.child;
      if (t.tag === le) {
        var i = t.memoizedState !== null;
        if (i) {
          PC(e);
          continue;
        }
      }
      r !== null ? (r.return = t, ye = r) : PC(e);
    }
  }
  function PC(e) {
    for (; ye !== null; ) {
      var t = ye;
      Nt(t);
      try {
        sx(t);
      } catch (i) {
        _t(t, t.return, i);
      }
      if (hn(), t === e) {
        ye = null;
        return;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, ye = r;
        return;
      }
      ye = t.return;
    }
  }
  function bx(e, t, r, i) {
    ye = t, Cx(t, e, r, i);
  }
  function Cx(e, t, r, i) {
    for (; ye !== null; ) {
      var s = ye, u = s.child;
      (s.subtreeFlags & ts) !== Te && u !== null ? (u.return = s, ye = u) : wx(e, t, r, i);
    }
  }
  function wx(e, t, r, i) {
    for (; ye !== null; ) {
      var s = ye;
      if ((s.flags & Vr) !== Te) {
        Nt(s);
        try {
          Sx(t, s, r, i);
        } catch (f) {
          _t(s, s.return, f);
        }
        hn();
      }
      if (s === e) {
        ye = null;
        return;
      }
      var u = s.sibling;
      if (u !== null) {
        u.return = s.return, ye = u;
        return;
      }
      ye = s.return;
    }
  }
  function Sx(e, t, r, i) {
    switch (t.tag) {
      case w:
      case P:
      case N: {
        if (t.mode & vt) {
          fm();
          try {
            Ni(wn | an, t);
          } finally {
            dm(t);
          }
        } else
          Ni(wn | an, t);
        break;
      }
    }
  }
  function _x(e) {
    ye = e, xx();
  }
  function xx() {
    for (; ye !== null; ) {
      var e = ye, t = e.child;
      if ((ye.flags & oo) !== Te) {
        var r = e.deletions;
        if (r !== null) {
          for (var i = 0; i < r.length; i++) {
            var s = r[i];
            ye = s, kx(s, e);
          }
          {
            var u = e.alternate;
            if (u !== null) {
              var f = u.child;
              if (f !== null) {
                u.child = null;
                do {
                  var h = f.sibling;
                  f.sibling = null, f = h;
                } while (f !== null);
              }
            }
          }
          ye = e;
        }
      }
      (e.subtreeFlags & ts) !== Te && t !== null ? (t.return = e, ye = t) : Ex();
    }
  }
  function Ex() {
    for (; ye !== null; ) {
      var e = ye;
      (e.flags & Vr) !== Te && (Nt(e), Rx(e), hn());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, ye = t;
        return;
      }
      ye = e.return;
    }
  }
  function Rx(e) {
    switch (e.tag) {
      case w:
      case P:
      case N: {
        e.mode & vt ? (fm(), Xr(wn | an, e, e.return), dm(e)) : Xr(wn | an, e, e.return);
        break;
      }
    }
  }
  function kx(e, t) {
    for (; ye !== null; ) {
      var r = ye;
      Nt(r), $x(r, t), hn();
      var i = r.child;
      i !== null ? (i.return = r, ye = i) : Tx(e);
    }
  }
  function Tx(e) {
    for (; ye !== null; ) {
      var t = ye, r = t.sibling, i = t.return;
      if (OC(t), t === e) {
        ye = null;
        return;
      }
      if (r !== null) {
        r.return = i, ye = r;
        return;
      }
      ye = i;
    }
  }
  function $x(e, t) {
    switch (e.tag) {
      case w:
      case P:
      case N: {
        e.mode & vt ? (fm(), Xr(wn, e, t), dm(e)) : Xr(wn, e, t);
        break;
      }
    }
  }
  function Dx(e) {
    switch (e.tag) {
      case w:
      case P:
      case N: {
        try {
          Ni(on | an, e);
        } catch (r) {
          _t(e, e.return, r);
        }
        break;
      }
      case b: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (r) {
          _t(e, e.return, r);
        }
        break;
      }
    }
  }
  function Ox(e) {
    switch (e.tag) {
      case w:
      case P:
      case N: {
        try {
          Ni(wn | an, e);
        } catch (t) {
          _t(e, e.return, t);
        }
        break;
      }
    }
  }
  function Lx(e) {
    switch (e.tag) {
      case w:
      case P:
      case N: {
        try {
          Xr(on | an, e, e.return);
        } catch (r) {
          _t(e, e.return, r);
        }
        break;
      }
      case b: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Lm(e, e.return, t);
        break;
      }
    }
  }
  function Ax(e) {
    switch (e.tag) {
      case w:
      case P:
      case N:
        try {
          Xr(wn | an, e, e.return);
        } catch (t) {
          _t(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var Mu = Symbol.for;
    Mu("selector.component"), Mu("selector.has_pseudo_class"), Mu("selector.role"), Mu("selector.test_id"), Mu("selector.text");
  }
  var Mx = [];
  function qx() {
    Mx.forEach(function(e) {
      return e();
    });
  }
  var zx = o.ReactCurrentActQueue;
  function Ix(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), r = typeof jest < "u";
      return r && t !== !1;
    }
  }
  function UC() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && zx.current !== null && d("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var Nx = Math.ceil, zm = o.ReactCurrentDispatcher, Im = o.ReactCurrentOwner, En = o.ReactCurrentBatchConfig, ta = o.ReactCurrentActQueue, un = (
    /*             */
    0
  ), FC = (
    /*               */
    1
  ), Rn = (
    /*                */
    2
  ), qr = (
    /*                */
    4
  ), ei = 0, qu = 1, Do = 2, ff = 3, zu = 4, VC = 5, Nm = 6, Ze = un, Gn = null, Pt = null, cn = Q, Sa = Q, Pm = $i(Q), dn = ei, Iu = null, pf = Q, Nu = Q, hf = Q, Pu = null, or = null, Um = 0, HC = 500, BC = 1 / 0, Px = 500, ti = null;
  function Uu() {
    BC = vn() + Px;
  }
  function jC() {
    return BC;
  }
  var vf = !1, Fm = null, zs = null, Oo = !1, Ui = null, Fu = Q, Vm = [], Hm = null, Ux = 50, Vu = 0, Bm = null, jm = !1, mf = !1, Fx = 50, Is = 0, gf = null, Hu = Et, yf = Q, GC = !1;
  function bf() {
    return Gn;
  }
  function Yn() {
    return (Ze & (Rn | qr)) !== un ? vn() : (Hu !== Et || (Hu = vn()), Hu);
  }
  function Fi(e) {
    var t = e.mode;
    if ((t & Ke) === $e)
      return Ae;
    if ((Ze & Rn) !== un && cn !== Q)
      return Il(cn);
    var r = I_() !== z_;
    if (r) {
      if (En.transition !== null) {
        var i = En.transition;
        i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
      }
      return yf === gn && (yf = R1()), yf;
    }
    var s = Br();
    if (s !== gn)
      return s;
    var u = w9();
    return u;
  }
  function Vx(e) {
    var t = e.mode;
    return (t & Ke) === $e ? Ae : j3();
  }
  function fn(e, t, r, i) {
    fE(), GC && d("useInsertionEffect must not schedule updates."), jm && (mf = !0), Nl(e, r, i), (Ze & Rn) !== Q && e === Gn ? vE(t) : (Hr && $1(e, t, r), mE(t), e === Gn && ((Ze & Rn) === un && (Nu = Fe(Nu, r)), dn === zu && Vi(e, cn)), sr(e, i), r === Ae && Ze === un && (t.mode & Ke) === $e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !ta.isBatchingLegacy && (Uu(), j0()));
  }
  function Hx(e, t, r) {
    var i = e.current;
    i.lanes = t, Nl(e, t, r), sr(e, r);
  }
  function Bx(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (Ze & Rn) !== un
    );
  }
  function sr(e, t) {
    var r = e.callbackNode;
    P3(e, t);
    var i = Pc(e, e === Gn ? cn : Q);
    if (i === Q) {
      r !== null && lw(r), e.callbackNode = null, e.callbackPriority = gn;
      return;
    }
    var s = vo(i), u = e.callbackPriority;
    if (u === s && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(ta.current !== null && r !== Xm)) {
      r == null && u !== Ae && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    r != null && lw(r);
    var f;
    if (s === Ae)
      e.tag === Di ? (ta.isBatchingLegacy !== null && (ta.didScheduleLegacyUpdate = !0), b_(KC.bind(null, e))) : B0(KC.bind(null, e)), ta.current !== null ? ta.current.push(Oi) : _9(function() {
        (Ze & (Rn | qr)) === un && Oi();
      }), f = null;
    else {
      var h;
      switch (L1(i)) {
        case vr:
          h = qc;
          break;
        case ja:
          h = Fp;
          break;
        case Ga:
          h = fo;
          break;
        case Vc:
          h = Vp;
          break;
        default:
          h = fo;
          break;
      }
      f = Jm(h, YC.bind(null, e));
    }
    e.callbackPriority = s, e.callbackNode = f;
  }
  function YC(e, t) {
    if (f4(), Hu = Et, yf = Q, (Ze & (Rn | qr)) !== un)
      throw new Error("Should not already be working.");
    var r = e.callbackNode, i = ri();
    if (i && e.callbackNode !== r)
      return null;
    var s = Pc(e, e === Gn ? cn : Q);
    if (s === Q)
      return null;
    var u = !Uc(e, s) && !B3(e, s) && !t, f = u ? eE(e, s) : wf(e, s);
    if (f !== ei) {
      if (f === Do) {
        var h = ch(e);
        h !== Q && (s = h, f = Gm(e, h));
      }
      if (f === qu) {
        var m = Iu;
        throw Lo(e, Q), Vi(e, s), sr(e, vn()), m;
      }
      if (f === Nm)
        Vi(e, s);
      else {
        var S = !Uc(e, s), x = e.current.alternate;
        if (S && !Gx(x)) {
          if (f = wf(e, s), f === Do) {
            var A = ch(e);
            A !== Q && (s = A, f = Gm(e, A));
          }
          if (f === qu) {
            var L = Iu;
            throw Lo(e, Q), Vi(e, s), sr(e, vn()), L;
          }
        }
        e.finishedWork = x, e.finishedLanes = s, jx(e, f, s);
      }
    }
    return sr(e, vn()), e.callbackNode === r ? YC.bind(null, e) : null;
  }
  function Gm(e, t) {
    var r = Pu;
    if (Hc(e)) {
      var i = Lo(e, t);
      i.flags |= Ua, f_(e.containerInfo);
    }
    var s = wf(e, t);
    if (s !== Do) {
      var u = or;
      or = r, u !== null && WC(u);
    }
    return s;
  }
  function WC(e) {
    or === null ? or = e : or.push.apply(or, e);
  }
  function jx(e, t, r) {
    switch (t) {
      case ei:
      case qu:
        throw new Error("Root did not complete. This is a bug in React.");
      case Do: {
        Ao(e, or, ti);
        break;
      }
      case ff: {
        if (Vi(e, r), x1(r) && // do not delay if we're inside an act() scope
        !uw()) {
          var i = Um + HC - vn();
          if (i > 10) {
            var s = Pc(e, Q);
            if (s !== Q)
              break;
            var u = e.suspendedLanes;
            if (!ss(u, r)) {
              Yn(), T1(e, u);
              break;
            }
            e.timeoutHandle = Hh(Ao.bind(null, e, or, ti), i);
            break;
          }
        }
        Ao(e, or, ti);
        break;
      }
      case zu: {
        if (Vi(e, r), H3(r))
          break;
        if (!uw()) {
          var f = I3(e, r), h = f, m = vn() - h, S = dE(m) - m;
          if (S > 10) {
            e.timeoutHandle = Hh(Ao.bind(null, e, or, ti), S);
            break;
          }
        }
        Ao(e, or, ti);
        break;
      }
      case VC: {
        Ao(e, or, ti);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function Gx(e) {
    for (var t = e; ; ) {
      if (t.flags & Ac) {
        var r = t.updateQueue;
        if (r !== null) {
          var i = r.stores;
          if (i !== null)
            for (var s = 0; s < i.length; s++) {
              var u = i[s], f = u.getSnapshot, h = u.value;
              try {
                if (!gr(f(), h))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var m = t.child;
      if (t.subtreeFlags & Ac && m !== null) {
        m.return = t, t = m;
        continue;
      }
      if (t === e)
        return !0;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return !0;
  }
  function Vi(e, t) {
    t = Fc(t, hf), t = Fc(t, Nu), Y3(e, t);
  }
  function KC(e) {
    if (p4(), (Ze & (Rn | qr)) !== un)
      throw new Error("Should not already be working.");
    ri();
    var t = Pc(e, Q);
    if (!hr(t, Ae))
      return sr(e, vn()), null;
    var r = wf(e, t);
    if (e.tag !== Di && r === Do) {
      var i = ch(e);
      i !== Q && (t = i, r = Gm(e, i));
    }
    if (r === qu) {
      var s = Iu;
      throw Lo(e, Q), Vi(e, t), sr(e, vn()), s;
    }
    if (r === Nm)
      throw new Error("Root did not complete. This is a bug in React.");
    var u = e.current.alternate;
    return e.finishedWork = u, e.finishedLanes = t, Ao(e, or, ti), sr(e, vn()), null;
  }
  function Yx(e, t) {
    t !== Q && (hh(e, Fe(t, Ae)), sr(e, vn()), (Ze & (Rn | qr)) === un && (Uu(), Oi()));
  }
  function Ym(e, t) {
    var r = Ze;
    Ze |= FC;
    try {
      return e(t);
    } finally {
      Ze = r, Ze === un && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ta.isBatchingLegacy && (Uu(), j0());
    }
  }
  function Wx(e, t, r, i, s) {
    var u = Br(), f = En.transition;
    try {
      return En.transition = null, yn(vr), e(t, r, i, s);
    } finally {
      yn(u), En.transition = f, Ze === un && Uu();
    }
  }
  function ni(e) {
    Ui !== null && Ui.tag === Di && (Ze & (Rn | qr)) === un && ri();
    var t = Ze;
    Ze |= FC;
    var r = En.transition, i = Br();
    try {
      return En.transition = null, yn(vr), e ? e() : void 0;
    } finally {
      yn(i), En.transition = r, Ze = t, (Ze & (Rn | qr)) === un && Oi();
    }
  }
  function ZC() {
    return (Ze & (Rn | qr)) !== un;
  }
  function Cf(e, t) {
    zn(Pm, Sa, e), Sa = Fe(Sa, t);
  }
  function Wm(e) {
    Sa = Pm.current, qn(Pm, e);
  }
  function Lo(e, t) {
    e.finishedWork = null, e.finishedLanes = Q;
    var r = e.timeoutHandle;
    if (r !== Bh && (e.timeoutHandle = Bh, S9(r)), Pt !== null)
      for (var i = Pt.return; i !== null; ) {
        var s = i.alternate;
        EC(s, i), i = i.return;
      }
    Gn = e;
    var u = Mo(e.current, null);
    return Pt = u, cn = Sa = t, dn = ei, Iu = null, pf = Q, Nu = Q, hf = Q, Pu = null, or = null, F_(), Yr.discardPendingWarnings(), u;
  }
  function QC(e, t) {
    do {
      var r = Pt;
      try {
        if (kd(), kb(), hn(), Im.current = null, r === null || r.return === null) {
          dn = qu, Iu = t, Pt = null;
          return;
        }
        if (Wt && r.mode & vt && of(r, !0), Ft)
          if (rs(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var i = t;
            E3(r, i, cn);
          } else
            x3(r, t, cn);
        y4(e, r.return, r, t, cn), tw(r);
      } catch (s) {
        t = s, Pt === r && r !== null ? (r = r.return, Pt = r) : r = Pt;
        continue;
      }
      return;
    } while (!0);
  }
  function XC() {
    var e = zm.current;
    return zm.current = ef, e === null ? ef : e;
  }
  function JC(e) {
    zm.current = e;
  }
  function Kx() {
    Um = vn();
  }
  function Bu(e) {
    pf = Fe(e, pf);
  }
  function Zx() {
    dn === ei && (dn = ff);
  }
  function Km() {
    (dn === ei || dn === ff || dn === Do) && (dn = zu), Gn !== null && (dh(pf) || dh(Nu)) && Vi(Gn, cn);
  }
  function Qx(e) {
    dn !== zu && (dn = Do), Pu === null ? Pu = [e] : Pu.push(e);
  }
  function Xx() {
    return dn === ei;
  }
  function wf(e, t) {
    var r = Ze;
    Ze |= Rn;
    var i = XC();
    if (Gn !== e || cn !== t) {
      if (Hr) {
        var s = e.memoizedUpdaters;
        s.size > 0 && (ju(e, cn), s.clear()), D1(e, t);
      }
      ti = O1(), Lo(e, t);
    }
    b1(t);
    do
      try {
        Jx();
        break;
      } catch (u) {
        QC(e, u);
      }
    while (!0);
    if (kd(), Ze = r, JC(i), Pt !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return C1(), Gn = null, cn = Q, dn;
  }
  function Jx() {
    for (; Pt !== null; )
      ew(Pt);
  }
  function eE(e, t) {
    var r = Ze;
    Ze |= Rn;
    var i = XC();
    if (Gn !== e || cn !== t) {
      if (Hr) {
        var s = e.memoizedUpdaters;
        s.size > 0 && (ju(e, cn), s.clear()), D1(e, t);
      }
      ti = O1(), Uu(), Lo(e, t);
    }
    b1(t);
    do
      try {
        tE();
        break;
      } catch (u) {
        QC(e, u);
      }
    while (!0);
    return kd(), JC(i), Ze = r, Pt !== null ? (D3(), ei) : (C1(), Gn = null, cn = Q, dn);
  }
  function tE() {
    for (; Pt !== null && !a3(); )
      ew(Pt);
  }
  function ew(e) {
    var t = e.alternate;
    Nt(e);
    var r;
    (e.mode & vt) !== $e ? (cm(e), r = Zm(t, e, Sa), of(e, !0)) : r = Zm(t, e, Sa), hn(), e.memoizedProps = e.pendingProps, r === null ? tw(e) : Pt = r, Im.current = null;
  }
  function tw(e) {
    var t = e;
    do {
      var r = t.alternate, i = t.return;
      if ((t.flags & $l) === Te) {
        Nt(t);
        var s = void 0;
        if ((t.mode & vt) === $e ? s = xC(r, t, Sa) : (cm(t), s = xC(r, t, Sa), of(t, !1)), hn(), s !== null) {
          Pt = s;
          return;
        }
      } else {
        var u = Z4(r, t);
        if (u !== null) {
          u.flags &= X6, Pt = u;
          return;
        }
        if ((t.mode & vt) !== $e) {
          of(t, !1);
          for (var f = t.actualDuration, h = t.child; h !== null; )
            f += h.actualDuration, h = h.sibling;
          t.actualDuration = f;
        }
        if (i !== null)
          i.flags |= $l, i.subtreeFlags = Te, i.deletions = null;
        else {
          dn = Nm, Pt = null;
          return;
        }
      }
      var m = t.sibling;
      if (m !== null) {
        Pt = m;
        return;
      }
      t = i, Pt = t;
    } while (t !== null);
    dn === ei && (dn = VC);
  }
  function Ao(e, t, r) {
    var i = Br(), s = En.transition;
    try {
      En.transition = null, yn(vr), nE(e, t, r, i);
    } finally {
      En.transition = s, yn(i);
    }
    return null;
  }
  function nE(e, t, r, i) {
    do
      ri();
    while (Ui !== null);
    if (pE(), (Ze & (Rn | qr)) !== un)
      throw new Error("Should not already be working.");
    var s = e.finishedWork, u = e.finishedLanes;
    if (g3(u), s === null)
      return m1(), null;
    if (u === Q && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, s === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = gn;
    var f = Fe(s.lanes, s.childLanes);
    W3(e, f), e === Gn && (Gn = null, Pt = null, cn = Q), ((s.subtreeFlags & ts) !== Te || (s.flags & ts) !== Te) && (Oo || (Oo = !0, Hm = r, Jm(fo, function() {
      return ri(), null;
    })));
    var h = (s.subtreeFlags & (Pp | Up | Dl | ts)) !== Te, m = (s.flags & (Pp | Up | Dl | ts)) !== Te;
    if (h || m) {
      var S = En.transition;
      En.transition = null;
      var x = Br();
      yn(vr);
      var A = Ze;
      Ze |= qr, Im.current = null, tx(e, s), Xb(), vx(e, s, u), v9(e.containerInfo), e.current = s, R3(u), mx(s, e, u), k3(), i3(), Ze = A, yn(x), En.transition = S;
    } else
      e.current = s, Xb();
    var L = Oo;
    if (Oo ? (Oo = !1, Ui = e, Fu = u) : (Is = 0, gf = null), f = e.pendingLanes, f === Q && (zs = null), L || iw(e.current, !1), f3(s.stateNode, i), Hr && e.memoizedUpdaters.clear(), qx(), sr(e, vn()), t !== null)
      for (var V = e.onRecoverableError, H = 0; H < t.length; H++) {
        var Y = t[H], he = Y.stack, Ee = Y.digest;
        V(Y.value, {
          componentStack: he,
          digest: Ee
        });
      }
    if (vf) {
      vf = !1;
      var Se = Fm;
      throw Fm = null, Se;
    }
    return hr(Fu, Ae) && e.tag !== Di && ri(), f = e.pendingLanes, hr(f, Ae) ? (d4(), e === Bm ? Vu++ : (Vu = 0, Bm = e)) : Vu = 0, Oi(), m1(), null;
  }
  function ri() {
    if (Ui !== null) {
      var e = L1(Fu), t = X3(Ga, e), r = En.transition, i = Br();
      try {
        return En.transition = null, yn(t), aE();
      } finally {
        yn(i), En.transition = r;
      }
    }
    return !1;
  }
  function rE(e) {
    Vm.push(e), Oo || (Oo = !0, Jm(fo, function() {
      return ri(), null;
    }));
  }
  function aE() {
    if (Ui === null)
      return !1;
    var e = Hm;
    Hm = null;
    var t = Ui, r = Fu;
    if (Ui = null, Fu = Q, (Ze & (Rn | qr)) !== un)
      throw new Error("Cannot flush passive effects while already rendering.");
    jm = !0, mf = !1, T3(r);
    var i = Ze;
    Ze |= qr, _x(t.current), bx(t, t.current, r, e);
    {
      var s = Vm;
      Vm = [];
      for (var u = 0; u < s.length; u++) {
        var f = s[u];
        ix(t, f);
      }
    }
    $3(), iw(t.current, !0), Ze = i, Oi(), mf ? t === gf ? Is++ : (Is = 0, gf = t) : Is = 0, jm = !1, mf = !1, p3(t);
    {
      var h = t.current.stateNode;
      h.effectDuration = 0, h.passiveEffectDuration = 0;
    }
    return !0;
  }
  function nw(e) {
    return zs !== null && zs.has(e);
  }
  function iE(e) {
    zs === null ? zs = /* @__PURE__ */ new Set([e]) : zs.add(e);
  }
  function oE(e) {
    vf || (vf = !0, Fm = e);
  }
  var sE = oE;
  function rw(e, t, r) {
    var i = To(r, t), s = eC(e, i, Ae), u = Ai(e, s, Ae), f = Yn();
    u !== null && (Nl(u, Ae, f), sr(u, f));
  }
  function _t(e, t, r) {
    if (X4(r), Gu(!1), e.tag === _) {
      rw(e, e, r);
      return;
    }
    var i = null;
    for (i = t; i !== null; ) {
      if (i.tag === _) {
        rw(i, e, r);
        return;
      } else if (i.tag === b) {
        var s = i.type, u = i.stateNode;
        if (typeof s.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && !nw(u)) {
          var f = To(r, e), h = mm(i, f, Ae), m = Ai(i, h, Ae), S = Yn();
          m !== null && (Nl(m, Ae, S), sr(m, S));
          return;
        }
      }
      i = i.return;
    }
    d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, r);
  }
  function lE(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t);
    var s = Yn();
    T1(e, r), gE(e), Gn === e && ss(cn, r) && (dn === zu || dn === ff && x1(cn) && vn() - Um < HC ? Lo(e, Q) : hf = Fe(hf, r)), sr(e, s);
  }
  function aw(e, t) {
    t === gn && (t = Vx(e));
    var r = Yn(), i = ar(e, t);
    i !== null && (Nl(i, t, r), sr(i, r));
  }
  function uE(e) {
    var t = e.memoizedState, r = gn;
    t !== null && (r = t.retryLane), aw(e, r);
  }
  function cE(e, t) {
    var r = gn, i;
    switch (e.tag) {
      case j:
        i = e.stateNode;
        var s = e.memoizedState;
        s !== null && (r = s.retryLane);
        break;
      case re:
        i = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    i !== null && i.delete(t), aw(e, r);
  }
  function dE(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Nx(e / 1960) * 1960;
  }
  function fE() {
    if (Vu > Ux)
      throw Vu = 0, Bm = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    Is > Fx && (Is = 0, gf = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function pE() {
    Yr.flushLegacyContextWarning(), Yr.flushPendingUnsafeLifecycleWarnings();
  }
  function iw(e, t) {
    Nt(e), Sf(e, Va, Lx), t && Sf(e, Mc, Ax), Sf(e, Va, Dx), t && Sf(e, Mc, Ox), hn();
  }
  function Sf(e, t, r) {
    for (var i = e, s = null; i !== null; ) {
      var u = i.subtreeFlags & t;
      i !== s && i.child !== null && u !== Te ? i = i.child : ((i.flags & t) !== Te && r(i), i.sibling !== null ? i = i.sibling : i = s = i.return);
    }
  }
  var _f = null;
  function ow(e) {
    {
      if ((Ze & Rn) !== un || !(e.mode & Ke))
        return;
      var t = e.tag;
      if (t !== E && t !== _ && t !== b && t !== w && t !== P && t !== I && t !== N)
        return;
      var r = ze(e) || "ReactComponent";
      if (_f !== null) {
        if (_f.has(r))
          return;
        _f.add(r);
      } else
        _f = /* @__PURE__ */ new Set([r]);
      var i = An;
      try {
        Nt(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        i ? Nt(e) : hn();
      }
    }
  }
  var Zm;
  {
    var hE = null;
    Zm = function(e, t, r) {
      var i = hw(hE, t);
      try {
        return bC(e, t, r);
      } catch (u) {
        if (k_() || u !== null && typeof u == "object" && typeof u.then == "function")
          throw u;
        if (kd(), kb(), EC(e, t), hw(t, i), t.mode & vt && cm(t), Ap(null, bC, null, e, t, r), W6()) {
          var s = Mp();
          typeof s == "object" && s !== null && s._suppressLogging && typeof u == "object" && u !== null && !u._suppressLogging && (u._suppressLogging = !0);
        }
        throw u;
      }
    };
  }
  var sw = !1, Qm;
  Qm = /* @__PURE__ */ new Set();
  function vE(e) {
    if (ro && !l4())
      switch (e.tag) {
        case w:
        case P:
        case N: {
          var t = Pt && ze(Pt) || "Unknown", r = t;
          if (!Qm.has(r)) {
            Qm.add(r);
            var i = ze(e) || "Unknown";
            d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
          }
          break;
        }
        case b: {
          sw || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), sw = !0);
          break;
        }
      }
  }
  function ju(e, t) {
    if (Hr) {
      var r = e.memoizedUpdaters;
      r.forEach(function(i) {
        $1(e, i, t);
      });
    }
  }
  var Xm = {};
  function Jm(e, t) {
    {
      var r = ta.current;
      return r !== null ? (r.push(t), Xm) : v1(e, t);
    }
  }
  function lw(e) {
    if (e !== Xm)
      return r3(e);
  }
  function uw() {
    return ta.current !== null;
  }
  function mE(e) {
    {
      if (e.mode & Ke) {
        if (!UC())
          return;
      } else if (!Ix() || Ze !== un || e.tag !== w && e.tag !== P && e.tag !== N)
        return;
      if (ta.current === null) {
        var t = An;
        try {
          Nt(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ze(e));
        } finally {
          t ? Nt(e) : hn();
        }
      }
    }
  }
  function gE(e) {
    e.tag !== Di && UC() && ta.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function Gu(e) {
    GC = e;
  }
  var zr = null, Ns = null, yE = function(e) {
    zr = e;
  };
  function Ps(e) {
    {
      if (zr === null)
        return e;
      var t = zr(e);
      return t === void 0 ? e : t.current;
    }
  }
  function eg(e) {
    return Ps(e);
  }
  function tg(e) {
    {
      if (zr === null)
        return e;
      var t = zr(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var r = Ps(e.render);
          if (e.render !== r) {
            var i = {
              $$typeof: me,
              render: r
            };
            return e.displayName !== void 0 && (i.displayName = e.displayName), i;
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function cw(e, t) {
    {
      if (zr === null)
        return !1;
      var r = e.elementType, i = t.type, s = !1, u = typeof i == "object" && i !== null ? i.$$typeof : null;
      switch (e.tag) {
        case b: {
          typeof i == "function" && (s = !0);
          break;
        }
        case w: {
          (typeof i == "function" || u === ke) && (s = !0);
          break;
        }
        case P: {
          (u === me || u === ke) && (s = !0);
          break;
        }
        case I:
        case N: {
          (u === Ue || u === ke) && (s = !0);
          break;
        }
        default:
          return !1;
      }
      if (s) {
        var f = zr(r);
        if (f !== void 0 && f === zr(i))
          return !0;
      }
      return !1;
    }
  }
  function dw(e) {
    {
      if (zr === null || typeof WeakSet != "function")
        return;
      Ns === null && (Ns = /* @__PURE__ */ new WeakSet()), Ns.add(e);
    }
  }
  var bE = function(e, t) {
    {
      if (zr === null)
        return;
      var r = t.staleFamilies, i = t.updatedFamilies;
      ri(), ni(function() {
        ng(e.current, i, r);
      });
    }
  }, CE = function(e, t) {
    {
      if (e.context !== yr)
        return;
      ri(), ni(function() {
        Yu(t, e, null, null);
      });
    }
  };
  function ng(e, t, r) {
    {
      var i = e.alternate, s = e.child, u = e.sibling, f = e.tag, h = e.type, m = null;
      switch (f) {
        case w:
        case N:
        case b:
          m = h;
          break;
        case P:
          m = h.render;
          break;
      }
      if (zr === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var S = !1, x = !1;
      if (m !== null) {
        var A = zr(m);
        A !== void 0 && (r.has(A) ? x = !0 : t.has(A) && (f === b ? x = !0 : S = !0));
      }
      if (Ns !== null && (Ns.has(e) || i !== null && Ns.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || S) {
        var L = ar(e, Ae);
        L !== null && fn(L, e, Ae, Et);
      }
      s !== null && !x && ng(s, t, r), u !== null && ng(u, t, r);
    }
  }
  var wE = function(e, t) {
    {
      var r = /* @__PURE__ */ new Set(), i = new Set(t.map(function(s) {
        return s.current;
      }));
      return rg(e.current, i, r), r;
    }
  };
  function rg(e, t, r) {
    {
      var i = e.child, s = e.sibling, u = e.tag, f = e.type, h = null;
      switch (u) {
        case w:
        case N:
        case b:
          h = f;
          break;
        case P:
          h = f.render;
          break;
      }
      var m = !1;
      h !== null && t.has(h) && (m = !0), m ? SE(e, r) : i !== null && rg(i, t, r), s !== null && rg(s, t, r);
    }
  }
  function SE(e, t) {
    {
      var r = _E(e, t);
      if (r)
        return;
      for (var i = e; ; ) {
        switch (i.tag) {
          case k:
            t.add(i.stateNode);
            return;
          case R:
            t.add(i.stateNode.containerInfo);
            return;
          case _:
            t.add(i.stateNode.containerInfo);
            return;
        }
        if (i.return === null)
          throw new Error("Expected to reach root first.");
        i = i.return;
      }
    }
  }
  function _E(e, t) {
    for (var r = e, i = !1; ; ) {
      if (r.tag === k)
        i = !0, t.add(r.stateNode);
      else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === e)
        return i;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e)
          return i;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return !1;
  }
  var ag;
  {
    ag = !1;
    try {
      var fw = Object.preventExtensions({});
    } catch {
      ag = !0;
    }
  }
  function xE(e, t, r, i) {
    this.tag = e, this.key = r, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Te, this.subtreeFlags = Te, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ag && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var br = function(e, t, r, i) {
    return new xE(e, t, r, i);
  };
  function ig(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function EE(e) {
    return typeof e == "function" && !ig(e) && e.defaultProps === void 0;
  }
  function RE(e) {
    if (typeof e == "function")
      return ig(e) ? b : w;
    if (e != null) {
      var t = e.$$typeof;
      if (t === me)
        return P;
      if (t === Ue)
        return I;
    }
    return E;
  }
  function Mo(e, t) {
    var r = e.alternate;
    r === null ? (r = br(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r._debugSource = e._debugSource, r._debugOwner = e._debugOwner, r._debugHookTypes = e._debugHookTypes, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = Te, r.subtreeFlags = Te, r.deletions = null, r.actualDuration = 0, r.actualStartTime = -1), r.flags = e.flags & Ha, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue;
    var i = e.dependencies;
    switch (r.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.selfBaseDuration = e.selfBaseDuration, r.treeBaseDuration = e.treeBaseDuration, r._debugNeedsRemount = e._debugNeedsRemount, r.tag) {
      case E:
      case w:
      case N:
        r.type = Ps(e.type);
        break;
      case b:
        r.type = eg(e.type);
        break;
      case P:
        r.type = tg(e.type);
        break;
    }
    return r;
  }
  function kE(e, t) {
    e.flags &= Ha | Zt;
    var r = e.alternate;
    if (r === null)
      e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = Te, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = Te, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type;
      var i = r.dependencies;
      e.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, e.selfBaseDuration = r.selfBaseDuration, e.treeBaseDuration = r.treeBaseDuration;
    }
    return e;
  }
  function TE(e, t, r) {
    var i;
    return e === bd ? (i = Ke, t === !0 && (i |= Qt, i |= fa)) : i = $e, Hr && (i |= vt), br(_, null, null, i);
  }
  function og(e, t, r, i, s, u) {
    var f = E, h = e;
    if (typeof e == "function")
      ig(e) ? (f = b, h = eg(h)) : h = Ps(h);
    else if (typeof e == "string")
      f = k;
    else
      e:
        switch (e) {
          case la:
            return Hi(r.children, s, u, t);
          case eo:
            f = z, s |= Qt, (s & Ke) !== $e && (s |= fa);
            break;
          case D:
            return $E(r, s, u, t);
          case Ge:
            return DE(r, s, u, t);
          case et:
            return OE(r, s, u, t);
          case Lt:
            return pw(r, s, u, t);
          case Ln:
          case rn:
          case ua:
          case Fo:
          case Ot:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case X:
                  f = q;
                  break e;
                case ie:
                  f = M;
                  break e;
                case me:
                  f = P, h = tg(h);
                  break e;
                case Ue:
                  f = I;
                  break e;
                case ke:
                  f = J, h = null;
                  break e;
              }
            var m = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var S = i ? ze(i) : null;
              S && (m += `

Check the render method of \`` + S + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + m));
          }
        }
    var x = br(f, r, t, s);
    return x.elementType = e, x.type = h, x.lanes = u, x._debugOwner = i, x;
  }
  function sg(e, t, r) {
    var i = null;
    i = e._owner;
    var s = e.type, u = e.key, f = e.props, h = og(s, u, f, i, t, r);
    return h._debugSource = e._source, h._debugOwner = e._owner, h;
  }
  function Hi(e, t, r, i) {
    var s = br(O, e, i, t);
    return s.lanes = r, s;
  }
  function $E(e, t, r, i) {
    typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var s = br(Z, e, i, t | vt);
    return s.elementType = D, s.lanes = r, s.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, s;
  }
  function DE(e, t, r, i) {
    var s = br(j, e, i, t);
    return s.elementType = Ge, s.lanes = r, s;
  }
  function OE(e, t, r, i) {
    var s = br(re, e, i, t);
    return s.elementType = et, s.lanes = r, s;
  }
  function pw(e, t, r, i) {
    var s = br(le, e, i, t);
    s.elementType = Lt, s.lanes = r;
    var u = {
      isHidden: !1
    };
    return s.stateNode = u, s;
  }
  function lg(e, t, r) {
    var i = br(T, e, null, t);
    return i.lanes = r, i;
  }
  function LE() {
    var e = br(k, null, null, $e);
    return e.elementType = "DELETED", e;
  }
  function AE(e) {
    var t = br(ne, null, null, $e);
    return t.stateNode = e, t;
  }
  function ug(e, t, r) {
    var i = e.children !== null ? e.children : [], s = br(R, i, e.key, t);
    return s.lanes = r, s.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, s;
  }
  function hw(e, t) {
    return e === null && (e = br(E, null, null, $e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function ME(e, t, r, i, s) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Bh, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = gn, this.eventTimes = ph(Q), this.expirationTimes = ph(Et), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = ph(Q), this.identifierPrefix = i, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var u = this.pendingUpdatersLaneMap = [], f = 0; f < Bp; f++)
        u.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case bd:
        this._debugRootType = r ? "hydrateRoot()" : "createRoot()";
        break;
      case Di:
        this._debugRootType = r ? "hydrate()" : "render()";
        break;
    }
  }
  function vw(e, t, r, i, s, u, f, h, m, S) {
    var x = new ME(e, t, r, h, m), A = TE(t, u);
    x.current = A, A.stateNode = x;
    {
      var L = {
        element: i,
        isDehydrated: r,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      A.memoizedState = L;
    }
    return gv(A), x;
  }
  var cg = "18.2.0";
  function qE(e, t, r) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return Xn(i), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Fr,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: r
    };
  }
  var dg, fg;
  dg = !1, fg = {};
  function mw(e) {
    if (!e)
      return yr;
    var t = Jo(e), r = y_(t);
    if (t.tag === b) {
      var i = t.type;
      if (va(i))
        return V0(t, i, r);
    }
    return r;
  }
  function zE(e, t) {
    {
      var r = Jo(e);
      if (r === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var i = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
      }
      var s = f1(r);
      if (s === null)
        return null;
      if (s.mode & Qt) {
        var u = ze(r) || "Component";
        if (!fg[u]) {
          fg[u] = !0;
          var f = An;
          try {
            Nt(s), r.mode & Qt ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u);
          } finally {
            f ? Nt(f) : hn();
          }
        }
      }
      return s.stateNode;
    }
  }
  function gw(e, t, r, i, s, u, f, h) {
    var m = !1, S = null;
    return vw(e, t, m, S, r, i, s, u, f);
  }
  function yw(e, t, r, i, s, u, f, h, m, S) {
    var x = !0, A = vw(r, i, x, e, s, u, f, h, m);
    A.context = mw(null);
    var L = A.current, V = Yn(), H = Fi(L), Y = Xa(V, H);
    return Y.callback = t ?? null, Ai(L, Y, H), Hx(A, H, V), A;
  }
  function Yu(e, t, r, i) {
    d3(t, e);
    var s = t.current, u = Yn(), f = Fi(s);
    O3(f);
    var h = mw(r);
    t.context === null ? t.context = h : t.pendingContext = h, ro && An !== null && !dg && (dg = !0, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ze(An) || "Unknown"));
    var m = Xa(u, f);
    m.payload = {
      element: e
    }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), m.callback = i);
    var S = Ai(s, m, f);
    return S !== null && (fn(S, s, f, u), Ld(S, s, f)), f;
  }
  function xf(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case k:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function IE(e) {
    switch (e.tag) {
      case _: {
        var t = e.stateNode;
        if (Hc(t)) {
          var r = U3(t);
          Yx(t, r);
        }
        break;
      }
      case j: {
        ni(function() {
          var s = ar(e, Ae);
          if (s !== null) {
            var u = Yn();
            fn(s, e, Ae, u);
          }
        });
        var i = Ae;
        pg(e, i);
        break;
      }
    }
  }
  function bw(e, t) {
    var r = e.memoizedState;
    r !== null && r.dehydrated !== null && (r.retryLane = G3(r.retryLane, t));
  }
  function pg(e, t) {
    bw(e, t);
    var r = e.alternate;
    r && bw(r, t);
  }
  function NE(e) {
    if (e.tag === j) {
      var t = Ml, r = ar(e, t);
      if (r !== null) {
        var i = Yn();
        fn(r, e, t, i);
      }
      pg(e, t);
    }
  }
  function PE(e) {
    if (e.tag === j) {
      var t = Fi(e), r = ar(e, t);
      if (r !== null) {
        var i = Yn();
        fn(r, e, t, i);
      }
      pg(e, t);
    }
  }
  function Cw(e) {
    var t = n3(e);
    return t === null ? null : t.stateNode;
  }
  var ww = function(e) {
    return null;
  };
  function UE(e) {
    return ww(e);
  }
  var Sw = function(e) {
    return !1;
  };
  function FE(e) {
    return Sw(e);
  }
  var _w = null, xw = null, Ew = null, Rw = null, kw = null, Tw = null, $w = null, Dw = null, Ow = null;
  {
    var Lw = function(e, t, r) {
      var i = t[r], s = ot(e) ? e.slice() : Ye({}, e);
      return r + 1 === t.length ? (ot(s) ? s.splice(i, 1) : delete s[i], s) : (s[i] = Lw(e[i], t, r + 1), s);
    }, Aw = function(e, t) {
      return Lw(e, t, 0);
    }, Mw = function(e, t, r, i) {
      var s = t[i], u = ot(e) ? e.slice() : Ye({}, e);
      if (i + 1 === t.length) {
        var f = r[i];
        u[f] = u[s], ot(u) ? u.splice(s, 1) : delete u[s];
      } else
        u[s] = Mw(
          // $FlowFixMe number or string is fine here
          e[s],
          t,
          r,
          i + 1
        );
      return u;
    }, qw = function(e, t, r) {
      if (t.length !== r.length) {
        p("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var i = 0; i < r.length - 1; i++)
          if (t[i] !== r[i]) {
            p("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return Mw(e, t, r, 0);
    }, zw = function(e, t, r, i) {
      if (r >= t.length)
        return i;
      var s = t[r], u = ot(e) ? e.slice() : Ye({}, e);
      return u[s] = zw(e[s], t, r + 1, i), u;
    }, Iw = function(e, t, r) {
      return zw(e, t, 0, r);
    }, hg = function(e, t) {
      for (var r = e.memoizedState; r !== null && t > 0; )
        r = r.next, t--;
      return r;
    };
    _w = function(e, t, r, i) {
      var s = hg(e, t);
      if (s !== null) {
        var u = Iw(s.memoizedState, r, i);
        s.memoizedState = u, s.baseState = u, e.memoizedProps = Ye({}, e.memoizedProps);
        var f = ar(e, Ae);
        f !== null && fn(f, e, Ae, Et);
      }
    }, xw = function(e, t, r) {
      var i = hg(e, t);
      if (i !== null) {
        var s = Aw(i.memoizedState, r);
        i.memoizedState = s, i.baseState = s, e.memoizedProps = Ye({}, e.memoizedProps);
        var u = ar(e, Ae);
        u !== null && fn(u, e, Ae, Et);
      }
    }, Ew = function(e, t, r, i) {
      var s = hg(e, t);
      if (s !== null) {
        var u = qw(s.memoizedState, r, i);
        s.memoizedState = u, s.baseState = u, e.memoizedProps = Ye({}, e.memoizedProps);
        var f = ar(e, Ae);
        f !== null && fn(f, e, Ae, Et);
      }
    }, Rw = function(e, t, r) {
      e.pendingProps = Iw(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var i = ar(e, Ae);
      i !== null && fn(i, e, Ae, Et);
    }, kw = function(e, t) {
      e.pendingProps = Aw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var r = ar(e, Ae);
      r !== null && fn(r, e, Ae, Et);
    }, Tw = function(e, t, r) {
      e.pendingProps = qw(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var i = ar(e, Ae);
      i !== null && fn(i, e, Ae, Et);
    }, $w = function(e) {
      var t = ar(e, Ae);
      t !== null && fn(t, e, Ae, Et);
    }, Dw = function(e) {
      ww = e;
    }, Ow = function(e) {
      Sw = e;
    };
  }
  function VE(e) {
    var t = f1(e);
    return t === null ? null : t.stateNode;
  }
  function HE(e) {
    return null;
  }
  function BE() {
    return An;
  }
  function jE(e) {
    var t = e.findFiberByHostInstance, r = o.ReactCurrentDispatcher;
    return c3({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: _w,
      overrideHookStateDeletePath: xw,
      overrideHookStateRenamePath: Ew,
      overrideProps: Rw,
      overridePropsDeletePath: kw,
      overridePropsRenamePath: Tw,
      setErrorHandler: Dw,
      setSuspenseHandler: Ow,
      scheduleUpdate: $w,
      currentDispatcherRef: r,
      findHostInstanceByFiber: VE,
      findFiberByHostInstance: t || HE,
      // React Refresh
      findHostInstancesForRefresh: wE,
      scheduleRefresh: bE,
      scheduleRoot: CE,
      setRefreshHandler: yE,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: BE,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: cg
    });
  }
  var Nw = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function vg(e) {
    this._internalRoot = e;
  }
  Ef.prototype.render = vg.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Rf(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
      var r = t.containerInfo;
      if (r.nodeType !== Kt) {
        var i = Cw(t.current);
        i && i.parentNode !== r && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    Yu(e, t, null, null);
  }, Ef.prototype.unmount = vg.prototype.unmount = function() {
    typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ZC() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ni(function() {
        Yu(null, e, null, null);
      }), I0(t);
    }
  };
  function GE(e, t) {
    if (!Rf(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    Pw(e);
    var r = !1, i = !1, s = "", u = Nw;
    t != null && (t.hydrate ? p("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === sa && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var f = gw(e, bd, null, r, i, s, u);
    fd(f.current, e);
    var h = e.nodeType === Kt ? e.parentNode : e;
    return tu(h), new vg(f);
  }
  function Ef(e) {
    this._internalRoot = e;
  }
  function YE(e) {
    e && u7(e);
  }
  Ef.prototype.unstable_scheduleHydration = YE;
  function WE(e, t, r) {
    if (!Rf(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    Pw(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var i = r ?? null, s = r != null && r.hydratedSources || null, u = !1, f = !1, h = "", m = Nw;
    r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (h = r.identifierPrefix), r.onRecoverableError !== void 0 && (m = r.onRecoverableError));
    var S = yw(t, null, e, bd, i, u, f, h, m);
    if (fd(S.current, e), tu(e), s)
      for (var x = 0; x < s.length; x++) {
        var A = s[x];
        n4(S, A);
      }
    return new Ef(S);
  }
  function Rf(e) {
    return !!(e && (e.nodeType === nr || e.nodeType === Pa || e.nodeType === Sp || !yt));
  }
  function Wu(e) {
    return !!(e && (e.nodeType === nr || e.nodeType === Pa || e.nodeType === Sp || e.nodeType === Kt && e.nodeValue === " react-mount-point-unstable "));
  }
  function Pw(e) {
    e.nodeType === nr && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fu(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var KE = o.ReactCurrentOwner, Uw;
  Uw = function(e) {
    if (e._reactRootContainer && e.nodeType !== Kt) {
      var t = Cw(e._reactRootContainer.current);
      t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var r = !!e._reactRootContainer, i = mg(e), s = !!(i && Ti(i));
    s && !r && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === nr && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function mg(e) {
    return e ? e.nodeType === Pa ? e.documentElement : e.firstChild : null;
  }
  function Fw() {
  }
  function ZE(e, t, r, i, s) {
    if (s) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var L = xf(f);
          u.call(L);
        };
      }
      var f = yw(
        t,
        i,
        e,
        Di,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        Fw
      );
      e._reactRootContainer = f, fd(f.current, e);
      var h = e.nodeType === Kt ? e.parentNode : e;
      return tu(h), ni(), f;
    } else {
      for (var m; m = e.lastChild; )
        e.removeChild(m);
      if (typeof i == "function") {
        var S = i;
        i = function() {
          var L = xf(x);
          S.call(L);
        };
      }
      var x = gw(
        e,
        Di,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        Fw
      );
      e._reactRootContainer = x, fd(x.current, e);
      var A = e.nodeType === Kt ? e.parentNode : e;
      return tu(A), ni(function() {
        Yu(t, x, r, i);
      }), x;
    }
  }
  function QE(e, t) {
    e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function kf(e, t, r, i, s) {
    Uw(r), QE(s === void 0 ? null : s, "render");
    var u = r._reactRootContainer, f;
    if (!u)
      f = ZE(r, t, e, s, i);
    else {
      if (f = u, typeof s == "function") {
        var h = s;
        s = function() {
          var m = xf(f);
          h.call(m);
        };
      }
      Yu(t, f, e, s);
    }
    return xf(f);
  }
  function XE(e) {
    {
      var t = KE.current;
      if (t !== null && t.stateNode !== null) {
        var r = t.stateNode._warnedAboutRefsInRender;
        r || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", it(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === nr ? e : zE(e, "findDOMNode");
  }
  function JE(e, t, r) {
    if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var i = fu(t) && t._reactRootContainer === void 0;
      i && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return kf(null, e, t, !0, r);
  }
  function eR(e, t, r) {
    if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var i = fu(t) && t._reactRootContainer === void 0;
      i && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return kf(null, e, t, !1, r);
  }
  function tR(e, t, r, i) {
    if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wu(r))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !K6(e))
      throw new Error("parentComponent must be a valid React Component");
    return kf(e, t, r, !1, i);
  }
  function nR(e) {
    if (!Wu(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = fu(e) && e._reactRootContainer === void 0;
      t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var r = mg(e), i = r && !Ti(r);
        i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return ni(function() {
        kf(null, null, e, !1, function() {
          e._reactRootContainer = null, I0(e);
        });
      }), !0;
    } else {
      {
        var s = mg(e), u = !!(s && Ti(s)), f = e.nodeType === nr && Wu(e.parentNode) && !!e.parentNode._reactRootContainer;
        u && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  J3(IE), t7(NE), n7(PE), r7(Br), a7(Z3), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), N6(i9), F6(Ym, Wx, ni);
  function rR(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Rf(t))
      throw new Error("Target container is not a DOM element.");
    return qE(e, t, null, r);
  }
  function aR(e, t, r, i) {
    return tR(e, t, r, i);
  }
  var gg = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [Ti, ms, pd, e1, t1, Ym]
  };
  function iR(e, t) {
    return gg.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), GE(e, t);
  }
  function oR(e, t, r) {
    return gg.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), WE(e, t, r);
  }
  function sR(e) {
    return ZC() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ni(e);
  }
  var lR = jE({
    findFiberByHostInstance: bo,
    bundleType: 1,
    version: cg,
    rendererPackageName: "react-dom"
  });
  if (!lR && Je && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var Vw = window.location.protocol;
    /^(https?|file):$/.test(Vw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Vw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gg, wr.createPortal = rR, wr.createRoot = iR, wr.findDOMNode = XE, wr.flushSync = sR, wr.hydrate = JE, wr.hydrateRoot = oR, wr.render = eR, wr.unmountComponentAtNode = nR, wr.unstable_batchedUpdates = Ym, wr.unstable_renderSubtreeIntoContainer = aR, wr.version = cg, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
H5.exports = wr;
var Js = H5.exports;
const zD = [
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
], Jt = zD.reduce((n, a) => {
  const o = /* @__PURE__ */ y.forwardRef((l, c) => {
    const { asChild: p, ...d } = l, v = p ? ic : a;
    return y.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ y.createElement(v, rt({}, d, {
      ref: c
    }));
  });
  return o.displayName = `Primitive.${a}`, {
    ...n,
    [a]: o
  };
}, {});
function ID(n, a) {
  n && Js.flushSync(
    () => n.dispatchEvent(a)
  );
}
const Er = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {
};
function ND(n, a) {
  return y.useReducer((o, l) => {
    const c = a[o][l];
    return c ?? o;
  }, n);
}
const G5 = (n) => {
  const { present: a, children: o } = n, l = PD(a), c = typeof o == "function" ? o({
    present: l.isPresent
  }) : y.Children.only(o), p = Dn(l.ref, c.ref);
  return typeof o == "function" || l.isPresent ? /* @__PURE__ */ y.cloneElement(c, {
    ref: p
  }) : null;
};
G5.displayName = "Presence";
function PD(n) {
  const [a, o] = y.useState(), l = y.useRef({}), c = y.useRef(n), p = y.useRef("none"), d = n ? "mounted" : "unmounted", [v, w] = ND(d, {
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
  return y.useEffect(() => {
    const b = $f(l.current);
    p.current = v === "mounted" ? b : "none";
  }, [
    v
  ]), Er(() => {
    const b = l.current, E = c.current;
    if (E !== n) {
      const R = p.current, k = $f(b);
      n ? w("MOUNT") : k === "none" || (b == null ? void 0 : b.display) === "none" ? w("UNMOUNT") : w(E && R !== k ? "ANIMATION_OUT" : "UNMOUNT"), c.current = n;
    }
  }, [
    n,
    w
  ]), Er(() => {
    if (a) {
      const b = (_) => {
        const k = $f(l.current).includes(_.animationName);
        _.target === a && k && Js.flushSync(
          () => w("ANIMATION_END")
        );
      }, E = (_) => {
        _.target === a && (p.current = $f(l.current));
      };
      return a.addEventListener("animationstart", E), a.addEventListener("animationcancel", b), a.addEventListener("animationend", b), () => {
        a.removeEventListener("animationstart", E), a.removeEventListener("animationcancel", b), a.removeEventListener("animationend", b);
      };
    } else
      w("ANIMATION_END");
  }, [
    a,
    w
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(v),
    ref: y.useCallback((b) => {
      b && (l.current = getComputedStyle(b)), o(b);
    }, [])
  };
}
function $f(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
const UD = mR["useId".toString()] || (() => {
});
let FD = 0;
function cc(n) {
  const [a, o] = y.useState(UD());
  return Er(() => {
    n || o(
      (l) => l ?? String(FD++)
    );
  }, [
    n
  ]), n || (a ? `radix-${a}` : "");
}
const VD = /* @__PURE__ */ y.createContext(void 0);
function fy(n) {
  const a = y.useContext(VD);
  return n || a || "ltr";
}
function HD(n, a = globalThis == null ? void 0 : globalThis.document) {
  const o = Ra(n);
  y.useEffect(() => {
    const l = (c) => {
      c.key === "Escape" && o(c);
    };
    return a.addEventListener("keydown", l), () => a.removeEventListener("keydown", l);
  }, [
    o,
    a
  ]);
}
let kg = 0;
function BD() {
  y.useEffect(() => {
    var n, a;
    const o = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (n = o[0]) !== null && n !== void 0 ? n : w2()), document.body.insertAdjacentElement("beforeend", (a = o[1]) !== null && a !== void 0 ? a : w2()), kg++, () => {
      kg === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (l) => l.remove()
      ), kg--;
    };
  }, []);
}
function w2() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", n;
}
var Ea = function() {
  return Ea = Object.assign || function(a) {
    for (var o, l = 1, c = arguments.length; l < c; l++) {
      o = arguments[l];
      for (var p in o)
        Object.prototype.hasOwnProperty.call(o, p) && (a[p] = o[p]);
    }
    return a;
  }, Ea.apply(this, arguments);
};
function Y5(n, a) {
  var o = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) && a.indexOf(l) < 0 && (o[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, l = Object.getOwnPropertySymbols(n); c < l.length; c++)
      a.indexOf(l[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, l[c]) && (o[l[c]] = n[l[c]]);
  return o;
}
function jD(n, a, o) {
  if (o || arguments.length === 2)
    for (var l = 0, c = a.length, p; l < c; l++)
      (p || !(l in a)) && (p || (p = Array.prototype.slice.call(a, 0, l)), p[l] = a[l]);
  return n.concat(p || Array.prototype.slice.call(a));
}
var Uf = "right-scroll-bar-position", Ff = "width-before-scroll-bar", GD = "with-scroll-bars-hidden", YD = "--removed-body-scroll-bar-size";
function WD(n, a) {
  return typeof n == "function" ? n(a) : n && (n.current = a), n;
}
function KD(n, a) {
  var o = y.useState(function() {
    return {
      // value
      value: n,
      // last callback
      callback: a,
      // "memoized" public interface
      facade: {
        get current() {
          return o.value;
        },
        set current(l) {
          var c = o.value;
          c !== l && (o.value = l, o.callback(l, c));
        }
      }
    };
  })[0];
  return o.callback = a, o.facade;
}
function ZD(n, a) {
  return KD(a || null, function(o) {
    return n.forEach(function(l) {
      return WD(l, o);
    });
  });
}
function QD(n) {
  return n;
}
function XD(n, a) {
  a === void 0 && (a = QD);
  var o = [], l = !1, c = {
    read: function() {
      if (l)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return o.length ? o[o.length - 1] : n;
    },
    useMedium: function(p) {
      var d = a(p, l);
      return o.push(d), function() {
        o = o.filter(function(v) {
          return v !== d;
        });
      };
    },
    assignSyncMedium: function(p) {
      for (l = !0; o.length; ) {
        var d = o;
        o = [], d.forEach(p);
      }
      o = {
        push: function(v) {
          return p(v);
        },
        filter: function() {
          return o;
        }
      };
    },
    assignMedium: function(p) {
      l = !0;
      var d = [];
      if (o.length) {
        var v = o;
        o = [], v.forEach(p), d = o;
      }
      var w = function() {
        var E = d;
        d = [], E.forEach(p);
      }, b = function() {
        return Promise.resolve().then(w);
      };
      b(), o = {
        push: function(E) {
          d.push(E), b();
        },
        filter: function(E) {
          return d = d.filter(E), o;
        }
      };
    }
  };
  return c;
}
function JD(n) {
  n === void 0 && (n = {});
  var a = XD(null);
  return a.options = Ea({ async: !0, ssr: !1 }, n), a;
}
var W5 = function(n) {
  var a = n.sideCar, o = Y5(n, ["sideCar"]);
  if (!a)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var l = a.read();
  if (!l)
    throw new Error("Sidecar medium not found");
  return y.createElement(l, Ea({}, o));
};
W5.isSideCarExport = !0;
function eO(n, a) {
  return n.useMedium(a), W5;
}
var K5 = JD(), Tg = function() {
}, ap = y.forwardRef(function(n, a) {
  var o = y.useRef(null), l = y.useState({
    onScrollCapture: Tg,
    onWheelCapture: Tg,
    onTouchMoveCapture: Tg
  }), c = l[0], p = l[1], d = n.forwardProps, v = n.children, w = n.className, b = n.removeScrollBar, E = n.enabled, _ = n.shards, R = n.sideCar, k = n.noIsolation, T = n.inert, O = n.allowPinchZoom, z = n.as, M = z === void 0 ? "div" : z, q = Y5(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), P = R, Z = ZD([o, a]), j = Ea(Ea({}, q), c);
  return y.createElement(
    y.Fragment,
    null,
    E && y.createElement(P, { sideCar: K5, removeScrollBar: b, shards: _, noIsolation: k, inert: T, setCallbacks: p, allowPinchZoom: !!O, lockRef: o }),
    d ? y.cloneElement(y.Children.only(v), Ea(Ea({}, j), { ref: Z })) : y.createElement(M, Ea({}, j, { className: w, ref: Z }), v)
  );
});
ap.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ap.classNames = {
  fullWidth: Ff,
  zeroRight: Uf
};
var S2, tO = function() {
  if (S2)
    return S2;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function nO() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var a = tO();
  return a && n.setAttribute("nonce", a), n;
}
function rO(n, a) {
  n.styleSheet ? n.styleSheet.cssText = a : n.appendChild(document.createTextNode(a));
}
function aO(n) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(n);
}
var iO = function() {
  var n = 0, a = null;
  return {
    add: function(o) {
      n == 0 && (a = nO()) && (rO(a, o), aO(a)), n++;
    },
    remove: function() {
      n--, !n && a && (a.parentNode && a.parentNode.removeChild(a), a = null);
    }
  };
}, oO = function() {
  var n = iO();
  return function(a, o) {
    y.useEffect(function() {
      return n.add(a), function() {
        n.remove();
      };
    }, [a && o]);
  };
}, Z5 = function() {
  var n = oO(), a = function(o) {
    var l = o.styles, c = o.dynamic;
    return n(l, c), null;
  };
  return a;
}, sO = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $g = function(n) {
  return parseInt(n || "", 10) || 0;
}, lO = function(n) {
  var a = window.getComputedStyle(document.body), o = a[n === "padding" ? "paddingLeft" : "marginLeft"], l = a[n === "padding" ? "paddingTop" : "marginTop"], c = a[n === "padding" ? "paddingRight" : "marginRight"];
  return [$g(o), $g(l), $g(c)];
}, uO = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return sO;
  var a = lO(n), o = document.documentElement.clientWidth, l = window.innerWidth;
  return {
    left: a[0],
    top: a[1],
    right: a[2],
    gap: Math.max(0, l - o + a[2] - a[0])
  };
}, cO = Z5(), dO = function(n, a, o, l) {
  var c = n.left, p = n.top, d = n.right, v = n.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(GD, ` {
   overflow: hidden `).concat(l, `;
   padding-right: `).concat(v, "px ").concat(l, `;
  }
  body {
    overflow: hidden `).concat(l, `;
    overscroll-behavior: contain;
    `).concat([
    a && "position: relative ".concat(l, ";"),
    o === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(p, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(v, "px ").concat(l, `;
    `),
    o === "padding" && "padding-right: ".concat(v, "px ").concat(l, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Uf, ` {
    right: `).concat(v, "px ").concat(l, `;
  }
  
  .`).concat(Ff, ` {
    margin-right: `).concat(v, "px ").concat(l, `;
  }
  
  .`).concat(Uf, " .").concat(Uf, ` {
    right: 0 `).concat(l, `;
  }
  
  .`).concat(Ff, " .").concat(Ff, ` {
    margin-right: 0 `).concat(l, `;
  }
  
  body {
    `).concat(YD, ": ").concat(v, `px;
  }
`);
}, fO = function(n) {
  var a = n.noRelative, o = n.noImportant, l = n.gapMode, c = l === void 0 ? "margin" : l, p = y.useMemo(function() {
    return uO(c);
  }, [c]);
  return y.createElement(cO, { styles: dO(p, !a, c, o ? "" : "!important") });
}, Zg = !1;
if (typeof window < "u")
  try {
    var Df = Object.defineProperty({}, "passive", {
      get: function() {
        return Zg = !0, !0;
      }
    });
    window.addEventListener("test", Df, Df), window.removeEventListener("test", Df, Df);
  } catch {
    Zg = !1;
  }
var Bs = Zg ? { passive: !1 } : !1, pO = function(n) {
  return n.tagName === "TEXTAREA";
}, Q5 = function(n, a) {
  var o = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    o[a] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !pO(n) && o[a] === "visible")
  );
}, hO = function(n) {
  return Q5(n, "overflowY");
}, vO = function(n) {
  return Q5(n, "overflowX");
}, _2 = function(n, a) {
  var o = a;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var l = X5(n, o);
    if (l) {
      var c = J5(n, o), p = c[1], d = c[2];
      if (p > d)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== document.body);
  return !1;
}, mO = function(n) {
  var a = n.scrollTop, o = n.scrollHeight, l = n.clientHeight;
  return [
    a,
    o,
    l
  ];
}, gO = function(n) {
  var a = n.scrollLeft, o = n.scrollWidth, l = n.clientWidth;
  return [
    a,
    o,
    l
  ];
}, X5 = function(n, a) {
  return n === "v" ? hO(a) : vO(a);
}, J5 = function(n, a) {
  return n === "v" ? mO(a) : gO(a);
}, yO = function(n, a) {
  return n === "h" && a === "rtl" ? -1 : 1;
}, bO = function(n, a, o, l, c) {
  var p = yO(n, window.getComputedStyle(a).direction), d = p * l, v = o.target, w = a.contains(v), b = !1, E = d > 0, _ = 0, R = 0;
  do {
    var k = J5(n, v), T = k[0], O = k[1], z = k[2], M = O - z - p * T;
    (T || M) && X5(n, v) && (_ += M, R += T), v = v.parentNode;
  } while (
    // portaled content
    !w && v !== document.body || // self content
    w && (a.contains(v) || a === v)
  );
  return (E && (c && _ === 0 || !c && d > _) || !E && (c && R === 0 || !c && -d > R)) && (b = !0), b;
}, Of = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, x2 = function(n) {
  return [n.deltaX, n.deltaY];
}, E2 = function(n) {
  return n && "current" in n ? n.current : n;
}, CO = function(n, a) {
  return n[0] === a[0] && n[1] === a[1];
}, wO = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, SO = 0, js = [];
function _O(n) {
  var a = y.useRef([]), o = y.useRef([0, 0]), l = y.useRef(), c = y.useState(SO++)[0], p = y.useState(function() {
    return Z5();
  })[0], d = y.useRef(n);
  y.useEffect(function() {
    d.current = n;
  }, [n]), y.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var O = jD([n.lockRef.current], (n.shards || []).map(E2), !0).filter(Boolean);
      return O.forEach(function(z) {
        return z.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), O.forEach(function(z) {
          return z.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var v = y.useCallback(function(O, z) {
    if ("touches" in O && O.touches.length === 2)
      return !d.current.allowPinchZoom;
    var M = Of(O), q = o.current, P = "deltaX" in O ? O.deltaX : q[0] - M[0], Z = "deltaY" in O ? O.deltaY : q[1] - M[1], j, I = O.target, N = Math.abs(P) > Math.abs(Z) ? "h" : "v";
    if ("touches" in O && N === "h" && I.type === "range")
      return !1;
    var J = _2(N, I);
    if (!J)
      return !0;
    if (J ? j = N : (j = N === "v" ? "h" : "v", J = _2(N, I)), !J)
      return !1;
    if (!l.current && "changedTouches" in O && (P || Z) && (l.current = j), !j)
      return !0;
    var Ce = l.current || j;
    return bO(Ce, z, O, Ce === "h" ? P : Z, !0);
  }, []), w = y.useCallback(function(O) {
    var z = O;
    if (!(!js.length || js[js.length - 1] !== p)) {
      var M = "deltaY" in z ? x2(z) : Of(z), q = a.current.filter(function(j) {
        return j.name === z.type && j.target === z.target && CO(j.delta, M);
      })[0];
      if (q && q.should) {
        z.cancelable && z.preventDefault();
        return;
      }
      if (!q) {
        var P = (d.current.shards || []).map(E2).filter(Boolean).filter(function(j) {
          return j.contains(z.target);
        }), Z = P.length > 0 ? v(z, P[0]) : !d.current.noIsolation;
        Z && z.cancelable && z.preventDefault();
      }
    }
  }, []), b = y.useCallback(function(O, z, M, q) {
    var P = { name: O, delta: z, target: M, should: q };
    a.current.push(P), setTimeout(function() {
      a.current = a.current.filter(function(Z) {
        return Z !== P;
      });
    }, 1);
  }, []), E = y.useCallback(function(O) {
    o.current = Of(O), l.current = void 0;
  }, []), _ = y.useCallback(function(O) {
    b(O.type, x2(O), O.target, v(O, n.lockRef.current));
  }, []), R = y.useCallback(function(O) {
    b(O.type, Of(O), O.target, v(O, n.lockRef.current));
  }, []);
  y.useEffect(function() {
    return js.push(p), n.setCallbacks({
      onScrollCapture: _,
      onWheelCapture: _,
      onTouchMoveCapture: R
    }), document.addEventListener("wheel", w, Bs), document.addEventListener("touchmove", w, Bs), document.addEventListener("touchstart", E, Bs), function() {
      js = js.filter(function(O) {
        return O !== p;
      }), document.removeEventListener("wheel", w, Bs), document.removeEventListener("touchmove", w, Bs), document.removeEventListener("touchstart", E, Bs);
    };
  }, []);
  var k = n.removeScrollBar, T = n.inert;
  return y.createElement(
    y.Fragment,
    null,
    T ? y.createElement(p, { styles: wO(c) }) : null,
    k ? y.createElement(fO, { gapMode: "margin" }) : null
  );
}
const xO = eO(K5, _O);
var eS = y.forwardRef(function(n, a) {
  return y.createElement(ap, Ea({}, n, { ref: a, sideCar: xO }));
});
eS.classNames = ap.classNames;
const EO = eS;
var RO = function(n) {
  if (typeof document > "u")
    return null;
  var a = Array.isArray(n) ? n[0] : n;
  return a.ownerDocument.body;
}, Gs = /* @__PURE__ */ new WeakMap(), Lf = /* @__PURE__ */ new WeakMap(), Af = {}, Dg = 0, tS = function(n) {
  return n && (n.host || tS(n.parentNode));
}, kO = function(n, a) {
  return a.map(function(o) {
    if (n.contains(o))
      return o;
    var l = tS(o);
    return l && n.contains(l) ? l : (console.error("aria-hidden", o, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, TO = function(n, a, o, l) {
  var c = kO(a, Array.isArray(n) ? n : [n]);
  Af[o] || (Af[o] = /* @__PURE__ */ new WeakMap());
  var p = Af[o], d = [], v = /* @__PURE__ */ new Set(), w = new Set(c), b = function(_) {
    !_ || v.has(_) || (v.add(_), b(_.parentNode));
  };
  c.forEach(b);
  var E = function(_) {
    !_ || w.has(_) || Array.prototype.forEach.call(_.children, function(R) {
      if (v.has(R))
        E(R);
      else {
        var k = R.getAttribute(l), T = k !== null && k !== "false", O = (Gs.get(R) || 0) + 1, z = (p.get(R) || 0) + 1;
        Gs.set(R, O), p.set(R, z), d.push(R), O === 1 && T && Lf.set(R, !0), z === 1 && R.setAttribute(o, "true"), T || R.setAttribute(l, "true");
      }
    });
  };
  return E(a), v.clear(), Dg++, function() {
    d.forEach(function(_) {
      var R = Gs.get(_) - 1, k = p.get(_) - 1;
      Gs.set(_, R), p.set(_, k), R || (Lf.has(_) || _.removeAttribute(l), Lf.delete(_)), k || _.removeAttribute(o);
    }), Dg--, Dg || (Gs = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Lf = /* @__PURE__ */ new WeakMap(), Af = {});
  };
}, $O = function(n, a, o) {
  o === void 0 && (o = "data-aria-hidden");
  var l = Array.from(Array.isArray(n) ? n : [n]), c = a || RO(n);
  return c ? (l.push.apply(l, Array.from(c.querySelectorAll("[aria-live]"))), TO(l, c, o, "aria-hidden")) : function() {
    return null;
  };
};
function DO(n) {
  const a = y.useRef({
    value: n,
    previous: n
  });
  return y.useMemo(() => (a.current.value !== n && (a.current.previous = a.current.value, a.current.value = n), a.current.previous), [
    n
  ]);
}
function OO(n) {
  const [a, o] = y.useState(void 0);
  return Er(() => {
    if (n) {
      o({
        width: n.offsetWidth,
        height: n.offsetHeight
      });
      const l = new ResizeObserver((c) => {
        if (!Array.isArray(c) || !c.length)
          return;
        const p = c[0];
        let d, v;
        if ("borderBoxSize" in p) {
          const w = p.borderBoxSize, b = Array.isArray(w) ? w[0] : w;
          d = b.inlineSize, v = b.blockSize;
        } else
          d = n.offsetWidth, v = n.offsetHeight;
        o({
          width: d,
          height: v
        });
      });
      return l.observe(n, {
        box: "border-box"
      }), () => l.unobserve(n);
    } else
      o(void 0);
  }, [
    n
  ]), a;
}
var LO = "q9c0is3", AO = "q9c0isg", MO = { blue: "q9c0ise q9c0isc", red: "q9c0isf q9c0isc" }, qO = "q9c0isd", zO = { blue: "q9c0isa q9c0is8", red: "q9c0isb q9c0is8" }, IO = "q9c0is9", NO = { blue: "q9c0is6 q9c0is4", red: "q9c0is7 q9c0is4" }, PO = "q9c0is5";
const dc = ({
  children: n,
  className: a,
  variant: o = "blue",
  shouldAnimate: l = !0
}) => /* @__PURE__ */ C.jsxs("div", { className: lt(LO, a), children: [
  /* @__PURE__ */ C.jsx(
    "div",
    {
      className: lt(NO[o], {
        [PO]: l
      })
    }
  ),
  /* @__PURE__ */ C.jsx(
    "div",
    {
      className: lt(zO[o], {
        [IO]: l
      })
    }
  ),
  /* @__PURE__ */ C.jsx(
    "div",
    {
      className: lt(MO[o], {
        [qO]: l
      })
    }
  ),
  /* @__PURE__ */ C.jsx("div", { className: AO, children: n })
] });
function UO(n, a, o) {
  return a in n ? Object.defineProperty(n, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[a] = o, n;
}
function R2(n, a) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(c) {
      return Object.getOwnPropertyDescriptor(n, c).enumerable;
    })), o.push.apply(o, l);
  }
  return o;
}
function k2(n) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? R2(Object(o), !0).forEach(function(l) {
      UO(n, l, o[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : R2(Object(o)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(o, l));
    });
  }
  return n;
}
var FO = (n, a, o) => {
  for (var l of Object.keys(n)) {
    var c;
    if (n[l] !== ((c = a[l]) !== null && c !== void 0 ? c : o[l]))
      return !1;
  }
  return !0;
}, VO = (n) => (a) => {
  var o = n.defaultClassName, l = k2(k2({}, n.defaultVariants), a);
  for (var c in l) {
    var p, d = (p = l[c]) !== null && p !== void 0 ? p : n.defaultVariants[c];
    if (d != null) {
      var v = d;
      typeof v == "boolean" && (v = v === !0 ? "true" : "false");
      var w = (
        // @ts-expect-error
        n.variantClassNames[c][v]
      );
      w && (o += " " + w);
    }
  }
  for (var [b, E] of n.compoundVariants)
    FO(b, l, n.defaultVariants) && (o += " " + E);
  return o;
};
function HO(n, a) {
  if (typeof n != "object" || n === null)
    return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var l = o.call(n, a || "default");
    if (typeof l != "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function BO(n) {
  var a = HO(n, "string");
  return typeof a == "symbol" ? a : String(a);
}
function jO(n, a, o) {
  return a = BO(a), a in n ? Object.defineProperty(n, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[a] = o, n;
}
function T2(n, a) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(c) {
      return Object.getOwnPropertyDescriptor(n, c).enumerable;
    })), o.push.apply(o, l);
  }
  return o;
}
function Og(n) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? T2(Object(o), !0).forEach(function(l) {
      jO(n, l, o[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : T2(Object(o)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(o, l));
    });
  }
  return n;
}
var GO = (n) => function() {
  for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
    o[l] = arguments[l];
  var c = Object.assign({}, ...o.map((w) => w.styles)), p = Object.keys(c), d = p.filter((w) => "mappings" in c[w]), v = (w) => {
    var b = [], E = {}, _ = Og({}, w), R = !1;
    for (var k of d) {
      var T = w[k];
      if (T != null) {
        var O = c[k];
        R = !0;
        for (var z of O.mappings)
          E[z] = T, _[z] == null && delete _[z];
      }
    }
    var M = R ? Og(Og({}, E), _) : w, q = function() {
      var I = M[P], N = c[P];
      try {
        if (N.mappings)
          return "continue";
        if (typeof I == "string" || typeof I == "number") {
          if (!N.values[I].defaultClass)
            throw new Error();
          b.push(N.values[I].defaultClass);
        } else if (Array.isArray(I))
          for (var J = 0; J < I.length; J++) {
            var Ce = I[J];
            if (Ce != null) {
              var ne = N.responsiveArray[J];
              if (!N.values[Ce].conditions[ne])
                throw new Error();
              b.push(N.values[Ce].conditions[ne]);
            }
          }
        else
          for (var re in I) {
            var we = I[re];
            if (we != null) {
              if (!N.values[we].conditions[re])
                throw new Error();
              b.push(N.values[we].conditions[re]);
            }
          }
      } catch (It) {
        {
          class bt extends Error {
            constructor(yt) {
              super(yt), this.name = "SprinklesError";
            }
          }
          var le = (Rt) => typeof Rt == "string" ? '"'.concat(Rt, '"') : Rt, oe = (Rt, yt, Ut) => {
            throw new bt('"'.concat(Rt, '" has no value ').concat(le(yt), ". Possible values are ").concat(Object.keys(Ut).map(le).join(", ")));
          };
          if (!N)
            throw new bt('"'.concat(P, '" is not a valid sprinkle'));
          if ((typeof I == "string" || typeof I == "number") && (I in N.values || oe(P, I, N.values), !N.values[I].defaultClass))
            throw new bt('"'.concat(P, '" has no default condition. You must specify which conditions to target explicitly. Possible options are ').concat(Object.keys(N.values[I].conditions).map(le).join(", ")));
          if (typeof I == "object") {
            if (!("conditions" in N.values[Object.keys(N.values)[0]]))
              throw new bt('"'.concat(P, '" is not a conditional property'));
            if (Array.isArray(I)) {
              if (!("responsiveArray" in N))
                throw new bt('"'.concat(P, '" does not support responsive arrays'));
              var se = N.responsiveArray.length;
              if (se < I.length)
                throw new bt('"'.concat(P, '" only supports up to ').concat(se, " breakpoints. You passed ").concat(I.length));
              for (var ge of I)
                N.values[ge] || oe(P, ge, N.values);
            } else
              for (var ce in I) {
                var Ie = I[ce];
                if (Ie != null && (N.values[Ie] || oe(P, Ie, N.values), !N.values[Ie].conditions[ce]))
                  throw new bt('"'.concat(P, '" has no condition named ').concat(le(ce), ". Possible values are ").concat(Object.keys(N.values[Ie].conditions).map(le).join(", ")));
              }
          }
        }
        throw It;
      }
    };
    for (var P in M)
      var Z = q();
    return n(b.join(" "));
  };
  return Object.assign(v, {
    properties: new Set(p)
  });
}, YO = (n) => n, WO = function() {
  return GO(YO)(...arguments);
}, ra = WO({ conditions: { defaultCondition: "lightMode", conditionNames: ["lightMode", "darkMode"], responsiveArray: void 0 }, styles: { color: { values: { background: { conditions: { lightMode: "kqvzqt0", darkMode: "kqvzqt1" }, defaultClass: "kqvzqt0" }, mute: { conditions: { lightMode: "kqvzqt2", darkMode: "kqvzqt3" }, defaultClass: "kqvzqt2" }, panel: { conditions: { lightMode: "kqvzqt4", darkMode: "kqvzqt5" }, defaultClass: "kqvzqt4" }, foreground: { conditions: { lightMode: "kqvzqt6", darkMode: "kqvzqt7" }, defaultClass: "kqvzqt6" }, contrast: { conditions: { lightMode: "kqvzqt8", darkMode: "kqvzqt9" }, defaultClass: "kqvzqt8" }, secondary: { conditions: { lightMode: "kqvzqta", darkMode: "kqvzqtb" }, defaultClass: "kqvzqta" }, tertiary: { conditions: { lightMode: "kqvzqtc", darkMode: "kqvzqtd" }, defaultClass: "kqvzqtc" }, placeholder: { conditions: { lightMode: "kqvzqte", darkMode: "kqvzqtf" }, defaultClass: "kqvzqte" }, smooth: { conditions: { lightMode: "kqvzqtg", darkMode: "kqvzqth" }, defaultClass: "kqvzqtg" }, subtle: { conditions: { lightMode: "kqvzqti", darkMode: "kqvzqtj" }, defaultClass: "kqvzqti" }, soft: { conditions: { lightMode: "kqvzqtk", darkMode: "kqvzqtl" }, defaultClass: "kqvzqtk" }, offset: { conditions: { lightMode: "kqvzqtm", darkMode: "kqvzqtn" }, defaultClass: "kqvzqtm" }, primary: { conditions: { lightMode: "kqvzqto", darkMode: "kqvzqtp" }, defaultClass: "kqvzqto" }, primaryHover: { conditions: { lightMode: "kqvzqtq", darkMode: "kqvzqtr" }, defaultClass: "kqvzqtq" }, transparent: { conditions: { lightMode: "kqvzqts", darkMode: "kqvzqtt" }, defaultClass: "kqvzqts" }, error: { conditions: { lightMode: "kqvzqtu", darkMode: "kqvzqtv" }, defaultClass: "kqvzqtu" }, auxiliary: { conditions: { lightMode: "kqvzqtw", darkMode: "kqvzqtx" }, defaultClass: "kqvzqtw" }, success: { conditions: { lightMode: "kqvzqty", darkMode: "kqvzqtz" }, defaultClass: "kqvzqty" }, foregroundSuccess: { conditions: { lightMode: "kqvzqt10", darkMode: "kqvzqt11" }, defaultClass: "kqvzqt10" }, backgroundSuccess: { conditions: { lightMode: "kqvzqt12", darkMode: "kqvzqt13" }, defaultClass: "kqvzqt12" }, failure: { conditions: { lightMode: "kqvzqt14", darkMode: "kqvzqt15" }, defaultClass: "kqvzqt14" }, foregroundFailure: { conditions: { lightMode: "kqvzqt16", darkMode: "kqvzqt17" }, defaultClass: "kqvzqt16" }, backgroundFailure: { conditions: { lightMode: "kqvzqt18", darkMode: "kqvzqt19" }, defaultClass: "kqvzqt18" } } }, backgroundColor: { values: { background: { conditions: { lightMode: "kqvzqt1a", darkMode: "kqvzqt1b" }, defaultClass: "kqvzqt1a" }, mute: { conditions: { lightMode: "kqvzqt1c", darkMode: "kqvzqt1d" }, defaultClass: "kqvzqt1c" }, panel: { conditions: { lightMode: "kqvzqt1e", darkMode: "kqvzqt1f" }, defaultClass: "kqvzqt1e" }, foreground: { conditions: { lightMode: "kqvzqt1g", darkMode: "kqvzqt1h" }, defaultClass: "kqvzqt1g" }, contrast: { conditions: { lightMode: "kqvzqt1i", darkMode: "kqvzqt1j" }, defaultClass: "kqvzqt1i" }, secondary: { conditions: { lightMode: "kqvzqt1k", darkMode: "kqvzqt1l" }, defaultClass: "kqvzqt1k" }, tertiary: { conditions: { lightMode: "kqvzqt1m", darkMode: "kqvzqt1n" }, defaultClass: "kqvzqt1m" }, placeholder: { conditions: { lightMode: "kqvzqt1o", darkMode: "kqvzqt1p" }, defaultClass: "kqvzqt1o" }, smooth: { conditions: { lightMode: "kqvzqt1q", darkMode: "kqvzqt1r" }, defaultClass: "kqvzqt1q" }, subtle: { conditions: { lightMode: "kqvzqt1s", darkMode: "kqvzqt1t" }, defaultClass: "kqvzqt1s" }, soft: { conditions: { lightMode: "kqvzqt1u", darkMode: "kqvzqt1v" }, defaultClass: "kqvzqt1u" }, offset: { conditions: { lightMode: "kqvzqt1w", darkMode: "kqvzqt1x" }, defaultClass: "kqvzqt1w" }, primary: { conditions: { lightMode: "kqvzqt1y", darkMode: "kqvzqt1z" }, defaultClass: "kqvzqt1y" }, primaryHover: { conditions: { lightMode: "kqvzqt20", darkMode: "kqvzqt21" }, defaultClass: "kqvzqt20" }, transparent: { conditions: { lightMode: "kqvzqt22", darkMode: "kqvzqt23" }, defaultClass: "kqvzqt22" }, error: { conditions: { lightMode: "kqvzqt24", darkMode: "kqvzqt25" }, defaultClass: "kqvzqt24" }, auxiliary: { conditions: { lightMode: "kqvzqt26", darkMode: "kqvzqt27" }, defaultClass: "kqvzqt26" }, success: { conditions: { lightMode: "kqvzqt28", darkMode: "kqvzqt29" }, defaultClass: "kqvzqt28" }, foregroundSuccess: { conditions: { lightMode: "kqvzqt2a", darkMode: "kqvzqt2b" }, defaultClass: "kqvzqt2a" }, backgroundSuccess: { conditions: { lightMode: "kqvzqt2c", darkMode: "kqvzqt2d" }, defaultClass: "kqvzqt2c" }, failure: { conditions: { lightMode: "kqvzqt2e", darkMode: "kqvzqt2f" }, defaultClass: "kqvzqt2e" }, foregroundFailure: { conditions: { lightMode: "kqvzqt2g", darkMode: "kqvzqt2h" }, defaultClass: "kqvzqt2g" }, backgroundFailure: { conditions: { lightMode: "kqvzqt2i", darkMode: "kqvzqt2j" }, defaultClass: "kqvzqt2i" } } } } }, { conditions: void 0, styles: { marginY: { mappings: ["marginTop", "marginBottom"] }, marginX: { mappings: ["marginLeft", "marginRight"] }, gap: { values: { 0: { defaultClass: "kqvzqt2k" }, 1: { defaultClass: "kqvzqt2l" }, 2: { defaultClass: "kqvzqt2m" }, 3: { defaultClass: "kqvzqt2n" }, 4: { defaultClass: "kqvzqt2o" }, 5: { defaultClass: "kqvzqt2p" }, 6: { defaultClass: "kqvzqt2q" }, 7: { defaultClass: "kqvzqt2r" }, 8: { defaultClass: "kqvzqt2s" }, 9: { defaultClass: "kqvzqt2t" }, 10: { defaultClass: "kqvzqt2u" }, 11: { defaultClass: "kqvzqt2v" }, 12: { defaultClass: "kqvzqt2w" }, 13: { defaultClass: "kqvzqt2x" }, 14: { defaultClass: "kqvzqt2y" }, 15: { defaultClass: "kqvzqt2z" }, 16: { defaultClass: "kqvzqt30" }, 20: { defaultClass: "kqvzqt31" }, 24: { defaultClass: "kqvzqt32" }, 28: { defaultClass: "kqvzqt33" }, 32: { defaultClass: "kqvzqt34" }, 36: { defaultClass: "kqvzqt35" }, 40: { defaultClass: "kqvzqt36" }, 44: { defaultClass: "kqvzqt37" }, 48: { defaultClass: "kqvzqt38" }, 52: { defaultClass: "kqvzqt39" }, 56: { defaultClass: "kqvzqt3a" }, 60: { defaultClass: "kqvzqt3b" }, 64: { defaultClass: "kqvzqt3c" }, 68: { defaultClass: "kqvzqt3d" }, 72: { defaultClass: "kqvzqt3e" }, 76: { defaultClass: "kqvzqt3f" }, 80: { defaultClass: "kqvzqt3g" }, 96: { defaultClass: "kqvzqt3h" }, px: { defaultClass: "kqvzqt3i" }, "0.25": { defaultClass: "kqvzqt3j" }, "0.5": { defaultClass: "kqvzqt3k" }, "0.75": { defaultClass: "kqvzqt3l" }, "1.5": { defaultClass: "kqvzqt3m" }, "2.5": { defaultClass: "kqvzqt3n" }, "3.5": { defaultClass: "kqvzqt3o" } } }, marginTop: { values: { 0: { defaultClass: "kqvzqt3p" }, 1: { defaultClass: "kqvzqt3q" }, 2: { defaultClass: "kqvzqt3r" }, 3: { defaultClass: "kqvzqt3s" }, 4: { defaultClass: "kqvzqt3t" }, 5: { defaultClass: "kqvzqt3u" }, 6: { defaultClass: "kqvzqt3v" }, 7: { defaultClass: "kqvzqt3w" }, 8: { defaultClass: "kqvzqt3x" }, 9: { defaultClass: "kqvzqt3y" }, 10: { defaultClass: "kqvzqt3z" }, 11: { defaultClass: "kqvzqt40" }, 12: { defaultClass: "kqvzqt41" }, 13: { defaultClass: "kqvzqt42" }, 14: { defaultClass: "kqvzqt43" }, 15: { defaultClass: "kqvzqt44" }, 16: { defaultClass: "kqvzqt45" }, 20: { defaultClass: "kqvzqt46" }, 24: { defaultClass: "kqvzqt47" }, 28: { defaultClass: "kqvzqt48" }, 32: { defaultClass: "kqvzqt49" }, 36: { defaultClass: "kqvzqt4a" }, 40: { defaultClass: "kqvzqt4b" }, 44: { defaultClass: "kqvzqt4c" }, 48: { defaultClass: "kqvzqt4d" }, 52: { defaultClass: "kqvzqt4e" }, 56: { defaultClass: "kqvzqt4f" }, 60: { defaultClass: "kqvzqt4g" }, 64: { defaultClass: "kqvzqt4h" }, 68: { defaultClass: "kqvzqt4i" }, 72: { defaultClass: "kqvzqt4j" }, 76: { defaultClass: "kqvzqt4k" }, 80: { defaultClass: "kqvzqt4l" }, 96: { defaultClass: "kqvzqt4m" }, px: { defaultClass: "kqvzqt4n" }, "0.25": { defaultClass: "kqvzqt4o" }, "0.5": { defaultClass: "kqvzqt4p" }, "0.75": { defaultClass: "kqvzqt4q" }, "1.5": { defaultClass: "kqvzqt4r" }, "2.5": { defaultClass: "kqvzqt4s" }, "3.5": { defaultClass: "kqvzqt4t" } } }, marginBottom: { values: { 0: { defaultClass: "kqvzqt4u" }, 1: { defaultClass: "kqvzqt4v" }, 2: { defaultClass: "kqvzqt4w" }, 3: { defaultClass: "kqvzqt4x" }, 4: { defaultClass: "kqvzqt4y" }, 5: { defaultClass: "kqvzqt4z" }, 6: { defaultClass: "kqvzqt50" }, 7: { defaultClass: "kqvzqt51" }, 8: { defaultClass: "kqvzqt52" }, 9: { defaultClass: "kqvzqt53" }, 10: { defaultClass: "kqvzqt54" }, 11: { defaultClass: "kqvzqt55" }, 12: { defaultClass: "kqvzqt56" }, 13: { defaultClass: "kqvzqt57" }, 14: { defaultClass: "kqvzqt58" }, 15: { defaultClass: "kqvzqt59" }, 16: { defaultClass: "kqvzqt5a" }, 20: { defaultClass: "kqvzqt5b" }, 24: { defaultClass: "kqvzqt5c" }, 28: { defaultClass: "kqvzqt5d" }, 32: { defaultClass: "kqvzqt5e" }, 36: { defaultClass: "kqvzqt5f" }, 40: { defaultClass: "kqvzqt5g" }, 44: { defaultClass: "kqvzqt5h" }, 48: { defaultClass: "kqvzqt5i" }, 52: { defaultClass: "kqvzqt5j" }, 56: { defaultClass: "kqvzqt5k" }, 60: { defaultClass: "kqvzqt5l" }, 64: { defaultClass: "kqvzqt5m" }, 68: { defaultClass: "kqvzqt5n" }, 72: { defaultClass: "kqvzqt5o" }, 76: { defaultClass: "kqvzqt5p" }, 80: { defaultClass: "kqvzqt5q" }, 96: { defaultClass: "kqvzqt5r" }, px: { defaultClass: "kqvzqt5s" }, "0.25": { defaultClass: "kqvzqt5t" }, "0.5": { defaultClass: "kqvzqt5u" }, "0.75": { defaultClass: "kqvzqt5v" }, "1.5": { defaultClass: "kqvzqt5w" }, "2.5": { defaultClass: "kqvzqt5x" }, "3.5": { defaultClass: "kqvzqt5y" } } }, marginLeft: { values: { 0: { defaultClass: "kqvzqt5z" }, 1: { defaultClass: "kqvzqt60" }, 2: { defaultClass: "kqvzqt61" }, 3: { defaultClass: "kqvzqt62" }, 4: { defaultClass: "kqvzqt63" }, 5: { defaultClass: "kqvzqt64" }, 6: { defaultClass: "kqvzqt65" }, 7: { defaultClass: "kqvzqt66" }, 8: { defaultClass: "kqvzqt67" }, 9: { defaultClass: "kqvzqt68" }, 10: { defaultClass: "kqvzqt69" }, 11: { defaultClass: "kqvzqt6a" }, 12: { defaultClass: "kqvzqt6b" }, 13: { defaultClass: "kqvzqt6c" }, 14: { defaultClass: "kqvzqt6d" }, 15: { defaultClass: "kqvzqt6e" }, 16: { defaultClass: "kqvzqt6f" }, 20: { defaultClass: "kqvzqt6g" }, 24: { defaultClass: "kqvzqt6h" }, 28: { defaultClass: "kqvzqt6i" }, 32: { defaultClass: "kqvzqt6j" }, 36: { defaultClass: "kqvzqt6k" }, 40: { defaultClass: "kqvzqt6l" }, 44: { defaultClass: "kqvzqt6m" }, 48: { defaultClass: "kqvzqt6n" }, 52: { defaultClass: "kqvzqt6o" }, 56: { defaultClass: "kqvzqt6p" }, 60: { defaultClass: "kqvzqt6q" }, 64: { defaultClass: "kqvzqt6r" }, 68: { defaultClass: "kqvzqt6s" }, 72: { defaultClass: "kqvzqt6t" }, 76: { defaultClass: "kqvzqt6u" }, 80: { defaultClass: "kqvzqt6v" }, 96: { defaultClass: "kqvzqt6w" }, px: { defaultClass: "kqvzqt6x" }, "0.25": { defaultClass: "kqvzqt6y" }, "0.5": { defaultClass: "kqvzqt6z" }, "0.75": { defaultClass: "kqvzqt70" }, "1.5": { defaultClass: "kqvzqt71" }, "2.5": { defaultClass: "kqvzqt72" }, "3.5": { defaultClass: "kqvzqt73" } } }, marginRight: { values: { 0: { defaultClass: "kqvzqt74" }, 1: { defaultClass: "kqvzqt75" }, 2: { defaultClass: "kqvzqt76" }, 3: { defaultClass: "kqvzqt77" }, 4: { defaultClass: "kqvzqt78" }, 5: { defaultClass: "kqvzqt79" }, 6: { defaultClass: "kqvzqt7a" }, 7: { defaultClass: "kqvzqt7b" }, 8: { defaultClass: "kqvzqt7c" }, 9: { defaultClass: "kqvzqt7d" }, 10: { defaultClass: "kqvzqt7e" }, 11: { defaultClass: "kqvzqt7f" }, 12: { defaultClass: "kqvzqt7g" }, 13: { defaultClass: "kqvzqt7h" }, 14: { defaultClass: "kqvzqt7i" }, 15: { defaultClass: "kqvzqt7j" }, 16: { defaultClass: "kqvzqt7k" }, 20: { defaultClass: "kqvzqt7l" }, 24: { defaultClass: "kqvzqt7m" }, 28: { defaultClass: "kqvzqt7n" }, 32: { defaultClass: "kqvzqt7o" }, 36: { defaultClass: "kqvzqt7p" }, 40: { defaultClass: "kqvzqt7q" }, 44: { defaultClass: "kqvzqt7r" }, 48: { defaultClass: "kqvzqt7s" }, 52: { defaultClass: "kqvzqt7t" }, 56: { defaultClass: "kqvzqt7u" }, 60: { defaultClass: "kqvzqt7v" }, 64: { defaultClass: "kqvzqt7w" }, 68: { defaultClass: "kqvzqt7x" }, 72: { defaultClass: "kqvzqt7y" }, 76: { defaultClass: "kqvzqt7z" }, 80: { defaultClass: "kqvzqt80" }, 96: { defaultClass: "kqvzqt81" }, px: { defaultClass: "kqvzqt82" }, "0.25": { defaultClass: "kqvzqt83" }, "0.5": { defaultClass: "kqvzqt84" }, "0.75": { defaultClass: "kqvzqt85" }, "1.5": { defaultClass: "kqvzqt86" }, "2.5": { defaultClass: "kqvzqt87" }, "3.5": { defaultClass: "kqvzqt88" } } } } });
var KO = VO({ defaultClassName: "_1qam6z30", variantClassNames: { size: { xs: "_1qam6z31", sm: "_1qam6z32", base: "_1qam6z33", xl: "_1qam6z34", "2xl-title": "_1qam6z35" }, weight: { medium: "_1qam6z36", semibold: "_1qam6z37", bold: "_1qam6z38" }, color: { contrast: "_1qam6z39", tertiary: "_1qam6z3a", placeholder: "_1qam6z3b", white: "_1qam6z3c", success: "_1qam6z3d", failure: "_1qam6z3e" } }, defaultVariants: { size: "base", weight: "medium" }, compoundVariants: [] });
const ZO = {
  text: {}
}, py = y.createContext(ZO);
py.displayName = "SlashIDTextContext";
const QO = ({ text: n, children: a }) => {
  const o = y.useMemo(() => ({
    text: n
  }), [n]);
  return /* @__PURE__ */ C.jsx(py.Provider, { value: o, children: a });
};
function XO() {
  const { text: n } = dt.useContext(py);
  return n;
}
const Lg = {
  opening: "{{",
  closing: "}}"
};
function nS(n, a) {
  return n.includes(Lg.opening) ? Object.keys(a).reduce(
    (l, c) => l.replace(
      `${Lg.opening}${c}${Lg.closing}`,
      a[c]
    ),
    n
  ) : n;
}
const JO = ({
  as: n,
  t: a,
  tokens: o,
  variant: l,
  className: c,
  children: p
}) => {
  const d = XO(), v = n || "p";
  return /* @__PURE__ */ C.jsxs(
    v,
    {
      className: lt(
        "sid-text",
        `sid-text--${n}`,
        KO(l),
        c
      ),
      children: [
        o ? nS(d[a], o) : d[a],
        p || null
      ]
    }
  );
};
function $2(n, [a, o]) {
  return Math.min(o, Math.max(a, n));
}
const Qg = "dismissableLayer.update", eL = "dismissableLayer.pointerDownOutside", tL = "dismissableLayer.focusOutside";
let D2;
const nL = /* @__PURE__ */ y.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), rL = /* @__PURE__ */ y.forwardRef((n, a) => {
  var o;
  const { disableOutsidePointerEvents: l = !1, onEscapeKeyDown: c, onPointerDownOutside: p, onFocusOutside: d, onInteractOutside: v, onDismiss: w, ...b } = n, E = y.useContext(nL), [_, R] = y.useState(null), k = (o = _ == null ? void 0 : _.ownerDocument) !== null && o !== void 0 ? o : globalThis == null ? void 0 : globalThis.document, [, T] = y.useState({}), O = Dn(
    a,
    (J) => R(J)
  ), z = Array.from(E.layers), [M] = [
    ...E.layersWithOutsidePointerEventsDisabled
  ].slice(-1), q = z.indexOf(M), P = _ ? z.indexOf(_) : -1, Z = E.layersWithOutsidePointerEventsDisabled.size > 0, j = P >= q, I = aL((J) => {
    const Ce = J.target, ne = [
      ...E.branches
    ].some(
      (re) => re.contains(Ce)
    );
    !j || ne || (p == null || p(J), v == null || v(J), J.defaultPrevented || w == null || w());
  }, k), N = iL((J) => {
    const Ce = J.target;
    [
      ...E.branches
    ].some(
      (re) => re.contains(Ce)
    ) || (d == null || d(J), v == null || v(J), J.defaultPrevented || w == null || w());
  }, k);
  return HD((J) => {
    P === E.layers.size - 1 && (c == null || c(J), !J.defaultPrevented && w && (J.preventDefault(), w()));
  }, k), y.useEffect(() => {
    if (_)
      return l && (E.layersWithOutsidePointerEventsDisabled.size === 0 && (D2 = k.body.style.pointerEvents, k.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(_)), E.layers.add(_), O2(), () => {
        l && E.layersWithOutsidePointerEventsDisabled.size === 1 && (k.body.style.pointerEvents = D2);
      };
  }, [
    _,
    k,
    l,
    E
  ]), y.useEffect(() => () => {
    _ && (E.layers.delete(_), E.layersWithOutsidePointerEventsDisabled.delete(_), O2());
  }, [
    _,
    E
  ]), y.useEffect(() => {
    const J = () => T({});
    return document.addEventListener(Qg, J), () => document.removeEventListener(Qg, J);
  }, []), /* @__PURE__ */ y.createElement(Jt.div, rt({}, b, {
    ref: O,
    style: {
      pointerEvents: Z ? j ? "auto" : "none" : void 0,
      ...n.style
    },
    onFocusCapture: xt(n.onFocusCapture, N.onFocusCapture),
    onBlurCapture: xt(n.onBlurCapture, N.onBlurCapture),
    onPointerDownCapture: xt(n.onPointerDownCapture, I.onPointerDownCapture)
  }));
});
function aL(n, a = globalThis == null ? void 0 : globalThis.document) {
  const o = Ra(n), l = y.useRef(!1), c = y.useRef(() => {
  });
  return y.useEffect(() => {
    const p = (v) => {
      if (v.target && !l.current) {
        let E = function() {
          rS(eL, o, b, {
            discrete: !0
          });
        };
        var w = E;
        const b = {
          originalEvent: v
        };
        v.pointerType === "touch" ? (a.removeEventListener("click", c.current), c.current = E, a.addEventListener("click", c.current, {
          once: !0
        })) : E();
      }
      l.current = !1;
    }, d = window.setTimeout(() => {
      a.addEventListener("pointerdown", p);
    }, 0);
    return () => {
      window.clearTimeout(d), a.removeEventListener("pointerdown", p), a.removeEventListener("click", c.current);
    };
  }, [
    a,
    o
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => l.current = !0
  };
}
function iL(n, a = globalThis == null ? void 0 : globalThis.document) {
  const o = Ra(n), l = y.useRef(!1);
  return y.useEffect(() => {
    const c = (p) => {
      p.target && !l.current && rS(tL, o, {
        originalEvent: p
      }, {
        discrete: !1
      });
    };
    return a.addEventListener("focusin", c), () => a.removeEventListener("focusin", c);
  }, [
    a,
    o
  ]), {
    onFocusCapture: () => l.current = !0,
    onBlurCapture: () => l.current = !1
  };
}
function O2() {
  const n = new CustomEvent(Qg);
  document.dispatchEvent(n);
}
function rS(n, a, o, { discrete: l }) {
  const c = o.originalEvent.target, p = new CustomEvent(n, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  a && c.addEventListener(n, a, {
    once: !0
  }), l ? ID(c, p) : c.dispatchEvent(p);
}
const Ag = "focusScope.autoFocusOnMount", Mg = "focusScope.autoFocusOnUnmount", L2 = {
  bubbles: !1,
  cancelable: !0
}, oL = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { loop: o = !1, trapped: l = !1, onMountAutoFocus: c, onUnmountAutoFocus: p, ...d } = n, [v, w] = y.useState(null), b = Ra(c), E = Ra(p), _ = y.useRef(null), R = Dn(
    a,
    (O) => w(O)
  ), k = y.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  y.useEffect(() => {
    if (l) {
      let q = function(I) {
        if (k.paused || !v)
          return;
        const N = I.target;
        v.contains(N) ? _.current = N : ji(_.current, {
          select: !0
        });
      }, P = function(I) {
        if (k.paused || !v)
          return;
        const N = I.relatedTarget;
        N !== null && (v.contains(N) || ji(_.current, {
          select: !0
        }));
      }, Z = function(I) {
        const N = document.activeElement;
        for (const J of I)
          J.removedNodes.length > 0 && (v != null && v.contains(N) || ji(v));
      };
      var O = q, z = P, M = Z;
      document.addEventListener("focusin", q), document.addEventListener("focusout", P);
      const j = new MutationObserver(Z);
      return v && j.observe(v, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", q), document.removeEventListener("focusout", P), j.disconnect();
      };
    }
  }, [
    l,
    v,
    k.paused
  ]), y.useEffect(() => {
    if (v) {
      M2.add(k);
      const O = document.activeElement;
      if (!v.contains(O)) {
        const M = new CustomEvent(Ag, L2);
        v.addEventListener(Ag, b), v.dispatchEvent(M), M.defaultPrevented || (sL(fL(aS(v)), {
          select: !0
        }), document.activeElement === O && ji(v));
      }
      return () => {
        v.removeEventListener(Ag, b), setTimeout(() => {
          const M = new CustomEvent(Mg, L2);
          v.addEventListener(Mg, E), v.dispatchEvent(M), M.defaultPrevented || ji(O ?? document.body, {
            select: !0
          }), v.removeEventListener(Mg, E), M2.remove(k);
        }, 0);
      };
    }
  }, [
    v,
    b,
    E,
    k
  ]);
  const T = y.useCallback((O) => {
    if (!o && !l || k.paused)
      return;
    const z = O.key === "Tab" && !O.altKey && !O.ctrlKey && !O.metaKey, M = document.activeElement;
    if (z && M) {
      const q = O.currentTarget, [P, Z] = lL(q);
      P && Z ? !O.shiftKey && M === Z ? (O.preventDefault(), o && ji(P, {
        select: !0
      })) : O.shiftKey && M === P && (O.preventDefault(), o && ji(Z, {
        select: !0
      })) : M === q && O.preventDefault();
    }
  }, [
    o,
    l,
    k.paused
  ]);
  return /* @__PURE__ */ y.createElement(Jt.div, rt({
    tabIndex: -1
  }, d, {
    ref: R,
    onKeyDown: T
  }));
});
function sL(n, { select: a = !1 } = {}) {
  const o = document.activeElement;
  for (const l of n)
    if (ji(l, {
      select: a
    }), document.activeElement !== o)
      return;
}
function lL(n) {
  const a = aS(n), o = A2(a, n), l = A2(a.reverse(), n);
  return [
    o,
    l
  ];
}
function aS(n) {
  const a = [], o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (l) => {
      const c = l.tagName === "INPUT" && l.type === "hidden";
      return l.disabled || l.hidden || c ? NodeFilter.FILTER_SKIP : l.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); )
    a.push(o.currentNode);
  return a;
}
function A2(n, a) {
  for (const o of n)
    if (!uL(o, {
      upTo: a
    }))
      return o;
}
function uL(n, { upTo: a }) {
  if (getComputedStyle(n).visibility === "hidden")
    return !0;
  for (; n; ) {
    if (a !== void 0 && n === a)
      return !1;
    if (getComputedStyle(n).display === "none")
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function cL(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function ji(n, { select: a = !1 } = {}) {
  if (n && n.focus) {
    const o = document.activeElement;
    n.focus({
      preventScroll: !0
    }), n !== o && cL(n) && a && n.select();
  }
}
const M2 = dL();
function dL() {
  let n = [];
  return {
    add(a) {
      const o = n[0];
      a !== o && (o == null || o.pause()), n = q2(n, a), n.unshift(a);
    },
    remove(a) {
      var o;
      n = q2(n, a), (o = n[0]) === null || o === void 0 || o.resume();
    }
  };
}
function q2(n, a) {
  const o = [
    ...n
  ], l = o.indexOf(a);
  return l !== -1 && o.splice(l, 1), o;
}
function fL(n) {
  return n.filter(
    (a) => a.tagName !== "A"
  );
}
const pL = ["top", "right", "bottom", "left"], Yi = Math.min, Sr = Math.max, Wf = Math.round, Mf = Math.floor, Wi = (n) => ({
  x: n,
  y: n
}), hL = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, vL = {
  start: "end",
  end: "start"
};
function Xg(n, a, o) {
  return Sr(n, Yi(a, o));
}
function li(n, a) {
  return typeof n == "function" ? n(a) : n;
}
function ui(n) {
  return n.split("-")[0];
}
function el(n) {
  return n.split("-")[1];
}
function hy(n) {
  return n === "x" ? "y" : "x";
}
function vy(n) {
  return n === "y" ? "height" : "width";
}
function tl(n) {
  return ["top", "bottom"].includes(ui(n)) ? "y" : "x";
}
function my(n) {
  return hy(tl(n));
}
function mL(n, a, o) {
  o === void 0 && (o = !1);
  const l = el(n), c = my(n), p = vy(c);
  let d = c === "x" ? l === (o ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
  return a.reference[p] > a.floating[p] && (d = Kf(d)), [d, Kf(d)];
}
function gL(n) {
  const a = Kf(n);
  return [Jg(n), a, Jg(a)];
}
function Jg(n) {
  return n.replace(/start|end/g, (a) => vL[a]);
}
function yL(n, a, o) {
  const l = ["left", "right"], c = ["right", "left"], p = ["top", "bottom"], d = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return o ? a ? c : l : a ? l : c;
    case "left":
    case "right":
      return a ? p : d;
    default:
      return [];
  }
}
function bL(n, a, o, l) {
  const c = el(n);
  let p = yL(ui(n), o === "start", l);
  return c && (p = p.map((d) => d + "-" + c), a && (p = p.concat(p.map(Jg)))), p;
}
function Kf(n) {
  return n.replace(/left|right|bottom|top/g, (a) => hL[a]);
}
function CL(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function iS(n) {
  return typeof n != "number" ? CL(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Zf(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function z2(n, a, o) {
  let {
    reference: l,
    floating: c
  } = n;
  const p = tl(a), d = my(a), v = vy(d), w = ui(a), b = p === "y", E = l.x + l.width / 2 - c.width / 2, _ = l.y + l.height / 2 - c.height / 2, R = l[v] / 2 - c[v] / 2;
  let k;
  switch (w) {
    case "top":
      k = {
        x: E,
        y: l.y - c.height
      };
      break;
    case "bottom":
      k = {
        x: E,
        y: l.y + l.height
      };
      break;
    case "right":
      k = {
        x: l.x + l.width,
        y: _
      };
      break;
    case "left":
      k = {
        x: l.x - c.width,
        y: _
      };
      break;
    default:
      k = {
        x: l.x,
        y: l.y
      };
  }
  switch (el(a)) {
    case "start":
      k[d] -= R * (o && b ? -1 : 1);
      break;
    case "end":
      k[d] += R * (o && b ? -1 : 1);
      break;
  }
  return k;
}
const wL = async (n, a, o) => {
  const {
    placement: l = "bottom",
    strategy: c = "absolute",
    middleware: p = [],
    platform: d
  } = o, v = p.filter(Boolean), w = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let b = await d.getElementRects({
    reference: n,
    floating: a,
    strategy: c
  }), {
    x: E,
    y: _
  } = z2(b, l, w), R = l, k = {}, T = 0;
  for (let O = 0; O < v.length; O++) {
    const {
      name: z,
      fn: M
    } = v[O], {
      x: q,
      y: P,
      data: Z,
      reset: j
    } = await M({
      x: E,
      y: _,
      initialPlacement: l,
      placement: R,
      strategy: c,
      middlewareData: k,
      rects: b,
      platform: d,
      elements: {
        reference: n,
        floating: a
      }
    });
    if (E = q ?? E, _ = P ?? _, k = {
      ...k,
      [z]: {
        ...k[z],
        ...Z
      }
    }, j && T <= 50) {
      T++, typeof j == "object" && (j.placement && (R = j.placement), j.rects && (b = j.rects === !0 ? await d.getElementRects({
        reference: n,
        floating: a,
        strategy: c
      }) : j.rects), {
        x: E,
        y: _
      } = z2(b, R, w)), O = -1;
      continue;
    }
  }
  return {
    x: E,
    y: _,
    placement: R,
    strategy: c,
    middlewareData: k
  };
};
async function oc(n, a) {
  var o;
  a === void 0 && (a = {});
  const {
    x: l,
    y: c,
    platform: p,
    rects: d,
    elements: v,
    strategy: w
  } = n, {
    boundary: b = "clippingAncestors",
    rootBoundary: E = "viewport",
    elementContext: _ = "floating",
    altBoundary: R = !1,
    padding: k = 0
  } = li(a, n), T = iS(k), z = v[R ? _ === "floating" ? "reference" : "floating" : _], M = Zf(await p.getClippingRect({
    element: (o = await (p.isElement == null ? void 0 : p.isElement(z))) == null || o ? z : z.contextElement || await (p.getDocumentElement == null ? void 0 : p.getDocumentElement(v.floating)),
    boundary: b,
    rootBoundary: E,
    strategy: w
  })), q = _ === "floating" ? {
    ...d.floating,
    x: l,
    y: c
  } : d.reference, P = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(v.floating)), Z = await (p.isElement == null ? void 0 : p.isElement(P)) ? await (p.getScale == null ? void 0 : p.getScale(P)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = Zf(p.convertOffsetParentRelativeRectToViewportRelativeRect ? await p.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: q,
    offsetParent: P,
    strategy: w
  }) : q);
  return {
    top: (M.top - j.top + T.top) / Z.y,
    bottom: (j.bottom - M.bottom + T.bottom) / Z.y,
    left: (M.left - j.left + T.left) / Z.x,
    right: (j.right - M.right + T.right) / Z.x
  };
}
const I2 = (n) => ({
  name: "arrow",
  options: n,
  async fn(a) {
    const {
      x: o,
      y: l,
      placement: c,
      rects: p,
      platform: d,
      elements: v,
      middlewareData: w
    } = a, {
      element: b,
      padding: E = 0
    } = li(n, a) || {};
    if (b == null)
      return {};
    const _ = iS(E), R = {
      x: o,
      y: l
    }, k = my(c), T = vy(k), O = await d.getDimensions(b), z = k === "y", M = z ? "top" : "left", q = z ? "bottom" : "right", P = z ? "clientHeight" : "clientWidth", Z = p.reference[T] + p.reference[k] - R[k] - p.floating[T], j = R[k] - p.reference[k], I = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(b));
    let N = I ? I[P] : 0;
    (!N || !await (d.isElement == null ? void 0 : d.isElement(I))) && (N = v.floating[P] || p.floating[T]);
    const J = Z / 2 - j / 2, Ce = N / 2 - O[T] / 2 - 1, ne = Yi(_[M], Ce), re = Yi(_[q], Ce), we = ne, le = N - O[T] - re, oe = N / 2 - O[T] / 2 + J, se = Xg(we, oe, le), ge = !w.arrow && el(c) != null && oe != se && p.reference[T] / 2 - (oe < we ? ne : re) - O[T] / 2 < 0, ce = ge ? oe < we ? oe - we : oe - le : 0;
    return {
      [k]: R[k] + ce,
      data: {
        [k]: se,
        centerOffset: oe - se - ce,
        ...ge && {
          alignmentOffset: ce
        }
      },
      reset: ge
    };
  }
}), SL = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(a) {
      var o, l;
      const {
        placement: c,
        middlewareData: p,
        rects: d,
        initialPlacement: v,
        platform: w,
        elements: b
      } = a, {
        mainAxis: E = !0,
        crossAxis: _ = !0,
        fallbackPlacements: R,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: O = !0,
        ...z
      } = li(n, a);
      if ((o = p.arrow) != null && o.alignmentOffset)
        return {};
      const M = ui(c), q = ui(v) === v, P = await (w.isRTL == null ? void 0 : w.isRTL(b.floating)), Z = R || (q || !O ? [Kf(v)] : gL(v));
      !R && T !== "none" && Z.push(...bL(v, O, T, P));
      const j = [v, ...Z], I = await oc(a, z), N = [];
      let J = ((l = p.flip) == null ? void 0 : l.overflows) || [];
      if (E && N.push(I[M]), _) {
        const we = mL(c, d, P);
        N.push(I[we[0]], I[we[1]]);
      }
      if (J = [...J, {
        placement: c,
        overflows: N
      }], !N.every((we) => we <= 0)) {
        var Ce, ne;
        const we = (((Ce = p.flip) == null ? void 0 : Ce.index) || 0) + 1, le = j[we];
        if (le)
          return {
            data: {
              index: we,
              overflows: J
            },
            reset: {
              placement: le
            }
          };
        let oe = (ne = J.filter((se) => se.overflows[0] <= 0).sort((se, ge) => se.overflows[1] - ge.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!oe)
          switch (k) {
            case "bestFit": {
              var re;
              const se = (re = J.map((ge) => [ge.placement, ge.overflows.filter((ce) => ce > 0).reduce((ce, Ie) => ce + Ie, 0)]).sort((ge, ce) => ge[1] - ce[1])[0]) == null ? void 0 : re[0];
              se && (oe = se);
              break;
            }
            case "initialPlacement":
              oe = v;
              break;
          }
        if (c !== oe)
          return {
            reset: {
              placement: oe
            }
          };
      }
      return {};
    }
  };
};
function N2(n, a) {
  return {
    top: n.top - a.height,
    right: n.right - a.width,
    bottom: n.bottom - a.height,
    left: n.left - a.width
  };
}
function P2(n) {
  return pL.some((a) => n[a] >= 0);
}
const _L = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(a) {
      const {
        rects: o
      } = a, {
        strategy: l = "referenceHidden",
        ...c
      } = li(n, a);
      switch (l) {
        case "referenceHidden": {
          const p = await oc(a, {
            ...c,
            elementContext: "reference"
          }), d = N2(p, o.reference);
          return {
            data: {
              referenceHiddenOffsets: d,
              referenceHidden: P2(d)
            }
          };
        }
        case "escaped": {
          const p = await oc(a, {
            ...c,
            altBoundary: !0
          }), d = N2(p, o.floating);
          return {
            data: {
              escapedOffsets: d,
              escaped: P2(d)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function xL(n, a) {
  const {
    placement: o,
    platform: l,
    elements: c
  } = n, p = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), d = ui(o), v = el(o), w = tl(o) === "y", b = ["left", "top"].includes(d) ? -1 : 1, E = p && w ? -1 : 1, _ = li(a, n);
  let {
    mainAxis: R,
    crossAxis: k,
    alignmentAxis: T
  } = typeof _ == "number" ? {
    mainAxis: _,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ..._
  };
  return v && typeof T == "number" && (k = v === "end" ? T * -1 : T), w ? {
    x: k * E,
    y: R * b
  } : {
    x: R * b,
    y: k * E
  };
}
const EL = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(a) {
      const {
        x: o,
        y: l
      } = a, c = await xL(a, n);
      return {
        x: o + c.x,
        y: l + c.y,
        data: c
      };
    }
  };
}, RL = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(a) {
      const {
        x: o,
        y: l,
        placement: c
      } = a, {
        mainAxis: p = !0,
        crossAxis: d = !1,
        limiter: v = {
          fn: (z) => {
            let {
              x: M,
              y: q
            } = z;
            return {
              x: M,
              y: q
            };
          }
        },
        ...w
      } = li(n, a), b = {
        x: o,
        y: l
      }, E = await oc(a, w), _ = tl(ui(c)), R = hy(_);
      let k = b[R], T = b[_];
      if (p) {
        const z = R === "y" ? "top" : "left", M = R === "y" ? "bottom" : "right", q = k + E[z], P = k - E[M];
        k = Xg(q, k, P);
      }
      if (d) {
        const z = _ === "y" ? "top" : "left", M = _ === "y" ? "bottom" : "right", q = T + E[z], P = T - E[M];
        T = Xg(q, T, P);
      }
      const O = v.fn({
        ...a,
        [R]: k,
        [_]: T
      });
      return {
        ...O,
        data: {
          x: O.x - o,
          y: O.y - l
        }
      };
    }
  };
}, kL = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(a) {
      const {
        x: o,
        y: l,
        placement: c,
        rects: p,
        middlewareData: d
      } = a, {
        offset: v = 0,
        mainAxis: w = !0,
        crossAxis: b = !0
      } = li(n, a), E = {
        x: o,
        y: l
      }, _ = tl(c), R = hy(_);
      let k = E[R], T = E[_];
      const O = li(v, a), z = typeof O == "number" ? {
        mainAxis: O,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...O
      };
      if (w) {
        const P = R === "y" ? "height" : "width", Z = p.reference[R] - p.floating[P] + z.mainAxis, j = p.reference[R] + p.reference[P] - z.mainAxis;
        k < Z ? k = Z : k > j && (k = j);
      }
      if (b) {
        var M, q;
        const P = R === "y" ? "width" : "height", Z = ["top", "left"].includes(ui(c)), j = p.reference[_] - p.floating[P] + (Z && ((M = d.offset) == null ? void 0 : M[_]) || 0) + (Z ? 0 : z.crossAxis), I = p.reference[_] + p.reference[P] + (Z ? 0 : ((q = d.offset) == null ? void 0 : q[_]) || 0) - (Z ? z.crossAxis : 0);
        T < j ? T = j : T > I && (T = I);
      }
      return {
        [R]: k,
        [_]: T
      };
    }
  };
}, TL = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(a) {
      const {
        placement: o,
        rects: l,
        platform: c,
        elements: p
      } = a, {
        apply: d = () => {
        },
        ...v
      } = li(n, a), w = await oc(a, v), b = ui(o), E = el(o), _ = tl(o) === "y", {
        width: R,
        height: k
      } = l.floating;
      let T, O;
      b === "top" || b === "bottom" ? (T = b, O = E === (await (c.isRTL == null ? void 0 : c.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (O = b, T = E === "end" ? "top" : "bottom");
      const z = k - w[T], M = R - w[O], q = !a.middlewareData.shift;
      let P = z, Z = M;
      if (_) {
        const I = R - w.left - w.right;
        Z = E || q ? Yi(M, I) : I;
      } else {
        const I = k - w.top - w.bottom;
        P = E || q ? Yi(z, I) : I;
      }
      if (q && !E) {
        const I = Sr(w.left, 0), N = Sr(w.right, 0), J = Sr(w.top, 0), Ce = Sr(w.bottom, 0);
        _ ? Z = R - 2 * (I !== 0 || N !== 0 ? I + N : Sr(w.left, w.right)) : P = k - 2 * (J !== 0 || Ce !== 0 ? J + Ce : Sr(w.top, w.bottom));
      }
      await d({
        ...a,
        availableWidth: Z,
        availableHeight: P
      });
      const j = await c.getDimensions(p.floating);
      return R !== j.width || k !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ki(n) {
  return oS(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function _r(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function di(n) {
  var a;
  return (a = (oS(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : a.documentElement;
}
function oS(n) {
  return n instanceof Node || n instanceof _r(n).Node;
}
function ci(n) {
  return n instanceof Element || n instanceof _r(n).Element;
}
function ka(n) {
  return n instanceof HTMLElement || n instanceof _r(n).HTMLElement;
}
function U2(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof _r(n).ShadowRoot;
}
function fc(n) {
  const {
    overflow: a,
    overflowX: o,
    overflowY: l,
    display: c
  } = Ir(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + l + o) && !["inline", "contents"].includes(c);
}
function $L(n) {
  return ["table", "td", "th"].includes(Ki(n));
}
function gy(n) {
  const a = yy(), o = Ir(n);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !a && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !a && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((l) => (o.willChange || "").includes(l)) || ["paint", "layout", "strict", "content"].some((l) => (o.contain || "").includes(l));
}
function DL(n) {
  let a = Zs(n);
  for (; ka(a) && !ip(a); ) {
    if (gy(a))
      return a;
    a = Zs(a);
  }
  return null;
}
function yy() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ip(n) {
  return ["html", "body", "#document"].includes(Ki(n));
}
function Ir(n) {
  return _r(n).getComputedStyle(n);
}
function op(n) {
  return ci(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function Zs(n) {
  if (Ki(n) === "html")
    return n;
  const a = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    U2(n) && n.host || // Fallback.
    di(n)
  );
  return U2(a) ? a.host : a;
}
function sS(n) {
  const a = Zs(n);
  return ip(a) ? n.ownerDocument ? n.ownerDocument.body : n.body : ka(a) && fc(a) ? a : sS(a);
}
function sc(n, a, o) {
  var l;
  a === void 0 && (a = []), o === void 0 && (o = !0);
  const c = sS(n), p = c === ((l = n.ownerDocument) == null ? void 0 : l.body), d = _r(c);
  return p ? a.concat(d, d.visualViewport || [], fc(c) ? c : [], d.frameElement && o ? sc(d.frameElement) : []) : a.concat(c, sc(c, [], o));
}
function lS(n) {
  const a = Ir(n);
  let o = parseFloat(a.width) || 0, l = parseFloat(a.height) || 0;
  const c = ka(n), p = c ? n.offsetWidth : o, d = c ? n.offsetHeight : l, v = Wf(o) !== p || Wf(l) !== d;
  return v && (o = p, l = d), {
    width: o,
    height: l,
    $: v
  };
}
function by(n) {
  return ci(n) ? n : n.contextElement;
}
function Ys(n) {
  const a = by(n);
  if (!ka(a))
    return Wi(1);
  const o = a.getBoundingClientRect(), {
    width: l,
    height: c,
    $: p
  } = lS(a);
  let d = (p ? Wf(o.width) : o.width) / l, v = (p ? Wf(o.height) : o.height) / c;
  return (!d || !Number.isFinite(d)) && (d = 1), (!v || !Number.isFinite(v)) && (v = 1), {
    x: d,
    y: v
  };
}
const OL = /* @__PURE__ */ Wi(0);
function uS(n) {
  const a = _r(n);
  return !yy() || !a.visualViewport ? OL : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function LL(n, a, o) {
  return a === void 0 && (a = !1), !o || a && o !== _r(n) ? !1 : a;
}
function Io(n, a, o, l) {
  a === void 0 && (a = !1), o === void 0 && (o = !1);
  const c = n.getBoundingClientRect(), p = by(n);
  let d = Wi(1);
  a && (l ? ci(l) && (d = Ys(l)) : d = Ys(n));
  const v = LL(p, o, l) ? uS(p) : Wi(0);
  let w = (c.left + v.x) / d.x, b = (c.top + v.y) / d.y, E = c.width / d.x, _ = c.height / d.y;
  if (p) {
    const R = _r(p), k = l && ci(l) ? _r(l) : l;
    let T = R.frameElement;
    for (; T && l && k !== R; ) {
      const O = Ys(T), z = T.getBoundingClientRect(), M = Ir(T), q = z.left + (T.clientLeft + parseFloat(M.paddingLeft)) * O.x, P = z.top + (T.clientTop + parseFloat(M.paddingTop)) * O.y;
      w *= O.x, b *= O.y, E *= O.x, _ *= O.y, w += q, b += P, T = _r(T).frameElement;
    }
  }
  return Zf({
    width: E,
    height: _,
    x: w,
    y: b
  });
}
function AL(n) {
  let {
    rect: a,
    offsetParent: o,
    strategy: l
  } = n;
  const c = ka(o), p = di(o);
  if (o === p)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, v = Wi(1);
  const w = Wi(0);
  if ((c || !c && l !== "fixed") && ((Ki(o) !== "body" || fc(p)) && (d = op(o)), ka(o))) {
    const b = Io(o);
    v = Ys(o), w.x = b.x + o.clientLeft, w.y = b.y + o.clientTop;
  }
  return {
    width: a.width * v.x,
    height: a.height * v.y,
    x: a.x * v.x - d.scrollLeft * v.x + w.x,
    y: a.y * v.y - d.scrollTop * v.y + w.y
  };
}
function ML(n) {
  return Array.from(n.getClientRects());
}
function cS(n) {
  return Io(di(n)).left + op(n).scrollLeft;
}
function qL(n) {
  const a = di(n), o = op(n), l = n.ownerDocument.body, c = Sr(a.scrollWidth, a.clientWidth, l.scrollWidth, l.clientWidth), p = Sr(a.scrollHeight, a.clientHeight, l.scrollHeight, l.clientHeight);
  let d = -o.scrollLeft + cS(n);
  const v = -o.scrollTop;
  return Ir(l).direction === "rtl" && (d += Sr(a.clientWidth, l.clientWidth) - c), {
    width: c,
    height: p,
    x: d,
    y: v
  };
}
function zL(n, a) {
  const o = _r(n), l = di(n), c = o.visualViewport;
  let p = l.clientWidth, d = l.clientHeight, v = 0, w = 0;
  if (c) {
    p = c.width, d = c.height;
    const b = yy();
    (!b || b && a === "fixed") && (v = c.offsetLeft, w = c.offsetTop);
  }
  return {
    width: p,
    height: d,
    x: v,
    y: w
  };
}
function IL(n, a) {
  const o = Io(n, !0, a === "fixed"), l = o.top + n.clientTop, c = o.left + n.clientLeft, p = ka(n) ? Ys(n) : Wi(1), d = n.clientWidth * p.x, v = n.clientHeight * p.y, w = c * p.x, b = l * p.y;
  return {
    width: d,
    height: v,
    x: w,
    y: b
  };
}
function F2(n, a, o) {
  let l;
  if (a === "viewport")
    l = zL(n, o);
  else if (a === "document")
    l = qL(di(n));
  else if (ci(a))
    l = IL(a, o);
  else {
    const c = uS(n);
    l = {
      ...a,
      x: a.x - c.x,
      y: a.y - c.y
    };
  }
  return Zf(l);
}
function dS(n, a) {
  const o = Zs(n);
  return o === a || !ci(o) || ip(o) ? !1 : Ir(o).position === "fixed" || dS(o, a);
}
function NL(n, a) {
  const o = a.get(n);
  if (o)
    return o;
  let l = sc(n, [], !1).filter((v) => ci(v) && Ki(v) !== "body"), c = null;
  const p = Ir(n).position === "fixed";
  let d = p ? Zs(n) : n;
  for (; ci(d) && !ip(d); ) {
    const v = Ir(d), w = gy(d);
    !w && v.position === "fixed" && (c = null), (p ? !w && !c : !w && v.position === "static" && !!c && ["absolute", "fixed"].includes(c.position) || fc(d) && !w && dS(n, d)) ? l = l.filter((E) => E !== d) : c = v, d = Zs(d);
  }
  return a.set(n, l), l;
}
function PL(n) {
  let {
    element: a,
    boundary: o,
    rootBoundary: l,
    strategy: c
  } = n;
  const d = [...o === "clippingAncestors" ? NL(a, this._c) : [].concat(o), l], v = d[0], w = d.reduce((b, E) => {
    const _ = F2(a, E, c);
    return b.top = Sr(_.top, b.top), b.right = Yi(_.right, b.right), b.bottom = Yi(_.bottom, b.bottom), b.left = Sr(_.left, b.left), b;
  }, F2(a, v, c));
  return {
    width: w.right - w.left,
    height: w.bottom - w.top,
    x: w.left,
    y: w.top
  };
}
function UL(n) {
  return lS(n);
}
function FL(n, a, o) {
  const l = ka(a), c = di(a), p = o === "fixed", d = Io(n, !0, p, a);
  let v = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const w = Wi(0);
  if (l || !l && !p)
    if ((Ki(a) !== "body" || fc(c)) && (v = op(a)), l) {
      const b = Io(a, !0, p, a);
      w.x = b.x + a.clientLeft, w.y = b.y + a.clientTop;
    } else
      c && (w.x = cS(c));
  return {
    x: d.left + v.scrollLeft - w.x,
    y: d.top + v.scrollTop - w.y,
    width: d.width,
    height: d.height
  };
}
function V2(n, a) {
  return !ka(n) || Ir(n).position === "fixed" ? null : a ? a(n) : n.offsetParent;
}
function fS(n, a) {
  const o = _r(n);
  if (!ka(n))
    return o;
  let l = V2(n, a);
  for (; l && $L(l) && Ir(l).position === "static"; )
    l = V2(l, a);
  return l && (Ki(l) === "html" || Ki(l) === "body" && Ir(l).position === "static" && !gy(l)) ? o : l || DL(n) || o;
}
const VL = async function(n) {
  let {
    reference: a,
    floating: o,
    strategy: l
  } = n;
  const c = this.getOffsetParent || fS, p = this.getDimensions;
  return {
    reference: FL(a, await c(o), l),
    floating: {
      x: 0,
      y: 0,
      ...await p(o)
    }
  };
};
function HL(n) {
  return Ir(n).direction === "rtl";
}
const BL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: AL,
  getDocumentElement: di,
  getClippingRect: PL,
  getOffsetParent: fS,
  getElementRects: VL,
  getClientRects: ML,
  getDimensions: UL,
  getScale: Ys,
  isElement: ci,
  isRTL: HL
};
function jL(n, a) {
  let o = null, l;
  const c = di(n);
  function p() {
    clearTimeout(l), o && o.disconnect(), o = null;
  }
  function d(v, w) {
    v === void 0 && (v = !1), w === void 0 && (w = 1), p();
    const {
      left: b,
      top: E,
      width: _,
      height: R
    } = n.getBoundingClientRect();
    if (v || a(), !_ || !R)
      return;
    const k = Mf(E), T = Mf(c.clientWidth - (b + _)), O = Mf(c.clientHeight - (E + R)), z = Mf(b), q = {
      rootMargin: -k + "px " + -T + "px " + -O + "px " + -z + "px",
      threshold: Sr(0, Yi(1, w)) || 1
    };
    let P = !0;
    function Z(j) {
      const I = j[0].intersectionRatio;
      if (I !== w) {
        if (!P)
          return d();
        I ? d(!1, I) : l = setTimeout(() => {
          d(!1, 1e-7);
        }, 100);
      }
      P = !1;
    }
    try {
      o = new IntersectionObserver(Z, {
        ...q,
        // Handle <iframe>s
        root: c.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(Z, q);
    }
    o.observe(n);
  }
  return d(!0), p;
}
function GL(n, a, o, l) {
  l === void 0 && (l = {});
  const {
    ancestorScroll: c = !0,
    ancestorResize: p = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: v = typeof IntersectionObserver == "function",
    animationFrame: w = !1
  } = l, b = by(n), E = c || p ? [...b ? sc(b) : [], ...sc(a)] : [];
  E.forEach((M) => {
    c && M.addEventListener("scroll", o, {
      passive: !0
    }), p && M.addEventListener("resize", o);
  });
  const _ = b && v ? jL(b, o) : null;
  let R = -1, k = null;
  d && (k = new ResizeObserver((M) => {
    let [q] = M;
    q && q.target === b && k && (k.unobserve(a), cancelAnimationFrame(R), R = requestAnimationFrame(() => {
      k && k.observe(a);
    })), o();
  }), b && !w && k.observe(b), k.observe(a));
  let T, O = w ? Io(n) : null;
  w && z();
  function z() {
    const M = Io(n);
    O && (M.x !== O.x || M.y !== O.y || M.width !== O.width || M.height !== O.height) && o(), O = M, T = requestAnimationFrame(z);
  }
  return o(), () => {
    E.forEach((M) => {
      c && M.removeEventListener("scroll", o), p && M.removeEventListener("resize", o);
    }), _ && _(), k && k.disconnect(), k = null, w && cancelAnimationFrame(T);
  };
}
const YL = (n, a, o) => {
  const l = /* @__PURE__ */ new Map(), c = {
    platform: BL,
    ...o
  }, p = {
    ...c.platform,
    _c: l
  };
  return wL(n, a, {
    ...c,
    platform: p
  });
}, WL = (n) => {
  function a(o) {
    return {}.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(o) {
      const {
        element: l,
        padding: c
      } = typeof n == "function" ? n(o) : n;
      return l && a(l) ? l.current != null ? I2({
        element: l.current,
        padding: c
      }).fn(o) : {} : l ? I2({
        element: l,
        padding: c
      }).fn(o) : {};
    }
  };
};
var Vf = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
function Qf(n, a) {
  if (n === a)
    return !0;
  if (typeof n != typeof a)
    return !1;
  if (typeof n == "function" && n.toString() === a.toString())
    return !0;
  let o, l, c;
  if (n && a && typeof n == "object") {
    if (Array.isArray(n)) {
      if (o = n.length, o != a.length)
        return !1;
      for (l = o; l-- !== 0; )
        if (!Qf(n[l], a[l]))
          return !1;
      return !0;
    }
    if (c = Object.keys(n), o = c.length, o !== Object.keys(a).length)
      return !1;
    for (l = o; l-- !== 0; )
      if (!{}.hasOwnProperty.call(a, c[l]))
        return !1;
    for (l = o; l-- !== 0; ) {
      const p = c[l];
      if (!(p === "_owner" && n.$$typeof) && !Qf(n[p], a[p]))
        return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function pS(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function H2(n, a) {
  const o = pS(n);
  return Math.round(a * o) / o;
}
function B2(n) {
  const a = y.useRef(n);
  return Vf(() => {
    a.current = n;
  }), a;
}
function KL(n) {
  n === void 0 && (n = {});
  const {
    placement: a = "bottom",
    strategy: o = "absolute",
    middleware: l = [],
    platform: c,
    elements: {
      reference: p,
      floating: d
    } = {},
    transform: v = !0,
    whileElementsMounted: w,
    open: b
  } = n, [E, _] = y.useState({
    x: 0,
    y: 0,
    strategy: o,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [R, k] = y.useState(l);
  Qf(R, l) || k(l);
  const [T, O] = y.useState(null), [z, M] = y.useState(null), q = y.useCallback((ge) => {
    ge != I.current && (I.current = ge, O(ge));
  }, [O]), P = y.useCallback((ge) => {
    ge !== N.current && (N.current = ge, M(ge));
  }, [M]), Z = p || T, j = d || z, I = y.useRef(null), N = y.useRef(null), J = y.useRef(E), Ce = B2(w), ne = B2(c), re = y.useCallback(() => {
    if (!I.current || !N.current)
      return;
    const ge = {
      placement: a,
      strategy: o,
      middleware: R
    };
    ne.current && (ge.platform = ne.current), YL(I.current, N.current, ge).then((ce) => {
      const Ie = {
        ...ce,
        isPositioned: !0
      };
      we.current && !Qf(J.current, Ie) && (J.current = Ie, Js.flushSync(() => {
        _(Ie);
      }));
    });
  }, [R, a, o, ne]);
  Vf(() => {
    b === !1 && J.current.isPositioned && (J.current.isPositioned = !1, _((ge) => ({
      ...ge,
      isPositioned: !1
    })));
  }, [b]);
  const we = y.useRef(!1);
  Vf(() => (we.current = !0, () => {
    we.current = !1;
  }), []), Vf(() => {
    if (Z && (I.current = Z), j && (N.current = j), Z && j) {
      if (Ce.current)
        return Ce.current(Z, j, re);
      re();
    }
  }, [Z, j, re, Ce]);
  const le = y.useMemo(() => ({
    reference: I,
    floating: N,
    setReference: q,
    setFloating: P
  }), [q, P]), oe = y.useMemo(() => ({
    reference: Z,
    floating: j
  }), [Z, j]), se = y.useMemo(() => {
    const ge = {
      position: o,
      left: 0,
      top: 0
    };
    if (!oe.floating)
      return ge;
    const ce = H2(oe.floating, E.x), Ie = H2(oe.floating, E.y);
    return v ? {
      ...ge,
      transform: "translate(" + ce + "px, " + Ie + "px)",
      ...pS(oe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: o,
      left: ce,
      top: Ie
    };
  }, [o, v, oe.floating, E.x, E.y]);
  return y.useMemo(() => ({
    ...E,
    update: re,
    refs: le,
    elements: oe,
    floatingStyles: se
  }), [E, re, le, oe, se]);
}
const hS = "Popper", [vS, mS] = uc(hS), [ZL, gS] = vS(hS), QL = (n) => {
  const { __scopePopper: a, children: o } = n, [l, c] = y.useState(null);
  return /* @__PURE__ */ y.createElement(ZL, {
    scope: a,
    anchor: l,
    onAnchorChange: c
  }, o);
}, XL = "PopperAnchor", JL = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopePopper: o, virtualRef: l, ...c } = n, p = gS(XL, o), d = y.useRef(null), v = Dn(a, d);
  return y.useEffect(() => {
    p.onAnchorChange((l == null ? void 0 : l.current) || d.current);
  }), l ? null : /* @__PURE__ */ y.createElement(Jt.div, rt({}, c, {
    ref: v
  }));
}), yS = "PopperContent", [eA, vz] = vS(yS), tA = /* @__PURE__ */ y.forwardRef((n, a) => {
  var o, l, c, p, d, v, w, b;
  const { __scopePopper: E, side: _ = "bottom", sideOffset: R = 0, align: k = "center", alignOffset: T = 0, arrowPadding: O = 0, collisionBoundary: z = [], collisionPadding: M = 0, sticky: q = "partial", hideWhenDetached: P = !1, avoidCollisions: Z = !0, onPlaced: j, ...I } = n, N = gS(yS, E), [J, Ce] = y.useState(null), ne = Dn(
    a,
    (ut) => Ce(ut)
  ), [re, we] = y.useState(null), le = OO(re), oe = (o = le == null ? void 0 : le.width) !== null && o !== void 0 ? o : 0, se = (l = le == null ? void 0 : le.height) !== null && l !== void 0 ? l : 0, ge = _ + (k !== "center" ? "-" + k : ""), ce = typeof M == "number" ? M : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...M
  }, Ie = Array.isArray(z) ? z : [
    z
  ], It = Ie.length > 0, bt = {
    padding: ce,
    boundary: Ie.filter(nA),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: It
  }, { refs: Rt, floatingStyles: yt, placement: Ut, isPositioned: kt, middlewareData: Ft } = KL({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ge,
    whileElementsMounted: GL,
    elements: {
      reference: N.anchor
    },
    middleware: [
      EL({
        mainAxis: R + se,
        alignmentAxis: T
      }),
      Z && RL({
        mainAxis: !0,
        crossAxis: !1,
        limiter: q === "partial" ? kL() : void 0,
        ...bt
      }),
      Z && SL({
        ...bt
      }),
      TL({
        ...bt,
        apply: ({ elements: ut, rects: qt, availableWidth: zt, availableHeight: Tt }) => {
          const { width: Fn, height: Xn } = qt.reference, tn = ut.floating.style;
          tn.setProperty("--radix-popper-available-width", `${zt}px`), tn.setProperty("--radix-popper-available-height", `${Tt}px`), tn.setProperty("--radix-popper-anchor-width", `${Fn}px`), tn.setProperty("--radix-popper-anchor-height", `${Xn}px`);
        }
      }),
      re && WL({
        element: re,
        padding: O
      }),
      rA({
        arrowWidth: oe,
        arrowHeight: se
      }),
      P && _L({
        strategy: "referenceHidden"
      })
    ]
  }), [Wt, Re] = bS(Ut), Ve = Ra(j);
  Er(() => {
    kt && (Ve == null || Ve());
  }, [
    kt,
    Ve
  ]);
  const at = (c = Ft.arrow) === null || c === void 0 ? void 0 : c.x, He = (p = Ft.arrow) === null || p === void 0 ? void 0 : p.y, Ne = ((d = Ft.arrow) === null || d === void 0 ? void 0 : d.centerOffset) !== 0, [Pe, Je] = y.useState();
  return Er(() => {
    J && Je(window.getComputedStyle(J).zIndex);
  }, [
    J
  ]), /* @__PURE__ */ y.createElement("div", {
    ref: Rt.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...yt,
      transform: kt ? yt.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Pe,
      "--radix-popper-transform-origin": [
        (v = Ft.transformOrigin) === null || v === void 0 ? void 0 : v.x,
        (w = Ft.transformOrigin) === null || w === void 0 ? void 0 : w.y
      ].join(" ")
    },
    dir: n.dir
  }, /* @__PURE__ */ y.createElement(eA, {
    scope: E,
    placedSide: Wt,
    onArrowChange: we,
    arrowX: at,
    arrowY: He,
    shouldHideArrow: Ne
  }, /* @__PURE__ */ y.createElement(Jt.div, rt({
    "data-side": Wt,
    "data-align": Re
  }, I, {
    ref: ne,
    style: {
      ...I.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: kt ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (b = Ft.hide) !== null && b !== void 0 && b.referenceHidden ? 0 : void 0
    }
  }))));
});
function nA(n) {
  return n !== null;
}
const rA = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(a) {
    var o, l, c, p, d;
    const { placement: v, rects: w, middlewareData: b } = a, _ = ((o = b.arrow) === null || o === void 0 ? void 0 : o.centerOffset) !== 0, R = _ ? 0 : n.arrowWidth, k = _ ? 0 : n.arrowHeight, [T, O] = bS(v), z = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[O], M = ((l = (c = b.arrow) === null || c === void 0 ? void 0 : c.x) !== null && l !== void 0 ? l : 0) + R / 2, q = ((p = (d = b.arrow) === null || d === void 0 ? void 0 : d.y) !== null && p !== void 0 ? p : 0) + k / 2;
    let P = "", Z = "";
    return T === "bottom" ? (P = _ ? z : `${M}px`, Z = `${-k}px`) : T === "top" ? (P = _ ? z : `${M}px`, Z = `${w.floating.height + k}px`) : T === "right" ? (P = `${-k}px`, Z = _ ? z : `${q}px`) : T === "left" && (P = `${w.floating.width + k}px`, Z = _ ? z : `${q}px`), {
      data: {
        x: P,
        y: Z
      }
    };
  }
});
function bS(n) {
  const [a, o = "center"] = n.split("-");
  return [
    a,
    o
  ];
}
const aA = QL, iA = JL, oA = tA, sA = /* @__PURE__ */ y.forwardRef((n, a) => /* @__PURE__ */ y.createElement(Jt.span, rt({}, n, {
  ref: a,
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
    ...n.style
  }
}))), lA = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], uA = [
  " ",
  "Enter"
], sp = "Select", [lp, up, cA] = V5(sp), [nl, mz] = uc(sp, [
  cA,
  mS
]), Cy = mS(), [dA, No] = nl(sp), [fA, pA] = nl(sp), hA = (n) => {
  const { __scopeSelect: a, children: o, open: l, defaultOpen: c, onOpenChange: p, value: d, defaultValue: v, onValueChange: w, dir: b, name: E, autoComplete: _, disabled: R, required: k } = n, T = Cy(a), [O, z] = y.useState(null), [M, q] = y.useState(null), [P, Z] = y.useState(!1), j = fy(b), [I = !1, N] = Yf({
    prop: l,
    defaultProp: c,
    onChange: p
  }), [J, Ce] = Yf({
    prop: d,
    defaultProp: v,
    onChange: w
  }), ne = y.useRef(null), re = O ? !!O.closest("form") : !0, [we, le] = y.useState(/* @__PURE__ */ new Set()), oe = Array.from(we).map(
    (se) => se.props.value
  ).join(";");
  return /* @__PURE__ */ y.createElement(aA, T, /* @__PURE__ */ y.createElement(dA, {
    required: k,
    scope: a,
    trigger: O,
    onTriggerChange: z,
    valueNode: M,
    onValueNodeChange: q,
    valueNodeHasChildren: P,
    onValueNodeHasChildrenChange: Z,
    contentId: cc(),
    value: J,
    onValueChange: Ce,
    open: I,
    onOpenChange: N,
    dir: j,
    triggerPointerDownPosRef: ne,
    disabled: R
  }, /* @__PURE__ */ y.createElement(lp.Provider, {
    scope: a
  }, /* @__PURE__ */ y.createElement(fA, {
    scope: n.__scopeSelect,
    onNativeOptionAdd: y.useCallback((se) => {
      le(
        (ge) => new Set(ge).add(se)
      );
    }, []),
    onNativeOptionRemove: y.useCallback((se) => {
      le((ge) => {
        const ce = new Set(ge);
        return ce.delete(se), ce;
      });
    }, [])
  }, o)), re ? /* @__PURE__ */ y.createElement(_S, {
    key: oe,
    "aria-hidden": !0,
    required: k,
    tabIndex: -1,
    name: E,
    autoComplete: _,
    value: J,
    onChange: (se) => Ce(se.target.value),
    disabled: R
  }, J === void 0 ? /* @__PURE__ */ y.createElement("option", {
    value: ""
  }) : null, Array.from(we)) : null));
}, vA = "SelectTrigger", mA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, disabled: l = !1, ...c } = n, p = Cy(o), d = No(vA, o), v = d.disabled || l, w = Dn(a, d.onTriggerChange), b = up(o), [E, _, R] = xS((T) => {
    const O = b().filter(
      (q) => !q.disabled
    ), z = O.find(
      (q) => q.value === d.value
    ), M = ES(O, T, z);
    M !== void 0 && d.onValueChange(M.value);
  }), k = () => {
    v || (d.onOpenChange(!0), R());
  };
  return /* @__PURE__ */ y.createElement(iA, rt({
    asChild: !0
  }, p), /* @__PURE__ */ y.createElement(Jt.button, rt({
    type: "button",
    role: "combobox",
    "aria-controls": d.contentId,
    "aria-expanded": d.open,
    "aria-required": d.required,
    "aria-autocomplete": "none",
    dir: d.dir,
    "data-state": d.open ? "open" : "closed",
    disabled: v,
    "data-disabled": v ? "" : void 0,
    "data-placeholder": d.value === void 0 ? "" : void 0
  }, c, {
    ref: w,
    onClick: xt(c.onClick, (T) => {
      T.currentTarget.focus();
    }),
    onPointerDown: xt(c.onPointerDown, (T) => {
      const O = T.target;
      O.hasPointerCapture(T.pointerId) && O.releasePointerCapture(T.pointerId), T.button === 0 && T.ctrlKey === !1 && (k(), d.triggerPointerDownPosRef.current = {
        x: Math.round(T.pageX),
        y: Math.round(T.pageY)
      }, T.preventDefault());
    }),
    onKeyDown: xt(c.onKeyDown, (T) => {
      const O = E.current !== "";
      !(T.ctrlKey || T.altKey || T.metaKey) && T.key.length === 1 && _(T.key), !(O && T.key === " ") && lA.includes(T.key) && (k(), T.preventDefault());
    })
  })));
}), gA = "SelectValue", yA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, className: l, style: c, children: p, placeholder: d, ...v } = n, w = No(gA, o), { onValueNodeHasChildrenChange: b } = w, E = p !== void 0, _ = Dn(a, w.onValueNodeChange);
  return Er(() => {
    b(E);
  }, [
    b,
    E
  ]), /* @__PURE__ */ y.createElement(Jt.span, rt({}, v, {
    ref: _,
    style: {
      pointerEvents: "none"
    }
  }), w.value === void 0 && d !== void 0 ? d : p);
}), Qs = "SelectContent", bA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const o = No(Qs, n.__scopeSelect), [l, c] = y.useState();
  if (Er(() => {
    c(new DocumentFragment());
  }, []), !o.open) {
    const p = l;
    return p ? /* @__PURE__ */ Js.createPortal(/* @__PURE__ */ y.createElement(CS, {
      scope: n.__scopeSelect
    }, /* @__PURE__ */ y.createElement(lp.Slot, {
      scope: n.__scopeSelect
    }, /* @__PURE__ */ y.createElement("div", null, n.children))), p) : null;
  }
  return /* @__PURE__ */ y.createElement(CA, rt({}, n, {
    ref: a
  }));
}), oi = 10, [CS, rl] = nl(Qs), CA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const {
    __scopeSelect: o,
    position: l = "item-aligned",
    onCloseAutoFocus: c,
    onEscapeKeyDown: p,
    onPointerDownOutside: d,
    side: v,
    sideOffset: w,
    align: b,
    alignOffset: E,
    arrowPadding: _,
    collisionBoundary: R,
    collisionPadding: k,
    sticky: T,
    hideWhenDetached: O,
    avoidCollisions: z,
    //
    ...M
  } = n, q = No(Qs, o), [P, Z] = y.useState(null), [j, I] = y.useState(null), N = Dn(
    a,
    (Re) => Z(Re)
  ), [J, Ce] = y.useState(null), [ne, re] = y.useState(null), we = up(o), [le, oe] = y.useState(!1), se = y.useRef(!1);
  y.useEffect(() => {
    if (P)
      return $O(P);
  }, [
    P
  ]), BD();
  const ge = y.useCallback((Re) => {
    const [Ve, ...at] = we().map(
      (Pe) => Pe.ref.current
    ), [He] = at.slice(-1), Ne = document.activeElement;
    for (const Pe of Re)
      if (Pe === Ne || (Pe == null || Pe.scrollIntoView({
        block: "nearest"
      }), Pe === Ve && j && (j.scrollTop = 0), Pe === He && j && (j.scrollTop = j.scrollHeight), Pe == null || Pe.focus(), document.activeElement !== Ne))
        return;
  }, [
    we,
    j
  ]), ce = y.useCallback(
    () => ge([
      J,
      P
    ]),
    [
      ge,
      J,
      P
    ]
  );
  y.useEffect(() => {
    le && ce();
  }, [
    le,
    ce
  ]);
  const { onOpenChange: Ie, triggerPointerDownPosRef: It } = q;
  y.useEffect(() => {
    if (P) {
      let Re = {
        x: 0,
        y: 0
      };
      const Ve = (He) => {
        var Ne, Pe, Je, ut;
        Re = {
          x: Math.abs(Math.round(He.pageX) - ((Ne = (Pe = It.current) === null || Pe === void 0 ? void 0 : Pe.x) !== null && Ne !== void 0 ? Ne : 0)),
          y: Math.abs(Math.round(He.pageY) - ((Je = (ut = It.current) === null || ut === void 0 ? void 0 : ut.y) !== null && Je !== void 0 ? Je : 0))
        };
      }, at = (He) => {
        Re.x <= 10 && Re.y <= 10 ? He.preventDefault() : P.contains(He.target) || Ie(!1), document.removeEventListener("pointermove", Ve), It.current = null;
      };
      return It.current !== null && (document.addEventListener("pointermove", Ve), document.addEventListener("pointerup", at, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", Ve), document.removeEventListener("pointerup", at, {
          capture: !0
        });
      };
    }
  }, [
    P,
    Ie,
    It
  ]), y.useEffect(() => {
    const Re = () => Ie(!1);
    return window.addEventListener("blur", Re), window.addEventListener("resize", Re), () => {
      window.removeEventListener("blur", Re), window.removeEventListener("resize", Re);
    };
  }, [
    Ie
  ]);
  const [bt, Rt] = xS((Re) => {
    const Ve = we().filter(
      (Ne) => !Ne.disabled
    ), at = Ve.find(
      (Ne) => Ne.ref.current === document.activeElement
    ), He = ES(Ve, Re, at);
    He && setTimeout(
      () => He.ref.current.focus()
    );
  }), yt = y.useCallback((Re, Ve, at) => {
    const He = !se.current && !at;
    (q.value !== void 0 && q.value === Ve || He) && (Ce(Re), He && (se.current = !0));
  }, [
    q.value
  ]), Ut = y.useCallback(
    () => P == null ? void 0 : P.focus(),
    [
      P
    ]
  ), kt = y.useCallback((Re, Ve, at) => {
    const He = !se.current && !at;
    (q.value !== void 0 && q.value === Ve || He) && re(Re);
  }, [
    q.value
  ]), Ft = l === "popper" ? j2 : wA, Wt = Ft === j2 ? {
    side: v,
    sideOffset: w,
    align: b,
    alignOffset: E,
    arrowPadding: _,
    collisionBoundary: R,
    collisionPadding: k,
    sticky: T,
    hideWhenDetached: O,
    avoidCollisions: z
  } : {};
  return /* @__PURE__ */ y.createElement(CS, {
    scope: o,
    content: P,
    viewport: j,
    onViewportChange: I,
    itemRefCallback: yt,
    selectedItem: J,
    onItemLeave: Ut,
    itemTextRefCallback: kt,
    focusSelectedItem: ce,
    selectedItemText: ne,
    position: l,
    isPositioned: le,
    searchRef: bt
  }, /* @__PURE__ */ y.createElement(EO, {
    as: ic,
    allowPinchZoom: !0
  }, /* @__PURE__ */ y.createElement(oL, {
    asChild: !0,
    trapped: q.open,
    onMountAutoFocus: (Re) => {
      Re.preventDefault();
    },
    onUnmountAutoFocus: xt(c, (Re) => {
      var Ve;
      (Ve = q.trigger) === null || Ve === void 0 || Ve.focus({
        preventScroll: !0
      }), Re.preventDefault();
    })
  }, /* @__PURE__ */ y.createElement(rL, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: p,
    onPointerDownOutside: d,
    onFocusOutside: (Re) => Re.preventDefault(),
    onDismiss: () => q.onOpenChange(!1)
  }, /* @__PURE__ */ y.createElement(Ft, rt({
    role: "listbox",
    id: q.contentId,
    "data-state": q.open ? "open" : "closed",
    dir: q.dir,
    onContextMenu: (Re) => Re.preventDefault()
  }, M, Wt, {
    onPlaced: () => oe(!0),
    ref: N,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...M.style
    },
    onKeyDown: xt(M.onKeyDown, (Re) => {
      const Ve = Re.ctrlKey || Re.altKey || Re.metaKey;
      if (Re.key === "Tab" && Re.preventDefault(), !Ve && Re.key.length === 1 && Rt(Re.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(Re.key)) {
        let He = we().filter(
          (Ne) => !Ne.disabled
        ).map(
          (Ne) => Ne.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(Re.key) && (He = He.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(Re.key)) {
          const Ne = Re.target, Pe = He.indexOf(Ne);
          He = He.slice(Pe + 1);
        }
        setTimeout(
          () => ge(He)
        ), Re.preventDefault();
      }
    })
  }))))));
}), wA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, onPlaced: l, ...c } = n, p = No(Qs, o), d = rl(Qs, o), [v, w] = y.useState(null), [b, E] = y.useState(null), _ = Dn(
    a,
    (N) => E(N)
  ), R = up(o), k = y.useRef(!1), T = y.useRef(!0), { viewport: O, selectedItem: z, selectedItemText: M, focusSelectedItem: q } = d, P = y.useCallback(() => {
    if (p.trigger && p.valueNode && v && b && O && z && M) {
      const N = p.trigger.getBoundingClientRect(), J = b.getBoundingClientRect(), Ce = p.valueNode.getBoundingClientRect(), ne = M.getBoundingClientRect();
      if (p.dir !== "rtl") {
        const Ne = ne.left - J.left, Pe = Ce.left - Ne, Je = N.left - Pe, ut = N.width + Je, qt = Math.max(ut, J.width), zt = window.innerWidth - oi, Tt = $2(Pe, [
          oi,
          zt - qt
        ]);
        v.style.minWidth = ut + "px", v.style.left = Tt + "px";
      } else {
        const Ne = J.right - ne.right, Pe = window.innerWidth - Ce.right - Ne, Je = window.innerWidth - N.right - Pe, ut = N.width + Je, qt = Math.max(ut, J.width), zt = window.innerWidth - oi, Tt = $2(Pe, [
          oi,
          zt - qt
        ]);
        v.style.minWidth = ut + "px", v.style.right = Tt + "px";
      }
      const re = R(), we = window.innerHeight - oi * 2, le = O.scrollHeight, oe = window.getComputedStyle(b), se = parseInt(oe.borderTopWidth, 10), ge = parseInt(oe.paddingTop, 10), ce = parseInt(oe.borderBottomWidth, 10), Ie = parseInt(oe.paddingBottom, 10), It = se + ge + le + Ie + ce, bt = Math.min(z.offsetHeight * 5, It), Rt = window.getComputedStyle(O), yt = parseInt(Rt.paddingTop, 10), Ut = parseInt(Rt.paddingBottom, 10), kt = N.top + N.height / 2 - oi, Ft = we - kt, Wt = z.offsetHeight / 2, Re = z.offsetTop + Wt, Ve = se + ge + Re, at = It - Ve;
      if (Ve <= kt) {
        const Ne = z === re[re.length - 1].ref.current;
        v.style.bottom = "0px";
        const Pe = b.clientHeight - O.offsetTop - O.offsetHeight, Je = Math.max(Ft, Wt + (Ne ? Ut : 0) + Pe + ce), ut = Ve + Je;
        v.style.height = ut + "px";
      } else {
        const Ne = z === re[0].ref.current;
        v.style.top = "0px";
        const Je = Math.max(kt, se + O.offsetTop + (Ne ? yt : 0) + Wt) + at;
        v.style.height = Je + "px", O.scrollTop = Ve - kt + O.offsetTop;
      }
      v.style.margin = `${oi}px 0`, v.style.minHeight = bt + "px", v.style.maxHeight = we + "px", l == null || l(), requestAnimationFrame(
        () => k.current = !0
      );
    }
  }, [
    R,
    p.trigger,
    p.valueNode,
    v,
    b,
    O,
    z,
    M,
    p.dir,
    l
  ]);
  Er(
    () => P(),
    [
      P
    ]
  );
  const [Z, j] = y.useState();
  Er(() => {
    b && j(window.getComputedStyle(b).zIndex);
  }, [
    b
  ]);
  const I = y.useCallback((N) => {
    N && T.current === !0 && (P(), q == null || q(), T.current = !1);
  }, [
    P,
    q
  ]);
  return /* @__PURE__ */ y.createElement(SA, {
    scope: o,
    contentWrapper: v,
    shouldExpandOnScrollRef: k,
    onScrollButtonChange: I
  }, /* @__PURE__ */ y.createElement("div", {
    ref: w,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: Z
    }
  }, /* @__PURE__ */ y.createElement(Jt.div, rt({}, c, {
    ref: _,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...c.style
    }
  }))));
}), j2 = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, align: l = "start", collisionPadding: c = oi, ...p } = n, d = Cy(o);
  return /* @__PURE__ */ y.createElement(oA, rt({}, d, p, {
    ref: a,
    align: l,
    collisionPadding: c,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...p.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [SA, wS] = nl(Qs, {}), G2 = "SelectViewport", _A = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, ...l } = n, c = rl(G2, o), p = wS(G2, o), d = Dn(a, c.onViewportChange), v = y.useRef(0);
  return /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ y.createElement(lp.Slot, {
    scope: o
  }, /* @__PURE__ */ y.createElement(Jt.div, rt({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, l, {
    ref: d,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...l.style
    },
    onScroll: xt(l.onScroll, (w) => {
      const b = w.currentTarget, { contentWrapper: E, shouldExpandOnScrollRef: _ } = p;
      if (_ != null && _.current && E) {
        const R = Math.abs(v.current - b.scrollTop);
        if (R > 0) {
          const k = window.innerHeight - oi * 2, T = parseFloat(E.style.minHeight), O = parseFloat(E.style.height), z = Math.max(T, O);
          if (z < k) {
            const M = z + R, q = Math.min(k, M), P = M - q;
            E.style.height = q + "px", E.style.bottom === "0px" && (b.scrollTop = P > 0 ? P : 0, E.style.justifyContent = "flex-end");
          }
        }
      }
      v.current = b.scrollTop;
    })
  }))));
}), xA = "SelectGroup", [EA, gz] = nl(xA), RA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, ...l } = n, c = cc();
  return /* @__PURE__ */ y.createElement(EA, {
    scope: o,
    id: c
  }, /* @__PURE__ */ y.createElement(Jt.div, rt({
    role: "group",
    "aria-labelledby": c
  }, l, {
    ref: a
  })));
}), ey = "SelectItem", [kA, SS] = nl(ey), TA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, value: l, disabled: c = !1, textValue: p, ...d } = n, v = No(ey, o), w = rl(ey, o), b = v.value === l, [E, _] = y.useState(p ?? ""), [R, k] = y.useState(!1), T = Dn(a, (M) => {
    var q;
    return (q = w.itemRefCallback) === null || q === void 0 ? void 0 : q.call(w, M, l, c);
  }), O = cc(), z = () => {
    c || (v.onValueChange(l), v.onOpenChange(!1));
  };
  return /* @__PURE__ */ y.createElement(kA, {
    scope: o,
    value: l,
    disabled: c,
    textId: O,
    isSelected: b,
    onItemTextChange: y.useCallback((M) => {
      _((q) => {
        var P;
        return q || ((P = M == null ? void 0 : M.textContent) !== null && P !== void 0 ? P : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ y.createElement(lp.ItemSlot, {
    scope: o,
    value: l,
    disabled: c,
    textValue: E
  }, /* @__PURE__ */ y.createElement(Jt.div, rt({
    role: "option",
    "aria-labelledby": O,
    "data-highlighted": R ? "" : void 0,
    "aria-selected": b && R,
    "data-state": b ? "checked" : "unchecked",
    "aria-disabled": c || void 0,
    "data-disabled": c ? "" : void 0,
    tabIndex: c ? void 0 : -1
  }, d, {
    ref: T,
    onFocus: xt(
      d.onFocus,
      () => k(!0)
    ),
    onBlur: xt(
      d.onBlur,
      () => k(!1)
    ),
    onPointerUp: xt(d.onPointerUp, z),
    onPointerMove: xt(d.onPointerMove, (M) => {
      if (c) {
        var q;
        (q = w.onItemLeave) === null || q === void 0 || q.call(w);
      } else
        M.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: xt(d.onPointerLeave, (M) => {
      if (M.currentTarget === document.activeElement) {
        var q;
        (q = w.onItemLeave) === null || q === void 0 || q.call(w);
      }
    }),
    onKeyDown: xt(d.onKeyDown, (M) => {
      var q;
      ((q = w.searchRef) === null || q === void 0 ? void 0 : q.current) !== "" && M.key === " " || (uA.includes(M.key) && z(), M.key === " " && M.preventDefault());
    })
  }))));
}), qf = "SelectItemText", $A = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, className: l, style: c, ...p } = n, d = No(qf, o), v = rl(qf, o), w = SS(qf, o), b = pA(qf, o), [E, _] = y.useState(null), R = Dn(
    a,
    (M) => _(M),
    w.onItemTextChange,
    (M) => {
      var q;
      return (q = v.itemTextRefCallback) === null || q === void 0 ? void 0 : q.call(v, M, w.value, w.disabled);
    }
  ), k = E == null ? void 0 : E.textContent, T = y.useMemo(
    () => /* @__PURE__ */ y.createElement("option", {
      key: w.value,
      value: w.value,
      disabled: w.disabled
    }, k),
    [
      w.disabled,
      w.value,
      k
    ]
  ), { onNativeOptionAdd: O, onNativeOptionRemove: z } = b;
  return Er(() => (O(T), () => z(T)), [
    O,
    z,
    T
  ]), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(Jt.span, rt({
    id: w.textId
  }, p, {
    ref: R
  })), w.isSelected && d.valueNode && !d.valueNodeHasChildren ? /* @__PURE__ */ Js.createPortal(p.children, d.valueNode) : null);
}), DA = "SelectItemIndicator", OA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, ...l } = n;
  return SS(DA, o).isSelected ? /* @__PURE__ */ y.createElement(Jt.span, rt({
    "aria-hidden": !0
  }, l, {
    ref: a
  })) : null;
}), Y2 = "SelectScrollDownButton", LA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const o = rl(Y2, n.__scopeSelect), l = wS(Y2, n.__scopeSelect), [c, p] = y.useState(!1), d = Dn(a, l.onScrollButtonChange);
  return Er(() => {
    if (o.viewport && o.isPositioned) {
      let b = function() {
        const E = w.scrollHeight - w.clientHeight, _ = Math.ceil(w.scrollTop) < E;
        p(_);
      };
      var v = b;
      const w = o.viewport;
      return b(), w.addEventListener("scroll", b), () => w.removeEventListener("scroll", b);
    }
  }, [
    o.viewport,
    o.isPositioned
  ]), c ? /* @__PURE__ */ y.createElement(AA, rt({}, n, {
    ref: d,
    onAutoScroll: () => {
      const { viewport: v, selectedItem: w } = o;
      v && w && (v.scrollTop = v.scrollTop + w.offsetHeight);
    }
  })) : null;
}), AA = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeSelect: o, onAutoScroll: l, ...c } = n, p = rl("SelectScrollButton", o), d = y.useRef(null), v = up(o), w = y.useCallback(() => {
    d.current !== null && (window.clearInterval(d.current), d.current = null);
  }, []);
  return y.useEffect(() => () => w(), [
    w
  ]), Er(() => {
    var b;
    const E = v().find(
      (_) => _.ref.current === document.activeElement
    );
    E == null || (b = E.ref.current) === null || b === void 0 || b.scrollIntoView({
      block: "nearest"
    });
  }, [
    v
  ]), /* @__PURE__ */ y.createElement(Jt.div, rt({
    "aria-hidden": !0
  }, c, {
    ref: a,
    style: {
      flexShrink: 0,
      ...c.style
    },
    onPointerDown: xt(c.onPointerDown, () => {
      d.current === null && (d.current = window.setInterval(l, 50));
    }),
    onPointerMove: xt(c.onPointerMove, () => {
      var b;
      (b = p.onItemLeave) === null || b === void 0 || b.call(p), d.current === null && (d.current = window.setInterval(l, 50));
    }),
    onPointerLeave: xt(c.onPointerLeave, () => {
      w();
    })
  }));
}), _S = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { value: o, ...l } = n, c = y.useRef(null), p = Dn(a, c), d = DO(o);
  return y.useEffect(() => {
    const v = c.current, w = window.HTMLSelectElement.prototype, E = Object.getOwnPropertyDescriptor(w, "value").set;
    if (d !== o && E) {
      const _ = new Event("change", {
        bubbles: !0
      });
      E.call(v, o), v.dispatchEvent(_);
    }
  }, [
    d,
    o
  ]), /* @__PURE__ */ y.createElement(sA, {
    asChild: !0
  }, /* @__PURE__ */ y.createElement("select", rt({}, l, {
    ref: p,
    defaultValue: o
  })));
});
_S.displayName = "BubbleSelect";
function xS(n) {
  const a = Ra(n), o = y.useRef(""), l = y.useRef(0), c = y.useCallback((d) => {
    const v = o.current + d;
    a(v), function w(b) {
      o.current = b, window.clearTimeout(l.current), b !== "" && (l.current = window.setTimeout(
        () => w(""),
        1e3
      ));
    }(v);
  }, [
    a
  ]), p = y.useCallback(() => {
    o.current = "", window.clearTimeout(l.current);
  }, []);
  return y.useEffect(() => () => window.clearTimeout(l.current), []), [
    o,
    c,
    p
  ];
}
function ES(n, a, o) {
  const c = a.length > 1 && Array.from(a).every(
    (b) => b === a[0]
  ) ? a[0] : a, p = o ? n.indexOf(o) : -1;
  let d = MA(n, Math.max(p, 0));
  c.length === 1 && (d = d.filter(
    (b) => b !== o
  ));
  const w = d.find(
    (b) => b.textValue.toLowerCase().startsWith(c.toLowerCase())
  );
  return w !== o ? w : void 0;
}
function MA(n, a) {
  return n.map(
    (o, l) => n[(a + l) % n.length]
  );
}
const qA = hA, zA = mA, IA = yA, NA = bA, PA = _A, UA = RA, FA = TA, VA = $A, HA = OA, BA = LA;
var jA = "_1wo163v3", GA = "_1wo163v6", YA = "_1wo163v2", WA = "_1wo163v5", KA = "_1wo163v1", ZA = "_1wo163v7", QA = "_1wo163v0", XA = "_1wo163v4";
const JA = ({
  label: n,
  items: a,
  defaultValue: o,
  onChange: l,
  className: c,
  contentProps: p,
  disabled: d = !1
}) => {
  const [v, w] = y.useState(o), b = y.useCallback(
    (E) => {
      w(E), l(E);
    },
    [l]
  );
  return /* @__PURE__ */ C.jsx("div", { className: "sid-dropdown", children: /* @__PURE__ */ C.jsxs(
    qA,
    {
      disabled: d,
      onValueChange: b,
      defaultValue: o,
      children: [
        /* @__PURE__ */ C.jsxs(
          zA,
          {
            className: lt("sid-dropdown__trigger", QA, c),
            children: [
              /* @__PURE__ */ C.jsx("label", { className: lt("sid-dropdown__trigger__label", KA), children: n }),
              /* @__PURE__ */ C.jsx("div", { className: lt("sid-dropdown__trigger__input", YA), children: /* @__PURE__ */ C.jsx(IA, {}) }),
              /* @__PURE__ */ C.jsx(
                I5,
                {
                  className: lt("sid-dropdown__trigger__icon", GA)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ C.jsxs(
          NA,
          {
            ...p,
            className: lt(
              "sid-dropdown__popover",
              jA,
              p == null ? void 0 : p.className
            ),
            children: [
              /* @__PURE__ */ C.jsx(
                PA,
                {
                  className: lt("sid-dropdown__viewport", XA),
                  children: /* @__PURE__ */ C.jsx(UA, { children: a.map((E) => /* @__PURE__ */ C.jsxs(
                    FA,
                    {
                      className: lt(
                        "sid-dropdown__item",
                        E.value === v && "sid-dropdown__item--selected",
                        WA
                      ),
                      value: E.value,
                      textValue: E.textValue,
                      children: [
                        /* @__PURE__ */ C.jsx(VA, { children: E.label }),
                        /* @__PURE__ */ C.jsx(HA, { className: ZA, children: /* @__PURE__ */ C.jsx(cD, { className: "sid-dropdown__item--selected__icon" }) })
                      ]
                    },
                    E.value
                  )) })
                }
              ),
              /* @__PURE__ */ C.jsx(BA, {})
            ]
          }
        )
      ]
    }
  ) });
}, qg = "rovingFocusGroup.onEntryFocus", eM = {
  bubbles: !1,
  cancelable: !0
}, wy = "RovingFocusGroup", [ty, RS, tM] = V5(wy), [nM, kS] = uc(wy, [
  tM
]), [rM, aM] = nM(wy), iM = /* @__PURE__ */ y.forwardRef((n, a) => /* @__PURE__ */ y.createElement(ty.Provider, {
  scope: n.__scopeRovingFocusGroup
}, /* @__PURE__ */ y.createElement(ty.Slot, {
  scope: n.__scopeRovingFocusGroup
}, /* @__PURE__ */ y.createElement(oM, rt({}, n, {
  ref: a
}))))), oM = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeRovingFocusGroup: o, orientation: l, loop: c = !1, dir: p, currentTabStopId: d, defaultCurrentTabStopId: v, onCurrentTabStopIdChange: w, onEntryFocus: b, ...E } = n, _ = y.useRef(null), R = Dn(a, _), k = fy(p), [T = null, O] = Yf({
    prop: d,
    defaultProp: v,
    onChange: w
  }), [z, M] = y.useState(!1), q = Ra(b), P = RS(o), Z = y.useRef(!1), [j, I] = y.useState(0);
  return y.useEffect(() => {
    const N = _.current;
    if (N)
      return N.addEventListener(qg, q), () => N.removeEventListener(qg, q);
  }, [
    q
  ]), /* @__PURE__ */ y.createElement(rM, {
    scope: o,
    orientation: l,
    dir: k,
    loop: c,
    currentTabStopId: T,
    onItemFocus: y.useCallback(
      (N) => O(N),
      [
        O
      ]
    ),
    onItemShiftTab: y.useCallback(
      () => M(!0),
      []
    ),
    onFocusableItemAdd: y.useCallback(
      () => I(
        (N) => N + 1
      ),
      []
    ),
    onFocusableItemRemove: y.useCallback(
      () => I(
        (N) => N - 1
      ),
      []
    )
  }, /* @__PURE__ */ y.createElement(Jt.div, rt({
    tabIndex: z || j === 0 ? -1 : 0,
    "data-orientation": l
  }, E, {
    ref: R,
    style: {
      outline: "none",
      ...n.style
    },
    onMouseDown: xt(n.onMouseDown, () => {
      Z.current = !0;
    }),
    onFocus: xt(n.onFocus, (N) => {
      const J = !Z.current;
      if (N.target === N.currentTarget && J && !z) {
        const Ce = new CustomEvent(qg, eM);
        if (N.currentTarget.dispatchEvent(Ce), !Ce.defaultPrevented) {
          const ne = P().filter(
            (se) => se.focusable
          ), re = ne.find(
            (se) => se.active
          ), we = ne.find(
            (se) => se.id === T
          ), oe = [
            re,
            we,
            ...ne
          ].filter(Boolean).map(
            (se) => se.ref.current
          );
          TS(oe);
        }
      }
      Z.current = !1;
    }),
    onBlur: xt(
      n.onBlur,
      () => M(!1)
    )
  })));
}), sM = "RovingFocusGroupItem", lM = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeRovingFocusGroup: o, focusable: l = !0, active: c = !1, tabStopId: p, ...d } = n, v = cc(), w = p || v, b = aM(sM, o), E = b.currentTabStopId === w, _ = RS(o), { onFocusableItemAdd: R, onFocusableItemRemove: k } = b;
  return y.useEffect(() => {
    if (l)
      return R(), () => k();
  }, [
    l,
    R,
    k
  ]), /* @__PURE__ */ y.createElement(ty.ItemSlot, {
    scope: o,
    id: w,
    focusable: l,
    active: c
  }, /* @__PURE__ */ y.createElement(Jt.span, rt({
    tabIndex: E ? 0 : -1,
    "data-orientation": b.orientation
  }, d, {
    ref: a,
    onMouseDown: xt(n.onMouseDown, (T) => {
      l ? b.onItemFocus(w) : T.preventDefault();
    }),
    onFocus: xt(
      n.onFocus,
      () => b.onItemFocus(w)
    ),
    onKeyDown: xt(n.onKeyDown, (T) => {
      if (T.key === "Tab" && T.shiftKey) {
        b.onItemShiftTab();
        return;
      }
      if (T.target !== T.currentTarget)
        return;
      const O = dM(T, b.orientation, b.dir);
      if (O !== void 0) {
        T.preventDefault();
        let M = _().filter(
          (q) => q.focusable
        ).map(
          (q) => q.ref.current
        );
        if (O === "last")
          M.reverse();
        else if (O === "prev" || O === "next") {
          O === "prev" && M.reverse();
          const q = M.indexOf(T.currentTarget);
          M = b.loop ? fM(M, q + 1) : M.slice(q + 1);
        }
        setTimeout(
          () => TS(M)
        );
      }
    })
  })));
}), uM = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function cM(n, a) {
  return a !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
function dM(n, a, o) {
  const l = cM(n.key, o);
  if (!(a === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(l)) && !(a === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(l)))
    return uM[l];
}
function TS(n) {
  const a = document.activeElement;
  for (const o of n)
    if (o === a || (o.focus(), document.activeElement !== a))
      return;
}
function fM(n, a) {
  return n.map(
    (o, l) => n[(a + l) % n.length]
  );
}
const pM = iM, hM = lM, $S = "Tabs", [vM, yz] = uc($S, [
  kS
]), DS = kS(), [mM, Sy] = vM($S), gM = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeTabs: o, value: l, onValueChange: c, defaultValue: p, orientation: d = "horizontal", dir: v, activationMode: w = "automatic", ...b } = n, E = fy(v), [_, R] = Yf({
    prop: l,
    onChange: c,
    defaultProp: p
  });
  return /* @__PURE__ */ y.createElement(mM, {
    scope: o,
    baseId: cc(),
    value: _,
    onValueChange: R,
    orientation: d,
    dir: E,
    activationMode: w
  }, /* @__PURE__ */ y.createElement(Jt.div, rt({
    dir: E,
    "data-orientation": d
  }, b, {
    ref: a
  })));
}), yM = "TabsList", bM = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeTabs: o, loop: l = !0, ...c } = n, p = Sy(yM, o), d = DS(o);
  return /* @__PURE__ */ y.createElement(pM, rt({
    asChild: !0
  }, d, {
    orientation: p.orientation,
    dir: p.dir,
    loop: l
  }), /* @__PURE__ */ y.createElement(Jt.div, rt({
    role: "tablist",
    "aria-orientation": p.orientation
  }, c, {
    ref: a
  })));
}), CM = "TabsTrigger", wM = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeTabs: o, value: l, disabled: c = !1, ...p } = n, d = Sy(CM, o), v = DS(o), w = OS(d.baseId, l), b = LS(d.baseId, l), E = l === d.value;
  return /* @__PURE__ */ y.createElement(hM, rt({
    asChild: !0
  }, v, {
    focusable: !c,
    active: E
  }), /* @__PURE__ */ y.createElement(Jt.button, rt({
    type: "button",
    role: "tab",
    "aria-selected": E,
    "aria-controls": b,
    "data-state": E ? "active" : "inactive",
    "data-disabled": c ? "" : void 0,
    disabled: c,
    id: w
  }, p, {
    ref: a,
    onMouseDown: xt(n.onMouseDown, (_) => {
      !c && _.button === 0 && _.ctrlKey === !1 ? d.onValueChange(l) : _.preventDefault();
    }),
    onKeyDown: xt(n.onKeyDown, (_) => {
      [
        " ",
        "Enter"
      ].includes(_.key) && d.onValueChange(l);
    }),
    onFocus: xt(n.onFocus, () => {
      const _ = d.activationMode !== "manual";
      !E && !c && _ && d.onValueChange(l);
    })
  })));
}), SM = "TabsContent", _M = /* @__PURE__ */ y.forwardRef((n, a) => {
  const { __scopeTabs: o, value: l, forceMount: c, children: p, ...d } = n, v = Sy(SM, o), w = OS(v.baseId, l), b = LS(v.baseId, l), E = l === v.value, _ = y.useRef(E);
  return y.useEffect(() => {
    const R = requestAnimationFrame(
      () => _.current = !1
    );
    return () => cancelAnimationFrame(R);
  }, []), /* @__PURE__ */ y.createElement(
    G5,
    {
      present: c || E
    },
    ({ present: R }) => /* @__PURE__ */ y.createElement(Jt.div, rt({
      "data-state": E ? "active" : "inactive",
      "data-orientation": v.orientation,
      role: "tabpanel",
      "aria-labelledby": w,
      hidden: !R,
      id: b,
      tabIndex: 0
    }, d, {
      ref: a,
      style: {
        ...n.style,
        animationDuration: _.current ? "0s" : void 0
      }
    }), R && p)
  );
});
function OS(n, a) {
  return `${n}-trigger-${a}`;
}
function LS(n, a) {
  return `${n}-content-${a}`;
}
const xM = gM, EM = bM, RM = wM, kM = _M;
var TM = "_1bc2uou0", $M = "_1bc2uou1";
const DM = ({ className: n, tabs: a, defaultValue: o }) => {
  var l;
  return a.length ? /* @__PURE__ */ C.jsxs(
    xM,
    {
      className: lt("sid-tabs", n),
      defaultValue: o ?? ((l = a[0]) == null ? void 0 : l.id),
      children: [
        /* @__PURE__ */ C.jsx(EM, { className: TM, "aria-label": "SlashID Tabs", children: a.map(({ id: c, title: p }) => /* @__PURE__ */ C.jsx(RM, { className: $M, value: c, children: p }, c)) }),
        a.map(({ id: c, content: p }) => /* @__PURE__ */ C.jsx(kM, { value: c, children: p }, c))
      ]
    }
  ) : null;
};
class W2 {
  constructor() {
    Hw(this, "data", /* @__PURE__ */ new Map());
  }
  clear() {
    this.data.clear();
  }
  getItem(a) {
    return this.data.get(String(a)) ?? null;
  }
  removeItem(a) {
    this.data.delete(String(a));
  }
  key(a) {
    return Array.from(this.data.keys())[Number(a)] ?? null;
  }
  setItem(a, o) {
    this.data.set(String(a), String(o));
  }
  get length() {
    return this.data.size;
  }
}
var Xf = function() {
  return Xf = Object.assign || function(a) {
    for (var o, l = 1, c = arguments.length; l < c; l++) {
      o = arguments[l];
      for (var p in o)
        Object.prototype.hasOwnProperty.call(o, p) && (a[p] = o[p]);
    }
    return a;
  }, Xf.apply(this, arguments);
};
function OM(n, a) {
  return Object.prototype.hasOwnProperty.call(n, a);
}
function LM(n) {
  return n.replace(/[.*+?^$|[\](){}\\-]/g, "\\$&");
}
function AM(n) {
  var a = n.charAt(n.length - 1), o = parseInt(n, 10), l = /* @__PURE__ */ new Date();
  switch (a) {
    case "Y":
      l.setFullYear(l.getFullYear() + o);
      break;
    case "M":
      l.setMonth(l.getMonth() + o);
      break;
    case "D":
      l.setDate(l.getDate() + o);
      break;
    case "h":
      l.setHours(l.getHours() + o);
      break;
    case "m":
      l.setMinutes(l.getMinutes() + o);
      break;
    case "s":
      l.setSeconds(l.getSeconds() + o);
      break;
    default:
      l = new Date(n);
  }
  return l;
}
function MM(n) {
  for (var a = "", o = 0, l = Object.keys(n); o < l.length; o++) {
    var c = l[o];
    if (/^expires$/i.test(c)) {
      var p = n[c], d = void 0;
      typeof p == "object" ? d = p : (p += typeof p == "number" ? "D" : "", d = AM(String(p))), a += ";".concat(c, "=").concat(d.toUTCString());
    } else
      /^secure|partitioned$/.test(c) ? n[c] && (a += ";".concat(c)) : a += ";".concat(c, "=").concat(n[c]);
  }
  return OM(n, "path") || (a += ";path=/"), a;
}
function qM(n, a) {
  if (a === void 0 && (a = decodeURIComponent), typeof n != "string" || !n)
    return null;
  var o = new RegExp("(?:^|; )".concat(LM(n), "(?:=([^;]*))?(?:;|$)")), l = o.exec(document.cookie);
  return l === null ? null : typeof a == "function" ? a(l[1]) : l[1];
}
function zg(n) {
  n === void 0 && (n = decodeURIComponent);
  for (var a = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g, o = {}, l; l = a.exec(document.cookie); )
    a.lastIndex = l.index + l.length - 1, o[l[1]] = typeof n == "function" ? n(l[2]) : l[2];
  return o;
}
function AS(n, a, o, l) {
  o === void 0 && (o = encodeURIComponent), typeof o == "object" && o !== null && (l = o, o = encodeURIComponent);
  var c = MM(l || {}), p = typeof o == "function" ? o(a) : a, d = "".concat(n, "=").concat(p).concat(c);
  document.cookie = d;
}
function K2(n, a) {
  var o = { expires: -1 };
  return a && (o = Xf(Xf({}, a), o)), AS(n, "a", o);
}
class zM {
  clear() {
    const a = zg(), o = Object.keys(a);
    for (const l of o)
      K2(String(l));
  }
  getItem(a) {
    return qM(String(a));
  }
  removeItem(a) {
    K2(String(a));
  }
  key(a) {
    return [...Object.keys(zg())][Number(a)] ?? null;
  }
  setItem(a, o) {
    AS(String(a), String(o));
  }
  get length() {
    return Object.keys(zg()).length;
  }
}
async function IM({
  user: n,
  sid: a,
  middleware: o
}) {
  return o === void 0 ? n : (Array.isArray(o) ? o : [o]).reduce((c, p) => c.then((d) => p({ user: d, sid: a })), Promise.resolve(n));
}
const MS = {
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
}, _y = y.createContext(MS);
_y.displayName = "SlashIDContext";
const zf = "@slashid/USER_TOKEN", NM = (n) => {
  switch (n) {
    case "memory":
      return new W2();
    case "localStorage":
      return window.localStorage;
    case "cookie":
      return new zM();
    default:
      return new W2();
  }
}, PM = ({
  oid: n,
  initialToken: a,
  tokenStorage: o = "memory",
  baseApiUrl: l,
  sdkUrl: c,
  analyticsEnabled: p,
  themeProps: d,
  children: v
}) => {
  const [w, b] = y.useState(n), [E, _] = y.useState(a), [R, k] = y.useState(MS.sdkState), [T, O] = y.useState(void 0), z = y.useRef(void 0), M = y.useRef(void 0), q = y.useCallback(
    async ({ oid: ne }) => {
      if (!T)
        return;
      const re = await T.getTokenForOrganization(ne);
      _(re), b(ne), k("initial");
    },
    [T]
  ), P = y.useCallback(
    (ne) => {
      var re, we;
      if (R !== "initial") {
        O(ne), (re = z.current) == null || re.setItem(zf, ne.token);
        try {
          (we = M.current) == null || we.getAnalytics().identify(ne);
        } catch {
        }
        ne.oid !== w && q({ oid: ne.oid });
      }
    },
    [R, q, w]
  ), Z = y.useCallback(() => {
    var ne, re;
    if (R !== "initial" && ((ne = z.current) == null || ne.removeItem(zf), !!T)) {
      try {
        (re = M.current) == null || re.getAnalytics().logout();
      } catch {
      }
      T.logout(), O(void 0), b(n);
    }
  }, [R, T, n]), j = y.useCallback(
    async ({ factor: ne, handle: re }, { middleware: we } = {}) => {
      if (R === "initial")
        return;
      const le = M.current;
      if (le)
        try {
          const oe = ne.method === "oidc" || re === void 0 ? null : {
            type: re.type,
            value: re.value
          }, se = await le.id(w, oe, ne).then(async (ge) => IM({ user: ge, sid: le, middleware: we }));
          return P(se), se;
        } catch (oe) {
          throw Z(), oe;
        }
    },
    [w, R, P, Z]
  ), I = y.useCallback(
    async ({ handle: ne, factor: re }) => {
      if (!(R === "initial" || !T))
        return await T.mfa(ne, re), T;
    },
    [T, R]
  ), N = y.useCallback(
    async ({ factor: ne, handle: re }) => {
      var we;
      if (!(R !== "ready" || !M.current))
        return (we = M.current) == null ? void 0 : we.recover({ factor: ne, handle: re });
    },
    [R]
  ), J = y.useCallback(async (ne) => {
    const re = new Zu(ne, M.current);
    try {
      return (await re.validateToken()).valid;
    } catch (we) {
      return console.error(we), !1;
    }
  }, []);
  y.useEffect(() => {
    if (R === "initial") {
      const ne = new ac({
        oid: w,
        ...l && { baseURL: l },
        ...c && { sdkURL: c },
        ...p && { analyticsEnabled: p }
      }), re = NM(o);
      z.current = re, M.current = ne, k("loaded");
    }
  }, [w, l, c, R, o, p]), y.useEffect(() => {
    if (R !== "loaded")
      return;
    const ne = M.current, re = z.current, we = async () => {
      try {
        const se = await ne.getUserFromURL();
        return se ? (P(new Zu(se.token, M.current)), !0) : !1;
      } catch (se) {
        return console.error(se), !1;
      }
    }, le = async () => {
      const se = re.getItem(zf);
      return se ? await J(se) ? (P(new Zu(se, M.current)), !0) : (re.removeItem(zf), !1) : !1;
    }, oe = async () => {
      E ? P(new Zu(E, M.current)) : await we() || await le(), k("ready");
    };
    k("retrievingToken"), oe();
  }, [R, E, P, J]);
  const Ce = y.useMemo(() => R === "initial" ? {
    sid: void 0,
    user: T,
    sdkState: R,
    logOut: Z,
    logIn: j,
    mfa: I,
    recover: N,
    validateToken: J,
    __switchOrganizationInContext: q
  } : {
    sid: M.current,
    user: T,
    sdkState: R,
    logOut: Z,
    logIn: j,
    mfa: I,
    recover: N,
    validateToken: J,
    __switchOrganizationInContext: q
  }, [
    R,
    T,
    Z,
    j,
    I,
    N,
    J,
    q
  ]);
  return /* @__PURE__ */ C.jsx(_y.Provider, { value: Ce, children: /* @__PURE__ */ C.jsx(P$, { ...d, children: v }) });
};
function cp() {
  const n = dt.useContext(_y), a = y.useMemo(
    () => n.sdkState !== "ready",
    [n.sdkState]
  ), o = y.useMemo(
    () => n.user !== void 0,
    [n.user]
  );
  return {
    ...n,
    isLoading: a,
    isAuthenticated: o
  };
}
function qS(n) {
  if (n instanceof Error)
    return n;
  let a = "[Unable to stringify the thrown value]";
  try {
    a = JSON.stringify(n);
  } catch {
  }
  return new Error(
    `This value was thrown as is, not through an Error: ${a}`
  );
}
const UM = [
  "webauthn",
  "otp_via_email",
  "email_link",
  "password"
], FM = ["otp_via_sms", "sms_link", "password"], VM = ["oidc", "saml"];
function HM(n) {
  const a = /* @__PURE__ */ new Set();
  return UM.includes(n.method) && a.add("email_address"), FM.includes(n.method) && a.add("phone_number"), a;
}
function xy(n) {
  const a = /* @__PURE__ */ new Set();
  return n.forEach((o) => {
    HM(o).forEach(
      (l) => a.add(l)
    );
  }), Array.from(a);
}
function BM(n, a) {
  return n.filter(
    (o) => xy([o]).includes(a)
  );
}
function zS(n) {
  return n.method === "otp_via_email";
}
function IS(n) {
  return n.method === "otp_via_sms";
}
function jM(n) {
  return zS(n) || IS(n);
}
function GM(n) {
  return NS(n);
}
function NS(n) {
  return n.method === "password";
}
function PS(n) {
  return n.method === "oidc";
}
function ny(n) {
  return VM.includes(n.method);
}
function YM(n) {
  return n.method === "email_link";
}
function WM(n) {
  return n.method === "sms_link";
}
function US(n) {
  return n.method !== "oidc";
}
function KM(n) {
  return n.some(ny) && n.some((a) => !ny(a));
}
function Ig(n, a) {
  if (!(!n || n.type !== a))
    return n.value;
}
function ZM(n) {
  for (const a of dy())
    if (n.startsWith(a.dial_code))
      return {
        dialCode: a.dial_code,
        number: n.substring(a.dial_code.length).trim(),
        countryCode: P5(a.dial_code).code
      };
}
const Z2 = (n) => ({
  status: "initial",
  logIn: (a, o) => {
    n({ type: "sid_login", config: a, options: o });
  }
}), Q2 = (n, a, o, l) => {
  function c() {
    return o(a.config, a.options).then((d) => {
      n(d ? { type: "sid_login.success", user: d } : {
        type: "sid_login.error",
        error: new Error("User not returned from /id")
      });
    }).catch((d) => {
      n({ type: "sid_login.error", error: d });
    });
  }
  async function p() {
    if (!(!GM(a.config.factor) || !a.config.handle))
      try {
        return await l({
          factor: a.config.factor,
          handle: a.config.handle
        });
      } catch (d) {
        n({ type: "sid_login.error", error: qS(d) });
      }
  }
  return {
    status: "authenticating",
    context: {
      attempt: a.attempt,
      config: a.config,
      options: a.options
    },
    retry: () => {
      n({ type: "sid_retry", context: a });
    },
    recover: p,
    cancel: () => {
      n({ type: "sid_cancel" });
    },
    entry: c
  };
}, QM = () => ({
  status: "success"
}), XM = (n, a) => ({
  status: "error",
  context: a,
  retry: () => {
    n({ type: "sid_retry", context: a });
  },
  cancel: () => {
    n({ type: "sid_cancel" });
  }
});
function JM(n = {}) {
  let a, o, l = [];
  const c = (_) => {
    E(_);
  };
  let p = Z2(c);
  const d = [{ state: p, event: { type: "sid_init" } }], { onSuccess: v, onError: w } = n;
  function b(_, R) {
    p = _, d.push({ state: p, event: R }), typeof p.entry == "function" && p.entry(), l.forEach((k) => k(p, R));
  }
  async function E(_) {
    switch (_.type) {
      case "sid_login":
        if (!a || !o)
          break;
        const R = {
          config: _.config,
          options: _.options,
          attempt: 1
        };
        b(
          Q2(c, R, a, o),
          _
        );
        break;
      case "sid_login.success":
        typeof v == "function" && v(_.user), b(QM(), _);
        break;
      case "sid_login.error":
        if (p.status !== "authenticating")
          break;
        const k = {
          ...p.context,
          error: qS(_.error)
        };
        typeof w == "function" && w(_.error, k), b(XM(c, k), _);
        break;
      case "sid_retry":
        if (!a || !o)
          break;
        const T = {
          config: _.context.config,
          options: _.context.options,
          attempt: _.context.attempt + 1
        };
        b(
          Q2(c, T, a, o),
          _
        );
        break;
      case "sid_cancel":
        b(Z2(c), _);
        break;
    }
  }
  return {
    history: d,
    unsubscribe: (_) => {
      l = l.filter((R) => R === _);
    },
    subscribe: (_) => {
      l.push(_);
    },
    // SDK is instantiated asynchronously, so we need to set the logIn and recover functions when it is ready
    setLogIn: (_) => {
      a = _;
    },
    setRecover: (_) => {
      o = _;
    },
    state: p
  };
}
function eq(n = {}) {
  const { logIn: a, mfa: o, recover: l, user: c, sdkState: p } = cp(), d = y.useRef(JM(n)), [v, w] = y.useState(d.current.state);
  return y.useEffect(() => {
    const b = d.current;
    return b.subscribe(w), () => b.unsubscribe(w);
  }, []), y.useEffect(() => {
    p === "ready" && d.current.setRecover(l);
  }, [l, p]), y.useEffect(() => {
    c ? d.current.setLogIn(o) : d.current.setLogIn(a);
  }, [a, o, c]), v;
}
const Qn = (n) => /* @__PURE__ */ C.jsx(JO, { ...n });
function FS(n, a = !1) {
  switch (n.method) {
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
      return a ? {
        message: "authenticating.submitting.message.smsOtp",
        title: "authenticating.submitting.title.smsOtp"
      } : {
        message: "authenticating.message.smsOtp",
        title: "authenticating.title.smsOtp"
      };
    case "otp_via_email":
      return a ? {
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
const VS = {
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
}, ry = {
  text: VS,
  factors: [{ method: "webauthn" }, { method: "email_link" }],
  logo: /* @__PURE__ */ C.jsx(N5, {}),
  storeLastHandle: !1,
  showBanner: !0,
  defaultCountryCode: "US"
}, Ey = y.createContext(ry);
Ey.displayName = "SlashIDConfigurationContext";
const HS = ({
  text: n,
  children: a,
  ...o
}) => {
  const l = y.useMemo(() => ({
    ...ry,
    ...o,
    text: n ? { ...VS, ...n } : ry.text
  }), [o, n]);
  return /* @__PURE__ */ C.jsx(Ey.Provider, { value: l, children: /* @__PURE__ */ C.jsx(QO, { text: l.text, children: a }) });
};
function en() {
  return dt.useContext(Ey);
}
const al = () => y.useContext(s5), tq = new RegExp(
  "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[-\b\v\f-!#-[]-]|\\[-	\v\f-])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[-\b\v\f-!-ZS-]|\\[-	\v\f-])+)\\])"
), BS = 6, nq = (n) => !(typeof n != "string" || n === ""), rq = (n) => typeof n != "string" || n === "" ? !1 : tq.test(n), X2 = (n) => !(Number.isNaN(Number(n)) || n.length !== BS);
function aq(n) {
  return `authenticating.setPassword.validation.${n.failedRules[0].name}`;
}
function iq({
  errorEvent: n,
  password: a
}) {
  const o = n.failedRules[0];
  let l = "";
  if (o.matchType === "must_not_match") {
    const c = o.regexp.exec(a);
    l = c !== null ? c[0] : "";
  }
  return l ? {
    ILLEGAL_SEQUENCE: l
  } : {};
}
var oq = "_1xl24760";
const Ry = ({ name: n }) => {
  const { errors: a } = al(), o = a[n];
  return o ? /* @__PURE__ */ C.jsx("span", { "data-testid": "sid-form-error-message", className: oq, children: o.message }) : null;
};
var sq = "h1jwma3", lq = "h1jwma1", uq = "h1jwma2", cq = "h1jwma4", dq = "h1jwma0";
const pc = () => /* @__PURE__ */ C.jsx(dc, { children: /* @__PURE__ */ C.jsx(q5, {}) }), ky = () => /* @__PURE__ */ C.jsx(dc, { children: /* @__PURE__ */ C.jsx(dD, {}) }), Ty = () => /* @__PURE__ */ C.jsx(dc, { children: /* @__PURE__ */ C.jsx(uD, {}) }), $y = ({ onCancel: n }) => {
  const { text: a } = en();
  return /* @__PURE__ */ C.jsx(
    np,
    {
      className: ra({ marginBottom: "4" }),
      testId: "sid-form-authenticating-cancel-button",
      variant: "back",
      onClick: n,
      children: a["authenticating.back"]
    }
  );
}, jS = ({ onRetry: n }) => {
  const { text: a } = en();
  return /* @__PURE__ */ C.jsxs("div", { className: dq, children: [
    /* @__PURE__ */ C.jsx(
      Qn,
      {
        variant: { size: "sm", color: "tertiary", weight: "semibold" },
        t: "authenticating.retryPrompt"
      }
    ),
    /* @__PURE__ */ C.jsx(
      np,
      {
        className: ra({ marginLeft: "1" }),
        type: "button",
        testId: "sid-form-authenticating-retry-button",
        onClick: n,
        children: a["authenticating.retry"]
      }
    )
  ] });
}, fq = ({ factor: n }) => YM(n) ? /* @__PURE__ */ C.jsx(ky, {}) : WM(n) ? /* @__PURE__ */ C.jsx(Ty, {}) : /* @__PURE__ */ C.jsx(pc, {}), pq = ({ factor: n }) => zS(n) ? /* @__PURE__ */ C.jsx(ky, {}) : IS(n) ? /* @__PURE__ */ C.jsx(Ty, {}) : /* @__PURE__ */ C.jsx(pc, {}), hq = ({ flowState: n }) => {
  const { text: a } = en(), { sid: o } = cp(), { values: l, registerField: c, registerSubmit: p } = al(), [d, v] = y.useState("initial"), w = y.useRef(null), b = n.context.config.factor, { title: E, message: _ } = FS(
    b,
    d === "submitting"
  ), R = y.useCallback(
    (T) => {
      T.preventDefault(), v("submitting"), o == null || o.publish("otpCodeSubmitted", l.otp);
    },
    [o, l]
  ), k = y.useCallback(
    (T) => {
      c("otp", {
        validator: (M) => {
          if (!X2(M))
            return { message: a["validationError.otp"] };
        }
      })({
        target: {
          value: T
        }
      });
    },
    [c, a]
  );
  return y.useEffect(() => {
    var T;
    X2(l.otp) && ((T = w.current) == null || T.click());
  }, [l]), y.useEffect(() => {
    const T = () => v("input");
    d === "initial" && (o == null || o.subscribe("otpCodeSent", T));
  }, [d, o]), /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx($y, { onCancel: () => n.cancel() }),
    /* @__PURE__ */ C.jsx(Qn, { as: "h1", t: E, variant: { size: "2xl-title", weight: "bold" } }),
    /* @__PURE__ */ C.jsx(Qn, { t: _, variant: { color: "contrast", weight: "semibold" } }),
    d === "initial" && /* @__PURE__ */ C.jsx(pq, { factor: b }),
    d === "input" && /* @__PURE__ */ C.jsxs(
      "form",
      {
        onSubmit: p(R),
        className: uq,
        children: [
          /* @__PURE__ */ C.jsx(
            gD,
            {
              shouldAutoFocus: !0,
              inputType: "number",
              value: l.otp ?? "",
              onChange: k,
              numInputs: BS
            }
          ),
          /* @__PURE__ */ C.jsx("input", { hidden: !0, type: "submit", ref: w }),
          /* @__PURE__ */ C.jsx(Ry, { name: "otp" })
        ]
      }
    ),
    d === "submitting" ? /* @__PURE__ */ C.jsx(pc, {}) : /* @__PURE__ */ C.jsx(jS, { onRetry: () => n.retry() })
  ] });
}, vq = ({
  onRecoverClick: n
}) => {
  const { text: a } = en();
  return /* @__PURE__ */ C.jsxs("div", { className: cq, children: [
    /* @__PURE__ */ C.jsx(
      Qn,
      {
        variant: { size: "sm", color: "tertiary", weight: "semibold" },
        t: "authenticating.verifyPassword.recover.prompt"
      }
    ),
    /* @__PURE__ */ C.jsx(
      np,
      {
        className: ra({ marginLeft: "1" }),
        type: "button",
        testId: "sid-form-authenticating-retry-button",
        onClick: n,
        children: a["authenticating.verifyPassword.recover.cta"]
      }
    )
  ] });
}, mq = ({
  formState: n,
  handleType: a
}) => {
  if (n === "submitting")
    return /* @__PURE__ */ C.jsx(pc, {});
  if (n === "recoverPassword") {
    if (a === "email_address")
      return /* @__PURE__ */ C.jsx(ky, {});
    if (a === "phone_number")
      return /* @__PURE__ */ C.jsx(Ty, {});
  }
  return null;
};
function gq(n, a) {
  var l, c;
  return {
    initial: {
      title: "authenticating.initial.password.title",
      message: ((l = a.context.config.handle) == null ? void 0 : l.type) === "email_address" ? "authenticating.initial.password.message.email" : "authenticating.initial.password.message.phone"
    },
    setPassword: {
      title: "authenticating.setPassword.title",
      message: "authenticating.setPassword.message"
    },
    verifyPassword: {
      title: "authenticating.verifyPassword.title",
      message: "authenticating.verifyPassword.message"
    },
    recoverPassword: ((c = a.context.config.handle) == null ? void 0 : c.type) === "email_address" ? {
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
  }[n];
}
const yq = ({ flowState: n }) => {
  var q, P, Z, j;
  const { sid: a } = cp(), { text: o } = en(), {
    values: l,
    registerField: c,
    setError: p,
    hasError: d,
    clearError: v,
    registerSubmit: w
  } = al(), [b, E] = y.useState("initial"), { title: _, message: R } = gq(b, n), k = b === "recoverPassword" ? {
    ...((q = n.context.config.handle) == null ? void 0 : q.type) === "email_address" && {
      EMAIL_ADDRESS: n.context.config.handle.value
    },
    ...((P = n.context.config.handle) == null ? void 0 : P.type) === "phone_number" && {
      PHONE_NUMBER: n.context.config.handle.value
    }
  } : void 0, T = y.useCallback(
    (I) => {
      if (I.preventDefault(), !l.password) {
        p("password", {
          message: o["authenticating.setPassword.validation.required"]
        });
        return;
      }
      if (b === "setPassword" && l.password !== l.passwordConfirm) {
        p("password", {
          message: o["authenticating.setPassword.validation.mismatch"]
        });
        return;
      }
      E("submitting"), a == null || a.publish("passwordSubmitted", l.password);
    },
    [b, p, a, o, l]
  ), O = y.useCallback(
    (I) => {
      c("password", {})(I), v("password");
    },
    [v, c]
  ), z = y.useCallback(
    (I) => {
      c("passwordConfirm", {})(I), v("password");
    },
    [v, c]
  ), M = y.useCallback(async () => {
    if (b === "verifyPassword") {
      E("recoverPassword");
      try {
        await n.recover(), E("verifyPassword");
      } catch {
      }
    }
  }, [n, b]);
  return y.useEffect(() => {
    const I = () => E("setPassword"), N = () => E("verifyPassword"), J = () => p("password", {
      message: o["authenticating.setPassword.validation.incorrect"]
    }), Ce = (ne) => p("password", {
      message: nS(
        o[aq(ne)],
        iq({
          errorEvent: ne,
          password: l.password
        })
      )
    });
    return a == null || a.subscribe("passwordSetReady", I), a == null || a.subscribe("passwordVerifyReady", N), a == null || a.subscribe("incorrectPasswordSubmitted", J), a == null || a.subscribe("invalidPasswordSubmitted", Ce), () => {
      a == null || a.unsubscribe("passwordSetReady", I), a == null || a.unsubscribe("passwordVerifyReady", N), a == null || a.unsubscribe("incorrectPasswordSubmitted", J), a == null || a.unsubscribe("invalidPasswordSubmitted", Ce);
    };
  }, [p, a, o, l]), /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx($y, { onCancel: () => n.cancel() }),
    /* @__PURE__ */ C.jsx(Qn, { as: "h1", t: _, variant: { size: "2xl-title", weight: "bold" } }),
    /* @__PURE__ */ C.jsx(
      Qn,
      {
        t: R,
        variant: { color: "contrast", weight: "semibold" },
        tokens: k
      }
    ),
    b === "initial" && /* @__PURE__ */ C.jsx(pc, {}),
    (b === "setPassword" || b === "verifyPassword") && /* @__PURE__ */ C.jsxs("form", { onSubmit: w(T), children: [
      /* @__PURE__ */ C.jsx(
        "input",
        {
          type: "hidden",
          name: "username",
          value: (Z = n.context.config.handle) == null ? void 0 : Z.value,
          autoComplete: "username"
        }
      ),
      /* @__PURE__ */ C.jsxs("div", { className: sq, children: [
        /* @__PURE__ */ C.jsx(
          y2,
          {
            id: "password-input",
            label: o["authenticating.password.label"],
            placeholder: o["authenticating.password.placeholder"],
            name: "password",
            value: l.password ?? "",
            onChange: O,
            error: d("password"),
            autoComplete: b === "setPassword" ? "new-password" : "current-password"
          }
        ),
        b === "setPassword" && /* @__PURE__ */ C.jsx(
          y2,
          {
            id: "password-input-confirm",
            label: o["authenticating.passwordConfirm.label"],
            placeholder: o["authenticating.password.placeholder"],
            name: "passwordConfirm",
            value: l.passwordConfirm ?? "",
            onChange: z,
            error: d("password"),
            className: ra({ marginTop: "4" })
          }
        ),
        /* @__PURE__ */ C.jsx(Ry, { name: "password" }),
        b === "verifyPassword" && /* @__PURE__ */ C.jsx(vq, { onRecoverClick: M })
      ] }),
      /* @__PURE__ */ C.jsx(
        Xs,
        {
          type: "submit",
          variant: "primary",
          testId: "sid-form-initial-submit-button",
          children: o["authenticating.password.submit"]
        }
      )
    ] }),
    /* @__PURE__ */ C.jsx(
      mq,
      {
        formState: b,
        handleType: (j = n.context.config.handle) == null ? void 0 : j.type
      }
    )
  ] });
}, bq = ({ flowState: n }) => {
  var c;
  const a = n.context.config.factor, { title: o, message: l } = FS(a);
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx($y, { onCancel: () => n.cancel() }),
    /* @__PURE__ */ C.jsx(Qn, { as: "h1", t: o, variant: { size: "2xl-title", weight: "bold" }, children: a.method === "oidc" ? /* @__PURE__ */ C.jsx("span", { className: lq, children: (c = a.options) == null ? void 0 : c.provider }) : void 0 }),
    /* @__PURE__ */ C.jsx(Qn, { t: l, variant: { color: "contrast", weight: "semibold" } }),
    /* @__PURE__ */ C.jsx(fq, { factor: a }),
    /* @__PURE__ */ C.jsx(jS, { onRetry: () => n.retry() })
  ] });
};
function Ng({ children: n }) {
  return /* @__PURE__ */ C.jsx("article", { "data-testid": "sid-form-authenticating-state", children: n });
}
const Cq = ({ flowState: n }) => {
  const a = n.context.config.factor;
  return jM(a) ? /* @__PURE__ */ C.jsx(Ng, { children: /* @__PURE__ */ C.jsx(hq, { flowState: n }) }) : NS(a) ? /* @__PURE__ */ C.jsx(Ng, { children: /* @__PURE__ */ C.jsx(yq, { flowState: n }) }) : /* @__PURE__ */ C.jsx(Ng, { children: /* @__PURE__ */ C.jsx(bq, { flowState: n }) });
}, wq = () => /* @__PURE__ */ C.jsx(dc, { children: /* @__PURE__ */ C.jsx(
  "svg",
  {
    width: "21",
    height: "18",
    viewBox: "0 0 21 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ C.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.8505 0.705985C20.6342 1.38283 20.7209 2.56684 20.044 3.35055L8.16908 17.1005C7.80192 17.5256 7.2635 17.7637 6.70195 17.7493C6.1404 17.7349 5.61489 17.4695 5.27002 17.0261L0.895049 11.4011C0.259296 10.5837 0.406547 9.4057 1.22394 8.76995C2.04134 8.13419 3.21935 8.28145 3.8551 9.09884L6.82592 12.9185L17.2059 0.89949C17.8828 0.115778 19.0668 0.0291434 19.8505 0.705985Z",
        fill: "white"
      }
    )
  }
) }), Sq = () => /* @__PURE__ */ C.jsxs("article", { "data-testid": "sid-form-success-state", children: [
  /* @__PURE__ */ C.jsx(
    Qn,
    {
      as: "h1",
      t: "success.title",
      variant: { size: "2xl-title", weight: "bold" }
    }
  ),
  /* @__PURE__ */ C.jsx(
    Qn,
    {
      as: "h2",
      t: "success.subtitle",
      variant: { color: "contrast", weight: "semibold" }
    }
  ),
  /* @__PURE__ */ C.jsx(wq, {})
] }), GS = dt.createContext(
  {
    flowState: null,
    lastHandle: void 0,
    submitPayloadRef: { current: {} },
    handleSubmit: () => null,
    selectedFactor: void 0,
    setSelectedFactor: () => null
  }
), il = () => dt.useContext(GS), _q = () => /* @__PURE__ */ C.jsx(dc, { variant: "red", shouldAnimate: !1, children: /* @__PURE__ */ C.jsx(fD, {}) });
function xq(n) {
  return m2.isResponseError(n) ? "response" : m2.isRateLimitError(n) ? "rateLimit" : "unknown";
}
function Eq(n) {
  switch (n) {
    case "rateLimit":
      return "error.subtitle.rateLimit";
    default:
      return "error.subtitle";
  }
}
const Dy = ({ children: n }) => {
  const { flowState: a } = il();
  return (a == null ? void 0 : a.status) !== "error" ? null : typeof n == "function" ? /* @__PURE__ */ C.jsx("div", { "data-testid": "sid-form-error-function", children: n({
    context: a.context,
    retry: a.retry,
    cancel: a.cancel
  }) }) : y.Children.count(n) > 0 ? /* @__PURE__ */ C.jsx("div", { "data-testid": "sid-form-error-children", children: n }) : /* @__PURE__ */ C.jsx(Rq, { flowState: a });
};
Dy.displayName = "Form.Error";
const Rq = ({ flowState: n }) => {
  const { text: a } = en(), o = xq(n.context.error);
  return /* @__PURE__ */ C.jsxs("article", { "data-testid": "sid-form-error-state", children: [
    /* @__PURE__ */ C.jsx(
      np,
      {
        className: ra({ marginBottom: "4" }),
        testId: "sid-form-authenticating-cancel-button",
        variant: "back",
        onClick: () => n.cancel(),
        children: a["authenticating.back"]
      }
    ),
    /* @__PURE__ */ C.jsx(
      Qn,
      {
        as: "h1",
        t: "error.title",
        variant: { size: "2xl-title", weight: "bold" }
      }
    ),
    /* @__PURE__ */ C.jsx(
      Qn,
      {
        as: "h2",
        t: Eq(o),
        variant: { color: "contrast", weight: "semibold" }
      }
    ),
    /* @__PURE__ */ C.jsx(_q, {}),
    /* @__PURE__ */ C.jsx(
      Xs,
      {
        type: "submit",
        variant: "primary",
        testId: "sid-form-error-retry-button",
        onClick: () => n.retry(),
        children: a["error.retry"]
      }
    )
  ] });
};
var kq = "_1xoz4765", Tq = "_1xoz4764", J2 = "_1xoz4763", $q = "_1xoz4762", Dq = "_1xoz4760", e5 = "_1xoz4766", Oq = "_1xoz4761";
const Lq = ({ logo: n }) => {
  if (typeof n == "string" && n)
    return /* @__PURE__ */ C.jsx(
      "img",
      {
        className: lt("sid-logo", "sid-logo--image", J2),
        src: n,
        alt: "Company logo"
      }
    );
  const a = n || /* @__PURE__ */ C.jsx(N5, {});
  return n || console.info("SlashID: No logo provided. Using default logo."), /* @__PURE__ */ C.jsx("div", { className: lt("sid-logo", "sid-logo--component", J2), children: a });
}, Oy = ({
  children: n
}) => {
  const { logo: a } = en();
  return typeof n != "function" ? /* @__PURE__ */ C.jsx(Lq, { logo: a }) : /* @__PURE__ */ C.jsx(C.Fragment, { children: n({ logo: a }) });
};
Oy.displayName = "Logo";
const Aq = {
  email_link: "factor.emailLink",
  otp_via_sms: "factor.otpViaSms",
  otp_via_email: "factor.otpViaEmail",
  sms_link: "factor.smsLink",
  webauthn: "factor.webauthn",
  password: "factor.password",
  oidc: "",
  saml: ""
}, Jf = {
  email: "email",
  phone: "phone"
}, Mq = {
  phone_number: Jf.phone,
  email_address: Jf.email
}, hc = ({ children: n }) => {
  const { factors: a, text: o } = en(), { handleSubmit: l, submitPayloadRef: c, selectedFactor: p } = il(), { registerSubmit: d } = al(), v = y.useMemo(
    () => a.filter((E) => US(E)),
    [a]
  ), w = y.useMemo(() => xy(a), [a]);
  if (v.length === 0)
    return null;
  const b = (E) => {
    if (E.preventDefault(), !c.current.handleType || !c.current.handleValue || !p)
      return;
    const { handleType: _, handleValue: R, flag: k } = c.current;
    _ === "phone_number" && !k || l(p, {
      type: _,
      value: _ === "phone_number" ? `${k.dial_code}${R}` : R
    });
  };
  return typeof n == "function" ? /* @__PURE__ */ C.jsx("div", { "data-testid": "sid-form-initial-function", children: n({ handleSubmit: l, factors: v, handleTypes: w, text: o }) }) : y.Children.count(n) > 0 ? /* @__PURE__ */ C.jsx(
    "form",
    {
      "data-testid": "sid-form-initial-children",
      onSubmit: d(b),
      children: n
    }
  ) : /* @__PURE__ */ C.jsxs(
    "form",
    {
      "data-testid": "sid-form-initial-default",
      onSubmit: d(b),
      children: [
        /* @__PURE__ */ C.jsx(Ly, {}),
        /* @__PURE__ */ C.jsx(Ay, {})
      ]
    }
  );
}, Ly = ({ children: n }) => {
  const { lastHandle: a } = il(), { factors: o, text: l } = en(), c = y.useMemo(
    () => o.filter((d) => US(d)),
    [o]
  ), p = y.useMemo(() => xy(o), [o]);
  return typeof n == "function" ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n({ factors: c, handleTypes: p }) }) : y.Children.count(n) > 0 ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n }) : p.length === 1 ? /* @__PURE__ */ C.jsx(C.Fragment, { children: /* @__PURE__ */ C.jsx(
    Pg,
    {
      factors: c,
      handleType: p[0],
      defaultValue: Ig(a, p[0])
    }
  ) }) : /* @__PURE__ */ C.jsx(
    DM,
    {
      className: ra({ marginY: "6" }),
      defaultValue: Mq[(a == null ? void 0 : a.type) ?? "email_address"],
      tabs: [
        {
          id: Jf.email,
          title: l["initial.handle.email"],
          content: /* @__PURE__ */ C.jsx(
            Pg,
            {
              factors: c,
              handleType: "email_address",
              defaultValue: Ig(
                a,
                "email_address"
              )
            }
          )
        },
        {
          id: Jf.phone,
          title: l["initial.handle.phone"],
          content: /* @__PURE__ */ C.jsx(
            Pg,
            {
              factors: c,
              handleType: "phone_number",
              defaultValue: Ig(
                a,
                "phone_number"
              )
            }
          )
        }
      ]
    }
  );
};
Ly.displayName = "Input";
const Ay = ({ children: n }) => {
  const { text: a } = en(), { status: o } = al();
  return typeof n == "function" ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n({ text: a, status: o }) }) : y.Children.count(n) > 0 ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n }) : /* @__PURE__ */ C.jsx(
    Xs,
    {
      className: ra({ marginTop: "6" }),
      type: "submit",
      variant: "primary",
      testId: "sid-form-initial-submit-button",
      disabled: o === "invalid",
      children: a["initial.submit"]
    }
  );
};
Ay.displayName = "Submit";
const Pg = ({
  handleType: n,
  factors: a,
  defaultValue: o
}) => {
  const { setSelectedFactor: l, submitPayloadRef: c } = il(), p = y.useMemo(
    () => BM(a, n).filter((z) => !PS(z)),
    [a, n]
  ), { text: d, defaultCountryCode: v } = en(), { registerField: w, values: b, resetForm: E } = al(), _ = p.length > 1, R = ZM(o ?? ""), [k, T] = y.useState(
    cy((R == null ? void 0 : R.countryCode) ?? v)
  );
  y.useEffect(() => {
    l(p[0]);
  }, [p, l]), y.useEffect(() => E, [E]), y.useEffect(() => {
    c.current.flag = k;
  }, [k, c]), y.useEffect(() => {
    const z = b[n];
    c.current = {
      ...c.current,
      handleType: n,
      handleValue: z
    };
  }, [n, c, b]);
  const O = y.useMemo(() => n === "phone_number" ? /* @__PURE__ */ C.jsx(
    ED,
    {
      className: ra({ marginTop: "4" }),
      id: `sid-input-${n}`,
      name: n,
      label: d["initial.handle.phone"],
      placeholder: d["initial.handle.phone.placeholder"],
      value: b[n] ?? "",
      flag: k,
      onChange: w(n, {
        defaultValue: R == null ? void 0 : R.number,
        validator: (z) => {
          if (!nq(z))
            return { message: d["validationError.phoneNumber"] };
        }
      }),
      onFlagChange: T
    }
  ) : /* @__PURE__ */ C.jsx(
    eD,
    {
      className: ra({ marginTop: "4" }),
      id: `sid-input-${n}`,
      name: n,
      label: d["initial.handle.email"],
      placeholder: d["initial.handle.phone.email"],
      value: b[n] ?? "",
      onChange: w(n, {
        defaultValue: o,
        validator: (z) => {
          if (!rq(z))
            return { message: d["validationError.email"] };
        }
      })
    }
  ), [
    k,
    n,
    d,
    w,
    b,
    o,
    R
  ]);
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    _ && /* @__PURE__ */ C.jsx(
      JA,
      {
        defaultValue: p[0].method,
        className: ra({ marginBottom: "3", marginTop: "6" }),
        label: d["initial.authenticationMethod"],
        items: p.map((z) => ({
          label: d[Aq[z.method]],
          value: z.method
        })),
        onChange: (z) => {
          const M = p.find((q) => q.method === z);
          l(M);
        },
        contentProps: {
          className: kq,
          position: "popper"
        }
      }
    ),
    O,
    /* @__PURE__ */ C.jsx(Ry, { name: n })
  ] });
};
hc.displayName = "Controls";
hc.Input = Ly;
hc.Submit = Ay;
const My = ({
  children: n
}) => {
  const { text: a } = en(), o = dt.useMemo(() => /* @__PURE__ */ C.jsxs("div", { className: Tq, children: [
    /* @__PURE__ */ C.jsx(
      Qn,
      {
        as: "h1",
        variant: { size: "2xl-title", weight: "bold" },
        t: "initial.title"
      }
    ),
    /* @__PURE__ */ C.jsx(
      Qn,
      {
        variant: { color: "contrast", weight: "semibold" },
        as: "h2",
        t: "initial.subtitle"
      }
    )
  ] }), []);
  return typeof n == "function" ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n({ text: a }) }) : dt.Children.count(n) > 0 ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n }) : o;
};
My.displayName = "Header";
const qq = {
  google: /* @__PURE__ */ C.jsx(oD, {}),
  facebook: /* @__PURE__ */ C.jsx(rD, {}),
  github: /* @__PURE__ */ C.jsx(aD, {}),
  gitlab: /* @__PURE__ */ C.jsx(iD, {}),
  line: /* @__PURE__ */ C.jsx(sD, {}),
  bitbucket: /* @__PURE__ */ C.jsx(nD, {}),
  azuread: /* @__PURE__ */ C.jsx(tD, {}),
  okta: /* @__PURE__ */ C.jsx(lD, {})
}, zq = {
  google: "Google",
  facebook: "Facebook",
  github: "GitHub",
  gitlab: "GitLab",
  line: "LINE",
  bitbucket: "Bitbucket",
  azuread: "Azure AD",
  okta: "Okta"
};
function Iq({ provider: n, handleClick: a }) {
  var l;
  const { text: o } = en();
  return (l = n.options) != null && l.provider_credentials_id ? /* @__PURE__ */ C.jsxs(
    Xs,
    {
      onClick: () => a({ method: "saml", options: n.options }),
      variant: "secondary",
      icon: /* @__PURE__ */ C.jsx(Nq, { logo: n.logo, id: n.options.provider_credentials_id }),
      className: lt("sid-saml--button"),
      children: [
        o["initial.sso"],
        /* @__PURE__ */ C.jsx("span", { className: Oq, children: n.label || "SAML" })
      ]
    }
  ) : null;
}
function Nq({ logo: n, id: a }) {
  return n ? typeof n == "string" ? /* @__PURE__ */ C.jsx(
    "img",
    {
      className: lt("sid-sso-logo", `sid-sso-logo--${a}`, e5),
      src: n,
      alt: "SSO provider logo"
    }
  ) : /* @__PURE__ */ C.jsx(
    "div",
    {
      className: lt("sid-sso-logo", `sid-sso-logo--${a}`, e5),
      children: n
    }
  ) : null;
}
function Pq({ provider: n, handleClick: a }) {
  var l, c, p;
  const { text: o } = en();
  return (l = n.options) != null && l.provider ? /* @__PURE__ */ C.jsxs(
    Xs,
    {
      onClick: () => a({ method: "oidc", options: n.options }),
      variant: "secondary",
      icon: qq[(c = n.options) == null ? void 0 : c.provider],
      className: lt("sid-oidc--button"),
      children: [
        o["initial.oidc"],
        /* @__PURE__ */ C.jsx("span", { className: Dq, children: n.label || zq[(p = n.options) == null ? void 0 : p.provider] })
      ]
    }
  ) : null;
}
function YS({ providers: n, handleClick: a }) {
  return n.length ? /* @__PURE__ */ C.jsx(
    "div",
    {
      className: lt(
        "sid-form-sso",
        ra({ marginTop: "4" }),
        $q
      ),
      children: n.map((o) => {
        var l, c;
        switch (o.method) {
          case "oidc":
            return /* @__PURE__ */ C.jsx(
              Pq,
              {
                provider: o,
                handleClick: a
              },
              (l = o.options) == null ? void 0 : l.client_id
            );
          case "saml":
            return /* @__PURE__ */ C.jsx(
              Iq,
              {
                provider: o,
                handleClick: a
              },
              (c = o.options) == null ? void 0 : c.provider_credentials_id
            );
          default:
            throw new Error("unsupported SSO method");
        }
      })
    }
  ) : null;
}
const WS = ({
  children: n
}) => {
  const { factors: a } = en(), { handleSubmit: o } = il(), l = a.filter(PS), c = dt.useMemo(() => /* @__PURE__ */ C.jsx(YS, { providers: l, handleClick: o }), [o, l]);
  return typeof n == "function" ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n({ factors: l, handleClick: o }) }) : dt.Children.count(n) > 0 ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n }) : c;
};
WS.displayName = "OIDC";
const qy = ({
  children: n
}) => {
  const { factors: a } = en(), { handleSubmit: o } = il(), l = a.filter(ny), c = dt.useMemo(() => /* @__PURE__ */ C.jsx(YS, { providers: l, handleClick: o }), [o, l]);
  return typeof n == "function" ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n({ factors: l, handleClick: o }) }) : dt.Children.count(n) > 0 ? /* @__PURE__ */ C.jsx(C.Fragment, { children: n }) : c;
};
qy.displayName = "SSO";
const Po = () => {
  const { factors: n, text: a } = en(), o = y.useMemo(
    () => KM(n),
    [n]
  );
  return /* @__PURE__ */ C.jsxs("article", { "data-testid": "sid-form-initial-state", children: [
    /* @__PURE__ */ C.jsx(Oy, {}),
    /* @__PURE__ */ C.jsx(My, {}),
    /* @__PURE__ */ C.jsx(hc, {}),
    o && /* @__PURE__ */ C.jsx(TD, { children: a["initial.divider"] }),
    /* @__PURE__ */ C.jsx(qy, {})
  ] });
};
Po.Logo = Oy;
Po.Header = My;
Po.Controls = hc;
Po.OIDC = WS;
Po.SSO = qy;
var Uq = "gwp8o20";
var Fq = "_1iedw350";
const Vq = () => /* @__PURE__ */ C.jsx(
  Qn,
  {
    className: Fq,
    t: "footer.branding",
    variant: { size: "xs", weight: "semibold" }
  }
), Hq = ["email_address", "phone_number"], Bq = (n) => {
  if (!n || Array.isArray(n) || typeof n != "object")
    return !1;
  const { type: a, value: o } = n;
  return Hq.includes(a) ? typeof o == "string" : !1;
}, t5 = "@slashid/LAST_HANDLE", jq = () => {
  const { storeLastHandle: n } = en(), { sid: a } = cp(), o = y.useMemo(() => {
    if (Wg())
      try {
        const c = window.localStorage.getItem(t5);
        return !n || !c ? void 0 : JSON.parse(c);
      } catch {
        return;
      }
  }, [n]), l = y.useCallback(({ handle: c }) => {
    if (Wg() && Bq(c))
      try {
        window.localStorage.setItem(
          t5,
          JSON.stringify(c)
        );
      } catch {
      }
  }, []);
  return y.useEffect(() => (n && a && a.subscribe("idFlowSucceeded", l), () => {
    n && a && a.unsubscribe("idFlowSucceeded", l);
  }), [n, a, l]), { lastHandle: o };
};
function Gq({
  factors: n,
  text: a,
  children: o
}) {
  const l = en();
  return !n && !a ? /* @__PURE__ */ C.jsx(C.Fragment, { children: o }) : /* @__PURE__ */ C.jsx(
    HS,
    {
      ...l,
      text: {
        ...l.text,
        ...a
      },
      factors: n || l.factors,
      children: o
    }
  );
}
function Yq({ children: n, name: a }) {
  return /* @__PURE__ */ C.jsx("div", { className: `sid-slot-${a}`, children: n });
}
function Wq({ children: n, defaultSlots: a }) {
  return dt.useMemo(() => {
    const l = { ...a };
    return dt.Children.forEach(n, (c) => {
      if (dt.isValidElement(c)) {
        if (c.type !== Yq) {
          console.warn(`Passed a non-<Slot> component to a slot: ${c.type}`);
          return;
        }
        c.props.name in a ? l[c.props.name] = c : console.warn(
          `Passed a <Slot> with an unsupported name: ${c.props.name}`
        );
      }
    }), l;
  }, [n, a]);
}
const zy = ({
  className: n,
  onSuccess: a,
  onError: o,
  factors: l,
  text: c,
  middleware: p,
  children: d
}) => {
  const v = eq({ onSuccess: a, onError: o }), { showBanner: w } = en(), { lastHandle: b } = jq(), E = dt.useRef({
    handleType: void 0,
    handleValue: void 0,
    flag: void 0
  }), [_, R] = dt.useState(), { status: k } = v, T = dt.useMemo(() => ({
    footer: w ? /* @__PURE__ */ C.jsx(Vq, {}) : null,
    initial: k === "initial" ? /* @__PURE__ */ C.jsx(Po, {}) : void 0,
    authenticating: k === "authenticating" ? /* @__PURE__ */ C.jsx(Cq, { flowState: v }) : void 0,
    success: k === "success" ? /* @__PURE__ */ C.jsx(Sq, { flowState: v }) : void 0,
    error: k === "error" ? /* @__PURE__ */ C.jsx(Dy, {}) : void 0
  }), [k, w, v]), O = Wq({ children: d, defaultSlots: T }), z = y.useCallback(
    (M, q) => {
      v.status === "initial" && v.logIn(
        {
          factor: M,
          handle: q
        },
        { middleware: p }
      );
    },
    [v, p]
  );
  return /* @__PURE__ */ C.jsx(
    GS.Provider,
    {
      value: {
        flowState: v,
        lastHandle: b,
        handleSubmit: z,
        submitPayloadRef: E,
        selectedFactor: _,
        setSelectedFactor: R
      },
      children: /* @__PURE__ */ C.jsx("div", { className: lt("sid-form", Uq, n), children: /* @__PURE__ */ C.jsxs(Gq, { text: c, factors: l, children: [
        v.status === "initial" && /* @__PURE__ */ C.jsx(Bw, { children: O.initial }),
        v.status === "authenticating" && /* @__PURE__ */ C.jsx(Bw, { children: O.authenticating }),
        v.status === "success" && O.success,
        v.status === "error" && O.error,
        O.footer
      ] }) })
    }
  );
};
zy.Initial = Po;
zy.Error = Dy;
var KS, n5 = Js;
{
  var r5 = n5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  KS = function(n, a) {
    r5.usingClientEntryPoint = !0;
    try {
      return n5.createRoot(n, a);
    } finally {
      r5.usingClientEntryPoint = !1;
    }
  };
}
var Kq = Object.defineProperty, Zq = (n, a, o) => a in n ? Kq(n, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[a] = o, If = (n, a, o) => (Zq(n, typeof a != "symbol" ? a + "" : a, o), o);
const Qq = {
  stringify: (n) => n,
  parse: (n) => n
}, Xq = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, Jq = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, ez = {
  stringify: (n) => n.name,
  parse: (n, a) => {
    const o = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof o == "function" ? o.bind(a) : void 0;
  }
}, tz = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
}, Ug = {
  string: Qq,
  number: Xq,
  boolean: Jq,
  function: ez,
  json: tz
}, Fg = Symbol.for("r2wc.render"), Nf = Symbol.for("r2wc.connected"), qo = Symbol.for("r2wc.context"), Bi = Symbol.for("r2wc.props");
function nz(n, a, o) {
  var l, c, p;
  a.props || (a.props = n.propTypes ? Object.keys(n.propTypes) : []);
  const d = (Array.isArray(a.props) ? a.props.slice() : Object.keys(a.props)).filter((_) => _ !== "container"), v = {}, w = {}, b = {};
  for (const _ of d) {
    v[_] = Array.isArray(a.props) ? "string" : a.props[_];
    const R = rz(_);
    w[_] = R, b[R] = _;
  }
  class E extends HTMLElement {
    constructor() {
      super(), If(this, l, !0), If(this, c), If(this, p, {}), If(this, "container"), a.shadow ? this.container = this.attachShadow({
        mode: a.shadow
      }) : this.container = this, this[Bi].container = this.container;
      for (const R of d) {
        const k = w[R], T = this.getAttribute(k), O = v[R], z = Ug[O];
        T && z != null && z.parse && (this[Bi][R] = z.parse(T, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(b);
    }
    connectedCallback() {
      this[Nf] = !0, this[Fg]();
    }
    disconnectedCallback() {
      this[Nf] = !1, this[qo] && o.unmount(this[qo]), delete this[qo];
    }
    attributeChangedCallback(R, k, T) {
      const O = b[R], z = v[O], M = Ug[z];
      O in v && M != null && M.parse && (this[Bi][O] = M.parse(T, this), this[Fg]());
    }
    [(l = Nf, c = qo, p = Bi, Fg)]() {
      this[Nf] && (this[qo] ? o.update(this[qo], this[Bi]) : this[qo] = o.mount(
        this.container,
        n,
        this[Bi]
      ));
    }
  }
  for (const _ of d) {
    const R = w[_], k = v[_];
    Object.defineProperty(E.prototype, _, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Bi][_];
      },
      set(T) {
        this[Bi][_] = T;
        const O = Ug[k];
        if (O != null && O.stringify) {
          const z = O.stringify(T);
          this.getAttribute(R) !== z && this.setAttribute(R, z);
        }
      }
    });
  }
  return E;
}
function rz(n = "") {
  return n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function az(n, a, o) {
  const l = KS(n), c = dt.createElement(a, o);
  return l.render(c), {
    root: l,
    ReactComponent: a
  };
}
function iz({ root: n, ReactComponent: a }, o) {
  const l = dt.createElement(a, o);
  n.render(l);
}
function oz({ root: n }) {
  n.unmount();
}
function sz(n, a = {}) {
  return nz(n, a, { mount: az, update: iz, unmount: oz });
}
const lz = ({
  // provider
  oid: n,
  tokenStorage: a,
  baseApiUrl: o,
  sdkUrl: l,
  themeProps: c,
  analyticsEnabled: p,
  // overides
  factors: d,
  text: v,
  // form
  onSuccess: w,
  onError: b
}) => /* @__PURE__ */ C.jsx(
  PM,
  {
    oid: n,
    themeProps: c,
    baseApiUrl: o,
    sdkUrl: l,
    tokenStorage: a,
    analyticsEnabled: p,
    children: /* @__PURE__ */ C.jsx(
      HS,
      {
        factors: d,
        text: v,
        children: /* @__PURE__ */ C.jsx(
          zy,
          {
            onSuccess: w,
            onError: b
          }
        )
      }
    )
  }
), uz = sz(lz, {
  props: {
    oid: "string",
    tokenStorage: "string",
    baseApiUrl: "string",
    sdkUrl: "string",
    themeProps: "json",
    analyticsEnabled: "boolean",
    // overides
    factors: "json",
    text: "json",
    // form
    onSuccess: "function",
    onError: "function"
  }
});
customElements.define("slashid-form", uz);
//# sourceMappingURL=main.js.map
